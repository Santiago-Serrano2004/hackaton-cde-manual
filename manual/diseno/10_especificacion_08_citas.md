# 10 · Especificación de pantalla 08: Citas y recordatorios (equipo y emprendedor)

**Objetivo.** Que la persona emprendedora pida su cita y el equipo la agende con recordatorios automáticos.
**Entradas.** `prototipo/p08-citas.html y p08b-mis-citas.html` (mockup navegable), `21_microcopy.md`, `21_casos_demo.md`, `05_arquitectura.md` §3 (API), `02_tokens.md`, `03_componentes.md`, `01_brief_y_ia.md`.
**Pantallas del manual.** E9, M4 · **Roles.** equipo_cde, administrador; emprendedor (M4)
**Tarea(s).** T-20 (citas), T-21 (recordatorios), T-22 (front E9 y M4)
**Requisitos.** RF-08, RF-09, RNF-19 · **Criterio de evaluación que protege.** Funcionalidad 60 · **ISO/IEC 25010.** Fiabilidad, Capacidad de interacción
**Decisiones y contradicciones relacionadas.** DEC-16 (ver `99_decisiones.md`).

## 1. Componentes (de arriba abajo)

| # | Componente | Qué es y cómo se comporta |
|---|---|---|
| 1 | Pestañas Solicitadas, Agendadas, Realizadas | Tabla por pestaña con acciones. |
| 2 | Diálogo Agendar | Fecha y hora, persona asesora. |
| 3 | Diálogo Registrar resultado | Notas y acuerdos, casilla «Crear un compromiso». |
| 4 | Panel de recordatorios | Lista de recordatorios programados (24 h y 1 h) y vista del correo. |
| 5 | Portal M4 | Próxima cita, botón Solicitar cita, historial, diálogo con tema, franja y modalidad. |

## 2. Datos que consume

| Endpoint (prefijo `/api/v1`) | Campos usados |
|---|---|
| `GET /api/v1/citas?estado=` | id, empresa, tema, fecha, estado |
| `POST /api/v1/citas/{id}/agendar` | fecha_hora, asesor_id → 200 y recordatorios[{tipo,programado_para,estado}] |
| `POST /api/v1/citas/{id}/resultado` | notas, crear_compromiso |
| `POST /api/v1/mi/citas` | tema, franja, modalidad |
| `GET /api/v1/mi/citas` | próximas e historial |

Errores comunes: 401 sin sesión → `ERR.401`; 403 → `ERR.403`; 422 → `ERR.422`; 429 → `ERR.429`; 500 → `ERR.500`; sin red → `ERR.red`.

## 3. Reglas de interacción

1. Agendar crea dos recordatorios (24 h y 1 h antes) y los muestra como «programado»; el envío cambia a «enviado».
2. Si el envío falla, se registra «pendiente de envío», se reintenta y aparece `NOTI.recordatorio_fallido`; la cita no se afecta (RNF-19).
3. En el portal, Solicitar cita agrega la fila «Solicitada» al historial con resaltado de 600 ms.

## 4. Textos exactos

| Clave | Texto |
|---|---|
| `E9.titulo` | Citas |
| `E9.tab_solicitadas` | Solicitadas |
| `E9.tab_agendadas` | Agendadas |
| `E9.tab_realizadas` | Realizadas |
| `E9.agendar` | Agendar |
| `E9.fecha_hora` | Fecha y hora |
| `E9.asesor` | Persona asesora |
| `E9.agendada_ok` | Cita agendada. Se enviarán dos recordatorios. |
| `E9.resultado` | Registrar resultado |
| `E9.vacio_solicitadas` | No hay solicitudes pendientes. |
| `M4.titulo` | Mis citas |
| `M4.solicitar` | Solicitar cita |
| `M4.tema` | ¿Sobre qué quieres hablar? |
| `M4.franja` | ¿Cuándo te queda mejor? |
| `M4.modalidad` | Presencial o virtual |
| `M4.enviada` | Recibimos tu solicitud. El equipo te confirmará la fecha por correo. |
| `M4.vacio` | No tienes citas próximas. Solicita una cuando la necesites. |
| `MAIL.cita_24h (asunto)` | Recordatorio: tu cita es mañana |

## 5. Estados

| Estado | Qué se muestra |
|---|---|
| Vacío | `E9.vacio_solicitadas` / `M4.vacio`. |
| Cargando | Esqueleto de 5 filas. |
| Error | `ERR.500` o `ERR.red`. |
| Éxito | Tabla y confirmaciones. |

Cada estado se puede ver en el mockup con `?estado=vacio|cargando|error|exito`; tema con `?tema=oscuro`.

## 6. Accesibilidad

Cumple las comprobaciones C1–C28 de `00_investigacion.md` §10: foco visible de 3 px, objetivos ≥ 44 px, ninguna información solo por color, `role=status/alert` en avisos, reflujo a 390 px. Resultados medidos: `90_revision.md`.

## 7. Criterio de aceptación

1. Agendar muestra «Cita agendada. Se enviarán dos recordatorios.» y los dos recordatorios.
2. El correo de ejemplo usa `MAIL.cita_24h` y el pie de demostración.
3. A 390 px la tabla se apila sin scroll horizontal.
