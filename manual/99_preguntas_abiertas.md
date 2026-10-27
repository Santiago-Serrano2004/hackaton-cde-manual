# 99 · Preguntas abiertas y afirmaciones `[NO VERIFICADO]`

Formato: pregunta · por qué bloquea · opciones · recomendación · quién decide. Se actualiza en cada fase.

## A. Preguntas sobre el reto / para el CDE (se priorizan en `10_preguntas_cde.md`)

### PA-01 Hora de fin del "desarrollo continuo" del día 28
- **Por qué bloquea:** define cuántas horas de trabajo y de descanso hay realmente (`07`).
- **Fuentes:** `01_TyC` marca la hora como "[hora no extraída; ver docx original]"; `02_presentacion` la omite.
- **Opciones:** (a) hasta 10 p. m. y regreso 6 a. m.; (b) toda la noche en el laboratorio; (c) lo que diga el CDE.
- **Recomendación:** planear (a) con descanso 11 p. m.–4 a. m. como mínimo en turnos, y confirmar en la sesión del 28 de 8:30.
- **Decide:** CDE (organización); el equipo adapta.

### PA-02 Contradicción 347 + 172 ≠ 569
- **Por qué bloquea:** impide usar esas cifras en el pitch/datos sintéticos sin cuidado.
- **Hecho:** 347 + 172 = 519, no 569 (diferencia 50). **Opciones:** (a) 347 y 172 cuentan empresas por semestre (519 empresas-semestre; 497 únicas implicaría 22 repetidas entre semestres) y 569 cuenta atenciones; (b) 347/172 son atenciones y falta un tercer periodo; (c) error del documento.
- **Recomendación:** no citar 347/172 en la demo; usar 497 únicas y 569 atenciones. Preguntar al CDE.
- **Decide:** CDE.

### PA-03 Canal de recordatorios (correo vs. WhatsApp/SMS)
- **Por qué bloquea:** RF-09 y costo/dependencias.
- **Opciones:** correo (SMTP o servicio transaccional), WhatsApp Business API (costo, aprobación), SMS.
- **Recomendación:** correo en MVP; WhatsApp como visión futura.
- **Decide:** CDE + equipo.

### PA-04 Sistemas existentes del CDE/UNAB (compatibilidad)
- **Por qué bloquea:** ISO-CO exige "convivir con sistemas que ya usan".
- **Opciones:** Google Workspace, Microsoft 365, sistema académico (Banner u otro), hojas de cálculo.
- **Recomendación:** priorizar importación/exportación CSV/XLSX y API REST; integrar calendarios solo si el CDE confirma cuál usa.
- **Decide:** CDE.

### PA-05 Mecanismo de asistencia (lista, QR, enlace)
- **Opciones:** QR por evento escaneado desde el celular del asistente; lista manual; código.
- **Recomendación:** QR + lista manual como respaldo.
- **Decide:** CDE.

### PA-06 Criterio de "tamaño" de empresa
- **Opciones:** número de empleados/activos (Ley 905 de 2004) `[NO VERIFICADO]`; ingresos; autoreporte.
- **Recomendación:** catálogo micro/pequeña/mediana/grande tal como lo usa el CDE en su diagnóstico.
- **Decide:** CDE.

### PA-07 Catálogos: sectores (17), formalización, áreas de intervención, estados de proyecto
- Solo se conocen 5 sectores por nombre. **Recomendación:** pedir el listado oficial; mientras tanto `PROPUESTA` en `04`.
- **Decide:** CDE.

### PA-08 ¿Qué es "intuitivo y divertido" para el CDE y quién usa el módulo de recompensas?
- **Opciones:** solo emprendedores; también estudiantes consultores; también equipo CDE.
- **Recomendación:** emprendedores y estudiantes consultores.
- **Decide:** CDE.

### PA-09 Datos reales vs. sintéticos en la demo
- **Recomendación:** 100 % sintéticos (RNF-14); estructura de importación compatible con las hojas reales. Pedir un ejemplo anonimizado de la hoja actual.
- **Decide:** CDE.

## B. Preguntas del equipo (decisiones internas)

### PA-10 Dónde se despliega (servidor de Javier con Coolify vs. Azure)
- Chat: Julián afirma que el servidor de Javier está disponible con Coolify, pero falta acceso a Cloudflare; Santiago tiene crédito Azure estudiantil. Preferencia, no decisión final.
- **Recomendación:** servidor + Coolify como principal y entorno local con Docker Compose como plan B; confirmar acceso antes del 28.
- **Decide:** Julián con Javier.

