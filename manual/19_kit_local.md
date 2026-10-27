# 19 · Kit de trabajo local y auditoría v2 (Ronda 2, F19)

**Objetivo.** (1) Dejar listo el kit local para construir con agentes de programación: skills, servidores MCP y subagentes, con instalación paso a paso, verificación y reparto de tareas por agente. (2) Auditar el manual v2: cada tarea Must con especificación, prueba y responsable; horas por persona; contradicciones; versiones; `INDEX.md` y `PROYECTO_CLAUDE.md` actualizados; decisiones pendientes y riesgos.

**Entradas.** `12`–`18`, `tareas/`, `backlog.csv`, `kit/agentes/`, `INDEX.md`, `PROYECTO_CLAUDE.md`.

**Fecha de consulta:** 27-oct-2026. Fuentes: registros de npm y Packagist, documentación de Claude Code (`code.claude.com/docs/en/sub-agents`, `/mcp`, `/skills`), documentación de Laravel Boost (`laravel.com/docs/13.x/boost`) y clones superficiales de los repositorios para auditar contenido.

---

## Parte 1 · Kit local

### 1.1 Reglas de seguridad del kit (obligatorias)

1. **Nada con `@latest`.** Versión o commit fijo en cada skill, servidor MCP y paquete (`15` §2.3).
2. **Clonar, leer, copiar, verificar el hash.** Nunca `curl … | sh` ni `npx` de un paquete que no se ha leído. Si hay duda, usar el subagente `auditor-de-dependencias` (§1.5) en un clon dentro de un directorio nuevo y vacío.
3. **Un servidor MCP puede exponer a inyección de instrucciones** si trae contenido externo: la documentación de Claude Code lo advierte («Servers that fetch external content can expose you to prompt injection risk», `/mcp`, 27-oct-2026). Se instala solo lo que aporta valor demostrado y con alcance de proyecto.
4. **Credenciales:** nada de claves en `.mcp.json` ni en `.claude/`; variables de entorno fuera del repositorio.
5. **Datos que salen del equipo:** se documentan por herramienta (§1.3). Ningún dato real del CDE existe en el proyecto (RNF-14), por lo que lo único que puede salir son consultas de documentación y nombres de paquetes.

### 1.2 Inventario recomendado

| # | Elemento | Tipo | Prioridad | Quién lo instala | Tiempo | Para qué |
|---|---|---|---|---|---|---|
| K-1 | `frontend-design` (Anthropic) | Skill | Must | María Paula | 0,1 h | Dirección de diseño no genérica (`15` §2.3) |
| K-2 | `verificacion-antes-de-terminar` = `verification-before-completion` (obra/superpowers) | Skill | Should | Santiago | 0,1 h | Obliga a mostrar evidencia (comandos de §9 de la spec) antes de declarar terminado |
| K-3 | `composition-patterns` (Vercel) | Skill | Could | María Paula | 0,1 h | Arquitectura de componentes |
| K-4 | `docs/web-interface-guidelines.md` (copia fija) | Documento | Should | María Paula | 0,1 h | Lista de accesibilidad y formularios; sin descarga en tiempo de ejecución |
| K-5 | `ui-ux-pro-max` (solo `src/ui-ux-pro-max`) | Skill | Could | María Paula | 0,25 h | Paletas, tipografías y gráficos de referencia (requiere Python 3, PA-28) |
| K-6 | Laravel Boost 2.10.3 | Paquete de desarrollo + servidor MCP | Should | Santiago | 0,4 h | Documentación de Laravel por versión, esquema de BD y consultas de solo lectura para el agente |
| K-7 | Playwright MCP 0.0.83 | Servidor MCP | Could | Julián | 0,3 h (+ descarga de navegador) | Que el agente abra la aplicación y compruebe pantallas |
| K-8 | 5 subagentes (`kit/agentes/*.md`) | Subagentes | Must | Julián | 0,25 h | Reparto de trabajo con roles y permisos acotados |

Total del kit: **≈ 1,7 h** si se instala todo (Must + Should ≈ 0,95 h), repartido en tres personas y hecho en la **plantilla previa**, antes del 28-oct. Esas horas salen de la lista «Antes del 28-oct» de `INDEX.md`: la verificación de `[NO VERIFICADO]` (90 min) ya se hizo en F12 y libera ≈ 1 h por persona.

