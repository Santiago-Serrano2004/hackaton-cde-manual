# 20 · Plan que cabe (Ronda 3, F20)

**Objetivo.** Convertir el déficit declarado en `07` §5.2 y `99` §K.6 (PA-30) en un plan que cabe en **11,75 h útiles por persona hasta el congelamiento (FF, 29-oct 01:30)**, sin perder el camino dorado de `02` §5 ni la evidencia ISO/IEC 25010 visible. Se entregan dos variantes con calendario hora a hora, balance por persona, ruta crítica, compuertas, tablero de seguimiento y una recomendación numérica.

**Entradas.** `07_plan_construccion.md` §4–§7, `14_backlog.md`, `backlog.csv`, `tareas/_INDEX.md`, `99_preguntas_abiertas.md` (PA-22, PA-23, PA-30), `13_diferenciadores.md`, `18_pitch_v2.md`, `inputs/01_TyC_y_cronograma_CDE.md` §2, §5, §8, §11.

**Estado.** Todo lo de este archivo es `PROPUESTA` de la Ronda 3. **Nada está aplicado** hasta que los tres lo ratifiquen en T-01 (28-oct 10:00) y lo registren en `docs/DECISIONES.md`. Las contradicciones con rondas anteriores llevan la marca `R3` y están listadas en §13.

**Regla de la ronda.** No se agregan funcionalidades. Todo cambio recorta, simplifica, reasigna o mueve trabajo a antes del 28. Cada recorte declara qué puntaje de Funcionalidad (60) y qué característica ISO/IEC 25010 se debilita y cómo se compensa en el pitch (§7 y §12).

## 0. Resumen

1. **Base de horas.** 11,75 h por persona = 10,75 h de construcción (10:30–12:00, 14:00–17:00, 17:30–19:00, 19:45–00:30) + 1,0 h de T-91 (ensayo del camino dorado, 00:30–01:30). `tareas/_INDEX.md` §1 contaba esa hora **dos veces** (como ensayo y como desborde): R3 la cuenta una sola vez (C-35).
2. **El plan de la Ronda 2 no cabe.** Carga del Núcleo: Santiago 13,25 h, Julián 13,75 h, María Paula 13,25 h frente a 10,75 h de construcción: déficit de 2,5 / 3,0 / 2,5 h (total 8,0 h).
3. **Variante A "mínimo defendible":** carga 9,5 / 10,25 / 9,25 h; colchón 1,25 / 0,5 / 1,5 h (3,25 h de equipo, 10 % de la ventana).
4. **Variante B "ambiciosa con compuertas":** A + tres opciones (Ctrl+K, duplicados con deshacer, "Mi ruta" mínima) con 10 compuertas; carga 10,5 / 10,25 / 10,75 h; colchón nominal 0,25 / 0,5 / 0,0 h. Cada opción se corta sola si no pasa su compuerta, así que B **degrada a A** sin discusión.
5. **Puntaje esperado de Funcionalidad (simulación, supuestos en §9):** con 20 % de sobrecosto medio, plan R2 ≈ 27,8; A ≈ 37,0; B ≈ 37,6 (de 60). Sin sobrecosto: 33,5 / 41,1 / 42,9. Cada +10 % de sobrecosto cuesta ≈ 2 a 2,5 puntos en cualquier variante: **el factor dominante es el sobrecosto, no la variante.**
6. **Recomendación (PA-30, para ratificar):** variante **B con compuertas, con A como piso comprometido** (§9.5). B no pierde frente a A en promedio con ningún sobrecosto probado (+1,8 a +0,1 puntos) y pierde en 3–9 % de las corridas, con una pérdida media de ≈ 1 punto.
7. **Antes del 28 (TyC §11):** 2,5 h adicionales de trabajo previo (J 1,0 · MP 1,25 · S 0,25) mueven 1,75 h fuera de la ventana escasa (§4). Lista exacta de lo que sí, lo que se declara y lo que no.
8. **Lo que se sacrifica** (Nivel 2 y 3 de `13` salvo tres piezas): calidad de datos, preguntas guiadas y mapa de calor, rachas y cola de validación, importación con mapeo, línea de tiempo por listeners (§7).

## 1. Cómo leer las horas

| Concepto | Valor | Fuente |
|---|---|---|
| Ventanas de construcción del 28 | 1,5 + 3,0 + 1,5 + 4,75 = 10,75 h | `07` §4, `tareas/_INDEX.md` §1 |
| T-91 (ensayo del camino dorado, todos) | 1,0 h dentro de las 11,75 h | `07` §3 (H2 a las 00:30) |
| Fuera de las 11,75 h | T-00 (8:00–8:30), T-01 (10:00–10:30), T-90 (cena, 0,25 h), V1 (17:00–17:30), T-92 (01:30–02:00) | `07` §1, §4 |
| Colchón | 10,75 − carga de construcción de la persona | Esta sección |
| Reserva no contada (Julián) | 0,5 h durante V1, porque solo S y MP presentan | `07` §4 (fila 17:00) |

**Tareas partidas.** Para que nadie espere a nadie al inicio, T-10 se parte en T-10a (auth) y T-10b (auditoría), T-11 en T-11a (esquema raíz, 0,25 h) y T-11b, T-43 en T-43a (motor) y T-43b (listeners). La suma de horas de cada tarea partida es la del cuadro de §3 (C-29, C-36).

## 2. Balance de la Ronda 2 y por qué no cabe

| Persona | Núcleo R2 (`07` §5.2) | Construcción disponible | Déficit | Con T-91 |
|---|---|---|---|---|
| Santiago | 13,25 | 10,75 | 2,5 | 14,25 vs 11,75 |
| Julián | 13,75 | 10,75 | 3,0 | 14,75 vs 11,75 |
| María Paula | 13,25 | 10,75 | 2,5 | 14,25 vs 11,75 |
| Equipo | 40,25 | 32,25 | 8,0 | 43,25 vs 35,25 |

`99` §K.6 daba 5,0 h de déficit porque comparaba contra 11,75 h sin separar T-91; el número correcto contra la ventana de construcción es 8,0 h (C-18 ya lo daba por persona; la suma estaba sin hacer).

## 3. De dónde salen las horas y qué se construye en cada variante

Las horas "v2" son las del Núcleo R2 de `07` §5 y `14` §6 (T-12 = 1,5 + 0,75 de 2.ª pasada, T-13 = 2,5 + 0,25, T-14 = 1,5, T-16 = 0,75, T-40 = 1,0). "A" y "B" son las horas de R3. Responsable: S = Santiago, J = Julián, MP = María Paula.

