# 07 · Plan de construcción hora a hora (28-oct 8:00 → 29-oct 9:00)

**Objetivo.** Línea de tiempo con tareas numeradas, pequeñas y commiteables, con responsable, dependencias, estimación y definición de terminado; primer hito de punta a punta, congelamiento de funciones y contingencias.

**Entradas.** `01`–`06`; cronograma del TyC (horas fijas) y chat (experiencia del equipo). Supuestos del cronograma: ver V-01/PA-01 (hora de fin del "desarrollo continuo" desconocida) y PA-22 (esqueleto previo).

## 1. Horas fijas (TyC §2, `02_presentacion` diap. 10)
| Cuándo | Qué |
|---|---|
| 28-oct 8:00–8:30 | Instalación de equipos |
| 28-oct 8:30–10:00 | Reglas, presentación del reto y preguntas con el CDE |
| 28-oct 10:00–12:00 | Desarrollo |
| 28-oct 12:00–14:00 | Receso (almuerzo libre) |
| 28-oct 14:00–17:00 | Desarrollo |
| 28-oct 17:00–17:30 | **Validación 1** con el CDE (5 min por equipo) |
| 28-oct tarde-noche | "Desarrollo continuo" (sin hora de fin conocida) |
| 29-oct 8:00–8:30 | **Validación 2** |
| 29-oct 8:30–9:00 | Desarrollo final y preparación del pitch |
| 29-oct 9:00–9:15 | **Cierre del desarrollo**: entrega de herramienta y material del pitch; sorteo de orden |
| 29-oct 9:15–10:30 | Pitch (5 + 5 min por equipo) |
| 29-oct 12:00–12:30 | Anuncio del ganador |

Total entre 8:00 y 9:00 del día siguiente: **25 h** de reloj. Con 8 h de sueño-descanso y 3 h de comidas/receso/validaciones no queda más de ~**14 h** de construcción por persona; el plan asigna ~**12–13 h** nominales por persona y reserva ~2 h de estabilización; hay déficit declarado en §5.

## 2. Reparto de responsabilidades (PROPUESTA; PA-11)

Criterio: cada persona es **dueña de módulos completos** (back + front) para no bloquearse. Basado en el chat: Santiago domina Laravel/PostgreSQL y creó el repositorio; Julián gestiona Docker, Coolify, el servidor y el despliegue; María Paula impulsó definir la solución y la arquitectura modular. El chat no asigna roles de front ni de pitch: es una propuesta.

| Persona | Rol | Módulos |
|---|---|---|
| **Santiago Serrano** | Líder técnico del núcleo de datos | Seguridad (auth, roles, auditoría), Empresas (dedup, fusión, búsqueda), Importación, Reportes (dashboard/brechas, back), Historial |
| **Julián Arteaga** | Infraestructura + operación | Despliegue/CI/respaldos, Citas, Recordatorios, Eventos (inscripción, asistencia, recomendación), DemoSeeder y plan B |
| **María Paula Saavedra** | Producto, UX y gamificación | Design system y layout, Diagnósticos, Proyectos y planes, Gamificación, Portal del emprendedor, Dashboard (front), pitch y negocio |

Revisión cruzada: S revisa a J; J revisa a MP; MP revisa a S (5 min por PR).

## 3. Hitos y puertas

| Hito | Hora | Definición de terminado |
|---|---|---|
| **H0** Esqueleto vivo | 28-oct 10:30 | Esqueleto levantado en las 3 máquinas y en el servidor, CI verde |
| **H1 Recorrido de punta a punta** | 28-oct 19:00 | En el servidor: login (operador y emprendedor) → crear empresa (con aviso de duplicado) → emprendedor solicita cita → operador la agenda → se ve en la ficha y llega el recordatorio (Mailpit). Sin pulir |
| **V1** Validación 1 | 28-oct 17:00 | Demo parcial de 5 min (ver §6) |
| **H2** Camino dorado completo | 29-oct 00:30 | Los 8 pasos de `02` §5 corren con datos sembrados |
| **FF** Congelamiento de funciones | **29-oct 01:30** | Sin funciones nuevas; solo correcciones |
| **H3** Candidato a entrega | 29-oct 07:00 | `main` etiquetada `v1.0-rc`, CI verde, desplegada, respaldo restaurado en prueba |
| **V2** Validación 2 | 29-oct 8:00 | Demo de 5 min con el camino dorado |
| **Cierre** | 29-oct 9:00 | Etiqueta `v1.0` desplegada; video y capturas guardados; deck listo |

