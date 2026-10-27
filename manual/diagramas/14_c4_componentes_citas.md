# 14 · C4 nivel 3 · Componentes de Citas (citas y recordatorios)

**Qué responde este diagrama.** ¿Cómo pasa una cita de solicitada a recordada, y quién envía el correo?

**A quién sirve.** J.

![C4 nivel 3 · Componentes de Citas (citas y recordatorios)](img/14_c4_componentes_citas.png)

Descargas: [SVG](img/14_c4_componentes_citas.svg) · [PNG](img/14_c4_componentes_citas.png) · [fuente Mermaid](src/14_c4_componentes_citas.mmd)

## Leyenda de notación

Óvalo oscuro = persona · rectángulo azul grueso = sistema o módulo · rectángulo blanco = contenedor · rectángulo gris-azulado = componente · cilindro = almacén de datos · hexágono gris = sistema externo · borde y línea discontinuos naranja = propuesta de la Ronda 4 sin ratificar · borde punteado = decidido en R3 con alcance recortado. Cada flecha se lee «verbo [protocolo o tecnología]» y va en un solo sentido.

## Cómo leerlo y decisiones

1. `Programación de recordatorios` reacciona al evento `CitaAgendada`; `Envío de recordatorios` lo dispara el Planificador cada minuto.
2. `Registro de atención` anuncia `AtencionRegistrada` y `Proyectos` crea el compromiso.

## Fuentes en el manual

- `01_trazabilidad.md` §3
- `05_arquitectura.md` §5
- `tareas/T-20.md`, `T-21.md`

## Preguntas y contradicciones que lo afectan

Ver `99_preguntas_abiertas_diagramas.md`: Q-D13.

## Resultado de la revisión

Ver la fila 14 de `90_verificacion_calidad.md` (lista de 18 puntos de `00_investigacion_metodologia.md` §6).

<details><summary>Fuente Mermaid (GitHub la dibuja sin instalar nada)</summary>

```mermaid
---
title: "C4 nivel 3 · Componentes del módulo Citas (citas y recordatorios) · API Laravel"
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

  API["<b>API de citas</b><br/>[Componente · Rutas /api/v1/citas*]<br/>Solicitar, agendar, registrar<br/>resultado y cancelar"]:::comp
  EST["<b>Estados de la cita</b><br/>[Componente · Reglas en PHP]<br/>Permite solo las transiciones válidas;<br/>las demás dan 422"]:::comp
  ATE["<b>Registro de atención</b><br/>[Componente · Action PHP]<br/>Crea la atención y, si hay acuerdos,<br/>pide un compromiso"]:::comp
  PRG["<b>Programación de recordatorios</b><br/>[Componente · citas:programar-recordatorios]<br/>Crea recordatorios a 24 h y 1 h<br/>al agendar"]:::comp
  ENV["<b>Envío de recordatorios</b><br/>[Componente · recordatorios:enviar]<br/>Envía los vencidos y reintenta<br/>1, 5 y 15 minutos"]:::comp
  BAN["<b>Bandeja de notificaciones</b><br/>[Componente · GET /api/v1/notificaciones]<br/>Muestra enviados y fallidos<br/>al equipo"]:::comp
  EMP["<b>Empresas</b><br/>[Módulo]<br/>Aporta empresa_id"]:::mod
  PRO["<b>Proyectos</b><br/>[Módulo]<br/>Convierte acuerdos en compromisos"]:::mod
  PLA["<b>Planificador</b><br/>[Contenedor · schedule:work]<br/>Ejecuta el comando cada minuto"]:::cont
  COR{{"<b>Servicio de correo SMTP</b><br/>[Sistema externo]<br/>Mailpit en desarrollo y demo"}}:::ext
  DB[("<b>Base de datos PostgreSQL</b><br/>[Almacén de datos · PostgreSQL 18.6]<br/>Guarda datos, cola y auditoría")]:::datos
  API -->|"Valida el cambio de estado [Action PHP]"| EST
  API -->|"Toma empresa_id [Action pública]"| EMP
  API -->|"Registra el resultado [POST /citas/{id}/resultado]"| ATE
  ATE -->|"Anuncia acuerdos [evento AtencionRegistrada]"| PRO
  ATE -->|"Inserta atenciones [SQL]"| DB
  API -->|"Dispara al agendar [evento CitaAgendada]"| PRG
  PRG -->|"Inserta recordatorios [SQL]"| DB
  PLA -->|"Ejecuta cada minuto [comando artisan]"| ENV
  ENV -->|"Toma pendientes y marca estado [SQL]"| DB
  ENV -->|"Envía el correo [SMTP]"| COR
  BAN -->|"Lista recordatorios [SQL]"| DB
  subgraph LEY["Leyenda"]
    direction LR
    LG0["Componente decidido"]:::comp
    LG1["Otro módulo"]:::mod
    LG2["Otro contenedor"]:::cont
    LG3[("Almacén de datos")]:::datos
    LG4{{"Sistema externo"}}:::ext
    LG5["Línea continua: relación decidida · línea discontinua: propuesta o por confirmar"]:::comp
  end
```

</details>
