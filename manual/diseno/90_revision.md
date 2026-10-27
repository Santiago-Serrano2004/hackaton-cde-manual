# 90 · Revisión y validación con evidencia

**Objetivo.** Demostrar con mediciones que los 13 mockups cumplen la lista de verificación de `00_investigacion.md` §10, `16` §13 y `16` §10, y registrar los defectos reales encontrados y corregidos.
**Entradas.** `prototipo/` (código final), `capturas/`, `02_tokens.md` §3, `00_investigacion.md` §10.
**Fecha de las mediciones:** 27-oct-2026. **Herramientas (versiones consultadas en el registro de npm):** axe-core 4.14.0 y @axe-core/playwright 4.14.0 (MPL-2.0), Lighthouse 13.5.0 (Apache-2.0), Playwright con Chromium 1243, Tailwind 4.3.3.

## 1. Método

1. **Capturas.** `capturas/` contiene 146 imágenes: cada pantalla (y la paleta, el cierre de compromiso y los componentes) a 1440 y 390 px, en tema claro y oscuro, página completa; y los estados vacío, cargando y error de cada pantalla (en claro, 1440 y 390 px). Se abrieron y revisaron a ojo; los defectos visuales de §3 salieron de esa revisión.
2. **axe-core.** 240 combinaciones (17 páginas × estados vacío/cargando/error/éxito donde aplican × 1440 y 390 px × claro y oscuro) con las etiquetas `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, `wcag22aa` y `best-practice`.
3. **Lighthouse.** Las 17 páginas servidas por un servidor HTTP local, en escritorio (1440 px, sin estrangulamiento) y móvil (emulación por defecto de Lighthouse).
4. **Contraste.** Fórmula de WCAG (luminancia relativa) sobre los tokens: 39 pares por modo, tabla completa en `02_tokens.md` §3.
5. **Mediciones por código.** Desbordamiento horizontal (`scrollWidth` frente a `clientWidth`) y tamaño de objetivos (≥ 24 px en escritorio, ≥ 44 px en móvil) en las 17 páginas.
6. **Consistencia.** Script que compara cada texto de las 13 especificaciones con `21_microcopy.md`; cifras contra `04_datos.md` §7.1 y `21_casos_demo.md`.

Límites honestos: Lighthouse sobre `file://` no funciona (se sirvió por HTTP local); no se probó con lector de pantalla real (NVDA/VoiceOver), ni en Firefox ni Safari; Lighthouse de escritorio sin estrangulamiento sobreestima el rendimiento de un equipo modesto; el peso medido es el del prototipo (52 KB de CSS y JS sin comprimir), no el de la aplicación React.

## 2. Resultados

### 2.1 axe-core

| Pasada | Violaciones | Qué quedaba |
|---|---:|---|
| 1 (primer prototipo completo) | 360 | región sin landmark (240), nombre accesible del buscador (86), contraste del botón en hover, roles ARIA inválidos, lista mal formada, barra de progreso sin nombre, regiones con scroll sin foco |
| 2 | 86 | nombre accesible del buscador |
| 3 | 86 | ídem (aria-label no coincidía con el texto visible) |
| 4 | 86 | botón sin texto visible en móvil |
| **Final** | **0 de 240 combinaciones** | — |

### 2.2 Lighthouse 13.5.0 (accesibilidad, rendimiento, buenas prácticas)

| Página | Accesib. (esc/móv) | Rendimiento (esc/móv) | Buenas prácticas (esc/móv) | LCP móvil | CLS (esc/móv) |
|---|---|---|---|---|---|
| `index.html` | 100 / 100 | 100 / 100 | 100 / 100 | 1,7 s | 0 / 0 |
| `p01-acceso.html` | 100 / 100 | 100 / 99 | 100 / 100 | 1,7 s | 0 / 0 |
| `p02-panel.html` | 100 / 100 | 100 / 100 | 100 / 100 | 1,7 s | 0 / 0 |
| `p03-busqueda.html` | 100 / 100 | 100 / 100 | 100 / 100 | 1,7 s | 0 / 0 |
| `p04-nueva-empresa.html` | 100 / 100 | 100 / 100 | 100 / 100 | 1,7 s | 0 / 0 |
| `p05-fusion.html` | 100 / 100 | 100 / 100 | 100 / 100 | 1,7 s | 0 / 0 |
| `p06-ficha.html` | 100 / 100 | 100 / 99 | 100 / 100 | 1,8 s | 0 / 0 |
| `p07-importacion.html` | 100 / 100 | 100 / 100 | 100 / 100 | 1,7 s | 0 / 0 |
| `p08-citas.html` | 100 / 100 | 100 / 100 | 100 / 100 | 1,7 s | 0 / 0 |
| `p08b-mis-citas.html` | 100 / 100 | 100 / 100 | 100 / 100 | 1,7 s | 0 / 0 |
| `p09-eventos.html` | 100 / 100 | 100 / 100 | 100 / 100 | 1,7 s | 0 / 0 |
| `p10-analisis.html` | 100 / 100 | 100 / 100 | 100 / 100 | 1,7 s | 0 / 0 |
| `p11-mi-ruta.html` | 100 / 100 | 100 / 100 | 100 / 100 | 1,7 s | 0 / 0 |
| `p12-recompensas.html` | 100 / 100 | 100 / 100 | 100 / 100 | 1,7 s | 0 / 0 |
| `p13-administracion.html` | 100 / 100 | 100 / 100 | 100 / 100 | 1,7 s | 0 / 0 |
| `componentes.html` | 100 / 100 | 100 / 99 | 100 / 100 | 1,8 s | 0 / 0 |
| `demo.html` | 100 / 100 | 100 / 100 | 100 / 100 | 1,7 s | 0 / 0 |

