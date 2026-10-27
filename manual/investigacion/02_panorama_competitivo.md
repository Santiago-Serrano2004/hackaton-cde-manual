# 02 · Panorama competitivo y huecos

**Objetivo.** Saber contra qué se compara el producto ante los jurados de Diferenciador (15) y Negocio (15), y dónde están los huecos reales, sin afirmar «nadie lo hace». `13` §1.3 ya fija la frase permitida: *«en las alternativas que revisamos, ninguna combina X con Y para este proceso»*. Este archivo le da evidencia.

**Entradas.** `01` (fuentes F-xx), `13` §1, `inputs/02_presentacion_CDE.md` diapositivas 3, 4 y 7.

**Alcance honesto.** Se revisaron páginas públicas y guías de compra (muchas escritas por competidores, F-18). No se hicieron demostraciones ni se vio ningún producto por dentro. Todo lo que sigue es «lo que el proveedor dice que ofrece».

## 1. Seis familias de alternativas

| Familia | Ejemplos revisados | Qué hace bien (según la fuente) | Qué no encontramos en las fuentes |
|---|---|---|---|
| **A. CRM de desarrollo económico y asesoría a pequeña empresa** | Neoserra (F-08) | Diseñado para organizaciones de desarrollo económico; reportes de impacto exigidos por la SBA ya programados; *scorecard* de empresas nuevas, empleos creados y retenidos, ventas y utilidades; exporta CSV. Un resultado de búsqueda de terceros menciona además un portal donde el cliente pide asesoría y se inscribe a talleres; no se abrió ni está en F-08, por lo que no se usa como evidencia | Páginas en español; adaptación a la normativa colombiana; recompensas para el emprendedor; detección de duplicados explicada; verificación contra registro mercantil colombiano. No se leyó precio (NV-35). Una limitación documentada: cada cliente pertenece a un solo centro, lo que complica la asesoría entre centros (F-08, `id=n416`) |
| **B. Gestión de programas de aceleración e incubación** | AcceleratorApp (F-17), Gust (F-18), Visible (F-18), Teachfloor y Startupscience (F-18) | Postulaciones, cohortes, mentores, reportes de programa; AcceleratorApp desde US$499 al mes | Orientadas a **programas con cohortes de startups y a inversión**; Gust, según una guía de un competidor, tiene gestión limitada de cohortes y de mentores. El CDE atiende **micro y pequeñas empresas** de comercio, alimentos y servicios (diapositiva 6: 497 empresas, 28 % alimentos, 20 % comercio), no startups de capital de riesgo |
| **C. Inteligencia de ecosistema** | Dealroom para universidades, StartupBlink, Startup Genome (F-19) | Seguimiento de empresas de egresados, comparación con pares, mapas, índices | Su materia prima son **empresas con inversión y presencia digital**; no hay evidencia de que cubran la microempresa informal que atiende un CDE ni el historial de asesorías. No se leyó precio |
| **D. CRM genéricos y de código abierto** | Twenty, EspoCRM, Frappe CRM (F-20); HubSpot y Salesforce (`NV-20..NV-25` de `99`) | Contactos, empresas, oportunidades, flujos, API; los tres abiertos con licencia AGPL-3.0 | No traen diagnóstico de madurez, proyectos de aula, planes de acción, recompensas ni reportes de impacto del CDE. Hay que **configurarlos**: es la competencia real para una universidad con ingenieros |
| **E. Sistemas a medida de universidades** | AUGE (Costa Rica, Django y PostgreSQL), plataforma virtual de incubadoras (UNRN), dispositivo de evaluación posincubación (UNVM) (F-25) | Resuelven el caso local | Son tesis o proyectos puntuales, sin evidencia de producto mantenido ni de uso por varias instituciones. Es el **destino habitual** de una herramienta como la nuestra si no se mantiene |
| **F. Hojas de cálculo y correo** | Estado actual del CDE (diapositiva 3 y TyC §5) | Cero costo, todos lo conocen | Es exactamente el dolor: datos dispersos, duplicados, seguimiento perdido |

