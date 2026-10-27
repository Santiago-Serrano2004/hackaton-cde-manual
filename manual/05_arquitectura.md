# 05 · Arquitectura, seguridad y calidad ISO/IEC 25010

**Objetivo.** Definir módulos y límites, contratos de API, autenticación/autorización por rol, auditoría, tareas programadas, notificaciones, reportes, exportación, seguridad, manejo de errores, rendimiento e interoperabilidad, y mapear las 9 características ISO/IEC 25010 a decisiones concretas y evidencia demostrable.

**Entradas.** `01`–`04`. Referencias: OWASP ASVS 5.0 (publicado 30-may-2025) y OWASP Top 10 2025 (octava edición) según búsqueda web del 26-oct-2026, `[NO VERIFICADO]` en owasp.org; la lista de controles de este archivo es `PROPUESTA` y no cita números de requisito ASVS para no inventarlos.

---

## 1. Vista general

```
Navegador (React SPA) ──HTTPS──> Proxy (Coolify/Traefik/nginx)
                                   ├── /          → frontend estático
                                   └── /api/v1/*  → Laravel (php-fpm)
Laravel (monolito modular) ──> PostgreSQL (pg_trgm)
                          ──> Cola/Scheduler (database queue + schedule:run cada minuto)
                          ──> SMTP / Mailpit
                          ──> Almacenamiento local (importaciones, exportaciones)
```

Decisión: **cola en base de datos** (`QUEUE_CONNECTION=database`) y *scheduler* de Laravel con un contenedor `scheduler` que ejecuta `php artisan schedule:work` y otro `worker` con `php artisan queue:work`. Evita Redis (una pieza menos). `PROPUESTA`; Laravel documenta ambos mecanismos (`[NO VERIFICADO]` en laravel.com/docs/13.x/queues y scheduling).

## 2. Módulos, responsabilidades y límites

| Módulo | Responsabilidad | Expone | Depende de |
|---|---|---|---|
| Seguridad | Usuarios, roles, tokens, auditoría, consentimientos | `Auth`, `Auditor::registrar()` | — |
| Empresas | Empresas, personas, contactos, dedup, fusión, búsqueda, completitud | `EmpresaRepository`, eventos `EmpresaCreada/Fusionada` | Seguridad |
| Diagnosticos | Diagnóstico y evolución | `DiagnosticoRegistrado` | Empresas |
| Proyectos | Proyectos de aula, planes, compromisos | `CompromisoCumplido`, `CompromisoVencido` | Empresas |
| Citas | Citas, atenciones, recordatorios | `CitaAgendada`, `AtencionRegistrada` | Empresas |
| Eventos | Eventos, inscripciones, asistencia, recomendación | `AsistenciaRegistrada`, `InscripcionCreada` | Empresas |
| Gamificacion | Retos, puntos, niveles, insignias, rachas | escucha eventos de otros módulos | todos (solo por eventos) |
| Reportes | Dashboard, brechas, reportes, exportación | consultas de lectura | todos (solo lectura, vistas SQL) |
| Importacion | Carga, vista previa, dedup en lote | usa `Empresas` por su contrato | Empresas |
| Historial | Proyecta eventos de dominio a `intervenciones` | `GET /empresas/{id}/historial` | escucha eventos |

Reglas de límites: (1) un módulo nunca escribe tablas de otro; se comunica por *Actions* públicas o eventos de dominio; (2) `Reportes` solo lee; (3) `Gamificacion` e `Historial` nunca son llamados por otros módulos: **escuchan** eventos (mantenibilidad: agregar un reto no toca el módulo de eventos); (4) un test de arquitectura (Pest `arch()`) verifica que `Modules\X` no importa clases internas de `Modules\Y` `[NO VERIFICADO: soporte de arch tests en la versión de Pest instalada]`.

## 3. Contratos de API (v1)

