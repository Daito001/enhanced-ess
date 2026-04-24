import{D as at}from"./dexie-BODkcwel.js";import{b as re,a as H,c as G,d as nt,f as x,e as Y,i as Oe,p as st,g as it,h as rt,j as M,k as Ke,l as lt,s as ot,m as ct}from"./datefns-Dq49jaKA.js";import{C as E,L as dt,B as ut,D as gt,S as ht,a as mt,b as ft,P as pt,A as vt,c as bt,d as yt,T as wt,p as $t,e as zt,i as Mt}from"./chartjs-CRgZvhTJ.js";import{_ as xt,a as St}from"./pdfjs-BDGsuRSB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const se="theme";function kt(){const e=localStorage.getItem(se)??"auto";ue(e)}function ue(e){e==="auto"?document.documentElement.removeAttribute("data-theme"):document.documentElement.setAttribute("data-theme",e),localStorage.setItem(se,e),Pt(e)}function Dt(){const e=localStorage.getItem(se)??"auto",t=e==="auto"?"light":e==="light"?"dark":"auto";return ue(t),Ce(t),t}const le=new Set;function At(e){return le.add(e),()=>le.delete(e)}function Ce(e){for(const t of le)try{t(e)}catch(a){console.error(a)}}var Fe;if(typeof window<"u"&&window.matchMedia){const e=window.matchMedia("(prefers-color-scheme: dark)");(Fe=e.addEventListener)==null||Fe.call(e,"change",()=>{Ie()==="auto"&&Ce("auto")})}function Pt(e){const t=document.getElementById("theme-toggle");if(!t)return;const a=t.querySelector(".theme-label"),n=t.querySelector(".theme-icon-dark"),s=t.querySelector(".theme-icon-light");a&&(e==="auto"?(a.textContent="Auto",n&&(n.style.display="inline"),s&&(s.style.display="inline")):e==="light"?(a.textContent="Hell",n&&(n.style.display="none"),s&&(s.style.display="inline")):(a.textContent="Dunkel",n&&(n.style.display="inline"),s&&(s.style.display="none")))}function Ie(){return localStorage.getItem(se)??"auto"}const Be=[];let Re=null;function k(e,t){const a=e.split("/").filter(Boolean),n=[],s=new RegExp("^/?"+a.map(r=>r.startsWith(":")?(n.push(r.slice(1)),"([^/]+)"):Ft(r)).join("/")+"/?$");Be.push({pattern:e,regex:s,paramNames:n,render:t})}function Tt(e){e.startsWith("#")||(e="#"+e),window.location.hash===e?L():window.location.hash=e}function Et(e,{onNavigate:t}={}){window.addEventListener("hashchange",L),L.rootEl=e,L.onNavigate=t,L()}async function L(){var n;const e=L.rootEl,t=window.location.hash.slice(1)||"/",a=t.startsWith("/")?t:`/${t}`;for(const s of Be){const r=s.regex.exec(a);if(r){const l={};s.paramNames.forEach((i,o)=>l[i]=decodeURIComponent(r[o+1])),Re=a,(n=L.onNavigate)==null||n.call(L,a),Lt(a);try{e.classList.remove("view-enter"),await s.render({params:l,path:a,root:e}),e.classList.add("view-enter")}catch(i){console.error("Route render error:",i),e.innerHTML=`<div class="empty-state">
          <div class="empty-state-icon">⚠</div>
          <h2>Fehler beim Anzeigen</h2>
          <p>${$e(i.message||String(i))}</p>
        </div>`}return}}e.innerHTML=`<div class="empty-state">
    <div class="empty-state-icon">?</div>
    <h2>Seite nicht gefunden</h2>
    <p>Die Route <code>${$e(a)}</code> existiert nicht.</p>
    <a href="#/" class="btn primary">Zum Dashboard</a>
  </div>`}function Lt(e){document.querySelectorAll("[data-route]").forEach(t=>{const a=t.getAttribute("data-route"),n=a==="/"?e==="/":e===a||e.startsWith(a+"/");t.classList.toggle("active",n)})}function Wt(){Re!=null&&L()}function Ft(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function $e(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const m=new at("zeitnachweis");m.version(1).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"});m.version(2).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});m.version(3).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});async function Ot(){const e=await m.einstellungen.get("__migration_reset");return(e==null?void 0:e.value)===!0?(await m.einstellungen.delete("__migration_reset"),!0):!1}async function B(){return await m.profil.get("self")??Ve()}async function ge(e){const t={...e,id:"self",updatedAt:new Date().toISOString()};return await m.profil.put(t),t}function Ve(){return{id:"self",name:"",personalnummer:"",kostenstelle:"",einstellungsdatum:null,arbeitszeitplanregel:"",geburtsdatum:null,sollStundenProWoche:35,sollStundenProTag:7,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null},zeitwirtschaftEmail:"zeitwirtschaft@putzmeister.com",zeitwirtschaftAnrede:"Frau Kanarya",pausenRegel:"auto",erstelltAm:new Date().toISOString()}}async function Kt(e,t=null){const a=await m.einstellungen.get(e);return a?a.value:t}async function Ct(e,t){await m.einstellungen.put({key:e,value:t})}async function F(){return await m.tage.orderBy("datum").toArray()}async function It(e){return e.length?(await m.tage.bulkPut(e),e.length):0}async function Bt(e){return e.length?(await m.monate.bulkPut(e),e.length):0}async function X(){return await m.monate.orderBy("monatKey").toArray()}async function Rt(e){return await m.uploads.add({...e,hochladeDatum:new Date().toISOString()})}async function _e(){return await m.uploads.orderBy("hochladeDatum").reverse().toArray()}async function Vt(){await Promise.all([m.profil.clear(),m.tage.clear(),m.monate.clear(),m.uploads.clear(),m.einstellungen.clear(),m.mailVorlagen.clear(),m.warnungDismissals.clear()])}async function _t(){await Promise.all([m.tage.clear(),m.monate.clear(),m.uploads.clear(),m.warnungDismissals.clear()])}async function jt(){const[e,t,a,n,s,r,l]=await Promise.all([m.profil.toArray(),m.tage.toArray(),m.monate.toArray(),m.uploads.toArray(),m.einstellungen.toArray(),m.mailVorlagen.toArray(),m.warnungDismissals.toArray()]);return{version:1,exportedAt:new Date().toISOString(),data:{profil:e,tage:t,monate:a,uploads:n,einstellungen:s,mailVorlagen:r,warnungDismissals:l}}}async function Ht(e){if(!e||e.version!==1||!e.data)throw new Error("Ungültiges oder inkompatibles Backup-Format.");const t=e.data;await m.transaction("rw",m.profil,m.tage,m.monate,m.uploads,m.einstellungen,m.mailVorlagen,m.warnungDismissals,async()=>{var a,n,s,r,l,i,o;(a=t.profil)!=null&&a.length&&await m.profil.bulkPut(t.profil),(n=t.tage)!=null&&n.length&&await m.tage.bulkPut(t.tage),(s=t.monate)!=null&&s.length&&await m.monate.bulkPut(t.monate),(r=t.uploads)!=null&&r.length&&await m.uploads.bulkPut(t.uploads),(l=t.einstellungen)!=null&&l.length&&await m.einstellungen.bulkPut(t.einstellungen),(i=t.mailVorlagen)!=null&&i.length&&await m.mailVorlagen.bulkPut(t.mailVorlagen),(o=t.warnungDismissals)!=null&&o.length&&await m.warnungDismissals.bulkPut(t.warnungDismissals)})}async function ze(e,t){await m.mailVorlagen.put({key:e,...t})}async function Gt(){return await m.mailVorlagen.toArray()}async function Zt(e,t){await m.warnungDismissals.put({key:`${e}-${t}`,datum:e,typ:t,dismissedAt:new Date().toISOString()})}async function Nt(){return await m.warnungDismissals.toArray()}function je(e){if(e==null)return null;if(typeof e=="number")return e;let t=String(e).trim();if(!t)return null;let a=!1;t.endsWith("-")&&(a=!0,t=t.slice(0,-1).trim()),t=t.replace(",",".");const n=parseFloat(t);return isNaN(n)?null:a?-n:n}function He(e){if(e==null||isNaN(e))return"—";const t=e<0,a=Math.abs(e),n=Math.floor(a),s=Math.round((a-n)*60);let r=n,l=s;return l===60&&(r+=1,l=0),`${t?"-":""}${r}:${String(l).padStart(2,"0")}`}function D(e,t={}){if(e==null||isNaN(e))return"—";const{signed:a=!1,suffix:n="h"}=t,s=a&&e>0?"+":"",r=e.toFixed(2).replace(".",",");return`${s}${r}${n}`}function V(e){if(!e)return null;const t=/^(\d{1,2}):(\d{2})$/.exec(String(e).trim());return t?parseInt(t[1],10)*60+parseInt(t[2],10):null}const Me={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},qt=(e,t,a)=>{let n;const s=a!=null&&a.addSuffix?Me[e].withPreposition:Me[e].standalone;return typeof s=="string"?n=s:t===1?n=s.one:n=s.other.replace("{{count}}",String(t)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:"vor "+n:n},Jt={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},Ut={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Qt={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Yt={date:re({formats:Jt,defaultWidth:"full"}),time:re({formats:Ut,defaultWidth:"full"}),dateTime:re({formats:Qt,defaultWidth:"full"})},Xt={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},ea=(e,t,a,n)=>Xt[e],ta={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},aa={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},oe={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},na={narrow:oe.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:oe.wide},sa={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},ia={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},ra={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},la=e=>Number(e)+".",oa={ordinalNumber:la,era:H({values:ta,defaultWidth:"wide"}),quarter:H({values:aa,defaultWidth:"wide",argumentCallback:e=>e-1}),month:H({values:oe,formattingValues:na,defaultWidth:"wide"}),day:H({values:sa,defaultWidth:"wide"}),dayPeriod:H({values:ia,defaultWidth:"wide",formattingValues:ra,defaultFormattingWidth:"wide"})},ca=/^(\d+)(\.)?/i,da=/\d+/i,ua={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},ga={any:[/^v/i,/^n/i]},ha={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},ma={any:[/1/i,/2/i,/3/i,/4/i]},fa={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},pa={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},va={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},ba={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},ya={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},wa={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},$a={ordinalNumber:nt({matchPattern:ca,parsePattern:da,valueCallback:e=>parseInt(e)}),era:G({matchPatterns:ua,defaultMatchWidth:"wide",parsePatterns:ga,defaultParseWidth:"any"}),quarter:G({matchPatterns:ha,defaultMatchWidth:"wide",parsePatterns:ma,defaultParseWidth:"any",valueCallback:e=>e+1}),month:G({matchPatterns:fa,defaultMatchWidth:"wide",parsePatterns:pa,defaultParseWidth:"any"}),day:G({matchPatterns:va,defaultMatchWidth:"wide",parsePatterns:ba,defaultParseWidth:"any"}),dayPeriod:G({matchPatterns:ya,defaultMatchWidth:"wide",parsePatterns:wa,defaultParseWidth:"any"})},I={code:"de",formatDistance:qt,formatLong:Yt,formatRelative:ea,localize:oa,match:$a,options:{weekStartsOn:1,firstWeekContainsDate:4}};function Q(e){if(!e)return null;const t=e.trim();return st(t,"dd.MM.yyyy",new Date)}function y(e){return x(e,"dd.MM.yyyy")}function Ge(e){return x(e,"EE, dd.MM.yyyy",{locale:I})}function za(e){return`${it(e)}-${String(rt(e)).padStart(2,"0")}`}function Ze(e){return x(e,"yyyy-MM")}function Ma(e){return x(e,"yyyy-MM-dd")}function xa(e,t){if(!e||!t)return 0;e>t&&([e,t]=[t,e]);let a=0,n=new Date(e);for(;n<t;)n=Y(n,1),Oe(n)||a++;return a}function C(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Sa(e){var l;const t=e.filter(i=>i.tagestyp==="Berufsschule");if(t.length<2)return{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null};const a={};for(const i of t)a[l=i.wochentag]??(a[l]=[]),a[i.wochentag].push(i);const n=[],s=[];let r=null;for(const[i,o]of Object.entries(a)){o.sort((h,u)=>h.datum.localeCompare(u.datum));const c=M(o[0].datum),d=M(o[o.length-1].datum),f=Ke(d,c,{weekStartsOn:1})+1,g=o.length/Math.max(1,f);g>=.75?n.push(i):g>=.35&&g<=.65&&(s.push(i),(!r||M(o[0].datum)<M(r))&&(r=o[0].datum))}return{wochentageWoechentlich:n,wochentage14Taegig:s,referenzDatum14Taegig:r}}function Ne(e,t){var s,r;if(!t)return!1;const n=["SO","MO","DI","MI","DO","FR","SA"][e.getDay()];if((s=t.wochentageWoechentlich)!=null&&s.includes(n))return!0;if((r=t.wochentage14Taegig)!=null&&r.includes(n)&&t.referenzDatum14Taegig){const l=M(t.referenzDatum14Taegig),i=Ke(e,l,{weekStartsOn:1});if(i>=0&&i%2===0)return!0}return!1}function ka(e,t){if(!e)return"arbzg";const a=M(e);return lt(t,a)<18?"jarbschg":"arbzg"}function Da(e,t){return e==null?0:t==="jarbschg"?e>6?1:e>4.5?.5:0:e>9?.75:e>6?.5:0}function Aa(e){if(!e||e.length<2)return 0;const t=e.filter(n=>n.von&&n.bis).map(n=>({von:V(n.von),bis:V(n.bis)})).filter(n=>n.von!=null&&n.bis!=null).sort((n,s)=>n.von-s.von);let a=0;for(let n=1;n<t.length;n++){const s=t[n].von-t[n-1].bis;(s>0&&s>=15||s>0)&&(a+=s)}return a/60}function qe(e,t){const a=e.zeitSpannen??[];if(!a.length||a.every(u=>!u.von))return{keinAnspruch:!0};const n=Aa(a),s=e.pause??0,r=Pa(a),l=r-s,i=t.pausenRegel&&t.pausenRegel!=="auto"?t.pausenRegel==="jarbschg"?"jarbschg":"arbzg":ka(t.geburtsdatum,M(e.datum)),o=Da(l,i),c=Math.max(n,o),d=s-c,f=Math.max(0,o-n);let g="ok",h=null;if(d>.05)g="fehler_zeitwirtschaft",h=`${Math.round(d*60)} min Pause wurden zusätzlich zur gesetzlichen Pflicht und zur gestempelten Pause abgezogen. Das sieht nach einem Zeitwirtschafts-Fehler aus.`;else if(f>.05&&s>n+.02){g="aufstockung_legal";const u=Math.round(f*60);h=`Du hast ${Math.round(n*60)} min Pause gestempelt, aber bei ${l.toFixed(2).replace(".",",")}h Arbeitszeit schreibt das Gesetz (${i.toUpperCase()}) ${Math.round(o*60)} min vor. Die fehlenden ${u} min wurden automatisch als Pause gewertet. Das ist gesetzeskonform — nächstes Mal einfach länger Pause machen.`}return{arbeitszeitMitPause:r,arbeitszeitOhnePause:l,gestempeltePause:n,abgezogenePause:s,gesetzlichePflicht:o,gesetz:i,legalerAbzug:c,unrechtmaessigerVerlustMin:Math.round(Math.max(0,d)*60),aufstockungMin:Math.round(Math.max(0,f)*60),typ:g,warnung:h}}function Pa(e){let t=0;for(const a of e){if(!a.von||!a.bis)continue;const n=V(a.von),s=V(a.bis);n!=null&&s!=null&&s>n&&(t+=s-n)}return t/60}const Z={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function he(e,t,a,n=new Set){var d,f;const s=[],r=a??new Date,l=new Map(e.map(g=>[g.datum,g]));if(!e.length)return s;const i=M(e[0].datum),o=r;for(let g=new Date(i);g<=o;g=Y(g,1)){if(Oe(g))continue;const h=x(g,"yyyy-MM-dd"),u=l.get(h),v=xa(g,o);if(!u||!u.tagestyp&&!u.ist&&(((d=u.zeitSpannen)==null?void 0:d.length)??0)===0){if(Ne(g,t.berufsschulMuster)){const p=v>=4?"error":v>=2?"warn":"info";N(s,n,{datum:h,wochentag:(u==null?void 0:u.wochentag)??ee(g),typ:"bs_tag_fehlt",schweregrad:p,titel:`Berufsschultag nicht eingetragen: ${y(g)}`,beschreibung:`Laut deinem Profil hast du am ${Z[ee(g)]}, ${y(g)} Berufsschule. Im Zeitnachweis fehlt der Tag bisher${v>=4?" — bitte bei der Zeitwirtschaft nachhaken":""}.`,alter:v,mailVorlageKey:p==="error"?"bs_tag_fehlt":null})}else{const p=v>=4?"error":v>=2?"warn":"info";N(s,n,{datum:h,wochentag:ee(g),typ:"stempelzeit_fehlt",schweregrad:p,titel:`Keine Stempelzeit am ${y(g)}`,beschreibung:`Am ${Z[ee(g)]}, ${y(g)} wurde keine Stempelzeit erfasst. Falls du an diesem Tag im Haus warst, sollte die Zeitwirtschaft das nachtragen${v>=4?" — es ist inzwischen ≥4 Werktage her":""}.`,alter:v,mailVorlageKey:p==="error"?"stempelzeit_fehlt":null})}continue}if(u.tagestyp==="Berufsschule"&&u.ist!=null&&u.soll!=null&&u.ist<u.soll-.01&&N(s,n,{datum:h,wochentag:u.wochentag,typ:"bs_stunden_falsch",schweregrad:"error",titel:`Berufsschultag mit zu wenig Stunden: ${y(g)}`,beschreibung:`Am ${Z[u.wochentag]}, ${y(g)} sind nur ${u.ist.toFixed(2).replace(".",",")}h gebucht statt regulär ${u.soll.toFixed(2).replace(".",",")}h. Die Zeitwirtschaft hat den Berufsschultag möglicherweise nur halb erfasst.`,ist:u.ist,soll:u.soll,mailVorlageKey:"bs_stunden_falsch"}),u.tagestyp==="Stempelzeit"&&((f=u.zeitSpannen)==null?void 0:f.length)>1){const p=qe(u,t);(p==null?void 0:p.typ)==="fehler_zeitwirtschaft"&&p.unrechtmaessigerVerlustMin>=5?N(s,n,{datum:h,wochentag:u.wochentag,typ:"pausen_abzug",schweregrad:p.unrechtmaessigerVerlustMin>=15?"error":"warn",titel:`Pausen-Abzug fehlerhaft (${y(g)})`,beschreibung:`Am ${Z[u.wochentag]}, ${y(g)} wurden ${Math.round(p.abgezogenePause*60)} min Pause abgezogen. Gestempelt: ${Math.round(p.gestempeltePause*60)} min, gesetzlich nötig (${p.gesetz.toUpperCase()}): ${Math.round(p.gesetzlichePflicht*60)} min. Differenz von ${p.unrechtmaessigerVerlustMin} min ist unerklärlich.`,verlustMinuten:p.unrechtmaessigerVerlustMin,abgezogen:p.abgezogenePause,gestempelt:p.gestempeltePause,mailVorlageKey:"pausen_abzug"}):(p==null?void 0:p.typ)==="aufstockung_legal"&&p.aufstockungMin>=10&&N(s,n,{datum:h,wochentag:u.wochentag,typ:"pausen_aufstockung",schweregrad:"info",titel:`Zu wenig Pause gestempelt (${y(g)}) — ${p.aufstockungMin} min automatisch aufgestockt`,beschreibung:`Am ${Z[u.wochentag]}, ${y(g)} hast du nur ${Math.round(p.gestempeltePause*60)} min Pause gemacht. Gesetz (${p.gesetz.toUpperCase()}) schreibt ${Math.round(p.gesetzlichePflicht*60)} min vor. Fehlende ${p.aufstockungMin} min wurden als Pause gewertet — das ist legal, aber du verlierst dadurch Arbeitszeit. Tipp: mach beim nächsten Mal etwas länger Mittag.`})}}const c={error:0,warn:1,info:2};return s.sort((g,h)=>{const u=c[g.schweregrad]-c[h.schweregrad];return u!==0?u:h.datum.localeCompare(g.datum)}),s}function Je(e,t=new Set){var n,s,r,l;const a=[];for(const i of e){const o=((n=i.glz)==null?void 0:n.saldoVorperiode)??0,c=((s=i.glz)==null?void 0:s.saldoAktuellePeriode)??0,d=((r=i.glz)==null?void 0:r.umgebuchteStunden)??0,f=(l=i.glz)==null?void 0:l.saldoGesamt;if(f==null)continue;const g=o+c+d,h=Math.abs(f-g);if(h>.03){const u=`${i.monatKey}-saldo_plausi`;t.has(u)||a.push({datum:`${i.monatKey}-01`,wochentag:"",typ:"saldo_plausi",schweregrad:"warn",titel:`Saldo-Differenz im Monat ${i.monatKey}`,beschreibung:`Rechnung: Vorperiode ${o.toFixed(2)} + aktuelle Periode ${c.toFixed(2)} + umgebucht ${d.toFixed(2)} = ${g.toFixed(2)}, aber dein Saldo wird mit ${f.toFixed(2)} angezeigt. Abweichung: ${h.toFixed(2)}h.`,soll:g,ist:f})}}return a}function N(e,t,a){const n=`${a.datum}-${a.typ}`;t.has(n)||(a.id=n,e.push(a))}function ee(e){return["SO","MO","DI","MI","DO","FR","SA"][e.getDay()]}function Ta(e,t){var o,c,d;const a=[...e].sort((f,g)=>f.datum.localeCompare(g.datum));if(!a.length)return[];const n=new Map(t.map(f=>[f.monatKey,f])),s={};for(const f of a)s[o=f.monatKey]??(s[o]=[]),s[f.monatKey].push(f);const r=Object.keys(s).sort(),l=[];let i=null;for(const f of r){const g=n.get(f);let h;((c=g==null?void 0:g.glz)==null?void 0:c.saldoVorperiode)!=null?h=g.glz.saldoVorperiode:i!=null?h=i:h=0;const u=s[f];for(const v of u)v.diff!=null&&(h+=v.diff),l.push({datum:v.datum,wochentag:v.wochentag,saldo:Math.round(h*100)/100,diff:v.diff,ist:v.ist,soll:v.soll,tagestyp:v.tagestyp,monatKey:v.monatKey,zeitSpannen:v.zeitSpannen});if(((d=g==null?void 0:g.glz)==null?void 0:d.saldoGesamt)!=null){const v=g.glz.saldoGesamt-h;if(Math.abs(v)>.02&&l.length>0){const p=l.length-1;l[p].umbuchung=v,l[p].saldo=Math.round((l[p].saldo+v)*100)/100,h=l[p].saldo}i=g.glz.saldoGesamt}else i=h}return l}function Ea(e,t){if(!e.length)return[];if(t==="alles")return e;const a=Math.min(t,e.length);return e.slice(-a)}function La(e){return e.length?e[e.length-1].saldo:0}function Wa(e){if(!e.length)return 0;const t=e[0].saldo-(e[0].diff??0),a=e[e.length-1].saldo;return Math.round((a-t)*100)/100}E.register(dt,ut,gt,ht,mt,ft,pt,vt,bt,yt,wt,$t,zt,Mt);function z(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function O(){return{fg:z("--fg"),fgMuted:z("--fg-muted"),fgSubtle:z("--fg-subtle"),border:z("--border"),surface:z("--surface"),accent:z("--accent"),success:z("--success"),warn:z("--warn"),danger:z("--danger"),info:z("--info"),palette:[z("--chart-1"),z("--chart-2"),z("--chart-3"),z("--chart-4"),z("--chart-5"),z("--chart-6"),z("--chart-7")]}}function w(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.fgMuted,font:{size:12}}},tooltip:{backgroundColor:e.surface,titleColor:e.fg,bodyColor:e.fg,borderColor:e.border,borderWidth:1,padding:10,displayColors:!0}},scales:{x:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}},y:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}}}}}function Fa(e,t){const a=O();if(K(e),!(t!=null&&t.length))return;const n=t.map(r=>x(M(r.datum),"dd.MM.")),s=t.map(r=>r.saldo);return s.map(r=>r>=0?a.success:a.danger),new E(e,{type:"line",data:{labels:n,datasets:[{label:"Tages-Saldo",data:s,borderColor:a.accent,backgroundColor:fe(a.accent,.14),tension:.25,pointRadius:2,pointHoverRadius:5,pointBackgroundColor:s.map(r=>r>=0?a.success:a.danger),pointBorderColor:a.surface,pointBorderWidth:1,fill:!0,borderWidth:2}]},options:{...w(a),plugins:{...w(a).plugins,legend:{display:!1},tooltip:{...w(a).plugins.tooltip,callbacks:{title:r=>{const l=t[r[0].dataIndex];return x(M(l.datum),"EE, dd.MM.yyyy",{locale:I})},label:r=>{const l=t[r.dataIndex],i=[`Saldo: ${l.saldo.toFixed(2).replace(".",",")}h`];return l.diff!=null&&i.push(`Tages-Diff: ${l.diff>=0?"+":""}${l.diff.toFixed(2).replace(".",",")}h`),l.tagestyp&&i.push(`Typ: ${l.tagestyp}`),l.umbuchung&&i.push(`Umbuchung: ${l.umbuchung>=0?"+":""}${l.umbuchung.toFixed(2).replace(".",",")}h`),i}}}},scales:{...w(a).scales,y:{...w(a).scales.y,ticks:{...w(a).scales.y.ticks,callback:r=>`${r>=0?"+":""}${r.toFixed(1).replace(".",",")}h`}}}}})}function Oa(e,t){const a=O();if(K(e),!(t!=null&&t.length))return;const n=t.map(r=>r.monatKey),s=t.map(r=>{var l;return((l=r.glz)==null?void 0:l.saldoGesamt)??0});return new E(e,{type:"line",data:{labels:n,datasets:[{label:"GLZ-Saldo (Monatsende)",data:s,borderColor:a.accent,backgroundColor:fe(a.accent,.18),tension:.35,fill:!0,pointRadius:4}]},options:w(a)})}function me(e,t){const a=O();if(K(e),!(t!=null&&t.length))return;const n=t.map(l=>x(M(l.datum),"dd.MM.")),s=t.map(l=>l.ist??0),r=t.map(l=>_a(l.tagestyp,a));return new E(e,{type:"bar",data:{labels:n,datasets:[{label:"Ist-Stunden",data:s,backgroundColor:r,borderRadius:4,borderSkipped:!1}]},options:{...w(a),plugins:{...w(a).plugins,legend:{display:!1},tooltip:{...w(a).plugins.tooltip,callbacks:{label:l=>{const i=t[l.dataIndex];return`${i.tagestyp??"—"}: ${(i.ist??0).toFixed(2).replace(".",",")}h`}}}},scales:{...w(a).scales,y:{...w(a).scales.y,suggestedMin:0,suggestedMax:10}}}})}function Ka(e,t){const a=O();if(K(e),!(t!=null&&t.length))return;const n=t.filter(s=>{var r;return((r=s.zeitSpannen)==null?void 0:r.length)&&s.zeitSpannen[0].von}).map(s=>({x:M(s.datum).getTime(),von:V(s.zeitSpannen[0].von),bis:V(s.zeitSpannen[s.zeitSpannen.length-1].bis)}));return new E(e,{type:"scatter",data:{datasets:[{label:"Arbeitsbeginn",data:n.map(s=>({x:s.x,y:s.von})),backgroundColor:a.palette[0],pointRadius:3},{label:"Arbeitsende",data:n.map(s=>({x:s.x,y:s.bis})),backgroundColor:a.palette[3],pointRadius:3}]},options:{...w(a),scales:{x:{type:"linear",ticks:{color:a.fgMuted,callback:s=>x(new Date(s),"MMM yyyy",{locale:I})},grid:{color:a.border}},y:{min:0,max:20*60,ticks:{color:a.fgMuted,stepSize:60,callback:s=>`${String(Math.floor(s/60)).padStart(2,"0")}:00`},grid:{color:a.border}}}}})}function Ca(e,t){const a=O();K(e);const n={};for(const l of t){if(l.pause==null||l.tagestyp!=="Stempelzeit")continue;const i=Math.round(l.pause*60),o=Math.floor(i/15)*15;n[o]=(n[o]??0)+1}const s=Object.keys(n).map(Number).sort((l,i)=>l-i),r=s.map(l=>n[l]);return new E(e,{type:"bar",data:{labels:s.map(l=>`${l}–${l+14}min`),datasets:[{label:"Häufigkeit",data:r,backgroundColor:a.palette[1],borderRadius:4}]},options:{...w(a),plugins:{...w(a).plugins,legend:{display:!1}}}})}function Ia(e,t){const a=O();K(e);const n=["MO","DI","MI","DO","FR"],s={},r={};for(const i of n)s[i]=0,r[i]=0;for(const i of t)n.includes(i.wochentag)&&(i.ist==null||i.ist===0||(s[i.wochentag]+=i.ist,r[i.wochentag]+=1));const l=n.map(i=>r[i]>0?s[i]/r[i]:0);return new E(e,{type:"bar",data:{labels:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"],datasets:[{label:"Ø Ist-Stunden",data:l,backgroundColor:a.palette[2],borderRadius:4}]},options:{...w(a),plugins:{...w(a).plugins,legend:{display:!1}}}})}function Ba(e,t){const a=O();K(e);const n={};for(const l of t)!l.tagestyp||l.tagestyp==="Wochenende"||(n[l.tagestyp]=(n[l.tagestyp]??0)+1);const s=Object.keys(n),r=Object.values(n);return new E(e,{type:"doughnut",data:{labels:s,datasets:[{data:r,backgroundColor:s.map((l,i)=>a.palette[i%a.palette.length]),borderColor:a.surface,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:a.fgMuted,font:{size:12}}},tooltip:w(a).plugins.tooltip}}})}function Ra(e,t){const a=O();K(e);const n={};for(const i of t){const o=i.wocheKey;n[o]??(n[o]={ist:0,soll:0}),n[o].ist+=i.ist??0,n[o].soll+=i.soll??0}const s=Object.keys(n).sort(),r=s.map(i=>n[i].ist),l=s.map(i=>n[i].soll);return new E(e,{type:"bar",data:{labels:s.map(i=>"KW "+i.split("-")[1]),datasets:[{label:"Ist",data:r,backgroundColor:a.palette[0],borderRadius:4},{label:"Soll",data:l,backgroundColor:a.palette[3],borderRadius:4}]},options:w(a)})}function Va(e,t){const a=O();K(e);const n=t.slice().sort((l,i)=>l.datum.localeCompare(i.datum));let s=0;const r=n.map(l=>(s+=l.diff??0,{x:l.datum,y:s}));return new E(e,{type:"line",data:{labels:r.map(l=>l.x),datasets:[{label:"Kumulative Differenz (+/- Soll)",data:r.map(l=>l.y),borderColor:a.palette[5],backgroundColor:fe(a.palette[5],.15),fill:!0,tension:.2,pointRadius:0}]},options:{...w(a),scales:{x:{display:!1,grid:{display:!1}},y:{...w(a).scales.y}}}})}function Ue(e,t,{monate:a=8}={}){if(!e)return;if(e.innerHTML="",!t.length){e.innerHTML='<p style="color: var(--fg-muted); font-size: 13px;">Keine Daten.</p>';return}const n=new Map(t.map(u=>[u.datum,u])),r=M(t[t.length-1].datum),l=a*30,i=Y(r,-l),o=ot(i,{weekStartsOn:1}),c=ct(r,o)+1,d=Math.ceil(c/7),f=document.createElement("div");f.className="heatmap-month-labels",f.style.gridTemplateColumns=`repeat(${d}, 14px)`,e.appendChild(f);let g=-1;for(let u=0;u<d;u++){const v=Y(o,u*7),p=v.getMonth(),b=document.createElement("span");b.textContent=p!==g?x(v,"MMM",{locale:I}):"",f.appendChild(b),g=p}const h=document.createElement("div");h.className="heatmap",h.style.gridAutoFlow="column",h.style.gridTemplateRows="repeat(7, 14px)",h.style.gridTemplateColumns=`repeat(${d}, 14px)`;for(let u=0;u<d*7;u++){const v=Y(o,u);if(v>r||v<i){const R=document.createElement("div");R.className="heatmap-cell",R.style.background="transparent",h.appendChild(R);continue}const p=x(v,"yyyy-MM-dd"),b=n.get(p),S=document.createElement("div");S.className="heatmap-cell",S.title=`${x(v,"EE, dd.MM.yyyy",{locale:I})}${(b==null?void 0:b.ist)!=null?" · Ist "+b.ist.toFixed(2)+"h":""}${(b==null?void 0:b.diff)!=null?" · "+(b.diff>=0?"+":"")+b.diff.toFixed(2):""}`,(b==null?void 0:b.diff)!=null&&(b.diff<=-1?S.classList.add("neg-2"):b.diff<-.05?S.classList.add("neg-1"):b.diff>=1?S.classList.add("pos-2"):b.diff>.05&&S.classList.add("pos-1")),h.appendChild(S)}e.appendChild(h)}function K(e){const t=E.getChart(e);t&&t.destroy()}function fe(e,t){const a=e.replace("#","").trim();if(a.length!==6&&a.length!==3)return e;const n=a.length===3?a.split("").map(i=>i+i).join(""):a,s=parseInt(n.slice(0,2),16),r=parseInt(n.slice(2,4),16),l=parseInt(n.slice(4,6),16);return`rgba(${s}, ${r}, ${l}, ${t})`}function _a(e,t){const a=String(e??"").toLowerCase();return a.includes("stempel")?t.palette[0]:a.includes("berufs")?t.palette[1]:a.includes("urlaub")?t.palette[2]:a.includes("feiertag")?t.fgSubtle:a.includes("dienst")?t.palette[3]:a.includes("krank")?t.palette[4]:t.palette[5]}let ja=0;function ie(e,{type:t="info",duration:a=3500}={}){const n=document.getElementById("toast-root");if(!n)return;const s=document.createElement("div");s.className=`toast ${t}`,s.textContent=e,s.dataset.id=++ja,n.appendChild(s),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateY(-8px)",s.style.transition="opacity 220ms, transform 220ms",setTimeout(()=>s.remove(),250)},a)}function pe(e){return ie(e,{type:"error",duration:6e3})}function A(e){return ie(e,{type:"success"})}const Ha=[{key:7,label:"1 Woche"},{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:"alles",label:"Alles"}];async function xe({root:e}){var S,R,be,ye;const[t,a,n,s,r]=await Promise.all([B(),X(),F(),Nt(),Kt("dashboardZeitraum",14)]);if(n.length===0){e.innerHTML=Na();return}const l=!t.geburtsdatum||!((R=(S=t.berufsschulMuster)==null?void 0:S.wochentageWoechentlich)!=null&&R.length||(ye=(be=t.berufsschulMuster)==null?void 0:be.wochentage14Taegig)!=null&&ye.length),i=Ta(n,a),o=i.length;let c=r;typeof c=="number"&&c>o&&(c="alles");const d=new Set(s.map($=>$.key)),f=he(n,t,new Date,d),g=Je(a,d),h=[...f,...g],u=La(i),v=u>.05?"positive":u<-.05?"negative":"",p=h.filter($=>$.schweregrad==="error"),b=h.filter($=>$.schweregrad==="warn");e.innerHTML=`
    <h1 class="view-title">Dashboard</h1>
    <p class="view-subtitle">
      ${t.name?T(t.name):"Willkommen"}${t.personalnummer?` · Personalnr. ${T(t.personalnummer)}`:""}
      · Stand: ${T(y(new Date(n[n.length-1].datum)))}
    </p>

    <div class="saldo-hero" style="margin-bottom: 32px; align-items: stretch;">
      <div class="saldo-hero-text" style="min-width: 260px;">
        <h3>Aktueller Gleitzeit-Saldo</h3>
        <div class="saldo-value ${v}">${D(u,{signed:!0,suffix:""})}</div>
        <div class="saldo-unit">Stunden · tagesaktuell</div>
        <div id="hero-bewegung" class="saldo-trend flat" style="margin-top: 12px;"></div>
      </div>
      <div style="flex: 1; min-width: 400px; display: flex; flex-direction: column;">
        <div class="card-split" style="margin-bottom: 12px; align-items: center;">
          <h3 style="margin: 0;">Verlauf</h3>
          <div class="segmented" id="zeitraum-picker">
            ${Ha.map($=>{const W=typeof $.key=="number"&&$.key>o;return`<button type="button" data-key="${$.key}" class="${c===$.key?"active":""}" ${W?'disabled style="opacity:0.4"':""}>${$.label}</button>`}).join("")}
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
          seit ${T(y(new Date(n[0].datum)))}
        </div>
      </div>
      <div class="card">
        <h3>Monatsübersichten</h3>
        <div style="font-size: 32px; font-weight: 650; letter-spacing: -0.02em;" class="tabular">${a.length}</div>
      </div>
      <div class="card">
        <h3>Rote Warnungen</h3>
        <div class="tabular" style="font-size: 32px; font-weight: 650; letter-spacing: -0.02em; color: ${p.length>0?"var(--danger)":"var(--success)"};">${p.length}</div>
        <div style="color: var(--fg-muted); font-size: 12px; margin-top: 4px;">
          ${p.length>0?"sofort an Zeitwirtschaft":"keine akuten Fehler"}
        </div>
      </div>
      <div class="card">
        <h3>Gelbe Hinweise</h3>
        <div class="tabular" style="font-size: 32px; font-weight: 650; letter-spacing: -0.02em; color: ${b.length>0?"var(--warn)":"var(--fg-muted)"};">${b.length}</div>
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

    ${h.length>0?`
      <div class="card" style="margin-bottom: 32px;">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Offene Warnungen</h2>
          <a href="#/mails" class="btn sm">Alle verwalten →</a>
        </div>
        ${h.slice(0,5).map($=>Za($)).join("")}
        ${h.length>5?`<div style="margin-top: 12px; color: var(--fg-muted); font-size: 13px; text-align: center;">+ ${h.length-5} weitere → <a href="#/mails" style="color: var(--accent);">alle ansehen</a></div>`:""}
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
  `,Se(c,e,i),e.querySelectorAll("#zeitraum-picker button").forEach($=>{$.addEventListener("click",async()=>{if($.disabled)return;const W=$.getAttribute("data-key"),_=W==="alles"?"alles":parseInt(W,10);e.querySelectorAll("#zeitraum-picker button").forEach(j=>j.classList.toggle("active",j===$)),await Ct("dashboardZeitraum",_),Se(_,e,i)})}),requestAnimationFrame(()=>{Ue(e.querySelector("#mini-heatmap"),n,{monate:4})}),e.addEventListener("click",async $=>{const W=$.target.closest(".btn-dismiss");if(!W)return;const _=W.getAttribute("data-datum"),j=W.getAttribute("data-typ");if(!_||!j)return;await Zt(_,j),A("Warnung ausgeblendet.");const we=W.closest(".alert");we&&(we.style.display="none")})}function Se(e,t,a){const n=Ea(a,e),s=Wa(n);requestAnimationFrame(()=>{const o=t.querySelector("#saldo-chart");Fa(o,n)});const r=t.querySelector("#hero-bewegung");if(r){const o=s>.05?"up":s<-.05?"down":"flat",c=s>.05?"↑":s<-.05?"↓":"→";r.className=`saldo-trend ${o}`,r.innerHTML=`${c} ${Math.abs(s)<.01?"Unverändert":D(s,{signed:!0})} im Zeitraum`}const l=t.querySelector("#tage-info");if(l){const o=n.length;l.textContent=`${o} ${o===1?"Tag":"Tage"}`}const i=t.querySelector("#tage-liste");i&&(i.innerHTML=Ga(n.slice().reverse()))}function Ga(e){if(!e.length)return'<p class="hint">Keine Tage im Zeitraum.</p>';const t=Math.max(1,...e.map(a=>Math.abs(a.diff??0)));return`
    <div class="tages-liste">
      ${e.map(a=>{var o;const n=a.diff??0,s=n>0,r=Math.min(100,Math.abs(n)/t*100),l=s?"var(--success)":n<0?"var(--danger)":"var(--fg-subtle)",i=(o=a.zeitSpannen)==null?void 0:o[0];return`
          <a href="#/tag/${a.datum}" class="tag-row">
            <div class="tag-row-datum">
              <div class="tabular" style="font-weight: 600;">${T(y(new Date(a.datum)))}</div>
              <div class="tag-row-wd">${qa(a.wochentag)}</div>
            </div>
            <div class="tag-row-typ">
              ${a.tagestyp?`<span class="pill ${Ja(a.tagestyp)}">${T(a.tagestyp)}</span>`:'<span style="color: var(--fg-subtle); font-size: 12px;">—</span>'}
            </div>
            <div class="tag-row-zeit tabular" style="color: var(--fg-muted); font-size: 13px;">
              ${i!=null&&i.von?T(i.von)+"–"+T(i.bis??"?"):""}
            </div>
            <div class="tag-row-ist tabular">
              <div style="font-weight: 500;">${a.ist!=null?a.ist.toFixed(2).replace(".",",")+"h":"—"}</div>
              <div style="color: var(--fg-subtle); font-size: 11px;">Soll: ${a.soll!=null?a.soll.toFixed(1).replace(".",",")+"h":"—"}</div>
            </div>
            <div class="tag-row-bar">
              <div class="bar-track">
                <div class="bar-zero"></div>
                <div class="bar-fill ${s?"pos":"neg"}" style="width: ${r}%; background: ${l};"></div>
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
          <button class="btn ghost sm btn-dismiss" data-datum="${ke(e.datum)}" data-typ="${ke(e.typ)}">Ausblenden</button>
        </div>
      </div>
    </div>
  `}function Na(){return`
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
  `}function qa(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function Ja(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function T(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function ke(e){return T(e)}const Ua="/Program%20Files/Git/zeitnachweis-app/assets/pdf.worker.min-yatZIOMy.mjs";xt.workerSrc=Ua;const De={Januar:1,Februar:2,März:3,Maerz:3,April:4,Mai:5,Juni:6,Juli:7,August:8,September:9,Oktober:10,November:11,Dezember:12},Qa=["Stempelzeit","Berufsschule Std. bez","Berufsschule","Dienstreise Arbeitszeit","Reise öff.VM/PKW Beifahr.","Reise öff.VM/PKW","Urlaub","Gleitzeit","Arbeitsunfähigkeit","TgDtEinh","Neujahr","Karfreitag","Ostermontg","Ostmontg","Osterso.","Hl.3 Kön.","Allerhlg","Pfingstmo","Fronleichn","TdDtEinh"];async function Ya(e){const a=await St({data:e}).promise,n=[];for(let i=1;i<=a.numPages;i++){const c=await(await a.getPage(i)).getTextContent(),d=Xa(c.items);for(const f of d)n.push({page:i,text:f})}const s=en(n),{tage:r,monate:l}=tn(n);return{meta:s,tage:r,monate:l}}function Xa(e){if(!e.length)return[];const t=e.slice().sort((l,i)=>{const o=i.transform[5]-l.transform[5];return Math.abs(o)>2?o:l.transform[4]-i.transform[4]}),a=[];let n=null,s=[];const r=3;for(const l of t){const i=l.transform[5];n==null||Math.abs(i-n)<=r?(s.push(l),n==null&&(n=i)):(a.push(Ae(s)),s=[l],n=i)}return s.length&&a.push(Ae(s)),a.filter(l=>l.trim().length>0)}function Ae(e){e.sort((n,s)=>n.transform[4]-s.transform[4]);let t="",a=-1;for(const n of e){const s=n.transform[4];a>=0&&s-a>4?t+="  ":a>=0&&s-a>.5&&(t+=" "),t+=n.str,a=s+n.width}return t}function en(e){var a,n;const t={personalnummer:null,name:null,kostenstelle:null,personalbereich:null,einstellungsdatum:null,mitarbeiterkreis:null,arbeitszeitplanregel:null,zeitraumVon:null,zeitraumBis:null,stichtagAuswertung:null};for(let s=0;s<e.length;s++){const r=e[s].text,l=/vom\s+(\d{2}\.\d{2}\.\d{4})\s+bis\s+(\d{2}\.\d{2}\.\d{4})/i.exec(r);l&&(t.zeitraumVon=Q(l[1]),t.zeitraumBis=Q(l[2]));const i=/bis einschließlich dem\s+(\d{2}\.\d{2}\.\d{4})/i.exec(r);if(i&&(t.stichtagAuswertung=Q(i[1])),/Personalnummer/i.test(r)&&/Kostenstelle/i.test(r)){const c=(((a=e[s+1])==null?void 0:a.text)??"").trim().split(/\s{2,}/);c.length>=3&&(t.personalnummer=c[0],t.kostenstelle=c[1],t.personalbereich=c[2])}if(/Einstellungsdatum/i.test(r)&&/Mitarbeiterkreis/i.test(r)){const c=(((n=e[s+1])==null?void 0:n.text)??"").trim().split(/\s{2,}/);c.length>=3&&(t.einstellungsdatum=Q(c[0]),t.mitarbeiterkreis=c[1],t.arbeitszeitplanregel=c[2])}if(/Bei Rückfragen wenden Sie sich an/i.test(r))for(let o=s+1;o<Math.min(s+8,e.length);o++){const c=e[o].text.trim();if(/^[A-ZÄÖÜ][a-zäöüß]+(?:\s[A-ZÄÖÜ][a-zäöüß]+)+$/.test(c)&&!/kanarya/i.test(c)&&!/tel/i.test(c)){t.name=c;break}}}return t}function tn(e,t){var o;const a=[],n=[];let s=null,r=null,l=!1,i=0;for(;i<e.length;){const c=e[i].text,d=/Monat:\s*([A-Za-zäöüÄÖÜß]+)\s*-\s*(\d{4})/.exec(c);if(d){const u=d[1].trim(),v=parseInt(d[2],10),p=De[u]??De[u.replace("ä","ae")]??null;p&&(s={jahr:v,monat:p,monatKey:`${v}-${String(p).padStart(2,"0")}`},l=!0,r=null),i++;continue}if(/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.test(c)){const u=/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.exec(c),v=Q(u[1]);r={monatKey:(s==null?void 0:s.monatKey)??Ze(v),stichtag:v,glz:{},flexi:{},zeitkonten:{},raw:{}},i=an(e,i+1,r),n.push(r);continue}let f=s;const g=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)\b/.exec(c.trim());if(g&&s){const u=parseInt(g[1],10);l&&u>=20?f=rn(s):u<=15&&(l=!1)}const h=Pe(c,f);if(h){const u=[];let v=i+1;for(;v<e.length;){const b=e[v].text;if(/^\s*\d{4}\s+Umbuchung/.test(b)||Pe(b,s)||/Wochensumme/i.test(b)||/Monats.bersicht/i.test(b)||/Monat:\s*[A-Za-z]/i.test(b))break;const S=nn(b);if(S){u.push(S),v++;continue}break}if(u.length&&h.zeitSpannen.push(...u),h.tagestyp==="Wochenende"||h.wochentag==="SA"||h.wochentag==="SO"){i=v;continue}(h.ist!=null||h.soll!=null||(((o=h.zeitSpannen)==null?void 0:o.length)??0)>0||h.tagestyp!=null)&&a.push(h),i=v;continue}i++}return{tage:a,monate:n}}function an(e,t,a){let n=t;const s=/(\d{4,5}|KTAU|AZAU)\s*-\s*(.+?)\s+(-?[\d,.]+-?)(?=\s+(?:\d{4,5}|KTAU|AZAU)\s*-|\s*$)/g;for(;n<e.length;){const r=e[n].text.trim();if(/^Monat:\s/.test(r)||/^Einzelergebnisse\s/.test(r)||/^Tag\b/.test(r)||/^Wochensumme/.test(r)||/^\d{2}\s+(MO|DI|MI|DO|FR|SA|SO)\b/.test(r)||/^Übersicht für den Zeitraum/i.test(r)||/^Abwesenheitsansprüche/i.test(r))break;s.lastIndex=0;let l;for(;(l=s.exec(r))!=null;){const i=l[1],o=l[2].trim(),c=je(l[3]);a.raw[i]={beschreibung:o,wert:c},i==="0008"&&(a.glz.saldoVorperiode=c),i==="8016"&&(a.glz.saldoAktuellePeriode=c),i==="9802"&&(a.glz.umgebuchteStunden=c),i==="0005"&&(a.glz.saldoGesamt=c),i==="9803"&&(a.glz.ueberzaehligeStd=c),i==="0050"&&(a.zeitkonten.produktivstunden=c),i==="9011"&&(a.flexi.jahreskontoVorperiode=c),i==="9010"&&(a.flexi.jahreskontoSaldo=c),i==="9020"&&(a.flexi.langzeitkontoSaldo=c),i==="9203"&&(a.zeitkonten.azMonatsendeUeber216=c),i==="9207"&&(a.zeitkonten.auszahlungBav=c),i==="9205"&&(a.zeitkonten.summeAuszahlung=c)}if(n++,n-t>80)break}return n}function Pe(e,t){if(!t)return null;const a=e.trim(),n=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)(?:\s+(.+))?$/.exec(a);if(!n)return null;const s=parseInt(n[1],10),r=n[2],l=(n[3]??"").trim();let i=t.jahr,o=t.monat;const c=new Date(i,o-1,s),d={datum:Ma(c),datumDate:c.toISOString(),wochentag:r,tagNr:s,monatKey:Ze(c),wocheKey:za(c),zeitSpannen:[],aktivitaeten:[],ist:null,soll:null,diff:null,pause:null,tazp:null,tagestyp:null,raw:a};return l?(sn(l,d),d):(d.tagestyp=["SA","SO"].includes(r)?"Wochenende":null,d)}function nn(e){const t=e.trim(),a=/^(Stempelzeit|Reise öff\.VM\/PKW Beifahr\.|Reise öff\.VM\/PKW|Dienstreise Arbeitszeit)\s+(\d{2}:\d{2})\s+(\d{2}:\d{2})\s*$/.exec(t);return a?{aktivitaet:a[1],von:a[2],bis:a[3]}:null}function sn(e,t){let a=null,n=e;for(const d of Qa)if(e.startsWith(d)){a=d,n=e.slice(d.length).trim();break}a||(a=e.split(/\s+/)[0],n=e.slice(a.length).trim()),t.tagestyp=ln(a),t.aktivitaeten.push(a);const s=n.split(/\s+/).filter(Boolean),r=/^\d{2}:\d{2}$/,l=/^-?[\d,.]+-?$/;let i=0;s[i]&&r.test(s[i])&&s[i+1]&&r.test(s[i+1])&&(t.zeitSpannen.push({aktivitaet:a,von:s[i],bis:s[i+1]}),i+=2);const o=[];for(;i<s.length&&l.test(s[i]);){const d=je(s[i]);d!=null&&o.push(d),i++}let c=s[i];o.length>=5?([t.ist,t.soll,t.diff,t.pause]=o,c||(c=String(o[4]))):o.length===4?[t.ist,t.soll,t.diff,t.pause]=o:o.length===3?[t.ist,t.soll,t.diff]=o:o.length===2?[t.ist,t.soll]=o:o.length===1&&(t.ist=o[0]),c&&(t.tazp=String(c))}function rn(e){if(!e)return null;let t=e.monat-1,a=e.jahr;return t<1&&(t=12,a-=1),{jahr:a,monat:t,monatKey:`${a}-${String(t).padStart(2,"0")}`}}function ln(e){return e?/^Stempelzeit$/i.test(e)?"Stempelzeit":/^Berufsschule Std\. bez$/i.test(e)||/^Berufsschule$/i.test(e)?"Berufsschule":/Dienstreise/i.test(e)||/Reise/i.test(e)?"Dienstreise":/^Urlaub$/i.test(e)?"Urlaub":/^Gleitzeit$/i.test(e)?"Gleitzeit":/Arbeitsunf.higkeit/i.test(e)?"Arbeitsunfähigkeit":/^(Neujahr|Karfreitag|Ostermontg|Ostmontg|Osterso\.|Hl\.3 Kön\.|Allerhlg|Pfingstmo|Fronleichn|TdDtEinh|TgDtEinh)$/i.test(e)?"Feiertag":e:null}async function on({root:e}){const t=await _e(),a=await B();e.innerHTML=`
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
        ${t.length===0?'<div class="empty-state"><div class="empty-state-icon">📭</div><p>Noch keine Uploads</p></div>':Qe(t)}
      </div>
    </div>
  `;const n=e.querySelector("#upload-zone"),s=e.querySelector("#file-input");n.addEventListener("click",()=>s.click()),n.addEventListener("dragover",r=>{r.preventDefault(),n.classList.add("drag")}),n.addEventListener("dragleave",()=>n.classList.remove("drag")),n.addEventListener("drop",async r=>{var i;r.preventDefault(),n.classList.remove("drag");const l=(i=r.dataTransfer.files)==null?void 0:i[0];l&&await Te(l,e,a)}),s.addEventListener("change",async r=>{var i;const l=(i=r.target.files)==null?void 0:i[0];l&&await Te(l,e,a)}),e.querySelector("#btn-export").addEventListener("click",dn),e.querySelector("#btn-import").addEventListener("click",()=>e.querySelector("#import-input").click()),e.querySelector("#import-input").addEventListener("change",un),e.querySelector("#btn-clear-parsed").addEventListener("click",cn),e.querySelector("#btn-reset").addEventListener("click",gn)}async function cn(){confirm("PDF-abgeleitete Daten (Tage, Monate, Uploads) werden gelöscht. Profil und Mail-Vorlagen bleiben erhalten. Fortfahren?")&&(await _t(),A("Daten gelöscht. Profil bleibt."),setTimeout(()=>location.reload(),600))}function Qe(e){return`
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
            <td>${C(hn(t.hochladeDatum))}</td>
            <td>${C(t.dateiname||"—")}</td>
            <td>${t.zeitraumVon?C(y(new Date(t.zeitraumVon))):"—"} – ${t.zeitraumBis?C(y(new Date(t.zeitraumBis))):"—"}</td>
            <td>${t.stichtagAuswertung?C(y(new Date(t.stichtagAuswertung))):"—"}</td>
            <td class="num">${t.tageCount??"—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}async function Te(e,t,a){var r,l,i,o;const n=t.querySelector("#upload-status"),s=t.querySelector("#upload-zone");s.style.pointerEvents="none",s.style.opacity="0.6",n.innerHTML=`
    <div class="alert severity-info">
      <div class="loader-ring" style="width: 24px; height: 24px; border-width: 2px;"></div>
      <div class="alert-body">
        <div class="alert-title">PDF wird verarbeitet…</div>
        <p style="margin: 4px 0; font-size: 13px;"><strong>${C(e.name)}</strong> — das kann bei großen PDFs einige Sekunden dauern.</p>
      </div>
    </div>`;try{const c=await e.arrayBuffer(),d=await Ya(c);if(await It(d.tage),await Bt(d.monate),await Rt({dateiname:e.name,zeitraumVon:((r=d.meta.zeitraumVon)==null?void 0:r.toISOString())??null,zeitraumBis:((l=d.meta.zeitraumBis)==null?void 0:l.toISOString())??null,stichtagAuswertung:((i=d.meta.stichtagAuswertung)==null?void 0:i.toISOString())??null,tageCount:d.tage.length,monateCount:d.monate.length}),!a.personalnummer&&d.meta.personalnummer){const g={...Ve(),...a,name:d.meta.name??a.name,personalnummer:d.meta.personalnummer??a.personalnummer,kostenstelle:d.meta.kostenstelle??a.kostenstelle,einstellungsdatum:((o=d.meta.einstellungsdatum)==null?void 0:o.toISOString())??a.einstellungsdatum,arbeitszeitplanregel:d.meta.arbeitszeitplanregel??a.arbeitszeitplanregel};await ge(g)}n.innerHTML=`
      <div class="alert severity-info" style="border-color: var(--success); background: var(--success-bg);">
        <div class="alert-icon" style="background: var(--success);">✓</div>
        <div class="alert-body">
          <div class="alert-title">PDF erfolgreich eingelesen</div>
          <p style="margin: 4px 0; font-size: 13px;">
            ${d.tage.length} Tage · ${d.monate.length} Monatsübersichten
            ${d.meta.zeitraumVon?` · Zeitraum: ${y(d.meta.zeitraumVon)} – ${y(d.meta.zeitraumBis)}`:""}
          </p>
          <div class="alert-actions">
            <a href="#/" class="btn primary sm">Zum Dashboard</a>
            <a href="#/monat" class="btn sm">Monate ansehen</a>
          </div>
        </div>
      </div>
    `,A(`PDF verarbeitet: ${d.tage.length} Tage.`);const f=await _e();t.querySelector("#uploads-list").innerHTML=Qe(f)}catch(c){console.error(c),n.innerHTML=`
      <div class="alert severity-error">
        <div class="alert-icon">!</div>
        <div class="alert-body">
          <div class="alert-title">Fehler beim Parsen</div>
          <p style="margin: 4px 0; font-size: 13px;">${C(c.message||String(c))}</p>
          <p style="margin: 4px 0; font-size: 12px; color: var(--fg-muted);">Prüfe, ob es sich um einen Putzmeister-SAP-Zeitnachweis handelt. Bei einem anderen Layout kann der Parser fehlschlagen.</p>
        </div>
      </div>
    `,pe("PDF konnte nicht gelesen werden.")}finally{s.style.pointerEvents="",s.style.opacity=""}}async function dn(){try{const e=await jt(),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),a=URL.createObjectURL(t),n=document.createElement("a"),s=new Date().toISOString().slice(0,10);n.href=a,n.download=`zeitnachweis-backup-${s}.json`,n.click(),URL.revokeObjectURL(a),A("Backup heruntergeladen.")}catch(e){pe(`Export fehlgeschlagen: ${e.message}`)}}async function un(e){var a;const t=(a=e.target.files)==null?void 0:a[0];if(t)try{const n=await t.text(),s=JSON.parse(n);if(!confirm("Existierende Daten werden überschrieben. Fortfahren?"))return;await Ht(s),A("Backup erfolgreich importiert. Seite wird neu geladen…"),setTimeout(()=>location.reload(),800)}catch(n){pe(`Import fehlgeschlagen: ${n.message}`)}}async function gn(){confirm("ALLE Daten endgültig löschen? Das lässt sich nicht rückgängig machen.")&&confirm("Wirklich alle Daten löschen? Letzte Warnung.")&&(await Vt(),A("Alle Daten gelöscht."),setTimeout(()=>location.reload(),600))}function hn(e){if(!e)return"—";const t=new Date(e);return t.toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"})+" "+t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}const q=["MO","DI","MI","DO","FR"],te={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag"};async function mn({root:e}){var s,r;const t=await B(),a=await F(),n=Sa(a);e.innerHTML=`
    <h1 class="view-title">Profil</h1>
    <p class="view-subtitle">Persönliche Daten, Berufsschul-Rhythmus, Pausen-Regel und Mail-Kontakt.</p>

    <form id="profil-form" class="grid cols-2" style="gap: 24px;">
      <div class="card">
        <h2>Persönliche Daten</h2>
        <div class="form-group">
          <label>Name</label>
          <input type="text" name="name" value="${J(t.name)}" placeholder="Florian Kern" />
        </div>
        <div class="form-group">
          <label>Personalnummer</label>
          <input type="text" name="personalnummer" value="${J(t.personalnummer)}" placeholder="00101473" />
        </div>
        <div class="form-group">
          <label>Kostenstelle</label>
          <input type="text" name="kostenstelle" value="${J(t.kostenstelle)}" />
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
        <h2>Berufsschul-Rhythmus</h2>
        <p class="hint" style="margin-bottom: 16px;">
          Wähle deine regelmäßigen Berufsschultage. Das Programm erkennt falsche oder fehlende Einträge im Zeitnachweis anhand dieses Musters.
        </p>

        ${n.wochentageWoechentlich.length||n.wochentage14Taegig.length?`<div class="alert severity-info" style="margin-bottom: 16px;">
               <div class="alert-icon">i</div>
               <div class="alert-body">
                 <div class="alert-title">Vorschlag aus deinem PDF:</div>
                 <p style="margin: 4px 0; font-size: 13px;">
                   Wöchentlich: <strong>${n.wochentageWoechentlich.map(l=>te[l]).join(", ")||"—"}</strong><br/>
                   Alle 2 Wochen: <strong>${n.wochentage14Taegig.map(l=>te[l]).join(", ")||"—"}</strong>
                   ${n.referenzDatum14Taegig?` (erster erkannter Termin: ${y(new Date(n.referenzDatum14Taegig))})`:""}
                 </p>
                 <button type="button" class="btn sm primary" id="btn-apply-vorschlag" style="margin-top: 8px;">Vorschlag übernehmen</button>
               </div>
             </div>`:""}

        <h3>Wöchentlich Berufsschule an:</h3>
        <div class="wd-grid">
          ${q.map(l=>{var i,o;return`
            <label class="wd-chip">
              <input type="checkbox" name="woechentlich_${l}" ${(o=(i=t.berufsschulMuster)==null?void 0:i.wochentageWoechentlich)!=null&&o.includes(l)?"checked":""} />
              <span>${te[l]}</span>
            </label>
          `}).join("")}
        </div>

        <h3 style="margin-top: 16px;">Alle 2 Wochen Berufsschule an:</h3>
        <div class="wd-grid">
          ${q.map(l=>{var i,o;return`
            <label class="wd-chip">
              <input type="checkbox" name="zweiwoechig_${l}" ${(o=(i=t.berufsschulMuster)==null?void 0:i.wochentage14Taegig)!=null&&o.includes(l)?"checked":""} />
              <span>${te[l]}</span>
            </label>
          `}).join("")}
        </div>

        <div class="form-group" style="margin-top: 16px;">
          <label>Anker-Datum für 2-Wochen-Rhythmus</label>
          <input type="date" name="referenzDatum14Taegig" value="${(s=t.berufsschulMuster)!=null&&s.referenzDatum14Taegig?t.berufsschulMuster.referenzDatum14Taegig.slice(0,10):""}" />
          <p class="hint">Ein Tag, an dem definitiv Berufsschule war (bestimmt den Wochen-Offset).</p>
        </div>
      </div>

      <div class="card" style="grid-column: 1 / -1;">
        <h2>Zeitwirtschaft-Kontakt</h2>
        <div class="grid cols-2">
          <div class="form-group">
            <label>E-Mail-Empfänger</label>
            <input type="email" name="zeitwirtschaftEmail" value="${J(t.zeitwirtschaftEmail)}" />
          </div>
          <div class="form-group">
            <label>Anrede in Mails</label>
            <input type="text" name="zeitwirtschaftAnrede" value="${J(t.zeitwirtschaftAnrede)}" placeholder="Frau Kanarya" />
          </div>
        </div>
      </div>

      <div style="grid-column: 1 / -1; display: flex; gap: 12px;">
        <button type="submit" class="btn primary">Speichern</button>
        <a href="#/" class="btn">Abbrechen</a>
      </div>
    </form>
  `,(r=e.querySelector("#btn-apply-vorschlag"))==null||r.addEventListener("click",()=>{for(const l of q)e.querySelector(`[name="woechentlich_${l}"]`).checked=n.wochentageWoechentlich.includes(l),e.querySelector(`[name="zweiwoechig_${l}"]`).checked=n.wochentage14Taegig.includes(l);n.referenzDatum14Taegig&&(e.querySelector('[name="referenzDatum14Taegig"]').value=n.referenzDatum14Taegig.slice(0,10)),ie("Vorschlag übernommen — noch speichern!",{type:"info"})}),e.querySelector("#profil-form").addEventListener("submit",async l=>{var c,d,f,g,h;l.preventDefault();const i=new FormData(l.target),o={...t,name:((c=i.get("name"))==null?void 0:c.trim())||"",personalnummer:((d=i.get("personalnummer"))==null?void 0:d.trim())||"",kostenstelle:((f=i.get("kostenstelle"))==null?void 0:f.trim())||"",geburtsdatum:i.get("geburtsdatum")?new Date(i.get("geburtsdatum")).toISOString():null,pausenRegel:i.get("pausenRegel")||"auto",zeitwirtschaftEmail:((g=i.get("zeitwirtschaftEmail"))==null?void 0:g.trim())||"zeitwirtschaft@putzmeister.com",zeitwirtschaftAnrede:((h=i.get("zeitwirtschaftAnrede"))==null?void 0:h.trim())||"Frau Kanarya",berufsschulMuster:{wochentageWoechentlich:q.filter(u=>i.get(`woechentlich_${u}`)==="on"),wochentage14Taegig:q.filter(u=>i.get(`zweiwoechig_${u}`)==="on"),referenzDatum14Taegig:i.get("referenzDatum14Taegig")?new Date(i.get("referenzDatum14Taegig")).toISOString():null}};await ge(o),A("Profil gespeichert.")})}function J(e){return String(e??"").replace(/"/g,"&quot;")}async function fn({root:e}){var s;const t=await X(),a=await F(),n={};for(const r of a)n[s=r.monatKey]??(n[s]=[]),n[r.monatKey].push(r);if(t.length===0){e.innerHTML=$n("Noch keine Monatsdaten. Lade zuerst ein PDF unter Daten hoch.");return}e.innerHTML=`
    <h1 class="view-title">Monate</h1>
    <p class="view-subtitle">${t.length} Monate erfasst. Klicke für Details.</p>

    <div class="grid cols-2">
      ${t.slice().reverse().map(r=>{var g;const i=(n[r.monatKey]??[]).filter(h=>h.ist!=null&&h.ist>0),o=i.reduce((h,u)=>h+(u.ist??0),0),c=i.reduce((h,u)=>h+(u.soll??0),0),d=o-c,f=(g=r.glz)==null?void 0:g.saldoGesamt;return`
          <a href="#/monat/${r.monatKey}" class="card" style="text-decoration: none; color: inherit; display: block;">
            <div class="card-split" style="margin-bottom: 12px;">
              <h2 style="margin: 0;">${ce(r.monatKey)}</h2>
              <span class="saldo-trend ${f>.05?"up":f<-.05?"down":"flat"}" style="margin: 0; font-size: 12px;">
                Saldo: <strong>${D(f??0,{signed:!0})}</strong>
              </span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 12px;">
              <div>
                <div style="color: var(--fg-subtle); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Arbeitstage</div>
                <div style="font-size: 22px; font-weight: 600;" class="tabular">${i.length}</div>
              </div>
              <div>
                <div style="color: var(--fg-subtle); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Ist / Soll</div>
                <div style="font-size: 14px; font-weight: 500;" class="tabular">${o.toFixed(1)} / ${c.toFixed(1)}h</div>
              </div>
              <div>
                <div style="color: var(--fg-subtle); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Diff</div>
                <div class="tabular ${d>.05?"positive":d<-.05?"negative":""}" style="font-size: 14px; font-weight: 500; color: ${d>.05?"var(--success)":d<-.05?"var(--danger)":"var(--fg)"};">${D(d,{signed:!0})}</div>
              </div>
            </div>
          </a>
        `}).join("")}
    </div>
  `}async function pn({params:e,root:t}){const a=e.yyyymm,[n,s,r]=await Promise.all([F(),X(),B()]),l=s.find(c=>c.monatKey===a),i=n.filter(c=>c.monatKey===a).sort((c,d)=>c.datum.localeCompare(d.datum));if(!i.length){t.innerHTML=`<h1 class="view-title">Monat ${ce(a)}</h1><p class="view-subtitle">Keine Daten für diesen Monat.</p><a href="#/monat" class="btn">← Alle Monate</a>`;return}const o=he(n,r,new Date).filter(c=>c.datum.startsWith(a));t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat" class="btn sm">← Alle Monate</a>
    </div>
    <h1 class="view-title">${ce(a)}</h1>
    <p class="view-subtitle">${i.length} Tage · ${o.length} Auffälligkeiten</p>

    ${l?vn(l):""}

    <div class="card" style="margin-bottom: 24px;">
      <h2>Tagesbalken</h2>
      <div class="chart-wrap tall"><canvas id="chart-monat"></canvas></div>
    </div>

    ${o.length?`
      <div class="card" style="margin-bottom: 24px;">
        <h2>Auffälligkeiten</h2>
        ${o.map(c=>yn(c)).join("")}
      </div>
    `:""}

    <div class="card">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Tage</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">Klicke auf ein Datum für Details</span>
      </div>
      ${bn(i)}
    </div>
  `,me(t.querySelector("#chart-monat"),i)}function vn(e){var n,s,r,l;const t=((n=e.glz)==null?void 0:n.saldoGesamt)??0;return`
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
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${D(((r=e.glz)==null?void 0:r.saldoAktuellePeriode)??0,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Produktivstd.</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${D(((l=e.zeitkonten)==null?void 0:l.produktivstunden)??0,{suffix:""})}</div>
      </div>
    </div>
  `}function bn(e){return`
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
              <td>${t.tagestyp?`<span class="pill ${wn(t.tagestyp)}">${ae(t.tagestyp)}</span>`:"—"}</td>
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
  `}function yn(e){return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i"}</div>
      <div class="alert-body">
        <div class="alert-title">${ae(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${ae(e.beschreibung)}</p>
        ${e.mailVorlageKey?`<div class="alert-actions"><a href="#/mails" class="btn primary sm">Mail schreiben</a><a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a></div>`:""}
      </div>
    </div>
  `}function ce(e){const[t,a]=e.split("-"),n=new Date(parseInt(t),parseInt(a)-1,1);return x(n,"LLLL yyyy",{locale:I})}function wn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function $n(e){return`<div class="empty-state"><div class="empty-state-icon">📭</div><p>${ae(e)}</p><a href="#/daten" class="btn primary">Zu Daten</a></div>`}function ae(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function zn({root:e}){var s;const t=await F();if(!t.length){e.innerHTML='<h1 class="view-title">Wochen</h1><p class="view-subtitle">Noch keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a={};for(const r of t)a[s=r.wocheKey]??(a[s]={key:r.wocheKey,tage:[],ist:0,soll:0}),a[r.wocheKey].tage.push(r),a[r.wocheKey].ist+=r.ist??0,a[r.wocheKey].soll+=r.soll??0;const n=Object.keys(a).sort().reverse();e.innerHTML=`
    <h1 class="view-title">Wochen</h1>
    <p class="view-subtitle">${n.length} Wochen erfasst.</p>

    <div>
      ${n.map(r=>{const l=a[r],i=l.ist-l.soll,o=i>.05?"positive":i<-.05?"negative":"";return`
          <a href="#/woche/${r}" class="list-item">
            <div class="tabular" style="font-size: 16px; font-weight: 600; color: var(--fg-muted);">${ne(Ye(r))}</div>
            <div>
              <div class="list-item-title">Ist: ${l.ist.toFixed(2).replace(".",",")}h · Soll: ${l.soll.toFixed(2).replace(".",",")}h</div>
              <div class="list-item-sub">${l.tage.length} Tage erfasst</div>
            </div>
            <div class="tabular ${o}" style="font-weight: 600; font-size: 16px;">${D(i,{signed:!0})}</div>
            <div style="color: var(--fg-subtle);">→</div>
          </a>
        `}).join("")}
    </div>
  `}async function Mn({params:e,root:t}){const a=await F(),n=e.yyyykw,s=a.filter(o=>o.wocheKey===n).sort((o,c)=>o.datum.localeCompare(c.datum));if(!s.length){t.innerHTML=`<h1 class="view-title">KW ${ne(n)}</h1><p>Keine Daten.</p><a href="#/woche" class="btn">← Alle Wochen</a>`;return}const r=s.reduce((o,c)=>o+(c.ist??0),0),l=s.reduce((o,c)=>o+(c.soll??0),0),i=r-l;t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/woche" class="btn sm">← Alle Wochen</a>
    </div>
    <h1 class="view-title">${ne(Ye(n))}</h1>
    <p class="view-subtitle">${s.length} Tage</p>

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${r.toFixed(2).replace(".",",")}h</div>
      </div>
      <div class="card">
        <h3>Soll-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${l.toFixed(2).replace(".",",")}h</div>
      </div>
      <div class="card">
        <h3>Differenz</h3>
        <div class="tabular ${i>.05?"positive":i<-.05?"negative":""}" style="font-size: 28px; font-weight: 650; color: ${i>.05?"var(--success)":i<-.05?"var(--danger)":"var(--fg)"};">${D(i,{signed:!0})}</div>
      </div>
    </div>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Tagesverteilung</h2>
      <div class="chart-wrap"><canvas id="chart-woche"></canvas></div>
    </div>

    <div class="card">
      <h2>Tage dieser Woche</h2>
      ${xn(s)}
    </div>
  `,me(t.querySelector("#chart-woche"),s)}function xn(e){return`
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
              <td><a href="#/tag/${t.datum}" style="color: inherit;"><span class="tabular">${x(M(t.datum),"dd.MM.yyyy")}</span> ${t.wochentag}</a></td>
              <td>${t.tagestyp?`<span class="pill ${Sn(t.tagestyp)}">${ne(t.tagestyp)}</span>`:"—"}</td>
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
  `}function Ye(e){const[t,a]=e.split("-");return`KW ${a} · ${t}`}function Sn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function ne(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function kn({params:e,root:t}){var o,c,d;const a=e.datum,n=await m.tage.get(a),s=await B();if(!n){t.innerHTML=`<h1 class="view-title">Tag nicht gefunden</h1><p>Für ${a} liegen keine Daten vor.</p><a href="#/" class="btn">← Dashboard</a>`;return}const r=M(a),l=n.tagestyp==="Stempelzeit"?qe(n,s):null,i=Ne(r,s.berufsschulMuster);t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat/${a.slice(0,7)}" class="btn sm">← Zum Monat</a>
    </div>
    <h1 class="view-title">${Ge(r)}</h1>
    <p class="view-subtitle">${n.tagestyp??"Kein Typ"} · KW ${(o=n.wocheKey)==null?void 0:o.split("-")[1]}</p>

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${n.ist!=null?n.ist.toFixed(2).replace(".",",")+"h":"—"}</div>
        <div class="hint">= ${n.ist!=null?He(n.ist):"—"}</div>
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
        ${(c=n.zeitSpannen)!=null&&c.length?n.zeitSpannen.map(f=>`
              <div class="tag-detail">
                <div class="tag-detail-label">${U(f.aktivitaet??"Stempelzeit")}</div>
                <div class="tag-detail-value tabular">${f.von??"—"} – ${f.bis??"—"}</div>
              </div>
            `).join(""):'<p class="hint">Keine Stempelzeiten für diesen Tag.</p>'}
      </div>

      <div class="card">
        <h2>Klassifikation</h2>
        <div class="tag-detail">
          <div class="tag-detail-label">Tagestyp</div>
          <div class="tag-detail-value">${n.tagestyp?`<span class="pill ${Dn(n.tagestyp)}">${U(n.tagestyp)}</span>`:"—"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Laut Profil</div>
          <div class="tag-detail-value">${i?"🎓 Berufsschultag erwartet":"Regulärer Werktag"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">TAZP-Code</div>
          <div class="tag-detail-value"><code>${U(n.tazp??"—")}</code></div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Monat</div>
          <div class="tag-detail-value">${U(n.monatKey)}</div>
        </div>
      </div>

      ${l&&!l.keinAnspruch?`
        <div class="card" style="grid-column: 1 / -1;">
          <h2>Pausen-Analyse</h2>
          <div class="grid cols-2">
            <div>
              <div class="tag-detail">
                <div class="tag-detail-label">Arbeitszeit (netto)</div>
                <div class="tag-detail-value tabular">${(d=l.arbeitszeitOhnePause)==null?void 0:d.toFixed(2).replace(".",",")}h</div>
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
              <div class="alert-body">${U(l.warnung)}</div>
            </div>
          `:""}
        </div>
      `:""}
    </div>
  `}function Dn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function U(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function An({root:e}){const[t,a]=await Promise.all([F(),X()]);if(!t.length){e.innerHTML='<h1 class="view-title">Analytics</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}e.innerHTML=`
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
  `,requestAnimationFrame(()=>{Oa(e.querySelector("#c-saldo"),a),Ue(e.querySelector("#heatmap"),t,{monate:8}),Ra(e.querySelector("#c-istsoll"),t),Va(e.querySelector("#c-kumulativ"),t),Ka(e.querySelector("#c-startend"),t),Ia(e.querySelector("#c-wochentag"),t),Ca(e.querySelector("#c-pausen"),t),Ba(e.querySelector("#c-donut"),t);const n=t.slice(-30);me(e.querySelector("#c-alle-tage"),n)})}async function Pn({root:e}){const t=await F();if(!t.length){e.innerHTML='<h1 class="view-title">Berichtsheft</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a=[...new Set(t.map(r=>r.monatKey))].sort().reverse();e.innerHTML=`
    <h1 class="view-title">Berichtsheft-Export</h1>
    <p class="view-subtitle">Kopiere die Arbeitsstunden im HH:MM-Format direkt in dein Berichtsheft.</p>

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 16px; align-items: center;">
        <h2 style="margin: 0;">Filter</h2>
        <div style="display: flex; gap: 8px; align-items: center;">
          <label style="color: var(--fg-muted); font-size: 13px;">Monat:</label>
          <select id="filter-monat">
            <option value="">Alle</option>
            ${a.map(r=>`<option value="${r}">${Ln(r)}</option>`).join("")}
          </select>
          <button class="btn sm" id="btn-copy-all">Alle sichtbaren kopieren</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div id="liste"></div>
    </div>
  `;const n=e.querySelector("#filter-monat");n.addEventListener("change",()=>s()),e.querySelector("#btn-copy-all").addEventListener("click",()=>{const r=e.querySelectorAll("#liste tr[data-copy]"),l=Array.from(r).map(i=>i.getAttribute("data-copy")).join(`
`);navigator.clipboard.writeText(l).then(()=>A(`${r.length} Zeilen kopiert.`))});function s(){const r=n.value,i=(r?t.filter(o=>o.monatKey===r):t).filter(o=>o.ist!=null&&o.ist>0&&o.tagestyp!=="Wochenende");e.querySelector("#liste").innerHTML=Tn(i),e.querySelectorAll(".copy-val").forEach(o=>{o.addEventListener("click",async()=>{const c=o.getAttribute("data-val");await navigator.clipboard.writeText(c),o.classList.add("ok");const d=o.textContent;o.textContent="✓ kopiert",setTimeout(()=>{o.classList.remove("ok"),o.textContent=d},1200)})})}s()}function Tn(e){return e.length?`
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
        ${e.map(t=>{const a=He(t.ist),n=`${y(M(t.datum))}	${a}`;return`
            <tr data-copy="${Ee(n)}">
              <td class="tabular">${y(M(t.datum))}</td>
              <td>${En(t.wochentag)}</td>
              <td>${t.tagestyp?`<span class="pill ${Wn(t.tagestyp)}">${Xe(t.tagestyp)}</span>`:"—"}</td>
              <td class="num tabular">${t.ist.toFixed(2).replace(".",",")}</td>
              <td class="num tabular" style="font-weight: 600;">${a}</td>
              <td><button class="copy-val" data-val="${Ee(a)}">📋 ${a}</button></td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `:'<p style="color: var(--fg-muted);">Keine Tage in dieser Auswahl.</p>'}function En(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function Ln(e){const[t,a]=e.split("-");return x(new Date(parseInt(t),parseInt(a)-1,1),"LLLL yyyy",{locale:I})}function Wn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function Xe(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ee(e){return Xe(e)}const Fn={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"},ve={bs_tag_fehlt:{key:"bs_tag_fehlt",titel:"Berufsschultag fehlt",beschreibung:"Wenn ein Berufsschultag komplett nicht im Zeitnachweis eingetragen wurde.",betreff:"Bitte um Korrektur Zeitnachweis — Berufsschultag {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

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
Personalnummer {personalnr}`}};function et(e,t){const a=ve[e];return a?{...a,...t??{}}:null}function tt(e,t){const a=Le(e.text,t);return{betreff:Le(e.betreff,t),text:a}}function Le(e,t){return e.replace(/\{(\w+)\}/g,(a,n)=>t[n]!=null?String(t[n]):`{${n}}`)}function On(e,t){const a=t.datum?new Date(t.datum):null,n=a?Ge(a).split(", ")[1]:"";return{name:e.name||"Ihr Mitarbeiter",personalnr:e.personalnummer||"—",kostenstelle:e.kostenstelle||"—",datum:n,wochentag:Fn[t.wochentag]??t.wochentag??"",zeitwirtschaft_anrede:e.zeitwirtschaftAnrede||"Frau Kanarya",zeitwirtschaft_email:e.zeitwirtschaftEmail||"zeitwirtschaft@putzmeister.com",ist:t.ist!=null?t.ist.toFixed(2).replace(".",","):"",soll:t.soll!=null?t.soll.toFixed(2).replace(".",","):"",abgezogen:t.abgezogen!=null?Math.round(t.abgezogen*60):"",gestempelt:t.gestempelt!=null?Math.round(t.gestempelt*60):"",verlust:t.verlustMinuten??""}}function Kn(e,t,a){const n=tt(t,a),s=e.zeitwirtschaftEmail||"zeitwirtschaft@putzmeister.com",r=new URLSearchParams;return r.set("subject",n.betreff),r.set("body",n.text),`mailto:${encodeURIComponent(s)}?${r.toString().replace(/\+/g,"%20")}`}async function Cn({root:e}){const[t,a,n,s]=await Promise.all([F(),B(),X(),Gt()]),r=Object.fromEntries(s.map(o=>[o.key,o])),l=he(t,a,new Date).filter(o=>o.mailVorlageKey),i=Je(n);e.innerHTML=`
    <h1 class="view-title">Mail-Vorlagen</h1>
    <p class="view-subtitle">Vorformulierte Mails an die Zeitwirtschaft bei erkannten Fehlern im Zeitnachweis.</p>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Offene Warnungen mit Mail-Vorschlag</h2>
      <p class="hint" style="margin-bottom: 16px;">Diese Warnungen haben einen roten Schweregrad und sind eine direkte Mail wert.</p>

      ${l.length===0?'<div class="empty-state"><div class="empty-state-icon">✓</div><p>Keine akuten Warnungen — top.</p></div>':l.map(o=>In(o,a,r)).join("")}

      ${i.length>0?`
        <h3 style="margin-top: 24px;">Saldo-Plausibilität</h3>
        ${i.map(o=>`
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
        ${Object.keys(ve).map(o=>{const c=et(o,r[o]);return Bn(c)}).join("")}
      </div>
    </div>
  `,Rn(e),Vn(e)}function In(e,t,a){const n=et(e.mailVorlageKey,a[e.mailVorlageKey]);if(!n)return"";const s=On(t,e),r=tt(n,s),l=Kn(t,n,s);return`
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
<strong>Betreff:</strong> ${P(r.betreff)}

${P(r.text)}
        </div>
      </details>
      <div class="alert-actions" style="margin-top: 12px;">
        <a class="btn primary sm" href="${l}" target="_blank" rel="noopener">✉ Mail-Client öffnen</a>
        <button class="btn sm btn-copy-mail" data-subject="${de(r.betreff)}" data-body="${de(r.text)}">📋 Betreff + Text kopieren</button>
      </div>
    </div>
  `}function Bn(e){return`
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
        <input type="text" class="v-betreff" value="${de(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 240px;">${P(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function Rn(e){e.querySelectorAll(".btn-save-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-key"),n=t.closest(".vorlagen-item"),s=n.querySelector(".v-betreff").value,r=n.querySelector(".v-text").value;await ze(a,{betreff:s,text:r}),A("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-key"),n=ve[a];n&&confirm(`Vorlage "${n.titel}" auf Default zurücksetzen?`)&&(await ze(a,{betreff:n.betreff,text:n.text}),A("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function Vn(e){e.querySelectorAll(".btn-copy-mail").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-subject"),n=t.getAttribute("data-body"),s=`Betreff: ${a}

${n}`;await navigator.clipboard.writeText(s),A("Mail-Text kopiert.")})})}function P(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function de(e){return P(e)}async function _n({root:e}){const t=Ie(),a=await B();e.innerHTML=`
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
  `,e.querySelectorAll("[data-theme]").forEach(n=>{n.addEventListener("click",()=>{const s=n.getAttribute("data-theme");ue(s),e.querySelectorAll("[data-theme]").forEach(r=>r.classList.toggle("active",r===n)),A(`Theme: ${n.textContent.trim()}`)})}),e.querySelector("#pause-sel").addEventListener("change",async n=>{const s={...a,pausenRegel:n.target.value};await ge(s),A("Pausen-Regel gespeichert.")})}async function We(){var t;kt();const e=document.getElementById("content");(t=document.getElementById("theme-toggle"))==null||t.addEventListener("click",()=>Dt()),At(()=>{Wt()}),await Ot()&&setTimeout(()=>{ie('Parser wurde aktualisiert. Bitte lade deinen Zeitnachweis unter "Daten" neu hoch.',{type:"info",duration:12e3})},500),k("/",xe),k("/dashboard",xe),k("/analytics",An),k("/monat",fn),k("/monat/:yyyymm",pn),k("/woche",zn),k("/woche/:yyyykw",Mn),k("/tag/:datum",kn),k("/berichtsheft",Pn),k("/mails",Cn),k("/profil",mn),k("/daten",on),k("/einstellungen",_n),Et(e),location.hash||Tt("/")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",We):We();
