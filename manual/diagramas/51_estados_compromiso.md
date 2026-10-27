# 51 · Estados · Compromiso del plan de acción

**Qué responde este diagrama.** ¿Cómo avanza un compromiso y por qué `vencido` no se marca a mano?

**A quién sirve.** MP.

![Estados · Compromiso del plan de acción](img/51_estados_compromiso.png)

Descargas: [SVG](img/51_estados_compromiso.svg) · [PNG](img/51_estados_compromiso.png) · [fuente Mermaid](src/51_estados_compromiso.mmd)

## Leyenda de notación

Cada caja es un estado con el nombre exacto del manual · punto negro = inicio · círculo con punto = fin · cada flecha es una transición con su disparador (ruta o regla) · caja amarilla = nota.

## Cómo leerlo y decisiones

1. En A y B el equipo lo marca como cumplido; no hay cola de validación (R3).

## Fuentes en el manual

- `01_trazabilidad.md` §6
- `tareas/T-42.md` §5
- `tareas/T-43.md` §13

## Preguntas y contradicciones que lo afectan

Ver `99_preguntas_abiertas_diagramas.md`: Q-D11.

## Resultado de la revisión

Ver la fila 51 de `90_verificacion_calidad.md` (lista de 18 puntos de `00_investigacion_metodologia.md` §6).

<details><summary>Fuente Mermaid (GitHub la dibuja sin instalar nada)</summary>

```mermaid
---
title: "Estados · Compromiso del plan de acción (vencido se calcula, no se marca) · [*] inicio o fin · cada flecha es una transición con su disparador"
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
  [*] --> pendiente: POST /planes/{id}/compromisos
  pendiente --> en_curso: PUT /compromisos/{id} con estado en_curso
  pendiente --> cumplido: PUT /compromisos/{id} con estado cumplido
  en_curso --> cumplido: PUT /compromisos/{id} con estado cumplido
  pendiente --> cancelado: PUT /compromisos/{id} con estado cancelado
  en_curso --> cancelado: PUT /compromisos/{id} con estado cancelado
  pendiente --> vencido: fecha_compromiso menor que hoy (se calcula)
  en_curso --> vencido: fecha_compromiso menor que hoy (se calcula)
  vencido --> cumplido: PUT /compromisos/{id} con estado cumplido (suma menos puntos)
  cumplido --> [*]
  cancelado --> [*]
  note right of cumplido
    En A y B lo marca el equipo CDE (R3, sin cola de validación)
  end note
```

</details>
