# 01 · Fuentes, pruebas en vivo y límites de la investigación

**Objetivo.** Dejar un registro único de qué se consultó, cuándo, con qué nivel de confianza y qué quedó sin verificar, para que `02`, `03` y `04` citen fuentes por ID (`F-xx`) y nadie afirme más de lo que se comprobó.

**Entradas.** `CLAUDE.md` (jerarquía de verdad), `manual/INDEX.md`, `13_diferenciadores.md`, `20_plan_que_cabe.md`, `inputs/01_TyC_y_cronograma_CDE.md`, `inputs/02_presentacion_CDE.md`. No se usó `inputs/03_chat_grupo_whatsapp.txt`.

**Fecha de consulta de todo lo de este archivo:** 27-oct-2026 (hora de la sesión). Acceso a internet: **probado y disponible** (búsqueda web y lectura de páginas y de la API abierta de datos.gov.co).

## 1. Niveles de confianza usados en toda la carpeta

| Etiqueta | Significa |
|---|---|
| **[PRIMARIA]** | Leída directamente en la fuente oficial o en la API del propietario del dato, en esta sesión. |
| **[SECUNDARIA]** | Prensa, blog, repositorio académico o página de un proveedor que describe a otro. Sirve para orientar, no para afirmar cifras ante el jurado sin la salvedad. |
| **[PROVEEDOR]** | Página del propio proveedor sobre su producto o precio. Fiable para "qué dice que ofrece", no para "qué tal funciona". |
| **[NO VERIFICADO]** | No se pudo leer la fuente; queda en la lista de §4 y en `05` para `99_preguntas_abiertas.md`. |

## 2. Registro de fuentes

