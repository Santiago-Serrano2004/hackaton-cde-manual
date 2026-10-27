# 99 · Decisiones de diseño, contradicciones y preguntas

**Objetivo.** Registrar cada decisión que se aparta o aclara el manual, cada contradicción encontrada y cada pregunta que bloquea, con quién decide.
**Entradas.** Todos los archivos de `manual/` leídos para la misión de diseño.
**Formato.** `DEC-xx` decisión tomada; `CON-xx` contradicción entre archivos; `PD-xx` pregunta de diseño abierta (pregunta, por qué bloquea, opciones, recomendación, quién decide).

## 1. Decisiones

| ID | Decisión | Razón y fuente |
|---|---|---|
| DEC-01 | Marca provisional: texto «CDE · Hilo» con un sello cuadrado de la letra «C»; sin logotipo de la UNAB ni del CDE | `16` §10 punto 12 (sin logotipo sin permiso, PA-20/PA-29); `GLOBAL.app_nombre` es `PROPUESTA` (PA-25) |
| DEC-02 | La «lista de 25 puntos» del encargo no existe en `16`: §13 tiene 14 ítems y §10 12 antipatrones (26 en total). Se aplica `16` §13 + §10 + las 28 comprobaciones de `00_investigacion.md` §10 | Sin dato nuevo no se inventa una lista de 25; la revisión usa las tres listas |
| DEC-03 | En modo oscuro `--borde` pasa de `#5C6896` a `#6F7BAA` | Contraste calculado: `#5C6896` sobre `--superficie` oscuro (#18224A) da 2,84:1 (< 3:1 de WCAG 1.4.11); `#6F7BAA` da 3,72:1. `16` solo calculó contra el papel (3,25:1) |
| DEC-04 | Se completan los tokens oscuros que `16` no define: `--azul` #9DB4FF, `--amarillo` #FFC857, estados de éxito/advertencia/error/info, `--deshab-*` y la escala de mapa de calor (nivel 4 `#E5673D` con texto `#0F1733`: 5,32:1) | `16` §4.2 lista 9 tokens; el resto se derivó y se validó en `02_tokens.md` §3.2 (`PROPUESTA`) |
| DEC-05 | Los mockups usan el rol `administrador` | `06`, `02` y `05` usan `administrador`; `investigacion/06` usa `admin_cde` (Q-D8) |
| DEC-06 | «Deshacer» de la fusión: aviso de 30 s tras fusionar (`16` §5 y §8) **y** acción «Deshacer fusión» disponible 24 h desde la auditoría (`18` §8) | `04` §4 dice 30 días por soft delete y `16` 30 s: el aviso es la ayuda inmediata; el límite duro lo decide el equipo (ver CON-03) |
| DEC-07 | NIT sintéticos con dígito de verificación recalculado (algoritmo DIAN: pesos 3, 7, 13, 17, 19, 23, 29, 37, 41…; residuo r: DV = r si r ≤ 1, si no 11 − r): C1 999.100.200-0, C2 999.210.300-0, C3 999.320.411-1, C4 999.430.522-2, C6 999.650.733-3, C7 999.780.844-1; duplicado de C1: `9991002000` | `21_casos_demo.md` trae dígitos que no cumplen la regla en 5 de 6 NIT (C-50, C-53 de `investigacion/05`). Las pantallas muestran el valor corregido para que la advertencia RF-31 **no** salte con datos buenos. Cálculo propio, reproducible en `prototipo/js/datos.js` (`dvNit`); la fórmula oficial sigue `[NO VERIFICADO]` en fuente DIAN |
| DEC-08 | Valor de coincidencia de «pamaderia» en la paleta: 0,82 y 0,58 (de `16` §9.1) | `18` §5 dice 0,77, `21_casos_demo` 0,76 y 0,95 (otro par). El valor real se lee del seeder el 29-oct (nota 1 de `18` §5); el mockup usa el de `16` y lo declara |
| DEC-09 | El guion de 120 s sigue la variante R3: la emprendedora usa «Avisar al equipo que lo terminé» y el equipo marca cumplido (sin cola de validación) | `21_microcopy` (`M3.avisar`) y `21_casos_demo` §3; `18` §5 aún muestra «cola de validación» (CON-04) |
| DEC-10 | Dimensiones del mapa de calor: Mercadeo, Finanzas, Operaciones, Formalización, Talento humano, Gestión comercial (catálogo `21_catalogos.csv`). `16` §9.4 usa «Estrategia», que no existe en el catálogo | Coherencia con `04` §3 y `21_catalogos.csv` (CON-05) |
| DEC-11 | Sin rachas en ninguna pantalla | `20` §7 y `21_microcopy` (`GAM.racha` [futuro]); `06` §2.2 y `02` HU-19 aún las incluyen (CON-06) |
| DEC-12 | Anillo de confianza de 48 px (RF-48 pide 40 px) y entero 0–100 | El número no cabe legible a 40 px; 48 px cumple 44 px de objetivo en móvil (`PROPUESTA`) |
| DEC-13 | Gamificación ocultable por la persona («Ocultar puntos y niveles») y tabla de posiciones opcional | Autonomía (SDT, DI-48) y Hanus y Fox (DI-49, `[NO VERIFICADO]`); `PROPUESTA` |
| DEC-14 | El KPI «Empresas nuevas» muestra «—» con la nota «Se calcula con la fecha de inicio de actividad» porque `04` no define el total sembrado | No se inventan cifras; ver PD-03 |
| DEC-15 | Estados de procedencia de las 7 empresas son de muestra (V/D/R) y la confianza se calcula con los pesos de RF-48 | `21_casos_demo` no define procedencia; `PROPUESTA` de muestra |
| DEC-16 | Valores de ejemplo del mapa de calor (filas distintas de Alimentos·Finanzas) son del prototipo, no cifras del proyecto; solo «41 empresas afectadas» viene de `18` §5 y se declara «leída del seeder el 29-oct» | Regla «no inventar cifras» |
| DEC-18 | El estado «por revisar» de un campo se asigna cuando choca con otra fuente (p. ej. B digitado frente a A importado con escritura distinta) y la persona decide en la fusión | `investigacion/06` RF-34 define los tres estados pero no cuándo aparece «por revisar»; `PROPUESTA` |
| DEC-19 | En las 7 empresas de demostración ningún campo está «verificado» de origen: los NIT sintéticos no existen en el registro mercantil; «Verificado» solo aparece al aceptar una propuesta de RF-32 (consulta guardada de antemano, RNF-07) | Coherencia con RF-32 criterio 2 («No se encontró en el registro abierto») |
| DEC-17 | El prototipo se entrega como HTML/CSS/JS sin dependencias de red; las fuentes y los iconos van locales | Regla de la misión; `00_investigacion.md` C23 |

## 2. Contradicciones con el manual

| ID | Archivos | Contradicción | Tratamiento en el diseño |
|---|---|---|---|
| CON-01 | `16` §13 / encargo | «Lista de 25 puntos» frente a 14 + 12 | DEC-02 |
| CON-02 | `16` §4.2 / cálculo | Borde oscuro 3,25:1 sobre papel pero 2,84:1 sobre superficie | DEC-03 |
| CON-03 | `04` §4 / `16` §5 / `18` §8 | Ventana de deshacer: 30 días / 30 s / 24 h | DEC-06; pregunta PD-01 |
| CON-04 | `18` §5 / `21_microcopy`, `21_casos_demo` | Cola de validación frente a «avisar y marcar» | DEC-09; pregunta PD-02 |
| CON-05 | `16` §9.4 / `21_catalogos.csv` | «Estrategia» no es un área del catálogo | DEC-10 |
| CON-06 | `06` §2.2, `02` HU-19 / `20` §7, `21_microcopy` | Rachas presentes y aplazadas | DEC-11 |
| CON-07 | `06` §4 (wireframe E3: completitud 82 %) / `21_casos_demo` (100 %) | Dato distinto para la empresa protagonista | Se usa 100 % de `21_casos_demo` |
| CON-08 | `21_casos_demo` §2 / RF-36 | NIT del duplicado de C1 `9001002001` frente a `9991002000` | DEC-07 |
| CON-09 | `RF-48` / `06` §5 | `06` §5 está superado por `16` (C-22); no se usa su paleta | Se usa `16` |
| CON-11 | `16` §9.5 y `06` §2.2 recomiendan el taller de finanzas «porque tu mayor brecha es finanzas»; `18` §5 dice «brecha mercadeo»; en `21_casos_demo` la dimensión más baja de Marcela es mercadeo (52) y finanzas es 71 | La tarjeta «Para ti» usa los motivos `M5.motivo_sector` y `M5.motivo_etapa`, que no dependen de la brecha |
| CON-10 | `15` C-21 / `14` T-40 | T-40 = 1,0 h con ahorro de shadcn sin probar frente a 1,5 h sin él | `03_componentes.md` §3 |

## 3. Preguntas abiertas de diseño

| ID | Pregunta | Por qué bloquea | Opciones | Recomendación | Decide |
|---|---|---|---|---|---|
| PD-01 | ¿Cuánto tiempo se puede deshacer una fusión? | Cambia el modelo de datos (snapshot) y el texto del aviso | (a) 30 s solo aviso; (b) 24 h; (c) 30 días | (b) 24 h, con aviso de 30 s | Santiago (técnico) |
| PD-02 | ¿Hay cola de validación de compromisos en la demo? | Cambia 2 pantallas del equipo y el guion | (a) sin cola (R3); (b) con cola | (a), ya decidido en R3; actualizar `18` §5 | Los tres |
| PD-03 | ¿Cuál es el total sembrado de «Empresas nuevas»? | El KPI de RF-37 queda sin cifra | (a) definirlo en `04` §7.1; (b) mostrar «—» | (a) antes del 28-oct | Santiago |
| PD-04 | ¿El CDE permite su paleta y un logotipo? | La marca provisional queda como texto | Ver PA-29 | Preguntar el 28-oct | CDE |
| PD-05 | ¿La tabla de posiciones debe existir? | Puede desmotivar (DI-49 `[NO VERIFICADO]`) | (a) opcional por cohorte; (b) sin tabla | (a) opcional, apagada por defecto | María Paula |
| PD-06 | ¿Qué valor de coincidencia debe mostrar la paleta? | 0,82 (`16`), 0,77 (`18`), 0,76 (`21`) | Leer del seeder | Leer del seeder el 29-oct | Santiago |
| PD-08 | E1 (Panel del día) y la interfaz de E15 no tienen tarea propia en `backlog.csv` | Sin tarea nadie las construye | (a) añadir tareas (≈ 0,75 h y ≈ 0,5 h); (b) E1 dentro de T-45 y E15 dentro de T-10 | (b) y confirmar horas el 28-oct | Los tres |
| PD-07 | ¿Se pueden usar insignias con figuras (libro, escudo, escalones) o debe haber texto sin arte? | Tono sobrio para adultos sin evidencia (DI-48) | (a) con arte; (b) solo texto | (a) y validar con el CDE | CDE |

## 4. Criterio de aceptación

1. Cada desviación del manual en `10_especificacion_*` cita un `DEC-xx` o `CON-xx`.
2. Cada `PD-xx` tiene pregunta, motivo, opciones, recomendación y quien decide.
3. No hay «TBD».
