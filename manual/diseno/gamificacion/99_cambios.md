# 99 · Registro de cambios fuera de `diseno/gamificacion/`

**Objetivo.** Dejar constancia de cada archivo existente que esta misión tocó (o no tocó) fuera de su carpeta, como pide el encargo («solo modifica `prototipo/p11*`, `p12*` y `css/js` compartidos registrando cada cambio aquí»).
**Entradas.** `git status` y `git diff` del 27-oct-2026 sobre la rama `claude/sharp-hopper-hbzy8c`.

## 1. Archivos existentes modificados

| Archivo | Cambio | Razón |
|---|---|---|
| `manual/PROGRESO.md` | Se añadió la sección «Misión de formación por recompensas (`diseno/gamificacion/`)» con las fases, las notas y lo pendiente | Lo pide el encargo (Paso 5) |

## 2. Archivos existentes que **no** se modificaron (comprobado con `git diff`)

- `manual/diseno/prototipo/p11-mi-ruta.html` y `p12-recompensas.html` (siguen siendo la referencia «antes»).
- `manual/diseno/prototipo/css/tokens.css`, `base.css`, `tailwind-theme.css` y `js/app.js`, `js/datos.js`: **se reutilizan por enlace relativo** (`../../prototipo/…`) sin cambios; los estilos y el comportamiento nuevos están en `prototipo/css/gam.css` y `prototipo/js/gam.js` (DEC-G-10).
- `manual/diseno/10_especificacion_11_mi_ruta.md` y `10_especificacion_12_recompensas.md`: **no se reescribieron**; `10_especificacion_G1` y `G2` las sustituyen para este módulo y declaran qué cambia.
- `manual/21_microcopy.md`, `21_contenido_formacion.md`, `21_casos_demo.md`, `tareas/T-43`, `T-44`, `T-47`, `20_plan_que_cabe.md`, `diseno/INDEX.md`, `manual/INDEX.md`, `diseno/99_decisiones.md`, `inputs/`.

## 3. Cambios que el equipo debe aplicar si ratifica la propuesta (no aplicados)

| Archivo | Cambio propuesto | Dónde está la razón |
|---|---|---|
| `manual/diseno/INDEX.md` | Añadir una fila 14 a «Pantallas» con enlace a `gamificacion/INDEX.md` | `gamificacion/INDEX.md` |
| `manual/INDEX.md` | Añadir el archivo a «Diseño de interfaz (misión 3)» | Ídem |
| `manual/21_microcopy.md` | Añadir las claves `G.*` de las especificaciones; cambiar `GAM.nivel_sube` (CON-G-06) y `M7.insignias_vacio` (CON-G-07); partir `M2.vacio_paso` (CON-G-08) | `99_decisiones.md` |
| `manual/tareas/T-43.md` §4 | Quitar `"racha"` del contrato de `GET /mi/progreso` y añadir `tipo` y `nivel_al_sumar` a `movimientos[]` (CON-G-01) | `10_especificacion_G1` §2 |
| `manual/tareas/T-44.md` | Sustituir «toast con confeti» por la tarjeta de hito y el wireframe de `06` §4 por esta dirección (CON-G-03, CON-G-05); añadir E-01..E-06 y E-12 | `01` §10 |
| `manual/tareas/T-47.md` | Apuntar que el mapa en B usa el hilo curvo (E-08) | `01` §10 |
| `manual/backlog.csv` | Añadir filas para E-07, E-10, E-11, E-13, E-14 y E-15 si se eligen las versiones ESTÁNDAR o COMPLETA | `01` §10 |

## 4. Archivos nuevos (todos dentro de `manual/diseno/gamificacion/`)

| Grupo | Archivos |
|---|---|
| Documentos | `INDEX.md`, `00_investigacion.md`, `01_direccion_y_mecanicas.md`, `02_ilustraciones.md`, `05_prueba_de_usuario.md`, `10_especificacion_G1_mi_ruta.md`, `…G2_logros.md`, `…G3_modulo.md`, `…G4_equipo.md`, `…G5_posiciones.md`, `…G6_momentos.md`, `90_revision.md`, `99_decisiones.md`, `99_cambios.md` |
| Prototipo | `prototipo/index.html`, `mi-ruta.html`, `logros.html`, `reto.html`, `equipo.html`, `posiciones.html`, `momentos.html`; `css/gam.css`; `js/gam.js`, `js/datos-gam.js`; `assets/sprite-gam.svg` |
| Ilustraciones | 14 archivos `ilustraciones/*.svg` |
| Evidencia | 83 archivos en `capturas/` |

## 5. Nota sobre los generadores

Las páginas HTML, el sprite y las capturas se generaron con scripts que están en el espacio de trabajo de la sesión (no en el repositorio), igual que en la misión de diseño anterior. El HTML y el CSS entregados sí son editables a mano. Las páginas `mi-ruta`, `logros` y `reto` llevan el estado inicial **pre-renderizado** dentro del HTML (para evitar saltos de diseño); si se edita `gam.js` o los datos, la página se vuelve a pintar sola al cargar.
`gam.js` acepta `?lento=N` (alarga N veces los tiempos de JavaScript): es solo una ayuda para fotografiar fotogramas y no forma parte del diseño.

## Criterio de aceptación

1. `git diff --stat` fuera de `manual/diseno/gamificacion/` solo muestra `manual/PROGRESO.md`.
2. Todo cambio propuesto a otros archivos está en §3 con su razón.
