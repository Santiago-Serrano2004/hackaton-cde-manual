# 06 · Requerimientos funcionales detallados de la Ronda 4 (síntesis y complemento)

**Objetivo.** Convertir la investigación de `01`–`05` en requerimientos que un agente de programación pueda implementar sin decidir nada: flujos, reglas, datos, contratos de API, interfaz, errores, criterios de aceptación con números y pruebas. Incluye mi análisis de lo que falta y los requisitos que añado.

**Entradas.** `01`–`05` de esta carpeta; `01_requisitos.md` (RF-01..RF-30), `04_datos.md` §3, `05_arquitectura.md` (prefijo `/api/v1`, errores `{message, errors{}}`, códigos 200/201/204/401/403/404/409/422/429), `14_backlog.md`, `20_plan_que_cabe.md`, `16_sistema_de_diseno.md`.

**Estado.** Todo es `PROPUESTA` hasta que los tres lo ratifiquen en T-01 (28-oct 10:00). Numeración: se conservan RF-31..RF-47 y RNF-15..RNF-18 de `05`; esta ronda añade **RF-48, RF-49, RF-50, RNF-19 y RNF-20**.

**Verificado en vivo para este archivo (27-oct-2026, sin escribir nada en ningún sistema):**
- El conjunto `c82u-588k` tiene 36 columnas; licencia `CC_40_BY_SA`; nombre exacto «Personas Naturales, Personas Jurídicas y Entidades Sin Animo de Lucro». Campos usados abajo: `nit`, `digito_verificacion`, `camara_comercio`, `matricula`, `cod_ciiu_act_econ_pri`, `cod_ciiu_act_econ_sec`, `ciiu4`, `fecha_matricula`, `fecha_renovacion`, `ultimo_ano_renovado`, `estado_matricula`, `organizacion_juridica`, `fecha_actualizacion`.
- Formato real: fechas como texto `AAAAMMDD` (p. ej. `20250613`); `nit` sin dígito de verificación (9 dígitos en sociedades); `organizacion_juridica` en texto como `SOCIEDADES POR ACCIONES SIMPLIFICADAS SAS`.
- **El dato oficial no es perfecto:** en 1 de 3 filas de prueba `cod_ciiu_act_econ_pri` (4321) y `ciiu4` (3314) apuntan a actividades distintas. Es un argumento a favor de «proponer y que una persona acepte», nunca de escribir solo.
- El algoritmo del dígito de verificación (pesos 3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71 de derecha a izquierda; `r = suma mod 11`; dígito = `r` si `r < 2`, si no `11 − r`) dio **8 de 8** vectores correctos, incluidos los 6 NIT sintéticos corregidos de C-50 (§5).

---

## 0. Análisis: qué sirve, qué falta y qué añado

**Lo sólido de la investigación.** (1) El registro mercantil abierto existe, es gratuito, se consulta sin clave y está comprobado en vivo. (2) La tesis «cada dato dice de dónde viene y cada impacto se puede comprobar» ordena lo que el plan ya tiene en una sola idea. (3) Las advertencias de honestidad (no decir «nadie lo hace», no mostrar impacto real con datos sintéticos, la propiedad intelectual sin resolver) protegen frente a preguntas hostiles.

**Lo que falta o es débil.**
1. **Casi todo cuesta «0 h» porque casi todo es diapositiva.** Los tres jurados técnicos puntúan 60 puntos sobre lo que ven funcionar. La tesis de procedencia solo es creíble si se **ve** en la interfaz; sin una señal visual consistente es retórica. Añado **RF-48** (sello de procedencia).
2. **El «0 h» de RF-34 no es cierto.** Guardar `origen` en el esquema es gratis, pero **escribirlo** en cada guardado (alta, edición, importación) es lógica. Lo estimo en 0,25 h (0,15 h en versión mínima). Corrijo la tabla de horas de `03` §4 en §8.
3. **La consulta al registro es la prueba más llamativa y la más barata de las que se pueden mostrar con datos reales, pero el plan la deja como captura.** Una consulta es una sola petición GET sin clave. El obstáculo no es técnico: los NIT sintéticos no existen en el registro, y mostrar una empresa real exige elegir una persona jurídica pública y declararlo. La dejo como **opción O-1** con respaldo (§3, RF-32), no como recomendación base: no cabe en A.
4. **El hilo «dato verificable» protege el dato, no el resultado del trabajo del CDE.** El reto pide pasar de diagnóstico a acción a impacto. Añado **RF-49** (de la brecha del diagnóstico a un compromiso sugerido y una oferta que la cierra), que convierte datos en acción, y **RF-50** (informe verificable para financiadores) como argumento comercial.
5. **Reglas de fórmula pendientes que bloquean la implementación:** la regla de «formalización vigente» del agente es más laxa que el plazo legal de renovación (la fecha límite del 31 de marzo está `[NO VERIFICADO]` en esta sesión); la identificación de NIT frente a cédula de 10 dígitos (C-55) no tenía regla. Las resuelvo en RF-31 y RF-32.

**Veredicto de producto.** La combinación ganadora para la hackatón no es «más funciones», sino **tres señales visibles y baratas** (aviso de dígito del NIT, sello de procedencia en cada campo, desglose de por qué dos fichas son el mismo negocio) más **una frase**. Lo demás es hoja de ruta con requisitos ya escritos para empezar el lunes.

---

## 1. Qué se ratifica en T-01 (recomendación mía)

| # | Requisito | Qué da | Horas (mi estimación) | En A | En B | Si no cabe |
|---|---|---|---:|:-:|:-:|---|
| 1 | RF-45 columnas CIIU | Evita migración con datos reales | S 0,10 | Sí | Sí | Migración en fase 1 |
| 2 | RF-34 procedencia de campos | Base de la tesis | S 0,25 (0,15 mínima) | Sí | **Mínima** | Se queda `auditoria` |
| 3 | RF-31 dígito del NIT | Demo de 20 s con dato real | S 0,25 | Sí, tras G-01 (19:00) | Solo si G-02 o G-06 liberan 0,25 h | Se queda la diapositiva |
| 4 | RF-48 sello de procedencia | Hace visible la tesis | MP 0,25 | Sí | Solo con colchón | Texto plano «Origen: …» |
| 5 | RF-36 desglose de señales | Duplicados explicables | 0 (dentro de T-12x) | — | Sí | Un porcentaje |
| 6 | RF-37 definiciones de KPI | Reporte con estándar | 0 (dentro de T-16/T-45) | Sí | Sí | KPIs sin definición |
| 7 | RF-40 campos de insignia | Credencial futura | 0 (dentro de T-43a) | Sí | Sí | Insignias internas |
| 8 | **O-1** consulta en vivo al registro (RF-32 «lite») | Prueba con dato oficial real | S ≈ 1,0 + MP 0,25 (sin medir) | **No** | Solo si G-02 **y** G-06 caen (liberan 1,5 h) | Captura previa en diapositiva |

