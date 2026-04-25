import{D as kt}from"./dexie-BODkcwel.js";import{b as fe,a as G,c as J,d as $t,f as D,e as Ye,i as Xe,s as St,g as Mt,p as zt,h as Dt,j as Pt,k as At,l as S,m as Tt}from"./datefns-Dlft8rFK.js";import{C as K,L as Et,B as Lt,D as Ft,S as Wt,a as Kt,b as Bt,P as Ct,A as Ot,c as Vt,d as It,T as _t,p as jt,e as Ht,i as Nt}from"./chartjs-CRgZvhTJ.js";import{_ as Rt,a as Zt}from"./pdfjs-BDGsuRSB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();function qt(){document.documentElement.setAttribute("data-theme","dark")}const Qe=[];function A(e,t){const a=e.split("/").filter(Boolean),n=[],s=new RegExp("^/?"+a.map(r=>r.startsWith(":")?(n.push(r.slice(1)),"([^/]+)"):Yt(r)).join("/")+"/?$");Qe.push({pattern:e,regex:s,paramNames:n,render:t})}function Gt(e){e.startsWith("#")||(e="#"+e),window.location.hash===e?C():window.location.hash=e}function Jt(e,{onNavigate:t}={}){window.addEventListener("hashchange",C),C.rootEl=e,C.onNavigate=t,C()}async function C(){var n;const e=C.rootEl,t=window.location.hash.slice(1)||"/",a=t.startsWith("/")?t:`/${t}`;for(const s of Qe){const r=s.regex.exec(a);if(r){const i={};s.paramNames.forEach((o,l)=>i[o]=decodeURIComponent(r[l+1])),(n=C.onNavigate)==null||n.call(C,a),Ut(a);try{e.classList.remove("view-enter"),await s.render({params:i,path:a,root:e}),e.classList.add("view-enter")}catch(o){console.error("Route render error:",o),e.innerHTML=`<div class="empty-state">
          <div class="empty-state-icon">⚠</div>
          <h2>Fehler beim Anzeigen</h2>
          <p>${Ee(o.message||String(o))}</p>
        </div>`}return}}e.innerHTML=`<div class="empty-state">
    <div class="empty-state-icon">?</div>
    <h2>Seite nicht gefunden</h2>
    <p>Die Route <code>${Ee(a)}</code> existiert nicht.</p>
    <a href="#/" class="btn primary">Zum Dashboard</a>
  </div>`}function Ut(e){document.querySelectorAll("[data-route]").forEach(a=>{const n=a.getAttribute("data-route"),s=n==="/"?e==="/":e===n||e.startsWith(n+"/");a.classList.toggle("active",s)});const t=e==="/"?"dashboard":e.split("/").filter(Boolean)[0];document.body.setAttribute("data-view",t||"dashboard")}function Yt(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Ee(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const Xt="modulepreload",Qt=function(e){return"/better-ess/"+e},Le={},ea=function(t,a,n){let s=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.allSettled(a.map(l=>{if(l=Qt(l),l in Le)return;Le[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Xt,c||(u.as="script"),u.crossOrigin="",u.href=l,o&&u.setAttribute("nonce",o),document.head.appendChild(u),c)return new Promise((g,h)=>{u.addEventListener("load",g),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(i){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i}return s.then(i=>{for(const o of i||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})},p=new kt("zeitnachweis");p.version(1).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"});p.version(2).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});p.version(3).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});p.version(4).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});p.version(5).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{const t=await e.table("profil").get("self");t&&(!t.zeitwirtschaftEmail||t.zeitwirtschaftEmail==="zeitwirtschaft@putzmeister.com")&&await e.table("profil").put({...t,zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com"})});p.version(6).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});p.version(7).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{const t=await e.table("profil").get("self");if(!t)return;let a=t.ueber18??!0;if(t.geburtsdatum){const s=new Date(t.geburtsdatum),r=new Date;a=r.getFullYear()-s.getFullYear()-(r<new Date(r.getFullYear(),s.getMonth(),s.getDate())?1:0)>=18}const n={id:"self",ueber18:a,sollStundenProWoche:t.sollStundenProWoche??35,sollStundenProTag:t.sollStundenProTag??7,berufsschulMuster:t.berufsschulMuster??{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null},zeitwirtschaftEmail:t.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:t.zeitwirtschaftAnrede||"Frau Kanarya",pausenRegel:t.pausenRegel??"auto",erstelltAm:t.erstelltAm??new Date().toISOString(),updatedAt:new Date().toISOString()};await e.table("profil").put(n)});async function ta(){try{const{erkenneBerufsschulMuster:e}=await ea(async()=>{const{erkenneBerufsschulMuster:i}=await Promise.resolve().then(()=>qa);return{erkenneBerufsschulMuster:i}},void 0),t=await p.tage.toArray();if(!t.length)return!1;const a=e(t),n=await p.profil.get("self");if(!n)return!1;const s=n.berufsschulMuster??{};return JSON.stringify(s.wochentageWoechentlich??[])!==JSON.stringify(a.wochentageWoechentlich)||JSON.stringify(s.wochentage14Taegig??[])!==JSON.stringify(a.wochentage14Taegig)||(s.referenzDatum14Taegig??null)!==(a.referenzDatum14Taegig??null)||(s.stundenProTag??null)!==(a.stundenProTag??null)||(s.halbtags??!1)!==(a.halbtags??!1)?(await p.profil.put({...n,berufsschulMuster:a}),!0):!1}catch(e){return console.warn("[db] refreshBerufsschulMuster fehlgeschlagen:",e),!1}}async function aa(){try{const e=await p.mailVorlagen.toArray(),t=e.some(n=>n.betreff&&!n.betreff.startsWith("Bitte um Zeitkorrektur im ESS")),a=e.some(n=>n.text&&!/Vielen Dank!\s*$/.test(n.text));return t||a?(await p.mailVorlagen.clear(),!0):!1}catch(e){return console.warn("[db] ensureMailVorlagenFresh fehlgeschlagen:",e),!1}}async function na(){const e=await p.einstellungen.get("__migration_reset");return(e==null?void 0:e.value)===!0?(await p.einstellungen.delete("__migration_reset"),!0):!1}async function I(){return await p.profil.get("self")??et()}async function le(e){const t={...e,id:"self",updatedAt:new Date().toISOString()};return await p.profil.put(t),t}function et(){return{id:"self",ueber18:!0,sollStundenProWoche:35,sollStundenProTag:7,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1},zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:"Frau Kanarya",pausenRegel:"auto",erstelltAm:new Date().toISOString()}}async function sa(e,t=null){const a=await p.einstellungen.get(e);return a?a.value:t}async function ia(e,t){await p.einstellungen.put({key:e,value:t})}async function O(){return await p.tage.orderBy("datum").toArray()}async function ra(e){return e.length?(await p.tage.bulkPut(e),e.length):0}async function la(e){return e.length?(await p.monate.bulkPut(e),e.length):0}async function ae(){return await p.monate.orderBy("monatKey").toArray()}async function oa(e){return await p.uploads.add({...e,hochladeDatum:new Date().toISOString()})}async function we(){return await p.uploads.orderBy("hochladeDatum").last()}async function tt(){return await p.uploads.orderBy("hochladeDatum").reverse().toArray()}async function ca(){await Promise.all([p.profil.clear(),p.tage.clear(),p.monate.clear(),p.uploads.clear(),p.einstellungen.clear(),p.mailVorlagen.clear(),p.warnungDismissals.clear()])}async function at(){await Promise.all([p.tage.clear(),p.monate.clear(),p.uploads.clear(),p.warnungDismissals.clear()])}async function da(){const[e,t,a,n,s,r,i]=await Promise.all([p.profil.toArray(),p.tage.toArray(),p.monate.toArray(),p.uploads.toArray(),p.einstellungen.toArray(),p.mailVorlagen.toArray(),p.warnungDismissals.toArray()]);return{version:1,exportedAt:new Date().toISOString(),data:{profil:e,tage:t,monate:a,uploads:n,einstellungen:s,mailVorlagen:r,warnungDismissals:i}}}async function ua(e){if(!e||e.version!==1||!e.data)throw new Error("Ungültiges oder inkompatibles Backup-Format.");const t=e.data;await p.transaction("rw",p.profil,p.tage,p.monate,p.uploads,p.einstellungen,p.mailVorlagen,p.warnungDismissals,async()=>{var a,n,s,r,i,o,l;(a=t.profil)!=null&&a.length&&await p.profil.bulkPut(t.profil),(n=t.tage)!=null&&n.length&&await p.tage.bulkPut(t.tage),(s=t.monate)!=null&&s.length&&await p.monate.bulkPut(t.monate),(r=t.uploads)!=null&&r.length&&await p.uploads.bulkPut(t.uploads),(i=t.einstellungen)!=null&&i.length&&await p.einstellungen.bulkPut(t.einstellungen),(o=t.mailVorlagen)!=null&&o.length&&await p.mailVorlagen.bulkPut(t.mailVorlagen),(l=t.warnungDismissals)!=null&&l.length&&await p.warnungDismissals.bulkPut(t.warnungDismissals)})}async function oe(e,t){await p.mailVorlagen.put({key:e,...t})}async function xe(){return await p.mailVorlagen.toArray()}async function ga(e,t){await p.warnungDismissals.put({key:`${e}-${t}`,datum:e,typ:t,dismissedAt:new Date().toISOString()})}async function ha(){return await p.warnungDismissals.toArray()}function nt(e){if(e==null)return null;if(typeof e=="number")return e;let t=String(e).trim();if(!t)return null;let a=!1;t.endsWith("-")&&(a=!0,t=t.slice(0,-1).trim()),t=t.replace(",",".");const n=parseFloat(t);return isNaN(n)?null:a?-n:n}function Z(e){if(e==null||isNaN(e))return"—";const t=e<0,a=Math.abs(e),n=Math.floor(a),s=Math.round((a-n)*60);let r=n,i=s;return i===60&&(r+=1,i=0),`${t?"-":""}${r}:${String(i).padStart(2,"0")}`}function P(e,t={}){if(e==null||isNaN(e))return"—";const{signed:a=!1,suffix:n="h"}=t,s=a&&e>0?"+":"",r=e.toFixed(2).replace(".",",");return`${s}${r}${n}`}function W(e){if(!e)return null;const t=/^(\d{1,2}):(\d{2})$/.exec(String(e).trim());return t?parseInt(t[1],10)*60+parseInt(t[2],10):null}function ue(e){if(!(e!=null&&e.length))return null;const t=e.filter(s=>s.von&&s.bis);if(!t.length)return null;let a=t[0].von,n=t[0].bis;for(const s of t)W(s.von)<W(a)&&(a=s.von),W(s.bis)>W(n)&&(n=s.bis);return{kommen:a,gehen:n}}function fa(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
    <polyline points="10 17 15 12 10 7"/>
    <line x1="15" y1="12" x2="3" y2="12"/>
  </svg>`}function ma(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>`}function ge(e,t={}){const{size:a=20,layout:n="inline"}=t;return e?`
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
  `:'<span class="kg-empty">—</span>'}const Fe={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},pa=(e,t,a)=>{let n;const s=a!=null&&a.addSuffix?Fe[e].withPreposition:Fe[e].standalone;return typeof s=="string"?n=s:t===1?n=s.one:n=s.other.replace("{{count}}",String(t)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:"vor "+n:n},ba={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},va={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},ya={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},wa={date:fe({formats:ba,defaultWidth:"full"}),time:fe({formats:va,defaultWidth:"full"}),dateTime:fe({formats:ya,defaultWidth:"full"})},xa={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},ka=(e,t,a,n)=>xa[e],$a={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},Sa={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},be={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},Ma={narrow:be.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:be.wide},za={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},Da={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},Pa={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},Aa=e=>Number(e)+".",Ta={ordinalNumber:Aa,era:G({values:$a,defaultWidth:"wide"}),quarter:G({values:Sa,defaultWidth:"wide",argumentCallback:e=>e-1}),month:G({values:be,formattingValues:Ma,defaultWidth:"wide"}),day:G({values:za,defaultWidth:"wide"}),dayPeriod:G({values:Da,defaultWidth:"wide",formattingValues:Pa,defaultFormattingWidth:"wide"})},Ea=/^(\d+)(\.)?/i,La=/\d+/i,Fa={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},Wa={any:[/^v/i,/^n/i]},Ka={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},Ba={any:[/1/i,/2/i,/3/i,/4/i]},Ca={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},Oa={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Va={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},Ia={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},_a={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},ja={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},Ha={ordinalNumber:$t({matchPattern:Ea,parsePattern:La,valueCallback:e=>parseInt(e)}),era:J({matchPatterns:Fa,defaultMatchWidth:"wide",parsePatterns:Wa,defaultParseWidth:"any"}),quarter:J({matchPatterns:Ka,defaultMatchWidth:"wide",parsePatterns:Ba,defaultParseWidth:"any",valueCallback:e=>e+1}),month:J({matchPatterns:Ca,defaultMatchWidth:"wide",parsePatterns:Oa,defaultParseWidth:"any"}),day:J({matchPatterns:Va,defaultMatchWidth:"wide",parsePatterns:Ia,defaultParseWidth:"any"}),dayPeriod:J({matchPatterns:_a,defaultMatchWidth:"wide",parsePatterns:ja,defaultParseWidth:"any"})},ne={code:"de",formatDistance:pa,formatLong:wa,formatRelative:ka,localize:Ta,match:Ha,options:{weekStartsOn:1,firstWeekContainsDate:4}};function Q(e){if(!e)return null;const t=e.trim();return zt(t,"dd.MM.yyyy",new Date)}function x(e){return D(e,"dd.MM.yyyy")}function st(e){return D(e,"EE, dd.MM.yyyy",{locale:ne})}function it(e){const t=St(e,{weekStartsOn:1}),a=Mt(e,{weekStartsOn:1});return`${D(t,"dd.MM.")} – ${D(a,"dd.MM.yyyy")}`}function Na(e){return`${Dt(e)}-${String(Pt(e)).padStart(2,"0")}`}function rt(e){return D(e,"yyyy-MM")}function Ra(e){return D(e,"yyyy-MM-dd")}function Za(e,t){if(!e||!t)return 0;e>t&&([e,t]=[t,e]);let a=0,n=new Date(e);for(;n<t;)n=Ye(n,1),Xe(n)||a++;return a}function E(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function lt(e){var d;const t=e.filter(u=>u.tagestyp==="Berufsschule");if(t.length<2)return{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1};const a={};for(const u of t)a[d=u.wochentag]??(a[d]=[]),a[u.wochentag].push(u);const n=[],s=[];let r=null;for(const[u,g]of Object.entries(a)){if(g.sort((m,y)=>m.datum.localeCompare(y.datum)),g.length<2)continue;const h=[];for(let m=1;m<g.length;m++)h.push(At(S(g[m].datum),S(g[m-1].datum)));const f=We(h);f<=10?n.push(u):f<=18&&(s.push(u),(!r||S(g[0].datum)<S(r))&&(r=g[0].datum))}const i=t.map(u=>u.ist).filter(u=>u!=null&&u>0),o=We(i),l=o!=null?Math.round(o*4)/4:null,c=l!=null&&l<5;return{wochentageWoechentlich:n,wochentage14Taegig:s,referenzDatum14Taegig:r,stundenProTag:l,halbtags:c}}function We(e){if(!e.length)return null;const t=e.slice().sort((n,s)=>n-s),a=Math.floor(t.length/2);return t.length%2?t[a]:(t[a-1]+t[a])/2}function ke(e,t){var s,r;if(!t)return!1;const n=["SO","MO","DI","MI","DO","FR","SA"][e.getDay()];if((s=t.wochentageWoechentlich)!=null&&s.includes(n))return!0;if((r=t.wochentage14Taegig)!=null&&r.includes(n)&&t.referenzDatum14Taegig){const i=S(t.referenzDatum14Taegig),o=Tt(e,i,{weekStartsOn:1});if(o>=0&&o%2===0)return!0}return!1}function ot(e,t=null){return(e==null?void 0:e.halbtags)===!0&&(e==null?void 0:e.stundenProTag)!=null&&e.stundenProTag>0?e.stundenProTag:t}const qa=Object.freeze(Object.defineProperty({__proto__:null,erkenneBerufsschulMuster:lt,erwarteteBerufsschulStunden:ot,istBerufsschulTagLautMuster:ke},Symbol.toStringTag,{value:"Module"}));function Ga(e){return e?"arbzg":"jarbschg"}function Ja(e,t){return e==null?0:t==="jarbschg"?e>6?1:e>4.5?.5:0:e>9?.75:e>6?.5:0}function ct(e){if(!e||e.length<2)return 0;const t=e.filter(n=>n.von&&n.bis).map(n=>({von:W(n.von),bis:W(n.bis)})).filter(n=>n.von!=null&&n.bis!=null).sort((n,s)=>n.von-s.von);let a=0;for(let n=1;n<t.length;n++){const s=t[n].von-t[n-1].bis;(s>0&&s>=15||s>0)&&(a+=s)}return a/60}function dt(e,t){const a=e.zeitSpannen??[];if(!a.length||a.every(f=>!f.von))return{keinAnspruch:!0};const n=ct(a),s=e.pause??0,r=Ua(a),i=r-s,o=t.pausenRegel&&t.pausenRegel!=="auto"?t.pausenRegel==="jarbschg"?"jarbschg":"arbzg":Ga(!!t.ueber18),l=Ja(i,o),c=Math.max(n,l),d=s-c,u=Math.max(0,l-n);let g="ok",h=null;if(d>.05)g="fehler_zeitwirtschaft",h=`${Math.round(d*60)} min Pause wurden zusätzlich zur gesetzlichen Pflicht und zur gestempelten Pause abgezogen. Das sieht nach einem Zeitwirtschafts-Fehler aus.`;else if(u>.05&&s>n+.02){g="aufstockung_legal";const f=Math.round(u*60);h=`Du hast ${Math.round(n*60)} min Pause gestempelt, aber bei ${i.toFixed(2).replace(".",",")}h Arbeitszeit schreibt das Gesetz (${o.toUpperCase()}) ${Math.round(l*60)} min vor. Die fehlenden ${f} min wurden automatisch als Pause gewertet. Das ist gesetzeskonform — nächstes Mal einfach länger Pause machen.`}return{arbeitszeitMitPause:r,arbeitszeitOhnePause:i,gestempeltePause:n,abgezogenePause:s,gesetzlichePflicht:l,gesetz:o,legalerAbzug:c,unrechtmaessigerVerlustMin:Math.round(Math.max(0,d)*60),aufstockungMin:Math.round(Math.max(0,u)*60),typ:g,warnung:h}}function Ua(e){let t=0;for(const a of e){if(!a.von||!a.bis)continue;const n=W(a.von),s=W(a.bis);n!=null&&s!=null&&s>n&&(t+=s-n)}return t/60}const U={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function $e(e,t,a,n=new Set){var d,u;const s=[],r=a??new Date,i=new Map(e.map(g=>[g.datum,g]));if(!e.length)return s;const o=S(e[0].datum),l=r;for(let g=new Date(o);g<=l;g=Ye(g,1)){if(Xe(g))continue;const h=D(g,"yyyy-MM-dd"),f=i.get(h),m=Za(g,l);if(!f||!f.tagestyp&&!f.ist&&(((d=f.zeitSpannen)==null?void 0:d.length)??0)===0){if(ke(g,t.berufsschulMuster)){const b=m>=4?"error":m>=2?"warn":"info";Y(s,n,{datum:h,wochentag:(f==null?void 0:f.wochentag)??se(g),typ:"bs_tag_fehlt",schweregrad:b,titel:`Berufsschultag nicht eingetragen: ${x(g)}`,beschreibung:`Laut deinem Profil hast du am ${U[se(g)]}, ${x(g)} Berufsschule. Im Zeitnachweis fehlt der Tag bisher${m>=4?" — bitte bei der Zeitwirtschaft nachhaken":""}.`,alter:m,mailVorlageKey:b==="error"?"bs_tag_fehlt":null})}else{const b=m>=4?"error":m>=2?"warn":"info";Y(s,n,{datum:h,wochentag:se(g),typ:"stempelzeit_fehlt",schweregrad:b,titel:`Keine Stempelzeit am ${x(g)}`,beschreibung:`Am ${U[se(g)]}, ${x(g)} wurde keine Stempelzeit erfasst. Falls du an diesem Tag im Haus warst, sollte die Zeitwirtschaft das nachtragen${m>=4?" — es ist inzwischen ≥4 Werktage her":""}.`,alter:m,mailVorlageKey:b==="error"?"stempelzeit_fehlt":null})}continue}if(f.tagestyp==="Berufsschule"&&f.ist!=null){const b=ot(t.berufsschulMuster,f.soll);b!=null&&f.ist<b-.5&&Y(s,n,{datum:h,wochentag:f.wochentag,typ:"bs_stunden_falsch",schweregrad:"error",titel:`Berufsschultag mit zu wenig Stunden: ${x(g)}`,beschreibung:`Am ${U[f.wochentag]}, ${x(g)} sind nur ${f.ist.toFixed(2).replace(".",",")}h gebucht statt der für dich üblichen ${b.toFixed(2).replace(".",",")}h. Die Zeitwirtschaft hat den Berufsschultag möglicherweise nur halb erfasst.`,ist:f.ist,soll:b,mailVorlageKey:"bs_stunden_falsch"})}if(f.tagestyp==="Stempelzeit"&&((u=f.zeitSpannen)==null?void 0:u.length)>1&&h>="2026-04-01"){const b=dt(f,t);(b==null?void 0:b.typ)==="fehler_zeitwirtschaft"&&b.unrechtmaessigerVerlustMin>=5?Y(s,n,{datum:h,wochentag:f.wochentag,typ:"pausen_abzug",schweregrad:b.unrechtmaessigerVerlustMin>=15?"error":"warn",titel:`Pausen-Abzug fehlerhaft (${x(g)})`,beschreibung:`Am ${U[f.wochentag]}, ${x(g)} wurden ${Math.round(b.abgezogenePause*60)} min Pause abgezogen. Gestempelt: ${Math.round(b.gestempeltePause*60)} min, gesetzlich nötig (${b.gesetz.toUpperCase()}): ${Math.round(b.gesetzlichePflicht*60)} min. Differenz von ${b.unrechtmaessigerVerlustMin} min ist unerklärlich.`,verlustMinuten:b.unrechtmaessigerVerlustMin,abgezogen:b.abgezogenePause,gestempelt:b.gestempeltePause,mailVorlageKey:"pausen_abzug"}):(b==null?void 0:b.typ)==="aufstockung_legal"&&b.aufstockungMin>=10&&Y(s,n,{datum:h,wochentag:f.wochentag,typ:"pausen_aufstockung",schweregrad:"info",titel:`Zu wenig Pause gestempelt (${x(g)}) — ${b.aufstockungMin} min automatisch aufgestockt`,beschreibung:`Am ${U[f.wochentag]}, ${x(g)} hast du nur ${Math.round(b.gestempeltePause*60)} min Pause gemacht. Gesetz (${b.gesetz.toUpperCase()}) schreibt ${Math.round(b.gesetzlichePflicht*60)} min vor. Fehlende ${b.aufstockungMin} min wurden als Pause gewertet — das ist legal, aber du verlierst dadurch Arbeitszeit. Tipp: mach beim nächsten Mal etwas länger Mittag.`})}}const c={error:0,warn:1,info:2};return s.sort((g,h)=>{const f=c[g.schweregrad]-c[h.schweregrad];return f!==0?f:h.datum.localeCompare(g.datum)}),s}function ut(e,t=new Set){var n,s,r,i;const a=[];for(const o of e){const l=((n=o.glz)==null?void 0:n.saldoVorperiode)??0,c=((s=o.glz)==null?void 0:s.saldoAktuellePeriode)??0,d=((r=o.glz)==null?void 0:r.umgebuchteStunden)??0,u=(i=o.glz)==null?void 0:i.saldoGesamt;if(u==null)continue;const g=l+c+d,h=Math.abs(u-g);if(h>.03){const f=`${o.monatKey}-saldo_plausi`;t.has(f)||a.push({datum:`${o.monatKey}-01`,wochentag:"",typ:"saldo_plausi",schweregrad:"warn",titel:`Saldo-Differenz im Monat ${o.monatKey}`,beschreibung:`Rechnung: Vorperiode ${l.toFixed(2)} + aktuelle Periode ${c.toFixed(2)} + umgebucht ${d.toFixed(2)} = ${g.toFixed(2)}, aber dein Saldo wird mit ${u.toFixed(2)} angezeigt. Abweichung: ${h.toFixed(2)}h.`,soll:g,ist:u})}}return a}function Y(e,t,a){const n=`${a.datum}-${a.typ}`;t.has(n)||(a.id=n,e.push(a))}function se(e){return["SO","MO","DI","MI","DO","FR","SA"][e.getDay()]}function Ya(e,t){var l,c,d;const a=[...e].sort((u,g)=>u.datum.localeCompare(g.datum));if(!a.length)return[];const n=new Map(t.map(u=>[u.monatKey,u])),s={};for(const u of a)s[l=u.monatKey]??(s[l]=[]),s[u.monatKey].push(u);const r=Object.keys(s).sort(),i=[];let o=null;for(const u of r){const g=n.get(u);let h;((c=g==null?void 0:g.glz)==null?void 0:c.saldoVorperiode)!=null?h=g.glz.saldoVorperiode:o!=null?h=o:h=0;const f=s[u];for(const m of f)m.diff!=null&&(h+=m.diff),i.push({datum:m.datum,wochentag:m.wochentag,saldo:Math.round(h*100)/100,diff:m.diff,ist:m.ist,soll:m.soll,tagestyp:m.tagestyp,monatKey:m.monatKey,wocheKey:m.wocheKey,zeitSpannen:m.zeitSpannen});if(((d=g==null?void 0:g.glz)==null?void 0:d.saldoGesamt)!=null){const m=g.glz.saldoGesamt-h;if(Math.abs(m)>.02&&i.length>0){const y=i.length-1;i[y].umbuchung=m,i[y].saldo=Math.round((i[y].saldo+m)*100)/100,h=i[y].saldo}o=g.glz.saldoGesamt}else o=h}return i}function Xa(e,t){if(!e.length)return[];if(t==="alles")return e;const a=Math.min(t,e.length);return e.slice(-a)}function Qa(e){return e.length?e[e.length-1].saldo:0}function en(e){if(!e.length)return 0;const t=e[0].saldo-(e[0].diff??0),a=e[e.length-1].saldo;return Math.round((a-t)*100)/100}const tn={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"},te={bs_tag_fehlt:{key:"bs_tag_fehlt",titel:"Berufsschultag fehlt",beschreibung:"Wenn ein Berufsschultag komplett nicht im Zeitnachweis eingetragen wurde.",betreff:"Bitte um Zeitkorrektur im ESS  - Fehlender Berufsschultag {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

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

Vielen Dank!`}};function he(e,t){const a=te[e];return a?{...a,...t??{}}:null}function gt(e,t){const a=Ke(e.text,t);return{betreff:Ke(e.betreff,t),text:a}}function Ke(e,t){return e.replace(/\{(\w+)\}/g,(a,n)=>t[n]!=null?String(t[n]):`{${n}}`)}function ht(e,t){const a=t.datum?new Date(t.datum):null;return{name:"",personalnr:"",kostenstelle:"",datum:a?st(a).split(", ")[1]:"",wochentag:tn[t.wochentag]??t.wochentag??"",zeitwirtschaft_anrede:e.zeitwirtschaftAnrede||"Frau Kanarya",zeitwirtschaft_email:e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",ist:t.ist!=null?t.ist.toFixed(2).replace(".",","):"",soll:t.soll!=null?t.soll.toFixed(2).replace(".",","):"",abgezogen:t.abgezogen!=null?Math.round(t.abgezogen*60):"",gestempelt:t.gestempelt!=null?Math.round(t.gestempelt*60):"",verlust:t.verlustMinuten??""}}function ft(e,t,a){const n=gt(t,a),s=e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",r=new URLSearchParams;return r.set("subject",n.betreff),r.set("body",n.text),`mailto:${s}?${r.toString().replace(/\+/g,"%20")}`}K.register(Et,Lt,Ft,Wt,Kt,Bt,Ct,Ot,Vt,It,_t,jt,Ht,Nt);function $(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function _(){return{fg:$("--fg"),fgMuted:$("--fg-muted"),fgSubtle:$("--fg-subtle"),border:$("--border"),surface:$("--surface"),accent:$("--accent"),success:$("--success"),warn:$("--warn"),danger:$("--danger"),info:$("--info"),palette:[$("--chart-1"),$("--chart-2"),$("--chart-3"),$("--chart-4"),$("--chart-5"),$("--chart-6"),$("--chart-7")]}}function k(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.fgMuted,font:{size:12}}},tooltip:{backgroundColor:e.surface,titleColor:e.fg,bodyColor:e.fg,borderColor:e.border,borderWidth:1,padding:10,displayColors:!0}},scales:{x:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}},y:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}}}}}function an(e,t){const a=_();if(j(e),!(t!=null&&t.length))return;const n=t.map(r=>D(S(r.datum),"dd.MM.")),s=t.map(r=>r.saldo);return s.map(r=>r>=0?a.success:a.danger),new K(e,{type:"line",data:{labels:n,datasets:[{label:"Tages-Saldo",data:s,borderColor:a.accent,backgroundColor:r=>{const i=r.chart,{ctx:o,chartArea:l,scales:c}=i;return l?dn(o,l,c.y,a):N(a.accent,.14)},segment:{borderColor:r=>{const i=r.p0.parsed.y,o=r.p1.parsed.y,l=(i+o)/2;return l>=.02?a.success:l<=-.02?a.danger:a.fgMuted}},tension:.25,pointRadius:2,pointHoverRadius:6,pointHitRadius:20,pointBackgroundColor:s.map(r=>r>=.02?a.success:r<=-.02?a.danger:a.fgMuted),pointBorderColor:a.surface,pointBorderWidth:1,fill:!0,borderWidth:2}]},options:{...k(a),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},plugins:{...k(a).plugins,legend:{display:!1},tooltip:{enabled:!1,mode:"index",intersect:!1,axis:"x",position:"nearest",external:nn(t)}},scales:{...k(a).scales,y:{...k(a).scales.y,ticks:{...k(a).scales.y.ticks,callback:r=>`${r>=0?"+":""}${r.toFixed(1).replace(".",",")}h`}}}}})}function nn(e){return function(t){var F;const{chart:a,tooltip:n}=t;let s=a.$saldoTooltipEl;if(!s){s=document.createElement("div"),s.className="saldo-tooltip",document.body.appendChild(s),a.$saldoTooltipEl=s;const B=a.destroy.bind(a);a.destroy=function(){s.parentNode&&s.parentNode.removeChild(s),B()}}if(n.opacity===0||!((F=n.dataPoints)!=null&&F.length)){s.style.opacity="0";return}const r=n.dataPoints[0].dataIndex,i=e[r];if(!i){s.style.opacity="0";return}const o=i.saldo>.05?"pos":i.saldo<-.05?"neg":"flat",l=(i.diff??0)>.05?"pos":(i.diff??0)<-.05?"neg":"flat",c=(i.saldo>0?"+":"")+i.saldo.toFixed(2).replace(".",",")+"h",d=i.diff!=null?(i.diff>0?"+":"")+i.diff.toFixed(2).replace(".",",")+"h":null;let g=`<div class="saldo-tooltip-title">${Be(D(S(i.datum),"EE, dd.MM.yyyy",{locale:ne}))}</div>`;g+=`<div class="saldo-tooltip-row"><span class="saldo-tooltip-label">Saldo</span><span class="saldo-tooltip-value ${o}">${c}</span></div>`,d&&(g+=`<div class="saldo-tooltip-row"><span class="saldo-tooltip-label">Tages-Diff</span><span class="saldo-tooltip-value ${l}">${d}</span></div>`);const h=[];i.tagestyp&&h.push(`Typ: ${Be(i.tagestyp)}`),i.umbuchung&&h.push(`Umbuchung: ${i.umbuchung>=0?"+":""}${i.umbuchung.toFixed(2).replace(".",",")}h`),h.length&&(g+=`<div class="saldo-tooltip-meta">${h.map(B=>`<span>${B}</span>`).join("")}</div>`),s.innerHTML=g;const f=a.canvas.getBoundingClientRect(),m=f.left+n.caretX,y=f.top+n.caretY;s.style.opacity="0",s.style.left="0px",s.style.top="0px";const b=s.offsetWidth,M=s.offsetHeight,H=18;let v=m+H;v+b>window.innerWidth-8&&(v=m-H-b);let w=y-M/2;w<8&&(w=8),w+M>window.innerHeight-8&&(w=window.innerHeight-M-8),s.style.left=v+"px",s.style.top=w+"px",s.style.opacity="1"}}function Be(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function sn(e,t){const a=_();if(j(e),!(t!=null&&t.length))return;const n=t.map(r=>r.monatKey),s=t.map(r=>{var i;return((i=r.glz)==null?void 0:i.saldoGesamt)??0});return new K(e,{type:"line",data:{labels:n,datasets:[{label:"GLZ-Saldo (Monatsende)",data:s,borderColor:a.accent,backgroundColor:N(a.accent,.18),tension:.35,fill:!0,pointRadius:4}]},options:k(a)})}function Se(e,t){const a=_();if(j(e),!(t!=null&&t.length))return;const n=t.map(i=>D(S(i.datum),"dd.MM.")),s=t.map(i=>i.ist??0),r=t.map(i=>un(i.tagestyp,a));return new K(e,{type:"bar",data:{labels:n,datasets:[{label:"Ist-Stunden",data:s,backgroundColor:r,borderRadius:4,borderSkipped:!1,maxBarThickness:32,categoryPercentage:.85,barPercentage:.9}]},options:{...k(a),plugins:{...k(a).plugins,legend:{display:!1},tooltip:{...k(a).plugins.tooltip,callbacks:{label:i=>{const o=t[i.dataIndex];return`${o.tagestyp??"—"}: ${(o.ist??0).toFixed(2).replace(".",",")}h`}}}},scales:{...k(a).scales,y:{...k(a).scales.y,suggestedMin:0,suggestedMax:10}}}})}function Ce(e,t){const a=_();if(j(e),!(t!=null&&t.length))return;const n=t.filter(c=>{var d;return((d=c.zeitSpannen)==null?void 0:d.length)&&c.zeitSpannen.some(u=>u.von&&u.bis)}).map(c=>{const d=c.zeitSpannen.filter(h=>h.von&&h.bis).map(h=>({von:W(h.von),bis:W(h.bis),vonStr:h.von,bisStr:h.bis})).filter(h=>h.von!=null&&h.bis!=null);if(d.length===0)return null;const u=Math.min(...d.map(h=>h.von)),g=Math.max(...d.map(h=>h.bis));return{...c,_spans:d,_minVon:u,_maxBis:g}}).filter(Boolean);if(!n.length)return;const s=c=>c.ist==null?a.fgMuted:c.ist>=7?a.success:a.danger,r={label:"Tages-Rahmen",data:n.map(c=>[c._minVon,c._maxBis]),backgroundColor:n.map(s),borderColor:n.map(s),borderWidth:0,borderRadius:4,borderSkipped:!1,barPercentage:.7,categoryPercentage:.9,maxBarThickness:18},i=Math.max(0,Math.floor(Math.min(...n.map(c=>c._minVon))/60)*60-60),o=Math.min(24*60,Math.ceil(Math.max(...n.map(c=>c._maxBis))/60)*60+60),l=c=>`${String(Math.floor(c/60)).padStart(2,"0")}:${String(c%60).padStart(2,"0")}`;return new K(e,{type:"bar",data:{labels:n.map(c=>D(S(c.datum),"dd.MM.")),datasets:[r]},options:{...k(a),interaction:{mode:"index",intersect:!1,axis:"x"},plugins:{legend:{display:!1},tooltip:{enabled:!0,backgroundColor:a.surface,borderColor:a.accent,borderWidth:2,padding:14,titleColor:a.fg,titleFont:{size:14,weight:"600"},titleMarginBottom:8,bodyColor:a.fg,bodyFont:{size:13},bodySpacing:4,displayColors:!1,caretPadding:10,cornerRadius:8,callbacks:{title:c=>{const d=n[c[0].dataIndex];return D(S(d.datum),"EE, dd.MM.yyyy",{locale:ne})},label:()=>"",beforeBody:c=>{const d=n[c[0].dataIndex],u=d.ist!=null?Z(d.ist):"—",g=d.soll!=null?Z(d.soll):"—",h=d.pause!=null?Math.round(d.pause*60)+" min":"—",m=[`Tages-Rahmen: ${`${l(d._minVon)} – ${l(d._maxBis)}`}`];return d._spans.length>1&&(m.push(""),d._spans.forEach((y,b)=>{m.push(`  Block ${b+1}: ${y.vonStr} – ${y.bisStr}`)})),[...m,"",`Arbeitszeit (netto): ${u}`,`Soll: ${g}`,`Pause (abgezogen): ${h}`]}}}},scales:{x:{ticks:{color:a.fgMuted,font:{size:10},maxRotation:60,minRotation:60,autoSkip:!0,maxTicksLimit:40},grid:{display:!1}},y:{min:i,max:o,ticks:{color:a.fgMuted,stepSize:60,callback:c=>l(c)},grid:{color:a.border}}}}})}function rn(e,t){const a=_();j(e);const n={};for(const i of t){if(i.tagestyp!=="Stempelzeit"||!i.zeitSpannen||i.zeitSpannen.length<2)continue;const o=ct(i.zeitSpannen);if(o<=0)continue;const l=Math.round(o*60),c=Math.floor(l/15)*15;n[c]=(n[c]??0)+1}const s=Object.keys(n).map(Number).sort((i,o)=>i-o),r=s.map(i=>n[i]);return new K(e,{type:"bar",data:{labels:s.map(i=>`${i}–${i+14} min`),datasets:[{label:"Häufigkeit",data:r,backgroundColor:a.palette[1],borderRadius:4}]},options:{...k(a),plugins:{...k(a).plugins,legend:{display:!1},tooltip:{...k(a).plugins.tooltip,callbacks:{title:i=>`Pause-Länge (gestempelt): ${i[0].label}`,label:i=>`${i.parsed.y} Tag(e)`}}}}})}function ln(e,t){const a=_();j(e);const n=["MO","DI","MI","DO","FR"],s={},r={};for(const l of n)s[l]=0,r[l]=0;for(const l of t)n.includes(l.wochentag)&&(l.ist==null||l.ist===0||(s[l.wochentag]+=l.ist,r[l.wochentag]+=1));const i=n.map(l=>r[l]>0?s[l]/r[l]:0),o={id:"wochentag-datalabels",afterDatasetsDraw(l){const{ctx:c,data:d,scales:u}=l;c.save(),c.fillStyle=a.fg,c.font="600 12px system-ui",c.textAlign="center",c.textBaseline="bottom",l.getDatasetMeta(0).data.forEach((h,f)=>{const m=d.datasets[0].data[f];if(!m||m===0)return;const y=m.toFixed(2).replace(".",",")+"h";c.fillText(y,h.x,h.y-6)}),c.restore()}};return new K(e,{type:"bar",data:{labels:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"],datasets:[{label:"Ø Ist-Stunden",data:i,backgroundColor:a.palette[2],borderRadius:4,maxBarThickness:56,categoryPercentage:.7,barPercentage:.8}]},options:{...k(a),layout:{padding:{top:24}},plugins:{...k(a).plugins,legend:{display:!1}},scales:{...k(a).scales,y:{...k(a).scales.y,suggestedMax:Math.max(...i)*1.15}}},plugins:[o]})}function on(e,t){const a=_();j(e);const n={};for(const i of t)!i.tagestyp||i.tagestyp==="Wochenende"||(n[i.tagestyp]=(n[i.tagestyp]??0)+1);const s=Object.keys(n),r=Object.values(n);return new K(e,{type:"doughnut",data:{labels:s,datasets:[{data:r,backgroundColor:s.map((i,o)=>a.palette[o%a.palette.length]),borderColor:a.surface,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:a.fgMuted,font:{size:12}}},tooltip:k(a).plugins.tooltip}}})}function cn(e,t){const a=_();j(e);const n={};for(const o of t){const l=o.wocheKey;n[l]??(n[l]={ist:0,soll:0}),n[l].ist+=o.ist??0,n[l].soll+=o.soll??0}const s=Object.keys(n).sort(),r=s.map(o=>n[o].ist),i=s.map(o=>n[o].soll);return new K(e,{type:"bar",data:{labels:s.map(o=>"KW "+o.split("-")[1]),datasets:[{label:"Ist",data:r,backgroundColor:a.palette[0],borderRadius:4,maxBarThickness:28},{label:"Soll",data:i,backgroundColor:a.palette[3],borderRadius:4,maxBarThickness:28}]},options:{...k(a),categoryPercentage:.7,barPercentage:.85}})}function j(e){const t=K.getChart(e);t&&t.destroy()}function N(e,t){const a=e.replace("#","").trim();if(a.length!==6&&a.length!==3)return e;const n=a.length===3?a.split("").map(o=>o+o).join(""):a,s=parseInt(n.slice(0,2),16),r=parseInt(n.slice(2,4),16),i=parseInt(n.slice(4,6),16);return`rgba(${s}, ${r}, ${i}, ${t})`}function dn(e,t,a,n){const{top:s,bottom:r}=t,i=e.createLinearGradient(0,s,0,r),o=a.min,l=a.max,c=l-o;if(c<=0)return N(n.success,.14);let d=(l-0)/c;return d=Math.max(0,Math.min(1,d)),i.addColorStop(0,N(n.success,.28)),i.addColorStop(Math.max(0,d-.001),N(n.success,.06)),i.addColorStop(Math.min(1,d+.001),N(n.danger,.06)),i.addColorStop(1,N(n.danger,.28)),i}function un(e,t){const a=String(e??"").toLowerCase();return a.includes("stempel")?t.palette[0]:a.includes("berufs")?t.palette[1]:a.includes("urlaub")?t.palette[2]:a.includes("feiertag")?t.fgSubtle:a.includes("dienst")?t.palette[3]:a.includes("krank")?t.palette[4]:t.palette[5]}let gn=0;function Me(e,{type:t="info",duration:a=3500}={}){const n=document.getElementById("toast-root");if(!n)return;const s=document.createElement("div");s.className=`toast ${t}`,s.textContent=e,s.dataset.id=++gn,n.appendChild(s),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateY(-8px)",s.style.transition="opacity 220ms, transform 220ms",setTimeout(()=>s.remove(),250)},a)}function ce(e){return Me(e,{type:"error",duration:6e3})}function z(e){return Me(e,{type:"success"})}const Oe=[{key:7,label:"1 Woche"},{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:"alles",label:"Alles"}];async function Ve({root:e}){const[t,a,n,s,r,i,o]=await Promise.all([I(),ae(),O(),ha(),sa("dashboardZeitraum",14),xe(),we()]),l=Object.fromEntries(i.map(v=>[v.key,v]));if(n.length===0){e.innerHTML=yn();return}const c=Ya(n,a),d=c.length;let u=r;typeof u=="number"&&u>d&&(u="alles");const g=new Set(s.map(v=>v.key)),h=o!=null&&o.stichtagAuswertung?new Date(o.stichtagAuswertung):new Date,f=$e(n,t,h,g),m=ut(a,g),y=[...f,...m],b=Qa(c),M=b>.05?"positive":b<-.05?"negative":"";e.innerHTML=`
    <h1 class="view-title">Dashboard</h1>
    <p class="view-subtitle">Stand: ${V(x(new Date(n[n.length-1].datum)))}</p>

    <div class="saldo-hero" style="margin-bottom: 32px; align-items: stretch;">
      <div class="saldo-hero-text" style="min-width: 260px;">
        <h3>Aktueller Gleitzeit-Saldo</h3>
        <div class="saldo-value ${M}">${P(b,{signed:!0,suffix:""})}</div>
        <div class="saldo-unit">Stunden · tagesaktuell</div>
        <div id="hero-bewegung" class="saldo-trend flat" style="margin-top: 12px;"></div>
      </div>
      <div style="flex: 1; min-width: 400px; display: flex; flex-direction: column;">
        <div class="card-split" style="margin-bottom: 12px; align-items: center;">
          <h3 style="margin: 0;">Verlauf</h3>
          <div class="segmented" id="zeitraum-picker">
            ${Oe.map(v=>{const w=typeof v.key=="number"&&v.key>d;return`<button type="button" data-key="${v.key}" class="${u===v.key?"active":""}" ${w?'disabled style="opacity:0.4"':""}>${v.label}</button>`}).join("")}
          </div>
        </div>
        <div style="flex: 1; height: 220px;"><canvas id="saldo-chart"></canvas></div>
      </div>
    </div>

    ${y.length>0?`
      <div class="card" style="margin-bottom: 32px;">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Offene Warnungen</h2>
        </div>
        ${y.slice(0,8).map(v=>vn(v,t,l)).join("")}
        ${y.length>8?`<div style="margin-top: 12px; color: var(--fg-muted); font-size: 13px; text-align: center;">+ ${y.length-8} weitere Warnungen vorhanden</div>`:""}
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
          ${Oe.map(v=>{const w=typeof v.key=="number"&&v.key>d;return`<button type="button" data-key="${v.key}" class="${u===v.key?"active":""}" ${w?'disabled style="opacity:0.4"':""}>${v.label}</button>`}).join("")}
        </div>
      </div>
      <div id="tage-liste"></div>
    </div>

  `,Ie(u,e,c);const H=()=>e.querySelectorAll("#zeitraum-picker button, #zeitraum-picker-2 button");H().forEach(v=>{v.addEventListener("click",async()=>{if(v.disabled)return;const w=v.getAttribute("data-key"),F=w==="alles"?"alles":parseInt(w,10);H().forEach(B=>B.classList.toggle("active",B.getAttribute("data-key")===w)),await ia("dashboardZeitraum",F),Ie(F,e,c)})}),e.addEventListener("click",async v=>{const w=v.target.closest(".ist-part");if(w){v.preventDefault(),v.stopPropagation();const Ae=w.getAttribute("data-val");try{await navigator.clipboard.writeText(Ae);const Te=w.textContent;w.classList.add("ok"),w.textContent="✓",setTimeout(()=>{w.classList.remove("ok"),w.textContent=Te},800)}catch{z(`Bitte kopieren: ${Ae}`)}return}const F=v.target.closest(".btn-dismiss");if(!F)return;const B=F.getAttribute("data-datum"),De=F.getAttribute("data-typ");if(!B||!De)return;await ga(B,De),z("Warnung ausgeblendet.");const Pe=F.closest(".alert");Pe&&(Pe.style.display="none")})}function Ie(e,t,a){const n=Xa(a,e),s=en(n);requestAnimationFrame(()=>{const l=t.querySelector("#saldo-chart");an(l,n)});const r=t.querySelector("#hero-bewegung");if(r){const l=s>.05?"up":s<-.05?"down":"flat",c=s>.05?"↑":s<-.05?"↓":"→";r.className=`saldo-trend ${l}`,r.innerHTML=`${c} ${Math.abs(s)<.01?"Unverändert":P(s,{signed:!0})} im Zeitraum`}const i=t.querySelector("#tage-info");if(i){const l=n.length;i.textContent=`${l} ${l===1?"Tag":"Tage"}`}const o=t.querySelector("#tage-liste");o&&(o.innerHTML=mn(n.slice().reverse()))}const hn=3,fn=2.5;function mn(e){if(!e.length)return'<p class="hint">Keine Tage im Zeitraum.</p>';const t=[];let a=null;for(const n of e)(!a||a.key!==n.wocheKey)&&(a={key:n.wocheKey,tage:[]},t.push(a)),a.tage.push(n);return`<div class="tages-liste">${t.map(n=>pn(n)).join("")}</div>`}function pn(e){var c;const t=e.tage.reduce((d,u)=>d+(u.ist??0),0),a=e.tage.reduce((d,u)=>d+(u.diff??0),0),n=(c=e.tage[0])==null?void 0:c.datum,s=n?it(S(n)):"",r=e.key?e.key.split("-")[1]:"?",i=a>.05?"pos":a<-.05?"neg":"flat",o=(a>0?"+":"")+a.toFixed(2).replace(".",",")+"h",l=t.toFixed(2).replace(".",",")+"h";return`
    <div class="woche-group">
      <div class="woche-header">
        <div class="woche-header-titel">
          <span class="woche-header-kw">KW ${V(r)}</span>
          <span class="woche-header-range tabular">${V(s)}</span>
        </div>
        <div class="woche-header-stats">
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Ist</span>
            <span class="woche-header-ist tabular">${l}</span>
          </span>
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Diff</span>
            <span class="woche-header-diff tabular ${i}">${o}</span>
          </span>
        </div>
      </div>
      <div class="woche-tage">
        ${e.tage.map(d=>bn(d)).join("")}
      </div>
    </div>
  `}function bn(e){const t=e.diff??0,a=t>0,n=a?hn:fn,s=Math.min(150,Math.abs(t)/n*50),r=a?"var(--success)":t<0?"var(--danger)":"var(--fg-subtle)",i=ue(e.zeitSpannen);return`
    <a href="#/tag/${e.datum}" class="tag-row">
      <div class="tag-row-datum">
        <div class="tabular">${V(x(new Date(e.datum)))}</div>
        <div class="tag-row-wd">${wn(e.wochentag)}</div>
      </div>
      <div class="tag-row-typ">
        ${e.tagestyp?`<span class="pill ${xn(e.tagestyp)}">${V(e.tagestyp)}</span>`:'<span style="color: var(--fg-subtle); font-size: 12px;">—</span>'}
      </div>
      <div class="tag-row-kg">
        ${ge(i,{size:18})}
      </div>
      <div class="tag-row-ist tabular">
        ${(()=>{if(e.ist==null)return'<div class="ist-wert">—</div>';const o=Z(e.ist),[l,c]=o.split(":");return e.ist<=0?`<div class="ist-wert">${o}</div>`:`<div class="ist-display" title="Klick auf H oder M zum Kopieren">
            <button class="ist-part" data-val="${l}" title="${l} Stunden kopieren">${l}</button><span class="ist-sep">:</span><button class="ist-part" data-val="${c}" title="${c} Minuten kopieren">${c}</button>
          </div>`})()}
        <div style="color: var(--fg-subtle); font-size: 11px;">Soll ${e.soll!=null?Z(e.soll):"—"}</div>
      </div>
      <div class="tag-row-bar">
        <div class="bar-track">
          <div class="bar-zero"></div>
          <div class="bar-fill ${a?"pos":"neg"}" style="width: ${s}%; background: ${r};"></div>
        </div>
      </div>
      <div class="tag-row-diff tabular" style="color: ${a?"var(--success)":t<0?"var(--danger)":"var(--fg-muted)"};">
        ${t!==0?(a?"+":"")+t.toFixed(2).replace(".",",")+"h":"0,00h"}
      </div>
      <div class="tag-row-saldo tabular" style="color: var(--fg-muted); font-size: 12px;">
        ${e.saldo>=0?"+":""}${e.saldo.toFixed(2).replace(".",",")}h
      </div>
    </a>
  `}function vn(e,t,a){const n=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";let s=null;if(e.mailVorlageKey&&t){const r=he(e.mailVorlageKey,a==null?void 0:a[e.mailVorlageKey]);if(r){const i=ht(t,e);s=ft(t,r,i)}}return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${n}</div>
      <div class="alert-body">
        <div class="alert-title">${V(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${V(e.beschreibung)}</p>
        <div class="alert-actions">
          ${s?`<a href="${me(s)}" class="btn primary sm">✉ Mail schreiben</a>`:""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
          <button class="btn ghost sm btn-dismiss" data-datum="${me(e.datum)}" data-typ="${me(e.typ)}">Ausblenden</button>
        </div>
      </div>
    </div>
  `}function yn(){return`
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
  `}function wn(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function xn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function V(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function me(e){return V(e)}const kn="/better-ess/assets/pdf.worker.min-yatZIOMy.mjs";Rt.workerSrc=kn;const _e={Januar:1,Februar:2,März:3,Maerz:3,April:4,Mai:5,Juni:6,Juli:7,August:8,September:9,Oktober:10,November:11,Dezember:12},$n=["Stempelzeit","Berufsschule Std. bez","Berufsschule","Dienstreise Arbeitszeit","Reise öff.VM/PKW Beifahr.","Reise öff.VM/PKW","Urlaub","Gleitzeit","Arbeitsunfähigkeit","TgDtEinh","Neujahr","Karfreitag","Ostermontg","Ostmontg","Osterso.","Hl.3 Kön.","Allerhlg","Pfingstmo","Fronleichn","TdDtEinh"];async function Sn(e){var l,c;const a=await Zt({data:e}).promise,n=[];let s=0;for(let d=1;d<=a.numPages;d++){const g=await(await a.getPage(d)).getTextContent();s+=g.items.length;const h=Mn(g.items);for(const f of h)n.push({page:d,text:f})}const r=zn(n),{tage:i,monate:o}=Dn(n);try{const d=await a.getMetadata();r.producer=((l=d==null?void 0:d.info)==null?void 0:l.Producer)??null,r.creator=((c=d==null?void 0:d.info)==null?void 0:c.Creator)??null}catch{}return r.totalTextItems=s,{meta:r,tage:i,monate:o}}function Mn(e){if(!e.length)return[];const t=e.slice().sort((i,o)=>{const l=o.transform[5]-i.transform[5];return Math.abs(l)>2?l:i.transform[4]-o.transform[4]}),a=[];let n=null,s=[];const r=3;for(const i of t){const o=i.transform[5];n==null||Math.abs(o-n)<=r?(s.push(i),n==null&&(n=o)):(a.push(je(s)),s=[i],n=o)}return s.length&&a.push(je(s)),a.filter(i=>i.trim().length>0)}function je(e){e.sort((n,s)=>n.transform[4]-s.transform[4]);let t="",a=-1;for(const n of e){const s=n.transform[4];a>=0&&s-a>4?t+="  ":a>=0&&s-a>.5&&(t+=" "),t+=n.str,a=s+n.width}return t}function zn(e){var a,n;const t={personalnummer:null,name:null,kostenstelle:null,personalbereich:null,einstellungsdatum:null,mitarbeiterkreis:null,arbeitszeitplanregel:null,zeitraumVon:null,zeitraumBis:null,stichtagAuswertung:null};for(let s=0;s<e.length;s++){const r=e[s].text,i=/vom\s+(\d{2}\.\d{2}\.\d{4})\s+bis\s+(\d{2}\.\d{2}\.\d{4})/i.exec(r);i&&(t.zeitraumVon=Q(i[1]),t.zeitraumBis=Q(i[2]));const o=/bis einschließlich dem\s+(\d{2}\.\d{2}\.\d{4})/i.exec(r);if(o&&(t.stichtagAuswertung=Q(o[1])),/Personalnummer/i.test(r)&&/Kostenstelle/i.test(r)){const l=(((a=e[s+1])==null?void 0:a.text)??"").trim();let c=l.split(/\s{2,}/);c.length<3&&(c=l.split(/\s+/)),c.length>=3&&/^\d/.test(c[0])&&(t.personalnummer=c[0],t.kostenstelle=c[1],t.personalbereich=c[2])}if(/Einstellungsdatum/i.test(r)&&/Mitarbeiterkreis/i.test(r)){const l=(((n=e[s+1])==null?void 0:n.text)??"").trim();let c=l.split(/\s{2,}/);c.length<3&&(c=l.split(/\s+/)),c.length>=3&&/^\d{2}\.\d{2}\.\d{4}$/.test(c[0])&&(t.einstellungsdatum=Q(c[0]),t.mitarbeiterkreis=c[1],t.arbeitszeitplanregel=c[2])}if(/Bei Rückfragen wenden Sie sich an/i.test(r))for(let l=s+1;l<Math.min(s+8,e.length);l++){const c=e[l].text.trim();if(/^[A-ZÄÖÜ][a-zäöüß]+(?:\s[A-ZÄÖÜ][a-zäöüß]+)+$/.test(c)&&!/kanarya/i.test(c)&&!/tel/i.test(c)){t.name=c;break}}}return t}function Dn(e,t){var l;const a=[],n=[];let s=null,r=null,i=!1,o=0;for(;o<e.length;){const c=e[o].text,d=/Monat:\s*([A-Za-zäöüÄÖÜß]+)\s*-\s*(\d{4})/.exec(c);if(d){const f=d[1].trim(),m=parseInt(d[2],10),y=_e[f]??_e[f.replace("ä","ae")]??null;y&&(s={jahr:m,monat:y,monatKey:`${m}-${String(y).padStart(2,"0")}`},i=!0,r=null),o++;continue}if(/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.test(c)){const f=/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.exec(c),m=Q(f[1]);r={monatKey:(s==null?void 0:s.monatKey)??rt(m),stichtag:m,glz:{},flexi:{},zeitkonten:{},raw:{}},o=Pn(e,o+1,r),n.push(r);continue}let u=s;const g=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)\b/.exec(c.trim());if(g&&s){const f=parseInt(g[1],10);i&&f>=20?u=En(s):f<=15&&(i=!1)}const h=He(c,u);if(h){const f=[];let m=o+1;for(;m<e.length;){const b=e[m].text;if(/^\s*\d{4}\s+Umbuchung/.test(b)||He(b,s)||/Wochensumme/i.test(b)||/Monats.bersicht/i.test(b)||/Monat:\s*[A-Za-z]/i.test(b))break;const M=An(b);if(M){f.push(M),m++;continue}break}if(f.length&&h.zeitSpannen.push(...f),h.tagestyp==="Wochenende"||h.wochentag==="SA"||h.wochentag==="SO"){o=m;continue}(h.ist!=null||h.soll!=null||(((l=h.zeitSpannen)==null?void 0:l.length)??0)>0||h.tagestyp!=null)&&a.push(h),o=m;continue}o++}return{tage:a,monate:n}}function Pn(e,t,a){let n=t;const s=/(\d{4,5}|KTAU|AZAU)\s*-\s*(.+?)\s+(-?[\d,.]+-?)(?=\s+(?:\d{4,5}|KTAU|AZAU)\s*-|\s*$)/g;for(;n<e.length;){const r=e[n].text.trim();if(/^Monat:\s/.test(r)||/^Einzelergebnisse\s/.test(r)||/^Tag\b/.test(r)||/^Wochensumme/.test(r)||/^\d{2}\s+(MO|DI|MI|DO|FR|SA|SO)\b/.test(r)||/^Übersicht für den Zeitraum/i.test(r)||/^Abwesenheitsansprüche/i.test(r))break;s.lastIndex=0;let i;for(;(i=s.exec(r))!=null;){const o=i[1],l=i[2].trim(),c=nt(i[3]);a.raw[o]={beschreibung:l,wert:c},o==="0008"&&(a.glz.saldoVorperiode=c),o==="8016"&&(a.glz.saldoAktuellePeriode=c),o==="9802"&&(a.glz.umgebuchteStunden=c),o==="0005"&&(a.glz.saldoGesamt=c),o==="9803"&&(a.glz.ueberzaehligeStd=c),o==="0050"&&(a.zeitkonten.produktivstunden=c),o==="9011"&&(a.flexi.jahreskontoVorperiode=c),o==="9010"&&(a.flexi.jahreskontoSaldo=c),o==="9020"&&(a.flexi.langzeitkontoSaldo=c),o==="9203"&&(a.zeitkonten.azMonatsendeUeber216=c),o==="9207"&&(a.zeitkonten.auszahlungBav=c),o==="9205"&&(a.zeitkonten.summeAuszahlung=c)}if(n++,n-t>80)break}return n}function He(e,t){if(!t)return null;const a=e.trim(),n=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)(?:\s+(.+))?$/.exec(a);if(!n)return null;const s=parseInt(n[1],10),r=n[2],i=(n[3]??"").trim();let o=t.jahr,l=t.monat;const c=new Date(o,l-1,s),d={datum:Ra(c),datumDate:c.toISOString(),wochentag:r,tagNr:s,monatKey:rt(c),wocheKey:Na(c),zeitSpannen:[],aktivitaeten:[],ist:null,soll:null,diff:null,pause:null,tazp:null,tagestyp:null,raw:a};return i?(Tn(i,d),d):(d.tagestyp=["SA","SO"].includes(r)?"Wochenende":null,d)}function An(e){const t=e.trim(),a=/^(Stempelzeit|Reise öff\.VM\/PKW Beifahr\.|Reise öff\.VM\/PKW|Dienstreise Arbeitszeit)\s+(\d{2}:\d{2})\s+(\d{2}:\d{2})\s*$/.exec(t);return a?{aktivitaet:a[1],von:a[2],bis:a[3]}:null}function Tn(e,t){let a=null,n=e;for(const d of $n)if(e.startsWith(d)){a=d,n=e.slice(d.length).trim();break}a||(a=e.split(/\s+/)[0],n=e.slice(a.length).trim()),t.tagestyp=Ln(a),t.aktivitaeten.push(a);const s=n.split(/\s+/).filter(Boolean),r=/^\d{2}:\d{2}$/,i=/^-?[\d,.]+-?$/;let o=0;for(;s[o]&&r.test(s[o])&&s[o+1]&&r.test(s[o+1]);)t.zeitSpannen.push({aktivitaet:a,von:s[o],bis:s[o+1]}),o+=2;const l=[];for(;o<s.length&&i.test(s[o]);){const d=nt(s[o]);d!=null&&l.push(d),o++}let c=s[o];l.length>=5?([t.ist,t.soll,t.diff,t.pause]=l,c||(c=String(l[4]))):l.length===4?[t.ist,t.soll,t.diff,t.pause]=l:l.length===3?[t.ist,t.soll,t.diff]=l:l.length===2?[t.ist,t.soll]=l:l.length===1&&(t.ist=l[0]),c&&(t.tazp=String(c))}function En(e){if(!e)return null;let t=e.monat-1,a=e.jahr;return t<1&&(t=12,a-=1),{jahr:a,monat:t,monatKey:`${a}-${String(t).padStart(2,"0")}`}}function Ln(e){return e?/^Stempelzeit$/i.test(e)?"Stempelzeit":/^Berufsschule Std\. bez$/i.test(e)||/^Berufsschule$/i.test(e)?"Berufsschule":/Dienstreise/i.test(e)||/Reise/i.test(e)?"Dienstreise":/^Urlaub$/i.test(e)?"Urlaub":/^Gleitzeit$/i.test(e)?"Gleitzeit":/Arbeitsunf.higkeit/i.test(e)?"Arbeitsunfähigkeit":/^(Neujahr|Karfreitag|Ostermontg|Ostmontg|Osterso\.|Hl\.3 Kön\.|Allerhlg|Pfingstmo|Fronleichn|TdDtEinh|TgDtEinh)$/i.test(e)?"Feiertag":e:null}const mt="better-ess-tour-completed",ie=[{type:"modal",icon:"👋",title:"Willkommen bei Better ESS",text:"Diese App liest deinen <strong>Zeitnachweis</strong> und macht ihn auf einen Blick verständlich.<br><br>Eine Minute Tour, dann geht's los."},{type:"modal",icon:"🔒",title:"Daten bleiben bei dir",text:"Dein PDF geht <strong>nicht ins Internet</strong>.<br><br>Alles läuft in deinem Browser, wie eine Notizen-App."},{type:"highlight",target:'a[href="#/daten"]',icon:"📂",title:"Hier startet alles",text:'Klick „Weiter" — ich bringe dich zum Upload.',placement:"right",onNext:async()=>{window.location.hash!=="#/daten"&&(window.location.hash="#/daten",await new Promise(e=>setTimeout(e,700)))}},{type:"highlight",target:".tutorial-details",icon:"💡",title:"Wichtig zuerst",text:"Klapp diese Box auf — sie zeigt mit Screenshot wie du dein PDF richtig holst.",placement:"bottom",waitForTarget:!0,onNext:async()=>{const e=document.querySelector(".tutorial-details");e&&!e.open&&(e.open=!0),await new Promise(t=>setTimeout(t,300))}},{type:"highlight",target:"#upload-zone",icon:"📥",title:"Lade jetzt dein PDF hoch",text:"Zieh dein Zeitnachweis-PDF hier rein, oder klick die Box. Erst danach geht die Tour weiter.",placement:"top",waitForTarget:!0,waitForEvent:"better-ess:pdf-uploaded"},{type:"modal",icon:"✨",title:"Geschafft!",text:"Dein PDF ist eingelesen. Jetzt zeig ich dir was die App alles kann — anhand deiner echten Daten.",onNext:async()=>{window.location.hash="#/",await new Promise(e=>setTimeout(e,700))}},{type:"highlight",target:".saldo-value",icon:"⚖️",title:"Dein aktueller Saldo",text:"Plus oder Minus auf einen Blick. Tagesaktuell.",placement:"right",waitForTarget:!0},{type:"highlight",target:".chart-wrap canvas",icon:"📈",title:"Saldo-Verlauf",text:"Hover über die Punkte für Details. Zeitraum oben rechts umschaltbar.",placement:"top",waitForTarget:!0},{type:"highlight",target:".tag-row .ist-display",icon:"⏱️",title:"Stunden direkt kopieren",text:"Klick auf <strong>H</strong> oder <strong>M</strong> — kopiert den Wert in deine Zwischenablage. Praktisch fürs IHK-Berichtsheft.",placement:"left",waitForTarget:!0},{type:"highlight",target:".alert",icon:"⚠️",title:"Auffälligkeiten",text:"Fehlende Tage, falsche BS-Stunden, Pausen-Abzug — alles automatisch erkannt.",placement:"left",optional:!0,waitForTarget:!0,timeoutMs:1200},{type:"highlight",target:".alert .btn.primary",icon:"✉️",title:"Mail mit 1 Klick",text:"Vorformulierte Mail an die Zeitwirtschaft — Datum, Werte, Anrede sind schon eingesetzt.",placement:"left",optional:!0,waitForTarget:!0,timeoutMs:1200},{type:"highlight",target:'a[href="#/monat"]',icon:"📅",title:"Monate & Wochen",text:"Tiefer reinzoomen: Monatssaldo, Wochenliste, Tagesbalken.",placement:"right"},{type:"highlight",target:'a[href="#/profil"]',icon:"👤",title:"Profil",text:"Über 18? Pausen-Regel und Mail-Empfänger anpassen.",placement:"right"},{type:"modal",icon:"🚀",title:"Bereit!",text:"Du kennst alle Funktionen. Tour erneut starten? Button am Ende der <strong>Daten</strong>-Seite."}],Fn=ie.findIndex(e=>e.icon==="✨");let T=null,R=null;function pt(){ze(),T={idx:0},ee()}function Wn(e){return e?!1:!localStorage.getItem(mt)}function Kn(){localStorage.setItem(mt,"1")}function ze(){document.querySelectorAll(".tour-overlay-svg, .tour-popover, .tour-pointer, .tour-highlight-border").forEach(e=>e.remove()),R&&(R(),R=null),T=null}function Bn(){let e=document.querySelector(".tour-overlay-svg");return e||(e=document.createElementNS("http://www.w3.org/2000/svg","svg"),e.setAttribute("class","tour-overlay-svg"),e.setAttribute("preserveAspectRatio","none"),e.innerHTML=`
      <defs>
        <mask id="tour-mask">
          <rect width="100%" height="100%" fill="white"/>
          <rect class="tour-mask-hole" x="-200" y="-200" width="0" height="0" rx="8" ry="8" fill="black"/>
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="rgba(5,8,14,0.72)" mask="url(#tour-mask)"/>`,document.body.appendChild(e)),e}function Cn(e){const t=e.getBoundingClientRect(),a=8,n=t.left-a,s=t.top-a,r=t.width+a*2,i=t.height+a*2,o=document.querySelector(".tour-mask-hole");o&&(o.setAttribute("x",n),o.setAttribute("y",s),o.setAttribute("width",r),o.setAttribute("height",i));let l=document.querySelector(".tour-highlight-border");l||(l=document.createElement("div"),l.className="tour-highlight-border",document.body.appendChild(l)),l.style.top=s+"px",l.style.left=n+"px",l.style.width=r+"px",l.style.height=i+"px",l.style.display=""}function On(){const e=document.querySelector(".tour-mask-hole");e&&(e.setAttribute("x",-200),e.setAttribute("y",-200),e.setAttribute("width",0),e.setAttribute("height",0));const t=document.querySelector(".tour-highlight-border");t&&(t.style.display="none")}function bt(){let e=document.querySelector(".tour-pointer");return e||(e=document.createElement("div"),e.className="tour-pointer",e.innerHTML=`
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
      </svg>`,e.style.top=window.innerHeight/2+"px",e.style.left=window.innerWidth/2+"px",document.body.appendChild(e)),e}function Vn(e){const t=bt(),a=e.getBoundingClientRect(),n=a.left+a.width*.5,s=a.top+a.height*.5;t.style.top=s-6+"px",t.style.left=n-9+"px"}function In(){var e;(e=document.querySelector(".tour-pointer"))==null||e.remove()}async function _n(e,t=1500){const a=Date.now();for(;Date.now()-a<t;){const n=document.querySelector(e);if(n)return n;await new Promise(s=>setTimeout(s,100))}return null}async function ee(){var i,o,l;if(!T)return;const e=ie[T.idx];if(!e){Ne();return}Bn(),On(),R&&(R(),R=null);let t=null;if(e.type==="highlight"){if(t=e.waitForTarget?await _n(e.target,e.timeoutMs??1500):document.querySelector(e.target),!t&&e.optional)return T.idx++,ee();if(t){try{t.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}catch{}await new Promise(c=>setTimeout(c,250)),Cn(t),bt(),requestAnimationFrame(()=>Vn(t))}}else In();let a=document.querySelector(".tour-popover");a||(a=document.createElement("div"),a.className="tour-popover",document.body.appendChild(a));const n=T.idx===0,s=T.idx===ie.length-1,r=!!e.waitForEvent;if(a.innerHTML=`
    <div class="tour-popover-header">
      <span class="tour-popover-step">${T.idx+1} / ${ie.length}</span>
      <button class="tour-skip" type="button" aria-label="Tour beenden">Überspringen</button>
    </div>
    <div class="tour-popover-icon">${e.icon||""}</div>
    <h3>${e.title}</h3>
    <div class="tour-popover-body">${e.text}</div>
    <div class="tour-popover-actions">
      <button class="btn tour-prev" type="button" ${n?'disabled style="opacity:0.4;cursor:default"':""}>← Zurück</button>
      <button class="btn primary tour-next" type="button" ${r?'disabled style="opacity:0.5;cursor:default"':""}>${r?"⏳ Warte auf Upload …":s?"Fertig":"Weiter →"}</button>
    </div>`,t?(a.classList.remove("center"),a.style.opacity="0",requestAnimationFrame(()=>{jn(a,t,e.placement||"right"),a.style.opacity="1"})):(a.classList.add("center"),a.style.top=a.style.left=a.style.right=a.style.bottom="",a.style.opacity="1"),(i=a.querySelector(".tour-skip"))==null||i.addEventListener("click",()=>{confirm('Tour beenden? Du kannst sie unter „Daten" jederzeit wieder starten.')&&Ne()}),n||(o=a.querySelector(".tour-prev"))==null||o.addEventListener("click",async()=>{T.idx=Math.max(0,T.idx-1),await ee()}),!r)(l=a.querySelector(".tour-next"))==null||l.addEventListener("click",async()=>{if(e.onNext)try{await e.onNext()}catch(c){console.warn("tour onNext error:",c)}T.idx++,await ee()});else{const c=async()=>{ze();let d=0;for(;document.querySelector(".upload-modal-overlay")&&d<600;)await new Promise(u=>setTimeout(u,300)),d++;await new Promise(u=>setTimeout(u,500)),T={idx:Fn},await ee()};document.addEventListener(e.waitForEvent,c,{once:!0}),R=()=>document.removeEventListener(e.waitForEvent,c)}}function jn(e,t,a){const n=t.getBoundingClientRect(),s=16,r=e.offsetWidth||360,i=e.offsetHeight||220,o=window.innerWidth,l=window.innerHeight,c=[a,"right","bottom","left","top"];let d=null;for(const h of c)if((()=>{switch(h){case"right":return n.right+s+r<=o;case"left":return n.left-s-r>=0;case"bottom":return n.bottom+s+i<=l;case"top":return n.top-s-i>=0}})()){d=h;break}d=d||a;let u,g;switch(d){case"right":u=n.top+n.height/2-i/2,g=n.right+s;break;case"left":u=n.top+n.height/2-i/2,g=n.left-r-s;break;case"bottom":u=n.bottom+s,g=n.left+n.width/2-r/2;break;case"top":default:u=n.top-i-s,g=n.left+n.width/2-r/2;break}u=Math.max(s,Math.min(l-i-s,u)),g=Math.max(s,Math.min(o-r-s,g)),e.style.position="fixed",e.style.top=u+"px",e.style.left=g+"px",e.style.right="auto",e.style.bottom="auto",e.style.transform=""}function Ne(){ze(),Kn()}async function Hn({root:e}){var r;const t=await tt(),a=await I();e.innerHTML=`
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
        ${t.length===0?'<div class="empty-state"><div class="empty-state-icon">📭</div><p>Noch keine Uploads</p></div>':yt(t)}
      </div>
    </div>

    <div class="card" style="margin-top: 24px; text-align: center; background: transparent; border-style: dashed;">
      <p style="color: var(--fg-muted); font-size: 13px; margin: 0 0 12px;">Brauchst du nochmal eine kurze Tour durch die App?</p>
      <button class="btn" id="btn-tour-restart" type="button">🎯 Tour erneut starten</button>
    </div>
  `;const n=e.querySelector("#upload-zone"),s=e.querySelector("#file-input");n.addEventListener("click",()=>s.click()),n.addEventListener("dragover",i=>{i.preventDefault(),n.classList.add("drag")}),n.addEventListener("dragleave",()=>n.classList.remove("drag")),n.addEventListener("drop",async i=>{var l;i.preventDefault(),n.classList.remove("drag");const o=(l=i.dataTransfer.files)==null?void 0:l[0];o&&await Ze(o,e,a)}),s.addEventListener("change",async i=>{var l;const o=(l=i.target.files)==null?void 0:l[0];o&&await Ze(o,e,a)}),e.querySelector("#btn-export").addEventListener("click",Zn),e.querySelector("#btn-import").addEventListener("click",()=>e.querySelector("#import-input").click()),e.querySelector("#import-input").addEventListener("change",qn),e.querySelector("#btn-clear-parsed").addEventListener("click",Rn),e.querySelector("#btn-reset").addEventListener("click",Gn),(r=e.querySelector("#btn-tour-restart"))==null||r.addEventListener("click",()=>pt()),Nn()}let Re=!1;function Nn(){Re||(Re=!0,document.body.addEventListener("click",e=>{if(e.target.closest(".lightbox-overlay, .upload-modal-overlay"))return;const t=e.target.closest("img.zoomable");t&&vt(t.src,t.alt)}))}function vt(e,t){const a=document.createElement("div");a.className="lightbox-overlay",a.innerHTML=`
    <button class="lightbox-close" aria-label="Schließen" title="Schließen (Esc)">×</button>
    <img src="${e}" alt="${t||""}" />
  `,document.body.appendChild(a);const n=()=>{a.remove(),document.removeEventListener("keydown",s)},s=r=>{r.key==="Escape"&&n()};a.addEventListener("click",r=>{(r.target===a||r.target.classList.contains("lightbox-close"))&&n()}),document.addEventListener("keydown",s)}async function Rn(){confirm("PDF-abgeleitete Daten (Tage, Monate, Uploads) werden gelöscht. Profil und Mail-Vorlagen bleiben erhalten. Fortfahren?")&&(await at(),z("Daten gelöscht. Profil bleibt."),setTimeout(()=>location.reload(),600))}function yt(e){return`
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
            <td>${E(Jn(t.hochladeDatum))}</td>
            <td>${E(t.dateiname||"—")}</td>
            <td>${t.zeitraumVon?E(x(new Date(t.zeitraumVon))):"—"} – ${t.zeitraumBis?E(x(new Date(t.zeitraumBis))):"—"}</td>
            <td>${t.stichtagAuswertung?E(x(new Date(t.stichtagAuswertung))):"—"}</td>
            <td class="num">${t.tageCount??"—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}async function Ze(e,t,a){var r,i,o,l;const n=t.querySelector("#upload-status"),s=t.querySelector("#upload-zone");s.style.pointerEvents="none",s.style.opacity="0.6",n.innerHTML=`
    <div class="alert severity-info">
      <div class="loader-ring" style="width: 24px; height: 24px; border-width: 2px;"></div>
      <div class="alert-body">
        <div class="alert-title">PDF wird verarbeitet…</div>
        <p style="margin: 4px 0; font-size: 13px;"><strong>${E(e.name)}</strong> — das kann bei großen PDFs einige Sekunden dauern.</p>
      </div>
    </div>`;try{const c=await e.arrayBuffer(),d=await Sn(c);if(d.tage.length===0&&!d.meta.zeitraumVon){s.style.pointerEvents="",s.style.opacity="",n.innerHTML="",pe({type:"error",title:"Diese PDF ist nicht kompatibel",desc:'Im PDF wurden keine Texte gefunden. Das passiert, wenn das PDF über „Drucken → Als PDF speichern" (z.B. „Microsoft Print to PDF") erzeugt wurde — dabei werden Texte als Vektorpfade gerendert und können nicht ausgelesen werden.',hint:'Lade dein PDF direkt aus dem ESS über den <strong>Speichern-Button</strong> herunter (Disketten-Symbol oben rechts im PDF-Viewer) — nicht über „Drucken".',screenshot:!0,producer:(r=d.meta)==null?void 0:r.producer}),ce("PDF enthält keinen extrahierbaren Text.");return}const u=await we(),g=u==null?void 0:u.personalnummer,h=d.meta.personalnummer;if(g&&h&&g!==h){const M=(u==null?void 0:u.name)||`Personalnr. ${g}`,H=d.meta.name||`Personalnr. ${h}`;if(!confirm(`Das hochgeladene PDF gehört zu einem anderen Azubi als die bisher gespeicherten Daten:

Bisher: ${M}
Jetzt:  ${H}

Wenn du fortfährst, werden alle alten Tagesdaten gelöscht und durch die neuen ersetzt.
(Profil-Einstellungen wie Theme und Mail-Vorlagen bleiben erhalten.)

Fortfahren?`)){s.style.pointerEvents="",s.style.opacity="",n.innerHTML=`
          <div class="alert severity-info">
            <div class="alert-body">
              <div class="alert-title">Upload abgebrochen</div>
              <p style="margin: 4px 0; font-size: 13px;">Es wurden keine Daten verändert. Lade das richtige PDF (für ${E(M)}) erneut hoch.</p>
            </div>
          </div>`;return}await at();const w=await I();await le({...w,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1}})}await ra(d.tage),await la(d.monate),await oa({dateiname:e.name,personalnummer:d.meta.personalnummer??null,name:d.meta.name??null,zeitraumVon:((i=d.meta.zeitraumVon)==null?void 0:i.toISOString())??null,zeitraumBis:((o=d.meta.zeitraumBis)==null?void 0:o.toISOString())??null,stichtagAuswertung:((l=d.meta.stichtagAuswertung)==null?void 0:l.toISOString())??null,tageCount:d.tage.length,monateCount:d.monate.length});const f=await O(),m=lt(f),y={...et(),...a};(m.wochentageWoechentlich.length>0||m.wochentage14Taegig.length>0)&&(y.berufsschulMuster=m),await le(y),n.innerHTML="",pe({type:"success",title:"PDF erfolgreich eingelesen",desc:d.meta.zeitraumVon?`Zeitraum: ${x(d.meta.zeitraumVon)} – ${x(d.meta.zeitraumBis)}`:"Daten wurden erfolgreich verarbeitet.",stats:[{num:d.tage.length,label:"Tage"},{num:d.monate.length,label:"Monatsübersichten"}]}),z(`PDF verarbeitet: ${d.tage.length} Tage.`),document.dispatchEvent(new CustomEvent("better-ess:pdf-uploaded",{detail:{tageCount:d.tage.length,monateCount:d.monate.length}}));const b=await tt();t.querySelector("#uploads-list").innerHTML=yt(b)}catch(c){console.error(c),n.innerHTML="",pe({type:"error",title:"Fehler beim Parsen",desc:E(c.message||String(c)),hint:'Prüfe, ob es sich um einen ESS-Zeitnachweis im richtigen Format handelt. Lade dein PDF über den Speichern-Button herunter, nicht über „Drucken".',screenshot:!0}),ce("PDF konnte nicht gelesen werden.")}finally{s.style.pointerEvents="",s.style.opacity=""}}async function Zn(){try{const e=await da(),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),a=URL.createObjectURL(t),n=document.createElement("a"),s=new Date().toISOString().slice(0,10);n.href=a,n.download=`zeitnachweis-backup-${s}.json`,n.click(),URL.revokeObjectURL(a),z("Backup heruntergeladen.")}catch(e){ce(`Export fehlgeschlagen: ${e.message}`)}}async function qn(e){var a;const t=(a=e.target.files)==null?void 0:a[0];if(t)try{const n=await t.text(),s=JSON.parse(n);if(!confirm("Existierende Daten werden überschrieben. Fortfahren?"))return;await ua(s),z("Backup erfolgreich importiert. Seite wird neu geladen…"),setTimeout(()=>location.reload(),800)}catch(n){ce(`Import fehlgeschlagen: ${n.message}`)}}async function Gn(){confirm("ALLE Daten endgültig löschen? Das lässt sich nicht rückgängig machen.")&&confirm("Wirklich alle Daten löschen? Letzte Warnung.")&&(await ca(),z("Alle Daten gelöscht."),setTimeout(()=>location.reload(),600))}function Jn(e){if(!e)return"—";const t=new Date(e);return t.toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"})+" "+t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}function pe(e){const{type:t,title:a,desc:n,hint:s,screenshot:r,stats:i,producer:o}=e,l=document.createElement("div");l.className="upload-modal-overlay";const c=`
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
    </svg>`,u=i!=null&&i.length?`
    <div class="upload-modal-stats">
      ${i.map(b=>`
        <div class="upload-modal-stat">
          <div class="upload-modal-stat-num">${E(String(b.num))}</div>
          <div class="upload-modal-stat-label">${E(b.label)}</div>
        </div>
      `).join("")}
    </div>`:"",g=r?`
    <img class="upload-modal-hint-img zoomable" src="/better-ess/tutorial/speichern.png"
         alt="Speichern-Button im PDF-Viewer"
         title="Klick für Vollbild" />`:"",h=o?`<p style="font-size: 12px; color: var(--fg-subtle); margin-top: 12px;">Erkannt: Producer „${E(o)}"</p>`:"",f=t==="success"?`
      <a href="#/" class="btn primary">Zum Dashboard</a>
      <a href="#/monat" class="btn">Monate ansehen</a>
      <button class="btn upload-modal-close-btn">Schließen</button>`:`
      <button class="btn primary upload-modal-close-btn">Verstanden</button>`;l.innerHTML=`
    <div class="upload-modal" role="dialog" aria-modal="true">
      <div class="upload-modal-icon-wrap">
        ${t==="success"?c:d}
      </div>
      <h2 class="upload-modal-title">${E(a)}</h2>
      <p class="upload-modal-desc">${n}</p>
      ${u}
      ${s?`<p class="upload-modal-desc" style="background: var(--accent-bg); padding: 12px; border-radius: 8px; border-left: 3px solid var(--accent);">${s}</p>`:""}
      ${g}
      ${h}
      <div class="upload-modal-actions">${f}</div>
    </div>`,document.body.appendChild(l);const m=()=>{l.style.animation="upload-modal-fade 150ms ease-out reverse",setTimeout(()=>l.remove(),150),document.removeEventListener("keydown",y)},y=b=>{b.key==="Escape"&&m()};document.addEventListener("keydown",y),l.addEventListener("click",b=>{if(b.target===l){m();return}if(b.target.closest(".upload-modal-close-btn")){m();return}if(b.target.closest(".upload-modal-actions a, .upload-modal-actions button")){m();return}const M=b.target.closest("img.zoomable");M&&vt(M.src,M.alt)})}const qe={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag"};async function Un({root:e}){var s,r,i,o,l;const t=await I(),a=t.berufsschulMuster??{},n=(((s=a.wochentageWoechentlich)==null?void 0:s.length)??0)>0||(((r=a.wochentage14Taegig)==null?void 0:r.length)??0)>0;e.innerHTML=`
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
          <input type="email" name="zeitwirtschaftEmail" value="${Ge(t.zeitwirtschaftEmail)}" />
        </div>
        <div class="form-group">
          <label>Anrede in Mails</label>
          <input type="text" name="zeitwirtschaftAnrede" value="${Ge(t.zeitwirtschaftAnrede)}" placeholder="Frau Kanarya" />
        </div>
      </div>

      <div class="card" style="grid-column: 1 / -1;">
        <h2>Berufsschul-Rhythmus <span style="font-size: 11px; font-weight: 500; color: var(--fg-subtle); text-transform: uppercase; letter-spacing: 0.05em; margin-left: 8px;">Automatisch erkannt</span></h2>
        ${n?`
          <div class="tag-detail">
            <div class="tag-detail-label">Wöchentlich</div>
            <div class="tag-detail-value"><strong>${((i=a.wochentageWoechentlich)==null?void 0:i.map(c=>qe[c]).join(", "))||"—"}</strong></div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Alle 2 Wochen</div>
            <div class="tag-detail-value"><strong>${((o=a.wochentage14Taegig)==null?void 0:o.map(c=>qe[c]).join(", "))||"—"}</strong>${a.referenzDatum14Taegig?` <span class="hint">(Anker: ${x(new Date(a.referenzDatum14Taegig))})</span>`:""}</div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Stunden pro Schultag</div>
            <div class="tag-detail-value">
              <strong>${a.stundenProTag!=null?a.stundenProTag.toFixed(2).replace(".",",")+"h":"—"}</strong>
              ${a.halbtags?' <span class="hint" style="color: var(--accent);">(Halbtags-Schule erkannt)</span>':""}
            </div>
          </div>
          <p class="hint" style="margin-top: 16px;">
            Das Muster wird bei jedem PDF-Upload neu aus den Daten abgeleitet. ${a.halbtags?'Da deine Schultage typischerweise weniger als 5h dauern, geht die App von Halbtags-Schule aus und meldet KEINE „BS-Stunden falsch"-Warnung, wenn dein Schultag nur '+(((l=a.stundenProTag)==null?void 0:l.toFixed(2).replace(".",","))??"4,00")+"h hat.":"Je länger der erfasste Zeitraum, desto präziser."}
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
  `,e.querySelector("#profil-form").addEventListener("submit",async c=>{var g,h;c.preventDefault();const d=new FormData(c.target),u={...t,ueber18:d.get("ueber18")==="on",zeitwirtschaftEmail:((g=d.get("zeitwirtschaftEmail"))==null?void 0:g.trim())||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:((h=d.get("zeitwirtschaftAnrede"))==null?void 0:h.trim())||"Frau Kanarya"};await le(u),z("Profil gespeichert.")})}function Ge(e){return String(e??"").replace(/"/g,"&quot;")}async function Yn({root:e}){var s;const t=await ae(),a=await O(),n={};for(const r of a)n[s=r.monatKey]??(n[s]=[]),n[r.monatKey].push(r);if(t.length===0){e.innerHTML=ss("Noch keine Monatsdaten. Lade zuerst ein PDF unter Daten hoch.");return}e.innerHTML=`
    <h1 class="view-title">Monate</h1>
    <p class="view-subtitle">${t.length} Monate erfasst. Klicke für Details.</p>

    <div class="grid cols-2">
      ${t.slice().reverse().map(r=>{var g;const o=(n[r.monatKey]??[]).filter(h=>h.ist!=null&&h.ist>0),l=o.reduce((h,f)=>h+(f.ist??0),0),c=o.reduce((h,f)=>h+(f.soll??0),0),d=l-c,u=(g=r.glz)==null?void 0:g.saldoGesamt;return`
          <a href="#/monat/${r.monatKey}" class="card" style="text-decoration: none; color: inherit; display: block;">
            <div class="card-split" style="margin-bottom: 12px;">
              <h2 style="margin: 0;">${ve(r.monatKey)}</h2>
              <span class="saldo-trend ${u>.05?"up":u<-.05?"down":"flat"}" style="margin: 0; font-size: 12px;">
                Saldo: <strong>${P(u??0,{signed:!0})}</strong>
              </span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 12px;">
              <div>
                <div style="color: var(--fg-subtle); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Arbeitstage</div>
                <div style="font-size: 22px; font-weight: 600;" class="tabular">${o.length}</div>
              </div>
              <div>
                <div style="color: var(--fg-subtle); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Ist / Soll</div>
                <div style="font-size: 14px; font-weight: 500;" class="tabular">${l.toFixed(1)} / ${c.toFixed(1)}h</div>
              </div>
              <div>
                <div style="color: var(--fg-subtle); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Diff</div>
                <div class="tabular ${d>.05?"positive":d<-.05?"negative":""}" style="font-size: 14px; font-weight: 500; color: ${d>.05?"var(--success)":d<-.05?"var(--danger)":"var(--fg)"};">${P(d,{signed:!0})}</div>
              </div>
            </div>
          </a>
        `}).join("")}
    </div>
  `}async function Xn({params:e,root:t}){const a=e.yyyymm,[n,s,r,i]=await Promise.all([O(),ae(),I(),we()]),o=s.find(u=>u.monatKey===a),l=n.filter(u=>u.monatKey===a).sort((u,g)=>u.datum.localeCompare(g.datum));if(!l.length){t.innerHTML=`<h1 class="view-title">Monat ${ve(a)}</h1><p class="view-subtitle">Keine Daten für diesen Monat.</p><a href="#/monat" class="btn">← Alle Monate</a>`;return}const c=i!=null&&i.stichtagAuswertung?new Date(i.stichtagAuswertung):new Date,d=$e(n,r,c).filter(u=>u.datum.startsWith(a));t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat" class="btn sm">← Alle Monate</a>
    </div>
    <h1 class="view-title">${ve(a)}</h1>
    <p class="view-subtitle">${l.length} Tage · ${d.length} Auffälligkeiten</p>

    ${o?Qn(o):""}

    <div class="card" style="margin-bottom: 24px;">
      <h2>Tagesbalken</h2>
      <div class="chart-wrap tall"><canvas id="chart-monat"></canvas></div>
    </div>

    ${d.length?`
      <div class="card" style="margin-bottom: 24px;">
        <h2>Auffälligkeiten</h2>
        ${d.map(u=>as(u)).join("")}
      </div>
    `:""}

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Wochen</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">Klicke auf eine Woche für die Detailansicht</span>
      </div>
      ${es(l)}
    </div>

    <div class="card">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Tage</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">Klicke auf ein Datum für Details</span>
      </div>
      ${ts(l)}
    </div>
  `,Se(t.querySelector("#chart-monat"),l)}function Qn(e){var n,s,r,i;const t=((n=e.glz)==null?void 0:n.saldoGesamt)??0;return`
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
  `}function es(e){var n;const t={};for(const s of e)t[n=s.wocheKey]??(t[n]={key:s.wocheKey,tage:[],ist:0,soll:0}),t[s.wocheKey].tage.push(s),t[s.wocheKey].ist+=s.ist??0,t[s.wocheKey].soll+=s.soll??0;const a=Object.keys(t).sort();return a.length?a.map(s=>{var g;const r=t[s],i=+(r.ist-r.soll).toFixed(2),o=i>.05?"positive":i<-.05?"negative":"",l=i>.05?"var(--success)":i<-.05?"var(--danger)":"var(--fg-muted)",c=(g=r.tage[0])==null?void 0:g.datum,d=c?it(S(c)):"",u=s.split("-")[1]||"?";return`
      <a href="#/woche/${s}" class="list-item" style="text-decoration: none; color: inherit;">
        <div class="tabular" style="font-size: 16px; font-weight: 600; color: var(--fg-muted); min-width: 80px;">KW ${q(u)}</div>
        <div>
          <div class="list-item-title tabular">${q(d)}</div>
          <div class="list-item-sub">${r.tage.length} Tage · Ist ${r.ist.toFixed(2).replace(".",",")}h · Soll ${r.soll.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="tabular ${o}" style="font-weight: 600; font-size: 16px; color: ${l};">${P(i,{signed:!0})}</div>
        <div style="color: var(--fg-subtle);">→</div>
      </a>
    `}).join(""):'<p style="color: var(--fg-muted);">Keine Wochen.</p>'}function ts(e){return`
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
        ${e.map(t=>{const a=t.diff>.05?"positive":t.diff<-.05?"negative":"",n=ue(t.zeitSpannen);return`
            <tr>
              <td><a href="#/tag/${t.datum}" style="color: inherit; text-decoration: none;"><span class="tabular">${x(new Date(t.datum))}</span> <span style="color: var(--fg-subtle);">${t.wochentag}</span></a></td>
              <td>${t.tagestyp?`<span class="pill ${ns(t.tagestyp)}">${q(t.tagestyp)}</span>`:"—"}</td>
              <td>${ge(n,{size:18})}</td>
              <td class="num tabular">${t.ist!=null?t.ist.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular">${t.soll!=null?t.soll.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular ${a}">${t.diff!=null?P(t.diff,{signed:!0,suffix:""}):"—"}</td>
              <td class="num tabular">${t.pause!=null?t.pause.toFixed(2).replace(".",","):"—"}</td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `}function as(e){return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i"}</div>
      <div class="alert-body">
        <div class="alert-title">${q(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${q(e.beschreibung)}</p>
        ${e.mailVorlageKey?`<div class="alert-actions"><a href="#/mails" class="btn primary sm">Mail schreiben</a><a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a></div>`:""}
      </div>
    </div>
  `}function ve(e){const[t,a]=e.split("-"),n=new Date(parseInt(t),parseInt(a)-1,1);return D(n,"LLLL yyyy",{locale:ne})}function ns(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function ss(e){return`<div class="empty-state"><div class="empty-state-icon">📭</div><p>${q(e)}</p><a href="#/daten" class="btn primary">Zu Daten</a></div>`}function q(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function is({root:e}){var s;const t=await O();if(!t.length){e.innerHTML='<h1 class="view-title">Wochen</h1><p class="view-subtitle">Noch keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a={};for(const r of t)a[s=r.wocheKey]??(a[s]={key:r.wocheKey,tage:[],ist:0,soll:0}),a[r.wocheKey].tage.push(r),a[r.wocheKey].ist+=r.ist??0,a[r.wocheKey].soll+=r.soll??0;const n=Object.keys(a).sort().reverse();e.innerHTML=`
    <h1 class="view-title">Wochen</h1>
    <p class="view-subtitle">${n.length} Wochen erfasst.</p>

    <div>
      ${n.map(r=>{const i=a[r],o=i.ist-i.soll,l=o>.05?"positive":o<-.05?"negative":"";return`
          <a href="#/woche/${r}" class="list-item">
            <div class="tabular" style="font-size: 16px; font-weight: 600; color: var(--fg-muted);">${de(wt(r))}</div>
            <div>
              <div class="list-item-title">Ist: ${i.ist.toFixed(2).replace(".",",")}h · Soll: ${i.soll.toFixed(2).replace(".",",")}h</div>
              <div class="list-item-sub">${i.tage.length} Tage erfasst</div>
            </div>
            <div class="tabular ${l}" style="font-weight: 600; font-size: 16px;">${P(o,{signed:!0})}</div>
            <div style="color: var(--fg-subtle);">→</div>
          </a>
        `}).join("")}
    </div>
  `}async function rs({params:e,root:t}){const a=await O(),n=e.yyyykw,s=a.filter(l=>l.wocheKey===n).sort((l,c)=>l.datum.localeCompare(c.datum));if(!s.length){t.innerHTML=`<h1 class="view-title">KW ${de(n)}</h1><p>Keine Daten.</p><a href="#/woche" class="btn">← Alle Wochen</a>`;return}const r=s.reduce((l,c)=>l+(c.ist??0),0),i=s.reduce((l,c)=>l+(c.soll??0),0),o=r-i;t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/woche" class="btn sm">← Alle Wochen</a>
    </div>
    <h1 class="view-title">${de(wt(n))}</h1>
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
        <div class="tabular ${o>.05?"positive":o<-.05?"negative":""}" style="font-size: 28px; font-weight: 650; color: ${o>.05?"var(--success)":o<-.05?"var(--danger)":"var(--fg)"};">${P(o,{signed:!0})}</div>
      </div>
    </div>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Tagesverteilung</h2>
      <div class="chart-wrap"><canvas id="chart-woche"></canvas></div>
    </div>

    <div class="card">
      <h2>Tage dieser Woche</h2>
      ${ls(s)}
    </div>
  `,Se(t.querySelector("#chart-woche"),s)}function ls(e){return`
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
        ${e.map(t=>{const a=t.diff>.05?"positive":t.diff<-.05?"negative":"",n=ue(t.zeitSpannen);return`
            <tr>
              <td><a href="#/tag/${t.datum}" style="color: inherit;"><span class="tabular">${D(S(t.datum),"dd.MM.yyyy")}</span> ${t.wochentag}</a></td>
              <td>${t.tagestyp?`<span class="pill ${os(t.tagestyp)}">${de(t.tagestyp)}</span>`:"—"}</td>
              <td>${ge(n,{size:18})}</td>
              <td class="num tabular">${t.ist!=null?t.ist.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular">${t.soll!=null?t.soll.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular ${a}">${t.diff!=null?P(t.diff,{signed:!0,suffix:""}):"—"}</td>
              <td class="num tabular">${t.pause!=null?t.pause.toFixed(2).replace(".",","):"—"}</td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `}function wt(e){const[t,a]=e.split("-");return`KW ${a} · ${t}`}function os(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function de(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function cs({params:e,root:t}){var c,d,u;const a=e.datum,n=await p.tage.get(a),s=await I();if(!n){t.innerHTML=`<h1 class="view-title">Tag nicht gefunden</h1><p>Für ${a} liegen keine Daten vor.</p><a href="#/" class="btn">← Dashboard</a>`;return}const r=S(a),i=n.tagestyp==="Stempelzeit"?dt(n,s):null,o=ke(r,s.berufsschulMuster),l=ue(n.zeitSpannen);t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat/${a.slice(0,7)}" class="btn sm">← Zum Monat</a>
    </div>
    <h1 class="view-title">${st(r)}</h1>
    <p class="view-subtitle">${n.tagestyp??"Kein Typ"} · KW ${(c=n.wocheKey)==null?void 0:c.split("-")[1]}</p>

    ${l?`
      <div class="card kommen-gehen-hero" style="margin-bottom: 24px;">
        <div class="hint" style="text-transform: uppercase; letter-spacing: 0.05em; font-size: 11px; margin-bottom: 10px;">Tages-Rahmen</div>
        ${ge(l,{size:32})}
      </div>
    `:""}

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${n.ist!=null?n.ist.toFixed(2).replace(".",",")+"h":"—"}</div>
        <div class="hint">= ${n.ist!=null?Z(n.ist):"—"}</div>
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
        ${(d=n.zeitSpannen)!=null&&d.length?n.zeitSpannen.map(g=>`
              <div class="tag-detail">
                <div class="tag-detail-label">${X(g.aktivitaet??"Stempelzeit")}</div>
                <div class="tag-detail-value tabular">${g.von??"—"} – ${g.bis??"—"}</div>
              </div>
            `).join(""):'<p class="hint">Keine Stempelzeiten für diesen Tag.</p>'}
      </div>

      <div class="card">
        <h2>Klassifikation</h2>
        <div class="tag-detail">
          <div class="tag-detail-label">Tagestyp</div>
          <div class="tag-detail-value">${n.tagestyp?`<span class="pill ${ds(n.tagestyp)}">${X(n.tagestyp)}</span>`:"—"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Laut Profil</div>
          <div class="tag-detail-value">${o?"🎓 Berufsschultag erwartet":"Regulärer Werktag"}</div>
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

      ${i&&!i.keinAnspruch?`
        <div class="card" style="grid-column: 1 / -1;">
          <h2>Pausen-Analyse</h2>
          <div class="grid cols-2">
            <div>
              <div class="tag-detail">
                <div class="tag-detail-label">Arbeitszeit (netto)</div>
                <div class="tag-detail-value tabular">${(u=i.arbeitszeitOhnePause)==null?void 0:u.toFixed(2).replace(".",",")}h</div>
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
              <div class="alert-body">${X(i.warnung)}</div>
            </div>
          `:""}
        </div>
      `:""}
    </div>
  `}function ds(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function X(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const us=[{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:"alles",label:"Alles"}];async function gs({root:e}){var r;const[t,a]=await Promise.all([O(),ae()]);if(!t.length){e.innerHTML='<h1 class="view-title">Analytics</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}let n=t.length>30?30:"alles";e.innerHTML=`
    <h1 class="view-title">Analytics</h1>
    <p class="view-subtitle">${t.length} Tage über ${a.length} Monatsübersichten visualisiert.</p>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Saldo-Verlauf pro Monat</h2>
      <div class="chart-wrap tall"><canvas id="c-saldo"></canvas></div>
    </div>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Ist vs. Soll pro Woche</h2>
      <div class="chart-wrap"><canvas id="c-istsoll"></canvas></div>
    </div>

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 12px; align-items: center;">
        <div>
          <h2 style="margin: 0;">Start-/Endzeiten über Zeit</h2>
          <p class="hint" style="margin: 4px 0 0;">Grün = ≥7h gearbeitet, Rot = weniger.</p>
        </div>
        <div class="segmented" id="startend-zeitraum">
          ${us.map(i=>{const o=typeof i.key=="number"&&i.key>t.length;return`<button type="button" data-key="${i.key}" class="${n===i.key?"active":""}" ${o?'disabled style="opacity:0.4"':""}>${i.label}</button>`}).join("")}
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
  `;const s=()=>n==="alles"?t:t.slice(-n);requestAnimationFrame(()=>{sn(e.querySelector("#c-saldo"),a),cn(e.querySelector("#c-istsoll"),t),Ce(e.querySelector("#c-startend"),s()),ln(e.querySelector("#c-wochentag"),t),rn(e.querySelector("#c-pausen"),t),on(e.querySelector("#c-donut"),t),Se(e.querySelector("#c-alle-tage"),t.slice(-30))}),(r=e.querySelector("#startend-zeitraum"))==null||r.addEventListener("click",i=>{const o=i.target.closest("button[data-key]");if(!o||o.disabled)return;const l=o.getAttribute("data-key"),c=l==="alles"?"alles":parseInt(l,10);c!==n&&(n=c,e.querySelectorAll("#startend-zeitraum button").forEach(d=>d.classList.toggle("active",d===o)),Ce(e.querySelector("#c-startend"),s()))})}async function hs({root:e}){const t=await O();if(!t.length){e.innerHTML='<h1 class="view-title">Berichtsheft</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a=[...new Set(t.map(r=>r.monatKey))].sort().reverse();e.innerHTML=`
    <h1 class="view-title">Berichtsheft-Export</h1>
    <p class="view-subtitle">Kopiere die Arbeitsstunden im HH:MM-Format direkt in dein Berichtsheft.</p>

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 16px; align-items: center;">
        <h2 style="margin: 0;">Filter</h2>
        <div style="display: flex; gap: 8px; align-items: center;">
          <label style="color: var(--fg-muted); font-size: 13px;">Monat:</label>
          <select id="filter-monat">
            <option value="">Alle</option>
            ${a.map(r=>`<option value="${r}">${ps(r)}</option>`).join("")}
          </select>
          <button class="btn sm" id="btn-copy-all">Alle sichtbaren kopieren</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div id="liste"></div>
    </div>
  `;const n=e.querySelector("#filter-monat");n.addEventListener("change",()=>s()),e.querySelector("#btn-copy-all").addEventListener("click",()=>{const r=e.querySelectorAll("#liste tr[data-copy]"),i=Array.from(r).map(o=>o.getAttribute("data-copy")).join(`
`);navigator.clipboard.writeText(i).then(()=>z(`${r.length} Zeilen kopiert.`))});function s(){const r=n.value,o=(r?t.filter(l=>l.monatKey===r):t).filter(l=>l.ist!=null&&l.ist>0&&l.tagestyp!=="Wochenende");e.querySelector("#liste").innerHTML=fs(o),e.querySelectorAll(".copy-val").forEach(l=>{l.addEventListener("click",async()=>{const c=l.getAttribute("data-val");await navigator.clipboard.writeText(c),l.classList.add("ok");const d=l.textContent;l.textContent="✓ kopiert",setTimeout(()=>{l.classList.remove("ok"),l.textContent=d},1200)})})}s()}function fs(e){return e.length?`
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
        ${e.map(t=>{const a=Z(t.ist),n=`${x(S(t.datum))}	${a}`;return`
            <tr data-copy="${Je(n)}">
              <td class="tabular">${x(S(t.datum))}</td>
              <td>${ms(t.wochentag)}</td>
              <td>${t.tagestyp?`<span class="pill ${bs(t.tagestyp)}">${xt(t.tagestyp)}</span>`:"—"}</td>
              <td class="num tabular">${t.ist.toFixed(2).replace(".",",")}</td>
              <td class="num tabular" style="font-weight: 600;">${a}</td>
              <td><button class="copy-val" data-val="${Je(a)}">📋 ${a}</button></td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `:'<p style="color: var(--fg-muted);">Keine Tage in dieser Auswahl.</p>'}function ms(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function ps(e){const[t,a]=e.split("-");return D(new Date(parseInt(t),parseInt(a)-1,1),"LLLL yyyy",{locale:ne})}function bs(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function xt(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Je(e){return xt(e)}async function vs({root:e}){const[t,a,n,s]=await Promise.all([O(),I(),ae(),xe()]),r=Object.fromEntries(s.map(l=>[l.key,l])),i=$e(t,a,new Date).filter(l=>l.mailVorlageKey),o=ut(n);e.innerHTML=`
    <h1 class="view-title">Mail-Vorlagen</h1>
    <p class="view-subtitle">Vorformulierte Mails an die Zeitwirtschaft bei erkannten Fehlern im Zeitnachweis.</p>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Offene Warnungen mit Mail-Vorschlag</h2>
      <p class="hint" style="margin-bottom: 16px;">Diese Warnungen haben einen roten Schweregrad und sind eine direkte Mail wert.</p>

      ${i.length===0?'<div class="empty-state"><div class="empty-state-icon">✓</div><p>Keine akuten Warnungen — top.</p></div>':i.map(l=>ys(l,a,r)).join("")}

      ${o.length>0?`
        <h3 style="margin-top: 24px;">Saldo-Plausibilität</h3>
        ${o.map(l=>`
          <div class="alert severity-warn">
            <div class="alert-icon">⚠</div>
            <div class="alert-body">
              <div class="alert-title">${L(l.titel)}</div>
              <p style="margin: 4px 0; font-size: 13px;">${L(l.beschreibung)}</p>
            </div>
          </div>
        `).join("")}
      `:""}
    </div>

    <div class="card">
      <h2>Vorlagen verwalten</h2>
      <p class="hint" style="margin-bottom: 16px;">Passe die Texte an deinen Stil an. Platzhalter wie <code>{name}</code>, <code>{datum}</code>, <code>{wochentag}</code>, <code>{ist}</code>, <code>{soll}</code> werden automatisch gefüllt.</p>

      <div id="vorlagen-editor">
        ${Object.keys(te).map(l=>{const c=he(l,r[l]);return ws(c)}).join("")}
      </div>
    </div>
  `,xs(e),ks(e)}function ys(e,t,a){const n=he(e.mailVorlageKey,a[e.mailVorlageKey]);if(!n)return"";const s=ht(t,e),r=gt(n,s),i=ft(t,n,s);return`
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
<strong>Betreff:</strong> ${L(r.betreff)}

${L(r.text)}
        </div>
      </details>
      <div class="alert-actions" style="margin-top: 12px;">
        <a class="btn primary sm" href="${i}" target="_blank" rel="noopener">Mail Vorschlag in Outlook →</a>
        <button class="btn sm btn-copy-mail" data-subject="${ye(r.betreff)}" data-body="${ye(r.text)}">📋 Betreff + Text kopieren</button>
      </div>
    </div>
  `}function ws(e){return`
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
        <input type="text" class="v-betreff" value="${ye(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 240px;">${L(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function xs(e){e.querySelectorAll(".btn-save-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-key"),n=t.closest(".vorlagen-item"),s=n.querySelector(".v-betreff").value,r=n.querySelector(".v-text").value;await oe(a,{betreff:s,text:r}),z("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-key"),n=te[a];n&&confirm(`Vorlage "${n.titel}" auf Default zurücksetzen?`)&&(await oe(a,{betreff:n.betreff,text:n.text}),z("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function ks(e){e.querySelectorAll(".btn-copy-mail").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-subject"),n=t.getAttribute("data-body"),s=`Betreff: ${a}

${n}`;await navigator.clipboard.writeText(s),z("Mail-Text kopiert.")})})}function L(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function ye(e){return L(e)}async function $s({root:e}){const[t,a]=await Promise.all([I(),xe()]),n=Object.fromEntries(a.map(s=>[s.key,s]));e.innerHTML=`
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
          ${Object.keys(te).map(s=>{const r=he(s,n[s]);return Ss(r)}).join("")}
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
  `,e.querySelector("#pause-sel").addEventListener("change",async s=>{const r={...t,pausenRegel:s.target.value};await le(r),z("Pausen-Regel gespeichert.")}),e.querySelectorAll(".btn-save-vorlage").forEach(s=>{s.addEventListener("click",async()=>{const r=s.getAttribute("data-key"),i=s.closest(".vorlagen-item"),o=i.querySelector(".v-betreff").value,l=i.querySelector(".v-text").value;await oe(r,{betreff:o,text:l}),z("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(s=>{s.addEventListener("click",async()=>{const r=s.getAttribute("data-key"),i=te[r];i&&confirm(`Vorlage "${i.titel}" auf Default zurücksetzen?`)&&(await oe(r,{betreff:i.betreff,text:i.text}),z("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function Ss(e){return`
    <div class="vorlagen-item" data-key="${e.key}" style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
      <div class="card-split" style="margin-bottom: 12px;">
        <div>
          <h3 style="text-transform: none; letter-spacing: 0; color: var(--fg); font-size: 16px;">${re(e.titel)}</h3>
          <p class="hint" style="margin: 4px 0;">${re(e.beschreibung)}</p>
        </div>
        <button class="btn sm btn-reset-vorlage" data-key="${e.key}">Auf Default zurücksetzen</button>
      </div>
      <div class="form-group">
        <label>Betreff</label>
        <input type="text" class="v-betreff" value="${Ms(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 200px;">${re(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function re(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ms(e){return re(e)}async function Ue(){qt();const e=document.getElementById("content");await na()&&setTimeout(()=>{Me('Parser wurde aktualisiert. Bitte lade deinen Zeitnachweis unter "Daten" neu hoch.',{type:"info",duration:12e3})},500),await aa(),await ta(),A("/",Ve),A("/dashboard",Ve),A("/analytics",gs),A("/monat",Yn),A("/monat/:yyyymm",Xn),A("/woche",is),A("/woche/:yyyykw",rs),A("/tag/:datum",cs),A("/berichtsheft",hs),A("/mails",vs),A("/profil",Un),A("/daten",Hn),A("/einstellungen",$s),Jt(e),location.hash||Gt("/");try{const t=await p.tage.count();Wn(t>0)&&setTimeout(()=>pt(),700)}catch(t){console.warn("[boot] Tour-Auto-Start-Check fehlgeschlagen:",t)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ue):Ue();
