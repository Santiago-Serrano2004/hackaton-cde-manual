# 01 · Dirección y mecánicas del módulo de formación por recompensas («El hilo»)

**Objetivo.** Dejar decidido, sin que quien construya tenga que elegir, cómo se ve, suena (no suena), se mueve y se comporta el módulo de formación por recompensas para que sea **intuitivo y divertido sin parecer infantil** ante personas emprendedoras adultas y docentes (RES-09, CRI-09).
**Entradas.** `00_investigacion.md`, `06_ux_gamificacion.md` §7, `21_contenido_formacion.md`, `21_casos_demo.md`, `21_microcopy.md`, `diseno/02_tokens.md`, `diseno/99_decisiones.md`, `tareas/T-40..T-47`, `20_plan_que_cabe.md` §3 y §7.
**Prototipo.** `prototipo/index.html` (abrir en un navegador; no necesita servidor). **Especificaciones por pantalla:** `10_especificacion_G1…G6`. **Evidencia:** `90_revision.md`.
**Marca.** Todo lo nuevo es `PROPUESTA` salvo lo que cite un archivo de `inputs/`. Las cifras de puntos, niveles e insignias **no cambian**: son las de `21_contenido_formacion.md` §2 y `T-43`.

## 1. La metáfora única: «El hilo»

**Decisión.** Cada hecho verificado del acompañamiento deja una **puntada** en el hilo de la persona; el hilo recorre la **ruta** (Mi ruta) y su historia se ve como una fila de **baldosas** agrupadas por nivel («Tu hilo»). Razones y comparación con «camino» y «huerto»: `00_investigacion.md` §3 (34 de 35 puntos).

| Qué | Cómo se llama en pantalla | Regla |
|---|---|---|
| Hecho que da puntos | «puntos» y, en «Tu hilo», una **baldosa** | Los textos conservan los términos de `21_microcopy.md` (nivel, insignia, puntos, misión). «Puntada» solo aparece en el título de la sección y en textos de ayuda |
| Historial de puntos | **Tu hilo**: baldosas por nivel + tabla equivalente en un panel plegable | La tabla sigue existiendo (accesibilidad y auditoría) |
| Nivel | «Nivel 3 de 6 · Constructor» con un **emblema** propio | Los seis nombres de `GAM.nivel.*` no cambian |
| Insignia | Insignia con **aro cosido** (borde punteado como una costura) | Criterio visible y estado: ganada, en progreso o bloqueada |
| Ruta | El hilo une las estaciones: continuo hasta «Estás aquí», punteado después | El hilo **no se deshace** (RG-06) |

**Reglas de uso.** (1) Una sola metáfora: sin mascotas, personajes ni emojis. (2) El hilo solo avanza. (3) Nada se llama «juego», «ganar», «misión épica» ni «recompensa» en la interfaz: se dice lo que pasó. (4) El arte es de una tinta (`--tinta`) con acentos amarillos; ninguna ilustración lleva rostros.

## 2. Paleta, contraste y no depender del color

Todos los colores salen de `diseno/02_tokens.md`. **No se añade ninguna familia de color.** Los tokens nuevos son alias de los existentes:

| Token nuevo | Claro | Oscuro | Uso |
|---|---|---|---|
| `--g-sello-fondo` | `var(--amarillo)` #FFCC4D | `var(--amarillo)` #FFC857 | Fondo de la insignia ganada |
| `--g-sello-trazo` | #16265C fijo | #16265C fijo | Trazos de la insignia sobre su fondo amarillo (se mantiene oscuro en ambos temas) |
| `--g-emblema-trazo` | `var(--tinta)` | `var(--tinta)` (claro en oscuro) | Trazos de los emblemas de nivel y de las insignias bloqueadas (cambian con el tema) |
| `--g-trama` | `rgb(22 38 92 / .22)` | `rgb(242 244 250 / .28)` | Líneas y puntos de las baldosas |
| `--g-colina-1`, `--g-colina-2` | #FDEFE2, #E8EDFB | #1B2556, #141C45 | Colinas decorativas bajo la ruta (sin significado) |
| `--g-prog-trazo` | `var(--tinta)` | `var(--tinta)` | Arco de progreso del aro de la insignia |