| ID | v2 h | A h | B h | Resp. A=B | Qué se construye en A | Qué se difiere (v2 completo) |
|---|---:|---:|---:|---|---|---|
| T-02 | 1,0 | 0,25 | 0,25 | J | Variables de entorno y primer redeploy; el "hola" ya está desplegado desde antes del 28 (C-28) | — |
| T-03 | 0,5 | 0 | 0 | J | Se hace antes del 28 (§4, P-02) | — |
| T-10 (a+b) | 1,5 | 1,5 | 1,5 | S | Sanctum, 5 roles, throttle, middleware de auditoría **y pantalla de auditoría simple con filtros usuario/fecha** (HU-24; C-31) | Filtro por empresa |
| T-11 (a+b) | 3,0 | 2,5 | 2,5 | S | Esquema raíz, CRUD, normalizadores, filtros (sector, tamaño, municipio, texto), ficha con pestañas | Filtros guardados |
| T-12 | 2,25 | 1,75 | 1,75 | S | 1.ª pasada: exacto y probable, fusión transaccional, banner y **modal de confirmación de fusión** (0,25 h tomadas de la pantalla E5 de T-13) | Puntuación visible, tabla `fusiones`, deshacer (T-12x) |
| T-13 | 2,75 | 1,25 | 1,25 | S | Endpoint de búsqueda tolerante (`pg_trgm`), barra global en la cabecera, alta con aviso | Endpoint agrupado, recientes, paleta (T-13x, T-17) |
| T-14 | 1,5 | 1,0 | 1,0 | S | CSV con plantilla fija de columnas (`04`), vista previa con conteos válidas/duplicadas/error, confirmar | Mapeo de columnas, XLSX, reversión |
| T-15 | 1,5 | 0,75 | 0,75 | S | Línea de tiempo por consulta directa (UNION de tablas de origen) y pestaña; el seeder llena solo tablas de origen | Listeners hacia `intervenciones` (RF-16), acabado T-27 |
| T-16 | 0,75 | 0,75 | 0,75 | S | Igual que R2; **incluye** el indicador "% de fichas con sector y tamaño" porque es el mismo SQL de caracterización (no suma horas; `PROPUESTA`) | — |
| T-20 | 1,5 | 1,25 | 1,25 | J | Solicitar, agendar, resultado, cancelar con botón; sin calendario visual | Vista de calendario |
| T-21 | 1,0 | 0,75 | 0,75 | J | 2 recordatorios (24 h y 1 h), job, 3 reintentos, bandeja; textos fijos | Plantillas editables |
| T-22 | 1,0 | 1,0 | 1,0 | J | M4 y E9 | — |
| T-23 | 2,5 | 2,0 | 2,0 | J | CRUD, publicar, cupo con bloqueo y prueba de concurrencia, asistencia manual y por QR con token fijo por evento, resumen | Rotación del QR cada 60 s |
| T-25 | 0,75 | 0,5 | 0,5 | J (R3: se queda en J, C-37) | 3 reglas con motivo (sector, brecha, etapa) | Reglas adicionales |
| T-24 | 2,0 | 1,5 | 1,5 | J | E10, M5, pantalla de asistencia con QR estático | Vista en vivo (T-52) |
| T-30 | 3,0 | 2,5 | 2,5 | J | DemoSeeder, validador de totales, `importacion_demo.csv`; los casos y catálogos llegan listos de F21 (`21_*`) | Cantidad de historiales secundarios |
| T-31 | 0,5 | 0,5 | 0,5 | J | `demo:reset`, botón y banner | — |
| T-40 | 1,0 | 1,0 | 1,0 | MP | Tokens, componentes, layout por rol, router, login | — |
| T-41 | 1,5 | 1,25 | 1,25 | MP | Formulario, historial y gráfica de líneas por dimensión | Radar (T-54) |
| T-42 | 2,0 | 1,5 | 1,5 | MP | Proyectos, planes, compromisos, vencidos, con formularios por rol | Tableros D1–D2 de docente y estudiante |
| T-43 (a+b) | 2,5 | 1,75 | 1,75 | MP | 6 retos (ficha básica, asistir a evento, compromiso cumplido, compromiso tardío, cita realizada, diagnóstico), 6 niveles, 3 insignias (Primer paso, Cumplidor, Aprendiz), idempotencia, topes mensuales; **el operador marca el compromiso como cumplido** | Rachas, cola de validación, insignias 4 a 7, `MEJORA_MADUREZ` |
| T-46 | 0,5 | 0,5 | 0,5 | MP | Consentimiento y descarga JSON | — |
| T-44 | 3,0 | 2,0 | 2,0 | MP | M2, M3, M6, M7; toast con confeti simple al subir de nivel | Animaciones elaboradas |
| T-45 | 1,5 | 1,25 | 1,25 | MP | Barras por sector, tamaño, formalización e ingresos; brechas por dimensión con filtro de sector y **lista de empresas afectadas**; CSV e impresión | Mapa de calor, preguntas guiadas |
| T-17 | 0,5 | — | 0,5 | MP | — | Paleta Ctrl+K (B) |
| T-19 | 0,25 | — | 0,25 | MP | — | Lado a lado (B) |
| T-27 | 0,5 | — | — | — | — | Acabado de la línea de tiempo (lista de espera) |
| T-47 | 1,25 | — | 0,75 (T-47a) | MP | — | "Mi ruta": nodos y estados en SVG (B); animación y tarjeta "siguiente acción" quedan fuera |
| T-12x / T-13x | 0,75 / 0,25 | — | 0,75 / 0,25 | S | — | 2.ª pasada de duplicados y endpoint agrupado (B) |
| T-18, T-26, T-28, T-48, T-49 | 3,0 | — | — | — | — | Nivel 2 de `13`: calidad de datos, preguntas guiadas, mapa de calor |
| T-50..T-54 | 2,0 | — | — | — | — | Nivel 3 de `13` |

| Persona | v2 | A | B | Ahorro A vs v2 | Colchón A | Colchón B |
|---|---:|---:|---:|---:|---:|---:|
| Santiago | 13,25 | 9,5 | 10,5 | 3,75 | 1,25 | 0,25 |
| Julián | 13,75 | 10,25 | 10,25 | 3,5 | 0,5 | 0,5 |
| María Paula | 13,25 | 9,25 | 10,75 | 4,0 | 1,5 | 0,0 |
| Equipo | 40,25 | 29,0 | 31,5 | 11,25 | 3,25 | 0,75 |

Con T-91 (1,0 h) cada persona queda en o por debajo de 11,75 h en las dos variantes (S 10,5 / 11,5; J 11,25 / 11,25; MP 10,25 / 11,75).

**Origen de las 11,25 h ahorradas en A** (suma de recortes por persona): 1,25 h se mueven a antes del 28 (J: T-02 −0,75, T-03 −0,5); 1,25 h salen de aplazar T-17, T-19 y T-27 (MP); 8,75 h son recortes de alcance de la tabla (S 3,75 · J 2,25 · MP 2,75).

## 4. Qué se puede hacer antes del 28 sin violar el TyC §11

Regla del TyC (§11): "Cada equipo debe desarrollar su solución durante la Hackatón". Criterio de clasificación `PROPUESTA` (coherente con PA-22, opción b):

- **Verde:** infraestructura y herramientas que no contienen conocimiento ni reglas del CDE.
- **Amarillo:** diseño o presentación sin lógica de dominio; se declara y se pregunta (PA-22, PA-29).
- **Rojo:** cualquier modelo, regla, pantalla, dato o endpoint del dominio del CDE.

