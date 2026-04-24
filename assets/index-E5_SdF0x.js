import{D as st}from"./dexie-BODkcwel.js";import{b as se,a as H,c as Z,d as it,f as x,e as U,i as Ie,p as rt,g as lt,h as ot,j as z,k as Be,l as ct,s as dt,m as ut}from"./datefns-Dq49jaKA.js";import{C as L,L as gt,B as ht,D as mt,S as ft,a as pt,b as vt,P as bt,A as yt,c as wt,d as $t,T as Mt,p as zt,e as xt,i as St}from"./chartjs-CRgZvhTJ.js";import{_ as kt,a as Dt}from"./pdfjs-BDGsuRSB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();const ne="theme";function At(){const e=localStorage.getItem(ne)??"auto";ce(e)}function ce(e){e==="auto"?document.documentElement.removeAttribute("data-theme"):document.documentElement.setAttribute("data-theme",e),localStorage.setItem(ne,e),Lt(e)}function Pt(){const e=localStorage.getItem(ne)??"auto",t=e==="auto"?"light":e==="light"?"dark":"auto";return ce(t),Re(t),t}const ie=new Set;function Tt(e){return ie.add(e),()=>ie.delete(e)}function Re(e){for(const t of ie)try{t(e)}catch(a){console.error(a)}}var Ce;if(typeof window<"u"&&window.matchMedia){const e=window.matchMedia("(prefers-color-scheme: dark)");(Ce=e.addEventListener)==null||Ce.call(e,"change",()=>{Ve()==="auto"&&Re("auto")})}function Lt(e){const t=document.getElementById("theme-toggle");if(!t)return;const a=t.querySelector(".theme-label"),n=t.querySelector(".theme-icon-dark"),s=t.querySelector(".theme-icon-light");a&&(e==="auto"?(a.textContent="Auto",n&&(n.style.display="inline"),s&&(s.style.display="inline")):e==="light"?(a.textContent="Hell",n&&(n.style.display="none"),s&&(s.style.display="inline")):(a.textContent="Dunkel",n&&(n.style.display="inline"),s&&(s.style.display="none")))}function Ve(){return localStorage.getItem(ne)??"auto"}const je=[];let _e=null;function D(e,t){const a=e.split("/").filter(Boolean),n=[],s=new RegExp("^/?"+a.map(i=>i.startsWith(":")?(n.push(i.slice(1)),"([^/]+)"):Ot(i)).join("/")+"/?$");je.push({pattern:e,regex:s,paramNames:n,render:t})}function Et(e){e.startsWith("#")||(e="#"+e),window.location.hash===e?E():window.location.hash=e}function Ft(e,{onNavigate:t}={}){window.addEventListener("hashchange",E),E.rootEl=e,E.onNavigate=t,E()}async function E(){var n;const e=E.rootEl,t=window.location.hash.slice(1)||"/",a=t.startsWith("/")?t:`/${t}`;for(const s of je){const i=s.regex.exec(a);if(i){const l={};s.paramNames.forEach((r,o)=>l[r]=decodeURIComponent(i[o+1])),_e=a,(n=E.onNavigate)==null||n.call(E,a),Wt(a);try{e.classList.remove("view-enter"),await s.render({params:l,path:a,root:e}),e.classList.add("view-enter")}catch(r){console.error("Route render error:",r),e.innerHTML=`<div class="empty-state">
          <div class="empty-state-icon">⚠</div>
          <h2>Fehler beim Anzeigen</h2>
          <p>${ze(r.message||String(r))}</p>
        </div>`}return}}e.innerHTML=`<div class="empty-state">
    <div class="empty-state-icon">?</div>
    <h2>Seite nicht gefunden</h2>
    <p>Die Route <code>${ze(a)}</code> existiert nicht.</p>
    <a href="#/" class="btn primary">Zum Dashboard</a>
  </div>`}function Wt(e){document.querySelectorAll("[data-route]").forEach(t=>{const a=t.getAttribute("data-route"),n=a==="/"?e==="/":e===a||e.startsWith(a+"/");t.classList.toggle("active",n)})}function Kt(){_e!=null&&E()}function Ot(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ze(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const f=new st("zeitnachweis");f.version(1).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"});f.version(2).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});f.version(3).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});async function Ct(){const e=await f.einstellungen.get("__migration_reset");return(e==null?void 0:e.value)===!0?(await f.einstellungen.delete("__migration_reset"),!0):!1}async function R(){return await f.profil.get("self")??He()}async function de(e){const t={...e,id:"self",updatedAt:new Date().toISOString()};return await f.profil.put(t),t}function He(){return{id:"self",name:"",personalnummer:"",kostenstelle:"",einstellungsdatum:null,arbeitszeitplanregel:"",geburtsdatum:null,sollStundenProWoche:35,sollStundenProTag:7,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null},zeitwirtschaftEmail:"zeitwirtschaft@putzmeister.com",zeitwirtschaftAnrede:"Frau Kanarya",pausenRegel:"auto",erstelltAm:new Date().toISOString()}}async function It(e,t=null){const a=await f.einstellungen.get(e);return a?a.value:t}async function Bt(e,t){await f.einstellungen.put({key:e,value:t})}async function W(){return await f.tage.orderBy("datum").toArray()}async function Rt(e){return e.length?(await f.tage.bulkPut(e),e.length):0}async function Vt(e){return e.length?(await f.monate.bulkPut(e),e.length):0}async function Q(){return await f.monate.orderBy("monatKey").toArray()}async function jt(e){return await f.uploads.add({...e,hochladeDatum:new Date().toISOString()})}async function Ze(){return await f.uploads.orderBy("hochladeDatum").reverse().toArray()}async function _t(){await Promise.all([f.profil.clear(),f.tage.clear(),f.monate.clear(),f.uploads.clear(),f.einstellungen.clear(),f.mailVorlagen.clear(),f.warnungDismissals.clear()])}async function Ht(){await Promise.all([f.tage.clear(),f.monate.clear(),f.uploads.clear(),f.warnungDismissals.clear()])}async function Zt(){const[e,t,a,n,s,i,l]=await Promise.all([f.profil.toArray(),f.tage.toArray(),f.monate.toArray(),f.uploads.toArray(),f.einstellungen.toArray(),f.mailVorlagen.toArray(),f.warnungDismissals.toArray()]);return{version:1,exportedAt:new Date().toISOString(),data:{profil:e,tage:t,monate:a,uploads:n,einstellungen:s,mailVorlagen:i,warnungDismissals:l}}}async function Gt(e){if(!e||e.version!==1||!e.data)throw new Error("Ungültiges oder inkompatibles Backup-Format.");const t=e.data;await f.transaction("rw",f.profil,f.tage,f.monate,f.uploads,f.einstellungen,f.mailVorlagen,f.warnungDismissals,async()=>{var a,n,s,i,l,r,o;(a=t.profil)!=null&&a.length&&await f.profil.bulkPut(t.profil),(n=t.tage)!=null&&n.length&&await f.tage.bulkPut(t.tage),(s=t.monate)!=null&&s.length&&await f.monate.bulkPut(t.monate),(i=t.uploads)!=null&&i.length&&await f.uploads.bulkPut(t.uploads),(l=t.einstellungen)!=null&&l.length&&await f.einstellungen.bulkPut(t.einstellungen),(r=t.mailVorlagen)!=null&&r.length&&await f.mailVorlagen.bulkPut(t.mailVorlagen),(o=t.warnungDismissals)!=null&&o.length&&await f.warnungDismissals.bulkPut(t.warnungDismissals)})}async function xe(e,t){await f.mailVorlagen.put({key:e,...t})}async function Nt(){return await f.mailVorlagen.toArray()}async function qt(e,t){await f.warnungDismissals.put({key:`${e}-${t}`,datum:e,typ:t,dismissedAt:new Date().toISOString()})}async function Jt(){return await f.warnungDismissals.toArray()}function Ge(e){if(e==null)return null;if(typeof e=="number")return e;let t=String(e).trim();if(!t)return null;let a=!1;t.endsWith("-")&&(a=!0,t=t.slice(0,-1).trim()),t=t.replace(",",".");const n=parseFloat(t);return isNaN(n)?null:a?-n:n}function ee(e){if(e==null||isNaN(e))return"—";const t=e<0,a=Math.abs(e),n=Math.floor(a),s=Math.round((a-n)*60);let i=n,l=s;return l===60&&(i+=1,l=0),`${t?"-":""}${i}:${String(l).padStart(2,"0")}`}function A(e,t={}){if(e==null||isNaN(e))return"—";const{signed:a=!1,suffix:n="h"}=t,s=a&&e>0?"+":"",i=e.toFixed(2).replace(".",",");return`${s}${i}${n}`}function j(e){if(!e)return null;const t=/^(\d{1,2}):(\d{2})$/.exec(String(e).trim());return t?parseInt(t[1],10)*60+parseInt(t[2],10):null}const Se={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},Ut=(e,t,a)=>{let n;const s=a!=null&&a.addSuffix?Se[e].withPreposition:Se[e].standalone;return typeof s=="string"?n=s:t===1?n=s.one:n=s.other.replace("{{count}}",String(t)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:"vor "+n:n},Qt={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},Yt={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Xt={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},ea={date:se({formats:Qt,defaultWidth:"full"}),time:se({formats:Yt,defaultWidth:"full"}),dateTime:se({formats:Xt,defaultWidth:"full"})},ta={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},aa=(e,t,a,n)=>ta[e],na={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},sa={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},re={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},ia={narrow:re.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:re.wide},ra={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},la={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},oa={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},ca=e=>Number(e)+".",da={ordinalNumber:ca,era:H({values:na,defaultWidth:"wide"}),quarter:H({values:sa,defaultWidth:"wide",argumentCallback:e=>e-1}),month:H({values:re,formattingValues:ia,defaultWidth:"wide"}),day:H({values:ra,defaultWidth:"wide"}),dayPeriod:H({values:la,defaultWidth:"wide",formattingValues:oa,defaultFormattingWidth:"wide"})},ua=/^(\d+)(\.)?/i,ga=/\d+/i,ha={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},ma={any:[/^v/i,/^n/i]},fa={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},pa={any:[/1/i,/2/i,/3/i,/4/i]},va={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},ba={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ya={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},wa={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},$a={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},Ma={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},za={ordinalNumber:it({matchPattern:ua,parsePattern:ga,valueCallback:e=>parseInt(e)}),era:Z({matchPatterns:ha,defaultMatchWidth:"wide",parsePatterns:ma,defaultParseWidth:"any"}),quarter:Z({matchPatterns:fa,defaultMatchWidth:"wide",parsePatterns:pa,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Z({matchPatterns:va,defaultMatchWidth:"wide",parsePatterns:ba,defaultParseWidth:"any"}),day:Z({matchPatterns:ya,defaultMatchWidth:"wide",parsePatterns:wa,defaultParseWidth:"any"}),dayPeriod:Z({matchPatterns:$a,defaultMatchWidth:"wide",parsePatterns:Ma,defaultParseWidth:"any"})},B={code:"de",formatDistance:Ut,formatLong:ea,formatRelative:aa,localize:da,match:za,options:{weekStartsOn:1,firstWeekContainsDate:4}};function J(e){if(!e)return null;const t=e.trim();return rt(t,"dd.MM.yyyy",new Date)}function y(e){return x(e,"dd.MM.yyyy")}function Ne(e){return x(e,"EE, dd.MM.yyyy",{locale:B})}function xa(e){return`${lt(e)}-${String(ot(e)).padStart(2,"0")}`}function qe(e){return x(e,"yyyy-MM")}function Sa(e){return x(e,"yyyy-MM-dd")}function ka(e,t){if(!e||!t)return 0;e>t&&([e,t]=[t,e]);let a=0,n=new Date(e);for(;n<t;)n=U(n,1),Ie(n)||a++;return a}function I(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Da(e){var l;const t=e.filter(r=>r.tagestyp==="Berufsschule");if(t.length<2)return{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null};const a={};for(const r of t)a[l=r.wochentag]??(a[l]=[]),a[r.wochentag].push(r);const n=[],s=[];let i=null;for(const[r,o]of Object.entries(a)){o.sort((g,d)=>g.datum.localeCompare(d.datum));const c=z(o[0].datum),u=z(o[o.length-1].datum),p=Be(u,c,{weekStartsOn:1})+1,h=o.length/Math.max(1,p);h>=.75?n.push(r):h>=.35&&h<=.65&&(s.push(r),(!i||z(o[0].datum)<z(i))&&(i=o[0].datum))}return{wochentageWoechentlich:n,wochentage14Taegig:s,referenzDatum14Taegig:i}}function Je(e,t){var s,i;if(!t)return!1;const n=["SO","MO","DI","MI","DO","FR","SA"][e.getDay()];if((s=t.wochentageWoechentlich)!=null&&s.includes(n))return!0;if((i=t.wochentage14Taegig)!=null&&i.includes(n)&&t.referenzDatum14Taegig){const l=z(t.referenzDatum14Taegig),r=Be(e,l,{weekStartsOn:1});if(r>=0&&r%2===0)return!0}return!1}function Aa(e,t){if(!e)return"arbzg";const a=z(e);return ct(t,a)<18?"jarbschg":"arbzg"}function Pa(e,t){return e==null?0:t==="jarbschg"?e>6?1:e>4.5?.5:0:e>9?.75:e>6?.5:0}function Ta(e){if(!e||e.length<2)return 0;const t=e.filter(n=>n.von&&n.bis).map(n=>({von:j(n.von),bis:j(n.bis)})).filter(n=>n.von!=null&&n.bis!=null).sort((n,s)=>n.von-s.von);let a=0;for(let n=1;n<t.length;n++){const s=t[n].von-t[n-1].bis;(s>0&&s>=15||s>0)&&(a+=s)}return a/60}function Ue(e,t){const a=e.zeitSpannen??[];if(!a.length||a.every(d=>!d.von))return{keinAnspruch:!0};const n=Ta(a),s=e.pause??0,i=La(a),l=i-s,r=t.pausenRegel&&t.pausenRegel!=="auto"?t.pausenRegel==="jarbschg"?"jarbschg":"arbzg":Aa(t.geburtsdatum,z(e.datum)),o=Pa(l,r),c=Math.max(n,o),u=s-c,p=Math.max(0,o-n);let h="ok",g=null;if(u>.05)h="fehler_zeitwirtschaft",g=`${Math.round(u*60)} min Pause wurden zusätzlich zur gesetzlichen Pflicht und zur gestempelten Pause abgezogen. Das sieht nach einem Zeitwirtschafts-Fehler aus.`;else if(p>.05&&s>n+.02){h="aufstockung_legal";const d=Math.round(p*60);g=`Du hast ${Math.round(n*60)} min Pause gestempelt, aber bei ${l.toFixed(2).replace(".",",")}h Arbeitszeit schreibt das Gesetz (${r.toUpperCase()}) ${Math.round(o*60)} min vor. Die fehlenden ${d} min wurden automatisch als Pause gewertet. Das ist gesetzeskonform — nächstes Mal einfach länger Pause machen.`}return{arbeitszeitMitPause:i,arbeitszeitOhnePause:l,gestempeltePause:n,abgezogenePause:s,gesetzlichePflicht:o,gesetz:r,legalerAbzug:c,unrechtmaessigerVerlustMin:Math.round(Math.max(0,u)*60),aufstockungMin:Math.round(Math.max(0,p)*60),typ:h,warnung:g}}function La(e){let t=0;for(const a of e){if(!a.von||!a.bis)continue;const n=j(a.von),s=j(a.bis);n!=null&&s!=null&&s>n&&(t+=s-n)}return t/60}const G={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function ue(e,t,a,n=new Set){var u,p;const s=[],i=a??new Date,l=new Map(e.map(h=>[h.datum,h]));if(!e.length)return s;const r=z(e[0].datum),o=i;for(let h=new Date(r);h<=o;h=U(h,1)){if(Ie(h))continue;const g=x(h,"yyyy-MM-dd"),d=l.get(g),v=ka(h,o);if(!d||!d.tagestyp&&!d.ist&&(((u=d.zeitSpannen)==null?void 0:u.length)??0)===0){if(Je(h,t.berufsschulMuster)){const m=v>=4?"error":v>=2?"warn":"info";N(s,n,{datum:g,wochentag:(d==null?void 0:d.wochentag)??Y(h),typ:"bs_tag_fehlt",schweregrad:m,titel:`Berufsschultag nicht eingetragen: ${y(h)}`,beschreibung:`Laut deinem Profil hast du am ${G[Y(h)]}, ${y(h)} Berufsschule. Im Zeitnachweis fehlt der Tag bisher${v>=4?" — bitte bei der Zeitwirtschaft nachhaken":""}.`,alter:v,mailVorlageKey:m==="error"?"bs_tag_fehlt":null})}else{const m=v>=4?"error":v>=2?"warn":"info";N(s,n,{datum:g,wochentag:Y(h),typ:"stempelzeit_fehlt",schweregrad:m,titel:`Keine Stempelzeit am ${y(h)}`,beschreibung:`Am ${G[Y(h)]}, ${y(h)} wurde keine Stempelzeit erfasst. Falls du an diesem Tag im Haus warst, sollte die Zeitwirtschaft das nachtragen${v>=4?" — es ist inzwischen ≥4 Werktage her":""}.`,alter:v,mailVorlageKey:m==="error"?"stempelzeit_fehlt":null})}continue}if(d.tagestyp==="Berufsschule"&&d.ist!=null&&d.soll!=null&&d.ist<d.soll-.01&&N(s,n,{datum:g,wochentag:d.wochentag,typ:"bs_stunden_falsch",schweregrad:"error",titel:`Berufsschultag mit zu wenig Stunden: ${y(h)}`,beschreibung:`Am ${G[d.wochentag]}, ${y(h)} sind nur ${d.ist.toFixed(2).replace(".",",")}h gebucht statt regulär ${d.soll.toFixed(2).replace(".",",")}h. Die Zeitwirtschaft hat den Berufsschultag möglicherweise nur halb erfasst.`,ist:d.ist,soll:d.soll,mailVorlageKey:"bs_stunden_falsch"}),d.tagestyp==="Stempelzeit"&&((p=d.zeitSpannen)==null?void 0:p.length)>1&&g>="2026-04-01"){const m=Ue(d,t);(m==null?void 0:m.typ)==="fehler_zeitwirtschaft"&&m.unrechtmaessigerVerlustMin>=5?N(s,n,{datum:g,wochentag:d.wochentag,typ:"pausen_abzug",schweregrad:m.unrechtmaessigerVerlustMin>=15?"error":"warn",titel:`Pausen-Abzug fehlerhaft (${y(h)})`,beschreibung:`Am ${G[d.wochentag]}, ${y(h)} wurden ${Math.round(m.abgezogenePause*60)} min Pause abgezogen. Gestempelt: ${Math.round(m.gestempeltePause*60)} min, gesetzlich nötig (${m.gesetz.toUpperCase()}): ${Math.round(m.gesetzlichePflicht*60)} min. Differenz von ${m.unrechtmaessigerVerlustMin} min ist unerklärlich.`,verlustMinuten:m.unrechtmaessigerVerlustMin,abgezogen:m.abgezogenePause,gestempelt:m.gestempeltePause,mailVorlageKey:"pausen_abzug"}):(m==null?void 0:m.typ)==="aufstockung_legal"&&m.aufstockungMin>=10&&N(s,n,{datum:g,wochentag:d.wochentag,typ:"pausen_aufstockung",schweregrad:"info",titel:`Zu wenig Pause gestempelt (${y(h)}) — ${m.aufstockungMin} min automatisch aufgestockt`,beschreibung:`Am ${G[d.wochentag]}, ${y(h)} hast du nur ${Math.round(m.gestempeltePause*60)} min Pause gemacht. Gesetz (${m.gesetz.toUpperCase()}) schreibt ${Math.round(m.gesetzlichePflicht*60)} min vor. Fehlende ${m.aufstockungMin} min wurden als Pause gewertet — das ist legal, aber du verlierst dadurch Arbeitszeit. Tipp: mach beim nächsten Mal etwas länger Mittag.`})}}const c={error:0,warn:1,info:2};return s.sort((h,g)=>{const d=c[h.schweregrad]-c[g.schweregrad];return d!==0?d:g.datum.localeCompare(h.datum)}),s}function Qe(e,t=new Set){var n,s,i,l;const a=[];for(const r of e){const o=((n=r.glz)==null?void 0:n.saldoVorperiode)??0,c=((s=r.glz)==null?void 0:s.saldoAktuellePeriode)??0,u=((i=r.glz)==null?void 0:i.umgebuchteStunden)??0,p=(l=r.glz)==null?void 0:l.saldoGesamt;if(p==null)continue;const h=o+c+u,g=Math.abs(p-h);if(g>.03){const d=`${r.monatKey}-saldo_plausi`;t.has(d)||a.push({datum:`${r.monatKey}-01`,wochentag:"",typ:"saldo_plausi",schweregrad:"warn",titel:`Saldo-Differenz im Monat ${r.monatKey}`,beschreibung:`Rechnung: Vorperiode ${o.toFixed(2)} + aktuelle Periode ${c.toFixed(2)} + umgebucht ${u.toFixed(2)} = ${h.toFixed(2)}, aber dein Saldo wird mit ${p.toFixed(2)} angezeigt. Abweichung: ${g.toFixed(2)}h.`,soll:h,ist:p})}}return a}function N(e,t,a){const n=`${a.datum}-${a.typ}`;t.has(n)||(a.id=n,e.push(a))}function Y(e){return["SO","MO","DI","MI","DO","FR","SA"][e.getDay()]}function Ea(e,t){var o,c,u;const a=[...e].sort((p,h)=>p.datum.localeCompare(h.datum));if(!a.length)return[];const n=new Map(t.map(p=>[p.monatKey,p])),s={};for(const p of a)s[o=p.monatKey]??(s[o]=[]),s[p.monatKey].push(p);const i=Object.keys(s).sort(),l=[];let r=null;for(const p of i){const h=n.get(p);let g;((c=h==null?void 0:h.glz)==null?void 0:c.saldoVorperiode)!=null?g=h.glz.saldoVorperiode:r!=null?g=r:g=0;const d=s[p];for(const v of d)v.diff!=null&&(g+=v.diff),l.push({datum:v.datum,wochentag:v.wochentag,saldo:Math.round(g*100)/100,diff:v.diff,ist:v.ist,soll:v.soll,tagestyp:v.tagestyp,monatKey:v.monatKey,zeitSpannen:v.zeitSpannen});if(((u=h==null?void 0:h.glz)==null?void 0:u.saldoGesamt)!=null){const v=h.glz.saldoGesamt-g;if(Math.abs(v)>.02&&l.length>0){const $=l.length-1;l[$].umbuchung=v,l[$].saldo=Math.round((l[$].saldo+v)*100)/100,g=l[$].saldo}r=h.glz.saldoGesamt}else r=g}return l}function Fa(e,t){if(!e.length)return[];if(t==="alles")return e;const a=Math.min(t,e.length);return e.slice(-a)}function Wa(e){return e.length?e[e.length-1].saldo:0}function Ka(e){if(!e.length)return 0;const t=e[0].saldo-(e[0].diff??0),a=e[e.length-1].saldo;return Math.round((a-t)*100)/100}L.register(gt,ht,mt,ft,pt,vt,bt,yt,wt,$t,Mt,zt,xt,St);function M(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function K(){return{fg:M("--fg"),fgMuted:M("--fg-muted"),fgSubtle:M("--fg-subtle"),border:M("--border"),surface:M("--surface"),accent:M("--accent"),success:M("--success"),warn:M("--warn"),danger:M("--danger"),info:M("--info"),palette:[M("--chart-1"),M("--chart-2"),M("--chart-3"),M("--chart-4"),M("--chart-5"),M("--chart-6"),M("--chart-7")]}}function w(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.fgMuted,font:{size:12}}},tooltip:{backgroundColor:e.surface,titleColor:e.fg,bodyColor:e.fg,borderColor:e.border,borderWidth:1,padding:10,displayColors:!0}},scales:{x:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}},y:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}}}}}function Oa(e,t){const a=K();if(O(e),!(t!=null&&t.length))return;const n=t.map(i=>x(z(i.datum),"dd.MM.")),s=t.map(i=>i.saldo);return s.map(i=>i>=0?a.success:a.danger),new L(e,{type:"line",data:{labels:n,datasets:[{label:"Tages-Saldo",data:s,borderColor:a.accent,backgroundColor:he(a.accent,.14),tension:.25,pointRadius:2,pointHoverRadius:5,pointBackgroundColor:s.map(i=>i>=0?a.success:a.danger),pointBorderColor:a.surface,pointBorderWidth:1,fill:!0,borderWidth:2}]},options:{...w(a),plugins:{...w(a).plugins,legend:{display:!1},tooltip:{...w(a).plugins.tooltip,callbacks:{title:i=>{const l=t[i[0].dataIndex];return x(z(l.datum),"EE, dd.MM.yyyy",{locale:B})},label:i=>{const l=t[i.dataIndex],r=[`Saldo: ${l.saldo.toFixed(2).replace(".",",")}h`];return l.diff!=null&&r.push(`Tages-Diff: ${l.diff>=0?"+":""}${l.diff.toFixed(2).replace(".",",")}h`),l.tagestyp&&r.push(`Typ: ${l.tagestyp}`),l.umbuchung&&r.push(`Umbuchung: ${l.umbuchung>=0?"+":""}${l.umbuchung.toFixed(2).replace(".",",")}h`),r}}}},scales:{...w(a).scales,y:{...w(a).scales.y,ticks:{...w(a).scales.y.ticks,callback:i=>`${i>=0?"+":""}${i.toFixed(1).replace(".",",")}h`}}}}})}function Ca(e,t){const a=K();if(O(e),!(t!=null&&t.length))return;const n=t.map(i=>i.monatKey),s=t.map(i=>{var l;return((l=i.glz)==null?void 0:l.saldoGesamt)??0});return new L(e,{type:"line",data:{labels:n,datasets:[{label:"GLZ-Saldo (Monatsende)",data:s,borderColor:a.accent,backgroundColor:he(a.accent,.18),tension:.35,fill:!0,pointRadius:4}]},options:w(a)})}function ge(e,t){const a=K();if(O(e),!(t!=null&&t.length))return;const n=t.map(l=>x(z(l.datum),"dd.MM.")),s=t.map(l=>l.ist??0),i=t.map(l=>Ha(l.tagestyp,a));return new L(e,{type:"bar",data:{labels:n,datasets:[{label:"Ist-Stunden",data:s,backgroundColor:i,borderRadius:4,borderSkipped:!1}]},options:{...w(a),plugins:{...w(a).plugins,legend:{display:!1},tooltip:{...w(a).plugins.tooltip,callbacks:{label:l=>{const r=t[l.dataIndex];return`${r.tagestyp??"—"}: ${(r.ist??0).toFixed(2).replace(".",",")}h`}}}},scales:{...w(a).scales,y:{...w(a).scales.y,suggestedMin:0,suggestedMax:10}}}})}function Ia(e,t){const a=K();if(O(e),!(t!=null&&t.length))return;const n=t.filter(s=>{var i;return((i=s.zeitSpannen)==null?void 0:i.length)&&s.zeitSpannen[0].von}).map(s=>({x:z(s.datum).getTime(),von:j(s.zeitSpannen[0].von),bis:j(s.zeitSpannen[s.zeitSpannen.length-1].bis)}));return new L(e,{type:"scatter",data:{datasets:[{label:"Arbeitsbeginn",data:n.map(s=>({x:s.x,y:s.von})),backgroundColor:a.palette[0],pointRadius:3},{label:"Arbeitsende",data:n.map(s=>({x:s.x,y:s.bis})),backgroundColor:a.palette[3],pointRadius:3}]},options:{...w(a),scales:{x:{type:"linear",ticks:{color:a.fgMuted,callback:s=>x(new Date(s),"MMM yyyy",{locale:B})},grid:{color:a.border}},y:{min:0,max:20*60,ticks:{color:a.fgMuted,stepSize:60,callback:s=>`${String(Math.floor(s/60)).padStart(2,"0")}:00`},grid:{color:a.border}}}}})}function Ba(e,t){const a=K();O(e);const n={};for(const l of t){if(l.pause==null||l.tagestyp!=="Stempelzeit")continue;const r=Math.round(l.pause*60),o=Math.floor(r/15)*15;n[o]=(n[o]??0)+1}const s=Object.keys(n).map(Number).sort((l,r)=>l-r),i=s.map(l=>n[l]);return new L(e,{type:"bar",data:{labels:s.map(l=>`${l}–${l+14}min`),datasets:[{label:"Häufigkeit",data:i,backgroundColor:a.palette[1],borderRadius:4}]},options:{...w(a),plugins:{...w(a).plugins,legend:{display:!1}}}})}function Ra(e,t){const a=K();O(e);const n=["MO","DI","MI","DO","FR"],s={},i={};for(const r of n)s[r]=0,i[r]=0;for(const r of t)n.includes(r.wochentag)&&(r.ist==null||r.ist===0||(s[r.wochentag]+=r.ist,i[r.wochentag]+=1));const l=n.map(r=>i[r]>0?s[r]/i[r]:0);return new L(e,{type:"bar",data:{labels:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"],datasets:[{label:"Ø Ist-Stunden",data:l,backgroundColor:a.palette[2],borderRadius:4}]},options:{...w(a),plugins:{...w(a).plugins,legend:{display:!1}}}})}function Va(e,t){const a=K();O(e);const n={};for(const l of t)!l.tagestyp||l.tagestyp==="Wochenende"||(n[l.tagestyp]=(n[l.tagestyp]??0)+1);const s=Object.keys(n),i=Object.values(n);return new L(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:s.map((l,r)=>a.palette[r%a.palette.length]),borderColor:a.surface,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:a.fgMuted,font:{size:12}}},tooltip:w(a).plugins.tooltip}}})}function ja(e,t){const a=K();O(e);const n={};for(const r of t){const o=r.wocheKey;n[o]??(n[o]={ist:0,soll:0}),n[o].ist+=r.ist??0,n[o].soll+=r.soll??0}const s=Object.keys(n).sort(),i=s.map(r=>n[r].ist),l=s.map(r=>n[r].soll);return new L(e,{type:"bar",data:{labels:s.map(r=>"KW "+r.split("-")[1]),datasets:[{label:"Ist",data:i,backgroundColor:a.palette[0],borderRadius:4},{label:"Soll",data:l,backgroundColor:a.palette[3],borderRadius:4}]},options:w(a)})}function _a(e,t){const a=K();O(e);const n=t.slice().sort((l,r)=>l.datum.localeCompare(r.datum));let s=0;const i=n.map(l=>(s+=l.diff??0,{x:l.datum,y:s}));return new L(e,{type:"line",data:{labels:i.map(l=>l.x),datasets:[{label:"Kumulative Differenz (+/- Soll)",data:i.map(l=>l.y),borderColor:a.palette[5],backgroundColor:he(a.palette[5],.15),fill:!0,tension:.2,pointRadius:0}]},options:{...w(a),scales:{x:{display:!1,grid:{display:!1}},y:{...w(a).scales.y}}}})}function Ye(e,t,{monate:a=8}={}){if(!e)return;if(e.innerHTML="",!t.length){e.innerHTML='<p style="color: var(--fg-muted); font-size: 13px;">Keine Daten.</p>';return}const n=new Map(t.map(d=>[d.datum,d])),i=z(t[t.length-1].datum),l=a*30,r=U(i,-l),o=dt(r,{weekStartsOn:1}),c=ut(i,o)+1,u=Math.ceil(c/7),p=document.createElement("div");p.className="heatmap-month-labels",p.style.gridTemplateColumns=`repeat(${u}, 14px)`,e.appendChild(p);let h=-1;for(let d=0;d<u;d++){const v=U(o,d*7),$=v.getMonth(),m=document.createElement("span");m.textContent=$!==h?x(v,"MMM",{locale:B}):"",p.appendChild(m),h=$}const g=document.createElement("div");g.className="heatmap",g.style.gridAutoFlow="column",g.style.gridTemplateRows="repeat(7, 14px)",g.style.gridTemplateColumns=`repeat(${u}, 14px)`;for(let d=0;d<u*7;d++){const v=U(o,d);if(v>i||v<r){const V=document.createElement("div");V.className="heatmap-cell",V.style.background="transparent",g.appendChild(V);continue}const $=x(v,"yyyy-MM-dd"),m=n.get($),k=document.createElement("div");k.className="heatmap-cell",k.title=`${x(v,"EE, dd.MM.yyyy",{locale:B})}${(m==null?void 0:m.ist)!=null?" · Ist "+m.ist.toFixed(2)+"h":""}${(m==null?void 0:m.diff)!=null?" · "+(m.diff>=0?"+":"")+m.diff.toFixed(2):""}`,(m==null?void 0:m.diff)!=null&&(m.diff<=-1?k.classList.add("neg-2"):m.diff<-.05?k.classList.add("neg-1"):m.diff>=1?k.classList.add("pos-2"):m.diff>.05&&k.classList.add("pos-1")),g.appendChild(k)}e.appendChild(g)}function O(e){const t=L.getChart(e);t&&t.destroy()}function he(e,t){const a=e.replace("#","").trim();if(a.length!==6&&a.length!==3)return e;const n=a.length===3?a.split("").map(r=>r+r).join(""):a,s=parseInt(n.slice(0,2),16),i=parseInt(n.slice(2,4),16),l=parseInt(n.slice(4,6),16);return`rgba(${s}, ${i}, ${l}, ${t})`}function Ha(e,t){const a=String(e??"").toLowerCase();return a.includes("stempel")?t.palette[0]:a.includes("berufs")?t.palette[1]:a.includes("urlaub")?t.palette[2]:a.includes("feiertag")?t.fgSubtle:a.includes("dienst")?t.palette[3]:a.includes("krank")?t.palette[4]:t.palette[5]}let Za=0;function me(e,{type:t="info",duration:a=3500}={}){const n=document.getElementById("toast-root");if(!n)return;const s=document.createElement("div");s.className=`toast ${t}`,s.textContent=e,s.dataset.id=++Za,n.appendChild(s),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateY(-8px)",s.style.transition="opacity 220ms, transform 220ms",setTimeout(()=>s.remove(),250)},a)}function fe(e){return me(e,{type:"error",duration:6e3})}function S(e){return me(e,{type:"success"})}const Ga=[{key:7,label:"1 Woche"},{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:"alles",label:"Alles"}];async function ke({root:e}){var k,V,ve,be;const[t,a,n,s,i]=await Promise.all([R(),Q(),W(),Jt(),It("dashboardZeitraum",14)]);if(n.length===0){e.innerHTML=Ja();return}const l=!t.geburtsdatum||!((V=(k=t.berufsschulMuster)==null?void 0:k.wochentageWoechentlich)!=null&&V.length||(be=(ve=t.berufsschulMuster)==null?void 0:ve.wochentage14Taegig)!=null&&be.length),r=Ea(n,a),o=r.length;let c=i;typeof c=="number"&&c>o&&(c="alles");const u=new Set(s.map(b=>b.key)),p=ue(n,t,new Date,u),h=Qe(a,u),g=[...p,...h],d=Wa(r),v=d>.05?"positive":d<-.05?"negative":"",$=g.filter(b=>b.schweregrad==="error"),m=g.filter(b=>b.schweregrad==="warn");e.innerHTML=`
    <h1 class="view-title">Dashboard</h1>
    <p class="view-subtitle">
      ${t.name?F(t.name):"Willkommen"}${t.personalnummer?` · Personalnr. ${F(t.personalnummer)}`:""}
      · Stand: ${F(y(new Date(n[n.length-1].datum)))}
    </p>

    <div class="saldo-hero" style="margin-bottom: 32px; align-items: stretch;">
      <div class="saldo-hero-text" style="min-width: 260px;">
        <h3>Aktueller Gleitzeit-Saldo</h3>
        <div class="saldo-value ${v}">${A(d,{signed:!0,suffix:""})}</div>
        <div class="saldo-unit">Stunden · tagesaktuell</div>
        <div id="hero-bewegung" class="saldo-trend flat" style="margin-top: 12px;"></div>
      </div>
      <div style="flex: 1; min-width: 400px; display: flex; flex-direction: column;">
        <div class="card-split" style="margin-bottom: 12px; align-items: center;">
          <h3 style="margin: 0;">Verlauf</h3>
          <div class="segmented" id="zeitraum-picker">
            ${Ga.map(b=>{const P=typeof b.key=="number"&&b.key>o;return`<button type="button" data-key="${b.key}" class="${c===b.key?"active":""}" ${P?'disabled style="opacity:0.4"':""}>${b.label}</button>`}).join("")}
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
          seit ${F(y(new Date(n[0].datum)))}
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
        ${g.slice(0,5).map(b=>qa(b)).join("")}
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
  `,De(c,e,r),e.querySelectorAll("#zeitraum-picker button").forEach(b=>{b.addEventListener("click",async()=>{if(b.disabled)return;const P=b.getAttribute("data-key"),C=P==="alles"?"alles":parseInt(P,10);e.querySelectorAll("#zeitraum-picker button").forEach(_=>_.classList.toggle("active",_===b)),await Bt("dashboardZeitraum",C),De(C,e,r)})}),requestAnimationFrame(()=>{Ye(e.querySelector("#mini-heatmap"),n,{monate:4})}),e.addEventListener("click",async b=>{const P=b.target.closest(".copy-hhmm");if(P){b.preventDefault(),b.stopPropagation();const $e=P.getAttribute("data-val");try{await navigator.clipboard.writeText($e),P.classList.add("ok");const Me=P.textContent;P.textContent="✓",setTimeout(()=>{P.classList.remove("ok"),P.textContent=Me},1e3)}catch{S(`Bitte kopieren: ${$e}`)}return}const C=b.target.closest(".btn-dismiss");if(!C)return;const _=C.getAttribute("data-datum"),ye=C.getAttribute("data-typ");if(!_||!ye)return;await qt(_,ye),S("Warnung ausgeblendet.");const we=C.closest(".alert");we&&(we.style.display="none")})}function De(e,t,a){const n=Fa(a,e),s=Ka(n);requestAnimationFrame(()=>{const o=t.querySelector("#saldo-chart");Oa(o,n)});const i=t.querySelector("#hero-bewegung");if(i){const o=s>.05?"up":s<-.05?"down":"flat",c=s>.05?"↑":s<-.05?"↓":"→";i.className=`saldo-trend ${o}`,i.innerHTML=`${c} ${Math.abs(s)<.01?"Unverändert":A(s,{signed:!0})} im Zeitraum`}const l=t.querySelector("#tage-info");if(l){const o=n.length;l.textContent=`${o} ${o===1?"Tag":"Tage"}`}const r=t.querySelector("#tage-liste");r&&(r.innerHTML=Na(n.slice().reverse()))}function Na(e){if(!e.length)return'<p class="hint">Keine Tage im Zeitraum.</p>';const t=Math.max(1,...e.map(a=>Math.abs(a.diff??0)));return`
    <div class="tages-liste">
      ${e.map(a=>{const n=a.diff??0,s=n>0,i=Math.min(100,Math.abs(n)/t*100),l=s?"var(--success)":n<0?"var(--danger)":"var(--fg-subtle)";return`
          <a href="#/tag/${a.datum}" class="tag-row">
            <div class="tag-row-datum">
              <div class="tabular">${F(y(new Date(a.datum)))}</div>
              <div class="tag-row-wd">${Ua(a.wochentag)}</div>
            </div>
            <div class="tag-row-typ">
              ${a.tagestyp?`<span class="pill ${Qa(a.tagestyp)}">${F(a.tagestyp)}</span>`:'<span style="color: var(--fg-subtle); font-size: 12px;">—</span>'}
            </div>
            <div class="tag-row-ist tabular">
              <div class="ist-line">
                <span>${a.ist!=null?a.ist.toFixed(2).replace(".",",")+"h":"—"}</span>
                ${a.ist!=null&&a.ist>0?`<button class="copy-hhmm" data-val="${ee(a.ist)}" title="Für Berichtsheft kopieren">${ee(a.ist)}</button>`:""}
              </div>
              <div style="color: var(--fg-subtle); font-size: 11px;">Soll ${a.soll!=null?a.soll.toFixed(1).replace(".",","):"—"}</div>
            </div>
            <div class="tag-row-bar">
              <div class="bar-track">
                <div class="bar-zero"></div>
                <div class="bar-fill ${s?"pos":"neg"}" style="width: ${i}%; background: ${l};"></div>
              </div>
            </div>
            <div class="tag-row-diff tabular" style="color: ${s?"var(--success)":n<0?"var(--danger)":"var(--fg-muted)"};">
              ${n!==0?(s?"+":"")+n.toFixed(2).replace(".",",")+"h":"0,00h"}
            </div>
            <div class="tag-row-saldo tabular" style="color: var(--fg-muted); font-size: 12px;">
              ${a.saldo>=0?"+":""}${a.saldo.toFixed(2).replace(".",",")}h
            </div>
          </a>
        `}).join("")}
    </div>
  `}function qa(e){const t=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${t}</div>
      <div class="alert-body">
        <div class="alert-title">${F(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${F(e.beschreibung)}</p>
        <div class="alert-actions">
          ${e.mailVorlageKey?'<a href="#/mails" class="btn primary sm">✉ Mail schreiben</a>':""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
          <button class="btn ghost sm btn-dismiss" data-datum="${Ae(e.datum)}" data-typ="${Ae(e.typ)}">Ausblenden</button>
        </div>
      </div>
    </div>
  `}function Ja(){return`
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
  `}function Ua(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function Qa(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function F(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ae(e){return F(e)}const Ya="/zeitnachweis-app/assets/pdf.worker.min-yatZIOMy.mjs";kt.workerSrc=Ya;const Pe={Januar:1,Februar:2,März:3,Maerz:3,April:4,Mai:5,Juni:6,Juli:7,August:8,September:9,Oktober:10,November:11,Dezember:12},Xa=["Stempelzeit","Berufsschule Std. bez","Berufsschule","Dienstreise Arbeitszeit","Reise öff.VM/PKW Beifahr.","Reise öff.VM/PKW","Urlaub","Gleitzeit","Arbeitsunfähigkeit","TgDtEinh","Neujahr","Karfreitag","Ostermontg","Ostmontg","Osterso.","Hl.3 Kön.","Allerhlg","Pfingstmo","Fronleichn","TdDtEinh"];async function en(e){const a=await Dt({data:e}).promise,n=[];for(let r=1;r<=a.numPages;r++){const c=await(await a.getPage(r)).getTextContent(),u=tn(c.items);for(const p of u)n.push({page:r,text:p})}const s=an(n),{tage:i,monate:l}=nn(n);return{meta:s,tage:i,monate:l}}function tn(e){if(!e.length)return[];const t=e.slice().sort((l,r)=>{const o=r.transform[5]-l.transform[5];return Math.abs(o)>2?o:l.transform[4]-r.transform[4]}),a=[];let n=null,s=[];const i=3;for(const l of t){const r=l.transform[5];n==null||Math.abs(r-n)<=i?(s.push(l),n==null&&(n=r)):(a.push(Te(s)),s=[l],n=r)}return s.length&&a.push(Te(s)),a.filter(l=>l.trim().length>0)}function Te(e){e.sort((n,s)=>n.transform[4]-s.transform[4]);let t="",a=-1;for(const n of e){const s=n.transform[4];a>=0&&s-a>4?t+="  ":a>=0&&s-a>.5&&(t+=" "),t+=n.str,a=s+n.width}return t}function an(e){var a,n;const t={personalnummer:null,name:null,kostenstelle:null,personalbereich:null,einstellungsdatum:null,mitarbeiterkreis:null,arbeitszeitplanregel:null,zeitraumVon:null,zeitraumBis:null,stichtagAuswertung:null};for(let s=0;s<e.length;s++){const i=e[s].text,l=/vom\s+(\d{2}\.\d{2}\.\d{4})\s+bis\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);l&&(t.zeitraumVon=J(l[1]),t.zeitraumBis=J(l[2]));const r=/bis einschließlich dem\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);if(r&&(t.stichtagAuswertung=J(r[1])),/Personalnummer/i.test(i)&&/Kostenstelle/i.test(i)){const c=(((a=e[s+1])==null?void 0:a.text)??"").trim().split(/\s{2,}/);c.length>=3&&(t.personalnummer=c[0],t.kostenstelle=c[1],t.personalbereich=c[2])}if(/Einstellungsdatum/i.test(i)&&/Mitarbeiterkreis/i.test(i)){const c=(((n=e[s+1])==null?void 0:n.text)??"").trim().split(/\s{2,}/);c.length>=3&&(t.einstellungsdatum=J(c[0]),t.mitarbeiterkreis=c[1],t.arbeitszeitplanregel=c[2])}if(/Bei Rückfragen wenden Sie sich an/i.test(i))for(let o=s+1;o<Math.min(s+8,e.length);o++){const c=e[o].text.trim();if(/^[A-ZÄÖÜ][a-zäöüß]+(?:\s[A-ZÄÖÜ][a-zäöüß]+)+$/.test(c)&&!/kanarya/i.test(c)&&!/tel/i.test(c)){t.name=c;break}}}return t}function nn(e,t){var o;const a=[],n=[];let s=null,i=null,l=!1,r=0;for(;r<e.length;){const c=e[r].text,u=/Monat:\s*([A-Za-zäöüÄÖÜß]+)\s*-\s*(\d{4})/.exec(c);if(u){const d=u[1].trim(),v=parseInt(u[2],10),$=Pe[d]??Pe[d.replace("ä","ae")]??null;$&&(s={jahr:v,monat:$,monatKey:`${v}-${String($).padStart(2,"0")}`},l=!0,i=null),r++;continue}if(/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.test(c)){const d=/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.exec(c),v=J(d[1]);i={monatKey:(s==null?void 0:s.monatKey)??qe(v),stichtag:v,glz:{},flexi:{},zeitkonten:{},raw:{}},r=sn(e,r+1,i),n.push(i);continue}let p=s;const h=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)\b/.exec(c.trim());if(h&&s){const d=parseInt(h[1],10);l&&d>=20?p=on(s):d<=15&&(l=!1)}const g=Le(c,p);if(g){const d=[];let v=r+1;for(;v<e.length;){const m=e[v].text;if(/^\s*\d{4}\s+Umbuchung/.test(m)||Le(m,s)||/Wochensumme/i.test(m)||/Monats.bersicht/i.test(m)||/Monat:\s*[A-Za-z]/i.test(m))break;const k=rn(m);if(k){d.push(k),v++;continue}break}if(d.length&&g.zeitSpannen.push(...d),g.tagestyp==="Wochenende"||g.wochentag==="SA"||g.wochentag==="SO"){r=v;continue}(g.ist!=null||g.soll!=null||(((o=g.zeitSpannen)==null?void 0:o.length)??0)>0||g.tagestyp!=null)&&a.push(g),r=v;continue}r++}return{tage:a,monate:n}}function sn(e,t,a){let n=t;const s=/(\d{4,5}|KTAU|AZAU)\s*-\s*(.+?)\s+(-?[\d,.]+-?)(?=\s+(?:\d{4,5}|KTAU|AZAU)\s*-|\s*$)/g;for(;n<e.length;){const i=e[n].text.trim();if(/^Monat:\s/.test(i)||/^Einzelergebnisse\s/.test(i)||/^Tag\b/.test(i)||/^Wochensumme/.test(i)||/^\d{2}\s+(MO|DI|MI|DO|FR|SA|SO)\b/.test(i)||/^Übersicht für den Zeitraum/i.test(i)||/^Abwesenheitsansprüche/i.test(i))break;s.lastIndex=0;let l;for(;(l=s.exec(i))!=null;){const r=l[1],o=l[2].trim(),c=Ge(l[3]);a.raw[r]={beschreibung:o,wert:c},r==="0008"&&(a.glz.saldoVorperiode=c),r==="8016"&&(a.glz.saldoAktuellePeriode=c),r==="9802"&&(a.glz.umgebuchteStunden=c),r==="0005"&&(a.glz.saldoGesamt=c),r==="9803"&&(a.glz.ueberzaehligeStd=c),r==="0050"&&(a.zeitkonten.produktivstunden=c),r==="9011"&&(a.flexi.jahreskontoVorperiode=c),r==="9010"&&(a.flexi.jahreskontoSaldo=c),r==="9020"&&(a.flexi.langzeitkontoSaldo=c),r==="9203"&&(a.zeitkonten.azMonatsendeUeber216=c),r==="9207"&&(a.zeitkonten.auszahlungBav=c),r==="9205"&&(a.zeitkonten.summeAuszahlung=c)}if(n++,n-t>80)break}return n}function Le(e,t){if(!t)return null;const a=e.trim(),n=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)(?:\s+(.+))?$/.exec(a);if(!n)return null;const s=parseInt(n[1],10),i=n[2],l=(n[3]??"").trim();let r=t.jahr,o=t.monat;const c=new Date(r,o-1,s),u={datum:Sa(c),datumDate:c.toISOString(),wochentag:i,tagNr:s,monatKey:qe(c),wocheKey:xa(c),zeitSpannen:[],aktivitaeten:[],ist:null,soll:null,diff:null,pause:null,tazp:null,tagestyp:null,raw:a};return l?(ln(l,u),u):(u.tagestyp=["SA","SO"].includes(i)?"Wochenende":null,u)}function rn(e){const t=e.trim(),a=/^(Stempelzeit|Reise öff\.VM\/PKW Beifahr\.|Reise öff\.VM\/PKW|Dienstreise Arbeitszeit)\s+(\d{2}:\d{2})\s+(\d{2}:\d{2})\s*$/.exec(t);return a?{aktivitaet:a[1],von:a[2],bis:a[3]}:null}function ln(e,t){let a=null,n=e;for(const u of Xa)if(e.startsWith(u)){a=u,n=e.slice(u.length).trim();break}a||(a=e.split(/\s+/)[0],n=e.slice(a.length).trim()),t.tagestyp=cn(a),t.aktivitaeten.push(a);const s=n.split(/\s+/).filter(Boolean),i=/^\d{2}:\d{2}$/,l=/^-?[\d,.]+-?$/;let r=0;s[r]&&i.test(s[r])&&s[r+1]&&i.test(s[r+1])&&(t.zeitSpannen.push({aktivitaet:a,von:s[r],bis:s[r+1]}),r+=2);const o=[];for(;r<s.length&&l.test(s[r]);){const u=Ge(s[r]);u!=null&&o.push(u),r++}let c=s[r];o.length>=5?([t.ist,t.soll,t.diff,t.pause]=o,c||(c=String(o[4]))):o.length===4?[t.ist,t.soll,t.diff,t.pause]=o:o.length===3?[t.ist,t.soll,t.diff]=o:o.length===2?[t.ist,t.soll]=o:o.length===1&&(t.ist=o[0]),c&&(t.tazp=String(c))}function on(e){if(!e)return null;let t=e.monat-1,a=e.jahr;return t<1&&(t=12,a-=1),{jahr:a,monat:t,monatKey:`${a}-${String(t).padStart(2,"0")}`}}function cn(e){return e?/^Stempelzeit$/i.test(e)?"Stempelzeit":/^Berufsschule Std\. bez$/i.test(e)||/^Berufsschule$/i.test(e)?"Berufsschule":/Dienstreise/i.test(e)||/Reise/i.test(e)?"Dienstreise":/^Urlaub$/i.test(e)?"Urlaub":/^Gleitzeit$/i.test(e)?"Gleitzeit":/Arbeitsunf.higkeit/i.test(e)?"Arbeitsunfähigkeit":/^(Neujahr|Karfreitag|Ostermontg|Ostmontg|Osterso\.|Hl\.3 Kön\.|Allerhlg|Pfingstmo|Fronleichn|TdDtEinh|TgDtEinh)$/i.test(e)?"Feiertag":e:null}async function dn({root:e}){const t=await Ze(),a=await R();e.innerHTML=`
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
        ${t.length===0?'<div class="empty-state"><div class="empty-state-icon">📭</div><p>Noch keine Uploads</p></div>':Xe(t)}
      </div>
    </div>
  `;const n=e.querySelector("#upload-zone"),s=e.querySelector("#file-input");n.addEventListener("click",()=>s.click()),n.addEventListener("dragover",i=>{i.preventDefault(),n.classList.add("drag")}),n.addEventListener("dragleave",()=>n.classList.remove("drag")),n.addEventListener("drop",async i=>{var r;i.preventDefault(),n.classList.remove("drag");const l=(r=i.dataTransfer.files)==null?void 0:r[0];l&&await Ee(l,e,a)}),s.addEventListener("change",async i=>{var r;const l=(r=i.target.files)==null?void 0:r[0];l&&await Ee(l,e,a)}),e.querySelector("#btn-export").addEventListener("click",gn),e.querySelector("#btn-import").addEventListener("click",()=>e.querySelector("#import-input").click()),e.querySelector("#import-input").addEventListener("change",hn),e.querySelector("#btn-clear-parsed").addEventListener("click",un),e.querySelector("#btn-reset").addEventListener("click",mn)}async function un(){confirm("PDF-abgeleitete Daten (Tage, Monate, Uploads) werden gelöscht. Profil und Mail-Vorlagen bleiben erhalten. Fortfahren?")&&(await Ht(),S("Daten gelöscht. Profil bleibt."),setTimeout(()=>location.reload(),600))}function Xe(e){return`
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
            <td>${I(fn(t.hochladeDatum))}</td>
            <td>${I(t.dateiname||"—")}</td>
            <td>${t.zeitraumVon?I(y(new Date(t.zeitraumVon))):"—"} – ${t.zeitraumBis?I(y(new Date(t.zeitraumBis))):"—"}</td>
            <td>${t.stichtagAuswertung?I(y(new Date(t.stichtagAuswertung))):"—"}</td>
            <td class="num">${t.tageCount??"—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}async function Ee(e,t,a){var i,l,r,o;const n=t.querySelector("#upload-status"),s=t.querySelector("#upload-zone");s.style.pointerEvents="none",s.style.opacity="0.6",n.innerHTML=`
    <div class="alert severity-info">
      <div class="loader-ring" style="width: 24px; height: 24px; border-width: 2px;"></div>
      <div class="alert-body">
        <div class="alert-title">PDF wird verarbeitet…</div>
        <p style="margin: 4px 0; font-size: 13px;"><strong>${I(e.name)}</strong> — das kann bei großen PDFs einige Sekunden dauern.</p>
      </div>
    </div>`;try{const c=await e.arrayBuffer(),u=await en(c);await Rt(u.tage),await Vt(u.monate),await jt({dateiname:e.name,zeitraumVon:((i=u.meta.zeitraumVon)==null?void 0:i.toISOString())??null,zeitraumBis:((l=u.meta.zeitraumBis)==null?void 0:l.toISOString())??null,stichtagAuswertung:((r=u.meta.stichtagAuswertung)==null?void 0:r.toISOString())??null,tageCount:u.tage.length,monateCount:u.monate.length});const p=await W(),h=Da(p),g={...He(),...a};u.meta.personalnummer&&!a.personalnummer&&(g.name=u.meta.name??a.name,g.personalnummer=u.meta.personalnummer,g.einstellungsdatum=((o=u.meta.einstellungsdatum)==null?void 0:o.toISOString())??a.einstellungsdatum,g.arbeitszeitplanregel=u.meta.arbeitszeitplanregel??a.arbeitszeitplanregel),(h.wochentageWoechentlich.length>0||h.wochentage14Taegig.length>0)&&(g.berufsschulMuster=h),await de(g),n.innerHTML=`
      <div class="alert severity-info" style="border-color: var(--success); background: var(--success-bg);">
        <div class="alert-icon" style="background: var(--success);">✓</div>
        <div class="alert-body">
          <div class="alert-title">PDF erfolgreich eingelesen</div>
          <p style="margin: 4px 0; font-size: 13px;">
            ${u.tage.length} Tage · ${u.monate.length} Monatsübersichten
            ${u.meta.zeitraumVon?` · Zeitraum: ${y(u.meta.zeitraumVon)} – ${y(u.meta.zeitraumBis)}`:""}
          </p>
          <div class="alert-actions">
            <a href="#/" class="btn primary sm">Zum Dashboard</a>
            <a href="#/monat" class="btn sm">Monate ansehen</a>
          </div>
        </div>
      </div>
    `,S(`PDF verarbeitet: ${u.tage.length} Tage.`);const d=await Ze();t.querySelector("#uploads-list").innerHTML=Xe(d)}catch(c){console.error(c),n.innerHTML=`
      <div class="alert severity-error">
        <div class="alert-icon">!</div>
        <div class="alert-body">
          <div class="alert-title">Fehler beim Parsen</div>
          <p style="margin: 4px 0; font-size: 13px;">${I(c.message||String(c))}</p>
          <p style="margin: 4px 0; font-size: 12px; color: var(--fg-muted);">Prüfe, ob es sich um einen Putzmeister-SAP-Zeitnachweis handelt. Bei einem anderen Layout kann der Parser fehlschlagen.</p>
        </div>
      </div>
    `,fe("PDF konnte nicht gelesen werden.")}finally{s.style.pointerEvents="",s.style.opacity=""}}async function gn(){try{const e=await Zt(),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),a=URL.createObjectURL(t),n=document.createElement("a"),s=new Date().toISOString().slice(0,10);n.href=a,n.download=`zeitnachweis-backup-${s}.json`,n.click(),URL.revokeObjectURL(a),S("Backup heruntergeladen.")}catch(e){fe(`Export fehlgeschlagen: ${e.message}`)}}async function hn(e){var a;const t=(a=e.target.files)==null?void 0:a[0];if(t)try{const n=await t.text(),s=JSON.parse(n);if(!confirm("Existierende Daten werden überschrieben. Fortfahren?"))return;await Gt(s),S("Backup erfolgreich importiert. Seite wird neu geladen…"),setTimeout(()=>location.reload(),800)}catch(n){fe(`Import fehlgeschlagen: ${n.message}`)}}async function mn(){confirm("ALLE Daten endgültig löschen? Das lässt sich nicht rückgängig machen.")&&confirm("Wirklich alle Daten löschen? Letzte Warnung.")&&(await _t(),S("Alle Daten gelöscht."),setTimeout(()=>location.reload(),600))}function fn(e){if(!e)return"—";const t=new Date(e);return t.toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"})+" "+t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}const Fe={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag"};async function pn({root:e}){var s,i,l,r;const t=await R(),a=t.berufsschulMuster??{},n=(((s=a.wochentageWoechentlich)==null?void 0:s.length)??0)>0||(((i=a.wochentage14Taegig)==null?void 0:i.length)??0)>0;e.innerHTML=`
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
            <div class="tag-detail-value"><strong>${((l=a.wochentageWoechentlich)==null?void 0:l.map(o=>Fe[o]).join(", "))||"—"}</strong></div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Alle 2 Wochen</div>
            <div class="tag-detail-value"><strong>${((r=a.wochentage14Taegig)==null?void 0:r.map(o=>Fe[o]).join(", "))||"—"}</strong>${a.referenzDatum14Taegig?` <span class="hint">(Anker: ${y(new Date(a.referenzDatum14Taegig))})</span>`:""}</div>
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
  `,e.querySelector("#profil-form").addEventListener("submit",async o=>{var p,h,g,d;o.preventDefault();const c=new FormData(o.target),u={...t,name:((p=c.get("name"))==null?void 0:p.trim())||"",personalnummer:((h=c.get("personalnummer"))==null?void 0:h.trim())||"",geburtsdatum:c.get("geburtsdatum")?new Date(c.get("geburtsdatum")).toISOString():null,pausenRegel:c.get("pausenRegel")||"auto",zeitwirtschaftEmail:((g=c.get("zeitwirtschaftEmail"))==null?void 0:g.trim())||"zeitwirtschaft@putzmeister.com",zeitwirtschaftAnrede:((d=c.get("zeitwirtschaftAnrede"))==null?void 0:d.trim())||"Frau Kanarya"};await de(u),S("Profil gespeichert.")})}function X(e){return String(e??"").replace(/"/g,"&quot;")}async function vn({root:e}){var s;const t=await Q(),a=await W(),n={};for(const i of a)n[s=i.monatKey]??(n[s]=[]),n[i.monatKey].push(i);if(t.length===0){e.innerHTML=zn("Noch keine Monatsdaten. Lade zuerst ein PDF unter Daten hoch.");return}e.innerHTML=`
    <h1 class="view-title">Monate</h1>
    <p class="view-subtitle">${t.length} Monate erfasst. Klicke für Details.</p>

    <div class="grid cols-2">
      ${t.slice().reverse().map(i=>{var h;const r=(n[i.monatKey]??[]).filter(g=>g.ist!=null&&g.ist>0),o=r.reduce((g,d)=>g+(d.ist??0),0),c=r.reduce((g,d)=>g+(d.soll??0),0),u=o-c,p=(h=i.glz)==null?void 0:h.saldoGesamt;return`
          <a href="#/monat/${i.monatKey}" class="card" style="text-decoration: none; color: inherit; display: block;">
            <div class="card-split" style="margin-bottom: 12px;">
              <h2 style="margin: 0;">${le(i.monatKey)}</h2>
              <span class="saldo-trend ${p>.05?"up":p<-.05?"down":"flat"}" style="margin: 0; font-size: 12px;">
                Saldo: <strong>${A(p??0,{signed:!0})}</strong>
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
                <div class="tabular ${u>.05?"positive":u<-.05?"negative":""}" style="font-size: 14px; font-weight: 500; color: ${u>.05?"var(--success)":u<-.05?"var(--danger)":"var(--fg)"};">${A(u,{signed:!0})}</div>
              </div>
            </div>
          </a>
        `}).join("")}
    </div>
  `}async function bn({params:e,root:t}){const a=e.yyyymm,[n,s,i]=await Promise.all([W(),Q(),R()]),l=s.find(c=>c.monatKey===a),r=n.filter(c=>c.monatKey===a).sort((c,u)=>c.datum.localeCompare(u.datum));if(!r.length){t.innerHTML=`<h1 class="view-title">Monat ${le(a)}</h1><p class="view-subtitle">Keine Daten für diesen Monat.</p><a href="#/monat" class="btn">← Alle Monate</a>`;return}const o=ue(n,i,new Date).filter(c=>c.datum.startsWith(a));t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat" class="btn sm">← Alle Monate</a>
    </div>
    <h1 class="view-title">${le(a)}</h1>
    <p class="view-subtitle">${r.length} Tage · ${o.length} Auffälligkeiten</p>

    ${l?yn(l):""}

    <div class="card" style="margin-bottom: 24px;">
      <h2>Tagesbalken</h2>
      <div class="chart-wrap tall"><canvas id="chart-monat"></canvas></div>
    </div>

    ${o.length?`
      <div class="card" style="margin-bottom: 24px;">
        <h2>Auffälligkeiten</h2>
        ${o.map(c=>$n(c)).join("")}
      </div>
    `:""}

    <div class="card">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Tage</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">Klicke auf ein Datum für Details</span>
      </div>
      ${wn(r)}
    </div>
  `,ge(t.querySelector("#chart-monat"),r)}function yn(e){var n,s,i,l;const t=((n=e.glz)==null?void 0:n.saldoGesamt)??0;return`
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
  `}function wn(e){return`
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
              <td><a href="#/tag/${t.datum}" style="color: inherit; text-decoration: none;"><span class="tabular">${y(new Date(t.datum))}</span> <span style="color: var(--fg-subtle);">${t.wochentag}</span></a></td>
              <td>${t.tagestyp?`<span class="pill ${Mn(t.tagestyp)}">${te(t.tagestyp)}</span>`:"—"}</td>
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
  `}function $n(e){return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i"}</div>
      <div class="alert-body">
        <div class="alert-title">${te(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${te(e.beschreibung)}</p>
        ${e.mailVorlageKey?`<div class="alert-actions"><a href="#/mails" class="btn primary sm">Mail schreiben</a><a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a></div>`:""}
      </div>
    </div>
  `}function le(e){const[t,a]=e.split("-"),n=new Date(parseInt(t),parseInt(a)-1,1);return x(n,"LLLL yyyy",{locale:B})}function Mn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function zn(e){return`<div class="empty-state"><div class="empty-state-icon">📭</div><p>${te(e)}</p><a href="#/daten" class="btn primary">Zu Daten</a></div>`}function te(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function xn({root:e}){var s;const t=await W();if(!t.length){e.innerHTML='<h1 class="view-title">Wochen</h1><p class="view-subtitle">Noch keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a={};for(const i of t)a[s=i.wocheKey]??(a[s]={key:i.wocheKey,tage:[],ist:0,soll:0}),a[i.wocheKey].tage.push(i),a[i.wocheKey].ist+=i.ist??0,a[i.wocheKey].soll+=i.soll??0;const n=Object.keys(a).sort().reverse();e.innerHTML=`
    <h1 class="view-title">Wochen</h1>
    <p class="view-subtitle">${n.length} Wochen erfasst.</p>

    <div>
      ${n.map(i=>{const l=a[i],r=l.ist-l.soll,o=r>.05?"positive":r<-.05?"negative":"";return`
          <a href="#/woche/${i}" class="list-item">
            <div class="tabular" style="font-size: 16px; font-weight: 600; color: var(--fg-muted);">${ae(et(i))}</div>
            <div>
              <div class="list-item-title">Ist: ${l.ist.toFixed(2).replace(".",",")}h · Soll: ${l.soll.toFixed(2).replace(".",",")}h</div>
              <div class="list-item-sub">${l.tage.length} Tage erfasst</div>
            </div>
            <div class="tabular ${o}" style="font-weight: 600; font-size: 16px;">${A(r,{signed:!0})}</div>
            <div style="color: var(--fg-subtle);">→</div>
          </a>
        `}).join("")}
    </div>
  `}async function Sn({params:e,root:t}){const a=await W(),n=e.yyyykw,s=a.filter(o=>o.wocheKey===n).sort((o,c)=>o.datum.localeCompare(c.datum));if(!s.length){t.innerHTML=`<h1 class="view-title">KW ${ae(n)}</h1><p>Keine Daten.</p><a href="#/woche" class="btn">← Alle Wochen</a>`;return}const i=s.reduce((o,c)=>o+(c.ist??0),0),l=s.reduce((o,c)=>o+(c.soll??0),0),r=i-l;t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/woche" class="btn sm">← Alle Wochen</a>
    </div>
    <h1 class="view-title">${ae(et(n))}</h1>
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
      ${kn(s)}
    </div>
  `,ge(t.querySelector("#chart-woche"),s)}function kn(e){return`
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
              <td>${t.tagestyp?`<span class="pill ${Dn(t.tagestyp)}">${ae(t.tagestyp)}</span>`:"—"}</td>
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
  `}function et(e){const[t,a]=e.split("-");return`KW ${a} · ${t}`}function Dn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function ae(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function An({params:e,root:t}){var o,c,u;const a=e.datum,n=await f.tage.get(a),s=await R();if(!n){t.innerHTML=`<h1 class="view-title">Tag nicht gefunden</h1><p>Für ${a} liegen keine Daten vor.</p><a href="#/" class="btn">← Dashboard</a>`;return}const i=z(a),l=n.tagestyp==="Stempelzeit"?Ue(n,s):null,r=Je(i,s.berufsschulMuster);t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat/${a.slice(0,7)}" class="btn sm">← Zum Monat</a>
    </div>
    <h1 class="view-title">${Ne(i)}</h1>
    <p class="view-subtitle">${n.tagestyp??"Kein Typ"} · KW ${(o=n.wocheKey)==null?void 0:o.split("-")[1]}</p>

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${n.ist!=null?n.ist.toFixed(2).replace(".",",")+"h":"—"}</div>
        <div class="hint">= ${n.ist!=null?ee(n.ist):"—"}</div>
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
          <div class="tag-detail-value">${n.tagestyp?`<span class="pill ${Pn(n.tagestyp)}">${q(n.tagestyp)}</span>`:"—"}</div>
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
  `}function Pn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function q(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function Tn({root:e}){const[t,a]=await Promise.all([W(),Q()]);if(!t.length){e.innerHTML='<h1 class="view-title">Analytics</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}e.innerHTML=`
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
  `,requestAnimationFrame(()=>{Ca(e.querySelector("#c-saldo"),a),Ye(e.querySelector("#heatmap"),t,{monate:8}),ja(e.querySelector("#c-istsoll"),t),_a(e.querySelector("#c-kumulativ"),t),Ia(e.querySelector("#c-startend"),t),Ra(e.querySelector("#c-wochentag"),t),Ba(e.querySelector("#c-pausen"),t),Va(e.querySelector("#c-donut"),t);const n=t.slice(-30);ge(e.querySelector("#c-alle-tage"),n)})}async function Ln({root:e}){const t=await W();if(!t.length){e.innerHTML='<h1 class="view-title">Berichtsheft</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a=[...new Set(t.map(i=>i.monatKey))].sort().reverse();e.innerHTML=`
    <h1 class="view-title">Berichtsheft-Export</h1>
    <p class="view-subtitle">Kopiere die Arbeitsstunden im HH:MM-Format direkt in dein Berichtsheft.</p>

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 16px; align-items: center;">
        <h2 style="margin: 0;">Filter</h2>
        <div style="display: flex; gap: 8px; align-items: center;">
          <label style="color: var(--fg-muted); font-size: 13px;">Monat:</label>
          <select id="filter-monat">
            <option value="">Alle</option>
            ${a.map(i=>`<option value="${i}">${Wn(i)}</option>`).join("")}
          </select>
          <button class="btn sm" id="btn-copy-all">Alle sichtbaren kopieren</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div id="liste"></div>
    </div>
  `;const n=e.querySelector("#filter-monat");n.addEventListener("change",()=>s()),e.querySelector("#btn-copy-all").addEventListener("click",()=>{const i=e.querySelectorAll("#liste tr[data-copy]"),l=Array.from(i).map(r=>r.getAttribute("data-copy")).join(`
`);navigator.clipboard.writeText(l).then(()=>S(`${i.length} Zeilen kopiert.`))});function s(){const i=n.value,r=(i?t.filter(o=>o.monatKey===i):t).filter(o=>o.ist!=null&&o.ist>0&&o.tagestyp!=="Wochenende");e.querySelector("#liste").innerHTML=En(r),e.querySelectorAll(".copy-val").forEach(o=>{o.addEventListener("click",async()=>{const c=o.getAttribute("data-val");await navigator.clipboard.writeText(c),o.classList.add("ok");const u=o.textContent;o.textContent="✓ kopiert",setTimeout(()=>{o.classList.remove("ok"),o.textContent=u},1200)})})}s()}function En(e){return e.length?`
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
        ${e.map(t=>{const a=ee(t.ist),n=`${y(z(t.datum))}	${a}`;return`
            <tr data-copy="${We(n)}">
              <td class="tabular">${y(z(t.datum))}</td>
              <td>${Fn(t.wochentag)}</td>
              <td>${t.tagestyp?`<span class="pill ${Kn(t.tagestyp)}">${tt(t.tagestyp)}</span>`:"—"}</td>
              <td class="num tabular">${t.ist.toFixed(2).replace(".",",")}</td>
              <td class="num tabular" style="font-weight: 600;">${a}</td>
              <td><button class="copy-val" data-val="${We(a)}">📋 ${a}</button></td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `:'<p style="color: var(--fg-muted);">Keine Tage in dieser Auswahl.</p>'}function Fn(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function Wn(e){const[t,a]=e.split("-");return x(new Date(parseInt(t),parseInt(a)-1,1),"LLLL yyyy",{locale:B})}function Kn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function tt(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function We(e){return tt(e)}const On={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"},pe={bs_tag_fehlt:{key:"bs_tag_fehlt",titel:"Berufsschultag fehlt",beschreibung:"Wenn ein Berufsschultag komplett nicht im Zeitnachweis eingetragen wurde.",betreff:"Bitte um Korrektur Zeitnachweis — Berufsschultag {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

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
Personalnummer {personalnr}`}};function at(e,t){const a=pe[e];return a?{...a,...t??{}}:null}function nt(e,t){const a=Ke(e.text,t);return{betreff:Ke(e.betreff,t),text:a}}function Ke(e,t){return e.replace(/\{(\w+)\}/g,(a,n)=>t[n]!=null?String(t[n]):`{${n}}`)}function Cn(e,t){const a=t.datum?new Date(t.datum):null,n=a?Ne(a).split(", ")[1]:"";return{name:e.name||"Ihr Mitarbeiter",personalnr:e.personalnummer||"—",kostenstelle:e.kostenstelle||"—",datum:n,wochentag:On[t.wochentag]??t.wochentag??"",zeitwirtschaft_anrede:e.zeitwirtschaftAnrede||"Frau Kanarya",zeitwirtschaft_email:e.zeitwirtschaftEmail||"zeitwirtschaft@putzmeister.com",ist:t.ist!=null?t.ist.toFixed(2).replace(".",","):"",soll:t.soll!=null?t.soll.toFixed(2).replace(".",","):"",abgezogen:t.abgezogen!=null?Math.round(t.abgezogen*60):"",gestempelt:t.gestempelt!=null?Math.round(t.gestempelt*60):"",verlust:t.verlustMinuten??""}}function In(e,t,a){const n=nt(t,a),s=e.zeitwirtschaftEmail||"zeitwirtschaft@putzmeister.com",i=new URLSearchParams;return i.set("subject",n.betreff),i.set("body",n.text),`mailto:${encodeURIComponent(s)}?${i.toString().replace(/\+/g,"%20")}`}async function Bn({root:e}){const[t,a,n,s]=await Promise.all([W(),R(),Q(),Nt()]),i=Object.fromEntries(s.map(o=>[o.key,o])),l=ue(t,a,new Date).filter(o=>o.mailVorlageKey),r=Qe(n);e.innerHTML=`
    <h1 class="view-title">Mail-Vorlagen</h1>
    <p class="view-subtitle">Vorformulierte Mails an die Zeitwirtschaft bei erkannten Fehlern im Zeitnachweis.</p>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Offene Warnungen mit Mail-Vorschlag</h2>
      <p class="hint" style="margin-bottom: 16px;">Diese Warnungen haben einen roten Schweregrad und sind eine direkte Mail wert.</p>

      ${l.length===0?'<div class="empty-state"><div class="empty-state-icon">✓</div><p>Keine akuten Warnungen — top.</p></div>':l.map(o=>Rn(o,a,i)).join("")}

      ${r.length>0?`
        <h3 style="margin-top: 24px;">Saldo-Plausibilität</h3>
        ${r.map(o=>`
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
        ${Object.keys(pe).map(o=>{const c=at(o,i[o]);return Vn(c)}).join("")}
      </div>
    </div>
  `,jn(e),_n(e)}function Rn(e,t,a){const n=at(e.mailVorlageKey,a[e.mailVorlageKey]);if(!n)return"";const s=Cn(t,e),i=nt(n,s),l=In(t,n,s);return`
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
        <a class="btn primary sm" href="${l}" target="_blank" rel="noopener">✉ Mail-Client öffnen</a>
        <button class="btn sm btn-copy-mail" data-subject="${oe(i.betreff)}" data-body="${oe(i.text)}">📋 Betreff + Text kopieren</button>
      </div>
    </div>
  `}function Vn(e){return`
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
        <input type="text" class="v-betreff" value="${oe(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 240px;">${T(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function jn(e){e.querySelectorAll(".btn-save-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-key"),n=t.closest(".vorlagen-item"),s=n.querySelector(".v-betreff").value,i=n.querySelector(".v-text").value;await xe(a,{betreff:s,text:i}),S("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-key"),n=pe[a];n&&confirm(`Vorlage "${n.titel}" auf Default zurücksetzen?`)&&(await xe(a,{betreff:n.betreff,text:n.text}),S("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function _n(e){e.querySelectorAll(".btn-copy-mail").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-subject"),n=t.getAttribute("data-body"),s=`Betreff: ${a}

${n}`;await navigator.clipboard.writeText(s),S("Mail-Text kopiert.")})})}function T(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function oe(e){return T(e)}async function Hn({root:e}){const t=Ve(),a=await R();e.innerHTML=`
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
  `,e.querySelectorAll("[data-theme]").forEach(n=>{n.addEventListener("click",()=>{const s=n.getAttribute("data-theme");ce(s),e.querySelectorAll("[data-theme]").forEach(i=>i.classList.toggle("active",i===n)),S(`Theme: ${n.textContent.trim()}`)})}),e.querySelector("#pause-sel").addEventListener("change",async n=>{const s={...a,pausenRegel:n.target.value};await de(s),S("Pausen-Regel gespeichert.")})}async function Oe(){var t;At();const e=document.getElementById("content");(t=document.getElementById("theme-toggle"))==null||t.addEventListener("click",()=>Pt()),Tt(()=>{Kt()}),await Ct()&&setTimeout(()=>{me('Parser wurde aktualisiert. Bitte lade deinen Zeitnachweis unter "Daten" neu hoch.',{type:"info",duration:12e3})},500),D("/",ke),D("/dashboard",ke),D("/analytics",Tn),D("/monat",vn),D("/monat/:yyyymm",bn),D("/woche",xn),D("/woche/:yyyykw",Sn),D("/tag/:datum",An),D("/berichtsheft",Ln),D("/mails",Bn),D("/profil",pn),D("/daten",dn),D("/einstellungen",Hn),Ft(e),location.hash||Et("/")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Oe):Oe();
