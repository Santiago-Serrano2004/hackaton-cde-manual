# 10 · Especificación de pantalla 01: Acceso e inicio por rol

**Objetivo.** Permitir ingresar y llevar a cada rol a su inicio; recoger la autorización de datos en el primer ingreso de la persona emprendedora.
**Entradas.** `prototipo/p01-acceso.html` (mockup navegable), `21_microcopy.md`, `21_casos_demo.md`, `05_arquitectura.md` §3 (API), `02_tokens.md`, `03_componentes.md`, `01_brief_y_ia.md`.
**Pantallas del manual.** E1, M1, M2, D1 · **Roles.** todos
**Tarea(s).** T-10 (autenticación), T-40 (layout por rol y rutas protegidas), T-46 (consentimiento)
**Requisitos.** RF-25, RNF-13, RNF-18 · **Criterio de evaluación que protege.** Funcionalidad 60 · Equipo 10 · **ISO/IEC 25010.** Seguridad, Capacidad de interacción
**Decisiones y contradicciones relacionadas.** DEC-05 (rol `administrador`), DEC-17 (ver `99_decisiones.md`).

## 1. Componentes (de arriba abajo)

| # | Componente | Qué es y cómo se comporta |
|---|---|---|
| 1 | Formulario de acceso | Dos campos con etiqueta visible (correo, contraseña) y botón primario «Ingresar»; sin CAPTCHA (WCAG 3.3.8). |
| 2 | Aviso de error de acceso | Banda `role=alert` encima del formulario. |
| 3 | Ilustración «hilo» | SVG propio con texto alternativo (`03_componentes.md` §4). |
| 4 | Lista de inicio por rol | Cuatro filas informativas con enlace al inicio de cada rol (en la app real no se muestra: es del prototipo). |
| 5 | Tarjeta de consentimiento (M1) | Texto, casilla obligatoria y botón «Acepto y continúo»; error enlazado a la casilla. |

## 2. Datos que consume

| Endpoint (prefijo `/api/v1`) | Campos usados |
|---|---|
| `POST /api/v1/auth/login` | correo, clave → token Sanctum con abilities del rol; 401 sin coincidencia; 429 por intentos |
| `GET /api/v1/auth/me` | id, nombre, rol, consentimiento_vigente |
| `POST /api/v1/auth/consentimiento` | version_texto, aceptado=true |

Errores comunes: 401 sin sesión → `ERR.401`; 403 → `ERR.403`; 422 → `ERR.422`; 429 → `ERR.429`; 500 → `ERR.500`; sin red → `ERR.red`.

## 3. Reglas de interacción

1. Al enviar con credenciales válidas se redirige según `rol`: administrador y equipo_cde → `/inicio`; emprendedor → consentimiento si `consentimiento_vigente=false`, si no `/mi-ruta`; docente y estudiante_consultor → `/mis-proyectos`.
2. Enter en cualquier campo envía el formulario.
3. El botón queda en estado cargando (spinner, mismo ancho, `aria-busy`) mientras responde la API.
4. Tras 429 el formulario muestra el aviso de bloqueo y no oculta los campos.
5. Casilla sin marcar al pulsar «Acepto y continúo»: el error aparece bajo la casilla y el foco va a la casilla.

## 4. Textos exactos

| Clave | Texto |
|---|---|
| `LOGIN.titulo` | Ingresa a tu cuenta |
| `LOGIN.correo` | Correo electrónico |
| `LOGIN.clave` | Contraseña |
| `LOGIN.boton` | Ingresar |
| `LOGIN.error_credenciales` | El correo o la contraseña no coinciden. Revisa los datos e inténtalo de nuevo. |
| `LOGIN.error_bloqueo` | Hiciste muchos intentos. Espera un minuto y vuelve a intentarlo. |
| `M1.titulo` | Antes de empezar: tus datos |
| `M1.casilla` | Autorizo el tratamiento de mis datos para estas finalidades. |
| `M1.boton` | Acepto y continúo |
| `M1.error_sin_aceptar` | Para continuar necesitamos tu autorización. |

## 5. Estados

| Estado | Qué se muestra |
|---|---|
| Vacío | No aplica (el formulario vacío es el reposo). |
| Cargando | Botón «Ingresando…» con spinner; campos habilitados. |
| Error | `LOGIN.error_credenciales` en banda roja con icono; la contraseña se limpia. |
| Éxito | Redirección al inicio del rol. |

Cada estado se puede ver en el mockup con `?estado=vacio|cargando|error|exito`; tema con `?tema=oscuro`.

## 6. Accesibilidad

Cumple las comprobaciones C1–C28 de `00_investigacion.md` §10: foco visible de 3 px, objetivos ≥ 44 px, ninguna información solo por color, `role=status/alert` en avisos, reflujo a 390 px. Resultados medidos: `90_revision.md`.

## 7. Criterio de aceptación

1. Con `?estado=error` se ve la banda roja con icono y texto; con `?estado=bloqueo`, el aviso de bloqueo.
2. Axe sin violaciones críticas en claro y oscuro, 1440 y 390 px.
3. La casilla de consentimiento tiene el error enlazado con `aria-describedby`.
4. Ningún texto sale de `21_microcopy.md` sin su clave.
