# Diseño de interfaz · índice y orden de lectura

**Objetivo.** Guiar a quien construya la interfaz del CDE: qué leer, en qué orden y qué abrir en el prototipo, de modo que no tenga que decidir diseño.
**Entradas.** Todo `manual/diseno/`; fuentes de verdad: `16_sistema_de_diseno.md`, `15_frontend_skills_y_ui.md`, `21_microcopy.md`, `21_casos_demo.md`, `investigacion/06`.
**Estado.** Misión de diseño completa; validación en `90_revision.md`; decisiones y contradicciones en `99_decisiones.md`.

## 1. Orden de lectura

| # | Archivo | Para qué |
|---|---|---|
| 1 | `00_investigacion.md` | Por qué: fuentes, reglas (`DI-xx`) y lista de verificación de 28 puntos |
| 2 | `01_brief_y_ia.md` | Para quién, tareas, principios, navegación por rol y flujos |
| 3 | `02_tokens.md` | Colores, fuentes, espaciado, movimiento, tabla de contraste |
| 4 | `03_componentes.md` | Cada componente → biblioteca, horas, tarea, implementabilidad |
| 5 | `prototipo/index.html` | Abrir primero: 13 pantallas, estados, claro/oscuro, componentes y guion |
| 6 | `10_especificacion_01…13` | Especificación por pantalla (componentes, datos, interacción, textos, estados) |
| 7 | `90_revision.md` | Evidencia: capturas, axe, Lighthouse, contraste, lista por pantalla |
| 8 | `99_decisiones.md` | Qué se aparta del manual y qué falta decidir |

## 2. Pantallas

| N.º | Pantalla | Mockup | Especificación | Pantallas del manual |
|---|---|---|---|---|
| 1 | Acceso e inicio por rol | `p01-acceso.html` | `10_especificacion_01_acceso.md` | E1, M1 |
| 2 | Panel del día | `p02-panel.html` | `10_especificacion_02_panel.md` | E1 |
| 3 | Empresas y búsqueda Ctrl+K | `p03-busqueda.html` | `10_especificacion_03_busqueda.md` | E2 |
| 4 | Nueva empresa | `p04-nueva-empresa.html` | `10_especificacion_04_nueva_empresa.md` | E4 |
| 5 | Fusión lado a lado | `p05-fusion.html` | `10_especificacion_05_fusion.md` | E5 |
| 6 | Ficha 360 | `p06-ficha.html` | `10_especificacion_06_ficha.md` | E3, E7 |
| 7 | Importación CSV | `p07-importacion.html` | `10_especificacion_07_importacion.md` | E6 |
| 8 | Citas | `p08-citas.html`, `p08b-mis-citas.html` | `10_especificacion_08_citas.md` | E9, M4 |
| 9 | Eventos y QR | `p09-eventos.html` | `10_especificacion_09_eventos.md` | E10 |
| 10 | Análisis | `p10-analisis.html` | `10_especificacion_10_analisis.md` | E11–E13 |
| 11 | Mi ruta | `p11-mi-ruta.html` | `10_especificacion_11_mi_ruta.md` | M2, M3, M5 |
| 12 | Recompensas | `p12-recompensas.html` | `10_especificacion_12_recompensas.md` | M7 |
| 13 | Administración | `p13-administracion.html` | `10_especificacion_13_administracion.md` | E15 |
| — | Componentes | `componentes.html` | `03_componentes.md` | `16` §5 |
| — | Guion de 120 s | `demo.html` | `01_brief_y_ia.md` §4.1 | `18` §5 |

Cómo abrir el prototipo: abrir `prototipo/index.html` en un navegador (no requiere servidor ni instalación). Parámetros: `?estado=vacio|cargando|error|exito`, `?tema=oscuro|claro`, `?barra=0` (oculta el selector de estados).

## 3. Reglas que no se discuten

1. Naranja `#F47B20` solo como relleno con texto tinta; nunca como texto ni con texto blanco.
2. Ninguna información solo por color: forma, icono y texto.
3. Textos solo de `21_microcopy.md`; datos solo de `21_casos_demo.md` y `04_datos.md`.
4. Sin logotipos ni servicios externos; fuentes e iconos locales.
5. Movimiento solo `transform` y `opacity`, con alternativa para `prefers-reduced-motion`.

## 4. Criterio de aceptación

1. Los 13 mockups abren sin errores de consola y muestran vacío, cargando, error y éxito.
2. Cada especificación enlaza un mockup, una tarea y un requisito.
3. `90_revision.md` contiene capturas, resultados de axe y Lighthouse y la tabla de contraste.
