# 12 · Verificación de lo `[NO VERIFICADO]` (Ronda 2, F12)

**Objetivo.** Contrastar con fuentes primarias lo que v1 dejó como `[NO VERIFICADO]` (`99` §C–§J), fijar las versiones reales del stack y corregir `03_stack.md`.

**Entradas.** `99_preguntas_abiertas.md` (NV-01..NV-25), `03_stack.md`.

**Fecha de consulta de todo este archivo:** 26-oct-2026 (23:56 UTC) y 27-oct-2026 (00:00–00:10 UTC). Sesión en la nube con proxy.

## 1. Acceso a internet (prueba pedida por `PROMPT_2.md`)

| Destino | Resultado | Consecuencia |
|---|---|---|
| registry.npmjs.org (registro oficial de npm) | Accesible | Versiones, licencia, `engines`, `peerDependencies` y fecha de publicación de paquetes JS: **fuente primaria** |
| repo.packagist.org (registro oficial de Composer) | Accesible | Ídem para paquetes PHP (`require` de cada versión) |
| nodejs.org/dist/index.json, php.net (JSON de releases), postgresql.org, react.dev/versions, laravel.com/docs/13.x, w3.org, owasp.org, docs.docker.com | Accesibles | Fuente primaria de runtime y documentación |
| endoflife.date (API) | Accesible | Fuente secundaria (agregador); solo se usa para fechas de soporte y se cruza con la primaria |
| api.crossref.org | Accesible | Metadatos de DOI |
| api.github.com, github.com (HTML) | **Bloqueado** (403: el repositorio no está habilitado para la sesión) | No se pueden leer estrellas, último commit ni licencia desde GitHub; afecta a F15 (ver allí) |
| raw.githubusercontent.com | Accesible | Archivos de repos públicos |
| iso.org | 403 | NV-05 sigue sin verificar |
| funcionpublica.gov.co (Ley 1581) | Sin respuesta | NV-08 sigue sin verificar |
| hubspot.com/pricing | 200, pero precios cargados por JavaScript | NV-20 sigue sin verificar |
| salesforce.com/crm/starter/pricing | 404 | NV-21 sigue sin verificar |
| `composer` y `npm` en el contenedor | Resuelven dependencias; **la descarga de paquetes (zipball de api.github.com) falla** | Se verificó resolución de dependencias (`--no-install`, `--package-lock-only`), **no** la instalación ni la ejecución |

## 2. Tabla de verificación

Leyenda de resultado: ✅ confirmado con fuente primaria · ⚠️ confirmado pero **difiere de v1** (corregido) · ◐ parcial · ❌ no verificable desde aquí (queda en `99` §J).

### 2.1 Runtimes

