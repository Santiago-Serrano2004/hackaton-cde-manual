# 02 · Alcance del MVP, usuarios y camino dorado

**Objetivo.** Decidir qué se construye en ~25 h con 3 personas para maximizar los 60 puntos de Funcionalidad sin sacrificar el pitch (40 puntos), definir roles, historias de usuario y el recorrido exacto de la demo.

**Entradas.** `01_requisitos.md`; `inputs/01_TyC...` §5–§8; chat (equipo de 3, stack preferido).

## 1. Decisiones

| # | Decisión | Justificación |
|---|---|---|
| D-01 | **Una sola aplicación web** (monolito modular) con 4 vistas por rol, en vez de varias apps | Con 3 personas y 25 h, cada app extra duplica autenticación, despliegue y pruebas. ISO-MA se cubre con módulos internos |
| D-02 | **Profundidad antes que amplitud en 8 módulos Must** (ver §3); todo lo demás es visión futura | Los jurados técnicos evalúan "nivel de desarrollo alcanzado" y "coherencia" (TyC §8); un recorrido completo vale más que 15 pantallas a medias |
| D-03 | **Datos sintéticos realistas desde la hora 2** | Sin datos no hay demo de dashboard, brechas ni deduplicación (`04`) |
| D-04 | La **IA/lenguaje natural (RF-29) queda fuera** | Riesgo alto, depende de servicios externos; se sustituye por filtros de brechas que responden la pregunta de investigación de CRI-10 |
| D-05 | El **diferenciador** se centra en 3 cosas demostrables: (1) *Ficha 360 + línea de tiempo* con deduplicación asistida, (2) *recomendación explicable* de oferta según perfil/historial, (3) *formación por recompensas ligada a hechos reales* del acompañamiento (completar ficha, asistir, cumplir compromisos, no solo ver videos) | Ataca DIF (15) y CRI-09; todo con reglas simples y explicables, sin ML |
| D-06 | Idioma de la interfaz: español (Colombia) | Usuarios del CDE |
| D-07 | Móvil: diseño responsivo, no app nativa | Costo/tiempo |

## 2. Roles de usuario

| Rol | Quién es | Qué necesita | Permisos clave |
|---|---|---|---|
| **Emprendedor** | Dueño/representante de una empresa atendida (comunidad UNAB o externo) | Ver su etapa, compromisos, citas, oferta; inscribirse; ganar recompensas | Solo su(s) empresa(s) y su perfil de recompensas |
| **Equipo CDE** (operador) | Personal del CDE | Gestionar empresas, citas, planes, eventos, asistencia, reportes | Lectura/escritura sobre todas las empresas; sin administración de usuarios |
| **Docente** | Profesor experto que acompaña proyectos de aula | Ver y actualizar proyectos de sus asignaturas | Sus proyectos y las empresas vinculadas (solo lectura de ficha) |
| **Estudiante consultor** | Estudiante en proyecto de aula | Registrar avances de su proyecto y planes de acción | Solo proyectos donde está asignado |
| **Administrador** | Responsable técnico/CDE | Usuarios, roles, catálogos, importaciones, auditoría | Todo, incluida auditoría |

Nota: la "matriz rol×recurso" completa está en `05`.

## 3. Alcance priorizado

### 3.1 Dentro (Must, camino dorado)
1. Autenticación/roles y auditoría (RF-25, RF-26).
2. Empresas, contactos, deduplicación, fusión, búsqueda (RF-01, 02, 03, 28).
3. Importación CSV/XLSX con vista previa (RF-15).
4. Diagnóstico de madurez y evolución (RF-05).
5. Proyectos de aula y planes de acción (RF-06, 07).
6. Citas con recordatorios automáticos (RF-08, 09).
7. Eventos/capacitaciones, recomendación, inscripción, asistencia (RF-10, 11, 12).
8. Portal del emprendedor (RF-13) + línea de tiempo (RF-14).
9. Gamificación núcleo: retos, puntos, niveles, insignias, rachas (RF-17, 18).
10. Dashboard, brechas y reporte de impacto (RF-20, 21, 22).

### 3.2 Si sobra tiempo (Should)
RF-04 completitud, RF-16 intervenciones unificadas, RF-19 clasificación, RF-23 catálogos administrables, RF-24 API documentada, RF-27 convocatoria segmentada, RNF-05 accesibilidad completa.

### 3.3 Visión futura (Won't/Could) - se menciona en el pitch
RF-29 asistente en lenguaje natural, RF-30 integración Google Workspace, WhatsApp, firma electrónica de compromisos, app móvil nativa, predicción de deserción.

