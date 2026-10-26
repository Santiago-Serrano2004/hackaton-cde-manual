# 01 · Requisitos y trazabilidad

**Objetivo.** Convertir sin omisiones el texto oficial del reto CDE en requisitos con ID, prioridad MoSCoW (para ~25 h de desarrollo, 3 personas), criterio de aceptación medible y trazabilidad al criterio de evaluación y a la característica ISO/IEC 25010 que protege.

**Entradas.** `inputs/01_TyC_y_cronograma_CDE.md` (§5 reto, §8 criterios) y `inputs/02_presentacion_CDE.md`. Ambas fuentes coinciden en el contenido del reto; las diferencias están en la sección 7.

**Convenciones.**
- Criterios de evaluación: **FUN** = Funcionalidad (60), **DIF** = Diferenciador (15), **NEG** = Negocio (15), **EQP** = Equipo (10).
- ISO/IEC 25010 (9 características, según el TyC): **AF** Adecuación funcional, **ED** Eficiencia de desempeño, **CO** Compatibilidad, **CI** Capacidad de interacción, **FI** Fiabilidad, **SE** Seguridad, **MA** Mantenibilidad, **FL** Flexibilidad, **PR** Protección (safety).
- Prioridad: **M** Must (sin esto la demo falla), **S** Should, **C** Could, **W** Won't (visión futura, se menciona en el pitch).
- Las cifras (497 empresas, 569 atenciones, 180 con sector = 36 %, 184 con tamaño = 37 %, 185 comunidad UNAB = 91+77+17) provienen del TyC §5.

---

## 1. Los 10 resultados que el CDE necesita lograr (TyC §5, "Lo que el CDE necesita lograr")

| ID | Resultado (fuente) | Req. derivados |
|---|---|---|
| RES-01 | Conocer a cada empresa de forma completa y confiable, sin duplicados (emprendedor, contactos, perfil: tipo, sector, ingresos, formalización, tamaño) | RF-01, RF-02, RF-03, RF-04 |
| RES-02 | Conocer el estado de madurez a partir del diagnóstico y su evolución en el tiempo | RF-05 |
| RES-03 | Seguimiento a proyectos de aula (asignatura, docente, equipo de consultores, área, estado, semestre) y planes de acción (compromisos, responsables, fechas, avance, resultados) | RF-06, RF-07 |
| RES-04 | Gestionar solicitudes de citas y la atención resultante con recordatorios sin gestión manual | RF-08, RF-09 |
| RES-05 | Promover capacitaciones/eventos según perfil e historial, gestionar inscripciones y contrastar inscritos vs. asistentes | RF-10, RF-11, RF-12 |
| RES-06 | Mantener informado al emprendedor: estado del acompañamiento, compromisos pendientes, oferta que le conviene | RF-13 |
| RES-07 | Reconstruir el historial de intervención/atención de cada empresa en cualquier momento, sin registrar dos veces | RF-14 |
| RES-08 | Eliminar el trabajo manual y operativo de gestión de información y seguimiento | RF-09, RF-15, RF-16, RNF-08 |
| RES-09 | Módulo de formación por recompensas con gamificación (retos, puntos, niveles, reconocimientos), intuitivo y divertido | RF-17, RF-18, RF-19 |
| RES-10 | Convertir datos en conocimiento: brechas por sector, tamaño, formalización y resultados de intervenciones; medir impacto; sustentar investigación | RF-20, RF-21, RF-22 |

## 2. Los 10 criterios "Cómo sabremos que el reto se resolvió" (TyC §5)