| ID | Afirmación v1 | Fuente primaria | Valor verificado | Fecha | Resultado |
|---|---|---|---|---|---|
| NV-01 | Laravel 13 exige PHP ≥ 8.3, salió ~17-mar-2026, correcciones hasta Q3 2027, seguridad hasta 17-mar-2028 | laravel.com/docs/13.x/releases (tabla "Support Policy") | Laravel 13: PHP 8.3–8.5; lanzamiento 17-mar-2026; correcciones hasta Q3 2027; seguridad hasta 17-mar-2028. Packagist: `laravel/framework` v13.38.0 (20-oct-2026), `php: ^8.3` | 26-oct-2026 | ✅ |
| — | PHP 8.3 o 8.4 | php.net/releases (JSON) | 8.3.36, 8.4.27, 8.5.12, todos del 21-oct-2026; las tres ramas figuran como soportadas | 26-oct-2026 | ✅ |
| NV-02 | React 19.2.x (19.2.7) | react.dev/versions; registro npm | react.dev: "Latest version: 19.3"; npm `react` **19.3.1** (14-oct-2026), licencia MIT | 26-oct-2026 | ⚠️ difiere |
| NV-03 | PostgreSQL 18.6 / 17.11 / 16.15; PG 19 "anunciado" | postgresql.org/support/versioning y /docs/release | 18.6, 17.11, 16.15 vigentes (fin de soporte: 18 → 14-nov-2030, 17 → 8-nov-2029). Portada: "15-oct-2026: PostgreSQL 19 **RC 1**". PG 19 aún no es estable | 26-oct-2026 | ✅ |
| NV-04 | Node 24 LTS (24.19.0); Node 26 LTS en oct-2026 | nodejs.org/dist/index.json | Node **24.22.1** "Krypton" (LTS, 20-oct-2026); Node 22.23.4 "Jod" (LTS); Node 26.12.1 **todavía no es LTS** en el índice. endoflife.date: Node 26 pasa a LTS el 28-oct-2026 | 26-oct-2026 | ⚠️ (24.19.0 era incorrecto) |
| NV-11a | Vite 8 existe y exige Node ≥ 20.19 / 22.12 | npm `vite`; vite.dev/guide | `vite` **8.3.5** (21-oct-2026), `engines: ^20.19.0 \|\| >=22.12.0`. vite.dev: "Vite requires Node.js version 20.19+, 22.12+" | 26-oct-2026 | ✅ |
| NV-11b | Tailwind 4.3.x | npm `tailwindcss` | **4.3.3** (16-jul-2026), `latest`; `@tailwindcss/vite` 4.3.3 con `peerDependencies.vite: ^5.2.0 \|\| ^6 \|\| ^7 \|\| ^8` | 26-oct-2026 | ✅ |
| — | Docker Engine "actual" | docs.docker.com/engine/release-notes | Serie 29 (última vista: 29.9; la página marca modificación 20-oct-2026) | 27-oct-2026 | ◐ (versión exacta la fija el servidor; registrar `docker --version`) |
| — | Coolify v4.x | raw.githubusercontent.com/coollabsio/coolify, `config/constants.php` (rama v4.x) | `'version' => '4.5.1'` en la rama de desarrollo; **no** es necesariamente la versión instalada en el servidor del patrocinador | 27-oct-2026 | ◐ |

### 2.2 Paquetes PHP (resolución real con Composer 2.8.12, PHP 8.3.6, `--no-install`)

Prueba reproducible: `composer create-project laravel/laravel backend --no-install --no-scripts` creó el esqueleto **laravel/laravel v13.11.0** (`php ^8.3`, `laravel/framework ^13.17`, trae `phpunit/phpunit ^12.5.12` y `laravel/pint`). Luego `composer require ... --no-install` resolvió sin conflictos:

| ID | Paquete | Versión resuelta (fecha de publicación) | Requisito de plataforma | Compatible con Laravel 13 | Resultado |
|---|---|---|---|---|---|
| NV-09 | `laravel/sanctum` | 4.3.3 (23-jun-2026) | php ^8.2 | `illuminate/* ^11 \|\| ^12 \|\| ^13` | ✅. laravel.com/docs/13.x/sanctum: "Sanctum allows you to assign 'abilities' to tokens. Abilities serve a similar purpose as OAuth's 'scopes'" |
| NV-10 | `spatie/laravel-permission` | 8.3.2 (19-oct-2026) | php ^8.3 | `illuminate/* ^12 \|\| ^13` | ✅ |
| NV-10 | `maatwebsite/excel` | 4.0.6 (23-oct-2026) | php ^8.3 | `illuminate/support ^12 \|\| ^13` | ✅ (v1 decía "^13.0" sobre la línea 3.x; la resuelta es la **4.x**: su API puede diferir de tutoriales antiguos) |
| NV-10 | `barryvdh/laravel-dompdf` | 3.1.2 (21-feb-2026) | php ^8.1 | `illuminate/support ^9…^13` | ✅ |
| NV-10 | `php-open-source-saver/jwt-auth` | 2.9.3 (21-ago-2026); resuelve `^2.9` | php ^8.3 | `illuminate/* ^12 \|\| ^13` | ✅ compatible (sigue sin ser la decisión; D-11 se mantiene) |
| — | `laravel/pint` | 1.32.1 (10-sep-2026) | php ^8.3 | — | ✅ |
| — | `pestphp/pest` | 4.7.8 (resuelto en PHP 8.3); 5.3.3 existe pero exige **php ^8.4** | — | — | ⚠️ ver §3 |
| — | `pestphp/pest-plugin-laravel` | 4.1.0 con Pest 4 (laravel/framework 13.38.0 instalado en el lock); 5.0.1 exige php ^8.4 | — | — | ⚠️ ver §3 |
| — | `spatie/laravel-activitylog` | 5.1.3 (19-oct-2026) | **php ^8.4** | `^12 \|\| ^13` | ✅ (se usa solo si el servidor corre PHP 8.4; v1 la hace opcional: auditoría propia) |