## 2. Los huecos que sostienen un diferenciador (cada uno con su salvedad)

| ID | Hueco | Evidencia | Lo que se puede decir | Lo que NO se puede decir |
|---|---|---|---|---|
| H-1 | Ninguna alternativa revisada usa el **registro mercantil abierto colombiano** (RUES, F-01) para completar y verificar la ficha | La API es abierta y consultable hoy (F-02, `01` §3) y trae NIT, CIIU, estado y renovación | «El dato oficial existe, es público y gratuito; en lo que revisamos, ninguna herramienta de seguimiento de emprendedores lo aprovecha» | «Nadie lo usa» |
| H-2 | El **impacto** se mide con indicadores de asesoría de pequeña empresa (empleos, ventas, capital, empresas nuevas) y Neoserra lo hace para EE. UU. (F-08); nada visto lo adapta a CDE colombianos en español | F-08, F-09 (los CDE de Santander ya reportan empresas fortalecidas y crédito logrado) | «Medimos el impacto con la misma lógica que usa el modelo SBDC, pero con datos y trámites colombianos» | «Somos el Neoserra colombiano» |
| H-3 | **Recompensas ligadas a hechos reales del acompañamiento** (no a ver videos) | v2 `13` D-09 ya lo propone; en las guías de F-18 los módulos de aprendizaje son de contenido, no de recompensas por hechos del proceso | «Los puntos salen de hechos verificables: diagnóstico hecho, compromiso cumplido, asistencia» | «Nadie premia hechos» |
| H-4 | **Quién es el cliente**: el CDE y su red (15 en Santander, F-09) comparten metodología pero, en lo que se vio, no hay software común | F-09, F-10 (cifras viejas), NV-34 | «Hay una red con el mismo método y la misma necesidad de reporte» | Número de CDE en el país hoy |
| H-5 | **Procedencia y verificación del dato** («de dónde viene este dato y quién lo confirmó») como parte visible del producto | F-29 (la literatura de resolución de entidades usa reglas deterministas primero y umbrales por niveles) | «Cada dato fusionado conserva su origen y la fusión se puede deshacer» (esto último solo en variante B) | «No se pierde nada» |

## 3. Qué copiar (patrones validados) y qué no

1. **Copiar de Neoserra:** la idea de que el reporte de impacto está **programado de antemano** y exportable (F-08), y la regla de las 5 o más horas de asesoría para contar a un cliente en el reporte de impacto (F-08, `id=n87`). Aplicado a Colombia: ver `03` N-04.
2. **Copiar de la literatura de resolución de entidades:** reglas deterministas sobre identificadores fuertes y, después, similitud con umbrales de aceptación automática, revisión manual y rechazo (F-29). Splink muestra el patrón de explicar cada coincidencia por campo (F-05); `03` N-03 adapta la idea sin dependencia nueva.
3. **No copiar:** modelos de precio por cohorte y por postulación (F-17); el CDE no tiene postulaciones ni cohortes de startups.
4. **No copiar:** la estrategia de «sistema de inversión» de Gust (F-18); no es el problema del reto.

## 4. Implicación para el pitch y para el puntaje

1. El jurado de negocio preguntará «¿por qué no usar Neoserra, Twenty o una hoja de cálculo?» (ver `22` y `18` banco de preguntas). La respuesta de tres frases debe usar las filas A, D y F de §1.
2. El puntaje simulado de Diferenciador fue 9,2 de 15 (`22` §7.1). La causa citada es que, tras recortar el Nivel 2, el diferenciador queda como combinación y no como función única. `03` propone un **hilo conductor de cero horas de programación** («cada dato dice de dónde viene y cada impacto se puede comprobar») que le da un eje a la combinación sin añadir pantallas.

## Criterio de aceptación

1. Cada fila de §1 cita al menos una fuente de `01` y dice qué no se encontró.
2. Ningún texto de este archivo afirma que una función «no existe» en el mercado.
3. Los huecos H-1 a H-5 tienen una columna «Lo que NO se puede decir» que `18` debe respetar.
