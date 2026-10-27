# 00 · Investigación de diseño de interfaz

**Objetivo.** Fijar, con fuentes primarias, las reglas que justifican cada decisión de diseño de la Misión 3 (mockups y especificación del sistema del CDE).
**Entradas.** `16_sistema_de_diseno.md`, `15_frontend_skills_y_ui.md`, `06_ux_gamificacion.md`, `investigacion/06_requerimientos_funcionales_detallados.md`.
**Fecha de consulta de todas las fuentes:** 27-oct-2026 (salvo que se indique otra). Lo que no pude abrir o confirmar va marcado `[NO VERIFICADO]` y se lista al final (§9).
**Convención de IDs:** `DI-xx` = principio de diseño extraído de una fuente; se citan en `01_brief_y_ia.md`, `99_decisiones.md` y `90_revision.md`.

## 1. Usabilidad y leyes de UX

| ID | Principio | Fuente (URL, versión/fecha) | Aplicación al CDE |
|---|---|---|---|
| DI-01 | Visibilidad del estado del sistema | NN/g, *10 Usability Heuristics*, https://www.nngroup.com/articles/ten-usability-heuristics/ (revisada 30-ene-2024) | Todo proceso >1 s muestra estado (cargando, importando N/509 filas, guardado). |
| DI-02 | Correspondencia con el mundo real | ídem | Vocabulario del CDE (“ficha”, “ruta”, “compromiso”), no de base de datos. Textos de `21_microcopy.md`. |
| DI-03 | Control y libertad del usuario (deshacer) | ídem | Fusión de duplicados con deshacer; reversión de importación; cancelar en diálogos. |
| DI-04 | Consistencia y estándares | ídem + Jakob (lawsofux.com/jakobs-law) | Un solo componente por función; atajos conocidos (Ctrl+K). |
| DI-05 | Prevención de errores | ídem | Advertencia de dígito de verificación NIT (RF-31), banner de duplicado antes de guardar (RF-36). |
| DI-06 | Reconocer antes que recordar | ídem | Paleta de comandos muestra resultados con contexto; filtros visibles como chips. |
| DI-07 | Flexibilidad y eficiencia | ídem | Atajos para equipo CDE; flujo guiado para emprendedor. |
| DI-08 | Diseño estético y minimalista | ídem | Un único foco por pantalla; ver DI-12. |
| DI-09 | Ayudar a reconocer, diagnosticar y recuperarse de errores | ídem | Mensajes `ERR.*` dicen qué pasó y qué hacer, sin códigos. |
| DI-10 | Ayuda y documentación | ídem | Estados vacíos con siguiente acción (DI-31). |
| DI-11 | Umbral de Doherty (<400 ms percibido como inmediato) | https://lawsofux.com/doherty-threshold/ | Búsqueda Ctrl+K: respuesta visual <400 ms; esqueleto si se supera. |
| DI-12 | Ley de Hick (más opciones → más tiempo) | https://lawsofux.com/hicks-law/ | ≤7 elementos de navegación por rol; acciones primarias únicas por vista. |
| DI-13 | Ley de Fitts (objetivos grandes y cercanos) | https://lawsofux.com/fittss-law/ | Botón primario ≥44 px en móvil; acción principal junto al contenido. |
| DI-14 | Ley de Miller (memoria de trabajo limitada; “7±2” es heurística, no regla de agrupación) | https://lawsofux.com/millers-law/ | Agrupar en bloques; no usarla para limitar filas de tabla. |
| DI-15 | Efecto de posición serial / von Restorff (el elemento distinto se recuerda) | https://lawsofux.com/von-restorff-effect/ | Un solo elemento naranja por vista (acción o alerta clave). |
| DI-16 | Zeigarnik / efecto de progreso (tareas incompletas se recuerdan) | https://lawsofux.com/zeigarnik-effect/ | “Mi ruta” muestra avance parcial; importación por pasos. |

Fuente de los 30 principios: https://lawsofux.com/ (30 leyes listadas al consultar). Cuidado: Laws of UX es una compilación divulgativa, no revisión por pares; se usa como lista de comprobación, no como evidencia experimental.

## 2. Jerarquía visual, Gestalt, espaciado y tipografía

