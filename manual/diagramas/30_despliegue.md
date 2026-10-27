# 30 · Vista de despliegue · Entorno de la demostración

**Qué responde este diagrama.** ¿Dónde corre cada cosa el día de la demo y de qué se cuelga?

**A quién sirve.** J (operación) y jurados técnicos.

![Vista de despliegue · Entorno de la demostración](img/30_despliegue.png)

Descargas: [SVG](img/30_despliegue.svg) · [PNG](img/30_despliegue.png) · [fuente Mermaid](src/30_despliegue.mmd)

## Leyenda de notación

Rectángulo = contenedor o conjunto de contenedores · hexágono gris = dispositivo, red o sistema externo · cilindro = almacén de datos · recuadros con título = nodos físicos o lógicos · línea continua = relación decidida · línea discontinua = cambio de plan (plan B) o propuesta de la Ronda 4.

## Cómo leerlo y decisiones

1. El manual llama al entorno «servidor del patrocinador con Coolify»; la misión dice «homelab» (Q-D9).
2. Los contenedores se agrupan en un solo bloque para respetar el máximo de 12 elementos; sus nombres están en el diagrama 11.

## Fuentes en el manual

- `01_trazabilidad.md` §7
- `03_stack.md` §8
- `23_contingencias_y_simulacro.md` §3

## Preguntas y contradicciones que lo afectan

Ver `99_preguntas_abiertas_diagramas.md`: Q-D9, Q-D12.

## Resultado de la revisión

Ver la fila 30 de `90_verificacion_calidad.md` (lista de 18 puntos de `00_investigacion_metodologia.md` §6).

<details><summary>Fuente Mermaid (GitHub la dibuja sin instalar nada)</summary>

```mermaid
---
title: "Vista de despliegue · Entorno de la demostración (servidor del patrocinador, plan B local y respaldos)"
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
  classDef falla fill:#FDE8E8,stroke:#A31D1D,color:#8F1515,stroke-width:3px
  classDef plan fill:#E4F5EA,stroke:#1B6B3A,color:#14532D,stroke-width:3px

  subgraph LAB["Laboratorio de Ingeniería Industrial, UNAB"]
  PD{{"<b>Portátil de demostración</b><br/>[Navegador]<br/>Muestra la aplicación al jurado"}}:::ext
  RED{{"<b>Red del laboratorio</b><br/>[Red local]<br/>Conecta el portátil a internet<br/>(estabilidad desconocida)"}}:::ext
  HOT{{"<b>Punto de acceso del celular</b><br/>[Red alterna]<br/>Reemplaza la red si falla (F2)"}}:::ext
  PB["<b>Portátil de respaldo</b><br/>[Contenedor · docker compose up · localhost]<br/>Plan B local con datos sembrados,<br/>Mailpit y copia de las imágenes (docker save)"]:::cont
  end
  subgraph SRV["Servidor del patrocinador (Coolify)"]
  STK["<b>Contenedores del sistema</b><br/>[Contenedor · Docker Compose]<br/>Proxy inverso, Aplicación web SPA,<br/>API Laravel, Worker de cola,<br/>Planificador y PostgreSQL"]:::cont
  RSP["<b>Respaldo horario</b><br/>[Contenedor · respaldo:db · pg_dump]<br/>Copia la base de datos<br/>cada hora (RNF-06)"]:::cont
  end
  GH{{"<b>GitHub</b><br/>[Rama main]<br/>Guarda el código y dispara<br/>el despliegue"}}:::ext
  DRV[("<b>Copia de respaldo externa</b><br/>[Almacén de datos · Drive del equipo]<br/>Guarda los respaldos fuera<br/>del servidor")]:::datos
  COR{{"<b>Servicio de correo SMTP</b><br/>[Sistema externo]<br/>Entrega recordatorios en producción"}}:::ext
  REG{{"<b>Registro mercantil abierto (datos.gov.co)</b><br/>[Sistema externo]<br/>Publica la matrícula mercantil de Confecámaras"}}:::extP
  PD -->|"Se conecta [red local]"| RED
  RED -->|"Abre la aplicación [HTTPS]"| STK
  PD -.->|"Cambia si la red falla [punto de acceso, F2]"| HOT
  HOT -.->|"Abre la aplicación [HTTPS]"| STK
  GH -->|"Entrega el código de main [Git · Docker Compose]"| STK
  STK -->|"Entrega los datos [PostgreSQL]"| RSP
  RSP -->|"Copia cada hora [pg_dump]"| DRV
  STK -->|"Envía recordatorios [SMTP]"| COR
  STK -.->|"Consulta por NIT [HTTPS · degrada si falla, RNF-19]"| REG
  PD -.->|"Cambia si el servidor falla [plan B local, F1]"| PB
  DRV -.->|"Restaura la base [dump.sql]"| PB
  subgraph LEY["Leyenda"]
    direction LR
    LG0["Contenedor o conjunto de contenedores"]:::cont
    LG1{{"Dispositivo, red o sistema externo"}}:::ext
    LG2[("Almacén de datos")]:::datos
    LG3{{"Propuesta Ronda 4"}}:::extP
    LG4["Línea continua: relación decidida · línea discontinua: propuesta o por confirmar"]:::comp
  end
```

</details>