Prefijo `/api/v1`; JSON; `Authorization: Bearer <token>`; paginación `?page=&per_page=` (máx. 50); errores `{ "message": "...", "errors": { "campo": ["..."] } }`; códigos: 200/201/204, 401 sin sesión, 403 sin permiso, 404, 409 conflicto (duplicado), 422 validación, 429 límite de tasa.

| Recurso | Endpoints (método ruta) | Roles |
|---|---|---|
| Auth | `POST /auth/login`, `POST /auth/logout`, `GET /auth/me`, `POST /auth/consentimiento` | todos |
| Empresas | `GET /empresas` (filtros `q, sector, tamano, formalizacion, relacion_unab, incompletas`), `POST /empresas` (409 con candidatos si hay duplicado exacto; 422 + `advertencias` si probable), `GET/PUT /empresas/{id}`, `GET /empresas/{id}/historial`, `POST /empresas/{id}/fusionar` (body `destino_id`), `GET /empresas/duplicados` | admin, equipo (docente: solo lectura de empresas de sus proyectos; emprendedor: `GET /mi/empresa`) |
| Personas | `GET/POST /personas`, `PUT /personas/{id}` | admin, equipo |
| Diagnósticos | `GET/POST /empresas/{id}/diagnosticos`, `GET /empresas/{id}/evolucion` | admin, equipo, docente (lectura) |
| Proyectos | `GET/POST /proyectos`, `PUT /proyectos/{id}`, `POST /proyectos/{id}/consultores` | admin, equipo, docente (propios), consultor (propios, lectura/avances) |
| Planes | `GET/POST /planes`, `POST /planes/{id}/compromisos`, `PUT /compromisos/{id}`, `GET /compromisos?estado=vencido` | admin, equipo, consultor (propios); emprendedor: `GET /mi/compromisos` y marcar avance `PUT /mi/compromisos/{id}` |
| Citas | `GET/POST /citas`, `POST /citas/{id}/agendar`, `POST /citas/{id}/resultado`, `POST /citas/{id}/cancelar`; emprendedor: `POST /mi/citas` | admin, equipo; emprendedor (solo las suyas) |
| Eventos | `GET/POST /eventos`, `PUT /eventos/{id}`, `POST /eventos/{id}/publicar`, `GET /eventos/{id}/inscripciones`, `POST /eventos/{id}/asistencia` (manual) , `POST /asistencia/qr` (token del QR), `GET /eventos/{id}/resumen` (inscritos/asistentes/no-show); emprendedor: `GET /mi/oferta`, `POST /eventos/{id}/inscribirme` | admin, equipo; emprendedor |
| Gamificación | `GET /mi/progreso` (puntos, nivel, insignias, racha, retos), `GET /clasificacion`, `GET/PUT /retos` (admin) | emprendedor, consultor; admin |
| Reportes | `GET /reportes/caracterizacion`, `GET /reportes/brechas?sector=&tamano=`, `GET /reportes/impacto?desde=&hasta=&formato=pdf|csv|xlsx` | admin, equipo |
| Importación | `POST /importaciones` (archivo), `GET /importaciones/{id}/previa`, `POST /importaciones/{id}/confirmar`, `POST /importaciones/{id}/revertir` | admin, equipo |
| Admin | `GET/POST /usuarios`, `PUT /usuarios/{id}/rol`, `GET /auditoria`, `GET/PUT /catalogos/{nombre}` | admin |
| Públicos | `GET /publico/eventos` (catálogo público sin datos personales) | sin autenticación (S) |

El archivo `docs/API.md` del repo de desarrollo se genera a partir de esta tabla (tarea en `07`).

## 4. Autenticación y autorización

