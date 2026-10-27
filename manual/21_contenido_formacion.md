# 21 · Contenido del módulo de formación por recompensas (Ronda 3, F21)

**Objetivo.** Entregar el contenido listo para cargar del módulo de formación: 7 microlecciones alineadas con los programas del CDE descritos en `inputs/`, con texto, preguntas de verificación, puntos, niveles, insignias y condiciones de desbloqueo. El microcopy de toda la interfaz está en `21_microcopy.md`; los catálogos en `21_catalogos.csv`; los casos de demostración en `21_casos_demo.md`.

**Entradas.** `inputs/01_TyC_y_cronograma_CDE.md` §5, `inputs/02_presentacion_CDE.md` (diapositivas 3, 4, 6), `06_ux_gamificacion.md` §7, `tareas/T-43.md`, `20_plan_que_cabe.md`.

**Reglas de la ronda.** No se agregan funcionalidades. Todo lo que no viene de `inputs/` es `PROPUESTA`. Todo dato externo lleva fuente y fecha o `[NO VERIFICADO]`.

## 1. Cómo se carga este contenido (límite honesto)

1. **Lo que existe en el MVP (variantes A y B de `20`):** los puntos salen de **hechos del sistema** (asistir, cumplir un compromiso, completar la ficha, realizar una cita, completar un diagnóstico; `T-43` §5). No existe tarea que construya cuestionarios ni lecciones dentro de la aplicación, y esta ronda no la agrega.
2. **Cómo entra este contenido sin código nuevo:** (a) cada microlección se carga como un reto de `retos` con su `descripcion` (texto de la lección en 3 párrafos) y sus pasos verificables (inscribirse, asistir, cumplir el compromiso); (b) las preguntas de verificación se usan como **guion del taller** (preguntas en vivo, cierre de la sesión) o como material impreso. No suman puntos en el MVP.
3. **Siguiente iteración (fuera de A y B):** reto `LECCION_APROBADA` (15 puntos, una vez por lección, ≥ 3 de 4 respuestas correctas) `PROPUESTA`; los datos de §4 ya están en el formato que ese reto necesitaría.
4. **Consecuencia para el pitch:** se puede decir «los retos están ligados a capacitaciones y compromisos reales del CDE»; **no** se debe decir «cuestionarios evaluados por la plataforma».

## 2. Niveles, puntos e insignias (los de `T-43`, sin cambios)

| Nivel | Nombre | Puntos acumulados | Mensaje al llegar (ver `21_microcopy.md` §9) |
|---|---|---:|---|
| 1 | Semilla | 0 | — |
| 2 | Brote | 100 | `GAM.nivel.2` |
| 3 | Constructor | 250 | `GAM.nivel.3` |
| 4 | Impulsor | 450 | `GAM.nivel.4` |
| 5 | Líder | 700 | `GAM.nivel.5` |
| 6 | Referente | 1 000 | `GAM.nivel.6` |

| Reto (código) | Evento verificable | Puntos | En A y B |
|---|---|---:|---|
| `FICHA_BASICA` | Sector, tamaño, ingresos y formalización completos | 40 | Sí |
| `ASISTIR_EVENTO` | Asistencia registrada (máx. 4 al mes) | 30 | Sí |
| `COMPROMISO_CUMPLIDO` | Compromiso cerrado antes de su fecha | 25 | Sí |
| `COMPROMISO_TARDE` | Compromiso cerrado después de su fecha | 10 | Sí |
| `CITA_REALIZADA` | Cita realizada (máx. 2 al mes) | 20 | Sí |
| `DIAGNOSTICO` | Diagnóstico completado | 50 | Sí |
| `FICHA_COMPLETA`, `INSCRIBIRSE_EARLY`, `MEJORA_MADUREZ`, `RACHA_3`, `RACHA_6` | Ver `06` §7.2 | 60 / 10 / 80 / 30 / 60 | No (aplazados, `20` §7) |

| Insignia (código) | Criterio | En A y B |
|---|---|---|
| `PRIMER_PASO` · Primer paso | `FICHA_BASICA` | Sí |
| `CUMPLIDOR` · Cumplidor | 5 compromisos cerrados a tiempo | Sí |
| `APRENDIZ` · Aprendiz | Asistir a 3 capacitaciones | Sí |
| `CUENTAS_CLARAS`, `CONSTANTE`, `MEJORA_VISIBLE`, `CONECTOR` | Ver `06` §7.2 | No |

