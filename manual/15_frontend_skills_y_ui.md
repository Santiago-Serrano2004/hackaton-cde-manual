# 15 · Frontend de alto impacto: skills, librerías y recursos (Ronda 2, F15)

**Objetivo.** Fijar la pila de UI con versiones exactas y costo medido, elegir los skills para el agente de programación (auditados y con versión fijada), registrar lo descartado y dar un presupuesto de rendimiento para un portátil de gama media con proyector.

**Entradas.** `03_stack.md` §3, `12_verificacion.md` §2.3, `13_diferenciadores.md`, `14_backlog.md` (T-17, T-40, T-47, T-49).

**Fecha de consulta:** 27-oct-2026 (00:00–01:30 UTC).

## 1. Método y límites (leer antes de confiar en las cifras)

| Dato | Cómo se obtuvo | Límite |
|---|---|---|
| Versión, licencia, fecha de publicación, `peerDependencies`, scripts de instalación | Registro oficial de npm (`registry.npmjs.org`) | Es la fuente primaria de cada paquete |
| Estrellas y licencia del repositorio | `api.deps.dev` (Google Open Source Insights), 27-oct-2026 | **No** es GitHub: `api.github.com` y `github.com` devolvieron 403 en esta sesión. `deps.dev` deja la licencia vacía o "non-standard" en varios repos: en esos casos vale la licencia de npm o del archivo `LICENSE` leído |
| Fecha del último commit | `git clone --depth 1` anónimo (el proxy lo permite) + `git log -1` | Solo se hizo en los repos de skills. Para librerías de npm se usa **la fecha de la última publicación en npm** como indicador de mantenimiento, y se dice así |
| Contenido de skills | Clon local leído y buscado con `grep` (comandos de red, `eval`, base64, `curl`, `wget`, instrucciones tipo "ignora lo anterior") | La revisión es de ese commit; otro commit exige otra revisión |
| Tamaño | Compilación real con Vite 8.3.5, `npm install` en Node 22.22.0 y medición con gzip/brotli del JS de salida, 14 entradas | Mide JS; no mide CSS ni fuentes |
| Funcionamiento | Cada entrada compilada se abrió en Chromium (Playwright) y se revisó la consola | Montaje sin errores; no prueba accesibilidad ni uso real |
| Rendimiento en el equipo del laboratorio | **No medido** | Se fijan presupuestos y un método de medición (§8) |

Comando `npx` de terceros: el comando `npx shadcn@4.22.1 init` **no se ejecutó** en esta sesión (el clasificador de seguridad lo rechazó por ser código externo no revisado). Lo que sí se hizo: leer `package.json` publicado (sin scripts de instalación, 32 dependencias, un binario `shadcn`) y la documentación oficial de instalación para Vite. Queda como tarea previa humana (§7).

## 2. Skills y plugins para el agente de programación

### 2.1 Candidatos investigados

