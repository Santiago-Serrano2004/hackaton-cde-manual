# 17 · C4 nivel 3 · Componentes de Gamificacion e Historial

**Qué responde este diagrama.** ¿Cómo convierten un hecho publicado por otro módulo en puntos y en un hito de la línea de tiempo?

**A quién sirve.** MP y S.

![C4 nivel 3 · Componentes de Gamificacion e Historial](img/17_c4_componentes_gamificacion_historial.png)

Descargas: [SVG](img/17_c4_componentes_gamificacion_historial.svg) · [PNG](img/17_c4_componentes_gamificacion_historial.png) · [fuente Mermaid](src/17_c4_componentes_gamificacion_historial.mmd)

## Leyenda de notación

Óvalo oscuro = persona · rectángulo azul grueso = sistema o módulo · rectángulo blanco = contenedor · rectángulo gris-azulado = componente · cilindro = almacén de datos · hexágono gris = sistema externo · borde y línea discontinuos naranja = propuesta de la Ronda 4 sin ratificar · borde punteado = decidido en R3 con alcance recortado. Cada flecha se lee «verbo [protocolo o tecnología]» y va en un solo sentido.

## Cómo leerlo y decisiones

1. Las rachas y la cola de validación quedan fuera por R3 (`20` §7).
2. El tope de 12 consultas SQL del historial es criterio de `T-15`.

## Fuentes en el manual

- `01_trazabilidad.md` §3
- `05_arquitectura.md` §2
- `tareas/T-15.md`, `T-43.md`

## Preguntas y contradicciones que lo afectan

Ver `99_preguntas_abiertas_diagramas.md`: Q-D11.

## Resultado de la revisión

Ver la fila 17 de `90_verificacion_calidad.md` (lista de 18 puntos de `00_investigacion_metodologia.md` §6).

<details><summary>Fuente Mermaid (GitHub la dibuja sin instalar nada)</summary>

```mermaid
---
title: "C4 nivel 3 · Componentes de Gamificacion e Historial (escuchan eventos) · API Laravel"
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
flowchart TB
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

  BUS{{"<b>Eventos de dominio</b><br/>[Mecanismo de Laravel]<br/>Hechos que publican los demás módulos"}}:::ext
  ESC["<b>Escuchas de eventos</b><br/>[Componente · Listeners de Laravel]<br/>Reciben hechos; nadie las llama"]:::comp
  RET["<b>Reglas de retos</b><br/>[Componente · Tabla retos · topes por mes]<br/>Decide si el hecho otorga puntos"]:::comp
  PTS["<b>Registro de puntos</b><br/>[Componente · puntos_movimientos]<br/>Inserta una sola vez por persona,<br/>reto y referencia"]:::comp
  NIV["<b>Niveles e insignias</b><br/>[Componente · 6 niveles · 3 insignias en A y B]<br/>Sube de nivel y otorga insignias"]:::compR
  PRG["<b>Progreso del emprendedor</b><br/>[Componente · GET /api/v1/mi/progreso]<br/>Muestra puntos, nivel e insignias"]:::comp
  PRY["<b>Proyección de intervenciones</b><br/>[Componente · Listener ProyectarIntervencion]<br/>Convierte cada hecho en un hito<br/>de la línea de tiempo"]:::comp
  HIS["<b>API del historial</b><br/>[Componente · GET /api/v1/empresas/{id}/historial]<br/>Entrega la línea de tiempo<br/>(máximo 12 consultas SQL)"]:::comp
  REG["<b>HistorialRegistry</b><br/>[Componente · Registro en PHP]<br/>Lista las tablas que se muestran"]:::comp
  DB[("<b>Base de datos PostgreSQL</b><br/>[Almacén de datos · PostgreSQL 18.6]<br/>Guarda datos, cola y auditoría")]:::datos
  BUS -->|"Entrega hechos [eventos de Laravel]"| ESC
  ESC -->|"Evalúa el reto [Action PHP]"| RET
  RET -->|"Otorga puntos [Action PHP]"| PTS
  PTS -->|"Inserta movimientos [SQL · clave única]"| DB
  PTS -->|"Recalcula el nivel [Action PHP]"| NIV
  NIV -->|"Inserta persona_insignias [SQL]"| DB
  NIV -->|"Publica NivelAlcanzado"| BUS
  PRG -->|"Lee puntos y nivel [SQL]"| DB
  BUS -->|"Entrega hechos [eventos de Laravel]"| PRY
  PRY -->|"Inserta intervenciones sin duplicar [SQL]"| DB
  HIS -->|"Consulta las tablas registradas [llamada PHP]"| REG
  HIS -->|"Lee intervenciones [SQL]"| DB
  subgraph LEY["Leyenda"]
    direction LR
    LG0["Componente decidido"]:::comp
    LG1["Decidido en R3 (alcance recortado)"]:::compR
    LG2{{"Mecanismo de Laravel"}}:::ext
    LG3[("Almacén de datos")]:::datos
    LG4["Línea continua: relación decidida · línea discontinua: propuesta o por confirmar"]:::comp
  end
```

</details>