Costo recomendado: **A = S 0,60 h + MP 0,25 h** (colchón S 1,25 → 0,65; MP 1,5 → 1,25). **B = S 0,25 h** (todo el colchón de S; cualquier extra viene de una compuerta caída). Estas horas son estimaciones mías; ninguna está medida.

---

## 2. Vocabulario y reglas transversales

**Origen del dato** (`origen`): `digitado` (persona del CDE), `importacion` (archivo), `registro_mercantil` (consulta aceptada), `emprendedor` (autoservicio), `sistema` (calculado).
**Estado de verificación** (`estado`): `verificado` (contrastado con fuente independiente: registro mercantil o documento adjunto), `declarado` (dicho por el emprendedor o digitado sin soporte), `por_revisar` (conflicto, dato incompleto o formato dudoso).
**Regla:** un valor pasa a `verificado` solo por una acción de una persona (aceptar propuesta del registro o adjuntar soporte), nunca por el sistema solo.

**Procedencia en datos.** Columna `procedencia jsonb` en `empresas` (migrable a tabla en fase 1), con una clave por campo crítico: `nit`, `razon_social`, `sector`, `tamano`, `formalizacion`, `correo_principal`. Estructura de cada clave: `{"origen":"importacion","estado":"declarado","fecha_dato":"2026-10-28","registrado_por":12,"confirmado_por":null,"fuente_ref":null}`. Los campos críticos no listados no llevan procedencia.

**Confianza de la ficha** (`confianza_ficha`, 0–100, calculada, **PROPUESTA**, parámetros en configuración): suma de `peso × valor` sobre los seis campos, con valor `verificado = 1,0`, `declarado = 0,6`, `por_revisar = 0,3`, vacío `= 0`. Pesos: `nit 0,25 · sector 0,20 · razon_social 0,15 · tamano 0,15 · formalizacion 0,15 · correo_principal 0,10`. Ejemplo: NIT verificado, razón social declarada, sector por revisar, tamaño vacío, formalización declarada, correo declarado → `0,25·1 + 0,15·0,6 + 0,20·0,3 + 0 + 0,15·0,6 + 0,10·0,6 = 0,25+0,09+0,06+0+0,09+0,06 = 0,55 → 55`. Es distinta de `completitud` (RF-04): mide **cuánto se puede confiar**, no cuántos campos hay.

---

## 3. Requerimientos detallados

### RF-31 · Validación del dígito de verificación del NIT y normalización segura (resuelve C-55)

- **Prioridad / fase.** Must condicional (después de G-01) / Hackatón. **Horas** S 0,25. **Criterio** Funcionalidad 60. **ISO** Adecuación funcional, Fiabilidad. **Tareas** T-11 (normalizadores), T-13 (alta con aviso), T-30 (semilla).
- **Historia.** Como persona del equipo CDE, cuando escribo o importo un NIT, quiero que el sistema me avise si el dígito de verificación no corresponde, para no guardar un NIT mal digitado y evitar duplicados falsos.
- **Reglas de interpretación del texto del NIT** (en orden; se aplican al texto tras quitar espacios, puntos y comas):

| # | Entrada | Regla | `nit_norm` | `dv_estado` |
|---|---|---|---|---|
| 1 | Contiene letras u otros símbolos (salvo un guion) | Rechazar | — | 422 `NIT_FORMATO` |
| 2 | Menos de 5 o más de 11 dígitos (sin contar un DV tras guion) | Rechazar | — | 422 `NIT_LONGITUD` |
| 3 | Con guion: `base-dv` | Base = antes del guion; DV = un dígito después | base | `ok` o `no_coincide` (§ cálculo) |
| 4 | Sin guion, 9 dígitos | Es la base; no hay DV | los 9 | `no_informado` (sin aviso) |
| 5 | Sin guion, 10 dígitos que **empiezan por 8 o 9** y cuyo último dígito es el DV de los 9 primeros | Se interpreta como base + DV | los 9 primeros | `inferido_ok` |
| 6 | Sin guion, 10 dígitos que empiezan por 8 o 9 y el último **no** es el DV de los 9 primeros | Se conserva completo; posible error | los 10 | `por_revisar` + aviso `NIT_FORMATO_DUDOSO` |
| 7 | Sin guion, otros largos (5–8 o 10–11 que no empiezan por 8/9) | Se trata como documento de persona natural; no se toca | todos los dígitos | `no_aplica` |

  La regla 5 y 6 resuelve C-55: las cédulas de 10 dígitos suelen empezar por 1; **que las sociedades empiezan por 8 o 9 está `[NO VERIFICADO]` en esta sesión** (se comprobó con datos reales de sociedades en 9 dígitos; falta contrastar la proporción de cédulas de 10 dígitos que empiezan por 8 o 9). Mientras no se verifique, el sistema **nunca descarta dígitos** en el caso 6 y 7.
