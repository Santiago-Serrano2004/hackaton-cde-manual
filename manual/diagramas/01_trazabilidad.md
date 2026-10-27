# 01 · Trazabilidad: de cada elemento de cada diagrama al archivo y sección donde está decidido

**Objetivo.** Garantizar que ningún diagrama dibuja algo que el manual no decidió. Cada fila es un elemento con su **nombre exacto**; un script (`INDEX.md` §4) lee esta tabla y comprueba que todo nombre, tabla, endpoint, evento, comando y estado de los diagramas figura aquí.

**Entradas.** `03_stack.md`, `04_datos.md`, `05_arquitectura.md`, `06_ux_gamificacion.md`, `20_plan_que_cabe.md`, `23_contingencias_y_simulacro.md`, `tareas/T-xx.md`, `investigacion/06_requerimientos_funcionales_detallados.md` (en adelante `inv/06`) e `investigacion/01_fuentes_y_verificacion.md` (`inv/01`).

**Columna Estado.** **D** = decidido en el manual vigente (v1 a R2). **R3** = alcance de la Ronda 3 (variantes A y B de `20`), pendiente de ratificar en T-01; cuando el R3 recorta algo, el diagrama dibuja lo que el R3 construye y lo recortado se dice en la nota. **P4** = `PROPUESTA` de la Ronda 4 (`inv/06`), no ratificada: en los diagramas se dibuja con **borde discontinuo**.

**Regla de precedencia usada.** Cuando dos archivos difieren, el diagrama sigue el más reciente que esté ratificable (R3 sobre R2 sobre v1) y la diferencia queda en `99_preguntas_abiertas_diagramas.md`. No se elige en silencio.

## 1. Personas, sistemas y contenedores (diagramas 10, 11, 30)

| Nombre exacto | Tipo | Fuente (archivo § ) | Estado |
|---|---|---|:-:|
| Administrador | Persona, rol `administrador` | `04` §2.1 (`usuarios`); `tareas/T-10.md` §4 | D |
| Equipo CDE | Persona, rol `equipo_cde` | `04` §2.1; `T-10` §4 | D |
| Docente | Persona, rol `docente` | `04` §2.1; `T-10` §4 | D |
| Estudiante consultor | Persona, rol `estudiante_consultor` | `04` §2.1; `T-10` §4 | D |
| Emprendedor | Persona, rol `emprendedor` | `04` §2.1; `T-10` §4 | D |
| Sistema de información del CDE | Sistema de software | `inputs/02_presentacion_CDE.md` diap. 4; `03` §1 | D |
| Registro mercantil abierto (datos.gov.co) | Sistema externo | `inv/06` RF-32; `inv/01` §3 (F-01) | P4 |
| Servicio de correo SMTP | Sistema externo | `05` §5; `03` §8 «Correo» | D |
| GitHub | Sistema externo | `03` §7 y §8 (build desde repo) | D |
| Coolify | Plataforma de despliegue | `03` §8 «Despliegue principal» | D |
| Aplicación web SPA | Contenedor (React 19.3.1, Vite 8.3.5, TypeScript 5.9.3) | `03` §3; `05` §1 | D |
| Proxy inverso | Contenedor (Coolify/Traefik/nginx) | `05` §1 | D |
| API Laravel | Contenedor (Laravel 13, PHP 8.4, php-fpm) | `03` §3; `05` §1 | D |
| Worker de cola | Contenedor (`php artisan queue:work`) | `05` §1 | D |
| Planificador | Contenedor (`php artisan schedule:work`) | `05` §1 | D |
| Base de datos PostgreSQL | Contenedor de datos (PostgreSQL 18.6, `pg_trgm`) | `03` §3 y §5 punto 3 | D |
| Almacenamiento local | Contenedor de datos (sistema de archivos) | `05` §1 | D |
| Mailpit | Herramienta de correo local (desarrollo y demo) | `03` §5 punto 5; `T-21` §5 punto 6 | D |

## 2. Módulos (diagramas 12 a 18)