### 1.3 Detalle, instalación paso a paso y verificación

#### K-1 · `frontend-design` y K-3 · `composition-patterns`, K-4 · guía de Vercel
Procedimiento, hashes y comprobación: `15` §2.3 (commit `dbd4588f…` para `frontend-design`, commit `063bee94…` para `composition-patterns`, sha256 de `command.md` `d246b026…0234`). Verificación de que están activas: escribir `/frontend-design` y preguntar «¿qué skills tienes disponibles?» (documentación de Claude Code, `/skills`).

#### K-2 · `verification-before-completion` (obra/superpowers)
- **Origen:** https://github.com/obra/superpowers · MIT · commit auditado `2ce8aa15d05bd57213e6f746f953aafb7ded7a8b` (2026-10-21) · 304 263 estrellas (deps.dev).
- **Auditoría:** `SKILL.md` de 3 646 bytes, sin otros archivos, sin comandos de red ni de instalación. sha256 `2befe7fc55bcadaa3d97dd9e8efeb633d2561c0ebe74c5a8b17c4d9e7e4520b3`.
- **Instalar solo esa carpeta** en `.claude/skills/verification-before-completion/`. **No** instalar el plugin completo: su gancho `SessionStart` inyecta un texto «EXTREMELY_IMPORTANT» que fuerza flujos de lluvia de ideas y planes (≈ 14 skills) que contradicen el flujo del manual (especificación ya escrita) y consumen tiempo de las 25 h. El gancho se revisó (solo lee un `SKILL.md` local y lo emite como contexto; sin red), por lo que el motivo para no instalarlo es de tiempo, no de seguridad.
- **Verificar:** `/verification-before-completion` reconocido.

#### K-5 · `ui-ux-pro-max`
Procedimiento y auditoría en `15` §2.1–§2.3 (commit `28b3b8dee8c976df4fa3e94aed4e092ad43fcb03`, MIT, v2.15.0). Copiar solo `src/ui-ux-pro-max`; **no ejecutar el CLI del repositorio** (contiene operaciones de red). Uso: `python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<consulta>" --domain color` para consultar las bases `colors.csv` (192 filas) y `typography.csv` (74 filas), solo como referencia; la paleta del proyecto ya está decidida en `16`.

#### K-6 · Laravel Boost
- **Origen:** https://github.com/laravel/boost · MIT · v2.10.3 (Packagist, 2026-10-07) · 3 664 estrellas · último commit `30e24b7` (2026-10-17). Compatible con Laravel 13 (`illuminate/* ^13.0`, `laravel/mcp ^1.0`, `php ^8.2`).
- **Qué hace** (doc oficial, 27-oct-2026): `composer require laravel/boost --dev`, luego `php artisan boost:install`, que genera guías para agentes (`CLAUDE.md`, `AGENTS.md`), skills y la configuración `.mcp.json`; si ya existe un `CLAUDE.md`, solo reemplaza su propio bloque `<laravel-boost-guidelines>`. Si Claude Code no se configura solo: `claude mcp add -s local -t stdio laravel-boost php artisan boost:mcp`.
- **Auditoría del código** (clon superficial): herramientas MCP `search-docs`, `database-query`, `database-schema`, `database-connections`, `last-error`, `read-log-entries`, `browser-logs`, `get-absolute-url`, `record-rule` y `tinker`.
  - `database-query` es de solo lectura, **impuesto por una transacción de solo lectura de la base de datos**, además del filtro de palabras de escritura.
  - `tinker` (ejecuta PHP en la aplicación) está **desactivada por defecto** (`config('boost.tinker_tool_enabled', false)`): no activarla.
  - `search-docs` envía a `https://boost.laravel.com/api/docs` las consultas, los nombres de paquetes y su versión mayor (p. ej. `laravel/framework` `13.x`). No envía código ni datos de la base de datos.
  - Existen funciones opcionales de skills remotas (`skills.laravel.cloud`, `raw.githubusercontent.com`): **no usarlas**.
  - Solo se registra en entorno `local` o con `APP_DEBUG=true`.
- **Instalación (Santiago, rama `chore/kit-boost`):**
  1. `cd backend && composer require laravel/boost --dev` (queda en `require-dev`; la imagen de producción usa `composer install --no-dev`).
  2. `php artisan boost:install` y elegir solo Claude Code.
  3. **Revisar el diff** de `CLAUDE.md`, `.mcp.json` y `.claude/` antes de hacer commit; conservar nuestro `CLAUDE.md` (Boost solo toca su bloque).
  4. Anotar la versión instalada en `docs/VERSIONES.md`.
