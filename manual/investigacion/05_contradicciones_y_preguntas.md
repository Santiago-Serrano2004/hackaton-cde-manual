# 05 · Requisitos propuestos, contradicciones con v1/R3 y preguntas abiertas

**Objetivo.** Dejar listo para copiar a `99_preguntas_abiertas.md` y a los archivos afectados: (1) los requisitos nuevos con trazabilidad, (2) las contradicciones con el manual vigente (marca `R4`), (3) las preguntas abiertas con el formato obligatorio de `CLAUDE.md`. Esta carpeta **no modifica** los archivos de `manual/` fuera de `investigacion/`: la propagación la hace quien ratifique (§4).

**Entradas.** `01`, `03`, `04`, `21_casos_demo.md`, `21_catalogos.csv`, `04_datos.md` §3, `backlog.csv`, `99_preguntas_abiertas.md` (último PA-37, NV-28, C-49) y `10_preguntas_cde.md` (último Q-29).

## 1. Requisitos propuestos (todos `PROPUESTA`, ninguno en `01`)

Criterios: F = Funcionalidad (60), D = Diferenciador (15), N = Negocio (15), E = Equipo (10). ISO/IEC 25010:2023 con los nombres que usa el TyC (`inputs/01`, líneas 183–187).

| ID | Requisito (resumen) | Criterio | ISO 25010:2023 | Fase | Tarea afectada | Candidato |
|---|---|---|---|---|---|---|
| RF-31 | Validar el dígito de verificación del NIT y avisar sin bloquear | F | Adecuación funcional, Fiabilidad | Hackatón (condicionado) | T-11, T-30 | N-01 |
| RF-32 | Consultar el registro mercantil abierto por NIT y mostrar valores propuestos con origen | F, D | Adecuación funcional, Compatibilidad | 1 | nueva | N-01 |
| RF-33 | Sector sugerido por CIIU y formalización derivada del estado y la renovación | F | Adecuación funcional | 1 | nueva | N-01 |
| RF-34 | Campos críticos con `origen`, `fecha_dato`, `confirmado_por` | F, D | Adecuación funcional, Seguridad | Hackatón (esquema) | T-11a | N-02 |
| RF-35 | Mostrar origen y fecha en la comparación y la ficha | F | Capacidad de interacción | B / 1 | T-19 | N-02 |
| RF-36 | Duplicados con desglose de señales y nivel de decisión | F | Adecuación funcional, Capacidad de interacción | Hackatón (B) | T-12, T-12x | N-03 |
| RF-37 | KPIs de impacto con definiciones SBDC (incluye acompañamiento sostenido ≥ 5 h `PROPUESTA`) | F, N | Adecuación funcional, Compatibilidad | Hackatón (nombres) | T-16, T-45 | N-04 |
| RF-38 | Resultados de impacto `declarado` / `verificado` con fuente; totales separados | F, D | Fiabilidad, Seguridad | 2 | nueva | N-04 |
| RF-39 | Reporte de supervivencia de la cohorte con tamaño de grupo y sin afirmar causalidad | F, D, N | Adecuación funcional | 2 | nueva | N-05 |
| RF-40 | Insignias con nombre, descripción, criterio, emisor e identificador estable | D, N | Flexibilidad, Compatibilidad | Hackatón (campos) | T-43a | N-06 |
| RF-40b | Emisión como credencial verificable firmada | D, N | Seguridad, Compatibilidad | 3 | nueva | N-06 |
| RF-41 | Vista de sector para el emprendedor con supresión de grupos < k | F, N | Seguridad, Protección | 2 | nueva | N-07 |
| RF-42 | Catálogo de oportunidades de financiación con vigencia | N | Adecuación funcional | 2 | nueva | N-08 |
| RF-43 | Botón de recordatorio por WhatsApp con texto prellenado | F | Capacidad de interacción | Condicionado | T-21 | N-09 |
| RF-44 | Propuesta de campos por IA con aceptación humana y exactitud medida antes de activar | F, D | Fiabilidad, Seguridad, Protección | 3 | nueva | N-10 |
| RF-45 | Columnas `ciiu_codigo` y `ciiu_version`; tabla de equivalencias a sectores | F, N | Flexibilidad, Mantenibilidad | Hackatón (columnas) / 1 | T-11a | N-11 |
| RF-46 | Tamaño calculado por regla del Decreto 957 de 2019 | F | Adecuación funcional | 1 | nueva | N-11 |
| RF-47 | Agregados anónimos entre instituciones | N | Seguridad, Protección | 3 | nueva | N-13 |
| RNF-15 | Atribución a Confecámaras y cumplimiento de CC BY-SA 4.0 | N | Protección | 1 | nueva | N-01 |
| RNF-16 | Supresión de grupos pequeños aplicada en el servidor | F, N | Seguridad, Protección | 2 | nueva | N-07, N-13 |
| RNF-17 | No importar ni mostrar datos de personas naturales del registro mercantil | F | Seguridad, Protección | 1 | nueva | N-01 |
| RNF-18 | Camino dorado verificado contra WCAG 2.2 AA | F, N | Capacidad de interacción | Hackatón | T-96 | N-12 |