| Nombre exacto | Responsabilidad | Depende de (declarado) | Fuente | Estado |
|---|---|---|---|:-:|
| Seguridad | Usuarios, roles, tokens, auditoría, consentimientos | — | `05` §2 | D |
| Empresas | Empresas, personas, contactos, duplicados, fusión, búsqueda, completitud | Seguridad | `05` §2 | D |
| Diagnosticos | Diagnóstico y evolución | Empresas | `05` §2 | D |
| Proyectos | Proyectos de aula, planes, compromisos | Empresas | `05` §2 | D |
| Citas | Citas, atenciones, recordatorios | Empresas | `05` §2 | D |
| Eventos | Eventos, inscripciones, asistencia, recomendación | Empresas | `05` §2 | D |
| Gamificacion | Retos, puntos, niveles, insignias | todos, solo por eventos | `05` §2 | D |
| Reportes | Dashboard, brechas, reportes, exportación | todos, solo lectura de vistas SQL | `05` §2 | D |
| Importacion | Carga, vista previa, deduplicación en lote | Empresas, por su contrato | `05` §2 | D |
| Historial | Proyecta eventos de dominio a `intervenciones` | escucha eventos | `05` §2; `T-15` | D |
| Eventos de dominio | Mecanismo por el que Gamificacion e Historial escuchan | — | `05` §2 reglas de límites 1 a 3 | D |

Nota: `03` §4 lista 9 carpetas de módulos y no incluye `Historial`; `05` §2 y `T-15` sí. Ver Q-D1.

## 3. Componentes (diagramas 13 a 18)

Un componente aquí es una agrupación de funcionalidad detrás de una interfaz dentro del contenedor API Laravel (no una carpeta ni una unidad desplegable, `00` §1). El nombre es descriptivo; lo que debe coincidir exactamente son los identificadores entre acentos graves (tablas, rutas, comandos, eventos).

