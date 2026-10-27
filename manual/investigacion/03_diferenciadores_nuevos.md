# 03 · Diferenciadores nuevos y funciones únicas (Ronda 4, investigación)

**Objetivo.** Proponer 13 candidatos nuevos (N-01 a N-13) que se sumen a los 15 de `13` (D-01 a D-15) sin repetirlos, cada uno con evidencia, dolor del reto que ataca, qué se ve en 20 segundos, **rebanada mínima para la hackatón con su costo en horas y de dónde sale ese tiempo**, y camino hacia un producto comercial. Todo es `PROPUESTA` hasta que el equipo lo ratifique en T-01 (28-oct 10:00).

**Entradas.** `01` (fuentes F-xx), `02` (huecos H-1..H-5), `13`, `20` §3 y §7, `22` §6–§7, `backlog.csv`, `inputs/02_presentacion_CDE.md` (diapositivas 3, 4, 6, 7) y `inputs/01_TyC_y_cronograma_CDE.md` (Dimensión 2, líneas 189–197).

**Restricción de partida.** El plan R3 cabe con colchón de 3,25 h de equipo en A (S 1,25 · J 0,5 · MP 1,5) y de 0,75 h en B (S 0,25 · J 0,5 · MP 0,0) (`20` §3). La Ronda 3 prohibió añadir funciones. Esta ronda **no revierte** esa regla: la mayor parte de lo nuevo cuesta 0 h de programación en la hackatón (es evidencia, diseño de datos, narrativa y camino de producto) y lo poco que cuesta código sale de colchón o de tiempo liberado por una compuerta caída.

## 1. La tesis que une todo: «cada dato dice de dónde viene y cada impacto se puede comprobar»

El puntaje simulado de Diferenciador fue 9,2 de 15 porque, tras los recortes, el diferenciador es una **combinación** de historial, duplicados y recompensas (`22` §6.1). Un hilo conductor convierte la combinación en una idea que se recuerda. Propuesta de hilo, en cuatro verbos que ya existen en el reto (diapositiva 4):

| Verbo del reto | Lo que ya está en el plan | Lo que añade la investigación | Candidatos |
|---|---|---|---|
| **Conocer** a cada empresa sin duplicados | Duplicados, buscador, importación | El dato se **contrasta con el registro mercantil abierto** y cada valor conserva su origen | N-01, N-02, N-03, N-11 |
| **Eliminar** el trabajo manual | Citas, recordatorios, importación, reportes | Sugerencias aceptables con un clic en lugar de digitación; ingestión asistida con humano (fase 3) | N-01, N-09, N-10 |
| **Convertir** datos en conocimiento | Dashboard, brechas | Impacto con la **definición del modelo SBDC**, separando lo declarado de lo verificado, y supervivencia frente a la línea nacional | N-04, N-05, N-07 |
| **Medir** el impacto de la UNAB | KPIs de impacto (T-16) | Cohortes verificables y credenciales portables a nombre de la UNAB | N-04, N-05, N-06 |

Frase para el pitch (25 palabras, sujeta a ratificación y a caber en el guion de `18`): *«Cada dato de la ficha dice de dónde viene, y cada resultado de impacto distingue lo que el emprendedor declara de lo que se pudo comprobar.»* Costo: 0 h; sustituye una frase existente, no añade tiempo.

## 2. Criterio de comparación (PROPUESTA, no es la rúbrica)

Cada candidato se puntúa de 0 a 2 en seis columnas: **D** responde a un dolor citado del reto; **V** se ve en la demo o el pitch en ≤ 20 s; **E** tiene evidencia (2 = fuente primaria, 1 = secundaria, 0 = ninguna); **C** es difícil de copiar por algo distinto del esfuerzo (datos acumulados, integración, método); **M** valor comercial después de la hackatón; **K** costo en la hackatón (2 = 0 h, 1 = hasta 0,35 h, 0 = más). El riesgo va aparte porque un puntaje alto con riesgo alto no se debe ejecutar sin plan B.

