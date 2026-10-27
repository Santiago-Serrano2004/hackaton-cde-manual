# 03 · Stack, decisiones técnicas, flujo de trabajo y despliegue

**Objetivo.** Fijar el stack, las versiones (con fuente y fecha), los comandos de instalación, la estructura del repositorio, las convenciones, la estrategia de ramas para 3 personas y el plan de despliegue/respaldo/plan B.

**Entradas.** `01_requisitos.md`, `02_alcance_mvp.md`, preferencias del chat (resumen: el equipo votó React para el front, Laravel para el back, PostgreSQL, autenticación con JWT, monolito modular, Docker y despliegue en el servidor de un patrocinador con Coolify; Azure con crédito estudiantil como alternativa; las tres personas ya han trabajado con Laravel/PostgreSQL y Docker; el chat dice que se prepara una "plantilla" previa al hackatón).

**Regla de verificación.** Fecha de consulta de todo este archivo: **26-oct-2026**. Búsqueda web disponible solo con resultados de terceros; sitios oficiales no accesibles por proxy. Lo que no se pudo contrastar con la fuente primaria lleva `[NO VERIFICADO]` y está listado en `99_preguntas_abiertas.md` (NV-*). **Antes del 28-oct el equipo debe ejecutar los comandos de la §5 y anotar las versiones reales instaladas en `docs/VERSIONES.md` del repo de desarrollo.** Ronda 2: las versiones de §3 se verificaron contra fuentes primarias (`12_verificacion.md`).

---

## 1. Decisión: ¿mantener el stack del chat?

Criterios (peso): curva real del equipo (30), velocidad de entrega (25), riesgo (20), ISO 25010 (15), operación/despliegue (10). Puntaje 1–5.

| Alternativa | Curva | Velocidad | Riesgo | ISO | Despliegue | Total /5 ponderado |
|---|:-:|:-:|:-:|:-:|:-:|:-:|
| **A. React (Vite) + Laravel API + PostgreSQL, monolito modular** | 5 | 4 | 4 | 4 | 4 | **4,3** |
| B. Laravel + Inertia/React (sin API separada) | 3 | 5 | 4 | 4 | 5 | 4,0 |
| C. Laravel + Livewire/Blade | 4 | 5 | 5 | 3 | 5 | 4,3 (empata en puntos, pierde en percepción de "interacción" y en conocimiento del chat) |
| D. Django + React | 2 | 3 | 3 | 4 | 4 | 3,1 (no estaba en el voto; el equipo ya trabaja Laravel) |
| E. Next.js + Supabase/Firebase | 2 | 4 | 3 | 3 | 4 | 3,2 (dependencia externa, menos control, RLS exige aprendizaje) |
| F. Microservicios | 2 | 2 | 1 | 4 | 2 | 2,2 (el propio chat lo descarta: "monolito modular") |

**Decisión D-10:** opción **A**. Razones: (1) concuerda con el voto del equipo y lo que domina; (2) separa front y back para que dos personas trabajen en paralelo con un contrato de API; (3) la opción C es plausible como contingencia si el front se atrasa (mismo back, vistas Blade) pero se descarta como plan principal porque la experiencia interactiva/gamificada se logra más rápido en React con componentes y animaciones. La puntuación es una `PROPUESTA` basada en el chat; ajustar si el equipo discrepa (PA-13).

## 2. Decisión: autenticación

El chat pidió "JWT con tokens". Opciones:

| Opción | Pros | Contras |
|---|---|---|
| Laravel Sanctum con **token de API** (Bearer) | Paquete oficial de Laravel; docs 13.x describen tokens con *abilities* (scopes); sin dependencia de terceros | No es JWT firmado/stateless en sentido estricto |
| Sanctum modo **SPA con cookies** | Más seguro contra robo de token (cookie HttpOnly), CSRF integrado | Requiere mismo dominio/subdominio y configuración CORS/CSRF; falla con puertos distintos si se configura mal |
| Paquete JWT de terceros (p. ej. php-open-source-saver/jwt-auth) | Cumple literalmente "JWT" | Compatibilidad con Laravel 13 `[NO VERIFICADO]`; riesgo de bloqueo en hora 1 |

