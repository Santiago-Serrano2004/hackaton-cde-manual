# 54 · Estados · Verificación de un dato o resultado

**Qué responde este diagrama.** ¿Cuándo un dato pasa de declarado a verificado?

**A quién sirve.** S y MP.

![Estados · Verificación de un dato o resultado](img/54_estados_verificacion.png)

Descargas: [SVG](img/54_estados_verificacion.svg) · [PNG](img/54_estados_verificacion.png) · [fuente Mermaid](src/54_estados_verificacion.mmd)

## Leyenda de notación

Cada caja es un estado con el nombre exacto del manual · punto negro = inicio · círculo con punto = fin · cada flecha es una transición con su disparador (ruta o regla) · caja amarilla = nota.

## Cómo leerlo y decisiones

1. Propuesta de la Ronda 4 (RF-34, RF-38).
2. Solo una persona puede verificar; el sistema nunca lo hace solo.

## Fuentes en el manual

- `01_trazabilidad.md` §6
- `investigacion/06_requerimientos_funcionales_detallados.md` §2

## Preguntas y contradicciones que lo afectan

Ver `99_preguntas_abiertas_diagramas.md`: Q-D7.

## Resultado de la revisión

Ver la fila 54 de `90_verificacion_calidad.md` (lista de 18 puntos de `00_investigacion_metodologia.md` §6).

<details><summary>Fuente Mermaid (GitHub la dibuja sin instalar nada)</summary>

```mermaid
---
title: "Estados · Verificación de un dato o de un resultado: declarado → verificado (propuesta de la Ronda 4) · [*] inicio o fin · cada flecha es una transición con su disparador"
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
  [*] --> declarado: lo digita, importa o declara una persona
  [*] --> por_revisar: conflicto, dato incompleto o formato dudoso
  declarado --> verificado: una persona acepta la propuesta del registro o adjunta soporte
  verificado --> [*]
  note right of por_revisar
    Salidas de por_revisar sin definir (Q-D7)
  end note
  note left of verificado
    Nunca lo asigna el sistema solo
  end note
```

</details>
