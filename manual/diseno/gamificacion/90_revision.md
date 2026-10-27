# 90 · Revisión y validación del módulo rediseñado

**Objetivo.** Dejar la evidencia medida de que el módulo rediseñado («El hilo») cumple lo que `01_direccion_y_mecanicas.md` promete: accesible, liviano, sin movimiento obligatorio, coherente con los datos del manual y sin parecer infantil.
**Entradas.** `prototipo/`, `capturas/`, `01_direccion_y_mecanicas.md`, `15_frontend_skills_y_ui.md` §8, `21_contenido_formacion.md`, `21_casos_demo.md`.
**Fecha.** 27-oct-2026. **Equipo de medición.** Chromium 1243 con Playwright (contenedor en la nube, sin pantalla ni lector de pantalla real). **Todas las cifras son de esta sesión y de este equipo; no se midió en el portátil del laboratorio.**

## 1. Método

| Medición | Herramienta y versión | Cómo |
|---|---|---|
| Accesibilidad automática | axe-core 4.14.0 | Etiquetas `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, `wcag22aa` y `best-practice`, sobre **120 combinaciones**: 5 páginas × 4 estados + escena cerrada + intensidades Oculto y Discreto + pregunta de primera vez + momentos + índice + escena en curso, × 1440 y 390 px × claro y oscuro |
| Rendimiento y buenas prácticas | Lighthouse 13.5.0 | Servidor local `python3 -m http.server`; 7 páginas × móvil (simulado) y escritorio = **14 corridas** finales |
| Rendimiento durante animaciones | CDP (`Performance.getMetrics`), `PerformanceObserver` (`longtask`, `layout-shift`) y marcas de `requestAnimationFrame` | CPU estrangulada 4×; escena de cierre con Completo y con `prefers-reduced-motion` emulado |
| Contraste | Fórmula de luminancia relativa de WCAG (cálculo propio, `scratchpad/contraste.py`, no está en el repositorio) | 27 parejas × 2 temas |
| Capturas | Playwright, PNG a 1440 y 390 px | Con el alto de la ventana igual al alto de la página para que la barra inferior fija quede al final |
| Fotogramas de celebraciones | Playwright + `?lento=10` (tiempos de JS ×10) + `Animation.setPlaybackRate` 0,1 de CDP | Cada fotograma indica el tiempo real de la escena (ms) |
| Funcional | Playwright, 36 comprobaciones | §6 |

## 2. Resultados automáticos

### 2.1 axe-core

**Inicial: 36 violaciones en 120 combinaciones. Final: 0.** Las dos causas: `aria-progressbar-name` (barra de nivel sin nombre, 32 combinaciones) y `heading-order` (galería de momentos: h3 después de h1, 4 combinaciones; ver D-13).

### 2.2 Lighthouse 13.5.0 (valores finales)

| Página | Rendimiento móvil | Rendimiento escritorio | Accesibilidad | Buenas prácticas | CLS | TBT móvil |
|---|---:|---:|---:|---:|---:|---:|
| `mi-ruta.html` | 98 | 100 | 100 | 100 | 0 | 20 ms |
| `logros.html` | 98 | 100 | 100 | 100 | 0 | 10 ms |
| `reto.html` | 99 | 100 | 100 | 100 | 0 | 0 ms |
| `equipo.html` | 98 | 100 | 100 | 100 | 0 | 0 ms |
| `posiciones.html` | 99 | 100 | 100 | 100 | 0 | 0 ms |
| `momentos.html` | 99 | 100 | 100 | 100 | 0 | 0 ms |
| `index.html` | 99 | 100 | 100 | 100 | 0 | 0 ms |

LCP: 2,0 s en móvil simulado y 0,5 s en escritorio (páginas sin imágenes; el texto es el elemento más grande). Presupuesto de `15` §8: LCP ≤ 2,5 s → cumple.
**Antes de corregir** (D-14): CLS de 0,01 a 0,31 en las primeras 8 corridas.

## 3. Capturas

Carpeta `capturas/` (83 archivos, 12 MB). Todas se abrieron y se revisaron (hojas de contacto de 4 a 6 imágenes por página).

| Archivo | Contenido |
|---|---|
| `g-{pantalla}_{1440|390}_{claro|oscuro}.png` | Pantallas `mi-ruta`, `logros`, `reto`, `equipo`, `posiciones`, `momentos` e `index` en estado de éxito |
| `g-mi-ruta_cerrado_…` y `g-logros_cerrado_…` | Después de la escena: 455 puntos, nivel 4, Cumplidor ganada |
| `estado_g-{pantalla}_{vacio|cargando|error}_{1440|390}.png` | Estados (claro); el vacío también en oscuro (`…_oscuro.png`) |
| `tira_G-03-04-05_escena.png` | **6 fotogramas** de la escena de cierre: 1, 300, 650, 1 000, 1 500 y 2 600 ms |
| `tira_G-02_puntos.png` | 5 fotogramas del aviso de puntos |
| `tira_G-08_hallazgo.png` | 5 fotogramas del hallazgo (barras escalonadas) |
| `tira_G-01_primera_vez.png` | 5 fotogramas de la pregunta de primera vez |
| `tira_escena_discreto.png`, `tira_escena_movimiento_reducido.png`, `tira_escena_oculto.png` | Antes y después de la misma escena en las otras tres versiones |

**Lo que se observa en la escena (6 fotogramas):** a 1 ms la estación «Actualizar precios» ya es «Hecho» y el tramo de hilo hacia la siguiente se está dibujando; a 300 ms el contador va por 449 y la barra casi llena; a 650 ms llegó a 455; a 1 000 ms el nivel cambia a 4 con la barra en 2 % (sin vaciarse a la vista); a 1 500 ms entra la tarjeta de hito con la insignia estampándose; a 2 600 ms todo queda quieto. Un solo aviso.

## 4. Contraste calculado de cada pareja nueva

Umbrales: 4,5:1 para texto normal; 3:1 para componentes y gráficos (WCAG 2.2, 1.4.3 y 1.4.11). Cálculo propio con los valores de `diseno/02_tokens.md`. Las baldosas con trama se calcularon en el **peor caso** (color de la línea de la trama mezclado con el fondo).

### 4.1 Modo claro

| Texto o elemento | Primer plano | Fondo | Razón | Mínimo | Resultado | Uso |
|---|---|---|---:|---:|:-:|---|
| Icono de la baldosa Ficha | `#16265C` | `#FFCC4D` | 9,55:1 | 3:1 | cumple | Baldosa Ficha (icono) |
| Icono de la baldosa Compromiso | `#16265C` | `#F47B20` | 5,25:1 | 3:1 | cumple | Baldosa Compromiso (icono) |
| Icono sobre la trama de Diagnóstico | `#16265C` | `#BAC1D8` | 7,99:1 | 3:1 | cumple | Baldosa Diagnóstico, peor caso sobre una línea de la trama |
| Icono sobre la trama de Asistencia | `#16265C` | `#B7C7CB` | 8,22:1 | 3:1 | cumple | Baldosa Asistencia, peor caso sobre un punto de la trama |
| Icono sobre la trama de Cita | `#16265C` | `#CCC7BB` | 8,5:1 | 3:1 | cumple | Baldosa Cita, peor caso sobre una línea de la trama |
| Cifra de la baldosa | `#16265C` | `#FFFFFF` | 14,33:1 | 4,5:1 | cumple | Cifra de puntos (texto de 13 px en negrita) |
| Borde de baldosa y de nodo | `#16265C` | `#FFFFFF` | 14,33:1 | 3:1 | cumple | Borde de 2-3 px frente a la tarjeta |
| Hilo recorrido | `#16265C` | `#FFFFFF` | 14,33:1 | 3:1 | cumple | Trazo continuo de la ruta |
| Hilo por recorrer | `#7C84A3` | `#FFFFFF` | 3,69:1 | 3:1 | cumple | Puntos de la ruta pendiente |
| Icono del nodo hecho/aquí (amarillo) | `#16265C` | `#FFCC4D` | 9,55:1 | 3:1 | cumple | Marca de verificación en nodo hecho |
| Icono del nodo «Estás aquí» (naranja) | `#16265C` | `#F47B20` | 5,25:1 | 3:1 | cumple | Icono en nodo actual |
| Etiqueta del nodo | `#4B5575` | `#FFFFFF` | 7,35:1 | 4,5:1 | cumple | Fecha o detalle bajo el nodo |
| Franja «a un gesto de…» | `#1F3A8A` | `#E8EDFB` | 8,83:1 | 4,5:1 | cumple | Texto |
| Barra «antes» del hallazgo | `#4B5575` | `#C9CFE3` | 4,73:1 | 3:1 | cumple | Barra de 9 px frente a la pista |
| Barra «ahora» del hallazgo | `#16265C` | `#C9CFE3` | 9,22:1 | 3:1 | cumple | Barra de 9 px frente a la pista |
| Anillo de progreso de insignia | `#16265C` | `#C9CFE3` | 9,22:1 | 3:1 | cumple | Arco frente a la pista |
| Motivo de insignia en progreso | `#16265C` | `#FFFFFF` | 14,33:1 | 3:1 | cumple | Trazos sobre fondo de tarjeta |
| Motivo de insignia bloqueada | `#4B5575` | `#E6E8EF` | 6,01:1 | 3:1 | cumple | Trazos sobre fondo deshabilitado |
| Interruptor de intensidad (activo) | `#F7F4EF` | `#16265C` | 13,06:1 | 4,5:1 | cumple | Texto de la opción elegida |
| Interruptor de intensidad (inactivo) | `#16265C` | `#FFFFFF` | 14,33:1 | 4,5:1 | cumple | Texto de las otras opciones |
| Retroalimentación correcta | `#14532D` | `#E4F5EA` | 8,05:1 | 4,5:1 | cumple | Texto |
| Retroalimentación «casi» | `#1F3A8A` | `#E8EDFB` | 8,83:1 | 4,5:1 | cumple | Texto |
| Fila propia de la tabla | `#1F3A8A` | `#E8EDFB` | 8,83:1 | 4,5:1 | cumple | Texto en negrita |
| Detalle de baldosa | `#1B2340` | `#F7F4EF` | 14,06:1 | 4,5:1 | cumple | Texto |
| Nota (texto pequeño) | `#4B5575` | `#FFFFFF` | 7,35:1 | 4,5:1 | cumple | Texto de 14 px |
| Emblema de nivel | `#16265C` | `#F7F4EF` | 13,06:1 | 3:1 | cumple | Trazos del emblema sobre su recuadro |
| Motivo de insignia ganada | `#16265C` | `#FFCC4D` | 9,55:1 | 3:1 | cumple | Trazos #16265C sobre el amarillo del tema |
| Borde de insignia ganada frente a la tarjeta | `#FFCC4D` | `#FFFFFF` | 1,5:1 | 3:1 | ver nota | Relleno amarillo frente a la tarjeta; en claro lo delimita el borde #16265C de 3 px (14,33:1) |

