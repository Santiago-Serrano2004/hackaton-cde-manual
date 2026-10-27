# 10 · Especificación de pantalla 11: Portal de la persona emprendedora: Mi ruta

**Objetivo.** Decir a la persona dónde va, cuál es su siguiente paso y qué le conviene, y celebrar con medida cuando cumple.
**Entradas.** `prototipo/p11-mi-ruta.html` (mockup navegable), `21_microcopy.md`, `21_casos_demo.md`, `05_arquitectura.md` §3 (API), `02_tokens.md`, `03_componentes.md`, `01_brief_y_ia.md`.
**Pantallas del manual.** M2, M3, M5 · **Roles.** emprendedor
**Tarea(s).** T-44 (portal M2–M7), T-47 (mapa de ruta), T-25 (recomendación), T-24 (inscripción)
**Requisitos.** RF-13, RF-10, RF-11, RF-17, RF-18 · **Criterio de evaluación que protege.** Funcionalidad 60 · Diferenciador 15 · **ISO/IEC 25010.** Capacidad de interacción, Adecuación funcional
**Decisiones y contradicciones relacionadas.** DEC-09, DEC-11, DEC-13; CON-11 (ver `99_decisiones.md`).

## 1. Componentes (de arriba abajo)

| # | Componente | Qué es y cómo se comporta |
|---|---|---|
| 1 | Tarjeta de nivel | Nivel, puntos, barra de progreso con `role=progressbar` y texto «Te faltan n puntos». |
| 2 | Mapa de ruta | Lista ordenada `ol`: hecho (amarillo), aquí (naranja con doble anillo), siguiente (hueco); línea continua a punteada; vertical a 640 px o menos. |
| 3 | Tarjeta del siguiente paso | Compromiso, fecha, botón «Avisar al equipo que lo terminé». |
| 4 | Vista del equipo (solo prototipo) | Simula que el equipo marca cumplido. |
| 5 | Pendientes | Lista con estado e icono. |
| 6 | Para ti | Tarjeta de evento con motivo y «Inscribirme». |
| 7 | Celebración | Toasts de puntos, nivel e insignia; confeti de 40 partículas; se desactiva con movimiento reducido. |

## 2. Datos que consume

| Endpoint (prefijo `/api/v1`) | Campos usados |
|---|---|
| `GET /api/v1/mi/progreso` | puntos, nivel{numero,nombre,desde,hasta}, insignias[], retos[], etapa |
| `GET /api/v1/mi/compromisos` | compromiso, fecha_limite, estado |
| `PUT /api/v1/mi/compromisos/{id}` | estado=`avisado` (R3: queda «En revisión») |
| `PUT /api/v1/compromisos/{id}` | (equipo) estado=`cumplido` → puntos y nivel por eventos de dominio |
| `GET /api/v1/mi/oferta` | eventos[{id,nombre,fecha,cupo,inscritos,motivo}] |
| `POST /api/v1/eventos/{id}/inscribirme` | 201 inscrito / 200 lista de espera |

Errores comunes: 401 sin sesión → `ERR.401`; 403 → `ERR.403`; 422 → `ERR.422`; 429 → `ERR.429`; 500 → `ERR.500`; sin red → `ERR.red`.

## 3. Reglas de interacción

1. «Avisar al equipo que lo terminé» deshabilita el botón, cambia el estado a «En revisión» y muestra `M3.avisar_ok`.
2. Cuando el equipo marca cumplido: el nodo pasa a hecho y el siguiente a «Estás aquí»; los puntos cuentan de 430 a 455 en 500 ms; nivel 4 Impulsor; insignia Cumplidor; región `aria-live` anuncia «Compromiso cumplido. +25 puntos. Nivel 4 alcanzado.»
3. Con `prefers-reduced-motion: reduce` el conteo es instantáneo y no hay confeti (`GAM.reducir_movimiento`).
4. Inscribirme confirma y suma uno al cupo (23 a 24 de 30).

## 4. Textos exactos

| Clave | Texto |
|---|---|
| `M2.saludo` | Hola, {nombre} |
| `M2.etapa` | Vas en la etapa «{etapa}» |
| `M2.puntos` | {n} puntos · Nivel {nivel}: {nombre_nivel} |
| `M2.falta` | Te faltan {n} puntos para el nivel {nivel}. |
| `M2.siguiente` | Tu próximo paso: {paso} |
| `M2.vacio_paso` | Todo al día por ahora. El equipo te propondrá un nuevo paso en tu próxima sesión. |
| `M3.avisar` | Avisar al equipo que lo terminé |
| `M3.avisar_ok` | Listo. El equipo revisará y marcará tu compromiso. |
| `M3.vence` | Vence el {fecha} |
| `M3.vencido` | Venció el {fecha}. Habla con el equipo para reprogramarlo. |
| `M5.titulo` | Para ti |
| `M5.motivo` | Te lo recomendamos porque {motivo}. |
| `M5.inscribirme` | Inscribirme |
| `M5.inscrito_ok` | Tu inscripción en «{evento}» quedó confirmada. Te recordaremos antes de que empiece. |
| `GAM.punto_toast` | +{pts} · {motivo} |
| `GAM.nivel_sube` | ¡Subiste al nivel {n}: {nombre}! |
| `GAM.insignia_nueva` | Nueva insignia: {nombre} |

## 5. Estados

| Estado | Qué se muestra |
|---|---|
| Vacío | `M2.vacio_paso`. |
| Cargando | Esqueleto. |
| Error | `ERR.red`. |
| Éxito | Mapa, siguiente paso y oferta. |

Cada estado se puede ver en el mockup con `?estado=vacio|cargando|error|exito`; tema con `?tema=oscuro`.

## 6. Accesibilidad

Cumple las comprobaciones C1–C28 de `00_investigacion.md` §10: foco visible de 3 px, objetivos ≥ 44 px, ninguna información solo por color, `role=status/alert` en avisos, reflujo a 390 px. Resultados medidos: `90_revision.md`.

## 7. Criterio de aceptación

1. Marcela: 430 puntos, nivel 3 Constructor, 20 puntos faltan.
2. Tras el cierre: 455 puntos, nivel 4 Impulsor, insignia Cumplidor, un solo gesto.
3. A 390 px el mapa es vertical, sin scroll horizontal.
4. Sin movimiento, el logro se comunica con texto y color.
