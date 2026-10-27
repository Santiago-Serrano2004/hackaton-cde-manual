# 01 · Brief de diseño y arquitectura de información

**Objetivo.** Definir para quién se diseña, qué tareas deben resolverse, qué principios guían las decisiones, cómo se organiza la navegación por rol y cómo fluye cada tarea clave, de modo que los 13 mockups de `prototipo/` y las especificaciones `10_especificacion_*` no requieran decisiones adicionales.
**Entradas.** `02_alcance_mvp.md` (§2 roles, §4 HU, §5 camino dorado), `06_ux_gamificacion.md` (§2 pantallas, §3 flujos), `16_sistema_de_diseno.md`, `investigacion/06_requerimientos_funcionales_detallados.md`, `00_investigacion.md` (IDs `DI-xx`).
**Convención.** Cada decisión cita su fuente: `DI-xx` (investigación de diseño), `HU-xx`/`RF-xx` (manual) o una necesidad del reto CDE (“De datos dispersos a conocimiento que innova”). Lo nuevo va marcado `PROPUESTA`.

## 1. Usuarios y tareas

| Rol (clave) | Dispositivo principal | Tarea que define su éxito | Pantallas (IDs de `06`) | HU |
|---|---|---|---|---|
| Equipo CDE (`equipo_cde`) | Escritorio 1440 px | Encontrar una empresa y entender su historia en ≤20 s; no duplicar; reportar impacto | E1–E13 | HU-01..05, 08..12, 15, 20..22 |
| Administrador (`administrador`) | Escritorio | Gobernar usuarios, catálogos y auditoría | E15 + todo lo del equipo | HU-23, 24 |
| Docente (`docente`) | Escritorio/portátil | Ver sus proyectos y la ficha en lectura | D1–D3 | HU-06 |
| Estudiante consultor (`estudiante_consultor`) | Móvil/portátil | Registrar compromisos con responsable y fecha | D1–D3 | HU-07 |
| Emprendedor (`emprendedor`) | Móvil 390 px | Saber su siguiente paso, pedir cita, inscribirse en ≤3 clics, ver su progreso | M1–M8 | HU-09, 13..19, 25 |

Nota de nomenclatura: `investigacion/06` usa `admin_cde` y `06` usa `administrador`; los mockups usan **`administrador`** y el conflicto queda en `99_decisiones.md` (Q-D8).

### Necesidades literales del reto que el diseño debe resolver
1. “Datos dispersos” → una sola ficha con procedencia visible y deduplicación asistida (RF-34, RF-35, RF-36, RF-48).
2. “Conocimiento” → caracterización, brechas y reporte “declarado vs verificado” (RF-20, RF-22, RF-37, RF-38).
3. “Que innova” → ruta del emprendedor con recompensas ligadas a hechos reales (RF-17, RF-18, D-05).

## 2. Tres principios de diseño

| # | Principio | Razón (fuente) | Regla verificable en el prototipo |
|---|---|---|---|
| P1 | **Hilo de ruta: toda cifra lleva a su historia.** Cada número es un enlace a la lista o evento que lo compone. | `06` §1.2 “del dato a la acción”; Metabase drill-through (DI-37); reto: “datos dispersos a conocimiento” | Cada KPI, celda de brecha y sello de confianza tiene destino (`href` real) |
| P2 | **Confianza visible.** Dato crítico = valor + origen + fecha + estado (verificado / declarado / por revisar). | RF-34, RF-48; HubSpot irreversible vs. nuestro deshacer (DI-36); WCAG 1.4.1 (DI-26) | Todo campo crítico (NIT, sector, razón social, tamaño, formalización, correo) tiene sello con forma + texto |
| P3 | **Calma operativa, celebración medida.** Interfaz sobria para el equipo; movimiento y festejo solo al cerrar un compromiso o subir de nivel. | Gamificación para adultos (DI-47, DI-48); Hick (DI-12); von Restorff (DI-15); presupuesto de movimiento (DI-51..53) | Una sola acción naranja por vista; confeti solo en el cierre de compromiso y desactivable |

## 3. Arquitectura de información

### 3.1 Navegación global por rol (≤7 destinos, DI-12)