### 4.2 Modo oscuro

| Texto o elemento | Primer plano | Fondo | Razón | Mínimo | Resultado | Uso |
|---|---|---|---:|---:|:-:|---|
| Icono de la baldosa Ficha | `#0F1733` | `#FFC857` | 11,47:1 | 3:1 | cumple | Baldosa Ficha (icono) |
| Icono de la baldosa Compromiso | `#0F1733` | `#FF9A4D` | 8,38:1 | 3:1 | cumple | Baldosa Compromiso (icono) |
| Icono sobre la trama de Diagnóstico | `#F2F4FA` | `#586388` | 5,37:1 | 3:1 | cumple | Baldosa Diagnóstico, peor caso sobre una línea de la trama |
| Icono sobre la trama de Asistencia | `#F2F4FA` | `#516E61` | 5,09:1 | 3:1 | cumple | Baldosa Asistencia, peor caso sobre un punto de la trama |
| Icono sobre la trama de Cita | `#F2F4FA` | `#6E654E` | 5,25:1 | 3:1 | cumple | Baldosa Cita, peor caso sobre una línea de la trama |
| Cifra de la baldosa | `#F2F4FA` | `#18224A` | 13,97:1 | 4,5:1 | cumple | Cifra de puntos (texto de 13 px en negrita) |
| Borde de baldosa y de nodo | `#F2F4FA` | `#18224A` | 13,97:1 | 3:1 | cumple | Borde de 2-3 px frente a la tarjeta |
| Hilo recorrido | `#F2F4FA` | `#18224A` | 13,97:1 | 3:1 | cumple | Trazo continuo de la ruta |
| Hilo por recorrer | `#6F7BAA` | `#18224A` | 3,72:1 | 3:1 | cumple | Puntos de la ruta pendiente |
| Icono del nodo hecho/aquí (amarillo) | `#0F1733` | `#FFC857` | 11,47:1 | 3:1 | cumple | Marca de verificación en nodo hecho |
| Icono del nodo «Estás aquí» (naranja) | `#0F1733` | `#FF9A4D` | 8,38:1 | 3:1 | cumple | Icono en nodo actual |
| Etiqueta del nodo | `#A9B2D0` | `#18224A` | 7,29:1 | 4,5:1 | cumple | Fecha o detalle bajo el nodo |
| Franja «a un gesto de…» | `#C3D2FF` | `#1C2A5C` | 9,11:1 | 4,5:1 | cumple | Texto |
| Barra «antes» del hallazgo | `#A9B2D0` | `#2E3A6B` | 5,15:1 | 3:1 | cumple | Barra de 9 px frente a la pista |
| Barra «ahora» del hallazgo | `#F2F4FA` | `#2E3A6B` | 9,88:1 | 3:1 | cumple | Barra de 9 px frente a la pista |
| Anillo de progreso de insignia | `#F2F4FA` | `#2E3A6B` | 9,88:1 | 3:1 | cumple | Arco frente a la pista |
| Motivo de insignia en progreso | `#F2F4FA` | `#18224A` | 13,97:1 | 3:1 | cumple | Trazos sobre fondo de tarjeta |
| Motivo de insignia bloqueada | `#A9B2D0` | `#232E5C` | 6,16:1 | 3:1 | cumple | Trazos sobre fondo deshabilitado |
| Interruptor de intensidad (activo) | `#0F1733` | `#F2F4FA` | 16,04:1 | 4,5:1 | cumple | Texto de la opción elegida |
| Interruptor de intensidad (inactivo) | `#F2F4FA` | `#18224A` | 13,97:1 | 4,5:1 | cumple | Texto de las otras opciones |
| Retroalimentación correcta | `#9BE9B7` | `#123A25` | 8,89:1 | 4,5:1 | cumple | Texto |
| Retroalimentación «casi» | `#C3D2FF` | `#1C2A5C` | 9,11:1 | 4,5:1 | cumple | Texto |
| Fila propia de la tabla | `#C3D2FF` | `#1C2A5C` | 9,11:1 | 4,5:1 | cumple | Texto en negrita |
| Detalle de baldosa | `#F2F4FA` | `#0F1733` | 16,04:1 | 4,5:1 | cumple | Texto |
| Nota (texto pequeño) | `#A9B2D0` | `#18224A` | 7,29:1 | 4,5:1 | cumple | Texto de 14 px |
| Emblema de nivel | `#F2F4FA` | `#0F1733` | 16,04:1 | 3:1 | cumple | Trazos del emblema sobre su recuadro |
| Motivo de insignia ganada | `#16265C` | `#FFC857` | 9,31:1 | 3:1 | cumple | Trazos #16265C sobre el amarillo del tema |
| Borde de insignia ganada frente a la tarjeta | `#FFC857` | `#18224A` | 9,99:1 | 3:1 | cumple | Relleno amarillo frente a la tarjeta; en claro lo delimita el borde #16265C de 3 px (14,33:1) |