| Repositorio | URL | ★ (deps.dev) | Licencia | Último commit | Versión / commit auditado | Decisión |
|---|---|---|---|---|---|---|
| anthropics/skills (skill `frontend-design`) | https://github.com/anthropics/skills | 182 636 | Apache-2.0 (archivo `LICENSE.txt` de la skill; el repo mezcla licencias por skill) | 2026-10-09 | commit `dbd4588f9e1033efb41dad4bef2f7947c8993d44` | **Instalar** |
| anthropics/claude-code (plugin `frontend-design`) | https://github.com/anthropics/claude-code | 152 379 | n/d en deps.dev; `plugin.json` v1.1.0 | no medido (no se clonó) | su `SKILL.md` es **idéntico** (mismo sha256) al de anthropics/skills | No hace falta: es la misma skill |
| vercel-labs/agent-skills · `composition-patterns` | https://github.com/vercel-labs/agent-skills | 32 821 | MIT (frontmatter de la skill) | 2026-08-28 | commit `063bee94c3f4df8453406c830b0a7df0f2860278` | **Instalar (opcional, Could)** |
| vercel-labs/agent-skills · `react-best-practices` | ídem | ídem | MIT | ídem | ídem | No: orientada a Next.js/servidor (70 reglas, 424 KB); consume contexto sin beneficio para Vite |
| vercel-labs/agent-skills · `web-design-guidelines` | ídem | ídem | sin licencia declarada en el frontmatter | ídem | ídem | **No tal como viene** (ver §2.2); sí su contenido copiado y fijado |
| vercel-labs/agent-skills · `react-view-transitions` | ídem | ídem | MIT | ídem | ídem | No: `<ViewTransition>` de React no está verificado como estable |
| nextlevelbuilder/ui-ux-pro-max-skill | https://github.com/nextlevelbuilder/ui-ux-pro-max-skill | 138 866 | MIT (`skill.json`, `LICENSE`) | 2026-10-26 | commit `28b3b8dee8c976df4fa3e94aed4e092ad43fcb03`, v2.15.0 | **Instalar (opcional, solo la carpeta `src/ui-ux-pro-max`)** |
| obra/superpowers | https://github.com/obra/superpowers | 304 263 | MIT | 2026-10-21 | commit `2ce8aa1`, v7.0.1 | Se evalúa en F19 (proceso, no diseño) |
| VoltAgent/awesome-agent-skills | https://github.com/VoltAgent/awesome-agent-skills | 36 029 | MIT | 2026-10-25 | `ec7ae69` | Lista de enlaces: consultar, **no instalar** |
| hesreallyhim/awesome-claude-code | https://github.com/hesreallyhim/awesome-claude-code | 56 202 | "non-standard" en deps.dev; no leída | 2026-10-26 | `36283ed` | Lista: consultar, no instalar |
| ComposioHQ/awesome-claude-skills | https://github.com/ComposioHQ/awesome-claude-skills | 77 665 | no declarada en deps.dev | 2026-07-24 | `be2a406` (17 MB) | **Descartado**: repositorio de proveedor comercial con integraciones de terceros, sin licencia verificada |
| travisvn/awesome-claude-skills | https://github.com/travisvn/awesome-claude-skills | 15 462 | no declarada en deps.dev | 2026-04-28 (≈6 meses sin commits) | `1da55aa` | **Descartado por abandono relativo** |

Las estrellas son indicador de popularidad, **no de seguridad**. Las listas "awesome" solo apuntan a skills de terceros: cada skill listada exige su propia revisión.

### 2.2 Resultado de la auditoría de contenido

| Skill | Qué se revisó | Hallazgo |
|---|---|---|
| `frontend-design` (anthropics/skills) | `SKILL.md` (9 390 bytes) y `LICENSE.txt`; solo 2 archivos; búsqueda de `curl`, `wget`, `fetch`, `http`, `eval`, `exec`, `base64`, `npm`, `pip`, `ssh`, `token`, `secret`, "ignore previous" | Solo texto de guía de diseño. Sin scripts, sin URLs, sin comandos. Pide un plan de diseño, revisión contra el brief, y evitar tópicos de "diseño generado por IA" (cremas con serif y terracota, fondo casi negro con acento ácido, tarjetas redondeadas idénticas, etiquetas en mayúsculas con puntos medios) |
| `composition-patterns` (vercel-labs) | 14 archivos, todos `.md`/`.json`; búsqueda de las mismas cadenas | Solo reglas de arquitectura de componentes. Sin scripts |
| `web-design-guidelines` (vercel-labs) | `SKILL.md` | **Descarga instrucciones en cada uso** desde `https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md` (rama `main`, mutable) y le dice al agente que las siga. Es una puerta abierta a cambiar las instrucciones del agente sin que el equipo lo note. Se leyó hoy ese archivo: 8 055 bytes, sin comandos ni URLs de envío de datos, solo reglas de accesibilidad y formularios. **Recomendación:** no instalar la skill; copiar ese `command.md` al repositorio como `docs/web-interface-guidelines.md` (sha256 `d246b026…0234`) y revisarlo a mano antes de cada uso |
| `ui-ux-pro-max` (nextlevelbuilder) | `src/ui-ux-pro-max/` (96 archivos, 3,8 MB: `scripts/*.py`, `data/*.csv`, `templates/`) y el CLI del repo | Los scripts del paquete (`search.py`, `core.py`, `design_system.py`, `reasoning_contract.py`) **no importan nada de red ni subprocesos**; `validate_data.py` solo usa `urllib.parse`. Requiere Python 3 y se niega a instalar nada por su cuenta. **Riesgo:** el repo también contiene un CLI (`cli/`) y skills auxiliares con operaciones de red (`update.ts`, `github.ts`, `fetch-background.py`, `shadcn_add.py`): **no usar el CLI ni esas skills** |
| Hook de `superpowers` | `hooks/session-start` | Solo lee un `SKILL.md` local y lo emite como contexto; sin red. Reservado para F19 |

