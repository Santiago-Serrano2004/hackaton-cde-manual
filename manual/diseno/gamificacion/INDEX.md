# Módulo de formación por recompensas · «El hilo» · índice y orden de lectura

**Objetivo.** Guiar a quien construya o revise el rediseño del módulo de formación por recompensas: qué leer, en qué orden, qué abrir y qué se construye en la versión mínima.
**Entradas.** Esta carpeta; fuentes de verdad: `21_contenido_formacion.md`, `21_casos_demo.md`, `21_microcopy.md`, `diseno/02_tokens.md`.
**Estado.** Investigación, dirección, prototipo, validación y especificaciones completas. **Sin prueba con personas todavía** (`05`).

## 1. Qué es, en tres líneas

Cada hecho verificado del acompañamiento deja una puntada en el hilo de la persona. El módulo se ve y se siente cuidado y un poco juguetón (un hilo que se dibuja, una insignia que se estampa, un hallazgo sobre su propio negocio) pero **sobrio**: sin confeti, sin sonido, sin ventanas que bloqueen y con tres intensidades a elección (Completo, Discreto, Oculto). Los puntos, niveles e insignias son exactamente los de `21_contenido_formacion.md`.

## 2. Orden de lectura

| # | Archivo | Para qué | Tiempo |
|---|---|---|---:|
| 1 | `prototipo/index.html` → «Ver la escena de 120 s» | Verlo antes de leerlo | 3 min |
| 2 | `01_direccion_y_mecanicas.md` | Metáfora, paleta, tono, mecánicas, momentos, costos (§10) | 15 min |
| 3 | `99_decisiones.md` | Qué se aparta del manual y qué falta decidir | 5 min |
| 4 | `00_investigacion.md` | Por qué: evidencia, patrones, metáforas, animación, límites | 15 min |
| 5 | `10_especificacion_G1…G6` | Especificación por pantalla (componentes, datos, textos, estados, atajos, costo) | 5 min c/u |
| 6 | `02_ilustraciones.md` | Catálogo de las 14 ilustraciones | 3 min |
| 7 | `90_revision.md` | Evidencia: axe, Lighthouse, contraste, rendimiento, 23 defectos, 7 riesgos | 10 min |
| 8 | `05_prueba_de_usuario.md` | Cómo medir «intuitivo y divertido» (pendiente de hacer) | 5 min |
| 9 | `99_cambios.md` | Qué se tocó fuera de esta carpeta (solo `PROGRESO.md`) | 2 min |

**Quién lee qué.** María Paula: 1, 2, 5, 6. Santiago: 3, 5 (datos y endpoints), 7. Julián: 1, 3, 8 (cronometra la prueba). Los tres juntos: la decisión PD-G01 (versión) en T-01.

## 3. Pantallas y mockups

| N.º | Pantalla | Mockup | Especificación | Requisitos |
|---|---|---|---|---|
| 1 | Mi ruta | `prototipo/mi-ruta.html` | `10_especificacion_G1_mi_ruta.md` | RF-13, RF-17, RF-18 |
| 2 | Logros | `prototipo/logros.html` | `10_especificacion_G2_logros.md` | RF-17, RF-18 |
| 3 | Módulo de formación | `prototipo/reto.html` | `10_especificacion_G3_modulo.md` | RF-17 |
| 4 | Panel del equipo | `prototipo/equipo.html` | `10_especificacion_G4_equipo.md` | RF-17, RF-19, RNF-13 |
| 5 | Tabla de posiciones | `prototipo/posiciones.html` | `10_especificacion_G5_posiciones.md` | RF-19 |
| 6 | Momentos de celebración | `prototipo/momentos.html` | `10_especificacion_G6_momentos.md` | RF-17, RF-18 |

Cómo abrir: abrir `prototipo/index.html` en un navegador (no necesita servidor ni instalación). Parámetros: `?estado=vacio|cargando|error|exito`, `?tema=oscuro|claro`, `?intensidad=completo|discreto|oculto`, `?mov=no` (movimiento reducido), `?cerrado=1` (estado tras la escena), `?primera=1` (pregunta de primera vez), `?auto=1` (ejecuta la escena), `?barra=0` (oculta el selector de estados).

## 4. Qué se construye en la versión mínima (1,30 h de María Paula)

Solo CSS y SVG, sin librerías nuevas: el **sprite** de insignias y emblemas (E-01), la **tarjeta de nivel** con emblema (E-02), las **insignias con tres estados** y su ficha (E-03), **Tu hilo** con baldosas y la tabla plegable (E-04), la **tarjeta de hito** sin resumen de nivel (E-05 simplificada), **«A un gesto de…»** (E-06) y los **estados vacío, cargando y error** (E-12).

**Queda para la versión estándar** (si T-44 va adelantada a las 21:30): intensidad de tres valores y pregunta de primera vez, animaciones CSS, hallazgo, misiones con «Mi enfoque» y el hilo curvo en B. **Queda para después del hackatón:** módulo con práctica, panel de cohorte y tabla de posiciones.

Detalle de horas, tareas y orden de cortes: `01_direccion_y_mecanicas.md` §10.

## 5. Reglas que no se discuten (de esta misión)

1. Los puntos, niveles e insignias salen de **hechos verificables del sistema**; nada autodeclarado.
2. **Nada bloquea** la interfaz; Esc cierra; un solo aviso por acción.
3. Con `prefers-reduced-motion`, el contenido es el mismo sin movimiento.
4. Sin rachas, sin cuentas regresivas, sin comparaciones con quien va atrasado.
5. Naranja `#F47B20` solo como relleno con texto `--sobre-naranja`; ninguna información solo por color.
6. Todo lo nuevo es `PROPUESTA`; las cifras de cohorte y posiciones son de muestra y se rotulan.

## 6. Criterio de aceptación

1. Los 7 mockups abren sin errores de consola y muestran vacío, cargando, error y éxito (los que tienen datos), en claro y oscuro.
2. Cada especificación enlaza un mockup, una tarea y un requisito.
3. `90_revision.md` contiene capturas, axe, Lighthouse y la tabla de contraste.
