# 03 · Stack, decisiones técnicas, flujo de trabajo y despliegue

**Objetivo.** Fijar el stack, las versiones (con fuente y fecha), los comandos de instalación, la estructura del repositorio, las convenciones, la estrategia de ramas para 3 personas y el plan de despliegue/respaldo/plan B.

**Entradas.** `01_requisitos.md`, `02_alcance_mvp.md`, preferencias del chat (resumen: el equipo votó React para el front, Laravel para el back, PostgreSQL, autenticación con JWT, monolito modular, Docker y despliegue en el servidor de un patrocinador con Coolify; Azure con crédito estudiantil como alternativa; las tres personas ya han trabajado con Laravel/PostgreSQL y Docker; el chat dice que se prepara una "plantilla" previa al hackatón).

**Regla de verificación.** Fecha de consulta de todo este archivo: **26-oct-2026**. Búsqueda web disponible solo con resultados de terceros; sitios oficiales no accesibles por proxy. Lo que no se pudo contrastar con la fuente primaria lleva `[NO VERIFICADO]` y está listado en `99_preguntas_abiertas.md` (NV-*). **Antes del 28-oct el equipo debe ejecutar los comandos de la §5 y anotar las versiones reales instaladas en `docs/VERSIONES.md` del repo de desarrollo.**

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

| Componente | Versión objetivo | Fuente / fecha | Estado |
|---|---|---|---|
| PHP | 8.3 o 8.4 (mínimo 8.3 para Laravel 13) | laravel.com/docs/13.x/releases (vía búsqueda, 26-oct-2026) | Parcial: mínimo confirmado por resumen de búsqueda; ver NV-01 |
| Laravel | 13.x (lanzamiento ~17-mar-2026 según tercero; bug fixes hasta Q3 2027; seguridad hasta Q1 2028 según Laravel News) | laravel.com/docs/13.x/releases; laravel-news.com | `[NO VERIFICADO]` la fecha exacta; versión menor la fija `composer.lock` |
| PostgreSQL | 17 o 18 (menores vigentes ago-2026: 18.6, 17.11) | docs de Neon citando postgresql.org, 26-oct-2026 | `[NO VERIFICADO]` en postgresql.org; PG 19 anunciado para oct-2026: **no usar** una versión recién salida |
| Node.js | 24 LTS (o 26 LTS si ya es LTS el 28-oct) | nodejs.org/en/blog/announcements/evolving-the-nodejs-release-schedule | `[NO VERIFICADO]`; basta Node ≥ 20.19 o ≥ 22.12 para Vite 7/8 |
| React | 19.2.x | versionlog.com (19.2.7, 1-jun-2026) | `[NO VERIFICADO]` en react.dev |
| Vite | 8.x (Vite 7 y 8 exigen Node ≥ 20.19 o ≥ 22.12) | vite.dev/blog/announcing-vite7; guía de terceros para Vite 8 | `[NO VERIFICADO]` el número exacto de Vite 8 |
| Tailwind CSS | 4.3.x (4.3.1 el 12-jun-2026; 4.3.2 sin confirmar) | releases.sh/tailwind-css | `[NO VERIFICADO]` en GitHub oficial |
| Docker / Compose | Docker Engine actual y Compose v2 | no consultado | `[NO VERIFICADO]`; el equipo registra `docker --version` |
| Coolify | v4.x (v4.1.2 el 4-jun-2026 según tercero; puede haber más nuevas) | comparadores de terceros | `[NO VERIFICADO]`; depende de lo que ya tenga instalado el servidor del patrocinador |
| Paquetes PHP | `laravel/sanctum`, `spatie/laravel-permission` (roles/permisos), `maatwebsite/excel` (Packagist indica soporte ^13.0, actualizado 10-jul-2026), `barryvdh/laravel-dompdf` (PDF) `[NO VERIFICADO: compatibilidad con Laravel 13 de permission y dompdf]`, `pestphp/pest` | packagist.org | Comprobar con `composer require` |
| Paquetes JS | `react-router`, `@tanstack/react-query`, `axios`, `react-hook-form` + `zod`, `recharts`, `framer-motion` (animaciones de nivel), `lucide-react` (iconos) | no consultado | `[NO VERIFICADO]` todos |

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
2. `cd backend && composer require laravel/sanctum spatie/laravel-permission maatwebsite/excel barryvdh/laravel-dompdf` y `composer require --dev pestphp/pest laravel/pint`.
3. Configurar `.env` con `DB_CONNECTION=pgsql`; en PostgreSQL: `CREATE EXTENSION IF NOT EXISTS pg_trgm;` (necesario para la búsqueda aproximada y deduplicación por similitud; módulo estándar de PostgreSQL, docs de Neon, 26-oct-2026).
4. `npm create vite@latest frontend -- --template react-ts` (o la plantilla equivalente actual) y `npm i react-router @tanstack/react-query axios react-hook-form zod recharts framer-motion lucide-react tailwindcss @tailwindcss/vite` `[NO VERIFICADO: nombres y compatibilidad]`.
5. `docker compose up -d` levanta `db` (postgres), `backend` (php-fpm + nginx o `php artisan serve` en dev), `frontend` (vite dev) y `mailpit` (correo de pruebas) `PROPUESTA`.
6. Registrar versiones: `php -v`, `composer show laravel/framework`, `psql --version`, `node -v`, `npm ls react vite tailwindcss` → `docs/VERSIONES.md`.

**Criterio de aceptación de la plantilla (debe estar lista el 27-oct):** login funcional con 5 roles, un CRUD de ejemplo (Empresa) con paginación, CI verde, despliegue en el servidor, `docker compose up` en máquina limpia ≤ 15 min.

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
