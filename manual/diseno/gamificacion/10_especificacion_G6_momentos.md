# 10 · Especificación G6: Momentos de celebración (catálogo)

**Objetivo.** Dejar un catálogo único de los diez momentos en que el módulo reacciona, con su disparador real, su versión con movimiento, su versión estática equivalente, su texto y la garantía de que nunca bloquean.
**Entradas.** `prototipo/momentos.html`, `01_direccion_y_mecanicas.md` §6 y §7, `00_investigacion.md` §4.
**Pantallas del manual.** Transversal (M2, M3, M5, M7) · **Roles.** emprendedor
**Tarea(s).** T-43b (listeners), T-44, T-47b (animación, lista de espera)
**Requisitos.** RF-17, RF-18, RD-01..RD-04 · **Criterio de evaluación que protege.** Funcionalidad 60 · Diferenciador 15 · **ISO/IEC 25010.** Capacidad de interacción
**Decisiones y contradicciones relacionadas.** DEC-G-02, DEC-G-03, DEC-G-04; RG-05, RG-07, RG-08 (ver `99_decisiones.md`).
**Marca.** Todo lo que no esté en `21_microcopy.md`, `21_contenido_formacion.md` o `21_casos_demo.md` es `PROPUESTA`; las claves nuevas empiezan por `G.`.

## 1. Componentes (de arriba abajo)

| # | Componente | Qué es y cómo se comporta |
|---|---|---|
| 1 | Control «Celebraciones» | El mismo de Mi ruta; en esta página cambia cómo se ve cada momento |
| 2 | Reiniciar la demostración | Vuelve a 430 puntos y a nivel 3 |
| 3 | Pregunta de primera vez | Se muestra con el botón de G-01 |
| 4 | Tarjetas de momento | Una por momento con: ID, nombre, disparador, qué se ve, con y sin movimiento, duración, texto, si bloquea y un botón para verlo |
| 5 | Franja «a un gesto de…» | Se muestra con el botón de G-06 |

## 2. Datos que consume

Esta pantalla **no existe en la aplicación**: es una herramienta de revisión del prototipo. Los datos de cada momento salen de los eventos de dominio de T-43 (`puntos_otorgados`, `compromiso_cumplido`, `NivelAlcanzado`, `InsigniaOtorgada`) y del cálculo descrito en `01` §4.

## 3. Reglas de interacción

1. Reglas comunes: **nunca bloquea**; **una celebración mayor por acción**; toasts con cola de 1 visible y paso a línea de estado desde el tercero de la sesión; **un solo anuncio** por escena.
2. G-03, G-04 y G-05 se ejecutan juntas con el botón «Simular la escena» (≈ 1,9 s).
3. El orden de prioridad si dos momentos coinciden: G-05 dentro de G-04 dentro de G-03 → una sola tarjeta; G-02 no se muestra si coincide con G-03.
4. Un hecho repetido (G-09) nunca anima.
5. G-10 (vencido) no tiene botón porque **no celebra ni anima**: es un estado.

## 4. Textos exactos

Los textos están en la tabla de §4 y en `10_especificacion_G1`.

## 5. Estados

| Estado | Qué se muestra |
|---|---|
| Normal | Diez tarjetas |
| Resto de estados | No aplican: es una página de revisión sin datos de servidor |

Cada estado se ve en el mockup con `?estado=vacio|cargando|error|exito`; tema con `?tema=oscuro`; ancho de 390 px con la ventana estrecha.

## 6. Atajos, teclado y accesibilidad

- Todo control se alcanza con Tab en orden visual; foco de 3 px (`--foco`) con separación de 2 px; objetivos ≥ 44 px (RNF-05).
- El control «Celebraciones» es un grupo de tres opciones de radio: flechas izquierda y derecha cambian la opción; el cambio se anuncia en una línea de estado.
- **Esc** cierra la tarjeta de hito; ningún atajo obliga a usar el ratón.
- Cada celebración se anuncia **una sola vez** en una región `role="status"` con `aria-live="polite"`.
- Ninguna información va solo por color: forma, trama, icono y texto (`01` §2).
- Ninguna animación dura más de 600 ms por tramo ni más de 2,4 s por escena; sin destellos (WCAG 2.3.1).

## 7. Costo en horas y de dónde sale

| Elemento | Δ h | Origen |
|---|---:|---|
| Página de momentos | 0 | No se construye en la aplicación |
| G-02 y G-09 (avisos) | incluidos en T-44 | Colchón / plan |
| G-03..G-05 (escena) | E-05 + E-09 | Ver `01` §10 |

## 8. Criterio de aceptación

1. Para cada momento hay disparador, versión con movimiento, versión sin movimiento, duración, texto y la afirmación «Bloquea: No».
2. Cambiar «Celebraciones» a Discreto u Oculto cambia la versión que se ve.
3. Con `prefers-reduced-motion`, ninguna tarjeta ejecuta animaciones.