La única fila «ver nota» es el relleno amarillo de la insignia ganada frente a la tarjeta blanca (1,5:1); no es el único indicador de su límite: lo delimita el aro `#16265C` de 3 px (14,33:1) y el texto «Ganada». Antes de corregir (D-08), en oscuro el icono claro `#F2F4FA` sobre el amarillo `#FFC857` daba **1,4:1** y era casi invisible.

## 5. Movimiento y rendimiento durante las animaciones

**Escena de cierre, CPU 4×, 4 corridas por modo (la tabla muestra la última; entre corridas hubo 0 o 1 tarea larga de 61 a 77 ms):**

| Medida | Completo (con movimiento) | `prefers-reduced-motion` emulado |
|---|---:|---:|
| Estado final | Impulsor · 455 puntos · tarjeta «Nivel 4: Impulsor» | Impulsor · 455 puntos · tarjeta «Nivel 4: Impulsor» |
| Anuncio de accesibilidad | «Cumpliste «Actualizar precios»: +25 puntos, nivel 4 e insignia Cumplidor.» | Igual |
| Tarea total del hilo principal | 830 ms | 259 ms |
| Tiempo de `script` | 104 ms | 32 ms |
| Tiempo de `layout` | 74 ms | 16 ms |
| Tiempo de estilos | 95 ms | 23 ms |
| Tareas largas (> 50 ms) | 0 (otras corridas: 1 de 61 a 77 ms) | 1 de 62 ms (el repintado completo de la página a 4× de CPU; ≈ 15 ms sin estrangular) |
| Cuadros medidos / mayores de 25 ms | 233 / 4 (1,7 %); promedio 17,1 ms | 146 / 3 (2,1 %); promedio 17,5 ms |
| CLS durante la escena | 0 | 0 |
| Animaciones simultáneas (máximo) | 12 | 2 (no identificadas; con esta regla duran 0,01 ms por la regla global de movimiento reducido de `base.css`; **0** al terminar) |
| Animaciones en curso tras la escena | — | **0** (Discreto: 0) |