1. **Autenticación:** `POST /auth/login` (correo + contraseña) → token Sanctum con `abilities` del rol, expiración 8 h (`PROPUESTA`); `logout` revoca. Contraseñas con el hash por defecto de Laravel; mínimo 10 caracteres.
2. **Límite de intentos:** 5 intentos/minuto/IP+correo (middleware `throttle`).
3. **Autorización:** (a) rol (spatie) para acceso a rutas; (b) *Policies* por recurso para pertenencia (docente ↔ sus proyectos; emprendedor ↔ su empresa; consultor ↔ su proyecto). **Denegar por defecto.**
4. **Matriz rol × recurso** (L = leer, E = escribir, P = propio, — = sin acceso):

| Recurso | Admin | Equipo CDE | Docente | Consultor | Emprendedor |
|---|:-:|:-:|:-:|:-:|:-:|
| Empresas | LE | LE | L(P) | L(P) | L(P, limitado) |
| Diagnósticos | LE | LE | L(P) | L(P) | L(P, resumen) |
| Proyectos | LE | LE | LE(P) | L(P)+avances | L(P) |
| Planes/compromisos | LE | LE | LE(P) | LE(P) | L(P)+actualiza avance propio |
| Citas | LE | LE | — | — | LE(P) |
| Eventos | LE | LE | L | L | L + inscripción |
| Asistencia | LE | LE | — | — | —(QR propio) |
| Gamificación | LE | L | — | L(P) | L(P) |
| Reportes | LE | LE | — | — | — |
| Importación | LE | LE | — | — | — |
| Usuarios/roles/catálogos | LE | — | — | — | — |
| Auditoría | L | — | — | — | — |

5. **Prueba obligatoria:** un test Pest parametrizado recorre rol × endpoint y compara con esta matriz (evidencia ISO-SE, `08`).
6. **Registro de acciones:** *middleware* + *listeners* escriben `auditoria` (`04` §2.8). Login/logout y fallos también.

## 5. Tareas programadas, correo y notificaciones

| Tarea | Frecuencia | Qué hace | Req. |
|---|---|---|---|
| `recordatorios:enviar` | cada minuto | Toma `recordatorios` con `programado_para <= ahora` y `estado=pendiente`, envía y marca; reintenta hasta 3 veces con espera creciente | RF-09 |
| `compromisos:marcar-vencidos` | diaria 06:00 | Recalcula vencidos y genera recordatorio al responsable | RF-07, RF-09 |
| `citas:programar-recordatorios` | al agendar (evento) | Crea recordatorios a 24 h y 1 h antes | RF-09 |
| `eventos:recordar` | diaria | Recordatorio a inscritos 24 h antes | RF-09, RF-11 |
| `gamificacion:rachas` | semanal | Recalcula rachas | RF-18 |
| `respaldo:db` | cada hora (script en infraestructura) | `pg_dump` | RNF-06 |

Correo: plantillas con el nombre del emprendedor, dato accionable y enlace al portal. En desarrollo/demo: Mailpit; en producción: SMTP (PA-03). Para la demo se acelera: botón admin "Simular paso del tiempo" que adelanta el reloj lógico de recordatorios `PROPUESTA` (no modifica el reloj del servidor). **Importante:** los correos de la demo nunca van a direcciones reales.

## 6. Reportes, analítica y exportación

- **Caracterización (RF-20):** vistas SQL `v_caracterizacion` (conteos por sector, tamaño, ingresos, formalización, relación UNAB); la UI aplica filtros y muestra también el % "sin dato" (deja visible el problema de calidad).
- **Brechas (RF-22):** promedio de `brecha` por dimensión y sector/tamaño, tomando el **último diagnóstico** de cada empresa; muestra *n* (empresas) y advierte si *n* < 5 (no inferir). Pregunta modelo: "¿Mayores brechas del sector Alimentos?" → ranking de dimensiones.
- **Impacto (RF-21):** KPIs por periodo: empresas atendidas, atenciones, proyectos, compromisos cumplidos/vencidos, variación media del puntaje de madurez entre primer y último diagnóstico, asistencia a eventos. Exporta CSV (UTF-8 con BOM) y una vista imprimible para guardar como PDF (**R2, C-11:** dompdf y XLSX solo si sobra tiempo).
- **Cuadre:** cada cifra del dashboard tiene su consulta SQL de control en `08`.
- **Rendimiento:** las agregaciones leen de vistas con índices; si superan 1 s con 5 000 empresas sintéticas, se pasa a vistas materializadas refrescadas por tarea (`PROPUESTA`).

