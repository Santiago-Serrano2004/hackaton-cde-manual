# 21 · Casos de demostración (Ronda 3, F21)

**Objetivo.** Siete empresas **sintéticas** con historiales verosímiles que el `DemoSeeder` (T-30) carga como casos nombrados, además de las 497 generadas por factories. Sostienen el relato del pitch: una empresa protagonista, una emprendedora protagonista y seis casos que muestran variedad de sector, tamaño y brecha.

**Entradas.** `04_datos.md` §7, `18_pitch_v2.md` §5, `21_contenido_formacion.md`, `21_catalogos.csv`.

**Reglas.** Todo es ficticio (RNF-14). Los NIT usan el prefijo reservado `999` `PROPUESTA` y los correos `@ejemplo.test`. Las fechas son de 2026; el «hoy» de la demo es el 29-oct-2026. Las cifras de totales de `04` §7.1 **no cambian**: estos casos forman parte de los 497, las 569 atenciones y las demás cifras. Los códigos son los de `21_catalogos.csv`.

## 1. Resumen

| # | Empresa | Sector | Tamaño | Relación UNAB | Formalización | Papel en el pitch |
|---|---|---|---|---|---|---|
| C1 | Panadería Dulce Hogar S.A.S. | S01 Alimentos | MIC | R2 Graduado | F3 | **Protagonista**: línea de tiempo, evolución y gamificación |
| C2 | Papelería El Estudiante | S02 Comercio | MIC | R4 Externo | F2 | Caso de formalización parcial |
| C3 | Asesorías Contables Norte | S03 Servicios | PEQ | R1 Estudiante | F3 | Proyecto de aula en finanzas |
| C4 | Confecciones La Aguja | S04 Manufactura e Industrial | PEQ | R4 Externo | F4 | Matrícula vencida; compromisos vencidos |
| C5 | Hostal Mirador del Cacique | S05 Turismo | MIC | R3 Colaborador | F1 | Informal; ficha incompleta |
| C6 | Tejidos Chicamocha | S16 Artesanías | MIC | R4 Externo | F2 | Brecha en mercadeo; sin tamaño ni ingresos registrados |
| C7 | Datos al Día S.A.S. | S10 Tecnología y TIC | MED | R2 Graduado | F3 | Empresa «madura» con tres diagnósticos |

Los nombres de empresa, personas y lugares son inventados; «Cacique» y «Chicamocha» son referencias geográficas genéricas y no designan ningún negocio real conocido por el equipo `[NO VERIFICADO]`: si el CDE conoce un negocio con ese nombre, se renombra.

## 2. C1 · Panadería Dulce Hogar S.A.S. (protagonista)

- **Datos:** NIT 999.100.200-1; municipio Bucaramanga; inicio de actividad 2022-03-01; ingresos I2; ficha completa (completitud 100 %).
- **Personas:** Marcela Rojas (propietaria, emprendedora con acceso); Julio Prada (contacto, panadero).
- **Duplicado sembrado:** «Pamaderia Dulce Hogar» (nombre con error de tipeo) y «Panaderia Dulce Hogar SAS» con NIT `9001002001` (otro formato): puntuación esperada 0,76 y 0,95 (`12` §2.5, `18` §5).
- **Línea de tiempo (21 hitos, 9 tipos):**

| # | Fecha | Tipo | Hito |
|---|---|---|---|
| 1 | 2026-02-10 | Atención | Primera asesoría (T1) |
| 2 | 2026-02-10 | Puntos | Ficha básica completa: +40 · insignia *Primer paso* |
| 3 | 2026-02-17 | Diagnóstico | Diagnóstico 1: total 48 (mercadeo 55, finanzas 35, operaciones 60, formalización 70) · +50 |
| 4 | 2026-02-24 | Plan | Plan 1 con 6 compromisos |
| 5 | 2026-03-03 | Proyecto | Proyecto de aula «Mercadeo II», 2026-1, 3 estudiantes consultores |
| 6 | 2026-03-12 | Cita | Cita de finanzas realizada · +20 |
| 7 | 2026-03-20 | Evento | Inscripción al taller de marketing digital |
| 8 | 2026-03-27 | Asistencia | Asistió al taller de marketing digital · +30 |
| 9 | 2026-04-02 | Compromiso | «Publicar en 2 canales» cumplido a tiempo · +25 |
| 10 | 2026-04-15 | Compromiso | «Definir cliente ideal» cumplido a tiempo · +25 |
| 11 | 2026-05-05 | Compromiso | «Reunir recibos del mes» cumplido a tiempo · +25 |
| 12 | 2026-05-14 | Asistencia | Sesión de la Ruta de Acompañamiento · +30 |
| 13 | 2026-05-28 | Diagnóstico | Diagnóstico 2: finanzas 58, mercadeo 50 (cae) · +50 |
| 14 | 2026-06-10 | Proyecto | Proyecto de mercadeo finalizado |
| 15 | 2026-08-18 | Proyecto | Proyecto de aula «Finanzas», 2026-2 · plan 2 con 2 compromisos |
| 16 | 2026-09-08 | Asistencia | Taller de finanzas · +30 |
| 17 | 2026-09-22 | Compromiso | «Registrar ventas diarias» cumplido a tiempo · +25 |
| 18 | 2026-09-29 | Asistencia | Sesión de la Ruta de Acompañamiento · +30 |
| 19 | 2026-10-06 | Diagnóstico | Diagnóstico 3: finanzas 71, mercadeo 52 · +50 |
| 20 | 2026-10-14 | Compromiso | Dos compromisos del plan 1 vencidos («Abrir cuenta de WhatsApp Business», «Crear lista de precios impresa») |
| 21 | 2026-10-20 | Cita | Cita agendada para el 2026-10-27 (no realizada antes de la demo; no suma puntos) |

  Son 21 hitos de 9 tipos (atención, puntos, diagnóstico, plan, proyecto, cita, evento, asistencia, compromiso). El detalle de puntos de Marcela se concilia en §3.

