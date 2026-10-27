# 99 · Decisiones, contradicciones y preguntas del rediseño del módulo de formación

**Objetivo.** Registrar cada decisión que se aparta o aclara el manual, cada contradicción hallada y cada pregunta que bloquea, con su recomendación y quién decide.
**Entradas.** Todo lo leído para esta misión (`CLAUDE.md`, `INDEX.md`, `diseno/INDEX.md`, `diseno/99_decisiones.md`, `06`, `21_contenido_formacion.md`, `21_casos_demo.md`, `10_especificacion_11` y `12`, `tareas/T-40..T-47`, capturas de `p11` y `p12`).
**Formato.** `DEC-G-xx` decisión tomada; `CON-G-xx` contradicción con el manual v1 o con la misión de diseño; `PD-G-xx` pregunta abierta (pregunta, por qué bloquea, opciones, recomendación, quién decide). Las IDs `DEC-xx`, `CON-xx` y `PD-xx` sin «G» son las de `diseno/99_decisiones.md`.

## 1. Decisiones

| ID | Decisión | Razón y fuente |
|---|---|---|
| DEC-G-01 | Metáfora única: **«El hilo»**; cada hecho verificado deja una puntada; el hilo recorre la ruta y no se deshace | `00` §3 (34 de 35 puntos frente a 23 y 17); coherencia con «CDE · Hilo» (DEC-01) y con `16` |
| DEC-G-02 | **Tres intensidades** (Completo, Discreto, Oculto) en lugar del interruptor binario «Ocultar puntos y niveles»; se pregunta una vez y se cambia en dos toques | IG-06, IG-07, AN-04; DEC-13 pedía poder ocultar: aquí se amplía, no se quita |
| DEC-G-03 | **Nada bloquea:** la celebración mayor es una **tarjeta de hito no modal** (sin foco forzado, Esc o «Cerrar»), no un modal ni un toast con confeti | Encargo de la misión; WCAG 2.2.2; RG-05 |
| DEC-G-04 | **Sin confeti, sin sonido y sin háptica** | Confeti = riesgo de verse infantil (R-I1); `00` AN-09 (audio bloqueado hasta interacción) y AN-10 (`vibrate` no existe en Safari) |
| DEC-G-05 | Los textos conservan **nivel, insignia, puntos y misión** de `21_microcopy.md`; «hilo», «puntada» y «baldosa» solo en títulos y ayudas | Menos contradicciones y menos traducción; RG-02 |
| DEC-G-06 | **Tu hilo**: baldosas agrupadas por nivel (icono + trama + rótulo) y la tabla equivalente en un panel plegable | RG-09, IG-11; la tabla se conserva para lector de pantalla |
| DEC-G-07 | La recompensa útil es **conocimiento**: resumen del nivel y hallazgo del diagnóstico | RG-13, reto «de datos a conocimiento»; IG-05 (información, no premio) |
| DEC-G-08 | **Misión = vista derivada** sin puntos extra; «Mi enfoque» como elección de la persona | RG-01; IG-07 (la libertad de decisión no sale sola) |
| DEC-G-09 | Las cifras de **cohorte** y de **tabla de posiciones** son **de muestra del prototipo** y se rotulan en pantalla; no son cifras del proyecto | `CLAUDE.md` («no inventar cifras»); precedente DEC-16 |
| DEC-G-10 | El prototipo **reutiliza** `tokens.css`, `base.css` y `app.js` de `diseno/prototipo/` **sin modificarlos**; los estilos nuevos van en `prototipo/css/gam.css` | Regla de registro de cambios (`99_cambios.md`) |
| DEC-G-11 | La **práctica de la lección no suma puntos** en esta versión y no guarda resultados | `21_contenido_formacion.md` §1 (no hay tarea que evalúe cuestionarios); C-40 |
| DEC-G-12 | Tres versiones de construcción (MÍNIMA 1,30 h · ESTÁNDAR 2,85 h · COMPLETA ≈ 6,55 h) con orden de cortes | `20_plan_que_cabe.md` (colchón de María Paula 1,5 h en A y 0 h en B); `01` §10 |
| DEC-G-13 | La escena se **desplaza a la parte superior** al iniciar en el prototipo para que se vea; en la aplicación no hace falta | D-03 |
| DEC-G-14 | Los pasos de las lecciones y sus puntos se leen de los hechos del sistema; **leer no suma** | `06` §7.4 |
| DEC-G-15 | Precarga de fuentes solo con `http(s)` | D-14: con `file://` produce errores de consola |