## 3. Las 7 microlecciones

Convenciones: tuteo, tono cercano y profesional, sin jerga. «Tu negocio» en lugar de «el emprendedor». Cada lección tiene: **qué aprendes**, **texto** (≤ 150 palabras), **misión** (pasos verificables y puntos), **desbloqueo**, **fuente** y **preguntas** (§4).

### L1 · Marketing digital: empieza por tu cliente
- **Alineación:** capacitación «marketing digital» (TyC §5, «Capacitaciones»); área de proyectos de aula «mercadeo».
- **Qué aprendes:** a describir a quién le vendes y a elegir dos canales para empezar.
- **Texto:**
  Antes de publicar, define a quién le hablas. Piensa en una persona real que ya te compra: ¿cuántos años tiene, dónde vive, qué problema le resuelves? Con esa imagen escribe una frase: «Ayudo a [persona] a [resolver algo] con [tu producto o servicio]».
  Luego elige solo dos canales donde esa persona ya está (por ejemplo, WhatsApp Business e Instagram). Mejor dos canales bien atendidos que cinco abandonados.
  Publica con constancia: tres veces por semana durante un mes y revisa qué publicación recibió más mensajes. Repite lo que funcionó.
- **Misión «Ruta Marketing digital»:** inscribirte al taller (sin puntos) → asistir (`ASISTIR_EVENTO` +30) → cumplir el compromiso «publicar en 2 canales» (`COMPROMISO_CUMPLIDO` +25). Con 3 capacitaciones completadas se entrega *Aprendiz*.
- **Desbloqueo:** disponible para todas las empresas; se recomienda primero cuando el diagnóstico muestra mercadeo como la brecha mayor.
- **Fuente:** contenido didáctico propio `PROPUESTA`; no contiene cifras ni normas.

### L2 · Formalízate paso a paso
- **Alineación:** área «formalización» (TyC §5, proyectos de aula y diagnóstico).
- **Qué aprendes:** qué son el RUT y la matrícula mercantil y cuándo se renueva esta última.
- **Texto:**
  Formalizarse es poner tu negocio «a la vista» de las entidades. Dos piezas básicas:
  **RUT (Registro Único Tributario).** Lo administra la DIAN; sirve para identificar a quienes tienen obligaciones tributarias y es la base del NIT. La inscripción es electrónica y, según las fuentes consultadas, no tiene costo.
  **Matrícula mercantil.** Se tramita en la cámara de comercio de tu ciudad. Quienes la tienen deben renovarla cada año; el plazo general va del 1 de enero al 31 de marzo.
  No todos los casos son iguales (persona natural, sociedad, actividad). Antes de decidir, pide una cita de formalización con el CDE.
