# 00 · Investigación para el rediseño del módulo de formación por recompensas

**Objetivo.** Reunir la evidencia, los patrones y los límites técnicos que justifican cada decisión de `01_direccion_y_mecanicas.md`, y cerrar con reglas de diseño numeradas (`RG-xx`) que el diseño y las especificaciones citan.
**Entradas.** `06_ux_gamificacion.md` §7, `21_contenido_formacion.md`, `21_casos_demo.md`, `diseno/00_investigacion.md` (DI-47..DI-54), `15_frontend_skills_y_ui.md` §3 y §8, `20_plan_que_cabe.md` §3 y §7.
**Fecha de consulta.** 27-oct-2026. **Método.** Metadatos y resúmenes por API pública (Crossref, OpenAlex, Semantic Scholar), páginas del W3C, NN/g y MDN, y registro de npm. Todo lo que no se pudo leer en la fuente primaria queda `[NO VERIFICADO]`.

## 0. Prueba de acceso a internet (pedida por el encargo)

| Prueba | Resultado el 27-oct-2026 |
|---|---|
| `www.w3.org` (cinco páginas «Understanding» de WCAG 2.2) | HTTP 200, texto leído |
| `www.nngroup.com/articles/animation-duration/` | HTTP 200, texto leído |
| `developer.mozilla.org` (prefers-reduced-motion, Vibration API, Web Animations, Autoplay) | HTTP 200 (una con redirección 301), texto leído |
| `api.crossref.org`, `api.openalex.org`, `api.semanticscholar.org` | HTTP 200; **Crossref no trae resúmenes** (se completaron con OpenAlex o Semantic Scholar) |
| `registry.npmjs.org` y `cdn.jsdelivr.net` | HTTP 200 |
| `selfdeterminationtheory.org` | **HTTP 403** (no se leyó; se usa el resumen de Ryan y Deci 2000 por OpenAlex) |
| `hideandseek.net/2010/10/06/cant-play-wont-play/` (texto donde Robertson usa «pointsification») | La dirección redirige a un sitio **ajeno y comercial** (apuestas). **Descartada**; el término queda `[NO VERIFICADO]` y no se cita esa página |

Conclusión: hay acceso a internet; el Paso 1 se pudo hacer con fuentes primarias para WCAG, MDN, NN/g y npm, y con resúmenes de terceros para los artículos. Tres DOI que propuse de memoria al empezar (Landers, Huang, Zeng) **resultaron ser de otros artículos** y se descartaron; solo se usan los DOI cuyo título coincide con el esperado (§1).

## 1. Qué dice la investigación sobre gamificación

Cada fila: lo que **dice el resumen leído**, no el artículo completo. El estado «Resumen» significa que se leyó el resumen del autor (OpenAlex) y «Resumen automático» que solo se leyó el resumen generado por Semantic Scholar (`tldr`), que es de segunda mano.