## 4. Línea de tiempo hora a hora

Convención: S = Santiago, J = Julián, MP = María Paula.

### Día 1 · miércoles 28
| Hora | Todos | S | J | MP |
|---|---|---|---|---|
| 8:00–8:30 | Instalación; `git clone`, `docker compose up`, acceso al servidor (T-00) | | | |
| 8:30–10:00 | Sesión con el CDE: S y MP hacen las preguntas de `10`; J toma notas en `docs/RESPUESTAS_CDE.md`; se pregunta PA-22 | | | |
| 10:00–10:30 | Reunión de ajuste (T-01): decidir cambios al alcance según respuestas | | | |
| 10:30–12:00 | | T-10 Auth/roles/auditoría | T-02 Deploy + CI; T-03 cola/correo | T-40 Design system + layout |
| 12:00–14:00 | **Receso**. Opcional 20 min: leer `09` y asignar partes del pitch | | | |
| 14:00–15:30 | | T-11 Empresas back + front (parte 1) | T-20 Citas back | T-41 Diagnósticos back+front |
| 15:30–17:00 | | T-11 (parte 2) + T-12 Dedup/fusión | T-21 Recordatorios; T-22 Front citas | T-42 Proyectos/planes (back+front) |
| 17:00–17:30 | **V1:** presenta S (técnico) y MP (producto); J sigue construyendo | | | |
| 17:30–19:00 | | T-13 Búsqueda + front E2–E5 | T-23 Eventos back | T-43 Gamificación back |
| 19:00–19:45 | **Cena**; H1 se verifica en el servidor (T-90) | | | |
| 19:45–20:15 | | T-13 (cierre) | T-23 (cierre) | T-43 (cierre) |
| 20:15–22:15 | | T-14 Importación | T-24 Front eventos + asistencia QR | T-44 Portal del emprendedor |
| 22:15–23:30 | | T-16 Reportes back | T-25 Recomendación | T-44 (cierre); T-46 Consentimiento / Mis datos |
| 23:30–00:30 | | T-15 Historial + línea de tiempo | T-30 DemoSeeder (parte 1) | T-45 Dashboard/brechas/reporte (front) |
| 00:30–01:30 | **H2**: ensayo del camino dorado completo, corrección de bloqueantes (T-91) | | | |
| 01:30–02:00 | **FF:** etiqueta `ff-1`; despliegue; respaldo; backlog de errores (T-92) | | | |
| 02:00–06:00 | **Sueño (4 h).** Si el laboratorio cierra: irse a casa y volver a las 6:00 (PA-01) | | | |

### Día 2 · jueves 29
| Hora | Todos |
|---|---|
| 6:00–6:30 | Desayuno; triage del backlog de errores (T-93) |
| 6:30–7:30 | Corrección de errores (S: datos/back; J: despliegue/estabilidad; MP: UX/fallos del front) |
| 7:30–8:00 | **H3** (T-94): etiqueta `v1.0-rc`, despliegue, prueba de restauración, respaldo de la demo (video/capturas) |
| 8:00–8:30 | **V2** presenta MP (producto) + S (técnico); J garantiza servidor y plan B |
| 8:30–9:00 | Solo cambios de ≤ 15 líneas aprobados por 2 personas; ensayo de pitch (T-95); deck final |
| 9:00–9:15 | **Entrega:** etiqueta `v1.0`, enlaces, deck; checklist T-60 ya ejecutada |
| 9:15 | Pitch en el orden sorteado |

Nota: el checklist de T-60 minutos (a las 8:00) está en `08`.

## 5. Tareas numeradas

Estimaciones en horas efectivas. "DoD" = definición de terminado (debe cumplirse completa para marcar la tarea). Todas: commit con `Refs T-xx`, lint y pruebas del módulo en verde, PR revisado.