| ID | Criterio literal (resumido) | Se verifica con | Req. |
|---|---|---|---|
| CRI-01 | Cualquier persona del CDE consulta el historial completo de una empresa en < 1 minuto | Cronometrar en demo: buscar empresa → ver línea de tiempo ≤ 60 s (meta propia: ≤ 20 s) | RF-14, RNF-01 |
| CRI-02 | Caracterizar la base por sector, tamaño, ingresos y formalización sin consolidar a mano | Dashboard de caracterización con filtros, sin importar manualmente | RF-20 |
| CRI-03 | Cada plan de acción tiene responsable, estado y avance visibles | Lista de planes: 100 % con responsable, estado y % avance | RF-07 |
| CRI-04 | Por evento/capacitación: inscritos, asistentes y quiénes son | Vista de evento con 3 cifras y listado nominal | RF-11, RF-12 |
| CRI-05 | El emprendedor ve estado de su acompañamiento y oferta sin consultar al equipo | Portal del emprendedor con 3 bloques: etapa, pendientes, oferta | RF-13 |
| CRI-06 | Recordatorios y gestión de citas sin trabajo manual | Job programado envía recordatorio sin intervención; cola de solicitudes con estados | RF-08, RF-09 |
| CRI-07 | Ninguna cita/proyecto/capacitación/evento sin empresa asociada; no hay empresas duplicadas | Restricciones FK NOT NULL + índice único NIT + prueba de consulta que devuelve 0 filas huérfanas y 0 duplicados | RF-02, RF-03 |
| CRI-08 | Reportes de impacto sin consolidación manual | Generar reporte (PDF/CSV) con un clic | RF-21 |
| CRI-09 | Experiencia intuitiva y divertida; la formación por recompensas motiva | Prueba de usabilidad con ≥ 3 personas (tarea sin ayuda) + métricas de engagement (ver `06`) | RF-17..19, RNF-04 |
| CRI-10 | Responder preguntas de investigación con datos propios (ej.: mayores brechas de un sector en Santander) | Pregunta de ejemplo contestada en pantalla filtrando por sector | RF-22 |

## 3. Dolores del problema (TyC §5, "El problema")

| ID | Dolor | Req. que lo ataca |
|---|---|---|
| DOL-01 | Caracterizar negocios es difícil (sin lugar estandarizado para consolidar diagnósticos) | RF-01, RF-05, RF-20 |
| DOL-02 | El seguimiento a planes de acción se pierde (sin trazabilidad acordado/ejecutado/cambiado) | RF-07 |
| DOL-03 | No se conoce el recorrido de cada emprendedor (proyectos integradores: una empresa en varias asignaturas) | RF-06, RF-14 |
| DOL-04 | Datos duplicados, contradictorios o incompletos (NIT/correos distintos; solo 180 con sector y 184 con tamaño) | RF-02, RF-03, RF-04, RF-23 |
| DOL-05 | Trabajo manual y operativo desgasta al equipo (recordatorios, agenda, depuración) | RF-09, RF-15, RF-16 |
| DOL-06 | Citas/eventos/capacitaciones sin segmentar ni conocer a quién interesan; solicitudes de cita sin seguimiento | RF-08, RF-10 |
| DOL-07 | Sin espacio para mostrar eventos ni cruzar inscritos vs. asistentes | RF-10, RF-11, RF-12 |
| DOL-08 | El emprendedor no tiene visibilidad de su proceso (baja participación y continuidad) | RF-13 |
| DOL-09 | Documentar y medir impacto toma días | RF-21 |

## 4. Las 9 características ISO/IEC 25010 (TyC §5, "Características de calidad")

| ID | Característica | Lo que espera el TyC | Req. |
|---|---|---|---|
| ISO-AF | Adecuación funcional | Funciones completas, correctas y apropiadas para los dolores | RF-*, RNF-09 |
| ISO-ED | Eficiencia de desempeño | Rápido y buen uso de recursos con volumen creciente | RNF-01, RNF-02 |
| ISO-CO | Compatibilidad | Convivir e intercambiar información con sistemas que CDE/Universidad ya usan | RF-23, RF-24, RNF-10 |
| ISO-CI | Capacidad de interacción | Intuitiva, fácil de aprender/operar, previene errores, motiva, inclusiva | RNF-04, RNF-05, RF-17..19 |
| ISO-FI | Fiabilidad | Consistente, disponible, recuperable ante fallas | RNF-06, RNF-07 |
| ISO-SE | Seguridad | Protege información; cada persona accede solo a lo suyo; acciones registradas | RF-25, RF-26, RNF-03 |
| ISO-MA | Mantenibilidad | Partes modificables, reutilizables y probables | RNF-08 |
| ISO-FL | Flexibilidad | Se adapta, escalable, instalable en distintos entornos | RNF-11 |
| ISO-PR | Protección (safety) | Evita daño a personas u organización por uso o falla | RNF-12 |

