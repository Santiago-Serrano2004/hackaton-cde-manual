# 00 · Cómo se documentan arquitecturas de verdad: método, herramienta y lista de verificación

**Objetivo.** Fijar, con fuentes primarias, qué es cada tipo de diagrama, qué debe y qué no debe mostrar, qué herramienta se usa para dibujarlos y con qué lista de 18 puntos se revisan. Todo diagrama de `manual/diagramas/` se revisa contra la §6.

**Entradas.** `CLAUDE.md`, `manual/INDEX.md`. **Fecha de consulta de todas las fuentes: 27-oct-2026.** **Acceso a internet:** probado al inicio de la sesión; funcionó (c4model.com, omg.org, arc42.org, mermaid.js.org, docs.github.com, registros npm y Maven Central).

**Decisión de este archivo.** Herramienta principal: **Mermaid 12.2.0 con Mermaid CLI 12.0.0** (§5). C4 se dibuja con *flowchart* de Mermaid siguiendo las reglas de notación de C4 (no con el tipo experimental `C4Context`).

## 1. Modelo C4 (c4model.com)

Fuente: Simon Brown, c4model.com, páginas `/diagrams`, `/diagrams/notation`, `/diagrams/system-context`, `/diagrams/container`, `/diagrams/component`, `/diagrams/code`, `/diagrams/dynamic`, `/diagrams/deployment`, `/abstractions/component`, `/faq`. Consultadas el 27-oct-2026. Nivel de confianza: PRIMARIA.

| Nivel | Qué muestra | Qué NO debe mostrar | Audiencia |
|---|---|---|---|
| **1 · Contexto del sistema** | El sistema en el centro, rodeado de las personas y los sistemas de software externos conectados directamente a él | «Tecnologías, protocolos y otros detalles de bajo nivel»: el foco está en personas y sistemas, no en tecnologías | Todos, técnicos y no técnicos |
| **2 · Contenedores** | La forma de alto nivel de la arquitectura: los contenedores (una aplicación o un almacén de datos), sus decisiones tecnológicas principales y cómo se comunican | Aspectos de despliegue (clustering, balanceadores, réplicas, conmutación): «very little about deployment aspects» | Personal técnico dentro y fuera del equipo |
| **3 · Componentes** | La descomposición de **un** contenedor: sus componentes, responsabilidades y tecnología | Componentes de otros contenedores como elementos principales. Un componente es «una agrupación de funcionalidad relacionada encapsulada tras una interfaz bien definida» y **no es una unidad desplegable**; un paquete, módulo, carpeta o namespace no es un componente por defecto | Arquitectos y desarrolladores; «only create component diagrams if you feel they add value» |
| **4 · Código** | Cómo se implementa un componente (clases, tablas) con UML de clases o entidad-relación | No se recomienda en general: los IDE lo generan | Arquitectos y desarrolladores |

Diagramas suplementarios de la misma fuente: **dinámico** (cómo colaboran los elementos para una historia de usuario; interacciones numeradas; basado en el diagrama de comunicación de UML; estilo colaboración o secuencia; «no se recomienda usarlo de forma habitual» sino para funcionalidades recurrentes e interacciones complejas) y **de despliegue** (instancias de contenedores sobre nodos de infraestructura de **un** entorno; uno por entorno; se permiten iconos si están en la leyenda).

**Reglas de notación** (`/diagrams/notation`): (1) cada diagrama debe entenderse por sí solo, sin narrativa; (2) título con tipo y alcance («System Context diagram for My Software System»); (3) leyenda que explique formas, colores, bordes, tipos de línea y puntas de flecha; (4) siglas comprensibles o explicadas en la leyenda; (5) el tipo de cada elemento explícito (Persona, Sistema, Contenedor, Componente); (6) cada elemento con una descripción corta; (7) cada contenedor y componente con su tecnología; (8) cada línea es una relación **unidireccional**; (9) cada línea con etiqueta coherente con la dirección, evitando palabras sueltas como «Uses»; (10) las relaciones entre contenedores con tecnología o protocolo; (11) colores libres pero consistentes dentro y entre diagramas; (12) pensar en impresión en blanco y negro y en daltonismo.

**Escala** (`/faq`): un diagrama muy grande debe dividirse en varios más simples, cada uno en el **mismo nivel de abstracción** y centrado en un contexto, un caso de uso o un área.

Fuente secundaria sobre errores (skills.visual-paradigm.com, sin autoría de Brown): exceso de detalle, notación inconsistente, leyendas pobres y más de cinco servicios en un mismo diagrama de contenedores; se usa solo como corroboración.

