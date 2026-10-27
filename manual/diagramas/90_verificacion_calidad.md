# 90 · Verificación de calidad de los diagramas (lista de 18 puntos)

**Objetivo.** Dejar constancia, diagrama por diagrama, de cuáles puntos de `00_investigacion_metodologia.md` §6 se cumplen, cuáles no y qué corrección se hizo.

**Entradas.** Los 30 diagramas de `img/` y `src/`, `01_trazabilidad.md` y la lista V-01 a V-18.

**Método.** (1) Cada fuente `.mmd` se renderizó con Mermaid CLI 12.0.0 (Mermaid 12.2.0, Chromium 1243 preinstalado) a SVG y PNG sin errores de sintaxis. (2) Se abrió la imagen PNG de cada diagrama y se revisó V-01 a V-16 y V-18 a ojo; la tabla de abajo es el resultado final después de las correcciones de §3. Tras las correcciones 5 y 6 (tipos y descripciones) se volvieron a abrir los diagramas 11, 12 y 13; el resto de los flujogramas se regeneró con el mismo motor y se confirmó con render sin errores y con el script. (3) V-17 se comprobó con un script que lee `01_trazabilidad.md` y falla si un nombre de elemento, tabla, endpoint, evento o estado de un diagrama no está registrado: **0 errores** en los 28 diagramas Mermaid; los diagramas 62 y 70 no son Mermaid y se comprobaron a mano.

## 1. Resultado por diagrama

✓ cumple · ◐ cumple con salvedad (explicada en §1.1) · — no aplica al tipo de diagrama.

| Diagrama | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| `10_c4_contexto` | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `11_c4_contenedores` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `12_c4_modulos` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `13_c4_componentes_empresas` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `14_c4_componentes_citas` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `15_c4_componentes_eventos` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `16_c4_componentes_diagnostico_proyectos` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `17_c4_componentes_gamificacion_historial` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `18_c4_componentes_reportes_importacion` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `20_er_nucleo` | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ | — | — | ✓ | ✓ | ✓ | ✓ | — | — | ✓ | ✓ | ✓ |
| `21_er_acompanamiento` | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ | — | — | ✓ | ✓ | ✓ | ✓ | — | — | ✓ | ✓ | ◐ |
| `22_er_eventos_gamificacion` | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ | — | — | ✓ | ✓ | ✓ | ✓ | — | — | ✓ | ✓ | ✓ |
| `23_er_sistema_trazabilidad` | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ | — | — | ✓ | ✓ | ✓ | ✓ | — | — | ✓ | ✓ | ◐ |
| `30_despliegue` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | — | ✓ | ✓ | ✓ |
| `31_fallos_plan_cambio` | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ | — | ✓ | ✓ | ✓ | ✓ | — | — | ✓ | ✓ | ✓ |
| `40_secuencia_alta_empresa` | ✓ | ✓ | ✓ | ✓ | ✓ | — | ◐ | ✓ | ◐ | ◐ | ✓ | ✓ | ✓ | — | — | ✓ | ✓ | ✓ |
| `41_secuencia_fusion_deshacer` | ✓ | ✓ | ✓ | ✓ | ✓ | — | ◐ | ✓ | ◐ | ◐ | ✓ | ✓ | ✓ | — | — | ✓ | ✓ | ✓ |
| `42_secuencia_consulta_registro` | ✓ | ✓ | ✓ | ✓ | ✓ | — | ◐ | ✓ | ◐ | ◐ | ✓ | ✓ | ✓ | — | — | ✓ | ✓ | ✓ |
| `43_secuencia_recordatorio_cita` | ✓ | ✓ | ✓ | ✓ | ✓ | — | ◐ | ✓ | ◐ | ◐ | ✓ | ✓ | ✓ | — | — | ✓ | ✓ | ✓ |
| `44_secuencia_puntos_insignias` | ✓ | ✓ | ✓ | ✓ | ✓ | — | ◐ | ✓ | ◐ | ◐ | ✓ | ✓ | ✓ | — | — | ✓ | ✓ | ✓ |
| `45_secuencia_verificacion_impacto` | ✓ | ✓ | ✓ | ✓ | ✓ | — | ◐ | ✓ | ◐ | ◐ | ✓ | ✓ | ✓ | — | — | ✓ | ✓ | ✓ |
| `50_estados_cita` | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | — | ✓ | ✓ | ✓ |
| `51_estados_compromiso` | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | — | ✓ | ✓ | ✓ |
| `52_estados_evento_inscripcion` | ✓ | ✓ | ✓ | ✓ | ✓ | — | ◐ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | — | ✓ | ✓ | ✓ |
| `53_estados_recordatorio` | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | — | ✓ | ✓ | ✓ |
| `54_estados_verificacion` | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | — | ✓ | ✓ | ✓ |
| `60_seguridad_autenticacion` | ✓ | ✓ | ✓ | ✓ | ✓ | — | ◐ | ✓ | ◐ | ◐ | ✓ | ✓ | ✓ | — | — | ✓ | ✓ | ✓ |
| `61_seguridad_autorizacion_limites` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ◐ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `62_seguridad_matriz_rol_recurso` | ✓ | ✓ | ✓ | — | — | — | — | — | — | — | ✓ | ✓ | ✓ | — | — | ✓ | ✓ | ✓ |
| `70_pitch_una_diapositiva` | ◐ | ✓ | ✓ | ✓ | ✓ | — | ✓ | — | ✓ | ✓ | ✓ | ✓ | ✓ | — | — | ✓ | ◐ | ✓ |