| ID | Qué | Clase | Resp. | h | Ahorra en la ventana | Fuente de las horas |
|---|---|---|---|---:|---|---|
| P-01 | Esqueleto (`03` §5 pasos 1–6), CI verde y "hola" desplegado en el servidor | Verde | J | 2,0 (ya en `INDEX`) | T-02 −0,75 h | Tareas previas de `INDEX` |
| P-02 | Cola `database`, scheduler, `/health` y Mailpit probados con un job vacío de ejemplo | Verde | J | 0,5 (nuevo) | T-03 −0,5 h | Noche del 27 |
| P-03 | Script de `pg_dump` y restauración de una base **vacía**; etiqueta de ejemplo | Verde | J | 0,25 (nuevo) | T-92/T-94 −0,25 h (día 2) | Noche del 27 |
| P-04 | Instalación real de paquetes (`12` pasos 1–7) | Verde | S | 0,5 (ya) | Riesgo, no horas | Tareas previas de `INDEX` |
| P-05 | Prueba de shadcn/ui y fuentes en un repositorio desechable (`15` §7) | Verde | MP | 1,25 (ya) | Habilita T-40 = 1,0 h | Tareas previas de la Ronda 2 |
| P-06 | Kit de agentes (`19` §1.2) | Verde | S y J | 0,95 (ya) | Riesgo | Tareas previas de la Ronda 2 |
| P-07 | Plantilla de presentación con la paleta y las 7 diapositivas de `18` §7, **sin cifras** | Verde | MP | 1,0 (nuevo) | T-95 1,0 → 0,75 h (día 2) | Noche del 27 |
| P-08 | Imprimir y guardar sin conexión la lista de `23` §6 (F23) | Verde | Los tres | 0,25 c/u (nuevo) | Riesgo | Noche del 27 |
| Y-01 | Tokens CSS de la paleta y fuentes empaquetadas en el repositorio | Amarillo | MP | 0,5 | T-40 −0,5 h | **No se hace antes**: se pregunta a las 8:30 (PA-29). Si el CDE acepta, MP lo hace entre 8:30 y 10:00 mientras J toma notas; el ahorro no está contado en A ni B (queda como colchón) |
| R-01 | Autenticación, roles, auditoría | Rojo | — | — | (T-10 −1,5 h) | Se construye el 28 |
| R-02 | Migraciones, modelos, esquema raíz de empresas (T-11a) | Rojo | — | — | (T-11a −0,25 h) | Se construye el 28 |
| R-03 | Seeder, factories y `importacion_demo.csv` | Rojo | — | — | (T-30 −2,5 h) | `04` decidió generarlos el 28 «para no llegar con producto hecho» |
| R-04 | Cualquier pantalla, componente de dominio o endpoint | Rojo | — | — | — | Se construye el 28 |

**Costo previo adicional de R3:** 2,5 h (J 1,0 · MP 1,25 · S 0,25). **Ahorro en ventana:** 1,75 h (T-02 0,75 + T-03 0,5 + día 2: 0,25 + 0,25). El balance no es 1:1: lo que se compra es mover horas de la ventana de 25 h (el recurso escaso y regulado) a la noche del 27, que no tiene tope de cronograma pero **compite con el sueño**. Orden de prioridad si la noche no alcanza: P-02, P-03, P-08, y se omite P-07 (T-95 vuelve a 1,0 h).

**Declaración al CDE** (leer a las 8:30; `EJEMPLO`, 4 líneas):

```
Antes de hoy preparamos solo infraestructura: repositorio, contenedores, integración continua,
servidor con una página "hola", cola de trabajos y respaldo de una base vacía.
No hay modelos, pantallas, datos ni reglas del CDE: todo eso se construye durante la Hackatón.
¿Les parece correcto, o prefieren que lo documentemos de otra manera?
```

## 5. Variante A · "Mínimo defendible"

**Qué es.** El camino dorado de `02` §5 de punta a punta con el menor alcance por tarea que aún cumple su criterio de `backlog.csv`, más lo estrictamente necesario para que cada característica ISO/IEC 25010 tenga una evidencia visible.

### 5.1 ISO/IEC 25010 visible en A (evidencia mínima por característica)

| Característica | Evidencia visible en A | Tarea | Qué se pierde frente a v2 |
|---|---|---|---|
| Adecuación funcional | Los 8 pasos del camino dorado corren con el seeder | T-91 | Recorrido sin pulir |
| Eficiencia de desempeño | Índices `pg_trgm`, paginación, búsqueda < 2 s y reporte < 10 s medidos una vez | T-13, T-16, T-96 | p95 formal |
| Compatibilidad | Importación y exportación CSV (UTF-8 con BOM) | T-14, T-16 | XLSX, mapeo de columnas |
| Capacidad de interacción | Diseño coherente, contrastes, teclado en formularios, portal con niveles y confeti | T-40, T-44, T-96 | Paleta Ctrl+K, "Mi ruta" |
| Fiabilidad | Recordatorios con 3 reintentos, `pg_dump` y restauración probada | T-21, T-92, T-94 | Panel de salud |
| Seguridad | 5 roles con prueba rol × endpoint, 403 demostrable, auditoría con pantalla | T-10 | Filtro por empresa |
| Mantenibilidad | Módulos separados (`03` §4), pruebas Pest por módulo | todas | — |
| Flexibilidad | `docker compose up` en máquina limpia, variables de entorno | T-00, T-02 | Multi-institución |
| Protección | Confirmación al fusionar, borrado lógico, consentimiento | T-12, T-46 | Deshacer de la fusión |

### 5.2 Calendario hora a hora (variante A)

Cada fila es un tramo de la ventana de construcción. "—" = libre (colchón). Los tramos 12:00–14:00 (receso), 17:00–17:30 (V1) y 19:00–19:45 (cena + T-90) no se trabajan, salvo J durante V1 (reserva no contada).

| Hora | Santiago | Julián | María Paula |
|---|---|---|---|
| 10:30–10:45 | T-11a | T-02 | T-40 |
| 10:45–11:30 | T-10a | T-20 | T-40 |
| 11:30–12:00 | T-10a | T-20 | T-41 |
| 12:00–14:00 | **Receso** | | |
| 14:00–14:15 | T-10b | T-21 | T-41 |
| 14:15–14:45 | T-11b | T-21 | T-41 |
| 14:45–15:45 | T-11b | T-22 | T-42 |
| 15:45–16:15 | T-11b | T-23 | T-42 |
| 16:15–16:30 | T-11b | T-23 | T-43a |
| 16:30–17:00 | T-12 | T-23 | T-43a |
| 17:00–17:30 | **V1** (presentan S y MP) | J sigue: reserva | **V1** |
| 17:30–18:15 | T-12 | T-23 | T-43a |
| 18:15–18:30 | T-12 | T-25 | T-43b |
| 18:30–18:45 | T-12 | T-25 | T-46 |
| 18:45–19:00 | T-13 | T-24 | T-46 |
| 19:00–19:45 | **Cena + T-90 (H1)** | | |
| 19:45–20:45 | T-13 | T-24 | T-44 |
| 20:45–21:00 | T-16 | T-24 | T-44 |
| 21:00–21:30 | T-16 | T-30 | T-44 |
| 21:30–21:45 | T-15 | T-30 | T-44 |
| 21:45–22:15 | T-15 | T-30 | T-45 |
| 22:15–23:00 | T-14 | T-30 | T-45 |
| 23:00–23:15 | T-14 | T-30 | — |
| 23:15–23:30 | — | T-30 | — |
| 23:30–00:00 | — | T-31 | — |
| 00:00–00:30 | — | — | — |
| 00:30–01:30 | **T-91** ensayo del camino dorado (los tres) | | |
| 01:30–02:00 | **FF** · J: T-92 (etiqueta `ff-1`, `pg_dump`) · S y MP: lista de errores `P0/P1/P2` | | |