## 5. Los 8 puntos de la Dimensión 2 y los 9 puntos mínimos del pitch

| ID | Punto (TyC §5 Dim. 2 / §6) | Entregable | Req. |
|---|---|---|---|
| D2-1 | Propuesta de valor y por qué la Universidad la adoptaría | Diapositiva + `09` | RN-01 |
| D2-2 | Escalabilidad: crecer y llegar a más emprendedores/usuarios | `09` | RN-02 |
| D2-3 | Sostenibilidad en el tiempo | `09` | RN-03 |
| D2-4 | Implementación dentro de la Universidad | `09` | RN-04 |
| D2-5 | Recursos necesarios para operar | `09` | RN-05 |
| D2-6 | Valor generado para la UNAB | `09` | RN-06 |
| D2-7 | Diferenciación frente a soluciones existentes | `09` | RN-07 |
| D2-8 | Estrategia de posicionamiento | `09` | RN-08 |
| PIT-* | El pitch debe cubrir: Solución; Funcionamiento (incl. recompensas); Propuesta de valor; Equipo; Modelo de negocio y sostenibilidad; Posicionamiento; Diferenciador; Valor agregado UNAB; Potencial de crecimiento | Guion en `09` | RN-09 |

Dimensión 1 exige demostrar: cómo funciona, cómo responde a los dolores, cómo la gamificación logra experiencia intuitiva y divertida, qué valor genera, qué la hace diferente (RN-10).

---

## 6. Requisitos funcionales (RF)

Aceptación en formato verificable. "Demo" = se ejecuta en vivo o con datos sembrados.

