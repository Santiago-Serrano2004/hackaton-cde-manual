# 10 · Especificación de pantalla 05: Fusión de empresas lado a lado con deshacer

**Objetivo.** Fusionar dos fichas eligiendo el valor de cada campo con su origen y fecha a la vista, y poder deshacer.
**Entradas.** `prototipo/p05-fusion.html` (mockup navegable), `21_microcopy.md`, `21_casos_demo.md`, `05_arquitectura.md` §3 (API), `02_tokens.md`, `03_componentes.md`, `01_brief_y_ia.md`.
**Pantallas del manual.** E5 · **Roles.** equipo_cde, administrador
**Tarea(s).** T-12 (fusión transaccional), T-19 (vista lado a lado y Deshacer)
**Requisitos.** RF-03, RF-34, RF-35, RF-36, RF-48 · **Criterio de evaluación que protege.** Funcionalidad 60 · Diferenciador 15 · **ISO/IEC 25010.** Fiabilidad, Capacidad de interacción, Protección
**Decisiones y contradicciones relacionadas.** DEC-06, DEC-12, DEC-18 (por revisar), CON-03 (ver `99_decisiones.md`).

## 1. Componentes (de arriba abajo)

| # | Componente | Qué es y cómo se comporta |
|---|---|---|
| 1 | Banner de duplicado | Igual al de E4 (señales y puntaje). |
| 2 | Comparación lado a lado | Rejilla de 3 columnas: campo, A (se conserva), B (se fusiona); botón de opción por celda; sello de procedencia y origen · fecha bajo cada valor; celda vacía deshabilitada. |
| 3 | Resumen del resultado | Lista del valor elegido por campo y recuento de lo que se mueve. |
| 4 | Diálogo de confirmación | Título `E5.titulo_modal`, texto `E5.explicacion`. |
| 5 | Aviso con Deshacer | Toast de 30 s con cuenta regresiva en el botón. |

## 2. Datos que consume

| Endpoint (prefijo `/api/v1`) | Campos usados |
|---|---|
| `GET /api/v1/empresas/duplicados` | par (A, B), señales, parecido |
| `GET /api/v1/empresas/{id}` | campos críticos con `procedencia{origen,fecha_dato,registrado_por,estado}` (RF-34) |
| `POST /api/v1/empresas/{id}/fusionar` | body `destino_id` y, `PROPUESTA`, `campos{campo:"A"\|"B"}`; 200 con `fusion_id`; 409 si una está archivada |
| `POST /api/v1/fusiones/{fusion_id}/deshacer` | `PROPUESTA`: restaura desde el snapshot (ventana de 24 h, DEC-06) |

Errores comunes: 401 sin sesión → `ERR.401`; 403 → `ERR.403`; 422 → `ERR.422`; 429 → `ERR.429`; 500 → `ERR.500`; sin red → `ERR.red`.

## 3. Reglas de interacción

1. La opción preseleccionada sigue la regla de RF-34: gana el estado más fuerte; si empatan, el valor más reciente; el texto «Sugerido por la regla…» lo explica y la persona decide.
2. Cambiar una opción actualiza el resumen sin recargar y anuncia el cambio.
3. «Fusionar empresas» abre el diálogo; confirmar muestra el estado de éxito, el aviso con «Deshacer (30 s)» y la entrada de auditoría.
4. «Deshacer» restaura las dos fichas y muestra «Fusión deshecha».
5. Teclado: Tab llega a cada grupo de opciones; flechas cambian de opción dentro del grupo.

## 4. Textos exactos

| Clave | Texto |
|---|---|
| `E5.titulo_modal` | Fusionar empresas |
| `E5.explicacion` | Se moverá todo el historial de {origen} a {destino}. {origen} quedará archivada. |
| `E5.boton` | Fusionar empresas |
| `E5.hecho` | Empresas fusionadas. El historial quedó en {destino}. |
| `E5.deshacer` | Deshacer |
| `E5.lado_a_lado` | Comparar lado a lado |
| `E5.error_misma` | No se puede fusionar una empresa consigo misma. |
| `E5.error_archivada` | Una de las empresas ya está archivada. |

## 5. Estados

| Estado | Qué se muestra |
|---|---|
| Vacío | «No hay posibles duplicados». |
| Cargando | Esqueleto de 6 filas. |
| Error | `E5.error_archivada` con enlace a Empresas. |
| Éxito | Pantalla «Empresas fusionadas» con enlace a Auditoría. |

Cada estado se puede ver en el mockup con `?estado=vacio|cargando|error|exito`; tema con `?tema=oscuro`.

## 6. Accesibilidad

Cumple las comprobaciones C1–C28 de `00_investigacion.md` §10: foco visible de 3 px, objetivos ≥ 44 px, ninguna información solo por color, `role=status/alert` en avisos, reflujo a 390 px. Resultados medidos: `90_revision.md`.

## 7. Criterio de aceptación

1. Cada celda muestra valor, sello (forma + icono + texto) y origen · fecha.
2. El resumen cambia al elegir otra opción.
3. Después de confirmar aparece «Deshacer (30 s)» y, al pulsarlo, vuelve la comparación.
4. La fusión y el deshacer quedan en la auditoría (p13).
