# Índice de diagramas de arquitectura · UNAB Venture Challenge 2026 · reto CDE

**Objetivo.** Dar a las tres personas del equipo (y a un agente de programación) los diagramas de arquitectura del manual, fieles a `03`, `04`, `05`, `06`, `20`, `23` y `investigacion/06`, con notación C4, UML y entidad-relación, dibujados como código con Mermaid y entregados también como SVG y PNG.

**Entradas.** `CLAUDE.md`, `manual/INDEX.md` y los archivos citados. Fecha de elaboración: 27-oct-2026.

**Qué hay.** 30 diagramas (28 en Mermaid, 1 matriz en imagen y 1 diapositiva en SVG), el método (`00`), el registro de elementos con fuente (`01`), la verificación de calidad (`90`) y las preguntas abiertas (`99`).

## 1. Los diagramas

| # | Diagrama | Qué pregunta responde | A quién sirve |
|---|---|---|---|
| 10 | [C4 nivel 1 · Contexto del sistema](10_c4_contexto.md) | ¿Quién usa el sistema, con qué sistemas externos habla y qué queda dentro y fuera de lo que construye el equipo? | Todos: jurados, CDE y equipo (diagrama sin tecnologías). |
| 11 | [C4 nivel 2 · Contenedores](11_c4_contenedores.md) | ¿Qué piezas ejecutables y almacenes forman el sistema y cómo se hablan? | S y J (arquitectura, operación). |
| 12 | [C4 nivel 3 · Mapa de módulos y dependencias permitidas](12_c4_modulos.md) | ¿Qué módulo puede depender de cuál y cuáles se comunican solo por eventos? | S, J y quien programe (regla de límites de `05` §2). |
| 13 | [C4 nivel 3 · Componentes de Empresas (empresas y duplicados)](13_c4_componentes_empresas.md) | ¿Cómo se normaliza, valida, detecta, fusiona y enriquece una empresa dentro del módulo? | S (núcleo de datos). |
| 14 | [C4 nivel 3 · Componentes de Citas (citas y recordatorios)](14_c4_componentes_citas.md) | ¿Cómo pasa una cita de solicitada a recordada, y quién envía el correo? | J. |
| 15 | [C4 nivel 3 · Componentes de Eventos (eventos y asistencia)](15_c4_componentes_eventos.md) | ¿Cómo se inscribe con cupo, se registra la asistencia y se recomienda un evento? | J. |
| 16 | [C4 nivel 3 · Componentes de Diagnosticos y Proyectos](16_c4_componentes_diagnostico_proyectos.md) | ¿Cómo se calcula una brecha y cómo nace, avanza y vence un compromiso? | MP. |
| 17 | [C4 nivel 3 · Componentes de Gamificacion e Historial](17_c4_componentes_gamificacion_historial.md) | ¿Cómo convierten un hecho publicado por otro módulo en puntos y en un hito de la línea de tiempo? | MP y S. |
| 18 | [C4 nivel 3 · Componentes de Reportes e Importacion](18_c4_componentes_reportes_importacion.md) | ¿De dónde salen las cifras del reporte y cómo entra un CSV a la base sin duplicar? | S. |
| 20 | [Modelo entidad-relación 1 de 4 · Núcleo de empresas y personas](20_er_nucleo.md) | ¿Cómo se relacionan empresas, personas, usuarios y catálogos, y dónde viven la procedencia y la confianza? | S y J. |
| 21 | [Modelo entidad-relación 2 de 4 · Diagnósticos, proyectos, planes y citas](21_er_acompanamiento.md) | ¿Qué tablas guardan el acompañamiento a una empresa y cómo se enlazan? | S, J y MP. |
| 22 | [Modelo entidad-relación 3 de 4 · Eventos, asistencia y gamificación](22_er_eventos_gamificacion.md) | ¿Cómo se relacionan eventos, inscripciones, asistencias, retos, puntos e insignias? | J y MP. |
| 23 | [Modelo entidad-relación 4 de 4 · Auditoría, fusiones, importaciones, recordatorios e impacto](23_er_sistema_trazabilidad.md) | ¿Dónde queda el rastro de cada acción y qué guarda cada tabla de trazabilidad? | S. |
| 30 | [Vista de despliegue · Entorno de la demostración](30_despliegue.md) | ¿Dónde corre cada cosa el día de la demo y de qué se cuelga? | J (operación) y jurados técnicos. |
| 31 | [Fallos de la infraestructura y su plan de cambio](31_fallos_plan_cambio.md) | ¿Qué falla, cuánto se espera y a qué se cambia? | Todos (ensayo de `23`). |
| 40 | [Secuencia · Alta de empresa con aviso de NIT y duplicados](40_secuencia_alta_empresa.md) | ¿Qué pasa, paso a paso, cuando el equipo crea una empresa? | S y J. |
| 41 | [Secuencia · Fusión de duplicados y deshacer](41_secuencia_fusion_deshacer.md) | ¿Cómo se fusionan dos fichas sin perder historial y cómo se revierte? | S. |
| 42 | [Secuencia · Consulta al registro mercantil con caché y degradación](42_secuencia_consulta_registro.md) | ¿Qué pasa si el registro oficial responde, tarda o falla? | S. |
| 43 | [Secuencia · Recordatorio automático de una cita](43_secuencia_recordatorio_cita.md) | ¿Cómo se crean, envían y reintentan los recordatorios? | J. |
| 44 | [Secuencia · Puntos e insignias por un hecho real](44_secuencia_puntos_insignias.md) | ¿Cómo un hecho verificable del sistema se convierte en puntos sin doble cobro? | MP. |
| 45 | [Secuencia · Resultado de impacto de declarado a verificado](45_secuencia_verificacion_impacto.md) | ¿Quién y con qué condiciones convierte un resultado declarado en verificado? | S, MP y jurado de negocio. |
| 50 | [Estados · Cita](50_estados_cita.md) | ¿Qué estados tiene una cita y qué cambios son válidos? | J. |
| 51 | [Estados · Compromiso del plan de acción](51_estados_compromiso.md) | ¿Cómo avanza un compromiso y por qué `vencido` no se marca a mano? | MP. |
| 52 | [Estados · Evento e inscripción](52_estados_evento_inscripcion.md) | ¿Cómo pasa un evento a realizado y una inscripción a cancelada, y dónde queda la asistencia? | J. |
| 53 | [Estados · Recordatorio](53_estados_recordatorio.md) | ¿Qué estados tiene un recordatorio y cuándo se rinde? | J. |
| 54 | [Estados · Verificación de un dato o resultado](54_estados_verificacion.md) | ¿Cuándo un dato pasa de declarado a verificado? | S y MP. |
| 60 | [Seguridad · Autenticación con token](60_seguridad_autenticacion.md) | ¿Cómo entra un usuario, qué pasa con los intentos fallidos y cómo sale? | S. |
| 61 | [Seguridad · Capas de autorización, auditoría y límites](61_seguridad_autorizacion_limites.md) | ¿Por qué capas pasa una petición y dónde se rechaza? | S y jurado técnico (ISO 25010: Seguridad). |
| 62 | [Seguridad · Matriz rol × recurso](62_seguridad_matriz_rol_recurso.md) | ¿Qué rol puede leer o escribir cada recurso? | S y jurado técnico. |
| 70 | [Versión simplificada para una diapositiva del pitch](70_pitch_una_diapositiva.md) | ¿Cómo se explica en una imagen que cada dato dice de dónde viene? | MP y quien presenta; jurados de negocio. |

