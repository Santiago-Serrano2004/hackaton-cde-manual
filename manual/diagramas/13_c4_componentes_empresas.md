# 13 · C4 nivel 3 · Componentes de Empresas (empresas y duplicados)

**Qué responde este diagrama.** ¿Cómo se normaliza, valida, detecta, fusiona y enriquece una empresa dentro del módulo?

**A quién sirve.** S (núcleo de datos).

![C4 nivel 3 · Componentes de Empresas (empresas y duplicados)](img/13_c4_componentes_empresas.png)

Descargas: [SVG](img/13_c4_componentes_empresas.svg) · [PNG](img/13_c4_componentes_empresas.png) · [fuente Mermaid](src/13_c4_componentes_empresas.mmd)

## Leyenda de notación

Óvalo oscuro = persona · rectángulo azul grueso = sistema o módulo · rectángulo blanco = contenedor · rectángulo gris-azulado = componente · cilindro = almacén de datos · hexágono gris = sistema externo · borde y línea discontinuos naranja = propuesta de la Ronda 4 sin ratificar · borde punteado = decidido en R3 con alcance recortado. Cada flecha se lee «verbo [protocolo o tecnología]» y va en un solo sentido.

## Cómo leerlo y decisiones

1. «Completitud de la ficha» se omite para respetar el máximo de 12 elementos; está en `T-11` §5.
2. Los eventos `EmpresaCreada` y `EmpresaFusionada` los publica el módulo (diagrama 12).
3. La validación de NIT, la procedencia y la consulta al registro son propuestas de la Ronda 4.

## Fuentes en el manual

- `01_trazabilidad.md` §3
- `04_datos.md` §4
- `tareas/T-11.md`, `T-12.md`, `T-13.md`
- `investigacion/06_requerimientos_funcionales_detallados.md` RF-31, RF-32, RF-34

## Preguntas y contradicciones que lo afectan

Ver `99_preguntas_abiertas_diagramas.md`: Q-D8.

## Resultado de la revisión

Ver la fila 13 de `90_verificacion_calidad.md` (lista de 18 puntos de `00_investigacion_metodologia.md` §6).

<details><summary>Fuente Mermaid (GitHub la dibuja sin instalar nada)</summary>

```mermaid
---
title: "C4 nivel 3 · Componentes del módulo Empresas (empresas y duplicados) · API Laravel"
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

  API["<b>API de empresas</b><br/>[Componente · Rutas /api/v1/empresas*]<br/>Recibe las peticiones y coordina<br/>los componentes del módulo"]:::comp
  NOR["<b>Normalizadores</b><br/>[Componente · Función única en Shared]<br/>Calcula nit_norm, correo_norm<br/>y nombre_norm"]:::comp
  NIT["<b>Validación de NIT</b><br/>[Componente · Propuesta Ronda 4]<br/>Avisa si el dígito de verificación<br/>no coincide"]:::compP
  DUP["<b>Detección de duplicados</b><br/>[Componente · PostgreSQL pg_trgm]<br/>Clasifica en exacto, probable<br/>y posible"]:::comp
  FUS["<b>Fusión de empresas</b><br/>[Componente · Transacción SQL · FusionRegistry]<br/>Mueve el historial, guarda el estado<br/>previo y permite deshacer (variante B)"]:::comp
  BUQ["<b>Búsqueda tolerante</b><br/>[Componente · word_similarity + GIN]<br/>Encuentra empresas pese<br/>a errores de tipeo"]:::comp
  REPO["<b>EmpresaRepository</b><br/>[Componente · Eloquent]<br/>Lee y guarda empresas"]:::comp
  PRV["<b>Procedencia de campos</b><br/>[Componente · Propuesta Ronda 4 · jsonb]<br/>Registra origen y estado<br/>de los campos críticos"]:::compP
  CRM["<b>Consulta al registro mercantil</b><br/>[Componente · Propuesta Ronda 4]<br/>Propone valores oficiales<br/>y guarda el resultado en caché"]:::compP
  AUD["<b>Auditor::registrar()</b><br/>[Módulo Seguridad]<br/>Escribe cada acción en auditoria"]:::mod
  DB[("<b>Base de datos PostgreSQL</b><br/>[Almacén de datos · PostgreSQL 18.6]<br/>Guarda datos, cola y auditoría")]:::datos
  REG{{"<b>Registro mercantil abierto (datos.gov.co)</b><br/>[Sistema externo]<br/>Publica la matrícula mercantil de Confecámaras"}}:::extP
  API -->|"Normaliza NIT, correo y nombre [Action PHP]"| NOR
  API -.->|"Valida el dígito [GET /nit/validar]"| NIT
  API -->|"Busca coincidencias al crear [Action PHP]"| DUP
  DUP -->|"Compara nombres [SQL · similarity]"| DB
  API -->|"Fusiona fichas [POST /empresas/{id}/fusionar]"| FUS
  FUS -->|"Mueve registros [SQL · transacción]"| DB
  API -->|"Busca empresas [GET /empresas]"| BUQ
  BUQ -->|"Consulta con índice [SQL · gin_trgm_ops]"| DB
  API -->|"Lee y guarda [Eloquent]"| REPO
  REPO -->|"Persiste [SQL · pgsql]"| DB
  API -.->|"Marca el origen de lo que cambió [hook de guardado]"| PRV
  PRV -.->|"Escribe la procedencia [jsonb]"| REPO
  API -.->|"Pide propuestas [POST /empresas/{id}/consulta-registro]"| CRM
  CRM -.->|"Consulta por NIT [HTTPS · JSON · 5 s]"| REG
  API -->|"Registra la acción [llamada PHP]"| AUD
  subgraph LEY["Leyenda"]
    direction LR
    LG0["Componente decidido"]:::comp
    LG1["Decidido en R3 (alcance recortado)"]:::compR
    LG2["Propuesta Ronda 4 (sin ratificar)"]:::compP
    LG3["Otro módulo"]:::mod
    LG4{{"Sistema externo propuesto"}}:::extP
    LG5[("Almacén de datos")]:::datos
    LG6["Línea continua: relación decidida · línea discontinua: propuesta o por confirmar"]:::comp
  end
```

</details>
