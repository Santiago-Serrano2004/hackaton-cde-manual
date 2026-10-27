# 10 · Especificación de pantalla 13: Administración: catálogos, roles y auditoría

**Objetivo.** Gobernar catálogos y usuarios y demostrar que cada acción queda registrada y atribuida.
**Entradas.** `prototipo/p13-administracion.html` (mockup navegable), `21_microcopy.md`, `21_casos_demo.md`, `05_arquitectura.md` §3 (API), `02_tokens.md`, `03_componentes.md`, `01_brief_y_ia.md`.
**Pantallas del manual.** E15 · **Roles.** administrador
**Tarea(s).** T-10 (roles y auditoría); sin tarea propia para la UI (PD-08); T-31 (reinicio de demostración)
**Requisitos.** RF-23, RF-25, RF-26 · **Criterio de evaluación que protege.** Funcionalidad 60 · Equipo 10 · **ISO/IEC 25010.** Seguridad, Mantenibilidad, Protección
**Decisiones y contradicciones relacionadas.** DEC-05, DEC-16; PD-08 (ver `99_decisiones.md`).

## 1. Componentes (de arriba abajo)

| # | Componente | Qué es y cómo se comporta |
|---|---|---|
| 1 | Pestañas Catálogos, Usuarios y roles, Auditoría | `role=tablist`. |
| 2 | Tabla de catálogo | Código, nombre, orden, Editar. |
| 3 | Tabla de roles | Rol, usuarios, permisos clave. |
| 4 | Filtros de auditoría | Usuario, empresa, fecha. |
| 5 | Auditoría con detalle | Fila con `details`: Antes y Después en dos columnas. |
| 6 | Reinicio de demostración | Diálogo con palabra de confirmación REINICIAR; botón deshabilitado hasta escribirla. |

## 2. Datos que consume

| Endpoint (prefijo `/api/v1`) | Campos usados |
|---|---|
| `GET /api/v1/auditoria?usuario=&empresa_id=&fecha=` | hora, usuario, accion, objeto, antes_json, despues_json |
| `GET/PUT /api/v1/catalogos/{nombre}` | codigo, nombre, orden |
| `GET/POST /api/v1/usuarios y PUT /usuarios/{id}/rol` | usuario, rol |

Errores comunes: 401 sin sesión → `ERR.401`; 403 → `ERR.403`; 422 → `ERR.422`; 429 → `ERR.429`; 500 → `ERR.500`; sin red → `ERR.red`.

## 3. Reglas de interacción

1. Un usuario sin rol administrador recibe 403 y la pantalla muestra `ERR.403`.
2. La auditoría muestra la fusión y el deshacer con antes y después.
3. El botón de reinicio solo aparece con `APP_DEMO=true`.

## 4. Textos exactos

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
| `ERR.403` | No tienes permiso para ver esto. Si crees que es un error, escribe al equipo del CDE. |

## 5. Estados

| Estado | Qué se muestra |
|---|---|
| Vacío | `E15.vacio` dentro de la tabla. |
| Cargando | Esqueleto. |
| Error | `ERR.403`. |
| Éxito | Tabla de auditoría con 6 acciones del guion. |

Cada estado se puede ver en el mockup con `?estado=vacio|cargando|error|exito`; tema con `?tema=oscuro`.

## 6. Accesibilidad

Cumple las comprobaciones C1–C28 de `00_investigacion.md` §10: foco visible de 3 px, objetivos ≥ 44 px, ninguna información solo por color, `role=status/alert` en avisos, reflujo a 390 px. Resultados medidos: `90_revision.md`.

## 7. Criterio de aceptación

1. La auditoría contiene la fusión y el deshacer del guion.
2. Los 5 roles y sus conteos coinciden con `04` §7.1 (1, 3, 3, 6, 30).
3. Reiniciar exige escribir REINICIAR.
