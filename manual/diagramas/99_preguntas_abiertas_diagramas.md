# 99 · Preguntas abiertas, contradicciones y elementos sin fuente (diagramas)

**Objetivo.** Dejar en un solo sitio todo lo que se descubrió al dibujar y que el manual no resuelve, con el formato obligatorio de `CLAUDE.md`: pregunta, por qué bloquea, opciones, recomendación, quién decide. Al ratificarlas, se copian a `manual/99_preguntas_abiertas.md` (esta carpeta no modifica archivos fuera de `manual/diagramas/`).

**Entradas.** `01_trazabilidad.md`, los 30 diagramas, `03_stack.md`, `04_datos.md`, `05_arquitectura.md`, `06_ux_gamificacion.md`, `20_plan_que_cabe.md`, `23_contingencias_y_simulacro.md`, `tareas/`, `investigacion/06_requerimientos_funcionales_detallados.md`.

**Regla de precedencia usada al dibujar.** R3 sobre R2 sobre v1; lo marcado `PROPUESTA` de la Ronda 4 se dibuja con borde o línea discontinua. Donde dos archivos chocan, el diagrama sigue la columna «Lo que se dibujó».

## A. Contradicciones entre archivos del manual (detectadas al dibujar)

| # | Archivo A dice | Archivo B dice | Lo que se dibujó | Diagramas |
|---|---|---|---|---|
| Q-D1 | `03` §4 lista 9 carpetas de módulos, sin `Historial` | `05` §2 y `T-15` definen el módulo `Historial` | Se dibuja `Historial` (10 módulos) | 12, 17 |
| Q-D3 | `05` §2: `Eventos` depende solo de `Empresas` | `05` §7 y `T-25` (depende de `T-41`): la recomendación lee las 2 mayores brechas del último diagnóstico | Flecha discontinua `Eventos` → `Diagnosticos` «por confirmar» | 12, 15 |
| Q-D4 | `T-12` §4: deshacer disponible 24 h | `inv/06` y `T-12`: aviso de 30 s; `04` §4: «reversible por soft delete 30 días» | Se dibuja la nota «24 h según T-12» | 41 |
| Q-D8 | `04` §2.1 y `T-10`: rol `administrador` | `inv/06` RF-32 y RNF: roles `admin_cde` y `equipo_cde` | `administrador` (nombre de `04` y `T-10`) | 10, 13, 61, 62 |
| Q-D10 | `T-23` §5 punto 4, `T-43` §5 y `06` §7.4: el QR rota cada 60 s | `T-23` §13 y `20` §7: token fijo por evento en A y B | Token fijo (R3), rotación aplazada | 15, 44 |
| Q-D11 | `T-42` §4, `T-43` §5 y `06` §7.4: el «cumplido» del emprendedor queda pendiente de validación en una cola | `T-43` §13 y `20` §7: sin cola; «el operador marca el compromiso como cumplido» | Sin cola (R3) | 44, 51 |
| Q-D12 | `03` §5 punto 5: Compose con `db`, `backend`, `frontend` y `mailpit` | `05` §1: contenedores `scheduler` y `worker` | Se dibujan `Worker de cola` y `Planificador` | 11, 30 |
| Q-D14 | `05` §3: todo bajo `/api/v1` | `05` §9: `GET /health` sin prefijo | No se dibuja la ruta; solo aparece como disparador textual | 31 |

## B. Preguntas que bloquean elementos del diagrama

### Q-D2 · ¿Qué controlador de caché usa Laravel?
- **Por qué bloquea:** `05` §10 y `T-16` exigen «caché de catálogos y KPIs de 5 min», pero `D-20` descarta Redis y `03` no nombra controlador. La misión pedía un contenedor «caché»; no se dibuja porque no existe en el manual.
- **Opciones:** (a) controlador `database` (misma base, sin pieza nueva); (b) controlador `file` (carpeta local); (c) Redis (contradice `D-20`).
- **Recomendación:** (a), con la salvedad de que la documentación de Laravel sobre controladores de caché no se leyó en esta ronda `[NO VERIFICADO]`.
- **Decide:** Santiago, en T-02.

