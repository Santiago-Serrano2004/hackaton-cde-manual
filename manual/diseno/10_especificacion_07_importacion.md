# 10 · Especificación de pantalla 07: Importación CSV

**Objetivo.** Importar la hoja de cálculo actual de 509 filas con vista previa de errores y duplicados, confirmación y reversión.
**Entradas.** `prototipo/p07-importacion.html` (mockup navegable), `21_microcopy.md`, `21_casos_demo.md`, `05_arquitectura.md` §3 (API), `02_tokens.md`, `03_componentes.md`, `01_brief_y_ia.md`.
**Pantallas del manual.** E6 · **Roles.** equipo_cde, administrador
**Tarea(s).** T-14 (importación), T-12 (duplicados en la vista previa)
**Requisitos.** RF-15, RF-02, RF-34 · **Criterio de evaluación que protege.** Funcionalidad 60 · **ISO/IEC 25010.** Compatibilidad, Fiabilidad, Capacidad de interacción
**Decisiones y contradicciones relacionadas.** DEC-07, DEC-17 (ver `99_decisiones.md`).

## 1. Componentes (de arriba abajo)

| # | Componente | Qué es y cómo se comporta |
|---|---|---|
| 1 | Indicador de pasos | Cinco pasos con `aria-current="step"`; completados en verde con texto. |
| 2 | Zona de carga | Arrastrar o elegir; formato y tamaño visibles; plantilla descargable. |
| 3 | Mapeo de columnas | Una fila por columna del archivo con un selector de campo. |
| 4 | Resumen en cifras | 497 nuevas, 12 posibles duplicadas, 0 con error. |
| 5 | Vista previa virtualizada | Contenedor de 480 px con foco, `aria-rowcount=509`, `aria-rowindex`; filas verde/amarilla/roja con icono y texto; acciones Omitir, Fusionar, Es otra por fila amarilla. |
| 6 | Diálogos | Confirmar importación y revertir lote. |

## 2. Datos que consume

| Endpoint (prefijo `/api/v1`) | Campos usados |
|---|---|
| `POST /api/v1/importaciones` | archivo → `id`, filas, columnas detectadas |
| `GET /api/v1/importaciones/{id}/previa` | filas[{n,estado,razon_social,nit,detalle,similitud}], totales{validas,duplicadas,errores} |
| `POST /api/v1/importaciones/{id}/confirmar` | creadas, rechazadas |
| `POST /api/v1/importaciones/{id}/revertir` | 200; archiva el lote y audita |

Errores comunes: 401 sin sesión → `ERR.401`; 403 → `ERR.403`; 422 → `ERR.422`; 429 → `ERR.429`; 500 → `ERR.500`; sin red → `ERR.red`.

## 3. Reglas de interacción

1. La vista previa solo dibuja las filas visibles (virtualización); el recuento total sale del servidor.
2. «Ver solo amarillas» filtra en el cliente sobre la página recibida.
3. Importar muestra progreso «Importando… n de total» con barra y `role=progressbar`.
4. La reversión exige confirmar en un diálogo.

## 4. Textos exactos

| Clave | Texto |
|---|---|
| `E6.titulo` | Importar empresas |
| `E6.paso1` | 1. Sube tu archivo CSV |
| `E6.plantilla` | Descargar la plantilla |
| `E6.paso2` | 2. Revisa la vista previa |
| `E6.resumen` | {validas} válidas · {duplicadas} posibles duplicadas · {errores} con error |
| `E6.semaforo_verde` | Nueva |
| `E6.semaforo_amarillo` | Posible duplicado |
| `E6.semaforo_rojo` | Con error |
| `E6.confirmar` | Importar {n} empresas |
| `E6.progreso` | Importando… {n} de {total} |
| `E6.final` | Listo: {creadas} creadas, {rechazadas} rechazadas. |
| `E6.descargar_errores` | Descargar filas con error |
| `E6.error_formato` | No pudimos leer el archivo. Verifica que sea CSV con codificación UTF-8. |
| `E6.error_columnas` | Faltan columnas: {lista}. Descarga la plantilla para ver cuáles son. |

## 5. Estados

| Estado | Qué se muestra |
|---|---|
| Vacío | Zona de arrastre con formato y tamaño máximos. |
| Cargando | Barra «Importando… 310 de 509». |
| Error | `E6.error_formato` / `E6.error_columnas` con plantilla. |
| Éxito | Resumen verde, reversión disponible. |

Cada estado se puede ver en el mockup con `?estado=vacio|cargando|error|exito`; tema con `?tema=oscuro`.

## 6. Accesibilidad

Cumple las comprobaciones C1–C28 de `00_investigacion.md` §10: foco visible de 3 px, objetivos ≥ 44 px, ninguna información solo por color, `role=status/alert` en avisos, reflujo a 390 px. Resultados medidos: `90_revision.md`.

## 7. Criterio de aceptación

1. 509 filas: 497 nuevas, 12 duplicadas, 0 con error; la variante con errores muestra una fila roja.
2. Cada estado lleva icono y texto.
3. Revertir deja la base como antes y escribe la auditoría.
4. La vista previa se recorre con teclado.
