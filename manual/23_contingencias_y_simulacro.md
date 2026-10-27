# 23 · Contingencias y simulacro (Ronda 3, F23)

**Objetivo.** Dejar decidido, antes de que ocurra, qué se hace cuando algo falla (árbol de decisión con responsable y tiempo máximo), cómo se ensaya todo el pitch en un simulacro de 90 minutos sin quitar horas a la construcción, qué se verifica en las dos horas finales y qué debe estar impreso o guardado sin conexión.

**Entradas.** `03_stack.md` §8, `07_plan_construccion.md` §7–§8, `08_pruebas_checklists.md` §5.5–§7, `18_pitch_v2.md` §3, §5, §11–§13, `20_plan_que_cabe.md`, `22_auditoria_adversarial.md` §7.4.

**Reglas.** Todo es `PROPUESTA`. Cada tiempo máximo es el plazo tras el cual se deja de intentar arreglar y se pasa al plan B; el plazo corre desde que alguien dice «falla» en el canal del equipo. Sin horas nuevas en la ventana de construcción (declaración de costos en §6).

## 1. Principios

1. **Decidir antes, no durante.** Quien detecta el fallo lo dice en voz alta y arranca el cronómetro del plazo; no se discute si pasar al plan B cuando el plazo se cumple.
2. **Una sola persona por fallo.** El responsable decide; las otras dos ayudan solo si se lo piden.
3. **El producto demostrable manda.** Durante la demo en vivo, el plazo es de segundos: se cambia a la columna siguiente de `18` §3 (versión A/B/C) o al plan B de la fila de `18` §5.
4. **Nada de *force push*.** Se recupera con clones y respaldos (`07` §8).
5. **Registrar.** Cada fallo con su hora y resolución se anota en `docs/INCIDENTES.md` (una línea).

## 2. Árbol de decisión (resumen)

```
¿Falla algo?
├─ ¿Ocurre DURANTE el pitch o la demo ante el jurado?
│   ├─ Sí → cambiar de inmediato: fila "plan B" de 18 §5 → versión siguiente de 18 §3 → demo.mp4 (≤ 10 s)
│   └─ No → seguir
├─ ¿Afecta al servidor público?  → F1 (15 min) → servidor local en el portátil de demostración
├─ ¿Afecta a la red?             → F2 (10 min) → punto de acceso del celular → modo sin conexión
├─ ¿Afecta a la base de datos?   → F3 (10 min) → migrate:fresh --seed → dump.sql
├─ ¿Afecta al correo?            → F4 (5 min)  → Mailpit local → captura D3
├─ ¿Afecta a la proyección?      → F5 (3 min)  → segundo portátil / adaptador / mostrar en el portátil
├─ ¿Un portátil no enciende?     → F6 (2 min)  → portátil de respaldo con las mismas imágenes
├─ ¿Se perdió código o rama?     → F7 (10 min) → clon más reciente + git bundle
└─ ¿Conflicto de fusión?         → F8 (15 min en horario; 0 min durante el sueño) → abortar y resolver a las 6:00
```

## 3. Tabla de contingencias

Responsable: S = Santiago, J = Julián, MP = María Paula. «T máx.» = tiempo máximo antes de pasar al plan B.

