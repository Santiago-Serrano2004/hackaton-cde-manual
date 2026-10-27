# 13 · Factores diferenciadores puntuales (Ronda 2, F13)

**Objetivo.** Evaluar 15 candidatos a diferenciador, medir su costo **incremental sobre el plan v1** (`07` §5), decidir cuáles entran y de dónde sale el tiempo. Todo lo que sigue es `PROPUESTA` salvo que cite una fuente.

**Entradas.** `inputs/02_presentacion_CDE.md` (diapositivas 3, 4, 6, 7), `01_requisitos.md`, `02_alcance_mvp.md` (D-05), `07_plan_construccion.md`, `09_negocio_pitch.md` §1–§2, `12_verificacion.md`.

**Qué es y qué no es "diferenciador" aquí.** Por el TyC (diapositiva 7) el criterio *Componente innovador y diferenciador* (15 pts) pregunta "qué hace diferente la propuesta frente a otras alternativas"; pero los 3 jurados técnicos puntúan los 60 pts de Funcionalidad, que incluyen "facilidad de uso, coherencia, nivel de desarrollo alcanzado, automatización del trabajo manual y operativo del CDE y cumplimiento de ISO/IEC 25010". Un candidato solo vale si **además** se ve como funcionalidad completa. Por eso este archivo prefiere *elevar* lo que v1 ya tiene como Must (buscador, línea de tiempo, duplicados, QR, recomendación, portal, gamificación, reportes) antes que añadir módulos.

## 1. Reglas de evaluación

1. **Costo incremental** = horas extra sobre la tarea de v1 que ya existe (columna "Base v1"). Si no existe tarea, es costo completo.
2. **Puntos que defiende.** El TyC no reparte los 60 pts por sub-aspecto. Convención de este archivo (`PROPUESTA`, no es la rúbrica): se cuentan 6 aspectos de Funcionalidad que el TyC nombra (respuesta al problema, facilidad de uso, coherencia, nivel de desarrollo, automatización, ISO 25010), 10 pts de referencia cada uno. "Mueve" indica qué aspecto(s) alimenta; no es una promesa de puntaje.
3. **Evidencia comercial.** `09` §1 reconoce que la comparación es parcial y que HubSpot, Salesforce, Airtable y software de aceleradoras quedaron `[NO VERIFICADO]` (NV-20..NV-25; F12 solo confirmó Airtable Team US$20/usuario/mes anual, airtable.com/pricing, 26-oct-2026). **No se puede afirmar** "ninguna alternativa lo ofrece". La redacción permitida ante el jurado es: *"en las alternativas que revisamos, ninguna combina X con Y para este proceso"*. Los patrones de interfaz (paleta de comandos, QR, radar) no son novedad; la diferencia es **qué se resuelve con ellos** en el CDE.
4. **Riesgo técnico** B/M/A (bajo/medio/alto) y corte si falta tiempo.
5. Tiempo en horas efectivas por rol: S = Santiago, J = Julián, MP = María Paula.

## 2. Los 15 candidatos

Dolor = cita de `inputs/02_presentacion_CDE.md` o `inputs/01_TyC_y_cronograma_CDE.md` §5.

### D-01 Buscador global tipo paleta de comandos (Ctrl+K), tolerante a errores
- **Dolor:** criterio "consultar el historial completo de una empresa en menos de un minuto" (TyC §5; RF-28, CRI-01).
- **Mueve:** respuesta al problema, facilidad de uso. **ISO:** AF, CI, ED.
- **Demo 20 s:** Ctrl+K → escribir "pamaderia" → aparece "Panadería Dulce Hogar" → Enter → ficha con línea de tiempo. Se cronometra en pantalla.
- **Base v1:** T-13 (búsqueda con `pg_trgm`, 2,5 h S). **Incremental:** UI de paleta con grupos (Empresas, Eventos, Contactos), atajos y resultados recientes: MP 0,5 h; endpoint agrupado: S 0,25 h. **Total +0,75 h.**
- **Riesgo:** B. `cmdk` 1.1.1 (MIT) peer React ^18‖^19 pero sin publicar desde mar-2025 (`12` §2.3); si falla con React 19.3.1, diálogo propio con lista (misma UX, +0,25 h).
- **Alternativa comercial:** patrón común en productos SaaS (no verificado); lo propio es que busca **por tolerancia a errores sobre datos del CDE** y llega a la línea de tiempo.
- **Corte:** si falta tiempo, queda barra de búsqueda normal (v1).