| ID | Fuente (DOI) | Qué dice | Estado | Implicación para este módulo |
|---|---|---|---|---|
| IG-01 | Hamari, Koivisto y Sarsa (2014), HICSS-47, pp. 3025-3034 · 10.1109/HICSS.2014.377 | Efectos positivos, pero «muy dependientes del contexto y de las personas usuarias» | Resumen | No basta con copiar mecánicas: anclarlas a hechos reales del CDE y medir con el equipo (`05_prueba_de_usuario.md`) |
| IG-02 | Koivisto y Hamari (2019), *Int. J. Information Management* 45, 191-210 · 10.1016/j.ijinfomgt.2018.10.013 | 819 estudios; resultados «inclinados a lo positivo» pero con «cantidad notable de resultados mixtos»; puntos, insignias y tablas de posiciones son lo más usado | Resumen | Los jurados técnicos conocen que la gamificación «a medias» no es concluyente: se presenta como hipótesis a medir, no como promesa |
| IG-03 | Sailer y Homner (2020), *Educ. Psychology Review* 32, 77-112 · 10.1007/s10648-019-09498-w | Efectos **pequeños**: cognitivo g = 0,49 (k = 19, N = 1 686); motivacional g = 0,36 (k = 16, N = 2 246); conductual g = 0,25 (k = 9, N = 951). El efecto cognitivo es estable con alta rigurosidad; los motivacionales y conductuales **menos estables**. La ficción de juego y la interacción social moderan el efecto conductual | Resumen | No prometer mejoras de aprendizaje cuantificadas (ya en `06` §7.1). La «ficción» (una historia mínima) puede ayudar: de ahí la metáfora única de `01` §1 |
| IG-04 | Bai, Hew y Huang (2020), *Educ. Research Review* 30, 100322 · 10.1016/j.edurev.2020.100322 | Metaanálisis de 30 intervenciones (3 202 participantes) en contextos educativos: tamaño de efecto medio, g = 0,504 | Resumen (Semantic Scholar) | Evidencia en **estudiantes**, no en personas emprendedoras adultas; se declara como límite |
| IG-05 | Deci, Koestner y Ryan (1999), *Psychological Bulletin* 125, 627-668 · 10.1037/0033-2909.125.6.627 | 128 experimentos: las recompensas contingentes a participación, a finalización y a desempeño **reducen** la motivación intrínseca (d = −0,40; −0,36; −0,28); la **retroalimentación positiva verbal la aumenta** (d = 0,33 en conducta libre; 0,31 en interés). Las recompensas tangibles dañan más a niños que a universitarios | Resumen | Las recompensas son **símbolos de reconocimiento** (sello, nombre de tramo, resumen), no premios materiales; el texto de celebración describe el hecho («Cumpliste…»), que es retroalimentación informativa |
| IG-06 | Ryan y Deci (2000), *American Psychologist* 55, 68-78 · 10.1037/0003-066X.55.1.68 | Tres necesidades innatas: competencia, autonomía y relación; satisfacerlas mejora automotivación y bienestar | Resumen | Competencia → progreso legible y «casi»; autonomía → elegir intensidad y elegir la apuesta; relación → tabla opcional y vista de cohorte agregada |
| IG-07 | Sailer, Hense, Mayr y Mandl (2017), *Computers in Human Behavior* 69, 371-380 · 10.1016/j.chb.2016.12.033 | Experimento aleatorizado: insignias, tablas de posiciones y gráficas de desempeño aumentan la satisfacción de **competencia** y el sentido de la tarea; avatares, historias con sentido y compañeros aumentan la **relación**; la «libertad de decisión percibida» **no** se logró aumentar como se pretendía | Resumen | Insignias y gráfica de progreso sirven para competencia; la historia mínima sirve para relación; **la autonomía hay que dársela de forma explícita** (interruptores), no esperar que salga de las insignias |
| IG-08 | Hanus y Fox (2015), *Computers & Education* 80, 152-161 · 10.1016/j.compedu.2014.08.019 | En un curso gamificado, el alumnado mostró menos motivación, satisfacción y empoderamiento con el tiempo que en el curso sin gamificar | Resumen automático (el del autor no se obtuvo) | La tabla de posiciones es opcional, apagada por defecto y nunca muestra a la última persona (DEC-13, `99_decisiones.md` de diseño) |
| IG-09 | Mekler, Brühlmann, Tuch y Opwis (2017), *Computers in Human Behavior* 71, 525-534 · 10.1016/j.chb.2015.08.048 | En su estudio, puntos, niveles y tablas funcionaron como incentivos extrínsecos, efectivos solo para la **cantidad** de desempeño | Resumen automático | Los puntos premian hechos, pero lo que se celebra y se muestra primero es el **hecho** y su efecto en el negocio, no la cifra de puntos |
| IG-10 | Hamari (2017), *Computers in Human Behavior* 71, 469-478 · 10.1016/j.chb.2015.03.036 | Experimento de campo con insignias en un servicio de intercambio: quienes tenían insignias usaron más el servicio | Resumen automático | Apoya que las insignias aumentan la actividad **en ese contexto**; no se extrapola al CDE |
| IG-11 | Nunes y Drèze (2006), *J. Consumer Research* 32, 504-512 · 10.1086/500480 | «Avance dotado»: darle a la persona parte del camino ya hecho aumenta la persistencia (tarea de 10 pasos con 2 ya completos frente a 8 pasos) | Resumen | La primera pantalla nunca está en cero: la **ficha** y las atenciones previas ya son puntadas del hilo (`01` §3) |
| IG-12 | Kivetz, Urminsky y Zheng (2006), *J. Marketing Research* 43, 39-58 · 10.1509/jmkr.43.1.39 | Gradiente de meta: se invierte más esfuerzo a medida que se acerca la recompensa; programa de café y calificación de canciones | Resumen | El aviso «a un gesto de dos logros» (`01` §4, momento G-06) aprovecha la cercanía; se muestra **una vez** y solo si es cierto |
| IG-13 | Deterding, Dixon, Khaled y Nacke (2011), MindTrek, pp. 9-15 · 10.1145/2181037.2181040 | Define gamificación como uso de elementos de diseño de juegos en contextos que no son juegos | Metadatos (el resumen no se obtuvo; definición ya citada en `06`) | Vocabulario común |