| ID | Tarea | Resp. | Est. | Depende de | DoD | Req. |
|---|---|---|---|---|---|---|
| T-00 | Levantar esqueleto en las 3 máquinas; accesos al servidor y GitHub | Todos | 0,5 | Esqueleto | `docker compose up` ok en las 3; acceso SSH/Coolify probado | RNF-11 |
| T-01 | Reconciliar respuestas del CDE con alcance; actualizar `docs/DECISIONES.md` | Todos | 0,5 | — | Lista de cambios firmada por los 3 | — |
| T-02 | Despliegue del esqueleto y CI en servidor (Coolify) con variables de entorno | J | 1,0 | T-00 | URL pública (o local) responde; push a `main` redepliega; CI verde | RNF-07, 11 |
| T-03 | Cola `database`, scheduler, Mailpit, `/health` | J | 0,5 | T-02 | Job de ejemplo ejecuta; correo llega a Mailpit; `/health` 200 | RF-09, RNF-06 |
| T-10 | Auth Sanctum, 5 roles (spatie), policies base, middleware de auditoría, tabla `auditoria`, throttle | S | 1,5 | T-00 | Login/logout/me; usuario por rol sembrado; test rol×endpoint con 3 casos; login queda en auditoría | RF-25, 26 |
| T-11 | Empresas: migraciones, modelos, normalizadores (NIT/correo/nombre), CRUD API, filtros; front E2/E3 (cabecera, pestañas vacías) | S | 3,0 | T-10, T-40 | Crear/editar/listar con paginación; catálogos desde listas; ficha navegable | RF-01 |
| T-12 | Detección de duplicados (pg_trgm) + fusión transaccional + banner front | S | 2,25 (R2; antes 1,5) | T-11 | Prueba: 12 duplicados sembrados → ≥ 11 detectados; fusión mueve historial; auditoría | RF-02, 03 |
| T-13 | Búsqueda global tolerante + front E4/E5 (alta con aviso, fusión) | S | 2,75 (R2; antes 2,5) | T-12 | "pamaderia" encuentra "panadería"; ≤ 2 acciones | RF-28 |
| T-14 | Importación CSV (R2: sin XLSX ni reversión): subir, mapear, vista previa, confirmar | S | 1,5 (R2; antes 2,0) | T-12 | 509 filas < 60 s; resumen correcto; reversión funciona | RF-15 |
| T-15 | Historial: listeners → `intervenciones`; API de línea de tiempo; pestaña front | S | 1,5 | T-20, T-23, T-41, T-42 | Empresa protagonista muestra ≥ 15 hitos de ≥ 5 tipos; ≤ 12 consultas SQL | RF-14, RF-16 |
| T-16 | Reportes back: vistas de caracterización, brechas (último diagnóstico), KPIs de impacto, exportación CSV (UTF-8 con BOM) y vista imprimible para PDF (R2; XLSX solo si sobra tiempo) | S | 0,75 (R2; antes 1,25) | T-41, T-11 | Cifras = consultas SQL de control (`08`); reporte ≤ 10 s | RF-20..22, RF-21 |
| T-20 | Citas: modelos, estados, solicitar/agendar/resultado/cancelar, policies | J | 1,5 | T-10 | Flujo completo vía API; toda cita con empresa | RF-08 |
| T-21 | Recordatorios: creación al agendar, job de envío, plantillas, reintentos, bandeja "Notificaciones" | J | 1,0 | T-20, T-03 | Recordatorio 24 h/1 h generado; job lo envía y marca; fallo reintenta 3 veces | RF-09 |
| T-22 | Front citas: M4 (emprendedor), E9 (bandeja) | J | 1,0 | T-20, T-40 | Solicitud → agenda → resultado desde la UI | RF-08 |
| T-23 | Eventos back: CRUD, publicar, inscripción con cupo (lock), asistencia manual y QR, resumen | J | 2,5 | T-10 | Prueba de concurrencia de cupo (2 solicitudes simultáneas, 1 cupo); resumen inscritos/asistentes/no-show | RF-10..12 |
| T-24 | Front eventos: E10, M5 (oferta), pantalla de QR/asistencia | J | 2,0 | T-23, T-40 | Inscripción ≤ 3 clics; asistencia en celular | RF-11, 12 |
| T-25 | Recomendación por reglas con motivo | J | 0,75 | T-23, T-41 | 2 perfiles distintos obtienen listas distintas con motivo | RF-10 |
| T-30 | DemoSeeder + factories de todos los módulos + validador de totales + `importacion_demo.csv` | J | 3,0 (distribuida: parte 1 a las 23:30; parte 2 a las 00:30) | T-11, T-20, T-23, T-41, T-42 | Totales de `04` §7.1 exactos; `DatosDemoTest` verde; `migrate:fresh --seed` < 3 min | RNF-14 |
| T-40 | Design system (tokens, componentes base), layout por rol, router, cliente API, pantalla de login y rutas protegidas | MP | 1,0 (R2; antes 1,5) | T-00 | Tokens de `06` §5; Button/Input/Table/Card/Modal/Toast/Timeline; rutas por rol; contrastes ≥ 4,5:1 | RNF-04, 05 |
| T-41 | Diagnósticos back+front (E7) con evolución | MP | 1,5 | T-11 | Empresa con 3 diagnósticos muestra gráfica | RF-05 |
| T-42 | Proyectos de aula, planes, compromisos, vencidos (back+front E8, D1–D2) | MP | 2,0 | T-11 | Compromiso exige responsable/fecha; filtro vencidos | RF-06, 07 |
| T-43 | Gamificación back: retos, puntos (idempotentes), niveles, insignias, rachas, listeners, cola de validación | MP | 2,5 | T-23, T-42 | Asistir suma 30 puntos una sola vez; subir de nivel dispara insignia; sin doble cobro | RF-17, 18 |
| T-44 | Portal del emprendedor M2–M7 con animaciones de logro | MP | 3,0 | T-43, T-22, T-24 | Los 3 bloques de CRI-05 cargan < 2 s; toast de puntos y subida de nivel | RF-13, 17, 18 |
| T-45 | Dashboard, brechas y reporte (E11–E13) | MP | 1,5 | T-16 | Filtros funcionan; pregunta modelo en ≤ 3 interacciones | RF-20..22 |
| T-46 | Consentimiento, "Descargar mis datos", solicitud de corrección | MP | 0,5 | T-10 | Primer ingreso exige aceptar; JSON descargable | RNF-13 |
| T-90 | Verificación de H1 en el servidor | Todos | 0,25 | T-11, T-20, T-22 | Recorrido H1 sin errores | — |
| T-91 | Ensayo del camino dorado y lista de bloqueantes | Todos | 1,0 | T-45, T-15, T-30 | 8 pasos de `02` §5 sin error; bloqueantes etiquetados `P0` | RN-10 |
| T-92 | Congelamiento, etiqueta `ff-1`, respaldo `pg_dump`, backlog de errores | J (con S/MP) | 0,5 | T-91 | Etiqueta y respaldo guardados | RNF-06 |
| T-93 | Triage de errores (P0/P1/P2) | Todos | 0,5 | T-92 | Lista priorizada con dueño | — |
| T-94 | Candidato a entrega `v1.0-rc` + prueba de restauración + video/capturas de respaldo | J (video: MP) | 1,0 | T-93 | Restauración verificada; video de 3 min grabado | RNF-06, 07 |
| T-95 | Ensayo cronometrado del pitch (≤ 5:00) y del demo; deck final | MP (S y J ensayan) | 1,0 | `09` | Dos ensayos ≤ 5:00; deck exportado a PDF | RN-09, 11 |
| T-96 | Pruebas de seguridad y accesibilidad rápidas (listas de `08`) | S (seguridad), MP (accesibilidad) | 1,0 | T-91 | Ítems Must de los checklists en verde | RNF-03, 05 |
| T-97 | Prueba de usabilidad con ≥ 3 personas (SUS + tarea) | MP | 0,75 | T-91 | Resultados anotados en `docs/USABILIDAD.md` | RNF-04 |

