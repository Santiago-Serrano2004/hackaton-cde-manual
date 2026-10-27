# 14 · Backlog de funcionalidades (Ronda 2, F14)

**Objetivo.** Backlog completo, priorizado y ordenado por rebanadas verticales entregables, que enlaza cada tarea con los RF/RNF de `01_requisitos.md`, con las historias de `02`, con los diferenciadores de `13` y con el plan de `07`. El archivo `backlog.csv` tiene una fila por tarea y está listo para importar a GitHub Projects.

**Entradas.** `01_requisitos.md`, `02_alcance_mvp.md`, `07_plan_construccion.md` §5, `13_diferenciadores.md`.

**Qué cambia respecto a `07` (v1).** Los IDs `T-xx` de v1 se conservan. Cambian las horas de T-12, T-13, T-14, T-16 y T-40 (ver §6) y se añaden 15 tareas nuevas (T-17..T-19, T-26..T-28, T-31, T-47..T-54). `07` §5.1–§5.4 se actualizó con estos cambios y con el balance por persona.

## 1. Convenciones

- **Prioridad (MoSCoW):** Must = Núcleo; Should = Nivel 2; Could = Nivel 3; Won't = futuro (`13` §4). Las puertas de entrada de cada nivel están en §5.
- **Horas:** efectivas, nominales, con coma decimal en los .md y punto en el CSV. "Todos" cuenta para cada persona.
- **Responsable propuesto:** S = Santiago, J = Julián, MP = María Paula (PA-11).
- **Rebanada:** S0..S8, ordenadas por entrega (§2). La primera (S1) es el recorrido de punta a punta de H1.
- **Etiquetas del CSV:** `slice:`, `prio:`, `iso:` (AF, ED, CO, CI, FI, SE, MA, FL, PR) y `req:` (los RF/RNF; `+` separa varios).
- **Definición de terminado (DoD) general**, válida para toda tarea además de su DoD propio: (1) commit con `Refs T-xx` en `develop`; (2) lint y pruebas del módulo en verde en CI; (3) revisión cruzada de 5 min; (4) el criterio de aceptación de la fila se comprobó a mano o con prueba; (5) lo que la fila declara "simulado" está rotulado en pantalla o en la documentación; (6) sin datos reales (RNF-14).
- **Valor para los 60 puntos:** la columna "ISO" indica qué característica de ISO/IEC 25010 evidencia la tarea; el aspecto de Funcionalidad que alimenta está en `13` §2 para los diferenciadores y en `01` para los RF.

## 2. Rebanadas verticales (en orden de entrega)

| Rebanada | Nombre | Debe estar a las | Hito | Qué se puede mostrar al terminarla |
|---|---|---|---|---|

| S0 | Esqueleto vivo | 28-oct 10:30 | H0 | Las 3 máquinas y el servidor corren el esqueleto; CI verde; diseño base |
| S1 | Recorrido de punta a punta | 28-oct 19:00 | H1 | Login → crear empresa con aviso de duplicado → emprendedor solicita cita → operador agenda → recordatorio llega |
| S2 | Conocer a cada empresa | 28-oct 22:15 | — | Buscar con Ctrl+K, importar CSV, duplicados con puntuación y deshacer |
| S3 | Acompañamiento y trazabilidad | 28-oct 00:30 (29-oct) | H2 (parte) | Diagnósticos, proyectos, planes, línea de tiempo |
| S4 | Eventos y formación por recompensas | 29-oct 00:30 | H2 (parte) | Evento → inscripción → asistencia → puntos → nivel → portal |
| S5 | Conocimiento e impacto | 29-oct 00:30 | H2 (parte) | Dashboard, brechas, reporte en un clic |
| S6 | Diferenciadores Nivel 2 | Puerta: H1 a las 19:00 y T-43 a las 23:30 | — | Calidad de datos, mapa de ruta, preguntas guiadas y mapa de calor |
| S7 | Diferenciadores Nivel 3 | Puerta: H2 antes de las 23:30 | — | Panel ISO, QR en vivo, convocatoria, radar |
| S8 | Demo, calidad y entrega | 29-oct 09:00 | FF, H3, Cierre | Datos sintéticos, reinicio, ensayos, respaldo, pitch |

## 3. Épicas