**Decisión D-11 (PROPUESTA):** Sanctum con **token Bearer** de corta vida (abilities por rol) como implementación de la autenticación "por tokens" que pidió el equipo; si el front y la API comparten dominio en producción, pasar a modo SPA con cookies. Si el equipo insiste en JWT, validar compatibilidad con `composer require ... --dry-run` antes del 28 y registrar el resultado. Decide: Santiago (PA-14). Fuente: laravel.com/docs/13.x/sanctum (consultada vía búsqueda 26-oct-2026).

## 3. Versiones

Actualizado en la Ronda 2 (F12). Detalle, fuentes y fechas en `12_verificacion.md` §2. Consulta: 26/27-oct-2026.

| Componente | Versión objetivo | Fuente primaria | Estado |
|---|---|---|---|
| PHP | 8.4 en Docker (8.4.27); 8.3 también vale | php.net/releases, 21-oct-2026; laravel.com/docs/13.x/releases (Laravel 13: PHP 8.3–8.5) | Verificado |
| Laravel | 13.x (13.38.0 el 20-oct-2026; esqueleto `laravel/laravel` v13.11.0) | Packagist; laravel.com/docs/13.x/releases (lanzamiento 17-mar-2026, correcciones hasta Q3 2027, seguridad hasta 17-mar-2028) | Verificado |
| PostgreSQL | **17.11 o 18.6** (usar 18.6); PG 19 está en RC 1: **no usar** | postgresql.org/support/versioning, 26-oct-2026 | Verificado |
| Node.js | **24 LTS (24.22.1)**; no usar 26 (pasa a LTS el 28-oct) | nodejs.org/dist/index.json | Verificado |
| React | **19.3.1** | react.dev/versions; npm | Verificado |
| Vite | **8.3.5** (Node ^20.19 o >=22.12) | npm; vite.dev/guide | Verificado |
| Tailwind CSS | **4.3.3** con `@tailwindcss/vite` 4.3.3 | npm | Verificado |
| TypeScript | **5.9.3** fijo (la 7.0.2 existe; compatibilidad con el ecosistema sin verificar) `PROPUESTA` | npm | Verificado (existencia); decisión propia |
| Docker / Compose | Engine serie 29 (29.9 en las notas de versión); Compose v2 | docs.docker.com | Parcial: registrar `docker --version` |
| Coolify | v4.x; la versión instalada en el servidor del patrocinador manda | raw GitHub `config/constants.php` (4.5.1 en desarrollo) | Parcial |
| Paquetes PHP | `laravel/sanctum` 4.3.3; `spatie/laravel-permission` 8.3.2; `maatwebsite/excel` **4.0.6**; `barryvdh/laravel-dompdf` 3.1.2; `pestphp/pest` **^4** (4.7.8) + `pestphp/pest-plugin-laravel` ^4.1; `laravel/pint` 1.32.1 | Packagist, resolución real con Composer 2.8.12 | Resolución verificada; instalación no (descargas bloqueadas en la sesión) |
| Paquetes JS | `react-router` **7.18.4**; `@tanstack/react-query` 5.105.0; `@tanstack/react-table` **8.21.3**; `axios` 1.20.0; `react-hook-form` 7.91.0; `zod` 4.6.7; `@hookform/resolvers` **5.9.2**; `recharts` 3.10.1; `motion` 14.6.0; `lucide-react` 1.61.0; `vitest` 5.0.5; `eslint` 10.13.0; `prettier` 3.9.10 | npm, resolución real con `npm install --package-lock-only` | Resolución verificada |

Regla: **bloquear versiones** con `composer.lock` y `package-lock.json` el día de la plantilla (antes del hackatón) y **no actualizar** dependencias durante las 25 h.

## 4. Estructura del repositorio (monorepo)

```
cde-hackaton/
├── backend/                 # Laravel 13
│   ├── app/
│   │   ├── Modules/         # monolito modular (ver abajo)
│   │   │   ├── Empresas/        (modelos, acciones, requests, resources, policies)
│   │   │   ├── Diagnosticos/
│   │   │   ├── Proyectos/       (proyectos de aula + planes de acción)
│   │   │   ├── Citas/
│   │   │   ├── Eventos/         (eventos, inscripciones, asistencia, recomendación)
│   │   │   ├── Gamificacion/
│   │   │   ├── Reportes/        (dashboard, brechas, exportaciones)
│   │   │   ├── Importacion/
│   │   │   └── Seguridad/       (usuarios, roles, auditoría)
│   │   └── Shared/          # utilidades comunes
│   ├── database/{migrations,seeders,factories}
│   ├── routes/api.php
│   └── tests/{Feature,Unit}
├── frontend/                # React + Vite + TS
│   └── src/{app,modules/<mismos nombres>,components,lib,styles}
├── docker/                  # compose, Dockerfiles, proxy
├── docs/                    # VERSIONES.md, API.md, DEMO.md
├── .github/workflows/ci.yml
├── docker-compose.yml
├── .env.example
├── CLAUDE.md                # ver PROYECTO_CLAUDE.md
└── README.md
```