- **Evolución para la gráfica (dimensiones 0–100):**

| Dimensión | D1 · 2026-02-17 | D2 · 2026-05-28 | D3 · 2026-10-06 |
|---|---:|---:|---:|
| Mercadeo | 55 | 50 | 52 |
| Finanzas | 35 | 58 | 71 |
| Operaciones | 60 | 62 | 64 |
| Formalización | 70 | 70 | 72 |

  La caída de mercadeo en D2 y su recuperación parcial en D3 es deliberada (`04` §7.2: «mejora en finanzas y caída en mercadeo»).
- **Planes (C-39):** plan 1 (6 compromisos): 3 cumplidos a tiempo (#9, #10 y «Reunir recibos del mes», 2026-05-05), 2 vencidos (#17) y 1 pendiente, «Actualizar precios» (vence 2026-10-31, **el que se cierra en vivo**); plan 2 (2 compromisos): «Registrar ventas diarias» cumplido a tiempo (#15) y «Calcular margen por producto» en curso. Total de compromisos cumplidos a tiempo antes de la demo: 4.
- **Citas:** una realizada (#6) y una agendada (#21); en la demo la emprendedora solicita una tercera (tema Finanzas).


## 3. Marcela Rojas · emprendedora protagonista (430 puntos antes de la demo)

| Reto | Veces | Puntos |
|---|---:|---:|
| `FICHA_BASICA` | 1 | 40 |
| `DIAGNOSTICO` | 3 | 150 |
| `ASISTIR_EVENTO` | 4 (hitos 8, 12, 16 y 18) | 120 |
| `CITA_REALIZADA` | 1 (hito 6) | 20 |
| `COMPROMISO_CUMPLIDO` | 4 (hitos 9, 10, 11 y 17) | 100 |
| **Total** | | **430** |

- Las 4 asistencias son a eventos de tipo Capacitación (V1): los talleres y las sesiones de la Ruta se registran con ese tipo (`PROPUESTA`), de modo que *Aprendiz* (3 capacitaciones) ya está otorgada.
- **Nivel actual:** 3 · Constructor (250–449). **Insignias:** *Primer paso* y *Aprendiz* (4 asistencias ≥ 3 capacitaciones). Falta 1 compromiso a tiempo para *Cumplidor*.
- **En la demo:** el equipo marca «Actualizar precios» como cumplido antes de su fecha → +25 → **455**: sube a **Nivel 4 · Impulsor** (450) y obtiene *Cumplidor* en el mismo gesto (C-38).
- Los dos compromisos vencidos (hito 20) pertenecen al plan 1 y no suman ni restan puntos.
- **Racha de 3 semanas:** `04` §7.2 la menciona; las rachas están aplazadas en A y B (`20` §7), así que no se muestra. La tabla de arriba no usa `RACHA_3`.
- **Estadística de puntos en el seeder (T-30):** el validador comprueba que la suma de `puntos_movimientos` de Marcela sea 430 y que el cierre del compromiso lleve a 455.

## 4. Los otros seis casos

### C2 · Papelería El Estudiante (Comercio, formalización parcial)
- NIT 999.210.300-4; Floridablanca; inicio 2023-08; ingresos I1; persona: Andrés Mejía (propietario, no tiene acceso).
- Historial: atención 2026-03-02 (T1) · diagnóstico único 2026-03-09 (formalización 30, finanzas 40) · cita de formalización realizada 2026-03-16 · compromiso «Pedir cita en la cámara de comercio» vencido (fecha 2026-04-10) · inscripción al evento «Formalízate» sin asistencia (no-show) · evento 2026-05-06.
- Papel: muestra un **no-show** y el filtro de compromisos vencidos.

### C3 · Asesorías Contables Norte (Servicios, proyecto de finanzas)
- NIT 999.320.411-6; Bucaramanga; inicio 2021-01; ingresos I3; personas: Laura Cárdenas (graduada de la UNAB, propietaria).
- Historial: atención 2026-02-12 · diagnóstico 2026-02-19 (mercadeo 40, finanzas 78) · proyecto de aula «Mercadeo II» 2026-1 · plan con 4 compromisos, todos cumplidos · asistió a 2 capacitaciones · diagnóstico 2 el 2026-06-15 (mercadeo 62).
- Papel: **mejora medible** (mercadeo +22) para el reporte de impacto.

### C4 · Confecciones La Aguja (Manufactura e Industrial, matrícula vencida)
- NIT 999.430.522-2; Girón; inicio 2019-05; ingresos I3; persona: Sandra Ortiz.
- Historial: atención 2026-02-24 · diagnóstico 2026-03-03 (operaciones 38, formalización 45) · plan con 5 compromisos: 1 cumplido, 4 vencidos · cita cancelada 2026-04-20 · cita realizada 2026-05-11.
- Papel: caso de **seguimiento que se pierde** (el dolor de la presentación, diap. 3) y de recordatorios.

### C5 · Hostal Mirador del Cacique (Turismo, informal, ficha incompleta)
- NIT sin registrar (campo vacío); Piedecuesta; sin tamaño ni ingresos; persona: Camilo Vargas (colaborador de la UNAB).
- Historial: atención 2026-08-25 (T3 Otra) · inscripción y asistencia a un conversatorio de turismo 2026-09-17.
- Papel: ejemplo de **ficha incompleta** (completitud 40 %), alimenta el indicador «% con sector y tamaño».

### C6 · Tejidos Chicamocha (Artesanías, brecha en mercadeo)
- NIT 999.650.733-0; San Gil; sin tamaño ni ingresos; persona: Rosa Delgado.
- Historial: atención 2026-04-07 · diagnóstico 2026-04-14 (mercadeo 25, gestión comercial 30) · inscripción al taller de marketing digital con asistencia 2026-05-20 · compromiso «Abrir canal de ventas en línea» en curso.
- Papel: protagonista de la pregunta «¿cuáles son las mayores brechas del sector?» (mercadeo es la dimensión de menor puntaje en su sector de muestra).

### C7 · Datos al Día S.A.S. (Tecnología y TIC, mediana)
- NIT 999.780.844-9; Bucaramanga; inicio 2018-09; ingresos I4; persona: Esteban Quintero (graduado de la UNAB).
- Historial: 3 diagnósticos (2026-02-20: total 70 → 2026-06-12: 74 → 2026-10-08: 81) · 2 proyectos de aula (operaciones 2026-1, innovación 2026-2) · participa como mentor en el evento de networking del 2026-10-21 (V4) · 7 compromisos cumplidos a tiempo.
- Papel: **empresa de referencia**: demuestra que el sistema también sirve a una empresa madura y alimenta el promedio de su sector.

## 5. Cómo los usa el seeder (T-30)

1. C1 y Marcela se crean con identificadores fijos y con las fechas de arriba; los demás casos también.
2. Cada hito se inserta en su **tabla de origen** (diagnósticos, citas, compromisos, asistencias, puntos); la línea de tiempo de A y B se arma por consulta directa (`20` §3, T-15).
3. El validador comprueba: C1 tiene ≥ 15 hitos de ≥ 5 tipos; Marcela tiene 430 puntos y el nivel 3; «Actualizar precios» está `pendiente` con fecha 2026-10-31; las dos fusiones sembradas (nombre con error y NIT con otro formato) se detectan.
4. Los casos C2–C7 se cuentan dentro de los totales de `04` §7.1; el seeder no los suma aparte.

## Criterio de aceptación

1. 7 empresas con sector, tamaño, relación UNAB, formalización y papel en el pitch (§1).
2. La protagonista tiene ≥ 15 hitos de ≥ 5 tipos, evolución de 3 diagnósticos y 4 compromisos a tiempo antes de la demo (§2).
3. Los puntos de Marcela suman 430 con retos de A y B y cruzan a 455 con un único gesto (§3).
4. Ningún dato es real y los totales de `04` §7.1 no se alteran.