**Cinco tipos de baldosa: color + trama + icono + rótulo (nunca solo color).**

| Tipo | Fondo | Trama | Icono | Rótulo (leyenda y `aria-label`) |
|---|---|---|---|---|
| Ficha | `--amarillo` | lisa | documento | Ficha |
| Diagnóstico | `--info-bg` | rayas a 45° | portapapeles con lista | Diagnóstico |
| Asistencia | `--exito-bg` | puntos | personas | Asistencia |
| Cita | `--adv-bg` | rayas verticales | calendario con marca | Cita |
| Compromiso a tiempo | `--naranja` | lisa | círculo con marca | Compromiso a tiempo |

**Daltonismo.** Los tipos se distinguen por trama e icono; los estados de las insignias por forma (anillo continuo, anillo parcial, borde discontinuo con candado en la ficha) y por texto («Ganada», «En progreso · llevas 4 de 5», «Próximamente»). El naranja `#F47B20` es solo relleno con texto `--sobre-naranja`. Contraste calculado de cada pareja nueva: `90_revision.md` §4 (claro y oscuro, 54 mediciones, todas cumplen salvo una explicada).

## 3. Tono de voz

Persona emprendedora: tuteo, español de Colombia, cercano y profesional (`21_microcopy.md` §1). Reglas añadidas para este módulo:

1. **Describe el hecho antes que la cifra:** «Cumpliste “Actualizar precios”: +25 puntos» y no «+25 PUNTOS».
2. **Sin exclamaciones, diminutivos ni apelativos infantiles** («campeón», «crack», «¡Genial!»). La única excepción vigente es `GAM.nivel_sube` («¡Subiste al nivel…!»); se propone cambiarla (CON-G-06).
3. **Ayuda, no castigo:** lo vencido dice qué hacer («Habla con el equipo para reprogramarlo»), nunca «te atrasaste», «perdiste» ni «fallaste».
4. **Humor seco permitido, ironía no.** Máximo una frase ligera por pantalla («Un hábito vale más que una hoja perfecta»).
5. **Cercanía de meta solo si es cierta** («Estás a un gesto de dos logros»; RG-12).
6. **Lo que no sabemos se dice:** «Esta práctica no suma puntos en esta versión».

| En vez de… | Usa… |
|---|---|
| ¡Felicidades, campeón! Ganaste 25 puntos | Cumpliste «Actualizar precios»: +25 puntos |
| Te quedaste atrás con 2 compromisos | Venció el 14 oct 2026. Habla con el equipo para reprogramarlo |
| ¡Desbloqueaste el logro épico! | Nueva insignia: Cumplidor |
| Racha de fuego | (no existe; DEC-11) |
| Estás en el puesto 8 de 14 | Tu posición: 8 de 14 personas que participan (solo si participas) |

## 4. Mecánicas: qué cambia y qué no

**No cambia (decisiones de R3 y de la persona revisora):** puntos y niveles atados a hechos del sistema (`T-43` §5, `21_contenido_formacion.md` §2); idempotencia y topes mensuales; sin asignación libre de puntos; sin cola de validación (el equipo marca el compromiso; DEC-09); sin rachas (DEC-11); opción de ocultar; tabla de posiciones opcional y con anonimato (DEC-13).

**Qué se añade (todo derivado de datos que ya existen; ningún punto nuevo):**

