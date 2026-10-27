# _INDEX · Orden de ejecución de las especificaciones

Este índice lista las 43 tareas Must y Should con especificación (`tareas/T-XX.md`). Las tareas Could (T-50..T-54) no tienen especificación: se escriben solo si se cumple la puerta del Nivel 3 (`14_backlog.md` §5).

## Cómo usarlo

1. Cada persona trabaja su cola en el orden de la §2 (la hora es **nominal**: ventanas de construcción de `07` §5 sin imprevistos).
2. Una tarea cuyas dependencias no están listas se salta y se vuelve a ella; nunca se bloquea a la persona (usar un doble de prueba del contrato).
3. Las tareas con ⚠ terminan después del congelamiento de funciones (01:30). Para ellas se aplica el **corte** de `13_diferenciadores.md` o la contingencia de `07` §7. Este cálculo no es un error del plan: es el déficit declarado en `07` §5.2 hecho visible.
4. Nivel 2 (Should) solo empieza si se cumple su puerta; Nivel 3 no tiene especificación.

## 1. Ventanas de construcción usadas (28-oct, `07` §5)

| Ventana | Horas |
|---|---|
| 10:30–12:00 | 1,5 |
| 14:00–17:00 | 3,0 |
| 17:30–19:00 | 1,5 |
| 19:45–00:30 | 4,75 |
| 00:30–01:30 (ensayo H2 usado como desborde) | 1,0 |
| **Total hasta FF** | **11,75** |

## 2. Orden de ejecución (por hora nominal de inicio)

