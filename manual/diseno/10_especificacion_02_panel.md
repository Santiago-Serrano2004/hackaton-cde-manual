# 10 · Especificación de pantalla 02: Panel del día del equipo CDE

**Objetivo.** Responder «¿qué necesita atención hoy?» con cifras que llevan a la lista que las compone.
**Entradas.** `prototipo/p02-panel.html` (mockup navegable), `21_microcopy.md`, `21_casos_demo.md`, `05_arquitectura.md` §3 (API), `02_tokens.md`, `03_componentes.md`, `01_brief_y_ia.md`.
**Pantallas del manual.** E1 · **Roles.** equipo_cde, administrador
**Tarea(s).** Sin tarea propia en `backlog.csv` (PD-08); `PROPUESTA` construirla con T-45 (dashboard) reutilizando T-16
**Requisitos.** RF-07, RF-08, RF-09, RF-20, RF-37 · **Criterio de evaluación que protege.** Funcionalidad 60 · Negocio 15 · **ISO/IEC 25010.** Adecuación funcional, Capacidad de interacción
**Decisiones y contradicciones relacionadas.** DEC-16, PD-08 (ver `99_decisiones.md`).

## 1. Componentes (de arriba abajo)

| # | Componente | Qué es y cómo se comporta |
|---|---|---|
| 1 | Fila de cifras (Stat enlazada) | Cuatro enlaces: compromisos vencidos (18 %), citas de hoy, solicitudes nuevas, fichas con sector (36 % / 37 %). |
| 2 | Tabla «Compromisos vencidos» | Tres filas máximo en el panel; enlace «Ver todos». |
| 3 | Lista «Tareas de hoy» | Tres tareas con enlace. |
| 4 | Lista «Eventos próximos» | Nombre, fecha, inscripciones de cupos. |
| 5 | Aviso de calidad de datos | Aviso amarillo con icono y enlace a Análisis. |

## 2. Datos que consume

| Endpoint (prefijo `/api/v1`) | Campos usados |
|---|---|
| `GET /api/v1/compromisos?estado=vencido&per_page=3` | empresa{id,razon_social,municipio}, vencidos_count, estado |
| `GET /api/v1/citas?estado=solicitada` | id, empresa, tema, franja (cuenta → solicitudes nuevas) |
| `GET /api/v1/citas?fecha=hoy` | cuenta de citas agendadas hoy |
| `GET /api/v1/eventos?proximos=1` | nombre, fecha, inscripciones, cupo |
| `GET /api/v1/reportes/caracterizacion` | pct_con_sector, pct_con_tamano, total_empresas |

Errores comunes: 401 sin sesión → `ERR.401`; 403 → `ERR.403`; 422 → `ERR.422`; 429 → `ERR.429`; 500 → `ERR.500`; sin red → `ERR.red`.

## 3. Reglas de interacción

1. Cada cifra es un `<a>` a su lista (`/empresas?...`, `/citas`, `/analisis`).
2. Las cifras se cargan en una sola solicitud agregada si la latencia lo exige (RNF-01).
3. El estado «Todo al día» reemplaza el contenido cuando las cuatro cifras son cero y no hay eventos próximos.

## 4. Textos exactos

| Clave | Texto |
|---|---|
| `E1.titulo` | Panel del día |
| `E1.vencidos` | Compromisos vencidos |
| `E1.citas_hoy` | Citas de hoy |
| `E1.solicitudes` | Solicitudes nuevas |
| `E1.vacio_citas` | Hoy no hay citas agendadas. |
| `E2.nueva` | Nueva empresa |

## 5. Estados

| Estado | Qué se muestra |
|---|---|
| Vacío | Título «Todo al día», frase y acción «Ver eventos». |
| Cargando | Esqueleto de cuatro cifras y cinco filas. |
| Error | `ERR.500` con «Reintentar». |
| Éxito | Contenido completo. |

Cada estado se puede ver en el mockup con `?estado=vacio|cargando|error|exito`; tema con `?tema=oscuro`.

## 6. Accesibilidad

Cumple las comprobaciones C1–C28 de `00_investigacion.md` §10: foco visible de 3 px, objetivos ≥ 44 px, ninguna información solo por color, `role=status/alert` en avisos, reflujo a 390 px. Resultados medidos: `90_revision.md`.

## 7. Criterio de aceptación

1. Cada cifra tiene `href` real.
2. Tabla con encabezados y, a 390 px, filas apiladas con la etiqueta de cada dato.
3. Las cifras 18 %, 36 % y 37 % coinciden con `04` §7.1.