### D-02 Duplicados: puntuación de similitud, vista lado a lado, fusión con deshacer
- **Dolor:** "sin duplicados"; "datos duplicados, contradictorios o incompletos" (TyC §5; RF-02, RF-03, DOL-04).
- **Mueve:** respuesta al problema, coherencia, nivel de desarrollo. **ISO:** AF, FI, SE (rastro).
- **Demo 20 s:** al crear "Panaderia Dulce Hogar S.A.S" aparece banner "95 % de similitud con …"; botón *Comparar*: dos columnas con diferencias resaltadas; *Fusionar*; toast "Fusionado. Deshacer (30 s)"; clic en *Deshacer* restaura.
- **Base v1:** T-12 (detección y fusión transaccional, 1,5 h S). **Incremental:** puntuación compuesta (NIT normalizado exacto = 100; correo exacto = 90; similitud de nombre `pg_trgm`) y almacenamiento del estado previo en `fusiones` para deshacer: S 0,75 h; UI lado a lado: MP 0,25 h. **Total +1,0 h.**
- **Riesgo:** M (la reversión debe restaurar historial movido; mitigar guardando los IDs movidos en la fila de fusión y probando con los 12 duplicados sembrados).
- **Alternativa comercial:** CRMs suelen ofrecer detección/fusión de duplicados (no verificado en esta sesión); el valor propio es la **puntuación explicable + deshacer + auditoría** sobre datos con NIT/correos contradictorios.
- **Corte:** sin deshacer (queda fusión con confirmación y soft delete, RNF-12).

### D-03 Puntaje de calidad de datos por ficha y global, con tareas automáticas
- **Dolor:** solo 180 de 497 empresas (36 %) tienen sector y 184 (37 %) tamaño (TyC §5; RF-04, DOL-04).
- **Mueve:** automatización, respuesta al problema. **ISO:** AF, FI, MA.
- **Demo 20 s:** panel muestra "Calidad de la base: 72 %" (completitud + consistencia); lista "fichas por completar" con 3 clics para abrir una; al completarla el puntaje sube y el emprendedor gana puntos (RF-17).
- **Base v1:** RF-04 es Should y no tiene tarea. **Costo completo:** cálculo (ponderación fija: completitud de 8 campos clave 70 %, consistencia de formatos NIT/correo/teléfono 30 %) y endpoint: S 0,5 h; tarea automática (job que crea la tarea "completar sector" y notifica): J 0,25 h; UI: MP 0,5 h. **Total +1,25 h.**
- **Riesgo:** B.
- **Alternativa comercial:** no verificada.
- **Corte:** queda solo el % global y la lista filtrada (RF-04 mínimo, ≈ 0,5 h).

### D-04 Línea de tiempo unificada de la empresa
- **Dolor:** "reconstruir el historial … sin registrar dos veces" (TyC §5; RF-14, RF-16, DOL-03).
- **Mueve:** respuesta al problema, coherencia. **ISO:** AF, CI.
- **Demo 20 s:** desde el buscador, ficha con ≥ 15 hitos de ≥ 5 tipos (proyecto, diagnóstico, cita, plan, evento, capacitación), con filtros por tipo y año.
- **Base v1:** T-15 (1,5 h S) más pestaña. **Incremental:** acabado visual (iconos por tipo, agrupación por semestre, hitos colapsables): MP 0,5 h. **Total +0,5 h.**
- **Riesgo:** M (consultas; ya hay tope de 12 SQL en `07`).
- **Corte:** lista cronológica simple (v1).
- **Nota:** es el eje de la demo (`02` §5 paso 2); no debe cortarse.