### 1.1 Salvedades

- **V-01 en `70`:** el título visible es el de la diapositiva del deck; el SVG lleva `<title>` y `<desc>` para lectores de pantalla.
- **V-07 y V-09 en secuencias:** las respuestas (`200`, `201`, `409`, `422`, `429`, `204`) se dibujan con flecha discontinua y solo con el código de estado, porque en UML la respuesta es parte de la secuencia; la regla de C4 de una flecha unidireccional con verbo aplica a los diagramas C4.
- **V-10 en secuencias y en `61`:** mezclan contenedores y componentes del mismo contenedor (el diagrama dinámico de C4 lo permite); `61` mezcla zonas de confianza, contenedores y capas de control porque dibuja una cadena de decisiones, no una estructura.
- **V-07 en `52`:** los disparadores de cerrado, realizado y cancelación de inscripción no están definidos en el manual y se marcan «por definir» (Q-D19).
- **V-17 en `70`:** los nombres de las cajas son conceptos del pitch, no elementos técnicos del registro.
- **V-18 en `21` y `23`:** son anchos; en la vista previa de GitHub el texto se ve pequeño, pero el PNG de 3000 px de ancho es legible al abrirlo.

## 2. Elementos usados por diagrama (generado por el script de V-17)

Elementos del registro que aparecen en cada diagrama (nombres, tablas, endpoints, eventos y estados):