- **Misión «Formalízate»:** cita de formalización realizada (`CITA_REALIZADA` +20) → completar la ficha con el estado de formalización (`FICHA_BASICA` +40, una vez) → cumplir el compromiso de trámite (`COMPROMISO_CUMPLIDO` +25).
- **Desbloqueo:** se ofrece a empresas cuyo estado de formalización sea «Informal» o «Formalización parcial» (`F1`, `F2` del catálogo).
- **Fuentes (consultadas el 27-oct-2026; los sitios oficiales no respondieron, así que la verificación es indirecta):**
  - Plazo de renovación: artículo 33 del Código de Comercio, según la Superintendencia de Industria y Comercio y el INCP ([Hasta el 31 de marzo puede renovar su matrícula mercantil](https://incp.org.co/publicaciones/infoincp-publicaciones/informacion-para-empresas/actualidad/2023/03/hasta-el-31-de-marzo-puede-renovar-su-matricula-mercantil/)). Texto oficial en secretariasenado.gov.co: `[NO VERIFICADO]` (HTTP 503 el 27-oct-2026).
  - RUT: descripción en medios y en Bogotá.gov.co ([Cómo obtener el RUT](https://bogota.gov.co/mi-ciudad/hacienda/como-obtener-el-registro-unico-tributario-rut-en-bogota-2026)). Página de la DIAN: `[NO VERIFICADO]` (HTTP 404 el 27-oct-2026). La frase «no tiene costo» proviene de Bogotá.gov.co.
  - Revisión obligatoria antes de producción: un asesor del CDE valida este texto.

### L3 · Ordena tus cuentas
- **Alineación:** área «finanzas» (TyC §5).
- **Qué aprendes:** a separar ingresos, costos y gastos y a calcular tu margen.
- **Texto:**
  Anota cada venta y cada pago durante un mes, aunque sea en un cuaderno. Sepáralos en tres grupos: **ingresos** (lo que vendes), **costos** (lo que gastas para producir lo que vendes, como ingredientes) y **gastos** (lo que pagas para operar, como arriendo y servicios).
  Utilidad = ingresos − costos − gastos. Margen = utilidad ÷ ingresos. Si tu margen es bajo, revisa primero tus precios y luego tus costos.
  Un hábito vale más que una hoja perfecta: dedica 15 minutos cada semana a actualizar tus números.
- **Misión «Ordena tus cuentas»:** completar el diagnóstico en finanzas (`DIAGNOSTICO` +50) → asistir al taller de finanzas (`ASISTIR_EVENTO` +30) → cumplir el compromiso (`COMPROMISO_CUMPLIDO` +25).
- **Desbloqueo:** disponible siempre; se destaca cuando finanzas es la brecha mayor.
- **Fuente:** definiciones contables básicas `PROPUESTA`; sin cifras.

### L4 · Entiende tu diagnóstico de madurez
- **Alineación:** «Diagnóstico de madurez empresarial» (TyC §5).
- **Qué aprendes:** a leer tu puntaje por dimensión y a escoger una prioridad.
- **Texto:**
  El diagnóstico es una foto del estado de tu negocio hoy. Se mide por dimensiones (por ejemplo, mercadeo, finanzas, operaciones y formalización) con un puntaje de 0 a 100. **La brecha es lo que falta para llegar a 100**: una dimensión con 35 puntos tiene una brecha de 65.
  No tienes que mejorar todo a la vez. Escoge la dimensión con la brecha más grande que además puedas atender este mes y conviértela en un compromiso con fecha.
  Repite el diagnóstico cuando termines un proyecto: la evolución te muestra qué cambió.
- **Misión «Mi primer diagnóstico»:** completar el diagnóstico (`DIAGNOSTICO` +50) → crear un compromiso sobre tu mayor brecha (sin puntos) → cumplirlo (`COMPROMISO_CUMPLIDO` +25).
- **Desbloqueo:** disponible desde el primer ingreso.
- **Fuente:** `inputs/` describe el diagnóstico pero no su cuestionario; las dimensiones concretas son `PROPUESTA` (`04` §2.2, PA-17).

### L5 · Tu Ruta de Acompañamiento
- **Alineación:** «Ruta de Acompañamiento al Emprendedor: un programa de sesiones de acompañamiento que culmina con el pitch de los modelos de negocio» (TyC §5).
- **Qué aprendes:** cómo funcionan las sesiones y qué se espera de ti entre una y otra.
- **Texto:**
  La Ruta es un conjunto de sesiones con el equipo del CDE que termina con la presentación (pitch) de tu modelo de negocio. En cada sesión acuerdas uno o dos compromisos pequeños, con responsable y fecha.
  Tu parte es llegar a la sesión siguiente con esos compromisos avanzados. Si algo no se pudo, avisa a tiempo: cambiar la fecha es mejor que dejar que venza.
  En «Mi camino» ves en qué etapa estás y cuál es tu próximo paso.
- **Misión «Constancia en la Ruta»:** asistir a las sesiones de la Ruta (`ASISTIR_EVENTO` +30 cada una, máx. 4 al mes) → cumplir los compromisos de cada sesión (`COMPROMISO_CUMPLIDO` +25).
- **Desbloqueo:** empresas con un plan de acción activo.
- **Fuente:** descripción del TyC; número de sesiones: `[NO VERIFICADO]` (el TyC no lo indica; PA a preguntar al CDE).

### L6 · Pitch listo en 5 minutos
- **Alineación:** la Ruta culmina con el pitch (TyC §5); el pitch de la Hackatón dura 5 minutos (TyC §6).
- **Qué aprendes:** a estructurar un pitch corto.
- **Texto:**
  Un pitch de 5 minutos tiene seis partes: **problema** (a quién le duele qué), **solución**, **cómo funciona** (una demostración corta), **por qué tú** (equipo), **cómo ganas dinero** y **qué pides**. Dedica un minuto a lo que más te diferencia.
  Habla de hechos, no de promesas: «40 clientes nuevos en dos meses» pesa más que «vamos a crecer mucho». Si no tienes un dato, di que todavía no lo sabes y cómo lo vas a averiguar.
  Ensaya en voz alta con un cronómetro: lo que no cabe en 5 minutos, se corta.
- **Misión «Pitch listo»:** asistir a 3 sesiones de la Ruta (`ASISTIR_EVENTO` +30 × 3) → registrar el pitch final (reto `PITCH_REGISTRADO`, +100, `PROPUESTA`, **fuera de A y B**).
- **Desbloqueo:** nivel 3 (Constructor) o más.
- **Fuente:** estructura didáctica `PROPUESTA`.

### L7 · Cumple tu plan de acción
- **Alineación:** «Cada plan de acción tiene responsable, estado y avance visibles» (TyC §5).
- **Qué aprendes:** a escribir compromisos que se puedan cumplir.
- **Texto:**
  Un buen compromiso es pequeño, medible y tiene fecha: «Actualizar los precios de mis 10 productos antes del viernes», no «mejorar mis precios». Siempre tiene una persona responsable.
  Cuando lo termines, avísale al equipo desde «Mis pendientes»: ellos lo marcan como cumplido y se suman tus puntos (más si lo cierras antes de la fecha). Si vas a llegar tarde, avisa y reprograma.
  Revisa «Mis pendientes» cada semana: los compromisos vencidos te quitan oportunidades de puntos.
- **Misión «Compromisos al día»:** cumplir 5 compromisos a tiempo (`COMPROMISO_CUMPLIDO` +25 cada uno) → insignia *Cumplidor*.
- **Desbloqueo:** disponible desde que existe un plan de acción.
- **Fuente:** `02` HU-07 y `T-42`; lenguaje didáctico `PROPUESTA`.

## 4. Preguntas de verificación (guion de taller; no suman puntos en el MVP)

Formato: pregunta · opciones · **correcta** · retroalimentación si acierta · retroalimentación si falla.

### L1
1. ¿Qué defines primero antes de publicar en redes? · a) El logo · b) A quién le hablas · c) El horario · d) El presupuesto de pauta · **b** · «Exacto: todo el contenido sale de saber a quién le hablas.» · «Casi. Primero define a quién le hablas; lo demás se decide después.»
2. ¿Cuántos canales conviene empezar a atender? · a) Todos los que existan · b) Uno o dos · c) Ninguno · d) Cinco · **b** · «Bien: pocos canales, bien atendidos.» · «Mejor empezar con uno o dos y atenderlos con constancia.»
3. ¿Cómo sabes qué publicación funcionó? · a) Por intuición · b) Por los mensajes o ventas que generó · c) Por el número de hashtags · d) Por la hora · **b** · «Correcto: mide mensajes o ventas, no solo vistas.» · «Revisa los mensajes o ventas que trajo cada publicación.»
4. Si una publicación funcionó, ¿qué haces? · a) Nada · b) Borrarla · c) Repetir lo que funcionó · d) Cambiar de canal · **c** · «Eso es: repite y mejora lo que funciona.» · «Lo que funciona se repite y se mejora.»

