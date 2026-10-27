/* Datos de ejemplo del prototipo. Fuente: manual/21_casos_demo.md y 04_datos.md.
   Los NIT usan el dígito de verificación recalculado con el algoritmo DIAN (ver 99_decisiones.md, DEC-07). */
window.DATOS = {
  hoy: "2026-10-29",
  empresas: [
    {id:"c1", nombre:"Panadería Dulce Hogar S.A.S.", nit:"999.100.200-0", sector:"Alimentos", tam:"Micro", rel:"Graduado UNAB", mun:"Bucaramanga", form:"Matrícula vigente", compl:100, venc:2, ult:"20 oct 2026"},
    {id:"c2", nombre:"Papelería El Estudiante", nit:"999.210.300-0", sector:"Comercio", tam:"Micro", rel:"Externo", mun:"Floridablanca", form:"Formalización parcial", compl:90, venc:1, ult:"6 may 2026"},
    {id:"c3", nombre:"Asesorías Contables Norte", nit:"999.320.411-1", sector:"Servicios", tam:"Pequeña", rel:"Estudiante", mun:"Bucaramanga", form:"Matrícula vigente", compl:100, venc:0, ult:"15 jun 2026"},
    {id:"c4", nombre:"Confecciones La Aguja", nit:"999.430.522-2", sector:"Manufactura e Industrial", tam:"Pequeña", rel:"Externo", mun:"Girón", form:"Matrícula vencida", compl:85, venc:4, ult:"11 may 2026"},
    {id:"c5", nombre:"Hostal Mirador del Cacique", nit:"", sector:"Turismo", tam:"", rel:"Colaborador", mun:"Piedecuesta", form:"Informal", compl:40, venc:0, ult:"17 sep 2026"},
    {id:"c6", nombre:"Tejidos Chicamocha", nit:"999.650.733-3", sector:"Artesanías", tam:"", rel:"Externo", mun:"San Gil", form:"Formalización parcial", compl:60, venc:0, ult:"20 may 2026"},
    {id:"c7", nombre:"Datos al Día S.A.S.", nit:"999.780.844-1", sector:"Tecnología y TIC", tam:"Mediana", rel:"Graduado UNAB", mun:"Bucaramanga", form:"Matrícula vigente", compl:100, venc:0, ult:"21 oct 2026"}
  ],
  /* Estados de procedencia de ejemplo (PROPUESTA de muestra; V=verificado, D=declarado, R=por revisar, 0=sin dato). Orden: nit, sector, razón social, tamaño, formalización, correo. */
  prov: {c1:"DDDDDR",c2:"DDDD0D",c3:"DDDDDD",c4:"DDRDRD",c5:"0DD0DR",c6:"DDD0DD",c7:"DDDDDD"},
  personas: [
    {id:"p1", nombre:"Marcela Rojas", rol:"Propietaria · Dulce Hogar", emp:"c1"},
    {id:"p2", nombre:"Julio Prada", rol:"Contacto · Dulce Hogar", emp:"c1"},
    {id:"p3", nombre:"Laura Cárdenas", rol:"Propietaria · Asesorías Contables Norte", emp:"c3"},
    {id:"p4", nombre:"Sandra Ortiz", rol:"Contacto · Confecciones La Aguja", emp:"c4"}
  ],
  eventos: [
    {id:"e1", nombre:"Taller de finanzas básicas", fecha:"12 nov 2026", tipo:"Capacitación"},
    {id:"e2", nombre:"Taller de marketing digital", fecha:"20 mar 2026", tipo:"Capacitación"}
  ],
  /* Coincidencias fijas citadas en 16 §9.1 para la consulta de la demo; para otras consultas se calcula similitud de trigramas en el navegador. */
  demoCoin: {"pamaderia":{c1:0.82,"panadería la espiga":0.58}},
  diag: {
    dims:["Mercadeo","Finanzas","Operaciones","Formalización"],
    d1:[55,35,60,70], d2:[50,58,62,70], d3:[52,71,64,72],
    f:["17 feb 2026","28 may 2026","6 oct 2026"]
  },
  hilo: [
    ["2026-10-20","cita","Cita agendada para el 27 oct (no realizada)","abierto"],
    ["2026-10-14","comp","Dos compromisos del plan 1 vencidos: «Abrir cuenta de WhatsApp Business», «Crear lista de precios impresa»","venc"],
    ["2026-10-06","diag","Diagnóstico 3: finanzas 71, mercadeo 52 · +50",""],
    ["2026-09-29","asis","Sesión de la Ruta de Acompañamiento · +30",""],
    ["2026-09-22","comp","«Registrar ventas diarias» cumplido a tiempo · +25",""],
    ["2026-09-08","asis","Taller de finanzas · +30",""],
    ["2026-08-18","proy","Proyecto de aula «Finanzas», 2026-2 · plan 2 con 2 compromisos","abierto"],
    ["2026-06-10","proy","Proyecto de mercadeo finalizado",""],
    ["2026-05-28","diag","Diagnóstico 2: finanzas 58, mercadeo 50 (cae) · +50",""],
    ["2026-05-14","asis","Sesión de la Ruta de Acompañamiento · +30",""],
    ["2026-05-05","comp","«Reunir recibos del mes» cumplido a tiempo · +25",""],
    ["2026-04-15","comp","«Definir cliente ideal» cumplido a tiempo · +25",""],
    ["2026-04-02","comp","«Publicar en 2 canales» cumplido a tiempo · +25",""],
    ["2026-03-27","asis","Asistió al taller de marketing digital · +30",""],
    ["2026-03-20","even","Inscripción al taller de marketing digital",""],
    ["2026-03-12","cita","Cita de finanzas realizada · +20",""],
    ["2026-03-03","proy","Proyecto de aula «Mercadeo II», 2026-1, 3 estudiantes consultores",""],
    ["2026-02-24","plan","Plan 1 con 6 compromisos",""],
    ["2026-02-17","diag","Diagnóstico 1: total 48 (mercadeo 55, finanzas 35, operaciones 60, formalización 70) · +50",""],
    ["2026-02-10","punt","Ficha básica completa: +40 · insignia Primer paso",""],
    ["2026-02-10","aten","Primera asesoría (T1)",""]
  ]
};