Carga nominal por persona en el día 1 (suma de estimaciones de la tabla): S = 13,25 h (T-10, 11, 12, 13, 14, 16, 15); J = 13,25 h (T-02, 03, 20..25, 30); MP = 12,5 h (T-40..46). Disponibilidad día 1 con las ventanas de §4: 10:30–12:00 (1,5) + 14:00–17:00 (3) + 17:30–19:00 (1,5) + 19:45–00:30 (4,75) = **10,75 h**, más 00:30–01:30 (1 h, reservada al ensayo T-91), de modo que hay un **déficit de ~1,5–2,5 h por persona**. Se cubre así: (a) las estimaciones son nominales y las tareas con Should se recortan antes (ver `02` §3.4); (b) T-13 y T-24 incluyen tiempo de front que se puede simplificar; (c) la ventana 6:30–7:30 del día 2 corrige lo que se haya quedado en `P1`; (d) se activan las contingencias de §7 sin discutir. Si al revisar a las 10:00 el equipo no acepta el déficit, mover T-16 a J (PA-23) y recortar T-14 a CSV.

### 5.1 Ronda 2: tareas añadidas y cambios de horas (detalle en `14_backlog.md`, fuente única de IDs y horas)

Las horas de T-12, T-13, T-14, T-16 y T-40 de la tabla de §5 ya incluyen el cambio de la Ronda 2 (se indica la cifra anterior). Tareas nuevas (descripción, criterio de aceptación y dependencias en `14_backlog.md` §4 y `backlog.csv`):