**Balance A:** S 9,5 h (colchón 1,25 · 23:15–00:30) · J 10,25 h (colchón 0,5 · 00:00–00:30, más 0,5 h de V1) · MP 9,25 h (colchón 1,5 · 23:00–00:30). Ninguno supera 10,75 h.

## 6. Variante B · "Ambiciosa con compuertas"

**Qué es.** A más tres opciones elegidas por valor por hora bajo la capacidad de cada persona. Las opciones se hacen **solo si pasan su compuerta**; si no, la persona sigue con su cola de A y el tiempo vuelve a ser colchón.

### 6.1 Opciones ordenadas por valor por hora

Valor = puntos de referencia de Funcionalidad que añade la opción (`PROPUESTA`; criterio y rango en §9). Capacidad = colchón de A de cada persona (S 1,25 · J 0,5 · MP 1,5).

| Opción | Piezas (resp. h) | Horas | Valor (pts) | Valor/h | ¿Entra en B? | Motivo |
|---|---|---:|---:|---:|---|---|
| E1 Ctrl+K | T-13x (S 0,25) + T-17 (MP 0,5) | 0,75 | 1,2 | 1,60 | **Sí** | Mayor valor por hora; es el momento "wow 1" de `18` §2 |
| E3 "Mi ruta" mínima | T-47a (MP 0,75) | 0,75 | 1,0 | 1,33 | **Sí** | El módulo de recompensas es demanda explícita del reto; da el "wow 2" |
| E5 Preguntas guiadas + mapa de calor | T-48 (S 0,5) + T-49 (MP 0,75) | 1,25 | 1,3 | 1,04 | No | No cabe en MP (queda 0,25 h tras E1 y E3) |
| E4 Acabado de la línea de tiempo | T-27 (MP 0,5) | 0,5 | 0,5 | 1,00 | No | No cabe en MP |
| E6 Calidad de datos | T-18 (S 0,5) + T-26 (J 0,25) + T-28 (MP 0,5) | 1,25 | 1,1 | 0,88 | No | No cabe en MP ni en J |
| E2 Duplicados con puntuación y deshacer | T-12x (S 0,75) + T-19 (MP 0,25) | 1,0 | 0,8 | 0,80 | **Sí** | Cabe: S queda con 1,0 h libre y MP con 0,25 h; protege el criterio "no existen empresas duplicadas" |
| E8 Panel ISO | T-50 (MP 0,5) + T-51 (S 0,25) | 0,75 | 0,6 | 0,80 | No | MP lleno |
| E7 Rachas y cola de validación | T-43 (MP +0,75) | 0,75 | 0,5 | 0,67 | No | MP lleno |
| E9 / E10 | T-52 / T-53 (J 0,5 c/u) | 0,5 | 0,3 | 0,60 | No | J es el recurso más justo: su colchón de 0,5 h se queda como colchón |
| E12 / E13 | Mapeo y XLSX en T-14; listeners en T-15 | 0,5 / 0,75 | 0,2 | 0,40 / 0,27 | No | Valor insuficiente |

Selección: greedy por valor/h con la capacidad de MP como cuello de botella; E1 + E3 + E2 da 3,0 puntos con MP = 1,5 h, S = 1,0 h. La alternativa E1 + E5 da 2,5 puntos. **Lista de espera** (solo si alguien termina antes de su compuerta): T-27, T-47b (animación y reducción de movimiento), T-48 + T-49.

### 6.2 Calendario hora a hora (variante B)

Igual que A hasta las 20:45; las diferencias están en negrita.

| Hora | Santiago | Julián | María Paula |
|---|---|---|---|
| 10:30–10:45 | T-11a | T-02 | T-40 |
| 10:45–11:30 | T-10a | T-20 | T-40 |
| 11:30–12:00 | T-10a | T-20 | T-41 |
| 12:00–14:00 | **Receso** | | |
| 14:00–14:15 | T-10b | T-21 | T-41 |
| 14:15–14:45 | T-11b | T-21 | T-41 |
| 14:45–15:45 | T-11b | T-22 | T-42 |
| 15:45–16:15 | T-11b | T-23 | T-42 |
| 16:15–16:30 | T-11b | T-23 | T-43a |
| 16:30–17:00 | T-12 | T-23 | T-43a |
| 17:00–17:30 | **V1** | J sigue: reserva | **V1** |
| 17:30–18:15 | T-12 | T-23 | T-43a |
| 18:15–18:30 | T-12 | T-25 | T-43b |
| 18:30–18:45 | T-12 | T-25 | T-46 |
| 18:45–19:00 | T-13 | T-24 | T-46 |
| 19:00–19:45 | **Cena + T-90 (H1) · compuerta G-01** | | |
| 19:45–20:45 | T-13 | T-24 | T-44 |
| 20:45–21:00 | **T-13x** | T-24 | T-44 |
| 21:00–21:45 | **T-16** | T-30 | T-44 |
| 21:45–22:15 | **T-15** | T-30 | **T-17** |
| 22:15–22:30 | T-15 | T-30 | T-45 |
| 22:30–23:30 | **T-14** | T-30 | T-45 |
| 23:30–00:00 | **T-12x** | T-31 | **T-47a** |
| 00:00–00:15 | **T-12x** | — | **T-47a** |
| 00:15–00:30 | — | — | **T-19** |
| 00:30–01:30 | **T-91** (los tres) | | |
| 01:30–02:00 | **FF** · T-92 (J) · lista de errores (S y MP) | | |

**Balance B:** S 10,5 h (colchón 0,25) · J 10,25 h (0,5 + 0,5 de V1) · MP 10,75 h (0,0). El colchón de MP queda en cero por diseño: lo protegen las compuertas G-03, G-05 y G-08, que cortan E1, E3 y E2 antes de tocar el núcleo.

### 6.3 Compuertas

Una compuerta se evalúa a la hora indicada por quien la posee, con los datos del tablero (§11). Formato: "si a las HH:MM no está X, se corta Y".