| Diagrama | Elementos | Cantidad |
|---|---|--:|
| `10_c4_contexto` | `Administrador`; `Coolify`; `Docente`; `Emprendedor`; `Equipo CDE`; `Estudiante consultor`; `Registro mercantil abierto (datos.gov.co)`; `Servicio de correo SMTP`; `Sistema de información del CDE` | 9 |
| `11_c4_contenedores` | `API Laravel`; `Almacenamiento local`; `Aplicación web SPA`; `Base de datos PostgreSQL`; `Planificador`; `Proxy inverso`; `Registro mercantil abierto (datos.gov.co)`; `Servicio de correo SMTP`; `Usuarios del CDE`; `Worker de cola` | 10 |
| `12_c4_modulos` | `Base de datos PostgreSQL`; `Citas`; `Diagnosticos`; `Empresas`; `Eventos`; `Eventos de dominio`; `Gamificacion`; `Historial`; `Importacion`; `Proyectos`; `Reportes`; `Seguridad` | 12 |
| `13_c4_componentes_empresas` | `API de empresas`; `Auditor::registrar()`; `Base de datos PostgreSQL`; `Búsqueda tolerante`; `Consulta al registro mercantil`; `Detección de duplicados`; `EmpresaRepository`; `Fusión de empresas`; `Normalizadores`; `Procedencia de campos`; `Registro mercantil abierto (datos.gov.co)`; `Validación de NIT` | 12 |
| `14_c4_componentes_citas` | `API de citas`; `Bandeja de notificaciones`; `Base de datos PostgreSQL`; `Empresas`; `Envío de recordatorios`; `Estados de la cita`; `Planificador`; `Programación de recordatorios`; `Proyectos`; `Registro de atención`; `Servicio de correo SMTP` | 11 |
| `15_c4_componentes_eventos` | `API de eventos`; `Asistencia manual y por QR`; `Base de datos PostgreSQL`; `Catálogo público de eventos`; `Diagnosticos`; `Empresas`; `Inscripción con cupo`; `Planificador`; `Recomendación por reglas`; `Recordatorio de eventos`; `Resumen del evento`; `Token de QR` | 12 |
| `16_c4_componentes_diagnostico_proyectos` | `API de diagnósticos`; `API de proyectos`; `Base de datos PostgreSQL`; `Compromisos del emprendedor`; `Empresas`; `Eventos de dominio`; `Planes y compromisos`; `Planificador`; `Puntaje y brecha`; `Vencimiento de compromisos` | 10 |
| `17_c4_componentes_gamificacion_historial` | `API del historial`; `Base de datos PostgreSQL`; `Escuchas de eventos`; `Eventos de dominio`; `HistorialRegistry`; `Niveles e insignias`; `Progreso del emprendedor`; `Proyección de intervenciones`; `Registro de puntos`; `Reglas de retos` | 10 |
| `18_c4_componentes_reportes_importacion` | `API de reportes`; `Almacenamiento local`; `Base de datos PostgreSQL`; `Caché de KPIs`; `Carga de importación`; `Confirmación en lotes`; `Empresas`; `Exportación CSV e impresión`; `Sinónimos de catálogo`; `Vista previa con semáforo`; `Vistas SQL de reporte` | 11 |
| `20_er_nucleo` | `ciiu_equivalencias`; `consentimientos`; `consultas_registro`; `empresa_persona`; `empresas`; `formalizacion`; `ingresos_rangos`; `personas`; `relaciones_unab`; `sectores`; `tamanos`; `usuarios` | 12 |
| `21_er_acompanamiento` | `atenciones`; `citas`; `compromisos`; `diagnostico_resultados`; `diagnosticos`; `dimensiones`; `empresas`; `personas`; `planes_accion`; `proyecto_consultores`; `proyectos_aula` | 11 |
| `22_er_eventos_gamificacion` | `asistencias`; `empresas`; `evento_sector`; `eventos`; `inscripciones`; `insignias`; `niveles`; `persona_insignias`; `personas`; `puntos_movimientos`; `retos`; `sectores` | 12 |
| `23_er_sistema_trazabilidad` | `auditoria`; `consultas_registro`; `empresas`; `fusiones`; `importacion_filas`; `importaciones`; `intervenciones`; `personas`; `recordatorios`; `resultados_impacto`; `usuarios` | 11 |
| `30_despliegue` | `Contenedores del sistema`; `Copia de respaldo externa`; `GitHub`; `Portátil de demostración`; `Portátil de respaldo`; `Punto de acceso del celular`; `Red del laboratorio`; `Registro mercantil abierto (datos.gov.co)`; `Respaldo horario`; `Servicio de correo SMTP` | 10 |
| `31_fallos_plan_cambio` | `Caché de 24 h o mensaje legible`; `F1 · Servidor del patrocinador caído`; `F14 · Un despliegue rompe la versión estable`; `F2 · Red del laboratorio caída`; `F3 · Base de datos corrupta o migración rota`; `F4 · Correo no entrega`; `Mailpit local y captura D3`; `Punto de acceso del celular y trabajo local`; `Registro mercantil no responde (propuesta)`; `Servidor local en el portátil de demostración`; `Volver a la etiqueta anterior`; `migrate:fresh --seed y luego dump.sql` | 12 |
| `40_secuencia_alta_empresa` | `API Laravel`; `Aplicación web SPA`; `Auditor::registrar()`; `Base de datos PostgreSQL`; `Detección de duplicados`; `Equipo CDE`; `GET /nit/validar`; `POST /empresas`; `Validación de NIT` | 9 |
| `41_secuencia_fusion_deshacer` | `API Laravel`; `Aplicación web SPA`; `Auditor::registrar()`; `Base de datos PostgreSQL`; `Equipo CDE`; `Fusión de empresas`; `POST /empresas/{id}/fusionar`; `POST /fusiones/{id}/deshacer` | 8 |
| `42_secuencia_consulta_registro` | `API Laravel`; `Aplicación web SPA`; `Auditor::registrar()`; `Base de datos PostgreSQL`; `Consulta al registro mercantil`; `Equipo CDE`; `POST /empresas/{id}/consulta-registro`; `POST /empresas/{id}/consulta-registro/aceptar`; `Registro mercantil abierto (datos.gov.co)` | 9 |
| `43_secuencia_recordatorio_cita` | `API Laravel`; `Aplicación web SPA`; `Base de datos PostgreSQL`; `Emprendedor`; `Envío de recordatorios`; `Equipo CDE`; `GET /notificaciones`; `POST /citas/{id}/agendar`; `POST /mi/citas`; `Planificador`; `Programación de recordatorios`; `Servicio de correo SMTP` | 12 |
| `44_secuencia_puntos_insignias` | `API Laravel`; `Aplicación web SPA`; `Base de datos PostgreSQL`; `Emprendedor`; `Escuchas de eventos`; `Eventos de dominio`; `GET /mi/progreso`; `Niveles e insignias`; `POST /asistencia/qr`; `Registro de puntos` | 10 |
| `45_secuencia_verificacion_impacto` | `API Laravel`; `API de reportes`; `Auditor::registrar()`; `Base de datos PostgreSQL`; `Equipo CDE`; `GET /reportes/impacto` | 6 |
| `50_estados_cita` | `POST /citas/{id}/agendar`; `POST /citas/{id}/cancelar`; `POST /citas/{id}/resultado`; `POST /mi/citas`; `agendada`; `cancelada`; `no_asistio`; `realizada`; `solicitada` | 9 |
| `51_estados_compromiso` | `POST /planes/{id}/compromisos`; `PUT /compromisos/{id}`; `cancelado`; `cumplido`; `en_curso`; `pendiente`; `vencido` | 7 |
| `52_estados_evento_inscripcion` | `POST /eventos`; `POST /eventos/{id}/inscribirme`; `POST /eventos/{id}/publicar`; `borrador`; `cancelado`; `cerrado`; `inscrito`; `lista_espera`; `publicado`; `realizado` | 10 |
| `53_estados_recordatorio` | `enviado`; `fallido`; `pendiente` | 3 |
| `54_estados_verificacion` | `declarado`; `por_revisar`; `verificado` | 3 |
| `60_seguridad_autenticacion` | `API Laravel`; `Aplicación web SPA`; `Auditor::registrar()`; `Base de datos PostgreSQL`; `GET /auth/me`; `POST /auth/consentimiento`; `POST /auth/login`; `POST /auth/logout`; `Usuario del CDE` | 9 |
| `61_seguridad_autorizacion_limites` | `Action con Form Request`; `Aplicación web SPA`; `Auditoría de peticiones`; `Autenticación Sanctum`; `Base de datos PostgreSQL`; `Límite de intentos`; `Policy de pertenencia`; `Proxy inverso`; `Registro mercantil abierto (datos.gov.co)`; `Respuesta de error`; `Rol (spatie)` | 11 |
| `62_seguridad_matriz_rol_recurso` | (figura propia, ver nota) | 0 |
| `70_pitch_una_diapositiva` | (figura propia, ver nota) | 0 |

