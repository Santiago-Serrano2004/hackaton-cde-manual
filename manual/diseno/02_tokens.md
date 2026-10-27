# 02 · Tokens del sistema de diseño

**Objetivo.** Dejar los tokens del sistema «Hilo de ruta» (`16` §4) como variables CSS y como tema de Tailwind 4.3.3, con la razón de contraste calculada con la fórmula de WCAG para cada par usado en el prototipo, en modo claro y oscuro.
**Entradas.** `16_sistema_de_diseno.md` §4, `15_frontend_skills_y_ui.md` §3, `00_investigacion.md` (DI-24, DI-25, DI-26, DI-51..53).
**Archivos.** `prototipo/css/tokens.css` (variables, claro y oscuro), `prototipo/css/tailwind-theme.css` (tema de Tailwind), `prototipo/assets/fonts/` (WOFF2 locales con licencias).

## 1. Decisiones

| ID | Decisión | Razón |
|---|---|---|
| TK-01 | Los tokens se declaran como variables CSS en `:root` y se redefinen bajo `[data-theme="dark"]` y bajo `prefers-color-scheme: dark` (con `:root:not([data-theme="light"])`) | El sistema operativo decide por defecto y la persona puede forzar el tema (DI-52, WCAG 1.4.3 en ambos) |
| TK-02 | Tailwind usa `@theme inline` con `--color-*: initial` y mapea cada color a `var(--token)` | Probado el 27-oct-2026: `@tailwindcss/cli` 4.3.3 compila `bg-papel`, `text-tinta`, `font-titulo`, `rounded-card`, `text-28` y `shadow-lg` con `var(--papel)` etc.; el tema oscuro funciona sin duplicar clases |
| TK-03 | Fuentes Manrope y Source Sans 3 variables, subconjunto latino, empaquetadas en `assets/fonts/` (24,8 KB y 28,9 KB = 53,7 KB) con respaldo `system-ui, "Segoe UI", Arial` | OFL-1.1 (licencias incluidas); sin servicios externos; cubre á é í ó ú ñ ü ¿ ¡ (subconjunto «latin» = U+0000–00FF) |
| TK-04 | Iconos lucide 1.61.0 (ISC) como sprite SVG local (`assets/iconos.svg`, 60 iconos) | Misma versión que `15`; sin emojis estructurales (antipatrón 6 de `00` §8) |
| TK-05 | El naranja `#F47B20` solo es relleno; como texto o icono informativo se usa `--naranja-texto` | Contraste de `16` §4 (blanco sobre naranja 2,73:1 está prohibido) |
| TK-06 | Modo oscuro: `--azul` pasa a `#9DB4FF`, `--borde` a `#6F7BAA` y la escala de mapa de calor se redefine (`PROPUESTA`) | `16` solo fija 9 tokens oscuros; el resto se derivó y se validó abajo. `--borde` oscuro difiere de `16` (`#5C6896` daba 2,84:1 sobre superficie): ver `99_decisiones.md` DEC-03 |

## 2. Tokens de color (claro / oscuro)

| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| `--papel` | #F7F4EF | #0F1733 | Fondo de página |
| `--superficie` | #FFFFFF | #18224A | Tarjetas, tablas, modales |
| `--tinta` | #16265C | #F2F4FA | Titulares y énfasis |
| `--texto` | #1B2340 | #F2F4FA | Cuerpo |
| `--texto-suave` | #4B5575 | #A9B2D0 | Texto secundario |
| `--borde` | #7C84A3 | #6F7BAA | Borde de controles |
| `--divisor` | #C9CFE3 | #2E3A6B | Líneas decorativas |
| `--azul` | #2F4A9E | #9DB4FF | Enlaces y selección |
| `--naranja` | #F47B20 | #FF9A4D | Relleno de acción principal (nunca texto) |
| `--naranja-texto` | #B34700 | #FF9A4D | Naranja como texto/icono |
| `--amarillo` | #FFCC4D | #FFC857 | Logro (relleno) |
| `--foco` | #2F4A9E | #FFC857 | Anillo de foco |
| `--exito` | #1B6B3A | #5ED38A | Éxito (texto) |
| `--exito-bg` | #E4F5EA | #123A25 | Fondo de éxito |
| `--exito-tx` | #14532D | #9BE9B7 | Texto sobre éxito |
| `--adv-bg` | #FFF4D6 | #3A2D0B | Fondo de advertencia |
| `--adv-tx` | #6B4200 | #FFD98A | Texto de advertencia |
| `--error` | #A31D1D | #FF8A8A | Error (texto/borde) |
| `--error-bg` | #FDE8E8 | #40161B | Fondo de error |
| `--error-tx` | #8F1515 | #FFB4B4 | Texto sobre error |
| `--info-bg` | #E8EDFB | #1C2A5C | Fondo informativo |
| `--info-tx` | #1F3A8A | #C3D2FF | Texto informativo |
| `--sobre-naranja` | #16265C | #0F1733 | Texto sobre naranja |
| `--sobre-azul` | #FFFFFF | #0F1733 | Texto sobre azul |
| `--sobre-error` | #FFFFFF | #0F1733 | Texto sobre rojo |
| `--deshab-bg` | #E6E8EF | #232E5C | Fondo deshabilitado |
| `--deshab-tx` | #4B5575 | #A9B2D0 | Texto deshabilitado |
| `--h1` | #FDEFE2 | #1E2A5E | Brecha 1 |
| `--h2` | #FDBD45 | #6B4B12 | Brecha 2 |
| `--h3` | #F78F2B | #9A5A12 | Brecha 3 |
| `--h4` | #C4380F | #E5673D | Brecha 4 (con trama diagonal) |
| `--h5` | #7A2E00 | #F4A07A | Brecha 5 (con trama de puntos) |
| `--h1t` | #16265C | #F2F4FA | Texto brecha 1 |
| `--h2t` | #16265C | #FFFFFF | Texto brecha 2 |
| `--h3t` | #16265C | #FFFFFF | Texto brecha 3 |
| `--h4t` | #FFFFFF | #0F1733 | Texto brecha 4 |
| `--h5t` | #FFFFFF | #0F1733 | Texto brecha 5 |

Otros tokens (iguales en ambos modos): espaciado 4·8·12·16·24·32·48·64 px; radios 6 px (controles), 12 px (tarjetas, modales), 999 px (insignias, nodos); sombras `sm` y `lg`; escala tipográfica 14·16·18·22·28·36·48 px; duraciones 120 ms (micro), 220 ms (panel), 500 ms (logro); curvas `cubic-bezier(.16,1,.3,1)` (entrada) y `cubic-bezier(.7,0,.84,0)` (salida); z-index 0·10·20·30·40·50; rupturas 360·640·1024·1440.

## 3. Contraste calculado (WCAG 2.2)

Fórmula: luminancia relativa `L = 0,2126·R + 0,7152·G + 0,0722·B` con linealización sRGB; razón `(L1+0,05)/(L2+0,05)`. Umbrales: 4,5:1 texto normal; 3:1 componentes de interfaz (1.4.3, 1.4.11). Cálculo propio (`contraste.py` en el espacio de trabajo de la sesión) y verificado de forma independiente por axe-core en `90_revision.md`. Defectos de `16` encontrados al calcular: ver `99_decisiones.md` DEC-03 y DEC-04.

### 3.1 Modo claro

