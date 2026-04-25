import{D as Et}from"./dexie-BODkcwel.js";import{b as ve,a as Y,c as X,d as Lt,f as P,s as Ft,e as Wt,g as st,i as it,p as Kt,h as Bt,j as Ct,k as Vt,l as S,m as It}from"./datefns-VEit7B1-.js";import{C as W,L as Ot,B as _t,D as Ht,S as jt,a as Rt,b as Nt,P as Zt,A as qt,c as Gt,d as Jt,T as Ut,p as Yt,e as Xt,i as Qt}from"./chartjs-CRgZvhTJ.js";import{_ as ea,a as ta}from"./pdfjs-BDGsuRSB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();function aa(){document.documentElement.setAttribute("data-theme","dark")}const rt=[];function A(e,t){const a=e.split("/").filter(Boolean),n=[],s=new RegExp("^/?"+a.map(i=>i.startsWith(":")?(n.push(i.slice(1)),"([^/]+)"):ra(i)).join("/")+"/?$");rt.push({pattern:e,regex:s,paramNames:n,render:t})}function na(e){e.startsWith("#")||(e="#"+e),window.location.hash===e?B():window.location.hash=e}function sa(e,{onNavigate:t}={}){window.addEventListener("hashchange",B),B.rootEl=e,B.onNavigate=t,B()}async function B(){var n;const e=B.rootEl,t=window.location.hash.slice(1)||"/",a=t.startsWith("/")?t:`/${t}`;for(const s of rt){const i=s.regex.exec(a);if(i){const r={};s.paramNames.forEach((l,o)=>r[l]=decodeURIComponent(i[o+1])),(n=B.onNavigate)==null||n.call(B,a),ia(a);try{e.classList.remove("view-enter"),await s.render({params:r,path:a,root:e}),e.classList.add("view-enter")}catch(l){console.error("Route render error:",l),e.innerHTML=`<div class="empty-state">
          <div class="empty-state-icon">⚠</div>
          <h2>Fehler beim Anzeigen</h2>
          <p>${Ie(l.message||String(l))}</p>
        </div>`}return}}e.innerHTML=`<div class="empty-state">
    <div class="empty-state-icon">?</div>
    <h2>Seite nicht gefunden</h2>
    <p>Die Route <code>${Ie(a)}</code> existiert nicht.</p>
    <a href="#/" class="btn primary">Zum Dashboard</a>
  </div>`}function ia(e){document.querySelectorAll("[data-route]").forEach(a=>{const n=a.getAttribute("data-route"),s=n==="/"?e==="/":e===n||e.startsWith(n+"/");a.classList.toggle("active",s)});const t=e==="/"?"dashboard":e.split("/").filter(Boolean)[0];document.body.setAttribute("data-view",t||"dashboard")}function ra(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Ie(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const la="modulepreload",oa=function(e,t){return new URL(e,t).href},Oe={},ca=function(t,a,n){let s=Promise.resolve();if(a&&a.length>0){const r=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),o=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=Promise.allSettled(a.map(c=>{if(c=oa(c,n),c in Oe)return;Oe[c]=!0;const d=c.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(!!n)for(let f=r.length-1;f>=0;f--){const p=r[f];if(p.href===c&&(!d||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":la,d||(h.as="script"),h.crossOrigin="",h.href=c,o&&h.setAttribute("nonce",o),document.head.appendChild(h),d)return new Promise((f,p)=>{h.addEventListener("load",f),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return s.then(r=>{for(const l of r||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})},m=new Et("zeitnachweis");m.version(1).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"});m.version(2).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});m.version(3).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});m.version(4).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});m.version(5).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{const t=await e.table("profil").get("self");t&&(!t.zeitwirtschaftEmail||t.zeitwirtschaftEmail==="zeitwirtschaft@putzmeister.com")&&await e.table("profil").put({...t,zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com"})});m.version(6).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});m.version(7).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{const t=await e.table("profil").get("self");if(!t)return;let a=t.ueber18??!0;if(t.geburtsdatum){const s=new Date(t.geburtsdatum),i=new Date;a=i.getFullYear()-s.getFullYear()-(i<new Date(i.getFullYear(),s.getMonth(),s.getDate())?1:0)>=18}const n={id:"self",ueber18:a,sollStundenProWoche:t.sollStundenProWoche??35,sollStundenProTag:t.sollStundenProTag??7,berufsschulMuster:t.berufsschulMuster??{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null},zeitwirtschaftEmail:t.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:t.zeitwirtschaftAnrede||"Frau Kanarya",pausenRegel:t.pausenRegel??"auto",erstelltAm:t.erstelltAm??new Date().toISOString(),updatedAt:new Date().toISOString()};await e.table("profil").put(n)});async function da(){try{const{erkenneBerufsschulMuster:e}=await ca(async()=>{const{erkenneBerufsschulMuster:r}=await Promise.resolve().then(()=>tn);return{erkenneBerufsschulMuster:r}},void 0,import.meta.url),t=await m.tage.toArray();if(!t.length)return!1;const a=e(t),n=await m.profil.get("self");if(!n)return!1;const s=n.berufsschulMuster??{};return JSON.stringify(s.wochentageWoechentlich??[])!==JSON.stringify(a.wochentageWoechentlich)||JSON.stringify(s.wochentage14Taegig??[])!==JSON.stringify(a.wochentage14Taegig)||(s.referenzDatum14Taegig??null)!==(a.referenzDatum14Taegig??null)||(s.stundenProTag??null)!==(a.stundenProTag??null)||(s.halbtags??!1)!==(a.halbtags??!1)?(await m.profil.put({...n,berufsschulMuster:a}),!0):!1}catch(e){return console.warn("[db] refreshBerufsschulMuster fehlgeschlagen:",e),!1}}async function ua(){try{const e=await m.mailVorlagen.toArray(),t=e.some(n=>n.betreff&&!n.betreff.startsWith("Bitte um Zeitkorrektur im ESS")),a=e.some(n=>n.text&&!/Vielen Dank!\s*$/.test(n.text));return t||a?(await m.mailVorlagen.clear(),!0):!1}catch(e){return console.warn("[db] ensureMailVorlagenFresh fehlgeschlagen:",e),!1}}async function ga(){const e=await m.einstellungen.get("__migration_reset");return(e==null?void 0:e.value)===!0?(await m.einstellungen.delete("__migration_reset"),!0):!1}async function C(){return await m.profil.get("self")??lt()}async function oe(e){const t={...e,id:"self",updatedAt:new Date().toISOString()};return await m.profil.put(t),t}function lt(){return{id:"self",ueber18:!0,sollStundenProWoche:35,sollStundenProTag:7,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1},zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:"Frau Kanarya",pausenRegel:"auto",erstelltAm:new Date().toISOString()}}async function ha(e,t=null){const a=await m.einstellungen.get(e);return a?a.value:t}async function fa(e,t){await m.einstellungen.put({key:e,value:t})}async function V(){return await m.tage.orderBy("datum").toArray()}async function pa(e,t,a){const n=a instanceof Date?a.toISOString():typeof a=="string"&&a?a:null,s=(c,d)=>d?c?c>d:!1:!0;let i=0,r=0,l=0,o=0;if(e.length){const c=e.map(g=>g.datum),d=await m.tage.bulkGet(c),u=[];for(let g=0;g<e.length;g++){const h={...e[g],_quellStichtag:n},f=d[g];!f||s(n,f._quellStichtag)?u.push(h):r++}u.length&&(await m.tage.bulkPut(u),i=u.length)}if(t.length){const c=t.map(g=>g.monatKey),d=await m.monate.bulkGet(c),u=[];for(let g=0;g<t.length;g++){const h={...t[g],_quellStichtag:n},f=d[g];!f||s(n,f._quellStichtag)?u.push(h):o++}u.length&&(await m.monate.bulkPut(u),l=u.length)}return{tage:i,monate:l,skippedTage:r,skippedMonate:o}}async function q(){return await m.monate.orderBy("monatKey").toArray()}async function ma(e){return await m.uploads.add({...e,hochladeDatum:new Date().toISOString()})}async function fe(){return await m.uploads.orderBy("hochladeDatum").last()}async function ot(){return await m.uploads.orderBy("hochladeDatum").reverse().toArray()}async function va(){await Promise.all([m.profil.clear(),m.tage.clear(),m.monate.clear(),m.uploads.clear(),m.einstellungen.clear(),m.mailVorlagen.clear(),m.warnungDismissals.clear()])}async function ct(){await Promise.all([m.tage.clear(),m.monate.clear(),m.uploads.clear(),m.warnungDismissals.clear()])}async function ba(){const[e,t,a,n,s,i,r]=await Promise.all([m.profil.toArray(),m.tage.toArray(),m.monate.toArray(),m.uploads.toArray(),m.einstellungen.toArray(),m.mailVorlagen.toArray(),m.warnungDismissals.toArray()]);return{version:1,exportedAt:new Date().toISOString(),data:{profil:e,tage:t,monate:a,uploads:n,einstellungen:s,mailVorlagen:i,warnungDismissals:r}}}async function ya(e){if(!e||e.version!==1||!e.data)throw new Error("Ungültiges oder inkompatibles Backup-Format.");const t=e.data;await m.transaction("rw",m.profil,m.tage,m.monate,m.uploads,m.einstellungen,m.mailVorlagen,m.warnungDismissals,async()=>{var a,n,s,i,r,l,o;(a=t.profil)!=null&&a.length&&await m.profil.bulkPut(t.profil),(n=t.tage)!=null&&n.length&&await m.tage.bulkPut(t.tage),(s=t.monate)!=null&&s.length&&await m.monate.bulkPut(t.monate),(i=t.uploads)!=null&&i.length&&await m.uploads.bulkPut(t.uploads),(r=t.einstellungen)!=null&&r.length&&await m.einstellungen.bulkPut(t.einstellungen),(l=t.mailVorlagen)!=null&&l.length&&await m.mailVorlagen.bulkPut(t.mailVorlagen),(o=t.warnungDismissals)!=null&&o.length&&await m.warnungDismissals.bulkPut(t.warnungDismissals)})}async function ce(e,t){await m.mailVorlagen.put({key:e,...t})}async function ze(){return await m.mailVorlagen.toArray()}async function wa(e,t){await m.warnungDismissals.put({key:`${e}-${t}`,datum:e,typ:t,dismissedAt:new Date().toISOString()})}async function xa(){return await m.warnungDismissals.toArray()}function dt(e){if(e==null)return null;if(typeof e=="number")return e;let t=String(e).trim();if(!t)return null;let a=!1;t.endsWith("-")&&(a=!0,t=t.slice(0,-1).trim()),t=t.replace(",",".");const n=parseFloat(t);return isNaN(n)?null:a?-n:n}function de(e){if(e==null||isNaN(e))return"—";const t=e<0,a=Math.abs(e),n=Math.floor(a),s=Math.round((a-n)*60);let i=n,r=s;return r===60&&(i+=1,r=0),`${t?"-":""}${i}:${String(r).padStart(2,"0")}`}function E(e,t={}){if(e==null||isNaN(e))return"—";const{signed:a=!1,suffix:n="h"}=t,s=a&&e>0?"+":"",i=e.toFixed(2).replace(".",",");return`${s}${i}${n}`}function F(e){if(!e)return null;const t=/^(\d{1,2}):(\d{2})$/.exec(String(e).trim());return t?parseInt(t[1],10)*60+parseInt(t[2],10):null}function ut(e){if(!(e!=null&&e.length))return null;const t=e.filter(s=>s.von&&s.bis);if(!t.length)return null;let a=t[0].von,n=t[0].bis;for(const s of t)F(s.von)<F(a)&&(a=s.von),F(s.bis)>F(n)&&(n=s.bis);return{kommen:a,gehen:n}}function ka(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
    <polyline points="10 17 15 12 10 7"/>
    <line x1="15" y1="12" x2="3" y2="12"/>
  </svg>`}function $a(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>`}function gt(e,t={}){const{size:a=20,layout:n="inline"}=t;return e?`
    <div class="kommen-gehen ${n}">
      <span class="kg-block kommen" title="Kommen (frühester Einstempel)">
        ${ka(a)}
        <span class="kg-zeit tabular">${e.kommen}</span>
      </span>
      <span class="kg-block gehen" title="Gehen (spätester Ausstempel)">
        ${$a(a)}
        <span class="kg-zeit tabular">${e.gehen}</span>
      </span>
    </div>
  `:'<span class="kg-empty">—</span>'}const _e={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},Sa=(e,t,a)=>{let n;const s=a!=null&&a.addSuffix?_e[e].withPreposition:_e[e].standalone;return typeof s=="string"?n=s:t===1?n=s.one:n=s.other.replace("{{count}}",String(t)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:"vor "+n:n},Ma={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},za={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Da={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Pa={date:ve({formats:Ma,defaultWidth:"full"}),time:ve({formats:za,defaultWidth:"full"}),dateTime:ve({formats:Da,defaultWidth:"full"})},Aa={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},Ta=(e,t,a,n)=>Aa[e],Ea={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},La={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},we={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},Fa={narrow:we.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:we.wide},Wa={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},Ka={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},Ba={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},Ca=e=>Number(e)+".",Va={ordinalNumber:Ca,era:Y({values:Ea,defaultWidth:"wide"}),quarter:Y({values:La,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Y({values:we,formattingValues:Fa,defaultWidth:"wide"}),day:Y({values:Wa,defaultWidth:"wide"}),dayPeriod:Y({values:Ka,defaultWidth:"wide",formattingValues:Ba,defaultFormattingWidth:"wide"})},Ia=/^(\d+)(\.)?/i,Oa=/\d+/i,_a={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},Ha={any:[/^v/i,/^n/i]},ja={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},Ra={any:[/1/i,/2/i,/3/i,/4/i]},Na={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},Za={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},qa={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},Ga={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},Ja={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},Ua={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},Ya={ordinalNumber:Lt({matchPattern:Ia,parsePattern:Oa,valueCallback:e=>parseInt(e)}),era:X({matchPatterns:_a,defaultMatchWidth:"wide",parsePatterns:Ha,defaultParseWidth:"any"}),quarter:X({matchPatterns:ja,defaultMatchWidth:"wide",parsePatterns:Ra,defaultParseWidth:"any",valueCallback:e=>e+1}),month:X({matchPatterns:Na,defaultMatchWidth:"wide",parsePatterns:Za,defaultParseWidth:"any"}),day:X({matchPatterns:qa,defaultMatchWidth:"wide",parsePatterns:Ga,defaultParseWidth:"any"}),dayPeriod:X({matchPatterns:Ja,defaultMatchWidth:"wide",parsePatterns:Ua,defaultParseWidth:"any"})},G={code:"de",formatDistance:Sa,formatLong:Pa,formatRelative:Ta,localize:Va,match:Ya,options:{weekStartsOn:1,firstWeekContainsDate:4}};function ae(e){if(!e)return null;const t=e.trim();return Kt(t,"dd.MM.yyyy",new Date)}function $(e){return P(e,"dd.MM.yyyy")}function ht(e){return P(e,"EE, dd.MM.yyyy",{locale:G})}function De(e){const t=Ft(e,{weekStartsOn:1}),a=Wt(e,{weekStartsOn:1});return`${P(t,"dd.MM.")} – ${P(a,"dd.MM.yyyy")}`}function Xa(e){return`${Bt(e)}-${String(Ct(e)).padStart(2,"0")}`}function ft(e){return P(e,"yyyy-MM")}function Qa(e){return P(e,"yyyy-MM-dd")}function en(e,t){if(!e||!t)return 0;e>t&&([e,t]=[t,e]);let a=0,n=new Date(e);for(;n<t;)n=st(n,1),it(n)||a++;return a}function w(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function pt(e){var d;const t=e.filter(u=>u.tagestyp==="Berufsschule");if(t.length<2)return{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1};const a={};for(const u of t)a[d=u.wochentag]??(a[d]=[]),a[u.wochentag].push(u);const n=[],s=[];let i=null;for(const[u,g]of Object.entries(a)){if(g.sort((p,b)=>p.datum.localeCompare(b.datum)),g.length<2)continue;const h=[];for(let p=1;p<g.length;p++)h.push(Vt(S(g[p].datum),S(g[p-1].datum)));const f=He(h);f<=10?n.push(u):f<=18&&(s.push(u),(!i||S(g[0].datum)<S(i))&&(i=g[0].datum))}const r=t.map(u=>u.ist).filter(u=>u!=null&&u>0),l=He(r),o=l!=null?Math.round(l*4)/4:null,c=o!=null&&o<5;return{wochentageWoechentlich:n,wochentage14Taegig:s,referenzDatum14Taegig:i,stundenProTag:o,halbtags:c}}function He(e){if(!e.length)return null;const t=e.slice().sort((n,s)=>n-s),a=Math.floor(t.length/2);return t.length%2?t[a]:(t[a-1]+t[a])/2}function Pe(e,t){var s,i;if(!t)return!1;const n=["SO","MO","DI","MI","DO","FR","SA"][e.getDay()];if((s=t.wochentageWoechentlich)!=null&&s.includes(n))return!0;if((i=t.wochentage14Taegig)!=null&&i.includes(n)&&t.referenzDatum14Taegig){const r=S(t.referenzDatum14Taegig),l=It(e,r,{weekStartsOn:1});if(l>=0&&l%2===0)return!0}return!1}function mt(e,t=null){return(e==null?void 0:e.halbtags)===!0&&(e==null?void 0:e.stundenProTag)!=null&&e.stundenProTag>0?e.stundenProTag:t}const tn=Object.freeze(Object.defineProperty({__proto__:null,erkenneBerufsschulMuster:pt,erwarteteBerufsschulStunden:mt,istBerufsschulTagLautMuster:Pe},Symbol.toStringTag,{value:"Module"}));function an(e){return e?"arbzg":"jarbschg"}function nn(e,t){return e==null?0:t==="jarbschg"?e>6?1:e>4.5?.5:0:e>9?.75:e>6?.5:0}function vt(e){if(!e||e.length<2)return 0;const t=e.filter(n=>n.von&&n.bis).map(n=>({von:F(n.von),bis:F(n.bis)})).filter(n=>n.von!=null&&n.bis!=null).sort((n,s)=>n.von-s.von);let a=0;for(let n=1;n<t.length;n++){const s=t[n].von-t[n-1].bis;(s>0&&s>=15||s>0)&&(a+=s)}return a/60}function bt(e,t){const a=e.zeitSpannen??[];if(!a.length||a.every(f=>!f.von))return{keinAnspruch:!0};const n=vt(a),s=e.pause??0,i=sn(a),r=i-s,l=t.pausenRegel&&t.pausenRegel!=="auto"?t.pausenRegel==="jarbschg"?"jarbschg":"arbzg":an(!!t.ueber18),o=nn(r,l),c=Math.max(n,o),d=s-c,u=Math.max(0,o-n);let g="ok",h=null;if(d>.05)g="fehler_zeitwirtschaft",h=`${Math.round(d*60)} min Pause wurden zusätzlich zur gesetzlichen Pflicht und zur gestempelten Pause abgezogen. Das sieht nach einem Zeitwirtschafts-Fehler aus.`;else if(u>.05&&s>n+.02){g="aufstockung_legal";const f=Math.round(u*60);h=`Du hast ${Math.round(n*60)} min Pause gestempelt, aber bei ${r.toFixed(2).replace(".",",")}h Arbeitszeit schreibt das Gesetz (${l.toUpperCase()}) ${Math.round(o*60)} min vor. Die fehlenden ${f} min wurden automatisch als Pause gewertet. Das ist gesetzeskonform — nächstes Mal einfach länger Pause machen.`}return{arbeitszeitMitPause:i,arbeitszeitOhnePause:r,gestempeltePause:n,abgezogenePause:s,gesetzlichePflicht:o,gesetz:l,legalerAbzug:c,unrechtmaessigerVerlustMin:Math.round(Math.max(0,d)*60),aufstockungMin:Math.round(Math.max(0,u)*60),typ:g,warnung:h}}function sn(e){let t=0;for(const a of e){if(!a.von||!a.bis)continue;const n=F(a.von),s=F(a.bis);n!=null&&s!=null&&s>n&&(t+=s-n)}return t/60}const Q={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function pe(e,t,a,n=new Set){var d,u;const s=[],i=a??new Date,r=new Map(e.map(g=>[g.datum,g]));if(!e.length)return s;const l=S(e[0].datum),o=i;for(let g=new Date(l);g<=o;g=st(g,1)){if(it(g))continue;const h=P(g,"yyyy-MM-dd"),f=r.get(h),p=en(g,o);if(!f||!f.tagestyp&&!f.ist&&(((d=f.zeitSpannen)==null?void 0:d.length)??0)===0){if(Pe(g,t.berufsschulMuster)){const v=p>=4?"error":p>=2?"warn":"info";ee(s,n,{datum:h,wochentag:(f==null?void 0:f.wochentag)??ie(g),typ:"bs_tag_fehlt",schweregrad:v,titel:`Berufsschultag nicht eingetragen: ${$(g)}`,beschreibung:`Laut deinem Profil hast du am ${Q[ie(g)]}, ${$(g)} Berufsschule. Im Zeitnachweis fehlt der Tag bisher${p>=4?" — bitte bei der Zeitwirtschaft nachhaken":""}.`,alter:p,mailVorlageKey:v==="error"?"bs_tag_fehlt":null})}else{const v=p>=4?"error":p>=2?"warn":"info";ee(s,n,{datum:h,wochentag:ie(g),typ:"stempelzeit_fehlt",schweregrad:v,titel:`Keine Stempelzeit am ${$(g)}`,beschreibung:`Am ${Q[ie(g)]}, ${$(g)} wurde keine Stempelzeit erfasst. Falls du an diesem Tag im Haus warst, sollte die Zeitwirtschaft das nachtragen${p>=4?" — es ist inzwischen ≥4 Werktage her":""}.`,alter:p,mailVorlageKey:v==="error"?"stempelzeit_fehlt":null})}continue}if(f.tagestyp==="Berufsschule"&&f.ist!=null){const v=mt(t.berufsschulMuster,f.soll);v!=null&&f.ist<v-.5&&ee(s,n,{datum:h,wochentag:f.wochentag,typ:"bs_stunden_falsch",schweregrad:"error",titel:`Berufsschultag mit zu wenig Stunden: ${$(g)}`,beschreibung:`Am ${Q[f.wochentag]}, ${$(g)} sind nur ${f.ist.toFixed(2).replace(".",",")}h gebucht statt der für dich üblichen ${v.toFixed(2).replace(".",",")}h. Die Zeitwirtschaft hat den Berufsschultag möglicherweise nur halb erfasst.`,ist:f.ist,soll:v,mailVorlageKey:"bs_stunden_falsch"})}if(f.tagestyp==="Stempelzeit"&&((u=f.zeitSpannen)==null?void 0:u.length)>1&&h>="2026-04-01"){const v=bt(f,t);(v==null?void 0:v.typ)==="fehler_zeitwirtschaft"&&v.unrechtmaessigerVerlustMin>=5?ee(s,n,{datum:h,wochentag:f.wochentag,typ:"pausen_abzug",schweregrad:v.unrechtmaessigerVerlustMin>=15?"error":"warn",titel:`Pausen-Abzug fehlerhaft (${$(g)})`,beschreibung:`Am ${Q[f.wochentag]}, ${$(g)} wurden ${Math.round(v.abgezogenePause*60)} min Pause abgezogen. Gestempelt: ${Math.round(v.gestempeltePause*60)} min, gesetzlich nötig (${v.gesetz.toUpperCase()}): ${Math.round(v.gesetzlichePflicht*60)} min. Differenz von ${v.unrechtmaessigerVerlustMin} min ist unerklärlich.`,verlustMinuten:v.unrechtmaessigerVerlustMin,abgezogen:v.abgezogenePause,gestempelt:v.gestempeltePause,mailVorlageKey:"pausen_abzug"}):(v==null?void 0:v.typ)==="aufstockung_legal"&&v.aufstockungMin>=10&&ee(s,n,{datum:h,wochentag:f.wochentag,typ:"pausen_aufstockung",schweregrad:"info",titel:`Zu wenig Pause gestempelt (${$(g)}) — ${v.aufstockungMin} min automatisch aufgestockt`,beschreibung:`Am ${Q[f.wochentag]}, ${$(g)} hast du nur ${Math.round(v.gestempeltePause*60)} min Pause gemacht. Gesetz (${v.gesetz.toUpperCase()}) schreibt ${Math.round(v.gesetzlichePflicht*60)} min vor. Fehlende ${v.aufstockungMin} min wurden als Pause gewertet — das ist legal, aber du verlierst dadurch Arbeitszeit. Tipp: mach beim nächsten Mal etwas länger Mittag.`})}}const c={error:0,warn:1,info:2};return s.sort((g,h)=>{const f=c[g.schweregrad]-c[h.schweregrad];return f!==0?f:h.datum.localeCompare(g.datum)}),s}function yt(e,t=new Set){var n,s,i,r;const a=[];for(const l of e){const o=((n=l.glz)==null?void 0:n.saldoVorperiode)??0,c=((s=l.glz)==null?void 0:s.saldoAktuellePeriode)??0,d=((i=l.glz)==null?void 0:i.umgebuchteStunden)??0,u=(r=l.glz)==null?void 0:r.saldoGesamt;if(u==null)continue;const g=o+c+d,h=Math.abs(u-g);if(h>.03){const f=`${l.monatKey}-saldo_plausi`;t.has(f)||a.push({datum:`${l.monatKey}-01`,wochentag:"",typ:"saldo_plausi",schweregrad:"warn",titel:`Saldo-Differenz im Monat ${l.monatKey}`,beschreibung:`Rechnung: Vorperiode ${o.toFixed(2)} + aktuelle Periode ${c.toFixed(2)} + umgebucht ${d.toFixed(2)} = ${g.toFixed(2)}, aber dein Saldo wird mit ${u.toFixed(2)} angezeigt. Abweichung: ${h.toFixed(2)}h.`,soll:g,ist:u})}}return a}function ee(e,t,a){const n=`${a.datum}-${a.typ}`;t.has(n)||(a.id=n,e.push(a))}function ie(e){return["SO","MO","DI","MI","DO","FR","SA"][e.getDay()]}function Ae(e,t){var o,c,d;const a=[...e].sort((u,g)=>u.datum.localeCompare(g.datum));if(!a.length)return[];const n=new Map(t.map(u=>[u.monatKey,u])),s={};for(const u of a)s[o=u.monatKey]??(s[o]=[]),s[u.monatKey].push(u);const i=Object.keys(s).sort(),r=[];let l=null;for(const u of i){const g=n.get(u);let h;((c=g==null?void 0:g.glz)==null?void 0:c.saldoVorperiode)!=null?h=g.glz.saldoVorperiode:l!=null?h=l:h=0;const f=s[u];for(const p of f)p.diff!=null&&(h+=p.diff),r.push({datum:p.datum,wochentag:p.wochentag,saldo:Math.round(h*100)/100,diff:p.diff,ist:p.ist,soll:p.soll,tagestyp:p.tagestyp,monatKey:p.monatKey,wocheKey:p.wocheKey,zeitSpannen:p.zeitSpannen});if(((d=g==null?void 0:g.glz)==null?void 0:d.saldoGesamt)!=null){const p=g.glz.saldoGesamt-h;if(Math.abs(p)>.02&&r.length>0){const b=r.length-1;r[b].umbuchung=p,r[b].saldo=Math.round((r[b].saldo+p)*100)/100,h=r[b].saldo}l=g.glz.saldoGesamt}else l=h}return r}function rn(e,t){if(!e.length)return[];if(t==="alles")return e;const a=Math.min(t,e.length);return e.slice(-a)}function ln(e){return e.length?e[e.length-1].saldo:0}function on(e){if(!e.length)return 0;const t=e[0].saldo-(e[0].diff??0),a=e[e.length-1].saldo;return Math.round((a-t)*100)/100}const cn={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"},ne={bs_tag_fehlt:{key:"bs_tag_fehlt",titel:"Berufsschultag fehlt",beschreibung:"Wenn ein Berufsschultag komplett nicht im Zeitnachweis eingetragen wurde.",betreff:"Bitte um Zeitkorrektur im ESS  - Fehlender Berufsschultag {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

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

Vielen Dank!`}};function me(e,t){const a=ne[e];return a?{...a,...t??{}}:null}function wt(e,t){const a=je(e.text,t);return{betreff:je(e.betreff,t),text:a}}function je(e,t){return e.replace(/\{(\w+)\}/g,(a,n)=>t[n]!=null?String(t[n]):`{${n}}`)}function xt(e,t){const a=t.datum?new Date(t.datum):null;return{name:"",personalnr:"",kostenstelle:"",datum:a?ht(a).split(", ")[1]:"",wochentag:cn[t.wochentag]??t.wochentag??"",zeitwirtschaft_anrede:e.zeitwirtschaftAnrede||"Frau Kanarya",zeitwirtschaft_email:e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",ist:t.ist!=null?t.ist.toFixed(2).replace(".",","):"",soll:t.soll!=null?t.soll.toFixed(2).replace(".",","):"",abgezogen:t.abgezogen!=null?Math.round(t.abgezogen*60):"",gestempelt:t.gestempelt!=null?Math.round(t.gestempelt*60):"",verlust:t.verlustMinuten??""}}function kt(e,t,a){const n=wt(t,a),s=e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",i=new URLSearchParams;return i.set("subject",n.betreff),i.set("body",n.text),`mailto:${s}?${i.toString().replace(/\+/g,"%20")}`}W.register(Ot,_t,Ht,jt,Rt,Nt,Zt,qt,Gt,Jt,Ut,Yt,Xt,Qt);function M(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function O(){return{fg:M("--fg"),fgMuted:M("--fg-muted"),fgSubtle:M("--fg-subtle"),border:M("--border"),surface:M("--surface"),accent:M("--accent"),success:M("--success"),warn:M("--warn"),danger:M("--danger"),info:M("--info"),palette:[M("--chart-1"),M("--chart-2"),M("--chart-3"),M("--chart-4"),M("--chart-5"),M("--chart-6"),M("--chart-7")]}}function k(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.fgMuted,font:{size:12}}},tooltip:{backgroundColor:e.surface,titleColor:e.fg,bodyColor:e.fg,borderColor:e.border,borderWidth:1,padding:10,displayColors:!0}},scales:{x:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}},y:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}}}}}function Te(e,t){const a=O();if(_(e),!(t!=null&&t.length))return;const n=t.map(i=>P(S(i.datum),"dd.MM.")),s=t.map(i=>i.saldo);return s.map(i=>i>=0?a.success:a.danger),new W(e,{type:"line",data:{labels:n,datasets:[{label:"Tages-Saldo",data:s,borderColor:a.accent,backgroundColor:i=>{const r=i.chart,{ctx:l,chartArea:o,scales:c}=r;return o?$t(l,o,c.y,a):I(a.accent,.14)},segment:{borderColor:i=>{const r=i.p0.parsed.y,l=i.p1.parsed.y,o=(r+l)/2;return o>=.02?a.success:o<=-.02?a.danger:a.fgMuted}},tension:.25,pointRadius:2,pointHoverRadius:6,pointHitRadius:20,pointBackgroundColor:s.map(i=>i>=.02?a.success:i<=-.02?a.danger:a.fgMuted),pointBorderColor:a.surface,pointBorderWidth:1,fill:!0,borderWidth:2}]},options:{...k(a),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},plugins:{...k(a).plugins,legend:{display:!1},tooltip:{enabled:!1,mode:"index",intersect:!1,axis:"x",position:"nearest",external:dn(t)}},scales:{...k(a).scales,y:{...k(a).scales.y,ticks:{...k(a).scales.y.ticks,callback:i=>`${i>=0?"+":""}${i.toFixed(1).replace(".",",")}h`}}}}})}function N(e){return function(t){var p,b;const{chart:a,tooltip:n}=t;let s=a.$richTooltipEl;if(!s){s=document.createElement("div"),s.className="saldo-tooltip",document.body.appendChild(s),a.$richTooltipEl=s;const v=a.destroy.bind(a);a.destroy=function(){s.parentNode&&s.parentNode.removeChild(s),v()}}if(n.opacity===0||!((p=n.dataPoints)!=null&&p.length)){s.style.opacity="0";return}const i=e({tooltip:n,chart:a});if(!i){s.style.opacity="0";return}let r=`<div class="saldo-tooltip-title">${xe(i.title)}</div>`;for(const v of i.rows||[]){const T=v.klasse||"flat";r+=`<div class="saldo-tooltip-row"><span class="saldo-tooltip-label">${xe(v.label)}</span><span class="saldo-tooltip-value ${T}">${v.value}</span></div>`}(b=i.meta)!=null&&b.length&&(r+=`<div class="saldo-tooltip-meta">${i.meta.map(v=>`<span>${v}</span>`).join("")}</div>`),s.innerHTML=r;const l=a.canvas.getBoundingClientRect(),o=l.left+n.caretX,c=l.top+n.caretY;s.style.opacity="0",s.style.left="0px",s.style.top="0px";const d=s.offsetWidth,u=s.offsetHeight,g=18;let h=o+g;h+d>window.innerWidth-8&&(h=o-g-d);let f=c-u/2;f<8&&(f=8),f+u>window.innerHeight-8&&(f=window.innerHeight-u-8),s.style.left=h+"px",s.style.top=f+"px",s.style.opacity="1"}}function se(e){return e==null?"flat":e>.05?"pos":e<-.05?"neg":"flat"}function ue(e){return e==null?"—":(e>0?"+":"")+e.toFixed(2).replace(".",",")+"h"}function R(e){return e==null?"—":e.toFixed(2).replace(".",",")+"h"}function dn(e){return N(({tooltip:t})=>{const a=t.dataPoints[0].dataIndex,n=e[a];if(!n)return null;const s=[{label:"Saldo",value:ue(n.saldo),klasse:se(n.saldo)}];n.diff!=null&&s.push({label:"Tages-Diff",value:ue(n.diff),klasse:se(n.diff)});const i=[];return n.tagestyp&&i.push(`Typ: ${xe(n.tagestyp)}`),n.umbuchung&&i.push(`Umbuchung: ${n.umbuchung>=0?"+":""}${n.umbuchung.toFixed(2).replace(".",",")}h`),{title:P(S(n.datum),"EE, dd.MM.yyyy",{locale:G}),rows:s,meta:i}})}function xe(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function un(e,t){const a=O();if(_(e),!(t!=null&&t.length))return;const n=t.map(i=>i.monatKey),s=t.map(i=>{var r;return((r=i.glz)==null?void 0:r.saldoGesamt)??0});return new W(e,{type:"line",data:{labels:n,datasets:[{label:"GLZ-Saldo (Monatsende)",data:s,borderColor:a.accent,backgroundColor:i=>{const r=i.chart,{ctx:l,chartArea:o,scales:c}=r;return o?$t(l,o,c.y,a):I(a.accent,.14)},segment:{borderColor:i=>{const r=i.p0.parsed.y,l=i.p1.parsed.y,o=(r+l)/2;return o>=.05?a.success:o<=-.05?a.danger:a.fgMuted}},pointBackgroundColor:s.map(i=>i>=.05?a.success:i<=-.05?a.danger:a.fgMuted),pointBorderColor:a.surface,pointBorderWidth:1,tension:.35,fill:!0,pointRadius:4,pointHoverRadius:6}]},options:k(a)})}function gn(e,t){const a=O();if(_(e),!(t!=null&&t.length))return;const n=t.map(r=>P(S(r.datum),"dd.MM.")),s=t.map(r=>r.ist??0),i=t.map(r=>vn(r.tagestyp,a));return new W(e,{type:"bar",data:{labels:n,datasets:[{label:"Ist-Stunden",data:s,backgroundColor:i,borderRadius:4,borderSkipped:!1,maxBarThickness:32,categoryPercentage:.85,barPercentage:.9}]},options:{...k(a),plugins:{...k(a).plugins,legend:{display:!1},tooltip:{enabled:!1,external:N(({tooltip:r})=>{const l=r.dataPoints[0].dataIndex,o=t[l],c=[{label:"Ist",value:R(o.ist),klasse:"flat"}];o.soll!=null&&c.push({label:"Soll",value:R(o.soll),klasse:"flat"}),o.diff!=null&&c.push({label:"Diff",value:ue(o.diff),klasse:se(o.diff)});const d=o.tagestyp?[`Typ: ${o.tagestyp}`]:[];return{title:P(S(o.datum),"EE, dd.MM.yyyy",{locale:G}),rows:c,meta:d}})}},scales:{...k(a).scales,y:{...k(a).scales.y,suggestedMin:0,suggestedMax:10}}}})}function Re(e,t){const a=O();if(_(e),!(t!=null&&t.length))return;const n=t.filter(c=>{var d;return((d=c.zeitSpannen)==null?void 0:d.length)&&c.zeitSpannen.some(u=>u.von&&u.bis)}).map(c=>{const d=c.zeitSpannen.filter(h=>h.von&&h.bis).map(h=>({von:F(h.von),bis:F(h.bis),vonStr:h.von,bisStr:h.bis})).filter(h=>h.von!=null&&h.bis!=null);if(d.length===0)return null;const u=Math.min(...d.map(h=>h.von)),g=Math.max(...d.map(h=>h.bis));return{...c,_spans:d,_minVon:u,_maxBis:g}}).filter(Boolean);if(!n.length)return;const s=c=>c.ist==null?a.fgMuted:c.ist>=7?a.success:a.danger,i={label:"Tages-Rahmen",data:n.map(c=>[c._minVon,c._maxBis]),backgroundColor:n.map(s),borderColor:n.map(s),borderWidth:0,borderRadius:4,borderSkipped:!1,barPercentage:.7,categoryPercentage:.9,maxBarThickness:18},r=Math.max(0,Math.floor(Math.min(...n.map(c=>c._minVon))/60)*60-60),l=Math.min(24*60,Math.ceil(Math.max(...n.map(c=>c._maxBis))/60)*60+60),o=c=>`${String(Math.floor(c/60)).padStart(2,"0")}:${String(c%60).padStart(2,"0")}`;return new W(e,{type:"bar",data:{labels:n.map(c=>P(S(c.datum),"dd.MM.")),datasets:[i]},options:{...k(a),interaction:{mode:"index",intersect:!1,axis:"x"},plugins:{legend:{display:!1},tooltip:{enabled:!1,external:N(({tooltip:c})=>{const d=n[c.dataPoints[0].dataIndex],u=[];d.ist!=null&&u.push({label:"Ist",value:R(d.ist),klasse:se(d.ist-7)}),d.soll!=null&&u.push({label:"Soll",value:R(d.soll)});const g=[`Rahmen: ${o(d._minVon)} – ${o(d._maxBis)}`];return d._spans.length>1&&d._spans.forEach((h,f)=>g.push(`Block ${f+1}: ${h.vonStr} – ${h.bisStr}`)),d.pause!=null&&g.push(`Pause: ${Math.round(d.pause*60)} min`),{title:P(S(d.datum),"EE, dd.MM.yyyy",{locale:G}),rows:u,meta:g}})}},scales:{x:{ticks:{color:a.fgMuted,font:{size:10},maxRotation:60,minRotation:60,autoSkip:!0,maxTicksLimit:40},grid:{display:!1}},y:{min:r,max:l,ticks:{color:a.fgMuted,stepSize:60,callback:c=>o(c)},grid:{color:a.border}}}}})}function hn(e,t){const a=O();_(e);const n={};for(const r of t){if(r.tagestyp!=="Stempelzeit"||!r.zeitSpannen||r.zeitSpannen.length<2)continue;const l=vt(r.zeitSpannen);if(l<=0)continue;const o=Math.round(l*60),c=Math.floor(o/15)*15;n[c]=(n[c]??0)+1}const s=Object.keys(n).map(Number).sort((r,l)=>r-l),i=s.map(r=>n[r]);return new W(e,{type:"bar",data:{labels:s.map(r=>`${r}–${r+14} min`),datasets:[{label:"Häufigkeit",data:i,backgroundColor:a.palette[1],borderRadius:4}]},options:{...k(a),plugins:{...k(a).plugins,legend:{display:!1},tooltip:{enabled:!1,external:N(({tooltip:r})=>{const l=r.dataPoints[0].dataIndex;return{title:"Pause-Länge "+(s[l]!=null?`${s[l]}–${s[l]+14} min`:""),rows:[{label:"Häufigkeit",value:`${i[l]} Tag${i[l]===1?"":"e"}`}]}})}}}})}function fn(e,t){const a=O();_(e);const n=["MO","DI","MI","DO","FR"],s={},i={};for(const o of n)s[o]=0,i[o]=0;for(const o of t)n.includes(o.wochentag)&&(o.ist==null||o.ist===0||(s[o.wochentag]+=o.ist,i[o.wochentag]+=1));const r=n.map(o=>i[o]>0?s[o]/i[o]:0),l={id:"wochentag-datalabels",afterDatasetsDraw(o){const{ctx:c,data:d,scales:u}=o;c.save(),c.fillStyle=a.fg,c.font="600 12px system-ui",c.textAlign="center",c.textBaseline="bottom",o.getDatasetMeta(0).data.forEach((h,f)=>{const p=d.datasets[0].data[f];if(!p||p===0)return;const b=p.toFixed(2).replace(".",",")+"h";c.fillText(b,h.x,h.y-6)}),c.restore()}};return new W(e,{type:"bar",data:{labels:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"],datasets:[{label:"Ø Ist-Stunden",data:r,backgroundColor:a.palette[2],borderRadius:4,maxBarThickness:56,categoryPercentage:.7,barPercentage:.8}]},options:{...k(a),layout:{padding:{top:24}},plugins:{...k(a).plugins,legend:{display:!1},tooltip:{enabled:!1,external:N(({tooltip:o})=>{const c=o.dataPoints[0].dataIndex,d=n[c];return{title:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"][c],rows:[{label:"Ø Stunden",value:R(r[c])},{label:"Anzahl Tage",value:String(i[d]||0)}]}})}},scales:{...k(a).scales,y:{...k(a).scales.y,suggestedMax:Math.max(...r)*1.15}}},plugins:[l]})}function pn(e,t){const a=O();_(e);const n={};for(const r of t)!r.tagestyp||r.tagestyp==="Wochenende"||(n[r.tagestyp]=(n[r.tagestyp]??0)+1);const s=Object.keys(n),i=Object.values(n);return new W(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:s.map((r,l)=>a.palette[l%a.palette.length]),borderColor:a.surface,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:a.fgMuted,font:{size:12}}},tooltip:{enabled:!1,external:N(({tooltip:r})=>{const l=r.dataPoints[0].dataIndex,o=i.reduce((d,u)=>d+u,0),c=o?i[l]/o*100:0;return{title:s[l],rows:[{label:"Anzahl",value:`${i[l]} Tag${i[l]===1?"":"e"}`},{label:"Anteil",value:c.toFixed(1).replace(".",",")+"%"}]}})}}}})}function mn(e,t){const a=O();_(e);const n={};for(const l of t){const o=l.wocheKey;n[o]??(n[o]={ist:0,soll:0,days:0}),n[o].ist+=l.ist??0,n[o].soll+=l.soll??0,n[o].days++}const s=Object.keys(n).sort();if(!s.length)return;const i=s.map(l=>+n[l].ist.toFixed(2)),r=s.map(l=>+n[l].soll.toFixed(2));return new W(e,{type:"line",data:{labels:s.map(l=>"KW "+l.split("-")[1]),datasets:[{label:"Wochenstunden",data:i,borderColor:a.accent,backgroundColor:I(a.accent,.1),segment:{borderColor:l=>{const o=l.p0.parsed.y,c=l.p1.parsed.y,d=r[l.p0.parsed.x]??35,u=r[l.p1.parsed.x]??35,g=(d+u)/2,h=(o+c)/2;return h>=g+.1?a.success:h<=g-.1?a.danger:a.fgMuted}},pointBackgroundColor:i.map((l,o)=>l>=r[o]+.1?a.success:l<=r[o]-.1?a.danger:a.fgMuted),pointBorderColor:a.surface,pointBorderWidth:1,pointRadius:3,pointHoverRadius:6,pointHitRadius:20,tension:.25,fill:!0,borderWidth:2}]},options:{...k(a),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},plugins:{...k(a).plugins,legend:{display:!1},tooltip:{enabled:!1,external:N(({tooltip:l})=>{const o=l.dataPoints[0].dataIndex,c=s[o],d=i[o],u=r[o],g=+(d-u).toFixed(2);return{title:"KW "+c.split("-")[1]+" · "+c.split("-")[0],rows:[{label:"Ist",value:R(d),klasse:"flat"},{label:"Soll",value:R(u),klasse:"flat"},{label:"Diff",value:ue(g),klasse:se(g)}]}})}},scales:{...k(a).scales,y:{...k(a).scales.y,ticks:{...k(a).scales.y.ticks,callback:l=>`${l.toFixed(0)}h`}}}}})}function _(e){const t=W.getChart(e);t&&t.destroy()}function I(e,t){const a=e.replace("#","").trim();if(a.length!==6&&a.length!==3)return e;const n=a.length===3?a.split("").map(l=>l+l).join(""):a,s=parseInt(n.slice(0,2),16),i=parseInt(n.slice(2,4),16),r=parseInt(n.slice(4,6),16);return`rgba(${s}, ${i}, ${r}, ${t})`}function $t(e,t,a,n){const{top:s,bottom:i}=t,r=e.createLinearGradient(0,s,0,i),l=a.min,o=a.max,c=o-l;if(c<=0)return I(n.success,.14);let d=(o-0)/c;return d=Math.max(0,Math.min(1,d)),r.addColorStop(0,I(n.success,.28)),r.addColorStop(Math.max(0,d-.001),I(n.success,.06)),r.addColorStop(Math.min(1,d+.001),I(n.danger,.06)),r.addColorStop(1,I(n.danger,.28)),r}function vn(e,t){const a=String(e??"").toLowerCase();return a.includes("stempel")?t.palette[0]:a.includes("berufs")?t.palette[1]:a.includes("urlaub")?t.palette[2]:a.includes("feiertag")?t.fgSubtle:a.includes("dienst")?t.palette[3]:a.includes("krank")?t.palette[4]:t.palette[5]}let bn=0;function Ee(e,{type:t="info",duration:a=3500}={}){const n=document.getElementById("toast-root");if(!n)return;const s=document.createElement("div");s.className=`toast ${t}`,s.textContent=e,s.dataset.id=++bn,n.appendChild(s),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateY(-8px)",s.style.transition="opacity 220ms, transform 220ms",setTimeout(()=>s.remove(),250)},a)}function ge(e){return Ee(e,{type:"error",duration:6e3})}function D(e){return Ee(e,{type:"success"})}const yn=3,wn=2.5,xn={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function Le(e,t={}){if(!(e!=null&&e.length))return'<p style="color: var(--fg-muted);">Keine Tage im Zeitraum.</p>';const a=new Map;for(const i of t.warnungen??[])a.has(i.datum)||a.set(i.datum,[]),a.get(i.datum).push(i);const n=[];let s=null;for(const i of e)(!s||s.key!==i.wocheKey)&&(s={key:i.wocheKey,tage:[]},n.push(s)),s.tage.push(i);return`<div class="tages-liste">${n.map(i=>kn(i,a)).join("")}</div>`}function kn(e,t){var d;const a=e.tage.reduce((u,g)=>u+(g.ist??0),0),n=e.tage.reduce((u,g)=>u+(g.diff??0),0),s=(d=e.tage[0])==null?void 0:d.datum,i=s?De(S(s)):"",r=e.key?e.key.split("-")[1]:"?",l=n>.05?"pos":n<-.05?"neg":"flat",o=(n>0?"+":"")+n.toFixed(2).replace(".",",")+"h",c=a.toFixed(2).replace(".",",")+"h";return`
    <div class="woche-group">
      <div class="woche-header">
        <div class="woche-header-titel">
          <span class="woche-header-kw">KW ${w(r)}</span>
          <span class="woche-header-range tabular">${w(i)}</span>
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
        ${e.tage.map(u=>$n(u,(t==null?void 0:t.get(u.datum))??[])).join("")}
      </div>
    </div>
  `}function $n(e,t=[]){const a=e.diff??0,n=a>0,s=n?yn:wn,i=Math.min(150,Math.abs(a)/s*50),r=n?"var(--success)":a<0?"var(--danger)":"var(--fg-subtle)",l=ut(e.zeitSpannen),o=e.saldo??0,c=t.length>0,d=c?Mn(t):"",u=c?t.map(g=>`${g.titel}${g.beschreibung?`
`+g.beschreibung:""}`).join(`

`):"";return`
    <a href="#/tag/${e.datum}" class="tag-row${c?" has-warn":""}">
      <div class="tag-row-datum">
        <div class="tabular">${w($(new Date(e.datum)))}</div>
        <div class="tag-row-wd">${Sn(e.wochentag)}</div>
      </div>
      <div class="tag-row-typ">
        ${e.tagestyp?`<span class="pill ${zn(e.tagestyp)}">${w(e.tagestyp)}</span>`:'<span style="color: var(--fg-subtle); font-size: 12px;">—</span>'}
        ${c?`<span class="tag-row-warn severity-${t[0].schweregrad}" title="${w(u)}">${d} ${t.length>1?t.length:""}</span>`:""}
      </div>
      <div class="tag-row-kg">
        ${gt(l,{size:18})}
      </div>
      <div class="tag-row-ist tabular">
        ${(()=>{if(e.ist==null)return'<div class="ist-wert">—</div>';const g=de(e.ist),[h,f]=g.split(":");return e.ist<=0?`<div class="ist-wert">${g}</div>`:`<div class="ist-display" title="Klick auf H oder M zum Kopieren">
            <button class="ist-part" data-val="${h}" title="${h} Stunden kopieren">${h}</button><span class="ist-sep">:</span><button class="ist-part" data-val="${f}" title="${f} Minuten kopieren">${f}</button>
          </div>`})()}
        <div style="color: var(--fg-subtle); font-size: 11px;">Soll ${e.soll!=null?de(e.soll):"—"}</div>
      </div>
      <div class="tag-row-bar">
        <div class="bar-track">
          <div class="bar-zero"></div>
          <div class="bar-fill ${n?"pos":"neg"}" style="width: ${i}%; background: ${r};"></div>
        </div>
      </div>
      <div class="tag-row-diff tabular" style="color: ${n?"var(--success)":a<0?"var(--danger)":"var(--fg-muted)"};">
        ${a!==0?(n?"+":"")+a.toFixed(2).replace(".",",")+"h":"0,00h"}
      </div>
      <div class="tag-row-saldo tabular" style="color: var(--fg-muted); font-size: 12px;">
        ${o>=0?"+":""}${o.toFixed(2).replace(".",",")}h
      </div>
    </a>
  `}function Sn(e){return xn[e]??e}function Mn(e){const t={error:3,warn:2,info:1};let a=e[0];for(const n of e)(t[n.schweregrad]||0)>(t[a.schweregrad]||0)&&(a=n);return a.schweregrad==="error"?"!":a.schweregrad==="warn"?"⚠":"i"}function zn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function St(e){e._istCopyAttached||(e._istCopyAttached=!0,e.addEventListener("click",async t=>{const a=t.target.closest(".ist-part");if(!a)return;t.preventDefault(),t.stopPropagation();const n=a.getAttribute("data-val");try{await navigator.clipboard.writeText(n);const s=a.textContent;a.classList.add("ok"),a.textContent="✓",setTimeout(()=>{a.classList.remove("ok"),a.textContent=s},800)}catch{D(`Bitte kopieren: ${n}`)}}))}const Ne=[{key:7,label:"1 Woche"},{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:"alles",label:"Alles"}];async function Ze({root:e}){const[t,a,n,s,i,r,l]=await Promise.all([C(),q(),V(),xa(),ha("dashboardZeitraum",14),ze(),fe()]),o=Object.fromEntries(r.map(y=>[y.key,y]));if(n.length===0){e.innerHTML=Pn();return}const c=Ae(n,a),d=c.length;let u=i;typeof u=="number"&&u>d&&(u="alles");const g=new Set(s.map(y=>y.key)),h=l!=null&&l.stichtagAuswertung?new Date(l.stichtagAuswertung):new Date,f=pe(n,t,h,g),p=yt(a,g),b=[...f,...p],v=ln(c),T=v>.05?"positive":v<-.05?"negative":"";e.innerHTML=`
    <h1 class="view-title">Dashboard</h1>
    <p class="view-subtitle">Stand: ${he($(new Date(n[n.length-1].datum)))}</p>

    <div class="saldo-hero" style="margin-bottom: 32px; align-items: stretch;">
      <div class="saldo-hero-text" style="min-width: 260px;">
        <h3>Aktueller Gleitzeit-Saldo</h3>
        <div class="saldo-value ${T}">${E(v,{signed:!0,suffix:""})}</div>
        <div class="saldo-unit">Stunden · tagesaktuell</div>
        <div id="hero-bewegung" class="saldo-trend flat" style="margin-top: 12px;"></div>
      </div>
      <div style="flex: 1; min-width: 400px; display: flex; flex-direction: column;">
        <div class="card-split" style="margin-bottom: 12px; align-items: center;">
          <h3 style="margin: 0;">Verlauf</h3>
          <div class="segmented" id="zeitraum-picker">
            ${Ne.map(y=>{const z=typeof y.key=="number"&&y.key>d;return`<button type="button" data-key="${y.key}" class="${u===y.key?"active":""}" ${z?'disabled style="opacity:0.4"':""}>${y.label}</button>`}).join("")}
          </div>
        </div>
        <div style="flex: 1; height: 220px;"><canvas id="saldo-chart"></canvas></div>
      </div>
    </div>

    ${b.length>0?`
      <div class="card" style="margin-bottom: 32px;">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Offene Warnungen</h2>
        </div>
        ${b.slice(0,8).map(y=>Dn(y,t,o)).join("")}
        ${b.length>8?`<div style="margin-top: 12px; color: var(--fg-muted); font-size: 13px; text-align: center;">+ ${b.length-8} weitere Warnungen vorhanden</div>`:""}
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
          ${Ne.map(y=>{const z=typeof y.key=="number"&&y.key>d;return`<button type="button" data-key="${y.key}" class="${u===y.key?"active":""}" ${z?'disabled style="opacity:0.4"':""}>${y.label}</button>`}).join("")}
        </div>
      </div>
      <div id="tage-liste"></div>
    </div>

  `,qe(u,e,c,b);const J=()=>e.querySelectorAll("#zeitraum-picker button, #zeitraum-picker-2 button");J().forEach(y=>{y.addEventListener("click",async()=>{if(y.disabled)return;const z=y.getAttribute("data-key"),K=z==="alles"?"alles":parseInt(z,10);J().forEach(U=>U.classList.toggle("active",U.getAttribute("data-key")===z)),await fa("dashboardZeitraum",K),qe(K,e,c,b)})}),e.addEventListener("click",async y=>{const z=y.target.closest(".ist-part");if(z){y.preventDefault(),y.stopPropagation();const Ce=z.getAttribute("data-val");try{await navigator.clipboard.writeText(Ce);const Ve=z.textContent;z.classList.add("ok"),z.textContent="✓",setTimeout(()=>{z.classList.remove("ok"),z.textContent=Ve},800)}catch{D(`Bitte kopieren: ${Ce}`)}return}const K=y.target.closest(".btn-dismiss");if(!K)return;const U=K.getAttribute("data-datum"),Ke=K.getAttribute("data-typ");if(!U||!Ke)return;await wa(U,Ke),D("Warnung ausgeblendet.");const Be=K.closest(".alert");Be&&(Be.style.display="none")})}function qe(e,t,a,n=[]){const s=rn(a,e),i=on(s);requestAnimationFrame(()=>{const c=t.querySelector("#saldo-chart");Te(c,s)});const r=t.querySelector("#hero-bewegung");if(r){const c=i>.05?"up":i<-.05?"down":"flat",d=i>.05?"↑":i<-.05?"↓":"→";r.className=`saldo-trend ${c}`,r.innerHTML=`${d} ${Math.abs(i)<.01?"Unverändert":E(i,{signed:!0})} im Zeitraum`}const l=t.querySelector("#tage-info");if(l){const c=s.length;l.textContent=`${c} ${c===1?"Tag":"Tage"}`}const o=t.querySelector("#tage-liste");o&&(o.innerHTML=Le(s.slice().reverse(),{warnungen:n.filter(c=>s.some(d=>d.datum===c.datum))}))}function Dn(e,t,a){const n=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";let s=null;if(e.mailVorlageKey&&t){const i=me(e.mailVorlageKey,a==null?void 0:a[e.mailVorlageKey]);if(i){const r=xt(t,e);s=kt(t,i,r)}}return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${n}</div>
      <div class="alert-body">
        <div class="alert-title">${he(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${he(e.beschreibung)}</p>
        <div class="alert-actions">
          ${s?`<a href="${be(s)}" class="btn primary sm">✉ Mail schreiben</a>`:""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
          <button class="btn ghost sm btn-dismiss" data-datum="${be(e.datum)}" data-typ="${be(e.typ)}">Ausblenden</button>
        </div>
      </div>
    </div>
  `}function Pn(){return`
    <h1 class="view-title">Willkommen</h1>
    <p class="view-subtitle">Lade deinen Zeitnachweis hoch, um Dashboard und Analysen zu sehen.</p>
    <div class="card" style="max-width: 640px;">
      <h2>So startest du</h2>
      <ol style="color: var(--fg-muted); line-height: 1.7; font-size: 14px; padding-left: 20px;">
        <li>Öffne in ESS deinen Zeitnachweis und exportiere ihn als PDF.</li>
        <li>Gehe zu <a href="#/daten" style="color: var(--accent);">Daten</a> und lade das PDF hoch.</li>
        <li>Fülle unter <a href="#/profil" style="color: var(--accent);">Profil</a> dein Geburtsdatum und deinen Berufsschul-Rhythmus aus.</li>
      </ol>
      <div style="margin-top: 24px;">
        <a href="#/daten" class="btn primary">Zum Upload →</a>
      </div>
    </div>
  `}function he(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function be(e){return he(e)}const An=""+new URL("pdf.worker.min-yatZIOMy.mjs",import.meta.url).href;ea.workerSrc=An;const Ge={Januar:1,Februar:2,März:3,Maerz:3,April:4,Mai:5,Juni:6,Juli:7,August:8,September:9,Oktober:10,November:11,Dezember:12},Tn=["Stempelzeit","Berufsschule Std. bez","Berufsschule","Dienstreise Arbeitszeit","Reise öff.VM/PKW Beifahr.","Reise öff.VM/PKW","Urlaub","Gleitzeit","Arbeitsunfähigkeit","TgDtEinh","Neujahr","Karfreitag","Ostermontg","Ostmontg","Osterso.","Hl.3 Kön.","Allerhlg","Pfingstmo","Fronleichn","TdDtEinh"];async function En(e){var o,c;const a=await ta({data:e}).promise,n=[];let s=0;for(let d=1;d<=a.numPages;d++){const g=await(await a.getPage(d)).getTextContent();s+=g.items.length;const h=Ln(g.items);for(const f of h)n.push({page:d,text:f})}const i=Fn(n),{tage:r,monate:l}=Wn(n);try{const d=await a.getMetadata();i.producer=((o=d==null?void 0:d.info)==null?void 0:o.Producer)??null,i.creator=((c=d==null?void 0:d.info)==null?void 0:c.Creator)??null}catch{}return i.totalTextItems=s,{meta:i,tage:r,monate:l}}function Ln(e){if(!e.length)return[];const t=e.slice().sort((r,l)=>{const o=l.transform[5]-r.transform[5];return Math.abs(o)>2?o:r.transform[4]-l.transform[4]}),a=[];let n=null,s=[];const i=3;for(const r of t){const l=r.transform[5];n==null||Math.abs(l-n)<=i?(s.push(r),n==null&&(n=l)):(a.push(Je(s)),s=[r],n=l)}return s.length&&a.push(Je(s)),a.filter(r=>r.trim().length>0)}function Je(e){e.sort((n,s)=>n.transform[4]-s.transform[4]);let t="",a=-1;for(const n of e){const s=n.transform[4];a>=0&&s-a>4?t+="  ":a>=0&&s-a>.5&&(t+=" "),t+=n.str,a=s+n.width}return t}function Fn(e){var a,n;const t={personalnummer:null,name:null,kostenstelle:null,personalbereich:null,einstellungsdatum:null,mitarbeiterkreis:null,arbeitszeitplanregel:null,zeitraumVon:null,zeitraumBis:null,stichtagAuswertung:null};for(let s=0;s<e.length;s++){const i=e[s].text,r=/vom\s+(\d{2}\.\d{2}\.\d{4})\s+bis\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);r&&(t.zeitraumVon=ae(r[1]),t.zeitraumBis=ae(r[2]));const l=/bis einschließlich dem\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);if(l&&(t.stichtagAuswertung=ae(l[1])),/Personalnummer/i.test(i)&&/Kostenstelle/i.test(i)){const o=(((a=e[s+1])==null?void 0:a.text)??"").trim();let c=o.split(/\s{2,}/);c.length<3&&(c=o.split(/\s+/)),c.length>=3&&/^\d/.test(c[0])&&(t.personalnummer=c[0],t.kostenstelle=c[1],t.personalbereich=c[2])}if(/Einstellungsdatum/i.test(i)&&/Mitarbeiterkreis/i.test(i)){const o=(((n=e[s+1])==null?void 0:n.text)??"").trim();let c=o.split(/\s{2,}/);c.length<3&&(c=o.split(/\s+/)),c.length>=3&&/^\d{2}\.\d{2}\.\d{4}$/.test(c[0])&&(t.einstellungsdatum=ae(c[0]),t.mitarbeiterkreis=c[1],t.arbeitszeitplanregel=c[2])}if(/Bei Rückfragen wenden Sie sich an/i.test(i))for(let o=s+1;o<Math.min(s+8,e.length);o++){const c=e[o].text.trim();if(/^[A-ZÄÖÜ][a-zäöüß]+(?:\s[A-ZÄÖÜ][a-zäöüß]+)+$/.test(c)&&!/kanarya/i.test(c)&&!/tel/i.test(c)){t.name=c;break}}}return t}function Wn(e,t){var o;const a=[],n=[];let s=null,i=null,r=!1,l=0;for(;l<e.length;){const c=e[l].text,d=/Monat:\s*([A-Za-zäöüÄÖÜß]+)\s*-\s*(\d{4})/.exec(c);if(d){const f=d[1].trim(),p=parseInt(d[2],10),b=Ge[f]??Ge[f.replace("ä","ae")]??null;b&&(s={jahr:p,monat:b,monatKey:`${p}-${String(b).padStart(2,"0")}`},r=!0,i=null),l++;continue}if(/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.test(c)){const f=/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.exec(c),p=ae(f[1]);i={monatKey:(s==null?void 0:s.monatKey)??ft(p),stichtag:p,glz:{},flexi:{},zeitkonten:{},raw:{}},l=Kn(e,l+1,i),n.push(i);continue}let u=s;const g=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)\b/.exec(c.trim());if(g&&s){const f=parseInt(g[1],10);r&&f>=20?u=Vn(s):f<=15&&(r=!1)}const h=Ue(c,u);if(h){const f=[];let p=l+1;for(;p<e.length;){const v=e[p].text;if(/^\s*\d{4}\s+Umbuchung/.test(v)||Ue(v,s)||/Wochensumme/i.test(v)||/Monats.bersicht/i.test(v)||/Monat:\s*[A-Za-z]/i.test(v))break;const T=Bn(v);if(T){f.push(T),p++;continue}break}if(f.length&&h.zeitSpannen.push(...f),h.tagestyp==="Wochenende"||h.wochentag==="SA"||h.wochentag==="SO"){l=p;continue}(h.ist!=null||h.soll!=null||(((o=h.zeitSpannen)==null?void 0:o.length)??0)>0||h.tagestyp!=null)&&a.push(h),l=p;continue}l++}return{tage:a,monate:n}}function Kn(e,t,a){let n=t;const s=/(\d{4,5}|KTAU|AZAU)\s*-\s*(.+?)\s+(-?[\d,.]+-?)(?=\s+(?:\d{4,5}|KTAU|AZAU)\s*-|\s*$)/g;for(;n<e.length;){const i=e[n].text.trim();if(/^Monat:\s/.test(i)||/^Einzelergebnisse\s/.test(i)||/^Tag\b/.test(i)||/^Wochensumme/.test(i)||/^\d{2}\s+(MO|DI|MI|DO|FR|SA|SO)\b/.test(i)||/^Übersicht für den Zeitraum/i.test(i)||/^Abwesenheitsansprüche/i.test(i))break;s.lastIndex=0;let r;for(;(r=s.exec(i))!=null;){const l=r[1],o=r[2].trim(),c=dt(r[3]);a.raw[l]={beschreibung:o,wert:c},l==="0008"&&(a.glz.saldoVorperiode=c),l==="8016"&&(a.glz.saldoAktuellePeriode=c),l==="9802"&&(a.glz.umgebuchteStunden=c),l==="0005"&&(a.glz.saldoGesamt=c),l==="9803"&&(a.glz.ueberzaehligeStd=c),l==="0050"&&(a.zeitkonten.produktivstunden=c),l==="9011"&&(a.flexi.jahreskontoVorperiode=c),l==="9010"&&(a.flexi.jahreskontoSaldo=c),l==="9020"&&(a.flexi.langzeitkontoSaldo=c),l==="9203"&&(a.zeitkonten.azMonatsendeUeber216=c),l==="9207"&&(a.zeitkonten.auszahlungBav=c),l==="9205"&&(a.zeitkonten.summeAuszahlung=c)}if(n++,n-t>80)break}return n}function Ue(e,t){if(!t)return null;const a=e.trim(),n=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)(?:\s+(.+))?$/.exec(a);if(!n)return null;const s=parseInt(n[1],10),i=n[2],r=(n[3]??"").trim();let l=t.jahr,o=t.monat;const c=new Date(l,o-1,s),d={datum:Qa(c),datumDate:c.toISOString(),wochentag:i,tagNr:s,monatKey:ft(c),wocheKey:Xa(c),zeitSpannen:[],aktivitaeten:[],ist:null,soll:null,diff:null,pause:null,tazp:null,tagestyp:null,raw:a};return r?(Cn(r,d),d):(d.tagestyp=["SA","SO"].includes(i)?"Wochenende":null,d)}function Bn(e){const t=e.trim(),a=/^(Stempelzeit|Reise öff\.VM\/PKW Beifahr\.|Reise öff\.VM\/PKW|Dienstreise Arbeitszeit)\s+(\d{2}:\d{2})\s+(\d{2}:\d{2})\s*$/.exec(t);return a?{aktivitaet:a[1],von:a[2],bis:a[3]}:null}function Cn(e,t){let a=null,n=e;for(const d of Tn)if(e.startsWith(d)){a=d,n=e.slice(d.length).trim();break}a||(a=e.split(/\s+/)[0],n=e.slice(a.length).trim()),t.tagestyp=In(a),t.aktivitaeten.push(a);const s=n.split(/\s+/).filter(Boolean),i=/^\d{2}:\d{2}$/,r=/^-?[\d,.]+-?$/;let l=0;for(;s[l]&&i.test(s[l])&&s[l+1]&&i.test(s[l+1]);)t.zeitSpannen.push({aktivitaet:a,von:s[l],bis:s[l+1]}),l+=2;const o=[];for(;l<s.length&&r.test(s[l]);){const d=dt(s[l]);d!=null&&o.push(d),l++}let c=s[l];o.length>=5?([t.ist,t.soll,t.diff,t.pause]=o,c||(c=String(o[4]))):o.length===4?[t.ist,t.soll,t.diff,t.pause]=o:o.length===3?[t.ist,t.soll,t.diff]=o:o.length===2?[t.ist,t.soll]=o:o.length===1&&(t.ist=o[0]),c&&(t.tazp=String(c))}function Vn(e){if(!e)return null;let t=e.monat-1,a=e.jahr;return t<1&&(t=12,a-=1),{jahr:a,monat:t,monatKey:`${a}-${String(t).padStart(2,"0")}`}}function In(e){return e?/^Stempelzeit$/i.test(e)?"Stempelzeit":/^Berufsschule Std\. bez$/i.test(e)||/^Berufsschule$/i.test(e)?"Berufsschule":/Dienstreise/i.test(e)||/Reise/i.test(e)?"Dienstreise":/^Urlaub$/i.test(e)?"Urlaub":/^Gleitzeit$/i.test(e)?"Gleitzeit":/Arbeitsunf.higkeit/i.test(e)?"Arbeitsunfähigkeit":/^(Neujahr|Karfreitag|Ostermontg|Ostmontg|Osterso\.|Hl\.3 Kön\.|Allerhlg|Pfingstmo|Fronleichn|TdDtEinh|TgDtEinh)$/i.test(e)?"Feiertag":e:null}const Mt="better-ess-tour-completed",On=(typeof import.meta<"u"?"./":"/")+"tutorial/speichern.png",Z=[{type:"modal",hero:!0,icon:"👋",title:"Willkommen bei Better ESS",text:'Diese App liest deinen <strong>Zeitnachweis</strong> und macht ihn auf einen Blick verständlich.<br><br>Eine Minute Tour — ich klicke selbst, du musst nur <strong>„Weiter"</strong> drücken.'},{type:"modal",hero:!0,icon:"🔒",title:"Deine Daten bleiben bei dir",text:"Dein PDF geht <strong>nicht ins Internet</strong>.<br><br>Alles läuft lokal in deinem Browser — wie eine Notizen-App. Kein Upload, kein Server, kein Konto."},{type:"highlight",target:'a[href="#/daten"]',icon:"📂",title:"Hier startet alles",text:'Ich bringe dich zur Daten-Seite — klick "Weiter".',placement:"right",autoClick:!0,onAfterClick:async()=>{window.location.hash!=="#/daten"&&(window.location.hash="#/daten"),await ke("#upload-zone",1500)}},{type:"download-modal",icon:"💾",title:"So holst du das richtige PDF aus dem ESS",image:On,points:[{kind:"good",icon:"✓",text:"<strong>Speichern-Button</strong> (Disketten-Symbol oben rechts in der PDF-Toolbar) — speichert eine echte Text-PDF."},{kind:"bad",icon:"✕",text:'<strong>NICHT</strong> "Drucken → Microsoft Print to PDF" — dabei werden Texte als Pfade gerendert und sind nicht lesbar.'}]},{type:"highlight",target:"#upload-zone",icon:"📥",title:"Lade jetzt dein PDF hoch",text:"Zieh dein Zeitnachweis-PDF auf die Box (oder klick sie an). Erst nach dem Upload geht die Tour weiter.",placement:"top",waitForTarget:!0,waitForEvent:"better-ess:pdf-uploaded"},{type:"modal",icon:"✨",title:"Geschafft!",text:"Dein PDF ist eingelesen. Jetzt zeig ich dir die Funktionen — anhand deiner echten Daten.",onNext:async()=>{window.location.hash="#/",await ke(".saldo-value",1500)}},{type:"highlight",target:".saldo-value",icon:"⚖️",title:"Dein aktueller Saldo",text:"Plus oder Minus auf einen Blick. Tagesaktuell.",placement:"right",waitForTarget:!0},{type:"highlight",target:".chart-wrap canvas",icon:"📈",title:"Saldo-Verlauf",text:"Hover über die Punkte für Details. Zeitraum oben rechts umschaltbar.",placement:"top",waitForTarget:!0},{type:"highlight",target:".tag-row .ist-display",icon:"⏱️",title:"Stunden direkt kopieren",text:"Klick auf <strong>H</strong> oder <strong>M</strong> — kopiert den Wert in deine Zwischenablage. Praktisch fürs IHK-Berichtsheft.",placement:"left",waitForTarget:!0},{type:"highlight",target:".alert",icon:"⚠️",title:"Auffälligkeiten",text:"Fehlende Tage, falsche BS-Stunden, Pausen-Abzug — alles automatisch erkannt.",placement:"left",optional:!0,waitForTarget:!0,timeoutMs:1200},{type:"highlight",target:".alert .btn.primary",icon:"✉️",title:"Mail mit 1 Klick",text:"Vorformulierte Mail an die Zeitwirtschaft — Datum, Werte, Anrede sind schon eingesetzt.",placement:"left",optional:!0,waitForTarget:!0,timeoutMs:1200},{type:"highlight",target:'a[href="#/monat"]',icon:"📅",title:"Monate & Wochen",text:"Tiefer reinzoomen: Monatssaldo, Wochenliste, Tagesbalken.",placement:"right"},{type:"highlight",target:'a[href="#/profil"]',icon:"👤",title:"Profil",text:"Über 18? Pausen-Regel und Mail-Empfänger anpassen.",placement:"right"},{type:"modal",icon:"🚀",title:"Bereit!",text:"Du kennst alle Funktionen. Tour erneut starten? Button am Ende der <strong>Daten</strong>-Seite."}],_n=Z.findIndex(e=>e.icon==="✨");let x=null,H=null;function zt(){Fe(),x={idx:0},j()}function Hn(e){return e?!1:!localStorage.getItem(Mt)}function jn(){localStorage.setItem(Mt,"1")}function Rn(){return x!==null}function Fe(){document.querySelectorAll(".tour-blur-frame, .tour-popover, .tour-pointer, .tour-highlight-border").forEach(e=>e.remove()),H&&(H(),H=null),x=null}function re(e){if(document.querySelectorAll(".tour-blur-frame").forEach(u=>u.remove()),!e){const u=document.createElement("div");u.className="tour-blur-frame full",document.body.appendChild(u);return}const t=e.getBoundingClientRect(),a=8,n=Math.max(0,t.left-a),s=Math.max(0,t.top-a),i=t.width+a*2,r=t.height+a*2,l=window.innerWidth,o=window.innerHeight,c=[{top:0,left:0,width:l,height:s},{top:s,left:0,width:n,height:r},{top:s,left:n+i,width:l-(n+i),height:r},{top:s+r,left:0,width:l,height:o-(s+r)}];for(const u of c){if(u.width<=0||u.height<=0)continue;const g=document.createElement("div");g.className="tour-blur-frame",g.style.top=u.top+"px",g.style.left=u.left+"px",g.style.width=u.width+"px",g.style.height=u.height+"px",document.body.appendChild(g)}let d=document.querySelector(".tour-highlight-border");d||(d=document.createElement("div"),d.className="tour-highlight-border",document.body.appendChild(d)),d.style.top=s+"px",d.style.left=n+"px",d.style.width=i+"px",d.style.height=r+"px",d.style.display=""}function We(){let e=document.querySelector(".tour-pointer");return e||(e=document.createElement("div"),e.className="tour-pointer",e.innerHTML=`
      <span class="tour-pointer-ripple"></span>
      <svg class="tour-pointer-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="tour-pointer-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.5"/>
          </filter>
        </defs>
        <path d="M 6 4 L 24 14 L 15 15.5 L 19 25 L 16 26.5 L 12 17 L 6 22 Z"
              fill="white" stroke="#0a0d1a" stroke-width="1.4" stroke-linejoin="round"
              filter="url(#tour-pointer-shadow)"/>
      </svg>`,e.style.top=window.innerHeight/2+"px",e.style.left=window.innerWidth/2+"px",document.body.appendChild(e)),e}function Nn(e){const t=We(),a=e.getBoundingClientRect(),n=a.left+a.width*.5,s=a.top+a.height*.5;t.style.top=s-6+"px",t.style.left=n-9+"px"}function Ye(){var e;(e=document.querySelector(".tour-pointer"))==null||e.remove()}async function Zn(e){const t=We();t.classList.add("tour-pointer-clicking"),await new Promise(a=>setTimeout(a,280)),t.classList.remove("tour-pointer-clicking")}async function ke(e,t=1500){const a=Date.now();for(;Date.now()-a<t;){const n=document.querySelector(e);if(n)return n;await new Promise(s=>setTimeout(s,100))}return null}async function j(){var l,o,c;if(!x)return;const e=Z[x.idx];if(!e){$e();return}if(H&&(H(),H=null),e.type==="download-modal")return Ye(),re(null),qn(e);let t=null;if(e.type==="highlight"){if(t=e.waitForTarget?await ke(e.target,e.timeoutMs??1500):document.querySelector(e.target),!t&&e.optional)return x.idx++,j();if(t){try{t.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}catch{}await new Promise(d=>setTimeout(d,250)),re(t),We(),requestAnimationFrame(()=>Nn(t))}else re(null)}else Ye(),re(null);let a=document.querySelector(".tour-popover");a||(a=document.createElement("div"),a.className="tour-popover",document.body.appendChild(a)),a.classList.remove("tour-popover-large","tour-popover-hero"),e.hero&&a.classList.add("tour-popover-hero");const n=x.idx===0,s=x.idx===Z.length-1,i=!!e.waitForEvent,r=i?"⏳ Warte auf Upload …":s?"Fertig":e.autoClick?"Weiter (Tour klickt) →":"Weiter →";if(a.innerHTML=`
    <div class="tour-popover-header">
      <span class="tour-popover-step">${x.idx+1} / ${Z.length}</span>
      <button class="tour-skip" type="button" aria-label="Tour beenden">Überspringen</button>
    </div>
    <div class="tour-popover-icon">${e.icon||""}</div>
    <h3>${e.title}</h3>
    <div class="tour-popover-body">${e.text}</div>
    <div class="tour-popover-actions">
      <button class="btn tour-prev" type="button" ${n?'disabled style="opacity:0.4;cursor:default"':""}>← Zurück</button>
      <button class="btn primary tour-next" type="button" ${i?'disabled style="opacity:0.5;cursor:default"':""}>${r}</button>
    </div>`,t?(a.classList.remove("center"),a.style.opacity="0",requestAnimationFrame(()=>{Gn(a,t,e.placement||"right"),a.style.opacity="1"})):(a.classList.add("center"),a.style.top=a.style.left=a.style.right=a.style.bottom="",a.style.opacity="1"),(l=a.querySelector(".tour-skip"))==null||l.addEventListener("click",()=>{confirm('Tour beenden? Du kannst sie unter „Daten" jederzeit wieder starten.')&&$e()}),n||(o=a.querySelector(".tour-prev"))==null||o.addEventListener("click",async()=>{x.idx=Math.max(0,x.idx-1),await j()}),!i)(c=a.querySelector(".tour-next"))==null||c.addEventListener("click",async()=>{if(e.autoClick&&t){await Zn();try{const d=t.getAttribute("href");d&&d.startsWith("#/")?window.location.hash=d.slice(1):t.click()}catch(d){console.warn("tour autoClick error:",d)}if(e.onAfterClick)try{await e.onAfterClick()}catch(d){console.warn("tour onAfterClick error:",d)}else await new Promise(d=>setTimeout(d,350))}else if(e.onNext)try{await e.onNext()}catch(d){console.warn("tour onNext error:",d)}x.idx++,await j()});else{const d=async()=>{x==null||x.idx,Fe(),document.querySelectorAll(".upload-modal-overlay").forEach(u=>u.remove()),await new Promise(u=>setTimeout(u,300)),x={idx:_n},await j()};document.addEventListener(e.waitForEvent,d,{once:!0}),H=()=>document.removeEventListener(e.waitForEvent,d)}}function qn(e){var n,s,i;let t=document.querySelector(".tour-popover");t||(t=document.createElement("div"),t.className="tour-popover",document.body.appendChild(t)),t.classList.add("tour-popover-large","center");const a=x.idx===0;x.idx,Z.length-1,t.innerHTML=`
    <div class="tour-popover-header">
      <span class="tour-popover-step">${x.idx+1} / ${Z.length}</span>
      <button class="tour-skip" type="button" aria-label="Tour beenden">Überspringen</button>
    </div>
    <div class="tour-popover-icon">${e.icon||""}</div>
    <h3>${e.title}</h3>
    <div class="tour-download-image-wrap">
      <img src="${e.image}" alt="Speichern-Button im PDF-Viewer">
    </div>
    <div class="tour-download-points">
      ${e.points.map(r=>`
        <div class="tour-download-point ${r.kind==="bad"?"bad":""}">
          <span class="tour-download-point-icon">${r.icon}</span>
          <span>${r.text}</span>
        </div>`).join("")}
    </div>
    <div class="tour-popover-actions" style="margin-top:14px;">
      <button class="btn tour-prev" type="button" ${a?'disabled style="opacity:0.4;cursor:default"':""}>← Zurück</button>
      <button class="btn primary tour-next" type="button">Verstanden, weiter →</button>
    </div>`,t.style.top=t.style.left=t.style.right=t.style.bottom="",t.style.opacity="1",(n=t.querySelector(".tour-skip"))==null||n.addEventListener("click",()=>{confirm('Tour beenden? Du kannst sie unter „Daten" jederzeit wieder starten.')&&$e()}),a||(s=t.querySelector(".tour-prev"))==null||s.addEventListener("click",async()=>{x.idx=Math.max(0,x.idx-1),await j()}),(i=t.querySelector(".tour-next"))==null||i.addEventListener("click",async()=>{x.idx++,await j()})}function Gn(e,t,a){const n=t.getBoundingClientRect(),s=16,i=e.offsetWidth||360,r=e.offsetHeight||220,l=window.innerWidth,o=window.innerHeight,c=[a,"right","bottom","left","top"];let d=null;for(const h of c)if((()=>{switch(h){case"right":return n.right+s+i<=l;case"left":return n.left-s-i>=0;case"bottom":return n.bottom+s+r<=o;case"top":return n.top-s-r>=0}})()){d=h;break}d=d||a;let u,g;switch(d){case"right":u=n.top+n.height/2-r/2,g=n.right+s;break;case"left":u=n.top+n.height/2-r/2,g=n.left-i-s;break;case"bottom":u=n.bottom+s,g=n.left+n.width/2-i/2;break;case"top":default:u=n.top-r-s,g=n.left+n.width/2-i/2;break}u=Math.max(s,Math.min(o-r-s,u)),g=Math.max(s,Math.min(l-i-s,g)),e.style.position="fixed",e.style.top=u+"px",e.style.left=g+"px",e.style.right="auto",e.style.bottom="auto",e.style.transform=""}function $e(){Fe(),jn()}async function Jn({root:e}){var i;const t=await ot(),a=await C();e.innerHTML=`
    <h1 class="view-title">Daten</h1>
    <p class="view-subtitle">Zeitnachweis hochladen, Backup exportieren oder alle Daten löschen.</p>

    <div class="grid cols-2" style="margin-bottom: 32px;">
      <div class="card">
        <h2>PDF-Upload</h2>
        <p style="color: var(--fg-muted); font-size: 13px; margin-bottom: 12px;">
          Lade deinen Zeitnachweis (PDF aus dem ESS) hoch. Die Daten werden ausschließlich lokal in deinem Browser analysiert und gespeichert — nichts verlässt dein Gerät.
        </p>
        <details class="tutorial-details" style="margin-bottom: 16px; border: 1px solid var(--border); border-radius: var(--radius-md); padding: 0;">
          <summary style="cursor: pointer; padding: 10px 14px; font-size: 13px; font-weight: 600; color: var(--fg);">
            Wie bekomme ich die richtige PDF aus dem ESS?
          </summary>
          <div style="padding: 0 14px 14px;">
            <p style="font-size: 13px; color: var(--fg-muted); margin: 0 0 8px;">
              Öffne deinen Zeitnachweis in ESS. In der Toolbar des PDF-Viewers findest du oben rechts den <strong>Speichern-Button</strong> (Disketten-Symbol). Damit lädst du eine echte Text-PDF herunter.
            </p>
            <p style="font-size: 13px; color: var(--danger); margin: 0 0 12px;">
              <strong>Wichtig:</strong> Nutze NICHT den Drucken-Button (links daneben) mit „Microsoft Print to PDF" — dabei werden Texte als Pfade gerendert und die App kann sie nicht lesen.
            </p>
            <img class="zoomable" src="./tutorial/speichern.png" alt="Speichern-Button im PDF-Viewer" title="Klick für Vollbild" style="width: 100%; max-width: 600px; border: 1px solid var(--border); border-radius: var(--radius-sm); display: block; cursor: zoom-in;" />
          </div>
        </details>
        <div class="upload-zone" id="upload-zone">
          <div class="upload-zone-icon">📄</div>
          <h3>PDF hierher ziehen oder klicken</h3>
          <p>Akzeptiert: Zeitnachweis-PDF aus dem ESS (über Speichern, nicht Drucken)</p>
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
        ${t.length===0?'<div class="empty-state"><div class="empty-state-icon">📭</div><p>Noch keine Uploads</p></div>':Pt(t)}
      </div>
    </div>

    <div class="card" style="margin-top: 24px; text-align: center; background: transparent; border-style: dashed;">
      <p style="color: var(--fg-muted); font-size: 13px; margin: 0 0 12px;">Brauchst du nochmal eine kurze Tour durch die App?</p>
      <button class="btn" id="btn-tour-restart" type="button">🎯 Tour erneut starten</button>
    </div>
  `;const n=e.querySelector("#upload-zone"),s=e.querySelector("#file-input");n.addEventListener("click",()=>s.click()),n.addEventListener("dragover",r=>{r.preventDefault(),n.classList.add("drag")}),n.addEventListener("dragleave",()=>n.classList.remove("drag")),n.addEventListener("drop",async r=>{var o;r.preventDefault(),n.classList.remove("drag");const l=(o=r.dataTransfer.files)==null?void 0:o[0];l&&await Qe(l,e,a)}),s.addEventListener("change",async r=>{var o;const l=(o=r.target.files)==null?void 0:o[0];l&&await Qe(l,e,a)}),e.querySelector("#btn-export").addEventListener("click",Xn),e.querySelector("#btn-import").addEventListener("click",()=>e.querySelector("#import-input").click()),e.querySelector("#import-input").addEventListener("change",Qn),e.querySelector("#btn-clear-parsed").addEventListener("click",Yn),e.querySelector("#btn-reset").addEventListener("click",es),(i=e.querySelector("#btn-tour-restart"))==null||i.addEventListener("click",()=>zt()),Un()}let Xe=!1;function Un(){Xe||(Xe=!0,document.body.addEventListener("click",e=>{if(e.target.closest(".lightbox-overlay, .upload-modal-overlay"))return;const t=e.target.closest("img.zoomable");t&&Dt(t.src,t.alt)}))}function Dt(e,t){const a=document.createElement("div");a.className="lightbox-overlay",a.innerHTML=`
    <button class="lightbox-close" aria-label="Schließen" title="Schließen (Esc)">×</button>
    <img src="${e}" alt="${t||""}" />
  `,document.body.appendChild(a);const n=()=>{a.remove(),document.removeEventListener("keydown",s)},s=i=>{i.key==="Escape"&&n()};a.addEventListener("click",i=>{(i.target===a||i.target.classList.contains("lightbox-close"))&&n()}),document.addEventListener("keydown",s)}async function Yn(){confirm("PDF-abgeleitete Daten (Tage, Monate, Uploads) werden gelöscht. Profil und Mail-Vorlagen bleiben erhalten. Fortfahren?")&&(await ct(),D("Daten gelöscht. Profil bleibt."),setTimeout(()=>location.reload(),600))}function Pt(e){return`
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
            <td>${w(ts(t.hochladeDatum))}</td>
            <td>${w(t.dateiname||"—")}</td>
            <td>${t.zeitraumVon?w($(new Date(t.zeitraumVon))):"—"} – ${t.zeitraumBis?w($(new Date(t.zeitraumBis))):"—"}</td>
            <td>${t.stichtagAuswertung?w($(new Date(t.stichtagAuswertung))):"—"}</td>
            <td class="num">${t.tageCount??"—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}async function Qe(e,t,a){var i,r,l,o;const n=t.querySelector("#upload-status"),s=t.querySelector("#upload-zone");s.style.pointerEvents="none",s.style.opacity="0.6",n.innerHTML=`
    <div class="alert severity-info">
      <div class="loader-ring" style="width: 24px; height: 24px; border-width: 2px;"></div>
      <div class="alert-body">
        <div class="alert-title">PDF wird verarbeitet…</div>
        <p style="margin: 4px 0; font-size: 13px;"><strong>${w(e.name)}</strong> — das kann bei großen PDFs einige Sekunden dauern.</p>
      </div>
    </div>`;try{const c=await e.arrayBuffer(),d=await En(c);if(d.tage.length===0&&!d.meta.zeitraumVon){s.style.pointerEvents="",s.style.opacity="",n.innerHTML="",ye({type:"error",title:"Diese PDF ist nicht kompatibel",desc:'Im PDF wurden keine Texte gefunden. Das passiert, wenn das PDF über „Drucken → Als PDF speichern" (z.B. „Microsoft Print to PDF") erzeugt wurde — dabei werden Texte als Vektorpfade gerendert und können nicht ausgelesen werden.',hint:'Lade dein PDF direkt aus dem ESS über den <strong>Speichern-Button</strong> herunter (Disketten-Symbol oben rechts im PDF-Viewer) — nicht über „Drucken".',screenshot:!0,producer:(i=d.meta)==null?void 0:i.producer}),ge("PDF enthält keinen extrahierbaren Text.");return}const u=await fe(),g=u==null?void 0:u.personalnummer,h=d.meta.personalnummer;if(g&&h&&g!==h){const J=(u==null?void 0:u.name)||`Personalnr. ${g}`,y=d.meta.name||`Personalnr. ${h}`;if(!confirm(`Das hochgeladene PDF gehört zu einem anderen Azubi als die bisher gespeicherten Daten:

Bisher: ${J}
Jetzt:  ${y}

Wenn du fortfährst, werden alle alten Tagesdaten gelöscht und durch die neuen ersetzt.
(Profil-Einstellungen wie Theme und Mail-Vorlagen bleiben erhalten.)

Fortfahren?`)){s.style.pointerEvents="",s.style.opacity="",n.innerHTML=`
          <div class="alert severity-info">
            <div class="alert-body">
              <div class="alert-title">Upload abgebrochen</div>
              <p style="margin: 4px 0; font-size: 13px;">Es wurden keine Daten verändert. Lade das richtige PDF (für ${w(J)}) erneut hoch.</p>
            </div>
          </div>`;return}await ct();const K=await C();await oe({...K,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1}})}const f=await pa(d.tage,d.monate,d.meta.stichtagAuswertung);(f.skippedTage>0||f.skippedMonate>0)&&console.info(`[upload] ${f.skippedTage} Tage und ${f.skippedMonate} Monate uebersprungen — bestehende Daten haben juengeren Stichtag.`),await ma({dateiname:e.name,personalnummer:d.meta.personalnummer??null,name:d.meta.name??null,zeitraumVon:((r=d.meta.zeitraumVon)==null?void 0:r.toISOString())??null,zeitraumBis:((l=d.meta.zeitraumBis)==null?void 0:l.toISOString())??null,stichtagAuswertung:((o=d.meta.stichtagAuswertung)==null?void 0:o.toISOString())??null,tageCount:d.tage.length,monateCount:d.monate.length});const p=await V(),b=pt(p),v={...lt(),...a};(b.wochentageWoechentlich.length>0||b.wochentage14Taegig.length>0)&&(v.berufsschulMuster=b),await oe(v),n.innerHTML="",Rn()||ye({type:"success",title:"PDF erfolgreich eingelesen",desc:d.meta.zeitraumVon?`Zeitraum: ${$(d.meta.zeitraumVon)} – ${$(d.meta.zeitraumBis)}`:"Daten wurden erfolgreich verarbeitet.",stats:[{num:d.tage.length,label:"Tage"},{num:d.monate.length,label:"Monatsübersichten"}]}),D(`PDF verarbeitet: ${d.tage.length} Tage.`),document.dispatchEvent(new CustomEvent("better-ess:pdf-uploaded",{detail:{tageCount:d.tage.length,monateCount:d.monate.length}}));const T=await ot();t.querySelector("#uploads-list").innerHTML=Pt(T)}catch(c){console.error(c),n.innerHTML="",ye({type:"error",title:"Fehler beim Parsen",desc:w(c.message||String(c)),hint:'Prüfe, ob es sich um einen ESS-Zeitnachweis im richtigen Format handelt. Lade dein PDF über den Speichern-Button herunter, nicht über „Drucken".',screenshot:!0}),ge("PDF konnte nicht gelesen werden.")}finally{s.style.pointerEvents="",s.style.opacity=""}}async function Xn(){try{const e=await ba(),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),a=URL.createObjectURL(t),n=document.createElement("a"),s=new Date().toISOString().slice(0,10);n.href=a,n.download=`zeitnachweis-backup-${s}.json`,n.click(),URL.revokeObjectURL(a),D("Backup heruntergeladen.")}catch(e){ge(`Export fehlgeschlagen: ${e.message}`)}}async function Qn(e){var a;const t=(a=e.target.files)==null?void 0:a[0];if(t)try{const n=await t.text(),s=JSON.parse(n);if(!confirm("Existierende Daten werden überschrieben. Fortfahren?"))return;await ya(s),D("Backup erfolgreich importiert. Seite wird neu geladen…"),setTimeout(()=>location.reload(),800)}catch(n){ge(`Import fehlgeschlagen: ${n.message}`)}}async function es(){confirm("ALLE Daten endgültig löschen? Das lässt sich nicht rückgängig machen.")&&confirm("Wirklich alle Daten löschen? Letzte Warnung.")&&(await va(),D("Alle Daten gelöscht."),setTimeout(()=>location.reload(),600))}function ts(e){if(!e)return"—";const t=new Date(e);return t.toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"})+" "+t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}function ye(e){const{type:t,title:a,desc:n,hint:s,screenshot:i,stats:r,producer:l}=e,o=document.createElement("div");o.className="upload-modal-overlay";const c=`
    <svg class="upload-check-svg" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
      <circle class="upload-check-bg" cx="26" cy="26" r="24"/>
      <circle class="upload-check-circle" cx="26" cy="26" r="24"/>
      <path class="upload-check-mark" d="M14 27 L22 35 L38 18"/>
    </svg>`,d=`
    <svg class="upload-cross-svg" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
      <circle class="upload-cross-bg" cx="26" cy="26" r="24"/>
      <circle class="upload-cross-circle" cx="26" cy="26" r="24"/>
      <line class="upload-cross-line" x1="17" y1="17" x2="35" y2="35"/>
      <line class="upload-cross-line upload-cross-line-2" x1="35" y1="17" x2="17" y2="35"/>
    </svg>`,u=r!=null&&r.length?`
    <div class="upload-modal-stats">
      ${r.map(v=>`
        <div class="upload-modal-stat">
          <div class="upload-modal-stat-num">${w(String(v.num))}</div>
          <div class="upload-modal-stat-label">${w(v.label)}</div>
        </div>
      `).join("")}
    </div>`:"",g=i?`
    <img class="upload-modal-hint-img zoomable" src="./tutorial/speichern.png"
         alt="Speichern-Button im PDF-Viewer"
         title="Klick für Vollbild" />`:"",h=l?`<p style="font-size: 12px; color: var(--fg-subtle); margin-top: 12px;">Erkannt: Producer „${w(l)}"</p>`:"",f=t==="success"?`
      <a href="#/" class="btn primary">Zum Dashboard</a>
      <a href="#/monat" class="btn">Monate ansehen</a>
      <button class="btn upload-modal-close-btn">Schließen</button>`:`
      <button class="btn primary upload-modal-close-btn">Verstanden</button>`;o.innerHTML=`
    <div class="upload-modal" role="dialog" aria-modal="true">
      <div class="upload-modal-icon-wrap">
        ${t==="success"?c:d}
      </div>
      <h2 class="upload-modal-title">${w(a)}</h2>
      <p class="upload-modal-desc">${n}</p>
      ${u}
      ${s?`<p class="upload-modal-desc" style="background: var(--accent-bg); padding: 12px; border-radius: 8px; border-left: 3px solid var(--accent);">${s}</p>`:""}
      ${g}
      ${h}
      <div class="upload-modal-actions">${f}</div>
    </div>`,document.body.appendChild(o);const p=()=>{o.style.animation="upload-modal-fade 150ms ease-out reverse",setTimeout(()=>o.remove(),150),document.removeEventListener("keydown",b)},b=v=>{v.key==="Escape"&&p()};document.addEventListener("keydown",b),o.addEventListener("click",v=>{if(v.target===o){p();return}if(v.target.closest(".upload-modal-close-btn")){p();return}if(v.target.closest(".upload-modal-actions a, .upload-modal-actions button")){p();return}const T=v.target.closest("img.zoomable");T&&Dt(T.src,T.alt)})}const et={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag"};async function as({root:e}){var s,i,r,l,o;const t=await C(),a=t.berufsschulMuster??{},n=(((s=a.wochentageWoechentlich)==null?void 0:s.length)??0)>0||(((i=a.wochentage14Taegig)==null?void 0:i.length)??0)>0;e.innerHTML=`
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
          <input type="email" name="zeitwirtschaftEmail" value="${tt(t.zeitwirtschaftEmail)}" />
        </div>
        <div class="form-group">
          <label>Anrede in Mails</label>
          <input type="text" name="zeitwirtschaftAnrede" value="${tt(t.zeitwirtschaftAnrede)}" placeholder="Frau Kanarya" />
        </div>
      </div>

      <div class="card" style="grid-column: 1 / -1;">
        <h2>Berufsschul-Rhythmus <span style="font-size: 11px; font-weight: 500; color: var(--fg-subtle); text-transform: uppercase; letter-spacing: 0.05em; margin-left: 8px;">Automatisch erkannt</span></h2>
        ${n?`
          <div class="tag-detail">
            <div class="tag-detail-label">Wöchentlich</div>
            <div class="tag-detail-value"><strong>${((r=a.wochentageWoechentlich)==null?void 0:r.map(c=>et[c]).join(", "))||"—"}</strong></div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Alle 2 Wochen</div>
            <div class="tag-detail-value"><strong>${((l=a.wochentage14Taegig)==null?void 0:l.map(c=>et[c]).join(", "))||"—"}</strong>${a.referenzDatum14Taegig?` <span class="hint">(Anker: ${$(new Date(a.referenzDatum14Taegig))})</span>`:""}</div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Stunden pro Schultag</div>
            <div class="tag-detail-value">
              <strong>${a.stundenProTag!=null?a.stundenProTag.toFixed(2).replace(".",",")+"h":"—"}</strong>
              ${a.halbtags?' <span class="hint" style="color: var(--accent);">(Halbtags-Schule erkannt)</span>':""}
            </div>
          </div>
          <p class="hint" style="margin-top: 16px;">
            Das Muster wird bei jedem PDF-Upload neu aus den Daten abgeleitet. ${a.halbtags?'Da deine Schultage typischerweise weniger als 5h dauern, geht die App von Halbtags-Schule aus und meldet KEINE „BS-Stunden falsch"-Warnung, wenn dein Schultag nur '+(((o=a.stundenProTag)==null?void 0:o.toFixed(2).replace(".",","))??"4,00")+"h hat.":"Je länger der erfasste Zeitraum, desto präziser."}
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
  `,e.querySelector("#profil-form").addEventListener("submit",async c=>{var g,h;c.preventDefault();const d=new FormData(c.target),u={...t,ueber18:d.get("ueber18")==="on",zeitwirtschaftEmail:((g=d.get("zeitwirtschaftEmail"))==null?void 0:g.trim())||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:((h=d.get("zeitwirtschaftAnrede"))==null?void 0:h.trim())||"Frau Kanarya"};await oe(u),D("Profil gespeichert.")})}function tt(e){return String(e??"").replace(/"/g,"&quot;")}async function ns({root:e}){var s;const t=await q(),a=await V(),n={};for(const i of a)n[s=i.monatKey]??(n[s]=[]),n[i.monatKey].push(i);if(t.length===0){e.innerHTML=os("Noch keine Monatsdaten. Lade zuerst ein PDF unter Daten hoch.");return}e.innerHTML=`
    <h1 class="view-title">Monate</h1>
    <p class="view-subtitle">${t.length} Monate erfasst. Klicke für Details.</p>

    <div class="grid cols-2">
      ${t.slice().reverse().map(i=>{var g;const l=(n[i.monatKey]??[]).filter(h=>h.ist!=null&&h.ist>0),o=l.reduce((h,f)=>h+(f.ist??0),0),c=l.reduce((h,f)=>h+(f.soll??0),0),d=o-c,u=(g=i.glz)==null?void 0:g.saldoGesamt;return`
          <a href="#/monat/${i.monatKey}" class="card" style="text-decoration: none; color: inherit; display: block;">
            <div class="card-split" style="margin-bottom: 12px;">
              <h2 style="margin: 0;">${Se(i.monatKey)}</h2>
              <span class="saldo-trend ${u>.05?"up":u<-.05?"down":"flat"}" style="margin: 0; font-size: 12px;">
                Saldo: <strong>${E(u??0,{signed:!0})}</strong>
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
                <div class="tabular" style="font-size: 14px; font-weight: 500; color: ${d>.05?"var(--success)":d<-.05?"var(--danger)":"var(--fg)"};">${E(d,{signed:!0})}</div>
              </div>
            </div>
          </a>
        `}).join("")}
    </div>
  `}async function ss({params:e,root:t}){const a=e.yyyymm,[n,s,i,r]=await Promise.all([V(),q(),C(),fe()]),l=s.find(g=>g.monatKey===a),c=Ae(n,s).filter(g=>g.monatKey===a);if(!c.length){t.innerHTML=`<h1 class="view-title">Monat ${Se(a)}</h1><p class="view-subtitle">Keine Daten für diesen Monat.</p><a href="#/monat" class="btn">← Alle Monate</a>`;return}const d=r!=null&&r.stichtagAuswertung?new Date(r.stichtagAuswertung):new Date,u=pe(n,i,d).filter(g=>g.datum.startsWith(a));t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat" class="btn sm">← Alle Monate</a>
    </div>
    <h1 class="view-title">${Se(a)}</h1>
    <p class="view-subtitle">${c.length} Tage · ${u.length} Auffälligkeiten</p>

    ${l?is(l):""}

    <div class="card" style="margin-bottom: 24px;">
      <h2>Saldo-Verlauf</h2>
      <div class="chart-wrap tall"><canvas id="chart-monat"></canvas></div>
    </div>

    ${u.length?`
      <div class="card" style="margin-bottom: 24px;">
        <h2>Auffälligkeiten</h2>
        ${u.map(g=>ls(g)).join("")}
      </div>
    `:""}

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Wochen</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">Klicke auf eine Woche für die Detailansicht</span>
      </div>
      ${rs(c)}
    </div>

    <div class="card">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Tage</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">Klick auf eine Zeile für Tag-Details · H/M zum Kopieren</span>
      </div>
      <div id="tage-liste-monat">${Le(c.slice().reverse(),{warnungen:u})}</div>
    </div>
  `,requestAnimationFrame(()=>{Te(t.querySelector("#chart-monat"),c)}),St(t.querySelector("#tage-liste-monat"))}function is(e){var i,r,l,o;const t=((i=e.glz)==null?void 0:i.saldoGesamt)??0,a=((r=e.glz)==null?void 0:r.saldoVorperiode)??0,n=((l=e.glz)==null?void 0:l.saldoAktuellePeriode)??0,s=c=>c>.05?"var(--success)":c<-.05?"var(--danger)":"var(--fg)";return`
    <div class="grid cols-4" style="margin-bottom: 24px;">
      <div class="card">
        <h3>GLZ-Saldo gesamt</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${s(t)};">${E(t,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Vorperiode</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${s(a)};">${E(a,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Akt. Periode</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${s(n)};">${E(n,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Produktivstd.</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${E(((o=e.zeitkonten)==null?void 0:o.produktivstunden)??0,{suffix:""})}</div>
      </div>
    </div>
  `}function rs(e){var n;const t={};for(const s of e)t[n=s.wocheKey]??(t[n]={key:s.wocheKey,tage:[],ist:0,soll:0}),t[s.wocheKey].tage.push(s),t[s.wocheKey].ist+=s.ist??0,t[s.wocheKey].soll+=s.soll??0;const a=Object.keys(t).sort();return a.length?a.map(s=>{var u;const i=t[s],r=+(i.ist-i.soll).toFixed(2),l=r>.05?"var(--success)":r<-.05?"var(--danger)":"var(--fg-muted)",o=(u=i.tage[0])==null?void 0:u.datum,c=o?De(S(o)):"",d=s.split("-")[1]||"?";return`
      <a href="#/woche/${s}" class="list-item" style="text-decoration: none; color: inherit;">
        <div class="tabular" style="font-size: 16px; font-weight: 600; color: var(--fg-muted); min-width: 80px;">KW ${w(d)}</div>
        <div>
          <div class="list-item-title tabular">${w(c)}</div>
          <div class="list-item-sub">${i.tage.length} Tage · Ist ${i.ist.toFixed(2).replace(".",",")}h · Soll ${i.soll.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="tabular" style="font-weight: 600; font-size: 16px; color: ${l};">${E(r,{signed:!0})}</div>
        <div style="color: var(--fg-subtle);">→</div>
      </a>
    `}).join(""):'<p style="color: var(--fg-muted);">Keine Wochen.</p>'}function ls(e){return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i"}</div>
      <div class="alert-body">
        <div class="alert-title">${w(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${w(e.beschreibung)}</p>
        ${e.mailVorlageKey?`<div class="alert-actions"><a href="#/" class="btn primary sm">Zum Dashboard</a><a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a></div>`:""}
      </div>
    </div>
  `}function Se(e){const[t,a]=e.split("-"),n=new Date(parseInt(t),parseInt(a)-1,1);return P(n,"LLLL yyyy",{locale:G})}function os(e){return`<div class="empty-state"><div class="empty-state-icon">📭</div><p>${w(e)}</p><a href="#/daten" class="btn primary">Zu Daten</a></div>`}async function cs({root:e}){var s;const t=await V();if(!t.length){e.innerHTML='<h1 class="view-title">Wochen</h1><p class="view-subtitle">Noch keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a={};for(const i of t)a[s=i.wocheKey]??(a[s]={key:i.wocheKey,tage:[],ist:0,soll:0}),a[i.wocheKey].tage.push(i),a[i.wocheKey].ist+=i.ist??0,a[i.wocheKey].soll+=i.soll??0;const n=Object.keys(a).sort().reverse();e.innerHTML=`
    <h1 class="view-title">Wochen</h1>
    <p class="view-subtitle">${n.length} Wochen erfasst.</p>

    <div>
      ${n.map(i=>{var u;const r=a[i],l=+(r.ist-r.soll).toFixed(2),o=l>.05?"var(--success)":l<-.05?"var(--danger)":"var(--fg-muted)",c=(u=r.tage[0])==null?void 0:u.datum,d=c?De(S(c)):"";return`
          <a href="#/woche/${i}" class="list-item">
            <div class="tabular" style="font-size: 16px; font-weight: 600; color: var(--fg-muted); min-width: 80px;">${w(At(i))}</div>
            <div>
              <div class="list-item-title tabular">${w(d)}</div>
              <div class="list-item-sub">${r.tage.length} Tage · Ist ${r.ist.toFixed(2).replace(".",",")}h · Soll ${r.soll.toFixed(2).replace(".",",")}h</div>
            </div>
            <div class="tabular" style="font-weight: 600; font-size: 16px; color: ${o};">${E(l,{signed:!0})}</div>
            <div style="color: var(--fg-subtle);">→</div>
          </a>
        `}).join("")}
    </div>
  `}async function ds({params:e,root:t}){const a=e.yyyykw,[n,s,i,r]=await Promise.all([V(),q(),C(),fe()]),o=Ae(n,s).filter(p=>p.wocheKey===a);if(!o.length){t.innerHTML=`<h1 class="view-title">KW ${w(a)}</h1><p>Keine Daten.</p><a href="#/woche" class="btn">← Alle Wochen</a>`;return}const c=o.reduce((p,b)=>p+(b.ist??0),0),d=o.reduce((p,b)=>p+(b.soll??0),0),u=+(c-d).toFixed(2),g=p=>p>.05?"var(--success)":p<-.05?"var(--danger)":"var(--fg)",h=r!=null&&r.stichtagAuswertung?new Date(r.stichtagAuswertung):new Date,f=pe(n,i,h).filter(p=>o.some(b=>b.datum===p.datum));t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/woche" class="btn sm">← Alle Wochen</a>
    </div>
    <h1 class="view-title">${w(At(a))}</h1>
    <p class="view-subtitle">${o.length} Tage · ${f.length} Auffälligkeiten</p>

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${c.toFixed(2).replace(".",",")}h</div>
      </div>
      <div class="card">
        <h3>Soll-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${d.toFixed(2).replace(".",",")}h</div>
      </div>
      <div class="card">
        <h3>Differenz</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${g(u)};">${E(u,{signed:!0})}</div>
      </div>
    </div>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Saldo-Verlauf</h2>
      <div class="chart-wrap"><canvas id="chart-woche"></canvas></div>
    </div>

    ${f.length?`
      <div class="card" style="margin-bottom: 24px;">
        <h2>Auffälligkeiten</h2>
        ${f.map(p=>us(p)).join("")}
      </div>
    `:""}

    <div class="card">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Tage</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">Klick auf eine Zeile für Tag-Details · H/M zum Kopieren</span>
      </div>
      <div id="tage-liste-woche">${Le(o,{warnungen:f})}</div>
    </div>
  `,requestAnimationFrame(()=>{Te(t.querySelector("#chart-woche"),o)}),St(t.querySelector("#tage-liste-woche"))}function us(e){return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i"}</div>
      <div class="alert-body">
        <div class="alert-title">${w(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${w(e.beschreibung)}</p>
        ${e.mailVorlageKey?`<div class="alert-actions"><a href="#/" class="btn primary sm">Zum Dashboard</a><a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a></div>`:""}
      </div>
    </div>
  `}function At(e){const[t,a]=e.split("-");return`KW ${a} · ${t}`}async function gs({params:e,root:t}){var c,d,u;const a=e.datum,n=await m.tage.get(a),s=await C();if(!n){t.innerHTML=`<h1 class="view-title">Tag nicht gefunden</h1><p>Für ${a} liegen keine Daten vor.</p><a href="#/" class="btn">← Dashboard</a>`;return}const i=S(a),r=n.tagestyp==="Stempelzeit"?bt(n,s):null,l=Pe(i,s.berufsschulMuster),o=ut(n.zeitSpannen);t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat/${a.slice(0,7)}" class="btn sm">← Zum Monat</a>
    </div>
    <h1 class="view-title">${ht(i)}</h1>
    <p class="view-subtitle">${n.tagestyp??"Kein Typ"} · KW ${(c=n.wocheKey)==null?void 0:c.split("-")[1]}</p>

    ${o?`
      <div class="card kommen-gehen-hero" style="margin-bottom: 24px;">
        <div class="hint" style="text-transform: uppercase; letter-spacing: 0.05em; font-size: 11px; margin-bottom: 10px;">Tages-Rahmen</div>
        ${gt(o,{size:32})}
      </div>
    `:""}

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${n.ist!=null?n.ist.toFixed(2).replace(".",",")+"h":"—"}</div>
        <div class="hint">= ${n.ist!=null?de(n.ist):"—"}</div>
      </div>
      <div class="card">
        <h3>Soll-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${n.soll!=null?n.soll.toFixed(2).replace(".",",")+"h":"—"}</div>
      </div>
      <div class="card">
        <h3>Differenz</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${n.diff>.05?"var(--success)":n.diff<-.05?"var(--danger)":"var(--fg)"};">${n.diff!=null?E(n.diff,{signed:!0}):"—"}</div>
      </div>
    </div>

    <div class="grid cols-2" style="gap: 24px;">
      <div class="card">
        <h2>Zeitstempel</h2>
        ${(d=n.zeitSpannen)!=null&&d.length?n.zeitSpannen.map(g=>`
              <div class="tag-detail">
                <div class="tag-detail-label">${te(g.aktivitaet??"Stempelzeit")}</div>
                <div class="tag-detail-value tabular">${g.von??"—"} – ${g.bis??"—"}</div>
              </div>
            `).join(""):'<p class="hint">Keine Stempelzeiten für diesen Tag.</p>'}
      </div>

      <div class="card">
        <h2>Klassifikation</h2>
        <div class="tag-detail">
          <div class="tag-detail-label">Tagestyp</div>
          <div class="tag-detail-value">${n.tagestyp?`<span class="pill ${hs(n.tagestyp)}">${te(n.tagestyp)}</span>`:"—"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Laut Profil</div>
          <div class="tag-detail-value">${l?"🎓 Berufsschultag erwartet":"Regulärer Werktag"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">TAZP-Code</div>
          <div class="tag-detail-value"><code>${te(n.tazp??"—")}</code></div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Monat</div>
          <div class="tag-detail-value">${te(n.monatKey)}</div>
        </div>
      </div>

      ${r&&!r.keinAnspruch?`
        <div class="card" style="grid-column: 1 / -1;">
          <h2>Pausen-Analyse</h2>
          <div class="grid cols-2">
            <div>
              <div class="tag-detail">
                <div class="tag-detail-label">Arbeitszeit (netto)</div>
                <div class="tag-detail-value tabular">${(u=r.arbeitszeitOhnePause)==null?void 0:u.toFixed(2).replace(".",",")}h</div>
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
              <div class="alert-body">${te(r.warnung)}</div>
            </div>
          `:""}
        </div>
      `:""}
    </div>
  `}function hs(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function te(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const fs=[{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:"alles",label:"Alles"}];async function ps({root:e}){var i;const[t,a]=await Promise.all([V(),q()]);if(!t.length){e.innerHTML='<h1 class="view-title">Analytics</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}let n=t.length>30?30:"alles";e.innerHTML=`
    <h1 class="view-title">Analytics</h1>
    <p class="view-subtitle">${t.length} Tage über ${a.length} Monatsübersichten visualisiert.</p>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Saldo-Verlauf pro Monat</h2>
      <div class="chart-wrap tall"><canvas id="c-saldo"></canvas></div>
    </div>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Wochenstunden</h2>
      <p class="hint" style="margin-top: -4px;">Pro KW deine Ist-Stunden — gruen = ueber Soll, rot = unter.</p>
      <div class="chart-wrap"><canvas id="c-wochen"></canvas></div>
    </div>

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 12px; align-items: center;">
        <div>
          <h2 style="margin: 0;">Start-/Endzeiten über Zeit</h2>
          <p class="hint" style="margin: 4px 0 0;">Grün = ≥7h gearbeitet, Rot = weniger.</p>
        </div>
        <div class="segmented" id="startend-zeitraum">
          ${fs.map(r=>{const l=typeof r.key=="number"&&r.key>t.length;return`<button type="button" data-key="${r.key}" class="${n===r.key?"active":""}" ${l?'disabled style="opacity:0.4"':""}>${r.label}</button>`}).join("")}
        </div>
      </div>
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
        <h2>Tagesbalken (letzte 30)</h2>
        <div class="chart-wrap"><canvas id="c-alle-tage"></canvas></div>
      </div>
    </div>
  `;const s=()=>n==="alles"?t:t.slice(-n);requestAnimationFrame(()=>{un(e.querySelector("#c-saldo"),a),mn(e.querySelector("#c-wochen"),t),Re(e.querySelector("#c-startend"),s()),fn(e.querySelector("#c-wochentag"),t),hn(e.querySelector("#c-pausen"),t),pn(e.querySelector("#c-donut"),t),gn(e.querySelector("#c-alle-tage"),t.slice(-30))}),(i=e.querySelector("#startend-zeitraum"))==null||i.addEventListener("click",r=>{const l=r.target.closest("button[data-key]");if(!l||l.disabled)return;const o=l.getAttribute("data-key"),c=o==="alles"?"alles":parseInt(o,10);c!==n&&(n=c,e.querySelectorAll("#startend-zeitraum button").forEach(d=>d.classList.toggle("active",d===l)),Re(e.querySelector("#c-startend"),s()))})}async function ms({root:e}){const t=await V();if(!t.length){e.innerHTML='<h1 class="view-title">Berichtsheft</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a=[...new Set(t.map(i=>i.monatKey))].sort().reverse();e.innerHTML=`
    <h1 class="view-title">Berichtsheft-Export</h1>
    <p class="view-subtitle">Kopiere die Arbeitsstunden im HH:MM-Format direkt in dein Berichtsheft.</p>

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 16px; align-items: center;">
        <h2 style="margin: 0;">Filter</h2>
        <div style="display: flex; gap: 8px; align-items: center;">
          <label style="color: var(--fg-muted); font-size: 13px;">Monat:</label>
          <select id="filter-monat">
            <option value="">Alle</option>
            ${a.map(i=>`<option value="${i}">${ys(i)}</option>`).join("")}
          </select>
          <button class="btn sm" id="btn-copy-all">Alle sichtbaren kopieren</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div id="liste"></div>
    </div>
  `;const n=e.querySelector("#filter-monat");n.addEventListener("change",()=>s()),e.querySelector("#btn-copy-all").addEventListener("click",()=>{const i=e.querySelectorAll("#liste tr[data-copy]"),r=Array.from(i).map(l=>l.getAttribute("data-copy")).join(`
`);navigator.clipboard.writeText(r).then(()=>D(`${i.length} Zeilen kopiert.`))});function s(){const i=n.value,l=(i?t.filter(o=>o.monatKey===i):t).filter(o=>o.ist!=null&&o.ist>0&&o.tagestyp!=="Wochenende");e.querySelector("#liste").innerHTML=vs(l),e.querySelectorAll(".copy-val").forEach(o=>{o.addEventListener("click",async()=>{const c=o.getAttribute("data-val");await navigator.clipboard.writeText(c),o.classList.add("ok");const d=o.textContent;o.textContent="✓ kopiert",setTimeout(()=>{o.classList.remove("ok"),o.textContent=d},1200)})})}s()}function vs(e){return e.length?`
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
        ${e.map(t=>{const a=de(t.ist),n=`${$(S(t.datum))}	${a}`;return`
            <tr data-copy="${at(n)}">
              <td class="tabular">${$(S(t.datum))}</td>
              <td>${bs(t.wochentag)}</td>
              <td>${t.tagestyp?`<span class="pill ${ws(t.tagestyp)}">${Tt(t.tagestyp)}</span>`:"—"}</td>
              <td class="num tabular">${t.ist.toFixed(2).replace(".",",")}</td>
              <td class="num tabular" style="font-weight: 600;">${a}</td>
              <td><button class="copy-val" data-val="${at(a)}">📋 ${a}</button></td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `:'<p style="color: var(--fg-muted);">Keine Tage in dieser Auswahl.</p>'}function bs(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function ys(e){const[t,a]=e.split("-");return P(new Date(parseInt(t),parseInt(a)-1,1),"LLLL yyyy",{locale:G})}function ws(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function Tt(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function at(e){return Tt(e)}async function xs({root:e}){const[t,a,n,s]=await Promise.all([V(),C(),q(),ze()]),i=Object.fromEntries(s.map(o=>[o.key,o])),r=pe(t,a,new Date).filter(o=>o.mailVorlageKey),l=yt(n);e.innerHTML=`
    <h1 class="view-title">Mail-Vorlagen</h1>
    <p class="view-subtitle">Vorformulierte Mails an die Zeitwirtschaft bei erkannten Fehlern im Zeitnachweis.</p>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Offene Warnungen mit Mail-Vorschlag</h2>
      <p class="hint" style="margin-bottom: 16px;">Diese Warnungen haben einen roten Schweregrad und sind eine direkte Mail wert.</p>

      ${r.length===0?'<div class="empty-state"><div class="empty-state-icon">✓</div><p>Keine akuten Warnungen — top.</p></div>':r.map(o=>ks(o,a,i)).join("")}

      ${l.length>0?`
        <h3 style="margin-top: 24px;">Saldo-Plausibilität</h3>
        ${l.map(o=>`
          <div class="alert severity-warn">
            <div class="alert-icon">⚠</div>
            <div class="alert-body">
              <div class="alert-title">${L(o.titel)}</div>
              <p style="margin: 4px 0; font-size: 13px;">${L(o.beschreibung)}</p>
            </div>
          </div>
        `).join("")}
      `:""}
    </div>

    <div class="card">
      <h2>Vorlagen verwalten</h2>
      <p class="hint" style="margin-bottom: 16px;">Passe die Texte an deinen Stil an. Platzhalter wie <code>{name}</code>, <code>{datum}</code>, <code>{wochentag}</code>, <code>{ist}</code>, <code>{soll}</code> werden automatisch gefüllt.</p>

      <div id="vorlagen-editor">
        ${Object.keys(ne).map(o=>{const c=me(o,i[o]);return $s(c)}).join("")}
      </div>
    </div>
  `,Ss(e),Ms(e)}function ks(e,t,a){const n=me(e.mailVorlageKey,a[e.mailVorlageKey]);if(!n)return"";const s=xt(t,e),i=wt(n,s),r=kt(t,n,s);return`
    <div class="alert severity-${e.schweregrad}" style="flex-direction: column; align-items: stretch;">
      <div style="display: flex; align-items: flex-start; gap: 12px;">
        <div class="alert-icon">${e.schweregrad==="error"?"!":"⚠"}</div>
        <div class="alert-body">
          <div class="alert-title">${L(e.titel)}</div>
          <p style="margin: 4px 0; font-size: 13px;">${L(e.beschreibung)}</p>
        </div>
      </div>
      <details style="margin-top: 12px;">
        <summary style="cursor: pointer; color: var(--fg-muted); font-size: 13px;">Mail-Vorschau anzeigen</summary>
        <div style="background: var(--surface-2); border-radius: var(--radius-md); padding: 12px; margin-top: 8px; font-family: var(--font-mono); font-size: 12px; white-space: pre-wrap; line-height: 1.5;">
<strong>An:</strong> ${L(t.zeitwirtschaftEmail||"")}
<strong>Betreff:</strong> ${L(i.betreff)}

${L(i.text)}
        </div>
      </details>
      <div class="alert-actions" style="margin-top: 12px;">
        <a class="btn primary sm" href="${r}" target="_blank" rel="noopener">Mail Vorschlag in Outlook →</a>
        <button class="btn sm btn-copy-mail" data-subject="${Me(i.betreff)}" data-body="${Me(i.text)}">📋 Betreff + Text kopieren</button>
      </div>
    </div>
  `}function $s(e){return`
    <div class="vorlagen-item" data-key="${e.key}" style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
      <div class="card-split" style="margin-bottom: 12px;">
        <div>
          <h3 style="text-transform: none; letter-spacing: 0; color: var(--fg); font-size: 16px;">${L(e.titel)}</h3>
          <p class="hint" style="margin: 4px 0;">${L(e.beschreibung)}</p>
        </div>
        <button class="btn sm btn-reset-vorlage" data-key="${e.key}">Auf Default zurücksetzen</button>
      </div>
      <div class="form-group">
        <label>Betreff</label>
        <input type="text" class="v-betreff" value="${Me(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 240px;">${L(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function Ss(e){e.querySelectorAll(".btn-save-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-key"),n=t.closest(".vorlagen-item"),s=n.querySelector(".v-betreff").value,i=n.querySelector(".v-text").value;await ce(a,{betreff:s,text:i}),D("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-key"),n=ne[a];n&&confirm(`Vorlage "${n.titel}" auf Default zurücksetzen?`)&&(await ce(a,{betreff:n.betreff,text:n.text}),D("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function Ms(e){e.querySelectorAll(".btn-copy-mail").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-subject"),n=t.getAttribute("data-body"),s=`Betreff: ${a}

${n}`;await navigator.clipboard.writeText(s),D("Mail-Text kopiert.")})})}function L(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Me(e){return L(e)}async function zs({root:e}){const[t,a]=await Promise.all([C(),ze()]),n=Object.fromEntries(a.map(s=>[s.key,s]));e.innerHTML=`
    <h1 class="view-title">Einstellungen</h1>
    <p class="view-subtitle">App-weite Präferenzen.</p>

    <div class="grid cols-2">
      <div class="card">
        <h2>Pausen-Regel-Override</h2>
        <div class="form-group">
          <label>Welches Gesetz soll für Pausen-Checks gelten?</label>
          <select id="pause-sel">
            <option value="auto" ${t.pausenRegel==="auto"?"selected":""}>Automatisch (aus Alter im Profil)</option>
            <option value="arbzg" ${t.pausenRegel==="arbzg"?"selected":""}>ArbZG (≥18 Jahre)</option>
            <option value="jarbschg" ${t.pausenRegel==="jarbschg"?"selected":""}>JArbSchG (&lt;18 Jahre)</option>
          </select>
          <p class="hint">Bei "Automatisch" wechselt die App am 18. Geburtstag automatisch von JArbSchG auf ArbZG.</p>
        </div>
      </div>

      <div class="card" style="grid-column: 1 / -1;">
        <h2>Mail-Vorlagen</h2>
        <p class="hint" style="margin-bottom: 16px;">Texte für die "✉ Mail schreiben"-Buttons im Dashboard. Platzhalter wie <code>{datum}</code>, <code>{wochentag}</code>, <code>{ist}</code>, <code>{soll}</code> werden automatisch gefüllt.</p>
        <div id="vorlagen-editor">
          ${Object.keys(ne).map(s=>{const i=me(s,n[s]);return Ds(i)}).join("")}
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
  `,e.querySelector("#pause-sel").addEventListener("change",async s=>{const i={...t,pausenRegel:s.target.value};await oe(i),D("Pausen-Regel gespeichert.")}),e.querySelectorAll(".btn-save-vorlage").forEach(s=>{s.addEventListener("click",async()=>{const i=s.getAttribute("data-key"),r=s.closest(".vorlagen-item"),l=r.querySelector(".v-betreff").value,o=r.querySelector(".v-text").value;await ce(i,{betreff:l,text:o}),D("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(s=>{s.addEventListener("click",async()=>{const i=s.getAttribute("data-key"),r=ne[i];r&&confirm(`Vorlage "${r.titel}" auf Default zurücksetzen?`)&&(await ce(i,{betreff:r.betreff,text:r.text}),D("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function Ds(e){return`
    <div class="vorlagen-item" data-key="${e.key}" style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
      <div class="card-split" style="margin-bottom: 12px;">
        <div>
          <h3 style="text-transform: none; letter-spacing: 0; color: var(--fg); font-size: 16px;">${le(e.titel)}</h3>
          <p class="hint" style="margin: 4px 0;">${le(e.beschreibung)}</p>
        </div>
        <button class="btn sm btn-reset-vorlage" data-key="${e.key}">Auf Default zurücksetzen</button>
      </div>
      <div class="form-group">
        <label>Betreff</label>
        <input type="text" class="v-betreff" value="${Ps(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 200px;">${le(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function le(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ps(e){return le(e)}async function nt(){aa();const e=document.getElementById("content");await ga()&&setTimeout(()=>{Ee('Parser wurde aktualisiert. Bitte lade deinen Zeitnachweis unter "Daten" neu hoch.',{type:"info",duration:12e3})},500),await ua(),await da(),A("/",Ze),A("/dashboard",Ze),A("/analytics",ps),A("/monat",ns),A("/monat/:yyyymm",ss),A("/woche",cs),A("/woche/:yyyykw",ds),A("/tag/:datum",gs),A("/berichtsheft",ms),A("/mails",xs),A("/profil",as),A("/daten",Jn),A("/einstellungen",zs),sa(e),location.hash||na("/");try{const t=await m.tage.count();Hn(t>0)&&setTimeout(()=>zt(),700)}catch(t){console.warn("[boot] Tour-Auto-Start-Check fehlgeschlagen:",t)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",nt):nt();