- **Cálculo.** `DV(base)` con el algoritmo del encabezado. Vectores en §5.
- **Flujo principal.** (1) La persona escribe el NIT en el alta o edición. (2) Al salir del campo (blur), la interfaz llama a `GET /api/v1/nit/validar?valor=…`. (3) Si `dv_estado = no_coincide`, aparece bajo el campo: «El dígito de verificación no coincide con el NIT; esperado 8.» con enlace «Usar 8». (4) La persona puede guardar igual (el aviso no bloquea). (5) El `nit_norm` se calcula con la regla de la tabla y se guarda; `procedencia.nit.estado = declarado` salvo que el aviso haya sido aceptado y corregido (sigue `declarado`; `verificado` solo con RF-32).
- **Flujos alternos.** 3a. Si el servicio de validación falla (red), la interfaz no muestra aviso y el servidor valida al guardar (la regla vive en el servidor). 4a. Importación (T-14): el aviso se acumula en el reporte de errores del lote sin detenerlo; la fila entra con `dv_estado` guardado en `procedencia.nit`.
- **Contrato.**
  - `GET /api/v1/nit/validar?valor=999.100.200-1` → `200 {"entrada":"999.100.200-1","nit_norm":"999100200","dv_recibido":"1","dv_esperado":"0","dv_estado":"no_coincide","aviso":"El dígito de verificación no coincide con el NIT; esperado 0."}`
  - `POST/PUT /api/v1/empresas` aceptan `nit` (texto original) y devuelven `201/200` con `avisos:[{"codigo":"NIT_DV_NO_COINCIDE","campo":"nit","esperado":"0","recibido":"1","mensaje":"…"}]` cuando aplica. Un `nit_norm` ya existente en otra empresa sigue siendo `409` (duplicado exacto, RF-02).
- **Criterios de aceptación.**
  1. Dado `999.100.200-1`, cuando se valida, entonces `dv_esperado = 0` y `dv_estado = no_coincide`.
  2. Dado `999100200`, entonces `dv_estado = no_informado` y no aparece aviso.
  3. Dado `9001234568`, entonces `nit_norm = 900123456` y `dv_estado = inferido_ok`.
  4. Dado `9001234567`, entonces `nit_norm = 9001234567`, `dv_estado = por_revisar` y aviso `NIT_FORMATO_DUDOSO` (el v1 de `04` §3 trataba este valor como duplicado de `900123456`: **cambia**, ver C-50).
  5. Dado `1098765432`, entonces `nit_norm = 1098765432` y `dv_estado = no_aplica`.
  6. Dado `ABC123`, entonces `422` con `errors.nit = ["El NIT solo puede tener números, un guion y el dígito de verificación."]`.
  7. Los 8 vectores de §5 pasan en una prueba unitaria. La función es pura (sin base de datos).
- **Seguridad y privacidad.** El valor ingresado no se registra en logs de aplicación. La auditoría guarda el NIT solo dentro de la entrada de auditoría de la empresa.
- **Textos** (a `21_microcopy.md`): aviso, «Usar {esperado}», error `NIT_FORMATO`, error `NIT_LONGITUD`, «Formato por revisar».

### RF-34 · Procedencia de los campos críticos (esquema + escritura)

- **Prioridad / fase.** Must / Hackatón (esquema y escritura mínima). **Horas** S 0,25 (0,15 mínima: solo `origen` y `fecha_dato`). **Criterio** Funcionalidad 60, Diferenciador 15. **ISO** Adecuación funcional, Seguridad. **Tareas** T-11a (esquema), T-12, T-14.
- **Historia.** Como persona del CDE, quiero saber de dónde vino cada dato crítico de una empresa y cuándo, para decidir cuál creer cuando dos fuentes chocan.
- **Reglas.** (1) La columna `procedencia` se crea en la primera migración de `empresas` (no se añade después). (2) Un *hook* de guardado del modelo escribe, solo para los campos críticos que **cambiaron**, `origen`, `fecha_dato = hoy`, `registrado_por = usuario`, `estado = declarado`. (3) El `origen` lo decide el contexto: formularios de la interfaz → `digitado`; importación (T-14) → `importacion` con `fuente_ref = id del lote`; autoservicio del emprendedor (portal) → `emprendedor`; aceptar propuesta del registro (RF-32) → `registro_mercantil` y `estado = verificado`. (4) Solo la fusión de duplicados (T-12) puede copiar procedencia de una ficha a otra; al fusionar, **gana el valor con `estado` más fuerte** (`verificado` > `declarado` > `por_revisar`) y, a igualdad, el más reciente; la decisión se escribe en `auditoria`.
- **Contrato.** `GET /api/v1/empresas/{id}` incluye `procedencia` por campo. `PUT` no permite enviar `procedencia` (la calcula el servidor).
- **Criterios de aceptación.**
  1. Crear una empresa desde el formulario con NIT y razón social → ambas claves quedan `origen = digitado`, `estado = declarado`, `fecha_dato` de hoy.
  2. Importar un lote de 509 filas → los campos críticos de las filas creadas quedan `origen = importacion`.
  3. Editar solo el sector → únicamente `procedencia.sector` cambia de fecha; las demás claves no se tocan.
  4. Intentar enviar `procedencia` en un `PUT` → ignorado y registrado en auditoría como intento (`403` no, solo se ignora el campo).
  5. Fusionar dos fichas donde una tiene `nit.estado = verificado` y la otra `declarado` → la ficha destino conserva el `verificado`.
- **Pruebas.** Prueba de modelo (hook), prueba de importación, prueba de fusión con matriz de 3×3 de estados.
- **Corte.** Sin RF-34, se queda `auditoria` (T-10b) y RF-48 se muestra solo como «Origen: …» tomado de la auditoría.

### RF-48 (nuevo) · Sello de procedencia en la interfaz y confianza de la ficha

- **Prioridad / fase.** Should / Hackatón en A; con colchón en B. **Horas** MP 0,25 (anillo de confianza: +0,10 opcional). **Criterio** Funcionalidad 60 (capacidad de interacción), Diferenciador 15. **ISO** Capacidad de interacción, Fiabilidad. **Tareas** componente del sistema de diseño (`16`), E4/E5, T-19.
- **Historia.** Como persona del CDE, quiero ver junto a cada dato crítico si está verificado, declarado o por revisar, para saber qué puedo citar en un reporte sin dudar.
- **Diseño del componente `SelloProcedencia`.**
  - Tres estados, siempre con **icono y texto** (nunca solo color): `Verificado` (icono escudo con marca), `Declarado` (icono persona), `Por revisar` (icono triángulo). Paleta de `16` con contraste AA; el naranja `#F47B20` **no** se usa como color de texto (2,73:1).
  - Tamaño compacto (altura 24 px, objetivo táctil ≥ 24 × 24 px, WCAG 2.2 criterio 2.5.8). Enfocable con teclado; al activarse (clic, Enter o espacio) abre un *popover* con: «Origen: {origen legible} · {fecha} · registrado por {nombre} · confirmado por {nombre|—}».
  - Atributos: `aria-label="NIT: verificado, origen registro mercantil, 27 de octubre de 2026"`; el popover cierra con Esc y devuelve el foco.
  - Estados de carga (esqueleto de 24 px), vacío (sin sello si el campo está vacío) y error (sello neutro «Sin datos de origen»).