| ID | Mecánica | De dónde sale el dato | Por qué (RG / IG) |
|---|---|---|---|
| M-01 | **Tu hilo**: baldosas agrupadas por nivel con el detalle de cada una | `puntos_movimientos` (T-43) ordenados por fecha; el nivel de cada baldosa es el que tenía la persona **al sumarla** | RG-02, IG-03, IG-07, IG-11 |
| M-02 | **Resumen del nivel que termina**: 3 cifras reales (puntadas nuevas, compromisos a tiempo, cambio de la dimensión del último diagnóstico) | Consulta de `puntos_movimientos` entre los umbrales + `diagnosticos` (T-41) | RG-03, RG-13, PA-G7 |
| M-03 | **Hallazgo del diagnóstico**: antes y después por dimensión con una frase neutra | Primer y último diagnóstico (T-41) | RG-13, PA-G8, reto «de datos a conocimiento» |
| M-04 | **«A un gesto de…»**: aviso si el siguiente hecho disponible completa un nivel o una insignia | Puntos faltantes, compromiso pendiente y contador de la insignia | RG-12, IG-12 |
| M-05 | **Misión como vista derivada**: pasos verificables con estado; completar una misión **no da puntos extra** | Hechos ya registrados (`21_contenido_formacion.md` §3) | RG-01 |
| M-06 | **«Mi enfoque»**: la persona elige cuál de sus misiones en curso destacar | Preferencia por persona (PROPUESTA) | RG-04, IG-06, IG-07 |
| M-07 | **Intensidad** Completo / Discreto / Oculto (sustituye al interruptor binario de DEC-13) | Preferencia por persona (PROPUESTA) | RG-04, RG-05, AN-04 |
| M-08 | **Práctica de la lección** con retroalimentación; **no suma puntos** | `21_contenido_formacion.md` §4 | RG-01 (no autodeclarado) |
| M-09 | **Vista de cohorte** (conteos por nivel con supresión de «menos de 3») | Agregados de `puntos_movimientos` | RG-15 |

**Tres intensidades (decisión DEC-G-02).**

| Intensidad | Qué ve la persona | Movimiento |
|---|---|---|
| **Completo** (por defecto) | Aviso de puntos, escena de cierre, tarjeta de hito con resumen, insignia estampada | Solo `transform`/`opacity`; ≤ 2,4 s por escena; con `prefers-reduced-motion` el contenido es el mismo **sin movimiento** |
| **Discreto** | Todo el contenido de avance (nivel, insignias, Tu hilo) pero **sin tarjeta de hito**: una línea de estado con el texto del hecho | Ninguno |
| **Oculto** | Sin puntos, niveles, insignias, Tu hilo, misiones ni tabla; la ruta muestra hechos y fechas, no puntos; el compromiso se marca como «Cumplido» como siempre | Ninguno |

La intensidad se **pregunta una vez** (momento G-01) y se cambia siempre desde un control visible en Mi ruta y Logros. «Oculto» no borra puntos: solo deja de mostrarlos.

## 5. Pantallas rediseñadas

Cada pantalla tiene estados normal (éxito), vacío, cargando y error, en claro y oscuro, a 1440 y 390 px (`capturas/`).

| N.º | Pantalla | Qué cambia frente a `p11`/`p12` | Especificación | Mockup |
|---|---|---|---|---|
| 1 | **Mi ruta** | Mapa ilustrado con el hilo curvo entre siete estaciones, colinas decorativas, tarjeta de nivel con emblema, «A un gesto de…», hallazgo, «Tu enfoque» | `10_especificacion_G1_mi_ruta.md` | `prototipo/mi-ruta.html` |
| 2 | **Logros** | Nivel con emblema, insignias ilustradas con tres estados, misiones con «Mi enfoque», **Tu hilo** (baldosas), tabla en panel plegable, seis niveles plegados | `10_especificacion_G2_logros.md` | `prototipo/logros.html` |
| 3 | **Módulo de formación** | Lección corta, misión de tres pasos y práctica con retroalimentación | `10_especificacion_G3_modulo.md` | `prototipo/reto.html` |
| 4 | **Panel del equipo** | Conteos por nivel con supresión y preferencia de intensidad; sin ranking | `10_especificacion_G4_equipo.md` | `prototipo/equipo.html` |
| 5 | **Tabla de posiciones (vista previa)** | Opt-in, alias, solo las cinco primeras y la persona; nunca la última | `10_especificacion_G5_posiciones.md` | `prototipo/posiciones.html` |
| 6 | **Momentos de celebración** | Catálogo de diez momentos con su versión estática | `10_especificacion_G6_momentos.md` | `prototipo/momentos.html` |