## 2. Contradicciones

| ID | Archivos | Contradicción | Tratamiento |
|---|---|---|---|
| CON-G-01 | `tareas/T-43.md` §4 / `diseno/99_decisiones.md` DEC-11 | El contrato de `GET /mi/progreso` incluye `"racha":{"semanas":3}` y las insignias «Constante» y las rachas; DEC-11 y `20` §7 las aplazan | En la especificación G1 el contrato **no incluye `racha`**; «Constante» queda como silueta en «Próximamente» |
| CON-G-02 | `tareas/T-43.md` §5 regla 5 y §7 / `21_contenido_formacion.md` §1 y T-43 §13 | «Compromisos autodeclarados quedan pendientes hasta validar (cola)» frente a «el operador marca el compromiso cumplido» y «sin cola de validación» | Se sigue R3 (T-43 §13 y DEC-09): la persona **avisa**, el equipo **marca** |
| CON-G-03 | `06` §4 (wireframe M2) y `T-44` §5 regla 1 / `diseno/99_decisiones.md` DEC-11, CON-11 | El wireframe usa «Nivel 3 · Constructor · racha de 3 semanas» y «Porque tu brecha más alta es finanzas» | Esta dirección sustituye el wireframe; no hay racha ni «brecha» como motivo |
| CON-G-04 | `10_especificacion_12_recompensas.md` §3 / `01` §4 M-07 | Un interruptor «Ocultar puntos y niveles» frente a tres intensidades | DEC-G-02; el valor «Oculto» equivale al interruptor anterior |
| CON-G-05 | `T-44` §13 «toast con confeti simple» y `15` §8 «confeti ≤ 60 partículas» / DEC-G-03 y DEC-G-04 | Se prevé confeti | Se sustituye por la tarjeta de hito y el hilo; el confeti queda **desactivado** como opción `PROPUESTA` |
| CON-G-06 | `21_microcopy.md` `GAM.nivel_sube` («¡Subiste al nivel {n}: {nombre}!») / `01` §3 | Exclamaciones en un tono adulto sobrio | Se propone «Subiste al nivel {n}: {nombre}.»; en el prototipo la tarjeta usa «Nivel {n}: {nombre}» |
| CON-G-07 | `21_microcopy.md` `M7.insignias_vacio` | El título «Aún no tienes insignias» y el cuerpo repetían la frase | En pantalla: título y cuerpo «La primera llega al completar tu ficha.» |
| CON-G-08 | `21_microcopy.md` `M2.vacio_paso` | Una sola cadena de dos frases | En pantalla se divide en título y cuerpo sin cambiar palabras |
| CON-G-09 | `21_casos_demo.md` §2 hito 21 («Cita agendada para el 27-oct-2026, no realizada») / `p11` («Cita de seguimiento: por agendar») | Con «hoy» = 29-oct, una cita agendada el 27 ya pasó; el mapa dice «Por agendar» | Se conserva «Por agendar» (como `p11`); queda para decidir (PD-G07) |
| CON-G-10 | `diseno/99_decisiones.md` CON-11 / `p11` | Recomienda «Taller de finanzas básicas» (12-nov) aunque Marcela asistió a «Taller de finanzas» el 8-sep y su dimensión más alta es finanzas (71) | No se toca; se mantiene la estación «Taller de finanzas básicas» del `p11` y se apunta que el motivo de «Para ti» es sector y etapa |
| CON-G-11 | `21_contenido_formacion.md` L3 «Desbloqueo: se destaca cuando finanzas es la brecha mayor» / `21_casos_demo.md` | En los datos de Marcela la dimensión más baja es mercadeo (52); L3 no se destaca por brecha | La misión L3 se muestra «En curso» por sus hechos, no por «brecha» |
| CON-G-12 | `T-47` §13 (solo B, 0,75 h, **sin** animación) / `diseno/10_especificacion_11` (animación del cierre) | La especificación 11 pide animación en todas las variantes | En A no hay mapa; en B el mapa tiene nodos y estados (E-08 mínimo); la animación es T-47b (lista de espera) |
| CON-G-13 | `20` §3 (T-44 A/B = 2,0 h, «toast con confeti simple») / `01` §10 (MÍNIMA = 1,30 h) | `20` no desglosa T-44, así que no se puede comprobar qué libera el rediseño | Supuesto S-1 en `01` §10, pendiente de confirmar |

