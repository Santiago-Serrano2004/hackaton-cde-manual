# 61 · Seguridad · Capas de autorización, auditoría y límites

**Qué responde este diagrama.** ¿Por qué capas pasa una petición y dónde se rechaza?

**A quién sirve.** S y jurado técnico (ISO 25010: Seguridad).

![Seguridad · Capas de autorización, auditoría y límites](img/61_seguridad_autorizacion_limites.png)

Descargas: [SVG](img/61_seguridad_autorizacion_limites.svg) · [PNG](img/61_seguridad_autorizacion_limites.png) · [fuente Mermaid](src/61_seguridad_autorizacion_limites.mmd)

## Leyenda de notación

Rectángulo azul claro = capa de control · rectángulo blanco = contenedor · hexágono gris = origen no confiable o externo · bandera roja = respuesta de rechazo · cilindro = almacén de datos · recuadros con título = zonas de confianza · línea discontinua = propuesta de la Ronda 4.

## Cómo leerlo y decisiones

1. El límite de 20 consultas por hora al registro y el destino único son propuesta de la Ronda 4.
2. «Límites» se interpretó como límites de confianza y de uso (la instrucción llegó cortada).

## Fuentes en el manual

- `01_trazabilidad.md` §7
- `05_arquitectura.md` §4 y §8
- `tareas/T-10.md` §5

## Preguntas y contradicciones que lo afectan

Ver `99_preguntas_abiertas_diagramas.md`: Q-D8, Q-D15.

## Resultado de la revisión

Ver la fila 61 de `90_verificacion_calidad.md` (lista de 18 puntos de `00_investigacion_metodologia.md` §6).

<details><summary>Fuente Mermaid (GitHub la dibuja sin instalar nada)</summary>

```mermaid
---
title: "Seguridad · Capas de autorización, auditoría y límites de confianza y de uso"
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

  subgraph NC["Zona no confiable"]
  SPA{{"<b>Aplicación web SPA</b><br/>[Navegador del usuario]<br/>Todo lo que envía puede ser manipulado"}}:::ext
  end
  subgraph SC["Zona confiable: servidor del sistema"]
  PRX["<b>Proxy inverso</b><br/>[Contenedor · HTTPS · cabeceras de seguridad]<br/>Termina HTTPS y limita CORS al dominio"]:::cont
  THR["<b>Límite de intentos</b><br/>[Componente · Middleware throttle]<br/>5 intentos por minuto por IP y correo"]:::comp
  AUT["<b>Autenticación Sanctum</b><br/>[Componente · Token Bearer · vence a las 8 h]<br/>Identifica al usuario y sus abilities"]:::comp
  ROL["<b>Rol (spatie)</b><br/>[Componente · spatie/laravel-permission]<br/>Permite la ruta según el rol"]:::comp
  POL["<b>Policy de pertenencia</b><br/>[Componente · Laravel Policies]<br/>Docente, consultor y emprendedor<br/>solo ven lo suyo; deniega por defecto"]:::comp
  ACT["<b>Action con Form Request</b><br/>[Componente · Validación en el servidor]<br/>Ejecuta el caso de uso con datos válidos"]:::comp
  AUD["<b>Auditoría de peticiones</b><br/>[Componente · AuditarPeticion + Auditor::registrar()]<br/>Registra quién, qué y cuándo<br/>en la tabla auditoria (solo INSERT)"]:::comp
  DB[("<b>Base de datos PostgreSQL</b><br/>[Almacén de datos · PostgreSQL 18.6]<br/>Consultas parametrizadas")]:::datos
  end
  ERR>"<b>Respuesta de error</b><br/>[{message, errors}]<br/>401, 403, 404, 409, 422 o 429<br/>sin trazas en producción"]:::falla
  subgraph ZE["Zona externa"]
  REG{{"<b>Registro mercantil abierto (datos.gov.co)</b><br/>[Destino único fijo · 20 consultas por hora y usuario]<br/>Propuesta Ronda 4"}}:::extP
  end
  SPA -->|"Envía la petición [HTTPS · JSON · Bearer]"| PRX
  PRX -->|"Reenvía /api/v1/* [proxy → php-fpm]"| THR
  THR -->|"Pasa si no excede el límite [middleware]"| AUT
  AUT -->|"Pasa si el token es válido [Sanctum]"| ROL
  ROL -->|"Pasa si el rol sirve [spatie]"| POL
  POL -->|"Pasa si el recurso es suyo [Policy]"| ACT
  ACT -->|"Registra la acción [middleware y Auditor]"| AUD
  ACT -->|"Lee y escribe [SQL parametrizado]"| DB
  ACT -.->|"Consulta por NIT [HTTPS · timeout 5 s]"| REG
  THR -->|"Rechaza con 429 [exceso de intentos]"| ERR
  AUT -->|"Rechaza con 401 [sin token o vencido]"| ERR
  ROL -->|"Rechaza con 403 [rol sin permiso]"| ERR
  POL -->|"Rechaza con 403 [recurso ajeno]"| ERR
  subgraph LEY["Leyenda"]
    direction LR
    LG0["Capa de control"]:::comp
    LG1["Contenedor"]:::cont
    LG2{{"Origen no confiable o externo"}}:::ext
    LG3>"Respuesta de rechazo"]:::falla
    LG4{{"Propuesta Ronda 4"}}:::extP
    LG5["Línea continua: relación decidida · línea discontinua: propuesta o por confirmar"]:::comp
  end
```

</details>
