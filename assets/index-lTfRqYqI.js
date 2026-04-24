import{D as ct}from"./dexie-BODkcwel.js";import{b as ce,a as N,c as q,d as dt,f as x,e as X,i as Re,p as ut,g as gt,h as ht,j as M,k as _e,l as mt,s as ft,m as pt}from"./datefns-Dq49jaKA.js";import{C as E,L as vt,B as bt,D as yt,S as wt,a as $t,b as Mt,P as zt,A as xt,c as kt,d as St,T as Dt,p as At,e as Pt,i as Tt}from"./chartjs-CRgZvhTJ.js";import{_ as Et,a as Lt}from"./pdfjs-BDGsuRSB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();const ie="theme";function Kt(){const e=localStorage.getItem(ie)??"auto";me(e)}function me(e){e==="auto"?document.documentElement.removeAttribute("data-theme"):document.documentElement.setAttribute("data-theme",e),localStorage.setItem(ie,e),Ct(e)}function Ft(){const e=localStorage.getItem(ie)??"auto",t=e==="auto"?"light":e==="light"?"dark":"auto";return me(t),je(t),t}const de=new Set;function Wt(e){return de.add(e),()=>de.delete(e)}function je(e){for(const t of de)try{t(e)}catch(a){console.error(a)}}var Ve;if(typeof window<"u"&&window.matchMedia){const e=window.matchMedia("(prefers-color-scheme: dark)");(Ve=e.addEventListener)==null||Ve.call(e,"change",()=>{Ze()==="auto"&&je("auto")})}function Ct(e){const t=document.getElementById("theme-toggle");if(!t)return;const a=t.querySelector(".theme-label"),n=t.querySelector(".theme-icon-dark"),s=t.querySelector(".theme-icon-light");a&&(e==="auto"?(a.textContent="Auto",n&&(n.style.display="inline"),s&&(s.style.display="inline")):e==="light"?(a.textContent="Hell",n&&(n.style.display="none"),s&&(s.style.display="inline")):(a.textContent="Dunkel",n&&(n.style.display="inline"),s&&(s.style.display="none")))}function Ze(){return localStorage.getItem(ie)??"auto"}const He=[];let Ge=null;function D(e,t){const a=e.split("/").filter(Boolean),n=[],s=new RegExp("^/?"+a.map(i=>i.startsWith(":")?(n.push(i.slice(1)),"([^/]+)"):Rt(i)).join("/")+"/?$");He.push({pattern:e,regex:s,paramNames:n,render:t})}function Ot(e){e.startsWith("#")||(e="#"+e),window.location.hash===e?L():window.location.hash=e}function It(e,{onNavigate:t}={}){window.addEventListener("hashchange",L),L.rootEl=e,L.onNavigate=t,L()}async function L(){var n;const e=L.rootEl,t=window.location.hash.slice(1)||"/",a=t.startsWith("/")?t:`/${t}`;for(const s of He){const i=s.regex.exec(a);if(i){const r={};s.paramNames.forEach((l,o)=>r[l]=decodeURIComponent(i[o+1])),Ge=a,(n=L.onNavigate)==null||n.call(L,a),Bt(a);try{e.classList.remove("view-enter"),await s.render({params:r,path:a,root:e}),e.classList.add("view-enter")}catch(l){console.error("Route render error:",l),e.innerHTML=`<div class="empty-state">
          <div class="empty-state-icon">⚠</div>
          <h2>Fehler beim Anzeigen</h2>
          <p>${Se(l.message||String(l))}</p>
        </div>`}return}}e.innerHTML=`<div class="empty-state">
    <div class="empty-state-icon">?</div>
    <h2>Seite nicht gefunden</h2>
    <p>Die Route <code>${Se(a)}</code> existiert nicht.</p>
    <a href="#/" class="btn primary">Zum Dashboard</a>
  </div>`}function Bt(e){document.querySelectorAll("[data-route]").forEach(t=>{const a=t.getAttribute("data-route"),n=a==="/"?e==="/":e===a||e.startsWith(a+"/");t.classList.toggle("active",n)})}function Vt(){Ge!=null&&L()}function Rt(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Se(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const f=new ct("zeitnachweis");f.version(1).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"});f.version(2).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});f.version(3).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});f.version(4).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});f.version(5).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{const t=await e.table("profil").get("self");t&&(!t.zeitwirtschaftEmail||t.zeitwirtschaftEmail==="zeitwirtschaft@putzmeister.com")&&await e.table("profil").put({...t,zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com"})});f.version(6).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});async function _t(){try{const e=await f.mailVorlagen.toArray(),t=e.some(n=>n.betreff&&!n.betreff.startsWith("Bitte um Zeitkorrektur im ESS")),a=e.some(n=>n.text&&!/Vielen Dank!\s*$/.test(n.text));return t||a?(await f.mailVorlagen.clear(),!0):!1}catch(e){return console.warn("[db] ensureMailVorlagenFresh fehlgeschlagen:",e),!1}}async function jt(){const e=await f.einstellungen.get("__migration_reset");return(e==null?void 0:e.value)===!0?(await f.einstellungen.delete("__migration_reset"),!0):!1}async function j(){return await f.profil.get("self")??Ne()}async function fe(e){const t={...e,id:"self",updatedAt:new Date().toISOString()};return await f.profil.put(t),t}function Ne(){return{id:"self",name:"",personalnummer:"",kostenstelle:"",einstellungsdatum:null,arbeitszeitplanregel:"",geburtsdatum:null,sollStundenProWoche:35,sollStundenProTag:7,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null},zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:"Frau Kanarya",pausenRegel:"auto",erstelltAm:new Date().toISOString()}}async function Zt(e,t=null){const a=await f.einstellungen.get(e);return a?a.value:t}async function Ht(e,t){await f.einstellungen.put({key:e,value:t})}async function W(){return await f.tage.orderBy("datum").toArray()}async function Gt(e){return e.length?(await f.tage.bulkPut(e),e.length):0}async function Nt(e){return e.length?(await f.monate.bulkPut(e),e.length):0}async function ee(){return await f.monate.orderBy("monatKey").toArray()}async function qt(e){return await f.uploads.add({...e,hochladeDatum:new Date().toISOString()})}async function qe(){return await f.uploads.orderBy("hochladeDatum").reverse().toArray()}async function Jt(){await Promise.all([f.profil.clear(),f.tage.clear(),f.monate.clear(),f.uploads.clear(),f.einstellungen.clear(),f.mailVorlagen.clear(),f.warnungDismissals.clear()])}async function Ut(){await Promise.all([f.tage.clear(),f.monate.clear(),f.uploads.clear(),f.warnungDismissals.clear()])}async function Qt(){const[e,t,a,n,s,i,r]=await Promise.all([f.profil.toArray(),f.tage.toArray(),f.monate.toArray(),f.uploads.toArray(),f.einstellungen.toArray(),f.mailVorlagen.toArray(),f.warnungDismissals.toArray()]);return{version:1,exportedAt:new Date().toISOString(),data:{profil:e,tage:t,monate:a,uploads:n,einstellungen:s,mailVorlagen:i,warnungDismissals:r}}}async function Yt(e){if(!e||e.version!==1||!e.data)throw new Error("Ungültiges oder inkompatibles Backup-Format.");const t=e.data;await f.transaction("rw",f.profil,f.tage,f.monate,f.uploads,f.einstellungen,f.mailVorlagen,f.warnungDismissals,async()=>{var a,n,s,i,r,l,o;(a=t.profil)!=null&&a.length&&await f.profil.bulkPut(t.profil),(n=t.tage)!=null&&n.length&&await f.tage.bulkPut(t.tage),(s=t.monate)!=null&&s.length&&await f.monate.bulkPut(t.monate),(i=t.uploads)!=null&&i.length&&await f.uploads.bulkPut(t.uploads),(r=t.einstellungen)!=null&&r.length&&await f.einstellungen.bulkPut(t.einstellungen),(l=t.mailVorlagen)!=null&&l.length&&await f.mailVorlagen.bulkPut(t.mailVorlagen),(o=t.warnungDismissals)!=null&&o.length&&await f.warnungDismissals.bulkPut(t.warnungDismissals)})}async function De(e,t){await f.mailVorlagen.put({key:e,...t})}async function Xt(){return await f.mailVorlagen.toArray()}async function ea(e,t){await f.warnungDismissals.put({key:`${e}-${t}`,datum:e,typ:t,dismissedAt:new Date().toISOString()})}async function ta(){return await f.warnungDismissals.toArray()}function Je(e){if(e==null)return null;if(typeof e=="number")return e;let t=String(e).trim();if(!t)return null;let a=!1;t.endsWith("-")&&(a=!0,t=t.slice(0,-1).trim()),t=t.replace(",",".");const n=parseFloat(t);return isNaN(n)?null:a?-n:n}function B(e){if(e==null||isNaN(e))return"—";const t=e<0,a=Math.abs(e),n=Math.floor(a),s=Math.round((a-n)*60);let i=n,r=s;return r===60&&(i+=1,r=0),`${t?"-":""}${i}:${String(r).padStart(2,"0")}`}function A(e,t={}){if(e==null||isNaN(e))return"—";const{signed:a=!1,suffix:n="h"}=t,s=a&&e>0?"+":"",i=e.toFixed(2).replace(".",",");return`${s}${i}${n}`}function K(e){if(!e)return null;const t=/^(\d{1,2}):(\d{2})$/.exec(String(e).trim());return t?parseInt(t[1],10)*60+parseInt(t[2],10):null}function re(e){if(!(e!=null&&e.length))return null;const t=e.filter(s=>s.von&&s.bis);if(!t.length)return null;let a=t[0].von,n=t[0].bis;for(const s of t)K(s.von)<K(a)&&(a=s.von),K(s.bis)>K(n)&&(n=s.bis);return{kommen:a,gehen:n}}function aa(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
    <polyline points="10 17 15 12 10 7"/>
    <line x1="15" y1="12" x2="3" y2="12"/>
  </svg>`}function na(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>`}function le(e,t={}){const{size:a=20,layout:n="inline"}=t;return e?`
    <div class="kommen-gehen ${n}">
      <span class="kg-block kommen" title="Kommen (frühester Einstempel)">
        ${aa(a)}
        <span class="kg-zeit tabular">${e.kommen}</span>
      </span>
      <span class="kg-block gehen" title="Gehen (spätester Ausstempel)">
        ${na(a)}
        <span class="kg-zeit tabular">${e.gehen}</span>
      </span>
    </div>
  `:'<span class="kg-empty">—</span>'}const Ae={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},sa=(e,t,a)=>{let n;const s=a!=null&&a.addSuffix?Ae[e].withPreposition:Ae[e].standalone;return typeof s=="string"?n=s:t===1?n=s.one:n=s.other.replace("{{count}}",String(t)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:"vor "+n:n},ia={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},ra={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},la={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},oa={date:ce({formats:ia,defaultWidth:"full"}),time:ce({formats:ra,defaultWidth:"full"}),dateTime:ce({formats:la,defaultWidth:"full"})},ca={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},da=(e,t,a,n)=>ca[e],ua={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},ga={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},ue={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},ha={narrow:ue.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:ue.wide},ma={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},fa={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},pa={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},va=e=>Number(e)+".",ba={ordinalNumber:va,era:N({values:ua,defaultWidth:"wide"}),quarter:N({values:ga,defaultWidth:"wide",argumentCallback:e=>e-1}),month:N({values:ue,formattingValues:ha,defaultWidth:"wide"}),day:N({values:ma,defaultWidth:"wide"}),dayPeriod:N({values:fa,defaultWidth:"wide",formattingValues:pa,defaultFormattingWidth:"wide"})},ya=/^(\d+)(\.)?/i,wa=/\d+/i,$a={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},Ma={any:[/^v/i,/^n/i]},za={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},xa={any:[/1/i,/2/i,/3/i,/4/i]},ka={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},Sa={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Da={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},Aa={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},Pa={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},Ta={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},Ea={ordinalNumber:dt({matchPattern:ya,parsePattern:wa,valueCallback:e=>parseInt(e)}),era:q({matchPatterns:$a,defaultMatchWidth:"wide",parsePatterns:Ma,defaultParseWidth:"any"}),quarter:q({matchPatterns:za,defaultMatchWidth:"wide",parsePatterns:xa,defaultParseWidth:"any",valueCallback:e=>e+1}),month:q({matchPatterns:ka,defaultMatchWidth:"wide",parsePatterns:Sa,defaultParseWidth:"any"}),day:q({matchPatterns:Da,defaultMatchWidth:"wide",parsePatterns:Aa,defaultParseWidth:"any"}),dayPeriod:q({matchPatterns:Pa,defaultMatchWidth:"wide",parsePatterns:Ta,defaultParseWidth:"any"})},_={code:"de",formatDistance:sa,formatLong:oa,formatRelative:da,localize:ba,match:Ea,options:{weekStartsOn:1,firstWeekContainsDate:4}};function Y(e){if(!e)return null;const t=e.trim();return ut(t,"dd.MM.yyyy",new Date)}function w(e){return x(e,"dd.MM.yyyy")}function Ue(e){return x(e,"EE, dd.MM.yyyy",{locale:_})}function La(e){return`${gt(e)}-${String(ht(e)).padStart(2,"0")}`}function Qe(e){return x(e,"yyyy-MM")}function Ka(e){return x(e,"yyyy-MM-dd")}function Fa(e,t){if(!e||!t)return 0;e>t&&([e,t]=[t,e]);let a=0,n=new Date(e);for(;n<t;)n=X(n,1),Re(n)||a++;return a}function R(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Wa(e){var r;const t=e.filter(l=>l.tagestyp==="Berufsschule");if(t.length<2)return{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null};const a={};for(const l of t)a[r=l.wochentag]??(a[r]=[]),a[l.wochentag].push(l);const n=[],s=[];let i=null;for(const[l,o]of Object.entries(a)){o.sort((u,h)=>u.datum.localeCompare(h.datum));const c=M(o[0].datum),d=M(o[o.length-1].datum),p=_e(d,c,{weekStartsOn:1})+1,g=o.length/Math.max(1,p);g>=.75?n.push(l):g>=.35&&g<=.65&&(s.push(l),(!i||M(o[0].datum)<M(i))&&(i=o[0].datum))}return{wochentageWoechentlich:n,wochentage14Taegig:s,referenzDatum14Taegig:i}}function Ye(e,t){var s,i;if(!t)return!1;const n=["SO","MO","DI","MI","DO","FR","SA"][e.getDay()];if((s=t.wochentageWoechentlich)!=null&&s.includes(n))return!0;if((i=t.wochentage14Taegig)!=null&&i.includes(n)&&t.referenzDatum14Taegig){const r=M(t.referenzDatum14Taegig),l=_e(e,r,{weekStartsOn:1});if(l>=0&&l%2===0)return!0}return!1}function Ca(e,t){if(!e)return"arbzg";const a=M(e);return mt(t,a)<18?"jarbschg":"arbzg"}function Oa(e,t){return e==null?0:t==="jarbschg"?e>6?1:e>4.5?.5:0:e>9?.75:e>6?.5:0}function Xe(e){if(!e||e.length<2)return 0;const t=e.filter(n=>n.von&&n.bis).map(n=>({von:K(n.von),bis:K(n.bis)})).filter(n=>n.von!=null&&n.bis!=null).sort((n,s)=>n.von-s.von);let a=0;for(let n=1;n<t.length;n++){const s=t[n].von-t[n-1].bis;(s>0&&s>=15||s>0)&&(a+=s)}return a/60}function et(e,t){const a=e.zeitSpannen??[];if(!a.length||a.every(h=>!h.von))return{keinAnspruch:!0};const n=Xe(a),s=e.pause??0,i=Ia(a),r=i-s,l=t.pausenRegel&&t.pausenRegel!=="auto"?t.pausenRegel==="jarbschg"?"jarbschg":"arbzg":Ca(t.geburtsdatum,M(e.datum)),o=Oa(r,l),c=Math.max(n,o),d=s-c,p=Math.max(0,o-n);let g="ok",u=null;if(d>.05)g="fehler_zeitwirtschaft",u=`${Math.round(d*60)} min Pause wurden zusätzlich zur gesetzlichen Pflicht und zur gestempelten Pause abgezogen. Das sieht nach einem Zeitwirtschafts-Fehler aus.`;else if(p>.05&&s>n+.02){g="aufstockung_legal";const h=Math.round(p*60);u=`Du hast ${Math.round(n*60)} min Pause gestempelt, aber bei ${r.toFixed(2).replace(".",",")}h Arbeitszeit schreibt das Gesetz (${l.toUpperCase()}) ${Math.round(o*60)} min vor. Die fehlenden ${h} min wurden automatisch als Pause gewertet. Das ist gesetzeskonform — nächstes Mal einfach länger Pause machen.`}return{arbeitszeitMitPause:i,arbeitszeitOhnePause:r,gestempeltePause:n,abgezogenePause:s,gesetzlichePflicht:o,gesetz:l,legalerAbzug:c,unrechtmaessigerVerlustMin:Math.round(Math.max(0,d)*60),aufstockungMin:Math.round(Math.max(0,p)*60),typ:g,warnung:u}}function Ia(e){let t=0;for(const a of e){if(!a.von||!a.bis)continue;const n=K(a.von),s=K(a.bis);n!=null&&s!=null&&s>n&&(t+=s-n)}return t/60}const J={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function pe(e,t,a,n=new Set){var d,p;const s=[],i=a??new Date,r=new Map(e.map(g=>[g.datum,g]));if(!e.length)return s;const l=M(e[0].datum),o=i;for(let g=new Date(l);g<=o;g=X(g,1)){if(Re(g))continue;const u=x(g,"yyyy-MM-dd"),h=r.get(u),v=Fa(g,o);if(!h||!h.tagestyp&&!h.ist&&(((d=h.zeitSpannen)==null?void 0:d.length)??0)===0){if(Ye(g,t.berufsschulMuster)){const m=v>=4?"error":v>=2?"warn":"info";U(s,n,{datum:u,wochentag:(h==null?void 0:h.wochentag)??te(g),typ:"bs_tag_fehlt",schweregrad:m,titel:`Berufsschultag nicht eingetragen: ${w(g)}`,beschreibung:`Laut deinem Profil hast du am ${J[te(g)]}, ${w(g)} Berufsschule. Im Zeitnachweis fehlt der Tag bisher${v>=4?" — bitte bei der Zeitwirtschaft nachhaken":""}.`,alter:v,mailVorlageKey:m==="error"?"bs_tag_fehlt":null})}else{const m=v>=4?"error":v>=2?"warn":"info";U(s,n,{datum:u,wochentag:te(g),typ:"stempelzeit_fehlt",schweregrad:m,titel:`Keine Stempelzeit am ${w(g)}`,beschreibung:`Am ${J[te(g)]}, ${w(g)} wurde keine Stempelzeit erfasst. Falls du an diesem Tag im Haus warst, sollte die Zeitwirtschaft das nachtragen${v>=4?" — es ist inzwischen ≥4 Werktage her":""}.`,alter:v,mailVorlageKey:m==="error"?"stempelzeit_fehlt":null})}continue}if(h.tagestyp==="Berufsschule"&&h.ist!=null&&h.soll!=null&&h.ist<h.soll-.01&&U(s,n,{datum:u,wochentag:h.wochentag,typ:"bs_stunden_falsch",schweregrad:"error",titel:`Berufsschultag mit zu wenig Stunden: ${w(g)}`,beschreibung:`Am ${J[h.wochentag]}, ${w(g)} sind nur ${h.ist.toFixed(2).replace(".",",")}h gebucht statt regulär ${h.soll.toFixed(2).replace(".",",")}h. Die Zeitwirtschaft hat den Berufsschultag möglicherweise nur halb erfasst.`,ist:h.ist,soll:h.soll,mailVorlageKey:"bs_stunden_falsch"}),h.tagestyp==="Stempelzeit"&&((p=h.zeitSpannen)==null?void 0:p.length)>1&&u>="2026-04-01"){const m=et(h,t);(m==null?void 0:m.typ)==="fehler_zeitwirtschaft"&&m.unrechtmaessigerVerlustMin>=5?U(s,n,{datum:u,wochentag:h.wochentag,typ:"pausen_abzug",schweregrad:m.unrechtmaessigerVerlustMin>=15?"error":"warn",titel:`Pausen-Abzug fehlerhaft (${w(g)})`,beschreibung:`Am ${J[h.wochentag]}, ${w(g)} wurden ${Math.round(m.abgezogenePause*60)} min Pause abgezogen. Gestempelt: ${Math.round(m.gestempeltePause*60)} min, gesetzlich nötig (${m.gesetz.toUpperCase()}): ${Math.round(m.gesetzlichePflicht*60)} min. Differenz von ${m.unrechtmaessigerVerlustMin} min ist unerklärlich.`,verlustMinuten:m.unrechtmaessigerVerlustMin,abgezogen:m.abgezogenePause,gestempelt:m.gestempeltePause,mailVorlageKey:"pausen_abzug"}):(m==null?void 0:m.typ)==="aufstockung_legal"&&m.aufstockungMin>=10&&U(s,n,{datum:u,wochentag:h.wochentag,typ:"pausen_aufstockung",schweregrad:"info",titel:`Zu wenig Pause gestempelt (${w(g)}) — ${m.aufstockungMin} min automatisch aufgestockt`,beschreibung:`Am ${J[h.wochentag]}, ${w(g)} hast du nur ${Math.round(m.gestempeltePause*60)} min Pause gemacht. Gesetz (${m.gesetz.toUpperCase()}) schreibt ${Math.round(m.gesetzlichePflicht*60)} min vor. Fehlende ${m.aufstockungMin} min wurden als Pause gewertet — das ist legal, aber du verlierst dadurch Arbeitszeit. Tipp: mach beim nächsten Mal etwas länger Mittag.`})}}const c={error:0,warn:1,info:2};return s.sort((g,u)=>{const h=c[g.schweregrad]-c[u.schweregrad];return h!==0?h:u.datum.localeCompare(g.datum)}),s}function tt(e,t=new Set){var n,s,i,r;const a=[];for(const l of e){const o=((n=l.glz)==null?void 0:n.saldoVorperiode)??0,c=((s=l.glz)==null?void 0:s.saldoAktuellePeriode)??0,d=((i=l.glz)==null?void 0:i.umgebuchteStunden)??0,p=(r=l.glz)==null?void 0:r.saldoGesamt;if(p==null)continue;const g=o+c+d,u=Math.abs(p-g);if(u>.03){const h=`${l.monatKey}-saldo_plausi`;t.has(h)||a.push({datum:`${l.monatKey}-01`,wochentag:"",typ:"saldo_plausi",schweregrad:"warn",titel:`Saldo-Differenz im Monat ${l.monatKey}`,beschreibung:`Rechnung: Vorperiode ${o.toFixed(2)} + aktuelle Periode ${c.toFixed(2)} + umgebucht ${d.toFixed(2)} = ${g.toFixed(2)}, aber dein Saldo wird mit ${p.toFixed(2)} angezeigt. Abweichung: ${u.toFixed(2)}h.`,soll:g,ist:p})}}return a}function U(e,t,a){const n=`${a.datum}-${a.typ}`;t.has(n)||(a.id=n,e.push(a))}function te(e){return["SO","MO","DI","MI","DO","FR","SA"][e.getDay()]}function Ba(e,t){var o,c,d;const a=[...e].sort((p,g)=>p.datum.localeCompare(g.datum));if(!a.length)return[];const n=new Map(t.map(p=>[p.monatKey,p])),s={};for(const p of a)s[o=p.monatKey]??(s[o]=[]),s[p.monatKey].push(p);const i=Object.keys(s).sort(),r=[];let l=null;for(const p of i){const g=n.get(p);let u;((c=g==null?void 0:g.glz)==null?void 0:c.saldoVorperiode)!=null?u=g.glz.saldoVorperiode:l!=null?u=l:u=0;const h=s[p];for(const v of h)v.diff!=null&&(u+=v.diff),r.push({datum:v.datum,wochentag:v.wochentag,saldo:Math.round(u*100)/100,diff:v.diff,ist:v.ist,soll:v.soll,tagestyp:v.tagestyp,monatKey:v.monatKey,zeitSpannen:v.zeitSpannen});if(((d=g==null?void 0:g.glz)==null?void 0:d.saldoGesamt)!=null){const v=g.glz.saldoGesamt-u;if(Math.abs(v)>.02&&r.length>0){const y=r.length-1;r[y].umbuchung=v,r[y].saldo=Math.round((r[y].saldo+v)*100)/100,u=r[y].saldo}l=g.glz.saldoGesamt}else l=u}return r}function Va(e,t){if(!e.length)return[];if(t==="alles")return e;const a=Math.min(t,e.length);return e.slice(-a)}function Ra(e){return e.length?e[e.length-1].saldo:0}function _a(e){if(!e.length)return 0;const t=e[0].saldo-(e[0].diff??0),a=e[e.length-1].saldo;return Math.round((a-t)*100)/100}E.register(vt,bt,yt,wt,$t,Mt,zt,xt,kt,St,Dt,At,Pt,Tt);function z(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function C(){return{fg:z("--fg"),fgMuted:z("--fg-muted"),fgSubtle:z("--fg-subtle"),border:z("--border"),surface:z("--surface"),accent:z("--accent"),success:z("--success"),warn:z("--warn"),danger:z("--danger"),info:z("--info"),palette:[z("--chart-1"),z("--chart-2"),z("--chart-3"),z("--chart-4"),z("--chart-5"),z("--chart-6"),z("--chart-7")]}}function $(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.fgMuted,font:{size:12}}},tooltip:{backgroundColor:e.surface,titleColor:e.fg,bodyColor:e.fg,borderColor:e.border,borderWidth:1,padding:10,displayColors:!0}},scales:{x:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}},y:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}}}}}function ja(e,t){const a=C();if(O(e),!(t!=null&&t.length))return;const n=t.map(i=>x(M(i.datum),"dd.MM.")),s=t.map(i=>i.saldo);return s.map(i=>i>=0?a.success:a.danger),new E(e,{type:"line",data:{labels:n,datasets:[{label:"Tages-Saldo",data:s,borderColor:a.accent,backgroundColor:i=>{const r=i.chart,{ctx:l,chartArea:o,scales:c}=r;return o?Qa(l,o,c.y,a):I(a.accent,.14)},segment:{borderColor:i=>{const r=i.p0.parsed.y,l=i.p1.parsed.y,o=(r+l)/2;return o>=.02?a.success:o<=-.02?a.danger:a.fgMuted}},tension:.25,pointRadius:2,pointHoverRadius:5,pointBackgroundColor:s.map(i=>i>=.02?a.success:i<=-.02?a.danger:a.fgMuted),pointBorderColor:a.surface,pointBorderWidth:1,fill:!0,borderWidth:2}]},options:{...$(a),plugins:{...$(a).plugins,legend:{display:!1},tooltip:{...$(a).plugins.tooltip,callbacks:{title:i=>{const r=t[i[0].dataIndex];return x(M(r.datum),"EE, dd.MM.yyyy",{locale:_})},label:i=>{const r=t[i.dataIndex],l=[`Saldo: ${r.saldo.toFixed(2).replace(".",",")}h`];return r.diff!=null&&l.push(`Tages-Diff: ${r.diff>=0?"+":""}${r.diff.toFixed(2).replace(".",",")}h`),r.tagestyp&&l.push(`Typ: ${r.tagestyp}`),r.umbuchung&&l.push(`Umbuchung: ${r.umbuchung>=0?"+":""}${r.umbuchung.toFixed(2).replace(".",",")}h`),l}}}},scales:{...$(a).scales,y:{...$(a).scales.y,ticks:{...$(a).scales.y.ticks,callback:i=>`${i>=0?"+":""}${i.toFixed(1).replace(".",",")}h`}}}}})}function Za(e,t){const a=C();if(O(e),!(t!=null&&t.length))return;const n=t.map(i=>i.monatKey),s=t.map(i=>{var r;return((r=i.glz)==null?void 0:r.saldoGesamt)??0});return new E(e,{type:"line",data:{labels:n,datasets:[{label:"GLZ-Saldo (Monatsende)",data:s,borderColor:a.accent,backgroundColor:I(a.accent,.18),tension:.35,fill:!0,pointRadius:4}]},options:$(a)})}function ve(e,t){const a=C();if(O(e),!(t!=null&&t.length))return;const n=t.map(r=>x(M(r.datum),"dd.MM.")),s=t.map(r=>r.ist??0),i=t.map(r=>Ya(r.tagestyp,a));return new E(e,{type:"bar",data:{labels:n,datasets:[{label:"Ist-Stunden",data:s,backgroundColor:i,borderRadius:4,borderSkipped:!1}]},options:{...$(a),plugins:{...$(a).plugins,legend:{display:!1},tooltip:{...$(a).plugins.tooltip,callbacks:{label:r=>{const l=t[r.dataIndex];return`${l.tagestyp??"—"}: ${(l.ist??0).toFixed(2).replace(".",",")}h`}}}},scales:{...$(a).scales,y:{...$(a).scales.y,suggestedMin:0,suggestedMax:10}}}})}function Ha(e,t){const a=C();if(O(e),!(t!=null&&t.length))return;const n=t.filter(c=>{var d;return((d=c.zeitSpannen)==null?void 0:d.length)&&c.zeitSpannen.some(p=>p.von&&p.bis)}).map(c=>{const d=c.zeitSpannen.filter(u=>u.von&&u.bis).map(u=>({von:K(u.von),bis:K(u.bis),vonStr:u.von,bisStr:u.bis})).filter(u=>u.von!=null&&u.bis!=null);if(d.length===0)return null;const p=Math.min(...d.map(u=>u.von)),g=Math.max(...d.map(u=>u.bis));return{...c,_spans:d,_minVon:p,_maxBis:g}}).filter(Boolean);if(!n.length)return;const s=c=>c.ist==null?a.fgMuted:c.ist>=7?a.success:a.danger,i={label:"Tages-Rahmen",data:n.map(c=>[c._minVon,c._maxBis]),backgroundColor:n.map(s),borderColor:n.map(s),borderWidth:0,borderRadius:4,borderSkipped:!1,barPercentage:.75,categoryPercentage:.95},r=Math.max(0,Math.floor(Math.min(...n.map(c=>c._minVon))/60)*60-60),l=Math.min(24*60,Math.ceil(Math.max(...n.map(c=>c._maxBis))/60)*60+60),o=c=>`${String(Math.floor(c/60)).padStart(2,"0")}:${String(c%60).padStart(2,"0")}`;return new E(e,{type:"bar",data:{labels:n.map(c=>x(M(c.datum),"dd.MM.")),datasets:[i]},options:{...$(a),interaction:{mode:"index",intersect:!1,axis:"x"},plugins:{legend:{display:!1},tooltip:{enabled:!0,backgroundColor:a.surface,borderColor:a.accent,borderWidth:2,padding:14,titleColor:a.fg,titleFont:{size:14,weight:"600"},titleMarginBottom:8,bodyColor:a.fg,bodyFont:{size:13},bodySpacing:4,displayColors:!1,caretPadding:10,cornerRadius:8,callbacks:{title:c=>{const d=n[c[0].dataIndex];return x(M(d.datum),"EE, dd.MM.yyyy",{locale:_})},label:()=>"",beforeBody:c=>{const d=n[c[0].dataIndex],p=d.ist!=null?B(d.ist):"—",g=d.soll!=null?B(d.soll):"—",u=d.pause!=null?Math.round(d.pause*60)+" min":"—",v=[`Tages-Rahmen: ${`${o(d._minVon)} – ${o(d._maxBis)}`}`];return d._spans.length>1&&(v.push(""),d._spans.forEach((y,m)=>{v.push(`  Block ${m+1}: ${y.vonStr} – ${y.bisStr}`)})),[...v,"",`Arbeitszeit (netto): ${p}`,`Soll: ${g}`,`Pause (abgezogen): ${u}`]}}}},scales:{x:{ticks:{color:a.fgMuted,font:{size:10},maxRotation:60,minRotation:60,autoSkip:!0,maxTicksLimit:40},grid:{display:!1}},y:{min:r,max:l,ticks:{color:a.fgMuted,stepSize:60,callback:c=>o(c)},grid:{color:a.border}}}}})}function Ga(e,t){const a=C();O(e);const n={};for(const r of t){if(r.tagestyp!=="Stempelzeit"||!r.zeitSpannen||r.zeitSpannen.length<2)continue;const l=Xe(r.zeitSpannen);if(l<=0)continue;const o=Math.round(l*60),c=Math.floor(o/15)*15;n[c]=(n[c]??0)+1}const s=Object.keys(n).map(Number).sort((r,l)=>r-l),i=s.map(r=>n[r]);return new E(e,{type:"bar",data:{labels:s.map(r=>`${r}–${r+14} min`),datasets:[{label:"Häufigkeit",data:i,backgroundColor:a.palette[1],borderRadius:4}]},options:{...$(a),plugins:{...$(a).plugins,legend:{display:!1},tooltip:{...$(a).plugins.tooltip,callbacks:{title:r=>`Pause-Länge (gestempelt): ${r[0].label}`,label:r=>`${r.parsed.y} Tag(e)`}}}}})}function Na(e,t){const a=C();O(e);const n=["MO","DI","MI","DO","FR"],s={},i={};for(const l of n)s[l]=0,i[l]=0;for(const l of t)n.includes(l.wochentag)&&(l.ist==null||l.ist===0||(s[l.wochentag]+=l.ist,i[l.wochentag]+=1));const r=n.map(l=>i[l]>0?s[l]/i[l]:0);return new E(e,{type:"bar",data:{labels:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"],datasets:[{label:"Ø Ist-Stunden",data:r,backgroundColor:a.palette[2],borderRadius:4}]},options:{...$(a),plugins:{...$(a).plugins,legend:{display:!1}}}})}function qa(e,t){const a=C();O(e);const n={};for(const r of t)!r.tagestyp||r.tagestyp==="Wochenende"||(n[r.tagestyp]=(n[r.tagestyp]??0)+1);const s=Object.keys(n),i=Object.values(n);return new E(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:s.map((r,l)=>a.palette[l%a.palette.length]),borderColor:a.surface,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:a.fgMuted,font:{size:12}}},tooltip:$(a).plugins.tooltip}}})}function Ja(e,t){const a=C();O(e);const n={};for(const l of t){const o=l.wocheKey;n[o]??(n[o]={ist:0,soll:0}),n[o].ist+=l.ist??0,n[o].soll+=l.soll??0}const s=Object.keys(n).sort(),i=s.map(l=>n[l].ist),r=s.map(l=>n[l].soll);return new E(e,{type:"bar",data:{labels:s.map(l=>"KW "+l.split("-")[1]),datasets:[{label:"Ist",data:i,backgroundColor:a.palette[0],borderRadius:4},{label:"Soll",data:r,backgroundColor:a.palette[3],borderRadius:4}]},options:$(a)})}function Ua(e,t){const a=C();O(e);const n=t.slice().sort((r,l)=>r.datum.localeCompare(l.datum));let s=0;const i=n.map(r=>(s+=r.diff??0,{x:r.datum,y:s}));return new E(e,{type:"line",data:{labels:i.map(r=>r.x),datasets:[{label:"Kumulative Differenz (+/- Soll)",data:i.map(r=>r.y),borderColor:a.palette[5],backgroundColor:I(a.palette[5],.15),fill:!0,tension:.2,pointRadius:0}]},options:{...$(a),scales:{x:{display:!1,grid:{display:!1}},y:{...$(a).scales.y}}}})}function at(e,t,{monate:a=8}={}){if(!e)return;if(e.innerHTML="",!t.length){e.innerHTML='<p style="color: var(--fg-muted); font-size: 13px;">Keine Daten.</p>';return}const n=new Map(t.map(h=>[h.datum,h])),i=M(t[t.length-1].datum),r=a*30,l=X(i,-r),o=ft(l,{weekStartsOn:1}),c=pt(i,o)+1,d=Math.ceil(c/7),p=document.createElement("div");p.className="heatmap-month-labels",p.style.gridTemplateColumns=`repeat(${d}, 14px)`,e.appendChild(p);let g=-1;for(let h=0;h<d;h++){const v=X(o,h*7),y=v.getMonth(),m=document.createElement("span");m.textContent=y!==g?x(v,"MMM",{locale:_}):"",p.appendChild(m),g=y}const u=document.createElement("div");u.className="heatmap",u.style.gridAutoFlow="column",u.style.gridTemplateRows="repeat(7, 14px)",u.style.gridTemplateColumns=`repeat(${d}, 14px)`;for(let h=0;h<d*7;h++){const v=X(o,h);if(v>i||v<l){const Z=document.createElement("div");Z.className="heatmap-cell",Z.style.background="transparent",u.appendChild(Z);continue}const y=x(v,"yyyy-MM-dd"),m=n.get(y),S=document.createElement("div");S.className="heatmap-cell",S.title=`${x(v,"EE, dd.MM.yyyy",{locale:_})}${(m==null?void 0:m.ist)!=null?" · Ist "+m.ist.toFixed(2)+"h":""}${(m==null?void 0:m.diff)!=null?" · "+(m.diff>=0?"+":"")+m.diff.toFixed(2):""}`,(m==null?void 0:m.diff)!=null&&(m.diff<=-1?S.classList.add("neg-2"):m.diff<-.05?S.classList.add("neg-1"):m.diff>=1?S.classList.add("pos-2"):m.diff>.05&&S.classList.add("pos-1")),u.appendChild(S)}e.appendChild(u)}function O(e){const t=E.getChart(e);t&&t.destroy()}function I(e,t){const a=e.replace("#","").trim();if(a.length!==6&&a.length!==3)return e;const n=a.length===3?a.split("").map(l=>l+l).join(""):a,s=parseInt(n.slice(0,2),16),i=parseInt(n.slice(2,4),16),r=parseInt(n.slice(4,6),16);return`rgba(${s}, ${i}, ${r}, ${t})`}function Qa(e,t,a,n){const{top:s,bottom:i}=t,r=e.createLinearGradient(0,s,0,i),l=a.min,o=a.max,c=o-l;if(c<=0)return I(n.success,.14);let d=(o-0)/c;return d=Math.max(0,Math.min(1,d)),r.addColorStop(0,I(n.success,.28)),r.addColorStop(Math.max(0,d-.001),I(n.success,.06)),r.addColorStop(Math.min(1,d+.001),I(n.danger,.06)),r.addColorStop(1,I(n.danger,.28)),r}function Ya(e,t){const a=String(e??"").toLowerCase();return a.includes("stempel")?t.palette[0]:a.includes("berufs")?t.palette[1]:a.includes("urlaub")?t.palette[2]:a.includes("feiertag")?t.fgSubtle:a.includes("dienst")?t.palette[3]:a.includes("krank")?t.palette[4]:t.palette[5]}let Xa=0;function be(e,{type:t="info",duration:a=3500}={}){const n=document.getElementById("toast-root");if(!n)return;const s=document.createElement("div");s.className=`toast ${t}`,s.textContent=e,s.dataset.id=++Xa,n.appendChild(s),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateY(-8px)",s.style.transition="opacity 220ms, transform 220ms",setTimeout(()=>s.remove(),250)},a)}function ye(e){return be(e,{type:"error",duration:6e3})}function k(e){return be(e,{type:"success"})}const en=[{key:7,label:"1 Woche"},{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:"alles",label:"Alles"}];async function Pe({root:e}){var S,Z,$e,Me;const[t,a,n,s,i]=await Promise.all([j(),ee(),W(),ta(),Zt("dashboardZeitraum",14)]);if(n.length===0){e.innerHTML=sn();return}const r=!t.geburtsdatum||!((Z=(S=t.berufsschulMuster)==null?void 0:S.wochentageWoechentlich)!=null&&Z.length||(Me=($e=t.berufsschulMuster)==null?void 0:$e.wochentage14Taegig)!=null&&Me.length),l=Ba(n,a),o=l.length;let c=i;typeof c=="number"&&c>o&&(c="alles");const d=new Set(s.map(b=>b.key)),p=pe(n,t,new Date,d),g=tt(a,d),u=[...p,...g],h=Ra(l),v=h>.05?"positive":h<-.05?"negative":"",y=u.filter(b=>b.schweregrad==="error"),m=u.filter(b=>b.schweregrad==="warn");e.innerHTML=`
    <h1 class="view-title">Dashboard</h1>
    <p class="view-subtitle">
      ${t.name?F(t.name):"Willkommen"}${t.personalnummer?` · Personalnr. ${F(t.personalnummer)}`:""}
      · Stand: ${F(w(new Date(n[n.length-1].datum)))}
    </p>

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
            ${en.map(b=>{const P=typeof b.key=="number"&&b.key>o;return`<button type="button" data-key="${b.key}" class="${c===b.key?"active":""}" ${P?'disabled style="opacity:0.4"':""}>${b.label}</button>`}).join("")}
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
          seit ${F(w(new Date(n[0].datum)))}
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
        <div class="tabular" style="font-size: 32px; font-weight: 650; letter-spacing: -0.02em; color: ${m.length>0?"var(--warn)":"var(--fg-muted)"};">${m.length}</div>
      </div>
    </div>

    ${r?`
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
        ${u.slice(0,5).map(b=>nn(b)).join("")}
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
  `,Te(c,e,l),e.querySelectorAll("#zeitraum-picker button").forEach(b=>{b.addEventListener("click",async()=>{if(b.disabled)return;const P=b.getAttribute("data-key"),V=P==="alles"?"alles":parseInt(P,10);e.querySelectorAll("#zeitraum-picker button").forEach(H=>H.classList.toggle("active",H===b)),await Ht("dashboardZeitraum",V),Te(V,e,l)})}),requestAnimationFrame(()=>{at(e.querySelector("#mini-heatmap"),n,{monate:4})}),e.addEventListener("click",async b=>{const P=b.target.closest(".ist-copy");if(P){b.preventDefault(),b.stopPropagation();const ke=P.getAttribute("data-val");try{await navigator.clipboard.writeText(ke),P.classList.add("ok");const G=P.querySelector(".ist-wert"),oe=P.querySelector(".copy-icon");if(G&&oe){const ot=G.textContent;G.textContent="✓ kopiert",oe.style.display="none",setTimeout(()=>{P.classList.remove("ok"),G.textContent=ot,oe.style.display=""},1e3)}}catch{k(`Bitte kopieren: ${ke}`)}return}const V=b.target.closest(".btn-dismiss");if(!V)return;const H=V.getAttribute("data-datum"),ze=V.getAttribute("data-typ");if(!H||!ze)return;await ea(H,ze),k("Warnung ausgeblendet.");const xe=V.closest(".alert");xe&&(xe.style.display="none")})}function Te(e,t,a){const n=Va(a,e),s=_a(n);requestAnimationFrame(()=>{const o=t.querySelector("#saldo-chart");ja(o,n)});const i=t.querySelector("#hero-bewegung");if(i){const o=s>.05?"up":s<-.05?"down":"flat",c=s>.05?"↑":s<-.05?"↓":"→";i.className=`saldo-trend ${o}`,i.innerHTML=`${c} ${Math.abs(s)<.01?"Unverändert":A(s,{signed:!0})} im Zeitraum`}const r=t.querySelector("#tage-info");if(r){const o=n.length;r.textContent=`${o} ${o===1?"Tag":"Tage"}`}const l=t.querySelector("#tage-liste");l&&(l.innerHTML=tn(n.slice().reverse()))}function tn(e){if(!e.length)return'<p class="hint">Keine Tage im Zeitraum.</p>';const t=Math.max(1,...e.map(s=>Math.abs(s.diff??0))),a=[];let n=null;for(const s of e){if(s.wocheKey&&s.wocheKey!==n){if(n!==null){const i=s.wocheKey.split("-")[1];a.push(`<div class="woche-divider"><span>KW ${i}</span></div>`)}n=s.wocheKey}a.push(an(s,t))}return`<div class="tages-liste">${a.join("")}</div>`}function an(e,t){const a=e.diff??0,n=a>0,s=Math.min(100,Math.abs(a)/t*100),i=n?"var(--success)":a<0?"var(--danger)":"var(--fg-subtle)",r=re(e.zeitSpannen);return`
    <a href="#/tag/${e.datum}" class="tag-row">
      <div class="tag-row-datum">
        <div class="tabular">${F(w(new Date(e.datum)))}</div>
        <div class="tag-row-wd">${rn(e.wochentag)}</div>
      </div>
      <div class="tag-row-typ">
        ${e.tagestyp?`<span class="pill ${ln(e.tagestyp)}">${F(e.tagestyp)}</span>`:'<span style="color: var(--fg-subtle); font-size: 12px;">—</span>'}
      </div>
      <div class="tag-row-kg">
        ${le(r,{size:18})}
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
  `}function nn(e){const t=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${t}</div>
      <div class="alert-body">
        <div class="alert-title">${F(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${F(e.beschreibung)}</p>
        <div class="alert-actions">
          ${e.mailVorlageKey?'<a href="#/mails" class="btn primary sm">✉ Mail schreiben</a>':""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
          <button class="btn ghost sm btn-dismiss" data-datum="${Ee(e.datum)}" data-typ="${Ee(e.typ)}">Ausblenden</button>
        </div>
      </div>
    </div>
  `}function sn(){return`
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
  `}function rn(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function ln(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function F(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ee(e){return F(e)}const on=""+new URL("pdf.worker.min-yatZIOMy.mjs",import.meta.url).href;Et.workerSrc=on;const Le={Januar:1,Februar:2,März:3,Maerz:3,April:4,Mai:5,Juni:6,Juli:7,August:8,September:9,Oktober:10,November:11,Dezember:12},cn=["Stempelzeit","Berufsschule Std. bez","Berufsschule","Dienstreise Arbeitszeit","Reise öff.VM/PKW Beifahr.","Reise öff.VM/PKW","Urlaub","Gleitzeit","Arbeitsunfähigkeit","TgDtEinh","Neujahr","Karfreitag","Ostermontg","Ostmontg","Osterso.","Hl.3 Kön.","Allerhlg","Pfingstmo","Fronleichn","TdDtEinh"];async function dn(e){const a=await Lt({data:e}).promise,n=[];for(let l=1;l<=a.numPages;l++){const c=await(await a.getPage(l)).getTextContent(),d=un(c.items);for(const p of d)n.push({page:l,text:p})}const s=gn(n),{tage:i,monate:r}=hn(n);return{meta:s,tage:i,monate:r}}function un(e){if(!e.length)return[];const t=e.slice().sort((r,l)=>{const o=l.transform[5]-r.transform[5];return Math.abs(o)>2?o:r.transform[4]-l.transform[4]}),a=[];let n=null,s=[];const i=3;for(const r of t){const l=r.transform[5];n==null||Math.abs(l-n)<=i?(s.push(r),n==null&&(n=l)):(a.push(Ke(s)),s=[r],n=l)}return s.length&&a.push(Ke(s)),a.filter(r=>r.trim().length>0)}function Ke(e){e.sort((n,s)=>n.transform[4]-s.transform[4]);let t="",a=-1;for(const n of e){const s=n.transform[4];a>=0&&s-a>4?t+="  ":a>=0&&s-a>.5&&(t+=" "),t+=n.str,a=s+n.width}return t}function gn(e){var a,n;const t={personalnummer:null,name:null,kostenstelle:null,personalbereich:null,einstellungsdatum:null,mitarbeiterkreis:null,arbeitszeitplanregel:null,zeitraumVon:null,zeitraumBis:null,stichtagAuswertung:null};for(let s=0;s<e.length;s++){const i=e[s].text,r=/vom\s+(\d{2}\.\d{2}\.\d{4})\s+bis\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);r&&(t.zeitraumVon=Y(r[1]),t.zeitraumBis=Y(r[2]));const l=/bis einschließlich dem\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);if(l&&(t.stichtagAuswertung=Y(l[1])),/Personalnummer/i.test(i)&&/Kostenstelle/i.test(i)){const c=(((a=e[s+1])==null?void 0:a.text)??"").trim().split(/\s{2,}/);c.length>=3&&(t.personalnummer=c[0],t.kostenstelle=c[1],t.personalbereich=c[2])}if(/Einstellungsdatum/i.test(i)&&/Mitarbeiterkreis/i.test(i)){const c=(((n=e[s+1])==null?void 0:n.text)??"").trim().split(/\s{2,}/);c.length>=3&&(t.einstellungsdatum=Y(c[0]),t.mitarbeiterkreis=c[1],t.arbeitszeitplanregel=c[2])}if(/Bei Rückfragen wenden Sie sich an/i.test(i))for(let o=s+1;o<Math.min(s+8,e.length);o++){const c=e[o].text.trim();if(/^[A-ZÄÖÜ][a-zäöüß]+(?:\s[A-ZÄÖÜ][a-zäöüß]+)+$/.test(c)&&!/kanarya/i.test(c)&&!/tel/i.test(c)){t.name=c;break}}}return t}function hn(e,t){var o;const a=[],n=[];let s=null,i=null,r=!1,l=0;for(;l<e.length;){const c=e[l].text,d=/Monat:\s*([A-Za-zäöüÄÖÜß]+)\s*-\s*(\d{4})/.exec(c);if(d){const h=d[1].trim(),v=parseInt(d[2],10),y=Le[h]??Le[h.replace("ä","ae")]??null;y&&(s={jahr:v,monat:y,monatKey:`${v}-${String(y).padStart(2,"0")}`},r=!0,i=null),l++;continue}if(/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.test(c)){const h=/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.exec(c),v=Y(h[1]);i={monatKey:(s==null?void 0:s.monatKey)??Qe(v),stichtag:v,glz:{},flexi:{},zeitkonten:{},raw:{}},l=mn(e,l+1,i),n.push(i);continue}let p=s;const g=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)\b/.exec(c.trim());if(g&&s){const h=parseInt(g[1],10);r&&h>=20?p=vn(s):h<=15&&(r=!1)}const u=Fe(c,p);if(u){const h=[];let v=l+1;for(;v<e.length;){const m=e[v].text;if(/^\s*\d{4}\s+Umbuchung/.test(m)||Fe(m,s)||/Wochensumme/i.test(m)||/Monats.bersicht/i.test(m)||/Monat:\s*[A-Za-z]/i.test(m))break;const S=fn(m);if(S){h.push(S),v++;continue}break}if(h.length&&u.zeitSpannen.push(...h),u.tagestyp==="Wochenende"||u.wochentag==="SA"||u.wochentag==="SO"){l=v;continue}(u.ist!=null||u.soll!=null||(((o=u.zeitSpannen)==null?void 0:o.length)??0)>0||u.tagestyp!=null)&&a.push(u),l=v;continue}l++}return{tage:a,monate:n}}function mn(e,t,a){let n=t;const s=/(\d{4,5}|KTAU|AZAU)\s*-\s*(.+?)\s+(-?[\d,.]+-?)(?=\s+(?:\d{4,5}|KTAU|AZAU)\s*-|\s*$)/g;for(;n<e.length;){const i=e[n].text.trim();if(/^Monat:\s/.test(i)||/^Einzelergebnisse\s/.test(i)||/^Tag\b/.test(i)||/^Wochensumme/.test(i)||/^\d{2}\s+(MO|DI|MI|DO|FR|SA|SO)\b/.test(i)||/^Übersicht für den Zeitraum/i.test(i)||/^Abwesenheitsansprüche/i.test(i))break;s.lastIndex=0;let r;for(;(r=s.exec(i))!=null;){const l=r[1],o=r[2].trim(),c=Je(r[3]);a.raw[l]={beschreibung:o,wert:c},l==="0008"&&(a.glz.saldoVorperiode=c),l==="8016"&&(a.glz.saldoAktuellePeriode=c),l==="9802"&&(a.glz.umgebuchteStunden=c),l==="0005"&&(a.glz.saldoGesamt=c),l==="9803"&&(a.glz.ueberzaehligeStd=c),l==="0050"&&(a.zeitkonten.produktivstunden=c),l==="9011"&&(a.flexi.jahreskontoVorperiode=c),l==="9010"&&(a.flexi.jahreskontoSaldo=c),l==="9020"&&(a.flexi.langzeitkontoSaldo=c),l==="9203"&&(a.zeitkonten.azMonatsendeUeber216=c),l==="9207"&&(a.zeitkonten.auszahlungBav=c),l==="9205"&&(a.zeitkonten.summeAuszahlung=c)}if(n++,n-t>80)break}return n}function Fe(e,t){if(!t)return null;const a=e.trim(),n=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)(?:\s+(.+))?$/.exec(a);if(!n)return null;const s=parseInt(n[1],10),i=n[2],r=(n[3]??"").trim();let l=t.jahr,o=t.monat;const c=new Date(l,o-1,s),d={datum:Ka(c),datumDate:c.toISOString(),wochentag:i,tagNr:s,monatKey:Qe(c),wocheKey:La(c),zeitSpannen:[],aktivitaeten:[],ist:null,soll:null,diff:null,pause:null,tazp:null,tagestyp:null,raw:a};return r?(pn(r,d),d):(d.tagestyp=["SA","SO"].includes(i)?"Wochenende":null,d)}function fn(e){const t=e.trim(),a=/^(Stempelzeit|Reise öff\.VM\/PKW Beifahr\.|Reise öff\.VM\/PKW|Dienstreise Arbeitszeit)\s+(\d{2}:\d{2})\s+(\d{2}:\d{2})\s*$/.exec(t);return a?{aktivitaet:a[1],von:a[2],bis:a[3]}:null}function pn(e,t){let a=null,n=e;for(const d of cn)if(e.startsWith(d)){a=d,n=e.slice(d.length).trim();break}a||(a=e.split(/\s+/)[0],n=e.slice(a.length).trim()),t.tagestyp=bn(a),t.aktivitaeten.push(a);const s=n.split(/\s+/).filter(Boolean),i=/^\d{2}:\d{2}$/,r=/^-?[\d,.]+-?$/;let l=0;for(;s[l]&&i.test(s[l])&&s[l+1]&&i.test(s[l+1]);)t.zeitSpannen.push({aktivitaet:a,von:s[l],bis:s[l+1]}),l+=2;const o=[];for(;l<s.length&&r.test(s[l]);){const d=Je(s[l]);d!=null&&o.push(d),l++}let c=s[l];o.length>=5?([t.ist,t.soll,t.diff,t.pause]=o,c||(c=String(o[4]))):o.length===4?[t.ist,t.soll,t.diff,t.pause]=o:o.length===3?[t.ist,t.soll,t.diff]=o:o.length===2?[t.ist,t.soll]=o:o.length===1&&(t.ist=o[0]),c&&(t.tazp=String(c))}function vn(e){if(!e)return null;let t=e.monat-1,a=e.jahr;return t<1&&(t=12,a-=1),{jahr:a,monat:t,monatKey:`${a}-${String(t).padStart(2,"0")}`}}function bn(e){return e?/^Stempelzeit$/i.test(e)?"Stempelzeit":/^Berufsschule Std\. bez$/i.test(e)||/^Berufsschule$/i.test(e)?"Berufsschule":/Dienstreise/i.test(e)||/Reise/i.test(e)?"Dienstreise":/^Urlaub$/i.test(e)?"Urlaub":/^Gleitzeit$/i.test(e)?"Gleitzeit":/Arbeitsunf.higkeit/i.test(e)?"Arbeitsunfähigkeit":/^(Neujahr|Karfreitag|Ostermontg|Ostmontg|Osterso\.|Hl\.3 Kön\.|Allerhlg|Pfingstmo|Fronleichn|TdDtEinh|TgDtEinh)$/i.test(e)?"Feiertag":e:null}async function yn({root:e}){const t=await qe(),a=await j();e.innerHTML=`
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
        ${t.length===0?'<div class="empty-state"><div class="empty-state-icon">📭</div><p>Noch keine Uploads</p></div>':nt(t)}
      </div>
    </div>
  `;const n=e.querySelector("#upload-zone"),s=e.querySelector("#file-input");n.addEventListener("click",()=>s.click()),n.addEventListener("dragover",i=>{i.preventDefault(),n.classList.add("drag")}),n.addEventListener("dragleave",()=>n.classList.remove("drag")),n.addEventListener("drop",async i=>{var l;i.preventDefault(),n.classList.remove("drag");const r=(l=i.dataTransfer.files)==null?void 0:l[0];r&&await We(r,e,a)}),s.addEventListener("change",async i=>{var l;const r=(l=i.target.files)==null?void 0:l[0];r&&await We(r,e,a)}),e.querySelector("#btn-export").addEventListener("click",$n),e.querySelector("#btn-import").addEventListener("click",()=>e.querySelector("#import-input").click()),e.querySelector("#import-input").addEventListener("change",Mn),e.querySelector("#btn-clear-parsed").addEventListener("click",wn),e.querySelector("#btn-reset").addEventListener("click",zn)}async function wn(){confirm("PDF-abgeleitete Daten (Tage, Monate, Uploads) werden gelöscht. Profil und Mail-Vorlagen bleiben erhalten. Fortfahren?")&&(await Ut(),k("Daten gelöscht. Profil bleibt."),setTimeout(()=>location.reload(),600))}function nt(e){return`
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
            <td>${R(xn(t.hochladeDatum))}</td>
            <td>${R(t.dateiname||"—")}</td>
            <td>${t.zeitraumVon?R(w(new Date(t.zeitraumVon))):"—"} – ${t.zeitraumBis?R(w(new Date(t.zeitraumBis))):"—"}</td>
            <td>${t.stichtagAuswertung?R(w(new Date(t.stichtagAuswertung))):"—"}</td>
            <td class="num">${t.tageCount??"—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}async function We(e,t,a){var i,r,l,o;const n=t.querySelector("#upload-status"),s=t.querySelector("#upload-zone");s.style.pointerEvents="none",s.style.opacity="0.6",n.innerHTML=`
    <div class="alert severity-info">
      <div class="loader-ring" style="width: 24px; height: 24px; border-width: 2px;"></div>
      <div class="alert-body">
        <div class="alert-title">PDF wird verarbeitet…</div>
        <p style="margin: 4px 0; font-size: 13px;"><strong>${R(e.name)}</strong> — das kann bei großen PDFs einige Sekunden dauern.</p>
      </div>
    </div>`;try{const c=await e.arrayBuffer(),d=await dn(c);await Gt(d.tage),await Nt(d.monate),await qt({dateiname:e.name,zeitraumVon:((i=d.meta.zeitraumVon)==null?void 0:i.toISOString())??null,zeitraumBis:((r=d.meta.zeitraumBis)==null?void 0:r.toISOString())??null,stichtagAuswertung:((l=d.meta.stichtagAuswertung)==null?void 0:l.toISOString())??null,tageCount:d.tage.length,monateCount:d.monate.length});const p=await W(),g=Wa(p),u={...Ne(),...a};d.meta.personalnummer&&!a.personalnummer&&(u.name=d.meta.name??a.name,u.personalnummer=d.meta.personalnummer,u.einstellungsdatum=((o=d.meta.einstellungsdatum)==null?void 0:o.toISOString())??a.einstellungsdatum,u.arbeitszeitplanregel=d.meta.arbeitszeitplanregel??a.arbeitszeitplanregel),(g.wochentageWoechentlich.length>0||g.wochentage14Taegig.length>0)&&(u.berufsschulMuster=g),await fe(u),n.innerHTML=`
      <div class="alert severity-info" style="border-color: var(--success); background: var(--success-bg);">
        <div class="alert-icon" style="background: var(--success);">✓</div>
        <div class="alert-body">
          <div class="alert-title">PDF erfolgreich eingelesen</div>
          <p style="margin: 4px 0; font-size: 13px;">
            ${d.tage.length} Tage · ${d.monate.length} Monatsübersichten
            ${d.meta.zeitraumVon?` · Zeitraum: ${w(d.meta.zeitraumVon)} – ${w(d.meta.zeitraumBis)}`:""}
          </p>
          <div class="alert-actions">
            <a href="#/" class="btn primary sm">Zum Dashboard</a>
            <a href="#/monat" class="btn sm">Monate ansehen</a>
          </div>
        </div>
      </div>
    `,k(`PDF verarbeitet: ${d.tage.length} Tage.`);const h=await qe();t.querySelector("#uploads-list").innerHTML=nt(h)}catch(c){console.error(c),n.innerHTML=`
      <div class="alert severity-error">
        <div class="alert-icon">!</div>
        <div class="alert-body">
          <div class="alert-title">Fehler beim Parsen</div>
          <p style="margin: 4px 0; font-size: 13px;">${R(c.message||String(c))}</p>
          <p style="margin: 4px 0; font-size: 12px; color: var(--fg-muted);">Prüfe, ob es sich um einen Putzmeister-SAP-Zeitnachweis handelt. Bei einem anderen Layout kann der Parser fehlschlagen.</p>
        </div>
      </div>
    `,ye("PDF konnte nicht gelesen werden.")}finally{s.style.pointerEvents="",s.style.opacity=""}}async function $n(){try{const e=await Qt(),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),a=URL.createObjectURL(t),n=document.createElement("a"),s=new Date().toISOString().slice(0,10);n.href=a,n.download=`zeitnachweis-backup-${s}.json`,n.click(),URL.revokeObjectURL(a),k("Backup heruntergeladen.")}catch(e){ye(`Export fehlgeschlagen: ${e.message}`)}}async function Mn(e){var a;const t=(a=e.target.files)==null?void 0:a[0];if(t)try{const n=await t.text(),s=JSON.parse(n);if(!confirm("Existierende Daten werden überschrieben. Fortfahren?"))return;await Yt(s),k("Backup erfolgreich importiert. Seite wird neu geladen…"),setTimeout(()=>location.reload(),800)}catch(n){ye(`Import fehlgeschlagen: ${n.message}`)}}async function zn(){confirm("ALLE Daten endgültig löschen? Das lässt sich nicht rückgängig machen.")&&confirm("Wirklich alle Daten löschen? Letzte Warnung.")&&(await Jt(),k("Alle Daten gelöscht."),setTimeout(()=>location.reload(),600))}function xn(e){if(!e)return"—";const t=new Date(e);return t.toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"})+" "+t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}const Ce={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag"};async function kn({root:e}){var s,i,r,l;const t=await j(),a=t.berufsschulMuster??{},n=(((s=a.wochentageWoechentlich)==null?void 0:s.length)??0)>0||(((i=a.wochentage14Taegig)==null?void 0:i.length)??0)>0;e.innerHTML=`
    <h1 class="view-title">Profil</h1>
    <p class="view-subtitle">Persönliche Daten, Pausen-Regel und Mail-Kontakt.</p>

    <form id="profil-form" class="grid cols-2" style="gap: 24px;">
      <div class="card">
        <h2>Persönliche Daten</h2>
        <div class="form-group">
          <label>Name</label>
          <input type="text" name="name" value="${ae(t.name)}" placeholder="Florian Kern" />
        </div>
        <div class="form-group">
          <label>Personalnummer</label>
          <input type="text" name="personalnummer" value="${ae(t.personalnummer)}" placeholder="00101473" />
        </div>
        <div class="form-group">
          <label>Geburtsdatum <span class="hint">(wichtig für JArbSchG vs. ArbZG)</span></label>
          <input type="date" name="geburtsdatum" value="${t.geburtsdatum?t.geburtsdatum.slice(0,10):""}" />
        </div>
        <div class="form-group">
          <label>Pausen-Regel</label>
          <select name="pausenRegel">
            <option value="auto" ${t.pausenRegel==="auto"?"selected":""}>Automatisch (aus Alter)</option>
            <option value="arbzg" ${t.pausenRegel==="arbzg"?"selected":""}>ArbZG (≥18 Jahre)</option>
            <option value="jarbschg" ${t.pausenRegel==="jarbschg"?"selected":""}>JArbSchG (&lt;18 Jahre)</option>
          </select>
          <p class="hint">Auto ist empfohlen — wechselt automatisch am 18. Geburtstag.</p>
        </div>
      </div>

      <div class="card">
        <h2>Zeitwirtschaft-Kontakt</h2>
        <div class="form-group">
          <label>E-Mail-Empfänger</label>
          <input type="email" name="zeitwirtschaftEmail" value="${ae(t.zeitwirtschaftEmail)}" />
        </div>
        <div class="form-group">
          <label>Anrede in Mails</label>
          <input type="text" name="zeitwirtschaftAnrede" value="${ae(t.zeitwirtschaftAnrede)}" placeholder="Frau Kanarya" />
        </div>
      </div>

      <div class="card" style="grid-column: 1 / -1;">
        <h2>Berufsschul-Rhythmus <span style="font-size: 11px; font-weight: 500; color: var(--fg-subtle); text-transform: uppercase; letter-spacing: 0.05em; margin-left: 8px;">Automatisch erkannt</span></h2>
        ${n?`
          <div class="tag-detail">
            <div class="tag-detail-label">Wöchentlich</div>
            <div class="tag-detail-value"><strong>${((r=a.wochentageWoechentlich)==null?void 0:r.map(o=>Ce[o]).join(", "))||"—"}</strong></div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Alle 2 Wochen</div>
            <div class="tag-detail-value"><strong>${((l=a.wochentage14Taegig)==null?void 0:l.map(o=>Ce[o]).join(", "))||"—"}</strong>${a.referenzDatum14Taegig?` <span class="hint">(Anker: ${w(new Date(a.referenzDatum14Taegig))})</span>`:""}</div>
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
  `,e.querySelector("#profil-form").addEventListener("submit",async o=>{var p,g,u,h;o.preventDefault();const c=new FormData(o.target),d={...t,name:((p=c.get("name"))==null?void 0:p.trim())||"",personalnummer:((g=c.get("personalnummer"))==null?void 0:g.trim())||"",geburtsdatum:c.get("geburtsdatum")?new Date(c.get("geburtsdatum")).toISOString():null,pausenRegel:c.get("pausenRegel")||"auto",zeitwirtschaftEmail:((u=c.get("zeitwirtschaftEmail"))==null?void 0:u.trim())||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:((h=c.get("zeitwirtschaftAnrede"))==null?void 0:h.trim())||"Frau Kanarya"};await fe(d),k("Profil gespeichert.")})}function ae(e){return String(e??"").replace(/"/g,"&quot;")}async function Sn({root:e}){var s;const t=await ee(),a=await W(),n={};for(const i of a)n[s=i.monatKey]??(n[s]=[]),n[i.monatKey].push(i);if(t.length===0){e.innerHTML=Ln("Noch keine Monatsdaten. Lade zuerst ein PDF unter Daten hoch.");return}e.innerHTML=`
    <h1 class="view-title">Monate</h1>
    <p class="view-subtitle">${t.length} Monate erfasst. Klicke für Details.</p>

    <div class="grid cols-2">
      ${t.slice().reverse().map(i=>{var g;const l=(n[i.monatKey]??[]).filter(u=>u.ist!=null&&u.ist>0),o=l.reduce((u,h)=>u+(h.ist??0),0),c=l.reduce((u,h)=>u+(h.soll??0),0),d=o-c,p=(g=i.glz)==null?void 0:g.saldoGesamt;return`
          <a href="#/monat/${i.monatKey}" class="card" style="text-decoration: none; color: inherit; display: block;">
            <div class="card-split" style="margin-bottom: 12px;">
              <h2 style="margin: 0;">${ge(i.monatKey)}</h2>
              <span class="saldo-trend ${p>.05?"up":p<-.05?"down":"flat"}" style="margin: 0; font-size: 12px;">
                Saldo: <strong>${A(p??0,{signed:!0})}</strong>
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
                <div class="tabular ${d>.05?"positive":d<-.05?"negative":""}" style="font-size: 14px; font-weight: 500; color: ${d>.05?"var(--success)":d<-.05?"var(--danger)":"var(--fg)"};">${A(d,{signed:!0})}</div>
              </div>
            </div>
          </a>
        `}).join("")}
    </div>
  `}async function Dn({params:e,root:t}){const a=e.yyyymm,[n,s,i]=await Promise.all([W(),ee(),j()]),r=s.find(c=>c.monatKey===a),l=n.filter(c=>c.monatKey===a).sort((c,d)=>c.datum.localeCompare(d.datum));if(!l.length){t.innerHTML=`<h1 class="view-title">Monat ${ge(a)}</h1><p class="view-subtitle">Keine Daten für diesen Monat.</p><a href="#/monat" class="btn">← Alle Monate</a>`;return}const o=pe(n,i,new Date).filter(c=>c.datum.startsWith(a));t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat" class="btn sm">← Alle Monate</a>
    </div>
    <h1 class="view-title">${ge(a)}</h1>
    <p class="view-subtitle">${l.length} Tage · ${o.length} Auffälligkeiten</p>

    ${r?An(r):""}

    <div class="card" style="margin-bottom: 24px;">
      <h2>Tagesbalken</h2>
      <div class="chart-wrap tall"><canvas id="chart-monat"></canvas></div>
    </div>

    ${o.length?`
      <div class="card" style="margin-bottom: 24px;">
        <h2>Auffälligkeiten</h2>
        ${o.map(c=>Tn(c)).join("")}
      </div>
    `:""}

    <div class="card">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Tage</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">Klicke auf ein Datum für Details</span>
      </div>
      ${Pn(l)}
    </div>
  `,ve(t.querySelector("#chart-monat"),l)}function An(e){var n,s,i,r;const t=((n=e.glz)==null?void 0:n.saldoGesamt)??0;return`
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
  `}function Pn(e){return`
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
              <td>${t.tagestyp?`<span class="pill ${En(t.tagestyp)}">${ne(t.tagestyp)}</span>`:"—"}</td>
              <td>${le(n,{size:18})}</td>
              <td class="num tabular">${t.ist!=null?t.ist.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular">${t.soll!=null?t.soll.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular ${a}">${t.diff!=null?A(t.diff,{signed:!0,suffix:""}):"—"}</td>
              <td class="num tabular">${t.pause!=null?t.pause.toFixed(2).replace(".",","):"—"}</td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `}function Tn(e){return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i"}</div>
      <div class="alert-body">
        <div class="alert-title">${ne(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${ne(e.beschreibung)}</p>
        ${e.mailVorlageKey?`<div class="alert-actions"><a href="#/mails" class="btn primary sm">Mail schreiben</a><a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a></div>`:""}
      </div>
    </div>
  `}function ge(e){const[t,a]=e.split("-"),n=new Date(parseInt(t),parseInt(a)-1,1);return x(n,"LLLL yyyy",{locale:_})}function En(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function Ln(e){return`<div class="empty-state"><div class="empty-state-icon">📭</div><p>${ne(e)}</p><a href="#/daten" class="btn primary">Zu Daten</a></div>`}function ne(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function Kn({root:e}){var s;const t=await W();if(!t.length){e.innerHTML='<h1 class="view-title">Wochen</h1><p class="view-subtitle">Noch keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a={};for(const i of t)a[s=i.wocheKey]??(a[s]={key:i.wocheKey,tage:[],ist:0,soll:0}),a[i.wocheKey].tage.push(i),a[i.wocheKey].ist+=i.ist??0,a[i.wocheKey].soll+=i.soll??0;const n=Object.keys(a).sort().reverse();e.innerHTML=`
    <h1 class="view-title">Wochen</h1>
    <p class="view-subtitle">${n.length} Wochen erfasst.</p>

    <div>
      ${n.map(i=>{const r=a[i],l=r.ist-r.soll,o=l>.05?"positive":l<-.05?"negative":"";return`
          <a href="#/woche/${i}" class="list-item">
            <div class="tabular" style="font-size: 16px; font-weight: 600; color: var(--fg-muted);">${se(st(i))}</div>
            <div>
              <div class="list-item-title">Ist: ${r.ist.toFixed(2).replace(".",",")}h · Soll: ${r.soll.toFixed(2).replace(".",",")}h</div>
              <div class="list-item-sub">${r.tage.length} Tage erfasst</div>
            </div>
            <div class="tabular ${o}" style="font-weight: 600; font-size: 16px;">${A(l,{signed:!0})}</div>
            <div style="color: var(--fg-subtle);">→</div>
          </a>
        `}).join("")}
    </div>
  `}async function Fn({params:e,root:t}){const a=await W(),n=e.yyyykw,s=a.filter(o=>o.wocheKey===n).sort((o,c)=>o.datum.localeCompare(c.datum));if(!s.length){t.innerHTML=`<h1 class="view-title">KW ${se(n)}</h1><p>Keine Daten.</p><a href="#/woche" class="btn">← Alle Wochen</a>`;return}const i=s.reduce((o,c)=>o+(c.ist??0),0),r=s.reduce((o,c)=>o+(c.soll??0),0),l=i-r;t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/woche" class="btn sm">← Alle Wochen</a>
    </div>
    <h1 class="view-title">${se(st(n))}</h1>
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
      ${Wn(s)}
    </div>
  `,ve(t.querySelector("#chart-woche"),s)}function Wn(e){return`
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
              <td><a href="#/tag/${t.datum}" style="color: inherit;"><span class="tabular">${x(M(t.datum),"dd.MM.yyyy")}</span> ${t.wochentag}</a></td>
              <td>${t.tagestyp?`<span class="pill ${Cn(t.tagestyp)}">${se(t.tagestyp)}</span>`:"—"}</td>
              <td>${le(n,{size:18})}</td>
              <td class="num tabular">${t.ist!=null?t.ist.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular">${t.soll!=null?t.soll.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular ${a}">${t.diff!=null?A(t.diff,{signed:!0,suffix:""}):"—"}</td>
              <td class="num tabular">${t.pause!=null?t.pause.toFixed(2).replace(".",","):"—"}</td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `}function st(e){const[t,a]=e.split("-");return`KW ${a} · ${t}`}function Cn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function se(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function On({params:e,root:t}){var c,d,p;const a=e.datum,n=await f.tage.get(a),s=await j();if(!n){t.innerHTML=`<h1 class="view-title">Tag nicht gefunden</h1><p>Für ${a} liegen keine Daten vor.</p><a href="#/" class="btn">← Dashboard</a>`;return}const i=M(a),r=n.tagestyp==="Stempelzeit"?et(n,s):null,l=Ye(i,s.berufsschulMuster),o=re(n.zeitSpannen);t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat/${a.slice(0,7)}" class="btn sm">← Zum Monat</a>
    </div>
    <h1 class="view-title">${Ue(i)}</h1>
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
                <div class="tag-detail-label">${Q(g.aktivitaet??"Stempelzeit")}</div>
                <div class="tag-detail-value tabular">${g.von??"—"} – ${g.bis??"—"}</div>
              </div>
            `).join(""):'<p class="hint">Keine Stempelzeiten für diesen Tag.</p>'}
      </div>

      <div class="card">
        <h2>Klassifikation</h2>
        <div class="tag-detail">
          <div class="tag-detail-label">Tagestyp</div>
          <div class="tag-detail-value">${n.tagestyp?`<span class="pill ${In(n.tagestyp)}">${Q(n.tagestyp)}</span>`:"—"}</div>
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

      ${r&&!r.keinAnspruch?`
        <div class="card" style="grid-column: 1 / -1;">
          <h2>Pausen-Analyse</h2>
          <div class="grid cols-2">
            <div>
              <div class="tag-detail">
                <div class="tag-detail-label">Arbeitszeit (netto)</div>
                <div class="tag-detail-value tabular">${(p=r.arbeitszeitOhnePause)==null?void 0:p.toFixed(2).replace(".",",")}h</div>
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
              <div class="alert-body">${Q(r.warnung)}</div>
            </div>
          `:""}
        </div>
      `:""}
    </div>
  `}function In(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function Q(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function Bn({root:e}){const[t,a]=await Promise.all([W(),ee()]);if(!t.length){e.innerHTML='<h1 class="view-title">Analytics</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}e.innerHTML=`
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
  `,requestAnimationFrame(()=>{Za(e.querySelector("#c-saldo"),a),at(e.querySelector("#heatmap"),t,{monate:8}),Ja(e.querySelector("#c-istsoll"),t),Ua(e.querySelector("#c-kumulativ"),t),Ha(e.querySelector("#c-startend"),t),Na(e.querySelector("#c-wochentag"),t),Ga(e.querySelector("#c-pausen"),t),qa(e.querySelector("#c-donut"),t);const n=t.slice(-30);ve(e.querySelector("#c-alle-tage"),n)})}async function Vn({root:e}){const t=await W();if(!t.length){e.innerHTML='<h1 class="view-title">Berichtsheft</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a=[...new Set(t.map(i=>i.monatKey))].sort().reverse();e.innerHTML=`
    <h1 class="view-title">Berichtsheft-Export</h1>
    <p class="view-subtitle">Kopiere die Arbeitsstunden im HH:MM-Format direkt in dein Berichtsheft.</p>

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 16px; align-items: center;">
        <h2 style="margin: 0;">Filter</h2>
        <div style="display: flex; gap: 8px; align-items: center;">
          <label style="color: var(--fg-muted); font-size: 13px;">Monat:</label>
          <select id="filter-monat">
            <option value="">Alle</option>
            ${a.map(i=>`<option value="${i}">${jn(i)}</option>`).join("")}
          </select>
          <button class="btn sm" id="btn-copy-all">Alle sichtbaren kopieren</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div id="liste"></div>
    </div>
  `;const n=e.querySelector("#filter-monat");n.addEventListener("change",()=>s()),e.querySelector("#btn-copy-all").addEventListener("click",()=>{const i=e.querySelectorAll("#liste tr[data-copy]"),r=Array.from(i).map(l=>l.getAttribute("data-copy")).join(`
`);navigator.clipboard.writeText(r).then(()=>k(`${i.length} Zeilen kopiert.`))});function s(){const i=n.value,l=(i?t.filter(o=>o.monatKey===i):t).filter(o=>o.ist!=null&&o.ist>0&&o.tagestyp!=="Wochenende");e.querySelector("#liste").innerHTML=Rn(l),e.querySelectorAll(".copy-val").forEach(o=>{o.addEventListener("click",async()=>{const c=o.getAttribute("data-val");await navigator.clipboard.writeText(c),o.classList.add("ok");const d=o.textContent;o.textContent="✓ kopiert",setTimeout(()=>{o.classList.remove("ok"),o.textContent=d},1200)})})}s()}function Rn(e){return e.length?`
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
        ${e.map(t=>{const a=B(t.ist),n=`${w(M(t.datum))}	${a}`;return`
            <tr data-copy="${Oe(n)}">
              <td class="tabular">${w(M(t.datum))}</td>
              <td>${_n(t.wochentag)}</td>
              <td>${t.tagestyp?`<span class="pill ${Zn(t.tagestyp)}">${it(t.tagestyp)}</span>`:"—"}</td>
              <td class="num tabular">${t.ist.toFixed(2).replace(".",",")}</td>
              <td class="num tabular" style="font-weight: 600;">${a}</td>
              <td><button class="copy-val" data-val="${Oe(a)}">📋 ${a}</button></td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `:'<p style="color: var(--fg-muted);">Keine Tage in dieser Auswahl.</p>'}function _n(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function jn(e){const[t,a]=e.split("-");return x(new Date(parseInt(t),parseInt(a)-1,1),"LLLL yyyy",{locale:_})}function Zn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function it(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Oe(e){return it(e)}const Hn={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"},we={bs_tag_fehlt:{key:"bs_tag_fehlt",titel:"Berufsschultag fehlt",beschreibung:"Wenn ein Berufsschultag komplett nicht im Zeitnachweis eingetragen wurde.",betreff:"Bitte um Zeitkorrektur im ESS  - Fehlender Berufsschultag {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

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

Vielen Dank!`}};function rt(e,t){const a=we[e];return a?{...a,...t??{}}:null}function lt(e,t){const a=Ie(e.text,t);return{betreff:Ie(e.betreff,t),text:a}}function Ie(e,t){return e.replace(/\{(\w+)\}/g,(a,n)=>t[n]!=null?String(t[n]):`{${n}}`)}function Gn(e,t){const a=t.datum?new Date(t.datum):null,n=a?Ue(a).split(", ")[1]:"";return{name:e.name||"Ihr Mitarbeiter",personalnr:e.personalnummer||"—",kostenstelle:e.kostenstelle||"—",datum:n,wochentag:Hn[t.wochentag]??t.wochentag??"",zeitwirtschaft_anrede:e.zeitwirtschaftAnrede||"Frau Kanarya",zeitwirtschaft_email:e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",ist:t.ist!=null?t.ist.toFixed(2).replace(".",","):"",soll:t.soll!=null?t.soll.toFixed(2).replace(".",","):"",abgezogen:t.abgezogen!=null?Math.round(t.abgezogen*60):"",gestempelt:t.gestempelt!=null?Math.round(t.gestempelt*60):"",verlust:t.verlustMinuten??""}}function Nn(e,t,a){const n=lt(t,a),s=e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",i=new URLSearchParams;return i.set("subject",n.betreff),i.set("body",n.text),`mailto:${s}?${i.toString().replace(/\+/g,"%20")}`}async function qn({root:e}){const[t,a,n,s]=await Promise.all([W(),j(),ee(),Xt()]),i=Object.fromEntries(s.map(o=>[o.key,o])),r=pe(t,a,new Date).filter(o=>o.mailVorlageKey),l=tt(n);e.innerHTML=`
    <h1 class="view-title">Mail-Vorlagen</h1>
    <p class="view-subtitle">Vorformulierte Mails an die Zeitwirtschaft bei erkannten Fehlern im Zeitnachweis.</p>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Offene Warnungen mit Mail-Vorschlag</h2>
      <p class="hint" style="margin-bottom: 16px;">Diese Warnungen haben einen roten Schweregrad und sind eine direkte Mail wert.</p>

      ${r.length===0?'<div class="empty-state"><div class="empty-state-icon">✓</div><p>Keine akuten Warnungen — top.</p></div>':r.map(o=>Jn(o,a,i)).join("")}

      ${l.length>0?`
        <h3 style="margin-top: 24px;">Saldo-Plausibilität</h3>
        ${l.map(o=>`
          <div class="alert severity-warn">
            <div class="alert-icon">⚠</div>
            <div class="alert-body">
              <div class="alert-title">${T(o.titel)}</div>
              <p style="margin: 4px 0; font-size: 13px;">${T(o.beschreibung)}</p>
            </div>
          </div>
        `).join("")}
      `:""}
    </div>

    <div class="card">
      <h2>Vorlagen verwalten</h2>
      <p class="hint" style="margin-bottom: 16px;">Passe die Texte an deinen Stil an. Platzhalter wie <code>{name}</code>, <code>{datum}</code>, <code>{wochentag}</code>, <code>{ist}</code>, <code>{soll}</code> werden automatisch gefüllt.</p>

      <div id="vorlagen-editor">
        ${Object.keys(we).map(o=>{const c=rt(o,i[o]);return Un(c)}).join("")}
      </div>
    </div>
  `,Qn(e),Yn(e)}function Jn(e,t,a){const n=rt(e.mailVorlageKey,a[e.mailVorlageKey]);if(!n)return"";const s=Gn(t,e),i=lt(n,s),r=Nn(t,n,s);return`
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
        <button class="btn sm btn-copy-mail" data-subject="${he(i.betreff)}" data-body="${he(i.text)}">📋 Betreff + Text kopieren</button>
      </div>
    </div>
  `}function Un(e){return`
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
        <input type="text" class="v-betreff" value="${he(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 240px;">${T(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function Qn(e){e.querySelectorAll(".btn-save-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-key"),n=t.closest(".vorlagen-item"),s=n.querySelector(".v-betreff").value,i=n.querySelector(".v-text").value;await De(a,{betreff:s,text:i}),k("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-key"),n=we[a];n&&confirm(`Vorlage "${n.titel}" auf Default zurücksetzen?`)&&(await De(a,{betreff:n.betreff,text:n.text}),k("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function Yn(e){e.querySelectorAll(".btn-copy-mail").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-subject"),n=t.getAttribute("data-body"),s=`Betreff: ${a}

${n}`;await navigator.clipboard.writeText(s),k("Mail-Text kopiert.")})})}function T(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function he(e){return T(e)}async function Xn({root:e}){const t=Ze(),a=await j();e.innerHTML=`
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
  `,e.querySelectorAll("[data-theme]").forEach(n=>{n.addEventListener("click",()=>{const s=n.getAttribute("data-theme");me(s),e.querySelectorAll("[data-theme]").forEach(i=>i.classList.toggle("active",i===n)),k(`Theme: ${n.textContent.trim()}`)})}),e.querySelector("#pause-sel").addEventListener("change",async n=>{const s={...a,pausenRegel:n.target.value};await fe(s),k("Pausen-Regel gespeichert.")})}async function Be(){var t;Kt();const e=document.getElementById("content");(t=document.getElementById("theme-toggle"))==null||t.addEventListener("click",()=>Ft()),Wt(()=>{Vt()}),await jt()&&setTimeout(()=>{be('Parser wurde aktualisiert. Bitte lade deinen Zeitnachweis unter "Daten" neu hoch.',{type:"info",duration:12e3})},500),await _t(),D("/",Pe),D("/dashboard",Pe),D("/analytics",Bn),D("/monat",Sn),D("/monat/:yyyymm",Dn),D("/woche",Kn),D("/woche/:yyyykw",Fn),D("/tag/:datum",On),D("/berichtsheft",Vn),D("/mails",qn),D("/profil",kn),D("/daten",yn),D("/einstellungen",Xn),It(e),location.hash||Ot("/")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Be):Be();
