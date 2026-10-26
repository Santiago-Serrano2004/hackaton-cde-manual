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
| NV-02 | React en línea 19.2.x (19.2.7 según versionlog.com, 1-jun-2026) | `[NO VERIFICADO]` contra react.dev / GitHub |
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
| NV-11 | Vite 8 existe y exige Node ≥ 20.19 / 22.12; Tailwind 4.3.x; React 19.2.x | `[NO VERIFICADO]` contra fuentes oficiales |
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
