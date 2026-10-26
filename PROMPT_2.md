# Prompt maestro 2 (segunda pasada): diferenciadores, backlog, frontend de alto impacto

Lee `CLAUDE.md`, `manual/PROGRESO.md` (retoma en la primera fase de la ronda 2 sin marcar) y el manual existente
(`manual/INDEX.md` y los archivos 01 a 10, 99, PROYECTO_CLAUDE). El manual v1 ya existe: esta ronda lo AMPLÍA, no lo reescribe.
Si debes contradecir una decisión de v1, no la cambies en silencio: regístrala en `manual/99_preguntas_abiertas.md` y en `PROGRESO.md`
con el motivo, y corrige en cascada los archivos afectados.

## Restricción central: el tiempo manda
El plan de v1 (`07_plan_construccion.md`) ya declara déficit de ~1,5 a 2,5 h por persona en 25 h reales. Por eso:
- Todo diferenciador o funcionalidad nueva debe traer su costo en horas y de dónde sale ese tiempo (qué se recorta o se simplifica).
- Prefiere lo que se vea y se entienda en 20 segundos de demo y que aparezca como evidencia en los 60 puntos de funcionalidad.
- Prohibido proponer "wow" que ponga en riesgo la estabilidad: un jurado técnico castiga un fallo más de lo que premia un efecto.
- Marca cada propuesta como `PROPUESTA` y cada dato externo con fuente, versión y fecha de consulta. Sin fuente: `[NO VERIFICADO]`.

## Acceso a internet
La ronda 1 no pudo abrir sitios oficiales. Al empezar, prueba el acceso (npm, packagist, github.com, laravel.com, react.dev, GitHub API).
Si sigue bloqueado, documéntalo en `PROGRESO.md`, haz solo lo que no dependa de la red y deja el resto como lista de verificación manual.

## F12 Verificación de lo `[NO VERIFICADO]` (`12_verificacion.md`)
Toma la lista de `99_preguntas_abiertas.md` §J y verifícala contra fuentes primarias: versiones estables de Laravel, PHP, React, Vite,
Node, PostgreSQL, Sanctum, Tailwind, y compatibilidad de cada paquete elegido. Tabla: afirmación, fuente primaria, versión, fecha, resultado.
Actualiza `03_stack.md` con las versiones realmente verificadas y los comandos de instalación corregidos.

## F13 Factores diferenciadores puntuales (`13_diferenciadores.md`)
Entrega 12 a 15 candidatos y recomienda un portafolio final de 4 a 6, dentro del presupuesto de horas. Partimos de estas ideas
(evalúalas, descártalas con argumentos o mejóralas, y añade las tuyas; no son decisiones):
- Buscador global tipo paleta de comandos (Ctrl+K) con búsqueda tolerante a errores: "historial completo de una empresa en menos de un minuto" hecho visible.
- Duplicados: puntuación de similitud (NIT, correo, nombre), vista lado a lado, fusión con deshacer y rastro de auditoría.
- Puntaje de calidad de datos por ficha y global (completitud, consistencia) con tareas automáticas para completar lo que falta (el CDE tiene solo 36% de fichas con sector).
- Línea de tiempo de cada empresa que une proyectos de aula, diagnósticos, citas, planes de acción, eventos y capacitaciones, sin doble registro.
- Diagnóstico de madurez con radar y evolución en el tiempo.
- Registro de asistencia con QR en el evento y vista en vivo de inscritos frente a asistentes.
- Convocatorias segmentadas y recomendador de oferta explicable ("te sugerimos X porque...") por perfil e historial.
- Portal "Mi ruta" del emprendedor: etapa, compromisos pendientes, próxima cita, oferta recomendada.
- Gamificación atada a hechos reales (cerrar un compromiso, asistir, completar un módulo) en forma de mapa de ruta, no insignias decorativas.
- Preguntas de investigación en lenguaje natural sobre los datos del CDE (p. ej. "mayores brechas del sector Alimentos") resueltas de forma segura y
  verificable; evalúa si se hace con consultas parametrizadas, con IA opcional, o ambas, y qué riesgos tiene cada una.
- Reporte de impacto en un clic (PDF/Excel) sin consolidación manual.
- Modo demostración con datos sintéticos y botón de reinicio.
- Diseño para ISO/IEC 25010 visible: panel de salud del sistema, registro de auditoría navegable, roles probables en pantalla.
- Posibilidad de replicarse en otros centros de emprendimiento (multi-institución) como argumento de negocio.
Para cada candidato: qué dolor del CDE resuelve (cita el texto), qué criterio de evaluación mueve y cuántos puntos defiende,
característica ISO 25010, cómo se demuestra en 20 s, horas estimadas por rol, riesgo técnico, qué alternativa comercial NO lo ofrece
(con evidencia), y su corte si falta tiempo. Cierra con una matriz valor-esfuerzo y el portafolio recomendado.

