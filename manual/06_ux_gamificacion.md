# 06 · UX, sistema de diseño y módulo de formación por recompensas

**Objetivo.** Definir pantallas por rol, flujos, wireframes en texto, sistema de diseño mínimo, accesibilidad y el diseño completo del módulo de gamificación (mecánica, contenido conectado a las capacitaciones del CDE, anti-trampa, medición de "intuitivo y divertido") respaldado en investigación citada.

**Entradas.** `01` (RF-13, RF-17..19, RNF-04/05), `02` (HU-13..19), `04` (§2.7), TyC §5 resultado 9 y criterio 9.

---

## 1. Principios de UX (decisiones)
1. **Una pregunta, una pantalla:** cada pantalla responde a una pregunta del CDE ("¿cómo está esta empresa?", "¿qué me falta?").
2. **Del dato a la acción:** cada cifra es clicable y lleva a la lista que la compone (ej. "18 % vencidos" → lista de compromisos vencidos).
3. **Prevenir errores:** listas en vez de texto libre, confirmación en acciones destructivas, deshacer en fusión/importación.
4. **Mínimo de clics:** inscripción ≤ 3 clics; buscar empresa ≤ 2 acciones (RF-14, RF-11).
5. **Lenguaje del CDE, en español claro**; sin jerga técnica en el portal del emprendedor.
6. **Gamificación al servicio del acompañamiento real**, no decorativa (D-05).

## 2. Mapa de pantallas por rol

### 2.1 Equipo CDE / Administrador (escritorio primero)
| # | Pantalla | Contenido | Req. |
|---|---|---|---|
| E1 | Inicio (panel del día) | Citas de hoy, solicitudes nuevas, compromisos vencidos, eventos próximos, alertas de calidad de datos | RF-07..09 |
| E2 | Empresas (lista + búsqueda) | Búsqueda global, filtros, chips de completitud, botón "Importar", "Nueva" | RF-01, 28 |
| E3 | Ficha de empresa (360) | Cabecera (perfil), pestañas: **Línea de tiempo** (por defecto), Diagnósticos, Proyectos, Planes, Citas, Eventos, Contactos | RF-14 |
| E4 | Alta/edición + aviso de duplicado | Formulario con coincidencias en vivo | RF-02 |
| E5 | Duplicados y fusión | Comparación lado a lado, campos a conservar, vista previa del resultado | RF-03 |
| E6 | Importación | Subir → mapear → vista previa semáforo → confirmar → resumen | RF-15 |
| E7 | Diagnóstico y evolución | Radar/barras por dimensión, línea por fecha | RF-05 |
| E8 | Proyectos y planes | Tablero por estado; detalle con compromisos | RF-06, 07 |
| E9 | Citas | Bandeja (solicitadas / agendadas / realizadas), agendar, registrar resultado | RF-08 |
| E10 | Eventos | Lista, crear/editar, inscritos, asistencia (QR/manual), resumen inscritos vs. asistentes | RF-10..12 |
| E11 | Panorama (dashboard) | Caracterización con filtros | RF-20 |
| E12 | Brechas | Selector sector/tamaño → ranking de brechas | RF-22 |
| E13 | Reporte de impacto | Periodo, vista previa, exportar | RF-21 |
| E14 | Retos y gamificación (admin) | Retos activos, puntos, insignias | RF-17..18 |
| E15 | Administración | Usuarios, roles, catálogos, auditoría | RF-23, 25, 26 |

### 2.2 Emprendedor (móvil primero)
| # | Pantalla | Contenido | Req. |
|---|---|---|---|
| M1 | Aviso de privacidad (primer ingreso) | Autorización con versión | RNF-13 |
| M2 | Mi camino (inicio) | Etapa del acompañamiento, barra de progreso, próximo paso, nivel y puntos | RF-13, 17 |
| M3 | Mis pendientes | Compromisos con fecha y botón "Actualizar avance" | RF-07, 13 |
| M4 | Mis citas | Próximas, historial, "Solicitar cita" (tema + franja) | RF-08 |
| M5 | Para ti (oferta) | Tarjetas de eventos con motivo y botón "Inscribirme" | RF-10, 11 |
| M6 | Mi empresa | Ficha editable parcial; barra de completitud con puntos por completar | RF-04, 17 |
| M7 | Logros | Insignias, racha, retos del mes, clasificación (si está activa) | RF-18, 19 |
| M8 | Mis datos | Descargar mis datos; solicitar corrección | RNF-13 |