## 3. Preguntas abiertas

| ID | Pregunta | Por qué bloquea | Opciones | Recomendación | Decide |
|---|---|---|---|---|---|
| PD-G01 | ¿Qué versión se construye: MÍNIMA, ESTÁNDAR o COMPLETA? | Fija las horas de María Paula y qué se muestra el 29 | (a) MÍNIMA; (b) MÍNIMA y, si T-44 va adelantada a las 21:30, ESTÁNDAR; (c) COMPLETA | **(b)**, con S-1 confirmado al empezar T-44 | María Paula y los tres en T-01 |
| PD-G02 | ¿La intensidad por defecto es «Completo» o «Discreto»? | Cambia lo primero que ve el jurado y la persona docente | (a) Completo, con la pregunta de primera vez; (b) Discreto | **(a)** para la demo; bajar a (b) si en `05` dos o más personas puntúan S2 o S3 por encima de 2 | María Paula |
| PD-G03 | ¿Dónde se guardan `intensidad`, `enfoque` y `ultimo_nivel_visto`? | Sin esto la preferencia no sobrevive a un cambio de dispositivo | (a) columnas en `personas`/`usuarios`; (b) tabla `preferencias_gamificacion`; (c) solo `localStorage` en la demo | **(b)** (sin migrar tablas de otro módulo, `05` §2); (c) solo si no cabe | Santiago |
| PD-G04 | ¿El CDE acepta insignias con figuras (escalones, libro, cronómetro) o prefiere solo texto? | Es PD-07 de diseño; cambia el arte | (a) Con figuras; (b) solo texto | **(a)** y preguntar el 28-oct; (b) es una hoja de estilos | CDE |
| PD-G05 | ¿Las preguntas de la práctica son material del CDE o contenido propio (`PROPUESTA`)? | L2 (formalización) exige validación antes de producción | (a) Propio con aviso; (b) validado por un asesor | **(a)** para la demo; (b) antes de producción | CDE |
| PD-G06 | ¿Cuál es el mínimo de personas por celda y se aplica supresión complementaria? | Con celdas suprimidas se podría inferir a una persona | (a) 3 sin complementaria; (b) 3 con complementaria; (c) 5 | **(a)** en la demo y declarar la limitación; **(b)** en producción | Santiago |
| PD-G07 | ¿Qué hace la persona con un compromiso **vencido**? (hoy: «Habla con el equipo») | La única acción de ayuda es un texto | (a) Mantener el texto; (b) botón «Pedir nueva fecha» (nuevo) | **(a)**; (b) sería funcionalidad nueva fuera de A y B | Los tres |
| PD-G08 | ¿Se muestra el resumen del nivel también a docentes y consultores? | Hoy el módulo es para la persona emprendedora | (a) No; (b) sí en la ficha 360 | **(a)** | María Paula |

## 4. Criterio de aceptación

1. Cada desviación del manual en `10_especificacion_G*` y en `01` cita un `DEC-G-xx` o `CON-G-xx`.
2. Cada `PD-G-xx` tiene pregunta, motivo, opciones, recomendación y quién decide.
3. No hay «TBD».
