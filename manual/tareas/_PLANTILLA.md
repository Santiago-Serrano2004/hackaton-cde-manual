# _PLANTILLA · Especificación autocontenida de tarea

Copia este archivo como `T-XX.md`. **Todo** lo que otro agente necesita debe estar en el archivo; no se permite «ver el manual» como sustituto de una regla. Si una regla del manual es necesaria, se copia aquí.

| Campo | Valor |
|---|---|
| ID | T-XX |
| Responsable propuesto | S / J / MP / Todos |
| Horas estimadas | n h (igual que `14_backlog.md` y `backlog.csv`) |
| Prioridad | Must / Should |
| Rebanada | S0..S8 · nombre |
| Épica | E01..E08 |
| Depende de | IDs de tareas |
| Requisitos | RF-xx, RNF-xx |
| ISO/IEC 25010 | AF, ED, CO, CI, FI, SE, MA, FL, PR |
| Historias | HU-xx |
| Qué es real y qué es simulado | texto |

## 1. Contexto mínimo
Qué es el producto en 2 líneas, qué hace esta tarea y por qué importa (criterio de evaluación que protege). Incluir el bloque **Convenciones comunes**.

## 2. Entradas (qué debe existir antes)
Tareas previas y qué tabla, endpoint o componente se espera de cada una; qué doble de prueba usar si falta.

## 3. Archivos a crear o tocar
Rutas completas dentro de `backend/` y `frontend/` (una por línea, con la responsabilidad de cada una).

## 4. Contratos
Endpoints (método, ruta, cuerpo, respuesta, códigos de error), esquemas de tablas, props de componentes y eventos de dominio. Ejemplos JSON ≤ 30 líneas.

## 5. Reglas de negocio
Lista numerada, con números y umbrales exactos (nada de «según convenga»).

## 6. Casos límite
Lista numerada de entradas extremas, estados vacíos, concurrencia y permisos.

## 7. Pruebas esperadas
Qué prueba automática (Pest, Vitest, Playwright) debe existir y qué verifica.

## 8. Criterio de aceptación
Verificable por una persona o un comando (copiado de `backlog.csv`).

## 9. Cómo verificar
Comandos exactos y qué resultado se espera.

## 10. Fuera de alcance
Lo que **no** se hace en esta tarea.

## 11. Definición de terminado
Commit con `Refs T-XX`, lint y pruebas en verde, revisión cruzada, simulaciones rotuladas, sin datos reales.

## 12. Fuentes dentro del manual
Archivos y secciones del manual donde está el fundamento.