- **Verificar:** en Claude Code, abrir `/mcp` y ver `laravel-boost` conectado; pedir «lista el esquema de la tabla empresas» tras la primera migración.
- **Riesgo aceptado:** envío de consultas de documentación a un tercero de confianza (Laravel). **Si se prefiere cero salida:** no instalar K-6; la documentación oficial se consulta con el navegador.

#### K-7 · Playwright MCP (opcional)
- **Origen:** https://github.com/microsoft/playwright-mcp · Apache-2.0 · `@playwright/mcp` 0.0.83 (npm, 2026-09-28) · 38 474 estrellas · último commit `0c4107a` (2026-10-22).
- **Auditoría:** el repositorio de 40 archivos no contiene llamadas de red propias; la documentación sugiere `npx @playwright/mcp@latest` (**no usar**: fijar `@0.0.83`). Depende de una **versión alfa** de `playwright` (`1.64.0-alpha-…`) y de descargar un navegador (cientos de MB): por eso es opcional. El README mismo recomienda la CLI con skills para agentes de programación por consumir menos contexto.
- **Alternativa recomendada sin instalar nada nuevo:** `@playwright/test` 1.64.1 y `@axe-core/playwright` 4.14.0 ya están en `15` §3; el agente puede escribir y ejecutar pruebas con ellos.
- **Configuración si se usa** (EJEMPLO de `.mcp.json`, sin claves):
```
{ "mcpServers": { "playwright": { "command": "npx", "args": ["@playwright/mcp@0.0.83"] } } }
```
- **Verificar:** `/mcp` muestra `playwright`; pedir «abre http://localhost:5173 y dime el título de la página».

#### Evaluados y no recomendados
| Candidato | Motivo |
|---|---|
| Context7 (`@upstash/context7-mcp` 4.4.4, MIT, 63 497 ★, commit `d956160` 2026-10-26) | Envía consultas a `context7.com` y contiene módulos de telemetría (se puede desactivar, pero hay que configurarlo); Laravel Boost cubre la documentación de Laravel y el resto se consulta en la documentación oficial |
| `@modelcontextprotocol/server-postgres` 0.6.2 y `@modelcontextprotocol/server-github` 2025.4.8 | Marcados «deprecated» en npm («Package no longer supported») |
| `@modelcontextprotocol/inspector` 2.12.0 | Tiene script `postinstall`; es una herramienta de depuración de MCP que no necesitamos |
| `@modelcontextprotocol/server-filesystem` 2.0.1 | Redundante: el agente ya lee y escribe archivos |
| Plugin completo `obra/superpowers` | Ver K-2 (costo de tiempo) |
| Servidor GitHub MCP oficial (`github/github-mcp-server`) | No auditado en esta sesión; el equipo usa Git y `gh` |
| Skills de las listas «awesome» (ComposioHQ, travisvn, VoltAgent, hesreallyhim) | Sin revisión individual; una por una solo con el auditor |

#### K-8 · Subagentes
Formato verificado (documentación de Claude Code, `/sub-agents`, 27-oct-2026): archivo Markdown en `.claude/agents/` con encabezado YAML; campos obligatorios `name` y `description`; opcionales `tools`, `disallowedTools`, `model` (`sonnet`, `opus`, `haiku`, `fable`, un ID completo o `inherit`), etc. Los subagentes de proyecto se versionan con el repositorio.

Archivos listos en `manual/kit/agentes/` (cada uno ≤ 16 líneas):

| Archivo | Rol | Permisos |
|---|---|---|
| `implementador-backend.md` | Ejecuta una tarea de backend leyendo solo su spec | Leer, editar, escribir, Bash |
| `implementador-frontend.md` | Ejecuta una tarea de frontend con `16` | Leer, editar, escribir, Bash |
| `revisor-de-spec.md` | Revisa un diff contra la spec | Solo lectura (`disallowedTools: Edit, Write`) |
| `verificador.md` | Ejecuta los comandos de §9 y reporta evidencia | Solo lectura + Bash |
| `auditor-de-dependencias.md` | Audita skills, MCP y paquetes antes de instalarlos | Solo lectura + Bash |

