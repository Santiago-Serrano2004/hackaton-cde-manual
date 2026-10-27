# 21 · Microcopy de la interfaz (Ronda 3, F21)

**Objetivo.** Todos los textos de la interfaz, listos para copiar, organizados por pantalla y con una clave estable (`pantalla.elemento`). Cubre etiquetas, estados vacíos, errores, confirmaciones, correos de recordatorio, notificaciones y mensajes de gamificación.

**Entradas.** `06_ux_gamificacion.md` §2 (pantallas E1–E15, M1–M8, D1–D3), `16_sistema_de_diseno.md`, `21_contenido_formacion.md`, `tareas/T-10..T-46`, `20_plan_que_cabe.md`.

**Alcance.** Se incluyen textos de pantallas que existen en A o B (`20`). Las marcadas **[B]** pertenecen a opciones de B; las marcadas **[futuro]** son de funciones aplazadas y no se cargan.

## 1. Reglas de tono y lenguaje

1. **Persona emprendedora (M1–M8):** tuteo («tú»), cercano y profesional. Frases de ≤ 18 palabras. Verbos en imperativo amable en botones («Solicitar cita»).
2. **Equipo CDE, docente, estudiante y administración (E, D):** neutro e impersonal, sin tuteo («Guardar», «Agendar»); mensajes de sistema en tercera persona («No se pudo guardar»).
3. **Lenguaje inclusivo sin símbolos:** no usar «@», «x», «e» ni barras. Preferir sustantivos colectivos y construcciones neutras: «equipo», «persona emprendedora», «quien asiste», «Te damos la bienvenida». No usar adjetivos de género para dirigirse al usuario («bienvenido/a» → «Te damos la bienvenida»). Si se conoce el nombre, usarlo: «Hola, Marcela».
4. **Errores:** decir qué pasó, por qué (si se sabe) y qué hacer. Nunca culpar a la persona. Sin códigos técnicos en pantalla.
5. **Puntos y logros:** celebrar hechos reales («Cumpliste tu compromiso»), no clics. Sin comparaciones que desmotiven.
6. **Cifras y fechas:** formato colombiano: `1.000` para miles, `,` decimal, fechas `29 oct 2026` y horas `3:00 p. m.`.
7. **Mayúsculas:** solo la primera palabra en botones y títulos («Nueva empresa»).
8. **Longitud máxima:** botón ≤ 3 palabras; título ≤ 6; toast ≤ 90 caracteres; asunto de correo ≤ 60 caracteres.
9. **Datos sintéticos:** la demo muestra siempre el banner `GLOBAL.demo_banner`.

## 2. Textos globales

| Clave | Texto |
|---|---|
| `GLOBAL.app_nombre` | CDE · Gestión del acompañamiento `PROPUESTA` (el nombre del producto lo decide PA-25) |
| `GLOBAL.demo_banner` | Datos sintéticos de demostración. Ninguna persona ni empresa es real. |
| `GLOBAL.guardar` | Guardar |
| `GLOBAL.cancelar` | Cancelar |
| `GLOBAL.confirmar` | Confirmar |
| `GLOBAL.volver` | Volver |
| `GLOBAL.cerrar` | Cerrar |
| `GLOBAL.editar` | Editar |
| `GLOBAL.buscar` | Buscar |
| `GLOBAL.filtrar` | Filtrar |
| `GLOBAL.limpiar_filtros` | Limpiar filtros |
| `GLOBAL.ver_mas` | Ver más |
| `GLOBAL.exportar_csv` | Descargar CSV |
| `GLOBAL.imprimir` | Imprimir |
| `GLOBAL.cargando` | Cargando… |
| `GLOBAL.salir` | Cerrar sesión |
| `GLOBAL.omitir_contenido` | Saltar al contenido principal |
| `GLOBAL.pagina` | Página {n} de {total} |
| `GLOBAL.resultados` | {n} resultados |
| `GLOBAL.sin_resultados` | No encontramos resultados. Prueba con otra palabra o quita algún filtro. |

## 3. Inicio de sesión y consentimiento (T-10, T-40, T-46)

