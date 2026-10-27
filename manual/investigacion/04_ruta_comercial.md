# 04 · De prototipo de hackatón a producto comercializable

**Objetivo.** Responder, con evidencia y sin inventar cifras, las ocho preguntas que el TyC obliga a sustentar en el pitch (Dimensión 2, `inputs/01`, líneas 189–197) y dejar una hoja de ruta de fases con salida medible, para que el jurado de Negocio (15) vea un camino y el equipo sepa qué haría el día 30.

**Entradas.** `01` (F-xx), `02` (huecos), `03` (candidatos N-xx), `09_negocio_pitch.md` (negocio v1), `13` D-14, `20` §3.

**Regla de honestidad.** No hay precios, tamaños de mercado ni disposición a pagar validados. Todo precio o cifra comercial de este archivo es `PROPUESTA` o está marcado `[NO VERIFICADO]`. Lo que sí hay son dos datos de contexto con fuente: el tamaño de la red de CDE en Santander (F-09) y el precio público de un competidor (F-17).

## 1. Las ocho preguntas del TyC

| Pregunta del TyC (Dimensión 2) | Respuesta apoyada en la investigación | Evidencia | Lo que falta validar |
|---|---|---|---|
| **1. Propuesta de valor y por qué la Universidad debería adoptarla** | Una sola fuente de verdad por empresa (sin duplicados), con origen de cada dato y reporte de impacto en la lógica del modelo SBDC | `03` N-01, N-02, N-04; F-08 | ¿Los reportes que hoy exige el CDE a sus financiadores coinciden con N-04? (`05` Q-35) |
| **2. Cómo escalar** | Por **réplica a otros CDE con el mismo método**: 15 CDE en Santander (10 de la CCB, 5 con aliados, entre ellos la UNAB, F-09) y la red nacional de CDE del SENA (117 en 2018, F-10) | F-09, F-10 | Cuántos CDE operan hoy y con qué software (NV-34) |
| **3. Cómo sostenerse** | Suscripción por institución (hipótesis, §3) más servicios de implementación e importación inicial | F-17 como ancla de precio de un competidor | Disposición a pagar; presupuesto de los CDE |
| **4. Cómo implementarse dentro de la Universidad** | Fase de piloto en el CDE de la UNAB con datos reales bajo contrato de tratamiento; instalación por contenedores en servidor de la universidad (`03` stack, `13` D-14) | `03_stack.md`, RNF-11 | Quién es dueño del sistema en la UNAB (TI o CDE) y titularidad de la propiedad intelectual (NV-40) |
| **5. Qué recursos necesitaría** | Equipo mínimo de 3 personas (producto/desarrollo, datos, contenido y soporte), servidor, correo transaccional; costos de §5 | `07`, `20` | Estimación de horas reales del piloto, con el desvío del 20 % ya observado en la simulación (`20` §9) |
| **6. Cómo genera valor para la UNAB** | Horas del equipo del CDE liberadas (a medir en el piloto, no prometidas), reportes de impacto comprobables, credenciales con marca UNAB (N-06), insumo para investigación con datos propios | `03` N-04, N-05, N-06 | Línea base del tiempo manual actual del CDE (Q-35) |
| **7. Cómo se diferencia** | Tres hilos con evidencia: registro mercantil abierto (H-1), impacto con definiciones SBDC (H-2), recompensas ligadas a hechos (H-3); y la tesis «dato con origen e impacto comprobable» | `02` §2 | Revisión de la competencia con demostraciones reales, no solo páginas públicas |
| **8. Estrategia de posicionamiento** | Primero el **CDE de la UNAB como caso de referencia**; segundo los 14 CDE vecinos de la red de Santander; tercero cámaras de comercio y otras universidades con oficina de emprendimiento | F-09 | Entrevistas (§4 paso 5) |

## 2. Segmentos y por qué ese orden

| # | Segmento | Por qué | Evidencia | Riesgo |
|---|---|---|---|---|
| S1 | CDE de la UNAB | Caso de referencia, datos propios, acceso al equipo | `inputs` | Un solo cliente; propiedad intelectual no resuelta |
| S2 | Otros CDE de Santander (14) | Mismo método SBDC, reporte similar, cercanía; 10 los lidera la Cámara de Comercio de Bucaramanga | F-09 | La CCB puede tener su propia herramienta (NV-34) |
| S3 | Oficinas de emprendimiento de universidades y cámaras de comercio en Colombia | Misma necesidad de seguimiento y de medir impacto | F-10 (cifra vieja) | Ciclos de compra largos |
| S4 | Financiadores y entidades que piden reportes (consumidores del reporte, no compradores) | Estandarizar el reporte es parte de la propuesta | F-08 (Neoserra incorpora de antemano los reportes que exige la SBA) | No son compradores |