Convención de colores y formas (común a todos): óvalo oscuro = persona; rectángulo azul grueso = módulo o sistema propio; rectángulo blanco = contenedor; rectángulo gris-azulado = componente; cilindro = almacén de datos; hexágono gris = sistema externo; **borde o línea discontinua naranja = propuesta de la Ronda 4 sin ratificar**; borde punteado = decidido en R3 con alcance recortado. Paleta de `16_sistema_de_diseno.md` §4.1.

## 2. Orden de lectura

| Persona | Lee | Tiempo |
|---|---|--:|
| Todos | 10, 11, 12, 30, 31, 70 | 20 min |
| Santiago | 13, 20, 21, 23, 40, 41, 42, 60, 61, 62 | 40 min |
| Julián | 14, 15, 30, 31, 43, 50, 52, 53 | 30 min |
| María Paula | 16, 17, 22, 44, 51, 54, 70 | 30 min |
| Revisión del jurado técnico | 11, 61, 62, 90 (mapa a ISO 25010) | 15 min |

## 3. Qué diagramas responden a qué característica ISO/IEC 25010:2023

| Característica | Diagramas |
|---|---|
| Adecuación funcional | 10, 13 a 18, 40 a 45 |
| Eficiencia de desempeño | 11, 18 (caché de 5 min) |
| Compatibilidad | 11, 18 (CSV), 42 |
| Capacidad de interacción | 70, 15 (QR) |
| Fiabilidad | 30, 31, 42, 43, 53 |
| Seguridad | 60, 61, 62, 23 |
| Mantenibilidad | 12, 17 (listeners) |
| Flexibilidad | 30, 11 |
| Protección | 41, 51, 61 |