- **Dónde aparece.** Ficha de empresa (cada uno de los seis campos), comparación lado a lado de duplicados (RF-35, a ambos lados de cada campo), vista previa de importación (columna «Origen»).
- **Anillo `confianza_ficha`** (Could): anillo de 40 px en el encabezado de la ficha con el valor 0–100 y el texto «Confianza de la ficha: 55». Cálculo en el servidor (§2); el cliente solo muestra.
- **Criterios de aceptación.**
  1. La ficha de la empresa de demostración muestra 6 sellos; navegando con Tab se llega a cada uno en orden visual.
  2. Con lector de pantalla se anuncia estado, origen y fecha.
  3. Con la ficha del ejemplo de §2, el anillo muestra 55.
  4. Sin color (modo escala de grises), los tres estados siguen distinguiéndose.
  5. Con 497 empresas, la lista de empresas **no** carga procedencia por fila (solo en la ficha): el tiempo de respuesta de la lista no cambia (RNF-01).
- **Corte.** Texto plano «Origen: …».

### RF-35 · Origen y fecha en la comparación de duplicados

- Reutiliza `SelloProcedencia` en la vista lado a lado de T-19. Criterio: al fusionar, el usuario ve de cada lado `origen · fecha`, y la fila resaltada sugerida por la regla de RF-34 §4. Aceptación: en la fusión de la protagonista de `21_casos_demo.md`, la columna izquierda dice «importación», la derecha «digitado», y el valor propuesto es el de estado más fuerte. **Horas** 0 (dentro de T-19 en B).

### RF-36 · Duplicados con desglose de señales y niveles

- **Prioridad / fase.** Should (solo B) / Hackatón. **Horas** 0 incremental (dentro de T-12x). **Criterio** Funcionalidad 60. **ISO** Adecuación funcional, Capacidad de interacción.
- **Historia.** Como persona del CDE, cuando el sistema dice «posible duplicado», quiero ver **por qué** para decidir en segundos si fusiono.
- **Señales y pesos cualitativos.** `NIT_IGUAL` (decisiva), `CORREO_IGUAL` (decisiva), `NOMBRE_SIMILAR` (fuerte si similitud ≥ umbral alto de `12_verificacion.md` §2.5; media si ≥ umbral medio), `TELEFONO_IGUAL` (media), `MUNICIPIO_IGUAL` (refuerzo débil). **Los umbrales numéricos no se inventan aquí:** se toman de `12_verificacion.md` §2.5 y `T-12`.
- **Niveles.** `alta`: hay una señal decisiva o `NOMBRE_SIMILAR` fuerte con una señal media. `media`: `NOMBRE_SIMILAR` fuerte sola o media con otra media. `baja`: no se muestra.
- **Contrato.** `GET /api/v1/empresas/duplicados?nit=…&nombre=…&correo=…` y la respuesta `409` del alta incluyen `[{"candidato":{"id":31,"razon_social":"…"},"nivel":"alta","senales":[{"codigo":"NIT_IGUAL","fuerza":"decisiva","valor_a":"999100200","valor_b":"999100200"},{"codigo":"NOMBRE_SIMILAR","fuerza":"fuerte","valor_a":"…","valor_b":"…","similitud":0.95}]}]`.
- **Interfaz.** Banner: título «Posible duplicado ({nivel})» y una línea por señal con icono y texto; botón «Ver lado a lado».
- **Criterios de aceptación.**
  1. Con los 12 duplicados sembrados, ≥ 11 se detectan (RF-02) y cada uno trae ≥ 1 señal.
  2. Un caso con solo `MUNICIPIO_IGUAL` no genera candidato.
  3. El caso del duplicado de la protagonista (corregido según C-53 a `9991002000`) trae `NIT_IGUAL` y `NOMBRE_SIMILAR`.
- **Corte.** Un solo porcentaje (v1).

### RF-37 · Definiciones de los KPI de impacto (nombres y fórmulas)

- **Prioridad / fase.** Must (nombres) / Hackatón; resultados con estado, fase 2. **Horas** 0 (dentro de T-16 y T-45). **Criterio** Funcionalidad 60, Negocio 15. **ISO** Adecuación funcional, Compatibilidad.
- **Definiciones.** Cada KPI se muestra con un icono «i» que abre su definición (texto fijo, igual en la interfaz y en el PDF):

| KPI | Fórmula | Fuente en el sistema | ¿Hackatón? |
|---|---|---|:-:|
| Empresas atendidas | Empresas distintas con ≥ 1 intervención o cita realizada en el periodo | `intervenciones`, `citas` | Sí |
| Empresas con acompañamiento sostenido | Empresas con suma de duración de atenciones ≥ H horas en el periodo; H configurable (valor inicial **5 h, `PROPUESTA` por confirmar con el CDE, Q-32**) | `intervenciones.duracion_min` | Solo si el campo existe; si no, muestra «No disponible» (no se inventa) |
| Empleos creados / retenidos | Suma de resultados `empleos_creados` / `empleos_retenidos` del periodo, separados por estado | `resultados_impacto` | No (fase 2) |
| Variación de ventas | (ventas del periodo − ventas de referencia) / ventas de referencia, por empresa; agregado como mediana y como número de empresas con dato | `resultados_impacto` | No |
| Capital gestionado | Suma de montos conseguidos (crédito, capital semilla, recursos en especie) | `resultados_impacto` | No |
| Empresas nuevas | Empresas con `fecha_inicio_actividad` dentro del periodo y atendidas por el CDE | `empresas` | Sí |

