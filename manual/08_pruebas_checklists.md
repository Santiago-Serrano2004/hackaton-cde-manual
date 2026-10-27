# 08 · Plan de pruebas y checklists

**Objetivo.** Demostrar con evidencia que cada requisito Must funciona: plan de pruebas por requisito, casos manuales de la demo, pruebas automáticas mínimas de mayor valor, checklists (seguridad, ISO 25010, accesibilidad, rendimiento, despliegue, T-60 min), datos y cuentas de demo, y respaldo de la demo.

**Entradas.** `01`, `05` §4/§8/§12, `07` (tareas), `04` §7.

---

## 1. Plan de pruebas por requisito (trazabilidad Must → tarea → prueba → responsable)

Tipos: **A** automática (Pest/Vitest), **M** manual (caso §2), **SQL** consulta de control (§4), **CK** checklist.

| Req. Must | Tarea | Prueba | Tipo | Resp. |
|---|---|---|---|---|
| RF-01 | T-11 | `EmpresaTest`: crear/editar con catálogos; campos fuera de catálogo → 422 | A | S |
| RF-02 | T-12 | `DedupTest`: normalización (`900.123.456-7`=`9001234567`), correo, similitud; los 12 sembrados → ≥ 11 detectados | A | S |
| RF-03 | T-12 | `FusionTest`: tras fusionar, 0 huérfanos, historial migrado, auditoría | A + SQL-03 | S |
| RF-05 | T-41 | `EvolucionTest`: 3 diagnósticos → serie ordenada por fecha | A | MP |
| RF-06 | T-42 | `ProyectoTest`: 2 proyectos por empresa; consultor solo ve el suyo | A | MP |
| RF-07 | T-42 | `CompromisoTest`: sin responsable/fecha → 422; vencidos calculados | A + SQL-05 | MP |
| RF-08 | T-20/T-22 | `CitaFlujoTest`: solicitada→agendada→realizada; transición inválida → 422 | A + M-04 | J |
| RF-09 | T-21 | `RecordatorioTest`: agendar crea 2 recordatorios; job con reloj simulado envía y marca; fallo reintenta 3 veces | A + M-04 | J |
| RF-10 | T-23/T-25 | `RecomendacionTest`: 2 perfiles → listas distintas con motivo | A | J |
| RF-11 | T-23/T-24 | `InscripcionTest`: cupo 1 y 2 solicitudes concurrentes → una inscrita, otra lista de espera/409 | A | J |
| RF-12 | T-23 | `AsistenciaTest`: QR válido registra; QR vencido (60 s) → 422; resumen cuadra | A + SQL-04 | J |
| RF-13 | T-44 | `PortalTest`: emprendedor ve solo lo suyo; 3 bloques < 2 s | A + M-06 | MP |
| RF-14 | T-15 | `HistorialTest`: protagonista ≥ 15 hitos de ≥ 5 tipos; ≤ 12 consultas | A + M-02 | S |
| RF-15 | T-14 | `ImportacionTest`: 509 filas → 497 nuevas/12 duplicadas, < 60 s; revertir | A + M-01 | S |
| RF-17 | T-43 | `PuntosTest`: asistir suma 30 una sola vez (idempotente); tope mensual | A + M-07 | MP |
| RF-18 | T-43 | `NivelesTest`: umbral 100 → nivel 2 + insignia | A + M-07 | MP |
| RF-20 | T-16/T-45 | `CaracterizacionTest` contra SQL-01 | A + SQL-01 | S |
| RF-21 | T-16 | `ReporteTest`: CSV (BOM) y vista imprimible < 10 s (R2, C-11); cifras = SQL-02 | A + M-08 | S |
| RF-22 | T-16/T-45 | `BrechasTest`: Alimentos devuelve ranking; n < 5 muestra advertencia | A + M-08 | S |
| RF-25 | T-10 | `MatrizRolesTest` (rol × endpoint de `05` §4) | A | S |
| RF-26 | T-10 | `AuditoriaTest`: crear/editar/fusionar/login generan entrada | A | S |
| RF-28 | T-13 | `BusquedaTest`: "pamaderia" → "Panadería…" | A + M-02 | S |
| RNF-01/02 | T-30, T-91 | Carga con 5 000 empresas; p95 ≤ 2 s; búsqueda ≤ 1 s; `EXPLAIN` usa índice | CK-Rend | J |
| RNF-03 | T-96 | CK-Seguridad (§5) | CK | S |
| RNF-04 | T-97 | SUS + tarea cronometrada | M-09 | MP |
| RNF-06 | T-94 | Restauración de `pg_dump` en base vacía y `SELECT count(*)` iguales | M-10 | J |
| RNF-07 | T-94 | Demo con red cortada usando plan B | M-11 | J |
| RNF-08 | T-02 | CI ejecuta pint, pest, eslint, tsc, build; cada módulo ≥ 1 prueba | CK-CI | J |
| RNF-09 | T-11.. | Cada Form Request tiene prueba de datos inválidos | A | dueño |
| RNF-10 | T-14, T-16 | CSV con tildes se abre en Excel sin corrupción (BOM) | M-08 | S |
| RNF-11 | T-02 | `docker compose up` en máquina limpia ≤ 15 min | CK-Despliegue | J |
| RNF-12 | T-12 | Fusión reversible (R2: la importación completa ya no se revierte, C-15); borrado lógico; confirmación modal | M-05 | S |
| RNF-13 | T-46 | Sin consentimiento no entra; "Descargar mis datos" devuelve JSON | A + M-06 | MP |
| RNF-14 | T-30 | `DatosDemoTest` (totales exactos); búsqueda de correos reales = 0 | A | J |

