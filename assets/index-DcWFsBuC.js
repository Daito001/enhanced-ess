const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/exceljs.min-BhfpbegZ.js","assets/dexie-UpTFNL8S.js","assets/index-e69lFYjk.js"])))=>i.map(i=>d[i]);
import{C as X,L as Xn,B as Qn,D as ea,S as ta,a as na,b as aa,P as sa,A as ia,c as ra,d as la,T as oa,p as ca,e as da,i as ua}from"./chartjs-CRgZvhTJ.js";import{b as dt,a as Ee,c as Te,d as ga,f as T,s as dn,e as un,g as gn,p as ha,h as fa,i as Ve,j as Ke,k as W,l as hn,q as ma,m as pa,n as ba,o as ya}from"./datefns-C8_rfWt_.js";import{D as va}from"./dexie-UpTFNL8S.js";import{GlobalWorkerOptions as fn,getDocument as mn}from"./pdfjs-BnPRJEQ6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function wa(){document.documentElement.setAttribute("data-theme","dark")}const It={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},xa=(e,t,n)=>{let a;const s=n!=null&&n.addSuffix?It[e].withPreposition:It[e].standalone;return typeof s=="string"?a=s:t===1?a=s.one:a=s.other.replace("{{count}}",String(t)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:"vor "+a:a},ka={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},$a={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Sa={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Ma={date:dt({formats:ka,defaultWidth:"full"}),time:dt({formats:$a,defaultWidth:"full"}),dateTime:dt({formats:Sa,defaultWidth:"full"})},za={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},Da=(e,t,n,a)=>za[e],Aa={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},Pa={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},pt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},Ea={narrow:pt.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:pt.wide},Ta={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},Fa={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},La={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},Ca=e=>Number(e)+".",_a={ordinalNumber:Ca,era:Ee({values:Aa,defaultWidth:"wide"}),quarter:Ee({values:Pa,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Ee({values:pt,formattingValues:Ea,defaultWidth:"wide"}),day:Ee({values:Ta,defaultWidth:"wide"}),dayPeriod:Ee({values:Fa,defaultWidth:"wide",formattingValues:La,defaultFormattingWidth:"wide"})},Ba=/^(\d+)(\.)?/i,Wa=/\d+/i,Oa={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},Va={any:[/^v/i,/^n/i]},Ka={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},Ia={any:[/1/i,/2/i,/3/i,/4/i]},Na={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},Ha={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ra={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},ja={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},qa={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},Za={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},Ga={ordinalNumber:ga({matchPattern:Ba,parsePattern:Wa,valueCallback:e=>parseInt(e)}),era:Te({matchPatterns:Oa,defaultMatchWidth:"wide",parsePatterns:Va,defaultParseWidth:"any"}),quarter:Te({matchPatterns:Ka,defaultMatchWidth:"wide",parsePatterns:Ia,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Te({matchPatterns:Na,defaultMatchWidth:"wide",parsePatterns:Ha,defaultParseWidth:"any"}),day:Te({matchPatterns:Ra,defaultMatchWidth:"wide",parsePatterns:ja,defaultParseWidth:"any"}),dayPeriod:Te({matchPatterns:qa,defaultMatchWidth:"wide",parsePatterns:Za,defaultParseWidth:"any"})},ee={code:"de",formatDistance:xa,formatLong:Ma,formatRelative:Da,localize:_a,match:Ga,options:{weekStartsOn:1,firstWeekContainsDate:4}};function pn(e){if(e==null)return null;if(typeof e=="number")return e;let t=String(e).trim();if(!t)return null;let n=!1;t.endsWith("-")&&(n=!0,t=t.slice(0,-1).trim()),t=t.replace(",",".");const a=parseFloat(t);return isNaN(a)?null:n?-a:a}function Je(e){if(e==null||isNaN(e))return"—";const t=e<0,n=Math.abs(e),a=Math.floor(n),s=Math.round((n-a)*60);let r=a,l=s;return l===60&&(r+=1,l=0),`${t?"-":""}${r}:${String(l).padStart(2,"0")}`}function he(e,t={}){if(e==null||isNaN(e))return"—";const{signed:n=!1,suffix:a="h"}=t,s=n&&e>0?"+":"",r=e.toFixed(2).replace(".",",");return`${s}${r}${a}`}function te(e){if(!e)return null;const t=/^(\d{1,2}):(\d{2})$/.exec(String(e).trim());return t?parseInt(t[1],10)*60+parseInt(t[2],10):null}function bn(e){if(!(e!=null&&e.length))return null;const t=e.filter(s=>s.von&&s.bis);if(!t.length)return null;let n=t[0].von,a=t[0].bis;for(const s of t)te(s.von)<te(n)&&(n=s.von),te(s.bis)>te(a)&&(a=s.bis);return{kommen:n,gehen:a}}const yn="2026-04-01";function Ua(e){return e?"arbzg":"jarbschg"}function Ja(e,t){return e==null?0:t==="jarbschg"?e>6?1:e>4.5?.5:0:e>9?.75:e>6?.5:0}function $t(e){if(!e||e.length<2)return 0;const t=e.filter(a=>a.von&&a.bis).map(a=>({von:te(a.von),bis:te(a.bis)})).filter(a=>a.von!=null&&a.bis!=null).sort((a,s)=>a.von-s.von);let n=0;for(let a=1;a<t.length;a++){const s=t[a].von-t[a-1].bis;(s>0&&s>=15||s>0)&&(n+=s)}return n/60}function vn(e,t){const n=e.zeitSpannen??[];if(!n.length||n.every(p=>!p.von))return{keinAnspruch:!0};const a=$t(n),s=e.pause??0,r=Ya(n),l=r-s,d=t.pausenRegel&&t.pausenRegel!=="auto"?t.pausenRegel==="jarbschg"?"jarbschg":"arbzg":Ua(!!t.ueber18),i=Ja(l,d);if(e.datum&&e.datum<yn)return{arbeitszeitMitPause:r,arbeitszeitOhnePause:l,gestempeltePause:a,abgezogenePause:s,gesetzlichePflicht:i,gesetz:d,legalerAbzug:s,unrechtmaessigerVerlustMin:0,aufstockungMin:0,typ:"alt_reglement",warnung:null,altReglement:!0};const o=Math.max(a,i),c=s-o,g=Math.max(0,i-a);let h="ok",u=null;if(c>.05)h="fehler_zeitwirtschaft",u=`${Math.round(c*60)} min Pause wurden zusätzlich zur gesetzlichen Pflicht und zur gestempelten Pause abgezogen. Das sieht nach einem Zeitwirtschafts-Fehler aus.`;else if(g>.05&&s>a+.02){h="aufstockung_legal";const p=Math.round(g*60);u=`Du hast ${Math.round(a*60)} min Pause gestempelt, aber bei ${l.toFixed(2).replace(".",",")}h Arbeitszeit schreibt das Gesetz (${d.toUpperCase()}) ${Math.round(i*60)} min vor. Die fehlenden ${p} min wurden automatisch als Pause gewertet. Das ist gesetzeskonform — nächstes Mal einfach länger Pause machen.`}return{arbeitszeitMitPause:r,arbeitszeitOhnePause:l,gestempeltePause:a,abgezogenePause:s,gesetzlichePflicht:i,gesetz:d,legalerAbzug:o,unrechtmaessigerVerlustMin:Math.round(Math.max(0,c)*60),aufstockungMin:Math.round(Math.max(0,g)*60),typ:h,warnung:u,altReglement:!1}}function Ya(e){let t=0;for(const n of e){if(!n.von||!n.bis)continue;const a=te(n.von),s=te(n.bis);a!=null&&s!=null&&s>a&&(t+=s-a)}return t/60}function wn(e,t){var i,o,c;const n=[...e].sort((g,h)=>g.datum.localeCompare(h.datum));if(!n.length)return[];const a=new Map(t.map(g=>[g.monatKey,g])),s={};for(const g of n)s[i=g.monatKey]??(s[i]=[]),s[g.monatKey].push(g);const r=Object.keys(s).sort(),l=[];let d=null;for(const g of r){const h=a.get(g);let u;((o=h==null?void 0:h.glz)==null?void 0:o.saldoVorperiode)!=null?u=h.glz.saldoVorperiode:d!=null?u=d:u=0;const p=s[g];for(const f of p)f.diff!=null&&(u+=f.diff),l.push({datum:f.datum,wochentag:f.wochentag,saldo:Math.round(u*100)/100,diff:f.diff,ist:f.ist,soll:f.soll,tagestyp:f.tagestyp,monatKey:f.monatKey,wocheKey:f.wocheKey,zeitSpannen:f.zeitSpannen});if(((c=h==null?void 0:h.glz)==null?void 0:c.saldoGesamt)!=null){const f=h.glz.saldoGesamt-u;if(Math.abs(f)>.02&&l.length>0){const b=l.length-1;l[b].umbuchung=f,l[b].saldo=Math.round((l[b].saldo+f)*100)/100,u=l[b].saldo}d=h.glz.saldoGesamt}else d=u}return l}function Xa(e,t){if(!e.length)return[];if(t==="alles")return e;const n=Math.min(t,e.length);return e.slice(-n)}function Qa(e){return e.length?e[e.length-1].saldo:0}const xn=new Set(["Urlaub","Arbeitsunfähigkeit","Feiertag","Gleitzeit","Berufsschule","Dienstreise"]),kn=7;function tt(e){if(!e||e.tagestyp==="Wochenende"||e.wochentag==="SA"||e.wochentag==="SO")return 0;const t=e.ist??0,n=e.soll??0;return t>0?t:xn.has(e.tagestyp)?Math.max(n,kn):n>0?n:t}function St(e){if(!e||e.tagestyp==="Wochenende"||e.wochentag==="SA"||e.wochentag==="SO")return 0;const t=e.soll??0;return t>0?t:xn.has(e.tagestyp)?kn:t}function es(e){if(!e.length)return 0;const t=e[0].saldo-(e[0].diff??0),n=e[e.length-1].saldo;return Math.round((n-t)*100)/100}const ts=["SO","MO","DI","MI","DO","FR","SA"],ns=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];function ze(e){if(!e)return null;const t=e.trim();return ha(t,"dd.MM.yyyy",new Date)}function B(e){return T(e,"dd.MM.yyyy")}function Mt(e){return T(e,"EE, dd.MM.yyyy",{locale:ee})}function as(e){return T(e,"dd.MM.")}function ss(e){return ts[e.getDay()]}function is(e){return ns[e.getDay()]}function rs(e){return gn(e)}function Ie(e){const t=dn(e,{weekStartsOn:1}),n=un(e,{weekStartsOn:1});return`${T(t,"dd.MM.")} – ${T(n,"dd.MM.yyyy")}`}function $n(e){return`${fa(e)}-${String(gn(e)).padStart(2,"0")}`}function zt(e){return T(e,"yyyy-MM")}function Sn(e){return T(e,"yyyy-MM-dd")}function ls(e,t){const n=[];let a=new Date(e);for(;a<=t;)Ke(a)||n.push(new Date(a)),a=Ve(a,1);return n}function Mn(e,t){if(!e||!t)return 0;e>t&&([e,t]=[t,e]);let n=0,a=new Date(e);for(;a<t;)a=Ve(a,1),Ke(a)||n++;return n}function $(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function os(e){return $(e)}const cs=Object.freeze(Object.defineProperty({__proto__:null,addDays:Ve,dayKey:Sn,differenceInCalendarDays:hn,endOfMonth:pa,endOfWeek:un,escapeAttr:os,escapeHtml:$,formatGermanDate:B,formatGermanDateLong:Mt,formatShortDate:as,formatWocheRange:Ie,getWeekdayCode:ss,getWeekdayName:is,isSameDay:ba,isWeekend:Ke,isoWeek:rs,monthKey:zt,parseGermanDate:ze,startOfMonth:ya,startOfWeek:dn,weekKey:$n,werktageAbstand:Mn,werktageZwischen:ls},Symbol.toStringTag,{value:"Module"}));X.register(Xn,Qn,ea,ta,na,aa,sa,ia,ra,la,oa,ca,da,ua);function H(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function me(){return{fg:H("--fg"),fgMuted:H("--fg-muted"),fgSubtle:H("--fg-subtle"),border:H("--border"),surface:H("--surface"),accent:H("--accent"),success:H("--success"),warn:H("--warn"),danger:H("--danger"),info:H("--info"),palette:[H("--chart-1"),H("--chart-2"),H("--chart-3"),H("--chart-4"),H("--chart-5"),H("--chart-6"),H("--chart-7")]}}function _(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.fgMuted,font:{size:12}}},tooltip:{backgroundColor:e.surface,titleColor:e.fg,bodyColor:e.fg,borderColor:e.border,borderWidth:1,padding:10,displayColors:!0}},scales:{x:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}},y:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}}}}}function Dt(e,t){const n=me();if(be(e),!(t!=null&&t.length))return;const a=t.map(r=>T(W(r.datum),"dd.MM.")),s=t.map(r=>r.saldo);return s.map(r=>r>=0?n.success:n.danger),new X(e,{type:"line",data:{labels:a,datasets:[{label:"Tages-Saldo",data:s,borderColor:n.accent,backgroundColor:r=>{const l=r.chart,{ctx:d,chartArea:i,scales:o}=l;return i?zn(d,i,o.y,n):ue(n.accent,.14)},segment:{borderColor:r=>{const l=r.p0.parsed.y,d=r.p1.parsed.y,i=(l+d)/2;return i>=.02?n.success:i<=-.02?n.danger:n.fgMuted}},tension:.25,pointRadius:2,pointHoverRadius:6,pointHitRadius:20,pointBackgroundColor:s.map(r=>r>=.02?n.success:r<=-.02?n.danger:n.fgMuted),pointBorderColor:n.surface,pointBorderWidth:1,fill:!0,borderWidth:2}]},options:{..._(n),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},onHover:(r,l,d)=>{const i=d.getElementsAtEventForMode(r,"index",{intersect:!1},!1);d.canvas.style.cursor=i.length>0?"pointer":"default"},onClick:(r,l,d)=>{const i=d.getElementsAtEventForMode(r,"index",{intersect:!1},!1);if(i.length>0){const o=i[0].index,c=t[o];c!=null&&c.datum&&(window.location.hash=`#/tag/${c.datum}`)}},plugins:{..._(n).plugins,legend:{display:!1},tooltip:{enabled:!1,mode:"index",intersect:!1,axis:"x",position:"nearest",external:ds(t)}},scales:{..._(n).scales,y:{..._(n).scales.y,ticks:{..._(n).scales.y.ticks,callback:r=>`${r>=0?"+":""}${r.toFixed(1).replace(".",",")}h`}}}}})}function pe(e){return function(t){var f,b;const{chart:n,tooltip:a}=t;let s=n.$richTooltipEl;if(!s){s=document.createElement("div"),s.className="saldo-tooltip",document.body.appendChild(s),n.$richTooltipEl=s;const m=n.destroy.bind(n);n.destroy=function(){s.parentNode&&s.parentNode.removeChild(s),m()}}if(a.opacity===0||!((f=a.dataPoints)!=null&&f.length)){s.style.opacity="0";return}const r=e({tooltip:a,chart:n});if(!r){s.style.opacity="0";return}let l=`<div class="saldo-tooltip-title">${bt(r.title)}</div>`;for(const m of r.rows||[]){const x=m.klasse||"flat";l+=`<div class="saldo-tooltip-row"><span class="saldo-tooltip-label">${bt(m.label)}</span><span class="saldo-tooltip-value ${x}">${m.value}</span></div>`}(b=r.meta)!=null&&b.length&&(l+=`<div class="saldo-tooltip-meta">${r.meta.map(m=>`<span>${m}</span>`).join("")}</div>`),s.innerHTML=l;const d=n.canvas.getBoundingClientRect(),i=d.left+a.caretX,o=d.top+a.caretY;s.style.opacity="0",s.style.left="0px",s.style.top="0px";const c=s.offsetWidth,g=s.offsetHeight,h=18;let u=i+h;u+c>window.innerWidth-8&&(u=i-h-c);let p=o-g/2;p<8&&(p=8),p+g>window.innerHeight-8&&(p=window.innerHeight-g-8),s.style.left=u+"px",s.style.top=p+"px",s.style.opacity="1"}}function fe(e){return e==null?"flat":e>.05?"pos":e<-.05?"neg":"flat"}function xe(e){return e==null?"—":(e>0?"+":"")+e.toFixed(2).replace(".",",")+"h"}function ke(e){return e==null?"—":e.toFixed(2).replace(".",",")+"h"}function ds(e){return pe(({tooltip:t})=>{const n=t.dataPoints[0].dataIndex,a=e[n];if(!a)return null;const s=[{label:"Saldo",value:xe(a.saldo),klasse:fe(a.saldo)}];a.diff!=null&&s.push({label:"Tages-Diff",value:xe(a.diff),klasse:fe(a.diff)});const r=[];return a.tagestyp&&r.push(`Typ: ${bt(a.tagestyp)}`),a.umbuchung&&r.push(`Umbuchung: ${a.umbuchung>=0?"+":""}${a.umbuchung.toFixed(2).replace(".",",")}h`),{title:T(W(a.datum),"EE, dd.MM.yyyy",{locale:ee}),rows:s,meta:r}})}function bt(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function us(e,t){const n=me();if(be(e),!(t!=null&&t.length))return;const a=t.map(d=>d.monatKey),s=a.map(d=>{const[i,o]=d.split("-"),c=new Date(parseInt(i,10),parseInt(o,10)-1,1);return T(c,"MMM yyyy",{locale:ee})}),r=t.map(d=>{var i;return((i=d.glz)==null?void 0:i.saldoGesamt)??0}),l=t.map(d=>{var i;return((i=d.glz)==null?void 0:i.saldoVorperiode)??null});return new X(e,{type:"line",data:{labels:s,datasets:[{label:"GLZ-Saldo (Monatsende)",data:r,borderColor:n.accent,backgroundColor:d=>{const i=d.chart,{ctx:o,chartArea:c,scales:g}=i;return c?zn(o,c,g.y,n):ue(n.accent,.14)},segment:{borderColor:d=>{const i=d.p0.parsed.y,o=d.p1.parsed.y,c=(i+o)/2;return c>=.05?n.success:c<=-.05?n.danger:n.fgMuted}},pointBackgroundColor:r.map(d=>d>=.05?n.success:d<=-.05?n.danger:n.fgMuted),pointBorderColor:n.surface,pointBorderWidth:1,tension:.35,fill:!0,pointRadius:4,pointHoverRadius:7,pointHitRadius:20}]},options:{..._(n),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},onHover:(d,i,o)=>{const c=o.getElementsAtEventForMode(d,"index",{intersect:!1},!1);o.canvas.style.cursor=c.length>0?"pointer":"default"},onClick:(d,i,o)=>{const c=o.getElementsAtEventForMode(d,"index",{intersect:!1},!1);if(c.length>0){const g=c[0].index,h=a[g];h&&(window.location.hash=`#/kalender/${h}`)}},plugins:{..._(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:pe(({tooltip:d})=>{const i=d.dataPoints[0].dataIndex,o=r[i],c=l[i],g=[{label:"Saldo Monatsende",value:xe(o),klasse:fe(o)}];if(c!=null){const h=+(o-c).toFixed(2);g.push({label:"Vorperiode",value:xe(c),klasse:fe(c)}),g.push({label:"Bewegung",value:xe(h),klasse:fe(h)})}return{title:s[i],rows:g}})}}}})}function gs(e,t){const n=me();if(be(e),!(t!=null&&t.length))return;const a=t.map(l=>T(W(l.datum),"dd.MM.")),s=t.map(l=>l.ist??0),r=t.map(l=>vs(l.tagestyp,n));return new X(e,{type:"bar",data:{labels:a,datasets:[{label:"Ist-Stunden",data:s,backgroundColor:r,borderRadius:4,borderSkipped:!1,maxBarThickness:32,categoryPercentage:.85,barPercentage:.9}]},options:{..._(n),onHover:(l,d,i)=>{const o=i.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);i.canvas.style.cursor=o.length>0?"pointer":"default"},onClick:(l,d,i)=>{const o=i.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);if(o.length>0){const c=t[o[0].index];c!=null&&c.datum&&(window.location.hash=`#/tag/${c.datum}`)}},plugins:{..._(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:pe(({tooltip:l})=>{const d=l.dataPoints[0].dataIndex,i=t[d],o=[{label:"Ist",value:ke(i.ist),klasse:"flat"}];i.soll!=null&&o.push({label:"Soll",value:ke(i.soll),klasse:"flat"}),i.diff!=null&&o.push({label:"Diff",value:xe(i.diff),klasse:fe(i.diff)});const c=i.tagestyp?[`Typ: ${i.tagestyp}`]:[];return{title:T(W(i.datum),"EE, dd.MM.yyyy",{locale:ee}),rows:o,meta:c}})}},scales:{..._(n).scales,y:{..._(n).scales.y,suggestedMin:0,suggestedMax:10}}}})}function Nt(e,t){const n=me();if(be(e),!(t!=null&&t.length))return;const a=t.filter(o=>{var c;return((c=o.zeitSpannen)==null?void 0:c.length)&&o.zeitSpannen.some(g=>g.von&&g.bis)}).map(o=>{const c=o.zeitSpannen.filter(u=>u.von&&u.bis).map(u=>({von:te(u.von),bis:te(u.bis),vonStr:u.von,bisStr:u.bis})).filter(u=>u.von!=null&&u.bis!=null);if(c.length===0)return null;const g=Math.min(...c.map(u=>u.von)),h=Math.max(...c.map(u=>u.bis));return{...o,_spans:c,_minVon:g,_maxBis:h}}).filter(Boolean);if(!a.length)return;const s=o=>o.ist==null?n.fgMuted:o.ist>=7?n.success:n.danger,r={label:"Tages-Rahmen",data:a.map(o=>[o._minVon,o._maxBis]),backgroundColor:a.map(s),borderColor:a.map(s),borderWidth:0,borderRadius:4,borderSkipped:!1,barPercentage:.7,categoryPercentage:.9,maxBarThickness:18},l=Math.max(0,Math.floor(Math.min(...a.map(o=>o._minVon))/60)*60-60),d=Math.min(24*60,Math.ceil(Math.max(...a.map(o=>o._maxBis))/60)*60+60),i=o=>`${String(Math.floor(o/60)).padStart(2,"0")}:${String(o%60).padStart(2,"0")}`;return new X(e,{type:"bar",data:{labels:a.map(o=>T(W(o.datum),"dd.MM.")),datasets:[r]},options:{..._(n),interaction:{mode:"index",intersect:!1,axis:"x"},onHover:(o,c,g)=>{const h=g.getElementsAtEventForMode(o,"index",{intersect:!1},!1);g.canvas.style.cursor=h.length>0?"pointer":"default"},onClick:(o,c,g)=>{const h=g.getElementsAtEventForMode(o,"index",{intersect:!1},!1);if(h.length>0){const u=a[h[0].index];u!=null&&u.datum&&(window.location.hash=`#/tag/${u.datum}`)}},plugins:{legend:{display:!1},tooltip:{enabled:!1,external:pe(({tooltip:o})=>{const c=a[o.dataPoints[0].dataIndex],g=[];c.ist!=null&&g.push({label:"Ist",value:ke(c.ist),klasse:fe(c.ist-7)}),c.soll!=null&&g.push({label:"Soll",value:ke(c.soll)});const h=[`Rahmen: ${i(c._minVon)} – ${i(c._maxBis)}`];return c._spans.length>1&&c._spans.forEach((u,p)=>h.push(`Block ${p+1}: ${u.vonStr} – ${u.bisStr}`)),c.pause!=null&&h.push(`Pause: ${Math.round(c.pause*60)} min`),{title:T(W(c.datum),"EE, dd.MM.yyyy",{locale:ee}),rows:g,meta:h}})}},scales:{x:{ticks:{color:n.fgMuted,font:{size:10},maxRotation:60,minRotation:60,autoSkip:!0,maxTicksLimit:40},grid:{display:!1}},y:{min:l,max:d,ticks:{color:n.fgMuted,stepSize:60,callback:o=>i(o)},grid:{color:n.border}}}}})}function hs(e,t){const n=me();be(e);const a={};for(const l of t){if(l.tagestyp!=="Stempelzeit"||!l.zeitSpannen||l.zeitSpannen.length<2)continue;const d=$t(l.zeitSpannen);if(d<=0)continue;const i=Math.round(d*60),o=Math.floor(i/15)*15;a[o]=(a[o]??0)+1}const s=Object.keys(a).map(Number).sort((l,d)=>l-d),r=s.map(l=>a[l]);return new X(e,{type:"bar",data:{labels:s.map(l=>`${l}–${l+14} min`),datasets:[{label:"Häufigkeit",data:r,backgroundColor:n.palette[1],borderRadius:4}]},options:{..._(n),onHover:(l,d,i)=>{const o=i.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);i.canvas.style.cursor=o.length>0?"pointer":"default"},onClick:(l,d,i)=>{const o=i.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);if(o.length>0){const c=s[o[0].index];c!=null&&(window.location.hash=`#/kalender/pause/${c}`)}},plugins:{..._(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:pe(({tooltip:l})=>{const d=l.dataPoints[0].dataIndex;return{title:"Pause-Länge "+(s[d]!=null?`${s[d]}–${s[d]+14} min`:""),rows:[{label:"Häufigkeit",value:`${r[d]} Tag${r[d]===1?"":"e"}`}]}})}}}})}function fs(e,t){const n=me();be(e);const a=["MO","DI","MI","DO","FR"],s={},r={};for(const i of a)s[i]=0,r[i]=0;for(const i of t)a.includes(i.wochentag)&&(i.ist==null||i.ist===0||(s[i.wochentag]+=i.ist,r[i.wochentag]+=1));const l=a.map(i=>r[i]>0?s[i]/r[i]:0),d={id:"wochentag-datalabels",afterDatasetsDraw(i){const{ctx:o,data:c,scales:g}=i;o.save(),o.fillStyle=n.fg,o.font="600 12px system-ui",o.textAlign="center",o.textBaseline="bottom",i.getDatasetMeta(0).data.forEach((u,p)=>{const f=c.datasets[0].data[p];if(!f||f===0)return;const b=f.toFixed(2).replace(".",",")+"h";o.fillText(b,u.x,u.y-6)}),o.restore()}};return new X(e,{type:"bar",data:{labels:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"],datasets:[{label:"Ø Ist-Stunden",data:l,backgroundColor:n.palette[2],borderRadius:4,maxBarThickness:56,categoryPercentage:.7,barPercentage:.8}]},options:{..._(n),layout:{padding:{top:24}},onHover:(i,o,c)=>{const g=c.getElementsAtEventForMode(i,"nearest",{intersect:!0},!1);c.canvas.style.cursor=g.length>0?"pointer":"default"},onClick:(i,o,c)=>{const g=c.getElementsAtEventForMode(i,"nearest",{intersect:!0},!1);if(g.length>0){const h=a[g[0].index];h&&(window.location.hash=`#/kalender/wochentag/${h}`)}},plugins:{..._(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:pe(({tooltip:i})=>{const o=i.dataPoints[0].dataIndex,c=a[o];return{title:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"][o],rows:[{label:"Ø Stunden",value:ke(l[o])},{label:"Anzahl Tage",value:String(r[c]||0)}]}})}},scales:{..._(n).scales,y:{..._(n).scales.y,suggestedMax:Math.max(...l)*1.15}}},plugins:[d]})}function ms(e,t){const n=me();be(e);const a={};for(const l of t)!l.tagestyp||l.tagestyp==="Wochenende"||(a[l.tagestyp]=(a[l.tagestyp]??0)+1);const s=Object.keys(a),r=Object.values(a);return new X(e,{type:"doughnut",data:{labels:s,datasets:[{data:r,backgroundColor:s.map((l,d)=>n.palette[d%n.palette.length]),borderColor:n.surface,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,onHover:(l,d,i)=>{const o=i.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);i.canvas.style.cursor=o.length>0?"pointer":"default"},onClick:(l,d,i)=>{const o=i.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);if(o.length>0){const c=s[o[0].index];c&&(window.location.hash=`#/kalender/typ/${encodeURIComponent(c)}`)}},plugins:{legend:{position:"right",labels:{color:n.fgMuted,font:{size:12}}},tooltip:{enabled:!1,external:pe(({tooltip:l})=>{const d=l.dataPoints[0].dataIndex,i=r.reduce((c,g)=>c+g,0),o=i?r[d]/i*100:0;return{title:s[d],rows:[{label:"Anzahl",value:`${r[d]} Tag${r[d]===1?"":"e"}`},{label:"Anteil",value:o.toFixed(1).replace(".",",")+"%"}]}})}}}})}function ps(e,t){const n=me();be(e);const a={};for(const c of t){const g=c.wocheKey;a[g]??(a[g]={ist:0,soll:0,days:0,ersterTag:null,monatKey:null}),a[g].ist+=tt(c),a[g].soll+=St(c),a[g].days++,(!a[g].ersterTag||c.datum&&c.datum<a[g].ersterTag)&&(a[g].ersterTag=c.datum,a[g].monatKey=c.monatKey)}const s=Object.keys(a).sort();if(!s.length)return;const r=s.map(c=>+a[c].ist.toFixed(2)),l=s.map(c=>+a[c].soll.toFixed(2)),d=s.map(c=>{const g=a[c].ersterTag;return g?Ie(W(g)):""}),i=r.map((c,g)=>c>=l[g]+.1?n.success:c<=l[g]-.1?n.danger:n.fgMuted),o={id:"wochenstunden-soll-linie",afterDatasetsDraw(c){const{ctx:g,scales:h}=c;h.x;const u=h.y;g.save(),g.strokeStyle=n.fgSubtle||n.fgMuted,g.lineWidth=1,g.setLineDash([4,4]),g.beginPath(),c.getDatasetMeta(0).data.forEach((f,b)=>{const m=f.x,x=f.width/2+2,y=u.getPixelForValue(l[b]??35);g.moveTo(m-x,y),g.lineTo(m+x,y)}),g.stroke(),g.restore()}};return new X(e,{type:"bar",data:{labels:s.map(c=>"KW "+c.split("-")[1]),datasets:[{label:"Wochenstunden",data:r,backgroundColor:i.map(c=>ue(c,.55)),borderColor:i,borderWidth:1.5,borderRadius:4,maxBarThickness:32,categoryPercentage:.85,barPercentage:.9}]},options:{..._(n),onHover:(c,g,h)=>{const u=h.getElementsAtEventForMode(c,"nearest",{intersect:!0},!1);h.canvas.style.cursor=u.length>0?"pointer":"default"},onClick:(c,g,h)=>{var p;const u=h.getElementsAtEventForMode(c,"nearest",{intersect:!0},!1);if(u.length>0){const f=u[0].index,b=s[f],m=b?(p=a[b])==null?void 0:p.monatKey:null;b&&m?window.location.hash=`#/kalender/${m}/${b}`:b&&(window.location.hash="#/kalender")}},plugins:{..._(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:pe(({tooltip:c})=>{const g=c.dataPoints[0].dataIndex,h=s[g],u=r[g],p=l[g],f=+(u-p).toFixed(2),b=d[g];return{title:b?"KW "+h.split("-")[1]+" · "+b:"KW "+h.split("-")[1]+" · "+h.split("-")[0],rows:[{label:"Ist",value:ke(u),klasse:"flat"},{label:"Soll",value:ke(p),klasse:"flat"},{label:"Diff",value:xe(f),klasse:fe(f)}]}})}},scales:{..._(n).scales,y:{..._(n).scales.y,beginAtZero:!0,ticks:{..._(n).scales.y.ticks,callback:c=>`${c.toFixed(0)}h`}}}},plugins:[o]})}function be(e){const t=X.getChart(e);t&&t.destroy()}function bs(){if(X.instances){for(const e of Object.values(X.instances))if(e!=null&&e.canvas&&!document.body.contains(e.canvas))try{e.destroy()}catch{}}document.querySelectorAll(".saldo-tooltip").forEach(e=>e.remove())}function ue(e,t){const n=e.replace("#","").trim();if(n.length!==6&&n.length!==3)return e;const a=n.length===3?n.split("").map(d=>d+d).join(""):n,s=parseInt(a.slice(0,2),16),r=parseInt(a.slice(2,4),16),l=parseInt(a.slice(4,6),16);return`rgba(${s}, ${r}, ${l}, ${t})`}function zn(e,t,n,a){return ys(e,t,n,0,a)}function ys(e,t,n,a,s){const{top:r,bottom:l}=t,d=e.createLinearGradient(0,r,0,l),i=n.min,o=n.max,c=o-i;if(c<=0)return ue(s.success,.14);let g=(o-a)/c;return g=Math.max(0,Math.min(1,g)),d.addColorStop(0,ue(s.success,.28)),d.addColorStop(Math.max(0,g-.001),ue(s.success,.06)),d.addColorStop(Math.min(1,g+.001),ue(s.danger,.06)),d.addColorStop(1,ue(s.danger,.28)),d}function vs(e,t){const n=String(e??"").toLowerCase();return n.includes("stempel")?t.palette[0]:n.includes("berufs")?t.palette[1]:n.includes("urlaub")?t.palette[2]:n.includes("feiertag")?t.fgSubtle:n.includes("dienst")?t.palette[3]:n.includes("krank")?t.palette[4]:t.palette[5]}const Dn=[];function R(e,t){const n=e.split("/").filter(Boolean),a=[],s=new RegExp("^/?"+n.map(r=>r.startsWith(":")?(a.push(r.slice(1)),"([^/]+)"):$s(r)).join("/")+"/?$");Dn.push({pattern:e,regex:s,paramNames:a,render:t})}function ws(e){e.startsWith("#")||(e="#"+e),window.location.hash===e?le():window.location.hash=e}function xs(e,{onNavigate:t}={}){window.addEventListener("hashchange",le),le.rootEl=e,le.onNavigate=t,le()}async function le(){var a;bs();const e=le.rootEl,t=window.location.hash.slice(1)||"/",n=t.startsWith("/")?t:`/${t}`;for(const s of Dn){const r=s.regex.exec(n);if(r){const l={};s.paramNames.forEach((d,i)=>l[d]=decodeURIComponent(r[i+1])),(a=le.onNavigate)==null||a.call(le,n),ks(n);try{e.classList.remove("view-enter"),await s.render({params:l,path:n,root:e}),e.classList.add("view-enter")}catch(d){console.error("Route render error:",d),e.innerHTML=`<div class="empty-state">
          <div class="empty-state-icon">⚠</div>
          <h2>Fehler beim Anzeigen</h2>
          <p>${Ht(d.message||String(d))}</p>
        </div>`}return}}e.innerHTML=`<div class="empty-state">
    <div class="empty-state-icon">?</div>
    <h2>Seite nicht gefunden</h2>
    <p>Die Route <code>${Ht(n)}</code> existiert nicht.</p>
    <a href="#/" class="btn primary">Zum Dashboard</a>
  </div>`}function ks(e){document.querySelectorAll("[data-route]").forEach(n=>{const a=n.getAttribute("data-route"),s=a==="/"?e==="/":e===a||e.startsWith(a+"/");n.classList.toggle("active",s)});const t=e==="/"?"dashboard":e.split("/").filter(Boolean)[0];document.body.setAttribute("data-view",t||"dashboard")}function $s(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Ht(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const Ss="modulepreload",Ms=function(e){return"/better-ess/"+e},Rt={},$e=function(t,n,a){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),d=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=Promise.allSettled(n.map(i=>{if(i=Ms(i),i in Rt)return;Rt[i]=!0;const o=i.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${c}`))return;const g=document.createElement("link");if(g.rel=o?"stylesheet":Ss,o||(g.as="script"),g.crossOrigin="",g.href=i,d&&g.setAttribute("nonce",d),document.head.appendChild(g),o)return new Promise((h,u)=>{g.addEventListener("load",h),g.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})}))}function r(l){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=l,window.dispatchEvent(d),!d.defaultPrevented)throw l}return s.then(l=>{for(const d of l||[])d.status==="rejected"&&r(d.reason);return t().catch(r)})},v=new va("zeitnachweis");v.version(1).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"});v.version(2).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});v.version(3).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});v.version(4).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});v.version(5).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{const t=await e.table("profil").get("self");t&&(!t.zeitwirtschaftEmail||t.zeitwirtschaftEmail==="zeitwirtschaft@putzmeister.com")&&await e.table("profil").put({...t,zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com"})});v.version(6).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});v.version(7).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key",fahrtgeldTemplate:"id"}).upgrade(async e=>{const t=await e.table("profil").get("self");if(!t)return;let n=t.ueber18??!0;if(t.geburtsdatum){const s=new Date(t.geburtsdatum),r=new Date;n=r.getFullYear()-s.getFullYear()-(r<new Date(r.getFullYear(),s.getMonth(),s.getDate())?1:0)>=18}const a={id:"self",ueber18:n,sollStundenProWoche:t.sollStundenProWoche??35,sollStundenProTag:t.sollStundenProTag??7,berufsschulMuster:t.berufsschulMuster??{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null},zeitwirtschaftEmail:t.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:t.zeitwirtschaftAnrede||"Frau Kanarya",pausenRegel:t.pausenRegel??"auto",erstelltAm:t.erstelltAm??new Date().toISOString(),updatedAt:new Date().toISOString()};await e.table("profil").put(a)});async function zs(){try{const{erkenneBerufsschulMuster:e}=await $e(async()=>{const{erkenneBerufsschulMuster:l}=await Promise.resolve().then(()=>Hs);return{erkenneBerufsschulMuster:l}},void 0),t=await v.tage.toArray();if(!t.length)return!1;const n=e(t),a=await v.profil.get("self");if(!a)return!1;const s=a.berufsschulMuster??{};return JSON.stringify(s.wochentageWoechentlich??[])!==JSON.stringify(n.wochentageWoechentlich)||JSON.stringify(s.wochentage14Taegig??[])!==JSON.stringify(n.wochentage14Taegig)||(s.referenzDatum14Taegig??null)!==(n.referenzDatum14Taegig??null)||(s.stundenProTag??null)!==(n.stundenProTag??null)||(s.halbtags??!1)!==(n.halbtags??!1)?(await v.profil.put({...a,berufsschulMuster:n}),!0):!1}catch(e){return console.warn("[db] refreshBerufsschulMuster fehlgeschlagen:",e),!1}}async function Ds(){try{const{weekKey:e}=await $e(async()=>{const{weekKey:s}=await Promise.resolve().then(()=>cs);return{weekKey:s}},void 0),{parseISO:t}=await $e(async()=>{const{parseISO:s}=await import("./datefns-C8_rfWt_.js").then(r=>r.r);return{parseISO:s}},[]),n=await v.tage.toArray(),a=[];for(const s of n){if(!s.datum)continue;const r=e(t(s.datum));r!==s.wocheKey&&a.push({...s,wocheKey:r})}return a.length&&await v.tage.bulkPut(a),a.length}catch(e){return console.warn("[db] refreshWocheKeys fehlgeschlagen:",e),0}}async function As(){try{const e=await v.mailVorlagen.toArray(),t=e.some(a=>a.betreff&&!a.betreff.startsWith("Bitte um Zeitkorrektur im ESS")),n=e.some(a=>a.text&&!/Vielen Dank!\s*$/.test(a.text));return t||n?(await v.mailVorlagen.clear(),!0):!1}catch(e){return console.warn("[db] ensureMailVorlagenFresh fehlgeschlagen:",e),!1}}async function Ps(){const e=await v.einstellungen.get("__migration_reset");return(e==null?void 0:e.value)===!0?(await v.einstellungen.delete("__migration_reset"),!0):!1}async function ae(){return await v.profil.get("self")??An()}async function Ye(e){const t={...e,id:"self",updatedAt:new Date().toISOString()};return await v.profil.put(t),t}function An(){return{id:"self",ueber18:!0,sollStundenProWoche:35,sollStundenProTag:7,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1},zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:"Frau Kanarya",pausenRegel:"auto",erstelltAm:new Date().toISOString()}}async function Es(e,t=null){const n=await v.einstellungen.get(e);return n?n.value:t}async function Ts(e,t){await v.einstellungen.put({key:e,value:t})}async function oe(){return await v.tage.orderBy("datum").toArray()}async function Fs(e,t,n){const a=n instanceof Date?n.toISOString():typeof n=="string"&&n?n:null,s=(o,c)=>c?o?o>c:!1:!0;let r=0,l=0,d=0,i=0;if(e.length){const o=e.map(h=>h.datum),c=await v.tage.bulkGet(o),g=[];for(let h=0;h<e.length;h++){const u={...e[h],_quellStichtag:a},p=c[h];!p||s(a,p._quellStichtag)?g.push(u):l++}g.length&&(await v.tage.bulkPut(g),r=g.length)}if(t.length){const o=t.map(h=>h.monatKey),c=await v.monate.bulkGet(o),g=[];for(let h=0;h<t.length;h++){const u={...t[h],_quellStichtag:a},p=c[h];!p||s(a,p._quellStichtag)?g.push(u):i++}g.length&&(await v.monate.bulkPut(g),d=g.length)}return{tage:r,monate:d,skippedTage:l,skippedMonate:i}}async function nt(){return await v.monate.orderBy("monatKey").toArray()}async function Ls(e){return await v.uploads.add({...e,hochladeDatum:new Date().toISOString()})}async function Ne(){return await v.uploads.orderBy("hochladeDatum").last()}async function Pn(){return await v.uploads.orderBy("hochladeDatum").reverse().toArray()}async function Be(){return await v.fahrtgeldTemplate.get("self")}async function At(e){await v.fahrtgeldTemplate.put({id:"self",...e})}async function Cs(){await v.fahrtgeldTemplate.delete("self")}async function _s(){await Promise.all([v.profil.clear(),v.tage.clear(),v.monate.clear(),v.uploads.clear(),v.einstellungen.clear(),v.mailVorlagen.clear(),v.warnungDismissals.clear(),v.fahrtgeldTemplate.clear()])}async function En(){await Promise.all([v.tage.clear(),v.monate.clear(),v.uploads.clear(),v.warnungDismissals.clear()])}async function Bs(){const[e,t,n,a,s,r,l]=await Promise.all([v.profil.toArray(),v.tage.toArray(),v.monate.toArray(),v.uploads.toArray(),v.einstellungen.toArray(),v.mailVorlagen.toArray(),v.warnungDismissals.toArray()]);return{version:1,exportedAt:new Date().toISOString(),data:{profil:e,tage:t,monate:n,uploads:a,einstellungen:s,mailVorlagen:r,warnungDismissals:l}}}async function Ws(e){if(!e||e.version!==1||!e.data)throw new Error("Ungültiges oder inkompatibles Backup-Format.");const t=e.data;await v.transaction("rw",v.profil,v.tage,v.monate,v.uploads,v.einstellungen,v.mailVorlagen,v.warnungDismissals,async()=>{var n,a,s,r,l,d,i;(n=t.profil)!=null&&n.length&&await v.profil.bulkPut(t.profil),(a=t.tage)!=null&&a.length&&await v.tage.bulkPut(t.tage),(s=t.monate)!=null&&s.length&&await v.monate.bulkPut(t.monate),(r=t.uploads)!=null&&r.length&&await v.uploads.bulkPut(t.uploads),(l=t.einstellungen)!=null&&l.length&&await v.einstellungen.bulkPut(t.einstellungen),(d=t.mailVorlagen)!=null&&d.length&&await v.mailVorlagen.bulkPut(t.mailVorlagen),(i=t.warnungDismissals)!=null&&i.length&&await v.warnungDismissals.bulkPut(t.warnungDismissals)})}async function Xe(e,t){await v.mailVorlagen.put({key:e,...t})}async function Os(e){return await v.mailVorlagen.get(e)}async function at(){return await v.mailVorlagen.toArray()}async function Vs(e,t){await v.warnungDismissals.put({key:`${e}-${t}`,datum:e,typ:t,dismissedAt:new Date().toISOString()})}async function Ks(){return await v.warnungDismissals.toArray()}function Is(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
    <polyline points="10 17 15 12 10 7"/>
    <line x1="15" y1="12" x2="3" y2="12"/>
  </svg>`}function Ns(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>`}function Tn(e,t={}){const{size:n=20,layout:a="inline"}=t;return e?`
    <div class="kommen-gehen ${a}">
      <span class="kg-block kommen" title="Kommen (frühester Einstempel)">
        ${Is(n)}
        <span class="kg-zeit tabular">${e.kommen}</span>
      </span>
      <span class="kg-block gehen" title="Gehen (spätester Ausstempel)">
        ${Ns(n)}
        <span class="kg-zeit tabular">${e.gehen}</span>
      </span>
    </div>
  `:'<span class="kg-empty">—</span>'}function Fn(e){var c;const t=e.filter(g=>g.tagestyp==="Berufsschule");if(t.length<2)return{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1};const n={};for(const g of t)n[c=g.wochentag]??(n[c]=[]),n[g.wochentag].push(g);const a=[],s=[];let r=null;for(const[g,h]of Object.entries(n)){if(h.sort((f,b)=>f.datum.localeCompare(b.datum)),h.length<2)continue;const u=[];for(let f=1;f<h.length;f++)u.push(hn(W(h[f].datum),W(h[f-1].datum)));const p=jt(u);p<=10?a.push(g):p<=18&&(s.push(g),(!r||W(h[0].datum)<W(r))&&(r=h[0].datum))}const l=t.map(g=>g.ist).filter(g=>g!=null&&g>0),d=jt(l),i=d!=null?Math.round(d*4)/4:null,o=i!=null&&i<5;return{wochentageWoechentlich:a,wochentage14Taegig:s,referenzDatum14Taegig:r,stundenProTag:i,halbtags:o}}function jt(e){if(!e.length)return null;const t=e.slice().sort((a,s)=>a-s),n=Math.floor(t.length/2);return t.length%2?t[n]:(t[n-1]+t[n])/2}function st(e,t){var s,r;if(!t)return!1;const a=["SO","MO","DI","MI","DO","FR","SA"][e.getDay()];if((s=t.wochentageWoechentlich)!=null&&s.includes(a))return!0;if((r=t.wochentage14Taegig)!=null&&r.includes(a)&&t.referenzDatum14Taegig){const l=W(t.referenzDatum14Taegig),d=ma(e,l,{weekStartsOn:1});if(d>=0&&d%2===0)return!0}return!1}function Ln(e,t=null){return(e==null?void 0:e.halbtags)===!0&&(e==null?void 0:e.stundenProTag)!=null&&e.stundenProTag>0?e.stundenProTag:t}const Hs=Object.freeze(Object.defineProperty({__proto__:null,erkenneBerufsschulMuster:Fn,erwarteteBerufsschulStunden:Ln,istBerufsschulTagLautMuster:st},Symbol.toStringTag,{value:"Module"})),Fe={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function it(e,t,n,a=new Set){var g,h;const s=[],r=n??new Date,l=new Map(e.map(u=>[u.datum,u]));if(!e.length)return s;const d=W(e[0].datum),i=r,o=T(i,"yyyy-MM-dd");for(let u=new Date(d);u<=i;u=Ve(u,1)){if(Ke(u))continue;const p=T(u,"yyyy-MM-dd"),f=l.get(p),b=Mn(u,i),m=p===o,x=!f||!f.tagestyp&&!f.ist&&(((g=f.zeitSpannen)==null?void 0:g.length)??0)===0;if(!(m&&x)){if(x){if(st(u,t.berufsschulMuster)){const y=b>=4?"error":b>=2?"warn":"info";Le(s,a,{datum:p,wochentag:(f==null?void 0:f.wochentag)??Re(u),typ:"bs_tag_fehlt",schweregrad:y,titel:`Berufsschultag nicht eingetragen: ${B(u)}`,beschreibung:`Laut deinem Profil hast du am ${Fe[Re(u)]}, ${B(u)} Berufsschule. Im Zeitnachweis fehlt der Tag bisher${b>=4?" — bitte bei der Zeitwirtschaft nachhaken":""}.`,alter:b,mailVorlageKey:y==="error"?"bs_tag_fehlt":null})}else{const y=b>=4?"error":b>=2?"warn":"info";Le(s,a,{datum:p,wochentag:Re(u),typ:"stempelzeit_fehlt",schweregrad:y,titel:`Keine Stempelzeit am ${B(u)}`,beschreibung:`Am ${Fe[Re(u)]}, ${B(u)} wurde keine Stempelzeit erfasst. Falls du an diesem Tag im Haus warst, sollte die Zeitwirtschaft das nachtragen${b>=4?" — es ist inzwischen ≥4 Werktage her":""}.`,alter:b,mailVorlageKey:y==="error"?"stempelzeit_fehlt":null})}continue}if(f.tagestyp==="Berufsschule"&&f.ist!=null){const y=Ln(t.berufsschulMuster,f.soll);y!=null&&f.ist<y-.5&&Le(s,a,{datum:p,wochentag:f.wochentag,typ:"bs_stunden_falsch",schweregrad:"error",titel:`Berufsschultag mit zu wenig Stunden: ${B(u)}`,beschreibung:`Am ${Fe[f.wochentag]}, ${B(u)} sind nur ${f.ist.toFixed(2).replace(".",",")}h gebucht statt der für dich üblichen ${y.toFixed(2).replace(".",",")}h. Die Zeitwirtschaft hat den Berufsschultag möglicherweise nur halb erfasst.`,ist:f.ist,soll:y,mailVorlageKey:"bs_stunden_falsch"})}if(f.tagestyp==="Stempelzeit"&&((h=f.zeitSpannen)==null?void 0:h.length)>1&&p>=yn){const y=vn(f,t);(y==null?void 0:y.typ)==="fehler_zeitwirtschaft"&&y.unrechtmaessigerVerlustMin>=5?Le(s,a,{datum:p,wochentag:f.wochentag,typ:"pausen_abzug",schweregrad:y.unrechtmaessigerVerlustMin>=15?"error":"warn",titel:`Pausen-Abzug fehlerhaft (${B(u)})`,beschreibung:`Am ${Fe[f.wochentag]}, ${B(u)} wurden ${Math.round(y.abgezogenePause*60)} min Pause abgezogen. Gestempelt: ${Math.round(y.gestempeltePause*60)} min, gesetzlich nötig (${y.gesetz.toUpperCase()}): ${Math.round(y.gesetzlichePflicht*60)} min. Differenz von ${y.unrechtmaessigerVerlustMin} min ist unerklärlich.`,verlustMinuten:y.unrechtmaessigerVerlustMin,abgezogen:y.abgezogenePause,gestempelt:y.gestempeltePause,mailVorlageKey:"pausen_abzug"}):(y==null?void 0:y.typ)==="aufstockung_legal"&&y.aufstockungMin>=10&&Le(s,a,{datum:p,wochentag:f.wochentag,typ:"pausen_aufstockung",schweregrad:"info",titel:`Zu wenig Pause gestempelt (${B(u)}) — ${y.aufstockungMin} min automatisch aufgestockt`,beschreibung:`Am ${Fe[f.wochentag]}, ${B(u)} hast du nur ${Math.round(y.gestempeltePause*60)} min Pause gemacht. Gesetz (${y.gesetz.toUpperCase()}) schreibt ${Math.round(y.gesetzlichePflicht*60)} min vor. Fehlende ${y.aufstockungMin} min wurden als Pause gewertet — das ist legal, aber du verlierst dadurch Arbeitszeit. Tipp: mach beim nächsten Mal etwas länger Mittag.`})}}}const c={error:0,warn:1,info:2};return s.sort((u,p)=>{const f=c[u.schweregrad]-c[p.schweregrad];return f!==0?f:p.datum.localeCompare(u.datum)}),s}function Cn(e,t=new Set){var a,s,r,l;const n=[];for(const d of e){const i=((a=d.glz)==null?void 0:a.saldoVorperiode)??0,o=((s=d.glz)==null?void 0:s.saldoAktuellePeriode)??0,c=((r=d.glz)==null?void 0:r.umgebuchteStunden)??0,g=(l=d.glz)==null?void 0:l.saldoGesamt;if(g==null)continue;const h=i+o+c,u=Math.abs(g-h);if(u>.03){const p=`${d.monatKey}-saldo_plausi`;t.has(p)||n.push({datum:`${d.monatKey}-01`,wochentag:"",typ:"saldo_plausi",schweregrad:"warn",titel:`Saldo-Differenz im Monat ${d.monatKey}`,beschreibung:`Rechnung: Vorperiode ${i.toFixed(2)} + aktuelle Periode ${o.toFixed(2)} + umgebucht ${c.toFixed(2)} = ${h.toFixed(2)}, aber dein Saldo wird mit ${g.toFixed(2)} angezeigt. Abweichung: ${u.toFixed(2)}h.`,soll:h,ist:g})}}return n}function Le(e,t,n){const a=`${n.datum}-${n.typ}`;t.has(a)||(n.id=a,e.push(n))}function Re(e){return["SO","MO","DI","MI","DO","FR","SA"][e.getDay()]}const Rs={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"},We={bs_tag_fehlt:{key:"bs_tag_fehlt",titel:"Berufsschultag fehlt",beschreibung:"Wenn ein Berufsschultag komplett nicht im Zeitnachweis eingetragen wurde.",betreff:"Bitte um Zeitkorrektur im ESS  - Fehlender Berufsschultag {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

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
Vielen Dank!`}};function He(e,t){const n=We[e];return n?{...n,...t??{}}:null}function _n(e,t){const n=qt(e.text,t);return{betreff:qt(e.betreff,t),text:n}}function qt(e,t){return e.replace(/\{(\w+)\}/g,(n,a)=>t[a]!=null?String(t[a]):`{${a}}`)}function Pt(e,t){const n=t.datum?new Date(t.datum):null;return{name:"",personalnr:"",kostenstelle:"",datum:n?Mt(n).split(", ")[1]:"",wochentag:Rs[t.wochentag]??t.wochentag??"",zeitwirtschaft_anrede:e.zeitwirtschaftAnrede||"Frau Kanarya",zeitwirtschaft_email:e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",ist:t.ist!=null?t.ist.toFixed(2).replace(".",","):"",soll:t.soll!=null?t.soll.toFixed(2).replace(".",","):"",abgezogen:t.abgezogen!=null?Math.round(t.abgezogen*60):"",gestempelt:t.gestempelt!=null?Math.round(t.gestempelt*60):"",verlust:t.verlustMinuten??""}}function Et(e,t,n){const a=_n(t,n),s=e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",r=new URLSearchParams;return r.set("subject",a.betreff),r.set("body",a.text),`mailto:${s}?${r.toString().replace(/\+/g,"%20")}`}let js=0;function Y(e,{type:t="info",duration:n=3500}={}){const a=document.getElementById("toast-root");if(!a)return;const s=document.createElement("div");s.className=`toast ${t}`,s.textContent=e,s.dataset.id=++js,a.appendChild(s),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateY(-8px)",s.style.transition="opacity 220ms, transform 220ms",setTimeout(()=>s.remove(),250)},n)}function Qe(e){return Y(e,{type:"error",duration:6e3})}function O(e){return Y(e,{type:"success"})}const qs=3,Zs=2.5,Gs={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function rt(e,t={}){if(!(e!=null&&e.length))return'<p style="color: var(--fg-muted);">Keine Tage im Zeitraum.</p>';const n=new Map;for(const r of t.warnungen??[])n.has(r.datum)||n.set(r.datum,[]),n.get(r.datum).push(r);const a=[];let s=null;for(const r of e)(!s||s.key!==r.wocheKey)&&(s={key:r.wocheKey,tage:[]},a.push(s)),s.tage.push(r);return`<div class="tages-liste">${a.map(r=>Us(r,n)).join("")}</div>`}function Us(e,t){var c;const n=e.tage.reduce((g,h)=>g+tt(h),0),a=e.tage.reduce((g,h)=>g+(h.diff??0),0),s=(c=e.tage[0])==null?void 0:c.datum,r=s?Ie(W(s)):"",l=e.key?e.key.split("-")[1]:"?",d=a>.05?"pos":a<-.05?"neg":"flat",i=(a>0?"+":"")+a.toFixed(2).replace(".",",")+"h",o=n.toFixed(2).replace(".",",")+"h";return`
    <div class="woche-group">
      <div class="woche-header">
        <div class="woche-header-titel">
          <span class="woche-header-kw">KW ${$(l)}</span>
          <span class="woche-header-range tabular">${$(r)}</span>
        </div>
        <div class="woche-header-stats">
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Ist</span>
            <span class="woche-header-ist tabular">${o}</span>
          </span>
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Diff</span>
            <span class="woche-header-diff tabular ${d}">${i}</span>
          </span>
        </div>
      </div>
      <div class="woche-tage">
        ${e.tage.map(g=>Js(g,(t==null?void 0:t.get(g.datum))??[])).join("")}
      </div>
    </div>
  `}function Js(e,t=[]){const n=e.diff??0,a=n>0,s=a?qs:Zs,r=Math.min(150,Math.abs(n)/s*50),l=a?"var(--success)":n<0?"var(--danger)":"var(--fg-subtle)",d=bn(e.zeitSpannen),i=e.saldo??0,o=t.length>0,c=o?Xs(t):"",g=o?t.map(u=>`${u.titel}${u.beschreibung?`
`+u.beschreibung:""}`).join(`

`):"",h=o?t[0].schweregrad:null;return`
    <a href="#/tag/${e.datum}" class="tag-row${o?" has-warn severity-"+h:""}">
      <div class="tag-row-datum">
        <div class="tabular">${$(B(new Date(e.datum)))}</div>
        <div class="tag-row-wd">${Ys(e.wochentag)}</div>
      </div>
      <div class="tag-row-warn-cell" aria-hidden="${o?"false":"true"}">
        ${o?`<span class="tag-row-warn severity-${h}" title="${$(g)}">${c}${t.length>1?" "+t.length:""}</span>`:""}
      </div>
      <div class="tag-row-typ">
        ${e.tagestyp?`<span class="pill ${Qs(e.tagestyp)}">${$(e.tagestyp)}</span>`:'<span style="color: var(--fg-subtle); font-size: 12px;">—</span>'}
      </div>
      <div class="tag-row-kg">
        ${Tn(d,{size:18})}
      </div>
      <div class="tag-row-ist tabular">
        ${(()=>{if(e.ist==null)return'<div class="ist-wert">—</div>';const u=Je(e.ist),[p,f]=u.split(":");return e.ist<=0?`<div class="ist-wert">${u}</div>`:`<div class="ist-display" title="Klick auf H oder M zum Kopieren">
            <button class="ist-part" data-val="${p}" title="${p} Stunden kopieren">${p}</button><span class="ist-sep">:</span><button class="ist-part" data-val="${f}" title="${f} Minuten kopieren">${f}</button>
          </div>`})()}
        <div style="color: var(--fg-subtle); font-size: 11px;">Soll ${e.soll!=null?Je(e.soll):"—"}</div>
      </div>
      <div class="tag-row-bar">
        <div class="bar-track">
          <div class="bar-zero"></div>
          <div class="bar-fill ${a?"pos":"neg"}" style="width: ${r}%; background: ${l};"></div>
        </div>
      </div>
      <div class="tag-row-diff tabular" style="color: ${a?"var(--success)":n<0?"var(--danger)":"var(--fg-muted)"};">
        ${n!==0?(a?"+":"")+n.toFixed(2).replace(".",",")+"h":"0,00h"}
      </div>
      <div class="tag-row-saldo tabular" title="Gesamt-Saldo nach diesem Tag" style="color: var(--fg-muted); font-size: 12px; text-align: right; line-height: 1.15;">
        <div>${i>=0?"+":""}${i.toFixed(2).replace(".",",")}h</div>
        <div style="color: var(--fg-subtle); font-size: 10px; font-weight: 500; letter-spacing: 0.02em;">Saldo nach Tag</div>
      </div>
    </a>
  `}function Ys(e){return Gs[e]??e}function Xs(e){const t={error:3,warn:2,info:1};let n=e[0];for(const a of e)(t[a.schweregrad]||0)>(t[n.schweregrad]||0)&&(n=a);return n.schweregrad==="error"?"!":n.schweregrad==="warn"?"⚠":"i"}function Qs(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function Tt(e){e._istCopyAttached||(e._istCopyAttached=!0,e.addEventListener("click",async t=>{const n=t.target.closest(".ist-part");if(!n)return;t.preventDefault(),t.stopPropagation();const a=n.getAttribute("data-val");try{await navigator.clipboard.writeText(a),n._copyResetTimer&&clearTimeout(n._copyResetTimer),n.classList.add("ok"),n.textContent="✓",n._copyResetTimer=setTimeout(()=>{n.classList.remove("ok"),n.textContent=a,n._copyResetTimer=null},800)}catch{O(`Bitte kopieren: ${a}`)}}))}const ei=[{key:7,label:"1 Woche"},{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:180,label:"6 Monate"},{key:365,label:"1 Jahr"},{key:730,label:"2 Jahre"},{key:"alles",label:"Alles"}];function ti(e){return ei.filter(t=>t.key==="alles"||t.key<e)}async function Zt({root:e}){const[t,n,a,s,r,l,d]=await Promise.all([ae(),nt(),oe(),Ks(),Es("dashboardZeitraum",14),at(),Ne()]),i=Object.fromEntries(l.map(S=>[S.key,S]));if(a.length===0){e.innerHTML=ai();return}const o=wn(a,n),c=o.length,g=ti(c);let h=r;g.some(S=>S.key===h)||(h="alles");const u=new Set(s.map(S=>S.key)),p=d!=null&&d.stichtagAuswertung?new Date(d.stichtagAuswertung):new Date,f=it(a,t,p,u),b=Cn(n,u),m=[...f,...b],x=Qa(o),y=x>.05?"positive":x<-.05?"negative":"";e.innerHTML=`
    <h1 class="view-title">Dashboard</h1>
    <p class="view-subtitle">Stand: ${et(B(new Date(a[a.length-1].datum)))}</p>

    <div class="saldo-hero" style="margin-bottom: 32px; align-items: stretch;">
      <div class="saldo-hero-text" style="min-width: 260px;">
        <h3>Aktueller Gleitzeit-Saldo</h3>
        <div class="saldo-value ${y}">${he(x,{signed:!0,suffix:""})}</div>
        <div class="saldo-unit">Stunden · tagesaktuell</div>
        <div id="hero-bewegung" class="saldo-trend flat" style="margin-top: 12px;"></div>
      </div>
      <div style="flex: 1; min-width: 400px; display: flex; flex-direction: column;">
        <div class="card-split" style="margin-bottom: 12px; align-items: center;">
          <h3 style="margin: 0;">Saldo-Verlauf</h3>
          <div class="segmented" id="zeitraum-picker">
            ${g.map(S=>`<button type="button" data-key="${S.key}" class="${h===S.key?"active":""}">${S.label}</button>`).join("")}
          </div>
        </div>
        <div style="flex: 1; height: 220px;"><canvas id="saldo-chart"></canvas></div>
      </div>
    </div>

    ${m.length>0?`
      <div class="card" style="margin-bottom: 32px;">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Offene Warnungen</h2>
        </div>
        ${m.slice(0,8).map(S=>ni(S,t,i)).join("")}
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
          ${g.map(S=>`<button type="button" data-key="${S.key}" class="${h===S.key?"active":""}">${S.label}</button>`).join("")}
        </div>
      </div>
      <div id="tage-liste"></div>
    </div>

  `,Gt(h,e,o,m);const P=()=>e.querySelectorAll("#zeitraum-picker button, #zeitraum-picker-2 button");P().forEach(S=>{S.addEventListener("click",async()=>{if(S.disabled)return;const E=S.getAttribute("data-key"),K=E==="alles"?"alles":parseInt(E,10);P().forEach(M=>M.classList.toggle("active",M.getAttribute("data-key")===E)),await Ts("dashboardZeitraum",K),Gt(K,e,o,m)})}),e.addEventListener("click",async S=>{const E=S.target.closest(".ist-part");if(E){S.preventDefault(),S.stopPropagation();const w=E.getAttribute("data-val");try{await navigator.clipboard.writeText(w),E._copyResetTimer&&clearTimeout(E._copyResetTimer),E.classList.add("ok"),E.textContent="✓",E._copyResetTimer=setTimeout(()=>{E.classList.remove("ok"),E.textContent=w,E._copyResetTimer=null},800)}catch{O(`Bitte kopieren: ${w}`)}return}const K=S.target.closest(".btn-dismiss");if(!K)return;const M=K.getAttribute("data-datum"),F=K.getAttribute("data-typ");if(!M||!F)return;await Vs(M,F),O("Warnung ausgeblendet.");const k=K.closest(".alert");k&&(k.style.display="none")})}function Gt(e,t,n,a=[]){const s=Xa(n,e),r=es(s);requestAnimationFrame(()=>{const o=t.querySelector("#saldo-chart");Dt(o,s)});const l=t.querySelector("#hero-bewegung");if(l){const o=r>.05?"up":r<-.05?"down":"flat",c=r>.05?"↑":r<-.05?"↓":"→";l.className=`saldo-trend ${o}`,l.innerHTML=`${c} ${Math.abs(r)<.01?"Unverändert":he(r,{signed:!0})} im Zeitraum`}const d=t.querySelector("#tage-info");if(d){const o=s.length;d.textContent=`${o} ${o===1?"Tag":"Tage"}`}const i=t.querySelector("#tage-liste");i&&(i.innerHTML=rt(s.slice().reverse(),{warnungen:a.filter(o=>s.some(c=>c.datum===o.datum))}))}function ni(e,t,n){const a=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";let s=null;if(e.mailVorlageKey&&t){const r=He(e.mailVorlageKey,n==null?void 0:n[e.mailVorlageKey]);if(r){const l=Pt(t,e);s=Et(t,r,l)}}return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${a}</div>
      <div class="alert-body">
        <div class="alert-title">${et(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${et(e.beschreibung)}</p>
        <div class="alert-actions">
          ${s?`<a href="${ut(s)}" class="btn-mail-medium"><img src="outlook-logo.png" alt="" class="outlook-logo-medium" />E-Mail</a>`:""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
          <button class="btn ghost sm btn-dismiss" data-datum="${ut(e.datum)}" data-typ="${ut(e.typ)}">Ausblenden</button>
        </div>
      </div>
    </div>
  `}function ai(){return`
    <div class="empty-state" style="margin-top: 80px;">
      <p class="hint" style="margin-bottom: 18px;">Noch keine Daten geladen.</p>
      <a href="#/daten" class="btn primary">Zum Upload →</a>
      <p class="hint" style="margin-top: 24px; font-size: 12px;">Tipp: Tour erneut starten unter <a href="#/daten" style="color: var(--accent);">Daten</a> ganz unten.</p>
    </div>
  `}function et(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function ut(e){return et(e)}const Bn="/better-ess/assets/pdf.worker.min-yatZIOMy.mjs";fn.workerSrc=Bn;const Ut={Januar:1,Februar:2,März:3,Maerz:3,April:4,Mai:5,Juni:6,Juli:7,August:8,September:9,Oktober:10,November:11,Dezember:12},si=["Stempelzeit","Berufsschule Std. bez","Berufsschule","Dienstreise Arbeitszeit","Reise öff.VM/PKW Beifahr.","Reise öff.VM/PKW","Urlaub","Gleitzeit","Arbeitsunfähigkeit","TgDtEinh","Neujahr","Karfreitag","Ostermontg","Ostmontg","Osterso.","Hl.3 Kön.","Allerhlg","Pfingstmo","Fronleichn","TdDtEinh"];async function ii(e){var i,o;const n=await mn({data:e}).promise,a=[];let s=0;for(let c=1;c<=n.numPages;c++){const h=await(await n.getPage(c)).getTextContent();s+=h.items.length;const u=ri(h.items);for(const p of u)a.push({page:c,text:p})}const r=li(a),{tage:l,monate:d}=oi(a);try{const c=await n.getMetadata();r.producer=((i=c==null?void 0:c.info)==null?void 0:i.Producer)??null,r.creator=((o=c==null?void 0:c.info)==null?void 0:o.Creator)??null}catch{}return r.totalTextItems=s,{meta:r,tage:l,monate:d}}function ri(e){if(!e.length)return[];const t=e.slice().sort((l,d)=>{const i=d.transform[5]-l.transform[5];return Math.abs(i)>2?i:l.transform[4]-d.transform[4]}),n=[];let a=null,s=[];const r=3;for(const l of t){const d=l.transform[5];a==null||Math.abs(d-a)<=r?(s.push(l),a==null&&(a=d)):(n.push(Jt(s)),s=[l],a=d)}return s.length&&n.push(Jt(s)),n.filter(l=>l.trim().length>0)}function Jt(e){e.sort((a,s)=>a.transform[4]-s.transform[4]);let t="",n=-1;for(const a of e){const s=a.transform[4];n>=0&&s-n>4?t+="  ":n>=0&&s-n>.5&&(t+=" "),t+=a.str,n=s+a.width}return t}function li(e){var n,a;const t={personalnummer:null,name:null,kostenstelle:null,personalbereich:null,einstellungsdatum:null,mitarbeiterkreis:null,arbeitszeitplanregel:null,zeitraumVon:null,zeitraumBis:null,stichtagAuswertung:null};for(let s=0;s<e.length;s++){const r=e[s].text,l=/vom\s+(\d{2}\.\d{2}\.\d{4})\s+bis\s+(\d{2}\.\d{2}\.\d{4})/i.exec(r);l&&(t.zeitraumVon=ze(l[1]),t.zeitraumBis=ze(l[2]));const d=/bis einschließlich dem\s+(\d{2}\.\d{2}\.\d{4})/i.exec(r);if(d&&(t.stichtagAuswertung=ze(d[1])),/Personalnummer/i.test(r)&&/Kostenstelle/i.test(r)){const i=(((n=e[s+1])==null?void 0:n.text)??"").trim();let o=i.split(/\s{2,}/);o.length<3&&(o=i.split(/\s+/)),o.length>=3&&/^\d/.test(o[0])&&(t.personalnummer=o[0],t.kostenstelle=o[1],t.personalbereich=o[2])}if(/Einstellungsdatum/i.test(r)&&/Mitarbeiterkreis/i.test(r)){const i=(((a=e[s+1])==null?void 0:a.text)??"").trim();let o=i.split(/\s{2,}/);o.length<3&&(o=i.split(/\s+/)),o.length>=3&&/^\d{2}\.\d{2}\.\d{4}$/.test(o[0])&&(t.einstellungsdatum=ze(o[0]),t.mitarbeiterkreis=o[1],t.arbeitszeitplanregel=o[2])}if(/Bei Rückfragen wenden Sie sich an/i.test(r))for(let i=s+1;i<Math.min(s+8,e.length);i++){const o=e[i].text.trim();if(/^[A-ZÄÖÜ][a-zäöüß]+(?:\s[A-ZÄÖÜ][a-zäöüß]+)+$/.test(o)&&!/kanarya/i.test(o)&&!/tel/i.test(o)){t.name=o;break}}}return t}function oi(e,t){var i;const n=[],a=[];let s=null,r=null,l=!1,d=0;for(;d<e.length;){const o=e[d].text,c=/Monat:\s*([A-Za-zäöüÄÖÜß]+)\s*-\s*(\d{4})/.exec(o);if(c){const p=c[1].trim(),f=parseInt(c[2],10),b=Ut[p]??Ut[p.replace("ä","ae")]??null;b&&(s={jahr:f,monat:b,monatKey:`${f}-${String(b).padStart(2,"0")}`},l=!0,r=null),d++;continue}if(/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.test(o)){const p=/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.exec(o),f=ze(p[1]);r={monatKey:(s==null?void 0:s.monatKey)??zt(f),stichtag:f,glz:{},flexi:{},zeitkonten:{},raw:{}},d=ci(e,d+1,r),a.push(r);continue}let g=s;const h=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)\b/.exec(o.trim());if(h&&s){const p=parseInt(h[1],10);l&&p>=20?g=gi(s):p<=15&&(l=!1)}const u=Yt(o,g);if(u){const p=[];let f=d+1;for(;f<e.length;){const m=e[f].text;if(/^\s*\d{4}\s+Umbuchung/.test(m)||Yt(m,s)||/Wochensumme/i.test(m)||/Monats.bersicht/i.test(m)||/Monat:\s*[A-Za-z]/i.test(m))break;const x=di(m);if(x){p.push(x),f++;continue}break}if(p.length&&u.zeitSpannen.push(...p),u.tagestyp==="Wochenende"||u.wochentag==="SA"||u.wochentag==="SO"){d=f;continue}(u.ist!=null||u.soll!=null||(((i=u.zeitSpannen)==null?void 0:i.length)??0)>0||u.tagestyp!=null)&&n.push(u),d=f;continue}d++}return{tage:n,monate:a}}function ci(e,t,n){let a=t;const s=/(\d{4,5}|KTAU|AZAU)\s*-\s*(.+?)\s+(-?[\d,.]+-?)(?=\s+(?:\d{4,5}|KTAU|AZAU)\s*-|\s*$)/g;for(;a<e.length;){const r=e[a].text.trim();if(/^Monat:\s/.test(r)||/^Einzelergebnisse\s/.test(r)||/^Tag\b/.test(r)||/^Wochensumme/.test(r)||/^\d{2}\s+(MO|DI|MI|DO|FR|SA|SO)\b/.test(r)||/^Übersicht für den Zeitraum/i.test(r)||/^Abwesenheitsansprüche/i.test(r))break;s.lastIndex=0;let l;for(;(l=s.exec(r))!=null;){const d=l[1],i=l[2].trim(),o=pn(l[3]);n.raw[d]={beschreibung:i,wert:o},d==="0008"&&(n.glz.saldoVorperiode=o),d==="8016"&&(n.glz.saldoAktuellePeriode=o),d==="9802"&&(n.glz.umgebuchteStunden=o),d==="0005"&&(n.glz.saldoGesamt=o),d==="9803"&&(n.glz.ueberzaehligeStd=o),d==="0050"&&(n.zeitkonten.produktivstunden=o),d==="9011"&&(n.flexi.jahreskontoVorperiode=o),d==="9010"&&(n.flexi.jahreskontoSaldo=o),d==="9020"&&(n.flexi.langzeitkontoSaldo=o),d==="9203"&&(n.zeitkonten.azMonatsendeUeber216=o),d==="9207"&&(n.zeitkonten.auszahlungBav=o),d==="9205"&&(n.zeitkonten.summeAuszahlung=o)}if(a++,a-t>80)break}return a}function Yt(e,t){if(!t)return null;const n=e.trim(),a=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)(?:\s+(.+))?$/.exec(n);if(!a)return null;const s=parseInt(a[1],10),r=a[2],l=(a[3]??"").trim();let d=t.jahr,i=t.monat;const o=new Date(d,i-1,s),c={datum:Sn(o),datumDate:o.toISOString(),wochentag:r,tagNr:s,monatKey:zt(o),wocheKey:$n(o),zeitSpannen:[],aktivitaeten:[],ist:null,soll:null,diff:null,pause:null,tazp:null,tagestyp:null,raw:n};return l?(ui(l,c),c):(c.tagestyp=["SA","SO"].includes(r)?"Wochenende":null,c)}function di(e){const t=e.trim(),n=/^(Stempelzeit|Reise öff\.VM\/PKW Beifahr\.|Reise öff\.VM\/PKW|Dienstreise Arbeitszeit)\s+(\d{2}:\d{2})\s+(\d{2}:\d{2})\s*$/.exec(t);return n?{aktivitaet:n[1],von:n[2],bis:n[3]}:null}function ui(e,t){let n=null,a=e;for(const c of si)if(e.startsWith(c)){n=c,a=e.slice(c.length).trim();break}n||(n=e.split(/\s+/)[0],a=e.slice(n.length).trim()),t.tagestyp=hi(n),t.aktivitaeten.push(n);const s=a.split(/\s+/).filter(Boolean),r=/^\d{2}:\d{2}$/,l=/^-?[\d,.]+-?$/;let d=0;for(;s[d]&&r.test(s[d])&&s[d+1]&&r.test(s[d+1]);)t.zeitSpannen.push({aktivitaet:n,von:s[d],bis:s[d+1]}),d+=2;const i=[];for(;d<s.length&&l.test(s[d]);){const c=pn(s[d]);c!=null&&i.push(c),d++}let o=s[d];i.length>=5?([t.ist,t.soll,t.diff,t.pause]=i,o||(o=String(i[4]))):i.length===4?[t.ist,t.soll,t.diff,t.pause]=i:i.length===3?[t.ist,t.soll,t.diff]=i:i.length===2?[t.ist,t.soll]=i:i.length===1&&(t.ist=i[0]),o&&(t.tazp=String(o))}function gi(e){if(!e)return null;let t=e.monat-1,n=e.jahr;return t<1&&(t=12,n-=1),{jahr:n,monat:t,monatKey:`${n}-${String(t).padStart(2,"0")}`}}function hi(e){return e?/^Stempelzeit$/i.test(e)?"Stempelzeit":/^Berufsschule Std\. bez$/i.test(e)||/^Berufsschule$/i.test(e)?"Berufsschule":/Dienstreise/i.test(e)||/Reise/i.test(e)?"Dienstreise":/^Urlaub$/i.test(e)?"Urlaub":/^Gleitzeit$/i.test(e)?"Gleitzeit":/Arbeitsunf.higkeit/i.test(e)?"Arbeitsunfähigkeit":/^(Neujahr|Karfreitag|Ostermontg|Ostmontg|Osterso\.|Hl\.3 Kön\.|Allerhlg|Pfingstmo|Fronleichn|TdDtEinh|TgDtEinh)$/i.test(e)?"Feiertag":e:null}function ne(e,t={}){const{title:n="Bestätigen",confirmLabel:a="Bestätigen",cancelLabel:s="Abbrechen",variant:r="default"}=t;return fi({message:e,title:n,confirmLabel:a,cancelLabel:s,variant:r,kind:"confirm"})}function fi({message:e,title:t,confirmLabel:n,cancelLabel:a,variant:s,kind:r}){return new Promise(l=>{const d=document.activeElement,i=document.createElement("div");i.className="app-dialog-overlay",i.innerHTML=`
      <div class="app-dialog" role="dialog" aria-modal="true" aria-labelledby="app-dialog-title">
        <h3 id="app-dialog-title" class="app-dialog-title">${qe(t)}</h3>
        <div class="app-dialog-message">${mi(e)}</div>
        <div class="app-dialog-actions">
          ${`<button class="btn ghost app-dialog-cancel" type="button">${qe(a)}</button>`}
          <button class="btn primary app-dialog-confirm ${s==="danger"?"is-danger":""}" type="button">${qe(n)}</button>
        </div>
      </div>
    `,document.body.appendChild(i),requestAnimationFrame(()=>i.classList.add("is-open"));const o=i.querySelector(".app-dialog-confirm"),c=i.querySelector(".app-dialog-cancel"),g=u=>{i.classList.remove("is-open"),setTimeout(()=>{if(i.remove(),document.removeEventListener("keydown",h),d&&d.focus)try{d.focus()}catch{}l(u)},180)},h=u=>{u.key==="Escape"?(u.preventDefault(),g(!1)):u.key==="Enter"&&(u.preventDefault(),g(!0))};o==null||o.addEventListener("click",()=>g(!0)),c==null||c.addEventListener("click",()=>g(!1)),i.addEventListener("click",u=>{u.target===i&&g(!1)}),document.addEventListener("keydown",h),setTimeout(()=>o==null?void 0:o.focus(),50)})}function qe(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function mi(e){return qe(e).replace(/\n/g,"<br>")}const Wn="better-ess-tour-completed",Ft=typeof import.meta<"u"?"/better-ess/":"/",pi=Ft+"tutorial/speichern.png",bi=Ft+"tutorial/download.png",yi=Ft+"tutorial/zeitraum.png",De=[{type:"modal",hero:!0,icon:"👋",title:"Willkommen bei Better ESS",text:"Diese App liest deinen <strong>Zeitnachweis</strong> und macht ihn auf einen Blick verständlich.<br><br>Sie <strong>warnt dich automatisch</strong> bei fehlenden Tagen, falschen Berufsschul-Stunden oder unrechtmäßigem Pausen-Abzug. Du kannst deine <strong>monatliche Fahrgelderstattungs-Excel</strong> auf Knopfdruck generieren und <strong>Korrektur-Mails an die Zeitwirtschaft</strong> mit einem Klick verschicken — Empfänger, Betreff und Text sind schon vorbefüllt."},{type:"modal",hero:!0,icon:"🔒",title:"Deine Daten bleiben bei dir",text:"Dein PDF geht <strong>nicht ins Internet</strong>.<br><br>Alles läuft lokal in deinem Browser — wie eine Notizen-App. Kein Upload, kein Server, kein Konto."},{type:"highlight",target:'a[href="#/daten"]',icon:"📂",title:"Hier startet alles",text:"Hier lädst du deinen Zeitnachweis hoch.",placement:"right",autoClick:!0,onAfterClick:async()=>{window.location.hash!=="#/daten"&&(window.location.hash="#/daten"),await Ze("#upload-zone",1500)}},{type:"download-modal",icon:"📥",title:'1. Im ESS auf „Zeitnachweis herunterladen" klicken',image:bi,points:[{kind:"good",icon:"✓",text:"Den Button findest du unten rechts in der ESS-Zeitbuchungs-Ansicht."}]},{type:"download-modal",icon:"📅",title:'2. „Anderer Zeitraum" wählen — möglichst groß',image:yi,points:[{kind:"good",icon:"✓",text:'Wähle <strong>„Anderer Zeitraum"</strong> und nimm einen möglichst großen Bereich (am besten Ausbildungsstart bis heute) — die App nutzt alle Daten für Saldo-Verlauf und Trends.'},{kind:"bad",icon:"✕",text:'Nicht „Aktuelle Woche" oder „Aktueller Monat" — dann fehlen Verlaufs-Daten.'}]},{type:"download-modal",icon:"💾",title:'3. Im PDF-Viewer auf „Speichern" — nicht „Drucken"',image:pi,points:[{kind:"good",icon:"✓",text:"<strong>Speichern-Button</strong> (Disketten-Symbol oben rechts in der PDF-Toolbar) — speichert eine echte Text-PDF."},{kind:"bad",icon:"✕",text:'<strong>NICHT</strong> „Drucken → Microsoft Print to PDF" — dabei werden Texte als Pfade gerendert und sind nicht lesbar.'}]},{type:"highlight",target:"#upload-zone",icon:"📥",title:"Lade jetzt dein PDF hoch",text:"Zieh dein Zeitnachweis-PDF auf die Box (oder klick sie an). Erst nach dem Upload geht die Tour weiter.",placement:"top",waitForTarget:!0,waitForEvent:"better-ess:pdf-uploaded"},{type:"modal",icon:"✨",title:"Geschafft!",text:"Dein PDF ist eingelesen. Jetzt zeig ich dir die Funktionen — anhand deiner echten Daten.",onNext:async()=>{window.location.hash="#/",await Ze(".saldo-value",1500)}},{type:"highlight",target:".saldo-value",icon:"⚖️",title:"Dein aktueller Saldo",text:"Plus oder Minus auf einen Blick. Tagesaktuell.",placement:"right",waitForTarget:!0},{type:"highlight",target:"#saldo-chart",icon:"📈",title:"Saldo-Verlauf",text:"Hover über die Punkte für Details. Zeitraum oben rechts umschaltbar.",placement:"top",waitForTarget:!0},{type:"highlight",target:".tag-row .ist-display",icon:"⏱️",title:"Stunden direkt kopieren",text:"Klick auf <strong>H</strong> oder <strong>M</strong> — kopiert den Wert in deine Zwischenablage. Praktisch fürs IHK-Berichtsheft.",placement:"left",waitForTarget:!0},{type:"highlight",target:".alert",icon:"⚠️",title:"Auffälligkeiten",text:"Fehlende Tage, falsche BS-Stunden, Pausen-Abzug — alles automatisch erkannt.",placement:"left",optional:!0,waitForTarget:!0,timeoutMs:1200},{type:"highlight",target:'a[href="#/profil"]',icon:"👤",title:"Profil",text:"Über 18? Pausen-Regel und Mail-Empfänger anpassen.",placement:"right"},{type:"highlight",target:'a[href="#/fahrtgeld"]',icon:"🚌",title:"Fahrgelderstattung",text:"Hier generierst du deine monatliche Fahrgeld-Excel mit deinen erkannten Berufsschultagen.",placement:"right",autoClick:!0,onAfterClick:async()=>{window.location.hash!=="#/fahrtgeld"&&(window.location.hash="#/fahrtgeld"),await Ze("#fahrtgeld-dropzone, #btn-template-replace, .fahrtgeld-generate-card",2e3)}},{type:"highlight",target:"#fahrtgeld-dropzone, .fahrtgeld-generate-card",icon:"📥",title:"Vorlage einmalig hochladen",text:'Eine bestehende Fahrgeld-Excel hier hochladen — Name, Personalnummer, Haltestellen und Tagessatz werden automatisch ausgelesen. Tour wartet auf den Upload (oder oben auf „Überspringen", um die Tour zu beenden).',placement:"top",waitForTarget:!0,timeoutMs:2500,waitForEvent:"better-ess:fahrgeld-template-uploaded"},{type:"highlight",target:".btn-generate-big",icon:"✅",title:"Excel generieren",text:"Monat unten auswählen, dann hier klicken. Du bekommst eine fertig ausgefüllte Excel zum Download — mit deinen Berufsschultagen, Datum und Unterschrift.",placement:"bottom",waitForTarget:!0,timeoutMs:1500,optional:!0},{type:"highlight",target:".btn-mail-big",icon:"✉️",title:"E-Mail an die Personalabteilung",text:"Öffnet Outlook mit fertig vorausgefülltem Empfänger, Betreff und Text. Excel-Anhang aus dem Download-Ordner musst du noch manuell dranhängen.",placement:"bottom",waitForTarget:!0,timeoutMs:1500,optional:!0},{type:"modal",icon:"🚀",title:"Bereit!",text:"Du kennst alle Funktionen. Tour erneut starten? Button am Ende der <strong>Daten</strong>-Seite."}],Xt=De.findIndex(e=>e.icon==="✨");let C=null,we=null;function On(){C===null&&(Lt(),C={idx:0},re())}function vi(e){return e?!1:!localStorage.getItem(Wn)}function wi(){localStorage.setItem(Wn,"1")}function xi(){return C!==null}function Lt(){document.querySelectorAll(".tour-blur-frame, .tour-popover, .tour-pointer, .tour-highlight-border").forEach(e=>e.remove()),we&&(we(),we=null),C=null}function je(e){const t=document.querySelector(".tour-blur-frame.full"),n=[document.querySelector('.tour-blur-frame[data-side="top"]'),document.querySelector('.tour-blur-frame[data-side="left"]'),document.querySelector('.tour-blur-frame[data-side="right"]'),document.querySelector('.tour-blur-frame[data-side="bottom"]')];if(!e){n.forEach(b=>{b&&(b.style.opacity="0")});let u=t;!u?(u=document.createElement("div"),u.className="tour-blur-frame full",document.body.appendChild(u)):u.style.opacity="1";const f=document.querySelector(".tour-highlight-border");f&&(f.style.opacity="0");return}t&&(t.style.opacity="0");const a=e.getBoundingClientRect(),s=8,r=Math.max(0,a.left-s),l=Math.max(0,a.top-s),d=a.width+s*2,i=a.height+s*2,o=window.innerWidth,c=window.innerHeight,g={top:{top:0,left:0,width:o,height:l},left:{top:l,left:0,width:r,height:i},right:{top:l,left:r+d,width:o-(r+d),height:i},bottom:{top:l+i,left:0,width:o,height:c-(l+i)}};for(const[u,p]of Object.entries(g)){let f=n[Object.keys(g).indexOf(u)];f||(f=document.createElement("div"),f.className="tour-blur-frame",f.dataset.side=u,document.body.appendChild(f)),f.style.top=p.top+"px",f.style.left=p.left+"px",f.style.width=Math.max(0,p.width)+"px",f.style.height=Math.max(0,p.height)+"px",f.style.opacity=p.width<=0||p.height<=0?"0":"1"}let h=document.querySelector(".tour-highlight-border");h||(h=document.createElement("div"),h.className="tour-highlight-border",document.body.appendChild(h)),h.style.top=l+"px",h.style.left=r+"px",h.style.width=d+"px",h.style.height=i+"px",h.style.opacity="1",h.style.display=""}function Ct(){let e=document.querySelector(".tour-pointer");return e||(e=document.createElement("div"),e.className="tour-pointer",e.innerHTML=`
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
      </svg>`,e.style.top=window.innerHeight/2+"px",e.style.left=window.innerWidth/2+"px",document.body.appendChild(e)),e}function ki(e){const t=Ct(),n=e.getBoundingClientRect(),a=n.left+n.width*.5,s=n.top+n.height*.5;t.style.top=s-6+"px",t.style.left=a-9+"px"}function Qt(){var e;(e=document.querySelector(".tour-pointer"))==null||e.remove()}async function $i(e){const t=Ct();t.classList.add("tour-pointer-clicking"),await new Promise(n=>setTimeout(n,280)),t.classList.remove("tour-pointer-clicking")}async function Ze(e,t=1500){const n=Date.now();for(;Date.now()-n<t;){const a=document.querySelector(e);if(a)return a;await new Promise(s=>setTimeout(s,100))}return null}async function re(){var d,i,o;if(!C)return;const e=C.overrideStep||De[C.idx];if(C.overrideStep=null,!e){yt();return}if(we&&(we(),we=null),e.type==="download-modal")return Qt(),je(null),Si(e);let t=null;if(e.type==="highlight"){if(t=e.waitForTarget?await Ze(e.target,e.timeoutMs??1500):document.querySelector(e.target),!t&&e.fallback){const c=e.fallback;if(c.onBefore)try{await c.onBefore()}catch(g){console.warn("tour fallback onBefore error:",g)}return C.overrideStep=c,re()}if(!t&&e.optional)return C.idx++,re();if(!t&&e.waitForTarget&&!e.fallback)return console.warn("[tour] target not found, skipping:",e.target),C.idx++,re();if(t){try{t.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}catch{}await new Promise(c=>setTimeout(c,250)),je(t),Ct(),requestAnimationFrame(()=>ki(t))}else je(null)}else Qt(),je(null);let n=document.querySelector(".tour-popover");n||(n=document.createElement("div"),n.className="tour-popover",n.style.visibility="hidden",document.body.appendChild(n)),n.classList.remove("tour-popover-large","tour-popover-hero"),e.hero&&n.classList.add("tour-popover-hero"),t?n.classList.remove("center"):n.classList.add("center");const a=C.idx===0,s=C.idx===De.length-1,r=!!e.waitForEvent,l=r?"⏳ Warte auf Upload …":s?"Fertig":"Weiter →";if(n.innerHTML=`
    <div class="tour-popover-header">
      <span class="tour-popover-step">${C.idx+1} / ${De.length}</span>
      <button class="tour-skip" type="button" aria-label="Tour beenden">Überspringen</button>
    </div>
    <div class="tour-popover-icon">${e.icon||""}</div>
    <h3>${e.title}</h3>
    <div class="tour-popover-body">${e.text}</div>
    <div class="tour-popover-actions">
      <button class="btn tour-prev" type="button" ${a?'disabled style="opacity:0.4;cursor:default"':""}>← Zurück</button>
      <button class="btn primary tour-next" type="button" ${r?'disabled style="opacity:0.5;cursor:default"':""}>${l}</button>
    </div>`,t)n.style.opacity="0",requestAnimationFrame(()=>{Mi(n,t,e.placement||"right"),n.style.visibility="visible",n.style.opacity="1"});else{n.style.top=n.style.left=n.style.right=n.style.bottom="",n.style.opacity="0",n.style.visibility="visible";const c=document.querySelector(".tour-blur-frame.full");requestAnimationFrame(()=>{c&&(c.style.opacity="1"),n.style.opacity="1"})}if((d=n.querySelector(".tour-skip"))==null||d.addEventListener("click",()=>{yt()}),a||(i=n.querySelector(".tour-prev"))==null||i.addEventListener("click",async()=>{C.idx=Math.max(0,C.idx-1),await re()}),!r)(o=n.querySelector(".tour-next"))==null||o.addEventListener("click",async()=>{if(e.autoClick&&t){await $i();try{const c=t.getAttribute("href");c&&c.startsWith("#/")?window.location.hash=c.slice(1):t.click()}catch(c){console.warn("tour autoClick error:",c)}if(e.onAfterClick)try{await e.onAfterClick()}catch(c){console.warn("tour onAfterClick error:",c)}else await new Promise(c=>setTimeout(c,350))}else if(e.onNext)try{await e.onNext()}catch(c){console.warn("tour onNext error:",c)}C.idx++,await re()});else{const c=C.idx,g=c<Xt,h=async()=>{Lt(),document.querySelectorAll(".upload-modal-overlay").forEach(u=>u.remove()),await new Promise(u=>setTimeout(u,300)),C={idx:g?Xt:c+1},await re()};document.addEventListener(e.waitForEvent,h,{once:!0}),we=()=>document.removeEventListener(e.waitForEvent,h)}}function Si(e){var a,s,r;let t=document.querySelector(".tour-popover");t||(t=document.createElement("div"),t.className="tour-popover",t.style.visibility="hidden",document.body.appendChild(t)),t.classList.add("tour-popover-large","center"),t.style.visibility="visible";const n=C.idx===0;C.idx,De.length-1,t.innerHTML=`
    <div class="tour-popover-header">
      <span class="tour-popover-step">${C.idx+1} / ${De.length}</span>
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
    </div>`,t.style.top=t.style.left=t.style.right=t.style.bottom="",t.style.opacity="1",(a=t.querySelector(".tour-skip"))==null||a.addEventListener("click",()=>{yt()}),n||(s=t.querySelector(".tour-prev"))==null||s.addEventListener("click",async()=>{C.idx=Math.max(0,C.idx-1),await re()}),(r=t.querySelector(".tour-next"))==null||r.addEventListener("click",async()=>{C.idx++,await re()})}function Mi(e,t,n){const a=t.getBoundingClientRect(),s=16,r=e.offsetWidth||360,l=e.offsetHeight||220,d=window.innerWidth,i=window.innerHeight,o=[n,"right","bottom","left","top"];let c=null;for(const u of o)if((()=>{switch(u){case"right":return a.right+s+r<=d;case"left":return a.left-s-r>=0;case"bottom":return a.bottom+s+l<=i;case"top":return a.top-s-l>=0}})()){c=u;break}c=c||n;let g,h;switch(c){case"right":g=a.top+a.height/2-l/2,h=a.right+s;break;case"left":g=a.top+a.height/2-l/2,h=a.left-r-s;break;case"bottom":g=a.bottom+s,h=a.left+a.width/2-r/2;break;case"top":default:g=a.top-l-s,h=a.left+a.width/2-r/2;break}g=Math.max(s,Math.min(i-l-s,g)),h=Math.max(s,Math.min(d-r-s,h)),e.style.position="fixed",e.style.top=g+"px",e.style.left=h+"px",e.style.right="auto",e.style.bottom="auto",e.style.transform=""}function yt(){Lt(),wi()}async function zi({root:e}){var r;const t=await Pn(),n=await ae();e.innerHTML=`
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
        ${t.length===0?'<div class="empty-state"><div class="empty-state-icon">📭</div><p>Noch keine Uploads</p></div>':Kn(t)}
      </div>
    </div>

    <div class="card" style="margin-top: 24px; text-align: center; background: transparent; border-style: dashed;">
      <p style="color: var(--fg-muted); font-size: 13px; margin: 0 0 12px;">Brauchst du nochmal eine kurze Tour durch die App?</p>
      <button class="btn" id="btn-tour-restart" type="button">🎯 Tour erneut starten</button>
    </div>
  `;const a=e.querySelector("#upload-zone"),s=e.querySelector("#file-input");a.addEventListener("click",()=>s.click()),a.addEventListener("dragover",l=>{l.preventDefault(),a.classList.add("drag")}),a.addEventListener("dragleave",()=>a.classList.remove("drag")),a.addEventListener("drop",async l=>{var i;l.preventDefault(),a.classList.remove("drag");const d=(i=l.dataTransfer.files)==null?void 0:i[0];d&&await tn(d,e,n)}),s.addEventListener("change",async l=>{var i;const d=(i=l.target.files)==null?void 0:i[0];d&&await tn(d,e,n)}),e.querySelector("#btn-export").addEventListener("click",Pi),e.querySelector("#btn-import").addEventListener("click",()=>e.querySelector("#import-input").click()),e.querySelector("#import-input").addEventListener("change",Ei),e.querySelector("#btn-clear-parsed").addEventListener("click",Ai),e.querySelector("#btn-reset").addEventListener("click",Ti),(r=e.querySelector("#btn-tour-restart"))==null||r.addEventListener("click",()=>On()),Di()}let en=!1;function Di(){en||(en=!0,document.body.addEventListener("click",e=>{if(e.target.closest(".lightbox-overlay, .upload-modal-overlay"))return;const t=e.target.closest("img.zoomable");t&&Vn(t.src,t.alt)}))}function Vn(e,t){const n=document.createElement("div");n.className="lightbox-overlay",n.innerHTML=`
    <button class="lightbox-close" aria-label="Schließen" title="Schließen (Esc)">×</button>
    <img src="${e}" alt="${t||""}" />
  `,document.body.appendChild(n);const a=()=>{n.remove(),document.removeEventListener("keydown",s)},s=r=>{r.key==="Escape"&&a()};n.addEventListener("click",r=>{(r.target===n||r.target.classList.contains("lightbox-close"))&&a()}),document.addEventListener("keydown",s)}async function Ai(){await ne("PDF-abgeleitete Daten (Tage, Monate, Uploads) werden gelöscht. Profil und Mail-Vorlagen bleiben erhalten.",{title:"PDF-Daten löschen?",confirmLabel:"Löschen",variant:"danger"})&&(await En(),O("Daten gelöscht. Profil bleibt."),setTimeout(()=>location.reload(),600))}function Kn(e){return`
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
            <td>${$(Fi(t.hochladeDatum))}</td>
            <td>${$(t.dateiname||"—")}</td>
            <td>${t.zeitraumVon?$(B(new Date(t.zeitraumVon))):"—"} – ${t.zeitraumBis?$(B(new Date(t.zeitraumBis))):"—"}</td>
            <td>${t.stichtagAuswertung?$(B(new Date(t.stichtagAuswertung))):"—"}</td>
            <td class="num">${t.tageCount??"—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}async function tn(e,t,n){var r,l,d,i;const a=t.querySelector("#upload-status"),s=t.querySelector("#upload-zone");if(e.type!=="application/pdf"&&!/\.pdf$/i.test(e.name)){Ce({type:"error",title:"Falscher Dateityp",desc:`<strong>${$(e.name)}</strong> ist keine PDF-Datei.`,hint:"Lade eine PDF-Datei hoch — den Zeitnachweis aus dem ESS über den <strong>Speichern-Button</strong> (Disketten-Symbol oben rechts im PDF-Viewer)."});return}if(e.size>50*1024*1024){Ce({type:"error",title:"Datei zu groß",desc:`<strong>${$(e.name)}</strong> ist ${(e.size/1024/1024).toFixed(1)} MB groß.`,hint:"ESS-Zeitnachweise sind normalerweise unter 1 MB. Bitte überprüfe die Datei."});return}s.style.pointerEvents="none",s.style.opacity="0.6",a.innerHTML=`
    <div class="alert severity-info">
      <div class="loader-ring" style="width: 24px; height: 24px; border-width: 2px;"></div>
      <div class="alert-body">
        <div class="alert-title">PDF wird verarbeitet…</div>
        <p style="margin: 4px 0; font-size: 13px;"><strong>${$(e.name)}</strong> — das kann bei großen PDFs einige Sekunden dauern.</p>
      </div>
    </div>`;try{const o=await e.arrayBuffer(),c=await ii(o);if(c.tage.length===0&&!c.meta.zeitraumVon){s.style.pointerEvents="",s.style.opacity="",a.innerHTML="",Ce({type:"error",title:"Diese PDF ist nicht kompatibel",desc:'Im PDF wurden keine Texte gefunden. Das passiert, wenn das PDF über „Drucken → Als PDF speichern" (z.B. „Microsoft Print to PDF") erzeugt wurde — dabei werden Texte als Vektorpfade gerendert und können nicht ausgelesen werden.',hint:'Lade dein PDF direkt aus dem ESS über den <strong>Speichern-Button</strong> herunter (Disketten-Symbol oben rechts im PDF-Viewer) — nicht über „Drucken".',screenshot:!0,producer:(r=c.meta)==null?void 0:r.producer}),Qe("PDF enthält keinen extrahierbaren Text.");return}const g=await Ne(),h=g==null?void 0:g.personalnummer,u=c.meta.personalnummer;if(h&&u&&h!==u){const y=(g==null?void 0:g.name)||`Personalnr. ${h}`,P=c.meta.name||`Personalnr. ${u}`;if(!await ne(`Das hochgeladene PDF gehört zu einem anderen Azubi als die bisher gespeicherten Daten:

Bisher: ${y}
Jetzt:  ${P}

Wenn du fortfährst, werden alle alten Tagesdaten gelöscht und durch die neuen ersetzt. (Profil-Einstellungen wie Theme und Mail-Vorlagen bleiben erhalten.)`,{title:"Anderer Azubi erkannt",confirmLabel:"Daten ersetzen",variant:"danger"})){s.style.pointerEvents="",s.style.opacity="",a.innerHTML=`
          <div class="alert severity-info">
            <div class="alert-body">
              <div class="alert-title">Upload abgebrochen</div>
              <p style="margin: 4px 0; font-size: 13px;">Es wurden keine Daten verändert. Lade das richtige PDF (für ${$(y)}) erneut hoch.</p>
            </div>
          </div>`;return}await En();const E=await ae();await Ye({...E,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1}})}const p=await Fs(c.tage,c.monate,c.meta.stichtagAuswertung);(p.skippedTage>0||p.skippedMonate>0)&&console.info(`[upload] ${p.skippedTage} Tage und ${p.skippedMonate} Monate uebersprungen — bestehende Daten haben juengeren Stichtag.`),await Ls({dateiname:e.name,personalnummer:c.meta.personalnummer??null,name:c.meta.name??null,zeitraumVon:((l=c.meta.zeitraumVon)==null?void 0:l.toISOString())??null,zeitraumBis:((d=c.meta.zeitraumBis)==null?void 0:d.toISOString())??null,stichtagAuswertung:((i=c.meta.stichtagAuswertung)==null?void 0:i.toISOString())??null,tageCount:c.tage.length,monateCount:c.monate.length});const f=await oe(),b=Fn(f),m={...An(),...n};(b.wochentageWoechentlich.length>0||b.wochentage14Taegig.length>0)&&(m.berufsschulMuster=b),await Ye(m),a.innerHTML="",xi()||Ce({type:"success",title:"PDF erfolgreich eingelesen",desc:c.meta.zeitraumVon?`Zeitraum: ${B(c.meta.zeitraumVon)} – ${B(c.meta.zeitraumBis)}`:"Daten wurden erfolgreich verarbeitet.",stats:[{num:c.tage.length,label:"Tage"},{num:c.monate.length,label:"Monatsübersichten"}]}),O(`PDF verarbeitet: ${c.tage.length} Tage.`),document.dispatchEvent(new CustomEvent("better-ess:pdf-uploaded",{detail:{tageCount:c.tage.length,monateCount:c.monate.length}}));const x=await Pn();t.querySelector("#uploads-list").innerHTML=Kn(x)}catch(o){console.error(o),a.innerHTML="",Ce({type:"error",title:"Fehler beim Parsen",desc:$(o.message||String(o)),hint:'Prüfe, ob es sich um einen ESS-Zeitnachweis im richtigen Format handelt. Lade dein PDF über den Speichern-Button herunter, nicht über „Drucken".',screenshot:!0}),Qe("PDF konnte nicht gelesen werden.")}finally{s.style.pointerEvents="",s.style.opacity=""}}async function Pi(){try{const e=await Bs(),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),a=document.createElement("a"),s=new Date().toISOString().slice(0,10);a.href=n,a.download=`zeitnachweis-backup-${s}.json`,a.click(),URL.revokeObjectURL(n),O("Backup heruntergeladen.")}catch(e){Qe(`Export fehlgeschlagen: ${e.message}`)}}async function Ei(e){var n;const t=(n=e.target.files)==null?void 0:n[0];if(t)try{const a=await t.text(),s=JSON.parse(a);if(!await ne("Existierende Daten werden vom Backup überschrieben.",{title:"Backup importieren?",confirmLabel:"Importieren",variant:"danger"}))return;await Ws(s),O("Backup erfolgreich importiert. Seite wird neu geladen…"),setTimeout(()=>location.reload(),800)}catch(a){Qe(`Import fehlgeschlagen: ${a.message}`)}}async function Ti(){await ne("Alle Daten (Tage, Monate, Profil, Vorlagen, Mail-Vorlagen, Fahrgeld-Vorlage) werden endgültig gelöscht. Das lässt sich nicht rückgängig machen.",{title:"ALLE Daten löschen?",confirmLabel:"Weiter zur Sicherheitsfrage",variant:"danger"})&&await ne("Letzte Warnung — wirklich alle Daten löschen?",{title:"Sicher?",confirmLabel:"Endgültig löschen",variant:"danger"})&&(await _s(),O("Alle Daten gelöscht."),setTimeout(()=>location.reload(),600))}function Fi(e){if(!e)return"—";const t=new Date(e);return t.toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"})+" "+t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}function Ce(e){const{type:t,title:n,desc:a,hint:s,screenshot:r,stats:l,producer:d}=e,i=document.createElement("div");i.className="upload-modal-overlay";const o=`
    <svg class="upload-check-svg" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
      <circle class="upload-check-bg" cx="26" cy="26" r="24"/>
      <circle class="upload-check-circle" cx="26" cy="26" r="24"/>
      <path class="upload-check-mark" d="M14 27 L22 35 L38 18"/>
    </svg>`,c=`
    <svg class="upload-cross-svg" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
      <circle class="upload-cross-bg" cx="26" cy="26" r="24"/>
      <circle class="upload-cross-circle" cx="26" cy="26" r="24"/>
      <line class="upload-cross-line" x1="17" y1="17" x2="35" y2="35"/>
      <line class="upload-cross-line upload-cross-line-2" x1="35" y1="17" x2="17" y2="35"/>
    </svg>`,g=l!=null&&l.length?`
    <div class="upload-modal-stats">
      ${l.map(m=>`
        <div class="upload-modal-stat">
          <div class="upload-modal-stat-num">${$(String(m.num))}</div>
          <div class="upload-modal-stat-label">${$(m.label)}</div>
        </div>
      `).join("")}
    </div>`:"",h=r?`
    <img class="upload-modal-hint-img zoomable" src="/better-ess/tutorial/speichern.png"
         alt="Speichern-Button im PDF-Viewer"
         title="Klick für Vollbild" />`:"",u=d?`<p style="font-size: 12px; color: var(--fg-subtle); margin-top: 12px;">Erkannt: Producer „${$(d)}"</p>`:"",p=t==="success"?`
      <a href="#/" class="btn primary">Zum Dashboard</a>
      <a href="#/kalender" class="btn">Kalender öffnen</a>
      <button class="btn upload-modal-close-btn">Schließen</button>`:`
      <button class="btn primary upload-modal-close-btn">Verstanden</button>`;i.innerHTML=`
    <div class="upload-modal" role="dialog" aria-modal="true">
      <div class="upload-modal-icon-wrap">
        ${t==="success"?o:c}
      </div>
      <h2 class="upload-modal-title">${$(n)}</h2>
      <p class="upload-modal-desc">${a}</p>
      ${g}
      ${s?`<p class="upload-modal-desc" style="background: var(--accent-bg); padding: 12px; border-radius: 8px; border-left: 3px solid var(--accent);">${s}</p>`:""}
      ${h}
      ${u}
      <div class="upload-modal-actions">${p}</div>
    </div>`,document.body.appendChild(i);const f=()=>{i.style.animation="upload-modal-fade 150ms ease-out reverse",setTimeout(()=>i.remove(),150),document.removeEventListener("keydown",b)},b=m=>{m.key==="Escape"&&f()};document.addEventListener("keydown",b),i.addEventListener("click",m=>{if(m.target===i){f();return}if(m.target.closest(".upload-modal-close-btn")){f();return}if(m.target.closest(".upload-modal-actions a, .upload-modal-actions button")){f();return}const x=m.target.closest("img.zoomable");x&&Vn(x.src,x.alt)})}const nn={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag"};async function Li({root:e}){var s,r,l,d,i;const t=await ae(),n=t.berufsschulMuster??{},a=(((s=n.wochentageWoechentlich)==null?void 0:s.length)??0)>0||(((r=n.wochentage14Taegig)==null?void 0:r.length)??0)>0;e.innerHTML=`
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
          <input type="email" name="zeitwirtschaftEmail" value="${an(t.zeitwirtschaftEmail)}" />
        </div>
        <div class="form-group">
          <label>Anrede in Mails</label>
          <input type="text" name="zeitwirtschaftAnrede" value="${an(t.zeitwirtschaftAnrede)}" placeholder="Frau Kanarya" />
        </div>
      </div>

      <div class="card" style="grid-column: 1 / -1;">
        <h2>Berufsschul-Rhythmus <span style="font-size: 11px; font-weight: 500; color: var(--fg-subtle); text-transform: uppercase; letter-spacing: 0.05em; margin-left: 8px;">Automatisch erkannt</span></h2>
        ${a?`
          <div class="tag-detail">
            <div class="tag-detail-label">Wöchentlich</div>
            <div class="tag-detail-value"><strong>${((l=n.wochentageWoechentlich)==null?void 0:l.map(o=>nn[o]).join(", "))||"—"}</strong></div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Alle 2 Wochen</div>
            <div class="tag-detail-value"><strong>${((d=n.wochentage14Taegig)==null?void 0:d.map(o=>nn[o]).join(", "))||"—"}</strong>${n.referenzDatum14Taegig?` <span class="hint">(Anker: ${B(new Date(n.referenzDatum14Taegig))})</span>`:""}</div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Stunden pro Schultag</div>
            <div class="tag-detail-value">
              <strong>${n.stundenProTag!=null?n.stundenProTag.toFixed(2).replace(".",",")+"h":"—"}</strong>
              ${n.halbtags?' <span class="hint" style="color: var(--accent);">(Halbtags-Schule erkannt)</span>':""}
            </div>
          </div>
          <p class="hint" style="margin-top: 16px;">
            Das Muster wird bei jedem PDF-Upload neu aus den Daten abgeleitet. ${n.halbtags?'Da deine Schultage typischerweise weniger als 5h dauern, geht die App von Halbtags-Schule aus und meldet KEINE „BS-Stunden falsch"-Warnung, wenn dein Schultag nur '+(((i=n.stundenProTag)==null?void 0:i.toFixed(2).replace(".",","))??"4,00")+"h hat.":"Je länger der erfasste Zeitraum, desto präziser."}
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
  `,e.querySelector("#profil-form").addEventListener("submit",async o=>{var h,u;o.preventDefault();const c=new FormData(o.target),g={...t,ueber18:c.get("ueber18")==="on",zeitwirtschaftEmail:((h=c.get("zeitwirtschaftEmail"))==null?void 0:h.trim())||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:((u=c.get("zeitwirtschaftAnrede"))==null?void 0:u.trim())||"Frau Kanarya"};await Ye(g),O("Profil gespeichert.")})}function an(e){return String(e??"").replace(/"/g,"&quot;")}async function Ci({params:e,root:t}){var o,c,g,h;const n=e.datum,a=await v.tage.get(n),s=await ae();if(!a){t.innerHTML=`<h1 class="view-title">Tag nicht gefunden</h1><p>Für ${n} liegen keine Daten vor.</p><a href="#/" class="btn">← Dashboard</a>`;return}const r=W(n),l=a.tagestyp==="Stempelzeit"?vn(a,s):null,d=st(r,s.berufsschulMuster),i=bn(a.zeitSpannen);t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/kalender/${n.slice(0,7)}" class="btn sm">← Zum Monat</a>
    </div>
    <h1 class="view-title">${Mt(r)}</h1>
    <p class="view-subtitle">${a.tagestyp??"Kein Typ"} · KW ${(o=a.wocheKey)==null?void 0:o.split("-")[1]}</p>

    ${i?`
      <div class="card kommen-gehen-hero" style="margin-bottom: 24px;">
        <div class="hint" style="text-transform: uppercase; letter-spacing: 0.05em; font-size: 11px; margin-bottom: 10px;">Tages-Rahmen</div>
        ${Tn(i,{size:32})}
      </div>
    `:""}

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${a.ist!=null?a.ist.toFixed(2).replace(".",",")+"h":"—"}</div>
        <div class="hint">= ${a.ist!=null?Je(a.ist):"—"}</div>
      </div>
      <div class="card">
        <h3>Soll-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${a.soll!=null?a.soll.toFixed(2).replace(".",",")+"h":"—"}</div>
      </div>
      <div class="card">
        <h3>Differenz</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${a.diff>.05?"var(--success)":a.diff<-.05?"var(--danger)":"var(--fg)"};">${a.diff!=null?he(a.diff,{signed:!0}):"—"}</div>
      </div>
    </div>

    <div class="grid cols-2" style="gap: 24px;">
      <div class="card">
        <h2>Zeitstempel</h2>
        ${(c=a.zeitSpannen)!=null&&c.length?a.zeitSpannen.map(u=>`
              <div class="tag-detail">
                <div class="tag-detail-label">${_e(u.aktivitaet??"Stempelzeit")}</div>
                <div class="tag-detail-value tabular">${u.von??"—"} – ${u.bis??"—"}</div>
              </div>
            `).join(""):'<p class="hint">Keine Stempelzeiten für diesen Tag.</p>'}
      </div>

      <div class="card">
        <h2>Klassifikation</h2>
        <div class="tag-detail">
          <div class="tag-detail-label">Tagestyp</div>
          <div class="tag-detail-value">${a.tagestyp?`<span class="pill ${_i(a.tagestyp)}">${_e(a.tagestyp)}</span>`:"—"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Laut Profil</div>
          <div class="tag-detail-value">${d?"🎓 Berufsschultag erwartet":"Regulärer Werktag"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">TAZP-Code</div>
          <div class="tag-detail-value"><code>${_e(a.tazp??"—")}</code></div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Monat</div>
          <div class="tag-detail-value">${_e(a.monatKey)}</div>
        </div>
      </div>

      ${l&&!l.keinAnspruch?l.altReglement?`
        <div class="card" style="grid-column: 1 / -1;">
          <h2>Pausen-Analyse</h2>
          <div class="grid cols-2">
            <div>
              <div class="tag-detail">
                <div class="tag-detail-label">Arbeitszeit (netto)</div>
                <div class="tag-detail-value tabular">${(g=l.arbeitszeitOhnePause)==null?void 0:g.toFixed(2).replace(".",",")}h</div>
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
              <div class="alert-body">${_e(l.warnung)}</div>
            </div>
          `:""}
        </div>
      `:""}
    </div>
  `}function _i(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function _e(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const Bi=[{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:180,label:"6 Monate"},{key:365,label:"1 Jahr"},{key:730,label:"2 Jahre"},{key:"alles",label:"Alles"}];function Wi(e){return Bi.filter(t=>t.key==="alles"||t.key<e)}async function Oi({root:e}){var l;const[t,n]=await Promise.all([oe(),nt()]);if(!t.length){e.innerHTML='<h1 class="view-title">Analytics</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a=Wi(t.length);let s=a.some(d=>d.key===30)?30:"alles";e.innerHTML=`
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
          ${a.map(d=>`<button type="button" data-key="${d.key}" class="${s===d.key?"active":""}">${d.label}</button>`).join("")}
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
  `;const r=()=>s==="alles"?t:t.slice(-s);requestAnimationFrame(()=>{us(e.querySelector("#c-saldo"),n),ps(e.querySelector("#c-wochen"),t),Nt(e.querySelector("#c-startend"),r()),fs(e.querySelector("#c-wochentag"),t),hs(e.querySelector("#c-pausen"),t),ms(e.querySelector("#c-donut"),t),gs(e.querySelector("#c-alle-tage"),t.slice(-30))}),(l=e.querySelector("#startend-zeitraum"))==null||l.addEventListener("click",d=>{const i=d.target.closest("button[data-key]");if(!i||i.disabled)return;const o=i.getAttribute("data-key"),c=o==="alles"?"alles":parseInt(o,10);c!==s&&(s=c,e.querySelectorAll("#startend-zeitraum button").forEach(g=>g.classList.toggle("active",g===i)),Nt(e.querySelector("#c-startend"),r()))})}function Vi(e){return String(e??"").replace(/"/g,"&quot;")}async function gt({params:e,root:t}){const[n,a,s,r,l]=await Promise.all([oe(),nt(),ae(),Ne(),at()]),d=Object.fromEntries(l.map(k=>[k.key,k]));if(!n.length){t.innerHTML=`
      <h1 class="view-title">Kalender</h1>
      <p class="view-subtitle">Noch keine Daten geladen.</p>
      <a href="#/daten" class="btn primary">Zum Upload</a>`;return}const i=[...new Set(n.map(k=>k.monatKey))].sort(),o=e.yyyymm,c=i.includes(o)?o:i[i.length-1],g=n.filter(k=>k.monatKey===c),h=[...new Set(g.map(k=>k.wocheKey))].sort(),u=e.yyyykw,p=h.includes(u)?u:null,f=i.indexOf(c),b=f>0?i[f-1]:null,m=f<i.length-1?i[f+1]:null,x=vt(c),y=a.find(k=>k.monatKey===c),P=wn(n,a),S=P.filter(k=>k.monatKey===c),E=r!=null&&r.stichtagAuswertung?new Date(r.stichtagAuswertung):new Date,K=it(n,s,E),M=K.filter(k=>k.datum.startsWith(c)),F=Ni({aktiverMonatKey:c,monatLabel:x,prevMonatKey:b,nextMonatKey:m,tageAnzahl:g.length,warnungenAnzahl:M.length});p?await Ii({root:t,switcherHtml:F,aktiverMonatKey:c,aktiveWocheKey:p,vollKurve:P,alleWarnungen:K,profil:s,vorlagenOverrides:d}):await Ki({root:t,switcherHtml:F,monatLabel:x,tageMonat:g,monatsKurve:S,monatUebersicht:y,monatsWarnungen:M,aktiverMonatKey:c,profil:s,vorlagenOverrides:d})}async function Ki({root:e,switcherHtml:t,monatLabel:n,tageMonat:a,monatsKurve:s,monatUebersicht:r,monatsWarnungen:l,aktiverMonatKey:d,profil:i,vorlagenOverrides:o}){e.innerHTML=`
    ${t}

    ${r?Hi(r):""}

    <div class="card" style="margin-bottom: 24px;">
      <h2>Saldo-Verlauf</h2>
      <div class="chart-wrap tall"><canvas id="chart-kalender-monat"></canvas></div>
    </div>

    ${l.length?`
      <div class="card" style="margin-bottom: 24px;">
        <h2>Auffälligkeiten</h2>
        ${l.map(c=>In(c,i,o)).join("")}
      </div>
    `:""}

    <div class="card" style="margin-bottom: 24px;">
      <h2 style="margin-bottom: 16px;">Wochen</h2>
      ${Ri(s,d)}
    </div>

    <div class="card">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Tage</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">H/M zum Kopieren</span>
      </div>
      <div id="tage-liste-kalender">${rt(s.slice().reverse(),{warnungen:l})}</div>
    </div>
  `,s.length&&(requestAnimationFrame(()=>{const c=e.querySelector("#chart-kalender-monat");c&&Dt(c,s)}),Tt(e.querySelector("#tage-liste-kalender")))}async function Ii({root:e,switcherHtml:t,aktiverMonatKey:n,aktiveWocheKey:a,vollKurve:s,alleWarnungen:r,profil:l,vorlagenOverrides:d}){var m;const i=s.filter(x=>x.wocheKey===a),o=i.reduce((x,y)=>x+tt(y),0),c=i.reduce((x,y)=>x+St(y),0),g=+(o-c).toFixed(2),h=x=>x>.05?"var(--success)":x<-.05?"var(--danger)":"var(--fg)",u=r.filter(x=>i.some(y=>y.datum===x.datum)),p=(m=i[0])==null?void 0:m.datum,f=p?Ie(W(p)):"",b=a.split("-")[1]||"?";e.innerHTML=`
    ${t}

    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 12px;">
      <a href="#/kalender/${n}" class="btn sm">← Zur Monatsansicht</a>
    </div>

    <h2 style="margin: 0 0 4px;">KW ${$(b)}</h2>
    <p class="view-subtitle">${$(f)} · ${i.length} Tage · ${u.length} Auffälligkeiten</p>

    ${i.length===0?`
      <p class="hint" style="text-align: center; padding: 32px;">Keine Tage für diese Woche im PDF.</p>
    `:`
      <div class="grid cols-3" style="margin-bottom: 24px;">
        <div class="card">
          <h3>Ist-Stunden</h3>
          <div class="tabular" style="font-size: 28px; font-weight: 650;">${o.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="card">
          <h3>Soll-Stunden</h3>
          <div class="tabular" style="font-size: 28px; font-weight: 650;">${c.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="card">
          <h3>Differenz</h3>
          <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${h(g)};">${he(g,{signed:!0})}</div>
        </div>
      </div>

      <div class="card" style="margin-bottom: 24px;">
        <h2>Saldo-Verlauf in dieser Woche</h2>
        <div class="chart-wrap"><canvas id="chart-kalender-woche"></canvas></div>
      </div>

      ${u.length?`
        <div class="card" style="margin-bottom: 24px;">
          <h2>Auffälligkeiten in KW ${$(b)}</h2>
          ${u.map(x=>In(x,l,d)).join("")}
        </div>
      `:""}

      <div class="card">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Tage</h2>
          <span style="color: var(--fg-muted); font-size: 13px;">H/M zum Kopieren</span>
        </div>
        <div id="tage-liste-kalender">${rt(i,{warnungen:u})}</div>
      </div>
    `}
  `,i.length&&(requestAnimationFrame(()=>{const x=e.querySelector("#chart-kalender-woche");x&&Dt(x,i)}),Tt(e.querySelector("#tage-liste-kalender")))}function Ni({aktiverMonatKey:e,monatLabel:t,prevMonatKey:n,nextMonatKey:a,tageAnzahl:s,warnungenAnzahl:r}){const l=n?vt(n):"",d=a?vt(a):"";return`
    <div class="card kalender-monat-bar" style="margin-bottom: 24px;">
      <div class="kalender-monat-nav">
        <a class="kalender-monat-btn ${n?"":"is-disabled"}"
           ${n?`href="#/kalender/${n}"`:'aria-disabled="true"'}
           title="${n?"Zu "+$(l):"Kein vorheriger Monat"}"
           aria-label="Vorheriger Monat">
          <span class="kalender-monat-btn-arrow" aria-hidden="true">‹</span>
          <span class="kalender-monat-btn-text">${n?$(l):""}</span>
        </a>
        <div class="kalender-monat-titel">
          <h2 style="margin: 0;">${$(t)}</h2>
          <div class="hint">${s} Tage · ${r} Auffälligkeiten</div>
        </div>
        <a class="kalender-monat-btn next ${a?"":"is-disabled"}"
           ${a?`href="#/kalender/${a}"`:'aria-disabled="true"'}
           title="${a?"Zu "+$(d):"Kein nächster Monat"}"
           aria-label="Nächster Monat">
          <span class="kalender-monat-btn-text">${a?$(d):""}</span>
          <span class="kalender-monat-btn-arrow" aria-hidden="true">›</span>
        </a>
      </div>
    </div>`}function Hi(e){var r,l,d;const t=((r=e.glz)==null?void 0:r.saldoGesamt)??0,n=((l=e.glz)==null?void 0:l.saldoVorperiode)??0,a=((d=e.glz)==null?void 0:d.saldoAktuellePeriode)??0,s=i=>i>.05?"var(--success)":i<-.05?"var(--danger)":"var(--fg)";return`
    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>GLZ-Saldo gesamt</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${s(t)};">${he(t,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Vorperiode</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${s(n)};">${he(n,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Akt. Periode</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${s(a)};">${he(a,{signed:!0})}</div>
      </div>
    </div>`}function Ri(e,t){var s;const n={};for(const r of e)n[s=r.wocheKey]??(n[s]={key:r.wocheKey,tage:[],ist:0,soll:0}),n[r.wocheKey].tage.push(r),n[r.wocheKey].ist+=tt(r),n[r.wocheKey].soll+=St(r);const a=Object.keys(n).sort();return a.length?a.map(r=>{var h;const l=n[r],d=+(l.ist-l.soll).toFixed(2),i=d>.05?"var(--success)":d<-.05?"var(--danger)":"var(--fg-muted)",o=(h=l.tage.slice().sort((u,p)=>u.datum.localeCompare(p.datum))[0])==null?void 0:h.datum,c=o?Ie(W(o)):"",g=r.split("-")[1]||"?";return`
      <a href="#/kalender/${t}/${r}" class="list-item" style="text-decoration: none; color: inherit;">
        <div class="tabular" style="font-size: 16px; font-weight: 600; color: var(--fg-muted); min-width: 80px;">KW ${$(g)}</div>
        <div>
          <div class="list-item-title tabular">${$(c)}</div>
          <div class="list-item-sub">${l.tage.length} Tage · Ist ${l.ist.toFixed(2).replace(".",",")}h · Soll ${l.soll.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="tabular" style="font-weight: 600; font-size: 16px; color: ${i};">${he(d,{signed:!0})}</div>
        <div style="color: var(--fg-subtle);">→</div>
      </a>`}).join(""):'<p style="color: var(--fg-muted);">Keine Wochen.</p>'}function In(e,t,n){const a=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";let s=null;if(e.mailVorlageKey&&t){const r=He(e.mailVorlageKey,n==null?void 0:n[e.mailVorlageKey]);if(r){const l=Pt(t,e);s=Et(t,r,l)}}return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${a}</div>
      <div class="alert-body">
        <div class="alert-title">${$(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${$(e.beschreibung)}</p>
        <div class="alert-actions">
          ${s?`<a href="${Vi(s)}" class="btn-mail-medium"><img src="outlook-logo.png" alt="" class="outlook-logo-medium" />E-Mail</a>`:""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
        </div>
      </div>
    </div>`}function vt(e){const[t,n]=e.split("-"),a=new Date(parseInt(t,10),parseInt(n,10)-1,1);return T(a,"MMMM yyyy",{locale:ee})}const ji={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};async function ht({params:e,root:t}){const[n,a,s]=await Promise.all([oe(),ae(),Ne()]),r=qi(e);if(!n.length){t.innerHTML=`
      <h1 class="view-title">Kalender · ${$(r.label)}</h1>
      <p class="view-subtitle">Noch keine Daten geladen.</p>
      <a href="#/daten" class="btn primary">Zum Upload</a>`;return}const l=n.filter(r.predicate).sort((h,u)=>h.datum.localeCompare(u.datum)),d=s!=null&&s.stichtagAuswertung?new Date(s.stichtagAuswertung):new Date,o=it(n,a,d).filter(h=>l.some(u=>u.datum===h.datum)),c=l.reduce((h,u)=>h+(u.ist??0),0),g=c>0?` · ${c.toFixed(2).replace(".",",")}h kumuliert`:"";t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/kalender" class="btn sm">← Kalender</a>
    </div>
    <h1 class="view-title">${$(r.titel)}</h1>
    <p class="view-subtitle">${l.length} Tag${l.length===1?"":"e"} insgesamt${g}</p>

    ${l.length===0?`
      <div class="card"><p class="hint">Keine Tage passen zu diesem Filter.</p></div>
    `:`
      <div class="card">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Tage</h2>
          <span style="color: var(--fg-muted); font-size: 13px;">H/M zum Kopieren</span>
        </div>
        <div id="tagestyp-tage-liste">${rt(l,{warnungen:o})}</div>
      </div>
    `}
  `,Tt(t.querySelector("#tagestyp-tage-liste"))}function qi(e){if(e.typ!=null){const t=decodeURIComponent(e.typ);return{label:t,titel:`${t}-Tage`,predicate:n=>n.tagestyp===t}}if(e.wd!=null){const t=decodeURIComponent(e.wd).toUpperCase(),n=ji[t]||t;return{label:n,titel:`Tage am ${n}`,predicate:a=>a.wochentag===t}}if(e.bucket!=null){const t=parseInt(decodeURIComponent(e.bucket),10),n=t+14;return{label:`${t}–${n} min Pause`,titel:`Tage mit Pause ${t}–${n} min`,predicate:a=>{if(a.tagestyp!=="Stempelzeit"||!a.zeitSpannen||a.zeitSpannen.length<2)return!1;const s=Math.round($t(a.zeitSpannen)*60);return s>=t&&s<=n}}}return{label:"Filter",titel:"Tage (kein Filter)",predicate:()=>!0}}fn.workerSrc=Bn;function Zi(e){if(!e||e.byteLength<5)return!1;const t=new Uint8Array(e,0,5);return t[0]===37&&t[1]===80&&t[2]===68&&t[3]===70&&t[4]===45}async function Nn(e){var S,E,K,M,F,k;let t;try{t=await mn({data:new Uint8Array(e.slice(0))}).promise}catch{return{ok:!1,fehler:"PDF konnte nicht gelesen werden — die Datei ist beschädigt oder verschlüsselt."}}if(t.numPages<1)return{ok:!1,fehler:"PDF hat keine Seiten."};const n=await t.getPage(1),s=(await n.getAnnotations()).filter(w=>w.subtype==="Widget");if(s.length<20)return{ok:!1,fehler:"Diese PDF ist kein ausfüllbares Formular — bitte die Original-Putzmeister-Vorlage hochladen."};const d=(await n.getTextContent()).items.filter(w=>w.str&&w.transform).map(w=>({text:w.str,x:w.transform[4],y:w.transform[5],width:w.width,height:w.height})).filter(w=>Math.abs(w.y-636)<4);let i="";for(const w of d){const I=w.text.match(/(\d{6,8})/);if(I&&!w.text.toLowerCase().includes("kst")){i=I[1];break}}const o=Gi(s),c=Me(o.monatJahr),h=(Me(o.persNr).match(/\d+/)||[""])[0],u=Me(o.name).trim(),p=ft(o.vonSlots),f=ft(o.nachSlots),b=ft(o.betragSlots),m=Ui(b),x=Me(o.auszubildender).trim(),y=x.replace(/^\s*\d{1,2}\.\d{1,2}\.\d{2,4}\s*/,"").trim(),P=[];return u||P.push("name"),h||P.push("persNr"),i||P.push("kst"),p||P.push("vonHaltestelle"),f||P.push("nachHaltestelle"),(!m||m<=0)&&P.push("betragProTag"),!u&&!h&&!p&&!f&&!m?{ok:!1,fehler:"Diese PDF ist eine komplett leere Vorlage — bitte zuerst eine eigene Vorlage einmal von Hand mit Name, Pers.-Nr., Strecke und Tagessatz ausfüllen und dann hochladen."}:{ok:!0,konstanten:{name:u,persNr:h,kst:i,vonHaltestelle:p,nachHaltestelle:f,betragProTag:m,unterschriftText:y},layout:{monatJahrField:((S=o.monatJahr)==null?void 0:S.fieldName)||null,persNrField:((E=o.persNr)==null?void 0:E.fieldName)||null,nameField:((K=o.name)==null?void 0:K.fieldName)||null,auszubildenderField:((M=o.auszubildender)==null?void 0:M.fieldName)||null,summeField:((F=o.summe)==null?void 0:F.fieldName)||null,datumFields:o.datumSlots.map(w=>w.fieldName),vonFields:o.vonSlots.map(w=>w.fieldName),nachFields:o.nachSlots.map(w=>w.fieldName),betragFields:o.betragSlots.map(w=>w.fieldName),auszubildenderRect:((k=o.auszubildender)==null?void 0:k.rect)||null},vorhandeneEintraege:{monatJahr:c,auszubildenderText:x,anzahlBefuellteDatumZeilen:o.datumSlots.filter(w=>Me(w)).length},missing:P,quelle:"pdf"}}function Gi(e){const t=e.map(u=>{const[p,f,b,m]=u.rect;return{fieldName:u.fieldName,fieldValue:u.fieldValue??"",rect:[p,f,b,m],x:(p+b)/2,y:(f+m)/2,width:b-p,height:m-f}}),n=t.find(u=>u.y>660&&u.x<250)||null,a=t.find(u=>u.y>660&&u.x>400)||null,s=t.find(u=>u.y>630&&u.y<660&&u.x<250)||null,r=t.filter(u=>u.y>370&&u.y<580),l=(u,p)=>p.y-u.y,d=r.filter(u=>u.x>0&&u.x<140).sort(l),i=r.filter(u=>u.x>140&&u.x<290).sort(l),o=r.filter(u=>u.x>290&&u.x<460).sort(l),c=r.filter(u=>u.x>460).sort(l),g=t.find(u=>u.y<370&&u.y>320&&u.x>460)||null,h=t.find(u=>u.y<340&&u.y>310&&u.x<200)||null;return{monatJahr:n,persNr:a,name:s,datumSlots:d,vonSlots:i,nachSlots:o,betragSlots:c,summe:g,auszubildender:h}}function Me(e){return e?String(e.fieldValue??"").trim():""}function ft(e){for(const t of e){const n=Me(t);if(n)return n}return""}function Ui(e){if(!e)return 0;const t=String(e).replace(/[^\d,.\-]/g,"").replace(/\./g,"").replace(",","."),n=parseFloat(t);return Number.isFinite(n)?n:0}const wt="Fahrgelderstattung",Ji="C4",Hn="C5",Rn="F4",jn="F5",ge=10,ve=19;function sn(e,t){return e.filter(n=>n.monatKey===t).filter(n=>n.tagestyp==="Berufsschule").filter(n=>(n.ist??0)>0).sort((n,a)=>n.datum.localeCompare(a.datum))}async function Yi(e){if(Zi(e)){const t=await Nn(e);return t.ok?{ok:!0,format:"pdf",konstanten:t.konstanten,layout:t.layout,missing:t.missing,vorhandeneEintraege:t.vorhandeneEintraege,unterschriftAuto:null}:t}return await Xi(e)}async function Xi(e){const t=(await $e(async()=>{const{default:b}=await import("./exceljs.min-BhfpbegZ.js").then(m=>m.e);return{default:b}},__vite__mapDeps([0,1]))).default,n=new t.Workbook;try{await n.xlsx.load(e)}catch{return{ok:!1,fehler:"Die Excel-Datei ist beschädigt oder kein gültiges .xlsx-Format. Bitte die Datei neu speichern und nochmal versuchen."}}const a=n.getWorksheet(wt)??n.worksheets[0];if(!a)return{ok:!1,fehler:"Excel hat keine Arbeitsblätter — die Datei scheint leer zu sein."};const s=b=>{const m=a.getCell(b).value;return m==null?"":typeof m=="object"&&m.text?String(m.text):typeof m=="object"&&m.richText?m.richText.map(x=>x.text).join(""):String(m)},r=s(Hn).trim(),l=s(Rn).trim(),d=s(jn).trim(),i=(l.match(/\d+/)||[""])[0],o=(d.match(/\d+/)||[""])[0],c=s(`C${ge}`).trim(),g=s(`E${ge}`).trim(),h=a.getCell(`G${ge}`).value,u=typeof h=="number"?h:parseFloat(String(h).replace(",","."))||0;let p=null;try{const b=new Set(a.getImages().map(x=>parseInt(x.imageId,10))),m=(n.media||[]).map((x,y)=>({media:x,index:y})).filter(({media:x,index:y})=>(x==null?void 0:x.type)==="image"&&!b.has(y)&&x.buffer);if(m.length>0){m.sort((S,E)=>(E.media.buffer.length||0)-(S.media.buffer.length||0));const x=m[0].media,y=x.buffer,P=y instanceof ArrayBuffer?y:y.buffer?y.buffer.slice(y.byteOffset||0,(y.byteOffset||0)+y.byteLength):null;if(P){const S=(x.extension||"").toLowerCase();p={bytes:P,extension:S==="jpg"?"jpeg":S||"png",quelle:"auto-aus-vorlage"}}}}catch(b){console.warn("[fahrtgeld] Unterschrift-Auto-Extraktion fehlgeschlagen:",b)}if(!r&&!i&&!o&&!c&&!g&&!u)return{ok:!1,fehler:"Diese Excel scheint nicht im Format der Putzmeister-Fahrgelderstattung zu sein — keine der erwarteten Felder wurde gefunden. Bitte eine Original-Vorlage hochladen."};const f=[];return r||f.push("name"),i||f.push("persNr"),o||f.push("kst"),c||f.push("vonHaltestelle"),g||f.push("nachHaltestelle"),(!u||u<=0)&&f.push("betragProTag"),{ok:!0,format:"excel",konstanten:{name:r,persNr:i,kst:o,vonHaltestelle:c,nachHaltestelle:g,betragProTag:u},missing:f,unterschriftAuto:p}}async function Qi({templateBytes:e,monatKey:t,bsTage:n,konstanten:a,unterschriftBytes:s,unterschriftExtension:r}){const l=(await $e(async()=>{const{default:M}=await import("./exceljs.min-BhfpbegZ.js").then(F=>F.e);return{default:M}},__vite__mapDeps([0,1]))).default,d=new l.Workbook;let i;if(e){try{await d.xlsx.load(e)}catch{throw new Error("Die hinterlegte Excel-Vorlage ist beschädigt — bitte unter Fahrgelderstattung neu hochladen.")}if(i=d.getWorksheet(wt)??d.worksheets[0],!i)throw new Error("Die Excel-Vorlage hat kein passendes Arbeitsblatt — bitte eine Original-Fahrgelderstattung-Vorlage hochladen.")}else{i=d.addWorksheet(wt,{properties:{defaultColWidth:14}}),i.getColumn("A").width=14,i.getColumn("B").width=2,i.getColumn("C").width=22,i.getColumn("D").width=2,i.getColumn("E").width=12,i.getColumn("F").width=14,i.getColumn("G").width=12,i.mergeCells("A1:G2");const M=i.getCell("A1");M.value="Fahrgelderstattung für Berufsschulbesuche",M.font={bold:!0,size:16},M.alignment={vertical:"middle",horizontal:"center"},i.getCell("A4").value="Monat / Jahr:",i.getCell("A5").value="Name, Vorname:",i.getCell("E4").value="Pers.-Nr.:",i.getCell("E5").value="KST:";for(const k of["A4","A5","E4","E5"])i.getCell(k).font={bold:!0};i.mergeCells("A8:A9"),i.getCell("A8").value="Datum",i.mergeCells("C8:E8"),i.getCell("C8").value="Fahrstrecke (Hin- und Rückfahrt)",i.getCell("C9").value="von",i.mergeCells("E9:F9"),i.getCell("E9").value="nach",i.mergeCells("G8:G9"),i.getCell("G8").value="Betrag in €";for(const k of["A8","C8","C9","E9","G8"]){const w=i.getCell(k);w.font={bold:!0},w.alignment={vertical:"middle",horizontal:"center"}}for(let k=ge;k<=ve;k++)i.mergeCells(`E${k}:F${k}`);const F={style:"thin",color:{argb:"FF888888"}};for(let k=8;k<=20;k++)for(const w of["A","C","E","G"])i.getCell(`${w}${k}`).border={top:F,bottom:F,left:F,right:F};i.getCell("A22").value="Auszubildender:",i.getCell("C22").value="Ausbilderin:",i.getCell("E22").value="Entgeltabrechnung:",i.getCell("G20").value={formula:"SUM(G10:G19)",result:0},i.getCell("F20").value="Summe",i.getCell("F20").font={bold:!0},i.getCell("F20").alignment={horizontal:"right"};for(const k of["A22","C22","E22"])i.getCell(k).font={bold:!0};i.getColumn("G").numFmt="#,##0.00",i.getColumn("A").numFmt="dd.mm.yyyy"}const[o,c]=t.split("-").map(M=>parseInt(M,10)),g=new Date(o,c-1,1,12,0,0),h=T(g,"MMMM yy",{locale:ee}),u=i.getCell(Ji);u.value=h,u.numFmt="@",i.getCell(Hn).value=a.name,i.getCell(Rn).value=`Pers.-Nr.: ${a.persNr}`,i.getCell(jn).value=`KST: ${a.kst}`;for(let M=ge;M<=ve;M++)i.getCell(`A${M}`).value=null,i.getCell(`C${M}`).value=null,i.getCell(`E${M}`).value=null,i.getCell(`G${M}`).value=null;const p=ve-ge+1,f=n.slice(0,p);for(let M=0;M<f.length;M++){const F=f[M],k=ge+M;i.getCell(`A${k}`).value=W(F.datum),i.getCell(`C${k}`).value=a.vonHaltestelle,i.getCell(`E${k}`).value=a.nachHaltestelle,i.getCell(`G${k}`).value=a.betragProTag}const b=+(f.length*(a.betragProTag??0)).toFixed(2),m=i.getCell(`G${ve+1}`);m.value={formula:`SUM(G${ge}:G${ve})`,result:b};const y=T(new Date,"dd.MM.yyyy"),P=i.getCell("A21");if(P.value=a.unterschriftText?`${y} ${a.unterschriftText}`:y,P.alignment={vertical:"bottom",horizontal:"center",wrapText:!1},s&&r){const M=d.addImage({buffer:s,extension:r}),F=197,k=80,w=55,I=185,G=rr(s);let ce=I,de=w;if(G&&G.width>0&&G.height>0){const Se=Math.min(I/G.width,w/G.height);ce=Math.round(G.width*Se),de=Math.round(G.height*Se)}const Ae=Math.max(0,Math.round((F-ce)/2))/k;i.addImage(M,{tl:{col:Ae,row:20.04},ext:{width:ce,height:de},editAs:"oneCell"})}for(let M=ve+3;M<=ve+5;M++)for(const F of["A","B","C","D","E","F","G"]){const k=i.getCell(`${F}${M}`),w=k.value;typeof w=="string"&&/^[A-Z]\d+(-\d+)?$/.test(w.trim())&&(k.value=null)}const S=await d.xlsx.writeBuffer(),E=new Blob([S],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),K=qn(a.name,g);return{blob:E,dateiname:K,anzahlTage:f.length,ueberzaehlig:n.length-f.length}}function qn(e,t,n="xlsx"){const a=T(t,"MMMM",{locale:ee}),s=T(t,"yy");let r=(e||"Azubi").trim();const l=/^(.+?),\s*(.+)$/.exec(r);return l&&(r=`${l[2].trim()} ${l[1].trim()}`),`Fahrgelderstattung ${r} ${a} ${s}.${n}`}let mt=null;async function er(){return mt||(mt=(async()=>{const t=await fetch("/better-ess/templates/fahrgeld-vorlage.pdf");if(!t.ok)throw new Error(`Standard-PDF-Vorlage nicht ladbar (HTTP ${t.status})`);const n=await t.arrayBuffer(),s=(await Nn(n)).layout||await tr(n);return{bytes:n,layout:s}})()),mt}async function tr(e){const r=(await(await(await(await $e(()=>import("./pdfjs-BnPRJEQ6.js"),[])).getDocument({data:new Uint8Array(e.slice(0))}).promise).getPage(1)).getAnnotations()).filter(m=>m.subtype==="Widget").map(m=>{const[x,y,P,S]=m.rect;return{fieldName:m.fieldName,rect:m.rect,x:(x+P)/2,y:(y+S)/2}}),l=(m,x)=>x.y-m.y,d=r.filter(m=>m.y>370&&m.y<580),i=r.find(m=>m.y>660&&m.x<250),o=r.find(m=>m.y>660&&m.x>400),c=r.find(m=>m.y>630&&m.y<660&&m.x<250),g=d.filter(m=>m.x<140).sort(l),h=d.filter(m=>m.x>140&&m.x<290).sort(l),u=d.filter(m=>m.x>290&&m.x<460).sort(l),p=d.filter(m=>m.x>460).sort(l),f=r.find(m=>m.y<370&&m.y>320&&m.x>460),b=r.find(m=>m.y<340&&m.y>310&&m.x<200);return{monatJahrField:(i==null?void 0:i.fieldName)||null,persNrField:(o==null?void 0:o.fieldName)||null,nameField:(c==null?void 0:c.fieldName)||null,auszubildenderField:(b==null?void 0:b.fieldName)||null,summeField:(f==null?void 0:f.fieldName)||null,datumFields:g.map(m=>m.fieldName),vonFields:h.map(m=>m.fieldName),nachFields:u.map(m=>m.fieldName),betragFields:p.map(m=>m.fieldName),auszubildenderRect:(b==null?void 0:b.rect)||null}}async function nr({templateBytes:e,monatKey:t,bsTage:n,konstanten:a,layout:s,unterschriftBytes:r,unterschriftExtension:l}){if(!e||!s){const w=await er();e=e||w.bytes,s=s||w.layout}const{PDFDocument:d}=await $e(async()=>{const{PDFDocument:w}=await import("./index-e69lFYjk.js");return{PDFDocument:w}},__vite__mapDeps([2,1]));let i;try{i=await d.load(e,{ignoreEncryption:!0})}catch{throw new Error("Die hinterlegte PDF-Vorlage ist beschädigt — bitte unter Fahrgelderstattung neu hochladen.")}const o=i.getForm(),[c,g]=t.split("-").map(w=>parseInt(w,10)),h=new Date(c,g-1,1,12,0,0),u=T(h,"MMMM yy",{locale:ee});J(o,s.monatJahrField,u),a.name&&J(o,s.nameField,a.name),a.persNr&&J(o,s.persNrField,a.persNr);const p=s.datumFields||[],f=s.vonFields||[],b=s.nachFields||[],m=s.betragFields||[],x=Math.min(p.length,f.length,b.length,m.length);for(let w=0;w<x;w++)J(o,p[w],""),J(o,f[w],""),J(o,b[w],""),J(o,m[w],"");const y=n.slice(0,x),P=a.betragProTag!=null&&a.betragProTag>0?a.betragProTag.toFixed(2).replace(".",","):"";for(let w=0;w<y.length;w++){const I=y[w];J(o,p[w],ar(I.datum)),a.vonHaltestelle&&J(o,f[w],a.vonHaltestelle),a.nachHaltestelle&&J(o,b[w],a.nachHaltestelle),P&&J(o,m[w],P)}const S=+(y.length*(a.betragProTag??0)).toFixed(2);J(o,s.summeField,S.toFixed(2).replace(".",","));const E=T(new Date,"dd.MM.yyyy"),K=a.unterschriftText?`${E} ${a.unterschriftText}`:E;if(J(o,s.auszubildenderField,K),r&&s.auszubildenderRect)try{const I=(l||"png").toLowerCase()==="png"?await i.embedPng(r):await i.embedJpg(r),[G,ce,de,ye]=s.auszubildenderRect,Ae=de-G,Se=ye-ce,D=G,L=de,A=ye+1,j=Math.min(ye+30,366),z=L-D,U=Math.max(0,j-A);if(U>4&&I.width>0&&I.height>0){const V=Math.min(z*.92/I.width,U*.92/I.height),q=I.width*V,se=I.height*V,ie=D+(z-q)/2,Z=A+(U-se)/2;i.getPage(0).drawImage(I,{x:ie,y:Z,width:q,height:se})}}catch(w){console.warn("[fahrtgeld] Unterschrift-Embed fehlgeschlagen:",w)}try{o.updateFieldAppearances()}catch(w){console.warn("[fahrtgeld] updateFieldAppearances fehlgeschlagen:",w)}const M=await i.save(),F=new Blob([M],{type:"application/pdf"}),k=qn(a.name,h,"pdf");return{blob:F,dateiname:k,anzahlTage:y.length,ueberzaehlig:n.length-y.length}}function J(e,t,n){if(t)try{e.getTextField(t).setText(n??"")}catch{}}function ar(e){return T(W(e),"dd.MM.yyyy")}function Ge(e){const[t,n]=e.split("-").map(a=>parseInt(a,10));return T(new Date(t,n-1,1),"MMMM yyyy",{locale:ee})}function rn(e,t=null){const a={monat_jahr:Ge(e)},s=(t==null?void 0:t.betreff)??"Fahrgelderstattung {monat_jahr}",r=(t==null?void 0:t.text)??`Guten Tag Frau Mayer,

hiermit sende ich Ihnen das ausgefüllte Dokument für die Fahrgelderstattung vom {monat_jahr} zu.
Vielen Dank!`,l=ln(s,a),d=ln(r,a),i=new URLSearchParams;return i.set("cc","anika.kailer@putzmeister.com"),i.set("subject",l),i.set("body",d),`mailto:annika.mayer@putzmeister.com?${i.toString().replace(/\+/g,"%20")}`}function ln(e,t){return e.replace(/\{(\w+)\}/g,(n,a)=>t[a]!=null?String(t[a]):`{${a}}`)}function sr(e){const t=new Set;for(const n of e)n.tagestyp==="Berufsschule"&&(n.ist??0)>0&&t.add(n.monatKey);return[...t].sort().reverse()}function ir(e,t,n,a){var h,u;const s=t==null?void 0:t.berufsschulMuster;if(!s||!((h=s.wochentageWoechentlich)!=null&&h.length)&&!((u=s.wochentage14Taegig)!=null&&u.length))return{ausstehend:[],imMonatGesamt:n.length,vorhandenAnzahl:n.length};const[r,l]=e.split("-").map(p=>parseInt(p,10)),d=new Date(r,l-1,1),i=new Date(r,l,0),o=new Set(n.map(p=>p.datum)),c=[];let g=new Date(d);for(;g<=i;){if(!Ke(g)&&st(g,s)){const p=T(g,"yyyy-MM-dd");g>a&&!o.has(p)&&c.push(p)}g=Ve(g,1)}return{ausstehend:c,imMonatGesamt:n.length+c.length,vorhandenAnzahl:n.length}}function rr(e){const t=e instanceof ArrayBuffer?e:e!=null&&e.buffer?e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength):null;if(!t||t.byteLength<24)return null;const n=new DataView(t);if(n.getUint32(0)===2303741511&&n.getUint32(4)===218765834)return{width:n.getUint32(16),height:n.getUint32(20)};if(n.getUint16(0)===65496){let a=2;for(;a+9<n.byteLength;){if(n.getUint8(a)!==255)return null;const s=n.getUint8(a+1);if(s>=192&&s<=207&&s!==196&&s!==200&&s!==204)return{height:n.getUint16(a+5),width:n.getUint16(a+7)};const l=n.getUint16(a+2);if(l<2)return null;a+=2+l}}return null}function lr(e,t){const n=URL.createObjectURL(e),a=document.createElement("a");a.href=n,a.download=t,document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(n),1e3)}async function Oe({root:e}){var k,w,I,G,ce,de,ye,Ae,Se;const t=await Be();if(!t){or(e);return}const[n,a,s,r]=await Promise.all([oe(),ae(),Ne(),Os("fahrgeld_abgabe")]),l=s!=null&&s.stichtagAuswertung?new Date(s.stichtagAuswertung):new Date,d=sr(n),i=new Date,o=`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`;d.includes(o)||d.unshift(o);const c=d,g=t.format||"excel",h=g==="pdf"?"PDF":"Excel",u=Array.isArray(t.missing)?t.missing:[],p={name:"Name",persNr:"Personalnummer",kst:"Kostenstelle",vonHaltestelle:'Strecke „von"',nachHaltestelle:'Strecke „nach"',betragProTag:"Tagessatz"},f=u.map(D=>p[D]||D),b=(D,L)=>D?$(D):`<span class="fahrtgeld-fehlend" title="In der hochgeladenen Vorlage nicht gefunden — bitte vor Abgabe ergänzen.">${$(p[L]||L)} fehlt</span>`;e.innerHTML=`
    <h1 class="view-title">Fahrgelderstattung</h1>
    <p class="view-subtitle">Generiere die monatliche Fahrgelderstattung mit deinen erkannten Berufsschultagen.</p>

    <div class="card fahrtgeld-template-info" style="margin-bottom: 24px;">
      <div class="card-split">
        <div>
          <h3 style="margin: 0; display: flex; align-items: center; gap: 8px;">
            Vorlage geladen
            <span class="fahrtgeld-format-badge ${g==="pdf"?"is-pdf":"is-excel"}">${h}</span>
          </h3>
          <p class="hint" style="margin: 4px 0 0;">
            ${b(t.konstanten.name,"name")} ·
            Pers.-Nr. ${b(t.konstanten.persNr,"persNr")} ·
            KST ${b(t.konstanten.kst,"kst")}
          </p>
          <p class="hint" style="margin: 4px 0 0;">
            ${b(t.konstanten.vonHaltestelle,"vonHaltestelle")} → ${b(t.konstanten.nachHaltestelle,"nachHaltestelle")} ·
            ${(t.konstanten.betragProTag??0)>0?`${t.konstanten.betragProTag.toFixed(2).replace(".",",")} € pro Tag`:'<span class="fahrtgeld-fehlend">Tagessatz fehlt</span>'}
          </p>
        </div>
        <div style="display: flex; gap: 8px;">
          <button class="btn sm" id="btn-template-replace">Vorlage ersetzen</button>
          <button class="btn sm" id="btn-template-clear">Vorlage löschen</button>
        </div>
      </div>
      ${f.length>0?`
        <div class="fahrtgeld-warning-box" style="margin-top: 12px;">
          <strong>⚠ ${f.length} Feld${f.length===1?"":"er"} fehlte${f.length===1?"":"n"} in deiner Vorlage:</strong>
          ${f.map(D=>`<span class="fahrtgeld-warning-chip">${$(D)}</span>`).join(" ")}
          <p class="hint" style="margin: 6px 0 0;">${g==="pdf"?"Die fehlenden Felder bleiben in der generierten PDF leer — du kannst sie im PDF-Reader oder handschriftlich ergänzen, bevor du sie abgibst.":"Die fehlenden Felder bleiben in der generierten Excel leer — bitte vor Abgabe ergänzen."}</p>
        </div>
      `:""}
    </div>

    <div class="card fahrtgeld-signature-info" style="margin-bottom: 24px;">
      <div class="card-split">
        <div>
          <h3 style="margin: 0;">Unterschrift</h3>
          ${(k=t.unterschrift)!=null&&k.dataUrl?`
            <p class="hint" style="margin: 4px 0 8px;">Wird in jede${g==="pdf"?" generierte PDF":" generierte Excel"} als Auszubildender-Unterschrift eingefügt. Datum (Tag der Generierung) wird automatisch gesetzt.</p>
            <div class="fahrtgeld-signature-preview">
              <img src="${$(t.unterschrift.dataUrl)}" alt="Unterschrift" />
            </div>
          `:`
            <p class="hint" style="margin: 4px 0 0;">Noch keine Unterschrift hinterlegt. Aktuell bleibt das Feld in der ${g==="pdf"?"PDF":"Excel"} leer (nur das Datum wird gesetzt).</p>
          `}
        </div>
        <div style="display: flex; gap: 8px; align-items: flex-start;">
          <button class="btn sm" id="btn-signature-upload">${(w=t.unterschrift)!=null&&w.dataUrl?"Ersetzen":"Hochladen"}</button>
          ${(I=t.unterschrift)!=null&&I.dataUrl?'<button class="btn sm" id="btn-signature-clear">Entfernen</button>':""}
        </div>
      </div>
    </div>

    ${c.length===0?`
      <div class="empty-state">
        <div class="empty-state-icon">📅</div>
        <h2>Keine Berufsschultage erkannt</h2>
        <p>Lade einen Zeitnachweis unter <a href="#/daten">Daten</a> hoch — danach erscheinen hier die Monate.</p>
      </div>
    `:(()=>{var j;const D=c.map((z,U)=>{const V=sn(n,z),q=+(V.length*(t.konstanten.betragProTag??0)).toFixed(2),se=V.length>10,ie=ir(z,a,V,l),Z=ie.ausstehend.length,N=+((V.length+Z)*(t.konstanten.betragProTag??0)).toFixed(2),lt=Z>0?ie.ausstehend.map(Pe=>B(W(Pe))).join(", "):"";return{mk:z,bs:V,summe:q,ueberzaehlig:se,offen:Z,offenListe:lt,summeMitOffen:N,idx:U}}),L=((j=D.find(z=>z.bs.length>0))==null?void 0:j.mk)??D[0].mk,A=D.find(z=>z.mk===L)??D[0];return`
          <div class="card fahrtgeld-generate-card">
            <div class="fahrtgeld-generate-buttons">
              <button class="btn-generate-big" id="btn-fahrtgeld-generate-excel" data-format="excel" ${A.bs.length===0?"disabled":""}>
                <img src="excel-logo.png" alt="" class="excel-logo-big" />
                <span class="btn-generate-label">Excel</span>
              </button>
              <button class="btn-generate-big" id="btn-fahrtgeld-generate-pdf" data-format="pdf" ${A.bs.length===0?"disabled":""}>
                <img src="pdf-logo.png" alt="" class="excel-logo-big" />
                <span class="btn-generate-label">PDF</span>
              </button>
              <a class="btn-mail-big" id="btn-fahrtgeld-mail" href="${$(rn(A.mk,r))}" target="_blank" rel="noopener" ${A.bs.length===0?'aria-disabled="true"':""}>
                <img src="outlook-logo.png" alt="" class="outlook-logo-big" />
                <span>E-Mail</span>
              </a>
            </div>
            <div class="fahrtgeld-generate-info" id="fahrtgeld-generate-info">
              <div class="fahrtgeld-generate-monat">${$(Ge(A.mk))}</div>
              <div class="hint" id="fahrtgeld-generate-detail">
                ${A.bs.length} BS-Tag${A.bs.length===1?"":"e"} erfasst · ${A.summe.toFixed(2).replace(".",",")} €
                ${A.offen>0?`<br><span class="fahrtgeld-pending">⏳ Laut Schul-Rhythmus kommen noch ${A.offen} BS-Tag${A.offen===1?"":"e"}: ${$(A.offenListe)} (mit allen: ${A.summeMitOffen.toFixed(2).replace(".",",")} €)</span>`:""}
                ${A.ueberzaehlig?`<br><span style="color: var(--warn); font-weight: 600;">· ${A.bs.length-10} überzählig (max 10/Monat)</span>`:""}
              </div>
              <div class="hint" style="margin-top: 6px; font-size: 12px;">⚠ Mail-Anhang muss manuell aus dem Download-Ordner gezogen werden — Browser können keine Anhänge automatisch hinzufügen.</div>
            </div>
          </div>

          <div class="card">
            <h2>Monat auswählen</h2>
            <p class="hint" style="margin-bottom: 16px;">Pro Monat zählen nur Berufsschul-Tage, an denen du nachweislich anwesend warst. Krank, Urlaub und Stempelzeit-Tage werden ausgefiltert.</p>
            <div class="fahrtgeld-monate">
              ${D.map(z=>{const U=z.mk===L?"checked":"",V=`data-monat="${$(z.mk)}" data-offen="${z.offen}" data-offen-liste="${$(z.offenListe)}" data-anzahl="${z.bs.length}" data-summe="${z.summe.toFixed(2).replace(".",",")}" data-summe-mit-offen="${z.summeMitOffen.toFixed(2).replace(".",",")}" data-monat-label="${$(Ge(z.mk))}" data-ueberzaehlig="${z.ueberzaehlig?"1":"0"}"`;return`
                  <label class="fahrtgeld-monat-row${z.offen>0?" has-pending":""}${z.bs.length===0?" empty":""}" ${V}>
                    <input type="radio" name="fg-monat-sel" value="${$(z.mk)}" ${U} ${z.bs.length===0?"disabled":""} class="fahrtgeld-monat-radio" />
                    <div class="fahrtgeld-monat-titel">
                      <div class="fahrtgeld-monat-name">${$(Ge(z.mk))}</div>
                      <div class="hint">
                        ${z.bs.length} BS-Tag${z.bs.length===1?"":"e"} erfasst · ${z.summe.toFixed(2).replace(".",",")} €
                        ${z.offen>0?`<br><span class="fahrtgeld-pending">⏳ noch ${z.offen} BS-Tag${z.offen===1?"":"e"} laut Rhythmus</span>`:""}
                        ${z.ueberzaehlig?`<br><span style="color: var(--warn); font-weight: 600;">· ${z.bs.length-10} überzählig</span>`:""}
                      </div>
                    </div>
                  </label>
                `}).join("")}
            </div>
          </div>
        `})()}

    <input type="file" id="fahrtgeld-replace-input" accept=".xlsx,.xls,.xlsm,.pdf,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,application/pdf" style="display: none;" />
    <input type="file" id="fahrtgeld-signature-input" accept="image/png,image/jpeg,.png,.jpg,.jpeg" style="display: none;" />
  `,(G=e.querySelector("#btn-template-replace"))==null||G.addEventListener("click",()=>{e.querySelector("#fahrtgeld-replace-input").click()}),(ce=e.querySelector("#fahrtgeld-replace-input"))==null||ce.addEventListener("change",async D=>{var A;const L=(A=D.target.files)==null?void 0:A[0];L&&await xt(L,e)}),(de=e.querySelector("#btn-template-clear"))==null||de.addEventListener("click",async()=>{await ne("Beim nächsten Öffnen wirst du gebeten, eine neue Vorlage hochzuladen.",{title:"Vorlage löschen?",confirmLabel:"Löschen",variant:"danger"})&&(await Cs(),O("Vorlage gelöscht."),Oe({root:e}))}),(ye=e.querySelector("#btn-signature-upload"))==null||ye.addEventListener("click",()=>{e.querySelector("#fahrtgeld-signature-input").click()}),(Ae=e.querySelector("#fahrtgeld-signature-input"))==null||Ae.addEventListener("change",async D=>{var A;const L=(A=D.target.files)==null?void 0:A[0];L&&await cr(L,e)}),(Se=e.querySelector("#btn-signature-clear"))==null||Se.addEventListener("click",async()=>{if(!await ne("Die hochgeladene Unterschrift wird entfernt — generierte Excel haben dann keine Unterschrift mehr.",{title:"Unterschrift entfernen?",confirmLabel:"Entfernen",variant:"danger"}))return;const D=await Be();D&&(await At({...D,unterschrift:null}),O("Unterschrift entfernt."),Oe({root:e}))});const m=e.querySelector("#btn-fahrtgeld-generate-excel"),x=e.querySelector("#btn-fahrtgeld-generate-pdf"),y=[m,x].filter(Boolean),P=e.querySelector("#btn-fahrtgeld-mail"),S=e.querySelector(".fahrtgeld-generate-monat"),E=e.querySelector("#fahrtgeld-generate-detail"),K=e.querySelectorAll(".fahrtgeld-monat-radio");function M(){const D=e.querySelector(".fahrtgeld-monat-radio:checked");if(!D)return;const L=D.closest(".fahrtgeld-monat-row");if(!L)return;const A=D.value,j=parseInt(L.getAttribute("data-anzahl")||"0",10),z=L.getAttribute("data-summe")||"0,00",U=parseInt(L.getAttribute("data-offen")||"0",10),V=L.getAttribute("data-offen-liste")||"",q=L.getAttribute("data-summe-mit-offen")||z,se=L.getAttribute("data-monat-label")||"",ie=L.getAttribute("data-ueberzaehlig")==="1";if(S&&(S.textContent=se),E){const Z=[`${j} BS-Tag${j===1?"":"e"} erfasst · ${z} €`];U>0&&Z.push(`<br><span class="fahrtgeld-pending">⏳ Laut Schul-Rhythmus kommen noch ${U} BS-Tag${U===1?"":"e"}: ${$(V)} (mit allen: ${q} €)</span>`),ie&&Z.push(`<br><span style="color: var(--warn); font-weight: 600;">· ${j-10} überzählig (max 10/Monat)</span>`),E.innerHTML=Z.join("")}y.forEach(Z=>{Z.disabled=j===0}),P&&(P.href=rn(A,r),j===0?P.setAttribute("aria-disabled","true"):P.removeAttribute("aria-disabled"))}K.forEach(D=>D.addEventListener("change",M));async function F(D){var ie,Z;const L=e.querySelector(".fahrtgeld-monat-radio:checked");if(!L){Y("Bitte einen Monat auswählen.",{type:"warn"});return}const A=L.closest(".fahrtgeld-monat-row"),j=L.value,z=parseInt((A==null?void 0:A.getAttribute("data-offen"))||"0",10),U=(A==null?void 0:A.getAttribute("data-offen-liste"))||"";if(z>0&&!await ne(`Laut deinem Schul-Rhythmus kommen in diesem Monat noch ${z} BS-Tag${z===1?"":"e"}:

${U}

Diese Tage sind noch nicht im Zeitnachweis-PDF und werden in der ${D==="pdf"?"PDF":"Excel"} fehlen. Trotzdem jetzt für die bisher erfassten Tage generieren?`,{title:"Noch ausstehende BS-Tage",confirmLabel:"Trotzdem generieren"}))return;const V=D==="pdf"?x:m;V&&(V.disabled=!0);const q=V==null?void 0:V.querySelector(".btn-generate-label"),se=q==null?void 0:q.textContent;q&&(q.textContent="Erstelle …");try{const N=await Be(),lt=await oe(),Pe=sn(lt,j);if(!Pe.length){Y("Für diesen Monat sind keine BS-Anwesenheits-Tage erkannt.",{type:"warn"});return}const _t=(ie=N.unterschrift)==null?void 0:ie.bytes,Bt=(Z=N.unterschrift)==null?void 0:Z.extension,Wt=N.format||"excel",ot=Wt===D,Ot=ot?N.bytes:null,Gn=ot&&D==="pdf"?N.layout:null,{blob:Un,dateiname:Vt,ueberzaehlig:ct}=D==="pdf"?await nr({templateBytes:Ot,layout:Gn,monatKey:j,bsTage:Pe,konstanten:N.konstanten,unterschriftBytes:_t,unterschriftExtension:Bt}):await Qi({templateBytes:Ot,monatKey:j,bsTage:Pe,konstanten:N.konstanten,unterschriftBytes:_t,unterschriftExtension:Bt});lr(Un,Vt);const Kt=D==="pdf"?"PDF":"Excel",Jn=Array.isArray(N.missing)&&N.missing.length>0?` — bitte ${N.missing.length} fehlendes Feld${N.missing.length===1?"":"er"} vor Abgabe ergänzen`:"",Yn=ot?"":` (aus deiner ${Wt==="pdf"?"PDF-":"Excel-"}Vorlage in ${Kt} überführt)`;O(`${Kt} erstellt: ${Vt}${ct>0?` (${ct} weiterer Tag${ct===1?"":"e"} passte/n nicht in die Vorlage)`:""}${Yn}${Jn}`)}catch(N){console.error("Fahrtgeld-Generierung fehlgeschlagen:",N),Y(`Fehler: ${N.message||N}`,{type:"error",duration:8e3})}finally{V&&(V.disabled=!1),q&&se&&(q.textContent=se)}}m==null||m.addEventListener("click",()=>F("excel")),x==null||x.addEventListener("click",()=>F("pdf"))}function or(e){e.innerHTML=`
    <h1 class="view-title">Fahrgelderstattung</h1>
    <p class="view-subtitle">Generiere deine monatlichen Fahrgelderstattungs-Formulare auf Knopfdruck.</p>

    <div class="card fahrtgeld-empty">
      <div class="fahrtgeld-dropzone" id="fahrtgeld-dropzone" tabindex="0" role="button" aria-label="Fahrgeld-Vorlage hochladen">
        <div class="fahrtgeld-empty-icons">
          <img src="excel-logo.png" alt="" class="fahrtgeld-empty-icon-img" />
          <span class="fahrtgeld-empty-or">oder</span>
          <img src="pdf-logo.png" alt="" class="fahrtgeld-empty-icon-img" />
        </div>
        <h2>Bestehende Fahrgelderstattung als Vorlage hochladen</h2>
        <p class="hint">Excel oder PDF hierher ziehen oder klicken zum Auswählen</p>
      </div>
      <input type="file" id="fahrtgeld-upload-input" accept=".xlsx,.xls,.xlsm,.pdf,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,application/pdf" style="display: none;" />
    </div>
  `;const t=e.querySelector("#fahrtgeld-dropzone"),n=e.querySelector("#fahrtgeld-upload-input");t==null||t.addEventListener("click",()=>n.click()),t==null||t.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),n.click())}),n==null||n.addEventListener("change",async a=>{var r;const s=(r=a.target.files)==null?void 0:r[0];s&&await xt(s,e)}),["dragenter","dragover"].forEach(a=>{t==null||t.addEventListener(a,s=>{s.preventDefault(),s.stopPropagation(),t.classList.add("is-dragover")})}),["dragleave","drop"].forEach(a=>{t==null||t.addEventListener(a,s=>{s.preventDefault(),s.stopPropagation(),t.classList.remove("is-dragover")})}),t==null||t.addEventListener("drop",async a=>{var r,l;const s=(l=(r=a.dataTransfer)==null?void 0:r.files)==null?void 0:l[0];s&&await xt(s,e)})}async function cr(e,t){try{if(!["image/png","image/jpeg"].includes(e.type)&&!/\.(png|jpe?g)$/i.test(e.name)){Y("Bitte ein PNG oder JPG hochladen.",{type:"warn"});return}if(e.size>2*1024*1024){Y(`Die Bilddatei ist zu groß (${(e.size/1024/1024).toFixed(1)} MB). Maximal 2 MB — bitte komprimiert oder kleiner hochladen.`,{type:"warn",duration:8e3});return}const a=await e.arrayBuffer(),s=/\.png$/i.test(e.name)||e.type==="image/png"?"png":"jpeg",r=await new Promise((d,i)=>{const o=new FileReader;o.onload=()=>d(o.result),o.onerror=i,o.readAsDataURL(e)}),l=await Be();if(!l){Y("Bitte zuerst eine Excel-Vorlage hochladen.",{type:"warn"});return}await At({...l,unterschrift:{bytes:a,extension:s,dataUrl:r,hochgeladenAm:new Date().toISOString()}}),O("Unterschrift gespeichert."),Oe({root:t})}catch(n){console.error("Unterschrift-Upload fehlgeschlagen:",n),Y(`Fehler beim Verarbeiten: ${n.message||n}`,{type:"error",duration:8e3})}}async function xt(e,t){try{const n=await e.arrayBuffer(),a=await Yi(n);if(!a.ok){Y(`Vorlage nicht erkannt: ${a.fehler}`,{type:"error",duration:8e3});return}const s=await Be();let r=s==null?void 0:s.unterschrift;if(!r&&a.unterschriftAuto){const i=dr(a.unterschriftAuto.bytes,a.unterschriftAuto.extension);r={bytes:a.unterschriftAuto.bytes,extension:a.unterschriftAuto.extension,dataUrl:i,quelle:"auto-aus-vorlage",hochgeladenAm:new Date().toISOString()}}await At({bytes:n,konstanten:a.konstanten,format:a.format||"excel",layout:a.layout||null,missing:a.missing||[],vorhandeneEintraege:a.vorhandeneEintraege||null,unterschrift:r,hochgeladenAm:new Date().toISOString(),dateiname:e.name});const l=a.format==="pdf"?"PDF-Vorlage":"Excel-Vorlage",d=a.missing&&a.missing.length>0?` · ${a.missing.length} Feld${a.missing.length===1?"":"er"} fehlte${a.missing.length===1?"":"n"}`:"";a.unterschriftAuto&&!(s!=null&&s.unterschrift)?O(`${l} gespeichert: ${a.konstanten.name||e.name} (Unterschrift aus Vorlage übernommen)${d}`):O(`${l} gespeichert: ${a.konstanten.name||e.name}${d}`),document.dispatchEvent(new CustomEvent("better-ess:fahrgeld-template-uploaded")),Oe({root:t})}catch(n){console.error("Vorlage-Upload fehlgeschlagen:",n),Y(`Fehler beim Verarbeiten: ${n.message||n}`,{type:"error",duration:8e3})}}function dr(e,t){const n=new Uint8Array(e);let a="";for(let l=0;l<n.length;l++)a+=String.fromCharCode(n[l]);const s=btoa(a);return`data:${t==="png"?"image/png":"image/jpeg"};base64,${s}`}async function ur({root:e}){const t=await oe();if(!t.length){e.innerHTML='<h1 class="view-title">Berichtsheft</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const n=[...new Set(t.map(r=>r.monatKey))].sort().reverse();e.innerHTML=`
    <h1 class="view-title">Berichtsheft-Export</h1>
    <p class="view-subtitle">Kopiere die Arbeitsstunden im HH:MM-Format direkt in dein Berichtsheft.</p>

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 16px; align-items: center;">
        <h2 style="margin: 0;">Filter</h2>
        <div style="display: flex; gap: 8px; align-items: center;">
          <label style="color: var(--fg-muted); font-size: 13px;">Monat:</label>
          <select id="filter-monat">
            <option value="">Alle</option>
            ${n.map(r=>`<option value="${r}">${fr(r)}</option>`).join("")}
          </select>
          <button class="btn sm" id="btn-copy-all">Alle sichtbaren kopieren</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div id="liste"></div>
    </div>
  `;const a=e.querySelector("#filter-monat");a.addEventListener("change",()=>s()),e.querySelector("#btn-copy-all").addEventListener("click",()=>{const r=e.querySelectorAll("#liste tr[data-copy]"),l=Array.from(r).map(d=>d.getAttribute("data-copy")).join(`
`);navigator.clipboard.writeText(l).then(()=>O(`${r.length} Zeilen kopiert.`))});function s(){const r=a.value,d=(r?t.filter(i=>i.monatKey===r):t).filter(i=>i.ist!=null&&i.ist>0&&i.tagestyp!=="Wochenende");e.querySelector("#liste").innerHTML=gr(d),e.querySelectorAll(".copy-val").forEach(i=>{i.addEventListener("click",async()=>{const o=i.getAttribute("data-val");await navigator.clipboard.writeText(o),i.classList.add("ok");const c=i.textContent;i.textContent="✓ kopiert",setTimeout(()=>{i.classList.remove("ok"),i.textContent=c},1200)})})}s()}function gr(e){return e.length?`
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
        ${e.map(t=>{const n=Je(t.ist),a=`${B(W(t.datum))}	${n}`;return`
            <tr data-copy="${on(a)}">
              <td class="tabular">${B(W(t.datum))}</td>
              <td>${hr(t.wochentag)}</td>
              <td>${t.tagestyp?`<span class="pill ${mr(t.tagestyp)}">${Zn(t.tagestyp)}</span>`:"—"}</td>
              <td class="num tabular">${t.ist.toFixed(2).replace(".",",")}</td>
              <td class="num tabular" style="font-weight: 600;">${n}</td>
              <td><button class="copy-val" data-val="${on(n)}">📋 ${n}</button></td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `:'<p style="color: var(--fg-muted);">Keine Tage in dieser Auswahl.</p>'}function hr(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function fr(e){const[t,n]=e.split("-");return T(new Date(parseInt(t),parseInt(n)-1,1),"LLLL yyyy",{locale:ee})}function mr(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function Zn(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function on(e){return Zn(e)}async function pr({root:e}){const[t,n,a,s]=await Promise.all([oe(),ae(),nt(),at()]),r=Object.fromEntries(s.map(i=>[i.key,i])),l=it(t,n,new Date).filter(i=>i.mailVorlageKey),d=Cn(a);e.innerHTML=`
    <h1 class="view-title">Mail-Vorlagen</h1>
    <p class="view-subtitle">Vorformulierte Mails an die Zeitwirtschaft bei erkannten Fehlern im Zeitnachweis.</p>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Offene Warnungen mit Mail-Vorschlag</h2>
      <p class="hint" style="margin-bottom: 16px;">Diese Warnungen haben einen roten Schweregrad und sind eine direkte Mail wert.</p>

      ${l.length===0?'<div class="empty-state"><div class="empty-state-icon">✓</div><p>Keine akuten Warnungen — top.</p></div>':l.map(i=>br(i,n,r)).join("")}

      ${d.length>0?`
        <h3 style="margin-top: 24px;">Saldo-Plausibilität</h3>
        ${d.map(i=>`
          <div class="alert severity-warn">
            <div class="alert-icon">⚠</div>
            <div class="alert-body">
              <div class="alert-title">${Q(i.titel)}</div>
              <p style="margin: 4px 0; font-size: 13px;">${Q(i.beschreibung)}</p>
            </div>
          </div>
        `).join("")}
      `:""}
    </div>

    <div class="card">
      <h2>Vorlagen verwalten</h2>
      <p class="hint" style="margin-bottom: 16px;">Passe die Texte an deinen Stil an. Platzhalter wie <code>{name}</code>, <code>{datum}</code>, <code>{wochentag}</code>, <code>{ist}</code>, <code>{soll}</code> werden automatisch gefüllt.</p>

      <div id="vorlagen-editor">
        ${Object.keys(We).map(i=>{const o=He(i,r[i]);return yr(o)}).join("")}
      </div>
    </div>
  `,vr(e),wr(e)}function br(e,t,n){const a=He(e.mailVorlageKey,n[e.mailVorlageKey]);if(!a)return"";const s=Pt(t,e),r=_n(a,s),l=Et(t,a,s);return`
    <div class="alert severity-${e.schweregrad}" style="flex-direction: column; align-items: stretch;">
      <div style="display: flex; align-items: flex-start; gap: 12px;">
        <div class="alert-icon">${e.schweregrad==="error"?"!":"⚠"}</div>
        <div class="alert-body">
          <div class="alert-title">${Q(e.titel)}</div>
          <p style="margin: 4px 0; font-size: 13px;">${Q(e.beschreibung)}</p>
        </div>
      </div>
      <details style="margin-top: 12px;">
        <summary style="cursor: pointer; color: var(--fg-muted); font-size: 13px;">Mail-Vorschau anzeigen</summary>
        <div style="background: var(--surface-2); border-radius: var(--radius-md); padding: 12px; margin-top: 8px; font-family: var(--font-mono); font-size: 12px; white-space: pre-wrap; line-height: 1.5;">
<strong>An:</strong> ${Q(t.zeitwirtschaftEmail||"")}
<strong>Betreff:</strong> ${Q(r.betreff)}

${Q(r.text)}
        </div>
      </details>
      <div class="alert-actions mail-actions-big" style="margin-top: 16px;">
        <a class="btn-mail-big" href="${l}" target="_blank" rel="noopener"><img src="outlook-logo.png" alt="" class="outlook-logo-big" /><span>Mail Vorschlag in Outlook</span></a>
        <button class="btn sm btn-copy-mail" data-subject="${kt(r.betreff)}" data-body="${kt(r.text)}">📋 Betreff + Text kopieren</button>
      </div>
    </div>
  `}function yr(e){return`
    <div class="vorlagen-item" data-key="${e.key}" style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
      <div class="card-split" style="margin-bottom: 12px;">
        <div>
          <h3 style="text-transform: none; letter-spacing: 0; color: var(--fg); font-size: 16px;">${Q(e.titel)}</h3>
          <p class="hint" style="margin: 4px 0;">${Q(e.beschreibung)}</p>
        </div>
        <button class="btn sm btn-reset-vorlage" data-key="${e.key}">Auf Default zurücksetzen</button>
      </div>
      <div class="form-group">
        <label>Betreff</label>
        <input type="text" class="v-betreff" value="${kt(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 240px;">${Q(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function vr(e){e.querySelectorAll(".btn-save-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const n=t.getAttribute("data-key"),a=t.closest(".vorlagen-item"),s=a.querySelector(".v-betreff").value,r=a.querySelector(".v-text").value;await Xe(n,{betreff:s,text:r}),O("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const n=t.getAttribute("data-key"),a=We[n];a&&await ne(`Deine Anpassungen an "${a.titel}" gehen verloren.`,{title:"Vorlage zurücksetzen?",confirmLabel:"Zurücksetzen",variant:"danger"})&&(await Xe(n,{betreff:a.betreff,text:a.text}),O("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function wr(e){e.querySelectorAll(".btn-copy-mail").forEach(t=>{t.addEventListener("click",async()=>{const n=t.getAttribute("data-subject"),a=t.getAttribute("data-body"),s=`Betreff: ${n}

${a}`;await navigator.clipboard.writeText(s),O("Mail-Text kopiert.")})})}function Q(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function kt(e){return Q(e)}async function xr({root:e}){const[t,n]=await Promise.all([ae(),at()]),a=Object.fromEntries(n.map(s=>[s.key,s]));e.innerHTML=`
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
          ${Object.keys(We).map(s=>{const r=He(s,a[s]);return kr(r)}).join("")}
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
  `,e.querySelector("#pause-sel").addEventListener("change",async s=>{const r={...t,pausenRegel:s.target.value};await Ye(r),O("Pausen-Regel gespeichert.")}),e.querySelectorAll(".btn-save-vorlage").forEach(s=>{s.addEventListener("click",async()=>{const r=s.getAttribute("data-key"),l=s.closest(".vorlagen-item"),d=l.querySelector(".v-betreff").value,i=l.querySelector(".v-text").value;await Xe(r,{betreff:d,text:i}),O("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(s=>{s.addEventListener("click",async()=>{const r=s.getAttribute("data-key"),l=We[r];l&&await ne(`Deine Anpassungen an "${l.titel}" gehen verloren.`,{title:"Vorlage zurücksetzen?",confirmLabel:"Zurücksetzen",variant:"danger"})&&(await Xe(r,{betreff:l.betreff,text:l.text}),O("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function kr(e){return`
    <div class="vorlagen-item" data-key="${e.key}" style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
      <div class="card-split" style="margin-bottom: 12px;">
        <div>
          <h3 style="text-transform: none; letter-spacing: 0; color: var(--fg); font-size: 16px;">${Ue(e.titel)}</h3>
          <p class="hint" style="margin: 4px 0;">${Ue(e.beschreibung)}</p>
        </div>
        <button class="btn sm btn-reset-vorlage" data-key="${e.key}">Auf Default zurücksetzen</button>
      </div>
      <div class="form-group">
        <label>Betreff</label>
        <input type="text" class="v-betreff" value="${$r(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 200px;">${Ue(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function Ue(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function $r(e){return Ue(e)}async function cn(){document.documentElement.setAttribute("data-css-ready",""),wa();const e=document.getElementById("content");await Ps()&&setTimeout(()=>{Y('Parser wurde aktualisiert. Bitte lade deinen Zeitnachweis unter "Daten" neu hoch.',{type:"info",duration:12e3})},500),await As(),await zs(),await Ds(),R("/",Zt),R("/dashboard",Zt),R("/analytics",Oi),R("/kalender",gt),R("/kalender/typ/:typ",ht),R("/kalender/wochentag/:wd",ht),R("/kalender/pause/:bucket",ht),R("/kalender/:yyyymm",gt),R("/kalender/:yyyymm/:yyyykw",gt),R("/tag/:datum",Ci),R("/berichtsheft",ur),R("/mails",pr),R("/fahrtgeld",Oe),R("/profil",Li),R("/daten",zi),R("/einstellungen",xr),xs(e),location.hash||ws("/");try{const t=await v.tage.count();vi(t>0)&&setTimeout(()=>On(),700)}catch(t){console.warn("[boot] Tour-Auto-Start-Check fehlgeschlagen:",t)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",cn):cn();