- **Criterios de aceptación.** (1) El reporte muestra los seis nombres exactos; los no disponibles dicen «No disponible en esta versión» y no muestran cero. (2) La cifra de «Empresas atendidas» coincide con la consulta SQL de control de `08` (RNF de cuadre). (3) Cada definición se imprime en el PDF debajo de la tabla.

### RF-38 · Resultados de impacto declarados frente a verificados (fase 2)

- **Modelo.** Tabla `resultados_impacto`: `id`, `empresa_id`, `tipo` (`empleos_creados`, `empleos_retenidos`, `ventas`, `capital_gestionado`), `valor` (numérico), `unidad`, `periodo_inicio`, `periodo_fin`, `estado` (`declarado` | `verificado`), `fuente_tipo` (`encuesta_emprendedor`, `documento`, `registro_mercantil`, `visita`), `fuente_ref`, `registrado_por`, `verificado_por` (nulo si declarado), `verificado_en`. Restricción: `estado = verificado` exige `verificado_por`, `verificado_en` y `fuente_tipo` distinto de `encuesta_emprendedor`.
- **Reglas.** (1) Un valor se crea `declarado`. (2) Pasa a `verificado` solo cuando una persona del CDE adjunta soporte o registra la fuente independiente; el cambio queda en auditoría. (3) Los reportes muestran **dos columnas** («Declarado», «Verificado») y nunca una suma sin etiqueta. (4) Si una empresa tiene un valor declarado y otro verificado del mismo tipo y periodo, el reporte cuenta el verificado y excluye el declarado correspondiente para no duplicar.
- **Criterios de aceptación.** (1) Sembrar 14 empleos declarados y 6 verificados → el reporte dice «14 declarados · 6 verificados». (2) Intentar guardar `verificado` sin `verificado_por` → `422`. (3) Un valor declarado y su gemelo verificado cuentan una sola vez. (4) El PDF incluye el pie «Declarado = dicho por la persona emprendedora; Verificado = con soporte o fuente independiente».

### RF-45 · Columnas de clasificación económica con vigencia

- **Fase.** Hackatón (columnas) / 1 (tabla). **Horas** S 0,10. **Criterio** Funcionalidad 60, Negocio 15. **ISO** Flexibilidad, Mantenibilidad. **Tarea** T-11a.
- **Datos.** `empresas.ciiu_codigo` `varchar(6)` nulo; `empresas.ciiu_version` `varchar(12)` nulo con valores `REV4AC`, `REV5AC`, `DESCONOCIDA`. Fase 1: `ciiu_equivalencias(id, version, codigo, sector_id)` con restricción única `(version, codigo)`.
- **Reglas.** Ninguna validación obligatoria; la interfaz de la hackatón **no** muestra el campo. Un código recibido sin versión se guarda con `DESCONOCIDA`.
- **Criterios de aceptación.** (1) Las migraciones crean ambas columnas nulas. (2) Crear una empresa sin CIIU funciona igual que antes. (3) Una prueba confirma que no hay índice ni restricción nueva que afecte el tiempo de alta.

### RF-32 · Consulta al registro mercantil abierto (opción O-1 «lite» en la hackatón; completa en fase 1)

- **Prioridad / fase.** Could condicionado (O-1) / completo en fase 1. **Horas** S ≈ 1,0 + MP 0,25 (sin medir). **Criterio** Funcionalidad 60, Diferenciador 15. **ISO** Compatibilidad, Adecuación funcional, Fiabilidad. **Condición de entrada:** que G-02 y G-06 hayan caído y liberen ≥ 1,5 h, y que el equipo haya elegido en T-01 **una persona jurídica real y pública** para la demostración (p. ej. una sociedad de Bucaramanga cualquiera del propio conjunto); no se muestra ningún dato de personas naturales.
- **Historia.** Como persona del CDE, quiero pulsar «Consultar registro mercantil» en una ficha con NIT y ver, al lado de lo que tengo, lo que dice el registro oficial, para aceptar o rechazar cada diferencia con un clic.
- **Reglas de elegibilidad.** Solo se consulta si `nit_norm` tiene 9 dígitos y empieza por 8 o 9 (`[NO VERIFICADO]` como regla universal; se conserva por prudencia, RNF-17). Si la respuesta trae una organización cuyo texto contiene «NATURAL», **se descarta toda la fila** y la interfaz dice «Persona natural: no se consulta».
- **Flujo principal.**
  1. La persona abre una ficha con `nit_norm` elegible y pulsa «Consultar registro mercantil».
  2. El servidor (nunca el navegador) llama a `https://www.datos.gov.co/resource/c82u-588k.json` con `$select=nit,digito_verificacion,camara_comercio,matricula,cod_ciiu_act_econ_pri,cod_ciiu_act_econ_sec,ciiu4,estado_matricula,organizacion_juridica,fecha_matricula,fecha_renovacion,ultimo_ano_renovado,fecha_actualizacion` y `$where=nit='{base}'`. **No se solicitan** `razon_social`, nombres ni identificación del representante legal.
  3. Tiempo máximo 5 s, un reintento; en `429` o error de red se usa el último resultado en caché (TTL 24 h) o, si no hay, el mensaje «El registro oficial no respondió; intente de nuevo» sin afectar el resto de la ficha (RNF-19).
  4. El servidor devuelve la lista de coincidencias (puede haber varias cámaras); la interfaz muestra primero la de `BUCARAMANGA`.
  5. Se muestra una tabla «Lo que tenemos · Lo que dice el registro · Acción» con filas: `estado de la matrícula`, `formalización propuesta`, `CIIU principal`, `última renovación`, `matriculada desde`.
  6. Por fila: «Aceptar» (escribe el valor, `origen = registro_mercantil`, `estado = verificado`, auditoría) o «Rechazar» (no cambia nada, guarda la decisión en auditoría).
  7. Al pie, atribución fija (RNF-15) y `consultado el {fecha}` junto a `fecha_actualizacion` del conjunto.