### 2.3 Paquetes JS (resolución real con npm 11, Node 22.22.0, `--package-lock-only`)

Todas las versiones de abajo salen del registro oficial de npm (campo `latest`, fecha de publicación de esa versión) y del `package-lock.json` generado.

| Paquete | Versión | Fecha | Licencia | Compatibilidad verificada |
|---|---|---|---|---|
| `react`, `react-dom` | 19.3.1 | 14-oct-2026 | MIT | — |
| `vite` | 8.3.5 | 21-oct-2026 | MIT | Node ^20.19 \|\| >=22.12 |
| `@vitejs/plugin-react` | 6.1.2 | 5-oct-2026 | MIT | peer `vite ^8` |
| `tailwindcss`, `@tailwindcss/vite` | 4.3.3 | 16-jul-2026 | MIT | peer vite ≤ 8 |
| `typescript` | `latest` = 7.0.2 (8-jul-2026); última de la serie 5: 5.9.3 | — | Apache-2.0 | Ver §3 |
| `react-router` | `latest` = 8.5.0 exige **Node ≥ 22.22.0**; serie 7: **7.18.4** (15-sep-2026, Node ≥ 20) | — | MIT | §3 |
| `@tanstack/react-query` | 5.105.0 | 26-oct-2026 | MIT | react ^18 \|\| ^19 |
| `@tanstack/react-table` | `latest` = 9.3.1; serie 8: **8.21.3** (14-abr-2025) | — | MIT | §3 |
| `@tanstack/react-virtual` | 3.14.23 | 26-oct-2026 | MIT | react ≤ 19 |
| `axios` | 1.20.0 | 26-ago-2026 | MIT | — |
| `react-hook-form` | 7.91.0 | 23-oct-2026 | MIT | react ≤ 19 |
| `zod` | 4.6.7 | 12-oct-2026 | MIT | — |
| `@hookform/resolvers` | `latest` = 6.0.0 → **falla** `npm install` (ERESOLVE por peers opcionales); **5.9.2** instala | — | MIT | §3 |
| `recharts` | 3.10.1 | 25-jul-2026 | MIT | react ≤ 19 |
| `motion` / `framer-motion` | 14.6.0 (ambos, 22-oct-2026); `motion` exporta `./react` | — | MIT | react ^18 \|\| ^19 |
| `lucide-react` | 1.61.0 | 21-oct-2026 | ISC | react ≤ 19 |
| `cmdk` | 1.1.1 | **14-mar-2025** (más de 19 meses sin publicar) | MIT | react ^18 \|\| ^19 |
| `sonner` | 2.0.8 | 9-ago-2026 | MIT | react ^18 \|\| ^19 |
| `canvas-confetti` | 1.9.4 | 25-oct-2025 | ISC | — |
| `qrcode.react` | 4.2.0 | 11-dic-2024 | ISC | react ≤ 19 |
| `vitest` | 5.0.5 | 15-oct-2026 | MIT | Node ^22.12 \|\| ^24 \|\| >=26; vite 6–8 |
| `eslint` | 10.13.0 (la serie 9 sigue como `maintenance`: 9.39.5) | 16-oct-2026 | MIT | Node ^20.19 \|\| ^22.13 \|\| >=24 |
| `prettier` | 3.9.10 | 10-oct-2026 | MIT | — |
| `create-vite` | 9.3.1 | — | MIT | Node ^20.19 \|\| >=22.12 |

Resultado de conjunto: con las elecciones de §3, `npm install --package-lock-only` resolvió **sin errores** (react 19.3.1, react-router 7.18.4, recharts 3.10.1, motion 14.6.0, zod 4.6.7, resolvers 5.9.2, cmdk 1.1.1, react-table 8.21.3, vite 8.3.5, tailwind 4.3.3, vitest 5.0.5, eslint 10.13.0).