| ID | Fallo | Cómo se detecta | Acción inmediata | Resp. | T máx. | Plan B | Prevención / evidencia previa |
|---|---|---|---|---|---|---|---|
| F1 | Servidor del patrocinador caído o inaccesible | `/health` no responde; la URL no abre; Coolify sin respuesta | 1) Reintentar desde otra red (punto de acceso del celular). 2) Reiniciar el contenedor desde Coolify o por SSH. 3) Si no responde, el servidor pasa a ser «solo respaldo» | J | 15 min en construcción; **0 s en escena** | Servidor local en el portátil de demostración (`docker compose up` con datos sembrados, `localhost`); pestañas ya abiertas; en construcción todos trabajan en local de todos modos | `docker save` de las imágenes (`03` §8); P-01 (`20` §4); PA-10 resuelto o no |
| F2 | Red del laboratorio caída o filtrada | No cargan páginas externas; fallan `git push`, `composer`, `npm` | 1) Activar el punto de acceso del celular. 2) Seguir en local: `commit` sin `push`. 3) Empujar cuando vuelva | J | 10 min | Todo funciona sin internet: fuentes y librerías empaquetadas (`03` §8), Mailpit local; la demo no depende de la red | `vendor/` y `node_modules/` ya instalados en las tres máquinas; caché de paquetes en el USB |
| F3 | Base de datos corrupta, migración rota o seeder que falla | `DatosDemoTest` rojo; error SQL al abrir una pantalla; totales de `04` §7.1 no cuadran | 1) `php artisan migrate:fresh --seed` (< 3 min). 2) Si falla, restaurar `dump.sql` del último respaldo (`pg_dump` horario). 3) Si falla el respaldo, restaurar el de la etiqueta `ff-1` | J (S de apoyo) | 10 min | `demo.mp4` y capturas D1–D7 (`18` §5); en escena, pasar a la versión de demo siguiente | Respaldo horario (P-03); `ff-1` con `pg_dump`; `demo:reset` probado (T-31) |
| F4 | Correo: Mailpit/SMTP no entrega o el recordatorio queda `fallido` | La bandeja «Notificaciones» muestra `fallido`; Mailpit vacío | 1) Reiniciar el *worker* y el planificador. 2) Verificar que el job reintenta (3 veces). 3) Si no sale, mostrar el estado «programado» en la bandeja | J | 5 min | Captura `D3.png` y la bandeja «Notificaciones» (los recordatorios creados al agendar) | `RecordatorioTest` verde; Mailpit vacío antes de la demo (`08` §5.6) |
| F5 | Proyector o cable: no hay imagen, resolución errónea | Sin señal al conectar (se prueba a las 8:30 y 8:55) | 1) Probar otro puerto y el adaptador USB-C/HDMI. 2) Duplicar pantalla a 1920×1080 o 1280×720. 3) Pasar a otro portátil | MP | 3 min | Presentar desde el segundo portátil; si no hay proyección, mostrar el producto en el portátil con el jurado alrededor y el deck en PDF impreso | Adaptadores y cables en la lista de §7; diseño probado a 1280×720 (RK-7) |
| F6 | Portátil muerto, sin batería o que no arranca | No enciende; el navegador se congela | 1) Cargador y enchufe distinto. 2) Pasar al portátil de respaldo (el de S si falla el de J) | Quien lo use | 2 min en escena; 5 min en construcción | Portátil de respaldo con las imágenes y `docker compose up` ya corrido; la demo es la misma, quien maneja cambia | Dos portátiles con el producto local en marcha antes de entrar; cargador por persona |
| F7 | Pérdida de la rama, repositorio inaccesible o *push* forzado por error | `git log` sin los commits; GitHub no responde | 1) Detener a todos. 2) Identificar el clon con el commit más reciente (`git log -1` en las tres máquinas). 3) Empujar desde ese clon a una rama nueva o a un remoto nuevo | S | 10 min | `git bundle` en el USB (§7) | `main` protegida; revisión cruzada; clon completo en cada máquina; bundle cada vez que se crea una etiqueta |
| F8 | Conflicto de fusión de madrugada | `git pull`/`merge` muestra conflictos | 1) **Abortar** (`git merge --abort`); no resolver cansado. 2) Dejar `main` en `ff-1`. 3) Resolver a las 6:00 con J como único fusionador | Quien lo encuentra → J | 15 min en horario de trabajo; **0 min durante el sueño (02:00–06:00)** | Entregar `ff-1` si a las 8:45 el conflicto sigue sin resolver | Solo J fusiona en `integracion` (`07` §7); FF a la 1:30; nadie trabaja entre 2:00 y 6:00 |
| F9 | CI en rojo sin causa clara | La integración continua falla en un commit que antes pasaba | 1) Leer el primer error. 2) Si no es obvio en 10 min, revertir el último commit | Autor del commit | 15 min | Revertir (`git revert`) y volver a intentar; nunca saltarse ni desactivar una prueba | CI corto (pint, pest, eslint, tsc, build) |
| F10 | Inicio de sesión bloqueado por el límite de intentos (429) en escena | El 6.º intento devuelve 429 (`08` §5.1) | 1) No reintentar. 2) Usar la sesión ya abierta de otro rol | Quien maneja | 0 s | Pestañas con sesión abierta antes de entrar (RK-2) | Cuentas en `docs/DEMO.md`; ensayar el ingreso una sola vez |
| F11 | Una persona enferma, sin voz o ausente | — | Reparto alternativo de voces: quien falte cede sus segmentos (MP→J negocio, S→MP ISO) | Las otras dos | Inmediato | Guion hablado de `18` (R3) permite que cualquiera lea cualquier segmento | Los tres ensayan los tres bloques (`22` §6, pregunta 53 de `18`) |
| F12 | Un paso de la demo falla en vivo | Error o pantalla vacía | Cambiar a la versión siguiente (`18` §3) o al plan B de la fila; no volver a intentarlo | Quien maneja; S narra | 0 s | `demo.mp4` abierto en ≤ 10 s | Ensayo R3 (`18` §12) |
| F13 | Corte de energía o de red eléctrica | Se apaga el equipo | Portátiles con batería; regletas; esperar indicación del CDE | Todos | 5 min | Producto local con batería; deck en PDF | Cargar todo a las 8:00 |
| F14 | Un despliegue después del FF rompe la versión estable | `/health` rojo tras el *deploy* | Volver a la etiqueta anterior (`ff-1` o `v1.0-rc`) y redeplegar | J | 10 min | Entregar la etiqueta anterior | Etiquetas `ff-1`, `v1.0-rc`, `v1.0`; ningún despliegue sin dos aprobaciones después de las 8:30 |
| F15 | Certificado o dominio HTTPS inválido en el laboratorio | El navegador bloquea la página | Entrar por la dirección alternativa o por el servidor local | J | 3 min | Servidor local | HTTP local verificado (`03` §8) |