## 2. Contradicciones con v1 y R3 (marca `R4`)

| # | v1 / R3 dice | Hallazgo de esta ronda | Archivo afectado | Resolución propuesta | Decide |
|---|---|---|---|---|---|
| **C-50** | `21_casos_demo.md` da NIT sintéticos con dígito de verificación (999.100.200-1; 999.210.300-4; 999.320.411-6; 999.430.522-2; 999.650.733-0; 999.780.844-9) | Calculados con el algoritmo de F-24, que coincidió con 3 de 3 sociedades reales (`01` §3.3), **solo 1 de 6 coincide** (999.430.522-2). Los correctos serían: 999.100.200-**0**, 999.210.300-**0**, 999.320.411-**1**, 999.430.522-2, 999.650.733-**3**, 999.780.844-**1** | `21_casos_demo.md` §2 y §4, `04` §3 ejemplo `900.123.456-7` (el correcto sería -8) | Si RF-31 se adopta, corregir los 5 dígitos; si no, no hacer nada: hoy `nit_norm` ignora el dígito. Hasta decidir, **no** mostrar el alta con aviso de dígito en la demo | Julián (T-30) |
| **C-51** | `21_catalogos.csv` fija rangos de ingresos I1–I5 (el último, «más de 1.000 millones») y deja el criterio de tamaño por confirmar (PA-06) | El Decreto 957 de 2019 clasifica por ingresos anuales **en UVT y por macrosector** (`01` §3.4). Con la UVT de 2025 (49.799 pesos, secundaria) el tope de la microempresa es ≈ $1.173 millones en manufactura, ≈ $1.643 millones en servicios y ≈ $2.229 millones en comercio: el rango «más de 1.000 millones» mezcla micro, pequeña y mediana, y los rangos no permiten derivar el tamaño | `21_catalogos.csv` (`ingresos_rangos`, `tamanos`), `04` §3 | Mantener los rangos para el dashboard de la hackatón (son solo de caracterización); registrar que el **tamaño no se deriva** de ellos y que PA-06 se resuelve en la fase 1 con RF-46. Aviso en el dashboard: «tamaño declarado» | Santiago + CDE |
| **C-52** | `backlog.csv` W-03: recordatorios por WhatsApp/SMS en «Won't» | `03` N-09 propone un botón de WhatsApp en un clic, que no usa la API de pago | `backlog.csv`, `14` | Dejar W-03 como está (API) y registrar N-09 como opción condicionada por Q-34 | Equipo |
| **C-53** | `21_casos_demo.md` §2: el duplicado sembrado de la protagonista usa NIT `9001002001` «otro formato» y se detecta | Con la regla de `04` §3 (quitar el último dígito) ese NIT da `nit_norm` = 900100200, distinto de 999100200 de la ficha original, así que **no coincide por NIT**. La detección real viene del nombre (0,95), no del NIT. La frase «NIT con otro formato» del validador (§5 punto 3) es incorrecta | `21_casos_demo.md` §2 y §5, `T-30` | Cambiar el NIT del duplicado a `9991002000` (mismo número con dígito calculado 0 y sin separadores) para que la coincidencia por NIT sea real | Julián (T-30) |
| **C-54** | R3 («no agregues funcionalidades») y `20` §3 (colchón mínimo) | Esta ronda propone 0,35 h de código (0,60 h con N-09) y el resto sin código | `20`, `03` §4 | Aceptar solo las filas de `03` §4 y solo con sus condiciones; si el equipo no ratifica en T-01, queda como hoja de ruta | Equipo |
| **C-55** | `04` §3: `9001234567` y `900123456` «coinciden»; el último dígito de una cadena de 10 se toma como dígito de verificación | Las cédulas de personas naturales también son NIT y pueden tener 10 dígitos; quitarles el último dígito corrompe el número. El conjunto abierto separa `nit` y `digito_verificacion` en columnas distintas (F-01) | `04` §3, `T-11` | Quitar el último dígito solo si hay guion, o si coincide con el dígito calculado de los anteriores (RF-31); en otro caso conservar los dígitos y marcar «formato por revisar» | Santiago |