### PA-11 Quién hace qué
- El chat no asigna roles explícitamente. **Propuesta** en `07`; confirmar.
- **Decide:** los tres.

### PA-12 Edición de ISO/IEC 25010
- Fuente secundaria (búsqueda web, 26-oct-2026) indica edición 2023-11 con nueve características; los nombres de las nueve provienen del TyC. Nota: algunas páginas de reventa muestran "withdrawn". `[NO VERIFICADO contra iso.org]`.
- **Recomendación:** usar los nombres del TyC.
- **Decide:** equipo.

## C. Afirmaciones técnicas y `[NO VERIFICADO]`

Fecha de consulta de todas: **26-oct-2026**. Herramienta: búsqueda web (resultados de terceros); acceso directo a sitios oficiales bloqueado por el proxy (HTTP 403).

| # | Afirmación | Estado |
|---|---|---|
| NV-01 | Laravel 13 requiere PHP ≥ 8.3, lanzado ~17-mar-2026; correcciones hasta Q3 2027, seguridad hasta Q1 2028 | Fuente oficial (laravel.com/docs/13.x/releases) listada pero contenido leído vía resumen de búsqueda; fecha exacta `[NO VERIFICADO]` |
| NV-02 | React en línea 19.2.x (19.2.7 según versionlog.com, 1-jun-2026) | **Corregido en F12:** react.dev y npm dan 19.3.1 (14-oct-2026). Ver `12_verificacion.md` |
| NV-03 | PostgreSQL: menores de ago-2026 18.6, 17.11, 16.15 (Neon docs); PG 19 anunciado para oct-2026 | `[NO VERIFICADO]` contra postgresql.org |
| NV-04 | Node.js 24 LTS (24.19.0 en 3-ago-2026 según blog de terceros); Node 26 entra en LTS oct-2026 | `[NO VERIFICADO]` contra nodejs.org |
| NV-05 | ISO/IEC 25010:2023, 2.ª edición, nueve características | Parcial (catálogo ISO); nombres de las 9 tomados del TyC |
| NV-06 | OWASP ASVS 5.0 publicado el 30-may-2025; OWASP Top 10 2025 existe (8.ª edición) | Parcial (owasp.org vía búsqueda) |
| NV-07 | Hamari, Koivisto, Sarsa (2014), "Does Gamification Work?", HICSS-47, pp. 3025-3034, DOI 10.1109/HICSS.2014.377 | Verificado por metadatos; texto completo no leído |
| NV-08 | Ley 1581 de 2012 (hábeas data), Decreto 1377 de 2013 compilado en Decreto 1074 de 2015; datos sensibles prohibidos salvo autorización explícita | Parcial; artículos exactos `[NO VERIFICADO]` |

## D. Añadidas en F3

### PA-13 Confirmar stack A (React + Laravel + PostgreSQL)
- Puntaje en `03_stack.md` es `PROPUESTA`. **Recomendación:** A. **Decide:** los tres.

### PA-14 Autenticación: Sanctum token vs. JWT de terceros
- **Por qué bloquea:** primer módulo de la plantilla. **Opciones:** ver `03` §2. **Recomendación:** Sanctum Bearer. **Decide:** Santiago.

### PA-15 ¿Desplegar desde `main` o `develop`?
- **Recomendación:** `main`, con PR. **Decide:** Julián.

### PA-16 ¿Hay internet estable en el laboratorio de Ingeniería Industrial, piso 7?
- Si no lo hay, el plan B local es el principal. **Decide:** CDE/organización (preguntar el 28 a las 8:30).

### NV-09 a NV-12 (adicionales)
| # | Afirmación | Estado |
|---|---|---|
| NV-09 | Sanctum 13.x ofrece tokens con *abilities* | Confirmado por resumen de búsqueda de laravel.com/docs/13.x/sanctum; no se leyó la página completa |
| NV-10 | Compatibilidad con Laravel 13 de spatie/laravel-permission, dompdf, php-open-source-saver/jwt-auth | `[NO VERIFICADO]` |
| NV-11 | Vite 8 existe y exige Node ≥ 20.19 / 22.12; Tailwind 4.3.x; React 19.2.x | Verificado en F12 (Vite 8.3.5, Tailwind 4.3.3); React corregido a 19.3.1 |
| NV-12 | pg_trgm es módulo estándar de PostgreSQL; `similarity()` devuelve 0–1; índices GIN/GiST con `gin_trgm_ops` | Fuentes de terceros (Neon); no contrastado con postgresql.org |