## 2. UML 2.x (OMG) para lo que C4 no cubre

Fuente: OMG, «About the Unified Modeling Language Specification Version 2.5.1», `https://www.omg.org/spec/UML/2.5.1/About-UML`, diciembre de 2017, documento `formal/17-12-05` (PRIMARIA). La página confirma la versión y menciona diagramas de clases, colaboración, componentes y despliegue. **[NO VERIFICADO en la fuente primaria]** la lista completa de 14 tipos y su clasificación (el PDF de la especificación superó el límite de lectura de la herramienta); la lista que sigue viene de fuentes secundarias (Visual Paradigm, TechTarget, 27-oct-2026): 7 diagramas de estructura (clases, objetos, componentes, estructura compuesta, paquetes, despliegue, perfiles) y 7 de comportamiento (casos de uso, actividades, máquina de estados y los de interacción: secuencia, comunicación, panorama de interacción, tiempos).

| Necesidad del proyecto | Diagrama estándar | Cómo se dibuja aquí |
|---|---|---|
| Flujos entre participantes en el tiempo | Secuencia (UML) o dinámico (C4) | `sequenceDiagram` de Mermaid con participantes nombrados como los contenedores y componentes de C4 |
| Ciclo de vida de un objeto con estados y transiciones | Máquina de estados (UML) | `stateDiagram-v2` de Mermaid |
| Dónde corre cada contenedor | Despliegue (UML y C4) | `flowchart` con subgrafos por nodo (Mermaid no tiene diagrama de despliegue estable; el tipo C4Deployment es experimental) |

## 3. Modelo entidad-relación

Fuente: P. Chen, «The Entity-Relationship Model: Toward a Unified View of Data», *ACM Transactions on Database Systems*, vol. 1, n.º 1, marzo de 1976, registro en `https://dspace.mit.edu/handle/1721.1/47638` (SECUNDARIA: registro bibliográfico; el PDF de `comp.nus.edu.sg` es un escaneo ilegible para la herramienta, **[NO VERIFICADO]** el texto). Notación: la de Chen usa rectángulos para entidades, elipses para atributos y rombos para relaciones; la «pata de gallo» es otra familia de notación (OpenDSA, SECUNDARIA; la atribución y la fecha de la pata de gallo **[NO VERIFICADO]**).

Notación elegida: **pata de gallo**, porque es la que dibuja Mermaid y la que lee un desarrollador de Laravel sin explicación. Reglas de Mermaid (`mermaid.js.org/syntax/entityRelationshipDiagram.html`, PRIMARIA): marcadores de dos caracteres, el exterior es el máximo y el interior el mínimo: `|o` cero o uno, `||` exactamente uno, `}o` cero o más, `}|` uno o más; relación identificante (línea continua `--`) cuando una entidad no existe sin la otra y no identificante (línea discontinua `..`); atributos `tipo nombre` con claves `PK`, `FK`, `UK` y comentario entre comillas; tipo con `?` para opcional (desde v11.16.0).

Cuándo usarla: para el modelo lógico de datos (aquí, `04_datos.md` §2). Nunca para flujos ni para despliegue.

## 4. arc42 (arc42.org)

Fuente: `https://arc42.org/overview` y `https://docs.arc42.org/home/`, licencia CC BY-SA 4.0, creada por Gernot Starke (PRIMARIA). La plantilla tiene 12 secciones: 1 Introducción y objetivos, 2 Restricciones, 3 Contexto y alcance, 4 Estrategia de solución, 5 Vista de bloques de construcción, 6 Vista de ejecución, 7 Vista de despliegue, 8 Conceptos transversales, 9 Decisiones de arquitectura, 10 Requisitos de calidad, 11 Riesgos y deuda técnica, 12 Glosario. La página no da número de versión de la plantilla ni guía de qué dibujar en las secciones 5–7 (**[NO VERIFICADO]**).

Correspondencia con esta carpeta:

| Sección arc42 | Diagrama de esta carpeta |
|---|---|
| 3 Contexto y alcance | `10` C4 nivel 1 |
| 5 Vista de bloques de construcción | `11` C4 nivel 2; `12`–`18` C4 nivel 3 |
| 6 Vista de ejecución | `40`–`45` secuencias |
| 7 Vista de despliegue | `30` despliegue y `31` plan de cambio |
| 8 Conceptos transversales | `50`–`54` estados; `60`–`62` seguridad |
| 9 Decisiones de arquitectura | `99_preguntas_abiertas_diagramas.md` (hasta decidir) y `05_arquitectura.md` §13 |
| Datos (dentro de 5 y 8) | `20`–`23` entidad-relación |
| Material para el pitch | `70` versión simplificada de una diapositiva |