| ID | Fuente (URL) | Nivel | Qué respalda |
|---|---|---|---|
| F-01 | API abierta de datos.gov.co, conjunto «Personas Naturales, Personas Jurídicas y ESADLs» (`c82u-588k`), metadatos: `https://www.datos.gov.co/api/views/c82u-588k.json` | PRIMARIA | 36 columnas; licencia **CC BY-SA 4.0**; atribución «Confecámaras, Bogotá D.C.»; actualización mensual; última carga de datos 2-oct-2026 |
| F-02 | `https://www.datos.gov.co/resource/c82u-588k.json?...` (consultas SoQL de §3) | PRIMARIA | Conteos y formato real de los campos de la Cámara de Comercio de Bucaramanga |
| F-03 | Catálogo Socrata: `https://api.us.socrata.com/api/catalog/v1?domains=www.datos.gov.co&q=registro mercantil...` | PRIMARIA | Existe también el conjunto de establecimientos (`nb3d-v3n7`, 25 columnas) |
| F-04 | `https://dev.socrata.com/docs/app-tokens.html` | PRIMARIA | Se puede consultar sin *app token*, con límite más bajo por IP; puede devolver 429 |
| F-05 | Documentación de Splink `https://moj-analytical-services.github.io/splink/` | PRIMARIA (página) | Splink es paquete Python de vinculación probabilística (modelo Fellegi-Sunter); la página menciona *waterfall chart* y *comparison viewer*; menciona Splink 5; **no** indica licencia en esa página |
| F-06 | 1EdTech, Open Badges `https://www.1edtech.org/standards/open-badges` | PRIMARIA (página) | Open Badges 3.0: cada credencial firmada digitalmente como Verifiable Credential compatible con VC Data Model 2.0 del W3C; no indica fecha de publicación en esa página |
| F-07 | W3C, WCAG 2.2 `https://www.w3.org/TR/WCAG22/` | PRIMARIA | Recomendación W3C, versión `REC-WCAG22-20241212`; 9 criterios nuevos frente a 2.1; elimina 4.1.1 |
| F-08 | Neoserra (Outreach Systems), FAQ `https://support.outreachsystems.com/resources/help/neoserra/faq.jsp?id=n87` y `id=n416` | PROVEEDOR | CRM para organizaciones de desarrollo económico; reportes de impacto de la SBA incorporados; el *scorecard* mide empresas nuevas, empleos creados y retenidos, ventas y utilidades; exporta CSV |
| F-09 | Cámara Directa (CCB), «CDE: Empresarios en la ruta del éxito», 16-ene-2025: `https://www.camaradirecta.com/revista-directa/cde-empresarios-en-la-ruta-del-exito` | SECUNDARIA | 15 CDE en Santander (10 liderados por la CCB; 5 con aliados: UNAB, IMEBU, Alcaldía de Piedecuesta, Cajasan); red iniciada en 2018; 14.888 empresas sensibilizadas, 6.280 fortalecidas; $5.161 millones en acceso a crédito, capital semilla y recursos en especie |
| F-10 | SENA, red SBDC (nota de 2018): `https://lenteregional.com/desde-los-centros-de-desarrollo-empresarial-el-sena-impulsa-el-emprendimiento-en-las-regiones/` (6-jun-2018) y `https://www.eje21.com.co/2017/12/sena-lanza-la-red-sbdc-centros-de-desarrollo-empresarial/` | SECUNDARIA (con 8–9 años) | 117 CDE del SENA, 33 regionales, más de 550 profesionales. Cifra **vieja**; no usar como "hoy" |
| F-11 | iNNpulsa, `https://innpulsacolombia.com/cemprende/node/267` (resultado de búsqueda; no se abrió) | NO VERIFICADO | Modelo SBDC adaptado de Texas; selección de universidades y cámaras |
| F-12 | Decreto 957 de 2019 (texto en `https://www.cchuila.org/wp-content/uploads/decreto-957-de-2019.pdf`; tabla CCB en `https://www.ccb.org.co/informacion-especializada/observatorio/dinamica-empresarial/empresas-activas/tamano`) | SECUNDARIA (resumen de buscador) | Clasificación micro/pequeña/mediana/grande por ingresos por actividades ordinarias anuales, en UVT, por tres macrosectores. Umbrales en §3.4 |
| F-13 | DANE, comunicado `https://www.dane.gov.co/files/prensa/comunicados/cp-DANE-OficializaCIIURev5AC.pdf` | SECUNDARIA (resumen de buscador) | Resolución 0992 del 6-ago-2026 oficializa CIIU Rev. 5 A.C. y deroga la Resolución 2306 de 2022; plazo máximo de implementación de dos años |
| F-14 | Confecámaras, «La Supervivencia Empresarial en Colombia» (cohorte 2017 observada en 2022), vía `https://www.infobae.com/colombia/2023/05/16/en-colombia-solo-el-335-de-las-empresas-sobreviven-a-los-primeros-cinco-anos-de-existencia/` y `https://www.lafm.com.co/economia/cerca-del-34-de-las-empresas-sobreviven-despues-de-los-cinco-anos-segun-confecamaras` | SECUNDARIA | Supervivencia a 5 años: 33,5 % (98.696 de 296.896 creadas en 2017); micro 33,4 %, pequeñas 60,9 %, medianas 73,7 %, grandes 85,7 %. Las fuentes difieren en el dato para sociedades (44 % o 44,5 %) |
| F-15 | Guy et al. 2012, *Health Services Research*: `https://pubmed.ncbi.nlm.nih.gov/22091980/` | SECUNDARIA (resumen) | Metaanálisis de recordatorios por SMS en clínicas: efecto resumen de los ensayos aleatorios 1,48 (IC 95 % 1,23–1,72); alta heterogeneidad en estudios observacionales. **Es salud, no asesoría empresarial** |
| F-16 | Li, Ma y Shi 2023, *Frontiers in Psychology*: `https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2023.1253549/full` | SECUNDARIA (resumen) | Metaanálisis de gamificación en educación: 41 estudios, g = 0,822; moderadores: tipo de usuario, disciplina, principios de diseño, duración, entorno. Heterogeneidad alta |
| F-17 | AcceleratorApp `https://www.acceleratorapp.co/en/lp/incubators/` | PROVEEDOR | Planes desde US$499 al mes (facturación mensual), según su página |
| F-18 | Guías de compra de software para aceleradoras: `https://www.teachfloor.com/blog/accelerator-software`, `https://www.startupscience.io/articles/best-incubator-accelerator-software`, `https://www.acceleratorapp.co/en/blogs/best-incubator-accelerator-software` | PROVEEDOR (los publican competidores) | Criterios de compra y limitaciones atribuidas a Gust (orientado a inversión, poca gestión de cohortes) |
| F-19 | Dealroom para universidades `https://content.dealroom.co/for-universities`; StartupBlink `https://www.startupblink.com`; Syracuse sobre Startup Genome `https://nysstlc.syr.edu/startup-genome-and-the-upstate-ecosystem-map` | PROVEEDOR / SECUNDARIA | Plataformas de inteligencia de ecosistema: seguimiento de empresas de egresados, comparación con pares, mapas |
| F-20 | Twenty / EspoCRM / Frappe CRM: `https://openalternative.co/compare/espocrm/vs/twenty`, `https://openalternative.co/compare/frappe-crm/vs/twenty` | SECUNDARIA | Los tres con licencia AGPL-3.0 y autoalojables; estrellas de GitHub sin fecha (pueden estar desactualizadas) |
| F-21 | Meta, precios WhatsApp Business Platform `https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing` y resumen de Kommo `https://support.kommo.com/docs/updated-pricing-rules-for-whatsapp-business.md` | PROVEEDOR / SECUNDARIA | Cobro por mensaje desde el 1-jul-2025; plantillas de utilidad gratis dentro de la ventana de 24 h; Colombia figura entre los países con tarifas de utilidad y autenticación más altas. **No se leyó la tarifa de Colombia** |
| F-22 | SIC, Circular Externa 003 de 2025 `https://sedeelectronica.sic.gov.co/sites/default/files/normativa/Circular%20Externa%20003%20de%202025.pdf` (resultado de búsqueda; no se abrió el PDF) | NO VERIFICADO | Transferencia internacional: país adecuado, excepción del art. 26 de la Ley 1581 o declaración de conformidad |
| F-23 | MinTIC, Resolución 1519 de 2020, vía `https://www.cundinamarca.gov.co/transparencia/recursos/resolucion-1519` y `https://www.colombiacompra.gov.co/wp-content/uploads/2026/07/INFORME-ACCESIBILIDAD-WEB-2026.pdf` | SECUNDARIA | Sujetos de la Ley 1712 deben cumplir WCAG 2.1 nivel AA desde el 1-ene-2022 |
| F-24 | Algoritmo del dígito de verificación del NIT: `https://hacecuentas.com/co/validar-nit` y `https://lookuptax.com/docs/es/numero-identificacion-fiscal/guia-nit-colombia` | SECUNDARIA | Módulo 11 con pesos primos 3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71 de derecha a izquierda. **Se contrastó contra datos primarios en §3.3** |
| F-25 | Incubagraria (La Molina), `https://repositorio.lamolina.edu.pe/items/c3cac70c-496b-4070-b48a-18b49f8971cf`; UNVM `https://aacademica.org/jornadas.2024.pre.ix.congreso.de.ciencias.economicas.del.centro.de.la.republica.de.la.unvm/43`; AUGE (Costa Rica) `https://repositorio.una.ac.cr/handle/11056/26439` | SECUNDARIA | Casos de sistemas a medida y de seguimiento: solo 49,2 % de los emprendimientos 2017–2023 de Incubagraria seguía activo; AUGE usa Django y PostgreSQL |
| F-26 | HEInnovate (Comisión Europea y OCDE) `https://www.heinnovate.eu/sites/default/files/2023-06/HEInnovate_general_presentation.pdf` | SECUNDARIA (resumen) | Autoevaluación de universidades emprendedoras con dimensión de medición de impacto; no es un ranking; riesgo de sesgo por autoevaluación |
| F-27 | ISO/IEC 25010:2023 (ficha de venta) `https://webstore.ansi.org/preview-pages/ISO/preview_ISO+IEC+25010-2023.pdf` | SECUNDARIA (el texto es de pago) | Segunda edición, nueve características; nuevas: Protección (*safety*), Capacidad de interacción, Flexibilidad. **El TyC §7 ya usa esos nombres** (`inputs/01`, líneas 186–187) |
| F-28 | SENA, Fondo Emprender 2026: `https://www.eluniversal.com.co/colombia/2026/03/10/sena-dara-hasta-100-millones-a-emprendedores-en-2026-requisitos-y-fechas/` y `https://www.infobae.com/colombia/2026/03/17/mas-de-282000-millones-para-emprendedores-sena-abre-12-convocatorias-en-colombia-con-capital-semilla/` | SECUNDARIA | 12 convocatorias en 2026, bolsa cercana a $282.400 millones; montos habituales de $80 a $100 millones; inscripciones entre el 2 de marzo y abril de 2026 (**ya cerradas hoy**) |
| F-29 | Metodología de record linkage y umbrales por niveles: `https://www.rudderstack.com/blog/what-is-entity-resolution/` y `https://www.digitalapplied.com/blog/crm-data-deduplication-merge-framework-2026-methodology` | SECUNDARIA (blogs de proveedores) | Reglas deterministas sobre identificadores fuertes y luego probabilísticas; umbrales de aceptación automática, revisión manual y rechazo. La cifra «30–40 % de duplicados que se escapan» viene de un blog sin respaldo claro: **no usar** |
| F-31 | NYSBDC, «Emphasis on Results» `https://americassbdc.org/wp-content/uploads/2015/08/NYSBDC-Emphasis-on-Results.pdf` (documento de 2015, no abierto: solo el resumen del buscador) | SECUNDARIA (con 11 años) | La red del estado de Nueva York no registra el impacto económico en su sistema hasta tener la verificación del cliente. **No se comprobó que Neoserra obligue a ese flujo** |
| F-30 | k-anonimato y supresión de celdas pequeñas: `https://www.luc.edu/oira/datagovernance/smallcellsuppression/`, `https://people.csail.mit.edu/rrw/kanon-pods04.pdf` | SECUNDARIA | La práctica usa k ≤ 5 o 6; no hay un umbral legal único; k-anonimato solo no basta si todos comparten el mismo valor sensible |

