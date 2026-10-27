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
- [ ] F17 Specs autocontenidas por tarea (`tareas/`)
- [ ] F18 Pitch y demo v2 (`18_pitch_v2.md`)
- [ ] F19 Kit local y auditoría v2 (`19_kit_local.md`)

### Notas Ronda 2
- 2026-10-27 F12: acceso a npm, Packagist, php.net, nodejs.org, react.dev, laravel.com, postgresql.org, w3.org, owasp.org y docs.docker.com OK. Bloqueados: api.github.com y github.com (403, repo no habilitado), iso.org (403), funcionpublica.gov.co. La resolución de dependencias con composer/npm funciona; la descarga de paquetes no. Cambios frente a v1: C-01..C-10 en `99` §K.
- 2026-10-27 F13: 15 candidatos, portafolio 5+1 en niveles con puertas. Costo bruto +6,5 h; ahorros −1,5 h; el balance por persona no cierra si se hace todo (María Paula +3,0 h), por eso Nivel 2 y 3 son condicionales. Contradicciones C-11..C-14 y PA-27 en `99` §K.2. Pendiente de F14: reflejar horas en `07`.
- 2026-10-27 F14: 48 tareas (33 de v1 + 15 nuevas) y 4 filas futuras en `backlog.csv`; 9 rebanadas; 25/25 historias con tarea; 0 dependencias rotas. Horas reconciliadas en `07` §5.1–5.3. Déficit real con el Núcleo: S 2,5 h, J 3,0 h, MP 2,5 h (C-18 en `99` §K.3). Generado con un script del scratchpad (no está en el repo).
- 2026-10-27 F15: 11 repos investigados (★ por deps.dev, último commit por clon superficial); 3 skills auditadas e instalables con commit y hash (frontend-design, composition-patterns, ui-ux-pro-max parcial); `web-design-guidelines` rechazada (descarga instrucciones de `main` en cada uso) y su contenido queda como copia fija. 14 entradas de UI compiladas y montadas (pesos gzip medidos). `npx shadcn` no se ejecutó (rechazado por el clasificador de seguridad como código externo no revisado): queda como tarea previa humana de 1,25 h (`15` §7). C-19..C-21, PA-28, NV-26 en `99` §K.4.
- 2026-10-27 F16: paleta extraída de los XML de los originales (marino/naranja/amarillo/crema; fuentes Arial/Calibri). Dirección recomendada "Hilo de ruta". Contrastes calculados; hallazgo clave: blanco sobre #F47B20 = 2,73:1 (prohibido) y #F47B20 como texto tampoco; se define `--naranja-texto` #B34700. Fuentes Manrope + Source Sans 3 (53,7 KB). C-22 y PA-29 en `99` §K.5; `06` §5 marcado como superado.