Cobertura: los 22 RF Must y los 13 RNF Must tienen tarea, prueba y responsable (verificación en `INDEX.md` y la auditoría F11).

### 1.1 Pruebas añadidas o cambiadas por la Ronda 2 (fuente: `tareas/T-XX.md` §7)

| Tarea | Prueba nueva o cambiada | Tipo | Req. |
|---|---|---|---|
| T-10 | `AuthTest` (throttle 6.º intento → 429), `MatrizRolesTest` rol × endpoint, `AuditoriaTest` (la tabla no se actualiza) | A | RF-25, RF-26, RNF-03 |
| T-11 | `NormalizadorTest` (NIT/correo/nombre), `EmpresaCrudTest` | A | RF-01, RNF-09 |
| T-12 | `DuplicadosTest` (12 sembrados: ≥ 11 detectados, ≤ 2 falsos positivos), `FusionTest` (0 huérfanos, deshacer restaura), fusión concurrente | A | RF-02, RF-03, RNF-12 |
| T-13 | `BusquedaTest` («pamaderia» ≥ 0,5; inyección sin efecto), p95 ≤ 1 s con 5 000 empresas, `EXPLAIN` usa el índice | A + SQL | RF-28, RNF-01/02 |
| T-14 | `ImportacionTest` (509 filas: 497 / 12 / 0 en < 60 s; separador `;` y tildes) | A | RF-15, RNF-10 |
| T-15 | `HistorialTest` (≥ 15 hitos de ≥ 5 tipos; ≤ 12 consultas; idempotencia) | A | RF-14 |
| T-16 | `ReportesTest` (cifras = SQL de control; CSV con BOM abre con tildes) | A + SQL | RF-20..22, RNF-10 |
| T-21 | `RecordatoriosTest` (2 recordatorios 24 h y 1 h; reintentos; cancelar) | A | RF-09 |
| T-23 | `CupoConcurrenciaTest` (1 cupo, 2 solicitudes), QR vencido rechazado, feed público sin datos personales | A | RF-11, RF-12 |
| T-25 | `RecomendacionTest` (perfiles distintos → listas y motivos distintos) | A | RF-10 |
| T-30 | `DatosDemoTest` (todos los totales de `04` §7.1) | A | RNF-14 |
| T-31 | `DemoResetTest` (404 con `APP_DEMO=false`; palabra de confirmación) | A | RNF-12, RNF-14 |
| T-43 | Idempotencia de puntos, topes mensuales, rachas, cola de validación | A | RF-17, RF-18 |
| T-48 | `PreguntasTest` (cada pregunta = SQL de control; inyección → 422) | A | RF-22 |
| T-17, T-19, T-27, T-47, T-49 | Vitest + Playwright + `axe` sobre paleta, comparador, línea de tiempo, mapa de ruta y mapa de calor | A | RF-28, RF-02/03, RF-14, RF-17/18, RF-22, RNF-05 |
| T-96 | `axe` sobre las 8 pantallas del camino dorado (manda sobre los contrastes calculados de `16`) | A + CK | RNF-03, RNF-05 |