| ID | Candidato | D | V | E | C | M | K | Total /12 | Riesgo | Hackatón |
|---|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|---|
| N-04 | Impacto en términos SBDC, declarado frente a verificado | 2 | 1 | 2 | 1 | 2 | 2 | **10** | B | 0 h (definiciones en T-16) |
| N-01 | Ficha contrastada con el registro mercantil abierto | 2 | 1 | 2 | 1 | 2 | 1 | **9** | M | 0,25 h condicionado |
| N-05 | Supervivencia de la cohorte frente a la línea nacional | 2 | 0 | 1 | 2 | 2 | 2 | **9** | M | 0 h (diapositiva «siguiente paso») |
| N-02 | Procedencia por campo | 2 | 1 | 1 | 1 | 1 | 2 | 8 | B | 0 h (diseño de datos) |
| N-03 | Duplicados con desglose por campo | 2 | 2 | 1 | 0 | 1 | 2 | 8 | B | 0 h (requisito de T-12x) |
| N-06 | Insignias verificables (Open Badges 3.0) | 1 | 1 | 1 | 1 | 2 | 2 | 8 | M | 0 h (campos de T-43) |
| N-10 | Ingestión asistida por IA con humano en el circuito | 2 | 1 | 0 | 1 | 2 | 2 | 8 | **A** | 0 h (solo hoja de ruta) |
| N-07 | Comparación anónima con el sector (supresión de grupos pequeños) | 1 | 0 | 1 | 1 | 2 | 2 | 7 | M | 0 h |
| N-13 | Red de CDE con comparación entre instituciones | 1 | 0 | 1 | 2 | 2 | 2 | 8 | A | 0 h (argumento) |
| N-12 | Accesibilidad AA como puerta a clientes públicos | 1 | 1 | 2 | 0 | 1 | 2 | 7 | B | 0 h (T-96 existente) |
| N-11 | Clasificación con vigencia: CIIU Rev. 5 A.C. y tamaño por regla legal | 2 | 0 | 1 | 0 | 2 | 1 | 6 | B | 0,1 h |
| N-08 | Radar de convocatorias de financiación | 1 | 0 | 0 | 0 | 2 | 2 | 5 | M | 0 h |
| N-09 | Recordatorio por WhatsApp en un clic | 1 | 1 | 1 | 0 | 1 | 1 | 5 | B | 0,25 h J condicionado |

Lectura: los cuatro primeros por valor por hora son N-04, N-01, N-05 y N-02/N-03, y los cuatro cuestan 0–0,25 h de código. N-10 y N-13 son atractivos para el jurado de negocio pero **no se construyen**; se presentan como camino.

## 3. Fichas de los candidatos

Formato: qué es · evidencia · dolor · requisitos propuestos (ID, criterio que protege, ISO/IEC 25010:2023) · demo de 20 s · rebanada de hackatón (horas, quién, de dónde sale el tiempo, compuerta) · camino comercial · riesgos · corte.

### N-01 Ficha contrastada con el registro mercantil abierto (RUES)

- **Qué es.** Con el NIT de una empresa, el sistema consulta el conjunto abierto de Confecámaras en datos.gov.co y **propone**, sin imponer, el CIIU de actividad principal, el estado de la matrícula y el año de última renovación. El CDE acepta o rechaza con un clic. Con eso, «formalización vigente o vencida» (catálogo F3/F4 de `21_catalogos.csv`) deja de depender de que el emprendedor lo declare.
- **Evidencia.** F-01 y F-02: conjunto de 36 columnas con NIT, dígito de verificación, CIIU principal y secundario, fecha de matrícula, fecha de renovación, último año renovado y estado; actualización mensual; Bucaramanga tiene 159.790 matrículas activas y 415.524 registros en total (`01` §3.2); consulta sin clave con límite por IP (F-04). F-03: existe además un conjunto de establecimientos (`nb3d-v3n7`).
- **Dolor.** Solo 180 de 497 empresas tienen sector y 184 tienen tamaño (TyC §5; DOL-04); «estado de formalización» está nombrado en la diapositiva 4. El dato oficial existe y es gratuito; el CDE lo digita a mano.
- **Requisitos propuestos.**
  - **RF-31** Al guardar una empresa con NIT, el sistema valida el dígito de verificación y avisa («el dígito no coincide con el NIT; esperado N»). Es un aviso, no un bloqueo. Criterio: Funcionalidad 60 (calidad del dato, RF-04, DOL-04). ISO: Adecuación funcional, Fiabilidad. El algoritmo de F-24 coincidió con 3 de 3 sociedades reales (`01` §3.3).
  - **RF-32** (fase 1) Botón «Consultar registro mercantil» en la ficha: consulta el NIT (sin dígito) y muestra los valores propuestos junto a los actuales, con origen y fecha. Criterio: Funcionalidad 60 (automatización), Diferenciador 15. ISO: Adecuación funcional, Compatibilidad.
  - **RF-33** (fase 1) Sector sugerido a partir del CIIU con la tabla de equivalencias de N-11, y formalización derivada: matrícula `ACTIVA` y año renovado igual o posterior al año anterior ⇒ «vigente»; en otro caso ⇒ «vencida». La regla exacta se decide con el CDE (`05` Q-31). Criterio: Funcionalidad 60. ISO: Adecuación funcional.
  - **RNF-15** Atribución «Confecámaras» y respeto de CC BY-SA 4.0 (F-01). Criterio: Negocio 15 (sostenibilidad legal). ISO: Protección.
  - **RNF-17** No se importan ni muestran datos de personas naturales del registro: su `numero_identificacion` es la cédula (`01` §3.2). Criterio: Funcionalidad 60. ISO: Seguridad, Protección. Coherente con RNF-13 de `01`.
