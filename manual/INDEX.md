# Índice del manual de implementación · UNAB Venture Challenge 2026 · reto CDE

Manual para construir, sin tomar decisiones adicionales, el sistema de gestión de la información del Centro de Desarrollo Empresarial (CDE) con módulo de formación por recompensas. Equipo: Santiago Serrano, Julián Arteaga, María Paula Saavedra. Ventana: 28-oct 8:00 → 29-oct 9:00 (2026).

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