**Lo que NO encontré y queda `[NO VERIFICADO]`:**

- **NV-G1.** Evidencia específica en **personas emprendedoras adultas** de un centro universitario de acompañamiento. Los estudios de arriba son de estudiantes, tareas de laboratorio o servicios en línea. Es el límite principal; por eso el módulo se presenta como hipótesis y se mide (`05_prueba_de_usuario.md`).
- **NV-G2.** Qué mecánicas se perciben **infantiles** en adultos: no hallé una fuente primaria. Las reglas anti-infantiles de `01` §6 son criterio de diseño (`PROPUESTA`) y se ponen a prueba con cinco personas adultas ajenas al equipo (riesgos R-I1..R-I5 en `90_revision.md`).
- **NV-G3.** «Pointsification» (reducir la gamificación a puntos e insignias sin significado): el término se atribuye a Margaret Robertson (2010), pero la página original ya no es accesible (§0). Se usa solo como etiqueta de un riesgo conocido, no como cita.
- **NV-G4.** Resumen del autor de IG-08, IG-09 e IG-10: solo vi resúmenes automáticos de Semantic Scholar.

## 2. Patrones de productos con progreso y logros

No copio marcas ni ilustraciones. Los patrones vienen de uso general de este tipo de productos y de mi conocimiento; **no consulté la documentación de ningún producto** en esta sesión, así que las columnas «por qué funciona» apoyadas en un artículo citan su fila de §1 y las demás son `[NO VERIFICADO]`.

| ID | Patrón (categoría) | Por qué funciona | Qué NO copiar | Decisión |
|---|---|---|---|---|
| PA-G1 | **Anillos de cierre** en aplicaciones de actividad física: un círculo que se completa a diario | Progreso legible de un vistazo, meta cercana (IG-12) | La presión diaria y el reinicio a cero cada día; no hay «día» en un acompañamiento semestral | Un único anillo de nivel, sin reinicio; el progreso solo sube |
| PA-G2 | **Rachas** en aprendizaje de idiomas | Hábito por miedo a perder (`[NO VERIFICADO]`; DI-50) | Aversión a la pérdida, notificaciones de culpa, mascotas que «se entristecen» | Fuera (DEC-11); el hilo **no se deshace** |
| PA-G3 | **Lista de activación** en productos de productividad: «completa estos 5 pasos» con barra | Avance dotado (IG-11): se empieza con un paso ya hecho | Dejarla para siempre visible; si todo está hecho, desaparece | Tarjeta «Tu siguiente paso» que desaparece cuando no hay pendiente (`M2.vacio_paso`) |
| PA-G4 | **Metas de ahorro** en banca: barra con monto y fecha | Meta concreta con cifra; competencia (IG-07) | Fechas límite que se sienten como deuda | El vencimiento se muestra como dato, y el vencido con lenguaje de ayuda (`M3.vencido`) |
| PA-G5 | **Credenciales de formación profesional**: insignia con criterio, fecha y evidencia | Reconocimiento creíble, no infantil; es un símbolo de competencia (IG-07) | Insignias sin criterio visible | Sello con criterio visible y «ficha» en el reverso: fecha y hecho que lo originó |
| PA-G6 | **Tableros de cohorte** en formación corporativa: cuántas personas están en cada etapa | Vista agregada sin exponer a nadie | Ranking individual por defecto (IG-08) | Panel del equipo con conteos por tramo y mínimo de 3 personas por celda (`01` §5) |
| PA-G7 | **Resumen de cierre de periodo** («tu año en…») | Convierte datos propios en una historia; refuerza competencia | Compararte con otras personas; exageraciones | **Resumen del tramo**: al subir de nivel, 3 cifras reales de lo hecho (`01` §4, G-04) |
| PA-G8 | **Hallazgo desde tus datos**: tras un análisis, el producto muestra «lo que cambió» | Hace útil el juego: la recompensa es **conocimiento** (el reto del CDE) | Inferencias que los datos no sostienen | «Hallazgo» con antes/después de las dimensiones del diagnóstico (`01` §4, G-07) |