## 4. Reglas de escalamiento

1. **Dos fallos en la misma hora** (por ejemplo, F1 y F3): el plan B de ambos es el servidor local con datos sembrados; los tres se centran en eso hasta que corra.
2. **Tres intentos fallidos** del mismo arreglo: se detiene y se pide ayuda (regla 4 de `07` §8).
3. **A partir de las 8:30 del día 2** ningún arreglo de más de 15 minutos: se entrega la versión estable (`C-47` de `99` §K.11).
4. **Si el plan B también falla**: se presenta con el deck, el video y las capturas, y se dice con honestidad qué es real y qué es simulado (`18` §9).

## 5. Simulacro completo de 90 minutos

### 5.1 Dónde cabe sin romper el plan

Un bloque continuo de 90 minutos tomado de la ventana de construcción cuesta 1,5 h por persona, es decir, todo el colchón de `20` y más. Con la simulación de `20` §9 (mismos supuestos), perder 1,5 h de construcción baja la Funcionalidad esperada de 41,1 a 37,7 (A, sobrecosto 0 %) y de 36,9 a 29,7 (A, 20 %); B baja de 42,9 a 37,8 y de 37,5 a 29,3. **No se recomienda.** Colocación propuesta:

| Parte | Cuándo | Duración | Qué | Costo de ventana |
|---|---|---|---|---|
| 1 · Pitch y preguntas sin producto | 28-oct, receso (13:00–13:45) | 45 min | Bloques B, C y G de §5.2 con el guion hablado de `18` y capturas | 0 h (sale del receso de 2 h; descanso de 1 h 15 min) |
| 2 · Demostración y fallos | 29-oct 00:30–01:30 (T-91, dentro de las 11,75 h) | 45 min de los 60 | Bloques E y F de §5.2 con el producto real (R0 de `18` §12) | 0 h adicionales |
| 3 · Pitch completo con producto | 29-oct 8:30–8:58 | 28 min | R1–R3 de `18` §12 | 0 h adicionales (T-95) |

Si el equipo prefiere un bloque único de 90 min, hacerlo la noche del 27 (esta noche) sin producto, con guion y capturas de la maqueta: no cuesta ventana, pero compite con el sueño (se suma a P-08 de `20` §4).

### 5.2 Guion del simulacro (90 minutos)

Participantes: los tres + **dos personas externas** que hagan de jurado (las mismas que se piden para T-97; PA-33). Si solo hay una, el segundo jurado es quien no habla en ese bloque. Un cronometrista (quien no presenta) con tarjetas de tiempo de `18` §12 (0:40, 2:40, 3:25, 4:15, 4:45).

