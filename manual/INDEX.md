# Índice del manual de implementación · UNAB Venture Challenge 2026 · reto CDE

Manual para construir, sin tomar decisiones adicionales, el sistema de gestión de la información del Centro de Desarrollo Empresarial (CDE) con módulo de formación por recompensas. Equipo: Santiago Serrano, Julián Arteaga, María Paula Saavedra. Ventana: 28-oct 8:00 → 29-oct 9:00 (2026).

## Si solo tienes 30 minutos (Ronda 3)

1. **El reto (2 min).** Construir un sistema de gestión de la información del CDE que reúna cada empresa sin duplicados, libere trabajo manual y convierta datos en conocimiento, con módulo de formación por recompensas. Se evalúa: Funcionalidad 60 (3 jurados técnicos, ISO/IEC 25010), Diferenciador 15, Negocio 15, Equipo 10. Pitch de 5 min + 5 de preguntas. Cierre del desarrollo: 29-oct 9:00.
2. **El plan que cabe (8 min).** El plan de la Ronda 2 no cabía (déficit de 2,5 / 3,0 / 2,5 h por persona). Ahora hay dos variantes con 11,75 h por persona hasta el congelamiento (01:30): **A «mínimo defendible»** (9,5 / 10,25 / 9,25 h) y **B «ambiciosa con compuertas»** (A + Ctrl+K, deshacer en duplicados y «Mi ruta» mínima; 10,5 / 10,25 / 10,75 h). **Recomendación: B, con A como piso.** La primera compuerta es H1 a las 19:00: si no está el recorrido de punta a punta, se corta todo lo de B. Calendario hora a hora en `20` §5.2 y §6.2.
3. **A las 10:30 cada quien empieza por (2 min).** Santiago: T-11a (esquema raíz, 15 min) y luego T-10a. Julián: T-02 (15 min) y T-20. María Paula: T-40 y T-41. Detalle en `20` §5.2.
4. **Esta noche, antes del 28 (5 min).** Solo trabajo «verde» (infraestructura): P-02 cola/planificador/`/health` (Julián, 0,5 h), P-03 respaldo y restauración de una base vacía (Julián, 0,25 h), P-07 plantilla de diapositivas sin cifras (María Paula, 1,0 h), P-08 imprimir y guardar sin conexión (todos, 0,25 h). **No** hay modelos, pantallas, datos ni reglas del CDE (`20` §4). Declararlo al CDE a las 8:30.
5. **Qué se dice y qué no en el pitch (5 min).** Guion hablado de 379 palabras en `18` (sección R3). No decir: «nadie lo hace», cifras de HubSpot/Salesforce, «el QR rota», «se mejora solo», «reversible» (solo en B), horas ahorradas. Sí decir: real frente a simulado, «lo medimos en el piloto», petición de un piloto de un semestre en tres fases.
6. **Cinco fallos que ya tienen respuesta (3 min).** Servidor caído → servidor local (15 min); sin red → punto de acceso del celular (10 min); base rota → `migrate:fresh --seed` y luego `dump.sql` (10 min); proyector → segundo portátil (3 min); conflicto a las 3 a. m. → abortar y resolver a las 6:00 (`23` §3).
7. **Decisiones para tomar ahora (5 min).** La lista corta está al final de este archivo.

## Orden de lectura en dos niveles (Ronda 3)

**Nivel 1 · Los tres leen en total 90 minutos, juntos o por separado:**

| Min | Qué | Dónde |
|---:|---|---|
| 5 | Este índice y «Si solo tienes 30 minutos» | `INDEX.md` |
| 5 | Camino dorado de la demo | `02` §5 |
| 20 | Plan que cabe: §0, §3, §5–§6, §9.5 | `20` |
| 15 | Pitch: guion hablado (R3), demo de 120 s y banco de preguntas | `18` §4–§5, §11, R3 |
| 15 | Contingencias y simulacro | `23` §3, §5 |
| 10 | Qué dijeron los cinco jurados | `22` §1–§5, §7 |
| 10 | Decisiones abiertas | `99` §K.6, §K.9–§K.11 |
| 10 | Preguntas para el CDE del 28 | `10` |