## 3. Pruebas en vivo (reproducibles)

### 3.1 La API abierta responde y no exige clave
Consulta: `https://www.datos.gov.co/resource/c82u-588k.json?$limit=2`. Devolvió registros con los campos de F-01. Sin *app token* hay límite de tasa por IP (F-04).

### 3.2 Conteos de la Cámara de Comercio de Bucaramanga (datos de la carga del 2-oct-2026)
Consulta con `$where=camara_comercio='BUCARAMANGA'` y `$group=estado_matricula`:

| Estado de matrícula | Registros |
|---|---:|
| ACTIVA | 159.790 |
| CANCELADA | 245.997 |
| Cancelada por Ley 1429 | 1.260 |
| Cancelada por traslado de domicilio | 5.893 |
| Inactiva por pérdida de calidad de comerciante | 2.270 |
| Nueva por constitución por traslado | 312 |
| Total del conjunto para Bucaramanga | 415.524 |

Con `$group=organizacion_juridica`: 325.477 personas naturales; 43.216 SAS; 21.588 sociedades limitadas; 1.636 sociedades anónimas; 2.641 empresas unipersonales. Bucaramanga es la quinta cámara por número de registros (Bogotá 2.418.445; Medellín para Antioquia 760.442; Cali 566.458; Barranquilla 463.750; Bucaramanga 415.524).

