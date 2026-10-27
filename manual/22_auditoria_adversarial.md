# 22 · Auditoría adversarial con cinco jurados simulados (Ronda 3, F22)

**Objetivo.** Someter el manual y el plan de `20` a cinco evaluadores hostiles e independientes, puntuarlos contra la rúbrica oficial (Funcionalidad 60 · Diferenciador 15 · Negocio 15 · Equipo 10; TyC §8), consolidar los hallazgos y corregir los archivos afectados (marca `R3`).

**Entradas.** `20_plan_que_cabe.md`, `01`–`19`, `21_*`, `tareas/`, `backlog.csv`, `inputs/01_TyC_y_cronograma_CDE.md` §5–§8.

**Método.** Cada jurado se redactó por separado y no vio los veredictos de los demás hasta §7. Cada uno revisa solo lo que le corresponde por el TyC §7: los tres técnicos puntúan Funcionalidad (60); los dos de negocio puntúan Modelo de negocio (15); los cinco puntúan Diferenciador (15) y Equipo (10). Las evidencias citan archivo y sección. Los puntajes son **juicios simulados** con los supuestos de `20` §9 (la rúbrica no reparte sub-puntos): sirven para ordenar hallazgos, no para predecir la nota. Se asume que el plan B se ejecuta con un sobrecosto medio del 20 % (Funcionalidad esperada ≈ 37,6 en `20` §9.2).

## 1. Jurado técnico 1 · Arquitectura y seguridad

**Puntaje:** Funcionalidad 37 / 60 · Diferenciador 9 / 15 · Equipo 6 / 10.

| # | Debilidad | Evidencia | Gravedad |
|---|---|---|---|
| 1.1 | El token de acceso vive en `sessionStorage`; un XSS en cualquier campo de texto libre (notas de cita, acuerdos) lo expone. Las cabeceras de seguridad (CSP) están marcadas «Should» | `tareas/T-40.md` §5 (sesión); `05` §8 «SSRF/XSS/CSRF»; `08` §5.1 ítem (S) | Alta |
| 1.2 | La prueba rol × endpoint de T-10 se acepta con «3 casos», pero `05` §4.5 promete recorrer la matriz de 12 recursos × 5 roles | `backlog.csv` T-10; `05` §4 | Alta |
| 1.3 | «Tabla de auditoría solo INSERT / no editable» se afirma, pero ninguna tarea impone la restricción en la base (permisos o *trigger*) | `04` §2.8; `tareas/T-10.md` (sin mención) | Media |
| 1.4 | El botón «Simular paso del tiempo» aparece en `05` §5 y en la lista T-60, pero no existe en ninguna tarea ni se condiciona a `APP_DEMO`: si se construye, es una puerta trasera | `05` §5; `08` §5.6; búsqueda en `tareas/` sin resultados | Alta |
| 1.5 | El QR «rota cada 60 s» se defiende en el pitch (Q30) y en `06`, pero T-23 en A usa token fijo por evento | `18` §11 Q30; `06` §7.4; `20` §7 | Alta (afirmación falsa) |
| 1.6 | La exportación CSV con BOM «abre en Excel» no considera inyección de fórmulas (celdas que empiezan por `=`, `+`, `-`, `@`) | `05` §6; `08` §5.1 | Media |
| 1.7 | Los respaldos `pg_dump` van a «Drive del equipo» (nube de terceros) y contienen datos personales en producción | `03` §8 | Media (en demo: datos sintéticos) |
| 1.8 | `composer audit` y `npm audit` están `[NO VERIFICADO: disponible sin red]`; el pitch afirma control de cadena de suministro (Q34) | `08` §5.1; `18` §11 Q34 | Media |
| 1.9 | Caducidad de token de 8 h sin renovación: durante la demo larga el token puede vencer en pantalla | `05` §4.1 | Baja |
| 1.10 | La prueba de arquitectura (módulos sin importar internals ajenos) depende de una función de Pest sin verificar | `08` §3 ítem 8 | Baja |

**Pregunta más incómoda:** «Su token está en `sessionStorage`. Si alguien pega un script en el campo de notas de una cita, ¿qué impide que lo exfiltre?»

**Cambio que más sube su puntaje:** CSP estricta en el proxy desde el esqueleto (infraestructura, sin horas de la ventana) y una frase honesta en la defensa: «token en almacenamiento de sesión, CSP, sin HTML crudo; el modo SPA con cookies HttpOnly es el paso siguiente (D-11)». Estimado: +1,0 en Funcionalidad.

