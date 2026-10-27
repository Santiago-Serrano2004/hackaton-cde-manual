# Progreso del manual
Marca cada fase al terminarla. Si la sesión se corta, la siguiente retoma desde la primera sin marcar.

- [x] F1 Requisitos y trazabilidad (`01_requisitos.md`)
- [x] F2 Reto, usuarios y alcance priorizado (`02_alcance_mvp.md`)
- [x] F3 Stack y decisiones técnicas (`03_stack.md`)
- [x] F4 Modelo de datos y datos de demo (`04_datos.md`)
- [x] F5 Arquitectura, seguridad y calidad ISO 25010 (`05_arquitectura.md`)
- [x] F6 UX y módulo de gamificación (`06_ux_gamificacion.md`)
- [x] F7 Plan de construcción hora a hora (`07_plan_construccion.md`)
- [x] F8 Pruebas y checklists (`08_pruebas_checklists.md`)
- [x] F9 Negocio, diferenciación y pitch (`09_negocio_pitch.md`)
- [x] F10 Preguntas para el CDE (`10_preguntas_cde.md`)
- [x] F11 Auditoría final y `INDEX.md`

## Notas / diagnósticos
- 2026-10-26 (sesión de redacción): F1–F11 completas. La búsqueda web funcionó con resultados de terceros; el acceso directo a sitios oficiales estuvo bloqueado (HTTP 403 del proxy), por lo que todas las versiones y afirmaciones técnicas quedan `[NO VERIFICADO]` contra la fuente primaria. Lista y plan de verificación en `99_preguntas_abiertas.md` (NV-01..NV-25, sección J).
- Pendientes que requieren decisión humana: las 10 decisiones de `INDEX.md` y las preguntas PA-01..PA-26.

## Ronda 2 (ejecutar con PROMPT_2.md)
- [x] F12 Verificación de lo no verificado (`12_verificacion.md`)
- [x] F13 Factores diferenciadores (`13_diferenciadores.md`)
- [x] F14 Backlog de funcionalidades (`14_backlog.md`, `backlog.csv`)
- [x] F15 Frontend: skills, librerías y recursos (`15_frontend_skills_y_ui.md`)
- [x] F16 Sistema de diseño y dirección de arte (`16_sistema_de_diseno.md`)
- [x] F17 Specs autocontenidas por tarea (`tareas/`)
- [x] F18 Pitch y demo v2 (`18_pitch_v2.md`)
- [x] F19 Kit local y auditoría v2 (`19_kit_local.md`)

