# 16 · Sistema de diseño y dirección de arte (Ronda 2, F16)

**Objetivo.** Dar a María Paula (y a cualquier agente) una dirección visual cerrada: tokens con contraste calculado, tipografía con licencia libre, movimiento, catálogo de componentes con estados, patrones de formularios y tablas, cinco pantallas "hero" con wireframe, antipatrones y checklist de revisión. Sustituye la §5 de `06_ux_gamificacion.md` (ver C-22).

**Entradas.** `06_ux_gamificacion.md` §1–§6, `13_diferenciadores.md`, `14_backlog.md`, `15_frontend_skills_y_ui.md`, los originales en `inputs/originales/` (solo lectura) y el skill `frontend-design` (`15` §2.2).

**Fecha de consulta:** 27-oct-2026. Los cálculos de contraste son propios (fórmula de luminancia relativa de WCAG, script reproducible en §11); las normas se leyeron en w3.org (WCAG 2.2, Recomendación del 12-dic-2024).

## 1. Hallazgo: la identidad del CDE sí aparece en sus documentos

v1 (`06` §5) dijo que no se conocían los colores y propuso un azul genérico (#0B5FA5). El análisis de los XML de los dos originales entregados por el CDE (`pptx` y `docx`) muestra una paleta consistente:

| Color (hex) | Dónde aparece | Frecuencia en el pptx / docx |
|---|---|---|
| #1E2A57 y #16265C | Azul marino: fondos y titulares | 90 y 65 / 15 y relleno en 8 |
| #F47B20, #F27420, #F37620, #F78F2B, #F7912C | Naranja de marca (varios tonos) | ≈ 13+12+12+12+12 / 6 |
| #E8481F | Rojo-naranja de énfasis | 22 / 24 |
| #FFCC4D, #FDBD45, #FBAD3C | Amarillos | 36, 11, 11 / — |
| #FDEFE2 | Crema cálido de fondo de tarjetas | 51 / relleno 16 |
| #F3F5FA | Gris azulado claro | 49 / relleno 26 |
| #7C84A3 | Gris azulado de texto secundario | — / 26 |
| #FFF4D6 | Crema amarilla (alertas) | — / relleno 27 |

Tipografías en los documentos: **Arial** (principal) y **Calibri**. Las imágenes (`image1.png`) son logotipos: **no se usan ni se copian** (PA-20 y `PROMPT_2`: sin logos ni marcas sin permiso). La paleta se toma como **inspiración de identidad** del evento, no como manual de marca: sigue siendo `PROPUESTA` hasta que el CDE confirme (PA-29).

**Contradicción C-22 con v1:** la paleta de `06` §5 se reemplaza por la de §4. Se conservan de v1 el principio "nunca solo color", la pila de fuentes empaquetadas sin CDN y las reglas de accesibilidad.

## 2. Tres direcciones visuales

### A. "Institucional naranja-azul"
- **Idea:** fiel a los documentos del CDE. Fondo blanco/gris azulado, titulares en azul marino, botones naranja, tarjetas homogéneas.
- **Fuerte:** reconocible, cero riesgo. **Débil:** es el kit de "SaaS con tarjetas" que el skill `frontend-design` señala como tópico (tarjetas idénticas, misma sombra, mismo radio); no se recuerda.

### B. "Hilo de ruta" (recomendada)
- **Idea:** cada empresa recorre un camino; el sistema muestra ese camino. **Un solo elemento memorable: el "hilo"**, una línea vertical (u horizontal en móvil) con nodos que reaparece en la línea de tiempo de la ficha, en el mapa de ruta del emprendedor, en el asistente de importación y en el indicador de pasos. Todo lo demás es calmado y disciplinado.
- **Paleta:** papel cálido #F7F4EF como fondo (viene del crema #FDEFE2 del CDE, más neutro), tinta azul marino #16265C, naranja solo para el avance y lo accionable, amarillo para el logro.
- **Tipografía:** Manrope en titulares y cifras; Source Sans 3 en cuerpo (ambas OFL-1.1).
- **Fuerte:** coherente con "historial de la empresa" (CRI-01), "Mi ruta" (D-08/D-09), es barato (SVG y CSS, sin ilustraciones), se ve bien en proyector. **Débil:** exige disciplina para no decorar el hilo.
- **Costo:** 0 h extra sobre T-27/T-47 de `14` (el hilo es el diseño de esas tareas).

### C. "Panel nocturno"
- **Idea:** modo oscuro primero (marino profundo #0F1733) con naranja y amarillo luminosos; estética de centro de control para el dashboard de brechas.
- **Fuerte:** impacto visual en el proyector. **Débil:** en salas iluminadas los proyectores lavan los fondos oscuros y bajan el contraste efectivo (afirmación práctica, no verificada con el equipo del laboratorio); tablas densas oscuras cansan; sale caro mantener dos temas completos.

**Decisión (`PROPUESTA`): B como tema por defecto, con modo oscuro derivado (tokens §4.2) y sin trabajo extra de diseño en el modo oscuro más allá de los tokens.** C se descarta como principal. A se usa como respaldo si B no convence en V1.

## 3. Principios de la dirección de arte

1. **Una sola idea fuerte:** el hilo. Ninguna otra decoración (sin gradientes de fondo, sin blobs, sin ilustraciones genéricas).
2. **Color con función:** naranja = acción o avance; azul marino = estructura y texto; amarillo = logro; verde/rojo = estado, siempre con icono y texto.
3. **Cifras grandes solo cuando el dato es el protagonista** (panel del día, dashboard). En el resto, texto legible.
4. **Densidad de operador, aire de emprendedor:** el equipo CDE usa vistas densas (tablas); el portal del emprendedor usa más espacio y lenguaje cercano.
5. **Español claro, verbos de acción** ("Guardar cambios", "Agendar cita"), mensajes de error con causa y solución (`frontend-design`, sección de escritura).

## 4. Tokens

Los pares "texto sobre fondo" tienen la razón de contraste **calculada** (§11). Umbral: 4,5:1 texto normal, 3:1 texto grande y componentes de interfaz (WCAG 1.4.3 y 1.4.11, w3.org, 27-oct-2026).

### 4.1 Color · modo claro

| Token | Hex | Uso | Contraste |
|---|---|---|---|
| `--papel` | #F7F4EF | Fondo de página | — |
| `--superficie` | #FFFFFF | Tarjetas, tablas, modales | — |
| `--tinta` | #16265C | Titulares, texto de énfasis | 13,06:1 sobre papel; 14,33:1 sobre blanco |
| `--texto` | #1B2340 | Texto de cuerpo | 14,06:1 sobre papel |
| `--texto-suave` | #4B5575 | Texto secundario | 6,70:1 sobre papel; 7,35:1 sobre blanco |
| `--borde` | #7C84A3 | Borde de campos y controles (componente de interfaz) | 3,37:1 sobre papel |
| `--divisor` | #C9CFE3 | Líneas decorativas no esenciales | 1,42:1 (permitido: solo decorativo) |
| `--azul` | #2F4A9E | Enlaces, foco, selección | 7,38:1 sobre papel; blanco sobre azul 8,10:1 |
| `--naranja` | #F47B20 | **Solo relleno** (botón principal, avance, nodo activo) | texto `--tinta` encima: 5,25:1. **Blanco sobre naranja: 2,73:1, prohibido** |
| `--naranja-texto` | #B34700 | Naranja cuando es texto o icono informativo | 5,50:1 sobre blanco; 5,01:1 sobre papel |
| `--amarillo` | #FFCC4D | Insignias y logros (relleno) | `--tinta` encima: 9,55:1 |
| `--exito` | #1B6B3A (texto) · fondo #E4F5EA con texto #14532D | Cumplido | 6,54:1 sobre blanco · 8,05:1 |
| `--advertencia` | fondo #FFF4D6, texto #6B4200 | Por vencer | 7,97:1 |
| `--error` | #A31D1D (texto) · fondo #FDE8E8 con texto #8F1515 | Vencido, error | 7,63:1 sobre blanco · 7,82:1 |
| `--info` | fondo #E8EDFB, texto #1F3A8A | Informativo | 8,83:1 |
| `--foco` | #2F4A9E, anillo de 3 px con separación de 2 px | Foco visible de teclado | 8,10:1 sobre blanco |

Regla derivada: el color #E8481F del CDE (blanco sobre él: 3,90:1; `--tinta` sobre él: 3,67:1) **solo vale para texto grande (≥ 24 px, o 19 px en negrita) o iconos**; no para botones con texto normal.

Escala secuencial del mapa de calor de brechas (cada celda lleva también el **número** y un patrón de trama en daltonismo, no solo color):

| Nivel | Fondo | Texto | Contraste |
|---|---|---|---|
| 1 (sin brecha) | #FDEFE2 | `--tinta` | 12,70:1 |
| 2 | #FDBD45 | `--tinta` | 8,56:1 |
| 3 | #F78F2B | `--tinta` | 6,08:1 |
| 4 | #C4380F | blanco | 5,36:1 |
| 5 (brecha máxima) | #7A2E00 | blanco | 9,47:1 |

### 4.2 Color · modo oscuro (derivado)

| Token | Hex | Contraste |
|---|---|---|
| `--papel` | #0F1733 | — |
| `--superficie` | #18224A | texto `#F2F4FA` 13,97:1 |
| `--texto` | #F2F4FA | 16,04:1 sobre papel |
| `--texto-suave` | #A9B2D0 | 8,37:1 |
| `--borde` | #5C6896 | 3,25:1 |
| `--naranja` (relleno y texto) | #FF9A4D | 8,38:1 sobre papel; texto `#0F1733` encima 8,38:1 |
| `--foco` | #FFC857 | 11,47:1 |
| `--exito` / `--error` | #5ED38A / #FF8A8A | 9,37:1 / 7,77:1 |

Implementación (Tailwind 4.3.3): los tokens se declaran con `@theme { --color-... }` (documentación de Tailwind, consultada el 27-oct-2026); el modo oscuro usa `prefers-color-scheme` por defecto y `@custom-variant dark (&:where(.dark, .dark *))` si se quiere un interruptor manual.

EJEMPLO (fragmento ilustrativo de `src/index.css`, no es código de la aplicación):
```
@import "tailwindcss";
@theme {
  --color-papel: #F7F4EF;
  --color-tinta: #16265C;
  --color-naranja: #F47B20;
  --color-naranja-texto: #B34700;
  --color-azul: #2F4A9E;
  --color-amarillo: #FFCC4D;
}
```

### 4.3 Tipografía

| Rol | Familia | Pesos | Archivo (WOFF2, subconjunto latín) | Licencia |
|---|---|---|---|---|
| Titulares y cifras | Manrope variable (`@fontsource-variable/manrope` 5.3.0) | 600–800 | 24,8 KB | OFL-1.1 |
| Cuerpo y formularios | Source Sans 3 variable (`@fontsource-variable/source-sans-3` 5.3.1) | 400–700 | 28,9 KB | OFL-1.1 |
| Respaldo | `system-ui, "Segoe UI", Arial, sans-serif` | — | — | — |

Total 53,7 KB (medido en los paquetes de npm, 27-oct-2026). El subconjunto "latin" cubre á, é, í, ó, ú, ñ, ü, ¿ y ¡ (se comprueba en la plantilla con la frase "Año de gestión: ¿qué pasó?"). Reglas: `font-display: swap`; cuerpo 16 px (18 px en pantallas de proyector, §9); línea 1,5; ancho de párrafo ≤ 70 caracteres; cifras tabulares (`font-variant-numeric: tabular-nums`) en tablas.

Escala (px): 14 · 16 · 18 · 22 · 28 · 36 · 48. Titulares: Manrope 700 con interlineado 1,15. Sin mayúsculas sostenidas en etiquetas, sin una sola palabra resaltada en el titular y sin "eyebrows" decorativos (antipatrones, §10).

### 4.4 Espaciado, radios, sombras, capas

| Token | Valores |
|---|---|
| Espaciado | múltiplos de 4 px: 4, 8, 12, 16, 24, 32, 48, 64 |
| Radios | 6 px (controles), 12 px (tarjetas y modales), 999 px (insignias y nodos). **Tres radios con jerarquía**, no uno para todo |
| Sombras | Dos niveles: `sm` (0 1px 2px, 8 % tinta) para elementos elevados al pasar el cursor, `lg` (0 8px 24px, 14 % tinta) solo para paleta Ctrl+K y modales. Las tarjetas **no** llevan sombra por defecto; llevan borde `--divisor` y relleno `--superficie` |
| Capas (z-index) | contenido 0 · barra superior 10 · menú/popover 20 · modal 30 · toast 40 · paleta 50 |
| Ruptura | 360 · 640 · 1024 · 1440 px |
| Contenedor | máx. 1280 px; panel del día y dashboard hasta 1440 px |

### 4.5 Movimiento

| Principio | Valor |
|---|---|
| Duraciones | micro (foco, pulsar) 100–150 ms; entrada/salida de panel 200–250 ms; logro 400–600 ms (máx. 1 por acción) |
| Curvas | entrada `cubic-bezier(0.16, 1, 0.3, 1)`; salida `cubic-bezier(0.7, 0, 0.84, 0)`; sin rebote |
| Propiedades | solo `transform` y `opacity` (presupuesto de `15` §8) |
| Reducción | con `prefers-reduced-motion: reduce` no hay desplazamientos ni confeti: el logro se comunica con un cambio de color, el icono y el texto "Nivel 4 alcanzado" en una región `aria-live="polite"` |
| Cuándo | el movimiento **responde a una acción** (guardar, inscribirse, cerrar un compromiso). Sin animaciones de entrada por sección al cargar; la excepción es la única "coreografía" de la pantalla de Mi ruta (§9.5) |
| Confeti | solo al subir de nivel o completar la ruta; ≤ 60 partículas; 1,5 s; `disableForReducedMotion` |

## 5. Catálogo de componentes y estados

Convenciones: "vacío" explica qué falta y ofrece la acción; "cargando" usa esqueletos que reservan el espacio (nada salta); "error" dice qué pasó y cómo corregirlo; "éxito" confirma con el mismo verbo del botón; "deshabilitado" explica por qué (tooltip o texto auxiliar).

| Componente | Vacío | Cargando | Error | Éxito | Deshabilitado | Notas |
|---|---|---|---|---|---|---|
| Botón (primario, secundario, peligro) | — | spinner dentro, sin cambiar el ancho | — | — | opacidad 100 % del texto, fondo gris y texto 4,5:1 + razón | Primario: fondo `--naranja` y texto `--tinta`; peligro: fondo `--error` y texto blanco |
| Campo de texto / selector | — | — | borde `--error`, icono y mensaje bajo el campo vinculado con `aria-describedby` | check discreto solo si hubo verificación asíncrona (p. ej. NIT libre) | fondo `--papel`, razón | Etiqueta siempre visible; nunca solo *placeholder* |
| Tabla | EmptyState con acción | 8 filas esqueleto | banda de error con "Reintentar" | — | filtros inactivos con razón | Ver §7 |
| Tarjeta de cifra (Stat) | "Sin datos para este periodo" | esqueleto de la cifra | "No se pudo calcular" + reintentar | variación con flecha y signo | — | La cifra es un enlace a la lista que la compone (`06` §1.2) |
| Línea de tiempo (hilo) | "Esta empresa aún no tiene hitos. Registra el primero" | 5 hitos esqueleto | banda de error | hito nuevo aparece con resaltado de 600 ms | — | Ver §9.2 |
| Badge de estado | — | — | — | — | — | Siempre icono + texto (Cumplido ✓, Vencido ⚠, En curso ●) |
| Modal de confirmación | — | botón con spinner | error dentro del modal | cierra con toast | — | Acciones destructivas exigen escribir la palabra solo en el reinicio de demo (`14` T-31) |
| Toast (`sonner`) | — | — | rojo, sin autocierre | verde, 4 s; con "Deshacer" 30 s en fusión | — | Región `aria-live` (`sonner` la incluye `[NO VERIFICADO: confirmar en la plantilla]`) |
| Paleta Ctrl+K | "Escribe un nombre, NIT o correo" | línea de progreso fina | "No pudimos buscar. Reintentar" | — | — | Ver §9.1 |
| Subida de archivo (importación) | zona de arrastre con formato y tamaño máximos | barra con filas procesadas | lista de errores por fila | resumen verde/amarillo/rojo | — | Ver `06` E6 |
| Insignia / nivel | silueta gris con requisito ("Asiste a 3 eventos") | — | — | animación de logro §4.5 | bloqueada (candado + texto) | Nunca solo color |
| Nodo del mapa de ruta | punto vacío | — | — | nodo lleno + `--amarillo` | futuro: contorno, texto suave | Ver §9.5 |
| Esqueleto | — | pulso de opacidad 1,2 s (se detiene con movimiento reducido) | — | — | — | Mismo tamaño que el contenido real |
| EmptyState | título, una frase y una acción | — | — | — | — | Sin ilustraciones genéricas; solo icono lucide a 32 px |

## 6. Formularios

1. **Una columna** en móvil y dos en escritorio solo para campos cortos relacionados (departamento/municipio).
2. **Etiqueta arriba**, ayuda debajo, error debajo de la ayuda. Marcar como obligatorios los que lo son (texto "obligatorio", no solo asterisco).
3. **Listas, no texto libre**, para sector, tamaño, formalización, área, estado (RF-01).
4. **Validación**: al perder el foco y al enviar; el servidor es la verdad (RNF-09); `zod` define el esquema (`15` §3). El foco salta al primer campo con error y un resumen al inicio lo enumera con enlaces.
5. **NIT** con máscara visual y normalización en el servidor; al perder el foco consulta duplicados (`06` flujo 2) y muestra el banner con puntuación (`13` D-02).
6. **Guardado**: un solo botón primario ("Guardar empresa"); secundario "Cancelar"; si hay cambios sin guardar, advertencia al salir.
7. **Formularios largos** (diagnóstico): pasos con el hilo como indicador, borrador guardado automáticamente cada 30 s `PROPUESTA`.
8. **Objetivos táctiles** ≥ 44 px en móvil; en escritorio mínimo 24×24 px (WCAG 2.2 SC 2.5.8).

## 7. Tablas y listas con miles de filas

| Decisión | Valor | Motivo |
|---|---|---|
| Paginación | **Del servidor, 50 filas por defecto** (25 y 100 opcionales); `per_page` máx. 100 | RNF-02: ninguna lista carga más de 50 filas sin paginar |
| Ordenar y filtrar | Se envían al servidor; los filtros activos se muestran como chips quitables | Consistencia con cifras y reportes |
| Virtualización (`@tanstack/react-virtual`) | Solo donde el cliente ya tiene muchas filas: **vista previa de importación (509 filas)** y línea de tiempo con más de 200 hitos | Para 509 filas el DOM completo sería lento en un portátil de gama media |
| Búsqueda en tabla | La paleta Ctrl+K cubre la búsqueda global; la tabla tiene un filtro propio por texto | Dos patrones claros |
| Columnas | Máx. 7 visibles; "Columnas" permite ocultar; cifras alineadas a la derecha con cifras tabulares | Densidad de operador |
| Fila | Altura 48 px (36 px en modo compacto); toda la fila es clicable pero el enlace principal es un `<a>` real | Teclado y lectores de pantalla |
| Encabezado | Fijo al desplazar; `<th scope="col">`; ordenación con `aria-sort` | Accesibilidad |
| Selección masiva | Casilla por fila y "Seleccionar las 50 de la página"; acciones masivas solo con confirmación | RNF-12 |
| Estado vacío / error | Según §5 | — |
| Exportar | CSV con los filtros aplicados (UTF-8 con BOM) | RNF-10 |

## 8. Microinteracciones

| Momento | Respuesta | Duración |
|---|---|---|
| Pasar el cursor o enfocar una fila | Fondo `--papel` y borde izquierdo naranja de 3 px | 120 ms |
| Guardar | Botón muestra spinner; al terminar, toast "Empresa guardada" | — |
| Fusionar duplicados | Las dos columnas colapsan en una; toast con "Deshacer" 30 s | 250 ms |
| Sumar puntos | Contador sube con cuenta corta y aparece "+30" que sube 12 px y se desvanece | 600 ms |
| Subir de nivel | El nodo se llena, la insignia entra con escala de 0,9 a 1 y confeti breve | 800 ms |
| Completar ficha | El anillo de completitud avanza; al 100 % cambia a `--exito` con check | 400 ms |
| Abrir paleta Ctrl+K | Desvanecimiento del fondo y la caja baja 8 px | 150 ms |
| Nuevo hito en la línea de tiempo | El nodo aparece con resaltado amarillo pálido que se apaga | 600 ms |
| Error de red | Banner fijo "Sin conexión. Tus cambios se guardarán cuando vuelva" solo si esa función existe; si no, "No pudimos guardar. Reintentar" | — |

## 9. Pantallas "hero" de la demo (wireframes de texto)

Todas se muestran en tamaño de proyector (1920×1080 o 1366×768): cuerpo 18 px, objetivos grandes, sin información crítica en los bordes.

### 9.1 Paleta de comandos (Ctrl+K) · `T-17`
```
┌──────────────────────────────────────────────────────────┐
│ 🔍 pamaderia                                      Esc    │
├──────────────────────────────────────────────────────────┤
│ EMPRESAS                                                  │
│ ▸ Panadería Dulce Hogar S.A.S.        Alimentos · 0,82    │
│   Panadería La Espiga                 Alimentos · 0,58    │
│ CONTACTOS                                                 │
│   Marcela Ríos · Dulce Hogar                              │
│ EVENTOS                                                   │
│   Taller de finanzas básicas · 12 nov                     │
├──────────────────────────────────────────────────────────┤
│ ↑↓ moverse   ↵ abrir historial   Ctrl+K cerrar            │
└──────────────────────────────────────────────────────────┘
```
- Abre desde cualquier pantalla del equipo CDE con Ctrl+K y desde el icono de lupa en móvil.
- Muestra la coincidencia (0,82) como valor, no como barra, para no inventar porcentajes de "certeza".
- Los grupos usan texto en minúsculas capitalizadas (sin mayúsculas sostenidas, §10).
- Al pulsar Enter abre la ficha en la pestaña Línea de tiempo (cronómetro en pantalla en el ensayo).

### 9.2 Línea de tiempo (el hilo) · `T-15`, `T-27`
```
 Panadería Dulce Hogar S.A.S.     Alimentos · Micro · Graduado UNAB
 Datos completos 82 %    Madurez: Intermedio (+12)
 [Todo ▾] [2026 ▾]   Proyecto · Diagnóstico · Cita · Plan · Evento
                                                                 
  2026-2 ┃
         ●── 12 sep   Evento · Marketing digital         asistió
         ┃
         ◆── 02 sep   Compromiso vencido · Actualizar precios  ⚠
         ┃
         ●── 20 ago   Cita realizada · Asesoría de finanzas
         ┃
  2026-1 ┃
         ■── 15 mar   Diagnóstico #3 · 68/100  (↑ +12)
```
- El hilo es una línea de 2 px en `--divisor`; los nodos son círculo (evento/cita), rombo (compromiso), cuadrado (diagnóstico) y barra (proyecto): **forma + icono + texto**, no solo color.
- Nodos con relleno `--naranja` para lo abierto/accionable y `--tinta` para lo cerrado; **todos con contorno `--tinta` de 2 px**, porque el naranja solo da 2,73:1 sobre blanco y los gráficos necesarios exigen 3:1 (WCAG 1.4.11).
- Agrupación por semestre con encabezado de hilo; los hitos colapsan con "Ver 6 más".
- ≥ 15 hitos de ≥ 5 tipos en la empresa protagonista.

### 9.3 Radar de madurez · `T-54` (Could) o gráfica de evolución v1
```
       Estrategia
          ▲
 Finanzas  ╱ ╲  Mercadeo        ── Diagnóstico #1 (mar-2026)
      ◀───  ◆  ───▶             ━━ Diagnóstico #3 (sep-2026)
 Operación ╲ ╱  Talento humano
          ▼
       Formalización
  Tabla equivalente a la derecha: dimensión · #1 · #3 · Δ
```
- Dos polígonos: el primero en `--texto-suave` (línea discontinua) y el último en `--azul` con relleno translúcido; etiquetas con valores.
- Siempre una **tabla equivalente** al lado (accesibilidad y proyector).
- Si T-54 no entra, se muestra la gráfica de líneas por dimensión (v1).

### 9.4 Tablero de brechas · `T-49`, `T-48`
```
 Brechas por sector y dimensión              Periodo: 2026-2 ▾
 Pregunta: [Mayores brechas del sector… ▾]  Sector: [Alimentos ▾]
                    Estrat.  Finanzas Mercadeo Operación Talento Formal.
 Alimentos           [ 3 ]    [ 5 ]    [ 4 ]    [ 2 ]    [ 3 ]   [ 4 ]
 Comercio            [ 2 ]    [ 4 ]    [ 3 ]    [ 2 ]    [ 2 ]   [ 3 ]
 Servicios           ...
 Leyenda: 1 sin brecha ▭▭▭▭▭ 5 brecha máxima  (cada celda con su número y trama)
 ───────────────────────────────────────────────────────────────
 Alimentos · Finanzas: 41 empresas afectadas  [Ver lista] [Exportar CSV]
```
- Escala de 5 niveles de §4.1 con **número** y trama (diagonal en 4, puntos en 5) para daltonismo.
- Clic en una celda abre la lista de empresas afectadas (de la cifra a la lista).
- Con teclado: flechas para moverse por la rejilla, Enter para abrir. Tabla equivalente oculta para lectores de pantalla.
- Pregunta de ejemplo del criterio CRI-10 en ≤ 3 interacciones.

### 9.5 Mapa de ruta gamificado ("Mi ruta") · `T-47`
```
 Hola, Marcela                       Nivel 3 · Constructora   280/400 pts
 ┌───────────────────────────────────────────────────────────┐
 │   ●━━━━━●━━━━━●━━━━━◉ ┄┄┄ ○ ┄┄┄ ○ ┄┄┄ ★                    │
 │ Ficha  Primer  Plan   Hoy   Taller  Cita   Nivel 4         │
 │ lista  taller  de            de     de                      │
 │        asistido acción       finanzas seguimiento           │
 └───────────────────────────────────────────────────────────┘
 Tu siguiente paso            vence en 2 días
 [ Actualizar precios ]  ← cerrar este compromiso da +30 pts
 Para ti · Taller de finanzas — "Porque tu mayor brecha es finanzas"
 [ Inscribirme ]
```
- Nodo lleno = hecho (con fecha); nodo con anillo = hoy; nodo vacío = futuro. Todos con contorno `--tinta` de 2 px (misma razón que §9.2). El camino pasa de línea continua (hecho) a punteada (pendiente).
- Los nodos son **hechos reales** del acompañamiento (asistencia, cumplimiento, ficha), nunca videos vistos.
- La única coreografía de la app: al cerrar un compromiso, el avance recorre el hilo hasta el siguiente nodo, suben los puntos y se muestra la insignia (≤ 800 ms). Con movimiento reducido: el nodo cambia de estado y un texto anuncia "Compromiso cumplido. +30 puntos".
- En móvil el hilo es vertical.

### 9.6 Duplicados lado a lado · `T-19`
```
 Posible duplicado · similitud 0,95  [NIT igual] [Correo igual] [Nombre ≈]
 ┌──────────────── A (se conserva) ─┬──────── B (se fusiona) ───────┐
 │ Panadería Dulce Hogar S.A.S.     │ Panaderia Dulce Hogar SAS      │
 │ NIT 900.123.456-7        ✓ igual │ 9001234567                     │
 │ Sector: Alimentos                │ Sector: (vacío)  → usar A      │
 │ 3 citas · 2 proyectos            │ 1 cita                         │
 └──────────────────────────────────┴────────────────────────────────┘
 [Cancelar]                                         [Fusionar]
 Tras fusionar: "Fusionado. Deshacer (30 s)"
```

## 10. Antipatrones de "plantilla genérica" (prohibidos en este proyecto)

Basados en la lista del skill `frontend-design` (`anthropics/skills`, commit `dbd4588`, secciones "Process" y "Design principles") y aplicados al CDE:

1. Rejilla de tarjetas idénticas con el mismo radio, la misma sombra y degradado decorativo.
2. Cifra grande + etiqueta pequeña + degradado como único tratamiento del panel de inicio (usarlo solo donde el número es el protagonista).
3. Etiqueta en mayúsculas y espaciada sobre cada titular ("eyebrow"), cadenas con puntos medios "A · B · C" y flechas "→" añadidas a todo botón.
4. Resaltar una sola palabra del titular con otro color o cursiva.
5. Numeración 01/02/03 donde el contenido no es una secuencia.
6. Entradas "fade-and-slide-up" en cada sección y efecto hover en toda tarjeta.
7. Negro puro o "casi negro" genérico y un único acento ácido; crema con serif y terracota (el fondo `--papel` y el naranja del CDE se usan **con función**, no como estética por defecto).
8. Ilustraciones de stock, emojis como iconos estructurales, texto de relleno ("Lorem ipsum", "Tu partner de confianza").
9. Botones "Enviar" o "OK"; mensajes de error que se disculpan sin decir qué pasó.
10. Gráficos con colores por defecto de la librería, sin etiquetas de valor ni tabla equivalente.
11. Pantallas en blanco mientras carga.
12. Usar el logotipo de la UNAB o del CDE sin permiso (PA-20, PA-29).

## 11. Cómo se calcularon los contrastes (reproducible)

El script (en el scratchpad de la sesión, no en el repositorio) aplica la fórmula de WCAG 2.2: luminancia relativa `L = 0,2126·R + 0,7152·G + 0,0722·B` con linealización sRGB y razón `(L1 + 0,05)/(L2 + 0,05)`. Antes de la entrega T-96 se **repite con una herramienta independiente** (`@axe-core/playwright` 4.14.0, `15` §3) sobre el DOM renderizado: si un par difiere, manda la herramienta y se corrige el token.

## 12. Responsive y accesibilidad

| Tema | Regla | Fuente |
|---|---|---|
| Reflow | Sin desplazamiento horizontal a 320 px de ancho (salvo tablas, que se desplazan en su contenedor) | WCAG 2.2 SC 1.4.10 (w3.org) |
| Contraste | Texto 4,5:1 y componentes 3:1 (§4) | SC 1.4.3 y 1.4.11 |
| Foco | Anillo visible de 3 px en `--foco`; ningún elemento fijo lo tapa (barra superior y toasts con margen) | SC 2.4.7, 2.4.11 |
| Objetivo táctil | ≥ 24×24 px (mínimo), 44 px en móvil | SC 2.5.8 |
| Teclado | Todo el camino dorado se recorre sin ratón; la paleta Ctrl+K tiene alternativa visible (icono de lupa) | SC 2.1.1 |
| Movimiento | §4.5 | `prefers-reduced-motion` (MDN) |
| Idioma | `<html lang="es-CO">` | — |
| Gráficos | Tabla equivalente o descripción; valores visibles; patrón además de color | — |
| Móvil primero | Portal del emprendedor (M2–M8) diseñado a 360 px; equipo CDE diseñado a 1280 px | `06` §2 |
| Proyector | Texto del cuerpo 18 px; titulares ≥ 28 px; contraste de pantallas "hero" ≥ 7:1 para texto principal (todos los tokens de texto de §4.1 cumplen) | `PROPUESTA` |

## 13. Revisión visual antes de cada validación (checklist de 10 min)

Se aplica antes de V1 (28-oct 16:30), V2 (29-oct 7:30) y el pitch. Responsable: María Paula; revisa otra persona.

1. [ ] Se abre la paleta con Ctrl+K y "pamaderia" encuentra la empresa en ≤ 20 s con cronómetro.
2. [ ] Ninguna pantalla muestra texto con contraste por debajo de 4,5:1 (axe sin errores serios; `15` §3).
3. [ ] Ningún botón tiene texto blanco sobre `--naranja` ni naranja `#F47B20` como color de texto.
4. [ ] El foco con teclado se ve en todas las pantallas del camino dorado.
5. [ ] Cada estado (cumplido, vencido, en curso) tiene icono y texto además de color.
6. [ ] El mapa de calor muestra el número en cada celda.
7. [ ] Pasa por `prefers-reduced-motion: reduce` sin perder información (activar en el sistema operativo).
8. [ ] A 1366×768 y 1920×1080 no hay texto cortado ni barras de desplazamiento horizontales; a 360 px el portal del emprendedor es usable.
9. [ ] Ningún estado en blanco: cada lista vacía tiene mensaje y acción; cada carga tiene esqueleto.
10. [ ] Sin datos reales: banner "Datos sintéticos" visible en modo demostración (`14` T-31).
11. [ ] Sin logotipos de la UNAB o del CDE (hasta tener permiso).
12. [ ] Ningún antipatrón de §10 reintroducido (revisar con la skill `frontend-design`, `15` §2.3).
13. [ ] Lighthouse/LCP y peso inicial dentro del presupuesto de `15` §8 (si no se midió, anotarlo).
14. [ ] Un compañero que no construyó la pantalla completa la tarea en ≤ 2 min sin ayuda (RNF-04).

## 14. Impacto en tareas y horas

| Tarea (`14`) | Cambio | Horas |
|---|---|---|
| T-40 Design system | Implementa §4 (tokens), §5 (componentes) y las fuentes; sustituye los tokens de `06` §5 | 0 h extra (ya tiene 1,0–1,5 h) |
| T-27, T-47, T-49, T-17, T-19 | Siguen los wireframes de §9 | 0 h extra (ya presupuestadas en F13/F14) |
| Instalación de fuentes empaquetadas | Dos paquetes `@fontsource-variable` | incluida en T-40 |

No se añaden horas. Lo que se pierde por seguir esta dirección: nada del alcance; se evita el rediseño tardío.

## 15. Contradicciones y preguntas

| # | Tema | Tratamiento |
|---|---|---|
| C-22 | `06` §5 propuso un azul genérico y dijo que no se conocían los colores; los originales del CDE traen una paleta marino/naranja/amarillo/crema y fuentes Arial/Calibri | Se reemplaza la paleta por §4; `06` §5 queda superado (nota agregada en `06`) |
| PA-29 | Pregunta abierta: ¿el CDE permite usar su paleta (no su logotipo) y entrega manual de marca? Por qué bloquea: coherencia y permiso. Opciones: (a) usar la paleta como inspiración sin logos, (b) pedir manual, (c) paleta neutra. Recomendación: (a) y preguntar el 28-oct. Decide: CDE | `99` §K.5 |

## Criterio de aceptación

1. Todos los pares texto/fondo de §4 tienen razón de contraste calculada ≥ 4,5:1 (texto) o ≥ 3:1 (componentes); `#F47B20` no aparece como texto ni con texto blanco.
2. Los cinco "hero" de §9.1–§9.5 (más §9.6) tienen wireframe y criterio de demo.
3. Las fuentes son de licencia libre (OFL-1.1), empaquetadas y suman ≤ 60 KB.
4. La checklist de §13 se ejecuta antes de V1, V2 y el pitch y su resultado se anota en `docs/REVISION_VISUAL.md`.
5. C-22 y PA-29 están en `99` §K.5 y en `PROGRESO.md`.
