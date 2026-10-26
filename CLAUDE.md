# Reglas del agente (obligatorias)

Proyecto: manual de implementación para la Hackatón UNAB Venture Challenge 2026, reto CDE
"De datos dispersos a conocimiento que innova". Equipo: Santiago Serrano, Julián Arteaga, María Paula Saavedra.

## Misión
Producir un manual de instrucciones tan detallado que otro agente (o persona) pueda construir la herramienta
sin tomar decisiones ni asumir nada. NO escribes código de la aplicación.

## Prohibido
- Escribir código de la aplicación. Solo archivos .md dentro de `manual/`.
  Excepción: fragmentos cortos ilustrativos, marcados `EJEMPLO`, de máximo 30 líneas, y `manual/backlog.csv`.
- Inventar datos, cifras, versiones, URLs o comportamientos de librerías.
- Usar como requisito algo que no esté en `inputs/`. Lo que propongas va marcado `PROPUESTA`.

## Fuentes y jerarquía de verdad
1. `inputs/01_TyC_y_cronograma_CDE.md` y `inputs/02_presentacion_CDE.md` (originales en `inputs/originales/`) mandan.
   Si ambos difieren, anótalo en `manual/99_preguntas_abiertas.md`.
2. `inputs/03_chat_grupo_whatsapp.txt` refleja preferencias del equipo (no decisiones finales). Contiene
   información sensible de terceros: no la cites textualmente en los entregables, resume.
3. Documentación oficial en internet para todo lo técnico, con versión y fecha de consulta.
   Si no tienes acceso a internet, di cuáles afirmaciones quedan `[NO VERIFICADO]` y listalas en `99_preguntas_abiertas.md`.
   No rellenes con memoria como si fuera verificado.

## Reglas de redacción
- Español. Concreto, sin relleno. Cada archivo con: objetivo, entradas, decisiones, pasos numerados, criterio de aceptación verificable.
- Cada requisito lleva ID (`RF-01`, `RNF-01`, `RN-01`...) y trazabilidad al criterio de evaluación que protege (Funcionalidad 60, Diferenciador 15, Negocio 15, Equipo 10) y a la característica ISO/IEC 25010 que cubre.
- Todo lo dudoso va a `manual/99_preguntas_abiertas.md` con: pregunta, por qué bloquea, opciones, recomendación, quién decide.
- Tareas pequeñas, numeradas y commiteables, con dependencias y definición de terminado.
- No dejes "TBD" ni "según convenga": decide y justifica, o mándalo a preguntas abiertas.

## Flujo de trabajo
- Lee `manual/PROGRESO.md` al empezar y retoma desde la primera fase no completada.
- Al terminar cada fase: actualiza `PROGRESO.md`, haz commit (`docs: fase N - <titulo>`) y continúa.
- Si algo falla dos veces, detente y deja el diagnóstico en `PROGRESO.md`.
- No hagas push a otras ramas ni toques `inputs/`.

## Ronda 2 (ver `PROMPT_2.md`)
- El manual v1 existe: amplíalo, no lo reescribas. Registra cada contradicción con v1.
- Investigación en GitHub: para cada repositorio o skill anota URL, estrellas, licencia, fecha del último commit y versión. Descarta lo abandonado.
- Los skills y paquetes son código o instrucciones de terceros: audita su contenido antes de recomendarlos y fija versión o commit.
- Todo lo nuevo debe declarar su costo en horas y de dónde sale ese tiempo.