**Instalación (Julián, 0,25 h):** (1) `mkdir -p .claude/agents && cp manual/kit/agentes/*.md .claude/agents/` en el repositorio de desarrollo; (2) abrir Claude Code y ejecutar `/agents` para ver los cinco; (3) probar con «Usa el subagente verificador para la tarea T-00». **Verificar:** los cinco aparecen y `verificador` devuelve «VERIFICADO», «PARCIAL» o «FALLÓ».

### 1.4 Qué agente hace qué tarea

| Tipo de tarea | Agente de ejecución | Verificación | Revisión humana |
|---|---|---|---|
| Backend (T-10..T-16, T-18, T-20, T-21, T-23, T-25, T-26, T-30, T-31, T-41..T-43, T-48, T-51) | `implementador-backend` | `verificador` | Compañero según rotación `07` §2 (S→J→MP→S) |
| Frontend (T-17, T-19, T-22, T-24, T-27, T-28, T-40, T-44..T-47, T-49, T-50, T-54) | `implementador-frontend` | `verificador` + checklist `16` §13 | Idem |
| Mixtas (T-11, T-12, T-13, T-14, T-42, T-43, T-44) | Ambos (primero backend, luego frontend), o el humano dueño | `verificador` | Idem |
| Proceso (T-00, T-01, T-90..T-97) | Humanos (no se delegan) | — | Los tres |
| Instalación de skills o MCP nuevos | `auditor-de-dependencias` | hash | Santiago |

### 1.5 Flujo por tarea con agente (10 min de sobrecarga máxima)

1. Crear rama `feat/<modulo>-<tarea>` y verificar dependencias en `tareas/_INDEX.md`.
2. Pedir: «Usa el subagente `implementador-backend` para ejecutar `T-12`. Lee solo `manual/tareas/T-12.md`.»
3. Pedir: «Usa el subagente `verificador` para `T-12`.»
4. Pedir al compañero revisor: «Usa `revisor-de-spec` para `T-12` en la rama `feat/empresas-t12`.»
5. Corregir bloqueantes, abrir PR a `develop`, esperar CI verde, fusionar.
6. Si algo falla dos veces con el agente, el humano toma la tarea (regla de `07` §8).

**Importante:** el agente **no decide**. Si la spec no alcanza, el humano decide, lo anota en `docs/DECISIONES.md` y actualiza la spec. El agente nunca cambia el alcance.

---

## Parte 2 · Auditoría v2 (27-oct-2026)

Comprobaciones ejecutadas con un script sobre `backlog.csv`, `tareas/` y los `.md` del manual (el script vive en el scratchpad de la sesión, no en el repositorio).

### 2.1 Resultados

| # | Comprobación | Resultado |
|---|---|---|
| A1 | Cada tarea Must o Should del backlog tiene `tareas/T-XX.md` | ✔ 43 de 43 |
| A2 | Cada requisito Must de `01` §11 (22 RF + 13 RNF = 35) aparece en el campo `req` de al menos una tarea Must | ✔ 35 de 35 (se añadieron las etiquetas RNF-01/02/03/07/08/09/10/11/12 a T-02, T-10..T-14, T-16, T-20 durante esta auditoría) |
| A3 | Cada requisito Must tiene prueba en `08` §1 y cada spec tiene sección de pruebas | ✔ 35 de 35 en `08` (RNF-01/02 agrupadas); 43 de 43 specs con pruebas; `08` §1.1 lista las pruebas nuevas |
| A4 | Toda tarea tiene responsable | ✔ 48 de 48 (T-00, T-01, T-90..T-93: «Todos») |
| A5 | Dependencias | ✔ 0 dependencias rotas en `backlog.csv` |
| A6 | Sin «TBD» ni «según convenga» en tareas | ✔ (solo aparece en la plantilla como prohibición) |
| A7 | Contradicciones entre archivos | ✔ las encontradas se anotaron con marca R2 y causa (ver §2.3) |
| A8 | Versiones | ✔ las de `03` §3 coinciden con `12` §2; las `[NO VERIFICADO]` restantes tienen plan (§2.5) |
| A9 | `INDEX.md` y `PROYECTO_CLAUDE.md` actualizados | ✔ |

### 2.2 Balance de horas por persona