## 9. Catálogo

| ID | Momento | Dispara (hecho real) | Se ve | Con movimiento | Sin movimiento | Duración | Texto | Bloquea |
|---|---|---|---|---|---|---|---|---|
| G-01 | Primera vez en el portal | Primer ingreso tras aceptar el consentimiento (M1) y antes de ver puntos | Tarjeta no modal arriba de Mi ruta: «¿Cómo prefieres que celebremos tus avances?» con tres botones (Completo, Discreto, Oculto) | Entra con opacidad 220 ms | Aparece sin movimiento | Hasta elegir o «Decidir después» (queda en Completo) | ¿Cómo prefieres que celebremos tus avances? Puedes cambiarlo cuando quieras. | No |
| G-02 | Ganar puntos | `puntos_otorgados` por un reto de un solo paso (ficha básica, asistencia, cita, diagnóstico, compromiso tardío) | Aviso breve «+30 · Asististe a «Taller de finanzas básicas»» y una baldosa nueva en El hilo | Aviso entra 220 ms, dura 5 s; baldosa crece 520 ms; contador sube 500 ms | Una línea de estado con el mismo texto; baldosa y total ya actualizados | ≤ 520 ms de movimiento; aviso 5 s | +{pts} · {motivo} | No |
| G-03 | Cumplir un compromiso a tiempo | El equipo marca el compromiso como cumplido antes de su fecha (`COMPROMISO_CUMPLIDO`) | El hilo avanza a la siguiente estación, nace una baldosa, el contador sube y la barra se llena | Tramo de hilo 420 ms → baldosa 520 ms → contador y barra 500 ms (en paralelo desde 120 ms) | Estado final inmediato: estación hecha, baldosa, total y barra | ≈ 1,0 s hasta el siguiente paso; la escena completa ≤ 2,4 s | Cumpliste «{compromiso}»: +25 puntos. | No |
| G-04 | Subir de nivel | `NivelAlcanzado` (cruzar un umbral de puntos) | Tarjeta de hito no modal con el emblema del nivel, su frase y un resumen del nivel que termina (3 cifras reales) | La tarjeta sube 16 px y aparece en 320 ms | La tarjeta aparece sin movimiento | 320 ms; queda hasta cerrarla | Nivel {n}: {nombre} · {frase} | No |
| G-05 | Ganar una insignia | `InsigniaOtorgada` (criterio cumplido) | La insignia se estampa dentro de la misma tarjeta de hito si coincide con un nivel; si no, aparece sola en una tarjeta pequeña | Estampado: de 135 % y −8° a 100 % en 520 ms, con 380 ms de retraso | La insignia aparece ya estampada | 520 ms | Nueva insignia: {nombre} | No |
| G-06 | A un gesto de… | El siguiente hecho disponible completaría un nivel o una insignia (se calcula en cada carga; se muestra mientras sea cierto) | Franja informativa bajo «Tu próximo paso»: «Estás a un gesto de dos logros…» | Ninguno | Igual | Permanente mientras sea cierto; no se repite como aviso emergente | Estás a un gesto de dos logros: cumplir «{compromiso}» a tiempo te lleva al nivel {n} y te da la insignia {insignia}. | No |
| G-07 | Completar un módulo (misión) | Todos los pasos verificables de una misión están cumplidos (derivado, no se guarda) | La misión pasa a «Recorrido completo» con borde grueso; no suma puntos extra | Borde y chip aparecen con opacidad 220 ms | Cambio inmediato de chip | 220 ms | Recorrido completo | No |
| G-08 | Hallazgo del diagnóstico | Un diagnóstico nuevo cuando ya existe uno anterior | Tarjeta «Lo que cambió desde tu primer diagnóstico» con barras antes/después por dimensión y una frase neutra | Las barras crecen en 400 ms, escalonadas 60 ms | Barras ya dibujadas | ≤ 640 ms | Tu mayor avance está en {dimension}. {dimension_baja} es hoy tu dimensión con más espacio para crecer. | No |
| G-09 | Sin puntos (repetido o tope del mes) | Reintento del mismo hecho (idempotencia) o tope mensual del reto | Aviso neutral que explica por qué no sumó | Igual que G-02 | Línea de estado | 5 s | Este logro ya estaba registrado. No se suman puntos dos veces. | No |
| G-10 | Compromiso vencido | La fecha límite pasa sin cumplir (estado automático) | Etiqueta «Vencido» con icono y texto de ayuda; **ninguna animación, ningún aviso emergente, ningún punto menos** | Ninguno | Igual | — | Venció el {fecha}. Habla con el equipo para reprogramarlo. | No |