| Bloque | Min | Qué ocurre | Roles | Material |
|---|---|---|---|---|
| A · Preparación | 0:00–0:10 | Montar el escenario: proyector (o pantalla), portátil de demostración, `demo:reset`, banner «Datos sintéticos», cronómetro físico, Mailpit vacío | J prepara; MP revisa lista T-60 | `08` §5.6 |
| B · Ronda 1: pitch de 5:00 | 0:10–0:25 | Pitch completo con relevos; el jurado no interrumpe. Luego 5 min de preguntas | MP abre; S narra la demo y J la maneja; S ISO; J negocio; MP diferenciador; todos cierran | Guion hablado `18` (R3) |
| C · Ronda 2: preguntas hostiles | 0:25–0:40 | 5 preguntas al azar de `18` §11 (Q26–Q55) y 3 de `22` (las incómodas de cada jurado); cada respuesta ≤ 40 s con una cifra o demostración | Responde quien tenga el tema; el cronometrista mide | `18` §11, `22` §1–§5 |
| D · Pausa | 0:40–0:50 | Descanso y retroalimentación por escrito del jurado (qué entendieron, qué dudaron) | — | — |
| E · Ronda 3: demostración sola | 0:50–1:05 | Demo de 120 s dos veces; la segunda con el plan B: abrir `demo.mp4` en ≤ 10 s | J maneja, S narra, MP en el móvil | `18` §5 |
| F · Fallos inyectados | 1:05–1:20 | El jurado elige 3 de F1–F15 y los provoca: desconectar la red, apagar el servidor de pruebas, desenchufar el HDMI, introducir una contraseña errónea 5 veces. Se mide el tiempo hasta recuperar | Responsable de cada fallo (§3) | §3 |
| G · Autoevaluación | 1:20–1:30 | Llenar la rúbrica de §5.3 entre los tres y el jurado; decidir las 3 correcciones antes del siguiente ensayo | Todos | §5.3 |

### 5.3 Rúbrica de autoevaluación (0 a 2 puntos por criterio; 28 puntos máximo)

Cada criterio se puntúa de 0 (no cumple), 1 (cumple parcialmente), 2 (cumple). Meta: **≥ 22 de 28 y ningún 0 en los criterios marcados (*)**.

| # | Criterio | 0 | 1 | 2 |
|---|---|---|---|---|
| 1* | Tiempo del pitch | > 5:15 | 5:00–5:15 | ≤ 5:00 |
| 2* | Cubre los 9 mínimos del TyC §6 (solución, funcionamiento con recompensas, propuesta de valor, equipo, negocio y sostenibilidad, posicionamiento, diferenciador, valor para la UNAB, crecimiento) | Faltan ≥ 2 | Falta 1 | Todos |
| 3* | Demostración | No termina | Termina con una escena a medias | Termina en ≤ 120 s sin fallos |
| 4* | Plan B | > 30 s | 10–30 s | ≤ 10 s |
| 5 | Participación del equipo | Habla una persona | Hablan dos | Hablan las tres |
| 6* | Honestidad (real frente a simulado) | Afirma algo falso | Omite la declaración | Declara y no exagera |
| 7* | Cifras | Inventa una cifra | Duda al citar | Todas con fuente, medidas o «lo mediremos en el piloto» |
| 8 | Respuestas del jurado | > 60 s o evasivas | 40–60 s | ≤ 40 s con cifra o demostración |
| 9 | Claridad: ¿el jurado repite la propuesta de valor en una frase? | No | Con ayuda | Sin ayuda |
| 10 | Diferenciador: ¿el jurado nombra qué lo distingue? | No | Vago | Concreto |
| 11 | Postura y relevos (sin silencios > 3 s, nadie da la espalda) | Varios fallos | Algunos | Limpio |
| 12 | Fallos inyectados resueltos dentro de su T máx. de §3 | Ninguno | Algunos | Todos |
| 13 | Legibilidad de la pantalla desde el fondo | No se lee | Se lee con esfuerzo | Se lee |
| 14 | Cierre: la petición («piloto de un semestre») es clara | No se menciona | Confusa | Clara |

Resultado: sumar; anotar la fecha, la ronda y las tres correcciones en `docs/ENSAYO_PITCH.md` (T-95).

## 6. Costos (en horas) y de dónde salen

| Concepto | Horas | De dónde sale |
|---|---|---|
| Parte 1 del simulacro (45 min × 3 personas) | 0 h de ventana | Receso de 2 h del 28 (descanso de 1 h 15 min) |
| Parte 2 | 0 h adicionales | T-91 (1,0 h, ya dentro de las 11,75 h) |
| Parte 3 | 0 h adicionales | T-95 (0,75 h) |
| Imprimir y guardar sin conexión (§7) | 0,25 h por persona | P-08 de `20` §4 (noche del 27) |
| Lista de las dos horas finales (§8) | 0 h adicionales | Reorganiza T-93, T-94, T-95 y T-96; no suma tareas |

## 7. Qué debe estar impreso o guardado sin conexión

### 7.1 Impreso (una copia por persona salvo indicación)

1. Guion hablado del pitch (`18`, sección R3) con tarjetas de tiempo (0:40, 2:40, 3:25, 4:15, 4:45).
2. Guion de la demo de 120 s con planes B (`18` §5).
3. Banco de preguntas (`18` §11) con las respuestas del área de cada persona, y las tres preguntas incómodas de `22`.
4. Lista T-60 (`08` §5.6) y tabla de contingencias (§3, una copia compartida).
5. Tablero de seguimiento (`20` §11) y compuertas (`20` §6.3).
6. Cuentas de demostración **sin contraseñas** en papel; las contraseñas, en un papel aparte que guarda J.
7. Teléfonos del equipo y de la persona de contacto del CDE (si el CDE los entrega).
8. Deck en PDF (una copia compartida) por si falla la proyección.