| Persona | Día 1, Núcleo | + Nivel 2 | + Nivel 3 | Día 2 (T-92..T-97) | Déficit con Núcleo frente a 10,75 h | Déficit con Núcleo frente a 11,75 h (incluye 1 h de ensayo H2 usada como desborde) |
|---|---|---|---|---|---|---|
| Santiago | 13,25 | 14,25 | 14,5 | T-96: 1,0 | 2,5 | 1,5 |
| Julián | 13,75 | 14,0 | 15,0 | T-92: 0,5 · T-94: 1,0 | 3,0 | 2,0 |
| María Paula | 13,25 | 15,75 | 16,5 | T-95: 1,0 · T-97: 0,75 | 2,5 | 1,5 |
| **Equipo** | **40,25** | **44,0** | **46,0** | — | **8,0** | **5,0** |

Estas cifras coinciden con `07` §5.2, `14` §6 y `tareas/_INDEX.md`. **El plan no cierra por persona** (déficit declarado, C-18): hay 8,0 h de déficit de equipo frente a las 10,75 h por persona de `07` §5 (5,0 h si se cuenta también la hora de ensayo H2 como desborde, base usada en `99` PA-30). La brecha se cierra con las decisiones de PA-30 (dos pasadas, mover T-25, contingencias de `07` §7), que quedan **pendientes de decisión humana en T-01**; el manual no las aplica por su cuenta.

### 2.3 Contradicciones detectadas y cómo quedaron

| # | Entre | Qué | Tratamiento |
|---|---|---|---|
| 1 | `01` RF-21, `05` §6, `08` §1 vs. `13`/`14` | Reporte PDF/CSV/XLSX frente a CSV + vista imprimible | Se anotó «R2, C-11» en `01`, `05`, `08` |
| 2 | `04` §8, `05` §8/§11/§12, `08` vs. `14` | Importación XLSX y reversión de la importación completa | Se anotó «R2, C-15» en `04`, `05`, `08`, `07` |
| 3 | `06` §5 vs. `16` | Paleta | `06` §5 marcado «SUPERADO» (C-22) |
| 4 | `03` §3 v1 vs. `12` | Versiones de React, Node y paquetes | `03` corregido |
| 5 | `09` §5–§6 vs. `18` | Bloque de gamificación y demo de 5 pasos | `18` manda (C-23, C-24) |
| 6 | `06` M2 (Nivel 3 · 280/400) vs. `18` (Nivel 4 en la demo) | El ejemplo del wireframe es ilustrativo; el seeder arranca a Marcela con 435 puntos (C-25) | `T-30` actualizado |
| 7 | `13` A4 (ahorro de 0,25 h por RF-04) vs. `14` | Ahorro inexistente (RF-04 no tenía tarea en v1) | Eliminado de `13`; el balance usa +5,0 h |
| 8 | `16` §7 (`per_page` 100) vs. `05` §3 (máx. 50) | Paginación | `16` corregido a 50 |

### 2.4 Qué sigue siendo «simulado»
Datos 100 % sintéticos; correo a buzón de pruebas hasta definir SMTP (PA-03); texto legal en borrador (PA-18); diagnóstico propio hasta recibir el instrumento del CDE (PA-17).

### 2.5 Verificaciones pendientes (`[NO VERIFICADO]`) y su plan

| ID | Qué | Plan |
|---|---|---|
| NV-05 | ISO/IEC 25010:2023 (iso.org devolvió 403) | Usar los nombres del TyC; no citar números de requisitos |
| NV-08 | Ley 1581/2012 y Decreto 1377/2013 (sitio oficial sin respuesta) | Aviso en borrador y revisión de la oficina jurídica de la UNAB |
| NV-14, NV-18 | Cabeceras de seguridad (OWASP) y SUS promedio ≈ 68 | Verificar con el equipo con internet directo; si no, retirar la cifra |
| NV-16 | Cifras g de Sailer y Homner | Retirar la cifra del pitch (queda «efectos pequeños y positivos») |
| NV-20, NV-21, NV-23, NV-24, NV-25 | Precios y funciones de competidores | Solo citar «precio de lista, consulta 26-oct-2026» o retirar; Airtable Team US$20 verificado |
| NV-26 | Rendimiento en el hardware del laboratorio | Presupuesto y método (`15` §8); medir el 29-oct |
| Instalación real | Descarga de paquetes bloqueada en la sesión de redacción | Tarea previa K + `12` pasos 1–7 en una red con acceso directo |
| shadcn/ui | CLI no ejecutada (rechazada por el clasificador) | `15` §7, con revisión humana de los archivos generados |
| `pg_trgm` en PostgreSQL 18.6 | Medido en 16.15 | Repetir las consultas de `12` §2.5 en la plantilla |

