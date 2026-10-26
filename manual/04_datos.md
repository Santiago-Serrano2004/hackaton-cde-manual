# 04 · Modelo de datos, reglas de calidad y datos de demostración

**Objetivo.** Definir el modelo relacional completo, las reglas de deduplicación y validación, los catálogos, la auditoría, la política de datos personales, el plan de datos sintéticos con las proporciones del CDE y la importación desde hojas de cálculo.

**Entradas.** `01_requisitos.md` (RF-01..28), `02_alcance_mvp.md`, cifras del TyC §5 (497 empresas, 569 atenciones, 185 comunidad UNAB = 91/77/17, 17 sectores, 180 con sector, 184 con tamaño, sectores 28/20/14/11/7 %).

**Convención.** PostgreSQL; `id` bigserial; todas las tablas con `created_at`, `updated_at`, `deleted_at` (soft delete) salvo las indicadas; FK `ON DELETE RESTRICT`. Todo lo marcado `PROPUESTA` no viene del CDE y debe confirmarse (PA-07, PA-17).

---

## 1. Diagrama lógico (texto)

```
usuarios ─< roles (spatie)      personas >─< empresas (via empresa_persona)
empresas ─< diagnosticos ─< diagnostico_respuestas
empresas ─< proyectos_aula ─< proyecto_consultores >─ personas(estudiante)
                  └─< planes_accion ─< compromisos >─ responsable (usuario/persona)
empresas ─< citas ─< atenciones
eventos ─< inscripciones >─ personas/empresas ; inscripciones ─< asistencias
empresas ─< intervenciones (historial unificado)  [vista/tabla de eventos del historial]
personas ─< puntos_movimientos ; personas ─< persona_insignias >─ insignias ; retos
auditoria (append-only) ; importaciones ─< importacion_filas
catalogos: sectores, tamanos, formalizacion, relaciones_unab, areas, estados_*, modalidades
```

## 2. Tablas

### 2.1 Núcleo de empresas y personas
| Tabla | Campos clave | Reglas |
|---|---|---|
| `empresas` | `id`, `razon_social`, `nombre_comercial`, `nit` (texto original), `nit_norm` (solo dígitos sin verificador, único parcial donde no nulo), `tipo_negocio` (texto), `sector_id` (FK nulo), `tamano_id` (FK nulo), `ingresos_rango_id` (FK nulo), `formalizacion_id` (FK nulo), `relacion_unab_id` (FK, default "externo"), `municipio`, `fecha_inicio_actividad`, `completitud` (0–100 calculado), `estado` (activa/archivada), `fusionada_en_id` (FK nulo a empresas) | `nit_norm` único; `razon_social` obligatoria; sector/tamaño pueden ser nulos pero cuentan en `completitud` (RF-04) |
| `personas` | `id`, `nombres`, `apellidos`, `correo`, `correo_norm` (minúsculas, sin puntos en gmail `PROPUESTA`), `telefono`, `documento` (cifrado, opcional), `tipo` (emprendedor/estudiante/docente/colaborador_cde), `programa_academico` (nulo), `consentimiento_id` | `correo_norm` único cuando no nulo |
| `empresa_persona` | `empresa_id`, `persona_id`, `rol` (propietario/representante/socio/contacto), `principal` (bool) | PK (empresa, persona, rol); una persona puede estar en varias empresas |
| `usuarios` | `id`, `persona_id` (único), `email`, `password` (hash), `activo`, `ultimo_acceso` | Roles vía `spatie/laravel-permission`: `administrador`, `equipo_cde`, `docente`, `estudiante_consultor`, `emprendedor` |
| `consentimientos` | `id`, `persona_id`, `version_politica`, `fecha`, `ip`, `finalidad` | Obligatorio antes de acceso del emprendedor (RNF-13) |