| ID | Requisito | Prior. | Criterio de aceptación medible | Eval. | ISO | Origen |
|---|---|---|---|---|---|---|
| RF-01 | Ficha de empresa: razón social/nombre, NIT (si existe), tipo de negocio, sector (catálogo 17), tamaño, rango de ingresos, estado de formalización, relación con UNAB (estudiante/graduado/colaborador/externo), contactos y emprendedor(es) | M | Crear y editar una empresa con todos los campos; el 100 % de los campos del catálogo se eligen de listas, no de texto libre | FUN | AF | RES-01 |
| RF-02 | Deduplicación al crear/importar: detecta coincidencia por NIT normalizado, correo normalizado y similitud de nombre | M | Con 10 duplicados sembrados, el sistema marca ≥ 9 antes de guardar y ofrece fusionar | FUN | AF, FI | RES-01, CRI-07 |
| RF-03 | Fusión de duplicados conservando historial (citas, proyectos, etc. migran a la empresa destino) | M | Tras fusionar, 0 registros huérfanos y el historial de ambas fichas aparece en la destino | FUN | AF, FI | CRI-07 |
| RF-04 | Indicador de completitud de la ficha y lista de "fichas por completar" (sector/tamaño faltantes) | S | Panel muestra % completitud global; lista filtrable de fichas sin sector o sin tamaño | FUN | AF | DOL-04 |
| RF-05 | Registro de diagnóstico de madurez (por fecha) con puntaje por dimensión y gráfica de evolución | M | Empresa con ≥ 2 diagnósticos muestra gráfica de evolución con ambos puntos | FUN | AF | RES-02 |
| RF-06 | Proyectos de aula: asignatura, docente, equipo de consultores (estudiantes), área intervenida, estado, semestre; una empresa puede tener varios | M | Crear proyecto ligado a empresa; empresa con 2 proyectos en distintas asignaturas los muestra juntos | FUN | AF | RES-03 |
| RF-07 | Planes de acción: compromisos con responsable, fecha, estado, % avance y resultado; vista de vencidos | M | 100 % de los compromisos en la demo tienen responsable, estado y avance; filtro "vencidos" funciona | FUN | AF | CRI-03 |
| RF-08 | Solicitud de citas (por emprendedor y por el equipo) con estados: solicitada → agendada → realizada/cancelada, y registro de la atención resultante (notas, acuerdos) | M | Flujo completo ejecutable en < 2 min; toda cita queda asociada a una empresa | FUN | AF | RES-04 |
| RF-09 | Recordatorios automáticos de citas, compromisos y eventos (correo; ver decisión en `05`) | M | Con una cita a 24 h, el job envía recordatorio sin intervención; queda registro del envío | FUN | AF, FI | CRI-06 |
| RF-10 | Catálogo público/interno de eventos y capacitaciones, con recomendación según perfil e historial (sector, tamaño, intereses, asistencias previas) | M | Para 2 emprendedores de perfil distinto, la oferta recomendada difiere y se explica por qué | FUN/DIF | AF | RES-05 |
| RF-11 | Inscripción a evento/capacitación (con cupos) por el emprendedor o por el equipo | M | Inscripción en ≤ 3 clics; cupo lleno bloquea y ofrece lista de espera (S) | FUN | AF | RES-05 |
| RF-12 | Registro de asistencia (lista, código QR o enlace) y cruce inscritos vs. asistentes | M | Vista de evento: inscritos, asistentes, no-show y listado nominal; cifras suman | FUN | AF | CRI-04 |
| RF-13 | Portal del emprendedor: etapa de acompañamiento, compromisos pendientes, citas, oferta recomendada, progreso de gamificación | M | Un emprendedor solo ve lo suyo; los 3 bloques cargan en < 2 s con datos de demo | FUN | AF, SE | CRI-05 |
| RF-14 | Línea de tiempo del historial de la empresa (diagnósticos, proyectos, planes, citas, capacitaciones, eventos, intervenciones) sin doble registro | M | Desde el buscador a la línea de tiempo completa en ≤ 20 s (CRI-01 exige < 60 s) | FUN | AF, CI | CRI-01 |
| RF-15 | Importación desde hojas de cálculo (CSV/XLSX) con vista previa, validación y reporte de errores/duplicados | M | Importar archivo de 500 filas en < 60 s mostrando resumen (creadas/actualizadas/rechazadas) | FUN | AF, CO | DOL-04, DOL-05 |
| RF-16 | Registro de intervenciones/atenciones unificado (un solo formulario alimenta línea de tiempo y reportes) | S | Un registro aparece en historial y en reportes sin captura adicional | FUN | AF | RES-07 |
| RF-17 | Retos de formación con puntos (completar capacitación, asistir a evento, cumplir compromiso, completar ficha) | M | Completar un reto suma puntos en < 1 s y se refleja en perfil | FUN/DIF | AF, CI | RES-09 |
| RF-18 | Niveles, insignias y rachas | M | Al cruzar un umbral, sube de nivel con retroalimentación visual; ≥ 5 insignias definidas | FUN/DIF | CI | RES-09 |
| RF-19 | Tabla de clasificación opcional y reconocimientos (con opción de anonimato) | S | Se puede activar/desactivar; respeta anonimato | DIF | CI, SE | RES-09 |
| RF-20 | Dashboard de caracterización: empresas por sector, tamaño, ingresos, formalización, comunidad UNAB, con filtros | M | Cifras coinciden con los datos sembrados (cuadre verificado con consulta SQL) | FUN | AF | CRI-02 |
| RF-21 | Reportes de impacto exportables (PDF/CSV/XLSX) por periodo, programa y sector | M | Reporte generado en ≤ 10 s con un clic; cifras = dashboard | FUN | AF, CO | CRI-08 |
| RF-22 | Análisis de brechas: por sector/tamaño/formalización, brechas por dimensión de diagnóstico y resultados de intervenciones | M | Pregunta de ejemplo "mayores brechas del sector Alimentos" se responde en ≤ 3 interacciones | FUN/DIF | AF | CRI-10 |
| RF-23 | Catálogos controlados (17 sectores, tamaños, formalización, áreas, estados) administrables | S | Admin agrega valor a un catálogo sin tocar código | FUN | AF, MA | DOL-04 |
| RF-24 | Exportar/consumir datos por API REST documentada y exportación CSV/XLSX | S | Endpoint de empresas devuelve JSON paginado documentado; CSV abre en Excel | FUN | CO | ISO-CO |
| RF-25 | Autenticación y roles (admin CDE, equipo CDE, docente, estudiante consultor, emprendedor) con permisos por rol | M | Matriz rol×recurso probada: acceso no autorizado → 403 | FUN | SE | ISO-SE |
| RF-26 | Registro de auditoría (quién, qué, cuándo) de acciones sobre datos | M | Toda creación/edición/fusión/eliminación genera entrada consultable | FUN | SE | ISO-SE |
| RF-27 | Segmentación y convocatoria dirigida (lista filtrada por perfil → envío de invitación) | S | Seleccionar segmento y generar envío; registra a quién se convocó | DIF | AF | DOL-06 |
| RF-28 | Búsqueda global (empresa por nombre/NIT/correo/contacto) tolerante a errores tipográficos | M | Buscar "Pamaderia" devuelve "Panadería ..." | FUN | AF, CI | CRI-01 |
| RF-29 | Asistente de preguntas en lenguaje natural sobre los datos (IA) | W | Visión futura; se menciona en pitch, no se construye (ver `02`) | DIF | — | RES-10 |
| RF-30 | Integración con Google Workspace (Calendar/Sheets) | C | Si el CDE confirma que lo usa (pregunta abierta PA-04) | FUN | CO | ISO-CO |