| Clave | Texto |
|---|---|
| `LOGIN.titulo` | Ingresa a tu cuenta |
| `LOGIN.correo` | Correo electrónico |
| `LOGIN.clave` | Contraseña |
| `LOGIN.boton` | Ingresar |
| `LOGIN.error_credenciales` | El correo o la contraseña no coinciden. Revisa los datos e inténtalo de nuevo. |
| `LOGIN.error_bloqueo` | Hiciste muchos intentos. Espera un minuto y vuelve a intentarlo. |
| `LOGIN.sesion_expirada` | Tu sesión terminó por seguridad. Ingresa de nuevo para continuar. |
| `M1.titulo` | Antes de empezar: tus datos |
| `M1.cuerpo` | Usamos tu información para acompañar a tu negocio, recordarte citas y mostrarte la oferta del CDE que te conviene. Puedes pedir una copia o la corrección de tus datos cuando quieras. Este texto es un borrador de demostración y no es el aviso legal definitivo. |
| `M1.casilla` | Autorizo el tratamiento de mis datos para estas finalidades. |
| `M1.boton` | Acepto y continúo |
| `M1.error_sin_aceptar` | Para continuar necesitamos tu autorización. |

## 4. Equipo CDE: inicio, empresas, fichas y duplicados (E1–E5, T-11..T-15)

| Clave | Texto |
|---|---|
| `E1.titulo` | Panel del día |
| `E1.vencidos` | Compromisos vencidos |
| `E1.citas_hoy` | Citas de hoy |
| `E1.solicitudes` | Solicitudes nuevas |
| `E1.vacio_citas` | Hoy no hay citas agendadas. |
| `E2.titulo` | Empresas |
| `E2.buscar_ph` | Buscar por nombre, NIT o correo |
| `E2.nueva` | Nueva empresa |
| `E2.importar` | Importar CSV |
| `E2.vacio` | Aún no hay empresas. Crea la primera o importa tu hoja de cálculo. |
| `E2.chip_incompleta` | Ficha incompleta |
| `E3.tab_linea` | Línea de tiempo |
| `E3.tab_diag` | Diagnósticos |
| `E3.tab_proy` | Proyectos |
| `E3.tab_planes` | Planes |
| `E3.tab_citas` | Citas |
| `E3.tab_eventos` | Eventos |
| `E3.tab_contactos` | Contactos |
| `E3.linea_vacia` | Esta empresa todavía no tiene historial. Cada cita, diagnóstico o compromiso aparecerá aquí. |
| `E3.completitud` | Ficha completa al {n} % |
| `E4.titulo_nueva` | Nueva empresa |
| `E4.razon_social` | Razón social |
| `E4.nit` | NIT |
| `E4.sector` | Sector |
| `E4.tamano` | Tamaño |
| `E4.municipio` | Municipio |
| `E4.dup_exacto` | Ya existe una empresa con ese NIT o correo. |
| `E4.dup_probable` | Posible duplicado: {nombre} (parecido {pct} %). |
| `E4.dup_abrir` | Abrir la existente |
| `E4.dup_distinta` | Es una empresa distinta |
| `E4.dup_fusionar` | Fusionar |
| `E4.guardada` | Empresa guardada. |
| `E5.titulo_modal` | Fusionar empresas |
| `E5.explicacion` | Se moverá todo el historial de {origen} a {destino}. {origen} quedará archivada. |
| `E5.boton` | Fusionar empresas |
| `E5.hecho` | Empresas fusionadas. El historial quedó en {destino}. |
| `E5.deshacer` **[B]** | Deshacer |
| `E5.lado_a_lado` **[B]** | Comparar lado a lado |
| `E5.error_misma` | No se puede fusionar una empresa consigo misma. |
| `E5.error_archivada` | Una de las empresas ya está archivada. |
| `BUSQUEDA.placeholder_ctrlk` **[B]** | Busca empresas, eventos o personas |
| `BUSQUEDA.atajo` **[B]** | Ctrl + K |
| `BUSQUEDA.sin_resultados` | No encontramos «{q}». Revisa la ortografía o busca por NIT. |
| `BUSQUEDA.aprox` | Resultado aproximado |

## 5. Importación (E6, T-14)