### 2.2 Diagnóstico
| Tabla | Campos | Reglas |
|---|---|---|
| `diagnosticos` | `id`, `empresa_id` (NOT NULL), `fecha`, `aplicado_por` (usuario), `puntaje_total`, `nivel_madurez` (inicial/básico/intermedio/avanzado `PROPUESTA`), `observaciones` | Una empresa puede tener N; evolución ordena por `fecha` |
| `dimensiones` | `id`, `nombre` (mercadeo, finanzas, operaciones, formalización, talento humano, innovación, gestión comercial `PROPUESTA`), `orden` | Catálogo; coincide con las áreas de intervención de los proyectos |
| `diagnostico_resultados` | `diagnostico_id`, `dimension_id`, `puntaje` (0–100), `brecha` (100 − puntaje, calculada), `recomendacion` | PK (diagnóstico, dimensión) |

Nota: el cuestionario real del CDE no se conoce (PA-17). `PROPUESTA`: modelar el diagnóstico como resultados por dimensión (0–100), suficiente para evolución y brechas (RF-05, RF-22).

### 2.3 Proyectos de aula y planes de acción
| Tabla | Campos | Reglas |
|---|---|---|
| `proyectos_aula` | `id`, `empresa_id` (NOT NULL), `asignatura`, `docente_id` (persona tipo docente), `area_id` (FK `dimensiones`), `estado_id`, `semestre` (ej. `2026-2`), `fecha_inicio`, `fecha_fin`, `resultado_resumen` | Varios por empresa y por semestre (proyectos integradores) |
| `proyecto_consultores` | `proyecto_id`, `persona_id` (estudiante), `rol` | N:M |
| `planes_accion` | `id`, `empresa_id` (NOT NULL), `origen` (diagnóstico/proyecto/cita), `origen_id`, `titulo`, `estado` | Un plan por origen; opcional |
| `compromisos` | `id`, `plan_id`, `descripcion`, `responsable_persona_id` (NOT NULL), `fecha_compromiso` (NOT NULL), `estado` (pendiente/en_curso/cumplido/vencido/cancelado), `avance` (0–100), `resultado`, `fecha_cierre` | `vencido` se calcula si fecha < hoy y estado no cierra (vista) |

### 2.4 Citas y atenciones
| Tabla | Campos | Reglas |
|---|---|---|
| `citas` | `id`, `empresa_id` (NOT NULL), `solicitante_persona_id`, `tema_area_id`, `modalidad` (presencial/virtual), `franja_solicitada`, `fecha_hora` (nula hasta agendar), `asesor_usuario_id`, `estado` (solicitada/agendada/realizada/cancelada/no_asistio) | Transiciones válidas definidas en `05` |
| `atenciones` | `id`, `cita_id` (nulo), `empresa_id` (NOT NULL), `fecha`, `tipo` (asesoría/seguimiento/otra), `notas`, `acuerdos`, `registrada_por` | Una atención sin cita es posible (atención espontánea); las 569 atenciones del TyC se modelan aquí |
| `recordatorios` | `id`, `tipo` (cita/compromiso/evento), `referencia_id`, `destinatario_persona_id`, `programado_para`, `enviado_en`, `canal`, `estado` (pendiente/enviado/fallido), `error` | Generados automáticamente al agendar (RF-09); sin `deleted_at`, solo estado |

### 2.5 Capacitaciones y eventos
| Tabla | Campos | Reglas |
|---|---|---|
| `eventos` | `id`, `tipo` (capacitación/evento/conversatorio/networking), `titulo`, `descripcion`, `tema_area_id`, `sectores_objetivo` (N:M `evento_sector`), `tamanos_objetivo` (N:M), `fecha_inicio`, `fecha_fin`, `lugar`, `modalidad`, `cupo`, `estado` (borrador/publicado/cerrado/realizado/cancelado), `codigo_asistencia` | Cupos > 0 |
| `inscripciones` | `id`, `evento_id`, `persona_id`, `empresa_id` (NOT NULL), `estado` (inscrito/lista_espera/cancelado), `fecha` | Único (evento, persona) |
| `asistencias` | `id`, `inscripcion_id` (nula si llegó sin inscripción), `evento_id`, `persona_id`, `empresa_id`, `metodo` (qr/manual), `registrada_en` | Único (evento, persona) |
| `convocatorias` | `id`, `evento_id`, `filtro_json`, `enviadas`, `creada_por`, `fecha` | RF-27 (Should) |

