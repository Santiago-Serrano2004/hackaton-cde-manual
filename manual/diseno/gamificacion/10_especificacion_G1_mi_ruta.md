# 10 · Especificación G1: Mi ruta (portal de la persona emprendedora)

**Objetivo.** Decir a la persona dónde va, cuál es su siguiente paso y qué cambió desde que empezó, y celebrar con medida cuando cumple. Sustituye el contenido de `10_especificacion_11_mi_ruta.md` para el módulo de recompensas.
**Entradas.** `prototipo/mi-ruta.html`, `01_direccion_y_mecanicas.md`, `21_microcopy.md`, `21_casos_demo.md`, `diseno/02_tokens.md`, `tareas/T-43`, `T-44`, `T-47`.
**Pantallas del manual.** M2, M3, M5 · **Roles.** emprendedor
**Tarea(s).** T-44 (portal M2–M7), T-47 / T-47a (mapa), T-43 (puntos y niveles), T-41 (diagnósticos), T-24 (inscripción)
**Requisitos.** RF-13, RF-17, RF-18, RD-01..RD-08, RD-12 · **Criterio de evaluación que protege.** Funcionalidad 60 · Diferenciador 15 · **ISO/IEC 25010.** Capacidad de interacción, Adecuación funcional
**Decisiones y contradicciones relacionadas.** DEC-G-01, DEC-G-02, DEC-G-04, DEC-G-05; CON-G-01, CON-G-02, CON-G-03 (ver `99_decisiones.md`).
**Marca.** Todo lo que no esté en `21_microcopy.md`, `21_contenido_formacion.md` o `21_casos_demo.md` es `PROPUESTA`; las claves nuevas empiezan por `G.`.

## 1. Componentes (de arriba abajo)

| # | Componente | Qué es y cómo se comporta | Elemento (`01` §10) |
|---|---|---|---|
| 1 | Título y etapa | «Hola, {nombre}» y la etapa de acompañamiento | — |
| 2 | **Celebraciones** | Grupo de tres opciones (Completo, Discreto, Oculto); se guarda por persona; cambia el modo en el acto | E-07 |
| 3 | Pregunta de primera vez | Tarjeta no modal arriba, con tres botones y «Decidir después»; sale una vez | E-07 |
| 4 | **Tarjeta de nivel** | Emblema SVG del nivel (88 px; 72 px en móvil), «Nivel n de 6», nombre, frase, puntos, barra (`role="progressbar"`, `aria-label`, `aria-valuetext`) y «Te faltan n puntos» | E-02 |
| 5 | **Tu ruta** | Siete estaciones en lista ordenada `ol`; el hilo SVG las une: continuo hasta «Estás aquí», punteado después; colinas decorativas detrás; en ≤ 640 px la lista es vertical | E-08 |
| 6 | Estación | Círculo de 44 px: hecha (amarillo con marca), aquí (naranja con doble anillo), siguiente (borde punteado), meta (emblema del siguiente nivel). Cada una lleva rótulo («Hecho», «Estás aquí», «Siguiente», «Meta») | E-08 |
| 7 | **Tu próximo paso** | Compromiso, vencimiento y los puntos que da; botón «Avisar al equipo que lo terminé» | — |
| 8 | **A un gesto de…** | Franja informativa, solo si el siguiente hecho completa nivel o insignia; se oculta al avisar | E-06 |
| 9 | Tu enfoque | Misión destacada y enlace «cambiar» a Logros | E-11 |
| 10 | Vista del equipo (solo prototipo) | Simula que el equipo marca el compromiso; **no existe en la aplicación** (el equipo usa E8) | — |
| 11 | **Hallazgo** | «Lo que cambió desde tu primer diagnóstico»: una fila por dimensión con dos barras (arriba, primer diagnóstico; abajo, último) y «a → b (±n)» | E-10 |
| 12 | Mis pendientes | Lista con estado (En curso, En revisión, Cumplido, Vencido) con icono y texto | — |
| 13 | Para ti | Tarjeta de evento con motivo e «Inscribirme» (T-24, T-25) | — |
| 14 | **Tarjeta de hito** | No modal, fija abajo a la derecha (sobre la barra inferior en móvil): emblema del nivel, frase, insignia nueva, resumen de 3 cifras, «Ver mis logros» y «Cerrar» | E-05 |
| 15 | Línea de estado | Una línea bajo el título para Discreto y para el 3.er aviso de la sesión | — |
| 16 | Simular la escena (solo prototipo) | Ejecuta aviso → marca del equipo → celebración; «Reiniciar» vuelve a 430 | — |

