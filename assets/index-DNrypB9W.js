const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/exceljs.min-BhfpbegZ.js","assets/dexie-UpTFNL8S.js"])))=>i.map(i=>d[i]);
import{D as la}from"./dexie-UpTFNL8S.js";import{b as je,a as fe,c as me,d as oa,f as P,s as ca,e as da,g as Qe,i as et,p as ua,h as ga,j as ha,k as fa,l as L,m as ma}from"./datefns-VEit7B1-.js";import{C as G,L as pa,B as va,D as ba,S as ya,a as wa,b as xa,P as ka,A as $a,c as Sa,d as Ma,T as za,p as Da,e as Aa,i as Ta}from"./chartjs-CRgZvhTJ.js";import{_ as Pa,a as Ea}from"./pdfjs-BDGsuRSB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();function La(){document.documentElement.setAttribute("data-theme","dark")}const Tt=[];function W(e,t){const a=e.split("/").filter(Boolean),n=[],s=new RegExp("^/?"+a.map(i=>i.startsWith(":")?(n.push(i.slice(1)),"([^/]+)"):Ca(i)).join("/")+"/?$");Tt.push({pattern:e,regex:s,paramNames:n,render:t})}function Fa(e){e.startsWith("#")||(e="#"+e),window.location.hash===e?U():window.location.hash=e}function Ka(e,{onNavigate:t}={}){window.addEventListener("hashchange",U),U.rootEl=e,U.onNavigate=t,U()}async function U(){var n;const e=U.rootEl,t=window.location.hash.slice(1)||"/",a=t.startsWith("/")?t:`/${t}`;for(const s of Tt){const i=s.regex.exec(a);if(i){const l={};s.paramNames.forEach((c,r)=>l[c]=decodeURIComponent(i[r+1])),(n=U.onNavigate)==null||n.call(U,a),Wa(a);try{e.classList.remove("view-enter"),await s.render({params:l,path:a,root:e}),e.classList.add("view-enter")}catch(c){console.error("Route render error:",c),e.innerHTML=`<div class="empty-state">
          <div class="empty-state-icon">⚠</div>
          <h2>Fehler beim Anzeigen</h2>
          <p>${ot(c.message||String(c))}</p>
        </div>`}return}}e.innerHTML=`<div class="empty-state">
    <div class="empty-state-icon">?</div>
    <h2>Seite nicht gefunden</h2>
    <p>Die Route <code>${ot(a)}</code> existiert nicht.</p>
    <a href="#/" class="btn primary">Zum Dashboard</a>
  </div>`}function Wa(e){document.querySelectorAll("[data-route]").forEach(a=>{const n=a.getAttribute("data-route"),s=n==="/"?e==="/":e===n||e.startsWith(n+"/");a.classList.toggle("active",s)});const t=e==="/"?"dashboard":e.split("/").filter(Boolean)[0];document.body.setAttribute("data-view",t||"dashboard")}function Ca(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ot(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const Ba="modulepreload",Va=function(e){return"/better-ess/"+e},ct={},tt=function(t,a,n){let s=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=Promise.allSettled(a.map(r=>{if(r=Va(r),r in ct)return;ct[r]=!0;const o=r.endsWith(".css"),d=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${d}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Ba,o||(u.as="script"),u.crossOrigin="",u.href=r,c&&u.setAttribute("nonce",c),document.head.appendChild(u),o)return new Promise((g,h)=>{u.addEventListener("load",g),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})}))}function i(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return s.then(l=>{for(const c of l||[])c.status==="rejected"&&i(c.reason);return t().catch(i)})},v=new la("zeitnachweis");v.version(1).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"});v.version(2).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});v.version(3).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});v.version(4).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});v.version(5).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{const t=await e.table("profil").get("self");t&&(!t.zeitwirtschaftEmail||t.zeitwirtschaftEmail==="zeitwirtschaft@putzmeister.com")&&await e.table("profil").put({...t,zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com"})});v.version(6).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});v.version(7).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key",fahrtgeldTemplate:"id"}).upgrade(async e=>{const t=await e.table("profil").get("self");if(!t)return;let a=t.ueber18??!0;if(t.geburtsdatum){const s=new Date(t.geburtsdatum),i=new Date;a=i.getFullYear()-s.getFullYear()-(i<new Date(i.getFullYear(),s.getMonth(),s.getDate())?1:0)>=18}const n={id:"self",ueber18:a,sollStundenProWoche:t.sollStundenProWoche??35,sollStundenProTag:t.sollStundenProTag??7,berufsschulMuster:t.berufsschulMuster??{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null},zeitwirtschaftEmail:t.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:t.zeitwirtschaftAnrede||"Frau Kanarya",pausenRegel:t.pausenRegel??"auto",erstelltAm:t.erstelltAm??new Date().toISOString(),updatedAt:new Date().toISOString()};await e.table("profil").put(n)});async function _a(){try{const{erkenneBerufsschulMuster:e}=await tt(async()=>{const{erkenneBerufsschulMuster:l}=await Promise.resolve().then(()=>Ln);return{erkenneBerufsschulMuster:l}},void 0),t=await v.tage.toArray();if(!t.length)return!1;const a=e(t),n=await v.profil.get("self");if(!n)return!1;const s=n.berufsschulMuster??{};return JSON.stringify(s.wochentageWoechentlich??[])!==JSON.stringify(a.wochentageWoechentlich)||JSON.stringify(s.wochentage14Taegig??[])!==JSON.stringify(a.wochentage14Taegig)||(s.referenzDatum14Taegig??null)!==(a.referenzDatum14Taegig??null)||(s.stundenProTag??null)!==(a.stundenProTag??null)||(s.halbtags??!1)!==(a.halbtags??!1)?(await v.profil.put({...n,berufsschulMuster:a}),!0):!1}catch(e){return console.warn("[db] refreshBerufsschulMuster fehlgeschlagen:",e),!1}}async function Ia(){try{const e=await v.mailVorlagen.toArray(),t=e.some(n=>n.betreff&&!n.betreff.startsWith("Bitte um Zeitkorrektur im ESS")),a=e.some(n=>n.text&&!/Vielen Dank!\s*$/.test(n.text));return t||a?(await v.mailVorlagen.clear(),!0):!1}catch(e){return console.warn("[db] ensureMailVorlagenFresh fehlgeschlagen:",e),!1}}async function Oa(){const e=await v.einstellungen.get("__migration_reset");return(e==null?void 0:e.value)===!0?(await v.einstellungen.delete("__migration_reset"),!0):!1}async function H(){return await v.profil.get("self")??Pt()}async function Pe(e){const t={...e,id:"self",updatedAt:new Date().toISOString()};return await v.profil.put(t),t}function Pt(){return{id:"self",ueber18:!0,sollStundenProWoche:35,sollStundenProTag:7,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1},zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:"Frau Kanarya",pausenRegel:"auto",erstelltAm:new Date().toISOString()}}async function Ha(e,t=null){const a=await v.einstellungen.get(e);return a?a.value:t}async function ja(e,t){await v.einstellungen.put({key:e,value:t})}async function _(){return await v.tage.orderBy("datum").toArray()}async function Na(e,t,a){const n=a instanceof Date?a.toISOString():typeof a=="string"&&a?a:null,s=(o,d)=>d?o?o>d:!1:!0;let i=0,l=0,c=0,r=0;if(e.length){const o=e.map(g=>g.datum),d=await v.tage.bulkGet(o),u=[];for(let g=0;g<e.length;g++){const h={...e[g],_quellStichtag:n},f=d[g];!f||s(n,f._quellStichtag)?u.push(h):l++}u.length&&(await v.tage.bulkPut(u),i=u.length)}if(t.length){const o=t.map(g=>g.monatKey),d=await v.monate.bulkGet(o),u=[];for(let g=0;g<t.length;g++){const h={...t[g],_quellStichtag:n},f=d[g];!f||s(n,f._quellStichtag)?u.push(h):r++}u.length&&(await v.monate.bulkPut(u),c=u.length)}return{tage:i,monate:c,skippedTage:l,skippedMonate:r}}async function ie(){return await v.monate.orderBy("monatKey").toArray()}async function Ra(e){return await v.uploads.add({...e,hochladeDatum:new Date().toISOString()})}async function ce(){return await v.uploads.orderBy("hochladeDatum").last()}async function Et(){return await v.uploads.orderBy("hochladeDatum").reverse().toArray()}async function we(){return await v.fahrtgeldTemplate.get("self")}async function at(e){await v.fahrtgeldTemplate.put({id:"self",...e})}async function qa(){await v.fahrtgeldTemplate.delete("self")}async function Za(){await Promise.all([v.profil.clear(),v.tage.clear(),v.monate.clear(),v.uploads.clear(),v.einstellungen.clear(),v.mailVorlagen.clear(),v.warnungDismissals.clear(),v.fahrtgeldTemplate.clear()])}async function Lt(){await Promise.all([v.tage.clear(),v.monate.clear(),v.uploads.clear(),v.warnungDismissals.clear()])}async function Ga(){const[e,t,a,n,s,i,l]=await Promise.all([v.profil.toArray(),v.tage.toArray(),v.monate.toArray(),v.uploads.toArray(),v.einstellungen.toArray(),v.mailVorlagen.toArray(),v.warnungDismissals.toArray()]);return{version:1,exportedAt:new Date().toISOString(),data:{profil:e,tage:t,monate:a,uploads:n,einstellungen:s,mailVorlagen:i,warnungDismissals:l}}}async function Ua(e){if(!e||e.version!==1||!e.data)throw new Error("Ungültiges oder inkompatibles Backup-Format.");const t=e.data;await v.transaction("rw",v.profil,v.tage,v.monate,v.uploads,v.einstellungen,v.mailVorlagen,v.warnungDismissals,async()=>{var a,n,s,i,l,c,r;(a=t.profil)!=null&&a.length&&await v.profil.bulkPut(t.profil),(n=t.tage)!=null&&n.length&&await v.tage.bulkPut(t.tage),(s=t.monate)!=null&&s.length&&await v.monate.bulkPut(t.monate),(i=t.uploads)!=null&&i.length&&await v.uploads.bulkPut(t.uploads),(l=t.einstellungen)!=null&&l.length&&await v.einstellungen.bulkPut(t.einstellungen),(c=t.mailVorlagen)!=null&&c.length&&await v.mailVorlagen.bulkPut(t.mailVorlagen),(r=t.warnungDismissals)!=null&&r.length&&await v.warnungDismissals.bulkPut(t.warnungDismissals)})}async function Ee(e,t){await v.mailVorlagen.put({key:e,...t})}async function nt(){return await v.mailVorlagen.toArray()}async function Ja(e,t){await v.warnungDismissals.put({key:`${e}-${t}`,datum:e,typ:t,dismissedAt:new Date().toISOString()})}async function Ya(){return await v.warnungDismissals.toArray()}function Ft(e){if(e==null)return null;if(typeof e=="number")return e;let t=String(e).trim();if(!t)return null;let a=!1;t.endsWith("-")&&(a=!0,t=t.slice(0,-1).trim()),t=t.replace(",",".");const n=parseFloat(t);return isNaN(n)?null:a?-n:n}function Le(e){if(e==null||isNaN(e))return"—";const t=e<0,a=Math.abs(e),n=Math.floor(a),s=Math.round((a-n)*60);let i=n,l=s;return l===60&&(i+=1,l=0),`${t?"-":""}${i}:${String(l).padStart(2,"0")}`}function B(e,t={}){if(e==null||isNaN(e))return"—";const{signed:a=!1,suffix:n="h"}=t,s=a&&e>0?"+":"",i=e.toFixed(2).replace(".",",");return`${s}${i}${n}`}function q(e){if(!e)return null;const t=/^(\d{1,2}):(\d{2})$/.exec(String(e).trim());return t?parseInt(t[1],10)*60+parseInt(t[2],10):null}function Kt(e){if(!(e!=null&&e.length))return null;const t=e.filter(s=>s.von&&s.bis);if(!t.length)return null;let a=t[0].von,n=t[0].bis;for(const s of t)q(s.von)<q(a)&&(a=s.von),q(s.bis)>q(n)&&(n=s.bis);return{kommen:a,gehen:n}}function Xa(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
    <polyline points="10 17 15 12 10 7"/>
    <line x1="15" y1="12" x2="3" y2="12"/>
  </svg>`}function Qa(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>`}function Wt(e,t={}){const{size:a=20,layout:n="inline"}=t;return e?`
    <div class="kommen-gehen ${n}">
      <span class="kg-block kommen" title="Kommen (frühester Einstempel)">
        ${Xa(a)}
        <span class="kg-zeit tabular">${e.kommen}</span>
      </span>
      <span class="kg-block gehen" title="Gehen (spätester Ausstempel)">
        ${Qa(a)}
        <span class="kg-zeit tabular">${e.gehen}</span>
      </span>
    </div>
  `:'<span class="kg-empty">—</span>'}const dt={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},en=(e,t,a)=>{let n;const s=a!=null&&a.addSuffix?dt[e].withPreposition:dt[e].standalone;return typeof s=="string"?n=s:t===1?n=s.one:n=s.other.replace("{{count}}",String(t)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:"vor "+n:n},tn={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},an={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},nn={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},sn={date:je({formats:tn,defaultWidth:"full"}),time:je({formats:an,defaultWidth:"full"}),dateTime:je({formats:nn,defaultWidth:"full"})},rn={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},ln=(e,t,a,n)=>rn[e],on={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},cn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},Ze={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},dn={narrow:Ze.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:Ze.wide},un={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},gn={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},hn={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},fn=e=>Number(e)+".",mn={ordinalNumber:fn,era:fe({values:on,defaultWidth:"wide"}),quarter:fe({values:cn,defaultWidth:"wide",argumentCallback:e=>e-1}),month:fe({values:Ze,formattingValues:dn,defaultWidth:"wide"}),day:fe({values:un,defaultWidth:"wide"}),dayPeriod:fe({values:gn,defaultWidth:"wide",formattingValues:hn,defaultFormattingWidth:"wide"})},pn=/^(\d+)(\.)?/i,vn=/\d+/i,bn={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},yn={any:[/^v/i,/^n/i]},wn={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},xn={any:[/1/i,/2/i,/3/i,/4/i]},kn={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},$n={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Sn={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},Mn={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},zn={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},Dn={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},An={ordinalNumber:oa({matchPattern:pn,parsePattern:vn,valueCallback:e=>parseInt(e)}),era:me({matchPatterns:bn,defaultMatchWidth:"wide",parsePatterns:yn,defaultParseWidth:"any"}),quarter:me({matchPatterns:wn,defaultMatchWidth:"wide",parsePatterns:xn,defaultParseWidth:"any",valueCallback:e=>e+1}),month:me({matchPatterns:kn,defaultMatchWidth:"wide",parsePatterns:$n,defaultParseWidth:"any"}),day:me({matchPatterns:Sn,defaultMatchWidth:"wide",parsePatterns:Mn,defaultParseWidth:"any"}),dayPeriod:me({matchPatterns:zn,defaultMatchWidth:"wide",parsePatterns:Dn,defaultParseWidth:"any"})},j={code:"de",formatDistance:en,formatLong:sn,formatRelative:ln,localize:mn,match:An,options:{weekStartsOn:1,firstWeekContainsDate:4}};function ye(e){if(!e)return null;const t=e.trim();return ua(t,"dd.MM.yyyy",new Date)}function K(e){return P(e,"dd.MM.yyyy")}function Ct(e){return P(e,"EE, dd.MM.yyyy",{locale:j})}function $e(e){const t=ca(e,{weekStartsOn:1}),a=da(e,{weekStartsOn:1});return`${P(t,"dd.MM.")} – ${P(a,"dd.MM.yyyy")}`}function Tn(e){return`${ga(e)}-${String(ha(e)).padStart(2,"0")}`}function Bt(e){return P(e,"yyyy-MM")}function Pn(e){return P(e,"yyyy-MM-dd")}function En(e,t){if(!e||!t)return 0;e>t&&([e,t]=[t,e]);let a=0,n=new Date(e);for(;n<t;)n=Qe(n,1),et(n)||a++;return a}function w(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Vt(e){var d;const t=e.filter(u=>u.tagestyp==="Berufsschule");if(t.length<2)return{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1};const a={};for(const u of t)a[d=u.wochentag]??(a[d]=[]),a[u.wochentag].push(u);const n=[],s=[];let i=null;for(const[u,g]of Object.entries(a)){if(g.sort((m,b)=>m.datum.localeCompare(b.datum)),g.length<2)continue;const h=[];for(let m=1;m<g.length;m++)h.push(fa(L(g[m].datum),L(g[m-1].datum)));const f=ut(h);f<=10?n.push(u):f<=18&&(s.push(u),(!i||L(g[0].datum)<L(i))&&(i=g[0].datum))}const l=t.map(u=>u.ist).filter(u=>u!=null&&u>0),c=ut(l),r=c!=null?Math.round(c*4)/4:null,o=r!=null&&r<5;return{wochentageWoechentlich:n,wochentage14Taegig:s,referenzDatum14Taegig:i,stundenProTag:r,halbtags:o}}function ut(e){if(!e.length)return null;const t=e.slice().sort((n,s)=>n-s),a=Math.floor(t.length/2);return t.length%2?t[a]:(t[a-1]+t[a])/2}function We(e,t){var s,i;if(!t)return!1;const n=["SO","MO","DI","MI","DO","FR","SA"][e.getDay()];if((s=t.wochentageWoechentlich)!=null&&s.includes(n))return!0;if((i=t.wochentage14Taegig)!=null&&i.includes(n)&&t.referenzDatum14Taegig){const l=L(t.referenzDatum14Taegig),c=ma(e,l,{weekStartsOn:1});if(c>=0&&c%2===0)return!0}return!1}function _t(e,t=null){return(e==null?void 0:e.halbtags)===!0&&(e==null?void 0:e.stundenProTag)!=null&&e.stundenProTag>0?e.stundenProTag:t}const Ln=Object.freeze(Object.defineProperty({__proto__:null,erkenneBerufsschulMuster:Vt,erwarteteBerufsschulStunden:_t,istBerufsschulTagLautMuster:We},Symbol.toStringTag,{value:"Module"}));function Fn(e){return e?"arbzg":"jarbschg"}function Kn(e,t){return e==null?0:t==="jarbschg"?e>6?1:e>4.5?.5:0:e>9?.75:e>6?.5:0}function It(e){if(!e||e.length<2)return 0;const t=e.filter(n=>n.von&&n.bis).map(n=>({von:q(n.von),bis:q(n.bis)})).filter(n=>n.von!=null&&n.bis!=null).sort((n,s)=>n.von-s.von);let a=0;for(let n=1;n<t.length;n++){const s=t[n].von-t[n-1].bis;(s>0&&s>=15||s>0)&&(a+=s)}return a/60}function Ot(e,t){const a=e.zeitSpannen??[];if(!a.length||a.every(f=>!f.von))return{keinAnspruch:!0};const n=It(a),s=e.pause??0,i=Wn(a),l=i-s,c=t.pausenRegel&&t.pausenRegel!=="auto"?t.pausenRegel==="jarbschg"?"jarbschg":"arbzg":Fn(!!t.ueber18),r=Kn(l,c),o=Math.max(n,r),d=s-o,u=Math.max(0,r-n);let g="ok",h=null;if(d>.05)g="fehler_zeitwirtschaft",h=`${Math.round(d*60)} min Pause wurden zusätzlich zur gesetzlichen Pflicht und zur gestempelten Pause abgezogen. Das sieht nach einem Zeitwirtschafts-Fehler aus.`;else if(u>.05&&s>n+.02){g="aufstockung_legal";const f=Math.round(u*60);h=`Du hast ${Math.round(n*60)} min Pause gestempelt, aber bei ${l.toFixed(2).replace(".",",")}h Arbeitszeit schreibt das Gesetz (${c.toUpperCase()}) ${Math.round(r*60)} min vor. Die fehlenden ${f} min wurden automatisch als Pause gewertet. Das ist gesetzeskonform — nächstes Mal einfach länger Pause machen.`}return{arbeitszeitMitPause:i,arbeitszeitOhnePause:l,gestempeltePause:n,abgezogenePause:s,gesetzlichePflicht:r,gesetz:c,legalerAbzug:o,unrechtmaessigerVerlustMin:Math.round(Math.max(0,d)*60),aufstockungMin:Math.round(Math.max(0,u)*60),typ:g,warnung:h}}function Wn(e){let t=0;for(const a of e){if(!a.von||!a.bis)continue;const n=q(a.von),s=q(a.bis);n!=null&&s!=null&&s>n&&(t+=s-n)}return t/60}const pe={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function Se(e,t,a,n=new Set){var d,u;const s=[],i=a??new Date,l=new Map(e.map(g=>[g.datum,g]));if(!e.length)return s;const c=L(e[0].datum),r=i;for(let g=new Date(c);g<=r;g=Qe(g,1)){if(et(g))continue;const h=P(g,"yyyy-MM-dd"),f=l.get(h),m=En(g,r);if(!f||!f.tagestyp&&!f.ist&&(((d=f.zeitSpannen)==null?void 0:d.length)??0)===0){if(We(g,t.berufsschulMuster)){const p=m>=4?"error":m>=2?"warn":"info";ve(s,n,{datum:h,wochentag:(f==null?void 0:f.wochentag)??ze(g),typ:"bs_tag_fehlt",schweregrad:p,titel:`Berufsschultag nicht eingetragen: ${K(g)}`,beschreibung:`Laut deinem Profil hast du am ${pe[ze(g)]}, ${K(g)} Berufsschule. Im Zeitnachweis fehlt der Tag bisher${m>=4?" — bitte bei der Zeitwirtschaft nachhaken":""}.`,alter:m,mailVorlageKey:p==="error"?"bs_tag_fehlt":null})}else{const p=m>=4?"error":m>=2?"warn":"info";ve(s,n,{datum:h,wochentag:ze(g),typ:"stempelzeit_fehlt",schweregrad:p,titel:`Keine Stempelzeit am ${K(g)}`,beschreibung:`Am ${pe[ze(g)]}, ${K(g)} wurde keine Stempelzeit erfasst. Falls du an diesem Tag im Haus warst, sollte die Zeitwirtschaft das nachtragen${m>=4?" — es ist inzwischen ≥4 Werktage her":""}.`,alter:m,mailVorlageKey:p==="error"?"stempelzeit_fehlt":null})}continue}if(f.tagestyp==="Berufsschule"&&f.ist!=null){const p=_t(t.berufsschulMuster,f.soll);p!=null&&f.ist<p-.5&&ve(s,n,{datum:h,wochentag:f.wochentag,typ:"bs_stunden_falsch",schweregrad:"error",titel:`Berufsschultag mit zu wenig Stunden: ${K(g)}`,beschreibung:`Am ${pe[f.wochentag]}, ${K(g)} sind nur ${f.ist.toFixed(2).replace(".",",")}h gebucht statt der für dich üblichen ${p.toFixed(2).replace(".",",")}h. Die Zeitwirtschaft hat den Berufsschultag möglicherweise nur halb erfasst.`,ist:f.ist,soll:p,mailVorlageKey:"bs_stunden_falsch"})}if(f.tagestyp==="Stempelzeit"&&((u=f.zeitSpannen)==null?void 0:u.length)>1&&h>="2026-04-01"){const p=Ot(f,t);(p==null?void 0:p.typ)==="fehler_zeitwirtschaft"&&p.unrechtmaessigerVerlustMin>=5?ve(s,n,{datum:h,wochentag:f.wochentag,typ:"pausen_abzug",schweregrad:p.unrechtmaessigerVerlustMin>=15?"error":"warn",titel:`Pausen-Abzug fehlerhaft (${K(g)})`,beschreibung:`Am ${pe[f.wochentag]}, ${K(g)} wurden ${Math.round(p.abgezogenePause*60)} min Pause abgezogen. Gestempelt: ${Math.round(p.gestempeltePause*60)} min, gesetzlich nötig (${p.gesetz.toUpperCase()}): ${Math.round(p.gesetzlichePflicht*60)} min. Differenz von ${p.unrechtmaessigerVerlustMin} min ist unerklärlich.`,verlustMinuten:p.unrechtmaessigerVerlustMin,abgezogen:p.abgezogenePause,gestempelt:p.gestempeltePause,mailVorlageKey:"pausen_abzug"}):(p==null?void 0:p.typ)==="aufstockung_legal"&&p.aufstockungMin>=10&&ve(s,n,{datum:h,wochentag:f.wochentag,typ:"pausen_aufstockung",schweregrad:"info",titel:`Zu wenig Pause gestempelt (${K(g)}) — ${p.aufstockungMin} min automatisch aufgestockt`,beschreibung:`Am ${pe[f.wochentag]}, ${K(g)} hast du nur ${Math.round(p.gestempeltePause*60)} min Pause gemacht. Gesetz (${p.gesetz.toUpperCase()}) schreibt ${Math.round(p.gesetzlichePflicht*60)} min vor. Fehlende ${p.aufstockungMin} min wurden als Pause gewertet — das ist legal, aber du verlierst dadurch Arbeitszeit. Tipp: mach beim nächsten Mal etwas länger Mittag.`})}}const o={error:0,warn:1,info:2};return s.sort((g,h)=>{const f=o[g.schweregrad]-o[h.schweregrad];return f!==0?f:h.datum.localeCompare(g.datum)}),s}function Ht(e,t=new Set){var n,s,i,l;const a=[];for(const c of e){const r=((n=c.glz)==null?void 0:n.saldoVorperiode)??0,o=((s=c.glz)==null?void 0:s.saldoAktuellePeriode)??0,d=((i=c.glz)==null?void 0:i.umgebuchteStunden)??0,u=(l=c.glz)==null?void 0:l.saldoGesamt;if(u==null)continue;const g=r+o+d,h=Math.abs(u-g);if(h>.03){const f=`${c.monatKey}-saldo_plausi`;t.has(f)||a.push({datum:`${c.monatKey}-01`,wochentag:"",typ:"saldo_plausi",schweregrad:"warn",titel:`Saldo-Differenz im Monat ${c.monatKey}`,beschreibung:`Rechnung: Vorperiode ${r.toFixed(2)} + aktuelle Periode ${o.toFixed(2)} + umgebucht ${d.toFixed(2)} = ${g.toFixed(2)}, aber dein Saldo wird mit ${u.toFixed(2)} angezeigt. Abweichung: ${h.toFixed(2)}h.`,soll:g,ist:u})}}return a}function ve(e,t,a){const n=`${a.datum}-${a.typ}`;t.has(n)||(a.id=n,e.push(a))}function ze(e){return["SO","MO","DI","MI","DO","FR","SA"][e.getDay()]}function Ce(e,t){var r,o,d;const a=[...e].sort((u,g)=>u.datum.localeCompare(g.datum));if(!a.length)return[];const n=new Map(t.map(u=>[u.monatKey,u])),s={};for(const u of a)s[r=u.monatKey]??(s[r]=[]),s[u.monatKey].push(u);const i=Object.keys(s).sort(),l=[];let c=null;for(const u of i){const g=n.get(u);let h;((o=g==null?void 0:g.glz)==null?void 0:o.saldoVorperiode)!=null?h=g.glz.saldoVorperiode:c!=null?h=c:h=0;const f=s[u];for(const m of f)m.diff!=null&&(h+=m.diff),l.push({datum:m.datum,wochentag:m.wochentag,saldo:Math.round(h*100)/100,diff:m.diff,ist:m.ist,soll:m.soll,tagestyp:m.tagestyp,monatKey:m.monatKey,wocheKey:m.wocheKey,zeitSpannen:m.zeitSpannen});if(((d=g==null?void 0:g.glz)==null?void 0:d.saldoGesamt)!=null){const m=g.glz.saldoGesamt-h;if(Math.abs(m)>.02&&l.length>0){const b=l.length-1;l[b].umbuchung=m,l[b].saldo=Math.round((l[b].saldo+m)*100)/100,h=l[b].saldo}c=g.glz.saldoGesamt}else c=h}return l}function Cn(e,t){if(!e.length)return[];if(t==="alles")return e;const a=Math.min(t,e.length);return e.slice(-a)}function Bn(e){return e.length?e[e.length-1].saldo:0}const jt=new Set(["Urlaub","Arbeitsunfähigkeit","Feiertag","Gleitzeit","Berufsschule","Dienstreise"]),Nt=7;function de(e){if(!e||e.tagestyp==="Wochenende"||e.wochentag==="SA"||e.wochentag==="SO")return 0;const t=e.ist??0,a=e.soll??0;return t>0?t:jt.has(e.tagestyp)?Math.max(a,Nt):a>0?a:t}function Me(e){if(!e||e.tagestyp==="Wochenende"||e.wochentag==="SA"||e.wochentag==="SO")return 0;const t=e.soll??0;return t>0?t:jt.has(e.tagestyp)?Nt:t}function Vn(e){if(!e.length)return 0;const t=e[0].saldo-(e[0].diff??0),a=e[e.length-1].saldo;return Math.round((a-t)*100)/100}const _n={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"},xe={bs_tag_fehlt:{key:"bs_tag_fehlt",titel:"Berufsschultag fehlt",beschreibung:"Wenn ein Berufsschultag komplett nicht im Zeitnachweis eingetragen wurde.",betreff:"Bitte um Zeitkorrektur im ESS  - Fehlender Berufsschultag {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

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

Vielen Dank!`}};function Be(e,t){const a=xe[e];return a?{...a,...t??{}}:null}function Rt(e,t){const a=gt(e.text,t);return{betreff:gt(e.betreff,t),text:a}}function gt(e,t){return e.replace(/\{(\w+)\}/g,(a,n)=>t[n]!=null?String(t[n]):`{${n}}`)}function qt(e,t){const a=t.datum?new Date(t.datum):null;return{name:"",personalnr:"",kostenstelle:"",datum:a?Ct(a).split(", ")[1]:"",wochentag:_n[t.wochentag]??t.wochentag??"",zeitwirtschaft_anrede:e.zeitwirtschaftAnrede||"Frau Kanarya",zeitwirtschaft_email:e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",ist:t.ist!=null?t.ist.toFixed(2).replace(".",","):"",soll:t.soll!=null?t.soll.toFixed(2).replace(".",","):"",abgezogen:t.abgezogen!=null?Math.round(t.abgezogen*60):"",gestempelt:t.gestempelt!=null?Math.round(t.gestempelt*60):"",verlust:t.verlustMinuten??""}}function Zt(e,t,a){const n=Rt(t,a),s=e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",i=new URLSearchParams;return i.set("subject",n.betreff),i.set("body",n.text),`mailto:${s}?${i.toString().replace(/\+/g,"%20")}`}G.register(pa,va,ba,ya,wa,xa,ka,$a,Sa,Ma,za,Da,Aa,Ta);function C(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function Q(){return{fg:C("--fg"),fgMuted:C("--fg-muted"),fgSubtle:C("--fg-subtle"),border:C("--border"),surface:C("--surface"),accent:C("--accent"),success:C("--success"),warn:C("--warn"),danger:C("--danger"),info:C("--info"),palette:[C("--chart-1"),C("--chart-2"),C("--chart-3"),C("--chart-4"),C("--chart-5"),C("--chart-6"),C("--chart-7")]}}function T(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.fgMuted,font:{size:12}}},tooltip:{backgroundColor:e.surface,titleColor:e.fg,bodyColor:e.fg,borderColor:e.border,borderWidth:1,padding:10,displayColors:!0}},scales:{x:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}},y:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}}}}}function Ve(e,t){const a=Q();if(te(e),!(t!=null&&t.length))return;const n=t.map(i=>P(L(i.datum),"dd.MM.")),s=t.map(i=>i.saldo);return s.map(i=>i>=0?a.success:a.danger),new G(e,{type:"line",data:{labels:n,datasets:[{label:"Tages-Saldo",data:s,borderColor:a.accent,backgroundColor:i=>{const l=i.chart,{ctx:c,chartArea:r,scales:o}=l;return r?Gt(c,r,o.y,a):J(a.accent,.14)},segment:{borderColor:i=>{const l=i.p0.parsed.y,c=i.p1.parsed.y,r=(l+c)/2;return r>=.02?a.success:r<=-.02?a.danger:a.fgMuted}},tension:.25,pointRadius:2,pointHoverRadius:6,pointHitRadius:20,pointBackgroundColor:s.map(i=>i>=.02?a.success:i<=-.02?a.danger:a.fgMuted),pointBorderColor:a.surface,pointBorderWidth:1,fill:!0,borderWidth:2}]},options:{...T(a),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},plugins:{...T(a).plugins,legend:{display:!1},tooltip:{enabled:!1,mode:"index",intersect:!1,axis:"x",position:"nearest",external:In(t)}},scales:{...T(a).scales,y:{...T(a).scales.y,ticks:{...T(a).scales.y.ticks,callback:i=>`${i>=0?"+":""}${i.toFixed(1).replace(".",",")}h`}}}}})}function ee(e){return function(t){var m,b;const{chart:a,tooltip:n}=t;let s=a.$richTooltipEl;if(!s){s=document.createElement("div"),s.className="saldo-tooltip",document.body.appendChild(s),a.$richTooltipEl=s;const p=a.destroy.bind(a);a.destroy=function(){s.parentNode&&s.parentNode.removeChild(s),p()}}if(n.opacity===0||!((m=n.dataPoints)!=null&&m.length)){s.style.opacity="0";return}const i=e({tooltip:n,chart:a});if(!i){s.style.opacity="0";return}let l=`<div class="saldo-tooltip-title">${Ge(i.title)}</div>`;for(const p of i.rows||[]){const $=p.klasse||"flat";l+=`<div class="saldo-tooltip-row"><span class="saldo-tooltip-label">${Ge(p.label)}</span><span class="saldo-tooltip-value ${$}">${p.value}</span></div>`}(b=i.meta)!=null&&b.length&&(l+=`<div class="saldo-tooltip-meta">${i.meta.map(p=>`<span>${p}</span>`).join("")}</div>`),s.innerHTML=l;const c=a.canvas.getBoundingClientRect(),r=c.left+n.caretX,o=c.top+n.caretY;s.style.opacity="0",s.style.left="0px",s.style.top="0px";const d=s.offsetWidth,u=s.offsetHeight,g=18;let h=r+g;h+d>window.innerWidth-8&&(h=r-g-d);let f=o-u/2;f<8&&(f=8),f+u>window.innerHeight-8&&(f=window.innerHeight-u-8),s.style.left=h+"px",s.style.top=f+"px",s.style.opacity="1"}}function X(e){return e==null?"flat":e>.05?"pos":e<-.05?"neg":"flat"}function ne(e){return e==null?"—":(e>0?"+":"")+e.toFixed(2).replace(".",",")+"h"}function se(e){return e==null?"—":e.toFixed(2).replace(".",",")+"h"}function In(e){return ee(({tooltip:t})=>{const a=t.dataPoints[0].dataIndex,n=e[a];if(!n)return null;const s=[{label:"Saldo",value:ne(n.saldo),klasse:X(n.saldo)}];n.diff!=null&&s.push({label:"Tages-Diff",value:ne(n.diff),klasse:X(n.diff)});const i=[];return n.tagestyp&&i.push(`Typ: ${Ge(n.tagestyp)}`),n.umbuchung&&i.push(`Umbuchung: ${n.umbuchung>=0?"+":""}${n.umbuchung.toFixed(2).replace(".",",")}h`),{title:P(L(n.datum),"EE, dd.MM.yyyy",{locale:j}),rows:s,meta:i}})}function Ge(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function On(e,t){const a=Q();if(te(e),!(t!=null&&t.length))return;const n=t.map(c=>c.monatKey),s=n.map(c=>{const[r,o]=c.split("-"),d=new Date(parseInt(r,10),parseInt(o,10)-1,1);return P(d,"MMM yyyy",{locale:j})}),i=t.map(c=>{var r;return((r=c.glz)==null?void 0:r.saldoGesamt)??0}),l=t.map(c=>{var r;return((r=c.glz)==null?void 0:r.saldoVorperiode)??null});return new G(e,{type:"line",data:{labels:s,datasets:[{label:"GLZ-Saldo (Monatsende)",data:i,borderColor:a.accent,backgroundColor:c=>{const r=c.chart,{ctx:o,chartArea:d,scales:u}=r;return d?Gt(o,d,u.y,a):J(a.accent,.14)},segment:{borderColor:c=>{const r=c.p0.parsed.y,o=c.p1.parsed.y,d=(r+o)/2;return d>=.05?a.success:d<=-.05?a.danger:a.fgMuted}},pointBackgroundColor:i.map(c=>c>=.05?a.success:c<=-.05?a.danger:a.fgMuted),pointBorderColor:a.surface,pointBorderWidth:1,tension:.35,fill:!0,pointRadius:4,pointHoverRadius:7,pointHitRadius:20}]},options:{...T(a),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},onHover:(c,r,o)=>{const d=o.getElementsAtEventForMode(c,"index",{intersect:!1},!1);o.canvas.style.cursor=d.length>0?"pointer":"default"},onClick:(c,r,o)=>{const d=o.getElementsAtEventForMode(c,"index",{intersect:!1},!1);if(d.length>0){const u=d[0].index,g=n[u];g&&(window.location.hash=`#/monat/${g}`)}},plugins:{...T(a).plugins,legend:{display:!1},tooltip:{enabled:!1,external:ee(({tooltip:c})=>{const r=c.dataPoints[0].dataIndex,o=i[r],d=l[r],u=[{label:"Saldo Monatsende",value:ne(o),klasse:X(o)}];if(d!=null){const g=+(o-d).toFixed(2);u.push({label:"Vorperiode",value:ne(d),klasse:X(d)}),u.push({label:"Bewegung",value:ne(g),klasse:X(g)})}return u.push({label:"",value:"→ Klick öffnet Monat",klasse:"flat"}),{title:s[r],rows:u}})}}}})}function Hn(e,t){const a=Q();if(te(e),!(t!=null&&t.length))return;const n=t.map(l=>P(L(l.datum),"dd.MM.")),s=t.map(l=>l.ist??0),i=t.map(l=>Zn(l.tagestyp,a));return new G(e,{type:"bar",data:{labels:n,datasets:[{label:"Ist-Stunden",data:s,backgroundColor:i,borderRadius:4,borderSkipped:!1,maxBarThickness:32,categoryPercentage:.85,barPercentage:.9}]},options:{...T(a),plugins:{...T(a).plugins,legend:{display:!1},tooltip:{enabled:!1,external:ee(({tooltip:l})=>{const c=l.dataPoints[0].dataIndex,r=t[c],o=[{label:"Ist",value:se(r.ist),klasse:"flat"}];r.soll!=null&&o.push({label:"Soll",value:se(r.soll),klasse:"flat"}),r.diff!=null&&o.push({label:"Diff",value:ne(r.diff),klasse:X(r.diff)});const d=r.tagestyp?[`Typ: ${r.tagestyp}`]:[];return{title:P(L(r.datum),"EE, dd.MM.yyyy",{locale:j}),rows:o,meta:d}})}},scales:{...T(a).scales,y:{...T(a).scales.y,suggestedMin:0,suggestedMax:10}}}})}function ht(e,t){const a=Q();if(te(e),!(t!=null&&t.length))return;const n=t.filter(o=>{var d;return((d=o.zeitSpannen)==null?void 0:d.length)&&o.zeitSpannen.some(u=>u.von&&u.bis)}).map(o=>{const d=o.zeitSpannen.filter(h=>h.von&&h.bis).map(h=>({von:q(h.von),bis:q(h.bis),vonStr:h.von,bisStr:h.bis})).filter(h=>h.von!=null&&h.bis!=null);if(d.length===0)return null;const u=Math.min(...d.map(h=>h.von)),g=Math.max(...d.map(h=>h.bis));return{...o,_spans:d,_minVon:u,_maxBis:g}}).filter(Boolean);if(!n.length)return;const s=o=>o.ist==null?a.fgMuted:o.ist>=7?a.success:a.danger,i={label:"Tages-Rahmen",data:n.map(o=>[o._minVon,o._maxBis]),backgroundColor:n.map(s),borderColor:n.map(s),borderWidth:0,borderRadius:4,borderSkipped:!1,barPercentage:.7,categoryPercentage:.9,maxBarThickness:18},l=Math.max(0,Math.floor(Math.min(...n.map(o=>o._minVon))/60)*60-60),c=Math.min(24*60,Math.ceil(Math.max(...n.map(o=>o._maxBis))/60)*60+60),r=o=>`${String(Math.floor(o/60)).padStart(2,"0")}:${String(o%60).padStart(2,"0")}`;return new G(e,{type:"bar",data:{labels:n.map(o=>P(L(o.datum),"dd.MM.")),datasets:[i]},options:{...T(a),interaction:{mode:"index",intersect:!1,axis:"x"},plugins:{legend:{display:!1},tooltip:{enabled:!1,external:ee(({tooltip:o})=>{const d=n[o.dataPoints[0].dataIndex],u=[];d.ist!=null&&u.push({label:"Ist",value:se(d.ist),klasse:X(d.ist-7)}),d.soll!=null&&u.push({label:"Soll",value:se(d.soll)});const g=[`Rahmen: ${r(d._minVon)} – ${r(d._maxBis)}`];return d._spans.length>1&&d._spans.forEach((h,f)=>g.push(`Block ${f+1}: ${h.vonStr} – ${h.bisStr}`)),d.pause!=null&&g.push(`Pause: ${Math.round(d.pause*60)} min`),{title:P(L(d.datum),"EE, dd.MM.yyyy",{locale:j}),rows:u,meta:g}})}},scales:{x:{ticks:{color:a.fgMuted,font:{size:10},maxRotation:60,minRotation:60,autoSkip:!0,maxTicksLimit:40},grid:{display:!1}},y:{min:l,max:c,ticks:{color:a.fgMuted,stepSize:60,callback:o=>r(o)},grid:{color:a.border}}}}})}function jn(e,t){const a=Q();te(e);const n={};for(const l of t){if(l.tagestyp!=="Stempelzeit"||!l.zeitSpannen||l.zeitSpannen.length<2)continue;const c=It(l.zeitSpannen);if(c<=0)continue;const r=Math.round(c*60),o=Math.floor(r/15)*15;n[o]=(n[o]??0)+1}const s=Object.keys(n).map(Number).sort((l,c)=>l-c),i=s.map(l=>n[l]);return new G(e,{type:"bar",data:{labels:s.map(l=>`${l}–${l+14} min`),datasets:[{label:"Häufigkeit",data:i,backgroundColor:a.palette[1],borderRadius:4}]},options:{...T(a),plugins:{...T(a).plugins,legend:{display:!1},tooltip:{enabled:!1,external:ee(({tooltip:l})=>{const c=l.dataPoints[0].dataIndex;return{title:"Pause-Länge "+(s[c]!=null?`${s[c]}–${s[c]+14} min`:""),rows:[{label:"Häufigkeit",value:`${i[c]} Tag${i[c]===1?"":"e"}`}]}})}}}})}function Nn(e,t){const a=Q();te(e);const n=["MO","DI","MI","DO","FR"],s={},i={};for(const r of n)s[r]=0,i[r]=0;for(const r of t)n.includes(r.wochentag)&&(r.ist==null||r.ist===0||(s[r.wochentag]+=r.ist,i[r.wochentag]+=1));const l=n.map(r=>i[r]>0?s[r]/i[r]:0),c={id:"wochentag-datalabels",afterDatasetsDraw(r){const{ctx:o,data:d,scales:u}=r;o.save(),o.fillStyle=a.fg,o.font="600 12px system-ui",o.textAlign="center",o.textBaseline="bottom",r.getDatasetMeta(0).data.forEach((h,f)=>{const m=d.datasets[0].data[f];if(!m||m===0)return;const b=m.toFixed(2).replace(".",",")+"h";o.fillText(b,h.x,h.y-6)}),o.restore()}};return new G(e,{type:"bar",data:{labels:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"],datasets:[{label:"Ø Ist-Stunden",data:l,backgroundColor:a.palette[2],borderRadius:4,maxBarThickness:56,categoryPercentage:.7,barPercentage:.8}]},options:{...T(a),layout:{padding:{top:24}},plugins:{...T(a).plugins,legend:{display:!1},tooltip:{enabled:!1,external:ee(({tooltip:r})=>{const o=r.dataPoints[0].dataIndex,d=n[o];return{title:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"][o],rows:[{label:"Ø Stunden",value:se(l[o])},{label:"Anzahl Tage",value:String(i[d]||0)}]}})}},scales:{...T(a).scales,y:{...T(a).scales.y,suggestedMax:Math.max(...l)*1.15}}},plugins:[c]})}function Rn(e,t){const a=Q();te(e);const n={};for(const l of t)!l.tagestyp||l.tagestyp==="Wochenende"||(n[l.tagestyp]=(n[l.tagestyp]??0)+1);const s=Object.keys(n),i=Object.values(n);return new G(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:s.map((l,c)=>a.palette[c%a.palette.length]),borderColor:a.surface,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:a.fgMuted,font:{size:12}}},tooltip:{enabled:!1,external:ee(({tooltip:l})=>{const c=l.dataPoints[0].dataIndex,r=i.reduce((d,u)=>d+u,0),o=r?i[c]/r*100:0;return{title:s[c],rows:[{label:"Anzahl",value:`${i[c]} Tag${i[c]===1?"":"e"}`},{label:"Anteil",value:o.toFixed(1).replace(".",",")+"%"}]}})}}}})}function qn(e,t){const a=Q();te(e);const n={};for(const r of t){const o=r.wocheKey;n[o]??(n[o]={ist:0,soll:0,days:0,ersterTag:null}),n[o].ist+=de(r),n[o].soll+=Me(r),n[o].days++,(!n[o].ersterTag||r.datum&&r.datum<n[o].ersterTag)&&(n[o].ersterTag=r.datum)}const s=Object.keys(n).sort();if(!s.length)return;const i=s.map(r=>+n[r].ist.toFixed(2)),l=s.map(r=>+n[r].soll.toFixed(2)),c=s.map(r=>{const o=n[r].ersterTag;return o?$e(L(o)):""});return new G(e,{type:"line",data:{labels:s.map(r=>"KW "+r.split("-")[1]),datasets:[{label:"Wochenstunden",data:i,borderColor:a.accent,backgroundColor:J(a.accent,.1),segment:{borderColor:r=>{const o=r.p0.parsed.y,d=r.p1.parsed.y,u=l[r.p0.parsed.x]??35,g=l[r.p1.parsed.x]??35,h=(u+g)/2,f=(o+d)/2;return f>=h+.1?a.success:f<=h-.1?a.danger:a.fgMuted}},pointBackgroundColor:i.map((r,o)=>r>=l[o]+.1?a.success:r<=l[o]-.1?a.danger:a.fgMuted),pointBorderColor:a.surface,pointBorderWidth:1,pointRadius:3,pointHoverRadius:6,pointHitRadius:20,tension:.25,fill:!0,borderWidth:2}]},options:{...T(a),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},onHover:(r,o,d)=>{const u=d.getElementsAtEventForMode(r,"index",{intersect:!1},!1);d.canvas.style.cursor=u.length>0?"pointer":"default"},onClick:(r,o,d)=>{const u=d.getElementsAtEventForMode(r,"index",{intersect:!1},!1);if(u.length>0){const g=u[0].index,h=s[g];h&&(window.location.hash=`#/woche/${h}`)}},plugins:{...T(a).plugins,legend:{display:!1},tooltip:{enabled:!1,external:ee(({tooltip:r})=>{const o=r.dataPoints[0].dataIndex,d=s[o],u=i[o],g=l[o],h=+(u-g).toFixed(2),f=c[o];return{title:f?"KW "+d.split("-")[1]+" · "+f:"KW "+d.split("-")[1]+" · "+d.split("-")[0],rows:[{label:"Ist",value:se(u),klasse:"flat"},{label:"Soll",value:se(g),klasse:"flat"},{label:"Diff",value:ne(h),klasse:X(h)},{label:"",value:"→ Klick öffnet Woche",klasse:"flat"}]}})}},scales:{...T(a).scales,y:{...T(a).scales.y,ticks:{...T(a).scales.y.ticks,callback:r=>`${r.toFixed(0)}h`}}}}})}function te(e){const t=G.getChart(e);t&&t.destroy()}function J(e,t){const a=e.replace("#","").trim();if(a.length!==6&&a.length!==3)return e;const n=a.length===3?a.split("").map(c=>c+c).join(""):a,s=parseInt(n.slice(0,2),16),i=parseInt(n.slice(2,4),16),l=parseInt(n.slice(4,6),16);return`rgba(${s}, ${i}, ${l}, ${t})`}function Gt(e,t,a,n){const{top:s,bottom:i}=t,l=e.createLinearGradient(0,s,0,i),c=a.min,r=a.max,o=r-c;if(o<=0)return J(n.success,.14);let d=(r-0)/o;return d=Math.max(0,Math.min(1,d)),l.addColorStop(0,J(n.success,.28)),l.addColorStop(Math.max(0,d-.001),J(n.success,.06)),l.addColorStop(Math.min(1,d+.001),J(n.danger,.06)),l.addColorStop(1,J(n.danger,.28)),l}function Zn(e,t){const a=String(e??"").toLowerCase();return a.includes("stempel")?t.palette[0]:a.includes("berufs")?t.palette[1]:a.includes("urlaub")?t.palette[2]:a.includes("feiertag")?t.fgSubtle:a.includes("dienst")?t.palette[3]:a.includes("krank")?t.palette[4]:t.palette[5]}let Gn=0;function Z(e,{type:t="info",duration:a=3500}={}){const n=document.getElementById("toast-root");if(!n)return;const s=document.createElement("div");s.className=`toast ${t}`,s.textContent=e,s.dataset.id=++Gn,n.appendChild(s),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateY(-8px)",s.style.transition="opacity 220ms, transform 220ms",setTimeout(()=>s.remove(),250)},a)}function Fe(e){return Z(e,{type:"error",duration:6e3})}function F(e){return Z(e,{type:"success"})}const Un=3,Jn=2.5,Yn={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function _e(e,t={}){if(!(e!=null&&e.length))return'<p style="color: var(--fg-muted);">Keine Tage im Zeitraum.</p>';const a=new Map;for(const i of t.warnungen??[])a.has(i.datum)||a.set(i.datum,[]),a.get(i.datum).push(i);const n=[];let s=null;for(const i of e)(!s||s.key!==i.wocheKey)&&(s={key:i.wocheKey,tage:[]},n.push(s)),s.tage.push(i);return`<div class="tages-liste">${n.map(i=>Xn(i,a)).join("")}</div>`}function Xn(e,t){var d;const a=e.tage.reduce((u,g)=>u+de(g),0),n=e.tage.reduce((u,g)=>u+(g.diff??0),0),s=(d=e.tage[0])==null?void 0:d.datum,i=s?$e(L(s)):"",l=e.key?e.key.split("-")[1]:"?",c=n>.05?"pos":n<-.05?"neg":"flat",r=(n>0?"+":"")+n.toFixed(2).replace(".",",")+"h",o=a.toFixed(2).replace(".",",")+"h";return`
    <div class="woche-group">
      <div class="woche-header">
        <div class="woche-header-titel">
          <span class="woche-header-kw">KW ${w(l)}</span>
          <span class="woche-header-range tabular">${w(i)}</span>
        </div>
        <div class="woche-header-stats">
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Ist</span>
            <span class="woche-header-ist tabular">${o}</span>
          </span>
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Diff</span>
            <span class="woche-header-diff tabular ${c}">${r}</span>
          </span>
        </div>
      </div>
      <div class="woche-tage">
        ${e.tage.map(u=>Qn(u,(t==null?void 0:t.get(u.datum))??[])).join("")}
      </div>
    </div>
  `}function Qn(e,t=[]){const a=e.diff??0,n=a>0,s=n?Un:Jn,i=Math.min(150,Math.abs(a)/s*50),l=n?"var(--success)":a<0?"var(--danger)":"var(--fg-subtle)",c=Kt(e.zeitSpannen),r=e.saldo??0,o=t.length>0,d=o?ts(t):"",u=o?t.map(h=>`${h.titel}${h.beschreibung?`
`+h.beschreibung:""}`).join(`

`):"",g=o?t[0].schweregrad:null;return`
    <a href="#/tag/${e.datum}" class="tag-row${o?" has-warn severity-"+g:""}">
      <div class="tag-row-datum">
        <div class="tabular">${w(K(new Date(e.datum)))}</div>
        <div class="tag-row-wd">${es(e.wochentag)}</div>
      </div>
      <div class="tag-row-warn-cell" aria-hidden="${o?"false":"true"}">
        ${o?`<span class="tag-row-warn severity-${g}" title="${w(u)}">${d}${t.length>1?" "+t.length:""}</span>`:""}
      </div>
      <div class="tag-row-typ">
        ${e.tagestyp?`<span class="pill ${as(e.tagestyp)}">${w(e.tagestyp)}</span>`:'<span style="color: var(--fg-subtle); font-size: 12px;">—</span>'}
      </div>
      <div class="tag-row-kg">
        ${Wt(c,{size:18})}
      </div>
      <div class="tag-row-ist tabular">
        ${(()=>{if(e.ist==null)return'<div class="ist-wert">—</div>';const h=Le(e.ist),[f,m]=h.split(":");return e.ist<=0?`<div class="ist-wert">${h}</div>`:`<div class="ist-display" title="Klick auf H oder M zum Kopieren">
            <button class="ist-part" data-val="${f}" title="${f} Stunden kopieren">${f}</button><span class="ist-sep">:</span><button class="ist-part" data-val="${m}" title="${m} Minuten kopieren">${m}</button>
          </div>`})()}
        <div style="color: var(--fg-subtle); font-size: 11px;">Soll ${e.soll!=null?Le(e.soll):"—"}</div>
      </div>
      <div class="tag-row-bar">
        <div class="bar-track">
          <div class="bar-zero"></div>
          <div class="bar-fill ${n?"pos":"neg"}" style="width: ${i}%; background: ${l};"></div>
        </div>
      </div>
      <div class="tag-row-diff tabular" style="color: ${n?"var(--success)":a<0?"var(--danger)":"var(--fg-muted)"};">
        ${a!==0?(n?"+":"")+a.toFixed(2).replace(".",",")+"h":"0,00h"}
      </div>
      <div class="tag-row-saldo tabular" title="Gesamt-Saldo nach diesem Tag" style="color: var(--fg-muted); font-size: 12px; text-align: right; line-height: 1.15;">
        <div>${r>=0?"+":""}${r.toFixed(2).replace(".",",")}h</div>
        <div style="color: var(--fg-subtle); font-size: 10px; font-weight: 500; letter-spacing: 0.02em;">Saldo nach Tag</div>
      </div>
    </a>
  `}function es(e){return Yn[e]??e}function ts(e){const t={error:3,warn:2,info:1};let a=e[0];for(const n of e)(t[n.schweregrad]||0)>(t[a.schweregrad]||0)&&(a=n);return a.schweregrad==="error"?"!":a.schweregrad==="warn"?"⚠":"i"}function as(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function st(e){e._istCopyAttached||(e._istCopyAttached=!0,e.addEventListener("click",async t=>{const a=t.target.closest(".ist-part");if(!a)return;t.preventDefault(),t.stopPropagation();const n=a.getAttribute("data-val");try{await navigator.clipboard.writeText(n);const s=a.textContent;a.classList.add("ok"),a.textContent="✓",setTimeout(()=>{a.classList.remove("ok"),a.textContent=s},800)}catch{F(`Bitte kopieren: ${n}`)}}))}const ft=[{key:7,label:"1 Woche"},{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:"alles",label:"Alles"}];async function mt({root:e}){const[t,a,n,s,i,l,c]=await Promise.all([H(),ie(),_(),Ya(),Ha("dashboardZeitraum",14),nt(),ce()]),r=Object.fromEntries(l.map(y=>[y.key,y]));if(n.length===0){e.innerHTML=ss();return}const o=Ce(n,a),d=o.length;let u=i;typeof u=="number"&&u>d&&(u="alles");const g=new Set(s.map(y=>y.key)),h=c!=null&&c.stichtagAuswertung?new Date(c.stichtagAuswertung):new Date,f=Se(n,t,h,g),m=Ht(a,g),b=[...f,...m],p=Bn(o),$=p>.05?"positive":p<-.05?"negative":"";e.innerHTML=`
    <h1 class="view-title">Dashboard</h1>
    <p class="view-subtitle">Stand: ${Ke(K(new Date(n[n.length-1].datum)))}</p>

    <div class="saldo-hero" style="margin-bottom: 32px; align-items: stretch;">
      <div class="saldo-hero-text" style="min-width: 260px;">
        <h3>Aktueller Gleitzeit-Saldo</h3>
        <div class="saldo-value ${$}">${B(p,{signed:!0,suffix:""})}</div>
        <div class="saldo-unit">Stunden · tagesaktuell</div>
        <div id="hero-bewegung" class="saldo-trend flat" style="margin-top: 12px;"></div>
      </div>
      <div style="flex: 1; min-width: 400px; display: flex; flex-direction: column;">
        <div class="card-split" style="margin-bottom: 12px; align-items: center;">
          <h3 style="margin: 0;">Verlauf</h3>
          <div class="segmented" id="zeitraum-picker">
            ${ft.map(y=>{const S=typeof y.key=="number"&&y.key>d;return`<button type="button" data-key="${y.key}" class="${u===y.key?"active":""}" ${S?'disabled style="opacity:0.4"':""}>${y.label}</button>`}).join("")}
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
        ${b.slice(0,8).map(y=>ns(y,t,r)).join("")}
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
          ${ft.map(y=>{const S=typeof y.key=="number"&&y.key>d;return`<button type="button" data-key="${y.key}" class="${u===y.key?"active":""}" ${S?'disabled style="opacity:0.4"':""}>${y.label}</button>`}).join("")}
        </div>
      </div>
      <div id="tage-liste"></div>
    </div>

  `,pt(u,e,o,b);const k=()=>e.querySelectorAll("#zeitraum-picker button, #zeitraum-picker-2 button");k().forEach(y=>{y.addEventListener("click",async()=>{if(y.disabled)return;const S=y.getAttribute("data-key"),x=S==="alles"?"alles":parseInt(S,10);k().forEach(z=>z.classList.toggle("active",z.getAttribute("data-key")===S)),await ja("dashboardZeitraum",x),pt(x,e,o,b)})}),e.addEventListener("click",async y=>{const S=y.target.closest(".ist-part");if(S){y.preventDefault(),y.stopPropagation();const E=S.getAttribute("data-val");try{await navigator.clipboard.writeText(E);const I=S.textContent;S.classList.add("ok"),S.textContent="✓",setTimeout(()=>{S.classList.remove("ok"),S.textContent=I},800)}catch{F(`Bitte kopieren: ${E}`)}return}const x=y.target.closest(".btn-dismiss");if(!x)return;const z=x.getAttribute("data-datum"),D=x.getAttribute("data-typ");if(!z||!D)return;await Ja(z,D),F("Warnung ausgeblendet.");const V=x.closest(".alert");V&&(V.style.display="none")})}function pt(e,t,a,n=[]){const s=Cn(a,e),i=Vn(s);requestAnimationFrame(()=>{const o=t.querySelector("#saldo-chart");Ve(o,s)});const l=t.querySelector("#hero-bewegung");if(l){const o=i>.05?"up":i<-.05?"down":"flat",d=i>.05?"↑":i<-.05?"↓":"→";l.className=`saldo-trend ${o}`,l.innerHTML=`${d} ${Math.abs(i)<.01?"Unverändert":B(i,{signed:!0})} im Zeitraum`}const c=t.querySelector("#tage-info");if(c){const o=s.length;c.textContent=`${o} ${o===1?"Tag":"Tage"}`}const r=t.querySelector("#tage-liste");r&&(r.innerHTML=_e(s.slice().reverse(),{warnungen:n.filter(o=>s.some(d=>d.datum===o.datum))}))}function ns(e,t,a){const n=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";let s=null;if(e.mailVorlageKey&&t){const i=Be(e.mailVorlageKey,a==null?void 0:a[e.mailVorlageKey]);if(i){const l=qt(t,e);s=Zt(t,i,l)}}return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${n}</div>
      <div class="alert-body">
        <div class="alert-title">${Ke(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${Ke(e.beschreibung)}</p>
        <div class="alert-actions">
          ${s?`<a href="${Ne(s)}" class="btn primary sm">✉ Mail schreiben</a>`:""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
          <button class="btn ghost sm btn-dismiss" data-datum="${Ne(e.datum)}" data-typ="${Ne(e.typ)}">Ausblenden</button>
        </div>
      </div>
    </div>
  `}function ss(){return`
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
  `}function Ke(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ne(e){return Ke(e)}const is="/better-ess/assets/pdf.worker.min-yatZIOMy.mjs";Pa.workerSrc=is;const vt={Januar:1,Februar:2,März:3,Maerz:3,April:4,Mai:5,Juni:6,Juli:7,August:8,September:9,Oktober:10,November:11,Dezember:12},rs=["Stempelzeit","Berufsschule Std. bez","Berufsschule","Dienstreise Arbeitszeit","Reise öff.VM/PKW Beifahr.","Reise öff.VM/PKW","Urlaub","Gleitzeit","Arbeitsunfähigkeit","TgDtEinh","Neujahr","Karfreitag","Ostermontg","Ostmontg","Osterso.","Hl.3 Kön.","Allerhlg","Pfingstmo","Fronleichn","TdDtEinh"];async function ls(e){var r,o;const a=await Ea({data:e}).promise,n=[];let s=0;for(let d=1;d<=a.numPages;d++){const g=await(await a.getPage(d)).getTextContent();s+=g.items.length;const h=os(g.items);for(const f of h)n.push({page:d,text:f})}const i=cs(n),{tage:l,monate:c}=ds(n);try{const d=await a.getMetadata();i.producer=((r=d==null?void 0:d.info)==null?void 0:r.Producer)??null,i.creator=((o=d==null?void 0:d.info)==null?void 0:o.Creator)??null}catch{}return i.totalTextItems=s,{meta:i,tage:l,monate:c}}function os(e){if(!e.length)return[];const t=e.slice().sort((l,c)=>{const r=c.transform[5]-l.transform[5];return Math.abs(r)>2?r:l.transform[4]-c.transform[4]}),a=[];let n=null,s=[];const i=3;for(const l of t){const c=l.transform[5];n==null||Math.abs(c-n)<=i?(s.push(l),n==null&&(n=c)):(a.push(bt(s)),s=[l],n=c)}return s.length&&a.push(bt(s)),a.filter(l=>l.trim().length>0)}function bt(e){e.sort((n,s)=>n.transform[4]-s.transform[4]);let t="",a=-1;for(const n of e){const s=n.transform[4];a>=0&&s-a>4?t+="  ":a>=0&&s-a>.5&&(t+=" "),t+=n.str,a=s+n.width}return t}function cs(e){var a,n;const t={personalnummer:null,name:null,kostenstelle:null,personalbereich:null,einstellungsdatum:null,mitarbeiterkreis:null,arbeitszeitplanregel:null,zeitraumVon:null,zeitraumBis:null,stichtagAuswertung:null};for(let s=0;s<e.length;s++){const i=e[s].text,l=/vom\s+(\d{2}\.\d{2}\.\d{4})\s+bis\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);l&&(t.zeitraumVon=ye(l[1]),t.zeitraumBis=ye(l[2]));const c=/bis einschließlich dem\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);if(c&&(t.stichtagAuswertung=ye(c[1])),/Personalnummer/i.test(i)&&/Kostenstelle/i.test(i)){const r=(((a=e[s+1])==null?void 0:a.text)??"").trim();let o=r.split(/\s{2,}/);o.length<3&&(o=r.split(/\s+/)),o.length>=3&&/^\d/.test(o[0])&&(t.personalnummer=o[0],t.kostenstelle=o[1],t.personalbereich=o[2])}if(/Einstellungsdatum/i.test(i)&&/Mitarbeiterkreis/i.test(i)){const r=(((n=e[s+1])==null?void 0:n.text)??"").trim();let o=r.split(/\s{2,}/);o.length<3&&(o=r.split(/\s+/)),o.length>=3&&/^\d{2}\.\d{2}\.\d{4}$/.test(o[0])&&(t.einstellungsdatum=ye(o[0]),t.mitarbeiterkreis=o[1],t.arbeitszeitplanregel=o[2])}if(/Bei Rückfragen wenden Sie sich an/i.test(i))for(let r=s+1;r<Math.min(s+8,e.length);r++){const o=e[r].text.trim();if(/^[A-ZÄÖÜ][a-zäöüß]+(?:\s[A-ZÄÖÜ][a-zäöüß]+)+$/.test(o)&&!/kanarya/i.test(o)&&!/tel/i.test(o)){t.name=o;break}}}return t}function ds(e,t){var r;const a=[],n=[];let s=null,i=null,l=!1,c=0;for(;c<e.length;){const o=e[c].text,d=/Monat:\s*([A-Za-zäöüÄÖÜß]+)\s*-\s*(\d{4})/.exec(o);if(d){const f=d[1].trim(),m=parseInt(d[2],10),b=vt[f]??vt[f.replace("ä","ae")]??null;b&&(s={jahr:m,monat:b,monatKey:`${m}-${String(b).padStart(2,"0")}`},l=!0,i=null),c++;continue}if(/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.test(o)){const f=/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.exec(o),m=ye(f[1]);i={monatKey:(s==null?void 0:s.monatKey)??Bt(m),stichtag:m,glz:{},flexi:{},zeitkonten:{},raw:{}},c=us(e,c+1,i),n.push(i);continue}let u=s;const g=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)\b/.exec(o.trim());if(g&&s){const f=parseInt(g[1],10);l&&f>=20?u=fs(s):f<=15&&(l=!1)}const h=yt(o,u);if(h){const f=[];let m=c+1;for(;m<e.length;){const p=e[m].text;if(/^\s*\d{4}\s+Umbuchung/.test(p)||yt(p,s)||/Wochensumme/i.test(p)||/Monats.bersicht/i.test(p)||/Monat:\s*[A-Za-z]/i.test(p))break;const $=gs(p);if($){f.push($),m++;continue}break}if(f.length&&h.zeitSpannen.push(...f),h.tagestyp==="Wochenende"||h.wochentag==="SA"||h.wochentag==="SO"){c=m;continue}(h.ist!=null||h.soll!=null||(((r=h.zeitSpannen)==null?void 0:r.length)??0)>0||h.tagestyp!=null)&&a.push(h),c=m;continue}c++}return{tage:a,monate:n}}function us(e,t,a){let n=t;const s=/(\d{4,5}|KTAU|AZAU)\s*-\s*(.+?)\s+(-?[\d,.]+-?)(?=\s+(?:\d{4,5}|KTAU|AZAU)\s*-|\s*$)/g;for(;n<e.length;){const i=e[n].text.trim();if(/^Monat:\s/.test(i)||/^Einzelergebnisse\s/.test(i)||/^Tag\b/.test(i)||/^Wochensumme/.test(i)||/^\d{2}\s+(MO|DI|MI|DO|FR|SA|SO)\b/.test(i)||/^Übersicht für den Zeitraum/i.test(i)||/^Abwesenheitsansprüche/i.test(i))break;s.lastIndex=0;let l;for(;(l=s.exec(i))!=null;){const c=l[1],r=l[2].trim(),o=Ft(l[3]);a.raw[c]={beschreibung:r,wert:o},c==="0008"&&(a.glz.saldoVorperiode=o),c==="8016"&&(a.glz.saldoAktuellePeriode=o),c==="9802"&&(a.glz.umgebuchteStunden=o),c==="0005"&&(a.glz.saldoGesamt=o),c==="9803"&&(a.glz.ueberzaehligeStd=o),c==="0050"&&(a.zeitkonten.produktivstunden=o),c==="9011"&&(a.flexi.jahreskontoVorperiode=o),c==="9010"&&(a.flexi.jahreskontoSaldo=o),c==="9020"&&(a.flexi.langzeitkontoSaldo=o),c==="9203"&&(a.zeitkonten.azMonatsendeUeber216=o),c==="9207"&&(a.zeitkonten.auszahlungBav=o),c==="9205"&&(a.zeitkonten.summeAuszahlung=o)}if(n++,n-t>80)break}return n}function yt(e,t){if(!t)return null;const a=e.trim(),n=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)(?:\s+(.+))?$/.exec(a);if(!n)return null;const s=parseInt(n[1],10),i=n[2],l=(n[3]??"").trim();let c=t.jahr,r=t.monat;const o=new Date(c,r-1,s),d={datum:Pn(o),datumDate:o.toISOString(),wochentag:i,tagNr:s,monatKey:Bt(o),wocheKey:Tn(o),zeitSpannen:[],aktivitaeten:[],ist:null,soll:null,diff:null,pause:null,tazp:null,tagestyp:null,raw:a};return l?(hs(l,d),d):(d.tagestyp=["SA","SO"].includes(i)?"Wochenende":null,d)}function gs(e){const t=e.trim(),a=/^(Stempelzeit|Reise öff\.VM\/PKW Beifahr\.|Reise öff\.VM\/PKW|Dienstreise Arbeitszeit)\s+(\d{2}:\d{2})\s+(\d{2}:\d{2})\s*$/.exec(t);return a?{aktivitaet:a[1],von:a[2],bis:a[3]}:null}function hs(e,t){let a=null,n=e;for(const d of rs)if(e.startsWith(d)){a=d,n=e.slice(d.length).trim();break}a||(a=e.split(/\s+/)[0],n=e.slice(a.length).trim()),t.tagestyp=ms(a),t.aktivitaeten.push(a);const s=n.split(/\s+/).filter(Boolean),i=/^\d{2}:\d{2}$/,l=/^-?[\d,.]+-?$/;let c=0;for(;s[c]&&i.test(s[c])&&s[c+1]&&i.test(s[c+1]);)t.zeitSpannen.push({aktivitaet:a,von:s[c],bis:s[c+1]}),c+=2;const r=[];for(;c<s.length&&l.test(s[c]);){const d=Ft(s[c]);d!=null&&r.push(d),c++}let o=s[c];r.length>=5?([t.ist,t.soll,t.diff,t.pause]=r,o||(o=String(r[4]))):r.length===4?[t.ist,t.soll,t.diff,t.pause]=r:r.length===3?[t.ist,t.soll,t.diff]=r:r.length===2?[t.ist,t.soll]=r:r.length===1&&(t.ist=r[0]),o&&(t.tazp=String(o))}function fs(e){if(!e)return null;let t=e.monat-1,a=e.jahr;return t<1&&(t=12,a-=1),{jahr:a,monat:t,monatKey:`${a}-${String(t).padStart(2,"0")}`}}function ms(e){return e?/^Stempelzeit$/i.test(e)?"Stempelzeit":/^Berufsschule Std\. bez$/i.test(e)||/^Berufsschule$/i.test(e)?"Berufsschule":/Dienstreise/i.test(e)||/Reise/i.test(e)?"Dienstreise":/^Urlaub$/i.test(e)?"Urlaub":/^Gleitzeit$/i.test(e)?"Gleitzeit":/Arbeitsunf.higkeit/i.test(e)?"Arbeitsunfähigkeit":/^(Neujahr|Karfreitag|Ostermontg|Ostmontg|Osterso\.|Hl\.3 Kön\.|Allerhlg|Pfingstmo|Fronleichn|TdDtEinh|TgDtEinh)$/i.test(e)?"Feiertag":e:null}const Ut="better-ess-tour-completed",ps=(typeof import.meta<"u"?"/better-ess/":"/")+"tutorial/speichern.png",le=[{type:"modal",hero:!0,icon:"👋",title:"Willkommen bei Better ESS",text:'Diese App liest deinen <strong>Zeitnachweis</strong> und macht ihn auf einen Blick verständlich.<br><br>Eine Minute Tour — ich klicke selbst, du musst nur <strong>„Weiter"</strong> drücken.'},{type:"modal",hero:!0,icon:"🔒",title:"Deine Daten bleiben bei dir",text:"Dein PDF geht <strong>nicht ins Internet</strong>.<br><br>Alles läuft lokal in deinem Browser — wie eine Notizen-App. Kein Upload, kein Server, kein Konto."},{type:"highlight",target:'a[href="#/daten"]',icon:"📂",title:"Hier startet alles",text:'Ich bringe dich zur Daten-Seite — klick "Weiter".',placement:"right",autoClick:!0,onAfterClick:async()=>{window.location.hash!=="#/daten"&&(window.location.hash="#/daten"),await Ae("#upload-zone",1500)}},{type:"download-modal",icon:"💾",title:"So holst du das richtige PDF aus dem ESS",image:ps,points:[{kind:"good",icon:"✓",text:"<strong>Speichern-Button</strong> (Disketten-Symbol oben rechts in der PDF-Toolbar) — speichert eine echte Text-PDF."},{kind:"bad",icon:"✕",text:'<strong>NICHT</strong> "Drucken → Microsoft Print to PDF" — dabei werden Texte als Pfade gerendert und sind nicht lesbar.'}]},{type:"highlight",target:"#upload-zone",icon:"📥",title:"Lade jetzt dein PDF hoch",text:"Zieh dein Zeitnachweis-PDF auf die Box (oder klick sie an). Erst nach dem Upload geht die Tour weiter.",placement:"top",waitForTarget:!0,waitForEvent:"better-ess:pdf-uploaded"},{type:"modal",icon:"✨",title:"Geschafft!",text:"Dein PDF ist eingelesen. Jetzt zeig ich dir die Funktionen — anhand deiner echten Daten.",onNext:async()=>{window.location.hash="#/",await Ae(".saldo-value",1500)}},{type:"highlight",target:".saldo-value",icon:"⚖️",title:"Dein aktueller Saldo",text:"Plus oder Minus auf einen Blick. Tagesaktuell.",placement:"right",waitForTarget:!0},{type:"highlight",target:".chart-wrap canvas",icon:"📈",title:"Saldo-Verlauf",text:"Hover über die Punkte für Details. Zeitraum oben rechts umschaltbar.",placement:"top",waitForTarget:!0},{type:"highlight",target:".tag-row .ist-display",icon:"⏱️",title:"Stunden direkt kopieren",text:"Klick auf <strong>H</strong> oder <strong>M</strong> — kopiert den Wert in deine Zwischenablage. Praktisch fürs IHK-Berichtsheft.",placement:"left",waitForTarget:!0},{type:"highlight",target:".alert",icon:"⚠️",title:"Auffälligkeiten",text:"Fehlende Tage, falsche BS-Stunden, Pausen-Abzug — alles automatisch erkannt.",placement:"left",optional:!0,waitForTarget:!0,timeoutMs:1200},{type:"highlight",target:".alert .btn.primary",icon:"✉️",title:"Mail mit 1 Klick",text:"Vorformulierte Mail an die Zeitwirtschaft — Datum, Werte, Anrede sind schon eingesetzt.",placement:"left",waitForTarget:!0,timeoutMs:800,fallback:{type:"highlight",target:"#vorlagen-editor",icon:"✉️",title:"Mail-Vorlagen",text:"Aktuell hat dein Zeitnachweis keine Auffälligkeiten — top. Diese 4 Vorlagen werden bei Bedarf automatisch mit Datum, Werten und Anrede gefüllt. Anpassen kannst du sie hier jederzeit.",placement:"top",onBefore:async()=>{window.location.hash="#/mails",await Ae("#vorlagen-editor",1500)},waitForTarget:!0,timeoutMs:1500}},{type:"highlight",target:'a[href="#/monat"]',icon:"📅",title:"Monate & Wochen",text:"Tiefer reinzoomen: Monatssaldo, Wochenliste, Tagesbalken.",placement:"right"},{type:"highlight",target:'a[href="#/profil"]',icon:"👤",title:"Profil",text:"Über 18? Pausen-Regel und Mail-Empfänger anpassen.",placement:"right"},{type:"modal",icon:"🚀",title:"Bereit!",text:"Du kennst alle Funktionen. Tour erneut starten? Button am Ende der <strong>Daten</strong>-Seite."}],vs=le.findIndex(e=>e.icon==="✨");let A=null,ae=null;function Jt(){it(),A={idx:0},Y()}function bs(e){return e?!1:!localStorage.getItem(Ut)}function ys(){localStorage.setItem(Ut,"1")}function ws(){return A!==null}function it(){document.querySelectorAll(".tour-blur-frame, .tour-popover, .tour-pointer, .tour-highlight-border").forEach(e=>e.remove()),ae&&(ae(),ae=null),A=null}function De(e){if(document.querySelectorAll(".tour-blur-frame").forEach(u=>u.remove()),!e){const u=document.createElement("div");u.className="tour-blur-frame full",document.body.appendChild(u);return}const t=e.getBoundingClientRect(),a=8,n=Math.max(0,t.left-a),s=Math.max(0,t.top-a),i=t.width+a*2,l=t.height+a*2,c=window.innerWidth,r=window.innerHeight,o=[{top:0,left:0,width:c,height:s},{top:s,left:0,width:n,height:l},{top:s,left:n+i,width:c-(n+i),height:l},{top:s+l,left:0,width:c,height:r-(s+l)}];for(const u of o){if(u.width<=0||u.height<=0)continue;const g=document.createElement("div");g.className="tour-blur-frame",g.style.top=u.top+"px",g.style.left=u.left+"px",g.style.width=u.width+"px",g.style.height=u.height+"px",document.body.appendChild(g)}let d=document.querySelector(".tour-highlight-border");d||(d=document.createElement("div"),d.className="tour-highlight-border",document.body.appendChild(d)),d.style.top=s+"px",d.style.left=n+"px",d.style.width=i+"px",d.style.height=l+"px",d.style.display=""}function rt(){let e=document.querySelector(".tour-pointer");return e||(e=document.createElement("div"),e.className="tour-pointer",e.innerHTML=`
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
      </svg>`,e.style.top=window.innerHeight/2+"px",e.style.left=window.innerWidth/2+"px",document.body.appendChild(e)),e}function xs(e){const t=rt(),a=e.getBoundingClientRect(),n=a.left+a.width*.5,s=a.top+a.height*.5;t.style.top=s-6+"px",t.style.left=n-9+"px"}function wt(){var e;(e=document.querySelector(".tour-pointer"))==null||e.remove()}async function ks(e){const t=rt();t.classList.add("tour-pointer-clicking"),await new Promise(a=>setTimeout(a,280)),t.classList.remove("tour-pointer-clicking")}async function Ae(e,t=1500){const a=Date.now();for(;Date.now()-a<t;){const n=document.querySelector(e);if(n)return n;await new Promise(s=>setTimeout(s,100))}return null}async function Y(){var c,r,o;if(!A)return;const e=A.overrideStep||le[A.idx];if(A.overrideStep=null,!e){Ue();return}if(ae&&(ae(),ae=null),e.type==="download-modal")return wt(),De(null),$s(e);let t=null;if(e.type==="highlight"){if(t=e.waitForTarget?await Ae(e.target,e.timeoutMs??1500):document.querySelector(e.target),!t&&e.fallback){const d=e.fallback;if(d.onBefore)try{await d.onBefore()}catch(u){console.warn("tour fallback onBefore error:",u)}return A.overrideStep=d,Y()}if(!t&&e.optional)return A.idx++,Y();if(t){try{t.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}catch{}await new Promise(d=>setTimeout(d,250)),De(t),rt(),requestAnimationFrame(()=>xs(t))}else De(null)}else wt(),De(null);let a=document.querySelector(".tour-popover");a||(a=document.createElement("div"),a.className="tour-popover",document.body.appendChild(a)),a.classList.remove("tour-popover-large","tour-popover-hero"),e.hero&&a.classList.add("tour-popover-hero");const n=A.idx===0,s=A.idx===le.length-1,i=!!e.waitForEvent,l=i?"⏳ Warte auf Upload …":s?"Fertig":"Weiter →";if(a.innerHTML=`
    <div class="tour-popover-header">
      <span class="tour-popover-step">${A.idx+1} / ${le.length}</span>
      <button class="tour-skip" type="button" aria-label="Tour beenden">Überspringen</button>
    </div>
    <div class="tour-popover-icon">${e.icon||""}</div>
    <h3>${e.title}</h3>
    <div class="tour-popover-body">${e.text}</div>
    <div class="tour-popover-actions">
      <button class="btn tour-prev" type="button" ${n?'disabled style="opacity:0.4;cursor:default"':""}>← Zurück</button>
      <button class="btn primary tour-next" type="button" ${i?'disabled style="opacity:0.5;cursor:default"':""}>${l}</button>
    </div>`,t?(a.classList.remove("center"),a.style.opacity="0",requestAnimationFrame(()=>{Ss(a,t,e.placement||"right"),a.style.opacity="1"})):(a.classList.add("center"),a.style.top=a.style.left=a.style.right=a.style.bottom="",a.style.opacity="1"),(c=a.querySelector(".tour-skip"))==null||c.addEventListener("click",()=>{confirm('Tour beenden? Du kannst sie unter „Daten" jederzeit wieder starten.')&&Ue()}),n||(r=a.querySelector(".tour-prev"))==null||r.addEventListener("click",async()=>{A.idx=Math.max(0,A.idx-1),await Y()}),!i)(o=a.querySelector(".tour-next"))==null||o.addEventListener("click",async()=>{if(e.autoClick&&t){await ks();try{const d=t.getAttribute("href");d&&d.startsWith("#/")?window.location.hash=d.slice(1):t.click()}catch(d){console.warn("tour autoClick error:",d)}if(e.onAfterClick)try{await e.onAfterClick()}catch(d){console.warn("tour onAfterClick error:",d)}else await new Promise(d=>setTimeout(d,350))}else if(e.onNext)try{await e.onNext()}catch(d){console.warn("tour onNext error:",d)}A.idx++,await Y()});else{const d=async()=>{A==null||A.idx,it(),document.querySelectorAll(".upload-modal-overlay").forEach(u=>u.remove()),await new Promise(u=>setTimeout(u,300)),A={idx:vs},await Y()};document.addEventListener(e.waitForEvent,d,{once:!0}),ae=()=>document.removeEventListener(e.waitForEvent,d)}}function $s(e){var n,s,i;let t=document.querySelector(".tour-popover");t||(t=document.createElement("div"),t.className="tour-popover",document.body.appendChild(t)),t.classList.add("tour-popover-large","center");const a=A.idx===0;A.idx,le.length-1,t.innerHTML=`
    <div class="tour-popover-header">
      <span class="tour-popover-step">${A.idx+1} / ${le.length}</span>
      <button class="tour-skip" type="button" aria-label="Tour beenden">Überspringen</button>
    </div>
    <div class="tour-popover-icon">${e.icon||""}</div>
    <h3>${e.title}</h3>
    <div class="tour-download-image-wrap">
      <img src="${e.image}" alt="Speichern-Button im PDF-Viewer">
    </div>
    <div class="tour-download-points">
      ${e.points.map(l=>`
        <div class="tour-download-point ${l.kind==="bad"?"bad":""}">
          <span class="tour-download-point-icon">${l.icon}</span>
          <span>${l.text}</span>
        </div>`).join("")}
    </div>
    <div class="tour-popover-actions" style="margin-top:14px;">
      <button class="btn tour-prev" type="button" ${a?'disabled style="opacity:0.4;cursor:default"':""}>← Zurück</button>
      <button class="btn primary tour-next" type="button">Verstanden, weiter →</button>
    </div>`,t.style.top=t.style.left=t.style.right=t.style.bottom="",t.style.opacity="1",(n=t.querySelector(".tour-skip"))==null||n.addEventListener("click",()=>{confirm('Tour beenden? Du kannst sie unter „Daten" jederzeit wieder starten.')&&Ue()}),a||(s=t.querySelector(".tour-prev"))==null||s.addEventListener("click",async()=>{A.idx=Math.max(0,A.idx-1),await Y()}),(i=t.querySelector(".tour-next"))==null||i.addEventListener("click",async()=>{A.idx++,await Y()})}function Ss(e,t,a){const n=t.getBoundingClientRect(),s=16,i=e.offsetWidth||360,l=e.offsetHeight||220,c=window.innerWidth,r=window.innerHeight,o=[a,"right","bottom","left","top"];let d=null;for(const h of o)if((()=>{switch(h){case"right":return n.right+s+i<=c;case"left":return n.left-s-i>=0;case"bottom":return n.bottom+s+l<=r;case"top":return n.top-s-l>=0}})()){d=h;break}d=d||a;let u,g;switch(d){case"right":u=n.top+n.height/2-l/2,g=n.right+s;break;case"left":u=n.top+n.height/2-l/2,g=n.left-i-s;break;case"bottom":u=n.bottom+s,g=n.left+n.width/2-i/2;break;case"top":default:u=n.top-l-s,g=n.left+n.width/2-i/2;break}u=Math.max(s,Math.min(r-l-s,u)),g=Math.max(s,Math.min(c-i-s,g)),e.style.position="fixed",e.style.top=u+"px",e.style.left=g+"px",e.style.right="auto",e.style.bottom="auto",e.style.transform=""}function Ue(){it(),ys()}async function Ms({root:e}){var i;const t=await Et(),a=await H();e.innerHTML=`
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
            <img class="zoomable" src="/better-ess/tutorial/speichern.png" alt="Speichern-Button im PDF-Viewer" title="Klick für Vollbild" style="width: 100%; max-width: 600px; border: 1px solid var(--border); border-radius: var(--radius-sm); display: block; cursor: zoom-in;" />
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
        ${t.length===0?'<div class="empty-state"><div class="empty-state-icon">📭</div><p>Noch keine Uploads</p></div>':Xt(t)}
      </div>
    </div>

    <div class="card" style="margin-top: 24px; text-align: center; background: transparent; border-style: dashed;">
      <p style="color: var(--fg-muted); font-size: 13px; margin: 0 0 12px;">Brauchst du nochmal eine kurze Tour durch die App?</p>
      <button class="btn" id="btn-tour-restart" type="button">🎯 Tour erneut starten</button>
    </div>
  `;const n=e.querySelector("#upload-zone"),s=e.querySelector("#file-input");n.addEventListener("click",()=>s.click()),n.addEventListener("dragover",l=>{l.preventDefault(),n.classList.add("drag")}),n.addEventListener("dragleave",()=>n.classList.remove("drag")),n.addEventListener("drop",async l=>{var r;l.preventDefault(),n.classList.remove("drag");const c=(r=l.dataTransfer.files)==null?void 0:r[0];c&&await kt(c,e,a)}),s.addEventListener("change",async l=>{var r;const c=(r=l.target.files)==null?void 0:r[0];c&&await kt(c,e,a)}),e.querySelector("#btn-export").addEventListener("click",As),e.querySelector("#btn-import").addEventListener("click",()=>e.querySelector("#import-input").click()),e.querySelector("#import-input").addEventListener("change",Ts),e.querySelector("#btn-clear-parsed").addEventListener("click",Ds),e.querySelector("#btn-reset").addEventListener("click",Ps),(i=e.querySelector("#btn-tour-restart"))==null||i.addEventListener("click",()=>Jt()),zs()}let xt=!1;function zs(){xt||(xt=!0,document.body.addEventListener("click",e=>{if(e.target.closest(".lightbox-overlay, .upload-modal-overlay"))return;const t=e.target.closest("img.zoomable");t&&Yt(t.src,t.alt)}))}function Yt(e,t){const a=document.createElement("div");a.className="lightbox-overlay",a.innerHTML=`
    <button class="lightbox-close" aria-label="Schließen" title="Schließen (Esc)">×</button>
    <img src="${e}" alt="${t||""}" />
  `,document.body.appendChild(a);const n=()=>{a.remove(),document.removeEventListener("keydown",s)},s=i=>{i.key==="Escape"&&n()};a.addEventListener("click",i=>{(i.target===a||i.target.classList.contains("lightbox-close"))&&n()}),document.addEventListener("keydown",s)}async function Ds(){confirm("PDF-abgeleitete Daten (Tage, Monate, Uploads) werden gelöscht. Profil und Mail-Vorlagen bleiben erhalten. Fortfahren?")&&(await Lt(),F("Daten gelöscht. Profil bleibt."),setTimeout(()=>location.reload(),600))}function Xt(e){return`
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
            <td>${w(Es(t.hochladeDatum))}</td>
            <td>${w(t.dateiname||"—")}</td>
            <td>${t.zeitraumVon?w(K(new Date(t.zeitraumVon))):"—"} – ${t.zeitraumBis?w(K(new Date(t.zeitraumBis))):"—"}</td>
            <td>${t.stichtagAuswertung?w(K(new Date(t.stichtagAuswertung))):"—"}</td>
            <td class="num">${t.tageCount??"—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}async function kt(e,t,a){var i,l,c,r;const n=t.querySelector("#upload-status"),s=t.querySelector("#upload-zone");s.style.pointerEvents="none",s.style.opacity="0.6",n.innerHTML=`
    <div class="alert severity-info">
      <div class="loader-ring" style="width: 24px; height: 24px; border-width: 2px;"></div>
      <div class="alert-body">
        <div class="alert-title">PDF wird verarbeitet…</div>
        <p style="margin: 4px 0; font-size: 13px;"><strong>${w(e.name)}</strong> — das kann bei großen PDFs einige Sekunden dauern.</p>
      </div>
    </div>`;try{const o=await e.arrayBuffer(),d=await ls(o);if(d.tage.length===0&&!d.meta.zeitraumVon){s.style.pointerEvents="",s.style.opacity="",n.innerHTML="",Re({type:"error",title:"Diese PDF ist nicht kompatibel",desc:'Im PDF wurden keine Texte gefunden. Das passiert, wenn das PDF über „Drucken → Als PDF speichern" (z.B. „Microsoft Print to PDF") erzeugt wurde — dabei werden Texte als Vektorpfade gerendert und können nicht ausgelesen werden.',hint:'Lade dein PDF direkt aus dem ESS über den <strong>Speichern-Button</strong> herunter (Disketten-Symbol oben rechts im PDF-Viewer) — nicht über „Drucken".',screenshot:!0,producer:(i=d.meta)==null?void 0:i.producer}),Fe("PDF enthält keinen extrahierbaren Text.");return}const u=await ce(),g=u==null?void 0:u.personalnummer,h=d.meta.personalnummer;if(g&&h&&g!==h){const k=(u==null?void 0:u.name)||`Personalnr. ${g}`,y=d.meta.name||`Personalnr. ${h}`;if(!confirm(`Das hochgeladene PDF gehört zu einem anderen Azubi als die bisher gespeicherten Daten:

Bisher: ${k}
Jetzt:  ${y}

Wenn du fortfährst, werden alle alten Tagesdaten gelöscht und durch die neuen ersetzt.
(Profil-Einstellungen wie Theme und Mail-Vorlagen bleiben erhalten.)

Fortfahren?`)){s.style.pointerEvents="",s.style.opacity="",n.innerHTML=`
          <div class="alert severity-info">
            <div class="alert-body">
              <div class="alert-title">Upload abgebrochen</div>
              <p style="margin: 4px 0; font-size: 13px;">Es wurden keine Daten verändert. Lade das richtige PDF (für ${w(k)}) erneut hoch.</p>
            </div>
          </div>`;return}await Lt();const x=await H();await Pe({...x,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1}})}const f=await Na(d.tage,d.monate,d.meta.stichtagAuswertung);(f.skippedTage>0||f.skippedMonate>0)&&console.info(`[upload] ${f.skippedTage} Tage und ${f.skippedMonate} Monate uebersprungen — bestehende Daten haben juengeren Stichtag.`),await Ra({dateiname:e.name,personalnummer:d.meta.personalnummer??null,name:d.meta.name??null,zeitraumVon:((l=d.meta.zeitraumVon)==null?void 0:l.toISOString())??null,zeitraumBis:((c=d.meta.zeitraumBis)==null?void 0:c.toISOString())??null,stichtagAuswertung:((r=d.meta.stichtagAuswertung)==null?void 0:r.toISOString())??null,tageCount:d.tage.length,monateCount:d.monate.length});const m=await _(),b=Vt(m),p={...Pt(),...a};(b.wochentageWoechentlich.length>0||b.wochentage14Taegig.length>0)&&(p.berufsschulMuster=b),await Pe(p),n.innerHTML="",ws()||Re({type:"success",title:"PDF erfolgreich eingelesen",desc:d.meta.zeitraumVon?`Zeitraum: ${K(d.meta.zeitraumVon)} – ${K(d.meta.zeitraumBis)}`:"Daten wurden erfolgreich verarbeitet.",stats:[{num:d.tage.length,label:"Tage"},{num:d.monate.length,label:"Monatsübersichten"}]}),F(`PDF verarbeitet: ${d.tage.length} Tage.`),document.dispatchEvent(new CustomEvent("better-ess:pdf-uploaded",{detail:{tageCount:d.tage.length,monateCount:d.monate.length}}));const $=await Et();t.querySelector("#uploads-list").innerHTML=Xt($)}catch(o){console.error(o),n.innerHTML="",Re({type:"error",title:"Fehler beim Parsen",desc:w(o.message||String(o)),hint:'Prüfe, ob es sich um einen ESS-Zeitnachweis im richtigen Format handelt. Lade dein PDF über den Speichern-Button herunter, nicht über „Drucken".',screenshot:!0}),Fe("PDF konnte nicht gelesen werden.")}finally{s.style.pointerEvents="",s.style.opacity=""}}async function As(){try{const e=await Ga(),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),a=URL.createObjectURL(t),n=document.createElement("a"),s=new Date().toISOString().slice(0,10);n.href=a,n.download=`zeitnachweis-backup-${s}.json`,n.click(),URL.revokeObjectURL(a),F("Backup heruntergeladen.")}catch(e){Fe(`Export fehlgeschlagen: ${e.message}`)}}async function Ts(e){var a;const t=(a=e.target.files)==null?void 0:a[0];if(t)try{const n=await t.text(),s=JSON.parse(n);if(!confirm("Existierende Daten werden überschrieben. Fortfahren?"))return;await Ua(s),F("Backup erfolgreich importiert. Seite wird neu geladen…"),setTimeout(()=>location.reload(),800)}catch(n){Fe(`Import fehlgeschlagen: ${n.message}`)}}async function Ps(){confirm("ALLE Daten endgültig löschen? Das lässt sich nicht rückgängig machen.")&&confirm("Wirklich alle Daten löschen? Letzte Warnung.")&&(await Za(),F("Alle Daten gelöscht."),setTimeout(()=>location.reload(),600))}function Es(e){if(!e)return"—";const t=new Date(e);return t.toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"})+" "+t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}function Re(e){const{type:t,title:a,desc:n,hint:s,screenshot:i,stats:l,producer:c}=e,r=document.createElement("div");r.className="upload-modal-overlay";const o=`
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
    </svg>`,u=l!=null&&l.length?`
    <div class="upload-modal-stats">
      ${l.map(p=>`
        <div class="upload-modal-stat">
          <div class="upload-modal-stat-num">${w(String(p.num))}</div>
          <div class="upload-modal-stat-label">${w(p.label)}</div>
        </div>
      `).join("")}
    </div>`:"",g=i?`
    <img class="upload-modal-hint-img zoomable" src="/better-ess/tutorial/speichern.png"
         alt="Speichern-Button im PDF-Viewer"
         title="Klick für Vollbild" />`:"",h=c?`<p style="font-size: 12px; color: var(--fg-subtle); margin-top: 12px;">Erkannt: Producer „${w(c)}"</p>`:"",f=t==="success"?`
      <a href="#/" class="btn primary">Zum Dashboard</a>
      <a href="#/monat" class="btn">Monate ansehen</a>
      <button class="btn upload-modal-close-btn">Schließen</button>`:`
      <button class="btn primary upload-modal-close-btn">Verstanden</button>`;r.innerHTML=`
    <div class="upload-modal" role="dialog" aria-modal="true">
      <div class="upload-modal-icon-wrap">
        ${t==="success"?o:d}
      </div>
      <h2 class="upload-modal-title">${w(a)}</h2>
      <p class="upload-modal-desc">${n}</p>
      ${u}
      ${s?`<p class="upload-modal-desc" style="background: var(--accent-bg); padding: 12px; border-radius: 8px; border-left: 3px solid var(--accent);">${s}</p>`:""}
      ${g}
      ${h}
      <div class="upload-modal-actions">${f}</div>
    </div>`,document.body.appendChild(r);const m=()=>{r.style.animation="upload-modal-fade 150ms ease-out reverse",setTimeout(()=>r.remove(),150),document.removeEventListener("keydown",b)},b=p=>{p.key==="Escape"&&m()};document.addEventListener("keydown",b),r.addEventListener("click",p=>{if(p.target===r){m();return}if(p.target.closest(".upload-modal-close-btn")){m();return}if(p.target.closest(".upload-modal-actions a, .upload-modal-actions button")){m();return}const $=p.target.closest("img.zoomable");$&&Yt($.src,$.alt)})}const $t={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag"};async function Ls({root:e}){var s,i,l,c,r;const t=await H(),a=t.berufsschulMuster??{},n=(((s=a.wochentageWoechentlich)==null?void 0:s.length)??0)>0||(((i=a.wochentage14Taegig)==null?void 0:i.length)??0)>0;e.innerHTML=`
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
          <input type="email" name="zeitwirtschaftEmail" value="${St(t.zeitwirtschaftEmail)}" />
        </div>
        <div class="form-group">
          <label>Anrede in Mails</label>
          <input type="text" name="zeitwirtschaftAnrede" value="${St(t.zeitwirtschaftAnrede)}" placeholder="Frau Kanarya" />
        </div>
      </div>

      <div class="card" style="grid-column: 1 / -1;">
        <h2>Berufsschul-Rhythmus <span style="font-size: 11px; font-weight: 500; color: var(--fg-subtle); text-transform: uppercase; letter-spacing: 0.05em; margin-left: 8px;">Automatisch erkannt</span></h2>
        ${n?`
          <div class="tag-detail">
            <div class="tag-detail-label">Wöchentlich</div>
            <div class="tag-detail-value"><strong>${((l=a.wochentageWoechentlich)==null?void 0:l.map(o=>$t[o]).join(", "))||"—"}</strong></div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Alle 2 Wochen</div>
            <div class="tag-detail-value"><strong>${((c=a.wochentage14Taegig)==null?void 0:c.map(o=>$t[o]).join(", "))||"—"}</strong>${a.referenzDatum14Taegig?` <span class="hint">(Anker: ${K(new Date(a.referenzDatum14Taegig))})</span>`:""}</div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Stunden pro Schultag</div>
            <div class="tag-detail-value">
              <strong>${a.stundenProTag!=null?a.stundenProTag.toFixed(2).replace(".",",")+"h":"—"}</strong>
              ${a.halbtags?' <span class="hint" style="color: var(--accent);">(Halbtags-Schule erkannt)</span>':""}
            </div>
          </div>
          <p class="hint" style="margin-top: 16px;">
            Das Muster wird bei jedem PDF-Upload neu aus den Daten abgeleitet. ${a.halbtags?'Da deine Schultage typischerweise weniger als 5h dauern, geht die App von Halbtags-Schule aus und meldet KEINE „BS-Stunden falsch"-Warnung, wenn dein Schultag nur '+(((r=a.stundenProTag)==null?void 0:r.toFixed(2).replace(".",","))??"4,00")+"h hat.":"Je länger der erfasste Zeitraum, desto präziser."}
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
  `,e.querySelector("#profil-form").addEventListener("submit",async o=>{var g,h;o.preventDefault();const d=new FormData(o.target),u={...t,ueber18:d.get("ueber18")==="on",zeitwirtschaftEmail:((g=d.get("zeitwirtschaftEmail"))==null?void 0:g.trim())||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:((h=d.get("zeitwirtschaftAnrede"))==null?void 0:h.trim())||"Frau Kanarya"};await Pe(u),F("Profil gespeichert.")})}function St(e){return String(e??"").replace(/"/g,"&quot;")}async function Fs({root:e}){var s;const t=await ie(),a=await _(),n={};for(const i of a)n[s=i.monatKey]??(n[s]=[]),n[i.monatKey].push(i);if(t.length===0){e.innerHTML=Vs("Noch keine Monatsdaten. Lade zuerst ein PDF unter Daten hoch.");return}e.innerHTML=`
    <h1 class="view-title">Monate</h1>
    <p class="view-subtitle">${t.length} Monate erfasst. Klicke für Details.</p>

    <div class="grid cols-2">
      ${t.slice().reverse().map(i=>{var g;const c=(n[i.monatKey]??[]).filter(h=>h.ist!=null&&h.ist>0),r=c.reduce((h,f)=>h+(f.ist??0),0),o=c.reduce((h,f)=>h+(f.soll??0),0),d=r-o,u=(g=i.glz)==null?void 0:g.saldoGesamt;return`
          <a href="#/monat/${i.monatKey}" class="card" style="text-decoration: none; color: inherit; display: block;">
            <div class="card-split" style="margin-bottom: 12px;">
              <h2 style="margin: 0;">${Je(i.monatKey)}</h2>
              <span class="saldo-trend ${u>.05?"up":u<-.05?"down":"flat"}" style="margin: 0; font-size: 12px;">
                Saldo: <strong>${B(u??0,{signed:!0})}</strong>
              </span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 12px;">
              <div>
                <div style="color: var(--fg-subtle); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Arbeitstage</div>
                <div style="font-size: 22px; font-weight: 600;" class="tabular">${c.length}</div>
              </div>
              <div>
                <div style="color: var(--fg-subtle); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Ist / Soll</div>
                <div style="font-size: 14px; font-weight: 500;" class="tabular">${r.toFixed(1)} / ${o.toFixed(1)}h</div>
              </div>
              <div>
                <div style="color: var(--fg-subtle); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Diff</div>
                <div class="tabular" style="font-size: 14px; font-weight: 500; color: ${d>.05?"var(--success)":d<-.05?"var(--danger)":"var(--fg)"};">${B(d,{signed:!0})}</div>
              </div>
            </div>
          </a>
        `}).join("")}
    </div>
  `}async function Ks({params:e,root:t}){const a=e.yyyymm,[n,s,i,l]=await Promise.all([_(),ie(),H(),ce()]),c=s.find(g=>g.monatKey===a),o=Ce(n,s).filter(g=>g.monatKey===a);if(!o.length){t.innerHTML=`<h1 class="view-title">Monat ${Je(a)}</h1><p class="view-subtitle">Keine Daten für diesen Monat.</p><a href="#/monat" class="btn">← Alle Monate</a>`;return}const d=l!=null&&l.stichtagAuswertung?new Date(l.stichtagAuswertung):new Date,u=Se(n,i,d).filter(g=>g.datum.startsWith(a));t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat" class="btn sm">← Alle Monate</a>
    </div>
    <h1 class="view-title">${Je(a)}</h1>
    <p class="view-subtitle">${o.length} Tage · ${u.length} Auffälligkeiten</p>

    ${c?Ws(c):""}

    <div class="card" style="margin-bottom: 24px;">
      <h2>Saldo-Verlauf</h2>
      <div class="chart-wrap tall"><canvas id="chart-monat"></canvas></div>
    </div>

    ${u.length?`
      <div class="card" style="margin-bottom: 24px;">
        <h2>Auffälligkeiten</h2>
        ${u.map(g=>Bs(g)).join("")}
      </div>
    `:""}

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Wochen</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">Klicke auf eine Woche für die Detailansicht</span>
      </div>
      ${Cs(o)}
    </div>

    <div class="card">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Tage</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">Klick auf eine Zeile für Tag-Details · H/M zum Kopieren</span>
      </div>
      <div id="tage-liste-monat">${_e(o.slice().reverse(),{warnungen:u})}</div>
    </div>
  `,requestAnimationFrame(()=>{Ve(t.querySelector("#chart-monat"),o)}),st(t.querySelector("#tage-liste-monat"))}function Ws(e){var i,l,c,r;const t=((i=e.glz)==null?void 0:i.saldoGesamt)??0,a=((l=e.glz)==null?void 0:l.saldoVorperiode)??0,n=((c=e.glz)==null?void 0:c.saldoAktuellePeriode)??0,s=o=>o>.05?"var(--success)":o<-.05?"var(--danger)":"var(--fg)";return`
    <div class="grid cols-4" style="margin-bottom: 24px;">
      <div class="card">
        <h3>GLZ-Saldo gesamt</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${s(t)};">${B(t,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Vorperiode</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${s(a)};">${B(a,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Akt. Periode</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${s(n)};">${B(n,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Produktivstd.</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${B(((r=e.zeitkonten)==null?void 0:r.produktivstunden)??0,{suffix:""})}</div>
      </div>
    </div>
  `}function Cs(e){var n;const t={};for(const s of e)t[n=s.wocheKey]??(t[n]={key:s.wocheKey,tage:[],ist:0,soll:0}),t[s.wocheKey].tage.push(s),t[s.wocheKey].ist+=de(s),t[s.wocheKey].soll+=Me(s);const a=Object.keys(t).sort();return a.length?a.map(s=>{var u;const i=t[s],l=+(i.ist-i.soll).toFixed(2),c=l>.05?"var(--success)":l<-.05?"var(--danger)":"var(--fg-muted)",r=(u=i.tage[0])==null?void 0:u.datum,o=r?$e(L(r)):"",d=s.split("-")[1]||"?";return`
      <a href="#/woche/${s}" class="list-item" style="text-decoration: none; color: inherit;">
        <div class="tabular" style="font-size: 16px; font-weight: 600; color: var(--fg-muted); min-width: 80px;">KW ${w(d)}</div>
        <div>
          <div class="list-item-title tabular">${w(o)}</div>
          <div class="list-item-sub">${i.tage.length} Tage · Ist ${i.ist.toFixed(2).replace(".",",")}h · Soll ${i.soll.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="tabular" style="font-weight: 600; font-size: 16px; color: ${c};">${B(l,{signed:!0})}</div>
        <div style="color: var(--fg-subtle);">→</div>
      </a>
    `}).join(""):'<p style="color: var(--fg-muted);">Keine Wochen.</p>'}function Bs(e){return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i"}</div>
      <div class="alert-body">
        <div class="alert-title">${w(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${w(e.beschreibung)}</p>
        ${e.mailVorlageKey?`<div class="alert-actions"><a href="#/" class="btn primary sm">Zum Dashboard</a><a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a></div>`:""}
      </div>
    </div>
  `}function Je(e){const[t,a]=e.split("-"),n=new Date(parseInt(t),parseInt(a)-1,1);return P(n,"LLLL yyyy",{locale:j})}function Vs(e){return`<div class="empty-state"><div class="empty-state-icon">📭</div><p>${w(e)}</p><a href="#/daten" class="btn primary">Zu Daten</a></div>`}async function _s({root:e}){var s;const t=await _();if(!t.length){e.innerHTML='<h1 class="view-title">Wochen</h1><p class="view-subtitle">Noch keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a={};for(const i of t)a[s=i.wocheKey]??(a[s]={key:i.wocheKey,tage:[],ist:0,soll:0}),a[i.wocheKey].tage.push(i),a[i.wocheKey].ist+=de(i),a[i.wocheKey].soll+=Me(i);const n=Object.keys(a).sort().reverse();e.innerHTML=`
    <h1 class="view-title">Wochen</h1>
    <p class="view-subtitle">${n.length} Wochen erfasst.</p>

    <div>
      ${n.map(i=>{var u;const l=a[i],c=+(l.ist-l.soll).toFixed(2),r=c>.05?"var(--success)":c<-.05?"var(--danger)":"var(--fg-muted)",o=(u=l.tage[0])==null?void 0:u.datum,d=o?$e(L(o)):"";return`
          <a href="#/woche/${i}" class="list-item">
            <div class="tabular" style="font-size: 16px; font-weight: 600; color: var(--fg-muted); min-width: 80px;">${w(Qt(i))}</div>
            <div>
              <div class="list-item-title tabular">${w(d)}</div>
              <div class="list-item-sub">${l.tage.length} Tage · Ist ${l.ist.toFixed(2).replace(".",",")}h · Soll ${l.soll.toFixed(2).replace(".",",")}h</div>
            </div>
            <div class="tabular" style="font-weight: 600; font-size: 16px; color: ${r};">${B(c,{signed:!0})}</div>
            <div style="color: var(--fg-subtle);">→</div>
          </a>
        `}).join("")}
    </div>
  `}async function Is({params:e,root:t}){const a=e.yyyykw,[n,s,i,l]=await Promise.all([_(),ie(),H(),ce()]),r=Ce(n,s).filter(m=>m.wocheKey===a);if(!r.length){t.innerHTML=`<h1 class="view-title">KW ${w(a)}</h1><p>Keine Daten.</p><a href="#/woche" class="btn">← Alle Wochen</a>`;return}const o=r.reduce((m,b)=>m+de(b),0),d=r.reduce((m,b)=>m+Me(b),0),u=+(o-d).toFixed(2),g=m=>m>.05?"var(--success)":m<-.05?"var(--danger)":"var(--fg)",h=l!=null&&l.stichtagAuswertung?new Date(l.stichtagAuswertung):new Date,f=Se(n,i,h).filter(m=>r.some(b=>b.datum===m.datum));t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/woche" class="btn sm">← Alle Wochen</a>
    </div>
    <h1 class="view-title">${w(Qt(a))}</h1>
    <p class="view-subtitle">${r.length} Tage · ${f.length} Auffälligkeiten</p>

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${o.toFixed(2).replace(".",",")}h</div>
      </div>
      <div class="card">
        <h3>Soll-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${d.toFixed(2).replace(".",",")}h</div>
      </div>
      <div class="card">
        <h3>Differenz</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${g(u)};">${B(u,{signed:!0})}</div>
      </div>
    </div>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Saldo-Verlauf</h2>
      <div class="chart-wrap"><canvas id="chart-woche"></canvas></div>
    </div>

    ${f.length?`
      <div class="card" style="margin-bottom: 24px;">
        <h2>Auffälligkeiten</h2>
        ${f.map(m=>Os(m)).join("")}
      </div>
    `:""}

    <div class="card">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Tage</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">Klick auf eine Zeile für Tag-Details · H/M zum Kopieren</span>
      </div>
      <div id="tage-liste-woche">${_e(r,{warnungen:f})}</div>
    </div>
  `,requestAnimationFrame(()=>{Ve(t.querySelector("#chart-woche"),r)}),st(t.querySelector("#tage-liste-woche"))}function Os(e){return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i"}</div>
      <div class="alert-body">
        <div class="alert-title">${w(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${w(e.beschreibung)}</p>
        ${e.mailVorlageKey?`<div class="alert-actions"><a href="#/" class="btn primary sm">Zum Dashboard</a><a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a></div>`:""}
      </div>
    </div>
  `}function Qt(e){const[t,a]=e.split("-");return`KW ${a} · ${t}`}async function Hs({params:e,root:t}){var o,d,u;const a=e.datum,n=await v.tage.get(a),s=await H();if(!n){t.innerHTML=`<h1 class="view-title">Tag nicht gefunden</h1><p>Für ${a} liegen keine Daten vor.</p><a href="#/" class="btn">← Dashboard</a>`;return}const i=L(a),l=n.tagestyp==="Stempelzeit"?Ot(n,s):null,c=We(i,s.berufsschulMuster),r=Kt(n.zeitSpannen);t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat/${a.slice(0,7)}" class="btn sm">← Zum Monat</a>
    </div>
    <h1 class="view-title">${Ct(i)}</h1>
    <p class="view-subtitle">${n.tagestyp??"Kein Typ"} · KW ${(o=n.wocheKey)==null?void 0:o.split("-")[1]}</p>

    ${r?`
      <div class="card kommen-gehen-hero" style="margin-bottom: 24px;">
        <div class="hint" style="text-transform: uppercase; letter-spacing: 0.05em; font-size: 11px; margin-bottom: 10px;">Tages-Rahmen</div>
        ${Wt(r,{size:32})}
      </div>
    `:""}

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${n.ist!=null?n.ist.toFixed(2).replace(".",",")+"h":"—"}</div>
        <div class="hint">= ${n.ist!=null?Le(n.ist):"—"}</div>
      </div>
      <div class="card">
        <h3>Soll-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${n.soll!=null?n.soll.toFixed(2).replace(".",",")+"h":"—"}</div>
      </div>
      <div class="card">
        <h3>Differenz</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${n.diff>.05?"var(--success)":n.diff<-.05?"var(--danger)":"var(--fg)"};">${n.diff!=null?B(n.diff,{signed:!0}):"—"}</div>
      </div>
    </div>

    <div class="grid cols-2" style="gap: 24px;">
      <div class="card">
        <h2>Zeitstempel</h2>
        ${(d=n.zeitSpannen)!=null&&d.length?n.zeitSpannen.map(g=>`
              <div class="tag-detail">
                <div class="tag-detail-label">${be(g.aktivitaet??"Stempelzeit")}</div>
                <div class="tag-detail-value tabular">${g.von??"—"} – ${g.bis??"—"}</div>
              </div>
            `).join(""):'<p class="hint">Keine Stempelzeiten für diesen Tag.</p>'}
      </div>

      <div class="card">
        <h2>Klassifikation</h2>
        <div class="tag-detail">
          <div class="tag-detail-label">Tagestyp</div>
          <div class="tag-detail-value">${n.tagestyp?`<span class="pill ${js(n.tagestyp)}">${be(n.tagestyp)}</span>`:"—"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Laut Profil</div>
          <div class="tag-detail-value">${c?"🎓 Berufsschultag erwartet":"Regulärer Werktag"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">TAZP-Code</div>
          <div class="tag-detail-value"><code>${be(n.tazp??"—")}</code></div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Monat</div>
          <div class="tag-detail-value">${be(n.monatKey)}</div>
        </div>
      </div>

      ${l&&!l.keinAnspruch?`
        <div class="card" style="grid-column: 1 / -1;">
          <h2>Pausen-Analyse</h2>
          <div class="grid cols-2">
            <div>
              <div class="tag-detail">
                <div class="tag-detail-label">Arbeitszeit (netto)</div>
                <div class="tag-detail-value tabular">${(u=l.arbeitszeitOhnePause)==null?void 0:u.toFixed(2).replace(".",",")}h</div>
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
              <div class="alert-body">${be(l.warnung)}</div>
            </div>
          `:""}
        </div>
      `:""}
    </div>
  `}function js(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function be(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const Ns=[{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:"alles",label:"Alles"}];async function Rs({root:e}){var i;const[t,a]=await Promise.all([_(),ie()]);if(!t.length){e.innerHTML='<h1 class="view-title">Analytics</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}let n=t.length>30?30:"alles";e.innerHTML=`
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
          ${Ns.map(l=>{const c=typeof l.key=="number"&&l.key>t.length;return`<button type="button" data-key="${l.key}" class="${n===l.key?"active":""}" ${c?'disabled style="opacity:0.4"':""}>${l.label}</button>`}).join("")}
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
  `;const s=()=>n==="alles"?t:t.slice(-n);requestAnimationFrame(()=>{On(e.querySelector("#c-saldo"),a),qn(e.querySelector("#c-wochen"),t),ht(e.querySelector("#c-startend"),s()),Nn(e.querySelector("#c-wochentag"),t),jn(e.querySelector("#c-pausen"),t),Rn(e.querySelector("#c-donut"),t),Hn(e.querySelector("#c-alle-tage"),t.slice(-30))}),(i=e.querySelector("#startend-zeitraum"))==null||i.addEventListener("click",l=>{const c=l.target.closest("button[data-key]");if(!c||c.disabled)return;const r=c.getAttribute("data-key"),o=r==="alles"?"alles":parseInt(r,10);o!==n&&(n=o,e.querySelectorAll("#startend-zeitraum button").forEach(d=>d.classList.toggle("active",d===c)),ht(e.querySelector("#c-startend"),s()))})}async function qe({params:e,root:t}){var ge,re;const[a,n,s,i]=await Promise.all([_(),ie(),H(),ce()]);if(!a.length){t.innerHTML=`
      <h1 class="view-title">Kalender</h1>
      <p class="view-subtitle">Noch keine Daten geladen.</p>
      <a href="#/daten" class="btn primary">Zum Upload</a>`;return}const l=[...new Set(a.map(M=>M.monatKey))].sort(),c=e.yyyymm,r=l.includes(c)?c:l[l.length-1],o=a.filter(M=>M.monatKey===r),d=[...new Set(o.map(M=>M.wocheKey))].sort(),u=e.yyyykw,g=d.includes(u)?u:d[0],h=n.find(M=>M.monatKey===r),f=((ge=h==null?void 0:h.glz)==null?void 0:ge.saldoGesamt)??null,m=((re=h==null?void 0:h.glz)==null?void 0:re.saldoVorperiode)??null,b=f!=null&&m!=null?+(f-m).toFixed(2):null,p=l.indexOf(r),$=p>0?l[p-1]:null,k=p<l.length-1?l[p+1]:null,y=Zs(r),x=Ce(a,n).filter(M=>M.wocheKey===g),z=x.reduce((M,R)=>M+de(R),0),D=x.reduce((M,R)=>M+Me(R),0),V=+(z-D).toFixed(2),E=M=>M>.05?"var(--success)":M<-.05?"var(--danger)":"var(--fg)",I=i!=null&&i.stichtagAuswertung?new Date(i.stichtagAuswertung):new Date,N=Se(a,s,I),ue=N.filter(M=>x.some(R=>R.datum===M.datum)),Ie=N.filter(M=>o.some(R=>R.datum===M.datum)).length,Oe=d.map(M=>{var lt;const he=(lt=o.filter(He=>He.wocheKey===M).sort((He,ra)=>He.datum.localeCompare(ra.datum))[0])==null?void 0:lt.datum,ia=he?$e(L(he)):"";return{wk:M,kw:M.split("-")[1],range:ia}});t.innerHTML=`
    <h1 class="view-title">Kalender</h1>
    <p class="view-subtitle">Monat &amp; Woche zentral — links/rechts wechseln, unten die Wochen-Tabs.</p>

    <!-- Monats-Switcher -->
    <div class="card kalender-monat-bar">
      <div class="kalender-monat-nav">
        <a class="btn sm kalender-monat-btn ${$?"":"is-disabled"}"
           ${$?`href="#/kalender/${$}"`:'aria-disabled="true"'}
           title="Vorheriger Monat">←</a>
        <div class="kalender-monat-titel">
          <h2 style="margin: 0;">${w(y)}</h2>
          <div class="hint">${o.length} Tage · ${Ie} Auffälligkeiten</div>
        </div>
        <a class="btn sm kalender-monat-btn ${k?"":"is-disabled"}"
           ${k?`href="#/kalender/${k}"`:'aria-disabled="true"'}
           title="Nächster Monat">→</a>
      </div>
      <div class="kalender-monat-saldo">
        ${f!=null?`
          <div class="kalender-monat-saldo-item">
            <span class="kalender-monat-saldo-label">Saldo Monatsende</span>
            <span class="tabular kalender-monat-saldo-wert" style="color: ${E(f)};">${B(f,{signed:!0})}</span>
          </div>
        `:""}
        ${b!=null?`
          <div class="kalender-monat-saldo-item">
            <span class="kalender-monat-saldo-label">Bewegung im Monat</span>
            <span class="tabular kalender-monat-saldo-wert" style="color: ${E(b)};">${B(b,{signed:!0})}</span>
          </div>
        `:""}
      </div>
    </div>

    <!-- Wochen-Tabs -->
    <div class="kalender-wochen-tabs" role="tablist" aria-label="Wochen des Monats">
      ${Oe.map(({wk:M,kw:R,range:he})=>`
        <a href="#/kalender/${r}/${M}"
           class="kalender-wochen-tab ${M===g?"active":""}"
           role="tab" aria-selected="${M===g}"
           title="${w(he)}">
          <span class="kalender-wochen-tab-kw">KW ${w(R)}</span>
          <span class="kalender-wochen-tab-range">${w(he)}</span>
        </a>`).join("")}
    </div>

    ${x.length===0?`
      <p class="hint" style="text-align: center; padding: 32px;">Keine Tage für diese Woche im PDF.</p>
    `:`
      <!-- Wochen-Detail -->
      <div class="grid cols-3" style="margin-bottom: 24px;">
        <div class="card">
          <h3>Ist-Stunden</h3>
          <div class="tabular" style="font-size: 28px; font-weight: 650;">${z.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="card">
          <h3>Soll-Stunden</h3>
          <div class="tabular" style="font-size: 28px; font-weight: 650;">${D.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="card">
          <h3>Differenz</h3>
          <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${E(V)};">${B(V,{signed:!0})}</div>
        </div>
      </div>

      <div class="card" style="margin-bottom: 24px;">
        <h2>Saldo-Verlauf in dieser Woche</h2>
        <div class="chart-wrap"><canvas id="chart-kalender-woche"></canvas></div>
      </div>

      ${ue.length?`
        <div class="card" style="margin-bottom: 24px;">
          <h2>Auffälligkeiten in KW ${w(g.split("-")[1]||"?")}</h2>
          ${ue.map(M=>qs(M)).join("")}
        </div>
      `:""}

      <div class="card">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Tage</h2>
          <span style="color: var(--fg-muted); font-size: 13px;">Klick auf eine Zeile für Tag-Details · H/M zum Kopieren</span>
        </div>
        <div id="tage-liste-kalender">${_e(x,{warnungen:ue})}</div>
      </div>
    `}
  `,x.length&&(requestAnimationFrame(()=>{const M=t.querySelector("#chart-kalender-woche");M&&Ve(M,x)}),st(t.querySelector("#tage-liste-kalender")))}function qs(e){return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i"}</div>
      <div class="alert-body">
        <div class="alert-title">${w(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${w(e.beschreibung)}</p>
        ${e.mailVorlageKey?`<div class="alert-actions"><a href="#/mails" class="btn primary sm">Zur Mail-Vorlage</a><a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a></div>`:""}
      </div>
    </div>`}function Zs(e){const[t,a]=e.split("-"),n=new Date(parseInt(t,10),parseInt(a,10)-1,1);return P(n,"MMMM yyyy",{locale:j})}const Ye="Fahrgelderstattung",Gs="C4",ea="C5",ta="F4",aa="F5",oe=10,Mt=19;function zt(e,t){return e.filter(a=>a.monatKey===t).filter(a=>a.tagestyp==="Berufsschule").filter(a=>(a.ist??0)>0).sort((a,n)=>a.datum.localeCompare(n.datum))}async function Us(e){const t=(await tt(async()=>{const{default:m}=await import("./exceljs.min-BhfpbegZ.js").then(b=>b.e);return{default:m}},__vite__mapDeps([0,1]))).default,a=new t.Workbook;await a.xlsx.load(e);const n=a.getWorksheet(Ye)??a.worksheets[0];if(!n)return{ok:!1,fehler:"Excel hat keine Arbeitsblätter."};const s=m=>{const b=n.getCell(m).value;return b==null?"":typeof b=="object"&&b.text?String(b.text):typeof b=="object"&&b.richText?b.richText.map(p=>p.text).join(""):String(b)},i=s(ea).trim(),l=s(ta).trim(),c=s(aa).trim(),r=(l.match(/\d+/)||[""])[0],o=(c.match(/\d+/)||[""])[0],d=s(`C${oe}`).trim(),u=s(`E${oe}`).trim(),g=n.getCell(`G${oe}`).value,h=typeof g=="number"?g:parseFloat(String(g).replace(",","."))||0;let f=null;try{const m=new Set(n.getImages().map(p=>parseInt(p.imageId,10))),b=(a.media||[]).map((p,$)=>({media:p,index:$})).filter(({media:p,index:$})=>(p==null?void 0:p.type)==="image"&&!m.has($)&&p.buffer);if(b.length>0){b.sort((y,S)=>(S.media.buffer.length||0)-(y.media.buffer.length||0));const p=b[0].media,$=p.buffer,k=$ instanceof ArrayBuffer?$:$.buffer?$.buffer.slice($.byteOffset||0,($.byteOffset||0)+$.byteLength):null;if(k){const y=(p.extension||"").toLowerCase();f={bytes:k,extension:y==="jpg"?"jpeg":y||"png",quelle:"auto-aus-vorlage"}}}}catch(m){console.warn("[fahrtgeld] Unterschrift-Auto-Extraktion fehlgeschlagen:",m)}return{ok:!0,konstanten:{name:i,persNr:r,kst:o,vonHaltestelle:d,nachHaltestelle:u,betragProTag:h},unterschriftAuto:f}}async function Js({templateBytes:e,monatKey:t,bsTage:a,konstanten:n,unterschriftBytes:s,unterschriftExtension:i}){const l=(await tt(async()=>{const{default:x}=await import("./exceljs.min-BhfpbegZ.js").then(z=>z.e);return{default:x}},__vite__mapDeps([0,1]))).default,c=new l.Workbook;await c.xlsx.load(e);const r=c.getWorksheet(Ye)??c.worksheets[0];if(!r)throw new Error(`Sheet "${Ye}" nicht in der Vorlage gefunden.`);const[o,d]=t.split("-").map(x=>parseInt(x,10)),u=new Date(o,d-1,1,12,0,0),g=P(u,"MMMM yy",{locale:j}),h=r.getCell(Gs);h.value=g,h.numFmt="@",r.getCell(ea).value=n.name,r.getCell(ta).value=`Pers.-Nr.: ${n.persNr}`,r.getCell(aa).value=`KST: ${n.kst}`;for(let x=oe;x<=Mt;x++)r.getCell(`A${x}`).value=null,r.getCell(`C${x}`).value=null,r.getCell(`E${x}`).value=null,r.getCell(`G${x}`).value=null;const f=Mt-oe+1,m=a.slice(0,f);for(let x=0;x<m.length;x++){const z=m[x],D=oe+x;r.getCell(`A${D}`).value=L(z.datum),r.getCell(`C${D}`).value=n.vonHaltestelle,r.getCell(`E${D}`).value=n.nachHaltestelle,r.getCell(`G${D}`).value=n.betragProTag}const p=P(new Date,"dd.MM.yyyy"),$=r.getCell("A21");if($.value=p,$.alignment={vertical:"bottom",horizontal:"center",wrapText:!1},s&&i){const x=c.addImage({buffer:s,extension:i}),z=ti(s),D=180,V=50;let E=D,I=V;if(z&&z.width>0&&z.height>0){const N=Math.min(D/z.width,V/z.height);E=Math.round(z.width*N),I=Math.round(z.height*N)}r.addImage(x,{tl:{col:.15,row:20.05},ext:{width:E,height:I},editAs:"oneCell"})}const k=await c.xlsx.writeBuffer(),y=new Blob([k],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),S=Ys(n.name,u);return{blob:y,dateiname:S,anzahlTage:m.length,ueberzaehlig:a.length-m.length}}function Ys(e,t){const a=P(t,"MMMM",{locale:j}),n=P(t,"yy");let s=e;const i=/^(.+?),\s*(.+)$/.exec(e);return i&&(s=`${i[2].trim()} ${i[1].trim()}`),`Fahrtgeld ${s} ${a} ${n}.xlsx`}function Xs(e){const[t,a]=e.split("-").map(n=>parseInt(n,10));return P(new Date(t,a-1,1),"MMMM yyyy",{locale:j})}function Qs(e){const t=new Set;for(const a of e)a.tagestyp==="Berufsschule"&&(a.ist??0)>0&&t.add(a.monatKey);return[...t].sort().reverse()}function ei(e,t,a,n){var g,h;const s=t==null?void 0:t.berufsschulMuster;if(!s||!((g=s.wochentageWoechentlich)!=null&&g.length)&&!((h=s.wochentage14Taegig)!=null&&h.length))return{ausstehend:[],imMonatGesamt:a.length,vorhandenAnzahl:a.length};const[i,l]=e.split("-").map(f=>parseInt(f,10)),c=new Date(i,l-1,1),r=new Date(i,l,0),o=new Set(a.map(f=>f.datum)),d=[];let u=new Date(c);for(;u<=r;){if(!et(u)&&We(u,s)){const f=P(u,"yyyy-MM-dd");u>n&&!o.has(f)&&d.push(f)}u=Qe(u,1)}return{ausstehend:d,imMonatGesamt:a.length+d.length,vorhandenAnzahl:a.length}}function ti(e){const t=e instanceof ArrayBuffer?e:e!=null&&e.buffer?e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength):null;if(!t||t.byteLength<24)return null;const a=new DataView(t);if(a.getUint32(0)===2303741511&&a.getUint32(4)===218765834)return{width:a.getUint32(16),height:a.getUint32(20)};if(a.getUint16(0)===65496){let n=2;for(;n+9<a.byteLength;){if(a.getUint8(n)!==255)return null;const s=a.getUint8(n+1);if(s>=192&&s<=207&&s!==196&&s!==200&&s!==204)return{height:a.getUint16(n+5),width:a.getUint16(n+7)};const l=a.getUint16(n+2);if(l<2)return null;n+=2+l}}return null}function ai(e,t){const a=URL.createObjectURL(e),n=document.createElement("a");n.href=a,n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(()=>URL.revokeObjectURL(a),1e3)}async function ke({root:e}){var d,u,g,h,f,m,b,p,$;const t=await we();if(!t){ni(e);return}const[a,n,s]=await Promise.all([_(),H(),ce()]),i=s!=null&&s.stichtagAuswertung?new Date(s.stichtagAuswertung):new Date,l=Qs(a),c=new Date,r=`${c.getFullYear()}-${String(c.getMonth()+1).padStart(2,"0")}`;l.includes(r)||l.unshift(r);const o=l;e.innerHTML=`
    <h1 class="view-title">Fahrtgeld</h1>
    <p class="view-subtitle">Generiere die monatliche Fahrtgelderstattungs-Excel mit deinen erkannten Berufsschultagen.</p>

    <div class="card fahrtgeld-template-info" style="margin-bottom: 24px;">
      <div class="card-split">
        <div>
          <h3 style="margin: 0;">Vorlage geladen</h3>
          <p class="hint" style="margin: 4px 0 0;">
            ${w(t.konstanten.name||"—")} ·
            Pers.-Nr. ${w(t.konstanten.persNr||"—")} ·
            KST ${w(t.konstanten.kst||"—")}
          </p>
          <p class="hint" style="margin: 4px 0 0;">
            ${w(t.konstanten.vonHaltestelle||"—")} → ${w(t.konstanten.nachHaltestelle||"—")} ·
            ${(t.konstanten.betragProTag??0).toFixed(2).replace(".",",")} € pro Tag
          </p>
        </div>
        <div style="display: flex; gap: 8px;">
          <button class="btn sm" id="btn-template-replace">Vorlage ersetzen</button>
          <button class="btn sm" id="btn-template-clear">Vorlage löschen</button>
        </div>
      </div>
    </div>

    <div class="card fahrtgeld-signature-info" style="margin-bottom: 24px;">
      <div class="card-split">
        <div>
          <h3 style="margin: 0;">Unterschrift</h3>
          ${(d=t.unterschrift)!=null&&d.dataUrl?`
            <p class="hint" style="margin: 4px 0 8px;">Wird in jede generierte Excel als Auszubildender-Unterschrift eingefügt. Datum (Tag der Generierung) wird automatisch gesetzt.</p>
            <div class="fahrtgeld-signature-preview">
              <img src="${w(t.unterschrift.dataUrl)}" alt="Unterschrift" />
            </div>
          `:`
            <p class="hint" style="margin: 4px 0 0;">Noch keine Unterschrift hinterlegt. Aktuell bleibt das Feld in der Excel leer (nur das Datum wird gesetzt).</p>
          `}
        </div>
        <div style="display: flex; gap: 8px; align-items: flex-start;">
          <button class="btn sm" id="btn-signature-upload">${(u=t.unterschrift)!=null&&u.dataUrl?"Ersetzen":"Hochladen"}</button>
          ${(g=t.unterschrift)!=null&&g.dataUrl?'<button class="btn sm" id="btn-signature-clear">Entfernen</button>':""}
        </div>
      </div>
    </div>

    ${o.length===0?`
      <div class="empty-state">
        <div class="empty-state-icon">📅</div>
        <h2>Keine Berufsschultage erkannt</h2>
        <p>Lade einen Zeitnachweis unter <a href="#/daten">Daten</a> hoch — danach erscheinen hier die Monate.</p>
      </div>
    `:`
      <div class="card">
        <h2>Verfügbare Monate</h2>
        <p class="hint" style="margin-bottom: 16px;">Pro Monat zählen nur Berufsschul-Tage, an denen du nachweislich anwesend warst (gestempelte Stunden &gt; 0). Krank, Urlaub und Stempelzeit-Tage werden ausgefiltert.</p>
        <div class="fahrtgeld-monate">
          ${o.map(k=>{const y=zt(a,k),S=+(y.length*(t.konstanten.betragProTag??0)).toFixed(2),x=y.length>10,z=ei(k,n,y,i),D=z.ausstehend.length,V=+((y.length+D)*(t.konstanten.betragProTag??0)).toFixed(2),E=D>0?z.ausstehend.map(N=>K(L(N))).join(", "):"",I=`data-monat="${w(k)}" data-offen="${D}" data-offen-liste="${w(E)}"`;return`
              <div class="fahrtgeld-monat-row${D>0?" has-pending":""}">
                <div class="fahrtgeld-monat-titel">
                  <div class="fahrtgeld-monat-name">${w(Xs(k))}</div>
                  <div class="hint">
                    ${y.length} BS-Tag${y.length===1?"":"e"} erfasst · ${S.toFixed(2).replace(".",",")} €
                    ${D>0?`<br><span class="fahrtgeld-pending">⏳ Laut deinem Schul-Rhythmus kommen noch ${D} BS-Tag${D===1?"":"e"}: ${w(E)}. Mit allen wären's ${y.length+D} Tage = ${V.toFixed(2).replace(".",",")} €.</span>`:""}
                    ${x?`<br><span style="color: var(--warn); font-weight: 600;">· ${y.length-10} überzählig (max 10/Monat)</span>`:""}
                  </div>
                </div>
                <button class="btn primary fahrtgeld-generieren" ${I} ${y.length===0?"disabled":""}>
                  ${y.length===0?"Noch keine BS-Tage":"Excel generieren"}
                </button>
              </div>
            `}).join("")}
        </div>
      </div>
    `}

    <input type="file" id="fahrtgeld-replace-input" accept=".xlsx,.xls,.xlsm,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel" style="display: none;" />
    <input type="file" id="fahrtgeld-signature-input" accept="image/png,image/jpeg,.png,.jpg,.jpeg" style="display: none;" />
  `,(h=e.querySelector("#btn-template-replace"))==null||h.addEventListener("click",()=>{e.querySelector("#fahrtgeld-replace-input").click()}),(f=e.querySelector("#fahrtgeld-replace-input"))==null||f.addEventListener("change",async k=>{var S;const y=(S=k.target.files)==null?void 0:S[0];y&&await na(y,e)}),(m=e.querySelector("#btn-template-clear"))==null||m.addEventListener("click",async()=>{confirm("Vorlage wirklich löschen? Beim nächsten Öffnen wirst du gebeten, eine neue hochzuladen.")&&(await qa(),F("Vorlage gelöscht."),ke({root:e}))}),(b=e.querySelector("#btn-signature-upload"))==null||b.addEventListener("click",()=>{e.querySelector("#fahrtgeld-signature-input").click()}),(p=e.querySelector("#fahrtgeld-signature-input"))==null||p.addEventListener("change",async k=>{var S;const y=(S=k.target.files)==null?void 0:S[0];y&&await si(y,e)}),($=e.querySelector("#btn-signature-clear"))==null||$.addEventListener("click",async()=>{if(!confirm("Unterschrift wirklich entfernen?"))return;const k=await we();k&&(await at({...k,unterschrift:null}),F("Unterschrift entfernt."),ke({root:e}))}),e.querySelectorAll(".fahrtgeld-generieren").forEach(k=>{k.addEventListener("click",async()=>{var D,V;const y=k.getAttribute("data-monat"),S=parseInt(k.getAttribute("data-offen")||"0",10),x=k.getAttribute("data-offen-liste")||"";if(S>0&&!confirm(`Achtung: Laut deinem Schul-Rhythmus kommen in diesem Monat noch ${S} BS-Tag${S===1?"":"e"}:

${x}

Diese Tage sind noch nicht im Zeitnachweis-PDF und werden in der Excel fehlen.

Trotzdem jetzt für die bisher erfassten Tage generieren?`))return;k.disabled=!0;const z=k.textContent;k.textContent="Erstelle …";try{const E=await we(),I=await _(),N=zt(I,y);if(!N.length){Z("Für diesen Monat sind keine BS-Anwesenheits-Tage erkannt.",{type:"warn"});return}const ue=(D=E.unterschrift)==null?void 0:D.bytes,Ie=(V=E.unterschrift)==null?void 0:V.extension,{blob:Oe,dateiname:ge,ueberzaehlig:re}=await Js({templateBytes:E.bytes,monatKey:y,bsTage:N,konstanten:E.konstanten,unterschriftBytes:ue,unterschriftExtension:Ie});ai(Oe,ge),F(`Excel erstellt: ${ge}${re>0?` (${re} weiterer Tag${re===1?"":"e"} passte/n nicht in die Vorlage)`:""}`)}catch(E){console.error("Fahrtgeld-Generierung fehlgeschlagen:",E),Z(`Fehler: ${E.message||E}`,{type:"error",duration:8e3})}finally{k.disabled=!1,k.textContent=z}})})}function ni(e){var t,a;e.innerHTML=`
    <h1 class="view-title">Fahrtgeld</h1>
    <p class="view-subtitle">Lade einmalig deine bestehende Fahrtgeld-Excel hoch — die App lernt dein Layout und generiert ab dann jeden Monat automatisch.</p>

    <div class="card fahrtgeld-empty">
      <div class="fahrtgeld-empty-icon">🚌</div>
      <h2>Vorlage hochladen</h2>
      <p class="hint" style="max-width: 520px; margin: 8px auto 24px;">
        Wähle eine alte Fahrtgelderstattungs-Excel von dir aus. Aus ihr liest die App
        deinen Namen, Personalnummer, Kostenstelle, Haltestellen und Tagessatz aus.
        Das Layout (Logo, Unterschriftsfelder, Form-Nummer) bleibt 1:1 erhalten —
        wir tauschen jeden Monat nur Datums und Beträge aus.
      </p>
      <button class="btn primary lg" id="btn-template-upload">Vorlage auswählen</button>
      <input type="file" id="fahrtgeld-upload-input" accept=".xlsx,.xls,.xlsm,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel" style="display: none;" />
    </div>
  `,(t=e.querySelector("#btn-template-upload"))==null||t.addEventListener("click",()=>{e.querySelector("#fahrtgeld-upload-input").click()}),(a=e.querySelector("#fahrtgeld-upload-input"))==null||a.addEventListener("change",async n=>{var i;const s=(i=n.target.files)==null?void 0:i[0];s&&await na(s,e)})}async function si(e,t){try{if(!["image/png","image/jpeg"].includes(e.type)&&!/\.(png|jpe?g)$/i.test(e.name)){Z("Bitte ein PNG oder JPG hochladen.",{type:"warn"});return}const n=await e.arrayBuffer(),s=/\.png$/i.test(e.name)||e.type==="image/png"?"png":"jpeg",i=await new Promise((c,r)=>{const o=new FileReader;o.onload=()=>c(o.result),o.onerror=r,o.readAsDataURL(e)}),l=await we();if(!l){Z("Bitte zuerst eine Excel-Vorlage hochladen.",{type:"warn"});return}await at({...l,unterschrift:{bytes:n,extension:s,dataUrl:i,hochgeladenAm:new Date().toISOString()}}),F("Unterschrift gespeichert."),ke({root:t})}catch(a){console.error("Unterschrift-Upload fehlgeschlagen:",a),Z(`Fehler beim Verarbeiten: ${a.message||a}`,{type:"error",duration:8e3})}}async function na(e,t){try{const a=await e.arrayBuffer(),n=await Us(a);if(!n.ok){Z(`Vorlage nicht erkannt: ${n.fehler}`,{type:"error",duration:8e3});return}const s=await we();let i=s==null?void 0:s.unterschrift;if(!i&&n.unterschriftAuto){const l=ii(n.unterschriftAuto.bytes,n.unterschriftAuto.extension);i={bytes:n.unterschriftAuto.bytes,extension:n.unterschriftAuto.extension,dataUrl:l,quelle:"auto-aus-vorlage",hochgeladenAm:new Date().toISOString()}}await at({bytes:a,konstanten:n.konstanten,unterschrift:i,hochgeladenAm:new Date().toISOString(),dateiname:e.name}),n.unterschriftAuto&&!(s!=null&&s.unterschrift)?F(`Vorlage gespeichert: ${n.konstanten.name||e.name} (Unterschrift aus Vorlage übernommen)`):F(`Vorlage gespeichert: ${n.konstanten.name||e.name}`),ke({root:t})}catch(a){console.error("Vorlage-Upload fehlgeschlagen:",a),Z(`Fehler beim Verarbeiten: ${a.message||a}`,{type:"error",duration:8e3})}}function ii(e,t){const a=new Uint8Array(e);let n="";for(let l=0;l<a.length;l++)n+=String.fromCharCode(a[l]);const s=btoa(n);return`data:${t==="png"?"image/png":"image/jpeg"};base64,${s}`}async function ri({root:e}){const t=await _();if(!t.length){e.innerHTML='<h1 class="view-title">Berichtsheft</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a=[...new Set(t.map(i=>i.monatKey))].sort().reverse();e.innerHTML=`
    <h1 class="view-title">Berichtsheft-Export</h1>
    <p class="view-subtitle">Kopiere die Arbeitsstunden im HH:MM-Format direkt in dein Berichtsheft.</p>

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 16px; align-items: center;">
        <h2 style="margin: 0;">Filter</h2>
        <div style="display: flex; gap: 8px; align-items: center;">
          <label style="color: var(--fg-muted); font-size: 13px;">Monat:</label>
          <select id="filter-monat">
            <option value="">Alle</option>
            ${a.map(i=>`<option value="${i}">${ci(i)}</option>`).join("")}
          </select>
          <button class="btn sm" id="btn-copy-all">Alle sichtbaren kopieren</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div id="liste"></div>
    </div>
  `;const n=e.querySelector("#filter-monat");n.addEventListener("change",()=>s()),e.querySelector("#btn-copy-all").addEventListener("click",()=>{const i=e.querySelectorAll("#liste tr[data-copy]"),l=Array.from(i).map(c=>c.getAttribute("data-copy")).join(`
`);navigator.clipboard.writeText(l).then(()=>F(`${i.length} Zeilen kopiert.`))});function s(){const i=n.value,c=(i?t.filter(r=>r.monatKey===i):t).filter(r=>r.ist!=null&&r.ist>0&&r.tagestyp!=="Wochenende");e.querySelector("#liste").innerHTML=li(c),e.querySelectorAll(".copy-val").forEach(r=>{r.addEventListener("click",async()=>{const o=r.getAttribute("data-val");await navigator.clipboard.writeText(o),r.classList.add("ok");const d=r.textContent;r.textContent="✓ kopiert",setTimeout(()=>{r.classList.remove("ok"),r.textContent=d},1200)})})}s()}function li(e){return e.length?`
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
        ${e.map(t=>{const a=Le(t.ist),n=`${K(L(t.datum))}	${a}`;return`
            <tr data-copy="${Dt(n)}">
              <td class="tabular">${K(L(t.datum))}</td>
              <td>${oi(t.wochentag)}</td>
              <td>${t.tagestyp?`<span class="pill ${di(t.tagestyp)}">${sa(t.tagestyp)}</span>`:"—"}</td>
              <td class="num tabular">${t.ist.toFixed(2).replace(".",",")}</td>
              <td class="num tabular" style="font-weight: 600;">${a}</td>
              <td><button class="copy-val" data-val="${Dt(a)}">📋 ${a}</button></td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `:'<p style="color: var(--fg-muted);">Keine Tage in dieser Auswahl.</p>'}function oi(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function ci(e){const[t,a]=e.split("-");return P(new Date(parseInt(t),parseInt(a)-1,1),"LLLL yyyy",{locale:j})}function di(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function sa(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Dt(e){return sa(e)}async function ui({root:e}){const[t,a,n,s]=await Promise.all([_(),H(),ie(),nt()]),i=Object.fromEntries(s.map(r=>[r.key,r])),l=Se(t,a,new Date).filter(r=>r.mailVorlageKey),c=Ht(n);e.innerHTML=`
    <h1 class="view-title">Mail-Vorlagen</h1>
    <p class="view-subtitle">Vorformulierte Mails an die Zeitwirtschaft bei erkannten Fehlern im Zeitnachweis.</p>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Offene Warnungen mit Mail-Vorschlag</h2>
      <p class="hint" style="margin-bottom: 16px;">Diese Warnungen haben einen roten Schweregrad und sind eine direkte Mail wert.</p>

      ${l.length===0?'<div class="empty-state"><div class="empty-state-icon">✓</div><p>Keine akuten Warnungen — top.</p></div>':l.map(r=>gi(r,a,i)).join("")}

      ${c.length>0?`
        <h3 style="margin-top: 24px;">Saldo-Plausibilität</h3>
        ${c.map(r=>`
          <div class="alert severity-warn">
            <div class="alert-icon">⚠</div>
            <div class="alert-body">
              <div class="alert-title">${O(r.titel)}</div>
              <p style="margin: 4px 0; font-size: 13px;">${O(r.beschreibung)}</p>
            </div>
          </div>
        `).join("")}
      `:""}
    </div>

    <div class="card">
      <h2>Vorlagen verwalten</h2>
      <p class="hint" style="margin-bottom: 16px;">Passe die Texte an deinen Stil an. Platzhalter wie <code>{name}</code>, <code>{datum}</code>, <code>{wochentag}</code>, <code>{ist}</code>, <code>{soll}</code> werden automatisch gefüllt.</p>

      <div id="vorlagen-editor">
        ${Object.keys(xe).map(r=>{const o=Be(r,i[r]);return hi(o)}).join("")}
      </div>
    </div>
  `,fi(e),mi(e)}function gi(e,t,a){const n=Be(e.mailVorlageKey,a[e.mailVorlageKey]);if(!n)return"";const s=qt(t,e),i=Rt(n,s),l=Zt(t,n,s);return`
    <div class="alert severity-${e.schweregrad}" style="flex-direction: column; align-items: stretch;">
      <div style="display: flex; align-items: flex-start; gap: 12px;">
        <div class="alert-icon">${e.schweregrad==="error"?"!":"⚠"}</div>
        <div class="alert-body">
          <div class="alert-title">${O(e.titel)}</div>
          <p style="margin: 4px 0; font-size: 13px;">${O(e.beschreibung)}</p>
        </div>
      </div>
      <details style="margin-top: 12px;">
        <summary style="cursor: pointer; color: var(--fg-muted); font-size: 13px;">Mail-Vorschau anzeigen</summary>
        <div style="background: var(--surface-2); border-radius: var(--radius-md); padding: 12px; margin-top: 8px; font-family: var(--font-mono); font-size: 12px; white-space: pre-wrap; line-height: 1.5;">
<strong>An:</strong> ${O(t.zeitwirtschaftEmail||"")}
<strong>Betreff:</strong> ${O(i.betreff)}

${O(i.text)}
        </div>
      </details>
      <div class="alert-actions" style="margin-top: 12px;">
        <a class="btn primary sm" href="${l}" target="_blank" rel="noopener">Mail Vorschlag in Outlook →</a>
        <button class="btn sm btn-copy-mail" data-subject="${Xe(i.betreff)}" data-body="${Xe(i.text)}">📋 Betreff + Text kopieren</button>
      </div>
    </div>
  `}function hi(e){return`
    <div class="vorlagen-item" data-key="${e.key}" style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
      <div class="card-split" style="margin-bottom: 12px;">
        <div>
          <h3 style="text-transform: none; letter-spacing: 0; color: var(--fg); font-size: 16px;">${O(e.titel)}</h3>
          <p class="hint" style="margin: 4px 0;">${O(e.beschreibung)}</p>
        </div>
        <button class="btn sm btn-reset-vorlage" data-key="${e.key}">Auf Default zurücksetzen</button>
      </div>
      <div class="form-group">
        <label>Betreff</label>
        <input type="text" class="v-betreff" value="${Xe(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 240px;">${O(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function fi(e){e.querySelectorAll(".btn-save-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-key"),n=t.closest(".vorlagen-item"),s=n.querySelector(".v-betreff").value,i=n.querySelector(".v-text").value;await Ee(a,{betreff:s,text:i}),F("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-key"),n=xe[a];n&&confirm(`Vorlage "${n.titel}" auf Default zurücksetzen?`)&&(await Ee(a,{betreff:n.betreff,text:n.text}),F("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function mi(e){e.querySelectorAll(".btn-copy-mail").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-subject"),n=t.getAttribute("data-body"),s=`Betreff: ${a}

${n}`;await navigator.clipboard.writeText(s),F("Mail-Text kopiert.")})})}function O(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Xe(e){return O(e)}async function pi({root:e}){const[t,a]=await Promise.all([H(),nt()]),n=Object.fromEntries(a.map(s=>[s.key,s]));e.innerHTML=`
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
          ${Object.keys(xe).map(s=>{const i=Be(s,n[s]);return vi(i)}).join("")}
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
  `,e.querySelector("#pause-sel").addEventListener("change",async s=>{const i={...t,pausenRegel:s.target.value};await Pe(i),F("Pausen-Regel gespeichert.")}),e.querySelectorAll(".btn-save-vorlage").forEach(s=>{s.addEventListener("click",async()=>{const i=s.getAttribute("data-key"),l=s.closest(".vorlagen-item"),c=l.querySelector(".v-betreff").value,r=l.querySelector(".v-text").value;await Ee(i,{betreff:c,text:r}),F("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(s=>{s.addEventListener("click",async()=>{const i=s.getAttribute("data-key"),l=xe[i];l&&confirm(`Vorlage "${l.titel}" auf Default zurücksetzen?`)&&(await Ee(i,{betreff:l.betreff,text:l.text}),F("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function vi(e){return`
    <div class="vorlagen-item" data-key="${e.key}" style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
      <div class="card-split" style="margin-bottom: 12px;">
        <div>
          <h3 style="text-transform: none; letter-spacing: 0; color: var(--fg); font-size: 16px;">${Te(e.titel)}</h3>
          <p class="hint" style="margin: 4px 0;">${Te(e.beschreibung)}</p>
        </div>
        <button class="btn sm btn-reset-vorlage" data-key="${e.key}">Auf Default zurücksetzen</button>
      </div>
      <div class="form-group">
        <label>Betreff</label>
        <input type="text" class="v-betreff" value="${bi(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 200px;">${Te(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function Te(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function bi(e){return Te(e)}async function At(){document.documentElement.setAttribute("data-css-ready",""),La();const e=document.getElementById("content");await Oa()&&setTimeout(()=>{Z('Parser wurde aktualisiert. Bitte lade deinen Zeitnachweis unter "Daten" neu hoch.',{type:"info",duration:12e3})},500),await Ia(),await _a(),W("/",mt),W("/dashboard",mt),W("/analytics",Rs),W("/kalender",qe),W("/kalender/:yyyymm",qe),W("/kalender/:yyyymm/:yyyykw",qe),W("/monat",Fs),W("/monat/:yyyymm",Ks),W("/woche",_s),W("/woche/:yyyykw",Is),W("/tag/:datum",Hs),W("/berichtsheft",ri),W("/mails",ui),W("/fahrtgeld",ke),W("/profil",Ls),W("/daten",Ms),W("/einstellungen",pi),Ka(e),location.hash||Fa("/");try{const t=await v.tage.count();bs(t>0)&&setTimeout(()=>Jt(),700)}catch(t){console.warn("[boot] Tour-Auto-Start-Check fehlgeschlagen:",t)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",At):At();