### 2.3 Docente y estudiante consultor
| # | Pantalla | Contenido |
|---|---|---|
| D1 | Mis proyectos | Lista, estado, semestre |
| D2 | Proyecto | Equipo de consultores, área, avances, plan de acción y compromisos |
| D3 | Empresa (lectura) | Resumen y línea de tiempo (campos de contacto ocultos al consultor `PROPUESTA`) |

## 3. Flujos clave (texto)
1. **Buscar empresa:** E2 (escribir) → resultados con coincidencia aproximada → clic → E3 en pestaña Línea de tiempo. *Éxito:* ≤ 20 s.
2. **Alta sin duplicar:** E4 (NIT al perder foco → consulta) → si coincide: banner "Ya existe: [Abrir] [Es otra distinta]" → guardar.
3. **Cita:** M4 solicitar → E9 bandeja "Solicitadas" → agendar (fecha/asesor) → recordatorios programados → tras la cita, registrar resultado (+ crear compromiso).
4. **Evento:** E10 crear/publicar → M5 recomendación y motivo → inscribirse → día del evento: QR → asistencia → resumen (E10) → puntos automáticos (M7).
5. **Pregunta de investigación:** E12 elegir sector → ranking → clic en dimensión → lista de empresas con esa brecha → exportar.

## 4. Wireframes en texto

### E3 Ficha de empresa (360)
```
┌──────────────────────────────────────────────────────────────────┐
│ ← Empresas | Panadería Dulce Hogar S.A.S.    [Editar] [Fusionar] │
│ Alimentos · Micro · Graduado UNAB · NIT 999.xxx · Bucaramanga    │
│ Completitud ████████░░ 82 %     Madurez: Intermedio ▲ (+12)      │
├──────────────────────────────────────────────────────────────────┤
│ [Línea de tiempo] Diagnósticos Proyectos Planes Citas Eventos    │
│ Filtro: [Todo ▾] [2026 ▾]                                        │
│ ● 12 sep 2026  Evento · Marketing digital (asistió)              │
│ ● 02 sep 2026  Compromiso vencido · Actualizar precios           │
│ ● 20 ago 2026  Cita realizada · Asesoría finanzas                │
│ ● 02 ago 2026  Proyecto de aula · Mercadeo (2026-2) en curso     │
│ ● 15 mar 2026  Diagnóstico #3 · 68/100                           │
└──────────────────────────────────────────────────────────────────┘
```

### M2 Mi camino (móvil)
```
┌───────────────────────┐
│ Hola, Marcela 👋       │
│ Nivel 3 · Constructora │
│ ███████░░ 280/400 pts  │
│ 🔥 Racha: 3 semanas    │
├───────────────────────┤
│ Tu siguiente paso      │
│ [Actualizar precios]   │
│ vence en 2 días  [Ir]  │
├───────────────────────┤
│ Para ti                │
│ Taller de finanzas  ⭐  │
│ "Porque tu brecha más  │
│  alta es finanzas"     │
│ [Inscribirme]          │
└───────────────────────┘
```

### E6 Importación (vista previa)
```
Archivo: importacion_demo.csv · 509 filas
🟢 497 nuevas   🟡 12 posibles duplicados   🔴 0 con error
[Ver solo amarillas]
Fila 41 · "Pamaderia Dulce Hogar" ≈ "Panadería Dulce Hogar" (0,82)  [Omitir][Fusionar][Es otra]
[Cancelar]                                  [Confirmar importación]
```
(En el CSV de demo los 12 amarillos son los duplicados sembrados; para mostrar errores rojos se puede añadir una variante del archivo con filas inválidas, `PROPUESTA`.)