| Nombre exacto | Módulo | Responsabilidad y fuente | Estado |
|---|---|---|:-:|
| API de empresas | Empresas | Rutas `GET /empresas`, `POST /empresas`, `GET /empresas/{id}`, `PUT /empresas/{id}`, `GET /empresas/duplicados`, `POST /empresas/{id}/fusionar` (`05` §3; `T-11` §4) | D |
| Normalizadores | Empresas (función única en `Shared`) | `nit_norm`, `correo_norm`, `nombre_norm` (`04` §4; `T-11` §5.2) | D |
| Validación de NIT | Empresas | Dígito de verificación del NIT con aviso, `GET /nit/validar` (`inv/06` RF-31) | P4 |
| Detección de duplicados | Empresas | Niveles exacto, probable y posible con `pg_trgm` (`04` §4; `T-12` §5) | D |
| Fusión de empresas | Empresas | Fusión transaccional, `snapshot_json`, `movidos_json`, `FusionRegistry`, deshacer (`T-12` §5 puntos 5 a 9); deshacer solo en variante B (`20` §7) | D |
| Búsqueda tolerante | Empresas | `word_similarity` y `nit_norm` por prefijo (`T-13` §5) | D |
| Completitud de la ficha | Empresas | `completitud` 0 a 100 (`T-11` §5 punto 4) | D |
| EmpresaRepository | Empresas | Acceso a datos que expone el módulo (`05` §2) | D |
| Consulta al registro mercantil | Empresas | `POST /empresas/{id}/consulta-registro` con caché `consultas_registro` (`inv/06` RF-32, RNF-19) | P4 |
| Procedencia de campos | Empresas | Columna `procedencia` y hook de guardado (`inv/06` RF-34) | P4 |
| Auditor::registrar() | Seguridad | Escribe `auditoria` (`05` §2; `T-10` §4) | D |
| API de citas | Citas | `GET /citas`, `POST /citas`, `POST /mi/citas`, `POST /citas/{id}/agendar`, `POST /citas/{id}/resultado`, `POST /citas/{id}/cancelar` (`05` §3; `T-20` §4) | D |
| Estados de la cita | Citas | Transiciones válidas (`T-20` §5 punto 1) | D |
| Registro de atención | Citas | Crea `atenciones` y emite `AtencionRegistrada` (`T-20` §5 punto 5) | D |
| Programación de recordatorios | Citas | Comando `citas:programar-recordatorios` a 24 h y 1 h (`05` §5; `T-21` §5) | D |
| Envío de recordatorios | Citas | Comando `recordatorios:enviar`, reintentos 1, 5 y 15 min (`05` §5; `T-21` §5) | D |
| Bandeja de notificaciones | Citas | `GET /notificaciones` (`T-21` §4) | D |
| API de eventos | Eventos | `GET /eventos`, `POST /eventos`, `PUT /eventos/{id}`, `POST /eventos/{id}/publicar`, `GET /eventos/{id}/inscripciones` (`05` §3) | D |
| Inscripción con cupo | Eventos | `POST /eventos/{id}/inscribirme` con `lockForUpdate` (`T-23` §5 punto 1) | D |
| Asistencia manual y por QR | Eventos | `POST /eventos/{id}/asistencia` y `POST /asistencia/qr` (`T-23` §4) | D |
| Token de QR | Eventos | `GET /eventos/{id}/qr`; token fijo por evento en A y B (`T-23` §13); firmado con `APP_KEY` (`T-23` §5 punto 4) | R3 |
| Resumen del evento | Eventos | `GET /eventos/{id}/resumen` (inscritos, asistentes, no-show) | D |
| Recomendación por reglas | Eventos | `GET /mi/oferta`, pesos en `config/recomendacion.php` (`05` §7; `T-25` §5) | D |
| Catálogo público de eventos | Eventos | `GET /publico/eventos` sin autenticación (`05` §3) | D |
| Recordatorio de eventos | Eventos | Comando `eventos:recordar` (`05` §5) | D |
| API de diagnósticos | Diagnosticos | `GET /empresas/{id}/diagnosticos`, `POST /empresas/{id}/diagnosticos`, `GET /empresas/{id}/evolucion` (`05` §3) | D |
| Puntaje y brecha | Diagnosticos | `puntaje_total` = promedio; `brecha` = 100 − puntaje (`T-41` §5) | D |
| API de proyectos | Proyectos | `GET /proyectos`, `POST /proyectos`, `PUT /proyectos/{id}`, `POST /proyectos/{id}/consultores` (`05` §3) | D |
| Planes y compromisos | Proyectos | `GET /planes`, `POST /planes`, `POST /planes/{id}/compromisos`, `PUT /compromisos/{id}`, `GET /compromisos` (`05` §3; `T-42` §4) | D |
| Compromisos del emprendedor | Proyectos | `GET /mi/compromisos`, `PUT /mi/compromisos/{id}` (`05` §3) | D |
| Vencimiento de compromisos | Proyectos | Comando `compromisos:marcar-vencidos` (`05` §5) | D |
| Escuchas de eventos | Gamificacion | Escucha eventos de otros módulos; nadie la llama (`05` §2; `T-43` §5 punto 7) | D |
| Reglas de retos | Gamificacion | `retos` con puntos y topes (`06` §7.2; `T-43` §5) | D |
| Registro de puntos | Gamificacion | `puntos_movimientos` solo inserción, único (persona, reto, ref_tipo, ref_id) (`04` §2.7) | D |
| Niveles e insignias | Gamificacion | 6 niveles; 3 insignias en A y B (`T-43` §13) | R3 |
| Progreso del emprendedor | Gamificacion | `GET /mi/progreso` (`05` §3) | D |
| Proyección de intervenciones | Historial | Listener `ProyectarIntervencion` hacia `intervenciones` (`T-15` §5) | D |
| API del historial | Historial | `GET /empresas/{id}/historial` (`05` §3) | D |
| HistorialRegistry | Historial | Registro de tablas que se muestran (`T-15` §5 punto 6) | D |
| API de reportes | Reportes | `GET /reportes/caracterizacion`, `GET /reportes/brechas`, `GET /reportes/impacto` (`05` §3) | D |
| Vistas SQL de reporte | Reportes | `v_caracterizacion` y vistas de brechas e impacto (`05` §6; `T-16` §5) | D |
| Caché de KPIs | Reportes | Caché de 5 min (`T-16` §5 punto 5; `05` §10); controlador de caché sin definir (Q-D2) | D |
| Exportación CSV e impresión | Reportes | CSV UTF-8 con BOM; PDF por vista imprimible (`05` §6; `T-16` §5 punto 4) | D |
| Carga de importación | Importacion | `POST /importaciones` | D |
| Vista previa con semáforo | Importacion | `GET /importaciones/{id}/previa` (`T-14` §5 punto 3) | D |
| Confirmación en lotes | Importacion | `POST /importaciones/{id}/confirmar`, lotes de 100 (`T-14` §5 punto 5) | D |
| Sinónimos de catálogo | Importacion | `backend/config/importacion.php` (`T-14` §5 punto 4) | D |

## 4. Tablas (diagramas 20 a 23, y referencias en otros)

Campos citados: los que el diagrama muestra. Fuente de todos: `04` §2 salvo indicación.