## 3. Narrativa y metáfora para «Hilo»

Contexto fijo: la marca provisional es «CDE · Hilo» (DEC-01), la dirección visual de `16` es «Hilo de ruta», y los niveles se llaman **Semilla, Brote, Constructor, Impulsor, Líder, Referente** y **no se renombran** (`21_microcopy` `GAM.nivel.*`, T-43).

| Criterio (1 = mal, 5 = bien; juicio propio, `PROPUESTA`) | A · Camino y ruta | B · El hilo que se teje (puntadas) | C · Crecimiento (huerto) |
|---|---:|---:|---:|
| Coherencia con la marca «Hilo» y con `16` | 4 | 5 | 1 |
| Cabida de los seis nombres de nivel sin renombrarlos | 3 | 4 | 3 |
| Tono adulto y sobrio | 4 | 5 | 2 |
| Acumulativo y sin pérdida (sin presión; DEC-11) | 3 | 5 | 4 |
| Se ilustra con SVG ligero y a una tinta | 4 | 5 | 3 |
| Cada hecho real deja una marca visible individual | 2 | 5 | 2 |
| Poco riesgo de parecer juego de tablero o infantil (5 = poco riesgo) | 3 | 5 | 2 |
| **Suma (máximo 35)** | 4+3+4+3+4+2+3 = **23** | 5+4+5+5+5+5+5 = **34** | 1+3+2+4+3+2+2 = **17** |

**Recomendación: B, «El hilo».** Razones: (1) es la única que ya está en el nombre del producto; (2) cada hecho verificable deja **una puntada** visible y permanente (una baldosa en «Tu hilo»), lo que da la sensación de colección sin cifras ni competencia; (3) un hilo no se deshace, así que no hay lenguaje de pérdida; (4) se ilustra con trazos y recuadros a una tinta (barato de implementar); (5) la historia mínima es una «ficción» en el sentido de IG-03 e IG-07, sin personajes. La metáfora A (camino) no se descarta: **la pantalla sigue llamándose «Mi ruta»** y el hilo recorre la ruta; la C se descarta porque «Constructor», «Impulsor» y «Líder» no son plantas y porque un huerto con mascotas es lo que más se acerca a lo infantil.

## 4. Animación con propósito

