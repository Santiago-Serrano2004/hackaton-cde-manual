# 10 · Especificación de pantalla 06: Ficha de empresa 360

**Objetivo.** Mostrar quién es la empresa, cuánto se puede confiar en sus datos y toda su historia, en una sola pantalla.
**Entradas.** `prototipo/p06-ficha.html` (mockup navegable), `21_microcopy.md`, `21_casos_demo.md`, `05_arquitectura.md` §3 (API), `02_tokens.md`, `03_componentes.md`, `01_brief_y_ia.md`.
**Pantallas del manual.** E3, E7 · **Roles.** equipo_cde, administrador (docente: solo lectura, D3)
**Tarea(s).** T-15 (historial), T-27 (acabado de la línea de tiempo), T-41 (diagnósticos), T-42 (planes), T-54 (radar, Could), T-28 (anillo)
**Requisitos.** RF-14, RF-05, RF-07, RF-34, RF-48, RF-32 · **Criterio de evaluación que protege.** Funcionalidad 60 · Diferenciador 15 · **ISO/IEC 25010.** Adecuación funcional, Capacidad de interacción, Fiabilidad
**Decisiones y contradicciones relacionadas.** DEC-12, DEC-15, DEC-18, CON-07 (ver `99_decisiones.md`).

## 1. Componentes (de arriba abajo)

| # | Componente | Qué es y cómo se comporta |
|---|---|---|
| 1 | Cabecera | Nombre (h1), meta (sector, tamaño, relación UNAB, NIT, municipio), anillo de confianza de 48 px + texto, completitud y acciones Consultar registro, Fusionar, Editar. |
| 2 | Rejilla de datos críticos | Seis tarjetas (NIT, razón social, sector, tamaño, formalización, correo) con sello pulsable. |
| 3 | Popover del sello | Diálogo pequeño con «Origen: … · fecha · registrado por … · confirmado por …»; Esc cierra y devuelve el foco. |
| 4 | Pestañas | Línea de tiempo (por defecto), Diagnósticos, Proyectos, Planes, Citas, Eventos, Contactos; `role=tablist`. |
| 5 | Línea de tiempo (hilo) | Nodos de 4 formas, grupo por semestre, filtros por tipo y año, «Ver 13 más». |
| 6 | Radar + tabla equivalente | Dos polígonos (D1 y D3) y tabla D1, D2, D3, Δ. |
| 7 | Diálogo de registro mercantil | Tabla «Lo que tenemos · Lo que dice el registro · Acción» (RF-32). |

## 2. Datos que consume

| Endpoint (prefijo `/api/v1`) | Campos usados |
|---|---|
| `GET /api/v1/empresas/{id}` | campos, `procedencia` por campo crítico, `confianza_ficha`, `completitud` |
| `GET /api/v1/empresas/{id}/historial` | hitos[{fecha,tipo,titulo,detalle,estado,abierto}] (≤ 12 consultas SQL) |
| `GET /api/v1/empresas/{id}/evolucion` | diagnosticos[{fecha,dimensiones{nombre:valor}}] |
| `GET /api/v1/compromisos?empresa_id=` | compromiso, plan, fecha_limite, estado |
| `POST /api/v1/empresas/{id}/consulta-registro y /aceptar` | RF-32 |

Errores comunes: 401 sin sesión → `ERR.401`; 403 → `ERR.403`; 422 → `ERR.422`; 429 → `ERR.429`; 500 → `ERR.500`; sin red → `ERR.red`.

## 3. Reglas de interacción

1. Cada hito es solo lectura; la fila no es un enlace salvo que el hito tenga ficha propia.
2. El filtro por tipo oculta hitos y grupos vacíos y anuncia el resultado; con filtro activo desaparece «Ver más».
3. «Ver 13 más» muestra los 21 hitos y anuncia «Se muestran los 21 hitos».
4. Con más de 200 hitos la lista se virtualiza (`@tanstack/react-virtual`).
5. Aceptar una propuesta del registro cambia el sello a Verificado, recalcula el anillo (formalización de declarado 0,6 a verificado 1,0 suma 6 puntos con peso 0,15) y registra auditoría.
6. Pestañas: flechas, Inicio y Fin.

## 4. Textos exactos

| Clave | Texto |
|---|---|
| `E3.tab_linea` | Línea de tiempo |
| `E3.tab_diag` | Diagnósticos |
| `E3.tab_proy` | Proyectos |
| `E3.tab_planes` | Planes |
| `E3.tab_citas` | Citas |
| `E3.tab_eventos` | Eventos |
| `E3.tab_contactos` | Contactos |
| `E3.linea_vacia` | Esta empresa todavía no tiene historial. Cada cita, diagnóstico o compromiso aparecerá aquí. |
| `E3.completitud` | Ficha completa al {n} % |
| `E7.evolucion` | Evolución por dimensión |
| `E7.vacio` | Esta empresa aún no tiene diagnósticos. Registra el primero para ver su evolución. |

## 5. Estados

| Estado | Qué se muestra |
|---|---|
| Vacío | Línea de tiempo vacía con `E3.linea_vacia`; la cabecera se mantiene. |
| Cargando | 5 hitos esqueleto; cabecera visible. |
| Error | Banda con «Reintentar» en el panel; la cabecera no se pierde (RNF-19). |
| Éxito | Cabecera, sellos, 21 hitos de 9 tipos. |

Cada estado se puede ver en el mockup con `?estado=vacio|cargando|error|exito`; tema con `?tema=oscuro`.

## 6. Accesibilidad

Cumple las comprobaciones C1–C28 de `00_investigacion.md` §10: foco visible de 3 px, objetivos ≥ 44 px, ninguna información solo por color, `role=status/alert` en avisos, reflujo a 390 px. Resultados medidos: `90_revision.md`.

## 7. Criterio de aceptación

1. La empresa protagonista muestra 21 hitos de 9 tipos con las fechas de `21_casos_demo` §2.
2. Los cuatro tipos de nodo se distinguen por forma, no solo por color.
3. El radar tiene tabla equivalente y texto alternativo «Finanzas subió de 35 a 71».
4. Tab llega a cada sello y Enter abre su popover.