Elementos del registro que **no** se dibujan: `Completitud de la ficha` (se omitió para respetar el máximo de 12 elementos del diagrama 13), `rachas` (aplazada por R3), `Mailpit` (se cita como tecnología en los diagramas 11, 14 y 30) y `GET /health` (Q-D14).

## 3. Correcciones hechas durante la revisión

| # | Hallazgo | Punto | Corrección |
|---|---|---|---|
| 1 | Texto con tipografía serif porque el tema ignoraba la fuente | V-18 | Se fijó `fontFamily` en la raíz de la configuración (Inter, con Carlito y Arial de respaldo) |
| 2 | Despliegue y seguridad en disposición horizontal: texto ilegible | V-18 | Disposición vertical (`TB`) |
| 3 | Un nodo sobrante `LGX` en la leyenda del mapa de módulos | V-05 | Eliminado |
| 4 | Leyendas sin explicar las líneas discontinuas | V-02 | Se añadió una fila «línea continua / discontinua» a la leyenda de los diagramas 12 a 18, 30, 31 y 61 |
| 5 | Componentes sin tipo explícito en el texto | V-04 | Todo elemento lleva `[Tipo · tecnología]` (Componente, Contenedor, Almacén de datos, Módulo, Sistema externo) |
| 6 | Externos y bases de datos sin descripción | V-05 | Se añadió una descripción corta a cada uno |
| 7 | Secuencias y estados sin leyenda dentro de la imagen | V-02 | Nota de leyenda al pie de cada secuencia; la notación de estados va en el título |
| 8 | El punto y coma de la leyenda de secuencias rompió la sintaxis (en Mermaid separa instrucciones) | V-18 | Se reemplazó por «·» |
| 9 | En el diagrama 53 un punto y coma partió la transición en estados falsos (`;`, `reintento`, `a`, `1,`…) | V-17, V-18 | Se reescribió la etiqueta; el script confirma 0 estados desconocidos |
| 10 | El estado de inscripción `cancelado` colisionaba con el de evento dentro de Mermaid | V-17 | Se renombró el identificador interno y se mantiene la etiqueta «cancelado» |
| 11 | Título del diagrama 40 decía que el aviso del dígito era de la variante B; en `inv/06` es opcional en A y B | V-17 | Título corregido: «propuesta de la Ronda 4» |
| 12 | Título del 45 cortado en el borde derecho | V-01, V-18 | Título acortado |
| 13 | Primer intento de la diapositiva en Mermaid: PNG de 784 px, texto de unos 12 px | V-18 | Se dibujó a mano en SVG con texto de 48 px y 6 cajas |
| 14 | Etiqueta «guía» solapada con una línea en la diapositiva | V-18 | Se ensanchó el espacio entre columnas |
| 15 | Transiciones de evento e inscripción sin disparador | V-07 | Marcadas «por definir» y registradas en Q-D19 |

## 4. Limitaciones

- La revisión visual la hizo quien dibujó los diagramas, no una persona ajena al proyecto; se recomienda una revisión cruzada de 10 minutos (S revisa lo de MP, etc.).
- Mermaid decide el trazado automáticamente: al cambiar un nombre se debe volver a mirar la imagen.
- Los contrastes se calcularon con los valores de `16_sistema_de_diseno.md` §4.1 (texto `#1B2340` sobre `#E8EDFB`, `#6B4200` sobre `#FFF4D6`, `#8F1515` sobre `#FDE8E8`, `#14532D` sobre `#E4F5EA`, blanco sobre `#16265C`); no se recalcularon en esta ronda.
- La versión de Mermaid que usa GitHub puede diferir de la 12.2.0 usada aquí (N-D3 de `99`).

## Criterio de aceptación

1. Cada diagrama tiene una fila con los 18 puntos.
2. Todo ◐ tiene explicación en §1.1.
3. Toda corrección de §3 se refleja en el diagrama actual de `img/`.