## 7. Requisitos no funcionales (RNF)

| ID | Requisito | Prior. | Criterio medible | Eval. | ISO |
|---|---|---|---|---|---|
| RNF-01 | Desempeño: páginas principales responden en ≤ 2 s (p95) con 497 empresas, 569 atenciones y ≥ 2 000 registros relacionados; con 5 000 empresas sintéticas búsqueda ≤ 1 s | M | Medición con prueba de carga ligera y consola del navegador | FUN | ED |
| RNF-02 | Escalabilidad de datos: índices en claves de búsqueda y paginación en todas las listas | M | Ninguna lista carga > 50 filas sin paginar; `EXPLAIN` usa índice en búsqueda por NIT | FUN | ED, FL |
| RNF-03 | Seguridad: contraseñas con hash, JWT/sesión con expiración, validación de entradas, protección CSRF/XSS/inyección, HTTPS | M | Checklist de seguridad (`08`) 100 % de ítems Must en verde | FUN | SE |
| RNF-04 | Capacidad de interacción: tarea clave (crear empresa, inscribirse a evento) completada sin ayuda por ≥ 3 personas ajenas al equipo en ≤ 2 min | M | Registro de prueba de usabilidad | FUN | CI |
| RNF-05 | Accesibilidad: contraste AA, navegación por teclado, etiquetas en formularios, diseño responsivo (móvil/escritorio) | S | Auditoría con herramienta de accesibilidad sin errores críticos | FUN | CI |
| RNF-06 | Fiabilidad: respaldo automático de base de datos y restauración probada | M | Restauración desde respaldo ejecutada y verificada una vez | FUN | FI |
| RNF-07 | Disponibilidad durante la demo: despliegue estable + plan B local | M | Demo ejecutable con red caída (entorno local o video) | FUN | FI |
| RNF-08 | Mantenibilidad: monolito modular con módulos independientes, linter y pruebas automáticas mínimas en CI | M | CI en verde; cada módulo con ≥ 1 prueba | FUN | MA |
| RNF-09 | Corrección de datos: validaciones en servidor para todo formulario; integridad referencial | M | Intentos de datos inválidos rechazados con mensaje claro | FUN | AF, FI |
| RNF-10 | Interoperabilidad: formatos abiertos (CSV, XLSX, JSON), codificación UTF-8 | M | Exportación se abre en Excel sin corrupción de tildes | FUN | CO |
| RNF-11 | Flexibilidad/portabilidad: aplicación contenedorizada, configuración por variables de entorno, despliegue reproducible con un comando | M | Levantar en máquina limpia en ≤ 15 min con README | FUN | FL |
| RNF-12 | Protección/safety: confirmaciones en acciones destructivas, borrado lógico, no exposición de datos personales de menores o sensibles, mensajes de error sin datos internos | M | Eliminar/fusionar exige confirmación y es reversible (soft delete) | FUN | PR |
| RNF-13 | Cumplimiento de datos personales: aviso y autorización de tratamiento, derechos del titular (consultar, rectificar, suprimir) conforme a la Ley 1581 de 2012 `[NO VERIFICADO artículo por artículo]` | M | Pantalla de autorización y función de exportar/eliminar datos de una persona | FUN | SE, PR |
| RNF-14 | Auditabilidad de la demo: datos sintéticos, sin datos reales de emprendedores | M | Base de demo 100 % sintética | FUN | SE |