| Texto/elemento | Fondo | Razón | Mínimo | Resultado | Uso |
|---|---|---:|---:|:-:|---|
| `--texto` #1B2340 | `--papel` #F7F4EF | 14,06:1 | 4,5:1 | cumple | Texto de cuerpo sobre fondo de página |
| `--texto` #1B2340 | `--superficie` #FFFFFF | 15,43:1 | 4,5:1 | cumple | Texto de cuerpo en tarjetas y tablas |
| `--tinta` #16265C | `--papel` #F7F4EF | 13,06:1 | 4,5:1 | cumple | Titulares sobre papel |
| `--tinta` #16265C | `--superficie` #FFFFFF | 14,33:1 | 4,5:1 | cumple | Titulares en tarjetas |
| `--texto-suave` #4B5575 | `--papel` #F7F4EF | 6,7:1 | 4,5:1 | cumple | Texto secundario sobre papel |
| `--texto-suave` #4B5575 | `--superficie` #FFFFFF | 7,35:1 | 4,5:1 | cumple | Texto secundario en tarjetas |
| `--azul` #2F4A9E | `--papel` #F7F4EF | 7,38:1 | 4,5:1 | cumple | Enlaces sobre papel |
| `--azul` #2F4A9E | `--superficie` #FFFFFF | 8,1:1 | 4,5:1 | cumple | Enlaces en tarjetas |
| `--azul` #2F4A9E | `--info-bg` #E8EDFB | 6,91:1 | 4,5:1 | cumple | Botón fantasma (hover) / enlaces sobre fondo informativo |
| `--tinta` #16265C | `--info-bg` #E8EDFB | 12,24:1 | 4,5:1 | cumple | Fila seleccionada y opción activa de la paleta |
| `--texto` #1B2340 | `--info-bg` #E8EDFB | 13,18:1 | 4,5:1 | cumple | Texto sobre fila seleccionada |
| `--sobre-naranja` #16265C | `--naranja` #F47B20 | 5,25:1 | 4,5:1 | cumple | Texto del botón primario |
| `--naranja-texto` #B34700 | `--superficie` #FFFFFF | 5,5:1 | 4,5:1 | cumple | Naranja usado como texto/icono |
| `--naranja-texto` #B34700 | `--papel` #F7F4EF | 5,01:1 | 4,5:1 | cumple | Naranja como texto sobre papel |
| `--exito` #1B6B3A | `--superficie` #FFFFFF | 6,54:1 | 4,5:1 | cumple | Texto de éxito (válido) |
| `--exito-tx` #14532D | `--exito-bg` #E4F5EA | 8,05:1 | 4,5:1 | cumple | Estado Cumplido |
| `--adv-tx` #6B4200 | `--adv-bg` #FFF4D6 | 7,97:1 | 4,5:1 | cumple | Estado Por vencer / aviso / sello Por revisar |
| `--adv-bg` #FFF4D6 | `--adv-tx` #6B4200 | 7,97:1 | 4,5:1 | cumple | Señal de duplicado alta (texto claro sobre relleno oscuro) |
| `--error` #A31D1D | `--superficie` #FFFFFF | 7,63:1 | 4,5:1 | cumple | Texto de error en campos |
| `--error-tx` #8F1515 | `--error-bg` #FDE8E8 | 7,82:1 | 4,5:1 | cumple | Estado Vencido / banda de error |
| `--info-tx` #1F3A8A | `--info-bg` #E8EDFB | 8,83:1 | 4,5:1 | cumple | Estado En curso / banner demo |
| `--deshab-tx` #4B5575 | `--deshab-bg` #E6E8EF | 6,01:1 | 4,5:1 | cumple | Botón deshabilitado (texto) |
| `--sobre-azul` #FFFFFF | `--azul` #2F4A9E | 8,1:1 | 4,5:1 | cumple | Texto sobre relleno azul |
| `--sobre-error` #FFFFFF | `--error` #A31D1D | 7,63:1 | 4,5:1 | cumple | Botón de peligro |
| `--papel` #F7F4EF | `--tinta` #16265C | 13,06:1 | 4,5:1 | cumple | Avatar, marca, página activa (texto sobre tinta) |
| `--h1t` #16265C | `--h1` #FDEFE2 | 12,7:1 | 4,5:1 | cumple | Mapa de calor nivel 1 |
| `--h2t` #16265C | `--h2` #FDBD45 | 8,56:1 | 4,5:1 | cumple | Mapa de calor nivel 2 |
| `--h3t` #16265C | `--h3` #F78F2B | 6,08:1 | 4,5:1 | cumple | Mapa de calor nivel 3 |
| `--h4t` #FFFFFF | `--h4` #C4380F | 5,36:1 | 4,5:1 | cumple | Mapa de calor nivel 4 |
| `--h5t` #FFFFFF | `--h5` #7A2E00 | 9,47:1 | 4,5:1 | cumple | Mapa de calor nivel 5 |
| `--borde` #7C84A3 | `--papel` #F7F4EF | 3,37:1 | 3:1 | cumple | Borde de campos sobre papel |
| `--borde` #7C84A3 | `--superficie` #FFFFFF | 3,69:1 | 3:1 | cumple | Borde de campos y botones secundarios sobre tarjeta |
| `--foco` #2F4A9E | `--superficie` #FFFFFF | 8,1:1 | 3:1 | cumple | Anillo de foco sobre tarjeta |
| `--foco` #2F4A9E | `--papel` #F7F4EF | 7,38:1 | 3:1 | cumple | Anillo de foco sobre papel |
| `--tinta` #16265C | `--superficie` #FFFFFF | 14,33:1 | 3:1 | cumple | Contorno de nodos del hilo y de la ruta |
| `--tinta` #16265C | `--naranja` #F47B20 | 5,25:1 | — | informativo | INFORMATIVO: contorno del nodo frente a su relleno naranja; el límite visible del nodo es contorno vs superficie (fila anterior) |
| `--naranja` #F47B20 | `--superficie` #FFFFFF | 2,73:1 | — | informativo | INFORMATIVO: naranja sin contorno contra tarjeta; por eso nunca se usa solo (regla de 16) |
| `--error` #A31D1D | `--superficie` #FFFFFF | 7,63:1 | 3:1 | cumple | Borde de campo con error |
| `--adv-tx` #6B4200 | `--superficie` #FFFFFF | 8,73:1 | 3:1 | cumple | Borde de campo con advertencia y señales |

