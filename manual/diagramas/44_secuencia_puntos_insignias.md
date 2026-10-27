# 44 · Secuencia · Puntos e insignias por un hecho real

**Qué responde este diagrama.** ¿Cómo un hecho verificable del sistema se convierte en puntos sin doble cobro?

**A quién sirve.** MP.

![Secuencia · Puntos e insignias por un hecho real](img/44_secuencia_puntos_insignias.png)

Descargas: [SVG](img/44_secuencia_puntos_insignias.svg) · [PNG](img/44_secuencia_puntos_insignias.png) · [fuente Mermaid](src/44_secuencia_puntos_insignias.mmd)

## Leyenda de notación

Participantes con el nombre del contenedor o componente del diagrama C4. Flecha continua = petición o paso · flecha discontinua = respuesta · actor = persona · caja amarilla = nota · `alt`, `opt` y `loop` = alternativa, opcional y repetición. Los números ordenan los pasos.

## Cómo leerlo y decisiones

1. El QR es fijo por evento en A y B (R3).
2. En A y B el equipo marca el compromiso como cumplido y el hecho `CompromisoCumplido` sigue el mismo camino.

## Fuentes en el manual

- `01_trazabilidad.md` §3, §5 y §6
- `06_ux_gamificacion.md` §7.2
- `tareas/T-23.md`, `T-43.md`

## Preguntas y contradicciones que lo afectan

Ver `99_preguntas_abiertas_diagramas.md`: Q-D10, Q-D11.

## Resultado de la revisión

Ver la fila 44 de `90_verificacion_calidad.md` (lista de 18 puntos de `00_investigacion_metodologia.md` §6).

<details><summary>Fuente Mermaid (GitHub la dibuja sin instalar nada)</summary>

```mermaid
---
title: "Secuencia · Puntos e insignias por un hecho real (asistencia a un evento; el compromiso cumplido sigue el mismo camino)"
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
  participant SPA as Aplicación web SPA
  participant API as API Laravel
  participant BUS as Eventos de dominio
  participant ESC as Escuchas de eventos
  participant PTS as Registro de puntos
  participant NIV as Niveles e insignias
  participant DB as Base de datos PostgreSQL
  EMP->>SPA: Escanea el QR del evento
  SPA->>API: POST /asistencia/qr con token (HTTPS · JSON · Bearer)
  alt Código vencido
    API-->>SPA: 422 Código vencido
  else Asistencia ya registrada
    API-->>SPA: 409
  else Asistencia válida
    API->>DB: INSERT en asistencias, única por evento y persona (SQL)
    API->>BUS: Publica AsistenciaRegistrada
    API-->>SPA: 201
    BUS->>ESC: Entrega el hecho (listener de Laravel)
    ESC->>PTS: Evalúa el reto ASISTIR_EVENTO: 30 puntos, máximo 4 al mes
    alt Reto inactivo o tope mensual alcanzado
      PTS-->>ESC: No otorga puntos
    else Otorga puntos
      PTS->>DB: INSERT en puntos_movimientos, único por persona, reto y referencia (SQL)
      alt Reintento del mismo hecho
        DB-->>PTS: Rechaza el duplicado
        Note over PTS,DB: Sin doble cobro
      else Primera vez
        PTS->>NIV: Recalcula el nivel
        alt Cruza un umbral de nivel
          NIV->>DB: INSERT en persona_insignias si cumple el criterio (SQL)
          NIV->>BUS: Publica NivelAlcanzado
        end
      end
    end
  end
  EMP->>SPA: Abre Mi camino
  SPA->>API: GET /mi/progreso (HTTPS · JSON · Bearer)
  API-->>SPA: 200 con puntos, nivel, insignias y movimientos
  Note over EMP,SPA: Muestra el aviso +30 con el motivo
  Note over EMP,DB: Leyenda: flecha continua = petición o paso · flecha discontinua = respuesta · actor = persona · caja amarilla = nota · alt, opt y loop = alternativa, opcional y repetición
```

</details>