### 2.6 Historial unificado
`intervenciones` (vista materializada o tabla de eventos, `PROPUESTA`): `id`, `empresa_id`, `tipo` (diagnóstico/proyecto/plan/cita/atención/inscripción/asistencia/puntos), `ref_tipo`, `ref_id`, `fecha`, `titulo`, `detalle_json`, `visible_emprendedor` (bool). **Se alimenta por eventos de dominio** (cada Action que crea algo emite el evento; nadie registra dos veces — RF-14, RES-07). Decisión: tabla actualizada por *listeners* para lectura rápida (ED).

### 2.7 Gamificación
| Tabla | Campos | Reglas |
|---|---|---|
| `retos` | `id`, `codigo`, `titulo`, `descripcion`, `tipo` (asistir_evento/completar_ficha/cumplir_compromiso/agendar_cita/completar_diagnóstico/racha), `puntos`, `repetible` (bool), `max_por_periodo`, `activo` | Reglas en `06` |
| `puntos_movimientos` | `id`, `persona_id`, `reto_id`, `puntos`, `motivo`, `ref_tipo`, `ref_id`, `creado_en` | Append-only; único (persona, reto, ref_tipo, ref_id) → idempotente, anti-trampa |
| `niveles` | `id`, `numero`, `nombre`, `puntos_min` | 6 niveles `PROPUESTA` (`06`) |
| `insignias` | `id`, `codigo`, `nombre`, `descripcion`, `criterio_json`, `icono` | ≥ 5 (RF-18) |
| `persona_insignias` | `persona_id`, `insignia_id`, `otorgada_en` | PK compuesta |
| `rachas` | `persona_id`, `semanas_consecutivas`, `ultima_semana_iso` | Calculado por job semanal |

### 2.8 Sistema
| Tabla | Campos |
|---|---|
| `auditoria` | `id`, `usuario_id`, `accion` (crear/editar/eliminar/fusionar/importar/login/exportar), `entidad`, `entidad_id`, `antes_json`, `despues_json`, `ip`, `creado_en` — solo INSERT; sin soft delete |
| `importaciones` | `id`, `usuario_id`, `archivo_nombre`, `estado` (previsualizada/confirmada/descartada), `total`, `validas`, `duplicadas`, `con_error`, `creada_en` |
| `importacion_filas` | `importacion_id`, `numero_fila`, `datos_json`, `resultado` (nueva/actualiza/duplicada/error), `empresa_id_coincidente`, `similitud`, `errores_json` |
| `catalogos` | tablas simples `id`, `codigo`, `nombre`, `orden`, `activo` para: `sectores`, `tamanos`, `ingresos_rangos`, `formalizacion`, `relaciones_unab`, `estados_proyecto`, `modalidades` |

## 3. Catálogos