### Notas Ronda 2
- 2026-10-27 F12: acceso a npm, Packagist, php.net, nodejs.org, react.dev, laravel.com, postgresql.org, w3.org, owasp.org y docs.docker.com OK. Bloqueados: api.github.com y github.com (403, repo no habilitado), iso.org (403), funcionpublica.gov.co. La resolución de dependencias con composer/npm funciona; la descarga de paquetes no. Cambios frente a v1: C-01..C-10 en `99` §K.
- 2026-10-27 F13: 15 candidatos, portafolio 5+1 en niveles con puertas. Costo bruto +6,5 h; ahorros −1,5 h; el balance por persona no cierra si se hace todo (María Paula +3,0 h), por eso Nivel 2 y 3 son condicionales. Contradicciones C-11..C-14 y PA-27 en `99` §K.2. Pendiente de F14: reflejar horas en `07`.
- 2026-10-27 F14: 48 tareas (33 de v1 + 15 nuevas) y 4 filas futuras en `backlog.csv`; 9 rebanadas; 25/25 historias con tarea; 0 dependencias rotas. Horas reconciliadas en `07` §5.1–5.3. Déficit real con el Núcleo: S 2,5 h, J 3,0 h, MP 2,5 h (C-18 en `99` §K.3). Generado con un script del scratchpad (no está en el repo).
- 2026-10-27 F15: 11 repos investigados (★ por deps.dev, último commit por clon superficial); 3 skills auditadas e instalables con commit y hash (frontend-design, composition-patterns, ui-ux-pro-max parcial); `web-design-guidelines` rechazada (descarga instrucciones de `main` en cada uso) y su contenido queda como copia fija. 14 entradas de UI compiladas y montadas (pesos gzip medidos). `npx shadcn` no se ejecutó (rechazado por el clasificador de seguridad como código externo no revisado): queda como tarea previa humana de 1,25 h (`15` §7). C-19..C-21, PA-28, NV-26 en `99` §K.4.
- 2026-10-27 F16: paleta extraída de los XML de los originales (marino/naranja/amarillo/crema; fuentes Arial/Calibri). Dirección recomendada "Hilo de ruta". Contrastes calculados; hallazgo clave: blanco sobre #F47B20 = 2,73:1 (prohibido) y #F47B20 como texto tampoco; se define `--naranja-texto` #B34700. Fuentes Manrope + Source Sans 3 (53,7 KB). C-22 y PA-29 en `99` §K.5; `06` §5 marcado como superado.
- 2026-10-27 F17: 43 specs (todas las Must y Should de `backlog.csv`) + `_PLANTILLA.md` + `_INDEX.md` (orden de ejecución, niveles de dependencia, calendario nominal). Medición real de `pg_trgm` en PostgreSQL 16.15 local (umbrales de duplicados y de búsqueda; `12` §2.5). Hallazgo: el calendario nominal del Núcleo termina ≈ 1,5–2 h después del FF (PA-30 en `99` §K.6, con 4 opciones y recomendación). Specs generadas con un script del scratchpad (no está en el repo). No se escribió código de la aplicación.
- 2026-10-27 F18: guion de 300 s (suma verificada), demo de 120 s segundo a segundo con plan B por paso, tres versiones A/B/C con regla de decisión a las 7:30, banco de 55 preguntas, argumentos para los 2 jurados de negocio, ensayos R0–R3. Ajuste de coherencia: Marcela Rojas con 435 puntos en el seeder (T-30) y +25 por compromiso (corregido en `16`, T-47). C-23..C-25 y Q-26..Q-29 en `99` §K.7 y `10`.
- 2026-10-27 F19: kit local con 5 subagentes (`kit/agentes/`), skills auditadas con commit y hash (incl. `verification-before-completion`), Laravel Boost 2.10.3 auditado (tinker desactivado, consultas de docs salen a boost.laravel.com), Playwright MCP opcional fijado en 0.0.83; rechazados Context7, server-postgres/github (deprecated), inspector (postinstall). Auditoría: 43/43 specs, 35/35 requisitos Must con tarea Must, 0 dependencias rotas; contradicciones anotadas con «R2». `INDEX.md` y `PROYECTO_CLAUDE.md` actualizados. **Hallazgo central pendiente de decisión humana: el Núcleo no cabe antes del FF (PA-30).**

## Cierre de la Ronda 2
Todas las fases F12–F19 completas. Pendiente humano: las 18 decisiones de `INDEX.md`, verificación manual de lo `[NO VERIFICADO]` restante (`19` §2.5) y la prueba previa de instalación (`12` y `15` §7).

## Ronda 3 (ejecutar con PROMPT_3.md)
- [x] F20 Plan que cabe (`20_plan_que_cabe.md`)
- [x] F21 Contenido de formación y microcopy (`21_contenido_formacion.md`, `21_microcopy.md`, `21_catalogos.csv`, `21_casos_demo.md`)
- [x] F22 Auditoría adversarial con cinco jurados simulados (`22_auditoria_adversarial.md`)
- [x] F23 Contingencias y simulacro (`23_contingencias_y_simulacro.md`)
- [ ] F24 Cierre e INDEX