| Épica | Qué cubre | RF/RNF principales |
|---|---|---|
| E01 Plataforma y seguridad | Esqueleto, despliegue, autenticación, roles, auditoría, sistema de diseño, consentimiento | RF-25, RF-26, RNF-03, RNF-11, RNF-13 |
| E02 Conocer a cada empresa | Ficha, duplicados, búsqueda, importación, calidad de datos | RF-01..04, RF-15, RF-28 |
| E03 Acompañamiento y trazabilidad | Diagnósticos, proyectos de aula, planes de acción, línea de tiempo | RF-05..07, RF-14, RF-16 |
| E04 Citas y recordatorios | Solicitud, agenda, resultado, recordatorios automáticos | RF-08, RF-09 |
| E05 Eventos y recomendación | Eventos, inscripción, asistencia, recomendación, convocatoria | RF-10..12, RF-27 |
| E06 Formación por recompensas | Puntos, niveles, insignias, rachas, portal, mapa de ruta | RF-13, RF-17, RF-18 |
| E07 Conocimiento e impacto | Caracterización, brechas, preguntas guiadas, reportes | RF-20..22 |
| E08 Demo, calidad y entrega | Datos sintéticos, reinicio, pruebas, respaldo, pitch | RNF-01..14, RN-09..11 |

## 4. Backlog por rebanada

Columnas: **Tarea · Resp. · Horas · Prior. · Depende de · ISO · Historias · Real / simulado · Criterio de aceptación y DoD**. El título completo está en `backlog.csv`.

### S0 · Esqueleto vivo (3,5 h)

| ID | Tarea | Resp. | h | Prior. | Depende de | ISO | HU | Real / simulado | Criterio de aceptación / DoD | Req. |
|---|---|---|---|---|---|---|---|---|---|---|
| T-00 | Levantar esqueleto en las 3 máquinas; accesos al servidor y GitHub | Todos | 0,5 | Must | Esqueleto | FL | — | Real | `docker compose up` ok en las 3; acceso SSH/Coolify probado | RNF-11 |
| T-01 | Reconciliar respuestas del CDE con alcance; actualizar `docs/DECISIONES.md` | Todos | 0,5 | Must | — | — | — | Real | Lista de cambios firmada por los 3 | — |
| T-02 | Despliegue del esqueleto y CI en servidor (Coolify) con variables de entorno | J | 1,0 | Must | T-00 | FI, FL | — | Real: despliegue; Simulado: ninguno | URL pública (o local) responde; push a `main` redepliega; CI verde | RNF-07, 11, RNF-08 |
| T-03 | Cola `database`, scheduler, Mailpit, `/health` | J | 0,5 | Must | T-02 | FI | — | Real: cola y scheduler; Simulado: correo capturado por Mailpit | Job de ejemplo ejecuta; correo llega a Mailpit; `/health` 200 | RF-09, RNF-06 |
| T-40 | Design system (tokens, componentes base), layout por rol, router, cliente API, pantalla de login y rutas protegidas | MP | 1,0 | Must | T-00 | CI | — | Real | Tokens de 16_sistema_de_diseno; Button/Input/Table/Card/Modal/Toast/Timeline listos; rutas por rol; contrastes ≥ 4,5:1 (decisión A3: supone librería de componentes de 15; si no se confirma, vuelve a 1,5) | RNF-04, 05 |

### S1 · Recorrido de punta a punta (9,75 h)

| ID | Tarea | Resp. | h | Prior. | Depende de | ISO | HU | Real / simulado | Criterio de aceptación / DoD | Req. |
|---|---|---|---|---|---|---|---|---|---|---|
| T-10 | Auth Sanctum, 5 roles (spatie), policies base, middleware de auditoría, tabla `auditoria`, throttle | S | 1,5 | Must | T-00 | SE | HU-23, HU-24 | Real | Login/logout/me; usuario por rol sembrado; test rol×endpoint con 3 casos; login queda en auditoría | RF-25, 26, RNF-03 |
| T-11 | Empresas: migraciones, modelos, normalizadores (NIT/correo/nombre), CRUD API, filtros; front E2/E3 (cabecera, pestañas vacías) | S | 3,0 | Must | T-10, T-40 | AF | HU-02 | Real | Crear/editar/listar con paginación; catálogos desde listas; ficha navegable | RF-01, RNF-02, RNF-09 |
| T-12 | Detección de duplicados (pg_trgm) + fusión transaccional + banner front | S | 1,5 | Must | T-11 | AF, FI | HU-02, HU-03 | Real | Prueba: 12 duplicados sembrados → ≥ 11 detectados; fusión mueve historial; auditoría | RF-02, 03, RNF-09, RNF-12 |
| T-20 | Citas: modelos, estados, solicitar/agendar/resultado/cancelar, policies | J | 1,5 | Must | T-10 | AF | HU-09, HU-10, HU-11 | Real | Flujo completo vía API; toda cita con empresa | RF-08, RNF-09 |
| T-21 | Recordatorios: creación al agendar, job de envío, plantillas, reintentos, bandeja "Notificaciones" | J | 1,0 | Must | T-20, T-03 | AF, FI | HU-10 | Real: job; Simulado: entrega al buzón de pruebas hasta definir SMTP (PA-03) | Recordatorio 24 h/1 h generado; job lo envía y marca; fallo reintenta 3 veces | RF-09 |
| T-22 | Front citas: M4 (emprendedor), E9 (bandeja) | J | 1,0 | Must | T-20, T-40 | CI | HU-09 | Real | Solicitud → agenda → resultado desde la UI | RF-08 |
| T-90 | Verificación de H1 en el servidor | Todos | 0,25 | Must | T-11, T-20, T-22 | FI | — | Real | Recorrido H1 sin errores | — |