| Clave | Texto |
|---|---|
| `E6.titulo` | Importar empresas |
| `E6.paso1` | 1. Sube tu archivo CSV |
| `E6.plantilla` | Descargar la plantilla |
| `E6.ayuda` | Usa la plantilla con las columnas indicadas. Si tu archivo es de Excel, guárdalo como CSV UTF-8. |
| `E6.paso2` | 2. Revisa la vista previa |
| `E6.resumen` | {validas} válidas · {duplicadas} posibles duplicadas · {errores} con error |
| `E6.semaforo_verde` | Nueva |
| `E6.semaforo_amarillo` | Posible duplicado |
| `E6.semaforo_rojo` | Con error |
| `E6.paso3` | 3. Confirma la importación |
| `E6.confirmar` | Importar {n} empresas |
| `E6.progreso` | Importando… {n} de {total} |
| `E6.final` | Listo: {creadas} creadas, {rechazadas} rechazadas. |
| `E6.descargar_errores` | Descargar filas con error |
| `E6.error_formato` | No pudimos leer el archivo. Verifica que sea CSV con codificación UTF-8. |
| `E6.error_columnas` | Faltan columnas: {lista}. Descarga la plantilla para ver cuáles son. |

## 6. Diagnósticos, proyectos y planes (E7, E8, D1–D3, T-41, T-42)

| Clave | Texto |
|---|---|
| `E7.titulo` | Diagnóstico de madurez |
| `E7.nuevo` | Nuevo diagnóstico |
| `E7.evolucion` | Evolución por dimensión |
| `E7.brecha` | Brecha: {n} puntos |
| `E7.vacio` | Esta empresa aún no tiene diagnósticos. Registra el primero para ver su evolución. |
| `E7.cambio_pos` | +{n} desde el diagnóstico anterior |
| `E7.cambio_neg` | {n} desde el diagnóstico anterior |
| `E8.titulo` | Proyectos y planes |
| `E8.nuevo_proyecto` | Nuevo proyecto de aula |
| `E8.nuevo_compromiso` | Nuevo compromiso |
| `E8.filtro_vencidos` | Solo vencidos |
| `E8.compromiso_responsable` | Responsable |
| `E8.compromiso_fecha` | Fecha límite |
| `E8.compromiso_estado` | Estado |
| `E8.marcar_cumplido` | Marcar como cumplido |
| `E8.cumplido_ok` | Compromiso cumplido. Se sumaron {pts} puntos a {nombre}. |
| `E8.error_sin_responsable` | Indica quién es responsable del compromiso. |
| `E8.error_sin_fecha` | Indica la fecha límite del compromiso. |
| `E8.vacio` | No hay compromisos todavía. Crea el primero con responsable y fecha. |
| `D1.titulo` | Mis proyectos |
| `D1.vacio` | No tienes proyectos asignados este semestre. |

## 7. Citas y recordatorios (E9, M4, T-20..T-22)

| Clave | Texto |
|---|---|
| `E9.titulo` | Citas |
| `E9.tab_solicitadas` | Solicitadas |
| `E9.tab_agendadas` | Agendadas |
| `E9.tab_realizadas` | Realizadas |
| `E9.agendar` | Agendar |
| `E9.fecha_hora` | Fecha y hora |
| `E9.asesor` | Persona asesora |
| `E9.agendada_ok` | Cita agendada. Se enviarán dos recordatorios. |
| `E9.resultado` | Registrar resultado |
| `E9.notas` | Notas y acuerdos |
| `E9.cancelar` | Cancelar cita |
| `E9.cancelar_confirma` | ¿Cancelar esta cita? Se avisará a la persona que la solicitó. |
| `E9.vacio_solicitadas` | No hay solicitudes pendientes. |
| `M4.titulo` | Mis citas |
| `M4.solicitar` | Solicitar cita |
| `M4.tema` | ¿Sobre qué quieres hablar? |
| `M4.franja` | ¿Cuándo te queda mejor? |
| `M4.modalidad` | Presencial o virtual |
| `M4.enviada` | Recibimos tu solicitud. El equipo te confirmará la fecha por correo. |
| `M4.proxima` | Próxima cita: {fecha} a las {hora} |
| `M4.vacio` | No tienes citas próximas. Solicita una cuando la necesites. |
| `M4.estado_solicitada` | Solicitada |
| `M4.estado_agendada` | Agendada |
| `M4.estado_realizada` | Realizada |
| `M4.estado_cancelada` | Cancelada |

## 8. Eventos, oferta e inscripción (E10, M5, T-23..T-25)