| Catálogo | Valores | Estado |
|---|---|---|
| **Sectores (17)** | Los 5 con porcentaje en el TyC: Alimentos, Comercio, Servicios, Manufactura e Industrial, Turismo. Los otros 12 son `PROPUESTA` (el TyC no los lista): Agroindustria/Agropecuario, Construcción, Educación, Salud y bienestar, Tecnología/TIC, Moda y textil, Transporte y logística, Cultura y entretenimiento, Financiero, Medio ambiente/Energía, Artesanías, Otros | Confirmar con CDE (PA-07) |
| **Tamaños** | Micro, Pequeña, Mediana, Grande | `PROPUESTA`; criterio en PA-06 |
| **Rangos de ingreso** | < 10 M, 10–50 M, 50–200 M, 200–1.000 M, > 1.000 M COP/año | `PROPUESTA` (el TyC menciona "volumen de ingresos" sin rangos) |
| **Formalización** | Informal; Formalización parcial (RUT/NIT sin Cámara de Comercio); Matrícula mercantil vigente; Matrícula mercantil vencida | `PROPUESTA` |
| **Relación UNAB** | Estudiante (91), Graduado (77), Colaborador (17), Externo (312) | Cifras TyC; "Externo" = 497 − 185 = 312 (derivado) |
| **Áreas de intervención** | Mercadeo, Finanzas, Operaciones, Formalización (ejemplos del TyC) + Talento humano, Innovación, Gestión comercial `PROPUESTA` | Parcial |
| **Estados de proyecto** | Propuesto, En curso, Finalizado, Cancelado | `PROPUESTA` |

## 4. Reglas de deduplicación (RF-02, RF-03)

Normalización previa (función única en `Shared`, probada):
- **NIT:** quitar puntos, guiones, espacios y el dígito de verificación (último dígito tras guion) → `nit_norm`. Ej.: `900.123.456-7`, `9001234567`, `900123456` coinciden. (Formato del NIT colombiano: `[NO VERIFICADO]` por fuente oficial; se asume el estándar dígitos + DV.)
- **Correo:** minúsculas, recortar espacios; `correo_norm`.
- **Nombre:** minúsculas, sin tildes, sin signos, sin sufijos societarios (S.A.S., LTDA, "y cía"), espacios colapsados.

Niveles de coincidencia:
| Nivel | Regla | Acción |
|---|---|---|
| Exacto | `nit_norm` igual **o** `correo_norm` de contacto principal igual | Bloquea alta; ofrece abrir la existente |
| Probable | similitud de nombre (`pg_trgm similarity`) ≥ 0,6 **y** (mismo municipio **o** mismo contacto) `PROPUESTA` | Advertencia; el operador decide: es la misma / es distinta |
| Posible | similitud ≥ 0,45 sin otra coincidencia | Sugerencia en búsqueda; no bloquea |

Umbrales 0,6/0,45 son `PROPUESTA`: calibrar con los 12 duplicados sembrados (meta: ≥ 11 detectados, ≤ 2 falsos positivos en 497).

**Fusión:** el operador elige la ficha destino; se migran FK de `diagnosticos`, `proyectos_aula`, `planes_accion`, `citas`, `atenciones`, `inscripciones`, `asistencias`, `intervenciones`, `empresa_persona`; campos vacíos del destino se completan con los de origen; la ficha origen queda `archivada` con `fusionada_en_id`; todo en una transacción; entrada en `auditoria` (con `antes_json`). Reversible por soft delete 30 días `PROPUESTA`.

## 5. Validaciones (servidor, Form Requests)
- Campos obligatorios por entidad según §2 (NOT NULL); correo con formato válido; teléfono 7–15 dígitos; fechas coherentes (fin ≥ inicio); `avance` 0–100; `cupo` ≥ 1; sector/tamaño solo de catálogo.
- Integridad (CRI-07): `empresa_id` NOT NULL en citas, proyectos, planes, atenciones, inscripciones, asistencias, diagnósticos; no se permite crear un evento sin objetivo ni una inscripción sin empresa.
- Consultas de control (en `08`): empresas con `nit_norm` repetido = 0; registros con `empresa_id` nulo = 0; compromisos sin responsable = 0.
- Mensajes de error en español, accionables.

## 6. Auditoría y datos personales

