# CLAUDE.md (copiar al repo de desarrollo del equipo)

Proyecto: sistema de gestión de la información del CDE UNAB con módulo de formación por recompensas (Hackatón UNAB Venture Challenge 2026). Manual completo en el repo `hackaton-cde-manual` (`manual/`). Fuente de verdad del reto: `inputs/01_TyC_y_cronograma_CDE.md` de ese repo.

## Reglas generales
- Español para interfaz, mensajes y documentación; código y commits en inglés.
- No inventes datos, versiones ni URLs. Si algo no está en el manual o en el código, pregunta o anótalo en `docs/DECISIONES.md`.
- Datos de demo 100 % sintéticos; nunca datos personales reales; nunca commitear `.env` (solo `.env.example`).
- No editar `vendor/`, `node_modules/`, `dist/`, `storage/`.
- Cada tarea del plan (`T-xx`) = un commit pequeño. Mensaje: `feat(modulo): ...` + `Refs T-xx`.
- Congelamiento de funciones: **29-oct 01:30**. Después solo correcciones `P0`. Entrega: etiqueta `v1.0` a las 8:45.

## Mapa
| Ruta | Qué es |
|---|---|
| `backend/` | Laravel 13 (13.38.0 verificado; PHP 8.3/8.4), PostgreSQL 18, Pest 4, monolito modular en `app/Modules/*` |
| `frontend/` | React 19.3.1 + Vite 8.3.5 + TypeScript 5.9.3 + Tailwind 4.3.3 (versiones fijas de `15` §3) |
| `docker/`, `docker-compose.yml` | Orquestación local: `db`, `backend`, `frontend`, `worker`, `scheduler`, `mailpit` |
| `docs/` | `API.md`, `DEMO.md`, `DECISIONES.md`, `RESPUESTAS_CDE.md`, `VERSIONES.md`, `USABILIDAD.md`, `PRESUPUESTO.md`, `ERRORES.md`, `sql_control.sql` |
| `.claude/skills/`, `.claude/agents/` | Skills y subagentes del kit (`manual/19_kit_local.md`, `manual/kit/agentes/`) |

## Comandos
- Levantar todo: `docker compose up -d`
- Backend: `cd backend` → `composer install`, `php artisan migrate:fresh --seed`, `php artisan test` (Pest), `./vendor/bin/pint` (formato), `php artisan schedule:work`, `php artisan queue:work`
- Frontend: `cd frontend` → `npm ci`, `npm run dev`, `npm run lint`, `npx tsc --noEmit`, `npm run build`, `npm test`
- Respaldo: `pg_dump` (ver `03` §8 del manual)

## Convenciones (resumen)
- **PHP:** PSR-12 con Pint; validación en Form Requests; lógica en Actions; controladores finos; respuestas con API Resources; tablas en español snake_case con soft delete; ningún módulo toca tablas de otro: usa Actions públicas o eventos de dominio.
- **Módulos:** Seguridad, Empresas, Diagnosticos, Proyectos, Citas, Eventos, Gamificacion, Reportes, Importacion, Historial (límites en `05` §2).
- **API:** `/api/v1`, JSON, Bearer (Sanctum con abilities), errores `{message, errors}`, paginación `?page=&per_page=` (máx. 50), 409 en duplicado exacto.
- **Seguridad:** denegar por defecto; Policies por pertenencia; throttle en login; auditoría de toda escritura; sin trazas en producción.
- **Frontend:** componentes función; TanStack Query para datos; react-hook-form + zod para formularios; Tailwind (sin CSS-in-JS); **tokens, contrastes y componentes de `manual/16_sistema_de_diseno.md`** (naranja `#F47B20` nunca como texto ni con texto blanco); estados vacío/carga/error en toda pantalla; fuentes empaquetadas con `@fontsource-variable` (Manrope y Source Sans 3), sin CDN; `recharts` solo en rutas con `React.lazy`.
- **Gamificación:** puntos solo por hechos verificables, idempotentes por (persona, reto, referencia) - `06` §7.
- **Pruebas:** Pest para back; prioridad: MatrizRolesTest, Dedup/Fusión, Importación, concurrencia de cupo, idempotencia de puntos, recordatorios, cuadre SQL, DatosDemoTest.
- **Ramas:** `main` desplegable; `develop` integración; `feat/<modulo>-<tarea>`; PR con CI verde y revisión cruzada; sin force push.

