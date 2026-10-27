# 60 · Seguridad · Autenticación con token

**Qué responde este diagrama.** ¿Cómo entra un usuario, qué pasa con los intentos fallidos y cómo sale?

**A quién sirve.** S.

![Seguridad · Autenticación con token](img/60_seguridad_autenticacion.png)

Descargas: [SVG](img/60_seguridad_autenticacion.svg) · [PNG](img/60_seguridad_autenticacion.png) · [fuente Mermaid](src/60_seguridad_autenticacion.mmd)

## Leyenda de notación

Participantes con el nombre del contenedor o componente del diagrama C4. Flecha continua = petición o paso · flecha discontinua = respuesta · actor = persona · caja amarilla = nota · `alt`, `opt` y `loop` = alternativa, opcional y repetición. Los números ordenan los pasos.

## Cómo leerlo y decisiones

1. Token Sanctum con abilities del rol y vigencia de 8 h; el límite es de 5 intentos por minuto por IP y correo.

## Fuentes en el manual

- `01_trazabilidad.md` §5 y §7
- `05_arquitectura.md` §4
- `tareas/T-10.md` §4 y §5

## Resultado de la revisión

Ver la fila 60 de `90_verificacion_calidad.md` (lista de 18 puntos de `00_investigacion_metodologia.md` §6).

<details><summary>Fuente Mermaid (GitHub la dibuja sin instalar nada)</summary>

```mermaid
---
title: "Seguridad · Autenticación con token Sanctum, consentimiento y cierre de sesión"
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
  actor USR as Usuario del CDE
  participant SPA as Aplicación web SPA
  participant API as API Laravel
  participant DB as Base de datos PostgreSQL
  participant AUD as Auditor::registrar()
  USR->>SPA: Escribe correo y contraseña
  SPA->>API: POST /auth/login (HTTPS · JSON)
  alt Más de 5 intentos por minuto con la misma IP y correo
    API-->>SPA: 429
  else Credenciales inválidas
    API->>AUD: Registra el fallo sin la contraseña
    AUD->>DB: INSERT en auditoria (SQL)
    API-->>SPA: 422 Credenciales inválidas
  else Credenciales válidas
    API->>DB: Crea el token con abilities del rol y vigencia de 8 h (SQL)
    API->>AUD: Registra login con la IP
    AUD->>DB: INSERT en auditoria (SQL)
    API-->>SPA: 200 con token Bearer, vencimiento y usuario
  end
  SPA->>API: GET /auth/me (HTTPS · JSON · Bearer)
  API-->>SPA: 200 con rol y consentimiento_vigente
  opt Emprendedor sin consentimiento vigente
    SPA->>API: POST /auth/consentimiento (HTTPS · JSON · Bearer)
    API->>DB: INSERT en consentimientos (SQL)
    API-->>SPA: 200
  end
  Note over SPA,API: Cada petición siguiente pasa por límite, token, rol y Policy (ver diagrama 61)
  USR->>SPA: Cierra sesión
  SPA->>API: POST /auth/logout (HTTPS · JSON · Bearer)
  API->>DB: Revoca el token (SQL)
  API->>AUD: Registra logout
  API-->>SPA: 204
  Note over USR,AUD: Leyenda: flecha continua = petición o paso · flecha discontinua = respuesta · actor = persona · caja amarilla = nota · alt, opt y loop = alternativa, opcional y repetición
```

</details>