## 5. Herramientas «diagrama como código»: comparación y elección

Fuentes: mermaid.js.org (`/syntax/c4.html`, `/syntax/sequenceDiagram.html`, `/syntax/stateDiagram.html`), docs.github.com (creación de diagramas), registro npm, plantuml.com (`/faq`, `/stdlib`), docs.structurizr.com (`/dsl`, `/cli`), d2lang.com (`/tour/intro`, `/tour/exports`), pkg.go.dev, Maven Central. Consultadas el 27-oct-2026.

| Criterio | Mermaid | PlantUML | Structurizr DSL | D2 |
|---|---|---|---|---|
| **C4** | Tipos `C4Context`, `C4Container`, `C4Component`, `C4Dynamic`, `C4Deployment`, pero **experimentales**: «The syntax and properties can change»; estilo fijo; sin leyenda, etiquetas ni diseño automático completo (PRIMARIA). Con *flowchart* se controla todo | Biblioteca estándar con «C4 Library» (`!include <C4/C4_Container>`); niveles que incluye: no confirmados en la página (PRIMARIA parcial) | Lenguaje específico del modelo C4 con vistas de contexto, contenedores, componentes, dinámicas y despliegue; **un solo modelo genera todas las vistas** (PRIMARIA) | Sin soporte específico de C4 en lo leído |
| **Se ve en GitHub sin herramientas** | **Sí**: GitHub renderiza `mermaid` en bloques de código de Markdown, issues y PR (PRIMARIA, docs.github.com) | No (GitHub solo lista mermaid, geojson, topojson y STL) | No | No |
| **Dependencias para generar SVG/PNG** | Node y un navegador sin interfaz. Probado aquí: Mermaid CLI 12.0.0 con el Chromium ya instalado generó SVG y PNG | Java y, para varios diagramas, Graphviz (PRIMARIA, plantuml.com/faq); en esta máquina hay Java y **no** hay Graphviz | Java; exporta a PlantUML, Mermaid y otros formatos, y existe una página «PNG and SVG» cuyo contenido no se leyó. Descarga del binario: GitHub devolvió 403 (**[NO VERIFICADO]** si genera SVG directamente) | Un solo binario; PNG sin Chromium (PRIMARIA). Instalación no probada aquí |
| **Licencia** | MIT (registro npm: `mermaid` 12.2.0 publicado el 13-oct-2026; `@mermaid-js/mermaid-cli` 12.0.0 publicado el 24-sep-2026) | GPL en la distribución principal; la página cita también versiones LGPL, Apache, EPL y MIT con menos funciones; POM de Maven Central 8059: GNU GPL | **[NO VERIFICADO]**: la página no la dice y el POM de `structurizr-dsl` 6.2.4 no declara licencia | MPL-2.0 (pkg.go.dev, módulo v0.7.2 de agosto de 2026) |
| **Diagramas de secuencia, estados, ER** | Sí, los tres, con pata de gallo y claves PK/FK/UK | Sí | No (es de arquitectura) | Sí (secuencia, tablas SQL) |
| **Estabilidad de versiones** | Mermaid 12 cambió el tema y el aspecto por defecto (`redux-color`, `neo`) respecto a la 11 (PRIMARIA): se fijan tema y aspecto de forma explícita en cada diagrama | Número de versión 8059 | Versión 6.2.4 del DSL (26-oct-2026) | v0.7.2; el paquete antiguo avisa de que existe una versión posterior |

**Elección: Mermaid.** Razones con evidencia: (1) **es la única que se ve en GitHub sin instalar nada**, y el equipo trabaja en GitHub (`03` §7); un diagrama que se renderiza en la revisión de la rama evita que el código fuente se desfase del PNG; (2) cubre **los cuatro tipos que el proyecto necesita** (arquitectura, secuencia, estados, ER) en una sola herramienta y un solo estilo; (3) la generación local ya se probó en esta máquina, con licencia MIT; (4) el tipo C4 experimental se evita dibujando con *flowchart* y aplicando a mano las 12 reglas de §1, que son de notación y no de herramienta.

**Qué se pierde y cómo se compensa.** Structurizr garantiza consistencia por construcción (un solo modelo). Mermaid no. Compensación: el registro de elementos con nombre exacto y fuente de `01_trazabilidad.md` y un script de consistencia (§6, V-17) que comprueba que cada nombre, tabla, endpoint y estado de cada diagrama existe en el registro. Riesgo restante: la versión de Mermaid que usa GitHub puede diferir de la 12.2.0 (**[NO VERIFICADO]**); por eso se confirman los SVG y PNG generados con la versión fijada, y el bloque `mermaid` del Markdown es una vista previa.