- **Demo de 20 s (solo RF-31).** En el alta, el equipo escribe un NIT con dígito equivocado; aparece el aviso. Después, en el pitch: una captura previa de la consulta a la API real («415.524 registros de la Cámara de Bucaramanga; 159.790 activos») para mostrar que el dato oficial está a una consulta de distancia.
- **Rebanada de hackatón.** RF-31 = **0,25 h de Santiago**: una función pura en los normalizadores de T-11 y un aviso en el alta, añadidos **después de G-01** (19:00), cuando el recorrido H1 ya funciona (no antes: no debe tocar el camino crítico de la mañana). Sale del colchón de S en A (1,25 h → 1,0 h; tramo libre 23:15–00:30). En B el colchón de S es 0,25 h y, junto con RF-45 (0,1 h), no alcanza, así que **en B se hace solo si G-02 (20:45) o G-06 (23:30) cortan su opción** y liberan al menos 0,25 h (`20` §6.2: 0,75 h cada una). La captura de la API cuesta 0 h: reemplaza la diapositiva «siguiente paso» ya prevista en T-95. **Obligación de datos:** los NIT de `21_casos_demo.md` y del `DemoSeeder` (T-30) deben tener dígito válido; si no, la demo muestra un error falso. Ver contradicción C-50 en `05`.
- **Camino comercial.** Fase 1 (piloto): consulta por NIT con caché y reintentos; evitar copiar todo el conjunto salvo que se decida (`04` §5). Fase 2: actualización mensual de estado y renovación para todas las empresas del CDE con NIT (alimenta N-05).
- **Riesgos.** (1) Cobertura desconocida: de las 497 empresas no se sabe cuántas tienen NIT ni cuántas son personas jurídicas (NV-39; el 78 % de los registros de Bucaramanga son personas naturales, `01` §3.2). Se mide en el piloto. (2) Límite de tasa sin *app token* (F-04). (3) Revisión de CIIU del conjunto sin verificar (NV-41, abajo). (4) Share-alike de CC BY-SA 4.0 si se redistribuye una base derivada (RNF-15; consulta jurídica en `04` §6).
- **Corte.** Sin RF-31, se queda la normalización actual de T-11 y la diapositiva.

### N-02 Procedencia por campo

- **Qué es.** Cada campo crítico (NIT, razón social, sector, tamaño, formalización, correo, teléfono) guarda **de dónde salió** (digitado, importación, registro mercantil, el propio emprendedor), **cuándo** y **quién lo confirmó**. Cuando dos fuentes chocan, la ficha muestra ambas y pide decidir.
- **Evidencia.** F-29: la práctica de resolución de entidades empieza por identificadores fuertes y registra la decisión por niveles. El reto nombra «datos duplicados, contradictorios o incompletos» (DOL-04); la contradicción solo se puede resolver si se sabe de dónde viene cada valor.
- **Requisitos propuestos.**
  - **RF-34** Los campos críticos guardan `origen`, `fecha_dato` y `confirmado_por`. Criterio: Funcionalidad 60 (confiabilidad del dato), Diferenciador 15. ISO: Adecuación funcional, Seguridad (rastro).
  - **RF-35** La comparación lado a lado (T-19) y la ficha muestran origen y fecha junto a cada valor. Criterio: Funcionalidad 60 (facilidad de uso). ISO: Capacidad de interacción.
- **Demo de 20 s.** En la comparación de duplicados, la columna izquierda dice «importación 2025-03» y la derecha «digitado por el equipo, ayer».
- **Rebanada de hackatón.** **0 h**: el diseño de datos de `04` ya guarda el historial de cambios en `auditoria` (T-10b) y la importación (T-14). RF-34 se escribe como **requisito de diseño** para T-11a (columna `origen` en los campos de empresa, 0 h si se decide antes de crear el esquema) y RF-35 como texto opcional en T-19 (B). Si la compuerta G-08 cae, no se muestra. Sin código nuevo en A.
- **Camino comercial.** Fase 1: `origen` obligatorio en la API; fase 2: resolver conflictos con reglas por campo («gana el registro mercantil para estado; gana el emprendedor para teléfono»). Es la base de N-01 y de N-10.
- **Riesgos.** Si el esquema se crea sin `origen`, añadirlo después cuesta una migración con datos reales. Por eso va en T-11a.
- **Corte.** Se queda la auditoría de T-10b.

### N-03 Duplicados con desglose por campo