### Q-D5 · ¿Qué rutas tiene `resultados_impacto`?
- **Por qué bloquea:** `inv/06` RF-38 define tabla y reglas, no endpoints; el diagrama 45 dice «ruta por definir».
- **Opciones:** `POST /impacto`, `PUT /impacto/{id}/verificar`; o dentro de `/empresas/{id}/resultados`.
- **Recomendación:** definirlas al especificar la fase 2; no se dibuja ninguna ruta inventada.
- **Decide:** Santiago.

### Q-D6 · ¿Qué estado tiene un recordatorio cancelado?
- **Por qué bloquea:** `T-21` §5 punto 5 dice que los pendientes «se cancelan y se recrean», pero `04` §2.4 solo tiene `pendiente`, `enviado`, `fallido`.
- **Opciones:** nuevo estado `cancelado`; borrar la fila pendiente.
- **Recomendación:** estado `cancelado` (conserva el rastro). Cambia `04` §2.4.
- **Decide:** Julián.

### Q-D7 · ¿Cómo sale un dato de `por_revisar`?
- **Por qué bloquea:** `inv/06` §2 define tres estados y una sola regla de transición (`declarado` → `verificado` por una persona).
- **Opciones:** `por_revisar` → `declarado` al corregir; `por_revisar` → `verificado` al aceptar la propuesta; `verificado` → `por_revisar` si llega un valor distinto.
- **Recomendación:** las tres, con auditoría en cada una.
- **Decide:** Santiago y el CDE.

### Q-D9 · ¿El entorno se llama «homelab» o «servidor del patrocinador con Coolify»?
- **Por qué bloquea:** el manual (`03` §8, `23` F1) dice «servidor del patrocinador con Coolify»; `homelab` no aparece en `manual/` ni en `inputs/`. Si son dos entornos distintos, falta un diagrama.
- **Opciones:** (a) es el mismo; (b) son dos y `03` §8 está incompleto.
- **Recomendación:** (a) hasta que el equipo diga lo contrario; se dibuja «Servidor del patrocinador (Coolify)».
- **Decide:** el equipo; relacionado con PA-10 de `99`.

### Q-D13 · ¿Quién envía el correo: el comando o un trabajo en cola?
- **Por qué bloquea:** `05` §5 dice que `recordatorios:enviar` «envía y marca», pero el contenedor `worker` existe para procesar la cola. Si el comando encola, el Worker de cola envía y la flecha SMTP cambia de contenedor.
- **Opciones:** (a) el comando envía directamente; (b) el comando encola un trabajo por recordatorio.
- **Recomendación:** (b), porque aprovecha reintentos y el Worker ya previsto; actualizar `T-21` y los diagramas 11, 14 y 43.
- **Decide:** Julián.

### Q-D15 · ¿Qué protocolo une el proxy con php-fpm?
- **Por qué bloquea:** `05` §1 solo dibuja la flecha. Los diagramas dicen «proxy → php-fpm» sin protocolo.
- **Opciones:** FastCGI con nginx; HTTP con un servidor de aplicación.
- **Recomendación:** FastCGI con nginx `[NO VERIFICADO]`; confirmar en T-02.
- **Decide:** Julián.

### Q-D16 · ¿Cómo pasa `lista_espera` a `inscrito`?
- **Por qué bloquea:** `04` §2.5 y `T-23` definen el estado, no la promoción.
- **Opciones:** manual por el equipo; automática al liberarse un cupo.
- **Recomendación:** manual en el MVP (la lista de espera es Should).
- **Decide:** Julián.

### Q-D17 · ¿Debe existir un contenedor «caché»?
- **Por qué bloquea:** la misión de esta ronda lo listaba en el nivel 2. Ningún archivo del manual define un contenedor de caché (ver Q-D2).
- **Opciones:** (a) la caché es una función del contenedor API Laravel (como se dibujó); (b) contenedor propio.
- **Recomendación:** (a).
- **Decide:** Santiago.