### 2.3 Skills a instalar y cómo

Principio: **clonar, leer, copiar la carpeta de la skill a `.claude/skills/` y comprobar el hash**. Nunca ejecutar instaladores descargados (`curl … | sh`, `npx` de terceros sin revisión).

| # | Skill | Prioridad | Tiempo | Quién |
|---|---|---|---|---|
| 1 | `frontend-design` | Must (para MP) | 0,1 h | MP |
| 2 | `ui-ux-pro-max` (solo `src/ui-ux-pro-max`) | Could | 0,25 h | MP |
| 3 | `composition-patterns` | Could | 0,1 h | MP |
| 4 | `docs/web-interface-guidelines.md` (copia fija de la guía de Vercel) | Should | 0,1 h | MP |

Todo esto se hace en la **plantilla previa** (antes del 28-oct), no en las 25 h; ver §7.

EJEMPLO (instalación de la skill 1; sustituir la ruta del repositorio del equipo):

```
git clone https://github.com/anthropics/skills ../_skills_src
git -C ../_skills_src checkout dbd4588f9e1033efb41dad4bef2f7947c8993d44
mkdir -p .claude/skills && cp -r ../_skills_src/skills/frontend-design .claude/skills/
sha256sum .claude/skills/frontend-design/SKILL.md   # d91970639e9f5c37682ac7ab60094d35f1c7c1f38d731bd56396563aee10c1d3
sha256sum .claude/skills/frontend-design/LICENSE.txt # 0d542e0c8804e39aa7f37eb00da5a762149dc682d7829451287e11b938e94594
```

Para `ui-ux-pro-max`: mismo procedimiento con el repositorio y el commit de la tabla, copiando **solo** `src/ui-ux-pro-max` a `.claude/skills/ui-ux-pro-max`. Para `composition-patterns`: commit `063bee94…`, hash de `SKILL.md` `e38e0eaa609316b10423a9a138ed95e35099accd3f735585295c8a8f165c28a3`.

**Cómo comprobar que están activas** (documentación de Claude Code, `code.claude.com/docs/en/skills`, consultada el 27-oct-2026): un archivo `.claude/skills/<nombre>/SKILL.md` crea el comando `/<nombre>`. Verificación: (1) abrir Claude Code en el repositorio, escribir `/frontend-design` y confirmar que se reconoce; (2) preguntar "¿qué skills tienes disponibles?" y ver que aparece `frontend-design` con su descripción; (3) si no aparece, la documentación indica revisar que la descripción tenga palabras clave y que Claude Code no haya rechazado el nombre.

**Riesgos aceptados y control:** (a) una skill es texto que el agente obedece: por eso se fija commit y hash; (b) cualquier actualización pasa por revisión de 5 min y nuevo hash; (c) ninguna skill del manual necesita secretos ni red en tiempo de ejecución.

## 3. Pila de UI recomendada (tabla final)

Versiones: las de `12_verificacion.md` §2.3, comprobadas con `npm install` el 27-oct-2026. Coste = JS gzip adicional sobre el esqueleto de React (66,2 KB gzip), compilado y montado en Chromium sin errores de consola.

