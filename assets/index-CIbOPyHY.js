import{D as tt}from"./dexie-BODkcwel.js";import{b as ne,a as H,c as Z,d as at,f as x,e as U,i as We,p as nt,g as st,h as it,j as z,k as Ke,l as rt,s as lt,m as ot}from"./datefns-Dq49jaKA.js";import{C as L,L as ct,B as dt,D as ut,S as gt,a as ht,b as mt,P as ft,A as pt,c as vt,d as bt,T as yt,p as wt,e as $t,i as Mt}from"./chartjs-CRgZvhTJ.js";import{_ as zt,a as xt}from"./pdfjs-BDGsuRSB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();const ae="theme";function St(){const e=localStorage.getItem(ae)??"auto";oe(e)}function oe(e){e==="auto"?document.documentElement.removeAttribute("data-theme"):document.documentElement.setAttribute("data-theme",e),localStorage.setItem(ae,e),At(e)}function kt(){const e=localStorage.getItem(ae)??"auto",t=e==="auto"?"light":e==="light"?"dark":"auto";return oe(t),Oe(t),t}const se=new Set;function Dt(e){return se.add(e),()=>se.delete(e)}function Oe(e){for(const t of se)try{t(e)}catch(a){console.error(a)}}var Fe;if(typeof window<"u"&&window.matchMedia){const e=window.matchMedia("(prefers-color-scheme: dark)");(Fe=e.addEventListener)==null||Fe.call(e,"change",()=>{Ce()==="auto"&&Oe("auto")})}function At(e){const t=document.getElementById("theme-toggle");if(!t)return;const a=t.querySelector(".theme-label"),n=t.querySelector(".theme-icon-dark"),s=t.querySelector(".theme-icon-light");a&&(e==="auto"?(a.textContent="Auto",n&&(n.style.display="inline"),s&&(s.style.display="inline")):e==="light"?(a.textContent="Hell",n&&(n.style.display="none"),s&&(s.style.display="inline")):(a.textContent="Dunkel",n&&(n.style.display="inline"),s&&(s.style.display="none")))}function Ce(){return localStorage.getItem(ae)??"auto"}const Ie=[];let Be=null;function k(e,t){const a=e.split("/").filter(Boolean),n=[],s=new RegExp("^/?"+a.map(i=>i.startsWith(":")?(n.push(i.slice(1)),"([^/]+)"):Ft(i)).join("/")+"/?$");Ie.push({pattern:e,regex:s,paramNames:n,render:t})}function Pt(e){e.startsWith("#")||(e="#"+e),window.location.hash===e?E():window.location.hash=e}function Tt(e,{onNavigate:t}={}){window.addEventListener("hashchange",E),E.rootEl=e,E.onNavigate=t,E()}async function E(){var n;const e=E.rootEl,t=window.location.hash.slice(1)||"/",a=t.startsWith("/")?t:`/${t}`;for(const s of Ie){const i=s.regex.exec(a);if(i){const l={};s.paramNames.forEach((r,o)=>l[r]=decodeURIComponent(i[o+1])),Be=a,(n=E.onNavigate)==null||n.call(E,a),Lt(a);try{e.classList.remove("view-enter"),await s.render({params:l,path:a,root:e}),e.classList.add("view-enter")}catch(r){console.error("Route render error:",r),e.innerHTML=`<div class="empty-state">
          <div class="empty-state-icon">⚠</div>
          <h2>Fehler beim Anzeigen</h2>
          <p>${ye(r.message||String(r))}</p>
        </div>`}return}}e.innerHTML=`<div class="empty-state">
    <div class="empty-state-icon">?</div>
    <h2>Seite nicht gefunden</h2>
    <p>Die Route <code>${ye(a)}</code> existiert nicht.</p>
    <a href="#/" class="btn primary">Zum Dashboard</a>
  </div>`}function Lt(e){document.querySelectorAll("[data-route]").forEach(t=>{const a=t.getAttribute("data-route"),n=a==="/"?e==="/":e===a||e.startsWith(a+"/");t.classList.toggle("active",n)})}function Et(){Be!=null&&E()}function Ft(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ye(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const f=new tt("zeitnachweis");f.version(1).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"});f.version(2).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});f.version(3).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});async function Wt(){const e=await f.einstellungen.get("__migration_reset");return(e==null?void 0:e.value)===!0?(await f.einstellungen.delete("__migration_reset"),!0):!1}async function B(){return await f.profil.get("self")??Re()}async function ce(e){const t={...e,id:"self",updatedAt:new Date().toISOString()};return await f.profil.put(t),t}function Re(){return{id:"self",name:"",personalnummer:"",kostenstelle:"",einstellungsdatum:null,arbeitszeitplanregel:"",geburtsdatum:null,sollStundenProWoche:35,sollStundenProTag:7,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null},zeitwirtschaftEmail:"zeitwirtschaft@putzmeister.com",zeitwirtschaftAnrede:"Frau Kanarya",pausenRegel:"auto",erstelltAm:new Date().toISOString()}}async function Kt(e,t=null){const a=await f.einstellungen.get(e);return a?a.value:t}async function Ot(e,t){await f.einstellungen.put({key:e,value:t})}async function W(){return await f.tage.orderBy("datum").toArray()}async function Ct(e){return e.length?(await f.tage.bulkPut(e),e.length):0}async function It(e){return e.length?(await f.monate.bulkPut(e),e.length):0}async function Q(){return await f.monate.orderBy("monatKey").toArray()}async function Bt(e){return await f.uploads.add({...e,hochladeDatum:new Date().toISOString()})}async function Ve(){return await f.uploads.orderBy("hochladeDatum").reverse().toArray()}async function Rt(){await Promise.all([f.profil.clear(),f.tage.clear(),f.monate.clear(),f.uploads.clear(),f.einstellungen.clear(),f.mailVorlagen.clear(),f.warnungDismissals.clear()])}async function Vt(){await Promise.all([f.tage.clear(),f.monate.clear(),f.uploads.clear(),f.warnungDismissals.clear()])}async function jt(){const[e,t,a,n,s,i,l]=await Promise.all([f.profil.toArray(),f.tage.toArray(),f.monate.toArray(),f.uploads.toArray(),f.einstellungen.toArray(),f.mailVorlagen.toArray(),f.warnungDismissals.toArray()]);return{version:1,exportedAt:new Date().toISOString(),data:{profil:e,tage:t,monate:a,uploads:n,einstellungen:s,mailVorlagen:i,warnungDismissals:l}}}async function _t(e){if(!e||e.version!==1||!e.data)throw new Error("Ungültiges oder inkompatibles Backup-Format.");const t=e.data;await f.transaction("rw",f.profil,f.tage,f.monate,f.uploads,f.einstellungen,f.mailVorlagen,f.warnungDismissals,async()=>{var a,n,s,i,l,r,o;(a=t.profil)!=null&&a.length&&await f.profil.bulkPut(t.profil),(n=t.tage)!=null&&n.length&&await f.tage.bulkPut(t.tage),(s=t.monate)!=null&&s.length&&await f.monate.bulkPut(t.monate),(i=t.uploads)!=null&&i.length&&await f.uploads.bulkPut(t.uploads),(l=t.einstellungen)!=null&&l.length&&await f.einstellungen.bulkPut(t.einstellungen),(r=t.mailVorlagen)!=null&&r.length&&await f.mailVorlagen.bulkPut(t.mailVorlagen),(o=t.warnungDismissals)!=null&&o.length&&await f.warnungDismissals.bulkPut(t.warnungDismissals)})}async function we(e,t){await f.mailVorlagen.put({key:e,...t})}async function Ht(){return await f.mailVorlagen.toArray()}async function Zt(e,t){await f.warnungDismissals.put({key:`${e}-${t}`,datum:e,typ:t,dismissedAt:new Date().toISOString()})}async function Gt(){return await f.warnungDismissals.toArray()}function je(e){if(e==null)return null;if(typeof e=="number")return e;let t=String(e).trim();if(!t)return null;let a=!1;t.endsWith("-")&&(a=!0,t=t.slice(0,-1).trim()),t=t.replace(",",".");const n=parseFloat(t);return isNaN(n)?null:a?-n:n}function _e(e){if(e==null||isNaN(e))return"—";const t=e<0,a=Math.abs(e),n=Math.floor(a),s=Math.round((a-n)*60);let i=n,l=s;return l===60&&(i+=1,l=0),`${t?"-":""}${i}:${String(l).padStart(2,"0")}`}function D(e,t={}){if(e==null||isNaN(e))return"—";const{signed:a=!1,suffix:n="h"}=t,s=a&&e>0?"+":"",i=e.toFixed(2).replace(".",",");return`${s}${i}${n}`}function V(e){if(!e)return null;const t=/^(\d{1,2}):(\d{2})$/.exec(String(e).trim());return t?parseInt(t[1],10)*60+parseInt(t[2],10):null}const $e={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},Nt=(e,t,a)=>{let n;const s=a!=null&&a.addSuffix?$e[e].withPreposition:$e[e].standalone;return typeof s=="string"?n=s:t===1?n=s.one:n=s.other.replace("{{count}}",String(t)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:"vor "+n:n},qt={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},Jt={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Ut={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Qt={date:ne({formats:qt,defaultWidth:"full"}),time:ne({formats:Jt,defaultWidth:"full"}),dateTime:ne({formats:Ut,defaultWidth:"full"})},Yt={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},Xt=(e,t,a,n)=>Yt[e],ea={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},ta={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},ie={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},aa={narrow:ie.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:ie.wide},na={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},sa={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},ia={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},ra=e=>Number(e)+".",la={ordinalNumber:ra,era:H({values:ea,defaultWidth:"wide"}),quarter:H({values:ta,defaultWidth:"wide",argumentCallback:e=>e-1}),month:H({values:ie,formattingValues:aa,defaultWidth:"wide"}),day:H({values:na,defaultWidth:"wide"}),dayPeriod:H({values:sa,defaultWidth:"wide",formattingValues:ia,defaultFormattingWidth:"wide"})},oa=/^(\d+)(\.)?/i,ca=/\d+/i,da={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},ua={any:[/^v/i,/^n/i]},ga={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},ha={any:[/1/i,/2/i,/3/i,/4/i]},ma={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},fa={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},pa={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},va={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},ba={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},ya={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},wa={ordinalNumber:at({matchPattern:oa,parsePattern:ca,valueCallback:e=>parseInt(e)}),era:Z({matchPatterns:da,defaultMatchWidth:"wide",parsePatterns:ua,defaultParseWidth:"any"}),quarter:Z({matchPatterns:ga,defaultMatchWidth:"wide",parsePatterns:ha,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Z({matchPatterns:ma,defaultMatchWidth:"wide",parsePatterns:fa,defaultParseWidth:"any"}),day:Z({matchPatterns:pa,defaultMatchWidth:"wide",parsePatterns:va,defaultParseWidth:"any"}),dayPeriod:Z({matchPatterns:ba,defaultMatchWidth:"wide",parsePatterns:ya,defaultParseWidth:"any"})},I={code:"de",formatDistance:Nt,formatLong:Qt,formatRelative:Xt,localize:la,match:wa,options:{weekStartsOn:1,firstWeekContainsDate:4}};function J(e){if(!e)return null;const t=e.trim();return nt(t,"dd.MM.yyyy",new Date)}function b(e){return x(e,"dd.MM.yyyy")}function He(e){return x(e,"EE, dd.MM.yyyy",{locale:I})}function $a(e){return`${st(e)}-${String(it(e)).padStart(2,"0")}`}function Ze(e){return x(e,"yyyy-MM")}function Ma(e){return x(e,"yyyy-MM-dd")}function za(e,t){if(!e||!t)return 0;e>t&&([e,t]=[t,e]);let a=0,n=new Date(e);for(;n<t;)n=U(n,1),We(n)||a++;return a}function C(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function xa(e){var l;const t=e.filter(r=>r.tagestyp==="Berufsschule");if(t.length<2)return{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null};const a={};for(const r of t)a[l=r.wochentag]??(a[l]=[]),a[r.wochentag].push(r);const n=[],s=[];let i=null;for(const[r,o]of Object.entries(a)){o.sort((g,d)=>g.datum.localeCompare(d.datum));const c=z(o[0].datum),u=z(o[o.length-1].datum),p=Ke(u,c,{weekStartsOn:1})+1,h=o.length/Math.max(1,p);h>=.75?n.push(r):h>=.35&&h<=.65&&(s.push(r),(!i||z(o[0].datum)<z(i))&&(i=o[0].datum))}return{wochentageWoechentlich:n,wochentage14Taegig:s,referenzDatum14Taegig:i}}function Ge(e,t){var s,i;if(!t)return!1;const n=["SO","MO","DI","MI","DO","FR","SA"][e.getDay()];if((s=t.wochentageWoechentlich)!=null&&s.includes(n))return!0;if((i=t.wochentage14Taegig)!=null&&i.includes(n)&&t.referenzDatum14Taegig){const l=z(t.referenzDatum14Taegig),r=Ke(e,l,{weekStartsOn:1});if(r>=0&&r%2===0)return!0}return!1}function Sa(e,t){if(!e)return"arbzg";const a=z(e);return rt(t,a)<18?"jarbschg":"arbzg"}function ka(e,t){return e==null?0:t==="jarbschg"?e>6?1:e>4.5?.5:0:e>9?.75:e>6?.5:0}function Da(e){if(!e||e.length<2)return 0;const t=e.filter(n=>n.von&&n.bis).map(n=>({von:V(n.von),bis:V(n.bis)})).filter(n=>n.von!=null&&n.bis!=null).sort((n,s)=>n.von-s.von);let a=0;for(let n=1;n<t.length;n++){const s=t[n].von-t[n-1].bis;(s>0&&s>=15||s>0)&&(a+=s)}return a/60}function Ne(e,t){const a=e.zeitSpannen??[];if(!a.length||a.every(d=>!d.von))return{keinAnspruch:!0};const n=Da(a),s=e.pause??0,i=Aa(a),l=i-s,r=t.pausenRegel&&t.pausenRegel!=="auto"?t.pausenRegel==="jarbschg"?"jarbschg":"arbzg":Sa(t.geburtsdatum,z(e.datum)),o=ka(l,r),c=Math.max(n,o),u=s-c,p=Math.max(0,o-n);let h="ok",g=null;if(u>.05)h="fehler_zeitwirtschaft",g=`${Math.round(u*60)} min Pause wurden zusätzlich zur gesetzlichen Pflicht und zur gestempelten Pause abgezogen. Das sieht nach einem Zeitwirtschafts-Fehler aus.`;else if(p>.05&&s>n+.02){h="aufstockung_legal";const d=Math.round(p*60);g=`Du hast ${Math.round(n*60)} min Pause gestempelt, aber bei ${l.toFixed(2).replace(".",",")}h Arbeitszeit schreibt das Gesetz (${r.toUpperCase()}) ${Math.round(o*60)} min vor. Die fehlenden ${d} min wurden automatisch als Pause gewertet. Das ist gesetzeskonform — nächstes Mal einfach länger Pause machen.`}return{arbeitszeitMitPause:i,arbeitszeitOhnePause:l,gestempeltePause:n,abgezogenePause:s,gesetzlichePflicht:o,gesetz:r,legalerAbzug:c,unrechtmaessigerVerlustMin:Math.round(Math.max(0,u)*60),aufstockungMin:Math.round(Math.max(0,p)*60),typ:h,warnung:g}}function Aa(e){let t=0;for(const a of e){if(!a.von||!a.bis)continue;const n=V(a.von),s=V(a.bis);n!=null&&s!=null&&s>n&&(t+=s-n)}return t/60}const G={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function de(e,t,a,n=new Set){var u,p;const s=[],i=a??new Date,l=new Map(e.map(h=>[h.datum,h]));if(!e.length)return s;const r=z(e[0].datum),o=i;for(let h=new Date(r);h<=o;h=U(h,1)){if(We(h))continue;const g=x(h,"yyyy-MM-dd"),d=l.get(g),v=za(h,o);if(!d||!d.tagestyp&&!d.ist&&(((u=d.zeitSpannen)==null?void 0:u.length)??0)===0){if(Ge(h,t.berufsschulMuster)){const m=v>=4?"error":v>=2?"warn":"info";N(s,n,{datum:g,wochentag:(d==null?void 0:d.wochentag)??Y(h),typ:"bs_tag_fehlt",schweregrad:m,titel:`Berufsschultag nicht eingetragen: ${b(h)}`,beschreibung:`Laut deinem Profil hast du am ${G[Y(h)]}, ${b(h)} Berufsschule. Im Zeitnachweis fehlt der Tag bisher${v>=4?" — bitte bei der Zeitwirtschaft nachhaken":""}.`,alter:v,mailVorlageKey:m==="error"?"bs_tag_fehlt":null})}else{const m=v>=4?"error":v>=2?"warn":"info";N(s,n,{datum:g,wochentag:Y(h),typ:"stempelzeit_fehlt",schweregrad:m,titel:`Keine Stempelzeit am ${b(h)}`,beschreibung:`Am ${G[Y(h)]}, ${b(h)} wurde keine Stempelzeit erfasst. Falls du an diesem Tag im Haus warst, sollte die Zeitwirtschaft das nachtragen${v>=4?" — es ist inzwischen ≥4 Werktage her":""}.`,alter:v,mailVorlageKey:m==="error"?"stempelzeit_fehlt":null})}continue}if(d.tagestyp==="Berufsschule"&&d.ist!=null&&d.soll!=null&&d.ist<d.soll-.01&&N(s,n,{datum:g,wochentag:d.wochentag,typ:"bs_stunden_falsch",schweregrad:"error",titel:`Berufsschultag mit zu wenig Stunden: ${b(h)}`,beschreibung:`Am ${G[d.wochentag]}, ${b(h)} sind nur ${d.ist.toFixed(2).replace(".",",")}h gebucht statt regulär ${d.soll.toFixed(2).replace(".",",")}h. Die Zeitwirtschaft hat den Berufsschultag möglicherweise nur halb erfasst.`,ist:d.ist,soll:d.soll,mailVorlageKey:"bs_stunden_falsch"}),d.tagestyp==="Stempelzeit"&&((p=d.zeitSpannen)==null?void 0:p.length)>1&&g>="2026-04-01"){const m=Ne(d,t);(m==null?void 0:m.typ)==="fehler_zeitwirtschaft"&&m.unrechtmaessigerVerlustMin>=5?N(s,n,{datum:g,wochentag:d.wochentag,typ:"pausen_abzug",schweregrad:m.unrechtmaessigerVerlustMin>=15?"error":"warn",titel:`Pausen-Abzug fehlerhaft (${b(h)})`,beschreibung:`Am ${G[d.wochentag]}, ${b(h)} wurden ${Math.round(m.abgezogenePause*60)} min Pause abgezogen. Gestempelt: ${Math.round(m.gestempeltePause*60)} min, gesetzlich nötig (${m.gesetz.toUpperCase()}): ${Math.round(m.gesetzlichePflicht*60)} min. Differenz von ${m.unrechtmaessigerVerlustMin} min ist unerklärlich.`,verlustMinuten:m.unrechtmaessigerVerlustMin,abgezogen:m.abgezogenePause,gestempelt:m.gestempeltePause,mailVorlageKey:"pausen_abzug"}):(m==null?void 0:m.typ)==="aufstockung_legal"&&m.aufstockungMin>=10&&N(s,n,{datum:g,wochentag:d.wochentag,typ:"pausen_aufstockung",schweregrad:"info",titel:`Zu wenig Pause gestempelt (${b(h)}) — ${m.aufstockungMin} min automatisch aufgestockt`,beschreibung:`Am ${G[d.wochentag]}, ${b(h)} hast du nur ${Math.round(m.gestempeltePause*60)} min Pause gemacht. Gesetz (${m.gesetz.toUpperCase()}) schreibt ${Math.round(m.gesetzlichePflicht*60)} min vor. Fehlende ${m.aufstockungMin} min wurden als Pause gewertet — das ist legal, aber du verlierst dadurch Arbeitszeit. Tipp: mach beim nächsten Mal etwas länger Mittag.`})}}const c={error:0,warn:1,info:2};return s.sort((h,g)=>{const d=c[h.schweregrad]-c[g.schweregrad];return d!==0?d:g.datum.localeCompare(h.datum)}),s}function qe(e,t=new Set){var n,s,i,l;const a=[];for(const r of e){const o=((n=r.glz)==null?void 0:n.saldoVorperiode)??0,c=((s=r.glz)==null?void 0:s.saldoAktuellePeriode)??0,u=((i=r.glz)==null?void 0:i.umgebuchteStunden)??0,p=(l=r.glz)==null?void 0:l.saldoGesamt;if(p==null)continue;const h=o+c+u,g=Math.abs(p-h);if(g>.03){const d=`${r.monatKey}-saldo_plausi`;t.has(d)||a.push({datum:`${r.monatKey}-01`,wochentag:"",typ:"saldo_plausi",schweregrad:"warn",titel:`Saldo-Differenz im Monat ${r.monatKey}`,beschreibung:`Rechnung: Vorperiode ${o.toFixed(2)} + aktuelle Periode ${c.toFixed(2)} + umgebucht ${u.toFixed(2)} = ${h.toFixed(2)}, aber dein Saldo wird mit ${p.toFixed(2)} angezeigt. Abweichung: ${g.toFixed(2)}h.`,soll:h,ist:p})}}return a}function N(e,t,a){const n=`${a.datum}-${a.typ}`;t.has(n)||(a.id=n,e.push(a))}function Y(e){return["SO","MO","DI","MI","DO","FR","SA"][e.getDay()]}function Pa(e,t){var o,c,u;const a=[...e].sort((p,h)=>p.datum.localeCompare(h.datum));if(!a.length)return[];const n=new Map(t.map(p=>[p.monatKey,p])),s={};for(const p of a)s[o=p.monatKey]??(s[o]=[]),s[p.monatKey].push(p);const i=Object.keys(s).sort(),l=[];let r=null;for(const p of i){const h=n.get(p);let g;((c=h==null?void 0:h.glz)==null?void 0:c.saldoVorperiode)!=null?g=h.glz.saldoVorperiode:r!=null?g=r:g=0;const d=s[p];for(const v of d)v.diff!=null&&(g+=v.diff),l.push({datum:v.datum,wochentag:v.wochentag,saldo:Math.round(g*100)/100,diff:v.diff,ist:v.ist,soll:v.soll,tagestyp:v.tagestyp,monatKey:v.monatKey,zeitSpannen:v.zeitSpannen});if(((u=h==null?void 0:h.glz)==null?void 0:u.saldoGesamt)!=null){const v=h.glz.saldoGesamt-g;if(Math.abs(v)>.02&&l.length>0){const $=l.length-1;l[$].umbuchung=v,l[$].saldo=Math.round((l[$].saldo+v)*100)/100,g=l[$].saldo}r=h.glz.saldoGesamt}else r=g}return l}function Ta(e,t){if(!e.length)return[];if(t==="alles")return e;const a=Math.min(t,e.length);return e.slice(-a)}function La(e){return e.length?e[e.length-1].saldo:0}function Ea(e){if(!e.length)return 0;const t=e[0].saldo-(e[0].diff??0),a=e[e.length-1].saldo;return Math.round((a-t)*100)/100}L.register(ct,dt,ut,gt,ht,mt,ft,pt,vt,bt,yt,wt,$t,Mt);function M(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function K(){return{fg:M("--fg"),fgMuted:M("--fg-muted"),fgSubtle:M("--fg-subtle"),border:M("--border"),surface:M("--surface"),accent:M("--accent"),success:M("--success"),warn:M("--warn"),danger:M("--danger"),info:M("--info"),palette:[M("--chart-1"),M("--chart-2"),M("--chart-3"),M("--chart-4"),M("--chart-5"),M("--chart-6"),M("--chart-7")]}}function y(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.fgMuted,font:{size:12}}},tooltip:{backgroundColor:e.surface,titleColor:e.fg,bodyColor:e.fg,borderColor:e.border,borderWidth:1,padding:10,displayColors:!0}},scales:{x:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}},y:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}}}}}function Fa(e,t){const a=K();if(O(e),!(t!=null&&t.length))return;const n=t.map(i=>x(z(i.datum),"dd.MM.")),s=t.map(i=>i.saldo);return s.map(i=>i>=0?a.success:a.danger),new L(e,{type:"line",data:{labels:n,datasets:[{label:"Tages-Saldo",data:s,borderColor:a.accent,backgroundColor:ge(a.accent,.14),tension:.25,pointRadius:2,pointHoverRadius:5,pointBackgroundColor:s.map(i=>i>=0?a.success:a.danger),pointBorderColor:a.surface,pointBorderWidth:1,fill:!0,borderWidth:2}]},options:{...y(a),plugins:{...y(a).plugins,legend:{display:!1},tooltip:{...y(a).plugins.tooltip,callbacks:{title:i=>{const l=t[i[0].dataIndex];return x(z(l.datum),"EE, dd.MM.yyyy",{locale:I})},label:i=>{const l=t[i.dataIndex],r=[`Saldo: ${l.saldo.toFixed(2).replace(".",",")}h`];return l.diff!=null&&r.push(`Tages-Diff: ${l.diff>=0?"+":""}${l.diff.toFixed(2).replace(".",",")}h`),l.tagestyp&&r.push(`Typ: ${l.tagestyp}`),l.umbuchung&&r.push(`Umbuchung: ${l.umbuchung>=0?"+":""}${l.umbuchung.toFixed(2).replace(".",",")}h`),r}}}},scales:{...y(a).scales,y:{...y(a).scales.y,ticks:{...y(a).scales.y.ticks,callback:i=>`${i>=0?"+":""}${i.toFixed(1).replace(".",",")}h`}}}}})}function Wa(e,t){const a=K();if(O(e),!(t!=null&&t.length))return;const n=t.map(i=>i.monatKey),s=t.map(i=>{var l;return((l=i.glz)==null?void 0:l.saldoGesamt)??0});return new L(e,{type:"line",data:{labels:n,datasets:[{label:"GLZ-Saldo (Monatsende)",data:s,borderColor:a.accent,backgroundColor:ge(a.accent,.18),tension:.35,fill:!0,pointRadius:4}]},options:y(a)})}function ue(e,t){const a=K();if(O(e),!(t!=null&&t.length))return;const n=t.map(l=>x(z(l.datum),"dd.MM.")),s=t.map(l=>l.ist??0),i=t.map(l=>Va(l.tagestyp,a));return new L(e,{type:"bar",data:{labels:n,datasets:[{label:"Ist-Stunden",data:s,backgroundColor:i,borderRadius:4,borderSkipped:!1}]},options:{...y(a),plugins:{...y(a).plugins,legend:{display:!1},tooltip:{...y(a).plugins.tooltip,callbacks:{label:l=>{const r=t[l.dataIndex];return`${r.tagestyp??"—"}: ${(r.ist??0).toFixed(2).replace(".",",")}h`}}}},scales:{...y(a).scales,y:{...y(a).scales.y,suggestedMin:0,suggestedMax:10}}}})}function Ka(e,t){const a=K();if(O(e),!(t!=null&&t.length))return;const n=t.filter(s=>{var i;return((i=s.zeitSpannen)==null?void 0:i.length)&&s.zeitSpannen[0].von}).map(s=>({x:z(s.datum).getTime(),von:V(s.zeitSpannen[0].von),bis:V(s.zeitSpannen[s.zeitSpannen.length-1].bis)}));return new L(e,{type:"scatter",data:{datasets:[{label:"Arbeitsbeginn",data:n.map(s=>({x:s.x,y:s.von})),backgroundColor:a.palette[0],pointRadius:3},{label:"Arbeitsende",data:n.map(s=>({x:s.x,y:s.bis})),backgroundColor:a.palette[3],pointRadius:3}]},options:{...y(a),scales:{x:{type:"linear",ticks:{color:a.fgMuted,callback:s=>x(new Date(s),"MMM yyyy",{locale:I})},grid:{color:a.border}},y:{min:0,max:20*60,ticks:{color:a.fgMuted,stepSize:60,callback:s=>`${String(Math.floor(s/60)).padStart(2,"0")}:00`},grid:{color:a.border}}}}})}function Oa(e,t){const a=K();O(e);const n={};for(const l of t){if(l.pause==null||l.tagestyp!=="Stempelzeit")continue;const r=Math.round(l.pause*60),o=Math.floor(r/15)*15;n[o]=(n[o]??0)+1}const s=Object.keys(n).map(Number).sort((l,r)=>l-r),i=s.map(l=>n[l]);return new L(e,{type:"bar",data:{labels:s.map(l=>`${l}–${l+14}min`),datasets:[{label:"Häufigkeit",data:i,backgroundColor:a.palette[1],borderRadius:4}]},options:{...y(a),plugins:{...y(a).plugins,legend:{display:!1}}}})}function Ca(e,t){const a=K();O(e);const n=["MO","DI","MI","DO","FR"],s={},i={};for(const r of n)s[r]=0,i[r]=0;for(const r of t)n.includes(r.wochentag)&&(r.ist==null||r.ist===0||(s[r.wochentag]+=r.ist,i[r.wochentag]+=1));const l=n.map(r=>i[r]>0?s[r]/i[r]:0);return new L(e,{type:"bar",data:{labels:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"],datasets:[{label:"Ø Ist-Stunden",data:l,backgroundColor:a.palette[2],borderRadius:4}]},options:{...y(a),plugins:{...y(a).plugins,legend:{display:!1}}}})}function Ia(e,t){const a=K();O(e);const n={};for(const l of t)!l.tagestyp||l.tagestyp==="Wochenende"||(n[l.tagestyp]=(n[l.tagestyp]??0)+1);const s=Object.keys(n),i=Object.values(n);return new L(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:s.map((l,r)=>a.palette[r%a.palette.length]),borderColor:a.surface,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:a.fgMuted,font:{size:12}}},tooltip:y(a).plugins.tooltip}}})}function Ba(e,t){const a=K();O(e);const n={};for(const r of t){const o=r.wocheKey;n[o]??(n[o]={ist:0,soll:0}),n[o].ist+=r.ist??0,n[o].soll+=r.soll??0}const s=Object.keys(n).sort(),i=s.map(r=>n[r].ist),l=s.map(r=>n[r].soll);return new L(e,{type:"bar",data:{labels:s.map(r=>"KW "+r.split("-")[1]),datasets:[{label:"Ist",data:i,backgroundColor:a.palette[0],borderRadius:4},{label:"Soll",data:l,backgroundColor:a.palette[3],borderRadius:4}]},options:y(a)})}function Ra(e,t){const a=K();O(e);const n=t.slice().sort((l,r)=>l.datum.localeCompare(r.datum));let s=0;const i=n.map(l=>(s+=l.diff??0,{x:l.datum,y:s}));return new L(e,{type:"line",data:{labels:i.map(l=>l.x),datasets:[{label:"Kumulative Differenz (+/- Soll)",data:i.map(l=>l.y),borderColor:a.palette[5],backgroundColor:ge(a.palette[5],.15),fill:!0,tension:.2,pointRadius:0}]},options:{...y(a),scales:{x:{display:!1,grid:{display:!1}},y:{...y(a).scales.y}}}})}function Je(e,t,{monate:a=8}={}){if(!e)return;if(e.innerHTML="",!t.length){e.innerHTML='<p style="color: var(--fg-muted); font-size: 13px;">Keine Daten.</p>';return}const n=new Map(t.map(d=>[d.datum,d])),i=z(t[t.length-1].datum),l=a*30,r=U(i,-l),o=lt(r,{weekStartsOn:1}),c=ot(i,o)+1,u=Math.ceil(c/7),p=document.createElement("div");p.className="heatmap-month-labels",p.style.gridTemplateColumns=`repeat(${u}, 14px)`,e.appendChild(p);let h=-1;for(let d=0;d<u;d++){const v=U(o,d*7),$=v.getMonth(),m=document.createElement("span");m.textContent=$!==h?x(v,"MMM",{locale:I}):"",p.appendChild(m),h=$}const g=document.createElement("div");g.className="heatmap",g.style.gridAutoFlow="column",g.style.gridTemplateRows="repeat(7, 14px)",g.style.gridTemplateColumns=`repeat(${u}, 14px)`;for(let d=0;d<u*7;d++){const v=U(o,d);if(v>i||v<r){const R=document.createElement("div");R.className="heatmap-cell",R.style.background="transparent",g.appendChild(R);continue}const $=x(v,"yyyy-MM-dd"),m=n.get($),S=document.createElement("div");S.className="heatmap-cell",S.title=`${x(v,"EE, dd.MM.yyyy",{locale:I})}${(m==null?void 0:m.ist)!=null?" · Ist "+m.ist.toFixed(2)+"h":""}${(m==null?void 0:m.diff)!=null?" · "+(m.diff>=0?"+":"")+m.diff.toFixed(2):""}`,(m==null?void 0:m.diff)!=null&&(m.diff<=-1?S.classList.add("neg-2"):m.diff<-.05?S.classList.add("neg-1"):m.diff>=1?S.classList.add("pos-2"):m.diff>.05&&S.classList.add("pos-1")),g.appendChild(S)}e.appendChild(g)}function O(e){const t=L.getChart(e);t&&t.destroy()}function ge(e,t){const a=e.replace("#","").trim();if(a.length!==6&&a.length!==3)return e;const n=a.length===3?a.split("").map(r=>r+r).join(""):a,s=parseInt(n.slice(0,2),16),i=parseInt(n.slice(2,4),16),l=parseInt(n.slice(4,6),16);return`rgba(${s}, ${i}, ${l}, ${t})`}function Va(e,t){const a=String(e??"").toLowerCase();return a.includes("stempel")?t.palette[0]:a.includes("berufs")?t.palette[1]:a.includes("urlaub")?t.palette[2]:a.includes("feiertag")?t.fgSubtle:a.includes("dienst")?t.palette[3]:a.includes("krank")?t.palette[4]:t.palette[5]}let ja=0;function he(e,{type:t="info",duration:a=3500}={}){const n=document.getElementById("toast-root");if(!n)return;const s=document.createElement("div");s.className=`toast ${t}`,s.textContent=e,s.dataset.id=++ja,n.appendChild(s),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateY(-8px)",s.style.transition="opacity 220ms, transform 220ms",setTimeout(()=>s.remove(),250)},a)}function me(e){return he(e,{type:"error",duration:6e3})}function A(e){return he(e,{type:"success"})}const _a=[{key:7,label:"1 Woche"},{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:"alles",label:"Alles"}];async function Me({root:e}){var S,R,pe,ve;const[t,a,n,s,i]=await Promise.all([B(),Q(),W(),Gt(),Kt("dashboardZeitraum",14)]);if(n.length===0){e.innerHTML=Ga();return}const l=!t.geburtsdatum||!((R=(S=t.berufsschulMuster)==null?void 0:S.wochentageWoechentlich)!=null&&R.length||(ve=(pe=t.berufsschulMuster)==null?void 0:pe.wochentage14Taegig)!=null&&ve.length),r=Pa(n,a),o=r.length;let c=i;typeof c=="number"&&c>o&&(c="alles");const u=new Set(s.map(w=>w.key)),p=de(n,t,new Date,u),h=qe(a,u),g=[...p,...h],d=La(r),v=d>.05?"positive":d<-.05?"negative":"",$=g.filter(w=>w.schweregrad==="error"),m=g.filter(w=>w.schweregrad==="warn");e.innerHTML=`
    <h1 class="view-title">Dashboard</h1>
    <p class="view-subtitle">
      ${t.name?T(t.name):"Willkommen"}${t.personalnummer?` · Personalnr. ${T(t.personalnummer)}`:""}
      · Stand: ${T(b(new Date(n[n.length-1].datum)))}
    </p>

    <div class="saldo-hero" style="margin-bottom: 32px; align-items: stretch;">
      <div class="saldo-hero-text" style="min-width: 260px;">
        <h3>Aktueller Gleitzeit-Saldo</h3>
        <div class="saldo-value ${v}">${D(d,{signed:!0,suffix:""})}</div>
        <div class="saldo-unit">Stunden · tagesaktuell</div>
        <div id="hero-bewegung" class="saldo-trend flat" style="margin-top: 12px;"></div>
      </div>
      <div style="flex: 1; min-width: 400px; display: flex; flex-direction: column;">
        <div class="card-split" style="margin-bottom: 12px; align-items: center;">
          <h3 style="margin: 0;">Verlauf</h3>
          <div class="segmented" id="zeitraum-picker">
            ${_a.map(w=>{const F=typeof w.key=="number"&&w.key>o;return`<button type="button" data-key="${w.key}" class="${c===w.key?"active":""}" ${F?'disabled style="opacity:0.4"':""}>${w.label}</button>`}).join("")}
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
          seit ${T(b(new Date(n[0].datum)))}
        </div>
      </div>
      <div class="card">
        <h3>Monatsübersichten</h3>
        <div style="font-size: 32px; font-weight: 650; letter-spacing: -0.02em;" class="tabular">${a.length}</div>
      </div>
      <div class="card">
        <h3>Rote Warnungen</h3>
        <div class="tabular" style="font-size: 32px; font-weight: 650; letter-spacing: -0.02em; color: ${$.length>0?"var(--danger)":"var(--success)"};">${$.length}</div>
        <div style="color: var(--fg-muted); font-size: 12px; margin-top: 4px;">
          ${$.length>0?"sofort an Zeitwirtschaft":"keine akuten Fehler"}
        </div>
      </div>
      <div class="card">
        <h3>Gelbe Hinweise</h3>
        <div class="tabular" style="font-size: 32px; font-weight: 650; letter-spacing: -0.02em; color: ${m.length>0?"var(--warn)":"var(--fg-muted)"};">${m.length}</div>
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

    ${g.length>0?`
      <div class="card" style="margin-bottom: 32px;">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Offene Warnungen</h2>
          <a href="#/mails" class="btn sm">Alle verwalten →</a>
        </div>
        ${g.slice(0,5).map(w=>Za(w)).join("")}
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
  `,ze(c,e,r),e.querySelectorAll("#zeitraum-picker button").forEach(w=>{w.addEventListener("click",async()=>{if(w.disabled)return;const F=w.getAttribute("data-key"),j=F==="alles"?"alles":parseInt(F,10);e.querySelectorAll("#zeitraum-picker button").forEach(_=>_.classList.toggle("active",_===w)),await Ot("dashboardZeitraum",j),ze(j,e,r)})}),requestAnimationFrame(()=>{Je(e.querySelector("#mini-heatmap"),n,{monate:4})}),e.addEventListener("click",async w=>{const F=w.target.closest(".btn-dismiss");if(!F)return;const j=F.getAttribute("data-datum"),_=F.getAttribute("data-typ");if(!j||!_)return;await Zt(j,_),A("Warnung ausgeblendet.");const be=F.closest(".alert");be&&(be.style.display="none")})}function ze(e,t,a){const n=Ta(a,e),s=Ea(n);requestAnimationFrame(()=>{const o=t.querySelector("#saldo-chart");Fa(o,n)});const i=t.querySelector("#hero-bewegung");if(i){const o=s>.05?"up":s<-.05?"down":"flat",c=s>.05?"↑":s<-.05?"↓":"→";i.className=`saldo-trend ${o}`,i.innerHTML=`${c} ${Math.abs(s)<.01?"Unverändert":D(s,{signed:!0})} im Zeitraum`}const l=t.querySelector("#tage-info");if(l){const o=n.length;l.textContent=`${o} ${o===1?"Tag":"Tage"}`}const r=t.querySelector("#tage-liste");r&&(r.innerHTML=Ha(n.slice().reverse()))}function Ha(e){if(!e.length)return'<p class="hint">Keine Tage im Zeitraum.</p>';const t=Math.max(1,...e.map(a=>Math.abs(a.diff??0)));return`
    <div class="tages-liste">
      ${e.map(a=>{var o;const n=a.diff??0,s=n>0,i=Math.min(100,Math.abs(n)/t*100),l=s?"var(--success)":n<0?"var(--danger)":"var(--fg-subtle)",r=(o=a.zeitSpannen)==null?void 0:o[0];return`
          <a href="#/tag/${a.datum}" class="tag-row">
            <div class="tag-row-datum">
              <div class="tabular" style="font-weight: 600;">${T(b(new Date(a.datum)))}</div>
              <div class="tag-row-wd">${Na(a.wochentag)}</div>
            </div>
            <div class="tag-row-typ">
              ${a.tagestyp?`<span class="pill ${qa(a.tagestyp)}">${T(a.tagestyp)}</span>`:'<span style="color: var(--fg-subtle); font-size: 12px;">—</span>'}
            </div>
            <div class="tag-row-zeit tabular" style="color: var(--fg-muted); font-size: 13px;">
              ${r!=null&&r.von?T(r.von)+"–"+T(r.bis??"?"):""}
            </div>
            <div class="tag-row-ist tabular">
              <div style="font-weight: 500;">${a.ist!=null?a.ist.toFixed(2).replace(".",",")+"h":"—"}</div>
              <div style="color: var(--fg-subtle); font-size: 11px;">Soll: ${a.soll!=null?a.soll.toFixed(1).replace(".",",")+"h":"—"}</div>
            </div>
            <div class="tag-row-bar">
              <div class="bar-track">
                <div class="bar-zero"></div>
                <div class="bar-fill ${s?"pos":"neg"}" style="width: ${i}%; background: ${l};"></div>
              </div>
            </div>
            <div class="tag-row-diff tabular" style="color: ${s?"var(--success)":n<0?"var(--danger)":"var(--fg-muted)"}; font-weight: 600;">
              ${n!==0?(s?"+":"")+n.toFixed(2).replace(".",",")+"h":"0,00h"}
            </div>
            <div class="tag-row-saldo tabular" style="color: var(--fg-muted); font-size: 12px;">
              Saldo: ${a.saldo>=0?"+":""}${a.saldo.toFixed(2).replace(".",",")}h
            </div>
          </a>
        `}).join("")}
    </div>
  `}function Za(e){const t=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${t}</div>
      <div class="alert-body">
        <div class="alert-title">${T(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${T(e.beschreibung)}</p>
        <div class="alert-actions">
          ${e.mailVorlageKey?'<a href="#/mails" class="btn primary sm">✉ Mail schreiben</a>':""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
          <button class="btn ghost sm btn-dismiss" data-datum="${xe(e.datum)}" data-typ="${xe(e.typ)}">Ausblenden</button>
        </div>
      </div>
    </div>
  `}function Ga(){return`
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
  `}function Na(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function qa(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function T(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function xe(e){return T(e)}const Ja="/zeitnachweis-app/assets/pdf.worker.min-yatZIOMy.mjs";zt.workerSrc=Ja;const Se={Januar:1,Februar:2,März:3,Maerz:3,April:4,Mai:5,Juni:6,Juli:7,August:8,September:9,Oktober:10,November:11,Dezember:12},Ua=["Stempelzeit","Berufsschule Std. bez","Berufsschule","Dienstreise Arbeitszeit","Reise öff.VM/PKW Beifahr.","Reise öff.VM/PKW","Urlaub","Gleitzeit","Arbeitsunfähigkeit","TgDtEinh","Neujahr","Karfreitag","Ostermontg","Ostmontg","Osterso.","Hl.3 Kön.","Allerhlg","Pfingstmo","Fronleichn","TdDtEinh"];async function Qa(e){const a=await xt({data:e}).promise,n=[];for(let r=1;r<=a.numPages;r++){const c=await(await a.getPage(r)).getTextContent(),u=Ya(c.items);for(const p of u)n.push({page:r,text:p})}const s=Xa(n),{tage:i,monate:l}=en(n);return{meta:s,tage:i,monate:l}}function Ya(e){if(!e.length)return[];const t=e.slice().sort((l,r)=>{const o=r.transform[5]-l.transform[5];return Math.abs(o)>2?o:l.transform[4]-r.transform[4]}),a=[];let n=null,s=[];const i=3;for(const l of t){const r=l.transform[5];n==null||Math.abs(r-n)<=i?(s.push(l),n==null&&(n=r)):(a.push(ke(s)),s=[l],n=r)}return s.length&&a.push(ke(s)),a.filter(l=>l.trim().length>0)}function ke(e){e.sort((n,s)=>n.transform[4]-s.transform[4]);let t="",a=-1;for(const n of e){const s=n.transform[4];a>=0&&s-a>4?t+="  ":a>=0&&s-a>.5&&(t+=" "),t+=n.str,a=s+n.width}return t}function Xa(e){var a,n;const t={personalnummer:null,name:null,kostenstelle:null,personalbereich:null,einstellungsdatum:null,mitarbeiterkreis:null,arbeitszeitplanregel:null,zeitraumVon:null,zeitraumBis:null,stichtagAuswertung:null};for(let s=0;s<e.length;s++){const i=e[s].text,l=/vom\s+(\d{2}\.\d{2}\.\d{4})\s+bis\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);l&&(t.zeitraumVon=J(l[1]),t.zeitraumBis=J(l[2]));const r=/bis einschließlich dem\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);if(r&&(t.stichtagAuswertung=J(r[1])),/Personalnummer/i.test(i)&&/Kostenstelle/i.test(i)){const c=(((a=e[s+1])==null?void 0:a.text)??"").trim().split(/\s{2,}/);c.length>=3&&(t.personalnummer=c[0],t.kostenstelle=c[1],t.personalbereich=c[2])}if(/Einstellungsdatum/i.test(i)&&/Mitarbeiterkreis/i.test(i)){const c=(((n=e[s+1])==null?void 0:n.text)??"").trim().split(/\s{2,}/);c.length>=3&&(t.einstellungsdatum=J(c[0]),t.mitarbeiterkreis=c[1],t.arbeitszeitplanregel=c[2])}if(/Bei Rückfragen wenden Sie sich an/i.test(i))for(let o=s+1;o<Math.min(s+8,e.length);o++){const c=e[o].text.trim();if(/^[A-ZÄÖÜ][a-zäöüß]+(?:\s[A-ZÄÖÜ][a-zäöüß]+)+$/.test(c)&&!/kanarya/i.test(c)&&!/tel/i.test(c)){t.name=c;break}}}return t}function en(e,t){var o;const a=[],n=[];let s=null,i=null,l=!1,r=0;for(;r<e.length;){const c=e[r].text,u=/Monat:\s*([A-Za-zäöüÄÖÜß]+)\s*-\s*(\d{4})/.exec(c);if(u){const d=u[1].trim(),v=parseInt(u[2],10),$=Se[d]??Se[d.replace("ä","ae")]??null;$&&(s={jahr:v,monat:$,monatKey:`${v}-${String($).padStart(2,"0")}`},l=!0,i=null),r++;continue}if(/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.test(c)){const d=/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.exec(c),v=J(d[1]);i={monatKey:(s==null?void 0:s.monatKey)??Ze(v),stichtag:v,glz:{},flexi:{},zeitkonten:{},raw:{}},r=tn(e,r+1,i),n.push(i);continue}let p=s;const h=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)\b/.exec(c.trim());if(h&&s){const d=parseInt(h[1],10);l&&d>=20?p=sn(s):d<=15&&(l=!1)}const g=De(c,p);if(g){const d=[];let v=r+1;for(;v<e.length;){const m=e[v].text;if(/^\s*\d{4}\s+Umbuchung/.test(m)||De(m,s)||/Wochensumme/i.test(m)||/Monats.bersicht/i.test(m)||/Monat:\s*[A-Za-z]/i.test(m))break;const S=an(m);if(S){d.push(S),v++;continue}break}if(d.length&&g.zeitSpannen.push(...d),g.tagestyp==="Wochenende"||g.wochentag==="SA"||g.wochentag==="SO"){r=v;continue}(g.ist!=null||g.soll!=null||(((o=g.zeitSpannen)==null?void 0:o.length)??0)>0||g.tagestyp!=null)&&a.push(g),r=v;continue}r++}return{tage:a,monate:n}}function tn(e,t,a){let n=t;const s=/(\d{4,5}|KTAU|AZAU)\s*-\s*(.+?)\s+(-?[\d,.]+-?)(?=\s+(?:\d{4,5}|KTAU|AZAU)\s*-|\s*$)/g;for(;n<e.length;){const i=e[n].text.trim();if(/^Monat:\s/.test(i)||/^Einzelergebnisse\s/.test(i)||/^Tag\b/.test(i)||/^Wochensumme/.test(i)||/^\d{2}\s+(MO|DI|MI|DO|FR|SA|SO)\b/.test(i)||/^Übersicht für den Zeitraum/i.test(i)||/^Abwesenheitsansprüche/i.test(i))break;s.lastIndex=0;let l;for(;(l=s.exec(i))!=null;){const r=l[1],o=l[2].trim(),c=je(l[3]);a.raw[r]={beschreibung:o,wert:c},r==="0008"&&(a.glz.saldoVorperiode=c),r==="8016"&&(a.glz.saldoAktuellePeriode=c),r==="9802"&&(a.glz.umgebuchteStunden=c),r==="0005"&&(a.glz.saldoGesamt=c),r==="9803"&&(a.glz.ueberzaehligeStd=c),r==="0050"&&(a.zeitkonten.produktivstunden=c),r==="9011"&&(a.flexi.jahreskontoVorperiode=c),r==="9010"&&(a.flexi.jahreskontoSaldo=c),r==="9020"&&(a.flexi.langzeitkontoSaldo=c),r==="9203"&&(a.zeitkonten.azMonatsendeUeber216=c),r==="9207"&&(a.zeitkonten.auszahlungBav=c),r==="9205"&&(a.zeitkonten.summeAuszahlung=c)}if(n++,n-t>80)break}return n}function De(e,t){if(!t)return null;const a=e.trim(),n=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)(?:\s+(.+))?$/.exec(a);if(!n)return null;const s=parseInt(n[1],10),i=n[2],l=(n[3]??"").trim();let r=t.jahr,o=t.monat;const c=new Date(r,o-1,s),u={datum:Ma(c),datumDate:c.toISOString(),wochentag:i,tagNr:s,monatKey:Ze(c),wocheKey:$a(c),zeitSpannen:[],aktivitaeten:[],ist:null,soll:null,diff:null,pause:null,tazp:null,tagestyp:null,raw:a};return l?(nn(l,u),u):(u.tagestyp=["SA","SO"].includes(i)?"Wochenende":null,u)}function an(e){const t=e.trim(),a=/^(Stempelzeit|Reise öff\.VM\/PKW Beifahr\.|Reise öff\.VM\/PKW|Dienstreise Arbeitszeit)\s+(\d{2}:\d{2})\s+(\d{2}:\d{2})\s*$/.exec(t);return a?{aktivitaet:a[1],von:a[2],bis:a[3]}:null}function nn(e,t){let a=null,n=e;for(const u of Ua)if(e.startsWith(u)){a=u,n=e.slice(u.length).trim();break}a||(a=e.split(/\s+/)[0],n=e.slice(a.length).trim()),t.tagestyp=rn(a),t.aktivitaeten.push(a);const s=n.split(/\s+/).filter(Boolean),i=/^\d{2}:\d{2}$/,l=/^-?[\d,.]+-?$/;let r=0;s[r]&&i.test(s[r])&&s[r+1]&&i.test(s[r+1])&&(t.zeitSpannen.push({aktivitaet:a,von:s[r],bis:s[r+1]}),r+=2);const o=[];for(;r<s.length&&l.test(s[r]);){const u=je(s[r]);u!=null&&o.push(u),r++}let c=s[r];o.length>=5?([t.ist,t.soll,t.diff,t.pause]=o,c||(c=String(o[4]))):o.length===4?[t.ist,t.soll,t.diff,t.pause]=o:o.length===3?[t.ist,t.soll,t.diff]=o:o.length===2?[t.ist,t.soll]=o:o.length===1&&(t.ist=o[0]),c&&(t.tazp=String(c))}function sn(e){if(!e)return null;let t=e.monat-1,a=e.jahr;return t<1&&(t=12,a-=1),{jahr:a,monat:t,monatKey:`${a}-${String(t).padStart(2,"0")}`}}function rn(e){return e?/^Stempelzeit$/i.test(e)?"Stempelzeit":/^Berufsschule Std\. bez$/i.test(e)||/^Berufsschule$/i.test(e)?"Berufsschule":/Dienstreise/i.test(e)||/Reise/i.test(e)?"Dienstreise":/^Urlaub$/i.test(e)?"Urlaub":/^Gleitzeit$/i.test(e)?"Gleitzeit":/Arbeitsunf.higkeit/i.test(e)?"Arbeitsunfähigkeit":/^(Neujahr|Karfreitag|Ostermontg|Ostmontg|Osterso\.|Hl\.3 Kön\.|Allerhlg|Pfingstmo|Fronleichn|TdDtEinh|TgDtEinh)$/i.test(e)?"Feiertag":e:null}async function ln({root:e}){const t=await Ve(),a=await B();e.innerHTML=`
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
        ${t.length===0?'<div class="empty-state"><div class="empty-state-icon">📭</div><p>Noch keine Uploads</p></div>':Ue(t)}
      </div>
    </div>
  `;const n=e.querySelector("#upload-zone"),s=e.querySelector("#file-input");n.addEventListener("click",()=>s.click()),n.addEventListener("dragover",i=>{i.preventDefault(),n.classList.add("drag")}),n.addEventListener("dragleave",()=>n.classList.remove("drag")),n.addEventListener("drop",async i=>{var r;i.preventDefault(),n.classList.remove("drag");const l=(r=i.dataTransfer.files)==null?void 0:r[0];l&&await Ae(l,e,a)}),s.addEventListener("change",async i=>{var r;const l=(r=i.target.files)==null?void 0:r[0];l&&await Ae(l,e,a)}),e.querySelector("#btn-export").addEventListener("click",cn),e.querySelector("#btn-import").addEventListener("click",()=>e.querySelector("#import-input").click()),e.querySelector("#import-input").addEventListener("change",dn),e.querySelector("#btn-clear-parsed").addEventListener("click",on),e.querySelector("#btn-reset").addEventListener("click",un)}async function on(){confirm("PDF-abgeleitete Daten (Tage, Monate, Uploads) werden gelöscht. Profil und Mail-Vorlagen bleiben erhalten. Fortfahren?")&&(await Vt(),A("Daten gelöscht. Profil bleibt."),setTimeout(()=>location.reload(),600))}function Ue(e){return`
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
            <td>${C(gn(t.hochladeDatum))}</td>
            <td>${C(t.dateiname||"—")}</td>
            <td>${t.zeitraumVon?C(b(new Date(t.zeitraumVon))):"—"} – ${t.zeitraumBis?C(b(new Date(t.zeitraumBis))):"—"}</td>
            <td>${t.stichtagAuswertung?C(b(new Date(t.stichtagAuswertung))):"—"}</td>
            <td class="num">${t.tageCount??"—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}async function Ae(e,t,a){var i,l,r,o;const n=t.querySelector("#upload-status"),s=t.querySelector("#upload-zone");s.style.pointerEvents="none",s.style.opacity="0.6",n.innerHTML=`
    <div class="alert severity-info">
      <div class="loader-ring" style="width: 24px; height: 24px; border-width: 2px;"></div>
      <div class="alert-body">
        <div class="alert-title">PDF wird verarbeitet…</div>
        <p style="margin: 4px 0; font-size: 13px;"><strong>${C(e.name)}</strong> — das kann bei großen PDFs einige Sekunden dauern.</p>
      </div>
    </div>`;try{const c=await e.arrayBuffer(),u=await Qa(c);await Ct(u.tage),await It(u.monate),await Bt({dateiname:e.name,zeitraumVon:((i=u.meta.zeitraumVon)==null?void 0:i.toISOString())??null,zeitraumBis:((l=u.meta.zeitraumBis)==null?void 0:l.toISOString())??null,stichtagAuswertung:((r=u.meta.stichtagAuswertung)==null?void 0:r.toISOString())??null,tageCount:u.tage.length,monateCount:u.monate.length});const p=await W(),h=xa(p),g={...Re(),...a};u.meta.personalnummer&&!a.personalnummer&&(g.name=u.meta.name??a.name,g.personalnummer=u.meta.personalnummer,g.einstellungsdatum=((o=u.meta.einstellungsdatum)==null?void 0:o.toISOString())??a.einstellungsdatum,g.arbeitszeitplanregel=u.meta.arbeitszeitplanregel??a.arbeitszeitplanregel),(h.wochentageWoechentlich.length>0||h.wochentage14Taegig.length>0)&&(g.berufsschulMuster=h),await ce(g),n.innerHTML=`
      <div class="alert severity-info" style="border-color: var(--success); background: var(--success-bg);">
        <div class="alert-icon" style="background: var(--success);">✓</div>
        <div class="alert-body">
          <div class="alert-title">PDF erfolgreich eingelesen</div>
          <p style="margin: 4px 0; font-size: 13px;">
            ${u.tage.length} Tage · ${u.monate.length} Monatsübersichten
            ${u.meta.zeitraumVon?` · Zeitraum: ${b(u.meta.zeitraumVon)} – ${b(u.meta.zeitraumBis)}`:""}
          </p>
          <div class="alert-actions">
            <a href="#/" class="btn primary sm">Zum Dashboard</a>
            <a href="#/monat" class="btn sm">Monate ansehen</a>
          </div>
        </div>
      </div>
    `,A(`PDF verarbeitet: ${u.tage.length} Tage.`);const d=await Ve();t.querySelector("#uploads-list").innerHTML=Ue(d)}catch(c){console.error(c),n.innerHTML=`
      <div class="alert severity-error">
        <div class="alert-icon">!</div>
        <div class="alert-body">
          <div class="alert-title">Fehler beim Parsen</div>
          <p style="margin: 4px 0; font-size: 13px;">${C(c.message||String(c))}</p>
          <p style="margin: 4px 0; font-size: 12px; color: var(--fg-muted);">Prüfe, ob es sich um einen Putzmeister-SAP-Zeitnachweis handelt. Bei einem anderen Layout kann der Parser fehlschlagen.</p>
        </div>
      </div>
    `,me("PDF konnte nicht gelesen werden.")}finally{s.style.pointerEvents="",s.style.opacity=""}}async function cn(){try{const e=await jt(),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),a=URL.createObjectURL(t),n=document.createElement("a"),s=new Date().toISOString().slice(0,10);n.href=a,n.download=`zeitnachweis-backup-${s}.json`,n.click(),URL.revokeObjectURL(a),A("Backup heruntergeladen.")}catch(e){me(`Export fehlgeschlagen: ${e.message}`)}}async function dn(e){var a;const t=(a=e.target.files)==null?void 0:a[0];if(t)try{const n=await t.text(),s=JSON.parse(n);if(!confirm("Existierende Daten werden überschrieben. Fortfahren?"))return;await _t(s),A("Backup erfolgreich importiert. Seite wird neu geladen…"),setTimeout(()=>location.reload(),800)}catch(n){me(`Import fehlgeschlagen: ${n.message}`)}}async function un(){confirm("ALLE Daten endgültig löschen? Das lässt sich nicht rückgängig machen.")&&confirm("Wirklich alle Daten löschen? Letzte Warnung.")&&(await Rt(),A("Alle Daten gelöscht."),setTimeout(()=>location.reload(),600))}function gn(e){if(!e)return"—";const t=new Date(e);return t.toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"})+" "+t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}const Pe={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag"};async function hn({root:e}){var s,i,l,r;const t=await B(),a=t.berufsschulMuster??{},n=(((s=a.wochentageWoechentlich)==null?void 0:s.length)??0)>0||(((i=a.wochentage14Taegig)==null?void 0:i.length)??0)>0;e.innerHTML=`
    <h1 class="view-title">Profil</h1>
    <p class="view-subtitle">Persönliche Daten, Pausen-Regel und Mail-Kontakt.</p>

    <form id="profil-form" class="grid cols-2" style="gap: 24px;">
      <div class="card">
        <h2>Persönliche Daten</h2>
        <div class="form-group">
          <label>Name</label>
          <input type="text" name="name" value="${X(t.name)}" placeholder="Florian Kern" />
        </div>
        <div class="form-group">
          <label>Personalnummer</label>
          <input type="text" name="personalnummer" value="${X(t.personalnummer)}" placeholder="00101473" />
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
          <input type="email" name="zeitwirtschaftEmail" value="${X(t.zeitwirtschaftEmail)}" />
        </div>
        <div class="form-group">
          <label>Anrede in Mails</label>
          <input type="text" name="zeitwirtschaftAnrede" value="${X(t.zeitwirtschaftAnrede)}" placeholder="Frau Kanarya" />
        </div>
      </div>

      <div class="card" style="grid-column: 1 / -1;">
        <h2>Berufsschul-Rhythmus <span style="font-size: 11px; font-weight: 500; color: var(--fg-subtle); text-transform: uppercase; letter-spacing: 0.05em; margin-left: 8px;">Automatisch erkannt</span></h2>
        ${n?`
          <div class="tag-detail">
            <div class="tag-detail-label">Wöchentlich</div>
            <div class="tag-detail-value"><strong>${((l=a.wochentageWoechentlich)==null?void 0:l.map(o=>Pe[o]).join(", "))||"—"}</strong></div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Alle 2 Wochen</div>
            <div class="tag-detail-value"><strong>${((r=a.wochentage14Taegig)==null?void 0:r.map(o=>Pe[o]).join(", "))||"—"}</strong>${a.referenzDatum14Taegig?` <span class="hint">(Anker: ${b(new Date(a.referenzDatum14Taegig))})</span>`:""}</div>
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
  `,e.querySelector("#profil-form").addEventListener("submit",async o=>{var p,h,g,d;o.preventDefault();const c=new FormData(o.target),u={...t,name:((p=c.get("name"))==null?void 0:p.trim())||"",personalnummer:((h=c.get("personalnummer"))==null?void 0:h.trim())||"",geburtsdatum:c.get("geburtsdatum")?new Date(c.get("geburtsdatum")).toISOString():null,pausenRegel:c.get("pausenRegel")||"auto",zeitwirtschaftEmail:((g=c.get("zeitwirtschaftEmail"))==null?void 0:g.trim())||"zeitwirtschaft@putzmeister.com",zeitwirtschaftAnrede:((d=c.get("zeitwirtschaftAnrede"))==null?void 0:d.trim())||"Frau Kanarya"};await ce(u),A("Profil gespeichert.")})}function X(e){return String(e??"").replace(/"/g,"&quot;")}async function mn({root:e}){var s;const t=await Q(),a=await W(),n={};for(const i of a)n[s=i.monatKey]??(n[s]=[]),n[i.monatKey].push(i);if(t.length===0){e.innerHTML=wn("Noch keine Monatsdaten. Lade zuerst ein PDF unter Daten hoch.");return}e.innerHTML=`
    <h1 class="view-title">Monate</h1>
    <p class="view-subtitle">${t.length} Monate erfasst. Klicke für Details.</p>

    <div class="grid cols-2">
      ${t.slice().reverse().map(i=>{var h;const r=(n[i.monatKey]??[]).filter(g=>g.ist!=null&&g.ist>0),o=r.reduce((g,d)=>g+(d.ist??0),0),c=r.reduce((g,d)=>g+(d.soll??0),0),u=o-c,p=(h=i.glz)==null?void 0:h.saldoGesamt;return`
          <a href="#/monat/${i.monatKey}" class="card" style="text-decoration: none; color: inherit; display: block;">
            <div class="card-split" style="margin-bottom: 12px;">
              <h2 style="margin: 0;">${re(i.monatKey)}</h2>
              <span class="saldo-trend ${p>.05?"up":p<-.05?"down":"flat"}" style="margin: 0; font-size: 12px;">
                Saldo: <strong>${D(p??0,{signed:!0})}</strong>
              </span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 12px;">
              <div>
                <div style="color: var(--fg-subtle); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Arbeitstage</div>
                <div style="font-size: 22px; font-weight: 600;" class="tabular">${r.length}</div>
              </div>
              <div>
                <div style="color: var(--fg-subtle); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Ist / Soll</div>
                <div style="font-size: 14px; font-weight: 500;" class="tabular">${o.toFixed(1)} / ${c.toFixed(1)}h</div>
              </div>
              <div>
                <div style="color: var(--fg-subtle); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Diff</div>
                <div class="tabular ${u>.05?"positive":u<-.05?"negative":""}" style="font-size: 14px; font-weight: 500; color: ${u>.05?"var(--success)":u<-.05?"var(--danger)":"var(--fg)"};">${D(u,{signed:!0})}</div>
              </div>
            </div>
          </a>
        `}).join("")}
    </div>
  `}async function fn({params:e,root:t}){const a=e.yyyymm,[n,s,i]=await Promise.all([W(),Q(),B()]),l=s.find(c=>c.monatKey===a),r=n.filter(c=>c.monatKey===a).sort((c,u)=>c.datum.localeCompare(u.datum));if(!r.length){t.innerHTML=`<h1 class="view-title">Monat ${re(a)}</h1><p class="view-subtitle">Keine Daten für diesen Monat.</p><a href="#/monat" class="btn">← Alle Monate</a>`;return}const o=de(n,i,new Date).filter(c=>c.datum.startsWith(a));t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat" class="btn sm">← Alle Monate</a>
    </div>
    <h1 class="view-title">${re(a)}</h1>
    <p class="view-subtitle">${r.length} Tage · ${o.length} Auffälligkeiten</p>

    ${l?pn(l):""}

    <div class="card" style="margin-bottom: 24px;">
      <h2>Tagesbalken</h2>
      <div class="chart-wrap tall"><canvas id="chart-monat"></canvas></div>
    </div>

    ${o.length?`
      <div class="card" style="margin-bottom: 24px;">
        <h2>Auffälligkeiten</h2>
        ${o.map(c=>bn(c)).join("")}
      </div>
    `:""}

    <div class="card">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Tage</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">Klicke auf ein Datum für Details</span>
      </div>
      ${vn(r)}
    </div>
  `,ue(t.querySelector("#chart-monat"),r)}function pn(e){var n,s,i,l;const t=((n=e.glz)==null?void 0:n.saldoGesamt)??0;return`
    <div class="grid cols-4" style="margin-bottom: 24px;">
      <div class="card">
        <h3>GLZ-Saldo gesamt</h3>
        <div class="tabular ${t>0?"positive":t<0?"negative":""}" style="font-size: 28px; font-weight: 650;">${D(t,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Vorperiode</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${D(((s=e.glz)==null?void 0:s.saldoVorperiode)??0,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Akt. Periode</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${D(((i=e.glz)==null?void 0:i.saldoAktuellePeriode)??0,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Produktivstd.</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${D(((l=e.zeitkonten)==null?void 0:l.produktivstunden)??0,{suffix:""})}</div>
      </div>
    </div>
  `}function vn(e){return`
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
              <td><a href="#/tag/${t.datum}" style="color: inherit; text-decoration: none;"><span class="tabular">${b(new Date(t.datum))}</span> <span style="color: var(--fg-subtle);">${t.wochentag}</span></a></td>
              <td>${t.tagestyp?`<span class="pill ${yn(t.tagestyp)}">${ee(t.tagestyp)}</span>`:"—"}</td>
              <td class="tabular">${(n==null?void 0:n.von)??"—"}</td>
              <td class="tabular">${(n==null?void 0:n.bis)??"—"}</td>
              <td class="num tabular">${t.ist!=null?t.ist.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular">${t.soll!=null?t.soll.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular ${a}">${t.diff!=null?D(t.diff,{signed:!0,suffix:""}):"—"}</td>
              <td class="num tabular">${t.pause!=null?t.pause.toFixed(2).replace(".",","):"—"}</td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `}function bn(e){return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i"}</div>
      <div class="alert-body">
        <div class="alert-title">${ee(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${ee(e.beschreibung)}</p>
        ${e.mailVorlageKey?`<div class="alert-actions"><a href="#/mails" class="btn primary sm">Mail schreiben</a><a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a></div>`:""}
      </div>
    </div>
  `}function re(e){const[t,a]=e.split("-"),n=new Date(parseInt(t),parseInt(a)-1,1);return x(n,"LLLL yyyy",{locale:I})}function yn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function wn(e){return`<div class="empty-state"><div class="empty-state-icon">📭</div><p>${ee(e)}</p><a href="#/daten" class="btn primary">Zu Daten</a></div>`}function ee(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function $n({root:e}){var s;const t=await W();if(!t.length){e.innerHTML='<h1 class="view-title">Wochen</h1><p class="view-subtitle">Noch keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a={};for(const i of t)a[s=i.wocheKey]??(a[s]={key:i.wocheKey,tage:[],ist:0,soll:0}),a[i.wocheKey].tage.push(i),a[i.wocheKey].ist+=i.ist??0,a[i.wocheKey].soll+=i.soll??0;const n=Object.keys(a).sort().reverse();e.innerHTML=`
    <h1 class="view-title">Wochen</h1>
    <p class="view-subtitle">${n.length} Wochen erfasst.</p>

    <div>
      ${n.map(i=>{const l=a[i],r=l.ist-l.soll,o=r>.05?"positive":r<-.05?"negative":"";return`
          <a href="#/woche/${i}" class="list-item">
            <div class="tabular" style="font-size: 16px; font-weight: 600; color: var(--fg-muted);">${te(Qe(i))}</div>
            <div>
              <div class="list-item-title">Ist: ${l.ist.toFixed(2).replace(".",",")}h · Soll: ${l.soll.toFixed(2).replace(".",",")}h</div>
              <div class="list-item-sub">${l.tage.length} Tage erfasst</div>
            </div>
            <div class="tabular ${o}" style="font-weight: 600; font-size: 16px;">${D(r,{signed:!0})}</div>
            <div style="color: var(--fg-subtle);">→</div>
          </a>
        `}).join("")}
    </div>
  `}async function Mn({params:e,root:t}){const a=await W(),n=e.yyyykw,s=a.filter(o=>o.wocheKey===n).sort((o,c)=>o.datum.localeCompare(c.datum));if(!s.length){t.innerHTML=`<h1 class="view-title">KW ${te(n)}</h1><p>Keine Daten.</p><a href="#/woche" class="btn">← Alle Wochen</a>`;return}const i=s.reduce((o,c)=>o+(c.ist??0),0),l=s.reduce((o,c)=>o+(c.soll??0),0),r=i-l;t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/woche" class="btn sm">← Alle Wochen</a>
    </div>
    <h1 class="view-title">${te(Qe(n))}</h1>
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
        <div class="tabular ${r>.05?"positive":r<-.05?"negative":""}" style="font-size: 28px; font-weight: 650; color: ${r>.05?"var(--success)":r<-.05?"var(--danger)":"var(--fg)"};">${D(r,{signed:!0})}</div>
      </div>
    </div>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Tagesverteilung</h2>
      <div class="chart-wrap"><canvas id="chart-woche"></canvas></div>
    </div>

    <div class="card">
      <h2>Tage dieser Woche</h2>
      ${zn(s)}
    </div>
  `,ue(t.querySelector("#chart-woche"),s)}function zn(e){return`
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
              <td><a href="#/tag/${t.datum}" style="color: inherit;"><span class="tabular">${x(z(t.datum),"dd.MM.yyyy")}</span> ${t.wochentag}</a></td>
              <td>${t.tagestyp?`<span class="pill ${xn(t.tagestyp)}">${te(t.tagestyp)}</span>`:"—"}</td>
              <td class="tabular">${(n==null?void 0:n.von)??"—"}</td>
              <td class="tabular">${(n==null?void 0:n.bis)??"—"}</td>
              <td class="num tabular">${t.ist!=null?t.ist.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular">${t.soll!=null?t.soll.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular ${a}">${t.diff!=null?D(t.diff,{signed:!0,suffix:""}):"—"}</td>
              <td class="num tabular">${t.pause!=null?t.pause.toFixed(2).replace(".",","):"—"}</td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `}function Qe(e){const[t,a]=e.split("-");return`KW ${a} · ${t}`}function xn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function te(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function Sn({params:e,root:t}){var o,c,u;const a=e.datum,n=await f.tage.get(a),s=await B();if(!n){t.innerHTML=`<h1 class="view-title">Tag nicht gefunden</h1><p>Für ${a} liegen keine Daten vor.</p><a href="#/" class="btn">← Dashboard</a>`;return}const i=z(a),l=n.tagestyp==="Stempelzeit"?Ne(n,s):null,r=Ge(i,s.berufsschulMuster);t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat/${a.slice(0,7)}" class="btn sm">← Zum Monat</a>
    </div>
    <h1 class="view-title">${He(i)}</h1>
    <p class="view-subtitle">${n.tagestyp??"Kein Typ"} · KW ${(o=n.wocheKey)==null?void 0:o.split("-")[1]}</p>

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${n.ist!=null?n.ist.toFixed(2).replace(".",",")+"h":"—"}</div>
        <div class="hint">= ${n.ist!=null?_e(n.ist):"—"}</div>
      </div>
      <div class="card">
        <h3>Soll-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${n.soll!=null?n.soll.toFixed(2).replace(".",",")+"h":"—"}</div>
      </div>
      <div class="card">
        <h3>Differenz</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${n.diff>.05?"var(--success)":n.diff<-.05?"var(--danger)":"var(--fg)"};">${n.diff!=null?D(n.diff,{signed:!0}):"—"}</div>
      </div>
    </div>

    <div class="grid cols-2" style="gap: 24px;">
      <div class="card">
        <h2>Zeitstempel</h2>
        ${(c=n.zeitSpannen)!=null&&c.length?n.zeitSpannen.map(p=>`
              <div class="tag-detail">
                <div class="tag-detail-label">${q(p.aktivitaet??"Stempelzeit")}</div>
                <div class="tag-detail-value tabular">${p.von??"—"} – ${p.bis??"—"}</div>
              </div>
            `).join(""):'<p class="hint">Keine Stempelzeiten für diesen Tag.</p>'}
      </div>

      <div class="card">
        <h2>Klassifikation</h2>
        <div class="tag-detail">
          <div class="tag-detail-label">Tagestyp</div>
          <div class="tag-detail-value">${n.tagestyp?`<span class="pill ${kn(n.tagestyp)}">${q(n.tagestyp)}</span>`:"—"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Laut Profil</div>
          <div class="tag-detail-value">${r?"🎓 Berufsschultag erwartet":"Regulärer Werktag"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">TAZP-Code</div>
          <div class="tag-detail-value"><code>${q(n.tazp??"—")}</code></div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Monat</div>
          <div class="tag-detail-value">${q(n.monatKey)}</div>
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
              <div class="alert-body">${q(l.warnung)}</div>
            </div>
          `:""}
        </div>
      `:""}
    </div>
  `}function kn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function q(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function Dn({root:e}){const[t,a]=await Promise.all([W(),Q()]);if(!t.length){e.innerHTML='<h1 class="view-title">Analytics</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}e.innerHTML=`
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
  `,requestAnimationFrame(()=>{Wa(e.querySelector("#c-saldo"),a),Je(e.querySelector("#heatmap"),t,{monate:8}),Ba(e.querySelector("#c-istsoll"),t),Ra(e.querySelector("#c-kumulativ"),t),Ka(e.querySelector("#c-startend"),t),Ca(e.querySelector("#c-wochentag"),t),Oa(e.querySelector("#c-pausen"),t),Ia(e.querySelector("#c-donut"),t);const n=t.slice(-30);ue(e.querySelector("#c-alle-tage"),n)})}async function An({root:e}){const t=await W();if(!t.length){e.innerHTML='<h1 class="view-title">Berichtsheft</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a=[...new Set(t.map(i=>i.monatKey))].sort().reverse();e.innerHTML=`
    <h1 class="view-title">Berichtsheft-Export</h1>
    <p class="view-subtitle">Kopiere die Arbeitsstunden im HH:MM-Format direkt in dein Berichtsheft.</p>

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 16px; align-items: center;">
        <h2 style="margin: 0;">Filter</h2>
        <div style="display: flex; gap: 8px; align-items: center;">
          <label style="color: var(--fg-muted); font-size: 13px;">Monat:</label>
          <select id="filter-monat">
            <option value="">Alle</option>
            ${a.map(i=>`<option value="${i}">${Ln(i)}</option>`).join("")}
          </select>
          <button class="btn sm" id="btn-copy-all">Alle sichtbaren kopieren</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div id="liste"></div>
    </div>
  `;const n=e.querySelector("#filter-monat");n.addEventListener("change",()=>s()),e.querySelector("#btn-copy-all").addEventListener("click",()=>{const i=e.querySelectorAll("#liste tr[data-copy]"),l=Array.from(i).map(r=>r.getAttribute("data-copy")).join(`
`);navigator.clipboard.writeText(l).then(()=>A(`${i.length} Zeilen kopiert.`))});function s(){const i=n.value,r=(i?t.filter(o=>o.monatKey===i):t).filter(o=>o.ist!=null&&o.ist>0&&o.tagestyp!=="Wochenende");e.querySelector("#liste").innerHTML=Pn(r),e.querySelectorAll(".copy-val").forEach(o=>{o.addEventListener("click",async()=>{const c=o.getAttribute("data-val");await navigator.clipboard.writeText(c),o.classList.add("ok");const u=o.textContent;o.textContent="✓ kopiert",setTimeout(()=>{o.classList.remove("ok"),o.textContent=u},1200)})})}s()}function Pn(e){return e.length?`
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
        ${e.map(t=>{const a=_e(t.ist),n=`${b(z(t.datum))}	${a}`;return`
            <tr data-copy="${Te(n)}">
              <td class="tabular">${b(z(t.datum))}</td>
              <td>${Tn(t.wochentag)}</td>
              <td>${t.tagestyp?`<span class="pill ${En(t.tagestyp)}">${Ye(t.tagestyp)}</span>`:"—"}</td>
              <td class="num tabular">${t.ist.toFixed(2).replace(".",",")}</td>
              <td class="num tabular" style="font-weight: 600;">${a}</td>
              <td><button class="copy-val" data-val="${Te(a)}">📋 ${a}</button></td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `:'<p style="color: var(--fg-muted);">Keine Tage in dieser Auswahl.</p>'}function Tn(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function Ln(e){const[t,a]=e.split("-");return x(new Date(parseInt(t),parseInt(a)-1,1),"LLLL yyyy",{locale:I})}function En(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function Ye(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Te(e){return Ye(e)}const Fn={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"},fe={bs_tag_fehlt:{key:"bs_tag_fehlt",titel:"Berufsschultag fehlt",beschreibung:"Wenn ein Berufsschultag komplett nicht im Zeitnachweis eingetragen wurde.",betreff:"Bitte um Korrektur Zeitnachweis — Berufsschultag {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

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
Personalnummer {personalnr}`}};function Xe(e,t){const a=fe[e];return a?{...a,...t??{}}:null}function et(e,t){const a=Le(e.text,t);return{betreff:Le(e.betreff,t),text:a}}function Le(e,t){return e.replace(/\{(\w+)\}/g,(a,n)=>t[n]!=null?String(t[n]):`{${n}}`)}function Wn(e,t){const a=t.datum?new Date(t.datum):null,n=a?He(a).split(", ")[1]:"";return{name:e.name||"Ihr Mitarbeiter",personalnr:e.personalnummer||"—",kostenstelle:e.kostenstelle||"—",datum:n,wochentag:Fn[t.wochentag]??t.wochentag??"",zeitwirtschaft_anrede:e.zeitwirtschaftAnrede||"Frau Kanarya",zeitwirtschaft_email:e.zeitwirtschaftEmail||"zeitwirtschaft@putzmeister.com",ist:t.ist!=null?t.ist.toFixed(2).replace(".",","):"",soll:t.soll!=null?t.soll.toFixed(2).replace(".",","):"",abgezogen:t.abgezogen!=null?Math.round(t.abgezogen*60):"",gestempelt:t.gestempelt!=null?Math.round(t.gestempelt*60):"",verlust:t.verlustMinuten??""}}function Kn(e,t,a){const n=et(t,a),s=e.zeitwirtschaftEmail||"zeitwirtschaft@putzmeister.com",i=new URLSearchParams;return i.set("subject",n.betreff),i.set("body",n.text),`mailto:${encodeURIComponent(s)}?${i.toString().replace(/\+/g,"%20")}`}async function On({root:e}){const[t,a,n,s]=await Promise.all([W(),B(),Q(),Ht()]),i=Object.fromEntries(s.map(o=>[o.key,o])),l=de(t,a,new Date).filter(o=>o.mailVorlageKey),r=qe(n);e.innerHTML=`
    <h1 class="view-title">Mail-Vorlagen</h1>
    <p class="view-subtitle">Vorformulierte Mails an die Zeitwirtschaft bei erkannten Fehlern im Zeitnachweis.</p>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Offene Warnungen mit Mail-Vorschlag</h2>
      <p class="hint" style="margin-bottom: 16px;">Diese Warnungen haben einen roten Schweregrad und sind eine direkte Mail wert.</p>

      ${l.length===0?'<div class="empty-state"><div class="empty-state-icon">✓</div><p>Keine akuten Warnungen — top.</p></div>':l.map(o=>Cn(o,a,i)).join("")}

      ${r.length>0?`
        <h3 style="margin-top: 24px;">Saldo-Plausibilität</h3>
        ${r.map(o=>`
          <div class="alert severity-warn">
            <div class="alert-icon">⚠</div>
            <div class="alert-body">
              <div class="alert-title">${P(o.titel)}</div>
              <p style="margin: 4px 0; font-size: 13px;">${P(o.beschreibung)}</p>
            </div>
          </div>
        `).join("")}
      `:""}
    </div>

    <div class="card">
      <h2>Vorlagen verwalten</h2>
      <p class="hint" style="margin-bottom: 16px;">Passe die Texte an deinen Stil an. Platzhalter wie <code>{name}</code>, <code>{datum}</code>, <code>{wochentag}</code>, <code>{ist}</code>, <code>{soll}</code> werden automatisch gefüllt.</p>

      <div id="vorlagen-editor">
        ${Object.keys(fe).map(o=>{const c=Xe(o,i[o]);return In(c)}).join("")}
      </div>
    </div>
  `,Bn(e),Rn(e)}function Cn(e,t,a){const n=Xe(e.mailVorlageKey,a[e.mailVorlageKey]);if(!n)return"";const s=Wn(t,e),i=et(n,s),l=Kn(t,n,s);return`
    <div class="alert severity-${e.schweregrad}" style="flex-direction: column; align-items: stretch;">
      <div style="display: flex; align-items: flex-start; gap: 12px;">
        <div class="alert-icon">${e.schweregrad==="error"?"!":"⚠"}</div>
        <div class="alert-body">
          <div class="alert-title">${P(e.titel)}</div>
          <p style="margin: 4px 0; font-size: 13px;">${P(e.beschreibung)}</p>
        </div>
      </div>
      <details style="margin-top: 12px;">
        <summary style="cursor: pointer; color: var(--fg-muted); font-size: 13px;">Mail-Vorschau anzeigen</summary>
        <div style="background: var(--surface-2); border-radius: var(--radius-md); padding: 12px; margin-top: 8px; font-family: var(--font-mono); font-size: 12px; white-space: pre-wrap; line-height: 1.5;">
<strong>An:</strong> ${P(t.zeitwirtschaftEmail||"")}
<strong>Betreff:</strong> ${P(i.betreff)}

${P(i.text)}
        </div>
      </details>
      <div class="alert-actions" style="margin-top: 12px;">
        <a class="btn primary sm" href="${l}" target="_blank" rel="noopener">✉ Mail-Client öffnen</a>
        <button class="btn sm btn-copy-mail" data-subject="${le(i.betreff)}" data-body="${le(i.text)}">📋 Betreff + Text kopieren</button>
      </div>
    </div>
  `}function In(e){return`
    <div class="vorlagen-item" data-key="${e.key}" style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
      <div class="card-split" style="margin-bottom: 12px;">
        <div>
          <h3 style="text-transform: none; letter-spacing: 0; color: var(--fg); font-size: 16px;">${P(e.titel)}</h3>
          <p class="hint" style="margin: 4px 0;">${P(e.beschreibung)}</p>
        </div>
        <button class="btn sm btn-reset-vorlage" data-key="${e.key}">Auf Default zurücksetzen</button>
      </div>
      <div class="form-group">
        <label>Betreff</label>
        <input type="text" class="v-betreff" value="${le(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 240px;">${P(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function Bn(e){e.querySelectorAll(".btn-save-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-key"),n=t.closest(".vorlagen-item"),s=n.querySelector(".v-betreff").value,i=n.querySelector(".v-text").value;await we(a,{betreff:s,text:i}),A("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-key"),n=fe[a];n&&confirm(`Vorlage "${n.titel}" auf Default zurücksetzen?`)&&(await we(a,{betreff:n.betreff,text:n.text}),A("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function Rn(e){e.querySelectorAll(".btn-copy-mail").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-subject"),n=t.getAttribute("data-body"),s=`Betreff: ${a}

${n}`;await navigator.clipboard.writeText(s),A("Mail-Text kopiert.")})})}function P(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function le(e){return P(e)}async function Vn({root:e}){const t=Ce(),a=await B();e.innerHTML=`
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
  `,e.querySelectorAll("[data-theme]").forEach(n=>{n.addEventListener("click",()=>{const s=n.getAttribute("data-theme");oe(s),e.querySelectorAll("[data-theme]").forEach(i=>i.classList.toggle("active",i===n)),A(`Theme: ${n.textContent.trim()}`)})}),e.querySelector("#pause-sel").addEventListener("change",async n=>{const s={...a,pausenRegel:n.target.value};await ce(s),A("Pausen-Regel gespeichert.")})}async function Ee(){var t;St();const e=document.getElementById("content");(t=document.getElementById("theme-toggle"))==null||t.addEventListener("click",()=>kt()),Dt(()=>{Et()}),await Wt()&&setTimeout(()=>{he('Parser wurde aktualisiert. Bitte lade deinen Zeitnachweis unter "Daten" neu hoch.',{type:"info",duration:12e3})},500),k("/",Me),k("/dashboard",Me),k("/analytics",Dn),k("/monat",mn),k("/monat/:yyyymm",fn),k("/woche",$n),k("/woche/:yyyykw",Mn),k("/tag/:datum",Sn),k("/berichtsheft",An),k("/mails",On),k("/profil",hn),k("/daten",ln),k("/einstellungen",Vn),Tt(e),location.hash||Pt("/")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ee):Ee();