### D-05 Diagnóstico de madurez con radar y evolución en el tiempo
- **Dolor:** "estado de madurez … y su evolución" (TyC §5; RF-05, RES-02).
- **Mueve:** respuesta al problema. **ISO:** AF.
- **Demo 20 s:** radar con dos polígonos (primer diagnóstico vs. último), delta por dimensión.
- **Base v1:** T-41 (1,5 h MP) con gráfica de evolución. **Incremental:** radar con `recharts` 3.10.1 en lugar de líneas: MP 0,25 h. **Total +0,25 h.** `recharts` incluye radar `[NO VERIFICADO en la doc; confirmar el componente de radar en la plantilla]`.
- **Riesgo:** B. **Corte:** gráfica de líneas (v1).

### D-06 Asistencia con QR y vista en vivo de inscritos frente a asistentes
- **Dolor:** "contrastar inscritos vs. asistentes" (TyC §5; RF-12, CRI-04, DOL-07).
- **Mueve:** automatización, respuesta al problema. **ISO:** AF, FI.
- **Demo 20 s:** en una pantalla, QR del evento; el celular lo abre, marca asistencia; en el panel suben "Asistentes 18/24" y el listado nominal sin recargar.
- **Base v1:** T-23/T-24 (QR y asistencia ya en alcance). **Incremental:** actualización de la vista con *polling* cada 5 s (no WebSockets: menos riesgo): J 0,5 h. El QR se genera con `qrcode.react` 4.2.0 (MIT); el celular escanea con la cámara nativa y abre la URL, **sin librería de escaneo** (`html5-qrcode` 2.3.8 no se publica desde abr-2023: descartada). **Total +0,5 h.**
- **Riesgo:** M (celulares y red del laboratorio, PA-16). **Corte:** asistencia por lista con casillas (v1).

### D-07 Convocatorias segmentadas y recomendador explicable
- **Dolor:** "citas, eventos y capacitaciones sin segmentar … a quién interesan" (TyC §5; RF-10, RF-27, DOL-06).
- **Mueve:** respuesta al problema, diferenciador. **ISO:** AF, CI.
- **Demo 20 s:** dos emprendedores de perfil distinto ven ofertas distintas, cada una con "porque tu sector es Alimentos y tu brecha mayor es mercadeo".
- **Base v1:** T-25 (0,75 h J). **Incremental:** segmentación (RF-27, Should): lista filtrada → "enviar invitación" con registro de a quién se convocó: J 0,5 h. **Total +0,5 h.**
- **Riesgo:** B (reglas, no aprendizaje automático). **Corte:** solo recomendación (v1), sin convocatoria.

### D-08 Portal "Mi ruta" del emprendedor
- **Dolor:** "visibilidad de su proceso" (TyC §5; RF-13, CRI-05, DOL-08).
- **Mueve:** facilidad de uso, respuesta al problema. **ISO:** CI, SE.
- **Demo 20 s:** entra el emprendedor: etapa actual, compromisos pendientes, próxima cita, oferta recomendada y puntos.
- **Base v1:** T-44 (3,0 h MP). **Incremental:** 0 h si se hace junto con D-09 (el mapa de ruta *es* el portal); si no, +0,25 h por la tarjeta "siguiente mejor acción". **Total ≈ +0,25 h.**
- **Riesgo:** B. **Corte:** tres bloques simples (v1).