| ID | Hora | Dueño | Si no está… | Se corta… | Ahorro | Pierde (pts, ISO) |
|---|---|---|---|---|---|---|
| G-01 | 19:00 (H1) | Todos | H1 completo (login → empresa con aviso de duplicado → solicitud y agenda de cita → recordatorio en Mailpit) | **Todas las opciones de B** (pasa a A) y T-24 pasa a su versión recortada (§8.1) | 3,0 h de opciones | B → A: −3,0 nominales |
| G-02 | 20:45 | S | T-13 en `develop` y T-12 con ≥ 11 de 12 duplicados detectados | T-13x → por tanto T-17 | 0,75 h | −1,2 (AF, CI) |
| G-03 | 21:45 | MP | T-44 con M2, M3 y M6 en `develop` **y** T-13x fusionada | T-17 (queda la barra de búsqueda) | 0,5 h | −1,2 (CI) |
| G-04 | 22:15 | S | T-16 en `develop` (T-45 la necesita) | T-15 pasa a versión recortada y T-14 a su recorte (§8.1) | 0,75 h | −1,0 (AF, CO) |
| G-05 | 23:30 | MP | T-45 terminado (barras, brechas con lista, CSV, impresión) | T-47a y T-19 | 1,0 h | −1,8 (CI, AF) |
| G-06 | 23:30 | S | T-14 y T-15 en `develop` | T-12x y, por tanto, T-19 | 0,75 h + 0,25 h | −0,8 (AF, PR) |
| G-07 | 00:00 | J | T-30: totales de `04` §7.1 exactos y `DatosDemoTest` verde | T-31 pasa a «solo comando» (sin botón) | 0,25 h | −0,2 (FI) |
| G-08 | 00:15 | MP | T-12x fusionada | T-19 | 0,25 h | −0,4 (AF, PR) |
| G-09 | 00:30 (H2) | Todos | Los 8 pasos de `02` §5 corren con el seeder | Todo lo que no sea camino dorado; T-91 se usa para cerrar bloqueantes `P0` | — | Variable |
| G-10 | 01:30 (FF) | Todos | — | Se congela lo que haya | — | — |

**Regla "rojo" (aplica a A y B).** Si al iniciar una tarea la persona lleva **más de 0,5 h de atraso** respecto al calendario, usa la versión recortada de §8.1 (si existe) y avisa en el canal. **Regla "ámbar"**: atraso de 0,25 a 0,5 h → no se inicia ninguna opción de B.

## 7. Qué se pierde frente a v2 y cómo se compensa

Puntos de referencia estimados con el mismo criterio de §9 (no son la rúbrica). "Nominal" = si todo se construyera.

| Recorte | Qué requisito/historia se debilita | ISO | Puntos (nominal) | Compensación en el pitch (`18`) |
|---|---|---|---:|---|
| Paleta Ctrl+K (T-17) en A | RF-28 sigue (barra tolerante); `D-01` | CI, ED | 1,2 | Demo con barra de búsqueda; el cronómetro "< 20 s" se mantiene con la barra (D1 versión C) |
| Puntuación visible, deshacer y lado a lado (T-12x, T-19) en A | RF-02/03 en forma básica; `D-02` | AF, PR | 0,8 | Se dice "avisa y fusiona sin perder historial"; no se dice "reversible" |
| Calidad de datos (T-18, T-26, T-28) | RF-04 (Should); `D-03` | AF, FI | 1,1 | Se muestra el **indicador** "% con sector y tamaño" del dashboard (línea base 36 %/37 % del TyC); no se promete mejora automática |
| Preguntas guiadas y mapa de calor (T-48, T-49) | RF-22 con el filtro de sector de T-45; `D-10A`, `D-15` | AF, CI | 1,3 | HU-21 se cumple con el filtro: «elijo Alimentos y veo dimensiones con menor puntaje y la lista de empresas»; el mapa de calor pasa a "siguiente paso" |
| Rachas, cola de validación, insignias 4–7 (T-43) | RF-18/HU-19 parcial (C-27); `D-09` | AF, CI | 0,5 | El compromiso lo cierra el equipo («el equipo valida») y suma; las rachas se presentan como siguiente iteración |
| Importación con mapeo, XLSX y reversión (T-14) | RF-15 parcial | CO | 0,2 | Plantilla fija descargable; XLSX y mapeo en la hoja de ruta |
| Línea de tiempo por listeners (T-15) | RF-16 (Should) | AF | 0,2 | La línea de tiempo es la misma ante el jurado; se dice «consulta unificada», no «tabla única de intervenciones» |
| Acabado de la línea de tiempo (T-27) | `D-04` | CI | 0,5 | Se mantiene legible a 1920×1080 con los iconos del sistema de diseño |
| Panel ISO y Nivel 3 (T-50..T-54) | HU-24 se cubre con la auditoría de T-10b | SE, FI, MA | 1,2 | La diapositiva ISO de `18` §4 cita evidencias reales (403, pruebas, restauración) en lugar de un panel |
| Tableros D1–D2 de docente y estudiante (T-42) | HU-06/07 por formularios con filtro de rol | AF | 0,2 | Se muestra el rol docente en la matriz de roles |
| Rotación del QR (T-23) | Anti-trampa de `T-43` §5 regla 5 | SE | 0,1 | Se dice «QR por evento»; la rotación queda como mejora |

**Diferenciador (15 pts).** El portafolio "5 + 1" de `13` §4 queda: #1 Historial en 20 s (barra + línea de tiempo en A; con Ctrl+K en B), #2 Cero duplicados (aviso y fusión en A; con puntuación y deshacer en B), #4 Mi ruta (portal con niveles en A; con mapa mínimo en B), T Demo confiable (completo). #3 Calidad de datos y #5 Del dato al conocimiento pasan a "siguiente paso". El pitch debe sostener el diferenciador con lo que existe: la combinación **historial + duplicados + recompensas por hechos reales en una sola base**, sin afirmar «ninguna alternativa lo ofrece» (`13` §1.3).

## 8. Ruta crítica, paralelización y bloqueos

### 8.1 Versiones recortadas ("rojo") con su costo

Horas totales de la tarea en su versión recortada y puntos de referencia que se pierden (peso de la tarea × (1 − fracción conservada), escala de §9).

| Tarea | Horas A → recortada | Qué queda | Pierde (pts) | ISO / requisito |
|---|---|---|---:|---|
| T-11 | 2,5 → 2,0 | Lista y ficha sin filtros de municipio | 0,5 | AF · RF-01 |
| T-12 | 1,75 → 1,25 | Detección exacta y probable con fusión por botón, sin elegir campos | 0,7 | AF, PR · RF-02/03 |
| T-13 | 1,25 → 0,75 | Búsqueda por texto parcial en la lista, sin barra global | 0,6 | ED · RF-28 |
| T-14 | 1,0 → 0,5 | Subir CSV y confirmar con resumen de conteos, sin vista previa por fila | 1,0 | CO · RF-15 |
| T-15 | 0,75 → 0,5 | Lista cronológica sin filtros | 0,85 | AF · RF-14 |
| T-21 | 0,75 → 0,5 | Un solo recordatorio (24 h) | 0,5 | FI · RF-09 |
| T-23 | 2,0 → 1,5 | Asistencia manual, sin QR | 0,5 | AF · RF-12 |
| T-24 | 1,5 → 1,0 | Inscripción y asistencia manual, sin pantalla de QR | 0,5 | CI · RF-11/12 |
| T-30 | 2,5 → 1,75 | Solo los totales que usa la demo | 0,3 | FI · RNF-14 |
| T-31 | 0,5 → 0 | Solo el comando `demo:reset` | 0,4 | FL · RNF-14 |
| T-43 | 1,75 → 1,25 | Puntos y niveles sin insignias | 0,6 | CI · RF-17/18 |
| T-44 | 2,0 → 1,25 | M2, M3 y M6; sin M7 de logros | 1,0 | CI · RF-13 |
| T-45 | 1,25 → 0,75 | Caracterización y brechas por dimensión sin lista de empresas | 1,0 | AF · RF-20..22 |

