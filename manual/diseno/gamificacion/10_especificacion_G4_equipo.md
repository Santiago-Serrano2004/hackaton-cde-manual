# 10 · Especificación G4: Panel del equipo CDE: cohorte por nivel

**Objetivo.** Mostrar al equipo cómo avanza el grupo y cómo prefiere celebrar, **sin exponer a ninguna persona**, para decidir ajustes del módulo.
**Entradas.** `prototipo/equipo.html`, `01_direccion_y_mecanicas.md` §8, `04_datos.md` §6 (privacidad), `T-43`.
**Pantallas del manual.** E14 (nueva vista; sin mockup previo) · **Roles.** equipo CDE, administrador
**Tarea(s).** Sin tarea propia en `backlog.csv` (PD-08 de diseño); se propone dentro de T-45. Fuera de A y B
**Requisitos.** RF-17, RF-19, RNF-13, RD-10 · **Criterio de evaluación que protege.** Negocio 15 · Funcionalidad 60 · **ISO/IEC 25010.** Seguridad, Capacidad de interacción
**Decisiones y contradicciones relacionadas.** DEC-G-09; PD-G06 (ver `99_decisiones.md`).
**Marca.** Todo lo que no esté en `21_microcopy.md`, `21_contenido_formacion.md` o `21_casos_demo.md` es `PROPUESTA`; las claves nuevas empiezan por `G.`.

## 1. Componentes (de arriba abajo)

| # | Componente | Qué es y cómo se comporta |
|---|---|---|
| 1 | Aviso de muestra | «Cifras de muestra del prototipo»; en la aplicación se retira |
| 2 | **Personas por nivel** | Seis filas (nivel y nombre, barra, número). Una celda con 1 o 2 personas muestra «menos de 3»; con 0, «0» |
| 3 | **Cómo prefieren celebrar** | Tres filas (Completo, Discreto, Oculto) con barras y número |
| 4 | Opciones de la cohorte | Casilla «Permitir que las personas activen la tabla de posiciones» (apagada por defecto) |

## 2. Datos que consume

| Endpoint (prefijo `/api/v1`) | Campos usados |
|---|---|
| `GET /gamificacion/cohorte` (**PROPUESTA**) | `{niveles:[{nivel,nombre,personas: n | null}], intensidades:[{valor,personas}]}`; **la supresión (`null` si 1 o 2) la hace el servidor**, no el navegador |
| `PUT /gamificacion/cohorte/politica` (**PROPUESTA**) | `{permitir_clasificacion: boolean}` |

Permiso: roles `equipo_cde` y `administrador`; denegar por defecto (T-10). Errores comunes: 401 sin sesión → `ERR.401`; 403 → `ERR.403`; 422 → `ERR.422`; 429 → `ERR.429`; 500 → `ERR.500`; sin red → `ERR.red`.

## 3. Reglas de interacción

1. **No hay lista de personas** ni orden por puntos en esta pantalla.
2. **Supresión.** Celdas de 1 o 2 personas se devuelven como `null` y se muestran «menos de 3». **No se muestra el total de la cohorte**, para que no se pueda restar. Limitación conocida: con una sola celda suprimida y totales externos se podría inferir; la supresión complementaria queda como mejora (PD-G06).
3. **Lectura de las preferencias.** Si muchas personas eligen «Discreto» u «Oculto», el texto sugiere ajustar el módulo; no atribuye la falta a las personas.
4. Cambiar la política muestra el aviso «La cohorte permite la tabla de posiciones opcional.» o «La tabla de posiciones queda desactivada para la cohorte.»

## 4. Textos exactos

| Clave | Texto |
|---|---|
| `G.equipo.titulo` | Gamificación de la cohorte |
| `G.equipo.sub` | Vista agregada: cuántas personas hay en cada nivel. Sin ranking individual. |
| `G.equipo.nivel` | Personas por nivel |
| `G.equipo.menos` | menos de 3 |
| `G.equipo.nota` | Las celdas con 1 o 2 personas se muestran como «menos de 3» para no identificar a nadie. No se muestra el total de la cohorte. |
| `G.equipo.celebrar` | Cómo prefieren celebrar |
| `G.equipo.celebrar_nota` | Si muchas personas eligen «Discreto» u «Oculto», el módulo se está sintiendo pesado: es una señal para ajustar, no un fallo de las personas. |
| `G.equipo.politica` | Opciones de la cohorte |
| `G.equipo.permitir` | Permitir que las personas activen la tabla de posiciones (apagada por defecto) |
| `G.equipo.permitir_nota` | Aunque se permita, cada persona decide si participa y se muestra con alias. |

## 5. Estados

| Estado | Qué se muestra |
|---|---|
| Vacío | «Aún no hay personas con acceso» y «Cuando las personas emprendedoras ingresen al portal, verás aquí en qué nivel está cada grupo.» |
| Cargando | Esqueleto de hilo |
| Error | `ERR.red` |
| Éxito | Las tres tarjetas |

Cada estado se ve en el mockup con `?estado=vacio|cargando|error|exito`; tema con `?tema=oscuro`; ancho de 390 px con la ventana estrecha.

## 6. Atajos, teclado y accesibilidad

- Todo control se alcanza con Tab en orden visual; foco de 3 px (`--foco`) con separación de 2 px; objetivos ≥ 44 px (RNF-05).
- El control «Celebraciones» es un grupo de tres opciones de radio: flechas izquierda y derecha cambian la opción; el cambio se anuncia en una línea de estado.
- **Esc** cierra la tarjeta de hito; ningún atajo obliga a usar el ratón.
- Cada celebración se anuncia **una sola vez** en una región `role="status"` con `aria-live="polite"`.
- Ninguna información va solo por color: forma, trama, icono y texto (`01` §2).
- Ninguna animación dura más de 600 ms por tramo ni más de 2,4 s por escena; sin destellos (WCAG 2.3.1).
- Cada barra tiene `role="img"` con `aria-label` («Nivel 5 · Líder: menos de 3 personas»); el número está en texto a su lado.

## 7. Costo en horas y de dónde sale

| Elemento | Δ h | Origen |
|---|---:|---|
| E-14 (cohorte e intensidades) | 0,50 (0,30 como tabla de conteos) | Fuera de A y B; consulta de agregados 0,25 h de Santiago o Julián |

## 8. Criterio de aceptación

1. Ninguna celda con 1 o 2 personas muestra el número; la respuesta del servidor ya trae `null`.
2. No se muestra el total ni ninguna lista nominal.
3. El texto sobre «Discreto» y «Oculto» no culpa a las personas.