- **Qué es.** El banner de posible duplicado no muestra un solo porcentaje: muestra **por qué** («NIT igual, correo igual, nombre 91 % parecido, mismo municipio») y un nivel de decisión: alta (se propone fusionar), media (revisión humana), baja (no se muestra).
- **Evidencia.** F-29 (umbrales por niveles; reglas deterministas primero). F-05: Splink explica cada coincidencia con un gráfico por campo (*waterfall*); no hace falta Splink (es Python y el stack es Laravel/PostgreSQL), se adopta la idea. La medición real de `pg_trgm` ya existe (`12` §2.5 y `tareas/T-12.md`).
- **Requisitos propuestos.**
  - **RF-36** El endpoint de duplicados devuelve, para cada candidato, la lista de señales con su peso y el nivel, no un número único. Criterio: Funcionalidad 60 (coherencia, nivel de desarrollo). ISO: Adecuación funcional, Capacidad de interacción.
- **Demo de 20 s.** Es el banner de D-02 con tres líneas de motivo; ya está en la demo de 120 s.
- **Rebanada de hackatón.** **0 h incrementales**: se escribe en la especificación de T-12x (B) y de T-12 (A) que la respuesta incluye `senales[]`. El costo de devolver una lista en lugar de un número ya está dentro de las 0,75 h de T-12x; si no cabe, se queda el número (`T-12` v2).
- **Camino comercial.** Fase 2: calibrar pesos con pares etiquetados por el CDE (50–100 pares) y publicar el criterio. Argumento de venta: el equipo del CDE confía en lo que puede explicar.
- **Riesgos.** Pesos arbitrarios. Hasta tener pares etiquetados se declara «reglas provisionales» (`T-12`).
- **Corte.** Número único (v1).

### N-04 Impacto en términos SBDC, declarado frente a verificado

- **Qué es.** Los KPIs de impacto (T-16) usan **las definiciones del modelo SBDC** (empleos creados y retenidos, variación de ventas, capital gestionado, empresas nuevas) y separan en cada total lo **declarado** por el emprendedor de lo **verificado** (con soporte o con el registro mercantil). Se agrega un umbral de **dosis de acompañamiento**.
- **Evidencia.** F-08: el *scorecard* de Neoserra mide empresas nuevas, empleos creados y retenidos, y cambios en ventas y utilidades; sus reportes se filtran por clientes con 5 o más horas de asesoría. F-31: la red de Nueva York no registra el impacto hasta tener verificación del cliente (documento antiguo, sin comprobar en Neoserra). F-09: los CDE de Santander ya reportan empresas fortalecidas y crédito logrado, es decir, **ya piden este tipo de indicador**.
- **Dolor.** «Medir el impacto de la UNAB en el ecosistema» (diapositiva 4) y «los resultados de las intervenciones» (punto 03). Los jurados de negocio preguntan «¿cómo prueban que sirve?».
- **Requisitos propuestos.**
  - **RF-37** Los KPIs de `T-16` se nombran y definen así: *empresas atendidas*; *empresas con acompañamiento sostenido* (≥ 5 h acumuladas de asesoría en el periodo, `PROPUESTA` por validar con el CDE, `05` Q-32); *empleos creados*; *empleos retenidos*; *variación de ventas*; *capital gestionado*; *empresas nuevas*. Criterio: Funcionalidad 60 (respuesta al problema); Negocio 15 (replicable entre centros). ISO: Adecuación funcional, Compatibilidad.
  - **RF-38** Cada resultado de impacto lleva estado `declarado` o `verificado` y fuente; el reporte muestra ambos totales por separado y nunca los suma sin decirlo. Criterio: Funcionalidad 60, Diferenciador 15. ISO: Fiabilidad, Seguridad.
- **Demo de 20 s.** En el reporte de impacto una fila dice «Empleos: 14 declarados · 6 verificados». El pitch ya promete «lo medimos en el piloto»; esto le da forma.
- **Rebanada de hackatón.** **0 h**: son nombres y definiciones dentro de T-16 (0,75 h) y T-45 (1,25 h); la separación declarado/verificado se queda en el modelo de datos de `04` como campo de estado en las tablas de resultados **solo si ya existe esa tabla**; si no, es diapositiva. No se muestran cifras reales: los datos son sintéticos (`04` §6).
- **Camino comercial.** Fase 1: encuesta de seguimiento por enlace único al emprendedor (verificación). Fase 2: exportación en el formato que pida cada financiador. Para el CDE, el reporte deja de armarse a mano.
- **Riesgos.** Definiciones distintas entre centros (cada uno cuenta «fortalecida» distinto; F-09 no la define). Por eso el umbral de 5 h se pregunta, no se impone. Cifras de impacto: no prometer horas ahorradas (`INDEX` §5).
- **Corte.** KPIs sin separación (v1).

