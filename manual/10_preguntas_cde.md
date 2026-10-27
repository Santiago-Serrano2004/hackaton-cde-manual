# 10 · Preguntas para el CDE (sesión del 28-oct, 8:30–10:00)

**Objetivo.** Lista priorizada de preguntas cuya respuesta cambia decisiones de diseño, derivada de los vacíos y contradicciones de F1–F9, para usarla en la sesión de preguntas y respuestas con el CDE (cliente).

**Entradas.** `99_preguntas_abiertas.md`, `01` §12, `07` §4.

## 1. Cómo usar esta lista
1. La sesión es de 90 min compartidos con hasta 5 equipos y la presentación del reto: es probable que cada equipo tenga **2–3 preguntas** efectivas. Lleven impresas las **P0** y decidan antes quién pregunta cuál.
2. Preguntar corto, una cosa por pregunta, con la opción por defecto: "Asumimos X, ¿correcto?" (más fácil de responder).
3. J anota literal la respuesta en `docs/RESPUESTAS_CDE.md` con hora; a las 10:00 la reunión T-01 actualiza `docs/DECISIONES.md`.
4. Si una pregunta ya fue respondida por el CDE o por otro equipo, tachar.
5. Las preguntas de **V1** (17:00) y **V2** (8:00) están en §4.
6. No revelar a otros equipos el diferenciador (D-05) al preguntar.

## 2. Preguntas priorizadas

Prioridad: **P0** cambia arquitectura o alcance; **P1** cambia pantallas o datos; **P2** ajuste menor. "Defecto" = lo que se asume si no hay respuesta.

### Reglas del concurso y entorno
| # | Pri. | Pregunta | Decisión que cambia | Defecto | Ref. |
|---|---|---|---|---|---|
| Q-01 | P0 | ¿Hasta qué hora estará abierto el laboratorio el día 28 y desde qué hora el 29? ¿Podemos quedarnos toda la noche? | Plan de sueño y turnos (`07`) | Salimos a las 2:00 y volvemos a las 6:00 | PA-01, V-01 |
| Q-02 | P0 | ¿Se puede llegar con un esqueleto técnico preparado (Docker, CI, proyecto vacío) sin lógica del CDE? ¿Debemos declararlo? | Si hay esqueleto o se parte de cero | Llegamos con esqueleto sin lógica y lo declaramos | PA-22 |
| Q-03 | P0 | ¿Habrá internet estable y puertos abiertos en el laboratorio? ¿Podemos desplegar en nuestro servidor externo? | Despliegue público vs. plan B local | Plan B local como principal | PA-16, PA-10 |
| Q-04 | P1 | ¿La herramienta se entrega como URL funcionando, repositorio, o ambos? ¿Qué es "entrega final" a las 9:00? | Qué se prepara a las 8:45 | URL + repositorio + deck PDF | TyC §2 |
| Q-05 | P2 | ¿Pueden aclarar la cifra de 569 atenciones frente a 347 + 172 por semestre? | Datos de demo y pitch | Usamos 497 y 569 y no citamos 347/172 | PA-02 |

