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

## Antes del 28-oct (tareas previas, ~4 h en total)
1. Verificar lo `[NO VERIFICADO]` según `99` §J (90 min).
2. Armar el esqueleto técnico sin lógica de dominio (`03` §5) y desplegar "hola" en el servidor (2 h).
3. Confirmar las 10 decisiones de la sección siguiente.
4. Preparar `importacion_demo.csv`? **No**: se genera el 28 (T-30) para no llegar con producto hecho.

## Las 10 decisiones que el equipo debe confirmar antes de empezar
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

## Resultados de la auditoría final (F11)
- Requisitos Must de `01`: 22 RF + 13 RNF = 35; los 35 tienen tarea (`07` §5), prueba (`08` §1) y responsable. Verificado con un script contra el texto de `08`.
- Contradicciones corregidas: hora de congelamiento (01 vs 07), tamaño del archivo de importación (500 vs 509), duración de la demo en el pitch (02 vs 09), conteos de la vista previa de importación (06 vs 04/08), cálculo de horas (07).
- Sin `TBD`: lo no decidido está en `99` con recomendación y responsable.
- Afirmaciones técnicas sin verificación directa: listadas con plan en `99` §J.
- Tiempo: 25 h totales; 4 h de sueño; ~10,75 h disponibles de construcción el día 1 frente a 12,5–13,25 h nominales: **déficit declarado** (`07` §5).
- Limitación general: durante esta redacción solo hubo búsqueda web con resultados de terceros (el acceso directo a sitios oficiales estuvo bloqueado), así que **ninguna versión de software quedó verificada contra su fuente primaria**.