| Capa | Paquete y versión exacta | Licencia | Última publicación npm | Coste gzip medido | Motivo | Instalación |
|---|---|---|---|---|---|---|
| Base | `react`, `react-dom` 19.3.1 | MIT | 14-oct-2026 | 66,2 KB (base) | Elegido en `03` | `npm i react@19.3.1 react-dom@19.3.1` |
| Build | `vite` 8.3.5, `@vitejs/plugin-react` 6.1.2 | MIT | 21-oct / 5-oct-2026 | — | Node ^20.19 o ≥22.12 | `npm i -D vite@8.3.5 @vitejs/plugin-react@6.1.2` |
| Estilos | `tailwindcss` y `@tailwindcss/vite` 4.3.3 | MIT | 16-jul-2026 | — | Pedido en el chat; plugin de Vite sin PostCSS | `npm i tailwindcss@4.3.3 @tailwindcss/vite@4.3.3` |
| Tipos | `typescript` 5.9.3 | Apache-2.0 | 30-sep-2025 | — | Fijo (`12` C-06) | `npm i -D typescript@5.9.3` |
| Rutas | `react-router` 7.18.4 | MIT | 15-sep-2026 | +12,8 KB | La 8.5.0 exige Node ≥ 22.22 | `npm i react-router@7.18.4` |
| Datos de servidor | `@tanstack/react-query` 5.105.0, `axios` 1.20.0 | MIT | 26-oct / 26-ago-2026 | +27,1 KB (ambos) | Caché y estados de carga/error | `npm i @tanstack/react-query@5.105.0 axios@1.20.0` |
| Formularios | `react-hook-form` 7.91.0, `zod` 4.6.7, `@hookform/resolvers` 5.9.2 | MIT | 23-oct / 12-oct / — | +34,2 KB (los tres) | Validación compartida; cargar por ruta | `npm i react-hook-form@7.91.0 zod@4.6.7 @hookform/resolvers@5.9.2` |
| Tablas | `@tanstack/react-table` 8.21.3, `@tanstack/react-virtual` 3.14.23 | MIT | 14-abr-2025 / 26-oct-2026 | +21,4 KB (ambos) | Miles de filas con virtualización | `npm i @tanstack/react-table@8.21.3 @tanstack/react-virtual@3.14.23` |
| Gráficos | `recharts` 3.10.1 | MIT | 25-jul-2026 | **+101,8 KB** (radar + barras) | Radar y barras declarativos | `npm i recharts@3.10.1` |
| Animación | `motion` 14.6.0 (import `motion/react`) | MIT | 22-oct-2026 | +44,1 KB; **+28,8 KB con `LazyMotion` y `m`** | Logros, transiciones; respeta `useReducedMotion` | `npm i motion@14.6.0` |
| Iconos | `lucide-react` 1.61.0 | ISC | 21-oct-2026 | +1,8 KB (5 iconos) | Importa solo los usados | `npm i lucide-react@1.61.0` |
| Paleta Ctrl+K | `cmdk` 1.1.1 | MIT | 14-mar-2025 | +16,0 KB | Sin estilos, accesible; peer React ^19 declarado; **monta sin errores en React 19.3.1** | `npm i cmdk@1.1.1` |
| Notificaciones | `sonner` 2.0.8 | MIT | 9-ago-2026 | +9,1 KB | Toasts accesibles para puntos y deshacer | `npm i sonner@2.0.8` |
| Confeti | `canvas-confetti` 1.9.4 | ISC | 25-oct-2025 | +3,9 KB | Opción `disableForReducedMotion` | `npm i canvas-confetti@1.9.4` |
| QR | `qrcode.react` 4.2.0 | ISC | 11-dic-2024 | +5,8 KB | Genera el QR de asistencia; el celular lo lee con su cámara | `npm i qrcode.react@4.2.0` |
| Componentes base | **shadcn/ui** (CLI `shadcn` 4.22.1, MIT) con `radix-ui` 1.8.1, `class-variance-authority` 0.7.1, `clsx` 2.1.1, `tailwind-merge` 3.7.0, `tw-animate-css` 1.4.0 | MIT / Apache-2.0 (cva) | 18-oct-2026 (CLI) | **no medido** | Copia el código de los componentes al repositorio (revisable), sobre Radix y Tailwind. Sustento del ahorro A3 de `13` | Ver §7. `PROPUESTA` con prueba previa |
| Fuentes | `@fontsource-variable/*` (OFL-1.1), p. ej. Inter 5.3.0, Manrope 5.3.0, Source Sans 3 5.3.1, Fraunces 5.3.0, JetBrains Mono 5.3.0 | OFL-1.1 | 2026 | n/m | Empaquetadas, sin CDN (plan B sin internet, `03` §8) | Se elige en F16 |
| Pruebas front | `vitest` 5.0.5, `eslint` 10.13.0, `prettier` 3.9.10 | MIT | oct-2026 | dev | Utilidades y CI | `npm i -D vitest@5.0.5 eslint@10.13.0 prettier@3.9.10` |
| Accesibilidad automática | `@axe-core/playwright` 4.14.0 (MPL-2.0) y `@playwright/test` 1.64.1 | MPL-2.0 / Apache-2.0 | oct-2026 | dev | Auditoría de contraste y roles en T-96 | `npm i -D @axe-core/playwright@4.14.0 @playwright/test@1.64.1` |