### N-05 Supervivencia de la cohorte frente a la línea nacional

- **Qué es.** Para las empresas con NIT, el sistema calcula con el estado y el año de última renovación del registro abierto cuántas de las atendidas siguen activas a 12, 24 y 60 meses, y las compara con la línea de Confecámaras de empresas de la misma edad.
- **Evidencia.** F-14: supervivencia a cinco años 33,5 %; micro 33,4 %; pequeñas 60,9 %. F-25: Incubagraria encontró que solo el 49,2 % de sus emprendimientos de 2017–2023 seguía activo; es el tipo de pregunta que una incubadora no puede contestar sin seguimiento sistemático. F-01 da la materia prima gratis.
- **Dolor.** «Medir el impacto de la UNAB» sin depender de encuestas.
- **Requisitos propuestos.**
  - **RF-39** (fase 2) Reporte «Supervivencia de la cohorte» con tamaño de grupo visible y la advertencia «no demuestra causalidad». Criterio: Funcionalidad 60; Diferenciador 15; Negocio 15 (prueba de valor). ISO: Adecuación funcional.
- **Demo.** Ninguna en la hackatón: los datos son sintéticos y mostrar un número sería inventar un resultado. Entra como una frase de hoja de ruta: «con el NIT podemos preguntarle al registro oficial cuántas de las empresas que acompañamos siguen vivas».
- **Rebanada de hackatón.** **0 h.**
- **Camino comercial.** Es el argumento de retención del producto: cuanto más tiempo se usa, más largo es el historial verificable que ningún competidor nuevo tiene (columna C = 2). Fase 2 con el módulo de N-01.
- **Riesgos.** (1) Sesgo de selección: las empresas que llegan al CDE no son un grupo aleatorio. (2) Edad no comparable: Confecámaras mide empresas **creadas** en 2017 y observadas en 2022 (F-14); el CDE atiende empresas de cualquier edad. Se compara por año de matrícula. (3) Empresas sin NIT o personas naturales fuera de cobertura (NV-39). (4) La cifra de sociedades (44 % o 44,5 %) varía entre fuentes; no citarla.
- **Corte.** No aplica; no se construye en la hackatón.

### N-06 Insignias verificables (Open Badges 3.0)

- **Qué es.** Las insignias del módulo de recompensas (T-43) se definen con los campos que exige una credencial verificable (nombre, descripción, criterio de obtención, emisor, identificador estable) para poder **emitirse más adelante como credenciales firmadas** que el emprendedor lleva a su perfil profesional.
- **Evidencia.** F-06: Open Badges 3.0 es estándar de 1EdTech; cada credencial se firma digitalmente como Verifiable Credential compatible con el modelo de datos 2.0 del W3C. F-16: metaanálisis con efecto positivo de la gamificación educativa pero heterogeneidad alta (no prometer aumento de participación; `13` D-09 ya lo dice).
- **Dolor.** «Módulo de formación por recompensas» (diapositiva 3) y «cómo generaría valor para la UNAB» (TyC Dimensión 2): una insignia con el nombre de la universidad es valor de marca portable.
- **Requisitos propuestos.**
  - **RF-40** Cada insignia del catálogo tiene `nombre`, `descripcion`, `criterio`, `emisor` e `identificador` estable (URL o UUID). Criterio: Diferenciador 15; Negocio 15. ISO: Flexibilidad, Compatibilidad.
  - **RF-40b** (fase 2) Emisión como OpenBadgeCredential firmada y verificable fuera del sistema. Implementación `[NO VERIFICADO]` (NV-37).
- **Demo.** Ninguna en la hackatón; una línea en el pitch.
- **Rebanada de hackatón.** **0 h**: son nombres de columnas en la tabla de insignias de T-43a; el contenido ya existe en `21_contenido_formacion.md`.
- **Camino comercial.** Fase 2: UNAB (o la red de CDE) como emisor. Precaución: una insignia solo vale si el criterio es un hecho verificable, igual que en la tesis de `13` D-09.
- **Riesgos.** Gestión de llaves de firma; reputación del emisor; complejidad (NV-37).
- **Corte.** Insignias internas (v1).

### N-07 Comparación anónima con el sector

- **Qué es.** El emprendedor ve «tu sector en el CDE: N empresas, diagnóstico medio por dimensión» **solo si el grupo tiene al menos k empresas**; si no, el sistema muestra «grupo muy pequeño para mostrarse».
- **Evidencia.** F-30: la práctica de supresión de celdas pequeñas usa k de hasta 5 o 6; no hay umbral legal único; el k-anonimato solo no basta si todos los miembros comparten el mismo valor sensible. HEInnovate (F-26) advierte del sesgo de la autoevaluación: un punto de comparación externo lo corrige.
- **Requisitos propuestos.**
  - **RF-41** (fase 2) Vista de sector para el emprendedor con supresión de grupos menores a k (`PROPUESTA` k = 5, decide el CDE, `05` Q-33). **RNF-16** La regla se aplica en el servidor, no en la interfaz. Criterio: Funcionalidad 60; Negocio 15 (el emprendedor recibe algo a cambio de sus datos). ISO: Seguridad, Protección.