Orden de uso (si hay que cortar más): primero las que más horas devuelven por punto perdido: T-31 (0,5 h por 0,4), T-23 (0,5 por 0,5), T-24 (0,5 por 0,5), T-21 (0,25 por 0,5), T-43 (0,5 por 0,6), T-13 (0,5 por 0,6), T-12 (0,5 por 0,7), T-45 (0,5 por 1,0), T-44 (0,75 por 1,0), T-14 (0,5 por 1,0), T-15 (0,25 por 0,85). Nunca se recorta T-10, T-20, T-22, T-41, T-42 ni T-46: su pérdida rompe un paso del camino dorado o un requisito de seguridad y protección.

### 8.2 Ruta crítica

Una cadena cuyo retraso mueve el hito H2 (00:30). Las holguras son en horas de trabajo entre el fin de la predecesora y el inicio de la sucesora, calculadas sobre los calendarios de §5.2 y §6.2.

1. **Cadena de datos:** T-11a (S, 10:30–10:45) → T-20 (J, inicia 10:45; holgura **0,0 h**) → T-21 → T-22 → T-23 → T-25 → T-24 → T-30 → T-31 → T-91.
2. **Cadena de recompensas:** T-23 (J, 18:15) → T-43b (MP, 18:15; holgura **0,0 h**) → T-44 → T-45 → T-91.
3. **Cadena de reportes:** T-16 (S) → T-45 (MP); holgura **0,25 h** en A y 0,5 h en B.

### 8.3 Quién bloquea a quién

| Bloqueador → bloqueado | Qué entrega | Holgura | Si falla |
|---|---|---|---|
| S → J | T-11a: esquema raíz de empresas y usuarios, en `develop` a las 10:45 | 0,0 h | J arranca T-20 con un doble de prueba de `Empresa`; T-11a es lo primero que hace S, antes de T-10a |
| S → MP | T-11a a las 10:45 | 0,75 h | MP usa un doble de prueba para T-41 hasta las 11:30 |
| S → J | T-10a (auth, 12:00) → T-23 de J (15:45) | 1,75 h | J usa `actingAs` en pruebas; integra el middleware al rebasar |
| J → MP | T-23 (18:15) → T-43b (MP, listeners de asistencia) | 0,0 h | T-43b se hace con un evento simulado; se conecta al terminar T-23 |
| J → MP | T-22 (15:45) → T-44 | 3,25 h | Sin riesgo |
| J → MP | T-24 (21:00 en B, 20:45 en A) → M5 dentro de T-44 | 0,0 h (blando) | M5 se monta al final de T-44 |
| MP → J | T-43b (18:30) → T-30 (21:00) | 1,75 h | Seeder con factories propias |
| MP → S | T-41 (14:45) → T-16 (20:45) y T-15 | ≥ 4,5 h | Sin riesgo |
| S → MP | T-16 (21:30 A, 21:45 B) → T-45 | 0,25 h A · 0,5 h B | MP construye la pantalla con datos de ejemplo y conecta al final |
| S → MP | T-13x (21:00) → T-17 (21:45) | 0,75 h | G-03 corta T-17 |
| S → MP | T-12x (00:15) → T-19 | 0,0 h | G-08 corta T-19 |

### 8.4 Paralelización

| Ventana | En paralelo (personas distintas) |
|---|---|
| 10:30–12:00 | S: T-11a, T-10a · J: T-02, T-20 (back sin auth) · MP: T-40, T-41 (inicio) |
| 14:00–17:00 | S: T-10b, T-11b, T-12 · J: T-21, T-22, T-23 · MP: T-41, T-42, T-43a |
| 17:30–19:00 | S: T-12, T-13 · J: T-23, T-25, T-24 · MP: T-43a, T-43b, T-46 |
| 19:45–00:30 | S: T-13, T-16, T-15, T-14 (+T-13x, T-12x) · J: T-24, T-30, T-31 · MP: T-44, T-45 (+T-17, T-47a, T-19) |

Dentro de una persona, las tareas se hacen **en el orden de las tablas** (no se paraleliza a una persona). Las revisiones cruzadas (S→J→MP→S, 5 min, `07` §2) se hacen en los cambios de tarea y consumen colchón, no calendario.

## 9. Puntaje esperado de Funcionalidad

### 9.1 Supuestos (todos `PROPUESTA`; sin fuente externa)

1. **La rúbrica no reparte los 60 puntos por sub-aspecto** (TyC §8). Se usa la convención de `13` §1.2: seis aspectos de 10 puntos (respuesta al problema, facilidad de uso, coherencia, nivel de desarrollo, automatización, ISO/IEC 25010). No es la rúbrica de los jurados.
2. **Referencia de A completa = 43,0 / 60 (72 %)**. Es un supuesto central, no una medición: no hay datos de otros equipos ni del hardware del laboratorio. Reparto: 7,6 · 6,8 · 7,2 · 7,0 · 7,4 · 7,0.
3. **B completa = 46,0 / 60**: respuesta al problema 8,2 · facilidad de uso 8,2 · coherencia 7,5 · desarrollo 7,3 · automatización 7,6 · ISO 7,2. Las tres opciones aportan 1,2 (E1) + 0,8 (E2) + 1,0 (E3).
4. **Peso de cada tarea de A** (puntos de referencia que se pierden si la tarea no existe; suman 43,0): T-02 0,81 · T-10 2,84 · T-11 3,25 · T-12 2,84 · T-13 2,03 · T-14 2,03 · T-15 2,84 · T-16 1,22 · T-45 2,43 · T-20 2,03 · T-21 1,62 · T-22 1,22 · T-23 2,43 · T-24 1,62 · T-25 1,22 · T-40 1,62 · T-41 2,03 · T-42 2,03 · T-43 2,03 · T-44 2,84 · T-46 0,41 · T-30 1,22 · T-31 0,41. Criterio: más peso a lo que sostiene varios criterios «cómo sabremos» del TyC §5 y a lo que está en el camino dorado.
5. **Duración real = nominal × f.** `f` ~ lognormal con media *m* y σ = 0,30; factor por persona con σ = 0,10; ×1,15 para tareas que empiezan después de la hora de trabajo 8,5 (22:15). *m* = 1,2 es el valor central por defecto (sin historial del equipo; las estimaciones de las rondas previas son nominales y ya declaraban déficit); se muestra la sensibilidad de 1,0 a 1,4.
6. **Reglas simuladas:** regla "rojo" (§6.3) con versión recortada de §8.1; las opciones de B se saltan si el atraso al inicio supera 0,25 h; terminar entre las horas de trabajo 10,75 y 11,25 cuenta pero resta 1,0 punto (ensayo recortado); pasada esa hora la tarea se pierde; cada tarea de la ruta dorada perdida resta 1,0 punto adicional (tope 6).
7. **Límite:** las tres personas se simulan sin bloqueo entre sí y sin ayuda mutua, por lo que los números son **pesimistas** respecto a lo que permite el tablero (§11, ayuda cruzada). Las corridas usan los mismos números aleatorios para A, B y v2 (comparación pareada), 20 000 corridas por valor de *m*. El script de la simulación vive en el scratchpad de esta sesión y no está en el repositorio (como en F14 y F17); este apartado describe el algoritmo completo.