- **Reglas de propuesta (fase 1).**
  - **Formalización propuesta:** `vigente` si `estado_matricula = ACTIVA` y (`ultimo_ano_renovado` = año actual, o `ultimo_ano_renovado` = año anterior y la fecha de hoy es ≤ 31 de marzo del año actual). En otro caso `vencida`; si `estado_matricula` contiene «CANCELADA», `cancelada`. **La fecha límite del 31 de marzo está `[NO VERIFICADO]`** (verificar en fuente de una cámara de comercio antes de activar); mientras tanto la regla es un parámetro. El mapeo a los códigos del catálogo `21_catalogos.csv` (F3/F4) se confirma con Q-31.
  - **CIIU:** se muestra `cod_ciiu_act_econ_pri` y, si existe y difiere, también `ciiu4` con la nota «El registro trae dos clasificaciones; revise». No se deriva sector sin la tabla `ciiu_equivalencias` (fase 1).
- **Caché.** Tabla `consultas_registro(id, nit_base, respuesta jsonb, consultado_en, http_estado)`; clave única `(nit_base)`; se sobrescribe al refrescar. En la demo, el respaldo es una consulta guardada de antemano para el NIT elegido (RNF-07).
- **Contrato.** `POST /api/v1/empresas/{id}/consulta-registro` → `200 {"fuente":{"nombre":"Confecámaras, vía datos.gov.co","conjunto":"c82u-588k","licencia":"CC BY-SA 4.0","fecha_actualizacion_conjunto":"20261002","consultado_en":"…"},"coincidencias":[{…campos…}],"propuestas":[{"campo":"formalizacion","actual":"declarada vigente","propuesto":"vencida","origen":"registro_mercantil"}]}`. Errores: `422 NIT_NO_ELEGIBLE`, `502 REGISTRO_NO_DISPONIBLE`, `429 LIMITE_CONSULTAS`. `POST /api/v1/empresas/{id}/consulta-registro/aceptar` con `{"campos":["formalizacion","ciiu"]}` aplica solo los campos enviados.
- **Criterios de aceptación.**
  1. Con el NIT real elegido, la respuesta llega en ≤ 3 s (p95 en 10 consultas) y muestra al menos estado y año de renovación.
  2. Con un NIT sintético de la semilla, la interfaz dice «No se encontró en el registro abierto (puede ser persona natural, NIT con error o carga posterior)». Nunca se muestra un error técnico.
  3. Con la red cortada y sin caché → mensaje de RNF-19 y el resto de la ficha sigue usable; con caché → muestra la consulta con la etiqueta «Resultado guardado el {fecha}».
  4. Aceptar una fila crea una entrada de auditoría con valor anterior, valor nuevo, origen y usuario; rechazarla también.
  5. Ningún campo de nombre de persona (razón social de persona natural, representante) llega al navegador ni a la base de datos (prueba que inspecciona la respuesta y la tabla `consultas_registro`).
- **Seguridad.** Solo roles `admin_cde` y `equipo_cde`; 20 consultas por usuario por hora (429); lista de destinos permitidos fija en configuración (una sola URL base); no se sigue ninguna redirección.
- **Corte.** Captura previa de la API en la diapositiva (T-95), con fecha visible.

### RF-33 · Sector y formalización propuestos desde el registro (fase 1)

- Depende de RF-32 y RF-45 (tabla `ciiu_equivalencias`). Cuando existe equivalencia `(ciiu_version, ciiu_codigo) → sector_id`, la fila «Sector» propone el sector con la etiqueta «Sugerido por CIIU {código}»; si falta equivalencia, no se propone nada. Aceptación: con 5 NIT elegibles de prueba y una tabla con 3 equivalencias, se proponen 3 sectores y 2 filas dicen «Sin equivalencia».

### RF-40 · Insignias con campos de credencial

- **Fase.** Hackatón (campos). **Horas** 0 (dentro de T-43a). **Criterio** Diferenciador 15, Negocio 15. **ISO** Flexibilidad, Compatibilidad.
- **Datos** de `insignias`: `id` uuid estable, `identificador` (`urn:uuid:…`), `nombre`, `descripcion`, `criterio` (texto: hecho verificable, p. ej. «Cerró un compromiso del plan de acción dentro del plazo»), `emisor` (texto, valor inicial «UNAB · Centro de Desarrollo Empresarial» **pendiente de confirmar uso de marca**), `imagen_url` nula, `activa`.
- **Reglas.** Una insignia solo puede asignarse por un hecho registrado en el sistema (cita realizada, compromiso cerrado, asistencia, módulo completado); no hay asignación manual libre salvo `admin_cde` con motivo en auditoría.
- **Aceptación.** (1) Las ≥ 5 insignias del catálogo tienen los seis campos no vacíos. (2) Cada insignia tiene `identificador` único. (3) Intentar asignar sin hecho → `422`.
- **RF-40b (fase 3).** Emisión como credencial verificable firmada: `[NO VERIFICADO]` (NV-37); no se especifica hasta leer la especificación técnica.

### RF-49 (nuevo) · De la brecha del diagnóstico a la acción y a la oferta (fase 1; versión mínima opcional en B)

- **Prioridad / fase.** Should / Fase 1. **Horas (fase 1)** estimadas 6–8 h de una persona, sin medir. **Criterio** Funcionalidad 60, Diferenciador 15, Negocio 15. **ISO** Adecuación funcional, Capacidad de interacción.
- **Historia.** Como asesor del CDE, cuando veo que una empresa está débil en una dimensión del diagnóstico, quiero crear con un clic el compromiso sugerido y ver qué oferta del CDE cierra esa brecha, para que el diagnóstico termine en acción medible.
- **Modelo.** Etiqueta `dimension_id` (nula) en `eventos`/capacitaciones y tabla `plantillas_compromiso(id, dimension_id, titulo, descripcion, plazo_dias_defecto)`.
- **Flujo.** (1) En el radar de madurez (D-05) cada dimensión con puntaje bajo el umbral configurable (inicial: el 40 % inferior de la escala) muestra «Brecha». (2) «Crear compromiso» abre el formulario del plan de acción **prellenado** desde la plantilla (título, descripción, fecha = hoy + plazo); la persona edita y guarda. (3) Debajo, «Oferta que cierra esta brecha» lista hasta 3 eventos o capacitaciones futuros con esa `dimension_id`, con el motivo («Trata {dimensión}; su puntaje es {n}») (RF-10). (4) Cada compromiso conserva `origen_brecha = dimension_id`.
- **Aceptación.** (1) Con una empresa con 2 dimensiones bajo el umbral, aparecen 2 marcas «Brecha». (2) «Crear compromiso» produce un compromiso con responsable vacío obligatorio (la persona debe elegirlo para guardar). (3) Si no hay oferta futura para la dimensión, dice «Sin oferta programada» y ofrece «Solicitar capacitación» (crea una solicitud para el equipo). (4) El reporte de impacto puede filtrar «compromisos nacidos de una brecha» y su estado (RF-37).
- **Valor.** Cierra el ciclo diagnóstico → compromiso → oferta → resultado, que es el recorrido completo del dolor DOL-02 y DOL-06.

