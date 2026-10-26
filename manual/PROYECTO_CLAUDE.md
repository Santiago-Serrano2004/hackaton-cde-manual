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
| `backend/` | Laravel 13 (PHP ≥ 8.3), monolito modular en `app/Modules/*` |
| `frontend/` | React + Vite + TypeScript + Tailwind 4 |
| `docker/`, `docker-compose.yml` | Orquestación local: `db`, `backend`, `frontend`, `worker`, `scheduler`, `mailpit` |
| `docs/` | `API.md`, `DEMO.md`, `DECISIONES.md`, `RESPUESTAS_CDE.md`, `VERSIONES.md`, `USABILIDAD.md`, `sql_control.sql` |

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
- **Frontend:** componentes función; TanStack Query para datos; react-hook-form + zod para formularios; Tailwind (sin CSS-in-JS); tokens de color y contrastes de `06` §5; estados vacío/carga/error en toda pantalla; fuentes del sistema (sin CDN).
- **Gamificación:** puntos solo por hechos verificables, idempotentes por (persona, reto, referencia) - `06` §7.
- **Pruebas:** Pest para back; prioridad: MatrizRolesTest, Dedup/Fusión, Importación, concurrencia de cupo, idempotencia de puntos, recordatorios, cuadre SQL, DatosDemoTest.
- **Ramas:** `main` desplegable; `develop` integración; `feat/<modulo>-<tarea>`; PR con CI verde y revisión cruzada; sin force push.

## Propiedad de módulos (evitar conflictos)
- Santiago: Seguridad, Empresas, Importación, Reportes (back), Historial.
- Julián: infraestructura, Citas, Recordatorios, Eventos, DemoSeeder.
- María Paula: design system, Diagnósticos, Proyectos y planes, Gamificación, portal del emprendedor, dashboard (front).

## Antes de cualquier cambio
1. Lee la tarea `T-xx` en `07_plan_construccion.md` y su DoD.
2. Revisa los requisitos de `01_requisitos.md` y los criterios de aceptación.
3. Si cambias un contrato de API, actualiza `docs/API.md` y avisa al dueño del front que lo consume.