## 2. Datos que consume

| Endpoint (prefijo `/api/v1`) | Campos usados |
|---|---|
| `GET /mi/progreso` (T-43) | `puntos`, `nivel{numero,nombre,siguiente{numero,puntos_min}}`, `insignias[]`, `retos[]`, `movimientos[]` (**PROPUESTA:** cada movimiento añade `tipo` y `nivel_al_sumar`; se **quita** `racha` por DEC-11) |
| `GET /mi/resumen` (T-44) | `etapa`, `proximo_paso{compromiso_id,titulo,vence_en}`, `oferta[]` |
| `GET /mi/compromisos` (T-42) | `compromiso`, `fecha_limite`, `estado` (`en_curso`, `avisado`, `cumplido`, `vencido`) |
| `PUT /mi/compromisos/{id}` (T-42) | `estado=avisado` (queda «En revisión») |
| `PUT /compromisos/{id}` (equipo, T-42) | `estado=cumplido` → eventos de dominio → puntos, nivel e insignia (T-43b) |
| `GET /mi/ruta` (T-47a) | `[{codigo,titulo,estado: hecho/hoy/siguiente/meta,fecha?}]` |
| `GET /mi/diagnosticos/comparacion` (**PROPUESTA**, T-41) | `{primero:{fecha,dimensiones[{nombre,puntaje}]},ultimo:{…}}` |
| `GET /mi/hitos?pendientes=1` y `POST /mi/hitos/{id}/visto` (**PROPUESTA**) | `{id,nivel,insignias[],resumen{puntadas,compromisos_a_tiempo,dimension{nombre,antes,ahora}}}`; la tarjeta de hito sale una vez por hito |
| `GET/PUT /mi/preferencias-gamificacion` (**PROPUESTA**) | `{intensidad: completo/discreto/oculto, enfoque}` |
| `GET /mi/oferta`, `POST /eventos/{id}/inscribirme` (T-24, T-25) | como en `10_especificacion_11_mi_ruta.md` |

Errores comunes: 401 sin sesión → `ERR.401`; 403 → `ERR.403`; 422 → `ERR.422`; 429 → `ERR.429`; 500 → `ERR.500`; sin red → `ERR.red`.

## 3. Reglas de interacción

1. **Aviso → revisión.** «Avisar al equipo que lo terminé» deshabilita el botón («Aviso enviado»), cambia el pendiente a «En revisión» y la estación a «En revisión por el equipo»; sale el aviso `M3.avisar_ok`. No suma puntos.
2. **Cierre (G-03 + G-04 + G-05).** Cuando el equipo marca «cumplido» antes de su fecha y la persona está en la pantalla: la estación pasa a hecha; el hilo avanza a la siguiente; el contador sube de 430 a 455; al cruzar 450 el nivel cambia a 4 y entra **una** tarjeta de hito con la insignia Cumplidor. Si la persona entra después, la tarjeta sale una vez (hito pendiente).
3. **Intensidad.** *Discreto:* sin tarjeta; una línea «Cumpliste «Actualizar precios»: +25 puntos, nivel 4 e insignia Cumplidor.»; sin movimiento. *Oculto:* se ocultan nivel, puntos, «A un gesto de…», enfoque y la estación meta; solo el aviso «Compromiso marcado como cumplido». *Movimiento reducido del sistema:* contenido de Completo, sin movimiento (`GAM.reducir_movimiento`).
4. **Una celebración mayor por acción.** Los avisos de puntos se encolan: máximo 1 visible; del tercero en adelante van a la línea de estado.
5. **Nunca bloquea.** La tarjeta no roba el foco; Esc o «Cerrar» la cierran; la página sigue operable debajo.
6. **Al cerrar la escena** el scroll vuelve al inicio para que se vean el nivel y la ruta (en la aplicación real no hace falta: la persona ya está mirando).
7. **Hallazgo.** Solo si hay dos diagnósticos o más; si no, la tarjeta no aparece.
8. **A un gesto de…** Se calcula en cada carga y se oculta cuando la persona avisó.
9. **Inscribirme** confirma y suma uno al cupo (23 a 24 de 30), como en la especificación 11.