- **Rebanada de hackatón.** **0 h**; con 17 sectores y 497 empresas sintéticas, varios grupos quedarían por debajo de k y la demo se vería vacía.
- **Camino comercial.** Fase 2. Refuerza el consentimiento (T-46) con reciprocidad.
- **Riesgos.** Reidentificación por diferencia entre consultas sucesivas; se mitiga con k y con no ofrecer filtros finos al emprendedor.
- **Corte.** No se construye ahora.

### N-08 Radar de convocatorias de financiación

- **Qué es.** Catálogo curado por el CDE de convocatorias (entidad, fechas, requisitos como reglas simples) que el recomendador ofrece a la empresa con el motivo («vigente hasta…, tu empresa cumple X»).
- **Evidencia.** F-28: el SENA abrió 12 convocatorias del Fondo Emprender en 2026 con una bolsa cercana a $282.400 millones y montos habituales de $80 a $100 millones; **las inscripciones de 2026 ya cerraron** (marzo a abril). Es información que cambia cada año.
- **Requisitos propuestos.**
  - **RF-42** (fase 2) Catálogo `oportunidades` con `vigente_desde/hasta` y ocultamiento automático al vencer. Criterio: Negocio 15; Funcionalidad 60. ISO: Adecuación funcional.
- **Rebanada de hackatón.** **0 h.** Dato factual y vencido: no se carga ninguna convocatoria en la demo.
- **Riesgos.** Mantenimiento humano permanente; error por dato desactualizado. Por eso no se hace en la hackatón.
- **Corte.** No se construye ahora.

### N-09 Recordatorio por WhatsApp en un clic

- **Qué es.** En la cita o en la bandeja de notificaciones, un botón «Recordar por WhatsApp» abre el chat con el texto prellenado y la persona del CDE lo envía. Sin API de pago.
- **Evidencia.** F-21: desde el 1-jul-2025 Meta cobra por mensaje y Colombia figura entre los países con tarifa de utilidad más alta (tarifa exacta: NV-30). F-15: metaanálisis de recordatorios por SMS en salud, efecto 1,48 (IC 95 % 1,23–1,72) en ensayos aleatorios; **no hay evidencia en asesoría empresarial** (NV-38). Formato del enlace: NV-29.
- **Requisitos propuestos.**
  - **RF-43** Botón de recordatorio por WhatsApp con texto de la plantilla de T-21 y registro del envío en la bandeja. Criterio: Funcionalidad 60 (automatización parcial). ISO: Capacidad de interacción.