```
EQUIPO CDE (barra lateral 240 px, colapsable; en móvil = menú inferior)
├─ Inicio ........................... E1   /inicio
├─ Empresas ......................... E2   /empresas
│   ├─ Ficha 360 .................... E3   /empresas/:id   (pestañas: Línea de tiempo · Diagnósticos · Proyectos · Planes · Citas · Eventos · Contactos)
│   ├─ Nueva empresa ................ E4   /empresas/nueva
│   └─ Duplicados y fusión .......... E5   /empresas/duplicados/:a/:b
├─ Importar ......................... E6   /importaciones
├─ Citas ............................ E9   /citas
├─ Eventos .......................... E10  /eventos
├─ Análisis ......................... E11–E13 /panorama · /brechas · /impacto
└─ Retos (admin de gamificación) .... E14  /retos          PROPUESTA: agrupado bajo "Más"
ADMINISTRADOR: igual + Administración E15 /admin (catálogos · usuarios y roles · auditoría)
Transversal: búsqueda global Ctrl+K (en cualquier pantalla), selector de tema, menú de usuario.

EMPRENDEDOR (móvil primero; barra inferior de 4 destinos)
├─ Mi ruta ........ M2/M3  /mi-ruta  (siguiente paso, pendientes, nivel)
├─ Para ti ........ M5     /para-ti  (eventos recomendados con motivo)
├─ Citas .......... M4     /mis-citas
└─ Logros ......... M7     /logros   (insignias, retos, clasificación opt-in)
   Menú "Yo": Mi empresa (M6) · Mis datos (M8) · Aviso de privacidad (M1, primer ingreso)

DOCENTE / ESTUDIANTE CONSULTOR
└─ Mis proyectos (D1) → Proyecto (D2) → Empresa en lectura (D3)
```

Justificación: el equipo CDE sale de `06` §2.1 (15 pantallas) agrupadas por tarea para respetar Hick (DI-12). Importar queda fuera de “Empresas” porque es una tarea de ciclo largo con su propio flujo de 5 pasos (DI-38). El emprendedor tiene 4 destinos porque Fitts y el pulgar en móvil (DI-13) piden pocas metas grandes.

### 3.2 Mapa de los 13 mockups

| N.º | Mockup (archivo) | Pantalla del manual | Rol | Dispositivo de diseño | Req. principales |
|---|---|---|---|---|---|
| 1 | `p01-acceso.html` | login + inicio por rol (E1/M2) | todos | 1440 y 390 | RF-25 |
| 2 | `p02-panel.html` | E1 Inicio del equipo | equipo_cde | 1440 | RF-07..09, RF-37 |
| 3 | `p03-busqueda.html` | búsqueda global Ctrl+K | equipo_cde | 1440 | RF-28 |
| 4 | `p04-nueva-empresa.html` | E4 alta + NIT + banner duplicado | equipo_cde | 1440 | RF-02, RF-31, RF-36 |
| 5 | `p05-fusion.html` | E5 comparación lado a lado | equipo_cde | 1440 | RF-03, RF-35 |
| 6 | `p06-ficha.html` | E3 ficha 360 + diagnóstico | equipo_cde | 1440 y 390 | RF-14, RF-05, RF-48 |
| 7 | `p07-importacion.html` | E6 importación | equipo_cde | 1440 | RF-15 |
| 8 | `p08-citas.html` | E9 citas y recordatorios | equipo_cde / emprendedor | 1440 y 390 | RF-08, RF-09 |
| 9 | `p09-eventos.html` | E10 eventos, QR, asistencia | equipo_cde / emprendedor | 1440 y 390 | RF-10..12 |
| 10 | `p10-analisis.html` | E11–E13 caracterización, brechas, impacto | equipo_cde | 1440 | RF-20..22, RF-37, RF-38 |
| 11 | `p11-mi-ruta.html` | M2/M3/M5 portal | emprendedor | 390 (y 1440) | RF-13, RF-10 |
| 12 | `p12-recompensas.html` | M7 + E14 | emprendedor | 390 | RF-17, RF-18 |
| 13 | `p13-administracion.html` | E15 | administrador | 1440 | RF-23, RF-25, RF-26 |
| — | `demo.html` | guion de 120 s | presentador | 1440 | `18_pitch_v2` §5 |
| — | `componentes.html` | biblioteca de componentes | diseño | 1440 | `16` |

## 4. Flujos de usuario

Notación: `[pantalla]` → acción → resultado. Los tiempos objetivo salen de `02` §5 y `18_pitch_v2` §5.

### 4.1 Camino dorado (8 pasos de `02` §5)