## 4. Textos exactos

| Clave | Texto |
|---|---|
| `M2.saludo` | Hola, {nombre} |
| `M2.etapa` | Vas en la etapa «{etapa}» |
| `G.intens.leyenda` | Celebraciones |
| `G.intens.completo` / `.discreto` / `.oculto` | Completo / Discreto / Oculto |
| `G.primera.titulo` | ¿Cómo prefieres que celebremos tus avances? |
| `G.primera.ayuda` | Puedes cambiarlo cuando quieras en «Celebraciones». |
| `G.primera.completo` | Animaciones breves y un resumen cuando subes de nivel. |
| `G.primera.discreto` | Solo texto, sin movimiento. |
| `G.primera.oculto` | Sin puntos ni niveles. Tu avance sigue contando. |
| `G.primera.despues` | Decidir después |
| `G.nivel.eyebrow` | Nivel {n} de 6 |
| `M2.falta` | Te faltan {n} puntos para el nivel {m}. |
| `G.nivel.ultimo` | Llegaste al último nivel. |
| `G.ruta.titulo` | Tu ruta |
| `G.ruta.hecho` / `.aqui` / `.siguiente` / `.meta` | Hecho / Estás aquí / Siguiente / Meta |
| `G.ruta.revision` | En revisión por el equipo |
| `G.ruta.cumplido` | Cumplido {fecha corta} |
| `G.ruta.meta_alcanzada` | Alcanzado |
| `G.ruta.meta_falta` | A {n} puntos |
| `M2.siguiente` | Tu próximo paso |
| `G.paso.vence` | Vence el {fecha} · cerrar este compromiso da +{pts} puntos. |
| `G.paso.vence_oculto` | Vence el {fecha}. |
| `M3.avisar` | Avisar al equipo que lo terminé |
| `G.paso.avisado` | Aviso enviado |
| `M3.avisar_ok` | Listo. El equipo revisará y marcará tu compromiso. |
| `M2.vacio_paso` | Todo al día por ahora. El equipo te propondrá un nuevo paso en tu próxima sesión. (se muestra en dos líneas: título y cuerpo) |
| `G.casi` | Estás a un gesto de dos logros: cumplir «{compromiso}» a tiempo te lleva al nivel {n} y te da la insignia {insignia}. |
| `G.enfoque` | Tu enfoque: {mision} · cambiar |
| `G.hallazgo.titulo` | Lo que cambió desde tu primer diagnóstico |
| `G.hallazgo.frase` | Tu mayor avance está en {dimension}. {dimension_baja} es hoy tu dimensión con más espacio para crecer: {n} de 100. |
| `G.hallazgo.nota` | Barra de arriba: diagnóstico del {fecha1}. Barra de abajo: diagnóstico del {fecha2}. Fuente: tus diagnósticos. |
| `G.pend.titulo` | Mis pendientes |
| `G.pend.avisado` | Avisaste al equipo. Está en revisión. |
| `G.pend.cumplido` | Cumplido el {fecha}, a tiempo |
| `M3.vencido` | Venció el {fecha}. Habla con el equipo para reprogramarlo. |
| `GAM.cierre_demo` | Cumpliste «{compromiso}»: +25 puntos, nivel 4 e insignia Cumplidor. |
| `G.hito.titulo` | Nivel {n}: {nombre} |
| `GAM.nivel.4` | Impulsor: tu constancia se nota. |
| `GAM.insignia_nueva` | Nueva insignia: {nombre} |
| `GAM.insignia.CUMPLIDOR` | Cumplidor: cinco compromisos cumplidos a tiempo. (en pantalla se divide sin cambiar palabras: «Nueva insignia: Cumplidor» y «Cinco compromisos cumplidos a tiempo.») |
| `G.hito.resumen.aria` | Resumen de tu nivel {n} |
| `G.hito.resumen.puntadas` | {n} puntadas nuevas en el nivel {m} |
| `G.hito.resumen.compromisos` | {n} compromisos cumplidos a tiempo |
| `G.hito.resumen.dimension` | {dimension} subió de {a} a {b} en tu último diagnóstico |
| `G.hito.ver` / `GLOBAL.cerrar` | Ver mis logros / Cerrar |
| `G.oculto.cumplido` | Compromiso marcado como cumplido. |
| `GAM.sin_puntos_repetidos` | Este logro ya estaba registrado. No se suman puntos dos veces. |
| `ERR.red` | No hay conexión. Tus cambios no se han guardado; reintenta cuando vuelva. |
| `G.vacio.hilo` | Tu hilo empieza aquí / La primera puntada llega al completar tu ficha. |