### 3.4 Qué se corta primero si el reloj aprieta (orden)
1. RF-19, RF-27, RF-24 → 2. RF-16, RF-04 → 3. exportación XLSX (queda CSV) → 4. gráfica de evolución simplificada → 5. recordatorios por correo reales (queda registro simulado "enviado" visible) `PROPUESTA`.
Nunca se corta: RF-02/03, RF-14, RF-20..22, RF-17/18, RF-25/26.

## 4. Historias de usuario con criterio de aceptación

Formato: **HU-n** (rol) → Como… quiero… para… · *Aceptación* (Dado/Cuando/Entonces) · Req.

| ID | Historia | Aceptación | Req. |
|---|---|---|---|
| HU-01 | Como **operador CDE** quiero buscar una empresa por nombre, NIT o correo para ver su historial completo | Dado 497 empresas, cuando escribo "Pamaderia", entonces aparece la panadería con coincidencia aproximada y al abrirla veo la línea de tiempo en ≤ 20 s totales | RF-28, RF-14 |
| HU-02 | Como operador quiero crear una empresa y que el sistema me avise si ya existe para evitar duplicados | Dado una empresa existente con NIT 900.123.456-7, cuando creo otra con "9001234567", entonces el sistema la reconoce y ofrece abrir o fusionar | RF-02 |
| HU-03 | Como operador quiero fusionar dos fichas duplicadas sin perder historial | Cuando fusiono A en B, entonces las citas/proyectos de A aparecen en B, A queda archivada y la fusión queda en auditoría | RF-03, RF-26 |
| HU-04 | Como operador quiero importar la hoja de cálculo actual para no digitar | Dado un CSV de 509 filas, cuando lo cargo, entonces veo vista previa con filas válidas, duplicadas y con error, y confirmo la importación | RF-15 |
| HU-05 | Como operador quiero registrar un diagnóstico y ver cómo evoluciona la madurez | Dado 2 diagnósticos, entonces veo gráfica por dimensión con ambos puntos y la diferencia | RF-05 |
| HU-06 | Como **docente** quiero registrar un proyecto de aula con su equipo de consultores y área | Dado un semestre, asignatura, área y 3 estudiantes, entonces el proyecto aparece en la ficha de la empresa y en mi lista | RF-06 |
| HU-07 | Como **estudiante consultor** quiero definir compromisos del plan de acción con responsable y fecha | Cada compromiso exige responsable, fecha y estado; no se guarda sin ellos | RF-07 |
| HU-08 | Como operador quiero ver compromisos vencidos para priorizar seguimiento | Filtro "vencidos" lista solo compromisos con fecha pasada y estado ≠ cumplido | RF-07 |
| HU-09 | Como **emprendedor** quiero solicitar una cita indicando tema y franja | La solicitud queda en estado "solicitada" y visible al operador; recibo confirmación | RF-08 |
| HU-10 | Como operador quiero agendar la cita y que se recuerde sola | Al agendar, el sistema programa recordatorios (24 h y 1 h antes) y registra su envío | RF-09 |
| HU-11 | Como operador quiero registrar el resultado de la cita (notas, acuerdos) | Resultado queda en el historial y puede generar un compromiso | RF-08, RF-16 |
| HU-12 | Como operador quiero publicar un evento con cupos y fecha | El evento aparece en el catálogo y en el portal de los emprendedores relevantes | RF-10 |
| HU-13 | Como emprendedor quiero ver eventos que me convienen y por qué | En mi portal, cada recomendación muestra el motivo ("por tu sector Alimentos y tu brecha en mercadeo") | RF-10 |
| HU-14 | Como emprendedor quiero inscribirme en ≤ 3 clics | Inscripción confirmada, cupo actualizado | RF-11 |
| HU-15 | Como operador quiero registrar asistencia y ver inscritos vs. asistentes | Evento muestra N inscritos, M asistentes, no-show y lista nominal | RF-12 |
| HU-16 | Como emprendedor quiero ver el estado de mi acompañamiento y mis pendientes | Portal muestra etapa, % de avance, compromisos pendientes, próximas citas | RF-13 |
| HU-17 | Como emprendedor quiero ganar puntos al completar acciones reales | Asistir a un evento suma puntos; completar la ficha suma puntos; cumplir un compromiso suma puntos | RF-17 |
| HU-18 | Como emprendedor quiero subir de nivel y desbloquear insignias | Al llegar a 100 puntos pasa al nivel siguiente con animación y mensaje; insignia visible en perfil | RF-18 |
| HU-19 | Como emprendedor quiero mantener una racha | Participar en semanas consecutivas incrementa racha; se rompe tras 1 semana sin actividad | RF-18 |
| HU-20 | Como director del CDE quiero ver el panorama de la base por sector, tamaño, ingresos, formalización | Dashboard con filtros; cifras cuadran con la base | RF-20 |
| HU-21 | Como director quiero ver las mayores brechas de un sector | Al elegir "Alimentos", veo las dimensiones con menor puntaje promedio y empresas afectadas | RF-22 |
| HU-22 | Como director quiero un reporte de impacto exportable | Un clic genera PDF/CSV con periodo, empresas atendidas, evolución de madurez, planes cumplidos | RF-21 |
| HU-23 | Como **administrador** quiero crear usuarios y asignar roles | Usuario con rol "emprendedor" no accede a rutas del equipo (403) | RF-25 |
| HU-24 | Como administrador quiero ver quién cambió qué | Auditoría filtrable por usuario, empresa y fecha | RF-26 |
| HU-25 | Como emprendedor quiero aceptar el tratamiento de mis datos y poder solicitar mi información | Primer ingreso exige autorización; existe botón "descargar mis datos" | RNF-13 |

