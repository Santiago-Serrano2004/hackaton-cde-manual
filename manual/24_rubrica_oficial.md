# 24 · Rúbrica oficial del jurado: cruce con el producto, el desarrollo y el pitch

**Fuente.** `Rubrica_Evaluacion_UNAB_Venture_Challenge_1.docx`, entregada el 28-oct-2026 (instrumento oficial del jurado). El original no está en el repositorio porque `inputs/` no se modifica (regla de `CLAUDE.md`); está en la carpeta de descargas de Santiago. Este archivo **reemplaza** la convención de seis aspectos de 10 puntos que usaban `13` §1.2 y `20` §9 (`20` decía que la rúbrica no repartía los 60 puntos; ahora sí lo hace).

**Estado de lo construido** (28-oct 08:40): esquema PostgreSQL completo (59 tablas, 4 vistas), modelos, normalizador de NIT/correo/nombre/teléfono/municipio, 98 pruebas en verde, CI en verde, instalador Windows sin probar en Windows. **No hay** rutas API, auth, policies, jobs ni pantallas (el front es el andamio de Vite). Por tanto, hoy no hay nada demostrable en vivo; la puntuación sale de lo que se demuestre.

## 1. Reglas del jurado que cambian la estrategia

| Regla de la rúbrica | Consecuencia |
|---|---|
| «Se califica lo que el equipo demuestra; lo que no se evidencia no suma puntos.» | Cada subcriterio necesita un momento de demo o una evidencia mostrable. Lo que solo está en el manual vale 0. |
| Niveles: Sobresaliente 100 %, Satisfactorio 75 %, Básico 50 %, Insuficiente 0–25 %. | Pasar de Básico a Satisfactorio vale 25 % del subcriterio; de Satisfactorio a Sobresaliente, otro 25 %. Conviene llegar a Satisfactorio en todos antes de buscar Sobresaliente en uno. |
| Funcionalidad: promedio de los **3 jurados técnicos**. Negocio: promedio de los **2 de negocio**. Diferenciador y Equipo: los 5. | El pitch debe hablar a dos públicos: lo técnico (demo, calidad, seguridad) y lo comercial (clientes, precio, evidencia de interés). |
| Desempate: funcionalidad → innovador → negocio → equipo → mayoría simple. | Funcionalidad decide los empates. |
| Validación 1 (28-oct 17:00–17:30, 5 min por equipo) y validación 2 (29-oct 08:00–08:30) aportan evidencia a «Capacidad de ejecución». | Hay que tener algo verificable **hoy a las 17:00**, no solo mañana. |
| Pitch final 29-oct 09:15–10:30 (5 min + 5 min de preguntas); deliberación 10:30–12:00; anuncio a las 12:00. | Sin cambios respecto de `18`. |

## 2. Funcionalidad (60 puntos, 3 jurados técnicos)

Los puntos en juego por subcriterio están en la rúbrica. «Hoy» es el estado real; «Meta» es el nivel que se persigue con el plan de `20`.

