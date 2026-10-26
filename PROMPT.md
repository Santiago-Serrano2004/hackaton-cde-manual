# Prompt maestro (ejecútalo fase por fase)

Contexto: lee primero `CLAUDE.md` (reglas), `manual/PROGRESO.md` (dónde retomar) y TODO `inputs/`.
El reto vigente es el del CDE ("De datos dispersos a conocimiento que innova"). Evaluación: Funcionalidad 60
(ISO/IEC 25010, 3 jurados técnicos), Diferenciador 15, Modelo de negocio 15 (2 jurados de negocio), Equipo 10.
Tiempo real de desarrollo: del 28 oct 8:00 al 29 oct 9:00, con receso 12-2 pm del día 28, dos validaciones con el CDE
(28 a las 5:00 pm y 29 a las 8:00 am) y pitch de 5 min + 5 min de preguntas.

Para cada fase crea el archivo indicado en `manual/`, actualiza `PROGRESO.md`, haz commit y sigue con la siguiente.

## F1 Requisitos y trazabilidad (`01_requisitos.md`)
Extrae, sin omitir ninguno: los 10 resultados que el CDE necesita lograr, los 10 criterios "cómo sabremos que se resolvió",
los dolores del problema, las 9 características ISO/IEC 25010 y los 8 puntos de Dimensión 2. Conviértelos en requisitos con ID,
prioridad (Must/Should/Could/Won't para 25 horas), criterio de aceptación medible y trazabilidad a criterio de evaluación y a ISO 25010.
Incluye una matriz requisito x criterio y una lista de contradicciones o vacíos del texto fuente.

## F2 Alcance MVP y usuarios (`02_alcance_mvp.md`)
Define roles (equipo CDE, emprendedor, docente/estudiante consultor, administrador), historias de usuario con criterio de aceptación,
y el "camino dorado" de la demo (el recorrido que se mostrará a los jurados). Decide qué entra y qué queda como visión futura, y por qué,
optimizando los 60 puntos de funcionalidad con 3 personas en ~25 horas.

## F3 Stack y decisiones técnicas (`03_stack.md`)
Parte de la preferencia del chat (React, Laravel, PostgreSQL, JWT, monolito modular, Docker, despliegue en servidor del equipo)
pero valídala frente a alternativas con tabla de criterios: curva de aprendizaje real del equipo, velocidad, riesgo, ISO 25010.
Entrega versiones exactas (con fuente y fecha), comandos de instalación, estructura de carpetas, convenciones, linters, formato de commits
y estrategia de ramas para 3 personas trabajando en paralelo sin conflictos. Define despliegue, respaldo y plan B si falla el servidor o la red.
Donde la decisión sea del equipo, ponla en `99_preguntas_abiertas.md` con una recomendación.

## F4 Datos (`04_datos.md`)
Modelo de datos completo: empresa, persona/emprendedor, contactos, diagnóstico de madurez y su evolución, proyecto de aula, plan de acción
y compromisos, citas y recordatorios, capacitaciones/eventos, inscripciones y asistencia, historial de intervenciones, gamificación (retos, puntos,
niveles, insignias). Reglas de deduplicación (NIT, correo, nombre), validaciones, catálogos (17 sectores, tamaños, formalización),
auditoría, política de datos personales (Ley 1581 de 2012). Plan de datos sintéticos realistas para la demo con las proporciones del CDE
(497 empresas, 37% comunidad UNAB, sectores 28/20/14/11/7%, solo 36% con sector y 37% con tamaño), incluyendo duplicados sembrados a propósito
para mostrar la depuración. Incluye importación desde hojas de cálculo.

## F5 Arquitectura, seguridad y calidad (`05_arquitectura.md`)
Módulos, límites y contratos de API, autenticación y autorización por rol, registro de acciones, tareas programadas (recordatorios),
correo/notificaciones, reportes y analítica (brechas por sector/tamaño/formalización), exportación. Tabla "característica ISO/IEC 25010 ->
decisión concreta -> cómo se demuestra a los jurados" para las 9 características. Seguridad (OWASP ASVS/Top 10 aplicables), manejo de errores,
rendimiento con volumen creciente, interoperabilidad (CSV/Excel, API, Google Workspace si aplica).

## F6 UX y gamificación (`06_ux_gamificacion.md`)
Mapa de pantallas por rol, flujos, wireframes en texto, sistema de diseño mínimo (colores, tipografías, componentes), accesibilidad.
Diseño del módulo de formación por recompensas: mecánica (retos, puntos, niveles, insignias, rachas), contenido de ejemplo conectado a las
capacitaciones reales del CDE, anti-trampa, y cómo se mide que sea "intuitivo y divertido". Respalda las decisiones con investigación de
gamificación y motivación citada (fuente y año; marca `[NO VERIFICADO]` lo que no puedas confirmar).

## F7 Plan de construcción (`07_plan_construccion.md`)
Línea de tiempo hora a hora entre el 28 8:00 y el 29 9:00 incluyendo sueño/descanso, receso, las dos validaciones con el CDE y la preparación del pitch.
Tareas numeradas, pequeñas, commiteables, con responsable (Santiago / Julián / María Paula, asignado según el chat), dependencias, estimación y definición de terminado.
Primer hito: un recorrido de punta a punta funcionando. Congelamiento de funciones (feature freeze) y plan de contingencia. Reparto para no bloquearse.

## F8 Pruebas y checklists (`08_pruebas_checklists.md`)
Plan de pruebas por requisito, casos manuales de la demo, pruebas automáticas mínimas de mayor valor, checklist de seguridad, de ISO 25010,
de accesibilidad, de rendimiento, de despliegue y checklist de "T-60 minutos" antes del cierre del desarrollo. Datos y cuentas de demo, y respaldo de la demo (video/capturas).

## F9 Negocio, diferenciación y pitch (`09_negocio_pitch.md`)
Investiga y cita: alternativas existentes (CRM y gestión de incubadoras/centros de emprendimiento, plataformas de gamificación y LMS,
herramientas para universidades) y compáralas con la propuesta. Elemento diferenciador defendible, modelo de negocio (quién paga, cuánto, cómo se
replica a otras universidades/centros), sostenibilidad dentro de la UNAB, recursos, escalabilidad, posicionamiento, valor para la UNAB.
Guion del pitch de 5 minutos con tiempos por segmento (sin replantear el problema, el CDE ya lo definió), distribución de quién habla, guion de demo,
y 25 preguntas probables del jurado (técnicas y de negocio) con respuesta sugerida. Argumento de equipo (criterio de 10 puntos).

## F10 Preguntas para el CDE (`10_preguntas_cde.md`)
Entre 8:30 y 10:00 del día 28 hay sesión de preguntas con el CDE (el cliente). Prepara la lista priorizada de preguntas cuya respuesta cambie decisiones
de diseño, derivada de las contradicciones y vacíos de F1 a F9: datos reales disponibles, formatos de hojas, integraciones, reglas de negocio, usuarios,
volumen, restricciones institucionales, qué consideran "intuitivo y divertido", y qué demostrarían como éxito en las validaciones.

## F11 Auditoría final y `INDEX.md`
Relee todo el manual. Verifica: cada requisito Must tiene tarea, prueba y responsable; no hay contradicciones entre archivos; no hay afirmación técnica sin fuente
ni versión; ninguna decisión depende de algo marcado `[NO VERIFICADO]` sin plan; tiempos del plan caben en las horas disponibles.
Corrige y crea `manual/INDEX.md` (orden de lectura) y `manual/PROYECTO_CLAUDE.md`: un CLAUDE.md listo para copiar al repo de desarrollo, con comandos, convenciones y reglas.
Termina con un resumen de riesgos principales y las 10 decisiones que el equipo debe confirmar antes de empezar.
