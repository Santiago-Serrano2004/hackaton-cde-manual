# 43 · Secuencia · Recordatorio automático de una cita

**Qué responde este diagrama.** ¿Cómo se crean, envían y reintentan los recordatorios?

**A quién sirve.** J.

![Secuencia · Recordatorio automático de una cita](img/43_secuencia_recordatorio_cita.png)

Descargas: [SVG](img/43_secuencia_recordatorio_cita.svg) · [PNG](img/43_secuencia_recordatorio_cita.png) · [fuente Mermaid](src/43_secuencia_recordatorio_cita.mmd)

## Leyenda de notación

Participantes con el nombre del contenedor o componente del diagrama C4. Flecha continua = petición o paso · flecha discontinua = respuesta · actor = persona · caja amarilla = nota · `alt`, `opt` y `loop` = alternativa, opcional y repetición. Los números ordenan los pasos.

## Cómo leerlo y decisiones

1. El envío lo hace el comando `recordatorios:enviar`; si el comando encola en lugar de enviar, el Worker de cola participa (Q-D13).
2. Los recordatorios de una cita cancelada o reprogramada se cancelan y se recrean (Q-D6).

## Fuentes en el manual

- `01_trazabilidad.md` §3 y §6
- `05_arquitectura.md` §5
- `tareas/T-20.md`, `T-21.md`

## Preguntas y contradicciones que lo afectan

Ver `99_preguntas_abiertas_diagramas.md`: Q-D6, Q-D13.

## Resultado de la revisión

Ver la fila 43 de `90_verificacion_calidad.md` (lista de 18 puntos de `00_investigacion_metodologia.md` §6).

<details><summary>Fuente Mermaid (GitHub la dibuja sin instalar nada)</summary>

```mermaid
---
title: "Secuencia · Recordatorio automático de una cita"
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
  actor EMP as Emprendedor
  actor EQ as Equipo CDE
  participant SPA as Aplicación web SPA
  participant API as API Laravel
  participant PRG as Programación de recordatorios
  participant DB as Base de datos PostgreSQL
  participant PLA as Planificador
  participant ENV as Envío de recordatorios
  participant COR as Servicio de correo SMTP
  EMP->>SPA: Solicita una cita
  SPA->>API: POST /mi/citas (HTTPS · JSON · Bearer)
  API->>DB: INSERT en citas con estado solicitada (SQL)
  API-->>SPA: 201 con estado solicitada
  EQ->>SPA: Agenda fecha y asesor
  SPA->>API: POST /citas/{id}/agendar (HTTPS · JSON · Bearer)
  API->>DB: UPDATE citas a estado agendada (SQL)
  API->>PRG: Publica el evento CitaAgendada
  alt Cita a 24 h o más
    PRG->>DB: INSERT de 2 recordatorios pendientes: 24 h y 1 h antes (SQL)
  else Cita a menos de 24 h y 1 h o más
    PRG->>DB: INSERT de 1 recordatorio pendiente: 1 h antes (SQL)
  else Cita a menos de 1 h
    Note over PRG: No crea recordatorios
  end
  loop Cada minuto
    PLA->>ENV: Ejecuta recordatorios:enviar
    ENV->>DB: Toma pendientes con programado_para vencido (SQL)
    ENV->>COR: Envía el correo (SMTP)
    alt Entregado
      ENV->>DB: UPDATE a estado enviado con enviado_en (SQL)
    else Falla
      ENV->>DB: Suma un intento y reintenta a 1, 5 y 15 min (SQL)
      Note over ENV,DB: Tras 3 intentos queda fallido y se ve en GET /notificaciones
    end
  end
  Note over EMP,COR: Leyenda: flecha continua = petición o paso · flecha discontinua = respuesta · actor = persona · caja amarilla = nota · alt, opt y loop = alternativa, opcional y repetición
```

</details>