| Clave | Texto |
|---|---|
| `E10.titulo` | Eventos y capacitaciones |
| `E10.nuevo` | Nuevo evento |
| `E10.publicar` | Publicar |
| `E10.cupo` | Cupo |
| `E10.inscritos` | {n} inscripciones de {cupo} cupos |
| `E10.asistencia` | Registrar asistencia |
| `E10.qr` | Mostrar código QR |
| `E10.resumen` | {insc} inscripciones · {asis} asistencias · {no} sin asistir |
| `E10.cupo_lleno` | El cupo está lleno. |
| `E10.asistencia_ok` | Asistencia registrada para {nombre}. |
| `M5.titulo` | Para ti |
| `M5.motivo` | Te lo recomendamos porque {motivo}. |
| `M5.motivo_sector` | tu negocio es del sector {sector} |
| `M5.motivo_brecha` | tu mayor brecha es {area} |
| `M5.motivo_etapa` | estás en la etapa «{etapa}» |
| `M5.inscribirme` | Inscribirme |
| `M5.inscrito_ok` | Tu inscripción en «{evento}» quedó confirmada. Te recordaremos antes de que empiece. |
| `M5.lista_espera` | El cupo está lleno. Quedaste en lista de espera. |
| `M5.cancelar_insc` | Cancelar inscripción |
| `M5.vacio` | Por ahora no hay eventos que se ajusten a tu perfil. Vuelve pronto. |

## 9. Portal del emprendedor y gamificación (M2, M3, M6, M7, T-43, T-44, T-47a)

| Clave | Texto |
|---|---|
| `M2.saludo` | Hola, {nombre} |
| `M2.etapa` | Vas en la etapa «{etapa}» |
| `M2.avance` | {n} % de tu camino |
| `M2.siguiente` | Tu próximo paso: {paso} |
| `M2.puntos` | {n} puntos · Nivel {nivel}: {nombre_nivel} |
| `M2.falta` | Te faltan {n} puntos para el nivel {nivel}. |
| `M2.vacio_paso` | Todo al día por ahora. El equipo te propondrá un nuevo paso en tu próxima sesión. |
| `M3.titulo` | Mis pendientes |
| `M3.avisar` | Avisar al equipo que lo terminé |
| `M3.avisar_ok` | Listo. El equipo revisará y marcará tu compromiso. |
| `M3.vence` | Vence el {fecha} |
| `M3.vencido` | Venció el {fecha}. Habla con el equipo para reprogramarlo. |
| `M3.vacio` | No tienes compromisos pendientes. |
| `M6.titulo` | Mi empresa |
| `M6.completitud` | Tu ficha está al {n} %. |
| `M6.pista` | Completa tu ficha y gana {pts} puntos. |
| `M6.guardado` | Cambios guardados. |
| `M7.titulo` | Mis logros |
| `M7.insignias_vacio` | Aún no tienes insignias. La primera llega al completar tu ficha. |
| `M7.proximas` | Próxima insignia: {insignia} |
| `M7.misiones` | Misiones |
| `M7.proximamente` | Próximamente |
| `M8.titulo` | Mis datos |
| `M8.descargar` | Descargar mis datos |
| `M8.corregir` | Solicitar corrección |
| `M8.corregir_ok` | Recibimos tu solicitud. El equipo la revisará. |
| `GAM.punto_toast` | +{pts} · {motivo} |
| `GAM.motivo.FICHA_BASICA` | Completaste tu ficha básica |
| `GAM.motivo.ASISTIR_EVENTO` | Asististe a «{evento}» |
| `GAM.motivo.COMPROMISO_CUMPLIDO` | Cumpliste tu compromiso a tiempo |
| `GAM.motivo.COMPROMISO_TARDE` | Cerraste tu compromiso. Cumplir a tiempo suma más |
| `GAM.motivo.CITA_REALIZADA` | Asististe a tu cita |
| `GAM.motivo.DIAGNOSTICO` | Completaste tu diagnóstico |
| `GAM.nivel_sube` | ¡Subiste al nivel {n}: {nombre}! |
| `GAM.nivel.2` | Brote: ya germinó tu camino. |
| `GAM.nivel.3` | Constructor: estás levantando bases sólidas. |
| `GAM.nivel.4` | Impulsor: tu constancia se nota. |
| `GAM.nivel.5` | Líder: otros pueden aprender de ti. |
| `GAM.nivel.6` | Referente: llegaste a la cima del camino. |
| `GAM.insignia_nueva` | Nueva insignia: {nombre} |
| `GAM.insignia.PRIMER_PASO` | Primer paso: completaste tu ficha básica. |
| `GAM.insignia.CUMPLIDOR` | Cumplidor: cinco compromisos cumplidos a tiempo. |
| `GAM.insignia.APRENDIZ` | Aprendiz: tres capacitaciones completadas. |
| `GAM.cierre_demo` | Cumpliste «{compromiso}»: +25 puntos, nivel 4 e insignia Cumplidor. |
| `GAM.sin_puntos_repetidos` | Este logro ya estaba registrado. No se suman puntos dos veces. |
| `GAM.tope_mes` | Alcanzaste el máximo de puntos de este reto este mes. Sigue con los demás. |
| `GAM.reducir_movimiento` | La animación está desactivada porque tu dispositivo pide menos movimiento. |
| `GAM.racha` **[futuro]** | Llevas {n} semanas seguidas. |
| `RUTA.nodo_cumplido` **[B]** | Etapa lograda |
| `RUTA.nodo_actual` **[B]** | Estás aquí |
| `RUTA.nodo_pendiente` **[B]** | Siguiente |

