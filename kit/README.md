# Kit de Claude Code del equipo

Deja tu Claude Code listo para este proyecto con un comando: skills fijas y verificadas, los 5 subagentes y el `CLAUDE.md` del proyecto.

## Instalar (en el repo de desarrollo, no en este)

    git clone git@github.com:Santiago-Serrano2004/hackaton-cde-manual.git
    cd hackaton-cde-manual
    ./kit/instalar.sh /ruta/a/tu/repo-de-desarrollo            # lo esencial
    ./kit/instalar.sh --opcionales /ruta/a/tu/repo-de-desarrollo   # + composition-patterns y ui-ux-pro-max
    ./kit/instalar.sh --usuario                                # en ~/.claude, para todos tus proyectos

Requiere `git` y `sha256sum`. Es idempotente: no pisa lo que ya existe (usa `--forzar` para reinstalar).

## Qué instala

| Elemento | Origen y commit fijado | Verificación |
|---|---|---|
| `frontend-design` | github.com/anthropics/skills @ `dbd4588f9e10…` | sha256 de `SKILL.md` (Apache-2.0) |
| `verification-before-completion` | github.com/obra/superpowers @ `2ce8aa15d05b…` | sha256 de `SKILL.md` (MIT) |
| `composition-patterns` (opcional) | github.com/vercel-labs/agent-skills @ `063bee94c3f4…` | sha256 de `SKILL.md` (MIT) |
| `ui-ux-pro-max` (opcional) | github.com/nextlevelbuilder/ui-ux-pro-max-skill @ `28b3b8dee8c9…` | solo el commit fijado; es **consulta** (datos y scripts), no un comando `/` |
| 5 subagentes | `manual/kit/agentes/*.md` (este repo) | — |
| `CLAUDE.md` | `manual/PROYECTO_CLAUDE.md` (solo si no existe) | — |

Las skills de terceros **no se copian a este repo**: se descargan en el commit exacto que el manual auditó (`manual/15` §2.3 y `manual/19` §1.3) y el script se detiene si el hash no coincide. El script no ejecuta código del repo descargado.

## Comprobar que quedó bien
En Claude Code, abierto en tu repo de desarrollo: `/skills` (debe listar `frontend-design` y `verification-before-completion`) y `/agents` (los 5 subagentes).

## No incluido a propósito
- **Laravel Boost** y **Playwright MCP**: se instalan dentro del proyecto cuando exista el backend (`manual/19` §1.3, versiones fijas, sin `@latest`).
- **`web-design-guidelines`** (Vercel): descarga instrucciones de la rama `main` en cada uso; descartada (`manual/15` §2.2).
- **Context7**, plugin completo de `superpowers`, skills de listas "awesome": ver «Evaluados y no recomendados» en `manual/19` §1.3.
- **Credenciales:** nada de claves en `.claude/` ni en `.mcp.json`.

## Antes de instalar algo nuevo
Que lo revise el subagente `auditor-de-dependencias`, fije commit y hash, y lo anote en `docs/DECISIONES.md`.