## F14 Backlog de funcionalidades (`14_backlog.md` y `backlog.csv`)
Backlog completo y priorizado: épicas, historias, tareas, con ID que enlace a los RF/RNF de `01_requisitos.md`. Campos: valor para los 60 puntos (qué
característica ISO), prioridad (Must/Should/Could/Won't), horas, responsable propuesto, dependencias, criterio de aceptación, qué se simula y qué es real,
"definición de terminado" y rebanada vertical a la que pertenece. Ordena por rebanadas verticales entregables (la primera: recorrido completo de punta a punta).
Concilia con `07_plan_construccion.md`: cualquier cambio de horas se refleja allí, con el balance por persona. `backlog.csv` con una fila por tarea,
listo para importar a GitHub Projects (columnas: id, titulo, epica, prioridad, horas, responsable, dependencias, criterio_aceptacion, etiquetas).

## F15 Frontend de alto impacto: skills, librerías y recursos (`15_frontend_skills_y_ui.md`)
Investiga en GitHub y en documentación oficial qué hay hoy para construir interfaces memorables con React: skills y plugins de agentes para diseño frontend
(por ejemplo las listas "awesome" de skills de Claude Code y el skill oficial `frontend-design` de Anthropic), librerías de componentes y animación, gráficos,
tablas, formularios, validación, iconos, confeti, paletas de comandos, generación de PDF, QR, etc. Verifica cada candidato en vivo:
repositorio, estrellas, licencia, fecha del último commit, compatibilidad con React + Vite + Tailwind y con la versión de Laravel elegida, tamaño, accesibilidad.
Descarta lo abandonado, con licencia dudosa o pesado para un proyector de laboratorio.
Seguridad de cadena de suministro: un skill o paquete es código o instrucciones de terceros. Para cada skill propuesto revisa su contenido antes de recomendarlo
(scripts, comandos, instrucciones ocultas o que envíen datos hacia afuera) y recomienda fijar versión o commit. No recomiendes instaladores que se descarguen y se ejecuten
directamente sin revisión previa; prefiere clonar, leer e instalar desde el gestor de paquetes con versión fija.
Entregables: (1) tabla final de la pila de UI con versión exacta, motivo y comando de instalación; (2) lista de skills para el agente de programación, con
ruta de instalación en `.claude/skills/` y cómo comprobar que quedaron activas; (3) lista de lo descartado y por qué; (4) presupuesto de rendimiento
(peso del bundle, LCP, fluidez de animaciones en un portátil de gama media y proyector).

## F16 Sistema de diseño y dirección de arte (`16_sistema_de_diseno.md`)
Tres direcciones visuales alternativas con descripción concreta, y una recomendada, coherente con la identidad del CDE/UNAB (naranja y azul oscuro en sus
documentos; no uses logos ni marcas sin confirmar permiso, ver `99`). Tokens (color con contraste verificado WCAG 2.2 AA, tipografía con fuentes
con licencia libre y fallback, espaciado, radios, sombras, modo oscuro), principios de movimiento (duración, curvas, respeto a "reducir movimiento"),
catálogo de componentes con estados (vacío, cargando con esqueletos, error, éxito, deshabilitado), patrones de formularios y tablas con miles de filas,
microinteracciones, pantallas "hero" de la demo (paleta de comandos, línea de tiempo, radar de madurez, tablero de brechas, mapa de ruta gamificado)
con wireframe textual detallado, responsive y accesibilidad. Incluye una lista de antipatrones "de plantilla genérica" que deben evitarse y una
revisión visual (checklist) que se aplica antes de cada validación con el CDE.

## F17 Especificaciones autocontenidas por tarea (`tareas/T-XX.md`)
Para cada tarea Must y Should del backlog, un archivo con una spec que otro agente (Codex/Claude/GPT) pueda ejecutar sin leer nada más:
contexto mínimo, archivos a crear o tocar, contratos (endpoints, esquemas, props), reglas de negocio, casos límite, pruebas esperadas, criterio de
aceptación y comando para verificar. Mismo formato en todas. Incluye un `tareas/_PLANTILLA.md` y un `tareas/_INDEX.md` con el orden de ejecución.

## F18 Pitch y demo v2 (`18_pitch_v2.md`)
Reescribe el guion de 5 minutos integrando el portafolio de diferenciadores: narrativa, minuto a minuto, quién habla, qué se ve en pantalla, el "momento
wow" y cómo se defiende cada diferenciador ante el jurado técnico y el de negocio. Guion de demo segundo a segundo con plan B por cada paso,
ensayo cronometrado y banco ampliado de preguntas difíciles con respuesta. Argumentos de negocio para los dos jurados de negocio: replicable, escalable, vendible.

## F19 Kit de trabajo local y auditoría v2 (`19_kit_local.md`, actualizar `INDEX.md`, `PROYECTO_CLAUDE.md`)
(1) Kit local: skills, servidores MCP y subagentes recomendados para desarrollar en el PC, con instalación paso a paso, verificación y qué agente hace qué tarea.
(2) Auditoría: toda tarea Must del backlog tiene spec, prueba y responsable; el plan de horas cierra por persona; no hay contradicciones entre archivos;
ninguna versión sin verificar (o con plan); `INDEX.md` y `PROYECTO_CLAUDE.md` actualizados; lista final de decisiones pendientes y riesgos.