### D-09 Gamificación como mapa de ruta ligado a hechos reales
- **Dolor:** "módulo de formación por recompensas" intuitivo y divertido (TyC §5, diap. 3; RF-17, RF-18, CRI-09).
- **Mueve:** facilidad de uso, respuesta al problema, diferenciador. **ISO:** CI, AF.
- **Demo 20 s:** el emprendedor cierra un compromiso; en el mapa, el nodo se ilumina, suben los puntos (+30), se desbloquea una insignia con animación breve; los puntos salen de **hechos del acompañamiento**, no de ver videos.
- **Base v1:** T-43 (2,5 h MP, back) y T-44 (3,0 h MP, front con lista de retos). **Incremental:** mapa con nodos y camino (SVG propio, sin librería de mapas) y animación `motion` con respeto a "reducir movimiento": MP 1,0 h. **Total +1,0 h.**
- **Riesgo:** M (tentación de pulir). **Corte:** lista de retos con barra de progreso (v1).
- **Evidencia:** la bibliografía de `06` §7 (Hamari 2014; Sailer y Homner 2020) solo respalda efectos "positivos y pequeños" (cifras de NV-16 sin verificar); no prometer aumento de participación sin medirlo.

### D-10 Preguntas de investigación en lenguaje natural
Dos variantes:
- **A. Preguntas guiadas (consultas parametrizadas).** Catálogo de 6 preguntas con listas desplegables (sector, dimensión, periodo): "¿Cuáles son las mayores brechas del sector X?", "¿Qué empresas no tienen diagnóstico en 12 meses?", etc. Ejecutan vistas SQL fijas con parámetros enlazados. Deterministas, auditables, rápidas, sin salir de la red.
- **B. Lenguaje natural con IA (texto → consulta).** Un modelo traduce la frase a SQL.
- **Dolor:** CRI-10 "responder preguntas de investigación con datos propios" (RF-22).
- **Mueve:** respuesta al problema, diferenciador. **ISO:** AF, SE, PR.
- **Demo 20 s (A):** elegir "Alimentos" → tabla y barra de brechas por dimensión + lista de empresas afectadas, en ≤ 3 interacciones (criterio de RF-22).
- **Base v1:** T-45 (1,5 h MP) y T-16 (1,25 h S). **Incremental A:** catálogo y vistas: S 0,5 h; selector y render: MP 0,25 h. **Total +0,75 h.** Un cuadro de texto que *busca entre los títulos de las preguntas* (misma tolerancia que D-01) da la sensación de "pregúntale al sistema" sin IA (+0,25 h MP, opcional).
- **Riesgos de B:** (1) inyección de instrucciones y de SQL; (2) consultas costosas o sin límite; (3) datos personales enviados a un tercero (Ley 1581, RNF-13); (4) respuestas no deterministas ante el jurado técnico; (5) depende de internet, de una clave y de cuota (PA-16); (6) costo mínimo ≥ 4 h incluso con un rol de base de datos de solo lectura y vistas permitidas. Decisión: **A en el MVP; B queda W (RF-29)** y se nombra en el pitch como evolución con las salvaguardas listadas.
- **Corte de A:** tres preguntas fijas.

### D-11 Reporte de impacto en un clic (PDF/Excel)
- **Dolor:** "documentar y medir impacto toma días" (RF-21, DOL-09, CRI-08).
- **Mueve:** automatización. **ISO:** AF, CO.
- **Demo 20 s:** botón *Reporte de impacto 2026-2*: se descarga en ≤ 10 s con las mismas cifras del dashboard.
- **Base v1:** T-16 (1,25 h S) con PDF/CSV/XLSX. **Incremental:** **−0,5 h**: Excel y PDF son los formatos que más tiempo comen; propuesta: CSV con UTF-8 BOM (abre en Excel sin corromper tildes, RNF-10) + **vista imprimible** (CSS de impresión) que el navegador guarda como PDF; se evita `barryvdh/laravel-dompdf` y `maatwebsite/excel` en el camino crítico (quedan instalados por si sobra tiempo). **Total −0,5 h.**
- **Riesgo:** B. **Corte:** solo CSV.
- **Contradicción con v1** (RF-21 pide PDF/CSV/XLSX): ver §5.