/* Normalización y similitud de trigramas (aproxima pg_trgm; en producción la calcula PostgreSQL). */
window.norm = s => (s||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim();
window.trigramas = s => { const out=new Set(); norm(s).split(" ").filter(Boolean).forEach(w=>{const t="  "+w+" "; for(let i=0;i<t.length-2;i++) out.add(t.slice(i,i+3));}); return out; };
window.similitud = (a,b) => { const A=trigramas(a),B=trigramas(b); if(!A.size||!B.size) return 0; let n=0; A.forEach(x=>{if(B.has(x)) n++;}); return n/(A.size+B.size-n); };
window.fmtNum = n => new Intl.NumberFormat("es-CO").format(n);
window.fmtDec = n => String(n).replace(".",",");

/* Dígito de verificación del NIT (algoritmo DIAN: pesos 3,7,13,17,19,23,29,37,41,43,47,53,59,67,71). */
window.dvNit = base => {
  const w=[3,7,13,17,19,23,29,37,41,43,47,53,59,67,71]; const d=String(base).split("").reverse();
  let s=0; d.forEach((x,i)=>{s+=Number(x)*w[i];}); const r=s%11; return r>1?11-r:r;
};

/* confianza_ficha (RF-48): pesos nit .25, sector .20, razón social .15, tamaño .15, formalización .15, correo .10; V 1,0 · D 0,6 · R 0,3. */
window.confianza = id => { const w=[25,20,15,15,15,10], v={V:10,D:6,R:3,"0":0}; const p=DATOS.prov[id]; if(!p) return 0; const t=p.split("").reduce((a,c,i)=>a+w[i]*v[c],0); return Math.floor((t+5)/10); };