## 10. Dashboard, brechas y reporte (E11–E13, T-16, T-45)

| Clave | Texto |
|---|---|
| `E11.titulo` | Panorama de empresas |
| `E11.por_sector` | Empresas por sector |
| `E11.por_tamano` | Empresas por tamaño |
| `E11.por_formalizacion` | Estado de formalización |
| `E11.completitud` | Fichas con sector y tamaño: {n} % |
| `E11.vacio` | Aún no hay datos para mostrar con estos filtros. |
| `E12.titulo` | Brechas |
| `E12.elige_sector` | Elige un sector |
| `E12.mayores` | Mayores brechas del sector {sector} |
| `E12.empresas_afectadas` | {n} empresas con brecha en {dimension} |
| `E12.ver_lista` | Ver empresas |
| `E12.sin_diagnosticos` | No hay diagnósticos en este sector todavía. |
| `E13.titulo` | Reporte de impacto |
| `E13.periodo` | Periodo |
| `E13.generar` | Generar reporte |
| `E13.descargar` | Descargar CSV |
| `E13.imprimir` | Imprimir o guardar como PDF |
| `E13.generado` | Reporte generado con datos al {fecha}. |

## 11. Administración y auditoría (E15, T-10b)

| Clave | Texto |
|---|---|
| `E15.titulo` | Administración |
| `E15.auditoria` | Auditoría |
| `E15.filtro_usuario` | Usuario |
| `E15.filtro_fecha` | Fecha |
| `E15.antes` | Antes |
| `E15.despues` | Después |
| `E15.vacio` | No hay registros con esos filtros. |
| `E15.demo_reiniciar` | Reiniciar datos de demostración |
| `E15.demo_confirma` | Se borrarán los datos actuales y se cargarán los de demostración. Escribe REINICIAR para continuar. |
| `E15.demo_ok` | Datos de demostración restaurados. |

## 12. Errores y estados del sistema

| Clave | Cuándo | Texto |
|---|---|---|
| `ERR.401` | Sin sesión | Tu sesión terminó. Ingresa de nuevo para continuar. |
| `ERR.403` | Sin permiso | No tienes permiso para ver esto. Si crees que es un error, escribe al equipo del CDE. |
| `ERR.404` | No existe | No encontramos lo que buscas. Puede haberse movido o eliminado. |
| `ERR.409` | Conflicto | Otra persona cambió esto antes que tú. Actualiza la página e inténtalo de nuevo. |
| `ERR.422` | Validación | Revisa los campos marcados. |
| `ERR.429` | Demasiados intentos | Hiciste muchas solicitudes seguidas. Espera un momento. |
| `ERR.500` | Falla del servidor | Algo salió mal de nuestro lado. Ya quedó registrado; inténtalo de nuevo en unos minutos. |
| `ERR.red` | Sin conexión | No hay conexión. Tus cambios no se han guardado; reintenta cuando vuelva. |
| `ERR.obligatorio` | Campo vacío | Este campo es obligatorio. |
| `ERR.correo` | Correo inválido | Escribe un correo válido, por ejemplo nombre@ejemplo.com. |
| `ERR.telefono` | Teléfono inválido | Escribe entre 7 y 15 dígitos. |
| `ERR.fecha_pasada` | Fecha vencida | La fecha no puede ser anterior a hoy. |
| `ERR.fecha_orden` | Fin < inicio | La fecha final no puede ser anterior a la inicial. |
| `ERR.nit` | NIT inválido | Revisa el NIT: solo números, con o sin dígito de verificación. |
| `ERR.cupo` | Cupo < 1 | El cupo debe ser de al menos 1 persona. |

