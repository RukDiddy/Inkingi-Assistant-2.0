/* INKINGI ASSISTANT — application logic (static SPA, hash routing) */

/* ---------------- i18n ---------------- */
let LANG = localStorage.getItem("inkingi_lang") || "en";
const T = {
  en: {
    tag: "Your Inkingi System Guide & Knowledge Companion",
    heroTitle: 'Learn the Inkingi System, <span>step by step</span>.',
    heroSub: "Search any HR procedure — bank details, resignation, PIP evaluation — and get the exact navigation path, steps, and manual screenshots. No need to call HR for routine questions.",
    searchPh: "Search a procedure… e.g. \"update bank details\" / \"nsezera\"",
    ask: "Ask Assistant", home: "Home", corehr: "Core HR", pip: "Talent Management",
    faq: "Kinyarwanda FAQ", manuals: "Browse Manuals", contact: "Contact HR",
    rules: "Internal Rules", rulesH: "Internal Rules Governing RSSB Employees",
    rulesIntro: "Plain-language summaries of the official Internal Rules adopted by the RSSB Board of Directors (effective 31 May 2024). Each section references the exact articles. The signed official document always prevails.",
    rulesNote: "Salary scales, allowance amounts and mission fee tables are in the official appendices and are not published on this portal — contact HR Operations for figures.",
    rulesAsk: "You can also ask the chatbot, e.g. \"How many days of annual leave?\" or \"What is the retirement age?\"",
    signinH: "Staff Sign-In", signinSub: "This portal is reserved for RSSB employees.",
    signinMail: "RSSB email", signinCode: "Access code", signinBtn: "Sign in",
    signinHint: "The access code is shared internally by HR Operations. If you don't have it, contact",
    errMail: "Please use your @rssb.rw email address.", errCode: "Incorrect access code.",
    signout: "Sign out",
    browse: "Browse by topic", navLbl: "Navigation path in Oracle HCM",
    stepsH: "Step-by-step", shotsH: "Manual screenshots", relH: "Related topics",
    pagesLbl: "pages", openFull: "Open full size", prev: "Previous", next: "Next", close: "Close",
    chatHi: "Muraho! 👋 I'm INKINGI. Ask me any Oracle HCM question in English or Kinyarwanda — for example \"How do I update bank details?\" or \"Nigute nsezera mu kazi?\"",
    openArt: "Open full guide", noMatch: "I couldn't find a matching procedure. Try different words, or contact the HR Operations Office for help.",
    didYouMean: "You might also mean:", quick: "Popular:",
    stGuides: "step-by-step guides", stShots: "manual screenshots", stLang: "languages", stAlways: "self-service",
    roleAll: "All", roleFilter: "Filter by role", roleFor: "For", roleEmpty: "No guides for this role in this section.",
    contactH: "Need additional support?", contactP: "For anything this portal doesn't cover, contact the",
    contactOrg: "HR Operations Office — RSSB",
    footer: "INKINGI ASSISTANT · RSSB Oracle HCM Learning Portal · Content from official RSSB user manuals (Core HR V1.0 & Talent Management PIP V1.0)",
    faqH: "Ibibazo bikunze kubazwa (Kinyarwanda FAQ)",
    manualH: "Browse the full manuals page by page", roleE: "Employee", roleM: "Manager", allTopics: "All topics"
  },
  rw: {
    tag: "Umufasha wawe muri Sisitemu ya Inkingi",
    heroTitle: 'Iga Sisitemu ya Inkingi, <span>intambwe ku yindi</span>.',
    heroSub: "Shakisha uburyo ubwo ari bwo bwose bwa HR — konti ya banki, gusezera, isuzuma rya PIP — ubone inzira nyayo muri sisitemu, intambwe zose, n'amafoto yo mu gitabo. Ntukeneye guhamagara HR ku bibazo bisanzwe.",
    searchPh: "Shakisha… urugero: \"kuvugurura konti ya banki\"",
    ask: "Baza Umufasha", home: "Ahabanza", corehr: "Core HR", pip: "Imicungire y'impano",
    faq: "Ibibazo bikunze kubazwa", manuals: "Reba ibitabo", contact: "Vugana na HR",
    rules: "Amabwiriza y'imbere", rulesH: "Amabwiriza agenga abakozi ba RSSB",
    rulesIntro: "Incamake mu mvugo yoroshye y'Amabwiriza yemejwe n'Inama y'Ubuyobozi ya RSSB (yatangiye 31 Gicurasi 2024). Buri gice cyerekana ingingo bireba. Inyandiko yemewe yasinywe ni yo ifite agaciro.",
    rulesNote: "Imbonerahamwe z'imishahara n'amafaranga y'ubutumwa ziri mu mugereka wemewe kandi ntizitangazwa kuri uru rubuga — baza HR Operations.",
    rulesAsk: "Ushobora no kubaza umufasha, urugero: \"Ikiruhuko cy'umwaka ni iminsi ingahe?\"",
    signinH: "Kwinjira kw'abakozi", signinSub: "Uru rubuga rugenewe abakozi ba RSSB gusa.",
    signinMail: "Imeyili ya RSSB", signinCode: "Umubare w'ibanga", signinBtn: "Injira",
    signinHint: "Umubare w'ibanga utangwa na HR Operations. Niba utawufite, vugana na",
    errMail: "Koresha imeyili yawe ya @rssb.rw.", errCode: "Umubare w'ibanga si wo.",
    signout: "Sohoka",
    browse: "Hitamo ingingo", navLbl: "Inzira muri Oracle HCM",
    stepsH: "Intambwe ku yindi", shotsH: "Amafoto yo mu gitabo", relH: "Ingingo zifitanye isano",
    pagesLbl: "impapuro", openFull: "Fungura ifoto nini", prev: "Isubira", next: "Ikurikira", close: "Funga",
    chatHi: "Muraho! 👋 Ndi INKINGI. Mbaza ikibazo cyose kuri Oracle HCM mu Kinyarwanda cyangwa mu Cyongereza — urugero: \"Nigute navugurura konti ya banki?\"",
    openArt: "Fungura amabwiriza yose", noMatch: "Sinabonye igisubizo gihuye n'ikibazo cyawe. Gerageza andi magambo, cyangwa uvugane n'Ibiro bya HR Operations.",
    didYouMean: "Wenda washakaga:", quick: "Bikunze gushakwa:",
    stGuides: "amabwiriza y'intambwe", stShots: "amafoto y'ibitabo", stLang: "indimi", stAlways: "wikorera",
    roleAll: "Bose", roleFilter: "Toranya urwego", roleFor: "Bigenewe", roleEmpty: "Nta mabwiriza y'uru rwego muri iki cyiciro.",
    contactH: "Ukeneye ubundi bufasha?", contactP: "Ku kibazo kidasubijwe n'uru rubuga, vugana na",
    contactOrg: "Ibiro bya HR Operations — RSSB",
    footer: "INKINGI ASSISTANT · Urubuga rw'ukwiga Oracle HCM rwa RSSB · Ibikubiyemo biva mu bitabo byemewe bya RSSB",
    faqH: "Ibibazo bikunze kubazwa (Kinyarwanda FAQ)",
    manualH: "Reba ibitabo byose urupapuro ku rundi", roleE: "Umukozi", roleM: "Umuyobozi", allTopics: "Ingingo zose"
  }
};
const t = k => T[LANG][k] || T.en[k] || k;

