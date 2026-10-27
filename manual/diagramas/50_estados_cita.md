# 50 · Estados · Cita

**Qué responde este diagrama.** ¿Qué estados tiene una cita y qué cambios son válidos?

**A quién sirve.** J.

![Estados · Cita](img/50_estados_cita.png)

Descargas: [SVG](img/50_estados_cita.svg) · [PNG](img/50_estados_cita.png) · [fuente Mermaid](src/50_estados_cita.mmd)

## Leyenda de notación

Cada caja es un estado con el nombre exacto del manual · punto negro = inicio · círculo con punto = fin · cada flecha es una transición con su disparador (ruta o regla) · caja amarilla = nota.

## Cómo leerlo y decisiones

1. Cualquier otra transición responde 422.

## Fuentes en el manual

- `01_trazabilidad.md` §6
- `tareas/T-20.md` §5

## Resultado de la revisión

Ver la fila 50 de `90_verificacion_calidad.md` (lista de 18 puntos de `00_investigacion_metodologia.md` §6).

<details><summary>Fuente Mermaid (GitHub la dibuja sin instalar nada)</summary>

```mermaid
---
title: "Estados · Cita (solicitada → agendada → realizada, no asistió o cancelada) · [*] inicio o fin · cada flecha es una transición con su disparador"
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
  [*] --> solicitada: POST /mi/citas
  solicitada --> agendada: POST /citas/{id}/agendar
  agendada --> realizada: POST /citas/{id}/resultado
  agendada --> no_asistio: POST /citas/{id}/resultado
  solicitada --> cancelada: POST /citas/{id}/cancelar
  agendada --> cancelada: POST /citas/{id}/cancelar
  realizada --> [*]
  no_asistio --> [*]
  cancelada --> [*]
  note right of solicitada
    Cualquier otra transición responde 422
  end note
```

</details>