### Q-D18 · Tipos físicos de las columnas
- **Por qué bloquea:** `04` §2 define campos y reglas, no tipos de columna (solo `id` bigserial y `jsonb` en `inv/06`). Los diagramas usan tipos lógicos.
- **Opciones:** fijar los tipos en las migraciones de T-11a; fijarlos ahora en `04`.
- **Recomendación:** en las migraciones, con revisión cruzada; `04` queda lógico.
- **Decide:** Santiago.

### Q-D19 · Disparadores no definidos de eventos e inscripciones
- **Por qué bloquea:** `04` §2.5 y `T-23` §5 punto 8 listan `borrador → publicado → cerrado → realizado|cancelado`, pero solo `publicar` tiene ruta. Tampoco hay ruta de cancelación de inscripción.
- **Opciones:** rutas `POST /eventos/{id}/cerrar`, `…/cancelar`, `POST /eventos/{id}/cancelar-inscripcion`; o transiciones automáticas por fecha.
- **Recomendación:** automáticas por fecha para `cerrado` y `realizado`; rutas manuales para `cancelado`.
- **Decide:** Julián.

## C. Elementos pedidos en la misión y no dibujados (sin fuente)

| Pedido | Qué pasó |
|---|---|
| Contenedor «caché» en el nivel 2 | No hay fuente: Q-D2 y Q-D17. |
| «Homelab» | No aparece en el manual: Q-D9. |
| Instrucción final cortada («actualiza manual…») | No se actualizó `PROGRESO.md` ni `INDEX.md` del manual: la instrucción era escribir solo en `manual/diagramas/`. Queda como tarea de quien ratifique. |
| «Límites de co…» en seguridad | Se interpretó como límites de confianza y de uso (diagrama 61). Si se refería a otra cosa, se rehace. |
| Un nivel 3 por cada módulo | Se dibujan 6 (Empresas; Citas; Eventos; Diagnosticos y Proyectos; Gamificacion e Historial; Reportes e Importacion) más el mapa de dependencias. `Seguridad` no tiene diagrama propio: sus capas están en los diagramas 60 a 62. |

## D. Afirmaciones sin verificar del Paso 1 (`00`)

| ID | Afirmación | Estado |
|---|---|---|
| N-D1 | Los 14 tipos de diagrama de UML 2.5.1 y su clasificación | `[NO VERIFICADO]` en la especificación (el PDF superó el límite de lectura); se usó una fuente secundaria. |
| N-D2 | Texto del artículo de Chen (1976) y la atribución y fecha de la «pata de gallo» | `[NO VERIFICADO]`: el PDF es un escaneo ilegible y la fuente de la notación es secundaria. |
| N-D3 | Versión de Mermaid que usa GitHub al dibujar el bloque `mermaid` | `[NO VERIFICADO]`; los SVG y PNG de `img/` se generaron con Mermaid 12.2.0 y son el registro de referencia. |
| N-D4 | Licencia de Structurizr DSL y si genera SVG o PNG directamente | `[NO VERIFICADO]`: la página no dice la licencia, el POM de Maven no la declara y la descarga del binario devolvió 403. |
| N-D5 | Guía de arc42 sobre qué dibujar en las secciones 5, 6 y 7 | `[NO VERIFICADO]`: la página solo cuenta los consejos. |
| N-D6 | Qué niveles C4 trae la biblioteca C4 de PlantUML | `[NO VERIFICADO]`: la página solo muestra `C4_Container`. |
| N-D7 | Que D2 se instale y renderice en este entorno | No probado: solo se leyó su documentación y su licencia MPL-2.0 en pkg.go.dev. |
| N-D8 | Que el tamaño 48 px en 1920 px equivale a 24 pt en una diapositiva de 13,33 in | Cálculo propio (1920 px / 13,33 in = 144 px por pulgada; 24 pt = 1/3 de pulgada = 48 px). |

## Criterio de aceptación

1. Cada pregunta tiene pregunta, por qué bloquea, opciones, recomendación y decisor.
2. Cada Q-D citada en un diagrama existe aquí.
3. Todo lo `[NO VERIFICADO]` del Paso 1 está listado.