## 2. Jurado técnico 2 · Calidad y pruebas (ISO/IEC 25010)

**Puntaje:** Funcionalidad 35 / 60 · Diferenciador 9 / 15 · Equipo 6 / 10.

| # | Debilidad | Evidencia | Gravedad |
|---|---|---|---|
| 2.1 | Protección: «fusión reversible» es la evidencia de PR, pero el deshacer solo existe en B (T-12x); en A la fusión no se puede revertir | `05` §12 fila PR; `08` §5.2; `20` §6.1 | Alta |
| 2.2 | Flexibilidad y Mantenibilidad se demuestran con «cambiar un catálogo sin tocar código» y «agregar un reto desde E14»; ninguna tarea construye administración de catálogos (RF-23) ni la pantalla E14 | `05` §12; `06` §7.3; `01` RF-23; búsqueda de «RF-23», «E14» en `tareas/` sin resultados | Alta |
| 2.3 | Eficiencia: «indicador de latencia en modo demo» y «5 000 empresas sintéticas» (`CargaSeeder`) no tienen tarea; el pitch (diap. 4, Q39, Q43) cita la medición | `05` §12; `08` §5.4; `18` §7 | Alta |
| 2.4 | Fiabilidad: «matar el contenedor del worker y mostrar el recordatorio» es una demostración en vivo sin tiempo en el guion de 120 s | `05` §12; `08` §5.2; `18` §5 | Media |
| 2.5 | Capacidad de interacción: la «prueba de usabilidad con ≥ 3 personas» se hace a las 6:30 del día 2 con personas por conseguir (PA-33): n = 3 no sostiene «SUS = X» como cifra | `20` §10; `tareas/T-97.md` | Media |
| 2.6 | Accesibilidad: 8 pantallas × 7 comprobaciones de `08` §5.3 en 0,25 h de María Paula (T-96) | `20` §10; `08` §5.3 | Media |
| 2.7 | La meta «≥ 25 pruebas» no distingue entre pruebas de humo y de comportamiento; el número se usa como evidencia en el pitch | `08` §3 | Media |
| 2.8 | Dos criterios de congelamiento distintos: «sin cambios tras las 8:45» y «solo cambios ≤ 15 líneas aprobados por dos personas» | `08` §5.6; `07` §4 | Baja |
| 2.9 | La lista T-60 (a las 8:00) coincide con la V2 (8:00–8:30) | `08` §5.6; `07` §1 | Media |
| 2.10 | No hay prueba de la regla «brechas con n < 5 no se infieren» (`05` §6) | `08` §1 | Baja |

**Pregunta más incómoda:** «Dicen cumplir las nueve características. Muéstrenme la de Protección: ¿cómo deshago una fusión mala?»

**Cambio que más sube su puntaje:** hacer coincidir lo que se afirma con lo que existe: reescribir las filas de evidencia de `05` §12 y `08` §5.2 con lo construido (corregido en §8) y, si el equipo lo decide en T-01, mover T-12x (0,75 h) a la variante A (PA-31). Estimado: +1,5 en Funcionalidad por coherencia entre evidencia y demostración.

## 3. Jurado técnico 3 · Experiencia de usuario

**Puntaje:** Funcionalidad 38 / 60 · Diferenciador 10 / 15 · Equipo 7 / 10.

| # | Debilidad | Evidencia | Gravedad |
|---|---|---|---|
| 3.1 | El «momento wow 1» (Ctrl+K) y el «wow 2» (mapa de ruta) son opciones de B; en A la demo queda con barra de búsqueda y toast con confeti | `18` §2; `20` §6.1 | Alta |
| 3.2 | «Intuitivo y divertido» (CRI-09) se mide con tarea cronometrada + SUS con n = 3, cansados, a las 6:30 | `01` CRI-09; `20` §10 | Media |
| 3.3 | Los textos de la interfaz (≈ 280 cadenas) no estaban conectados a ninguna tarea: cada tarea escribía sus propios mensajes | `21_microcopy.md`; búsqueda de «microcopy» en `tareas/` sin resultados antes de R3 | Media (corregida) |
| 3.4 | La demo de 120 s tiene 21 acciones con tres personas coordinadas (quien habla no maneja) y 121 palabras: ritmo de operación, no de comprensión | `18` §5 | Media |
| 3.5 | El portal móvil (M2, M3, M6, M7) se hace en 2,0 h y se prueba a 360 px en 0,25 h | `20` §3; `08` §5.3 | Media |
| 3.6 | La microlección y sus preguntas no se pueden usar en la aplicación (sin tarea): la «formación» queda reducida a puntos por hechos | `21_contenido_formacion.md` §1 | Media |
| 3.7 | M1 (consentimiento) muestra «texto de demostración, no es el aviso legal»: rompe la ilusión de producto ante el jurado | `21_microcopy.md` M1.cuerpo | Baja |
| 3.8 | El mensaje al cruzar de nivel depende de que el equipo marque el compromiso (sin cola): si el operador tarda, el emprendedor no ve nada | `20` §3 T-43; `21_casos_demo.md` §3 | Media |
| 3.9 | Sin vista de calendario para citas: el emprendedor elige «franja» en texto libre | `20` §3 T-20 | Baja |
| 3.10 | Estados vacíos y errores existen en `21_microcopy.md`, pero no están en el DoD de ninguna tarea | `14` §1 DoD | Baja |