Pruebas que **ya no aplican**: reversión de la importación completa (C-15), PDF/XLSX generados en servidor (C-11).

## 2. Casos manuales de la demo (guion de prueba)

Ejecutar completo en T-91 (00:30), T-94 (07:30) y T-60 (8:00 del día 2). Resultado esperado = aceptación del requisito.

| Caso | Pasos | Resultado esperado | Req. |
|---|---|---|---|
| M-01 Importar | Operador → Importar `importacion_demo.csv` → vista previa → confirmar | 509 filas: 497 nuevas/12 duplicadas marcadas; resumen; < 60 s | RF-15, 02 |
| M-02 Buscar y línea de tiempo | Buscar "pamaderia" → abrir ficha | Aparece Dulce Hogar; línea de tiempo con ≥ 15 hitos; tiempo total ≤ 20 s | RF-28, 14 |
| M-03 Madurez y planes | Pestañas Diagnósticos y Planes | Gráfica con 3 puntos; compromisos vencidos resaltados con texto + ícono | RF-05, 07 |
| M-04 Cita y recordatorio | Emprendedor solicita cita → operador agenda → botón "Simular tiempo" → Mailpit | Estados correctos; recordatorio en Mailpit; registro de envío | RF-08, 09 |
| M-05 Fusión reversible | Fusionar dos duplicados → ver historial → deshacer | Historial unido y luego restaurado; auditoría con ambos movimientos | RF-03, RNF-12 |
| M-06 Portal | Entrar como Marcela (emprendedora) | Aviso de privacidad la primera vez; etapa, pendientes, oferta con motivo; solo sus datos | RF-13, RNF-13 |
| M-07 Gamificación | Operador registra su asistencia → vuelve al portal | +30 puntos con toast; sube de nivel; insignia; reintento no suma | RF-17, 18 |
| M-08 Dashboard y reporte | Panorama → filtro Alimentos → brechas → exportar reporte | Cifras = SQL; CSV abre en Excel con tildes | RF-20..22, RNF-10 |
| M-09 Usabilidad | 3+ personas ajenas: inscribirse a un evento sin ayuda; SUS | ≥ 80 % en ≤ 2 min; SUS ≥ 68 | RNF-04 |
| M-10 Restauración | Crear respaldo → restaurar en BD vacía | Conteos iguales | RNF-06 |
| M-11 Sin red | Desconectar internet; `docker compose up` local | Camino dorado completo | RNF-07 |
| M-12 Seguridad visible | Emprendedor intenta `/api/v1/auditoria` | 403; el admin ve el intento | RF-25, 26 |

## 3. Pruebas automáticas mínimas de mayor valor (orden de prioridad)

1. `MatrizRolesTest` (seguridad).
2. `DedupTest` + `FusionTest` (diferenciador y CRI-07).
3. `ImportacionTest`.
4. `InscripcionTest` concurrencia de cupo + `PuntosTest` idempotencia.
5. `RecordatorioTest` con reloj simulado.
6. `CaracterizacionTest`/`ReporteTest` contra SQL de control.
7. `DatosDemoTest`.
8. Test de arquitectura (módulos no importan internals ajenos), `[NO VERIFICADO: soporte arch() en la versión de Pest]`.
9. Front: Vitest solo para utilidades (normalización, formateo); Playwright opcional para el camino dorado (`[NO VERIFICADO]` para instalación sin red), no obligatorio.

Meta: ≥ 25 pruebas automáticas verdes en CI al FF. No se busca % de cobertura; se busca confianza en lo que se demuestra.

## 4. Consultas SQL de control (cuadre de cifras)
Cada una se guarda en `docs/sql_control.sql` y su resultado esperado figura en `docs/DEMO.md`.