/* ---------------- search engine ---------------- */
function normalize(q){
  return q.toLowerCase().replace(/[?.,!;:'"()]/g," ").split(/\s+/).filter(Boolean)
    .map(w => RW_SYNONYMS[w] || w).join(" ");
}
function scoreArticle(art, nq){
  const words = nq.split(" ");
  let score = 0;
  const hay = {
    kw: art.keywords.join(" ").toLowerCase(),
    ti: (art.title.en + " " + art.title.rw).toLowerCase(),
    pu: (art.purpose.en + " " + art.purpose.rw).toLowerCase(),
    nv: art.nav.join(" ").toLowerCase()
  };
  // exact keyword-phrase bonus
  for (const kw of art.keywords){ if (nq.includes(kw.toLowerCase())) score += 6; }
  for (const w of words){
    if (w.length < 3 && !["pay","pip","me"].includes(w)) continue;
    if (hay.kw.includes(w)) score += 4;
    if (hay.ti.includes(w)) score += 3;
    if (hay.nv.includes(w)) score += 2;
    if (hay.pu.includes(w)) score += 1;
  }
  return score;
}
function searchKB(q, limit=6){
  const nq = normalize(q);
  if (!nq) return [];
  return KB.map(a => ({a, s: scoreArticle(a, nq)}))
    .filter(x => x.s > 3)
    .sort((x,y) => y.s - x.s)
    .slice(0, limit);
}

/* ---------------- helpers ---------------- */
const $ = s => document.querySelector(s);
const esc = s => s.replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
/* ---------------- image pipeline (zip-based) ----------------
   All 190 screenshots ship inside TWO zip files next to index.html:
     images-corehr.zip  -> corehr-001.jpg … corehr-117.jpg
     images-pip.zip     -> pip-001.jpg    … pip-073.jpg
   They are fetched once, unpacked in the browser with JSZip, and served
   as blob URLs. This keeps the whole deployment at ~13 files, so a single
   GitHub web upload works (no 100-files-per-commit problem).            */
const ZIPS = {};      // manual -> Promise<JSZip>
const IMGCACHE = { corehr: {}, pip: {} };  // manual -> page -> blob URL

function loadZip(manual){
  if (ZIPS[manual]) return ZIPS[manual];
  showLoadToast(manual);
  ZIPS[manual] = fetch(`images-${manual}.zip`, {cache: "force-cache"})
    .then(r => {
      if (!r.ok) throw new Error(`images-${manual}.zip → HTTP ${r.status}`);
      return r.arrayBuffer();
    })
    .then(buf => JSZip.loadAsync(buf))
    .then(z => { hideLoadToast(); return z; })
    .catch(err => { hideLoadToast(); ZIPS[manual] = null; showBanner([`images-${manual}.zip`]); throw err; });
  return ZIPS[manual];
}
async function pageURL(manual, n){
  const key = String(n).padStart(3, "0");
  if (IMGCACHE[manual][key]) return IMGCACHE[manual][key];
  const zip = await loadZip(manual);
  const f = zip.file(`${manual}-${key}.jpg`);
  if (!f) throw new Error(`${manual}-${key}.jpg missing inside images-${manual}.zip`);
  const blob = await f.async("blob");
  const url = URL.createObjectURL(new Blob([blob], {type: "image/jpeg"}));
  IMGCACHE[manual][key] = url;
  return url;
}
/* Renders use <img data-m="corehr" data-p="46"> placeholders;
   hydrateImages() fills them in asynchronously. */
function hydrateImages(){
  document.querySelectorAll("img[data-m]:not([data-done])").forEach(img => {
    img.setAttribute("data-done", "1");
    pageURL(img.dataset.m, +img.dataset.p)
      .then(u => { img.src = u; img.classList.add("ready"); })
      .catch(() => imgFail(img));
  });
}
function pageImg(manual, n, extra=""){
  return `<img data-m="${manual}" data-p="${n}" alt="Manual page ${n}" class="zimg" ${extra}>`;
}
/* loading toast */
function showLoadToast(manual){
  if (document.getElementById("loadToast")) return;
  const d = document.createElement("div");
  d.id = "loadToast";
  d.textContent = `⏳ Loading ${MANUALS[manual].label} screenshots…`;
  document.body.appendChild(d);
}
function hideLoadToast(){
  const d = document.getElementById("loadToast");
  if (d) d.remove();
}
function artPages(a){
  const out = [];
  for (let i = a.pages.from; i <= a.pages.to; i++) out.push(i);
  return out;
}
function go(hash){ location.hash = hash; }

/* ---------------- role filter ---------------- */
let ROLE = localStorage.getItem("inkingi_role") || "all";
function setRole(r){
  ROLE = r;
  localStorage.setItem("inkingi_role", r);
  route();
}
function roleMatch(a){ return ROLE === "all" || (a.roles || []).includes(ROLE); }
function rolePillsHTML(){
  const pills = [["all", t("roleAll")], ...Object.keys(ROLES).map(k => [k, ROLES[k][LANG]])];
  return `<div class="role-pills" role="tablist" aria-label="${t("roleFilter")}">` +
    pills.map(([k, lbl]) =>
      `<button class="role-pill ${ROLE === k ? "active" : ""}" role="tab" aria-selected="${ROLE === k}"
        onclick="setRole('${k}')">${lbl}</button>`).join("") + `</div>`;
}
function roleTags(a){
  return (a.roles || []).map(r => `<span class="role-tag">${ROLES[r][LANG]}</span>`).join("");
}
function emptyNote(){
  return `<p class="empty-note">${t("roleEmpty")}</p>`;
}

/* imigongo-inspired diamond lattice for the hero background */
function imigongoSVG(){
  return `<svg width="100%" height="100%" preserveAspectRatio="xMaxYMid slice" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
    <defs><pattern id="imi" width="80" height="80" patternUnits="userSpaceOnUse">
      <path d="M40 4 76 40 40 76 4 40Z" fill="none" stroke="#F2B441" stroke-width="1.4"/>
      <path d="M40 20 60 40 40 60 20 40Z" fill="none" stroke="#F2B441" stroke-width="1"/>
      <path d="M40 33 47 40 40 47 33 40Z" fill="#F2B441"/>
    </pattern></defs>
    <rect width="600" height="400" fill="url(#imi)"/>
  </svg>`;
}

/* ---------------- shared chrome ---------------- */
function navTrailHTML(nav){
  return `<div class="navtrail"><span class="lbl">${t("navLbl")}</span>` +
    nav.map((n,i) => `<span class="navchip">${esc(n)}</span>${i < nav.length-1 ? '<span class="navarrow">→</span>' : ''}`).join("") +
    `</div>`;
}
function renderChrome(active){
  document.title = "INKINGI ASSISTANT — RSSB";
  const links = [
    ["#/rules", "rules"], ["#/", "home"], ["#/ask", "ask"], ["#/cat/corehr", "corehr"],
    ["#/cat/pip", "pip"], ["#/faq", "faq"], ["#/manuals", "manuals"], ["#/contact", "contact"]
  ];
  $("#app").innerHTML = `
  <div class="topbar">
    <button class="menu-btn" id="menuBtn" aria-label="Menu">☰</button>
    <div class="brand" onclick="location.hash='#/'">
      <img src="rssb-logo.png" alt="RSSB">
      <div><div class="t1">INKINGI ASSISTANT</div><div class="t2">${t("tag")}</div></div>
    </div>
    <div class="spacer"></div>
    <button class="tbtn" id="outBtn" title="${t("signout")}">⎋</button>
    <button class="tbtn" id="darkBtn">◐</button>
    <button class="tbtn lang" id="langBtn">${LANG === "en" ? "RW" : "EN"}</button>
  </div>
  <div class="zig"></div>
  <div class="shell">
    <nav class="sidebar" id="sidebar">
      <div class="side-group">
        ${links.map(([h,k]) => `<button class="side-link ${active===k?'active':''}" onclick="location.hash='${h}'">${sideIcon(k)} ${t(k)}</button>`).join("")}
      </div>
      <div class="side-group"><div class="side-label">${t("corehr")}</div>
        ${KB.filter(a=>a.cat==="corehr").map(a=>`<button class="side-link ${active===a.id?'active':''}" onclick="location.hash='#/a/${a.id}'">${a.icon} ${esc(a.title[LANG])}</button>`).join("")}
      </div>
      <div class="side-group"><div class="side-label">${t("pip")}</div>
        ${KB.filter(a=>a.cat==="pip").map(a=>`<button class="side-link ${active===a.id?'active':''}" onclick="location.hash='#/a/${a.id}'">${a.icon} ${esc(a.title[LANG])}</button>`).join("")}
      </div>
    </nav>
    <main id="main"></main>
  </div>`;
  $("#outBtn").onclick = signOut;
  $("#darkBtn").onclick = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("inkingi_dark", document.body.classList.contains("dark") ? "1" : "0");
  };
  $("#langBtn").onclick = () => {
    LANG = LANG === "en" ? "rw" : "en";
    localStorage.setItem("inkingi_lang", LANG);
    route();
  };
  $("#menuBtn").onclick = () => $("#sidebar").classList.toggle("open");
}
function sideIcon(k){
  return {home:"🏠",ask:"💬",corehr:"👥",pip:"🎯",rules:"📜",faq:"❓",manuals:"📚",contact:"📞"}[k] || "";
}
const HR_MAILS = [["rssbhr@rssb.rw","rssbhr@rssb.rw"],["hroperations@rssb.rw","hroperations@rssb.rw"]];
function mailLinks(){
  return HR_MAILS.map(([m,l]) => `<a class="maillink" href="mailto:${m}">✉️ ${l}</a>`).join(" ");
}
function footerHTML(){
  return `<footer>${t("footer")}<br><b>${t("contactH")}</b> ${t("contactOrg")} · ${mailLinks()}</footer>`;
}

/* ---------------- pages ---------------- */
function renderHome(){
  renderChrome("home");
  const quick = ["assign-goals","personal-details","contact-info","family-contacts","document-records","transfers"];
  $("#main").innerHTML = `
  <div class="hero">
    <div class="hero-pattern" aria-hidden="true">${imigongoSVG()}</div>
    <div class="hero-inner">
      <div class="eyebrow">RSSB · Inkingi System</div>
      <h1>${T[LANG].heroTitle}</h1>
      <p>${t("heroSub")}</p>
      <div class="searchwrap">
        <div class="searchbar">
          <input id="homeSearch" placeholder="${t("searchPh")}" autocomplete="off" aria-label="Search">
          <button onclick="doHomeSearch()">🔍</button>
        </div>
        <div id="homeResults"></div>
      </div>
      <div class="quick">
        <span class="quick-lbl">${t("quick")}</span>
        ${quick.map(id => { const a = KB.find(x=>x.id===id);
          return `<button class="chip-q" onclick="location.hash='#/a/${id}'">${a.icon} ${esc(a.title[LANG])}</button>`; }).join("")}
      </div>
      <div class="stats">
        <div class="stat"><b>${KB.length}</b><span>${t("stGuides")}</span></div>
        <div class="stat"><b>190</b><span>${t("stShots")}</span></div>
        <div class="stat"><b>EN·RW</b><span>${t("stLang")}</span></div>
        <div class="stat"><b>24/7</b><span>${t("stAlways")}</span></div>
      </div>
    </div>
  </div>
  ${rolePillsHTML()}
  ${["corehr","pip"].map(cat => {
    const items = KB.filter(a => a.cat === cat && roleMatch(a));
    return `<h2 class="section-h">${CATS[cat].icon} ${t(cat)}</h2>` +
      (items.length ? `<div class="grid">${items.map(cardHTML).join("")}</div>` : emptyNote());
  }).join("")}
  ${footerHTML()}`;
  const inp = $("#homeSearch");
  inp.addEventListener("input", () => liveSearch(inp.value, "#homeResults"));
  inp.addEventListener("keydown", e => { if (e.key === "Enter") doHomeSearch(); });
}
function cardHTML(a){
  const n = a.pages.to - a.pages.from + 1;
  return `<div class="card" onclick="location.hash='#/a/${a.id}'" role="button" tabindex="0"
    onkeydown="if(event.key==='Enter')location.hash='#/a/${a.id}'">
    <div class="ic">${a.icon}</div><h3>${esc(a.title[LANG])}</h3>
    <p>${esc(a.purpose[LANG].split(".")[0])}.</p>
    <div class="card-meta"><span class="pg">📷 ${n} ${t("pagesLbl")}</span>${roleTags(a)}</div></div>`;
}
function liveSearch(q, target){
  const box = $(target);
  if (!q.trim()){ box.innerHTML = ""; return; }
  const res = searchKB(q);
  box.innerHTML = res.length
    ? `<div class="search-results">${res.map(r =>
        `<button class="sr-item" onclick="location.hash='#/a/${r.a.id}'">
          <div class="t">${r.a.icon} ${esc(r.a.title[LANG])}</div>
          <div class="n">${r.a.nav.join(" → ")}</div></button>`).join("")}</div>`
    : `<div class="search-results"><div class="sr-item">${t("noMatch")}</div></div>`;
}
function doHomeSearch(){
  const q = $("#homeSearch").value;
  const res = searchKB(q);
  if (res.length) go("#/a/" + res[0].a.id);
}

function renderCategory(cat){
  renderChrome(cat);
  $("#main").innerHTML = `
  <div class="crumbs"><button onclick="location.hash='#/'">${t("home")}</button> / ${t(cat)}</div>
  <h1 class="section-h" style="margin-top:6px">${CATS[cat].icon} ${t(cat)}</h1>
  ${rolePillsHTML()}
  ${(() => { const items = KB.filter(a => a.cat === cat && roleMatch(a));
    if (!items.length) return emptyNote();
    if (cat === "pip" && typeof SUBTABS !== "undefined"){
      return Object.keys(SUBTABS).map(sk => {
        const g = items.filter(a => a.sub === sk);
        return g.length ? `<h2 class="subtab-h">${SUBTABS[sk].icon} ${SUBTABS[sk][LANG]}</h2>
        <div class="grid">${g.map(cardHTML).join("")}</div>` : "";
      }).join("");
    }
    return `<div class="grid">${items.map(cardHTML).join("")}</div>`; })()}
  ${footerHTML()}`;
}

function renderArticle(id){
  const a = KB.find(x => x.id === id);
  if (!a) return renderHome();
  renderChrome(a.id);
  const pages = artPages(a);
  $("#main").innerHTML = `
  <div class="crumbs">
    <button onclick="location.hash='#/'">${t("home")}</button> /
    <button onclick="location.hash='#/cat/${a.cat}'">${t(a.cat)}</button> / ${esc(a.title[LANG])}
  </div>
  <div class="art-head"><div class="ic">${a.icon}</div>
    <div><h1>${esc(a.title[LANG])}</h1>
    <div class="badge-row"><span class="badge">${MANUALS[a.pages.manual].label} · ${t("pagesLbl")} ${a.pages.from}–${a.pages.to}</span>
    <span class="badge badge-role">${t("roleFor")}: ${(a.roles||[]).map(r=>ROLES[r][LANG]).join(" · ")}</span></div></div>
  </div>
  <p class="purpose">${esc(a.purpose[LANG])}</p>
  ${navTrailHTML(a.nav)}
  <h2 class="section-h">${t("stepsH")}</h2>
  <ol class="steps">${a.steps[LANG].map(s => `<li>${esc(s)}</li>`).join("")}</ol>
  <h2 class="section-h">${t("shotsH")}</h2>
  <div class="shots">${pages.map((p,i) =>
    `<figure class="shot" onclick="openLightbox('${a.pages.manual}',${a.pages.from},${a.pages.to},${p})" tabindex="0" role="button"
      onkeydown="if(event.key==='Enter')openLightbox('${a.pages.manual}',${a.pages.from},${a.pages.to},${p})">
      ${pageImg(a.pages.manual, p)}
      <figcaption class="cap">${MANUALS[a.pages.manual].label} · p.${p}</figcaption></figure>`).join("")}
  </div>
  <h2 class="section-h">${t("relH")}</h2>
  <div class="related">${a.related.map(rid => { const r = KB.find(x=>x.id===rid);
    return r ? `<button class="rel-chip" onclick="location.hash='#/a/${rid}'">${r.icon} ${esc(r.title[LANG])}</button>` : ""; }).join("")}
  </div>
  ${footerHTML()}`;
  hydrateImages();
  window.scrollTo(0,0);
}

/* ---------------- lightbox ---------------- */
let LB = null;
function openLightbox(manual, from, to, cur){
  LB = {manual, from, to, cur};
  const el = document.createElement("div");
  el.className = "lightbox"; el.id = "lb";
  el.innerHTML = lbInner();
  el.onclick = e => { if (e.target === el) closeLightbox(); };
  document.body.appendChild(el);
  hydrateImages();
  document.addEventListener("keydown", lbKeys);
}
function lbInner(){
  return `<button class="lb-close" onclick="closeLightbox()" aria-label="${t("close")}">✕</button>
  ${pageImg(LB.manual, LB.cur)}
  <div class="lb-bar">
    <button onclick="lbNav(-1)" ${LB.cur<=LB.from?"disabled":""}>← ${t("prev")}</button>
    <span>${MANUALS[LB.manual].label} · p.${LB.cur} / ${LB.to}</span>
    <button onclick="lbNav(1)" ${LB.cur>=LB.to?"disabled":""}>${t("next")} →</button>
  </div>`;
}
function lbNav(d){
  LB.cur = Math.min(LB.to, Math.max(LB.from, LB.cur + d));
  $("#lb").innerHTML = lbInner();
  hydrateImages();
}
function lbKeys(e){
  if (!LB) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") lbNav(-1);
  if (e.key === "ArrowRight") lbNav(1);
}
function closeLightbox(){
  const el = $("#lb"); if (el) el.remove();
  LB = null;
  document.removeEventListener("keydown", lbKeys);
}

/* ---------------- chatbot ---------------- */
/* Optional AI backend. Leave "" for keyword matcher only.
   To enable: deploy cloudflare-worker.js (instructions inside that file),
   then paste your Worker URL here and re-upload app.js. */
const AI_ENDPOINT = "";
let chatLog = [];
function renderAsk(){
  renderChrome("ask");
  $("#main").innerHTML = `
  <div class="chat-shell">
    <h1 class="section-h" style="margin-top:0">💬 ${t("ask")}</h1>
    <div class="chat-window" id="chatWin" aria-live="polite"></div>
    <div class="chat-input">
      <input id="chatInp" placeholder="${t("searchPh")}" autocomplete="off" aria-label="Question">
      <button onclick="sendChat()">➤</button>
    </div>
    <div class="suggest">
      ${["How do I update bank details?","Nigute nsezera mu kazi?","How do I submit PIP self evaluation?","Nigute navugurura konti ya banki?","How do I request a transfer?"]
        .map(q => `<button onclick="quickAsk('${q.replace(/'/g,"\\'")}')">${q}</button>`).join("")}
    </div>
  </div>${footerHTML()}`;
  if (!chatLog.length) chatLog.push({who:"bot", html: esc(t("chatHi"))});
  paintChat();
  const inp = $("#chatInp");
  inp.addEventListener("keydown", e => { if (e.key === "Enter") sendChat(); });
  inp.focus();
}
function paintChat(){
  const w = $("#chatWin");
  w.innerHTML = chatLog.map(m => `<div class="msg ${m.who}">${m.html}</div>`).join("");
  w.scrollTop = w.scrollHeight;
}
function quickAsk(q){ $("#chatInp").value = q; sendChat(); }
async function sendChat(){
  const inp = $("#chatInp");
  const q = inp.value.trim();
  if (!q) return;
  inp.value = "";
  chatLog.push({who:"user", html: esc(q)});
  if (AI_ENDPOINT){
    chatLog.push({who:"bot", html: "<i>…</i>"}); paintChat();
    try {
      const r = await fetch(AI_ENDPOINT, {method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({question: q, lang: LANG})});
      const d = await r.json();
      if (d.answer){ chatLog[chatLog.length-1] = {who:"bot", html: esc(d.answer).replace(/\n/g,"<br>")}; paintChat(); return; }
    } catch(e){ /* fall through to keyword matcher */ }
    chatLog.pop(); // remove the "…" placeholder, use local matcher instead
  }
  const res = searchKB(q, 4);
  const rres = (typeof searchRules === "function") ? searchRules(q, 1) : [];
  const bestKB = res.length ? res[0].s : 0;
  if (rres.length && rres[0].s > bestKB){
    const r = rres[0].r;
    chatLog.push({who:"bot", html:
      `<b>${r.icon} ${esc(r.title[LANG])}</b> <span class="rule-ref">${esc(r.arts)}</span><br>${esc(r.summary[LANG])}` +
      `<ul class="rule-pts">${r.points[LANG].map(p => `<li>${esc(p)}</li>`).join("")}</ul>` +
      `<button class="open-art" onclick="location.hash='#/rules'">📜 ${t("rules")}</button>`});
    paintChat();
    return;
  }
  if (!res.length){
    if (rres.length){
      const r = rres[0].r;
      chatLog.push({who:"bot", html:
        `<b>${r.icon} ${esc(r.title[LANG])}</b> <span class="rule-ref">${esc(r.arts)}</span><br>${esc(r.summary[LANG])}` +
        `<ul class="rule-pts">${r.points[LANG].map(p => `<li>${esc(p)}</li>`).join("")}</ul>` +
        `<button class="open-art" onclick="location.hash='#/rules'">📜 ${t("rules")}</button>`});
      paintChat();
      return;
    }
    chatLog.push({who:"bot", html: `${esc(t("noMatch"))}<br><br>📞 <b>${t("contactOrg")}</b> · ${mailLinks()}`});
  } else {
    const a = res[0].a;
    const alts = res.slice(1).filter(r => r.s >= res[0].s * 0.5);
    chatLog.push({who:"bot", html:
      `<b>${a.icon} ${esc(a.title[LANG])}</b><br>${esc(a.purpose[LANG])}` +
      navTrailHTML(a.nav) +
      `<ol>${a.steps[LANG].map(s => `<li>${esc(s)}</li>`).join("")}</ol>` +
      `<button class="open-art" onclick="location.hash='#/a/${a.id}'">${t("openArt")} + 📷</button>` +
      (alts.length ? `<div style="margin-top:10px;font-size:12.5px;color:var(--muted)">${t("didYouMean")}</div>` +
        alts.map(r => `<button class="alt" onclick="location.hash='#/a/${r.a.id}'">${r.a.icon} ${esc(r.a.title[LANG])}</button>`).join("") : "")
    });
  }
  paintChat();
}

/* ---------------- FAQ ---------------- */
const FAQ = [
  {q:"Nigute navugurura konti ya banki?", art:"bank-details"},
  {q:"Nigute nsezera mu kazi?", art:"resignation"},
  {q:"Nigute nkora isuzuma ryanjye rya PIP (self evaluation)?", art:"self-evaluation"},
  {q:"Nigute nsaba kwimurirwa ahandi (transfer)?", art:"transfers"},
  {q:"Nigute nongeraho telefone cyangwa imeyili?", art:"contact-info"},
  {q:"Nigute nandika abo guhamagara byihutirwa?", art:"family-contacts"},
  {q:"Nigute nohereza inyandiko (impamyabumenyi, amasezerano)?", art:"document-records"},
  {q:"Nigute nshaka umukozi muri Directory?", art:"directory"},
  {q:"Exit Journey ni iki kandi nyikoresha nte?", art:"exit-journey"},
  {q:"Nigute nhindura ifoto n'amazina yanjye?", art:"personal-details"},
  {q:"Umuyobozi aha ate abakozi intego za PIP?", art:"assign-goals"},
  {q:"Nigute nemeza ko inama y'isuzuma yabaye?", art:"review-meeting"}
];
function renderFAQ(){
  renderChrome("faq");
  $("#main").innerHTML = `
  <h1 class="section-h" style="margin-top:0">❓ ${t("faqH")}</h1>
  ${FAQ.map((f,i) => { const a = KB.find(x=>x.id===f.art);
    return `<div class="faq-item" id="faq${i}">
      <button class="faq-q" onclick="document.getElementById('faq${i}').classList.toggle('open')">${esc(f.q)}</button>
      <div class="faq-a">${esc(a.purpose.rw)}${navTrailHTML(a.nav)}
        <ol class="steps" style="margin-top:10px">${a.steps.rw.map(s=>`<li>${esc(s)}</li>`).join("")}</ol>
        <button class="rel-chip" onclick="location.hash='#/a/${a.id}'">${a.icon} ${t("openArt")} + 📷</button>
      </div></div>`; }).join("")}
  ${footerHTML()}`;
}

/* ---------------- manual browser ---------------- */
let MB = {manual:"corehr", page:1};
function renderManuals(){
  renderChrome("manuals");
  $("#main").innerHTML = `
  <h1 class="section-h" style="margin-top:0">📚 ${t("manualH")}</h1>
  <div class="manual-tabs">
    <button id="mtC" class="${MB.manual==='corehr'?'active':''}" onclick="switchManual('corehr')">Core HR (117)</button>
    <button id="mtP" class="${MB.manual==='pip'?'active':''}" onclick="switchManual('pip')">Talent / PIP (73)</button>
  </div>
  <div class="pager">
    <button onclick="mbNav(-1)" id="mbPrev">← ${t("prev")}</button>
    <span class="pnum" id="mbNum"></span>
    <button onclick="mbNav(1)" id="mbNext">${t("next")} →</button>
  </div>
  <div class="pageview" id="mbView"></div>
  ${footerHTML()}`;
  paintManual();
}
function switchManual(m){ MB = {manual:m, page:1}; renderManuals(); }
function mbNav(d){
  MB.page = Math.min(MANUALS[MB.manual].count, Math.max(1, MB.page + d));
  paintManual();
}
function paintManual(){
  $("#mbView").innerHTML = pageImg(MB.manual, MB.page);
  hydrateImages();
  $("#mbNum").textContent = `${MANUALS[MB.manual].label} · p.${MB.page} / ${MANUALS[MB.manual].count}`;
  $("#mbPrev").disabled = MB.page <= 1;
  $("#mbNext").disabled = MB.page >= MANUALS[MB.manual].count;
}

/* ---------------- contact ---------------- */
function renderContact(){
  renderChrome("contact");
  $("#main").innerHTML = `
  <div class="contact-card">
    <h2>📞 ${t("contactH")}</h2>
    <p>${t("contactP")} <span class="gold">${t("contactOrg")}</span>.</p>
    <div class="mailrow">${mailLinks()}</div>
    <p style="margin-top:16px;font-size:14px">INKINGI ASSISTANT covers routine Oracle HCM procedures.
    For account issues, data corrections, policy questions, or anything not in the manuals, HR Operations is your contact point.</p>
  </div>
  <h2 class="section-h">${t("allTopics")}</h2>
  <div class="grid">${KB.map(cardHTML).join("")}</div>
  ${footerHTML()}`;
}

/* ---------------- internal rules ---------------- */
function renderRules(){
  renderChrome("rules");
  $("#main").innerHTML = `
  <div class="rules-hero">
    <h1 class="section-h" style="margin-top:0">📜 ${t("rulesH")}</h1>
    <p class="rules-intro">${t("rulesIntro")}</p>
    <p class="rules-note">ℹ️ ${t("rulesNote")}</p>
    <p class="rules-note">💬 ${t("rulesAsk")}</p>
  </div>
  ${RULES.map((r,i) => `
  <div class="rule-ch" id="rch${i}">
    <button class="rule-q" onclick="document.getElementById('rch${i}').classList.toggle('open')">
      <span class="rule-ic">${r.icon}</span>
      <span class="rule-tt">${esc(r.title[LANG])}<small>${esc(r.arts)}</small></span>
      <span class="rule-arrow">▾</span>
    </button>
    <div class="rule-a">
      <p class="rule-sum">${esc(r.summary[LANG])}</p>
      <ul class="rule-pts">${r.points[LANG].map(p => `<li>${esc(p)}</li>`).join("")}</ul>
    </div>
  </div>`).join("")}
  ${footerHTML()}`;
  window.scrollTo(0,0);
}

/* ---------------- image diagnostics ---------------- */
function imgFail(img){
  const ref = `${img.dataset.m || "?"}-${String(img.dataset.p || "?").padStart(3,"0")}.jpg`;
  const box = document.createElement("div");
  box.className = "img-fail";
  box.innerHTML = `⚠️ <b>Screenshot could not be loaded</b><br><code>${esc(ref)}</code><br>
    Check that <code>images-corehr.zip</code> and <code>images-pip.zip</code> sit next to <code>index.html</code>.
    Open <a href="check.html"><b>check.html</b></a> for a full report.`;
  img.replaceWith(box);
}
function probeAssets(){
  if (location.protocol === "file:"){
    // fetch() cannot read local zips on file:// — needs any web server.
    showBanner(["file:// mode"], true);
    return;
  }
  ["images-corehr.zip", "images-pip.zip"].forEach(z => {
    fetch(z, {method: "HEAD"}).then(r => { if (!r.ok) showBanner([z]); })
      .catch(() => showBanner([z]));
  });
}
function showBanner(failed, isFileMode = false){
  if (!failed.length || document.getElementById("assetBanner")) return;
  const b = document.createElement("div");
  b.id = "assetBanner";
  b.innerHTML = isFileMode
    ? `<b>ℹ️ You opened this page directly from your computer (file://).</b>
       Screenshots load from <code>images-corehr.zip</code> / <code>images-pip.zip</code>, which browsers block on file://.
       Run a tiny local server in this folder — <code>python -m http.server 8080</code> — then open
       <code>http://localhost:8080</code>. On the live GitHub Pages site everything works normally.`
    : `<b>⚠️ Screenshots are not loading.</b>
       Missing: <code>${esc(failed[0])}</code> — it must sit in the <u>same folder</u> as <code>index.html</code> on your deployment.
       Upload ALL files from the package (about 13 files including <code>images-corehr.zip</code>, <code>images-pip.zip</code> and <code>jszip.min.js</code>) in one commit, then open <a href="check.html">check.html</a> to verify.`;
  document.body.prepend(b);
}

/* ---------------- staff sign-in gate ----------------
   Deterrent-level access control for a static site. The access code is checked
   as a SHA-256 hash; the session lasts 30 days in this browser.
   DEFAULT CODE: INKINGI@2026  — CHANGE IT before going live:
   1. Open your browser console (F12) on any https page and run:
      crypto.subtle.digest("SHA-256", new TextEncoder().encode("YourNewCode"))
        .then(b=>console.log(Array.from(new Uint8Array(b)).map(x=>x.toString(16).padStart(2,"0")).join("")))
   2. Replace AUTH_HASH below with the printed value and re-upload app.js.
   NOTE: this is not real security — content is still in the public repo.     */
const AUTH_HASH = "c9ccebe64f5a03f168bcf85c53c78bca08d2c723042040af41eeba6b1e3395d3";
const AUTH_DAYS = 30;

function authOK(){
  try {
    const a = JSON.parse(localStorage.getItem("inkingi_auth") || "null");
    return a && a.h === AUTH_HASH && (Date.now() - a.t) < AUTH_DAYS * 864e5;
  } catch(e){ return false; }
}
async function sha256(s){
  if (!(window.crypto && crypto.subtle)) return null;  // file:// fallback
  const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return Array.from(new Uint8Array(b)).map(x => x.toString(16).padStart(2,"0")).join("");
}
function renderLogin(){
  document.title = "INKINGI ASSISTANT — RSSB";
  $("#app").innerHTML = `
  <div class="login-wrap">
    <div class="login-pattern" aria-hidden="true">${imigongoSVG()}</div>
    <form class="login-card" id="loginForm" autocomplete="on">
      <img src="rssb-logo.png" alt="RSSB" class="login-logo">
      <div class="login-brand">INKINGI ASSISTANT</div>
      <h1>${t("signinH")}</h1>
      <p class="login-sub">${t("signinSub")}</p>
      <label>${t("signinMail")}
        <input type="email" id="authMail" placeholder="name@rssb.rw" autocomplete="email" required>
      </label>
      <label>${t("signinCode")}
        <input type="password" id="authCode" placeholder="••••••••" autocomplete="current-password" required>
      </label>
      <div class="login-err" id="authErr"></div>
      <button type="submit" class="login-btn">${t("signinBtn")} →</button>
      <p class="login-hint">${t("signinHint")} ${mailLinks()}</p>
    </form>
  </div>`;
  $("#loginForm").addEventListener("submit", async e => {
    e.preventDefault();
    const mail = $("#authMail").value.trim().toLowerCase();
    const code = $("#authCode").value;
    const err = $("#authErr");
    if (!/^[a-z0-9._%+-]+@rssb\.rw$/.test(mail)){ err.textContent = t("errMail"); return; }
    const h = await sha256(code);
    if (h === null){ err.textContent = "Secure sign-in needs https or localhost — open the live site."; return; }
    if (h !== AUTH_HASH){ err.textContent = t("errCode"); $("#authCode").value = ""; return; }
    localStorage.setItem("inkingi_auth", JSON.stringify({h, m: mail, t: Date.now()}));
    route();
  });
  $("#authMail").focus();
}
function signOut(){
  localStorage.removeItem("inkingi_auth");
  chatLog = [];
  route();
}

/* ---------------- router ---------------- */
function route(){
  if (!authOK()) return renderLogin();
  const h = location.hash || "#/";
  closeLightbox();
  if (h === "#/" || h === "") return renderHome();
  if (h === "#/ask") return renderAsk();
  if (h === "#/rules") return renderRules();
  if (h === "#/faq") return renderFAQ();
  if (h === "#/manuals") return renderManuals();
  if (h === "#/contact") return renderContact();
  let m;
  if ((m = h.match(/^#\/cat\/(corehr|pip)$/))) return renderCategory(m[1]);
  if ((m = h.match(/^#\/a\/([\w-]+)$/))) return renderArticle(m[1]);
  renderHome();
}
window.addEventListener("hashchange", route);
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("inkingi_dark") === "1") document.body.classList.add("dark");
  route();
  probeAssets();
});