Mínimos: accesibilidad 100, rendimiento 99, buenas prácticas 100, CLS 0 en todas las páginas. Antes de corregir, la ficha (CLS 0,229), la hoja de componentes (0,412) y la importación en móvil (0,229) tenían saltos de diseño por la carga de fuentes.

### 2.3 Contraste

Los 39 pares por modo de `02_tokens.md` §3 cumplen (0 «NO CUMPLE» en claro y oscuro). Dos pares se marcan «informativo» a propósito: naranja sin contorno sobre tarjeta (2,73:1, nunca se usa solo) y contorno tinta contra relleno naranja en oscuro (el límite del nodo es contorno frente a superficie). axe confirma los mismos pares sobre el DOM renderizado (cero `color-contrast` en 240 combinaciones).

### 2.4 Reflujo y objetivos

| Medición | Resultado final |
|---|---|
| Desbordamiento horizontal a 390 px en 17 páginas | 0 (antes: fusión 562 px, componentes 409 px) |
| Objetivos < 24 px en escritorio | 0 |
| Objetivos < 44 px en móvil | 0 (antes: 6 sellos de 26 px, chips y cabeceras de tabla de 24 px) |
| Solicitudes a dominios externos | 0 (fuentes e iconos locales) |

## 3. Defectos reales encontrados y corregidos

| # | Defecto | Cómo se encontró | Corrección |
|---|---|---|---|
| 1 | Mapa de calor sin color: `.heat button{all:unset}` ganaba en especificidad a `.n1–.n5` | Captura de `p10` | Selectores `.heat button.nN` |
| 2 | Elementos con `[hidden]` seguían visibles (la línea de tiempo mostraba 21 hitos y «Ver 13 más» a la vez; avisos ocultos visibles) | Captura de `p04`, `p06` | Regla global `[hidden]{display:none!important}` |
| 3 | Colisión de nombres de clase: `.campo.aviso` frente al componente `.aviso` | Captura de componentes | Estado renombrado a `.campo.adv` |
| 4 | Etiquetas del radar cortadas («Finanz», «zación») | Captura de componentes | `viewBox` ampliado |
| 5 | Matriz de estados de botones desbordaba y cortaba el foco | Captura de componentes | Columnas de 168 px y relleno |
| 6 | Orden cronológico erróneo en la ruta de ejemplo | Captura de componentes | Plan de acción antes que primer taller |
| 7 | Botón primario en hover: 4,46:1 | axe (serious) | Hover `#F89241` (6,26:1) |
| 8 | Paleta de ejemplo con `aria-selected` en `role=presentation` | axe (critical) | `role=option` en `listbox` |
| 9 | `role=rowheader` sin `row` en la comparación | axe (critical) | Se quitó el rol |
| 10 | `ol` con hijos `role=presentation` | axe (serious) | Grupos como `li` normales |
| 11 | Barra de progreso sin nombre | axe (serious) | `aria-label` |
| 12 | Tablas con scroll sin acceso por teclado | axe (serious) | `tabindex=0`, `role=region` y nombre desde `caption` cuando hay desplazamiento |
| 13 | Banner de datos sintéticos fuera de un landmark | axe (moderate) | `aside` con `aria-label` |
| 14 | `role=listitem` en enlaces | axe (minor) | Se quitó |
| 15 | Botón de búsqueda: nombre accesible distinto del texto visible y, en móvil, sin texto | axe (serious, critical) | Nombre desde el contenido; texto visualmente oculto en móvil |
| 16 | Saltos de diseño por fuentes (CLS hasta 0,412) | Lighthouse | Precarga de las dos fuentes y favicon `data:` |
| 17 | Desbordamiento a 390 px en fusión (562 px) y componentes (409 px) | Medición por código | `min-width:0`, `overflow-wrap`, contenedor con scroll para el mapa de calor |
| 18 | Objetivos de 24–26 px en móvil (sellos, chips, cabeceras de tabla) | Medición por código | Mínimo de 44 px en móvil |
| 19 | Mapa de ruta sin icono de estado y sin pista para lectores | Revisión | Texto oculto «Etapa lograda / Estás aquí / Siguiente» por nodo |
| 20 | Hitos del tema oscuro: escala de calor con niveles 2 y 3 poco distintos | Captura oscura | **Sin corregir**: el número está en cada celda, el nivel 4 y 5 llevan trama y los pares cumplen contraste; queda como limitación (ver §5) |