## 7. Recomendación de eventos (RF-10) - reglas, sin ML

Puntaje por evento para una persona/empresa (explicable):
- +3 si el sector de la empresa está entre `sectores_objetivo` (o el evento no restringe sector);
- +3 si el tema coincide con una de sus 2 mayores brechas del último diagnóstico;
- +2 si el tamaño está en `tamanos_objetivo`;
- +2 si asistió antes a eventos del mismo tema;
- −5 si ya está inscrito; excluye eventos llenos o pasados.
Se muestran los 3 mejores, con el **motivo** textual (HU-13). Pesos `PROPUESTA`, configurables.

## 8. Seguridad (OWASP, aplicable) - lista de controles

| Riesgo (categoría general OWASP) | Control concreto | Cómo se prueba |
|---|---|---|
| Control de acceso roto | Policies + matriz §4; denegar por defecto; IDs no adivinables no son el único control | Test rol×endpoint; intentar leer empresa ajena → 403 |
| Fallas criptográficas | HTTPS; hash de contraseñas; `documento` cifrado (cast encriptado de Laravel); secretos en variables de entorno | Revisión de `.env.example`; búsqueda de secretos en el repo |
| Inyección | Eloquent/consultas parametrizadas; nunca concatenar SQL; validación por Form Request; escape de salida en React | Test con entrada `'; DROP TABLE--` devuelve 422/sin efecto |
| Diseño inseguro | Soft delete, confirmaciones, límites de tasa, importación con vista previa y fusiones reversibles (**R2, C-15:** la importación completa ya no se revierte) | Revisión en `08` |
| Configuración incorrecta | `APP_DEBUG=false` en producción; cabeceras de seguridad (CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy) en el proxy; CORS limitado al dominio | Inspección de cabeceras |
| Componentes vulnerables | `composer audit` y `npm audit` en CI; versiones bloqueadas | CI |
| Identificación y autenticación | Límite de intentos; expiración de token; revocación al logout; contraseña mínima | Test de throttle |
| Integridad de software/datos | CI obligatorio antes de merge; archivos subidos: tipo y tamaño máximo 5 MB, nombres aleatorios, fuera de `public/` | Test de subida de archivo `.php` rechazada |
| Registro y monitoreo | Tabla `auditoria`; logs de Laravel sin datos personales | Consulta de auditoría tras acciones |
| Manejo de excepciones | Respuestas de error uniformes sin trazas; error genérico en producción | Provocar 500 y verificar respuesta |
| SSRF/XSS/CSRF | No se hacen peticiones a URL del usuario; Bearer sin cookies evita CSRF; React escapa por defecto, sin `dangerouslySetInnerHTML` | Revisión de código |

## 9. Manejo de errores y fiabilidad
- Respuestas de error con estructura estándar; el front muestra mensajes en español y permite reintentar.
- Operaciones críticas (fusión, importación, inscripción con cupo) en **transacciones**; cupos con bloqueo de fila (`SELECT ... FOR UPDATE` / `lockForUpdate`).
- Idempotencia: puntos de gamificación únicos por (persona, reto, referencia); asistencia única por (evento, persona).
- Reintentos de correo (3). Fallo permanente → estado `fallido` visible en panel "Notificaciones".
- Salud: `GET /health` (DB y cola) para el monitoreo del proxy.
- Respaldo y restauración: `03` §8; prueba de restauración documentada en `08`.