### 7.2 Guardado sin conexión (en al menos dos dispositivos y un USB)

1. `demo.mp4` (3 min) y capturas D1–D7 + las 10 pantallas clave (`08` §7).
2. Deck en PDF y archivo editable.
3. `dump.sql` de la base de demostración y `docker save` de las imágenes (`03` §8).
4. Clon completo del repositorio y `git bundle` de la etiqueta más reciente.
5. `vendor/`, `node_modules/` y caché de `composer`/`npm` para reconstruir sin red.
6. `docs/DEMO.md`, `21_catalogos.csv`, `importacion_demo.csv`, PDFs de `18` y `22`.
7. Este manual en PDF y las respuestas del CDE (`docs/RESPUESTAS_CDE.md`).

### 7.3 Equipos y accesorios

Cargadores y regleta, adaptadores HDMI y USB-C, cable HDMI de repuesto, ratón, control del proyector si lo hay, punto de acceso del celular con datos, USB de respaldo, botella de agua y algo de comer.

## 8. Lista de verificación de las 2 horas finales (29-oct 7:00–9:00)

Responsables: S = Santiago, J = Julián, MP = María Paula. Cada ítem queda marcado con hora.

**7:00–7:30 · Estabilización (J, S)**
- [ ] `main` en `v1.0-rc` desplegado y `git status` limpio en las tres máquinas (J).
- [ ] Triage `P0/P1/P2` terminado; solo `P0` pendiente y con dueño (S).
- [ ] Respaldo restaurado en una base de prueba (J).
- [ ] Prueba de seguridad y accesibilidad rápidas terminadas (S/MP; T-96).

**7:30–8:00 · Lista T-60 (todos; C-48)**
- [ ] `docs/DEMO.md` con las cuentas; los cinco roles ingresan (J).
- [ ] `demo:reset` ejecutado; totales de `04` §7.1 correctos; banner «Datos sintéticos» visible (J).
- [ ] Mailpit vacío; reloj del servidor correcto (J).
- [ ] `demo.mp4` y capturas en dos dispositivos y en la nube (MP).
- [ ] Deck exportado a PDF y abierto en el portátil que presentará (MP).
- [ ] Versión de demo A/B/C decidida y anunciada (J; `18` §3).
- [ ] Cifras entre corchetes leídas del sistema y escritas en el guion: pruebas, milisegundos, puntos de Marcela (S).
- [ ] Modo avión probado en el portátil de demostración (J).

**8:00–8:30 · V2 con el CDE (MP y S presentan, J sostiene el servidor)**
- [ ] Demo de 5 min con el camino dorado; observaciones al `docs/RESPUESTAS_CDE.md` sin cambiar código salvo correcciones triviales.

**8:30–8:45 · Último margen de cambios**
- [ ] Solo cambios de ≤ 15 líneas aprobados por dos personas; ninguno después de las 8:45 (C-47).
- [ ] Prueba de proyección: cable, adaptador, resolución (MP; F5).

**8:45–9:00 · Entrega y ensayo**
- [ ] Etiqueta `v1.0` desplegada; enlace del repositorio y de la herramienta enviados (J).
- [ ] Deck y video entregados como pide la organización (MP).
- [ ] Ensayo R2 (pitch + 5 preguntas) y R3 (demo 120 s con plan B en ≤ 10 s) hechos (`18` §12).
- [ ] Navegador limpio: zoom 110 %, sin notificaciones, sesiones abiertas, sin pestañas personales (MP).
- [ ] Tarjetas de preguntas repartidas; definido quién habla y quién maneja (todos).
- [ ] 9:00–9:15: cierre del desarrollo; sorteo del orden; a las 9:15 empieza el pitch según el orden.

## Criterio de aceptación

1. Los 8 fallos pedidos (servidor, red del laboratorio, base de datos, correo, proyector, portátil, rama, conflicto de las 3 a. m.) tienen acción, responsable y tiempo máximo (§3, F1–F8).
2. El simulacro de 90 minutos tiene guion con roles, material y rúbrica de 28 puntos, y declara dónde cabe y qué costaría (§5).
3. La lista de las 2 horas finales tiene horas y responsables (§8).
4. Lo que debe estar impreso o sin conexión está listado (§7).