### 2.4 Bases de datos y normas

| ID | Afirmación v1 | Fuente primaria | Resultado |
|---|---|---|---|
| NV-12 | `pg_trgm` es módulo estándar; `similarity()` devuelve 0–1; índices con `gin_trgm_ops` | postgresql.org/docs/18/pgtrgm.html (muestra `similarity('word','two words')`, `word_similarity`, `strict_word_similarity`, `gin_trgm_ops`; indica que el módulo es *trusted*, instalable por no superusuarios con permiso CREATE sobre la base) | ✅ (el rango 0–1 se lee del ejemplo; confirmar `SELECT similarity('abc','abd')` en la plantilla) |
| NV-13 | Cola `database`, `schedule:work`, `lockForUpdate`, `Pest arch()` | laravel.com/docs/13.x/queues ("`database` queue driver … a database table to hold the jobs"), /scheduling (`schedule:work`), /queries (`lockForUpdate`) | ✅ las tres primeras. `arch()` de Pest: no se leyó la doc de Pest → ◐ (se usa solo en pruebas opcionales) |
| NV-06 | OWASP ASVS 5.0, publicado 30-may-2025 | owasp.org/www-project-application-security-verification-standard: "ASVS 5.0.0 Published 30 May 2025 Stable release" | ✅ (OWASP Top 10 2025: no verificado, ❌) |
| NV-19 | WCAG 1.4.3: 4,5:1 normal, 3:1 grande | w3.org/WAI/WCAG22/Understanding/contrast-minimum.html ("at least 4.5:1, except … Large Text … at least 3:1") | ✅ |
| NV-07 | Hamari et al. 2014, HICSS-47, pp. 3025-3034 | Crossref DOI 10.1109/HICSS.2014.377: título, autor, año 2014, páginas 3025-3034 | ✅ metadatos |
| NV-15 | Deterding et al. 2011, pp. 9-15 | Crossref 10.1145/2181037.2181040: "From game design elements to gamefulness", 2011, 9-15 | ✅ metadatos |
| NV-16 | Sailer y Homner, Educ. Psychol. Rev. 32(1):77-112 | Crossref 10.1007/s10648-019-09498-w: "The Gamification of Learning: a Meta-analysis", vol. 32, n.º 1, impreso mar-2020, pp. 77-112 (en línea 2019) | ✅ metadatos. **Las cifras g = 0,49 / 0,36 / 0,25 NO se verificaron** (Crossref no trae resumen) |
| NV-17 | Ryan y Deci 2000, Am. Psychol. 55(1):68-78 | Crossref 10.1037/0003-066X.55.1.68 | ✅ metadatos |
| NV-18 | SUS promedio ≈ 68 | No consultado | ❌ |
| NV-22 | Airtable Team US$20/usuario/mes anual | airtable.com/pricing: "Team plan … $20/user/month when billed annually"; "Business … $45/user/month when billed annually" | ✅ (los 50 000 registros por base: ❌ no visto) |
| NV-05 | ISO/IEC 25010:2023, 9 características | iso.org devuelve 403 | ❌ |
| NV-08 | Ley 1581/2012, Decreto 1377/2013 | Sitio oficial sin respuesta | ❌ |
| NV-14 | Cabeceras de seguridad | No consultado | ❌ |
| NV-20, 21, 23, 24, 25 | Precios y funciones de competidores | HubSpot (JS), Salesforce (404), resto no consultado | ❌ |

## 3. Decisiones que cambian respecto a v1 (registradas en `99` §K)