Cada módulo expone solo: rutas, *Actions* (casos de uso), *Resources* (JSON) y eventos; ningún módulo toca tablas de otro salvo por relaciones declaradas (límites en `05`).

## 5. Comandos de instalación (ejecutar en la plantilla previa)

Sin versiones inventadas: los comandos instalan lo vigente que cumple las restricciones y luego se congela con los *lock files*.

1. `composer create-project laravel/laravel backend` (si el instalador da otra versión mayor que 13, abortar y fijar `"laravel/framework": "^13.0"`).
2. `cd backend && composer require laravel/sanctum spatie/laravel-permission maatwebsite/excel barryvdh/laravel-dompdf`; luego `composer remove phpunit/phpunit --dev` y `composer require --dev pestphp/pest:^4 pestphp/pest-plugin-laravel:^4.1 -W` (Pest 5 exige PHP 8.4; esta combinación se resolvió con PHP 8.3 y Laravel 13.38.0). Pint ya viene en el esqueleto.
3. Configurar `.env` con `DB_CONNECTION=pgsql`; en PostgreSQL: `CREATE EXTENSION IF NOT EXISTS pg_trgm;` (necesario para la búsqueda aproximada y deduplicación por similitud; módulo estándar de PostgreSQL, docs de Neon, 26-oct-2026).
4. `npm create vite@9 frontend -- --template react-ts`; dentro: `npm i react@19 react-dom@19 react-router@7 @tanstack/react-query axios react-hook-form zod @hookform/resolvers@5 recharts motion lucide-react @tanstack/react-table@8` y `npm i -D tailwindcss @tailwindcss/vite typescript@5 vitest eslint prettier`. La resolución de este conjunto se verificó el 27-oct-2026 (`12_verificacion.md` §2.3); no se probó el `build`.
5. `docker compose up -d` levanta `db` (postgres), `backend` (php-fpm + nginx o `php artisan serve` en dev), `frontend` (vite dev) y `mailpit` (correo de pruebas) `PROPUESTA`.
6. Registrar versiones: `php -v`, `composer show laravel/framework`, `psql --version`, `node -v`, `npm ls react vite tailwindcss` → `docs/VERSIONES.md`.

**Criterio de aceptación de la plantilla (lista el 27-oct):** *esqueleto sin código de dominio*: Laravel y Vite recién creados con las dependencias de la §5 instaladas, Docker Compose, CI (pint, pest, eslint, build) en verde, página "hola" desplegada en el servidor y `docker compose up` en máquina limpia ≤ 15 min. **No** incluir modelos, pantallas ni lógica del CDE: el TyC §11 exige que "cada equipo debe desarrollar su solución durante la Hackatón" y el reto vigente se conoce desde el 28-oct; ver PA-22. Login, roles y CRUD se construyen el 28 (tareas T-10, T-40 en `07`).

## 6. Convenciones

- **Idioma:** código y commits en inglés; interfaz, mensajes y documentación en español `PROPUESTA`.
- **PHP:** PSR-12 con Laravel Pint (`./vendor/bin/pint`); validación en *Form Requests*; lógica en *Actions*; controladores finos; respuestas con *API Resources*; nombres de tablas en español snake_case (coherente con el dominio) `PROPUESTA`; todas las tablas con `id`, `created_at`, `updated_at`, `deleted_at` (soft delete).
- **TypeScript/React:** ESLint + Prettier; componentes de función; estado de servidor con TanStack Query; formularios con react-hook-form + zod; sin CSS-in-JS: Tailwind.
- **API:** REST JSON, prefijo `/api/v1`, paginación `?page=&per_page=`, errores `{message, errors}`; documentación en `docs/API.md` (OpenAPI opcional).
- **Pruebas:** Pest para back; Vitest para front solo en utilidades; ver `08`.
- **Commits (Conventional Commits):** `feat(empresas): ...`, `fix(citas): ...`, `test:`, `docs:`, `chore:`, `refactor:`. Un commit = una tarea del plan (`07`), el ID de tarea va en el cuerpo (`Refs T-14`).
- **Linters/formatters en CI:** pint `--test`, `pest`, `eslint`, `tsc --noEmit`, `vite build`.

