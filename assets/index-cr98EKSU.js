import{D as lt}from"./dexie-BODkcwel.js";import{b as le,a as N,c as q,d as ot,f as x,e as X,i as Be,p as ct,g as dt,h as ut,j as $,k as Re,l as gt,s as ht,m as mt}from"./datefns-Dq49jaKA.js";import{C as L,L as ft,B as pt,D as vt,S as bt,a as yt,b as wt,P as Mt,A as $t,c as zt,d as xt,T as St,p as kt,e as Dt,i as At}from"./chartjs-CRgZvhTJ.js";import{_ as Pt,a as Tt}from"./pdfjs-BDGsuRSB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();const ie="theme";function Lt(){const e=localStorage.getItem(ie)??"auto";ge(e)}function ge(e){e==="auto"?document.documentElement.removeAttribute("data-theme"):document.documentElement.setAttribute("data-theme",e),localStorage.setItem(ie,e),Wt(e)}function Et(){const e=localStorage.getItem(ie)??"auto",t=e==="auto"?"light":e==="light"?"dark":"auto";return ge(t),Ve(t),t}const oe=new Set;function Ft(e){return oe.add(e),()=>oe.delete(e)}function Ve(e){for(const t of oe)try{t(e)}catch(a){console.error(a)}}var Ie;if(typeof window<"u"&&window.matchMedia){const e=window.matchMedia("(prefers-color-scheme: dark)");(Ie=e.addEventListener)==null||Ie.call(e,"change",()=>{_e()==="auto"&&Ve("auto")})}function Wt(e){const t=document.getElementById("theme-toggle");if(!t)return;const a=t.querySelector(".theme-label"),n=t.querySelector(".theme-icon-dark"),s=t.querySelector(".theme-icon-light");a&&(e==="auto"?(a.textContent="Auto",n&&(n.style.display="inline"),s&&(s.style.display="inline")):e==="light"?(a.textContent="Hell",n&&(n.style.display="none"),s&&(s.style.display="inline")):(a.textContent="Dunkel",n&&(n.style.display="inline"),s&&(s.style.display="none")))}function _e(){return localStorage.getItem(ie)??"auto"}const je=[];let Ze=null;function D(e,t){const a=e.split("/").filter(Boolean),n=[],s=new RegExp("^/?"+a.map(i=>i.startsWith(":")?(n.push(i.slice(1)),"([^/]+)"):Bt(i)).join("/")+"/?$");je.push({pattern:e,regex:s,paramNames:n,render:t})}function Kt(e){e.startsWith("#")||(e="#"+e),window.location.hash===e?E():window.location.hash=e}function Ct(e,{onNavigate:t}={}){window.addEventListener("hashchange",E),E.rootEl=e,E.onNavigate=t,E()}async function E(){var n;const e=E.rootEl,t=window.location.hash.slice(1)||"/",a=t.startsWith("/")?t:`/${t}`;for(const s of je){const i=s.regex.exec(a);if(i){const r={};s.paramNames.forEach((l,o)=>r[l]=decodeURIComponent(i[o+1])),Ze=a,(n=E.onNavigate)==null||n.call(E,a),Ot(a);try{e.classList.remove("view-enter"),await s.render({params:r,path:a,root:e}),e.classList.add("view-enter")}catch(l){console.error("Route render error:",l),e.innerHTML=`<div class="empty-state">
          <div class="empty-state-icon">⚠</div>
          <h2>Fehler beim Anzeigen</h2>
          <p>${xe(l.message||String(l))}</p>
        </div>`}return}}e.innerHTML=`<div class="empty-state">
    <div class="empty-state-icon">?</div>
    <h2>Seite nicht gefunden</h2>
    <p>Die Route <code>${xe(a)}</code> existiert nicht.</p>
    <a href="#/" class="btn primary">Zum Dashboard</a>
  </div>`}function Ot(e){document.querySelectorAll("[data-route]").forEach(t=>{const a=t.getAttribute("data-route"),n=a==="/"?e==="/":e===a||e.startsWith(a+"/");t.classList.toggle("active",n)})}function It(){Ze!=null&&E()}function Bt(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function xe(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const p=new lt("zeitnachweis");p.version(1).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"});p.version(2).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});p.version(3).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});async function Rt(){const e=await p.einstellungen.get("__migration_reset");return(e==null?void 0:e.value)===!0?(await p.einstellungen.delete("__migration_reset"),!0):!1}async function _(){return await p.profil.get("self")??He()}async function he(e){const t={...e,id:"self",updatedAt:new Date().toISOString()};return await p.profil.put(t),t}function He(){return{id:"self",name:"",personalnummer:"",kostenstelle:"",einstellungsdatum:null,arbeitszeitplanregel:"",geburtsdatum:null,sollStundenProWoche:35,sollStundenProTag:7,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null},zeitwirtschaftEmail:"zeitwirtschaft@putzmeister.com",zeitwirtschaftAnrede:"Frau Kanarya",pausenRegel:"auto",erstelltAm:new Date().toISOString()}}async function Vt(e,t=null){const a=await p.einstellungen.get(e);return a?a.value:t}async function _t(e,t){await p.einstellungen.put({key:e,value:t})}async function W(){return await p.tage.orderBy("datum").toArray()}async function jt(e){return e.length?(await p.tage.bulkPut(e),e.length):0}async function Zt(e){return e.length?(await p.monate.bulkPut(e),e.length):0}async function ee(){return await p.monate.orderBy("monatKey").toArray()}async function Ht(e){return await p.uploads.add({...e,hochladeDatum:new Date().toISOString()})}async function Ge(){return await p.uploads.orderBy("hochladeDatum").reverse().toArray()}async function Gt(){await Promise.all([p.profil.clear(),p.tage.clear(),p.monate.clear(),p.uploads.clear(),p.einstellungen.clear(),p.mailVorlagen.clear(),p.warnungDismissals.clear()])}async function Nt(){await Promise.all([p.tage.clear(),p.monate.clear(),p.uploads.clear(),p.warnungDismissals.clear()])}async function qt(){const[e,t,a,n,s,i,r]=await Promise.all([p.profil.toArray(),p.tage.toArray(),p.monate.toArray(),p.uploads.toArray(),p.einstellungen.toArray(),p.mailVorlagen.toArray(),p.warnungDismissals.toArray()]);return{version:1,exportedAt:new Date().toISOString(),data:{profil:e,tage:t,monate:a,uploads:n,einstellungen:s,mailVorlagen:i,warnungDismissals:r}}}async function Jt(e){if(!e||e.version!==1||!e.data)throw new Error("Ungültiges oder inkompatibles Backup-Format.");const t=e.data;await p.transaction("rw",p.profil,p.tage,p.monate,p.uploads,p.einstellungen,p.mailVorlagen,p.warnungDismissals,async()=>{var a,n,s,i,r,l,o;(a=t.profil)!=null&&a.length&&await p.profil.bulkPut(t.profil),(n=t.tage)!=null&&n.length&&await p.tage.bulkPut(t.tage),(s=t.monate)!=null&&s.length&&await p.monate.bulkPut(t.monate),(i=t.uploads)!=null&&i.length&&await p.uploads.bulkPut(t.uploads),(r=t.einstellungen)!=null&&r.length&&await p.einstellungen.bulkPut(t.einstellungen),(l=t.mailVorlagen)!=null&&l.length&&await p.mailVorlagen.bulkPut(t.mailVorlagen),(o=t.warnungDismissals)!=null&&o.length&&await p.warnungDismissals.bulkPut(t.warnungDismissals)})}async function Se(e,t){await p.mailVorlagen.put({key:e,...t})}async function Ut(){return await p.mailVorlagen.toArray()}async function Qt(e,t){await p.warnungDismissals.put({key:`${e}-${t}`,datum:e,typ:t,dismissedAt:new Date().toISOString()})}async function Yt(){return await p.warnungDismissals.toArray()}function Ne(e){if(e==null)return null;if(typeof e=="number")return e;let t=String(e).trim();if(!t)return null;let a=!1;t.endsWith("-")&&(a=!0,t=t.slice(0,-1).trim()),t=t.replace(",",".");const n=parseFloat(t);return isNaN(n)?null:a?-n:n}function I(e){if(e==null||isNaN(e))return"—";const t=e<0,a=Math.abs(e),n=Math.floor(a),s=Math.round((a-n)*60);let i=n,r=s;return r===60&&(i+=1,r=0),`${t?"-":""}${i}:${String(r).padStart(2,"0")}`}function A(e,t={}){if(e==null||isNaN(e))return"—";const{signed:a=!1,suffix:n="h"}=t,s=a&&e>0?"+":"",i=e.toFixed(2).replace(".",",");return`${s}${i}${n}`}function Z(e){if(!e)return null;const t=/^(\d{1,2}):(\d{2})$/.exec(String(e).trim());return t?parseInt(t[1],10)*60+parseInt(t[2],10):null}const ke={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},Xt=(e,t,a)=>{let n;const s=a!=null&&a.addSuffix?ke[e].withPreposition:ke[e].standalone;return typeof s=="string"?n=s:t===1?n=s.one:n=s.other.replace("{{count}}",String(t)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:"vor "+n:n},ea={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},ta={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},aa={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},na={date:le({formats:ea,defaultWidth:"full"}),time:le({formats:ta,defaultWidth:"full"}),dateTime:le({formats:aa,defaultWidth:"full"})},sa={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},ia=(e,t,a,n)=>sa[e],ra={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},la={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},ce={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},oa={narrow:ce.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:ce.wide},ca={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},da={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},ua={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},ga=e=>Number(e)+".",ha={ordinalNumber:ga,era:N({values:ra,defaultWidth:"wide"}),quarter:N({values:la,defaultWidth:"wide",argumentCallback:e=>e-1}),month:N({values:ce,formattingValues:oa,defaultWidth:"wide"}),day:N({values:ca,defaultWidth:"wide"}),dayPeriod:N({values:da,defaultWidth:"wide",formattingValues:ua,defaultFormattingWidth:"wide"})},ma=/^(\d+)(\.)?/i,fa=/\d+/i,pa={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},va={any:[/^v/i,/^n/i]},ba={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},ya={any:[/1/i,/2/i,/3/i,/4/i]},wa={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},Ma={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},$a={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},za={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},xa={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},Sa={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},ka={ordinalNumber:ot({matchPattern:ma,parsePattern:fa,valueCallback:e=>parseInt(e)}),era:q({matchPatterns:pa,defaultMatchWidth:"wide",parsePatterns:va,defaultParseWidth:"any"}),quarter:q({matchPatterns:ba,defaultMatchWidth:"wide",parsePatterns:ya,defaultParseWidth:"any",valueCallback:e=>e+1}),month:q({matchPatterns:wa,defaultMatchWidth:"wide",parsePatterns:Ma,defaultParseWidth:"any"}),day:q({matchPatterns:$a,defaultMatchWidth:"wide",parsePatterns:za,defaultParseWidth:"any"}),dayPeriod:q({matchPatterns:xa,defaultMatchWidth:"wide",parsePatterns:Sa,defaultParseWidth:"any"})},V={code:"de",formatDistance:Xt,formatLong:na,formatRelative:ia,localize:ha,match:ka,options:{weekStartsOn:1,firstWeekContainsDate:4}};function Y(e){if(!e)return null;const t=e.trim();return ct(t,"dd.MM.yyyy",new Date)}function w(e){return x(e,"dd.MM.yyyy")}function qe(e){return x(e,"EE, dd.MM.yyyy",{locale:V})}function Da(e){return`${dt(e)}-${String(ut(e)).padStart(2,"0")}`}function Je(e){return x(e,"yyyy-MM")}function Aa(e){return x(e,"yyyy-MM-dd")}function Pa(e,t){if(!e||!t)return 0;e>t&&([e,t]=[t,e]);let a=0,n=new Date(e);for(;n<t;)n=X(n,1),Be(n)||a++;return a}function R(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ta(e){var r;const t=e.filter(l=>l.tagestyp==="Berufsschule");if(t.length<2)return{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null};const a={};for(const l of t)a[r=l.wochentag]??(a[r]=[]),a[l.wochentag].push(l);const n=[],s=[];let i=null;for(const[l,o]of Object.entries(a)){o.sort((u,g)=>u.datum.localeCompare(g.datum));const c=$(o[0].datum),d=$(o[o.length-1].datum),f=Re(d,c,{weekStartsOn:1})+1,h=o.length/Math.max(1,f);h>=.75?n.push(l):h>=.35&&h<=.65&&(s.push(l),(!i||$(o[0].datum)<$(i))&&(i=o[0].datum))}return{wochentageWoechentlich:n,wochentage14Taegig:s,referenzDatum14Taegig:i}}function Ue(e,t){var s,i;if(!t)return!1;const n=["SO","MO","DI","MI","DO","FR","SA"][e.getDay()];if((s=t.wochentageWoechentlich)!=null&&s.includes(n))return!0;if((i=t.wochentage14Taegig)!=null&&i.includes(n)&&t.referenzDatum14Taegig){const r=$(t.referenzDatum14Taegig),l=Re(e,r,{weekStartsOn:1});if(l>=0&&l%2===0)return!0}return!1}function La(e,t){if(!e)return"arbzg";const a=$(e);return gt(t,a)<18?"jarbschg":"arbzg"}function Ea(e,t){return e==null?0:t==="jarbschg"?e>6?1:e>4.5?.5:0:e>9?.75:e>6?.5:0}function Qe(e){if(!e||e.length<2)return 0;const t=e.filter(n=>n.von&&n.bis).map(n=>({von:Z(n.von),bis:Z(n.bis)})).filter(n=>n.von!=null&&n.bis!=null).sort((n,s)=>n.von-s.von);let a=0;for(let n=1;n<t.length;n++){const s=t[n].von-t[n-1].bis;(s>0&&s>=15||s>0)&&(a+=s)}return a/60}function Ye(e,t){const a=e.zeitSpannen??[];if(!a.length||a.every(g=>!g.von))return{keinAnspruch:!0};const n=Qe(a),s=e.pause??0,i=Fa(a),r=i-s,l=t.pausenRegel&&t.pausenRegel!=="auto"?t.pausenRegel==="jarbschg"?"jarbschg":"arbzg":La(t.geburtsdatum,$(e.datum)),o=Ea(r,l),c=Math.max(n,o),d=s-c,f=Math.max(0,o-n);let h="ok",u=null;if(d>.05)h="fehler_zeitwirtschaft",u=`${Math.round(d*60)} min Pause wurden zusätzlich zur gesetzlichen Pflicht und zur gestempelten Pause abgezogen. Das sieht nach einem Zeitwirtschafts-Fehler aus.`;else if(f>.05&&s>n+.02){h="aufstockung_legal";const g=Math.round(f*60);u=`Du hast ${Math.round(n*60)} min Pause gestempelt, aber bei ${r.toFixed(2).replace(".",",")}h Arbeitszeit schreibt das Gesetz (${l.toUpperCase()}) ${Math.round(o*60)} min vor. Die fehlenden ${g} min wurden automatisch als Pause gewertet. Das ist gesetzeskonform — nächstes Mal einfach länger Pause machen.`}return{arbeitszeitMitPause:i,arbeitszeitOhnePause:r,gestempeltePause:n,abgezogenePause:s,gesetzlichePflicht:o,gesetz:l,legalerAbzug:c,unrechtmaessigerVerlustMin:Math.round(Math.max(0,d)*60),aufstockungMin:Math.round(Math.max(0,f)*60),typ:h,warnung:u}}function Fa(e){let t=0;for(const a of e){if(!a.von||!a.bis)continue;const n=Z(a.von),s=Z(a.bis);n!=null&&s!=null&&s>n&&(t+=s-n)}return t/60}const J={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function me(e,t,a,n=new Set){var d,f;const s=[],i=a??new Date,r=new Map(e.map(h=>[h.datum,h]));if(!e.length)return s;const l=$(e[0].datum),o=i;for(let h=new Date(l);h<=o;h=X(h,1)){if(Be(h))continue;const u=x(h,"yyyy-MM-dd"),g=r.get(u),v=Pa(h,o);if(!g||!g.tagestyp&&!g.ist&&(((d=g.zeitSpannen)==null?void 0:d.length)??0)===0){if(Ue(h,t.berufsschulMuster)){const m=v>=4?"error":v>=2?"warn":"info";U(s,n,{datum:u,wochentag:(g==null?void 0:g.wochentag)??te(h),typ:"bs_tag_fehlt",schweregrad:m,titel:`Berufsschultag nicht eingetragen: ${w(h)}`,beschreibung:`Laut deinem Profil hast du am ${J[te(h)]}, ${w(h)} Berufsschule. Im Zeitnachweis fehlt der Tag bisher${v>=4?" — bitte bei der Zeitwirtschaft nachhaken":""}.`,alter:v,mailVorlageKey:m==="error"?"bs_tag_fehlt":null})}else{const m=v>=4?"error":v>=2?"warn":"info";U(s,n,{datum:u,wochentag:te(h),typ:"stempelzeit_fehlt",schweregrad:m,titel:`Keine Stempelzeit am ${w(h)}`,beschreibung:`Am ${J[te(h)]}, ${w(h)} wurde keine Stempelzeit erfasst. Falls du an diesem Tag im Haus warst, sollte die Zeitwirtschaft das nachtragen${v>=4?" — es ist inzwischen ≥4 Werktage her":""}.`,alter:v,mailVorlageKey:m==="error"?"stempelzeit_fehlt":null})}continue}if(g.tagestyp==="Berufsschule"&&g.ist!=null&&g.soll!=null&&g.ist<g.soll-.01&&U(s,n,{datum:u,wochentag:g.wochentag,typ:"bs_stunden_falsch",schweregrad:"error",titel:`Berufsschultag mit zu wenig Stunden: ${w(h)}`,beschreibung:`Am ${J[g.wochentag]}, ${w(h)} sind nur ${g.ist.toFixed(2).replace(".",",")}h gebucht statt regulär ${g.soll.toFixed(2).replace(".",",")}h. Die Zeitwirtschaft hat den Berufsschultag möglicherweise nur halb erfasst.`,ist:g.ist,soll:g.soll,mailVorlageKey:"bs_stunden_falsch"}),g.tagestyp==="Stempelzeit"&&((f=g.zeitSpannen)==null?void 0:f.length)>1&&u>="2026-04-01"){const m=Ye(g,t);(m==null?void 0:m.typ)==="fehler_zeitwirtschaft"&&m.unrechtmaessigerVerlustMin>=5?U(s,n,{datum:u,wochentag:g.wochentag,typ:"pausen_abzug",schweregrad:m.unrechtmaessigerVerlustMin>=15?"error":"warn",titel:`Pausen-Abzug fehlerhaft (${w(h)})`,beschreibung:`Am ${J[g.wochentag]}, ${w(h)} wurden ${Math.round(m.abgezogenePause*60)} min Pause abgezogen. Gestempelt: ${Math.round(m.gestempeltePause*60)} min, gesetzlich nötig (${m.gesetz.toUpperCase()}): ${Math.round(m.gesetzlichePflicht*60)} min. Differenz von ${m.unrechtmaessigerVerlustMin} min ist unerklärlich.`,verlustMinuten:m.unrechtmaessigerVerlustMin,abgezogen:m.abgezogenePause,gestempelt:m.gestempeltePause,mailVorlageKey:"pausen_abzug"}):(m==null?void 0:m.typ)==="aufstockung_legal"&&m.aufstockungMin>=10&&U(s,n,{datum:u,wochentag:g.wochentag,typ:"pausen_aufstockung",schweregrad:"info",titel:`Zu wenig Pause gestempelt (${w(h)}) — ${m.aufstockungMin} min automatisch aufgestockt`,beschreibung:`Am ${J[g.wochentag]}, ${w(h)} hast du nur ${Math.round(m.gestempeltePause*60)} min Pause gemacht. Gesetz (${m.gesetz.toUpperCase()}) schreibt ${Math.round(m.gesetzlichePflicht*60)} min vor. Fehlende ${m.aufstockungMin} min wurden als Pause gewertet — das ist legal, aber du verlierst dadurch Arbeitszeit. Tipp: mach beim nächsten Mal etwas länger Mittag.`})}}const c={error:0,warn:1,info:2};return s.sort((h,u)=>{const g=c[h.schweregrad]-c[u.schweregrad];return g!==0?g:u.datum.localeCompare(h.datum)}),s}function Xe(e,t=new Set){var n,s,i,r;const a=[];for(const l of e){const o=((n=l.glz)==null?void 0:n.saldoVorperiode)??0,c=((s=l.glz)==null?void 0:s.saldoAktuellePeriode)??0,d=((i=l.glz)==null?void 0:i.umgebuchteStunden)??0,f=(r=l.glz)==null?void 0:r.saldoGesamt;if(f==null)continue;const h=o+c+d,u=Math.abs(f-h);if(u>.03){const g=`${l.monatKey}-saldo_plausi`;t.has(g)||a.push({datum:`${l.monatKey}-01`,wochentag:"",typ:"saldo_plausi",schweregrad:"warn",titel:`Saldo-Differenz im Monat ${l.monatKey}`,beschreibung:`Rechnung: Vorperiode ${o.toFixed(2)} + aktuelle Periode ${c.toFixed(2)} + umgebucht ${d.toFixed(2)} = ${h.toFixed(2)}, aber dein Saldo wird mit ${f.toFixed(2)} angezeigt. Abweichung: ${u.toFixed(2)}h.`,soll:h,ist:f})}}return a}function U(e,t,a){const n=`${a.datum}-${a.typ}`;t.has(n)||(a.id=n,e.push(a))}function te(e){return["SO","MO","DI","MI","DO","FR","SA"][e.getDay()]}function Wa(e,t){var o,c,d;const a=[...e].sort((f,h)=>f.datum.localeCompare(h.datum));if(!a.length)return[];const n=new Map(t.map(f=>[f.monatKey,f])),s={};for(const f of a)s[o=f.monatKey]??(s[o]=[]),s[f.monatKey].push(f);const i=Object.keys(s).sort(),r=[];let l=null;for(const f of i){const h=n.get(f);let u;((c=h==null?void 0:h.glz)==null?void 0:c.saldoVorperiode)!=null?u=h.glz.saldoVorperiode:l!=null?u=l:u=0;const g=s[f];for(const v of g)v.diff!=null&&(u+=v.diff),r.push({datum:v.datum,wochentag:v.wochentag,saldo:Math.round(u*100)/100,diff:v.diff,ist:v.ist,soll:v.soll,tagestyp:v.tagestyp,monatKey:v.monatKey,zeitSpannen:v.zeitSpannen});if(((d=h==null?void 0:h.glz)==null?void 0:d.saldoGesamt)!=null){const v=h.glz.saldoGesamt-u;if(Math.abs(v)>.02&&r.length>0){const y=r.length-1;r[y].umbuchung=v,r[y].saldo=Math.round((r[y].saldo+v)*100)/100,u=r[y].saldo}l=h.glz.saldoGesamt}else l=u}return r}function Ka(e,t){if(!e.length)return[];if(t==="alles")return e;const a=Math.min(t,e.length);return e.slice(-a)}function Ca(e){return e.length?e[e.length-1].saldo:0}function Oa(e){if(!e.length)return 0;const t=e[0].saldo-(e[0].diff??0),a=e[e.length-1].saldo;return Math.round((a-t)*100)/100}L.register(ft,pt,vt,bt,yt,wt,Mt,$t,zt,xt,St,kt,Dt,At);function z(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function K(){return{fg:z("--fg"),fgMuted:z("--fg-muted"),fgSubtle:z("--fg-subtle"),border:z("--border"),surface:z("--surface"),accent:z("--accent"),success:z("--success"),warn:z("--warn"),danger:z("--danger"),info:z("--info"),palette:[z("--chart-1"),z("--chart-2"),z("--chart-3"),z("--chart-4"),z("--chart-5"),z("--chart-6"),z("--chart-7")]}}function M(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.fgMuted,font:{size:12}}},tooltip:{backgroundColor:e.surface,titleColor:e.fg,bodyColor:e.fg,borderColor:e.border,borderWidth:1,padding:10,displayColors:!0}},scales:{x:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}},y:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}}}}}function Ia(e,t){const a=K();if(C(e),!(t!=null&&t.length))return;const n=t.map(i=>x($(i.datum),"dd.MM.")),s=t.map(i=>i.saldo);return s.map(i=>i>=0?a.success:a.danger),new L(e,{type:"line",data:{labels:n,datasets:[{label:"Tages-Saldo",data:s,borderColor:a.accent,backgroundColor:i=>{const r=i.chart,{ctx:l,chartArea:o,scales:c}=r;return o?Ga(l,o,c.y,a):O(a.accent,.14)},segment:{borderColor:i=>{const r=i.p0.parsed.y,l=i.p1.parsed.y,o=(r+l)/2;return o>=.02?a.success:o<=-.02?a.danger:a.fgMuted}},tension:.25,pointRadius:2,pointHoverRadius:5,pointBackgroundColor:s.map(i=>i>=.02?a.success:i<=-.02?a.danger:a.fgMuted),pointBorderColor:a.surface,pointBorderWidth:1,fill:!0,borderWidth:2}]},options:{...M(a),plugins:{...M(a).plugins,legend:{display:!1},tooltip:{...M(a).plugins.tooltip,callbacks:{title:i=>{const r=t[i[0].dataIndex];return x($(r.datum),"EE, dd.MM.yyyy",{locale:V})},label:i=>{const r=t[i.dataIndex],l=[`Saldo: ${r.saldo.toFixed(2).replace(".",",")}h`];return r.diff!=null&&l.push(`Tages-Diff: ${r.diff>=0?"+":""}${r.diff.toFixed(2).replace(".",",")}h`),r.tagestyp&&l.push(`Typ: ${r.tagestyp}`),r.umbuchung&&l.push(`Umbuchung: ${r.umbuchung>=0?"+":""}${r.umbuchung.toFixed(2).replace(".",",")}h`),l}}}},scales:{...M(a).scales,y:{...M(a).scales.y,ticks:{...M(a).scales.y.ticks,callback:i=>`${i>=0?"+":""}${i.toFixed(1).replace(".",",")}h`}}}}})}function Ba(e,t){const a=K();if(C(e),!(t!=null&&t.length))return;const n=t.map(i=>i.monatKey),s=t.map(i=>{var r;return((r=i.glz)==null?void 0:r.saldoGesamt)??0});return new L(e,{type:"line",data:{labels:n,datasets:[{label:"GLZ-Saldo (Monatsende)",data:s,borderColor:a.accent,backgroundColor:O(a.accent,.18),tension:.35,fill:!0,pointRadius:4}]},options:M(a)})}function fe(e,t){const a=K();if(C(e),!(t!=null&&t.length))return;const n=t.map(r=>x($(r.datum),"dd.MM.")),s=t.map(r=>r.ist??0),i=t.map(r=>Na(r.tagestyp,a));return new L(e,{type:"bar",data:{labels:n,datasets:[{label:"Ist-Stunden",data:s,backgroundColor:i,borderRadius:4,borderSkipped:!1}]},options:{...M(a),plugins:{...M(a).plugins,legend:{display:!1},tooltip:{...M(a).plugins.tooltip,callbacks:{label:r=>{const l=t[r.dataIndex];return`${l.tagestyp??"—"}: ${(l.ist??0).toFixed(2).replace(".",",")}h`}}}},scales:{...M(a).scales,y:{...M(a).scales.y,suggestedMin:0,suggestedMax:10}}}})}function Ra(e,t){const a=K();if(C(e),!(t!=null&&t.length))return;const n=t.filter(c=>{var d;return((d=c.zeitSpannen)==null?void 0:d.length)&&c.zeitSpannen.some(f=>f.von&&f.bis)}).map(c=>{const d=c.zeitSpannen.filter(u=>u.von&&u.bis).map(u=>({von:Z(u.von),bis:Z(u.bis),vonStr:u.von,bisStr:u.bis})).filter(u=>u.von!=null&&u.bis!=null);if(d.length===0)return null;const f=Math.min(...d.map(u=>u.von)),h=Math.max(...d.map(u=>u.bis));return{...c,_spans:d,_minVon:f,_maxBis:h}}).filter(Boolean);if(!n.length)return;const s=c=>c.ist==null?a.fgMuted:c.ist>=7?a.success:a.danger,i={label:"Tages-Rahmen",data:n.map(c=>[c._minVon,c._maxBis]),backgroundColor:n.map(s),borderColor:n.map(s),borderWidth:0,borderRadius:4,borderSkipped:!1,barPercentage:.75,categoryPercentage:.95},r=Math.max(0,Math.floor(Math.min(...n.map(c=>c._minVon))/60)*60-60),l=Math.min(24*60,Math.ceil(Math.max(...n.map(c=>c._maxBis))/60)*60+60),o=c=>`${String(Math.floor(c/60)).padStart(2,"0")}:${String(c%60).padStart(2,"0")}`;return new L(e,{type:"bar",data:{labels:n.map(c=>x($(c.datum),"dd.MM.")),datasets:[i]},options:{...M(a),interaction:{mode:"index",intersect:!1,axis:"x"},plugins:{legend:{display:!1},tooltip:{enabled:!0,backgroundColor:a.surface,borderColor:a.accent,borderWidth:2,padding:14,titleColor:a.fg,titleFont:{size:14,weight:"600"},titleMarginBottom:8,bodyColor:a.fg,bodyFont:{size:13},bodySpacing:4,displayColors:!1,caretPadding:10,cornerRadius:8,callbacks:{title:c=>{const d=n[c[0].dataIndex];return x($(d.datum),"EE, dd.MM.yyyy",{locale:V})},label:()=>"",beforeBody:c=>{const d=n[c[0].dataIndex],f=d.ist!=null?I(d.ist):"—",h=d.soll!=null?I(d.soll):"—",u=d.pause!=null?Math.round(d.pause*60)+" min":"—",v=[`Tages-Rahmen: ${`${o(d._minVon)} – ${o(d._maxBis)}`}`];return d._spans.length>1&&(v.push(""),d._spans.forEach((y,m)=>{v.push(`  Block ${m+1}: ${y.vonStr} – ${y.bisStr}`)})),[...v,"",`Arbeitszeit (netto): ${f}`,`Soll: ${h}`,`Pause (abgezogen): ${u}`]}}}},scales:{x:{ticks:{color:a.fgMuted,font:{size:10},maxRotation:60,minRotation:60,autoSkip:!0,maxTicksLimit:40},grid:{display:!1}},y:{min:r,max:l,ticks:{color:a.fgMuted,stepSize:60,callback:c=>o(c)},grid:{color:a.border}}}}})}function Va(e,t){const a=K();C(e);const n={};for(const r of t){if(r.tagestyp!=="Stempelzeit"||!r.zeitSpannen||r.zeitSpannen.length<2)continue;const l=Qe(r.zeitSpannen);if(l<=0)continue;const o=Math.round(l*60),c=Math.floor(o/15)*15;n[c]=(n[c]??0)+1}const s=Object.keys(n).map(Number).sort((r,l)=>r-l),i=s.map(r=>n[r]);return new L(e,{type:"bar",data:{labels:s.map(r=>`${r}–${r+14} min`),datasets:[{label:"Häufigkeit",data:i,backgroundColor:a.palette[1],borderRadius:4}]},options:{...M(a),plugins:{...M(a).plugins,legend:{display:!1},tooltip:{...M(a).plugins.tooltip,callbacks:{title:r=>`Pause-Länge (gestempelt): ${r[0].label}`,label:r=>`${r.parsed.y} Tag(e)`}}}}})}function _a(e,t){const a=K();C(e);const n=["MO","DI","MI","DO","FR"],s={},i={};for(const l of n)s[l]=0,i[l]=0;for(const l of t)n.includes(l.wochentag)&&(l.ist==null||l.ist===0||(s[l.wochentag]+=l.ist,i[l.wochentag]+=1));const r=n.map(l=>i[l]>0?s[l]/i[l]:0);return new L(e,{type:"bar",data:{labels:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"],datasets:[{label:"Ø Ist-Stunden",data:r,backgroundColor:a.palette[2],borderRadius:4}]},options:{...M(a),plugins:{...M(a).plugins,legend:{display:!1}}}})}function ja(e,t){const a=K();C(e);const n={};for(const r of t)!r.tagestyp||r.tagestyp==="Wochenende"||(n[r.tagestyp]=(n[r.tagestyp]??0)+1);const s=Object.keys(n),i=Object.values(n);return new L(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:s.map((r,l)=>a.palette[l%a.palette.length]),borderColor:a.surface,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:a.fgMuted,font:{size:12}}},tooltip:M(a).plugins.tooltip}}})}function Za(e,t){const a=K();C(e);const n={};for(const l of t){const o=l.wocheKey;n[o]??(n[o]={ist:0,soll:0}),n[o].ist+=l.ist??0,n[o].soll+=l.soll??0}const s=Object.keys(n).sort(),i=s.map(l=>n[l].ist),r=s.map(l=>n[l].soll);return new L(e,{type:"bar",data:{labels:s.map(l=>"KW "+l.split("-")[1]),datasets:[{label:"Ist",data:i,backgroundColor:a.palette[0],borderRadius:4},{label:"Soll",data:r,backgroundColor:a.palette[3],borderRadius:4}]},options:M(a)})}function Ha(e,t){const a=K();C(e);const n=t.slice().sort((r,l)=>r.datum.localeCompare(l.datum));let s=0;const i=n.map(r=>(s+=r.diff??0,{x:r.datum,y:s}));return new L(e,{type:"line",data:{labels:i.map(r=>r.x),datasets:[{label:"Kumulative Differenz (+/- Soll)",data:i.map(r=>r.y),borderColor:a.palette[5],backgroundColor:O(a.palette[5],.15),fill:!0,tension:.2,pointRadius:0}]},options:{...M(a),scales:{x:{display:!1,grid:{display:!1}},y:{...M(a).scales.y}}}})}function et(e,t,{monate:a=8}={}){if(!e)return;if(e.innerHTML="",!t.length){e.innerHTML='<p style="color: var(--fg-muted); font-size: 13px;">Keine Daten.</p>';return}const n=new Map(t.map(g=>[g.datum,g])),i=$(t[t.length-1].datum),r=a*30,l=X(i,-r),o=ht(l,{weekStartsOn:1}),c=mt(i,o)+1,d=Math.ceil(c/7),f=document.createElement("div");f.className="heatmap-month-labels",f.style.gridTemplateColumns=`repeat(${d}, 14px)`,e.appendChild(f);let h=-1;for(let g=0;g<d;g++){const v=X(o,g*7),y=v.getMonth(),m=document.createElement("span");m.textContent=y!==h?x(v,"MMM",{locale:V}):"",f.appendChild(m),h=y}const u=document.createElement("div");u.className="heatmap",u.style.gridAutoFlow="column",u.style.gridTemplateRows="repeat(7, 14px)",u.style.gridTemplateColumns=`repeat(${d}, 14px)`;for(let g=0;g<d*7;g++){const v=X(o,g);if(v>i||v<l){const j=document.createElement("div");j.className="heatmap-cell",j.style.background="transparent",u.appendChild(j);continue}const y=x(v,"yyyy-MM-dd"),m=n.get(y),k=document.createElement("div");k.className="heatmap-cell",k.title=`${x(v,"EE, dd.MM.yyyy",{locale:V})}${(m==null?void 0:m.ist)!=null?" · Ist "+m.ist.toFixed(2)+"h":""}${(m==null?void 0:m.diff)!=null?" · "+(m.diff>=0?"+":"")+m.diff.toFixed(2):""}`,(m==null?void 0:m.diff)!=null&&(m.diff<=-1?k.classList.add("neg-2"):m.diff<-.05?k.classList.add("neg-1"):m.diff>=1?k.classList.add("pos-2"):m.diff>.05&&k.classList.add("pos-1")),u.appendChild(k)}e.appendChild(u)}function C(e){const t=L.getChart(e);t&&t.destroy()}function O(e,t){const a=e.replace("#","").trim();if(a.length!==6&&a.length!==3)return e;const n=a.length===3?a.split("").map(l=>l+l).join(""):a,s=parseInt(n.slice(0,2),16),i=parseInt(n.slice(2,4),16),r=parseInt(n.slice(4,6),16);return`rgba(${s}, ${i}, ${r}, ${t})`}function Ga(e,t,a,n){const{top:s,bottom:i}=t,r=e.createLinearGradient(0,s,0,i),l=a.min,o=a.max,c=o-l;if(c<=0)return O(n.success,.14);let d=(o-0)/c;return d=Math.max(0,Math.min(1,d)),r.addColorStop(0,O(n.success,.28)),r.addColorStop(Math.max(0,d-.001),O(n.success,.06)),r.addColorStop(Math.min(1,d+.001),O(n.danger,.06)),r.addColorStop(1,O(n.danger,.28)),r}function Na(e,t){const a=String(e??"").toLowerCase();return a.includes("stempel")?t.palette[0]:a.includes("berufs")?t.palette[1]:a.includes("urlaub")?t.palette[2]:a.includes("feiertag")?t.fgSubtle:a.includes("dienst")?t.palette[3]:a.includes("krank")?t.palette[4]:t.palette[5]}let qa=0;function pe(e,{type:t="info",duration:a=3500}={}){const n=document.getElementById("toast-root");if(!n)return;const s=document.createElement("div");s.className=`toast ${t}`,s.textContent=e,s.dataset.id=++qa,n.appendChild(s),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateY(-8px)",s.style.transition="opacity 220ms, transform 220ms",setTimeout(()=>s.remove(),250)},a)}function ve(e){return pe(e,{type:"error",duration:6e3})}function S(e){return pe(e,{type:"success"})}const Ja=[{key:7,label:"1 Woche"},{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:"alles",label:"Alles"}];async function De({root:e}){var k,j,ye,we;const[t,a,n,s,i]=await Promise.all([_(),ee(),W(),Yt(),Vt("dashboardZeitraum",14)]);if(n.length===0){e.innerHTML=Xa();return}const r=!t.geburtsdatum||!((j=(k=t.berufsschulMuster)==null?void 0:k.wochentageWoechentlich)!=null&&j.length||(we=(ye=t.berufsschulMuster)==null?void 0:ye.wochentage14Taegig)!=null&&we.length),l=Wa(n,a),o=l.length;let c=i;typeof c=="number"&&c>o&&(c="alles");const d=new Set(s.map(b=>b.key)),f=me(n,t,new Date,d),h=Xe(a,d),u=[...f,...h],g=Ca(l),v=g>.05?"positive":g<-.05?"negative":"",y=u.filter(b=>b.schweregrad==="error"),m=u.filter(b=>b.schweregrad==="warn");e.innerHTML=`
    <h1 class="view-title">Dashboard</h1>
    <p class="view-subtitle">
      ${t.name?F(t.name):"Willkommen"}${t.personalnummer?` · Personalnr. ${F(t.personalnummer)}`:""}
      · Stand: ${F(w(new Date(n[n.length-1].datum)))}
    </p>

    <div class="saldo-hero" style="margin-bottom: 32px; align-items: stretch;">
      <div class="saldo-hero-text" style="min-width: 260px;">
        <h3>Aktueller Gleitzeit-Saldo</h3>
        <div class="saldo-value ${v}">${A(g,{signed:!0,suffix:""})}</div>
        <div class="saldo-unit">Stunden · tagesaktuell</div>
        <div id="hero-bewegung" class="saldo-trend flat" style="margin-top: 12px;"></div>
      </div>
      <div style="flex: 1; min-width: 400px; display: flex; flex-direction: column;">
        <div class="card-split" style="margin-bottom: 12px; align-items: center;">
          <h3 style="margin: 0;">Verlauf</h3>
          <div class="segmented" id="zeitraum-picker">
            ${Ja.map(b=>{const P=typeof b.key=="number"&&b.key>o;return`<button type="button" data-key="${b.key}" class="${c===b.key?"active":""}" ${P?'disabled style="opacity:0.4"':""}>${b.label}</button>`}).join("")}
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
        ${u.slice(0,5).map(b=>Ya(b)).join("")}
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
  `,Ae(c,e,l),e.querySelectorAll("#zeitraum-picker button").forEach(b=>{b.addEventListener("click",async()=>{if(b.disabled)return;const P=b.getAttribute("data-key"),B=P==="alles"?"alles":parseInt(P,10);e.querySelectorAll("#zeitraum-picker button").forEach(H=>H.classList.toggle("active",H===b)),await _t("dashboardZeitraum",B),Ae(B,e,l)})}),requestAnimationFrame(()=>{et(e.querySelector("#mini-heatmap"),n,{monate:4})}),e.addEventListener("click",async b=>{const P=b.target.closest(".ist-copy");if(P){b.preventDefault(),b.stopPropagation();const ze=P.getAttribute("data-val");try{await navigator.clipboard.writeText(ze),P.classList.add("ok");const G=P.querySelector(".ist-wert"),re=P.querySelector(".copy-icon");if(G&&re){const rt=G.textContent;G.textContent="✓ kopiert",re.style.display="none",setTimeout(()=>{P.classList.remove("ok"),G.textContent=rt,re.style.display=""},1e3)}}catch{S(`Bitte kopieren: ${ze}`)}return}const B=b.target.closest(".btn-dismiss");if(!B)return;const H=B.getAttribute("data-datum"),Me=B.getAttribute("data-typ");if(!H||!Me)return;await Qt(H,Me),S("Warnung ausgeblendet.");const $e=B.closest(".alert");$e&&($e.style.display="none")})}function Ae(e,t,a){const n=Ka(a,e),s=Oa(n);requestAnimationFrame(()=>{const o=t.querySelector("#saldo-chart");Ia(o,n)});const i=t.querySelector("#hero-bewegung");if(i){const o=s>.05?"up":s<-.05?"down":"flat",c=s>.05?"↑":s<-.05?"↓":"→";i.className=`saldo-trend ${o}`,i.innerHTML=`${c} ${Math.abs(s)<.01?"Unverändert":A(s,{signed:!0})} im Zeitraum`}const r=t.querySelector("#tage-info");if(r){const o=n.length;r.textContent=`${o} ${o===1?"Tag":"Tage"}`}const l=t.querySelector("#tage-liste");l&&(l.innerHTML=Ua(n.slice().reverse()))}function Ua(e){if(!e.length)return'<p class="hint">Keine Tage im Zeitraum.</p>';const t=Math.max(1,...e.map(s=>Math.abs(s.diff??0))),a=[];let n=null;for(const s of e){if(s.wocheKey&&s.wocheKey!==n){if(n!==null){const i=s.wocheKey.split("-")[1];a.push(`<div class="woche-divider"><span>KW ${i}</span></div>`)}n=s.wocheKey}a.push(Qa(s,t))}return`<div class="tages-liste">${a.join("")}</div>`}function Qa(e,t){const a=e.diff??0,n=a>0,s=Math.min(100,Math.abs(a)/t*100),i=n?"var(--success)":a<0?"var(--danger)":"var(--fg-subtle)";return`
    <a href="#/tag/${e.datum}" class="tag-row">
      <div class="tag-row-datum">
        <div class="tabular">${F(w(new Date(e.datum)))}</div>
        <div class="tag-row-wd">${en(e.wochentag)}</div>
      </div>
      <div class="tag-row-typ">
        ${e.tagestyp?`<span class="pill ${tn(e.tagestyp)}">${F(e.tagestyp)}</span>`:'<span style="color: var(--fg-subtle); font-size: 12px;">—</span>'}
      </div>
      <div class="tag-row-ist tabular">
        ${e.ist!=null&&e.ist>0?`<button class="ist-copy" data-val="${I(e.ist)}" title="Kopieren für IHK-Berichtsheft"><span class="ist-wert">${I(e.ist)}</span><span class="copy-icon" aria-hidden="true">⧉</span></button>`:`<div class="ist-wert">${e.ist!=null?I(e.ist):"—"}</div>`}
        <div style="color: var(--fg-subtle); font-size: 11px;">Soll ${e.soll!=null?I(e.soll):"—"}</div>
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
  `}function Ya(e){const t=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${t}</div>
      <div class="alert-body">
        <div class="alert-title">${F(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${F(e.beschreibung)}</p>
        <div class="alert-actions">
          ${e.mailVorlageKey?'<a href="#/mails" class="btn primary sm">✉ Mail schreiben</a>':""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
          <button class="btn ghost sm btn-dismiss" data-datum="${Pe(e.datum)}" data-typ="${Pe(e.typ)}">Ausblenden</button>
        </div>
      </div>
    </div>
  `}function Xa(){return`
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
  `}function en(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function tn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function F(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Pe(e){return F(e)}const an=""+new URL("pdf.worker.min-yatZIOMy.mjs",import.meta.url).href;Pt.workerSrc=an;const Te={Januar:1,Februar:2,März:3,Maerz:3,April:4,Mai:5,Juni:6,Juli:7,August:8,September:9,Oktober:10,November:11,Dezember:12},nn=["Stempelzeit","Berufsschule Std. bez","Berufsschule","Dienstreise Arbeitszeit","Reise öff.VM/PKW Beifahr.","Reise öff.VM/PKW","Urlaub","Gleitzeit","Arbeitsunfähigkeit","TgDtEinh","Neujahr","Karfreitag","Ostermontg","Ostmontg","Osterso.","Hl.3 Kön.","Allerhlg","Pfingstmo","Fronleichn","TdDtEinh"];async function sn(e){const a=await Tt({data:e}).promise,n=[];for(let l=1;l<=a.numPages;l++){const c=await(await a.getPage(l)).getTextContent(),d=rn(c.items);for(const f of d)n.push({page:l,text:f})}const s=ln(n),{tage:i,monate:r}=on(n);return{meta:s,tage:i,monate:r}}function rn(e){if(!e.length)return[];const t=e.slice().sort((r,l)=>{const o=l.transform[5]-r.transform[5];return Math.abs(o)>2?o:r.transform[4]-l.transform[4]}),a=[];let n=null,s=[];const i=3;for(const r of t){const l=r.transform[5];n==null||Math.abs(l-n)<=i?(s.push(r),n==null&&(n=l)):(a.push(Le(s)),s=[r],n=l)}return s.length&&a.push(Le(s)),a.filter(r=>r.trim().length>0)}function Le(e){e.sort((n,s)=>n.transform[4]-s.transform[4]);let t="",a=-1;for(const n of e){const s=n.transform[4];a>=0&&s-a>4?t+="  ":a>=0&&s-a>.5&&(t+=" "),t+=n.str,a=s+n.width}return t}function ln(e){var a,n;const t={personalnummer:null,name:null,kostenstelle:null,personalbereich:null,einstellungsdatum:null,mitarbeiterkreis:null,arbeitszeitplanregel:null,zeitraumVon:null,zeitraumBis:null,stichtagAuswertung:null};for(let s=0;s<e.length;s++){const i=e[s].text,r=/vom\s+(\d{2}\.\d{2}\.\d{4})\s+bis\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);r&&(t.zeitraumVon=Y(r[1]),t.zeitraumBis=Y(r[2]));const l=/bis einschließlich dem\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);if(l&&(t.stichtagAuswertung=Y(l[1])),/Personalnummer/i.test(i)&&/Kostenstelle/i.test(i)){const c=(((a=e[s+1])==null?void 0:a.text)??"").trim().split(/\s{2,}/);c.length>=3&&(t.personalnummer=c[0],t.kostenstelle=c[1],t.personalbereich=c[2])}if(/Einstellungsdatum/i.test(i)&&/Mitarbeiterkreis/i.test(i)){const c=(((n=e[s+1])==null?void 0:n.text)??"").trim().split(/\s{2,}/);c.length>=3&&(t.einstellungsdatum=Y(c[0]),t.mitarbeiterkreis=c[1],t.arbeitszeitplanregel=c[2])}if(/Bei Rückfragen wenden Sie sich an/i.test(i))for(let o=s+1;o<Math.min(s+8,e.length);o++){const c=e[o].text.trim();if(/^[A-ZÄÖÜ][a-zäöüß]+(?:\s[A-ZÄÖÜ][a-zäöüß]+)+$/.test(c)&&!/kanarya/i.test(c)&&!/tel/i.test(c)){t.name=c;break}}}return t}function on(e,t){var o;const a=[],n=[];let s=null,i=null,r=!1,l=0;for(;l<e.length;){const c=e[l].text,d=/Monat:\s*([A-Za-zäöüÄÖÜß]+)\s*-\s*(\d{4})/.exec(c);if(d){const g=d[1].trim(),v=parseInt(d[2],10),y=Te[g]??Te[g.replace("ä","ae")]??null;y&&(s={jahr:v,monat:y,monatKey:`${v}-${String(y).padStart(2,"0")}`},r=!0,i=null),l++;continue}if(/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.test(c)){const g=/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.exec(c),v=Y(g[1]);i={monatKey:(s==null?void 0:s.monatKey)??Je(v),stichtag:v,glz:{},flexi:{},zeitkonten:{},raw:{}},l=cn(e,l+1,i),n.push(i);continue}let f=s;const h=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)\b/.exec(c.trim());if(h&&s){const g=parseInt(h[1],10);r&&g>=20?f=gn(s):g<=15&&(r=!1)}const u=Ee(c,f);if(u){const g=[];let v=l+1;for(;v<e.length;){const m=e[v].text;if(/^\s*\d{4}\s+Umbuchung/.test(m)||Ee(m,s)||/Wochensumme/i.test(m)||/Monats.bersicht/i.test(m)||/Monat:\s*[A-Za-z]/i.test(m))break;const k=dn(m);if(k){g.push(k),v++;continue}break}if(g.length&&u.zeitSpannen.push(...g),u.tagestyp==="Wochenende"||u.wochentag==="SA"||u.wochentag==="SO"){l=v;continue}(u.ist!=null||u.soll!=null||(((o=u.zeitSpannen)==null?void 0:o.length)??0)>0||u.tagestyp!=null)&&a.push(u),l=v;continue}l++}return{tage:a,monate:n}}function cn(e,t,a){let n=t;const s=/(\d{4,5}|KTAU|AZAU)\s*-\s*(.+?)\s+(-?[\d,.]+-?)(?=\s+(?:\d{4,5}|KTAU|AZAU)\s*-|\s*$)/g;for(;n<e.length;){const i=e[n].text.trim();if(/^Monat:\s/.test(i)||/^Einzelergebnisse\s/.test(i)||/^Tag\b/.test(i)||/^Wochensumme/.test(i)||/^\d{2}\s+(MO|DI|MI|DO|FR|SA|SO)\b/.test(i)||/^Übersicht für den Zeitraum/i.test(i)||/^Abwesenheitsansprüche/i.test(i))break;s.lastIndex=0;let r;for(;(r=s.exec(i))!=null;){const l=r[1],o=r[2].trim(),c=Ne(r[3]);a.raw[l]={beschreibung:o,wert:c},l==="0008"&&(a.glz.saldoVorperiode=c),l==="8016"&&(a.glz.saldoAktuellePeriode=c),l==="9802"&&(a.glz.umgebuchteStunden=c),l==="0005"&&(a.glz.saldoGesamt=c),l==="9803"&&(a.glz.ueberzaehligeStd=c),l==="0050"&&(a.zeitkonten.produktivstunden=c),l==="9011"&&(a.flexi.jahreskontoVorperiode=c),l==="9010"&&(a.flexi.jahreskontoSaldo=c),l==="9020"&&(a.flexi.langzeitkontoSaldo=c),l==="9203"&&(a.zeitkonten.azMonatsendeUeber216=c),l==="9207"&&(a.zeitkonten.auszahlungBav=c),l==="9205"&&(a.zeitkonten.summeAuszahlung=c)}if(n++,n-t>80)break}return n}function Ee(e,t){if(!t)return null;const a=e.trim(),n=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)(?:\s+(.+))?$/.exec(a);if(!n)return null;const s=parseInt(n[1],10),i=n[2],r=(n[3]??"").trim();let l=t.jahr,o=t.monat;const c=new Date(l,o-1,s),d={datum:Aa(c),datumDate:c.toISOString(),wochentag:i,tagNr:s,monatKey:Je(c),wocheKey:Da(c),zeitSpannen:[],aktivitaeten:[],ist:null,soll:null,diff:null,pause:null,tazp:null,tagestyp:null,raw:a};return r?(un(r,d),d):(d.tagestyp=["SA","SO"].includes(i)?"Wochenende":null,d)}function dn(e){const t=e.trim(),a=/^(Stempelzeit|Reise öff\.VM\/PKW Beifahr\.|Reise öff\.VM\/PKW|Dienstreise Arbeitszeit)\s+(\d{2}:\d{2})\s+(\d{2}:\d{2})\s*$/.exec(t);return a?{aktivitaet:a[1],von:a[2],bis:a[3]}:null}function un(e,t){let a=null,n=e;for(const d of nn)if(e.startsWith(d)){a=d,n=e.slice(d.length).trim();break}a||(a=e.split(/\s+/)[0],n=e.slice(a.length).trim()),t.tagestyp=hn(a),t.aktivitaeten.push(a);const s=n.split(/\s+/).filter(Boolean),i=/^\d{2}:\d{2}$/,r=/^-?[\d,.]+-?$/;let l=0;for(;s[l]&&i.test(s[l])&&s[l+1]&&i.test(s[l+1]);)t.zeitSpannen.push({aktivitaet:a,von:s[l],bis:s[l+1]}),l+=2;const o=[];for(;l<s.length&&r.test(s[l]);){const d=Ne(s[l]);d!=null&&o.push(d),l++}let c=s[l];o.length>=5?([t.ist,t.soll,t.diff,t.pause]=o,c||(c=String(o[4]))):o.length===4?[t.ist,t.soll,t.diff,t.pause]=o:o.length===3?[t.ist,t.soll,t.diff]=o:o.length===2?[t.ist,t.soll]=o:o.length===1&&(t.ist=o[0]),c&&(t.tazp=String(c))}function gn(e){if(!e)return null;let t=e.monat-1,a=e.jahr;return t<1&&(t=12,a-=1),{jahr:a,monat:t,monatKey:`${a}-${String(t).padStart(2,"0")}`}}function hn(e){return e?/^Stempelzeit$/i.test(e)?"Stempelzeit":/^Berufsschule Std\. bez$/i.test(e)||/^Berufsschule$/i.test(e)?"Berufsschule":/Dienstreise/i.test(e)||/Reise/i.test(e)?"Dienstreise":/^Urlaub$/i.test(e)?"Urlaub":/^Gleitzeit$/i.test(e)?"Gleitzeit":/Arbeitsunf.higkeit/i.test(e)?"Arbeitsunfähigkeit":/^(Neujahr|Karfreitag|Ostermontg|Ostmontg|Osterso\.|Hl\.3 Kön\.|Allerhlg|Pfingstmo|Fronleichn|TdDtEinh|TgDtEinh)$/i.test(e)?"Feiertag":e:null}async function mn({root:e}){const t=await Ge(),a=await _();e.innerHTML=`
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
        ${t.length===0?'<div class="empty-state"><div class="empty-state-icon">📭</div><p>Noch keine Uploads</p></div>':tt(t)}
      </div>
    </div>
  `;const n=e.querySelector("#upload-zone"),s=e.querySelector("#file-input");n.addEventListener("click",()=>s.click()),n.addEventListener("dragover",i=>{i.preventDefault(),n.classList.add("drag")}),n.addEventListener("dragleave",()=>n.classList.remove("drag")),n.addEventListener("drop",async i=>{var l;i.preventDefault(),n.classList.remove("drag");const r=(l=i.dataTransfer.files)==null?void 0:l[0];r&&await Fe(r,e,a)}),s.addEventListener("change",async i=>{var l;const r=(l=i.target.files)==null?void 0:l[0];r&&await Fe(r,e,a)}),e.querySelector("#btn-export").addEventListener("click",pn),e.querySelector("#btn-import").addEventListener("click",()=>e.querySelector("#import-input").click()),e.querySelector("#import-input").addEventListener("change",vn),e.querySelector("#btn-clear-parsed").addEventListener("click",fn),e.querySelector("#btn-reset").addEventListener("click",bn)}async function fn(){confirm("PDF-abgeleitete Daten (Tage, Monate, Uploads) werden gelöscht. Profil und Mail-Vorlagen bleiben erhalten. Fortfahren?")&&(await Nt(),S("Daten gelöscht. Profil bleibt."),setTimeout(()=>location.reload(),600))}function tt(e){return`
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
            <td>${R(yn(t.hochladeDatum))}</td>
            <td>${R(t.dateiname||"—")}</td>
            <td>${t.zeitraumVon?R(w(new Date(t.zeitraumVon))):"—"} – ${t.zeitraumBis?R(w(new Date(t.zeitraumBis))):"—"}</td>
            <td>${t.stichtagAuswertung?R(w(new Date(t.stichtagAuswertung))):"—"}</td>
            <td class="num">${t.tageCount??"—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}async function Fe(e,t,a){var i,r,l,o;const n=t.querySelector("#upload-status"),s=t.querySelector("#upload-zone");s.style.pointerEvents="none",s.style.opacity="0.6",n.innerHTML=`
    <div class="alert severity-info">
      <div class="loader-ring" style="width: 24px; height: 24px; border-width: 2px;"></div>
      <div class="alert-body">
        <div class="alert-title">PDF wird verarbeitet…</div>
        <p style="margin: 4px 0; font-size: 13px;"><strong>${R(e.name)}</strong> — das kann bei großen PDFs einige Sekunden dauern.</p>
      </div>
    </div>`;try{const c=await e.arrayBuffer(),d=await sn(c);await jt(d.tage),await Zt(d.monate),await Ht({dateiname:e.name,zeitraumVon:((i=d.meta.zeitraumVon)==null?void 0:i.toISOString())??null,zeitraumBis:((r=d.meta.zeitraumBis)==null?void 0:r.toISOString())??null,stichtagAuswertung:((l=d.meta.stichtagAuswertung)==null?void 0:l.toISOString())??null,tageCount:d.tage.length,monateCount:d.monate.length});const f=await W(),h=Ta(f),u={...He(),...a};d.meta.personalnummer&&!a.personalnummer&&(u.name=d.meta.name??a.name,u.personalnummer=d.meta.personalnummer,u.einstellungsdatum=((o=d.meta.einstellungsdatum)==null?void 0:o.toISOString())??a.einstellungsdatum,u.arbeitszeitplanregel=d.meta.arbeitszeitplanregel??a.arbeitszeitplanregel),(h.wochentageWoechentlich.length>0||h.wochentage14Taegig.length>0)&&(u.berufsschulMuster=h),await he(u),n.innerHTML=`
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
    `,S(`PDF verarbeitet: ${d.tage.length} Tage.`);const g=await Ge();t.querySelector("#uploads-list").innerHTML=tt(g)}catch(c){console.error(c),n.innerHTML=`
      <div class="alert severity-error">
        <div class="alert-icon">!</div>
        <div class="alert-body">
          <div class="alert-title">Fehler beim Parsen</div>
          <p style="margin: 4px 0; font-size: 13px;">${R(c.message||String(c))}</p>
          <p style="margin: 4px 0; font-size: 12px; color: var(--fg-muted);">Prüfe, ob es sich um einen Putzmeister-SAP-Zeitnachweis handelt. Bei einem anderen Layout kann der Parser fehlschlagen.</p>
        </div>
      </div>
    `,ve("PDF konnte nicht gelesen werden.")}finally{s.style.pointerEvents="",s.style.opacity=""}}async function pn(){try{const e=await qt(),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),a=URL.createObjectURL(t),n=document.createElement("a"),s=new Date().toISOString().slice(0,10);n.href=a,n.download=`zeitnachweis-backup-${s}.json`,n.click(),URL.revokeObjectURL(a),S("Backup heruntergeladen.")}catch(e){ve(`Export fehlgeschlagen: ${e.message}`)}}async function vn(e){var a;const t=(a=e.target.files)==null?void 0:a[0];if(t)try{const n=await t.text(),s=JSON.parse(n);if(!confirm("Existierende Daten werden überschrieben. Fortfahren?"))return;await Jt(s),S("Backup erfolgreich importiert. Seite wird neu geladen…"),setTimeout(()=>location.reload(),800)}catch(n){ve(`Import fehlgeschlagen: ${n.message}`)}}async function bn(){confirm("ALLE Daten endgültig löschen? Das lässt sich nicht rückgängig machen.")&&confirm("Wirklich alle Daten löschen? Letzte Warnung.")&&(await Gt(),S("Alle Daten gelöscht."),setTimeout(()=>location.reload(),600))}function yn(e){if(!e)return"—";const t=new Date(e);return t.toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"})+" "+t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}const We={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag"};async function wn({root:e}){var s,i,r,l;const t=await _(),a=t.berufsschulMuster??{},n=(((s=a.wochentageWoechentlich)==null?void 0:s.length)??0)>0||(((i=a.wochentage14Taegig)==null?void 0:i.length)??0)>0;e.innerHTML=`
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
            <div class="tag-detail-value"><strong>${((r=a.wochentageWoechentlich)==null?void 0:r.map(o=>We[o]).join(", "))||"—"}</strong></div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Alle 2 Wochen</div>
            <div class="tag-detail-value"><strong>${((l=a.wochentage14Taegig)==null?void 0:l.map(o=>We[o]).join(", "))||"—"}</strong>${a.referenzDatum14Taegig?` <span class="hint">(Anker: ${w(new Date(a.referenzDatum14Taegig))})</span>`:""}</div>
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
  `,e.querySelector("#profil-form").addEventListener("submit",async o=>{var f,h,u,g;o.preventDefault();const c=new FormData(o.target),d={...t,name:((f=c.get("name"))==null?void 0:f.trim())||"",personalnummer:((h=c.get("personalnummer"))==null?void 0:h.trim())||"",geburtsdatum:c.get("geburtsdatum")?new Date(c.get("geburtsdatum")).toISOString():null,pausenRegel:c.get("pausenRegel")||"auto",zeitwirtschaftEmail:((u=c.get("zeitwirtschaftEmail"))==null?void 0:u.trim())||"zeitwirtschaft@putzmeister.com",zeitwirtschaftAnrede:((g=c.get("zeitwirtschaftAnrede"))==null?void 0:g.trim())||"Frau Kanarya"};await he(d),S("Profil gespeichert.")})}function ae(e){return String(e??"").replace(/"/g,"&quot;")}async function Mn({root:e}){var s;const t=await ee(),a=await W(),n={};for(const i of a)n[s=i.monatKey]??(n[s]=[]),n[i.monatKey].push(i);if(t.length===0){e.innerHTML=Dn("Noch keine Monatsdaten. Lade zuerst ein PDF unter Daten hoch.");return}e.innerHTML=`
    <h1 class="view-title">Monate</h1>
    <p class="view-subtitle">${t.length} Monate erfasst. Klicke für Details.</p>

    <div class="grid cols-2">
      ${t.slice().reverse().map(i=>{var h;const l=(n[i.monatKey]??[]).filter(u=>u.ist!=null&&u.ist>0),o=l.reduce((u,g)=>u+(g.ist??0),0),c=l.reduce((u,g)=>u+(g.soll??0),0),d=o-c,f=(h=i.glz)==null?void 0:h.saldoGesamt;return`
          <a href="#/monat/${i.monatKey}" class="card" style="text-decoration: none; color: inherit; display: block;">
            <div class="card-split" style="margin-bottom: 12px;">
              <h2 style="margin: 0;">${de(i.monatKey)}</h2>
              <span class="saldo-trend ${f>.05?"up":f<-.05?"down":"flat"}" style="margin: 0; font-size: 12px;">
                Saldo: <strong>${A(f??0,{signed:!0})}</strong>
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
  `}async function $n({params:e,root:t}){const a=e.yyyymm,[n,s,i]=await Promise.all([W(),ee(),_()]),r=s.find(c=>c.monatKey===a),l=n.filter(c=>c.monatKey===a).sort((c,d)=>c.datum.localeCompare(d.datum));if(!l.length){t.innerHTML=`<h1 class="view-title">Monat ${de(a)}</h1><p class="view-subtitle">Keine Daten für diesen Monat.</p><a href="#/monat" class="btn">← Alle Monate</a>`;return}const o=me(n,i,new Date).filter(c=>c.datum.startsWith(a));t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat" class="btn sm">← Alle Monate</a>
    </div>
    <h1 class="view-title">${de(a)}</h1>
    <p class="view-subtitle">${l.length} Tage · ${o.length} Auffälligkeiten</p>

    ${r?zn(r):""}

    <div class="card" style="margin-bottom: 24px;">
      <h2>Tagesbalken</h2>
      <div class="chart-wrap tall"><canvas id="chart-monat"></canvas></div>
    </div>

    ${o.length?`
      <div class="card" style="margin-bottom: 24px;">
        <h2>Auffälligkeiten</h2>
        ${o.map(c=>Sn(c)).join("")}
      </div>
    `:""}

    <div class="card">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Tage</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">Klicke auf ein Datum für Details</span>
      </div>
      ${xn(l)}
    </div>
  `,fe(t.querySelector("#chart-monat"),l)}function zn(e){var n,s,i,r;const t=((n=e.glz)==null?void 0:n.saldoGesamt)??0;return`
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
  `}function xn(e){return`
    <table class="table">
      <thead>
        <tr>
          <th>Datum</th>
          <th>Typ</th>
          <th>Von</th>
          <th>Bis</th>
          <th class="num">Ist</th>
          <th class="num">Soll</th>
          <th class="num">±</th>
          <th class="num">Pause</th>
        </tr>
      </thead>
      <tbody>
        ${e.map(t=>{var s;const a=t.diff>.05?"positive":t.diff<-.05?"negative":"",n=(s=t.zeitSpannen)==null?void 0:s[0];return`
            <tr>
              <td><a href="#/tag/${t.datum}" style="color: inherit; text-decoration: none;"><span class="tabular">${w(new Date(t.datum))}</span> <span style="color: var(--fg-subtle);">${t.wochentag}</span></a></td>
              <td>${t.tagestyp?`<span class="pill ${kn(t.tagestyp)}">${ne(t.tagestyp)}</span>`:"—"}</td>
              <td class="tabular">${(n==null?void 0:n.von)??"—"}</td>
              <td class="tabular">${(n==null?void 0:n.bis)??"—"}</td>
              <td class="num tabular">${t.ist!=null?t.ist.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular">${t.soll!=null?t.soll.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular ${a}">${t.diff!=null?A(t.diff,{signed:!0,suffix:""}):"—"}</td>
              <td class="num tabular">${t.pause!=null?t.pause.toFixed(2).replace(".",","):"—"}</td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `}function Sn(e){return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i"}</div>
      <div class="alert-body">
        <div class="alert-title">${ne(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${ne(e.beschreibung)}</p>
        ${e.mailVorlageKey?`<div class="alert-actions"><a href="#/mails" class="btn primary sm">Mail schreiben</a><a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a></div>`:""}
      </div>
    </div>
  `}function de(e){const[t,a]=e.split("-"),n=new Date(parseInt(t),parseInt(a)-1,1);return x(n,"LLLL yyyy",{locale:V})}function kn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function Dn(e){return`<div class="empty-state"><div class="empty-state-icon">📭</div><p>${ne(e)}</p><a href="#/daten" class="btn primary">Zu Daten</a></div>`}function ne(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function An({root:e}){var s;const t=await W();if(!t.length){e.innerHTML='<h1 class="view-title">Wochen</h1><p class="view-subtitle">Noch keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a={};for(const i of t)a[s=i.wocheKey]??(a[s]={key:i.wocheKey,tage:[],ist:0,soll:0}),a[i.wocheKey].tage.push(i),a[i.wocheKey].ist+=i.ist??0,a[i.wocheKey].soll+=i.soll??0;const n=Object.keys(a).sort().reverse();e.innerHTML=`
    <h1 class="view-title">Wochen</h1>
    <p class="view-subtitle">${n.length} Wochen erfasst.</p>

    <div>
      ${n.map(i=>{const r=a[i],l=r.ist-r.soll,o=l>.05?"positive":l<-.05?"negative":"";return`
          <a href="#/woche/${i}" class="list-item">
            <div class="tabular" style="font-size: 16px; font-weight: 600; color: var(--fg-muted);">${se(at(i))}</div>
            <div>
              <div class="list-item-title">Ist: ${r.ist.toFixed(2).replace(".",",")}h · Soll: ${r.soll.toFixed(2).replace(".",",")}h</div>
              <div class="list-item-sub">${r.tage.length} Tage erfasst</div>
            </div>
            <div class="tabular ${o}" style="font-weight: 600; font-size: 16px;">${A(l,{signed:!0})}</div>
            <div style="color: var(--fg-subtle);">→</div>
          </a>
        `}).join("")}
    </div>
  `}async function Pn({params:e,root:t}){const a=await W(),n=e.yyyykw,s=a.filter(o=>o.wocheKey===n).sort((o,c)=>o.datum.localeCompare(c.datum));if(!s.length){t.innerHTML=`<h1 class="view-title">KW ${se(n)}</h1><p>Keine Daten.</p><a href="#/woche" class="btn">← Alle Wochen</a>`;return}const i=s.reduce((o,c)=>o+(c.ist??0),0),r=s.reduce((o,c)=>o+(c.soll??0),0),l=i-r;t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/woche" class="btn sm">← Alle Wochen</a>
    </div>
    <h1 class="view-title">${se(at(n))}</h1>
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
      ${Tn(s)}
    </div>
  `,fe(t.querySelector("#chart-woche"),s)}function Tn(e){return`
    <table class="table">
      <thead>
        <tr>
          <th>Datum</th>
          <th>Typ</th>
          <th>Von</th>
          <th>Bis</th>
          <th class="num">Ist</th>
          <th class="num">Soll</th>
          <th class="num">±</th>
          <th class="num">Pause</th>
        </tr>
      </thead>
      <tbody>
        ${e.map(t=>{var s;const a=t.diff>.05?"positive":t.diff<-.05?"negative":"",n=(s=t.zeitSpannen)==null?void 0:s[0];return`
            <tr>
              <td><a href="#/tag/${t.datum}" style="color: inherit;"><span class="tabular">${x($(t.datum),"dd.MM.yyyy")}</span> ${t.wochentag}</a></td>
              <td>${t.tagestyp?`<span class="pill ${Ln(t.tagestyp)}">${se(t.tagestyp)}</span>`:"—"}</td>
              <td class="tabular">${(n==null?void 0:n.von)??"—"}</td>
              <td class="tabular">${(n==null?void 0:n.bis)??"—"}</td>
              <td class="num tabular">${t.ist!=null?t.ist.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular">${t.soll!=null?t.soll.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular ${a}">${t.diff!=null?A(t.diff,{signed:!0,suffix:""}):"—"}</td>
              <td class="num tabular">${t.pause!=null?t.pause.toFixed(2).replace(".",","):"—"}</td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `}function at(e){const[t,a]=e.split("-");return`KW ${a} · ${t}`}function Ln(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function se(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function En({params:e,root:t}){var o,c,d;const a=e.datum,n=await p.tage.get(a),s=await _();if(!n){t.innerHTML=`<h1 class="view-title">Tag nicht gefunden</h1><p>Für ${a} liegen keine Daten vor.</p><a href="#/" class="btn">← Dashboard</a>`;return}const i=$(a),r=n.tagestyp==="Stempelzeit"?Ye(n,s):null,l=Ue(i,s.berufsschulMuster);t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat/${a.slice(0,7)}" class="btn sm">← Zum Monat</a>
    </div>
    <h1 class="view-title">${qe(i)}</h1>
    <p class="view-subtitle">${n.tagestyp??"Kein Typ"} · KW ${(o=n.wocheKey)==null?void 0:o.split("-")[1]}</p>

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${n.ist!=null?n.ist.toFixed(2).replace(".",",")+"h":"—"}</div>
        <div class="hint">= ${n.ist!=null?I(n.ist):"—"}</div>
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
        ${(c=n.zeitSpannen)!=null&&c.length?n.zeitSpannen.map(f=>`
              <div class="tag-detail">
                <div class="tag-detail-label">${Q(f.aktivitaet??"Stempelzeit")}</div>
                <div class="tag-detail-value tabular">${f.von??"—"} – ${f.bis??"—"}</div>
              </div>
            `).join(""):'<p class="hint">Keine Stempelzeiten für diesen Tag.</p>'}
      </div>

      <div class="card">
        <h2>Klassifikation</h2>
        <div class="tag-detail">
          <div class="tag-detail-label">Tagestyp</div>
          <div class="tag-detail-value">${n.tagestyp?`<span class="pill ${Fn(n.tagestyp)}">${Q(n.tagestyp)}</span>`:"—"}</div>
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
                <div class="tag-detail-value tabular">${(d=r.arbeitszeitOhnePause)==null?void 0:d.toFixed(2).replace(".",",")}h</div>
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
  `}function Fn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function Q(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function Wn({root:e}){const[t,a]=await Promise.all([W(),ee()]);if(!t.length){e.innerHTML='<h1 class="view-title">Analytics</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}e.innerHTML=`
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
  `,requestAnimationFrame(()=>{Ba(e.querySelector("#c-saldo"),a),et(e.querySelector("#heatmap"),t,{monate:8}),Za(e.querySelector("#c-istsoll"),t),Ha(e.querySelector("#c-kumulativ"),t),Ra(e.querySelector("#c-startend"),t),_a(e.querySelector("#c-wochentag"),t),Va(e.querySelector("#c-pausen"),t),ja(e.querySelector("#c-donut"),t);const n=t.slice(-30);fe(e.querySelector("#c-alle-tage"),n)})}async function Kn({root:e}){const t=await W();if(!t.length){e.innerHTML='<h1 class="view-title">Berichtsheft</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a=[...new Set(t.map(i=>i.monatKey))].sort().reverse();e.innerHTML=`
    <h1 class="view-title">Berichtsheft-Export</h1>
    <p class="view-subtitle">Kopiere die Arbeitsstunden im HH:MM-Format direkt in dein Berichtsheft.</p>

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 16px; align-items: center;">
        <h2 style="margin: 0;">Filter</h2>
        <div style="display: flex; gap: 8px; align-items: center;">
          <label style="color: var(--fg-muted); font-size: 13px;">Monat:</label>
          <select id="filter-monat">
            <option value="">Alle</option>
            ${a.map(i=>`<option value="${i}">${In(i)}</option>`).join("")}
          </select>
          <button class="btn sm" id="btn-copy-all">Alle sichtbaren kopieren</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div id="liste"></div>
    </div>
  `;const n=e.querySelector("#filter-monat");n.addEventListener("change",()=>s()),e.querySelector("#btn-copy-all").addEventListener("click",()=>{const i=e.querySelectorAll("#liste tr[data-copy]"),r=Array.from(i).map(l=>l.getAttribute("data-copy")).join(`
`);navigator.clipboard.writeText(r).then(()=>S(`${i.length} Zeilen kopiert.`))});function s(){const i=n.value,l=(i?t.filter(o=>o.monatKey===i):t).filter(o=>o.ist!=null&&o.ist>0&&o.tagestyp!=="Wochenende");e.querySelector("#liste").innerHTML=Cn(l),e.querySelectorAll(".copy-val").forEach(o=>{o.addEventListener("click",async()=>{const c=o.getAttribute("data-val");await navigator.clipboard.writeText(c),o.classList.add("ok");const d=o.textContent;o.textContent="✓ kopiert",setTimeout(()=>{o.classList.remove("ok"),o.textContent=d},1200)})})}s()}function Cn(e){return e.length?`
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
        ${e.map(t=>{const a=I(t.ist),n=`${w($(t.datum))}	${a}`;return`
            <tr data-copy="${Ke(n)}">
              <td class="tabular">${w($(t.datum))}</td>
              <td>${On(t.wochentag)}</td>
              <td>${t.tagestyp?`<span class="pill ${Bn(t.tagestyp)}">${nt(t.tagestyp)}</span>`:"—"}</td>
              <td class="num tabular">${t.ist.toFixed(2).replace(".",",")}</td>
              <td class="num tabular" style="font-weight: 600;">${a}</td>
              <td><button class="copy-val" data-val="${Ke(a)}">📋 ${a}</button></td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `:'<p style="color: var(--fg-muted);">Keine Tage in dieser Auswahl.</p>'}function On(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function In(e){const[t,a]=e.split("-");return x(new Date(parseInt(t),parseInt(a)-1,1),"LLLL yyyy",{locale:V})}function Bn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function nt(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ke(e){return nt(e)}const Rn={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"},be={bs_tag_fehlt:{key:"bs_tag_fehlt",titel:"Berufsschultag fehlt",beschreibung:"Wenn ein Berufsschultag komplett nicht im Zeitnachweis eingetragen wurde.",betreff:"Bitte um Korrektur Zeitnachweis — Berufsschultag {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

in meinem Zeitnachweis wurde der Berufsschultag am {datum} ({wochentag}) bisher nicht erfasst. Nach meinem Ausbildungsplan habe ich an diesem Tag ganztägig Berufsschule.

Ich bitte Sie um nachträgliche Eintragung.

Vielen Dank und freundliche Grüße
{name}
Personalnummer {personalnr}`},bs_stunden_falsch:{key:"bs_stunden_falsch",titel:"Berufsschul-Stunden falsch",beschreibung:"Wenn ein Berufsschultag mit zu wenig Stunden erfasst wurde (z.B. 6h statt 7h).",betreff:"Bitte um Korrektur Zeitnachweis — Berufsschultag {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

am {datum} ({wochentag}) hatte ich ganztägig Berufsschule, in meinem Zeitnachweis sind jedoch nur {ist}h statt der regulären {soll}h gebucht.

Ich bitte Sie um Prüfung und Korrektur auf {soll}h.

Vielen Dank und freundliche Grüße
{name}
Personalnummer {personalnr}`},stempelzeit_fehlt:{key:"stempelzeit_fehlt",titel:"Stempelzeit fehlt",beschreibung:"Wenn ein regulärer Arbeitstag ohne Stempelung geblieben ist.",betreff:"Rückfrage Zeitnachweis — Fehlender Arbeitstag {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

in meinem Zeitnachweis fehlt bisher der {wochentag}, {datum}. Ich war an diesem Tag regulär im Haus und habe gestempelt. Könnten Sie bitte prüfen, ob die Stempeldaten nachgetragen werden können?

Vielen Dank und freundliche Grüße
{name}
Personalnummer {personalnr}`},pausen_abzug:{key:"pausen_abzug",titel:"Falscher Pausen-Abzug",beschreibung:"Wenn mehr Pause abgezogen wurde als tatsächlich gestempelt.",betreff:"Rückfrage Zeitnachweis — Pausen-Buchung {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

am {datum} wurde laut Zeitnachweis eine Pause von {abgezogen} Minuten abgezogen, gestempelt habe ich jedoch eine Pause von {gestempelt} Minuten. Die Differenz reduziert meine Stundengutschrift um {verlust} Minuten.

Ich bitte Sie um Prüfung.

Vielen Dank und freundliche Grüße
{name}
Personalnummer {personalnr}`}};function st(e,t){const a=be[e];return a?{...a,...t??{}}:null}function it(e,t){const a=Ce(e.text,t);return{betreff:Ce(e.betreff,t),text:a}}function Ce(e,t){return e.replace(/\{(\w+)\}/g,(a,n)=>t[n]!=null?String(t[n]):`{${n}}`)}function Vn(e,t){const a=t.datum?new Date(t.datum):null,n=a?qe(a).split(", ")[1]:"";return{name:e.name||"Ihr Mitarbeiter",personalnr:e.personalnummer||"—",kostenstelle:e.kostenstelle||"—",datum:n,wochentag:Rn[t.wochentag]??t.wochentag??"",zeitwirtschaft_anrede:e.zeitwirtschaftAnrede||"Frau Kanarya",zeitwirtschaft_email:e.zeitwirtschaftEmail||"zeitwirtschaft@putzmeister.com",ist:t.ist!=null?t.ist.toFixed(2).replace(".",","):"",soll:t.soll!=null?t.soll.toFixed(2).replace(".",","):"",abgezogen:t.abgezogen!=null?Math.round(t.abgezogen*60):"",gestempelt:t.gestempelt!=null?Math.round(t.gestempelt*60):"",verlust:t.verlustMinuten??""}}function _n(e,t,a){const n=it(t,a),s=e.zeitwirtschaftEmail||"zeitwirtschaft@putzmeister.com",i=new URLSearchParams;return i.set("subject",n.betreff),i.set("body",n.text),`mailto:${encodeURIComponent(s)}?${i.toString().replace(/\+/g,"%20")}`}async function jn({root:e}){const[t,a,n,s]=await Promise.all([W(),_(),ee(),Ut()]),i=Object.fromEntries(s.map(o=>[o.key,o])),r=me(t,a,new Date).filter(o=>o.mailVorlageKey),l=Xe(n);e.innerHTML=`
    <h1 class="view-title">Mail-Vorlagen</h1>
    <p class="view-subtitle">Vorformulierte Mails an die Zeitwirtschaft bei erkannten Fehlern im Zeitnachweis.</p>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Offene Warnungen mit Mail-Vorschlag</h2>
      <p class="hint" style="margin-bottom: 16px;">Diese Warnungen haben einen roten Schweregrad und sind eine direkte Mail wert.</p>

      ${r.length===0?'<div class="empty-state"><div class="empty-state-icon">✓</div><p>Keine akuten Warnungen — top.</p></div>':r.map(o=>Zn(o,a,i)).join("")}

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
        ${Object.keys(be).map(o=>{const c=st(o,i[o]);return Hn(c)}).join("")}
      </div>
    </div>
  `,Gn(e),Nn(e)}function Zn(e,t,a){const n=st(e.mailVorlageKey,a[e.mailVorlageKey]);if(!n)return"";const s=Vn(t,e),i=it(n,s),r=_n(t,n,s);return`
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
        <a class="btn primary sm" href="${r}" target="_blank" rel="noopener">✉ Mail-Client öffnen</a>
        <button class="btn sm btn-copy-mail" data-subject="${ue(i.betreff)}" data-body="${ue(i.text)}">📋 Betreff + Text kopieren</button>
      </div>
    </div>
  `}function Hn(e){return`
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
        <input type="text" class="v-betreff" value="${ue(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 240px;">${T(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function Gn(e){e.querySelectorAll(".btn-save-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-key"),n=t.closest(".vorlagen-item"),s=n.querySelector(".v-betreff").value,i=n.querySelector(".v-text").value;await Se(a,{betreff:s,text:i}),S("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-key"),n=be[a];n&&confirm(`Vorlage "${n.titel}" auf Default zurücksetzen?`)&&(await Se(a,{betreff:n.betreff,text:n.text}),S("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function Nn(e){e.querySelectorAll(".btn-copy-mail").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-subject"),n=t.getAttribute("data-body"),s=`Betreff: ${a}

${n}`;await navigator.clipboard.writeText(s),S("Mail-Text kopiert.")})})}function T(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function ue(e){return T(e)}async function qn({root:e}){const t=_e(),a=await _();e.innerHTML=`
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
  `,e.querySelectorAll("[data-theme]").forEach(n=>{n.addEventListener("click",()=>{const s=n.getAttribute("data-theme");ge(s),e.querySelectorAll("[data-theme]").forEach(i=>i.classList.toggle("active",i===n)),S(`Theme: ${n.textContent.trim()}`)})}),e.querySelector("#pause-sel").addEventListener("change",async n=>{const s={...a,pausenRegel:n.target.value};await he(s),S("Pausen-Regel gespeichert.")})}async function Oe(){var t;Lt();const e=document.getElementById("content");(t=document.getElementById("theme-toggle"))==null||t.addEventListener("click",()=>Et()),Ft(()=>{It()}),await Rt()&&setTimeout(()=>{pe('Parser wurde aktualisiert. Bitte lade deinen Zeitnachweis unter "Daten" neu hoch.',{type:"info",duration:12e3})},500),D("/",De),D("/dashboard",De),D("/analytics",Wn),D("/monat",Mn),D("/monat/:yyyymm",$n),D("/woche",An),D("/woche/:yyyykw",Pn),D("/tag/:datum",En),D("/berichtsheft",Kn),D("/mails",jn),D("/profil",wn),D("/daten",mn),D("/einstellungen",qn),Ct(e),location.hash||Kt("/")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Oe):Oe();