## 5. Sistema de diseño mínimo (PROPUESTA)

Marca institucional de la UNAB y del CDE: **no se conocen colores/tipografías oficiales** (pregunta PA-20); se propone una paleta neutra sobria. Contrastes calculados con la fórmula de luminancia relativa de WCAG (cálculo propio, 26-oct-2026).

| Token | Hex | Uso | Contraste frente al fondo del uso |
|---|---|---|---|
| `texto` | #0F172A | Texto principal sobre #FFFFFF | 17,85:1 |
| `texto-suave` | #475569 | Texto secundario sobre #FFFFFF | 7,58:1 |
| `primario` | #0B5FA5 | Botones, enlaces (texto blanco encima) | 6,57:1 |
| `exito` | #157347 | Éxito, "cumplido" (texto blanco) | 5,87:1 |
| `advertencia` | fondo #FFF4D6, texto #7A4B00 | Alertas, "por vencer" | 6,76:1 |
| `error` | #9B1C1C sobre #FFFFFF | Errores, "vencido" | 8,15:1 |
| `logro` | #5B3FB5 (texto blanco) | Insignias, nivel | 7,44:1 |
| `acento` | #B45309 (texto blanco) | Racha/fuego | 5,02:1 |
| `superficie` | #F1F5F9 | Fondo de tarjetas, texto #0F172A | 16,3:1 |

Todos ≥ 4,5:1, umbral AA para texto normal del criterio 1.4.3 de WCAG (4,5:1; 3:1 para texto grande) según resúmenes de terceros de la norma `[NO VERIFICADO en w3.org]`. **No usar solo color** para estado: siempre ícono + texto.

- **Tipografía:** pila de sistema (`system-ui, "Segoe UI", Roboto, sans-serif`) para no depender de CDN ni de internet (plan B local). Tamaño base 16 px; escala 14/16/20/24/32.
- **Espaciado:** múltiplos de 4 px; radio de esquinas 12 px; sombras suaves.
- **Componentes (en `frontend/src/components`):** Button, Input/Select (con etiqueta y error), Table (paginada, ordenable), Badge de estado, Card, Tabs, Modal de confirmación, Toast, Timeline, ProgressBar, Stat (cifra + etiqueta + variación), EmptyState (con acción sugerida), Skeleton de carga, LevelBadge, BadgeInsignia, Chart (wrapper de Recharts).
- **Iconos:** lucide-react `[NO VERIFICADO]`.
- **Estados vacíos y de carga** obligatorios (nunca pantalla en blanco).
- **Movimiento:** animaciones ≤ 600 ms para logros; respetar `prefers-reduced-motion`.

## 6. Accesibilidad (RNF-05)
- Contraste AA (tabla §5); navegación completa por teclado con foco visible; `label` asociado en cada campo; mensajes de error vinculados (`aria-describedby`); roles ARIA solo donde haga falta; objetivos táctiles ≥ 44 px en móvil; tablas con encabezados; gráficos con tabla alternativa o descripción; no depender de colores; lenguaje simple; zoom 200 % sin pérdida.
- Prueba: revisión con una herramienta automática (p. ej. axe o Lighthouse `[NO VERIFICADO: versión]`) + recorrido manual con teclado del camino dorado. Meta: 0 errores críticos.

## 7. Módulo de formación por recompensas