**Lectura para el producto:** el conjunto trae NIT, dígito de verificación, CIIU principal y secundario, fecha de matrícula, fecha y año de última renovación y estado. **No trae municipio, tamaño ni ingresos.** Para personas naturales el campo `numero_identificacion` es la cédula (dato personal), por lo que `04` §3 propone ignorarlas.

### 3.3 Prueba del algoritmo del NIT contra datos primarios
Se tomaron tres sociedades reales del conjunto (por reglas del proyecto no se copian los nombres) y se calculó el dígito de verificación con el algoritmo de F-24 en un script de análisis ejecutado con `python3 -I` fuera del repositorio. Resultado: **3 de 3 coinciden con el dígito publicado**, y el ejemplo de F-24 (890903938 → 8) también. Conclusión: el algoritmo de F-24 es correcto para sociedades. Queda `[NO VERIFICADO]` el caso de NIT de personas naturales y de entidades extranjeras.

### 3.4 Umbrales del Decreto 957 de 2019 (F-12, secundaria)

| Macrosector | Micro hasta (UVT) | Pequeña hasta (UVT) | Mediana hasta (UVT) |
|---|---:|---:|---:|
| Manufactura | 23.563 | 204.995 | 1.736.565 |
| Servicios | 32.988 | 131.951 | 483.034 |
| Comercio | 44.769 | 431.196 | 2.160.692 |