- **Auditoría:** toda escritura vía Action registra `auditoria` (quién/qué/cuándo/antes/después). Lectura de datos de personas por el equipo: solo registro de exportaciones y consultas masivas `PROPUESTA`. Tabla no editable desde la aplicación.
- **Ley 1581 de 2012 (Colombia):** desarrolla el derecho a conocer, actualizar y rectificar la información en bases de datos; exige autorización previa, expresa e informada del titular; prohíbe tratar datos sensibles salvo autorización explícita; reglamentada parcialmente por el Decreto 1377 de 2013, compilado en el Decreto 1074 de 2015 (resumen de fuentes secundarias, 26-oct-2026; `[NO VERIFICADO]` en el texto oficial: SUIN-Juriscol / Diario Oficial).
- **Medidas del producto (PROPUESTA):**
  1. Aviso de privacidad y casilla de autorización con versión y fecha (`consentimientos`) antes del primer acceso del emprendedor.
  2. Minimización: no pedir datos sensibles (salud, etnia, etc.); `documento` opcional y cifrado.
  3. Derechos del titular: "Descargar mis datos" (JSON/CSV) y "Solicitar corrección/supresión" (crea una tarea para el equipo); supresión por anonimización cuando existan registros históricos obligatorios.
  4. Acceso por rol; el emprendedor ve solo sus datos; docentes y consultores ven solo lo de su proyecto.
  5. Demo con **datos 100 % sintéticos** (RNF-14); nombres y NIT ficticios (NIT con prefijo reservado `999.xxx.xxx` `PROPUESTA`, no real).
  6. Registro de bases de datos ante la SIC: tema legal, fuera del alcance técnico; se menciona en preguntas abiertas (PA-18).

## 7. Datos sintéticos para la demo

**Generador:** *seeders* + *factories* de Laravel con semilla fija (`DB::seed` con `faker->seed(2026)`), reproducible. Nombres ficticios en español de Colombia; ninguna empresa real. Los emprendedores usan correos `@ejemplo.test`.

### 7.1 Totales y proporciones (reglas duras)
| Dato | Cantidad | Fuente |
|---|---|---|
| Empresas únicas | **497** | TyC |
| Atenciones | **569** (497 primeras + 72 repeticiones) | TyC; reparto `PROPUESTA` |
| Comunidad UNAB | **185** = 91 estudiantes + 77 graduados + 17 colaboradores; externos 312 | TyC |
| Con sector registrado | **180** (36 %) | TyC |
| Sin sector | 317 | derivado |
| Reparto por sector (sobre las 180) | Alimentos 50 (28 %), Comercio 36 (20 %), Servicios 25 (14 %), Manufactura e Industrial 20 (11 %), Turismo 13 (7 %) = 144 (80 %); los 36 restantes: 3 en cada uno de los otros 12 sectores | % TyC; redondeo y 12 sectores `PROPUESTA` |
| Con tamaño registrado | **184** (37 %): Micro 120, Pequeña 50, Mediana 12, Grande 2 | total TyC; reparto `PROPUESTA` |
| Con ingresos / formalización | Sin dato del TyC; `PROPUESTA`: ingresos 40 %, formalización 55 % de fichas con dato | para mostrar el problema de completitud |
| Diagnósticos | 260 empresas con ≥ 1; 90 con ≥ 2; 25 con 3 | `PROPUESTA` |
| Proyectos de aula | 120 en 2026-1 y 2026-2; 15 empresas con 2–3 proyectos (integradores) | `PROPUESTA` |
| Planes y compromisos | 150 planes, 520 compromisos; 18 % vencidos | `PROPUESTA` |
| Citas | 210 (60 % realizadas, 15 % agendadas, 15 % solicitadas, 10 % canceladas/no asistió) | `PROPUESTA` |
| Eventos | 14 pasados + 5 futuros; inscripción media 22, asistencia media 60 % de inscritos | `PROPUESTA` |
| Usuarios | 1 admin, 3 equipo CDE, 3 docentes, 6 estudiantes consultores, 30 emprendedores con acceso | `PROPUESTA` |
| Gamificación | 30 emprendedores con puntos; niveles 1–4; 12 insignias entregadas | `PROPUESTA` |

Un seeder **valida** al terminar: si no cuadra algún total, falla (prueba `DatosDemoTest`).

