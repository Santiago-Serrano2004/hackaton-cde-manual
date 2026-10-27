/* Datos del prototipo del módulo de formación. Fuente: manual/21_casos_demo.md §2–§3, 21_contenido_formacion.md,
   21_microcopy.md. Las cifras de COHORTE y de TABLA DE POSICIONES son de muestra del prototipo (no son cifras del proyecto; DEC-G-09). */
window.GDATOS = {
  hoy: "2026-10-29",
  persona: { nombre: "Marcela Rojas", corto: "Marcela", etapa: "Ejecución y seguimiento", empresa: "Panadería Dulce Hogar S.A.S." },
  niveles: [
    { n: 1, nombre: "Semilla", min: 0, emb: "semilla" },
    { n: 2, nombre: "Brote", min: 100, emb: "brote", frase: "Brote: ya germinó tu camino." },
    { n: 3, nombre: "Constructor", min: 250, emb: "constructor", frase: "Constructor: estás levantando bases sólidas." },
    { n: 4, nombre: "Impulsor", min: 450, emb: "impulsor", frase: "Impulsor: tu constancia se nota." },
    { n: 5, nombre: "Líder", min: 700, emb: "lider", frase: "Líder: otros pueden aprender de ti." },
    { n: 6, nombre: "Referente", min: 1000, emb: "referente", frase: "Referente: llegaste a la cima del camino." }
  ],
  tipos: {
    ficha: { rot: "Ficha", ic: "file-text" },
    diag: { rot: "Diagnóstico", ic: "clipboard-list" },
    asis: { rot: "Asistencia", ic: "users" },
    cita: { rot: "Cita", ic: "calendar-check" },
    comp: { rot: "Compromiso a tiempo", ic: "circle-check" }
  },
  /* 13 movimientos de Marcela: suman 430 (21_casos_demo §3) */
  puntadas: [
    { f: "2026-02-10", t: "ficha", pts: 40, motivo: "Ficha básica completa", reto: "FICHA_BASICA" },
    { f: "2026-02-17", t: "diag", pts: 50, motivo: "Diagnóstico 1", reto: "DIAGNOSTICO" },
    { f: "2026-03-12", t: "cita", pts: 20, motivo: "Cita de finanzas realizada", reto: "CITA_REALIZADA" },
    { f: "2026-03-27", t: "asis", pts: 30, motivo: "Taller de marketing digital", reto: "ASISTIR_EVENTO" },
    { f: "2026-04-02", t: "comp", pts: 25, motivo: "Compromiso «Publicar en 2 canales»", reto: "COMPROMISO_CUMPLIDO" },
    { f: "2026-04-15", t: "comp", pts: 25, motivo: "Compromiso «Definir cliente ideal»", reto: "COMPROMISO_CUMPLIDO" },
    { f: "2026-05-05", t: "comp", pts: 25, motivo: "Compromiso «Reunir recibos del mes»", reto: "COMPROMISO_CUMPLIDO" },
    { f: "2026-05-14", t: "asis", pts: 30, motivo: "Sesión de la Ruta de Acompañamiento", reto: "ASISTIR_EVENTO" },
    { f: "2026-05-28", t: "diag", pts: 50, motivo: "Diagnóstico 2", reto: "DIAGNOSTICO" },
    { f: "2026-09-08", t: "asis", pts: 30, motivo: "Taller de finanzas", reto: "ASISTIR_EVENTO" },
    { f: "2026-09-22", t: "comp", pts: 25, motivo: "Compromiso «Registrar ventas diarias»", reto: "COMPROMISO_CUMPLIDO" },
    { f: "2026-09-29", t: "asis", pts: 30, motivo: "Sesión de la Ruta de Acompañamiento", reto: "ASISTIR_EVENTO" },
    { f: "2026-10-06", t: "diag", pts: 50, motivo: "Diagnóstico 3", reto: "DIAGNOSTICO" }
  ],
  cierre: { f: "2026-10-29", t: "comp", pts: 25, motivo: "Compromiso «Actualizar precios»", reto: "COMPROMISO_CUMPLIDO", titulo: "Actualizar precios", vence: "31 oct 2026" },
  /* Estaciones de la ruta (p11 existente + hechos de 21_casos_demo) */
  ruta: [
    { id: "ficha", t: "Ficha lista", sub: "10 feb 2026", ic: "file-text" },
    { id: "plan", t: "Plan de acción", sub: "24 feb 2026", ic: "clipboard-list" },
    { id: "taller", t: "Primer taller asistido", sub: "27 mar 2026", ic: "users" },
    { id: "hoy", t: "Actualizar precios", sub: "Vence el 31 oct", ic: "circle-check", actual: true },
    { id: "finanzas", t: "Taller de finanzas básicas", sub: "12 nov", ic: "calendar" },
    { id: "cita", t: "Cita de seguimiento", sub: "Por agendar", ic: "calendar-check" },
    { id: "meta", t: "Nivel 4: Impulsor", sub: "A 20 puntos", meta: true }
  ],
  insignias: [
    { cod: "PRIMER_PASO", nombre: "Primer paso", art: "primer-paso", crit: "Completar tu ficha básica", ganada: "10 feb 2026", hecho: "Ficha básica completa (+40)" },
    { cod: "APRENDIZ", nombre: "Aprendiz", art: "aprendiz", crit: "Asistir a 3 capacitaciones", ganada: "8 sep 2026", hecho: "Tercera capacitación: Taller de finanzas" },
    { cod: "CUMPLIDOR", nombre: "Cumplidor", art: "cumplidor", crit: "Cumplir 5 compromisos a tiempo", progreso: 4, meta: 5, ganada: "29 oct 2026", hecho: "Quinto compromiso a tiempo: «Actualizar precios»" }
  ],
  proximas: [
    { nombre: "Cuentas claras", art: "cuentas-claras" },
    { nombre: "Constante", art: "constante" },
    { nombre: "Mejora visible", art: "mejora-visible" },
    { nombre: "Conector", art: "conector" }
  ],
  pendientes: [
    { id: "precios", t: "Actualizar precios", sub: "Vence el 31 oct 2026", est: "curso" },
    { id: "margen", t: "Calcular margen por producto", sub: "Plan 2 · en curso", est: "curso" },
    { id: "whatsapp", t: "Abrir cuenta de WhatsApp Business", sub: "Venció el 14 oct 2026. Habla con el equipo para reprogramarlo.", est: "venc" },
    { id: "lista", t: "Crear lista de precios impresa", sub: "Venció el 14 oct 2026. Habla con el equipo para reprogramarlo.", est: "venc" }
  ],
  diag: {
    dims: ["Mercadeo", "Finanzas", "Operaciones", "Formalización"],
    d1: [55, 35, 60, 70], d3: [52, 71, 64, 72], f1: "17 feb 2026", f3: "6 oct 2026"
  },
  misiones: [
    { id: "compromisos", t: "Compromisos al día", fuente: "L7", estado: "curso", pasos: [
      { t: "Cumplir 5 compromisos a tiempo", pts: "+25 c/u", n: 4, de: 5 } ] },
    { id: "cuentas", t: "Ordena tus cuentas", fuente: "L3", estado: "curso", pasos: [
      { t: "Completar el diagnóstico en finanzas", pts: "+50", ok: true },
      { t: "Asistir al taller de finanzas", pts: "+30", ok: true },
      { t: "Cumplir el compromiso «Calcular margen por producto»", pts: "+25", ahora: true } ] },
    { id: "marketing", t: "Ruta Marketing digital", fuente: "L1", estado: "hecha", pasos: [
      { t: "Inscribirte al taller", pts: "", ok: true },
      { t: "Asistir al taller de marketing digital", pts: "+30", ok: true },
      { t: "Cumplir «Publicar en 2 canales»", pts: "+25", ok: true } ] },
    { id: "pitch", t: "Pitch listo", fuente: "L6", estado: "prox", pasos: [] }
  ],
  /* Lección L3 y verificación (21_contenido_formacion.md §3 y §4) */
  leccion: {
    titulo: "Ordena tus cuentas",
    aprendes: "A separar ingresos, costos y gastos y a calcular tu margen.",
    texto: [
      "Anota cada venta y cada pago durante un mes, aunque sea en un cuaderno. Sepáralos en tres grupos: ingresos (lo que vendes), costos (lo que gastas para producir lo que vendes, como ingredientes) y gastos (lo que pagas para operar, como arriendo y servicios).",
      "Utilidad = ingresos − costos − gastos. Margen = utilidad ÷ ingresos. Si tu margen es bajo, revisa primero tus precios y luego tus costos.",
      "Un hábito vale más que una hoja perfecta: dedica 15 minutos cada semana a actualizar tus números."
    ],
    preguntas: [
      { q: "¿Qué es un costo?", o: ["Lo que pagas para producir lo que vendes", "Lo que vendes", "El arriendo", "Tu sueldo soñado"], c: 0,
        ok: "Correcto.", mal: "Costo es lo que gastas para producir lo que vendes, como los ingredientes." },
      { q: "Si vendes 1.000 y tus costos y gastos suman 800, ¿cuánto es la utilidad?", o: ["200", "800", "1.800", "20"], c: 0,
        ok: "Exacto: 1.000 − 800 = 200.", mal: "Utilidad = ingresos − costos − gastos = 1.000 − 800 = 200." },
      { q: "Con esos números, ¿cuál es el margen?", o: ["20 %", "80 %", "200 %", "8 %"], c: 0,
        ok: "Bien: 200 ÷ 1.000 = 20 %.", mal: "Margen = utilidad ÷ ingresos = 200 ÷ 1.000 = 20 %." },
      { q: "¿Cada cuánto conviene actualizar tus números?", o: ["Una vez al año", "Cada semana, aunque sea 15 minutos", "Nunca", "Solo al declarar"], c: 1,
        ok: "Un hábito corto vale más que una hoja perfecta.", mal: "Mejor un hábito semanal corto que una revisión larga al año." }
    ]
  },
  /* MUESTRA del prototipo (no son cifras del proyecto) */
  cohorte: [
    { nivel: "Nivel 1 · Semilla", n: 9 }, { nivel: "Nivel 2 · Brote", n: 7 }, { nivel: "Nivel 3 · Constructor", n: 5 },
    { nivel: "Nivel 4 · Impulsor", n: 3 }, { nivel: "Nivel 5 · Líder", n: 2 }, { nivel: "Nivel 6 · Referente", n: 0 }
  ],
  intensidades: [
    { nombre: "Completo", n: 11 }, { nombre: "Discreto", n: 8 }, { nombre: "Oculto", n: 2 }
  ],
  posiciones: [
    { alias: "Persona 14", pts: 612 }, { alias: "Persona 03", pts: 588 }, { alias: "Persona 21", pts: 540 },
    { alias: "Persona 08", pts: 497 }, { alias: "Persona 17", pts: 470 }
  ]
};
