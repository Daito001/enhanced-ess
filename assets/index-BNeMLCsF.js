import{D as Mt}from"./dexie-BODkcwel.js";import{b as pe,a as Y,c as X,d as zt,f as D,e as Qe,i as et,s as Dt,g as Pt,p as At,h as Tt,j as Et,k as Lt,l as $,m as Ft}from"./datefns-Dlft8rFK.js";import{C as L,L as Wt,B as Kt,D as Bt,S as Ot,a as Ct,b as Vt,P as It,A as _t,c as Zt,d as jt,T as Ht,p as Nt,e as Rt,i as qt}from"./chartjs-CRgZvhTJ.js";import{_ as Gt,a as Jt}from"./pdfjs-BDGsuRSB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();function Ut(){document.documentElement.setAttribute("data-theme","dark")}const tt=[];function A(e,t){const a=e.split("/").filter(Boolean),n=[],s=new RegExp("^/?"+a.map(r=>r.startsWith(":")?(n.push(r.slice(1)),"([^/]+)"):ea(r)).join("/")+"/?$");tt.push({pattern:e,regex:s,paramNames:n,render:t})}function Yt(e){e.startsWith("#")||(e="#"+e),window.location.hash===e?B():window.location.hash=e}function Xt(e,{onNavigate:t}={}){window.addEventListener("hashchange",B),B.rootEl=e,B.onNavigate=t,B()}async function B(){var n;const e=B.rootEl,t=window.location.hash.slice(1)||"/",a=t.startsWith("/")?t:`/${t}`;for(const s of tt){const r=s.regex.exec(a);if(r){const i={};s.paramNames.forEach((l,o)=>i[l]=decodeURIComponent(r[o+1])),(n=B.onNavigate)==null||n.call(B,a),Qt(a);try{e.classList.remove("view-enter"),await s.render({params:i,path:a,root:e}),e.classList.add("view-enter")}catch(l){console.error("Route render error:",l),e.innerHTML=`<div class="empty-state">
          <div class="empty-state-icon">⚠</div>
          <h2>Fehler beim Anzeigen</h2>
          <p>${We(l.message||String(l))}</p>
        </div>`}return}}e.innerHTML=`<div class="empty-state">
    <div class="empty-state-icon">?</div>
    <h2>Seite nicht gefunden</h2>
    <p>Die Route <code>${We(a)}</code> existiert nicht.</p>
    <a href="#/" class="btn primary">Zum Dashboard</a>
  </div>`}function Qt(e){document.querySelectorAll("[data-route]").forEach(a=>{const n=a.getAttribute("data-route"),s=n==="/"?e==="/":e===n||e.startsWith(n+"/");a.classList.toggle("active",s)});const t=e==="/"?"dashboard":e.split("/").filter(Boolean)[0];document.body.setAttribute("data-view",t||"dashboard")}function ea(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function We(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const ta="modulepreload",aa=function(e){return"/better-ess/"+e},Ke={},na=function(t,a,n){let s=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.allSettled(a.map(o=>{if(o=aa(o),o in Ke)return;Ke[o]=!0;const c=o.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${d}`))return;const g=document.createElement("link");if(g.rel=c?"stylesheet":ta,c||(g.as="script"),g.crossOrigin="",g.href=o,l&&g.setAttribute("nonce",l),document.head.appendChild(g),c)return new Promise((u,h)=>{g.addEventListener("load",u),g.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})}))}function r(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return s.then(i=>{for(const l of i||[])l.status==="rejected"&&r(l.reason);return t().catch(r)})},p=new Mt("zeitnachweis");p.version(1).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"});p.version(2).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});p.version(3).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});p.version(4).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});p.version(5).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{const t=await e.table("profil").get("self");t&&(!t.zeitwirtschaftEmail||t.zeitwirtschaftEmail==="zeitwirtschaft@putzmeister.com")&&await e.table("profil").put({...t,zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com"})});p.version(6).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});p.version(7).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{const t=await e.table("profil").get("self");if(!t)return;let a=t.ueber18??!0;if(t.geburtsdatum){const s=new Date(t.geburtsdatum),r=new Date;a=r.getFullYear()-s.getFullYear()-(r<new Date(r.getFullYear(),s.getMonth(),s.getDate())?1:0)>=18}const n={id:"self",ueber18:a,sollStundenProWoche:t.sollStundenProWoche??35,sollStundenProTag:t.sollStundenProTag??7,berufsschulMuster:t.berufsschulMuster??{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null},zeitwirtschaftEmail:t.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:t.zeitwirtschaftAnrede||"Frau Kanarya",pausenRegel:t.pausenRegel??"auto",erstelltAm:t.erstelltAm??new Date().toISOString(),updatedAt:new Date().toISOString()};await e.table("profil").put(n)});async function sa(){try{const{erkenneBerufsschulMuster:e}=await na(async()=>{const{erkenneBerufsschulMuster:i}=await Promise.resolve().then(()=>Ua);return{erkenneBerufsschulMuster:i}},void 0),t=await p.tage.toArray();if(!t.length)return!1;const a=e(t),n=await p.profil.get("self");if(!n)return!1;const s=n.berufsschulMuster??{};return JSON.stringify(s.wochentageWoechentlich??[])!==JSON.stringify(a.wochentageWoechentlich)||JSON.stringify(s.wochentage14Taegig??[])!==JSON.stringify(a.wochentage14Taegig)||(s.referenzDatum14Taegig??null)!==(a.referenzDatum14Taegig??null)||(s.stundenProTag??null)!==(a.stundenProTag??null)||(s.halbtags??!1)!==(a.halbtags??!1)?(await p.profil.put({...n,berufsschulMuster:a}),!0):!1}catch(e){return console.warn("[db] refreshBerufsschulMuster fehlgeschlagen:",e),!1}}async function ia(){try{const e=await p.mailVorlagen.toArray(),t=e.some(n=>n.betreff&&!n.betreff.startsWith("Bitte um Zeitkorrektur im ESS")),a=e.some(n=>n.text&&!/Vielen Dank!\s*$/.test(n.text));return t||a?(await p.mailVorlagen.clear(),!0):!1}catch(e){return console.warn("[db] ensureMailVorlagenFresh fehlgeschlagen:",e),!1}}async function ra(){const e=await p.einstellungen.get("__migration_reset");return(e==null?void 0:e.value)===!0?(await p.einstellungen.delete("__migration_reset"),!0):!1}async function Z(){return await p.profil.get("self")??at()}async function oe(e){const t={...e,id:"self",updatedAt:new Date().toISOString()};return await p.profil.put(t),t}function at(){return{id:"self",ueber18:!0,sollStundenProWoche:35,sollStundenProTag:7,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1},zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:"Frau Kanarya",pausenRegel:"auto",erstelltAm:new Date().toISOString()}}async function la(e,t=null){const a=await p.einstellungen.get(e);return a?a.value:t}async function oa(e,t){await p.einstellungen.put({key:e,value:t})}async function O(){return await p.tage.orderBy("datum").toArray()}async function ca(e){return e.length?(await p.tage.bulkPut(e),e.length):0}async function da(e){return e.length?(await p.monate.bulkPut(e),e.length):0}async function se(){return await p.monate.orderBy("monatKey").toArray()}async function ua(e){return await p.uploads.add({...e,hochladeDatum:new Date().toISOString()})}async function Se(){return await p.uploads.orderBy("hochladeDatum").last()}async function nt(){return await p.uploads.orderBy("hochladeDatum").reverse().toArray()}async function ga(){await Promise.all([p.profil.clear(),p.tage.clear(),p.monate.clear(),p.uploads.clear(),p.einstellungen.clear(),p.mailVorlagen.clear(),p.warnungDismissals.clear()])}async function st(){await Promise.all([p.tage.clear(),p.monate.clear(),p.uploads.clear(),p.warnungDismissals.clear()])}async function ha(){const[e,t,a,n,s,r,i]=await Promise.all([p.profil.toArray(),p.tage.toArray(),p.monate.toArray(),p.uploads.toArray(),p.einstellungen.toArray(),p.mailVorlagen.toArray(),p.warnungDismissals.toArray()]);return{version:1,exportedAt:new Date().toISOString(),data:{profil:e,tage:t,monate:a,uploads:n,einstellungen:s,mailVorlagen:r,warnungDismissals:i}}}async function fa(e){if(!e||e.version!==1||!e.data)throw new Error("Ungültiges oder inkompatibles Backup-Format.");const t=e.data;await p.transaction("rw",p.profil,p.tage,p.monate,p.uploads,p.einstellungen,p.mailVorlagen,p.warnungDismissals,async()=>{var a,n,s,r,i,l,o;(a=t.profil)!=null&&a.length&&await p.profil.bulkPut(t.profil),(n=t.tage)!=null&&n.length&&await p.tage.bulkPut(t.tage),(s=t.monate)!=null&&s.length&&await p.monate.bulkPut(t.monate),(r=t.uploads)!=null&&r.length&&await p.uploads.bulkPut(t.uploads),(i=t.einstellungen)!=null&&i.length&&await p.einstellungen.bulkPut(t.einstellungen),(l=t.mailVorlagen)!=null&&l.length&&await p.mailVorlagen.bulkPut(t.mailVorlagen),(o=t.warnungDismissals)!=null&&o.length&&await p.warnungDismissals.bulkPut(t.warnungDismissals)})}async function ce(e,t){await p.mailVorlagen.put({key:e,...t})}async function $e(){return await p.mailVorlagen.toArray()}async function pa(e,t){await p.warnungDismissals.put({key:`${e}-${t}`,datum:e,typ:t,dismissedAt:new Date().toISOString()})}async function ma(){return await p.warnungDismissals.toArray()}function it(e){if(e==null)return null;if(typeof e=="number")return e;let t=String(e).trim();if(!t)return null;let a=!1;t.endsWith("-")&&(a=!0,t=t.slice(0,-1).trim()),t=t.replace(",",".");const n=parseFloat(t);return isNaN(n)?null:a?-n:n}function q(e){if(e==null||isNaN(e))return"—";const t=e<0,a=Math.abs(e),n=Math.floor(a),s=Math.round((a-n)*60);let r=n,i=s;return i===60&&(r+=1,i=0),`${t?"-":""}${r}:${String(i).padStart(2,"0")}`}function P(e,t={}){if(e==null||isNaN(e))return"—";const{signed:a=!1,suffix:n="h"}=t,s=a&&e>0?"+":"",r=e.toFixed(2).replace(".",",");return`${s}${r}${n}`}function K(e){if(!e)return null;const t=/^(\d{1,2}):(\d{2})$/.exec(String(e).trim());return t?parseInt(t[1],10)*60+parseInt(t[2],10):null}function ge(e){if(!(e!=null&&e.length))return null;const t=e.filter(s=>s.von&&s.bis);if(!t.length)return null;let a=t[0].von,n=t[0].bis;for(const s of t)K(s.von)<K(a)&&(a=s.von),K(s.bis)>K(n)&&(n=s.bis);return{kommen:a,gehen:n}}function ba(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
    <polyline points="10 17 15 12 10 7"/>
    <line x1="15" y1="12" x2="3" y2="12"/>
  </svg>`}function va(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>`}function he(e,t={}){const{size:a=20,layout:n="inline"}=t;return e?`
    <div class="kommen-gehen ${n}">
      <span class="kg-block kommen" title="Kommen (frühester Einstempel)">
        ${ba(a)}
        <span class="kg-zeit tabular">${e.kommen}</span>
      </span>
      <span class="kg-block gehen" title="Gehen (spätester Ausstempel)">
        ${va(a)}
        <span class="kg-zeit tabular">${e.gehen}</span>
      </span>
    </div>
  `:'<span class="kg-empty">—</span>'}const Be={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},ya=(e,t,a)=>{let n;const s=a!=null&&a.addSuffix?Be[e].withPreposition:Be[e].standalone;return typeof s=="string"?n=s:t===1?n=s.one:n=s.other.replace("{{count}}",String(t)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:"vor "+n:n},wa={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},xa={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},ka={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Sa={date:pe({formats:wa,defaultWidth:"full"}),time:pe({formats:xa,defaultWidth:"full"}),dateTime:pe({formats:ka,defaultWidth:"full"})},$a={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},Ma=(e,t,a,n)=>$a[e],za={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},Da={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},ye={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},Pa={narrow:ye.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:ye.wide},Aa={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},Ta={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},Ea={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},La=e=>Number(e)+".",Fa={ordinalNumber:La,era:Y({values:za,defaultWidth:"wide"}),quarter:Y({values:Da,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Y({values:ye,formattingValues:Pa,defaultWidth:"wide"}),day:Y({values:Aa,defaultWidth:"wide"}),dayPeriod:Y({values:Ta,defaultWidth:"wide",formattingValues:Ea,defaultFormattingWidth:"wide"})},Wa=/^(\d+)(\.)?/i,Ka=/\d+/i,Ba={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},Oa={any:[/^v/i,/^n/i]},Ca={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},Va={any:[/1/i,/2/i,/3/i,/4/i]},Ia={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},_a={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Za={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},ja={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},Ha={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},Na={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},Ra={ordinalNumber:zt({matchPattern:Wa,parsePattern:Ka,valueCallback:e=>parseInt(e)}),era:X({matchPatterns:Ba,defaultMatchWidth:"wide",parsePatterns:Oa,defaultParseWidth:"any"}),quarter:X({matchPatterns:Ca,defaultMatchWidth:"wide",parsePatterns:Va,defaultParseWidth:"any",valueCallback:e=>e+1}),month:X({matchPatterns:Ia,defaultMatchWidth:"wide",parsePatterns:_a,defaultParseWidth:"any"}),day:X({matchPatterns:Za,defaultMatchWidth:"wide",parsePatterns:ja,defaultParseWidth:"any"}),dayPeriod:X({matchPatterns:Ha,defaultMatchWidth:"wide",parsePatterns:Na,defaultParseWidth:"any"})},ie={code:"de",formatDistance:ya,formatLong:Sa,formatRelative:Ma,localize:Fa,match:Ra,options:{weekStartsOn:1,firstWeekContainsDate:4}};function ae(e){if(!e)return null;const t=e.trim();return At(t,"dd.MM.yyyy",new Date)}function w(e){return D(e,"dd.MM.yyyy")}function rt(e){return D(e,"EE, dd.MM.yyyy",{locale:ie})}function lt(e){const t=Dt(e,{weekStartsOn:1}),a=Pt(e,{weekStartsOn:1});return`${D(t,"dd.MM.")} – ${D(a,"dd.MM.yyyy")}`}function qa(e){return`${Tt(e)}-${String(Et(e)).padStart(2,"0")}`}function ot(e){return D(e,"yyyy-MM")}function Ga(e){return D(e,"yyyy-MM-dd")}function Ja(e,t){if(!e||!t)return 0;e>t&&([e,t]=[t,e]);let a=0,n=new Date(e);for(;n<t;)n=Qe(n,1),et(n)||a++;return a}function T(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function ct(e){var d;const t=e.filter(g=>g.tagestyp==="Berufsschule");if(t.length<2)return{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1};const a={};for(const g of t)a[d=g.wochentag]??(a[d]=[]),a[g.wochentag].push(g);const n=[],s=[];let r=null;for(const[g,u]of Object.entries(a)){if(u.sort((b,y)=>b.datum.localeCompare(y.datum)),u.length<2)continue;const h=[];for(let b=1;b<u.length;b++)h.push(Lt($(u[b].datum),$(u[b-1].datum)));const f=Oe(h);f<=10?n.push(g):f<=18&&(s.push(g),(!r||$(u[0].datum)<$(r))&&(r=u[0].datum))}const i=t.map(g=>g.ist).filter(g=>g!=null&&g>0),l=Oe(i),o=l!=null?Math.round(l*4)/4:null,c=o!=null&&o<5;return{wochentageWoechentlich:n,wochentage14Taegig:s,referenzDatum14Taegig:r,stundenProTag:o,halbtags:c}}function Oe(e){if(!e.length)return null;const t=e.slice().sort((n,s)=>n-s),a=Math.floor(t.length/2);return t.length%2?t[a]:(t[a-1]+t[a])/2}function Me(e,t){var s,r;if(!t)return!1;const n=["SO","MO","DI","MI","DO","FR","SA"][e.getDay()];if((s=t.wochentageWoechentlich)!=null&&s.includes(n))return!0;if((r=t.wochentage14Taegig)!=null&&r.includes(n)&&t.referenzDatum14Taegig){const i=$(t.referenzDatum14Taegig),l=Ft(e,i,{weekStartsOn:1});if(l>=0&&l%2===0)return!0}return!1}function dt(e,t=null){return(e==null?void 0:e.stundenProTag)!=null&&e.stundenProTag>0?e.stundenProTag:t}const Ua=Object.freeze(Object.defineProperty({__proto__:null,erkenneBerufsschulMuster:ct,erwarteteBerufsschulStunden:dt,istBerufsschulTagLautMuster:Me},Symbol.toStringTag,{value:"Module"}));function Ya(e){return e?"arbzg":"jarbschg"}function Xa(e,t){return e==null?0:t==="jarbschg"?e>6?1:e>4.5?.5:0:e>9?.75:e>6?.5:0}function ut(e){if(!e||e.length<2)return 0;const t=e.filter(n=>n.von&&n.bis).map(n=>({von:K(n.von),bis:K(n.bis)})).filter(n=>n.von!=null&&n.bis!=null).sort((n,s)=>n.von-s.von);let a=0;for(let n=1;n<t.length;n++){const s=t[n].von-t[n-1].bis;(s>0&&s>=15||s>0)&&(a+=s)}return a/60}function gt(e,t){const a=e.zeitSpannen??[];if(!a.length||a.every(f=>!f.von))return{keinAnspruch:!0};const n=ut(a),s=e.pause??0,r=Qa(a),i=r-s,l=t.pausenRegel&&t.pausenRegel!=="auto"?t.pausenRegel==="jarbschg"?"jarbschg":"arbzg":Ya(!!t.ueber18),o=Xa(i,l),c=Math.max(n,o),d=s-c,g=Math.max(0,o-n);let u="ok",h=null;if(d>.05)u="fehler_zeitwirtschaft",h=`${Math.round(d*60)} min Pause wurden zusätzlich zur gesetzlichen Pflicht und zur gestempelten Pause abgezogen. Das sieht nach einem Zeitwirtschafts-Fehler aus.`;else if(g>.05&&s>n+.02){u="aufstockung_legal";const f=Math.round(g*60);h=`Du hast ${Math.round(n*60)} min Pause gestempelt, aber bei ${i.toFixed(2).replace(".",",")}h Arbeitszeit schreibt das Gesetz (${l.toUpperCase()}) ${Math.round(o*60)} min vor. Die fehlenden ${f} min wurden automatisch als Pause gewertet. Das ist gesetzeskonform — nächstes Mal einfach länger Pause machen.`}return{arbeitszeitMitPause:r,arbeitszeitOhnePause:i,gestempeltePause:n,abgezogenePause:s,gesetzlichePflicht:o,gesetz:l,legalerAbzug:c,unrechtmaessigerVerlustMin:Math.round(Math.max(0,d)*60),aufstockungMin:Math.round(Math.max(0,g)*60),typ:u,warnung:h}}function Qa(e){let t=0;for(const a of e){if(!a.von||!a.bis)continue;const n=K(a.von),s=K(a.bis);n!=null&&s!=null&&s>n&&(t+=s-n)}return t/60}const Q={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function ze(e,t,a,n=new Set){var d,g;const s=[],r=a??new Date,i=new Map(e.map(u=>[u.datum,u]));if(!e.length)return s;const l=$(e[0].datum),o=r;for(let u=new Date(l);u<=o;u=Qe(u,1)){if(et(u))continue;const h=D(u,"yyyy-MM-dd"),f=i.get(h),b=Ja(u,o);if(!f||!f.tagestyp&&!f.ist&&(((d=f.zeitSpannen)==null?void 0:d.length)??0)===0){if(Me(u,t.berufsschulMuster)){const m=b>=4?"error":b>=2?"warn":"info";ee(s,n,{datum:h,wochentag:(f==null?void 0:f.wochentag)??re(u),typ:"bs_tag_fehlt",schweregrad:m,titel:`Berufsschultag nicht eingetragen: ${w(u)}`,beschreibung:`Laut deinem Profil hast du am ${Q[re(u)]}, ${w(u)} Berufsschule. Im Zeitnachweis fehlt der Tag bisher${b>=4?" — bitte bei der Zeitwirtschaft nachhaken":""}.`,alter:b,mailVorlageKey:m==="error"?"bs_tag_fehlt":null})}else{const m=b>=4?"error":b>=2?"warn":"info";ee(s,n,{datum:h,wochentag:re(u),typ:"stempelzeit_fehlt",schweregrad:m,titel:`Keine Stempelzeit am ${w(u)}`,beschreibung:`Am ${Q[re(u)]}, ${w(u)} wurde keine Stempelzeit erfasst. Falls du an diesem Tag im Haus warst, sollte die Zeitwirtschaft das nachtragen${b>=4?" — es ist inzwischen ≥4 Werktage her":""}.`,alter:b,mailVorlageKey:m==="error"?"stempelzeit_fehlt":null})}continue}if(f.tagestyp==="Berufsschule"&&f.ist!=null){const m=dt(t.berufsschulMuster,f.soll);m!=null&&f.ist<m-.5&&ee(s,n,{datum:h,wochentag:f.wochentag,typ:"bs_stunden_falsch",schweregrad:"error",titel:`Berufsschultag mit zu wenig Stunden: ${w(u)}`,beschreibung:`Am ${Q[f.wochentag]}, ${w(u)} sind nur ${f.ist.toFixed(2).replace(".",",")}h gebucht statt der für dich üblichen ${m.toFixed(2).replace(".",",")}h. Die Zeitwirtschaft hat den Berufsschultag möglicherweise nur halb erfasst.`,ist:f.ist,soll:m,mailVorlageKey:"bs_stunden_falsch"})}if(f.tagestyp==="Stempelzeit"&&((g=f.zeitSpannen)==null?void 0:g.length)>1&&h>="2026-04-01"){const m=gt(f,t);(m==null?void 0:m.typ)==="fehler_zeitwirtschaft"&&m.unrechtmaessigerVerlustMin>=5?ee(s,n,{datum:h,wochentag:f.wochentag,typ:"pausen_abzug",schweregrad:m.unrechtmaessigerVerlustMin>=15?"error":"warn",titel:`Pausen-Abzug fehlerhaft (${w(u)})`,beschreibung:`Am ${Q[f.wochentag]}, ${w(u)} wurden ${Math.round(m.abgezogenePause*60)} min Pause abgezogen. Gestempelt: ${Math.round(m.gestempeltePause*60)} min, gesetzlich nötig (${m.gesetz.toUpperCase()}): ${Math.round(m.gesetzlichePflicht*60)} min. Differenz von ${m.unrechtmaessigerVerlustMin} min ist unerklärlich.`,verlustMinuten:m.unrechtmaessigerVerlustMin,abgezogen:m.abgezogenePause,gestempelt:m.gestempeltePause,mailVorlageKey:"pausen_abzug"}):(m==null?void 0:m.typ)==="aufstockung_legal"&&m.aufstockungMin>=10&&ee(s,n,{datum:h,wochentag:f.wochentag,typ:"pausen_aufstockung",schweregrad:"info",titel:`Zu wenig Pause gestempelt (${w(u)}) — ${m.aufstockungMin} min automatisch aufgestockt`,beschreibung:`Am ${Q[f.wochentag]}, ${w(u)} hast du nur ${Math.round(m.gestempeltePause*60)} min Pause gemacht. Gesetz (${m.gesetz.toUpperCase()}) schreibt ${Math.round(m.gesetzlichePflicht*60)} min vor. Fehlende ${m.aufstockungMin} min wurden als Pause gewertet — das ist legal, aber du verlierst dadurch Arbeitszeit. Tipp: mach beim nächsten Mal etwas länger Mittag.`})}}const c={error:0,warn:1,info:2};return s.sort((u,h)=>{const f=c[u.schweregrad]-c[h.schweregrad];return f!==0?f:h.datum.localeCompare(u.datum)}),s}function ht(e,t=new Set){var n,s,r,i;const a=[];for(const l of e){const o=((n=l.glz)==null?void 0:n.saldoVorperiode)??0,c=((s=l.glz)==null?void 0:s.saldoAktuellePeriode)??0,d=((r=l.glz)==null?void 0:r.umgebuchteStunden)??0,g=(i=l.glz)==null?void 0:i.saldoGesamt;if(g==null)continue;const u=o+c+d,h=Math.abs(g-u);if(h>.03){const f=`${l.monatKey}-saldo_plausi`;t.has(f)||a.push({datum:`${l.monatKey}-01`,wochentag:"",typ:"saldo_plausi",schweregrad:"warn",titel:`Saldo-Differenz im Monat ${l.monatKey}`,beschreibung:`Rechnung: Vorperiode ${o.toFixed(2)} + aktuelle Periode ${c.toFixed(2)} + umgebucht ${d.toFixed(2)} = ${u.toFixed(2)}, aber dein Saldo wird mit ${g.toFixed(2)} angezeigt. Abweichung: ${h.toFixed(2)}h.`,soll:u,ist:g})}}return a}function ee(e,t,a){const n=`${a.datum}-${a.typ}`;t.has(n)||(a.id=n,e.push(a))}function re(e){return["SO","MO","DI","MI","DO","FR","SA"][e.getDay()]}function en(e,t){var o,c,d;const a=[...e].sort((g,u)=>g.datum.localeCompare(u.datum));if(!a.length)return[];const n=new Map(t.map(g=>[g.monatKey,g])),s={};for(const g of a)s[o=g.monatKey]??(s[o]=[]),s[g.monatKey].push(g);const r=Object.keys(s).sort(),i=[];let l=null;for(const g of r){const u=n.get(g);let h;((c=u==null?void 0:u.glz)==null?void 0:c.saldoVorperiode)!=null?h=u.glz.saldoVorperiode:l!=null?h=l:h=0;const f=s[g];for(const b of f)b.diff!=null&&(h+=b.diff),i.push({datum:b.datum,wochentag:b.wochentag,saldo:Math.round(h*100)/100,diff:b.diff,ist:b.ist,soll:b.soll,tagestyp:b.tagestyp,monatKey:b.monatKey,wocheKey:b.wocheKey,zeitSpannen:b.zeitSpannen});if(((d=u==null?void 0:u.glz)==null?void 0:d.saldoGesamt)!=null){const b=u.glz.saldoGesamt-h;if(Math.abs(b)>.02&&i.length>0){const y=i.length-1;i[y].umbuchung=b,i[y].saldo=Math.round((i[y].saldo+b)*100)/100,h=i[y].saldo}l=u.glz.saldoGesamt}else l=h}return i}function tn(e,t){if(!e.length)return[];if(t==="alles")return e;const a=Math.min(t,e.length);return e.slice(-a)}function an(e){return e.length?e[e.length-1].saldo:0}function nn(e){if(!e.length)return 0;const t=e[0].saldo-(e[0].diff??0),a=e[e.length-1].saldo;return Math.round((a-t)*100)/100}const sn={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"},ne={bs_tag_fehlt:{key:"bs_tag_fehlt",titel:"Berufsschultag fehlt",beschreibung:"Wenn ein Berufsschultag komplett nicht im Zeitnachweis eingetragen wurde.",betreff:"Bitte um Zeitkorrektur im ESS  - Fehlender Berufsschultag {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

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

Vielen Dank!`}};function fe(e,t){const a=ne[e];return a?{...a,...t??{}}:null}function ft(e,t){const a=Ce(e.text,t);return{betreff:Ce(e.betreff,t),text:a}}function Ce(e,t){return e.replace(/\{(\w+)\}/g,(a,n)=>t[n]!=null?String(t[n]):`{${n}}`)}function pt(e,t){const a=t.datum?new Date(t.datum):null;return{name:"",personalnr:"",kostenstelle:"",datum:a?rt(a).split(", ")[1]:"",wochentag:sn[t.wochentag]??t.wochentag??"",zeitwirtschaft_anrede:e.zeitwirtschaftAnrede||"Frau Kanarya",zeitwirtschaft_email:e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",ist:t.ist!=null?t.ist.toFixed(2).replace(".",","):"",soll:t.soll!=null?t.soll.toFixed(2).replace(".",","):"",abgezogen:t.abgezogen!=null?Math.round(t.abgezogen*60):"",gestempelt:t.gestempelt!=null?Math.round(t.gestempelt*60):"",verlust:t.verlustMinuten??""}}function mt(e,t,a){const n=ft(t,a),s=e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",r=new URLSearchParams;return r.set("subject",n.betreff),r.set("body",n.text),`mailto:${s}?${r.toString().replace(/\+/g,"%20")}`}L.register(Wt,Kt,Bt,Ot,Ct,Vt,It,_t,Zt,jt,Ht,Nt,Rt,qt);function S(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function C(){return{fg:S("--fg"),fgMuted:S("--fg-muted"),fgSubtle:S("--fg-subtle"),border:S("--border"),surface:S("--surface"),accent:S("--accent"),success:S("--success"),warn:S("--warn"),danger:S("--danger"),info:S("--info"),palette:[S("--chart-1"),S("--chart-2"),S("--chart-3"),S("--chart-4"),S("--chart-5"),S("--chart-6"),S("--chart-7")]}}function x(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.fgMuted,font:{size:12}}},tooltip:{backgroundColor:e.surface,titleColor:e.fg,bodyColor:e.fg,borderColor:e.border,borderWidth:1,padding:10,displayColors:!0}},scales:{x:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}},y:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}}}}}function rn(e,t){const a=C();if(V(e),!(t!=null&&t.length))return;const n=t.map(r=>D($(r.datum),"dd.MM.")),s=t.map(r=>r.saldo);return s.map(r=>r>=0?a.success:a.danger),new L(e,{type:"line",data:{labels:n,datasets:[{label:"Tages-Saldo",data:s,borderColor:a.accent,backgroundColor:r=>{const i=r.chart,{ctx:l,chartArea:o,scales:c}=i;return o?pn(l,o,c.y,a):I(a.accent,.14)},segment:{borderColor:r=>{const i=r.p0.parsed.y,l=r.p1.parsed.y,o=(i+l)/2;return o>=.02?a.success:o<=-.02?a.danger:a.fgMuted}},tension:.25,pointRadius:2,pointHoverRadius:6,pointHitRadius:20,pointBackgroundColor:s.map(r=>r>=.02?a.success:r<=-.02?a.danger:a.fgMuted),pointBorderColor:a.surface,pointBorderWidth:1,fill:!0,borderWidth:2}]},options:{...x(a),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},plugins:{...x(a).plugins,legend:{display:!1},tooltip:{enabled:!1,mode:"index",intersect:!1,axis:"x",position:"nearest",external:ln(t)}},scales:{...x(a).scales,y:{...x(a).scales.y,ticks:{...x(a).scales.y.ticks,callback:r=>`${r>=0?"+":""}${r.toFixed(1).replace(".",",")}h`}}}}})}function ln(e){return function(t){var J;const{chart:a,tooltip:n}=t;let s=a.$saldoTooltipEl;if(!s){s=document.createElement("div"),s.className="saldo-tooltip",document.body.appendChild(s),a.$saldoTooltipEl=s;const R=a.destroy.bind(a);a.destroy=function(){s.parentNode&&s.parentNode.removeChild(s),R()}}if(n.opacity===0||!((J=n.dataPoints)!=null&&J.length)){s.style.opacity="0";return}const r=n.dataPoints[0].dataIndex,i=e[r];if(!i){s.style.opacity="0";return}const l=i.saldo>.05?"pos":i.saldo<-.05?"neg":"flat",o=(i.diff??0)>.05?"pos":(i.diff??0)<-.05?"neg":"flat",c=(i.saldo>0?"+":"")+i.saldo.toFixed(2).replace(".",",")+"h",d=i.diff!=null?(i.diff>0?"+":"")+i.diff.toFixed(2).replace(".",",")+"h":null;let u=`<div class="saldo-tooltip-title">${Ve(D($(i.datum),"EE, dd.MM.yyyy",{locale:ie}))}</div>`;u+=`<div class="saldo-tooltip-row"><span class="saldo-tooltip-label">Saldo</span><span class="saldo-tooltip-value ${l}">${c}</span></div>`,d&&(u+=`<div class="saldo-tooltip-row"><span class="saldo-tooltip-label">Tages-Diff</span><span class="saldo-tooltip-value ${o}">${d}</span></div>`);const h=[];i.tagestyp&&h.push(`Typ: ${Ve(i.tagestyp)}`),i.umbuchung&&h.push(`Umbuchung: ${i.umbuchung>=0?"+":""}${i.umbuchung.toFixed(2).replace(".",",")}h`),h.length&&(u+=`<div class="saldo-tooltip-meta">${h.map(R=>`<span>${R}</span>`).join("")}</div>`),s.innerHTML=u;const f=a.canvas.getBoundingClientRect(),b=f.left+n.caretX,y=f.top+n.caretY;s.style.opacity="0",s.style.left="0px",s.style.top="0px";const m=s.offsetWidth,k=s.offsetHeight,N=18;let j=b+N;j+m>window.innerWidth-8&&(j=b-N-m);let F=y-k/2;F<8&&(F=8),F+k>window.innerHeight-8&&(F=window.innerHeight-k-8),s.style.left=j+"px",s.style.top=F+"px",s.style.opacity="1"}}function Ve(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function on(e,t){const a=C();if(V(e),!(t!=null&&t.length))return;const n=t.map(r=>r.monatKey),s=t.map(r=>{var i;return((i=r.glz)==null?void 0:i.saldoGesamt)??0});return new L(e,{type:"line",data:{labels:n,datasets:[{label:"GLZ-Saldo (Monatsende)",data:s,borderColor:a.accent,backgroundColor:I(a.accent,.18),tension:.35,fill:!0,pointRadius:4}]},options:x(a)})}function De(e,t){const a=C();if(V(e),!(t!=null&&t.length))return;const n=t.map(i=>D($(i.datum),"dd.MM.")),s=t.map(i=>i.ist??0),r=t.map(i=>mn(i.tagestyp,a));return new L(e,{type:"bar",data:{labels:n,datasets:[{label:"Ist-Stunden",data:s,backgroundColor:r,borderRadius:4,borderSkipped:!1}]},options:{...x(a),plugins:{...x(a).plugins,legend:{display:!1},tooltip:{...x(a).plugins.tooltip,callbacks:{label:i=>{const l=t[i.dataIndex];return`${l.tagestyp??"—"}: ${(l.ist??0).toFixed(2).replace(".",",")}h`}}}},scales:{...x(a).scales,y:{...x(a).scales.y,suggestedMin:0,suggestedMax:10}}}})}function cn(e,t){const a=C();if(V(e),!(t!=null&&t.length))return;const n=t.filter(c=>{var d;return((d=c.zeitSpannen)==null?void 0:d.length)&&c.zeitSpannen.some(g=>g.von&&g.bis)}).map(c=>{const d=c.zeitSpannen.filter(h=>h.von&&h.bis).map(h=>({von:K(h.von),bis:K(h.bis),vonStr:h.von,bisStr:h.bis})).filter(h=>h.von!=null&&h.bis!=null);if(d.length===0)return null;const g=Math.min(...d.map(h=>h.von)),u=Math.max(...d.map(h=>h.bis));return{...c,_spans:d,_minVon:g,_maxBis:u}}).filter(Boolean);if(!n.length)return;const s=c=>c.ist==null?a.fgMuted:c.ist>=7?a.success:a.danger,r={label:"Tages-Rahmen",data:n.map(c=>[c._minVon,c._maxBis]),backgroundColor:n.map(s),borderColor:n.map(s),borderWidth:0,borderRadius:4,borderSkipped:!1,barPercentage:.75,categoryPercentage:.95},i=Math.max(0,Math.floor(Math.min(...n.map(c=>c._minVon))/60)*60-60),l=Math.min(24*60,Math.ceil(Math.max(...n.map(c=>c._maxBis))/60)*60+60),o=c=>`${String(Math.floor(c/60)).padStart(2,"0")}:${String(c%60).padStart(2,"0")}`;return new L(e,{type:"bar",data:{labels:n.map(c=>D($(c.datum),"dd.MM.")),datasets:[r]},options:{...x(a),interaction:{mode:"index",intersect:!1,axis:"x"},plugins:{legend:{display:!1},tooltip:{enabled:!0,backgroundColor:a.surface,borderColor:a.accent,borderWidth:2,padding:14,titleColor:a.fg,titleFont:{size:14,weight:"600"},titleMarginBottom:8,bodyColor:a.fg,bodyFont:{size:13},bodySpacing:4,displayColors:!1,caretPadding:10,cornerRadius:8,callbacks:{title:c=>{const d=n[c[0].dataIndex];return D($(d.datum),"EE, dd.MM.yyyy",{locale:ie})},label:()=>"",beforeBody:c=>{const d=n[c[0].dataIndex],g=d.ist!=null?q(d.ist):"—",u=d.soll!=null?q(d.soll):"—",h=d.pause!=null?Math.round(d.pause*60)+" min":"—",b=[`Tages-Rahmen: ${`${o(d._minVon)} – ${o(d._maxBis)}`}`];return d._spans.length>1&&(b.push(""),d._spans.forEach((y,m)=>{b.push(`  Block ${m+1}: ${y.vonStr} – ${y.bisStr}`)})),[...b,"",`Arbeitszeit (netto): ${g}`,`Soll: ${u}`,`Pause (abgezogen): ${h}`]}}}},scales:{x:{ticks:{color:a.fgMuted,font:{size:10},maxRotation:60,minRotation:60,autoSkip:!0,maxTicksLimit:40},grid:{display:!1}},y:{min:i,max:l,ticks:{color:a.fgMuted,stepSize:60,callback:c=>o(c)},grid:{color:a.border}}}}})}function dn(e,t){const a=C();V(e);const n={};for(const i of t){if(i.tagestyp!=="Stempelzeit"||!i.zeitSpannen||i.zeitSpannen.length<2)continue;const l=ut(i.zeitSpannen);if(l<=0)continue;const o=Math.round(l*60),c=Math.floor(o/15)*15;n[c]=(n[c]??0)+1}const s=Object.keys(n).map(Number).sort((i,l)=>i-l),r=s.map(i=>n[i]);return new L(e,{type:"bar",data:{labels:s.map(i=>`${i}–${i+14} min`),datasets:[{label:"Häufigkeit",data:r,backgroundColor:a.palette[1],borderRadius:4}]},options:{...x(a),plugins:{...x(a).plugins,legend:{display:!1},tooltip:{...x(a).plugins.tooltip,callbacks:{title:i=>`Pause-Länge (gestempelt): ${i[0].label}`,label:i=>`${i.parsed.y} Tag(e)`}}}}})}function un(e,t){const a=C();V(e);const n=["MO","DI","MI","DO","FR"],s={},r={};for(const l of n)s[l]=0,r[l]=0;for(const l of t)n.includes(l.wochentag)&&(l.ist==null||l.ist===0||(s[l.wochentag]+=l.ist,r[l.wochentag]+=1));const i=n.map(l=>r[l]>0?s[l]/r[l]:0);return new L(e,{type:"bar",data:{labels:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"],datasets:[{label:"Ø Ist-Stunden",data:i,backgroundColor:a.palette[2],borderRadius:4}]},options:{...x(a),plugins:{...x(a).plugins,legend:{display:!1}}}})}function gn(e,t){const a=C();V(e);const n={};for(const i of t)!i.tagestyp||i.tagestyp==="Wochenende"||(n[i.tagestyp]=(n[i.tagestyp]??0)+1);const s=Object.keys(n),r=Object.values(n);return new L(e,{type:"doughnut",data:{labels:s,datasets:[{data:r,backgroundColor:s.map((i,l)=>a.palette[l%a.palette.length]),borderColor:a.surface,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:a.fgMuted,font:{size:12}}},tooltip:x(a).plugins.tooltip}}})}function hn(e,t){const a=C();V(e);const n={};for(const l of t){const o=l.wocheKey;n[o]??(n[o]={ist:0,soll:0}),n[o].ist+=l.ist??0,n[o].soll+=l.soll??0}const s=Object.keys(n).sort(),r=s.map(l=>n[l].ist),i=s.map(l=>n[l].soll);return new L(e,{type:"bar",data:{labels:s.map(l=>"KW "+l.split("-")[1]),datasets:[{label:"Ist",data:r,backgroundColor:a.palette[0],borderRadius:4},{label:"Soll",data:i,backgroundColor:a.palette[3],borderRadius:4}]},options:x(a)})}function fn(e,t){const a=C();V(e);const n=t.slice().sort((i,l)=>i.datum.localeCompare(l.datum));let s=0;const r=n.map(i=>(s+=i.diff??0,{x:i.datum,y:s}));return new L(e,{type:"line",data:{labels:r.map(i=>i.x),datasets:[{label:"Kumulative Differenz (+/- Soll)",data:r.map(i=>i.y),borderColor:a.palette[5],backgroundColor:I(a.palette[5],.15),fill:!0,tension:.2,pointRadius:0}]},options:{...x(a),scales:{x:{display:!1,grid:{display:!1}},y:{...x(a).scales.y}}}})}function V(e){const t=L.getChart(e);t&&t.destroy()}function I(e,t){const a=e.replace("#","").trim();if(a.length!==6&&a.length!==3)return e;const n=a.length===3?a.split("").map(l=>l+l).join(""):a,s=parseInt(n.slice(0,2),16),r=parseInt(n.slice(2,4),16),i=parseInt(n.slice(4,6),16);return`rgba(${s}, ${r}, ${i}, ${t})`}function pn(e,t,a,n){const{top:s,bottom:r}=t,i=e.createLinearGradient(0,s,0,r),l=a.min,o=a.max,c=o-l;if(c<=0)return I(n.success,.14);let d=(o-0)/c;return d=Math.max(0,Math.min(1,d)),i.addColorStop(0,I(n.success,.28)),i.addColorStop(Math.max(0,d-.001),I(n.success,.06)),i.addColorStop(Math.min(1,d+.001),I(n.danger,.06)),i.addColorStop(1,I(n.danger,.28)),i}function mn(e,t){const a=String(e??"").toLowerCase();return a.includes("stempel")?t.palette[0]:a.includes("berufs")?t.palette[1]:a.includes("urlaub")?t.palette[2]:a.includes("feiertag")?t.fgSubtle:a.includes("dienst")?t.palette[3]:a.includes("krank")?t.palette[4]:t.palette[5]}let bn=0;function Pe(e,{type:t="info",duration:a=3500}={}){const n=document.getElementById("toast-root");if(!n)return;const s=document.createElement("div");s.className=`toast ${t}`,s.textContent=e,s.dataset.id=++bn,n.appendChild(s),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateY(-8px)",s.style.transition="opacity 220ms, transform 220ms",setTimeout(()=>s.remove(),250)},a)}function de(e){return Pe(e,{type:"error",duration:6e3})}function z(e){return Pe(e,{type:"success"})}const Ie=[{key:7,label:"1 Woche"},{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:"alles",label:"Alles"}];async function _e({root:e}){var F,J,R,Ae;const[t,a,n,s,r,i,l]=await Promise.all([Z(),se(),O(),ma(),la("dashboardZeitraum",14),$e(),Se()]),o=Object.fromEntries(i.map(v=>[v.key,v]));if(n.length===0){e.innerHTML=$n();return}const c=!((J=(F=t.berufsschulMuster)==null?void 0:F.wochentageWoechentlich)!=null&&J.length||(Ae=(R=t.berufsschulMuster)==null?void 0:R.wochentage14Taegig)!=null&&Ae.length),d=en(n,a),g=d.length;let u=r;typeof u=="number"&&u>g&&(u="alles");const h=new Set(s.map(v=>v.key)),f=l!=null&&l.stichtagAuswertung?new Date(l.stichtagAuswertung):new Date,b=ze(n,t,f,h),y=ht(a,h),m=[...b,...y],k=an(d),N=k>.05?"positive":k<-.05?"negative":"";e.innerHTML=`
    <h1 class="view-title">Dashboard</h1>
    <p class="view-subtitle">Stand: ${_(w(new Date(n[n.length-1].datum)))}</p>

    <div class="saldo-hero" style="margin-bottom: 32px; align-items: stretch;">
      <div class="saldo-hero-text" style="min-width: 260px;">
        <h3>Aktueller Gleitzeit-Saldo</h3>
        <div class="saldo-value ${N}">${P(k,{signed:!0,suffix:""})}</div>
        <div class="saldo-unit">Stunden · tagesaktuell</div>
        <div id="hero-bewegung" class="saldo-trend flat" style="margin-top: 12px;"></div>
      </div>
      <div style="flex: 1; min-width: 400px; display: flex; flex-direction: column;">
        <div class="card-split" style="margin-bottom: 12px; align-items: center;">
          <h3 style="margin: 0;">Verlauf</h3>
          <div class="segmented" id="zeitraum-picker">
            ${Ie.map(v=>{const M=typeof v.key=="number"&&v.key>g;return`<button type="button" data-key="${v.key}" class="${u===v.key?"active":""}" ${M?'disabled style="opacity:0.4"':""}>${v.label}</button>`}).join("")}
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

    ${m.length>0?`
      <div class="card" style="margin-bottom: 32px;">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Offene Warnungen</h2>
        </div>
        ${m.slice(0,8).map(v=>Sn(v,t,o)).join("")}
        ${m.length>8?`<div style="margin-top: 12px; color: var(--fg-muted); font-size: 13px; text-align: center;">+ ${m.length-8} weitere Warnungen vorhanden</div>`:""}
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
          ${Ie.map(v=>{const M=typeof v.key=="number"&&v.key>g;return`<button type="button" data-key="${v.key}" class="${u===v.key?"active":""}" ${M?'disabled style="opacity:0.4"':""}>${v.label}</button>`}).join("")}
        </div>
      </div>
      <div id="tage-liste"></div>
    </div>

  `,Ze(u,e,d);const j=()=>e.querySelectorAll("#zeitraum-picker button, #zeitraum-picker-2 button");j().forEach(v=>{v.addEventListener("click",async()=>{if(v.disabled)return;const M=v.getAttribute("data-key"),H=M==="alles"?"alles":parseInt(M,10);j().forEach(U=>U.classList.toggle("active",U.getAttribute("data-key")===M)),await oa("dashboardZeitraum",H),Ze(H,e,d)})}),e.addEventListener("click",async v=>{const M=v.target.closest(".ist-part");if(M){v.preventDefault(),v.stopPropagation();const Le=M.getAttribute("data-val");try{await navigator.clipboard.writeText(Le);const Fe=M.textContent;M.classList.add("ok"),M.textContent="✓",setTimeout(()=>{M.classList.remove("ok"),M.textContent=Fe},800)}catch{z(`Bitte kopieren: ${Le}`)}return}const H=v.target.closest(".btn-dismiss");if(!H)return;const U=H.getAttribute("data-datum"),Te=H.getAttribute("data-typ");if(!U||!Te)return;await pa(U,Te),z("Warnung ausgeblendet.");const Ee=H.closest(".alert");Ee&&(Ee.style.display="none")})}function Ze(e,t,a){const n=tn(a,e),s=nn(n);requestAnimationFrame(()=>{const o=t.querySelector("#saldo-chart");rn(o,n)});const r=t.querySelector("#hero-bewegung");if(r){const o=s>.05?"up":s<-.05?"down":"flat",c=s>.05?"↑":s<-.05?"↓":"→";r.className=`saldo-trend ${o}`,r.innerHTML=`${c} ${Math.abs(s)<.01?"Unverändert":P(s,{signed:!0})} im Zeitraum`}const i=t.querySelector("#tage-info");if(i){const o=n.length;i.textContent=`${o} ${o===1?"Tag":"Tage"}`}const l=t.querySelector("#tage-liste");l&&(l.innerHTML=wn(n.slice().reverse()))}const vn=3,yn=2.5;function wn(e){if(!e.length)return'<p class="hint">Keine Tage im Zeitraum.</p>';const t=[];let a=null;for(const n of e)(!a||a.key!==n.wocheKey)&&(a={key:n.wocheKey,tage:[]},t.push(a)),a.tage.push(n);return`<div class="tages-liste">${t.map(n=>xn(n)).join("")}</div>`}function xn(e){var c;const t=e.tage.reduce((d,g)=>d+(g.ist??0),0),a=e.tage.reduce((d,g)=>d+(g.diff??0),0),n=(c=e.tage[0])==null?void 0:c.datum,s=n?lt($(n)):"",r=e.key?e.key.split("-")[1]:"?",i=a>.05?"pos":a<-.05?"neg":"flat",l=(a>0?"+":"")+a.toFixed(2).replace(".",",")+"h",o=t.toFixed(2).replace(".",",")+"h";return`
    <div class="woche-group">
      <div class="woche-header">
        <div class="woche-header-titel">
          <span class="woche-header-kw">KW ${_(r)}</span>
          <span class="woche-header-range tabular">${_(s)}</span>
        </div>
        <div class="woche-header-stats">
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Ist</span>
            <span class="woche-header-ist tabular">${o}</span>
          </span>
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Diff</span>
            <span class="woche-header-diff tabular ${i}">${l}</span>
          </span>
        </div>
      </div>
      <div class="woche-tage">
        ${e.tage.map(d=>kn(d)).join("")}
      </div>
    </div>
  `}function kn(e){const t=e.diff??0,a=t>0,n=a?vn:yn,s=Math.min(150,Math.abs(t)/n*50),r=a?"var(--success)":t<0?"var(--danger)":"var(--fg-subtle)",i=ge(e.zeitSpannen);return`
    <a href="#/tag/${e.datum}" class="tag-row">
      <div class="tag-row-datum">
        <div class="tabular">${_(w(new Date(e.datum)))}</div>
        <div class="tag-row-wd">${Mn(e.wochentag)}</div>
      </div>
      <div class="tag-row-typ">
        ${e.tagestyp?`<span class="pill ${zn(e.tagestyp)}">${_(e.tagestyp)}</span>`:'<span style="color: var(--fg-subtle); font-size: 12px;">—</span>'}
      </div>
      <div class="tag-row-kg">
        ${he(i,{size:18})}
      </div>
      <div class="tag-row-ist tabular">
        ${(()=>{if(e.ist==null)return'<div class="ist-wert">—</div>';const l=q(e.ist),[o,c]=l.split(":");return e.ist<=0?`<div class="ist-wert">${l}</div>`:`<div class="ist-display" title="Klick auf H oder M zum Kopieren">
            <button class="ist-part" data-val="${o}" title="${o} Stunden kopieren">${o}</button><span class="ist-sep">:</span><button class="ist-part" data-val="${c}" title="${c} Minuten kopieren">${c}</button>
          </div>`})()}
        <div style="color: var(--fg-subtle); font-size: 11px;">Soll ${e.soll!=null?q(e.soll):"—"}</div>
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
  `}function Sn(e,t,a){const n=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";let s=null;if(e.mailVorlageKey&&t){const r=fe(e.mailVorlageKey,a==null?void 0:a[e.mailVorlageKey]);if(r){const i=pt(t,e);s=mt(t,r,i)}}return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${n}</div>
      <div class="alert-body">
        <div class="alert-title">${_(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${_(e.beschreibung)}</p>
        <div class="alert-actions">
          ${s?`<a href="${me(s)}" class="btn primary sm">✉ Mail schreiben</a>`:""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
          <button class="btn ghost sm btn-dismiss" data-datum="${me(e.datum)}" data-typ="${me(e.typ)}">Ausblenden</button>
        </div>
      </div>
    </div>
  `}function $n(){return`
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
  `}function Mn(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function zn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function _(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function me(e){return _(e)}const Dn="/better-ess/assets/pdf.worker.min-yatZIOMy.mjs";Gt.workerSrc=Dn;const je={Januar:1,Februar:2,März:3,Maerz:3,April:4,Mai:5,Juni:6,Juli:7,August:8,September:9,Oktober:10,November:11,Dezember:12},Pn=["Stempelzeit","Berufsschule Std. bez","Berufsschule","Dienstreise Arbeitszeit","Reise öff.VM/PKW Beifahr.","Reise öff.VM/PKW","Urlaub","Gleitzeit","Arbeitsunfähigkeit","TgDtEinh","Neujahr","Karfreitag","Ostermontg","Ostmontg","Osterso.","Hl.3 Kön.","Allerhlg","Pfingstmo","Fronleichn","TdDtEinh"];async function An(e){var o,c;const a=await Jt({data:e}).promise,n=[];let s=0;for(let d=1;d<=a.numPages;d++){const u=await(await a.getPage(d)).getTextContent();s+=u.items.length;const h=Tn(u.items);for(const f of h)n.push({page:d,text:f})}const r=En(n),{tage:i,monate:l}=Ln(n);try{const d=await a.getMetadata();r.producer=((o=d==null?void 0:d.info)==null?void 0:o.Producer)??null,r.creator=((c=d==null?void 0:d.info)==null?void 0:c.Creator)??null}catch{}return r.totalTextItems=s,{meta:r,tage:i,monate:l}}function Tn(e){if(!e.length)return[];const t=e.slice().sort((i,l)=>{const o=l.transform[5]-i.transform[5];return Math.abs(o)>2?o:i.transform[4]-l.transform[4]}),a=[];let n=null,s=[];const r=3;for(const i of t){const l=i.transform[5];n==null||Math.abs(l-n)<=r?(s.push(i),n==null&&(n=l)):(a.push(He(s)),s=[i],n=l)}return s.length&&a.push(He(s)),a.filter(i=>i.trim().length>0)}function He(e){e.sort((n,s)=>n.transform[4]-s.transform[4]);let t="",a=-1;for(const n of e){const s=n.transform[4];a>=0&&s-a>4?t+="  ":a>=0&&s-a>.5&&(t+=" "),t+=n.str,a=s+n.width}return t}function En(e){var a,n;const t={personalnummer:null,name:null,kostenstelle:null,personalbereich:null,einstellungsdatum:null,mitarbeiterkreis:null,arbeitszeitplanregel:null,zeitraumVon:null,zeitraumBis:null,stichtagAuswertung:null};for(let s=0;s<e.length;s++){const r=e[s].text,i=/vom\s+(\d{2}\.\d{2}\.\d{4})\s+bis\s+(\d{2}\.\d{2}\.\d{4})/i.exec(r);i&&(t.zeitraumVon=ae(i[1]),t.zeitraumBis=ae(i[2]));const l=/bis einschließlich dem\s+(\d{2}\.\d{2}\.\d{4})/i.exec(r);if(l&&(t.stichtagAuswertung=ae(l[1])),/Personalnummer/i.test(r)&&/Kostenstelle/i.test(r)){const o=(((a=e[s+1])==null?void 0:a.text)??"").trim();let c=o.split(/\s{2,}/);c.length<3&&(c=o.split(/\s+/)),c.length>=3&&/^\d/.test(c[0])&&(t.personalnummer=c[0],t.kostenstelle=c[1],t.personalbereich=c[2])}if(/Einstellungsdatum/i.test(r)&&/Mitarbeiterkreis/i.test(r)){const o=(((n=e[s+1])==null?void 0:n.text)??"").trim();let c=o.split(/\s{2,}/);c.length<3&&(c=o.split(/\s+/)),c.length>=3&&/^\d{2}\.\d{2}\.\d{4}$/.test(c[0])&&(t.einstellungsdatum=ae(c[0]),t.mitarbeiterkreis=c[1],t.arbeitszeitplanregel=c[2])}if(/Bei Rückfragen wenden Sie sich an/i.test(r))for(let o=s+1;o<Math.min(s+8,e.length);o++){const c=e[o].text.trim();if(/^[A-ZÄÖÜ][a-zäöüß]+(?:\s[A-ZÄÖÜ][a-zäöüß]+)+$/.test(c)&&!/kanarya/i.test(c)&&!/tel/i.test(c)){t.name=c;break}}}return t}function Ln(e,t){var o;const a=[],n=[];let s=null,r=null,i=!1,l=0;for(;l<e.length;){const c=e[l].text,d=/Monat:\s*([A-Za-zäöüÄÖÜß]+)\s*-\s*(\d{4})/.exec(c);if(d){const f=d[1].trim(),b=parseInt(d[2],10),y=je[f]??je[f.replace("ä","ae")]??null;y&&(s={jahr:b,monat:y,monatKey:`${b}-${String(y).padStart(2,"0")}`},i=!0,r=null),l++;continue}if(/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.test(c)){const f=/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.exec(c),b=ae(f[1]);r={monatKey:(s==null?void 0:s.monatKey)??ot(b),stichtag:b,glz:{},flexi:{},zeitkonten:{},raw:{}},l=Fn(e,l+1,r),n.push(r);continue}let g=s;const u=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)\b/.exec(c.trim());if(u&&s){const f=parseInt(u[1],10);i&&f>=20?g=Bn(s):f<=15&&(i=!1)}const h=Ne(c,g);if(h){const f=[];let b=l+1;for(;b<e.length;){const m=e[b].text;if(/^\s*\d{4}\s+Umbuchung/.test(m)||Ne(m,s)||/Wochensumme/i.test(m)||/Monats.bersicht/i.test(m)||/Monat:\s*[A-Za-z]/i.test(m))break;const k=Wn(m);if(k){f.push(k),b++;continue}break}if(f.length&&h.zeitSpannen.push(...f),h.tagestyp==="Wochenende"||h.wochentag==="SA"||h.wochentag==="SO"){l=b;continue}(h.ist!=null||h.soll!=null||(((o=h.zeitSpannen)==null?void 0:o.length)??0)>0||h.tagestyp!=null)&&a.push(h),l=b;continue}l++}return{tage:a,monate:n}}function Fn(e,t,a){let n=t;const s=/(\d{4,5}|KTAU|AZAU)\s*-\s*(.+?)\s+(-?[\d,.]+-?)(?=\s+(?:\d{4,5}|KTAU|AZAU)\s*-|\s*$)/g;for(;n<e.length;){const r=e[n].text.trim();if(/^Monat:\s/.test(r)||/^Einzelergebnisse\s/.test(r)||/^Tag\b/.test(r)||/^Wochensumme/.test(r)||/^\d{2}\s+(MO|DI|MI|DO|FR|SA|SO)\b/.test(r)||/^Übersicht für den Zeitraum/i.test(r)||/^Abwesenheitsansprüche/i.test(r))break;s.lastIndex=0;let i;for(;(i=s.exec(r))!=null;){const l=i[1],o=i[2].trim(),c=it(i[3]);a.raw[l]={beschreibung:o,wert:c},l==="0008"&&(a.glz.saldoVorperiode=c),l==="8016"&&(a.glz.saldoAktuellePeriode=c),l==="9802"&&(a.glz.umgebuchteStunden=c),l==="0005"&&(a.glz.saldoGesamt=c),l==="9803"&&(a.glz.ueberzaehligeStd=c),l==="0050"&&(a.zeitkonten.produktivstunden=c),l==="9011"&&(a.flexi.jahreskontoVorperiode=c),l==="9010"&&(a.flexi.jahreskontoSaldo=c),l==="9020"&&(a.flexi.langzeitkontoSaldo=c),l==="9203"&&(a.zeitkonten.azMonatsendeUeber216=c),l==="9207"&&(a.zeitkonten.auszahlungBav=c),l==="9205"&&(a.zeitkonten.summeAuszahlung=c)}if(n++,n-t>80)break}return n}function Ne(e,t){if(!t)return null;const a=e.trim(),n=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)(?:\s+(.+))?$/.exec(a);if(!n)return null;const s=parseInt(n[1],10),r=n[2],i=(n[3]??"").trim();let l=t.jahr,o=t.monat;const c=new Date(l,o-1,s),d={datum:Ga(c),datumDate:c.toISOString(),wochentag:r,tagNr:s,monatKey:ot(c),wocheKey:qa(c),zeitSpannen:[],aktivitaeten:[],ist:null,soll:null,diff:null,pause:null,tazp:null,tagestyp:null,raw:a};return i?(Kn(i,d),d):(d.tagestyp=["SA","SO"].includes(r)?"Wochenende":null,d)}function Wn(e){const t=e.trim(),a=/^(Stempelzeit|Reise öff\.VM\/PKW Beifahr\.|Reise öff\.VM\/PKW|Dienstreise Arbeitszeit)\s+(\d{2}:\d{2})\s+(\d{2}:\d{2})\s*$/.exec(t);return a?{aktivitaet:a[1],von:a[2],bis:a[3]}:null}function Kn(e,t){let a=null,n=e;for(const d of Pn)if(e.startsWith(d)){a=d,n=e.slice(d.length).trim();break}a||(a=e.split(/\s+/)[0],n=e.slice(a.length).trim()),t.tagestyp=On(a),t.aktivitaeten.push(a);const s=n.split(/\s+/).filter(Boolean),r=/^\d{2}:\d{2}$/,i=/^-?[\d,.]+-?$/;let l=0;for(;s[l]&&r.test(s[l])&&s[l+1]&&r.test(s[l+1]);)t.zeitSpannen.push({aktivitaet:a,von:s[l],bis:s[l+1]}),l+=2;const o=[];for(;l<s.length&&i.test(s[l]);){const d=it(s[l]);d!=null&&o.push(d),l++}let c=s[l];o.length>=5?([t.ist,t.soll,t.diff,t.pause]=o,c||(c=String(o[4]))):o.length===4?[t.ist,t.soll,t.diff,t.pause]=o:o.length===3?[t.ist,t.soll,t.diff]=o:o.length===2?[t.ist,t.soll]=o:o.length===1&&(t.ist=o[0]),c&&(t.tazp=String(c))}function Bn(e){if(!e)return null;let t=e.monat-1,a=e.jahr;return t<1&&(t=12,a-=1),{jahr:a,monat:t,monatKey:`${a}-${String(t).padStart(2,"0")}`}}function On(e){return e?/^Stempelzeit$/i.test(e)?"Stempelzeit":/^Berufsschule Std\. bez$/i.test(e)||/^Berufsschule$/i.test(e)?"Berufsschule":/Dienstreise/i.test(e)||/Reise/i.test(e)?"Dienstreise":/^Urlaub$/i.test(e)?"Urlaub":/^Gleitzeit$/i.test(e)?"Gleitzeit":/Arbeitsunf.higkeit/i.test(e)?"Arbeitsunfähigkeit":/^(Neujahr|Karfreitag|Ostermontg|Ostmontg|Osterso\.|Hl\.3 Kön\.|Allerhlg|Pfingstmo|Fronleichn|TdDtEinh|TgDtEinh)$/i.test(e)?"Feiertag":e:null}const bt="better-ess-tour-completed",be=[{type:"modal",title:"Willkommen bei Better ESS",text:`Diese App liest deinen Zeitnachweis aus dem ESS und zeigt dir auf einen Blick:
      <ul style="margin: 12px 0; padding-left: 20px; line-height: 1.7;">
        <li>Wie viele Stunden du im <strong>Plus oder Minus</strong> bist</li>
        <li>Welche Tage <strong>fehlen oder falsch gebucht</strong> sind</li>
        <li>Fertige <strong>Mails an die Zeitwirtschaft</strong>, falls etwas nicht stimmt</li>
      </ul>
      Lass mich dir kurz die App zeigen — dauert maximal eine Minute.`},{type:"modal",title:"Deine Daten bleiben bei dir",text:`Wenn du gleich dein PDF hochlädst, <strong>geht es nicht ins Internet</strong>.
      <br><br>
      Stell dir die App vor wie eine Notizen-App auf deinem Handy: alles was du hier reinlädst, bleibt auf deinem Gerät. Niemand sonst sieht deine Daten — auch nicht der Anbieter dieser App.
      <br><br>
      Wenn du die Seite schließt, bleiben die Daten weiterhin nur lokal bei dir gespeichert. Du kannst sie jederzeit unter „Daten → Alles löschen" wieder loswerden.`},{type:"highlight",target:".brand-pill",title:"Logo",text:'Das ist Better ESS — kurz für „Better Employee Self-Service". Die kleine Trendlinie soll deinen Stunden-Saldo symbolisieren.',placement:"right"},{type:"highlight",target:'a[href="#/"]',title:"Dashboard",text:"Hier landest du nach dem Upload: aktueller Gleitzeit-Saldo, Verlauf der letzten Wochen, alle Auffälligkeiten und eine Tagesliste.",placement:"right"},{type:"highlight",target:'a[href="#/monat"]',title:"Monate & Wochen",text:"Pro Monat gibt es eine eigene Detailansicht mit Tagesbalken, Wochen-Drilldown und Monatssaldo. Du kannst beliebig tief reinzoomen.",placement:"right"},{type:"highlight",target:'a[href="#/analytics"]',title:"Analytics",text:"Längerfristige Trends — wie sich dein Saldo über Wochen und Monate entwickelt, und auf welche Wochentage deine Plus-/Minus-Stunden verteilt sind.",placement:"right"},{type:"highlight",target:'a[href="#/profil"]',title:"Profil",text:"Stell hier ein, ob du <strong>über 18</strong> bist (entscheidet die Pausen-Regel: ArbZG vs. JArbSchG) und wer dein Ansprechpartner bei der Zeitwirtschaft ist (für die Mails).",placement:"right"},{type:"highlight",target:'a[href="#/daten"]',title:"Daten — hier startet alles",text:'Hier lädst du dein Zeitnachweis-PDF hoch. Klick „Weiter" und ich bringe dich direkt dorthin.',placement:"right",onNext:async()=>{window.location.hash!=="#/daten"&&(window.location.hash="#/daten",await new Promise(e=>setTimeout(e,700)))}},{type:"highlight",target:"#upload-zone",title:"Drop-Zone",text:"Zieh dein Zeitnachweis-PDF hier rein, oder klick auf die Box, um es auszuwählen. Die App liest es sofort lokal ein.",placement:"bottom",waitForTarget:!0},{type:"highlight",target:".tutorial-details",title:"Wichtig: das richtige PDF",text:'Bevor du hochlädst, klick die graue Box auf — sie zeigt dir mit Screenshot wie du das PDF aus dem ESS richtig herunterlädst. <strong>Nicht über „Drucken → Als PDF"</strong>, sondern über den Speichern-Button (Disketten-Symbol). Sonst kann die App das PDF nicht lesen.',placement:"top",waitForTarget:!0},{type:"highlight",target:".card:has(#btn-export)",title:"Backup",text:'Du kannst deine eingelesenen Daten als JSON-Datei sichern (z.B. für Gerätewechsel). Und unter „Gefahrenzone" kannst du alles wieder löschen.',placement:"left",waitForTarget:!0},{type:"modal",title:"Bereit!",text:`Du kennst jetzt die App. Lade als nächstes dein PDF hoch — Dashboard, Monate, Analytics und Profil füllen sich automatisch.
      <br><br>
      Falls du die Tour nochmal sehen willst, findest du den Button in der <strong>Daten</strong>-Ansicht ganz unten.`}];let W=null;function vt(){yt(),W={idx:0},we()}function Cn(e){return e?!1:!localStorage.getItem(bt)}function Vn(){localStorage.setItem(bt,"1")}function yt(){document.querySelectorAll(".tour-overlay, .tour-popover, .tour-pointer").forEach(e=>e.remove()),document.querySelectorAll(".tour-highlight").forEach(e=>{e.classList.remove("tour-highlight"),e.dataset.tourOldZ!=null&&(e.style.zIndex=e.dataset.tourOldZ,delete e.dataset.tourOldZ),e.dataset.tourOldPos!=null&&(e.style.position=e.dataset.tourOldPos,delete e.dataset.tourOldPos)}),W=null}function wt(){let e=document.querySelector(".tour-pointer");return e||(e=document.createElement("div"),e.className="tour-pointer",e.innerHTML=`
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
      </svg>`,e.style.top=window.innerHeight/2+"px",e.style.left=window.innerWidth/2+"px",document.body.appendChild(e)),e}function In(e){const t=wt(),a=e.getBoundingClientRect(),n=a.left+a.width*.5,s=a.top+a.height*.5;t.style.top=s-6+"px",t.style.left=n-9+"px"}function _n(){var e;(e=document.querySelector(".tour-pointer"))==null||e.remove()}function Zn(){let e=document.querySelector(".tour-overlay");return e||(e=document.createElement("div"),e.className="tour-overlay",document.body.appendChild(e)),e}function jn(){document.querySelectorAll(".tour-highlight").forEach(e=>{e.classList.remove("tour-highlight"),e.dataset.tourOldZ!=null&&(e.style.zIndex=e.dataset.tourOldZ,delete e.dataset.tourOldZ),e.dataset.tourOldPos!=null&&(e.style.position=e.dataset.tourOldPos,delete e.dataset.tourOldPos)})}async function Hn(e,t=1500){const a=Date.now();for(;Date.now()-a<t;){const n=document.querySelector(e);if(n)return n;await new Promise(s=>setTimeout(s,100))}return null}async function we(){var r,i,l;if(!W)return;const e=be[W.idx];if(!e){Re();return}Zn(),jn();let t=null;if(e.type==="highlight"){if(t=e.waitForTarget?await Hn(e.target,1500):document.querySelector(e.target),t){t.dataset.tourOldZ=t.style.zIndex||"",t.style.zIndex="10000",getComputedStyle(t).position==="static"&&(t.dataset.tourOldPos=t.style.position||"",t.style.position="relative"),t.classList.add("tour-highlight");try{t.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}catch{}await new Promise(o=>setTimeout(o,250)),wt(),requestAnimationFrame(()=>In(t))}}else _n();let a=document.querySelector(".tour-popover");a||(a=document.createElement("div"),a.className="tour-popover",document.body.appendChild(a));const n=W.idx===0,s=W.idx===be.length-1;a.innerHTML=`
    <div class="tour-popover-header">
      <span class="tour-popover-step">Schritt ${W.idx+1} / ${be.length}</span>
      <button class="tour-skip" type="button" aria-label="Tour beenden">Überspringen</button>
    </div>
    <h3>${e.title}</h3>
    <div class="tour-popover-body">${e.text}</div>
    <div class="tour-popover-actions">
      <button class="btn tour-prev" type="button" ${n?'disabled style="opacity:0.4;cursor:default"':""}>← Zurück</button>
      <button class="btn primary tour-next" type="button">${s?"Fertig":"Weiter →"}</button>
    </div>`,t?(a.classList.remove("center"),a.style.opacity="0",requestAnimationFrame(()=>{Nn(a,t,e.placement||"right"),a.style.opacity="1"})):(a.classList.add("center"),a.style.top=a.style.left=a.style.right=a.style.bottom="",a.style.opacity="1"),(r=a.querySelector(".tour-skip"))==null||r.addEventListener("click",()=>{confirm('Tour beenden? Du kannst sie unter „Daten" jederzeit wieder starten.')&&Re()}),n||(i=a.querySelector(".tour-prev"))==null||i.addEventListener("click",async()=>{W.idx=Math.max(0,W.idx-1),await we()}),(l=a.querySelector(".tour-next"))==null||l.addEventListener("click",async()=>{if(e.onNext)try{await e.onNext()}catch(o){console.warn("tour onNext error:",o)}W.idx++,await we()})}function Nn(e,t,a){const n=t.getBoundingClientRect(),s=16,r=e.offsetWidth||360,i=e.offsetHeight||220,l=window.innerWidth,o=window.innerHeight,c=[a,"right","bottom","left","top"];let d=null;for(const h of c)if((()=>{switch(h){case"right":return n.right+s+r<=l;case"left":return n.left-s-r>=0;case"bottom":return n.bottom+s+i<=o;case"top":return n.top-s-i>=0}})()){d=h;break}d=d||a;let g,u;switch(d){case"right":g=n.top+n.height/2-i/2,u=n.right+s;break;case"left":g=n.top+n.height/2-i/2,u=n.left-r-s;break;case"bottom":g=n.bottom+s,u=n.left+n.width/2-r/2;break;case"top":default:g=n.top-i-s,u=n.left+n.width/2-r/2;break}g=Math.max(s,Math.min(o-i-s,g)),u=Math.max(s,Math.min(l-r-s,u)),e.style.position="fixed",e.style.top=g+"px",e.style.left=u+"px",e.style.right="auto",e.style.bottom="auto",e.style.transform=""}function Re(){yt(),Vn()}async function Rn({root:e}){var r;const t=await nt(),a=await Z();e.innerHTML=`
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
        ${t.length===0?'<div class="empty-state"><div class="empty-state-icon">📭</div><p>Noch keine Uploads</p></div>':kt(t)}
      </div>
    </div>

    <div class="card" style="margin-top: 24px; text-align: center; background: transparent; border-style: dashed;">
      <p style="color: var(--fg-muted); font-size: 13px; margin: 0 0 12px;">Brauchst du nochmal eine kurze Tour durch die App?</p>
      <button class="btn" id="btn-tour-restart" type="button">🎯 Tour erneut starten</button>
    </div>
  `;const n=e.querySelector("#upload-zone"),s=e.querySelector("#file-input");n.addEventListener("click",()=>s.click()),n.addEventListener("dragover",i=>{i.preventDefault(),n.classList.add("drag")}),n.addEventListener("dragleave",()=>n.classList.remove("drag")),n.addEventListener("drop",async i=>{var o;i.preventDefault(),n.classList.remove("drag");const l=(o=i.dataTransfer.files)==null?void 0:o[0];l&&await Ge(l,e,a)}),s.addEventListener("change",async i=>{var o;const l=(o=i.target.files)==null?void 0:o[0];l&&await Ge(l,e,a)}),e.querySelector("#btn-export").addEventListener("click",Jn),e.querySelector("#btn-import").addEventListener("click",()=>e.querySelector("#import-input").click()),e.querySelector("#import-input").addEventListener("change",Un),e.querySelector("#btn-clear-parsed").addEventListener("click",Gn),e.querySelector("#btn-reset").addEventListener("click",Yn),(r=e.querySelector("#btn-tour-restart"))==null||r.addEventListener("click",()=>vt()),qn()}let qe=!1;function qn(){qe||(qe=!0,document.body.addEventListener("click",e=>{if(e.target.closest(".lightbox-overlay, .upload-modal-overlay"))return;const t=e.target.closest("img.zoomable");t&&xt(t.src,t.alt)}))}function xt(e,t){const a=document.createElement("div");a.className="lightbox-overlay",a.innerHTML=`
    <button class="lightbox-close" aria-label="Schließen" title="Schließen (Esc)">×</button>
    <img src="${e}" alt="${t||""}" />
  `,document.body.appendChild(a);const n=()=>{a.remove(),document.removeEventListener("keydown",s)},s=r=>{r.key==="Escape"&&n()};a.addEventListener("click",r=>{(r.target===a||r.target.classList.contains("lightbox-close"))&&n()}),document.addEventListener("keydown",s)}async function Gn(){confirm("PDF-abgeleitete Daten (Tage, Monate, Uploads) werden gelöscht. Profil und Mail-Vorlagen bleiben erhalten. Fortfahren?")&&(await st(),z("Daten gelöscht. Profil bleibt."),setTimeout(()=>location.reload(),600))}function kt(e){return`
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
            <td>${T(Xn(t.hochladeDatum))}</td>
            <td>${T(t.dateiname||"—")}</td>
            <td>${t.zeitraumVon?T(w(new Date(t.zeitraumVon))):"—"} – ${t.zeitraumBis?T(w(new Date(t.zeitraumBis))):"—"}</td>
            <td>${t.stichtagAuswertung?T(w(new Date(t.stichtagAuswertung))):"—"}</td>
            <td class="num">${t.tageCount??"—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}async function Ge(e,t,a){var r,i,l,o;const n=t.querySelector("#upload-status"),s=t.querySelector("#upload-zone");s.style.pointerEvents="none",s.style.opacity="0.6",n.innerHTML=`
    <div class="alert severity-info">
      <div class="loader-ring" style="width: 24px; height: 24px; border-width: 2px;"></div>
      <div class="alert-body">
        <div class="alert-title">PDF wird verarbeitet…</div>
        <p style="margin: 4px 0; font-size: 13px;"><strong>${T(e.name)}</strong> — das kann bei großen PDFs einige Sekunden dauern.</p>
      </div>
    </div>`;try{const c=await e.arrayBuffer(),d=await An(c);if(d.tage.length===0&&!d.meta.zeitraumVon){s.style.pointerEvents="",s.style.opacity="",n.innerHTML="",ve({type:"error",title:"Diese PDF ist nicht kompatibel",desc:'Im PDF wurden keine Texte gefunden. Das passiert, wenn das PDF über „Drucken → Als PDF speichern" (z.B. „Microsoft Print to PDF") erzeugt wurde — dabei werden Texte als Vektorpfade gerendert und können nicht ausgelesen werden.',hint:'Lade dein PDF direkt aus dem ESS über den <strong>Speichern-Button</strong> herunter (Disketten-Symbol oben rechts im PDF-Viewer) — nicht über „Drucken".',screenshot:!0,producer:(r=d.meta)==null?void 0:r.producer}),de("PDF enthält keinen extrahierbaren Text.");return}const g=await Se(),u=g==null?void 0:g.personalnummer,h=d.meta.personalnummer;if(u&&h&&u!==h){const k=(g==null?void 0:g.name)||`Personalnr. ${u}`,N=d.meta.name||`Personalnr. ${h}`;if(!confirm(`Das hochgeladene PDF gehört zu einem anderen Azubi als die bisher gespeicherten Daten:

Bisher: ${k}
Jetzt:  ${N}

Wenn du fortfährst, werden alle alten Tagesdaten gelöscht und durch die neuen ersetzt.
(Profil-Einstellungen wie Theme und Mail-Vorlagen bleiben erhalten.)

Fortfahren?`)){s.style.pointerEvents="",s.style.opacity="",n.innerHTML=`
          <div class="alert severity-info">
            <div class="alert-body">
              <div class="alert-title">Upload abgebrochen</div>
              <p style="margin: 4px 0; font-size: 13px;">Es wurden keine Daten verändert. Lade das richtige PDF (für ${T(k)}) erneut hoch.</p>
            </div>
          </div>`;return}await st();const F=await Z();await oe({...F,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1}})}await ca(d.tage),await da(d.monate),await ua({dateiname:e.name,personalnummer:d.meta.personalnummer??null,name:d.meta.name??null,zeitraumVon:((i=d.meta.zeitraumVon)==null?void 0:i.toISOString())??null,zeitraumBis:((l=d.meta.zeitraumBis)==null?void 0:l.toISOString())??null,stichtagAuswertung:((o=d.meta.stichtagAuswertung)==null?void 0:o.toISOString())??null,tageCount:d.tage.length,monateCount:d.monate.length});const f=await O(),b=ct(f),y={...at(),...a};(b.wochentageWoechentlich.length>0||b.wochentage14Taegig.length>0)&&(y.berufsschulMuster=b),await oe(y),n.innerHTML="",ve({type:"success",title:"PDF erfolgreich eingelesen",desc:d.meta.zeitraumVon?`Zeitraum: ${w(d.meta.zeitraumVon)} – ${w(d.meta.zeitraumBis)}`:"Daten wurden erfolgreich verarbeitet.",stats:[{num:d.tage.length,label:"Tage"},{num:d.monate.length,label:"Monatsübersichten"}]}),z(`PDF verarbeitet: ${d.tage.length} Tage.`);const m=await nt();t.querySelector("#uploads-list").innerHTML=kt(m)}catch(c){console.error(c),n.innerHTML="",ve({type:"error",title:"Fehler beim Parsen",desc:T(c.message||String(c)),hint:'Prüfe, ob es sich um einen ESS-Zeitnachweis im richtigen Format handelt. Lade dein PDF über den Speichern-Button herunter, nicht über „Drucken".',screenshot:!0}),de("PDF konnte nicht gelesen werden.")}finally{s.style.pointerEvents="",s.style.opacity=""}}async function Jn(){try{const e=await ha(),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),a=URL.createObjectURL(t),n=document.createElement("a"),s=new Date().toISOString().slice(0,10);n.href=a,n.download=`zeitnachweis-backup-${s}.json`,n.click(),URL.revokeObjectURL(a),z("Backup heruntergeladen.")}catch(e){de(`Export fehlgeschlagen: ${e.message}`)}}async function Un(e){var a;const t=(a=e.target.files)==null?void 0:a[0];if(t)try{const n=await t.text(),s=JSON.parse(n);if(!confirm("Existierende Daten werden überschrieben. Fortfahren?"))return;await fa(s),z("Backup erfolgreich importiert. Seite wird neu geladen…"),setTimeout(()=>location.reload(),800)}catch(n){de(`Import fehlgeschlagen: ${n.message}`)}}async function Yn(){confirm("ALLE Daten endgültig löschen? Das lässt sich nicht rückgängig machen.")&&confirm("Wirklich alle Daten löschen? Letzte Warnung.")&&(await ga(),z("Alle Daten gelöscht."),setTimeout(()=>location.reload(),600))}function Xn(e){if(!e)return"—";const t=new Date(e);return t.toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"})+" "+t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}function ve(e){const{type:t,title:a,desc:n,hint:s,screenshot:r,stats:i,producer:l}=e,o=document.createElement("div");o.className="upload-modal-overlay";const c=`
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
    </svg>`,g=i!=null&&i.length?`
    <div class="upload-modal-stats">
      ${i.map(m=>`
        <div class="upload-modal-stat">
          <div class="upload-modal-stat-num">${T(String(m.num))}</div>
          <div class="upload-modal-stat-label">${T(m.label)}</div>
        </div>
      `).join("")}
    </div>`:"",u=r?`
    <img class="upload-modal-hint-img zoomable" src="/better-ess/tutorial/speichern.png"
         alt="Speichern-Button im PDF-Viewer"
         title="Klick für Vollbild" />`:"",h=l?`<p style="font-size: 12px; color: var(--fg-subtle); margin-top: 12px;">Erkannt: Producer „${T(l)}"</p>`:"",f=t==="success"?`
      <a href="#/" class="btn primary">Zum Dashboard</a>
      <a href="#/monat" class="btn">Monate ansehen</a>
      <button class="btn upload-modal-close-btn">Schließen</button>`:`
      <button class="btn primary upload-modal-close-btn">Verstanden</button>`;o.innerHTML=`
    <div class="upload-modal" role="dialog" aria-modal="true">
      <div class="upload-modal-icon-wrap">
        ${t==="success"?c:d}
      </div>
      <h2 class="upload-modal-title">${T(a)}</h2>
      <p class="upload-modal-desc">${n}</p>
      ${g}
      ${s?`<p class="upload-modal-desc" style="background: var(--accent-bg); padding: 12px; border-radius: 8px; border-left: 3px solid var(--accent);">${s}</p>`:""}
      ${u}
      ${h}
      <div class="upload-modal-actions">${f}</div>
    </div>`,document.body.appendChild(o);const b=()=>{o.style.animation="upload-modal-fade 150ms ease-out reverse",setTimeout(()=>o.remove(),150),document.removeEventListener("keydown",y)},y=m=>{m.key==="Escape"&&b()};document.addEventListener("keydown",y),o.addEventListener("click",m=>{if(m.target===o){b();return}if(m.target.closest(".upload-modal-close-btn")){b();return}const k=m.target.closest("img.zoomable");k&&xt(k.src,k.alt)})}const Je={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag"};async function Qn({root:e}){var s,r,i,l,o;const t=await Z(),a=t.berufsschulMuster??{},n=(((s=a.wochentageWoechentlich)==null?void 0:s.length)??0)>0||(((r=a.wochentage14Taegig)==null?void 0:r.length)??0)>0;e.innerHTML=`
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
          <input type="email" name="zeitwirtschaftEmail" value="${Ue(t.zeitwirtschaftEmail)}" />
        </div>
        <div class="form-group">
          <label>Anrede in Mails</label>
          <input type="text" name="zeitwirtschaftAnrede" value="${Ue(t.zeitwirtschaftAnrede)}" placeholder="Frau Kanarya" />
        </div>
      </div>

      <div class="card" style="grid-column: 1 / -1;">
        <h2>Berufsschul-Rhythmus <span style="font-size: 11px; font-weight: 500; color: var(--fg-subtle); text-transform: uppercase; letter-spacing: 0.05em; margin-left: 8px;">Automatisch erkannt</span></h2>
        ${n?`
          <div class="tag-detail">
            <div class="tag-detail-label">Wöchentlich</div>
            <div class="tag-detail-value"><strong>${((i=a.wochentageWoechentlich)==null?void 0:i.map(c=>Je[c]).join(", "))||"—"}</strong></div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Alle 2 Wochen</div>
            <div class="tag-detail-value"><strong>${((l=a.wochentage14Taegig)==null?void 0:l.map(c=>Je[c]).join(", "))||"—"}</strong>${a.referenzDatum14Taegig?` <span class="hint">(Anker: ${w(new Date(a.referenzDatum14Taegig))})</span>`:""}</div>
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
  `,e.querySelector("#profil-form").addEventListener("submit",async c=>{var u,h;c.preventDefault();const d=new FormData(c.target),g={...t,ueber18:d.get("ueber18")==="on",zeitwirtschaftEmail:((u=d.get("zeitwirtschaftEmail"))==null?void 0:u.trim())||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:((h=d.get("zeitwirtschaftAnrede"))==null?void 0:h.trim())||"Frau Kanarya"};await oe(g),z("Profil gespeichert.")})}function Ue(e){return String(e??"").replace(/"/g,"&quot;")}async function es({root:e}){var s;const t=await se(),a=await O(),n={};for(const r of a)n[s=r.monatKey]??(n[s]=[]),n[r.monatKey].push(r);if(t.length===0){e.innerHTML=ls("Noch keine Monatsdaten. Lade zuerst ein PDF unter Daten hoch.");return}e.innerHTML=`
    <h1 class="view-title">Monate</h1>
    <p class="view-subtitle">${t.length} Monate erfasst. Klicke für Details.</p>

    <div class="grid cols-2">
      ${t.slice().reverse().map(r=>{var u;const l=(n[r.monatKey]??[]).filter(h=>h.ist!=null&&h.ist>0),o=l.reduce((h,f)=>h+(f.ist??0),0),c=l.reduce((h,f)=>h+(f.soll??0),0),d=o-c,g=(u=r.glz)==null?void 0:u.saldoGesamt;return`
          <a href="#/monat/${r.monatKey}" class="card" style="text-decoration: none; color: inherit; display: block;">
            <div class="card-split" style="margin-bottom: 12px;">
              <h2 style="margin: 0;">${xe(r.monatKey)}</h2>
              <span class="saldo-trend ${g>.05?"up":g<-.05?"down":"flat"}" style="margin: 0; font-size: 12px;">
                Saldo: <strong>${P(g??0,{signed:!0})}</strong>
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
  `}async function ts({params:e,root:t}){const a=e.yyyymm,[n,s,r,i]=await Promise.all([O(),se(),Z(),Se()]),l=s.find(g=>g.monatKey===a),o=n.filter(g=>g.monatKey===a).sort((g,u)=>g.datum.localeCompare(u.datum));if(!o.length){t.innerHTML=`<h1 class="view-title">Monat ${xe(a)}</h1><p class="view-subtitle">Keine Daten für diesen Monat.</p><a href="#/monat" class="btn">← Alle Monate</a>`;return}const c=i!=null&&i.stichtagAuswertung?new Date(i.stichtagAuswertung):new Date,d=ze(n,r,c).filter(g=>g.datum.startsWith(a));t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat" class="btn sm">← Alle Monate</a>
    </div>
    <h1 class="view-title">${xe(a)}</h1>
    <p class="view-subtitle">${o.length} Tage · ${d.length} Auffälligkeiten</p>

    ${l?as(l):""}

    <div class="card" style="margin-bottom: 24px;">
      <h2>Tagesbalken</h2>
      <div class="chart-wrap tall"><canvas id="chart-monat"></canvas></div>
    </div>

    ${d.length?`
      <div class="card" style="margin-bottom: 24px;">
        <h2>Auffälligkeiten</h2>
        ${d.map(g=>is(g)).join("")}
      </div>
    `:""}

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Wochen</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">Klicke auf eine Woche für die Detailansicht</span>
      </div>
      ${ns(o)}
    </div>

    <div class="card">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Tage</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">Klicke auf ein Datum für Details</span>
      </div>
      ${ss(o)}
    </div>
  `,De(t.querySelector("#chart-monat"),o)}function as(e){var n,s,r,i;const t=((n=e.glz)==null?void 0:n.saldoGesamt)??0;return`
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
  `}function ns(e){var n;const t={};for(const s of e)t[n=s.wocheKey]??(t[n]={key:s.wocheKey,tage:[],ist:0,soll:0}),t[s.wocheKey].tage.push(s),t[s.wocheKey].ist+=s.ist??0,t[s.wocheKey].soll+=s.soll??0;const a=Object.keys(t).sort();return a.length?a.map(s=>{var u;const r=t[s],i=+(r.ist-r.soll).toFixed(2),l=i>.05?"positive":i<-.05?"negative":"",o=i>.05?"var(--success)":i<-.05?"var(--danger)":"var(--fg-muted)",c=(u=r.tage[0])==null?void 0:u.datum,d=c?lt($(c)):"",g=s.split("-")[1]||"?";return`
      <a href="#/woche/${s}" class="list-item" style="text-decoration: none; color: inherit;">
        <div class="tabular" style="font-size: 16px; font-weight: 600; color: var(--fg-muted); min-width: 80px;">KW ${G(g)}</div>
        <div>
          <div class="list-item-title tabular">${G(d)}</div>
          <div class="list-item-sub">${r.tage.length} Tage · Ist ${r.ist.toFixed(2).replace(".",",")}h · Soll ${r.soll.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="tabular ${l}" style="font-weight: 600; font-size: 16px; color: ${o};">${P(i,{signed:!0})}</div>
        <div style="color: var(--fg-subtle);">→</div>
      </a>
    `}).join(""):'<p style="color: var(--fg-muted);">Keine Wochen.</p>'}function ss(e){return`
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
        ${e.map(t=>{const a=t.diff>.05?"positive":t.diff<-.05?"negative":"",n=ge(t.zeitSpannen);return`
            <tr>
              <td><a href="#/tag/${t.datum}" style="color: inherit; text-decoration: none;"><span class="tabular">${w(new Date(t.datum))}</span> <span style="color: var(--fg-subtle);">${t.wochentag}</span></a></td>
              <td>${t.tagestyp?`<span class="pill ${rs(t.tagestyp)}">${G(t.tagestyp)}</span>`:"—"}</td>
              <td>${he(n,{size:18})}</td>
              <td class="num tabular">${t.ist!=null?t.ist.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular">${t.soll!=null?t.soll.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular ${a}">${t.diff!=null?P(t.diff,{signed:!0,suffix:""}):"—"}</td>
              <td class="num tabular">${t.pause!=null?t.pause.toFixed(2).replace(".",","):"—"}</td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `}function is(e){return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i"}</div>
      <div class="alert-body">
        <div class="alert-title">${G(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${G(e.beschreibung)}</p>
        ${e.mailVorlageKey?`<div class="alert-actions"><a href="#/mails" class="btn primary sm">Mail schreiben</a><a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a></div>`:""}
      </div>
    </div>
  `}function xe(e){const[t,a]=e.split("-"),n=new Date(parseInt(t),parseInt(a)-1,1);return D(n,"LLLL yyyy",{locale:ie})}function rs(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function ls(e){return`<div class="empty-state"><div class="empty-state-icon">📭</div><p>${G(e)}</p><a href="#/daten" class="btn primary">Zu Daten</a></div>`}function G(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function os({root:e}){var s;const t=await O();if(!t.length){e.innerHTML='<h1 class="view-title">Wochen</h1><p class="view-subtitle">Noch keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a={};for(const r of t)a[s=r.wocheKey]??(a[s]={key:r.wocheKey,tage:[],ist:0,soll:0}),a[r.wocheKey].tage.push(r),a[r.wocheKey].ist+=r.ist??0,a[r.wocheKey].soll+=r.soll??0;const n=Object.keys(a).sort().reverse();e.innerHTML=`
    <h1 class="view-title">Wochen</h1>
    <p class="view-subtitle">${n.length} Wochen erfasst.</p>

    <div>
      ${n.map(r=>{const i=a[r],l=i.ist-i.soll,o=l>.05?"positive":l<-.05?"negative":"";return`
          <a href="#/woche/${r}" class="list-item">
            <div class="tabular" style="font-size: 16px; font-weight: 600; color: var(--fg-muted);">${ue(St(r))}</div>
            <div>
              <div class="list-item-title">Ist: ${i.ist.toFixed(2).replace(".",",")}h · Soll: ${i.soll.toFixed(2).replace(".",",")}h</div>
              <div class="list-item-sub">${i.tage.length} Tage erfasst</div>
            </div>
            <div class="tabular ${o}" style="font-weight: 600; font-size: 16px;">${P(l,{signed:!0})}</div>
            <div style="color: var(--fg-subtle);">→</div>
          </a>
        `}).join("")}
    </div>
  `}async function cs({params:e,root:t}){const a=await O(),n=e.yyyykw,s=a.filter(o=>o.wocheKey===n).sort((o,c)=>o.datum.localeCompare(c.datum));if(!s.length){t.innerHTML=`<h1 class="view-title">KW ${ue(n)}</h1><p>Keine Daten.</p><a href="#/woche" class="btn">← Alle Wochen</a>`;return}const r=s.reduce((o,c)=>o+(c.ist??0),0),i=s.reduce((o,c)=>o+(c.soll??0),0),l=r-i;t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/woche" class="btn sm">← Alle Wochen</a>
    </div>
    <h1 class="view-title">${ue(St(n))}</h1>
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
      ${ds(s)}
    </div>
  `,De(t.querySelector("#chart-woche"),s)}function ds(e){return`
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
        ${e.map(t=>{const a=t.diff>.05?"positive":t.diff<-.05?"negative":"",n=ge(t.zeitSpannen);return`
            <tr>
              <td><a href="#/tag/${t.datum}" style="color: inherit;"><span class="tabular">${D($(t.datum),"dd.MM.yyyy")}</span> ${t.wochentag}</a></td>
              <td>${t.tagestyp?`<span class="pill ${us(t.tagestyp)}">${ue(t.tagestyp)}</span>`:"—"}</td>
              <td>${he(n,{size:18})}</td>
              <td class="num tabular">${t.ist!=null?t.ist.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular">${t.soll!=null?t.soll.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular ${a}">${t.diff!=null?P(t.diff,{signed:!0,suffix:""}):"—"}</td>
              <td class="num tabular">${t.pause!=null?t.pause.toFixed(2).replace(".",","):"—"}</td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `}function St(e){const[t,a]=e.split("-");return`KW ${a} · ${t}`}function us(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function ue(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function gs({params:e,root:t}){var c,d,g;const a=e.datum,n=await p.tage.get(a),s=await Z();if(!n){t.innerHTML=`<h1 class="view-title">Tag nicht gefunden</h1><p>Für ${a} liegen keine Daten vor.</p><a href="#/" class="btn">← Dashboard</a>`;return}const r=$(a),i=n.tagestyp==="Stempelzeit"?gt(n,s):null,l=Me(r,s.berufsschulMuster),o=ge(n.zeitSpannen);t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat/${a.slice(0,7)}" class="btn sm">← Zum Monat</a>
    </div>
    <h1 class="view-title">${rt(r)}</h1>
    <p class="view-subtitle">${n.tagestyp??"Kein Typ"} · KW ${(c=n.wocheKey)==null?void 0:c.split("-")[1]}</p>

    ${o?`
      <div class="card kommen-gehen-hero" style="margin-bottom: 24px;">
        <div class="hint" style="text-transform: uppercase; letter-spacing: 0.05em; font-size: 11px; margin-bottom: 10px;">Tages-Rahmen</div>
        ${he(o,{size:32})}
      </div>
    `:""}

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${n.ist!=null?n.ist.toFixed(2).replace(".",",")+"h":"—"}</div>
        <div class="hint">= ${n.ist!=null?q(n.ist):"—"}</div>
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
                <div class="tag-detail-label">${te(u.aktivitaet??"Stempelzeit")}</div>
                <div class="tag-detail-value tabular">${u.von??"—"} – ${u.bis??"—"}</div>
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

      ${i&&!i.keinAnspruch?`
        <div class="card" style="grid-column: 1 / -1;">
          <h2>Pausen-Analyse</h2>
          <div class="grid cols-2">
            <div>
              <div class="tag-detail">
                <div class="tag-detail-label">Arbeitszeit (netto)</div>
                <div class="tag-detail-value tabular">${(g=i.arbeitszeitOhnePause)==null?void 0:g.toFixed(2).replace(".",",")}h</div>
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
              <div class="alert-body">${te(i.warnung)}</div>
            </div>
          `:""}
        </div>
      `:""}
    </div>
  `}function hs(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function te(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function fs({root:e}){const[t,a]=await Promise.all([O(),se()]);if(!t.length){e.innerHTML='<h1 class="view-title">Analytics</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}e.innerHTML=`
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
  `,requestAnimationFrame(()=>{on(e.querySelector("#c-saldo"),a),hn(e.querySelector("#c-istsoll"),t),fn(e.querySelector("#c-kumulativ"),t),cn(e.querySelector("#c-startend"),t),un(e.querySelector("#c-wochentag"),t),dn(e.querySelector("#c-pausen"),t),gn(e.querySelector("#c-donut"),t);const n=t.slice(-30);De(e.querySelector("#c-alle-tage"),n)})}async function ps({root:e}){const t=await O();if(!t.length){e.innerHTML='<h1 class="view-title">Berichtsheft</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a=[...new Set(t.map(r=>r.monatKey))].sort().reverse();e.innerHTML=`
    <h1 class="view-title">Berichtsheft-Export</h1>
    <p class="view-subtitle">Kopiere die Arbeitsstunden im HH:MM-Format direkt in dein Berichtsheft.</p>

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 16px; align-items: center;">
        <h2 style="margin: 0;">Filter</h2>
        <div style="display: flex; gap: 8px; align-items: center;">
          <label style="color: var(--fg-muted); font-size: 13px;">Monat:</label>
          <select id="filter-monat">
            <option value="">Alle</option>
            ${a.map(r=>`<option value="${r}">${vs(r)}</option>`).join("")}
          </select>
          <button class="btn sm" id="btn-copy-all">Alle sichtbaren kopieren</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div id="liste"></div>
    </div>
  `;const n=e.querySelector("#filter-monat");n.addEventListener("change",()=>s()),e.querySelector("#btn-copy-all").addEventListener("click",()=>{const r=e.querySelectorAll("#liste tr[data-copy]"),i=Array.from(r).map(l=>l.getAttribute("data-copy")).join(`
`);navigator.clipboard.writeText(i).then(()=>z(`${r.length} Zeilen kopiert.`))});function s(){const r=n.value,l=(r?t.filter(o=>o.monatKey===r):t).filter(o=>o.ist!=null&&o.ist>0&&o.tagestyp!=="Wochenende");e.querySelector("#liste").innerHTML=ms(l),e.querySelectorAll(".copy-val").forEach(o=>{o.addEventListener("click",async()=>{const c=o.getAttribute("data-val");await navigator.clipboard.writeText(c),o.classList.add("ok");const d=o.textContent;o.textContent="✓ kopiert",setTimeout(()=>{o.classList.remove("ok"),o.textContent=d},1200)})})}s()}function ms(e){return e.length?`
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
        ${e.map(t=>{const a=q(t.ist),n=`${w($(t.datum))}	${a}`;return`
            <tr data-copy="${Ye(n)}">
              <td class="tabular">${w($(t.datum))}</td>
              <td>${bs(t.wochentag)}</td>
              <td>${t.tagestyp?`<span class="pill ${ys(t.tagestyp)}">${$t(t.tagestyp)}</span>`:"—"}</td>
              <td class="num tabular">${t.ist.toFixed(2).replace(".",",")}</td>
              <td class="num tabular" style="font-weight: 600;">${a}</td>
              <td><button class="copy-val" data-val="${Ye(a)}">📋 ${a}</button></td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `:'<p style="color: var(--fg-muted);">Keine Tage in dieser Auswahl.</p>'}function bs(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function vs(e){const[t,a]=e.split("-");return D(new Date(parseInt(t),parseInt(a)-1,1),"LLLL yyyy",{locale:ie})}function ys(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function $t(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ye(e){return $t(e)}async function ws({root:e}){const[t,a,n,s]=await Promise.all([O(),Z(),se(),$e()]),r=Object.fromEntries(s.map(o=>[o.key,o])),i=ze(t,a,new Date).filter(o=>o.mailVorlageKey),l=ht(n);e.innerHTML=`
    <h1 class="view-title">Mail-Vorlagen</h1>
    <p class="view-subtitle">Vorformulierte Mails an die Zeitwirtschaft bei erkannten Fehlern im Zeitnachweis.</p>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Offene Warnungen mit Mail-Vorschlag</h2>
      <p class="hint" style="margin-bottom: 16px;">Diese Warnungen haben einen roten Schweregrad und sind eine direkte Mail wert.</p>

      ${i.length===0?'<div class="empty-state"><div class="empty-state-icon">✓</div><p>Keine akuten Warnungen — top.</p></div>':i.map(o=>xs(o,a,r)).join("")}

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
        ${Object.keys(ne).map(o=>{const c=fe(o,r[o]);return ks(c)}).join("")}
      </div>
    </div>
  `,Ss(e),$s(e)}function xs(e,t,a){const n=fe(e.mailVorlageKey,a[e.mailVorlageKey]);if(!n)return"";const s=pt(t,e),r=ft(n,s),i=mt(t,n,s);return`
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
        <button class="btn sm btn-copy-mail" data-subject="${ke(r.betreff)}" data-body="${ke(r.text)}">📋 Betreff + Text kopieren</button>
      </div>
    </div>
  `}function ks(e){return`
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
        <input type="text" class="v-betreff" value="${ke(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 240px;">${E(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function Ss(e){e.querySelectorAll(".btn-save-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-key"),n=t.closest(".vorlagen-item"),s=n.querySelector(".v-betreff").value,r=n.querySelector(".v-text").value;await ce(a,{betreff:s,text:r}),z("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-key"),n=ne[a];n&&confirm(`Vorlage "${n.titel}" auf Default zurücksetzen?`)&&(await ce(a,{betreff:n.betreff,text:n.text}),z("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function $s(e){e.querySelectorAll(".btn-copy-mail").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-subject"),n=t.getAttribute("data-body"),s=`Betreff: ${a}

${n}`;await navigator.clipboard.writeText(s),z("Mail-Text kopiert.")})})}function E(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function ke(e){return E(e)}async function Ms({root:e}){const[t,a]=await Promise.all([Z(),$e()]),n=Object.fromEntries(a.map(s=>[s.key,s]));e.innerHTML=`
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
          ${Object.keys(ne).map(s=>{const r=fe(s,n[s]);return zs(r)}).join("")}
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
  `,e.querySelector("#pause-sel").addEventListener("change",async s=>{const r={...t,pausenRegel:s.target.value};await oe(r),z("Pausen-Regel gespeichert.")}),e.querySelectorAll(".btn-save-vorlage").forEach(s=>{s.addEventListener("click",async()=>{const r=s.getAttribute("data-key"),i=s.closest(".vorlagen-item"),l=i.querySelector(".v-betreff").value,o=i.querySelector(".v-text").value;await ce(r,{betreff:l,text:o}),z("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(s=>{s.addEventListener("click",async()=>{const r=s.getAttribute("data-key"),i=ne[r];i&&confirm(`Vorlage "${i.titel}" auf Default zurücksetzen?`)&&(await ce(r,{betreff:i.betreff,text:i.text}),z("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function zs(e){return`
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
        <input type="text" class="v-betreff" value="${Ds(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 200px;">${le(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function le(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ds(e){return le(e)}async function Xe(){Ut();const e=document.getElementById("content");await ra()&&setTimeout(()=>{Pe('Parser wurde aktualisiert. Bitte lade deinen Zeitnachweis unter "Daten" neu hoch.',{type:"info",duration:12e3})},500),await ia(),await sa(),A("/",_e),A("/dashboard",_e),A("/analytics",fs),A("/monat",es),A("/monat/:yyyymm",ts),A("/woche",os),A("/woche/:yyyykw",cs),A("/tag/:datum",gs),A("/berichtsheft",ps),A("/mails",ws),A("/profil",Qn),A("/daten",Rn),A("/einstellungen",Ms),Xt(e),location.hash||Yt("/");try{const t=await p.tage.count();Cn(t>0)&&setTimeout(()=>vt(),700)}catch(t){console.warn("[boot] Tour-Auto-Start-Check fehlgeschlagen:",t)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Xe):Xe();
