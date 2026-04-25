import{D as ht}from"./dexie-BODkcwel.js";import{b as ce,a as q,c as J,d as ft,f as $,e as ee,i as He,s as Ze,g as mt,p as pt,h as vt,j as bt,k as Ne,l as z,m as yt}from"./datefns-Dlft8rFK.js";import{C as L,L as wt,B as Mt,D as $t,S as St,a as kt,b as xt,P as zt,A as Dt,c as At,d as Pt,T as Tt,p as Et,e as Lt,i as Kt}from"./chartjs-CRgZvhTJ.js";import{_ as Wt,a as Ft}from"./pdfjs-BDGsuRSB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const ie="theme";function Ct(){const e=localStorage.getItem(ie)??"auto";fe(e)}function fe(e){e==="auto"?document.documentElement.removeAttribute("data-theme"):document.documentElement.setAttribute("data-theme",e),localStorage.setItem(ie,e),It(e)}function Ot(){const e=localStorage.getItem(ie)??"auto",t=e==="auto"?"light":e==="light"?"dark":"auto";return fe(t),Ge(t),t}const de=new Set;function Bt(e){return de.add(e),()=>de.delete(e)}function Ge(e){for(const t of de)try{t(e)}catch(a){console.error(a)}}var je;if(typeof window<"u"&&window.matchMedia){const e=window.matchMedia("(prefers-color-scheme: dark)");(je=e.addEventListener)==null||je.call(e,"change",()=>{qe()==="auto"&&Ge("auto")})}function It(e){const t=document.getElementById("theme-toggle");if(!t)return;const a=t.querySelector(".theme-label"),n=t.querySelector(".theme-icon-dark"),s=t.querySelector(".theme-icon-light");a&&(e==="auto"?(a.textContent="Auto",n&&(n.style.display="inline"),s&&(s.style.display="inline")):e==="light"?(a.textContent="Hell",n&&(n.style.display="none"),s&&(s.style.display="inline")):(a.textContent="Dunkel",n&&(n.style.display="inline"),s&&(s.style.display="none")))}function qe(){return localStorage.getItem(ie)??"auto"}const Je=[];let Ue=null;function A(e,t){const a=e.split("/").filter(Boolean),n=[],s=new RegExp("^/?"+a.map(r=>r.startsWith(":")?(n.push(r.slice(1)),"([^/]+)"):Ht(r)).join("/")+"/?$");Je.push({pattern:e,regex:s,paramNames:n,render:t})}function Vt(e){e.startsWith("#")||(e="#"+e),window.location.hash===e?K():window.location.hash=e}function _t(e,{onNavigate:t}={}){window.addEventListener("hashchange",K),K.rootEl=e,K.onNavigate=t,K()}async function K(){var n;const e=K.rootEl,t=window.location.hash.slice(1)||"/",a=t.startsWith("/")?t:`/${t}`;for(const s of Je){const r=s.regex.exec(a);if(r){const i={};s.paramNames.forEach((l,o)=>i[l]=decodeURIComponent(r[o+1])),Ue=a,(n=K.onNavigate)==null||n.call(K,a),Rt(a);try{e.classList.remove("view-enter"),await s.render({params:i,path:a,root:e}),e.classList.add("view-enter")}catch(l){console.error("Route render error:",l),e.innerHTML=`<div class="empty-state">
          <div class="empty-state-icon">⚠</div>
          <h2>Fehler beim Anzeigen</h2>
          <p>${xe(l.message||String(l))}</p>
        </div>`}return}}e.innerHTML=`<div class="empty-state">
    <div class="empty-state-icon">?</div>
    <h2>Seite nicht gefunden</h2>
    <p>Die Route <code>${xe(a)}</code> existiert nicht.</p>
    <a href="#/" class="btn primary">Zum Dashboard</a>
  </div>`}function Rt(e){document.querySelectorAll("[data-route]").forEach(t=>{const a=t.getAttribute("data-route"),n=a==="/"?e==="/":e===a||e.startsWith(a+"/");t.classList.toggle("active",n)})}function jt(){Ue!=null&&K()}function Ht(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function xe(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const Zt="modulepreload",Nt=function(e){return"/zeitnachweis-app/"+e},ze={},Gt=function(t,a,n){let s=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.allSettled(a.map(o=>{if(o=Nt(o),o in ze)return;ze[o]=!0;const c=o.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${d}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":Zt,c||(h.as="script"),h.crossOrigin="",h.href=o,l&&h.setAttribute("nonce",l),document.head.appendChild(h),c)return new Promise((u,g)=>{h.addEventListener("load",u),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${o}`)))})}))}function r(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return s.then(i=>{for(const l of i||[])l.status==="rejected"&&r(l.reason);return t().catch(r)})},p=new ht("zeitnachweis");p.version(1).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"});p.version(2).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});p.version(3).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});p.version(4).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});p.version(5).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{const t=await e.table("profil").get("self");t&&(!t.zeitwirtschaftEmail||t.zeitwirtschaftEmail==="zeitwirtschaft@putzmeister.com")&&await e.table("profil").put({...t,zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com"})});p.version(6).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});p.version(7).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{const t=await e.table("profil").get("self");if(!t)return;let a=t.ueber18??!0;if(t.geburtsdatum){const s=new Date(t.geburtsdatum),r=new Date;a=r.getFullYear()-s.getFullYear()-(r<new Date(r.getFullYear(),s.getMonth(),s.getDate())?1:0)>=18}const n={id:"self",ueber18:a,sollStundenProWoche:t.sollStundenProWoche??35,sollStundenProTag:t.sollStundenProTag??7,berufsschulMuster:t.berufsschulMuster??{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null},zeitwirtschaftEmail:t.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:t.zeitwirtschaftAnrede||"Frau Kanarya",pausenRegel:t.pausenRegel??"auto",erstelltAm:t.erstelltAm??new Date().toISOString(),updatedAt:new Date().toISOString()};await e.table("profil").put(n)});async function qt(){try{const{erkenneBerufsschulMuster:e}=await Gt(async()=>{const{erkenneBerufsschulMuster:i}=await Promise.resolve().then(()=>Ha);return{erkenneBerufsschulMuster:i}},void 0),t=await p.tage.toArray();if(!t.length)return!1;const a=e(t),n=await p.profil.get("self");if(!n)return!1;const s=n.berufsschulMuster??{};return JSON.stringify(s.wochentageWoechentlich??[])!==JSON.stringify(a.wochentageWoechentlich)||JSON.stringify(s.wochentage14Taegig??[])!==JSON.stringify(a.wochentage14Taegig)||(s.referenzDatum14Taegig??null)!==(a.referenzDatum14Taegig??null)?(await p.profil.put({...n,berufsschulMuster:a}),!0):!1}catch(e){return console.warn("[db] refreshBerufsschulMuster fehlgeschlagen:",e),!1}}async function Jt(){try{const e=await p.mailVorlagen.toArray(),t=e.some(n=>n.betreff&&!n.betreff.startsWith("Bitte um Zeitkorrektur im ESS")),a=e.some(n=>n.text&&!/Vielen Dank!\s*$/.test(n.text));return t||a?(await p.mailVorlagen.clear(),!0):!1}catch(e){return console.warn("[db] ensureMailVorlagenFresh fehlgeschlagen:",e),!1}}async function Ut(){const e=await p.einstellungen.get("__migration_reset");return(e==null?void 0:e.value)===!0?(await p.einstellungen.delete("__migration_reset"),!0):!1}async function H(){return await p.profil.get("self")??Ye()}async function me(e){const t={...e,id:"self",updatedAt:new Date().toISOString()};return await p.profil.put(t),t}function Ye(){return{id:"self",ueber18:!0,sollStundenProWoche:35,sollStundenProTag:7,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null},zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:"Frau Kanarya",pausenRegel:"auto",erstelltAm:new Date().toISOString()}}async function Yt(e,t=null){const a=await p.einstellungen.get(e);return a?a.value:t}async function Qt(e,t){await p.einstellungen.put({key:e,value:t})}async function C(){return await p.tage.orderBy("datum").toArray()}async function Xt(e){return e.length?(await p.tage.bulkPut(e),e.length):0}async function ea(e){return e.length?(await p.monate.bulkPut(e),e.length):0}async function te(){return await p.monate.orderBy("monatKey").toArray()}async function ta(e){return await p.uploads.add({...e,hochladeDatum:new Date().toISOString()})}async function Qe(){return await p.uploads.orderBy("hochladeDatum").reverse().toArray()}async function aa(){await Promise.all([p.profil.clear(),p.tage.clear(),p.monate.clear(),p.uploads.clear(),p.einstellungen.clear(),p.mailVorlagen.clear(),p.warnungDismissals.clear()])}async function na(){await Promise.all([p.tage.clear(),p.monate.clear(),p.uploads.clear(),p.warnungDismissals.clear()])}async function sa(){const[e,t,a,n,s,r,i]=await Promise.all([p.profil.toArray(),p.tage.toArray(),p.monate.toArray(),p.uploads.toArray(),p.einstellungen.toArray(),p.mailVorlagen.toArray(),p.warnungDismissals.toArray()]);return{version:1,exportedAt:new Date().toISOString(),data:{profil:e,tage:t,monate:a,uploads:n,einstellungen:s,mailVorlagen:r,warnungDismissals:i}}}async function ia(e){if(!e||e.version!==1||!e.data)throw new Error("Ungültiges oder inkompatibles Backup-Format.");const t=e.data;await p.transaction("rw",p.profil,p.tage,p.monate,p.uploads,p.einstellungen,p.mailVorlagen,p.warnungDismissals,async()=>{var a,n,s,r,i,l,o;(a=t.profil)!=null&&a.length&&await p.profil.bulkPut(t.profil),(n=t.tage)!=null&&n.length&&await p.tage.bulkPut(t.tage),(s=t.monate)!=null&&s.length&&await p.monate.bulkPut(t.monate),(r=t.uploads)!=null&&r.length&&await p.uploads.bulkPut(t.uploads),(i=t.einstellungen)!=null&&i.length&&await p.einstellungen.bulkPut(t.einstellungen),(l=t.mailVorlagen)!=null&&l.length&&await p.mailVorlagen.bulkPut(t.mailVorlagen),(o=t.warnungDismissals)!=null&&o.length&&await p.warnungDismissals.bulkPut(t.warnungDismissals)})}async function De(e,t){await p.mailVorlagen.put({key:e,...t})}async function ra(){return await p.mailVorlagen.toArray()}async function la(e,t){await p.warnungDismissals.put({key:`${e}-${t}`,datum:e,typ:t,dismissedAt:new Date().toISOString()})}async function oa(){return await p.warnungDismissals.toArray()}function Xe(e){if(e==null)return null;if(typeof e=="number")return e;let t=String(e).trim();if(!t)return null;let a=!1;t.endsWith("-")&&(a=!0,t=t.slice(0,-1).trim()),t=t.replace(",",".");const n=parseFloat(t);return isNaN(n)?null:a?-n:n}function V(e){if(e==null||isNaN(e))return"—";const t=e<0,a=Math.abs(e),n=Math.floor(a),s=Math.round((a-n)*60);let r=n,i=s;return i===60&&(r+=1,i=0),`${t?"-":""}${r}:${String(i).padStart(2,"0")}`}function P(e,t={}){if(e==null||isNaN(e))return"—";const{signed:a=!1,suffix:n="h"}=t,s=a&&e>0?"+":"",r=e.toFixed(2).replace(".",",");return`${s}${r}${n}`}function W(e){if(!e)return null;const t=/^(\d{1,2}):(\d{2})$/.exec(String(e).trim());return t?parseInt(t[1],10)*60+parseInt(t[2],10):null}function re(e){if(!(e!=null&&e.length))return null;const t=e.filter(s=>s.von&&s.bis);if(!t.length)return null;let a=t[0].von,n=t[0].bis;for(const s of t)W(s.von)<W(a)&&(a=s.von),W(s.bis)>W(n)&&(n=s.bis);return{kommen:a,gehen:n}}function ca(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
    <polyline points="10 17 15 12 10 7"/>
    <line x1="15" y1="12" x2="3" y2="12"/>
  </svg>`}function da(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>`}function le(e,t={}){const{size:a=20,layout:n="inline"}=t;return e?`
    <div class="kommen-gehen ${n}">
      <span class="kg-block kommen" title="Kommen (frühester Einstempel)">
        ${ca(a)}
        <span class="kg-zeit tabular">${e.kommen}</span>
      </span>
      <span class="kg-block gehen" title="Gehen (spätester Ausstempel)">
        ${da(a)}
        <span class="kg-zeit tabular">${e.gehen}</span>
      </span>
    </div>
  `:'<span class="kg-empty">—</span>'}const Ae={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},ua=(e,t,a)=>{let n;const s=a!=null&&a.addSuffix?Ae[e].withPreposition:Ae[e].standalone;return typeof s=="string"?n=s:t===1?n=s.one:n=s.other.replace("{{count}}",String(t)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:"vor "+n:n},ga={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},ha={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},fa={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},ma={date:ce({formats:ga,defaultWidth:"full"}),time:ce({formats:ha,defaultWidth:"full"}),dateTime:ce({formats:fa,defaultWidth:"full"})},pa={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},va=(e,t,a,n)=>pa[e],ba={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},ya={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},ue={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},wa={narrow:ue.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:ue.wide},Ma={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},$a={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},Sa={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},ka=e=>Number(e)+".",xa={ordinalNumber:ka,era:q({values:ba,defaultWidth:"wide"}),quarter:q({values:ya,defaultWidth:"wide",argumentCallback:e=>e-1}),month:q({values:ue,formattingValues:wa,defaultWidth:"wide"}),day:q({values:Ma,defaultWidth:"wide"}),dayPeriod:q({values:$a,defaultWidth:"wide",formattingValues:Sa,defaultFormattingWidth:"wide"})},za=/^(\d+)(\.)?/i,Da=/\d+/i,Aa={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},Pa={any:[/^v/i,/^n/i]},Ta={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},Ea={any:[/1/i,/2/i,/3/i,/4/i]},La={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},Ka={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Wa={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},Fa={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},Ca={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},Oa={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},Ba={ordinalNumber:ft({matchPattern:za,parsePattern:Da,valueCallback:e=>parseInt(e)}),era:J({matchPatterns:Aa,defaultMatchWidth:"wide",parsePatterns:Pa,defaultParseWidth:"any"}),quarter:J({matchPatterns:Ta,defaultMatchWidth:"wide",parsePatterns:Ea,defaultParseWidth:"any",valueCallback:e=>e+1}),month:J({matchPatterns:La,defaultMatchWidth:"wide",parsePatterns:Ka,defaultParseWidth:"any"}),day:J({matchPatterns:Wa,defaultMatchWidth:"wide",parsePatterns:Fa,defaultParseWidth:"any"}),dayPeriod:J({matchPatterns:Ca,defaultMatchWidth:"wide",parsePatterns:Oa,defaultParseWidth:"any"})},j={code:"de",formatDistance:ua,formatLong:ma,formatRelative:va,localize:xa,match:Ba,options:{weekStartsOn:1,firstWeekContainsDate:4}};function X(e){if(!e)return null;const t=e.trim();return pt(t,"dd.MM.yyyy",new Date)}function w(e){return $(e,"dd.MM.yyyy")}function et(e){return $(e,"EE, dd.MM.yyyy",{locale:j})}function Ia(e){const t=Ze(e,{weekStartsOn:1}),a=mt(e,{weekStartsOn:1});return`${$(t,"dd.MM.")} – ${$(a,"dd.MM.yyyy")}`}function Va(e){return`${vt(e)}-${String(bt(e)).padStart(2,"0")}`}function tt(e){return $(e,"yyyy-MM")}function _a(e){return $(e,"yyyy-MM-dd")}function Ra(e,t){if(!e||!t)return 0;e>t&&([e,t]=[t,e]);let a=0,n=new Date(e);for(;n<t;)n=ee(n,1),He(n)||a++;return a}function R(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function at(e){var i;const t=e.filter(l=>l.tagestyp==="Berufsschule");if(t.length<2)return{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null};const a={};for(const l of t)a[i=l.wochentag]??(a[i]=[]),a[l.wochentag].push(l);const n=[],s=[];let r=null;for(const[l,o]of Object.entries(a)){if(o.sort((h,u)=>h.datum.localeCompare(u.datum)),o.length<2)continue;const c=[];for(let h=1;h<o.length;h++)c.push(Ne(z(o[h].datum),z(o[h-1].datum)));const d=ja(c);d<=10?n.push(l):d<=18&&(s.push(l),(!r||z(o[0].datum)<z(r))&&(r=o[0].datum))}return{wochentageWoechentlich:n,wochentage14Taegig:s,referenzDatum14Taegig:r}}function ja(e){if(!e.length)return null;const t=e.slice().sort((n,s)=>n-s),a=Math.floor(t.length/2);return t.length%2?t[a]:(t[a-1]+t[a])/2}function pe(e,t){var s,r;if(!t)return!1;const n=["SO","MO","DI","MI","DO","FR","SA"][e.getDay()];if((s=t.wochentageWoechentlich)!=null&&s.includes(n))return!0;if((r=t.wochentage14Taegig)!=null&&r.includes(n)&&t.referenzDatum14Taegig){const i=z(t.referenzDatum14Taegig),l=yt(e,i,{weekStartsOn:1});if(l>=0&&l%2===0)return!0}return!1}const Ha=Object.freeze(Object.defineProperty({__proto__:null,erkenneBerufsschulMuster:at,istBerufsschulTagLautMuster:pe},Symbol.toStringTag,{value:"Module"}));function Za(e){return e?"arbzg":"jarbschg"}function Na(e,t){return e==null?0:t==="jarbschg"?e>6?1:e>4.5?.5:0:e>9?.75:e>6?.5:0}function nt(e){if(!e||e.length<2)return 0;const t=e.filter(n=>n.von&&n.bis).map(n=>({von:W(n.von),bis:W(n.bis)})).filter(n=>n.von!=null&&n.bis!=null).sort((n,s)=>n.von-s.von);let a=0;for(let n=1;n<t.length;n++){const s=t[n].von-t[n-1].bis;(s>0&&s>=15||s>0)&&(a+=s)}return a/60}function st(e,t){const a=e.zeitSpannen??[];if(!a.length||a.every(f=>!f.von))return{keinAnspruch:!0};const n=nt(a),s=e.pause??0,r=Ga(a),i=r-s,l=t.pausenRegel&&t.pausenRegel!=="auto"?t.pausenRegel==="jarbschg"?"jarbschg":"arbzg":Za(!!t.ueber18),o=Na(i,l),c=Math.max(n,o),d=s-c,h=Math.max(0,o-n);let u="ok",g=null;if(d>.05)u="fehler_zeitwirtschaft",g=`${Math.round(d*60)} min Pause wurden zusätzlich zur gesetzlichen Pflicht und zur gestempelten Pause abgezogen. Das sieht nach einem Zeitwirtschafts-Fehler aus.`;else if(h>.05&&s>n+.02){u="aufstockung_legal";const f=Math.round(h*60);g=`Du hast ${Math.round(n*60)} min Pause gestempelt, aber bei ${i.toFixed(2).replace(".",",")}h Arbeitszeit schreibt das Gesetz (${l.toUpperCase()}) ${Math.round(o*60)} min vor. Die fehlenden ${f} min wurden automatisch als Pause gewertet. Das ist gesetzeskonform — nächstes Mal einfach länger Pause machen.`}return{arbeitszeitMitPause:r,arbeitszeitOhnePause:i,gestempeltePause:n,abgezogenePause:s,gesetzlichePflicht:o,gesetz:l,legalerAbzug:c,unrechtmaessigerVerlustMin:Math.round(Math.max(0,d)*60),aufstockungMin:Math.round(Math.max(0,h)*60),typ:u,warnung:g}}function Ga(e){let t=0;for(const a of e){if(!a.von||!a.bis)continue;const n=W(a.von),s=W(a.bis);n!=null&&s!=null&&s>n&&(t+=s-n)}return t/60}const U={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function ve(e,t,a,n=new Set){var d,h;const s=[],r=a??new Date,i=new Map(e.map(u=>[u.datum,u]));if(!e.length)return s;const l=z(e[0].datum),o=r;for(let u=new Date(l);u<=o;u=ee(u,1)){if(He(u))continue;const g=$(u,"yyyy-MM-dd"),f=i.get(g),v=Ra(u,o);if(!f||!f.tagestyp&&!f.ist&&(((d=f.zeitSpannen)==null?void 0:d.length)??0)===0){if(pe(u,t.berufsschulMuster)){const m=v>=4?"error":v>=2?"warn":"info";Y(s,n,{datum:g,wochentag:(f==null?void 0:f.wochentag)??ae(u),typ:"bs_tag_fehlt",schweregrad:m,titel:`Berufsschultag nicht eingetragen: ${w(u)}`,beschreibung:`Laut deinem Profil hast du am ${U[ae(u)]}, ${w(u)} Berufsschule. Im Zeitnachweis fehlt der Tag bisher${v>=4?" — bitte bei der Zeitwirtschaft nachhaken":""}.`,alter:v,mailVorlageKey:m==="error"?"bs_tag_fehlt":null})}else{const m=v>=4?"error":v>=2?"warn":"info";Y(s,n,{datum:g,wochentag:ae(u),typ:"stempelzeit_fehlt",schweregrad:m,titel:`Keine Stempelzeit am ${w(u)}`,beschreibung:`Am ${U[ae(u)]}, ${w(u)} wurde keine Stempelzeit erfasst. Falls du an diesem Tag im Haus warst, sollte die Zeitwirtschaft das nachtragen${v>=4?" — es ist inzwischen ≥4 Werktage her":""}.`,alter:v,mailVorlageKey:m==="error"?"stempelzeit_fehlt":null})}continue}if(f.tagestyp==="Berufsschule"&&f.ist!=null&&f.soll!=null&&f.ist<f.soll-.01&&Y(s,n,{datum:g,wochentag:f.wochentag,typ:"bs_stunden_falsch",schweregrad:"error",titel:`Berufsschultag mit zu wenig Stunden: ${w(u)}`,beschreibung:`Am ${U[f.wochentag]}, ${w(u)} sind nur ${f.ist.toFixed(2).replace(".",",")}h gebucht statt regulär ${f.soll.toFixed(2).replace(".",",")}h. Die Zeitwirtschaft hat den Berufsschultag möglicherweise nur halb erfasst.`,ist:f.ist,soll:f.soll,mailVorlageKey:"bs_stunden_falsch"}),f.tagestyp==="Stempelzeit"&&((h=f.zeitSpannen)==null?void 0:h.length)>1&&g>="2026-04-01"){const m=st(f,t);(m==null?void 0:m.typ)==="fehler_zeitwirtschaft"&&m.unrechtmaessigerVerlustMin>=5?Y(s,n,{datum:g,wochentag:f.wochentag,typ:"pausen_abzug",schweregrad:m.unrechtmaessigerVerlustMin>=15?"error":"warn",titel:`Pausen-Abzug fehlerhaft (${w(u)})`,beschreibung:`Am ${U[f.wochentag]}, ${w(u)} wurden ${Math.round(m.abgezogenePause*60)} min Pause abgezogen. Gestempelt: ${Math.round(m.gestempeltePause*60)} min, gesetzlich nötig (${m.gesetz.toUpperCase()}): ${Math.round(m.gesetzlichePflicht*60)} min. Differenz von ${m.unrechtmaessigerVerlustMin} min ist unerklärlich.`,verlustMinuten:m.unrechtmaessigerVerlustMin,abgezogen:m.abgezogenePause,gestempelt:m.gestempeltePause,mailVorlageKey:"pausen_abzug"}):(m==null?void 0:m.typ)==="aufstockung_legal"&&m.aufstockungMin>=10&&Y(s,n,{datum:g,wochentag:f.wochentag,typ:"pausen_aufstockung",schweregrad:"info",titel:`Zu wenig Pause gestempelt (${w(u)}) — ${m.aufstockungMin} min automatisch aufgestockt`,beschreibung:`Am ${U[f.wochentag]}, ${w(u)} hast du nur ${Math.round(m.gestempeltePause*60)} min Pause gemacht. Gesetz (${m.gesetz.toUpperCase()}) schreibt ${Math.round(m.gesetzlichePflicht*60)} min vor. Fehlende ${m.aufstockungMin} min wurden als Pause gewertet — das ist legal, aber du verlierst dadurch Arbeitszeit. Tipp: mach beim nächsten Mal etwas länger Mittag.`})}}const c={error:0,warn:1,info:2};return s.sort((u,g)=>{const f=c[u.schweregrad]-c[g.schweregrad];return f!==0?f:g.datum.localeCompare(u.datum)}),s}function it(e,t=new Set){var n,s,r,i;const a=[];for(const l of e){const o=((n=l.glz)==null?void 0:n.saldoVorperiode)??0,c=((s=l.glz)==null?void 0:s.saldoAktuellePeriode)??0,d=((r=l.glz)==null?void 0:r.umgebuchteStunden)??0,h=(i=l.glz)==null?void 0:i.saldoGesamt;if(h==null)continue;const u=o+c+d,g=Math.abs(h-u);if(g>.03){const f=`${l.monatKey}-saldo_plausi`;t.has(f)||a.push({datum:`${l.monatKey}-01`,wochentag:"",typ:"saldo_plausi",schweregrad:"warn",titel:`Saldo-Differenz im Monat ${l.monatKey}`,beschreibung:`Rechnung: Vorperiode ${o.toFixed(2)} + aktuelle Periode ${c.toFixed(2)} + umgebucht ${d.toFixed(2)} = ${u.toFixed(2)}, aber dein Saldo wird mit ${h.toFixed(2)} angezeigt. Abweichung: ${g.toFixed(2)}h.`,soll:u,ist:h})}}return a}function Y(e,t,a){const n=`${a.datum}-${a.typ}`;t.has(n)||(a.id=n,e.push(a))}function ae(e){return["SO","MO","DI","MI","DO","FR","SA"][e.getDay()]}function qa(e,t){var o,c,d;const a=[...e].sort((h,u)=>h.datum.localeCompare(u.datum));if(!a.length)return[];const n=new Map(t.map(h=>[h.monatKey,h])),s={};for(const h of a)s[o=h.monatKey]??(s[o]=[]),s[h.monatKey].push(h);const r=Object.keys(s).sort(),i=[];let l=null;for(const h of r){const u=n.get(h);let g;((c=u==null?void 0:u.glz)==null?void 0:c.saldoVorperiode)!=null?g=u.glz.saldoVorperiode:l!=null?g=l:g=0;const f=s[h];for(const v of f)v.diff!=null&&(g+=v.diff),i.push({datum:v.datum,wochentag:v.wochentag,saldo:Math.round(g*100)/100,diff:v.diff,ist:v.ist,soll:v.soll,tagestyp:v.tagestyp,monatKey:v.monatKey,wocheKey:v.wocheKey,zeitSpannen:v.zeitSpannen});if(((d=u==null?void 0:u.glz)==null?void 0:d.saldoGesamt)!=null){const v=u.glz.saldoGesamt-g;if(Math.abs(v)>.02&&i.length>0){const y=i.length-1;i[y].umbuchung=v,i[y].saldo=Math.round((i[y].saldo+v)*100)/100,g=i[y].saldo}l=u.glz.saldoGesamt}else l=g}return i}function Ja(e,t){if(!e.length)return[];if(t==="alles")return e;const a=Math.min(t,e.length);return e.slice(-a)}function Ua(e){return e.length?e[e.length-1].saldo:0}function Ya(e){if(!e.length)return 0;const t=e[0].saldo-(e[0].diff??0),a=e[e.length-1].saldo;return Math.round((a-t)*100)/100}L.register(wt,Mt,$t,St,kt,xt,zt,Dt,At,Pt,Tt,Et,Lt,Kt);function x(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function O(){return{fg:x("--fg"),fgMuted:x("--fg-muted"),fgSubtle:x("--fg-subtle"),border:x("--border"),surface:x("--surface"),accent:x("--accent"),success:x("--success"),warn:x("--warn"),danger:x("--danger"),info:x("--info"),palette:[x("--chart-1"),x("--chart-2"),x("--chart-3"),x("--chart-4"),x("--chart-5"),x("--chart-6"),x("--chart-7")]}}function M(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.fgMuted,font:{size:12}}},tooltip:{backgroundColor:e.surface,titleColor:e.fg,bodyColor:e.fg,borderColor:e.border,borderWidth:1,padding:10,displayColors:!0}},scales:{x:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}},y:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}}}}}function Qa(e,t){const a=O();if(B(e),!(t!=null&&t.length))return;const n=t.map(r=>$(z(r.datum),"dd.MM.")),s=t.map(r=>r.saldo);return s.map(r=>r>=0?a.success:a.danger),new L(e,{type:"line",data:{labels:n,datasets:[{label:"Tages-Saldo",data:s,borderColor:a.accent,backgroundColor:r=>{const i=r.chart,{ctx:l,chartArea:o,scales:c}=i;return o?on(l,o,c.y,a):I(a.accent,.14)},segment:{borderColor:r=>{const i=r.p0.parsed.y,l=r.p1.parsed.y,o=(i+l)/2;return o>=.02?a.success:o<=-.02?a.danger:a.fgMuted}},tension:.25,pointRadius:2,pointHoverRadius:6,pointHitRadius:20,pointBackgroundColor:s.map(r=>r>=.02?a.success:r<=-.02?a.danger:a.fgMuted),pointBorderColor:a.surface,pointBorderWidth:1,fill:!0,borderWidth:2}]},options:{...M(a),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},plugins:{...M(a).plugins,legend:{display:!1},tooltip:{enabled:!1,mode:"index",intersect:!1,axis:"x",position:"nearest",external:Xa(t)}},scales:{...M(a).scales,y:{...M(a).scales.y,ticks:{...M(a).scales.y.ticks,callback:r=>`${r>=0?"+":""}${r.toFixed(1).replace(".",",")}h`}}}}})}function Xa(e){return function(t){var k;const{chart:a,tooltip:n}=t;let s=a.$saldoTooltipEl;if(!s){s=document.createElement("div"),s.className="saldo-tooltip",document.body.appendChild(s),a.$saldoTooltipEl=s;const T=a.destroy.bind(a);a.destroy=function(){s.parentNode&&s.parentNode.removeChild(s),T()}}if(n.opacity===0||!((k=n.dataPoints)!=null&&k.length)){s.style.opacity="0";return}const r=n.dataPoints[0].dataIndex,i=e[r];if(!i){s.style.opacity="0";return}const l=i.saldo>.05?"pos":i.saldo<-.05?"neg":"flat",o=(i.diff??0)>.05?"pos":(i.diff??0)<-.05?"neg":"flat",c=(i.saldo>0?"+":"")+i.saldo.toFixed(2).replace(".",",")+"h",d=i.diff!=null?(i.diff>0?"+":"")+i.diff.toFixed(2).replace(".",",")+"h":null;let u=`<div class="saldo-tooltip-title">${Pe($(z(i.datum),"EE, dd.MM.yyyy",{locale:j}))}</div>`;u+=`<div class="saldo-tooltip-row"><span class="saldo-tooltip-label">Saldo</span><span class="saldo-tooltip-value ${l}">${c}</span></div>`,d&&(u+=`<div class="saldo-tooltip-row"><span class="saldo-tooltip-label">Tages-Diff</span><span class="saldo-tooltip-value ${o}">${d}</span></div>`);const g=[];i.tagestyp&&g.push(`Typ: ${Pe(i.tagestyp)}`),i.umbuchung&&g.push(`Umbuchung: ${i.umbuchung>=0?"+":""}${i.umbuchung.toFixed(2).replace(".",",")}h`),g.length&&(u+=`<div class="saldo-tooltip-meta">${g.map(T=>`<span>${T}</span>`).join("")}</div>`),s.innerHTML=u;const f=a.canvas.getBoundingClientRect(),v=f.left+n.caretX,y=f.top+n.caretY;s.style.opacity="0",s.style.left="0px",s.style.top="0px";const m=s.offsetWidth,S=s.offsetHeight,F=18;let Z=v+F;Z+m>window.innerWidth-8&&(Z=v-F-m);let b=y-S/2;b<8&&(b=8),b+S>window.innerHeight-8&&(b=window.innerHeight-S-8),s.style.left=Z+"px",s.style.top=b+"px",s.style.opacity="1"}}function Pe(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function en(e,t){const a=O();if(B(e),!(t!=null&&t.length))return;const n=t.map(r=>r.monatKey),s=t.map(r=>{var i;return((i=r.glz)==null?void 0:i.saldoGesamt)??0});return new L(e,{type:"line",data:{labels:n,datasets:[{label:"GLZ-Saldo (Monatsende)",data:s,borderColor:a.accent,backgroundColor:I(a.accent,.18),tension:.35,fill:!0,pointRadius:4}]},options:M(a)})}function be(e,t){const a=O();if(B(e),!(t!=null&&t.length))return;const n=t.map(i=>$(z(i.datum),"dd.MM.")),s=t.map(i=>i.ist??0),r=t.map(i=>cn(i.tagestyp,a));return new L(e,{type:"bar",data:{labels:n,datasets:[{label:"Ist-Stunden",data:s,backgroundColor:r,borderRadius:4,borderSkipped:!1}]},options:{...M(a),plugins:{...M(a).plugins,legend:{display:!1},tooltip:{...M(a).plugins.tooltip,callbacks:{label:i=>{const l=t[i.dataIndex];return`${l.tagestyp??"—"}: ${(l.ist??0).toFixed(2).replace(".",",")}h`}}}},scales:{...M(a).scales,y:{...M(a).scales.y,suggestedMin:0,suggestedMax:10}}}})}function tn(e,t){const a=O();if(B(e),!(t!=null&&t.length))return;const n=t.filter(c=>{var d;return((d=c.zeitSpannen)==null?void 0:d.length)&&c.zeitSpannen.some(h=>h.von&&h.bis)}).map(c=>{const d=c.zeitSpannen.filter(g=>g.von&&g.bis).map(g=>({von:W(g.von),bis:W(g.bis),vonStr:g.von,bisStr:g.bis})).filter(g=>g.von!=null&&g.bis!=null);if(d.length===0)return null;const h=Math.min(...d.map(g=>g.von)),u=Math.max(...d.map(g=>g.bis));return{...c,_spans:d,_minVon:h,_maxBis:u}}).filter(Boolean);if(!n.length)return;const s=c=>c.ist==null?a.fgMuted:c.ist>=7?a.success:a.danger,r={label:"Tages-Rahmen",data:n.map(c=>[c._minVon,c._maxBis]),backgroundColor:n.map(s),borderColor:n.map(s),borderWidth:0,borderRadius:4,borderSkipped:!1,barPercentage:.75,categoryPercentage:.95},i=Math.max(0,Math.floor(Math.min(...n.map(c=>c._minVon))/60)*60-60),l=Math.min(24*60,Math.ceil(Math.max(...n.map(c=>c._maxBis))/60)*60+60),o=c=>`${String(Math.floor(c/60)).padStart(2,"0")}:${String(c%60).padStart(2,"0")}`;return new L(e,{type:"bar",data:{labels:n.map(c=>$(z(c.datum),"dd.MM.")),datasets:[r]},options:{...M(a),interaction:{mode:"index",intersect:!1,axis:"x"},plugins:{legend:{display:!1},tooltip:{enabled:!0,backgroundColor:a.surface,borderColor:a.accent,borderWidth:2,padding:14,titleColor:a.fg,titleFont:{size:14,weight:"600"},titleMarginBottom:8,bodyColor:a.fg,bodyFont:{size:13},bodySpacing:4,displayColors:!1,caretPadding:10,cornerRadius:8,callbacks:{title:c=>{const d=n[c[0].dataIndex];return $(z(d.datum),"EE, dd.MM.yyyy",{locale:j})},label:()=>"",beforeBody:c=>{const d=n[c[0].dataIndex],h=d.ist!=null?V(d.ist):"—",u=d.soll!=null?V(d.soll):"—",g=d.pause!=null?Math.round(d.pause*60)+" min":"—",v=[`Tages-Rahmen: ${`${o(d._minVon)} – ${o(d._maxBis)}`}`];return d._spans.length>1&&(v.push(""),d._spans.forEach((y,m)=>{v.push(`  Block ${m+1}: ${y.vonStr} – ${y.bisStr}`)})),[...v,"",`Arbeitszeit (netto): ${h}`,`Soll: ${u}`,`Pause (abgezogen): ${g}`]}}}},scales:{x:{ticks:{color:a.fgMuted,font:{size:10},maxRotation:60,minRotation:60,autoSkip:!0,maxTicksLimit:40},grid:{display:!1}},y:{min:i,max:l,ticks:{color:a.fgMuted,stepSize:60,callback:c=>o(c)},grid:{color:a.border}}}}})}function an(e,t){const a=O();B(e);const n={};for(const i of t){if(i.tagestyp!=="Stempelzeit"||!i.zeitSpannen||i.zeitSpannen.length<2)continue;const l=nt(i.zeitSpannen);if(l<=0)continue;const o=Math.round(l*60),c=Math.floor(o/15)*15;n[c]=(n[c]??0)+1}const s=Object.keys(n).map(Number).sort((i,l)=>i-l),r=s.map(i=>n[i]);return new L(e,{type:"bar",data:{labels:s.map(i=>`${i}–${i+14} min`),datasets:[{label:"Häufigkeit",data:r,backgroundColor:a.palette[1],borderRadius:4}]},options:{...M(a),plugins:{...M(a).plugins,legend:{display:!1},tooltip:{...M(a).plugins.tooltip,callbacks:{title:i=>`Pause-Länge (gestempelt): ${i[0].label}`,label:i=>`${i.parsed.y} Tag(e)`}}}}})}function nn(e,t){const a=O();B(e);const n=["MO","DI","MI","DO","FR"],s={},r={};for(const l of n)s[l]=0,r[l]=0;for(const l of t)n.includes(l.wochentag)&&(l.ist==null||l.ist===0||(s[l.wochentag]+=l.ist,r[l.wochentag]+=1));const i=n.map(l=>r[l]>0?s[l]/r[l]:0);return new L(e,{type:"bar",data:{labels:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"],datasets:[{label:"Ø Ist-Stunden",data:i,backgroundColor:a.palette[2],borderRadius:4}]},options:{...M(a),plugins:{...M(a).plugins,legend:{display:!1}}}})}function sn(e,t){const a=O();B(e);const n={};for(const i of t)!i.tagestyp||i.tagestyp==="Wochenende"||(n[i.tagestyp]=(n[i.tagestyp]??0)+1);const s=Object.keys(n),r=Object.values(n);return new L(e,{type:"doughnut",data:{labels:s,datasets:[{data:r,backgroundColor:s.map((i,l)=>a.palette[l%a.palette.length]),borderColor:a.surface,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:a.fgMuted,font:{size:12}}},tooltip:M(a).plugins.tooltip}}})}function rn(e,t){const a=O();B(e);const n={};for(const l of t){const o=l.wocheKey;n[o]??(n[o]={ist:0,soll:0}),n[o].ist+=l.ist??0,n[o].soll+=l.soll??0}const s=Object.keys(n).sort(),r=s.map(l=>n[l].ist),i=s.map(l=>n[l].soll);return new L(e,{type:"bar",data:{labels:s.map(l=>"KW "+l.split("-")[1]),datasets:[{label:"Ist",data:r,backgroundColor:a.palette[0],borderRadius:4},{label:"Soll",data:i,backgroundColor:a.palette[3],borderRadius:4}]},options:M(a)})}function ln(e,t){const a=O();B(e);const n=t.slice().sort((i,l)=>i.datum.localeCompare(l.datum));let s=0;const r=n.map(i=>(s+=i.diff??0,{x:i.datum,y:s}));return new L(e,{type:"line",data:{labels:r.map(i=>i.x),datasets:[{label:"Kumulative Differenz (+/- Soll)",data:r.map(i=>i.y),borderColor:a.palette[5],backgroundColor:I(a.palette[5],.15),fill:!0,tension:.2,pointRadius:0}]},options:{...M(a),scales:{x:{display:!1,grid:{display:!1}},y:{...M(a).scales.y}}}})}function rt(e,t,{monate:a=8}={}){if(!e)return;if(e.innerHTML="",!t.length){e.innerHTML='<p style="color: var(--fg-muted); font-size: 13px;">Keine Daten.</p>';return}const n=new Map(t.map(f=>[f.datum,f])),r=z(t[t.length-1].datum),i=a*30,l=ee(r,-i),o=Ze(l,{weekStartsOn:1}),c=Ne(r,o)+1,d=Math.ceil(c/7),h=document.createElement("div");h.className="heatmap-month-labels",h.style.gridTemplateColumns=`repeat(${d}, 14px)`,e.appendChild(h);let u=-1;for(let f=0;f<d;f++){const v=ee(o,f*7),y=v.getMonth(),m=document.createElement("span");m.textContent=y!==u?$(v,"MMM",{locale:j}):"",h.appendChild(m),u=y}const g=document.createElement("div");g.className="heatmap",g.style.gridAutoFlow="column",g.style.gridTemplateRows="repeat(7, 14px)",g.style.gridTemplateColumns=`repeat(${d}, 14px)`;for(let f=0;f<d*7;f++){const v=ee(o,f);if(v>r||v<l){const F=document.createElement("div");F.className="heatmap-cell",F.style.background="transparent",g.appendChild(F);continue}const y=$(v,"yyyy-MM-dd"),m=n.get(y),S=document.createElement("div");S.className="heatmap-cell",S.title=`${$(v,"EE, dd.MM.yyyy",{locale:j})}${(m==null?void 0:m.ist)!=null?" · Ist "+m.ist.toFixed(2)+"h":""}${(m==null?void 0:m.diff)!=null?" · "+(m.diff>=0?"+":"")+m.diff.toFixed(2):""}`,(m==null?void 0:m.diff)!=null&&(m.diff<=-1?S.classList.add("neg-2"):m.diff<-.05?S.classList.add("neg-1"):m.diff>=1?S.classList.add("pos-2"):m.diff>.05&&S.classList.add("pos-1")),g.appendChild(S)}e.appendChild(g)}function B(e){const t=L.getChart(e);t&&t.destroy()}function I(e,t){const a=e.replace("#","").trim();if(a.length!==6&&a.length!==3)return e;const n=a.length===3?a.split("").map(l=>l+l).join(""):a,s=parseInt(n.slice(0,2),16),r=parseInt(n.slice(2,4),16),i=parseInt(n.slice(4,6),16);return`rgba(${s}, ${r}, ${i}, ${t})`}function on(e,t,a,n){const{top:s,bottom:r}=t,i=e.createLinearGradient(0,s,0,r),l=a.min,o=a.max,c=o-l;if(c<=0)return I(n.success,.14);let d=(o-0)/c;return d=Math.max(0,Math.min(1,d)),i.addColorStop(0,I(n.success,.28)),i.addColorStop(Math.max(0,d-.001),I(n.success,.06)),i.addColorStop(Math.min(1,d+.001),I(n.danger,.06)),i.addColorStop(1,I(n.danger,.28)),i}function cn(e,t){const a=String(e??"").toLowerCase();return a.includes("stempel")?t.palette[0]:a.includes("berufs")?t.palette[1]:a.includes("urlaub")?t.palette[2]:a.includes("feiertag")?t.fgSubtle:a.includes("dienst")?t.palette[3]:a.includes("krank")?t.palette[4]:t.palette[5]}let dn=0;function ye(e,{type:t="info",duration:a=3500}={}){const n=document.getElementById("toast-root");if(!n)return;const s=document.createElement("div");s.className=`toast ${t}`,s.textContent=e,s.dataset.id=++dn,n.appendChild(s),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateY(-8px)",s.style.transition="opacity 220ms, transform 220ms",setTimeout(()=>s.remove(),250)},a)}function we(e){return ye(e,{type:"error",duration:6e3})}function D(e){return ye(e,{type:"success"})}const Te=[{key:7,label:"1 Woche"},{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:"alles",label:"Alles"}];async function Ee({root:e}){var m,S,F,Z;const[t,a,n,s,r]=await Promise.all([H(),te(),C(),oa(),Yt("dashboardZeitraum",14)]);if(n.length===0){e.innerHTML=mn();return}const i=!((S=(m=t.berufsschulMuster)==null?void 0:m.wochentageWoechentlich)!=null&&S.length||(Z=(F=t.berufsschulMuster)==null?void 0:F.wochentage14Taegig)!=null&&Z.length),l=qa(n,a),o=l.length;let c=r;typeof c=="number"&&c>o&&(c="alles");const d=new Set(s.map(b=>b.key)),h=ve(n,t,new Date,d),u=it(a,d),g=[...h,...u],f=Ua(l),v=f>.05?"positive":f<-.05?"negative":"";e.innerHTML=`
    <h1 class="view-title">Dashboard</h1>
    <p class="view-subtitle">Stand: ${_(w(new Date(n[n.length-1].datum)))}</p>

    <div class="saldo-hero" style="margin-bottom: 32px; align-items: stretch;">
      <div class="saldo-hero-text" style="min-width: 260px;">
        <h3>Aktueller Gleitzeit-Saldo</h3>
        <div class="saldo-value ${v}">${P(f,{signed:!0,suffix:""})}</div>
        <div class="saldo-unit">Stunden · tagesaktuell</div>
        <div id="hero-bewegung" class="saldo-trend flat" style="margin-top: 12px;"></div>
      </div>
      <div style="flex: 1; min-width: 400px; display: flex; flex-direction: column;">
        <div class="card-split" style="margin-bottom: 12px; align-items: center;">
          <h3 style="margin: 0;">Verlauf</h3>
          <div class="segmented" id="zeitraum-picker">
            ${Te.map(b=>{const k=typeof b.key=="number"&&b.key>o;return`<button type="button" data-key="${b.key}" class="${c===b.key?"active":""}" ${k?'disabled style="opacity:0.4"':""}>${b.label}</button>`}).join("")}
          </div>
        </div>
        <div style="flex: 1; height: 220px;"><canvas id="saldo-chart"></canvas></div>
      </div>
    </div>

    ${i?`
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

    ${g.length>0?`
      <div class="card" style="margin-bottom: 32px;">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Offene Warnungen</h2>
          <a href="#/mails" class="btn sm">Alle verwalten →</a>
        </div>
        ${g.slice(0,5).map(b=>fn(b)).join("")}
        ${g.length>5?`<div style="margin-top: 12px; color: var(--fg-muted); font-size: 13px; text-align: center;">+ ${g.length-5} weitere → <a href="#/mails" style="color: var(--accent);">alle ansehen</a></div>`:""}
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
          ${Te.map(b=>{const k=typeof b.key=="number"&&b.key>o;return`<button type="button" data-key="${b.key}" class="${c===b.key?"active":""}" ${k?'disabled style="opacity:0.4"':""}>${b.label}</button>`}).join("")}
        </div>
      </div>
      <div id="tage-liste"></div>
    </div>

    <div class="card">
      <h2>Heatmap (letzte 4 Monate)</h2>
      <div id="mini-heatmap" style="overflow-x: auto; padding-top: 12px;"></div>
    </div>
  `,Le(c,e,l);const y=()=>e.querySelectorAll("#zeitraum-picker button, #zeitraum-picker-2 button");y().forEach(b=>{b.addEventListener("click",async()=>{if(b.disabled)return;const k=b.getAttribute("data-key"),T=k==="alles"?"alles":parseInt(k,10);y().forEach(N=>N.classList.toggle("active",N.getAttribute("data-key")===k)),await Qt("dashboardZeitraum",T),Le(T,e,l)})}),requestAnimationFrame(()=>{rt(e.querySelector("#mini-heatmap"),n,{monate:4})}),e.addEventListener("click",async b=>{const k=b.target.closest(".ist-copy");if(k){b.preventDefault(),b.stopPropagation();const ke=k.getAttribute("data-val");try{await navigator.clipboard.writeText(ke),k.classList.add("ok");const G=k.querySelector(".ist-wert"),oe=k.querySelector(".copy-icon");if(G&&oe){const gt=G.textContent;G.textContent="✓ kopiert",oe.style.display="none",setTimeout(()=>{k.classList.remove("ok"),G.textContent=gt,oe.style.display=""},1e3)}}catch{D(`Bitte kopieren: ${ke}`)}return}const T=b.target.closest(".btn-dismiss");if(!T)return;const N=T.getAttribute("data-datum"),$e=T.getAttribute("data-typ");if(!N||!$e)return;await la(N,$e),D("Warnung ausgeblendet.");const Se=T.closest(".alert");Se&&(Se.style.display="none")})}function Le(e,t,a){const n=Ja(a,e),s=Ya(n);requestAnimationFrame(()=>{const o=t.querySelector("#saldo-chart");Qa(o,n)});const r=t.querySelector("#hero-bewegung");if(r){const o=s>.05?"up":s<-.05?"down":"flat",c=s>.05?"↑":s<-.05?"↓":"→";r.className=`saldo-trend ${o}`,r.innerHTML=`${c} ${Math.abs(s)<.01?"Unverändert":P(s,{signed:!0})} im Zeitraum`}const i=t.querySelector("#tage-info");if(i){const o=n.length;i.textContent=`${o} ${o===1?"Tag":"Tage"}`}const l=t.querySelector("#tage-liste");l&&(l.innerHTML=un(n.slice().reverse()))}function un(e){if(!e.length)return'<p class="hint">Keine Tage im Zeitraum.</p>';const t=Math.max(1,...e.map(s=>Math.abs(s.diff??0))),a=[];let n=null;for(const s of e)(!n||n.key!==s.wocheKey)&&(n={key:s.wocheKey,tage:[]},a.push(n)),n.tage.push(s);return`<div class="tages-liste">${a.map(s=>gn(s,t)).join("")}</div>`}function gn(e,t){var d;const a=e.tage.reduce((h,u)=>h+(u.ist??0),0),n=e.tage.reduce((h,u)=>h+(u.diff??0),0),s=(d=e.tage[0])==null?void 0:d.datum,r=s?Ia(z(s)):"",i=e.key?e.key.split("-")[1]:"?",l=n>.05?"pos":n<-.05?"neg":"flat",o=(n>0?"+":"")+n.toFixed(2).replace(".",",")+"h",c=a.toFixed(2).replace(".",",")+"h";return`
    <div class="woche-group">
      <div class="woche-header">
        <div class="woche-header-titel">
          <span class="woche-header-kw">KW ${_(i)}</span>
          <span class="woche-header-range tabular">${_(r)}</span>
        </div>
        <div class="woche-header-stats">
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Ist</span>
            <span class="woche-header-ist tabular">${c}</span>
          </span>
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Diff</span>
            <span class="woche-header-diff tabular ${l}">${o}</span>
          </span>
        </div>
      </div>
      <div class="woche-tage">
        ${e.tage.map(h=>hn(h,t)).join("")}
      </div>
    </div>
  `}function hn(e,t){const a=e.diff??0,n=a>0,s=Math.min(100,Math.abs(a)/t*100),r=n?"var(--success)":a<0?"var(--danger)":"var(--fg-subtle)",i=re(e.zeitSpannen);return`
    <a href="#/tag/${e.datum}" class="tag-row">
      <div class="tag-row-datum">
        <div class="tabular">${_(w(new Date(e.datum)))}</div>
        <div class="tag-row-wd">${pn(e.wochentag)}</div>
      </div>
      <div class="tag-row-typ">
        ${e.tagestyp?`<span class="pill ${vn(e.tagestyp)}">${_(e.tagestyp)}</span>`:'<span style="color: var(--fg-subtle); font-size: 12px;">—</span>'}
      </div>
      <div class="tag-row-kg">
        ${le(i,{size:18})}
      </div>
      <div class="tag-row-ist tabular">
        ${e.ist!=null&&e.ist>0?`<button class="ist-copy" data-val="${V(e.ist)}" title="Kopieren für IHK-Berichtsheft"><span class="ist-wert">${V(e.ist)}</span><span class="copy-icon" aria-hidden="true">⧉</span></button>`:`<div class="ist-wert">${e.ist!=null?V(e.ist):"—"}</div>`}
        <div style="color: var(--fg-subtle); font-size: 11px;">Soll ${e.soll!=null?V(e.soll):"—"}</div>
      </div>
      <div class="tag-row-bar">
        <div class="bar-track">
          <div class="bar-zero"></div>
          <div class="bar-fill ${n?"pos":"neg"}" style="width: ${s}%; background: ${r};"></div>
        </div>
      </div>
      <div class="tag-row-diff tabular" style="color: ${n?"var(--success)":a<0?"var(--danger)":"var(--fg-muted)"};">
        ${a!==0?(n?"+":"")+a.toFixed(2).replace(".",",")+"h":"0,00h"}
      </div>
      <div class="tag-row-saldo tabular" style="color: var(--fg-muted); font-size: 12px;">
        ${e.saldo>=0?"+":""}${e.saldo.toFixed(2).replace(".",",")}h
      </div>
    </a>
  `}function fn(e){const t=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${t}</div>
      <div class="alert-body">
        <div class="alert-title">${_(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${_(e.beschreibung)}</p>
        <div class="alert-actions">
          ${e.mailVorlageKey?'<a href="#/mails" class="btn primary sm">✉ Mail schreiben</a>':""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
          <button class="btn ghost sm btn-dismiss" data-datum="${Ke(e.datum)}" data-typ="${Ke(e.typ)}">Ausblenden</button>
        </div>
      </div>
    </div>
  `}function mn(){return`
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
  `}function pn(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function vn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function _(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ke(e){return _(e)}const bn="/zeitnachweis-app/assets/pdf.worker.min-yatZIOMy.mjs";Wt.workerSrc=bn;const We={Januar:1,Februar:2,März:3,Maerz:3,April:4,Mai:5,Juni:6,Juli:7,August:8,September:9,Oktober:10,November:11,Dezember:12},yn=["Stempelzeit","Berufsschule Std. bez","Berufsschule","Dienstreise Arbeitszeit","Reise öff.VM/PKW Beifahr.","Reise öff.VM/PKW","Urlaub","Gleitzeit","Arbeitsunfähigkeit","TgDtEinh","Neujahr","Karfreitag","Ostermontg","Ostmontg","Osterso.","Hl.3 Kön.","Allerhlg","Pfingstmo","Fronleichn","TdDtEinh"];async function wn(e){const a=await Ft({data:e}).promise,n=[];for(let l=1;l<=a.numPages;l++){const c=await(await a.getPage(l)).getTextContent(),d=Mn(c.items);for(const h of d)n.push({page:l,text:h})}const s=$n(n),{tage:r,monate:i}=Sn(n);return{meta:s,tage:r,monate:i}}function Mn(e){if(!e.length)return[];const t=e.slice().sort((i,l)=>{const o=l.transform[5]-i.transform[5];return Math.abs(o)>2?o:i.transform[4]-l.transform[4]}),a=[];let n=null,s=[];const r=3;for(const i of t){const l=i.transform[5];n==null||Math.abs(l-n)<=r?(s.push(i),n==null&&(n=l)):(a.push(Fe(s)),s=[i],n=l)}return s.length&&a.push(Fe(s)),a.filter(i=>i.trim().length>0)}function Fe(e){e.sort((n,s)=>n.transform[4]-s.transform[4]);let t="",a=-1;for(const n of e){const s=n.transform[4];a>=0&&s-a>4?t+="  ":a>=0&&s-a>.5&&(t+=" "),t+=n.str,a=s+n.width}return t}function $n(e){var a,n;const t={personalnummer:null,name:null,kostenstelle:null,personalbereich:null,einstellungsdatum:null,mitarbeiterkreis:null,arbeitszeitplanregel:null,zeitraumVon:null,zeitraumBis:null,stichtagAuswertung:null};for(let s=0;s<e.length;s++){const r=e[s].text,i=/vom\s+(\d{2}\.\d{2}\.\d{4})\s+bis\s+(\d{2}\.\d{2}\.\d{4})/i.exec(r);i&&(t.zeitraumVon=X(i[1]),t.zeitraumBis=X(i[2]));const l=/bis einschließlich dem\s+(\d{2}\.\d{2}\.\d{4})/i.exec(r);if(l&&(t.stichtagAuswertung=X(l[1])),/Personalnummer/i.test(r)&&/Kostenstelle/i.test(r)){const c=(((a=e[s+1])==null?void 0:a.text)??"").trim().split(/\s{2,}/);c.length>=3&&(t.personalnummer=c[0],t.kostenstelle=c[1],t.personalbereich=c[2])}if(/Einstellungsdatum/i.test(r)&&/Mitarbeiterkreis/i.test(r)){const c=(((n=e[s+1])==null?void 0:n.text)??"").trim().split(/\s{2,}/);c.length>=3&&(t.einstellungsdatum=X(c[0]),t.mitarbeiterkreis=c[1],t.arbeitszeitplanregel=c[2])}if(/Bei Rückfragen wenden Sie sich an/i.test(r))for(let o=s+1;o<Math.min(s+8,e.length);o++){const c=e[o].text.trim();if(/^[A-ZÄÖÜ][a-zäöüß]+(?:\s[A-ZÄÖÜ][a-zäöüß]+)+$/.test(c)&&!/kanarya/i.test(c)&&!/tel/i.test(c)){t.name=c;break}}}return t}function Sn(e,t){var o;const a=[],n=[];let s=null,r=null,i=!1,l=0;for(;l<e.length;){const c=e[l].text,d=/Monat:\s*([A-Za-zäöüÄÖÜß]+)\s*-\s*(\d{4})/.exec(c);if(d){const f=d[1].trim(),v=parseInt(d[2],10),y=We[f]??We[f.replace("ä","ae")]??null;y&&(s={jahr:v,monat:y,monatKey:`${v}-${String(y).padStart(2,"0")}`},i=!0,r=null),l++;continue}if(/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.test(c)){const f=/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.exec(c),v=X(f[1]);r={monatKey:(s==null?void 0:s.monatKey)??tt(v),stichtag:v,glz:{},flexi:{},zeitkonten:{},raw:{}},l=kn(e,l+1,r),n.push(r);continue}let h=s;const u=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)\b/.exec(c.trim());if(u&&s){const f=parseInt(u[1],10);i&&f>=20?h=Dn(s):f<=15&&(i=!1)}const g=Ce(c,h);if(g){const f=[];let v=l+1;for(;v<e.length;){const m=e[v].text;if(/^\s*\d{4}\s+Umbuchung/.test(m)||Ce(m,s)||/Wochensumme/i.test(m)||/Monats.bersicht/i.test(m)||/Monat:\s*[A-Za-z]/i.test(m))break;const S=xn(m);if(S){f.push(S),v++;continue}break}if(f.length&&g.zeitSpannen.push(...f),g.tagestyp==="Wochenende"||g.wochentag==="SA"||g.wochentag==="SO"){l=v;continue}(g.ist!=null||g.soll!=null||(((o=g.zeitSpannen)==null?void 0:o.length)??0)>0||g.tagestyp!=null)&&a.push(g),l=v;continue}l++}return{tage:a,monate:n}}function kn(e,t,a){let n=t;const s=/(\d{4,5}|KTAU|AZAU)\s*-\s*(.+?)\s+(-?[\d,.]+-?)(?=\s+(?:\d{4,5}|KTAU|AZAU)\s*-|\s*$)/g;for(;n<e.length;){const r=e[n].text.trim();if(/^Monat:\s/.test(r)||/^Einzelergebnisse\s/.test(r)||/^Tag\b/.test(r)||/^Wochensumme/.test(r)||/^\d{2}\s+(MO|DI|MI|DO|FR|SA|SO)\b/.test(r)||/^Übersicht für den Zeitraum/i.test(r)||/^Abwesenheitsansprüche/i.test(r))break;s.lastIndex=0;let i;for(;(i=s.exec(r))!=null;){const l=i[1],o=i[2].trim(),c=Xe(i[3]);a.raw[l]={beschreibung:o,wert:c},l==="0008"&&(a.glz.saldoVorperiode=c),l==="8016"&&(a.glz.saldoAktuellePeriode=c),l==="9802"&&(a.glz.umgebuchteStunden=c),l==="0005"&&(a.glz.saldoGesamt=c),l==="9803"&&(a.glz.ueberzaehligeStd=c),l==="0050"&&(a.zeitkonten.produktivstunden=c),l==="9011"&&(a.flexi.jahreskontoVorperiode=c),l==="9010"&&(a.flexi.jahreskontoSaldo=c),l==="9020"&&(a.flexi.langzeitkontoSaldo=c),l==="9203"&&(a.zeitkonten.azMonatsendeUeber216=c),l==="9207"&&(a.zeitkonten.auszahlungBav=c),l==="9205"&&(a.zeitkonten.summeAuszahlung=c)}if(n++,n-t>80)break}return n}function Ce(e,t){if(!t)return null;const a=e.trim(),n=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)(?:\s+(.+))?$/.exec(a);if(!n)return null;const s=parseInt(n[1],10),r=n[2],i=(n[3]??"").trim();let l=t.jahr,o=t.monat;const c=new Date(l,o-1,s),d={datum:_a(c),datumDate:c.toISOString(),wochentag:r,tagNr:s,monatKey:tt(c),wocheKey:Va(c),zeitSpannen:[],aktivitaeten:[],ist:null,soll:null,diff:null,pause:null,tazp:null,tagestyp:null,raw:a};return i?(zn(i,d),d):(d.tagestyp=["SA","SO"].includes(r)?"Wochenende":null,d)}function xn(e){const t=e.trim(),a=/^(Stempelzeit|Reise öff\.VM\/PKW Beifahr\.|Reise öff\.VM\/PKW|Dienstreise Arbeitszeit)\s+(\d{2}:\d{2})\s+(\d{2}:\d{2})\s*$/.exec(t);return a?{aktivitaet:a[1],von:a[2],bis:a[3]}:null}function zn(e,t){let a=null,n=e;for(const d of yn)if(e.startsWith(d)){a=d,n=e.slice(d.length).trim();break}a||(a=e.split(/\s+/)[0],n=e.slice(a.length).trim()),t.tagestyp=An(a),t.aktivitaeten.push(a);const s=n.split(/\s+/).filter(Boolean),r=/^\d{2}:\d{2}$/,i=/^-?[\d,.]+-?$/;let l=0;for(;s[l]&&r.test(s[l])&&s[l+1]&&r.test(s[l+1]);)t.zeitSpannen.push({aktivitaet:a,von:s[l],bis:s[l+1]}),l+=2;const o=[];for(;l<s.length&&i.test(s[l]);){const d=Xe(s[l]);d!=null&&o.push(d),l++}let c=s[l];o.length>=5?([t.ist,t.soll,t.diff,t.pause]=o,c||(c=String(o[4]))):o.length===4?[t.ist,t.soll,t.diff,t.pause]=o:o.length===3?[t.ist,t.soll,t.diff]=o:o.length===2?[t.ist,t.soll]=o:o.length===1&&(t.ist=o[0]),c&&(t.tazp=String(c))}function Dn(e){if(!e)return null;let t=e.monat-1,a=e.jahr;return t<1&&(t=12,a-=1),{jahr:a,monat:t,monatKey:`${a}-${String(t).padStart(2,"0")}`}}function An(e){return e?/^Stempelzeit$/i.test(e)?"Stempelzeit":/^Berufsschule Std\. bez$/i.test(e)||/^Berufsschule$/i.test(e)?"Berufsschule":/Dienstreise/i.test(e)||/Reise/i.test(e)?"Dienstreise":/^Urlaub$/i.test(e)?"Urlaub":/^Gleitzeit$/i.test(e)?"Gleitzeit":/Arbeitsunf.higkeit/i.test(e)?"Arbeitsunfähigkeit":/^(Neujahr|Karfreitag|Ostermontg|Ostmontg|Osterso\.|Hl\.3 Kön\.|Allerhlg|Pfingstmo|Fronleichn|TdDtEinh|TgDtEinh)$/i.test(e)?"Feiertag":e:null}async function Pn({root:e}){const t=await Qe(),a=await H();e.innerHTML=`
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
        ${t.length===0?'<div class="empty-state"><div class="empty-state-icon">📭</div><p>Noch keine Uploads</p></div>':lt(t)}
      </div>
    </div>
  `;const n=e.querySelector("#upload-zone"),s=e.querySelector("#file-input");n.addEventListener("click",()=>s.click()),n.addEventListener("dragover",r=>{r.preventDefault(),n.classList.add("drag")}),n.addEventListener("dragleave",()=>n.classList.remove("drag")),n.addEventListener("drop",async r=>{var l;r.preventDefault(),n.classList.remove("drag");const i=(l=r.dataTransfer.files)==null?void 0:l[0];i&&await Oe(i,e,a)}),s.addEventListener("change",async r=>{var l;const i=(l=r.target.files)==null?void 0:l[0];i&&await Oe(i,e,a)}),e.querySelector("#btn-export").addEventListener("click",En),e.querySelector("#btn-import").addEventListener("click",()=>e.querySelector("#import-input").click()),e.querySelector("#import-input").addEventListener("change",Ln),e.querySelector("#btn-clear-parsed").addEventListener("click",Tn),e.querySelector("#btn-reset").addEventListener("click",Kn)}async function Tn(){confirm("PDF-abgeleitete Daten (Tage, Monate, Uploads) werden gelöscht. Profil und Mail-Vorlagen bleiben erhalten. Fortfahren?")&&(await na(),D("Daten gelöscht. Profil bleibt."),setTimeout(()=>location.reload(),600))}function lt(e){return`
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
            <td>${R(Wn(t.hochladeDatum))}</td>
            <td>${R(t.dateiname||"—")}</td>
            <td>${t.zeitraumVon?R(w(new Date(t.zeitraumVon))):"—"} – ${t.zeitraumBis?R(w(new Date(t.zeitraumBis))):"—"}</td>
            <td>${t.stichtagAuswertung?R(w(new Date(t.stichtagAuswertung))):"—"}</td>
            <td class="num">${t.tageCount??"—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}async function Oe(e,t,a){var r,i,l;const n=t.querySelector("#upload-status"),s=t.querySelector("#upload-zone");s.style.pointerEvents="none",s.style.opacity="0.6",n.innerHTML=`
    <div class="alert severity-info">
      <div class="loader-ring" style="width: 24px; height: 24px; border-width: 2px;"></div>
      <div class="alert-body">
        <div class="alert-title">PDF wird verarbeitet…</div>
        <p style="margin: 4px 0; font-size: 13px;"><strong>${R(e.name)}</strong> — das kann bei großen PDFs einige Sekunden dauern.</p>
      </div>
    </div>`;try{const o=await e.arrayBuffer(),c=await wn(o);await Xt(c.tage),await ea(c.monate),await ta({dateiname:e.name,zeitraumVon:((r=c.meta.zeitraumVon)==null?void 0:r.toISOString())??null,zeitraumBis:((i=c.meta.zeitraumBis)==null?void 0:i.toISOString())??null,stichtagAuswertung:((l=c.meta.stichtagAuswertung)==null?void 0:l.toISOString())??null,tageCount:c.tage.length,monateCount:c.monate.length});const d=await C(),h=at(d),u={...Ye(),...a};(h.wochentageWoechentlich.length>0||h.wochentage14Taegig.length>0)&&(u.berufsschulMuster=h),await me(u),n.innerHTML=`
      <div class="alert severity-info" style="border-color: var(--success); background: var(--success-bg);">
        <div class="alert-icon" style="background: var(--success);">✓</div>
        <div class="alert-body">
          <div class="alert-title">PDF erfolgreich eingelesen</div>
          <p style="margin: 4px 0; font-size: 13px;">
            ${c.tage.length} Tage · ${c.monate.length} Monatsübersichten
            ${c.meta.zeitraumVon?` · Zeitraum: ${w(c.meta.zeitraumVon)} – ${w(c.meta.zeitraumBis)}`:""}
          </p>
          <div class="alert-actions">
            <a href="#/" class="btn primary sm">Zum Dashboard</a>
            <a href="#/monat" class="btn sm">Monate ansehen</a>
          </div>
        </div>
      </div>
    `,D(`PDF verarbeitet: ${c.tage.length} Tage.`);const g=await Qe();t.querySelector("#uploads-list").innerHTML=lt(g)}catch(o){console.error(o),n.innerHTML=`
      <div class="alert severity-error">
        <div class="alert-icon">!</div>
        <div class="alert-body">
          <div class="alert-title">Fehler beim Parsen</div>
          <p style="margin: 4px 0; font-size: 13px;">${R(o.message||String(o))}</p>
          <p style="margin: 4px 0; font-size: 12px; color: var(--fg-muted);">Prüfe, ob es sich um einen Putzmeister-SAP-Zeitnachweis handelt. Bei einem anderen Layout kann der Parser fehlschlagen.</p>
        </div>
      </div>
    `,we("PDF konnte nicht gelesen werden.")}finally{s.style.pointerEvents="",s.style.opacity=""}}async function En(){try{const e=await sa(),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),a=URL.createObjectURL(t),n=document.createElement("a"),s=new Date().toISOString().slice(0,10);n.href=a,n.download=`zeitnachweis-backup-${s}.json`,n.click(),URL.revokeObjectURL(a),D("Backup heruntergeladen.")}catch(e){we(`Export fehlgeschlagen: ${e.message}`)}}async function Ln(e){var a;const t=(a=e.target.files)==null?void 0:a[0];if(t)try{const n=await t.text(),s=JSON.parse(n);if(!confirm("Existierende Daten werden überschrieben. Fortfahren?"))return;await ia(s),D("Backup erfolgreich importiert. Seite wird neu geladen…"),setTimeout(()=>location.reload(),800)}catch(n){we(`Import fehlgeschlagen: ${n.message}`)}}async function Kn(){confirm("ALLE Daten endgültig löschen? Das lässt sich nicht rückgängig machen.")&&confirm("Wirklich alle Daten löschen? Letzte Warnung.")&&(await aa(),D("Alle Daten gelöscht."),setTimeout(()=>location.reload(),600))}function Wn(e){if(!e)return"—";const t=new Date(e);return t.toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"})+" "+t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}const Be={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag"};async function Fn({root:e}){var s,r,i,l;const t=await H(),a=t.berufsschulMuster??{},n=(((s=a.wochentageWoechentlich)==null?void 0:s.length)??0)>0||(((r=a.wochentage14Taegig)==null?void 0:r.length)??0)>0;e.innerHTML=`
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
          <input type="email" name="zeitwirtschaftEmail" value="${Ie(t.zeitwirtschaftEmail)}" />
        </div>
        <div class="form-group">
          <label>Anrede in Mails</label>
          <input type="text" name="zeitwirtschaftAnrede" value="${Ie(t.zeitwirtschaftAnrede)}" placeholder="Frau Kanarya" />
        </div>
      </div>

      <div class="card" style="grid-column: 1 / -1;">
        <h2>Berufsschul-Rhythmus <span style="font-size: 11px; font-weight: 500; color: var(--fg-subtle); text-transform: uppercase; letter-spacing: 0.05em; margin-left: 8px;">Automatisch erkannt</span></h2>
        ${n?`
          <div class="tag-detail">
            <div class="tag-detail-label">Wöchentlich</div>
            <div class="tag-detail-value"><strong>${((i=a.wochentageWoechentlich)==null?void 0:i.map(o=>Be[o]).join(", "))||"—"}</strong></div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Alle 2 Wochen</div>
            <div class="tag-detail-value"><strong>${((l=a.wochentage14Taegig)==null?void 0:l.map(o=>Be[o]).join(", "))||"—"}</strong>${a.referenzDatum14Taegig?` <span class="hint">(Anker: ${w(new Date(a.referenzDatum14Taegig))})</span>`:""}</div>
          </div>
          <p class="hint" style="margin-top: 16px;">Das Muster wird bei jedem PDF-Upload neu aus den Daten abgeleitet. Je länger der erfasste Zeitraum, desto präziser.</p>
        `:`
          <p class="hint">Noch kein Muster erkannt. Lade unter <a href="#/daten" style="color: var(--accent);">Daten</a> einen Zeitnachweis hoch — das Muster wird automatisch aus den Berufsschul-Tagen abgeleitet.</p>
        `}
      </div>

      <div style="grid-column: 1 / -1; display: flex; gap: 12px;">
        <button type="submit" class="btn primary">Speichern</button>
        <a href="#/" class="btn">Abbrechen</a>
      </div>
    </form>
  `,e.querySelector("#profil-form").addEventListener("submit",async o=>{var h,u;o.preventDefault();const c=new FormData(o.target),d={...t,ueber18:c.get("ueber18")==="on",zeitwirtschaftEmail:((h=c.get("zeitwirtschaftEmail"))==null?void 0:h.trim())||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:((u=c.get("zeitwirtschaftAnrede"))==null?void 0:u.trim())||"Frau Kanarya"};await me(d),D("Profil gespeichert.")})}function Ie(e){return String(e??"").replace(/"/g,"&quot;")}async function Cn({root:e}){var s;const t=await te(),a=await C(),n={};for(const r of a)n[s=r.monatKey]??(n[s]=[]),n[r.monatKey].push(r);if(t.length===0){e.innerHTML=Rn("Noch keine Monatsdaten. Lade zuerst ein PDF unter Daten hoch.");return}e.innerHTML=`
    <h1 class="view-title">Monate</h1>
    <p class="view-subtitle">${t.length} Monate erfasst. Klicke für Details.</p>

    <div class="grid cols-2">
      ${t.slice().reverse().map(r=>{var u;const l=(n[r.monatKey]??[]).filter(g=>g.ist!=null&&g.ist>0),o=l.reduce((g,f)=>g+(f.ist??0),0),c=l.reduce((g,f)=>g+(f.soll??0),0),d=o-c,h=(u=r.glz)==null?void 0:u.saldoGesamt;return`
          <a href="#/monat/${r.monatKey}" class="card" style="text-decoration: none; color: inherit; display: block;">
            <div class="card-split" style="margin-bottom: 12px;">
              <h2 style="margin: 0;">${ge(r.monatKey)}</h2>
              <span class="saldo-trend ${h>.05?"up":h<-.05?"down":"flat"}" style="margin: 0; font-size: 12px;">
                Saldo: <strong>${P(h??0,{signed:!0})}</strong>
              </span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 12px;">
              <div>
                <div style="color: var(--fg-subtle); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Arbeitstage</div>
                <div style="font-size: 22px; font-weight: 600;" class="tabular">${l.length}</div>
              </div>
              <div>
                <div style="color: var(--fg-subtle); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Ist / Soll</div>
                <div style="font-size: 14px; font-weight: 500;" class="tabular">${o.toFixed(1)} / ${c.toFixed(1)}h</div>
              </div>
              <div>
                <div style="color: var(--fg-subtle); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Diff</div>
                <div class="tabular ${d>.05?"positive":d<-.05?"negative":""}" style="font-size: 14px; font-weight: 500; color: ${d>.05?"var(--success)":d<-.05?"var(--danger)":"var(--fg)"};">${P(d,{signed:!0})}</div>
              </div>
            </div>
          </a>
        `}).join("")}
    </div>
  `}async function On({params:e,root:t}){const a=e.yyyymm,[n,s,r]=await Promise.all([C(),te(),H()]),i=s.find(c=>c.monatKey===a),l=n.filter(c=>c.monatKey===a).sort((c,d)=>c.datum.localeCompare(d.datum));if(!l.length){t.innerHTML=`<h1 class="view-title">Monat ${ge(a)}</h1><p class="view-subtitle">Keine Daten für diesen Monat.</p><a href="#/monat" class="btn">← Alle Monate</a>`;return}const o=ve(n,r,new Date).filter(c=>c.datum.startsWith(a));t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat" class="btn sm">← Alle Monate</a>
    </div>
    <h1 class="view-title">${ge(a)}</h1>
    <p class="view-subtitle">${l.length} Tage · ${o.length} Auffälligkeiten</p>

    ${i?Bn(i):""}

    <div class="card" style="margin-bottom: 24px;">
      <h2>Tagesbalken</h2>
      <div class="chart-wrap tall"><canvas id="chart-monat"></canvas></div>
    </div>

    ${o.length?`
      <div class="card" style="margin-bottom: 24px;">
        <h2>Auffälligkeiten</h2>
        ${o.map(c=>Vn(c)).join("")}
      </div>
    `:""}

    <div class="card">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Tage</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">Klicke auf ein Datum für Details</span>
      </div>
      ${In(l)}
    </div>
  `,be(t.querySelector("#chart-monat"),l)}function Bn(e){var n,s,r,i;const t=((n=e.glz)==null?void 0:n.saldoGesamt)??0;return`
    <div class="grid cols-4" style="margin-bottom: 24px;">
      <div class="card">
        <h3>GLZ-Saldo gesamt</h3>
        <div class="tabular ${t>0?"positive":t<0?"negative":""}" style="font-size: 28px; font-weight: 650;">${P(t,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Vorperiode</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${P(((s=e.glz)==null?void 0:s.saldoVorperiode)??0,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Akt. Periode</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${P(((r=e.glz)==null?void 0:r.saldoAktuellePeriode)??0,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Produktivstd.</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${P(((i=e.zeitkonten)==null?void 0:i.produktivstunden)??0,{suffix:""})}</div>
      </div>
    </div>
  `}function In(e){return`
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
        ${e.map(t=>{const a=t.diff>.05?"positive":t.diff<-.05?"negative":"",n=re(t.zeitSpannen);return`
            <tr>
              <td><a href="#/tag/${t.datum}" style="color: inherit; text-decoration: none;"><span class="tabular">${w(new Date(t.datum))}</span> <span style="color: var(--fg-subtle);">${t.wochentag}</span></a></td>
              <td>${t.tagestyp?`<span class="pill ${_n(t.tagestyp)}">${ne(t.tagestyp)}</span>`:"—"}</td>
              <td>${le(n,{size:18})}</td>
              <td class="num tabular">${t.ist!=null?t.ist.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular">${t.soll!=null?t.soll.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular ${a}">${t.diff!=null?P(t.diff,{signed:!0,suffix:""}):"—"}</td>
              <td class="num tabular">${t.pause!=null?t.pause.toFixed(2).replace(".",","):"—"}</td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `}function Vn(e){return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i"}</div>
      <div class="alert-body">
        <div class="alert-title">${ne(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${ne(e.beschreibung)}</p>
        ${e.mailVorlageKey?`<div class="alert-actions"><a href="#/mails" class="btn primary sm">Mail schreiben</a><a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a></div>`:""}
      </div>
    </div>
  `}function ge(e){const[t,a]=e.split("-"),n=new Date(parseInt(t),parseInt(a)-1,1);return $(n,"LLLL yyyy",{locale:j})}function _n(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function Rn(e){return`<div class="empty-state"><div class="empty-state-icon">📭</div><p>${ne(e)}</p><a href="#/daten" class="btn primary">Zu Daten</a></div>`}function ne(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function jn({root:e}){var s;const t=await C();if(!t.length){e.innerHTML='<h1 class="view-title">Wochen</h1><p class="view-subtitle">Noch keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a={};for(const r of t)a[s=r.wocheKey]??(a[s]={key:r.wocheKey,tage:[],ist:0,soll:0}),a[r.wocheKey].tage.push(r),a[r.wocheKey].ist+=r.ist??0,a[r.wocheKey].soll+=r.soll??0;const n=Object.keys(a).sort().reverse();e.innerHTML=`
    <h1 class="view-title">Wochen</h1>
    <p class="view-subtitle">${n.length} Wochen erfasst.</p>

    <div>
      ${n.map(r=>{const i=a[r],l=i.ist-i.soll,o=l>.05?"positive":l<-.05?"negative":"";return`
          <a href="#/woche/${r}" class="list-item">
            <div class="tabular" style="font-size: 16px; font-weight: 600; color: var(--fg-muted);">${se(ot(r))}</div>
            <div>
              <div class="list-item-title">Ist: ${i.ist.toFixed(2).replace(".",",")}h · Soll: ${i.soll.toFixed(2).replace(".",",")}h</div>
              <div class="list-item-sub">${i.tage.length} Tage erfasst</div>
            </div>
            <div class="tabular ${o}" style="font-weight: 600; font-size: 16px;">${P(l,{signed:!0})}</div>
            <div style="color: var(--fg-subtle);">→</div>
          </a>
        `}).join("")}
    </div>
  `}async function Hn({params:e,root:t}){const a=await C(),n=e.yyyykw,s=a.filter(o=>o.wocheKey===n).sort((o,c)=>o.datum.localeCompare(c.datum));if(!s.length){t.innerHTML=`<h1 class="view-title">KW ${se(n)}</h1><p>Keine Daten.</p><a href="#/woche" class="btn">← Alle Wochen</a>`;return}const r=s.reduce((o,c)=>o+(c.ist??0),0),i=s.reduce((o,c)=>o+(c.soll??0),0),l=r-i;t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/woche" class="btn sm">← Alle Wochen</a>
    </div>
    <h1 class="view-title">${se(ot(n))}</h1>
    <p class="view-subtitle">${s.length} Tage</p>

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${r.toFixed(2).replace(".",",")}h</div>
      </div>
      <div class="card">
        <h3>Soll-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${i.toFixed(2).replace(".",",")}h</div>
      </div>
      <div class="card">
        <h3>Differenz</h3>
        <div class="tabular ${l>.05?"positive":l<-.05?"negative":""}" style="font-size: 28px; font-weight: 650; color: ${l>.05?"var(--success)":l<-.05?"var(--danger)":"var(--fg)"};">${P(l,{signed:!0})}</div>
      </div>
    </div>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Tagesverteilung</h2>
      <div class="chart-wrap"><canvas id="chart-woche"></canvas></div>
    </div>

    <div class="card">
      <h2>Tage dieser Woche</h2>
      ${Zn(s)}
    </div>
  `,be(t.querySelector("#chart-woche"),s)}function Zn(e){return`
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
        ${e.map(t=>{const a=t.diff>.05?"positive":t.diff<-.05?"negative":"",n=re(t.zeitSpannen);return`
            <tr>
              <td><a href="#/tag/${t.datum}" style="color: inherit;"><span class="tabular">${$(z(t.datum),"dd.MM.yyyy")}</span> ${t.wochentag}</a></td>
              <td>${t.tagestyp?`<span class="pill ${Nn(t.tagestyp)}">${se(t.tagestyp)}</span>`:"—"}</td>
              <td>${le(n,{size:18})}</td>
              <td class="num tabular">${t.ist!=null?t.ist.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular">${t.soll!=null?t.soll.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular ${a}">${t.diff!=null?P(t.diff,{signed:!0,suffix:""}):"—"}</td>
              <td class="num tabular">${t.pause!=null?t.pause.toFixed(2).replace(".",","):"—"}</td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `}function ot(e){const[t,a]=e.split("-");return`KW ${a} · ${t}`}function Nn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function se(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function Gn({params:e,root:t}){var c,d,h;const a=e.datum,n=await p.tage.get(a),s=await H();if(!n){t.innerHTML=`<h1 class="view-title">Tag nicht gefunden</h1><p>Für ${a} liegen keine Daten vor.</p><a href="#/" class="btn">← Dashboard</a>`;return}const r=z(a),i=n.tagestyp==="Stempelzeit"?st(n,s):null,l=pe(r,s.berufsschulMuster),o=re(n.zeitSpannen);t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat/${a.slice(0,7)}" class="btn sm">← Zum Monat</a>
    </div>
    <h1 class="view-title">${et(r)}</h1>
    <p class="view-subtitle">${n.tagestyp??"Kein Typ"} · KW ${(c=n.wocheKey)==null?void 0:c.split("-")[1]}</p>

    ${o?`
      <div class="card kommen-gehen-hero" style="margin-bottom: 24px;">
        <div class="hint" style="text-transform: uppercase; letter-spacing: 0.05em; font-size: 11px; margin-bottom: 10px;">Tages-Rahmen</div>
        ${le(o,{size:32})}
      </div>
    `:""}

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${n.ist!=null?n.ist.toFixed(2).replace(".",",")+"h":"—"}</div>
        <div class="hint">= ${n.ist!=null?V(n.ist):"—"}</div>
      </div>
      <div class="card">
        <h3>Soll-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${n.soll!=null?n.soll.toFixed(2).replace(".",",")+"h":"—"}</div>
      </div>
      <div class="card">
        <h3>Differenz</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${n.diff>.05?"var(--success)":n.diff<-.05?"var(--danger)":"var(--fg)"};">${n.diff!=null?P(n.diff,{signed:!0}):"—"}</div>
      </div>
    </div>

    <div class="grid cols-2" style="gap: 24px;">
      <div class="card">
        <h2>Zeitstempel</h2>
        ${(d=n.zeitSpannen)!=null&&d.length?n.zeitSpannen.map(u=>`
              <div class="tag-detail">
                <div class="tag-detail-label">${Q(u.aktivitaet??"Stempelzeit")}</div>
                <div class="tag-detail-value tabular">${u.von??"—"} – ${u.bis??"—"}</div>
              </div>
            `).join(""):'<p class="hint">Keine Stempelzeiten für diesen Tag.</p>'}
      </div>

      <div class="card">
        <h2>Klassifikation</h2>
        <div class="tag-detail">
          <div class="tag-detail-label">Tagestyp</div>
          <div class="tag-detail-value">${n.tagestyp?`<span class="pill ${qn(n.tagestyp)}">${Q(n.tagestyp)}</span>`:"—"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Laut Profil</div>
          <div class="tag-detail-value">${l?"🎓 Berufsschultag erwartet":"Regulärer Werktag"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">TAZP-Code</div>
          <div class="tag-detail-value"><code>${Q(n.tazp??"—")}</code></div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Monat</div>
          <div class="tag-detail-value">${Q(n.monatKey)}</div>
        </div>
      </div>

      ${i&&!i.keinAnspruch?`
        <div class="card" style="grid-column: 1 / -1;">
          <h2>Pausen-Analyse</h2>
          <div class="grid cols-2">
            <div>
              <div class="tag-detail">
                <div class="tag-detail-label">Arbeitszeit (netto)</div>
                <div class="tag-detail-value tabular">${(h=i.arbeitszeitOhnePause)==null?void 0:h.toFixed(2).replace(".",",")}h</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Gestempelte Pause</div>
                <div class="tag-detail-value tabular">${Math.round((i.gestempeltePause??0)*60)} min</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Abgezogene Pause</div>
                <div class="tag-detail-value tabular">${Math.round((i.abgezogenePause??0)*60)} min</div>
              </div>
            </div>
            <div>
              <div class="tag-detail">
                <div class="tag-detail-label">Gesetzl. Pflicht</div>
                <div class="tag-detail-value tabular">${Math.round((i.gesetzlichePflicht??0)*60)} min</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Angewendetes Gesetz</div>
                <div class="tag-detail-value">${i.gesetz==="jarbschg"?"JArbSchG §11 (Minderjährig)":"ArbZG §4 (Erwachsen)"}</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Legaler Abzug (Max aus gestempelt / Pflicht)</div>
                <div class="tag-detail-value tabular">${Math.round((i.legalerAbzug??0)*60)} min</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Unrechtmäßiger Pausen-Abzug</div>
                <div class="tag-detail-value tabular" style="color: ${(i.unrechtmaessigerVerlustMin??0)>0?"var(--danger)":"var(--fg)"};">${i.unrechtmaessigerVerlustMin??0} min</div>
              </div>
              ${i.aufstockungMin>0?`
              <div class="tag-detail">
                <div class="tag-detail-label">Gesetzliche Aufstockung</div>
                <div class="tag-detail-value tabular" style="color: var(--warn);">${i.aufstockungMin} min</div>
              </div>`:""}
            </div>
          </div>
          ${i.warnung?`
            <div class="alert severity-warn" style="margin-top: 12px;">
              <div class="alert-icon">⚠</div>
              <div class="alert-body">${Q(i.warnung)}</div>
            </div>
          `:""}
        </div>
      `:""}
    </div>
  `}function qn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function Q(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function Jn({root:e}){const[t,a]=await Promise.all([C(),te()]);if(!t.length){e.innerHTML='<h1 class="view-title">Analytics</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}e.innerHTML=`
    <h1 class="view-title">Analytics</h1>
    <p class="view-subtitle">${t.length} Tage über ${a.length} Monatsübersichten visualisiert.</p>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Saldo-Verlauf pro Monat</h2>
      <div class="chart-wrap tall"><canvas id="c-saldo"></canvas></div>
    </div>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Kalender-Heatmap (letzte 8 Monate)</h2>
      <p class="hint" style="margin-top: -8px; margin-bottom: 16px;">Grün = über Soll, Rot = unter Soll, Grau = neutral oder frei. Hover für Details.</p>
      <div id="heatmap" style="overflow-x: auto;"></div>
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
  `,requestAnimationFrame(()=>{en(e.querySelector("#c-saldo"),a),rt(e.querySelector("#heatmap"),t,{monate:8}),rn(e.querySelector("#c-istsoll"),t),ln(e.querySelector("#c-kumulativ"),t),tn(e.querySelector("#c-startend"),t),nn(e.querySelector("#c-wochentag"),t),an(e.querySelector("#c-pausen"),t),sn(e.querySelector("#c-donut"),t);const n=t.slice(-30);be(e.querySelector("#c-alle-tage"),n)})}async function Un({root:e}){const t=await C();if(!t.length){e.innerHTML='<h1 class="view-title">Berichtsheft</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a=[...new Set(t.map(r=>r.monatKey))].sort().reverse();e.innerHTML=`
    <h1 class="view-title">Berichtsheft-Export</h1>
    <p class="view-subtitle">Kopiere die Arbeitsstunden im HH:MM-Format direkt in dein Berichtsheft.</p>

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 16px; align-items: center;">
        <h2 style="margin: 0;">Filter</h2>
        <div style="display: flex; gap: 8px; align-items: center;">
          <label style="color: var(--fg-muted); font-size: 13px;">Monat:</label>
          <select id="filter-monat">
            <option value="">Alle</option>
            ${a.map(r=>`<option value="${r}">${Xn(r)}</option>`).join("")}
          </select>
          <button class="btn sm" id="btn-copy-all">Alle sichtbaren kopieren</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div id="liste"></div>
    </div>
  `;const n=e.querySelector("#filter-monat");n.addEventListener("change",()=>s()),e.querySelector("#btn-copy-all").addEventListener("click",()=>{const r=e.querySelectorAll("#liste tr[data-copy]"),i=Array.from(r).map(l=>l.getAttribute("data-copy")).join(`
`);navigator.clipboard.writeText(i).then(()=>D(`${r.length} Zeilen kopiert.`))});function s(){const r=n.value,l=(r?t.filter(o=>o.monatKey===r):t).filter(o=>o.ist!=null&&o.ist>0&&o.tagestyp!=="Wochenende");e.querySelector("#liste").innerHTML=Yn(l),e.querySelectorAll(".copy-val").forEach(o=>{o.addEventListener("click",async()=>{const c=o.getAttribute("data-val");await navigator.clipboard.writeText(c),o.classList.add("ok");const d=o.textContent;o.textContent="✓ kopiert",setTimeout(()=>{o.classList.remove("ok"),o.textContent=d},1200)})})}s()}function Yn(e){return e.length?`
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
        ${e.map(t=>{const a=V(t.ist),n=`${w(z(t.datum))}	${a}`;return`
            <tr data-copy="${Ve(n)}">
              <td class="tabular">${w(z(t.datum))}</td>
              <td>${Qn(t.wochentag)}</td>
              <td>${t.tagestyp?`<span class="pill ${es(t.tagestyp)}">${ct(t.tagestyp)}</span>`:"—"}</td>
              <td class="num tabular">${t.ist.toFixed(2).replace(".",",")}</td>
              <td class="num tabular" style="font-weight: 600;">${a}</td>
              <td><button class="copy-val" data-val="${Ve(a)}">📋 ${a}</button></td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `:'<p style="color: var(--fg-muted);">Keine Tage in dieser Auswahl.</p>'}function Qn(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function Xn(e){const[t,a]=e.split("-");return $(new Date(parseInt(t),parseInt(a)-1,1),"LLLL yyyy",{locale:j})}function es(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function ct(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ve(e){return ct(e)}const ts={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"},Me={bs_tag_fehlt:{key:"bs_tag_fehlt",titel:"Berufsschultag fehlt",beschreibung:"Wenn ein Berufsschultag komplett nicht im Zeitnachweis eingetragen wurde.",betreff:"Bitte um Zeitkorrektur im ESS  - Fehlender Berufsschultag {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

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

Vielen Dank!`}};function dt(e,t){const a=Me[e];return a?{...a,...t??{}}:null}function ut(e,t){const a=_e(e.text,t);return{betreff:_e(e.betreff,t),text:a}}function _e(e,t){return e.replace(/\{(\w+)\}/g,(a,n)=>t[n]!=null?String(t[n]):`{${n}}`)}function as(e,t){const a=t.datum?new Date(t.datum):null;return{name:"",personalnr:"",kostenstelle:"",datum:a?et(a).split(", ")[1]:"",wochentag:ts[t.wochentag]??t.wochentag??"",zeitwirtschaft_anrede:e.zeitwirtschaftAnrede||"Frau Kanarya",zeitwirtschaft_email:e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",ist:t.ist!=null?t.ist.toFixed(2).replace(".",","):"",soll:t.soll!=null?t.soll.toFixed(2).replace(".",","):"",abgezogen:t.abgezogen!=null?Math.round(t.abgezogen*60):"",gestempelt:t.gestempelt!=null?Math.round(t.gestempelt*60):"",verlust:t.verlustMinuten??""}}function ns(e,t,a){const n=ut(t,a),s=e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",r=new URLSearchParams;return r.set("subject",n.betreff),r.set("body",n.text),`mailto:${s}?${r.toString().replace(/\+/g,"%20")}`}async function ss({root:e}){const[t,a,n,s]=await Promise.all([C(),H(),te(),ra()]),r=Object.fromEntries(s.map(o=>[o.key,o])),i=ve(t,a,new Date).filter(o=>o.mailVorlageKey),l=it(n);e.innerHTML=`
    <h1 class="view-title">Mail-Vorlagen</h1>
    <p class="view-subtitle">Vorformulierte Mails an die Zeitwirtschaft bei erkannten Fehlern im Zeitnachweis.</p>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Offene Warnungen mit Mail-Vorschlag</h2>
      <p class="hint" style="margin-bottom: 16px;">Diese Warnungen haben einen roten Schweregrad und sind eine direkte Mail wert.</p>

      ${i.length===0?'<div class="empty-state"><div class="empty-state-icon">✓</div><p>Keine akuten Warnungen — top.</p></div>':i.map(o=>is(o,a,r)).join("")}

      ${l.length>0?`
        <h3 style="margin-top: 24px;">Saldo-Plausibilität</h3>
        ${l.map(o=>`
          <div class="alert severity-warn">
            <div class="alert-icon">⚠</div>
            <div class="alert-body">
              <div class="alert-title">${E(o.titel)}</div>
              <p style="margin: 4px 0; font-size: 13px;">${E(o.beschreibung)}</p>
            </div>
          </div>
        `).join("")}
      `:""}
    </div>

    <div class="card">
      <h2>Vorlagen verwalten</h2>
      <p class="hint" style="margin-bottom: 16px;">Passe die Texte an deinen Stil an. Platzhalter wie <code>{name}</code>, <code>{datum}</code>, <code>{wochentag}</code>, <code>{ist}</code>, <code>{soll}</code> werden automatisch gefüllt.</p>

      <div id="vorlagen-editor">
        ${Object.keys(Me).map(o=>{const c=dt(o,r[o]);return rs(c)}).join("")}
      </div>
    </div>
  `,ls(e),os(e)}function is(e,t,a){const n=dt(e.mailVorlageKey,a[e.mailVorlageKey]);if(!n)return"";const s=as(t,e),r=ut(n,s),i=ns(t,n,s);return`
    <div class="alert severity-${e.schweregrad}" style="flex-direction: column; align-items: stretch;">
      <div style="display: flex; align-items: flex-start; gap: 12px;">
        <div class="alert-icon">${e.schweregrad==="error"?"!":"⚠"}</div>
        <div class="alert-body">
          <div class="alert-title">${E(e.titel)}</div>
          <p style="margin: 4px 0; font-size: 13px;">${E(e.beschreibung)}</p>
        </div>
      </div>
      <details style="margin-top: 12px;">
        <summary style="cursor: pointer; color: var(--fg-muted); font-size: 13px;">Mail-Vorschau anzeigen</summary>
        <div style="background: var(--surface-2); border-radius: var(--radius-md); padding: 12px; margin-top: 8px; font-family: var(--font-mono); font-size: 12px; white-space: pre-wrap; line-height: 1.5;">
<strong>An:</strong> ${E(t.zeitwirtschaftEmail||"")}
<strong>Betreff:</strong> ${E(r.betreff)}

${E(r.text)}
        </div>
      </details>
      <div class="alert-actions" style="margin-top: 12px;">
        <a class="btn primary sm" href="${i}" target="_blank" rel="noopener">Mail Vorschlag in Outlook →</a>
        <button class="btn sm btn-copy-mail" data-subject="${he(r.betreff)}" data-body="${he(r.text)}">📋 Betreff + Text kopieren</button>
      </div>
    </div>
  `}function rs(e){return`
    <div class="vorlagen-item" data-key="${e.key}" style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
      <div class="card-split" style="margin-bottom: 12px;">
        <div>
          <h3 style="text-transform: none; letter-spacing: 0; color: var(--fg); font-size: 16px;">${E(e.titel)}</h3>
          <p class="hint" style="margin: 4px 0;">${E(e.beschreibung)}</p>
        </div>
        <button class="btn sm btn-reset-vorlage" data-key="${e.key}">Auf Default zurücksetzen</button>
      </div>
      <div class="form-group">
        <label>Betreff</label>
        <input type="text" class="v-betreff" value="${he(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 240px;">${E(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function ls(e){e.querySelectorAll(".btn-save-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-key"),n=t.closest(".vorlagen-item"),s=n.querySelector(".v-betreff").value,r=n.querySelector(".v-text").value;await De(a,{betreff:s,text:r}),D("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-key"),n=Me[a];n&&confirm(`Vorlage "${n.titel}" auf Default zurücksetzen?`)&&(await De(a,{betreff:n.betreff,text:n.text}),D("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function os(e){e.querySelectorAll(".btn-copy-mail").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-subject"),n=t.getAttribute("data-body"),s=`Betreff: ${a}

${n}`;await navigator.clipboard.writeText(s),D("Mail-Text kopiert.")})})}function E(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function he(e){return E(e)}async function cs({root:e}){const t=qe(),a=await H();e.innerHTML=`
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
  `,e.querySelectorAll("[data-theme]").forEach(n=>{n.addEventListener("click",()=>{const s=n.getAttribute("data-theme");fe(s),e.querySelectorAll("[data-theme]").forEach(r=>r.classList.toggle("active",r===n)),D(`Theme: ${n.textContent.trim()}`)})}),e.querySelector("#pause-sel").addEventListener("change",async n=>{const s={...a,pausenRegel:n.target.value};await me(s),D("Pausen-Regel gespeichert.")})}async function Re(){var t;Ct();const e=document.getElementById("content");(t=document.getElementById("theme-toggle"))==null||t.addEventListener("click",()=>Ot()),Bt(()=>{jt()}),await Ut()&&setTimeout(()=>{ye('Parser wurde aktualisiert. Bitte lade deinen Zeitnachweis unter "Daten" neu hoch.',{type:"info",duration:12e3})},500),await Jt(),await qt(),A("/",Ee),A("/dashboard",Ee),A("/analytics",Jn),A("/monat",Cn),A("/monat/:yyyymm",On),A("/woche",jn),A("/woche/:yyyykw",Hn),A("/tag/:datum",Gn),A("/berichtsheft",Un),A("/mails",ss),A("/profil",Fn),A("/daten",Pn),A("/einstellungen",cs),_t(e),location.hash||Vt("/")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Re):Re();