- **DI-17 Jerarquía visual.** NN/g, *Visual Hierarchy in UX*, https://www.nngroup.com/articles/visual-hierarchy-ux-definition/: la jerarquía se logra con tamaño, color, contraste, proximidad y espacio; la mirada recorre primero lo más grande y contrastado. → Escala 14/16/18/22/28/36/48 de `16`; un único nivel de énfasis alto por vista.
- **DI-18 Proximidad.** NN/g, ley de proximidad, https://www.nngroup.com/articles/gestalt-proximity/: elementos cercanos se perciben como un grupo. → Espaciado interno < espaciado entre grupos (múltiplos de 4; 8 interno, 24 entre grupos).
- **DI-19 Similitud/continuidad/cierre/figura-fondo.** Principios Gestalt de uso común; no abrí una fuente primaria que los defina con la misma precisión → `[NO VERIFICADO]` como cita, se usan solo como razonamiento (similitud: mismos componentes = misma función).
- **DI-20 Longitud de línea 45–90 caracteres.** Butterick, *Practical Typography*, https://practicaltypography.com/line-length.html. → Texto corrido máx. `max-width: 68ch`; tablas y paneles quedan exentos.
- **DI-21 Espaciado base.** Rejilla de 4 px es práctica común; los tokens concretos de Material no pude confirmarlos → `[NO VERIFICADO]`. Se adopta la rejilla de `16` §tokens por decisión del manual, no por cita.
- **DI-22 Densidad de tablas.** Carbon Design System, *Data table*, https://carbondesignsystem.com/components/data-table/usage/ : alturas de fila 24/32/40/48/64 px; recomienda ofrecer densidad. → Filas de 48 px por defecto (equipo CDE), 40 px opción “compacta” `PROPUESTA`; ≥24 px siempre por WCAG 2.5.8.
- **DI-23 Tablas de datos.** NN/g, *Data Tables: Four Major User Tasks*, https://www.nngroup.com/articles/data-tables/ (3-abr-2022): tareas = encontrar, comparar, ver/editar registro, calcular; encabezados fijos, alineación numérica a la derecha, ordenación visible, fila seleccionada clara. → Aplicado a la lista de empresas y a la vista previa de importación.

## 3. Accesibilidad: WCAG 2.2 nivel AA

Fuente base: W3C, *Understanding WCAG 2.2*, https://www.w3.org/WAI/WCAG22/Understanding/ (páginas consultadas 27-oct-2026). Cumple RNF-18.

| ID | Criterio | Regla verificable | Decisión |
|---|---|---|---|
| DI-24 | 1.4.3 Contraste mínimo | Texto ≥4.5:1 (≥3:1 si es grande ≥24 px o ≥18.66 px negrita) | Se calcula con la fórmula WCAG en `90_revision.md`; naranja `#F47B20` solo relleno. |
| DI-25 | 1.4.11 Contraste no textual | Bordes de controles, iconos informativos y partes del gráfico ≥3:1 | Borde de campos `--borde-fuerte`; segmentos de radar y mapa de calor con contorno. |
| DI-26 | 1.4.1 Uso del color | El color no es el único medio de transmitir información | Sellos de procedencia con forma+texto; nodos de línea de tiempo con 4 formas; mapa de calor con número y trama. |
| DI-27 | 1.4.10 Reflujo | Sin scroll horizontal a 320 px de ancho CSS; las **tablas** están exentas, pero búsqueda, paginación y celdas deben seguir usables | Móvil 390 px: tablas se convierten en tarjetas apiladas; la tabla de importación permite scroll interno. |
| DI-28 | 1.4.12 Espaciado de texto | Debe tolerar interlineado 1.5, párrafo 2×, letra 0.12em, palabra 0.16em sin perder contenido | Sin alturas fijas en contenedores de texto. |
| DI-29 | 2.4.7 / 2.4.11 Foco visible / no oculto | Indicador visible; el foco no queda tapado por cabeceras fijas (2.4.11 mínimo en 2.2) | Anillo 3 px; `scroll-margin-top` igual a la altura de la cabecera fija. |
| DI-30 | 2.5.8 Tamaño del objetivo (mínimo) | Objetivos ≥24×24 px CSS (con excepciones de espaciado) | ≥24 px escritorio, ≥44 px móvil (decisión de `16`, más estricta). |
| DI-30b | 3.3.7 Entrada redundante / 3.3.8 Autenticación accesible | No pedir de nuevo datos ya dados; no exigir prueba cognitiva en login | Login sin CAPTCHA de rompecabezas; autocompletar permitido; el wizard de importación conserva el mapeo. |
| DI-30c | 2.3.3 Animación a partir de interacciones (AAA) y 4.1.3 Mensajes de estado (AA) | Movimiento desactivable; mensajes de estado anunciados sin mover el foco | `prefers-reduced-motion`; toasts con `role="status"`, errores con `role="alert"`. |