## 13. Correos y notificaciones (T-21)

Los correos van a Mailpit en la demo (`GLOBAL.demo_banner` en el pie). Remitente `PROPUESTA`: «CDE UNAB · Acompañamiento». Todos terminan con: «Este mensaje es de demostración y fue enviado a un buzón de pruebas.»

| Clave | Asunto | Cuerpo |
|---|---|---|
| `MAIL.cita_agendada` | Tu cita con el CDE está agendada | Hola, {nombre}. Tu cita sobre {tema} es el {fecha} a las {hora} ({modalidad}). Si no puedes asistir, avísanos con tiempo respondiendo este correo. |
| `MAIL.cita_24h` | Recordatorio: tu cita es mañana | Hola, {nombre}. Mañana a las {hora} tienes tu cita sobre {tema} con {asesor}. Te esperamos. |
| `MAIL.cita_1h` | Recordatorio: tu cita es en una hora | Hola, {nombre}. En una hora, a las {hora}, empieza tu cita sobre {tema}. |
| `MAIL.cita_cancelada` | Tu cita fue cancelada | Hola, {nombre}. La cita del {fecha} fue cancelada. Puedes solicitar otra desde «Mis citas». |
| `MAIL.evento_inscripcion` | Tu inscripción en {evento} está confirmada | Hola, {nombre}. Te esperamos el {fecha} a las {hora} en {lugar}. Si no puedes ir, cancela tu inscripción para liberar el cupo. |
| `MAIL.evento_recordatorio` | Mañana es {evento} | Hola, {nombre}. Mañana a las {hora} empieza {evento} en {lugar}. |
| `MAIL.compromiso_vence` | Tu compromiso vence pronto | Hola, {nombre}. El compromiso «{compromiso}» vence el {fecha}. Si lo terminaste, avísale al equipo desde «Mis pendientes». |
| `MAIL.compromiso_vencido` | Tu compromiso venció | Hola, {nombre}. El compromiso «{compromiso}» venció el {fecha}. Habla con el equipo para reprogramarlo. |

| Clave | Notificación en la bandeja (E9 / campana) |
|---|---|
| `NOTI.cita_solicitada` | Nueva solicitud de cita de {empresa}. |
| `NOTI.compromiso_avisado` | {nombre} avisó que terminó «{compromiso}». |
| `NOTI.recordatorio_fallido` | No se pudo enviar un recordatorio a {nombre}. Se reintentará. |
| `NOTI.evento_lleno` | El evento «{evento}» llegó a su cupo. |

## 14. Accesibilidad de los textos

1. Todo ícono sin texto lleva `aria-label` con la clave de §2 o del bloque correspondiente (por ejemplo, la lupa: `GLOBAL.buscar`).
2. Los toasts de puntos y de nivel usan `role="status"` y no desaparecen antes de 6 segundos.
3. El color nunca es el único indicador del semáforo de importación: cada estado lleva texto (`E6.semaforo_*`).
4. Los textos alternativos de gráficas describen la conclusión («Finanzas subió de 35 a 71»), no el tipo de gráfica.

## 15. Cadenas pendientes de decisión

| Cadena | Pendiente | Decide |
|---|---|---|
| `GLOBAL.app_nombre` | Nombre del producto (PA-25) | Los tres |
| `M1.cuerpo` | Texto legal definitivo de la política de datos (Ley 1581; `04` §6, PA-18) | CDE / asesoría jurídica de la UNAB |
| Remitente de correos | Cuenta SMTP del CDE (PA-03) | CDE |
| Términos «cámara de comercio», «RUT», «matrícula mercantil» en `21_contenido_formacion.md` | Revisión por un asesor del CDE | CDE |

## Criterio de aceptación

1. Cada pantalla de `20` (A y B) tiene sus cadenas con clave estable; las de funciones aplazadas están marcadas **[futuro]**.
2. Ningún texto usa «@», «x», barras ni «a/o» para el género.
3. Cada error de §12 dice qué hacer.
4. Los correos de recordatorio (24 h y 1 h) y la confirmación de agenda existen (T-21).