Repositorios de respaldo (estrellas por `deps.dev`, 27-oct-2026): cmdk 13 039 (MIT), sonner 13 061 (MIT), recharts 27 648 (MIT), TanStack Query 50 467, TanStack Table 28 516, TanStack Virtual 7 155 (MIT), react-hook-form 44 882 (MIT), zod 44 168 (MIT), react-router 56 611 (MIT), Tailwind 97 951 (MIT), Vite 83 496 (MIT), shadcn/ui 126 149 (MIT), Radix primitives 19 418 (MIT), canvas-confetti 12 821, qrcode.react 4 292 y lucide 25 175 (licencias "non-standard" para deps.dev; las de npm: ISC).

**Nota sobre dependencias antiguas:** `cmdk` (mar-2025), `qrcode.react` (dic-2024), `class-variance-authority` (nov-2024) y `@tanstack/react-table` 8 (abr-2025) llevan más de seis meses sin publicar. Se aceptan porque compilan y montan con React 19.3.1, son pequeñas y de funciones acotadas; para `cmdk` el plan alterno es un diálogo propio (`13` D-01).

## 4. Qué se descartó y por qué

| Candidato | Motivo |
|---|---|
| `framer-motion` | Mismo autor y versión que `motion`; se usa el nombre actual (C-09) |
| `react-router` 8.x | Exige Node ≥ 22.22.0 |
| `@tanstack/react-table` 9.x | Salto de versión mayor sin necesidad |
| `@hookform/resolvers` 6.0.0 | Rompe `npm install` por peers opcionales (ERESOLVE) |
| `typescript` 7.x | Compatibilidad con el ecosistema sin verificar |
| `html5-qrcode` 2.3.8 | Sin publicar desde abr-2023; no hace falta escanear en el navegador |
| `fuse.js` | La tolerancia a errores se hace en PostgreSQL con `pg_trgm`; +9 KB sin beneficio |
| `jspdf` (30 MB desempaquetado) y `html2canvas` 1.4.1 (sin publicar desde 2022) | El PDF se resuelve con vista imprimible (`13` D-11) |
| `@react-pdf/renderer` 4.9.0 | Pesado y no necesario para el MVP |
| `react-aria-components` (6,9 MB) y `@base-ui/react` (10,4 MB) | Muy completos pero pesados de aprender; shadcn/Radix cubre lo necesario |
| `chart.js`, `nivo`, `visx` | Más peso o API imperativa; `recharts` ya cubre radar y barras |
| `date-fns` 4.4.0 (10,9 MB) y `react-day-picker` 10.0.2 | Se usa `Intl` del navegador; selector de fecha nativo `<input type="date">` en el MVP (`PROPUESTA`) |
| `react-to-print` | El navegador ya imprime la vista imprimible |
| Skills: `react-best-practices`, `react-view-transitions`, ComposioHQ, travisvn | Ver §2.1 |
| CDN de fuentes o scripts | Violaría el plan B sin internet |

## 5. Verificación realizada

Compilación con Vite 8.3.5 + Tailwind 4.3.3 + TypeScript 5.9.3 de 14 entradas (React solo, router, query+axios, formularios, recharts con radar y barras, motion, motion con `LazyMotion`, cmdk, sonner, confeti, QR, tabla+virtual, iconos, fuse): **14 de 14 compilan**. Montaje en Chromium: sin errores de consola, con tres salvedades esperadas en el banco de pruebas: `router` y `cmdk` no pintan dentro de `#root` (la ruta no coincide con la URL de prueba y el diálogo se renderiza en un portal) y `query` registra un 404 porque llama a `/x`, que no existe. El radar de `recharts` pinta (≈10 KB de HTML SVG). Lo que **no** se verificó: accesibilidad, rendimiento en equipos reales, la CLI de shadcn y el comportamiento en Firefox/Safari.

## 6. Contradicciones con v1 y entre archivos