**Nivel 2 · Cada persona lee su parte:**

| Persona | Lee además | Tiempo |
|---|---|---:|
| Santiago | `03` (stack), `04` (datos), `05` (arquitectura y seguridad), las specs de su cola (`20` §3: T-10, T-11, T-12, T-13, T-14, T-15, T-16, T-96), `08` §5.1 | ≈ 90 min |
| Julián | `03` §8 (despliegue y plan B), `05` §5, `08` §5.5–§7, specs de su cola (T-02, T-20..T-25, T-30, T-31, T-94), `21_casos_demo.md` | ≈ 80 min |
| María Paula | `06`, `16`, `21_contenido_formacion.md`, `21_microcopy.md`, `09`, specs de su cola (T-40..T-46, T-17, T-19, T-47 si B), `13` §1 | ≈ 100 min |

## Orden de lectura recomendado
| # | Archivo | Para qué | Quién lo lee primero |
|---|---|---|---|
| 1 | `01_requisitos.md` | Requisitos con ID, prioridad, trazabilidad, vacíos del texto fuente | Todos |
| 2 | `02_alcance_mvp.md` | Qué entra, roles, historias, camino dorado | Todos |
| 3 | `99_preguntas_abiertas.md` | Decisiones pendientes y qué está sin verificar | Todos |
| 4 | `10_preguntas_cde.md` | Qué preguntar el 28 a las 8:30 | S y MP (preguntan), J (anota) |
| 5 | `03_stack.md` | Stack, versiones, comandos, ramas, despliegue | S, J |
| 6 | `04_datos.md` | Modelo, reglas de duplicados, catálogos, datos de demo, importación | S, J |
| 7 | `05_arquitectura.md` | Módulos, API, roles, seguridad, ISO 25010 | S, J |
| 8 | `06_ux_gamificacion.md` | Pantallas, diseño, mecánica de recompensas | MP |
| 9 | `07_plan_construccion.md` | Tareas, horarios, hitos, contingencias | Todos |
| 10 | `08_pruebas_checklists.md` | Pruebas, checklists y respaldo de la demo | Todos |
| 11 | `09_negocio_pitch.md` | Negocio, diferenciador, guion del pitch y preguntas | MP, J, S |
| 12 | `PROYECTO_CLAUDE.md` | `CLAUDE.md` para copiar al repo de desarrollo | S |
| 13 | `PROGRESO.md` | Estado de las fases y notas de auditoría | — |
| **Ronda 2** | | | |
| 14 | `12_verificacion.md` | Versiones y paquetes verificados contra fuentes primarias; medición de `pg_trgm` | S, J |
| 15 | `13_diferenciadores.md` | 15 candidatos, portafolio de 5+1 diferenciadores por niveles y de dónde sale el tiempo | Todos |
| 16 | `14_backlog.md` y `backlog.csv` | 48 tareas en 9 rebanadas, colas por persona, balance de horas | Todos |
| 17 | `15_frontend_skills_y_ui.md` | Pila de UI con versión y peso medido, skills auditados, presupuesto de rendimiento | MP |
| 18 | `16_sistema_de_diseno.md` | Paleta de los documentos del CDE, tokens, componentes, 6 pantallas hero, checklist visual | MP |
| 19 | `tareas/` (`_INDEX.md`, `_PLANTILLA.md`, 43 `T-XX.md`) | Especificación autocontenida por tarea Must y Should | Quien ejecute cada tarea (humano o agente) |
| 20 | `18_pitch_v2.md` | Guion de 5 min, demo de 120 s segundo a segundo, versiones A/B/C, 55 preguntas | MP, S, J |
| 21 | `19_kit_local.md` y `kit/agentes/` | Skills, MCP y subagentes; auditoría v2; decisiones y riesgos finales | S, J |
| **Ronda 3** | | | |
| 22 | `20_plan_que_cabe.md` | Variantes A y B con calendario, compuertas, simulación de puntaje, trabajo previo al 28 y tablero | Todos |
| 23 | `21_contenido_formacion.md`, `21_microcopy.md`, `21_catalogos.csv`, `21_casos_demo.md` | 7 microlecciones, textos de interfaz, catálogos con códigos y 7 casos sintéticos | MP (contenido), J (casos y catálogos) |
| 24 | `22_auditoria_adversarial.md` | Cinco jurados simulados, contradicciones, riesgos y cronometraje del pitch | Todos |
| 25 | `23_contingencias_y_simulacro.md` | Árbol de fallos, simulacro de 90 min, lista de las 2 h finales, impresos | Todos |

