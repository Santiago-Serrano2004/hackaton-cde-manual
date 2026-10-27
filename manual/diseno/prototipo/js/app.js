window.ICONOS=window.ICONOS||"";
/* Comportamiento compartido del prototipo. Sin dependencias externas. */
(function(){
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const q=new URLSearchParams(location.search);
  const reducir=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Tema: ?tema=claro|oscuro, o preferencia guardada, o del sistema */
  function aplicarTema(t){document.documentElement.setAttribute("data-theme",t);}
  let tema=q.get("tema")==="oscuro"?"dark":q.get("tema")==="claro"?"light":null;
  try{ if(!tema) tema=localStorage.getItem("cde-tema"); }catch(e){}
  if(tema) aplicarTema(tema);
  document.addEventListener("click",e=>{
    const b=e.target.closest("[data-tema-toggle]"); if(!b) return;
    const actual=document.documentElement.getAttribute("data-theme")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");
    const n=actual==="dark"?"light":"dark"; aplicarTema(n); try{localStorage.setItem("cde-tema",n);}catch(e){}
    b.setAttribute("aria-pressed",String(n==="dark"));
  });

  /* Estado de la pantalla: ?estado=vacio|cargando|error|exito */
  const estados=(document.body.dataset.estados||"").split(",").filter(Boolean);
  const est=estados.includes(q.get("estado"))?q.get("estado"):"exito";
  document.body.setAttribute("data-estado",est);
  if(estados.length&&q.get("barra")!=="0"){
    const nom={vacio:"Vacío",cargando:"Cargando",error:"Error",exito:"Éxito",bloqueo:"Bloqueo"};
    const nav=document.createElement("nav"); nav.className="estados"; nav.setAttribute("aria-label","Estados de la pantalla (solo prototipo)");
    nav.innerHTML="<span>Estado</span>"+estados.map(s=>{const u=new URLSearchParams(location.search);u.set("estado",s);return `<a href="?${u}" ${s===est?'aria-current="true"':""}>${nom[s]}</a>`}).join("");
    document.body.appendChild(nav);
  }

  /* Toasts */
  let cont=$(".toasts");
  if(!cont){cont=document.createElement("div");cont.className="toasts";document.body.appendChild(cont);}
  window.toast=function(msg,tipo="ok",opts={}){
    const t=document.createElement("div"); t.className="toast "+tipo; t.setAttribute("role",tipo==="err"?"alert":"status");
    const ic=tipo==="err"?"triangle-alert":tipo==="ok"?"circle-check":"info";
    t.innerHTML=`<svg class="ic" aria-hidden="true"><use href="${window.ICONOS}#i-${ic}"/></svg><span>${msg}</span>`;
    if(opts.accion){const b=document.createElement("button");b.className="btn btn-s";b.textContent=opts.accion;b.onclick=()=>{opts.alAccion&&opts.alAccion();t.remove();};t.appendChild(b);}
    cont.appendChild(t);
    if(tipo!=="err") setTimeout(()=>t.remove(),opts.ms||6000);
    return t;
  };
  document.addEventListener("click",e=>{const b=e.target.closest("[data-toast]"); if(b) toast(b.dataset.msg,b.dataset.toast);});

  /* Diálogos nativos */
  document.addEventListener("click",e=>{
    const a=e.target.closest("[data-abrir-dialogo]"); if(a){const d=document.getElementById(a.dataset.abrirDialogo); d&&d.showModal(); return;}
    const c=e.target.closest("[data-cerrar-dialogo]"); if(c){c.closest("dialog").close();}
  });

  /* Pestañas simples */
  $$("[data-tabs]").forEach(g=>{
    const tabs=$$('[role=tab]',g);
    const sel=t=>{tabs.forEach(x=>{const on=x===t;x.setAttribute("aria-selected",on);x.tabIndex=on?0:-1;const p=document.getElementById(x.getAttribute("aria-controls"));if(p)p.hidden=!on;});};
    tabs.forEach((t,i)=>{t.addEventListener("click",()=>sel(t));t.addEventListener("keydown",e=>{
      let j=null; if(e.key==="ArrowRight")j=(i+1)%tabs.length; if(e.key==="ArrowLeft")j=(i-1+tabs.length)%tabs.length; if(e.key==="Home")j=0; if(e.key==="End")j=tabs.length-1;
      if(j!==null){e.preventDefault();tabs[j].focus();sel(tabs[j]);}});});
    sel(tabs.find(t=>t.getAttribute("aria-selected")==="true")||tabs[0]);
  });

  /* Celebración (confeti simple con transform/opacity; se omite con movimiento reducido) */
  window.celebrar=function(origen){
    const live=$("#anuncio"); 
    if(reducir()) return;
    const r=(origen||document.body).getBoundingClientRect(); const cols=["#F47B20","#FFCC4D","#2F4A9E","#16265C"];
    for(let i=0;i<40;i++){
      const p=document.createElement("i"); p.setAttribute("aria-hidden","true");
      p.style.cssText=`position:fixed;left:${r.left+r.width/2}px;top:${r.top+r.height/2}px;width:8px;height:8px;border-radius:2px;background:${cols[i%4]};z-index:60;pointer-events:none`;
      document.body.appendChild(p);
      const dx=(Math.random()-.5)*360, dy=-120-Math.random()*200;
      p.animate([{transform:"translate(0,0) rotate(0)",opacity:1},{transform:`translate(${dx}px,${dy+260}px) rotate(${Math.random()*540}deg)`,opacity:0}],{duration:1500,easing:"cubic-bezier(.16,1,.3,1)"}).onfinish=()=>p.remove();
    }
  };

  /* Paleta Ctrl+K */
  const velo=$(".velo"); if(velo){
    const inp=$("input",velo), lista=$("ul",velo); let items=[], idx=0, prev=null;
    const demo=window.DATOS||{};
    function buscar(txt){
      const n=norm(txt); const res=[];
      if(!n) return [{grupo:"Sugerencias",ico:"building-2",tit:"Escribe un nombre, NIT o correo",sub:"",nada:true}];
      const fijo=(demo.demoCoin||{})[n]||{};
      (demo.empresas||[]).forEach(e=>{
        let s=fijo[e.id]!==undefined?fijo[e.id]:Math.max(similitud(n,e.nombre),(norm(e.nombre).includes(n)?0.9:0));
        const nit=(e.nit||"").replace(/\D/g,""); if(nit&&nit.includes(n.replace(/\D/g,""))&&n.replace(/\D/g,"").length>=4) s=1;
        if(s>=0.3) res.push({grupo:"Empresas",ico:"building-2",tit:e.nombre,sub:e.sector+(e.mun?" · "+e.mun:""),coin:s,href:"p06-ficha.html"});
      });
      if(fijo["panadería la espiga"]) res.push({grupo:"Empresas",ico:"building-2",tit:"Panadería La Espiga",sub:"Alimentos · Floridablanca",coin:fijo["panadería la espiga"],href:"p06-ficha.html"});
      (demo.personas||[]).forEach(p=>{const s=Math.max(similitud(n,p.nombre),norm(p.nombre).includes(n)?0.9:0); if(s>=0.3) res.push({grupo:"Contactos",ico:"user-round",tit:p.nombre,sub:p.rol,href:"p06-ficha.html"});});
      (demo.eventos||[]).forEach(v=>{const s=Math.max(similitud(n,v.nombre),norm(v.nombre).includes(n)?0.9:0); if(s>=0.3) res.push({grupo:"Eventos",ico:"calendar",tit:v.nombre,sub:v.fecha,href:"p09-eventos.html"});});
      res.sort((a,b)=>(b.coin||0)-(a.coin||0));
      const ord=["Empresas","Contactos","Eventos"]; res.sort((a,b)=>ord.indexOf(a.grupo)-ord.indexOf(b.grupo));
      return res.length?res:[{grupo:"",ico:"search",tit:"No encontramos «"+txt+"». Revisa la ortografía o busca por NIT.",sub:"",nada:true}];
    }
    function pintar(){
      let html="",g=null,i=0;
      items.forEach((it,k)=>{
        if(it.grupo!==g&&it.grupo){g=it.grupo;html+=`<li role="presentation" class="grupo">${g}</li>`;}
        html+=`<li role="option" id="op${k}" aria-selected="${k===idx}" data-k="${k}"><svg class="ic" aria-hidden="true"><use href="${window.ICONOS}#i-${it.ico}"/></svg><span><strong>${it.tit}</strong>${it.sub?`<br><span class="suave peq">${it.sub}</span>`:""}</span>${it.coin!==undefined?`<span class="coin" title="Coincidencia">${fmtDec(it.coin.toFixed(2))}</span>`:""}</li>`;
      });
      lista.innerHTML=html; inp.setAttribute("aria-activedescendant","op"+idx);
      $("#paleta-estado").textContent=items[0]&&items[0].nada?"":items.length+" resultados";
    }
    function abrir(){prev=document.activeElement;velo.classList.add("abierto");inp.value="";items=buscar("");idx=0;pintar();inp.focus();}
    function cerrar(){velo.classList.remove("abierto");prev&&prev.focus&&prev.focus();}
    window.abrirPaleta=abrir;
    document.addEventListener("keydown",e=>{
      if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();velo.classList.contains("abierto")?cerrar():abrir();return;}
      if(!velo.classList.contains("abierto")) return;
      if(e.key==="Escape"){cerrar();}
      if(e.key==="ArrowDown"){e.preventDefault();idx=Math.min(idx+1,items.length-1);pintar();}
      if(e.key==="ArrowUp"){e.preventDefault();idx=Math.max(idx-1,0);pintar();}
      if(e.key==="Enter"&&items[idx]&&items[idx].href){location.href=items[idx].href+(location.search.includes("tema")?"?"+new URLSearchParams({tema:q.get("tema")}):"");}
    });
    inp.addEventListener("input",()=>{items=buscar(inp.value);idx=0;pintar();});
    lista.addEventListener("click",e=>{const li=e.target.closest("[data-k]");if(li&&items[li.dataset.k].href)location.href=items[li.dataset.k].href;});
    velo.addEventListener("click",e=>{if(e.target===velo)cerrar();});
    document.addEventListener("click",e=>{if(e.target.closest("[data-abrir-paleta]"))abrir();});
    if(q.get("paleta")!==null){abrir();if(q.get("paleta")){inp.value=q.get("paleta");items=buscar(inp.value);pintar();}}
  }
})();

