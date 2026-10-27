# 40 · Secuencia · Alta de empresa con aviso de NIT y duplicados

**Qué responde este diagrama.** ¿Qué pasa, paso a paso, cuando el equipo crea una empresa?

**A quién sirve.** S y J.

![Secuencia · Alta de empresa con aviso de NIT y duplicados](img/40_secuencia_alta_empresa.png)

Descargas: [SVG](img/40_secuencia_alta_empresa.svg) · [PNG](img/40_secuencia_alta_empresa.png) · [fuente Mermaid](src/40_secuencia_alta_empresa.mmd)

## Leyenda de notación

Participantes con el nombre del contenedor o componente del diagrama C4. Flecha continua = petición o paso · flecha discontinua = respuesta · actor = persona · caja amarilla = nota · `alt`, `opt` y `loop` = alternativa, opcional y repetición. Los números ordenan los pasos.

## Cómo leerlo y decisiones

1. El aviso del dígito y la ruta `GET /nit/validar` son propuestas de la Ronda 4 (RF-31).
2. `409` solo si el NIT normalizado o el correo coinciden; `422` con advertencias si el nombre es parecido.

## Fuentes en el manual

- `01_trazabilidad.md` §3 y §5
- `tareas/T-11.md`, `T-12.md`
- `investigacion/06_requerimientos_funcionales_detallados.md` RF-31

## Resultado de la revisión

Ver la fila 40 de `90_verificacion_calidad.md` (lista de 18 puntos de `00_investigacion_metodologia.md` §6).

<details><summary>Fuente Mermaid (GitHub la dibuja sin instalar nada)</summary>

```mermaid
---
title: "Secuencia · Alta de empresa con aviso de NIT y duplicados (el aviso del dígito es propuesta de la Ronda 4)"
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
    actorBkg: "#E8EDFB"
    actorBorder: "#2F4A9E"
    actorTextColor: "#1B2340"
    actorLineColor: "#4B5575"
    signalColor: "#1B2340"
    signalTextColor: "#1B2340"
    noteBkgColor: "#FFF4D6"
    noteTextColor: "#6B4200"
    noteBorderColor: "#B34700"
    labelBoxBkgColor: "#E8EDFB"
    labelBoxBorderColor: "#2F4A9E"
    labelTextColor: "#1B2340"
    loopTextColor: "#1B2340"
    activationBkgColor: "#E8EDFB"
    activationBorderColor: "#2F4A9E"
    sequenceNumberColor: "#FFFFFF"
  sequence:
    mirrorActors: false
    wrap: true
    width: 190
    actorMargin: 40
    messageMargin: 36
    noteMargin: 12
    useMaxWidth: true
---
sequenceDiagram
  autonumber
  actor EQ as Equipo CDE
  participant SPA as Aplicación web SPA
  participant API as API Laravel
  participant NIT as Validación de NIT (propuesta)
  participant DUP as Detección de duplicados
  participant DB as Base de datos PostgreSQL
  participant AUD as Auditor::registrar()
  EQ->>SPA: Escribe el NIT y sale del campo
  SPA->>API: GET /nit/validar (HTTPS · JSON · Bearer)
  API->>NIT: Calcula el dígito esperado
  NIT-->>API: dv_estado
  API-->>SPA: 200 con aviso si el dígito no coincide
  SPA-->>EQ: Muestra «esperado N» sin bloquear
  EQ->>SPA: Guarda la empresa
  SPA->>API: POST /empresas (HTTPS · JSON · Bearer)
  API->>API: Normaliza nit_norm, correo_norm y nombre_norm
  API->>DUP: Busca coincidencias
  DUP->>DB: Compara con pg_trgm (SQL)
  DB-->>DUP: Candidatos con puntuación
  DUP-->>API: Nivel exacto, probable o posible
  alt Exacto: mismo nit_norm o mismo correo
    API-->>SPA: 409 con candidatos
    SPA-->>EQ: Ofrece abrir la ficha existente
  else Probable y sin confirmar
    API-->>SPA: 422 con advertencias
    SPA-->>EQ: Muestra el banner de posible duplicado
    EQ->>SPA: Confirma que es una empresa distinta
    SPA->>API: POST /empresas con confirmar_distinta (HTTPS)
    Note over API,DB: Sigue como el caso siguiente
  else Sin coincidencia o ya confirmada
    API->>DB: INSERT en empresas (SQL)
    API->>AUD: Registra crear con antes y después
    AUD->>DB: INSERT en auditoria (SQL)
    API-->>SPA: 201 con avisos
    Note over API: Publica el evento EmpresaCreada
  end
  Note over EQ,AUD: Leyenda: flecha continua = petición o paso · flecha discontinua = respuesta · actor = persona · caja amarilla = nota · alt, opt y loop = alternativa, opcional y repetición
```

</details>