## 4. Cómo se regeneran (instrucciones exactas)

Probado el 27-oct-2026 en Linux con Node 22.22.0 y el Chromium que trae el entorno.

1. Instalar en una carpeta vacía fuera de `manual/`: `npm init -y`, luego `PUPPETEER_SKIP_DOWNLOAD=1 npm i @mermaid-js/mermaid-cli@12.0.0` (instala Mermaid 12.2.0, licencia MIT).
2. Crear `pp.json` con la ruta del navegador y `--no-sandbox` (EJEMPLO, no es código de la aplicación):

```
{"executablePath":"/ruta/a/chrome","args":["--no-sandbox"]}
```

3. Para cada fuente `src/NN_nombre.mmd`: `mmdc -p pp.json -b "#F7F4EF" -i src/NN_nombre.mmd -o img/NN_nombre.svg` y la misma orden con `-s 2 -o img/NN_nombre.png`.
4. La diapositiva `img/70_pitch_una_diapositiva.svg` es la propia fuente (SVG escrito a mano); su PNG de 1920 × 1080 se obtiene abriendo el SVG en un navegador con ese tamaño de ventana y capturando la pantalla. La matriz `img/62_seguridad_matriz_rol_recurso.png` sale de la tabla de `62_seguridad_matriz_rol_recurso.md`, dibujada en una página HTML y capturada igual.
5. **Script de consistencia (V-17).** Reimplementarlo así: (a) leer `01_trazabilidad.md` y reunir la primera columna de todas las tablas más todo lo que va entre acentos graves; (b) en cada `.mmd` de flujo, extraer los textos entre `<b>` y `</b>` y exigir que estén en la primera columna; (c) en cada `.mmd` entidad-relación, exigir que cada tabla esté entre acentos graves; (d) en secuencias, exigir que cada participante esté en la primera columna y que cada `MÉTODO /ruta` exista; (e) en estados, exigir que cada estado esté entre acentos graves; (f) en secuencias y estados, rechazar todo `;` dentro de un mensaje o transición, porque Mermaid lo toma como separador de instrucciones; (g) fallar con la lista de nombres sin fuente.

## 5. Reglas para cambiar un diagrama

1. Primero se cambia el manual (o se registra la pregunta en `99_preguntas_abiertas_diagramas.md`); después el diagrama.
2. Un elemento nuevo entra primero a `01_trazabilidad.md` con su fuente y estado (D, R3 o P4).
3. Se regenera el SVG y el PNG, se abre la imagen y se actualiza la fila en `90_verificacion_calidad.md`.
4. Un commit por diagrama con el mensaje `docs: diagramas - <nombre>`.

## 6. Pendientes para quien ratifique

- Copiar las preguntas Q-D1 a Q-D19 de `99_preguntas_abiertas_diagramas.md` a `manual/99_preguntas_abiertas.md`.
- Actualizar `manual/PROGRESO.md` y `manual/INDEX.md` con una línea que apunte a esta carpeta (no se hizo: la instrucción era escribir solo en `manual/diagramas/`).
- Cuando se ratifiquen las propuestas de la Ronda 4, cambiar su estado de P4 a D en `01_trazabilidad.md` y quitar el borde discontinuo.

## Criterio de aceptación

1. Los 30 diagramas existen en `src/` (28), `img/` (SVG y PNG) y como archivo `.md` con título, leyenda y la frase «qué responde».
2. `90_verificacion_calidad.md` tiene una fila por diagrama y `99_preguntas_abiertas_diagramas.md` lista toda diferencia con el manual.
3. Las instrucciones de §4 reproducen las imágenes.
