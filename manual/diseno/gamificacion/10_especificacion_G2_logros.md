# 10 · Especificación G2: Logros: nivel, insignias, misiones y El hilo

**Objetivo.** Mostrar el progreso por hechos reales del acompañamiento sin presionar: la persona ve qué logró, qué le falta y controla cuánto se muestra. Sustituye el contenido de `10_especificacion_12_recompensas.md`.
**Entradas.** `prototipo/logros.html`, `01_direccion_y_mecanicas.md`, `21_contenido_formacion.md` §2–§3, `21_microcopy.md` §9, `21_casos_demo.md` §3.
**Pantallas del manual.** M7 · **Roles.** emprendedor
**Tarea(s).** T-43 (retos, niveles, insignias), T-44 (M7), T-47 (animaciones; lista de espera)
**Requisitos.** RF-17, RF-18, RD-01, RD-03, RD-05, RD-06, RD-11, RD-12 · **Criterio de evaluación que protege.** Funcionalidad 60 · Diferenciador 15 · **ISO/IEC 25010.** Capacidad de interacción, Adecuación funcional
**Decisiones y contradicciones relacionadas.** DEC-G-02, DEC-G-06, DEC-G-08; CON-G-04, CON-G-07; PD-07 de diseño (insignias con figuras) (ver `99_decisiones.md`).
**Marca.** Todo lo que no esté en `21_microcopy.md`, `21_contenido_formacion.md` o `21_casos_demo.md` es `PROPUESTA`; las claves nuevas empiezan por `G.`.

## 1. Componentes (de arriba abajo)

| # | Componente | Qué es y cómo se comporta | Elemento |
|---|---|---|---|
| 1 | Título y subtítulo | «Mis logros» y la frase del hilo | — |
| 2 | **Celebraciones** | Igual que en Mi ruta | E-07 |
| 3 | Tarjeta de nivel | Igual que en Mi ruta | E-02 |
| 4 | **Insignias** | Tarjetas de 64 px de insignia + nombre + estado + criterio + «Ver ficha» plegable. Estados: **ganada** (fondo amarillo y aro continuo), **en progreso** (fondo de tarjeta y aro parcial por `--g-p`), **bloqueada** (fondo gris, borde discontinuo) | E-03 |
| 5 | Ficha de la insignia | Lista de definiciones: Criterio, Ganada el, Por (hecho que la originó) o «Te falta» | E-03 |
| 6 | Próximamente | Cuatro siluetas en gris de las insignias aplazadas (Cuentas claras, Constante, Mejora visible, Conector) | E-01 |
| 7 | **Misiones** | Tarjetas con pasos verificables. Cada paso: marca (hecho/ahora/falta), texto y puntos. Estado: En curso, Recorrido completo, Próximamente. «Mi enfoque ahora» (radio) en las que están en curso | E-11 |
| 8 | **Tu hilo** | Por nivel, una fila de baldosas de 56 × 60 px (icono + puntos), con una baldosa fantasma para la próxima puntada; leyenda de cinco tipos; línea de detalle al activar una baldosa | E-04 |
| 9 | Detalle como tabla | Panel plegable con la tabla de movimientos (fecha, motivo, tipo, puntos, total) y el total | E-04 |
| 10 | Los seis niveles | Panel plegable con emblema, nombre y mínimo de puntos de cada nivel; el actual resaltado | E-01 |
| 11 | Tabla de posiciones | Tarjeta que explica la opción y enlaza a la vista previa (G5) | E-15 |

## 2. Datos que consume

| Endpoint (prefijo `/api/v1`) | Campos usados |
|---|---|
| `GET /mi/progreso` | `puntos`, `nivel`, `insignias[{codigo,nombre,obtenida,fecha,requisito,progreso{n,de}}]`, `movimientos[{fecha,motivo,puntos,tipo,nivel_al_sumar,total}]` |
| `GET /mi/misiones` (**PROPUESTA**, derivado) | `[{codigo,titulo,estado,pasos[{texto,puntos,estado}]}]` calculado con los hechos ya registrados; no se guarda |
| `GET/PUT /mi/preferencias-gamificacion` (**PROPUESTA**) | `intensidad`, `enfoque` |
| `GET/PUT /retos` (administración) | catálogo de retos y puntos |

