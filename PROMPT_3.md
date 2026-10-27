# Prompt maestro 3 (tercera pasada): que el plan quepa, contenido listo y auditoría adversarial

Lee `CLAUDE.md`, `manual/PROGRESO.md` (retoma en la primera fase de la ronda 3 sin marcar), `manual/INDEX.md`, `manual/07_plan_construccion.md`,
`manual/14_backlog.md`, `manual/99_preguntas_abiertas.md` (en especial PA-30) y `manual/18_pitch_v2.md`. Esta ronda AMPLÍA y CORRIGE; no reescribe lo que ya funciona.
Contradicciones con rondas anteriores: regístralas con la marca `R3` en el archivo afectado y en `PROGRESO.md`.

## Problema a resolver
La ronda 2 dejó un déficit declarado: el plan nominal termina entre las 03:00 y las 03:30 y el congelamiento es a la 01:30, con una carga de ~13,25 a 13,75 h
por persona frente a 11,75 h útiles (déficit de equipo de 5 a 8 h). Un plan que no cabe es un plan que se rompe a las 2 a. m. de la noche del 28.
Esta ronda convierte el déficit en un plan que cabe, sin perder el camino dorado de la demo ni los puntos de funcionalidad.

## Reglas de la ronda
- No agregues funcionalidades. Esta ronda solo recorta, simplifica, reasigna y prepara contenido que no consume horas de programación.
- Todo recorte declara qué puntaje de los 60 (y qué característica ISO/IEC 25010) se pierde o se debilita, y cómo se compensa en el pitch.
- Todo dato externo con fuente, versión y fecha. Sin fuente: `[NO VERIFICADO]`. Si algo depende de la red y esta falla, anótalo y sigue.
- Español. Sin código de la aplicación (se permiten textos de interfaz, contenido de formación y tablas de datos de catálogo en `.md` o `.csv` dentro de `manual/`).

## F20 Plan que cabe (`20_plan_que_cabe.md`, y actualiza `07`, `14`, `backlog.csv`, `tareas/_INDEX.md`)
Construye DOS variantes de plan que quepan en 11,75 h útiles por persona hasta el congelamiento, cada una con calendario hora a hora por persona:
- Variante A, "mínimo defendible": solo el camino dorado de la demo de punta a punta, más lo estrictamente necesario para ISO 25010 visible.
- Variante B, "ambiciosa con compuertas": A más los diferenciadores ordenados por valor/hora, cada uno con una compuerta explícita ("si a las HH:MM no está X, se corta Y").
Para ambas: balance por persona que cierra, ruta crítica, tareas paralelizables, reparto de quién bloquea a quién, y un tablero de seguimiento de 1 página
que se llena cada 2 horas. Calcula el puntaje esperado de funcionalidad de cada variante contra la rúbrica de los jurados técnicos (con supuestos explícitos)
y recomienda una variante con justificación numérica. Decide PA-30 dejando la recomendación lista para ratificar; no la apliques sin marcarlo.
Revisa también qué se puede hacer ANTES del 28 sin violar el TyC §11 (esqueleto sin lógica de dominio) para ganar horas reales, y deja la lista exacta.

## F21 Contenido del módulo de formación y textos de interfaz (`21_contenido_formacion.md`, `21_microcopy.md`)
El módulo de formación por recompensas es una demanda explícita del reto. Entrega el CONTENIDO listo para cargar, no solo el diseño:
- 6 a 8 retos o microlecciones cortas alineadas a las capacitaciones y programas reales del CDE descritos en `inputs/` (marketing digital, formalización,
  finanzas básicas, diagnóstico de madurez, ruta de acompañamiento, pitch), con texto, 3 a 5 preguntas de verificación con respuesta correcta y retroalimentación,
  puntos, niveles, insignias y condiciones de desbloqueo, todo en español de Colombia, tono cercano y profesional.
- Contenido factual (normativa, trámites, cifras) con fuente oficial y fecha; si no puedes verificarlo, escríbelo de forma que no afirme lo que no sabes o márcalo.
- Microcopy de toda la interfaz: etiquetas, vacíos, errores, confirmaciones, correos de recordatorio, notificaciones, mensajes de la gamificación, en un solo archivo
  organizado por pantalla y listo para copiar. Reglas de tono y lenguaje inclusivo.
- Catálogos listos (17 sectores económicos, tamaños, estados de formalización, etapas de acompañamiento, tipos de atención) con códigos estables.
- Plantilla de 5 a 8 empresas sintéticas variadas y verosímiles con sus historiales, que sirvan como "casos de demostración" del relato del pitch.

## F22 Auditoría adversarial con cinco jurados simulados (`22_auditoria_adversarial.md`)
Actúa como cinco evaluadores independientes y hostiles, uno a la vez, sin ver los veredictos de los demás hasta el final:
tres jurados técnicos (uno de arquitectura y seguridad, uno de calidad y pruebas con ISO/IEC 25010, uno de experiencia de usuario) y dos jurados de negocio
(uno de sostenibilidad financiera, uno de escalabilidad y comercialización). Cada uno puntúa el manual y el plan contra la rúbrica oficial
(60/15/15/10), lista hasta 10 debilidades concretas con evidencia (archivo y sección), la pregunta más incómoda que haría en el pitch y qué cambio
subiría más su puntaje. Después consolida: contradicciones, riesgos que nadie cubrió, supuestos no declarados, y cámbialos en los archivos afectados
(marca `R3`). Verifica además el pitch de 5 minutos con un cronometraje por palabra (ritmo de habla de 130 a 150 palabras por minuto) y señala si no cabe.

## F23 Contingencias y simulacro (`23_contingencias_y_simulacro.md`)
Árbol de decisión de fallos (servidor del patrocinador caído, red del laboratorio, base de datos corrupta, pasarela de correo, proyector, portátil muerto, pérdida de la
rama, conflicto de fusión a las 3 a. m.) con acción, responsable y tiempo máximo antes de pasar al plan B. Guion de un simulacro completo de 90 minutos
del 28 por la tarde (demo + pitch + preguntas) con roles y rúbrica de autoevaluación. Lista de verificación de las 2 horas finales antes del cierre del desarrollo.
Qué debe estar impreso o guardado sin conexión.

## F24 Cierre (actualiza `INDEX.md`, `PROYECTO_CLAUDE.md`, `PROGRESO.md`)
Reconcilia todo: el plan cierra por persona; cada tarea Must tiene spec, prueba y responsable; `INDEX.md` muestra el orden de lectura en dos niveles (lo que los tres
deben leer en total 90 minutos, y lo que cada uno lee de su parte); una página final "Si solo tienes 30 minutos" con lo imprescindible y las decisiones que el equipo
toma ahora. Termina con la lista corta de decisiones pendientes con tu recomendación.