### S2 · Conocer a cada empresa (5,25 h)

| ID | Tarea | Resp. | h | Prior. | Depende de | ISO | HU | Real / simulado | Criterio de aceptación / DoD | Req. |
|---|---|---|---|---|---|---|---|---|---|---|
| T-13 | Búsqueda global tolerante + front E4/E5 (alta con aviso, fusión) | S | 2,5 | Must | T-12 | AF, CI, ED | HU-01 | Real | "pamaderia" encuentra "panadería"; ≤ 2 acciones | RF-28, RNF-01 |
| T-14 | Importación CSV/XLSX: subir, mapear, vista previa, confirmar, revertir | S | 2,0 | Must | T-12 | CO, AF | HU-04 | Real; el archivo de demo es sintético | 509 filas < 60 s; resumen correcto; reversión funciona | RF-15, RNF-10 |
| T-17 | Paleta de comandos Ctrl+K: grupos (Empresas, Eventos, Contactos), recientes, atajos, navegación por teclado | MP | 0,5 | Must | T-13, T-40 | CI, AF | HU-01 | Real | Ctrl+K abre en < 100 ms; "pamaderia" → ficha con línea de tiempo en ≤ 20 s cronometrado; Esc cierra; funciona solo con teclado; hay plan alterno sin la librería | RF-28; D-01 |
| T-19 | Vista lado a lado de duplicados con diferencias resaltadas y botón Deshacer | MP | 0,25 | Must | T-12, T-40 | AF, CI | HU-03 | Real | Dos columnas con campos distintos resaltados; elegir qué valor conservar por campo; toast con Deshacer 30 s | RF-02, RF-03; D-02 |

### S3 · Acompañamiento y trazabilidad (5,5 h)

| ID | Tarea | Resp. | h | Prior. | Depende de | ISO | HU | Real / simulado | Criterio de aceptación / DoD | Req. |
|---|---|---|---|---|---|---|---|---|---|---|
| T-15 | Historial: listeners → `intervenciones`; API de línea de tiempo; pestaña front | S | 1,5 | Must | T-20, T-23, T-41, T-42 | AF, CI | HU-01 | Real | Empresa protagonista muestra ≥ 15 hitos de ≥ 5 tipos; ≤ 12 consultas SQL | RF-14, RF-16 |
| T-27 | Acabado de la línea de tiempo: icono por tipo, filtros por tipo y año, agrupación por semestre | MP | 0,5 | Must | T-15, T-40 | CI | HU-01 | Real | Empresa protagonista muestra ≥ 15 hitos de ≥ 5 tipos; filtros funcionan; legible a 1920×1080 proyectado | RF-14; D-04 |
| T-41 | Diagnósticos back+front (E7) con evolución | MP | 1,5 | Must | T-11 | AF | HU-05 | Real; los diagnósticos sembrados son sintéticos | Empresa con 3 diagnósticos muestra gráfica | RF-05 |
| T-42 | Proyectos de aula, planes, compromisos, vencidos (back+front E8, D1–D2) | MP | 2,0 | Must | T-11 | AF | HU-06, HU-07, HU-08 | Real | Compromiso exige responsable/fecha; filtro vencidos | RF-06, 07 |

### S4 · Eventos y formación por recompensas (11,25 h)