Errores comunes: 401 sin sesión → `ERR.401`; 403 → `ERR.403`; 422 → `ERR.422`; 429 → `ERR.429`; 500 → `ERR.500`; sin red → `ERR.red`.

## 3. Reglas de interacción

1. **Baldosa.** Es un botón con `aria-pressed`; al activarla (clic, Enter o Espacio) la línea de detalle dice «{fecha} · {motivo} · +{puntos} puntos · {tipo} · total {n}». La baldosa fantasma dice «Próxima puntada: «{compromiso}», vence el {fecha}. Si lo cumples a tiempo, suma 25 puntos.»
2. **Nivel de cada baldosa.** Es el nivel que la persona tenía **al sumarla** (la baldosa que cruza un umbral pertenece al nivel nuevo). Con Marcela: Semilla 2, Brote 6, Constructor 5; tras la escena, Impulsor 1.
3. **Insignia en progreso.** Muestra «En progreso · llevas 4 de 5» y el arco al 80 %; «Te falta» dice cuántos hechos y cuál pendiente puede cerrarlo.
4. **Insignias aplazadas.** Se muestran como siluetas en «Próximamente»; no son interactivas.
5. **Misiones.** Una misión completa no suma puntos (RG-01). «Mi enfoque ahora» se guarda y destaca la tarjeta; solo una a la vez. La misión «Pitch listo» es «Próximamente» (`21_contenido_formacion.md` C-40).
6. **Intensidad.** *Oculto* oculta nivel, insignias, misiones, hilo, niveles y posiciones (`data-gam`).
7. **Tabla de detalle.** Es equivalente al hilo y se conserva para lector de pantalla y auditoría.

## 4. Textos exactos

| Clave | Texto |
|---|---|
| `M7.titulo` | Mis logros |
| `G.logros.sub` | Cada hecho verificado del acompañamiento deja una puntada en tu hilo. |
| `G.ins.titulo` | Insignias |
| `G.ins.ganada` | Ganada |
| `G.ins.progreso` | En progreso · llevas {n} de {de} |
| `G.ins.ver_ficha` | Ver ficha |
| `G.ins.criterio` / `.ganada_el` / `.por` / `.falta` | Criterio / Ganada el / Por / Te falta |
| `G.ins.falta_texto` | {n} compromiso a tiempo. «{compromiso}» vence el {fecha}. |
| `M7.proximamente` | Próximamente |
| `M7.insignias_vacio` | Aún no tienes insignias. La primera llega al completar tu ficha. (en pantalla: título «Aún no tienes insignias» y cuerpo «La primera llega al completar tu ficha.»; CON-G-07) |
| `GAM.insignia.PRIMER_PASO` | Primer paso: completaste tu ficha básica. (en la tarjeta: nombre «Primer paso» y criterio «Completar tu ficha básica») |
| `GAM.insignia.APRENDIZ` | Aprendiz: tres capacitaciones completadas. (en la tarjeta: nombre «Aprendiz» y criterio «Asistir a 3 capacitaciones») |
| `GAM.insignia.CUMPLIDOR` | Cumplidor: cinco compromisos cumplidos a tiempo. (en la tarjeta: nombre «Cumplidor» y criterio «Cumplir 5 compromisos a tiempo») |
| `M7.misiones` | Misiones |
| `G.mis.ayuda` | Elige en cuál quieres enfocarte. Los puntos salen de los hechos de cada paso; la misión no suma puntos extra. |
| `G.mis.enfoque` | Mi enfoque ahora |
| `G.mis.completa` | Recorrido completo |
| `G.mis.encurso` | En curso |
| `G.mis.llevas` | {paso}: llevas {n} de {de} |
| `G.mis.prox` | Pitch listo y otras misiones quedan fuera del alcance de esta versión. |
| `G.mis.leccion` | Ver la lección «Ordena tus cuentas» |
| `G.hilo.titulo` | Tu hilo |
| `G.hilo.ayuda` | Cada baldosa es un hecho verificado. Toca una para ver el detalle. |
| `G.hilo.detalle_vacio` | Toca una baldosa para ver qué fue. |
| `G.hilo.cap` | Nivel {n} · {nombre} · {k} puntada(s) |
| `G.hilo.tipos` | Ficha · Diagnóstico · Asistencia · Cita · Compromiso a tiempo |
| `G.hilo.tabla` | Ver el detalle de puntos como tabla |
| `G.hilo.total` | Total: {n} movimientos, {pts} puntos |
| `G.niveles.titulo` | Los seis niveles |
| `G.niveles.desde` | Desde {n} puntos · tu nivel |
| `G.pos.titulo` | Tabla de posiciones |
| `G.pos.texto` | Está desactivada. Si quieres compararte con tu cohorte, puedes activarla: solo se muestran las 5 primeras personas con alias y tu posición, nunca la última. |
| `G.pos.ver` | Ver cómo se vería |