### 9.2 Resultado (puntos de 60)

| Sobrecosto medio *m* | Plan R2 | A | B | B − A | P(B > A) | P(B < A) | P(A sin perder tarea de la ruta) |
|---|---:|---:|---:|---:|---:|---:|---:|
| 1,0 | 33,5 | 41,1 | 42,9 | +1,79 | 0,89 | 0,03 | 0,92 |
| 1,1 | 30,4 | 39,3 | 40,4 | +1,10 | 0,72 | 0,05 | 0,81 |
| **1,2** | **27,8** | **37,0** | **37,6** | **+0,59** | 0,53 | 0,08 | 0,61 |
| 1,3 | 25,6 | 34,4 | 34,6 | +0,28 | 0,34 | 0,09 | 0,38 |
| 1,4 | 23,5 | 31,6 | 31,7 | +0,13 | 0,21 | 0,08 | 0,18 |

Percentil 5 con *m* = 1,2: A 31,1 · B 31,2. Probabilidad de completar las opciones con *m* = 1,0 / 1,1 / 1,2: E1 0,51 / 0,26 / 0,11; E2 0,50 / 0,24 / 0,09; E3 0,66 / 0,43 / 0,23. Cuando B pierde frente a A, la pérdida media es de 0,9 a 1,1 puntos. El plan R2 queda entre 7,6 y 9,2 puntos por debajo de A en todos los *m* probados: ese es el valor de R3.

### 9.3 Sensibilidad (con *m* = 1,2)

| Variación | A | B | B − A |
|---|---:|---:|---:|
| Valor de las opciones × 0,5 | 37,0 | 37,3 | +0,37 |
| Valor de las opciones × 1,5 | 37,0 | 37,8 | +0,80 |
| Referencia de A = 40 | 34,3 | 34,9 | +0,57 |
| Referencia de A = 47 | 40,5 | 41,1 | +0,61 |
| σ = 0,20 sin fatiga | 37,7 | 38,6 | +0,89 |

La conclusión B ≥ A no cambia con ninguna de estas variaciones. Con *m* ≥ 1,3 la ventaja de B es menor que la incertidumbre del modelo (≤ 0,3 puntos) y el criterio de decisión pasa a ser operativo (§9.5).

### 9.4 Lectura honesta

- **El plan A cabe sin cortes solo con sobrecosto ≤ ≈ 13 %** (colchón 1,25 h sobre 9,5 h en S). Con *m* = 1,2 hay 39 % de probabilidad de perder al menos una tarea de la ruta dorada si nadie ayuda a nadie y no se usan las palancas de abajo.
- **Palancas no modeladas** (cada una con su costo): L1, reducir T-91 de 1,0 a 0,5 h (+0,5 h por persona; el ensayo cronometrado pasa a 6:00–7:00 del día 2); L2, usar las 0,5 h de J durante V1; L3, ayuda cruzada del que tiene colchón (S y MP) a J en T-30/T-31; L4, ventana de correcciones del día 2 (§10: S 0,75 h y J 0,5 h libres).
- **No se garantiza ningún puntaje.** Los números sirven para comparar variantes bajo los mismos supuestos, no para predecir la nota.

### 9.5 Recomendación

**Adoptar la variante B con compuertas, con A como piso comprometido** (a ratificar en T-01):

1. B ≥ A en promedio con todo *m* de 1,0 a 1,4 (+1,79 a +0,13) y con todas las variaciones de §9.3.
2. El costo de intentar B es acotado: pierde en 3–9 % de las corridas, ≈ 1 punto; las compuertas cortan las opciones **antes** de que consuman el colchón del núcleo.
3. E1 y E3 son exactamente los dos momentos "wow" del guion (`18` §2); sostienen el criterio Diferenciador (15 pts), que esta simulación **no** valora. Con la probabilidad de hacer ambas (0,41 / 0,18 / 0,06 para *m* = 1,0 / 1,1 / 1,2) y un supuesto de +1,5 puntos de Diferenciador si ambas se muestran, el valor esperado extra es +0,6 / +0,3 / +0,1.
4. Regla operativa: B empieza el 28 a las 10:30 igual que A; **la primera decisión es G-01 a las 19:00**. Si H1 no está completo, el equipo está en A, sin discusión.
5. Si en T-01 el equipo no está dispuesto a respetar las compuertas, adoptar A (no B sin compuertas).

## 10. Día 2 y después del FF

Capacidad por persona: 6:00–8:00 (2,0 h), V2 8:00–8:30, 8:30–9:00 (0,5 h, solo cambios ≤ 15 líneas aprobados por dos personas). `tareas/_INDEX.md` asignaba 1,0 h de T-95 a una ventana de 0,5 h (C-30); R3 lo corrige.

| Persona | Tareas del día 2 | h | Libre |
|---|---|---:|---:|
| Santiago | T-93 0,5 · T-96 seguridad 0,75 · entrega y lista T-60 0,5 · correcciones `P0` 0,75 | 2,5 | 0,0 (8:30–9:00 incluido) |
| Julián | T-93 0,5 · T-94 1,0 (rc + restauración probada, video con MP) · entrega, etiqueta `v1.0` y despliegue 0,5 · correcciones `P0` 0,5 | 2,5 | 0,0 |
| María Paula | T-93 0,5 · T-97 reducida a 0,5 (3 personas, tarea + SUS) · T-96 accesibilidad 0,25 · video 0,5 · T-95 0,75 | 2,5 | 0,0 |

T-96 se reparte (S 0,75 + MP 0,25), T-97 baja de 0,75 a 0,5 h y T-95 de 1,0 a 0,75 h por la plantilla P-07. Las 3 personas para T-97 se piden a otros equipos o al personal del laboratorio durante la cena del 28 (PA-33). El FF a la 01:30 se mantiene; el sueño es de 2:00 a 6:00.

## 11. Tablero de seguimiento (una página, se llena cada ≈ 2 h de trabajo)

Imprimir una copia. Un solo responsable lo llena en la sincronización de 5 minutos de `07` §8 (rotando: 12:00 S, 16:00 J, 19:00 MP, 21:00 S, 23:00 J, 00:30 MP).

