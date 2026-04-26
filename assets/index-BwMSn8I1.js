const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/exceljs.min-BhfpbegZ.js","assets/dexie-UpTFNL8S.js"])))=>i.map(i=>d[i]);
import{C as j,L as Mn,B as zn,D as Dn,S as An,a as En,b as Pn,P as Tn,A as Fn,c as Ln,d as Cn,T as _n,p as Bn,e as Wn,i as On}from"./chartjs-CRgZvhTJ.js";import{b as Ye,a as pe,c as be,d as Kn,f as E,s as Nt,e as Rt,g as jt,p as Vn,h as In,i as ze,j as De,k as L,l as qt,q as Hn,m as Nn,n as Rn,o as jn}from"./datefns-C8_rfWt_.js";import{D as qn}from"./dexie-UpTFNL8S.js";import{_ as Zn,a as Un}from"./pdfjs-BDGsuRSB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Gn(){document.documentElement.setAttribute("data-theme","dark")}const kt={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},Jn=(e,t,n)=>{let a;const s=n!=null&&n.addSuffix?kt[e].withPreposition:kt[e].standalone;return typeof s=="string"?a=s:t===1?a=s.one:a=s.other.replace("{{count}}",String(t)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:"vor "+a:a},Xn={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},Yn={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Qn={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},ea={date:Ye({formats:Xn,defaultWidth:"full"}),time:Ye({formats:Yn,defaultWidth:"full"}),dateTime:Ye({formats:Qn,defaultWidth:"full"})},ta={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},na=(e,t,n,a)=>ta[e],aa={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},sa={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},nt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},ia={narrow:nt.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:nt.wide},ra={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},la={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},oa={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},ca=e=>Number(e)+".",da={ordinalNumber:ca,era:pe({values:aa,defaultWidth:"wide"}),quarter:pe({values:sa,defaultWidth:"wide",argumentCallback:e=>e-1}),month:pe({values:nt,formattingValues:ia,defaultWidth:"wide"}),day:pe({values:ra,defaultWidth:"wide"}),dayPeriod:pe({values:la,defaultWidth:"wide",formattingValues:oa,defaultFormattingWidth:"wide"})},ua=/^(\d+)(\.)?/i,ga=/\d+/i,ha={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},fa={any:[/^v/i,/^n/i]},ma={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},pa={any:[/1/i,/2/i,/3/i,/4/i]},ba={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},va={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ya={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},wa={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},ka={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},xa={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},$a={ordinalNumber:Kn({matchPattern:ua,parsePattern:ga,valueCallback:e=>parseInt(e)}),era:be({matchPatterns:ha,defaultMatchWidth:"wide",parsePatterns:fa,defaultParseWidth:"any"}),quarter:be({matchPatterns:ma,defaultMatchWidth:"wide",parsePatterns:pa,defaultParseWidth:"any",valueCallback:e=>e+1}),month:be({matchPatterns:ba,defaultMatchWidth:"wide",parsePatterns:va,defaultParseWidth:"any"}),day:be({matchPatterns:ya,defaultMatchWidth:"wide",parsePatterns:wa,defaultParseWidth:"any"}),dayPeriod:be({matchPatterns:ka,defaultMatchWidth:"wide",parsePatterns:xa,defaultParseWidth:"any"})},G={code:"de",formatDistance:Jn,formatLong:ea,formatRelative:na,localize:da,match:$a,options:{weekStartsOn:1,firstWeekContainsDate:4}};function Zt(e){if(e==null)return null;if(typeof e=="number")return e;let t=String(e).trim();if(!t)return null;let n=!1;t.endsWith("-")&&(n=!0,t=t.slice(0,-1).trim()),t=t.replace(",",".");const a=parseFloat(t);return isNaN(a)?null:n?-a:a}function Oe(e){if(e==null||isNaN(e))return"—";const t=e<0,n=Math.abs(e),a=Math.floor(n),s=Math.round((n-a)*60);let i=a,l=s;return l===60&&(i+=1,l=0),`${t?"-":""}${i}:${String(l).padStart(2,"0")}`}function se(e,t={}){if(e==null||isNaN(e))return"—";const{signed:n=!1,suffix:a="h"}=t,s=n&&e>0?"+":"",i=e.toFixed(2).replace(".",",");return`${s}${i}${a}`}function Z(e){if(!e)return null;const t=/^(\d{1,2}):(\d{2})$/.exec(String(e).trim());return t?parseInt(t[1],10)*60+parseInt(t[2],10):null}function Ut(e){if(!(e!=null&&e.length))return null;const t=e.filter(s=>s.von&&s.bis);if(!t.length)return null;let n=t[0].von,a=t[0].bis;for(const s of t)Z(s.von)<Z(n)&&(n=s.von),Z(s.bis)>Z(a)&&(a=s.bis);return{kommen:n,gehen:a}}const Gt="2026-04-01";function Sa(e){return e?"arbzg":"jarbschg"}function Ma(e,t){return e==null?0:t==="jarbschg"?e>6?1:e>4.5?.5:0:e>9?.75:e>6?.5:0}function ot(e){if(!e||e.length<2)return 0;const t=e.filter(a=>a.von&&a.bis).map(a=>({von:Z(a.von),bis:Z(a.bis)})).filter(a=>a.von!=null&&a.bis!=null).sort((a,s)=>a.von-s.von);let n=0;for(let a=1;a<t.length;a++){const s=t[a].von-t[a-1].bis;(s>0&&s>=15||s>0)&&(n+=s)}return n/60}function Jt(e,t){const n=e.zeitSpannen??[];if(!n.length||n.every(m=>!m.von))return{keinAnspruch:!0};const a=ot(n),s=e.pause??0,i=za(n),l=i-s,c=t.pausenRegel&&t.pausenRegel!=="auto"?t.pausenRegel==="jarbschg"?"jarbschg":"arbzg":Sa(!!t.ueber18),r=Ma(l,c);if(e.datum&&e.datum<Gt)return{arbeitszeitMitPause:i,arbeitszeitOhnePause:l,gestempeltePause:a,abgezogenePause:s,gesetzlichePflicht:r,gesetz:c,legalerAbzug:s,unrechtmaessigerVerlustMin:0,aufstockungMin:0,typ:"alt_reglement",warnung:null,altReglement:!0};const d=Math.max(a,r),o=s-d,u=Math.max(0,r-a);let h="ok",g=null;if(o>.05)h="fehler_zeitwirtschaft",g=`${Math.round(o*60)} min Pause wurden zusätzlich zur gesetzlichen Pflicht und zur gestempelten Pause abgezogen. Das sieht nach einem Zeitwirtschafts-Fehler aus.`;else if(u>.05&&s>a+.02){h="aufstockung_legal";const m=Math.round(u*60);g=`Du hast ${Math.round(a*60)} min Pause gestempelt, aber bei ${l.toFixed(2).replace(".",",")}h Arbeitszeit schreibt das Gesetz (${c.toUpperCase()}) ${Math.round(r*60)} min vor. Die fehlenden ${m} min wurden automatisch als Pause gewertet. Das ist gesetzeskonform — nächstes Mal einfach länger Pause machen.`}return{arbeitszeitMitPause:i,arbeitszeitOhnePause:l,gestempeltePause:a,abgezogenePause:s,gesetzlichePflicht:r,gesetz:c,legalerAbzug:d,unrechtmaessigerVerlustMin:Math.round(Math.max(0,o)*60),aufstockungMin:Math.round(Math.max(0,u)*60),typ:h,warnung:g,altReglement:!1}}function za(e){let t=0;for(const n of e){if(!n.von||!n.bis)continue;const a=Z(n.von),s=Z(n.bis);a!=null&&s!=null&&s>a&&(t+=s-a)}return t/60}function Xt(e,t){var r,d,o;const n=[...e].sort((u,h)=>u.datum.localeCompare(h.datum));if(!n.length)return[];const a=new Map(t.map(u=>[u.monatKey,u])),s={};for(const u of n)s[r=u.monatKey]??(s[r]=[]),s[u.monatKey].push(u);const i=Object.keys(s).sort(),l=[];let c=null;for(const u of i){const h=a.get(u);let g;((d=h==null?void 0:h.glz)==null?void 0:d.saldoVorperiode)!=null?g=h.glz.saldoVorperiode:c!=null?g=c:g=0;const m=s[u];for(const f of m)f.diff!=null&&(g+=f.diff),l.push({datum:f.datum,wochentag:f.wochentag,saldo:Math.round(g*100)/100,diff:f.diff,ist:f.ist,soll:f.soll,tagestyp:f.tagestyp,monatKey:f.monatKey,wocheKey:f.wocheKey,zeitSpannen:f.zeitSpannen});if(((o=h==null?void 0:h.glz)==null?void 0:o.saldoGesamt)!=null){const f=h.glz.saldoGesamt-g;if(Math.abs(f)>.02&&l.length>0){const b=l.length-1;l[b].umbuchung=f,l[b].saldo=Math.round((l[b].saldo+f)*100)/100,g=l[b].saldo}c=h.glz.saldoGesamt}else c=g}return l}function Da(e,t){if(!e.length)return[];if(t==="alles")return e;const n=Math.min(t,e.length);return e.slice(-n)}function Aa(e){return e.length?e[e.length-1].saldo:0}const Yt=new Set(["Urlaub","Arbeitsunfähigkeit","Feiertag","Gleitzeit","Berufsschule","Dienstreise"]),Qt=7;function Ne(e){if(!e||e.tagestyp==="Wochenende"||e.wochentag==="SA"||e.wochentag==="SO")return 0;const t=e.ist??0,n=e.soll??0;return t>0?t:Yt.has(e.tagestyp)?Math.max(n,Qt):n>0?n:t}function ct(e){if(!e||e.tagestyp==="Wochenende"||e.wochentag==="SA"||e.wochentag==="SO")return 0;const t=e.soll??0;return t>0?t:Yt.has(e.tagestyp)?Qt:t}function Ea(e){if(!e.length)return 0;const t=e[0].saldo-(e[0].diff??0),n=e[e.length-1].saldo;return Math.round((n-t)*100)/100}const Pa=["SO","MO","DI","MI","DO","FR","SA"],Ta=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];function fe(e){if(!e)return null;const t=e.trim();return Vn(t,"dd.MM.yyyy",new Date)}function T(e){return E(e,"dd.MM.yyyy")}function dt(e){return E(e,"EE, dd.MM.yyyy",{locale:G})}function Fa(e){return E(e,"dd.MM.")}function La(e){return Pa[e.getDay()]}function Ca(e){return Ta[e.getDay()]}function _a(e){return jt(e)}function Ae(e){const t=Nt(e,{weekStartsOn:1}),n=Rt(e,{weekStartsOn:1});return`${E(t,"dd.MM.")} – ${E(n,"dd.MM.yyyy")}`}function en(e){return`${In(e)}-${String(jt(e)).padStart(2,"0")}`}function ut(e){return E(e,"yyyy-MM")}function tn(e){return E(e,"yyyy-MM-dd")}function Ba(e,t){const n=[];let a=new Date(e);for(;a<=t;)De(a)||n.push(new Date(a)),a=ze(a,1);return n}function nn(e,t){if(!e||!t)return 0;e>t&&([e,t]=[t,e]);let n=0,a=new Date(e);for(;a<t;)a=ze(a,1),De(a)||n++;return n}function x(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Wa(e){return x(e)}const Oa=Object.freeze(Object.defineProperty({__proto__:null,addDays:ze,dayKey:tn,differenceInCalendarDays:qt,endOfMonth:Nn,endOfWeek:Rt,escapeAttr:Wa,escapeHtml:x,formatGermanDate:T,formatGermanDateLong:dt,formatShortDate:Fa,formatWocheRange:Ae,getWeekdayCode:La,getWeekdayName:Ca,isSameDay:Rn,isWeekend:De,isoWeek:_a,monthKey:ut,parseGermanDate:fe,startOfMonth:jn,startOfWeek:Nt,weekKey:en,werktageAbstand:nn,werktageZwischen:Ba},Symbol.toStringTag,{value:"Module"}));j.register(Mn,zn,Dn,An,En,Pn,Tn,Fn,Ln,Cn,_n,Bn,Wn,On);function O(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function re(){return{fg:O("--fg"),fgMuted:O("--fg-muted"),fgSubtle:O("--fg-subtle"),border:O("--border"),surface:O("--surface"),accent:O("--accent"),success:O("--success"),warn:O("--warn"),danger:O("--danger"),info:O("--info"),palette:[O("--chart-1"),O("--chart-2"),O("--chart-3"),O("--chart-4"),O("--chart-5"),O("--chart-6"),O("--chart-7")]}}function P(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.fgMuted,font:{size:12}}},tooltip:{backgroundColor:e.surface,titleColor:e.fg,bodyColor:e.fg,borderColor:e.border,borderWidth:1,padding:10,displayColors:!0}},scales:{x:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}},y:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}}}}}function gt(e,t){const n=re();if(oe(e),!(t!=null&&t.length))return;const a=t.map(i=>E(L(i.datum),"dd.MM.")),s=t.map(i=>i.saldo);return s.map(i=>i>=0?n.success:n.danger),new j(e,{type:"line",data:{labels:a,datasets:[{label:"Tages-Saldo",data:s,borderColor:n.accent,backgroundColor:i=>{const l=i.chart,{ctx:c,chartArea:r,scales:d}=l;return r?an(c,r,d.y,n):ae(n.accent,.14)},segment:{borderColor:i=>{const l=i.p0.parsed.y,c=i.p1.parsed.y,r=(l+c)/2;return r>=.02?n.success:r<=-.02?n.danger:n.fgMuted}},tension:.25,pointRadius:2,pointHoverRadius:6,pointHitRadius:20,pointBackgroundColor:s.map(i=>i>=.02?n.success:i<=-.02?n.danger:n.fgMuted),pointBorderColor:n.surface,pointBorderWidth:1,fill:!0,borderWidth:2}]},options:{...P(n),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},onHover:(i,l,c)=>{const r=c.getElementsAtEventForMode(i,"index",{intersect:!1},!1);c.canvas.style.cursor=r.length>0?"pointer":"default"},onClick:(i,l,c)=>{const r=c.getElementsAtEventForMode(i,"index",{intersect:!1},!1);if(r.length>0){const d=r[0].index,o=t[d];o!=null&&o.datum&&(window.location.hash=`#/tag/${o.datum}`)}},plugins:{...P(n).plugins,legend:{display:!1},tooltip:{enabled:!1,mode:"index",intersect:!1,axis:"x",position:"nearest",external:Ka(t)}},scales:{...P(n).scales,y:{...P(n).scales.y,ticks:{...P(n).scales.y.ticks,callback:i=>`${i>=0?"+":""}${i.toFixed(1).replace(".",",")}h`}}}}})}function le(e){return function(t){var f,b;const{chart:n,tooltip:a}=t;let s=n.$richTooltipEl;if(!s){s=document.createElement("div"),s.className="saldo-tooltip",document.body.appendChild(s),n.$richTooltipEl=s;const v=n.destroy.bind(n);n.destroy=function(){s.parentNode&&s.parentNode.removeChild(s),v()}}if(a.opacity===0||!((f=a.dataPoints)!=null&&f.length)){s.style.opacity="0";return}const i=e({tooltip:a,chart:n});if(!i){s.style.opacity="0";return}let l=`<div class="saldo-tooltip-title">${at(i.title)}</div>`;for(const v of i.rows||[]){const w=v.klasse||"flat";l+=`<div class="saldo-tooltip-row"><span class="saldo-tooltip-label">${at(v.label)}</span><span class="saldo-tooltip-value ${w}">${v.value}</span></div>`}(b=i.meta)!=null&&b.length&&(l+=`<div class="saldo-tooltip-meta">${i.meta.map(v=>`<span>${v}</span>`).join("")}</div>`),s.innerHTML=l;const c=n.canvas.getBoundingClientRect(),r=c.left+a.caretX,d=c.top+a.caretY;s.style.opacity="0",s.style.left="0px",s.style.top="0px";const o=s.offsetWidth,u=s.offsetHeight,h=18;let g=r+h;g+o>window.innerWidth-8&&(g=r-h-o);let m=d-u/2;m<8&&(m=8),m+u>window.innerHeight-8&&(m=window.innerHeight-u-8),s.style.left=g+"px",s.style.top=m+"px",s.style.opacity="1"}}function ie(e){return e==null?"flat":e>.05?"pos":e<-.05?"neg":"flat"}function ue(e){return e==null?"—":(e>0?"+":"")+e.toFixed(2).replace(".",",")+"h"}function ge(e){return e==null?"—":e.toFixed(2).replace(".",",")+"h"}function Ka(e){return le(({tooltip:t})=>{const n=t.dataPoints[0].dataIndex,a=e[n];if(!a)return null;const s=[{label:"Saldo",value:ue(a.saldo),klasse:ie(a.saldo)}];a.diff!=null&&s.push({label:"Tages-Diff",value:ue(a.diff),klasse:ie(a.diff)});const i=[];return a.tagestyp&&i.push(`Typ: ${at(a.tagestyp)}`),a.umbuchung&&i.push(`Umbuchung: ${a.umbuchung>=0?"+":""}${a.umbuchung.toFixed(2).replace(".",",")}h`),{title:E(L(a.datum),"EE, dd.MM.yyyy",{locale:G}),rows:s,meta:i}})}function at(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Va(e,t){const n=re();if(oe(e),!(t!=null&&t.length))return;const a=t.map(c=>c.monatKey),s=a.map(c=>{const[r,d]=c.split("-"),o=new Date(parseInt(r,10),parseInt(d,10)-1,1);return E(o,"MMM yyyy",{locale:G})}),i=t.map(c=>{var r;return((r=c.glz)==null?void 0:r.saldoGesamt)??0}),l=t.map(c=>{var r;return((r=c.glz)==null?void 0:r.saldoVorperiode)??null});return new j(e,{type:"line",data:{labels:s,datasets:[{label:"GLZ-Saldo (Monatsende)",data:i,borderColor:n.accent,backgroundColor:c=>{const r=c.chart,{ctx:d,chartArea:o,scales:u}=r;return o?an(d,o,u.y,n):ae(n.accent,.14)},segment:{borderColor:c=>{const r=c.p0.parsed.y,d=c.p1.parsed.y,o=(r+d)/2;return o>=.05?n.success:o<=-.05?n.danger:n.fgMuted}},pointBackgroundColor:i.map(c=>c>=.05?n.success:c<=-.05?n.danger:n.fgMuted),pointBorderColor:n.surface,pointBorderWidth:1,tension:.35,fill:!0,pointRadius:4,pointHoverRadius:7,pointHitRadius:20}]},options:{...P(n),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},onHover:(c,r,d)=>{const o=d.getElementsAtEventForMode(c,"index",{intersect:!1},!1);d.canvas.style.cursor=o.length>0?"pointer":"default"},onClick:(c,r,d)=>{const o=d.getElementsAtEventForMode(c,"index",{intersect:!1},!1);if(o.length>0){const u=o[0].index,h=a[u];h&&(window.location.hash=`#/kalender/${h}`)}},plugins:{...P(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:le(({tooltip:c})=>{const r=c.dataPoints[0].dataIndex,d=i[r],o=l[r],u=[{label:"Saldo Monatsende",value:ue(d),klasse:ie(d)}];if(o!=null){const h=+(d-o).toFixed(2);u.push({label:"Vorperiode",value:ue(o),klasse:ie(o)}),u.push({label:"Bewegung",value:ue(h),klasse:ie(h)})}return{title:s[r],rows:u}})}}}})}function Ia(e,t){const n=re();if(oe(e),!(t!=null&&t.length))return;const a=t.map(l=>E(L(l.datum),"dd.MM.")),s=t.map(l=>l.ist??0),i=t.map(l=>Ua(l.tagestyp,n));return new j(e,{type:"bar",data:{labels:a,datasets:[{label:"Ist-Stunden",data:s,backgroundColor:i,borderRadius:4,borderSkipped:!1,maxBarThickness:32,categoryPercentage:.85,barPercentage:.9}]},options:{...P(n),onHover:(l,c,r)=>{const d=r.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);r.canvas.style.cursor=d.length>0?"pointer":"default"},onClick:(l,c,r)=>{const d=r.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);if(d.length>0){const o=t[d[0].index];o!=null&&o.datum&&(window.location.hash=`#/tag/${o.datum}`)}},plugins:{...P(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:le(({tooltip:l})=>{const c=l.dataPoints[0].dataIndex,r=t[c],d=[{label:"Ist",value:ge(r.ist),klasse:"flat"}];r.soll!=null&&d.push({label:"Soll",value:ge(r.soll),klasse:"flat"}),r.diff!=null&&d.push({label:"Diff",value:ue(r.diff),klasse:ie(r.diff)});const o=r.tagestyp?[`Typ: ${r.tagestyp}`]:[];return{title:E(L(r.datum),"EE, dd.MM.yyyy",{locale:G}),rows:d,meta:o}})}},scales:{...P(n).scales,y:{...P(n).scales.y,suggestedMin:0,suggestedMax:10}}}})}function xt(e,t){const n=re();if(oe(e),!(t!=null&&t.length))return;const a=t.filter(d=>{var o;return((o=d.zeitSpannen)==null?void 0:o.length)&&d.zeitSpannen.some(u=>u.von&&u.bis)}).map(d=>{const o=d.zeitSpannen.filter(g=>g.von&&g.bis).map(g=>({von:Z(g.von),bis:Z(g.bis),vonStr:g.von,bisStr:g.bis})).filter(g=>g.von!=null&&g.bis!=null);if(o.length===0)return null;const u=Math.min(...o.map(g=>g.von)),h=Math.max(...o.map(g=>g.bis));return{...d,_spans:o,_minVon:u,_maxBis:h}}).filter(Boolean);if(!a.length)return;const s=d=>d.ist==null?n.fgMuted:d.ist>=7?n.success:n.danger,i={label:"Tages-Rahmen",data:a.map(d=>[d._minVon,d._maxBis]),backgroundColor:a.map(s),borderColor:a.map(s),borderWidth:0,borderRadius:4,borderSkipped:!1,barPercentage:.7,categoryPercentage:.9,maxBarThickness:18},l=Math.max(0,Math.floor(Math.min(...a.map(d=>d._minVon))/60)*60-60),c=Math.min(24*60,Math.ceil(Math.max(...a.map(d=>d._maxBis))/60)*60+60),r=d=>`${String(Math.floor(d/60)).padStart(2,"0")}:${String(d%60).padStart(2,"0")}`;return new j(e,{type:"bar",data:{labels:a.map(d=>E(L(d.datum),"dd.MM.")),datasets:[i]},options:{...P(n),interaction:{mode:"index",intersect:!1,axis:"x"},onHover:(d,o,u)=>{const h=u.getElementsAtEventForMode(d,"index",{intersect:!1},!1);u.canvas.style.cursor=h.length>0?"pointer":"default"},onClick:(d,o,u)=>{const h=u.getElementsAtEventForMode(d,"index",{intersect:!1},!1);if(h.length>0){const g=a[h[0].index];g!=null&&g.datum&&(window.location.hash=`#/tag/${g.datum}`)}},plugins:{legend:{display:!1},tooltip:{enabled:!1,external:le(({tooltip:d})=>{const o=a[d.dataPoints[0].dataIndex],u=[];o.ist!=null&&u.push({label:"Ist",value:ge(o.ist),klasse:ie(o.ist-7)}),o.soll!=null&&u.push({label:"Soll",value:ge(o.soll)});const h=[`Rahmen: ${r(o._minVon)} – ${r(o._maxBis)}`];return o._spans.length>1&&o._spans.forEach((g,m)=>h.push(`Block ${m+1}: ${g.vonStr} – ${g.bisStr}`)),o.pause!=null&&h.push(`Pause: ${Math.round(o.pause*60)} min`),{title:E(L(o.datum),"EE, dd.MM.yyyy",{locale:G}),rows:u,meta:h}})}},scales:{x:{ticks:{color:n.fgMuted,font:{size:10},maxRotation:60,minRotation:60,autoSkip:!0,maxTicksLimit:40},grid:{display:!1}},y:{min:l,max:c,ticks:{color:n.fgMuted,stepSize:60,callback:d=>r(d)},grid:{color:n.border}}}}})}function Ha(e,t){const n=re();oe(e);const a={};for(const l of t){if(l.tagestyp!=="Stempelzeit"||!l.zeitSpannen||l.zeitSpannen.length<2)continue;const c=ot(l.zeitSpannen);if(c<=0)continue;const r=Math.round(c*60),d=Math.floor(r/15)*15;a[d]=(a[d]??0)+1}const s=Object.keys(a).map(Number).sort((l,c)=>l-c),i=s.map(l=>a[l]);return new j(e,{type:"bar",data:{labels:s.map(l=>`${l}–${l+14} min`),datasets:[{label:"Häufigkeit",data:i,backgroundColor:n.palette[1],borderRadius:4}]},options:{...P(n),onHover:(l,c,r)=>{const d=r.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);r.canvas.style.cursor=d.length>0?"pointer":"default"},onClick:(l,c,r)=>{const d=r.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);if(d.length>0){const o=s[d[0].index];o!=null&&(window.location.hash=`#/kalender/pause/${o}`)}},plugins:{...P(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:le(({tooltip:l})=>{const c=l.dataPoints[0].dataIndex;return{title:"Pause-Länge "+(s[c]!=null?`${s[c]}–${s[c]+14} min`:""),rows:[{label:"Häufigkeit",value:`${i[c]} Tag${i[c]===1?"":"e"}`}]}})}}}})}function Na(e,t){const n=re();oe(e);const a=["MO","DI","MI","DO","FR"],s={},i={};for(const r of a)s[r]=0,i[r]=0;for(const r of t)a.includes(r.wochentag)&&(r.ist==null||r.ist===0||(s[r.wochentag]+=r.ist,i[r.wochentag]+=1));const l=a.map(r=>i[r]>0?s[r]/i[r]:0),c={id:"wochentag-datalabels",afterDatasetsDraw(r){const{ctx:d,data:o,scales:u}=r;d.save(),d.fillStyle=n.fg,d.font="600 12px system-ui",d.textAlign="center",d.textBaseline="bottom",r.getDatasetMeta(0).data.forEach((g,m)=>{const f=o.datasets[0].data[m];if(!f||f===0)return;const b=f.toFixed(2).replace(".",",")+"h";d.fillText(b,g.x,g.y-6)}),d.restore()}};return new j(e,{type:"bar",data:{labels:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"],datasets:[{label:"Ø Ist-Stunden",data:l,backgroundColor:n.palette[2],borderRadius:4,maxBarThickness:56,categoryPercentage:.7,barPercentage:.8}]},options:{...P(n),layout:{padding:{top:24}},onHover:(r,d,o)=>{const u=o.getElementsAtEventForMode(r,"nearest",{intersect:!0},!1);o.canvas.style.cursor=u.length>0?"pointer":"default"},onClick:(r,d,o)=>{const u=o.getElementsAtEventForMode(r,"nearest",{intersect:!0},!1);if(u.length>0){const h=a[u[0].index];h&&(window.location.hash=`#/kalender/wochentag/${h}`)}},plugins:{...P(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:le(({tooltip:r})=>{const d=r.dataPoints[0].dataIndex,o=a[d];return{title:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"][d],rows:[{label:"Ø Stunden",value:ge(l[d])},{label:"Anzahl Tage",value:String(i[o]||0)}]}})}},scales:{...P(n).scales,y:{...P(n).scales.y,suggestedMax:Math.max(...l)*1.15}}},plugins:[c]})}function Ra(e,t){const n=re();oe(e);const a={};for(const l of t)!l.tagestyp||l.tagestyp==="Wochenende"||(a[l.tagestyp]=(a[l.tagestyp]??0)+1);const s=Object.keys(a),i=Object.values(a);return new j(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:s.map((l,c)=>n.palette[c%n.palette.length]),borderColor:n.surface,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,onHover:(l,c,r)=>{const d=r.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);r.canvas.style.cursor=d.length>0?"pointer":"default"},onClick:(l,c,r)=>{const d=r.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);if(d.length>0){const o=s[d[0].index];o&&(window.location.hash=`#/kalender/typ/${encodeURIComponent(o)}`)}},plugins:{legend:{position:"right",labels:{color:n.fgMuted,font:{size:12}}},tooltip:{enabled:!1,external:le(({tooltip:l})=>{const c=l.dataPoints[0].dataIndex,r=i.reduce((o,u)=>o+u,0),d=r?i[c]/r*100:0;return{title:s[c],rows:[{label:"Anzahl",value:`${i[c]} Tag${i[c]===1?"":"e"}`},{label:"Anteil",value:d.toFixed(1).replace(".",",")+"%"}]}})}}}})}function ja(e,t){const n=re();oe(e);const a={};for(const o of t){const u=o.wocheKey;a[u]??(a[u]={ist:0,soll:0,days:0,ersterTag:null,monatKey:null}),a[u].ist+=Ne(o),a[u].soll+=ct(o),a[u].days++,(!a[u].ersterTag||o.datum&&o.datum<a[u].ersterTag)&&(a[u].ersterTag=o.datum,a[u].monatKey=o.monatKey)}const s=Object.keys(a).sort();if(!s.length)return;const i=s.map(o=>+a[o].ist.toFixed(2)),l=s.map(o=>+a[o].soll.toFixed(2)),c=s.map(o=>{const u=a[o].ersterTag;return u?Ae(L(u)):""}),r=i.map((o,u)=>o>=l[u]+.1?n.success:o<=l[u]-.1?n.danger:n.fgMuted),d={id:"wochenstunden-soll-linie",afterDatasetsDraw(o){const{ctx:u,scales:h}=o;h.x;const g=h.y;u.save(),u.strokeStyle=n.fgSubtle||n.fgMuted,u.lineWidth=1,u.setLineDash([4,4]),u.beginPath(),o.getDatasetMeta(0).data.forEach((f,b)=>{const v=f.x,w=f.width/2+2,y=g.getPixelForValue(l[b]??35);u.moveTo(v-w,y),u.lineTo(v+w,y)}),u.stroke(),u.restore()}};return new j(e,{type:"bar",data:{labels:s.map(o=>"KW "+o.split("-")[1]),datasets:[{label:"Wochenstunden",data:i,backgroundColor:r.map(o=>ae(o,.55)),borderColor:r,borderWidth:1.5,borderRadius:4,maxBarThickness:32,categoryPercentage:.85,barPercentage:.9}]},options:{...P(n),onHover:(o,u,h)=>{const g=h.getElementsAtEventForMode(o,"nearest",{intersect:!0},!1);h.canvas.style.cursor=g.length>0?"pointer":"default"},onClick:(o,u,h)=>{var m;const g=h.getElementsAtEventForMode(o,"nearest",{intersect:!0},!1);if(g.length>0){const f=g[0].index,b=s[f],v=b?(m=a[b])==null?void 0:m.monatKey:null;b&&v?window.location.hash=`#/kalender/${v}/${b}`:b&&(window.location.hash="#/kalender")}},plugins:{...P(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:le(({tooltip:o})=>{const u=o.dataPoints[0].dataIndex,h=s[u],g=i[u],m=l[u],f=+(g-m).toFixed(2),b=c[u];return{title:b?"KW "+h.split("-")[1]+" · "+b:"KW "+h.split("-")[1]+" · "+h.split("-")[0],rows:[{label:"Ist",value:ge(g),klasse:"flat"},{label:"Soll",value:ge(m),klasse:"flat"},{label:"Diff",value:ue(f),klasse:ie(f)}]}})}},scales:{...P(n).scales,y:{...P(n).scales.y,beginAtZero:!0,ticks:{...P(n).scales.y.ticks,callback:o=>`${o.toFixed(0)}h`}}}},plugins:[d]})}function oe(e){const t=j.getChart(e);t&&t.destroy()}function qa(){if(j.instances){for(const e of Object.values(j.instances))if(e!=null&&e.canvas&&!document.body.contains(e.canvas))try{e.destroy()}catch{}}document.querySelectorAll(".saldo-tooltip").forEach(e=>e.remove())}function ae(e,t){const n=e.replace("#","").trim();if(n.length!==6&&n.length!==3)return e;const a=n.length===3?n.split("").map(c=>c+c).join(""):n,s=parseInt(a.slice(0,2),16),i=parseInt(a.slice(2,4),16),l=parseInt(a.slice(4,6),16);return`rgba(${s}, ${i}, ${l}, ${t})`}function an(e,t,n,a){return Za(e,t,n,0,a)}function Za(e,t,n,a,s){const{top:i,bottom:l}=t,c=e.createLinearGradient(0,i,0,l),r=n.min,d=n.max,o=d-r;if(o<=0)return ae(s.success,.14);let u=(d-a)/o;return u=Math.max(0,Math.min(1,u)),c.addColorStop(0,ae(s.success,.28)),c.addColorStop(Math.max(0,u-.001),ae(s.success,.06)),c.addColorStop(Math.min(1,u+.001),ae(s.danger,.06)),c.addColorStop(1,ae(s.danger,.28)),c}function Ua(e,t){const n=String(e??"").toLowerCase();return n.includes("stempel")?t.palette[0]:n.includes("berufs")?t.palette[1]:n.includes("urlaub")?t.palette[2]:n.includes("feiertag")?t.fgSubtle:n.includes("dienst")?t.palette[3]:n.includes("krank")?t.palette[4]:t.palette[5]}const sn=[];function V(e,t){const n=e.split("/").filter(Boolean),a=[],s=new RegExp("^/?"+n.map(i=>i.startsWith(":")?(a.push(i.slice(1)),"([^/]+)"):Ya(i)).join("/")+"/?$");sn.push({pattern:e,regex:s,paramNames:a,render:t})}function Ga(e){e.startsWith("#")||(e="#"+e),window.location.hash===e?ee():window.location.hash=e}function Ja(e,{onNavigate:t}={}){window.addEventListener("hashchange",ee),ee.rootEl=e,ee.onNavigate=t,ee()}async function ee(){var a;qa();const e=ee.rootEl,t=window.location.hash.slice(1)||"/",n=t.startsWith("/")?t:`/${t}`;for(const s of sn){const i=s.regex.exec(n);if(i){const l={};s.paramNames.forEach((c,r)=>l[c]=decodeURIComponent(i[r+1])),(a=ee.onNavigate)==null||a.call(ee,n),Xa(n);try{e.classList.remove("view-enter"),await s.render({params:l,path:n,root:e}),e.classList.add("view-enter")}catch(c){console.error("Route render error:",c),e.innerHTML=`<div class="empty-state">
          <div class="empty-state-icon">⚠</div>
          <h2>Fehler beim Anzeigen</h2>
          <p>${$t(c.message||String(c))}</p>
        </div>`}return}}e.innerHTML=`<div class="empty-state">
    <div class="empty-state-icon">?</div>
    <h2>Seite nicht gefunden</h2>
    <p>Die Route <code>${$t(n)}</code> existiert nicht.</p>
    <a href="#/" class="btn primary">Zum Dashboard</a>
  </div>`}function Xa(e){document.querySelectorAll("[data-route]").forEach(n=>{const a=n.getAttribute("data-route"),s=a==="/"?e==="/":e===a||e.startsWith(a+"/");n.classList.toggle("active",s)});const t=e==="/"?"dashboard":e.split("/").filter(Boolean)[0];document.body.setAttribute("data-view",t||"dashboard")}function Ya(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function $t(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const Qa="modulepreload",es=function(e){return"/better-ess/"+e},St={},$e=function(t,n,a){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=Promise.allSettled(n.map(r=>{if(r=es(r),r in St)return;St[r]=!0;const d=r.endsWith(".css"),o=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const u=document.createElement("link");if(u.rel=d?"stylesheet":Qa,d||(u.as="script"),u.crossOrigin="",u.href=r,c&&u.setAttribute("nonce",c),document.head.appendChild(u),d)return new Promise((h,g)=>{u.addEventListener("load",h),u.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${r}`)))})}))}function i(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return s.then(l=>{for(const c of l||[])c.status==="rejected"&&i(c.reason);return t().catch(i)})},p=new qn("zeitnachweis");p.version(1).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"});p.version(2).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});p.version(3).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});p.version(4).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});p.version(5).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{const t=await e.table("profil").get("self");t&&(!t.zeitwirtschaftEmail||t.zeitwirtschaftEmail==="zeitwirtschaft@putzmeister.com")&&await e.table("profil").put({...t,zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com"})});p.version(6).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});p.version(7).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key",fahrtgeldTemplate:"id"}).upgrade(async e=>{const t=await e.table("profil").get("self");if(!t)return;let n=t.ueber18??!0;if(t.geburtsdatum){const s=new Date(t.geburtsdatum),i=new Date;n=i.getFullYear()-s.getFullYear()-(i<new Date(i.getFullYear(),s.getMonth(),s.getDate())?1:0)>=18}const a={id:"self",ueber18:n,sollStundenProWoche:t.sollStundenProWoche??35,sollStundenProTag:t.sollStundenProTag??7,berufsschulMuster:t.berufsschulMuster??{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null},zeitwirtschaftEmail:t.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:t.zeitwirtschaftAnrede||"Frau Kanarya",pausenRegel:t.pausenRegel??"auto",erstelltAm:t.erstelltAm??new Date().toISOString(),updatedAt:new Date().toISOString()};await e.table("profil").put(a)});async function ts(){try{const{erkenneBerufsschulMuster:e}=await $e(async()=>{const{erkenneBerufsschulMuster:l}=await Promise.resolve().then(()=>vs);return{erkenneBerufsschulMuster:l}},void 0),t=await p.tage.toArray();if(!t.length)return!1;const n=e(t),a=await p.profil.get("self");if(!a)return!1;const s=a.berufsschulMuster??{};return JSON.stringify(s.wochentageWoechentlich??[])!==JSON.stringify(n.wochentageWoechentlich)||JSON.stringify(s.wochentage14Taegig??[])!==JSON.stringify(n.wochentage14Taegig)||(s.referenzDatum14Taegig??null)!==(n.referenzDatum14Taegig??null)||(s.stundenProTag??null)!==(n.stundenProTag??null)||(s.halbtags??!1)!==(n.halbtags??!1)?(await p.profil.put({...a,berufsschulMuster:n}),!0):!1}catch(e){return console.warn("[db] refreshBerufsschulMuster fehlgeschlagen:",e),!1}}async function ns(){try{const{weekKey:e}=await $e(async()=>{const{weekKey:s}=await Promise.resolve().then(()=>Oa);return{weekKey:s}},void 0),{parseISO:t}=await $e(async()=>{const{parseISO:s}=await import("./datefns-C8_rfWt_.js").then(i=>i.r);return{parseISO:s}},[]),n=await p.tage.toArray(),a=[];for(const s of n){if(!s.datum)continue;const i=e(t(s.datum));i!==s.wocheKey&&a.push({...s,wocheKey:i})}return a.length&&await p.tage.bulkPut(a),a.length}catch(e){return console.warn("[db] refreshWocheKeys fehlgeschlagen:",e),0}}async function as(){try{const e=await p.mailVorlagen.toArray(),t=e.some(a=>a.betreff&&!a.betreff.startsWith("Bitte um Zeitkorrektur im ESS")),n=e.some(a=>a.text&&!/Vielen Dank!\s*$/.test(a.text));return t||n?(await p.mailVorlagen.clear(),!0):!1}catch(e){return console.warn("[db] ensureMailVorlagenFresh fehlgeschlagen:",e),!1}}async function ss(){const e=await p.einstellungen.get("__migration_reset");return(e==null?void 0:e.value)===!0?(await p.einstellungen.delete("__migration_reset"),!0):!1}async function J(){return await p.profil.get("self")??rn()}async function Ke(e){const t={...e,id:"self",updatedAt:new Date().toISOString()};return await p.profil.put(t),t}function rn(){return{id:"self",ueber18:!0,sollStundenProWoche:35,sollStundenProTag:7,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1},zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:"Frau Kanarya",pausenRegel:"auto",erstelltAm:new Date().toISOString()}}async function is(e,t=null){const n=await p.einstellungen.get(e);return n?n.value:t}async function rs(e,t){await p.einstellungen.put({key:e,value:t})}async function te(){return await p.tage.orderBy("datum").toArray()}async function ls(e,t,n){const a=n instanceof Date?n.toISOString():typeof n=="string"&&n?n:null,s=(d,o)=>o?d?d>o:!1:!0;let i=0,l=0,c=0,r=0;if(e.length){const d=e.map(h=>h.datum),o=await p.tage.bulkGet(d),u=[];for(let h=0;h<e.length;h++){const g={...e[h],_quellStichtag:a},m=o[h];!m||s(a,m._quellStichtag)?u.push(g):l++}u.length&&(await p.tage.bulkPut(u),i=u.length)}if(t.length){const d=t.map(h=>h.monatKey),o=await p.monate.bulkGet(d),u=[];for(let h=0;h<t.length;h++){const g={...t[h],_quellStichtag:a},m=o[h];!m||s(a,m._quellStichtag)?u.push(g):r++}u.length&&(await p.monate.bulkPut(u),c=u.length)}return{tage:i,monate:c,skippedTage:l,skippedMonate:r}}async function Re(){return await p.monate.orderBy("monatKey").toArray()}async function os(e){return await p.uploads.add({...e,hochladeDatum:new Date().toISOString()})}async function Ee(){return await p.uploads.orderBy("hochladeDatum").last()}async function ln(){return await p.uploads.orderBy("hochladeDatum").reverse().toArray()}async function xe(){return await p.fahrtgeldTemplate.get("self")}async function ht(e){await p.fahrtgeldTemplate.put({id:"self",...e})}async function cs(){await p.fahrtgeldTemplate.delete("self")}async function ds(){await Promise.all([p.profil.clear(),p.tage.clear(),p.monate.clear(),p.uploads.clear(),p.einstellungen.clear(),p.mailVorlagen.clear(),p.warnungDismissals.clear(),p.fahrtgeldTemplate.clear()])}async function on(){await Promise.all([p.tage.clear(),p.monate.clear(),p.uploads.clear(),p.warnungDismissals.clear()])}async function us(){const[e,t,n,a,s,i,l]=await Promise.all([p.profil.toArray(),p.tage.toArray(),p.monate.toArray(),p.uploads.toArray(),p.einstellungen.toArray(),p.mailVorlagen.toArray(),p.warnungDismissals.toArray()]);return{version:1,exportedAt:new Date().toISOString(),data:{profil:e,tage:t,monate:n,uploads:a,einstellungen:s,mailVorlagen:i,warnungDismissals:l}}}async function gs(e){if(!e||e.version!==1||!e.data)throw new Error("Ungültiges oder inkompatibles Backup-Format.");const t=e.data;await p.transaction("rw",p.profil,p.tage,p.monate,p.uploads,p.einstellungen,p.mailVorlagen,p.warnungDismissals,async()=>{var n,a,s,i,l,c,r;(n=t.profil)!=null&&n.length&&await p.profil.bulkPut(t.profil),(a=t.tage)!=null&&a.length&&await p.tage.bulkPut(t.tage),(s=t.monate)!=null&&s.length&&await p.monate.bulkPut(t.monate),(i=t.uploads)!=null&&i.length&&await p.uploads.bulkPut(t.uploads),(l=t.einstellungen)!=null&&l.length&&await p.einstellungen.bulkPut(t.einstellungen),(c=t.mailVorlagen)!=null&&c.length&&await p.mailVorlagen.bulkPut(t.mailVorlagen),(r=t.warnungDismissals)!=null&&r.length&&await p.warnungDismissals.bulkPut(t.warnungDismissals)})}async function Ve(e,t){await p.mailVorlagen.put({key:e,...t})}async function hs(e){return await p.mailVorlagen.get(e)}async function je(){return await p.mailVorlagen.toArray()}async function fs(e,t){await p.warnungDismissals.put({key:`${e}-${t}`,datum:e,typ:t,dismissedAt:new Date().toISOString()})}async function ms(){return await p.warnungDismissals.toArray()}function ps(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
    <polyline points="10 17 15 12 10 7"/>
    <line x1="15" y1="12" x2="3" y2="12"/>
  </svg>`}function bs(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>`}function cn(e,t={}){const{size:n=20,layout:a="inline"}=t;return e?`
    <div class="kommen-gehen ${a}">
      <span class="kg-block kommen" title="Kommen (frühester Einstempel)">
        ${ps(n)}
        <span class="kg-zeit tabular">${e.kommen}</span>
      </span>
      <span class="kg-block gehen" title="Gehen (spätester Ausstempel)">
        ${bs(n)}
        <span class="kg-zeit tabular">${e.gehen}</span>
      </span>
    </div>
  `:'<span class="kg-empty">—</span>'}function dn(e){var o;const t=e.filter(u=>u.tagestyp==="Berufsschule");if(t.length<2)return{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1};const n={};for(const u of t)n[o=u.wochentag]??(n[o]=[]),n[u.wochentag].push(u);const a=[],s=[];let i=null;for(const[u,h]of Object.entries(n)){if(h.sort((f,b)=>f.datum.localeCompare(b.datum)),h.length<2)continue;const g=[];for(let f=1;f<h.length;f++)g.push(qt(L(h[f].datum),L(h[f-1].datum)));const m=Mt(g);m<=10?a.push(u):m<=18&&(s.push(u),(!i||L(h[0].datum)<L(i))&&(i=h[0].datum))}const l=t.map(u=>u.ist).filter(u=>u!=null&&u>0),c=Mt(l),r=c!=null?Math.round(c*4)/4:null,d=r!=null&&r<5;return{wochentageWoechentlich:a,wochentage14Taegig:s,referenzDatum14Taegig:i,stundenProTag:r,halbtags:d}}function Mt(e){if(!e.length)return null;const t=e.slice().sort((a,s)=>a-s),n=Math.floor(t.length/2);return t.length%2?t[n]:(t[n-1]+t[n])/2}function qe(e,t){var s,i;if(!t)return!1;const a=["SO","MO","DI","MI","DO","FR","SA"][e.getDay()];if((s=t.wochentageWoechentlich)!=null&&s.includes(a))return!0;if((i=t.wochentage14Taegig)!=null&&i.includes(a)&&t.referenzDatum14Taegig){const l=L(t.referenzDatum14Taegig),c=Hn(e,l,{weekStartsOn:1});if(c>=0&&c%2===0)return!0}return!1}function un(e,t=null){return(e==null?void 0:e.halbtags)===!0&&(e==null?void 0:e.stundenProTag)!=null&&e.stundenProTag>0?e.stundenProTag:t}const vs=Object.freeze(Object.defineProperty({__proto__:null,erkenneBerufsschulMuster:dn,erwarteteBerufsschulStunden:un,istBerufsschulTagLautMuster:qe},Symbol.toStringTag,{value:"Module"})),ve={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function Ze(e,t,n,a=new Set){var u,h;const s=[],i=n??new Date,l=new Map(e.map(g=>[g.datum,g]));if(!e.length)return s;const c=L(e[0].datum),r=i,d=E(r,"yyyy-MM-dd");for(let g=new Date(c);g<=r;g=ze(g,1)){if(De(g))continue;const m=E(g,"yyyy-MM-dd"),f=l.get(m),b=nn(g,r),v=m===d,w=!f||!f.tagestyp&&!f.ist&&(((u=f.zeitSpannen)==null?void 0:u.length)??0)===0;if(!(v&&w)){if(w){if(qe(g,t.berufsschulMuster)){const y=b>=4?"error":b>=2?"warn":"info";ye(s,a,{datum:m,wochentag:(f==null?void 0:f.wochentag)??Fe(g),typ:"bs_tag_fehlt",schweregrad:y,titel:`Berufsschultag nicht eingetragen: ${T(g)}`,beschreibung:`Laut deinem Profil hast du am ${ve[Fe(g)]}, ${T(g)} Berufsschule. Im Zeitnachweis fehlt der Tag bisher${b>=4?" — bitte bei der Zeitwirtschaft nachhaken":""}.`,alter:b,mailVorlageKey:y==="error"?"bs_tag_fehlt":null})}else{const y=b>=4?"error":b>=2?"warn":"info";ye(s,a,{datum:m,wochentag:Fe(g),typ:"stempelzeit_fehlt",schweregrad:y,titel:`Keine Stempelzeit am ${T(g)}`,beschreibung:`Am ${ve[Fe(g)]}, ${T(g)} wurde keine Stempelzeit erfasst. Falls du an diesem Tag im Haus warst, sollte die Zeitwirtschaft das nachtragen${b>=4?" — es ist inzwischen ≥4 Werktage her":""}.`,alter:b,mailVorlageKey:y==="error"?"stempelzeit_fehlt":null})}continue}if(f.tagestyp==="Berufsschule"&&f.ist!=null){const y=un(t.berufsschulMuster,f.soll);y!=null&&f.ist<y-.5&&ye(s,a,{datum:m,wochentag:f.wochentag,typ:"bs_stunden_falsch",schweregrad:"error",titel:`Berufsschultag mit zu wenig Stunden: ${T(g)}`,beschreibung:`Am ${ve[f.wochentag]}, ${T(g)} sind nur ${f.ist.toFixed(2).replace(".",",")}h gebucht statt der für dich üblichen ${y.toFixed(2).replace(".",",")}h. Die Zeitwirtschaft hat den Berufsschultag möglicherweise nur halb erfasst.`,ist:f.ist,soll:y,mailVorlageKey:"bs_stunden_falsch"})}if(f.tagestyp==="Stempelzeit"&&((h=f.zeitSpannen)==null?void 0:h.length)>1&&m>=Gt){const y=Jt(f,t);(y==null?void 0:y.typ)==="fehler_zeitwirtschaft"&&y.unrechtmaessigerVerlustMin>=5?ye(s,a,{datum:m,wochentag:f.wochentag,typ:"pausen_abzug",schweregrad:y.unrechtmaessigerVerlustMin>=15?"error":"warn",titel:`Pausen-Abzug fehlerhaft (${T(g)})`,beschreibung:`Am ${ve[f.wochentag]}, ${T(g)} wurden ${Math.round(y.abgezogenePause*60)} min Pause abgezogen. Gestempelt: ${Math.round(y.gestempeltePause*60)} min, gesetzlich nötig (${y.gesetz.toUpperCase()}): ${Math.round(y.gesetzlichePflicht*60)} min. Differenz von ${y.unrechtmaessigerVerlustMin} min ist unerklärlich.`,verlustMinuten:y.unrechtmaessigerVerlustMin,abgezogen:y.abgezogenePause,gestempelt:y.gestempeltePause,mailVorlageKey:"pausen_abzug"}):(y==null?void 0:y.typ)==="aufstockung_legal"&&y.aufstockungMin>=10&&ye(s,a,{datum:m,wochentag:f.wochentag,typ:"pausen_aufstockung",schweregrad:"info",titel:`Zu wenig Pause gestempelt (${T(g)}) — ${y.aufstockungMin} min automatisch aufgestockt`,beschreibung:`Am ${ve[f.wochentag]}, ${T(g)} hast du nur ${Math.round(y.gestempeltePause*60)} min Pause gemacht. Gesetz (${y.gesetz.toUpperCase()}) schreibt ${Math.round(y.gesetzlichePflicht*60)} min vor. Fehlende ${y.aufstockungMin} min wurden als Pause gewertet — das ist legal, aber du verlierst dadurch Arbeitszeit. Tipp: mach beim nächsten Mal etwas länger Mittag.`})}}}const o={error:0,warn:1,info:2};return s.sort((g,m)=>{const f=o[g.schweregrad]-o[m.schweregrad];return f!==0?f:m.datum.localeCompare(g.datum)}),s}function gn(e,t=new Set){var a,s,i,l;const n=[];for(const c of e){const r=((a=c.glz)==null?void 0:a.saldoVorperiode)??0,d=((s=c.glz)==null?void 0:s.saldoAktuellePeriode)??0,o=((i=c.glz)==null?void 0:i.umgebuchteStunden)??0,u=(l=c.glz)==null?void 0:l.saldoGesamt;if(u==null)continue;const h=r+d+o,g=Math.abs(u-h);if(g>.03){const m=`${c.monatKey}-saldo_plausi`;t.has(m)||n.push({datum:`${c.monatKey}-01`,wochentag:"",typ:"saldo_plausi",schweregrad:"warn",titel:`Saldo-Differenz im Monat ${c.monatKey}`,beschreibung:`Rechnung: Vorperiode ${r.toFixed(2)} + aktuelle Periode ${d.toFixed(2)} + umgebucht ${o.toFixed(2)} = ${h.toFixed(2)}, aber dein Saldo wird mit ${u.toFixed(2)} angezeigt. Abweichung: ${g.toFixed(2)}h.`,soll:h,ist:u})}}return n}function ye(e,t,n){const a=`${n.datum}-${n.typ}`;t.has(a)||(n.id=a,e.push(n))}function Fe(e){return["SO","MO","DI","MI","DO","FR","SA"][e.getDay()]}const ys={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"},Se={bs_tag_fehlt:{key:"bs_tag_fehlt",titel:"Berufsschultag fehlt",beschreibung:"Wenn ein Berufsschultag komplett nicht im Zeitnachweis eingetragen wurde.",betreff:"Bitte um Zeitkorrektur im ESS  - Fehlender Berufsschultag {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

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

Vielen Dank!`},fahrgeld_abgabe:{key:"fahrgeld_abgabe",titel:"Fahrgelderstattung abgeben",beschreibung:"Mail an die Personalabteilung mit der monatlichen Fahrgelderstattungs-Excel.",betreff:"Fahrgelderstattung {monat_jahr}",text:`Guten Tag Frau Mayer,

hiermit sende ich Ihnen das ausgefüllte Dokument für die Fahrgelderstattung vom {monat_jahr} zu.
Vielen Dank!`}};function Pe(e,t){const n=Se[e];return n?{...n,...t??{}}:null}function hn(e,t){const n=zt(e.text,t);return{betreff:zt(e.betreff,t),text:n}}function zt(e,t){return e.replace(/\{(\w+)\}/g,(n,a)=>t[a]!=null?String(t[a]):`{${a}}`)}function ft(e,t){const n=t.datum?new Date(t.datum):null;return{name:"",personalnr:"",kostenstelle:"",datum:n?dt(n).split(", ")[1]:"",wochentag:ys[t.wochentag]??t.wochentag??"",zeitwirtschaft_anrede:e.zeitwirtschaftAnrede||"Frau Kanarya",zeitwirtschaft_email:e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",ist:t.ist!=null?t.ist.toFixed(2).replace(".",","):"",soll:t.soll!=null?t.soll.toFixed(2).replace(".",","):"",abgezogen:t.abgezogen!=null?Math.round(t.abgezogen*60):"",gestempelt:t.gestempelt!=null?Math.round(t.gestempelt*60):"",verlust:t.verlustMinuten??""}}function mt(e,t,n){const a=hn(t,n),s=e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",i=new URLSearchParams;return i.set("subject",a.betreff),i.set("body",a.text),`mailto:${s}?${i.toString().replace(/\+/g,"%20")}`}let ws=0;function R(e,{type:t="info",duration:n=3500}={}){const a=document.getElementById("toast-root");if(!a)return;const s=document.createElement("div");s.className=`toast ${t}`,s.textContent=e,s.dataset.id=++ws,a.appendChild(s),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateY(-8px)",s.style.transition="opacity 220ms, transform 220ms",setTimeout(()=>s.remove(),250)},n)}function Ie(e){return R(e,{type:"error",duration:6e3})}function F(e){return R(e,{type:"success"})}const ks=3,xs=2.5,$s={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function Ue(e,t={}){if(!(e!=null&&e.length))return'<p style="color: var(--fg-muted);">Keine Tage im Zeitraum.</p>';const n=new Map;for(const i of t.warnungen??[])n.has(i.datum)||n.set(i.datum,[]),n.get(i.datum).push(i);const a=[];let s=null;for(const i of e)(!s||s.key!==i.wocheKey)&&(s={key:i.wocheKey,tage:[]},a.push(s)),s.tage.push(i);return`<div class="tages-liste">${a.map(i=>Ss(i,n)).join("")}</div>`}function Ss(e,t){var o;const n=e.tage.reduce((u,h)=>u+Ne(h),0),a=e.tage.reduce((u,h)=>u+(h.diff??0),0),s=(o=e.tage[0])==null?void 0:o.datum,i=s?Ae(L(s)):"",l=e.key?e.key.split("-")[1]:"?",c=a>.05?"pos":a<-.05?"neg":"flat",r=(a>0?"+":"")+a.toFixed(2).replace(".",",")+"h",d=n.toFixed(2).replace(".",",")+"h";return`
    <div class="woche-group">
      <div class="woche-header">
        <div class="woche-header-titel">
          <span class="woche-header-kw">KW ${x(l)}</span>
          <span class="woche-header-range tabular">${x(i)}</span>
        </div>
        <div class="woche-header-stats">
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Ist</span>
            <span class="woche-header-ist tabular">${d}</span>
          </span>
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Diff</span>
            <span class="woche-header-diff tabular ${c}">${r}</span>
          </span>
        </div>
      </div>
      <div class="woche-tage">
        ${e.tage.map(u=>Ms(u,(t==null?void 0:t.get(u.datum))??[])).join("")}
      </div>
    </div>
  `}function Ms(e,t=[]){const n=e.diff??0,a=n>0,s=a?ks:xs,i=Math.min(150,Math.abs(n)/s*50),l=a?"var(--success)":n<0?"var(--danger)":"var(--fg-subtle)",c=Ut(e.zeitSpannen),r=e.saldo??0,d=t.length>0,o=d?Ds(t):"",u=d?t.map(g=>`${g.titel}${g.beschreibung?`
`+g.beschreibung:""}`).join(`

`):"",h=d?t[0].schweregrad:null;return`
    <a href="#/tag/${e.datum}" class="tag-row${d?" has-warn severity-"+h:""}">
      <div class="tag-row-datum">
        <div class="tabular">${x(T(new Date(e.datum)))}</div>
        <div class="tag-row-wd">${zs(e.wochentag)}</div>
      </div>
      <div class="tag-row-warn-cell" aria-hidden="${d?"false":"true"}">
        ${d?`<span class="tag-row-warn severity-${h}" title="${x(u)}">${o}${t.length>1?" "+t.length:""}</span>`:""}
      </div>
      <div class="tag-row-typ">
        ${e.tagestyp?`<span class="pill ${As(e.tagestyp)}">${x(e.tagestyp)}</span>`:'<span style="color: var(--fg-subtle); font-size: 12px;">—</span>'}
      </div>
      <div class="tag-row-kg">
        ${cn(c,{size:18})}
      </div>
      <div class="tag-row-ist tabular">
        ${(()=>{if(e.ist==null)return'<div class="ist-wert">—</div>';const g=Oe(e.ist),[m,f]=g.split(":");return e.ist<=0?`<div class="ist-wert">${g}</div>`:`<div class="ist-display" title="Klick auf H oder M zum Kopieren">
            <button class="ist-part" data-val="${m}" title="${m} Stunden kopieren">${m}</button><span class="ist-sep">:</span><button class="ist-part" data-val="${f}" title="${f} Minuten kopieren">${f}</button>
          </div>`})()}
        <div style="color: var(--fg-subtle); font-size: 11px;">Soll ${e.soll!=null?Oe(e.soll):"—"}</div>
      </div>
      <div class="tag-row-bar">
        <div class="bar-track">
          <div class="bar-zero"></div>
          <div class="bar-fill ${a?"pos":"neg"}" style="width: ${i}%; background: ${l};"></div>
        </div>
      </div>
      <div class="tag-row-diff tabular" style="color: ${a?"var(--success)":n<0?"var(--danger)":"var(--fg-muted)"};">
        ${n!==0?(a?"+":"")+n.toFixed(2).replace(".",",")+"h":"0,00h"}
      </div>
      <div class="tag-row-saldo tabular" title="Gesamt-Saldo nach diesem Tag" style="color: var(--fg-muted); font-size: 12px; text-align: right; line-height: 1.15;">
        <div>${r>=0?"+":""}${r.toFixed(2).replace(".",",")}h</div>
        <div style="color: var(--fg-subtle); font-size: 10px; font-weight: 500; letter-spacing: 0.02em;">Saldo nach Tag</div>
      </div>
    </a>
  `}function zs(e){return $s[e]??e}function Ds(e){const t={error:3,warn:2,info:1};let n=e[0];for(const a of e)(t[a.schweregrad]||0)>(t[n.schweregrad]||0)&&(n=a);return n.schweregrad==="error"?"!":n.schweregrad==="warn"?"⚠":"i"}function As(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function pt(e){e._istCopyAttached||(e._istCopyAttached=!0,e.addEventListener("click",async t=>{const n=t.target.closest(".ist-part");if(!n)return;t.preventDefault(),t.stopPropagation();const a=n.getAttribute("data-val");try{await navigator.clipboard.writeText(a);const s=n.textContent;n.classList.add("ok"),n.textContent="✓",setTimeout(()=>{n.classList.remove("ok"),n.textContent=s},800)}catch{F(`Bitte kopieren: ${a}`)}}))}const Es=[{key:7,label:"1 Woche"},{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:180,label:"6 Monate"},{key:365,label:"1 Jahr"},{key:730,label:"2 Jahre"},{key:"alles",label:"Alles"}];function Ps(e){return Es.filter(t=>t.key==="alles"||t.key<e)}async function Dt({root:e}){const[t,n,a,s,i,l,c]=await Promise.all([J(),Re(),te(),ms(),is("dashboardZeitraum",14),je(),Ee()]),r=Object.fromEntries(l.map(S=>[S.key,S]));if(a.length===0){e.innerHTML=Fs();return}const d=Xt(a,n),o=d.length,u=Ps(o);let h=i;u.some(S=>S.key===h)||(h="alles");const g=new Set(s.map(S=>S.key)),m=c!=null&&c.stichtagAuswertung?new Date(c.stichtagAuswertung):new Date,f=Ze(a,t,m,g),b=gn(n,g),v=[...f,...b],w=Aa(d),y=w>.05?"positive":w<-.05?"negative":"";e.innerHTML=`
    <h1 class="view-title">Dashboard</h1>
    <p class="view-subtitle">Stand: ${He(T(new Date(a[a.length-1].datum)))}</p>

    <div class="saldo-hero" style="margin-bottom: 32px; align-items: stretch;">
      <div class="saldo-hero-text" style="min-width: 260px;">
        <h3>Aktueller Gleitzeit-Saldo</h3>
        <div class="saldo-value ${y}">${se(w,{signed:!0,suffix:""})}</div>
        <div class="saldo-unit">Stunden · tagesaktuell</div>
        <div id="hero-bewegung" class="saldo-trend flat" style="margin-top: 12px;"></div>
      </div>
      <div style="flex: 1; min-width: 400px; display: flex; flex-direction: column;">
        <div class="card-split" style="margin-bottom: 12px; align-items: center;">
          <h3 style="margin: 0;">Verlauf</h3>
          <div class="segmented" id="zeitraum-picker">
            ${u.map(S=>`<button type="button" data-key="${S.key}" class="${h===S.key?"active":""}">${S.label}</button>`).join("")}
          </div>
        </div>
        <div style="flex: 1; height: 220px;"><canvas id="saldo-chart"></canvas></div>
      </div>
    </div>

    ${v.length>0?`
      <div class="card" style="margin-bottom: 32px;">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Offene Warnungen</h2>
        </div>
        ${v.slice(0,8).map(S=>Ts(S,t,r)).join("")}
        ${v.length>8?`<div style="margin-top: 12px; color: var(--fg-muted); font-size: 13px; text-align: center;">+ ${v.length-8} weitere Warnungen vorhanden</div>`:""}
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
          ${u.map(S=>`<button type="button" data-key="${S.key}" class="${h===S.key?"active":""}">${S.label}</button>`).join("")}
        </div>
      </div>
      <div id="tage-liste"></div>
    </div>

  `,At(h,e,d,v);const B=()=>e.querySelectorAll("#zeitraum-picker button, #zeitraum-picker-2 button");B().forEach(S=>{S.addEventListener("click",async()=>{if(S.disabled)return;const C=S.getAttribute("data-key"),I=C==="alles"?"alles":parseInt(C,10);B().forEach(M=>M.classList.toggle("active",M.getAttribute("data-key")===C)),await rs("dashboardZeitraum",I),At(I,e,d,v)})}),e.addEventListener("click",async S=>{const C=S.target.closest(".ist-part");if(C){S.preventDefault(),S.stopPropagation();const z=C.getAttribute("data-val");try{await navigator.clipboard.writeText(z);const D=C.textContent;C.classList.add("ok"),C.textContent="✓",setTimeout(()=>{C.classList.remove("ok"),C.textContent=D},800)}catch{F(`Bitte kopieren: ${z}`)}return}const I=S.target.closest(".btn-dismiss");if(!I)return;const M=I.getAttribute("data-datum"),K=I.getAttribute("data-typ");if(!M||!K)return;await fs(M,K),F("Warnung ausgeblendet.");const k=I.closest(".alert");k&&(k.style.display="none")})}function At(e,t,n,a=[]){const s=Da(n,e),i=Ea(s);requestAnimationFrame(()=>{const d=t.querySelector("#saldo-chart");gt(d,s)});const l=t.querySelector("#hero-bewegung");if(l){const d=i>.05?"up":i<-.05?"down":"flat",o=i>.05?"↑":i<-.05?"↓":"→";l.className=`saldo-trend ${d}`,l.innerHTML=`${o} ${Math.abs(i)<.01?"Unverändert":se(i,{signed:!0})} im Zeitraum`}const c=t.querySelector("#tage-info");if(c){const d=s.length;c.textContent=`${d} ${d===1?"Tag":"Tage"}`}const r=t.querySelector("#tage-liste");r&&(r.innerHTML=Ue(s.slice().reverse(),{warnungen:a.filter(d=>s.some(o=>o.datum===d.datum))}))}function Ts(e,t,n){const a=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";let s=null;if(e.mailVorlageKey&&t){const i=Pe(e.mailVorlageKey,n==null?void 0:n[e.mailVorlageKey]);if(i){const l=ft(t,e);s=mt(t,i,l)}}return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${a}</div>
      <div class="alert-body">
        <div class="alert-title">${He(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${He(e.beschreibung)}</p>
        <div class="alert-actions">
          ${s?`<a href="${Qe(s)}" class="btn-mail-medium"><img src="outlook-logo.png" alt="" class="outlook-logo-medium" />E-Mail</a>`:""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
          <button class="btn ghost sm btn-dismiss" data-datum="${Qe(e.datum)}" data-typ="${Qe(e.typ)}">Ausblenden</button>
        </div>
      </div>
    </div>
  `}function Fs(){return`
    <div class="empty-state" style="margin-top: 80px;">
      <p class="hint" style="margin-bottom: 18px;">Noch keine Daten geladen.</p>
      <a href="#/daten" class="btn primary">Zum Upload →</a>
      <p class="hint" style="margin-top: 24px; font-size: 12px;">Tipp: Tour erneut starten unter <a href="#/daten" style="color: var(--accent);">Daten</a> ganz unten.</p>
    </div>
  `}function He(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Qe(e){return He(e)}const Ls="/better-ess/assets/pdf.worker.min-yatZIOMy.mjs";Zn.workerSrc=Ls;const Et={Januar:1,Februar:2,März:3,Maerz:3,April:4,Mai:5,Juni:6,Juli:7,August:8,September:9,Oktober:10,November:11,Dezember:12},Cs=["Stempelzeit","Berufsschule Std. bez","Berufsschule","Dienstreise Arbeitszeit","Reise öff.VM/PKW Beifahr.","Reise öff.VM/PKW","Urlaub","Gleitzeit","Arbeitsunfähigkeit","TgDtEinh","Neujahr","Karfreitag","Ostermontg","Ostmontg","Osterso.","Hl.3 Kön.","Allerhlg","Pfingstmo","Fronleichn","TdDtEinh"];async function _s(e){var r,d;const n=await Un({data:e}).promise,a=[];let s=0;for(let o=1;o<=n.numPages;o++){const h=await(await n.getPage(o)).getTextContent();s+=h.items.length;const g=Bs(h.items);for(const m of g)a.push({page:o,text:m})}const i=Ws(a),{tage:l,monate:c}=Os(a);try{const o=await n.getMetadata();i.producer=((r=o==null?void 0:o.info)==null?void 0:r.Producer)??null,i.creator=((d=o==null?void 0:o.info)==null?void 0:d.Creator)??null}catch{}return i.totalTextItems=s,{meta:i,tage:l,monate:c}}function Bs(e){if(!e.length)return[];const t=e.slice().sort((l,c)=>{const r=c.transform[5]-l.transform[5];return Math.abs(r)>2?r:l.transform[4]-c.transform[4]}),n=[];let a=null,s=[];const i=3;for(const l of t){const c=l.transform[5];a==null||Math.abs(c-a)<=i?(s.push(l),a==null&&(a=c)):(n.push(Pt(s)),s=[l],a=c)}return s.length&&n.push(Pt(s)),n.filter(l=>l.trim().length>0)}function Pt(e){e.sort((a,s)=>a.transform[4]-s.transform[4]);let t="",n=-1;for(const a of e){const s=a.transform[4];n>=0&&s-n>4?t+="  ":n>=0&&s-n>.5&&(t+=" "),t+=a.str,n=s+a.width}return t}function Ws(e){var n,a;const t={personalnummer:null,name:null,kostenstelle:null,personalbereich:null,einstellungsdatum:null,mitarbeiterkreis:null,arbeitszeitplanregel:null,zeitraumVon:null,zeitraumBis:null,stichtagAuswertung:null};for(let s=0;s<e.length;s++){const i=e[s].text,l=/vom\s+(\d{2}\.\d{2}\.\d{4})\s+bis\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);l&&(t.zeitraumVon=fe(l[1]),t.zeitraumBis=fe(l[2]));const c=/bis einschließlich dem\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);if(c&&(t.stichtagAuswertung=fe(c[1])),/Personalnummer/i.test(i)&&/Kostenstelle/i.test(i)){const r=(((n=e[s+1])==null?void 0:n.text)??"").trim();let d=r.split(/\s{2,}/);d.length<3&&(d=r.split(/\s+/)),d.length>=3&&/^\d/.test(d[0])&&(t.personalnummer=d[0],t.kostenstelle=d[1],t.personalbereich=d[2])}if(/Einstellungsdatum/i.test(i)&&/Mitarbeiterkreis/i.test(i)){const r=(((a=e[s+1])==null?void 0:a.text)??"").trim();let d=r.split(/\s{2,}/);d.length<3&&(d=r.split(/\s+/)),d.length>=3&&/^\d{2}\.\d{2}\.\d{4}$/.test(d[0])&&(t.einstellungsdatum=fe(d[0]),t.mitarbeiterkreis=d[1],t.arbeitszeitplanregel=d[2])}if(/Bei Rückfragen wenden Sie sich an/i.test(i))for(let r=s+1;r<Math.min(s+8,e.length);r++){const d=e[r].text.trim();if(/^[A-ZÄÖÜ][a-zäöüß]+(?:\s[A-ZÄÖÜ][a-zäöüß]+)+$/.test(d)&&!/kanarya/i.test(d)&&!/tel/i.test(d)){t.name=d;break}}}return t}function Os(e,t){var r;const n=[],a=[];let s=null,i=null,l=!1,c=0;for(;c<e.length;){const d=e[c].text,o=/Monat:\s*([A-Za-zäöüÄÖÜß]+)\s*-\s*(\d{4})/.exec(d);if(o){const m=o[1].trim(),f=parseInt(o[2],10),b=Et[m]??Et[m.replace("ä","ae")]??null;b&&(s={jahr:f,monat:b,monatKey:`${f}-${String(b).padStart(2,"0")}`},l=!0,i=null),c++;continue}if(/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.test(d)){const m=/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.exec(d),f=fe(m[1]);i={monatKey:(s==null?void 0:s.monatKey)??ut(f),stichtag:f,glz:{},flexi:{},zeitkonten:{},raw:{}},c=Ks(e,c+1,i),a.push(i);continue}let u=s;const h=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)\b/.exec(d.trim());if(h&&s){const m=parseInt(h[1],10);l&&m>=20?u=Hs(s):m<=15&&(l=!1)}const g=Tt(d,u);if(g){const m=[];let f=c+1;for(;f<e.length;){const v=e[f].text;if(/^\s*\d{4}\s+Umbuchung/.test(v)||Tt(v,s)||/Wochensumme/i.test(v)||/Monats.bersicht/i.test(v)||/Monat:\s*[A-Za-z]/i.test(v))break;const w=Vs(v);if(w){m.push(w),f++;continue}break}if(m.length&&g.zeitSpannen.push(...m),g.tagestyp==="Wochenende"||g.wochentag==="SA"||g.wochentag==="SO"){c=f;continue}(g.ist!=null||g.soll!=null||(((r=g.zeitSpannen)==null?void 0:r.length)??0)>0||g.tagestyp!=null)&&n.push(g),c=f;continue}c++}return{tage:n,monate:a}}function Ks(e,t,n){let a=t;const s=/(\d{4,5}|KTAU|AZAU)\s*-\s*(.+?)\s+(-?[\d,.]+-?)(?=\s+(?:\d{4,5}|KTAU|AZAU)\s*-|\s*$)/g;for(;a<e.length;){const i=e[a].text.trim();if(/^Monat:\s/.test(i)||/^Einzelergebnisse\s/.test(i)||/^Tag\b/.test(i)||/^Wochensumme/.test(i)||/^\d{2}\s+(MO|DI|MI|DO|FR|SA|SO)\b/.test(i)||/^Übersicht für den Zeitraum/i.test(i)||/^Abwesenheitsansprüche/i.test(i))break;s.lastIndex=0;let l;for(;(l=s.exec(i))!=null;){const c=l[1],r=l[2].trim(),d=Zt(l[3]);n.raw[c]={beschreibung:r,wert:d},c==="0008"&&(n.glz.saldoVorperiode=d),c==="8016"&&(n.glz.saldoAktuellePeriode=d),c==="9802"&&(n.glz.umgebuchteStunden=d),c==="0005"&&(n.glz.saldoGesamt=d),c==="9803"&&(n.glz.ueberzaehligeStd=d),c==="0050"&&(n.zeitkonten.produktivstunden=d),c==="9011"&&(n.flexi.jahreskontoVorperiode=d),c==="9010"&&(n.flexi.jahreskontoSaldo=d),c==="9020"&&(n.flexi.langzeitkontoSaldo=d),c==="9203"&&(n.zeitkonten.azMonatsendeUeber216=d),c==="9207"&&(n.zeitkonten.auszahlungBav=d),c==="9205"&&(n.zeitkonten.summeAuszahlung=d)}if(a++,a-t>80)break}return a}function Tt(e,t){if(!t)return null;const n=e.trim(),a=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)(?:\s+(.+))?$/.exec(n);if(!a)return null;const s=parseInt(a[1],10),i=a[2],l=(a[3]??"").trim();let c=t.jahr,r=t.monat;const d=new Date(c,r-1,s),o={datum:tn(d),datumDate:d.toISOString(),wochentag:i,tagNr:s,monatKey:ut(d),wocheKey:en(d),zeitSpannen:[],aktivitaeten:[],ist:null,soll:null,diff:null,pause:null,tazp:null,tagestyp:null,raw:n};return l?(Is(l,o),o):(o.tagestyp=["SA","SO"].includes(i)?"Wochenende":null,o)}function Vs(e){const t=e.trim(),n=/^(Stempelzeit|Reise öff\.VM\/PKW Beifahr\.|Reise öff\.VM\/PKW|Dienstreise Arbeitszeit)\s+(\d{2}:\d{2})\s+(\d{2}:\d{2})\s*$/.exec(t);return n?{aktivitaet:n[1],von:n[2],bis:n[3]}:null}function Is(e,t){let n=null,a=e;for(const o of Cs)if(e.startsWith(o)){n=o,a=e.slice(o.length).trim();break}n||(n=e.split(/\s+/)[0],a=e.slice(n.length).trim()),t.tagestyp=Ns(n),t.aktivitaeten.push(n);const s=a.split(/\s+/).filter(Boolean),i=/^\d{2}:\d{2}$/,l=/^-?[\d,.]+-?$/;let c=0;for(;s[c]&&i.test(s[c])&&s[c+1]&&i.test(s[c+1]);)t.zeitSpannen.push({aktivitaet:n,von:s[c],bis:s[c+1]}),c+=2;const r=[];for(;c<s.length&&l.test(s[c]);){const o=Zt(s[c]);o!=null&&r.push(o),c++}let d=s[c];r.length>=5?([t.ist,t.soll,t.diff,t.pause]=r,d||(d=String(r[4]))):r.length===4?[t.ist,t.soll,t.diff,t.pause]=r:r.length===3?[t.ist,t.soll,t.diff]=r:r.length===2?[t.ist,t.soll]=r:r.length===1&&(t.ist=r[0]),d&&(t.tazp=String(d))}function Hs(e){if(!e)return null;let t=e.monat-1,n=e.jahr;return t<1&&(t=12,n-=1),{jahr:n,monat:t,monatKey:`${n}-${String(t).padStart(2,"0")}`}}function Ns(e){return e?/^Stempelzeit$/i.test(e)?"Stempelzeit":/^Berufsschule Std\. bez$/i.test(e)||/^Berufsschule$/i.test(e)?"Berufsschule":/Dienstreise/i.test(e)||/Reise/i.test(e)?"Dienstreise":/^Urlaub$/i.test(e)?"Urlaub":/^Gleitzeit$/i.test(e)?"Gleitzeit":/Arbeitsunf.higkeit/i.test(e)?"Arbeitsunfähigkeit":/^(Neujahr|Karfreitag|Ostermontg|Ostmontg|Osterso\.|Hl\.3 Kön\.|Allerhlg|Pfingstmo|Fronleichn|TdDtEinh|TgDtEinh)$/i.test(e)?"Feiertag":e:null}function U(e,t={}){const{title:n="Bestätigen",confirmLabel:a="Bestätigen",cancelLabel:s="Abbrechen",variant:i="default"}=t;return Rs({message:e,title:n,confirmLabel:a,cancelLabel:s,variant:i,kind:"confirm"})}function Rs({message:e,title:t,confirmLabel:n,cancelLabel:a,variant:s,kind:i}){return new Promise(l=>{const c=document.activeElement,r=document.createElement("div");r.className="app-dialog-overlay",r.innerHTML=`
      <div class="app-dialog" role="dialog" aria-modal="true" aria-labelledby="app-dialog-title">
        <h3 id="app-dialog-title" class="app-dialog-title">${Ce(t)}</h3>
        <div class="app-dialog-message">${js(e)}</div>
        <div class="app-dialog-actions">
          ${`<button class="btn ghost app-dialog-cancel" type="button">${Ce(a)}</button>`}
          <button class="btn primary app-dialog-confirm ${s==="danger"?"is-danger":""}" type="button">${Ce(n)}</button>
        </div>
      </div>
    `,document.body.appendChild(r),requestAnimationFrame(()=>r.classList.add("is-open"));const d=r.querySelector(".app-dialog-confirm"),o=r.querySelector(".app-dialog-cancel"),u=g=>{r.classList.remove("is-open"),setTimeout(()=>{if(r.remove(),document.removeEventListener("keydown",h),c&&c.focus)try{c.focus()}catch{}l(g)},180)},h=g=>{g.key==="Escape"?(g.preventDefault(),u(!1)):g.key==="Enter"&&(g.preventDefault(),u(!0))};d==null||d.addEventListener("click",()=>u(!0)),o==null||o.addEventListener("click",()=>u(!1)),r.addEventListener("click",g=>{g.target===r&&u(!1)}),document.addEventListener("keydown",h),setTimeout(()=>d==null?void 0:d.focus(),50)})}function Ce(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function js(e){return Ce(e).replace(/\n/g,"<br>")}const fn="better-ess-tour-completed",bt=typeof import.meta<"u"?"/better-ess/":"/",qs=bt+"tutorial/speichern.png",Zs=bt+"tutorial/download.png",Us=bt+"tutorial/zeitraum.png",me=[{type:"modal",hero:!0,icon:"👋",title:"Willkommen bei Better ESS",text:"Diese App liest deinen <strong>Zeitnachweis</strong> und macht ihn auf einen Blick verständlich.<br><br>Sie <strong>warnt dich automatisch</strong> bei fehlenden Tagen, falschen Berufsschul-Stunden oder unrechtmäßigem Pausen-Abzug. Du kannst deine <strong>monatliche Fahrgelderstattungs-Excel</strong> auf Knopfdruck generieren und <strong>Korrektur-Mails an die Zeitwirtschaft</strong> mit einem Klick verschicken — Empfänger, Betreff und Text sind schon vorbefüllt."},{type:"modal",hero:!0,icon:"🔒",title:"Deine Daten bleiben bei dir",text:"Dein PDF geht <strong>nicht ins Internet</strong>.<br><br>Alles läuft lokal in deinem Browser — wie eine Notizen-App. Kein Upload, kein Server, kein Konto."},{type:"highlight",target:'a[href="#/daten"]',icon:"📂",title:"Hier startet alles",text:"Hier lädst du deinen Zeitnachweis hoch.",placement:"right",autoClick:!0,onAfterClick:async()=>{window.location.hash!=="#/daten"&&(window.location.hash="#/daten"),await _e("#upload-zone",1500)}},{type:"download-modal",icon:"📥",title:'1. Im ESS auf „Zeitnachweis herunterladen" klicken',image:Zs,points:[{kind:"good",icon:"✓",text:"Den Button findest du unten rechts in der ESS-Zeitbuchungs-Ansicht."}]},{type:"download-modal",icon:"📅",title:'2. „Anderer Zeitraum" wählen — möglichst groß',image:Us,points:[{kind:"good",icon:"✓",text:'Wähle <strong>„Anderer Zeitraum"</strong> und nimm einen möglichst großen Bereich (am besten Ausbildungsstart bis heute) — die App nutzt alle Daten für Saldo-Verlauf und Trends.'},{kind:"bad",icon:"✕",text:'Nicht „Aktuelle Woche" oder „Aktueller Monat" — dann fehlen Verlaufs-Daten.'}]},{type:"download-modal",icon:"💾",title:'3. Im PDF-Viewer auf „Speichern" — nicht „Drucken"',image:qs,points:[{kind:"good",icon:"✓",text:"<strong>Speichern-Button</strong> (Disketten-Symbol oben rechts in der PDF-Toolbar) — speichert eine echte Text-PDF."},{kind:"bad",icon:"✕",text:'<strong>NICHT</strong> „Drucken → Microsoft Print to PDF" — dabei werden Texte als Pfade gerendert und sind nicht lesbar.'}]},{type:"highlight",target:"#upload-zone",icon:"📥",title:"Lade jetzt dein PDF hoch",text:"Zieh dein Zeitnachweis-PDF auf die Box (oder klick sie an). Erst nach dem Upload geht die Tour weiter.",placement:"top",waitForTarget:!0,waitForEvent:"better-ess:pdf-uploaded"},{type:"modal",icon:"✨",title:"Geschafft!",text:"Dein PDF ist eingelesen. Jetzt zeig ich dir die Funktionen — anhand deiner echten Daten.",onNext:async()=>{window.location.hash="#/",await _e(".saldo-value",1500)}},{type:"highlight",target:".saldo-value",icon:"⚖️",title:"Dein aktueller Saldo",text:"Plus oder Minus auf einen Blick. Tagesaktuell.",placement:"right",waitForTarget:!0},{type:"highlight",target:"#saldo-chart",icon:"📈",title:"Saldo-Verlauf",text:"Hover über die Punkte für Details. Zeitraum oben rechts umschaltbar.",placement:"top",waitForTarget:!0},{type:"highlight",target:".tag-row .ist-display",icon:"⏱️",title:"Stunden direkt kopieren",text:"Klick auf <strong>H</strong> oder <strong>M</strong> — kopiert den Wert in deine Zwischenablage. Praktisch fürs IHK-Berichtsheft.",placement:"left",waitForTarget:!0},{type:"highlight",target:".alert",icon:"⚠️",title:"Auffälligkeiten",text:"Fehlende Tage, falsche BS-Stunden, Pausen-Abzug — alles automatisch erkannt.",placement:"left",optional:!0,waitForTarget:!0,timeoutMs:1200},{type:"highlight",target:'a[href="#/profil"]',icon:"👤",title:"Profil",text:"Über 18? Pausen-Regel und Mail-Empfänger anpassen.",placement:"right"},{type:"highlight",target:'a[href="#/fahrtgeld"]',icon:"🚌",title:"Fahrgelderstattung",text:"Hier generierst du deine monatliche Fahrgeld-Excel mit deinen erkannten Berufsschultagen.",placement:"right",autoClick:!0,onAfterClick:async()=>{window.location.hash!=="#/fahrtgeld"&&(window.location.hash="#/fahrtgeld"),await _e("#fahrtgeld-dropzone, #btn-template-replace, .fahrtgeld-generate-card",2e3)}},{type:"highlight",target:"#fahrtgeld-dropzone, .fahrtgeld-generate-card",icon:"📥",title:"Vorlage einmalig hochladen",text:'Eine bestehende Fahrgeld-Excel hier hochladen — Name, Personalnummer, Haltestellen und Tagessatz werden automatisch ausgelesen. Tour wartet auf den Upload (oder oben auf „Überspringen", um die Tour zu beenden).',placement:"top",waitForTarget:!0,timeoutMs:2500,waitForEvent:"better-ess:fahrgeld-template-uploaded"},{type:"highlight",target:".btn-generate-big",icon:"✅",title:"Excel generieren",text:"Monat unten auswählen, dann hier klicken. Du bekommst eine fertig ausgefüllte Excel zum Download — mit deinen Berufsschultagen, Datum und Unterschrift.",placement:"bottom",waitForTarget:!0,timeoutMs:1500,optional:!0},{type:"highlight",target:".btn-mail-big",icon:"✉️",title:"E-Mail an die Personalabteilung",text:"Öffnet Outlook mit fertig vorausgefülltem Empfänger, Betreff und Text. Excel-Anhang aus dem Download-Ordner musst du noch manuell dranhängen.",placement:"bottom",waitForTarget:!0,timeoutMs:1500,optional:!0},{type:"modal",icon:"🚀",title:"Bereit!",text:"Du kennst alle Funktionen. Tour erneut starten? Button am Ende der <strong>Daten</strong>-Seite."}],Ft=me.findIndex(e=>e.icon==="✨");let A=null,ce=null;function mn(){A===null&&(vt(),A={idx:0},Q())}function Gs(e){return e?!1:!localStorage.getItem(fn)}function Js(){localStorage.setItem(fn,"1")}function Xs(){return A!==null}function vt(){document.querySelectorAll(".tour-blur-frame, .tour-popover, .tour-pointer, .tour-highlight-border").forEach(e=>e.remove()),ce&&(ce(),ce=null),A=null}function Le(e){const t=document.querySelector(".tour-blur-frame.full"),n=[document.querySelector('.tour-blur-frame[data-side="top"]'),document.querySelector('.tour-blur-frame[data-side="left"]'),document.querySelector('.tour-blur-frame[data-side="right"]'),document.querySelector('.tour-blur-frame[data-side="bottom"]')];if(!e){n.forEach(b=>{b&&(b.style.opacity="0")});let g=t;!g?(g=document.createElement("div"),g.className="tour-blur-frame full",document.body.appendChild(g)):g.style.opacity="1";const f=document.querySelector(".tour-highlight-border");f&&(f.style.opacity="0");return}t&&(t.style.opacity="0");const a=e.getBoundingClientRect(),s=8,i=Math.max(0,a.left-s),l=Math.max(0,a.top-s),c=a.width+s*2,r=a.height+s*2,d=window.innerWidth,o=window.innerHeight,u={top:{top:0,left:0,width:d,height:l},left:{top:l,left:0,width:i,height:r},right:{top:l,left:i+c,width:d-(i+c),height:r},bottom:{top:l+r,left:0,width:d,height:o-(l+r)}};for(const[g,m]of Object.entries(u)){let f=n[Object.keys(u).indexOf(g)];f||(f=document.createElement("div"),f.className="tour-blur-frame",f.dataset.side=g,document.body.appendChild(f)),f.style.top=m.top+"px",f.style.left=m.left+"px",f.style.width=Math.max(0,m.width)+"px",f.style.height=Math.max(0,m.height)+"px",f.style.opacity=m.width<=0||m.height<=0?"0":"1"}let h=document.querySelector(".tour-highlight-border");h||(h=document.createElement("div"),h.className="tour-highlight-border",document.body.appendChild(h)),h.style.top=l+"px",h.style.left=i+"px",h.style.width=c+"px",h.style.height=r+"px",h.style.opacity="1",h.style.display=""}function yt(){let e=document.querySelector(".tour-pointer");return e||(e=document.createElement("div"),e.className="tour-pointer",e.innerHTML=`
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
      </svg>`,e.style.top=window.innerHeight/2+"px",e.style.left=window.innerWidth/2+"px",document.body.appendChild(e)),e}function Ys(e){const t=yt(),n=e.getBoundingClientRect(),a=n.left+n.width*.5,s=n.top+n.height*.5;t.style.top=s-6+"px",t.style.left=a-9+"px"}function Lt(){var e;(e=document.querySelector(".tour-pointer"))==null||e.remove()}async function Qs(e){const t=yt();t.classList.add("tour-pointer-clicking"),await new Promise(n=>setTimeout(n,280)),t.classList.remove("tour-pointer-clicking")}async function _e(e,t=1500){const n=Date.now();for(;Date.now()-n<t;){const a=document.querySelector(e);if(a)return a;await new Promise(s=>setTimeout(s,100))}return null}async function Q(){var c,r,d;if(!A)return;const e=A.overrideStep||me[A.idx];if(A.overrideStep=null,!e){st();return}if(ce&&(ce(),ce=null),e.type==="download-modal")return Lt(),Le(null),ei(e);let t=null;if(e.type==="highlight"){if(t=e.waitForTarget?await _e(e.target,e.timeoutMs??1500):document.querySelector(e.target),!t&&e.fallback){const o=e.fallback;if(o.onBefore)try{await o.onBefore()}catch(u){console.warn("tour fallback onBefore error:",u)}return A.overrideStep=o,Q()}if(!t&&e.optional)return A.idx++,Q();if(!t&&e.waitForTarget&&!e.fallback)return console.warn("[tour] target not found, skipping:",e.target),A.idx++,Q();if(t){try{t.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}catch{}await new Promise(o=>setTimeout(o,250)),Le(t),yt(),requestAnimationFrame(()=>Ys(t))}else Le(null)}else Lt(),Le(null);let n=document.querySelector(".tour-popover");n||(n=document.createElement("div"),n.className="tour-popover",n.style.visibility="hidden",document.body.appendChild(n)),n.classList.remove("tour-popover-large","tour-popover-hero"),e.hero&&n.classList.add("tour-popover-hero"),t?n.classList.remove("center"):n.classList.add("center");const a=A.idx===0,s=A.idx===me.length-1,i=!!e.waitForEvent,l=i?"⏳ Warte auf Upload …":s?"Fertig":"Weiter →";if(n.innerHTML=`
    <div class="tour-popover-header">
      <span class="tour-popover-step">${A.idx+1} / ${me.length}</span>
      <button class="tour-skip" type="button" aria-label="Tour beenden">Überspringen</button>
    </div>
    <div class="tour-popover-icon">${e.icon||""}</div>
    <h3>${e.title}</h3>
    <div class="tour-popover-body">${e.text}</div>
    <div class="tour-popover-actions">
      <button class="btn tour-prev" type="button" ${a?'disabled style="opacity:0.4;cursor:default"':""}>← Zurück</button>
      <button class="btn primary tour-next" type="button" ${i?'disabled style="opacity:0.5;cursor:default"':""}>${l}</button>
    </div>`,t)n.style.opacity="0",requestAnimationFrame(()=>{ti(n,t,e.placement||"right"),n.style.visibility="visible",n.style.opacity="1"});else{n.style.top=n.style.left=n.style.right=n.style.bottom="",n.style.opacity="0",n.style.visibility="visible";const o=document.querySelector(".tour-blur-frame.full");requestAnimationFrame(()=>{o&&(o.style.opacity="1"),n.style.opacity="1"})}if((c=n.querySelector(".tour-skip"))==null||c.addEventListener("click",()=>{st()}),a||(r=n.querySelector(".tour-prev"))==null||r.addEventListener("click",async()=>{A.idx=Math.max(0,A.idx-1),await Q()}),!i)(d=n.querySelector(".tour-next"))==null||d.addEventListener("click",async()=>{if(e.autoClick&&t){await Qs();try{const o=t.getAttribute("href");o&&o.startsWith("#/")?window.location.hash=o.slice(1):t.click()}catch(o){console.warn("tour autoClick error:",o)}if(e.onAfterClick)try{await e.onAfterClick()}catch(o){console.warn("tour onAfterClick error:",o)}else await new Promise(o=>setTimeout(o,350))}else if(e.onNext)try{await e.onNext()}catch(o){console.warn("tour onNext error:",o)}A.idx++,await Q()});else{const o=A.idx,u=o<Ft,h=async()=>{vt(),document.querySelectorAll(".upload-modal-overlay").forEach(g=>g.remove()),await new Promise(g=>setTimeout(g,300)),A={idx:u?Ft:o+1},await Q()};document.addEventListener(e.waitForEvent,h,{once:!0}),ce=()=>document.removeEventListener(e.waitForEvent,h)}}function ei(e){var a,s,i;let t=document.querySelector(".tour-popover");t||(t=document.createElement("div"),t.className="tour-popover",t.style.visibility="hidden",document.body.appendChild(t)),t.classList.add("tour-popover-large","center"),t.style.visibility="visible";const n=A.idx===0;A.idx,me.length-1,t.innerHTML=`
    <div class="tour-popover-header">
      <span class="tour-popover-step">${A.idx+1} / ${me.length}</span>
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
      <button class="btn tour-prev" type="button" ${n?'disabled style="opacity:0.4;cursor:default"':""}>← Zurück</button>
      <button class="btn primary tour-next" type="button">Verstanden, weiter →</button>
    </div>`,t.style.top=t.style.left=t.style.right=t.style.bottom="",t.style.opacity="1",(a=t.querySelector(".tour-skip"))==null||a.addEventListener("click",()=>{st()}),n||(s=t.querySelector(".tour-prev"))==null||s.addEventListener("click",async()=>{A.idx=Math.max(0,A.idx-1),await Q()}),(i=t.querySelector(".tour-next"))==null||i.addEventListener("click",async()=>{A.idx++,await Q()})}function ti(e,t,n){const a=t.getBoundingClientRect(),s=16,i=e.offsetWidth||360,l=e.offsetHeight||220,c=window.innerWidth,r=window.innerHeight,d=[n,"right","bottom","left","top"];let o=null;for(const g of d)if((()=>{switch(g){case"right":return a.right+s+i<=c;case"left":return a.left-s-i>=0;case"bottom":return a.bottom+s+l<=r;case"top":return a.top-s-l>=0}})()){o=g;break}o=o||n;let u,h;switch(o){case"right":u=a.top+a.height/2-l/2,h=a.right+s;break;case"left":u=a.top+a.height/2-l/2,h=a.left-i-s;break;case"bottom":u=a.bottom+s,h=a.left+a.width/2-i/2;break;case"top":default:u=a.top-l-s,h=a.left+a.width/2-i/2;break}u=Math.max(s,Math.min(r-l-s,u)),h=Math.max(s,Math.min(c-i-s,h)),e.style.position="fixed",e.style.top=u+"px",e.style.left=h+"px",e.style.right="auto",e.style.bottom="auto",e.style.transform=""}function st(){vt(),Js()}async function ni({root:e}){var i;const t=await ln(),n=await J();e.innerHTML=`
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
        ${t.length===0?'<div class="empty-state"><div class="empty-state-icon">📭</div><p>Noch keine Uploads</p></div>':bn(t)}
      </div>
    </div>

    <div class="card" style="margin-top: 24px; text-align: center; background: transparent; border-style: dashed;">
      <p style="color: var(--fg-muted); font-size: 13px; margin: 0 0 12px;">Brauchst du nochmal eine kurze Tour durch die App?</p>
      <button class="btn" id="btn-tour-restart" type="button">🎯 Tour erneut starten</button>
    </div>
  `;const a=e.querySelector("#upload-zone"),s=e.querySelector("#file-input");a.addEventListener("click",()=>s.click()),a.addEventListener("dragover",l=>{l.preventDefault(),a.classList.add("drag")}),a.addEventListener("dragleave",()=>a.classList.remove("drag")),a.addEventListener("drop",async l=>{var r;l.preventDefault(),a.classList.remove("drag");const c=(r=l.dataTransfer.files)==null?void 0:r[0];c&&await _t(c,e,n)}),s.addEventListener("change",async l=>{var r;const c=(r=l.target.files)==null?void 0:r[0];c&&await _t(c,e,n)}),e.querySelector("#btn-export").addEventListener("click",ii),e.querySelector("#btn-import").addEventListener("click",()=>e.querySelector("#import-input").click()),e.querySelector("#import-input").addEventListener("change",ri),e.querySelector("#btn-clear-parsed").addEventListener("click",si),e.querySelector("#btn-reset").addEventListener("click",li),(i=e.querySelector("#btn-tour-restart"))==null||i.addEventListener("click",()=>mn()),ai()}let Ct=!1;function ai(){Ct||(Ct=!0,document.body.addEventListener("click",e=>{if(e.target.closest(".lightbox-overlay, .upload-modal-overlay"))return;const t=e.target.closest("img.zoomable");t&&pn(t.src,t.alt)}))}function pn(e,t){const n=document.createElement("div");n.className="lightbox-overlay",n.innerHTML=`
    <button class="lightbox-close" aria-label="Schließen" title="Schließen (Esc)">×</button>
    <img src="${e}" alt="${t||""}" />
  `,document.body.appendChild(n);const a=()=>{n.remove(),document.removeEventListener("keydown",s)},s=i=>{i.key==="Escape"&&a()};n.addEventListener("click",i=>{(i.target===n||i.target.classList.contains("lightbox-close"))&&a()}),document.addEventListener("keydown",s)}async function si(){await U("PDF-abgeleitete Daten (Tage, Monate, Uploads) werden gelöscht. Profil und Mail-Vorlagen bleiben erhalten.",{title:"PDF-Daten löschen?",confirmLabel:"Löschen",variant:"danger"})&&(await on(),F("Daten gelöscht. Profil bleibt."),setTimeout(()=>location.reload(),600))}function bn(e){return`
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
            <td>${x(oi(t.hochladeDatum))}</td>
            <td>${x(t.dateiname||"—")}</td>
            <td>${t.zeitraumVon?x(T(new Date(t.zeitraumVon))):"—"} – ${t.zeitraumBis?x(T(new Date(t.zeitraumBis))):"—"}</td>
            <td>${t.stichtagAuswertung?x(T(new Date(t.stichtagAuswertung))):"—"}</td>
            <td class="num">${t.tageCount??"—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}async function _t(e,t,n){var i,l,c,r;const a=t.querySelector("#upload-status"),s=t.querySelector("#upload-zone");if(e.type!=="application/pdf"&&!/\.pdf$/i.test(e.name)){we({type:"error",title:"Falscher Dateityp",desc:`<strong>${x(e.name)}</strong> ist keine PDF-Datei.`,hint:"Lade eine PDF-Datei hoch — den Zeitnachweis aus dem ESS über den <strong>Speichern-Button</strong> (Disketten-Symbol oben rechts im PDF-Viewer)."});return}if(e.size>50*1024*1024){we({type:"error",title:"Datei zu groß",desc:`<strong>${x(e.name)}</strong> ist ${(e.size/1024/1024).toFixed(1)} MB groß.`,hint:"ESS-Zeitnachweise sind normalerweise unter 1 MB. Bitte überprüfe die Datei."});return}s.style.pointerEvents="none",s.style.opacity="0.6",a.innerHTML=`
    <div class="alert severity-info">
      <div class="loader-ring" style="width: 24px; height: 24px; border-width: 2px;"></div>
      <div class="alert-body">
        <div class="alert-title">PDF wird verarbeitet…</div>
        <p style="margin: 4px 0; font-size: 13px;"><strong>${x(e.name)}</strong> — das kann bei großen PDFs einige Sekunden dauern.</p>
      </div>
    </div>`;try{const d=await e.arrayBuffer(),o=await _s(d);if(o.tage.length===0&&!o.meta.zeitraumVon){s.style.pointerEvents="",s.style.opacity="",a.innerHTML="",we({type:"error",title:"Diese PDF ist nicht kompatibel",desc:'Im PDF wurden keine Texte gefunden. Das passiert, wenn das PDF über „Drucken → Als PDF speichern" (z.B. „Microsoft Print to PDF") erzeugt wurde — dabei werden Texte als Vektorpfade gerendert und können nicht ausgelesen werden.',hint:'Lade dein PDF direkt aus dem ESS über den <strong>Speichern-Button</strong> herunter (Disketten-Symbol oben rechts im PDF-Viewer) — nicht über „Drucken".',screenshot:!0,producer:(i=o.meta)==null?void 0:i.producer}),Ie("PDF enthält keinen extrahierbaren Text.");return}const u=await Ee(),h=u==null?void 0:u.personalnummer,g=o.meta.personalnummer;if(h&&g&&h!==g){const y=(u==null?void 0:u.name)||`Personalnr. ${h}`,B=o.meta.name||`Personalnr. ${g}`;if(!await U(`Das hochgeladene PDF gehört zu einem anderen Azubi als die bisher gespeicherten Daten:

Bisher: ${y}
Jetzt:  ${B}

Wenn du fortfährst, werden alle alten Tagesdaten gelöscht und durch die neuen ersetzt. (Profil-Einstellungen wie Theme und Mail-Vorlagen bleiben erhalten.)`,{title:"Anderer Azubi erkannt",confirmLabel:"Daten ersetzen",variant:"danger"})){s.style.pointerEvents="",s.style.opacity="",a.innerHTML=`
          <div class="alert severity-info">
            <div class="alert-body">
              <div class="alert-title">Upload abgebrochen</div>
              <p style="margin: 4px 0; font-size: 13px;">Es wurden keine Daten verändert. Lade das richtige PDF (für ${x(y)}) erneut hoch.</p>
            </div>
          </div>`;return}await on();const C=await J();await Ke({...C,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1}})}const m=await ls(o.tage,o.monate,o.meta.stichtagAuswertung);(m.skippedTage>0||m.skippedMonate>0)&&console.info(`[upload] ${m.skippedTage} Tage und ${m.skippedMonate} Monate uebersprungen — bestehende Daten haben juengeren Stichtag.`),await os({dateiname:e.name,personalnummer:o.meta.personalnummer??null,name:o.meta.name??null,zeitraumVon:((l=o.meta.zeitraumVon)==null?void 0:l.toISOString())??null,zeitraumBis:((c=o.meta.zeitraumBis)==null?void 0:c.toISOString())??null,stichtagAuswertung:((r=o.meta.stichtagAuswertung)==null?void 0:r.toISOString())??null,tageCount:o.tage.length,monateCount:o.monate.length});const f=await te(),b=dn(f),v={...rn(),...n};(b.wochentageWoechentlich.length>0||b.wochentage14Taegig.length>0)&&(v.berufsschulMuster=b),await Ke(v),a.innerHTML="",Xs()||we({type:"success",title:"PDF erfolgreich eingelesen",desc:o.meta.zeitraumVon?`Zeitraum: ${T(o.meta.zeitraumVon)} – ${T(o.meta.zeitraumBis)}`:"Daten wurden erfolgreich verarbeitet.",stats:[{num:o.tage.length,label:"Tage"},{num:o.monate.length,label:"Monatsübersichten"}]}),F(`PDF verarbeitet: ${o.tage.length} Tage.`),document.dispatchEvent(new CustomEvent("better-ess:pdf-uploaded",{detail:{tageCount:o.tage.length,monateCount:o.monate.length}}));const w=await ln();t.querySelector("#uploads-list").innerHTML=bn(w)}catch(d){console.error(d),a.innerHTML="",we({type:"error",title:"Fehler beim Parsen",desc:x(d.message||String(d)),hint:'Prüfe, ob es sich um einen ESS-Zeitnachweis im richtigen Format handelt. Lade dein PDF über den Speichern-Button herunter, nicht über „Drucken".',screenshot:!0}),Ie("PDF konnte nicht gelesen werden.")}finally{s.style.pointerEvents="",s.style.opacity=""}}async function ii(){try{const e=await us(),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),a=document.createElement("a"),s=new Date().toISOString().slice(0,10);a.href=n,a.download=`zeitnachweis-backup-${s}.json`,a.click(),URL.revokeObjectURL(n),F("Backup heruntergeladen.")}catch(e){Ie(`Export fehlgeschlagen: ${e.message}`)}}async function ri(e){var n;const t=(n=e.target.files)==null?void 0:n[0];if(t)try{const a=await t.text(),s=JSON.parse(a);if(!await U("Existierende Daten werden vom Backup überschrieben.",{title:"Backup importieren?",confirmLabel:"Importieren",variant:"danger"}))return;await gs(s),F("Backup erfolgreich importiert. Seite wird neu geladen…"),setTimeout(()=>location.reload(),800)}catch(a){Ie(`Import fehlgeschlagen: ${a.message}`)}}async function li(){await U("Alle Daten (Tage, Monate, Profil, Vorlagen, Mail-Vorlagen, Fahrgeld-Vorlage) werden endgültig gelöscht. Das lässt sich nicht rückgängig machen.",{title:"ALLE Daten löschen?",confirmLabel:"Weiter zur Sicherheitsfrage",variant:"danger"})&&await U("Letzte Warnung — wirklich alle Daten löschen?",{title:"Sicher?",confirmLabel:"Endgültig löschen",variant:"danger"})&&(await ds(),F("Alle Daten gelöscht."),setTimeout(()=>location.reload(),600))}function oi(e){if(!e)return"—";const t=new Date(e);return t.toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"})+" "+t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}function we(e){const{type:t,title:n,desc:a,hint:s,screenshot:i,stats:l,producer:c}=e,r=document.createElement("div");r.className="upload-modal-overlay";const d=`
    <svg class="upload-check-svg" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
      <circle class="upload-check-bg" cx="26" cy="26" r="24"/>
      <circle class="upload-check-circle" cx="26" cy="26" r="24"/>
      <path class="upload-check-mark" d="M14 27 L22 35 L38 18"/>
    </svg>`,o=`
    <svg class="upload-cross-svg" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
      <circle class="upload-cross-bg" cx="26" cy="26" r="24"/>
      <circle class="upload-cross-circle" cx="26" cy="26" r="24"/>
      <line class="upload-cross-line" x1="17" y1="17" x2="35" y2="35"/>
      <line class="upload-cross-line upload-cross-line-2" x1="35" y1="17" x2="17" y2="35"/>
    </svg>`,u=l!=null&&l.length?`
    <div class="upload-modal-stats">
      ${l.map(v=>`
        <div class="upload-modal-stat">
          <div class="upload-modal-stat-num">${x(String(v.num))}</div>
          <div class="upload-modal-stat-label">${x(v.label)}</div>
        </div>
      `).join("")}
    </div>`:"",h=i?`
    <img class="upload-modal-hint-img zoomable" src="/better-ess/tutorial/speichern.png"
         alt="Speichern-Button im PDF-Viewer"
         title="Klick für Vollbild" />`:"",g=c?`<p style="font-size: 12px; color: var(--fg-subtle); margin-top: 12px;">Erkannt: Producer „${x(c)}"</p>`:"",m=t==="success"?`
      <a href="#/" class="btn primary">Zum Dashboard</a>
      <a href="#/kalender" class="btn">Kalender öffnen</a>
      <button class="btn upload-modal-close-btn">Schließen</button>`:`
      <button class="btn primary upload-modal-close-btn">Verstanden</button>`;r.innerHTML=`
    <div class="upload-modal" role="dialog" aria-modal="true">
      <div class="upload-modal-icon-wrap">
        ${t==="success"?d:o}
      </div>
      <h2 class="upload-modal-title">${x(n)}</h2>
      <p class="upload-modal-desc">${a}</p>
      ${u}
      ${s?`<p class="upload-modal-desc" style="background: var(--accent-bg); padding: 12px; border-radius: 8px; border-left: 3px solid var(--accent);">${s}</p>`:""}
      ${h}
      ${g}
      <div class="upload-modal-actions">${m}</div>
    </div>`,document.body.appendChild(r);const f=()=>{r.style.animation="upload-modal-fade 150ms ease-out reverse",setTimeout(()=>r.remove(),150),document.removeEventListener("keydown",b)},b=v=>{v.key==="Escape"&&f()};document.addEventListener("keydown",b),r.addEventListener("click",v=>{if(v.target===r){f();return}if(v.target.closest(".upload-modal-close-btn")){f();return}if(v.target.closest(".upload-modal-actions a, .upload-modal-actions button")){f();return}const w=v.target.closest("img.zoomable");w&&pn(w.src,w.alt)})}const Bt={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag"};async function ci({root:e}){var s,i,l,c,r;const t=await J(),n=t.berufsschulMuster??{},a=(((s=n.wochentageWoechentlich)==null?void 0:s.length)??0)>0||(((i=n.wochentage14Taegig)==null?void 0:i.length)??0)>0;e.innerHTML=`
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
          <input type="email" name="zeitwirtschaftEmail" value="${Wt(t.zeitwirtschaftEmail)}" />
        </div>
        <div class="form-group">
          <label>Anrede in Mails</label>
          <input type="text" name="zeitwirtschaftAnrede" value="${Wt(t.zeitwirtschaftAnrede)}" placeholder="Frau Kanarya" />
        </div>
      </div>

      <div class="card" style="grid-column: 1 / -1;">
        <h2>Berufsschul-Rhythmus <span style="font-size: 11px; font-weight: 500; color: var(--fg-subtle); text-transform: uppercase; letter-spacing: 0.05em; margin-left: 8px;">Automatisch erkannt</span></h2>
        ${a?`
          <div class="tag-detail">
            <div class="tag-detail-label">Wöchentlich</div>
            <div class="tag-detail-value"><strong>${((l=n.wochentageWoechentlich)==null?void 0:l.map(d=>Bt[d]).join(", "))||"—"}</strong></div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Alle 2 Wochen</div>
            <div class="tag-detail-value"><strong>${((c=n.wochentage14Taegig)==null?void 0:c.map(d=>Bt[d]).join(", "))||"—"}</strong>${n.referenzDatum14Taegig?` <span class="hint">(Anker: ${T(new Date(n.referenzDatum14Taegig))})</span>`:""}</div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Stunden pro Schultag</div>
            <div class="tag-detail-value">
              <strong>${n.stundenProTag!=null?n.stundenProTag.toFixed(2).replace(".",",")+"h":"—"}</strong>
              ${n.halbtags?' <span class="hint" style="color: var(--accent);">(Halbtags-Schule erkannt)</span>':""}
            </div>
          </div>
          <p class="hint" style="margin-top: 16px;">
            Das Muster wird bei jedem PDF-Upload neu aus den Daten abgeleitet. ${n.halbtags?'Da deine Schultage typischerweise weniger als 5h dauern, geht die App von Halbtags-Schule aus und meldet KEINE „BS-Stunden falsch"-Warnung, wenn dein Schultag nur '+(((r=n.stundenProTag)==null?void 0:r.toFixed(2).replace(".",","))??"4,00")+"h hat.":"Je länger der erfasste Zeitraum, desto präziser."}
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
  `,e.querySelector("#profil-form").addEventListener("submit",async d=>{var h,g;d.preventDefault();const o=new FormData(d.target),u={...t,ueber18:o.get("ueber18")==="on",zeitwirtschaftEmail:((h=o.get("zeitwirtschaftEmail"))==null?void 0:h.trim())||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:((g=o.get("zeitwirtschaftAnrede"))==null?void 0:g.trim())||"Frau Kanarya"};await Ke(u),F("Profil gespeichert.")})}function Wt(e){return String(e??"").replace(/"/g,"&quot;")}async function di({params:e,root:t}){var d,o,u,h;const n=e.datum,a=await p.tage.get(n),s=await J();if(!a){t.innerHTML=`<h1 class="view-title">Tag nicht gefunden</h1><p>Für ${n} liegen keine Daten vor.</p><a href="#/" class="btn">← Dashboard</a>`;return}const i=L(n),l=a.tagestyp==="Stempelzeit"?Jt(a,s):null,c=qe(i,s.berufsschulMuster),r=Ut(a.zeitSpannen);t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/kalender/${n.slice(0,7)}" class="btn sm">← Zum Monat</a>
    </div>
    <h1 class="view-title">${dt(i)}</h1>
    <p class="view-subtitle">${a.tagestyp??"Kein Typ"} · KW ${(d=a.wocheKey)==null?void 0:d.split("-")[1]}</p>

    ${r?`
      <div class="card kommen-gehen-hero" style="margin-bottom: 24px;">
        <div class="hint" style="text-transform: uppercase; letter-spacing: 0.05em; font-size: 11px; margin-bottom: 10px;">Tages-Rahmen</div>
        ${cn(r,{size:32})}
      </div>
    `:""}

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${a.ist!=null?a.ist.toFixed(2).replace(".",",")+"h":"—"}</div>
        <div class="hint">= ${a.ist!=null?Oe(a.ist):"—"}</div>
      </div>
      <div class="card">
        <h3>Soll-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${a.soll!=null?a.soll.toFixed(2).replace(".",",")+"h":"—"}</div>
      </div>
      <div class="card">
        <h3>Differenz</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${a.diff>.05?"var(--success)":a.diff<-.05?"var(--danger)":"var(--fg)"};">${a.diff!=null?se(a.diff,{signed:!0}):"—"}</div>
      </div>
    </div>

    <div class="grid cols-2" style="gap: 24px;">
      <div class="card">
        <h2>Zeitstempel</h2>
        ${(o=a.zeitSpannen)!=null&&o.length?a.zeitSpannen.map(g=>`
              <div class="tag-detail">
                <div class="tag-detail-label">${ke(g.aktivitaet??"Stempelzeit")}</div>
                <div class="tag-detail-value tabular">${g.von??"—"} – ${g.bis??"—"}</div>
              </div>
            `).join(""):'<p class="hint">Keine Stempelzeiten für diesen Tag.</p>'}
      </div>

      <div class="card">
        <h2>Klassifikation</h2>
        <div class="tag-detail">
          <div class="tag-detail-label">Tagestyp</div>
          <div class="tag-detail-value">${a.tagestyp?`<span class="pill ${ui(a.tagestyp)}">${ke(a.tagestyp)}</span>`:"—"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Laut Profil</div>
          <div class="tag-detail-value">${c?"🎓 Berufsschultag erwartet":"Regulärer Werktag"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">TAZP-Code</div>
          <div class="tag-detail-value"><code>${ke(a.tazp??"—")}</code></div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Monat</div>
          <div class="tag-detail-value">${ke(a.monatKey)}</div>
        </div>
      </div>

      ${l&&!l.keinAnspruch?l.altReglement?`
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
                <div class="tag-detail-label">Abgezogene Pause (laut PDF)</div>
                <div class="tag-detail-value tabular">${Math.round((l.abgezogenePause??0)*60)} min</div>
              </div>
            </div>
          </div>
          <p class="hint" style="margin-top: 12px;">Vor dem 01.04.2026 galt bei Putzmeister die alte Regelung: nicht ausstempeln zur Pause nötig — wenn man auf dem Gelände blieb, wurde automatisch 1h Pause abgezogen. Die App nimmt deshalb die Pause für diese Tage einfach aus dem PDF und prüft sie nicht gegen die gesetzliche Pflicht.</p>
        </div>
      `:`
        <div class="card" style="grid-column: 1 / -1;">
          <h2>Pausen-Analyse</h2>
          <div class="grid cols-2">
            <div>
              <div class="tag-detail">
                <div class="tag-detail-label">Arbeitszeit (netto)</div>
                <div class="tag-detail-value tabular">${(h=l.arbeitszeitOhnePause)==null?void 0:h.toFixed(2).replace(".",",")}h</div>
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
              <div class="alert-body">${ke(l.warnung)}</div>
            </div>
          `:""}
        </div>
      `:""}
    </div>
  `}function ui(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function ke(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const gi=[{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:180,label:"6 Monate"},{key:365,label:"1 Jahr"},{key:730,label:"2 Jahre"},{key:"alles",label:"Alles"}];function hi(e){return gi.filter(t=>t.key==="alles"||t.key<e)}async function fi({root:e}){var l;const[t,n]=await Promise.all([te(),Re()]);if(!t.length){e.innerHTML='<h1 class="view-title">Analytics</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a=hi(t.length);let s=a.some(c=>c.key===30)?30:"alles";e.innerHTML=`
    <h1 class="view-title">Analytics</h1>
    <p class="view-subtitle">${t.length} Tage über ${n.length} Monatsübersichten visualisiert.</p>

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
          ${a.map(c=>`<button type="button" data-key="${c.key}" class="${s===c.key?"active":""}">${c.label}</button>`).join("")}
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
  `;const i=()=>s==="alles"?t:t.slice(-s);requestAnimationFrame(()=>{Va(e.querySelector("#c-saldo"),n),ja(e.querySelector("#c-wochen"),t),xt(e.querySelector("#c-startend"),i()),Na(e.querySelector("#c-wochentag"),t),Ha(e.querySelector("#c-pausen"),t),Ra(e.querySelector("#c-donut"),t),Ia(e.querySelector("#c-alle-tage"),t.slice(-30))}),(l=e.querySelector("#startend-zeitraum"))==null||l.addEventListener("click",c=>{const r=c.target.closest("button[data-key]");if(!r||r.disabled)return;const d=r.getAttribute("data-key"),o=d==="alles"?"alles":parseInt(d,10);o!==s&&(s=o,e.querySelectorAll("#startend-zeitraum button").forEach(u=>u.classList.toggle("active",u===r)),xt(e.querySelector("#c-startend"),i()))})}function mi(e){return String(e??"").replace(/"/g,"&quot;")}async function et({params:e,root:t}){const[n,a,s,i,l]=await Promise.all([te(),Re(),J(),Ee(),je()]),c=Object.fromEntries(l.map(k=>[k.key,k]));if(!n.length){t.innerHTML=`
      <h1 class="view-title">Kalender</h1>
      <p class="view-subtitle">Noch keine Daten geladen.</p>
      <a href="#/daten" class="btn primary">Zum Upload</a>`;return}const r=[...new Set(n.map(k=>k.monatKey))].sort(),d=e.yyyymm,o=r.includes(d)?d:r[r.length-1],u=n.filter(k=>k.monatKey===o),h=[...new Set(u.map(k=>k.wocheKey))].sort(),g=e.yyyykw,m=h.includes(g)?g:null,f=r.indexOf(o),b=f>0?r[f-1]:null,v=f<r.length-1?r[f+1]:null,w=it(o),y=a.find(k=>k.monatKey===o),B=Xt(n,a),S=B.filter(k=>k.monatKey===o),C=i!=null&&i.stichtagAuswertung?new Date(i.stichtagAuswertung):new Date,I=Ze(n,s,C),M=I.filter(k=>k.datum.startsWith(o)),K=vi({aktiverMonatKey:o,monatLabel:w,prevMonatKey:b,nextMonatKey:v,tageAnzahl:u.length,warnungenAnzahl:M.length});m?await bi({root:t,switcherHtml:K,aktiverMonatKey:o,aktiveWocheKey:m,vollKurve:B,alleWarnungen:I,profil:s,vorlagenOverrides:c}):await pi({root:t,switcherHtml:K,monatLabel:w,tageMonat:u,monatsKurve:S,monatUebersicht:y,monatsWarnungen:M,aktiverMonatKey:o,profil:s,vorlagenOverrides:c})}async function pi({root:e,switcherHtml:t,monatLabel:n,tageMonat:a,monatsKurve:s,monatUebersicht:i,monatsWarnungen:l,aktiverMonatKey:c,profil:r,vorlagenOverrides:d}){e.innerHTML=`
    ${t}

    ${i?yi(i):""}

    <div class="card" style="margin-bottom: 24px;">
      <h2>Saldo-Verlauf</h2>
      <div class="chart-wrap tall"><canvas id="chart-kalender-monat"></canvas></div>
    </div>

    ${l.length?`
      <div class="card" style="margin-bottom: 24px;">
        <h2>Auffälligkeiten</h2>
        ${l.map(o=>vn(o,r,d)).join("")}
      </div>
    `:""}

    <div class="card" style="margin-bottom: 24px;">
      <h2 style="margin-bottom: 16px;">Wochen</h2>
      ${wi(s,c)}
    </div>

    <div class="card">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Tage</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">H/M zum Kopieren</span>
      </div>
      <div id="tage-liste-kalender">${Ue(s.slice().reverse(),{warnungen:l})}</div>
    </div>
  `,s.length&&(requestAnimationFrame(()=>{const o=e.querySelector("#chart-kalender-monat");o&&gt(o,s)}),pt(e.querySelector("#tage-liste-kalender")))}async function bi({root:e,switcherHtml:t,aktiverMonatKey:n,aktiveWocheKey:a,vollKurve:s,alleWarnungen:i,profil:l,vorlagenOverrides:c}){var v;const r=s.filter(w=>w.wocheKey===a),d=r.reduce((w,y)=>w+Ne(y),0),o=r.reduce((w,y)=>w+ct(y),0),u=+(d-o).toFixed(2),h=w=>w>.05?"var(--success)":w<-.05?"var(--danger)":"var(--fg)",g=i.filter(w=>r.some(y=>y.datum===w.datum)),m=(v=r[0])==null?void 0:v.datum,f=m?Ae(L(m)):"",b=a.split("-")[1]||"?";e.innerHTML=`
    ${t}

    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 12px;">
      <a href="#/kalender/${n}" class="btn sm">← Zur Monatsansicht</a>
    </div>

    <h2 style="margin: 0 0 4px;">KW ${x(b)}</h2>
    <p class="view-subtitle">${x(f)} · ${r.length} Tage · ${g.length} Auffälligkeiten</p>

    ${r.length===0?`
      <p class="hint" style="text-align: center; padding: 32px;">Keine Tage für diese Woche im PDF.</p>
    `:`
      <div class="grid cols-3" style="margin-bottom: 24px;">
        <div class="card">
          <h3>Ist-Stunden</h3>
          <div class="tabular" style="font-size: 28px; font-weight: 650;">${d.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="card">
          <h3>Soll-Stunden</h3>
          <div class="tabular" style="font-size: 28px; font-weight: 650;">${o.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="card">
          <h3>Differenz</h3>
          <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${h(u)};">${se(u,{signed:!0})}</div>
        </div>
      </div>

      <div class="card" style="margin-bottom: 24px;">
        <h2>Saldo-Verlauf in dieser Woche</h2>
        <div class="chart-wrap"><canvas id="chart-kalender-woche"></canvas></div>
      </div>

      ${g.length?`
        <div class="card" style="margin-bottom: 24px;">
          <h2>Auffälligkeiten in KW ${x(b)}</h2>
          ${g.map(w=>vn(w,l,c)).join("")}
        </div>
      `:""}

      <div class="card">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Tage</h2>
          <span style="color: var(--fg-muted); font-size: 13px;">H/M zum Kopieren</span>
        </div>
        <div id="tage-liste-kalender">${Ue(r,{warnungen:g})}</div>
      </div>
    `}
  `,r.length&&(requestAnimationFrame(()=>{const w=e.querySelector("#chart-kalender-woche");w&&gt(w,r)}),pt(e.querySelector("#tage-liste-kalender")))}function vi({aktiverMonatKey:e,monatLabel:t,prevMonatKey:n,nextMonatKey:a,tageAnzahl:s,warnungenAnzahl:i}){const l=n?it(n):"",c=a?it(a):"";return`
    <div class="card kalender-monat-bar" style="margin-bottom: 24px;">
      <div class="kalender-monat-nav">
        <a class="kalender-monat-btn ${n?"":"is-disabled"}"
           ${n?`href="#/kalender/${n}"`:'aria-disabled="true"'}
           title="${n?"Zu "+x(l):"Kein vorheriger Monat"}"
           aria-label="Vorheriger Monat">
          <span class="kalender-monat-btn-arrow" aria-hidden="true">‹</span>
          <span class="kalender-monat-btn-text">${n?x(l):""}</span>
        </a>
        <div class="kalender-monat-titel">
          <h2 style="margin: 0;">${x(t)}</h2>
          <div class="hint">${s} Tage · ${i} Auffälligkeiten</div>
        </div>
        <a class="kalender-monat-btn next ${a?"":"is-disabled"}"
           ${a?`href="#/kalender/${a}"`:'aria-disabled="true"'}
           title="${a?"Zu "+x(c):"Kein nächster Monat"}"
           aria-label="Nächster Monat">
          <span class="kalender-monat-btn-text">${a?x(c):""}</span>
          <span class="kalender-monat-btn-arrow" aria-hidden="true">›</span>
        </a>
      </div>
    </div>`}function yi(e){var i,l,c;const t=((i=e.glz)==null?void 0:i.saldoGesamt)??0,n=((l=e.glz)==null?void 0:l.saldoVorperiode)??0,a=((c=e.glz)==null?void 0:c.saldoAktuellePeriode)??0,s=r=>r>.05?"var(--success)":r<-.05?"var(--danger)":"var(--fg)";return`
    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>GLZ-Saldo gesamt</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${s(t)};">${se(t,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Vorperiode</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${s(n)};">${se(n,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Akt. Periode</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${s(a)};">${se(a,{signed:!0})}</div>
      </div>
    </div>`}function wi(e,t){var s;const n={};for(const i of e)n[s=i.wocheKey]??(n[s]={key:i.wocheKey,tage:[],ist:0,soll:0}),n[i.wocheKey].tage.push(i),n[i.wocheKey].ist+=Ne(i),n[i.wocheKey].soll+=ct(i);const a=Object.keys(n).sort();return a.length?a.map(i=>{var h;const l=n[i],c=+(l.ist-l.soll).toFixed(2),r=c>.05?"var(--success)":c<-.05?"var(--danger)":"var(--fg-muted)",d=(h=l.tage.slice().sort((g,m)=>g.datum.localeCompare(m.datum))[0])==null?void 0:h.datum,o=d?Ae(L(d)):"",u=i.split("-")[1]||"?";return`
      <a href="#/kalender/${t}/${i}" class="list-item" style="text-decoration: none; color: inherit;">
        <div class="tabular" style="font-size: 16px; font-weight: 600; color: var(--fg-muted); min-width: 80px;">KW ${x(u)}</div>
        <div>
          <div class="list-item-title tabular">${x(o)}</div>
          <div class="list-item-sub">${l.tage.length} Tage · Ist ${l.ist.toFixed(2).replace(".",",")}h · Soll ${l.soll.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="tabular" style="font-weight: 600; font-size: 16px; color: ${r};">${se(c,{signed:!0})}</div>
        <div style="color: var(--fg-subtle);">→</div>
      </a>`}).join(""):'<p style="color: var(--fg-muted);">Keine Wochen.</p>'}function vn(e,t,n){const a=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";let s=null;if(e.mailVorlageKey&&t){const i=Pe(e.mailVorlageKey,n==null?void 0:n[e.mailVorlageKey]);if(i){const l=ft(t,e);s=mt(t,i,l)}}return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${a}</div>
      <div class="alert-body">
        <div class="alert-title">${x(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${x(e.beschreibung)}</p>
        <div class="alert-actions">
          ${s?`<a href="${mi(s)}" class="btn-mail-medium"><img src="outlook-logo.png" alt="" class="outlook-logo-medium" />E-Mail</a>`:""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
        </div>
      </div>
    </div>`}function it(e){const[t,n]=e.split("-"),a=new Date(parseInt(t,10),parseInt(n,10)-1,1);return E(a,"MMMM yyyy",{locale:G})}const ki={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};async function tt({params:e,root:t}){const[n,a,s]=await Promise.all([te(),J(),Ee()]),i=xi(e);if(!n.length){t.innerHTML=`
      <h1 class="view-title">Kalender · ${x(i.label)}</h1>
      <p class="view-subtitle">Noch keine Daten geladen.</p>
      <a href="#/daten" class="btn primary">Zum Upload</a>`;return}const l=n.filter(i.predicate).sort((h,g)=>h.datum.localeCompare(g.datum)),c=s!=null&&s.stichtagAuswertung?new Date(s.stichtagAuswertung):new Date,d=Ze(n,a,c).filter(h=>l.some(g=>g.datum===h.datum)),o=l.reduce((h,g)=>h+(g.ist??0),0),u=o>0?` · ${o.toFixed(2).replace(".",",")}h kumuliert`:"";t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/kalender" class="btn sm">← Kalender</a>
    </div>
    <h1 class="view-title">${x(i.titel)}</h1>
    <p class="view-subtitle">${l.length} Tag${l.length===1?"":"e"} insgesamt${u}</p>

    ${l.length===0?`
      <div class="card"><p class="hint">Keine Tage passen zu diesem Filter.</p></div>
    `:`
      <div class="card">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Tage</h2>
          <span style="color: var(--fg-muted); font-size: 13px;">H/M zum Kopieren</span>
        </div>
        <div id="tagestyp-tage-liste">${Ue(l,{warnungen:d})}</div>
      </div>
    `}
  `,pt(t.querySelector("#tagestyp-tage-liste"))}function xi(e){if(e.typ!=null){const t=decodeURIComponent(e.typ);return{label:t,titel:`${t}-Tage`,predicate:n=>n.tagestyp===t}}if(e.wd!=null){const t=decodeURIComponent(e.wd).toUpperCase(),n=ki[t]||t;return{label:n,titel:`Tage am ${n}`,predicate:a=>a.wochentag===t}}if(e.bucket!=null){const t=parseInt(decodeURIComponent(e.bucket),10),n=t+14;return{label:`${t}–${n} min Pause`,titel:`Tage mit Pause ${t}–${n} min`,predicate:a=>{if(a.tagestyp!=="Stempelzeit"||!a.zeitSpannen||a.zeitSpannen.length<2)return!1;const s=Math.round(ot(a.zeitSpannen)*60);return s>=t&&s<=n}}}return{label:"Filter",titel:"Tage (kein Filter)",predicate:()=>!0}}const yn="Fahrgelderstattung",$i="C4",wn="C5",kn="F4",xn="F5",de=10,he=19;function Ot(e,t){return e.filter(n=>n.monatKey===t).filter(n=>n.tagestyp==="Berufsschule").filter(n=>(n.ist??0)>0).sort((n,a)=>n.datum.localeCompare(a.datum))}async function Si(e){const t=(await $e(async()=>{const{default:f}=await import("./exceljs.min-BhfpbegZ.js").then(b=>b.e);return{default:f}},__vite__mapDeps([0,1]))).default,n=new t.Workbook;try{await n.xlsx.load(e)}catch{return{ok:!1,fehler:"Die Excel-Datei ist beschädigt oder kein gültiges .xlsx-Format. Bitte die Datei neu speichern und nochmal versuchen."}}const a=n.getWorksheet(yn)??n.worksheets[0];if(!a)return{ok:!1,fehler:"Excel hat keine Arbeitsblätter — die Datei scheint leer zu sein."};const s=f=>{const b=a.getCell(f).value;return b==null?"":typeof b=="object"&&b.text?String(b.text):typeof b=="object"&&b.richText?b.richText.map(v=>v.text).join(""):String(b)},i=s(wn).trim(),l=s(kn).trim(),c=s(xn).trim(),r=(l.match(/\d+/)||[""])[0],d=(c.match(/\d+/)||[""])[0],o=s(`C${de}`).trim(),u=s(`E${de}`).trim(),h=a.getCell(`G${de}`).value,g=typeof h=="number"?h:parseFloat(String(h).replace(",","."))||0;let m=null;try{const f=new Set(a.getImages().map(v=>parseInt(v.imageId,10))),b=(n.media||[]).map((v,w)=>({media:v,index:w})).filter(({media:v,index:w})=>(v==null?void 0:v.type)==="image"&&!f.has(w)&&v.buffer);if(b.length>0){b.sort((B,S)=>(S.media.buffer.length||0)-(B.media.buffer.length||0));const v=b[0].media,w=v.buffer,y=w instanceof ArrayBuffer?w:w.buffer?w.buffer.slice(w.byteOffset||0,(w.byteOffset||0)+w.byteLength):null;if(y){const B=(v.extension||"").toLowerCase();m={bytes:y,extension:B==="jpg"?"jpeg":B||"png",quelle:"auto-aus-vorlage"}}}}catch(f){console.warn("[fahrtgeld] Unterschrift-Auto-Extraktion fehlgeschlagen:",f)}return!i&&!r&&!d?{ok:!1,fehler:"Diese Excel scheint nicht im Format der Putzmeister-Fahrgelderstattung zu sein — Name/Personalnummer/Kostenstelle wurden nicht erkannt. Bitte eine Original-Vorlage hochladen."}:i?{ok:!0,konstanten:{name:i,persNr:r,kst:d,vonHaltestelle:o,nachHaltestelle:u,betragProTag:g},unterschriftAuto:m}:{ok:!1,fehler:'Im Feld „Name, Vorname" der Vorlage (Zelle C5) ist nichts eingetragen — bitte die Vorlage prüfen.'}}async function Mi({templateBytes:e,monatKey:t,bsTage:n,konstanten:a,unterschriftBytes:s,unterschriftExtension:i}){const l=(await $e(async()=>{const{default:M}=await import("./exceljs.min-BhfpbegZ.js").then(K=>K.e);return{default:M}},__vite__mapDeps([0,1]))).default,c=new l.Workbook;try{await c.xlsx.load(e)}catch{throw new Error("Die hinterlegte Excel-Vorlage ist beschädigt — bitte unter Fahrgelderstattung neu hochladen.")}const r=c.getWorksheet(yn)??c.worksheets[0];if(!r)throw new Error("Die Excel-Vorlage hat kein passendes Arbeitsblatt — bitte eine Original-Fahrgelderstattung-Vorlage hochladen.");const[d,o]=t.split("-").map(M=>parseInt(M,10)),u=new Date(d,o-1,1,12,0,0),h=E(u,"MMMM yy",{locale:G}),g=r.getCell($i);g.value=h,g.numFmt="@",r.getCell(wn).value=a.name,r.getCell(kn).value=`Pers.-Nr.: ${a.persNr}`,r.getCell(xn).value=`KST: ${a.kst}`;for(let M=de;M<=he;M++)r.getCell(`A${M}`).value=null,r.getCell(`C${M}`).value=null,r.getCell(`E${M}`).value=null,r.getCell(`G${M}`).value=null;const m=he-de+1,f=n.slice(0,m);for(let M=0;M<f.length;M++){const K=f[M],k=de+M;r.getCell(`A${k}`).value=L(K.datum),r.getCell(`C${k}`).value=a.vonHaltestelle,r.getCell(`E${k}`).value=a.nachHaltestelle,r.getCell(`G${k}`).value=a.betragProTag}const b=+(f.length*(a.betragProTag??0)).toFixed(2),v=r.getCell(`G${he+1}`);v.value={formula:`SUM(G${de}:G${he})`,result:b};const y=E(new Date,"dd.MM.yyyy"),B=r.getCell("A21");if(B.value=y,B.alignment={vertical:"bottom",horizontal:"center",wrapText:!1},s&&i){const M=c.addImage({buffer:s,extension:i}),K=197,k=80,z=55,D=185,_=Ei(s);let $=D,W=z;if(_&&_.width>0&&_.height>0){const X=Math.min(D/_.width,z/_.height);$=Math.round(_.width*X),W=Math.round(_.height*X)}const ne=Math.max(0,Math.round((K-$)/2))/k;r.addImage(M,{tl:{col:ne,row:20.04},ext:{width:$,height:W},editAs:"oneCell"})}for(let M=he+3;M<=he+5;M++)for(const K of["A","B","C","D","E","F","G"]){const k=r.getCell(`${K}${M}`),z=k.value;typeof z=="string"&&/^[A-Z]\d+(-\d+)?$/.test(z.trim())&&(k.value=null)}const S=await c.xlsx.writeBuffer(),C=new Blob([S],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),I=zi(a.name,u);return{blob:C,dateiname:I,anzahlTage:f.length,ueberzaehlig:n.length-f.length}}function zi(e,t){const n=E(t,"MMMM",{locale:G}),a=E(t,"yy");let s=e;const i=/^(.+?),\s*(.+)$/.exec(e);return i&&(s=`${i[2].trim()} ${i[1].trim()}`),`Fahrgelderstattung ${s} ${n} ${a}.xlsx`}function Be(e){const[t,n]=e.split("-").map(a=>parseInt(a,10));return E(new Date(t,n-1,1),"MMMM yyyy",{locale:G})}function Kt(e,t=null){const a={monat_jahr:Be(e)},s=(t==null?void 0:t.betreff)??"Fahrgelderstattung {monat_jahr}",i=(t==null?void 0:t.text)??`Guten Tag Frau Mayer,

hiermit sende ich Ihnen das ausgefüllte Dokument für die Fahrgelderstattung vom {monat_jahr} zu.
Vielen Dank!`,l=Vt(s,a),c=Vt(i,a),r=new URLSearchParams;return r.set("cc","anika.kailer@putzmeister.com"),r.set("subject",l),r.set("body",c),`mailto:annika.mayer@putzmeister.com?${r.toString().replace(/\+/g,"%20")}`}function Vt(e,t){return e.replace(/\{(\w+)\}/g,(n,a)=>t[a]!=null?String(t[a]):`{${a}}`)}function Di(e){const t=new Set;for(const n of e)n.tagestyp==="Berufsschule"&&(n.ist??0)>0&&t.add(n.monatKey);return[...t].sort().reverse()}function Ai(e,t,n,a){var h,g;const s=t==null?void 0:t.berufsschulMuster;if(!s||!((h=s.wochentageWoechentlich)!=null&&h.length)&&!((g=s.wochentage14Taegig)!=null&&g.length))return{ausstehend:[],imMonatGesamt:n.length,vorhandenAnzahl:n.length};const[i,l]=e.split("-").map(m=>parseInt(m,10)),c=new Date(i,l-1,1),r=new Date(i,l,0),d=new Set(n.map(m=>m.datum)),o=[];let u=new Date(c);for(;u<=r;){if(!De(u)&&qe(u,s)){const m=E(u,"yyyy-MM-dd");u>a&&!d.has(m)&&o.push(m)}u=ze(u,1)}return{ausstehend:o,imMonatGesamt:n.length+o.length,vorhandenAnzahl:n.length}}function Ei(e){const t=e instanceof ArrayBuffer?e:e!=null&&e.buffer?e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength):null;if(!t||t.byteLength<24)return null;const n=new DataView(t);if(n.getUint32(0)===2303741511&&n.getUint32(4)===218765834)return{width:n.getUint32(16),height:n.getUint32(20)};if(n.getUint16(0)===65496){let a=2;for(;a+9<n.byteLength;){if(n.getUint8(a)!==255)return null;const s=n.getUint8(a+1);if(s>=192&&s<=207&&s!==196&&s!==200&&s!==204)return{height:n.getUint16(a+5),width:n.getUint16(a+7)};const l=n.getUint16(a+2);if(l<2)return null;a+=2+l}}return null}function Pi(e,t){const n=URL.createObjectURL(e),a=document.createElement("a");a.href=n,a.download=t,document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(n),1e3)}async function Me({root:e}){var v,w,y,B,S,C,I,M,K;const t=await xe();if(!t){Ti(e);return}const[n,a,s,i]=await Promise.all([te(),J(),Ee(),hs("fahrgeld_abgabe")]),l=s!=null&&s.stichtagAuswertung?new Date(s.stichtagAuswertung):new Date,c=Di(n),r=new Date,d=`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}`;c.includes(d)||c.unshift(d);const o=c;e.innerHTML=`
    <h1 class="view-title">Fahrgelderstattung</h1>
    <p class="view-subtitle">Generiere die monatliche Fahrgelderstattungs-Excel mit deinen erkannten Berufsschultagen.</p>

    <div class="card fahrtgeld-template-info" style="margin-bottom: 24px;">
      <div class="card-split">
        <div>
          <h3 style="margin: 0;">Vorlage geladen</h3>
          <p class="hint" style="margin: 4px 0 0;">
            ${x(t.konstanten.name||"—")} ·
            Pers.-Nr. ${x(t.konstanten.persNr||"—")} ·
            KST ${x(t.konstanten.kst||"—")}
          </p>
          <p class="hint" style="margin: 4px 0 0;">
            ${x(t.konstanten.vonHaltestelle||"—")} → ${x(t.konstanten.nachHaltestelle||"—")} ·
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
          ${(v=t.unterschrift)!=null&&v.dataUrl?`
            <p class="hint" style="margin: 4px 0 8px;">Wird in jede generierte Excel als Auszubildender-Unterschrift eingefügt. Datum (Tag der Generierung) wird automatisch gesetzt.</p>
            <div class="fahrtgeld-signature-preview">
              <img src="${x(t.unterschrift.dataUrl)}" alt="Unterschrift" />
            </div>
          `:`
            <p class="hint" style="margin: 4px 0 0;">Noch keine Unterschrift hinterlegt. Aktuell bleibt das Feld in der Excel leer (nur das Datum wird gesetzt).</p>
          `}
        </div>
        <div style="display: flex; gap: 8px; align-items: flex-start;">
          <button class="btn sm" id="btn-signature-upload">${(w=t.unterschrift)!=null&&w.dataUrl?"Ersetzen":"Hochladen"}</button>
          ${(y=t.unterschrift)!=null&&y.dataUrl?'<button class="btn sm" id="btn-signature-clear">Entfernen</button>':""}
        </div>
      </div>
    </div>

    ${o.length===0?`
      <div class="empty-state">
        <div class="empty-state-icon">📅</div>
        <h2>Keine Berufsschultage erkannt</h2>
        <p>Lade einen Zeitnachweis unter <a href="#/daten">Daten</a> hoch — danach erscheinen hier die Monate.</p>
      </div>
    `:(()=>{var _;const k=o.map(($,W)=>{const N=Ot(n,$),ne=+(N.length*(t.konstanten.betragProTag??0)).toFixed(2),X=N.length>10,H=Ai($,a,N,l),Y=H.ausstehend.length,Te=+((N.length+Y)*(t.konstanten.betragProTag??0)).toFixed(2),Ge=Y>0?H.ausstehend.map(Je=>T(L(Je))).join(", "):"";return{mk:$,bs:N,summe:ne,ueberzaehlig:X,offen:Y,offenListe:Ge,summeMitOffen:Te,idx:W}}),z=((_=k.find($=>$.bs.length>0))==null?void 0:_.mk)??k[0].mk,D=k.find($=>$.mk===z)??k[0];return`
          <div class="card fahrtgeld-generate-card">
            <div class="fahrtgeld-generate-buttons">
              <button class="btn-generate-big" id="btn-fahrtgeld-generate" ${D.bs.length===0?"disabled":""}>
                <img src="excel-logo.png" alt="" class="excel-logo-big" />
                <span class="btn-generate-label">Generieren</span>
              </button>
              <a class="btn-mail-big" id="btn-fahrtgeld-mail" href="${x(Kt(D.mk,i))}" target="_blank" rel="noopener" ${D.bs.length===0?'aria-disabled="true"':""}>
                <img src="outlook-logo.png" alt="" class="outlook-logo-big" />
                <span>E-Mail</span>
              </a>
            </div>
            <div class="fahrtgeld-generate-info" id="fahrtgeld-generate-info">
              <div class="fahrtgeld-generate-monat">${x(Be(D.mk))}</div>
              <div class="hint" id="fahrtgeld-generate-detail">
                ${D.bs.length} BS-Tag${D.bs.length===1?"":"e"} erfasst · ${D.summe.toFixed(2).replace(".",",")} €
                ${D.offen>0?`<br><span class="fahrtgeld-pending">⏳ Laut Schul-Rhythmus kommen noch ${D.offen} BS-Tag${D.offen===1?"":"e"}: ${x(D.offenListe)} (mit allen: ${D.summeMitOffen.toFixed(2).replace(".",",")} €)</span>`:""}
                ${D.ueberzaehlig?`<br><span style="color: var(--warn); font-weight: 600;">· ${D.bs.length-10} überzählig (max 10/Monat)</span>`:""}
              </div>
              <div class="hint" style="margin-top: 6px; font-size: 12px;">⚠ Mail-Anhang muss manuell aus dem Download-Ordner gezogen werden — Browser können keine Anhänge automatisch hinzufügen.</div>
            </div>
          </div>

          <div class="card">
            <h2>Monat auswählen</h2>
            <p class="hint" style="margin-bottom: 16px;">Pro Monat zählen nur Berufsschul-Tage, an denen du nachweislich anwesend warst. Krank, Urlaub und Stempelzeit-Tage werden ausgefiltert.</p>
            <div class="fahrtgeld-monate">
              ${k.map($=>{const W=$.mk===z?"checked":"",N=`data-monat="${x($.mk)}" data-offen="${$.offen}" data-offen-liste="${x($.offenListe)}" data-anzahl="${$.bs.length}" data-summe="${$.summe.toFixed(2).replace(".",",")}" data-summe-mit-offen="${$.summeMitOffen.toFixed(2).replace(".",",")}" data-monat-label="${x(Be($.mk))}" data-ueberzaehlig="${$.ueberzaehlig?"1":"0"}"`;return`
                  <label class="fahrtgeld-monat-row${$.offen>0?" has-pending":""}${$.bs.length===0?" empty":""}" ${N}>
                    <input type="radio" name="fg-monat-sel" value="${x($.mk)}" ${W} ${$.bs.length===0?"disabled":""} class="fahrtgeld-monat-radio" />
                    <div class="fahrtgeld-monat-titel">
                      <div class="fahrtgeld-monat-name">${x(Be($.mk))}</div>
                      <div class="hint">
                        ${$.bs.length} BS-Tag${$.bs.length===1?"":"e"} erfasst · ${$.summe.toFixed(2).replace(".",",")} €
                        ${$.offen>0?`<br><span class="fahrtgeld-pending">⏳ noch ${$.offen} BS-Tag${$.offen===1?"":"e"} laut Rhythmus</span>`:""}
                        ${$.ueberzaehlig?`<br><span style="color: var(--warn); font-weight: 600;">· ${$.bs.length-10} überzählig</span>`:""}
                      </div>
                    </div>
                  </label>
                `}).join("")}
            </div>
          </div>
        `})()}

    <input type="file" id="fahrtgeld-replace-input" accept=".xlsx,.xls,.xlsm,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel" style="display: none;" />
    <input type="file" id="fahrtgeld-signature-input" accept="image/png,image/jpeg,.png,.jpg,.jpeg" style="display: none;" />
  `,(B=e.querySelector("#btn-template-replace"))==null||B.addEventListener("click",()=>{e.querySelector("#fahrtgeld-replace-input").click()}),(S=e.querySelector("#fahrtgeld-replace-input"))==null||S.addEventListener("change",async k=>{var D;const z=(D=k.target.files)==null?void 0:D[0];z&&await rt(z,e)}),(C=e.querySelector("#btn-template-clear"))==null||C.addEventListener("click",async()=>{await U("Beim nächsten Öffnen wirst du gebeten, eine neue Vorlage hochzuladen.",{title:"Vorlage löschen?",confirmLabel:"Löschen",variant:"danger"})&&(await cs(),F("Vorlage gelöscht."),Me({root:e}))}),(I=e.querySelector("#btn-signature-upload"))==null||I.addEventListener("click",()=>{e.querySelector("#fahrtgeld-signature-input").click()}),(M=e.querySelector("#fahrtgeld-signature-input"))==null||M.addEventListener("change",async k=>{var D;const z=(D=k.target.files)==null?void 0:D[0];z&&await Fi(z,e)}),(K=e.querySelector("#btn-signature-clear"))==null||K.addEventListener("click",async()=>{if(!await U("Die hochgeladene Unterschrift wird entfernt — generierte Excel haben dann keine Unterschrift mehr.",{title:"Unterschrift entfernen?",confirmLabel:"Entfernen",variant:"danger"}))return;const k=await xe();k&&(await ht({...k,unterschrift:null}),F("Unterschrift entfernt."),Me({root:e}))});const u=e.querySelector("#btn-fahrtgeld-generate"),h=e.querySelector("#btn-fahrtgeld-mail"),g=e.querySelector(".fahrtgeld-generate-monat"),m=e.querySelector("#fahrtgeld-generate-detail"),f=e.querySelectorAll(".fahrtgeld-monat-radio");function b(){const k=e.querySelector(".fahrtgeld-monat-radio:checked");if(!k)return;const z=k.closest(".fahrtgeld-monat-row");if(!z)return;const D=k.value,_=parseInt(z.getAttribute("data-anzahl")||"0",10),$=z.getAttribute("data-summe")||"0,00",W=parseInt(z.getAttribute("data-offen")||"0",10),N=z.getAttribute("data-offen-liste")||"",ne=z.getAttribute("data-summe-mit-offen")||$,X=z.getAttribute("data-monat-label")||"",H=z.getAttribute("data-ueberzaehlig")==="1";if(g&&(g.textContent=X),m){const Y=[`${_} BS-Tag${_===1?"":"e"} erfasst · ${$} €`];W>0&&Y.push(`<br><span class="fahrtgeld-pending">⏳ Laut Schul-Rhythmus kommen noch ${W} BS-Tag${W===1?"":"e"}: ${x(N)} (mit allen: ${ne} €)</span>`),H&&Y.push(`<br><span style="color: var(--warn); font-weight: 600;">· ${_-10} überzählig (max 10/Monat)</span>`),m.innerHTML=Y.join("")}u&&(u.disabled=_===0),h&&(h.href=Kt(D,i),_===0?h.setAttribute("aria-disabled","true"):h.removeAttribute("aria-disabled"))}f.forEach(k=>k.addEventListener("change",b)),u==null||u.addEventListener("click",async()=>{var ne,X;const k=e.querySelector(".fahrtgeld-monat-radio:checked");if(!k){R("Bitte einen Monat auswählen.",{type:"warn"});return}const z=k.closest(".fahrtgeld-monat-row"),D=k.value,_=parseInt((z==null?void 0:z.getAttribute("data-offen"))||"0",10),$=(z==null?void 0:z.getAttribute("data-offen-liste"))||"";if(_>0&&!await U(`Laut deinem Schul-Rhythmus kommen in diesem Monat noch ${_} BS-Tag${_===1?"":"e"}:

${$}

Diese Tage sind noch nicht im Zeitnachweis-PDF und werden in der Excel fehlen. Trotzdem jetzt für die bisher erfassten Tage generieren?`,{title:"Noch ausstehende BS-Tage",confirmLabel:"Trotzdem generieren"}))return;u.disabled=!0;const W=u.querySelector(".btn-generate-label"),N=W==null?void 0:W.textContent;W&&(W.textContent="Erstelle …");try{const H=await xe(),Y=await te(),Te=Ot(Y,D);if(!Te.length){R("Für diesen Monat sind keine BS-Anwesenheits-Tage erkannt.",{type:"warn"});return}const Ge=(ne=H.unterschrift)==null?void 0:ne.bytes,Je=(X=H.unterschrift)==null?void 0:X.extension,{blob:Sn,dateiname:wt,ueberzaehlig:Xe}=await Mi({templateBytes:H.bytes,monatKey:D,bsTage:Te,konstanten:H.konstanten,unterschriftBytes:Ge,unterschriftExtension:Je});Pi(Sn,wt),F(`Excel erstellt: ${wt}${Xe>0?` (${Xe} weiterer Tag${Xe===1?"":"e"} passte/n nicht in die Vorlage)`:""}`)}catch(H){console.error("Fahrtgeld-Generierung fehlgeschlagen:",H),R(`Fehler: ${H.message||H}`,{type:"error",duration:8e3})}finally{u.disabled=!1,W&&N&&(W.textContent=N)}})}function Ti(e){e.innerHTML=`
    <h1 class="view-title">Fahrgelderstattung</h1>
    <p class="view-subtitle">Generiere deine monatlichen Fahrgelderstattungs-Formulare auf Knopfdruck.</p>

    <div class="card fahrtgeld-empty">
      <div class="fahrtgeld-dropzone" id="fahrtgeld-dropzone" tabindex="0" role="button" aria-label="Fahrgeld-Vorlage hochladen">
        <img src="excel-logo.png" alt="" class="fahrtgeld-empty-icon-img" />
        <h2>Bestehende Fahrgelderstattungs-Tabelle als Vorlage hochladen</h2>
        <p class="hint">Datei hierher ziehen oder klicken zum Auswählen</p>
      </div>
      <input type="file" id="fahrtgeld-upload-input" accept=".xlsx,.xls,.xlsm,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel" style="display: none;" />
    </div>
  `;const t=e.querySelector("#fahrtgeld-dropzone"),n=e.querySelector("#fahrtgeld-upload-input");t==null||t.addEventListener("click",()=>n.click()),t==null||t.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),n.click())}),n==null||n.addEventListener("change",async a=>{var i;const s=(i=a.target.files)==null?void 0:i[0];s&&await rt(s,e)}),["dragenter","dragover"].forEach(a=>{t==null||t.addEventListener(a,s=>{s.preventDefault(),s.stopPropagation(),t.classList.add("is-dragover")})}),["dragleave","drop"].forEach(a=>{t==null||t.addEventListener(a,s=>{s.preventDefault(),s.stopPropagation(),t.classList.remove("is-dragover")})}),t==null||t.addEventListener("drop",async a=>{var i,l;const s=(l=(i=a.dataTransfer)==null?void 0:i.files)==null?void 0:l[0];s&&await rt(s,e)})}async function Fi(e,t){try{if(!["image/png","image/jpeg"].includes(e.type)&&!/\.(png|jpe?g)$/i.test(e.name)){R("Bitte ein PNG oder JPG hochladen.",{type:"warn"});return}if(e.size>2*1024*1024){R(`Die Bilddatei ist zu groß (${(e.size/1024/1024).toFixed(1)} MB). Maximal 2 MB — bitte komprimiert oder kleiner hochladen.`,{type:"warn",duration:8e3});return}const a=await e.arrayBuffer(),s=/\.png$/i.test(e.name)||e.type==="image/png"?"png":"jpeg",i=await new Promise((c,r)=>{const d=new FileReader;d.onload=()=>c(d.result),d.onerror=r,d.readAsDataURL(e)}),l=await xe();if(!l){R("Bitte zuerst eine Excel-Vorlage hochladen.",{type:"warn"});return}await ht({...l,unterschrift:{bytes:a,extension:s,dataUrl:i,hochgeladenAm:new Date().toISOString()}}),F("Unterschrift gespeichert."),Me({root:t})}catch(n){console.error("Unterschrift-Upload fehlgeschlagen:",n),R(`Fehler beim Verarbeiten: ${n.message||n}`,{type:"error",duration:8e3})}}async function rt(e,t){try{const n=await e.arrayBuffer(),a=await Si(n);if(!a.ok){R(`Vorlage nicht erkannt: ${a.fehler}`,{type:"error",duration:8e3});return}const s=await xe();let i=s==null?void 0:s.unterschrift;if(!i&&a.unterschriftAuto){const l=Li(a.unterschriftAuto.bytes,a.unterschriftAuto.extension);i={bytes:a.unterschriftAuto.bytes,extension:a.unterschriftAuto.extension,dataUrl:l,quelle:"auto-aus-vorlage",hochgeladenAm:new Date().toISOString()}}await ht({bytes:n,konstanten:a.konstanten,unterschrift:i,hochgeladenAm:new Date().toISOString(),dateiname:e.name}),a.unterschriftAuto&&!(s!=null&&s.unterschrift)?F(`Vorlage gespeichert: ${a.konstanten.name||e.name} (Unterschrift aus Vorlage übernommen)`):F(`Vorlage gespeichert: ${a.konstanten.name||e.name}`),document.dispatchEvent(new CustomEvent("better-ess:fahrgeld-template-uploaded")),Me({root:t})}catch(n){console.error("Vorlage-Upload fehlgeschlagen:",n),R(`Fehler beim Verarbeiten: ${n.message||n}`,{type:"error",duration:8e3})}}function Li(e,t){const n=new Uint8Array(e);let a="";for(let l=0;l<n.length;l++)a+=String.fromCharCode(n[l]);const s=btoa(a);return`data:${t==="png"?"image/png":"image/jpeg"};base64,${s}`}async function Ci({root:e}){const t=await te();if(!t.length){e.innerHTML='<h1 class="view-title">Berichtsheft</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const n=[...new Set(t.map(i=>i.monatKey))].sort().reverse();e.innerHTML=`
    <h1 class="view-title">Berichtsheft-Export</h1>
    <p class="view-subtitle">Kopiere die Arbeitsstunden im HH:MM-Format direkt in dein Berichtsheft.</p>

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 16px; align-items: center;">
        <h2 style="margin: 0;">Filter</h2>
        <div style="display: flex; gap: 8px; align-items: center;">
          <label style="color: var(--fg-muted); font-size: 13px;">Monat:</label>
          <select id="filter-monat">
            <option value="">Alle</option>
            ${n.map(i=>`<option value="${i}">${Wi(i)}</option>`).join("")}
          </select>
          <button class="btn sm" id="btn-copy-all">Alle sichtbaren kopieren</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div id="liste"></div>
    </div>
  `;const a=e.querySelector("#filter-monat");a.addEventListener("change",()=>s()),e.querySelector("#btn-copy-all").addEventListener("click",()=>{const i=e.querySelectorAll("#liste tr[data-copy]"),l=Array.from(i).map(c=>c.getAttribute("data-copy")).join(`
`);navigator.clipboard.writeText(l).then(()=>F(`${i.length} Zeilen kopiert.`))});function s(){const i=a.value,c=(i?t.filter(r=>r.monatKey===i):t).filter(r=>r.ist!=null&&r.ist>0&&r.tagestyp!=="Wochenende");e.querySelector("#liste").innerHTML=_i(c),e.querySelectorAll(".copy-val").forEach(r=>{r.addEventListener("click",async()=>{const d=r.getAttribute("data-val");await navigator.clipboard.writeText(d),r.classList.add("ok");const o=r.textContent;r.textContent="✓ kopiert",setTimeout(()=>{r.classList.remove("ok"),r.textContent=o},1200)})})}s()}function _i(e){return e.length?`
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
        ${e.map(t=>{const n=Oe(t.ist),a=`${T(L(t.datum))}	${n}`;return`
            <tr data-copy="${It(a)}">
              <td class="tabular">${T(L(t.datum))}</td>
              <td>${Bi(t.wochentag)}</td>
              <td>${t.tagestyp?`<span class="pill ${Oi(t.tagestyp)}">${$n(t.tagestyp)}</span>`:"—"}</td>
              <td class="num tabular">${t.ist.toFixed(2).replace(".",",")}</td>
              <td class="num tabular" style="font-weight: 600;">${n}</td>
              <td><button class="copy-val" data-val="${It(n)}">📋 ${n}</button></td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `:'<p style="color: var(--fg-muted);">Keine Tage in dieser Auswahl.</p>'}function Bi(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function Wi(e){const[t,n]=e.split("-");return E(new Date(parseInt(t),parseInt(n)-1,1),"LLLL yyyy",{locale:G})}function Oi(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function $n(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function It(e){return $n(e)}async function Ki({root:e}){const[t,n,a,s]=await Promise.all([te(),J(),Re(),je()]),i=Object.fromEntries(s.map(r=>[r.key,r])),l=Ze(t,n,new Date).filter(r=>r.mailVorlageKey),c=gn(a);e.innerHTML=`
    <h1 class="view-title">Mail-Vorlagen</h1>
    <p class="view-subtitle">Vorformulierte Mails an die Zeitwirtschaft bei erkannten Fehlern im Zeitnachweis.</p>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Offene Warnungen mit Mail-Vorschlag</h2>
      <p class="hint" style="margin-bottom: 16px;">Diese Warnungen haben einen roten Schweregrad und sind eine direkte Mail wert.</p>

      ${l.length===0?'<div class="empty-state"><div class="empty-state-icon">✓</div><p>Keine akuten Warnungen — top.</p></div>':l.map(r=>Vi(r,n,i)).join("")}

      ${c.length>0?`
        <h3 style="margin-top: 24px;">Saldo-Plausibilität</h3>
        ${c.map(r=>`
          <div class="alert severity-warn">
            <div class="alert-icon">⚠</div>
            <div class="alert-body">
              <div class="alert-title">${q(r.titel)}</div>
              <p style="margin: 4px 0; font-size: 13px;">${q(r.beschreibung)}</p>
            </div>
          </div>
        `).join("")}
      `:""}
    </div>

    <div class="card">
      <h2>Vorlagen verwalten</h2>
      <p class="hint" style="margin-bottom: 16px;">Passe die Texte an deinen Stil an. Platzhalter wie <code>{name}</code>, <code>{datum}</code>, <code>{wochentag}</code>, <code>{ist}</code>, <code>{soll}</code> werden automatisch gefüllt.</p>

      <div id="vorlagen-editor">
        ${Object.keys(Se).map(r=>{const d=Pe(r,i[r]);return Ii(d)}).join("")}
      </div>
    </div>
  `,Hi(e),Ni(e)}function Vi(e,t,n){const a=Pe(e.mailVorlageKey,n[e.mailVorlageKey]);if(!a)return"";const s=ft(t,e),i=hn(a,s),l=mt(t,a,s);return`
    <div class="alert severity-${e.schweregrad}" style="flex-direction: column; align-items: stretch;">
      <div style="display: flex; align-items: flex-start; gap: 12px;">
        <div class="alert-icon">${e.schweregrad==="error"?"!":"⚠"}</div>
        <div class="alert-body">
          <div class="alert-title">${q(e.titel)}</div>
          <p style="margin: 4px 0; font-size: 13px;">${q(e.beschreibung)}</p>
        </div>
      </div>
      <details style="margin-top: 12px;">
        <summary style="cursor: pointer; color: var(--fg-muted); font-size: 13px;">Mail-Vorschau anzeigen</summary>
        <div style="background: var(--surface-2); border-radius: var(--radius-md); padding: 12px; margin-top: 8px; font-family: var(--font-mono); font-size: 12px; white-space: pre-wrap; line-height: 1.5;">
<strong>An:</strong> ${q(t.zeitwirtschaftEmail||"")}
<strong>Betreff:</strong> ${q(i.betreff)}

${q(i.text)}
        </div>
      </details>
      <div class="alert-actions mail-actions-big" style="margin-top: 16px;">
        <a class="btn-mail-big" href="${l}" target="_blank" rel="noopener"><img src="outlook-logo.png" alt="" class="outlook-logo-big" /><span>Mail Vorschlag in Outlook</span></a>
        <button class="btn sm btn-copy-mail" data-subject="${lt(i.betreff)}" data-body="${lt(i.text)}">📋 Betreff + Text kopieren</button>
      </div>
    </div>
  `}function Ii(e){return`
    <div class="vorlagen-item" data-key="${e.key}" style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
      <div class="card-split" style="margin-bottom: 12px;">
        <div>
          <h3 style="text-transform: none; letter-spacing: 0; color: var(--fg); font-size: 16px;">${q(e.titel)}</h3>
          <p class="hint" style="margin: 4px 0;">${q(e.beschreibung)}</p>
        </div>
        <button class="btn sm btn-reset-vorlage" data-key="${e.key}">Auf Default zurücksetzen</button>
      </div>
      <div class="form-group">
        <label>Betreff</label>
        <input type="text" class="v-betreff" value="${lt(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 240px;">${q(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function Hi(e){e.querySelectorAll(".btn-save-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const n=t.getAttribute("data-key"),a=t.closest(".vorlagen-item"),s=a.querySelector(".v-betreff").value,i=a.querySelector(".v-text").value;await Ve(n,{betreff:s,text:i}),F("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const n=t.getAttribute("data-key"),a=Se[n];a&&await U(`Deine Anpassungen an "${a.titel}" gehen verloren.`,{title:"Vorlage zurücksetzen?",confirmLabel:"Zurücksetzen",variant:"danger"})&&(await Ve(n,{betreff:a.betreff,text:a.text}),F("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function Ni(e){e.querySelectorAll(".btn-copy-mail").forEach(t=>{t.addEventListener("click",async()=>{const n=t.getAttribute("data-subject"),a=t.getAttribute("data-body"),s=`Betreff: ${n}

${a}`;await navigator.clipboard.writeText(s),F("Mail-Text kopiert.")})})}function q(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function lt(e){return q(e)}async function Ri({root:e}){const[t,n]=await Promise.all([J(),je()]),a=Object.fromEntries(n.map(s=>[s.key,s]));e.innerHTML=`
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
          ${Object.keys(Se).map(s=>{const i=Pe(s,a[s]);return ji(i)}).join("")}
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
  `,e.querySelector("#pause-sel").addEventListener("change",async s=>{const i={...t,pausenRegel:s.target.value};await Ke(i),F("Pausen-Regel gespeichert.")}),e.querySelectorAll(".btn-save-vorlage").forEach(s=>{s.addEventListener("click",async()=>{const i=s.getAttribute("data-key"),l=s.closest(".vorlagen-item"),c=l.querySelector(".v-betreff").value,r=l.querySelector(".v-text").value;await Ve(i,{betreff:c,text:r}),F("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(s=>{s.addEventListener("click",async()=>{const i=s.getAttribute("data-key"),l=Se[i];l&&await U(`Deine Anpassungen an "${l.titel}" gehen verloren.`,{title:"Vorlage zurücksetzen?",confirmLabel:"Zurücksetzen",variant:"danger"})&&(await Ve(i,{betreff:l.betreff,text:l.text}),F("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function ji(e){return`
    <div class="vorlagen-item" data-key="${e.key}" style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
      <div class="card-split" style="margin-bottom: 12px;">
        <div>
          <h3 style="text-transform: none; letter-spacing: 0; color: var(--fg); font-size: 16px;">${We(e.titel)}</h3>
          <p class="hint" style="margin: 4px 0;">${We(e.beschreibung)}</p>
        </div>
        <button class="btn sm btn-reset-vorlage" data-key="${e.key}">Auf Default zurücksetzen</button>
      </div>
      <div class="form-group">
        <label>Betreff</label>
        <input type="text" class="v-betreff" value="${qi(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 200px;">${We(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function We(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function qi(e){return We(e)}async function Ht(){document.documentElement.setAttribute("data-css-ready",""),Gn();const e=document.getElementById("content");await ss()&&setTimeout(()=>{R('Parser wurde aktualisiert. Bitte lade deinen Zeitnachweis unter "Daten" neu hoch.',{type:"info",duration:12e3})},500),await as(),await ts(),await ns(),V("/",Dt),V("/dashboard",Dt),V("/analytics",fi),V("/kalender",et),V("/kalender/typ/:typ",tt),V("/kalender/wochentag/:wd",tt),V("/kalender/pause/:bucket",tt),V("/kalender/:yyyymm",et),V("/kalender/:yyyymm/:yyyykw",et),V("/tag/:datum",di),V("/berichtsheft",Ci),V("/mails",Ki),V("/fahrtgeld",Me),V("/profil",ci),V("/daten",ni),V("/einstellungen",Ri),Ja(e),location.hash||Ga("/");try{const t=await p.tage.count();Gs(t>0)&&setTimeout(()=>mn(),700)}catch(t){console.warn("[boot] Tour-Auto-Start-Check fehlgeschlagen:",t)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ht):Ht();