## 4. Lista de verificación por pantalla

Leyenda: ✔ cumple · n/a no aplica · ✘ no cumple. Evidencia: ax = axe, lh = Lighthouse, md = medición por código, cap = captura revisada.

| Comprobación (de `00` §10) | p01 | p02 | p03 | p04 | p05 | p06 | p07 | p08 | p09 | p10 | p11 | p12 | p13 | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| C1 Una acción primaria visible | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | cap |
| C2 Texto ≥ 4,5:1 | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ax, §2.3 |
| C3 Componentes ≥ 3:1 | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ax, §2.3 |
| C4 Nada solo por color | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | cap |
| C5 Foco de 3 px visible | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | cap (hoja de componentes), CSS global |
| C6 Objetivos ≥ 24/44 px | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | md |
| C7 Sin scroll horizontal a 390 px | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | md |
| C8 Estados vacío/cargando/error/éxito | ✔ (3 + bloqueo) | ✔ | ✔ | ✔ (sin vacío) | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ (sin vacío de pantalla) | cap |
| C9 Errores con causa y salida | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | revisión de textos |
| C10 Destructivas reversibles o confirmadas | n/a | n/a | n/a | n/a | ✔ | n/a | ✔ | ✔ | n/a | n/a | n/a | n/a | ✔ | diálogos |
| C11 Procedencia visible | n/a | n/a | n/a | ✔ | ✔ | ✔ | ✔ | n/a | n/a | n/a | n/a | n/a | n/a | cap |
| C12 Escala tipográfica y línea ≤ 90 caracteres | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | CSS (`texto-largo` 68ch) |
| C13 Espaciado múltiplo de 4 | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | tokens |
| C14 Tabla: cabecera, números a la derecha, orden | n/a | ✔ | ✔ | n/a | n/a | ✔ | ✔ | ✔ | ✔ | ✔ | n/a | ✔ | ✔ | cap |
| C15 Radar con tabla equivalente | n/a | n/a | n/a | n/a | n/a | ✔ | n/a | n/a | n/a | n/a | n/a | n/a | n/a | cap |
| C16 Mapa de calor con número y trama | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | ✔ | n/a | n/a | n/a | cap |
| C17 Solo transform/opacity, ≤ 300 ms (logro 500 ms) | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | CSS |
| C18 `prefers-reduced-motion` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | capturas con movimiento reducido; CSS y JS |
| C19 Estado anunciado (`role=status/alert`) | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | código |
| C20 Textos de `21_microcopy.md` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | script (§6) |
| C21 Datos de `21_casos_demo`/`04` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | §6 |
| C22 Sin logos ni marcas de terceros | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | búsqueda en el código |
| C23 Sin servicios externos | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | 0 solicitudes externas |
| C24 Gamificación opcional y sobria | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | ✔ | ✔ | n/a | interruptor «Ocultar puntos y niveles» |
| C25 Formato colombiano | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | «29 oct 2026», coma decimal |
| C26 Peso dentro del presupuesto | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | lh; 52 KB de CSS/JS del prototipo |
| C27 Sin trampas de teclado | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | diálogos nativos y paleta con Esc (no probado con lector real) |
| C28 Reflujo y espaciado de texto | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | md; sin alturas fijas en texto |

### 4.1 Lista de `16` §13 (14 ítems) y antipatrones de `16` §10