## 3. Preguntas abiertas (formato `CLAUDE.md`)

Los números continúan los de `99` (PA-37, NV-28) y `10` (Q-29). Las Q se preguntan el 28 a las 8:30; las demás las resuelve el equipo.

### PA-38 · ¿Se acepta el paquete mínimo de `03` §4 (0,35 h) y se registra C-50/C-53?
- **Por qué bloquea:** cambia dos líneas de la semilla (T-30) y el esquema raíz (T-11a) antes de las 10:30.
- **Opciones:** (a) aceptar RF-31 y RF-45 con sus condiciones; (b) aceptar solo RF-45 (0,1 h); (c) rechazar todo y dejarlo como hoja de ruta.
- **Recomendación:** (b) en B y (a) en A; en ambos casos corregir el duplicado de C-53, que no cuesta horas.
- **Decide:** equipo en T-01.

### PA-39 · ¿Quién es titular de la propiedad intelectual y puede comercializarse? (NV-40, L-1)
- **Por qué bloquea:** toda la sección «cómo se sostiene» de `04` depende de ello; el TyC de `inputs/` no contiene cláusula alguna.
- **Opciones:** (a) preguntar al CDE el 28 a las 8:30; (b) preguntar al organizador por escrito; (c) asumir que es de la UNAB y presentar la ruta como propuesta de adopción interna.
- **Recomendación:** (a) y (c) como respuesta de reserva; no decir en el pitch «lo vamos a vender» sin esta respuesta.
- **Decide:** CDE / UNAB; el equipo solo pregunta.

### PA-40 · ¿Se usa el registro mercantil abierto como fuente en la fase 1? (N-01)
- **Por qué bloquea:** define si el piloto incluye RF-32/RF-33 y qué licencia aplica.
- **Opciones:** (a) consulta por NIT con caché; (b) copia local mensual del subconjunto de personas jurídicas de Bucaramanga; (c) no usarlo.
- **Recomendación:** (a), porque evita copiar 159.790 matrículas activas y reduce la exposición a CC BY-SA 4.0; (b) solo si el límite de la API sin *app token* (F-04) lo impide.
- **Decide:** equipo + abogado de la UNAB (L-2).

### PA-41 · ¿Qué revisión de la CIIU usa el CDE y el conjunto abierto? (NV-33, NV-41)
- **Por qué bloquea:** RF-45 y la tabla de equivalencias.
- **Opciones:** (a) guardar código y versión (propuesto); (b) forzar Rev. 5 A.C. desde el inicio; (c) no guardar CIIU.
- **Recomendación:** (a).
- **Decide:** Santiago, con la respuesta del CDE a Q-31.

### PA-42 · Definición de «empresa con acompañamiento sostenido» y de «fortalecida»
- **Por qué bloquea:** N-04 y los reportes a financiadores.
- **Opciones:** (a) ≥ 5 h acumuladas de asesoría en el periodo (regla de Neoserra para su encuesta, F-08); (b) la definición del CDE (F-09 no la da); (c) dos niveles.
- **Recomendación:** (b) si existe; si no, (a) como `PROPUESTA` rotulada.
- **Decide:** CDE (Q-32).

### PA-43 · Umbral k de supresión de grupos pequeños (N-07, N-13)
- **Por qué bloquea:** RNF-16.
- **Opciones:** k = 5; k = 10; sin vista para el emprendedor.
- **Recomendación:** k = 5, porque la práctica reportada es de hasta 5 o 6 (F-30) y con 497 empresas y 17 sectores un k mayor dejaría casi todo suprimido; revisar con el CDE y el abogado.
- **Decide:** CDE.