## E. Añadidas en F4

### PA-17 Estructura real del diagnóstico de madurez
- **Por qué bloquea:** RF-05/RF-22; el modelo por dimensiones (0–100) es `PROPUESTA`.
- **Opciones:** (a) adoptar la estructura real del CDE; (b) mantener la propuesta y mapearla luego.
- **Recomendación:** pedir al CDE el instrumento (columnas de la hoja actual). **Decide:** CDE.

### PA-18 Registro de la base de datos y política de tratamiento
- Aspecto legal (Ley 1581 de 2012) a cargo de la UNAB; el sistema solo da las medidas técnicas. `[NO VERIFICADO]` obligaciones exactas.
- **Decide:** UNAB/CDE.

### PA-19 Formato del NIT y manejo de personas naturales sin NIT
- **Recomendación:** NIT opcional; deduplicar por correo y nombre cuando falte. **Decide:** CDE.

## F. Añadidas en F5
| # | Afirmación | Estado |
|---|---|---|
| NV-13 | Laravel 13 soporta cola `database`, `schedule:work`, `lockForUpdate`, cast encriptado y `Pest arch()` | `[NO VERIFICADO]` contra docs oficiales; se asumen mecanismos estables desde versiones anteriores |
| NV-14 | Cabeceras de seguridad recomendadas (CSP, XFO, XCTO, Referrer-Policy) | Práctica general `[NO VERIFICADO]` en OWASP Secure Headers |

## G. Añadidas en F6

### PA-20 Identidad visual (colores, logo, tipografía) del CDE/UNAB
- **Por qué bloquea:** consistencia de marca; la paleta es `PROPUESTA`. **Recomendación:** usar paleta neutra y cambiar tokens si el CDE entrega su manual. **Decide:** CDE.

### PA-21 ¿El CDE ya ofrece capacitaciones con contenido propio (videos/material) que deban enlazarse al módulo?
- **Recomendación:** el MVP no aloja contenido; enlaza eventos reales. **Decide:** CDE.

| # | Afirmación | Estado |
|---|---|---|
| NV-15 | Deterding et al. (2011), MindTrek, pp. 9–15, DOI 10.1145/2181037.2181040; definición de gamificación | Metadatos y definición confirmados por varias páginas (ITU, Waterloo, OpenAlex); texto no leído |
| NV-16 | Sailer y Homner (2020), Educ. Psychol. Rev. 32(1):77–112, DOI 10.1007/s10648-019-09498-w; g = 0,49 / 0,36 / 0,25 | Metadatos y cifras vía resumen de búsqueda (Springer, Augsburg); cifras `[NO VERIFICADO]` en el PDF |
| NV-17 | Ryan y Deci (2000), Am. Psychol. 55(1):68–78, DOI 10.1037/0003-066X.55.1.68; tres necesidades básicas | Metadatos confirmados; contenido no leído → `[NO VERIFICADO]` |
| NV-18 | SUS: promedio ≈ 68 (Sauro, MeasuringU); creado por Brooke; artículo canónico 1996 | Fuente secundaria; año `[NO VERIFICADO]` |
| NV-19 | WCAG 1.4.3: 4,5:1 texto normal, 3:1 texto grande | Fuentes secundarias; `[NO VERIFICADO]` en w3.org |

## H. Añadidas en F7

### PA-22 ¿Se permite llevar un esqueleto técnico preparado antes del 28-oct?
- **Por qué bloquea:** el TyC §11 dice "Cada equipo debe desarrollar su solución durante la Hackatón". El chat habla de una "plantilla" previa.
- **Opciones:** (a) no llevar nada; (b) llevar solo esqueleto técnico sin lógica de dominio (Docker, CI, framework recién creado) y declararlo; (c) llevar plantilla con auth y CRUD.
- **Recomendación:** (b) y preguntar al CDE a las 8:30 del 28 si es aceptable; (c) puede interpretarse como incumplir el TyC. La planificación de `07` asume (b).
- **Decide:** CDE (organización); el equipo declara.

### PA-23 ¿Mover reportes (T-16) de Santiago a Julián?
- **Por qué bloquea:** Santiago acumula ~15 h nominales contra ~12 h disponibles. **Opciones:** mover T-16 a J; recortar T-14 a solo CSV. **Recomendación:** mover T-16 a J si T-25 se acaba antes. **Decide:** los tres, a las 10:00 del 28.

## I. Añadidas en F9