## 5. Camino dorado de la demo (5 minutos de pitch, ver tiempos en `09`)

Fija una **narrativa única** con una empresa protagonista sembrada: *"Panadería Dulce Hogar"* (ficticia, `PROPUESTA`), sector Alimentos, comunidad UNAB (graduado), con 2 proyectos de aula, 3 diagnósticos y compromisos vencidos.

| Paso | Qué se muestra | Duración | Requisito | Dolor/criterio que demuestra |
|---|---|---|---|---|
| 1 | Operador entra, **importa una hoja** de 509 filas → vista previa marca 12 duplicados → confirma | 40 s | RF-15, RF-02 | DOL-04, CRI-07 |
| 2 | Busca "pamaderia" → abre ficha → **línea de tiempo** completa | 30 s | RF-28, RF-14 | CRI-01 |
| 3 | Muestra **evolución de madurez** (3 diagnósticos) y **planes de acción** con vencidos | 30 s | RF-05, RF-07 | DOL-02, CRI-03 |
| 4 | **Cita**: el emprendedor la solicita desde su portal; operador agenda; se ve **recordatorio automático** | 40 s | RF-08, RF-09 | CRI-06 |
| 5 | **Evento** con recomendación explicada; emprendedor se inscribe; operador registra asistencia y ve inscritos vs. asistentes | 50 s | RF-10..12 | CRI-04, DOL-07 |
| 6 | **Gamificación**: emprendedor asiste/cumple compromiso → suma puntos → sube de nivel → insignia | 50 s | RF-17, RF-18 | CRI-09 |
| 7 | **Dashboard** y **brechas**: "mayores brechas del sector Alimentos" → **reporte de impacto** en un clic | 50 s | RF-20..22 | CRI-02, 08, 10 |
| 8 | Cierre: auditoría y roles (10 s) | 10 s | RF-25, 26 | ISO-SE |

Tiempo de demo completa ≈ 4 min 20 s. Como el pitch dura 5 min y debe cubrir también negocio y diferenciador, el pitch usa una **versión de 2 min** (pasos 2, 4, 5, 6 y 7 resumidos, ver `09` §6) y la **demo larga (≈ 8 min, con importación, fusión, planes y auditoría)** se reserva para las validaciones del CDE y las preguntas del jurado. Guion y reparto de voces en `09`.

### Datos fijos de la demo (`04` los siembra)
- Empresa protagonista, 1 emprendedor protagonista, 12 duplicados sembrados, 3 eventos futuros y 2 pasados con asistencia, 1 emprendedor con racha de 3 semanas.

## 6. Qué demuestra cada paso a los jurados técnicos

Los 3 jurados técnicos evalúan Funcionalidad (60 pts) incluyendo ISO/IEC 25010: el camino dorado toca AF (todos), ED (búsqueda/dashboard rápidos), CO (importar/exportar), CI (portal, gamificación), FI (recordatorios, recuperación), SE (roles/auditoría), MA/FL (en preguntas: arquitectura modular y Docker), PR (confirmaciones/soft delete). Evidencia en `05` y `08`.

## Criterio de aceptación de este archivo
- Cada Must del §3.1 está en al menos un paso del camino dorado o una HU: ✔ (RF-25/26 en paso 8; RF-13 en pasos 4–6; RF-05/06/07 en pasos 2–3).
- Toda HU tiene criterio Dado/Cuando/Entonces verificable.
- Tiempo del recorrido cabe en el pitch: ver `09`.
