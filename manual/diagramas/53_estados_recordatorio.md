# 53 · Estados · Recordatorio

**Qué responde este diagrama.** ¿Qué estados tiene un recordatorio y cuándo se rinde?

**A quién sirve.** J.

![Estados · Recordatorio](img/53_estados_recordatorio.png)

Descargas: [SVG](img/53_estados_recordatorio.svg) · [PNG](img/53_estados_recordatorio.png) · [fuente Mermaid](src/53_estados_recordatorio.mmd)

## Leyenda de notación

Cada caja es un estado con el nombre exacto del manual · punto negro = inicio · círculo con punto = fin · cada flecha es una transición con su disparador (ruta o regla) · caja amarilla = nota.

## Cómo leerlo y decisiones

1. Tras tres intentos queda `fallido` y se ve en la bandeja.

## Fuentes en el manual

- `01_trazabilidad.md` §6
- `tareas/T-21.md` §5

## Preguntas y contradicciones que lo afectan

Ver `99_preguntas_abiertas_diagramas.md`: Q-D6.

## Resultado de la revisión

Ver la fila 53 de `90_verificacion_calidad.md` (lista de 18 puntos de `00_investigacion_metodologia.md` §6).

<details><summary>Fuente Mermaid (GitHub la dibuja sin instalar nada)</summary>

```mermaid
---
title: "Estados · Recordatorio de cita, compromiso o evento · [*] inicio o fin · cada flecha es una transición con su disparador"
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
  [*] --> pendiente: al agendar (24 h y 1 h antes)
  pendiente --> enviado: recordatorios:enviar entrega el correo
  pendiente --> pendiente: falla y reintento a 1, 5 y 15 min
  pendiente --> fallido: tercer intento fallido
  enviado --> [*]
  fallido --> [*]
  note right of pendiente
    Si la cita se cancela o se reprograma,
    los pendientes se cancelan y se recrean
    (estado de cancelación por definir, Q-D6)
  end note
```

</details>
