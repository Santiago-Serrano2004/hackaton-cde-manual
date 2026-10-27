# 18 · C4 nivel 3 · Componentes de Reportes e Importacion

**Qué responde este diagrama.** ¿De dónde salen las cifras del reporte y cómo entra un CSV a la base sin duplicar?

**A quién sirve.** S.

![C4 nivel 3 · Componentes de Reportes e Importacion](img/18_c4_componentes_reportes_importacion.png)

Descargas: [SVG](img/18_c4_componentes_reportes_importacion.svg) · [PNG](img/18_c4_componentes_reportes_importacion.png) · [fuente Mermaid](src/18_c4_componentes_reportes_importacion.mmd)

## Leyenda de notación

Óvalo oscuro = persona · rectángulo azul grueso = sistema o módulo · rectángulo blanco = contenedor · rectángulo gris-azulado = componente · cilindro = almacén de datos · hexágono gris = sistema externo · borde y línea discontinuos naranja = propuesta de la Ronda 4 sin ratificar · borde punteado = decidido en R3 con alcance recortado. Cada flecha se lee «verbo [protocolo o tecnología]» y va en un solo sentido.

## Cómo leerlo y decisiones

1. El controlador de la caché de 5 min no está decidido (Q-D2).
2. `Importacion` usa a `Empresas` solo por su contrato; no hay reversión de la importación completa (decisión R2).

## Fuentes en el manual

- `01_trazabilidad.md` §3
- `05_arquitectura.md` §6
- `tareas/T-14.md`, `T-16.md`

## Preguntas y contradicciones que lo afectan

Ver `99_preguntas_abiertas_diagramas.md`: Q-D2.

## Resultado de la revisión

Ver la fila 18 de `90_verificacion_calidad.md` (lista de 18 puntos de `00_investigacion_metodologia.md` §6).

<details><summary>Fuente Mermaid (GitHub la dibuja sin instalar nada)</summary>

```mermaid
---
title: "C4 nivel 3 · Componentes de Reportes e Importacion · API Laravel"
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

  RAP["<b>API de reportes</b><br/>[Componente · Rutas /api/v1/reportes/*]<br/>Caracterización, brechas e impacto"]:::comp
  CAC["<b>Caché de KPIs</b><br/>[Componente · Caché de Laravel · 5 min]<br/>Evita recalcular cifras<br/>(controlador por decidir)"]:::comp
  VIS["<b>Vistas SQL de reporte</b><br/>[Componente · Vistas de PostgreSQL]<br/>Agregan datos; cada cifra tiene<br/>una consulta de control"]:::comp
  EXP["<b>Exportación CSV e impresión</b><br/>[Componente · CSV UTF-8 con BOM]<br/>Entrega el reporte; el PDF sale<br/>de la vista imprimible"]:::comp
  CAR["<b>Carga de importación</b><br/>[Componente · POST /api/v1/importaciones]<br/>Recibe el CSV y lo guarda"]:::comp
  PRE["<b>Vista previa con semáforo</b><br/>[Componente · GET /api/v1/importaciones/{id}/previa]<br/>Clasifica cada fila en nueva,<br/>duplicada o con error"]:::comp
  SIN["<b>Sinónimos de catálogo</b><br/>[Componente · config/importacion.php]<br/>Reconoce valores equivalentes"]:::comp
  CON["<b>Confirmación en lotes</b><br/>[Componente · POST /api/v1/importaciones/{id}/confirmar]<br/>Crea empresas de 100 en 100"]:::comp
  EMP["<b>Empresas</b><br/>[Módulo]<br/>Compara y crea empresas"]:::mod
  ALM[("<b>Almacenamiento local</b><br/>[Almacén de datos · Sistema de archivos]<br/>Guarda archivos de importación y exportación")]:::datos
  DB[("<b>Base de datos PostgreSQL</b><br/>[Almacén de datos · PostgreSQL 18.6]<br/>Guarda datos, cola y auditoría")]:::datos
  RAP -->|"Pide cifras [Action PHP]"| CAC
  CAC -->|"Consulta si venció la caché [SQL]"| VIS
  VIS -->|"Lee [SQL de solo lectura]"| DB
  RAP -->|"Exporta [GET /reportes/impacto]"| EXP
  EXP -->|"Consulta las mismas cifras [SQL]"| VIS
  CAR -->|"Guarda el archivo [sistema de archivos]"| ALM
  CAR -->|"Entrega las filas [Action PHP]"| PRE
  PRE -->|"Reconoce sinónimos [lectura de config]"| SIN
  PRE -->|"Detecta duplicados [Action pública]"| EMP
  PRE -->|"Entrega las filas aceptadas [Action PHP]"| CON
  CON -->|"Crea empresas [Action pública · transacción]"| EMP
  CON -->|"Registra importaciones e importacion_filas [SQL]"| DB
  subgraph LEY["Leyenda"]
    direction LR
    LG0["Componente decidido"]:::comp
    LG1["Otro módulo"]:::mod
    LG2[("Almacén de datos")]:::datos
    LG3["Línea continua: relación decidida · línea discontinua: propuesta o por confirmar"]:::comp
  end
```

</details>