/* Popover de sello de procedencia (RF-48): clic/Enter/Espacio abre; Esc cierra y devuelve el foco. */
(function(){
  let abierto=null;
  function cerrar(){ if(abierto){abierto.pop.remove();abierto.btn.setAttribute("aria-expanded","false");abierto.btn.focus();abierto=null;} }
  document.addEventListener("click",e=>{
    const b=e.target.closest("[data-sello]");
    if(!b){ if(abierto&&!e.target.closest(".popover")) cerrar(); return; }
    if(abierto&&abierto.btn===b){cerrar();return;} cerrar();
    const pop=document.createElement("div"); pop.className="popover"; pop.setAttribute("role","dialog"); pop.textContent=b.dataset.info;
    const r=b.getBoundingClientRect(); pop.style.left=Math.max(8,Math.min(r.left+scrollX,innerWidth-336))+"px"; pop.style.top=(r.bottom+scrollY+6)+"px";
    document.body.appendChild(pop); b.setAttribute("aria-expanded","true"); abierto={btn:b,pop};
  });
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&abierto)cerrar();});
})();

/* Estados simulados de la paleta: ?paleta_estado=cargando|error */
(function(){
  const q=new URLSearchParams(location.search), e=q.get("paleta_estado"); if(!e) return;
  addEventListener("load",()=>{
    const v=document.querySelector(".velo"); if(!v) return; v.classList.add("abierto");
    const ul=v.querySelector("ul");
    if(e==="cargando") ul.innerHTML='<li role="presentation" style="padding:16px"><div class="esq" style="height:6px;margin-bottom:12px" aria-hidden="true"></div><span role="status">Buscando…</span></li>';
    if(e==="error") ul.innerHTML='<li role="presentation" style="padding:16px"><div class="banda-error" role="alert"><strong>No pudimos buscar.</strong><button class="btn btn-s" type="button">Reintentar</button></div></li>';
  });
})();
