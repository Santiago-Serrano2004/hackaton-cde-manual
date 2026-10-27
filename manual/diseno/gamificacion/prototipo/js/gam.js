/* Comportamiento del prototipo «El hilo». Sin dependencias. Movimiento solo con transform y opacity (salvo el contador de texto).
   Estado en localStorage (clave cde-gam) solo como comodidad de la demo; todo funciona sin él. */
(function () {
  "use strict";
  const D = window.GDATOS;
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const Q = new URLSearchParams(location.search);
  const CLAVE = "cde-gam";
  const mq = matchMedia("(prefers-reduced-motion: reduce)");

  /* ---------- estado ---------- */
  let S = { intensidad: "completo", cerrado: false, avisado: false, enfoque: "compromisos", toasts: 0 };
  try { Object.assign(S, JSON.parse(localStorage.getItem(CLAVE) || "{}")); } catch (e) {}
  if (["completo", "discreto", "oculto"].includes(Q.get("intensidad"))) S.intensidad = Q.get("intensidad");
  if (Q.get("cerrado") === "1") { S.cerrado = true; S.avisado = true; }
  if (Q.get("cerrado") === "0") { S.cerrado = false; S.avisado = false; }
  if (Q.get("avisado") === "1") S.avisado = true;
  S.toasts = 0;
  function guardar() { try { localStorage.setItem(CLAVE, JSON.stringify({ intensidad: S.intensidad, cerrado: S.cerrado, avisado: S.avisado, enfoque: S.enfoque })); } catch (e) {} }

  const reducir = () => mq.matches || Q.get("mov") === "no";
  const mov = () => S.intensidad === "completo" && !reducir();
  function aplicarModo() {
    const h = document.documentElement;
    h.setAttribute("data-intensidad", S.intensidad);
    h.setAttribute("data-mov", mov() ? "si" : "no");
  }
  aplicarModo(); mq.addEventListener && mq.addEventListener("change", aplicarModo);

  /* ---------- utilidades ---------- */
  const fecha = (iso) => { const [y, m, d] = iso.split("-"); return +d + " " + ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"][+m - 1] + " " + y; };
  const miles = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const ic = (n, c = "") => `<svg class="ic ${c}" aria-hidden="true"><use href="#i-${n}"/></svg>`;
  const puntadasTodas = () => D.puntadas.concat(S.cerrado ? [D.cierre] : []);
  const total = () => puntadasTodas().reduce((a, p) => a + p.pts, 0);
  const nivelDe = (pts) => { let r = D.niveles[0]; D.niveles.forEach((n) => { if (pts >= n.min) r = n; }); return r; };
  const siguiente = (n) => D.niveles[n.n] || null;
  function anunciar(msg) { const a = $("#anuncio"); if (!a) return; a.textContent = ""; setTimeout(() => { a.textContent = msg; }, 60); }
  /* ?lento=N alarga N veces los tiempos de JS: solo ayuda de prueba para fotografiar los fotogramas (90_revision.md) */
  const LENTO = Math.max(1, +Q.get("lento") || 1);
  function esperar(ms) { return new Promise((r) => setTimeout(r, ms * LENTO)); }

  /* Línea de estado discreta: sustituye a toasts y celebraciones en «Discreto» y a partir del tercer aviso (RG-07) */
  function linea(msg) { const l = $("#g-linea"); if (l) { l.textContent = msg; l.hidden = false; } anunciar(msg); }

  /* Toast con cola: máximo 1 visible; el 3.º de la sesión y los siguientes pasan a la línea discreta */
  let toastVivo = null;
  function gToast(msg, tipo) {
    if (S.intensidad === "oculto") { anunciar(msg); return; }
    S.toasts++;
    if (S.intensidad === "discreto" || S.toasts > 2) { linea(msg); return; }
    if (toastVivo) toastVivo.remove();
    const c = $(".toasts") || document.body.appendChild(Object.assign(document.createElement("div"), { className: "toasts" }));
    const t = document.createElement("div");
    t.className = "toast " + (tipo || "ok"); t.setAttribute("role", "status");
    t.innerHTML = ic("circle-check") + "<span></span>"; t.lastChild.textContent = msg;
    c.appendChild(t); toastVivo = t; setTimeout(() => { t.remove(); if (toastVivo === t) toastVivo = null; }, 5000);
  }

  /* ---------- render: tarjeta de nivel ---------- */
  function renderNivel(animar, instante) {
    const pts = total(), n = nivelDe(pts), sig = siguiente(n);
    const raiz = $("#g-nivel"); if (!raiz) return;
    const rango = sig ? sig.min - n.min : 1, v = sig ? Math.min(1, (pts - n.min) / rango) : 1;
    $("#g-nivel-emb", raiz).innerHTML = `<svg aria-hidden="true"><use href="#g-tramo-${n.emb}"/></svg>`;
    $("#g-nivel-eyebrow", raiz).textContent = "Nivel " + n.n + " de 6";
    $("#g-nivel-tit", raiz).textContent = n.nombre;
    $("#g-nivel-frase", raiz).textContent = n.frase || "";
    $("#g-nivel-falta", raiz).textContent = sig ? `Te faltan ${sig.min - pts} puntos para el nivel ${sig.n}.` : "Llegaste al último nivel.";
    $("#g-nivel-min", raiz).textContent = miles(n.min); $("#g-nivel-max", raiz).textContent = sig ? miles(sig.min) : "";
    const bar = $(".g-barra", raiz); bar.setAttribute("role", "progressbar"); bar.setAttribute("aria-label", "Progreso hacia el siguiente nivel");
    bar.setAttribute("aria-valuemin", "0"); bar.setAttribute("aria-valuemax", "100"); bar.setAttribute("aria-valuenow", Math.round(v * 100));
    bar.setAttribute("aria-valuetext", `${pts} puntos, nivel ${n.n}: ${n.nombre}` + (sig ? `. Faltan ${sig.min - pts} para el nivel ${sig.n}` : ""));
    const rel = bar.firstElementChild; if (instante) rel.style.transition = "none";
    rel.style.setProperty("--v", v); if (instante) { void rel.offsetWidth; rel.style.transition = ""; }
    if (!animar) $("#g-puntos", raiz).textContent = miles(pts);
    $$("[data-puntos]").forEach((e) => { if (!animar) e.textContent = miles(pts); });
  }
  function contar(desde, hasta, ms) {
    const els = $$("[data-puntos], #g-puntos"); if (!els.length) return;
    if (!mov()) { els.forEach((e) => (e.textContent = miles(hasta))); return; }
    const t0 = performance.now();
    (function paso() {
      const k = Math.max(0, Math.min(1, (performance.now() - t0) / (ms * LENTO))), v = Math.round(desde + (hasta - desde) * (1 - Math.pow(1 - k, 3)));
      els.forEach((e) => (e.textContent = miles(v))); if (k < 1) requestAnimationFrame(paso);
    })();
  }

  /* ---------- render: ruta (el hilo recorre las estaciones) ---------- */
  function estadoNodos() {
    return D.ruta.map((r, i) => {
      if (S.cerrado) {
        if (r.id === "hoy") return "hecho"; if (r.id === "finanzas") return "hoy"; if (r.meta) return "meta"; return i < 3 ? "hecho" : "sig";
      }
      if (r.actual) return "hoy"; if (r.meta) return "meta"; return i < 3 ? "hecho" : "sig";
    });
  }
  function renderRuta(nuevoIdx) {
    const ol = $("#g-nodos"); if (!ol) return;
    const est = estadoNodos();
    ol.innerHTML = D.ruta.map((r, i) => {
      let cls = est[i] === "hecho" ? "g-hecho" : est[i] === "hoy" ? "g-hoy" : est[i] === "meta" ? "g-meta g-sig" : "g-sig";
      if (i === nuevoIdx) cls += " g-nodo-nuevo";
      const lab = est[i] === "hecho" ? "Hecho" : est[i] === "hoy" ? "Estás aquí" : est[i] === "meta" ? "Meta" : "Siguiente";
      let sub = r.sub;
      if (r.id === "hoy" && S.cerrado) sub = "Cumplido 29 oct";
      if (r.id === "hoy" && S.avisado && !S.cerrado) sub = "En revisión por el equipo";
      if (r.meta) { const p = total(), n = nivelDe(p); sub = n.n >= 4 ? "Alcanzado" : `A ${450 - p} puntos`; }
      const nodo = r.meta ? `<span class="g-n"><svg class="emb" aria-hidden="true"><use href="#g-tramo-impulsor"/></svg></span>` :
        `<span class="g-n">${est[i] === "hecho" ? ic("check") : ic(r.ic)}</span>`;
      return `<li class="${cls}"${r.meta ? " data-gam" : ""}${est[i] === "hoy" ? ' aria-current="step"' : ""}>${nodo}<div><span class="g-estado-txt">${lab}</span><b>${r.t}</b><span>${sub}</span></div></li>`;
    }).join("");
    trazar(nuevoIdx);
  }
  function trazar(nuevoIdx) {
    const mapa = $(".g-mapa"), svg = $("#g-hilo"), ol = $("#g-nodos"); if (!mapa || !svg || !ol) return;
    const R = mapa.getBoundingClientRect(), est = estadoNodos();
    const vis = $$("li", ol).map((li, i) => ({ li, i })).filter((o) => o.li.offsetParent !== null);
    const pts = vis.map((o) => { const b = $(".g-n", o.li).getBoundingClientRect(); return { x: b.left - R.left + b.width / 2, y: b.top - R.top + b.height / 2 }; });
    const idx = vis.map((o) => o.i);
    svg.setAttribute("viewBox", `0 0 ${R.width} ${R.height}`);
    let h = "";
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1], horiz = Math.abs(b.x - a.x) >= Math.abs(b.y - a.y);
      const d = horiz ? `M${a.x} ${a.y}C${(a.x + b.x) / 2} ${a.y} ${(a.x + b.x) / 2} ${b.y} ${b.x} ${b.y}` : `M${a.x} ${a.y}C${a.x} ${(a.y + b.y) / 2} ${b.x} ${(a.y + b.y) / 2} ${b.x} ${b.y}`;
 const ok = est[idx[i + 1]] === "hecho" || est[idx[i + 1]] === "hoy";
      h += `<path d="${d}" class="${ok ? "g-seg-ok" : "g-seg-falta"}${idx[i + 1] === nuevoIdx ? " g-seg-nueva" + (horiz ? "" : " v") : ""}"/>`;
    }
    svg.innerHTML = h;
  }
  addEventListener("resize", () => trazar(-1));
  addEventListener("load", () => trazar(-1));

  /* ---------- render: el hilo de puntadas (historial) ---------- */
  function renderHilo(nueva) {
    const raiz = $("#g-hilo-puntadas"); if (!raiz) return;
    if (!raiz._enlazado) { raiz._enlazado = true; raiz.addEventListener("click", (e) => { const b = e.target.closest(".g-p"); if (b && raiz._clic) raiz._clic(b); }); }
    const todas = puntadasTodas(); let acum = 0; const grupos = [];
    todas.forEach((p, i) => {
      acum += p.pts; const n = nivelDe(acum); let g = grupos[grupos.length - 1];
      if (!g || g.n.n !== n.n) { g = { n, items: [] }; grupos.push(g); }
      g.items.push(Object.assign({ i, acum }, p));
    });
    let html = grupos.map((g) => `<section class="g-capitulo" aria-labelledby="cap${g.n.n}"><h3 id="cap${g.n.n}"><svg aria-hidden="true"><use href="#g-tramo-${g.n.emb}"/></svg>Nivel ${g.n.n} · ${g.n.nombre}<span class="suave peq" style="font-weight:400">${g.items.length} ${g.items.length === 1 ? "puntada" : "puntadas"}</span></h3><ul class="g-puntadas">` +
      g.items.map((p) => {
        const T = D.tipos[p.t], etq = `${fecha(p.f)} · ${p.motivo} · ${p.pts} puntos · ${T.rot}`;
        return `<li><button type="button" class="g-p t-${p.t}${nueva && p.i === todas.length - 1 ? " nueva" : ""}" data-i="${p.i}" aria-pressed="false" aria-label="${etq}">${ic(T.ic)}<span class="n">${p.pts}</span></button></li>`;
      }).join("") + "</ul></section>").join("");
    if (!S.cerrado) {
      html = html.replace(/<\/ul><\/section>(?![\s\S]*<\/ul><\/section>)/, `<li><button type="button" class="g-p fantasma" data-fantasma="1" aria-pressed="false" aria-label="Próxima puntada: «${D.cierre.titulo}», más 25 puntos si lo cumples a tiempo">${ic("circle-check")}<span class="n">+25</span></button></li></ul></section>`);
    }
    raiz.innerHTML = html;
    const det = $("#g-detalle-p");
    raiz._clic = (b) => {
      $$(".g-p", raiz).forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      if (b.dataset.fantasma) { det.innerHTML = `<b>Próxima puntada</b> · «${D.cierre.titulo}», vence el ${D.cierre.vence}. Si lo cumples a tiempo, suma 25 puntos.`; return; }
      const p = todas[+b.dataset.i], T = D.tipos[p.t];
      det.innerHTML = `<b>${fecha(p.f)}</b> · ${p.motivo} · <b>+${p.pts} puntos</b> · ${T.rot} · total ${miles(todas.slice(0, +b.dataset.i + 1).reduce((a, x) => a + x.pts, 0))}`;
    };
    // tabla de detalle (equivalente textual)
    const tb = $("#g-tabla-detalle-b"); if (tb) {
      let a = 0; tb.innerHTML = todas.map((p) => { a += p.pts; return `<tr><td>${fecha(p.f)}</td><td>${p.motivo}</td><td>${D.tipos[p.t].rot}</td><td class="num">+${p.pts}</td><td class="num">${miles(a)}</td></tr>`; }).join("");
      $("#g-tabla-total").textContent = `Total: ${todas.length} movimientos, ${miles(total())} puntos`;
    }
  }

  /* ---------- render: insignias ---------- */
  function renderInsignias(nueva) {
    const raiz = $("#g-sellos"); if (!raiz) return;
    raiz.innerHTML = D.insignias.map((s) => {
      const ganada = s.progreso === undefined || (S.cerrado && s.cod === "CUMPLIDOR");
      const prog = s.progreso !== undefined && !ganada, p = ganada ? 100 : prog ? Math.round(s.progreso / s.meta * 100) : 0;
      const cls = ganada ? "ganado" : prog ? "enprog" : "bloq";
      const nuevoCls = nueva && s.cod === "CUMPLIDOR" ? " nuevo" : "";
      const est = ganada ? `<span class="est est-ok">${ic("circle-check")}Ganada</span>` : `<span class="est est-curso">${ic("clock")}En progreso · llevas ${s.progreso} de ${s.meta}</span>`;
      const ficha = ganada ? `<dl><dt>Criterio</dt><dd>${s.crit}</dd><dt>Ganada el</dt><dd>${s.ganada}</dd><dt>Por</dt><dd>${s.hecho}</dd></dl>` :
        `<dl><dt>Criterio</dt><dd>${s.crit}</dd><dt>Te falta</dt><dd>${s.meta - s.progreso} compromiso a tiempo. «${D.cierre.titulo}» vence el ${D.cierre.vence}.</dd></dl>`;
      return `<article class="g-sello ${cls}${nuevoCls}" style="--g-p:${p}" aria-labelledby="s-${s.cod}"><div class="g-cab"><svg class="sel" role="img" aria-label="Insignia ${s.nombre}, ${ganada ? "ganada" : "en progreso"}"><use href="#g-sello-${s.art}"/></svg><div><h3 id="s-${s.cod}">${s.nombre}</h3>${est}</div></div><p>${s.crit}</p><details><summary>Ver ficha ${ic("chevron-down")}</summary>${ficha}</details></article>`;
    }).join("");
    const prox = $("#g-proximas"); if (prox) prox.innerHTML = D.proximas.map((s) => `<div><svg class="sel" aria-hidden="true"><use href="#g-sello-${s.art}"/></svg><span>${s.nombre}</span></div>`).join("");
  }

  /* ---------- render: pendientes y paso ---------- */
  function renderPendientes() {
    const ul = $("#g-pendientes"); if (!ul) return;
    ul.innerHTML = D.pendientes.map((p) => {
      let est = p.est, txt = p.sub, tag;
      if (p.id === "precios") {
        if (S.cerrado) { est = "ok"; txt = "Cumplido el 29 oct 2026, a tiempo"; }
        else if (S.avisado) { est = "adv"; txt = "Avisaste al equipo. Está en revisión."; }
      }
      tag = est === "ok" ? `<span class="est est-ok">${ic("circle-check")}Cumplido</span>` : est === "adv" ? `<span class="est est-adv">${ic("clock")}En revisión</span>` : est === "venc" ? `<span class="est est-venc">${ic("triangle-alert")}Vencido</span>` : `<span class="est est-curso">${ic("clock")}En curso</span>`;
      return `<li style="padding:10px 0;border-top:1px solid var(--divisor)"><strong>${p.t}</strong><br><span class="suave peq">${txt}</span> ${tag}</li>`;
    }).join("");
  }
  function renderPaso() {
    const b = $("#g-avisar"), eq = $("#g-equipo-btn"), card = $("#g-paso"); if (!card) return;
    const casi = $("#g-casi");
    if (S.cerrado) {
      $("#g-paso-tit").textContent = "Todo al día por ahora";
      $("#g-paso-txt").textContent = "El equipo te propondrá un nuevo paso en tu próxima sesión.";
      b.hidden = true; if (casi) casi.hidden = true; if (eq) { eq.disabled = true; }
      const es = $("#g-equipo-est"); if (es) es.textContent = "ya está cumplido.";
    } else {
      $("#g-paso-tit").textContent = D.cierre.titulo;
      $("#g-paso-txt").textContent = S.intensidad === "oculto" ? "Vence el 31 oct 2026." : "Vence el 31 oct 2026 · cerrar este compromiso da +25 puntos.";
      b.hidden = false; b.disabled = S.avisado; b.textContent = S.avisado ? "Aviso enviado" : "Avisar al equipo que lo terminé";
      if (casi) casi.hidden = S.intensidad === "oculto" || S.avisado;
      if (eq) eq.disabled = !S.avisado;
      const es = $("#g-equipo-est"); if (es) es.textContent = S.avisado ? "La persona emprendedora avisó. Falta que el equipo lo marque." : "El equipo aún no lo revisa. Se habilita cuando la persona emprendedora avisa.";
    }
    const ef = $("#g-enfoque"); if (ef) { const m = D.misiones.find((x) => x.id === S.enfoque); ef.textContent = m ? m.t + (m.id === "compromisos" ? " · " + Math.min(5, S.cerrado ? 5 : 4) + " de 5" : "") : "—"; }
  }

  /* ---------- la escena: cerrar un compromiso (G-03 + G-04 + G-05 combinados) ---------- */
  async function avisar() {
    S.avisado = true; guardar(); renderPaso(); renderPendientes(); renderRuta(-1);
    gToast("Listo. El equipo revisará y marcará tu compromiso.", "ok");
  }
  async function cerrar() {
    if (S.cerrado) { gToast("Este logro ya estaba registrado. No se suman puntos dos veces.", "ok"); return; }
    const antes = total(), animar = mov();
    scrollTo(0, 0); if (toastVivo) { toastVivo.remove(); toastVivo = null; }
    S.cerrado = true; S.avisado = true; guardar();
    const msg = "Cumpliste «Actualizar precios»: +25 puntos, nivel 4 e insignia Cumplidor.";
    // 1) la puntada se teje: nodo, segmento del hilo y baldosa
    // la estación «Actualizar precios» pasa a hecho; el hilo avanza al nodo 4 (taller de finanzas) que pasa a «Estás aquí»
    renderPaso(); renderPendientes(); renderRuta(4);
    renderHilo(true); renderInsignias(false);
    // 2) contador y barra
    if (animar) await esperar(120);
    contar(antes, total(), 500);
    const pts = total();
    const raiz = $("#g-nivel");
    if (raiz) {
      const bar = $(".g-barra>i", raiz);
      if (animar) { bar.style.setProperty("--v", 1); }
      await (animar ? esperar(880) : Promise.resolve());
      renderNivel(true, true); contar(pts, pts, 1);
    }
    renderInsignias(true); renderRuta(-1); trazar(-1);
    // 3) un único aviso: tarjeta de hito (Completo), línea (Discreto) o nada de puntos (Oculto)
    if (S.intensidad === "completo") hito(); else if (S.intensidad === "discreto") linea(msg); else { gToast("Compromiso marcado como cumplido.", "ok"); anunciar("Compromiso marcado como cumplido."); }
    if (S.intensidad === "completo") anunciar(msg);
    document.dispatchEvent(new CustomEvent("gam:cierre"));
  }
  function hito() {
    const c = $("#g-hito"); if (!c) return;
    const n = D.niveles[3];
    c.innerHTML = `<div class="g-fila"><div class="g-emb-s"><svg aria-hidden="true"><use href="#g-tramo-impulsor"/></svg></div><div><h2 id="g-hito-t">Nivel 4: Impulsor</h2><span class="suave">${n.frase}</span></div></div>
    <div class="g-sello-n"><svg role="img" aria-label="Insignia Cumplidor, ganada" style="--g-p:100"><use href="#g-sello-cumplidor"/></svg><div><b>Nueva insignia: Cumplidor</b><br><span class="suave peq">Cinco compromisos cumplidos a tiempo.</span></div></div>
    <ul aria-label="Resumen de tu nivel 3"><li><b>6</b> puntadas nuevas en el nivel 3</li><li><b>2</b> compromisos cumplidos a tiempo</li><li>Finanzas subió <b>de 58 a 71</b> en tu último diagnóstico</li></ul>
    <div class="g-acc"><a class="btn btn-s" href="logros.html">Ver mis logros</a><button class="btn btn-g" type="button" data-cerrar-hito>Cerrar</button></div>`;
    c.hidden = false; c.classList.remove("entra"); void c.offsetWidth; c.classList.add("entra");
  }
  document.addEventListener("click", (e) => { if (e.target.closest("[data-cerrar-hito]")) { const c = $("#g-hito"); c.hidden = true; } });
  document.addEventListener("keydown", (e) => { const c = $("#g-hito"); if (e.key === "Escape" && c && !c.hidden) c.hidden = true; });

  function reiniciar() { S.cerrado = false; S.avisado = false; S.toasts = 0; guardar(); const h = $("#g-hito"); if (h) h.hidden = true; const l = $("#g-linea"); if (l) l.hidden = true; pintarTodo(); anunciar("Demostración reiniciada."); }
  async function simular() {
    if (S.cerrado) reiniciar();
    const b = $("#g-simular"); if (b) b.disabled = true;
    if (!S.avisado) { await avisar(); await esperar(mov() ? 900 : 200); }
    await cerrar(); if (b) b.disabled = false;
  }

  /* ---------- hallazgo ---------- */
  function renderHallazgo() {
    const raiz = $("#g-hallazgo-filas"); if (!raiz) return;
    raiz.innerHTML = D.diag.dims.map((d, i) => {
      const a = D.diag.d1[i], b = D.diag.d3[i], dl = b - a, sg = dl > 0 ? "+" + dl : dl < 0 ? "−" + Math.abs(dl) : "0";
      return `<div class="g-hallazgo-fila"><span><b>${d}</b></span><div class="g-hbarra" role="img" aria-label="${d}: de ${a} a ${b}"><i class="antes" style="--v:${a / 100};--k:${i}"></i><i class="ahora" style="--v:${b / 100};--k:${i}"></i></div><span class="g-delta">${a} → ${b} (${sg})</span></div>`;
    }).join("");
  }

  /* ---------- intensidad ---------- */
  function iniciarIntensidad() {
    $$('input[name="g-intensidad"]').forEach((r) => {
      r.checked = r.value === S.intensidad;
      r.addEventListener("change", () => { S.intensidad = r.value; guardar(); aplicarModo(); pintarTodo(); linea("Celebraciones: " + r.parentElement.textContent.trim() + "."); });
    });
  }
  function primeraVez() {
    const c = $("#g-primera"); if (!c) return;
    c.hidden = !(Q.get("primera") === "1");
    c.addEventListener("click", (e) => {
      const b = e.target.closest("[data-elegir]"); if (!b) return;
      S.intensidad = b.dataset.elegir; guardar(); aplicarModo(); c.hidden = true;
      $$('input[name="g-intensidad"]').forEach((r) => (r.checked = r.value === S.intensidad));
      pintarTodo(); linea("Listo. Puedes cambiar esto cuando quieras en «Celebraciones».");
    });
  }

  /* ---------- misiones y enfoque ---------- */
  function renderMisiones() {
    const raiz = $("#g-misiones"); if (!raiz) return;
    raiz.innerHTML = D.misiones.map((m) => {
      const pasos = m.id === "compromisos" ? [{ t: "Cumplir 5 compromisos a tiempo", pts: "+25 c/u", n: S.cerrado ? 5 : 4, de: 5 }] : m.pasos;
      const hecha = m.estado === "hecha" || (m.id === "compromisos" && S.cerrado);
      const est = m.estado === "prox" ? `<span class="est est-neu">${ic("lock")}Próximamente</span>` : hecha ? `<span class="est est-ok">${ic("circle-check")}Recorrido completo</span>` : `<span class="est est-curso">${ic("clock")}En curso</span>`;
      const li = pasos.map((p) => {
        if (p.de) return `<li class="${p.n >= p.de ? "ok" : "ahora"}"><span class="mk">${p.n >= p.de ? ic("check") : ""}</span><span>${p.t}: llevas <b>${p.n} de ${p.de}</b></span><span class="pts">${p.pts}</span></li>`;
        const c = p.ok ? "ok" : p.ahora ? "ahora" : "falta";
        return `<li class="${c}"><span class="mk">${p.ok ? ic("check") : ""}</span><span>${p.t}</span><span class="pts">${p.pts}</span></li>`;
      }).join("");
      const cuerpo = m.estado === "prox" ? `<p class="suave peq">Pitch listo y otras misiones quedan fuera del alcance de esta versión.</p>` : `<ol class="g-pasos">${li}</ol>`;
      const enf = m.estado === "curso" && !hecha ? `<label class="interruptor" style="min-height:44px"><input type="radio" name="g-enfoque" value="${m.id}" ${S.enfoque === m.id ? "checked" : ""}> Mi enfoque ahora</label>` : "";
      return `<article class="g-mision${S.enfoque === m.id && m.estado === "curso" && !hecha ? " foco" : ""}${hecha ? " completa" : ""}${hecha && m.id === "compromisos" && S.cerrado ? " nueva" : ""}"><h3>${m.t}</h3>${est}${cuerpo}${enf}</article>`;
    }).join("");
    $$('input[name="g-enfoque"]', raiz).forEach((r) => r.addEventListener("change", () => { S.enfoque = r.value; guardar(); renderMisiones(); renderPaso(); linea("Tu enfoque ahora: " + D.misiones.find((x) => x.id === r.value).t + "."); }));
  }

  /* ---------- módulo de formación: verificación ---------- */
  function iniciarModulo() {
    const raiz = $("#g-preguntas"); if (!raiz) return;
    raiz.innerHTML = D.leccion.preguntas.map((p, i) => `<fieldset class="g-preg"><legend>${i + 1}. ${p.q}</legend>${p.o.map((o, j) => `<label><input type="radio" name="q${i}" value="${j}"> ${o}</label>`).join("")}<div id="r${i}" role="status" aria-live="polite"></div></fieldset>`).join("");
    raiz.addEventListener("change", (e) => {
      const r = e.target; if (r.type !== "radio") return; const i = +r.name.slice(1), p = D.leccion.preguntas[i], ok = +r.value === p.c;
      $("#r" + i).innerHTML = `<div class="g-retro ${ok ? "ok" : "casi"}">${ic(ok ? "circle-check" : "info")}<span>${ok ? p.ok : p.mal}</span></div>`;
      const hechas = $$("#g-preguntas [role=status] .g-retro").length, buenas = $$("#g-preguntas .g-retro.ok").length;
      $("#g-resumen-prac").textContent = `Respondiste ${hechas} de ${D.leccion.preguntas.length}; acertaste ${buenas}. Esta práctica no suma puntos en esta versión.`;
    });
  }

  /* ---------- galería de momentos ---------- */
  function iniciarMomentos() {
    document.addEventListener("click", async (e) => {
      const b = e.target.closest("[data-momento]"); if (!b) return; const m = b.dataset.momento;
      if (m === "G-02") gToast("+30 · Asististe a «Taller de finanzas básicas»", "ok");
      if (m === "G-03" || m === "G-04" || m === "G-05") { reiniciarCompleto(); await esperar(150); await simular(); }
      if (m === "G-06") { const c = $("#g-demo-casi"); c.hidden = false; anunciar(c.textContent.trim()); }
      if (m === "G-09") gToast("Este logro ya estaba registrado. No se suman puntos dos veces.", "ok");
      if (m === "G-09b") gToast("Alcanzaste el máximo de puntos de este reto este mes. Sigue con los demás.", "ok");
      if (m === "G-01") { const c = $("#g-primera"); c.hidden = false; c.scrollIntoView({ block: "nearest" }); }
    });
  }
  function reiniciarCompleto() { S.cerrado = false; S.avisado = false; S.toasts = 0; guardar(); }

  /* ---------- arranque ---------- */
  function pintarTodo() {
    aplicarModo(); renderNivel(false); renderRuta(-1); renderHilo(false); renderInsignias(false);
    renderPendientes(); renderPaso(); renderHallazgo(); renderMisiones();
  }
  function arrancar() {
    pintarTodo(); iniciarIntensidad(); primeraVez(); iniciarModulo(); iniciarMomentos();
    const a = $("#g-avisar"); a && a.addEventListener("click", avisar);
    const e = $("#g-equipo-btn"); e && e.addEventListener("click", cerrar);
    const s = $$("#g-simular,[data-simular]"); s.forEach((x) => x.addEventListener("click", simular));
    const r = $$("[data-reiniciar]"); r.forEach((x) => x.addEventListener("click", reiniciar));
    // estado simulado (vacío/cargando/error) para las pantallas con ?estado=
    document.dispatchEvent(new CustomEvent("gam:listo"));
    if (Q.get("auto") === "1") setTimeout(simular, 700);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", arrancar); else arrancar();
  window.GAM = { toast: gToast, simular, reiniciar, avisar, cerrar, estado: () => S, total };
})();
