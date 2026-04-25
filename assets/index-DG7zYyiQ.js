import{D as vt}from"./dexie-BODkcwel.js";import{b as he,a as q,c as J,d as bt,f as z,e as qe,i as Je,s as yt,g as wt,p as $t,h as kt,j as Mt,k as St,l as M,m as xt}from"./datefns-Dlft8rFK.js";import{C as E,L as zt,B as Dt,D as At,S as Pt,a as Tt,b as Et,P as Lt,A as Kt,c as Wt,d as Ft,T as Ot,p as Bt,e as Ct,i as It}from"./chartjs-CRgZvhTJ.js";import{_ as Vt,a as _t}from"./pdfjs-BDGsuRSB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();const ce="theme";function jt(){const e=localStorage.getItem(ce)??"auto";ye(e)}function ye(e){e==="auto"?document.documentElement.removeAttribute("data-theme"):document.documentElement.setAttribute("data-theme",e),localStorage.setItem(ce,e),Ht(e)}function Rt(){const e=localStorage.getItem(ce)??"auto",t=e==="auto"?"light":e==="light"?"dark":"auto";return ye(t),Ue(t),t}const me=new Set;function Zt(e){return me.add(e),()=>me.delete(e)}function Ue(e){for(const t of me)try{t(e)}catch(a){console.error(a)}}var Ge;if(typeof window<"u"&&window.matchMedia){const e=window.matchMedia("(prefers-color-scheme: dark)");(Ge=e.addEventListener)==null||Ge.call(e,"change",()=>{Ye()==="auto"&&Ue("auto")})}function Ht(e){const t=document.getElementById("theme-toggle");if(!t)return;const a=t.querySelector(".theme-label"),n=t.querySelector(".theme-icon-dark"),s=t.querySelector(".theme-icon-light");a&&(e==="auto"?(a.textContent="Auto",n&&(n.style.display="inline"),s&&(s.style.display="inline")):e==="light"?(a.textContent="Hell",n&&(n.style.display="none"),s&&(s.style.display="inline")):(a.textContent="Dunkel",n&&(n.style.display="inline"),s&&(s.style.display="none")))}function Ye(){return localStorage.getItem(ce)??"auto"}const Xe=[];let Qe=null;function D(e,t){const a=e.split("/").filter(Boolean),n=[],s=new RegExp("^/?"+a.map(i=>i.startsWith(":")?(n.push(i.slice(1)),"([^/]+)"):Ut(i)).join("/")+"/?$");Xe.push({pattern:e,regex:s,paramNames:n,render:t})}function Nt(e){e.startsWith("#")||(e="#"+e),window.location.hash===e?L():window.location.hash=e}function Gt(e,{onNavigate:t}={}){window.addEventListener("hashchange",L),L.rootEl=e,L.onNavigate=t,L()}async function L(){var n;const e=L.rootEl,t=window.location.hash.slice(1)||"/",a=t.startsWith("/")?t:`/${t}`;for(const s of Xe){const i=s.regex.exec(a);if(i){const r={};s.paramNames.forEach((l,c)=>r[l]=decodeURIComponent(i[c+1])),Qe=a,(n=L.onNavigate)==null||n.call(L,a),qt(a);try{e.classList.remove("view-enter"),await s.render({params:r,path:a,root:e}),e.classList.add("view-enter")}catch(l){console.error("Route render error:",l),e.innerHTML=`<div class="empty-state">
          <div class="empty-state-icon">⚠</div>
          <h2>Fehler beim Anzeigen</h2>
          <p>${Te(l.message||String(l))}</p>
        </div>`}return}}e.innerHTML=`<div class="empty-state">
    <div class="empty-state-icon">?</div>
    <h2>Seite nicht gefunden</h2>
    <p>Die Route <code>${Te(a)}</code> existiert nicht.</p>
    <a href="#/" class="btn primary">Zum Dashboard</a>
  </div>`}function qt(e){document.querySelectorAll("[data-route]").forEach(a=>{const n=a.getAttribute("data-route"),s=n==="/"?e==="/":e===n||e.startsWith(n+"/");a.classList.toggle("active",s)});const t=e==="/"?"dashboard":e.split("/").filter(Boolean)[0];document.body.setAttribute("data-view",t||"dashboard")}function Jt(){Qe!=null&&L()}function Ut(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Te(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const Yt="modulepreload",Xt=function(e){return"/zeitnachweis-app/"+e},Ee={},Qt=function(t,a,n){let s=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),l=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));s=Promise.allSettled(a.map(c=>{if(c=Xt(c),c in Ee)return;Ee[c]=!0;const o=c.endsWith(".css"),d=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const g=document.createElement("link");if(g.rel=o?"stylesheet":Yt,o||(g.as="script"),g.crossOrigin="",g.href=c,l&&g.setAttribute("nonce",l),document.head.appendChild(g),o)return new Promise((u,h)=>{g.addEventListener("load",u),g.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return s.then(r=>{for(const l of r||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})},m=new vt("zeitnachweis");m.version(1).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"});m.version(2).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});m.version(3).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});m.version(4).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});m.version(5).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{const t=await e.table("profil").get("self");t&&(!t.zeitwirtschaftEmail||t.zeitwirtschaftEmail==="zeitwirtschaft@putzmeister.com")&&await e.table("profil").put({...t,zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com"})});m.version(6).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});m.version(7).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{const t=await e.table("profil").get("self");if(!t)return;let a=t.ueber18??!0;if(t.geburtsdatum){const s=new Date(t.geburtsdatum),i=new Date;a=i.getFullYear()-s.getFullYear()-(i<new Date(i.getFullYear(),s.getMonth(),s.getDate())?1:0)>=18}const n={id:"self",ueber18:a,sollStundenProWoche:t.sollStundenProWoche??35,sollStundenProTag:t.sollStundenProTag??7,berufsschulMuster:t.berufsschulMuster??{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null},zeitwirtschaftEmail:t.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:t.zeitwirtschaftAnrede||"Frau Kanarya",pausenRegel:t.pausenRegel??"auto",erstelltAm:t.erstelltAm??new Date().toISOString(),updatedAt:new Date().toISOString()};await e.table("profil").put(n)});async function ea(){try{const{erkenneBerufsschulMuster:e}=await Qt(async()=>{const{erkenneBerufsschulMuster:r}=await Promise.resolve().then(()=>qa);return{erkenneBerufsschulMuster:r}},void 0),t=await m.tage.toArray();if(!t.length)return!1;const a=e(t),n=await m.profil.get("self");if(!n)return!1;const s=n.berufsschulMuster??{};return JSON.stringify(s.wochentageWoechentlich??[])!==JSON.stringify(a.wochentageWoechentlich)||JSON.stringify(s.wochentage14Taegig??[])!==JSON.stringify(a.wochentage14Taegig)||(s.referenzDatum14Taegig??null)!==(a.referenzDatum14Taegig??null)||(s.stundenProTag??null)!==(a.stundenProTag??null)||(s.halbtags??!1)!==(a.halbtags??!1)?(await m.profil.put({...n,berufsschulMuster:a}),!0):!1}catch(e){return console.warn("[db] refreshBerufsschulMuster fehlgeschlagen:",e),!1}}async function ta(){try{const e=await m.mailVorlagen.toArray(),t=e.some(n=>n.betreff&&!n.betreff.startsWith("Bitte um Zeitkorrektur im ESS")),a=e.some(n=>n.text&&!/Vielen Dank!\s*$/.test(n.text));return t||a?(await m.mailVorlagen.clear(),!0):!1}catch(e){return console.warn("[db] ensureMailVorlagenFresh fehlgeschlagen:",e),!1}}async function aa(){const e=await m.einstellungen.get("__migration_reset");return(e==null?void 0:e.value)===!0?(await m.einstellungen.delete("__migration_reset"),!0):!1}async function j(){return await m.profil.get("self")??et()}async function ie(e){const t={...e,id:"self",updatedAt:new Date().toISOString()};return await m.profil.put(t),t}function et(){return{id:"self",ueber18:!0,sollStundenProWoche:35,sollStundenProTag:7,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1},zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:"Frau Kanarya",pausenRegel:"auto",erstelltAm:new Date().toISOString()}}async function na(e,t=null){const a=await m.einstellungen.get(e);return a?a.value:t}async function sa(e,t){await m.einstellungen.put({key:e,value:t})}async function W(){return await m.tage.orderBy("datum").toArray()}async function ia(e){return e.length?(await m.tage.bulkPut(e),e.length):0}async function ra(e){return e.length?(await m.monate.bulkPut(e),e.length):0}async function te(){return await m.monate.orderBy("monatKey").toArray()}async function la(e){return await m.uploads.add({...e,hochladeDatum:new Date().toISOString()})}async function oa(){return await m.uploads.orderBy("hochladeDatum").last()}async function tt(){return await m.uploads.orderBy("hochladeDatum").reverse().toArray()}async function ca(){await Promise.all([m.profil.clear(),m.tage.clear(),m.monate.clear(),m.uploads.clear(),m.einstellungen.clear(),m.mailVorlagen.clear(),m.warnungDismissals.clear()])}async function at(){await Promise.all([m.tage.clear(),m.monate.clear(),m.uploads.clear(),m.warnungDismissals.clear()])}async function da(){const[e,t,a,n,s,i,r]=await Promise.all([m.profil.toArray(),m.tage.toArray(),m.monate.toArray(),m.uploads.toArray(),m.einstellungen.toArray(),m.mailVorlagen.toArray(),m.warnungDismissals.toArray()]);return{version:1,exportedAt:new Date().toISOString(),data:{profil:e,tage:t,monate:a,uploads:n,einstellungen:s,mailVorlagen:i,warnungDismissals:r}}}async function ua(e){if(!e||e.version!==1||!e.data)throw new Error("Ungültiges oder inkompatibles Backup-Format.");const t=e.data;await m.transaction("rw",m.profil,m.tage,m.monate,m.uploads,m.einstellungen,m.mailVorlagen,m.warnungDismissals,async()=>{var a,n,s,i,r,l,c;(a=t.profil)!=null&&a.length&&await m.profil.bulkPut(t.profil),(n=t.tage)!=null&&n.length&&await m.tage.bulkPut(t.tage),(s=t.monate)!=null&&s.length&&await m.monate.bulkPut(t.monate),(i=t.uploads)!=null&&i.length&&await m.uploads.bulkPut(t.uploads),(r=t.einstellungen)!=null&&r.length&&await m.einstellungen.bulkPut(t.einstellungen),(l=t.mailVorlagen)!=null&&l.length&&await m.mailVorlagen.bulkPut(t.mailVorlagen),(c=t.warnungDismissals)!=null&&c.length&&await m.warnungDismissals.bulkPut(t.warnungDismissals)})}async function re(e,t){await m.mailVorlagen.put({key:e,...t})}async function we(){return await m.mailVorlagen.toArray()}async function ga(e,t){await m.warnungDismissals.put({key:`${e}-${t}`,datum:e,typ:t,dismissedAt:new Date().toISOString()})}async function ha(){return await m.warnungDismissals.toArray()}function nt(e){if(e==null)return null;if(typeof e=="number")return e;let t=String(e).trim();if(!t)return null;let a=!1;t.endsWith("-")&&(a=!0,t=t.slice(0,-1).trim()),t=t.replace(",",".");const n=parseFloat(t);return isNaN(n)?null:a?-n:n}function H(e){if(e==null||isNaN(e))return"—";const t=e<0,a=Math.abs(e),n=Math.floor(a),s=Math.round((a-n)*60);let i=n,r=s;return r===60&&(i+=1,r=0),`${t?"-":""}${i}:${String(r).padStart(2,"0")}`}function A(e,t={}){if(e==null||isNaN(e))return"—";const{signed:a=!1,suffix:n="h"}=t,s=a&&e>0?"+":"",i=e.toFixed(2).replace(".",",");return`${s}${i}${n}`}function K(e){if(!e)return null;const t=/^(\d{1,2}):(\d{2})$/.exec(String(e).trim());return t?parseInt(t[1],10)*60+parseInt(t[2],10):null}function de(e){if(!(e!=null&&e.length))return null;const t=e.filter(s=>s.von&&s.bis);if(!t.length)return null;let a=t[0].von,n=t[0].bis;for(const s of t)K(s.von)<K(a)&&(a=s.von),K(s.bis)>K(n)&&(n=s.bis);return{kommen:a,gehen:n}}function fa(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
    <polyline points="10 17 15 12 10 7"/>
    <line x1="15" y1="12" x2="3" y2="12"/>
  </svg>`}function ma(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>`}function ue(e,t={}){const{size:a=20,layout:n="inline"}=t;return e?`
    <div class="kommen-gehen ${n}">
      <span class="kg-block kommen" title="Kommen (frühester Einstempel)">
        ${fa(a)}
        <span class="kg-zeit tabular">${e.kommen}</span>
      </span>
      <span class="kg-block gehen" title="Gehen (spätester Ausstempel)">
        ${ma(a)}
        <span class="kg-zeit tabular">${e.gehen}</span>
      </span>
    </div>
  `:'<span class="kg-empty">—</span>'}const Le={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},pa=(e,t,a)=>{let n;const s=a!=null&&a.addSuffix?Le[e].withPreposition:Le[e].standalone;return typeof s=="string"?n=s:t===1?n=s.one:n=s.other.replace("{{count}}",String(t)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:"vor "+n:n},va={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},ba={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},ya={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},wa={date:he({formats:va,defaultWidth:"full"}),time:he({formats:ba,defaultWidth:"full"}),dateTime:he({formats:ya,defaultWidth:"full"})},$a={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},ka=(e,t,a,n)=>$a[e],Ma={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},Sa={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},pe={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},xa={narrow:pe.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:pe.wide},za={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},Da={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},Aa={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},Pa=e=>Number(e)+".",Ta={ordinalNumber:Pa,era:q({values:Ma,defaultWidth:"wide"}),quarter:q({values:Sa,defaultWidth:"wide",argumentCallback:e=>e-1}),month:q({values:pe,formattingValues:xa,defaultWidth:"wide"}),day:q({values:za,defaultWidth:"wide"}),dayPeriod:q({values:Da,defaultWidth:"wide",formattingValues:Aa,defaultFormattingWidth:"wide"})},Ea=/^(\d+)(\.)?/i,La=/\d+/i,Ka={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},Wa={any:[/^v/i,/^n/i]},Fa={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},Oa={any:[/1/i,/2/i,/3/i,/4/i]},Ba={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},Ca={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ia={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},Va={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},_a={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},ja={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},Ra={ordinalNumber:bt({matchPattern:Ea,parsePattern:La,valueCallback:e=>parseInt(e)}),era:J({matchPatterns:Ka,defaultMatchWidth:"wide",parsePatterns:Wa,defaultParseWidth:"any"}),quarter:J({matchPatterns:Fa,defaultMatchWidth:"wide",parsePatterns:Oa,defaultParseWidth:"any",valueCallback:e=>e+1}),month:J({matchPatterns:Ba,defaultMatchWidth:"wide",parsePatterns:Ca,defaultParseWidth:"any"}),day:J({matchPatterns:Ia,defaultMatchWidth:"wide",parsePatterns:Va,defaultParseWidth:"any"}),dayPeriod:J({matchPatterns:_a,defaultMatchWidth:"wide",parsePatterns:ja,defaultParseWidth:"any"})},ae={code:"de",formatDistance:pa,formatLong:wa,formatRelative:ka,localize:Ta,match:Ra,options:{weekStartsOn:1,firstWeekContainsDate:4}};function Q(e){if(!e)return null;const t=e.trim();return $t(t,"dd.MM.yyyy",new Date)}function w(e){return z(e,"dd.MM.yyyy")}function st(e){return z(e,"EE, dd.MM.yyyy",{locale:ae})}function Za(e){const t=yt(e,{weekStartsOn:1}),a=wt(e,{weekStartsOn:1});return`${z(t,"dd.MM.")} – ${z(a,"dd.MM.yyyy")}`}function Ha(e){return`${kt(e)}-${String(Mt(e)).padStart(2,"0")}`}function it(e){return z(e,"yyyy-MM")}function Na(e){return z(e,"yyyy-MM-dd")}function Ga(e,t){if(!e||!t)return 0;e>t&&([e,t]=[t,e]);let a=0,n=new Date(e);for(;n<t;)n=qe(n,1),Je(n)||a++;return a}function I(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function rt(e){var d;const t=e.filter(g=>g.tagestyp==="Berufsschule");if(t.length<2)return{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1};const a={};for(const g of t)a[d=g.wochentag]??(a[d]=[]),a[g.wochentag].push(g);const n=[],s=[];let i=null;for(const[g,u]of Object.entries(a)){if(u.sort((p,y)=>p.datum.localeCompare(y.datum)),u.length<2)continue;const h=[];for(let p=1;p<u.length;p++)h.push(St(M(u[p].datum),M(u[p-1].datum)));const f=Ke(h);f<=10?n.push(g):f<=18&&(s.push(g),(!i||M(u[0].datum)<M(i))&&(i=u[0].datum))}const r=t.map(g=>g.ist).filter(g=>g!=null&&g>0),l=Ke(r),c=l!=null?Math.round(l*4)/4:null,o=c!=null&&c<5;return{wochentageWoechentlich:n,wochentage14Taegig:s,referenzDatum14Taegig:i,stundenProTag:c,halbtags:o}}function Ke(e){if(!e.length)return null;const t=e.slice().sort((n,s)=>n-s),a=Math.floor(t.length/2);return t.length%2?t[a]:(t[a-1]+t[a])/2}function $e(e,t){var s,i;if(!t)return!1;const n=["SO","MO","DI","MI","DO","FR","SA"][e.getDay()];if((s=t.wochentageWoechentlich)!=null&&s.includes(n))return!0;if((i=t.wochentage14Taegig)!=null&&i.includes(n)&&t.referenzDatum14Taegig){const r=M(t.referenzDatum14Taegig),l=xt(e,r,{weekStartsOn:1});if(l>=0&&l%2===0)return!0}return!1}function lt(e,t=null){return(e==null?void 0:e.stundenProTag)!=null&&e.stundenProTag>0?e.stundenProTag:t}const qa=Object.freeze(Object.defineProperty({__proto__:null,erkenneBerufsschulMuster:rt,erwarteteBerufsschulStunden:lt,istBerufsschulTagLautMuster:$e},Symbol.toStringTag,{value:"Module"}));function Ja(e){return e?"arbzg":"jarbschg"}function Ua(e,t){return e==null?0:t==="jarbschg"?e>6?1:e>4.5?.5:0:e>9?.75:e>6?.5:0}function ot(e){if(!e||e.length<2)return 0;const t=e.filter(n=>n.von&&n.bis).map(n=>({von:K(n.von),bis:K(n.bis)})).filter(n=>n.von!=null&&n.bis!=null).sort((n,s)=>n.von-s.von);let a=0;for(let n=1;n<t.length;n++){const s=t[n].von-t[n-1].bis;(s>0&&s>=15||s>0)&&(a+=s)}return a/60}function ct(e,t){const a=e.zeitSpannen??[];if(!a.length||a.every(f=>!f.von))return{keinAnspruch:!0};const n=ot(a),s=e.pause??0,i=Ya(a),r=i-s,l=t.pausenRegel&&t.pausenRegel!=="auto"?t.pausenRegel==="jarbschg"?"jarbschg":"arbzg":Ja(!!t.ueber18),c=Ua(r,l),o=Math.max(n,c),d=s-o,g=Math.max(0,c-n);let u="ok",h=null;if(d>.05)u="fehler_zeitwirtschaft",h=`${Math.round(d*60)} min Pause wurden zusätzlich zur gesetzlichen Pflicht und zur gestempelten Pause abgezogen. Das sieht nach einem Zeitwirtschafts-Fehler aus.`;else if(g>.05&&s>n+.02){u="aufstockung_legal";const f=Math.round(g*60);h=`Du hast ${Math.round(n*60)} min Pause gestempelt, aber bei ${r.toFixed(2).replace(".",",")}h Arbeitszeit schreibt das Gesetz (${l.toUpperCase()}) ${Math.round(c*60)} min vor. Die fehlenden ${f} min wurden automatisch als Pause gewertet. Das ist gesetzeskonform — nächstes Mal einfach länger Pause machen.`}return{arbeitszeitMitPause:i,arbeitszeitOhnePause:r,gestempeltePause:n,abgezogenePause:s,gesetzlichePflicht:c,gesetz:l,legalerAbzug:o,unrechtmaessigerVerlustMin:Math.round(Math.max(0,d)*60),aufstockungMin:Math.round(Math.max(0,g)*60),typ:u,warnung:h}}function Ya(e){let t=0;for(const a of e){if(!a.von||!a.bis)continue;const n=K(a.von),s=K(a.bis);n!=null&&s!=null&&s>n&&(t+=s-n)}return t/60}const U={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function ke(e,t,a,n=new Set){var d,g;const s=[],i=a??new Date,r=new Map(e.map(u=>[u.datum,u]));if(!e.length)return s;const l=M(e[0].datum),c=i;for(let u=new Date(l);u<=c;u=qe(u,1)){if(Je(u))continue;const h=z(u,"yyyy-MM-dd"),f=r.get(h),p=Ga(u,c);if(!f||!f.tagestyp&&!f.ist&&(((d=f.zeitSpannen)==null?void 0:d.length)??0)===0){if($e(u,t.berufsschulMuster)){const v=p>=4?"error":p>=2?"warn":"info";Y(s,n,{datum:h,wochentag:(f==null?void 0:f.wochentag)??ne(u),typ:"bs_tag_fehlt",schweregrad:v,titel:`Berufsschultag nicht eingetragen: ${w(u)}`,beschreibung:`Laut deinem Profil hast du am ${U[ne(u)]}, ${w(u)} Berufsschule. Im Zeitnachweis fehlt der Tag bisher${p>=4?" — bitte bei der Zeitwirtschaft nachhaken":""}.`,alter:p,mailVorlageKey:v==="error"?"bs_tag_fehlt":null})}else{const v=p>=4?"error":p>=2?"warn":"info";Y(s,n,{datum:h,wochentag:ne(u),typ:"stempelzeit_fehlt",schweregrad:v,titel:`Keine Stempelzeit am ${w(u)}`,beschreibung:`Am ${U[ne(u)]}, ${w(u)} wurde keine Stempelzeit erfasst. Falls du an diesem Tag im Haus warst, sollte die Zeitwirtschaft das nachtragen${p>=4?" — es ist inzwischen ≥4 Werktage her":""}.`,alter:p,mailVorlageKey:v==="error"?"stempelzeit_fehlt":null})}continue}if(f.tagestyp==="Berufsschule"&&f.ist!=null){const v=lt(t.berufsschulMuster,f.soll);v!=null&&f.ist<v-.5&&Y(s,n,{datum:h,wochentag:f.wochentag,typ:"bs_stunden_falsch",schweregrad:"error",titel:`Berufsschultag mit zu wenig Stunden: ${w(u)}`,beschreibung:`Am ${U[f.wochentag]}, ${w(u)} sind nur ${f.ist.toFixed(2).replace(".",",")}h gebucht statt der für dich üblichen ${v.toFixed(2).replace(".",",")}h. Die Zeitwirtschaft hat den Berufsschultag möglicherweise nur halb erfasst.`,ist:f.ist,soll:v,mailVorlageKey:"bs_stunden_falsch"})}if(f.tagestyp==="Stempelzeit"&&((g=f.zeitSpannen)==null?void 0:g.length)>1&&h>="2026-04-01"){const v=ct(f,t);(v==null?void 0:v.typ)==="fehler_zeitwirtschaft"&&v.unrechtmaessigerVerlustMin>=5?Y(s,n,{datum:h,wochentag:f.wochentag,typ:"pausen_abzug",schweregrad:v.unrechtmaessigerVerlustMin>=15?"error":"warn",titel:`Pausen-Abzug fehlerhaft (${w(u)})`,beschreibung:`Am ${U[f.wochentag]}, ${w(u)} wurden ${Math.round(v.abgezogenePause*60)} min Pause abgezogen. Gestempelt: ${Math.round(v.gestempeltePause*60)} min, gesetzlich nötig (${v.gesetz.toUpperCase()}): ${Math.round(v.gesetzlichePflicht*60)} min. Differenz von ${v.unrechtmaessigerVerlustMin} min ist unerklärlich.`,verlustMinuten:v.unrechtmaessigerVerlustMin,abgezogen:v.abgezogenePause,gestempelt:v.gestempeltePause,mailVorlageKey:"pausen_abzug"}):(v==null?void 0:v.typ)==="aufstockung_legal"&&v.aufstockungMin>=10&&Y(s,n,{datum:h,wochentag:f.wochentag,typ:"pausen_aufstockung",schweregrad:"info",titel:`Zu wenig Pause gestempelt (${w(u)}) — ${v.aufstockungMin} min automatisch aufgestockt`,beschreibung:`Am ${U[f.wochentag]}, ${w(u)} hast du nur ${Math.round(v.gestempeltePause*60)} min Pause gemacht. Gesetz (${v.gesetz.toUpperCase()}) schreibt ${Math.round(v.gesetzlichePflicht*60)} min vor. Fehlende ${v.aufstockungMin} min wurden als Pause gewertet — das ist legal, aber du verlierst dadurch Arbeitszeit. Tipp: mach beim nächsten Mal etwas länger Mittag.`})}}const o={error:0,warn:1,info:2};return s.sort((u,h)=>{const f=o[u.schweregrad]-o[h.schweregrad];return f!==0?f:h.datum.localeCompare(u.datum)}),s}function dt(e,t=new Set){var n,s,i,r;const a=[];for(const l of e){const c=((n=l.glz)==null?void 0:n.saldoVorperiode)??0,o=((s=l.glz)==null?void 0:s.saldoAktuellePeriode)??0,d=((i=l.glz)==null?void 0:i.umgebuchteStunden)??0,g=(r=l.glz)==null?void 0:r.saldoGesamt;if(g==null)continue;const u=c+o+d,h=Math.abs(g-u);if(h>.03){const f=`${l.monatKey}-saldo_plausi`;t.has(f)||a.push({datum:`${l.monatKey}-01`,wochentag:"",typ:"saldo_plausi",schweregrad:"warn",titel:`Saldo-Differenz im Monat ${l.monatKey}`,beschreibung:`Rechnung: Vorperiode ${c.toFixed(2)} + aktuelle Periode ${o.toFixed(2)} + umgebucht ${d.toFixed(2)} = ${u.toFixed(2)}, aber dein Saldo wird mit ${g.toFixed(2)} angezeigt. Abweichung: ${h.toFixed(2)}h.`,soll:u,ist:g})}}return a}function Y(e,t,a){const n=`${a.datum}-${a.typ}`;t.has(n)||(a.id=n,e.push(a))}function ne(e){return["SO","MO","DI","MI","DO","FR","SA"][e.getDay()]}function Xa(e,t){var c,o,d;const a=[...e].sort((g,u)=>g.datum.localeCompare(u.datum));if(!a.length)return[];const n=new Map(t.map(g=>[g.monatKey,g])),s={};for(const g of a)s[c=g.monatKey]??(s[c]=[]),s[g.monatKey].push(g);const i=Object.keys(s).sort(),r=[];let l=null;for(const g of i){const u=n.get(g);let h;((o=u==null?void 0:u.glz)==null?void 0:o.saldoVorperiode)!=null?h=u.glz.saldoVorperiode:l!=null?h=l:h=0;const f=s[g];for(const p of f)p.diff!=null&&(h+=p.diff),r.push({datum:p.datum,wochentag:p.wochentag,saldo:Math.round(h*100)/100,diff:p.diff,ist:p.ist,soll:p.soll,tagestyp:p.tagestyp,monatKey:p.monatKey,wocheKey:p.wocheKey,zeitSpannen:p.zeitSpannen});if(((d=u==null?void 0:u.glz)==null?void 0:d.saldoGesamt)!=null){const p=u.glz.saldoGesamt-h;if(Math.abs(p)>.02&&r.length>0){const y=r.length-1;r[y].umbuchung=p,r[y].saldo=Math.round((r[y].saldo+p)*100)/100,h=r[y].saldo}l=u.glz.saldoGesamt}else l=h}return r}function Qa(e,t){if(!e.length)return[];if(t==="alles")return e;const a=Math.min(t,e.length);return e.slice(-a)}function en(e){return e.length?e[e.length-1].saldo:0}function tn(e){if(!e.length)return 0;const t=e[0].saldo-(e[0].diff??0),a=e[e.length-1].saldo;return Math.round((a-t)*100)/100}const an={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"},ee={bs_tag_fehlt:{key:"bs_tag_fehlt",titel:"Berufsschultag fehlt",beschreibung:"Wenn ein Berufsschultag komplett nicht im Zeitnachweis eingetragen wurde.",betreff:"Bitte um Zeitkorrektur im ESS  - Fehlender Berufsschultag {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

am {datum} ({wochentag}) war ich ganztägig in der Berufsschule. In meinem Zeitnachweis wurde dieser Tag bisher jedoch nicht erfasst.

Ich bitte Sie um nachträgliche Eintragung mit den regulären 7,00h.

Vielen Dank!`},bs_stunden_falsch:{key:"bs_stunden_falsch",titel:"Berufsschul-Stunden falsch",beschreibung:"Wenn ein Berufsschultag mit zu wenig Stunden erfasst wurde (z.B. 6h statt 7h).",betreff:"Bitte um Zeitkorrektur im ESS  - Berufsschultag {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

am {datum} ({wochentag}) war ich ganztägig in der Berufsschule. In meinem Zeitnachweis sind jedoch nur {ist}h statt der regulären {soll}h gebucht.

Ich bitte Sie um Prüfung und Korrektur auf {soll}h.

Vielen Dank!`},stempelzeit_fehlt:{key:"stempelzeit_fehlt",titel:"Stempelzeit fehlt",beschreibung:"Wenn ein regulärer Arbeitstag ohne Stempelung geblieben ist.",betreff:"Bitte um Zeitkorrektur im ESS  - Fehlender Arbeitstag {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

am {datum} ({wochentag}) war ich regulär im Haus und habe meine Zeiten gestempelt. In meinem Zeitnachweis fehlt dieser Tag bisher jedoch komplett.

Ich bitte Sie um Prüfung und Nachtrag der Stempeldaten.

Vielen Dank!`},pausen_abzug:{key:"pausen_abzug",titel:"Falscher Pausen-Abzug",beschreibung:"Wenn mehr Pause abgezogen wurde als tatsächlich gestempelt.",betreff:"Bitte um Zeitkorrektur im ESS  - Pausen-Abzug {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

am {datum} ({wochentag}) wurde in meinem Zeitnachweis eine Pause von {abgezogen} Minuten abgezogen. Gestempelt hatte ich jedoch nur {gestempelt} Minuten Pause — die Differenz von {verlust} Minuten reduziert meine Stundengutschrift unrechtmäßig.

Ich bitte Sie um Prüfung und Korrektur auf {gestempelt} Minuten Pause.

Vielen Dank!`}};function ge(e,t){const a=ee[e];return a?{...a,...t??{}}:null}function ut(e,t){const a=We(e.text,t);return{betreff:We(e.betreff,t),text:a}}function We(e,t){return e.replace(/\{(\w+)\}/g,(a,n)=>t[n]!=null?String(t[n]):`{${n}}`)}function gt(e,t){const a=t.datum?new Date(t.datum):null;return{name:"",personalnr:"",kostenstelle:"",datum:a?st(a).split(", ")[1]:"",wochentag:an[t.wochentag]??t.wochentag??"",zeitwirtschaft_anrede:e.zeitwirtschaftAnrede||"Frau Kanarya",zeitwirtschaft_email:e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",ist:t.ist!=null?t.ist.toFixed(2).replace(".",","):"",soll:t.soll!=null?t.soll.toFixed(2).replace(".",","):"",abgezogen:t.abgezogen!=null?Math.round(t.abgezogen*60):"",gestempelt:t.gestempelt!=null?Math.round(t.gestempelt*60):"",verlust:t.verlustMinuten??""}}function ht(e,t,a){const n=ut(t,a),s=e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",i=new URLSearchParams;return i.set("subject",n.betreff),i.set("body",n.text),`mailto:${s}?${i.toString().replace(/\+/g,"%20")}`}E.register(zt,Dt,At,Pt,Tt,Et,Lt,Kt,Wt,Ft,Ot,Bt,Ct,It);function k(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function F(){return{fg:k("--fg"),fgMuted:k("--fg-muted"),fgSubtle:k("--fg-subtle"),border:k("--border"),surface:k("--surface"),accent:k("--accent"),success:k("--success"),warn:k("--warn"),danger:k("--danger"),info:k("--info"),palette:[k("--chart-1"),k("--chart-2"),k("--chart-3"),k("--chart-4"),k("--chart-5"),k("--chart-6"),k("--chart-7")]}}function $(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.fgMuted,font:{size:12}}},tooltip:{backgroundColor:e.surface,titleColor:e.fg,bodyColor:e.fg,borderColor:e.border,borderWidth:1,padding:10,displayColors:!0}},scales:{x:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}},y:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}}}}}function nn(e,t){const a=F();if(O(e),!(t!=null&&t.length))return;const n=t.map(i=>z(M(i.datum),"dd.MM.")),s=t.map(i=>i.saldo);return s.map(i=>i>=0?a.success:a.danger),new E(e,{type:"line",data:{labels:n,datasets:[{label:"Tages-Saldo",data:s,borderColor:a.accent,backgroundColor:i=>{const r=i.chart,{ctx:l,chartArea:c,scales:o}=r;return c?hn(l,c,o.y,a):V(a.accent,.14)},segment:{borderColor:i=>{const r=i.p0.parsed.y,l=i.p1.parsed.y,c=(r+l)/2;return c>=.02?a.success:c<=-.02?a.danger:a.fgMuted}},tension:.25,pointRadius:2,pointHoverRadius:6,pointHitRadius:20,pointBackgroundColor:s.map(i=>i>=.02?a.success:i<=-.02?a.danger:a.fgMuted),pointBorderColor:a.surface,pointBorderWidth:1,fill:!0,borderWidth:2}]},options:{...$(a),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},plugins:{...$(a).plugins,legend:{display:!1},tooltip:{enabled:!1,mode:"index",intersect:!1,axis:"x",position:"nearest",external:sn(t)}},scales:{...$(a).scales,y:{...$(a).scales.y,ticks:{...$(a).scales.y.ticks,callback:i=>`${i>=0?"+":""}${i.toFixed(1).replace(".",",")}h`}}}}})}function sn(e){return function(t){var N;const{chart:a,tooltip:n}=t;let s=a.$saldoTooltipEl;if(!s){s=document.createElement("div"),s.className="saldo-tooltip",document.body.appendChild(s),a.$saldoTooltipEl=s;const b=a.destroy.bind(a);a.destroy=function(){s.parentNode&&s.parentNode.removeChild(s),b()}}if(n.opacity===0||!((N=n.dataPoints)!=null&&N.length)){s.style.opacity="0";return}const i=n.dataPoints[0].dataIndex,r=e[i];if(!r){s.style.opacity="0";return}const l=r.saldo>.05?"pos":r.saldo<-.05?"neg":"flat",c=(r.diff??0)>.05?"pos":(r.diff??0)<-.05?"neg":"flat",o=(r.saldo>0?"+":"")+r.saldo.toFixed(2).replace(".",",")+"h",d=r.diff!=null?(r.diff>0?"+":"")+r.diff.toFixed(2).replace(".",",")+"h":null;let u=`<div class="saldo-tooltip-title">${Fe(z(M(r.datum),"EE, dd.MM.yyyy",{locale:ae}))}</div>`;u+=`<div class="saldo-tooltip-row"><span class="saldo-tooltip-label">Saldo</span><span class="saldo-tooltip-value ${l}">${o}</span></div>`,d&&(u+=`<div class="saldo-tooltip-row"><span class="saldo-tooltip-label">Tages-Diff</span><span class="saldo-tooltip-value ${c}">${d}</span></div>`);const h=[];r.tagestyp&&h.push(`Typ: ${Fe(r.tagestyp)}`),r.umbuchung&&h.push(`Umbuchung: ${r.umbuchung>=0?"+":""}${r.umbuchung.toFixed(2).replace(".",",")}h`),h.length&&(u+=`<div class="saldo-tooltip-meta">${h.map(b=>`<span>${b}</span>`).join("")}</div>`),s.innerHTML=u;const f=a.canvas.getBoundingClientRect(),p=f.left+n.caretX,y=f.top+n.caretY;s.style.opacity="0",s.style.left="0px",s.style.top="0px";const v=s.offsetWidth,P=s.offsetHeight,Z=18;let B=p+Z;B+v>window.innerWidth-8&&(B=p-Z-v);let C=y-P/2;C<8&&(C=8),C+P>window.innerHeight-8&&(C=window.innerHeight-P-8),s.style.left=B+"px",s.style.top=C+"px",s.style.opacity="1"}}function Fe(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function rn(e,t){const a=F();if(O(e),!(t!=null&&t.length))return;const n=t.map(i=>i.monatKey),s=t.map(i=>{var r;return((r=i.glz)==null?void 0:r.saldoGesamt)??0});return new E(e,{type:"line",data:{labels:n,datasets:[{label:"GLZ-Saldo (Monatsende)",data:s,borderColor:a.accent,backgroundColor:V(a.accent,.18),tension:.35,fill:!0,pointRadius:4}]},options:$(a)})}function Me(e,t){const a=F();if(O(e),!(t!=null&&t.length))return;const n=t.map(r=>z(M(r.datum),"dd.MM.")),s=t.map(r=>r.ist??0),i=t.map(r=>fn(r.tagestyp,a));return new E(e,{type:"bar",data:{labels:n,datasets:[{label:"Ist-Stunden",data:s,backgroundColor:i,borderRadius:4,borderSkipped:!1}]},options:{...$(a),plugins:{...$(a).plugins,legend:{display:!1},tooltip:{...$(a).plugins.tooltip,callbacks:{label:r=>{const l=t[r.dataIndex];return`${l.tagestyp??"—"}: ${(l.ist??0).toFixed(2).replace(".",",")}h`}}}},scales:{...$(a).scales,y:{...$(a).scales.y,suggestedMin:0,suggestedMax:10}}}})}function ln(e,t){const a=F();if(O(e),!(t!=null&&t.length))return;const n=t.filter(o=>{var d;return((d=o.zeitSpannen)==null?void 0:d.length)&&o.zeitSpannen.some(g=>g.von&&g.bis)}).map(o=>{const d=o.zeitSpannen.filter(h=>h.von&&h.bis).map(h=>({von:K(h.von),bis:K(h.bis),vonStr:h.von,bisStr:h.bis})).filter(h=>h.von!=null&&h.bis!=null);if(d.length===0)return null;const g=Math.min(...d.map(h=>h.von)),u=Math.max(...d.map(h=>h.bis));return{...o,_spans:d,_minVon:g,_maxBis:u}}).filter(Boolean);if(!n.length)return;const s=o=>o.ist==null?a.fgMuted:o.ist>=7?a.success:a.danger,i={label:"Tages-Rahmen",data:n.map(o=>[o._minVon,o._maxBis]),backgroundColor:n.map(s),borderColor:n.map(s),borderWidth:0,borderRadius:4,borderSkipped:!1,barPercentage:.75,categoryPercentage:.95},r=Math.max(0,Math.floor(Math.min(...n.map(o=>o._minVon))/60)*60-60),l=Math.min(24*60,Math.ceil(Math.max(...n.map(o=>o._maxBis))/60)*60+60),c=o=>`${String(Math.floor(o/60)).padStart(2,"0")}:${String(o%60).padStart(2,"0")}`;return new E(e,{type:"bar",data:{labels:n.map(o=>z(M(o.datum),"dd.MM.")),datasets:[i]},options:{...$(a),interaction:{mode:"index",intersect:!1,axis:"x"},plugins:{legend:{display:!1},tooltip:{enabled:!0,backgroundColor:a.surface,borderColor:a.accent,borderWidth:2,padding:14,titleColor:a.fg,titleFont:{size:14,weight:"600"},titleMarginBottom:8,bodyColor:a.fg,bodyFont:{size:13},bodySpacing:4,displayColors:!1,caretPadding:10,cornerRadius:8,callbacks:{title:o=>{const d=n[o[0].dataIndex];return z(M(d.datum),"EE, dd.MM.yyyy",{locale:ae})},label:()=>"",beforeBody:o=>{const d=n[o[0].dataIndex],g=d.ist!=null?H(d.ist):"—",u=d.soll!=null?H(d.soll):"—",h=d.pause!=null?Math.round(d.pause*60)+" min":"—",p=[`Tages-Rahmen: ${`${c(d._minVon)} – ${c(d._maxBis)}`}`];return d._spans.length>1&&(p.push(""),d._spans.forEach((y,v)=>{p.push(`  Block ${v+1}: ${y.vonStr} – ${y.bisStr}`)})),[...p,"",`Arbeitszeit (netto): ${g}`,`Soll: ${u}`,`Pause (abgezogen): ${h}`]}}}},scales:{x:{ticks:{color:a.fgMuted,font:{size:10},maxRotation:60,minRotation:60,autoSkip:!0,maxTicksLimit:40},grid:{display:!1}},y:{min:r,max:l,ticks:{color:a.fgMuted,stepSize:60,callback:o=>c(o)},grid:{color:a.border}}}}})}function on(e,t){const a=F();O(e);const n={};for(const r of t){if(r.tagestyp!=="Stempelzeit"||!r.zeitSpannen||r.zeitSpannen.length<2)continue;const l=ot(r.zeitSpannen);if(l<=0)continue;const c=Math.round(l*60),o=Math.floor(c/15)*15;n[o]=(n[o]??0)+1}const s=Object.keys(n).map(Number).sort((r,l)=>r-l),i=s.map(r=>n[r]);return new E(e,{type:"bar",data:{labels:s.map(r=>`${r}–${r+14} min`),datasets:[{label:"Häufigkeit",data:i,backgroundColor:a.palette[1],borderRadius:4}]},options:{...$(a),plugins:{...$(a).plugins,legend:{display:!1},tooltip:{...$(a).plugins.tooltip,callbacks:{title:r=>`Pause-Länge (gestempelt): ${r[0].label}`,label:r=>`${r.parsed.y} Tag(e)`}}}}})}function cn(e,t){const a=F();O(e);const n=["MO","DI","MI","DO","FR"],s={},i={};for(const l of n)s[l]=0,i[l]=0;for(const l of t)n.includes(l.wochentag)&&(l.ist==null||l.ist===0||(s[l.wochentag]+=l.ist,i[l.wochentag]+=1));const r=n.map(l=>i[l]>0?s[l]/i[l]:0);return new E(e,{type:"bar",data:{labels:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"],datasets:[{label:"Ø Ist-Stunden",data:r,backgroundColor:a.palette[2],borderRadius:4}]},options:{...$(a),plugins:{...$(a).plugins,legend:{display:!1}}}})}function dn(e,t){const a=F();O(e);const n={};for(const r of t)!r.tagestyp||r.tagestyp==="Wochenende"||(n[r.tagestyp]=(n[r.tagestyp]??0)+1);const s=Object.keys(n),i=Object.values(n);return new E(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:s.map((r,l)=>a.palette[l%a.palette.length]),borderColor:a.surface,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:a.fgMuted,font:{size:12}}},tooltip:$(a).plugins.tooltip}}})}function un(e,t){const a=F();O(e);const n={};for(const l of t){const c=l.wocheKey;n[c]??(n[c]={ist:0,soll:0}),n[c].ist+=l.ist??0,n[c].soll+=l.soll??0}const s=Object.keys(n).sort(),i=s.map(l=>n[l].ist),r=s.map(l=>n[l].soll);return new E(e,{type:"bar",data:{labels:s.map(l=>"KW "+l.split("-")[1]),datasets:[{label:"Ist",data:i,backgroundColor:a.palette[0],borderRadius:4},{label:"Soll",data:r,backgroundColor:a.palette[3],borderRadius:4}]},options:$(a)})}function gn(e,t){const a=F();O(e);const n=t.slice().sort((r,l)=>r.datum.localeCompare(l.datum));let s=0;const i=n.map(r=>(s+=r.diff??0,{x:r.datum,y:s}));return new E(e,{type:"line",data:{labels:i.map(r=>r.x),datasets:[{label:"Kumulative Differenz (+/- Soll)",data:i.map(r=>r.y),borderColor:a.palette[5],backgroundColor:V(a.palette[5],.15),fill:!0,tension:.2,pointRadius:0}]},options:{...$(a),scales:{x:{display:!1,grid:{display:!1}},y:{...$(a).scales.y}}}})}function O(e){const t=E.getChart(e);t&&t.destroy()}function V(e,t){const a=e.replace("#","").trim();if(a.length!==6&&a.length!==3)return e;const n=a.length===3?a.split("").map(l=>l+l).join(""):a,s=parseInt(n.slice(0,2),16),i=parseInt(n.slice(2,4),16),r=parseInt(n.slice(4,6),16);return`rgba(${s}, ${i}, ${r}, ${t})`}function hn(e,t,a,n){const{top:s,bottom:i}=t,r=e.createLinearGradient(0,s,0,i),l=a.min,c=a.max,o=c-l;if(o<=0)return V(n.success,.14);let d=(c-0)/o;return d=Math.max(0,Math.min(1,d)),r.addColorStop(0,V(n.success,.28)),r.addColorStop(Math.max(0,d-.001),V(n.success,.06)),r.addColorStop(Math.min(1,d+.001),V(n.danger,.06)),r.addColorStop(1,V(n.danger,.28)),r}function fn(e,t){const a=String(e??"").toLowerCase();return a.includes("stempel")?t.palette[0]:a.includes("berufs")?t.palette[1]:a.includes("urlaub")?t.palette[2]:a.includes("feiertag")?t.fgSubtle:a.includes("dienst")?t.palette[3]:a.includes("krank")?t.palette[4]:t.palette[5]}let mn=0;function Se(e,{type:t="info",duration:a=3500}={}){const n=document.getElementById("toast-root");if(!n)return;const s=document.createElement("div");s.className=`toast ${t}`,s.textContent=e,s.dataset.id=++mn,n.appendChild(s),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateY(-8px)",s.style.transition="opacity 220ms, transform 220ms",setTimeout(()=>s.remove(),250)},a)}function xe(e){return Se(e,{type:"error",duration:6e3})}function S(e){return Se(e,{type:"success"})}const Oe=[{key:7,label:"1 Woche"},{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:"alles",label:"Alles"}];async function Be({root:e}){var Z,B,C,N;const[t,a,n,s,i,r]=await Promise.all([j(),te(),W(),ha(),na("dashboardZeitraum",14),we()]),l=Object.fromEntries(r.map(b=>[b.key,b]));if(n.length===0){e.innerHTML=kn();return}const c=!((B=(Z=t.berufsschulMuster)==null?void 0:Z.wochentageWoechentlich)!=null&&B.length||(N=(C=t.berufsschulMuster)==null?void 0:C.wochentage14Taegig)!=null&&N.length),o=Xa(n,a),d=o.length;let g=i;typeof g=="number"&&g>d&&(g="alles");const u=new Set(s.map(b=>b.key)),h=ke(n,t,new Date,u),f=dt(a,u),p=[...h,...f],y=en(o),v=y>.05?"positive":y<-.05?"negative":"";e.innerHTML=`
    <h1 class="view-title">Dashboard</h1>
    <p class="view-subtitle">Stand: ${_(w(new Date(n[n.length-1].datum)))}</p>

    <div class="saldo-hero" style="margin-bottom: 32px; align-items: stretch;">
      <div class="saldo-hero-text" style="min-width: 260px;">
        <h3>Aktueller Gleitzeit-Saldo</h3>
        <div class="saldo-value ${v}">${A(y,{signed:!0,suffix:""})}</div>
        <div class="saldo-unit">Stunden · tagesaktuell</div>
        <div id="hero-bewegung" class="saldo-trend flat" style="margin-top: 12px;"></div>
      </div>
      <div style="flex: 1; min-width: 400px; display: flex; flex-direction: column;">
        <div class="card-split" style="margin-bottom: 12px; align-items: center;">
          <h3 style="margin: 0;">Verlauf</h3>
          <div class="segmented" id="zeitraum-picker">
            ${Oe.map(b=>{const x=typeof b.key=="number"&&b.key>d;return`<button type="button" data-key="${b.key}" class="${g===b.key?"active":""}" ${x?'disabled style="opacity:0.4"':""}>${b.label}</button>`}).join("")}
          </div>
        </div>
        <div style="flex: 1; height: 220px;"><canvas id="saldo-chart"></canvas></div>
      </div>
    </div>

    ${c?`
      <div class="alert severity-info" style="margin-bottom: 24px; border-color: var(--accent); background: var(--accent-bg);">
        <div class="alert-icon" style="background: var(--accent);">!</div>
        <div class="alert-body">
          <div class="alert-title">Profil noch nicht vollständig</div>
          <p style="margin: 4px 0; font-size: 13px;">Ohne Geburtsdatum kann die App nicht zwischen JArbSchG (Minderjährig) und ArbZG (≥18) unterscheiden. Ohne Berufsschul-Rhythmus erkennt sie nicht, wenn ein BS-Tag fehlt.</p>
          <div class="alert-actions">
            <a href="#/profil" class="btn primary sm">Profil ausfüllen →</a>
          </div>
        </div>
      </div>
    `:""}

    ${p.length>0?`
      <div class="card" style="margin-bottom: 32px;">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Offene Warnungen</h2>
        </div>
        ${p.slice(0,8).map(b=>$n(b,t,l)).join("")}
        ${p.length>8?`<div style="margin-top: 12px; color: var(--fg-muted); font-size: 13px; text-align: center;">+ ${p.length-8} weitere Warnungen vorhanden</div>`:""}
      </div>
    `:`
      <div class="alert severity-info" style="background: var(--success-bg); border-color: var(--success); margin-bottom: 32px;">
        <div class="alert-icon" style="background: var(--success);">✓</div>
        <div class="alert-body">
          <div class="alert-title">Keine Warnungen</div>
          <p style="margin: 4px 0; font-size: 13px;">Dein Zeitnachweis sieht sauber aus.</p>
        </div>
      </div>
    `}

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 20px; flex-wrap: wrap; gap: 16px;">
        <div style="display: flex; align-items: baseline; gap: 16px; flex-wrap: wrap;">
          <h2 style="margin: 0;">Tage im gewählten Zeitraum</h2>
          <span style="color: var(--fg-muted); font-size: 13px;" id="tage-info"></span>
        </div>
        <div class="segmented" id="zeitraum-picker-2">
          ${Oe.map(b=>{const x=typeof b.key=="number"&&b.key>d;return`<button type="button" data-key="${b.key}" class="${g===b.key?"active":""}" ${x?'disabled style="opacity:0.4"':""}>${b.label}</button>`}).join("")}
        </div>
      </div>
      <div id="tage-liste"></div>
    </div>

  `,Ce(g,e,o);const P=()=>e.querySelectorAll("#zeitraum-picker button, #zeitraum-picker-2 button");P().forEach(b=>{b.addEventListener("click",async()=>{if(b.disabled)return;const x=b.getAttribute("data-key"),R=x==="alles"?"alles":parseInt(x,10);P().forEach(G=>G.classList.toggle("active",G.getAttribute("data-key")===x)),await sa("dashboardZeitraum",R),Ce(R,e,o)})}),e.addEventListener("click",async b=>{const x=b.target.closest(".ist-part");if(x){b.preventDefault(),b.stopPropagation();const Ae=x.getAttribute("data-val");try{await navigator.clipboard.writeText(Ae);const Pe=x.textContent;x.classList.add("ok"),x.textContent="✓",setTimeout(()=>{x.classList.remove("ok"),x.textContent=Pe},800)}catch{S(`Bitte kopieren: ${Ae}`)}return}const R=b.target.closest(".btn-dismiss");if(!R)return;const G=R.getAttribute("data-datum"),ze=R.getAttribute("data-typ");if(!G||!ze)return;await ga(G,ze),S("Warnung ausgeblendet.");const De=R.closest(".alert");De&&(De.style.display="none")})}function Ce(e,t,a){const n=Qa(a,e),s=tn(n);requestAnimationFrame(()=>{const c=t.querySelector("#saldo-chart");nn(c,n)});const i=t.querySelector("#hero-bewegung");if(i){const c=s>.05?"up":s<-.05?"down":"flat",o=s>.05?"↑":s<-.05?"↓":"→";i.className=`saldo-trend ${c}`,i.innerHTML=`${o} ${Math.abs(s)<.01?"Unverändert":A(s,{signed:!0})} im Zeitraum`}const r=t.querySelector("#tage-info");if(r){const c=n.length;r.textContent=`${c} ${c===1?"Tag":"Tage"}`}const l=t.querySelector("#tage-liste");l&&(l.innerHTML=bn(n.slice().reverse()))}const pn=3,vn=2.5;function bn(e){if(!e.length)return'<p class="hint">Keine Tage im Zeitraum.</p>';const t=[];let a=null;for(const n of e)(!a||a.key!==n.wocheKey)&&(a={key:n.wocheKey,tage:[]},t.push(a)),a.tage.push(n);return`<div class="tages-liste">${t.map(n=>yn(n)).join("")}</div>`}function yn(e){var o;const t=e.tage.reduce((d,g)=>d+(g.ist??0),0),a=e.tage.reduce((d,g)=>d+(g.diff??0),0),n=(o=e.tage[0])==null?void 0:o.datum,s=n?Za(M(n)):"",i=e.key?e.key.split("-")[1]:"?",r=a>.05?"pos":a<-.05?"neg":"flat",l=(a>0?"+":"")+a.toFixed(2).replace(".",",")+"h",c=t.toFixed(2).replace(".",",")+"h";return`
    <div class="woche-group">
      <div class="woche-header">
        <div class="woche-header-titel">
          <span class="woche-header-kw">KW ${_(i)}</span>
          <span class="woche-header-range tabular">${_(s)}</span>
        </div>
        <div class="woche-header-stats">
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Ist</span>
            <span class="woche-header-ist tabular">${c}</span>
          </span>
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Diff</span>
            <span class="woche-header-diff tabular ${r}">${l}</span>
          </span>
        </div>
      </div>
      <div class="woche-tage">
        ${e.tage.map(d=>wn(d)).join("")}
      </div>
    </div>
  `}function wn(e){const t=e.diff??0,a=t>0,n=a?pn:vn,s=Math.min(150,Math.abs(t)/n*50),i=a?"var(--success)":t<0?"var(--danger)":"var(--fg-subtle)",r=de(e.zeitSpannen);return`
    <a href="#/tag/${e.datum}" class="tag-row">
      <div class="tag-row-datum">
        <div class="tabular">${_(w(new Date(e.datum)))}</div>
        <div class="tag-row-wd">${Mn(e.wochentag)}</div>
      </div>
      <div class="tag-row-typ">
        ${e.tagestyp?`<span class="pill ${Sn(e.tagestyp)}">${_(e.tagestyp)}</span>`:'<span style="color: var(--fg-subtle); font-size: 12px;">—</span>'}
      </div>
      <div class="tag-row-kg">
        ${ue(r,{size:18})}
      </div>
      <div class="tag-row-ist tabular">
        ${(()=>{if(e.ist==null)return'<div class="ist-wert">—</div>';const l=H(e.ist),[c,o]=l.split(":");return e.ist<=0?`<div class="ist-wert">${l}</div>`:`<div class="ist-display" title="Klick auf H oder M zum Kopieren">
            <button class="ist-part" data-val="${c}" title="${c} Stunden kopieren">${c}</button><span class="ist-sep">:</span><button class="ist-part" data-val="${o}" title="${o} Minuten kopieren">${o}</button>
          </div>`})()}
        <div style="color: var(--fg-subtle); font-size: 11px;">Soll ${e.soll!=null?H(e.soll):"—"}</div>
      </div>
      <div class="tag-row-bar">
        <div class="bar-track">
          <div class="bar-zero"></div>
          <div class="bar-fill ${a?"pos":"neg"}" style="width: ${s}%; background: ${i};"></div>
        </div>
      </div>
      <div class="tag-row-diff tabular" style="color: ${a?"var(--success)":t<0?"var(--danger)":"var(--fg-muted)"};">
        ${t!==0?(a?"+":"")+t.toFixed(2).replace(".",",")+"h":"0,00h"}
      </div>
      <div class="tag-row-saldo tabular" style="color: var(--fg-muted); font-size: 12px;">
        ${e.saldo>=0?"+":""}${e.saldo.toFixed(2).replace(".",",")}h
      </div>
    </a>
  `}function $n(e,t,a){const n=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";let s=null;if(e.mailVorlageKey&&t){const i=ge(e.mailVorlageKey,a==null?void 0:a[e.mailVorlageKey]);if(i){const r=gt(t,e);s=ht(t,i,r)}}return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${n}</div>
      <div class="alert-body">
        <div class="alert-title">${_(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${_(e.beschreibung)}</p>
        <div class="alert-actions">
          ${s?`<a href="${fe(s)}" class="btn primary sm">✉ Mail schreiben</a>`:""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
          <button class="btn ghost sm btn-dismiss" data-datum="${fe(e.datum)}" data-typ="${fe(e.typ)}">Ausblenden</button>
        </div>
      </div>
    </div>
  `}function kn(){return`
    <h1 class="view-title">Willkommen</h1>
    <p class="view-subtitle">Lade deinen Zeitnachweis hoch, um Dashboard und Analysen zu sehen.</p>
    <div class="card" style="max-width: 640px;">
      <h2>So startest du</h2>
      <ol style="color: var(--fg-muted); line-height: 1.7; font-size: 14px; padding-left: 20px;">
        <li>Öffne in SAP ESS FIORI deinen Zeitnachweis und exportiere ihn als PDF.</li>
        <li>Gehe zu <a href="#/daten" style="color: var(--accent);">Daten</a> und lade das PDF hoch.</li>
        <li>Fülle unter <a href="#/profil" style="color: var(--accent);">Profil</a> dein Geburtsdatum und deinen Berufsschul-Rhythmus aus.</li>
      </ol>
      <div style="margin-top: 24px;">
        <a href="#/daten" class="btn primary">Zum Upload →</a>
      </div>
    </div>
  `}function Mn(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function Sn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function _(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function fe(e){return _(e)}const xn="/zeitnachweis-app/assets/pdf.worker.min-yatZIOMy.mjs";Vt.workerSrc=xn;const Ie={Januar:1,Februar:2,März:3,Maerz:3,April:4,Mai:5,Juni:6,Juli:7,August:8,September:9,Oktober:10,November:11,Dezember:12},zn=["Stempelzeit","Berufsschule Std. bez","Berufsschule","Dienstreise Arbeitszeit","Reise öff.VM/PKW Beifahr.","Reise öff.VM/PKW","Urlaub","Gleitzeit","Arbeitsunfähigkeit","TgDtEinh","Neujahr","Karfreitag","Ostermontg","Ostmontg","Osterso.","Hl.3 Kön.","Allerhlg","Pfingstmo","Fronleichn","TdDtEinh"];async function Dn(e){const a=await _t({data:e}).promise,n=[];for(let l=1;l<=a.numPages;l++){const o=await(await a.getPage(l)).getTextContent(),d=An(o.items);for(const g of d)n.push({page:l,text:g})}const s=Pn(n),{tage:i,monate:r}=Tn(n);return{meta:s,tage:i,monate:r}}function An(e){if(!e.length)return[];const t=e.slice().sort((r,l)=>{const c=l.transform[5]-r.transform[5];return Math.abs(c)>2?c:r.transform[4]-l.transform[4]}),a=[];let n=null,s=[];const i=3;for(const r of t){const l=r.transform[5];n==null||Math.abs(l-n)<=i?(s.push(r),n==null&&(n=l)):(a.push(Ve(s)),s=[r],n=l)}return s.length&&a.push(Ve(s)),a.filter(r=>r.trim().length>0)}function Ve(e){e.sort((n,s)=>n.transform[4]-s.transform[4]);let t="",a=-1;for(const n of e){const s=n.transform[4];a>=0&&s-a>4?t+="  ":a>=0&&s-a>.5&&(t+=" "),t+=n.str,a=s+n.width}return t}function Pn(e){var a,n;const t={personalnummer:null,name:null,kostenstelle:null,personalbereich:null,einstellungsdatum:null,mitarbeiterkreis:null,arbeitszeitplanregel:null,zeitraumVon:null,zeitraumBis:null,stichtagAuswertung:null};for(let s=0;s<e.length;s++){const i=e[s].text,r=/vom\s+(\d{2}\.\d{2}\.\d{4})\s+bis\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);r&&(t.zeitraumVon=Q(r[1]),t.zeitraumBis=Q(r[2]));const l=/bis einschließlich dem\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);if(l&&(t.stichtagAuswertung=Q(l[1])),/Personalnummer/i.test(i)&&/Kostenstelle/i.test(i)){const o=(((a=e[s+1])==null?void 0:a.text)??"").trim().split(/\s{2,}/);o.length>=3&&(t.personalnummer=o[0],t.kostenstelle=o[1],t.personalbereich=o[2])}if(/Einstellungsdatum/i.test(i)&&/Mitarbeiterkreis/i.test(i)){const o=(((n=e[s+1])==null?void 0:n.text)??"").trim().split(/\s{2,}/);o.length>=3&&(t.einstellungsdatum=Q(o[0]),t.mitarbeiterkreis=o[1],t.arbeitszeitplanregel=o[2])}if(/Bei Rückfragen wenden Sie sich an/i.test(i))for(let c=s+1;c<Math.min(s+8,e.length);c++){const o=e[c].text.trim();if(/^[A-ZÄÖÜ][a-zäöüß]+(?:\s[A-ZÄÖÜ][a-zäöüß]+)+$/.test(o)&&!/kanarya/i.test(o)&&!/tel/i.test(o)){t.name=o;break}}}return t}function Tn(e,t){var c;const a=[],n=[];let s=null,i=null,r=!1,l=0;for(;l<e.length;){const o=e[l].text,d=/Monat:\s*([A-Za-zäöüÄÖÜß]+)\s*-\s*(\d{4})/.exec(o);if(d){const f=d[1].trim(),p=parseInt(d[2],10),y=Ie[f]??Ie[f.replace("ä","ae")]??null;y&&(s={jahr:p,monat:y,monatKey:`${p}-${String(y).padStart(2,"0")}`},r=!0,i=null),l++;continue}if(/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.test(o)){const f=/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.exec(o),p=Q(f[1]);i={monatKey:(s==null?void 0:s.monatKey)??it(p),stichtag:p,glz:{},flexi:{},zeitkonten:{},raw:{}},l=En(e,l+1,i),n.push(i);continue}let g=s;const u=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)\b/.exec(o.trim());if(u&&s){const f=parseInt(u[1],10);r&&f>=20?g=Wn(s):f<=15&&(r=!1)}const h=_e(o,g);if(h){const f=[];let p=l+1;for(;p<e.length;){const v=e[p].text;if(/^\s*\d{4}\s+Umbuchung/.test(v)||_e(v,s)||/Wochensumme/i.test(v)||/Monats.bersicht/i.test(v)||/Monat:\s*[A-Za-z]/i.test(v))break;const P=Ln(v);if(P){f.push(P),p++;continue}break}if(f.length&&h.zeitSpannen.push(...f),h.tagestyp==="Wochenende"||h.wochentag==="SA"||h.wochentag==="SO"){l=p;continue}(h.ist!=null||h.soll!=null||(((c=h.zeitSpannen)==null?void 0:c.length)??0)>0||h.tagestyp!=null)&&a.push(h),l=p;continue}l++}return{tage:a,monate:n}}function En(e,t,a){let n=t;const s=/(\d{4,5}|KTAU|AZAU)\s*-\s*(.+?)\s+(-?[\d,.]+-?)(?=\s+(?:\d{4,5}|KTAU|AZAU)\s*-|\s*$)/g;for(;n<e.length;){const i=e[n].text.trim();if(/^Monat:\s/.test(i)||/^Einzelergebnisse\s/.test(i)||/^Tag\b/.test(i)||/^Wochensumme/.test(i)||/^\d{2}\s+(MO|DI|MI|DO|FR|SA|SO)\b/.test(i)||/^Übersicht für den Zeitraum/i.test(i)||/^Abwesenheitsansprüche/i.test(i))break;s.lastIndex=0;let r;for(;(r=s.exec(i))!=null;){const l=r[1],c=r[2].trim(),o=nt(r[3]);a.raw[l]={beschreibung:c,wert:o},l==="0008"&&(a.glz.saldoVorperiode=o),l==="8016"&&(a.glz.saldoAktuellePeriode=o),l==="9802"&&(a.glz.umgebuchteStunden=o),l==="0005"&&(a.glz.saldoGesamt=o),l==="9803"&&(a.glz.ueberzaehligeStd=o),l==="0050"&&(a.zeitkonten.produktivstunden=o),l==="9011"&&(a.flexi.jahreskontoVorperiode=o),l==="9010"&&(a.flexi.jahreskontoSaldo=o),l==="9020"&&(a.flexi.langzeitkontoSaldo=o),l==="9203"&&(a.zeitkonten.azMonatsendeUeber216=o),l==="9207"&&(a.zeitkonten.auszahlungBav=o),l==="9205"&&(a.zeitkonten.summeAuszahlung=o)}if(n++,n-t>80)break}return n}function _e(e,t){if(!t)return null;const a=e.trim(),n=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)(?:\s+(.+))?$/.exec(a);if(!n)return null;const s=parseInt(n[1],10),i=n[2],r=(n[3]??"").trim();let l=t.jahr,c=t.monat;const o=new Date(l,c-1,s),d={datum:Na(o),datumDate:o.toISOString(),wochentag:i,tagNr:s,monatKey:it(o),wocheKey:Ha(o),zeitSpannen:[],aktivitaeten:[],ist:null,soll:null,diff:null,pause:null,tazp:null,tagestyp:null,raw:a};return r?(Kn(r,d),d):(d.tagestyp=["SA","SO"].includes(i)?"Wochenende":null,d)}function Ln(e){const t=e.trim(),a=/^(Stempelzeit|Reise öff\.VM\/PKW Beifahr\.|Reise öff\.VM\/PKW|Dienstreise Arbeitszeit)\s+(\d{2}:\d{2})\s+(\d{2}:\d{2})\s*$/.exec(t);return a?{aktivitaet:a[1],von:a[2],bis:a[3]}:null}function Kn(e,t){let a=null,n=e;for(const d of zn)if(e.startsWith(d)){a=d,n=e.slice(d.length).trim();break}a||(a=e.split(/\s+/)[0],n=e.slice(a.length).trim()),t.tagestyp=Fn(a),t.aktivitaeten.push(a);const s=n.split(/\s+/).filter(Boolean),i=/^\d{2}:\d{2}$/,r=/^-?[\d,.]+-?$/;let l=0;for(;s[l]&&i.test(s[l])&&s[l+1]&&i.test(s[l+1]);)t.zeitSpannen.push({aktivitaet:a,von:s[l],bis:s[l+1]}),l+=2;const c=[];for(;l<s.length&&r.test(s[l]);){const d=nt(s[l]);d!=null&&c.push(d),l++}let o=s[l];c.length>=5?([t.ist,t.soll,t.diff,t.pause]=c,o||(o=String(c[4]))):c.length===4?[t.ist,t.soll,t.diff,t.pause]=c:c.length===3?[t.ist,t.soll,t.diff]=c:c.length===2?[t.ist,t.soll]=c:c.length===1&&(t.ist=c[0]),o&&(t.tazp=String(o))}function Wn(e){if(!e)return null;let t=e.monat-1,a=e.jahr;return t<1&&(t=12,a-=1),{jahr:a,monat:t,monatKey:`${a}-${String(t).padStart(2,"0")}`}}function Fn(e){return e?/^Stempelzeit$/i.test(e)?"Stempelzeit":/^Berufsschule Std\. bez$/i.test(e)||/^Berufsschule$/i.test(e)?"Berufsschule":/Dienstreise/i.test(e)||/Reise/i.test(e)?"Dienstreise":/^Urlaub$/i.test(e)?"Urlaub":/^Gleitzeit$/i.test(e)?"Gleitzeit":/Arbeitsunf.higkeit/i.test(e)?"Arbeitsunfähigkeit":/^(Neujahr|Karfreitag|Ostermontg|Ostmontg|Osterso\.|Hl\.3 Kön\.|Allerhlg|Pfingstmo|Fronleichn|TdDtEinh|TgDtEinh)$/i.test(e)?"Feiertag":e:null}async function On({root:e}){const t=await tt(),a=await j();e.innerHTML=`
    <h1 class="view-title">Daten</h1>
    <p class="view-subtitle">Zeitnachweis hochladen, Backup exportieren oder alle Daten löschen.</p>

    <div class="grid cols-2" style="margin-bottom: 32px;">
      <div class="card">
        <h2>PDF-Upload</h2>
        <p style="color: var(--fg-muted); font-size: 13px; margin-bottom: 16px;">
          Lade deinen Zeitnachweis (PDF aus SAP ESS FIORI) hoch. Die Daten werden ausschließlich lokal in deinem Browser analysiert und gespeichert — nichts verlässt dein Gerät.
        </p>
        <div class="upload-zone" id="upload-zone">
          <div class="upload-zone-icon">📄</div>
          <h3>PDF hierher ziehen oder klicken</h3>
          <p>Akzeptiert: .pdf aus SAP ESS FIORI</p>
        </div>
        <input type="file" id="file-input" accept=".pdf,application/pdf" style="display:none" />
        <div id="upload-status" style="margin-top: 16px;"></div>
      </div>

      <div class="card">
        <h2>Backup</h2>
        <p style="color: var(--fg-muted); font-size: 13px; margin-bottom: 16px;">
          Exportiere alle deine Daten als JSON-Datei oder stelle sie aus einem Backup wieder her. Nützlich für Gerätewechsel.
        </p>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button class="btn" id="btn-export">⬇ JSON herunterladen</button>
          <button class="btn" id="btn-import">⬆ JSON importieren</button>
          <input type="file" id="import-input" accept=".json,application/json" style="display:none" />
        </div>
        <hr style="border: none; border-top: 1px solid var(--border); margin: 24px 0;" />
        <h3 style="color: var(--fg-muted); text-transform: uppercase; letter-spacing: 0.05em; font-size: 12px;">Gefahrenzone</h3>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button class="btn" id="btn-clear-parsed">🔄 Nur PDF-Daten löschen (Profil bleibt)</button>
          <button class="btn danger" id="btn-reset">🗑 Alles löschen (inkl. Profil)</button>
        </div>
      </div>
    </div>

    <div class="card">
      <h2>Uploads-Historie</h2>
      <div id="uploads-list">
        ${t.length===0?'<div class="empty-state"><div class="empty-state-icon">📭</div><p>Noch keine Uploads</p></div>':ft(t)}
      </div>
    </div>
  `;const n=e.querySelector("#upload-zone"),s=e.querySelector("#file-input");n.addEventListener("click",()=>s.click()),n.addEventListener("dragover",i=>{i.preventDefault(),n.classList.add("drag")}),n.addEventListener("dragleave",()=>n.classList.remove("drag")),n.addEventListener("drop",async i=>{var l;i.preventDefault(),n.classList.remove("drag");const r=(l=i.dataTransfer.files)==null?void 0:l[0];r&&await je(r,e,a)}),s.addEventListener("change",async i=>{var l;const r=(l=i.target.files)==null?void 0:l[0];r&&await je(r,e,a)}),e.querySelector("#btn-export").addEventListener("click",Cn),e.querySelector("#btn-import").addEventListener("click",()=>e.querySelector("#import-input").click()),e.querySelector("#import-input").addEventListener("change",In),e.querySelector("#btn-clear-parsed").addEventListener("click",Bn),e.querySelector("#btn-reset").addEventListener("click",Vn)}async function Bn(){confirm("PDF-abgeleitete Daten (Tage, Monate, Uploads) werden gelöscht. Profil und Mail-Vorlagen bleiben erhalten. Fortfahren?")&&(await at(),S("Daten gelöscht. Profil bleibt."),setTimeout(()=>location.reload(),600))}function ft(e){return`
    <table class="table">
      <thead>
        <tr>
          <th>Hochgeladen am</th>
          <th>Datei</th>
          <th>Zeitraum</th>
          <th>Stichtag</th>
          <th class="num">Tage</th>
        </tr>
      </thead>
      <tbody>
        ${e.map(t=>`
          <tr>
            <td>${I(_n(t.hochladeDatum))}</td>
            <td>${I(t.dateiname||"—")}</td>
            <td>${t.zeitraumVon?I(w(new Date(t.zeitraumVon))):"—"} – ${t.zeitraumBis?I(w(new Date(t.zeitraumBis))):"—"}</td>
            <td>${t.stichtagAuswertung?I(w(new Date(t.stichtagAuswertung))):"—"}</td>
            <td class="num">${t.tageCount??"—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}async function je(e,t,a){var i,r,l;const n=t.querySelector("#upload-status"),s=t.querySelector("#upload-zone");s.style.pointerEvents="none",s.style.opacity="0.6",n.innerHTML=`
    <div class="alert severity-info">
      <div class="loader-ring" style="width: 24px; height: 24px; border-width: 2px;"></div>
      <div class="alert-body">
        <div class="alert-title">PDF wird verarbeitet…</div>
        <p style="margin: 4px 0; font-size: 13px;"><strong>${I(e.name)}</strong> — das kann bei großen PDFs einige Sekunden dauern.</p>
      </div>
    </div>`;try{const c=await e.arrayBuffer(),o=await Dn(c),d=await oa(),g=d==null?void 0:d.personalnummer,u=o.meta.personalnummer;if(g&&u&&g!==u){const v=(d==null?void 0:d.name)||`Personalnr. ${g}`,P=o.meta.name||`Personalnr. ${u}`;if(!confirm(`Das hochgeladene PDF gehört zu einem anderen Azubi als die bisher gespeicherten Daten:

Bisher: ${v}
Jetzt:  ${P}

Wenn du fortfährst, werden alle alten Tagesdaten gelöscht und durch die neuen ersetzt.
(Profil-Einstellungen wie Theme und Mail-Vorlagen bleiben erhalten.)

Fortfahren?`)){s.style.pointerEvents="",s.style.opacity="",n.innerHTML=`
          <div class="alert severity-info">
            <div class="alert-body">
              <div class="alert-title">Upload abgebrochen</div>
              <p style="margin: 4px 0; font-size: 13px;">Es wurden keine Daten verändert. Lade das richtige PDF (für ${I(v)}) erneut hoch.</p>
            </div>
          </div>`;return}await at();const B=await j();await ie({...B,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1}})}await ia(o.tage),await ra(o.monate),await la({dateiname:e.name,personalnummer:o.meta.personalnummer??null,name:o.meta.name??null,zeitraumVon:((i=o.meta.zeitraumVon)==null?void 0:i.toISOString())??null,zeitraumBis:((r=o.meta.zeitraumBis)==null?void 0:r.toISOString())??null,stichtagAuswertung:((l=o.meta.stichtagAuswertung)==null?void 0:l.toISOString())??null,tageCount:o.tage.length,monateCount:o.monate.length});const h=await W(),f=rt(h),p={...et(),...a};(f.wochentageWoechentlich.length>0||f.wochentage14Taegig.length>0)&&(p.berufsschulMuster=f),await ie(p),n.innerHTML=`
      <div class="alert severity-info" style="border-color: var(--success); background: var(--success-bg);">
        <div class="alert-icon" style="background: var(--success);">✓</div>
        <div class="alert-body">
          <div class="alert-title">PDF erfolgreich eingelesen</div>
          <p style="margin: 4px 0; font-size: 13px;">
            ${o.tage.length} Tage · ${o.monate.length} Monatsübersichten
            ${o.meta.zeitraumVon?` · Zeitraum: ${w(o.meta.zeitraumVon)} – ${w(o.meta.zeitraumBis)}`:""}
          </p>
          <div class="alert-actions">
            <a href="#/" class="btn primary sm">Zum Dashboard</a>
            <a href="#/monat" class="btn sm">Monate ansehen</a>
          </div>
        </div>
      </div>
    `,S(`PDF verarbeitet: ${o.tage.length} Tage.`);const y=await tt();t.querySelector("#uploads-list").innerHTML=ft(y)}catch(c){console.error(c),n.innerHTML=`
      <div class="alert severity-error">
        <div class="alert-icon">!</div>
        <div class="alert-body">
          <div class="alert-title">Fehler beim Parsen</div>
          <p style="margin: 4px 0; font-size: 13px;">${I(c.message||String(c))}</p>
          <p style="margin: 4px 0; font-size: 12px; color: var(--fg-muted);">Prüfe, ob es sich um einen Putzmeister-SAP-Zeitnachweis handelt. Bei einem anderen Layout kann der Parser fehlschlagen.</p>
        </div>
      </div>
    `,xe("PDF konnte nicht gelesen werden.")}finally{s.style.pointerEvents="",s.style.opacity=""}}async function Cn(){try{const e=await da(),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),a=URL.createObjectURL(t),n=document.createElement("a"),s=new Date().toISOString().slice(0,10);n.href=a,n.download=`zeitnachweis-backup-${s}.json`,n.click(),URL.revokeObjectURL(a),S("Backup heruntergeladen.")}catch(e){xe(`Export fehlgeschlagen: ${e.message}`)}}async function In(e){var a;const t=(a=e.target.files)==null?void 0:a[0];if(t)try{const n=await t.text(),s=JSON.parse(n);if(!confirm("Existierende Daten werden überschrieben. Fortfahren?"))return;await ua(s),S("Backup erfolgreich importiert. Seite wird neu geladen…"),setTimeout(()=>location.reload(),800)}catch(n){xe(`Import fehlgeschlagen: ${n.message}`)}}async function Vn(){confirm("ALLE Daten endgültig löschen? Das lässt sich nicht rückgängig machen.")&&confirm("Wirklich alle Daten löschen? Letzte Warnung.")&&(await ca(),S("Alle Daten gelöscht."),setTimeout(()=>location.reload(),600))}function _n(e){if(!e)return"—";const t=new Date(e);return t.toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"})+" "+t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}const Re={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag"};async function jn({root:e}){var s,i,r,l,c;const t=await j(),a=t.berufsschulMuster??{},n=(((s=a.wochentageWoechentlich)==null?void 0:s.length)??0)>0||(((i=a.wochentage14Taegig)==null?void 0:i.length)??0)>0;e.innerHTML=`
    <h1 class="view-title">Profil</h1>
    <p class="view-subtitle">Nur das Nötigste: Alter-Kategorie und Mail-Kontakt.</p>

    <form id="profil-form" class="grid cols-2" style="gap: 24px;">
      <div class="card">
        <h2>Alter</h2>
        <label class="checkbox-row">
          <input type="checkbox" name="ueber18" ${t.ueber18?"checked":""} />
          <span>
            <strong>Über 18</strong>
            <p class="hint" style="margin: 4px 0 0;">Bestimmt die anzuwendende Pausen-Regel. Angehakt → ArbZG (Erwachsene). Leer → JArbSchG (Minderjährige, strengere Pausen-Pflicht).</p>
          </span>
        </label>
      </div>

      <div class="card">
        <h2>Zeitwirtschaft-Kontakt</h2>
        <div class="form-group">
          <label>E-Mail-Empfänger</label>
          <input type="email" name="zeitwirtschaftEmail" value="${Ze(t.zeitwirtschaftEmail)}" />
        </div>
        <div class="form-group">
          <label>Anrede in Mails</label>
          <input type="text" name="zeitwirtschaftAnrede" value="${Ze(t.zeitwirtschaftAnrede)}" placeholder="Frau Kanarya" />
        </div>
      </div>

      <div class="card" style="grid-column: 1 / -1;">
        <h2>Berufsschul-Rhythmus <span style="font-size: 11px; font-weight: 500; color: var(--fg-subtle); text-transform: uppercase; letter-spacing: 0.05em; margin-left: 8px;">Automatisch erkannt</span></h2>
        ${n?`
          <div class="tag-detail">
            <div class="tag-detail-label">Wöchentlich</div>
            <div class="tag-detail-value"><strong>${((r=a.wochentageWoechentlich)==null?void 0:r.map(o=>Re[o]).join(", "))||"—"}</strong></div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Alle 2 Wochen</div>
            <div class="tag-detail-value"><strong>${((l=a.wochentage14Taegig)==null?void 0:l.map(o=>Re[o]).join(", "))||"—"}</strong>${a.referenzDatum14Taegig?` <span class="hint">(Anker: ${w(new Date(a.referenzDatum14Taegig))})</span>`:""}</div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Stunden pro Schultag</div>
            <div class="tag-detail-value">
              <strong>${a.stundenProTag!=null?a.stundenProTag.toFixed(2).replace(".",",")+"h":"—"}</strong>
              ${a.halbtags?' <span class="hint" style="color: var(--accent);">(Halbtags-Schule erkannt)</span>':""}
            </div>
          </div>
          <p class="hint" style="margin-top: 16px;">
            Das Muster wird bei jedem PDF-Upload neu aus den Daten abgeleitet. ${a.halbtags?'Da deine Schultage typischerweise weniger als 5h dauern, geht die App von Halbtags-Schule aus und meldet KEINE „BS-Stunden falsch"-Warnung, wenn dein Schultag nur '+(((c=a.stundenProTag)==null?void 0:c.toFixed(2).replace(".",","))??"4,00")+"h hat.":"Je länger der erfasste Zeitraum, desto präziser."}
          </p>
        `:`
          <p class="hint">Noch kein Muster erkannt. Lade unter <a href="#/daten" style="color: var(--accent);">Daten</a> einen Zeitnachweis hoch — das Muster wird automatisch aus den Berufsschul-Tagen abgeleitet.</p>
        `}
      </div>

      <div style="grid-column: 1 / -1; display: flex; gap: 12px;">
        <button type="submit" class="btn primary">Speichern</button>
        <a href="#/" class="btn">Abbrechen</a>
      </div>
    </form>
  `,e.querySelector("#profil-form").addEventListener("submit",async o=>{var u,h;o.preventDefault();const d=new FormData(o.target),g={...t,ueber18:d.get("ueber18")==="on",zeitwirtschaftEmail:((u=d.get("zeitwirtschaftEmail"))==null?void 0:u.trim())||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:((h=d.get("zeitwirtschaftAnrede"))==null?void 0:h.trim())||"Frau Kanarya"};await ie(g),S("Profil gespeichert.")})}function Ze(e){return String(e??"").replace(/"/g,"&quot;")}async function Rn({root:e}){var s;const t=await te(),a=await W(),n={};for(const i of a)n[s=i.monatKey]??(n[s]=[]),n[i.monatKey].push(i);if(t.length===0){e.innerHTML=Jn("Noch keine Monatsdaten. Lade zuerst ein PDF unter Daten hoch.");return}e.innerHTML=`
    <h1 class="view-title">Monate</h1>
    <p class="view-subtitle">${t.length} Monate erfasst. Klicke für Details.</p>

    <div class="grid cols-2">
      ${t.slice().reverse().map(i=>{var u;const l=(n[i.monatKey]??[]).filter(h=>h.ist!=null&&h.ist>0),c=l.reduce((h,f)=>h+(f.ist??0),0),o=l.reduce((h,f)=>h+(f.soll??0),0),d=c-o,g=(u=i.glz)==null?void 0:u.saldoGesamt;return`
          <a href="#/monat/${i.monatKey}" class="card" style="text-decoration: none; color: inherit; display: block;">
            <div class="card-split" style="margin-bottom: 12px;">
              <h2 style="margin: 0;">${ve(i.monatKey)}</h2>
              <span class="saldo-trend ${g>.05?"up":g<-.05?"down":"flat"}" style="margin: 0; font-size: 12px;">
                Saldo: <strong>${A(g??0,{signed:!0})}</strong>
              </span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 12px;">
              <div>
                <div style="color: var(--fg-subtle); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Arbeitstage</div>
                <div style="font-size: 22px; font-weight: 600;" class="tabular">${l.length}</div>
              </div>
              <div>
                <div style="color: var(--fg-subtle); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Ist / Soll</div>
                <div style="font-size: 14px; font-weight: 500;" class="tabular">${c.toFixed(1)} / ${o.toFixed(1)}h</div>
              </div>
              <div>
                <div style="color: var(--fg-subtle); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Diff</div>
                <div class="tabular ${d>.05?"positive":d<-.05?"negative":""}" style="font-size: 14px; font-weight: 500; color: ${d>.05?"var(--success)":d<-.05?"var(--danger)":"var(--fg)"};">${A(d,{signed:!0})}</div>
              </div>
            </div>
          </a>
        `}).join("")}
    </div>
  `}async function Zn({params:e,root:t}){const a=e.yyyymm,[n,s,i]=await Promise.all([W(),te(),j()]),r=s.find(o=>o.monatKey===a),l=n.filter(o=>o.monatKey===a).sort((o,d)=>o.datum.localeCompare(d.datum));if(!l.length){t.innerHTML=`<h1 class="view-title">Monat ${ve(a)}</h1><p class="view-subtitle">Keine Daten für diesen Monat.</p><a href="#/monat" class="btn">← Alle Monate</a>`;return}const c=ke(n,i,new Date).filter(o=>o.datum.startsWith(a));t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat" class="btn sm">← Alle Monate</a>
    </div>
    <h1 class="view-title">${ve(a)}</h1>
    <p class="view-subtitle">${l.length} Tage · ${c.length} Auffälligkeiten</p>

    ${r?Hn(r):""}

    <div class="card" style="margin-bottom: 24px;">
      <h2>Tagesbalken</h2>
      <div class="chart-wrap tall"><canvas id="chart-monat"></canvas></div>
    </div>

    ${c.length?`
      <div class="card" style="margin-bottom: 24px;">
        <h2>Auffälligkeiten</h2>
        ${c.map(o=>Gn(o)).join("")}
      </div>
    `:""}

    <div class="card">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Tage</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">Klicke auf ein Datum für Details</span>
      </div>
      ${Nn(l)}
    </div>
  `,Me(t.querySelector("#chart-monat"),l)}function Hn(e){var n,s,i,r;const t=((n=e.glz)==null?void 0:n.saldoGesamt)??0;return`
    <div class="grid cols-4" style="margin-bottom: 24px;">
      <div class="card">
        <h3>GLZ-Saldo gesamt</h3>
        <div class="tabular ${t>0?"positive":t<0?"negative":""}" style="font-size: 28px; font-weight: 650;">${A(t,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Vorperiode</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${A(((s=e.glz)==null?void 0:s.saldoVorperiode)??0,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Akt. Periode</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${A(((i=e.glz)==null?void 0:i.saldoAktuellePeriode)??0,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Produktivstd.</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${A(((r=e.zeitkonten)==null?void 0:r.produktivstunden)??0,{suffix:""})}</div>
      </div>
    </div>
  `}function Nn(e){return`
    <table class="table">
      <thead>
        <tr>
          <th>Datum</th>
          <th>Typ</th>
          <th>Kommen / Gehen</th>
          <th class="num">Ist</th>
          <th class="num">Soll</th>
          <th class="num">±</th>
          <th class="num">Pause</th>
        </tr>
      </thead>
      <tbody>
        ${e.map(t=>{const a=t.diff>.05?"positive":t.diff<-.05?"negative":"",n=de(t.zeitSpannen);return`
            <tr>
              <td><a href="#/tag/${t.datum}" style="color: inherit; text-decoration: none;"><span class="tabular">${w(new Date(t.datum))}</span> <span style="color: var(--fg-subtle);">${t.wochentag}</span></a></td>
              <td>${t.tagestyp?`<span class="pill ${qn(t.tagestyp)}">${le(t.tagestyp)}</span>`:"—"}</td>
              <td>${ue(n,{size:18})}</td>
              <td class="num tabular">${t.ist!=null?t.ist.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular">${t.soll!=null?t.soll.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular ${a}">${t.diff!=null?A(t.diff,{signed:!0,suffix:""}):"—"}</td>
              <td class="num tabular">${t.pause!=null?t.pause.toFixed(2).replace(".",","):"—"}</td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `}function Gn(e){return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i"}</div>
      <div class="alert-body">
        <div class="alert-title">${le(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${le(e.beschreibung)}</p>
        ${e.mailVorlageKey?`<div class="alert-actions"><a href="#/mails" class="btn primary sm">Mail schreiben</a><a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a></div>`:""}
      </div>
    </div>
  `}function ve(e){const[t,a]=e.split("-"),n=new Date(parseInt(t),parseInt(a)-1,1);return z(n,"LLLL yyyy",{locale:ae})}function qn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function Jn(e){return`<div class="empty-state"><div class="empty-state-icon">📭</div><p>${le(e)}</p><a href="#/daten" class="btn primary">Zu Daten</a></div>`}function le(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function Un({root:e}){var s;const t=await W();if(!t.length){e.innerHTML='<h1 class="view-title">Wochen</h1><p class="view-subtitle">Noch keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a={};for(const i of t)a[s=i.wocheKey]??(a[s]={key:i.wocheKey,tage:[],ist:0,soll:0}),a[i.wocheKey].tage.push(i),a[i.wocheKey].ist+=i.ist??0,a[i.wocheKey].soll+=i.soll??0;const n=Object.keys(a).sort().reverse();e.innerHTML=`
    <h1 class="view-title">Wochen</h1>
    <p class="view-subtitle">${n.length} Wochen erfasst.</p>

    <div>
      ${n.map(i=>{const r=a[i],l=r.ist-r.soll,c=l>.05?"positive":l<-.05?"negative":"";return`
          <a href="#/woche/${i}" class="list-item">
            <div class="tabular" style="font-size: 16px; font-weight: 600; color: var(--fg-muted);">${oe(mt(i))}</div>
            <div>
              <div class="list-item-title">Ist: ${r.ist.toFixed(2).replace(".",",")}h · Soll: ${r.soll.toFixed(2).replace(".",",")}h</div>
              <div class="list-item-sub">${r.tage.length} Tage erfasst</div>
            </div>
            <div class="tabular ${c}" style="font-weight: 600; font-size: 16px;">${A(l,{signed:!0})}</div>
            <div style="color: var(--fg-subtle);">→</div>
          </a>
        `}).join("")}
    </div>
  `}async function Yn({params:e,root:t}){const a=await W(),n=e.yyyykw,s=a.filter(c=>c.wocheKey===n).sort((c,o)=>c.datum.localeCompare(o.datum));if(!s.length){t.innerHTML=`<h1 class="view-title">KW ${oe(n)}</h1><p>Keine Daten.</p><a href="#/woche" class="btn">← Alle Wochen</a>`;return}const i=s.reduce((c,o)=>c+(o.ist??0),0),r=s.reduce((c,o)=>c+(o.soll??0),0),l=i-r;t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/woche" class="btn sm">← Alle Wochen</a>
    </div>
    <h1 class="view-title">${oe(mt(n))}</h1>
    <p class="view-subtitle">${s.length} Tage</p>

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${i.toFixed(2).replace(".",",")}h</div>
      </div>
      <div class="card">
        <h3>Soll-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${r.toFixed(2).replace(".",",")}h</div>
      </div>
      <div class="card">
        <h3>Differenz</h3>
        <div class="tabular ${l>.05?"positive":l<-.05?"negative":""}" style="font-size: 28px; font-weight: 650; color: ${l>.05?"var(--success)":l<-.05?"var(--danger)":"var(--fg)"};">${A(l,{signed:!0})}</div>
      </div>
    </div>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Tagesverteilung</h2>
      <div class="chart-wrap"><canvas id="chart-woche"></canvas></div>
    </div>

    <div class="card">
      <h2>Tage dieser Woche</h2>
      ${Xn(s)}
    </div>
  `,Me(t.querySelector("#chart-woche"),s)}function Xn(e){return`
    <table class="table">
      <thead>
        <tr>
          <th>Datum</th>
          <th>Typ</th>
          <th>Kommen / Gehen</th>
          <th class="num">Ist</th>
          <th class="num">Soll</th>
          <th class="num">±</th>
          <th class="num">Pause</th>
        </tr>
      </thead>
      <tbody>
        ${e.map(t=>{const a=t.diff>.05?"positive":t.diff<-.05?"negative":"",n=de(t.zeitSpannen);return`
            <tr>
              <td><a href="#/tag/${t.datum}" style="color: inherit;"><span class="tabular">${z(M(t.datum),"dd.MM.yyyy")}</span> ${t.wochentag}</a></td>
              <td>${t.tagestyp?`<span class="pill ${Qn(t.tagestyp)}">${oe(t.tagestyp)}</span>`:"—"}</td>
              <td>${ue(n,{size:18})}</td>
              <td class="num tabular">${t.ist!=null?t.ist.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular">${t.soll!=null?t.soll.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular ${a}">${t.diff!=null?A(t.diff,{signed:!0,suffix:""}):"—"}</td>
              <td class="num tabular">${t.pause!=null?t.pause.toFixed(2).replace(".",","):"—"}</td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `}function mt(e){const[t,a]=e.split("-");return`KW ${a} · ${t}`}function Qn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function oe(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function es({params:e,root:t}){var o,d,g;const a=e.datum,n=await m.tage.get(a),s=await j();if(!n){t.innerHTML=`<h1 class="view-title">Tag nicht gefunden</h1><p>Für ${a} liegen keine Daten vor.</p><a href="#/" class="btn">← Dashboard</a>`;return}const i=M(a),r=n.tagestyp==="Stempelzeit"?ct(n,s):null,l=$e(i,s.berufsschulMuster),c=de(n.zeitSpannen);t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat/${a.slice(0,7)}" class="btn sm">← Zum Monat</a>
    </div>
    <h1 class="view-title">${st(i)}</h1>
    <p class="view-subtitle">${n.tagestyp??"Kein Typ"} · KW ${(o=n.wocheKey)==null?void 0:o.split("-")[1]}</p>

    ${c?`
      <div class="card kommen-gehen-hero" style="margin-bottom: 24px;">
        <div class="hint" style="text-transform: uppercase; letter-spacing: 0.05em; font-size: 11px; margin-bottom: 10px;">Tages-Rahmen</div>
        ${ue(c,{size:32})}
      </div>
    `:""}

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${n.ist!=null?n.ist.toFixed(2).replace(".",",")+"h":"—"}</div>
        <div class="hint">= ${n.ist!=null?H(n.ist):"—"}</div>
      </div>
      <div class="card">
        <h3>Soll-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${n.soll!=null?n.soll.toFixed(2).replace(".",",")+"h":"—"}</div>
      </div>
      <div class="card">
        <h3>Differenz</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${n.diff>.05?"var(--success)":n.diff<-.05?"var(--danger)":"var(--fg)"};">${n.diff!=null?A(n.diff,{signed:!0}):"—"}</div>
      </div>
    </div>

    <div class="grid cols-2" style="gap: 24px;">
      <div class="card">
        <h2>Zeitstempel</h2>
        ${(d=n.zeitSpannen)!=null&&d.length?n.zeitSpannen.map(u=>`
              <div class="tag-detail">
                <div class="tag-detail-label">${X(u.aktivitaet??"Stempelzeit")}</div>
                <div class="tag-detail-value tabular">${u.von??"—"} – ${u.bis??"—"}</div>
              </div>
            `).join(""):'<p class="hint">Keine Stempelzeiten für diesen Tag.</p>'}
      </div>

      <div class="card">
        <h2>Klassifikation</h2>
        <div class="tag-detail">
          <div class="tag-detail-label">Tagestyp</div>
          <div class="tag-detail-value">${n.tagestyp?`<span class="pill ${ts(n.tagestyp)}">${X(n.tagestyp)}</span>`:"—"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Laut Profil</div>
          <div class="tag-detail-value">${l?"🎓 Berufsschultag erwartet":"Regulärer Werktag"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">TAZP-Code</div>
          <div class="tag-detail-value"><code>${X(n.tazp??"—")}</code></div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Monat</div>
          <div class="tag-detail-value">${X(n.monatKey)}</div>
        </div>
      </div>

      ${r&&!r.keinAnspruch?`
        <div class="card" style="grid-column: 1 / -1;">
          <h2>Pausen-Analyse</h2>
          <div class="grid cols-2">
            <div>
              <div class="tag-detail">
                <div class="tag-detail-label">Arbeitszeit (netto)</div>
                <div class="tag-detail-value tabular">${(g=r.arbeitszeitOhnePause)==null?void 0:g.toFixed(2).replace(".",",")}h</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Gestempelte Pause</div>
                <div class="tag-detail-value tabular">${Math.round((r.gestempeltePause??0)*60)} min</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Abgezogene Pause</div>
                <div class="tag-detail-value tabular">${Math.round((r.abgezogenePause??0)*60)} min</div>
              </div>
            </div>
            <div>
              <div class="tag-detail">
                <div class="tag-detail-label">Gesetzl. Pflicht</div>
                <div class="tag-detail-value tabular">${Math.round((r.gesetzlichePflicht??0)*60)} min</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Angewendetes Gesetz</div>
                <div class="tag-detail-value">${r.gesetz==="jarbschg"?"JArbSchG §11 (Minderjährig)":"ArbZG §4 (Erwachsen)"}</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Legaler Abzug (Max aus gestempelt / Pflicht)</div>
                <div class="tag-detail-value tabular">${Math.round((r.legalerAbzug??0)*60)} min</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Unrechtmäßiger Pausen-Abzug</div>
                <div class="tag-detail-value tabular" style="color: ${(r.unrechtmaessigerVerlustMin??0)>0?"var(--danger)":"var(--fg)"};">${r.unrechtmaessigerVerlustMin??0} min</div>
              </div>
              ${r.aufstockungMin>0?`
              <div class="tag-detail">
                <div class="tag-detail-label">Gesetzliche Aufstockung</div>
                <div class="tag-detail-value tabular" style="color: var(--warn);">${r.aufstockungMin} min</div>
              </div>`:""}
            </div>
          </div>
          ${r.warnung?`
            <div class="alert severity-warn" style="margin-top: 12px;">
              <div class="alert-icon">⚠</div>
              <div class="alert-body">${X(r.warnung)}</div>
            </div>
          `:""}
        </div>
      `:""}
    </div>
  `}function ts(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function X(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function as({root:e}){const[t,a]=await Promise.all([W(),te()]);if(!t.length){e.innerHTML='<h1 class="view-title">Analytics</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}e.innerHTML=`
    <h1 class="view-title">Analytics</h1>
    <p class="view-subtitle">${t.length} Tage über ${a.length} Monatsübersichten visualisiert.</p>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Saldo-Verlauf pro Monat</h2>
      <div class="chart-wrap tall"><canvas id="c-saldo"></canvas></div>
    </div>

    <div class="grid cols-2" style="margin-bottom: 24px;">
      <div class="card">
        <h2>Ist vs. Soll pro Woche</h2>
        <div class="chart-wrap"><canvas id="c-istsoll"></canvas></div>
      </div>
      <div class="card">
        <h2>Kumulative Differenz</h2>
        <div class="chart-wrap"><canvas id="c-kumulativ"></canvas></div>
      </div>
    </div>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Start-/Endzeiten über Zeit</h2>
      <p class="hint" style="margin-top: -8px; margin-bottom: 16px;">Blau = Arbeitsbeginn, Orange = Arbeitsende. Zeigt Muster deiner Stempelgewohnheiten.</p>
      <div class="chart-wrap tall"><canvas id="c-startend"></canvas></div>
    </div>

    <div class="grid cols-2" style="margin-bottom: 24px;">
      <div class="card">
        <h2>Durchschnitt pro Wochentag</h2>
        <div class="chart-wrap"><canvas id="c-wochentag"></canvas></div>
      </div>
      <div class="card">
        <h2>Pausen-Verteilung</h2>
        <p class="hint" style="margin-top: -8px; margin-bottom: 16px;">Häufigkeit deiner Pausen in 15-min-Buckets.</p>
        <div class="chart-wrap"><canvas id="c-pausen"></canvas></div>
      </div>
    </div>

    <div class="grid cols-2">
      <div class="card">
        <h2>Tagestypen</h2>
        <div class="chart-wrap"><canvas id="c-donut"></canvas></div>
      </div>
      <div class="card">
        <h2>Tagesbalken (alle Tage)</h2>
        <div class="chart-wrap"><canvas id="c-alle-tage"></canvas></div>
      </div>
    </div>
  `,requestAnimationFrame(()=>{rn(e.querySelector("#c-saldo"),a),un(e.querySelector("#c-istsoll"),t),gn(e.querySelector("#c-kumulativ"),t),ln(e.querySelector("#c-startend"),t),cn(e.querySelector("#c-wochentag"),t),on(e.querySelector("#c-pausen"),t),dn(e.querySelector("#c-donut"),t);const n=t.slice(-30);Me(e.querySelector("#c-alle-tage"),n)})}async function ns({root:e}){const t=await W();if(!t.length){e.innerHTML='<h1 class="view-title">Berichtsheft</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a=[...new Set(t.map(i=>i.monatKey))].sort().reverse();e.innerHTML=`
    <h1 class="view-title">Berichtsheft-Export</h1>
    <p class="view-subtitle">Kopiere die Arbeitsstunden im HH:MM-Format direkt in dein Berichtsheft.</p>

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 16px; align-items: center;">
        <h2 style="margin: 0;">Filter</h2>
        <div style="display: flex; gap: 8px; align-items: center;">
          <label style="color: var(--fg-muted); font-size: 13px;">Monat:</label>
          <select id="filter-monat">
            <option value="">Alle</option>
            ${a.map(i=>`<option value="${i}">${rs(i)}</option>`).join("")}
          </select>
          <button class="btn sm" id="btn-copy-all">Alle sichtbaren kopieren</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div id="liste"></div>
    </div>
  `;const n=e.querySelector("#filter-monat");n.addEventListener("change",()=>s()),e.querySelector("#btn-copy-all").addEventListener("click",()=>{const i=e.querySelectorAll("#liste tr[data-copy]"),r=Array.from(i).map(l=>l.getAttribute("data-copy")).join(`
`);navigator.clipboard.writeText(r).then(()=>S(`${i.length} Zeilen kopiert.`))});function s(){const i=n.value,l=(i?t.filter(c=>c.monatKey===i):t).filter(c=>c.ist!=null&&c.ist>0&&c.tagestyp!=="Wochenende");e.querySelector("#liste").innerHTML=ss(l),e.querySelectorAll(".copy-val").forEach(c=>{c.addEventListener("click",async()=>{const o=c.getAttribute("data-val");await navigator.clipboard.writeText(o),c.classList.add("ok");const d=c.textContent;c.textContent="✓ kopiert",setTimeout(()=>{c.classList.remove("ok"),c.textContent=d},1200)})})}s()}function ss(e){return e.length?`
    <table class="table">
      <thead>
        <tr>
          <th>Datum</th>
          <th>Wochentag</th>
          <th>Typ</th>
          <th class="num">Stunden (Dezimal)</th>
          <th class="num">Stunden (HH:MM)</th>
          <th>Kopie</th>
        </tr>
      </thead>
      <tbody>
        ${e.map(t=>{const a=H(t.ist),n=`${w(M(t.datum))}	${a}`;return`
            <tr data-copy="${He(n)}">
              <td class="tabular">${w(M(t.datum))}</td>
              <td>${is(t.wochentag)}</td>
              <td>${t.tagestyp?`<span class="pill ${ls(t.tagestyp)}">${pt(t.tagestyp)}</span>`:"—"}</td>
              <td class="num tabular">${t.ist.toFixed(2).replace(".",",")}</td>
              <td class="num tabular" style="font-weight: 600;">${a}</td>
              <td><button class="copy-val" data-val="${He(a)}">📋 ${a}</button></td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `:'<p style="color: var(--fg-muted);">Keine Tage in dieser Auswahl.</p>'}function is(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function rs(e){const[t,a]=e.split("-");return z(new Date(parseInt(t),parseInt(a)-1,1),"LLLL yyyy",{locale:ae})}function ls(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function pt(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function He(e){return pt(e)}async function os({root:e}){const[t,a,n,s]=await Promise.all([W(),j(),te(),we()]),i=Object.fromEntries(s.map(c=>[c.key,c])),r=ke(t,a,new Date).filter(c=>c.mailVorlageKey),l=dt(n);e.innerHTML=`
    <h1 class="view-title">Mail-Vorlagen</h1>
    <p class="view-subtitle">Vorformulierte Mails an die Zeitwirtschaft bei erkannten Fehlern im Zeitnachweis.</p>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Offene Warnungen mit Mail-Vorschlag</h2>
      <p class="hint" style="margin-bottom: 16px;">Diese Warnungen haben einen roten Schweregrad und sind eine direkte Mail wert.</p>

      ${r.length===0?'<div class="empty-state"><div class="empty-state-icon">✓</div><p>Keine akuten Warnungen — top.</p></div>':r.map(c=>cs(c,a,i)).join("")}

      ${l.length>0?`
        <h3 style="margin-top: 24px;">Saldo-Plausibilität</h3>
        ${l.map(c=>`
          <div class="alert severity-warn">
            <div class="alert-icon">⚠</div>
            <div class="alert-body">
              <div class="alert-title">${T(c.titel)}</div>
              <p style="margin: 4px 0; font-size: 13px;">${T(c.beschreibung)}</p>
            </div>
          </div>
        `).join("")}
      `:""}
    </div>

    <div class="card">
      <h2>Vorlagen verwalten</h2>
      <p class="hint" style="margin-bottom: 16px;">Passe die Texte an deinen Stil an. Platzhalter wie <code>{name}</code>, <code>{datum}</code>, <code>{wochentag}</code>, <code>{ist}</code>, <code>{soll}</code> werden automatisch gefüllt.</p>

      <div id="vorlagen-editor">
        ${Object.keys(ee).map(c=>{const o=ge(c,i[c]);return ds(o)}).join("")}
      </div>
    </div>
  `,us(e),gs(e)}function cs(e,t,a){const n=ge(e.mailVorlageKey,a[e.mailVorlageKey]);if(!n)return"";const s=gt(t,e),i=ut(n,s),r=ht(t,n,s);return`
    <div class="alert severity-${e.schweregrad}" style="flex-direction: column; align-items: stretch;">
      <div style="display: flex; align-items: flex-start; gap: 12px;">
        <div class="alert-icon">${e.schweregrad==="error"?"!":"⚠"}</div>
        <div class="alert-body">
          <div class="alert-title">${T(e.titel)}</div>
          <p style="margin: 4px 0; font-size: 13px;">${T(e.beschreibung)}</p>
        </div>
      </div>
      <details style="margin-top: 12px;">
        <summary style="cursor: pointer; color: var(--fg-muted); font-size: 13px;">Mail-Vorschau anzeigen</summary>
        <div style="background: var(--surface-2); border-radius: var(--radius-md); padding: 12px; margin-top: 8px; font-family: var(--font-mono); font-size: 12px; white-space: pre-wrap; line-height: 1.5;">
<strong>An:</strong> ${T(t.zeitwirtschaftEmail||"")}
<strong>Betreff:</strong> ${T(i.betreff)}

${T(i.text)}
        </div>
      </details>
      <div class="alert-actions" style="margin-top: 12px;">
        <a class="btn primary sm" href="${r}" target="_blank" rel="noopener">Mail Vorschlag in Outlook →</a>
        <button class="btn sm btn-copy-mail" data-subject="${be(i.betreff)}" data-body="${be(i.text)}">📋 Betreff + Text kopieren</button>
      </div>
    </div>
  `}function ds(e){return`
    <div class="vorlagen-item" data-key="${e.key}" style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
      <div class="card-split" style="margin-bottom: 12px;">
        <div>
          <h3 style="text-transform: none; letter-spacing: 0; color: var(--fg); font-size: 16px;">${T(e.titel)}</h3>
          <p class="hint" style="margin: 4px 0;">${T(e.beschreibung)}</p>
        </div>
        <button class="btn sm btn-reset-vorlage" data-key="${e.key}">Auf Default zurücksetzen</button>
      </div>
      <div class="form-group">
        <label>Betreff</label>
        <input type="text" class="v-betreff" value="${be(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 240px;">${T(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function us(e){e.querySelectorAll(".btn-save-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-key"),n=t.closest(".vorlagen-item"),s=n.querySelector(".v-betreff").value,i=n.querySelector(".v-text").value;await re(a,{betreff:s,text:i}),S("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-key"),n=ee[a];n&&confirm(`Vorlage "${n.titel}" auf Default zurücksetzen?`)&&(await re(a,{betreff:n.betreff,text:n.text}),S("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function gs(e){e.querySelectorAll(".btn-copy-mail").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-subject"),n=t.getAttribute("data-body"),s=`Betreff: ${a}

${n}`;await navigator.clipboard.writeText(s),S("Mail-Text kopiert.")})})}function T(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function be(e){return T(e)}async function hs({root:e}){const t=Ye(),[a,n]=await Promise.all([j(),we()]),s=Object.fromEntries(n.map(i=>[i.key,i]));e.innerHTML=`
    <h1 class="view-title">Einstellungen</h1>
    <p class="view-subtitle">App-weite Präferenzen.</p>

    <div class="grid cols-2">
      <div class="card">
        <h2>Erscheinungsbild</h2>
        <div class="form-group">
          <label>Theme</label>
          <div class="segmented" style="display: flex;">
            <button type="button" data-theme="auto" class="${t==="auto"?"active":""}">Auto (System)</button>
            <button type="button" data-theme="light" class="${t==="light"?"active":""}">Hell</button>
            <button type="button" data-theme="dark" class="${t==="dark"?"active":""}">Dunkel</button>
          </div>
          <p class="hint">Auto folgt der Windows- bzw. Edge-Einstellung.</p>
        </div>
      </div>

      <div class="card">
        <h2>Pausen-Regel-Override</h2>
        <div class="form-group">
          <label>Welches Gesetz soll für Pausen-Checks gelten?</label>
          <select id="pause-sel">
            <option value="auto" ${a.pausenRegel==="auto"?"selected":""}>Automatisch (aus Alter im Profil)</option>
            <option value="arbzg" ${a.pausenRegel==="arbzg"?"selected":""}>ArbZG (≥18 Jahre)</option>
            <option value="jarbschg" ${a.pausenRegel==="jarbschg"?"selected":""}>JArbSchG (&lt;18 Jahre)</option>
          </select>
          <p class="hint">Bei "Automatisch" wechselt die App am 18. Geburtstag automatisch von JArbSchG auf ArbZG.</p>
        </div>
      </div>

      <div class="card" style="grid-column: 1 / -1;">
        <h2>Mail-Vorlagen</h2>
        <p class="hint" style="margin-bottom: 16px;">Texte für die "✉ Mail schreiben"-Buttons im Dashboard. Platzhalter wie <code>{datum}</code>, <code>{wochentag}</code>, <code>{ist}</code>, <code>{soll}</code> werden automatisch gefüllt.</p>
        <div id="vorlagen-editor">
          ${Object.keys(ee).map(i=>{const r=ge(i,s[i]);return fs(r)}).join("")}
        </div>
      </div>

      <div class="card" style="grid-column: 1 / -1;">
        <h2>Über diese App</h2>
        <div class="tag-detail">
          <div class="tag-detail-label">Name</div>
          <div class="tag-detail-value">Zeitnachweis-App v0.1</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Datenschutz</div>
          <div class="tag-detail-value">Alle Daten bleiben im Browser (IndexedDB). Nichts wird an Server übertragen.</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Speicher-Modus</div>
          <div class="tag-detail-value">IndexedDB + JSON-Backup (Export/Import unter <a href="#/daten" style="color: var(--accent);">Daten</a>).</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Grundlagen</div>
          <div class="tag-detail-value">
            <a href="https://www.gesetze-im-internet.de/arbzg/__4.html" target="_blank" rel="noopener" style="color: var(--accent);">§ 4 ArbZG (Ruhepausen)</a> ·
            <a href="https://www.gesetze-im-internet.de/jarbschg/__11.html" target="_blank" rel="noopener" style="color: var(--accent);">§ 11 JArbSchG (Ruhepausen Minderjähriger)</a>
          </div>
        </div>
      </div>
    </div>
  `,e.querySelectorAll("[data-theme]").forEach(i=>{i.addEventListener("click",()=>{const r=i.getAttribute("data-theme");ye(r),e.querySelectorAll("[data-theme]").forEach(l=>l.classList.toggle("active",l===i)),S(`Theme: ${i.textContent.trim()}`)})}),e.querySelector("#pause-sel").addEventListener("change",async i=>{const r={...a,pausenRegel:i.target.value};await ie(r),S("Pausen-Regel gespeichert.")}),e.querySelectorAll(".btn-save-vorlage").forEach(i=>{i.addEventListener("click",async()=>{const r=i.getAttribute("data-key"),l=i.closest(".vorlagen-item"),c=l.querySelector(".v-betreff").value,o=l.querySelector(".v-text").value;await re(r,{betreff:c,text:o}),S("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(i=>{i.addEventListener("click",async()=>{const r=i.getAttribute("data-key"),l=ee[r];l&&confirm(`Vorlage "${l.titel}" auf Default zurücksetzen?`)&&(await re(r,{betreff:l.betreff,text:l.text}),S("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function fs(e){return`
    <div class="vorlagen-item" data-key="${e.key}" style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
      <div class="card-split" style="margin-bottom: 12px;">
        <div>
          <h3 style="text-transform: none; letter-spacing: 0; color: var(--fg); font-size: 16px;">${se(e.titel)}</h3>
          <p class="hint" style="margin: 4px 0;">${se(e.beschreibung)}</p>
        </div>
        <button class="btn sm btn-reset-vorlage" data-key="${e.key}">Auf Default zurücksetzen</button>
      </div>
      <div class="form-group">
        <label>Betreff</label>
        <input type="text" class="v-betreff" value="${ms(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 200px;">${se(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function se(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function ms(e){return se(e)}async function Ne(){var t;jt();const e=document.getElementById("content");(t=document.getElementById("theme-toggle"))==null||t.addEventListener("click",()=>Rt()),Zt(()=>{Jt()}),await aa()&&setTimeout(()=>{Se('Parser wurde aktualisiert. Bitte lade deinen Zeitnachweis unter "Daten" neu hoch.',{type:"info",duration:12e3})},500),await ta(),await ea(),D("/",Be),D("/dashboard",Be),D("/analytics",as),D("/monat",Rn),D("/monat/:yyyymm",Zn),D("/woche",Un),D("/woche/:yyyykw",Yn),D("/tag/:datum",es),D("/berichtsheft",ns),D("/mails",os),D("/profil",jn),D("/daten",On),D("/einstellungen",hs),Gt(e),location.hash||Nt("/")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ne):Ne();