## 8. Requisitos de negocio y de presentación (RN)

| ID | Requisito | Prior. | Criterio | Eval. |
|---|---|---|---|---|
| RN-01 | Propuesta de valor formulada en 1 frase y 3 beneficios cuantificados para el CDE | M | Aparece en diapositiva 2 del pitch | NEG/DIF |
| RN-02 | Plan de escalabilidad (más programas CDE → otras unidades UNAB → otras universidades) | M | Hoja de ruta de 3 horizontes | NEG |
| RN-03 | Modelo de sostenibilidad con fuentes de ingreso o ahorro y costos | M | Tabla de costos/beneficios con supuestos marcados | NEG |
| RN-04 | Plan de implementación en la UNAB (fases, responsables, integración con sistemas existentes) | M | Cronograma de 3 fases | NEG |
| RN-05 | Recursos necesarios (personas, infraestructura, licencias) | M | Lista con costo estimado `PROPUESTA` | NEG |
| RN-06 | Valor para la UNAB (impacto medible en territorio, acreditación, investigación) | M | 3 indicadores propuestos | NEG |
| RN-07 | Comparación con alternativas existentes | M | Tabla comparativa en `09` | DIF |
| RN-08 | Estrategia de posicionamiento | M | Mensaje, segmento y canal definidos | DIF/NEG |
| RN-09 | Pitch de 5 min que cubra los 9 puntos mínimos, sin replantear el problema | M | Ensayo cronometrado ≤ 5:00 | NEG/EQP |
| RN-10 | Demostrar en vivo las 5 preguntas de Dim. 1 (cómo funciona, dolores, gamificación, valor, diferenciador) | M | Guion de demo cubre las 5 | FUN |
| RN-11 | Evidencia de equipo: roles complementarios, participación de los 3 integrantes en el pitch | M | Los 3 hablan; matriz de roles en diapositiva | EQP |

---

## 9. Matriz requisito × criterio de evaluación

| Req. | FUN 60 | DIF 15 | NEG 15 | EQP 10 |
|---|:-:|:-:|:-:|:-:|
| RF-01..09, 11..16, 20, 21, 23..28 | ● | | | |
| RF-10, RF-17, RF-18, RF-22, RF-27 | ● | ● | | |
| RF-19 | | ● | | |
| RF-29 (W) | | ● | | |
| RNF-01..14 | ● | | | |
| RN-01, RN-08 | | ● | ● | |
| RN-02..06 | | | ● | |
| RN-07 | | ● | | |
| RN-09 | | | ● | ● |
| RN-10 | ● | | | |
| RN-11 | | | | ● |

## 10. Matriz requisito × característica ISO/IEC 25010

| ISO | Requisitos |
|---|---|
| AF | RF-01..16, 20..23, 26..28, RNF-09 |
| ED | RNF-01, RNF-02 |
| CO | RF-15, RF-21, RF-24, RF-30, RNF-10 |
| CI | RF-14, RF-17..19, RF-28, RNF-04, RNF-05 |
| FI | RF-02, RF-03, RF-09, RNF-06, RNF-07, RNF-09 |
| SE | RF-13, RF-19, RF-25, RF-26, RNF-03, RNF-13, RNF-14 |
| MA | RF-23, RNF-08 |
| FL | RNF-02, RNF-11 |
| PR | RNF-12, RNF-13 |

Todas las características tienen ≥ 2 requisitos Must o Should. Verificación en `08` y `05`.

## 11. Priorización para 25 horas (resumen)

- **Must (camino dorado):** RF-01, 02, 03, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 17, 18, 20, 21, 22, 25, 26, 28; RNF-01..04, 06..14.
- **Should:** RF-04, 16, 19, 23, 24, 27; RNF-05.
- **Could:** RF-30.
- **Won't:** RF-29.
- La hipótesis de alcance (qué se corta si falta tiempo) queda detallada en `02`.