- **Rebanada de hackatón.** 0,25 h de Julián, sale del colchón de J (0,5 h) o de V1; **contradice W-03** (WhatsApp/SMS en «Won't»): se registra como C-52 y se decide el 28 a las 8:30 con la respuesta del CDE (`05` Q-34). Es el candidato más flojo: no automatiza, **empuja trabajo manual**, y el reto pide eliminarlo.
- **Camino comercial.** Fase 1: API de WhatsApp Business solo si el CDE acepta el costo variable.
- **Corte.** Correo (v1).

### N-10 Ingestión asistida por IA con humano en el circuito

- **Qué es.** Para los «datos dispersos» (hojas, actas, notas), un modelo **propone** campos estructurados y la persona del CDE acepta o corrige antes de guardar. Nunca escribe sin confirmación.
- **Evidencia.** Débil. La búsqueda no encontró un estudio que mida extracción de notas a campos de CRM; sí hay evidencia cercana de que la revisión humana mejora la fiabilidad y de que la exactitud cambia con el esquema y el modelo (resultados en texto clínico, no aplicables tal cual). La Ley 1581 exige analizar la transferencia internacional de datos personales (F-22, NV-36).
- **Requisitos propuestos.**
  - **RF-44** (fase 3) Propuesta de campos con indicador de confianza y aceptación humana; **antes de activarla** se mide la exactitud por campo con una muestra etiquetada del CDE y se fija un mínimo. Criterio: Funcionalidad 60 (automatización); Diferenciador 15. ISO: Fiabilidad, Seguridad, Protección.
- **Rebanada de hackatón.** **0 h.** Sigue `RF-29`/`W-01` en «Won't» (`13` D-10B). En el pitch: «IA con la persona en el circuito, medida campo por campo, después del piloto».
- **Riesgos.** Altos (`13` D-10B): inyección de instrucciones, datos a terceros, no determinismo ante el jurado técnico.
- **Corte.** No se construye ahora.

### N-11 Clasificación con vigencia: CIIU Rev. 5 A.C. y tamaño por regla legal

- **Qué es.** Dos decisiones de datos que evitan retrabajo: (a) la empresa guarda `ciiu_codigo` y `ciiu_version`, con una tabla de equivalencias a los 17 sectores; (b) el **tamaño** se calcula con el Decreto 957 de 2019 a partir de ingresos anuales y macrosector, no se digita.
- **Evidencia.** F-13: el DANE oficializó la CIIU Rev. 5 A.C. (Resolución 0992 del 6-ago-2026) y dio dos años de transición a las entidades que administren registros para estadística oficial (NV-33: texto no leído). F-12: umbrales en UVT por macrosector (`01` §3.4; NV-31, NV-32). F-01: el conjunto abierto trae CIIU, y la revisión que usa `[NO VERIFICADO]` (NV-41).
- **Contradicción con v1.** `21_catalogos.csv` define rangos de ingresos fijos (I1–I5, el último «más de 1.000 millones») y deja el criterio de tamaño abierto (PA-06). Con la UVT de 2025 (49.799 pesos, secundaria) la microempresa de servicios llega a unos $1.643 millones, la de manufactura a unos $1.173 millones y la de comercio a unos $2.229 millones: **el rango «más de 1.000 millones» mezcla micro, pequeña y mediana**, así que con esos rangos no se puede derivar el tamaño. Ver C-51 en `05`.
- **Requisitos propuestos.**
  - **RF-45** Columnas `ciiu_codigo` y `ciiu_version` en `empresas` y tabla `ciiu_equivalencias(version, codigo, sector_id)`. Criterio: Funcionalidad 60 (calidad de datos), Negocio 15 (vigencia legal). ISO: Flexibilidad, Mantenibilidad.
  - **RF-46** (fase 1) Tamaño calculado por regla (ingresos, macrosector, valor de la UVT del año) con mostrar «Calculado por Decreto 957/2019». Criterio: Funcionalidad 60. ISO: Adecuación funcional.
- **Rebanada de hackatón.** **0,1 h de Santiago** dentro de T-11a (dos columnas nulas en el esquema raíz); sale del colchón de S en A y de B (0,25 h → 0,15 h). La tabla de equivalencias y la regla de tamaño no se programan; el catálogo de ingresos se **deja como está** y se registra la decisión en `05` (PA-38).
- **Camino comercial.** Fase 1. Cumplimiento normativo como argumento de venta a centros que reportan estadística.
- **Riesgos.** Que el CDE ya use otra clasificación de sectores (PA-07, PA-35).
- **Corte.** Sin columnas (se añaden con migración en la fase 1).

### N-12 Accesibilidad como puerta a clientes públicos

- **Qué es.** Declarar y comprobar WCAG 2.2 nivel AA en los flujos del camino dorado.
- **Evidencia.** F-07: WCAG 2.2 es Recomendación W3C (versión 12-dic-2024) y añade 9 criterios; F-23: la Resolución 1519 de 2020 exige WCAG 2.1 AA a los sujetos de la Ley 1712 desde el 1-ene-2022 (resumen secundario; qué CDE son sujetos obligados: NV-34). `16` ya contiene contrastes calculados y T-96 la lista rápida de accesibilidad.
- **Requisitos propuestos.**
  - **RNF-18** Los 8 pasos del camino dorado cumplen WCAG 2.2 AA (con foco visible no tapado, tamaño mínimo de objetivo y entrada no redundante) verificado con la lista de T-96. Criterio: Funcionalidad 60; Negocio 15. ISO: Capacidad de interacción (inclusividad).
- **Rebanada de hackatón.** **0 h**: T-96 ya reserva 0,25 h de María Paula para accesibilidad. Solo cambia el nombre de la norma de referencia en `08`.
- **Riesgos.** Declarar AA sin haberlo probado; se declara solo lo que pasó T-96.
- **Corte.** Lista de T-96 sin declaración.

### N-13 Red de CDE y comparación entre instituciones

- **Qué es.** Con varias instituciones usando el producto, cada una puede compararse con el agregado anónimo de la red.
- **Evidencia.** F-09: 15 CDE en Santander con el mismo método (10 de la CCB y 5 con aliados, entre ellos la UNAB). F-10: 117 CDE del SENA (cifra de 2018). Los competidores de inteligencia de ecosistema comparan contra pares (F-19) pero con empresas de capital de riesgo (`02` §1 C).
- **Requisitos propuestos.**
  - **RF-47** (fase 3) Agregados anónimos entre instituciones con la misma regla k de RNF-16. Requiere decidir multi-institución (W-04, «Won't»).
- **Rebanada de hackatón.** **0 h.** Es un argumento para el jurado de negocio, no una función. `13` D-14 descartó el multi-tenant real por riesgo de fuga de datos; sigue vigente.
- **Riesgos.** Alto: aislamiento de datos, gobernanza entre instituciones.
- **Corte.** No se construye ahora.

## 4. Resumen de horas y de dónde salen

| Concepto | Quién | Horas | Fuente del tiempo | Condición |
|---|---|---:|---|---|
| RF-31 dígito de verificación del NIT (N-01) | S | 0,25 | Colchón de S en A (1,25 h); en B, tiempo liberado si G-02 o G-06 cortan su opción (0,75 h cada una) | Solo después de que H1 pase a las 19:00 (G-01) |
| RF-45 columnas CIIU (N-11) | S | 0,10 | Colchón de S (A: 1,25 h; B: 0,25 h) | Siempre |
| RF-34 `origen` en el esquema (N-02) | S | 0 | Se decide antes de T-11a, no es trabajo extra | Siempre |
| RF-36 desglose de señales (N-03) | S | 0 | Dentro de T-12x (0,75 h) | Solo en B |
| RF-37 y RF-38 definiciones de KPI (N-04) | S, MP | 0 | Dentro de T-16 y T-45 | Siempre |
| RF-40 campos de insignia (N-06) | MP | 0 | Dentro de T-43a | Siempre |
| RNF-18 referencia WCAG 2.2 (N-12) | MP | 0 | Dentro de T-96 | Siempre |
| Captura de la API real para el pitch (N-01) | MP | 0 | Reemplaza la diapositiva «siguiente paso» (T-95) | Siempre |
| RF-43 WhatsApp en un clic (N-09) | J | 0,25 | Colchón de J (0,5 h) | **Solo si se ratifica C-52** y el CDE responde Q-34 |
| **Total en la ventana** | | **0,35 h (0,60 h con N-09)** | | Equipo en A: 3,25 h de colchón → 2,9 h |

Todo lo demás (N-05, N-06 emisión, N-07, N-08, N-10, N-13, RF-32, RF-33, RF-39 a RF-42, RF-44, RF-46, RF-47) cuesta **0 h** en la ventana y entra en la hoja de ruta de `04`.

## 5. Qué se puede decir en el pitch y qué no (complementa `02` §2 y `18`)

| Se puede decir | No se puede decir |
|---|---|
| «El dato oficial del registro mercantil es abierto y se consulta con el NIT; en las herramientas que revisamos, ninguna de seguimiento de emprendedores lo usa.» | «Somos los únicos» / «nadie lo hace» |
| «Medimos impacto con las definiciones del modelo SBDC y separamos lo declarado de lo verificado.» | Cifras de impacto de la UNAB (los datos son sintéticos) |
| «Con el NIT podemos preguntarle al registro cuántas de las empresas que acompañamos siguen activas.» | «Aumentamos la supervivencia» |
| «Las insignias se definen para poder emitirse como credenciales verificables.» | «Ya emitimos credenciales Open Badges» |
| «IA con la persona en el circuito, medida campo por campo, después del piloto.» | «Usamos IA» (RF-29 está fuera) |

## 6. Pasos

1. Ratificar o rechazar cada candidato en T-01 (10:00 del 28-oct) con la tabla de §4; los rechazados quedan en la hoja de ruta de `04`.
2. Santiago agrega `origen`, `ciiu_codigo` y `ciiu_version` al esquema raíz de T-11a **antes** de crear la primera migración (0,1 h).
3. Julián verifica que los NIT de los 7 casos de `21_casos_demo.md` y del `DemoSeeder` (T-30) tienen dígito de verificación válido con el algoritmo de F-24; los que no, se corrigen en la semilla.
4. María Paula incluye una captura de la consulta a la API real (`01` §3.2) en la plantilla de diapositivas P-07, con fecha de consulta visible.
5. A las 19:00 (G-01) se decide RF-31 (se programa después de la cena si H1 pasó); a la 1:30 (congelamiento) se decide N-09.
6. Después del pitch se ejecuta `04` §4 (fase 1).

## Criterio de aceptación

1. Cada candidato tiene dolor, evidencia con ID de `01`, requisito con ID, criterio y ISO 25010:2023, demo o motivo de no tener, horas y fuente del tiempo, riesgos y corte.
2. La suma de horas de §4 no supera el colchón de A y, en B, las horas de S solo ocurren con la condición escrita.
3. Ninguna frase de §5 «Se puede decir» afirma exclusividad ni cifras de impacto de la UNAB.
4. Los NIT de las semillas pasan la validación de RF-31 antes de la V1 (T-91).
