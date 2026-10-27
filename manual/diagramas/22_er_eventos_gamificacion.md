# 22 · Modelo entidad-relación 3 de 4 · Eventos, asistencia y gamificación

**Qué responde este diagrama.** ¿Cómo se relacionan eventos, inscripciones, asistencias, retos, puntos e insignias?

**A quién sirve.** J y MP.

![Modelo entidad-relación 3 de 4 · Eventos, asistencia y gamificación](img/22_er_eventos_gamificacion.png)

Descargas: [SVG](img/22_er_eventos_gamificacion.svg) · [PNG](img/22_er_eventos_gamificacion.png) · [fuente Mermaid](src/22_er_eventos_gamificacion.mmd)

## Leyenda de notación

Cada caja es una tabla con tipos lógicos (los tipos físicos no están decididos en `04`). PK = clave primaria · FK = clave foránea · UK = clave única. Pata de gallo: `||` exactamente uno · `|o` cero o uno · `o{` cero o más · `|{` uno o más. Línea continua = relación con clave foránea; línea discontinua = vínculo sin clave foránea. Los comentarios que empiezan por PROPUESTA son campos de la Ronda 4 sin ratificar.

## Cómo leerlo y decisiones

1. `rachas` queda fuera por R3; `convocatorias` está diferida.
2. Los campos de `insignias` marcados PROPUESTA son RF-40.

## Fuentes en el manual

- `01_trazabilidad.md` §4
- `04_datos.md` §2.5 y §2.7
- `investigacion/06_requerimientos_funcionales_detallados.md` RF-40

## Preguntas y contradicciones que lo afectan

Ver `99_preguntas_abiertas_diagramas.md`: Q-D18.

## Resultado de la revisión

Ver la fila 22 de `90_verificacion_calidad.md` (lista de 18 puntos de `00_investigacion_metodologia.md` §6).

<details><summary>Fuente Mermaid (GitHub la dibuja sin instalar nada)</summary>

```mermaid
---
title: "Modelo entidad-relación 3 de 4 · Eventos, asistencia y gamificación · notación pata de gallo: || uno · |o cero o uno · o{ cero o más · |{ uno o más · línea continua = identificante · discontinua = sin FK"
config:
  theme: base
  look: classic
  fontFamily: "Inter, Carlito, Arial, sans-serif"
  themeVariables:
    fontFamily: "Inter, Carlito, Arial, sans-serif"
    fontSize: "16px"
    lineColor: "#1B2340"
    primaryTextColor: "#1B2340"
    primaryColor: "#E8EDFB"
    primaryBorderColor: "#2F4A9E"
    edgeLabelBackground: "#F7F4EF"
    background: "#F7F4EF"
    attributeBackgroundColorOdd: "#FFFFFF"
    attributeBackgroundColorEven: "#F3F5FA"
    entityBorder: "#2F4A9E"
  er:
    layoutDirection: TB
    entityPadding: 12
    fontSize: 15
---
erDiagram
  eventos ||--o{ evento_sector : "apunta a"
  sectores ||--o{ evento_sector : "se segmenta en"
  eventos ||--o{ inscripciones : "recibe"
  personas ||--o{ inscripciones : "se inscribe"
  empresas ||--o{ inscripciones : "representa"
  inscripciones |o--o| asistencias : "se confirma con"
  eventos ||--o{ asistencias : "registra"
  personas ||--o{ asistencias : "asiste"
  empresas ||--o{ asistencias : "representa"
  personas ||--o{ puntos_movimientos : "gana"
  retos ||--o{ puntos_movimientos : "otorga"
  personas ||--o{ persona_insignias : "recibe"
  insignias ||--o{ persona_insignias : "se entrega en"
  empresas {
    bigint id PK
  }
  personas {
    bigint id PK
  }
  sectores {
    bigint id PK
    text nombre
  }
  eventos {
    bigint id PK
    text tipo
    text titulo
    timestamp fecha_inicio
    int cupo "mayor que 0"
    text estado "borrador, publicado, cerrado, realizado, cancelado"
    text codigo_asistencia
  }
  evento_sector {
    bigint evento_id PK, FK
    bigint sector_id PK, FK
  }
  inscripciones {
    bigint id PK
    bigint evento_id FK
    bigint persona_id FK
    bigint empresa_id FK
    text estado "inscrito, lista_espera, cancelado"
  }
  asistencias {
    bigint id PK
    bigint inscripcion_id FK "nula si llegó sin inscripción"
    bigint evento_id FK
    bigint persona_id FK
    bigint empresa_id FK
    text metodo "qr o manual"
  }
  retos {
    bigint id PK
    text codigo UK
    text tipo
    int puntos
    bool activo
  }
  puntos_movimientos {
    bigint id PK
    bigint persona_id FK
    bigint reto_id FK
    int puntos
    text ref_tipo "único con persona, reto y ref_id"
    bigint ref_id
  }
  niveles {
    bigint id PK
    int numero
    text nombre
    int puntos_min
  }
  insignias {
    bigint id PK
    text codigo
    text nombre
    text identificador UK "PROPUESTA RF-40"
    text criterio "PROPUESTA RF-40: hecho verificable"
    text emisor "PROPUESTA RF-40"
  }
  persona_insignias {
    bigint persona_id PK, FK
    bigint insignia_id PK, FK
    timestamp otorgada_en
  }
```

</details>