## 10. Rendimiento con volumen creciente (RNF-01/02)
Índices (`04` §9), paginación obligatoria, *eager loading* (evitar N+1; prueba que cuenta consultas en `historial` ≤ 12), caché de catálogos y de KPIs (5 min), compresión gzip del proxy, *code splitting* en el front. Prueba con 5 000 empresas sintéticas (`08`).

## 11. Interoperabilidad (ISO-CO)
Importar/exportar CSV (UTF-8 con BOM para Excel) y, solo si sobra tiempo, XLSX (**R2, C-15:** la importación del MVP es solo CSV); API REST JSON documentada; plantilla de importación; `GET /publico/eventos` como feed. Google Workspace (Calendar/Sheets) solo si el CDE lo usa (PA-04): diseño de `eventos` y `citas` guarda `ics_uid` para exportar `.ics` (RF-30, Could).

## 12. Tabla ISO/IEC 25010 → decisión → cómo se demuestra a los jurados

| Característica | Decisión concreta | Demostración (60 s en la demo / pregunta del jurado) |
|---|---|---|
| **Adecuación funcional** | 22 requisitos Must mapeados 1:1 a los 10 resultados y 10 criterios del CDE (`01`); camino dorado (`02`) | Diapositiva "Reto → pantalla": cada criterio CRI-01..10 con captura/demostración y cifra |
| **Eficiencia de desempeño** | Índices, paginación, vistas para KPIs, caché, `EXPLAIN` | Búsqueda con 5 000 empresas < 1 s; tiempo mostrado en pantalla (indicador de latencia en modo demo) |
| **Compatibilidad** | CSV/JSON (XLSX opcional, R2), plantilla, API, `.ics` | Importar la hoja y exportar el reporte abriéndolo en Excel |
| **Capacidad de interacción** | Portal por rol, mensajes accionables, confirmaciones, accesibilidad AA, gamificación, español | Prueba con usuarios (≥ 3) y resultado (`08`), tour de 20 s |
| **Fiabilidad** | Transacciones, reintentos, respaldo/restauración, idempotencia, `/health`, plan B | "Matar" el contenedor del worker y mostrar que el recordatorio se envía al reiniciar; restaurar un respaldo |
| **Seguridad** | Roles/policies, hash, throttle, auditoría, Ley 1581 | Intentar entrar como emprendedor a `/api/v1/auditoria` → 403; mostrar la auditoría del cambio recién hecho |
| **Mantenibilidad** | Monolito modular con límites, eventos, Pint, CI, pruebas, Actions | Mostrar árbol de módulos y agregar un reto nuevo editando solo `Gamificacion` |
| **Flexibilidad** | Docker Compose, variables de entorno, catálogos administrables, sin dependencias de nube propietarias | `docker compose up` en máquina limpia; cambiar un catálogo sin tocar código |
| **Protección (safety)** | Soft delete, confirmaciones, reversión de fusión (R2: no de la importación completa), minimización de datos, sin datos sensibles, mensajes sin fugas | Fusionar y luego deshacer; intentar borrar con confirmación |

## 13. Decisiones registradas
| # | Decisión |
|---|---|
| D-20 | Cola en BD (sin Redis) |
| D-21 | Historial por eventos de dominio + tabla `intervenciones` |
| D-22 | Recomendación por reglas explicables, no ML |
| D-23 | Bearer con abilities + policies por pertenencia |
| D-24 | Reportes desde vistas SQL (los números del dashboard = SQL de control) |

## Criterio de aceptación de este archivo
- Cada módulo tiene responsabilidad, contrato y dependencias; ninguna dependencia circular (verificable con el test de arquitectura).
- Cada endpoint de §3 tiene rol; la matriz §4 se convierte en test.
- Las 9 características de §12 tienen decisión, evidencia y requisito; coinciden con `01` §10.
- Toda afirmación sobre OWASP/Laravel marca su verificación en `99` (NV-06, NV-13).