| Nivel | Tareas | Horas por persona |
|---|---|---|
| Núcleo (Must) | T-17 (MP 0,5), T-19 (MP 0,25), T-27 (MP 0,5), T-31 (J 0,5) | MP 1,25 · J 0,5 |
| Nivel 2 (Should, con puerta) | T-18 (S 0,5), T-26 (J 0,25), T-28 (MP 0,5), T-47 (MP 1,25), T-48 (S 0,5), T-49 (MP 0,75) | S 1,0 · J 0,25 · MP 2,5 |
| Nivel 3 (Could, con puerta) | T-50 (MP 0,5), T-51 (S 0,25), T-52 (J 0,5), T-53 (J 0,5), T-54 (MP 0,25) | S 0,25 · J 1,0 · MP 0,75 |

### 5.2 Balance de horas por persona (actualiza el párrafo anterior)

| Persona | v1 | Núcleo R2 | + Nivel 2 | + Nivel 3 | Disponible día 1 | Déficit Núcleo |
|---|---|---|---|---|---|---|
| Santiago | 13,25 | 13,25 | 14,25 | 14,5 | 10,75 (+1,0 ensayo H2) | 2,5 |
| Julián | 13,25 | 13,75 | 14,0 | 15,0 | 10,75 (+1,0) | 3,0 |
| María Paula | 12,5 | 13,25 | 15,75 | 16,5 | 10,75 (+1,0) | 2,5 |

El déficit **no desaparece** con la Ronda 2: el Núcleo sube 0,5 h a Julián y 0,75 h a María Paula y deja igual a Santiago. Las puertas de nivel (14 §5) impiden empezar Nivel 2 y 3 sin holgura real. Las contingencias de §7 se aplican sin cambios; se añaden dos: (1) si a las 22:15 T-12 sigue abierta, T-19 se aplaza y la fusión queda sin vista lado a lado; (2) si MP supera +1,5 h sobre su cola Núcleo a las 23:30, se descarta T-47 (queda la lista de retos de v1).

### 5.3 Rebanadas verticales

Las tareas se agrupan en rebanadas S0..S8 (`14` §2). H0 = S0, H1 = S1. El resto de hitos de §3 no cambia.

## 6. Validaciones con el CDE

### V1 · 28-oct 17:00 (5 min)
Preparar a las 16:30 (T-V1, J despliega la rama estable). Contenido: (1) login y rol; (2) buscar empresa y ficha; (3) aviso de duplicado; (4) emprendedor solicita cita; (5) pregunta al CDE: "¿Qué indicador necesitan ver primero? ¿Qué es 'divertido' para ustedes?". Guardar la respuesta en `docs/RESPUESTAS_CDE.md`. Si no hay nada vistoso, mostrar el diseño (E3/M2) y los 12 duplicados detectados.