| `16` §13 | Resultado |
|---|---|
| 1 «pamaderia» encuentra la empresa | ✔ en el prototipo (cronómetro ≤ 20 s se mide en el ensayo con la app real) |
| 2 axe sin errores serios | ✔ 0 en 240 combinaciones |
| 3 Sin blanco sobre naranja ni naranja como texto | ✔ botón primario con texto tinta; `--naranja-texto` para texto |
| 4 Foco visible en el camino dorado | ✔ |
| 5 Estados con icono y texto | ✔ |
| 6 Mapa de calor con número | ✔ |
| 7 `prefers-reduced-motion` sin perder información | ✔ |
| 8 1366×768 y 1920×1080 sin cortes; 360 px usable | ✔ 1440 y 390 medidos; 1366, 1920 y 360 **no medidos** |
| 9 Ningún estado en blanco | ✔ |
| 10 Banner «Datos sintéticos» | ✔ en las 17 páginas |
| 11 Sin logotipos de la UNAB/CDE | ✔ |
| 12 Sin antipatrones de §10 | ✔ ver abajo |
| 13 Lighthouse/LCP y peso | ✔ §2.2 |
| 14 Un compañero completa la tarea en ≤ 2 min | **Pendiente**: requiere una persona (prueba de usabilidad del 28-oct) |

Antipatrones de `16` §10: 1 tarjetas idénticas con degradado (no hay degradados; las tarjetas varían: tabla, hilo, mapa, cifra) ✔ · 2 cifra + etiqueta + degradado como único tratamiento ✔ · 3 «eyebrows», cadenas con puntos medios y flechas en botones ✔ (hay etiquetas pequeñas de contexto, p. ej. «Tu próximo paso», con función) · 4 palabra resaltada en titulares ✔ · 5 numeración sin secuencia ✔ · 6 entrada animada por sección y hover en toda tarjeta ✔ (solo `a.stat`) · 7 negro puro/acento ácido ✔ · 8 ilustraciones de stock y emojis ✔ · 9 «Enviar»/«OK» ✔ · 10 gráficos sin etiquetas ni tabla ✔ · 11 pantallas en blanco ✔ · 12 logotipos ✔.

## 5. Lo que no se cumplió o queda abierto

1. Prueba con lector de pantalla real, Firefox y Safari: **no hecha**.
2. Prueba de usabilidad de 2 minutos con una persona que no construyó la pantalla: **pendiente** (28-oct).
3. Anchos de 1366, 1920 y 360 px: no medidos.
4. Escala de calor en oscuro: niveles 2 y 3 poco distintos (defecto 20); se apoya en el número y la trama. Propuesta: validar con una persona con daltonismo antes del 29-oct.
5. El valor de coincidencia 0,82, los cupos 24/30 y 23/30 y «41 empresas» son los del guion; el real se lee del seeder (DEC-08, DEC-16).
6. Rendimiento de la aplicación real (React) no medido: el prototipo no es la aplicación.

## 6. Consistencia con `04_datos.md`, `21_microcopy.md` y los diagramas

- **Microcopy:** 147 textos de las 13 especificaciones comparados con `21_microcopy.md`: 146 idénticos y 1 diferencia explicada (la clave `MAIL.cita_24h` se usa por su asunto; se renombró a «MAIL.cita_24h (asunto)»).
- **Cifras de `04` §7.1:** 497 empresas, 569 atenciones, 36 % con sector (180), 37 % con tamaño (184), reparto por sector 50/36/25/20/13 + 36 restantes, tamaño 120/50/12/2, 18 % de compromisos vencidos, 509 filas con 12 duplicados, roles 1/3/3/6/30: todas coinciden.
- **`21_casos_demo`:** 21 hitos de 9 tipos con las fechas del archivo, diagnósticos 55/50/52, 35/58/71, 60/62/64, 70/70/72, Marcela 430 → 455 puntos, nivel 3 → 4. **Diferencia deliberada:** los dígitos de verificación de los NIT (DEC-07, CON-08).
- **Diagramas (`diagramas/`):** nombres de roles (`administrador`, `equipo_cde`, `docente`, `estudiante_consultor`, `emprendedor`), estados de cita (solicitada, agendada, realizada, cancelada) y endpoints de `05` §3 coinciden con los diagramas 40–45, 50–54 y 60–62. Excepción documentada: `POST /fusiones/{id}/deshacer` y `GET /buscar` son `PROPUESTA` de esta misión (no están en `05`).

## 7. Criterio de aceptación

1. axe: 0 violaciones en 240 combinaciones. **Cumple.**
2. Lighthouse: accesibilidad ≥ 100, rendimiento ≥ 99, buenas prácticas ≥ 100 en 34 mediciones. **Cumple.**
3. Contraste: 0 pares fallidos. **Cumple.**
4. Capturas de 13 pantallas en 1440 y 390 px, claro y oscuro, y de los tres estados. **Cumple** (146 imágenes).
5. Defectos reales documentados con su corrección (§3). **Cumple.**
6. Pendientes honestos (§5). **Declarados.**