### D-12 Modo demostración con datos sintéticos y botón de reinicio
- **Dolor:** auditabilidad y repetibilidad de la demo (RNF-14); privacidad (RNF-13).
- **Mueve:** nivel de desarrollo, confiabilidad. **ISO:** FI, SE, FL.
- **Demo 20 s:** (en ensayo y V2) el administrador pulsa *Restablecer datos de demostración*; en < 3 min la base vuelve al estado conocido y se ve un aviso "Datos sintéticos".
- **Base v1:** T-30 (seeder 3,0 h) y `migrate:fresh --seed` en consola. **Incremental:** comando `demo:reset` con confirmación + botón solo visible si `APP_DEMO=true` y rol admin; protección: nunca activo en producción real: J 0,5 h. **Total +0,5 h.**
- **Riesgo:** M (borra datos; se protege con variable de entorno y confirmación escrita). **Corte:** solo consola.

### D-13 ISO/IEC 25010 visible: panel de salud, auditoría navegable, roles en pantalla
- **Dolor:** el TyC puntúa ISO 25010 dentro de los 60 pts de Funcionalidad; RF-26, HU-24.
- **Mueve:** ISO, coherencia. **ISO:** SE, FI, MA, ED.
- **Demo 20 s:** pantalla del administrador con tarjetas por característica (Seguridad: 5 roles, N acciones auditadas hoy; Fiabilidad: último respaldo, `/health` en verde; Desempeño: p95 de la última medición) y la auditoría filtrable por usuario/empresa/fecha.
- **Base v1:** T-03 (`/health`), T-10 (auditoría), RF-26. **Incremental:** vista de auditoría con filtros y tarjetas: MP 0,5 h; endpoint de métricas simple: S 0,25 h. **Total +0,75 h.**
- **Riesgo:** B. **Corte:** solo auditoría filtrable (HU-24).

### D-14 Replicabilidad multi-institución
- **Dolor:** pregunta de negocio "qué tan replicable, escalable y vendible" (diap. 7; RN-02).
- **Mueve:** negocio (15 pts). **ISO:** FL.
- **Demo 20 s:** una diapositiva y, si se quiere, la prueba de que `docker compose up` levanta otra instancia con otro nombre y logotipo por variables de entorno (RNF-11).
- **Costo:** **0 h de código** si se limita a configuración por variables (nombre, colores, catálogos). Multi-tenant real (aislar datos por institución) costaría ≥ 6 h y aumenta el riesgo de fuga de datos personales: **descartado** (`09` §3.5 ya propone despliegue por institución).
- **Riesgo:** B. **Corte:** solo argumento oral.

### D-15 Tablero de brechas (mapa de calor sector × dimensión)
- **Dolor:** "analizar brechas por sector y tamaño de empresa, estado de formalización y resultados de las intervenciones" (diap. 4, punto 03; RF-20, RF-22).
- **Mueve:** respuesta al problema, diferenciador. **ISO:** AF, CI.
- **Demo 20 s:** matriz 17 sectores × dimensiones de madurez coloreada por brecha; clic en una celda abre la lista de empresas afectadas.
- **Base v1:** T-45 (1,5 h MP). **Incremental:** matriz y paleta secuencial accesible: MP 0,5 h. **Total +0,5 h.**
- **Riesgo:** B (con 17 filas es una tabla coloreada, sin librería). **Corte:** gráfica de barras por sector (v1).

## 3. Matriz valor-esfuerzo

Valor = efecto en la demo de 20 s sobre Funcionalidad/Diferenciador (A alto, M medio, B bajo). Esfuerzo = horas incrementales. Riesgo = técnico.

