# 03 · Componentes: biblioteca, horas e implementabilidad

**Objetivo.** Asignar a cada componente de `prototipo/componentes.html` la pieza de la pila de `15` que lo implementa, su costo en horas, la tarea que absorbe ese tiempo y una marca de implementabilidad, para que quien construya no tenga que decidir.
**Entradas.** `15_frontend_skills_y_ui.md` §3, `16_sistema_de_diseno.md` §5 y §14, `backlog.csv`, `investigacion/06` (RF-34..RF-37, RF-48).
**Marca de implementabilidad.** *Alta* = existe en la biblioteca elegida o es HTML trivial; *Media* = requiere lógica propia (accesibilidad de teclado, SVG, virtualización); *Baja* = ninguna (no hay componentes de esta marca: lo que lo habría sido se simplificó, ver §3).

## 1. Decisiones

| ID | Decisión | Razón |
|---|---|---|
| CP-01 | Componentes base de shadcn/ui sobre Radix, copiados al repositorio | `15` §3; sigue condicionado a la prueba previa de `15` §7 (C-21). Si falla, ver CP-04 |
| CP-02 | Recharts solo para el radar y se carga con `lazy`; barras y mapa de calor son HTML/SVG propios | Presupuesto de peso: recharts 3.10.1 añade 101,8 KB gzip (`15` §8); barras y mapa no lo necesitan |
| CP-03 | Los mockups no usan ninguna biblioteca: son HTML/CSS/JS sin dependencias, para que cualquier agente los abra sin instalar | Entregable de la misión |
| CP-04 | Si shadcn no pasa la prueba de `15` §7: botón, campo, tarjeta, badge, diálogo y pestañas se escriben a mano con los CSS de `prototipo/css/base.css` como referencia (+0,5 h sobre T-40) | `15` C-21 ya prevé 1,5 h para T-40 |

## 2. Mapa componente → biblioteca → horas

Las horas son `PROPUESTA` de construcción del componente (no de diseño). «Absorbe» indica la tarea del backlog que ya tiene ese tiempo.

| N.º | Componente | Biblioteca / origen | Horas | Absorbe | Implementabilidad | Notas |
|---|---|---|---:|---|---|---|
| 1 | Botón (4 variantes × 6 estados) | shadcn/ui `button` + `class-variance-authority` 0.7.1 | 0,2 | T-40 (1,0 h) | Alta | Primario naranja con texto tinta; peligro con texto blanco; cargando con `aria-busy` |
| 2 | Campo, selector y área de texto | shadcn/ui `input`, `select` (Radix) + react-hook-form + zod | 0,4 | T-40 | Alta | Etiqueta visible; error con `aria-describedby`; advertencia de NIT (RF-31) no bloquea |
| 3 | Tabla paginada del servidor | TanStack Table 8 + shadcn `table` | 1,0 | T-13 / T-14 / T-42 (por pantalla) | Alta | 50 filas; cabecera fija; `aria-sort`; tarjetas en móvil |
| 4 | Tabla virtualizada (importación, hilo >200) | `@tanstack/react-virtual` 3 | 0,5 | T-14 (2,0 h) | Media | Solo 509 filas de vista previa; altura 480 px; `aria-rowcount` |
| 5 | Filtros activos (chips) y paginación | Propio sobre shadcn `badge` y `pagination` | 0,3 | T-13 / T-45 | Alta | Chips quitables con botón de 24 px |
| 6 | Tarjeta y cifra enlazada (Stat) | shadcn/ui `card` | 0,2 | T-40 / T-45 | Alta | La cifra es un `<a>` |
| 7 | Sello de procedencia con popover | Propio + Radix `popover` (RF-48 estima 0,25 h) | 0,35 | RF-48 (MP 0,25) + 0,10 | Alta | Tres formas distintas; popover con origen, fecha, quién |
| 8 | Anillo de confianza | Propio (SVG) | 0,1 | RF-48 (+0,10 opcional) | Alta | 0–100; 48 px en cabecera |
| 9 | Aviso de duplicado con señales | Propio + shadcn `alert` | 0,3 | T-12 (1,5 h, parte front) | Alta | Señales alta/media con forma distinta |
| 10 | Comparación lado a lado | Propio (rejilla + `radio-group` Radix) | 0,25 | T-19 (0,25 h) | Media | Origen y fecha por campo; deshacer 30 s |
| 11 | Paleta de comandos Ctrl+K | `cmdk` 1.1.1 (+16 KB gzip) | 0,5 | T-17 (0,5 h) | Alta | Valor de coincidencia visible; grupos Empresas/Contactos/Eventos |
| 12 | Línea de tiempo («hilo») | Propio; `@tanstack/react-virtual` solo si >200 | 0,5 | T-27 (0,5 h) sobre T-15 | Media | 4 formas de nodo, icono, texto, agrupación por semestre |
| 13 | Radar de madurez + tabla equivalente | Recharts 3.10.1 (+101,8 KB gzip, `lazy`) | 0,25 | T-54 (0,25 h, Could) | Media | Si no entra: barras por dimensión (v1) |
| 14 | Barras por dimensión | Propio (HTML/SVG) | 0,15 | T-41 | Alta | Valor visible |
| 15 | Mapa de calor sector × dimensión | Propio (tabla de botones) | 0,75 | T-49 (0,75 h) | Media | Número + trama; flechas del teclado |
| 16 | Badge de estado | shadcn/ui `badge` | 0,15 | T-40 | Alta | Siempre icono + texto |
| 17 | Insignias (3) y bloqueada | SVG propios (`assets` del prototipo, texto alternativo) | 0,4 | T-44 (3,0 h) | Alta | 3 insignias del alcance R3 |
| 18 | Avisos emergentes | `sonner` 2.0.8 (+9 KB gzip) | 0,2 | T-40 | Alta | Éxito 6 s; error sin cierre; Deshacer 30 s |
| 19 | Diálogo de confirmación | shadcn/ui `dialog` (Radix) | 0,2 | T-40 | Alta | Foco atrapado; Esc cierra |
| 20 | Esqueleto y estado vacío | Propio + shadcn `skeleton` | 0,2 | T-40 | Alta | Mismo tamaño que el contenido |
| 21 | Pestañas | shadcn/ui `tabs` (Radix) | 0,2 | T-40 / T-15 | Alta | Flechas y Home/End |
| 22 | Mapa de ruta («Mi ruta») | Propio (SVG/HTML) + `motion` 14.6.0 con `LazyMotion` para el logro | 1,25 | T-47 (1,25 h) | Media | Vertical en móvil; sin animación con movimiento reducido |
| 23 | Pasos del asistente de importación | Propio | 0,2 | T-14 | Alta | `aria-current="step"` |
| 24 | Selector de tema | Propio | 0,1 | T-40 | Alta | `data-theme` + `prefers-color-scheme` |
| | **Total** | | **8,65** | | | |