**Pregunta más incómoda:** «¿Cómo saben que una persona emprendedora que nunca vio el sistema entiende "Avisar al equipo que lo terminé" en menos de un minuto?»

**Cambio que más sube su puntaje:** probar en vivo la secuencia M3 → aviso → puntos con una persona ajena durante la cena del 28 (cuando ya existe T-44), no solo a las 6:30; añadir al DoD general de las tareas de interfaz «textos de `21_microcopy.md` y estados vacíos» (corregido en §8). Estimado: +1,0.

## 4. Jurado de negocio 1 · Sostenibilidad financiera

**Puntaje:** Negocio 8 / 15 · Diferenciador 9 / 15 · Equipo 6 / 10.

| # | Debilidad | Evidencia | Gravedad |
|---|---|---|---|
| 4.1 | Los costos operativos no tienen una sola cifra: «costo mensual bajo», «a cotizar» | `09` §3.3; `99` PA-24 | Alta |
| 4.2 | La comparación con CRM comerciales usa US$20 y US$25 por usuario `[NO VERIFICADO]`; solo Airtable está verificado | `09` §3.4; `12`; `18` §8 | Alta (si se dice en voz alta) |
| 4.3 | Quien paga (CDE/UNAB) es también el cliente que define el reto: no hay disposición a pagar demostrada | `09` §3.1 | Media |
| 4.4 | El propio documento admite que la opción «uso interno gratuito» es «frágil si cambia el equipo»; la sostenibilidad descansa en un practicante | `09` §3.2 opción D; §3.3 | Alta |
| 4.5 | La petición de cierre dice «piloto de un semestre» mientras la implementación son 4 + 4 semanas + un semestre de expansión | `18` §4; `09` §3.6 | Media |
| 4.6 | El ahorro de horas se declara «no se afirma sin medir»; el valor para la UNAB queda cualitativo | `18` §10 | Media |
| 4.7 | Costos de cumplimiento de datos personales (registro ante la SIC, responsable de tratamiento) no figuran como costo | `04` §6; `99` PA-18 | Media |
| 4.8 | No se dice de quién es el código y la propiedad intelectual; el TyC no la menciona | `inputs/01_TyC_y_cronograma_CDE.md` (sin cláusula) | Media |
| 4.9 | No hay indicador de costo por empresa atendida (497 al año) | `09` §3.5 | Baja |
| 4.10 | El uso de agentes de IA para programar se contesta («sí»), pero no se dice qué costo recurrente tienen | `18` §11 Q35 | Baja |

**Pregunta más incómoda:** «¿Cuánto le cobrarían a la UNAB el segundo año y por qué lo pagaría en lugar de seguir con hojas de cálculo?»

**Cambio que más sube su puntaje:** presentar una **fórmula de costo con variables y fuente** (horas de mantenimiento × valor hora que informe el CDE, servidor, soporte) y el ancla verificada de Airtable, y alinear la petición con las fases reales (piloto de un semestre en tres fases). Estimado: +1,5 en Negocio.

## 5. Jurado de negocio 2 · Escalabilidad y comercialización

**Puntaje:** Negocio 9 / 15 · Diferenciador 9 / 15 · Equipo 7 / 10.

