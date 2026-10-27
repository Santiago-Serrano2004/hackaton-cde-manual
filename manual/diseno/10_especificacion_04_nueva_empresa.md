# 10 · Especificación de pantalla 04: Nueva empresa con advertencia de NIT y duplicado

**Objetivo.** Crear una empresa sin duplicar y con origen registrado; avisar cuando el dígito de verificación del NIT no coincide.
**Entradas.** `prototipo/p04-nueva-empresa.html` (mockup navegable), `21_microcopy.md`, `21_casos_demo.md`, `05_arquitectura.md` §3 (API), `02_tokens.md`, `03_componentes.md`, `01_brief_y_ia.md`.
**Pantallas del manual.** E4 · **Roles.** equipo_cde, administrador
**Tarea(s).** T-12 (duplicados + banner), T-13 (front E4/E5), T-11a (esquema de procedencia)
**Requisitos.** RF-02, RF-31, RF-32 (opción O-1, `PROPUESTA`), RF-34, RF-36, RF-48 · **Criterio de evaluación que protege.** Funcionalidad 60 · Diferenciador 15 · **ISO/IEC 25010.** Adecuación funcional, Fiabilidad, Capacidad de interacción
**Decisiones y contradicciones relacionadas.** DEC-07 (dígitos de verificación), DEC-08; CON-08 (ver `99_decisiones.md`).

## 1. Componentes (de arriba abajo)

| # | Componente | Qué es y cómo se comporta |
|---|---|---|
| 1 | Formulario de alta | Razón social (obligatorio), NIT, sector y tamaño (listas de catálogo), municipio, correo de contacto. |
| 2 | Advertencia del NIT (RF-31) | Texto amarillo con icono bajo el campo; no bloquea el guardado; `role=status`. |
| 3 | Aviso de duplicado con señales (RF-36) | Banner con título, parecido, señales alta (relleno sólido) y media (borde punteado), puntaje 0,95 y tres acciones. |
| 4 | Consulta al registro (RF-32) | Botón secundario y aviso informativo con fuente y fecha; opción O-1 condicionada. |

## 2. Datos que consume

| Endpoint (prefijo `/api/v1`) | Campos usados |
|---|---|
| `GET /api/v1/empresas/duplicados?nit=&nombre=&correo=` | [{candidato{id,razon_social}, nivel, senales[{codigo,fuerza,valor_a,valor_b,similitud}]}] (RF-36) |
| `POST /api/v1/empresas` | 409 con candidatos si hay duplicado exacto; 422 con `advertencias` si es probable; 201 con `id` |
| `POST /api/v1/empresas/{id}/consulta-registro` | fuente{nombre,conjunto,licencia,fecha_actualizacion_conjunto,consultado_en}, coincidencias[], propuestas[] (RF-32) |

Errores comunes: 401 sin sesión → `ERR.401`; 403 → `ERR.403`; 422 → `ERR.422`; 429 → `ERR.429`; 500 → `ERR.500`; sin red → `ERR.red`.

## 3. Reglas de interacción

1. Al salir del campo NIT se normaliza (solo dígitos), se calcula el dígito de verificación con el algoritmo DIAN (pesos 3, 7, 13, 17, 19, 23, 29, 37, 41…) y, si el NIT trae 10 dígitos y el último no coincide, se muestra la advertencia con el valor esperado (DEC-07).
2. Con 9 dígitos o sin NIT no se valida el dígito.
3. Si `duplicados` devuelve nivel alta, aparece el banner; «Comparar lado a lado» abre E5; «Abrir la existente» abre la ficha; «Es una empresa distinta» oculta el banner y permite guardar.
4. Guardar con razón social vacía: el foco va al resumen de errores y cada error enlaza a su campo.
5. «Guardar empresa» queda en cargando hasta la respuesta; éxito: aviso `E4.guardada` y navegación a la ficha.

## 4. Textos exactos

| Clave | Texto |
|---|---|
| `E4.titulo_nueva` | Nueva empresa |
| `E4.razon_social` | Razón social |
| `E4.nit` | NIT |
| `E4.dup_exacto` | Ya existe una empresa con ese NIT o correo. |
| `E4.dup_probable` | Posible duplicado: {nombre} (parecido {pct} %). |
| `E4.dup_abrir` | Abrir la existente |
| `E4.dup_distinta` | Es una empresa distinta |
| `E5.lado_a_lado` | Comparar lado a lado |
| `E4.guardada` | Empresa guardada. |
| `ERR.obligatorio` | Este campo es obligatorio. |
| `ERR.correo` | Escribe un correo válido, por ejemplo nombre@ejemplo.com. |
| `ERR.nit` | Revisa el NIT: solo números, con o sin dígito de verificación. |
| `ERR.422` | Revisa los campos marcados. |

## 5. Estados

| Estado | Qué se muestra |
|---|---|
| Vacío | Formulario en blanco (reposo); banner no visible. |
| Cargando | Botón «Guardando…». |
| Error | Resumen «Revisa los campos marcados.» con enlaces y errores bajo cada campo. |
| Éxito | Aviso «Empresa guardada.» |

Cada estado se puede ver en el mockup con `?estado=vacio|cargando|error|exito`; tema con `?tema=oscuro`.

## 6. Accesibilidad

Cumple las comprobaciones C1–C28 de `00_investigacion.md` §10: foco visible de 3 px, objetivos ≥ 44 px, ninguna información solo por color, `role=status/alert` en avisos, reflujo a 390 px. Resultados medidos: `90_revision.md`.

## 7. Criterio de aceptación

1. NIT 999.100.200-1 muestra la advertencia con «esperado 0»; 999.100.200-0 no la muestra y marca «Dígito de verificación correcto».
2. NIT 9991002000 muestra el banner con señales NIT igual y correo igual (alta) y nombre/municipio (media).
3. Las señales se distinguen sin color (forma, borde, texto).
4. Un lector de pantalla anuncia la advertencia y el banner (`role`).