### Datos y reglas de negocio
| # | Pri. | Pregunta | Decisión | Defecto | Ref. |
|---|---|---|---|---|---|
| Q-06 | P0 | ¿Pueden darnos (aunque sea anonimizadas) las columnas de las hojas de cálculo y del formulario de diagnóstico actuales? | Modelo de datos, importación, diagnóstico | Nuestro modelo propuesto de `04` | PA-09, PA-17 |
| Q-07 | P0 | ¿Cuál es la lista oficial de los 17 sectores y de las categorías de tamaño, ingresos y formalización? ¿Con qué criterio definen "tamaño"? | Catálogos y dedup | Catálogos propuestos (`04` §3) | PA-06, PA-07 |
| Q-08 | P0 | ¿Cómo identifican hoy a una empresa de forma única (NIT, cédula, correo)? ¿Hay empresas sin NIT? | Regla de deduplicación | NIT normalizado, luego correo, luego nombre | PA-19 |
| Q-09 | P1 | ¿Qué áreas se intervienen en proyectos de aula y qué estados usan? ¿Cuántos estudiantes por equipo y qué datos del docente se guardan? | Modelo de proyectos | Mercadeo, finanzas, operaciones, formalización + 3 propuestas | PA-07 |
| Q-10 | P1 | ¿El diagnóstico se calcula con un puntaje por dimensión? ¿Con qué niveles de madurez? | Evolución y brechas | Dimensiones 0–100 y 4 niveles | PA-17 |
| Q-11 | P1 | ¿Quién registra hoy la asistencia a eventos y cómo (lista, formulario, QR)? | Asistencia | QR + lista manual | PA-05 |
| Q-12 | P1 | ¿Cuántos usuarios operarán (personas del CDE) y qué roles existen además de operador, docente y emprendedor? | Roles y permisos | 5 roles de `05` | `05` §4 |
| Q-13 | P1 | ¿Qué datos personales NO se pueden mostrar al estudiante consultor ni al docente? | Matriz de acceso | Ocultar contacto al consultor | `06` D3 |

### Integraciones y operación
| # | Pri. | Pregunta | Decisión | Defecto | Ref. |
|---|---|---|---|---|---|
| Q-14 | P0 | ¿Qué herramientas ya usa el CDE o la universidad (Google Workspace, Microsoft 365, sistema académico, CRM)? ¿Cuál es el correo institucional desde el que se envían avisos? | Integraciones, correo, ISO-Compatibilidad | CSV/XLSX + API; correo SMTP simulado | PA-03, PA-04 |
| Q-15 | P1 | ¿Por qué canal quieren los recordatorios (correo, WhatsApp, SMS)? ¿Con cuánta anticipación? | Recordatorios | Correo, 24 h y 1 h antes | PA-03 |
| Q-16 | P1 | ¿Qué reportes entregan hoy a directivas o aliados? ¿Pueden mostrarnos uno (formato, indicadores)? | Reporte de impacto | KPIs propuestos de `05` §6 | RF-21 |
| Q-17 | P1 | ¿Existe una política de tratamiento de datos de la UNAB y una autorización estándar que debamos usar? | Texto de consentimiento | Aviso propio (`04` §6) | PA-18 |

### Gamificación y experiencia
| # | Pri. | Pregunta | Decisión | Defecto | Ref. |
|---|---|---|---|---|---|
| Q-18 | P0 | ¿Para quién es el módulo de formación por recompensas: emprendedores, estudiantes consultores, o ambos? ¿Qué entienden por "intuitivo y divertido"? | Diseño y audiencia de `06` §7 | Emprendedores y consultores | PA-08 |
| Q-19 | P1 | ¿Qué capacitaciones y eventos tienen en el calendario (temas, frecuencia, cupos, presencial/virtual)? ¿Tienen contenido en video o material propio? | Contenido de ejemplo y retos | Misiones de `06` §7.3 | PA-21 |
| Q-20 | P1 | ¿Aceptarían una tabla de clasificación entre emprendedores o prefieren sin competencia? ¿Hay recompensas reales (certificados, reconocimientos)? | RF-19 y anti-trampa | Clasificación opcional y anónima | `06` §7 |
| Q-21 | P2 | ¿Tienen manual de marca (colores, logo, tipografías) para el CDE/UNAB? | Design system | Paleta neutra | PA-20 |

### Éxito y evaluación
| # | Pri. | Pregunta | Decisión | Defecto | Ref. |
|---|---|---|---|---|---|
| Q-22 | P0 | ¿Qué tres cosas necesitan ver funcionando en la Validación 1 (17:00) y en la Validación 2 (8:00) para considerar que vamos bien? | Prioridad del camino dorado | Las de `02` §5 | `07` §6 |
| Q-23 | P1 | De los 10 criterios "cómo sabremos que se resolvió", ¿cuáles son los más importantes para ustedes? | Orden de construcción | Mismo orden de `01` | `01` §2 |
| Q-24 | P1 | ¿Qué jurados evalúan qué parte (técnico: ¿el código/arquitectura se revisa?)? ¿Se revisa el repositorio? | Qué mostrar, calidad de commits | Código limpio y CI visible | TyC §7 |
| Q-25 | P2 | En la sustentación, ¿pueden pedirnos "mostrar" la herramienta con datos reales? ¿Hay restricciones con datos reales? | Datos sintéticos | Todo sintético | RNF-14 |

