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