| Tabla | Fuente | Estado |
|---|---|:-:|
| `empresas` | `04` §2.1 | D |
| `personas` | `04` §2.1 | D |
| `empresa_persona` | `04` §2.1 | D |
| `usuarios` | `04` §2.1 | D |
| `consentimientos` | `04` §2.1 | D |
| `sectores`, `tamanos`, `ingresos_rangos`, `formalizacion`, `relaciones_unab` | `04` §2.8 (`catalogos`) y §3 | D |
| `consultas_registro` | `inv/06` RF-32 «Caché» | P4 |
| `ciiu_equivalencias` | `inv/06` RF-45 (fase 1) | P4 |
| `diagnosticos`, `dimensiones`, `diagnostico_resultados` | `04` §2.2 | D |
| `proyectos_aula`, `proyecto_consultores`, `planes_accion`, `compromisos` | `04` §2.3 | D |
| `citas`, `atenciones`, `recordatorios` | `04` §2.4; `recordatorios.intentos` en `T-21` §4 | D |
| `eventos`, `inscripciones`, `asistencias`, `evento_sector` | `04` §2.5 | D |
| `intervenciones` | `04` §2.6 | D |
| `retos`, `puntos_movimientos`, `niveles`, `insignias`, `persona_insignias` | `04` §2.7 | D |
| `rachas` | `04` §2.7; aplazada en R3 (`T-43` §13) | D |
| `auditoria`, `importaciones`, `importacion_filas` | `04` §2.8 | D |
| `fusiones` | `T-12` §5 puntos 5 y 6 | D |
| `resultados_impacto` | `inv/06` RF-38 (fase 2) | P4 |

Campos de procedencia y confianza (P4, `inv/06` §2 y RF-34): `empresas.procedencia` (jsonb) con una clave por campo crítico (`nit`, `razon_social`, `sector`, `tamano`, `formalizacion`, `correo_principal`), cada una con `origen`, `estado`, `fecha_dato`, `registrado_por`, `confirmado_por`, `fuente_ref`; `empresas.confianza_ficha` (0 a 100, calculada); `empresas.ciiu_codigo` y `empresas.ciiu_version` (RF-45).

## 5. Endpoints (diagramas de secuencia y seguridad)

Prefijo `/api/v1` en todos (`05` §3), salvo `GET /health`.

| Método y ruta | Fuente | Estado |
|---|---|:-:|
| `POST /auth/login`, `POST /auth/logout`, `GET /auth/me`, `POST /auth/consentimiento` | `05` §3; `T-10` §4 | D |
| `GET /nit/validar` | `inv/06` RF-31 | P4 |
| `POST /empresas`, `GET /empresas`, `GET /empresas/{id}`, `PUT /empresas/{id}`, `GET /empresas/duplicados`, `POST /empresas/{id}/fusionar`, `GET /empresas/{id}/historial` | `05` §3; `T-11`; `T-12` | D |
| `POST /fusiones/{id}/deshacer` | `T-12` §4 | D (solo variante B) |
| `POST /empresas/{id}/consulta-registro`, `POST /empresas/{id}/consulta-registro/aceptar` | `inv/06` RF-32 | P4 |
| `POST /mi/citas`, `POST /citas/{id}/agendar`, `POST /citas/{id}/resultado`, `POST /citas/{id}/cancelar`, `GET /notificaciones` | `T-20` §4; `T-21` §4 | D |
| `POST /eventos/{id}/inscribirme`, `POST /eventos/{id}/asistencia`, `GET /eventos/{id}/qr`, `POST /asistencia/qr`, `GET /eventos/{id}/resumen`, `GET /mi/oferta`, `GET /publico/eventos` | `05` §3; `T-23` §4 | D |
| `GET /mi/progreso` | `05` §3; `T-43` §4 | D |
| `PUT /compromisos/{id}`, `PUT /mi/compromisos/{id}` | `T-42` §4 | D |
| `POST /importaciones`, `GET /importaciones/{id}/previa`, `POST /importaciones/{id}/confirmar` | `05` §3; `T-14` | D |
| `GET /health` | `05` §9 | D |

## 6. Eventos, comandos y estados

| Identificador | Tipo | Fuente | Estado |
|---|---|---|:-:|
| `EmpresaCreada`, `EmpresaFusionada` | Evento de dominio de Empresas | `05` §2 | D |
| `DiagnosticoRegistrado` | Evento de Diagnosticos | `05` §2; `T-41` §5 | D |
| `CompromisoCumplido`, `CompromisoVencido` | Evento de Proyectos | `05` §2 | D |
| `CitaAgendada`, `AtencionRegistrada` | Evento de Citas | `05` §2; `T-20` §4 | D |
| `AsistenciaRegistrada`, `InscripcionCreada` | Evento de Eventos | `05` §2 | D |
| `NivelAlcanzado` | Evento de Gamificacion | `T-43` §5 punto 8 | D |
| `recordatorios:enviar` (cada minuto), `citas:programar-recordatorios` (al agendar), `compromisos:marcar-vencidos` (06:00), `eventos:recordar` (diaria), `respaldo:db` (cada hora) | Comandos programados | `05` §5 | D |
| Estados de cita: `solicitada`, `agendada`, `realizada`, `cancelada`, `no_asistio` | Estados | `04` §2.4; `T-20` §5 | D |
| Estados de compromiso: `pendiente`, `en_curso`, `cumplido`, `vencido` (calculado), `cancelado` | Estados | `04` §2.3; `T-42` §5 | D |
| Estados de inscripción: `inscrito`, `lista_espera`, `cancelado` | Estados | `04` §2.5 | D |
| Estados de evento: `borrador`, `publicado`, `cerrado`, `realizado`, `cancelado` | Estados | `04` §2.5; `T-23` §5 punto 8 | D |
| Estados de recordatorio: `pendiente`, `enviado`, `fallido` | Estados | `04` §2.4; `T-21` §4 | D |
| Estados de verificación: `declarado`, `verificado`, `por_revisar` | Estados | `inv/06` §2 | P4 |
| Códigos de respuesta: 200, 201, 204, 401, 403, 404, 409, 422, 429 y 502 (`REGISTRO_NO_DISPONIBLE`) | Códigos HTTP | `05` §3; `inv/06` RF-32 | D |