**Escena para el guion de 120 s.** En Mi ruta y en Logros, el botón «Simular la escena» ejecuta lo de `21_casos_demo.md` §3: Marcela (430 puntos, nivel 3) avisa, el equipo marca «Actualizar precios» y llegan **455 puntos, nivel 4 e insignia Cumplidor en un solo gesto** (C-38). Tiempo medido de la escena completa: 2,2 s; corte entre «cumplido» y «tarjeta de hito» ≈ 1,0 s. Ver `prototipo/index.html` («Ver la escena de 120 s»).

## 6. Momentos de celebración (catálogo)

Reglas comunes: **nunca bloquea** (ningún `<dialog>` modal; la tarjeta de hito no roba el foco y se cierra con Esc o con «Cerrar»); **una celebración mayor por acción** (G-03, G-04 y G-05 se funden en una sola tarjeta); los avisos se encolan (**máximo 1 visible**; a partir del tercero de la sesión pasan a la línea de estado); **un solo anuncio** para lector de pantalla por escena (`role="status"`).

| ID | Momento | Dispara (hecho real) | Se ve | Con movimiento | Sin movimiento | Duración | Texto | Bloquea |
|---|---|---|---|---|---|---|---|---|
| G-01 | Primera vez en el portal | Primer ingreso tras aceptar el consentimiento (M1) y antes de ver puntos | Tarjeta no modal arriba de Mi ruta: «¿Cómo prefieres que celebremos tus avances?» con tres botones (Completo, Discreto, Oculto) | Entra con opacidad 220 ms | Aparece sin movimiento | Hasta elegir o «Decidir después» (queda en Completo) | ¿Cómo prefieres que celebremos tus avances? Puedes cambiarlo cuando quieras. | No |
| G-02 | Ganar puntos | `puntos_otorgados` por un reto de un solo paso (ficha básica, asistencia, cita, diagnóstico, compromiso tardío) | Aviso breve «+30 · Asististe a «Taller de finanzas básicas»» y una baldosa nueva en El hilo | Aviso entra 220 ms, dura 5 s; baldosa crece 520 ms; contador sube 500 ms | Una línea de estado con el mismo texto; baldosa y total ya actualizados | ≤ 520 ms de movimiento; aviso 5 s | +{pts} · {motivo} | No |
| G-03 | Cumplir un compromiso a tiempo | El equipo marca el compromiso como cumplido antes de su fecha (`COMPROMISO_CUMPLIDO`) | El hilo avanza a la siguiente estación, nace una baldosa, el contador sube y la barra se llena | Tramo de hilo 420 ms → baldosa 520 ms → contador y barra 500 ms (en paralelo desde 120 ms) | Estado final inmediato: estación hecha, baldosa, total y barra | ≈ 1,0 s hasta el siguiente paso; la escena completa ≤ 2,4 s | Cumpliste «{compromiso}»: +25 puntos. | No |
| G-04 | Subir de nivel | `NivelAlcanzado` (cruzar un umbral de puntos) | Tarjeta de hito no modal con el emblema del nivel, su frase y un resumen del nivel que termina (3 cifras reales) | La tarjeta sube 16 px y aparece en 320 ms | La tarjeta aparece sin movimiento | 320 ms; queda hasta cerrarla | Nivel {n}: {nombre} · {frase} | No |
| G-05 | Ganar una insignia | `InsigniaOtorgada` (criterio cumplido) | La insignia se estampa dentro de la misma tarjeta de hito si coincide con un nivel; si no, aparece sola en una tarjeta pequeña | Estampado: de 135 % y −8° a 100 % en 520 ms, con 380 ms de retraso | La insignia aparece ya estampada | 520 ms | Nueva insignia: {nombre} | No |
| G-06 | A un gesto de… | El siguiente hecho disponible completaría un nivel o una insignia (se calcula en cada carga; se muestra mientras sea cierto) | Franja informativa bajo «Tu próximo paso»: «Estás a un gesto de dos logros…» | Ninguno | Igual | Permanente mientras sea cierto; no se repite como aviso emergente | Estás a un gesto de dos logros: cumplir «{compromiso}» a tiempo te lleva al nivel {n} y te da la insignia {insignia}. | No |
| G-07 | Completar un módulo (misión) | Todos los pasos verificables de una misión están cumplidos (derivado, no se guarda) | La misión pasa a «Recorrido completo» con borde grueso; no suma puntos extra | Borde y chip aparecen con opacidad 220 ms | Cambio inmediato de chip | 220 ms | Recorrido completo | No |
| G-08 | Hallazgo del diagnóstico | Un diagnóstico nuevo cuando ya existe uno anterior | Tarjeta «Lo que cambió desde tu primer diagnóstico» con barras antes/después por dimensión y una frase neutra | Las barras crecen en 400 ms, escalonadas 60 ms | Barras ya dibujadas | ≤ 640 ms | Tu mayor avance está en {dimension}. {dimension_baja} es hoy tu dimensión con más espacio para crecer. | No |
| G-09 | Sin puntos (repetido o tope del mes) | Reintento del mismo hecho (idempotencia) o tope mensual del reto | Aviso neutral que explica por qué no sumó | Igual que G-02 | Línea de estado | 5 s | Este logro ya estaba registrado. No se suman puntos dos veces. | No |
| G-10 | Compromiso vencido | La fecha límite pasa sin cumplir (estado automático) | Etiqueta «Vencido» con icono y texto de ayuda; **ninguna animación, ningún aviso emergente, ningún punto menos** | Ninguno | Igual | — | Venció el {fecha}. Habla con el equipo para reprogramarlo. | No |