| ID | Hallazgo | Fuente (leída) | Decisión |
|---|---|---|---|
| AN-01 | La mayoría de las animaciones de interfaz deben durar 100-500 ms; la retroalimentación simple (casilla, interruptor) unos 100 ms; «es mucho más común que sean demasiado largas que demasiado cortas» | NN/g, *Executing UX Animations: Duration and Motion Characteristics* | Micro 120 ms; puntada 400 ms; contador 500 ms; ninguna parte de una celebración supera 600 ms; la **secuencia completa** del cierre ≤ 2,4 s |
| AN-02 | WCAG 2.2.2 (nivel A): lo que se mueve solo, dura más de 5 s y está junto a otro contenido necesita pausar/detener/ocultar | W3C, *Understanding SC 2.2.2* | Ninguna animación dura > 5 s ni se repite en bucle; todo el movimiento nace de un hecho o de un clic |
| AN-03 | WCAG 2.3.1 (nivel A): nada destella más de tres veces en un segundo | W3C, *Understanding SC 2.3.1* | Prohibido destello; el brillo del sello es un único barrido de opacidad |
| AN-04 | WCAG 2.3.3 (nivel **AAA**): movimiento disparado por una interacción debe poder desactivarse | W3C, *Understanding SC 2.3.3* | Cumple como objetivo: `prefers-reduced-motion` **y** un control propio visible (intensidad «Discreto»); es AAA, no obligatorio |
| AN-05 | WCAG 2.5.8 (AA): objetivo táctil de al menos 24 × 24 px CSS | W3C, *Understanding SC 2.5.8* | El manual ya exige 44 px (RNF-05); se mantiene |
| AN-06 | WCAG 4.1.3 (AA): los mensajes de estado deben poder anunciarse sin recibir el foco | W3C, *Understanding SC 4.1.3* | Una región `role="status"` anuncia puntos, nivel e insignia en **una frase** |
| AN-07 | `prefers-reduced-motion` es «Baseline, ampliamente disponible» desde enero de 2020; en `@mdn/browser-compat-data` 8.1.7: Chrome 74, Firefox 63, Safari 10.1 | MDN y BCD 8.1.7 | Toda animación nace en un bloque `@media (prefers-reduced-motion: no-preference)` o se anula en `reduce` |
| AN-08 | `Element.animate()` (Web Animations): Chrome 36, Firefox 48, Safari 13.1 | BCD 8.1.7 | Se puede usar para el contador y la puntada sin librería |
| AN-09 | **Sonido:** el audio programático se bloquea hasta que haya interacción de la persona | MDN, *Autoplay guide* | **Sin sonido** por defecto y en el MVP; si algún día se añade, es opt-in |
| AN-10 | **Háptica:** `navigator.vibrate` no es compatible con Safari ni Safari en iOS (Chrome 32, Firefox 79 en Android) | BCD 8.1.7; MDN, *Vibration API* («no hace nada si el dispositivo no lo soporta») | Fuera del MVP; si se añade, opt-in y mejora progresiva (`PROPUESTA`) |
| AN-11 | Fatiga de notificaciones: **no hallé fuente** | — `[NO VERIFICADO]` | Regla propia (`RG-07`): una sola celebración mayor por acción, los toasts se encolan (máximo 1 visible), y a partir del tercero de la sesión pasan a la versión discreta |

## 5. Técnicas de implementación ligeras

Presupuesto vigente (`15` §8): JS inicial ≤ 250 KB gzip; `motion` con `LazyMotion` ≈ 29 KB; confeti ≤ 60 partículas; solo `transform` y `opacity`; 150-300 ms. Medidas de `15` §3 (27-oct-2026) y de esta sesión.

| Opción | Costo | Veredicto |
|---|---|---|
| **SVG animado con CSS** (`transform` y `opacity`) | 0 KB de JS | **Elegida** para la puntada, el sello y la barra. `stroke-dashoffset` no es `transform` ni `opacity` y queda fuera de la regla de `15` §8; la puntada se dibuja con `transform: scaleX()` sobre un elemento con origen a la izquierda |
| **Web Animations API** (`Element.animate`) | 0 KB | **Elegida** para el contador y el orden de la secuencia |
| `motion` 14.6.0 (MIT; publicada el 22-oct-2026) | +28,8 KB gzip con `LazyMotion` (`15` §3) | Solo para T-47b (lista de espera). **No** se necesita para la versión mínima |
| `canvas-confetti` 1.9.4 (ISC; 25-oct-2025) | +3,9 KB gzip (`15`) | **Descartada por tono**, no por peso: el confeti de fiesta es lo más cercano a lo infantil (R-I2). Queda como opción `PROPUESTA` desactivada |
| **Lottie** `lottie-web` 5.13.0 (MIT; publicada el 21-may-2025) | **305,7 KB** minificado y **76,1 KB gzip** (descargué `build/player/lottie.min.js` de jsDelivr y lo comprimí con `gzip -9`) | **Descartada**: 2,6 veces el costo de `motion` y exige un archivo de animación externo para cada escena |
| `@lottiefiles/dotlottie-web` 0.81.0 (MIT; 6-oct-2026) | 7,4 MB desempaquetados (npm); gzip **no medido** | **Descartada** por tamaño del paquete y por depender de archivos de animación externos |

