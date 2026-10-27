# 10 · Especificación de pantalla 09: Eventos, QR y asistencia

**Objetivo.** Publicar eventos, ver quién se inscribió y quién llegó, y registrar asistencia con QR o a mano.
**Entradas.** `prototipo/p09-eventos.html` (mockup navegable), `21_microcopy.md`, `21_casos_demo.md`, `05_arquitectura.md` §3 (API), `02_tokens.md`, `03_componentes.md`, `01_brief_y_ia.md`.
**Pantallas del manual.** E10 (y M5 en p11) · **Roles.** equipo_cde, administrador
**Tarea(s).** T-23 (eventos back), T-24 (front E10, M5, QR), T-25 (recomendación)
**Requisitos.** RF-10, RF-11, RF-12 · **Criterio de evaluación que protege.** Funcionalidad 60 · **ISO/IEC 25010.** Adecuación funcional, Fiabilidad (cupo y concurrencia)
**Decisiones y contradicciones relacionadas.** DEC-09, DEC-16 (ver `99_decisiones.md`).

## 1. Componentes (de arriba abajo)

| # | Componente | Qué es y cómo se comporta |
|---|---|---|
| 1 | Tabla de eventos | Nombre, fecha, tipo, cupo, estado. |
| 2 | Resumen | Texto `E10.resumen` y barra de asistencia con `role=progressbar`. |
| 3 | Tabla de asistencia | Persona, asistencia, acción «Registrar asistencia». |
| 4 | Código QR | Imagen con texto alternativo; en la app real se genera con `qrcode.react`; token firmado por evento, válido en su ventana. |
| 5 | Diálogo Nuevo evento | Nombre y cupo con validación `ERR.cupo`. |

## 2. Datos que consume

| Endpoint (prefijo `/api/v1`) | Campos usados |
|---|---|
| `GET /api/v1/eventos` | id, nombre, fecha, tipo, cupo, inscripciones, estado |
| `GET /api/v1/eventos/{id}/resumen` | inscritos, asistentes, no_show |
| `GET /api/v1/eventos/{id}/inscripciones` | persona, estado_asistencia |
| `POST /api/v1/eventos/{id}/asistencia` | persona_id (manual) |
| `POST /api/v1/asistencia/qr` | token |
| `POST /api/v1/eventos` | nombre, fecha, tipo, cupo ≥ 1 |

Errores comunes: 401 sin sesión → `ERR.401`; 403 → `ERR.403`; 422 → `ERR.422`; 429 → `ERR.429`; 500 → `ERR.500`; sin red → `ERR.red`.

## 3. Reglas de interacción

1. Escanear suma una asistencia y actualiza el resumen y la barra; la misma persona no suma dos veces.
2. Cupo lleno devuelve `E10.cupo_lleno`.
3. Crear evento con cupo 0 muestra `ERR.cupo` y mueve el foco al campo.

## 4. Textos exactos

| Clave | Texto |
|---|---|
| `E10.titulo` | Eventos y capacitaciones |
| `E10.nuevo` | Nuevo evento |
| `E10.publicar` | Publicar |
| `E10.inscritos` | {n} inscripciones de {cupo} cupos |
| `E10.asistencia` | Registrar asistencia |
| `E10.qr` | Mostrar código QR |
| `E10.resumen` | {insc} inscripciones · {asis} asistencias · {no} sin asistir |
| `E10.cupo_lleno` | El cupo está lleno. |
| `E10.asistencia_ok` | Asistencia registrada para {nombre}. |
| `ERR.cupo` | El cupo debe ser de al menos 1 persona. |

## 5. Estados

| Estado | Qué se muestra |
|---|---|
| Vacío | «Aún no hay eventos» con «Nuevo evento». |
| Cargando | Esqueleto. |
| Error | `ERR.500`. |
| Éxito | Tablas y QR. |

Cada estado se puede ver en el mockup con `?estado=vacio|cargando|error|exito`; tema con `?tema=oscuro`.

## 6. Accesibilidad

Cumple las comprobaciones C1–C28 de `00_investigacion.md` §10: foco visible de 3 px, objetivos ≥ 44 px, ninguna información solo por color, `role=status/alert` en avisos, reflujo a 390 px. Resultados medidos: `90_revision.md`.

## 7. Criterio de aceptación

1. El resumen dice 24 inscripciones · 18 asistencias · 6 sin asistir (valores del guion, se leen del seeder).
2. El QR tiene texto alternativo y no depende del color.
3. Dos inscripciones simultáneas al último cupo: una entra y otra queda en espera (prueba de T-23).