### PA-24 Costos reales de infraestructura y mantenimiento
- **Por qué bloquea:** sostenibilidad (15 pts). **Recomendación:** cotizar un VPS equivalente y estimar horas de mantenimiento; mientras tanto presentar solo la estructura de costos. **Decide:** Julián (infraestructura) + MP (negocio).

### PA-25 Nombre del producto y del equipo en el pitch
- El chat propone un nombre de equipo. **Recomendación:** elegir el nombre del producto antes del 28. **Decide:** los tres.

### PA-26 ¿Puede sumarse un asesor de negocio/diseño/derecho al equipo (interdisciplinariedad)?
- **Decide:** equipo y CDE (reglas permiten 4 integrantes estudiantes activos).

| # | Afirmación | Estado |
|---|---|---|
| NV-20 | HubSpot: plan gratuito (2 usuarios, 1 000 contactos), Starter ≈ US$20 por usuario/mes (lista) | Páginas de terceros; `[NO VERIFICADO]` en hubspot.com |
| NV-21 | Salesforce Starter Suite US$25 por usuario/mes | Páginas regionales de Salesforce vía búsqueda; `[NO VERIFICADO]` directamente |
| NV-22 | Airtable Team ≈ US$20 por editor/mes anual; 50 000 registros por base | Terceros; `[NO VERIFICADO]` |
| NV-23 | Software de aceleradoras (AcceleratorApp, Accubate, Babele, Skipso, TheIncubatorPro, F6S): categorías y funciones | Artículos del proveedor AcceleratorApp (sesgo comercial) y GetApp; `[NO VERIFICADO]` |
| NV-24 | Moodle Level Up XP: puntos, niveles, clasificación, notificaciones; ~25 000 sitios | moodle.org (resumen de búsqueda); licencia `[NO VERIFICADO]` |
| NV-25 | Salesforce Nonprofit Cloud: casos y programas; Education Cloud sin evidencia de funciones para centros de emprendimiento | Parcial; `[NO VERIFICADO]` |

## J. Plan de verificación de todo lo `[NO VERIFICADO]` (F11)

**Quién y cuándo:** Julián y Santiago, **antes del 27-oct a las 20:00**, con acceso directo a internet (desde una red sin el proxy de esta sesión). Tiempo estimado: 90 min.

| Grupo | NV | Acción concreta | Si no se puede verificar |
|---|---|---|---|
| Versiones de framework | NV-01, NV-02, NV-03, NV-04, NV-11 | Ejecutar los comandos de `03` §5 y anotar versiones en `docs/VERSIONES.md`; leer laravel.com/docs/13.x/releases, react.dev, postgresql.org, nodejs.org | Usar lo que instalen los comandos (los `lock` mandan) |
| Paquetes | NV-09, NV-10, NV-12 | `composer require ... --dry-run` y `npm install` en el esqueleto | Plan alterno: CSV nativo sin maatwebsite; PDF por impresión del navegador; Sanctum sin spatie (roles propios) |
| Normas | NV-05, NV-06, NV-19, PA-12 | Abrir iso.org (ficha 78176), owasp.org (ASVS 5.0), w3.org (WCAG 1.4.3) | El manual ya usa los nombres del TyC; no cita números de requisitos |
| Investigación | NV-15..NV-18 | Abrir los PDF/DOI y confirmar autor, año y cifra | Eliminar la cifra de Sailer y Homner del pitch (queda "efectos pequeños y positivos") |
| Legal | NV-08 | Leer Ley 1581 de 2012 en SUIN-Juriscol; consultar a la oficina jurídica de la UNAB | El aviso de privacidad queda como borrador sujeto a revisión (`04` §6) |
| Mercado | NV-20..NV-25 | Abrir las páginas de precios y comparar | Citar solo "precio de lista por usuario/mes, consulta 26-oct-2026" o retirar la cifra |
| Laravel/OWASP técnicos | NV-13, NV-14 | Consultar docs de colas, scheduler, `lockForUpdate`, cabeceras | Sustituir el mecanismo por el más simple (cola síncrona + cron) |

Ninguna decisión Must depende de un `[NO VERIFICADO]` sin alternativa: cada fila anterior tiene plan de contingencia.

## K. Ronda 2 · F12: contradicciones con v1 y estado de verificación (27-oct-2026)

Resultados completos en `12_verificacion.md`. Ya corregidos en cascada en `03_stack.md`.