Los valores están en UVT, no en pesos. El valor de la UVT de 2026 **no se verificó**; una presentación de Supertransporte da 49.799 pesos para 2025.

## 4. Lo que no se pudo verificar (pasa a `05` y de allí a `99`)

| ID | Afirmación pendiente | Por qué quedó así |
|---|---|---|
| NV-29 | Detalles de uso de `wa.me` («click to chat») con mensaje prellenado | La página de ayuda de WhatsApp devolvió solo el título |
| NV-30 | Tarifa de Meta para Colombia por mensaje de utilidad | No se leyó la tabla de tarifas |
| NV-31 | Si el Decreto 957 de 2019 fue modificado después | Solo hubo resúmenes; verificar en el normograma de Función Pública |
| NV-32 | Valor de la UVT de 2026 | Sin fuente consultada |
| NV-33 | Texto de la Resolución 0992 de 2026 (CIIU Rev. 5 A.C.) y fecha de publicación en el Diario Oficial | Solo comunicado a través de buscador |
| NV-34 | Cuántos CDE operan hoy en Colombia y qué software usan | Solo cifras de 2017–2018 (SENA) y de enero de 2025 para Santander |
| NV-35 | Precios de Neoserra, Gust, Visible, Teachfloor y Dealroom | Sin cifras públicas leídas, salvo AcceleratorApp (F-17) |
| NV-36 | Tratamiento de un proveedor de IA como «encargado» frente a «transferencia» en la Ley 1581 | La búsqueda no devolvió fuente |
| NV-37 | Implementación de firma de Open Badges 3.0 (librerías, gestión de llaves) | Solo se leyó la página de estándar, no la especificación técnica |
| NV-38 | Efecto de los recordatorios en citas de **asesoría empresarial** | Solo hay evidencia en salud (F-15) |
| NV-39 | Si el CDE de la UNAB registra hoy NIT en las 497 empresas | No está en `inputs/`; ver `05` pregunta Q-30 |
| NV-41 | Qué revisión de la CIIU (Rev. 4 A.C. u otra) usan los códigos del conjunto abierto | Los códigos vistos tienen cuatro dígitos; no se leyó documentación del conjunto que lo diga |
| NV-40 | Quién es titular de la propiedad intelectual de lo construido en la hackatón | El TyC de `inputs/` no contiene cláusula alguna sobre propiedad intelectual (búsqueda de «propiedad», «derechos», «licencia», «titular», «cesión»); ver `05` |

Páginas que fallaron en esta sesión: `faq.whatsapp.com` (contenido truncado), `oas.org` (HTTP 403), `sena.edu.co` (solo título), `rues.org.co` (solo nombre). Ninguna cifra de este archivo depende de ellas.

## 5. Pasos para mantener este registro

1. Cada vez que otro archivo cite una cifra o una norma, usa el ID `F-xx` y el nivel de confianza.
2. Si una fuente [SECUNDARIA] se va a decir en voz alta en el pitch, se vuelve a abrir la fuente primaria o se dice «según la prensa» (ver `03` §7).
3. Cualquier fila nueva en §4 se copia a `99_preguntas_abiertas.md` con pregunta, motivo, opciones, recomendación y decisor (formato en `05`).

## Criterio de aceptación

1. Todas las fuentes de `02`, `03` y `04` aparecen aquí con ID, URL y nivel.
2. Las consultas de §3.2 se pueden repetir con la URL y dan los mismos órdenes de magnitud (el conjunto se actualiza cada mes, así que los números exactos cambian).
3. Cada fila de §4 tiene destino en `05`.