**Semáforo.** Verde: atraso ≤ 0,25 h. Ámbar: 0,25–0,5 h (no se inicia ninguna opción de B). Rojo: > 0,5 h (versión recortada de §8.1 y petición de ayuda). **Ayuda cruzada:** quien tenga colchón sin gastar toma la tarea más corta de la persona en rojo: S toma T-31 o T-25; MP toma T-46 de otra persona o T-31; J nunca recibe tareas largas.

**Plan por punto de control** (variante B; en A se quitan las tareas con x o [B]; "termina" = debe estar en `develop` con CI verde):

| Control | Santiago · plan | Julián · plan | María Paula · plan |
|---|---|---|---|
| 12:00 | termina T-11a, T-10a | termina T-02, T-20 | termina T-40; en curso T-41 |
| 16:00 | termina T-10b; en curso T-11b | termina T-21, T-22; en curso T-23 | termina T-41; en curso T-42 |
| 19:00 · **G-01 (H1)** | termina T-11b, T-12; en curso T-13 | termina T-23, T-25; en curso T-24 | termina T-42, T-43a, T-43b, T-46 |
| 21:00 | termina T-13, T-13x [B] | termina T-24; inicia T-30 | en curso T-44 |
| 23:00 | termina T-16, T-15; en curso T-14 | en curso T-30 | termina T-44, T-17 [B]; en curso T-45 |
| 00:30 · **G-09 (H2)** | termina T-14, T-12x [B] | termina T-30, T-31 | termina T-45, T-47a [B], T-19 [B] |

**Hoja de registro** (copiar por control):

| Control (hora) | Persona | Tarea en curso | Horas trabajadas acumuladas (plan / real) | Atraso (h) | Semáforo | Compuerta evaluada y resultado | Decisión y dueño |
|---|---|---|---|---:|---|---|---|
| | S | | | | | | |
| | J | | | | | | |
| | MP | | | | | | |

Horas acumuladas de plan en cada control: 12:00 → 1,5 · 16:00 → 3,5 · 19:00 → 6,0 · 21:00 → 7,25 · 23:00 → 9,25 · 00:30 → 10,75.

## 12. Efectos sobre otros archivos

| Archivo | Cambio R3 |
|---|---|
| `18_pitch_v2.md` | Las versiones de la demo A/B/C de `18` §3 se corresponden así: plan A ≈ versión C (barra + línea de tiempo, banner y fusión, portal con niveles, dashboard con brechas); plan B ≈ versión B con D1 (Ctrl+K), D2 (deshacer) y D5 (mapa mínimo) cuando pasen G-03, G-06 y G-05. En el minuto 65–85 de la demo, «cola de validación → aprobar» se sustituye por «el equipo marca el compromiso como cumplido» (T-43 sin cola). La escena D7 «calidad de datos 72 %» no se muestra; se muestra el indicador «% con sector y tamaño». |
| `07`, `14`, `backlog.csv`, `tareas/_INDEX.md`, `tareas/T-XX.md` | Sección R3 con horas A/B, responsable y compuerta; **las horas v2 no se modifican** hasta ratificar (PA-30/PA-31) |
| `99_preguntas_abiertas.md` | PA-30 con recomendación R3; PA-31..PA-33; contradicciones C-26..C-37 (§K.9) |
| `10_preguntas_cde.md` | Sin cambios; la pregunta PA-22 se lee con la declaración de §4 |

## 13. Contradicciones R3 con rondas anteriores

| # | Contradicción | Resolución R3 | Decide |
|---|---|---|---|
| C-26 | `backlog.csv`, `14` §4 y `tareas/_INDEX.md` usan las horas de v1 de T-12, T-13, T-14, T-16 y T-40 (1,5 · 2,5 · 2,0 · 1,25 · 1,5/1,0) mientras `07` §5 y `14` §6 usan las de R2 (2,25 · 2,75 · 1,5 · 0,75 · 1,0) | El CSV conserva `horas`; se añaden `horas_A`, `horas_B` que mandan para el plan R3 | Equipo (T-01) |
| C-27 | `02` §3.4 «nunca se corta RF-17/18»; R3 aplaza rachas y cola de validación (parte de RF-18, HU-19) en A y B | Puntos, niveles e insignias (3) se mantienen; rachas a la lista de espera | Equipo |
| C-28 | `07` T-02 dedica 1,0 h el 28 a «desplegar el esqueleto» mientras `03` §5 y `INDEX` ya lo exigen antes | T-02 pasa a 0,25 h | Julián |
| C-29 | `tareas/_INDEX.md` inicia T-41/T-42 (MP) a las 11:30 y 14:45 y T-20 (J) a las 14:00 antes de que exista T-11 (termina 17:00) | Esquema raíz T-11a en los primeros 15 minutos (S) | Santiago |
| C-30 | `tareas/_INDEX.md` asigna 1,0 h de T-95 a 08:30–09:00 (0,5 h), y T-96 deja la accesibilidad de MP sin horas | §10 | María Paula |
| C-31 | HU-24 (auditoría filtrable) solo tenía tarea Could (T-50) | Pantalla simple dentro de T-10b, sin sumar horas | Santiago |
| C-32 | `18` §5 usa cola de validación (T-43) y mapa de ruta (T-47) en la versión A | §12 | María Paula |
| C-33 | `13` §4 comprometía 5 + 1 diferenciadores | Quedan #1, #2, #4 parciales y T completo; #3 y #5 a siguiente paso | Equipo |
| C-34 | `99` PA-23 propone mover T-16 a J | Se descarta: T-16 dura 0,75 h y queda con S | Equipo |
| C-35 | `tareas/_INDEX.md` §1 cuenta 11,75 h incluyendo la hora de T-91 y además la ocupa para T-91 | T-91 está dentro de las 11,75 h | Equipo |
| C-36 | T-10, T-11 y T-43 eran tareas únicas | Se parten en a/b para quitar bloqueos | Equipo |
| C-37 | PA-30 opción 2 recomendaba mover T-25 a MP | T-25 se queda en J: A y B comparten responsable y MP necesita sus horas para B | Equipo |

## 14. Preguntas abiertas nuevas

- **PA-31** · ¿Variante A o B? Recomendación: B con compuertas (§9.5). Decide: los tres en T-01.
- **PA-32** · ¿Se aceptan las actividades «Verde» de §4 como compatibles con el TyC §11? Recomendación: sí, declarándolo a las 8:30. Decide: CDE.
- **PA-33** · ¿De dónde salen las 3 personas para la prueba de usabilidad T-97 a las 6:30? Recomendación: pedirlas a otros equipos o al personal del laboratorio durante la cena del 28. Decide: María Paula.

## Criterio de aceptación

1. Las dos variantes tienen calendario hora a hora para las tres personas (§5.2, §6.2) y ninguna persona supera 10,75 h de construcción (§3).
2. Cada compuerta tiene hora, dueño, condición y corte (§6.3); cada recorte, el requisito, la característica ISO y la compensación (§7, §8.1).
3. El puntaje esperado tiene supuestos explícitos, resultados por sobrecosto y sensibilidad (§9).
4. PA-30 queda con recomendación lista y marcada como **no aplicada** (§0, §9.5, §14).
5. La lista de lo que se puede hacer antes del 28 es exacta, con clase, horas y responsable (§4).