Fuentes (`Manrope`, `Source Sans 3`) e iconos (`lucide` 1.61.0) siguen siendo los locales del prototipo existente (`02_tokens.md` TK-03, TK-04).

## 6. Reglas de diseño que se derivan (`RG-xx`)

| ID | Regla | Origen |
|---|---|---|
| RG-01 | Todo punto, nivel o sello nace de un **hecho verificable del sistema**; nada se concede por clics ni por declaración propia | `06` §7.4, IG-05, IG-09 |
| RG-02 | Una sola metáfora: **el hilo** (cada hecho verificado deja una puntada). Los textos conservan los términos de `21_microcopy.md` (nivel, insignia, puntos, misión); sin mascotas, personajes ni emojis | §3, IG-03, IG-07 |
| RG-03 | La celebración **describe el hecho** («Cumpliste “Actualizar precios”») antes que la cifra (+25) | IG-05 (retroalimentación informativa), IG-09 |
| RG-04 | La persona controla la intensidad: **Completo, Discreto u Oculto**; la elección se pregunta una vez y se puede cambiar siempre | IG-06, IG-07, AN-04 |
| RG-05 | **Nunca bloquea**: ninguna celebración impide seguir; toda ventana se cierra con Esc y con un botón | Encargo; WCAG 2.2.2 |
| RG-06 | Sin pérdida ni presión: sin rachas (DEC-11), sin cuentas regresivas, sin comparaciones con quien va atrasado, sin «te estás quedando» | IG-08, DI-49 |
| RG-07 | **Una celebración mayor por acción**; los toasts se encolan y el tercero de la sesión pasa a texto discreto | AN-11 (regla propia) |
| RG-08 | Movimiento solo con `transform` y `opacity`, ≤ 600 ms por tramo y ≤ 2,4 s por secuencia; sin destellos; **versión estática equivalente** para cada celebración | AN-01..AN-03, AN-07 |
| RG-09 | El progreso se entiende **sin animación**: el estado final es siempre texto + forma + posición | regla 2 de `diseno/INDEX.md` §3 («ninguna información solo por color»), AN-04 |
| RG-10 | Sin sonido y sin háptica por defecto | AN-09, AN-10 |
| RG-11 | La primera vista **nunca está en cero**: la ficha y las atenciones ya son puntadas | IG-11 |
| RG-12 | El aviso de cercanía («a un gesto de…») sale una vez y solo si es verdad | IG-12 |
| RG-13 | La recompensa útil es **conocimiento** sobre el propio negocio (hallazgo, resumen del tramo), no objetos | Reto del CDE («datos a conocimiento»), PA-G7, PA-G8 |
| RG-14 | La tabla de posiciones es opcional, anónima por defecto, apagada por defecto y no muestra a la última persona | IG-08, DEC-13 |
| RG-15 | La vista del equipo solo muestra **agregados** con un mínimo de 3 personas por celda | PA-G6, `04` §6 (privacidad) |
| RG-16 | Sin librerías nuevas en el MVP: SVG + CSS + Web Animations | §5, `15` §8 |

## Criterio de aceptación de este archivo

1. Toda cifra de §1 y §4 tiene fuente, fecha de consulta y estado (resumen o automático).
2. Lo no verificado está en NV-G1..NV-G4 y en las columnas marcadas.
3. Hay una única metáfora recomendada con razones (§3).
4. §6 termina con reglas numeradas que `01` y las especificaciones citan.