| # | Contradicción con v1 | Motivo | Decide |
|---|---|---|---|
| C-01 | React 19.3.1, no 19.2.x | react.dev/npm | Informativo |
| C-02 | Node 24 LTS (24.22.1); v1 citaba 24.19.0 y la opción de Node 26 | Node 26 es LTS desde el 28-oct; se evita estrenar LTS el primer día | Santiago |
| C-03 | `react-router` fijado en 7.18.4 | La 8.5.0 exige Node ≥ 22.22.0 | Informativo |
| C-04 | `@tanstack/react-table` 8.21.3, no 9.x | Salto mayor sin beneficio para el MVP | Julián |
| C-05 | `@hookform/resolvers` 5.9.2 | La 6.0.0 rompe `npm install` por peers | Informativo |
| C-06 | `typescript` 5.9.3 fijo | La 7.0.2 existe; compatibilidad sin verificar | Santiago |
| C-07 | Pest ^4 y plugin ^4.1; quitar `phpunit/phpunit` del esqueleto | Pest 5 exige PHP 8.4; la combinación elegida se resolvió con PHP 8.3 | Julián |
| C-08 | `maatwebsite/excel` es 4.x | Packagist | Informativo |
| C-09 | `motion` en lugar de `framer-motion` | Mismo autor y versión; nombre actual | Informativo |
| C-10 | `cmdk` sin publicar desde mar-2025 | npm; evaluar alternativa en F13/F15 | Julián |

**Sigue `[NO VERIFICADO]` tras F12:** NV-05 (iso.org 403), NV-08 (Ley 1581, sin respuesta), NV-14, NV-18, NV-20, NV-21, NV-23, NV-24, NV-25, las cifras g de NV-16, el OWASP Top 10 2025 de NV-06 y la **instalación real** de los paquetes (descargas de GitHub bloqueadas en la sesión). Plan: §J sin cambios. Estrellas, licencias y últimos commits de GitHub no se pueden leer desde esta sesión (api.github.com devuelve 403): afecta a F15.

### K.2 Contradicciones con v1 introducidas por F13 (`13_diferenciadores.md` §5)

| # | Contradicción | Motivo | Decide |
|---|---|---|---|
| C-11 | Reporte: CSV (UTF-8 con BOM) + vista imprimible a PDF en el camino crítico; XLSX y dompdf solo si sobra tiempo (v1: PDF/CSV/XLSX) | Ahorra 0,5 h; CRI-08 solo exige "un clic" | Santiago |
| C-12 | RF-04 (completitud) sube de Should a Must dentro de D-03 (Nivel 2) | 36 %/37 % de sector/tamaño es el dato fuerte del reto | Equipo |
| C-13 | RF-27 se queda Should y pasa a Nivel 3 | Costo/valor | Equipo |
| C-14 | Decisión D-05 de `02` pasa de 3 a 5 diferenciadores + 1 transversal, con niveles y puertas | `13` §4 | Equipo |
| PA-27 | Pregunta abierta: ¿el CDE usa hoy una paleta/atajos o prefiere menús? ¿Qué indicador quiere ver primero (duplicados, calidad, brechas, recompensas)? | Ordena el Nivel 2 | MP y S preguntan el 28-oct 8:30 |

### K.3 Contradicciones con v1 introducidas por F14 (`14_backlog.md` §6)

| # | Contradicción | Motivo | Decide |
|---|---|---|---|
| C-15 | T-14 pasa de CSV/XLSX con reversión (2,0 h) a solo CSV sin reversión (1,5 h) | Ahorro A1 de `13` §4.1; la importación se rehace desde cero con el reinicio de datos de demo | Santiago |
| C-16 | T-12 sube a 2,25 h (puntuación y deshacer), T-13 a 2,75 h, T-16 baja a 0,75 h, T-40 a 1,0 h (esta última condicionada a F15) | `13` | Equipo en T-01 |
| C-17 | Se añaden 15 tareas (T-17, T-18, T-19, T-26, T-27, T-28, T-31, T-47..T-54); el Núcleo sube 0,5 h a Julián y 0,75 h a María Paula | Diferenciadores | Equipo en T-01 |
| C-18 | El déficit de v1 (1,5–2,5 h por persona) pasa a 2,5 h (S), 3,0 h (J) y 2,5 h (MP) solo con el Núcleo | Aritmética de `07` §5.2; v1 usaba 10,75 h de disponibilidad frente a 12,5–13,25 h | Equipo: decidir a las 10:00 si recorta Núcleo |

### K.4 Contradicciones con v1 introducidas por F15 (`15_frontend_skills_y_ui.md` §6)