**Presupuesto de `15` §8:** «solo `transform` y `opacity`»: cumplido, con **una excepción declarada**: el contador de puntos cambia texto con `requestAnimationFrame` durante 500 ms (si hace falta cumplirlo al pie de la letra, se elimina y el número cambia de golpe: E-09 simplificada). «≤ 1 efecto de confeti por logro»: no hay confeti. «Duración 150–300 ms»: las micro (120 ms, 220 ms, 320 ms) cumplen; la puntada (420 ms), la baldosa (520 ms), el contador (500 ms) y la insignia (520 ms) superan 300 ms y se justifican por ser celebraciones y no transiciones de interfaz (AN-01: 100–500 ms); ninguna supera 600 ms.

**Peso añadido (archivos del prototipo, `gzip -9`):**

| Archivo | Tamaño | gzip |
|---|---:|---:|
| `css/gam.css` | 21,9 KB | 5,3 KB |
| `assets/sprite-gam.svg` (7 insignias, 6 emblemas, carrete, colinas) | 9,2 KB | 1,4 KB |
| `ilustraciones/*.svg` (14 archivos sueltos, solo para uso fuera del sprite) | 10,6 KB | 5,4 KB en total |
| `js/gam.js` + `js/datos-gam.js` (**solo prototipo**; no se trasladan) | 34,6 KB | 11,6 KB |