| ID | Qué verifica | Resultado esperado |
|---|---|---|
| SQL-01 | `SELECT sector_id, count(*) FROM empresas WHERE deleted_at IS NULL GROUP BY 1` | Alimentos 50, Comercio 36, Servicios 25, Manufactura 20, Turismo 13, otros 12 sectores × 3, nulos 317 |
| SQL-02 | KPIs del reporte de impacto (periodo completo) | Igual a la tarjeta del dashboard |
| SQL-03 | Huérfanos: `SELECT count(*) FROM citas WHERE empresa_id IS NULL` (y demás tablas) | 0 |
| SQL-04 | Eventos: `inscritos`, `asistentes`, `no_show` | inscritos = asistentes + no_show (con asistentes sin inscripción reportados aparte) |
| SQL-05 | `compromisos` sin responsable o sin fecha | 0 |
| SQL-06 | Duplicados: `SELECT nit_norm, count(*) FROM empresas WHERE nit_norm IS NOT NULL GROUP BY 1 HAVING count(*)>1` | 0 filas |
| SQL-07 | Totales de demo: empresas 497; UNAB 185 (91/77/17); con sector 180; con tamaño 184; atenciones 569 | Exactos |

## 5. Checklists

### 5.1 Seguridad (RNF-03) - Must marcados (M)
- [ ] (M) `APP_DEBUG=false`, `APP_ENV=production` en el servidor.
- [ ] (M) Sin secretos en el repo (`git log -p | grep -i "password\|secret\|key"` revisado; `.env` ignorado).
- [ ] (M) Matriz de roles probada (MatrizRolesTest verde).
- [ ] (M) Límite de intentos de login activo (6.º intento → 429).
- [ ] (M) Contraseñas con hash; cuentas de demo con contraseñas no reutilizadas.
- [ ] (M) Entrada validada en servidor; prueba de inyección SQL/XSS sin efecto.
- [ ] (M) CORS limitado al origen del front.
- [ ] (M) Subida de archivos: tipo/tamaño; archivo `.php` rechazado.
- [ ] (M) Errores sin trazas en producción.
- [ ] (M) **R3 (J1):** cabeceras de seguridad con CSP en el proxy, configuradas en el esqueleto previo (P-01 de `20` §4); HTTPS.
- [ ] (M) **R3 (RK-1):** la exportación CSV antepone `'` a las celdas que empiezan por `=`, `+`, `-` o `@` (prueba en `ReporteTest`).
- [ ] (S) `composer audit` y `npm audit` sin críticos `[NO VERIFICADO: disponible sin red]`.
- [ ] (M) Datos demo 100 % sintéticos; ningún correo real.

### 5.2 ISO/IEC 25010 (una línea por característica; evidencia a mostrar)
- [ ] AF: tabla Reto → pantalla con los 10 criterios CRI-01..10 demostrados.
- [ ] ED: medición p95 con 5 000 empresas anotada.
- [ ] CO: importación + exportación abiertas en Excel.
- [ ] CI: SUS + tarea cronometrada + accesibilidad.
- [ ] FI: prueba de restauración y `RecordatorioTest` (R3: sin matar el worker en vivo).
- [ ] SE: 403 en intento no autorizado + auditoría visible.
- [ ] MA: árbol de módulos, CI verde, agregar un reto insertando una fila (R3, C-43).
- [ ] FL: `docker compose up` en máquina limpia (tiempo anotado en T-00); catálogo cambiado editando `21_catalogos.csv` (R3, C-43).
- [ ] PR: borrado lógico y confirmaciones; fusión reversible **solo en la variante B** (R3, C-42; R2: no la importación completa).

### 5.3 Accesibilidad (RNF-05) - revisión manual de las 8 pantallas del camino dorado
- [ ] Contraste ≥ 4,5:1 (tokens de `06` §5).
- [ ] Todo operable con teclado; foco visible.
- [ ] Cada campo con etiqueta; errores asociados.
- [ ] Estados no dependen solo del color.
- [ ] Móvil 360 px sin scroll horizontal; objetivos táctiles ≥ 44 px.
- [ ] `prefers-reduced-motion` respetado.
- [ ] Zoom 200 % utilizable.
- [ ] Herramienta automática (axe/Lighthouse) sin errores críticos `[NO VERIFICADO: versión]`.

