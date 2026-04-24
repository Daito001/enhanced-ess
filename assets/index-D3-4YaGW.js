import{D as ut}from"./dexie-BODkcwel.js";import{b as oe,a as G,c as q,d as gt,f as z,e as X,i as je,p as ht,g as ft,h as mt,j as Ze,k as S,l as pt,s as vt}from"./datefns-ra-Z4Xqu.js";import{C as E,L as bt,B as yt,D as wt,S as Mt,a as $t,b as St,P as zt,A as kt,c as xt,d as Dt,T as At,p as Pt,e as Tt,i as Et}from"./chartjs-CRgZvhTJ.js";import{_ as Lt,a as Kt}from"./pdfjs-BDGsuRSB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();const se="theme";function Ft(){const e=localStorage.getItem(se)??"auto";he(e)}function he(e){e==="auto"?document.documentElement.removeAttribute("data-theme"):document.documentElement.setAttribute("data-theme",e),localStorage.setItem(se,e),Ot(e)}function Wt(){const e=localStorage.getItem(se)??"auto",t=e==="auto"?"light":e==="light"?"dark":"auto";return he(t),He(t),t}const ce=new Set;function Ct(e){return ce.add(e),()=>ce.delete(e)}function He(e){for(const t of ce)try{t(e)}catch(a){console.error(a)}}var Re;if(typeof window<"u"&&window.matchMedia){const e=window.matchMedia("(prefers-color-scheme: dark)");(Re=e.addEventListener)==null||Re.call(e,"change",()=>{Ne()==="auto"&&He("auto")})}function Ot(e){const t=document.getElementById("theme-toggle");if(!t)return;const a=t.querySelector(".theme-label"),n=t.querySelector(".theme-icon-dark"),s=t.querySelector(".theme-icon-light");a&&(e==="auto"?(a.textContent="Auto",n&&(n.style.display="inline"),s&&(s.style.display="inline")):e==="light"?(a.textContent="Hell",n&&(n.style.display="none"),s&&(s.style.display="inline")):(a.textContent="Dunkel",n&&(n.style.display="inline"),s&&(s.style.display="none")))}function Ne(){return localStorage.getItem(se)??"auto"}const Ge=[];let qe=null;function D(e,t){const a=e.split("/").filter(Boolean),n=[],s=new RegExp("^/?"+a.map(i=>i.startsWith(":")?(n.push(i.slice(1)),"([^/]+)"):Rt(i)).join("/")+"/?$");Ge.push({pattern:e,regex:s,paramNames:n,render:t})}function Bt(e){e.startsWith("#")||(e="#"+e),window.location.hash===e?L():window.location.hash=e}function It(e,{onNavigate:t}={}){window.addEventListener("hashchange",L),L.rootEl=e,L.onNavigate=t,L()}async function L(){var n;const e=L.rootEl,t=window.location.hash.slice(1)||"/",a=t.startsWith("/")?t:`/${t}`;for(const s of Ge){const i=s.regex.exec(a);if(i){const l={};s.paramNames.forEach((r,c)=>l[r]=decodeURIComponent(i[c+1])),qe=a,(n=L.onNavigate)==null||n.call(L,a),Vt(a);try{e.classList.remove("view-enter"),await s.render({params:l,path:a,root:e}),e.classList.add("view-enter")}catch(r){console.error("Route render error:",r),e.innerHTML=`<div class="empty-state">
          <div class="empty-state-icon">⚠</div>
          <h2>Fehler beim Anzeigen</h2>
          <p>${xe(r.message||String(r))}</p>
        </div>`}return}}e.innerHTML=`<div class="empty-state">
    <div class="empty-state-icon">?</div>
    <h2>Seite nicht gefunden</h2>
    <p>Die Route <code>${xe(a)}</code> existiert nicht.</p>
    <a href="#/" class="btn primary">Zum Dashboard</a>
  </div>`}function Vt(e){document.querySelectorAll("[data-route]").forEach(t=>{const a=t.getAttribute("data-route"),n=a==="/"?e==="/":e===a||e.startsWith(a+"/");t.classList.toggle("active",n)})}function _t(){qe!=null&&L()}function Rt(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function xe(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const jt="modulepreload",Zt=function(e,t){return new URL(e,t).href},De={},Ht=function(t,a,n){let s=Promise.resolve();if(a&&a.length>0){const l=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),c=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));s=Promise.allSettled(a.map(o=>{if(o=Zt(o,n),o in De)return;De[o]=!0;const d=o.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(!!n)for(let h=l.length-1;h>=0;h--){const v=l[h];if(v.href===o&&(!d||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${f}`))return;const u=document.createElement("link");if(u.rel=d?"stylesheet":jt,d||(u.as="script"),u.crossOrigin="",u.href=o,c&&u.setAttribute("nonce",c),document.head.appendChild(u),d)return new Promise((h,v)=>{u.addEventListener("load",h),u.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${o}`)))})}))}function i(l){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=l,window.dispatchEvent(r),!r.defaultPrevented)throw l}return s.then(l=>{for(const r of l||[])r.status==="rejected"&&i(r.reason);return t().catch(i)})},m=new ut("zeitnachweis");m.version(1).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"});m.version(2).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});m.version(3).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});m.version(4).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});m.version(5).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{const t=await e.table("profil").get("self");t&&(!t.zeitwirtschaftEmail||t.zeitwirtschaftEmail==="zeitwirtschaft@putzmeister.com")&&await e.table("profil").put({...t,zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com"})});m.version(6).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});m.version(7).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{const t=await e.table("profil").get("self");if(!t)return;let a=t.ueber18??!1;if(t.geburtsdatum){const s=new Date(t.geburtsdatum),i=new Date;a=i.getFullYear()-s.getFullYear()-(i<new Date(i.getFullYear(),s.getMonth(),s.getDate())?1:0)>=18}const n={id:"self",ueber18:a,sollStundenProWoche:t.sollStundenProWoche??35,sollStundenProTag:t.sollStundenProTag??7,berufsschulMuster:t.berufsschulMuster??{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null},zeitwirtschaftEmail:t.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:t.zeitwirtschaftAnrede||"Frau Kanarya",pausenRegel:t.pausenRegel??"auto",erstelltAm:t.erstelltAm??new Date().toISOString(),updatedAt:new Date().toISOString()};await e.table("profil").put(n)});async function Nt(){try{const{erkenneBerufsschulMuster:e}=await Ht(async()=>{const{erkenneBerufsschulMuster:l}=await Promise.resolve().then(()=>_a);return{erkenneBerufsschulMuster:l}},void 0,import.meta.url),t=await m.tage.toArray();if(!t.length)return!1;const a=e(t),n=await m.profil.get("self");if(!n)return!1;const s=n.berufsschulMuster??{};return JSON.stringify(s.wochentageWoechentlich??[])!==JSON.stringify(a.wochentageWoechentlich)||JSON.stringify(s.wochentage14Taegig??[])!==JSON.stringify(a.wochentage14Taegig)||(s.referenzDatum14Taegig??null)!==(a.referenzDatum14Taegig??null)?(await m.profil.put({...n,berufsschulMuster:a}),!0):!1}catch(e){return console.warn("[db] refreshBerufsschulMuster fehlgeschlagen:",e),!1}}async function Gt(){try{const e=await m.mailVorlagen.toArray(),t=e.some(n=>n.betreff&&!n.betreff.startsWith("Bitte um Zeitkorrektur im ESS")),a=e.some(n=>n.text&&!/Vielen Dank!\s*$/.test(n.text));return t||a?(await m.mailVorlagen.clear(),!0):!1}catch(e){return console.warn("[db] ensureMailVorlagenFresh fehlgeschlagen:",e),!1}}async function qt(){const e=await m.einstellungen.get("__migration_reset");return(e==null?void 0:e.value)===!0?(await m.einstellungen.delete("__migration_reset"),!0):!1}async function j(){return await m.profil.get("self")??Je()}async function fe(e){const t={...e,id:"self",updatedAt:new Date().toISOString()};return await m.profil.put(t),t}function Je(){return{id:"self",ueber18:!1,sollStundenProWoche:35,sollStundenProTag:7,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null},zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:"Frau Kanarya",pausenRegel:"auto",erstelltAm:new Date().toISOString()}}async function Jt(e,t=null){const a=await m.einstellungen.get(e);return a?a.value:t}async function Ut(e,t){await m.einstellungen.put({key:e,value:t})}async function F(){return await m.tage.orderBy("datum").toArray()}async function Yt(e){return e.length?(await m.tage.bulkPut(e),e.length):0}async function Qt(e){return e.length?(await m.monate.bulkPut(e),e.length):0}async function ee(){return await m.monate.orderBy("monatKey").toArray()}async function Xt(e){return await m.uploads.add({...e,hochladeDatum:new Date().toISOString()})}async function Ue(){return await m.uploads.orderBy("hochladeDatum").reverse().toArray()}async function ea(){await Promise.all([m.profil.clear(),m.tage.clear(),m.monate.clear(),m.uploads.clear(),m.einstellungen.clear(),m.mailVorlagen.clear(),m.warnungDismissals.clear()])}async function ta(){await Promise.all([m.tage.clear(),m.monate.clear(),m.uploads.clear(),m.warnungDismissals.clear()])}async function aa(){const[e,t,a,n,s,i,l]=await Promise.all([m.profil.toArray(),m.tage.toArray(),m.monate.toArray(),m.uploads.toArray(),m.einstellungen.toArray(),m.mailVorlagen.toArray(),m.warnungDismissals.toArray()]);return{version:1,exportedAt:new Date().toISOString(),data:{profil:e,tage:t,monate:a,uploads:n,einstellungen:s,mailVorlagen:i,warnungDismissals:l}}}async function na(e){if(!e||e.version!==1||!e.data)throw new Error("Ungültiges oder inkompatibles Backup-Format.");const t=e.data;await m.transaction("rw",m.profil,m.tage,m.monate,m.uploads,m.einstellungen,m.mailVorlagen,m.warnungDismissals,async()=>{var a,n,s,i,l,r,c;(a=t.profil)!=null&&a.length&&await m.profil.bulkPut(t.profil),(n=t.tage)!=null&&n.length&&await m.tage.bulkPut(t.tage),(s=t.monate)!=null&&s.length&&await m.monate.bulkPut(t.monate),(i=t.uploads)!=null&&i.length&&await m.uploads.bulkPut(t.uploads),(l=t.einstellungen)!=null&&l.length&&await m.einstellungen.bulkPut(t.einstellungen),(r=t.mailVorlagen)!=null&&r.length&&await m.mailVorlagen.bulkPut(t.mailVorlagen),(c=t.warnungDismissals)!=null&&c.length&&await m.warnungDismissals.bulkPut(t.warnungDismissals)})}async function Ae(e,t){await m.mailVorlagen.put({key:e,...t})}async function sa(){return await m.mailVorlagen.toArray()}async function ia(e,t){await m.warnungDismissals.put({key:`${e}-${t}`,datum:e,typ:t,dismissedAt:new Date().toISOString()})}async function ra(){return await m.warnungDismissals.toArray()}function Ye(e){if(e==null)return null;if(typeof e=="number")return e;let t=String(e).trim();if(!t)return null;let a=!1;t.endsWith("-")&&(a=!0,t=t.slice(0,-1).trim()),t=t.replace(",",".");const n=parseFloat(t);return isNaN(n)?null:a?-n:n}function B(e){if(e==null||isNaN(e))return"—";const t=e<0,a=Math.abs(e),n=Math.floor(a),s=Math.round((a-n)*60);let i=n,l=s;return l===60&&(i+=1,l=0),`${t?"-":""}${i}:${String(l).padStart(2,"0")}`}function A(e,t={}){if(e==null||isNaN(e))return"—";const{signed:a=!1,suffix:n="h"}=t,s=a&&e>0?"+":"",i=e.toFixed(2).replace(".",",");return`${s}${i}${n}`}function K(e){if(!e)return null;const t=/^(\d{1,2}):(\d{2})$/.exec(String(e).trim());return t?parseInt(t[1],10)*60+parseInt(t[2],10):null}function ie(e){if(!(e!=null&&e.length))return null;const t=e.filter(s=>s.von&&s.bis);if(!t.length)return null;let a=t[0].von,n=t[0].bis;for(const s of t)K(s.von)<K(a)&&(a=s.von),K(s.bis)>K(n)&&(n=s.bis);return{kommen:a,gehen:n}}function la(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
    <polyline points="10 17 15 12 10 7"/>
    <line x1="15" y1="12" x2="3" y2="12"/>
  </svg>`}function oa(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>`}function re(e,t={}){const{size:a=20,layout:n="inline"}=t;return e?`
    <div class="kommen-gehen ${n}">
      <span class="kg-block kommen" title="Kommen (frühester Einstempel)">
        ${la(a)}
        <span class="kg-zeit tabular">${e.kommen}</span>
      </span>
      <span class="kg-block gehen" title="Gehen (spätester Ausstempel)">
        ${oa(a)}
        <span class="kg-zeit tabular">${e.gehen}</span>
      </span>
    </div>
  `:'<span class="kg-empty">—</span>'}const Pe={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},ca=(e,t,a)=>{let n;const s=a!=null&&a.addSuffix?Pe[e].withPreposition:Pe[e].standalone;return typeof s=="string"?n=s:t===1?n=s.one:n=s.other.replace("{{count}}",String(t)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:"vor "+n:n},da={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},ua={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},ga={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},ha={date:oe({formats:da,defaultWidth:"full"}),time:oe({formats:ua,defaultWidth:"full"}),dateTime:oe({formats:ga,defaultWidth:"full"})},fa={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},ma=(e,t,a,n)=>fa[e],pa={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},va={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},de={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},ba={narrow:de.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:de.wide},ya={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},wa={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},Ma={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},$a=e=>Number(e)+".",Sa={ordinalNumber:$a,era:G({values:pa,defaultWidth:"wide"}),quarter:G({values:va,defaultWidth:"wide",argumentCallback:e=>e-1}),month:G({values:de,formattingValues:ba,defaultWidth:"wide"}),day:G({values:ya,defaultWidth:"wide"}),dayPeriod:G({values:wa,defaultWidth:"wide",formattingValues:Ma,defaultFormattingWidth:"wide"})},za=/^(\d+)(\.)?/i,ka=/\d+/i,xa={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},Da={any:[/^v/i,/^n/i]},Aa={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},Pa={any:[/1/i,/2/i,/3/i,/4/i]},Ta={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},Ea={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},La={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},Ka={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},Fa={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},Wa={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},Ca={ordinalNumber:gt({matchPattern:za,parsePattern:ka,valueCallback:e=>parseInt(e)}),era:q({matchPatterns:xa,defaultMatchWidth:"wide",parsePatterns:Da,defaultParseWidth:"any"}),quarter:q({matchPatterns:Aa,defaultMatchWidth:"wide",parsePatterns:Pa,defaultParseWidth:"any",valueCallback:e=>e+1}),month:q({matchPatterns:Ta,defaultMatchWidth:"wide",parsePatterns:Ea,defaultParseWidth:"any"}),day:q({matchPatterns:La,defaultMatchWidth:"wide",parsePatterns:Ka,defaultParseWidth:"any"}),dayPeriod:q({matchPatterns:Fa,defaultMatchWidth:"wide",parsePatterns:Wa,defaultParseWidth:"any"})},_={code:"de",formatDistance:ca,formatLong:ha,formatRelative:ma,localize:Sa,match:Ca,options:{weekStartsOn:1,firstWeekContainsDate:4}};function Q(e){if(!e)return null;const t=e.trim();return ht(t,"dd.MM.yyyy",new Date)}function w(e){return z(e,"dd.MM.yyyy")}function Qe(e){return z(e,"EE, dd.MM.yyyy",{locale:_})}function Oa(e){return`${ft(e)}-${String(mt(e)).padStart(2,"0")}`}function Xe(e){return z(e,"yyyy-MM")}function Ba(e){return z(e,"yyyy-MM-dd")}function Ia(e,t){if(!e||!t)return 0;e>t&&([e,t]=[t,e]);let a=0,n=new Date(e);for(;n<t;)n=X(n,1),je(n)||a++;return a}function V(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function et(e){var l;const t=e.filter(r=>r.tagestyp==="Berufsschule");if(t.length<2)return{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null};const a={};for(const r of t)a[l=r.wochentag]??(a[l]=[]),a[r.wochentag].push(r);const n=[],s=[];let i=null;for(const[r,c]of Object.entries(a)){if(c.sort((f,g)=>f.datum.localeCompare(g.datum)),c.length<2)continue;const o=[];for(let f=1;f<c.length;f++)o.push(Ze(S(c[f].datum),S(c[f-1].datum)));const d=Va(o);d<=10?n.push(r):d<=18&&(s.push(r),(!i||S(c[0].datum)<S(i))&&(i=c[0].datum))}return{wochentageWoechentlich:n,wochentage14Taegig:s,referenzDatum14Taegig:i}}function Va(e){if(!e.length)return null;const t=e.slice().sort((n,s)=>n-s),a=Math.floor(t.length/2);return t.length%2?t[a]:(t[a-1]+t[a])/2}function me(e,t){var s,i;if(!t)return!1;const n=["SO","MO","DI","MI","DO","FR","SA"][e.getDay()];if((s=t.wochentageWoechentlich)!=null&&s.includes(n))return!0;if((i=t.wochentage14Taegig)!=null&&i.includes(n)&&t.referenzDatum14Taegig){const l=S(t.referenzDatum14Taegig),r=pt(e,l,{weekStartsOn:1});if(r>=0&&r%2===0)return!0}return!1}const _a=Object.freeze(Object.defineProperty({__proto__:null,erkenneBerufsschulMuster:et,istBerufsschulTagLautMuster:me},Symbol.toStringTag,{value:"Module"}));function Ra(e){return e?"arbzg":"jarbschg"}function ja(e,t){return e==null?0:t==="jarbschg"?e>6?1:e>4.5?.5:0:e>9?.75:e>6?.5:0}function tt(e){if(!e||e.length<2)return 0;const t=e.filter(n=>n.von&&n.bis).map(n=>({von:K(n.von),bis:K(n.bis)})).filter(n=>n.von!=null&&n.bis!=null).sort((n,s)=>n.von-s.von);let a=0;for(let n=1;n<t.length;n++){const s=t[n].von-t[n-1].bis;(s>0&&s>=15||s>0)&&(a+=s)}return a/60}function at(e,t){const a=e.zeitSpannen??[];if(!a.length||a.every(h=>!h.von))return{keinAnspruch:!0};const n=tt(a),s=e.pause??0,i=Za(a),l=i-s,r=t.pausenRegel&&t.pausenRegel!=="auto"?t.pausenRegel==="jarbschg"?"jarbschg":"arbzg":Ra(!!t.ueber18),c=ja(l,r),o=Math.max(n,c),d=s-o,f=Math.max(0,c-n);let g="ok",u=null;if(d>.05)g="fehler_zeitwirtschaft",u=`${Math.round(d*60)} min Pause wurden zusätzlich zur gesetzlichen Pflicht und zur gestempelten Pause abgezogen. Das sieht nach einem Zeitwirtschafts-Fehler aus.`;else if(f>.05&&s>n+.02){g="aufstockung_legal";const h=Math.round(f*60);u=`Du hast ${Math.round(n*60)} min Pause gestempelt, aber bei ${l.toFixed(2).replace(".",",")}h Arbeitszeit schreibt das Gesetz (${r.toUpperCase()}) ${Math.round(c*60)} min vor. Die fehlenden ${h} min wurden automatisch als Pause gewertet. Das ist gesetzeskonform — nächstes Mal einfach länger Pause machen.`}return{arbeitszeitMitPause:i,arbeitszeitOhnePause:l,gestempeltePause:n,abgezogenePause:s,gesetzlichePflicht:c,gesetz:r,legalerAbzug:o,unrechtmaessigerVerlustMin:Math.round(Math.max(0,d)*60),aufstockungMin:Math.round(Math.max(0,f)*60),typ:g,warnung:u}}function Za(e){let t=0;for(const a of e){if(!a.von||!a.bis)continue;const n=K(a.von),s=K(a.bis);n!=null&&s!=null&&s>n&&(t+=s-n)}return t/60}const J={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function pe(e,t,a,n=new Set){var d,f;const s=[],i=a??new Date,l=new Map(e.map(g=>[g.datum,g]));if(!e.length)return s;const r=S(e[0].datum),c=i;for(let g=new Date(r);g<=c;g=X(g,1)){if(je(g))continue;const u=z(g,"yyyy-MM-dd"),h=l.get(u),v=Ia(g,c);if(!h||!h.tagestyp&&!h.ist&&(((d=h.zeitSpannen)==null?void 0:d.length)??0)===0){if(me(g,t.berufsschulMuster)){const p=v>=4?"error":v>=2?"warn":"info";U(s,n,{datum:u,wochentag:(h==null?void 0:h.wochentag)??te(g),typ:"bs_tag_fehlt",schweregrad:p,titel:`Berufsschultag nicht eingetragen: ${w(g)}`,beschreibung:`Laut deinem Profil hast du am ${J[te(g)]}, ${w(g)} Berufsschule. Im Zeitnachweis fehlt der Tag bisher${v>=4?" — bitte bei der Zeitwirtschaft nachhaken":""}.`,alter:v,mailVorlageKey:p==="error"?"bs_tag_fehlt":null})}else{const p=v>=4?"error":v>=2?"warn":"info";U(s,n,{datum:u,wochentag:te(g),typ:"stempelzeit_fehlt",schweregrad:p,titel:`Keine Stempelzeit am ${w(g)}`,beschreibung:`Am ${J[te(g)]}, ${w(g)} wurde keine Stempelzeit erfasst. Falls du an diesem Tag im Haus warst, sollte die Zeitwirtschaft das nachtragen${v>=4?" — es ist inzwischen ≥4 Werktage her":""}.`,alter:v,mailVorlageKey:p==="error"?"stempelzeit_fehlt":null})}continue}if(h.tagestyp==="Berufsschule"&&h.ist!=null&&h.soll!=null&&h.ist<h.soll-.01&&U(s,n,{datum:u,wochentag:h.wochentag,typ:"bs_stunden_falsch",schweregrad:"error",titel:`Berufsschultag mit zu wenig Stunden: ${w(g)}`,beschreibung:`Am ${J[h.wochentag]}, ${w(g)} sind nur ${h.ist.toFixed(2).replace(".",",")}h gebucht statt regulär ${h.soll.toFixed(2).replace(".",",")}h. Die Zeitwirtschaft hat den Berufsschultag möglicherweise nur halb erfasst.`,ist:h.ist,soll:h.soll,mailVorlageKey:"bs_stunden_falsch"}),h.tagestyp==="Stempelzeit"&&((f=h.zeitSpannen)==null?void 0:f.length)>1&&u>="2026-04-01"){const p=at(h,t);(p==null?void 0:p.typ)==="fehler_zeitwirtschaft"&&p.unrechtmaessigerVerlustMin>=5?U(s,n,{datum:u,wochentag:h.wochentag,typ:"pausen_abzug",schweregrad:p.unrechtmaessigerVerlustMin>=15?"error":"warn",titel:`Pausen-Abzug fehlerhaft (${w(g)})`,beschreibung:`Am ${J[h.wochentag]}, ${w(g)} wurden ${Math.round(p.abgezogenePause*60)} min Pause abgezogen. Gestempelt: ${Math.round(p.gestempeltePause*60)} min, gesetzlich nötig (${p.gesetz.toUpperCase()}): ${Math.round(p.gesetzlichePflicht*60)} min. Differenz von ${p.unrechtmaessigerVerlustMin} min ist unerklärlich.`,verlustMinuten:p.unrechtmaessigerVerlustMin,abgezogen:p.abgezogenePause,gestempelt:p.gestempeltePause,mailVorlageKey:"pausen_abzug"}):(p==null?void 0:p.typ)==="aufstockung_legal"&&p.aufstockungMin>=10&&U(s,n,{datum:u,wochentag:h.wochentag,typ:"pausen_aufstockung",schweregrad:"info",titel:`Zu wenig Pause gestempelt (${w(g)}) — ${p.aufstockungMin} min automatisch aufgestockt`,beschreibung:`Am ${J[h.wochentag]}, ${w(g)} hast du nur ${Math.round(p.gestempeltePause*60)} min Pause gemacht. Gesetz (${p.gesetz.toUpperCase()}) schreibt ${Math.round(p.gesetzlichePflicht*60)} min vor. Fehlende ${p.aufstockungMin} min wurden als Pause gewertet — das ist legal, aber du verlierst dadurch Arbeitszeit. Tipp: mach beim nächsten Mal etwas länger Mittag.`})}}const o={error:0,warn:1,info:2};return s.sort((g,u)=>{const h=o[g.schweregrad]-o[u.schweregrad];return h!==0?h:u.datum.localeCompare(g.datum)}),s}function nt(e,t=new Set){var n,s,i,l;const a=[];for(const r of e){const c=((n=r.glz)==null?void 0:n.saldoVorperiode)??0,o=((s=r.glz)==null?void 0:s.saldoAktuellePeriode)??0,d=((i=r.glz)==null?void 0:i.umgebuchteStunden)??0,f=(l=r.glz)==null?void 0:l.saldoGesamt;if(f==null)continue;const g=c+o+d,u=Math.abs(f-g);if(u>.03){const h=`${r.monatKey}-saldo_plausi`;t.has(h)||a.push({datum:`${r.monatKey}-01`,wochentag:"",typ:"saldo_plausi",schweregrad:"warn",titel:`Saldo-Differenz im Monat ${r.monatKey}`,beschreibung:`Rechnung: Vorperiode ${c.toFixed(2)} + aktuelle Periode ${o.toFixed(2)} + umgebucht ${d.toFixed(2)} = ${g.toFixed(2)}, aber dein Saldo wird mit ${f.toFixed(2)} angezeigt. Abweichung: ${u.toFixed(2)}h.`,soll:g,ist:f})}}return a}function U(e,t,a){const n=`${a.datum}-${a.typ}`;t.has(n)||(a.id=n,e.push(a))}function te(e){return["SO","MO","DI","MI","DO","FR","SA"][e.getDay()]}function Ha(e,t){var c,o,d;const a=[...e].sort((f,g)=>f.datum.localeCompare(g.datum));if(!a.length)return[];const n=new Map(t.map(f=>[f.monatKey,f])),s={};for(const f of a)s[c=f.monatKey]??(s[c]=[]),s[f.monatKey].push(f);const i=Object.keys(s).sort(),l=[];let r=null;for(const f of i){const g=n.get(f);let u;((o=g==null?void 0:g.glz)==null?void 0:o.saldoVorperiode)!=null?u=g.glz.saldoVorperiode:r!=null?u=r:u=0;const h=s[f];for(const v of h)v.diff!=null&&(u+=v.diff),l.push({datum:v.datum,wochentag:v.wochentag,saldo:Math.round(u*100)/100,diff:v.diff,ist:v.ist,soll:v.soll,tagestyp:v.tagestyp,monatKey:v.monatKey,zeitSpannen:v.zeitSpannen});if(((d=g==null?void 0:g.glz)==null?void 0:d.saldoGesamt)!=null){const v=g.glz.saldoGesamt-u;if(Math.abs(v)>.02&&l.length>0){const y=l.length-1;l[y].umbuchung=v,l[y].saldo=Math.round((l[y].saldo+v)*100)/100,u=l[y].saldo}r=g.glz.saldoGesamt}else r=u}return l}function Na(e,t){if(!e.length)return[];if(t==="alles")return e;const a=Math.min(t,e.length);return e.slice(-a)}function Ga(e){return e.length?e[e.length-1].saldo:0}function qa(e){if(!e.length)return 0;const t=e[0].saldo-(e[0].diff??0),a=e[e.length-1].saldo;return Math.round((a-t)*100)/100}E.register(bt,yt,wt,Mt,$t,St,zt,kt,xt,Dt,At,Pt,Tt,Et);function $(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function W(){return{fg:$("--fg"),fgMuted:$("--fg-muted"),fgSubtle:$("--fg-subtle"),border:$("--border"),surface:$("--surface"),accent:$("--accent"),success:$("--success"),warn:$("--warn"),danger:$("--danger"),info:$("--info"),palette:[$("--chart-1"),$("--chart-2"),$("--chart-3"),$("--chart-4"),$("--chart-5"),$("--chart-6"),$("--chart-7")]}}function M(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.fgMuted,font:{size:12}}},tooltip:{backgroundColor:e.surface,titleColor:e.fg,bodyColor:e.fg,borderColor:e.border,borderWidth:1,padding:10,displayColors:!0}},scales:{x:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}},y:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}}}}}function Ja(e,t){const a=W();if(C(e),!(t!=null&&t.length))return;const n=t.map(i=>z(S(i.datum),"dd.MM.")),s=t.map(i=>i.saldo);return s.map(i=>i>=0?a.success:a.danger),new E(e,{type:"line",data:{labels:n,datasets:[{label:"Tages-Saldo",data:s,borderColor:a.accent,backgroundColor:i=>{const l=i.chart,{ctx:r,chartArea:c,scales:o}=l;return c?nn(r,c,o.y,a):O(a.accent,.14)},segment:{borderColor:i=>{const l=i.p0.parsed.y,r=i.p1.parsed.y,c=(l+r)/2;return c>=.02?a.success:c<=-.02?a.danger:a.fgMuted}},tension:.25,pointRadius:2,pointHoverRadius:5,pointBackgroundColor:s.map(i=>i>=.02?a.success:i<=-.02?a.danger:a.fgMuted),pointBorderColor:a.surface,pointBorderWidth:1,fill:!0,borderWidth:2}]},options:{...M(a),plugins:{...M(a).plugins,legend:{display:!1},tooltip:{...M(a).plugins.tooltip,callbacks:{title:i=>{const l=t[i[0].dataIndex];return z(S(l.datum),"EE, dd.MM.yyyy",{locale:_})},label:i=>{const l=t[i.dataIndex],r=[`Saldo: ${l.saldo.toFixed(2).replace(".",",")}h`];return l.diff!=null&&r.push(`Tages-Diff: ${l.diff>=0?"+":""}${l.diff.toFixed(2).replace(".",",")}h`),l.tagestyp&&r.push(`Typ: ${l.tagestyp}`),l.umbuchung&&r.push(`Umbuchung: ${l.umbuchung>=0?"+":""}${l.umbuchung.toFixed(2).replace(".",",")}h`),r}}}},scales:{...M(a).scales,y:{...M(a).scales.y,ticks:{...M(a).scales.y.ticks,callback:i=>`${i>=0?"+":""}${i.toFixed(1).replace(".",",")}h`}}}}})}function Ua(e,t){const a=W();if(C(e),!(t!=null&&t.length))return;const n=t.map(i=>i.monatKey),s=t.map(i=>{var l;return((l=i.glz)==null?void 0:l.saldoGesamt)??0});return new E(e,{type:"line",data:{labels:n,datasets:[{label:"GLZ-Saldo (Monatsende)",data:s,borderColor:a.accent,backgroundColor:O(a.accent,.18),tension:.35,fill:!0,pointRadius:4}]},options:M(a)})}function ve(e,t){const a=W();if(C(e),!(t!=null&&t.length))return;const n=t.map(l=>z(S(l.datum),"dd.MM.")),s=t.map(l=>l.ist??0),i=t.map(l=>sn(l.tagestyp,a));return new E(e,{type:"bar",data:{labels:n,datasets:[{label:"Ist-Stunden",data:s,backgroundColor:i,borderRadius:4,borderSkipped:!1}]},options:{...M(a),plugins:{...M(a).plugins,legend:{display:!1},tooltip:{...M(a).plugins.tooltip,callbacks:{label:l=>{const r=t[l.dataIndex];return`${r.tagestyp??"—"}: ${(r.ist??0).toFixed(2).replace(".",",")}h`}}}},scales:{...M(a).scales,y:{...M(a).scales.y,suggestedMin:0,suggestedMax:10}}}})}function Ya(e,t){const a=W();if(C(e),!(t!=null&&t.length))return;const n=t.filter(o=>{var d;return((d=o.zeitSpannen)==null?void 0:d.length)&&o.zeitSpannen.some(f=>f.von&&f.bis)}).map(o=>{const d=o.zeitSpannen.filter(u=>u.von&&u.bis).map(u=>({von:K(u.von),bis:K(u.bis),vonStr:u.von,bisStr:u.bis})).filter(u=>u.von!=null&&u.bis!=null);if(d.length===0)return null;const f=Math.min(...d.map(u=>u.von)),g=Math.max(...d.map(u=>u.bis));return{...o,_spans:d,_minVon:f,_maxBis:g}}).filter(Boolean);if(!n.length)return;const s=o=>o.ist==null?a.fgMuted:o.ist>=7?a.success:a.danger,i={label:"Tages-Rahmen",data:n.map(o=>[o._minVon,o._maxBis]),backgroundColor:n.map(s),borderColor:n.map(s),borderWidth:0,borderRadius:4,borderSkipped:!1,barPercentage:.75,categoryPercentage:.95},l=Math.max(0,Math.floor(Math.min(...n.map(o=>o._minVon))/60)*60-60),r=Math.min(24*60,Math.ceil(Math.max(...n.map(o=>o._maxBis))/60)*60+60),c=o=>`${String(Math.floor(o/60)).padStart(2,"0")}:${String(o%60).padStart(2,"0")}`;return new E(e,{type:"bar",data:{labels:n.map(o=>z(S(o.datum),"dd.MM.")),datasets:[i]},options:{...M(a),interaction:{mode:"index",intersect:!1,axis:"x"},plugins:{legend:{display:!1},tooltip:{enabled:!0,backgroundColor:a.surface,borderColor:a.accent,borderWidth:2,padding:14,titleColor:a.fg,titleFont:{size:14,weight:"600"},titleMarginBottom:8,bodyColor:a.fg,bodyFont:{size:13},bodySpacing:4,displayColors:!1,caretPadding:10,cornerRadius:8,callbacks:{title:o=>{const d=n[o[0].dataIndex];return z(S(d.datum),"EE, dd.MM.yyyy",{locale:_})},label:()=>"",beforeBody:o=>{const d=n[o[0].dataIndex],f=d.ist!=null?B(d.ist):"—",g=d.soll!=null?B(d.soll):"—",u=d.pause!=null?Math.round(d.pause*60)+" min":"—",v=[`Tages-Rahmen: ${`${c(d._minVon)} – ${c(d._maxBis)}`}`];return d._spans.length>1&&(v.push(""),d._spans.forEach((y,p)=>{v.push(`  Block ${p+1}: ${y.vonStr} – ${y.bisStr}`)})),[...v,"",`Arbeitszeit (netto): ${f}`,`Soll: ${g}`,`Pause (abgezogen): ${u}`]}}}},scales:{x:{ticks:{color:a.fgMuted,font:{size:10},maxRotation:60,minRotation:60,autoSkip:!0,maxTicksLimit:40},grid:{display:!1}},y:{min:l,max:r,ticks:{color:a.fgMuted,stepSize:60,callback:o=>c(o)},grid:{color:a.border}}}}})}function Qa(e,t){const a=W();C(e);const n={};for(const l of t){if(l.tagestyp!=="Stempelzeit"||!l.zeitSpannen||l.zeitSpannen.length<2)continue;const r=tt(l.zeitSpannen);if(r<=0)continue;const c=Math.round(r*60),o=Math.floor(c/15)*15;n[o]=(n[o]??0)+1}const s=Object.keys(n).map(Number).sort((l,r)=>l-r),i=s.map(l=>n[l]);return new E(e,{type:"bar",data:{labels:s.map(l=>`${l}–${l+14} min`),datasets:[{label:"Häufigkeit",data:i,backgroundColor:a.palette[1],borderRadius:4}]},options:{...M(a),plugins:{...M(a).plugins,legend:{display:!1},tooltip:{...M(a).plugins.tooltip,callbacks:{title:l=>`Pause-Länge (gestempelt): ${l[0].label}`,label:l=>`${l.parsed.y} Tag(e)`}}}}})}function Xa(e,t){const a=W();C(e);const n=["MO","DI","MI","DO","FR"],s={},i={};for(const r of n)s[r]=0,i[r]=0;for(const r of t)n.includes(r.wochentag)&&(r.ist==null||r.ist===0||(s[r.wochentag]+=r.ist,i[r.wochentag]+=1));const l=n.map(r=>i[r]>0?s[r]/i[r]:0);return new E(e,{type:"bar",data:{labels:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"],datasets:[{label:"Ø Ist-Stunden",data:l,backgroundColor:a.palette[2],borderRadius:4}]},options:{...M(a),plugins:{...M(a).plugins,legend:{display:!1}}}})}function en(e,t){const a=W();C(e);const n={};for(const l of t)!l.tagestyp||l.tagestyp==="Wochenende"||(n[l.tagestyp]=(n[l.tagestyp]??0)+1);const s=Object.keys(n),i=Object.values(n);return new E(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:s.map((l,r)=>a.palette[r%a.palette.length]),borderColor:a.surface,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:a.fgMuted,font:{size:12}}},tooltip:M(a).plugins.tooltip}}})}function tn(e,t){const a=W();C(e);const n={};for(const r of t){const c=r.wocheKey;n[c]??(n[c]={ist:0,soll:0}),n[c].ist+=r.ist??0,n[c].soll+=r.soll??0}const s=Object.keys(n).sort(),i=s.map(r=>n[r].ist),l=s.map(r=>n[r].soll);return new E(e,{type:"bar",data:{labels:s.map(r=>"KW "+r.split("-")[1]),datasets:[{label:"Ist",data:i,backgroundColor:a.palette[0],borderRadius:4},{label:"Soll",data:l,backgroundColor:a.palette[3],borderRadius:4}]},options:M(a)})}function an(e,t){const a=W();C(e);const n=t.slice().sort((l,r)=>l.datum.localeCompare(r.datum));let s=0;const i=n.map(l=>(s+=l.diff??0,{x:l.datum,y:s}));return new E(e,{type:"line",data:{labels:i.map(l=>l.x),datasets:[{label:"Kumulative Differenz (+/- Soll)",data:i.map(l=>l.y),borderColor:a.palette[5],backgroundColor:O(a.palette[5],.15),fill:!0,tension:.2,pointRadius:0}]},options:{...M(a),scales:{x:{display:!1,grid:{display:!1}},y:{...M(a).scales.y}}}})}function st(e,t,{monate:a=8}={}){if(!e)return;if(e.innerHTML="",!t.length){e.innerHTML='<p style="color: var(--fg-muted); font-size: 13px;">Keine Daten.</p>';return}const n=new Map(t.map(h=>[h.datum,h])),i=S(t[t.length-1].datum),l=a*30,r=X(i,-l),c=vt(r,{weekStartsOn:1}),o=Ze(i,c)+1,d=Math.ceil(o/7),f=document.createElement("div");f.className="heatmap-month-labels",f.style.gridTemplateColumns=`repeat(${d}, 14px)`,e.appendChild(f);let g=-1;for(let h=0;h<d;h++){const v=X(c,h*7),y=v.getMonth(),p=document.createElement("span");p.textContent=y!==g?z(v,"MMM",{locale:_}):"",f.appendChild(p),g=y}const u=document.createElement("div");u.className="heatmap",u.style.gridAutoFlow="column",u.style.gridTemplateRows="repeat(7, 14px)",u.style.gridTemplateColumns=`repeat(${d}, 14px)`;for(let h=0;h<d*7;h++){const v=X(c,h);if(v>i||v<r){const Z=document.createElement("div");Z.className="heatmap-cell",Z.style.background="transparent",u.appendChild(Z);continue}const y=z(v,"yyyy-MM-dd"),p=n.get(y),x=document.createElement("div");x.className="heatmap-cell",x.title=`${z(v,"EE, dd.MM.yyyy",{locale:_})}${(p==null?void 0:p.ist)!=null?" · Ist "+p.ist.toFixed(2)+"h":""}${(p==null?void 0:p.diff)!=null?" · "+(p.diff>=0?"+":"")+p.diff.toFixed(2):""}`,(p==null?void 0:p.diff)!=null&&(p.diff<=-1?x.classList.add("neg-2"):p.diff<-.05?x.classList.add("neg-1"):p.diff>=1?x.classList.add("pos-2"):p.diff>.05&&x.classList.add("pos-1")),u.appendChild(x)}e.appendChild(u)}function C(e){const t=E.getChart(e);t&&t.destroy()}function O(e,t){const a=e.replace("#","").trim();if(a.length!==6&&a.length!==3)return e;const n=a.length===3?a.split("").map(r=>r+r).join(""):a,s=parseInt(n.slice(0,2),16),i=parseInt(n.slice(2,4),16),l=parseInt(n.slice(4,6),16);return`rgba(${s}, ${i}, ${l}, ${t})`}function nn(e,t,a,n){const{top:s,bottom:i}=t,l=e.createLinearGradient(0,s,0,i),r=a.min,c=a.max,o=c-r;if(o<=0)return O(n.success,.14);let d=(c-0)/o;return d=Math.max(0,Math.min(1,d)),l.addColorStop(0,O(n.success,.28)),l.addColorStop(Math.max(0,d-.001),O(n.success,.06)),l.addColorStop(Math.min(1,d+.001),O(n.danger,.06)),l.addColorStop(1,O(n.danger,.28)),l}function sn(e,t){const a=String(e??"").toLowerCase();return a.includes("stempel")?t.palette[0]:a.includes("berufs")?t.palette[1]:a.includes("urlaub")?t.palette[2]:a.includes("feiertag")?t.fgSubtle:a.includes("dienst")?t.palette[3]:a.includes("krank")?t.palette[4]:t.palette[5]}let rn=0;function be(e,{type:t="info",duration:a=3500}={}){const n=document.getElementById("toast-root");if(!n)return;const s=document.createElement("div");s.className=`toast ${t}`,s.textContent=e,s.dataset.id=++rn,n.appendChild(s),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateY(-8px)",s.style.transition="opacity 220ms, transform 220ms",setTimeout(()=>s.remove(),250)},a)}function ye(e){return be(e,{type:"error",duration:6e3})}function k(e){return be(e,{type:"success"})}const ln=[{key:7,label:"1 Woche"},{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:"alles",label:"Alles"}];async function Te({root:e}){var x,Z,Me,$e;const[t,a,n,s,i]=await Promise.all([j(),ee(),F(),ra(),Jt("dashboardZeitraum",14)]);if(n.length===0){e.innerHTML=un();return}const l=!((Z=(x=t.berufsschulMuster)==null?void 0:x.wochentageWoechentlich)!=null&&Z.length||($e=(Me=t.berufsschulMuster)==null?void 0:Me.wochentage14Taegig)!=null&&$e.length),r=Ha(n,a),c=r.length;let o=i;typeof o=="number"&&o>c&&(o="alles");const d=new Set(s.map(b=>b.key)),f=pe(n,t,new Date,d),g=nt(a,d),u=[...f,...g],h=Ga(r),v=h>.05?"positive":h<-.05?"negative":"",y=u.filter(b=>b.schweregrad==="error"),p=u.filter(b=>b.schweregrad==="warn");e.innerHTML=`
    <h1 class="view-title">Dashboard</h1>
    <p class="view-subtitle">Stand: ${R(w(new Date(n[n.length-1].datum)))}</p>

    <div class="saldo-hero" style="margin-bottom: 32px; align-items: stretch;">
      <div class="saldo-hero-text" style="min-width: 260px;">
        <h3>Aktueller Gleitzeit-Saldo</h3>
        <div class="saldo-value ${v}">${A(h,{signed:!0,suffix:""})}</div>
        <div class="saldo-unit">Stunden · tagesaktuell</div>
        <div id="hero-bewegung" class="saldo-trend flat" style="margin-top: 12px;"></div>
      </div>
      <div style="flex: 1; min-width: 400px; display: flex; flex-direction: column;">
        <div class="card-split" style="margin-bottom: 12px; align-items: center;">
          <h3 style="margin: 0;">Verlauf</h3>
          <div class="segmented" id="zeitraum-picker">
            ${ln.map(b=>{const P=typeof b.key=="number"&&b.key>c;return`<button type="button" data-key="${b.key}" class="${o===b.key?"active":""}" ${P?'disabled style="opacity:0.4"':""}>${b.label}</button>`}).join("")}
          </div>
        </div>
        <div style="flex: 1; height: 220px;"><canvas id="saldo-chart"></canvas></div>
      </div>
    </div>

    <div class="grid cols-4" style="margin-bottom: 32px;">
      <div class="card">
        <h3>Erfasste Tage</h3>
        <div style="font-size: 32px; font-weight: 650; letter-spacing: -0.02em;" class="tabular">${n.length}</div>
        <div style="color: var(--fg-muted); font-size: 12px; margin-top: 4px;">
          seit ${R(w(new Date(n[0].datum)))}
        </div>
      </div>
      <div class="card">
        <h3>Monatsübersichten</h3>
        <div style="font-size: 32px; font-weight: 650; letter-spacing: -0.02em;" class="tabular">${a.length}</div>
      </div>
      <div class="card">
        <h3>Rote Warnungen</h3>
        <div class="tabular" style="font-size: 32px; font-weight: 650; letter-spacing: -0.02em; color: ${y.length>0?"var(--danger)":"var(--success)"};">${y.length}</div>
        <div style="color: var(--fg-muted); font-size: 12px; margin-top: 4px;">
          ${y.length>0?"sofort an Zeitwirtschaft":"keine akuten Fehler"}
        </div>
      </div>
      <div class="card">
        <h3>Gelbe Hinweise</h3>
        <div class="tabular" style="font-size: 32px; font-weight: 650; letter-spacing: -0.02em; color: ${p.length>0?"var(--warn)":"var(--fg-muted)"};">${p.length}</div>
      </div>
    </div>

    ${l?`
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

    ${u.length>0?`
      <div class="card" style="margin-bottom: 32px;">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Offene Warnungen</h2>
          <a href="#/mails" class="btn sm">Alle verwalten →</a>
        </div>
        ${u.slice(0,5).map(b=>dn(b)).join("")}
        ${u.length>5?`<div style="margin-top: 12px; color: var(--fg-muted); font-size: 13px; text-align: center;">+ ${u.length-5} weitere → <a href="#/mails" style="color: var(--accent);">alle ansehen</a></div>`:""}
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
      <div class="card-split" style="margin-bottom: 20px;">
        <h2>Tage im gewählten Zeitraum</h2>
        <span style="color: var(--fg-muted); font-size: 13px;" id="tage-info"></span>
      </div>
      <div id="tage-liste"></div>
    </div>

    <div class="card">
      <h2>Heatmap (letzte 4 Monate)</h2>
      <div id="mini-heatmap" style="overflow-x: auto; padding-top: 12px;"></div>
    </div>
  `,Ee(o,e,r),e.querySelectorAll("#zeitraum-picker button").forEach(b=>{b.addEventListener("click",async()=>{if(b.disabled)return;const P=b.getAttribute("data-key"),I=P==="alles"?"alles":parseInt(P,10);e.querySelectorAll("#zeitraum-picker button").forEach(H=>H.classList.toggle("active",H===b)),await Ut("dashboardZeitraum",I),Ee(I,e,r)})}),requestAnimationFrame(()=>{st(e.querySelector("#mini-heatmap"),n,{monate:4})}),e.addEventListener("click",async b=>{const P=b.target.closest(".ist-copy");if(P){b.preventDefault(),b.stopPropagation();const ke=P.getAttribute("data-val");try{await navigator.clipboard.writeText(ke),P.classList.add("ok");const N=P.querySelector(".ist-wert"),le=P.querySelector(".copy-icon");if(N&&le){const dt=N.textContent;N.textContent="✓ kopiert",le.style.display="none",setTimeout(()=>{P.classList.remove("ok"),N.textContent=dt,le.style.display=""},1e3)}}catch{k(`Bitte kopieren: ${ke}`)}return}const I=b.target.closest(".btn-dismiss");if(!I)return;const H=I.getAttribute("data-datum"),Se=I.getAttribute("data-typ");if(!H||!Se)return;await ia(H,Se),k("Warnung ausgeblendet.");const ze=I.closest(".alert");ze&&(ze.style.display="none")})}function Ee(e,t,a){const n=Na(a,e),s=qa(n);requestAnimationFrame(()=>{const c=t.querySelector("#saldo-chart");Ja(c,n)});const i=t.querySelector("#hero-bewegung");if(i){const c=s>.05?"up":s<-.05?"down":"flat",o=s>.05?"↑":s<-.05?"↓":"→";i.className=`saldo-trend ${c}`,i.innerHTML=`${o} ${Math.abs(s)<.01?"Unverändert":A(s,{signed:!0})} im Zeitraum`}const l=t.querySelector("#tage-info");if(l){const c=n.length;l.textContent=`${c} ${c===1?"Tag":"Tage"}`}const r=t.querySelector("#tage-liste");r&&(r.innerHTML=on(n.slice().reverse()))}function on(e){if(!e.length)return'<p class="hint">Keine Tage im Zeitraum.</p>';const t=Math.max(1,...e.map(s=>Math.abs(s.diff??0))),a=[];let n=null;for(const s of e){if(s.wocheKey&&s.wocheKey!==n){if(n!==null){const i=s.wocheKey.split("-")[1];a.push(`<div class="woche-divider"><span>KW ${i}</span></div>`)}n=s.wocheKey}a.push(cn(s,t))}return`<div class="tages-liste">${a.join("")}</div>`}function cn(e,t){const a=e.diff??0,n=a>0,s=Math.min(100,Math.abs(a)/t*100),i=n?"var(--success)":a<0?"var(--danger)":"var(--fg-subtle)",l=ie(e.zeitSpannen);return`
    <a href="#/tag/${e.datum}" class="tag-row">
      <div class="tag-row-datum">
        <div class="tabular">${R(w(new Date(e.datum)))}</div>
        <div class="tag-row-wd">${gn(e.wochentag)}</div>
      </div>
      <div class="tag-row-typ">
        ${e.tagestyp?`<span class="pill ${hn(e.tagestyp)}">${R(e.tagestyp)}</span>`:'<span style="color: var(--fg-subtle); font-size: 12px;">—</span>'}
      </div>
      <div class="tag-row-kg">
        ${re(l,{size:18})}
      </div>
      <div class="tag-row-ist tabular">
        ${e.ist!=null&&e.ist>0?`<button class="ist-copy" data-val="${B(e.ist)}" title="Kopieren für IHK-Berichtsheft"><span class="ist-wert">${B(e.ist)}</span><span class="copy-icon" aria-hidden="true">⧉</span></button>`:`<div class="ist-wert">${e.ist!=null?B(e.ist):"—"}</div>`}
        <div style="color: var(--fg-subtle); font-size: 11px;">Soll ${e.soll!=null?B(e.soll):"—"}</div>
      </div>
      <div class="tag-row-bar">
        <div class="bar-track">
          <div class="bar-zero"></div>
          <div class="bar-fill ${n?"pos":"neg"}" style="width: ${s}%; background: ${i};"></div>
        </div>
      </div>
      <div class="tag-row-diff tabular" style="color: ${n?"var(--success)":a<0?"var(--danger)":"var(--fg-muted)"};">
        ${a!==0?(n?"+":"")+a.toFixed(2).replace(".",",")+"h":"0,00h"}
      </div>
      <div class="tag-row-saldo tabular" style="color: var(--fg-muted); font-size: 12px;">
        ${e.saldo>=0?"+":""}${e.saldo.toFixed(2).replace(".",",")}h
      </div>
    </a>
  `}function dn(e){const t=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${t}</div>
      <div class="alert-body">
        <div class="alert-title">${R(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${R(e.beschreibung)}</p>
        <div class="alert-actions">
          ${e.mailVorlageKey?'<a href="#/mails" class="btn primary sm">✉ Mail schreiben</a>':""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
          <button class="btn ghost sm btn-dismiss" data-datum="${Le(e.datum)}" data-typ="${Le(e.typ)}">Ausblenden</button>
        </div>
      </div>
    </div>
  `}function un(){return`
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
  `}function gn(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function hn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function R(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Le(e){return R(e)}const fn=""+new URL("pdf.worker.min-yatZIOMy.mjs",import.meta.url).href;Lt.workerSrc=fn;const Ke={Januar:1,Februar:2,März:3,Maerz:3,April:4,Mai:5,Juni:6,Juli:7,August:8,September:9,Oktober:10,November:11,Dezember:12},mn=["Stempelzeit","Berufsschule Std. bez","Berufsschule","Dienstreise Arbeitszeit","Reise öff.VM/PKW Beifahr.","Reise öff.VM/PKW","Urlaub","Gleitzeit","Arbeitsunfähigkeit","TgDtEinh","Neujahr","Karfreitag","Ostermontg","Ostmontg","Osterso.","Hl.3 Kön.","Allerhlg","Pfingstmo","Fronleichn","TdDtEinh"];async function pn(e){const a=await Kt({data:e}).promise,n=[];for(let r=1;r<=a.numPages;r++){const o=await(await a.getPage(r)).getTextContent(),d=vn(o.items);for(const f of d)n.push({page:r,text:f})}const s=bn(n),{tage:i,monate:l}=yn(n);return{meta:s,tage:i,monate:l}}function vn(e){if(!e.length)return[];const t=e.slice().sort((l,r)=>{const c=r.transform[5]-l.transform[5];return Math.abs(c)>2?c:l.transform[4]-r.transform[4]}),a=[];let n=null,s=[];const i=3;for(const l of t){const r=l.transform[5];n==null||Math.abs(r-n)<=i?(s.push(l),n==null&&(n=r)):(a.push(Fe(s)),s=[l],n=r)}return s.length&&a.push(Fe(s)),a.filter(l=>l.trim().length>0)}function Fe(e){e.sort((n,s)=>n.transform[4]-s.transform[4]);let t="",a=-1;for(const n of e){const s=n.transform[4];a>=0&&s-a>4?t+="  ":a>=0&&s-a>.5&&(t+=" "),t+=n.str,a=s+n.width}return t}function bn(e){var a,n;const t={personalnummer:null,name:null,kostenstelle:null,personalbereich:null,einstellungsdatum:null,mitarbeiterkreis:null,arbeitszeitplanregel:null,zeitraumVon:null,zeitraumBis:null,stichtagAuswertung:null};for(let s=0;s<e.length;s++){const i=e[s].text,l=/vom\s+(\d{2}\.\d{2}\.\d{4})\s+bis\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);l&&(t.zeitraumVon=Q(l[1]),t.zeitraumBis=Q(l[2]));const r=/bis einschließlich dem\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);if(r&&(t.stichtagAuswertung=Q(r[1])),/Personalnummer/i.test(i)&&/Kostenstelle/i.test(i)){const o=(((a=e[s+1])==null?void 0:a.text)??"").trim().split(/\s{2,}/);o.length>=3&&(t.personalnummer=o[0],t.kostenstelle=o[1],t.personalbereich=o[2])}if(/Einstellungsdatum/i.test(i)&&/Mitarbeiterkreis/i.test(i)){const o=(((n=e[s+1])==null?void 0:n.text)??"").trim().split(/\s{2,}/);o.length>=3&&(t.einstellungsdatum=Q(o[0]),t.mitarbeiterkreis=o[1],t.arbeitszeitplanregel=o[2])}if(/Bei Rückfragen wenden Sie sich an/i.test(i))for(let c=s+1;c<Math.min(s+8,e.length);c++){const o=e[c].text.trim();if(/^[A-ZÄÖÜ][a-zäöüß]+(?:\s[A-ZÄÖÜ][a-zäöüß]+)+$/.test(o)&&!/kanarya/i.test(o)&&!/tel/i.test(o)){t.name=o;break}}}return t}function yn(e,t){var c;const a=[],n=[];let s=null,i=null,l=!1,r=0;for(;r<e.length;){const o=e[r].text,d=/Monat:\s*([A-Za-zäöüÄÖÜß]+)\s*-\s*(\d{4})/.exec(o);if(d){const h=d[1].trim(),v=parseInt(d[2],10),y=Ke[h]??Ke[h.replace("ä","ae")]??null;y&&(s={jahr:v,monat:y,monatKey:`${v}-${String(y).padStart(2,"0")}`},l=!0,i=null),r++;continue}if(/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.test(o)){const h=/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.exec(o),v=Q(h[1]);i={monatKey:(s==null?void 0:s.monatKey)??Xe(v),stichtag:v,glz:{},flexi:{},zeitkonten:{},raw:{}},r=wn(e,r+1,i),n.push(i);continue}let f=s;const g=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)\b/.exec(o.trim());if(g&&s){const h=parseInt(g[1],10);l&&h>=20?f=Sn(s):h<=15&&(l=!1)}const u=We(o,f);if(u){const h=[];let v=r+1;for(;v<e.length;){const p=e[v].text;if(/^\s*\d{4}\s+Umbuchung/.test(p)||We(p,s)||/Wochensumme/i.test(p)||/Monats.bersicht/i.test(p)||/Monat:\s*[A-Za-z]/i.test(p))break;const x=Mn(p);if(x){h.push(x),v++;continue}break}if(h.length&&u.zeitSpannen.push(...h),u.tagestyp==="Wochenende"||u.wochentag==="SA"||u.wochentag==="SO"){r=v;continue}(u.ist!=null||u.soll!=null||(((c=u.zeitSpannen)==null?void 0:c.length)??0)>0||u.tagestyp!=null)&&a.push(u),r=v;continue}r++}return{tage:a,monate:n}}function wn(e,t,a){let n=t;const s=/(\d{4,5}|KTAU|AZAU)\s*-\s*(.+?)\s+(-?[\d,.]+-?)(?=\s+(?:\d{4,5}|KTAU|AZAU)\s*-|\s*$)/g;for(;n<e.length;){const i=e[n].text.trim();if(/^Monat:\s/.test(i)||/^Einzelergebnisse\s/.test(i)||/^Tag\b/.test(i)||/^Wochensumme/.test(i)||/^\d{2}\s+(MO|DI|MI|DO|FR|SA|SO)\b/.test(i)||/^Übersicht für den Zeitraum/i.test(i)||/^Abwesenheitsansprüche/i.test(i))break;s.lastIndex=0;let l;for(;(l=s.exec(i))!=null;){const r=l[1],c=l[2].trim(),o=Ye(l[3]);a.raw[r]={beschreibung:c,wert:o},r==="0008"&&(a.glz.saldoVorperiode=o),r==="8016"&&(a.glz.saldoAktuellePeriode=o),r==="9802"&&(a.glz.umgebuchteStunden=o),r==="0005"&&(a.glz.saldoGesamt=o),r==="9803"&&(a.glz.ueberzaehligeStd=o),r==="0050"&&(a.zeitkonten.produktivstunden=o),r==="9011"&&(a.flexi.jahreskontoVorperiode=o),r==="9010"&&(a.flexi.jahreskontoSaldo=o),r==="9020"&&(a.flexi.langzeitkontoSaldo=o),r==="9203"&&(a.zeitkonten.azMonatsendeUeber216=o),r==="9207"&&(a.zeitkonten.auszahlungBav=o),r==="9205"&&(a.zeitkonten.summeAuszahlung=o)}if(n++,n-t>80)break}return n}function We(e,t){if(!t)return null;const a=e.trim(),n=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)(?:\s+(.+))?$/.exec(a);if(!n)return null;const s=parseInt(n[1],10),i=n[2],l=(n[3]??"").trim();let r=t.jahr,c=t.monat;const o=new Date(r,c-1,s),d={datum:Ba(o),datumDate:o.toISOString(),wochentag:i,tagNr:s,monatKey:Xe(o),wocheKey:Oa(o),zeitSpannen:[],aktivitaeten:[],ist:null,soll:null,diff:null,pause:null,tazp:null,tagestyp:null,raw:a};return l?($n(l,d),d):(d.tagestyp=["SA","SO"].includes(i)?"Wochenende":null,d)}function Mn(e){const t=e.trim(),a=/^(Stempelzeit|Reise öff\.VM\/PKW Beifahr\.|Reise öff\.VM\/PKW|Dienstreise Arbeitszeit)\s+(\d{2}:\d{2})\s+(\d{2}:\d{2})\s*$/.exec(t);return a?{aktivitaet:a[1],von:a[2],bis:a[3]}:null}function $n(e,t){let a=null,n=e;for(const d of mn)if(e.startsWith(d)){a=d,n=e.slice(d.length).trim();break}a||(a=e.split(/\s+/)[0],n=e.slice(a.length).trim()),t.tagestyp=zn(a),t.aktivitaeten.push(a);const s=n.split(/\s+/).filter(Boolean),i=/^\d{2}:\d{2}$/,l=/^-?[\d,.]+-?$/;let r=0;for(;s[r]&&i.test(s[r])&&s[r+1]&&i.test(s[r+1]);)t.zeitSpannen.push({aktivitaet:a,von:s[r],bis:s[r+1]}),r+=2;const c=[];for(;r<s.length&&l.test(s[r]);){const d=Ye(s[r]);d!=null&&c.push(d),r++}let o=s[r];c.length>=5?([t.ist,t.soll,t.diff,t.pause]=c,o||(o=String(c[4]))):c.length===4?[t.ist,t.soll,t.diff,t.pause]=c:c.length===3?[t.ist,t.soll,t.diff]=c:c.length===2?[t.ist,t.soll]=c:c.length===1&&(t.ist=c[0]),o&&(t.tazp=String(o))}function Sn(e){if(!e)return null;let t=e.monat-1,a=e.jahr;return t<1&&(t=12,a-=1),{jahr:a,monat:t,monatKey:`${a}-${String(t).padStart(2,"0")}`}}function zn(e){return e?/^Stempelzeit$/i.test(e)?"Stempelzeit":/^Berufsschule Std\. bez$/i.test(e)||/^Berufsschule$/i.test(e)?"Berufsschule":/Dienstreise/i.test(e)||/Reise/i.test(e)?"Dienstreise":/^Urlaub$/i.test(e)?"Urlaub":/^Gleitzeit$/i.test(e)?"Gleitzeit":/Arbeitsunf.higkeit/i.test(e)?"Arbeitsunfähigkeit":/^(Neujahr|Karfreitag|Ostermontg|Ostmontg|Osterso\.|Hl\.3 Kön\.|Allerhlg|Pfingstmo|Fronleichn|TdDtEinh|TgDtEinh)$/i.test(e)?"Feiertag":e:null}async function kn({root:e}){const t=await Ue(),a=await j();e.innerHTML=`
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
        ${t.length===0?'<div class="empty-state"><div class="empty-state-icon">📭</div><p>Noch keine Uploads</p></div>':it(t)}
      </div>
    </div>
  `;const n=e.querySelector("#upload-zone"),s=e.querySelector("#file-input");n.addEventListener("click",()=>s.click()),n.addEventListener("dragover",i=>{i.preventDefault(),n.classList.add("drag")}),n.addEventListener("dragleave",()=>n.classList.remove("drag")),n.addEventListener("drop",async i=>{var r;i.preventDefault(),n.classList.remove("drag");const l=(r=i.dataTransfer.files)==null?void 0:r[0];l&&await Ce(l,e,a)}),s.addEventListener("change",async i=>{var r;const l=(r=i.target.files)==null?void 0:r[0];l&&await Ce(l,e,a)}),e.querySelector("#btn-export").addEventListener("click",Dn),e.querySelector("#btn-import").addEventListener("click",()=>e.querySelector("#import-input").click()),e.querySelector("#import-input").addEventListener("change",An),e.querySelector("#btn-clear-parsed").addEventListener("click",xn),e.querySelector("#btn-reset").addEventListener("click",Pn)}async function xn(){confirm("PDF-abgeleitete Daten (Tage, Monate, Uploads) werden gelöscht. Profil und Mail-Vorlagen bleiben erhalten. Fortfahren?")&&(await ta(),k("Daten gelöscht. Profil bleibt."),setTimeout(()=>location.reload(),600))}function it(e){return`
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
            <td>${V(Tn(t.hochladeDatum))}</td>
            <td>${V(t.dateiname||"—")}</td>
            <td>${t.zeitraumVon?V(w(new Date(t.zeitraumVon))):"—"} – ${t.zeitraumBis?V(w(new Date(t.zeitraumBis))):"—"}</td>
            <td>${t.stichtagAuswertung?V(w(new Date(t.stichtagAuswertung))):"—"}</td>
            <td class="num">${t.tageCount??"—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}async function Ce(e,t,a){var i,l,r;const n=t.querySelector("#upload-status"),s=t.querySelector("#upload-zone");s.style.pointerEvents="none",s.style.opacity="0.6",n.innerHTML=`
    <div class="alert severity-info">
      <div class="loader-ring" style="width: 24px; height: 24px; border-width: 2px;"></div>
      <div class="alert-body">
        <div class="alert-title">PDF wird verarbeitet…</div>
        <p style="margin: 4px 0; font-size: 13px;"><strong>${V(e.name)}</strong> — das kann bei großen PDFs einige Sekunden dauern.</p>
      </div>
    </div>`;try{const c=await e.arrayBuffer(),o=await pn(c);await Yt(o.tage),await Qt(o.monate),await Xt({dateiname:e.name,zeitraumVon:((i=o.meta.zeitraumVon)==null?void 0:i.toISOString())??null,zeitraumBis:((l=o.meta.zeitraumBis)==null?void 0:l.toISOString())??null,stichtagAuswertung:((r=o.meta.stichtagAuswertung)==null?void 0:r.toISOString())??null,tageCount:o.tage.length,monateCount:o.monate.length});const d=await F(),f=et(d),g={...Je(),...a};(f.wochentageWoechentlich.length>0||f.wochentage14Taegig.length>0)&&(g.berufsschulMuster=f),await fe(g),n.innerHTML=`
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
    `,k(`PDF verarbeitet: ${o.tage.length} Tage.`);const u=await Ue();t.querySelector("#uploads-list").innerHTML=it(u)}catch(c){console.error(c),n.innerHTML=`
      <div class="alert severity-error">
        <div class="alert-icon">!</div>
        <div class="alert-body">
          <div class="alert-title">Fehler beim Parsen</div>
          <p style="margin: 4px 0; font-size: 13px;">${V(c.message||String(c))}</p>
          <p style="margin: 4px 0; font-size: 12px; color: var(--fg-muted);">Prüfe, ob es sich um einen Putzmeister-SAP-Zeitnachweis handelt. Bei einem anderen Layout kann der Parser fehlschlagen.</p>
        </div>
      </div>
    `,ye("PDF konnte nicht gelesen werden.")}finally{s.style.pointerEvents="",s.style.opacity=""}}async function Dn(){try{const e=await aa(),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),a=URL.createObjectURL(t),n=document.createElement("a"),s=new Date().toISOString().slice(0,10);n.href=a,n.download=`zeitnachweis-backup-${s}.json`,n.click(),URL.revokeObjectURL(a),k("Backup heruntergeladen.")}catch(e){ye(`Export fehlgeschlagen: ${e.message}`)}}async function An(e){var a;const t=(a=e.target.files)==null?void 0:a[0];if(t)try{const n=await t.text(),s=JSON.parse(n);if(!confirm("Existierende Daten werden überschrieben. Fortfahren?"))return;await na(s),k("Backup erfolgreich importiert. Seite wird neu geladen…"),setTimeout(()=>location.reload(),800)}catch(n){ye(`Import fehlgeschlagen: ${n.message}`)}}async function Pn(){confirm("ALLE Daten endgültig löschen? Das lässt sich nicht rückgängig machen.")&&confirm("Wirklich alle Daten löschen? Letzte Warnung.")&&(await ea(),k("Alle Daten gelöscht."),setTimeout(()=>location.reload(),600))}function Tn(e){if(!e)return"—";const t=new Date(e);return t.toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"})+" "+t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}const Oe={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag"};async function En({root:e}){var s,i,l,r;const t=await j(),a=t.berufsschulMuster??{},n=(((s=a.wochentageWoechentlich)==null?void 0:s.length)??0)>0||(((i=a.wochentage14Taegig)==null?void 0:i.length)??0)>0;e.innerHTML=`
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
          <input type="email" name="zeitwirtschaftEmail" value="${Be(t.zeitwirtschaftEmail)}" />
        </div>
        <div class="form-group">
          <label>Anrede in Mails</label>
          <input type="text" name="zeitwirtschaftAnrede" value="${Be(t.zeitwirtschaftAnrede)}" placeholder="Frau Kanarya" />
        </div>
      </div>

      <div class="card" style="grid-column: 1 / -1;">
        <h2>Berufsschul-Rhythmus <span style="font-size: 11px; font-weight: 500; color: var(--fg-subtle); text-transform: uppercase; letter-spacing: 0.05em; margin-left: 8px;">Automatisch erkannt</span></h2>
        ${n?`
          <div class="tag-detail">
            <div class="tag-detail-label">Wöchentlich</div>
            <div class="tag-detail-value"><strong>${((l=a.wochentageWoechentlich)==null?void 0:l.map(c=>Oe[c]).join(", "))||"—"}</strong></div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Alle 2 Wochen</div>
            <div class="tag-detail-value"><strong>${((r=a.wochentage14Taegig)==null?void 0:r.map(c=>Oe[c]).join(", "))||"—"}</strong>${a.referenzDatum14Taegig?` <span class="hint">(Anker: ${w(new Date(a.referenzDatum14Taegig))})</span>`:""}</div>
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
  `,e.querySelector("#profil-form").addEventListener("submit",async c=>{var f,g;c.preventDefault();const o=new FormData(c.target),d={...t,ueber18:o.get("ueber18")==="on",zeitwirtschaftEmail:((f=o.get("zeitwirtschaftEmail"))==null?void 0:f.trim())||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:((g=o.get("zeitwirtschaftAnrede"))==null?void 0:g.trim())||"Frau Kanarya"};await fe(d),k("Profil gespeichert.")})}function Be(e){return String(e??"").replace(/"/g,"&quot;")}async function Ln({root:e}){var s;const t=await ee(),a=await F(),n={};for(const i of a)n[s=i.monatKey]??(n[s]=[]),n[i.monatKey].push(i);if(t.length===0){e.innerHTML=Bn("Noch keine Monatsdaten. Lade zuerst ein PDF unter Daten hoch.");return}e.innerHTML=`
    <h1 class="view-title">Monate</h1>
    <p class="view-subtitle">${t.length} Monate erfasst. Klicke für Details.</p>

    <div class="grid cols-2">
      ${t.slice().reverse().map(i=>{var g;const r=(n[i.monatKey]??[]).filter(u=>u.ist!=null&&u.ist>0),c=r.reduce((u,h)=>u+(h.ist??0),0),o=r.reduce((u,h)=>u+(h.soll??0),0),d=c-o,f=(g=i.glz)==null?void 0:g.saldoGesamt;return`
          <a href="#/monat/${i.monatKey}" class="card" style="text-decoration: none; color: inherit; display: block;">
            <div class="card-split" style="margin-bottom: 12px;">
              <h2 style="margin: 0;">${ue(i.monatKey)}</h2>
              <span class="saldo-trend ${f>.05?"up":f<-.05?"down":"flat"}" style="margin: 0; font-size: 12px;">
                Saldo: <strong>${A(f??0,{signed:!0})}</strong>
              </span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 12px;">
              <div>
                <div style="color: var(--fg-subtle); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Arbeitstage</div>
                <div style="font-size: 22px; font-weight: 600;" class="tabular">${r.length}</div>
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
  `}async function Kn({params:e,root:t}){const a=e.yyyymm,[n,s,i]=await Promise.all([F(),ee(),j()]),l=s.find(o=>o.monatKey===a),r=n.filter(o=>o.monatKey===a).sort((o,d)=>o.datum.localeCompare(d.datum));if(!r.length){t.innerHTML=`<h1 class="view-title">Monat ${ue(a)}</h1><p class="view-subtitle">Keine Daten für diesen Monat.</p><a href="#/monat" class="btn">← Alle Monate</a>`;return}const c=pe(n,i,new Date).filter(o=>o.datum.startsWith(a));t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat" class="btn sm">← Alle Monate</a>
    </div>
    <h1 class="view-title">${ue(a)}</h1>
    <p class="view-subtitle">${r.length} Tage · ${c.length} Auffälligkeiten</p>

    ${l?Fn(l):""}

    <div class="card" style="margin-bottom: 24px;">
      <h2>Tagesbalken</h2>
      <div class="chart-wrap tall"><canvas id="chart-monat"></canvas></div>
    </div>

    ${c.length?`
      <div class="card" style="margin-bottom: 24px;">
        <h2>Auffälligkeiten</h2>
        ${c.map(o=>Cn(o)).join("")}
      </div>
    `:""}

    <div class="card">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Tage</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">Klicke auf ein Datum für Details</span>
      </div>
      ${Wn(r)}
    </div>
  `,ve(t.querySelector("#chart-monat"),r)}function Fn(e){var n,s,i,l;const t=((n=e.glz)==null?void 0:n.saldoGesamt)??0;return`
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
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${A(((l=e.zeitkonten)==null?void 0:l.produktivstunden)??0,{suffix:""})}</div>
      </div>
    </div>
  `}function Wn(e){return`
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
        ${e.map(t=>{const a=t.diff>.05?"positive":t.diff<-.05?"negative":"",n=ie(t.zeitSpannen);return`
            <tr>
              <td><a href="#/tag/${t.datum}" style="color: inherit; text-decoration: none;"><span class="tabular">${w(new Date(t.datum))}</span> <span style="color: var(--fg-subtle);">${t.wochentag}</span></a></td>
              <td>${t.tagestyp?`<span class="pill ${On(t.tagestyp)}">${ae(t.tagestyp)}</span>`:"—"}</td>
              <td>${re(n,{size:18})}</td>
              <td class="num tabular">${t.ist!=null?t.ist.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular">${t.soll!=null?t.soll.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular ${a}">${t.diff!=null?A(t.diff,{signed:!0,suffix:""}):"—"}</td>
              <td class="num tabular">${t.pause!=null?t.pause.toFixed(2).replace(".",","):"—"}</td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `}function Cn(e){return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i"}</div>
      <div class="alert-body">
        <div class="alert-title">${ae(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${ae(e.beschreibung)}</p>
        ${e.mailVorlageKey?`<div class="alert-actions"><a href="#/mails" class="btn primary sm">Mail schreiben</a><a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a></div>`:""}
      </div>
    </div>
  `}function ue(e){const[t,a]=e.split("-"),n=new Date(parseInt(t),parseInt(a)-1,1);return z(n,"LLLL yyyy",{locale:_})}function On(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function Bn(e){return`<div class="empty-state"><div class="empty-state-icon">📭</div><p>${ae(e)}</p><a href="#/daten" class="btn primary">Zu Daten</a></div>`}function ae(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function In({root:e}){var s;const t=await F();if(!t.length){e.innerHTML='<h1 class="view-title">Wochen</h1><p class="view-subtitle">Noch keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a={};for(const i of t)a[s=i.wocheKey]??(a[s]={key:i.wocheKey,tage:[],ist:0,soll:0}),a[i.wocheKey].tage.push(i),a[i.wocheKey].ist+=i.ist??0,a[i.wocheKey].soll+=i.soll??0;const n=Object.keys(a).sort().reverse();e.innerHTML=`
    <h1 class="view-title">Wochen</h1>
    <p class="view-subtitle">${n.length} Wochen erfasst.</p>

    <div>
      ${n.map(i=>{const l=a[i],r=l.ist-l.soll,c=r>.05?"positive":r<-.05?"negative":"";return`
          <a href="#/woche/${i}" class="list-item">
            <div class="tabular" style="font-size: 16px; font-weight: 600; color: var(--fg-muted);">${ne(rt(i))}</div>
            <div>
              <div class="list-item-title">Ist: ${l.ist.toFixed(2).replace(".",",")}h · Soll: ${l.soll.toFixed(2).replace(".",",")}h</div>
              <div class="list-item-sub">${l.tage.length} Tage erfasst</div>
            </div>
            <div class="tabular ${c}" style="font-weight: 600; font-size: 16px;">${A(r,{signed:!0})}</div>
            <div style="color: var(--fg-subtle);">→</div>
          </a>
        `}).join("")}
    </div>
  `}async function Vn({params:e,root:t}){const a=await F(),n=e.yyyykw,s=a.filter(c=>c.wocheKey===n).sort((c,o)=>c.datum.localeCompare(o.datum));if(!s.length){t.innerHTML=`<h1 class="view-title">KW ${ne(n)}</h1><p>Keine Daten.</p><a href="#/woche" class="btn">← Alle Wochen</a>`;return}const i=s.reduce((c,o)=>c+(o.ist??0),0),l=s.reduce((c,o)=>c+(o.soll??0),0),r=i-l;t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/woche" class="btn sm">← Alle Wochen</a>
    </div>
    <h1 class="view-title">${ne(rt(n))}</h1>
    <p class="view-subtitle">${s.length} Tage</p>

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${i.toFixed(2).replace(".",",")}h</div>
      </div>
      <div class="card">
        <h3>Soll-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${l.toFixed(2).replace(".",",")}h</div>
      </div>
      <div class="card">
        <h3>Differenz</h3>
        <div class="tabular ${r>.05?"positive":r<-.05?"negative":""}" style="font-size: 28px; font-weight: 650; color: ${r>.05?"var(--success)":r<-.05?"var(--danger)":"var(--fg)"};">${A(r,{signed:!0})}</div>
      </div>
    </div>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Tagesverteilung</h2>
      <div class="chart-wrap"><canvas id="chart-woche"></canvas></div>
    </div>

    <div class="card">
      <h2>Tage dieser Woche</h2>
      ${_n(s)}
    </div>
  `,ve(t.querySelector("#chart-woche"),s)}function _n(e){return`
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
        ${e.map(t=>{const a=t.diff>.05?"positive":t.diff<-.05?"negative":"",n=ie(t.zeitSpannen);return`
            <tr>
              <td><a href="#/tag/${t.datum}" style="color: inherit;"><span class="tabular">${z(S(t.datum),"dd.MM.yyyy")}</span> ${t.wochentag}</a></td>
              <td>${t.tagestyp?`<span class="pill ${Rn(t.tagestyp)}">${ne(t.tagestyp)}</span>`:"—"}</td>
              <td>${re(n,{size:18})}</td>
              <td class="num tabular">${t.ist!=null?t.ist.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular">${t.soll!=null?t.soll.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular ${a}">${t.diff!=null?A(t.diff,{signed:!0,suffix:""}):"—"}</td>
              <td class="num tabular">${t.pause!=null?t.pause.toFixed(2).replace(".",","):"—"}</td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `}function rt(e){const[t,a]=e.split("-");return`KW ${a} · ${t}`}function Rn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function ne(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function jn({params:e,root:t}){var o,d,f;const a=e.datum,n=await m.tage.get(a),s=await j();if(!n){t.innerHTML=`<h1 class="view-title">Tag nicht gefunden</h1><p>Für ${a} liegen keine Daten vor.</p><a href="#/" class="btn">← Dashboard</a>`;return}const i=S(a),l=n.tagestyp==="Stempelzeit"?at(n,s):null,r=me(i,s.berufsschulMuster),c=ie(n.zeitSpannen);t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat/${a.slice(0,7)}" class="btn sm">← Zum Monat</a>
    </div>
    <h1 class="view-title">${Qe(i)}</h1>
    <p class="view-subtitle">${n.tagestyp??"Kein Typ"} · KW ${(o=n.wocheKey)==null?void 0:o.split("-")[1]}</p>

    ${c?`
      <div class="card kommen-gehen-hero" style="margin-bottom: 24px;">
        <div class="hint" style="text-transform: uppercase; letter-spacing: 0.05em; font-size: 11px; margin-bottom: 10px;">Tages-Rahmen</div>
        ${re(c,{size:32})}
      </div>
    `:""}

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${n.ist!=null?n.ist.toFixed(2).replace(".",",")+"h":"—"}</div>
        <div class="hint">= ${n.ist!=null?B(n.ist):"—"}</div>
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
        ${(d=n.zeitSpannen)!=null&&d.length?n.zeitSpannen.map(g=>`
              <div class="tag-detail">
                <div class="tag-detail-label">${Y(g.aktivitaet??"Stempelzeit")}</div>
                <div class="tag-detail-value tabular">${g.von??"—"} – ${g.bis??"—"}</div>
              </div>
            `).join(""):'<p class="hint">Keine Stempelzeiten für diesen Tag.</p>'}
      </div>

      <div class="card">
        <h2>Klassifikation</h2>
        <div class="tag-detail">
          <div class="tag-detail-label">Tagestyp</div>
          <div class="tag-detail-value">${n.tagestyp?`<span class="pill ${Zn(n.tagestyp)}">${Y(n.tagestyp)}</span>`:"—"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Laut Profil</div>
          <div class="tag-detail-value">${r?"🎓 Berufsschultag erwartet":"Regulärer Werktag"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">TAZP-Code</div>
          <div class="tag-detail-value"><code>${Y(n.tazp??"—")}</code></div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Monat</div>
          <div class="tag-detail-value">${Y(n.monatKey)}</div>
        </div>
      </div>

      ${l&&!l.keinAnspruch?`
        <div class="card" style="grid-column: 1 / -1;">
          <h2>Pausen-Analyse</h2>
          <div class="grid cols-2">
            <div>
              <div class="tag-detail">
                <div class="tag-detail-label">Arbeitszeit (netto)</div>
                <div class="tag-detail-value tabular">${(f=l.arbeitszeitOhnePause)==null?void 0:f.toFixed(2).replace(".",",")}h</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Gestempelte Pause</div>
                <div class="tag-detail-value tabular">${Math.round((l.gestempeltePause??0)*60)} min</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Abgezogene Pause</div>
                <div class="tag-detail-value tabular">${Math.round((l.abgezogenePause??0)*60)} min</div>
              </div>
            </div>
            <div>
              <div class="tag-detail">
                <div class="tag-detail-label">Gesetzl. Pflicht</div>
                <div class="tag-detail-value tabular">${Math.round((l.gesetzlichePflicht??0)*60)} min</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Angewendetes Gesetz</div>
                <div class="tag-detail-value">${l.gesetz==="jarbschg"?"JArbSchG §11 (Minderjährig)":"ArbZG §4 (Erwachsen)"}</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Legaler Abzug (Max aus gestempelt / Pflicht)</div>
                <div class="tag-detail-value tabular">${Math.round((l.legalerAbzug??0)*60)} min</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Unrechtmäßiger Pausen-Abzug</div>
                <div class="tag-detail-value tabular" style="color: ${(l.unrechtmaessigerVerlustMin??0)>0?"var(--danger)":"var(--fg)"};">${l.unrechtmaessigerVerlustMin??0} min</div>
              </div>
              ${l.aufstockungMin>0?`
              <div class="tag-detail">
                <div class="tag-detail-label">Gesetzliche Aufstockung</div>
                <div class="tag-detail-value tabular" style="color: var(--warn);">${l.aufstockungMin} min</div>
              </div>`:""}
            </div>
          </div>
          ${l.warnung?`
            <div class="alert severity-warn" style="margin-top: 12px;">
              <div class="alert-icon">⚠</div>
              <div class="alert-body">${Y(l.warnung)}</div>
            </div>
          `:""}
        </div>
      `:""}
    </div>
  `}function Zn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function Y(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function Hn({root:e}){const[t,a]=await Promise.all([F(),ee()]);if(!t.length){e.innerHTML='<h1 class="view-title">Analytics</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}e.innerHTML=`
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
  `,requestAnimationFrame(()=>{Ua(e.querySelector("#c-saldo"),a),st(e.querySelector("#heatmap"),t,{monate:8}),tn(e.querySelector("#c-istsoll"),t),an(e.querySelector("#c-kumulativ"),t),Ya(e.querySelector("#c-startend"),t),Xa(e.querySelector("#c-wochentag"),t),Qa(e.querySelector("#c-pausen"),t),en(e.querySelector("#c-donut"),t);const n=t.slice(-30);ve(e.querySelector("#c-alle-tage"),n)})}async function Nn({root:e}){const t=await F();if(!t.length){e.innerHTML='<h1 class="view-title">Berichtsheft</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a=[...new Set(t.map(i=>i.monatKey))].sort().reverse();e.innerHTML=`
    <h1 class="view-title">Berichtsheft-Export</h1>
    <p class="view-subtitle">Kopiere die Arbeitsstunden im HH:MM-Format direkt in dein Berichtsheft.</p>

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 16px; align-items: center;">
        <h2 style="margin: 0;">Filter</h2>
        <div style="display: flex; gap: 8px; align-items: center;">
          <label style="color: var(--fg-muted); font-size: 13px;">Monat:</label>
          <select id="filter-monat">
            <option value="">Alle</option>
            ${a.map(i=>`<option value="${i}">${Jn(i)}</option>`).join("")}
          </select>
          <button class="btn sm" id="btn-copy-all">Alle sichtbaren kopieren</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div id="liste"></div>
    </div>
  `;const n=e.querySelector("#filter-monat");n.addEventListener("change",()=>s()),e.querySelector("#btn-copy-all").addEventListener("click",()=>{const i=e.querySelectorAll("#liste tr[data-copy]"),l=Array.from(i).map(r=>r.getAttribute("data-copy")).join(`
`);navigator.clipboard.writeText(l).then(()=>k(`${i.length} Zeilen kopiert.`))});function s(){const i=n.value,r=(i?t.filter(c=>c.monatKey===i):t).filter(c=>c.ist!=null&&c.ist>0&&c.tagestyp!=="Wochenende");e.querySelector("#liste").innerHTML=Gn(r),e.querySelectorAll(".copy-val").forEach(c=>{c.addEventListener("click",async()=>{const o=c.getAttribute("data-val");await navigator.clipboard.writeText(o),c.classList.add("ok");const d=c.textContent;c.textContent="✓ kopiert",setTimeout(()=>{c.classList.remove("ok"),c.textContent=d},1200)})})}s()}function Gn(e){return e.length?`
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
        ${e.map(t=>{const a=B(t.ist),n=`${w(S(t.datum))}	${a}`;return`
            <tr data-copy="${Ie(n)}">
              <td class="tabular">${w(S(t.datum))}</td>
              <td>${qn(t.wochentag)}</td>
              <td>${t.tagestyp?`<span class="pill ${Un(t.tagestyp)}">${lt(t.tagestyp)}</span>`:"—"}</td>
              <td class="num tabular">${t.ist.toFixed(2).replace(".",",")}</td>
              <td class="num tabular" style="font-weight: 600;">${a}</td>
              <td><button class="copy-val" data-val="${Ie(a)}">📋 ${a}</button></td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `:'<p style="color: var(--fg-muted);">Keine Tage in dieser Auswahl.</p>'}function qn(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function Jn(e){const[t,a]=e.split("-");return z(new Date(parseInt(t),parseInt(a)-1,1),"LLLL yyyy",{locale:_})}function Un(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function lt(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ie(e){return lt(e)}const Yn={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"},we={bs_tag_fehlt:{key:"bs_tag_fehlt",titel:"Berufsschultag fehlt",beschreibung:"Wenn ein Berufsschultag komplett nicht im Zeitnachweis eingetragen wurde.",betreff:"Bitte um Zeitkorrektur im ESS  - Fehlender Berufsschultag {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

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

Vielen Dank!`}};function ot(e,t){const a=we[e];return a?{...a,...t??{}}:null}function ct(e,t){const a=Ve(e.text,t);return{betreff:Ve(e.betreff,t),text:a}}function Ve(e,t){return e.replace(/\{(\w+)\}/g,(a,n)=>t[n]!=null?String(t[n]):`{${n}}`)}function Qn(e,t){const a=t.datum?new Date(t.datum):null;return{name:"",personalnr:"",kostenstelle:"",datum:a?Qe(a).split(", ")[1]:"",wochentag:Yn[t.wochentag]??t.wochentag??"",zeitwirtschaft_anrede:e.zeitwirtschaftAnrede||"Frau Kanarya",zeitwirtschaft_email:e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",ist:t.ist!=null?t.ist.toFixed(2).replace(".",","):"",soll:t.soll!=null?t.soll.toFixed(2).replace(".",","):"",abgezogen:t.abgezogen!=null?Math.round(t.abgezogen*60):"",gestempelt:t.gestempelt!=null?Math.round(t.gestempelt*60):"",verlust:t.verlustMinuten??""}}function Xn(e,t,a){const n=ct(t,a),s=e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",i=new URLSearchParams;return i.set("subject",n.betreff),i.set("body",n.text),`mailto:${s}?${i.toString().replace(/\+/g,"%20")}`}async function es({root:e}){const[t,a,n,s]=await Promise.all([F(),j(),ee(),sa()]),i=Object.fromEntries(s.map(c=>[c.key,c])),l=pe(t,a,new Date).filter(c=>c.mailVorlageKey),r=nt(n);e.innerHTML=`
    <h1 class="view-title">Mail-Vorlagen</h1>
    <p class="view-subtitle">Vorformulierte Mails an die Zeitwirtschaft bei erkannten Fehlern im Zeitnachweis.</p>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Offene Warnungen mit Mail-Vorschlag</h2>
      <p class="hint" style="margin-bottom: 16px;">Diese Warnungen haben einen roten Schweregrad und sind eine direkte Mail wert.</p>

      ${l.length===0?'<div class="empty-state"><div class="empty-state-icon">✓</div><p>Keine akuten Warnungen — top.</p></div>':l.map(c=>ts(c,a,i)).join("")}

      ${r.length>0?`
        <h3 style="margin-top: 24px;">Saldo-Plausibilität</h3>
        ${r.map(c=>`
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
        ${Object.keys(we).map(c=>{const o=ot(c,i[c]);return as(o)}).join("")}
      </div>
    </div>
  `,ns(e),ss(e)}function ts(e,t,a){const n=ot(e.mailVorlageKey,a[e.mailVorlageKey]);if(!n)return"";const s=Qn(t,e),i=ct(n,s),l=Xn(t,n,s);return`
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
        <a class="btn primary sm" href="${l}" target="_blank" rel="noopener">Mail Vorschlag in Outlook →</a>
        <button class="btn sm btn-copy-mail" data-subject="${ge(i.betreff)}" data-body="${ge(i.text)}">📋 Betreff + Text kopieren</button>
      </div>
    </div>
  `}function as(e){return`
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
        <input type="text" class="v-betreff" value="${ge(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 240px;">${T(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function ns(e){e.querySelectorAll(".btn-save-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-key"),n=t.closest(".vorlagen-item"),s=n.querySelector(".v-betreff").value,i=n.querySelector(".v-text").value;await Ae(a,{betreff:s,text:i}),k("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-key"),n=we[a];n&&confirm(`Vorlage "${n.titel}" auf Default zurücksetzen?`)&&(await Ae(a,{betreff:n.betreff,text:n.text}),k("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function ss(e){e.querySelectorAll(".btn-copy-mail").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-subject"),n=t.getAttribute("data-body"),s=`Betreff: ${a}

${n}`;await navigator.clipboard.writeText(s),k("Mail-Text kopiert.")})})}function T(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function ge(e){return T(e)}async function is({root:e}){const t=Ne(),a=await j();e.innerHTML=`
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
  `,e.querySelectorAll("[data-theme]").forEach(n=>{n.addEventListener("click",()=>{const s=n.getAttribute("data-theme");he(s),e.querySelectorAll("[data-theme]").forEach(i=>i.classList.toggle("active",i===n)),k(`Theme: ${n.textContent.trim()}`)})}),e.querySelector("#pause-sel").addEventListener("change",async n=>{const s={...a,pausenRegel:n.target.value};await fe(s),k("Pausen-Regel gespeichert.")})}async function _e(){var t;Ft();const e=document.getElementById("content");(t=document.getElementById("theme-toggle"))==null||t.addEventListener("click",()=>Wt()),Ct(()=>{_t()}),await qt()&&setTimeout(()=>{be('Parser wurde aktualisiert. Bitte lade deinen Zeitnachweis unter "Daten" neu hoch.',{type:"info",duration:12e3})},500),await Gt(),await Nt(),D("/",Te),D("/dashboard",Te),D("/analytics",Hn),D("/monat",Ln),D("/monat/:yyyymm",Kn),D("/woche",In),D("/woche/:yyyykw",Vn),D("/tag/:datum",jn),D("/berichtsheft",Nn),D("/mails",es),D("/profil",En),D("/daten",kn),D("/einstellungen",is),It(e),location.hash||Bt("/")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",_e):_e();