### 7.2 Imperfecciones deliberadas (datos "dispersos")
- **12 duplicados sembrados** en el archivo de importación (`importacion_demo.csv`, 509 filas = 497 únicas + 12 duplicadas): 4 por NIT con otro formato (`900.123.456-7` / `9001234567`), 3 por correo con mayúsculas/espacios, 3 por nombre con errores de tipeo ("Pamaderia Dulce Hogar" vs "Panadería Dulce Hogar"), 2 por razón social con/sin "S.A.S.".
- 317 fichas sin sector, 313 sin tamaño; nombres de municipios escritos de varias formas (Bucaramanga/bucaramanga/Bga) para mostrar normalización.
- **Protagonistas:** Panadería Dulce Hogar S.A.S. (Alimentos, graduado UNAB): 3 diagnósticos con mejora en finanzas y caída en mercadeo, 2 proyectos de aula (mercadeo 2026-1, finanzas 2026-2), 1 plan con 6 compromisos (2 vencidos), 2 citas, 1 racha de 3 semanas. Emprendedora ficticia "Marcela Rojas" (`PROPUESTA`, nombre inventado).
- Dos cuentas de demo por rol con contraseña conocida solo en `docs/DEMO.md` (no real).

### 7.3 Entregables del plan
`database/seeders/DemoSeeder.php`, `factories` por modelo, `importacion_demo.csv`, `docs/DEMO.md` (cuentas y guion), prueba que valida totales.

## 8. Importación desde hojas de cálculo (RF-15)

1. **Formatos:** CSV UTF-8 (separador `,` o `;` detectado) y XLSX (maatwebsite/excel).
2. **Plantilla descargable** con columnas: `razon_social, nombre_comercial, nit, sector, tamano, ingresos, formalizacion, relacion_unab, municipio, contacto_nombre, contacto_correo, contacto_telefono`.
3. **Flujo:** subir → mapeo de columnas (automático por nombre; ajustable) → **vista previa** con semáforo (verde nueva, amarillo posible duplicado, rojo error) → el operador resuelve duplicados (omitir/actualizar/fusionar) → confirmar → resumen (creadas/actualizadas/rechazadas) → descarga del reporte de errores en CSV.
4. **Reglas:** las filas se procesan en lotes de 100 dentro de transacciones; no se confirma nada hasta que el operador acepta; la importación completa es reversible dentro de 24 h (marca `importaciones.id` en cada fila creada) `PROPUESTA`.
5. **Rendimiento:** 509 filas < 60 s (RF-15); comparación de duplicados con índice GIN de `pg_trgm` en `nombre_norm`.
6. **Compatibilidad:** valores de catálogo se reconocen por sinónimos (tabla `sinonimos` o lista en configuración, p. ej. "Alimentos y bebidas" → Alimentos) `PROPUESTA`.

## 9. Índices mínimos (ED)
`empresas(nit_norm)` único, `empresas(sector_id,tamano_id)`, GIN `pg_trgm` en `empresas(nombre_norm)` y `personas(correo_norm)`, `citas(empresa_id,fecha_hora)`, `compromisos(responsable_persona_id,estado,fecha_compromiso)`, `inscripciones(evento_id)`, `asistencias(evento_id)`, `intervenciones(empresa_id,fecha desc)`, `puntos_movimientos(persona_id)`.

## Criterio de aceptación de este archivo
- Todas las entidades pedidas en el prompt aparecen: empresa, persona/emprendedor, contactos, diagnóstico y evolución, proyecto de aula, plan y compromisos, citas y recordatorios, capacitaciones/eventos, inscripciones y asistencia, historial, gamificación.
- Las cifras de §7.1 suman: 91+77+17 = 185; 185 + 312 = 497; 50+36+25+20+13 = 144; 144 + 36 = 180; 120+50+12+2 = 184; 497 + 72 = 569.
- Preguntas abiertas PA-17 (diagnóstico real), PA-18 (registro de bases de datos ante la SIC) añadidas a `99`.