### 5.4 Rendimiento (RNF-01/02)
- [ ] 5 000 empresas sintéticas cargadas (`CargaSeeder`, una línea con las factories de T-30; **R3: dentro de T-96**, S 0,75 h; si no cabe, se mide con las 497 y así se dice).
- [ ] Lista de empresas p95 ≤ 2 s; búsqueda ≤ 1 s; línea de tiempo ≤ 2 s; dashboard ≤ 2 s.
- [ ] `EXPLAIN` de búsqueda por NIT y por nombre usa índice.
- [ ] Ninguna lista sin paginar; N+1 verificado en historial.

### 5.5 Despliegue (RNF-07, RNF-11)
- [ ] `main` etiquetada; despliegue desde esa etiqueta.
- [ ] Migraciones corren en entorno limpio; `migrate:fresh --seed` < 3 min.
- [ ] Variables de entorno completas; correo configurado.
- [ ] Worker y scheduler activos (job de prueba corrió en los últimos 5 min).
- [ ] `/health` 200.
- [ ] Respaldo reciente (< 1 h) fuera del servidor.
- [ ] Plan B local verificado; imágenes Docker guardadas (`docker save`).
- [ ] URL pública abre desde otro dispositivo y desde la red del laboratorio.

### 5.6 Checklist T-60 minutos (**R3, C-48:** de 7:30 a 8:00 del 29-oct, dentro de T-94, antes de V2 y de la entrega a las 9:00)
- [ ] Último `main` desplegado y etiquetado `v1.0-rc`; `git status` limpio en las 3 máquinas.
- [ ] `docs/DEMO.md` con cuentas funcionando (login de los 5 roles).
- [ ] Reiniciar la base de demo (`migrate:fresh --seed`) y ejecutar M-01..M-08 una vez completos.
- [ ] Mailpit vacío antes de la demo.
- [ ] Reloj del servidor correcto; botón "Simular tiempo" probado.
- [ ] Respaldo restaurado en una BD de prueba (RNF-06).
- [ ] Video de 3 min y capturas guardados en 2 dispositivos y en la nube.
- [ ] Deck exportado a PDF y abierto en el portátil que presentará; adaptadores HDMI/USB-C y cargadores.
- [ ] Modo avión probado (plan B local) en el portátil de demo.
- [ ] Navegador: ventana limpia, zoom 100 %, sin notificaciones, sin pestañas personales, perfil de demostración.
- [ ] Ensayo del pitch completo ≤ 5:00 dos veces.
- [ ] Definido quién habla en cada segmento y quién maneja el teclado.
- [ ] Lista de preguntas del jurado repasada (`09`).
- [ ] Congelamiento (**R3, C-47**): desde las 8:30 solo cambios de ≤ 15 líneas aprobados por dos personas; ninguno después de las 8:45.

## 6. Datos y cuentas de demo (`docs/DEMO.md`)

| Rol | Usuario (ficticio) | Contraseña | Uso |
|---|---|---|---|
| Administrador | admin@demo.test | definida por el equipo, no real | Auditoría, usuarios |
| Equipo CDE | operador@demo.test | idem | Camino dorado |
| Docente | docente@demo.test | idem | Proyectos |
| Consultor | consultor@demo.test | idem | Planes |
| Emprendedor | marcela@demo.test | idem | Portal y gamificación |

Las contraseñas **no** se versionan en el repo del manual; viven en `docs/DEMO.md` del repo privado de desarrollo `PROPUESTA` y se rotan al terminar. Dominio `.test` reservado (no entrega correo real; `[NO VERIFICADO]` RFC 2606).

## 7. Respaldo de la demo
1. **Video** de 3 minutos del camino dorado (pasos 2, 4–7 de `02`), grabado en T-94, con voz o subtítulos; guardado en 2 dispositivos.
2. **Capturas** de las 10 pantallas clave (E3, E6, E9, E10, E11, E12, M2, M5, M7, auditoría).
3. **Base de datos de demo** en `dump.sql` + imágenes Docker guardadas.
4. **PDF del deck** y PDF de `docs/DEMO.md` sin contraseñas.
5. Orden de caída: servidor público → servidor local con red → servidor local sin red → video.

## Criterio de aceptación de este archivo
- Cada RF/RNF Must del §1 tiene prueba y responsable.
- Los 12 casos manuales M-01..M-12 producen resultado esperado en tres ensayos (T-91, T-94, T-60).
- Las 7 consultas SQL de control devuelven los valores esperados.
- Todos los ítems (M) de los checklists están marcados antes de las 9:00.
