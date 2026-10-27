# 05 · Cómo se mide «intuitivo y divertido» en el módulo rediseñado

**Objetivo.** Dar un protocolo corto y honesto para comprobar CRI-09 («Experiencia intuitiva y divertida; la formación por recompensas motiva») con personas adultas ajenas al equipo, y registrar los resultados **tal como salgan**, aunque sean pocos.
**Entradas.** `01_requisitos.md` CRI-09 y RNF-04, `06_ux_gamificacion.md` §7.5, `00_investigacion.md` NV-G1 y NV-G2, `01_direccion_y_mecanicas.md` §9, `20_plan_que_cabe.md` (T-91 y T-97, personas externas).
**Estado.** **La prueba todavía no se ha hecho.** Este archivo no contiene resultados y no se debe citar ninguno en el pitch hasta que existan.

## 1. Decisiones

| ID | Decisión | Razón |
|---|---|---|
| PU-01 | Mínimo **5 personas adultas ajenas al equipo**, de las cuales **al menos 1 docente** y **al menos 2 con negocio propio o experiencia de acompañar a emprendedores** | RNF-04 pide ≥ 3; el encargo de esta misión exige que no parezca infantil ante personas emprendedoras y docentes |
| PU-02 | Se usa el **mockup** (`prototipo/`) con Marcela; las personas **no ingresan datos reales** | RNF-14, privacidad |
| PU-03 | Tres tareas cronometradas (PU-T1 a PU-T3) y una observada (PU-T4), sin ayuda ni pistas | RNF-04 |
| PU-04 | Cuestionario SUS de 10 ítems, tres preguntas de «diversión» y tres de «tono» | `06` §7.5; las de «tono» son nuevas para NV-G2 |
| PU-05 | Cada persona prueba **una** versión (la de `p11`/`p12` o la nueva) en orden alterno; con 5 personas la comparación es **orientativa**, no estadística | Con n pequeño no se concluye; se reporta como prueba piloto |
| PU-06 | Se registra también la intensidad que elige en G-01 | Es el dato más barato sobre si el módulo pesa |

## 2. Preparación (15 min, antes de la prueba)

1. Abrir `prototipo/mi-ruta.html?barra=0&cerrado=0` en el portátil de la demo, con la intensidad en «Completo» y el sonido del sistema apagado. Para la versión anterior: `../../prototipo/p11-mi-ruta.html`.
2. Tener a mano un cronómetro y la hoja de registro (§5).
3. Pedir consentimiento verbal: «Vamos a probar una pantalla de ejemplo con datos inventados; no evaluamos a usted, evaluamos la pantalla; puede parar cuando quiera».

## 3. Tareas (sin ayuda; se corta a los 2 minutos)

| ID | Tarea | Éxito | Meta |
|---|---|---|---|
| PU-T1 | «Dime cuántos puntos tiene Marcela y qué le falta para el siguiente nivel» | Dice 430 y 20 (o «llevaba 430, faltan 20») | ≥ 80 % en ≤ 2 min |
| PU-T2 | «¿Cuál es la próxima insignia que puede ganar y qué debe hacer?» | Dice Cumplidor y «un compromiso más a tiempo» | ≥ 80 % en ≤ 2 min |
| PU-T3 | «Haz que el sistema muestre solo lo necesario, sin puntos ni niveles, y luego vuelve a mostrarlos» | Llega a «Oculto» y vuelve | ≥ 80 % en ≤ 2 min |
| PU-T4 (observada, sin cronómetro) | «Pulsa “Simular la escena” y cuéntame qué pasó» | Menciona nivel 4 e insignia sin que se le pregunte por cada cosa | Se anota si la celebración le pareció «mucho», «justa» o «poca» |

## 4. Cuestionarios (1 a 5; 1 = totalmente en desacuerdo, 5 = totalmente de acuerdo)

**SUS (10 ítems).** Texto estándar de Brooke (1996), traducido libremente por el equipo (`PROPUESTA`; **no se verificó la traducción ni la fuente primaria**; la referencia de Sauro/MeasuringU sobre 68 también es secundaria, `06` §7.5 la marca `[NO VERIFICADO]`):

1. Creo que me gustaría usar este sistema con frecuencia.
2. Encontré el sistema innecesariamente complejo.
3. Pensé que el sistema era fácil de usar.
4. Creo que necesitaría ayuda de una persona con conocimientos técnicos para usarlo.
5. Encontré las diversas funciones del sistema bien integradas.
6. Pensé que había demasiada inconsistencia en el sistema.
7. Imagino que la mayoría de las personas aprenderían a usarlo muy rápido.
8. Encontré el sistema muy incómodo de usar.
9. Me sentí con mucha confianza usando el sistema.
10. Necesité aprender muchas cosas antes de poder empezar.

**Diversión (3, de `06` §7.5).** D1 «Fue agradable». D2 «Quise seguir viendo qué pasaba». D3 «Entendí cómo se ganan los puntos».

**Tono (3, nuevas).** S1 «Me pareció una herramienta seria y profesional». S2 «Me pareció infantil» (invertida: 1 es lo deseado). S3 «Sentí presión para avanzar» (invertida).

## 5. Hoja de registro (una por persona; **vacía hasta que se haga la prueba**)

| Campo | Valor |
|---|---|
| N.º de persona (sin nombre) / perfil (docente, con negocio, otro) / versión probada | |
| Intensidad elegida en G-01 | |
| PU-T1, PU-T2, PU-T3: ¿éxito? y segundos | |
| PU-T4: «mucho / justa / poca» | |
| SUS 1–10 | |
| D1, D2, D3 | |
| S1, S2, S3 | |
| Observaciones textuales (sin datos personales) | |

## 6. Cálculo y metas (`PROPUESTA`)

- **SUS:** cada ítem impar suma (respuesta − 1); cada par suma (5 − respuesta); total × 2,5. Meta ≥ 68 (`06` §7.5, referencia secundaria).
- **Tareas:** porcentaje de éxito en ≤ 2 min por tarea; meta ≥ 80 % (RNF-04).
- **Diversión:** media de D1–D3 ≥ 4.
- **Tono:** media de S1 ≥ 4; S2 y S3 ≤ 2. Si S2 o S3 superan 2 en 2 o más personas, el riesgo R-I1..R-I6 correspondiente de `90_revision.md` §9 se reabre y se baja la intensidad por defecto a «Discreto» (PD-G02).
- **Se reporta** con la frase «prueba piloto de hackatón, n = {n}», sin porcentajes que parezcan estadística.

## 7. Cuándo y quién

Dos bloques de 20 minutos con las personas externas que se pidan para el simulacro (`20` §4, PA-33) y en la validación con el CDE del 28 a las 5:00 p. m. (`06` §7.5). Responsable: María Paula; cronometra Julián; anota Santiago.

## 8. Qué no se afirma

No se afirma que la gamificación mejore el aprendizaje ni la retención (IG-02, IG-03). Solo se afirma lo que salga de esta prueba, con su n.

## Criterio de aceptación

1. Existe una hoja de registro por persona con las tareas, el SUS, la diversión y el tono.
2. El informe de resultados cita n, perfil y versión probada y no contiene porcentajes sin n.
3. Si no se hizo la prueba, el pitch dice «lo vamos a medir en el piloto» y no cita cifras.