### 2.6 Decisiones pendientes (lista final)

Las 10 de `INDEX.md` (stack, autenticación, despliegue, esqueleto previo, reparto, sueño, congelamiento, recortes, canal de recordatorios, nombre/voces) **más**:

| # | Decisión | Recomendación | Decide | Cuándo |
|---|---|---|---|---|
| 11 | PA-30: cómo cerrar el déficit de 5,0 h (base de 11,75 h; dos pasadas, mover T-25, contingencias) | Opciones 1 + 2 + 3 de `99` §K.6 | Los tres | T-01 (28-oct 10:00) |
| 12 | Portafolio de diferenciadores y niveles/puertas (`13` §4) | Núcleo + puertas | Los tres | T-01 |
| 13 | Ahorros A1–A3 (CSV sin XLSX, PDF por impresión, shadcn/ui) | Aceptarlos | Santiago (A1, A2), María Paula (A3) | T-01 |
| 14 | PA-29: usar la paleta de los documentos del CDE sin logotipo | Sí; preguntar al CDE (Q-28) | CDE | 28-oct 8:30 |
| 15 | PA-27: orden del Nivel 2 según prioridad del CDE (Q-26) | Preguntar | CDE | 28-oct 8:30 o V1 |
| 16 | PA-28: Python 3 en los tres portátiles (skill `ui-ux-pro-max`) | Si falta, omitir K-5 | Equipo | Antes del 28-oct |
| 17 | Instalar Laravel Boost (K-6) o evitar toda salida de consultas | Instalar | Santiago | Antes del 28-oct |
| 18 | Tinker de Boost: mantener desactivado | Sí | Santiago | Antes del 28-oct |

### 2.7 Riesgos (actualizados)

| Riesgo | Prob. | Impacto | Mitigación | Dónde |
|---|---|---|---|---|
| El Núcleo no cabe antes del FF (5,0–8,0 h de déficit de equipo según la base) | Alta | Alto | Dos pasadas, mover T-25, contingencias, cortes de `13` | PA-30, `tareas/_INDEX.md` |
| Instalación real de paquetes no verificada | Media | Alto | Plantilla previa con `12` pasos 1–7 | `12` |
| Una skill, MCP o paquete comprometido (cadena de suministro) | Baja-Media | Alto | Versión/commit/hash fijo; auditor; sin plugin completo | `15`, §1.1 |
| shadcn/ui no se instala como se espera (A3) | Media | Bajo | T-40 vuelve a 1,5 h | `15` §7 |
| La demo depende de cifras del seeder no leídas | Media | Medio | Leer el 29-oct; versiones A/B/C | `18` §3, §5 |
| Contraste real distinto del calculado | Baja | Medio | Manda axe; corregir tokens | `16` §11, T-96 |
| Servidor/red del laboratorio | Media | Alto | Plan B local, video, imágenes Docker | `03` §8, `08` §7 |
| Datos o secretos en el repositorio | Baja | Alto | `.env.example`; `git secrets`-like revisión; datos sintéticos | `03` §8, `04` §6 |
| Cansancio y errores nocturnos | Alta | Alto | 4 h de sueño; revisión cruzada; FF | `07` |
| Texto legal incorrecto en el aviso de privacidad | Media | Medio | Etiquetado como borrador; revisión jurídica | `04` §6, PA-18 |

## Criterio de aceptación

1. Los 5 subagentes de `kit/agentes/` tienen encabezado válido (`name` y `description`) y se pueden copiar a `.claude/agents/`.
2. Cada skill, MCP y paquete del kit tiene origen, licencia, versión o commit, hash cuando es un archivo, y resultado de auditoría; ninguno usa `@latest`.
3. A1–A9 de §2.1 se repiten con éxito antes de entregar el manual.
4. `INDEX.md` y `PROYECTO_CLAUDE.md` reflejan los archivos 12–19, `tareas/` y `kit/`.
5. Las 8 decisiones nuevas de §2.6 están en `INDEX.md` y `99`.