## 4. Patrones de aplicaciones B2B de datos (analizados desde productos reales)

Se describe el **patrón**; no se copian marcas, ilustraciones ni textos.

| ID | Producto / fuente (URL) | Patrón observado | Qué adoptamos | Qué evitamos |
|---|---|---|---|---|
| DI-31 | Carbon, *Empty states*, https://carbondesignsystem.com/patterns/empty-states-pattern/ | Estado vacío = explicar qué falta + una acción | Cada pantalla tiene vacío con CTA único. | Ilustraciones decorativas sin acción. |
| DI-32 | Superhuman, *How to build a remarkable command palette* (12-oct-2021) https://blog.superhuman.com/how-to-build-a-remarkable-command-palette/ | Paleta: atajo único, búsqueda difusa tolerante a errores, muestra el atajo equivalente, acciones y navegación en la misma lista | Ctrl+K con tolerancia (“pamaderia” → Panadería), muestra valor de coincidencia (0,82) `PROPUESTA` y atajo. | Paleta que solo navega a páginas. |
| DI-33 | GitHub Docs, *GitHub Command Palette* https://docs.github.com/en/get-started/accessibility/github-command-palette | Ámbitos por prefijo, contexto actual visible | Chip de ámbito (“Empresas”, “Personas”). | — |
| DI-34 | Linear Docs, *Search* https://linear.app/docs/search | Búsqueda global con filtros rápidos | Filtros por tipo en la paleta. | — |
| DI-35 | Salesforce SLDS, *Activity Timeline* https://www.lightningdesignsystem.com/components/activity-timeline/ | Línea de tiempo: icono por tipo, elementos expandibles, variante estrecha | Línea de tiempo “hilo” con forma por tipo (además del icono), expandible; variante móvil. | Colores como único diferenciador. |
| DI-36 | HubSpot Knowledge Base, *Merge records* (la fusión no se puede deshacer) | Comparación de dos registros lado a lado; el producto advierte irreversibilidad | Comparación lado a lado con origen y fecha por campo (RF-35) **y deshacer** (RF-36), que es el diferenciador. | Fusión irreversible. |
| DI-37 | Metabase, *Interactive dashboards* (drill-through) | Clic en un valor agregado → lista filtrada detrás del dato | Mapa de brechas: clic en celda → 41 empresas afectadas. | Gráficos sin ruta a los registros. |
| DI-38 | Airtable Support, *CSV import* | Importar = subir → mapear columnas → vista previa → confirmar | Wizard de 4 pasos con errores y duplicados antes de confirmar; reversión. | Importar sin vista previa. |
| DI-39 | Trailhead (Salesforce): puntos, rangos, insignias; solo fuentes secundarias | Progreso por módulos, rangos por puntos, insignias por logros | “Mi ruta” con niveles y 3 insignias; sin rachas (alcance R3). | Copiar nombres/arte. `[NO VERIFICADO]` en páginas primarias. |
| DI-40 | Todoist (Karma) | Una puntuación de productividad que el usuario puede desactivar (confirmado por resultado de búsqueda) | Opción para ocultar la gamificación `PROPUESTA` (autonomía, SDT). | Puntos obligatorios. `[NO VERIFICADO]` en página primaria. |

Patrones transversales extraídos: (a) **una acción primaria por vista**, (b) **detalle por divulgación progresiva**, (c) **estados explícitos** (vacío/cargando/error/éxito), (d) **procedencia visible** en datos críticos (RF-34, RF-48), (e) **reversibilidad**.

## 5. Visualización de datos

Se contrastó con la guía local del skill `dataviz` (método, sin datos del proyecto) y con las fuentes siguientes.

- **DI-41 Radar.** Es útil para ≤8 ejes y un perfil comparado (diagnósticos D1/D2/D3 de la misma empresa); es criticado por dificultar la lectura de áreas (resultados de búsqueda; sin fuente primaria) → se acompaña **siempre** de tabla equivalente (`16`) y valores en los ejes. Cleveland–McGill (jerarquía de precisión perceptual) `[NO VERIFICADO]` directamente; se usa solo como motivación para preferir barras cuando se compara.
- **DI-42 Barras para comparar magnitudes**; **línea/hilo para tiempo**; **mapa de calor solo para matriz categoría×categoría** con número visible en la celda (DI-26).
- **DI-43 Paleta apta para daltonismo.** Rampa secuencial de un solo matiz + diferencia de luminosidad; evitar rojo/verde como único par. Valores Okabe–Ito `[NO VERIFICADO]` (no pude abrir la fuente); se usa la rampa propia de `16` y se valida con contraste calculado y simulación en Paso 5.
- **DI-44 Rendimiento.** recharts 3.10.1 añade ~101,8 KB gzip (`15`) → carga diferida; los mockups usan SVG propio sin librerías.