### 3.2 Modo oscuro

| Texto/elemento | Fondo | Razón | Mínimo | Resultado | Uso |
|---|---|---:|---:|:-:|---|
| `--texto` #F2F4FA | `--papel` #0F1733 | 16,04:1 | 4,5:1 | cumple | Texto de cuerpo sobre fondo de página |
| `--texto` #F2F4FA | `--superficie` #18224A | 13,97:1 | 4,5:1 | cumple | Texto de cuerpo en tarjetas y tablas |
| `--tinta` #F2F4FA | `--papel` #0F1733 | 16,04:1 | 4,5:1 | cumple | Titulares sobre papel |
| `--tinta` #F2F4FA | `--superficie` #18224A | 13,97:1 | 4,5:1 | cumple | Titulares en tarjetas |
| `--texto-suave` #A9B2D0 | `--papel` #0F1733 | 8,37:1 | 4,5:1 | cumple | Texto secundario sobre papel |
| `--texto-suave` #A9B2D0 | `--superficie` #18224A | 7,29:1 | 4,5:1 | cumple | Texto secundario en tarjetas |
| `--azul` #9DB4FF | `--papel` #0F1733 | 8,74:1 | 4,5:1 | cumple | Enlaces sobre papel |
| `--azul` #9DB4FF | `--superficie` #18224A | 7,61:1 | 4,5:1 | cumple | Enlaces en tarjetas |
| `--azul` #9DB4FF | `--info-bg` #1C2A5C | 6,78:1 | 4,5:1 | cumple | Botón fantasma (hover) / enlaces sobre fondo informativo |
| `--tinta` #F2F4FA | `--info-bg` #1C2A5C | 12,44:1 | 4,5:1 | cumple | Fila seleccionada y opción activa de la paleta |
| `--texto` #F2F4FA | `--info-bg` #1C2A5C | 12,44:1 | 4,5:1 | cumple | Texto sobre fila seleccionada |
| `--sobre-naranja` #0F1733 | `--naranja` #FF9A4D | 8,38:1 | 4,5:1 | cumple | Texto del botón primario |
| `--naranja-texto` #FF9A4D | `--superficie` #18224A | 7,3:1 | 4,5:1 | cumple | Naranja usado como texto/icono |
| `--naranja-texto` #FF9A4D | `--papel` #0F1733 | 8,38:1 | 4,5:1 | cumple | Naranja como texto sobre papel |
| `--exito` #5ED38A | `--superficie` #18224A | 8,17:1 | 4,5:1 | cumple | Texto de éxito (válido) |
| `--exito-tx` #9BE9B7 | `--exito-bg` #123A25 | 8,89:1 | 4,5:1 | cumple | Estado Cumplido |
| `--adv-tx` #FFD98A | `--adv-bg` #3A2D0B | 9,96:1 | 4,5:1 | cumple | Estado Por vencer / aviso / sello Por revisar |
| `--adv-bg` #3A2D0B | `--adv-tx` #FFD98A | 9,96:1 | 4,5:1 | cumple | Señal de duplicado alta (texto claro sobre relleno oscuro) |
| `--error` #FF8A8A | `--superficie` #18224A | 6,77:1 | 4,5:1 | cumple | Texto de error en campos |
| `--error-tx` #FFB4B4 | `--error-bg` #40161B | 9,22:1 | 4,5:1 | cumple | Estado Vencido / banda de error |
| `--info-tx` #C3D2FF | `--info-bg` #1C2A5C | 9,11:1 | 4,5:1 | cumple | Estado En curso / banner demo |
| `--deshab-tx` #A9B2D0 | `--deshab-bg` #232E5C | 6,16:1 | 4,5:1 | cumple | Botón deshabilitado (texto) |
| `--sobre-azul` #0F1733 | `--azul` #9DB4FF | 8,74:1 | 4,5:1 | cumple | Texto sobre relleno azul |
| `--sobre-error` #0F1733 | `--error` #FF8A8A | 7,77:1 | 4,5:1 | cumple | Botón de peligro |
| `--papel` #0F1733 | `--tinta` #F2F4FA | 16,04:1 | 4,5:1 | cumple | Avatar, marca, página activa (texto sobre tinta) |
| `--h1t` #F2F4FA | `--h1` #1E2A5E | 12,34:1 | 4,5:1 | cumple | Mapa de calor nivel 1 |
| `--h2t` #FFFFFF | `--h2` #6B4B12 | 7,95:1 | 4,5:1 | cumple | Mapa de calor nivel 2 |
| `--h3t` #FFFFFF | `--h3` #9A5A12 | 5,46:1 | 4,5:1 | cumple | Mapa de calor nivel 3 |
| `--h4t` #0F1733 | `--h4` #E5673D | 5,32:1 | 4,5:1 | cumple | Mapa de calor nivel 4 |
| `--h5t` #0F1733 | `--h5` #F4A07A | 8,53:1 | 4,5:1 | cumple | Mapa de calor nivel 5 |
| `--borde` #6F7BAA | `--papel` #0F1733 | 4,27:1 | 3:1 | cumple | Borde de campos sobre papel |
| `--borde` #6F7BAA | `--superficie` #18224A | 3,72:1 | 3:1 | cumple | Borde de campos y botones secundarios sobre tarjeta |
| `--foco` #FFC857 | `--superficie` #18224A | 9,99:1 | 3:1 | cumple | Anillo de foco sobre tarjeta |
| `--foco` #FFC857 | `--papel` #0F1733 | 11,47:1 | 3:1 | cumple | Anillo de foco sobre papel |
| `--tinta` #F2F4FA | `--superficie` #18224A | 13,97:1 | 3:1 | cumple | Contorno de nodos del hilo y de la ruta |
| `--tinta` #F2F4FA | `--naranja` #FF9A4D | 1,91:1 | — | informativo | INFORMATIVO: contorno del nodo frente a su relleno naranja; el límite visible del nodo es contorno vs superficie (fila anterior) |
| `--naranja` #FF9A4D | `--superficie` #18224A | 7,3:1 | — | informativo | INFORMATIVO: naranja sin contorno contra tarjeta; por eso nunca se usa solo (regla de 16) |
| `--error` #FF8A8A | `--superficie` #18224A | 6,77:1 | 3:1 | cumple | Borde de campo con error |
| `--adv-tx` #FFD98A | `--superficie` #18224A | 11,37:1 | 3:1 | cumple | Borde de campo con advertencia y señales |

## 4. Tema de Tailwind (`prototipo/css/tailwind-theme.css`)

Archivo completo en el repositorio (≈ 40 líneas). Verificado el 27-oct-2026 con `tailwindcss` y `@tailwindcss/cli` 4.3.3 (MIT). El modo oscuro no requiere `dark:` en los colores porque los tokens cambian; `dark:` queda para casos de estructura.

## 5. Pasos para implementar (T-40)

1. Copiar `tokens.css` y `tailwind-theme.css` a `frontend/src/` y `@import` en `index.css` en ese orden.
2. Copiar los dos WOFF2 y las licencias a `frontend/src/assets/fonts/` (o instalar `@fontsource-variable/manrope` 5.3.0 y `@fontsource-variable/source-sans-3` 5.3.1; mismos archivos).
3. Poner `<html lang="es-CO">` y `<meta name="color-scheme" content="light dark">`.
4. Comprobar «Año de gestión: ¿qué pasó?» en ambas fuentes.

**Criterio de aceptación.** Todos los pares de §3 con «NO CUMPLE» = 0 en ambas tablas; el tema de Tailwind compila; las fuentes se cargan desde el propio origen (cero solicitudes a dominios externos en la pestaña de red).