| ID | Tarea | Resp. | h | Prior. | Depende de | ISO | HU | Real / simulado | Criterio de aceptación / DoD | Req. |
|---|---|---|---|---|---|---|---|---|---|---|
| T-23 | Eventos back: CRUD, publicar, inscripción con cupo (lock), asistencia manual y QR, resumen | J | 2,5 | Must | T-10 | AF, FI | HU-12, HU-14, HU-15 | Real | Prueba de concurrencia de cupo (2 solicitudes simultáneas, 1 cupo); resumen inscritos/asistentes/no-show | RF-10..12 |
| T-24 | Front eventos: E10, M5 (oferta), pantalla de QR/asistencia | J | 2,0 | Must | T-23, T-40 | AF, CI | HU-14, HU-15 | Real | Inscripción ≤ 3 clics; asistencia en celular | RF-11, 12 |
| T-25 | Recomendación por reglas con motivo | J | 0,75 | Must | T-23, T-41 | AF | HU-13 | Real: reglas deterministas; no hay aprendizaje automático | 2 perfiles distintos obtienen listas distintas con motivo | RF-10 |
| T-43 | Gamificación back: retos, puntos (idempotentes), niveles, insignias, rachas, listeners, cola de validación | MP | 2,5 | Must | T-23, T-42 | AF, CI | HU-17, HU-18, HU-19 | Real | Asistir suma 30 puntos una sola vez; subir de nivel dispara insignia; sin doble cobro | RF-17, 18 |
| T-44 | Portal del emprendedor M2–M7 con animaciones de logro | MP | 3,0 | Must | T-43, T-22, T-24 | CI, SE | HU-16 | Real | Los 3 bloques de CRI-05 cargan < 2 s; toast de puntos y subida de nivel | RF-13, 17, 18 |
| T-46 | Consentimiento, "Descargar mis datos", solicitud de corrección | MP | 0,5 | Must | T-10 | SE, PR | HU-25 | Real: pantalla y descarga; Simulado: texto legal es borrador (04 §6) | Primer ingreso exige aceptar; JSON descargable | RNF-13 |

### S5 · Conocimiento e impacto (2,75 h)

| ID | Tarea | Resp. | h | Prior. | Depende de | ISO | HU | Real / simulado | Criterio de aceptación / DoD | Req. |
|---|---|---|---|---|---|---|---|---|---|---|
| T-16 | Reportes back: vistas de caracterización, brechas (último diagnóstico), KPIs de impacto, exportación CSV/XLSX/PDF | S | 1,25 | Must | T-41, T-11 | AF, CO | HU-20, HU-22 | Real | Cifras = consultas SQL de control (`08`); reporte ≤ 10 s | RF-20..22, RF-21, RNF-01, RNF-10 |
| T-45 | Dashboard, brechas y reporte (E11–E13) | MP | 1,5 | Must | T-16 | AF, CI | HU-20, HU-21, HU-22 | Real | Filtros funcionan; pregunta modelo en ≤ 3 interacciones | RF-20..22 |

### S6 · Diferenciadores Nivel 2 (3,75 h)

| ID | Tarea | Resp. | h | Prior. | Depende de | ISO | HU | Real / simulado | Criterio de aceptación / DoD | Req. |
|---|---|---|---|---|---|---|---|---|---|---|
| T-18 | Puntaje de calidad de datos por ficha y global (completitud 70 % + consistencia 30 %) y lista "fichas por completar" | S | 0,5 | Should | T-11 | AF, FI | — | Real | Puntaje global coincide con consulta SQL de control; lista filtrable por campo faltante; completar la ficha recalcula | RF-04; D-03 |
| T-26 | Job que crea la tarea "completar sector/tamaño" por ficha incompleta y notifica al responsable | J | 0,25 | Should | T-18, T-03 | AF | — | Real | Job idempotente (no duplica tareas); notificación visible en la bandeja; registro de ejecución | RF-04, RF-09; D-03 |
| T-28 | UI de calidad de datos: tarjeta global, anillo por ficha, lista de pendientes | MP | 0,5 | Should | T-18, T-40 | CI | — | Real | Completar una ficha sube el puntaje en pantalla sin recargar y suma puntos al emprendedor (RF-17) | RF-04, RF-17; D-03 |
| T-47 | Mapa de ruta ("Mi ruta"): nodos y camino en SVG, estados, animación de logro con respeto a "reducir movimiento", tarjeta "siguiente mejor acción" | MP | 1,25 | Should | T-43, T-44 | CI | HU-17, HU-18 | Real | Cerrar un compromiso ilumina el nodo, suma puntos una sola vez y muestra la animación; con prefers-reduced-motion no hay movimiento | RF-13, RF-17, RF-18; D-08, D-09 |
| T-48 | Catálogo de 6 preguntas guiadas (vistas SQL parametrizadas) y endpoint | S | 0,5 | Should | T-16 | AF, SE | HU-21 | Real: consultas fijas; no hay lenguaje natural ni IA | Cada pregunta con parámetros enlazados (sin SQL concatenado); resultado = consulta de control; "mayores brechas del sector Alimentos" ≤ 3 interacciones | RF-22; D-10A |
| T-49 | Selector de preguntas guiadas y mapa de calor sector × dimensión con clic a empresas afectadas | MP | 0,75 | Should | T-48, T-45 | AF, CI | HU-21 | Real | 17 sectores × dimensiones coloreados con paleta secuencial accesible; clic abre lista; texto alternativo/tabla equivalente para lectores de pantalla | RF-20, RF-22; D-10A, D-15 |