### Notas Ronda 3
- 2026-10-27 F20: dos variantes que caben. A: 9,5 / 10,25 / 9,25 h (S / J / MP), colchón 3,25 h de equipo; B: 10,5 / 10,25 / 10,75 h con 10 compuertas (G-01..G-10) que la degradan a A. Simulación pareada de 20 000 corridas por sobrecosto medio (supuestos en `20` §9.1): con 20 % de sobrecosto, plan R2 ≈ 27,8, A ≈ 37,0, B ≈ 37,6 de 60; B ≥ A en promedio de 0 % a 40 % de sobrecosto. **Hallazgo:** el sobrecosto domina (≈ −2 a −2,5 pts por +10 %), no la variante; A solo cabe sin cortes con sobrecosto ≤ ≈ 13 %. PA-30 con recomendación R3 lista, **no aplicada** (ratifica T-01); `07`, `14`, `tareas/_INDEX.md` y las 43 specs ampliadas sin tocar las horas v2; `backlog.csv` con columnas `horas_A`, `horas_B`, `variante_R3`, `compuerta_R3`, `nota_R3`. Contradicciones R3: C-26..C-37 y PA-31..PA-33 en `99` §K.9. Trabajo previo al 28 con clasificación Verde/Amarillo/Rojo (`20` §4): +2,5 h de trabajo previo (J 1,0 · MP 1,25 · S 0,25) mueven 1,75 h fuera de la ventana. La simulación se hizo con un script del scratchpad (no está en el repo).
- 2026-10-27 F21: 7 microlecciones (L1–L7) con texto, misión, desbloqueo y 3–4 preguntas con retroalimentación; microcopy de ≈ 280 cadenas con clave por pantalla, reglas de tono e inclusión; `21_catalogos.csv` (78 filas, 14 catálogos); 7 empresas sintéticas con historial. **Límite declarado:** ninguna tarea construye cuestionarios, así que las preguntas son guion de taller y no suman puntos (se prohibió agregar funciones). Datos factuales (matrícula mercantil, RUT) con fuente secundaria y fecha; los sitios oficiales respondieron 503/404 → NV-27, NV-28. Contradicciones C-38..C-41, PA-34, PA-35 en `99` §K.10. Marcela arranca con 430 puntos para que el cruce al nivel 4 y la insignia *Cumplidor* coincidan.
- 2026-10-27 F22: cinco jurados independientes (tres técnicos, dos de negocio): 50 debilidades con evidencia, 5 preguntas incómodas, puntaje simulado 60,8/100 (Funcionalidad 36,7 · Diferenciador 9,2 · Negocio 8,5 · Equipo 6,4). **Hallazgos mayores:** (1) las pausas de `07` §8 no estaban descontadas de las 10,75 h (sobrecosto implícito ≈ 12 %; Funcionalidad esperada ≈ 34, PA-37); (2) varias evidencias ISO y frases del pitch afirmaban cosas que ninguna tarea construye (QR rotativo, «Simular tiempo», latencia en pantalla, catálogos/retos sin código, deshacer en A, «calidad de datos se mejora sola»); (3) el guion del pitch no era cronometrable (solo esquemas): ahora hay guion hablado de 379 palabras, 175 s a 130 ppm. Correcciones R3 en `05`, `07`, `08`, `09`, `18`, `20`, `tareas/`; contradicciones C-42..C-49, RK-1..RK-8, PA-36, PA-37 en `99` §K.11.
- 2026-10-27 F23: 15 contingencias (F1–F15) con detección, acción, responsable, tiempo máximo y plan B, incluidas las 8 pedidas; reglas de escalamiento; simulacro de 90 min con 7 bloques y rúbrica de 28 puntos; lista de las 2 horas finales con horas; lista de impresos y archivos sin conexión. **Hallazgo:** un bloque continuo de 90 min en la ventana de construcción cuesta 3,4 a 7,6 puntos de Funcionalidad esperada (simulación de `20` §9): se reparte en receso (45 min), T-91 y 8:30–8:58 del día 2, con 0 h de ventana.