**Combinación sin saturar (escena de 120 s).** t = 0: la estación pasa a «hecha» y el tramo de hilo se dibuja (420 ms) · t = 120 ms: la baldosa nace (520 ms) y el contador sube de 430 a 455 (500 ms) · t ≈ 1,0 s: el nivel cambia (la barra se reinicia sin animación para no «vaciarse») y entra la tarjeta de hito (320 ms) · t ≈ 1,4 s: la insignia se estampa (520 ms). Total ≈ 2,2 s. Un único anuncio: «Cumpliste «Actualizar precios»: +25 puntos, nivel 4 e insignia Cumplidor.» (`GAM.cierre_demo`).

## 7. Microinteracciones

| Elemento | Comportamiento | Duración / curva | Sin movimiento |
|---|---|---|---|
| Contador de puntos | Sube del valor anterior al nuevo (entero) con salida suave; usa `performance.now()` (no la marca del cuadro) para que nunca baje del valor inicial | 500 ms, ease-out cúbica | Cambia de golpe |
| Barra de nivel | `transform: scaleX` desde la izquierda; al cambiar de nivel se reinicia **sin transición** | 500 ms, `--curva-in` | Cambia de golpe |
| Hilo de la ruta | El tramo nuevo se dibuja con `scaleX` (o `scaleY` en vertical) | 420 ms | Aparece hecho |
| Baldosa nueva | Crece de 60 % a 100 % con un pequeño sobreimpulso | 520 ms | Aparece hecha |
| Insignia nueva | Se estampa: de 135 % y −8° a 100 % | 520 ms, retraso de 380 ms dentro de la tarjeta | Aparece estampada |
| Hallazgo | Las barras crecen escalonadas 60 ms | 400 ms | Barras dibujadas |
| Hover | Borde `--tinta` y fondo `--papel`; sin desplazamientos | 120 ms | Igual |
| Foco | Anillo de 3 px `--foco` con separación de 2 px, en todo control | — | Igual |
| Esqueleto «hilo que se teje» | Líneas punteadas que avanzan a la izquierda + bloques de `esq` existentes | 1,4 s en bucle **solo mientras carga** (< 5 s) | Líneas quietas |
| Botón «Avisar al equipo que lo terminé» | Se deshabilita y cambia a «Aviso enviado»; el pendiente pasa a «En revisión» | 120 ms | Igual |

