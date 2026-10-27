# 52 · Estados · Evento e inscripción

**Qué responde este diagrama.** ¿Cómo pasa un evento a realizado y una inscripción a cancelada, y dónde queda la asistencia?

**A quién sirve.** J.

![Estados · Evento e inscripción](img/52_estados_evento_inscripcion.png)

Descargas: [SVG](img/52_estados_evento_inscripcion.svg) · [PNG](img/52_estados_evento_inscripcion.png) · [fuente Mermaid](src/52_estados_evento_inscripcion.mmd)

## Leyenda de notación

Cada caja es un estado con el nombre exacto del manual · punto negro = inicio · círculo con punto = fin · cada flecha es una transición con su disparador (ruta o regla) · caja amarilla = nota.

## Cómo leerlo y decisiones

1. La asistencia es una fila de `asistencias`, no un estado de la inscripción.
2. La promoción de `lista_espera` a `inscrito` no está definida (Q-D16).

## Fuentes en el manual

- `01_trazabilidad.md` §6
- `04_datos.md` §2.5
- `tareas/T-23.md` §5

## Preguntas y contradicciones que lo afectan

Ver `99_preguntas_abiertas_diagramas.md`: Q-D16.

## Resultado de la revisión

Ver la fila 52 de `90_verificacion_calidad.md` (lista de 18 puntos de `00_investigacion_metodologia.md` §6).

<details><summary>Fuente Mermaid (GitHub la dibuja sin instalar nada)</summary>

```mermaid
---
title: "Estados · Evento y su inscripción (la asistencia no cambia el estado de la inscripción) · [*] inicio o fin · cada flecha es una transición con su disparador"
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
    stateBkg: "#E8EDFB"
    stateLabelColor: "#1B2340"
    transitionColor: "#1B2340"
    transitionLabelColor: "#1B2340"
    labelBackgroundColor: "#F7F4EF"
    noteBkgColor: "#FFF4D6"
    noteTextColor: "#6B4200"
    noteBorderColor: "#B34700"
  state:
    padding: 12
---
stateDiagram-v2
  direction LR
  state "Evento" as EV {
    [*] --> borrador: POST /eventos
    borrador --> publicado: POST /eventos/{id}/publicar
    publicado --> cerrado: disparador por definir (Q-D19)
    cerrado --> realizado: disparador por definir (Q-D19)
    cerrado --> cancelado: disparador por definir (Q-D19)
    realizado --> [*]
    cancelado --> [*]
  }
  state "Inscripción" as IN {
    [*] --> inscrito: POST /eventos/{id}/inscribirme (hay cupo)
    [*] --> lista_espera: POST /eventos/{id}/inscribirme (sin cupo)
    state "cancelado" as cancelado_ins
    inscrito --> cancelado_ins: ruta de cancelación no definida (Q-D19)
    lista_espera --> cancelado_ins: ruta de cancelación no definida (Q-D19)
    cancelado_ins --> [*]
  }
  note right of IN
    La asistencia es una fila en asistencias
    (única por evento y persona; la inscripción puede faltar)
  end note
```

</details>