## Antes del 28-oct (tareas previas, ~4 h en total; ver ajustes de la Ronda 2 abajo)
1. Verificar lo `[NO VERIFICADO]` según `99` §J (**Ronda 2:** versiones y compatibilidad de paquetes ya verificadas en `12`; queda la instalación real, `12` pasos 1–7, ≈ 30 min).
2. Armar el esqueleto técnico sin lógica de dominio (`03` §5) y desplegar "hola" en el servidor (2 h).
3. Confirmar las 10 decisiones de la sección siguiente.
4. Preparar `importacion_demo.csv`? **No**: se genera el 28 (T-30) para no llegar con producto hecho.
5. **Ronda 2 (≈ 1,9 h repartidas):** prueba de shadcn/ui y de fuentes (`15` §7, 1,25 h) y kit de agentes (`19` §1.2, ≈ 0,95 h Must + Should). Salen de la hora que libera la verificación ya hecha y de la lista de tareas previas; no entran en las 25 h.

## Las decisiones que el equipo debe confirmar antes de empezar (10 originales + 8 de la Ronda 2)
1. **Stack A** (React + Laravel + PostgreSQL, monolito modular) - `03` §1 (PA-13).
2. **Autenticación:** Sanctum con token Bearer (en lugar de JWT de terceros) - `03` §2 (PA-14).
3. **Dónde se despliega:** servidor del patrocinador con Coolify + plan B local; confirmar acceso a puerto/Cloudflare - `03` §8 (PA-10).
4. **Esqueleto previo:** solo estructura técnica y declararlo al CDE - PA-22.
5. **Reparto de módulos y roles** (S: núcleo de datos; J: infraestructura/citas/eventos; MP: UX/gamificación/pitch) - `07` §2 (PA-11).
6. **Plan de sueño:** dormir 4 h de 2:00 a 6:00 y regreso a las 6:00 (depende de Q-01) - `07` §4 (PA-01).
7. **Congelamiento de funciones a la 1:30** y orden de recortes - `07` §3, `02` §3.4.
8. **Qué se corta primero si falta tiempo** (RF-19, 27, 24, luego 16 y 04) - `02` §3.4.
9. **Canal de recordatorios:** solo correo en el MVP - `03`, PA-03.
10. **Nombre del producto y reparto de voces del pitch** - `09` (PA-25).
11. **Cómo cerrar el déficit de horas del Núcleo (PA-30):** dos pasadas, mover T-25 a María Paula, contingencias - `99` §K.6, `tareas/_INDEX.md`.
12. **Portafolio de diferenciadores por niveles y puertas** - `13` §4.
13. **Ahorros A1–A3:** CSV sin XLSX, PDF por impresión, shadcn/ui - `13` §4.1, `15` §7.
14. **Paleta del CDE sin logotipo (PA-29, Q-28)** - `16` §1.
15. **Orden del Nivel 2 según el CDE (PA-27, Q-26)** - `13` §6.
16. **Python 3 en los portátiles (PA-28)** para la skill opcional `ui-ux-pro-max` - `19` K-5.
17. **Instalar Laravel Boost** (consultas de documentación salen a `boost.laravel.com`) - `19` K-6.
18. **Mantener desactivada la herramienta `tinker` de Boost** - `19` K-6.