| # | Debilidad | Evidencia | Gravedad |
|---|---|---|---|
| 5.1 | «Replicable por configuración» se apoya en catálogos administrables (RF-23) que no se construyen; en A y B se cargan desde un archivo de datos | `09` §3.5; `01` RF-23; `21_catalogos.csv` | Alta |
| 5.2 | «Un despliegue por institución» es un negocio de servicios, no de producto escalable: el margen depende de horas de personas | `09` §3.5 horizonte 3 | Media |
| 5.3 | No hay descubrimiento de clientes más allá del CDE ni lista de instituciones objetivo; ASCUN está `[NO VERIFICADO]` | `09` §3.9 | Media |
| 5.4 | Tamaño de mercado ausente (no se inventa, pero tampoco se propone cómo medirlo) | `09` §3 | Media |
| 5.5 | El diferenciador de datos («calidad que se mejora sola», «preguntas guiadas») se aplazó; queda la combinación de funciones | `20` §7 | Alta |
| 5.6 | La compatibilidad con los sistemas de la UNAB (PA-04) no se conoce: «CSV y API» es lo único prometido | `01` V-06; `05` §11 | Media |
| 5.7 | La evidencia de gamificación es mixta (efecto conductual pequeño); el pitch debe prometer constancia, no resultados | `06` §7.1 | Baja |
| 5.8 | Reutilizar la identidad visual del CDE complica la marca blanca para otras instituciones | `16` §1; PA-29 | Baja |
| 5.9 | El estimado «≤ 15 min» de instalación (RNF-11) no tiene medición; se pierde la mejor evidencia de replicabilidad | `03` §5; `08` §5.5 | Media |
| 5.10 | Sin plan de salida si el CDE no adopta el piloto | `18` §4 cierre | Baja |

**Pregunta más incómoda:** «Si otra universidad lo quiere el lunes, ¿qué tienen que cambiar y cuánto tarda?»

**Cambio que más sube su puntaje:** convertir la replicabilidad en un dato: cronometrar `docker compose up` en máquina limpia durante T-00 (0 h extra) y la carga de un juego de catálogos distinto desde `21_catalogos.csv`, y mostrar ambos tiempos en la diapositiva 5. Estimado: +1,0 en Negocio.

## 6. Hallazgos transversales de los cinco (Diferenciador y Equipo)

1. **Diferenciador (15):** los cinco coinciden en que la afirmación «ninguna alternativa combina…» requiere la salvedad de `13` §1.3 y en que, tras recortar el Nivel 2, el diferenciador es la **combinación** de historial, duplicados y recompensas por hechos, no una función única. Puntaje conjunto estimado: 9 a 10 de 15.
2. **Equipo (10):** el guion dedicaba una línea al equipo (`18` §4, 0:00–0:20). Los criterios son composición, complementariedad, interdisciplinariedad, participación y capacidad de ejecutar (TyC §8). Faltan: qué aporta cada persona, quién responde por qué y la prueba de ejecución (el plan que cabe, las compuertas). Puntaje estimado: 6 a 7 de 10.

## 7. Consolidación

### 7.1 Puntaje esperado (simulado)

| Criterio | J1 | J2 | J3 | J4 | J5 | Promedio |
|---|---:|---:|---:|---:|---:|---:|
| Funcionalidad (60) | 37 | 35 | 38 | — | — | 36,7 |
| Diferenciador (15) | 9 | 9 | 10 | 9 | 9 | 9,2 |
| Negocio (15) | — | — | — | 8 | 9 | 8,5 |
| Equipo (10) | 6 | 6 | 7 | 6 | 7 | 6,4 |
| **Total (100)** | | | | | | **60,8** |

Es coherente con el 37,6 de Funcionalidad de la simulación de `20` §9.2 (diferencia de 0,9 puntos, dentro de la incertidumbre).

### 7.2 Contradicciones (nuevas, registradas en `99` §K.11)