### 7.1 Fundamento (investigación)
- **Definición:** gamificación = uso de elementos de diseño de juegos en contextos que no son juegos (Deterding, Dixon, Khaled y Nacke, 2011, *Proceedings of the 15th International Academic MindTrek Conference*, pp. 9–15, DOI 10.1145/2181037.2181040).
- **Efectos dependen del contexto y del usuario:** la revisión de Hamari, Koivisto y Sarsa (2014, HICSS-47, pp. 3025-3034, DOI 10.1109/HICSS.2014.377) concluye efectos mayormente positivos, pero muy dependientes del contexto y de los usuarios, con riesgo de efecto de novedad. Implicación: **no basta con puntos**; hay que anclar los puntos a conductas reales y variar los retos.
- **Evidencia meta-analítica en aprendizaje:** Sailer y Homner (2020, *Educational Psychology Review*, 32(1), 77–112, DOI 10.1007/s10648-019-09498-w) reportan efectos positivos pequeños: cognitivo g = 0,49; motivacional g = 0,36; conductual g = 0,25 (cifras tomadas del resumen de búsqueda, `[NO VERIFICADO en el artículo]`). Implicación: **prometer participación y constancia, no milagros**; el pitch no debe afirmar mejoras cuantificadas de aprendizaje sin evidencia propia.
- **Motivación:** la teoría de la autodeterminación (Ryan y Deci, 2000, *American Psychologist*, 55(1), 68–78, DOI 10.1037/0003-066X.55.1.68) sitúa tres necesidades psicológicas básicas (autonomía, competencia y relación) `[NO VERIFICADO: formulación exacta, el artículo no fue leído]`. Mapeo de diseño `PROPUESTA`: **autonomía** → el emprendedor elige retos; **competencia** → niveles y retroalimentación inmediata; **relación** → eventos presenciales, clasificación opcional por cohortes. Evitar premios extrínsecos intrusivos.
- Ver NV-15..NV-18 en `99`.

### 7.2 Mecánica

**Principio de diseño:** los puntos se otorgan por **hechos verificables del sistema** (no por clics autodeclarados).

| Reto (código) | Evento que lo dispara | Puntos | Repetible |
|---|---|---|---|
| `FICHA_BASICA` | Completar sector, tamaño, ingresos y formalización | 40 | una vez |
| `FICHA_COMPLETA` | Completitud ≥ 90 % | 60 | una vez |
| `ASISTIR_EVENTO` | Asistencia registrada (QR o lista) | 30 | por evento (máx. 4/mes) |
| `INSCRIBIRSE_EARLY` | Inscripción ≥ 3 días antes y asistencia | 10 | por evento |
| `COMPROMISO_CUMPLIDO` | Compromiso pasa a cumplido antes de la fecha | 25 | por compromiso |
| `COMPROMISO_TARDE` | Cumplido después de vencer | 10 | por compromiso |
| `CITA_REALIZADA` | Asistir a una cita agendada | 20 | máx. 2/mes |
| `DIAGNOSTICO` | Completar un diagnóstico | 50 | por diagnóstico |
| `MEJORA_MADUREZ` | Subir ≥ 10 puntos entre diagnósticos | 80 | por diagnóstico |
| `RACHA_3` / `RACHA_6` | 3 / 6 semanas consecutivas con ≥ 1 acción | 30 / 60 | una vez |
| `REFERIR` | `PROPUESTA` futura | — | — |

Valores `PROPUESTA` a calibrar para que un emprendedor activo llegue al nivel 3 en ~1 mes.

**Niveles** (puntos acumulados): 1 Semilla 0 · 2 Brote 100 · 3 Constructor 250 · 4 Impulsor 450 · 5 Líder 700 · 6 Referente 1 000 (`PROPUESTA`).

**Insignias (≥ 5, RF-18):** *Primer paso* (ficha básica), *Cuentas claras* (completar el diagnóstico de finanzas), *Constante* (racha 3), *Cumplidor* (5 compromisos a tiempo), *Aprendiz* (3 capacitaciones), *Mejora visible* (+10 madurez), *Conector* (asistir a 2 eventos de networking). Cada una con ícono, descripción y criterio visible.

**Rachas:** semana ISO con ≥ 1 acción válida mantiene la racha; 1 "comodín" mensual evita perderla (reduce frustración) `PROPUESTA`.

**Clasificación (Should, RF-19):** por cohorte (semestre) y opcional; por defecto muestra solo el propio puesto y los 5 primeros con alias; el usuario puede ocultarse. Evita desmotivar a los de abajo.

**Retroalimentación:** al sumar puntos: toast "+30 · Asististe al taller de finanzas", barra que avanza, confeti ligero al subir de nivel (respetando `prefers-reduced-motion`), mensaje de "falta poco" con el próximo logro.