### S7 · Diferenciadores Nivel 3 (2 h)

| ID | Tarea | Resp. | h | Prior. | Depende de | ISO | HU | Real / simulado | Criterio de aceptación / DoD | Req. |
|---|---|---|---|---|---|---|---|---|---|---|
| T-50 | Panel de salud ISO 25010 (tarjetas) y auditoría navegable con filtros (usuario, empresa, fecha) | MP | 0,5 | Could | T-10, T-51 | SE, FI, MA | HU-24 | Real | Tarjetas por característica con dato real; auditoría filtra y pagina | RF-26, HU-24; D-13 |
| T-51 | Endpoint de métricas del panel (último respaldo, /health, p95 de la última medición, acciones auditadas hoy) | S | 0,25 | Could | T-03, T-10 | FI, ED | — | Real | Devuelve JSON con 4 métricas; solo rol administrador | RNF-06, RNF-07; D-13 |
| T-52 | Asistencia con vista en vivo (polling 5 s) y QR del evento con qrcode.react | J | 0,5 | Could | T-24 | AF | HU-15 | Real; depende de la red del laboratorio (PA-16) | Al marcar asistencia desde un celular el contador sube en ≤ 5 s sin recargar; QR abre la URL de asistencia | RF-12; D-06 |
| T-53 | Convocatoria segmentada: filtrar por perfil, enviar invitación y registrar a quién se convocó | J | 0,5 | Could | T-25, T-21 | AF | — | Real: registro; Simulado: envío al buzón de pruebas | Segmento → envío → registro de convocados; no repite invitación a la misma persona | RF-27; D-07 |
| T-54 | Radar de madurez con dos polígonos (primer vs. último diagnóstico) | MP | 0,25 | Could | T-41 | AF | HU-05 | Real | Dos polígonos con delta por dimensión; tabla equivalente accesible | RF-05; D-05 |

### S8 · Demo, calidad y entrega (9,25 h)

| ID | Tarea | Resp. | h | Prior. | Depende de | ISO | HU | Real / simulado | Criterio de aceptación / DoD | Req. |
|---|---|---|---|---|---|---|---|---|---|---|
| T-30 | DemoSeeder + factories de todos los módulos + validador de totales + `importacion_demo.csv` | J | 3,0 | Must | T-11, T-20, T-23, T-41, T-42 | FI, SE | — | Simulado por diseño: 100 % sintético | Totales de `04` §7.1 exactos; `DatosDemoTest` verde; `migrate:fresh --seed` < 3 min | RNF-14 |
| T-31 | Modo demostración: comando demo:reset + botón de administrador visible solo con APP_DEMO=true y banner "Datos sintéticos" | J | 0,5 | Must | T-30 | FI, FL | — | Real | Reinicio < 3 min deja los totales de 04 §7.1 exactos; el botón no existe con APP_DEMO=false; requiere escribir la palabra REINICIAR | RNF-14, RNF-12; D-12 |
| T-91 | Ensayo del camino dorado y lista de bloqueantes | Todos | 1,0 | Must | T-45, T-15, T-30 | AF | — | Real | 8 pasos de `02` §5 sin error; bloqueantes etiquetados `P0` | RN-10 |
| T-92 | Congelamiento, etiqueta `ff-1`, respaldo `pg_dump`, backlog de errores | J | 0,5 | Must | T-91 | FI | — | Real | Etiqueta y respaldo guardados | RNF-06 |
| T-93 | Triage de errores (P0/P1/P2) | Todos | 0,5 | Must | T-92 | MA | — | Real | Lista priorizada con dueño | — |
| T-94 | Candidato a entrega `v1.0-rc` + prueba de restauración + video/capturas de respaldo | J (video: MP) | 1,0 | Must | T-93 | FI | — | Real; el video es un respaldo grabado | Restauración verificada; video de 3 min grabado | RNF-06, 07 |
| T-95 | Ensayo cronometrado del pitch (≤ 5:00) y del demo; deck final | MP | 1,0 | Must | `09` | — | — | Real | Dos ensayos ≤ 5:00; deck exportado a PDF | RN-09, 11 |
| T-96 | Pruebas de seguridad y accesibilidad rápidas (listas de `08`) | S (seguridad), MP (accesibilidad) | 1,0 | Must | T-91 | SE, CI | — | Real | Ítems Must de los checklists en verde | RNF-03, 05 |
| T-97 | Prueba de usabilidad con ≥ 3 personas (SUS + tarea) | MP | 0,75 | Must | T-91 | CI | — | Real | Resultados anotados en `docs/USABILIDAD.md` | RNF-04 |

