# 10 · C4 nivel 1 · Contexto del sistema

**Qué responde este diagrama.** ¿Quién usa el sistema, con qué sistemas externos habla y qué queda dentro y fuera de lo que construye el equipo?

**A quién sirve.** Todos: jurados, CDE y equipo (diagrama sin tecnologías).

![C4 nivel 1 · Contexto del sistema](img/10_c4_contexto.png)

Descargas: [SVG](img/10_c4_contexto.svg) · [PNG](img/10_c4_contexto.png) · [fuente Mermaid](src/10_c4_contexto.mmd)

## Leyenda de notación

Óvalo oscuro = persona · rectángulo azul grueso = sistema o módulo · rectángulo blanco = contenedor · rectángulo gris-azulado = componente · cilindro = almacén de datos · hexágono gris = sistema externo · borde y línea discontinuos naranja = propuesta de la Ronda 4 sin ratificar · borde punteado = decidido en R3 con alcance recortado. Cada flecha se lee «verbo [protocolo o tecnología]» y va en un solo sentido.

## Cómo leerlo y decisiones

1. Las cinco personas son los cinco roles de `04` §2.1.
2. El registro mercantil es una propuesta de la Ronda 4 (RF-32).
3. Coolify se dibuja porque la misión pide el servidor o hosting; GitHub aparece en el diagrama 30.

## Fuentes en el manual

- `01_trazabilidad.md` §1
- `03_stack.md` §8
- `04_datos.md` §2.1
- `investigacion/06_requerimientos_funcionales_detallados.md` RF-32

## Preguntas y contradicciones que lo afectan

Ver `99_preguntas_abiertas_diagramas.md`: Q-D8 (nombre del rol administrador), Q-D9 (nombre del entorno de despliegue).

## Resultado de la revisión

Ver la fila 10 de `90_verificacion_calidad.md` (lista de 18 puntos de `00_investigacion_metodologia.md` §6).

<details><summary>Fuente Mermaid (GitHub la dibuja sin instalar nada)</summary>

```mermaid
---
title: "C4 nivel 1 · Contexto del sistema · Sistema de información del CDE"
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
  classDef sistema fill:#E8EDFB,stroke:#2F4A9E,color:#1B2340,stroke-width:4px
  classDef externo fill:#EDEFF5,stroke:#4B5575,color:#1B2340,stroke-width:2px
  classDef propuesto fill:#FFF4D6,stroke:#B34700,color:#6B4200,stroke-width:3px,stroke-dasharray:7 4

  ADM(["<b>Administrador</b><br/>[Persona · rol administrador]<br/>Gestiona usuarios, catálogos<br/>y consulta la auditoría"]):::persona
  EQ(["<b>Equipo CDE</b><br/>[Persona · rol equipo_cde]<br/>Gestiona empresas, citas,<br/>eventos y reportes"]):::persona
  DOC(["<b>Docente</b><br/>[Persona · rol docente]<br/>Sigue los proyectos de aula<br/>de sus estudiantes"]):::persona
  CON(["<b>Estudiante consultor</b><br/>[Persona · rol estudiante_consultor]<br/>Registra avances del proyecto<br/>que acompaña"]):::persona
  EMP(["<b>Emprendedor</b><br/>[Persona · rol emprendedor]<br/>Pide citas, se inscribe<br/>y sigue su ruta y sus puntos"]):::persona

  subgraph LIM["Límite del sistema (lo que construye el equipo)"]
    SIS["<b>Sistema de información del CDE</b><br/>[Sistema de software]<br/>Reúne cada empresa sin duplicados,<br/>da seguimiento al acompañamiento<br/>y convierte los datos en conocimiento"]:::sistema
  end

  subgraph FUERA["Fuera del límite (sin responsabilidad nuestra)"]
    REG{{"<b>Registro mercantil abierto (datos.gov.co)</b><br/>[Sistema externo · propuesta Ronda 4]<br/>Datos públicos de matrícula mercantil<br/>publicados por Confecámaras"}}:::propuesto
    COR{{"<b>Servicio de correo SMTP</b><br/>[Sistema externo]<br/>Entrega los correos<br/>de recordatorio"}}:::externo
    COO{{"<b>Coolify</b><br/>[Plataforma de despliegue]<br/>Construye y ejecuta el sistema<br/>en el servidor del patrocinador"}}:::externo
  end

  ADM -->|"Administra"| SIS
  EQ -->|"Gestiona"| SIS
  DOC -->|"Consulta"| SIS
  CON -->|"Registra avances en"| SIS
  EMP -->|"Solicita y consulta"| SIS
  SIS -->|"Consulta el estado de la matrícula por NIT"| REG
  SIS -->|"Envía recordatorios por"| COR
  COO -->|"Despliega y ejecuta"| SIS

  subgraph LEY["Leyenda"]
    direction LR
    L1(["Persona"]):::persona
    L2["Sistema que se construye"]:::sistema
    L3{{"Sistema externo"}}:::externo
    L4{{"Propuesta de la Ronda 4,<br/>aún sin ratificar"}}:::propuesto
  end
```

</details>
