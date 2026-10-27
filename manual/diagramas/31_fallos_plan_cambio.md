# 31 · Fallos de la infraestructura y su plan de cambio

**Qué responde este diagrama.** ¿Qué falla, cuánto se espera y a qué se cambia?

**A quién sirve.** Todos (ensayo de `23`).

![Fallos de la infraestructura y su plan de cambio](img/31_fallos_plan_cambio.png)

Descargas: [SVG](img/31_fallos_plan_cambio.svg) · [PNG](img/31_fallos_plan_cambio.png) · [fuente Mermaid](src/31_fallos_plan_cambio.mmd)

## Leyenda de notación

Rectángulo = contenedor o conjunto de contenedores · hexágono gris = dispositivo, red o sistema externo · cilindro = almacén de datos · recuadros con título = nodos físicos o lógicos · línea continua = relación decidida · línea discontinua = cambio de plan (plan B) o propuesta de la Ronda 4.

## Cómo leerlo y decisiones

1. Se dibujan solo los fallos de infraestructura (F1, F2, F3, F4, F14); F5 a F13 son de logística y de equipo y están en la tabla de abajo.

## Fuentes en el manual

- `01_trazabilidad.md` §7
- `23_contingencias_y_simulacro.md` §2 y §3

## Preguntas y contradicciones que lo afectan

Ver `99_preguntas_abiertas_diagramas.md`: Q-D14.

## Resultado de la revisión

Ver la fila 31 de `90_verificacion_calidad.md` (lista de 18 puntos de `00_investigacion_metodologia.md` §6).

## Las 15 contingencias de `23` §3 (resumen)

| ID | Fallo | Tiempo máximo | Plan B |
|---|---|---|---|
| F1 | Servidor del patrocinador caído | 15 min (0 s en escena) | Servidor local en el portátil de demostración |
| F2 | Red del laboratorio caída | 10 min | Punto de acceso del celular y trabajo local |
| F3 | Base de datos corrupta o migración rota | 10 min | `migrate:fresh --seed`, luego `dump.sql`, luego `ff-1` |
| F4 | Correo no entrega | 5 min | Mailpit local y captura D3 |
| F5 | Proyector o cable | 3 min | Segundo portátil o deck en PDF impreso |
| F6 | Portátil muerto | 2 min en escena | Portátil de respaldo |
| F7 | Pérdida de rama o repositorio | 10 min | Clon más reciente y `git bundle` |
| F8 | Conflicto de fusión de madrugada | 15 min (0 min durante el sueño) | Abortar y resolver a las 6:00 |
| F9 | CI en rojo sin causa clara | 15 min | `git revert` |
| F10 | Inicio de sesión bloqueado (429) en escena | 0 s | Sesión ya abierta de otro rol |
| F11 | Persona enferma o ausente | inmediato | Reparto alternativo de voces |
| F12 | Un paso de la demo falla en vivo | 0 s | Versión siguiente de la demo |
| F13 | Corte de energía | 5 min | Batería y deck en PDF |
| F14 | Despliegue rompe la versión estable | 10 min | Etiqueta anterior (`ff-1` o `v1.0-rc`) |
| F15 | Certificado o dominio HTTPS inválido | 3 min | Servidor local |

<details><summary>Fuente Mermaid (GitHub la dibuja sin instalar nada)</summary>

```mermaid
---
title: "Fallos de la infraestructura y su plan de cambio · tiempos máximos del manual (23 §3)"
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
  flowchart:
    curve: basis
    htmlLabels: true
    wrappingWidth: 330
    nodeSpacing: 45
    rankSpacing: 80
---
flowchart LR
  classDef persona fill:#16265C,stroke:#16265C,color:#FFFFFF,stroke-width:2px
  classDef cont fill:#FFFFFF,stroke:#2F4A9E,color:#1B2340,stroke-width:3px
  classDef mod fill:#E8EDFB,stroke:#2F4A9E,color:#1B2340,stroke-width:3px
  classDef comp fill:#F3F5FA,stroke:#2F4A9E,color:#1B2340,stroke-width:2px
  classDef compP fill:#FFF4D6,stroke:#B34700,color:#6B4200,stroke-width:3px,stroke-dasharray:7 4
  classDef compR fill:#F3F5FA,stroke:#2F4A9E,color:#1B2340,stroke-width:2px,stroke-dasharray:2 3
  classDef datos fill:#FFFFFF,stroke:#2F4A9E,color:#1B2340,stroke-width:3px
  classDef ext fill:#EDEFF5,stroke:#4B5575,color:#1B2340,stroke-width:2px
  classDef extP fill:#FFF4D6,stroke:#B34700,color:#6B4200,stroke-width:3px,stroke-dasharray:7 4
  classDef sistema fill:#E8EDFB,stroke:#2F4A9E,color:#1B2340,stroke-width:4px
  classDef falla fill:#FDE8E8,stroke:#A31D1D,color:#8F1515,stroke-width:3px
  classDef plan fill:#E4F5EA,stroke:#1B6B3A,color:#14532D,stroke-width:3px

  F1>"<b>F1 · Servidor del patrocinador caído</b><br/>/health no responde; la URL no abre"]:::falla
  P1["<b>Servidor local en el portátil de demostración</b><br/>[docker compose up]<br/>Datos sembrados en localhost"]:::plan
  F2>"<b>F2 · Red del laboratorio caída</b><br/>Fallan git push, composer y npm"]:::falla
  P2["<b>Punto de acceso del celular y trabajo local</b><br/>[commit sin push]<br/>La demo no depende de internet"]:::plan
  F3>"<b>F3 · Base de datos corrupta o migración rota</b><br/>DatosDemoTest en rojo"]:::falla
  P3["<b>migrate:fresh --seed y luego dump.sql</b><br/>[Respaldo pg_dump horario]<br/>Último recurso: etiqueta ff-1"]:::plan
  F4>"<b>F4 · Correo no entrega</b><br/>Bandeja Notificaciones muestra fallido"]:::falla
  P4["<b>Mailpit local y captura D3</b><br/>[Reiniciar worker y planificador]<br/>Se muestra el estado programado"]:::plan
  F14>"<b>F14 · Un despliegue rompe la versión estable</b><br/>/health en rojo tras el despliegue"]:::falla
  P14["<b>Volver a la etiqueta anterior</b><br/>[ff-1 o v1.0-rc]<br/>Redesplegar esa etiqueta"]:::plan
  FR>"<b>Registro mercantil no responde (propuesta)</b><br/>Tiempo agotado, 429 o error de red"]:::falla
  PR["<b>Caché de 24 h o mensaje legible</b><br/>[consultas_registro]<br/>El resto de la ficha sigue usable (RNF-19)"]:::plan
  F1 -->|"Cambia a los 15 min [responsable: Julián]"| P1
  F2 -->|"Cambia a los 10 min [responsable: Julián]"| P2
  F3 -->|"Cambia a los 10 min [responsable: Julián]"| P3
  F4 -->|"Cambia a los 5 min [responsable: Julián]"| P4
  F14 -->|"Cambia a los 10 min [responsable: Julián]"| P14
  FR -.->|"Cambia a los 5 s [respuesta automática]"| PR
  subgraph LEY["Leyenda"]
    direction LR
    LG0>"Falla"]:::falla
    LG1["Plan de cambio"]:::plan
    LG2["Línea continua: relación decidida · línea discontinua: propuesta o por confirmar"]:::comp
  end
```

</details>