### V2 · 29-oct 8:00
Camino dorado de 5 min + "qué haríamos a futuro". Registrar observaciones del CDE, **sin cambiar código** salvo correcciones triviales.

## 7. Congelamiento (FF) y contingencias

| Disparador | Acción |
|---|---|
| A las 19:00 H1 no funciona | Se pausan T-14 y T-24; los 3 se juntan 45 min en H1; pase por pantalla compartida |
| A las 22:15 T-14 (importación) incompleta | Importar solo CSV, sin XLSX ni reversión; vista previa solo con semáforo |
| A las 23:30 T-43 incompleta | Sin rachas ni insignias; quedan puntos + niveles |
| A las 00:30 T-15 incompleta | Línea de tiempo con consulta directa (UNION de tablas) en vez de listeners |
| A las 00:30 T-16/T-45 incompletas | Dashboard solo caracterización por sector y tamaño; brechas con una gráfica |
| A las 01:30 | FF obligatorio: se acepta lo que haya |
| Servidor caído | Plan B local (`03` §8) |
| Un integrante enferma/agotado | Los otros dos recortan según §3.4 de `02` |
| Conflictos de Git | Rama `integracion` en la que solo J fusiona; si pasan de 20 minutos, reunión de 5 minutos |

Lo que queda **fuera** pase lo que pase: IA conversacional (RF-29), WhatsApp, app nativa.

## 8. Reglas de convivencia durante las 25 h
1. Sincronización de 5 minutos cada 2 horas en punto (10:30, 12:00… en la tabla); pantalla compartida, sin discusiones de diseño > 5 min.
2. Cada tarea termina con commit; `develop` siempre compila. Nadie hace *force push*.
3. Pausa de 10 minutos cada 90 minutos; agua y comida; al menos 4 h de sueño continuo.
4. Si algo falla dos veces, pedir ayuda al compañero antes de la tercera.
5. Todo error nuevo después de FF va al backlog con etiqueta `P0/P1/P2`; solo `P0` se corrige antes de la entrega.

## Criterio de aceptación de este archivo
- Cada requisito Must de `01` tiene tarea (ver trazabilidad en `08` §1).
- Las horas disponibles (10,75 h en el día 1 más 1 h de ensayo) están por debajo de la carga nominal (12,5–13,25 h): el déficit está cuantificado y tiene mitigación en §5 y §7.
- Sueño de 4 h por persona y 25 h totales respetadas.

## 9. R3: plan que cabe (propuesta pendiente de ratificar; detalle en `20_plan_que_cabe.md`)

**R3.** El balance de §5.2 se mantiene como diagnóstico: el Núcleo de la Ronda 2 no cabe (déficit de 2,5 / 3,0 / 2,5 h frente a 10,75 h de construcción). La Ronda 3 propone dos variantes que sí caben y **no modifica** las horas de §5 hasta que el equipo las ratifique en T-01 (PA-30, PA-31):

| Variante | Santiago | Julián | María Paula | Colchón (S / J / MP) |
|---|---:|---:|---:|---|
| A «mínimo defendible» | 9,5 h | 10,25 h | 9,25 h | 1,25 / 0,5 / 1,5 h |
| B «ambiciosa con compuertas» | 10,5 h | 10,25 h | 10,75 h | 0,25 / 0,5 / 0,0 h |

Recomendación: B con compuertas y A como piso (`20` §9.5). Las cifras de §4 (tabla hora a hora) y §7 (contingencias) se sustituyen por `20` §5.2, §6.2 y §6.3 si se ratifica.

**Contradicciones R3 con este archivo:** (1) T-02 dura 0,25 h, no 1,0 h, porque el «hola» desplegado es tarea previa (C-28); (2) T-41, T-42 y T-20 no pueden empezar antes de que exista el esquema de empresas: T-11a (0,25 h) es lo primero (C-29); (3) la hora de T-91 (00:30–01:30) está dentro de las 11,75 h y no es un desborde adicional (C-35); (4) T-25 se queda con Julián (C-37); (5) T-95 baja a 0,75 h (C-30). La contingencia «T-15 con UNION» de §7 deja de ser contingencia y pasa a ser el alcance de A y B.