| # | Subcriterio (pts) | Qué pide el nivel Sobresaliente | Hoy | Meta | Qué lo demuestra | Tareas |
|---|---|---|---|---|---|---|
| 1.1 | **Adecuación funcional (14)** | Cubre todo el reto, correcto y demostrado en vivo: ficha 360, proyectos de aula, planes de acción, citas, formaciones y eventos, inscripción vs. asistencia, módulo de recompensas, análisis del tejido empresarial | Solo datos | Satisfactorio (10,5): «la mayoría», con recompensas y análisis presentes aunque con vacíos menores | Camino dorado de la demo (`02` §5): empresa → diagnóstico → plan → cita → evento con inscripción y asistencia → puntos → dashboard | T-10, T-11b, T-20, T-23, T-41, T-42, T-43, T-45 |
| 1.2 | **Automatización del trabajo manual (12)** | Automatiza de punta a punta (captura, inscripción, consolidación y depuración, recordatorios, seguimiento de planes, reportes) **y demuestra cuánto tiempo o pasos se eliminan** | Normalizador listo | Satisfactorio (9) | Una **medición antes/después** en pantalla: «consolidar N hojas a mano = X min; con el sistema = Y s». Importar CSV con duplicados, fusionar, recordatorio enviado sin intervención, reporte en un clic | T-13, T-12, T-21, T-15, T-45 |
| 1.3 | **Capacidad de interacción (10)** | Intuitivo, claro y divertido; un usuario nuevo completa las tareas clave **sin ayuda**; la gamificación motiva y guía; maneja errores; accesible | Nada | Satisfactorio (7,5) | Prueba de uso: una persona que no es del equipo hace una tarea clave sin ayuda, cronometrada. Mensajes de error claros (el normalizador ya devuelve códigos y mensajes) | T-40, T-44, T-47, `21_microcopy` |
| 1.4 | **Fiabilidad (5)** | Sin fallos en la demo; conserva y recupera datos; **maneja entradas inesperadas sin romperse** | 98 pruebas, CI | Satisfactorio (4) | En la demo, escribir un NIT inválido y que responda con un mensaje (no un error 500); `demo:reset` y restauración desde `dump.sql`; ensayo completo sin fallos | T-31, P-03, T-11b |
| 1.5 | **Seguridad (5)** | Roles, protección de datos de emprendedores, **trazabilidad** y tratamiento de datos personales | Roles sembrados, auditoría inmutable, documento cifrado, consentimientos | Satisfactorio (4) | Iniciar sesión con dos roles y mostrar que uno no ve lo del otro; abrir la bitácora con quién, qué y cuándo; ficha de consentimiento | **T-10**, T-46 |
| 1.6 | **Eficiencia de desempeño (3)** | Respuestas ágiles con datos realistas y **sin degradarse al crecer** | Índices `pg_trgm`, `btree_gist` | Satisfactorio (2,5) | Cifra medida con 497 empresas y con 5 000 (`T-96`): tiempo de búsqueda y de lista | T-30, T-96 |
| 1.7 | **Compatibilidad (3)** | Importa de fuentes existentes (hojas, registros de eventos, formularios) y **funciona en distintos navegadores y dispositivos** | Normalizador | Satisfactorio (2,5) | Importación CSV en vivo; abrir la misma pantalla en el celular y en otro navegador | T-13, T-40 |
| 1.8 | **Mantenibilidad (3)** | Código y datos organizados **y documentados**, arquitectura modular | Monolito modular, CI, pruebas, `COMMENT ON` en tablas y columnas | Satisfactorio (2,5) | Mostrar la estructura `app/Modules/*`, el CI en verde y la documentación de la API generada | ver §6 (conflicto con la regla del repo público) |
| 1.9 | **Flexibilidad (3)** | Se adapta a nuevos módulos/usuarios/volúmenes, **fácil de instalar** y escala a otros centros | Docker Compose, `instalar.bat` | Satisfactorio (2,5) | Instalar en una máquina limpia con un comando; cambiar un catálogo sin tocar código | RNF-11, RF-23 |
| 1.10 | **Protección (2)** | Avisos y confirmaciones ante acciones irreversibles; respaldo de datos | Borrado lógico, tablas de solo anexar | Satisfactorio (1,5) | Diálogo de confirmación antes de fusionar duplicados o eliminar; botón o script de respaldo con restauración | T-12, P-03 |

**Lectura del peso.** 26 de los 60 puntos (1.1 + 1.2) premian que el reto funcione y que se vea el trabajo eliminado. Seguridad, fiabilidad y protección suman 12 y se ganan con cosas pequeñas bien hechas (T-10, confirmaciones, respaldo). Mantenibilidad, flexibilidad, compatibilidad y eficiencia suman 12 y casi se ganan con lo que ya existe, si se muestran.

## 3. Componente innovador y diferenciador (15 puntos, 5 jurados)

| # | Subcriterio (pts) | Qué exige la rúbrica | Dónde está en el manual | Brecha |
|---|---|---|---|---|
| 2.1 | **Diferenciación frente a alternativas (6)** | Comparar **explícitamente** con alternativas y mostrar una ventaja **clara y verificable** | `09` §1 y §2, `13`, `02_panorama_competitivo` | La ventaja debe verse **en la demo**, no solo en una tabla. Cuidado con afirmaciones absolutas («nadie lo hace»), que `18` prohíbe |
| 2.2 | **Novedad y creatividad (5)** | Ideas originales en **modelo de datos, analítica y gamificación**; experiencia memorable | `13` (portafolio 5+1), `diseno/gamificacion` («El hilo») | Mostrar al menos una idea de cada uno de los tres frentes: el modelo de datos (NIT normalizado, fusión que conserva historial), la analítica (mapa de calor, preguntas guiadas) y la gamificación |
| 2.3 | **Posicionamiento en el mercado (4)** | A quién se dirige, propuesta de valor y **cómo lograría posicionarse** (CDE, otros centros, universidades) | `09` §3.9, `investigacion/04_ruta_comercial.md` | Añadido el 28-oct: venta a otras entidades interesadas |