**En la aplicación de React:** lo que se traslada es CSS (≈ 5 KB gzip) y el sprite (1,4 KB gzip): **≈ 6,7 KB gzip** frente al presupuesto de 250 KB de JS inicial de `15` §8; **0 KB de dependencias nuevas** (sin `motion`, sin `canvas-confetti`, sin Lottie). El JS de los componentes de React **no se midió** (no existe todavía). Comparación: `motion` con `LazyMotion` ≈ 29 KB; Lottie 76,1 KB gzip (medido, `00` §5).

## 6. Pruebas funcionales (36 de 36)

Ejecutadas con Playwright sobre los cuatro modos (Completo, Completo con movimiento reducido, Discreto, Oculto) y pruebas de teclado y de contenido:

1. El botón del equipo no puede marcar antes de que la persona avise (4 modos).
2. Tras avisar: el pendiente pasa a «En revisión» y el botón del equipo se habilita (4 modos).
3. Tras marcar: 455 puntos y nivel Impulsor, con el anuncio de una sola frase (3 modos con puntos).
4. En Oculto: no se ven nivel ni puntos, no hay tarjeta de hito, el aviso no trae cifras, el pendiente sí pasa a «Cumplido» y la estación meta no se muestra.
5. Completo: la tarjeta de hito aparece, **no hay `<dialog>` abierto**, la página sigue operable y **Esc la cierra** (2 modos).
6. Discreto: no hay tarjeta de hito y sí una línea de estado.
7. Sin animaciones en curso tras la escena en Discreto y con movimiento reducido.
8. Sin errores de consola en los 4 modos.
9. Idempotencia: cerrar dos veces deja 455.
10. Teclado: flecha derecha cambia de Completo a Discreto.
11. Baldosa: al activarla muestra el detalle.
12. Primera vez: aparece la pregunta; elegir Discreto cambia el modo y la cierra.
13. Práctica: una respuesta equivocada da la frase de ayuda y se puede corregir.