**Uso de Mermaid en este proyecto.** Tema `base` con las variables del sistema de diseño (`16_sistema_de_diseno.md` §4.1), aspecto `classic`, fuente Arial (la fuente de los documentos del CDE), curva de líneas ortogonal. Los colores nunca son el único portador de significado: cada tipo de elemento tiene además forma o borde distintos (V-12).

## 6. Errores típicos que advierte la bibliografía y lista de verificación (18 puntos)

Cada punto cita la regla de §1–§5 que lo origina. Cada diagrama se evalúa con cumple / no cumple / corrección hecha en `90_verificacion_calidad.md`.

| # | Punto de verificación | Origen |
|---|---|---|
| V-01 | Tiene **título** que dice tipo de diagrama y alcance | C4 notación (2) |
| V-02 | Tiene **leyenda** que explica formas, colores, bordes, líneas y puntas de flecha | C4 notación (3) |
| V-03 | Tiene **una frase «qué responde este diagrama»** al lado del diagrama | Regla de este proyecto; C4: «se entiende sin narrativa» (1) |
| V-04 | El **tipo** de cada elemento es explícito (Persona, Sistema, Contenedor, Componente, Tabla...) | C4 notación (5) |
| V-05 | **Ninguna caja sin responsabilidad**: cada elemento tiene una descripción corta | C4 notación (6) |
| V-06 | Cada contenedor y componente declara su **tecnología** | C4 notación (7) |
| V-07 | **Toda flecha tiene etiqueta con verbo**, no palabras sueltas como «usa» | C4 notación (9) |
| V-08 | Toda relación entre contenedores indica **protocolo o tecnología** | C4 notación (10) |
| V-09 | Cada flecha es **unidireccional** (una relación de ida; la respuesta no se dibuja como flecha aparte salvo en secuencia) | C4 notación (8) |
| V-10 | **Un solo nivel de abstracción** por diagrama (no mezclar personas con clases, ni contenedores con componentes) | C4 `/faq` |
| V-11 | **Máximo ~12 elementos** por diagrama; si hay más, se divide | C4 `/faq`; fuente secundaria: más de cinco servicios por diagrama |
| V-12 | Se entiende **en blanco y negro y con daltonismo**: forma o borde distinto por tipo, nunca solo color | C4 notación (12) |
| V-13 | **Colores consistentes** entre diagramas (un tipo de elemento, un color) y con la paleta del manual, con contraste AA | C4 notación (11); `16` §4.1 |
| V-14 | Diagramas de **contexto sin tecnologías ni protocolos**; diagramas de **contenedores sin detalles de despliegue** | C4 `/system-context`, `/container` |
| V-15 | Los **componentes no se confunden con unidades desplegables ni con carpetas**: un componente es una agrupación de funcionalidad tras una interfaz | C4 `/abstractions/component` |
| V-16 | Siglas y términos técnicos **explicados** o estándar; etiquetas en español | C4 notación (4) |
| V-17 | **Consistencia entre diagramas**: mismos nombres, mismas relaciones, nombres exactos de tablas, módulos y endpoints del manual (verificado con script contra `01_trazabilidad.md`) | C4 notación (11); regla de este proyecto |
| V-18 | **Sintaxis válida y renderizada** con la herramienta fijada (SVG y PNG adjuntos); texto legible, sin recortes ni cruces de líneas que oculten información | Regla de este proyecto |

## 7. Pasos para producir y revisar un diagrama

1. Elegir el diagrama de `INDEX.md` y escribir primero la fila de cada elemento en `01_trazabilidad.md` con su fuente; si no hay fuente, no se dibuja y se anota en `99_preguntas_abiertas_diagramas.md`.
2. Escribir el fuente `.mmd` en `src/` con el bloque de configuración común de §5.
3. Generar SVG y PNG con Mermaid CLI 12.0.0 (instrucciones exactas en `INDEX.md`).
4. Ejecutar el script de consistencia (V-17) y abrir la imagen para revisar V-01 a V-16 y V-18.
5. Registrar el resultado en `90_verificacion_calidad.md` y hacer un commit por diagrama.

## Criterio de aceptación

1. Cada afirmación de §1 a §5 tiene URL y fecha de consulta; lo que no se pudo leer está marcado `[NO VERIFICADO]` (lista en `99_preguntas_abiertas_diagramas.md`).
2. La elección de herramienta se apoya en la tabla de §5, con evidencia por celda.
3. La lista de §6 tiene 18 puntos con origen.