## 8. Anti-trampa y anti-presión

**Anti-trampa (heredado de `06` §7.4 y `T-43`, sin cambios):** puntos solo por hechos del sistema; clave única `(persona, reto, referencia)`: un reintento no cobra dos veces (mensaje `GAM.sin_puntos_repetidos`); topes mensuales (`GAM.tope_mes`); movimientos solo de inserción con reversión por el administrador y motivo; **la práctica de la lección no suma puntos** (nada autodeclarado); la misión no da puntos extra (no hay forma de «farmear» misiones); el resumen del nivel y el hallazgo **solo leen**.

**Anti-presión (nuevo):**

1. Sin rachas, cuentas regresivas, «te quedan 2 días» ni notificaciones de gamificación fuera de la aplicación.
2. Lo vencido no resta ni se marca con rojo de alarma ni con animación; el texto ofrece una acción.
3. Nadie ve a otra persona: la tabla de posiciones es opt-in, con alias, y **nunca muestra a la última persona** (en su lugar, «Tu avance cuenta»).
4. El panel del equipo ve **agregados** y oculta celdas de 1 o 2 personas («menos de 3»). No hay lista de personas por puntos.
5. Si muchas personas eligen «Discreto» u «Oculto», el panel lo muestra como señal para ajustar el módulo, no como falta de la persona.
6. La persona puede ocultar todo en dos toques y sus puntos siguen contando.
7. «A un gesto de…» aparece solo si es verdad y se oculta una vez la persona avisa.

## 9. Requisitos de diseño (trazabilidad)

Criterios de evaluación: **F** = Funcionalidad 60 · **D** = Diferenciador 15 · **N** = Negocio 15 · **E** = Equipo 10. ISO/IEC 25010 según `01_requisitos.md` §4.

| ID | Requisito de diseño | Origen | Evalúa | ISO | Prueba |
|---|---|---|---|---|---|
| RD-01 | La persona elige intensidad Completo, Discreto u Oculto; la elección se pregunta una vez y se cambia en dos toques | RF-17, RF-18, DEC-13 | F | CI | `05` PU-T3; `90` §6 |
| RD-02 | Con `prefers-reduced-motion` el módulo muestra el mismo contenido sin movimiento y sin animaciones en curso | RNF-05, WCAG 2.3.3 (objetivo AAA) | F | CI | `90` §5 (0 animaciones) |
| RD-03 | Ninguna celebración bloquea: sin modal, Esc cierra, el resto de la página sigue operable | RNF-04 | F | CI | `90` §6 |
| RD-04 | Cada celebración parte de un hecho verificable y se anuncia una vez con `role="status"` | RF-17, WCAG 4.1.3 | F | CI, FI | `90` §6 |
| RD-05 | Insignias con criterio visible, tres estados distinguibles sin color y texto alternativo | RF-18 (≥ 5 definidas; 3 en A/B) | F, D | CI | `90` §3 y §4 |
| RD-06 | «Tu hilo» muestra cada movimiento de puntos y suma exactamente los puntos de la persona (430 antes, 455 después) | RF-17, C-38 | F | AF | `90` §7 |
| RD-07 | La ruta muestra el siguiente paso y el avance sin animación; el hilo es continuo hasta «Estás aquí» | RF-13, CRI-05 | F | CI, AF | `90` §3 |
| RD-08 | El hallazgo convierte los diagnósticos propios en una frase y barras antes/después con texto equivalente | Reto «de datos a conocimiento» | D, F | AF | `90` §7 |
| RD-09 | La tabla de posiciones es opt-in, con alias, apagada por defecto y sin mostrar a la última persona | RF-19, DEC-13 | F | CI, SE | `90` §6 |
| RD-10 | El panel del equipo muestra solo agregados y suprime celdas de 1 o 2 personas | RNF-13, `04` §6 | F, N | SE | `90` §6 |
| RD-11 | Los textos, puntos, niveles y fechas coinciden con `21_contenido_formacion.md` y `21_casos_demo.md` | C-38, C-39 | F | AF | `90` §7 |
| RD-12 | Cero violaciones de axe-core; Lighthouse de accesibilidad 100; CLS ≤ 0,1 | RNF-05, `15` §8 | F | CI, ED | `90` §2 |
| RD-13 | La interfaz se entiende sin leer: una persona ajena logra «ver mis puntos y mi próxima insignia» en ≤ 2 min | RNF-04, CRI-09 | F, N | CI | `05` PU-T1, PU-T2 |
| RD-14 | Costo declarado en horas y origen del tiempo para cada elemento | `CLAUDE.md` (Ronda 2) | E | MA | §10 |