## Principales riesgos
| Riesgo | Prob. | Impacto | Mitigación | Dónde |
|---|---|---|---|---|
| Sobrecarga del camino crítico (Santiago) y déficit de ~1,5–2,5 h por persona | Alta | Alto | Contingencias por hora, mover T-16, recortar T-14 | `07` §5, §7 |
| Servidor o red inaccesible | Media | Alto | Plan B local, video, imágenes Docker | `03` §8, `08` §7 |
| Paquete incompatible con Laravel 13 | Media | Medio | Alternativas nativas | `99` §J |
| Esqueleto previo cuestionado por el TyC §11 | Baja-Media | Alto | Declararlo; sin lógica de dominio | PA-22 |
| Cifras o precios incorrectos en el pitch | Media | Medio | Solo cifras verificadas; "no sabemos todavía" | `09` §8 |
| Privacidad (datos reales) | Baja | Alto | 100 % sintético; Ley 1581 como política | `04` §6 |
| Gamificación percibida como adorno | Media | Medio | Puntos por hechos reales; medir con SUS y Likert | `06` §7 |
| Fatiga y errores nocturnos | Alta | Alto | 4 h de sueño, revisión cruzada, FF | `07` |
| **El Núcleo no cabe antes del FF** (5,0–8,0 h de déficit de equipo según la base) | Alta | Alto | Dos pasadas, mover T-25, contingencias, cortes de `13` | PA-30, `tareas/_INDEX.md` |
| **R3:** sobrecosto de estimación y pausas no descontadas (capacidad efectiva ≈ 9,6 h de 10,75) | Alta | Alto | Variante A como piso, compuertas G-01..G-10, pausas dentro del colchón | `20` §9.4, `22` §7.3, PA-37 |
| **R3:** afirmaciones de evidencia sin tarea (QR rotativo, deshacer en A, latencia en pantalla) | Media | Medio | Filas de `05` §12 y guion de `18` corregidos | `22` §7.2 |
| Cadena de suministro (skills, MCP, paquetes) | Baja-Media | Alto | Versión/commit/hash fijo, auditor, sin plugin completo | `15`, `19` |
| Instalación real de paquetes no verificada | Media | Alto | Plantilla previa con `12` pasos 1–7 | `12` |

## Resultados de la auditoría final (F11)
- Requisitos Must de `01`: 22 RF + 13 RNF = 35; los 35 tienen tarea (`07` §5), prueba (`08` §1) y responsable. Verificado con un script contra el texto de `08`.
- Contradicciones corregidas: hora de congelamiento (01 vs 07), tamaño del archivo de importación (500 vs 509), duración de la demo en el pitch (02 vs 09), conteos de la vista previa de importación (06 vs 04/08), cálculo de horas (07).
- Sin `TBD`: lo no decidido está en `99` con recomendación y responsable.
- Afirmaciones técnicas sin verificación directa: listadas con plan en `99` §J.
- Tiempo: 25 h totales; 4 h de sueño; ~10,75 h disponibles de construcción el día 1 frente a 12,5–13,25 h nominales: **déficit declarado** (`07` §5).
- Limitación general: durante esta redacción solo hubo búsqueda web con resultados de terceros (el acceso directo a sitios oficiales estuvo bloqueado), así que **ninguna versión de software quedó verificada contra su fuente primaria**.

## Resultados de la auditoría v2 (F19, 27-oct-2026)
- Las 43 tareas Must y Should tienen especificación (`tareas/`); los 35 requisitos Must de `01` aparecen en el campo `req` de al menos una tarea Must; 0 dependencias rotas en `backlog.csv`; ver `19` §2.1.
- **Horas:** el Núcleo suma 13,25 h (Santiago), 13,75 h (Julián) y 13,25 h (María Paula) el día 1 frente a 10,75 h (11,75 h con la hora de ensayo): **el plan no cierra** y la brecha se resuelve con PA-30 (`19` §2.2).
- Versiones: verificadas contra npm, Packagist, php.net, nodejs.org, react.dev, postgresql.org y laravel.com (`12`). Sin verificar: ISO, Ley 1581, precios de competidores, SUS, OWASP Top 10 2025, rendimiento en el hardware del laboratorio, instalación real, CLI de shadcn (`19` §2.5).
- Contradicciones con v1: C-01..C-25 registradas en `99` §K y anotadas con «R2» en `01`, `04`, `05`, `06`, `07`, `08`.
- Limitación general: durante la Ronda 2 hubo acceso a registros de paquetes y a documentación oficial, pero **no** a `api.github.com` ni a `github.com` (HTML); las estrellas vienen de `deps.dev` y los commits de clones superficiales.

