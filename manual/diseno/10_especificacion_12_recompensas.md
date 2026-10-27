# 10 · Especificación de pantalla 12: Recompensas: niveles, insignias y misiones

**Objetivo.** Mostrar el progreso por hechos reales del acompañamiento sin presionar: la persona controla qué ve.
**Entradas.** `prototipo/p12-recompensas.html` (mockup navegable), `21_microcopy.md`, `21_casos_demo.md`, `05_arquitectura.md` §3 (API), `02_tokens.md`, `03_componentes.md`, `01_brief_y_ia.md`.
**Pantallas del manual.** M7 (y E14 del equipo, sin mockup) · **Roles.** emprendedor
**Tarea(s).** T-43 (gamificación back), T-44 (portal M2–M7)
**Requisitos.** RF-17, RF-18 · **Criterio de evaluación que protege.** Funcionalidad 60 · Diferenciador 15 · **ISO/IEC 25010.** Capacidad de interacción
**Decisiones y contradicciones relacionadas.** DEC-11, DEC-13; PD-05, PD-07 (ver `99_decisiones.md`).

## 1. Componentes (de arriba abajo)

| # | Componente | Qué es y cómo se comporta |
|---|---|---|
| 1 | Tarjeta de nivel | Igual que en Mi ruta. |
| 2 | Insignias | Tres del alcance R3: Primer paso, Aprendiz, Cumplidor (bloqueada con requisito); SVG propio con texto alternativo. |
| 3 | Misiones | «Ordena tus cuentas» con tres pasos y estado; «Próximamente». |
| 4 | Historial de puntos | Tabla fecha, motivo, puntos, total. |
| 5 | Niveles | Tabla con los 6 niveles y sus puntos. |
| 6 | Interruptores | «Ocultar puntos y niveles» y «Participar en la tabla de posiciones» (apagada por defecto). |

## 2. Datos que consume

| Endpoint (prefijo `/api/v1`) | Campos usados |
|---|---|
| `GET /api/v1/mi/progreso` | puntos, nivel, insignias[{codigo,nombre,obtenida,requisito}], retos[] |
| `GET /api/v1/clasificacion` | `PROPUESTA` opt-in: top 5 y posición propia |
| `GET/PUT /api/v1/retos (admin)` | catálogo de retos y puntos |

Errores comunes: 401 sin sesión → `ERR.401`; 403 → `ERR.403`; 422 → `ERR.422`; 429 → `ERR.429`; 500 → `ERR.500`; sin red → `ERR.red`.

## 3. Reglas de interacción

1. «Ocultar puntos y niveles» oculta niveles, puntos, historial y tabla de posiciones; se recuerda por persona.
2. La tabla de posiciones nunca muestra a la última persona.
3. Sin rachas (DEC-11).

## 4. Textos exactos

| Clave | Texto |
|---|---|
| `M7.titulo` | Mis logros |
| `M7.insignias_vacio` | Aún no tienes insignias. La primera llega al completar tu ficha. |
| `M7.proximas` | Próxima insignia: {insignia} |
| `M7.misiones` | Misiones |
| `M7.proximamente` | Próximamente |
| `GAM.nivel.3` | Constructor: estás levantando bases sólidas. |
| `GAM.insignia.PRIMER_PASO` | Primer paso: completaste tu ficha básica. |
| `GAM.insignia.CUMPLIDOR` | Cumplidor: cinco compromisos cumplidos a tiempo. |
| `GAM.insignia.APRENDIZ` | Aprendiz: tres capacitaciones completadas. |

## 5. Estados

| Estado | Qué se muestra |
|---|---|
| Vacío | `M7.insignias_vacio`. |
| Cargando | Esqueleto. |
| Error | `ERR.red`. |
| Éxito | Insignias, misiones, historial. |

Cada estado se puede ver en el mockup con `?estado=vacio|cargando|error|exito`; tema con `?tema=oscuro`.

## 6. Accesibilidad

Cumple las comprobaciones C1–C28 de `00_investigacion.md` §10: foco visible de 3 px, objetivos ≥ 44 px, ninguna información solo por color, `role=status/alert` en avisos, reflujo a 390 px. Resultados medidos: `90_revision.md`.

## 7. Criterio de aceptación

1. El historial suma 430 puntos con los retos de `21_casos_demo` §3.
2. Cumplidor aparece bloqueada con «Llevas 4: te falta 1».
3. Con «Ocultar puntos y niveles» marcado desaparecen los datos de puntos.
4. Cada insignia tiene texto alternativo.