| # | ID | Tarea | Resp. | h | Prior. | Rebanada | Depende de | Inicio nominal | Fin nominal | Aviso |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | [T-00](T-00.md) | Levantar esqueleto en las 3 máquinas; accesos al servidor y GitHub | Todos | 0,5 | Must | S0 | Esqueleto | 28-oct 08:00 | 08:30 |  |
| 2 | [T-01](T-01.md) | Reconciliar respuestas del CDE con alcance; actualizar `docs/DECISIONES.md` | Todos | 0,5 | Must | S0 | — | 28-oct 10:00 | 10:30 |  |
| 3 | [T-02](T-02.md) | Despliegue del esqueleto y CI en servidor (Coolify) con variables de entorno | J | 1,0 | Must | S0 | T-00 | 28-oct 10:30 | 11:30 |  |
| 4 | [T-10](T-10.md) | Auth Sanctum, 5 roles (spatie), policies base, middleware de auditoría, tabla `a… | S | 1,5 | Must | S1 | T-00 | 28-oct 10:30 | 12:00 |  |
| 5 | [T-40](T-40.md) | Design system (tokens, componentes base), layout por rol, router, cliente API, p… | MP | 1,0 | Must | S0 | T-00 | 28-oct 10:30 | 11:30 |  |
| 6 | [T-03](T-03.md) | Cola `database`, scheduler, Mailpit, `/health` | J | 0,5 | Must | S0 | T-02 | 28-oct 11:30 | 12:00 |  |
| 7 | [T-41](T-41.md) | Diagnósticos back+front (E7) con evolución | MP | 1,5 | Must | S3 | T-11 | 28-oct 11:30 | 15:00 |  |
| 8 | [T-11](T-11.md) | Empresas: migraciones, modelos, normalizadores (NIT/correo/nombre), CRUD API, fi… | S | 3,0 | Must | S1 | T-10, T-40 | 28-oct 14:00 | 17:00 |  |
| 9 | [T-20](T-20.md) | Citas: modelos, estados, solicitar/agendar/resultado/cancelar, policies | J | 1,5 | Must | S1 | T-10 | 28-oct 14:00 | 15:30 |  |
| 10 | [T-42](T-42.md) | Proyectos de aula, planes, compromisos, vencidos (back+front E8, D1–D2) | MP | 2,0 | Must | S3 | T-11 | 28-oct 15:00 | 17:00 |  |
| 11 | [T-21](T-21.md) | Recordatorios: creación al agendar, job de envío, plantillas, reintentos, bandej… | J | 1,0 | Must | S1 | T-20, T-03 | 28-oct 15:30 | 16:30 |  |
| 12 | [T-22](T-22.md) | Front citas: M4 (emprendedor), E9 (bandeja) | J | 1,0 | Must | S1 | T-20, T-40 | 28-oct 16:30 | 18:00 |  |
| 13 | [T-12](T-12.md) | Detección de duplicados (pg_trgm) + fusión transaccional + banner front | S | 1,5 | Must | S1 | T-11 | 28-oct 17:30 | 19:00 |  |
| 14 | [T-43](T-43.md) | Gamificación back: retos, puntos (idempotentes), niveles, insignias, rachas, lis… | MP | 2,5 | Must | S4 | T-23, T-42 | 28-oct 17:30 | 20:45 |  |
| 15 | [T-23](T-23.md) | Eventos back: CRUD, publicar, inscripción con cupo (lock), asistencia manual y Q… | J | 2,5 | Must | S4 | T-10 | 28-oct 18:00 | 21:15 |  |
| 16 | [T-90](T-90.md) | Verificación de H1 en el servidor | Todos | 0,25 | Must | S1 | T-11, T-20, T-22 | 28-oct 19:00 | 19:45 |  |
| 17 | [T-13](T-13.md) | Búsqueda global tolerante + front E4/E5 (alta con aviso, fusión) | S | 2,5 | Must | S2 | T-12 | 28-oct 19:45 | 22:15 |  |
| 18 | [T-44](T-44.md) | Portal del emprendedor M2–M7 con animaciones de logro | MP | 3,0 | Must | S4 | T-43, T-22, T-24 | 28-oct 20:45 | 23:45 |  |
| 19 | [T-24](T-24.md) | Front eventos: E10, M5 (oferta), pantalla de QR/asistencia | J | 2,0 | Must | S4 | T-23, T-40 | 28-oct 21:15 | 23:15 |  |
| 20 | [T-14](T-14.md) | Importación CSV/XLSX: subir, mapear, vista previa, confirmar, revertir | S | 2,0 | Must | S2 | T-12 | 28-oct 22:15 | 00:15 (29-oct) |  |
| 21 | [T-25](T-25.md) | Recomendación por reglas con motivo | J | 0,75 | Must | S4 | T-23, T-41 | 28-oct 23:15 | 00:00 (29-oct) |  |
| 22 | [T-46](T-46.md) | Consentimiento, "Descargar mis datos", solicitud de corrección | MP | 0,5 | Must | S4 | T-10 | 28-oct 23:45 | 00:15 (29-oct) |  |
| 23 | [T-30](T-30.md) | DemoSeeder + factories de todos los módulos + validador de totales + `importacio… | J | 3,0 | Must | S8 | T-11, T-20, T-23, T-41, T-42 | 29-oct 00:00 | 03:00 (29-oct) | ⚠ termina después del congelamiento (01:30): aplicar el corte |
| 24 | [T-16](T-16.md) | Reportes back: vistas de caracterización, brechas (último diagnóstico), KPIs de … | S | 1,25 | Must | S5 | T-41, T-11 | 29-oct 00:15 | 01:30 (29-oct) |  |
| 25 | [T-45](T-45.md) | Dashboard, brechas y reporte (E11–E13) | MP | 1,5 | Must | S5 | T-16 | 29-oct 00:15 | 01:45 (29-oct) | ⚠ termina después del congelamiento (01:30): aplicar el corte |
| 26 | [T-91](T-91.md) | Ensayo del camino dorado y lista de bloqueantes | Todos | 1,0 | Must | S8 | T-45, T-15, T-30 | 29-oct 00:30 | 01:30 |  |
| 27 | [T-15](T-15.md) | Historial: listeners → `intervenciones`; API de línea de tiempo; pestaña front | S | 1,5 | Must | S3 | T-20, T-23, T-41, T-42 | 29-oct 01:30 | 03:00 (29-oct) | ⚠ termina después del congelamiento (01:30): aplicar el corte |
| 28 | [T-92](T-92.md) | Congelamiento, etiqueta `ff-1`, respaldo `pg_dump`, backlog de errores | J | 0,5 | Must | S8 | T-91 | 29-oct 01:30 | 02:00 |  |
| 29 | [T-19](T-19.md) | Vista lado a lado de duplicados con diferencias resaltadas y botón Deshacer | MP | 0,25 | Must | S2 | T-12, T-40 | 29-oct 01:45 | 02:00 (29-oct) | ⚠ termina después del congelamiento (01:30): aplicar el corte |
| 30 | [T-17](T-17.md) | Paleta de comandos Ctrl+K: grupos (Empresas, Eventos, Contactos), recientes, ata… | MP | 0,5 | Must | S2 | T-13, T-40 | 29-oct 02:00 | 02:30 (29-oct) | ⚠ termina después del congelamiento (01:30): aplicar el corte |
| 31 | [T-27](T-27.md) | Acabado de la línea de tiempo: icono por tipo, filtros por tipo y año, agrupació… | MP | 0,5 | Must | S3 | T-15, T-40 | 29-oct 02:30 | 03:00 (29-oct) | ⚠ termina después del congelamiento (01:30): aplicar el corte |
| 32 | [T-18](T-18.md) | Puntaje de calidad de datos por ficha y global (completitud 70 % + consistencia … | S | 0,5 | Should | S6 | T-11 | 29-oct 03:00 | 03:30 (29-oct) | ⚠ termina después del congelamiento (01:30): aplicar el corte |
| 33 | [T-28](T-28.md) | UI de calidad de datos: tarjeta global, anillo por ficha, lista de pendientes | MP | 0,5 | Should | S6 | T-18, T-40 | 29-oct 03:00 | 03:30 (29-oct) | ⚠ termina después del congelamiento (01:30): aplicar el corte |
| 34 | [T-31](T-31.md) | Modo demostración: comando demo:reset + botón de administrador visible solo con … | J | 0,5 | Must | S8 | T-30 | 29-oct 03:00 | 03:30 (29-oct) | ⚠ termina después del congelamiento (01:30): aplicar el corte |
| 35 | [T-26](T-26.md) | Job que crea la tarea "completar sector/tamaño" por ficha incompleta y notifica … | J | 0,25 | Should | S6 | T-18, T-03 | 29-oct 03:30 | 03:45 (29-oct) | ⚠ termina después del congelamiento (01:30): aplicar el corte |
| 36 | [T-47](T-47.md) | Mapa de ruta ("Mi ruta"): nodos y camino en SVG, estados, animación de logro con… | MP | 1,25 | Should | S6 | T-43, T-44 | 29-oct 03:30 | 04:45 (29-oct) | ⚠ termina después del congelamiento (01:30): aplicar el corte |
| 37 | [T-48](T-48.md) | Catálogo de 6 preguntas guiadas (vistas SQL parametrizadas) y endpoint | S | 0,5 | Should | S6 | T-16 | 29-oct 03:30 | 04:00 (29-oct) | ⚠ termina después del congelamiento (01:30): aplicar el corte |
| 38 | [T-49](T-49.md) | Selector de preguntas guiadas y mapa de calor sector × dimensión con clic a empr… | MP | 0,75 | Should | S6 | T-48, T-45 | 29-oct 04:45 | 05:30 (29-oct) | ⚠ termina después del congelamiento (01:30): aplicar el corte |
| 39 | [T-93](T-93.md) | Triage de errores (P0/P1/P2) | Todos | 0,5 | Must | S8 | T-92 | 29-oct 06:00 | 06:30 |  |
| 40 | [T-96](T-96.md) | Pruebas de seguridad y accesibilidad rápidas (listas de `08`) | S | 1,0 | Must | S8 | T-91 | 29-oct 06:30 | 07:30 |  |
| 41 | [T-97](T-97.md) | Prueba de usabilidad con ≥ 3 personas (SUS + tarea) | MP | 0,75 | Must | S8 | T-91 | 29-oct 06:30 | 07:15 |  |
| 42 | [T-94](T-94.md) | Candidato a entrega `v1.0-rc` + prueba de restauración + video/capturas de respa… | J | 1,0 | Must | S8 | T-93 | 29-oct 07:00 | 08:00 |  |
| 43 | [T-95](T-95.md) | Ensayo cronometrado del pitch (≤ 5:00) y del demo; deck final | MP | 1,0 | Must | S8 | `09` | 29-oct 08:30 | 09:00 |  |

### Lectura del calendario nominal

Con el Núcleo completo, la cola de Santiago (13,25 h) termina T-15 a las **03:00**, la de Julián (13,75 h) termina T-30 y T-31 a las **03:00–03:30** y la de María Paula (13,25 h) termina T-27 a las **03:00**; es decir, ≈ 1,5 a 2 h después del congelamiento (01:30), con 11,75 h de ventana. Es el déficit declarado en `07` §5.2 (C-18) visto hora a hora; v1 lo ocultaba superponiendo tareas en su tabla de §4. El calendario fijo (T-90..T-97, validaciones) no cambia. La decisión sobre cómo cerrar la brecha está en `99` PA-30 (recomendación: ver allí).

## 3. Niveles de dependencia (qué se puede hacer en paralelo)

Un nivel solo depende de niveles anteriores; las tareas del mismo nivel pueden hacerse en paralelo por personas distintas.

| Nivel | Tareas |
|---|---|
| 1 | T-00, T-01, T-95 |
| 2 | T-02, T-10, T-40 |
| 3 | T-03, T-11, T-20, T-23, T-46 |
| 4 | T-12, T-18, T-21, T-22, T-24, T-41, T-42 |
| 5 | T-13, T-14, T-15, T-16, T-19, T-25, T-26, T-28, T-30, T-43, T-90 |
| 6 | T-17, T-27, T-31, T-44, T-45, T-48 |
| 7 | T-47, T-49, T-91 |
| 8 | T-92, T-96, T-97 |
| 9 | T-93 |
| 10 | T-94 |

## 4. Colas por persona

**Santiago:** T-10 → T-11 → T-12 → T-13 → T-14 → T-16 → T-15 → T-18 → T-48

**Julián:** T-02 → T-03 → T-20 → T-21 → T-22 → T-23 → T-24 → T-25 → T-30 → T-31 → T-26

**María Paula:** T-40 → T-41 → T-42 → T-43 → T-44 → T-46 → T-45 → T-19 → T-17 → T-27 → T-28 → T-47 → T-49

Tareas de las tres personas (no están en ninguna cola): T-00, T-01, T-90, T-91, T-92, T-93; compartidas con responsable principal: T-94 (J), T-95 (MP), T-96 (S y MP), T-97 (MP).

## 5. Comprobación

- 43 archivos `T-XX.md`, uno por tarea Must o Should de `backlog.csv`, con el mismo formato que `_PLANTILLA.md`.
- Horas, dependencias y criterios coinciden con `backlog.csv` (se generan de la misma fuente).

## 6. R3 · Calendario que cabe (PROPUESTA pendiente de ratificar: PA-30, PA-31)

La §2 y la «Lectura del calendario nominal» de arriba muestran el plan de la Ronda 2: **no cabe** (termina entre 03:00 y 03:30 con FF a las 01:30). `20_plan_que_cabe.md` lo sustituye, si el equipo lo ratifica en T-01, por dos calendarios que terminan antes de las 00:30:

| Persona | Cola variante A (horas) | Termina | Cola variante B (horas) | Termina |
|---|---|---|---|---|
| Santiago | T-11a 0,25 → T-10a 1,25 → T-10b 0,25 → T-11b 2,25 → T-12 1,75 → T-13 1,25 → T-16 0,75 → T-15 0,75 → T-14 1,0 (**9,5**) | 23:15 | A + T-13x 0,25 (tras T-13) y T-12x 0,75 (al final) (**10,5**) | 00:15 |
| Julián | T-02 0,25 → T-20 1,25 → T-21 0,75 → T-22 1,0 → T-23 2,0 → T-25 0,5 → T-24 1,5 → T-30 2,5 → T-31 0,5 (**10,25**) | 00:00 | Igual que A | 00:00 |
| María Paula | T-40 1,0 → T-41 1,25 → T-42 1,5 → T-43a 1,5 → T-43b 0,25 → T-46 0,5 → T-44 2,0 → T-45 1,25 (**9,25**) | 23:00 | A con T-17 0,5 antes de T-45, y al final T-47a 0,75 y T-19 0,25 (**10,75**) | 00:30 |

Cambios de dependencia respecto a la §2: T-11a (esquema raíz) pasa a ser la primera tarea del día (corrige que T-41 y T-42 empezaran antes de T-11); T-25 pasa de la cola de María Paula (sugerida en PA-30) a la de Julián; T-95 baja a 0,75 h y su tramo del día 2 es 06:00–08:00 más 08:30–09:00 (la fila 43 de la §2 asignaba 1,0 h a 0,5 h de reloj). Las tareas T-17, T-18, T-19, T-26, T-27, T-28, T-47, T-48, T-49 se cambian así: T-17, T-19 y T-47 (solo T-47a) se construyen únicamente en B; T-18, T-26, T-27, T-28, T-48 y T-49 quedan aplazadas. Las horas y las compuertas por tarea están en `backlog.csv` (`horas_A`, `horas_B`, `compuerta_R3`) y en la §13 de cada `T-XX.md`.

Los niveles de dependencia de la §3 no cambian salvo por las tareas partidas (T-10a/b, T-11a/b, T-43a/b), que agregan una dependencia: T-43b espera a T-23 (holgura 0,0 h; `20` §8.3).