| # | Contradicción | Dónde | Resolución R3 |
|---|---|---|---|
| C-42 | Evidencia ISO «fusión reversible» frente a A (sin deshacer) | `05` §12, `08` §5.2 | Fila reescrita según la variante |
| C-43 | «Cambiar catálogo / agregar reto sin tocar código» frente a la ausencia de RF-23 y E14 | `05` §12, `06` §7.3 | Se demuestra con el archivo de datos y el `RetosSeeder`; la pantalla de administración es hoja de ruta |
| C-44 | Latencia en pantalla, `CargaSeeder`, «Simular paso del tiempo», QR rotativo: afirmados sin tarea o contradichos por A/B | `05` §5, §12; `08` §5.4, §5.6; `18` §11 Q30 | Se retiran o se definen como parte de una tarea existente (§8) |
| C-45 | «Piloto de un semestre» frente a «4 + 4 semanas + un semestre» | `18` §4; `09` §3.6 | Fórmula única: «piloto de un semestre en tres fases» |
| C-46 | «El 36 % de las fichas sin sector se mejora solo» frente al aplazamiento de la calidad de datos | `18` §5 (108–114 s) | Frase retirada; se usa el indicador |
| C-47 | Congelamiento «8:45» frente a «8:30–9:00 solo cambios ≤ 15 líneas» | `08` §5.6; `07` §4 | Regla única: hasta las 8:45, ≤ 15 líneas, dos aprobaciones |
| C-48 | Lista T-60 «a las 8:00» frente a V2 «8:00–8:30» | `08` §5.6 | La lista corre de 7:30 a 8:00 (dentro de T-94) |
| C-49 | `07` §8 regla 3 (pausa de 10 min cada 90 min) frente a `20`, que cuenta 10,75 h de reloj como horas efectivas | `07` §8; `20` §1 | Ver §7.3, supuesto 1 |

### 7.3 Supuestos no declarados

1. **Las pausas.** `07` §8 pide 10 minutos de pausa cada 90. En 10,75 h de reloj son ≈ 1,2 h. `20` cuenta esas 10,75 h como horas efectivas. Con pausas, la capacidad efectiva baja a ≈ 9,6 h, lo que equivale a un sobrecosto de ≈ 12 % antes de cualquier error de estimación. Con un 20 % adicional de error, el sobrecosto compuesto es ≈ 1,34 y la Funcionalidad esperada de A y B cae a ≈ 34 (`20` §9.2, filas 1,3 y 1,4). **Resolución:** el equipo debe decidir en T-01 si las pausas descuentan del colchón (recomendado) o se hacen en V1/cena/receso. Queda como PA-37.
2. **Sin bloqueo ni ayuda entre personas** en la simulación (declarado en `20` §9.1.7).
3. **Los 497 registros por factories** caben en 2,5 h de T-30 junto con los 7 casos nombrados.
4. **Los 12 sectores no listados en el TyC** coinciden con los del CDE (PA-07, PA-35).
5. **El jurado ve el producto desplegado** y no solo la demo; el plan B local no afecta la nota.
6. **Cada persona trabaja en una sola tarea a la vez** y las tres están despiertas y sanas hasta las 2:00.

### 7.4 Riesgos que nadie cubría

| # | Riesgo | Mitigación | Dueño |
|---|---|---|---|
| RK-1 | Inyección de fórmulas en el CSV exportado (`=`, `+`, `-`, `@`) | Anteponer `'` a esas celdas en la exportación; prueba en `ReporteTest` (sin horas nuevas: T-16) | S |
| RK-2 | Un inicio de sesión fallido en vivo dispara el límite de 5 intentos por minuto | Sesiones abiertas antes de entrar; `docs/DEMO.md` con las cuentas; el 6.º intento no se ensaya en escena | J |
| RK-3 | J maneja la demo y además opera la infraestructura: punto único de falla | S puede conducir la demo; el plan B (`demo.mp4`) lo abre cualquiera | Equipo |
| RK-4 | La red del laboratorio no deja abrir Mailpit o el servidor (PA-16) | Capturas D3 y plan B local sin red | J |
| RK-5 | Autocompletado y avisos del navegador durante la demo | Perfil de navegador limpio (`08` §5.6 ya lo pide); contraseñas fuera del gestor | MP |
| RK-6 | La propiedad del código y el uso de agentes de IA no están definidos ante el CDE | Preguntar el 28 a las 8:30 (PA-36) | S |
| RK-7 | La resolución del proyector (¿1920×1080?) desconocida | Zoom del navegador al 110 % (`18` §5) y diseño probado a 1280×720 | MP |
| RK-8 | Merge a las 2:00 con fatiga | Solo J fusiona en `integracion` (`07` §7); `main` protegida | J |

## 8. Cronometraje del pitch de 5 minutos (130 a 150 palabras por minuto)

**Resultado:** el pitch **cabe, pero con 5 s de holgura a 130 ppm** si se cuentan los 7 relevos entre voces (≈ 1,5 s cada uno = ≈ 10 s). Con 138 ppm o más cabe con margen. Los textos que `18` §4 y `09` §5 daban eran esquemas (solo cuatro frases entre comillas), así que antes no se podía cronometrar; el guion hablado completo está ahora en `18` (sección «R3 · Guion hablado»).