### Futuro (Won't / Could, fuera del alcance de las 25 h)

| ID | Tema | Prior. | Motivo |
|---|---|---|---|
| W-01 | Asistente de preguntas en lenguaje natural con IA (RF-29) | Won't | Riesgos de `13` D-10B |
| W-02 | Integración con Google Workspace (RF-30) | Could | Depende de PA-04 |
| W-03 | Recordatorios por WhatsApp/SMS | Won't | PA-03 |
| W-04 | Multi-institución con aislamiento de datos | Won't | `13` D-14 |

## 5. Colas por persona y puertas

Cada persona trabaja su cola en orden. Una tarea de nivel superior **no empieza** hasta que se cumpla la puerta. El orden dentro de la cola respeta las dependencias.

| Nivel | Puerta (se evalúa a esa hora) | Si falla |
|---|---|---|
| Núcleo (Must) | T-01 a las 10:00 confirma alcance | — |
| Nivel 2 (Should: T-18, T-26, T-28, T-47, T-48, T-49) | H1 cumplido a las 19:00 **y** T-43 funcionando a las 23:30 | Se queda la versión v1 de cada candidato (`13` corte) |
| Nivel 3 (Could: T-50..T-54) | H2 alcanzado antes de las 23:30 | No se hacen |

**Santiago**