No se propone entrar a startups de capital de riesgo (competidores de `02` familias B y C) ni a la microempresa como cliente directo.

## 3. Modelo de ingresos: hipótesis a validar (PROPUESTA)

1. **Qué se cobra:** suscripción anual por institución, con tres niveles por número de empresas activas en seguimiento; un servicio único de implementación (importación inicial, catálogos, capacitación).
2. **Ancla de precio:** el competidor público más cercano en estructura publica planes desde US$499 al mes (F-17), es decir US$5.988 al año por programa (cuenta: 499 × 12). El CDE no es su cliente típico (programas de cohortes de startups), así que sirve como **techo de referencia**, no como precio.
3. **Cómo se fija el precio real:** no se fija en este manual. Se prueba en el piloto con tres precios hipotéticos y la pregunta «¿lo compraría su centro?» a al menos 5 responsables de CDE (§4 paso 5). Hasta entonces, cualquier cifra dicha ante el jurado se presenta como *hipótesis de precio*.
4. **Qué se regala:** el piloto de un semestre para la UNAB (ya es la petición de `INDEX` §5).
5. **Qué no se cobra:** el acceso de los emprendedores. El valor lo paga la institución.

## 4. Hoja de ruta en cuatro fases con salida medible

Las horas son estimaciones sin medir (`[ESTIMACIÓN SIN MEDIR]`) y se reparten entre las tres personas del equipo. **Fuente del tiempo:** después de la hackatón no hay horas asignadas; el equipo debe decidir cuántas horas semanales puede dedicar (`05` Q-36). Con el desvío observado de +20 % (`20` §9), cada estimación se presenta con ese margen.

| Fase | Cuándo | Qué | Horas (estimación sin medir) | Salida medible |
|---|---|---|---:|---|
| **0 · Hackatón** | 28–29 oct | Variantes A/B de `20` + los 0–0,6 h de `03` §4 | 0 adicionales | Camino dorado de 8 pasos sin error (`02` §5) |
| **1 · Piloto controlado** | Días 1–30 | Contrato de tratamiento de datos con la UNAB; importar las 497 empresas reales (T-14 completa); RF-32 y RF-33 (consulta al registro abierto por NIT); RNF-15 y RNF-17; correcciones del feedback; medir cobertura de NIT | 40–60 | % de las 497 con NIT y persona jurídica; % de fichas con sector y tamaño frente a la línea base 36 % / 37 % (TyC §5); tiempo del equipo del CDE en tareas de datos antes y después |
| **2 · Valor demostrado** | Días 31–90 | Impacto verificado por enlace (RF-38); RF-39 supervivencia de la cohorte; procedencia completa (RF-34, RF-35); pesos de duplicados calibrados con 50–100 pares etiquetados; WhatsApp Business solo si el CDE acepta el costo (N-09) | 60–90 | Reporte de impacto entregado a un financiador; ≥ 1 CDE vecino con demo real |
| **3 · Producto** | Días 91–180 | Decidir multi-institución (W-04) con aislamiento por institución; comparación anónima (RF-41, RF-47); insignias firmadas (RF-40b); ingestión asistida con humano solo si la medición de exactitud cumple el mínimo (RF-44) | 120–180 | 3 instituciones pagando o con carta de intención firmada |

**Criterios de parada** por fase: si en la fase 1 el CDE de la UNAB no usa el sistema al menos una vez por semana durante 4 semanas, no se avanza a la fase 2; se vuelve a la causa (usabilidad o datos).

## 5. Costos de operar que sí se pueden nombrar