## 7. Estrategia de ramas para 3 personas (sin conflictos)

1. `main` = siempre desplegable; protegida (solo PR con CI verde). `develop` = integración.
2. Ramas cortas por tarea: `feat/<modulo>-<tarea>` (vida < 3 h).
3. **Propiedad por módulo** (ver `07`): cada persona es dueña de módulos distintos, de modo que los archivos no se solapan. Archivos compartidos (`routes/api.php`, `App.tsx`/rutas, `DatabaseSeeder`) → cada módulo registra sus rutas en su propio archivo (`Modules/X/routes.php`, `modules/x/routes.tsx`) cargado automáticamente; así no hay conflictos.
4. Migraciones: prefijo de fecha + módulo; nunca editar una migración ya integrada: crear otra.
5. Integración cada ~2 h: `git pull --rebase origin develop` antes de abrir PR; revisión cruzada de 5 min (pareja distinta cada vez).
6. Congelamiento: ver `07` (feature freeze). Después, solo ramas `fix/`.
7. El servidor despliega desde `main` (o `develop` en las últimas horas si el equipo lo decide, PA-15).

## 8. Despliegue, respaldo y plan B

| Elemento | Decisión (PROPUESTA salvo indicación) |
|---|---|
| Despliegue principal | Servidor del patrocinador del equipo con Coolify (preferencia del chat); build desde repo GitHub con Docker Compose; redeploy al hacer merge a `main`. Pendientes del chat: acceso a Cloudflare/puerto, a resolver con el dueño del servidor antes del 28 (PA-10) |
| Alternativa | Azure con crédito estudiantil de Santiago (el de Julián venció, según el chat) |
| Plan B (demo local) | `docker compose up` en el portátil de Santiago con datos sembrados (`php artisan migrate:fresh --seed`), accesible en `localhost`; el portátil lleva copia de las imágenes (`docker save`) |
| Plan C | Video de 3 min y capturas de la demo, grabados en el T-3 h (`08`) |
| Respaldo BD | `pg_dump` programado cada hora en el servidor (cron/Coolify) y antes de cada migración manual; copia fuera del servidor (Drive del equipo); restauración probada una vez (RNF-06) |
| Dominio/HTTPS | Certificado por Coolify/Cloudflare `[NO VERIFICADO]`; plan B con HTTP local |
| Red del laboratorio | No se sabe si habrá internet estable (PA-16): plan B local no depende de internet; fuentes y librerías **empaquetadas** (sin CDN) |
| Correo | Mailpit (captura local) en dev; en producción un SMTP del CDE/UNAB o servicio transaccional (PA-03); si falla, los recordatorios se registran igual y la bandeja "Enviados" en pantalla sirve de evidencia |
| Secretos | `.env` fuera del repo; `.env.example` en el repo; variables en Coolify |

## 9. Riesgos del stack y mitigaciones

| Riesgo | Prob. | Impacto | Mitigación |
|---|---|---|---|
| Un paquete no soporta Laravel 13 | Media | Medio | Probar en la plantilla; alternativa nativa (CSV nativo en vez de Excel; PDF por impresión del navegador) |
| Servidor caído/inaccesible | Media | Alto | Plan B local + video |
| Configuración CORS/cookies | Media | Medio | Tokens Bearer (sin cookies) por defecto; proxy único `/api` |
| Dependencias nuevas rompen build | Baja | Alto | Congelar `lock`, no actualizar |
| Fatiga/errores en la noche | Alta | Alto | Turnos y descanso (`07`) |

## Criterio de aceptación de este archivo

- Cada componente tiene versión objetivo, fuente y fecha o `[NO VERIFICADO]` listado en `99` (NV-01..NV-08; se agregan NV-09 Sanctum/JWT, NV-10 paquetes JS y PHP).
- La plantilla cumple la §5 antes del 28-oct a las 8:00; de lo contrario el plan B (opción C) se activa.