| ID | Candidato | Valor | Δ horas | Riesgo | Decisión |
|---|---|:-:|:-:|:-:|---|
| D-04 | Línea de tiempo (acabado) | A | +0,5 | M | **Entra (Núcleo)** |
| D-01 | Paleta Ctrl+K tolerante | A | +0,75 | B | **Entra (Núcleo)** |
| D-02 | Duplicados con score, lado a lado, deshacer | A | +1,0 | M | **Entra (Núcleo)** |
| D-12 | Modo demo + reinicio | M (protege la demo) | +0,5 | M | **Entra (Núcleo)** |
| D-09 | Mapa de ruta gamificado | A | +1,0 | M | **Condicional (Nivel 2)** |
| D-03 | Calidad de datos + tareas | A | +1,25 | B | **Condicional (Nivel 2)** |
| D-10A | Preguntas guiadas | A | +0,75 | B | **Condicional (Nivel 2)** |
| D-15 | Mapa de calor de brechas | M-A | +0,5 | B | **Condicional (Nivel 2)**, se hace con D-10A |
| D-11 | Reporte en un clic con CSV + impresión | M | −0,5 | B | **Entra (ahorra tiempo)** |
| D-08 | Portal "Mi ruta" | M | +0,25 | B | Junto con D-09 |
| D-06 | QR con vista en vivo | M | +0,5 | M | Opcional si hay holgura (Nivel 3) |
| D-07 | Convocatoria segmentada | M | +0,5 | B | Nivel 3 |
| D-13 | Panel ISO visible | M | +0,75 | B | Nivel 3 (solo la auditoría filtrable es Núcleo por HU-24) |
| D-05 | Radar de madurez | M | +0,25 | B | Nivel 3 (barato; entra si T-41 termina antes) |
| D-14 | Multi-institución | M (negocio) | 0 | B | Solo argumento oral |
| D-10B | Lenguaje natural con IA | B hoy / riesgo A | ≥ +4 | A | **Descartado del MVP** (RF-29 W) |

## 4. Portafolio recomendado (5 diferenciadores + 1 transversal)

| # | Diferenciador | Candidatos | Δ horas bruto | Rol |
|---|---|---|---|---|
| 1 | **"Historial en 20 segundos":** paleta Ctrl+K + línea de tiempo | D-01, D-04 | +1,25 (S 0,25 · MP 1,0) | MP, S |
| 2 | **"Cero duplicados, con deshacer"** | D-02 | +1,0 (S 0,75 · MP 0,25) | S, MP |
| 3 | **"Calidad de datos que se mejora sola"** (puntaje + tareas + puntos) | D-03 | +1,25 (S 0,5 · J 0,25 · MP 0,5) | S, J, MP |
| 4 | **"Mi ruta": recompensas por hechos reales** | D-08, D-09 | +1,25 (MP) | MP |
| 5 | **"Del dato al conocimiento":** preguntas guiadas + mapa de calor de brechas | D-10A, D-15 | +1,25 (S 0,5 · MP 0,75) | S, MP |
| T | **Demo confiable** (modo demo + reinicio) | D-12 | +0,5 (J) | J |

Total bruto: **+6,5 h**. Esto es el **tope** de lo que el equipo puede construir si todo sale; no es un compromiso.

### 4.1 De dónde sale el tiempo

El plan v1 ya parte con déficit de 1,5–2,5 h por persona (`07` §5). **No hay horas libres**; todo lo nuevo se paga **sustituyendo** alcance y con puertas de decisión:

| Fuente del ahorro | Qué se recorta | Ahorro | A quién |
|---|---|---|---|
| A1 | Importación solo CSV, sin XLSX ni reversión (contingencia de `07` §7 convertida en decisión) | −0,5 h (T-14) | S |
| A2 | Reporte: CSV + vista imprimible (D-11) en vez de PDF/XLSX | −0,5 h (T-16) | S |
| A3 | Componentes ya hechos en el sistema de UI (F15/F16) en lugar de componentes propios | −0,5 h (T-40) `[estimación sin medir]` | MP |
| **Total ahorro** | | **−1,5 h** | |

**Balance por persona (horas sobre el plan v1, que ya tiene déficit):**