### L2
1. ¿Qué entidad administra el RUT? · a) La cámara de comercio · b) La DIAN · c) El municipio · d) El CDE · **b** · «Correcto: el RUT lo administra la DIAN.» · «El RUT lo administra la DIAN. La matrícula mercantil sí es de la cámara de comercio.»
2. ¿En qué entidad se tramita la matrícula mercantil? · a) La DIAN · b) La alcaldía · c) La cámara de comercio · d) La UNAB · **c** · «Así es: en la cámara de comercio de tu ciudad.» · «Se tramita en la cámara de comercio.»
3. ¿Hasta cuándo se renueva en general la matrícula mercantil cada año? · a) 31 de diciembre · b) 31 de marzo · c) 30 de junio · d) No se renueva · **b** · «Bien: entre el 1 de enero y el 31 de marzo.» · «El plazo general es hasta el 31 de marzo. Confirma tu caso con la cámara de comercio.»
4. Si tienes dudas sobre qué te corresponde, ¿qué haces? · a) Esperar · b) Pedir una cita de formalización · c) Ignorarlo · d) Pedir prestado un RUT · **b** · «Perfecto: el CDE te orienta.» · «Lo mejor es pedir una cita de formalización con el CDE.»

### L3
1. ¿Qué es un costo? · a) Lo que pagas para producir lo que vendes · b) Lo que vendes · c) El arriendo · d) Tu sueldo soñado · **a** · «Correcto.» · «Costo es lo que gastas para producir lo que vendes, como los ingredientes.»
2. Si vendes 1 000 y tus costos y gastos suman 800, ¿cuánto es la utilidad? · a) 200 · b) 800 · c) 1 800 · d) 20 · **a** · «Exacto: 1 000 − 800 = 200.» · «Utilidad = ingresos − costos − gastos = 1 000 − 800 = 200.»
3. Con esos números, ¿cuál es el margen? · a) 20 % · b) 80 % · c) 200 % · d) 8 % · **a** · «Bien: 200 ÷ 1 000 = 20 %.» · «Margen = utilidad ÷ ingresos = 200 ÷ 1 000 = 20 %.»
4. ¿Cada cuánto conviene actualizar tus números? · a) Una vez al año · b) Cada semana, aunque sea 15 minutos · c) Nunca · d) Solo al declarar · **b** · «Un hábito corto vale más que una hoja perfecta.» · «Mejor un hábito semanal corto que una revisión larga al año.»