| # | Contradicción | Motivo | Decide |
|---|---|---|---|
| C-19 | `recharts` (+101,8 KB gzip) se carga por ruta con `React.lazy`, no en la carga inicial | Medición real | Julián |
| C-20 | `cmdk` se mantiene (monta con React 19.3.1); el diálogo propio queda solo como plan B | Prueba de montaje | Equipo |
| C-21 | El ahorro A3 (T-40 de 1,5 a 1,0 h por shadcn/ui) queda condicionado a la prueba previa de `15` §7 | La CLI de shadcn no se pudo ejecutar en esta sesión | María Paula |
| PA-28 | Pregunta abierta: ¿Python 3 está instalado en los tres portátiles? (la skill `ui-ux-pro-max` lo exige) | Si no, se omite esa skill (Could) | Equipo |
| NV-26 | `[NO VERIFICADO]` rendimiento (LCP/INP) en el portátil y proyector del laboratorio; hay presupuesto y método, no medición | Sin acceso al hardware | María Paula |

### K.5 Contradicciones y preguntas introducidas por F16 (`16_sistema_de_diseno.md` §15)

| # | Contradicción / pregunta | Motivo | Decide |
|---|---|---|---|
| C-22 | La paleta azul genérica de `06` §5 se reemplaza por la derivada de los originales del CDE (marino #16265C, naranja #F47B20, amarillo #FFCC4D, crema #FDEFE2); fuente de documentos: Arial/Calibri, la app usa Manrope y Source Sans 3 | Los XML de los originales traen la paleta; v1 decía que no se conocía | María Paula |
| PA-29 | ¿El CDE permite usar su paleta (sin logotipo) y entrega manual de marca? Opciones: (a) paleta como inspiración sin logos, (b) pedir manual, (c) paleta neutra. Recomendación: (a) y preguntar el 28-oct. Por qué bloquea: coherencia y permiso | `PROMPT_2` prohíbe logos sin permiso | CDE |

### K.6 Hallazgo de F17: el Núcleo no cabe antes del congelamiento (`tareas/_INDEX.md`)

**PA-30 · ¿Cómo se cierra la brecha entre la carga y las 11,75 h útiles hasta el FF?** (decide el equipo en T-01, 28-oct 10:00)

- **Por qué bloquea:** el calendario nominal de `tareas/_INDEX.md` muestra que, con el Núcleo completo, Santiago termina T-15 a las 03:00, Julián termina T-30/T-31 a las 03:00–03:30 y María Paula termina T-27 a las 03:00; el FF es a las 01:30 y T-91 (ensayo) a las 00:30–01:30.
- **Aritmética (horas útiles hasta FF: 11,75 por persona = 35,25 h de equipo):** carga del plan v1 con los ahorros A1–A3 = S 12,25 + J 13,25 + MP 12,0 = **37,5 h** (déficit del equipo: 2,25 h, ya existía); añadir los incrementos del Núcleo de la Ronda 2 (T-17 0,5, T-19 0,25, T-27 0,5, T-31 0,5 y +1,0 en T-12/T-13) = **40,25 h** (déficit: 5,0 h, ≈ 14 %).
- **Opciones:**
  1. **Dos pasadas** (recomendada): lo que ya está al final de cada cola (T-19, T-17, T-27, T-31) se construye solo si el resto de la cola está terminada y probada, y los incrementos de T-12 (+0,75) y T-13 (+0,25) se hacen en una segunda pasada tras T-15 (ya escrito en sus specs). Con esto, el Núcleo «seguro» vuelve a la carga de v1 + ahorros.
  2. Equilibrar con el resto: mover T-25 (recomendación por reglas, 0,75 h) de Julián a María Paula, porque depende de los diagnósticos que ella construye; queda ≈ 0,75 h de déficit por persona, que se absorbe con la ventana de corrección 6:30–7:30 del día 2 y las contingencias de `07` §7 (p. ej. T-15 como consulta directa).
  3. Aplicar de entrada la contingencia de `07` §7 a T-15 (línea de tiempo con UNION de tablas, −0,75 h) y reducir T-30 a solo los totales de la demo (−0,5 h).
  4. Dormir 3 h en lugar de 4 (no recomendada: `07` §8 pide ≥ 4 h por seguridad y errores nocturnos).
- **Recomendación:** opciones 1 + 2 + 3. **Decide:** Santiago, Julián y María Paula en T-01 (se registra en `docs/DECISIONES.md`).

(Si adoptan 1 + 2 + 3, los cambios de responsable y horas se reflejan en `backlog.csv` y `07` antes de las 10:30.)

**R3 · Recomendación actualizada (NO APLICADA; requiere ratificación en T-01).** `20_plan_que_cabe.md` sustituye la recomendación 1 + 2 + 3 por una **opción 5**: variante B con compuertas y variante A como piso (`20` §9.5). Difiere de la recomendación anterior en dos puntos: (a) T-25 **se queda en Julián** (no se mueve a María Paula; C-37), porque B necesita las horas de María Paula para T-17 y T-47a; (b) el déficit real contra 10,75 h de construcción es de 8,0 h de equipo (no 5,0 h; C-35). Conserva de las opciones anteriores las dos pasadas de T-12/T-13 (T-12x, T-13x solo en B) y T-15 por consulta directa. Opciones descartadas: 4 (dormir 3 h).

## K.7 Contradicciones de F18 (`18_pitch_v2.md`)

| # | Contradicción con v1 | Motivo | Decide |
|---|---|---|---|
| C-23 | El bloque «Gamificación» del pitch (`09` §5, 2:45–3:15) desaparece; se demuestra dentro de la demo y su tiempo pasa a «Calidad y honestidad» (30 + 15 s) | El TyC pide demostrar el módulo de recompensas dentro de «funcionamiento» | María Paula |
| C-24 | La demo de 2 min pasa de 5 pasos (`09` §6) a 7 microescenas con tres versiones A/B/C | Portafolio de `13` | Equipo |
| C-25 | Marcela Rojas arranca con 435 puntos (no 280 como en el wireframe de `06`/`16`) para que el cierre de un compromiso (+25) cruce el Nivel 4 (450) durante la demo | Coherencia de la demo con `06` §7.2 | Julián (T-30) |
| Q-26..Q-29 | Preguntas nuevas al CDE añadidas en `10` | Ronda 2 | — |

## K.8 Decisiones y riesgos nuevos de F19 (`19_kit_local.md` §2.6–§2.7)
Decisiones 11–18 añadidas a `INDEX.md`. Hallazgos de la auditoría: 8 contradicciones de redacción corregidas con marca «R2» (`19` §2.3); el déficit de horas se mantiene y se decide en PA-30. Base de horas: 10,75 h (`07`) o 11,75 h con la hora de ensayo (`99` §K.6).

## K.9 Contradicciones y preguntas de F20 (`20_plan_que_cabe.md` §13–§14)

| # | Contradicción / pregunta | Motivo | Decide |
|---|---|---|---|
| C-26 | `backlog.csv`, `14` §4 y `tareas/_INDEX.md` usan las horas de v1 de T-12, T-13, T-14, T-16 y T-40; `07` §5 y `14` §6 las de R2 | Dos fuentes para la misma cifra | Equipo (T-01) |
| C-27 | `02` §3.4 «nunca se corta RF-17/18» frente al aplazamiento de rachas y cola de validación en A y B | Ahorro de 0,75 h en T-43 | Equipo |
| C-28 | `07` T-02 (1,0 h el 28) frente a `03` §5 e `INDEX` (esqueleto y «hola» desplegados antes) | Duplicidad | Julián |
| C-29 | `tareas/_INDEX.md` empieza T-41, T-42 y T-20 antes de que exista T-11 | Dependencia violada | Santiago |
| C-30 | `tareas/_INDEX.md` asigna 1,0 h de T-95 a una ventana de 0,5 h; T-96 sin horas de accesibilidad para MP | Aritmética | María Paula |
| C-31 | HU-24 (auditoría filtrable) sin tarea Must con pantalla | Hueco de trazabilidad | Santiago |
| C-32 | `18` §5 usa cola de validación y mapa de ruta (T-47) en la versión A | Alcance R3 | María Paula |
| C-33 | `13` §4 comprometía 5 + 1 diferenciadores | Quedan 3 parciales + transversal | Equipo |
| C-34 | PA-23 (mover T-16 a J) | T-16 dura 0,75 h; se descarta | Equipo |
| C-35 | `tareas/_INDEX.md` §1 cuenta la hora de T-91 dos veces | Aritmética | Equipo |
| C-36 | T-10, T-11 y T-43 como tareas únicas | Se parten en a/b | Equipo |
| C-37 | PA-30 opción 2 (T-25 a MP) | MP necesita sus horas en B | Equipo |
| PA-31 | ¿Variante A o B? Recomendación: B con compuertas (`20` §9.5). Por qué bloquea: define el calendario de las 10:30. Opciones: A, B, B sin compuertas (no recomendada) | Decisión de plan | Los tres, en T-01 |
| PA-32 | ¿Son las actividades «Verde» de `20` §4 compatibles con el TyC §11? Recomendación: sí, declarándolas a las 8:30. Bloquea: P-02, P-03, P-07 se hacen la noche del 27 | Reglas del concurso | CDE |
| PA-33 | ¿De dónde salen las 3 personas para T-97 (6:30 del 29)? Recomendación: pedirlas a otros equipos o al laboratorio durante la cena del 28 | Sin personas no hay SUS | María Paula |

## K.10 Contradicciones y verificaciones de F21 (`21_*`)

| # | Contradicción / verificación | Motivo | Decide |
|---|---|---|---|
| C-38 | Marcela Rojas arranca con **430** puntos, no 435 (`99` C-25, `18` §5, `04` §7.2) | Con 435 el 5.º compromiso a tiempo (insignia *Cumplidor*) no puede coincidir con el cruce al nivel 4 | Julián (T-30) |
| C-39 | La empresa protagonista tiene 2 planes (6 + 2 compromisos) frente a «1 plan con 6 compromisos» de `04` §7.2 | Necesita 4 compromisos a tiempo antes de la demo y 1 pendiente en vivo | Julián (T-30) |
| C-40 | La misión «Pitch listo» (`06` §7.3) con insignia queda fuera de A y B | Reto `PITCH_REGISTRADO` no tiene tarea | María Paula |
| C-41 | `06` §7.4 regla 5 (cola de validación) frente al microcopy `M3.avisar`: la persona emprendedora avisa y el equipo marca | T-43 sin cola en A y B (C-27) | María Paula |
| NV-27 | Plazo de renovación de la matrícula mercantil (1 ene–31 mar; art. 33 Código de Comercio) | Verificado solo en fuentes secundarias (SIC/INCP/Ámbito Jurídico, 27-oct-2026); secretariasenado.gov.co dio HTTP 503 | CDE (asesor) |
| NV-28 | RUT: inscripción electrónica y sin costo; base del NIT | Fuente: Bogotá.gov.co y medios (27-oct-2026); dian.gov.co dio HTTP 404 | CDE (asesor) |
| PA-34 | ¿Cuántas sesiones tiene la Ruta de Acompañamiento? | El TyC no lo dice; la lección L5 no afirma un número | CDE (Q-xx a añadir en `10`) |
| PA-35 | ¿Los 12 sectores no listados en el TyC coinciden con la clasificación del CDE? | `21_catalogos.csv` los marca `PROPUESTA` (ya PA-07) | CDE |

## K.11 Contradicciones, riesgos y preguntas de F22 (`22_auditoria_adversarial.md`)

| # | Contradicción / riesgo / pregunta | Resolución | Decide |
|---|---|---|---|
| C-42 | Evidencia ISO «fusión reversible» frente a A (sin deshacer) | `05` §12 y `08` §5.2 reescritos | Equipo |
| C-43 | «Catálogo/reto sin tocar código» frente a la ausencia de RF-23 y E14 | Se demuestra con `21_catalogos.csv` y `RetosSeeder` | Equipo |
| C-44 | «Simular paso del tiempo», indicador de latencia, QR rotativo, `CargaSeeder` sin tarea | Retirados o absorbidos por T-96 | Equipo |
| C-45 | «Piloto de un semestre» frente a 4 + 4 semanas | Frase única en `18` y `09` | María Paula |
| C-46 | Escena «36 % se mejora solo» frente a calidad de datos aplazada | Retirada | María Paula |
| C-47 | Congelamiento 8:45 frente a «≤ 15 líneas» | Regla única en `08` §5.6 | Equipo |
| C-48 | Lista T-60 a las 8:00 chocaba con V2 | 7:30–8:00 | Julián |
| C-49 | Pausas de `07` §8 no descontadas en las 10,75 h de `20` | `20` §9.4, PA-37 | Equipo (T-01) |
| RK-1..RK-8 | Ver `22` §7.4 (inyección CSV, límite de login en escena, punto único de falla, red, autocompletado, IP del código, proyector, fusión a las 2:00) | Mitigaciones en `22` | Varios |
| PA-36 | ¿Quién es dueño del código y se puede declarar el uso de agentes de IA? El TyC no lo dice. Recomendación: preguntar el 28 a las 8:30 y declararlo | Bloquea la respuesta a Q35 y el cierre de negocio | CDE |
| PA-37 | ¿Las pausas de 10 min cada 90 salen del colchón? Recomendación: sí, y hacerlas en V1, cena y receso cuando se pueda | Define la capacidad efectiva | Los tres, en T-01 |