## 7. Coherencia con `21_contenido_formacion.md` y `21_casos_demo.md`

Comprobación con un script (`scratchpad/coherencia.py`) que lee las filas de `21_microcopy.md` y busca cada texto en el prototipo.

| Comprobación | Resultado |
|---|---|
| Claves de `21_microcopy.md` usadas (29 revisadas) | **23 coinciden literalmente**; 6 difieren de forma **registrada**: las tres frases `GAM.insignia.*` se dividen en nombre + criterio sin cambiar palabras; `M2.vacio_paso` se divide en título y cuerpo; `M7.insignias_vacio` quita la repetición del título (CON-G-07); `ERR.red` coincide (la fila trae una columna de título) |
| Niveles y umbrales | 0 · 100 · 250 · 450 · 700 · 1 000 y los nombres Semilla, Brote, Constructor, Impulsor, Líder, Referente (T-43) |
| Puntos de Marcela | 13 puntadas = **430** (40 + 50 + 20 + 30 + 25 + 25 + 25 + 30 + 50 + 30 + 25 + 30 + 50), fechas y motivos de `21_casos_demo.md` §2 hitos 2, 3, 6, 8, 9, 10, 11, 13, 16, 17, 18 y 19 |
| Escena | 430 → **455** = nivel 4 (450) e insignia Cumplidor (5.º compromiso a tiempo) en un solo gesto (C-38) |
| Resumen del nivel que termina | 6 puntadas (5 + la nueva), 2 compromisos a tiempo (22 sep y 29 oct), finanzas 58 → 71 (D2 → D3) |
| Hallazgo | D1 → D3: mercadeo 55 → 52, finanzas 35 → 71, operaciones 60 → 64, formalización 70 → 72 (`21_casos_demo.md` §2 «Evolución») |
| Lección L3 y sus 4 preguntas | Texto de `21_contenido_formacion.md` §3 y §4 sin cambios |
| Cifras de cohorte y de posiciones | **De muestra**, rotuladas en pantalla (DEC-G-09); no son del proyecto |