### Preguntas añadidas en la Ronda 2 (F13–F18)
| # | Pri. | Pregunta | Decisión que cambia | Defecto | Ref. |
|---|---|---|---|---|---|
| Q-26 | P1 | ¿Qué indicador quieren ver primero: duplicados, calidad de los datos (completitud), brechas por sector o recompensas? | Orden del Nivel 2 de `13` §4 (T-18, T-47, T-48/T-49) | Brechas y calidad de datos | PA-27 |
| Q-27 | P2 | ¿El equipo prefiere atajos de teclado y búsqueda tipo «paleta» (Ctrl+K) o menús tradicionales? | Prioridad de T-17 | Paleta más barra visible | PA-27 |
| Q-28 | P2 | ¿Podemos usar los colores y tipografías de sus documentos (azul marino, naranja, amarillo) como inspiración, sin logotipo? ¿Hay manual de marca? | `16` §1 y T-40 | Paleta de sus documentos, sin logos | PA-29, PA-20 |
| Q-29 | P1 | ¿Cuántas horas por semana invierte el equipo en recordatorios, consolidación de datos y reportes? ¿Cuántos reportes y recordatorios hacen al mes? | Cálculo de ahorro del pitch (`18` §10) | «Lo mediremos en el piloto» | RN-06 |

## 3. Orden sugerido de uso en 90 minutos
1. Lo que el CDE ya vaya contestando en su presentación: tachar.
2. Primeras preguntas del equipo (tres, una por persona): **Q-06** (datos reales/hojas), **Q-14** (herramientas existentes), **Q-18** (qué es divertido y para quién).
3. Segunda ronda si hay tiempo: **Q-01**, **Q-02**, **Q-03** (reglas/entorno; si ya las contestaron otros equipos, tachar).
4. Preguntas de datos **Q-07**, **Q-08**, **Q-10** si el CDE comparte material.
5. Resto: llevarlas por escrito al CDE o preguntarlas en V1/V2.

## 4. Preguntas para las validaciones
- **V1 (28 a las 17:00):** Q-26 (¿qué indicador primero?), Q-22 (¿qué debe verse?), Q-18 (¿divertido?), Q-23 (¿criterio prioritario?), "¿Qué falta para que lo usarían el lunes?".
- **V2 (29 a las 8:00):** "¿Qué le quitarían o agregarían?"; "¿Qué indicador del tablero les sirve más?"; "¿Pilotearían un semestre?" (insumo del cierre del pitch).

## 5. Qué decisiones se cierran con cada respuesta (resumen)
| Si el CDE responde… | Entonces… |
|---|---|
| Entregan hojas reales anonimizadas | Ajustar columnas de `importacion_demo.csv` y diagnóstico (T-30, T-41) |
| Usan Google Workspace | Subir RF-30 (`.ics`/Calendar) a Should |
| Prefieren WhatsApp | Documentar como visión futura; correo igual |
| Sin internet en el lab | Plan B local pasa a principal |
| El esqueleto previo no se acepta | Partir de cero; sumar 1 h a T-00 y T-02 |

## Criterio de aceptación de este archivo
- Toda pregunta abierta bloqueante en `99_preguntas_abiertas.md` (PA-01..PA-10, PA-16..PA-22) aparece en una pregunta Q-xx o tiene razón para no hacerse al CDE (las internas PA-11..PA-15, PA-23..PA-26 las decide el equipo).
- Hay ≤ 6 preguntas P0 (aquí: 8) → recortar a 6 el día 28 según tiempo, preguntando Q-06, Q-14, Q-18, Q-22 y las dos más relevantes de Q-01..Q-03.