| Persona | Núcleo (1, 2, T) bruto | Ahorro | Neto Núcleo | Nivel 2 (3, 4, 5) bruto | Neto con todo |
|---|---|---|---|---|---|
| Santiago | +1,0 (0,25+0,75) | −1,0 | **0** | +1,0 (0,5+0,5) | +1,0 |
| Julián | +0,5 | 0 | **+0,5** | +0,25 | +0,75 |
| María Paula | +1,25 (1,0+0,25) | −0,5 | **+0,75** | +2,5 (0,5+1,25+0,75) | +3,25 |
| **Equipo** | **+2,75** | **−1,5** | **+1,25** | **+3,75** | **+5,0** |

Lectura honesta: con todo el portafolio el equipo carga **+5,0 h netas sobre un plan que ya está en déficit** y María Paula queda en +3,25 h, **no viable**. Por eso el portafolio se ejecuta por niveles con puertas:

| Nivel | Qué | Puerta para empezar | Si la puerta falla |
|---|---|---|---|
| **Núcleo** | 1 (D-01 + D-04), 2 (D-02), T (D-12), más A1–A3 | Decisión a las 10:00 del 28-oct (T-01) | — |
| **Nivel 2** | 3 (D-03), 4 (D-08 + D-09), 5 (D-10A + D-15) | H1 cumplido a las 19:00 **y** T-43 con puntos/niveles funcionando a las 23:30 | Se aplica el corte de cada candidato (la versión v1 de cada uno) |
| **Nivel 3** | D-05, D-06, D-07, D-13 | Solo si H2 se alcanza antes de las 23:30 | No se hacen |

Distribución para equilibrar: D-03 sobre el trabajo de Julián (tareas automáticas) y D-10A/D-15 backend sobre Santiago libera a MP; si aun así MP supera +1,5 h, se descarta D-09 (mapa) y se queda la lista de retos de v1. Esta regla evita decidir de madrugada.

## 5. Contradicciones con v1 (a registrar y propagar en F14)

| # | v1 dice | F13 propone | Motivo | Decide |
|---|---|---|---|---|
| C-11 | RF-21: reporte PDF/CSV/XLSX (`01`); T-16 con exportación a los tres formatos | CSV (UTF-8 con BOM) + vista imprimible a PDF en el camino crítico; XLSX y dompdf solo si sobra tiempo | Libera 0,5 h; el criterio CRI-08 solo exige "reporte con un clic" | Santiago |
| C-12 | RF-04 completitud es Should (`01`, `02` §3.2) | Sube a Must como parte de D-03 (Nivel 2) | El 36 %/37 % de sector/tamaño es el dato más fuerte del reto | Equipo |
| C-13 | RF-27 convocatoria segmentada es Should | Se queda Should; pasa a Nivel 3 | Costo/valor | Equipo |
| C-14 | Decisión D-05 de `02` §1 ("3 diferenciadores") | Se amplía a 5 + 1 transversal, con puertas | Este archivo | Equipo |

## 6. Pasos para decidir (T-01, 15 min a las 10:00 del 28-oct)

1. Leer las respuestas del CDE (`10_preguntas_cde.md`): ¿priorizan duplicados, calidad de datos, brechas o recompensas?
2. Confirmar Núcleo y A1–A3.
3. Reordenar Nivel 2 según esas respuestas (el CDE puede subir D-03 o D-10A por encima de D-09).
4. Registrar la decisión en `docs/DECISIONES.md` (ID, fecha, quién).

## Criterio de aceptación

1. Los 15 candidatos tienen dolor citado, aspecto que mueve, ISO, demo de 20 s, horas por rol, riesgo, evidencia declarada y corte.
2. Cada hora nueva tiene una fuente de ahorro o una puerta (§4.1) y el balance por persona está calculado.
3. Ninguna afirmación del tipo "ninguna alternativa lo ofrece" aparece sin la salvedad de §1.3.
4. Las contradicciones C-11..C-14 están en `99` §K y en `PROGRESO.md`.