## 8. Defectos reales encontrados y corregidos (19)

| ID | Defecto | Cómo se encontró | Corrección |
|---|---|---|---|
| D-01 | La clase `.prog` de `base.css` (altura de 12 px y `overflow: hidden`) chocó con el estado «en progreso» de la insignia: la tarjeta de Cumplidor medía **34 px** | Captura de Logros | Se renombró a `enprog` |
| D-02 | «35 → 71 (+36)» se partía en dos líneas en el hallazgo | Captura de Mi ruta | Columna de 90 a 130 px |
| D-03 | El botón del equipo quedaba **por debajo** del nivel y del mapa: la escena ocurría fuera de la pantalla | Fotogramas de la escena | Al iniciar la escena la página vuelve al inicio |
| D-04 | El aviso «Listo. El equipo revisará…» seguía en pantalla y se pisaba con la tarjeta de hito | Fotogramas | Se retira al empezar la escena |
| D-05 | Texto duplicado en la vista del equipo («…Actualizar precios · «Actualizar precios» ya está cumplido») | Captura | «ya está cumplido» |
| D-06 | «Cumplido el 29 oct» dejaba «oct» huérfano en la estación | Captura | «Cumplido 29 oct» |
| D-07 | En oscuro, emblemas, siluetas y insignias en progreso o bloqueadas tenían trazo azul marino casi invisible sobre la superficie oscura | Captura 390 oscuro | Variables `--g-emblema-trazo` y trazos de `--tinta`/`--texto-suave` |
| D-08 | En oscuro, iconos claros sobre relleno amarillo (nodos hechos, baldosa Ficha, marcas de misión), 1,4:1 | Captura y cálculo | Texto fijo `--sobre-naranja` sobre amarillo y naranja (11,5:1 y 8,4:1) |
| D-09 | Los estados vacíos repetían el título dentro del texto («Aún no tienes insignias. Aún no tienes…») | Captura | El cuerpo conserva solo la segunda frase (CON-G-07) |
| D-10 | El control «Celebraciones» quedaba a la derecha y sin ancho en móvil | Captura 390 | 100 % de ancho |
| D-11 | «menos de 3» se partía en dos líneas | Captura | Columna de 72 a 100 px |
| D-12 | En la galería, el identificador «G-09» se partía y se veían asteriscos de Markdown en G-10 | Captura | `white-space: nowrap` y se quitaron los asteriscos |
| D-13 | axe: barra de nivel sin nombre accesible (32 combinaciones) y orden de encabezados en momentos (4) | axe | `aria-label` y `h2` |
| D-14 | **CLS** de 0,01 a 0,31: la página se pintaba vacía y luego el script rellenaba, y el cambio de fuente movía el título | Lighthouse y `layout-shift` | Estado inicial pre-renderizado en el HTML, título con ancho flexible fijo y precarga de fuentes **solo con http(s)** (con `file://` la precarga produce errores de consola); CLS 0 |
| D-15 | El contador de puntos podía **bajar** del valor inicial (430 → 402) si la marca de tiempo del cuadro era anterior al inicio | Fotograma de la escena con tiempos ×10 | Se usa `performance.now()` y el avance mínimo es 0 |
| D-16 | Al cambiar de nivel la barra se veía llena y luego «bajaba» a 2 % con transición | Fotograma de 1 000 ms | El cambio de nivel reinicia la barra sin transición |
| D-17 | En «Oculto» seguían saliendo puntos en la estación meta («A 20 puntos») y en el texto del paso | Revisión de la tira «Oculto» | La estación meta se oculta y el texto omite los puntos |
| D-18 | Las barras del panel del equipo se veían **todas llenas** (la animación del hallazgo anulaba su `transform`) | Hoja de contacto | Las barras usan `--v`, como el hallazgo |
| D-19 | Pre-renderizar la página dejó un indicador (`data-enlazado`) en el HTML y la baldosa no respondía al clic | Prueba funcional (35 de 36) | Se guarda en una propiedad de JavaScript |
| D-20 | Tabla de posiciones: saltaba de la posición 5 a la 8 sin explicarlo | Captura | Fila «Otras posiciones no se muestran» |
| D-21 | «1 puntadas» (plural) en Logros tras la escena | Captura | Singular/plural |
| D-22 | Los radios de «Mi enfoque ahora» se veían como discos oscuros ambiguos en oscuro; los plegables no mostraban el indicador | Captura 1440 oscuro | Radios propios y chevron en `summary` |
| D-23 | En el panel del equipo, en móvil, el título del producto se partía en dos líneas por la etiqueta de rol | Captura 390 | Se oculta la etiqueta en ≤ 640 px |