## 5. Estados

| Estado | Qué se muestra |
|---|---|
| Vacío | Carrete de hilo, «Aún no tienes insignias», «La primera llega al completar tu ficha.» |
| Cargando | Esqueleto de hilo |
| Error | `ERR.red` con «Reintentar» |
| Éxito | Lo descrito; tras la escena: Cumplidor ganada, nivel 4, «Compromisos al día» en «Recorrido completo», 14 baldosas |

Cada estado se ve en el mockup con `?estado=vacio|cargando|error|exito`; tema con `?tema=oscuro`; ancho de 390 px con la ventana estrecha.

## 6. Atajos, teclado y accesibilidad

- Todo control se alcanza con Tab en orden visual; foco de 3 px (`--foco`) con separación de 2 px; objetivos ≥ 44 px (RNF-05).
- El control «Celebraciones» es un grupo de tres opciones de radio: flechas izquierda y derecha cambian la opción; el cambio se anuncia en una línea de estado.
- **Esc** cierra la tarjeta de hito; ningún atajo obliga a usar el ratón.
- Cada celebración se anuncia **una sola vez** en una región `role="status"` con `aria-live="polite"`.
- Ninguna información va solo por color: forma, trama, icono y texto (`01` §2).
- Ninguna animación dura más de 600 ms por tramo ni más de 2,4 s por escena; sin destellos (WCAG 2.3.1).
- Cada baldosa tiene `aria-label` completo («{fecha} · {motivo} · {puntos} puntos · {tipo}»). Cada insignia es un `article` con `aria-labelledby`; su arte lleva `role="img"` y texto alternativo con el estado.
- Los paneles plegables usan `details`/`summary` nativos.

## 7. Costo en horas y de dónde sale

| Elemento | Δ h | Origen |
|---|---:|---|
| E-01 (sprite) | 0,25 | Colchón de A |
| E-03 (insignias con tres estados) | 0,25 | Colchón de A |
| E-04 (hilo y tabla) | 0,35 | Colchón de A |
| E-11 (misiones y enfoque) | 0,50 (0,25 simplificada) | Estándar |
| E-15 (posiciones) | 0,75 | Fuera de A y B |

## 8. Criterio de aceptación

1. El historial suma **430** puntos con 13 baldosas y las cifras de `21_casos_demo.md` §3; tras la escena, **455** con 14.
2. Cumplidor aparece «En progreso · llevas 4 de 5» y, tras la escena, «Ganada».
3. Cada insignia tiene texto alternativo con su estado; los tres estados se distinguen sin color.
4. Con «Oculto» desaparecen puntos, niveles, insignias, misiones y el hilo.
5. A 390 px las insignias y las misiones van en una columna, sin desplazamiento horizontal.