| Paso | Flujo | Pantallas | Decisión de diseño y razón |
|---|---|---|---|
| 1 | Subir CSV → mapear → vista previa (497 nuevas · 12 posibles duplicados · 0 con error en el archivo base) → confirmar → resumen con **reversión** | `p07` | Wizard de pasos con progreso (Zeigarnik, DI-16; Airtable DI-38); semáforo con icono+texto (DI-26); reversión por RF-15/DI-03 |
| 2 | Ctrl+K “pamaderia” → resultado con coincidencia 0,82 → ficha con línea de tiempo | `p03` → `p06` | Paleta tolerante (DI-32); respuesta <400 ms (DI-11); HU-01 ≤20 s |
| 3 | Pestaña Diagnósticos: radar D1/D2/D3 + tabla equivalente; Planes con vencidos | `p06` | Radar solo con tabla (DI-41); vencidos como filtro (HU-08) |
| 4 | Emprendedor solicita cita (tema + franja) → equipo la agenda → recordatorio (Mailpit) | `p11`/`p08` | Estado “solicitada → agendada” visible (DI-01); recordatorios 24 h y 1 h (HU-10) |
| 5 | “Para ti” con motivo → Inscribirme (≤3 clics) → QR → asistencia 18 de 24 | `p11` → `p09` | Motivo explicable (HU-13); QR de token fijo (alcance R3) |
| 6 | “Mi ruta”: “Avisar al equipo que lo terminé” → equipo marca cumplido → +25 pts → nivel 4 Impulsor + insignia Cumplidor | `p11`, `p12`, `p06` | R3: el emprendedor avisa y el equipo confirma (hecho real, DI-47); festejo medido (P3) |
| 7 | Brechas: mapa de calor → clic en celda → 41 empresas → reporte de impacto “declarado vs verificado” → CSV/imprimir | `p10` | Drill-through (DI-37); mapa con número y trama (DI-26) |
| 8 | Auditoría navegable (filtro usuario/empresa/fecha) | `p13` | HU-24 |

### 4.2 Los 5 flujos de `06` §3

| # | Flujo | Pasos | Estados que el mockup debe mostrar |
|---|---|---|---|
| F1 | Buscar empresa | E2 escribir → resultados → clic → E3 pestaña Línea de tiempo | vacío (“Sin resultados” + “Crear empresa”), cargando (esqueleto), error (`ERR.*`), éxito |
| F2 | Alta sin duplicar | E4 → NIT al perder foco → advertencia de dígito (RF-31) → banner de duplicado con señales (RF-36) → [Abrir] / [Es otra distinta] → guardar | NIT válido, NIT con dígito erróneo, duplicado alta/media |
| F3 | Cita | M4 solicitar → E9 solicitadas → agendar → recordatorios → registrar resultado + compromiso | sin citas, cargando, error de correo (RNF-19: se registra “pendiente de envío”), éxito |
| F4 | Evento | E10 crear/publicar → M5 recomendación con motivo → inscribirse → QR → asistencia → resumen → puntos | cupo lleno, sin eventos, escaneo inválido, éxito |
| F5 | Pregunta de investigación | E12 sector → ranking → clic en dimensión → lista de empresas con esa brecha → exportar | sin datos para el sector, cargando, éxito |

### 4.3 Flujos nuevos de Ronda 4 (`investigacion/06`)

| Flujo | Pasos | Pantalla |
|---|---|---|
| Fusión con origen y deshacer (RF-35) | Banner → [Comparar] → elegir por campo (con origen y fecha) → vista previa → fusionar → toast con [Deshacer] 30 s `PROPUESTA` | `p05` |
| Sello de confianza (RF-48) | Cabecera de ficha muestra anillo `confianza_ficha` y sellos por campo; clic abre el detalle de procedencia | `p06` |
| Consulta al registro (RF-32, `PROPUESTA`) | En alta, botón “Consultar registro” → resultado con estado verificado/no disponible; si falla, degrada (RNF-19) | `p04` |
| Brecha → compromiso → oferta (RF-49) | Desde brecha de una empresa: “Crear compromiso” → sugerencia de evento | `p10` / `p06` |

## 5. Decisiones de diseño transversales

| ID | Decisión | Razón |
|---|---|---|
| DD-01 | Un solo layout de escritorio: barra lateral 240 px + cabecera 64 px + contenido máx. 1200 px; móvil: barra inferior | Consistencia (DI-04); línea de lectura (DI-20) |
| DD-02 | Densidad: filas 48 px por defecto; opción compacta 40 px `PROPUESTA` | Carbon (DI-22); WCAG 2.5.8 |
| DD-03 | Estados en cada pantalla controlados por `?estado=vacio|cargando|error|exito` y selector flotante “Estados” en el prototipo | Permite validar C8 de `00_investigacion` §10 |
| DD-04 | Tema claro/oscuro por `data-theme` y `prefers-color-scheme` | `16`; WCAG 1.4.3 en ambos |
| DD-05 | Marca provisional: texto “CDE · Hilo” (sin logo) | Regla de misión; `99_decisiones.md` |
| DD-06 | Fecha de demo fija 29-oct-2026; formatos colombianos (29 oct 2026, 1.234,5) | `21_casos_demo`, `21_microcopy` |

## 6. Criterio de aceptación

1. Cada pantalla del mapa §3.2 tiene al menos un flujo de §4 y uno o más RF.
2. Los 8 pasos del camino dorado y los 5 flujos de `06` §3 tienen estados descritos.
3. Todo principio y decisión cita `DI-xx`, `HU/RF` o una necesidad literal del reto.
4. Los destinos de navegación por rol son ≤7 (equipo CDE: 7 grupos incl. “Más”; emprendedor: 4).