### RF-39 · Supervivencia de la cohorte frente al registro y a la línea nacional (fase 2)

- **Datos de entrada.** Empresas con `nit_norm` elegible y un resultado de RF-32 guardado. **Cálculo.** Para cada año de matrícula `a`: de las N empresas atendidas con `fecha_matricula` en el año `a`, contar las que siguen `ACTIVA` con `ultimo_ano_renovado ≥ año_actual − 1`. Comparar con la tasa nacional de Confecámaras de la misma edad (33,5 % a 5 años para la cohorte 2017, F-14, **secundaria**).
- **Reglas de presentación.** (1) Se muestra siempre el tamaño del grupo (N). (2) Con N < 10 se dice «Muestra demasiado pequeña para comparar» y no se muestra porcentaje. (3) Texto fijo: «No demuestra causalidad: las empresas que llegan al CDE no son un grupo aleatorio.» (4) No se compara una empresa fundada hace 2 años con la línea de 5 años.
- **Aceptación.** Con 40 empresas sintéticas de prueba (8 por año de matrícula entre 2021 y 2025), los grupos con N < 10 muestran el aviso y ninguno muestra un porcentaje. No se muestra en la hackatón.

### RF-41 / RNF-16 · Comparación anónima con el sector (fase 2)

- **Regla de supresión en el servidor.** Para el emprendedor, el endpoint `GET /api/v1/portal/mi-sector` devuelve las medias por dimensión **solo si** `N ≥ k` (inicial `k = 5`, `PROPUESTA` PA-43); si no, `{"suprimido":true,"mensaje":"Grupo muy pequeño para mostrarse"}`.
- **Complementos de privacidad.** (1) No hay filtros finos para el emprendedor (solo sector, no sector × tamaño × municipio). (2) No se devuelve `N` exacto cuando `N < 2k`; se devuelve «5 o más». (3) Solo muestra datos de empresas con consentimiento activo (T-46). (4) No se puede obtener una diferencia por consultas sucesivas: el conjunto de empresas del grupo se calcula con una instantánea diaria.
- **Aceptación.** Con 3 empresas en Turismo → suprimido. Con 6 en Alimentos → media visible y «5 o más». Un emprendedor de Turismo no ve cifras de Turismo aunque cambie parámetros de la petición.

### RF-42, RF-44, RF-46, RF-47 · Hoja de ruta (sin especificación operativa aún)

| RF | Condición para especificar | Pregunta que lo desbloquea |
|---|---|---|
| RF-42 Oportunidades con vigencia | El CDE confirma que quiere mantener el catálogo y quién lo actualiza | Q-35 y Q-36 |
| RF-44 Propuesta de campos con IA | Medir exactitud por campo con muestra etiquetada del CDE; revisión jurídica de transferencia (NV-36) | PA-39 y consulta jurídica |
| RF-46 Tamaño calculado (Decreto 957) | Verificar texto vigente, valor de UVT del año y macrosector de cada empresa (NV-31, NV-32) | Q-31 |
| RF-47 Agregados entre instituciones | Decisión multi-institución (W-04) y gobernanza | PA-44 |

### RF-50 (nuevo) · Informe de impacto verificable para financiadores (fase 2)

- **Historia.** Como directivo del CDE, quiero un enlace de solo lectura, con vencimiento, a un informe que muestre cifras con su estado (declarado/verificado), definiciones y método, para compartir con un financiador sin copiar datos.
- **Reglas.** (1) El informe se genera de RF-37/RF-38 con instantánea inmutable (hash SHA-256 del contenido incluido en el pie). (2) El enlace es aleatorio (≥ 128 bits), vence a los 7 días (configurable) y se puede revocar. (3) No contiene datos personales ni nombres de empresas: solo agregados con la regla `k` de RNF-16 (`k = 5`). (4) Cada acceso queda en auditoría (fecha, IP truncada). (5) El pie incluye «Fuente: sistema de información del CDE; instantánea del {fecha}; definiciones v{n}».
- **Aceptación.** (1) Un enlace vencido responde `410`. (2) Un enlace revocado responde `410` en ≤ 5 s. (3) El hash del pie coincide con el recalculado del contenido. (4) Un grupo de 3 empresas aparece como «Grupo pequeño (suprimido)».

---

## 4. Requisitos no funcionales de la ronda

| ID | Requisito | Medición | ISO |
|---|---|---|---|
| RNF-15 | Atribución fija junto a todo dato del registro: «Fuente: Confecámaras, a través de datos.gov.co (Personas Naturales, Personas Jurídicas y ESAL). Licencia CC BY-SA 4.0.» Se evita copiar el conjunto completo; la caché guarda solo la fila consultada | Revisión visual en cada pantalla con dato del registro; consulta SQL: 0 filas de otras empresas | Protección |
| RNF-16 | Supresión de grupos pequeños en el servidor (RF-41, RF-50) | Prueba de API con grupos de 3, 5 y 6 | Seguridad, Protección |
| RNF-17 | No se solicita, almacena ni muestra identificación o nombre de personas naturales del registro | Prueba que inspecciona respuesta, caché y logs | Seguridad |
| RNF-18 | Camino dorado verificado contra WCAG 2.2 AA con la lista de T-96; la declaración «AA» solo se escribe si la lista pasó | Lista de T-96 sin hallazgos críticos | Capacidad de interacción |
| **RNF-19** (nuevo) | **Degradación de dependencias externas:** toda llamada a un servicio externo tiene tiempo máximo ≤ 5 s, un reintento, caché y un mensaje legible; la caída de una dependencia **no** impide crear, buscar, editar ni fusionar empresas | Prueba con red cortada: el camino dorado completo se ejecuta | Fiabilidad |
| **RNF-20** (nuevo) | **Trazabilidad de decisiones sobre datos:** aceptar o rechazar un valor propuesto, fusionar y cambiar `estado` de verificación escriben auditoría con valor anterior, valor nuevo, origen y usuario | Prueba: 4 acciones → 4 entradas consultables | Seguridad |