## 10. Implementabilidad, tareas, requisitos y horas

**Presupuesto de referencia (`20_plan_que_cabe.md` §3).** María Paula: T-43 (a+b) 1,75 h, T-44 2,0 h, T-47a 0,75 h solo en B. Colchón en A: **1,5 h**; en B: **0 h** (queda en 11,75 h con T-91). Las horas de abajo son **estimaciones propias, no medidas** (`PROPUESTA`) y son el **incremento** sobre ese plan. Implementabilidad: alta = componente de React con CSS y SVG de este paquete; media = requiere lógica o un dato nuevo; baja = costoso o frágil.

| ID | Elemento | Tarea | RF | Criterio · ISO | Δ horas | Implem. | Si es baja o media, se simplifica a… |
|---|---|---|---|---|---:|---|---|
| E-01 | Sprite de 7 insignias, 6 emblemas, carrete y colinas (`ilustraciones/`, 1,4 KB gzip) | T-44 | RF-18 | F, D · CI | 0,25 | Alta | — |
| E-02 | Tarjeta de nivel con emblema y barra con `aria-valuetext` | T-44 (M2, M7) | RF-17 | F · CI | 0,10 | Alta | — |
| E-03 | Insignias con tres estados y ficha plegable | T-44 (M7), T-43 | RF-18 | F, D · CI | 0,25 | Alta | — |
| E-04 | Tu hilo: baldosas por nivel + tabla en panel plegable | T-44 (M7) | RF-17 | F · CI | 0,35 | Alta | — |
| E-05 | Tarjeta de hito no modal con resumen del nivel | T-44, T-43b | RF-17, RF-18 | F, D · CI | 0,35 | Media | Sin resumen (solo nivel e insignia): 0,15 |
| E-06 | «A un gesto de…» | T-44 | RF-17 | F · CI | 0,10 | Alta | — |
| E-07 | Intensidad de 3 valores + persistencia + pregunta de primera vez | T-44, T-46 | RF-17 | F · CI | 0,40 | Media | Dos valores (el interruptor actual «Ocultar puntos y niveles»): 0 |
| E-08 | Mapa de ruta con hilo curvo calculado y colinas | T-47a / T-47 | RF-13 | F, D · CI | 0,25 en B (sobre T-47a); 1,00 en A | Media-baja | Lista vertical con línea cosida de `base.css` (`.ruta`): 0 |
| E-09 | Animaciones de puntada, contador, insignia y barra | T-47b (lista de espera) | RF-18 | F, D · CI | 0,50 | Media | Solo CSS, sin contador: 0,25 |
| E-10 | Hallazgo del diagnóstico (antes/después) | T-41, T-44 | RF-05, RF-17 | D, F · AF | 0,40 | Alta | — |
| E-11 | Misiones derivadas y «Mi enfoque» | T-44 | RF-17 | F · CI | 0,50 | Media | Lista sin enfoque: 0,25 |
| E-12 | Esqueletos «hilo», vacíos con carrete y error | T-40, T-44 | RNF-04 | F · CI | 0,10 | Alta | — |
| E-13 | Módulo de formación: lección + práctica sin puntos | T-44 (fuera de A y B) | RF-17 | F, D · CI | 1,00 | Media | Texto de la lección + preguntas impresas como guion de taller (`21_contenido_formacion.md` §1): 0 |
| E-14 | Panel de cohorte (conteos con supresión + intensidades) | T-45, T-43 (fuera de A y B) | RF-19, RNF-13 | N, F · SE | 0,50 | Media | Tabla de conteos sin barras: 0,30 |
| E-15 | Tabla de posiciones opt-in con alias | RF-19 (Should, fuera) | RF-19 | F · CI, SE | 0,75 | **Baja** | Fuera; se muestra solo la vista previa y se explica como siguiente paso |

