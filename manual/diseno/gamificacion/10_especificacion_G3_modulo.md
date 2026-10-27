# 10 · Especificación G3: Módulo de formación: lección, misión y práctica

**Objetivo.** Dar una lección corta de un tema real del CDE, mostrar su misión con pasos **verificables** y dejar practicar con retroalimentación amable, sin que la práctica sume puntos en esta versión.
**Entradas.** `prototipo/reto.html`, `21_contenido_formacion.md` §1, §3 (L3) y §4, `01_direccion_y_mecanicas.md`.
**Pantallas del manual.** (nueva; contenido de M5 y M7) · **Roles.** emprendedor
**Tarea(s).** T-44 (fuera de A y B: E-13); el contenido entra como reto con `descripcion` (`21_contenido_formacion.md` §1)
**Requisitos.** RF-17, RD-03, RD-11, RD-12 · **Criterio de evaluación que protege.** Funcionalidad 60 · Diferenciador 15 · **ISO/IEC 25010.** Capacidad de interacción
**Decisiones y contradicciones relacionadas.** DEC-G-11; PD-G05 (ver `99_decisiones.md`).
**Marca.** Todo lo que no esté en `21_microcopy.md`, `21_contenido_formacion.md` o `21_casos_demo.md` es `PROPUESTA`; las claves nuevas empiezan por `G.`.

## 1. Componentes (de arriba abajo)

| # | Componente | Qué es y cómo se comporta |
|---|---|---|
| 1 | Título | Nombre de la misión y «Misión de 3 pasos · lección de 3 minutos» |
| 2 | **Lección** | «Qué aprendes» y 3 párrafos (≤ 150 palabras) en una columna de 68 caracteres |
| 3 | **Tu misión** | Tres pasos con marca (hecho / ahora) y puntos: son hechos del sistema, no lectura |
| 4 | **Práctica** | Cuatro preguntas con cuatro opciones; aviso «no suma puntos en esta versión»; cada respuesta da retroalimentación al instante y se puede corregir |
| 5 | Resumen | «Respondiste {n} de 4; acertaste {k}. Esta práctica no suma puntos en esta versión.» |

## 2. Datos que consume

| Origen | Campos usados |
|---|---|
| Reto con `descripcion` (T-43, `retos`) | `titulo`, `aprendes`, `texto` (3 párrafos), `pasos[]` |
| `21_contenido_formacion.md` §4 | preguntas, opciones, respuesta correcta, retroalimentación de acierto y de fallo (se guardan en el contenido; **no hay tabla de respuestas**) |
| Siguiente iteración (**PROPUESTA**) | reto `LECCION_APROBADA`, +15 puntos, una vez por lección, ≥ 3 de 4 correctas; solo entonces habría que guardar resultados |

Errores comunes: 401 sin sesión → `ERR.401`; 403 → `ERR.403`; 422 → `ERR.422`; 429 → `ERR.429`; 500 → `ERR.500`; sin red → `ERR.red`.

## 3. Reglas de interacción

1. La práctica es **opcional**; leer o practicar no suma puntos (RG-01).
2. Elegir una opción responde de inmediato: acierto → «Correcto.» (o la frase de acierto del contenido); fallo → la frase de ayuda del contenido, **sin marcar la persona como equivocada** (estilo informativo azul, no rojo).
3. Se puede cambiar la respuesta; el resumen se actualiza.
4. Los resultados no se guardan en esta versión (privacidad y alcance).
5. La lección L2 (formalízate) exige validación del CDE antes de producción (`21_contenido_formacion.md` L2 fuentes).

## 4. Textos exactos

| Clave | Texto |
|---|---|
| `G.mod.sub` | Misión de 3 pasos · lección de 3 minutos |
| `G.mod.aprendes` | Qué aprendes |
| `G.mod.mision` | Tu misión |
| `G.mod.mision_ayuda` | Los puntos salen de los hechos de cada paso, no de leer la lección. |
| `G.mod.practica` | Practica lo que leíste |
| `G.mod.nopuntos` | Esta práctica no suma puntos en esta versión: es para ti. |
| `G.mod.resumen` | Respondiste {n} de {de}; acertaste {k}. Esta práctica no suma puntos en esta versión. |
| `G.mod.inicio` | Responde cuando quieras. Puedes cambiar tu respuesta. |
| Lección, preguntas y retroalimentación | `21_contenido_formacion.md` L3 §3 y §4, sin cambios |
| `G.mod.vacio` | Cuando el equipo te asigne una misión, su lección aparecerá aquí. |

## 5. Estados

| Estado | Qué se muestra |
|---|---|
| Vacío | Carrete de hilo y `G.mod.vacio` |
| Cargando | Esqueleto de hilo |
| Error | `ERR.red` |
| Éxito | Lección, misión y práctica |

Cada estado se ve en el mockup con `?estado=vacio|cargando|error|exito`; tema con `?tema=oscuro`; ancho de 390 px con la ventana estrecha.

## 6. Atajos, teclado y accesibilidad

- Todo control se alcanza con Tab en orden visual; foco de 3 px (`--foco`) con separación de 2 px; objetivos ≥ 44 px (RNF-05).
- El control «Celebraciones» es un grupo de tres opciones de radio: flechas izquierda y derecha cambian la opción; el cambio se anuncia en una línea de estado.
- **Esc** cierra la tarjeta de hito; ningún atajo obliga a usar el ratón.
- Cada celebración se anuncia **una sola vez** en una región `role="status"` con `aria-live="polite"`.
- Ninguna información va solo por color: forma, trama, icono y texto (`01` §2).
- Ninguna animación dura más de 600 ms por tramo ni más de 2,4 s por escena; sin destellos (WCAG 2.3.1).
- Cada pregunta es un `fieldset` con `legend`; la retroalimentación está en una región `role="status"` por pregunta.

## 7. Costo en horas y de dónde sale

| Elemento | Δ h | Origen |
|---|---:|---|
| E-13 (lección + práctica) | 1,00 | Fuera de A y B. Versión mínima: 0 h (el texto y las preguntas se imprimen como guion de taller, `21_contenido_formacion.md` §1) |

## 8. Criterio de aceptación

1. La lección es el texto de L3 y las cuatro preguntas son las de §4, con las mismas frases de retroalimentación.
2. Una respuesta equivocada nunca se pinta de rojo ni dice «incorrecto».
3. El aviso «no suma puntos» es visible antes de la primera pregunta.
