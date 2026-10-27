# 10 · Especificación G5: Tabla de posiciones opcional (vista previa)

**Objetivo.** Dejar que quien quiera compararse con su cohorte lo haga con alias, sin exponer a la última persona ni a quien no participa.
**Entradas.** `prototipo/posiciones.html`, `06_ux_gamificacion.md` §7.2 (clasificación), `diseno/99_decisiones.md` DEC-13 y PD-05, `00_investigacion.md` IG-08.
**Pantallas del manual.** M7 (sección) · **Roles.** emprendedor
**Tarea(s).** RF-19 (Should; fuera de A y B). La vista previa no se construye en A ni en B
**Requisitos.** RF-19, RD-09 · **Criterio de evaluación que protege.** Funcionalidad 60 · **ISO/IEC 25010.** Capacidad de interacción, Seguridad
**Decisiones y contradicciones relacionadas.** DEC-13 (existente), DEC-G-09; PD-05 (existente) (ver `99_decisiones.md`).
**Marca.** Todo lo que no esté en `21_microcopy.md`, `21_contenido_formacion.md` o `21_casos_demo.md` es `PROPUESTA`; las claves nuevas empiezan por `G.`.

## 1. Componentes (de arriba abajo)

| # | Componente | Qué es y cómo se comporta |
|---|---|---|
| 1 | Aviso de muestra | «Vista previa con datos de muestra» |
| 2 | **Participar** | Casilla «Participar en la tabla de posiciones» (apagada por defecto) |
| 3 | **Tabla** | Cinco primeras personas con alias («Persona n») y puntos, una fila «…» («Otras posiciones no se muestran») y la fila propia resaltada con el alias «Persona 11» |
| 4 | Nota | «Tu posición: 8 de 14 personas que participan (muestra). Solo se muestran las cinco primeras y la tuya. Nunca se muestra a la última persona…» |
| 5 | Aviso de salida | «Saliste de la tabla. Tu alias y tus puntos ya no se muestran.» |

## 2. Datos que consume

| Endpoint (prefijo `/api/v1`) | Campos usados |
|---|---|
| `GET /clasificacion` (T-43, Should) | `{top5:[{alias,puntos}], yo:{posicion,de,alias,puntos} | null}`; **si la persona es la última, `yo.posicion` es `null` y el texto es «Tu avance cuenta»** |
| `PUT /mi/clasificacion` (**PROPUESTA**) | `{participa: boolean}` |

Errores comunes: 401 sin sesión → `ERR.401`; 403 → `ERR.403`; 422 → `ERR.422`; 429 → `ERR.429`; 500 → `ERR.500`; sin red → `ERR.red`.

## 3. Reglas de interacción

1. Apagada por defecto y solo disponible si la cohorte la permite (G4).
2. Los alias son «Persona n», estables por cohorte; nunca el nombre.
3. **Nunca se muestra a la última persona.** Si la persona participante es la última: «Tu avance cuenta» sin número.
4. Salir de la tabla es inmediato y no borra puntos.
5. «Oculto» oculta también esta sección.

## 4. Textos exactos

| Clave | Texto |
|---|---|
| `G.pos.titulo` | Tabla de posiciones |
| `G.pos.sub` | Opcional, con alias y apagada por defecto. |
| `G.pos.cohorte` | Tu cohorte |
| `G.pos.participar` | Participar en la tabla de posiciones |
| `G.pos.yo` | Tú (alias «Persona 11») |
| `G.pos.otras` | Otras posiciones no se muestran |
| `G.pos.nota` | Tu posición: {n} de {total} personas que participan. Solo se muestran las cinco primeras y la tuya. Nunca se muestra a la última persona: si fueras la última, verías «Tu avance cuenta» en lugar de un número. |
| `G.pos.ultima` | Tu avance cuenta |
| `G.pos.salida` | Saliste de la tabla. Tu alias y tus puntos ya no se muestran. |
| `G.pos.vacio_t` / `.vacio` | No participas en la tabla / Nadie ve tus puntos. Si quieres compararte con tu cohorte, actívala abajo; puedes salir cuando quieras. |

## 5. Estados

| Estado | Qué se muestra |
|---|---|
| Vacío | «No participas en la tabla» con un candado |
| Cargando | Esqueleto de hilo |
| Error | `ERR.red` |
| Éxito | Tabla con la persona resaltada |

Cada estado se ve en el mockup con `?estado=vacio|cargando|error|exito`; tema con `?tema=oscuro`; ancho de 390 px con la ventana estrecha.

## 6. Atajos, teclado y accesibilidad

- Todo control se alcanza con Tab en orden visual; foco de 3 px (`--foco`) con separación de 2 px; objetivos ≥ 44 px (RNF-05).
- El control «Celebraciones» es un grupo de tres opciones de radio: flechas izquierda y derecha cambian la opción; el cambio se anuncia en una línea de estado.
- **Esc** cierra la tarjeta de hito; ningún atajo obliga a usar el ratón.
- Cada celebración se anuncia **una sola vez** en una región `role="status"` con `aria-live="polite"`.
- Ninguna información va solo por color: forma, trama, icono y texto (`01` §2).
- Ninguna animación dura más de 600 ms por tramo ni más de 2,4 s por escena; sin destellos (WCAG 2.3.1).
- La tabla tiene `caption` accesible y encabezados con `scope`; la fila propia se distingue por fondo **y** por el texto «Tú».

## 7. Costo en horas y de dónde sale

| Elemento | Δ h | Origen |
|---|---:|---|
| E-15 (tabla opt-in) | 0,75 | Fuera de A y B (RF-19 es Should) |

## 8. Criterio de aceptación

1. Nunca aparece la última persona de la cohorte.
2. Sin participar, no se ven alias ni puntos de la persona.
3. Con «Oculto» la sección desaparece.
