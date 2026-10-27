# 02 · Ilustraciones SVG propias

**Objetivo.** Documentar las ilustraciones del módulo para que cualquiera las use, las adapte o las rehaga sin perder el estilo.
**Entradas.** `ilustraciones/*.svg`, `prototipo/assets/sprite-gam.svg`, `diseno/02_tokens.md`.
**Licencia y origen.** Dibujadas para este manual; **sin logotipos, sin marcas y sin derivados de ilustraciones de terceros**. Los iconos pequeños (documento, portapapeles, personas, calendario, círculo con marca) son lucide 1.61.0 (ISC), ya empaquetados en `diseno/prototipo/assets/` (`TK-04`).

## 1. Reglas de dibujo

1. Retícula de **64 × 64**; trazo de **3** con extremos y uniones redondeados; sin degradados, sombras ni brillos.
2. Una tinta (`--g-sello-trazo` o `--g-emblema-trazo`) y un acento amarillo (`--g-sello-fondo`, `--g-emblema-acento`).
3. **El aro cosido:** toda insignia lleva un aro punteado interior (`stroke-dasharray: 3 3.2`), la «costura» que une la insignia con el hilo.
4. Los colores se declaran con `var(--token, #respaldo)`: dentro de una página con los tokens cambian con el tema; como archivo suelto usan el respaldo claro.
5. Cada ilustración lleva `<title>` (texto alternativo). En el sprite, el que usa `<use>` pone `role="img"` y `aria-label` con **el estado** («Insignia Cumplidor, en progreso»).

## 2. Catálogo

| Archivo | Id en el sprite | Qué dibuja (texto alternativo) | Dónde se usa |
|---|---|---|---|
| `sello-primer-paso.svg` | `g-sello-primer-paso` | Tres escalones que suben hacia una meta | Insignia Primer paso |
| `sello-aprendiz.svg` | `g-sello-aprendiz` | Libro abierto | Insignia Aprendiz |
| `sello-cumplidor.svg` | `g-sello-cumplidor` | Cronómetro con una marca de verificación | Insignia Cumplidor |
| `sello-cuentas-claras.svg` | `g-sello-cuentas-claras` | Hoja de cuentas con renglones y una marca | «Próximamente» |
| `sello-constante.svg` | `g-sello-constante` | Tres eslabones enlazados | «Próximamente» |
| `sello-mejora-visible.svg` | `g-sello-mejora-visible` | Barras que suben con una flecha | «Próximamente» |
| `sello-conector.svg` | `g-sello-conector` | Tres nodos unidos | «Próximamente» |
| `tramo-semilla.svg` | `g-tramo-semilla` | Una semilla sobre la tierra | Emblema del nivel 1 |
| `tramo-brote.svg` | `g-tramo-brote` | Un tallo con dos hojas | Nivel 2 |
| `tramo-constructor.svg` | `g-tramo-constructor` | Tres ladrillos apilados | Nivel 3 |
| `tramo-impulsor.svg` | `g-tramo-impulsor` | Escalones que suben hacia un punto | Nivel 4 y estación «Meta» |
| `tramo-lider.svg` | `g-tramo-lider` | Estrella de cuatro puntas dentro de una brújula | Nivel 5 |
| `tramo-referente.svg` | `g-tramo-referente` | Un faro con rayos de luz | Nivel 6 |
| `carrete-vacio.svg` | `g-carrete-vacio` | Un carrete de hilo con el extremo suelto | Estados vacíos |
| (solo en el sprite) | `g-paisaje` | Dos colinas suaves | Fondo decorativo de «Tu ruta»; **decorativo, sin texto alternativo** |

## 3. Estados de la insignia (se resuelven con variables, no con archivos distintos)

| Estado | Variables en la tarjeta | Cómo se distingue sin color |
|---|---|---|
| Ganada | `--g-sello-fondo: var(--amarillo)`, `--g-p: 100` | Aro continuo completo + texto «Ganada» |
| En progreso | `--g-sello-fondo: var(--superficie)`, `--g-sello-trazo: var(--tinta)`, `--g-p: 80` | Arco parcial del aro + «En progreso · llevas 4 de 5» |
| Bloqueada / próximamente | `--g-sello-fondo: var(--deshab-bg)`, `--g-sello-trazo: var(--texto-suave)` | Borde discontinuo de la tarjeta + «Próximamente» |

## 4. Uso

```html
<!-- EJEMPLO -->
<svg class="sel" role="img" aria-label="Insignia Cumplidor, ganada" style="--g-p:100">
  <use href="#g-sello-cumplidor"/>
</svg>
```

Peso del sprite completo: 9,2 KB (**1,4 KB con gzip**). Los 14 archivos sueltos suman 10,6 KB (5,4 KB con gzip).

## Criterio de aceptación

1. Cada ilustración tiene texto alternativo y no usa color como único portador de significado.
2. Las insignias se ven y se distinguen en claro y oscuro (`90_revision.md` §4).
3. No hay logotipos ni obras de terceros.
