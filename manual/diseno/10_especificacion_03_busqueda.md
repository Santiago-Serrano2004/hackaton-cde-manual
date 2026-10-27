# 10 · Especificación de pantalla 03: Empresas y búsqueda global Ctrl+K

**Objetivo.** Encontrar una empresa por nombre, NIT o correo, tolerando errores de tipeo, y llegar a su historial en ≤ 20 s.
**Entradas.** `prototipo/p03-busqueda.html` (mockup navegable), `21_microcopy.md`, `21_casos_demo.md`, `05_arquitectura.md` §3 (API), `02_tokens.md`, `03_componentes.md`, `01_brief_y_ia.md`.
**Pantallas del manual.** E2 · **Roles.** equipo_cde, administrador
**Tarea(s).** T-13 (búsqueda global), T-17 (paleta Ctrl+K), T-28 (anillo de calidad)
**Requisitos.** RF-28, RF-01, RF-48 · **Criterio de evaluación que protege.** Funcionalidad 60 · Diferenciador 15 · **ISO/IEC 25010.** Eficiencia de desempeño, Capacidad de interacción
**Decisiones y contradicciones relacionadas.** DEC-08, DEC-15; PD-06 (ver `99_decisiones.md`).

## 1. Componentes (de arriba abajo)

| # | Componente | Qué es y cómo se comporta |
|---|---|---|
| 1 | Paleta de comandos (cmdk) | Diálogo modal con `combobox` + `listbox`; grupos Empresas, Contactos, Eventos; valor de coincidencia con dos decimales; pie con atajos. |
| 2 | Campo de búsqueda de la lista | Filtro por texto de la tabla (`?q=`). |
| 3 | Tabla de empresas | 50 filas del servidor; columnas Empresa, Sector, Tamaño, Municipio, Confianza (anillo de 48 px), Compromisos; orden por Empresa. |
| 4 | Chip de ficha incompleta | Icono + texto `E2.chip_incompleta`. |
| 5 | Paginación | Anterior, páginas, siguiente; `aria-current` en la actual. |

## 2. Datos que consume

| Endpoint (prefijo `/api/v1`) | Campos usados |
|---|---|
| `GET /api/v1/empresas?q=&sector=&tamano=&formalizacion=&relacion_unab=&incompletas=&page=&per_page=50` | id, razon_social, sector, tamano, municipio, confianza_ficha (0–100), compromisos_vencidos, completitud |
| `GET /api/v1/buscar?q=` | grupos: empresas[{id,razon_social,sector,municipio,similitud}], personas[{id,nombre,rol,empresa}], eventos[{id,nombre,fecha}]  (`PROPUESTA`: endpoint de la paleta; el manual solo define `?q=` en empresas) |

Errores comunes: 401 sin sesión → `ERR.401`; 403 → `ERR.403`; 422 → `ERR.422`; 429 → `ERR.429`; 500 → `ERR.500`; sin red → `ERR.red`.

## 3. Reglas de interacción

1. Ctrl+K (o Cmd+K) abre la paleta desde cualquier pantalla del equipo; Esc la cierra y devuelve el foco al elemento previo.
2. Flechas arriba/abajo mueven la opción (`aria-activedescendant`); Enter abre la ficha en la pestaña Línea de tiempo.
3. La consulta se envía tras 150 ms sin teclear; si no hay respuesta en 400 ms se muestra la línea de progreso (Doherty).
4. El valor de coincidencia es el de `pg_trgm similarity()`, con coma decimal; no es un porcentaje.
5. Sin resultados: `BUSQUEDA.sin_resultados` y no se muestra el valor.

## 4. Textos exactos

| Clave | Texto |
|---|---|
| `E2.titulo` | Empresas |
| `E2.buscar_ph` | Buscar por nombre, NIT o correo |
| `BUSQUEDA.placeholder_ctrlk` | Busca empresas, eventos o personas |
| `BUSQUEDA.atajo` | Ctrl + K |
| `BUSQUEDA.sin_resultados` | No encontramos «{q}». Revisa la ortografía o busca por NIT. |
| `E2.vacio` | Aún no hay empresas. Crea la primera o importa tu hoja de cálculo. |
| `E2.nueva` | Nueva empresa |
| `E2.importar` | Importar CSV |
| `E2.chip_incompleta` | Ficha incompleta |

## 5. Estados

| Estado | Qué se muestra |
|---|---|
| Vacío | `E2.vacio` con «Nueva empresa» e «Importar CSV». Paleta: «Escribe un nombre, NIT o correo». |
| Cargando | 8 filas esqueleto; paleta: línea de progreso y «Buscando…». |
| Error | Banda con «Reintentar»; paleta: «No pudimos buscar. Reintentar». |
| Éxito | Tabla y paleta con resultados. |

Cada estado se puede ver en el mockup con `?estado=vacio|cargando|error|exito`; tema con `?tema=oscuro`.

## 6. Accesibilidad

Cumple las comprobaciones C1–C28 de `00_investigacion.md` §10: foco visible de 3 px, objetivos ≥ 44 px, ninguna información solo por color, `role=status/alert` en avisos, reflujo a 390 px. Resultados medidos: `90_revision.md`.

## 7. Criterio de aceptación

1. «pamaderia» devuelve Panadería Dulce Hogar S.A.S. con 0,82 y Panadería La Espiga con 0,58 (valores de `16` §9.1; el real se lee del seeder, DEC-08).
2. Enter abre la ficha en la pestaña Línea de tiempo.
3. La paleta es operable solo con teclado y el foco vuelve al cerrar.
4. Con `?paleta_estado=cargando|error` se ven los estados de la paleta.