### PA-44 · Horas semanales del equipo después de la hackatón
- **Por qué bloquea:** las fases 1–3 de `04` §4 no tienen quién las ejecute.
- **Opciones:** (a) 4 h por persona por semana durante la fase 1; (b) solo piloto sin desarrollo nuevo; (c) cerrar el proyecto después del pitch.
- **Recomendación:** (b) mínimo; (a) si el CDE acepta el piloto.
- **Decide:** el equipo, el 29 después del pitch.

### Preguntas para el CDE el 28 a las 8:30 (se suman a `10`)

| ID | Pregunta | Por qué importa | Opciones de respuesta | Decide |
|---|---|---|---|---|
| Q-30 | De las 497 empresas, ¿cuántas tienen NIT y cuántas son personas naturales con cédula? | Define la cobertura de N-01, N-05 (NV-39) | Número exacto / estimación / no se sabe | CDE |
| Q-31 | ¿Qué clasificación de actividad económica usa el CDE para sector (CIIU y qué revisión, o lista propia de 17)? | RF-45, PA-35, PA-41 | CIIU Rev. 4 A.C. / Rev. 5 A.C. / lista propia | CDE |
| Q-32 | ¿Cómo define el CDE «empresa fortalecida» y cuántas horas de asesoría la cuentan? | PA-42, RF-37 | Definición propia / la propuesta de ≥ 5 h | CDE |
| Q-33 | ¿Aceptan mostrar al emprendedor comparaciones anónimas de su sector? ¿Con qué mínimo de empresas por grupo? | RF-41, PA-43 | Sí con k = 5 / sí con otro k / no | CDE |
| Q-34 | ¿Los emprendedores del CDE tienen WhatsApp registrado y el equipo ya los contacta por ahí? ¿Permitirían un botón de recordatorio que abre el chat? | N-09, C-52 | Sí / no / solo correo | CDE |
| Q-35 | ¿Qué reportes de impacto entregan hoy a sus financiadores y cuántas horas toma armarlos? | Línea base de N-04 y de «horas liberadas» (`04` §1 pregunta 6) | Descripción + horas aproximadas | CDE |
| Q-36 | ¿Los otros CDE de la red de Santander usan alguna herramienta común? | `04` S2, NV-34 | Cuál / ninguna / no sabe | CDE |

## 4. Lista de lo `[NO VERIFICADO]` que esta carpeta añade a `99` §J

Copiar a `99` las filas NV-29 a NV-41 de `01` §4. Todas tienen un plan: abrir la fuente primaria (WhatsApp, Meta, Función Pública, DANE, ISO) o preguntar al CDE. NV-29, NV-30 y NV-38 solo importan si se adopta N-09; NV-31, NV-32 y NV-33 solo importan en la fase 1.

## 5. Pasos de propagación (quien ratifique)

1. Copiar PA-38 a PA-44 al final de `99` con numeración propia y Q-30 a Q-36 a `10`.
2. Copiar C-50 a C-55 a `99` §K (nueva subsección K.12) y anotar «R4» en `21_casos_demo.md`, `04`, `21_catalogos.csv`, `backlog.csv`.
3. Si se acepta RF-31: corregir en `21_casos_demo.md` los 5 dígitos y el NIT del duplicado (C-50, C-53); si se acepta solo RF-45: nada más.
4. Añadir RF-31 a RF-47 y RNF-15 a RNF-18 a `01` solo cuando se ratifiquen; hoy son `PROPUESTA`.
5. Añadir una línea al final de `INDEX.md` apuntando a `investigacion/00_INDEX.md`.
6. Registrar la decisión en `docs/DECISIONES.md` con ID, fecha y quién.

## Criterio de aceptación

1. Cada requisito tiene criterio, ISO 25010:2023, fase y tarea afectada.
2. Cada contradicción C-50 a C-55 nombra el archivo y la resolución; C-50 y C-53 son verificables con el script del algoritmo de F-24 (`01` §3.3).
3. Cada pregunta tiene por qué bloquea, opciones, recomendación y decisor.
4. Los números de PA, Q, NV y C continúan sin colisión con `99` y `10` (último PA-37, NV-28, C-49, Q-29).