## 7. Nodos de despliegue, fallos y controles de seguridad (diagramas 30, 31, 60, 61)

| Nombre exacto | Tipo | Fuente (archivo §) | Estado |
|---|---|---|:-:|
| Usuarios del CDE | Persona (agrupa los 5 roles) | `04` §2.1 | D |
| Usuario del CDE | Persona genérica en el diagrama de autenticación | `05` §4 punto 1 | D |
| Portátil de demostración | Nodo del laboratorio | `23` §3 F1 y F5 | D |
| Red del laboratorio | Nodo de red | `03` §8 «Red del laboratorio» | D |
| Punto de acceso del celular | Nodo de red alterna | `23` §3 F2 | D |
| Portátil de respaldo | Nodo del plan B local | `03` §8 «Plan B»; `23` §3 F6 | D |
| Servidor del patrocinador | Nodo de despliegue (Coolify) | `03` §8 «Despliegue principal» | D |
| Contenedores del sistema | Conjunto Docker Compose | `03` §5 punto 5; `05` §1 | D |
| Respaldo horario | Tarea `respaldo:db` con `pg_dump` | `03` §8 «Respaldo BD»; `05` §5 | D |
| Copia de respaldo externa | Almacén (Drive del equipo) | `03` §8 «Respaldo BD» | D |
| F1 · Servidor del patrocinador caído; F2 · Red del laboratorio caída; F3 · Base de datos corrupta o migración rota; F4 · Correo no entrega; F14 · Un despliegue rompe la versión estable | Fallos con tiempo máximo (15, 10, 10, 5 y 10 min) y responsable Julián | `23` §3 | D |
| Servidor local en el portátil de demostración; Punto de acceso del celular y trabajo local; migrate:fresh --seed y luego dump.sql; Mailpit local y captura D3; Volver a la etiqueta anterior; Caché de 24 h o mensaje legible | Planes de cambio del diagrama 31 (el último, propuesta Ronda 4) | `23` §3 columnas «Plan B» y «Acción inmediata»; `inv/06` RF-32 (caché de 24 h) | D |
| Registro mercantil no responde (propuesta) | Fallo con degradación automática | `inv/06` RF-32 y RNF-19 | P4 |
| Límite de intentos | Control: 5 intentos por minuto por IP y correo | `05` §4 punto 2; `T-10` §4 | D |
| Autenticación Sanctum | Control: token Bearer con abilities, vence a las 8 h | `05` §4 punto 1 | D |
| Rol (spatie) | Control: acceso a rutas por rol | `05` §4 punto 3 | D |
| Policy de pertenencia | Control: pertenencia por recurso, denegar por defecto | `05` §4 punto 3 | D |
| Action con Form Request | Control: validación en el servidor | `03` §6; `05` §8 | D |
| Auditoría de peticiones | Control: `AuditarPeticion` y `Auditor::registrar()` | `T-10` §5 puntos 4 a 6 | D |
| Respuesta de error | Respuesta `{message, errors}` sin trazas en producción | `05` §3 y §9; `T-10` §5 punto 7 | D |
| Matriz rol × recurso | Fuente de verdad de permisos | `05` §4 punto 4 | D |

## 8. Uso por diagrama (generado)

La tabla de uso se genera con el script de `INDEX.md` §4 y vive en `90_verificacion_calidad.md` §2.

## Criterio de aceptación

1. Todo elemento, tabla, endpoint, evento, comando y estado de los diagramas aparece en este archivo con fuente.
2. Ningún diagrama dibuja un elemento P4 con el estilo de un elemento decidido (borde discontinuo).
3. Toda diferencia entre archivos del manual está en `99_preguntas_abiertas_diagramas.md`.
