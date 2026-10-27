# 15 · C4 nivel 3 · Componentes de Eventos (eventos y asistencia)

**Qué responde este diagrama.** ¿Cómo se inscribe con cupo, se registra la asistencia y se recomienda un evento?

**A quién sirve.** J.

![C4 nivel 3 · Componentes de Eventos (eventos y asistencia)](img/15_c4_componentes_eventos.png)

Descargas: [SVG](img/15_c4_componentes_eventos.svg) · [PNG](img/15_c4_componentes_eventos.png) · [fuente Mermaid](src/15_c4_componentes_eventos.mmd)

## Leyenda de notación

Óvalo oscuro = persona · rectángulo azul grueso = sistema o módulo · rectángulo blanco = contenedor · rectángulo gris-azulado = componente · cilindro = almacén de datos · hexágono gris = sistema externo · borde y línea discontinuos naranja = propuesta de la Ronda 4 sin ratificar · borde punteado = decidido en R3 con alcance recortado. Cada flecha se lee «verbo [protocolo o tecnología]» y va en un solo sentido.

## Cómo leerlo y decisiones

1. El token de QR es fijo por evento en A y B; la rotación de 60 s se aplazó (R3).
2. La lectura de brechas por `Recomendación por reglas` es una dependencia por confirmar.

## Fuentes en el manual

- `01_trazabilidad.md` §3
- `tareas/T-23.md` §13
- `tareas/T-25.md`
- `05_arquitectura.md` §7

## Preguntas y contradicciones que lo afectan

Ver `99_preguntas_abiertas_diagramas.md`: Q-D3, Q-D10.

## Resultado de la revisión

Ver la fila 15 de `90_verificacion_calidad.md` (lista de 18 puntos de `00_investigacion_metodologia.md` §6).

<details><summary>Fuente Mermaid (GitHub la dibuja sin instalar nada)</summary>

```mermaid
---
title: "C4 nivel 3 · Componentes del módulo Eventos (eventos y asistencia) · API Laravel"
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

  API["<b>API de eventos</b><br/>[Componente · Rutas /api/v1/eventos*]<br/>Crear, publicar y consultar eventos"]:::comp
  INS["<b>Inscripción con cupo</b><br/>[Componente · lockForUpdate]<br/>Evita que dos solicitudes<br/>superen el cupo"]:::comp
  ASI["<b>Asistencia manual y por QR</b><br/>[Componente · Action PHP]<br/>Registra una asistencia<br/>por evento y persona"]:::comp
  QR["<b>Token de QR</b><br/>[Componente · Firma con APP_KEY · token fijo en A y B]<br/>Valida el código del evento<br/>(la rotación de 60 s se aplazó)"]:::compR
  RES["<b>Resumen del evento</b><br/>[Componente · GET /eventos/{id}/resumen]<br/>Cuenta inscritos, asistentes<br/>y no-show"]:::comp
  REC["<b>Recomendación por reglas</b><br/>[Componente · config/recomendacion.php]<br/>Puntúa eventos y explica<br/>el motivo"]:::comp
  PUB["<b>Catálogo público de eventos</b><br/>[Componente · GET /publico/eventos]<br/>Lista eventos sin datos personales"]:::comp
  RMD["<b>Recordatorio de eventos</b><br/>[Componente · eventos:recordar]<br/>Avisa a inscritos 24 h antes"]:::comp
  EMP["<b>Empresas</b><br/>[Módulo]<br/>Aporta sector y tamaño"]:::mod
  DIA["<b>Diagnosticos</b><br/>[Módulo]<br/>Aporta las mayores brechas"]:::mod
  PLA["<b>Planificador</b><br/>[Contenedor · schedule:work]<br/>Ejecuta el comando a diario"]:::cont
  DB[("<b>Base de datos PostgreSQL</b><br/>[Almacén de datos · PostgreSQL 18.6]<br/>Guarda datos, cola y auditoría")]:::datos
  API -->|"Inscribe [POST /eventos/{id}/inscribirme]"| INS
  INS -->|"Bloquea la fila y cuenta cupo [SQL]"| DB
  API -->|"Registra [POST /asistencia/qr]"| ASI
  ASI -->|"Valida el token [firma HMAC con APP_KEY]"| QR
  ASI -->|"Inserta asistencias [SQL]"| DB
  API -->|"Resume [GET /eventos/{id}/resumen]"| RES
  RES -->|"Cuenta con SQL [SQL]"| DB
  API -->|"Ofrece eventos [GET /mi/oferta]"| REC
  REC -->|"Lee sector y tamaño [Action pública]"| EMP
  REC -.->|"Lee las 2 mayores brechas [Action pública · por confirmar]"| DIA
  API -->|"Publica el catálogo [GET /publico/eventos]"| PUB
  PLA -->|"Ejecuta a diario [comando artisan]"| RMD
  subgraph LEY["Leyenda"]
    direction LR
    LG0["Componente decidido"]:::comp
    LG1["Decidido en R3 (alcance recortado)"]:::compR
    LG2["Otro módulo"]:::mod
    LG3["Otro contenedor"]:::cont
    LG4[("Almacén de datos")]:::datos
    LG5["Línea continua: relación decidida · línea discontinua: propuesta o por confirmar"]:::comp
  end
```

</details>
