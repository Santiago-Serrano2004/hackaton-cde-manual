# 45 · Secuencia · Resultado de impacto de declarado a verificado

**Qué responde este diagrama.** ¿Quién y con qué condiciones convierte un resultado declarado en verificado?

**A quién sirve.** S, MP y jurado de negocio.

![Secuencia · Resultado de impacto de declarado a verificado](img/45_secuencia_verificacion_impacto.png)

Descargas: [SVG](img/45_secuencia_verificacion_impacto.svg) · [PNG](img/45_secuencia_verificacion_impacto.png) · [fuente Mermaid](src/45_secuencia_verificacion_impacto.mmd)

## Leyenda de notación

Participantes con el nombre del contenedor o componente del diagrama C4. Flecha continua = petición o paso · flecha discontinua = respuesta · actor = persona · caja amarilla = nota · `alt`, `opt` y `loop` = alternativa, opcional y repetición. Los números ordenan los pasos.

## Cómo leerlo y decisiones

1. Propuesta de la Ronda 4 de fase 2: el manual no define las rutas de `resultados_impacto` (Q-D5).

## Fuentes en el manual

- `01_trazabilidad.md` §4
- `investigacion/06_requerimientos_funcionales_detallados.md` RF-37, RF-38

## Preguntas y contradicciones que lo afectan

Ver `99_preguntas_abiertas_diagramas.md`: Q-D5.

## Resultado de la revisión

Ver la fila 45 de `90_verificacion_calidad.md` (lista de 18 puntos de `00_investigacion_metodologia.md` §6).

<details><summary>Fuente Mermaid (GitHub la dibuja sin instalar nada)</summary>

```mermaid
---
title: "Secuencia · Impacto de declarado a verificado (propuesta Ronda 4)"
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
    actorBkg: "#E8EDFB"
    actorBorder: "#2F4A9E"
    actorTextColor: "#1B2340"
    actorLineColor: "#4B5575"
    signalColor: "#1B2340"
    signalTextColor: "#1B2340"
    noteBkgColor: "#FFF4D6"
    noteTextColor: "#6B4200"
    noteBorderColor: "#B34700"
    labelBoxBkgColor: "#E8EDFB"
    labelBoxBorderColor: "#2F4A9E"
    labelTextColor: "#1B2340"
    loopTextColor: "#1B2340"
    activationBkgColor: "#E8EDFB"
    activationBorderColor: "#2F4A9E"
    sequenceNumberColor: "#FFFFFF"
  sequence:
    mirrorActors: false
    wrap: true
    width: 190
    actorMargin: 40
    messageMargin: 36
    noteMargin: 12
    useMaxWidth: true
---
sequenceDiagram
  autonumber
  actor EQ as Equipo CDE
  participant API as API Laravel
  participant DB as Base de datos PostgreSQL
  participant AUD as Auditor::registrar()
  participant REP as API de reportes
  EQ->>API: Registra un resultado de impacto (ruta por definir, Q-D5) (HTTPS · JSON · Bearer)
  API->>DB: INSERT en resultados_impacto con estado declarado (SQL)
  API-->>EQ: 201
  EQ->>API: Adjunta soporte o fuente independiente y pide verificar (HTTPS · JSON · Bearer)
  alt Falta verificado_por, verificado_en o la fuente es encuesta_emprendedor
    API-->>EQ: 422
  else Cumple las condiciones
    API->>DB: UPDATE a estado verificado con verificado_por y verificado_en (SQL)
    API->>AUD: Registra valor anterior, nuevo, origen y usuario
    AUD->>DB: INSERT en auditoria (SQL)
    API-->>EQ: 200
  end
  EQ->>REP: GET /reportes/impacto (HTTPS · JSON · Bearer)
  REP->>DB: Agrega por estado (SQL)
  REP-->>EQ: 200 con dos columnas: declarado y verificado
  Note over REP,DB: Si hay un valor declarado y su gemelo verificado, cuenta solo el verificado
  Note over EQ,REP: Leyenda: flecha continua = petición o paso · flecha discontinua = respuesta · actor = persona · caja amarilla = nota · alt, opt y loop = alternativa, opcional y repetición
```

</details>