## 4. Modelo de negocio y sostenibilidad (15 puntos, 2 jurados de negocio)

| # | Subcriterio (pts) | Qué exige la rúbrica | Dónde está | Brecha |
|---|---|---|---|---|
| 3.1 | **Replicabilidad (4)** | Configurable **sin reprogramar**, despliegue **documentado**, se integra con sus datos y sistemas | `09` §3.1, §3.5; catálogos administrables; Docker | Demostrar el cambio de marca/catálogo por configuración (no solo decirlo) |
| 3.2 | **Escalabilidad (4)** | Crece en usuarios, datos, módulos y organizaciones sin perder desempeño ni disparar costos; **ruta por fases con hitos** | `09` §3.5 (3 horizontes) | Poner **hitos medibles** por horizonte (hoy son periodos, no hitos) y la medición de 5 000 empresas |
| 3.3 | **Venta y posicionamiento (4)** | Mercado, clientes, disposición a pagar, esquema de venta, canales y **evidencia de interés (entrevistas, cartas de intención, pilotos)** | `09` §3.1–§3.2 | **Es la mayor brecha de negocio.** Sin evidencia de interés el máximo es Satisfactorio (3). Hay que conseguir algo en las validaciones con el CDE: una frase del CDE de que lo usaría, una carta de intención o el compromiso de un piloto |
| 3.4 | **Sostenibilidad económica (3)** | Costos, ingresos o ahorros **y punto de equilibrio** coherentes; **quién mantiene** y actualiza dentro de la Universidad y en el mercado | `09` §3.3, §3.4, §3.7 | `09` **no contiene** «punto de equilibrio» (búsqueda sin resultados). Hay que calcularlo y añadirlo |

## 5. Equipo (10 puntos, 5 jurados)

| # | Subcriterio (pts) | Qué exige la rúbrica | Estado | Acción |
|---|---|---|---|---|
| 4.1 | **Complementariedad (3)** | Perfiles **de distintos programas** que cubran tecnología, negocio, usuario y diseño, y estrategia y comunicación, con roles claros | Roles técnico, producto/negocio y operación definidos en `18` | Confirmar el programa académico de cada integrante y qué perfil cubre; si falta uno de los cuatro, decirlo con honestidad y mostrar quién lo cubre |
| 4.2 | **Participación (3)** | Todos participan en desarrollo, validación y pitch | Pitch con tres voces (`18`) | Que los tres hablen en el pitch y en la validación; que los tres tengan commits visibles |
| 4.3 | **Capacidad de ejecución (2)** | Cumplir las validaciones 1 y 2 con **avances verificables** y entregar al cierre | — | Tener a las 17:00 un flujo corto funcionando (login → empresa → búsqueda, aunque sea parcial) |
| 4.4 | **Pitch y respuestas (2)** | Claro, **dentro de los 5 minutos**, centrado en la solución, con dominio de las preguntas | Guion y banco de 55 preguntas (`18`) | Cronometrar; preparar respuestas para las preguntas de seguridad y de venta |

## 6. Conflictos y hallazgos a decidir

1. **Documentación (Mantenibilidad 1.8, Replicabilidad 3.1).** La rúbrica pide «documentados» y «pasos documentados», pero la regla del repo público es **sin `.md`**. Salidas que respetan la regla: documentación de la API generada automáticamente (OpenAPI), comentarios en la base (`COMMENT ON`, ya hecho), comentarios de código y los scripts de instalación. **Decisión pendiente:** ¿se permite un único `README` para el jurado? Esta sería la excepción más barata de los 3 puntos.
2. **El plan de `20` se calculó con otro reparto.** Hay que revisar, no reescribir: lo que `20` llamaba «seis aspectos de 10» ahora son diez subcriterios. Efecto neto: sube el valor relativo de **Automatización (12)** y de **Seguridad + Protección + Fiabilidad (12)**, y baja el de «coherencia» como categoría propia.
3. **Evidencia de interés (3.3).** No depende del código. Depende de lo que se consiga con el CDE a las 17:00.
4. **Validación 1 hoy.** La rúbrica la usa para calificar la ejecución. Con el estado actual solo se mostrarían datos y pruebas. Prioridad: T-10 y un corte vertical de empresas.
5. **El simulacro de `22` (60,8/100)** se hizo sin esta rúbrica. Rehacerlo con la hoja de §7 de la rúbrica antes del ensayo.

