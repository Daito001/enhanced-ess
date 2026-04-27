const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/exceljs.min-BhfpbegZ.js","assets/dexie-UpTFNL8S.js","assets/index-Bf057_RE.js"])))=>i.map(i=>d[i]);
import{C as Q,L as ga,B as ha,D as fa,S as ma,a as pa,b as ba,P as va,A as ya,c as wa,d as ka,T as xa,p as $a,e as Sa,i as Ma}from"./chartjs-CRgZvhTJ.js";import{b as pt,a as Be,c as We,d as Da,f as L,s as kn,e as xn,g as $n,p as za,h as Aa,i as qe,j as Ze,k as V,l as Sn,q as Pa,m as Ea,n as Ta,o as Fa}from"./datefns-C8_rfWt_.js";import{D as La}from"./dexie-UpTFNL8S.js";import{GlobalWorkerOptions as Mn,getDocument as Dn}from"./pdfjs-BnPRJEQ6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function _a(){document.documentElement.setAttribute("data-theme","dark")}const Gt={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},Ca=(e,t,n)=>{let a;const s=n!=null&&n.addSuffix?Gt[e].withPreposition:Gt[e].standalone;return typeof s=="string"?a=s:t===1?a=s.one:a=s.other.replace("{{count}}",String(t)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:"vor "+a:a},Ba={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},Wa={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Oa={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Na={date:pt({formats:Ba,defaultWidth:"full"}),time:pt({formats:Wa,defaultWidth:"full"}),dateTime:pt({formats:Oa,defaultWidth:"full"})},Va={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},Ka=(e,t,n,a)=>Va[e],Ia={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},Ha={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},$t={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},Ra={narrow:$t.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:$t.wide},ja={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},qa={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},Za={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},Ga=e=>Number(e)+".",Ua={ordinalNumber:Ga,era:Be({values:Ia,defaultWidth:"wide"}),quarter:Be({values:Ha,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Be({values:$t,formattingValues:Ra,defaultWidth:"wide"}),day:Be({values:ja,defaultWidth:"wide"}),dayPeriod:Be({values:qa,defaultWidth:"wide",formattingValues:Za,defaultFormattingWidth:"wide"})},Ja=/^(\d+)(\.)?/i,Ya=/\d+/i,Xa={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},Qa={any:[/^v/i,/^n/i]},es={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},ts={any:[/1/i,/2/i,/3/i,/4/i]},ns={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},as={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ss={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},is={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},rs={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},ls={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},os={ordinalNumber:Da({matchPattern:Ja,parsePattern:Ya,valueCallback:e=>parseInt(e)}),era:We({matchPatterns:Xa,defaultMatchWidth:"wide",parsePatterns:Qa,defaultParseWidth:"any"}),quarter:We({matchPatterns:es,defaultMatchWidth:"wide",parsePatterns:ts,defaultParseWidth:"any",valueCallback:e=>e+1}),month:We({matchPatterns:ns,defaultMatchWidth:"wide",parsePatterns:as,defaultParseWidth:"any"}),day:We({matchPatterns:ss,defaultMatchWidth:"wide",parsePatterns:is,defaultParseWidth:"any"}),dayPeriod:We({matchPatterns:rs,defaultMatchWidth:"wide",parsePatterns:ls,defaultParseWidth:"any"})},ne={code:"de",formatDistance:Ca,formatLong:Na,formatRelative:Ka,localize:Ua,match:os,options:{weekStartsOn:1,firstWeekContainsDate:4}};function zn(e){if(e==null)return null;if(typeof e=="number")return e;let t=String(e).trim();if(!t)return null;let n=!1;t.endsWith("-")&&(n=!0,t=t.slice(0,-1).trim()),t=t.replace(",",".");const a=parseFloat(t);return isNaN(a)?null:n?-a:a}function He(e){if(e==null||isNaN(e))return"—";const t=e<0,n=Math.abs(e),a=Math.floor(n),s=Math.round((n-a)*60);let i=a,o=s;return o===60&&(i+=1,o=0),`${t?"-":""}${i}:${String(o).padStart(2,"0")}`}function fe(e,t={}){if(e==null||isNaN(e))return"—";const{signed:n=!1,suffix:a="h"}=t,s=n&&e>0?"+":"",i=e.toFixed(2).replace(".",",");return`${s}${i}${a}`}function cs(e,t={}){if(e==null||isNaN(e))return"—";const{signed:n=!1}=t;return`${n&&e>0?"+":""}${He(e)}`}function Ut(e,t="hhmm",n={}){return t==="dezimal"?fe(e,{signed:!0,suffix:"",...n}):cs(e,{signed:!0,...n})}function se(e){if(!e)return null;const t=/^(\d{1,2}):(\d{2})$/.exec(String(e).trim());return t?parseInt(t[1],10)*60+parseInt(t[2],10):null}function An(e){if(!(e!=null&&e.length))return null;const t=e.filter(s=>s.von&&s.bis);if(!t.length)return null;let n=t[0].von,a=t[0].bis;for(const s of t)se(s.von)<se(n)&&(n=s.von),se(s.bis)>se(a)&&(a=s.bis);return{kommen:n,gehen:a}}const Pn="2026-04-01";function ds(e){return e?"arbzg":"jarbschg"}function us(e,t){return e==null?0:t==="jarbschg"?e>6?1:e>4.5?.5:0:e>9?.75:e>6?.5:0}function Pt(e){if(!e||e.length<2)return 0;const t=e.filter(a=>a.von&&a.bis).map(a=>({von:se(a.von),bis:se(a.bis)})).filter(a=>a.von!=null&&a.bis!=null).sort((a,s)=>a.von-s.von);let n=0;for(let a=1;a<t.length;a++){const s=t[a].von-t[a-1].bis;(s>0&&s>=15||s>0)&&(n+=s)}return n/60}function En(e,t){const n=e.zeitSpannen??[];if(!n.length||n.every(m=>!m.von))return{keinAnspruch:!0};const a=Pt(n),s=e.pause??0,i=gs(n),o=i-s,d=t.pausenRegel&&t.pausenRegel!=="auto"?t.pausenRegel==="jarbschg"?"jarbschg":"arbzg":ds(!!t.ueber18),r=us(o,d);if(e.datum&&e.datum<Pn)return{arbeitszeitMitPause:i,arbeitszeitOhnePause:o,gestempeltePause:a,abgezogenePause:s,gesetzlichePflicht:r,gesetz:d,legalerAbzug:s,unrechtmaessigerVerlustMin:0,aufstockungMin:0,typ:"alt_reglement",warnung:null,altReglement:!0};const l=Math.max(a,r),c=s-l,g=Math.max(0,r-a);let h="ok",u=null;if(c>.05)h="fehler_zeitwirtschaft",u=`${Math.round(c*60)} min Pause wurden zusätzlich zur gesetzlichen Pflicht und zur gestempelten Pause abgezogen. Das sieht nach einem Zeitwirtschafts-Fehler aus.`;else if(g>.05&&s>a+.02){h="aufstockung_legal";const m=Math.round(g*60);u=`Du hast ${Math.round(a*60)} min Pause gestempelt, aber bei ${o.toFixed(2).replace(".",",")}h Arbeitszeit schreibt das Gesetz (${d.toUpperCase()}) ${Math.round(r*60)} min vor. Die fehlenden ${m} min wurden automatisch als Pause gewertet. Das ist gesetzeskonform — nächstes Mal einfach länger Pause machen.`}return{arbeitszeitMitPause:i,arbeitszeitOhnePause:o,gestempeltePause:a,abgezogenePause:s,gesetzlichePflicht:r,gesetz:d,legalerAbzug:l,unrechtmaessigerVerlustMin:Math.round(Math.max(0,c)*60),aufstockungMin:Math.round(Math.max(0,g)*60),typ:h,warnung:u,altReglement:!1}}function gs(e){let t=0;for(const n of e){if(!n.von||!n.bis)continue;const a=se(n.von),s=se(n.bis);a!=null&&s!=null&&s>a&&(t+=s-a)}return t/60}function Tn(e,t){var r,l,c;const n=[...e].sort((g,h)=>g.datum.localeCompare(h.datum));if(!n.length)return[];const a=new Map(t.map(g=>[g.monatKey,g])),s={};for(const g of n)s[r=g.monatKey]??(s[r]=[]),s[g.monatKey].push(g);const i=Object.keys(s).sort(),o=[];let d=null;for(const g of i){const h=a.get(g);let u;((l=h==null?void 0:h.glz)==null?void 0:l.saldoVorperiode)!=null?u=h.glz.saldoVorperiode:d!=null?u=d:u=0;const m=s[g];for(const f of m)f.diff!=null&&(u+=f.diff),o.push({datum:f.datum,wochentag:f.wochentag,saldo:Math.round(u*100)/100,diff:f.diff,ist:f.ist,soll:f.soll,tagestyp:f.tagestyp,monatKey:f.monatKey,wocheKey:f.wocheKey,zeitSpannen:f.zeitSpannen});if(((c=h==null?void 0:h.glz)==null?void 0:c.saldoGesamt)!=null){const f=h.glz.saldoGesamt-u;if(Math.abs(f)>.02&&o.length>0){const b=o.length-1;o[b].umbuchung=f,o[b].saldo=Math.round((o[b].saldo+f)*100)/100,u=o[b].saldo}d=h.glz.saldoGesamt}else d=u}return o}function hs(e,t){if(!e.length)return[];if(t==="alles")return e;const n=Math.min(t,e.length);return e.slice(-n)}function fs(e){return e.length?e[e.length-1].saldo:0}const Fn=new Set(["Urlaub","Arbeitsunfähigkeit","Feiertag","Gleitzeit","Berufsschule","Dienstreise"]),Ln=7;function lt(e){if(!e||e.tagestyp==="Wochenende"||e.wochentag==="SA"||e.wochentag==="SO")return 0;const t=e.ist??0,n=e.soll??0;return t>0?t:Fn.has(e.tagestyp)?Math.max(n,Ln):n>0?n:t}function Et(e){if(!e||e.tagestyp==="Wochenende"||e.wochentag==="SA"||e.wochentag==="SO")return 0;const t=e.soll??0;return t>0?t:Fn.has(e.tagestyp)?Ln:t}function ms(e){if(!e.length)return 0;const t=e[0].saldo-(e[0].diff??0),n=e[e.length-1].saldo;return Math.round((n-t)*100)/100}const ps=["SO","MO","DI","MI","DO","FR","SA"],bs=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];function Ee(e){if(!e)return null;const t=e.trim();return za(t,"dd.MM.yyyy",new Date)}function N(e){return L(e,"dd.MM.yyyy")}function Tt(e){return L(e,"EE, dd.MM.yyyy",{locale:ne})}function vs(e){return L(e,"dd.MM.")}function ys(e){return ps[e.getDay()]}function ws(e){return bs[e.getDay()]}function ks(e){return $n(e)}function Ge(e){const t=kn(e,{weekStartsOn:1}),n=xn(e,{weekStartsOn:1});return`${L(t,"dd.MM.")} – ${L(n,"dd.MM.yyyy")}`}function _n(e){return`${Aa(e)}-${String($n(e)).padStart(2,"0")}`}function Ft(e){return L(e,"yyyy-MM")}function Cn(e){return L(e,"yyyy-MM-dd")}function xs(e,t){const n=[];let a=new Date(e);for(;a<=t;)Ze(a)||n.push(new Date(a)),a=qe(a,1);return n}function Bn(e,t){if(!e||!t)return 0;e>t&&([e,t]=[t,e]);let n=0,a=new Date(e);for(;a<t;)a=qe(a,1),Ze(a)||n++;return n}function $(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function $s(e){return $(e)}const Ss=Object.freeze(Object.defineProperty({__proto__:null,addDays:qe,dayKey:Cn,differenceInCalendarDays:Sn,endOfMonth:Ea,endOfWeek:xn,escapeAttr:$s,escapeHtml:$,formatGermanDate:N,formatGermanDateLong:Tt,formatShortDate:vs,formatWocheRange:Ge,getWeekdayCode:ys,getWeekdayName:ws,isSameDay:Ta,isWeekend:Ze,isoWeek:ks,monthKey:Ft,parseGermanDate:Ee,startOfMonth:Fa,startOfWeek:kn,weekKey:_n,werktageAbstand:Bn,werktageZwischen:xs},Symbol.toStringTag,{value:"Module"}));Q.register(ga,ha,fa,ma,pa,ba,va,ya,wa,ka,xa,$a,Sa,Ma);function q(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function pe(){return{fg:q("--fg"),fgMuted:q("--fg-muted"),fgSubtle:q("--fg-subtle"),border:q("--border"),surface:q("--surface"),accent:q("--accent"),success:q("--success"),warn:q("--warn"),danger:q("--danger"),info:q("--info"),palette:[q("--chart-1"),q("--chart-2"),q("--chart-3"),q("--chart-4"),q("--chart-5"),q("--chart-6"),q("--chart-7")]}}function W(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.fgMuted,font:{size:12}}},tooltip:{backgroundColor:e.surface,titleColor:e.fg,bodyColor:e.fg,borderColor:e.border,borderWidth:1,padding:10,displayColors:!0}},scales:{x:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}},y:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}}}}}function Lt(e,t){const n=pe();if(ve(e),!(t!=null&&t.length))return;const a=t.map(i=>L(V(i.datum),"dd.MM.")),s=t.map(i=>i.saldo);return s.map(i=>i>=0?n.success:n.danger),new Q(e,{type:"line",data:{labels:a,datasets:[{label:"Tages-Saldo",data:s,borderColor:n.accent,backgroundColor:i=>{const o=i.chart,{ctx:d,chartArea:r,scales:l}=o;return r?Wn(d,r,l.y,n):ge(n.accent,.14)},segment:{borderColor:i=>{const o=i.p0.parsed.y,d=i.p1.parsed.y,r=(o+d)/2;return r>=.02?n.success:r<=-.02?n.danger:n.fgMuted}},tension:.25,pointRadius:2,pointHoverRadius:6,pointHitRadius:20,pointBackgroundColor:s.map(i=>i>=.02?n.success:i<=-.02?n.danger:n.fgMuted),pointBorderColor:n.surface,pointBorderWidth:1,fill:!0,borderWidth:2}]},options:{...W(n),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},onHover:(i,o,d)=>{const r=d.getElementsAtEventForMode(i,"index",{intersect:!1},!1);d.canvas.style.cursor=r.length>0?"pointer":"default"},onClick:(i,o,d)=>{const r=d.getElementsAtEventForMode(i,"index",{intersect:!1},!1);if(r.length>0){const l=r[0].index,c=t[l];c!=null&&c.datum&&(window.location.hash=`#/tag/${c.datum}`)}},plugins:{...W(n).plugins,legend:{display:!1},tooltip:{enabled:!1,mode:"index",intersect:!1,axis:"x",position:"nearest",external:Ms(t)}},scales:{...W(n).scales,y:{...W(n).scales.y,ticks:{...W(n).scales.y.ticks,callback:i=>`${i>=0?"+":""}${i.toFixed(1).replace(".",",")}h`}}}}})}function be(e){return function(t){var f,b;const{chart:n,tooltip:a}=t;let s=n.$richTooltipEl;if(!s){s=document.createElement("div"),s.className="saldo-tooltip",document.body.appendChild(s),n.$richTooltipEl=s;const p=n.destroy.bind(n);n.destroy=function(){s.parentNode&&s.parentNode.removeChild(s),p()}}if(a.opacity===0||!((f=a.dataPoints)!=null&&f.length)){s.style.opacity="0";return}const i=e({tooltip:a,chart:n});if(!i){s.style.opacity="0";return}let o=`<div class="saldo-tooltip-title">${St(i.title)}</div>`;for(const p of i.rows||[]){const k=p.klasse||"flat";o+=`<div class="saldo-tooltip-row"><span class="saldo-tooltip-label">${St(p.label)}</span><span class="saldo-tooltip-value ${k}">${p.value}</span></div>`}(b=i.meta)!=null&&b.length&&(o+=`<div class="saldo-tooltip-meta">${i.meta.map(p=>`<span>${p}</span>`).join("")}</div>`),s.innerHTML=o;const d=n.canvas.getBoundingClientRect(),r=d.left+a.caretX,l=d.top+a.caretY;s.style.opacity="0",s.style.left="0px",s.style.top="0px";const c=s.offsetWidth,g=s.offsetHeight,h=18;let u=r+h;u+c>window.innerWidth-8&&(u=r-h-c);let m=l-g/2;m<8&&(m=8),m+g>window.innerHeight-8&&(m=window.innerHeight-g-8),s.style.left=u+"px",s.style.top=m+"px",s.style.opacity="1"}}function me(e){return e==null?"flat":e>.05?"pos":e<-.05?"neg":"flat"}function Se(e){return e==null?"—":(e>0?"+":"")+e.toFixed(2).replace(".",",")+"h"}function Me(e){return e==null?"—":e.toFixed(2).replace(".",",")+"h"}function Ms(e){return be(({tooltip:t})=>{const n=t.dataPoints[0].dataIndex,a=e[n];if(!a)return null;const s=[{label:"Saldo",value:Se(a.saldo),klasse:me(a.saldo)}];a.diff!=null&&s.push({label:"Tages-Diff",value:Se(a.diff),klasse:me(a.diff)});const i=[];return a.tagestyp&&i.push(`Typ: ${St(a.tagestyp)}`),a.umbuchung&&i.push(`Umbuchung: ${a.umbuchung>=0?"+":""}${a.umbuchung.toFixed(2).replace(".",",")}h`),{title:L(V(a.datum),"EE, dd.MM.yyyy",{locale:ne}),rows:s,meta:i}})}function St(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ds(e,t){const n=pe();if(ve(e),!(t!=null&&t.length))return;const a=t.map(d=>d.monatKey),s=a.map(d=>{const[r,l]=d.split("-"),c=new Date(parseInt(r,10),parseInt(l,10)-1,1);return L(c,"MMM yyyy",{locale:ne})}),i=t.map(d=>{var r;return((r=d.glz)==null?void 0:r.saldoGesamt)??0}),o=t.map(d=>{var r;return((r=d.glz)==null?void 0:r.saldoVorperiode)??null});return new Q(e,{type:"line",data:{labels:s,datasets:[{label:"GLZ-Saldo (Monatsende)",data:i,borderColor:n.accent,backgroundColor:d=>{const r=d.chart,{ctx:l,chartArea:c,scales:g}=r;return c?Wn(l,c,g.y,n):ge(n.accent,.14)},segment:{borderColor:d=>{const r=d.p0.parsed.y,l=d.p1.parsed.y,c=(r+l)/2;return c>=.05?n.success:c<=-.05?n.danger:n.fgMuted}},pointBackgroundColor:i.map(d=>d>=.05?n.success:d<=-.05?n.danger:n.fgMuted),pointBorderColor:n.surface,pointBorderWidth:1,tension:.35,fill:!0,pointRadius:4,pointHoverRadius:7,pointHitRadius:20}]},options:{...W(n),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},onHover:(d,r,l)=>{const c=l.getElementsAtEventForMode(d,"index",{intersect:!1},!1);l.canvas.style.cursor=c.length>0?"pointer":"default"},onClick:(d,r,l)=>{const c=l.getElementsAtEventForMode(d,"index",{intersect:!1},!1);if(c.length>0){const g=c[0].index,h=a[g];h&&(window.location.hash=`#/kalender/${h}`)}},plugins:{...W(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:be(({tooltip:d})=>{const r=d.dataPoints[0].dataIndex,l=i[r],c=o[r],g=[{label:"Saldo Monatsende",value:Se(l),klasse:me(l)}];if(c!=null){const h=+(l-c).toFixed(2);g.push({label:"Vorperiode",value:Se(c),klasse:me(c)}),g.push({label:"Bewegung",value:Se(h),klasse:me(h)})}return{title:s[r],rows:g}})}}}})}function zs(e,t){const n=pe();if(ve(e),!(t!=null&&t.length))return;const a=t.map(o=>L(V(o.datum),"dd.MM.")),s=t.map(o=>o.ist??0),i=t.map(o=>_s(o.tagestyp,n));return new Q(e,{type:"bar",data:{labels:a,datasets:[{label:"Ist-Stunden",data:s,backgroundColor:i,borderRadius:4,borderSkipped:!1,maxBarThickness:32,categoryPercentage:.85,barPercentage:.9}]},options:{...W(n),onHover:(o,d,r)=>{const l=r.getElementsAtEventForMode(o,"nearest",{intersect:!0},!1);r.canvas.style.cursor=l.length>0?"pointer":"default"},onClick:(o,d,r)=>{const l=r.getElementsAtEventForMode(o,"nearest",{intersect:!0},!1);if(l.length>0){const c=t[l[0].index];c!=null&&c.datum&&(window.location.hash=`#/tag/${c.datum}`)}},plugins:{...W(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:be(({tooltip:o})=>{const d=o.dataPoints[0].dataIndex,r=t[d],l=[{label:"Ist",value:Me(r.ist),klasse:"flat"}];r.soll!=null&&l.push({label:"Soll",value:Me(r.soll),klasse:"flat"}),r.diff!=null&&l.push({label:"Diff",value:Se(r.diff),klasse:me(r.diff)});const c=r.tagestyp?[`Typ: ${r.tagestyp}`]:[];return{title:L(V(r.datum),"EE, dd.MM.yyyy",{locale:ne}),rows:l,meta:c}})}},scales:{...W(n).scales,y:{...W(n).scales.y,suggestedMin:0,suggestedMax:10}}}})}function Jt(e,t){const n=pe();if(ve(e),!(t!=null&&t.length))return;const a=t.filter(l=>{var c;return((c=l.zeitSpannen)==null?void 0:c.length)&&l.zeitSpannen.some(g=>g.von&&g.bis)}).map(l=>{const c=l.zeitSpannen.filter(u=>u.von&&u.bis).map(u=>({von:se(u.von),bis:se(u.bis),vonStr:u.von,bisStr:u.bis})).filter(u=>u.von!=null&&u.bis!=null);if(c.length===0)return null;const g=Math.min(...c.map(u=>u.von)),h=Math.max(...c.map(u=>u.bis));return{...l,_spans:c,_minVon:g,_maxBis:h}}).filter(Boolean);if(!a.length)return;const s=l=>l.ist==null?n.fgMuted:l.ist>=7?n.success:n.danger,i={label:"Tages-Rahmen",data:a.map(l=>[l._minVon,l._maxBis]),backgroundColor:a.map(s),borderColor:a.map(s),borderWidth:0,borderRadius:4,borderSkipped:!1,barPercentage:.7,categoryPercentage:.9,maxBarThickness:18},o=Math.max(0,Math.floor(Math.min(...a.map(l=>l._minVon))/60)*60-60),d=Math.min(24*60,Math.ceil(Math.max(...a.map(l=>l._maxBis))/60)*60+60),r=l=>`${String(Math.floor(l/60)).padStart(2,"0")}:${String(l%60).padStart(2,"0")}`;return new Q(e,{type:"bar",data:{labels:a.map(l=>L(V(l.datum),"dd.MM.")),datasets:[i]},options:{...W(n),interaction:{mode:"index",intersect:!1,axis:"x"},onHover:(l,c,g)=>{const h=g.getElementsAtEventForMode(l,"index",{intersect:!1},!1);g.canvas.style.cursor=h.length>0?"pointer":"default"},onClick:(l,c,g)=>{const h=g.getElementsAtEventForMode(l,"index",{intersect:!1},!1);if(h.length>0){const u=a[h[0].index];u!=null&&u.datum&&(window.location.hash=`#/tag/${u.datum}`)}},plugins:{legend:{display:!1},tooltip:{enabled:!1,external:be(({tooltip:l})=>{const c=a[l.dataPoints[0].dataIndex],g=[];c.ist!=null&&g.push({label:"Ist",value:Me(c.ist),klasse:me(c.ist-7)}),c.soll!=null&&g.push({label:"Soll",value:Me(c.soll)});const h=[`Rahmen: ${r(c._minVon)} – ${r(c._maxBis)}`];return c._spans.length>1&&c._spans.forEach((u,m)=>h.push(`Block ${m+1}: ${u.vonStr} – ${u.bisStr}`)),c.pause!=null&&h.push(`Pause: ${Math.round(c.pause*60)} min`),{title:L(V(c.datum),"EE, dd.MM.yyyy",{locale:ne}),rows:g,meta:h}})}},scales:{x:{ticks:{color:n.fgMuted,font:{size:10},maxRotation:60,minRotation:60,autoSkip:!0,maxTicksLimit:40},grid:{display:!1}},y:{min:o,max:d,ticks:{color:n.fgMuted,stepSize:60,callback:l=>r(l)},grid:{color:n.border}}}}})}function As(e,t){const n=pe();ve(e);const a={};for(const o of t){if(o.tagestyp!=="Stempelzeit"||!o.zeitSpannen||o.zeitSpannen.length<2)continue;const d=Pt(o.zeitSpannen);if(d<=0)continue;const r=Math.round(d*60),l=Math.floor(r/15)*15;a[l]=(a[l]??0)+1}const s=Object.keys(a).map(Number).sort((o,d)=>o-d),i=s.map(o=>a[o]);return new Q(e,{type:"bar",data:{labels:s.map(o=>`${o}–${o+14} min`),datasets:[{label:"Häufigkeit",data:i,backgroundColor:n.palette[1],borderRadius:4}]},options:{...W(n),onHover:(o,d,r)=>{const l=r.getElementsAtEventForMode(o,"nearest",{intersect:!0},!1);r.canvas.style.cursor=l.length>0?"pointer":"default"},onClick:(o,d,r)=>{const l=r.getElementsAtEventForMode(o,"nearest",{intersect:!0},!1);if(l.length>0){const c=s[l[0].index];c!=null&&(window.location.hash=`#/kalender/pause/${c}`)}},plugins:{...W(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:be(({tooltip:o})=>{const d=o.dataPoints[0].dataIndex;return{title:"Pause-Länge "+(s[d]!=null?`${s[d]}–${s[d]+14} min`:""),rows:[{label:"Häufigkeit",value:`${i[d]} Tag${i[d]===1?"":"e"}`}]}})}}}})}function Ps(e,t){const n=pe();ve(e);const a=["MO","DI","MI","DO","FR"],s={},i={};for(const r of a)s[r]=0,i[r]=0;for(const r of t)a.includes(r.wochentag)&&(r.ist==null||r.ist===0||(s[r.wochentag]+=r.ist,i[r.wochentag]+=1));const o=a.map(r=>i[r]>0?s[r]/i[r]:0),d={id:"wochentag-datalabels",afterDatasetsDraw(r){const{ctx:l,data:c,scales:g}=r;l.save(),l.fillStyle=n.fg,l.font="600 12px system-ui",l.textAlign="center",l.textBaseline="bottom",r.getDatasetMeta(0).data.forEach((u,m)=>{const f=c.datasets[0].data[m];if(!f||f===0)return;const b=f.toFixed(2).replace(".",",")+"h";l.fillText(b,u.x,u.y-6)}),l.restore()}};return new Q(e,{type:"bar",data:{labels:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"],datasets:[{label:"Ø Ist-Stunden",data:o,backgroundColor:n.palette[2],borderRadius:4,maxBarThickness:56,categoryPercentage:.7,barPercentage:.8}]},options:{...W(n),layout:{padding:{top:24}},onHover:(r,l,c)=>{const g=c.getElementsAtEventForMode(r,"nearest",{intersect:!0},!1);c.canvas.style.cursor=g.length>0?"pointer":"default"},onClick:(r,l,c)=>{const g=c.getElementsAtEventForMode(r,"nearest",{intersect:!0},!1);if(g.length>0){const h=a[g[0].index];h&&(window.location.hash=`#/kalender/wochentag/${h}`)}},plugins:{...W(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:be(({tooltip:r})=>{const l=r.dataPoints[0].dataIndex,c=a[l];return{title:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"][l],rows:[{label:"Ø Stunden",value:Me(o[l])},{label:"Anzahl Tage",value:String(i[c]||0)}]}})}},scales:{...W(n).scales,y:{...W(n).scales.y,suggestedMax:Math.max(...o)*1.15}}},plugins:[d]})}function Es(e,t){const n=pe();ve(e);const a={};for(const o of t)!o.tagestyp||o.tagestyp==="Wochenende"||(a[o.tagestyp]=(a[o.tagestyp]??0)+1);const s=Object.keys(a),i=Object.values(a);return new Q(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:s.map((o,d)=>n.palette[d%n.palette.length]),borderColor:n.surface,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,onHover:(o,d,r)=>{const l=r.getElementsAtEventForMode(o,"nearest",{intersect:!0},!1);r.canvas.style.cursor=l.length>0?"pointer":"default"},onClick:(o,d,r)=>{const l=r.getElementsAtEventForMode(o,"nearest",{intersect:!0},!1);if(l.length>0){const c=s[l[0].index];c&&(window.location.hash=`#/kalender/typ/${encodeURIComponent(c)}`)}},plugins:{legend:{position:"right",labels:{color:n.fgMuted,font:{size:12}}},tooltip:{enabled:!1,external:be(({tooltip:o})=>{const d=o.dataPoints[0].dataIndex,r=i.reduce((c,g)=>c+g,0),l=r?i[d]/r*100:0;return{title:s[d],rows:[{label:"Anzahl",value:`${i[d]} Tag${i[d]===1?"":"e"}`},{label:"Anteil",value:l.toFixed(1).replace(".",",")+"%"}]}})}}}})}function Ts(e,t){const n=pe();ve(e);const a={};for(const c of t){const g=c.wocheKey;a[g]??(a[g]={ist:0,soll:0,days:0,ersterTag:null,monatKey:null}),a[g].ist+=lt(c),a[g].soll+=Et(c),a[g].days++,(!a[g].ersterTag||c.datum&&c.datum<a[g].ersterTag)&&(a[g].ersterTag=c.datum,a[g].monatKey=c.monatKey)}const s=Object.keys(a).sort();if(!s.length)return;const i=s.map(c=>+a[c].ist.toFixed(2)),o=s.map(c=>+a[c].soll.toFixed(2)),d=s.map(c=>{const g=a[c].ersterTag;return g?Ge(V(g)):""}),r=i.map((c,g)=>c>=o[g]+.1?n.success:c<=o[g]-.1?n.danger:n.fgMuted),l={id:"wochenstunden-soll-linie",afterDatasetsDraw(c){const{ctx:g,scales:h}=c;h.x;const u=h.y;g.save(),g.strokeStyle=n.fgSubtle||n.fgMuted,g.lineWidth=1,g.setLineDash([4,4]),g.beginPath(),c.getDatasetMeta(0).data.forEach((f,b)=>{const p=f.x,k=f.width/2+2,v=u.getPixelForValue(o[b]??35);g.moveTo(p-k,v),g.lineTo(p+k,v)}),g.stroke(),g.restore()}};return new Q(e,{type:"bar",data:{labels:s.map(c=>"KW "+c.split("-")[1]),datasets:[{label:"Wochenstunden",data:i,backgroundColor:r.map(c=>ge(c,.55)),borderColor:r,borderWidth:1.5,borderRadius:4,maxBarThickness:32,categoryPercentage:.85,barPercentage:.9}]},options:{...W(n),onHover:(c,g,h)=>{const u=h.getElementsAtEventForMode(c,"nearest",{intersect:!0},!1);h.canvas.style.cursor=u.length>0?"pointer":"default"},onClick:(c,g,h)=>{var m;const u=h.getElementsAtEventForMode(c,"nearest",{intersect:!0},!1);if(u.length>0){const f=u[0].index,b=s[f],p=b?(m=a[b])==null?void 0:m.monatKey:null;b&&p?window.location.hash=`#/kalender/${p}/${b}`:b&&(window.location.hash="#/kalender")}},plugins:{...W(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:be(({tooltip:c})=>{const g=c.dataPoints[0].dataIndex,h=s[g],u=i[g],m=o[g],f=+(u-m).toFixed(2),b=d[g];return{title:b?"KW "+h.split("-")[1]+" · "+b:"KW "+h.split("-")[1]+" · "+h.split("-")[0],rows:[{label:"Ist",value:Me(u),klasse:"flat"},{label:"Soll",value:Me(m),klasse:"flat"},{label:"Diff",value:Se(f),klasse:me(f)}]}})}},scales:{...W(n).scales,y:{...W(n).scales.y,beginAtZero:!0,ticks:{...W(n).scales.y.ticks,callback:c=>`${c.toFixed(0)}h`}}}},plugins:[l]})}function ve(e){const t=Q.getChart(e);t&&t.destroy()}function Fs(){if(Q.instances){for(const e of Object.values(Q.instances))if(e!=null&&e.canvas&&!document.body.contains(e.canvas))try{e.destroy()}catch{}}document.querySelectorAll(".saldo-tooltip").forEach(e=>e.remove())}function ge(e,t){const n=e.replace("#","").trim();if(n.length!==6&&n.length!==3)return e;const a=n.length===3?n.split("").map(d=>d+d).join(""):n,s=parseInt(a.slice(0,2),16),i=parseInt(a.slice(2,4),16),o=parseInt(a.slice(4,6),16);return`rgba(${s}, ${i}, ${o}, ${t})`}function Wn(e,t,n,a){return Ls(e,t,n,0,a)}function Ls(e,t,n,a,s){const{top:i,bottom:o}=t,d=e.createLinearGradient(0,i,0,o),r=n.min,l=n.max,c=l-r;if(c<=0)return ge(s.success,.14);let g=(l-a)/c;return g=Math.max(0,Math.min(1,g)),d.addColorStop(0,ge(s.success,.28)),d.addColorStop(Math.max(0,g-.001),ge(s.success,.06)),d.addColorStop(Math.min(1,g+.001),ge(s.danger,.06)),d.addColorStop(1,ge(s.danger,.28)),d}function _s(e,t){const n=String(e??"").toLowerCase();return n.includes("stempel")?t.palette[0]:n.includes("berufs")?t.palette[1]:n.includes("urlaub")?t.palette[2]:n.includes("feiertag")?t.fgSubtle:n.includes("dienst")?t.palette[3]:n.includes("krank")?t.palette[4]:t.palette[5]}const On=[];function Z(e,t){const n=e.split("/").filter(Boolean),a=[],s=new RegExp("^/?"+n.map(i=>i.startsWith(":")?(a.push(i.slice(1)),"([^/]+)"):Os(i)).join("/")+"/?$");On.push({pattern:e,regex:s,paramNames:a,render:t})}function Cs(e){e.startsWith("#")||(e="#"+e),window.location.hash===e?ce():window.location.hash=e}function Bs(e,{onNavigate:t}={}){window.addEventListener("hashchange",ce),ce.rootEl=e,ce.onNavigate=t,ce()}async function ce(){var a;Fs();const e=ce.rootEl,t=window.location.hash.slice(1)||"/",n=t.startsWith("/")?t:`/${t}`;for(const s of On){const i=s.regex.exec(n);if(i){const o={};s.paramNames.forEach((d,r)=>o[d]=decodeURIComponent(i[r+1])),(a=ce.onNavigate)==null||a.call(ce,n),Ws(n);try{e.classList.remove("view-enter"),await s.render({params:o,path:n,root:e}),e.classList.add("view-enter")}catch(d){console.error("Route render error:",d),e.innerHTML=`<div class="empty-state">
          <div class="empty-state-icon">⚠</div>
          <h2>Fehler beim Anzeigen</h2>
          <p>${Yt(d.message||String(d))}</p>
        </div>`}return}}e.innerHTML=`<div class="empty-state">
    <div class="empty-state-icon">?</div>
    <h2>Seite nicht gefunden</h2>
    <p>Die Route <code>${Yt(n)}</code> existiert nicht.</p>
    <a href="#/" class="btn primary">Zum Dashboard</a>
  </div>`}function Ws(e){document.querySelectorAll("[data-route]").forEach(n=>{const a=n.getAttribute("data-route"),s=a==="/"?e==="/":e===a||e.startsWith(a+"/");n.classList.toggle("active",s)});const t=e==="/"?"dashboard":e.split("/").filter(Boolean)[0];document.body.setAttribute("data-view",t||"dashboard")}function Os(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Yt(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const Ns="modulepreload",Vs=function(e){return"/better-ess/"+e},Xt={},de=function(t,n,a){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),d=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(r=>{if(r=Vs(r),r in Xt)return;Xt[r]=!0;const l=r.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${c}`))return;const g=document.createElement("link");if(g.rel=l?"stylesheet":Ns,l||(g.as="script"),g.crossOrigin="",g.href=r,d&&g.setAttribute("nonce",d),document.head.appendChild(g),l)return new Promise((h,u)=>{g.addEventListener("load",h),g.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})}))}function i(o){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=o,window.dispatchEvent(d),!d.defaultPrevented)throw o}return s.then(o=>{for(const d of o||[])d.status==="rejected"&&i(d.reason);return t().catch(i)})},w=new La("zeitnachweis");w.version(1).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"});w.version(2).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});w.version(3).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});w.version(4).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});w.version(5).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{const t=await e.table("profil").get("self");t&&(!t.zeitwirtschaftEmail||t.zeitwirtschaftEmail==="zeitwirtschaft@putzmeister.com")&&await e.table("profil").put({...t,zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com"})});w.version(6).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});w.version(7).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key",fahrtgeldTemplate:"id"}).upgrade(async e=>{const t=await e.table("profil").get("self");if(!t)return;let n=t.ueber18??!0;if(t.geburtsdatum){const s=new Date(t.geburtsdatum),i=new Date;n=i.getFullYear()-s.getFullYear()-(i<new Date(i.getFullYear(),s.getMonth(),s.getDate())?1:0)>=18}const a={id:"self",ueber18:n,sollStundenProWoche:t.sollStundenProWoche??35,sollStundenProTag:t.sollStundenProTag??7,berufsschulMuster:t.berufsschulMuster??{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null},zeitwirtschaftEmail:t.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:t.zeitwirtschaftAnrede||"Frau Kanarya",pausenRegel:t.pausenRegel??"auto",erstelltAm:t.erstelltAm??new Date().toISOString(),updatedAt:new Date().toISOString()};await e.table("profil").put(a)});async function Ks(){try{const{erkenneBerufsschulMuster:e}=await de(async()=>{const{erkenneBerufsschulMuster:o}=await Promise.resolve().then(()=>ni);return{erkenneBerufsschulMuster:o}},void 0),t=await w.tage.toArray();if(!t.length)return!1;const n=e(t),a=await w.profil.get("self");if(!a)return!1;const s=a.berufsschulMuster??{};return JSON.stringify(s.wochentageWoechentlich??[])!==JSON.stringify(n.wochentageWoechentlich)||JSON.stringify(s.wochentage14Taegig??[])!==JSON.stringify(n.wochentage14Taegig)||(s.referenzDatum14Taegig??null)!==(n.referenzDatum14Taegig??null)||(s.stundenProTag??null)!==(n.stundenProTag??null)||(s.halbtags??!1)!==(n.halbtags??!1)?(await w.profil.put({...a,berufsschulMuster:n}),!0):!1}catch(e){return console.warn("[db] refreshBerufsschulMuster fehlgeschlagen:",e),!1}}async function Is(){try{const{weekKey:e}=await de(async()=>{const{weekKey:s}=await Promise.resolve().then(()=>Ss);return{weekKey:s}},void 0),{parseISO:t}=await de(async()=>{const{parseISO:s}=await import("./datefns-C8_rfWt_.js").then(i=>i.r);return{parseISO:s}},[]),n=await w.tage.toArray(),a=[];for(const s of n){if(!s.datum)continue;const i=e(t(s.datum));i!==s.wocheKey&&a.push({...s,wocheKey:i})}return a.length&&await w.tage.bulkPut(a),a.length}catch(e){return console.warn("[db] refreshWocheKeys fehlgeschlagen:",e),0}}async function Hs(){try{const e=await w.mailVorlagen.toArray(),t=e.some(a=>a.betreff&&!a.betreff.startsWith("Bitte um Zeitkorrektur im ESS")),n=e.some(a=>a.text&&!/Vielen Dank!\s*$/.test(a.text));return t||n?(await w.mailVorlagen.clear(),!0):!1}catch(e){return console.warn("[db] ensureMailVorlagenFresh fehlgeschlagen:",e),!1}}async function Rs(){const e=await w.einstellungen.get("__migration_reset");return(e==null?void 0:e.value)===!0?(await w.einstellungen.delete("__migration_reset"),!0):!1}async function re(){return await w.profil.get("self")??Nn()}async function st(e){const t={...e,id:"self",updatedAt:new Date().toISOString()};return await w.profil.put(t),t}function Nn(){return{id:"self",ueber18:!0,sollStundenProWoche:35,sollStundenProTag:7,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1},zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:"Frau Kanarya",pausenRegel:"auto",erstelltAm:new Date().toISOString()}}async function Qt(e,t=null){const n=await w.einstellungen.get(e);return n?n.value:t}async function en(e,t){await w.einstellungen.put({key:e,value:t})}async function ue(){return await w.tage.orderBy("datum").toArray()}async function js(e,t,n){const a=n instanceof Date?n.toISOString():typeof n=="string"&&n?n:null,s=(l,c)=>c?l?l>c:!1:!0;let i=0,o=0,d=0,r=0;if(e.length){const l=e.map(h=>h.datum),c=await w.tage.bulkGet(l),g=[];for(let h=0;h<e.length;h++){const u={...e[h],_quellStichtag:a},m=c[h];!m||s(a,m._quellStichtag)?g.push(u):o++}g.length&&(await w.tage.bulkPut(g),i=g.length)}if(t.length){const l=t.map(h=>h.monatKey),c=await w.monate.bulkGet(l),g=[];for(let h=0;h<t.length;h++){const u={...t[h],_quellStichtag:a},m=c[h];!m||s(a,m._quellStichtag)?g.push(u):r++}g.length&&(await w.monate.bulkPut(g),d=g.length)}return{tage:i,monate:d,skippedTage:o,skippedMonate:r}}async function ot(){return await w.monate.orderBy("monatKey").toArray()}async function qs(e){return await w.uploads.add({...e,hochladeDatum:new Date().toISOString()})}async function Ue(){return await w.uploads.orderBy("hochladeDatum").last()}async function Vn(){return await w.uploads.orderBy("hochladeDatum").reverse().toArray()}async function Ie(){return await w.fahrtgeldTemplate.get("self")}async function _t(e){await w.fahrtgeldTemplate.put({id:"self",...e})}async function Zs(){await w.fahrtgeldTemplate.delete("self")}async function Gs(){await Promise.all([w.profil.clear(),w.tage.clear(),w.monate.clear(),w.uploads.clear(),w.einstellungen.clear(),w.mailVorlagen.clear(),w.warnungDismissals.clear(),w.fahrtgeldTemplate.clear()])}async function Kn(){await Promise.all([w.tage.clear(),w.monate.clear(),w.uploads.clear(),w.warnungDismissals.clear()])}async function Us(){const[e,t,n,a,s,i,o]=await Promise.all([w.profil.toArray(),w.tage.toArray(),w.monate.toArray(),w.uploads.toArray(),w.einstellungen.toArray(),w.mailVorlagen.toArray(),w.warnungDismissals.toArray()]);return{version:1,exportedAt:new Date().toISOString(),data:{profil:e,tage:t,monate:n,uploads:a,einstellungen:s,mailVorlagen:i,warnungDismissals:o}}}async function Js(e){if(!e||e.version!==1||!e.data)throw new Error("Ungültiges oder inkompatibles Backup-Format.");const t=e.data;await w.transaction("rw",w.profil,w.tage,w.monate,w.uploads,w.einstellungen,w.mailVorlagen,w.warnungDismissals,async()=>{var n,a,s,i,o,d,r;(n=t.profil)!=null&&n.length&&await w.profil.bulkPut(t.profil),(a=t.tage)!=null&&a.length&&await w.tage.bulkPut(t.tage),(s=t.monate)!=null&&s.length&&await w.monate.bulkPut(t.monate),(i=t.uploads)!=null&&i.length&&await w.uploads.bulkPut(t.uploads),(o=t.einstellungen)!=null&&o.length&&await w.einstellungen.bulkPut(t.einstellungen),(d=t.mailVorlagen)!=null&&d.length&&await w.mailVorlagen.bulkPut(t.mailVorlagen),(r=t.warnungDismissals)!=null&&r.length&&await w.warnungDismissals.bulkPut(t.warnungDismissals)})}async function it(e,t){await w.mailVorlagen.put({key:e,...t})}async function Ys(e){return await w.mailVorlagen.get(e)}async function ct(){return await w.mailVorlagen.toArray()}async function Xs(e,t){await w.warnungDismissals.put({key:`${e}-${t}`,datum:e,typ:t,dismissedAt:new Date().toISOString()})}async function Qs(){return await w.warnungDismissals.toArray()}function ei(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
    <polyline points="10 17 15 12 10 7"/>
    <line x1="15" y1="12" x2="3" y2="12"/>
  </svg>`}function ti(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>`}function In(e,t={}){const{size:n=20,layout:a="inline"}=t;return e?`
    <div class="kommen-gehen ${a}">
      <span class="kg-block kommen" title="Kommen (frühester Einstempel)">
        ${ei(n)}
        <span class="kg-zeit tabular">${e.kommen}</span>
      </span>
      <span class="kg-block gehen" title="Gehen (spätester Ausstempel)">
        ${ti(n)}
        <span class="kg-zeit tabular">${e.gehen}</span>
      </span>
    </div>
  `:'<span class="kg-empty">—</span>'}function Hn(e){var c;const t=e.filter(g=>g.tagestyp==="Berufsschule");if(t.length<2)return{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1};const n={};for(const g of t)n[c=g.wochentag]??(n[c]=[]),n[g.wochentag].push(g);const a=[],s=[];let i=null;for(const[g,h]of Object.entries(n)){if(h.sort((f,b)=>f.datum.localeCompare(b.datum)),h.length<2)continue;const u=[];for(let f=1;f<h.length;f++)u.push(Sn(V(h[f].datum),V(h[f-1].datum)));const m=tn(u);m<=10?a.push(g):m<=18&&(s.push(g),(!i||V(h[0].datum)<V(i))&&(i=h[0].datum))}const o=t.map(g=>g.ist).filter(g=>g!=null&&g>0),d=tn(o),r=d!=null?Math.round(d*4)/4:null,l=r!=null&&r<5;return{wochentageWoechentlich:a,wochentage14Taegig:s,referenzDatum14Taegig:i,stundenProTag:r,halbtags:l}}function tn(e){if(!e.length)return null;const t=e.slice().sort((a,s)=>a-s),n=Math.floor(t.length/2);return t.length%2?t[n]:(t[n-1]+t[n])/2}function dt(e,t){var s,i;if(!t)return!1;const a=["SO","MO","DI","MI","DO","FR","SA"][e.getDay()];if((s=t.wochentageWoechentlich)!=null&&s.includes(a))return!0;if((i=t.wochentage14Taegig)!=null&&i.includes(a)&&t.referenzDatum14Taegig){const o=V(t.referenzDatum14Taegig),d=Pa(e,o,{weekStartsOn:1});if(d>=0&&d%2===0)return!0}return!1}function Rn(e,t=null){return(e==null?void 0:e.halbtags)===!0&&(e==null?void 0:e.stundenProTag)!=null&&e.stundenProTag>0?e.stundenProTag:t}const ni=Object.freeze(Object.defineProperty({__proto__:null,erkenneBerufsschulMuster:Hn,erwarteteBerufsschulStunden:Rn,istBerufsschulTagLautMuster:dt},Symbol.toStringTag,{value:"Module"})),Oe={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function ut(e,t,n,a=new Set){var g,h;const s=[],i=n??new Date,o=new Map(e.map(u=>[u.datum,u]));if(!e.length)return s;const d=V(e[0].datum),r=i,l=L(r,"yyyy-MM-dd");for(let u=new Date(d);u<=r;u=qe(u,1)){if(Ze(u))continue;const m=L(u,"yyyy-MM-dd"),f=o.get(m),b=Bn(u,r),p=m===l,k=!f||!f.tagestyp&&!f.ist&&(((g=f.zeitSpannen)==null?void 0:g.length)??0)===0;if(!(p&&k)){if(k){if(dt(u,t.berufsschulMuster)){const v=b>=4?"error":b>=2?"warn":"info";Ne(s,a,{datum:m,wochentag:(f==null?void 0:f.wochentag)??Qe(u),typ:"bs_tag_fehlt",schweregrad:v,titel:`Berufsschultag nicht eingetragen: ${N(u)}`,beschreibung:`Laut deinem Profil hast du am ${Oe[Qe(u)]}, ${N(u)} Berufsschule. Im Zeitnachweis fehlt der Tag bisher${b>=4?" — bitte bei der Zeitwirtschaft nachhaken":""}.`,alter:b,mailVorlageKey:v==="error"?"bs_tag_fehlt":null})}else{const v=b>=4?"error":b>=2?"warn":"info";Ne(s,a,{datum:m,wochentag:Qe(u),typ:"stempelzeit_fehlt",schweregrad:v,titel:`Keine Stempelzeit am ${N(u)}`,beschreibung:`Am ${Oe[Qe(u)]}, ${N(u)} wurde keine Stempelzeit erfasst. Falls du an diesem Tag im Haus warst, sollte die Zeitwirtschaft das nachtragen${b>=4?" — es ist inzwischen ≥4 Werktage her":""}.`,alter:b,mailVorlageKey:v==="error"?"stempelzeit_fehlt":null})}continue}if(f.tagestyp==="Berufsschule"&&f.ist!=null){const v=Rn(t.berufsschulMuster,f.soll);v!=null&&f.ist<v-.5&&Ne(s,a,{datum:m,wochentag:f.wochentag,typ:"bs_stunden_falsch",schweregrad:"error",titel:`Berufsschultag mit zu wenig Stunden: ${N(u)}`,beschreibung:`Am ${Oe[f.wochentag]}, ${N(u)} sind nur ${f.ist.toFixed(2).replace(".",",")}h gebucht statt der für dich üblichen ${v.toFixed(2).replace(".",",")}h. Die Zeitwirtschaft hat den Berufsschultag möglicherweise nur halb erfasst.`,ist:f.ist,soll:v,mailVorlageKey:"bs_stunden_falsch"})}if(f.tagestyp==="Stempelzeit"&&((h=f.zeitSpannen)==null?void 0:h.length)>1&&m>=Pn){const v=En(f,t);(v==null?void 0:v.typ)==="fehler_zeitwirtschaft"&&v.unrechtmaessigerVerlustMin>=5?Ne(s,a,{datum:m,wochentag:f.wochentag,typ:"pausen_abzug",schweregrad:v.unrechtmaessigerVerlustMin>=15?"error":"warn",titel:`Pausen-Abzug fehlerhaft (${N(u)})`,beschreibung:`Am ${Oe[f.wochentag]}, ${N(u)} wurden ${Math.round(v.abgezogenePause*60)} min Pause abgezogen. Gestempelt: ${Math.round(v.gestempeltePause*60)} min, gesetzlich nötig (${v.gesetz.toUpperCase()}): ${Math.round(v.gesetzlichePflicht*60)} min. Differenz von ${v.unrechtmaessigerVerlustMin} min ist unerklärlich.`,verlustMinuten:v.unrechtmaessigerVerlustMin,abgezogen:v.abgezogenePause,gestempelt:v.gestempeltePause,mailVorlageKey:"pausen_abzug"}):(v==null?void 0:v.typ)==="aufstockung_legal"&&v.aufstockungMin>=10&&Ne(s,a,{datum:m,wochentag:f.wochentag,typ:"pausen_aufstockung",schweregrad:"info",titel:`Zu wenig Pause gestempelt (${N(u)}) — ${v.aufstockungMin} min automatisch aufgestockt`,beschreibung:`Am ${Oe[f.wochentag]}, ${N(u)} hast du nur ${Math.round(v.gestempeltePause*60)} min Pause gemacht. Gesetz (${v.gesetz.toUpperCase()}) schreibt ${Math.round(v.gesetzlichePflicht*60)} min vor. Fehlende ${v.aufstockungMin} min wurden als Pause gewertet — das ist legal, aber du verlierst dadurch Arbeitszeit. Tipp: mach beim nächsten Mal etwas länger Mittag.`})}}}const c={error:0,warn:1,info:2};return s.sort((u,m)=>{const f=c[u.schweregrad]-c[m.schweregrad];return f!==0?f:m.datum.localeCompare(u.datum)}),s}function jn(e,t=new Set){var a,s,i,o;const n=[];for(const d of e){const r=((a=d.glz)==null?void 0:a.saldoVorperiode)??0,l=((s=d.glz)==null?void 0:s.saldoAktuellePeriode)??0,c=((i=d.glz)==null?void 0:i.umgebuchteStunden)??0,g=(o=d.glz)==null?void 0:o.saldoGesamt;if(g==null)continue;const h=r+l+c,u=Math.abs(g-h);if(u>.03){const m=`${d.monatKey}-saldo_plausi`;t.has(m)||n.push({datum:`${d.monatKey}-01`,wochentag:"",typ:"saldo_plausi",schweregrad:"warn",titel:`Saldo-Differenz im Monat ${d.monatKey}`,beschreibung:`Rechnung: Vorperiode ${r.toFixed(2)} + aktuelle Periode ${l.toFixed(2)} + umgebucht ${c.toFixed(2)} = ${h.toFixed(2)}, aber dein Saldo wird mit ${g.toFixed(2)} angezeigt. Abweichung: ${u.toFixed(2)}h.`,soll:h,ist:g})}}return n}function Ne(e,t,n){const a=`${n.datum}-${n.typ}`;t.has(a)||(n.id=a,e.push(n))}function Qe(e){return["SO","MO","DI","MI","DO","FR","SA"][e.getDay()]}const ai={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"},Re={bs_tag_fehlt:{key:"bs_tag_fehlt",titel:"Berufsschultag fehlt",beschreibung:"Wenn ein Berufsschultag komplett nicht im Zeitnachweis eingetragen wurde.",betreff:"Bitte um Zeitkorrektur im ESS  - Fehlender Berufsschultag {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

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
Vielen Dank!`}};function Je(e,t){const n=Re[e];return n?{...n,...t??{}}:null}function qn(e,t){const n=nn(e.text,t);return{betreff:nn(e.betreff,t),text:n}}function nn(e,t){return e.replace(/\{(\w+)\}/g,(n,a)=>t[a]!=null?String(t[a]):`{${a}}`)}function Ct(e,t){const n=t.datum?new Date(t.datum):null;return{name:"",personalnr:"",kostenstelle:"",datum:n?Tt(n).split(", ")[1]:"",wochentag:ai[t.wochentag]??t.wochentag??"",zeitwirtschaft_anrede:e.zeitwirtschaftAnrede||"Frau Kanarya",zeitwirtschaft_email:e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",ist:t.ist!=null?t.ist.toFixed(2).replace(".",","):"",soll:t.soll!=null?t.soll.toFixed(2).replace(".",","):"",abgezogen:t.abgezogen!=null?Math.round(t.abgezogen*60):"",gestempelt:t.gestempelt!=null?Math.round(t.gestempelt*60):"",verlust:t.verlustMinuten??""}}function Bt(e,t,n){const a=qn(t,n),s=e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",i=new URLSearchParams;return i.set("subject",a.betreff),i.set("body",a.text),`mailto:${s}?${i.toString().replace(/\+/g,"%20")}`}let si=0;function X(e,{type:t="info",duration:n=3500}={}){const a=document.getElementById("toast-root");if(!a)return;const s=document.createElement("div");s.className=`toast ${t}`,s.textContent=e,s.dataset.id=++si,a.appendChild(s),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateY(-8px)",s.style.transition="opacity 220ms, transform 220ms",setTimeout(()=>s.remove(),250)},n)}function rt(e){return X(e,{type:"error",duration:6e3})}function K(e){return X(e,{type:"success"})}const ii=3,ri=2.5,li={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function gt(e,t={}){if(!(e!=null&&e.length))return'<p style="color: var(--fg-muted);">Keine Tage im Zeitraum.</p>';const n=new Map;for(const i of t.warnungen??[])n.has(i.datum)||n.set(i.datum,[]),n.get(i.datum).push(i);const a=[];let s=null;for(const i of e)(!s||s.key!==i.wocheKey)&&(s={key:i.wocheKey,tage:[]},a.push(s)),s.tage.push(i);return`<div class="tages-liste">${a.map(i=>oi(i,n)).join("")}</div>`}function oi(e,t){var c;const n=e.tage.reduce((g,h)=>g+lt(h),0),a=e.tage.reduce((g,h)=>g+(h.diff??0),0),s=(c=e.tage[0])==null?void 0:c.datum,i=s?Ge(V(s)):"",o=e.key?e.key.split("-")[1]:"?",d=a>.05?"pos":a<-.05?"neg":"flat",r=(a>0?"+":"")+a.toFixed(2).replace(".",",")+"h",l=n.toFixed(2).replace(".",",")+"h";return`
    <div class="woche-group">
      <div class="woche-header">
        <div class="woche-header-titel">
          <span class="woche-header-kw">KW ${$(o)}</span>
          <span class="woche-header-range tabular">${$(i)}</span>
        </div>
        <div class="woche-header-stats">
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Ist</span>
            <span class="woche-header-ist tabular">${l}</span>
          </span>
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Diff</span>
            <span class="woche-header-diff tabular ${d}">${r}</span>
          </span>
        </div>
      </div>
      <div class="woche-tage">
        ${e.tage.map(g=>ci(g,(t==null?void 0:t.get(g.datum))??[])).join("")}
      </div>
    </div>
  `}function ci(e,t=[]){const n=e.diff??0,a=n>0,s=a?ii:ri,i=Math.min(150,Math.abs(n)/s*50),o=a?"var(--success)":n<0?"var(--danger)":"var(--fg-subtle)",d=An(e.zeitSpannen),r=e.saldo??0,l=t.length>0,c=l?ui(t):"",g=l?t.map(u=>`${u.titel}${u.beschreibung?`
`+u.beschreibung:""}`).join(`

`):"",h=l?t[0].schweregrad:null;return`
    <a href="#/tag/${e.datum}" class="tag-row${l?" has-warn severity-"+h:""}">
      <div class="tag-row-datum">
        <div class="tabular">${$(N(new Date(e.datum)))}</div>
        <div class="tag-row-wd">${di(e.wochentag)}</div>
      </div>
      <div class="tag-row-warn-cell" aria-hidden="${l?"false":"true"}">
        ${l?`<span class="tag-row-warn severity-${h}" title="${$(g)}">${c}${t.length>1?" "+t.length:""}</span>`:""}
      </div>
      <div class="tag-row-typ">
        ${e.tagestyp?`<span class="pill ${gi(e.tagestyp)}">${$(e.tagestyp)}</span>`:'<span style="color: var(--fg-subtle); font-size: 12px;">—</span>'}
      </div>
      <div class="tag-row-kg">
        ${In(d,{size:18})}
      </div>
      <div class="tag-row-ist tabular">
        ${(()=>{if(e.ist==null)return'<div class="ist-wert">—</div>';const u=He(e.ist),[m,f]=u.split(":");return e.ist<=0?`<div class="ist-wert">${u}</div>`:`<div class="ist-display" title="Klick auf H oder M zum Kopieren">
            <button class="ist-part" data-val="${m}" title="${m} Stunden kopieren">${m}</button><span class="ist-sep">:</span><button class="ist-part" data-val="${f}" title="${f} Minuten kopieren">${f}</button>
          </div>`})()}
        <div style="color: var(--fg-subtle); font-size: 11px;">Soll ${e.soll!=null?He(e.soll):"—"}</div>
      </div>
      <div class="tag-row-bar">
        <div class="bar-track">
          <div class="bar-zero"></div>
          <div class="bar-fill ${a?"pos":"neg"}" style="width: ${i}%; background: ${o};"></div>
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
  `}function di(e){return li[e]??e}function ui(e){const t={error:3,warn:2,info:1};let n=e[0];for(const a of e)(t[a.schweregrad]||0)>(t[n.schweregrad]||0)&&(n=a);return n.schweregrad==="error"?"!":n.schweregrad==="warn"?"⚠":"i"}function gi(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function Wt(e){e._istCopyAttached||(e._istCopyAttached=!0,e.addEventListener("click",async t=>{const n=t.target.closest(".ist-part");if(!n)return;t.preventDefault(),t.stopPropagation();const a=n.getAttribute("data-val");try{await navigator.clipboard.writeText(a),n._copyResetTimer&&clearTimeout(n._copyResetTimer),n.classList.add("ok"),n.textContent="✓",n._copyResetTimer=setTimeout(()=>{n.classList.remove("ok"),n.textContent=a,n._copyResetTimer=null},800)}catch{K(`Bitte kopieren: ${a}`)}}))}const hi=[{key:7,label:"1 Woche"},{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:180,label:"6 Monate"},{key:365,label:"1 Jahr"},{key:730,label:"2 Jahre"},{key:"alles",label:"Alles"}];function fi(e){return hi.filter(t=>t.key==="alles"||t.key<e)}async function an({root:e}){const[t,n,a,s,i,o,d,r]=await Promise.all([re(),ot(),ue(),Qs(),Qt("dashboardZeitraum",14),ct(),Ue(),Qt("saldoFormat","hhmm")]),l=Object.fromEntries(o.map(M=>[M.key,M]));if(a.length===0){e.innerHTML=pi();return}const c=Tn(a,n),g=c.length,h=fi(g);let u=i;h.some(M=>M.key===u)||(u="alles");const m=new Set(s.map(M=>M.key)),f=d!=null&&d.stichtagAuswertung?new Date(d.stichtagAuswertung):new Date,b=ut(a,t,f,m),p=jn(n,m),k=[...b,...p],v=fs(c),T=v>.05?"positive":v<-.05?"negative":"";e.innerHTML=`
    <h1 class="view-title">Dashboard</h1>
    <p class="view-subtitle">Stand: ${Te(N(new Date(a[a.length-1].datum)))}</p>

    <div class="saldo-hero" style="margin-bottom: 32px; align-items: stretch;">
      <div class="saldo-hero-text" style="min-width: 260px;">
        <h3>Aktueller Gleitzeit-Saldo</h3>
        <div class="saldo-value-row">
          <div class="saldo-value ${T}" id="saldo-hero-value">${Te(Ut(v,r))}</div>
          <button type="button" class="saldo-format-toggle" id="saldo-format-toggle"
            data-format="${Te(r)}"
            title="${r==="hhmm"?"Auf Dezimal umstellen":"Auf Stunden:Minuten umstellen"}">
            ${r==="hhmm"?"als Dezimal":"als Std:Min"}
          </button>
        </div>
        <div id="hero-bewegung" class="saldo-trend flat" style="margin-top: 12px;"></div>
      </div>
      <div style="flex: 1; min-width: 400px; display: flex; flex-direction: column;">
        <div class="card-split" style="margin-bottom: 12px; align-items: center;">
          <h3 style="margin: 0;">Saldo-Verlauf</h3>
          <div class="segmented" id="zeitraum-picker">
            ${h.map(M=>`<button type="button" data-key="${M.key}" class="${u===M.key?"active":""}">${M.label}</button>`).join("")}
          </div>
        </div>
        <div style="flex: 1; height: 220px;"><canvas id="saldo-chart"></canvas></div>
      </div>
    </div>

    ${k.length>0?`
      <div class="card" style="margin-bottom: 32px;">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Offene Warnungen</h2>
        </div>
        ${k.slice(0,8).map(M=>mi(M,t,l)).join("")}
        ${k.length>8?`<div style="margin-top: 12px; color: var(--fg-muted); font-size: 13px; text-align: center;">+ ${k.length-8} weitere Warnungen vorhanden</div>`:""}
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
          ${h.map(M=>`<button type="button" data-key="${M.key}" class="${u===M.key?"active":""}">${M.label}</button>`).join("")}
        </div>
      </div>
      <div id="tage-liste"></div>
    </div>

  `,sn(u,e,c,k);const F=e.querySelector("#saldo-format-toggle");F==null||F.addEventListener("click",async()=>{const z=(F.getAttribute("data-format")||"hhmm")==="hhmm"?"dezimal":"hhmm";await en("saldoFormat",z);const O=e.querySelector("#saldo-hero-value");O&&(O.textContent=Ut(v,z)),F.setAttribute("data-format",z),F.textContent=z==="hhmm"?"als Dezimal":"als Std:Min",F.title=z==="hhmm"?"Auf Dezimal umstellen":"Auf Stunden:Minuten umstellen"});const B=()=>e.querySelectorAll("#zeitraum-picker button, #zeitraum-picker-2 button");B().forEach(M=>{M.addEventListener("click",async()=>{if(M.disabled)return;const z=M.getAttribute("data-key"),O=z==="alles"?"alles":parseInt(z,10);B().forEach(x=>x.classList.toggle("active",x.getAttribute("data-key")===z)),await en("dashboardZeitraum",O),sn(O,e,c,k)})}),e.addEventListener("click",async M=>{const z=M.target.closest(".ist-part");if(z){M.preventDefault(),M.stopPropagation();const C=z.getAttribute("data-val");try{await navigator.clipboard.writeText(C),z._copyResetTimer&&clearTimeout(z._copyResetTimer),z.classList.add("ok"),z.textContent="✓",z._copyResetTimer=setTimeout(()=>{z.classList.remove("ok"),z.textContent=C,z._copyResetTimer=null},800)}catch{K(`Bitte kopieren: ${C}`)}return}const O=M.target.closest(".btn-dismiss");if(!O)return;const x=O.getAttribute("data-datum"),y=O.getAttribute("data-typ");if(!x||!y)return;await Xs(x,y),K("Warnung ausgeblendet.");const P=O.closest(".alert");P&&(P.style.display="none")})}function sn(e,t,n,a=[]){const s=hs(n,e),i=ms(s);requestAnimationFrame(()=>{const l=t.querySelector("#saldo-chart");Lt(l,s)});const o=t.querySelector("#hero-bewegung");if(o){const l=i>.05?"up":i<-.05?"down":"flat",c=i>.05?"↑":i<-.05?"↓":"→";o.className=`saldo-trend ${l}`,o.innerHTML=`${c} ${Math.abs(i)<.01?"Unverändert":fe(i,{signed:!0})} im Zeitraum`}const d=t.querySelector("#tage-info");if(d){const l=s.length;d.textContent=`${l} ${l===1?"Tag":"Tage"}`}const r=t.querySelector("#tage-liste");r&&(r.innerHTML=gt(s.slice().reverse(),{warnungen:a.filter(l=>s.some(c=>c.datum===l.datum))}))}function mi(e,t,n){const a=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";let s=null;if(e.mailVorlageKey&&t){const i=Je(e.mailVorlageKey,n==null?void 0:n[e.mailVorlageKey]);if(i){const o=Ct(t,e);s=Bt(t,i,o)}}return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${a}</div>
      <div class="alert-body">
        <div class="alert-title">${Te(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${Te(e.beschreibung)}</p>
        <div class="alert-actions">
          ${s?`<a href="${bt(s)}" class="btn-mail-medium"><img src="outlook-logo.png" alt="" class="outlook-logo-medium" />E-Mail</a>`:""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
          <button class="btn ghost sm btn-dismiss" data-datum="${bt(e.datum)}" data-typ="${bt(e.typ)}">Ausblenden</button>
        </div>
      </div>
    </div>
  `}function pi(){return`
    <div class="empty-state" style="margin-top: 80px;">
      <p class="hint" style="margin-bottom: 18px;">Noch keine Daten geladen.</p>
      <a href="#/daten" class="btn primary">Zum Upload →</a>
      <p class="hint" style="margin-top: 24px; font-size: 12px;">Tipp: Tour erneut starten unter <a href="#/daten" style="color: var(--accent);">Daten</a> ganz unten.</p>
    </div>
  `}function Te(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function bt(e){return Te(e)}const Zn="/better-ess/assets/pdf.worker.min-yatZIOMy.mjs";Mn.workerSrc=Zn;const rn={Januar:1,Februar:2,März:3,Maerz:3,April:4,Mai:5,Juni:6,Juli:7,August:8,September:9,Oktober:10,November:11,Dezember:12},bi=["Stempelzeit","Berufsschule Std. bez","Berufsschule","Dienstreise Arbeitszeit","Reise öff.VM/PKW Beifahr.","Reise öff.VM/PKW","Urlaub","Gleitzeit","Arbeitsunfähigkeit","TgDtEinh","Neujahr","Karfreitag","Ostermontg","Ostmontg","Osterso.","Hl.3 Kön.","Allerhlg","Pfingstmo","Fronleichn","TdDtEinh"];async function vi(e){var r,l;const n=await Dn({data:e}).promise,a=[];let s=0;for(let c=1;c<=n.numPages;c++){const h=await(await n.getPage(c)).getTextContent();s+=h.items.length;const u=yi(h.items);for(const m of u)a.push({page:c,text:m})}const i=wi(a),{tage:o,monate:d}=ki(a);try{const c=await n.getMetadata();i.producer=((r=c==null?void 0:c.info)==null?void 0:r.Producer)??null,i.creator=((l=c==null?void 0:c.info)==null?void 0:l.Creator)??null}catch{}return i.totalTextItems=s,{meta:i,tage:o,monate:d}}function yi(e){if(!e.length)return[];const t=e.slice().sort((o,d)=>{const r=d.transform[5]-o.transform[5];return Math.abs(r)>2?r:o.transform[4]-d.transform[4]}),n=[];let a=null,s=[];const i=3;for(const o of t){const d=o.transform[5];a==null||Math.abs(d-a)<=i?(s.push(o),a==null&&(a=d)):(n.push(ln(s)),s=[o],a=d)}return s.length&&n.push(ln(s)),n.filter(o=>o.trim().length>0)}function ln(e){e.sort((a,s)=>a.transform[4]-s.transform[4]);let t="",n=-1;for(const a of e){const s=a.transform[4];n>=0&&s-n>4?t+="  ":n>=0&&s-n>.5&&(t+=" "),t+=a.str,n=s+a.width}return t}function wi(e){var n,a;const t={personalnummer:null,name:null,kostenstelle:null,personalbereich:null,einstellungsdatum:null,mitarbeiterkreis:null,arbeitszeitplanregel:null,zeitraumVon:null,zeitraumBis:null,stichtagAuswertung:null};for(let s=0;s<e.length;s++){const i=e[s].text,o=/vom\s+(\d{2}\.\d{2}\.\d{4})\s+bis\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);o&&(t.zeitraumVon=Ee(o[1]),t.zeitraumBis=Ee(o[2]));const d=/bis einschließlich dem\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);if(d&&(t.stichtagAuswertung=Ee(d[1])),/Personalnummer/i.test(i)&&/Kostenstelle/i.test(i)){const r=(((n=e[s+1])==null?void 0:n.text)??"").trim();let l=r.split(/\s{2,}/);l.length<3&&(l=r.split(/\s+/)),l.length>=3&&/^\d/.test(l[0])&&(t.personalnummer=l[0],t.kostenstelle=l[1],t.personalbereich=l[2])}if(/Einstellungsdatum/i.test(i)&&/Mitarbeiterkreis/i.test(i)){const r=(((a=e[s+1])==null?void 0:a.text)??"").trim();let l=r.split(/\s{2,}/);l.length<3&&(l=r.split(/\s+/)),l.length>=3&&/^\d{2}\.\d{2}\.\d{4}$/.test(l[0])&&(t.einstellungsdatum=Ee(l[0]),t.mitarbeiterkreis=l[1],t.arbeitszeitplanregel=l[2])}if(/Bei Rückfragen wenden Sie sich an/i.test(i))for(let r=s+1;r<Math.min(s+8,e.length);r++){const l=e[r].text.trim();if(/^[A-ZÄÖÜ][a-zäöüß]+(?:\s[A-ZÄÖÜ][a-zäöüß]+)+$/.test(l)&&!/kanarya/i.test(l)&&!/tel/i.test(l)){t.name=l;break}}}return t}function ki(e,t){var r;const n=[],a=[];let s=null,i=null,o=!1,d=0;for(;d<e.length;){const l=e[d].text,c=/Monat:\s*([A-Za-zäöüÄÖÜß]+)\s*-\s*(\d{4})/.exec(l);if(c){const m=c[1].trim(),f=parseInt(c[2],10),b=rn[m]??rn[m.replace("ä","ae")]??null;b&&(s={jahr:f,monat:b,monatKey:`${f}-${String(b).padStart(2,"0")}`},o=!0,i=null),d++;continue}if(/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.test(l)){const m=/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.exec(l),f=Ee(m[1]);i={monatKey:(s==null?void 0:s.monatKey)??Ft(f),stichtag:f,glz:{},flexi:{},zeitkonten:{},raw:{}},d=xi(e,d+1,i),a.push(i);continue}let g=s;const h=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)\b/.exec(l.trim());if(h&&s){const m=parseInt(h[1],10);o&&m>=20?g=Mi(s):m<=15&&(o=!1)}const u=on(l,g);if(u){const m=[];let f=d+1;for(;f<e.length;){const p=e[f].text;if(/^\s*\d{4}\s+Umbuchung/.test(p)||on(p,s)||/Wochensumme/i.test(p)||/Monats.bersicht/i.test(p)||/Monat:\s*[A-Za-z]/i.test(p))break;const k=$i(p);if(k){m.push(k),f++;continue}break}if(m.length&&u.zeitSpannen.push(...m),u.tagestyp==="Wochenende"||u.wochentag==="SA"||u.wochentag==="SO"){d=f;continue}(u.ist!=null||u.soll!=null||(((r=u.zeitSpannen)==null?void 0:r.length)??0)>0||u.tagestyp!=null)&&n.push(u),d=f;continue}d++}return{tage:n,monate:a}}function xi(e,t,n){let a=t;const s=/(\d{4,5}|KTAU|AZAU)\s*-\s*(.+?)\s+(-?[\d,.]+-?)(?=\s+(?:\d{4,5}|KTAU|AZAU)\s*-|\s*$)/g;for(;a<e.length;){const i=e[a].text.trim();if(/^Monat:\s/.test(i)||/^Einzelergebnisse\s/.test(i)||/^Tag\b/.test(i)||/^Wochensumme/.test(i)||/^\d{2}\s+(MO|DI|MI|DO|FR|SA|SO)\b/.test(i)||/^Übersicht für den Zeitraum/i.test(i)||/^Abwesenheitsansprüche/i.test(i))break;s.lastIndex=0;let o;for(;(o=s.exec(i))!=null;){const d=o[1],r=o[2].trim(),l=zn(o[3]);n.raw[d]={beschreibung:r,wert:l},d==="0008"&&(n.glz.saldoVorperiode=l),d==="8016"&&(n.glz.saldoAktuellePeriode=l),d==="9802"&&(n.glz.umgebuchteStunden=l),d==="0005"&&(n.glz.saldoGesamt=l),d==="9803"&&(n.glz.ueberzaehligeStd=l),d==="0050"&&(n.zeitkonten.produktivstunden=l),d==="9011"&&(n.flexi.jahreskontoVorperiode=l),d==="9010"&&(n.flexi.jahreskontoSaldo=l),d==="9020"&&(n.flexi.langzeitkontoSaldo=l),d==="9203"&&(n.zeitkonten.azMonatsendeUeber216=l),d==="9207"&&(n.zeitkonten.auszahlungBav=l),d==="9205"&&(n.zeitkonten.summeAuszahlung=l)}if(a++,a-t>80)break}return a}function on(e,t){if(!t)return null;const n=e.trim(),a=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)(?:\s+(.+))?$/.exec(n);if(!a)return null;const s=parseInt(a[1],10),i=a[2],o=(a[3]??"").trim();let d=t.jahr,r=t.monat;const l=new Date(d,r-1,s),c={datum:Cn(l),datumDate:l.toISOString(),wochentag:i,tagNr:s,monatKey:Ft(l),wocheKey:_n(l),zeitSpannen:[],aktivitaeten:[],ist:null,soll:null,diff:null,pause:null,tazp:null,tagestyp:null,raw:n};return o?(Si(o,c),c):(c.tagestyp=["SA","SO"].includes(i)?"Wochenende":null,c)}function $i(e){const t=e.trim(),n=/^(Stempelzeit|Reise öff\.VM\/PKW Beifahr\.|Reise öff\.VM\/PKW|Dienstreise Arbeitszeit)\s+(\d{2}:\d{2})\s+(\d{2}:\d{2})\s*$/.exec(t);return n?{aktivitaet:n[1],von:n[2],bis:n[3]}:null}function Si(e,t){let n=null,a=e;for(const c of bi)if(e.startsWith(c)){n=c,a=e.slice(c.length).trim();break}n||(n=e.split(/\s+/)[0],a=e.slice(n.length).trim()),t.tagestyp=Di(n),t.aktivitaeten.push(n);const s=a.split(/\s+/).filter(Boolean),i=/^\d{2}:\d{2}$/,o=/^-?[\d,.]+-?$/;let d=0;for(;s[d]&&i.test(s[d])&&s[d+1]&&i.test(s[d+1]);)t.zeitSpannen.push({aktivitaet:n,von:s[d],bis:s[d+1]}),d+=2;const r=[];for(;d<s.length&&o.test(s[d]);){const c=zn(s[d]);c!=null&&r.push(c),d++}let l=s[d];r.length>=5?([t.ist,t.soll,t.diff,t.pause]=r,l||(l=String(r[4]))):r.length===4?[t.ist,t.soll,t.diff,t.pause]=r:r.length===3?[t.ist,t.soll,t.diff]=r:r.length===2?[t.ist,t.soll]=r:r.length===1&&(t.ist=r[0]),l&&(t.tazp=String(l))}function Mi(e){if(!e)return null;let t=e.monat-1,n=e.jahr;return t<1&&(t=12,n-=1),{jahr:n,monat:t,monatKey:`${n}-${String(t).padStart(2,"0")}`}}function Di(e){return e?/^Stempelzeit$/i.test(e)?"Stempelzeit":/^Berufsschule Std\. bez$/i.test(e)||/^Berufsschule$/i.test(e)?"Berufsschule":/Dienstreise/i.test(e)||/Reise/i.test(e)?"Dienstreise":/^Urlaub$/i.test(e)?"Urlaub":/^Gleitzeit$/i.test(e)?"Gleitzeit":/Arbeitsunf.higkeit/i.test(e)?"Arbeitsunfähigkeit":/^(Neujahr|Karfreitag|Ostermontg|Ostmontg|Osterso\.|Hl\.3 Kön\.|Allerhlg|Pfingstmo|Fronleichn|TdDtEinh|TgDtEinh)$/i.test(e)?"Feiertag":e:null}function ie(e,t={}){const{title:n="Bestätigen",confirmLabel:a="Bestätigen",cancelLabel:s="Abbrechen",variant:i="default"}=t;return Ai({message:e,title:n,confirmLabel:a,cancelLabel:s,variant:i,kind:"confirm"})}function zi(e,t,n={}){const{title:a="Bestätigen",confirmLabel:s="Weiter",cancelLabel:i="Abbrechen",variant:o="default",icon:d=null}=n;return new Promise(r=>{const l=document.activeElement,c=document.createElement("div");c.className="app-dialog-overlay";const g=d==="info"?`
      <span class="app-dialog-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </span>`:"";c.innerHTML=`
      <div class="app-dialog" role="dialog" aria-modal="true" aria-labelledby="app-dialog-title">
        <div class="app-dialog-header">
          ${g}
          <h3 id="app-dialog-title" class="app-dialog-title">${he(a)}</h3>
        </div>
        <div class="app-dialog-message">${Gn(e)}</div>
        <label class="app-dialog-checkbox">
          <input type="checkbox" class="app-dialog-checkbox-input" />
          <span class="app-dialog-checkbox-label">${he(t)}</span>
        </label>
        <div class="app-dialog-actions">
          <button class="btn ghost app-dialog-cancel" type="button">${he(i)}</button>
          <button class="btn primary app-dialog-confirm ${o==="danger"?"is-danger":""}" type="button" disabled>${he(s)}</button>
        </div>
      </div>
    `,document.body.appendChild(c),requestAnimationFrame(()=>c.classList.add("is-open"));const h=c.querySelector(".app-dialog-confirm"),u=c.querySelector(".app-dialog-cancel"),m=c.querySelector(".app-dialog-checkbox-input"),f=p=>{c.classList.remove("is-open"),setTimeout(()=>{if(c.remove(),document.removeEventListener("keydown",b),l&&l.focus)try{l.focus()}catch{}r(p)},180)},b=p=>{p.key==="Escape"?(p.preventDefault(),f(!1)):p.key==="Enter"&&!h.disabled&&(p.preventDefault(),f(!0))};m.addEventListener("change",()=>{h.disabled=!m.checked}),h.addEventListener("click",()=>{h.disabled||f(!0)}),u.addEventListener("click",()=>f(!1)),c.addEventListener("click",p=>{p.target===c&&f(!1)}),document.addEventListener("keydown",b),setTimeout(()=>m.focus(),50)})}function Ai({message:e,title:t,confirmLabel:n,cancelLabel:a,variant:s,kind:i}){return new Promise(o=>{const d=document.activeElement,r=document.createElement("div");r.className="app-dialog-overlay",r.innerHTML=`
      <div class="app-dialog" role="dialog" aria-modal="true" aria-labelledby="app-dialog-title">
        <h3 id="app-dialog-title" class="app-dialog-title">${he(t)}</h3>
        <div class="app-dialog-message">${Gn(e)}</div>
        <div class="app-dialog-actions">
          ${`<button class="btn ghost app-dialog-cancel" type="button">${he(a)}</button>`}
          <button class="btn primary app-dialog-confirm ${s==="danger"?"is-danger":""}" type="button">${he(n)}</button>
        </div>
      </div>
    `,document.body.appendChild(r),requestAnimationFrame(()=>r.classList.add("is-open"));const l=r.querySelector(".app-dialog-confirm"),c=r.querySelector(".app-dialog-cancel"),g=u=>{r.classList.remove("is-open"),setTimeout(()=>{if(r.remove(),document.removeEventListener("keydown",h),d&&d.focus)try{d.focus()}catch{}o(u)},180)},h=u=>{u.key==="Escape"?(u.preventDefault(),g(!1)):u.key==="Enter"&&(u.preventDefault(),g(!0))};l==null||l.addEventListener("click",()=>g(!0)),c==null||c.addEventListener("click",()=>g(!1)),r.addEventListener("click",u=>{u.target===r&&g(!1)}),document.addEventListener("keydown",h),setTimeout(()=>l==null?void 0:l.focus(),50)})}function he(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Gn(e){return he(e).replace(/\n/g,"<br>")}const Un="better-ess-tour-completed",Ot=typeof import.meta<"u"?"/better-ess/":"/",Pi=Ot+"tutorial/speichern.png",Ei=Ot+"tutorial/download.png",Ti=Ot+"tutorial/zeitraum.png",Fe=[{type:"modal",hero:!0,icon:"👋",title:"Willkommen bei Better ESS",text:"Diese App liest deinen <strong>Zeitnachweis</strong> und macht ihn auf einen Blick verständlich.<br><br>Sie <strong>warnt dich automatisch</strong> bei fehlenden Tagen, falschen Berufsschul-Stunden oder unrechtmäßigem Pausen-Abzug. Du kannst deine <strong>monatliche Fahrgelderstattungs-Excel</strong> auf Knopfdruck generieren und <strong>Korrektur-Mails an die Zeitwirtschaft</strong> mit einem Klick verschicken — Empfänger, Betreff und Text sind schon vorbefüllt."},{type:"modal",hero:!0,icon:"🔒",title:"Deine Daten bleiben bei dir",text:"Dein PDF geht <strong>nicht ins Internet</strong>.<br><br>Alles läuft lokal in deinem Browser — wie eine Notizen-App. Kein Upload, kein Server, kein Konto."},{type:"highlight",target:'a[href="#/daten"]',icon:"📂",title:"Hier startet alles",text:"Hier lädst du deinen Zeitnachweis hoch.",placement:"right",autoClick:!0,onAfterClick:async()=>{window.location.hash!=="#/daten"&&(window.location.hash="#/daten"),await tt("#upload-zone",1500)}},{type:"download-modal",icon:"📥",title:'1. Im ESS auf „Zeitnachweis herunterladen" klicken',image:Ei,points:[{kind:"good",icon:"✓",text:"Den Button findest du unten rechts in der ESS-Zeitbuchungs-Ansicht."}]},{type:"download-modal",icon:"📅",title:'2. „Anderer Zeitraum" wählen — möglichst groß',image:Ti,points:[{kind:"good",icon:"✓",text:'Wähle <strong>„Anderer Zeitraum"</strong> und nimm einen möglichst großen Bereich (am besten Ausbildungsstart bis heute) — die App nutzt alle Daten für Saldo-Verlauf und Trends.'},{kind:"bad",icon:"✕",text:'Nicht „Aktuelle Woche" oder „Aktueller Monat" — dann fehlen Verlaufs-Daten.'}]},{type:"download-modal",icon:"💾",title:'3. Im PDF-Viewer auf „Speichern" — nicht „Drucken"',image:Pi,points:[{kind:"good",icon:"✓",text:"<strong>Speichern-Button</strong> (Disketten-Symbol oben rechts in der PDF-Toolbar) — speichert eine echte Text-PDF."},{kind:"bad",icon:"✕",text:'<strong>NICHT</strong> „Drucken → Microsoft Print to PDF" — dabei werden Texte als Pfade gerendert und sind nicht lesbar.'}]},{type:"highlight",target:"#upload-zone",icon:"📥",title:"Lade jetzt dein PDF hoch",text:"Zieh dein Zeitnachweis-PDF auf die Box (oder klick sie an). Erst nach dem Upload geht die Tour weiter.",placement:"top",waitForTarget:!0,waitForEvent:"better-ess:pdf-uploaded"},{type:"modal",icon:"✨",title:"Geschafft!",text:"Dein PDF ist eingelesen. Jetzt zeig ich dir die Funktionen — anhand deiner echten Daten.",onNext:async()=>{window.location.hash="#/",await tt(".saldo-value",1500)}},{type:"highlight",target:".saldo-value",icon:"⚖️",title:"Dein aktueller Saldo",text:"Plus oder Minus auf einen Blick. Tagesaktuell.",placement:"right",waitForTarget:!0},{type:"highlight",target:"#saldo-chart",icon:"📈",title:"Saldo-Verlauf",text:"Hover über die Punkte für Details. Zeitraum oben rechts umschaltbar.",placement:"top",waitForTarget:!0},{type:"highlight",target:".tag-row .ist-display",icon:"⏱️",title:"Stunden direkt kopieren",text:"Klick auf <strong>H</strong> oder <strong>M</strong> — kopiert den Wert in deine Zwischenablage. Praktisch fürs IHK-Berichtsheft.",placement:"left",waitForTarget:!0},{type:"highlight",target:".alert",icon:"⚠️",title:"Auffälligkeiten",text:"Fehlende Tage, falsche BS-Stunden, Pausen-Abzug — alles automatisch erkannt.",placement:"left",optional:!0,waitForTarget:!0,timeoutMs:1200},{type:"highlight",target:'a[href="#/profil"]',icon:"👤",title:"Profil",text:"Über 18? Pausen-Regel und Mail-Empfänger anpassen.",placement:"right"},{type:"highlight",target:'a[href="#/fahrtgeld"]',icon:"🚌",title:"Fahrgelderstattung",text:"Hier generierst du deine monatliche Fahrgeld-Excel mit deinen erkannten Berufsschultagen.",placement:"right",autoClick:!0,onAfterClick:async()=>{window.location.hash!=="#/fahrtgeld"&&(window.location.hash="#/fahrtgeld"),await tt("#fahrtgeld-dropzone, #btn-template-replace, .fahrtgeld-generate-card",2e3)}},{type:"highlight",target:"#fahrtgeld-dropzone, .fahrtgeld-generate-card",icon:"📥",title:"Vorlage einmalig hochladen",text:'Eine bestehende Fahrgeld-Excel hier hochladen — Name, Personalnummer, Haltestellen und Tagessatz werden automatisch ausgelesen. Tour wartet auf den Upload (oder oben auf „Überspringen", um die Tour zu beenden).',placement:"top",waitForTarget:!0,timeoutMs:2500,waitForEvent:"better-ess:fahrgeld-template-uploaded"},{type:"highlight",target:".btn-generate-big",icon:"✅",title:"Excel generieren",text:"Monat unten auswählen, dann hier klicken. Du bekommst eine fertig ausgefüllte Excel zum Download — mit deinen Berufsschultagen, Datum und Unterschrift.",placement:"bottom",waitForTarget:!0,timeoutMs:1500,optional:!0},{type:"highlight",target:".btn-mail-big",icon:"✉️",title:"E-Mail an die Personalabteilung",text:"Öffnet Outlook mit fertig vorausgefülltem Empfänger, Betreff und Text. Excel-Anhang aus dem Download-Ordner musst du noch manuell dranhängen.",placement:"bottom",waitForTarget:!0,timeoutMs:1500,optional:!0},{type:"modal",icon:"🚀",title:"Bereit!",text:"Du kennst alle Funktionen. Tour erneut starten? Button am Ende der <strong>Daten</strong>-Seite."}],cn=Fe.findIndex(e=>e.icon==="✨");let _=null,xe=null;function Jn(){_===null&&(Nt(),_={idx:0},oe())}function Fi(e){return e?!1:!localStorage.getItem(Un)}function Li(){localStorage.setItem(Un,"1")}function Yn(){return _!==null}function Nt(){document.querySelectorAll(".tour-blur-frame, .tour-popover, .tour-pointer, .tour-highlight-border").forEach(e=>e.remove()),xe&&(xe(),xe=null),_=null}function et(e){const t=document.querySelector(".tour-blur-frame.full"),n=[document.querySelector('.tour-blur-frame[data-side="top"]'),document.querySelector('.tour-blur-frame[data-side="left"]'),document.querySelector('.tour-blur-frame[data-side="right"]'),document.querySelector('.tour-blur-frame[data-side="bottom"]')];if(!e){n.forEach(b=>{b&&(b.style.opacity="0")});let u=t;!u?(u=document.createElement("div"),u.className="tour-blur-frame full",document.body.appendChild(u)):u.style.opacity="1";const f=document.querySelector(".tour-highlight-border");f&&(f.style.opacity="0");return}t&&(t.style.opacity="0");const a=e.getBoundingClientRect(),s=8,i=Math.max(0,a.left-s),o=Math.max(0,a.top-s),d=a.width+s*2,r=a.height+s*2,l=window.innerWidth,c=window.innerHeight,g={top:{top:0,left:0,width:l,height:o},left:{top:o,left:0,width:i,height:r},right:{top:o,left:i+d,width:l-(i+d),height:r},bottom:{top:o+r,left:0,width:l,height:c-(o+r)}};for(const[u,m]of Object.entries(g)){let f=n[Object.keys(g).indexOf(u)];f||(f=document.createElement("div"),f.className="tour-blur-frame",f.dataset.side=u,document.body.appendChild(f)),f.style.top=m.top+"px",f.style.left=m.left+"px",f.style.width=Math.max(0,m.width)+"px",f.style.height=Math.max(0,m.height)+"px",f.style.opacity=m.width<=0||m.height<=0?"0":"1"}let h=document.querySelector(".tour-highlight-border");h||(h=document.createElement("div"),h.className="tour-highlight-border",document.body.appendChild(h)),h.style.top=o+"px",h.style.left=i+"px",h.style.width=d+"px",h.style.height=r+"px",h.style.opacity="1",h.style.display=""}function Vt(){let e=document.querySelector(".tour-pointer");return e||(e=document.createElement("div"),e.className="tour-pointer",e.innerHTML=`
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
      </svg>`,e.style.top=window.innerHeight/2+"px",e.style.left=window.innerWidth/2+"px",document.body.appendChild(e)),e}function _i(e){const t=Vt(),n=e.getBoundingClientRect(),a=n.left+n.width*.5,s=n.top+n.height*.5;t.style.top=s-6+"px",t.style.left=a-9+"px"}function dn(){var e;(e=document.querySelector(".tour-pointer"))==null||e.remove()}async function Ci(e){const t=Vt();t.classList.add("tour-pointer-clicking"),await new Promise(n=>setTimeout(n,280)),t.classList.remove("tour-pointer-clicking")}async function tt(e,t=1500){const n=Date.now();for(;Date.now()-n<t;){const a=document.querySelector(e);if(a)return a;await new Promise(s=>setTimeout(s,100))}return null}async function oe(){var d,r,l;if(!_)return;const e=_.overrideStep||Fe[_.idx];if(_.overrideStep=null,!e){Mt();return}if(xe&&(xe(),xe=null),e.type==="download-modal")return dn(),et(null),Bi(e);let t=null;if(e.type==="highlight"){if(t=e.waitForTarget?await tt(e.target,e.timeoutMs??1500):document.querySelector(e.target),!t&&e.fallback){const c=e.fallback;if(c.onBefore)try{await c.onBefore()}catch(g){console.warn("tour fallback onBefore error:",g)}return _.overrideStep=c,oe()}if(!t&&e.optional)return _.idx++,oe();if(!t&&e.waitForTarget&&!e.fallback)return console.warn("[tour] target not found, skipping:",e.target),_.idx++,oe();if(t){try{t.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}catch{}await new Promise(c=>setTimeout(c,250)),et(t),Vt(),requestAnimationFrame(()=>_i(t))}else et(null)}else dn(),et(null);let n=document.querySelector(".tour-popover");n||(n=document.createElement("div"),n.className="tour-popover",n.style.visibility="hidden",document.body.appendChild(n)),n.classList.remove("tour-popover-large","tour-popover-hero"),e.hero&&n.classList.add("tour-popover-hero"),t?n.classList.remove("center"):n.classList.add("center");const a=_.idx===0,s=_.idx===Fe.length-1,i=!!e.waitForEvent,o=i?"⏳ Warte auf Upload …":s?"Fertig":"Weiter →";if(n.innerHTML=`
    <div class="tour-popover-header">
      <span class="tour-popover-step">${_.idx+1} / ${Fe.length}</span>
      <button class="tour-skip" type="button" aria-label="Tour beenden">Überspringen</button>
    </div>
    <div class="tour-popover-icon">${e.icon||""}</div>
    <h3>${e.title}</h3>
    <div class="tour-popover-body">${e.text}</div>
    <div class="tour-popover-actions">
      <button class="btn tour-prev" type="button" ${a?'disabled style="opacity:0.4;cursor:default"':""}>← Zurück</button>
      <button class="btn primary tour-next" type="button" ${i?'disabled style="opacity:0.5;cursor:default"':""}>${o}</button>
    </div>`,t)n.style.opacity="0",requestAnimationFrame(()=>{Wi(n,t,e.placement||"right"),n.style.visibility="visible",n.style.opacity="1"});else{n.style.top=n.style.left=n.style.right=n.style.bottom="",n.style.opacity="0",n.style.visibility="visible";const c=document.querySelector(".tour-blur-frame.full");requestAnimationFrame(()=>{c&&(c.style.opacity="1"),n.style.opacity="1"})}if((d=n.querySelector(".tour-skip"))==null||d.addEventListener("click",()=>{Mt()}),a||(r=n.querySelector(".tour-prev"))==null||r.addEventListener("click",async()=>{_.idx=Math.max(0,_.idx-1),await oe()}),!i)(l=n.querySelector(".tour-next"))==null||l.addEventListener("click",async()=>{if(e.autoClick&&t){await Ci();try{const c=t.getAttribute("href");c&&c.startsWith("#/")?window.location.hash=c.slice(1):t.click()}catch(c){console.warn("tour autoClick error:",c)}if(e.onAfterClick)try{await e.onAfterClick()}catch(c){console.warn("tour onAfterClick error:",c)}else await new Promise(c=>setTimeout(c,350))}else if(e.onNext)try{await e.onNext()}catch(c){console.warn("tour onNext error:",c)}_.idx++,await oe()});else{const c=_.idx,g=c<cn,h=async()=>{Nt(),document.querySelectorAll(".upload-modal-overlay").forEach(u=>u.remove()),await new Promise(u=>setTimeout(u,300)),_={idx:g?cn:c+1},await oe()};document.addEventListener(e.waitForEvent,h,{once:!0}),xe=()=>document.removeEventListener(e.waitForEvent,h)}}function Bi(e){var a,s,i;let t=document.querySelector(".tour-popover");t||(t=document.createElement("div"),t.className="tour-popover",t.style.visibility="hidden",document.body.appendChild(t)),t.classList.add("tour-popover-large","center"),t.style.visibility="visible";const n=_.idx===0;_.idx,Fe.length-1,t.innerHTML=`
    <div class="tour-popover-header">
      <span class="tour-popover-step">${_.idx+1} / ${Fe.length}</span>
      <button class="tour-skip" type="button" aria-label="Tour beenden">Überspringen</button>
    </div>
    <div class="tour-popover-icon">${e.icon||""}</div>
    <h3>${e.title}</h3>
    <div class="tour-download-image-wrap">
      <img src="${e.image}" alt="Speichern-Button im PDF-Viewer">
    </div>
    <div class="tour-download-points">
      ${e.points.map(o=>`
        <div class="tour-download-point ${o.kind==="bad"?"bad":""}">
          <span class="tour-download-point-icon">${o.icon}</span>
          <span>${o.text}</span>
        </div>`).join("")}
    </div>
    <div class="tour-popover-actions" style="margin-top:14px;">
      <button class="btn tour-prev" type="button" ${n?'disabled style="opacity:0.4;cursor:default"':""}>← Zurück</button>
      <button class="btn primary tour-next" type="button">Verstanden, weiter →</button>
    </div>`,t.style.top=t.style.left=t.style.right=t.style.bottom="",t.style.opacity="1",(a=t.querySelector(".tour-skip"))==null||a.addEventListener("click",()=>{Mt()}),n||(s=t.querySelector(".tour-prev"))==null||s.addEventListener("click",async()=>{_.idx=Math.max(0,_.idx-1),await oe()}),(i=t.querySelector(".tour-next"))==null||i.addEventListener("click",async()=>{_.idx++,await oe()})}function Wi(e,t,n){const a=t.getBoundingClientRect(),s=16,i=e.offsetWidth||360,o=e.offsetHeight||220,d=window.innerWidth,r=window.innerHeight,l=[n,"right","bottom","left","top"];let c=null;for(const u of l)if((()=>{switch(u){case"right":return a.right+s+i<=d;case"left":return a.left-s-i>=0;case"bottom":return a.bottom+s+o<=r;case"top":return a.top-s-o>=0}})()){c=u;break}c=c||n;let g,h;switch(c){case"right":g=a.top+a.height/2-o/2,h=a.right+s;break;case"left":g=a.top+a.height/2-o/2,h=a.left-i-s;break;case"bottom":g=a.bottom+s,h=a.left+a.width/2-i/2;break;case"top":default:g=a.top-o-s,h=a.left+a.width/2-i/2;break}g=Math.max(s,Math.min(r-o-s,g)),h=Math.max(s,Math.min(d-i-s,h)),e.style.position="fixed",e.style.top=g+"px",e.style.left=h+"px",e.style.right="auto",e.style.bottom="auto",e.style.transform=""}function Mt(){Nt(),Li()}async function Oi({root:e}){var o;const t=await Vn(),n=await re();e.innerHTML=`
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
        ${t.length===0?'<div class="empty-state"><div class="empty-state-icon">📭</div><p>Noch keine Uploads</p></div>':Qn(t)}
      </div>
    </div>

    <div class="card" style="margin-top: 24px; text-align: center; background: transparent; border-style: dashed;">
      <p style="color: var(--fg-muted); font-size: 13px; margin: 0 0 12px;">Brauchst du nochmal eine kurze Tour durch die App?</p>
      <button class="btn" id="btn-tour-restart" type="button">🎯 Tour erneut starten</button>
    </div>
  `;const a=e.querySelector("#upload-zone"),s=e.querySelector("#file-input");async function i(){return Yn()?!0:await zi("Je länger der Zeitraum deines Zeitnachweises, desto besser arbeitet die App: vor allem Berufsschul-Muster (besonders im 14-tägigen Rhythmus), Saldo-Verlauf und Pausen-Analysen werden genauer. Mit weniger Daten funktioniert die App auch — nur weniger umfangreich.","Mein Zeitnachweis PDF deckt einen möglichst langen Zeitraum ab.",{title:"Vor dem Upload",confirmLabel:"Datei auswählen",cancelLabel:"Abbrechen",icon:"info"})}a.addEventListener("click",async()=>{await i()&&s.click()}),a.addEventListener("dragover",d=>{d.preventDefault(),a.classList.add("drag")}),a.addEventListener("dragleave",()=>a.classList.remove("drag")),a.addEventListener("drop",async d=>{var c;d.preventDefault(),a.classList.remove("drag");const r=(c=d.dataTransfer.files)==null?void 0:c[0];!r||!await i()||await gn(r,e,n)}),s.addEventListener("change",async d=>{var l;const r=(l=d.target.files)==null?void 0:l[0];r&&await gn(r,e,n)}),e.querySelector("#btn-export").addEventListener("click",Ki),e.querySelector("#btn-import").addEventListener("click",()=>e.querySelector("#import-input").click()),e.querySelector("#import-input").addEventListener("change",Ii),e.querySelector("#btn-clear-parsed").addEventListener("click",Vi),e.querySelector("#btn-reset").addEventListener("click",Hi),(o=e.querySelector("#btn-tour-restart"))==null||o.addEventListener("click",()=>Jn()),Ni()}let un=!1;function Ni(){un||(un=!0,document.body.addEventListener("click",e=>{if(e.target.closest(".lightbox-overlay, .upload-modal-overlay"))return;const t=e.target.closest("img.zoomable");t&&Xn(t.src,t.alt)}))}function Xn(e,t){const n=document.createElement("div");n.className="lightbox-overlay",n.innerHTML=`
    <button class="lightbox-close" aria-label="Schließen" title="Schließen (Esc)">×</button>
    <img src="${e}" alt="${t||""}" />
  `,document.body.appendChild(n);const a=()=>{n.remove(),document.removeEventListener("keydown",s)},s=i=>{i.key==="Escape"&&a()};n.addEventListener("click",i=>{(i.target===n||i.target.classList.contains("lightbox-close"))&&a()}),document.addEventListener("keydown",s)}async function Vi(){await ie("PDF-abgeleitete Daten (Tage, Monate, Uploads) werden gelöscht. Profil und Mail-Vorlagen bleiben erhalten.",{title:"PDF-Daten löschen?",confirmLabel:"Löschen",variant:"danger"})&&(await Kn(),K("Daten gelöscht. Profil bleibt."),setTimeout(()=>location.reload(),600))}function Qn(e){return`
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
            <td>${$(Ri(t.hochladeDatum))}</td>
            <td>${$(t.dateiname||"—")}</td>
            <td>${t.zeitraumVon?$(N(new Date(t.zeitraumVon))):"—"} – ${t.zeitraumBis?$(N(new Date(t.zeitraumBis))):"—"}</td>
            <td>${t.stichtagAuswertung?$(N(new Date(t.stichtagAuswertung))):"—"}</td>
            <td class="num">${t.tageCount??"—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}async function gn(e,t,n){var i,o,d,r;const a=t.querySelector("#upload-status"),s=t.querySelector("#upload-zone");if(e.type!=="application/pdf"&&!/\.pdf$/i.test(e.name)){Ve({type:"error",title:"Falscher Dateityp",desc:`<strong>${$(e.name)}</strong> ist keine PDF-Datei.`,hint:"Lade eine PDF-Datei hoch — den Zeitnachweis aus dem ESS über den <strong>Speichern-Button</strong> (Disketten-Symbol oben rechts im PDF-Viewer)."});return}if(e.size>50*1024*1024){Ve({type:"error",title:"Datei zu groß",desc:`<strong>${$(e.name)}</strong> ist ${(e.size/1024/1024).toFixed(1)} MB groß.`,hint:"ESS-Zeitnachweise sind normalerweise unter 1 MB. Bitte überprüfe die Datei."});return}s.style.pointerEvents="none",s.style.opacity="0.6",a.innerHTML=`
    <div class="alert severity-info">
      <div class="loader-ring" style="width: 24px; height: 24px; border-width: 2px;"></div>
      <div class="alert-body">
        <div class="alert-title">PDF wird verarbeitet…</div>
        <p style="margin: 4px 0; font-size: 13px;"><strong>${$(e.name)}</strong> — das kann bei großen PDFs einige Sekunden dauern.</p>
      </div>
    </div>`;try{const l=await e.arrayBuffer(),c=await vi(l);if(c.tage.length===0&&!c.meta.zeitraumVon){s.style.pointerEvents="",s.style.opacity="",a.innerHTML="",Ve({type:"error",title:"Diese PDF ist nicht kompatibel",desc:'Im PDF wurden keine Texte gefunden. Das passiert, wenn das PDF über „Drucken → Als PDF speichern" (z.B. „Microsoft Print to PDF") erzeugt wurde — dabei werden Texte als Vektorpfade gerendert und können nicht ausgelesen werden.',hint:'Lade dein PDF direkt aus dem ESS über den <strong>Speichern-Button</strong> herunter (Disketten-Symbol oben rechts im PDF-Viewer) — nicht über „Drucken".',screenshot:!0,producer:(i=c.meta)==null?void 0:i.producer}),rt("PDF enthält keinen extrahierbaren Text.");return}const g=await Ue(),h=g==null?void 0:g.personalnummer,u=c.meta.personalnummer;if(h&&u&&h!==u){const v=(g==null?void 0:g.name)||`Personalnr. ${h}`,T=c.meta.name||`Personalnr. ${u}`;if(!await ie(`Das hochgeladene PDF gehört zu einem anderen Azubi als die bisher gespeicherten Daten:

Bisher: ${v}
Jetzt:  ${T}

Wenn du fortfährst, werden alle alten Tagesdaten gelöscht und durch die neuen ersetzt. (Profil-Einstellungen wie Theme und Mail-Vorlagen bleiben erhalten.)`,{title:"Anderer Azubi erkannt",confirmLabel:"Daten ersetzen",variant:"danger"})){s.style.pointerEvents="",s.style.opacity="",a.innerHTML=`
          <div class="alert severity-info">
            <div class="alert-body">
              <div class="alert-title">Upload abgebrochen</div>
              <p style="margin: 4px 0; font-size: 13px;">Es wurden keine Daten verändert. Lade das richtige PDF (für ${$(v)}) erneut hoch.</p>
            </div>
          </div>`;return}await Kn();const B=await re();await st({...B,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1}})}const m=await js(c.tage,c.monate,c.meta.stichtagAuswertung);(m.skippedTage>0||m.skippedMonate>0)&&console.info(`[upload] ${m.skippedTage} Tage und ${m.skippedMonate} Monate uebersprungen — bestehende Daten haben juengeren Stichtag.`),await qs({dateiname:e.name,personalnummer:c.meta.personalnummer??null,name:c.meta.name??null,zeitraumVon:((o=c.meta.zeitraumVon)==null?void 0:o.toISOString())??null,zeitraumBis:((d=c.meta.zeitraumBis)==null?void 0:d.toISOString())??null,stichtagAuswertung:((r=c.meta.stichtagAuswertung)==null?void 0:r.toISOString())??null,tageCount:c.tage.length,monateCount:c.monate.length});const f=await ue(),b=Hn(f),p={...Nn(),...n};(b.wochentageWoechentlich.length>0||b.wochentage14Taegig.length>0)&&(p.berufsschulMuster=b),await st(p),a.innerHTML="",Yn()||Ve({type:"success",title:"PDF erfolgreich eingelesen",desc:c.meta.zeitraumVon?`Zeitraum: ${N(c.meta.zeitraumVon)} – ${N(c.meta.zeitraumBis)}`:"Daten wurden erfolgreich verarbeitet.",stats:[{num:c.tage.length,label:"Tage"},{num:c.monate.length,label:"Monatsübersichten"}]}),K(`PDF verarbeitet: ${c.tage.length} Tage.`),document.dispatchEvent(new CustomEvent("better-ess:pdf-uploaded",{detail:{tageCount:c.tage.length,monateCount:c.monate.length}}));const k=await Vn();t.querySelector("#uploads-list").innerHTML=Qn(k)}catch(l){console.error(l),a.innerHTML="",Ve({type:"error",title:"Fehler beim Parsen",desc:$(l.message||String(l)),hint:'Prüfe, ob es sich um einen ESS-Zeitnachweis im richtigen Format handelt. Lade dein PDF über den Speichern-Button herunter, nicht über „Drucken".',screenshot:!0}),rt("PDF konnte nicht gelesen werden.")}finally{s.style.pointerEvents="",s.style.opacity=""}}async function Ki(){try{const e=await Us(),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),a=document.createElement("a"),s=new Date().toISOString().slice(0,10);a.href=n,a.download=`zeitnachweis-backup-${s}.json`,a.click(),URL.revokeObjectURL(n),K("Backup heruntergeladen.")}catch(e){rt(`Export fehlgeschlagen: ${e.message}`)}}async function Ii(e){var n;const t=(n=e.target.files)==null?void 0:n[0];if(t)try{const a=await t.text(),s=JSON.parse(a);if(!await ie("Existierende Daten werden vom Backup überschrieben.",{title:"Backup importieren?",confirmLabel:"Importieren",variant:"danger"}))return;await Js(s),K("Backup erfolgreich importiert. Seite wird neu geladen…"),setTimeout(()=>location.reload(),800)}catch(a){rt(`Import fehlgeschlagen: ${a.message}`)}}async function Hi(){await ie("Alle Daten (Tage, Monate, Profil, Vorlagen, Mail-Vorlagen, Fahrgeld-Vorlage) werden endgültig gelöscht. Das lässt sich nicht rückgängig machen.",{title:"ALLE Daten löschen?",confirmLabel:"Weiter zur Sicherheitsfrage",variant:"danger"})&&await ie("Letzte Warnung — wirklich alle Daten löschen?",{title:"Sicher?",confirmLabel:"Endgültig löschen",variant:"danger"})&&(await Gs(),K("Alle Daten gelöscht."),setTimeout(()=>location.reload(),600))}function Ri(e){if(!e)return"—";const t=new Date(e);return t.toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"})+" "+t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}function Ve(e){const{type:t,title:n,desc:a,hint:s,screenshot:i,stats:o,producer:d}=e,r=document.createElement("div");r.className="upload-modal-overlay";const l=`
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
    </svg>`,g=o!=null&&o.length?`
    <div class="upload-modal-stats">
      ${o.map(p=>`
        <div class="upload-modal-stat">
          <div class="upload-modal-stat-num">${$(String(p.num))}</div>
          <div class="upload-modal-stat-label">${$(p.label)}</div>
        </div>
      `).join("")}
    </div>`:"",h=i?`
    <img class="upload-modal-hint-img zoomable" src="/better-ess/tutorial/speichern.png"
         alt="Speichern-Button im PDF-Viewer"
         title="Klick für Vollbild" />`:"",u=d?`<p style="font-size: 12px; color: var(--fg-subtle); margin-top: 12px;">Erkannt: Producer „${$(d)}"</p>`:"",m=t==="success"?`
      <a href="#/" class="btn primary">Zum Dashboard</a>
      <a href="#/kalender" class="btn">Kalender öffnen</a>
      <button class="btn upload-modal-close-btn">Schließen</button>`:`
      <button class="btn primary upload-modal-close-btn">Verstanden</button>`;r.innerHTML=`
    <div class="upload-modal" role="dialog" aria-modal="true">
      <div class="upload-modal-icon-wrap">
        ${t==="success"?l:c}
      </div>
      <h2 class="upload-modal-title">${$(n)}</h2>
      <p class="upload-modal-desc">${a}</p>
      ${g}
      ${s?`<p class="upload-modal-desc" style="background: var(--accent-bg); padding: 12px; border-radius: 8px; border-left: 3px solid var(--accent);">${s}</p>`:""}
      ${h}
      ${u}
      <div class="upload-modal-actions">${m}</div>
    </div>`,document.body.appendChild(r);const f=()=>{r.style.animation="upload-modal-fade 150ms ease-out reverse",setTimeout(()=>r.remove(),150),document.removeEventListener("keydown",b)},b=p=>{p.key==="Escape"&&f()};document.addEventListener("keydown",b),r.addEventListener("click",p=>{if(p.target===r){f();return}if(p.target.closest(".upload-modal-close-btn")){f();return}if(p.target.closest(".upload-modal-actions a, .upload-modal-actions button")){f();return}const k=p.target.closest("img.zoomable");k&&Xn(k.src,k.alt)})}const hn={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag"};async function ji({root:e}){var s,i,o,d,r;const t=await re(),n=t.berufsschulMuster??{},a=(((s=n.wochentageWoechentlich)==null?void 0:s.length)??0)>0||(((i=n.wochentage14Taegig)==null?void 0:i.length)??0)>0;e.innerHTML=`
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
          <input type="email" name="zeitwirtschaftEmail" value="${fn(t.zeitwirtschaftEmail)}" />
        </div>
        <div class="form-group">
          <label>Anrede in Mails</label>
          <input type="text" name="zeitwirtschaftAnrede" value="${fn(t.zeitwirtschaftAnrede)}" placeholder="Frau Kanarya" />
        </div>
      </div>

      <div class="card" style="grid-column: 1 / -1;">
        <h2>Berufsschul-Rhythmus <span style="font-size: 11px; font-weight: 500; color: var(--fg-subtle); text-transform: uppercase; letter-spacing: 0.05em; margin-left: 8px;">Automatisch erkannt</span></h2>
        ${a?`
          <div class="tag-detail">
            <div class="tag-detail-label">Wöchentlich</div>
            <div class="tag-detail-value"><strong>${((o=n.wochentageWoechentlich)==null?void 0:o.map(l=>hn[l]).join(", "))||"—"}</strong></div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Alle 2 Wochen</div>
            <div class="tag-detail-value"><strong>${((d=n.wochentage14Taegig)==null?void 0:d.map(l=>hn[l]).join(", "))||"—"}</strong>${n.referenzDatum14Taegig?` <span class="hint">(Anker: ${N(new Date(n.referenzDatum14Taegig))})</span>`:""}</div>
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
  `,e.querySelector("#profil-form").addEventListener("submit",async l=>{var h,u;l.preventDefault();const c=new FormData(l.target),g={...t,ueber18:c.get("ueber18")==="on",zeitwirtschaftEmail:((h=c.get("zeitwirtschaftEmail"))==null?void 0:h.trim())||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:((u=c.get("zeitwirtschaftAnrede"))==null?void 0:u.trim())||"Frau Kanarya"};await st(g),K("Profil gespeichert.")})}function fn(e){return String(e??"").replace(/"/g,"&quot;")}async function qi({params:e,root:t}){var l,c,g,h;const n=e.datum,a=await w.tage.get(n),s=await re();if(!a){t.innerHTML=`<h1 class="view-title">Tag nicht gefunden</h1><p>Für ${n} liegen keine Daten vor.</p><a href="#/" class="btn">← Dashboard</a>`;return}const i=V(n),o=a.tagestyp==="Stempelzeit"?En(a,s):null,d=dt(i,s.berufsschulMuster),r=An(a.zeitSpannen);t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/kalender/${n.slice(0,7)}" class="btn sm">← Zum Monat</a>
    </div>
    <h1 class="view-title">${Tt(i)}</h1>
    <p class="view-subtitle">${a.tagestyp??"Kein Typ"} · KW ${(l=a.wocheKey)==null?void 0:l.split("-")[1]}</p>

    ${r?`
      <div class="card kommen-gehen-hero" style="margin-bottom: 24px;">
        <div class="hint" style="text-transform: uppercase; letter-spacing: 0.05em; font-size: 11px; margin-bottom: 10px;">Tages-Rahmen</div>
        ${In(r,{size:32})}
      </div>
    `:""}

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${a.ist!=null?a.ist.toFixed(2).replace(".",",")+"h":"—"}</div>
        <div class="hint">= ${a.ist!=null?He(a.ist):"—"}</div>
      </div>
      <div class="card">
        <h3>Soll-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${a.soll!=null?a.soll.toFixed(2).replace(".",",")+"h":"—"}</div>
      </div>
      <div class="card">
        <h3>Differenz</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${a.diff>.05?"var(--success)":a.diff<-.05?"var(--danger)":"var(--fg)"};">${a.diff!=null?fe(a.diff,{signed:!0}):"—"}</div>
      </div>
    </div>

    <div class="grid cols-2" style="gap: 24px;">
      <div class="card">
        <h2>Zeitstempel</h2>
        ${(c=a.zeitSpannen)!=null&&c.length?a.zeitSpannen.map(u=>`
              <div class="tag-detail">
                <div class="tag-detail-label">${Ke(u.aktivitaet??"Stempelzeit")}</div>
                <div class="tag-detail-value tabular">${u.von??"—"} – ${u.bis??"—"}</div>
              </div>
            `).join(""):'<p class="hint">Keine Stempelzeiten für diesen Tag.</p>'}
      </div>

      <div class="card">
        <h2>Klassifikation</h2>
        <div class="tag-detail">
          <div class="tag-detail-label">Tagestyp</div>
          <div class="tag-detail-value">${a.tagestyp?`<span class="pill ${Zi(a.tagestyp)}">${Ke(a.tagestyp)}</span>`:"—"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Laut Profil</div>
          <div class="tag-detail-value">${d?"🎓 Berufsschultag erwartet":"Regulärer Werktag"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">TAZP-Code</div>
          <div class="tag-detail-value"><code>${Ke(a.tazp??"—")}</code></div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Monat</div>
          <div class="tag-detail-value">${Ke(a.monatKey)}</div>
        </div>
      </div>

      ${o&&!o.keinAnspruch?o.altReglement?`
        <div class="card" style="grid-column: 1 / -1;">
          <h2>Pausen-Analyse</h2>
          <div class="grid cols-2">
            <div>
              <div class="tag-detail">
                <div class="tag-detail-label">Arbeitszeit (netto)</div>
                <div class="tag-detail-value tabular">${(g=o.arbeitszeitOhnePause)==null?void 0:g.toFixed(2).replace(".",",")}h</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Gestempelte Pause</div>
                <div class="tag-detail-value tabular">${Math.round((o.gestempeltePause??0)*60)} min</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Abgezogene Pause (laut PDF)</div>
                <div class="tag-detail-value tabular">${Math.round((o.abgezogenePause??0)*60)} min</div>
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
                <div class="tag-detail-value tabular">${(h=o.arbeitszeitOhnePause)==null?void 0:h.toFixed(2).replace(".",",")}h</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Gestempelte Pause</div>
                <div class="tag-detail-value tabular">${Math.round((o.gestempeltePause??0)*60)} min</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Abgezogene Pause</div>
                <div class="tag-detail-value tabular">${Math.round((o.abgezogenePause??0)*60)} min</div>
              </div>
            </div>
            <div>
              <div class="tag-detail">
                <div class="tag-detail-label">Gesetzl. Pflicht</div>
                <div class="tag-detail-value tabular">${Math.round((o.gesetzlichePflicht??0)*60)} min</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Angewendetes Gesetz</div>
                <div class="tag-detail-value">${o.gesetz==="jarbschg"?"JArbSchG §11 (Minderjährig)":"ArbZG §4 (Erwachsen)"}</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Legaler Abzug (Max aus gestempelt / Pflicht)</div>
                <div class="tag-detail-value tabular">${Math.round((o.legalerAbzug??0)*60)} min</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Unrechtmäßiger Pausen-Abzug</div>
                <div class="tag-detail-value tabular" style="color: ${(o.unrechtmaessigerVerlustMin??0)>0?"var(--danger)":"var(--fg)"};">${o.unrechtmaessigerVerlustMin??0} min</div>
              </div>
              ${o.aufstockungMin>0?`
              <div class="tag-detail">
                <div class="tag-detail-label">Gesetzliche Aufstockung</div>
                <div class="tag-detail-value tabular" style="color: var(--warn);">${o.aufstockungMin} min</div>
              </div>`:""}
            </div>
          </div>
          ${o.warnung?`
            <div class="alert severity-warn" style="margin-top: 12px;">
              <div class="alert-icon">⚠</div>
              <div class="alert-body">${Ke(o.warnung)}</div>
            </div>
          `:""}
        </div>
      `:""}
    </div>
  `}function Zi(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function Ke(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const Gi=[{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:180,label:"6 Monate"},{key:365,label:"1 Jahr"},{key:730,label:"2 Jahre"},{key:"alles",label:"Alles"}];function Ui(e){return Gi.filter(t=>t.key==="alles"||t.key<e)}async function Ji({root:e}){var o;const[t,n]=await Promise.all([ue(),ot()]);if(!t.length){e.innerHTML='<h1 class="view-title">Analytics</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a=Ui(t.length);let s=a.some(d=>d.key===30)?30:"alles";e.innerHTML=`
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
  `;const i=()=>s==="alles"?t:t.slice(-s);requestAnimationFrame(()=>{Ds(e.querySelector("#c-saldo"),n),Ts(e.querySelector("#c-wochen"),t),Jt(e.querySelector("#c-startend"),i()),Ps(e.querySelector("#c-wochentag"),t),As(e.querySelector("#c-pausen"),t),Es(e.querySelector("#c-donut"),t),zs(e.querySelector("#c-alle-tage"),t.slice(-30))}),(o=e.querySelector("#startend-zeitraum"))==null||o.addEventListener("click",d=>{const r=d.target.closest("button[data-key]");if(!r||r.disabled)return;const l=r.getAttribute("data-key"),c=l==="alles"?"alles":parseInt(l,10);c!==s&&(s=c,e.querySelectorAll("#startend-zeitraum button").forEach(g=>g.classList.toggle("active",g===r)),Jt(e.querySelector("#c-startend"),i()))})}function Yi(e){return String(e??"").replace(/"/g,"&quot;")}async function vt({params:e,root:t}){const[n,a,s,i,o]=await Promise.all([ue(),ot(),re(),Ue(),ct()]),d=Object.fromEntries(o.map(x=>[x.key,x]));if(!n.length){t.innerHTML=`
      <h1 class="view-title">Kalender</h1>
      <p class="view-subtitle">Noch keine Daten geladen.</p>
      <a href="#/daten" class="btn primary">Zum Upload</a>`;return}const r=[...new Set(n.map(x=>x.monatKey))].sort(),l=e.yyyymm,c=r.includes(l)?l:r[r.length-1],g=n.filter(x=>x.monatKey===c),h=[...new Set(g.map(x=>x.wocheKey))].sort(),u=e.yyyykw,m=h.includes(u)?u:null,f=r.indexOf(c),b=f>0?r[f-1]:null,p=f<r.length-1?r[f+1]:null,k=Dt(c),v=a.find(x=>x.monatKey===c),T=Tn(n,a),F=T.filter(x=>x.monatKey===c),B=i!=null&&i.stichtagAuswertung?new Date(i.stichtagAuswertung):new Date,M=ut(n,s,B),z=M.filter(x=>x.datum.startsWith(c)),O=er({aktiverMonatKey:c,monatLabel:k,prevMonatKey:b,nextMonatKey:p,tageAnzahl:g.length,warnungenAnzahl:z.length});m?await Qi({root:t,switcherHtml:O,aktiverMonatKey:c,aktiveWocheKey:m,vollKurve:T,alleWarnungen:M,profil:s,vorlagenOverrides:d}):await Xi({root:t,switcherHtml:O,monatLabel:k,tageMonat:g,monatsKurve:F,monatUebersicht:v,monatsWarnungen:z,aktiverMonatKey:c,profil:s,vorlagenOverrides:d})}async function Xi({root:e,switcherHtml:t,monatLabel:n,tageMonat:a,monatsKurve:s,monatUebersicht:i,monatsWarnungen:o,aktiverMonatKey:d,profil:r,vorlagenOverrides:l}){e.innerHTML=`
    ${t}

    ${i?tr(i):""}

    <div class="card" style="margin-bottom: 24px;">
      <h2>Saldo-Verlauf</h2>
      <div class="chart-wrap tall"><canvas id="chart-kalender-monat"></canvas></div>
    </div>

    ${o.length?`
      <div class="card" style="margin-bottom: 24px;">
        <h2>Auffälligkeiten</h2>
        ${o.map(c=>ea(c,r,l)).join("")}
      </div>
    `:""}

    <div class="card" style="margin-bottom: 24px;">
      <h2 style="margin-bottom: 16px;">Wochen</h2>
      ${nr(s,d)}
    </div>

    <div class="card">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Tage</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">H/M zum Kopieren</span>
      </div>
      <div id="tage-liste-kalender">${gt(s.slice().reverse(),{warnungen:o})}</div>
    </div>
  `,s.length&&(requestAnimationFrame(()=>{const c=e.querySelector("#chart-kalender-monat");c&&Lt(c,s)}),Wt(e.querySelector("#tage-liste-kalender")))}async function Qi({root:e,switcherHtml:t,aktiverMonatKey:n,aktiveWocheKey:a,vollKurve:s,alleWarnungen:i,profil:o,vorlagenOverrides:d}){var p;const r=s.filter(k=>k.wocheKey===a),l=r.reduce((k,v)=>k+lt(v),0),c=r.reduce((k,v)=>k+Et(v),0),g=+(l-c).toFixed(2),h=k=>k>.05?"var(--success)":k<-.05?"var(--danger)":"var(--fg)",u=i.filter(k=>r.some(v=>v.datum===k.datum)),m=(p=r[0])==null?void 0:p.datum,f=m?Ge(V(m)):"",b=a.split("-")[1]||"?";e.innerHTML=`
    ${t}

    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 12px;">
      <a href="#/kalender/${n}" class="btn sm">← Zur Monatsansicht</a>
    </div>

    <h2 style="margin: 0 0 4px;">KW ${$(b)}</h2>
    <p class="view-subtitle">${$(f)} · ${r.length} Tage · ${u.length} Auffälligkeiten</p>

    ${r.length===0?`
      <p class="hint" style="text-align: center; padding: 32px;">Keine Tage für diese Woche im PDF.</p>
    `:`
      <div class="grid cols-3" style="margin-bottom: 24px;">
        <div class="card">
          <h3>Ist-Stunden</h3>
          <div class="tabular" style="font-size: 28px; font-weight: 650;">${l.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="card">
          <h3>Soll-Stunden</h3>
          <div class="tabular" style="font-size: 28px; font-weight: 650;">${c.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="card">
          <h3>Differenz</h3>
          <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${h(g)};">${fe(g,{signed:!0})}</div>
        </div>
      </div>

      <div class="card" style="margin-bottom: 24px;">
        <h2>Saldo-Verlauf in dieser Woche</h2>
        <div class="chart-wrap"><canvas id="chart-kalender-woche"></canvas></div>
      </div>

      ${u.length?`
        <div class="card" style="margin-bottom: 24px;">
          <h2>Auffälligkeiten in KW ${$(b)}</h2>
          ${u.map(k=>ea(k,o,d)).join("")}
        </div>
      `:""}

      <div class="card">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Tage</h2>
          <span style="color: var(--fg-muted); font-size: 13px;">H/M zum Kopieren</span>
        </div>
        <div id="tage-liste-kalender">${gt(r,{warnungen:u})}</div>
      </div>
    `}
  `,r.length&&(requestAnimationFrame(()=>{const k=e.querySelector("#chart-kalender-woche");k&&Lt(k,r)}),Wt(e.querySelector("#tage-liste-kalender")))}function er({aktiverMonatKey:e,monatLabel:t,prevMonatKey:n,nextMonatKey:a,tageAnzahl:s,warnungenAnzahl:i}){const o=n?Dt(n):"",d=a?Dt(a):"";return`
    <div class="card kalender-monat-bar" style="margin-bottom: 24px;">
      <div class="kalender-monat-nav">
        <a class="kalender-monat-btn ${n?"":"is-disabled"}"
           ${n?`href="#/kalender/${n}"`:'aria-disabled="true"'}
           title="${n?"Zu "+$(o):"Kein vorheriger Monat"}"
           aria-label="Vorheriger Monat">
          <span class="kalender-monat-btn-arrow" aria-hidden="true">‹</span>
          <span class="kalender-monat-btn-text">${n?$(o):""}</span>
        </a>
        <div class="kalender-monat-titel">
          <h2 style="margin: 0;">${$(t)}</h2>
          <div class="hint">${s} Tage · ${i} Auffälligkeiten</div>
        </div>
        <a class="kalender-monat-btn next ${a?"":"is-disabled"}"
           ${a?`href="#/kalender/${a}"`:'aria-disabled="true"'}
           title="${a?"Zu "+$(d):"Kein nächster Monat"}"
           aria-label="Nächster Monat">
          <span class="kalender-monat-btn-text">${a?$(d):""}</span>
          <span class="kalender-monat-btn-arrow" aria-hidden="true">›</span>
        </a>
      </div>
    </div>`}function tr(e){var i,o,d;const t=((i=e.glz)==null?void 0:i.saldoGesamt)??0,n=((o=e.glz)==null?void 0:o.saldoVorperiode)??0,a=((d=e.glz)==null?void 0:d.saldoAktuellePeriode)??0,s=r=>r>.05?"var(--success)":r<-.05?"var(--danger)":"var(--fg)";return`
    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>GLZ-Saldo gesamt</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${s(t)};">${fe(t,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Vorperiode</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${s(n)};">${fe(n,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Akt. Periode</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${s(a)};">${fe(a,{signed:!0})}</div>
      </div>
    </div>`}function nr(e,t){var s;const n={};for(const i of e)n[s=i.wocheKey]??(n[s]={key:i.wocheKey,tage:[],ist:0,soll:0}),n[i.wocheKey].tage.push(i),n[i.wocheKey].ist+=lt(i),n[i.wocheKey].soll+=Et(i);const a=Object.keys(n).sort();return a.length?a.map(i=>{var h;const o=n[i],d=+(o.ist-o.soll).toFixed(2),r=d>.05?"var(--success)":d<-.05?"var(--danger)":"var(--fg-muted)",l=(h=o.tage.slice().sort((u,m)=>u.datum.localeCompare(m.datum))[0])==null?void 0:h.datum,c=l?Ge(V(l)):"",g=i.split("-")[1]||"?";return`
      <a href="#/kalender/${t}/${i}" class="list-item" style="text-decoration: none; color: inherit;">
        <div class="tabular" style="font-size: 16px; font-weight: 600; color: var(--fg-muted); min-width: 80px;">KW ${$(g)}</div>
        <div>
          <div class="list-item-title tabular">${$(c)}</div>
          <div class="list-item-sub">${o.tage.length} Tage · Ist ${o.ist.toFixed(2).replace(".",",")}h · Soll ${o.soll.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="tabular" style="font-weight: 600; font-size: 16px; color: ${r};">${fe(d,{signed:!0})}</div>
        <div style="color: var(--fg-subtle);">→</div>
      </a>`}).join(""):'<p style="color: var(--fg-muted);">Keine Wochen.</p>'}function ea(e,t,n){const a=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";let s=null;if(e.mailVorlageKey&&t){const i=Je(e.mailVorlageKey,n==null?void 0:n[e.mailVorlageKey]);if(i){const o=Ct(t,e);s=Bt(t,i,o)}}return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${a}</div>
      <div class="alert-body">
        <div class="alert-title">${$(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${$(e.beschreibung)}</p>
        <div class="alert-actions">
          ${s?`<a href="${Yi(s)}" class="btn-mail-medium"><img src="outlook-logo.png" alt="" class="outlook-logo-medium" />E-Mail</a>`:""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
        </div>
      </div>
    </div>`}function Dt(e){const[t,n]=e.split("-"),a=new Date(parseInt(t,10),parseInt(n,10)-1,1);return L(a,"MMMM yyyy",{locale:ne})}const ar={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};async function yt({params:e,root:t}){const[n,a,s]=await Promise.all([ue(),re(),Ue()]),i=sr(e);if(!n.length){t.innerHTML=`
      <h1 class="view-title">Kalender · ${$(i.label)}</h1>
      <p class="view-subtitle">Noch keine Daten geladen.</p>
      <a href="#/daten" class="btn primary">Zum Upload</a>`;return}const o=n.filter(i.predicate).sort((h,u)=>h.datum.localeCompare(u.datum)),d=s!=null&&s.stichtagAuswertung?new Date(s.stichtagAuswertung):new Date,l=ut(n,a,d).filter(h=>o.some(u=>u.datum===h.datum)),c=o.reduce((h,u)=>h+(u.ist??0),0),g=c>0?` · ${c.toFixed(2).replace(".",",")}h kumuliert`:"";t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/kalender" class="btn sm">← Kalender</a>
    </div>
    <h1 class="view-title">${$(i.titel)}</h1>
    <p class="view-subtitle">${o.length} Tag${o.length===1?"":"e"} insgesamt${g}</p>

    ${o.length===0?`
      <div class="card"><p class="hint">Keine Tage passen zu diesem Filter.</p></div>
    `:`
      <div class="card">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Tage</h2>
          <span style="color: var(--fg-muted); font-size: 13px;">H/M zum Kopieren</span>
        </div>
        <div id="tagestyp-tage-liste">${gt(o,{warnungen:l})}</div>
      </div>
    `}
  `,Wt(t.querySelector("#tagestyp-tage-liste"))}function sr(e){if(e.typ!=null){const t=decodeURIComponent(e.typ);return{label:t,titel:`${t}-Tage`,predicate:n=>n.tagestyp===t}}if(e.wd!=null){const t=decodeURIComponent(e.wd).toUpperCase(),n=ar[t]||t;return{label:n,titel:`Tage am ${n}`,predicate:a=>a.wochentag===t}}if(e.bucket!=null){const t=parseInt(decodeURIComponent(e.bucket),10),n=t+14;return{label:`${t}–${n} min Pause`,titel:`Tage mit Pause ${t}–${n} min`,predicate:a=>{if(a.tagestyp!=="Stempelzeit"||!a.zeitSpannen||a.zeitSpannen.length<2)return!1;const s=Math.round(Pt(a.zeitSpannen)*60);return s>=t&&s<=n}}}return{label:"Filter",titel:"Tage (kein Filter)",predicate:()=>!0}}Mn.workerSrc=Zn;function ir(e){if(!e||e.byteLength<5)return!1;const t=new Uint8Array(e,0,5);return t[0]===37&&t[1]===80&&t[2]===68&&t[3]===70&&t[4]===45}async function ta(e){var F,B,M,z,O,x;let t;try{t=await Dn({data:new Uint8Array(e.slice(0))}).promise}catch{return{ok:!1,fehler:"PDF konnte nicht gelesen werden — die Datei ist beschädigt oder verschlüsselt."}}if(t.numPages<1)return{ok:!1,fehler:"PDF hat keine Seiten."};const n=await t.getPage(1),s=(await n.getAnnotations()).filter(y=>y.subtype==="Widget");if(s.length<20)return{ok:!1,fehler:"Diese PDF ist kein ausfüllbares Formular — bitte die Original-Putzmeister-Vorlage hochladen."};const d=(await n.getTextContent()).items.filter(y=>y.str&&y.transform).map(y=>({text:y.str,x:y.transform[4],y:y.transform[5],width:y.width,height:y.height})).filter(y=>Math.abs(y.y-636)<4);let r="";for(const y of d){const P=y.text.match(/(\d{6,8})/);if(P&&!y.text.toLowerCase().includes("kst")){r=P[1];break}}const l=rr(s),c=Pe(l.monatJahr),h=(Pe(l.persNr).match(/\d+/)||[""])[0],u=Pe(l.name).trim(),m=wt(l.vonSlots),f=wt(l.nachSlots),b=wt(l.betragSlots),p=lr(b),k=Pe(l.auszubildender).trim(),v=k.replace(/^\s*\d{1,2}\.\d{1,2}\.\d{2,4}\s*/,"").trim(),T=[];return u||T.push("name"),h||T.push("persNr"),r||T.push("kst"),m||T.push("vonHaltestelle"),f||T.push("nachHaltestelle"),(!p||p<=0)&&T.push("betragProTag"),!u&&!h&&!m&&!f&&!p?{ok:!1,fehler:"Diese PDF ist eine komplett leere Vorlage — bitte zuerst eine eigene Vorlage einmal von Hand mit Name, Pers.-Nr., Strecke und Tagessatz ausfüllen und dann hochladen."}:{ok:!0,konstanten:{name:u,persNr:h,kst:r,vonHaltestelle:m,nachHaltestelle:f,betragProTag:p,unterschriftText:v},layout:{monatJahrField:((F=l.monatJahr)==null?void 0:F.fieldName)||null,persNrField:((B=l.persNr)==null?void 0:B.fieldName)||null,nameField:((M=l.name)==null?void 0:M.fieldName)||null,auszubildenderField:((z=l.auszubildender)==null?void 0:z.fieldName)||null,summeField:((O=l.summe)==null?void 0:O.fieldName)||null,datumFields:l.datumSlots.map(y=>y.fieldName),vonFields:l.vonSlots.map(y=>y.fieldName),nachFields:l.nachSlots.map(y=>y.fieldName),betragFields:l.betragSlots.map(y=>y.fieldName),auszubildenderRect:((x=l.auszubildender)==null?void 0:x.rect)||null},vorhandeneEintraege:{monatJahr:c,auszubildenderText:k,anzahlBefuellteDatumZeilen:l.datumSlots.filter(y=>Pe(y)).length},missing:T,quelle:"pdf"}}function rr(e){const t=e.map(u=>{const[m,f,b,p]=u.rect;return{fieldName:u.fieldName,fieldValue:u.fieldValue??"",rect:[m,f,b,p],x:(m+b)/2,y:(f+p)/2,width:b-m,height:p-f}}),n=t.find(u=>u.y>660&&u.x<250)||null,a=t.find(u=>u.y>660&&u.x>400)||null,s=t.find(u=>u.y>630&&u.y<660&&u.x<250)||null,i=t.filter(u=>u.y>370&&u.y<580),o=(u,m)=>m.y-u.y,d=i.filter(u=>u.x>0&&u.x<140).sort(o),r=i.filter(u=>u.x>140&&u.x<290).sort(o),l=i.filter(u=>u.x>290&&u.x<460).sort(o),c=i.filter(u=>u.x>460).sort(o),g=t.find(u=>u.y<370&&u.y>320&&u.x>460)||null,h=t.find(u=>u.y<340&&u.y>310&&u.x<200)||null;return{monatJahr:n,persNr:a,name:s,datumSlots:d,vonSlots:r,nachSlots:l,betragSlots:c,summe:g,auszubildender:h}}function Pe(e){return e?String(e.fieldValue??"").trim():""}function wt(e){for(const t of e){const n=Pe(t);if(n)return n}return""}function lr(e){if(!e)return 0;const t=String(e).replace(/[^\d,.\-]/g,"").replace(/\./g,"").replace(",","."),n=parseFloat(t);return Number.isFinite(n)?n:0}const na="Fahrgelderstattung",or="C4",aa="C5",sa="F4",ia="F5",$e=10,Ae=19;function mn(e,t){return e.filter(n=>n.monatKey===t).filter(n=>n.tagestyp==="Berufsschule").filter(n=>(n.ist??0)>0).sort((n,a)=>n.datum.localeCompare(a.datum))}async function cr(e){if(ir(e)){const t=await ta(e);return t.ok?{ok:!0,format:"pdf",konstanten:t.konstanten,layout:t.layout,missing:t.missing,vorhandeneEintraege:t.vorhandeneEintraege,unterschriftAuto:null}:t}return await dr(e)}async function dr(e){const t=(await de(async()=>{const{default:b}=await import("./exceljs.min-BhfpbegZ.js").then(p=>p.e);return{default:b}},__vite__mapDeps([0,1]))).default,n=new t.Workbook;try{await n.xlsx.load(e)}catch{return{ok:!1,fehler:"Die Excel-Datei ist beschädigt oder kein gültiges .xlsx-Format. Bitte die Datei neu speichern und nochmal versuchen."}}const a=n.getWorksheet(na)??n.worksheets[0];if(!a)return{ok:!1,fehler:"Excel hat keine Arbeitsblätter — die Datei scheint leer zu sein."};const s=b=>{const p=a.getCell(b).value;return p==null?"":typeof p=="object"&&p.text?String(p.text):typeof p=="object"&&p.richText?p.richText.map(k=>k.text).join(""):String(p)},i=s(aa).trim(),o=s(sa).trim(),d=s(ia).trim(),r=(o.match(/\d+/)||[""])[0],l=(d.match(/\d+/)||[""])[0],c=s(`C${$e}`).trim(),g=s(`E${$e}`).trim(),h=a.getCell(`G${$e}`).value,u=typeof h=="number"?h:parseFloat(String(h).replace(",","."))||0;let m=null;try{const b=new Set(a.getImages().map(k=>parseInt(k.imageId,10))),p=(n.media||[]).map((k,v)=>({media:k,index:v})).filter(({media:k,index:v})=>(k==null?void 0:k.type)==="image"&&!b.has(v)&&k.buffer);if(p.length>0){p.sort((F,B)=>(B.media.buffer.length||0)-(F.media.buffer.length||0));const k=p[0].media,v=k.buffer,T=v instanceof ArrayBuffer?v:v.buffer?v.buffer.slice(v.byteOffset||0,(v.byteOffset||0)+v.byteLength):null;if(T){const F=(k.extension||"").toLowerCase();m={bytes:T,extension:F==="jpg"?"jpeg":F||"png",quelle:"auto-aus-vorlage"}}}}catch(b){console.warn("[fahrtgeld] Unterschrift-Auto-Extraktion fehlgeschlagen:",b)}if(!i&&!r&&!l&&!c&&!g&&!u)return{ok:!1,fehler:"Diese Excel scheint nicht im Format der Putzmeister-Fahrgelderstattung zu sein — keine der erwarteten Felder wurde gefunden. Bitte eine Original-Vorlage hochladen."};const f=[];return i||f.push("name"),r||f.push("persNr"),l||f.push("kst"),c||f.push("vonHaltestelle"),g||f.push("nachHaltestelle"),(!u||u<=0)&&f.push("betragProTag"),{ok:!0,format:"excel",konstanten:{name:i,persNr:r,kst:l,vonHaltestelle:c,nachHaltestelle:g,betragProTag:u},missing:f,unterschriftAuto:m}}async function ur({templateBytes:e,monatKey:t,bsTage:n,konstanten:a,unterschriftBytes:s,unterschriftExtension:i}){const o=!e;e||(e=await gr());const d=(await de(async()=>{const{default:x}=await import("./exceljs.min-BhfpbegZ.js").then(y=>y.e);return{default:x}},__vite__mapDeps([0,1]))).default,r=new d.Workbook;try{await r.xlsx.load(e)}catch{throw new Error("Die hinterlegte Excel-Vorlage ist beschädigt — bitte unter Fahrgelderstattung neu hochladen.")}const l=r.getWorksheet(na)??r.worksheets[0];if(!l)throw new Error("Die Excel-Vorlage hat kein passendes Arbeitsblatt — bitte eine Original-Fahrgelderstattung-Vorlage hochladen.");if(o||s&&i)try{Array.isArray(l._media)&&(l._media=l._media.filter(x=>{var P,C,H,I;return(((C=(P=x==null?void 0:x.range)==null?void 0:P.tl)==null?void 0:C.nativeRow)??((I=(H=x==null?void 0:x.range)==null?void 0:H.tl)==null?void 0:I.row)??0)<18}))}catch(x){console.warn("[fahrtgeld] Bild-Cleanup fehlgeschlagen:",x)}const[g,h]=t.split("-").map(x=>parseInt(x,10)),u=new Date(g,h-1,1,12,0,0),m=L(u,"MMMM yy",{locale:ne}),f=l.getCell(or);f.value=m,f.numFmt="@",l.getCell(aa).value=a.name,l.getCell(sa).value=`Pers.-Nr.: ${a.persNr}`,l.getCell(ia).value=`KST: ${a.kst}`;for(let x=$e;x<=Ae;x++)l.getCell(`A${x}`).value=null,l.getCell(`C${x}`).value=null,l.getCell(`E${x}`).value=null,l.getCell(`G${x}`).value=null;const b=Ae-$e+1,p=n.slice(0,b);for(let x=0;x<p.length;x++){const y=p[x],P=$e+x;l.getCell(`A${P}`).value=V(y.datum),l.getCell(`C${P}`).value=a.vonHaltestelle,l.getCell(`E${P}`).value=a.nachHaltestelle,l.getCell(`G${P}`).value=a.betragProTag}const k=+(p.length*(a.betragProTag??0)).toFixed(2),v=l.getCell(`G${Ae+1}`);v.value={formula:`SUM(G${$e}:G${Ae})`,result:k};const F=L(new Date,"dd.MM.yyyy"),B=l.getCell("A21");if(B.value=a.unterschriftText?`${F} ${a.unterschriftText}`:F,B.alignment={vertical:"bottom",horizontal:"center",wrapText:!1},s&&i){const x=r.addImage({buffer:s,extension:i}),y=197,P=80,C=55,H=185,I=yr(s);let G=H,le=C;if(I&&I.width>0&&I.height>0){const we=Math.min(H/I.width,C/I.height);G=Math.round(I.width*we),le=Math.round(I.height*we)}const ye=Math.max(0,Math.round((y-G)/2))/P;l.addImage(x,{tl:{col:ye,row:20.04},ext:{width:G,height:le},editAs:"oneCell"})}for(let x=Ae+3;x<=Ae+5;x++)for(const y of["A","B","C","D","E","F","G"]){const P=l.getCell(`${y}${x}`),C=P.value;typeof C=="string"&&/^[A-Z]\d+(-\d+)?$/.test(C.trim())&&(P.value=null)}const M=await r.xlsx.writeBuffer(),z=new Blob([M],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),O=ra(a.name,u);return{blob:z,dateiname:O,anzahlTage:p.length,ueberzaehlig:n.length-p.length}}function ra(e,t,n="xlsx"){const a=L(t,"MMMM",{locale:ne}),s=L(t,"yy");let i=(e||"Azubi").trim();const o=/^(.+?),\s*(.+)$/.exec(i);return o&&(i=`${o[2].trim()} ${o[1].trim()}`),`Fahrgelderstattung ${i} ${a} ${s}.${n}`}let kt=null;async function gr(){return kt||(kt=(async()=>{const t=await fetch("/better-ess/templates/fahrgeld-vorlage.xlsx");if(!t.ok)throw new Error(`Standard-Excel-Vorlage nicht ladbar (HTTP ${t.status})`);return await t.arrayBuffer()})()),kt}let xt=null;async function hr(){return xt||(xt=(async()=>{const t=await fetch("/better-ess/templates/fahrgeld-vorlage.pdf");if(!t.ok)throw new Error(`Standard-PDF-Vorlage nicht ladbar (HTTP ${t.status})`);const n=await t.arrayBuffer(),s=(await ta(n)).layout||await fr(n);return{bytes:n,layout:s}})()),xt}async function fr(e){const i=(await(await(await(await de(()=>import("./pdfjs-BnPRJEQ6.js"),[])).getDocument({data:new Uint8Array(e.slice(0))}).promise).getPage(1)).getAnnotations()).filter(p=>p.subtype==="Widget").map(p=>{const[k,v,T,F]=p.rect;return{fieldName:p.fieldName,rect:p.rect,x:(k+T)/2,y:(v+F)/2}}),o=(p,k)=>k.y-p.y,d=i.filter(p=>p.y>370&&p.y<580),r=i.find(p=>p.y>660&&p.x<250),l=i.find(p=>p.y>660&&p.x>400),c=i.find(p=>p.y>630&&p.y<660&&p.x<250),g=d.filter(p=>p.x<140).sort(o),h=d.filter(p=>p.x>140&&p.x<290).sort(o),u=d.filter(p=>p.x>290&&p.x<460).sort(o),m=d.filter(p=>p.x>460).sort(o),f=i.find(p=>p.y<370&&p.y>320&&p.x>460),b=i.find(p=>p.y<340&&p.y>310&&p.x<200);return{monatJahrField:(r==null?void 0:r.fieldName)||null,persNrField:(l==null?void 0:l.fieldName)||null,nameField:(c==null?void 0:c.fieldName)||null,auszubildenderField:(b==null?void 0:b.fieldName)||null,summeField:(f==null?void 0:f.fieldName)||null,datumFields:g.map(p=>p.fieldName),vonFields:h.map(p=>p.fieldName),nachFields:u.map(p=>p.fieldName),betragFields:m.map(p=>p.fieldName),auszubildenderRect:(b==null?void 0:b.rect)||null}}async function mr({templateBytes:e,monatKey:t,bsTage:n,konstanten:a,layout:s,unterschriftBytes:i,unterschriftExtension:o}){if(!e||!s){const y=await hr();e=e||y.bytes,s=s||y.layout}const{PDFDocument:d}=await de(async()=>{const{PDFDocument:y}=await import("./index-Bf057_RE.js");return{PDFDocument:y}},__vite__mapDeps([2,1]));let r;try{r=await d.load(e,{ignoreEncryption:!0})}catch{throw new Error("Die hinterlegte PDF-Vorlage ist beschädigt — bitte unter Fahrgelderstattung neu hochladen.")}const l=r.getForm(),[c,g]=t.split("-").map(y=>parseInt(y,10)),h=new Date(c,g-1,1,12,0,0),u=L(h,"MMMM yy",{locale:ne});J(l,s.monatJahrField,u),a.name&&J(l,s.nameField,a.name),a.persNr&&J(l,s.persNrField,a.persNr);const m=s.datumFields||[],f=s.vonFields||[],b=s.nachFields||[],p=s.betragFields||[],k=Math.min(m.length,f.length,b.length,p.length);for(let y=0;y<k;y++)J(l,m[y],""),J(l,f[y],""),J(l,b[y],""),J(l,p[y],"");const v=n.slice(0,k),T=a.betragProTag!=null&&a.betragProTag>0?a.betragProTag.toFixed(2).replace(".",","):"";for(let y=0;y<v.length;y++){const P=v[y];J(l,m[y],pr(P.datum)),a.vonHaltestelle&&J(l,f[y],a.vonHaltestelle),a.nachHaltestelle&&J(l,b[y],a.nachHaltestelle),T&&J(l,p[y],T)}const F=+(v.length*(a.betragProTag??0)).toFixed(2);J(l,s.summeField,F.toFixed(2).replace(".",","));const B=L(new Date,"dd.MM.yyyy"),M=a.unterschriftText?`${B} ${a.unterschriftText}`:B;J(l,s.auszubildenderField,M);try{const{PDFName:y}=await de(async()=>{const{PDFName:H}=await import("./index-Bf057_RE.js");return{PDFName:H}},__vite__mapDeps([2,1])),C=r.getPage(0).node.Annots();if(C)for(let H=C.size()-1;H>=0;H--){const I=C.get(H),G=r.context.lookup(I);if(G&&typeof G.lookup=="function"){const le=G.lookup(y.of("Subtype"));le&&String(le)==="/StrikeOut"&&C.remove(H)}}}catch(y){console.warn("[fahrtgeld] StrikeOut-Cleanup fehlgeschlagen:",y)}try{const{rgb:y}=await de(async()=>{const{rgb:C}=await import("./index-Bf057_RE.js");return{rgb:C}},__vite__mapDeps([2,1]));r.getPage(0).drawRectangle({x:16,y:286,width:60,height:16,color:y(1,1,1),borderWidth:0})}catch(y){console.warn("[fahrtgeld] Form-Code-Overlay fehlgeschlagen:",y)}if(i&&s.auszubildenderRect)try{const P=(o||"png").toLowerCase()==="png"?await r.embedPng(i):await r.embedJpg(i),[C,H,I,G]=s.auszubildenderRect,le=I-C,Ye=G-H,ye=C,we=I,Le=G+1,Xe=Math.min(G+30,366),_e=we-ye,De=Math.max(0,Xe-Le);if(De>4&&P.width>0&&P.height>0){const S=Math.min(_e*.92/P.width,De*.92/P.height),A=P.width*S,E=P.height*S,U=ye+(_e-A)/2,D=Le+(De-E)/2;r.getPage(0).drawImage(P,{x:U,y:D,width:A,height:E})}}catch(y){console.warn("[fahrtgeld] Unterschrift-Embed fehlgeschlagen:",y)}try{l.updateFieldAppearances()}catch(y){console.warn("[fahrtgeld] updateFieldAppearances fehlgeschlagen:",y)}const z=await r.save(),O=new Blob([z],{type:"application/pdf"}),x=ra(a.name,h,"pdf");return{blob:O,dateiname:x,anzahlTage:v.length,ueberzaehlig:n.length-v.length}}function J(e,t,n){if(t)try{e.getTextField(t).setText(n??"")}catch{}}function pr(e){return L(V(e),"dd.MM.yyyy")}function nt(e){const[t,n]=e.split("-").map(a=>parseInt(a,10));return L(new Date(t,n-1,1),"MMMM yyyy",{locale:ne})}function pn(e,t=null){const a={monat_jahr:nt(e)},s=(t==null?void 0:t.betreff)??"Fahrgelderstattung {monat_jahr}",i=(t==null?void 0:t.text)??`Guten Tag Frau Mayer,

hiermit sende ich Ihnen das ausgefüllte Dokument für die Fahrgelderstattung vom {monat_jahr} zu.
Vielen Dank!`,o=bn(s,a),d=bn(i,a),r=new URLSearchParams;return r.set("cc","anika.kailer@putzmeister.com"),r.set("subject",o),r.set("body",d),`mailto:annika.mayer@putzmeister.com?${r.toString().replace(/\+/g,"%20")}`}function bn(e,t){return e.replace(/\{(\w+)\}/g,(n,a)=>t[a]!=null?String(t[a]):`{${a}}`)}function br(e){const t=new Set;for(const n of e)n.tagestyp==="Berufsschule"&&(n.ist??0)>0&&t.add(n.monatKey);return[...t].sort().reverse()}function vr(e,t,n,a){var h,u;const s=t==null?void 0:t.berufsschulMuster;if(!s||!((h=s.wochentageWoechentlich)!=null&&h.length)&&!((u=s.wochentage14Taegig)!=null&&u.length))return{ausstehend:[],imMonatGesamt:n.length,vorhandenAnzahl:n.length};const[i,o]=e.split("-").map(m=>parseInt(m,10)),d=new Date(i,o-1,1),r=new Date(i,o,0),l=new Set(n.map(m=>m.datum)),c=[];let g=new Date(d);for(;g<=r;){if(!Ze(g)&&dt(g,s)){const m=L(g,"yyyy-MM-dd");g>a&&!l.has(m)&&c.push(m)}g=qe(g,1)}return{ausstehend:c,imMonatGesamt:n.length+c.length,vorhandenAnzahl:n.length}}function yr(e){const t=e instanceof ArrayBuffer?e:e!=null&&e.buffer?e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength):null;if(!t||t.byteLength<24)return null;const n=new DataView(t);if(n.getUint32(0)===2303741511&&n.getUint32(4)===218765834)return{width:n.getUint32(16),height:n.getUint32(20)};if(n.getUint16(0)===65496){let a=2;for(;a+9<n.byteLength;){if(n.getUint8(a)!==255)return null;const s=n.getUint8(a+1);if(s>=192&&s<=207&&s!==196&&s!==200&&s!==204)return{height:n.getUint16(a+5),width:n.getUint16(a+7)};const o=n.getUint16(a+2);if(o<2)return null;a+=2+o}}return null}function wr(e,t){if(!e||!t)return null;const n=a=>String(a).toLowerCase().replace(/[,.]/g," ").split(/\s+/).filter(Boolean).sort().join(" ");return n(e)===n(t)}function vn(e,t){const n={...e||{}},a={},s=(m,f)=>{f?a[m]="vorlage":n[m]?a[m]="zeitnachweis":a[m]="fehlt"},i=(t==null?void 0:t.name)||"",o=(t==null?void 0:t.personalnummer)||"",d=(t==null?void 0:t.kostenstelle)||"",r=n.name||"",c=wr(r,i)===!1,g=!!n.name;!n.name&&i&&(n.name=i),s("name",g);const h=!!n.persNr;!n.persNr&&o&&!c&&(n.persNr=o),s("persNr",h);const u=!!n.kst;return!n.kst&&d&&!c&&(n.kst=d),s("kst",u),a.vonHaltestelle=n.vonHaltestelle?"vorlage":"fehlt",a.nachHaltestelle=n.nachHaltestelle?"vorlage":"fehlt",a.betragProTag=n.betragProTag&&n.betragProTag>0?"vorlage":"fehlt",{konstanten:n,herkunft:a,nameKonflikt:c,vorlagenName:r,zeitnachweisName:i}}function kr(e,t){const n=URL.createObjectURL(e),a=document.createElement("a");a.href=n,a.download=t,document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(n),1e3)}async function je({root:e}){var G,le,Ye,ye,we,Le,Xe,_e,De;const t=await Ie();if(!t){xr(e);return}const[n,a,s,i]=await Promise.all([ue(),re(),Ue(),Ys("fahrgeld_abgabe")]),o=s!=null&&s.stichtagAuswertung?new Date(s.stichtagAuswertung):new Date,d=br(n),r=new Date,l=`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}`;d.includes(l)||d.unshift(l);const c=d,g=t.format||"excel",h=g==="pdf"?"PDF":"Excel",u={name:"Name",persNr:"Personalnummer",kst:"Kostenstelle",vonHaltestelle:'Strecke „von"',nachHaltestelle:'Strecke „nach"',betragProTag:"Tagessatz"},m=vn(t.konstanten,s),f=m.konstanten,b=m.herkunft,p=m.nameKonflikt,v=Object.entries(b).filter(([S,A])=>A==="fehlt").map(([S])=>S).map(S=>u[S]||S),T=Object.entries(b).filter(([S,A])=>A==="zeitnachweis").map(([S])=>u[S]||S),F=(S,A)=>S?b[A]==="zeitnachweis"?`<span class="fahrtgeld-aus-zeitnachweis" title="Aus deinem Zeitnachweis-PDF übernommen — die Vorlage hatte hier nichts stehen.">${$(S)} <small>(aus Zeitnachweis)</small></span>`:$(S):`<span class="fahrtgeld-fehlend" title="In der hochgeladenen Vorlage nicht gefunden — bitte vor Abgabe ergänzen.">${$(u[A]||A)} fehlt</span>`,B=(S,A)=>F(S,A);e.innerHTML=`
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
            ${B(f.name,"name")} ·
            Pers.-Nr. ${B(f.persNr,"persNr")} ·
            KST ${B(f.kst,"kst")}
          </p>
          <p class="hint" style="margin: 4px 0 0;">
            ${B(f.vonHaltestelle,"vonHaltestelle")} → ${B(f.nachHaltestelle,"nachHaltestelle")} ·
            ${(f.betragProTag??0)>0?`${f.betragProTag.toFixed(2).replace(".",",")} € pro Tag`:'<span class="fahrtgeld-fehlend">Tagessatz fehlt</span>'}
          </p>
        </div>
        <div style="display: flex; gap: 8px;">
          <button class="btn sm" id="btn-template-replace">Vorlage ersetzen</button>
          <button class="btn sm" id="btn-template-clear">Vorlage löschen</button>
        </div>
      </div>
      ${p?`
        <div class="fahrtgeld-warning-box" style="margin-top: 12px;">
          <strong>⚠ Name-Konflikt — Personalnummer wird NICHT automatisch übernommen:</strong>
          <p class="hint" style="margin: 6px 0 0;">
            Die Vorlage ist auf <strong>${$(m.vorlagenName)}</strong> ausgestellt, dein Zeitnachweis aber auf <strong>${$(m.zeitnachweisName)}</strong>.
            Damit keine fremden Daten auf deine Fahrgelderstattung kommen, ergänzt die App weder Personalnummer noch Kostenstelle aus dem Zeitnachweis.
            Bitte trage diese Felder vor der Abgabe handschriftlich nach oder lade einen passenden Zeitnachweis hoch.
          </p>
        </div>
      `:""}
      ${T.length>0?`
        <div class="fahrtgeld-info-box" style="margin-top: 12px;">
          <strong>ℹ️ ${T.length} Feld${T.length===1?"":"er"} aus deinem Zeitnachweis ergänzt:</strong>
          ${T.map(S=>`<span class="fahrtgeld-info-chip">${$(S)}</span>`).join(" ")}
          <p class="hint" style="margin: 6px 0 0;">Diese Werte fehlten in deiner Vorlage — die App hat sie automatisch aus dem hochgeladenen Zeitnachweis-PDF übernommen (Name-Abgleich erfolgreich).</p>
        </div>
      `:""}
      ${v.length>0?`
        <div class="fahrtgeld-warning-box" style="margin-top: 12px;">
          <strong>⚠ ${v.length} Feld${v.length===1?"":"er"} fehlt${v.length===1?"":"en"} weiterhin:</strong>
          ${v.map(S=>`<span class="fahrtgeld-warning-chip">${$(S)}</span>`).join(" ")}
          <p class="hint" style="margin: 6px 0 0;">${g==="pdf"?"Diese Felder bleiben in der generierten PDF leer — du kannst sie im PDF-Reader oder handschriftlich ergänzen, bevor du sie abgibst.":"Diese Felder bleiben in der generierten Excel leer — bitte vor Abgabe ergänzen."}</p>
        </div>
      `:""}
    </div>

    <div class="card fahrtgeld-signature-info" style="margin-bottom: 24px;">
      <div class="card-split">
        <div>
          <h3 style="margin: 0;">Unterschrift</h3>
          ${(G=t.unterschrift)!=null&&G.dataUrl?`
            <p class="hint" style="margin: 4px 0 8px;">Wird in jede${g==="pdf"?" generierte PDF":" generierte Excel"} als Auszubildender-Unterschrift eingefügt. Datum (Tag der Generierung) wird automatisch gesetzt.</p>
            <div class="fahrtgeld-signature-preview">
              <img src="${$(t.unterschrift.dataUrl)}" alt="Unterschrift" />
            </div>
          `:`
            <p class="hint" style="margin: 4px 0 0;">Noch keine Unterschrift hinterlegt. Aktuell bleibt das Feld in der ${g==="pdf"?"PDF":"Excel"} leer (nur das Datum wird gesetzt).</p>
          `}
        </div>
        <div style="display: flex; gap: 8px; align-items: flex-start;">
          <button class="btn sm" id="btn-signature-upload">${(le=t.unterschrift)!=null&&le.dataUrl?"Ersetzen":"Hochladen"}</button>
          ${(Ye=t.unterschrift)!=null&&Ye.dataUrl?'<button class="btn sm" id="btn-signature-clear">Entfernen</button>':""}
        </div>
      </div>
    </div>

    ${c.length===0?`
      <div class="empty-state">
        <div class="empty-state-icon">📅</div>
        <h2>Keine Berufsschultage erkannt</h2>
        <p>Lade einen Zeitnachweis unter <a href="#/daten">Daten</a> hoch — danach erscheinen hier die Monate.</p>
      </div>
    `:(()=>{var U;const S=c.map((D,ae)=>{const R=mn(n,D),ee=+(R.length*(t.konstanten.betragProTag??0)).toFixed(2),ze=R.length>10,ke=vr(D,a,R,o),Y=ke.ausstehend.length,j=+((R.length+Y)*(t.konstanten.betragProTag??0)).toFixed(2),ht=Y>0?ke.ausstehend.map(Ce=>N(V(Ce))).join(", "):"";return{mk:D,bs:R,summe:ee,ueberzaehlig:ze,offen:Y,offenListe:ht,summeMitOffen:j,idx:ae}}),A=((U=S.find(D=>D.bs.length>0))==null?void 0:U.mk)??S[0].mk,E=S.find(D=>D.mk===A)??S[0];return`
          <div class="card fahrtgeld-generate-card">
            <div class="fahrtgeld-generate-buttons">
              <span class="fahrtgeld-step-label fahrtgeld-step-label-files">1. Datei erstellen</span>
              <div class="fahrtgeld-step-buttons fahrtgeld-step-buttons-files">
                <button class="btn-generate-big" id="btn-fahrtgeld-generate-excel" data-format="excel" ${E.bs.length===0?"disabled":""}>
                  <img src="excel-logo.png" alt="" class="excel-logo-big" />
                  <span class="btn-generate-label">Excel</span>
                </button>
                <span class="fahrtgeld-step-or">oder</span>
                <button class="btn-generate-big" id="btn-fahrtgeld-generate-pdf" data-format="pdf" ${E.bs.length===0?"disabled":""}>
                  <img src="pdf-logo.png" alt="" class="excel-logo-big" />
                  <span class="btn-generate-label">PDF</span>
                </button>
              </div>
              <div class="fahrtgeld-step-arrow" aria-hidden="true">
                <span class="fahrtgeld-step-arrow-shape">→</span>
              </div>
              <span class="fahrtgeld-step-label fahrtgeld-step-label-mail">2. E-Mail öffnen</span>
              <div class="fahrtgeld-step-buttons fahrtgeld-step-buttons-mail">
                <a class="btn-mail-big" id="btn-fahrtgeld-mail" href="${$(pn(E.mk,i))}" target="_blank" rel="noopener" ${E.bs.length===0?'aria-disabled="true"':""}>
                  <img src="outlook-logo.png" alt="" class="outlook-logo-big" />
                  <span>E-Mail</span>
                </a>
              </div>
            </div>
            <div class="fahrtgeld-generate-info" id="fahrtgeld-generate-info">
              <div class="fahrtgeld-generate-monat">${$(nt(E.mk))}</div>
              <div class="hint" id="fahrtgeld-generate-detail">
                ${E.bs.length} BS-Tag${E.bs.length===1?"":"e"} erfasst · ${E.summe.toFixed(2).replace(".",",")} €
                ${E.offen>0?`<br><span class="fahrtgeld-pending">⏳ Laut Schul-Rhythmus kommen noch ${E.offen} BS-Tag${E.offen===1?"":"e"}: ${$(E.offenListe)} (mit allen: ${E.summeMitOffen.toFixed(2).replace(".",",")} €)</span>`:""}
                ${E.ueberzaehlig?`<br><span style="color: var(--warn); font-weight: 600;">· ${E.bs.length-10} überzählig (max 10/Monat)</span>`:""}
              </div>
              <div class="hint" style="margin-top: 6px; font-size: 12px;">⚠ Mail-Anhang muss manuell aus dem Download-Ordner gezogen werden — Browser können keine Anhänge automatisch hinzufügen.</div>
            </div>
          </div>

          <div class="card">
            <h2>Monat auswählen</h2>
            <p class="hint" style="margin-bottom: 16px;">Pro Monat zählen nur Berufsschul-Tage, an denen du nachweislich anwesend warst. Krank, Urlaub und Stempelzeit-Tage werden ausgefiltert.</p>
            <div class="fahrtgeld-monate">
              ${S.map(D=>{const ae=D.mk===A?"checked":"",R=`data-monat="${$(D.mk)}" data-offen="${D.offen}" data-offen-liste="${$(D.offenListe)}" data-anzahl="${D.bs.length}" data-summe="${D.summe.toFixed(2).replace(".",",")}" data-summe-mit-offen="${D.summeMitOffen.toFixed(2).replace(".",",")}" data-monat-label="${$(nt(D.mk))}" data-ueberzaehlig="${D.ueberzaehlig?"1":"0"}"`;return`
                  <label class="fahrtgeld-monat-row${D.offen>0?" has-pending":""}${D.bs.length===0?" empty":""}" ${R}>
                    <input type="radio" name="fg-monat-sel" value="${$(D.mk)}" ${ae} ${D.bs.length===0?"disabled":""} class="fahrtgeld-monat-radio" />
                    <div class="fahrtgeld-monat-titel">
                      <div class="fahrtgeld-monat-name">${$(nt(D.mk))}</div>
                      <div class="hint">
                        ${D.bs.length} BS-Tag${D.bs.length===1?"":"e"} erfasst · ${D.summe.toFixed(2).replace(".",",")} €
                        ${D.offen>0?`<br><span class="fahrtgeld-pending">⏳ noch ${D.offen} BS-Tag${D.offen===1?"":"e"} laut Rhythmus</span>`:""}
                        ${D.ueberzaehlig?`<br><span style="color: var(--warn); font-weight: 600;">· ${D.bs.length-10} überzählig</span>`:""}
                      </div>
                    </div>
                  </label>
                `}).join("")}
            </div>
          </div>
        `})()}

    <input type="file" id="fahrtgeld-replace-input" accept=".xlsx,.xls,.xlsm,.pdf,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,application/pdf" style="display: none;" />
    <input type="file" id="fahrtgeld-signature-input" accept="image/png,image/jpeg,.png,.jpg,.jpeg" style="display: none;" />
  `,(ye=e.querySelector("#btn-template-replace"))==null||ye.addEventListener("click",()=>{e.querySelector("#fahrtgeld-replace-input").click()}),(we=e.querySelector("#fahrtgeld-replace-input"))==null||we.addEventListener("change",async S=>{var E;const A=(E=S.target.files)==null?void 0:E[0];A&&await zt(A,e)}),(Le=e.querySelector("#btn-template-clear"))==null||Le.addEventListener("click",async()=>{await ie("Beim nächsten Öffnen wirst du gebeten, eine neue Vorlage hochzuladen.",{title:"Vorlage löschen?",confirmLabel:"Löschen",variant:"danger"})&&(await Zs(),K("Vorlage gelöscht."),je({root:e}))}),(Xe=e.querySelector("#btn-signature-upload"))==null||Xe.addEventListener("click",()=>{e.querySelector("#fahrtgeld-signature-input").click()}),(_e=e.querySelector("#fahrtgeld-signature-input"))==null||_e.addEventListener("change",async S=>{var E;const A=(E=S.target.files)==null?void 0:E[0];A&&await $r(A,e)}),(De=e.querySelector("#btn-signature-clear"))==null||De.addEventListener("click",async()=>{if(!await ie("Die hochgeladene Unterschrift wird entfernt — generierte Excel haben dann keine Unterschrift mehr.",{title:"Unterschrift entfernen?",confirmLabel:"Entfernen",variant:"danger"}))return;const S=await Ie();S&&(await _t({...S,unterschrift:null}),K("Unterschrift entfernt."),je({root:e}))});const M=e.querySelector("#btn-fahrtgeld-generate-excel"),z=e.querySelector("#btn-fahrtgeld-generate-pdf"),O=[M,z].filter(Boolean),x=e.querySelector("#btn-fahrtgeld-mail"),y=e.querySelector(".fahrtgeld-generate-monat"),P=e.querySelector("#fahrtgeld-generate-detail"),C=e.querySelectorAll(".fahrtgeld-monat-radio");function H(){const S=e.querySelector(".fahrtgeld-monat-radio:checked");if(!S)return;const A=S.closest(".fahrtgeld-monat-row");if(!A)return;const E=S.value,U=parseInt(A.getAttribute("data-anzahl")||"0",10),D=A.getAttribute("data-summe")||"0,00",ae=parseInt(A.getAttribute("data-offen")||"0",10),R=A.getAttribute("data-offen-liste")||"",ee=A.getAttribute("data-summe-mit-offen")||D,ze=A.getAttribute("data-monat-label")||"",ke=A.getAttribute("data-ueberzaehlig")==="1";if(y&&(y.textContent=ze),P){const Y=[`${U} BS-Tag${U===1?"":"e"} erfasst · ${D} €`];ae>0&&Y.push(`<br><span class="fahrtgeld-pending">⏳ Laut Schul-Rhythmus kommen noch ${ae} BS-Tag${ae===1?"":"e"}: ${$(R)} (mit allen: ${ee} €)</span>`),ke&&Y.push(`<br><span style="color: var(--warn); font-weight: 600;">· ${U-10} überzählig (max 10/Monat)</span>`),P.innerHTML=Y.join("")}O.forEach(Y=>{Y.disabled=U===0}),x&&(x.href=pn(E,i),U===0?x.setAttribute("aria-disabled","true"):x.removeAttribute("aria-disabled"))}C.forEach(S=>S.addEventListener("change",H));async function I(S){var ke,Y;const A=e.querySelector(".fahrtgeld-monat-radio:checked");if(!A){X("Bitte einen Monat auswählen.",{type:"warn"});return}const E=A.closest(".fahrtgeld-monat-row"),U=A.value,D=parseInt((E==null?void 0:E.getAttribute("data-offen"))||"0",10),ae=(E==null?void 0:E.getAttribute("data-offen-liste"))||"";if(D>0&&!await ie(`Laut deinem Schul-Rhythmus kommen in diesem Monat noch ${D} BS-Tag${D===1?"":"e"}:

${ae}

Diese Tage sind noch nicht im Zeitnachweis-PDF und werden in der ${S==="pdf"?"PDF":"Excel"} fehlen. Trotzdem jetzt für die bisher erfassten Tage generieren?`,{title:"Noch ausstehende BS-Tage",confirmLabel:"Trotzdem generieren"}))return;const R=S==="pdf"?z:M;R&&(R.disabled=!0);const ee=R==null?void 0:R.querySelector(".btn-generate-label"),ze=ee==null?void 0:ee.textContent;ee&&(ee.textContent="Erstelle …");try{const j=await Ie(),ht=await ue(),Ce=mn(ht,U);if(!Ce.length){X("Für diesen Monat sind keine BS-Anwesenheits-Tage erkannt.",{type:"warn"});return}const Kt=(ke=j.unterschrift)==null?void 0:ke.bytes,It=(Y=j.unterschrift)==null?void 0:Y.extension,Ht=j.format||"excel",ft=Ht===S,Rt=ft?j.bytes:null,oa=ft&&S==="pdf"?j.layout:null,jt=vn(j.konstanten,s).konstanten,{blob:ca,dateiname:qt,ueberzaehlig:mt}=S==="pdf"?await mr({templateBytes:Rt,layout:oa,monatKey:U,bsTage:Ce,konstanten:jt,unterschriftBytes:Kt,unterschriftExtension:It}):await ur({templateBytes:Rt,monatKey:U,bsTage:Ce,konstanten:jt,unterschriftBytes:Kt,unterschriftExtension:It});kr(ca,qt);const Zt=S==="pdf"?"PDF":"Excel",da=Array.isArray(j.missing)&&j.missing.length>0?` — bitte ${j.missing.length} fehlendes Feld${j.missing.length===1?"":"er"} vor Abgabe ergänzen`:"",ua=ft?"":` (aus deiner ${Ht==="pdf"?"PDF-":"Excel-"}Vorlage in ${Zt} überführt)`;K(`${Zt} erstellt: ${qt}${mt>0?` (${mt} weiterer Tag${mt===1?"":"e"} passte/n nicht in die Vorlage)`:""}${ua}${da}`)}catch(j){console.error("Fahrtgeld-Generierung fehlgeschlagen:",j),X(`Fehler: ${j.message||j}`,{type:"error",duration:8e3})}finally{R&&(R.disabled=!1),ee&&ze&&(ee.textContent=ze)}}M==null||M.addEventListener("click",()=>I("excel")),z==null||z.addEventListener("click",()=>I("pdf"))}function xr(e){e.innerHTML=`
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
  `;const t=e.querySelector("#fahrtgeld-dropzone"),n=e.querySelector("#fahrtgeld-upload-input");t==null||t.addEventListener("click",()=>n.click()),t==null||t.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),n.click())}),n==null||n.addEventListener("change",async a=>{var i;const s=(i=a.target.files)==null?void 0:i[0];s&&await zt(s,e)}),["dragenter","dragover"].forEach(a=>{t==null||t.addEventListener(a,s=>{s.preventDefault(),s.stopPropagation(),t.classList.add("is-dragover")})}),["dragleave","drop"].forEach(a=>{t==null||t.addEventListener(a,s=>{s.preventDefault(),s.stopPropagation(),t.classList.remove("is-dragover")})}),t==null||t.addEventListener("drop",async a=>{var i,o;const s=(o=(i=a.dataTransfer)==null?void 0:i.files)==null?void 0:o[0];s&&await zt(s,e)})}async function $r(e,t){try{if(!["image/png","image/jpeg"].includes(e.type)&&!/\.(png|jpe?g)$/i.test(e.name)){X("Bitte ein PNG oder JPG hochladen.",{type:"warn"});return}if(e.size>2*1024*1024){X(`Die Bilddatei ist zu groß (${(e.size/1024/1024).toFixed(1)} MB). Maximal 2 MB — bitte komprimiert oder kleiner hochladen.`,{type:"warn",duration:8e3});return}const a=await e.arrayBuffer(),s=/\.png$/i.test(e.name)||e.type==="image/png"?"png":"jpeg",i=await new Promise((d,r)=>{const l=new FileReader;l.onload=()=>d(l.result),l.onerror=r,l.readAsDataURL(e)}),o=await Ie();if(!o){X("Bitte zuerst eine Excel-Vorlage hochladen.",{type:"warn"});return}await _t({...o,unterschrift:{bytes:a,extension:s,dataUrl:i,hochgeladenAm:new Date().toISOString()}}),K("Unterschrift gespeichert."),je({root:t})}catch(n){console.error("Unterschrift-Upload fehlgeschlagen:",n),X(`Fehler beim Verarbeiten: ${n.message||n}`,{type:"error",duration:8e3})}}async function zt(e,t){try{const n=await e.arrayBuffer(),a=await cr(n);if(!a.ok){X(`Vorlage nicht erkannt: ${a.fehler}`,{type:"error",duration:8e3});return}const s=await Ie();let i=s==null?void 0:s.unterschrift;if(!i&&a.unterschriftAuto){const r=Sr(a.unterschriftAuto.bytes,a.unterschriftAuto.extension);i={bytes:a.unterschriftAuto.bytes,extension:a.unterschriftAuto.extension,dataUrl:r,quelle:"auto-aus-vorlage",hochgeladenAm:new Date().toISOString()}}await _t({bytes:n,konstanten:a.konstanten,format:a.format||"excel",layout:a.layout||null,missing:a.missing||[],vorhandeneEintraege:a.vorhandeneEintraege||null,unterschrift:i,hochgeladenAm:new Date().toISOString(),dateiname:e.name});const o=a.format==="pdf"?"PDF-Vorlage":"Excel-Vorlage",d=a.missing&&a.missing.length>0?` · ${a.missing.length} Feld${a.missing.length===1?"":"er"} fehlte${a.missing.length===1?"":"n"}`:"";a.unterschriftAuto&&!(s!=null&&s.unterschrift)?K(`${o} gespeichert: ${a.konstanten.name||e.name} (Unterschrift aus Vorlage übernommen)${d}`):K(`${o} gespeichert: ${a.konstanten.name||e.name}${d}`),document.dispatchEvent(new CustomEvent("better-ess:fahrgeld-template-uploaded")),je({root:t})}catch(n){console.error("Vorlage-Upload fehlgeschlagen:",n),X(`Fehler beim Verarbeiten: ${n.message||n}`,{type:"error",duration:8e3})}}function Sr(e,t){const n=new Uint8Array(e);let a="";for(let o=0;o<n.length;o++)a+=String.fromCharCode(n[o]);const s=btoa(a);return`data:${t==="png"?"image/png":"image/jpeg"};base64,${s}`}async function Mr({root:e}){const t=await ue();if(!t.length){e.innerHTML='<h1 class="view-title">Berichtsheft</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const n=[...new Set(t.map(i=>i.monatKey))].sort().reverse();e.innerHTML=`
    <h1 class="view-title">Berichtsheft-Export</h1>
    <p class="view-subtitle">Kopiere die Arbeitsstunden im HH:MM-Format direkt in dein Berichtsheft.</p>

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 16px; align-items: center;">
        <h2 style="margin: 0;">Filter</h2>
        <div style="display: flex; gap: 8px; align-items: center;">
          <label style="color: var(--fg-muted); font-size: 13px;">Monat:</label>
          <select id="filter-monat">
            <option value="">Alle</option>
            ${n.map(i=>`<option value="${i}">${Ar(i)}</option>`).join("")}
          </select>
          <button class="btn sm" id="btn-copy-all">Alle sichtbaren kopieren</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div id="liste"></div>
    </div>
  `;const a=e.querySelector("#filter-monat");a.addEventListener("change",()=>s()),e.querySelector("#btn-copy-all").addEventListener("click",()=>{const i=e.querySelectorAll("#liste tr[data-copy]"),o=Array.from(i).map(d=>d.getAttribute("data-copy")).join(`
`);navigator.clipboard.writeText(o).then(()=>K(`${i.length} Zeilen kopiert.`))});function s(){const i=a.value,d=(i?t.filter(r=>r.monatKey===i):t).filter(r=>r.ist!=null&&r.ist>0&&r.tagestyp!=="Wochenende");e.querySelector("#liste").innerHTML=Dr(d),e.querySelectorAll(".copy-val").forEach(r=>{r.addEventListener("click",async()=>{const l=r.getAttribute("data-val");await navigator.clipboard.writeText(l),r.classList.add("ok");const c=r.textContent;r.textContent="✓ kopiert",setTimeout(()=>{r.classList.remove("ok"),r.textContent=c},1200)})})}s()}function Dr(e){return e.length?`
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
        ${e.map(t=>{const n=He(t.ist),a=`${N(V(t.datum))}	${n}`;return`
            <tr data-copy="${yn(a)}">
              <td class="tabular">${N(V(t.datum))}</td>
              <td>${zr(t.wochentag)}</td>
              <td>${t.tagestyp?`<span class="pill ${Pr(t.tagestyp)}">${la(t.tagestyp)}</span>`:"—"}</td>
              <td class="num tabular">${t.ist.toFixed(2).replace(".",",")}</td>
              <td class="num tabular" style="font-weight: 600;">${n}</td>
              <td><button class="copy-val" data-val="${yn(n)}">📋 ${n}</button></td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `:'<p style="color: var(--fg-muted);">Keine Tage in dieser Auswahl.</p>'}function zr(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function Ar(e){const[t,n]=e.split("-");return L(new Date(parseInt(t),parseInt(n)-1,1),"LLLL yyyy",{locale:ne})}function Pr(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function la(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function yn(e){return la(e)}async function Er({root:e}){const[t,n,a,s]=await Promise.all([ue(),re(),ot(),ct()]),i=Object.fromEntries(s.map(r=>[r.key,r])),o=ut(t,n,new Date).filter(r=>r.mailVorlageKey),d=jn(a);e.innerHTML=`
    <h1 class="view-title">Mail-Vorlagen</h1>
    <p class="view-subtitle">Vorformulierte Mails an die Zeitwirtschaft bei erkannten Fehlern im Zeitnachweis.</p>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Offene Warnungen mit Mail-Vorschlag</h2>
      <p class="hint" style="margin-bottom: 16px;">Diese Warnungen haben einen roten Schweregrad und sind eine direkte Mail wert.</p>

      ${o.length===0?'<div class="empty-state"><div class="empty-state-icon">✓</div><p>Keine akuten Warnungen — top.</p></div>':o.map(r=>Tr(r,n,i)).join("")}

      ${d.length>0?`
        <h3 style="margin-top: 24px;">Saldo-Plausibilität</h3>
        ${d.map(r=>`
          <div class="alert severity-warn">
            <div class="alert-icon">⚠</div>
            <div class="alert-body">
              <div class="alert-title">${te(r.titel)}</div>
              <p style="margin: 4px 0; font-size: 13px;">${te(r.beschreibung)}</p>
            </div>
          </div>
        `).join("")}
      `:""}
    </div>

    <div class="card">
      <h2>Vorlagen verwalten</h2>
      <p class="hint" style="margin-bottom: 16px;">Passe die Texte an deinen Stil an. Platzhalter wie <code>{name}</code>, <code>{datum}</code>, <code>{wochentag}</code>, <code>{ist}</code>, <code>{soll}</code> werden automatisch gefüllt.</p>

      <div id="vorlagen-editor">
        ${Object.keys(Re).map(r=>{const l=Je(r,i[r]);return Fr(l)}).join("")}
      </div>
    </div>
  `,Lr(e),_r(e)}function Tr(e,t,n){const a=Je(e.mailVorlageKey,n[e.mailVorlageKey]);if(!a)return"";const s=Ct(t,e),i=qn(a,s),o=Bt(t,a,s);return`
    <div class="alert severity-${e.schweregrad}" style="flex-direction: column; align-items: stretch;">
      <div style="display: flex; align-items: flex-start; gap: 12px;">
        <div class="alert-icon">${e.schweregrad==="error"?"!":"⚠"}</div>
        <div class="alert-body">
          <div class="alert-title">${te(e.titel)}</div>
          <p style="margin: 4px 0; font-size: 13px;">${te(e.beschreibung)}</p>
        </div>
      </div>
      <details style="margin-top: 12px;">
        <summary style="cursor: pointer; color: var(--fg-muted); font-size: 13px;">Mail-Vorschau anzeigen</summary>
        <div style="background: var(--surface-2); border-radius: var(--radius-md); padding: 12px; margin-top: 8px; font-family: var(--font-mono); font-size: 12px; white-space: pre-wrap; line-height: 1.5;">
<strong>An:</strong> ${te(t.zeitwirtschaftEmail||"")}
<strong>Betreff:</strong> ${te(i.betreff)}

${te(i.text)}
        </div>
      </details>
      <div class="alert-actions mail-actions-big" style="margin-top: 16px;">
        <a class="btn-mail-big" href="${o}" target="_blank" rel="noopener"><img src="outlook-logo.png" alt="" class="outlook-logo-big" /><span>Mail Vorschlag in Outlook</span></a>
        <button class="btn sm btn-copy-mail" data-subject="${At(i.betreff)}" data-body="${At(i.text)}">📋 Betreff + Text kopieren</button>
      </div>
    </div>
  `}function Fr(e){return`
    <div class="vorlagen-item" data-key="${e.key}" style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
      <div class="card-split" style="margin-bottom: 12px;">
        <div>
          <h3 style="text-transform: none; letter-spacing: 0; color: var(--fg); font-size: 16px;">${te(e.titel)}</h3>
          <p class="hint" style="margin: 4px 0;">${te(e.beschreibung)}</p>
        </div>
        <button class="btn sm btn-reset-vorlage" data-key="${e.key}">Auf Default zurücksetzen</button>
      </div>
      <div class="form-group">
        <label>Betreff</label>
        <input type="text" class="v-betreff" value="${At(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 240px;">${te(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function Lr(e){e.querySelectorAll(".btn-save-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const n=t.getAttribute("data-key"),a=t.closest(".vorlagen-item"),s=a.querySelector(".v-betreff").value,i=a.querySelector(".v-text").value;await it(n,{betreff:s,text:i}),K("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const n=t.getAttribute("data-key"),a=Re[n];a&&await ie(`Deine Anpassungen an "${a.titel}" gehen verloren.`,{title:"Vorlage zurücksetzen?",confirmLabel:"Zurücksetzen",variant:"danger"})&&(await it(n,{betreff:a.betreff,text:a.text}),K("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function _r(e){e.querySelectorAll(".btn-copy-mail").forEach(t=>{t.addEventListener("click",async()=>{const n=t.getAttribute("data-subject"),a=t.getAttribute("data-body"),s=`Betreff: ${n}

${a}`;await navigator.clipboard.writeText(s),K("Mail-Text kopiert.")})})}function te(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function At(e){return te(e)}async function Cr({root:e}){const[t,n]=await Promise.all([re(),ct()]),a=Object.fromEntries(n.map(s=>[s.key,s]));e.innerHTML=`
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
          ${Object.keys(Re).map(s=>{const i=Je(s,a[s]);return Br(i)}).join("")}
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
  `,e.querySelector("#pause-sel").addEventListener("change",async s=>{const i={...t,pausenRegel:s.target.value};await st(i),K("Pausen-Regel gespeichert.")}),e.querySelectorAll(".btn-save-vorlage").forEach(s=>{s.addEventListener("click",async()=>{const i=s.getAttribute("data-key"),o=s.closest(".vorlagen-item"),d=o.querySelector(".v-betreff").value,r=o.querySelector(".v-text").value;await it(i,{betreff:d,text:r}),K("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(s=>{s.addEventListener("click",async()=>{const i=s.getAttribute("data-key"),o=Re[i];o&&await ie(`Deine Anpassungen an "${o.titel}" gehen verloren.`,{title:"Vorlage zurücksetzen?",confirmLabel:"Zurücksetzen",variant:"danger"})&&(await it(i,{betreff:o.betreff,text:o.text}),K("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function Br(e){return`
    <div class="vorlagen-item" data-key="${e.key}" style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
      <div class="card-split" style="margin-bottom: 12px;">
        <div>
          <h3 style="text-transform: none; letter-spacing: 0; color: var(--fg); font-size: 16px;">${at(e.titel)}</h3>
          <p class="hint" style="margin: 4px 0;">${at(e.beschreibung)}</p>
        </div>
        <button class="btn sm btn-reset-vorlage" data-key="${e.key}">Auf Default zurücksetzen</button>
      </div>
      <div class="form-group">
        <label>Betreff</label>
        <input type="text" class="v-betreff" value="${Wr(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 200px;">${at(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function at(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Wr(e){return at(e)}async function wn(){document.documentElement.setAttribute("data-css-ready",""),_a();const e=document.getElementById("content");await Rs()&&setTimeout(()=>{X('Parser wurde aktualisiert. Bitte lade deinen Zeitnachweis unter "Daten" neu hoch.',{type:"info",duration:12e3})},500),await Hs(),await Ks(),await Is(),Z("/",an),Z("/dashboard",an),Z("/analytics",Ji),Z("/kalender",vt),Z("/kalender/typ/:typ",yt),Z("/kalender/wochentag/:wd",yt),Z("/kalender/pause/:bucket",yt),Z("/kalender/:yyyymm",vt),Z("/kalender/:yyyymm/:yyyykw",vt),Z("/tag/:datum",qi),Z("/berichtsheft",Mr),Z("/mails",Er),Z("/fahrtgeld",je),Z("/profil",ji),Z("/daten",Oi),Z("/einstellungen",Cr),Bs(e),location.hash||Cs("/");try{const t=await w.tage.count();Fi(t>0)&&setTimeout(()=>Jn(),700)}catch(t){console.warn("[boot] Tour-Auto-Start-Check fehlgeschlagen:",t)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",wn):wn();
