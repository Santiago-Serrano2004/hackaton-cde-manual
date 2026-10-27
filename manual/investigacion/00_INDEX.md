# 00 · Investigación de diferenciadores y camino comercial (Ronda 4)

**Objetivo.** Encontrar, con evidencia consultada el 27-oct-2026, funciones y argumentos que separen a este producto de lo que existe y que sirvan después de la hackatón para llevarlo a producto comercial, sin romper el plan R3 de 11,75 h por persona. Escrito solo en `manual/investigacion/`; no hay código de la aplicación.

**Acceso a internet:** probado al inicio; funcionó (búsqueda web, lectura de páginas y consultas directas a la API abierta de datos.gov.co). Algunas páginas fallaron y están listadas en `01` §4.

## Lo esencial (3 minutos)

1. **Hallazgo central.** El dato oficial del registro mercantil colombiano es abierto, gratuito y se consulta hoy por API: el conjunto de Confecámaras en datos.gov.co (licencia CC BY-SA 4.0, 36 columnas, actualización mensual) tiene para la Cámara de Comercio de Bucaramanga 415.524 registros, 159.790 matrículas activas, con NIT, CIIU, estado y año de última renovación. En las herramientas de seguimiento de emprendedores que se revisaron no se encontró que lo usen (`02` H-1). No trae municipio, tamaño ni ingresos, y el 78 % de los registros de Bucaramanga son personas naturales (cédula): hay que decidir qué se importa (`01` §3.2).
2. **Tesis que une el producto.** «Cada dato dice de dónde viene y cada impacto se puede comprobar». Costo de programación: 0 h. Ordena lo que el plan ya tiene (duplicados, historial, KPIs) bajo una idea en lugar de una lista (`03` §1).
3. **Los cuatro candidatos de mejor valor por hora** (`03` §2): N-04 impacto en términos SBDC, declarado frente a verificado (10/12); N-01 ficha contrastada con el registro mercantil (9/12); N-05 supervivencia de la cohorte frente a la línea nacional de Confecámaras, 33,5 % a cinco años (9/12); N-02/N-03 procedencia por campo y duplicados con desglose (8/12).
4. **Costo en la ventana de construcción:** 0,35 h de Santiago (0,60 h con WhatsApp en un clic), tomadas del colchón del plan A o del tiempo liberado por compuertas en B; todo lo demás cuesta 0 h (`03` §4).
5. **Camino comercial.** Hay un grupo de clientes con el mismo método y la misma necesidad de reporte: 15 CDE en Santander (10 de la Cámara de Comercio de Bucaramanga y 5 con aliados, entre ellos la UNAB, según una nota de enero de 2025) y 117 CDE del SENA (cifra de 2018). Hoja de ruta en cuatro fases con salidas medibles y criterio de parada (`04`).
6. **Dos defectos encontrados en el manual vigente** (`05`): 5 de los 6 NIT sintéticos de `21_casos_demo.md` no tienen el dígito de verificación correcto (C-50) y el duplicado sembrado de la protagonista no coincide por NIT con la ficha original (C-53). No cuestan horas arreglarlos.
7. **Lo que no se sabe y puede cambiarlo todo:** quién es titular de la propiedad intelectual de lo construido (el TyC de `inputs/` no dice nada, PA-39); cuántas de las 497 empresas tienen NIT (Q-30); disposición a pagar (no hay dato).

## Archivos

| # | Archivo | Para qué | Lo lee |
|---|---|---|---|
| 01 | `01_fuentes_y_verificacion.md` | 31 fuentes con ID, nivel de confianza, pruebas en vivo reproducibles y 13 afirmaciones sin verificar (NV-29..NV-41) | Todos |
| 02 | `02_panorama_competitivo.md` | 6 familias de alternativas, 5 huecos con lo que se puede y no se puede decir | MP, J |
| 03 | `03_diferenciadores_nuevos.md` | 13 candidatos N-01..N-13 con evidencia, demo, horas y fuente del tiempo; tesis; frases permitidas | Todos |
| 04 | `04_ruta_comercial.md` | Las 8 preguntas del TyC sobre sostenibilidad, segmentos, hipótesis de ingresos, fases, costos y checklist legal | MP, J |
| 05 | `05_contradicciones_y_preguntas.md` | 22 requisitos propuestos, contradicciones C-50..C-55, preguntas PA-38..PA-44 y Q-30..Q-36 | S, J |

## Decisiones que el equipo toma (T-01, 28-oct 10:00)

| # | Decisión | Recomendación | Dónde |
|---|---|---|---|
| 28 | Adoptar la tesis «dato con origen e impacto comprobable» como hilo del pitch | Sí; sustituye una frase, no añade tiempo | `03` §1 |
| 29 | Paquete mínimo de código: RF-45 (0,1 h) y RF-31 (0,25 h condicionado) | RF-45 siempre; RF-31 después de G-01 | `03` §4, PA-38 |
| 30 | Corregir el duplicado sembrado y los dígitos de los NIT | Corregir C-53 siempre; C-50 solo si se adopta RF-31 | `05` §2 |
| 31 | WhatsApp en un clic | No en la hackatón; preguntar Q-34 | `03` N-09 |
| 32 | Preguntar el 28 a las 8:30: PA-39 (propiedad intelectual), Q-30, Q-31, Q-32, Q-35 | Preguntar los cinco | `05` §3 |

## Limitaciones

- La mayoría de las cifras comerciales vienen de prensa o de páginas de proveedores; ninguna cifra de precio de competidores está verificada salvo la de AcceleratorApp (US$499 al mes, según su propia página).
- Los efectos de recordatorios y de gamificación vienen de metaanálisis en salud y en educación; no hay evidencia propia de asesoría empresarial.
- La simulación de puntaje del Diferenciador (9,2 de 15, `22`) no se recalculó: no hay base para predecir cuánto sube con estas ideas. El indicador de éxito propuesto es que, al repetir las preguntas de los jurados simulados de `22` sobre el pitch revisado, al menos 3 de 5 citen el hilo conductor sin que se les sugiera.
- Cobertura de NIT y de personas jurídicas entre las 497 empresas: desconocida.