| ID | Cambio | Motivo (fuente en §2) | Costo |
|---|---|---|---|
| C-01 | React objetivo **19.3.1** (v1: 19.2.x) | react.dev y npm | 0 h: lo fija el lock |
| C-02 | Node: **24 LTS (24.22.1)**. No esperar a Node 26 | Node 26 se vuelve LTS el 28-oct-2026, el primer día del hackatón; usar LTS recién estrenado añade riesgo sin beneficio | 0 h |
| C-03 | `react-router` fijado en **7.18.4** (v1: sin versión) | La 8.5.0 exige Node ≥ 22.22.0; la 7.18.4 exige ≥ 20 y funciona con cualquier Node de la tabla | 0 h |
| C-04 | `@tanstack/react-table` **8.21.3** en vez de 9.x | La 9.x es salto de versión mayor; el equipo y los ejemplos conocidos usan 8; no hay ganancia para el MVP. `PROPUESTA` | 0 h |
| C-05 | `@hookform/resolvers` **5.9.2** | La 6.0.0 hace fallar `npm install` por conflicto de peers opcionales (ERESOLVE) | 0 h |
| C-06 | `typescript` **5.9.3** fijo, no 7.0.2 | La serie 7 existe (`latest`, 8-jul-2026) pero no se verificó compatibilidad con typescript-eslint ni con el plugin de React; la 5.9.3 es la última de la serie conocida. `PROPUESTA`, revisar en la plantilla con `npm run build` | 0 h |
| C-07 | Pruebas PHP: **Pest ^4 + pest-plugin-laravel ^4.1** (Pest 5 exige PHP 8.4). Quitar antes `phpunit/phpunit` del esqueleto | Resolución verificada con PHP 8.3.6 y Laravel 13.38.0; Pest 5 se resolvió solo ignorando la plataforma | 0 h |
| C-08 | `maatwebsite/excel` es **4.x**, no 3.x | Packagist | ≤ 0,25 h extra de lectura de su doc |
| C-09 | Animación: paquete **`motion`** (import `motion/react`) en lugar de `framer-motion` | Ambos en 14.6.0 y MIT; `motion` es el nombre actual; el paquete antiguo sigue publicándose | 0 h |
| C-10 | `cmdk` 1.1.1 sin publicar desde mar-2025: se mantiene solo si compila con React 19.3.1 (peer declara `^19`); alternativa nativa en F13/F15 | npm | ver F15 |

## 4. Resultado para `03_stack.md`

`03_stack.md` §3 y §5 se actualizaron en esta fase con las versiones de §2 y los comandos corregidos (instalación de Pest, `@hookform/resolvers@5`, `react-router@7`, `@tanstack/react-table@8`).

## 5. Lo que sigue sin verificar y cómo se cierra

Ver `99` §J (actualizado). Pendientes duros: NV-05, NV-08, NV-14, NV-18, NV-20, NV-21, NV-23, NV-24, NV-25, cifras de NV-16, y **la instalación y el arranque reales** (la descarga de paquetes falló en este entorno). Esto último es lo único que bloquea de verdad: se cubre con la tarea previa "plantilla" (`03` §5) y con el criterio de aceptación de abajo.

## Pasos numerados para repetir la verificación (Julián, 30 min, en el PC con internet directo)

1. `php -v` (≥ 8.3), `composer -V`, `node -v` (≥ 22.12 o 24 LTS), `npm -v`, `docker --version`, `docker compose version`; anotar en `docs/VERSIONES.md`.
2. `composer create-project laravel/laravel backend` y comprobar `laravel/framework` 13.x en `composer.lock`.
3. `cd backend && composer remove phpunit/phpunit --dev` y luego `composer require --dev pestphp/pest:^4 pestphp/pest-plugin-laravel:^4.1 -W`.
4. `composer require laravel/sanctum spatie/laravel-permission maatwebsite/excel barryvdh/laravel-dompdf`.
5. `npm create vite@9 frontend -- --template react-ts`, luego instalar las dependencias de `03` §5.4 y ejecutar `npm run build`.
6. En PostgreSQL: `CREATE EXTENSION IF NOT EXISTS pg_trgm; SELECT similarity('abc','abd');` debe devolver un número entre 0 y 1.
7. Registrar cualquier diferencia contra la tabla §2 en `99` §K.

## Criterio de aceptación

1. Cada fila de §2 tiene fuente, versión, fecha y resultado.
2. `03_stack.md` no contiene versiones distintas a las de §2 sin marca `[NO VERIFICADO]`.
3. Todo lo ❌ está en `99` §J con plan.
4. Los 10 cambios C-01..C-10 están en `99` §K y en `PROGRESO.md`.