| # | ID | Tarea | Prior. | h | Acumulado |
|---|---|---|---|---|---|
| 1 | T-10 | Auth Sanctum, 5 roles (spatie), policies base, middleware de auditoría, tabla `auditoria`,… | Must | 1,5 | 1,5 |
| 2 | T-11 | Empresas: migraciones, modelos, normalizadores (NIT/correo/nombre), CRUD API, filtros; fro… | Must | 3,0 | 4,5 |
| 3 | T-12 | Detección de duplicados (pg_trgm) + fusión transaccional + banner front | Must | 1,5 | 6 |
| 4 | T-13 | Búsqueda global tolerante + front E4/E5 (alta con aviso, fusión) | Must | 2,5 | 8,5 |
| 5 | T-14 | Importación CSV/XLSX: subir, mapear, vista previa, confirmar, revertir | Must | 2,0 | 10,5 |
| 6 | T-16 | Reportes back: vistas de caracterización, brechas (último diagnóstico), KPIs de impacto, e… | Must | 1,25 | 11,75 |
| 7 | T-15 | Historial: listeners → `intervenciones`; API de línea de tiempo; pestaña front | Must | 1,5 | 13,25 |
| 8 | T-18 | Puntaje de calidad de datos por ficha y global (completitud 70 % + consistencia 30 %) y li… | Should | 0,5 | 13,75 |
| 9 | T-48 | Catálogo de 6 preguntas guiadas (vistas SQL parametrizadas) y endpoint | Should | 0,5 | 14,25 |
| 10 | T-51 | Endpoint de métricas del panel (último respaldo, /health, p95 de la última medición, accio… | Could | 0,25 | 14,5 |

**Julián**

| # | ID | Tarea | Prior. | h | Acumulado |
|---|---|---|---|---|---|
| 1 | T-02 | Despliegue del esqueleto y CI en servidor (Coolify) con variables de entorno | Must | 1,0 | 1 |
| 2 | T-03 | Cola `database`, scheduler, Mailpit, `/health` | Must | 0,5 | 1,5 |
| 3 | T-20 | Citas: modelos, estados, solicitar/agendar/resultado/cancelar, policies | Must | 1,5 | 3 |
| 4 | T-21 | Recordatorios: creación al agendar, job de envío, plantillas, reintentos, bandeja "Notific… | Must | 1,0 | 4 |
| 5 | T-22 | Front citas: M4 (emprendedor), E9 (bandeja) | Must | 1,0 | 5 |
| 6 | T-23 | Eventos back: CRUD, publicar, inscripción con cupo (lock), asistencia manual y QR, resumen | Must | 2,5 | 7,5 |
| 7 | T-24 | Front eventos: E10, M5 (oferta), pantalla de QR/asistencia | Must | 2,0 | 9,5 |
| 8 | T-25 | Recomendación por reglas con motivo | Must | 0,75 | 10,25 |
| 9 | T-30 | DemoSeeder + factories de todos los módulos + validador de totales + `importacion_demo.csv… | Must | 3,0 | 13,25 |
| 10 | T-31 | Modo demostración: comando demo:reset + botón de administrador visible solo con APP_DEMO=t… | Must | 0,5 | 13,75 |
| 11 | T-26 | Job que crea la tarea "completar sector/tamaño" por ficha incompleta y notifica al respons… | Should | 0,25 | 14 |
| 12 | T-52 | Asistencia con vista en vivo (polling 5 s) y QR del evento con qrcode.react | Could | 0,5 | 14,5 |
| 13 | T-53 | Convocatoria segmentada: filtrar por perfil, enviar invitación y registrar a quién se conv… | Could | 0,5 | 15 |

**María Paula**

| # | ID | Tarea | Prior. | h | Acumulado |
|---|---|---|---|---|---|
| 1 | T-40 | Design system (tokens, componentes base), layout por rol, router, cliente API, pantalla de… | Must | 1,0 | 1 |
| 2 | T-41 | Diagnósticos back+front (E7) con evolución | Must | 1,5 | 2,5 |
| 3 | T-42 | Proyectos de aula, planes, compromisos, vencidos (back+front E8, D1–D2) | Must | 2,0 | 4,5 |
| 4 | T-43 | Gamificación back: retos, puntos (idempotentes), niveles, insignias, rachas, listeners, co… | Must | 2,5 | 7 |
| 5 | T-44 | Portal del emprendedor M2–M7 con animaciones de logro | Must | 3,0 | 10 |
| 6 | T-46 | Consentimiento, "Descargar mis datos", solicitud de corrección | Must | 0,5 | 10,5 |
| 7 | T-45 | Dashboard, brechas y reporte (E11–E13) | Must | 1,5 | 12 |
| 8 | T-19 | Vista lado a lado de duplicados con diferencias resaltadas y botón Deshacer | Must | 0,25 | 12,25 |
| 9 | T-17 | Paleta de comandos Ctrl+K: grupos (Empresas, Eventos, Contactos), recientes, atajos, naveg… | Must | 0,5 | 12,75 |
| 10 | T-27 | Acabado de la línea de tiempo: icono por tipo, filtros por tipo y año, agrupación por seme… | Must | 0,5 | 13,25 |
| 11 | T-28 | UI de calidad de datos: tarjeta global, anillo por ficha, lista de pendientes | Should | 0,5 | 13,75 |
| 12 | T-47 | Mapa de ruta ("Mi ruta"): nodos y camino en SVG, estados, animación de logro con respeto a… | Should | 1,25 | 15 |
| 13 | T-49 | Selector de preguntas guiadas y mapa de calor sector × dimensión con clic a empresas afect… | Should | 0,75 | 15,75 |
| 14 | T-50 | Panel de salud ISO 25010 (tarjetas) y auditoría navegable con filtros (usuario, empresa, f… | Could | 0,5 | 16,25 |
| 15 | T-54 | Radar de madurez con dos polígonos (primer vs. último diagnóstico) | Could | 0,25 | 16,5 |

## 6. Conciliación con `07` y balance de horas

| Cambio en `07` | Antes | Ahora | Motivo |
|---|---|---|---|
| T-12 Duplicados | 1,5 | 2,25 | Puntuación y deshacer (D-02) |
| T-13 Búsqueda | 2,5 | 2,75 | Endpoint agrupado para Ctrl+K (D-01) |
| T-14 Importación | 2,0 | 1,5 | Solo CSV, sin XLSX ni reversión (A1) |
| T-16 Reportes back | 1,25 | 0,75 | CSV + vista imprimible (A2) |
| T-40 Design system | 1,5 | 1,0 | Librería de componentes (A3, sujeto a F15; si no se confirma vuelve a 1,5) |

Las demás tareas v1 no cambian.

| Persona | Núcleo (Must) | + Nivel 2 | + Nivel 3 | Disponible día 1 (`07` §5) | Déficit con Núcleo | Déficit con todo |
|---|---|---|---|---|---|---|
| Santiago | 13,25 | 14,25 | 14,5 | 10,75 + 1,0 de ensayo | 2,5 | 3,75 |
| Julián | 13,75 | 14 | 15 | 10,75 + 1,0 de ensayo | 3 | 4,25 |
| María Paula | 13,25 | 15,75 | 16,5 | 10,75 + 1,0 de ensayo | 2,5 | 5,75 |

Lectura: el Núcleo de Santiago queda igual que v1 (13,25 h); el de Julián (13,75 h) y María Paula (13,25 h, antes 12,5 h) sube. El déficit frente a las 10,75 h del día 1 es de 2,5 h (S), 3,0 h (J) y 2,5 h (MP) **solo con el Núcleo**, y v1 ya declaraba 1,5–2,5 h; el aumento de Julián se debe a T-31. El déficit se absorbe con las contingencias de `07` §7 y con la ventana 6:30–7:30 del día 2. El Nivel 2 y el Nivel 3 **no se empiezan** sin cumplir su puerta. Regla: el primer recorte es siempre el nivel más alto; si hace falta más, se aplica el corte de cada candidato de `13`.

## 7. Trazabilidad historias → tareas

| Historia (`02` §4) | Tareas |
|---|---|
| HU-01 | T-13, T-15, T-17, T-27 |
| HU-02 | T-11, T-12 |
| HU-03 | T-12, T-19 |
| HU-04 | T-14 |
| HU-05 | T-41, T-54 |
| HU-06 | T-42 |
| HU-07 | T-42 |
| HU-08 | T-42 |
| HU-09 | T-20, T-22 |
| HU-10 | T-20, T-21 |
| HU-11 | T-20 |
| HU-12 | T-23 |
| HU-13 | T-25 |
| HU-14 | T-23, T-24 |
| HU-15 | T-23, T-24, T-52 |
| HU-16 | T-44 |
| HU-17 | T-43, T-47 |
| HU-18 | T-43, T-47 |
| HU-19 | T-43 |
| HU-20 | T-16, T-45 |
| HU-21 | T-45, T-48, T-49 |
| HU-22 | T-16, T-45 |
| HU-23 | T-10 |
| HU-24 | T-10, T-50 |
| HU-25 | T-46 |

## 8. Trazabilidad Must → tarea (comprobación de F19)

Cada requisito Must de `01` §11 debe aparecer en la columna Req. de al menos una tarea Must. La comprobación se ejecuta en F19 con un script y su resultado se registra en `PROGRESO.md`.

## 9. Cómo importar a GitHub Projects

1. Crear un proyecto en GitHub Projects con los campos: Épica (texto), Prioridad (selección: Must, Should, Could, Won't), Horas (número), Responsable (texto), Rebanada (texto).
2. Abrir `manual/backlog.csv` y copiar las columnas `id, titulo` como título del elemento (`T-12 · Detección de duplicados …`) y las demás en los campos. GitHub Projects no importa CSV de forma nativa: se pega por filas o se usa `gh project item-create` (la CLI `gh` requiere autenticación propia del equipo; no verificado en esta sesión).
3. Alternativa sin herramientas: abrir el CSV en una hoja de cálculo y usarla como tablero.

## Criterio de aceptación

1. `backlog.csv` tiene una fila por tarea de §4 más las 4 filas de futuro (comprobar con `wc -l`: 53 líneas = 1 encabezado + 48 tareas + 4 futuros).
2. Toda dependencia citada existe como ID en el CSV (comprobado el 27-oct-2026: 0 dependencias rotas).
3. La suma por persona de §6 coincide con `07` §5.2.
4. Las 25 historias de `02` tienen tarea, salvo las listadas como "sin tarea" (debe haber 0).