## 6. Gamificación para adultos profesionales

- **DI-45** Sailer y Homner (2020), *The Gamification of Learning: a Meta-analysis*, Educational Psychology Review — efectos positivos pequeños-medianos en aprendizaje, motivación y conducta; dependen del contexto. Consultado vía resumen secundario (PDF primario no accesible) → `[NO VERIFICADO]` en cifras exactas; no se cita ninguna cifra.
- **DI-46** Hamari, Koivisto y Sarsa (2014), *Does Gamification Work?*, HICSS: resultados mixtos según contexto y usuario. Deterding et al. (2011), *From Game Design Elements to Gamefulness*, MindTrek: definición de gamificación como elementos de juego en contextos no lúdicos.
- **DI-47** Deci, Koestner y Ryan (1999), meta-análisis: recompensas tangibles esperadas pueden reducir motivación intrínseca. → Recompensas **simbólicas** (nivel, insignia), ligadas a compromisos reales de negocio, no a clics.
- **DI-48** Teoría de la autodeterminación (SDT, https://selfdeterminationtheory.org/): autonomía, competencia, vinculación. → Autonomía: poder ocultar la gamificación `PROPUESTA` y elegir el siguiente paso; competencia: progreso claro; vinculación: tabla de posiciones **opt-in** y por cohorte `PROPUESTA`.
- **DI-49** Hanus y Fox (2015): tablas de clasificación e insignias en un aula redujeron motivación en algunos estudiantes (resumen secundario; primario 403) → `[NO VERIFICADO]`. Es la razón para que la tabla sea opt-in y no muestre al último.
- **DI-50** Duolingo y rachas: solo fuentes secundarias → `[NO VERIFICADO]`; el manual R3 ya excluye rachas.
- **Sin evidencia** encontrada sobre si los adultos perciben las insignias como infantiles. Decisión de tono (sobrio, lenguaje de negocio, iconografía geométrica no de mascotas) se marca `PROPUESTA` y se valida con el CDE (pregunta en `99_decisiones.md`).

## 7. Movimiento

- **DI-51** NN/g, *Executing UX Animations: Duration and Motion Characteristics* (9-feb-2020), https://www.nngroup.com/articles/animation-duration/: la mayoría de las transiciones de interfaz funcionan entre 100 y 500 ms; las pequeñas, más cortas; las salidas más rápidas que las entradas. → Micro 120 ms, estándar 200 ms, panel 300 ms; curva `cubic-bezier(.2,0,0,1)` (propuesta; valores Material `[NO VERIFICADO]`).
- **DI-52** MDN, `prefers-reduced-motion`, https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion: la consulta detecta que el usuario pidió menos movimiento. → Se sustituye el movimiento por cambio de opacidad instantáneo; confeti y anillo animado se desactivan.
- **DI-53** Solo `transform` y `opacity` (presupuesto de `15`).
- **DI-54** Esqueletos de carga: NN/g, *Skeleton Screens 101*, https://www.nngroup.com/articles/skeleton-screens/: útiles para esperas 2–10 s en cargas de página; por debajo de 1 s basta nada; indicador de progreso para >10 s. → Esqueleto si la carga >400 ms (Doherty), barra de progreso en importación.

## 8. Antipatrones que hacen una interfaz genérica y cómo los evitamos

Combina `16` §10 (12 antipatrones) con observaciones de §4.

| # | Antipatrón | Evitamos con |
|---|---|---|
| 1 | Degradado morado/azul y tarjetas con sombras iguales | Paleta de `16`, dos sombras, bordes finos |
| 2 | Icono en círculo de color sobre cada tarjeta | Iconos solo cuando informan (tipo de evento) |
| 3 | Rejilla de tarjetas idénticas en todo | Tabla para datos, línea de tiempo para historia, tarjetas solo para resumen |
| 4 | Hero con texto grande y botón en una herramienta interna | Inicio por rol con tareas del día |
| 5 | Ilustraciones de stock | SVG propio, geométrico, con texto alternativo |
| 6 | Emojis como iconos | Iconos lucide (ISC) empaquetados |
| 7 | Color como único señalizador | DI-26 |
| 8 | Texto gris claro sobre blanco | Contraste calculado, AA |
| 9 | Animación en todo | Solo en los momentos clave (cerrar compromiso, subir de nivel) |
| 10 | Estados vacíos “No hay datos” | DI-31 |
| 11 | Tablas sin ordenar, sin fijar cabecera | DI-23 |
| 12 | Mismo tratamiento para equipo CDE y emprendedor | Dos densidades y tonos (neutral vs. tuteo) |

## 9. Lo que no pude verificar (`[NO VERIFICADO]`)

1. Valores de espaciado y duración de Material Design (página sin contenido al consultar).
2. Principios Gestalt de cierre, continuidad y figura-fondo (sin fuente primaria abierta).
3. Datawrapper / Data-to-Viz y Cleveland–McGill (no abiertos).
4. Hex de la paleta Okabe–Ito.
5. Páginas primarias de Trailhead y Todoist Karma; wizard de importación de Salesforce.
6. Cifras de Sailer y Homner (2020), Hanus y Fox (2015), efectos de rachas de Duolingo (solo resúmenes).
7. Crítica del gráfico de radar (solo resultados de búsqueda).
8. Ausencia de estudios sobre percepción infantil de insignias en adultos (búsqueda sin resultados; no equivale a prueba de inexistencia).

## 10. Lista de verificación de diseño para el Paso 5

Cada pantalla se evalúa contra estas 28 comprobaciones y contra la lista de `16` §13 (14 ítems) y §10 (12 antipatrones). El usuario hablaba de “lista de 25 puntos”; el manual contiene 14 + 12 = 26 → discrepancia registrada en `99_decisiones.md`.

| # | Comprobación | Fuente |
|---|---|---|
| C1 | Una acción primaria visible por vista | DI-15 |
| C2 | Texto ≥4.5:1 (≥3:1 grande), calculado | DI-24 |
| C3 | Bordes/iconos/gráficos ≥3:1 | DI-25 |
| C4 | Ninguna información solo por color | DI-26 |
| C5 | Foco visible de 3 px y no tapado | DI-29 |
| C6 | Objetivos ≥24 px (44 px en móvil) | DI-30 |
| C7 | Sin scroll horizontal a 390 px (salvo tabla) | DI-27 |
| C8 | Estados: vacío, cargando, error, éxito presentes | DI-01, DI-31 |
| C9 | Errores dicen causa y salida | DI-09 |
| C10 | Acciones destructivas reversibles o con confirmación | DI-03 |
| C11 | Procedencia visible en datos críticos | RF-34, RF-48 |
| C12 | Escala tipográfica de `16` y línea ≤90 caracteres | DI-17, DI-20 |
| C13 | Espaciado en múltiplos de 4; grupos por proximidad | DI-18 |
| C14 | Tablas: cabecera fija, números a la derecha, orden visible | DI-23 |
| C15 | Radar con tabla equivalente | DI-41 |
| C16 | Mapa de calor con número y trama | DI-26, DI-42 |
| C17 | Movimiento solo `transform`/`opacity`, ≤300 ms | DI-51, DI-53 |
| C18 | `prefers-reduced-motion` respetado | DI-52 |
| C19 | Estado anunciado (`role=status/alert`) | WCAG 4.1.3 |
| C20 | Textos exactos de `21_microcopy.md` | DI-02 |
| C21 | Datos exactos de `21_casos_demo.md` y `04_datos.md` | consistencia |
| C22 | Sin marcas, logos ni ilustraciones de terceros | regla de misión |
| C23 | Sin servicios externos (fuentes e iconos locales) | regla de misión |
| C24 | Gamificación opcional y de tono sobrio | DI-47, DI-48 |
| C25 | Formato colombiano (fecha, miles, moneda) | `21_microcopy` |
| C26 | Peso de página dentro del presupuesto de `15` | DI-44 |
| C27 | Sin recursos que bloqueen el foco ni trampas de teclado | WCAG 2.1.2 (`[NO VERIFICADO]` página no abierta) |
| C28 | Reflujo y espaciado de texto toleran WCAG 1.4.10/1.4.12 | DI-27, DI-28 |

**Criterio de aceptación de este archivo:** cada `DI-xx` tiene URL y fecha de consulta (27-oct-2026); lo no verificado aparece en §9; la lista §10 es usable como casilla por pantalla.