**Tres versiones. Elegir una en T-01 (PD-G01).**

| Versión | Incluye | Δ horas | De dónde sale el tiempo |
|---|---|---:|---|
| **MÍNIMA** (solo CSS y SVG; sin librerías nuevas) | E-01, E-02, E-03, E-04, E-05 simplificada (0,15), E-06, E-12 | **1,30** | **A:** colchón de María Paula (1,5 h; quedan 0,2 h). **B:** B no tiene colchón. **Supuesto S-1, no verificado:** esta versión reemplaza piezas que T-44 ya trae (tabla de historial, lista de insignias, toast con confeti) y eso libera tiempo; `20` no desglosa T-44. Se confirma al empezar T-44: si no hay 1,3 h de holgura, se baja a E-01 + E-03 (0,5 h) y el resto queda como lista de espera |
| **ESTÁNDAR** | MÍNIMA + E-07 (0,40) + E-09 simplificada (0,25) + E-10 (0,40) + E-11 simplificada (0,25) + E-08 en B (0,25) | **2,85** (A: **3,60** con el mapa completo) | **No cabe en el colchón.** Se hace solo si T-44 termina antes de la compuerta G-G1 (21:30) y consume la lista de espera de `20` §9.5 (T-47b). Cada elemento se corta en este orden: E-09 → E-11 → E-07 → E-10 |
| **COMPLETA** | Los 15 elementos completos (suma de §10) | ≈ 6,55 en A y 5,80 en B | **Fuera del presupuesto del 28-29.** Siguiente iteración o ventana posterior al hackatón; se presenta como hoja de ruta |

**Qué se corta primero dentro de la MÍNIMA** (si T-44 se atrasa más de 0,5 h al empezar): E-12 (los vacíos del manual ya existen), luego E-06, luego el resumen de E-05, luego E-04 se reduce a la tabla existente. E-01 y E-03 se conservan: son los que hacen que el módulo «se vea» distinto (insignias y emblemas) por 0,5 h.

**Quién.** María Paula construye todo el front. Santiago o Julián: solo la consulta del resumen del nivel (E-05, 0,15 h dentro del total) y los agregados de E-14 (fuera de A y B).

## 11. Riesgos del diseño

| ID | Riesgo | Decisión |
|---|---|---|
| RI-01 | Se perciba infantil | Reglas de §1 y §3; seis riesgos concretos y su decisión en `90_revision.md` §9; prueba con cinco adultos en `05` |
| RI-02 | La escena «roba» la atención de la demo | Máximo 2,4 s; un solo aviso; se puede apagar con «Discreto» |
| RI-03 | Costo de María Paula | §10: la MÍNIMA cuesta 1,30 h y se corta por orden; S-1 pendiente de confirmar |
| RI-04 | El «resumen del nivel» afirma algo falso si faltan datos | Se muestra solo si hay ≥ 1 diagnóstico anterior; si no, se omite esa línea |
| RI-05 | La evidencia es de estudiantes, no de personas emprendedoras (NV-G1) | Se presenta como hipótesis y se mide con SUS y Likert (`05`) |

## Criterio de aceptación

1. Una persona que no leyó este archivo abre `prototipo/index.html`, ejecuta «Ver la escena de 120 s» y observa 455 puntos, nivel 4 e insignia Cumplidor en una sola escena de ≈ 2,2 s.
2. Con la intensidad en Discreto u Oculto o con movimiento reducido, la misma escena termina con el mismo estado y sin animaciones en curso.
3. Cada fila de §10 tiene tarea, requisito, horas, implementabilidad y simplificación.
4. Los puntos, niveles y textos coinciden con `21_contenido_formacion.md` y `21_casos_demo.md` (`90_revision.md` §7).
