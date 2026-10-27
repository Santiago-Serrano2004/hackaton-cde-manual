#!/usr/bin/env bash
# Instala el kit de Claude Code del equipo (skills fijas + subagentes + CLAUDE.md) en un repo de desarrollo.
# Cada skill de terceros se descarga en el COMMIT EXACTO que el manual audito (manual/15 §2.3 y manual/19 §1.3)
# y se verifica su sha256 antes de copiarla. No ejecuta nada del repo descargado.
#
# Uso:  ./kit/instalar.sh [--usuario] [--opcionales] [--forzar] [DESTINO]
#   DESTINO       repo de desarrollo donde crear .claude/ (por defecto: el directorio actual)
#   --usuario     instalar en ~/.claude (para todos tus proyectos) en vez de en DESTINO/.claude
#   --opcionales  ademas: composition-patterns y ui-ux-pro-max (Could en el manual)
#   --forzar      sobrescribir lo que ya exista
set -euo pipefail

AQUI="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO="$(dirname "$AQUI")"
USUARIO=0; OPC=0; FORZAR=0; DESTINO=""
for a in "$@"; do
  case "$a" in
    --usuario) USUARIO=1 ;; --opcionales) OPC=1 ;; --forzar) FORZAR=1 ;;
    -h|--help) sed -n 2,11p "${BASH_SOURCE[0]}"; exit 0 ;;
    -*) echo "opcion desconocida: $a" >&2; exit 2 ;;
    *) DESTINO="$a" ;;
  esac
done
DESTINO="${DESTINO:-$PWD}"
if [ "$USUARIO" = 1 ]; then BASE="$HOME/.claude"; else BASE="$DESTINO/.claude"; fi
mkdir -p "$BASE/skills" "$BASE/agents"
TMP="$(mktemp -d)"; trap 'rm -rf "$TMP"' EXIT

ok()   { printf '  [ok]   %s\n' "$*"; }
skip() { printf '  [omit] %s\n' "$*"; }
die()  { printf '  [ERROR] %s\n' "$*" >&2; exit 1; }

# fetch_pinned <url> <sha-completo> <dir>  -> descarga SOLO ese commit y comprueba que es el pedido
fetch_pinned() {
  local url="$1" sha="$2" dir="$3"
  git init -q "$dir" && git -C "$dir" remote add origin "$url"
  git -C "$dir" fetch -q --depth 1 origin "$sha" || die "no se pudo descargar $sha de $url"
  git -C "$dir" -c advice.detachedHead=false checkout -q FETCH_HEAD
  [ "$(git -C "$dir" rev-parse HEAD)" = "$sha" ] || die "el commit descargado no coincide con $sha"
}

# instalar_skill <nombre> <url> <sha> <ruta-en-repo | buscar:nombre> <archivo-hash> <sha256-esperado|"">
instalar_skill() {
  local nombre="$1" url="$2" sha="$3" ruta="$4" fhash="$5" esperado="$6"
  local destino="$BASE/skills/$nombre"
  if [ -e "$destino" ] && [ "$FORZAR" = 0 ]; then skip "$nombre ya existe (usa --forzar)"; return; fi
  local clon="$TMP/src-$nombre"; fetch_pinned "$url" "$sha" "$clon"
  local origen
  case "$ruta" in buscar:*) origen="$(find "$clon" -type d -name "${ruta#buscar:}" -not -path '*/.git/*' | head -1)";; *) origen="$clon/$ruta";; esac
  [ -d "$origen" ] || die "no se encontro la carpeta de $nombre en el commit fijado"
  if [ -n "$esperado" ]; then
    local real; real="$(sha256sum "$origen/$fhash" | cut -d' ' -f1)"
    [ "$real" = "$esperado" ] || die "$nombre: sha256 de $fhash no coincide (esperado $esperado, obtenido $real). NO se instala."
  fi
  rm -rf "$destino"; cp -r "$origen" "$destino"
  ok "$nombre (commit ${sha:0:8}${esperado:+, sha256 verificado})"
}

echo "Destino: $BASE"
echo "Skills (Must/Should):"
instalar_skill frontend-design https://github.com/anthropics/skills.git \
  dbd4588f9e1033efb41dad4bef2f7947c8993d44 skills/frontend-design SKILL.md \
  d91970639e9f5c37682ac7ab60094d35f1c7c1f38d731bd56396563aee10c1d3
instalar_skill verification-before-completion https://github.com/obra/superpowers.git \
  2ce8aa15d05bd57213e6f746f953aafb7ded7a8b buscar:verification-before-completion SKILL.md \
  2befe7fc55bcadaa3d97dd9e8efeb633d2561c0ebe74c5a8b17c4d9e7e4520b3
if [ "$OPC" = 1 ]; then
  echo "Skills opcionales (Could):"
  instalar_skill composition-patterns https://github.com/vercel-labs/agent-skills.git \
    063bee94c3f4df8453406c830b0a7df0f2860278 buscar:composition-patterns SKILL.md \
    e38e0eaa609316b10423a9a138ed95e35099accd3f735585295c8a8f165c28a3
  instalar_skill ui-ux-pro-max https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git \
    28b3b8dee8c976df4fa3e94aed4e092ad43fcb03 src/ui-ux-pro-max SKILL.md ""
  echo "  nota: ui-ux-pro-max queda como material de CONSULTA (datos + scripts, sin SKILL.md: no crea el comando /ui-ux-pro-max)."
  echo "        Uso: python3 .claude/skills/ui-ux-pro-max/scripts/search.py \"<consulta>\" --domain color. NO ejecutes el CLI del repo (manual/15 §2.2)."
fi

echo "Subagentes del proyecto:"
for f in "$AQUI"/../manual/kit/agentes/*.md; do
  n="$(basename "$f")"
  if [ -e "$BASE/agents/$n" ] && [ "$FORZAR" = 0 ]; then skip "$n ya existe"; else cp "$f" "$BASE/agents/$n"; ok "$n"; fi
done

if [ "$USUARIO" = 0 ]; then
  echo "CLAUDE.md del proyecto:"
  if [ -e "$DESTINO/CLAUDE.md" ] && [ "$FORZAR" = 0 ]; then skip "ya existe $DESTINO/CLAUDE.md"
  else cp "$REPO/manual/PROYECTO_CLAUDE.md" "$DESTINO/CLAUDE.md"; ok "CLAUDE.md (de manual/PROYECTO_CLAUDE.md)"; fi
fi

cat <<MSG

Listo. Verifica en Claude Code (abierto en $DESTINO):
  /skills      -> debe listar frontend-design y verification-before-completion
  /agents      -> debe listar los 5 subagentes
Aparte (se instalan DENTRO del proyecto cuando exista el backend, ver manual/19 §1.3):
  Laravel Boost 2.10.3 (composer require laravel/boost --dev) y Playwright MCP @0.0.83 (opcional).
MSG