## Resultados de la auditoría de la Ronda 3 (F24, 27-oct-2026)

- **El plan cierra por persona.** Variante A: S 9,5 · J 10,25 · MP 9,25 h; variante B: S 10,5 · J 10,25 · MP 10,75 h, todas ≤ 10,75 h de construcción más 1,0 h de T-91 dentro de las 11,75 h (`20` §3). Suma comprobada con un script sobre `backlog.csv` (`horas_A`, `horas_B`).
- **Cada tarea Must con horas en A tiene especificación (§13 de `tareas/T-xx.md`), prueba (§7 de su spec y `08`) y responsable.** Las Must T-17, T-19 y T-27 conservan la etiqueta Must en `backlog.csv` pero la Ronda 3 las pasa a «solo B» (T-17, T-19) o «aplazada» (T-27): **contradicción R3** registrada (C-33); `variante_R3` manda mientras no se ratifique.
- **Simulación (supuestos en `20` §9.1):** con 20 % de sobrecosto, Funcionalidad esperada: plan R2 ≈ 27,8 · A ≈ 37,0 · B ≈ 37,6 de 60. Jurados simulados: 60,8 / 100 (`22` §7.1).
- **Contradicciones de la Ronda 3:** C-26..C-37 (`99` §K.9), C-38..C-41 (`99` §K.10), C-42..C-49 (`99` §K.11), todas anotadas con «R3» en `05`, `07`, `08`, `09`, `14`, `18`, `20`, `tareas/`.
- **Costo de lo nuevo:** 0 h en la ventana de construcción; 2,5 h de trabajo previo (J 1,0 · MP 1,25 · S 0,25) y 0,75 h de receso para el simulacro (`20` §4, `23` §6).
- **Limitaciones:** la simulación no modela bloqueos ni ayuda entre personas; los puntajes de los jurados son simulados; los datos factuales de matrícula mercantil y RUT son de fuentes secundarias (NV-27, NV-28); ninguna cifra de precios de competidores (salvo Airtable) está verificada.

## Decisiones que el equipo toma ahora (con recomendación) · 19 a 27

| # | Decisión | Recomendación | Dónde |
|---|---|---|---|
| 19 | Variante del plan (PA-30, PA-31) | **B con compuertas y A como piso**; si no se respetan las compuertas, A | `20` §9.5 |
| 20 | Pausas: ¿salen del colchón? (PA-37) | Sí; hacerlas en V1, cena y receso | `22` §7.3 |
| 21 | Reparto R3: T-25 en Julián; T-11a primero; T-10, T-11 y T-43 partidas | Aceptar | `20` §3 |
| 22 | Trabajo previo «verde» y declaración al CDE (PA-32) | Aceptar P-02, P-03, P-07, P-08; declarar a las 8:30 | `20` §4 |
| 23 | Aplazar calidad de datos, preguntas guiadas, mapa de calor, rachas y cola de validación (C-27, C-33) | Aceptar; presentarlos como siguiente paso | `20` §7 |
| 24 | Marcela con 430 puntos y la protagonista con 2 planes (C-38, C-39) | Aceptar (Julián en T-30) | `21_casos_demo.md` §3 |
| 25 | Simulacro repartido: receso (45 min), T-91 y 8:30–8:58 | Aceptar; no tomar 90 min de la ventana | `23` §5.1 |
| 26 | Preguntar el 28 a las 8:30: PA-22, PA-29, PA-34, PA-36 y Q-29 | Preguntar los cinco | `10`, `99` |
| 27 | Conseguir 2 personas externas para el simulacro y T-97 (PA-33) | Pedirlas a otros equipos o al laboratorio durante la cena | `22` §4.3 |

Las decisiones 1 a 18 siguen vigentes; las 11 (PA-30) y 12 (portafolio de diferenciadores) quedan **sustituidas** por la 19 y la 23 si se ratifican.


## Diseño de interfaz (misión 3)
Mockups navegables, sistema de diseño y especificaciones por pantalla: ver `diseno/INDEX.md` (abrir `diseno/prototipo/index.html`). Evidencia de validación: `diseno/90_revision.md`. Decisiones y contradicciones: `diseno/99_decisiones.md`.