| Segmento (voz) | s | Palabras | ppm | Tiempo a 130 ppm | Tiempo a 150 ppm |
|---|---:|---:|---:|---:|---:|
| 1 Apertura y equipo (MP) | 20 | 45 | 135 | 20,8 | 18,0 |
| 2 Promesas (MP) | 20 | 44 | 132 | 20,3 | 17,6 |
| Demo (S narra, J maneja) | 120 | 121 | 60 | — | — |
| 3 ISO 25010 (S) | 30 | 63 | 126 | 29,1 | 25,2 |
| 4 Real y simulado (S) | 15 | 29 | 116 | 13,4 | 11,6 |
| 5 Negocio (J) | 50 | 105 | 126 | 48,5 | 42,0 |
| 6 Diferenciador (MP) | 30 | 67 | 134 | 30,9 | 26,8 |
| 7 Cierre (todos) | 15 | 26 | 104 | 12,0 | 10,4 |
| **Total hablado fuera de la demo** | 180 | **379** | 126 | **175** | **152** |

Hallazgos del cronometraje: (1) los segmentos 1 y 2 superan 20 s a 130 ppm por 0,8 y 0,3 s: ceder esa holgura al cierre (que usa 12 de 15 s); (2) la demo de 120 s tiene solo 121 palabras de frase, o sea que el límite es la operación, no el habla: se cumple con el ensayo R0; (3) las cifras `[N]` del segmento 3 se leen en voz alta como número completo: sumar 1 s; (4) el guion de `09` §5 (0:45–2:45) queda superado por el de `18` §4 (0:40–2:40); (5) si en el ensayo R1 se pasa de 5:00, se recorta primero «Todo arranca con un solo comando de Docker» y «Está pensado para centros universitarios de emprendimiento», y luego la demo (D7), nunca el negocio.

## 9. Cambios aplicados en esta fase (marca `R3`)

| Archivo | Cambio |
|---|---|
| `05_arquitectura.md` §12 | Filas Fiabilidad, Eficiencia, Mantenibilidad, Flexibilidad y Protección reescritas con la evidencia que existe en A y B; §5 retira «Simular paso del tiempo»; §4 aclara auditoría |
| `08_pruebas_checklists.md` | §5.1 CSP pasa a (M) y se añade inyección en CSV; §5.2 evidencia reescrita; §5.4 `CargaSeeder` asignado a T-96; §5.6 horarios corregidos (7:30; 8:45) |
| `18_pitch_v2.md` | Guion hablado cronometrado; Q30 y Q42 corregidas; frase de calidad de datos retirada; petición de piloto unificada |
| `09_negocio_pitch.md` | Nota en §3.4 (no decir las cifras no verificadas) y fórmula de costo en §3.3; petición unificada en §5 |
| `20_plan_que_cabe.md` | §4 P-01 incluye la CSP; §9.4 recoge el hallazgo de las pausas; CargaSeeder y axe dentro de T-96 |
| `07_plan_construccion.md` §8 | Nota sobre pausas (C-49) |
| `tareas/T-16.md`, `T-96.md`, `_INDEX.md` | Regla anti-inyección en CSV; CargaSeeder + axe; regla de textos de `21_microcopy.md` |
| `99_preguntas_abiertas.md` | §K.11: C-42..C-49, RK-1..RK-8, PA-36, PA-37 |

**Costo en horas de lo nuevo:** 0 h en la ventana. La CSP va en el esqueleto previo (P-01); la regla anti-inyección es una línea de código en T-16 (absorbida por su colchón de 0,75 h); `CargaSeeder` y axe caben en T-96 (S 0,75 h, MP 0,25 h); los textos se copian de `21_microcopy.md` en las tareas de interfaz (ya se escribían). Si T-96 no cabe, se omite `CargaSeeder` y el pitch dice «medido con las 497 empresas sembradas».

## Criterio de aceptación

1. Cinco jurados con puntaje por rúbrica, hasta 10 debilidades con evidencia, pregunta incómoda y cambio de mayor efecto (§1–§5).
2. Consolidación con contradicciones, riesgos no cubiertos y supuestos no declarados (§7).
3. Cronometraje por palabra del pitch con veredicto explícito (§8).
4. Cada cambio de §9 está hecho en el archivo indicado con la marca `R3`.
