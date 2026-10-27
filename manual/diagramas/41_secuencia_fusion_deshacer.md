# 41 · Secuencia · Fusión de duplicados y deshacer

**Qué responde este diagrama.** ¿Cómo se fusionan dos fichas sin perder historial y cómo se revierte?

**A quién sirve.** S.

![Secuencia · Fusión de duplicados y deshacer](img/41_secuencia_fusion_deshacer.png)

Descargas: [SVG](img/41_secuencia_fusion_deshacer.svg) · [PNG](img/41_secuencia_fusion_deshacer.png) · [fuente Mermaid](src/41_secuencia_fusion_deshacer.mmd)

## Leyenda de notación

Participantes con el nombre del contenedor o componente del diagrama C4. Flecha continua = petición o paso · flecha discontinua = respuesta · actor = persona · caja amarilla = nota · `alt`, `opt` y `loop` = alternativa, opcional y repetición. Los números ordenan los pasos.

## Cómo leerlo y decisiones

1. Deshacer existe solo en la variante B; en A la fusión se confirma y queda en auditoría, sin afirmar reversibilidad (`05` §12).
2. La ventana para deshacer es 24 h en `T-12`, 30 s en el aviso emergente y 30 días en `04` §4 (Q-D4).

## Fuentes en el manual

- `01_trazabilidad.md` §3 y §5
- `tareas/T-12.md` §4 a §6
- `04_datos.md` §4

## Preguntas y contradicciones que lo afectan

Ver `99_preguntas_abiertas_diagramas.md`: Q-D4.

## Resultado de la revisión

Ver la fila 41 de `90_verificacion_calidad.md` (lista de 18 puntos de `00_investigacion_metodologia.md` §6).

<details><summary>Fuente Mermaid (GitHub la dibuja sin instalar nada)</summary>

```mermaid
---
title: "Secuencia · Fusión de duplicados y deshacer (deshacer solo en la variante B)"
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
  participant SPA as Aplicación web SPA
  participant API as API Laravel
  participant FUS as Fusión de empresas
  participant DB as Base de datos PostgreSQL
  participant AUD as Auditor::registrar()
  EQ->>SPA: Elige la ficha destino y confirma
  SPA->>API: POST /empresas/{id}/fusionar con destino_id (HTTPS · JSON · Bearer)
  API->>FUS: Fusiona origen en destino
  alt Empresa consigo misma o ya archivada
    FUS-->>API: Rechaza
    API-->>SPA: 422
  else Fusión válida
    FUS->>DB: BEGIN y bloqueo de ambas filas (SQL · lockForUpdate)
    FUS->>DB: Guarda snapshot_json y movidos_json en fusiones
    FUS->>DB: Mueve diagnosticos, proyectos_aula, planes_accion, citas, atenciones, inscripciones, asistencias, intervenciones y empresa_persona
    FUS->>DB: Archiva el origen con fusionada_en_id
    FUS->>DB: COMMIT
    FUS->>AUD: Registra fusionar con antes_json
    AUD->>DB: INSERT en auditoria (SQL)
    API-->>SPA: 200 con fusion_id
    Note over API: Publica el evento EmpresaFusionada
  end
  EQ->>SPA: Pulsa Deshacer
  SPA->>API: POST /fusiones/{id}/deshacer (HTTPS · JSON · Bearer)
  alt Ya deshecha
    API-->>SPA: 409 Ya fue deshecha
  else El destino cambió después
    API-->>SPA: 409 conflicto
  else Se puede deshacer
    API->>DB: Restaura snapshot_json y devuelve los IDs movidos (SQL)
    API->>AUD: Registra deshacer
    API-->>SPA: 200
  end
  Note over API,DB: Ventana para deshacer: 24 h según T-12 (ver pregunta Q-D4)
  Note over EQ,AUD: Leyenda: flecha continua = petición o paso · flecha discontinua = respuesta · actor = persona · caja amarilla = nota · alt, opt y loop = alternativa, opcional y repetición
```

</details>
