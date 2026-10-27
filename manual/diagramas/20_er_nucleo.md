# 20 · Modelo entidad-relación 1 de 4 · Núcleo de empresas y personas

**Qué responde este diagrama.** ¿Cómo se relacionan empresas, personas, usuarios y catálogos, y dónde viven la procedencia y la confianza?

**A quién sirve.** S y J.

![Modelo entidad-relación 1 de 4 · Núcleo de empresas y personas](img/20_er_nucleo.png)

Descargas: [SVG](img/20_er_nucleo.svg) · [PNG](img/20_er_nucleo.png) · [fuente Mermaid](src/20_er_nucleo.mmd)

## Leyenda de notación

Cada caja es una tabla con tipos lógicos (los tipos físicos no están decididos en `04`). PK = clave primaria · FK = clave foránea · UK = clave única. Pata de gallo: `||` exactamente uno · `|o` cero o uno · `o{` cero o más · `|{` uno o más. Línea continua = relación con clave foránea; línea discontinua = vínculo sin clave foránea. Los comentarios que empiezan por PROPUESTA son campos de la Ronda 4 sin ratificar.

## Cómo leerlo y decisiones

1. `empresas.procedencia` y `empresas.confianza_ficha` son propuestas de la Ronda 4 (RF-34, §2 de `inv/06`).
2. `consultas_registro` se enlaza por `nit_base`, no por clave foránea.
3. Los roles de `spatie/laravel-permission` no se dibujan (tablas del paquete).

## Fuentes en el manual

- `01_trazabilidad.md` §4
- `04_datos.md` §2.1 y §2.8
- `investigacion/06_requerimientos_funcionales_detallados.md` §2, RF-32, RF-34, RF-45

## Preguntas y contradicciones que lo afectan

Ver `99_preguntas_abiertas_diagramas.md`: Q-D18.

## Resultado de la revisión

Ver la fila 20 de `90_verificacion_calidad.md` (lista de 18 puntos de `00_investigacion_metodologia.md` §6).

<details><summary>Fuente Mermaid (GitHub la dibuja sin instalar nada)</summary>

```mermaid
---
title: "Modelo entidad-relación 1 de 4 · Núcleo de empresas y personas, con procedencia · notación pata de gallo: || uno · |o cero o uno · o{ cero o más · |{ uno o más · línea continua = identificante · discontinua = sin FK"
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
  sectores |o--o{ empresas : "clasifica (opcional)"
  tamanos |o--o{ empresas : "clasifica (opcional)"
  ingresos_rangos |o--o{ empresas : "clasifica (opcional)"
  formalizacion |o--o{ empresas : "clasifica (opcional)"
  relaciones_unab ||--o{ empresas : "vincula (por defecto Externo)"
  empresas |o--o{ empresas : "fusionada_en_id"
  empresas ||--o{ empresa_persona : "tiene"
  personas ||--o{ empresa_persona : "participa"
  personas ||--o| usuarios : "tiene acceso"
  personas ||--o{ consentimientos : "autoriza"
  sectores ||--o{ ciiu_equivalencias : "equivale a"
  empresas |o..o| consultas_registro : "mismo nit_norm"
  empresas {
    bigint id PK
    text razon_social
    text nit "texto original"
    text nit_norm UK "sin dígito de verificación"
    bigint sector_id FK
    bigint tamano_id FK
    bigint ingresos_rango_id FK
    bigint formalizacion_id FK
    bigint relacion_unab_id FK
    text municipio
    int completitud "0 a 100 calculada"
    text estado "activa o archivada"
    bigint fusionada_en_id FK
    json procedencia "PROPUESTA RF-34: origen y estado por campo crítico"
    int confianza_ficha "PROPUESTA: 0 a 100 calculada"
    text ciiu_codigo "PROPUESTA RF-45"
    text ciiu_version "PROPUESTA RF-45"
  }
  personas {
    bigint id PK
    text nombres
    text apellidos
    text correo
    text correo_norm UK
    text telefono
    text documento "cifrado, opcional"
    text tipo
    bigint consentimiento_id FK
  }
  empresa_persona {
    bigint empresa_id PK, FK
    bigint persona_id PK, FK
    text rol PK
    bool principal
  }
  usuarios {
    bigint id PK
    bigint persona_id UK, FK
    text email
    text password "hash"
    bool activo
  }
  consentimientos {
    bigint id PK
    bigint persona_id FK
    text version_politica
    timestamp fecha
    text finalidad
  }
  sectores {
    bigint id PK
    text codigo
    text nombre
  }
  tamanos {
    bigint id PK
    text nombre
  }
  ingresos_rangos {
    bigint id PK
    text nombre
  }
  formalizacion {
    bigint id PK
    text nombre
  }
  relaciones_unab {
    bigint id PK
    text nombre
  }
  consultas_registro {
    bigint id PK
    text nit_base UK "PROPUESTA RF-32"
    json respuesta
    timestamp consultado_en
    int http_estado
  }
  ciiu_equivalencias {
    bigint id PK
    text version "PROPUESTA RF-45, fase 1"
    text codigo
    bigint sector_id FK
  }
```

</details>