---

## 5. Datos y reglas de prueba

**NIT sintéticos corregidos (verificados con el algoritmo; sustituyen a los de `21_casos_demo.md` si se adopta RF-31).**

| Base | DV correcto | Valor actual en `21_casos_demo.md` | ¿Cambia? |
|---|:-:|:-:|:-:|
| 999100200 | 0 | 1 | Sí |
| 999210300 | 0 | 4 | Sí |
| 999320411 | 1 | 6 | Sí |
| 999430522 | 2 | 2 | No |
| 999650733 | 3 | 0 | Sí |
| 999780844 | 1 | 9 | Sí |
| 900123456 (ejemplo de `04` §3) | 8 | 7 | Sí |
| 890903938 (ejemplo de la fuente F-24) | 8 | — | — |

**Duplicado de la protagonista (C-53).** Sustituir `9001002001` por `9991002000` (misma base `999100200` con DV `0` y sin separadores) para que la coincidencia por NIT sea real. **No cuesta horas.**

**Pruebas del registro (RF-32).** Con una persona jurídica real y pública elegida por el equipo: caso feliz; NIT no encontrado; respuesta con dos cámaras; respuesta con error `429`; red cortada con y sin caché; fila de persona natural (debe descartarse).

---

## 6. Trazabilidad

| Requisito | Dolor / criterio del reto | Criterio evaluación | Característica ISO 25010 | Tareas | Horas |
|---|---|---|---|---|---:|
| RF-31 | DOL-04 | Funcionalidad | Adecuación funcional, Fiabilidad | T-11, T-13, T-30 | S 0,25 |
| RF-34 | DOL-04 | Funcionalidad, Diferenciador | Adecuación funcional, Seguridad | T-11a, T-12, T-14 | S 0,25 / 0,15 |
| RF-48 | DOL-04, DOL-08 | Funcionalidad, Diferenciador | Capacidad de interacción | `16`, T-19 | MP 0,25 |
| RF-35, RF-36 | DOL-04 | Funcionalidad | Adecuación funcional, Capacidad de interacción | T-12x, T-19 | 0 |
| RF-37, RF-38 | DOL-09, «medir impacto» | Funcionalidad, Negocio | Adecuación funcional, Fiabilidad | T-16, T-45 | 0 / fase 2 |
| RF-45 | DOL-01, DOL-04 | Funcionalidad, Negocio | Flexibilidad, Mantenibilidad | T-11a | S 0,10 |
| RF-32, RF-33 | DOL-04 | Funcionalidad, Diferenciador | Compatibilidad, Fiabilidad | nueva | S ≈ 1,0 (opción) |
| RF-40 | «formación por recompensas» | Diferenciador, Negocio | Flexibilidad, Compatibilidad | T-43a | 0 |
| RF-49 | DOL-02, DOL-06 | Funcionalidad, Diferenciador, Negocio | Adecuación funcional | fase 1 | — |
| RF-39, RF-41, RF-50 | «medir impacto de la UNAB» | Funcionalidad, Negocio | Seguridad, Protección | fase 2 | — |

---

## 7. Cambios que esto exige en otros archivos (cuando se ratifique)

1. `04_datos.md` §2: añadir `procedencia jsonb`, `ciiu_codigo`, `ciiu_version` a `empresas`. §3: sustituir la regla de NIT por la tabla de RF-31 (cambia el ejemplo `9001234567`) y corregir `900.123.456-7` → `-8`.
2. `21_casos_demo.md`: corregir los 5 dígitos de §5 (tabla) y el NIT del duplicado (C-50, C-53).
3. `tareas/T-11.md`, `T-11a`, `T-12`, `T-13`, `T-14`, `T-16`, `T-19`, `T-30`, `T-43a`, `T-45`, `T-96`: añadir las secciones indicadas en §6.
4. `backlog.csv`: filas nuevas RF-31, RF-34, RF-48, RF-45 y opción O-1, con `horas_A` y `horas_B` de §1.
5. `99_preguntas_abiertas.md`: copiar PA-38..PA-44 y añadir **PA-45** (¿se adopta el sello RF-48 y con qué colchón?) y **PA-46** (¿se hace O-1 y con qué persona jurídica real?). `10_preguntas_cde.md`: Q-30..Q-36.
6. `08_pruebas_checklists.md`: pruebas de RF-31 (vectores), RF-34 (hook), RNF-19 (red cortada).

---

## 8. Corrección a las horas de `03` §4

| Concepto | `03` §4 decía | Aquí |
|---|---:|---:|
| RF-34 `origen` | 0 | **S 0,25 (0,15 mínima)** |
| RF-48 sello | no existía | **MP 0,25** |
| Total en la ventana | 0,35 h (S) | **A: S 0,60 + MP 0,25. B: S 0,25** |

---

## 9. Frase para el pitch (25 palabras, sujeta a ratificación)

«Cada dato de la ficha dice de dónde viene, y cada resultado distingue lo que el emprendedor declara de lo que se pudo comprobar.» Se apoya en lo que se **ve** en la demo: el aviso del NIT, el sello de procedencia y el desglose de duplicados. Lo demás se presenta como camino.

**No decir:** «somos los únicos», cifras de impacto de la UNAB, «ya emitimos credenciales», «lo vamos a vender» (PA-39).

## Criterio de aceptación de este archivo

1. Todo requisito tiene historia, reglas, flujo o contrato, criterios de aceptación medibles, criterio de evaluación, ISO y horas con su origen.
2. Los vectores de §5 se repiten con el algoritmo del encabezado y dan los dígitos de la tabla.
3. Ningún requisito con dependencia externa bloquea el camino dorado (RNF-19).
4. Las horas de §1 no superan el colchón de la variante elegida salvo con una compuerta caída.
5. Todo lo `[NO VERIFICADO]` está listado en la sección que lo usa y tiene plan.