## 5. Estados

| Estado | Qué se muestra |
|---|---|
| Vacío | Carrete de hilo con el extremo suelto, título `G.vacio.hilo` (dos líneas) |
| Cargando | Esqueleto: dos líneas punteadas que avanzan (el «hilo» que se teje) y bloques `esq`; se muestra si la carga pasa de 400 ms |
| Error | Banda `ERR.red` con «Reintentar» |
| Éxito | Todo lo anterior |

Cada estado se ve en el mockup con `?estado=vacio|cargando|error|exito`; tema con `?tema=oscuro`; ancho de 390 px con la ventana estrecha.

## 6. Atajos, teclado y accesibilidad

- Todo control se alcanza con Tab en orden visual; foco de 3 px (`--foco`) con separación de 2 px; objetivos ≥ 44 px (RNF-05).
- El control «Celebraciones» es un grupo de tres opciones de radio: flechas izquierda y derecha cambian la opción; el cambio se anuncia en una línea de estado.
- **Esc** cierra la tarjeta de hito; ningún atajo obliga a usar el ratón.
- Cada celebración se anuncia **una sola vez** en una región `role="status"` con `aria-live="polite"`.
- Ninguna información va solo por color: forma, trama, icono y texto (`01` §2).
- Ninguna animación dura más de 600 ms por tramo ni más de 2,4 s por escena; sin destellos (WCAG 2.3.1).
- Las estaciones son una lista ordenada con `aria-current="step"` en «Estás aquí»; el hilo es decorativo (`aria-hidden`).
- Las barras del hallazgo tienen `role="img"` con `aria-label` «{dimensión}: de {a} a {b}» y el mismo dato en texto.

## 7. Costo en horas y de dónde sale

| Elemento | Δ h | Origen del tiempo |
|---|---:|---|
| E-02, E-06, E-12 (nivel, «a un gesto», estados) | 0,30 | Colchón de A (`01` §10) |
| E-05 (tarjeta de hito) | 0,35 (0,15 simplificada) | Colchón de A; la consulta del resumen 0,15 h la hace quien tenga espacio |
| E-07 (intensidad y pregunta) | 0,40 (0 con dos valores) | Estándar; compuerta G-G1 |
| E-08 (hilo curvo) | 0,25 en B sobre T-47a; 1,00 en A | T-47a (B) o lista de espera |
| E-10 (hallazgo) | 0,40 | Estándar |

## 8. Criterio de aceptación

1. Con Marcela: 430 puntos, nivel 3 Constructor, «Te faltan 20 puntos para el nivel 4.»
2. «Simular la escena» deja 455 puntos, nivel 4 Impulsor, insignia Cumplidor, la estación «Actualizar precios» hecha y «Taller de finanzas básicas» como «Estás aquí», **en una sola escena** de ≈ 2,2 s.
3. En Discreto, Oculto y con movimiento reducido el estado final es el mismo (en Oculto, sin cifras) y no queda ninguna animación en curso.
4. A 390 px la ruta es vertical, sin desplazamiento horizontal.
5. axe-core 0 violaciones; Lighthouse accesibilidad 100.