## Propiedad de módulos (evitar conflictos)
- Santiago: Seguridad, Empresas, Importación, Reportes (back), Historial.
- Julián: infraestructura, Citas, Recordatorios, Eventos, DemoSeeder.
- María Paula: design system, Diagnósticos, Proyectos y planes, Gamificación, portal del emprendedor, dashboard (front).

## Antes de cualquier cambio
1. Lee la especificación `manual/tareas/T-xx.md` (autocontenida) y, si hace falta contexto, su fila en `manual/14_backlog.md`. No cambies el alcance: si la spec no alcanza, decide el humano y lo anota en `docs/DECISIONES.md`.
2. Revisa los requisitos de `01_requisitos.md` y los criterios de aceptación.
3. Si cambias un contrato de API, actualiza `docs/API.md` y avisa al dueño del front que lo consume.

## Reglas del kit de agentes (Ronda 2)
- Subagentes en `.claude/agents/`: `implementador-backend`, `implementador-frontend`, `revisor-de-spec`, `verificador`, `auditor-de-dependencias`. Flujo por tarea en `manual/19_kit_local.md` §1.5.
- Skills en `.claude/skills/` con commit y hash fijos (`manual/15_frontend_skills_y_ui.md` §2.3). **Prohibido** instalar skills, plugins, servidores MCP o paquetes sin pasar por `auditor-de-dependencias`; nada con `@latest`; no activar `tinker` de Laravel Boost.
- Un agente no declara una tarea terminada sin ejecutar los comandos de §9 de su spec y mostrar la salida.
- Si algo falla dos veces, el agente se detiene y deja el diagnóstico; el humano decide.
- Versiones instaladas se anotan en `docs/VERSIONES.md`; no se actualizan dependencias durante las 25 h.

## Reglas de la Ronda 3 (plan que cabe; ver `manual/20_plan_que_cabe.md`)
- **Alcance por variante.** La sección 13 de cada `manual/tareas/T-xx.md` dice qué se construye en la variante A y B, las horas de cada una, la versión recortada («rojo») y la compuerta. Si la sección 13 dice «No se construye», **no se construye** aunque las secciones 1 a 12 la describan. Hasta que el equipo ratifique la variante en T-01 (`docs/DECISIONES.md`), se trabaja en A y se pasa a B solo cuando pasa la compuerta.
- **Tareas partidas.** T-11a (esquema raíz de `empresas`, catálogos y usuarios con rol) es lo **primero** del día y va a `develop` antes de las 10:45; T-10a/T-10b y T-43a/T-43b se entregan por separado.
- **Textos.** Todas las cadenas, estados vacíos y errores se copian de `manual/21_microcopy.md` por su clave a un único archivo de textos del frontend; no se escriben mensajes nuevos sin añadirlos allí. Lenguaje inclusivo sin símbolos (`21_microcopy.md` §1).
- **Catálogos y retos.** Los catálogos se cargan de `manual/21_catalogos.csv` y los casos de demostración de `manual/21_casos_demo.md` (Marcela Rojas empieza con **430** puntos; la empresa protagonista tiene 2 planes). Los retos se agregan con `RetosSeeder`, no con una pantalla.
- **Seguridad añadida.** CSP en el proxy desde el esqueleto; la exportación CSV antepone `'` a celdas que empiezan por `=`, `+`, `-` o `@`; el botón «Simular paso del tiempo» **no existe**; el QR de asistencia usa un token por evento (sin rotación).
- **No se agregan funciones.** Quedan aplazadas: calidad de datos (T-18/T-26/T-28), preguntas guiadas y mapa de calor (T-48/T-49), panel ISO y Nivel 3 (T-50..T-54), rachas, cola de validación, importación con mapeo, XLSX, tableros D1–D2, administración de catálogos y de retos en pantalla. T-17, T-19 y T-47 solo en la variante B.
- **Compuertas.** El tablero de seguimiento y las compuertas G-01..G-10 (`20` §6.3, §11) mandan: si a la hora indicada no está lo pedido, se corta lo indicado sin discusión.
- **Pausas.** Se cuentan dentro del colchón (`22` §7.3; PA-37).