### 7.3 Contenido de ejemplo conectado a capacitaciones reales del CDE
El TyC cita capacitaciones como "marketing digital", la Ruta de Acompañamiento (sesiones que terminan en pitch) y áreas de proyectos de aula (mercadeo, finanzas, operaciones, formalización). Misiones de ejemplo (`PROPUESTA`):

| Misión | Pasos (todos verificables) | Recompensa |
|---|---|---|
| **Ruta Marketing digital** | Inscribirse en el taller → asistir → cumplir el compromiso "publicar en 2 canales" | 30 + 25 + insignia *Aprendiz* |
| **Ordena tus cuentas** | Completar el diagnóstico en finanzas → asistir al taller de finanzas → cumplir compromiso | 50 + 30 + 25 + *Cuentas claras* |
| **Formalízate** | Cita de formalización → completar ficha con estado de formalización → compromiso de trámite | 20 + 40 + 25 |
| **Pitch listo** | Asistir a 3 sesiones de la Ruta → registrar el pitch final | `PROPUESTA` 100 + insignia |

El administrador crea retos desde E14 sin tocar código (MA).

### 7.4 Anti-trampa
1. Puntos solo por eventos verificables del sistema (asistencia registrada por el CDE/QR, estado cambiado por el responsable o validado por el equipo) — no por declaración propia.
2. Unicidad `(persona, reto, referencia)` en BD: no hay doble cobro (idempotencia).
3. Topes por periodo (máx. por mes) para retos repetibles.
4. QR de asistencia con token que rota cada 60 s y válido solo durante la ventana del evento; además, geocerca no (se evita por privacidad) `PROPUESTA`.
5. Compromisos "cumplido" por el emprendedor quedan **pendientes de validación** por el equipo/consultor antes de otorgar puntos (cola de validación, 1 clic).
6. Auditoría de movimientos; el admin puede revertir con motivo; alertas de picos (> 200 puntos/día).
7. La clasificación no es premio económico (no incentiva fraude).

### 7.5 Cómo se mide "intuitivo y divertido" (CRI-09)
| Métrica | Instrumento | Meta (PROPUESTA) | Cuándo |
|---|---|---|---|
| Facilidad de uso | Cuestionario SUS (10 ítems) a ≥ 5 personas ajenas al equipo | ≥ 68 (promedio de referencia citado por Sauro/MeasuringU, secundario `[NO VERIFICADO]`) | T-6 h |
| Tarea sin ayuda | Cronometrar: inscribirse a un evento y ver puntos | ≥ 80 % lo logra en ≤ 2 min | T-6 h |
| Diversión | 3 preguntas Likert 1–5 ("fue agradable", "quise seguir", "entendí cómo ganar puntos") | media ≥ 4 | T-6 h |
| Engagement simulado | Retos completados por usuario sembrado | ≥ 3 en el mes de datos de demo | Datos de demo |
| Validación CDE | Pregunta explícita en Validación 1 y 2 | Registrar respuesta | 28 5:00 p. m. y 29 8:00 a. m. |

Reportar en el pitch los resultados reales, aunque sean pocos (n pequeño), marcándolos como *prueba piloto de hackatón*.

## 8. Decisiones registradas
| # | Decisión |
|---|---|
| D-30 | Paleta neutra propia hasta conocer la marca (PA-20) |
| D-31 | Tipografía de sistema, sin CDN |
| D-32 | Puntos solo por hechos verificables; validación por equipo en compromisos |
| D-33 | Clasificación opcional y con anonimato |
| D-34 | Medición con SUS + tarea cronometrada + Likert |

## Criterio de aceptación de este archivo
- Todas las pantallas E1–E15, M1–M8, D1–D3 tienen requisito asociado.
- Los contrastes de la tabla §5 son ≥ 4,5:1 (calculados).
- La mecánica de §7.2 permite implementar RF-17..19 sin decisiones adicionales; las 7 insignias y 6 niveles están definidos.
- Cada afirmación de investigación tiene autor, año, medio y estado de verificación (NV-15..NV-18).