## 12. Contradicciones y vacíos del texto fuente

| # | Hallazgo | Impacto | Tratamiento |
|---|---|---|---|
| V-01 | El cronograma TyC dice "Desarrollo continuo" tras Validación 1 (5:00–5:30 p. m.) sin hora de fin; el .docx tiene la hora "no extraída" (nota en `01_TyC`). El pptx lo omite | Horas reales de sueño/trabajo nocturno | `99_preguntas_abiertas.md` PA-01; plan asume trabajo hasta ~10:00 p. m. + descanso (`07`) |
| V-02 | TyC: validación 2 a las 8:00 a. m. pero "desarrollo final" 8:30–9:00 y cierre 9:00–9:15; el TyC §2 dice cierre del desarrollo a las 9:00 | El código se congela 8:00–8:30 en la práctica | Feature freeze a las 6:30 a. m. (`07`) |
| V-03 | Cronograma dice pitch 9:15–10:30 a. m. para 5 equipos × 10 min = 50 min, queda 25 min de holgura (cambios de turno) | Poco | Se ignora |
| V-04 | "Cuántas personas se inscriben y asisten": no define si hay asistencia por QR, lista, etc. | Diseño de RF-12 | PA-05 |
| V-05 | Envío de recordatorios: no se define canal (correo, WhatsApp, SMS) | RF-09 | PA-03 |
| V-06 | No se dice qué sistemas "ya usan el CDE y la Universidad" (ISO-CO) | RF-24, RF-30 | PA-04 |
| V-07 | "Tamaño" de empresa: no se define criterio (empleados, ingresos, activos) | RF-01 | PA-06; propuesta: Ley 905 de 2004 `[NO VERIFICADO]` |
| V-08 | "Estados de formalización" y "áreas de intervención": sin catálogo | RF-01, RF-06 | PA-07 |
| V-09 | Solo se dan 5 de 17 sectores (28/20/14/11/7 %, ~80 %); los porcentajes son sobre los 180 que reportan sector | Datos sintéticos | `04` los completa como `PROPUESTA` |
| V-10 | Suma comunidad UNAB 91+77+17 = 185 ✔; 185/497 = 37,2 % ✔; 180/497 = 36,2 % ✔; 184/497 = 37,0 % ✔; 347+172 = 519 ≠ 569 | **Contradicción numérica:** el texto dice 569 atenciones y 347 en el 1.º semestre + 172 en el 2.º = 519. Posible que 347/172 sean empresas y no atenciones, o que 50 empresas repitan | PA-02; no usar 347/172 como cifras de atenciones |
| V-11 | Pitch: "No hace parte replantear el problema" vs. rúbrica pide "cómo responde a los dolores" | Tono del pitch | Se muestran los dolores solo como etiquetas en la demo, no se re-explican |
| V-12 | ISO: la lista del TyC incluye 9 características (ISO 25010:2023). Versión 2011 tenía 8 y otros nombres | Terminología | Seguimos al TyC; ver `99` PA-12 sobre verificación de la edición |
| V-13 | La presentación (pptx) y el TyC no difieren en contenido ni cifras; el pptx omite la hora de "desarrollo continuo" y el TyC la marca "no extraída" | — | Documentado en PA-01 |
| V-14 | El chat menciona un "ecommerce/marketplace" (reto anterior "Mi Tienda en Línea"), reemplazado por el reto CDE (README) | Descartar | No se usa como requisito |
| V-15 | Texto del TyC: equipos de 2 a 4; el equipo es de 3 | — | Aceptable |

## Criterio de aceptación de este archivo

- Los 10 resultados, 10 criterios, 9 dolores, 9 características ISO y 8 puntos de Dim. 2 aparecen con ID: ✔ (RES-01..10, CRI-01..10, DOL-01..09, ISO-*, D2-1..8).
- Todo RF/RNF/RN tiene prioridad, criterio medible, evaluación e ISO (o RN con criterio).
- Matrices de la §9 y §10 presentes; vacíos en §12 y enviados a `99_preguntas_abiertas.md`.