### L4
1. ¿Qué significa «brecha»? · a) Lo que ya tienes · b) Lo que falta para llegar a 100 · c) El promedio · d) Un error · **b** · «Correcto.» · «La brecha es lo que falta para llegar a 100.»
2. Una dimensión con 35 puntos tiene una brecha de… · a) 35 · b) 65 · c) 100 · d) 135 · **b** · «Exacto: 100 − 35 = 65.» · «Brecha = 100 − puntaje = 65.»
3. ¿Debes mejorar todas las dimensiones a la vez? · a) Sí · b) No, escoge una prioridad que puedas atender · c) Solo la más fácil · d) Ninguna · **b** · «Bien: una prioridad a la vez.» · «Es mejor escoger una prioridad que puedas atender este mes.»
4. ¿Para qué repetir el diagnóstico? · a) Para ver la evolución · b) Para castigar · c) Para cambiar de sector · d) Para nada · **a** · «Correcto: muestra qué cambió.» · «Repetirlo muestra la evolución de tu negocio.»

### L5
1. ¿Con qué culmina la Ruta de Acompañamiento? · a) Un examen · b) El pitch de tu modelo de negocio · c) Un crédito · d) Un diploma obligatorio · **b** · «Correcto: con el pitch de tu modelo de negocio.» · «La Ruta culmina con el pitch de los modelos de negocio.»
2. ¿Qué lleva cada compromiso? · a) Solo una idea · b) Responsable y fecha · c) Una multa · d) Nada · **b** · «Así es.» · «Todo compromiso tiene responsable y fecha.»
3. Si no vas a alcanzar un compromiso, ¿qué haces? · a) Callar · b) Avisar y reprogramar a tiempo · c) Borrarlo · d) Esperar · **b** · «Bien: avisar a tiempo evita que venza.» · «Avisa y reprograma antes de que venza.»

### L6
1. ¿Cuánto dura el pitch de la Hackatón? · a) 2 minutos · b) 5 minutos · c) 15 minutos · d) 30 minutos · **b** · «Correcto: 5 minutos.» · «Son 5 minutos de presentación.»
2. ¿Qué pesa más en un pitch? · a) Hechos y datos reales · b) Adjetivos · c) Promesas · d) Música · **a** · «Exacto.» · «Los hechos pesan más que las promesas.»
3. ¿Qué haces si no tienes un dato? · a) Lo inventas · b) Dices que aún no lo sabes y cómo lo averiguarás · c) Lo omites sin avisar · d) Cambias de tema · **b** · «Muy bien: honestidad.» · «Es mejor reconocerlo y explicar cómo lo averiguarás.»
4. ¿Cómo ensayas? · a) En silencio · b) En voz alta con cronómetro · c) Nunca · d) Solo el día del pitch · **b** · «Correcto.» · «Ensaya en voz alta con cronómetro.»