(Son 23; el encargo pedía al menos 10.)

## 9. Riesgos de que se perciba infantil (y la decisión)

| ID | Riesgo | Decisión | ¿Cómo se comprueba? |
|---|---|---|---|
| R-I1 | Confeti y fiesta | **No hay confeti.** El «golpe» es un tramo de hilo, un número que sube y una insignia que se estampa; todo ≤ 2,4 s | S2 de `05` ≤ 2 |
| R-I2 | Mascotas, personajes o emojis | Ninguno; ilustraciones geométricas de una tinta; **el aro cosido** es la única «firma» | Revisión de capturas |
| R-I3 | Lenguaje de exclamaciones («¡Genial!», «¡Felicidades!») | Tono factual; se propone quitar la exclamación de `GAM.nivel_sube` (CON-G-06) | S2 y S1 de `05` |
| R-I4 | Paleta «de juego» (saturada, degradados, brillos) | Solo tokens del CDE; naranja solo como relleno; sin degradados ni brillos | Contraste y revisión |
| R-I5 | Insignias de «medalla brillante» | Motivos geométricos con criterio visible y ficha; PD-07 de diseño sigue abierta para validar con el CDE | Pregunta al CDE |
| R-I6 | Barra de experiencia al estilo de videojuego y «XP» | Barra sobria con texto «Te faltan 20 puntos» y rango visible (250 a 450) | S2 de `05` |
| R-I7 | Tabla de posiciones competitiva | Opt-in, alias, sin la última persona | S3 de `05` |

La evidencia sobre «qué parece infantil» es `[NO VERIFICADO]` (NV-G2): estos riesgos se confirman o se descartan con la prueba de `05`, **que todavía no se ha hecho**.

## 10. Límites de esta validación

- **No se probó con un lector de pantalla real** (NVDA, VoiceOver, TalkBack): solo axe y la estructura de roles.
- **No se probó en Firefox ni Safari**; `prefers-reduced-motion` y `Element.animate` sí están en esos navegadores según BCD 8.1.7 (`00` §4), y no se usa `color-mix`; sí se usa `:has()` en el control de intensidad (probado solo en Chromium; en un navegador sin `:has()` el control seguiría funcionando pero la opción elegida no se resaltaría: `[NO VERIFICADO]`).
- **No se midió en el portátil del laboratorio** ni en un proyector; solo CPU 4× en Chromium.
- **No se hizo la prueba con personas** (`05`).
- El prototipo es de **un solo usuario simulado**; la aplicación real debe guardar preferencias por persona (PD-G03).

## Criterio de aceptación

1. axe 0 violaciones en 120 combinaciones; Lighthouse accesibilidad 100 y CLS 0 en 14 corridas.
2. Tabla de contraste con las 54 parejas nuevas; todas cumplen o están explicadas.
3. Al menos 10 defectos reales corregidos (hay 23) y 5 riesgos de percepción infantil con decisión (hay 7).
4. Los textos, puntos y niveles coinciden con `21_contenido_formacion.md` y `21_casos_demo.md`, con las diferencias registradas.
