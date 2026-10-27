# 10 · Especificación de pantalla 10: Caracterización, brechas e impacto

**Objetivo.** Pasar de datos dispersos a conocimiento: ver la base, encontrar brechas por sector y exportar un reporte de impacto honesto («declarado frente a verificado»).
**Entradas.** `prototipo/p10-analisis.html` (mockup navegable), `21_microcopy.md`, `21_casos_demo.md`, `05_arquitectura.md` §3 (API), `02_tokens.md`, `03_componentes.md`, `01_brief_y_ia.md`.
**Pantallas del manual.** E11, E12, E13 · **Roles.** equipo_cde, administrador
**Tarea(s).** T-16 (reportes back), T-45 (front E11–E13), T-48 (preguntas guiadas), T-49 (mapa de calor)
**Requisitos.** RF-20, RF-21, RF-22, RF-37, RF-38, RF-49 · **Criterio de evaluación que protege.** Funcionalidad 60 · Negocio 15 · Diferenciador 15 · **ISO/IEC 25010.** Adecuación funcional, Fiabilidad, Capacidad de interacción
**Decisiones y contradicciones relacionadas.** DEC-10, DEC-14, DEC-16; PD-03 (ver `99_decisiones.md`).

## 1. Componentes (de arriba abajo)

| # | Componente | Qué es y cómo se comporta |
|---|---|---|
| 1 | Pestañas Panorama, Brechas, Reporte de impacto | `role=tablist`. |
| 2 | Barras | Empresas por sector y por tamaño con valor visible. |
| 3 | Mapa de calor | Tabla de botones 5 sectores × 6 dimensiones; número en cada celda; trama diagonal (4) y de puntos (5); flechas del teclado; `aria-pressed`. |
| 4 | Panel de empresas afectadas | Título con el recuento, tabla, «Crear compromiso», «Ver empresas», «Descargar CSV». |
| 5 | Tarjetas de KPI | Seis tarjetas con botón «i» que abre la definición. |
| 6 | Tabla declarado frente a verificado | Dos columnas. |

## 2. Datos que consume

| Endpoint (prefijo `/api/v1`) | Campos usados |
|---|---|
| `GET /api/v1/reportes/caracterizacion` | por_sector[], por_tamano[], pct_con_sector, pct_con_tamano |
| `GET /api/v1/reportes/brechas?sector=&tamano=` | matriz[{sector,dimension,nivel,empresas_afectadas}] |
| `GET /api/v1/reportes/impacto?desde=&hasta=&formato=pdf\|csv` | kpis[{nombre,valor,estado,definicion}], resultados[{tipo,declarado,verificado}] |
| `GET /api/v1/empresas?brecha=&sector=` | lista de empresas afectadas (50 por página) |

Errores comunes: 401 sin sesión → `ERR.401`; 403 → `ERR.403`; 422 → `ERR.422`; 429 → `ERR.429`; 500 → `ERR.500`; sin red → `ERR.red`.

## 3. Reglas de interacción

1. Clic o Enter en una celda actualiza el panel inferior y anuncia el recuento.
2. Flechas mueven entre celdas; Inicio/Fin no son necesarios.
3. KPI no disponible dice «No disponible en esta versión» (nunca cero).
4. «Imprimir o guardar como PDF» abre la vista de impresión sin barra lateral.
5. «Crear compromiso» crea un compromiso con responsable vacío obligatorio (RF-49).

## 4. Textos exactos

| Clave | Texto |
|---|---|
| `E11.titulo` | Panorama de empresas |
| `E11.completitud` | Fichas con sector y tamaño: {n} % |
| `E11.vacio` | Aún no hay datos para mostrar con estos filtros. |
| `E12.titulo` | Brechas |
| `E12.mayores` | Mayores brechas del sector {sector} |
| `E12.empresas_afectadas` | {n} empresas con brecha en {dimension} |
| `E12.ver_lista` | Ver empresas |
| `E13.titulo` | Reporte de impacto |
| `E13.descargar` | Descargar CSV |
| `E13.imprimir` | Imprimir o guardar como PDF |
| `E13.generado` | Reporte generado con datos al {fecha}. |

## 5. Estados

| Estado | Qué se muestra |
|---|---|
| Vacío | `E11.vacio` con «Limpiar filtros». |
| Cargando | Esqueleto. |
| Error | `ERR.500`. |
| Éxito | Todas las pestañas con datos. |

Cada estado se puede ver en el mockup con `?estado=vacio|cargando|error|exito`; tema con `?tema=oscuro`.

## 6. Accesibilidad

Cumple las comprobaciones C1–C28 de `00_investigacion.md` §10: foco visible de 3 px, objetivos ≥ 44 px, ninguna información solo por color, `role=status/alert` en avisos, reflujo a 390 px. Resultados medidos: `90_revision.md`.

## 7. Criterio de aceptación

1. Alimentos · Finanzas = 5 y «41 empresas con brecha en Finanzas» (cifra del seeder).
2. Cada celda muestra su número.
3. Los seis KPI llevan los nombres exactos de RF-37; los no disponibles no muestran cero.
4. Se ve «14 declarados · 6 verificados» y el pie «Declarado = dicho por la persona emprendedora; Verificado = con soporte o fuente independiente».