| Concepto | Dato | Fuente / estado |
|---|---|---|
| Hospedaje | Servidor de la universidad o del patrocinador (decisión `03` §8); no hay cifra de nube | Sin cifra: NV-35 aplica a competidores, no a nosotros |
| Dato abierto del registro mercantil | Gratis con licencia CC BY-SA 4.0 y atribución a Confecámaras | F-01 |
| Límite de la API abierta | Sin *app token*: límite por IP, puede responder 429 | F-04 |
| Correo transaccional | Ya previsto en el stack (Mailpit en desarrollo, proveedor por decidir) | `03` |
| WhatsApp Business (si se adopta) | Cobro por mensaje desde el 1-jul-2025; tarifa de Colombia no leída | F-21, NV-30 |
| Cumplimiento | Ley 1581: política de tratamiento, autorización, derechos de acceso y corrección (ya en T-46); análisis de transferencias internacionales si se usa nube o IA fuera de Colombia | F-22, NV-36 |
| Licencias de dependencias | Todo el stack elegido es de código abierto; si se evaluara usar Twenty, EspoCRM o Frappe como base, son AGPL-3.0 (F-20). Qué obliga exactamente esa licencia al ofrecerse como servicio **no se verificó en el texto de la licencia** `[NO VERIFICADO]`; confirmarlo con un abogado antes de elegirlos. **Decisión recomendada: no usarlos como base**, porque el stack ya está fijado y no se necesita | F-20 |

## 6. Aspectos legales que hay que cerrar antes de vender (checklist)

| # | Tema | Qué se sabe | Qué falta | Quién decide |
|---|---|---|---|---|
| L-1 | Propiedad intelectual de lo construido | El TyC de `inputs/` **no** tiene cláusula de propiedad intelectual (búsqueda de «propiedad», «derechos», «licencia», «titular», «cesión»); NV-40 | Preguntar al CDE el 28 a las 8:30 quién es titular y si puede comercializarse | CDE / UNAB |
| L-2 | Licencia del dato abierto | CC BY-SA 4.0 con atribución a Confecámaras (F-01); share-alike afecta a bases derivadas que se compartan | Consulta jurídica sobre si la copia local de campos enriquecidos obliga a compartir con la misma licencia | Abogado de la UNAB |
| L-3 | Datos de personas naturales del registro | Incluyen la cédula (`01` §3.2) | Decisión de no importarlos (RNF-17) | Equipo + CDE |
| L-4 | Habeas data | Ley 1581; consentimiento y derechos ya en T-46 | Registro de bases de datos y política de tratamiento si aplica `[NO VERIFICADO]` | UNAB |
| L-5 | Transferencia internacional | Art. 26 de la Ley 1581 y Circular Externa 003 de 2025 (F-22, sin abrir el PDF) | Si hay nube o IA fuera de Colombia, verificar excepción o declaración de conformidad | UNAB |
| L-6 | Accesibilidad | WCAG 2.2 es Recomendación del W3C (F-07); la Resolución 1519 de 2020 exige 2.1 AA a sujetos de la Ley 1712 (F-23) | Si algún comprador es sujeto obligado (NV-34) | Comprador |
| L-7 | Clasificación económica | CIIU Rev. 5 A.C. oficializada el 6-ago-2026 con dos años de transición (F-13) | Texto de la resolución (NV-33) | Equipo |

## 7. Qué se dice del futuro en el pitch (45 palabras máx., sustituye frases del guion)

«Después de la hackatón pedimos un piloto de un semestre en el CDE de la UNAB, con datos reales bajo contrato de tratamiento. Medimos tres cosas: fichas con sector y tamaño, tiempo del equipo en tareas de datos y uso semanal. Con esa evidencia se invita a los CDE vecinos.»

No decir: precios, tamaño de mercado, «nadie lo hace», ahorros de horas.

## 8. Pasos

1. En T-01, decidir si el CDE UNAB es el cliente de referencia y quién del equipo lleva la conversación (hoy nadie está asignado).
2. El 28 a las 8:30, preguntar L-1 (titularidad) y las preguntas Q-30 a Q-36 de `05` (se suman a `10`).
3. Después del pitch, abrir una página de **registro de decisiones** (`docs/DECISIONES.md`, ya prevista en `13` §6) con las respuestas.
4. Ejecutar la fase 1 solo con un contrato de tratamiento de datos firmado.
5. Entrevistar a 5 responsables de CDE (los 14 vecinos de F-09 son la lista de partida) con la pregunta de precio de §3.
6. Revisar cada 30 días las fuentes [SECUNDARIAS] de `01` que se usen en material de venta.

## Criterio de aceptación

1. Las 8 preguntas del TyC tienen respuesta con fuente y con lo que falta validar.
2. Ninguna cifra de precio, mercado o ahorro aparece sin la etiqueta `PROPUESTA` o `[NO VERIFICADO]`.
3. Cada fase tiene una salida medible y un criterio de parada.
4. Las preguntas L-1 y Q-30..Q-36 existen en `05` con decisor.