| # | Contradicción | Tratamiento |
|---|---|---|
| C-19 | `03` §5.4 instalaba `lucide-react`, `recharts` y `framer-motion` sin medir; `recharts` pesa +101,8 KB gzip | Mantener `recharts` pero **cargarlo por ruta** (`React.lazy`) solo en dashboard, brechas y diagnósticos; no entra en la carga inicial |
| C-20 | `13` D-01 dejaba `cmdk` como riesgo | Resuelto: monta con React 19.3.1; se queda `cmdk` y el diálogo propio solo como plan B |
| C-21 | `13` A3 supone que shadcn ahorra 0,5 h en T-40 | **Sin prueba**: se condiciona a la prueba de §7; si falla, T-40 vuelve a 1,5 h (`14`) |

## 7. Tarea previa (en la plantilla, antes del 28-oct) · 1,25 h, repartida

Esto sale de las 4 h de tareas previas de `INDEX.md`; no entra en las 25 h.

1. (MP, 0,5 h) En un directorio nuevo y vacío: `npm create vite@9 frontend -- --template react-ts`, instalar Tailwind según `ui.shadcn.com/docs/installation/vite` (sección "Existing Project") y ejecutar `npx shadcn@4.22.1 init -t vite`; **leer** los archivos generados antes de confirmar; agregar `button`, `input`, `dialog`, `table`, `card`, `sonner`.
2. (MP, 0,25 h) Medir el peso con `npm run build` y registrar el JS inicial gzip en `docs/PRESUPUESTO.md`.
3. (MP, 0,25 h) Instalar las skills 1 y 4 de §2.3 con los hashes indicados.
4. (J, 0,25 h) Comprobar en CI `npm run build` y un montaje con Playwright.
5. Si el paso 1 falla o el resultado pesa más de lo previsto, se anota y T-40 vuelve a 1,5 h.

## 8. Presupuesto de rendimiento (`PROPUESTA` con referencias verificadas)

| Métrica | Presupuesto | Fuente / método |
|---|---|---|
| JS inicial (login + portal) | ≤ 250 KB gzip. Estimado con lo medido: React 66 + router 13 + query/axios 27 + cmdk 16 + sonner 9 + iconos 2 ≈ 133 KB, más Radix/shadcn y código propio | Medición propia del 27-oct-2026; verificar con `npm run build` |
| Chunks bajo demanda | `recharts` (≈102 KB) solo en dashboard/brechas/diagnósticos; `motion` con `LazyMotion` (≈29 KB) | Medido |
| LCP | ≤ 2,5 s en el percentil 75 | web.dev/articles/lcp, última actualización 4-sep-2025 |
| INP | ≤ 200 ms | web.dev/articles/inp |
| Animación | Solo `transform` y `opacity`; ≤ 1 efecto de confeti por logro (≤ 60 partículas); duración 150–300 ms; con `prefers-reduced-motion` no hay movimiento | `canvas-confetti` ofrece `disableForReducedMotion`; `motion` ofrece `useReducedMotion`; MDN documenta `prefers-reduced-motion` (200 en la consulta) |
| Objetivos táctiles | ≥ 24×24 px CSS | WCAG 2.2 SC 2.5.8 (w3.org, texto "at least 24 by 24 CSS pixels" verificado) |
| Proyector del laboratorio | Texto del cuerpo ≥ 18 px y contraste AA reforzado en pantallas "hero" (se define en F16) | `PROPUESTA` |
| Equipo de gama media | Probar con estrangulamiento de CPU 4× y red "3G rápida" en Chromium (Playwright o DevTools) y registrar LCP/INP en `docs/PRESUPUESTO.md` | `PROPUESTA`; **no medido en hardware real** |
| Fuentes | ≤ 2 familias, WOFF2 variable empaquetado, `font-display: swap` | F16 |

## Criterio de aceptación

1. Toda versión de §3 coincide con `12_verificacion.md` §2.3 o está marcada "no medido".
2. Cada skill recomendada tiene URL, commit, licencia, hash y resultado de auditoría (§2).
3. Ninguna recomendación implica `curl | sh` ni `npx` sin lectura previa.
4. El presupuesto de §8 se registra y se cumple o se justifica en `docs/PRESUPUESTO.md` (tarea previa).
5. C-19..C-21 están en `99` §K y en `PROGRESO.md`.