### L7
1. ¿Cuál es un buen compromiso? · a) «Mejorar mis precios» · b) «Actualizar los precios de mis 10 productos antes del viernes» · c) «Ser mejor» · d) «Vender más» · **b** · «Pequeño, medible y con fecha.» · «Un buen compromiso es pequeño, medible y tiene fecha.»
2. ¿Quién es responsable de un compromiso? · a) Nadie · b) Una persona concreta · c) Todo el equipo del CDE · d) El jurado · **b** · «Correcto.» · «Cada compromiso tiene una persona responsable.»
3. ¿Qué pasa con los puntos si cierras antes de la fecha? · a) Nada · b) Ganas más que si cierras tarde · c) Los pierdes · d) Se duplican siempre · **b** · «Exacto: 25 puntos a tiempo y 10 si es tarde.» · «A tiempo valen 25 puntos; tarde, 10.»
4. ¿Cada cuánto revisas «Mis pendientes»? · a) Nunca · b) Cada semana · c) Cada año · d) Al vencerse · **b** · «Bien.» · «Revísalo cada semana para que nada venza.»

## 5. Condiciones de desbloqueo (resumen)

| Misión | Condición | Dónde se evalúa |
|---|---|---|
| L1 Marketing digital | Siempre | M2 / M5 |
| L2 Formalízate | `formalizacion` ∈ {`F1`, `F2`} | M2 |
| L3 Ordena tus cuentas | Siempre | M2 / M5 |
| L4 Mi primer diagnóstico | Primer ingreso | M2 |
| L5 Constancia en la Ruta | Plan de acción activo | M2 |
| L6 Pitch listo | Nivel ≥ 3 | M7 (futuro) |
| L7 Compromisos al día | Existe un plan de acción | M3 |

En A y B las condiciones se implementan como **textos de recomendación** en M2 (no como bloqueo técnico): ninguna misión se oculta; el orden sugerido se muestra con «Te recomendamos empezar por…».

## 6. Contradicciones R3

| # | Con qué | Qué se corrige |
|---|---|---|
| C-38 | `18` §5, `99` C-25 y `04` §7.2 (Marcela con 435 puntos) | **430 puntos**: 40 (ficha básica) + 150 (3 diagnósticos) + 120 (4 asistencias) + 20 (1 cita) + 100 (4 compromisos a tiempo). Con el compromiso «Actualizar precios» cerrado a tiempo (+25) llega a 455: **Nivel 4 (450) e insignia *Cumplidor* (5.º compromiso a tiempo)** en el mismo gesto. Con 435 el 5.º compromiso no podía coincidir con el cruce de nivel, porque 25 × k debe ser ≡ 5 (mod 10) y 4 compromisos suman 100 |
| C-39 | `04` §7.2 («1 plan con 6 compromisos, 2 vencidos») | La empresa protagonista tiene **2 planes**: el plan 1 con 6 compromisos (3 cumplidos a tiempo, 2 vencidos, 1 pendiente: «Actualizar precios», vence 31-oct-2026) y el plan 2 del proyecto de finanzas con 2 compromisos (1 cumplido a tiempo, 1 en curso). Total a tiempo antes de la demo: 4 |
| C-40 | `06` §7.3 (misión «Pitch listo» con insignia) | El reto `PITCH_REGISTRADO` queda fuera de A y B; la misión se muestra como «Próximamente» |

## Criterio de aceptación

1. Hay 7 microlecciones con texto, misión, desbloqueo, fuente y 3 a 4 preguntas con respuesta correcta y retroalimentación.
2. Cada puntaje usa un reto de `T-43` o está marcado como fuera de A y B.
3. Los datos factuales (matrícula mercantil, RUT) llevan fuente, fecha de consulta y estado de verificación.
4. Ningún texto afirma que la plataforma evalúa cuestionarios.