## 7. Qué cambia en el orden de trabajo

1. **T-10a** (auth, roles, auditoría): desbloquea 1.5 y casi todo lo demás.
2. **Corte vertical de empresas** (T-11b: lista, búsqueda con `pg_trgm`, ficha, NIT inválido con mensaje): es lo que se enseña a las 17:00 y alimenta 1.1, 1.4, 1.6.
3. **Importación + duplicados + fusión con confirmación** (T-13, T-12): alimentan 1.2, 1.7, 1.10 y la medición antes/después.
4. **Eventos con inscripción y asistencia + recordatorios** (T-23, T-21): alimentan 1.1 y 1.2.
5. **Gamificación y portal** (T-43, T-44) para 1.3 y 2.2.
6. **En paralelo, sin código:** evidencia de interés (3.3), punto de equilibrio (3.4), hitos de escalamiento (3.2), perfiles del equipo (4.1).

## 8. Preguntas para el CDE (validación de las 17:00)

Dirigidas a cerrar los vacíos que la rúbrica castiga:
1. ¿Usarían este sistema? ¿Pueden dejarlo por escrito o comprometer un piloto de un semestre? *(3.3)*
2. ¿Qué hojas o fuentes tienen hoy, y cuánto tiempo toma consolidarlas? Con esa cifra se hace la comparación antes/después. *(1.2)*
3. ¿Qué dato debe quedar protegido y quién puede verlo? ¿Tienen un aviso de tratamiento de datos? *(1.5)*
4. ¿Cuántos usuarios y cuántas empresas esperan en un año? *(1.6, 3.2)*
5. ¿Quién mantendría el sistema dentro de la UNAB? *(3.4)*
6. ¿La propiedad intelectual del desarrollo es del equipo o de la UNAB? *(3.3, L-1 en `investigacion/04_ruta_comercial.md`)*

## 9. Hoja de autoevaluación (copia de la hoja del jurado, para el ensayo)

| Subcriterio | Máx. | Meta | Ensayo 1 | Ensayo 2 |
|---|---:|---:|---:|---:|
| 1.1 Adecuación funcional | 14 | 10,5 | | |
| 1.2 Automatización | 12 | 9 | | |
| 1.3 Capacidad de interacción | 10 | 7,5 | | |
| 1.4 Fiabilidad | 5 | 4 | | |
| 1.5 Seguridad | 5 | 4 | | |
| 1.6 Eficiencia de desempeño | 3 | 2,5 | | |
| 1.7 Compatibilidad | 3 | 2,5 | | |
| 1.8 Mantenibilidad | 3 | 2,5 | | |
| 1.9 Flexibilidad | 3 | 2,5 | | |
| 1.10 Protección | 2 | 1,5 | | |
| **Funcionalidad** | **60** | **46,5** | | |
| 2.1 Diferenciación | 6 | 4,5 | | |
| 2.2 Novedad y creatividad | 5 | 4 | | |
| 2.3 Posicionamiento | 4 | 3 | | |
| **Diferenciador** | **15** | **11,5** | | |
| 3.1 Replicabilidad | 4 | 3 | | |
| 3.2 Escalabilidad | 4 | 3 | | |
| 3.3 Venta y posicionamiento | 4 | 3 | | |
| 3.4 Sostenibilidad económica | 3 | 2,5 | | |
| **Negocio** | **15** | **11,5** | | |
| 4.1 Complementariedad | 3 | 2,5 | | |
| 4.2 Participación | 3 | 2,5 | | |
| 4.3 Capacidad de ejecución | 2 | 1,5 | | |
| 4.4 Pitch y respuestas | 2 | 1,5 | | |
| **Equipo** | **10** | **8** | | |
| **Total** | **100** | **77,5** | | |

La meta de 77,5 es la suma de apuntar a Satisfactorio en todo. Es una meta de planificación, no una predicción.