## 3. Costo y de dónde sale el tiempo

- **Costo total de componentes: 8,65 h.** Casi todo ya está dentro de las tareas de pantalla (T-12, T-13, T-14, T-17, T-19, T-27, T-47, T-49, T-54) y de T-40 (1,0 h).
- **Lo no presupuestado:** la suma de los componentes base asignados a T-40 (botón, campo, tarjeta, badge, avisos, diálogo, esqueleto, pestañas, selector de tema) es 1,85 h frente a 1,0 h de T-40, que además incluye layout, router, cliente de API y login. Diferencia a cubrir: ≈ 0,85 h + lo de login/router. `15` C-21 ya reconoce que sin el ahorro de shadcn T-40 vuelve a 1,5 h. **Origen del tiempo:** colchón de la variante B (`20`); si no hay colchón, aplicar el orden de cortes de `02` §3.4 y, en este diseño, recortar primero: radar (Could, T-54), insignia bloqueada y selector de tema (el tema claro basta para el pitch).
- **Costo de diseño de esta misión:** cero horas del plan de construcción; sustituye los wireframes de `16` §9 por mockups navegables.
- **Simplificaciones (por no tener componentes de marca *Baja*):** sin edición en línea en tablas (se abre la ficha); sin arrastrar y soltar en la ruta; sin gráficos interactivos con zoom; sin ilustraciones decorativas (solo icono lucide de 32 px, `16` §5).

## 4. Ilustraciones y arte propio

| Recurso | Dónde | Texto alternativo |
|---|---|---|
| Insignia «Primer paso» | `lib` del prototipo (SVG en línea), `p12` | «Insignia Primer paso: dos escalones ascendentes» |
| Insignia «Aprendiz» | ídem | «Insignia Aprendiz: libro abierto» |
| Insignia «Cumplidor» | ídem | «Insignia Cumplidor: escudo con marca de verificación» |
| Hilo de ruta (acceso) | `p01` | «Ilustración: un hilo con cinco nodos, tres completados, uno actual y uno pendiente, que representa la ruta de acompañamiento» |
| Marca provisional «CDE · Hilo» | cabecera y barra lateral | Texto, no imagen (DEC-01) |

Diseño: disco blanco con borde tinta de 3 px (legible en claro y oscuro), figura geométrica con relleno amarillo y contorno tinta; sin mascotas ni personajes (tono sobrio para adultos, DI-48, `PROPUESTA`). Licencia: obra propia del equipo; los iconos son lucide 1.61.0 (ISC, `assets/LICENSE-lucide-ISC.txt`).

## 5. Criterio de aceptación

1. Todos los componentes de `prototipo/componentes.html` aparecen en la tabla de §2 con biblioteca, horas, tarea y marca.
2. La suma de §2 coincide con la que se declara en §3.
3. Ninguna fila tiene marca *Baja*.
4. Cada ilustración tiene texto alternativo.
