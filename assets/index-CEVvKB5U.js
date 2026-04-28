const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/exceljs.min-BhfpbegZ.js","assets/dexie-UpTFNL8S.js","assets/index-Bf057_RE.js"])))=>i.map(i=>d[i]);
import{C as Y,L as fa,B as ma,D as pa,S as ba,a as va,b as ya,P as wa,A as ka,c as xa,d as $a,T as Sa,p as Ma,e as za,i as Aa}from"./chartjs-CRgZvhTJ.js";import{b as pt,a as Fe,c as Le,d as Da,f as L,s as wn,e as kn,g as xn,p as Pa,h as Ea,i as it,j as rt,k as O,l as $n,q as Ta,m as Fa,n as La,o as _a}from"./datefns-C8_rfWt_.js";import{D as Ca}from"./dexie-UpTFNL8S.js";import{GlobalWorkerOptions as Sn,getDocument as Mn}from"./pdfjs-BnPRJEQ6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ba(){document.documentElement.setAttribute("data-theme","dark")}const Jt={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},Oa=(e,t,n)=>{let a;const s=n!=null&&n.addSuffix?Jt[e].withPreposition:Jt[e].standalone;return typeof s=="string"?a=s:t===1?a=s.one:a=s.other.replace("{{count}}",String(t)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:"vor "+a:a},Ka={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},Na={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Wa={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Va={date:pt({formats:Ka,defaultWidth:"full"}),time:pt({formats:Na,defaultWidth:"full"}),dateTime:pt({formats:Wa,defaultWidth:"full"})},Ia={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},Ha=(e,t,n,a)=>Ia[e],Ra={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},qa={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},St={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},Za={narrow:St.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:St.wide},ja={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},Ua={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},Ga={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},Ja=e=>Number(e)+".",Ya={ordinalNumber:Ja,era:Fe({values:Ra,defaultWidth:"wide"}),quarter:Fe({values:qa,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Fe({values:St,formattingValues:Za,defaultWidth:"wide"}),day:Fe({values:ja,defaultWidth:"wide"}),dayPeriod:Fe({values:Ua,defaultWidth:"wide",formattingValues:Ga,defaultFormattingWidth:"wide"})},Xa=/^(\d+)(\.)?/i,Qa=/\d+/i,es={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},ts={any:[/^v/i,/^n/i]},ns={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},as={any:[/1/i,/2/i,/3/i,/4/i]},ss={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},is={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},rs={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},ls={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},os={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},cs={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},ds={ordinalNumber:Da({matchPattern:Xa,parsePattern:Qa,valueCallback:e=>parseInt(e)}),era:Le({matchPatterns:es,defaultMatchWidth:"wide",parsePatterns:ts,defaultParseWidth:"any"}),quarter:Le({matchPatterns:ns,defaultMatchWidth:"wide",parsePatterns:as,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Le({matchPatterns:ss,defaultMatchWidth:"wide",parsePatterns:is,defaultParseWidth:"any"}),day:Le({matchPatterns:rs,defaultMatchWidth:"wide",parsePatterns:ls,defaultParseWidth:"any"}),dayPeriod:Le({matchPatterns:os,defaultMatchWidth:"wide",parsePatterns:cs,defaultParseWidth:"any"})},te={code:"de",formatDistance:Oa,formatLong:Va,formatRelative:Ha,localize:Ya,match:ds,options:{weekStartsOn:1,firstWeekContainsDate:4}};function zn(e){if(e==null)return null;if(typeof e=="number")return e;let t=String(e).trim();if(!t)return null;let n=!1;t.endsWith("-")&&(n=!0,t=t.slice(0,-1).trim()),t=t.replace(",",".");const a=parseFloat(t);return isNaN(a)?null:n?-a:a}function We(e){if(e==null||isNaN(e))return"—";const t=e<0,n=Math.abs(e),a=Math.floor(n),s=Math.round((n-a)*60);let i=a,r=s;return r===60&&(i+=1,r=0),`${t?"-":""}${i}:${String(r).padStart(2,"0")}`}function ge(e,t={}){if(e==null||isNaN(e))return"—";const{signed:n=!1,suffix:a="h"}=t,s=n&&e>0?"+":"",i=e.toFixed(2).replace(".",",");return`${s}${i}${a}`}function us(e,t={}){if(e==null||isNaN(e))return"—";const{signed:n=!1}=t;return`${n&&e>0?"+":""}${We(e)}`}function Yt(e,t="hhmm",n={}){return t==="dezimal"?ge(e,{signed:!0,suffix:"",...n}):us(e,{signed:!0,...n})}function ae(e){if(!e)return null;const t=/^(\d{1,2}):(\d{2})$/.exec(String(e).trim());return t?parseInt(t[1],10)*60+parseInt(t[2],10):null}function An(e){if(!(e!=null&&e.length))return null;const t=e.filter(s=>s.von&&s.bis);if(!t.length)return null;let n=t[0].von,a=t[0].bis;for(const s of t)ae(s.von)<ae(n)&&(n=s.von),ae(s.bis)>ae(a)&&(a=s.bis);return{kommen:n,gehen:a}}const Dn="2026-04-01";function gs(e){return e?"arbzg":"jarbschg"}function hs(e,t){return e==null?0:t==="jarbschg"?e>6?1:e>4.5?.5:0:e>9?.75:e>6?.5:0}function Et(e){if(!e||e.length<2)return 0;const t=e.filter(a=>a.von&&a.bis).map(a=>({von:ae(a.von),bis:ae(a.bis)})).filter(a=>a.von!=null&&a.bis!=null).sort((a,s)=>a.von-s.von);let n=0;for(let a=1;a<t.length;a++){const s=t[a].von-t[a-1].bis;(s>0&&s>=15||s>0)&&(n+=s)}return n/60}function Pn(e,t){const n=e.zeitSpannen??[];if(!n.length||n.every(m=>!m.von))return{keinAnspruch:!0};const a=Et(n),s=e.pause??0,i=fs(n),r=i-s,d=t.pausenRegel&&t.pausenRegel!=="auto"?t.pausenRegel==="jarbschg"?"jarbschg":"arbzg":gs(!!t.ueber18),c=hs(r,d);if(e.datum&&e.datum<Dn)return{arbeitszeitMitPause:i,arbeitszeitOhnePause:r,gestempeltePause:a,abgezogenePause:s,gesetzlichePflicht:c,gesetz:d,legalerAbzug:s,unrechtmaessigerVerlustMin:0,aufstockungMin:0,typ:"alt_reglement",warnung:null,altReglement:!0};const l=Math.max(a,c),o=s-l,u=Math.max(0,c-a);let h="ok",g=null;if(o>.05)h="fehler_zeitwirtschaft",g=`${Math.round(o*60)} min Pause wurden zusätzlich zur gesetzlichen Pflicht und zur gestempelten Pause abgezogen. Das sieht nach einem Zeitwirtschafts-Fehler aus.`;else if(u>.05&&s>a+.02){h="aufstockung_legal";const m=Math.round(u*60);g=`Du hast ${Math.round(a*60)} min Pause gestempelt, aber bei ${r.toFixed(2).replace(".",",")}h Arbeitszeit schreibt das Gesetz (${d.toUpperCase()}) ${Math.round(c*60)} min vor. Die fehlenden ${m} min wurden automatisch als Pause gewertet. Das ist gesetzeskonform — nächstes Mal einfach länger Pause machen.`}return{arbeitszeitMitPause:i,arbeitszeitOhnePause:r,gestempeltePause:a,abgezogenePause:s,gesetzlichePflicht:c,gesetz:d,legalerAbzug:l,unrechtmaessigerVerlustMin:Math.round(Math.max(0,o)*60),aufstockungMin:Math.round(Math.max(0,u)*60),typ:h,warnung:g,altReglement:!1}}function fs(e){let t=0;for(const n of e){if(!n.von||!n.bis)continue;const a=ae(n.von),s=ae(n.bis);a!=null&&s!=null&&s>a&&(t+=s-a)}return t/60}function En(e,t){var c,l,o;const n=[...e].sort((u,h)=>u.datum.localeCompare(h.datum));if(!n.length)return[];const a=new Map(t.map(u=>[u.monatKey,u])),s={};for(const u of n)s[c=u.monatKey]??(s[c]=[]),s[u.monatKey].push(u);const i=Object.keys(s).sort(),r=[];let d=null;for(const u of i){const h=a.get(u);let g;((l=h==null?void 0:h.glz)==null?void 0:l.saldoVorperiode)!=null?g=h.glz.saldoVorperiode:d!=null?g=d:g=0;const m=s[u];for(const f of m)f.diff!=null&&(g+=f.diff),r.push({datum:f.datum,wochentag:f.wochentag,saldo:Math.round(g*100)/100,diff:f.diff,ist:f.ist,soll:f.soll,tagestyp:f.tagestyp,monatKey:f.monatKey,wocheKey:f.wocheKey,zeitSpannen:f.zeitSpannen});if(((o=h==null?void 0:h.glz)==null?void 0:o.saldoGesamt)!=null){const f=h.glz.saldoGesamt-g;if(Math.abs(f)>.02&&r.length>0){const v=r.length-1;r[v].umbuchung=f,r[v].saldo=Math.round((r[v].saldo+f)*100)/100,g=r[v].saldo}d=h.glz.saldoGesamt}else d=g}return r}function ms(e,t,n=0){if(!e.length)return[];if(t==="alles")return e;const a=Math.min(t,e.length),i=e.length+n*a,r=i-a;return i<=0?[]:r<0?e.slice(0,i):e.slice(r,i)}function et(e,t){return t==="alles"||!e?0:-Math.max(0,Math.ceil(e/t)-1)}function ps(e){return e.length?e[e.length-1].saldo:0}const Tn=new Set(["Urlaub","Arbeitsunfähigkeit","Feiertag","Gleitzeit","Berufsschule","Dienstreise"]),Fn=7;function lt(e){if(!e||e.tagestyp==="Wochenende"||e.wochentag==="SA"||e.wochentag==="SO")return 0;const t=e.ist??0,n=e.soll??0;return t>0?t:Tn.has(e.tagestyp)?Math.max(n,Fn):n>0?n:t}function Tt(e){if(!e||e.tagestyp==="Wochenende"||e.wochentag==="SA"||e.wochentag==="SO")return 0;const t=e.soll??0;return t>0?t:Tn.has(e.tagestyp)?Fn:t}function bs(e){if(!e.length)return 0;const t=e[0].saldo-(e[0].diff??0),n=e[e.length-1].saldo;return Math.round((n-t)*100)/100}const vs=["SO","MO","DI","MI","DO","FR","SA"],ys=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];function ze(e){if(!e)return null;const t=e.trim();return Pa(t,"dd.MM.yyyy",new Date)}function B(e){return L(e,"dd.MM.yyyy")}function Ft(e){return L(e,"EE, dd.MM.yyyy",{locale:te})}function ws(e){return L(e,"dd.MM.")}function ks(e){return vs[e.getDay()]}function xs(e){return ys[e.getDay()]}function $s(e){return xn(e)}function Re(e){const t=wn(e,{weekStartsOn:1}),n=kn(e,{weekStartsOn:1});return`${L(t,"dd.MM.")} – ${L(n,"dd.MM.yyyy")}`}function Ln(e){return`${Ea(e)}-${String(xn(e)).padStart(2,"0")}`}function Lt(e){return L(e,"yyyy-MM")}function _n(e){return L(e,"yyyy-MM-dd")}function Ss(e,t){const n=[];let a=new Date(e);for(;a<=t;)rt(a)||n.push(new Date(a)),a=it(a,1);return n}function Cn(e,t){if(!e||!t)return 0;e>t&&([e,t]=[t,e]);let n=0,a=new Date(e);for(;a<t;)a=it(a,1),rt(a)||n++;return n}function S(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ms(e){return S(e)}const zs=Object.freeze(Object.defineProperty({__proto__:null,addDays:it,dayKey:_n,differenceInCalendarDays:$n,endOfMonth:Fa,endOfWeek:kn,escapeAttr:Ms,escapeHtml:S,formatGermanDate:B,formatGermanDateLong:Ft,formatShortDate:ws,formatWocheRange:Re,getWeekdayCode:ks,getWeekdayName:xs,isSameDay:La,isWeekend:rt,isoWeek:$s,monthKey:Lt,parseGermanDate:ze,startOfMonth:_a,startOfWeek:wn,weekKey:Ln,werktageAbstand:Cn,werktageZwischen:Ss},Symbol.toStringTag,{value:"Module"}));Y.register(fa,ma,pa,ba,va,ya,wa,ka,xa,$a,Sa,Ma,za,Aa);function Z(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function fe(){return{fg:Z("--fg"),fgMuted:Z("--fg-muted"),fgSubtle:Z("--fg-subtle"),border:Z("--border"),surface:Z("--surface"),accent:Z("--accent"),success:Z("--success"),warn:Z("--warn"),danger:Z("--danger"),info:Z("--info"),palette:[Z("--chart-1"),Z("--chart-2"),Z("--chart-3"),Z("--chart-4"),Z("--chart-5"),Z("--chart-6"),Z("--chart-7")]}}function K(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.fgMuted,font:{size:12}}},tooltip:{backgroundColor:e.surface,titleColor:e.fg,bodyColor:e.fg,borderColor:e.border,borderWidth:1,padding:10,displayColors:!0}},scales:{x:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}},y:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}}}}}function _t(e,t){const n=fe();if(pe(e),!(t!=null&&t.length))return;const a=t.map(i=>L(O(i.datum),"dd.MM.")),s=t.map(i=>i.saldo);return s.map(i=>i>=0?n.success:n.danger),new Y(e,{type:"line",data:{labels:a,datasets:[{label:"Tages-Saldo",data:s,borderColor:n.accent,backgroundColor:i=>{const r=i.chart,{ctx:d,chartArea:c,scales:l}=r;return c?Bn(d,c,l.y,n):de(n.accent,.14)},segment:{borderColor:i=>{const r=i.p0.parsed.y,d=i.p1.parsed.y,c=(r+d)/2;return c>=.02?n.success:c<=-.02?n.danger:n.fgMuted}},tension:0,pointRadius:2,pointHoverRadius:6,pointHitRadius:20,pointBackgroundColor:s.map(i=>i>=.02?n.success:i<=-.02?n.danger:n.fgMuted),pointBorderColor:n.surface,pointBorderWidth:1,fill:!0,borderWidth:2}]},options:{...K(n),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},onHover:(i,r,d)=>{const c=d.getElementsAtEventForMode(i,"index",{intersect:!1},!1);d.canvas.style.cursor=c.length>0?"pointer":"default"},onClick:(i,r,d)=>{const c=d.getElementsAtEventForMode(i,"index",{intersect:!1},!1);if(c.length>0){const l=c[0].index,o=t[l];o!=null&&o.datum&&(window.location.hash=`#/tag/${o.datum}`)}},plugins:{...K(n).plugins,legend:{display:!1},tooltip:{enabled:!1,mode:"index",intersect:!1,axis:"x",position:"nearest",external:As(t)}},scales:{...K(n).scales,y:{...K(n).scales.y,ticks:{...K(n).scales.y.ticks,callback:i=>`${i>=0?"+":""}${i.toFixed(1).replace(".",",")}h`}}}}})}function me(e){return function(t){var f,v;const{chart:n,tooltip:a}=t;let s=n.$richTooltipEl;if(!s){s=document.createElement("div"),s.className="saldo-tooltip",document.body.appendChild(s),n.$richTooltipEl=s;const p=n.destroy.bind(n);n.destroy=function(){s.parentNode&&s.parentNode.removeChild(s),p()}}if(a.opacity===0||!((f=a.dataPoints)!=null&&f.length)){s.style.opacity="0";return}const i=e({tooltip:a,chart:n});if(!i){s.style.opacity="0";return}let r=`<div class="saldo-tooltip-title">${Mt(i.title)}</div>`;for(const p of i.rows||[]){const y=p.klasse||"flat";r+=`<div class="saldo-tooltip-row"><span class="saldo-tooltip-label">${Mt(p.label)}</span><span class="saldo-tooltip-value ${y}">${p.value}</span></div>`}(v=i.meta)!=null&&v.length&&(r+=`<div class="saldo-tooltip-meta">${i.meta.map(p=>`<span>${p}</span>`).join("")}</div>`),s.innerHTML=r;const d=n.canvas.getBoundingClientRect(),c=d.left+a.caretX,l=d.top+a.caretY;s.style.opacity="0",s.style.left="0px",s.style.top="0px";const o=s.offsetWidth,u=s.offsetHeight,h=18;let g=c+h;g+o>window.innerWidth-8&&(g=c-h-o);let m=l-u/2;m<8&&(m=8),m+u>window.innerHeight-8&&(m=window.innerHeight-u-8),s.style.left=g+"px",s.style.top=m+"px",s.style.opacity="1"}}function he(e){return e==null?"flat":e>.05?"pos":e<-.05?"neg":"flat"}function ke(e){return e==null?"—":(e>0?"+":"")+e.toFixed(2).replace(".",",")+"h"}function xe(e){return e==null?"—":e.toFixed(2).replace(".",",")+"h"}function As(e){return me(({tooltip:t})=>{const n=t.dataPoints[0].dataIndex,a=e[n];if(!a)return null;const s=[{label:"Saldo",value:ke(a.saldo),klasse:he(a.saldo)}];a.diff!=null&&s.push({label:"Tages-Diff",value:ke(a.diff),klasse:he(a.diff)});const i=[];return a.tagestyp&&i.push(`Typ: ${Mt(a.tagestyp)}`),a.umbuchung&&i.push(`Umbuchung: ${a.umbuchung>=0?"+":""}${a.umbuchung.toFixed(2).replace(".",",")}h`),{title:L(O(a.datum),"EE, dd.MM.yyyy",{locale:te}),rows:s,meta:i}})}function Mt(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ds(e,t){const n=fe();if(pe(e),!(t!=null&&t.length))return;const a=t.map(d=>d.monatKey),s=a.map(d=>{const[c,l]=d.split("-"),o=new Date(parseInt(c,10),parseInt(l,10)-1,1);return L(o,"MMM yyyy",{locale:te})}),i=t.map(d=>{var c;return((c=d.glz)==null?void 0:c.saldoGesamt)??0}),r=t.map(d=>{var c;return((c=d.glz)==null?void 0:c.saldoVorperiode)??null});return new Y(e,{type:"line",data:{labels:s,datasets:[{label:"GLZ-Saldo (Monatsende)",data:i,borderColor:n.accent,backgroundColor:d=>{const c=d.chart,{ctx:l,chartArea:o,scales:u}=c;return o?Bn(l,o,u.y,n):de(n.accent,.14)},segment:{borderColor:d=>{const c=d.p0.parsed.y,l=d.p1.parsed.y,o=(c+l)/2;return o>=.05?n.success:o<=-.05?n.danger:n.fgMuted}},pointBackgroundColor:i.map(d=>d>=.05?n.success:d<=-.05?n.danger:n.fgMuted),pointBorderColor:n.surface,pointBorderWidth:1,tension:0,fill:!0,pointRadius:4,pointHoverRadius:7,pointHitRadius:20}]},options:{...K(n),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},onHover:(d,c,l)=>{const o=l.getElementsAtEventForMode(d,"index",{intersect:!1},!1);l.canvas.style.cursor=o.length>0?"pointer":"default"},onClick:(d,c,l)=>{const o=l.getElementsAtEventForMode(d,"index",{intersect:!1},!1);if(o.length>0){const u=o[0].index,h=a[u];h&&(window.location.hash=`#/kalender/${h}`)}},plugins:{...K(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:me(({tooltip:d})=>{const c=d.dataPoints[0].dataIndex,l=i[c],o=r[c],u=[{label:"Saldo Monatsende",value:ke(l),klasse:he(l)}];if(o!=null){const h=+(l-o).toFixed(2);u.push({label:"Vorperiode",value:ke(o),klasse:he(o)}),u.push({label:"Bewegung",value:ke(h),klasse:he(h)})}return{title:s[c],rows:u}})}}}})}function Ps(e,t){const n=fe();if(pe(e),!(t!=null&&t.length))return;const a=t.map(r=>L(O(r.datum),"dd.MM.")),s=t.map(r=>r.ist??0),i=t.map(r=>Bs(r.tagestyp,n));return new Y(e,{type:"bar",data:{labels:a,datasets:[{label:"Ist-Stunden",data:s,backgroundColor:i,borderRadius:4,borderSkipped:!1,maxBarThickness:32,categoryPercentage:.85,barPercentage:.9}]},options:{...K(n),onHover:(r,d,c)=>{const l=c.getElementsAtEventForMode(r,"nearest",{intersect:!0},!1);c.canvas.style.cursor=l.length>0?"pointer":"default"},onClick:(r,d,c)=>{const l=c.getElementsAtEventForMode(r,"nearest",{intersect:!0},!1);if(l.length>0){const o=t[l[0].index];o!=null&&o.datum&&(window.location.hash=`#/tag/${o.datum}`)}},plugins:{...K(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:me(({tooltip:r})=>{const d=r.dataPoints[0].dataIndex,c=t[d],l=[{label:"Ist",value:xe(c.ist),klasse:"flat"}];c.soll!=null&&l.push({label:"Soll",value:xe(c.soll),klasse:"flat"}),c.diff!=null&&l.push({label:"Diff",value:ke(c.diff),klasse:he(c.diff)});const o=c.tagestyp?[`Typ: ${c.tagestyp}`]:[];return{title:L(O(c.datum),"EE, dd.MM.yyyy",{locale:te}),rows:l,meta:o}})}},scales:{...K(n).scales,y:{...K(n).scales.y,suggestedMin:0,suggestedMax:10}}}})}function Xt(e,t){const n=fe();if(pe(e),!(t!=null&&t.length))return;const a=t.filter(l=>{var o;return((o=l.zeitSpannen)==null?void 0:o.length)&&l.zeitSpannen.some(u=>u.von&&u.bis)}).map(l=>{const o=l.zeitSpannen.filter(g=>g.von&&g.bis).map(g=>({von:ae(g.von),bis:ae(g.bis),vonStr:g.von,bisStr:g.bis})).filter(g=>g.von!=null&&g.bis!=null);if(o.length===0)return null;const u=Math.min(...o.map(g=>g.von)),h=Math.max(...o.map(g=>g.bis));return{...l,_spans:o,_minVon:u,_maxBis:h}}).filter(Boolean);if(!a.length)return;const s=l=>l.ist==null?n.fgMuted:l.ist>=7?n.success:n.danger,i={label:"Tages-Rahmen",data:a.map(l=>[l._minVon,l._maxBis]),backgroundColor:a.map(s),borderColor:a.map(s),borderWidth:0,borderRadius:4,borderSkipped:!1,barPercentage:.7,categoryPercentage:.9,maxBarThickness:18},r=Math.max(0,Math.floor(Math.min(...a.map(l=>l._minVon))/60)*60-60),d=Math.min(24*60,Math.ceil(Math.max(...a.map(l=>l._maxBis))/60)*60+60),c=l=>`${String(Math.floor(l/60)).padStart(2,"0")}:${String(l%60).padStart(2,"0")}`;return new Y(e,{type:"bar",data:{labels:a.map(l=>L(O(l.datum),"dd.MM.")),datasets:[i]},options:{...K(n),interaction:{mode:"index",intersect:!1,axis:"x"},onHover:(l,o,u)=>{const h=u.getElementsAtEventForMode(l,"index",{intersect:!1},!1);u.canvas.style.cursor=h.length>0?"pointer":"default"},onClick:(l,o,u)=>{const h=u.getElementsAtEventForMode(l,"index",{intersect:!1},!1);if(h.length>0){const g=a[h[0].index];g!=null&&g.datum&&(window.location.hash=`#/tag/${g.datum}`)}},plugins:{legend:{display:!1},tooltip:{enabled:!1,external:me(({tooltip:l})=>{const o=a[l.dataPoints[0].dataIndex],u=[];o.ist!=null&&u.push({label:"Ist",value:xe(o.ist),klasse:he(o.ist-7)}),o.soll!=null&&u.push({label:"Soll",value:xe(o.soll)});const h=[`Rahmen: ${c(o._minVon)} – ${c(o._maxBis)}`];return o._spans.length>1&&o._spans.forEach((g,m)=>h.push(`Block ${m+1}: ${g.vonStr} – ${g.bisStr}`)),o.pause!=null&&h.push(`Pause: ${Math.round(o.pause*60)} min`),{title:L(O(o.datum),"EE, dd.MM.yyyy",{locale:te}),rows:u,meta:h}})}},scales:{x:{ticks:{color:n.fgMuted,font:{size:10},maxRotation:60,minRotation:60,autoSkip:!0,maxTicksLimit:40},grid:{display:!1}},y:{min:r,max:d,ticks:{color:n.fgMuted,stepSize:60,callback:l=>c(l)},grid:{color:n.border}}}}})}function Es(e,t){const n=fe();pe(e);const a={};for(const r of t){if(r.tagestyp!=="Stempelzeit"||!r.zeitSpannen||r.zeitSpannen.length<2)continue;const d=Et(r.zeitSpannen);if(d<=0)continue;const c=Math.round(d*60),l=Math.floor(c/15)*15;a[l]=(a[l]??0)+1}const s=Object.keys(a).map(Number).sort((r,d)=>r-d),i=s.map(r=>a[r]);return new Y(e,{type:"bar",data:{labels:s.map(r=>`${r}–${r+14} min`),datasets:[{label:"Häufigkeit",data:i,backgroundColor:n.palette[1],borderRadius:4}]},options:{...K(n),onHover:(r,d,c)=>{const l=c.getElementsAtEventForMode(r,"nearest",{intersect:!0},!1);c.canvas.style.cursor=l.length>0?"pointer":"default"},onClick:(r,d,c)=>{const l=c.getElementsAtEventForMode(r,"nearest",{intersect:!0},!1);if(l.length>0){const o=s[l[0].index];o!=null&&(window.location.hash=`#/kalender/pause/${o}`)}},plugins:{...K(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:me(({tooltip:r})=>{const d=r.dataPoints[0].dataIndex;return{title:"Pause-Länge "+(s[d]!=null?`${s[d]}–${s[d]+14} min`:""),rows:[{label:"Häufigkeit",value:`${i[d]} Tag${i[d]===1?"":"e"}`}]}})}}}})}function Ts(e,t){const n=fe();pe(e);const a=["MO","DI","MI","DO","FR"],s={},i={};for(const c of a)s[c]=0,i[c]=0;for(const c of t)a.includes(c.wochentag)&&(c.ist==null||c.ist===0||(s[c.wochentag]+=c.ist,i[c.wochentag]+=1));const r=a.map(c=>i[c]>0?s[c]/i[c]:0),d={id:"wochentag-datalabels",afterDatasetsDraw(c){const{ctx:l,data:o,scales:u}=c;l.save(),l.fillStyle=n.fg,l.font="600 12px system-ui",l.textAlign="center",l.textBaseline="bottom",c.getDatasetMeta(0).data.forEach((g,m)=>{const f=o.datasets[0].data[m];if(!f||f===0)return;const v=f.toFixed(2).replace(".",",")+"h";l.fillText(v,g.x,g.y-6)}),l.restore()}};return new Y(e,{type:"bar",data:{labels:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"],datasets:[{label:"Ø Ist-Stunden",data:r,backgroundColor:n.palette[2],borderRadius:4,maxBarThickness:56,categoryPercentage:.7,barPercentage:.8}]},options:{...K(n),layout:{padding:{top:24}},onHover:(c,l,o)=>{const u=o.getElementsAtEventForMode(c,"nearest",{intersect:!0},!1);o.canvas.style.cursor=u.length>0?"pointer":"default"},onClick:(c,l,o)=>{const u=o.getElementsAtEventForMode(c,"nearest",{intersect:!0},!1);if(u.length>0){const h=a[u[0].index];h&&(window.location.hash=`#/kalender/wochentag/${h}`)}},plugins:{...K(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:me(({tooltip:c})=>{const l=c.dataPoints[0].dataIndex,o=a[l];return{title:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"][l],rows:[{label:"Ø Stunden",value:xe(r[l])},{label:"Anzahl Tage",value:String(i[o]||0)}]}})}},scales:{...K(n).scales,y:{...K(n).scales.y,suggestedMax:Math.max(...r)*1.15}}},plugins:[d]})}function Fs(e,t){const n=fe();pe(e);const a={};for(const r of t)!r.tagestyp||r.tagestyp==="Wochenende"||(a[r.tagestyp]=(a[r.tagestyp]??0)+1);const s=Object.keys(a),i=Object.values(a);return new Y(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:s.map((r,d)=>n.palette[d%n.palette.length]),borderColor:n.surface,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,onHover:(r,d,c)=>{const l=c.getElementsAtEventForMode(r,"nearest",{intersect:!0},!1);c.canvas.style.cursor=l.length>0?"pointer":"default"},onClick:(r,d,c)=>{const l=c.getElementsAtEventForMode(r,"nearest",{intersect:!0},!1);if(l.length>0){const o=s[l[0].index];o&&(window.location.hash=`#/kalender/typ/${encodeURIComponent(o)}`)}},plugins:{legend:{position:"right",labels:{color:n.fgMuted,font:{size:12}}},tooltip:{enabled:!1,external:me(({tooltip:r})=>{const d=r.dataPoints[0].dataIndex,c=i.reduce((o,u)=>o+u,0),l=c?i[d]/c*100:0;return{title:s[d],rows:[{label:"Anzahl",value:`${i[d]} Tag${i[d]===1?"":"e"}`},{label:"Anteil",value:l.toFixed(1).replace(".",",")+"%"}]}})}}}})}function Ls(e,t){const n=fe();pe(e);const a={};for(const o of t){const u=o.wocheKey;a[u]??(a[u]={ist:0,soll:0,days:0,ersterTag:null,monatKey:null}),a[u].ist+=lt(o),a[u].soll+=Tt(o),a[u].days++,(!a[u].ersterTag||o.datum&&o.datum<a[u].ersterTag)&&(a[u].ersterTag=o.datum,a[u].monatKey=o.monatKey)}const s=Object.keys(a).sort();if(!s.length)return;const i=s.map(o=>+a[o].ist.toFixed(2)),r=s.map(o=>+a[o].soll.toFixed(2)),d=s.map(o=>{const u=a[o].ersterTag;return u?Re(O(u)):""}),c=i.map((o,u)=>o>=r[u]+.1?n.success:o<=r[u]-.1?n.danger:n.fgMuted),l={id:"wochenstunden-soll-linie",afterDatasetsDraw(o){const{ctx:u,scales:h}=o;h.x;const g=h.y;u.save(),u.strokeStyle=n.fgSubtle||n.fgMuted,u.lineWidth=1,u.setLineDash([4,4]),u.beginPath(),o.getDatasetMeta(0).data.forEach((f,v)=>{const p=f.x,y=f.width/2+2,$=g.getPixelForValue(r[v]??35);u.moveTo(p-y,$),u.lineTo(p+y,$)}),u.stroke(),u.restore()}};return new Y(e,{type:"bar",data:{labels:s.map(o=>"KW "+o.split("-")[1]),datasets:[{label:"Wochenstunden",data:i,backgroundColor:c.map(o=>de(o,.55)),borderColor:c,borderWidth:1.5,borderRadius:4,maxBarThickness:32,categoryPercentage:.85,barPercentage:.9}]},options:{...K(n),onHover:(o,u,h)=>{const g=h.getElementsAtEventForMode(o,"nearest",{intersect:!0},!1);h.canvas.style.cursor=g.length>0?"pointer":"default"},onClick:(o,u,h)=>{var m;const g=h.getElementsAtEventForMode(o,"nearest",{intersect:!0},!1);if(g.length>0){const f=g[0].index,v=s[f],p=v?(m=a[v])==null?void 0:m.monatKey:null;v&&p?window.location.hash=`#/kalender/${p}/${v}`:v&&(window.location.hash="#/kalender")}},plugins:{...K(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:me(({tooltip:o})=>{const u=o.dataPoints[0].dataIndex,h=s[u],g=i[u],m=r[u],f=+(g-m).toFixed(2),v=d[u];return{title:v?"KW "+h.split("-")[1]+" · "+v:"KW "+h.split("-")[1]+" · "+h.split("-")[0],rows:[{label:"Ist",value:xe(g),klasse:"flat"},{label:"Soll",value:xe(m),klasse:"flat"},{label:"Diff",value:ke(f),klasse:he(f)}]}})}},scales:{...K(n).scales,y:{...K(n).scales.y,beginAtZero:!0,ticks:{...K(n).scales.y.ticks,callback:o=>`${o.toFixed(0)}h`}}}},plugins:[l]})}function pe(e){const t=Y.getChart(e);t&&t.destroy()}function _s(){if(Y.instances){for(const e of Object.values(Y.instances))if(e!=null&&e.canvas&&!document.body.contains(e.canvas))try{e.destroy()}catch{}}document.querySelectorAll(".saldo-tooltip").forEach(e=>e.remove())}function de(e,t){const n=e.replace("#","").trim();if(n.length!==6&&n.length!==3)return e;const a=n.length===3?n.split("").map(d=>d+d).join(""):n,s=parseInt(a.slice(0,2),16),i=parseInt(a.slice(2,4),16),r=parseInt(a.slice(4,6),16);return`rgba(${s}, ${i}, ${r}, ${t})`}function Bn(e,t,n,a){return Cs(e,t,n,0,a)}function Cs(e,t,n,a,s){const{top:i,bottom:r}=t,d=e.createLinearGradient(0,i,0,r),c=n.min,l=n.max,o=l-c;if(o<=0)return de(s.success,.14);let u=(l-a)/o;return u=Math.max(0,Math.min(1,u)),d.addColorStop(0,de(s.success,.28)),d.addColorStop(Math.max(0,u-.001),de(s.success,.06)),d.addColorStop(Math.min(1,u+.001),de(s.danger,.06)),d.addColorStop(1,de(s.danger,.28)),d}function Bs(e,t){const n=String(e??"").toLowerCase();return n.includes("stempel")?t.palette[0]:n.includes("berufs")?t.palette[1]:n.includes("urlaub")?t.palette[2]:n.includes("feiertag")?t.fgSubtle:n.includes("dienst")?t.palette[3]:n.includes("krank")?t.palette[4]:t.palette[5]}const On=[];let Kn=null;function j(e,t){const n=e.split("/").filter(Boolean),a=[],s=new RegExp("^/?"+n.map(i=>i.startsWith(":")?(a.push(i.slice(1)),"([^/]+)"):Vs(i)).join("/")+"/?$");On.push({pattern:e,regex:s,paramNames:a,render:t})}function Os(e){e.startsWith("#")||(e="#"+e),window.location.hash===e?se():window.location.hash=e}function Ks(e,{onNavigate:t}={}){window.addEventListener("hashchange",se),se.rootEl=e,se.onNavigate=t,se()}async function se(){var a;_s();const e=se.rootEl,t=window.location.hash.slice(1)||"/",n=t.startsWith("/")?t:`/${t}`;for(const s of On){const i=s.regex.exec(n);if(i){const r={};s.paramNames.forEach((d,c)=>r[d]=decodeURIComponent(i[c+1])),Kn=n,(a=se.onNavigate)==null||a.call(se,n),Ns(n);try{e.classList.remove("view-enter"),await s.render({params:r,path:n,root:e}),e.classList.add("view-enter")}catch(d){console.error("Route render error:",d),e.innerHTML=`<div class="empty-state">
          <div class="empty-state-icon">⚠</div>
          <h2>Fehler beim Anzeigen</h2>
          <p>${Qt(d.message||String(d))}</p>
        </div>`}return}}e.innerHTML=`<div class="empty-state">
    <div class="empty-state-icon">?</div>
    <h2>Seite nicht gefunden</h2>
    <p>Die Route <code>${Qt(n)}</code> existiert nicht.</p>
    <a href="#/" class="btn primary">Zum Dashboard</a>
  </div>`}function Ns(e){document.querySelectorAll("[data-route]").forEach(n=>{const a=n.getAttribute("data-route"),s=a==="/"?e==="/":e===a||e.startsWith(a+"/");n.classList.toggle("active",s)});const t=e==="/"?"dashboard":e.split("/").filter(Boolean)[0];document.body.setAttribute("data-view",t||"dashboard")}function Ws(){Kn!=null&&se()}function Vs(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Qt(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const Is="modulepreload",Hs=function(e){return"/better-ess/"+e},en={},le=function(t,n,a){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),d=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=Hs(c),c in en)return;en[c]=!0;const l=c.endsWith(".css"),o=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${o}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":Is,l||(u.as="script"),u.crossOrigin="",u.href=c,d&&u.setAttribute("nonce",d),document.head.appendChild(u),l)return new Promise((h,g)=>{u.addEventListener("load",h),u.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(r){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=r,window.dispatchEvent(d),!d.defaultPrevented)throw r}return s.then(r=>{for(const d of r||[])d.status==="rejected"&&i(d.reason);return t().catch(i)})},w=new Ca("zeitnachweis");w.version(1).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"});w.version(2).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});w.version(3).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});w.version(4).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});w.version(5).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"});w.version(6).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});w.version(7).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key",fahrtgeldTemplate:"id"}).upgrade(async e=>{const t=await e.table("profil").get("self");if(!t)return;let n=t.ueber18??!0;if(t.geburtsdatum){const s=new Date(t.geburtsdatum),i=new Date;n=i.getFullYear()-s.getFullYear()-(i<new Date(i.getFullYear(),s.getMonth(),s.getDate())?1:0)>=18}const a={id:"self",ueber18:n,sollStundenProWoche:t.sollStundenProWoche??35,sollStundenProTag:t.sollStundenProTag??7,berufsschulMuster:t.berufsschulMuster??{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null},zeitwirtschaftEmail:t.zeitwirtschaftEmail||"",zeitwirtschaftAnrede:t.zeitwirtschaftAnrede||"",pausenRegel:t.pausenRegel??"auto",erstelltAm:t.erstelltAm??new Date().toISOString(),updatedAt:new Date().toISOString()};await e.table("profil").put(a)});w.version(8).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key",fahrtgeldTemplate:"id"}).upgrade(async e=>{const t=await e.table("profil").get("self");if(!t)return;const n={...t,zeitwirtschaftEmail:t.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:t.zeitwirtschaftAnrede||"Frau Kanarya",fahrtgeldEmpfaenger:t.fahrtgeldEmpfaenger||"annika.mayer@putzmeister.com",fahrtgeldCc:t.fahrtgeldCc||"anika.kailer@putzmeister.com",fahrtgeldAnrede:t.fahrtgeldAnrede||"Frau Mayer",updatedAt:new Date().toISOString()};"name"in n&&delete n.name,await e.table("profil").put(n)});async function Rs(){try{const{erkenneBerufsschulMuster:e}=await le(async()=>{const{erkenneBerufsschulMuster:r}=await Promise.resolve().then(()=>li);return{erkenneBerufsschulMuster:r}},void 0),t=await w.tage.toArray();if(!t.length)return!1;const n=e(t),a=await w.profil.get("self");if(!a)return!1;const s=a.berufsschulMuster??{};return JSON.stringify(s.wochentageWoechentlich??[])!==JSON.stringify(n.wochentageWoechentlich)||JSON.stringify(s.wochentage14Taegig??[])!==JSON.stringify(n.wochentage14Taegig)||(s.referenzDatum14Taegig??null)!==(n.referenzDatum14Taegig??null)||(s.stundenProTag??null)!==(n.stundenProTag??null)||(s.halbtags??!1)!==(n.halbtags??!1)?(await w.profil.put({...a,berufsschulMuster:n}),!0):!1}catch(e){return console.warn("[db] refreshBerufsschulMuster fehlgeschlagen:",e),!1}}async function qs(){try{const{weekKey:e}=await le(async()=>{const{weekKey:s}=await Promise.resolve().then(()=>zs);return{weekKey:s}},void 0),{parseISO:t}=await le(async()=>{const{parseISO:s}=await import("./datefns-C8_rfWt_.js").then(i=>i.r);return{parseISO:s}},[]),n=await w.tage.toArray(),a=[];for(const s of n){if(!s.datum)continue;const i=e(t(s.datum));i!==s.wocheKey&&a.push({...s,wocheKey:i})}return a.length&&await w.tage.bulkPut(a),a.length}catch(e){return console.warn("[db] refreshWocheKeys fehlgeschlagen:",e),0}}async function Zs(){try{const e=await w.mailVorlagen.toArray(),t=e.some(a=>a.betreff&&!a.betreff.startsWith("Bitte um Zeitkorrektur im ESS")),n=e.some(a=>a.text&&!/Vielen Dank!\s*$/.test(a.text));return t||n?(await w.mailVorlagen.clear(),!0):!1}catch(e){return console.warn("[db] ensureMailVorlagenFresh fehlgeschlagen:",e),!1}}async function js(){const e=await w.einstellungen.get("__migration_reset");return(e==null?void 0:e.value)===!0?(await w.einstellungen.delete("__migration_reset"),!0):!1}async function ie(){return await w.profil.get("self")??Nn()}async function tt(e){const t={...e,id:"self",updatedAt:new Date().toISOString()};return await w.profil.put(t),t}function Nn(){return{id:"self",ueber18:!0,sollStundenProWoche:35,sollStundenProTag:7,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1},zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:"Frau Kanarya",fahrtgeldEmpfaenger:"annika.mayer@putzmeister.com",fahrtgeldCc:"anika.kailer@putzmeister.com",fahrtgeldAnrede:"Frau Mayer",pausenRegel:"auto",erstelltAm:new Date().toISOString()}}async function Ve(e,t=null){const n=await w.einstellungen.get(e);return n?n.value:t}async function nt(e,t){await w.einstellungen.put({key:e,value:t})}async function Pe(){const e=await Ve("isAzubiOverride",null);if(e===!0||e===!1)return e;const t=await Ve("mitarbeiterkreis",null);return t==null?!0:String(t).trim().toUpperCase()==="AZ"}async function Us(e){e==null?await w.einstellungen.delete("isAzubiOverride"):await nt("isAzubiOverride",!!e)}async function Gs(e){e!=null&&await nt("mitarbeiterkreis",String(e))}async function oe(){return await w.tage.orderBy("datum").toArray()}async function Js(e,t,n){const a=n instanceof Date?n.toISOString():typeof n=="string"&&n?n:null,s=(l,o)=>o?l?l>o:!1:!0;let i=0,r=0,d=0,c=0;if(e.length){const l=e.map(h=>h.datum),o=await w.tage.bulkGet(l),u=[];for(let h=0;h<e.length;h++){const g={...e[h],_quellStichtag:a},m=o[h];!m||s(a,m._quellStichtag)?u.push(g):r++}u.length&&(await w.tage.bulkPut(u),i=u.length)}if(t.length){const l=t.map(h=>h.monatKey),o=await w.monate.bulkGet(l),u=[];for(let h=0;h<t.length;h++){const g={...t[h],_quellStichtag:a},m=o[h];!m||s(a,m._quellStichtag)?u.push(g):c++}u.length&&(await w.monate.bulkPut(u),d=u.length)}return{tage:i,monate:d,skippedTage:r,skippedMonate:c}}async function ot(){return await w.monate.orderBy("monatKey").toArray()}async function Ys(e){return await w.uploads.add({...e,hochladeDatum:new Date().toISOString()})}async function qe(){return await w.uploads.orderBy("hochladeDatum").last()}async function Wn(){return await w.uploads.orderBy("hochladeDatum").reverse().toArray()}async function Ne(){return await w.fahrtgeldTemplate.get("self")}async function Ct(e){await w.fahrtgeldTemplate.put({id:"self",...e})}async function Xs(){await w.fahrtgeldTemplate.delete("self")}async function Qs(){await Promise.all([w.profil.clear(),w.tage.clear(),w.monate.clear(),w.uploads.clear(),w.einstellungen.clear(),w.mailVorlagen.clear(),w.warnungDismissals.clear(),w.fahrtgeldTemplate.clear()])}async function Vn(){await Promise.all([w.tage.clear(),w.monate.clear(),w.uploads.clear(),w.warnungDismissals.clear()])}async function ei(){const[e,t,n,a,s,i,r]=await Promise.all([w.profil.toArray(),w.tage.toArray(),w.monate.toArray(),w.uploads.toArray(),w.einstellungen.toArray(),w.mailVorlagen.toArray(),w.warnungDismissals.toArray()]);return{version:1,exportedAt:new Date().toISOString(),data:{profil:e,tage:t,monate:n,uploads:a,einstellungen:s,mailVorlagen:i,warnungDismissals:r}}}async function ti(e){if(!e||e.version!==1||!e.data)throw new Error("Ungültiges oder inkompatibles Backup-Format.");const t=e.data;await w.transaction("rw",w.profil,w.tage,w.monate,w.uploads,w.einstellungen,w.mailVorlagen,w.warnungDismissals,async()=>{var n,a,s,i,r,d,c;(n=t.profil)!=null&&n.length&&await w.profil.bulkPut(t.profil),(a=t.tage)!=null&&a.length&&await w.tage.bulkPut(t.tage),(s=t.monate)!=null&&s.length&&await w.monate.bulkPut(t.monate),(i=t.uploads)!=null&&i.length&&await w.uploads.bulkPut(t.uploads),(r=t.einstellungen)!=null&&r.length&&await w.einstellungen.bulkPut(t.einstellungen),(d=t.mailVorlagen)!=null&&d.length&&await w.mailVorlagen.bulkPut(t.mailVorlagen),(c=t.warnungDismissals)!=null&&c.length&&await w.warnungDismissals.bulkPut(t.warnungDismissals)})}async function at(e,t){await w.mailVorlagen.put({key:e,...t})}async function ni(e){return await w.mailVorlagen.get(e)}async function ct(){return await w.mailVorlagen.toArray()}async function ai(e,t){await w.warnungDismissals.put({key:`${e}-${t}`,datum:e,typ:t,dismissedAt:new Date().toISOString()})}async function si(){return await w.warnungDismissals.toArray()}function ii(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
    <polyline points="10 17 15 12 10 7"/>
    <line x1="15" y1="12" x2="3" y2="12"/>
  </svg>`}function ri(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>`}function In(e,t={}){const{size:n=20,layout:a="inline"}=t;return e?`
    <div class="kommen-gehen ${a}">
      <span class="kg-block kommen" title="Kommen (frühester Einstempel)">
        ${ii(n)}
        <span class="kg-zeit tabular">${e.kommen}</span>
      </span>
      <span class="kg-block gehen" title="Gehen (spätester Ausstempel)">
        ${ri(n)}
        <span class="kg-zeit tabular">${e.gehen}</span>
      </span>
    </div>
  `:'<span class="kg-empty">—</span>'}function Hn(e){var g;const t=e.filter(m=>m.tagestyp==="Berufsschule");if(t.length<2)return{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1};const n=t.slice().sort((m,f)=>m.datum.localeCompare(f.datum)),a=O(n[n.length-1].datum).getTime();let s=n;for(const m of[180,270,365]){const f=a-m*864e5,v=n.filter(p=>O(p.datum).getTime()>=f);if(v.length>=4){s=v;break}s=v.length>=2?v:n}const i={};for(const m of s)i[g=m.wochentag]??(i[g]=[]),i[m.wochentag].push(m);const r=[],d=[];let c=null;for(const[m,f]of Object.entries(i)){if(f.sort((D,x)=>D.datum.localeCompare(x.datum)),f.length<2)continue;const v=[];for(let D=1;D<f.length;D++)v.push($n(O(f[D].datum),O(f[D-1].datum)));const p=tn(v),y=O(f[f.length-1].datum).getTime();(a-y)/864e5>2*p+7||(p<=10?r.push(m):p<=18&&(d.push(m),(!c||O(f[0].datum)<O(c))&&(c=f[0].datum)))}const l=s.map(m=>m.ist).filter(m=>m!=null&&m>0),o=tn(l),u=o!=null?Math.round(o*4)/4:null,h=u!=null&&u<5;return{wochentageWoechentlich:r,wochentage14Taegig:d,referenzDatum14Taegig:c,stundenProTag:u,halbtags:h}}function tn(e){if(!e.length)return null;const t=e.slice().sort((a,s)=>a-s),n=Math.floor(t.length/2);return t.length%2?t[n]:(t[n-1]+t[n])/2}function Bt(e,t){var s,i;if(!t)return!1;const a=["SO","MO","DI","MI","DO","FR","SA"][e.getDay()];if((s=t.wochentageWoechentlich)!=null&&s.includes(a))return!0;if((i=t.wochentage14Taegig)!=null&&i.includes(a)&&t.referenzDatum14Taegig){const r=O(t.referenzDatum14Taegig),d=Ta(e,r,{weekStartsOn:1});if(d>=0&&d%2===0)return!0}return!1}function Rn(e,t=null){return(e==null?void 0:e.halbtags)===!0&&(e==null?void 0:e.stundenProTag)!=null&&e.stundenProTag>0?e.stundenProTag:t}const li=Object.freeze(Object.defineProperty({__proto__:null,erkenneBerufsschulMuster:Hn,erwarteteBerufsschulStunden:Rn,istBerufsschulTagLautMuster:Bt},Symbol.toStringTag,{value:"Module"})),_e={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function dt(e,t,n,a=new Set,s={}){var g,m;const i=s.isAzubi!==!1,r=[],d=n??new Date,c=new Map(e.map(f=>[f.datum,f]));if(!e.length)return r;const l=O(e[0].datum),o=d,u=L(o,"yyyy-MM-dd");for(let f=new Date(l);f<=o;f=it(f,1)){if(rt(f))continue;const v=L(f,"yyyy-MM-dd"),p=c.get(v),y=Cn(f,o),$=v===u,D=!p||!p.tagestyp&&!p.ist&&(((g=p.zeitSpannen)==null?void 0:g.length)??0)===0;if(!($&&D)){if(D){if(i&&Bt(f,t.berufsschulMuster)){const x=y>=4?"error":y>=2?"warn":"info";Ce(r,a,{datum:v,wochentag:(p==null?void 0:p.wochentag)??Ge(f),typ:"bs_tag_fehlt",schweregrad:x,titel:`Berufsschultag nicht eingetragen: ${B(f)}`,beschreibung:`Laut deinem Profil hast du am ${_e[Ge(f)]}, ${B(f)} Berufsschule. Im Zeitnachweis fehlt der Tag bisher${y>=4?" — bitte bei der Zeitwirtschaft nachhaken":""}.`,alter:y,mailVorlageKey:x==="error"?"bs_tag_fehlt":null})}else{const x=y>=4?"error":y>=2?"warn":"info";Ce(r,a,{datum:v,wochentag:Ge(f),typ:"stempelzeit_fehlt",schweregrad:x,titel:`Keine Stempelzeit am ${B(f)}`,beschreibung:`Am ${_e[Ge(f)]}, ${B(f)} wurde keine Stempelzeit erfasst. Falls du an diesem Tag im Haus warst, sollte die Zeitwirtschaft das nachtragen${y>=4?" — es ist inzwischen ≥4 Werktage her":""}.`,alter:y,mailVorlageKey:x==="error"?"stempelzeit_fehlt":null})}continue}if(i&&p.tagestyp==="Berufsschule"&&p.ist!=null){const x=Rn(t.berufsschulMuster,p.soll);x!=null&&p.ist<x-.5&&Ce(r,a,{datum:v,wochentag:p.wochentag,typ:"bs_stunden_falsch",schweregrad:"error",titel:`Berufsschultag mit zu wenig Stunden: ${B(f)}`,beschreibung:`Am ${_e[p.wochentag]}, ${B(f)} sind nur ${p.ist.toFixed(2).replace(".",",")}h gebucht statt der für dich üblichen ${x.toFixed(2).replace(".",",")}h. Die Zeitwirtschaft hat den Berufsschultag möglicherweise nur halb erfasst.`,ist:p.ist,soll:x,mailVorlageKey:"bs_stunden_falsch"})}if(p.tagestyp==="Stempelzeit"&&((m=p.zeitSpannen)==null?void 0:m.length)>1&&v>=Dn){const x=Pn(p,t);(x==null?void 0:x.typ)==="fehler_zeitwirtschaft"&&x.unrechtmaessigerVerlustMin>=5?Ce(r,a,{datum:v,wochentag:p.wochentag,typ:"pausen_abzug",schweregrad:x.unrechtmaessigerVerlustMin>=15?"error":"warn",titel:`Pausen-Abzug fehlerhaft (${B(f)})`,beschreibung:`Am ${_e[p.wochentag]}, ${B(f)} wurden ${Math.round(x.abgezogenePause*60)} min Pause abgezogen. Gestempelt: ${Math.round(x.gestempeltePause*60)} min, gesetzlich nötig (${x.gesetz.toUpperCase()}): ${Math.round(x.gesetzlichePflicht*60)} min. Differenz von ${x.unrechtmaessigerVerlustMin} min ist unerklärlich.`,verlustMinuten:x.unrechtmaessigerVerlustMin,abgezogen:x.abgezogenePause,gestempelt:x.gestempeltePause,mailVorlageKey:"pausen_abzug"}):(x==null?void 0:x.typ)==="aufstockung_legal"&&x.aufstockungMin>=10&&Ce(r,a,{datum:v,wochentag:p.wochentag,typ:"pausen_aufstockung",schweregrad:"info",titel:`Zu wenig Pause gestempelt (${B(f)}) — ${x.aufstockungMin} min automatisch aufgestockt`,beschreibung:`Am ${_e[p.wochentag]}, ${B(f)} hast du nur ${Math.round(x.gestempeltePause*60)} min Pause gemacht. Gesetz (${x.gesetz.toUpperCase()}) schreibt ${Math.round(x.gesetzlichePflicht*60)} min vor. Fehlende ${x.aufstockungMin} min wurden als Pause gewertet — das ist legal, aber du verlierst dadurch Arbeitszeit. Tipp: mach beim nächsten Mal etwas länger Mittag.`})}}}const h={error:0,warn:1,info:2};return r.sort((f,v)=>{const p=h[f.schweregrad]-h[v.schweregrad];return p!==0?p:v.datum.localeCompare(f.datum)}),r}function qn(e,t=new Set){var a,s,i,r;const n=[];for(const d of e){const c=((a=d.glz)==null?void 0:a.saldoVorperiode)??0,l=((s=d.glz)==null?void 0:s.saldoAktuellePeriode)??0,o=((i=d.glz)==null?void 0:i.umgebuchteStunden)??0,u=(r=d.glz)==null?void 0:r.saldoGesamt;if(u==null)continue;const h=c+l+o,g=Math.abs(u-h);if(g>.03){const m=`${d.monatKey}-saldo_plausi`;t.has(m)||n.push({datum:`${d.monatKey}-01`,wochentag:"",typ:"saldo_plausi",schweregrad:"warn",titel:`Saldo-Differenz im Monat ${d.monatKey}`,beschreibung:`Rechnung: Vorperiode ${c.toFixed(2)} + aktuelle Periode ${l.toFixed(2)} + umgebucht ${o.toFixed(2)} = ${h.toFixed(2)}, aber dein Saldo wird mit ${u.toFixed(2)} angezeigt. Abweichung: ${g.toFixed(2)}h.`,soll:h,ist:u})}}return n}function Ce(e,t,n){const a=`${n.datum}-${n.typ}`;t.has(a)||(n.id=a,e.push(n))}function Ge(e){return["SO","MO","DI","MI","DO","FR","SA"][e.getDay()]}const oi={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"},Ie={bs_tag_fehlt:{key:"bs_tag_fehlt",titel:"Berufsschultag fehlt",beschreibung:"Wenn ein Berufsschultag komplett nicht im Zeitnachweis eingetragen wurde.",betreff:"Bitte um Zeitkorrektur im ESS  - Fehlender Berufsschultag {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

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

Vielen Dank!`},fahrgeld_abgabe:{key:"fahrgeld_abgabe",titel:"Fahrgelderstattung abgeben",beschreibung:"Mail an die Personalabteilung mit der monatlichen Fahrgelderstattungs-Excel.",betreff:"Fahrgelderstattung {monat_jahr} {name}",text:`Guten Tag {personal_anrede},

hiermit sende ich Ihnen das ausgefüllte Dokument für die Fahrgelderstattung vom {monat_jahr} zu.
Vielen Dank!`}};function Ze(e,t){const n=Ie[e];return n?{...n,...t??{}}:null}function Zn(e,t){const n=nn(e.text,t);return{betreff:nn(e.betreff,t),text:n}}function nn(e,t){return e.replace(/\{(\w+)\}/g,(n,a)=>t[a]!=null?String(t[a]):`{${a}}`)}function Ot(e,t){const n=t.datum?new Date(t.datum):null;return{name:"",personalnr:"",kostenstelle:"",datum:n?Ft(n).split(", ")[1]:"",wochentag:oi[t.wochentag]??t.wochentag??"",zeitwirtschaft_anrede:e.zeitwirtschaftAnrede||"Frau Kanarya",zeitwirtschaft_email:e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",personal_anrede:e.personalAnrede||e.fahrtgeldAnrede||"Frau Mayer",ist:t.ist!=null?t.ist.toFixed(2).replace(".",","):"",soll:t.soll!=null?t.soll.toFixed(2).replace(".",","):"",abgezogen:t.abgezogen!=null?Math.round(t.abgezogen*60):"",gestempelt:t.gestempelt!=null?Math.round(t.gestempelt*60):"",verlust:t.verlustMinuten??""}}function Kt(e,t,n){const a=Zn(t,n),s=e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",i=new URLSearchParams;return i.set("subject",a.betreff),i.set("body",a.text),`mailto:${s}?${i.toString().replace(/\+/g,"%20")}`}let ci=0;function J(e,{type:t="info",duration:n=3500}={}){const a=document.getElementById("toast-root");if(!a)return;const s=document.createElement("div");s.className=`toast ${t}`,s.textContent=e,s.dataset.id=++ci,a.appendChild(s),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateY(-8px)",s.style.transition="opacity 220ms, transform 220ms",setTimeout(()=>s.remove(),250)},n)}function st(e){return J(e,{type:"error",duration:6e3})}function N(e){return J(e,{type:"success"})}const di=3,ui=2.5,gi={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function ut(e,t={}){if(!(e!=null&&e.length))return'<p style="color: var(--fg-muted);">Keine Tage im Zeitraum.</p>';const n=new Map;for(const i of t.warnungen??[])n.has(i.datum)||n.set(i.datum,[]),n.get(i.datum).push(i);const a=[];let s=null;for(const i of e)(!s||s.key!==i.wocheKey)&&(s={key:i.wocheKey,tage:[]},a.push(s)),s.tage.push(i);return`<div class="tages-liste">${a.map(i=>hi(i,n)).join("")}</div>`}function hi(e,t){var o;const n=e.tage.reduce((u,h)=>u+lt(h),0),a=e.tage.reduce((u,h)=>u+(h.diff??0),0),s=(o=e.tage[0])==null?void 0:o.datum,i=s?Re(O(s)):"",r=e.key?e.key.split("-")[1]:"?",d=a>.05?"pos":a<-.05?"neg":"flat",c=(a>0?"+":"")+a.toFixed(2).replace(".",",")+"h",l=n.toFixed(2).replace(".",",")+"h";return`
    <div class="woche-group">
      <div class="woche-header">
        <div class="woche-header-titel">
          <span class="woche-header-kw">KW ${S(r)}</span>
          <span class="woche-header-range tabular">${S(i)}</span>
        </div>
        <div class="woche-header-stats">
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Ist</span>
            <span class="woche-header-ist tabular">${l}</span>
          </span>
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Diff</span>
            <span class="woche-header-diff tabular ${d}">${c}</span>
          </span>
        </div>
      </div>
      <div class="woche-tage">
        ${e.tage.map(u=>fi(u,(t==null?void 0:t.get(u.datum))??[])).join("")}
      </div>
    </div>
  `}function fi(e,t=[]){const n=e.diff??0,a=n>0,s=a?di:ui,i=Math.min(150,Math.abs(n)/s*50),r=a?"var(--success)":n<0?"var(--danger)":"var(--fg-subtle)",d=An(e.zeitSpannen),c=e.saldo??0,l=t.length>0,o=l?pi(t):"",u=l?t.map(g=>`${g.titel}${g.beschreibung?`
`+g.beschreibung:""}`).join(`

`):"",h=l?t[0].schweregrad:null;return`
    <a href="#/tag/${e.datum}" class="tag-row${l?" has-warn severity-"+h:""}">
      <div class="tag-row-datum">
        <div class="tabular">${S(B(new Date(e.datum)))}</div>
        <div class="tag-row-wd">${mi(e.wochentag)}</div>
      </div>
      <div class="tag-row-warn-cell" aria-hidden="${l?"false":"true"}">
        ${l?`<span class="tag-row-warn severity-${h}" title="${S(u)}">${o}${t.length>1?" "+t.length:""}</span>`:""}
      </div>
      <div class="tag-row-typ">
        ${e.tagestyp?`<span class="pill ${bi(e.tagestyp)}">${S(e.tagestyp)}</span>`:'<span style="color: var(--fg-subtle); font-size: 12px;">—</span>'}
      </div>
      <div class="tag-row-kg">
        ${In(d,{size:18})}
      </div>
      <div class="tag-row-ist tabular">
        ${(()=>{if(e.ist==null)return'<div class="ist-wert">—</div>';const g=We(e.ist),[m,f]=g.split(":");return e.ist<=0?`<div class="ist-wert">${g}</div>`:`<div class="ist-display" title="Klick auf H oder M zum Kopieren">
            <button class="ist-part" data-val="${m}" title="${m} Stunden kopieren">${m}</button><span class="ist-sep">:</span><button class="ist-part" data-val="${f}" title="${f} Minuten kopieren">${f}</button>
          </div>`})()}
        <div style="color: var(--fg-subtle); font-size: 11px;">Soll ${e.soll!=null?We(e.soll):"—"}</div>
      </div>
      <div class="tag-row-bar">
        <div class="bar-track">
          <div class="bar-zero"></div>
          <div class="bar-fill ${a?"pos":"neg"}" style="width: ${i}%; background: ${r};"></div>
        </div>
      </div>
      <div class="tag-row-diff tabular" style="color: ${a?"var(--success)":n<0?"var(--danger)":"var(--fg-muted)"};">
        ${n!==0?(a?"+":"")+n.toFixed(2).replace(".",",")+"h":"0,00h"}
      </div>
      <div class="tag-row-saldo tabular" title="Gesamt-Saldo nach diesem Tag" style="color: var(--fg-muted); font-size: 12px; text-align: right; line-height: 1.15;">
        <div>${c>=0?"+":""}${c.toFixed(2).replace(".",",")}h</div>
        <div style="color: var(--fg-subtle); font-size: 10px; font-weight: 500; letter-spacing: 0.02em;">Saldo nach Tag</div>
      </div>
    </a>
  `}function mi(e){return gi[e]??e}function pi(e){const t={error:3,warn:2,info:1};let n=e[0];for(const a of e)(t[a.schweregrad]||0)>(t[n.schweregrad]||0)&&(n=a);return n.schweregrad==="error"?"!":n.schweregrad==="warn"?"⚠":"i"}function bi(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function Nt(e){e._istCopyAttached||(e._istCopyAttached=!0,e.addEventListener("click",async t=>{const n=t.target.closest(".ist-part");if(!n)return;t.preventDefault(),t.stopPropagation();const a=n.getAttribute("data-val");try{await navigator.clipboard.writeText(a),n._copyResetTimer&&clearTimeout(n._copyResetTimer),n.classList.add("ok"),n.textContent="✓",n._copyResetTimer=setTimeout(()=>{n.classList.remove("ok"),n.textContent=a,n._copyResetTimer=null},800)}catch{N(`Bitte kopieren: ${a}`)}}))}const vi=[{key:7,label:"1 Woche"},{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:180,label:"6 Monate"},{key:365,label:"1 Jahr"},{key:730,label:"2 Jahre"},{key:"alles",label:"Alles"}];function yi(e){return vi.filter(t=>t.key==="alles"||t.key<e)}async function an({root:e}){const[t,n,a,s,i,r,d,c,l]=await Promise.all([ie(),ot(),oe(),si(),Ve("dashboardZeitraum",14),ct(),qe(),Ve("saldoFormat","hhmm"),Pe()]),o=Object.fromEntries(r.map(k=>[k.key,k]));if(a.length===0){e.innerHTML=xi();return}const u=En(a,n),h=u.length,g=yi(h);let m=i;g.some(k=>k.key===m)||(m="alles");const f=new Set(s.map(k=>k.key)),v=d!=null&&d.stichtagAuswertung?new Date(d.stichtagAuswertung):new Date,p=dt(a,t,v,f,{isAzubi:l}),y=qn(n,f),$=[...p,...y],D=ps(u),x=D>.05?"positive":D<-.05?"negative":"";e.innerHTML=`
    <h1 class="view-title">Dashboard</h1>
    <p class="view-subtitle">Stand: ${Ae(B(new Date(a[a.length-1].datum)))}</p>

    <div class="saldo-hero" style="margin-bottom: 32px; align-items: stretch;">
      <div class="saldo-hero-text" style="min-width: 260px;">
        <h3>Aktueller Gleitzeit-Saldo</h3>
        <div class="saldo-value-row">
          <div class="saldo-value ${x}" id="saldo-hero-value">${Ae(Yt(D,c))}</div>
          <button type="button" class="saldo-format-toggle" id="saldo-format-toggle"
            data-format="${Ae(c)}"
            title="${c==="hhmm"?"Auf Dezimal umstellen":"Auf Stunden:Minuten umstellen"}">
            ${c==="hhmm"?"als Dezimal":"als Std:Min"}
          </button>
        </div>
        <div id="hero-bewegung" class="saldo-trend flat" style="margin-top: 12px;"></div>
      </div>
      <div style="flex: 1; min-width: 400px; display: flex; flex-direction: column;">
        <div class="card-split" style="margin-bottom: 12px; align-items: center;">
          <h3 style="margin: 0;">Saldo-Verlauf</h3>
          <div class="zeitraum-controls">
            ${sn("zeitraum-nav-1")}
            <div class="segmented" id="zeitraum-picker">
              ${g.map(k=>`<button type="button" data-key="${k.key}" class="${m===k.key?"active":""}">${k.label}</button>`).join("")}
            </div>
          </div>
        </div>
        <div style="flex: 1; height: 220px;"><canvas id="saldo-chart"></canvas></div>
      </div>
    </div>

    ${$.length>0?`
      <div class="card" style="margin-bottom: 32px;">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Offene Warnungen</h2>
        </div>
        ${$.slice(0,8).map(k=>ki(k,t,o)).join("")}
        ${$.length>8?`<div style="margin-top: 12px; color: var(--fg-muted); font-size: 13px; text-align: center;">+ ${$.length-8} weitere Warnungen vorhanden</div>`:""}
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
        <div class="zeitraum-controls">
          ${sn("zeitraum-nav-2")}
          <div class="segmented" id="zeitraum-picker-2">
            ${g.map(k=>`<button type="button" data-key="${k.key}" class="${m===k.key?"active":""}">${k.label}</button>`).join("")}
          </div>
        </div>
      </div>
      <div id="tage-liste"></div>
    </div>

  `;let T=0;bt(m,e,u,$,T);const W=e.querySelector("#saldo-format-toggle");W==null||W.addEventListener("click",async()=>{const b=(W.getAttribute("data-format")||"hhmm")==="hhmm"?"dezimal":"hhmm";await nt("saldoFormat",b);const M=e.querySelector("#saldo-hero-value");M&&(M.textContent=Yt(D,b)),W.setAttribute("data-format",b),W.textContent=b==="hhmm"?"als Dezimal":"als Std:Min",W.title=b==="hhmm"?"Auf Dezimal umstellen":"Auf Stunden:Minuten umstellen"});const U=()=>e.querySelectorAll("#zeitraum-picker button, #zeitraum-picker-2 button");U().forEach(k=>{k.addEventListener("click",async()=>{if(k.disabled)return;const b=k.getAttribute("data-key"),M=b==="alles"?"alles":parseInt(b,10);U().forEach(E=>E.classList.toggle("active",E.getAttribute("data-key")===b)),await nt("dashboardZeitraum",M),m=M,T=0,bt(M,e,u,$,T)})});const q=k=>{if(m==="alles")return;const b=et(u.length,m);let M=T+k;M<b&&(M=b),M>0&&(M=0),M!==T&&(T=M,bt(m,e,u,$,T))};e.querySelectorAll(".zeitraum-nav").forEach(k=>{k.addEventListener("click",b=>{const M=b.target.closest(".zeitraum-nav-btn");if(!M||M.disabled)return;const E=M.getAttribute("data-dir")==="prev"?-1:1;q(E)})}),e.addEventListener("click",async k=>{const b=k.target.closest(".ist-part");if(b){k.preventDefault(),k.stopPropagation();const R=b.getAttribute("data-val");try{await navigator.clipboard.writeText(R),b._copyResetTimer&&clearTimeout(b._copyResetTimer),b.classList.add("ok"),b.textContent="✓",b._copyResetTimer=setTimeout(()=>{b.classList.remove("ok"),b.textContent=R,b._copyResetTimer=null},800)}catch{N(`Bitte kopieren: ${R}`)}return}const M=k.target.closest(".btn-dismiss");if(!M)return;const E=M.getAttribute("data-datum"),V=M.getAttribute("data-typ");if(!E||!V)return;await ai(E,V),N("Warnung ausgeblendet.");const C=M.closest(".alert");C&&(C.style.display="none")})}function bt(e,t,n,a=[],s=0){const i=ms(n,e,s),r=bs(i);requestAnimationFrame(()=>{const o=t.querySelector("#saldo-chart");_t(o,i)});const d=t.querySelector("#hero-bewegung");if(d){const o=r>.05?"up":r<-.05?"down":"flat",u=r>.05?"↑":r<-.05?"↓":"→";d.className=`saldo-trend ${o}`,d.innerHTML=`${u} ${Math.abs(r)<.01?"Unverändert":ge(r,{signed:!0})} im Zeitraum`}const c=t.querySelector("#tage-info");if(c){const o=i.length;c.textContent=`${o} ${o===1?"Tag":"Tage"}`}const l=t.querySelector("#tage-liste");l&&(l.innerHTML=ut(i.slice().reverse(),{warnungen:a.filter(o=>i.some(u=>u.datum===o.datum))})),wi(t,i,n.length,e,s)}function sn(e){return`
    <div class="zeitraum-nav" id="${e}" hidden>
      <button type="button" class="zeitraum-nav-btn" data-dir="prev" title="Voriger Zeitraum">‹</button>
      <span class="zeitraum-nav-label">—</span>
      <button type="button" class="zeitraum-nav-btn" data-dir="next" title="Nächster Zeitraum">›</button>
    </div>
  `}function wi(e,t,n,a,s){const i=e.querySelectorAll(".zeitraum-nav");if(!i.length)return;const r=a==="alles",d=r?0:et(n,a),c=jn(t,a);i.forEach(l=>{if(l.hidden=r,r)return;const o=l.querySelector('.zeitraum-nav-btn[data-dir="prev"]'),u=l.querySelector('.zeitraum-nav-btn[data-dir="next"]'),h=l.querySelector(".zeitraum-nav-label");o&&(o.disabled=s<=d),u&&(u.disabled=s>=0),h&&(h.textContent=c)})}function jn(e,t=null){var c,l;if(!(e!=null&&e.length))return"—";const n=e[0].datum,a=e[e.length-1].datum,s=new Date(n),i=new Date(a),r=`${B(s)} – ${B(i)}`,d=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];if(t===7){const o=e[e.length-1].wocheKey,u=o?o.split("-")[1]:null;return u?`KW ${u} · ${r}`:r}if(t===14){const o=(c=e[0].wocheKey)==null?void 0:c.split("-")[1],u=(l=e[e.length-1].wocheKey)==null?void 0:l.split("-")[1];return o&&u&&o!==u?`KW ${o}–${u} · ${r}`:u?`KW ${u} · ${r}`:r}if(t===30)return s.getMonth()===i.getMonth()&&s.getFullYear()===i.getFullYear()?`${d[i.getMonth()]} ${i.getFullYear()} · ${r}`:`${d[s.getMonth()].slice(0,3)}–${d[i.getMonth()].slice(0,3)} ${i.getFullYear()} · ${r}`;if(t===90||t===180){const o=d[s.getMonth()].slice(0,3),u=d[i.getMonth()].slice(0,3);return`${s.getFullYear()===i.getFullYear()?`${o}–${u} ${i.getFullYear()}`:`${o} ${s.getFullYear()}–${u} ${i.getFullYear()}`} · ${r}`}return t===365?s.getFullYear()===i.getFullYear()?`Jahr ${i.getFullYear()} · ${r}`:`${i.getFullYear()-1}/${String(i.getFullYear()).slice(2)} · ${r}`:t===730?`${s.getFullYear()}–${i.getFullYear()} · ${r}`:r}function ki(e,t,n){const a=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";let s=null;if(e.mailVorlageKey&&t){const i=Ze(e.mailVorlageKey,n==null?void 0:n[e.mailVorlageKey]);if(i){const r=Ot(t,e);s=Kt(t,i,r)}}return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${a}</div>
      <div class="alert-body">
        <div class="alert-title">${Ae(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${Ae(e.beschreibung)}</p>
        <div class="alert-actions">
          ${s?`<a href="${vt(s)}" class="btn-mail-medium"><img src="outlook-logo.png" alt="" class="outlook-logo-medium" />E-Mail</a>`:""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
          <button class="btn ghost sm btn-dismiss" data-datum="${vt(e.datum)}" data-typ="${vt(e.typ)}">Ausblenden</button>
        </div>
      </div>
    </div>
  `}function xi(){return`
    <div class="empty-state" style="margin-top: 80px;">
      <p class="hint" style="margin-bottom: 18px;">Noch keine Daten geladen.</p>
      <a href="#/daten" class="btn primary">Zum Upload →</a>
      <p class="hint" style="margin-top: 24px; font-size: 12px;">Tipp: Tour erneut starten unter <a href="#/daten" style="color: var(--accent);">Daten</a> ganz unten.</p>
    </div>
  `}function Ae(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function vt(e){return Ae(e)}const Un="/better-ess/assets/pdf.worker.min-yatZIOMy.mjs";Sn.workerSrc=Un;const rn={Januar:1,Februar:2,März:3,Maerz:3,April:4,Mai:5,Juni:6,Juli:7,August:8,September:9,Oktober:10,November:11,Dezember:12},$i=["Stempelzeit","Berufsschule Std. bez","Berufsschule","Dienstreise Arbeitszeit","Reise öff.VM/PKW Beifahr.","Reise öff.VM/PKW","Urlaub","Gleitzeit","Arbeitsunfähigkeit","TgDtEinh","Neujahr","Karfreitag","Ostermontg","Ostmontg","Osterso.","Hl.3 Kön.","Allerhlg","Pfingstmo","Fronleichn","TdDtEinh"];async function Si(e){var c,l;const n=await Mn({data:e}).promise,a=[];let s=0;for(let o=1;o<=n.numPages;o++){const h=await(await n.getPage(o)).getTextContent();s+=h.items.length;const g=Mi(h.items);for(const m of g)a.push({page:o,text:m})}const i=zi(a),{tage:r,monate:d}=Ai(a);try{const o=await n.getMetadata();i.producer=((c=o==null?void 0:o.info)==null?void 0:c.Producer)??null,i.creator=((l=o==null?void 0:o.info)==null?void 0:l.Creator)??null}catch{}return i.totalTextItems=s,{meta:i,tage:r,monate:d}}function Mi(e){if(!e.length)return[];const t=e.slice().sort((r,d)=>{const c=d.transform[5]-r.transform[5];return Math.abs(c)>2?c:r.transform[4]-d.transform[4]}),n=[];let a=null,s=[];const i=3;for(const r of t){const d=r.transform[5];a==null||Math.abs(d-a)<=i?(s.push(r),a==null&&(a=d)):(n.push(ln(s)),s=[r],a=d)}return s.length&&n.push(ln(s)),n.filter(r=>r.trim().length>0)}function ln(e){e.sort((a,s)=>a.transform[4]-s.transform[4]);let t="",n=-1;for(const a of e){const s=a.transform[4];n>=0&&s-n>4?t+="  ":n>=0&&s-n>.5&&(t+=" "),t+=a.str,n=s+a.width}return t}function zi(e){var n,a;const t={personalnummer:null,name:null,kostenstelle:null,personalbereich:null,einstellungsdatum:null,mitarbeiterkreis:null,arbeitszeitplanregel:null,zeitraumVon:null,zeitraumBis:null,stichtagAuswertung:null};for(let s=0;s<e.length;s++){const i=e[s].text,r=/vom\s+(\d{2}\.\d{2}\.\d{4})\s+bis\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);r&&(t.zeitraumVon=ze(r[1]),t.zeitraumBis=ze(r[2]));const d=/bis einschließlich dem\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);if(d&&(t.stichtagAuswertung=ze(d[1])),/Personalnummer/i.test(i)&&/Kostenstelle/i.test(i)){const c=(((n=e[s+1])==null?void 0:n.text)??"").trim();let l=c.split(/\s{2,}/);l.length<3&&(l=c.split(/\s+/)),l.length>=3&&/^\d/.test(l[0])&&(t.personalnummer=l[0],t.kostenstelle=l[1],t.personalbereich=l[2])}if(/Einstellungsdatum/i.test(i)&&/Mitarbeiterkreis/i.test(i)){const c=(((a=e[s+1])==null?void 0:a.text)??"").trim();let l=c.split(/\s{2,}/);l.length<3&&(l=c.split(/\s+/)),l.length>=3&&/^\d{2}\.\d{2}\.\d{4}$/.test(l[0])&&(t.einstellungsdatum=ze(l[0]),t.mitarbeiterkreis=l[1],t.arbeitszeitplanregel=l[2])}if(/Bei Rückfragen wenden Sie sich an/i.test(i))for(let c=s+1;c<Math.min(s+8,e.length);c++){const l=e[c].text.trim();if(/^[A-ZÄÖÜ][a-zäöüß]+(?:\s[A-ZÄÖÜ][a-zäöüß]+)+$/.test(l)&&!/kanarya/i.test(l)&&!/tel/i.test(l)){t.name=l;break}}}return t}function Ai(e,t){var c;const n=[],a=[];let s=null,i=null,r=!1,d=0;for(;d<e.length;){const l=e[d].text,o=/Monat:\s*([A-Za-zäöüÄÖÜß]+)\s*-\s*(\d{4})/.exec(l);if(o){const m=o[1].trim(),f=parseInt(o[2],10),v=rn[m]??rn[m.replace("ä","ae")]??null;v&&(s={jahr:f,monat:v,monatKey:`${f}-${String(v).padStart(2,"0")}`},r=!0,i=null),d++;continue}if(/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.test(l)){const m=/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.exec(l),f=ze(m[1]);i={monatKey:(s==null?void 0:s.monatKey)??Lt(f),stichtag:f,glz:{},flexi:{},zeitkonten:{},raw:{}},d=Di(e,d+1,i),a.push(i);continue}let u=s;const h=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)\b/.exec(l.trim());if(h&&s){const m=parseInt(h[1],10);r&&m>=20?u=Ti(s):m<=15&&(r=!1)}const g=on(l,u);if(g){const m=[];let f=d+1;for(;f<e.length;){const p=e[f].text;if(/^\s*\d{4}\s+Umbuchung/.test(p)||on(p,s)||/Wochensumme/i.test(p)||/Monats.bersicht/i.test(p)||/Monat:\s*[A-Za-z]/i.test(p))break;const y=Pi(p);if(y){m.push(y),f++;continue}break}if(m.length&&g.zeitSpannen.push(...m),g.tagestyp==="Wochenende"||g.wochentag==="SA"||g.wochentag==="SO"){d=f;continue}(g.ist!=null||g.soll!=null||(((c=g.zeitSpannen)==null?void 0:c.length)??0)>0||g.tagestyp!=null)&&n.push(g),d=f;continue}d++}return{tage:n,monate:a}}function Di(e,t,n){let a=t;const s=/(\d{4,5}|KTAU|AZAU)\s*-\s*(.+?)\s+(-?[\d,.]+-?)(?=\s+(?:\d{4,5}|KTAU|AZAU)\s*-|\s*$)/g;for(;a<e.length;){const i=e[a].text.trim();if(/^Monat:\s/.test(i)||/^Einzelergebnisse\s/.test(i)||/^Tag\b/.test(i)||/^Wochensumme/.test(i)||/^\d{2}\s+(MO|DI|MI|DO|FR|SA|SO)\b/.test(i)||/^Übersicht für den Zeitraum/i.test(i)||/^Abwesenheitsansprüche/i.test(i))break;s.lastIndex=0;let r;for(;(r=s.exec(i))!=null;){const d=r[1],c=r[2].trim(),l=zn(r[3]);n.raw[d]={beschreibung:c,wert:l},d==="0008"&&(n.glz.saldoVorperiode=l),d==="8016"&&(n.glz.saldoAktuellePeriode=l),d==="9802"&&(n.glz.umgebuchteStunden=l),d==="0005"&&(n.glz.saldoGesamt=l),d==="9803"&&(n.glz.ueberzaehligeStd=l),d==="0050"&&(n.zeitkonten.produktivstunden=l),d==="9011"&&(n.flexi.jahreskontoVorperiode=l),d==="9010"&&(n.flexi.jahreskontoSaldo=l),d==="9020"&&(n.flexi.langzeitkontoSaldo=l),d==="9203"&&(n.zeitkonten.azMonatsendeUeber216=l),d==="9207"&&(n.zeitkonten.auszahlungBav=l),d==="9205"&&(n.zeitkonten.summeAuszahlung=l)}if(a++,a-t>80)break}return a}function on(e,t){if(!t)return null;const n=e.trim(),a=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)(?:\s+(.+))?$/.exec(n);if(!a)return null;const s=parseInt(a[1],10),i=a[2],r=(a[3]??"").trim();let d=t.jahr,c=t.monat;const l=new Date(d,c-1,s),o={datum:_n(l),datumDate:l.toISOString(),wochentag:i,tagNr:s,monatKey:Lt(l),wocheKey:Ln(l),zeitSpannen:[],aktivitaeten:[],ist:null,soll:null,diff:null,pause:null,tazp:null,tagestyp:null,raw:n};return r?(Ei(r,o),o):(o.tagestyp=["SA","SO"].includes(i)?"Wochenende":null,o)}function Pi(e){const t=e.trim(),n=/^(Stempelzeit|Reise öff\.VM\/PKW Beifahr\.|Reise öff\.VM\/PKW|Dienstreise Arbeitszeit)\s+(\d{2}:\d{2})\s+(\d{2}:\d{2})\s*$/.exec(t);return n?{aktivitaet:n[1],von:n[2],bis:n[3]}:null}function Ei(e,t){let n=null,a=e;for(const o of $i)if(e.startsWith(o)){n=o,a=e.slice(o.length).trim();break}n||(n=e.split(/\s+/)[0],a=e.slice(n.length).trim()),t.tagestyp=Fi(n),t.aktivitaeten.push(n);const s=a.split(/\s+/).filter(Boolean),i=/^\d{2}:\d{2}$/,r=/^-?[\d,.]+-?$/;let d=0;for(;s[d]&&i.test(s[d])&&s[d+1]&&i.test(s[d+1]);)t.zeitSpannen.push({aktivitaet:n,von:s[d],bis:s[d+1]}),d+=2;const c=[];for(;d<s.length&&r.test(s[d]);){const o=zn(s[d]);o!=null&&c.push(o),d++}let l=s[d];c.length>=5?([t.ist,t.soll,t.diff,t.pause]=c,l||(l=String(c[4]))):c.length===4?[t.ist,t.soll,t.diff,t.pause]=c:c.length===3?[t.ist,t.soll,t.diff]=c:c.length===2?[t.ist,t.soll]=c:c.length===1&&(t.ist=c[0]),l&&(t.tazp=String(l))}function Ti(e){if(!e)return null;let t=e.monat-1,n=e.jahr;return t<1&&(t=12,n-=1),{jahr:n,monat:t,monatKey:`${n}-${String(t).padStart(2,"0")}`}}function Fi(e){return e?/^Stempelzeit$/i.test(e)?"Stempelzeit":/^Berufsschule Std\. bez$/i.test(e)||/^Berufsschule$/i.test(e)?"Berufsschule":/Dienstreise/i.test(e)||/Reise/i.test(e)?"Dienstreise":/^Urlaub$/i.test(e)?"Urlaub":/^Gleitzeit$/i.test(e)?"Gleitzeit":/Arbeitsunf.higkeit/i.test(e)?"Arbeitsunfähigkeit":/^(Neujahr|Karfreitag|Ostermontg|Ostmontg|Osterso\.|Hl\.3 Kön\.|Allerhlg|Pfingstmo|Fronleichn|TdDtEinh|TgDtEinh)$/i.test(e)?"Feiertag":e:null}function ce(e,t={}){const{title:n="Bestätigen",confirmLabel:a="Bestätigen",cancelLabel:s="Abbrechen",variant:i="default"}=t;return _i({message:e,title:n,confirmLabel:a,cancelLabel:s,variant:i,kind:"confirm"})}function Li(e,t,n={}){const{title:a="Bestätigen",confirmLabel:s="Weiter",cancelLabel:i="Abbrechen",variant:r="default",icon:d=null}=n;return new Promise(c=>{const l=document.activeElement,o=document.createElement("div");o.className="app-dialog-overlay";const u=d==="info"?`
      <span class="app-dialog-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </span>`:"";o.innerHTML=`
      <div class="app-dialog" role="dialog" aria-modal="true" aria-labelledby="app-dialog-title">
        <div class="app-dialog-header">
          ${u}
          <h3 id="app-dialog-title" class="app-dialog-title">${ue(a)}</h3>
        </div>
        <div class="app-dialog-message">${Gn(e)}</div>
        <label class="app-dialog-checkbox">
          <input type="checkbox" class="app-dialog-checkbox-input" />
          <span class="app-dialog-checkbox-label">${ue(t)}</span>
        </label>
        <div class="app-dialog-actions">
          <button class="btn ghost app-dialog-cancel" type="button">${ue(i)}</button>
          <button class="btn primary app-dialog-confirm ${r==="danger"?"is-danger":""}" type="button" disabled>${ue(s)}</button>
        </div>
      </div>
    `,document.body.appendChild(o),requestAnimationFrame(()=>o.classList.add("is-open"));const h=o.querySelector(".app-dialog-confirm"),g=o.querySelector(".app-dialog-cancel"),m=o.querySelector(".app-dialog-checkbox-input"),f=p=>{o.classList.remove("is-open"),setTimeout(()=>{if(o.remove(),document.removeEventListener("keydown",v),l&&l.focus)try{l.focus()}catch{}c(p)},180)},v=p=>{p.key==="Escape"?(p.preventDefault(),f(!1)):p.key==="Enter"&&!h.disabled&&(p.preventDefault(),f(!0))};m.addEventListener("change",()=>{h.disabled=!m.checked}),h.addEventListener("click",()=>{h.disabled||f(!0)}),g.addEventListener("click",()=>f(!1)),o.addEventListener("click",p=>{p.target===o&&f(!1)}),document.addEventListener("keydown",v),setTimeout(()=>m.focus(),50)})}function _i({message:e,title:t,confirmLabel:n,cancelLabel:a,variant:s,kind:i}){return new Promise(r=>{const d=document.activeElement,c=document.createElement("div");c.className="app-dialog-overlay",c.innerHTML=`
      <div class="app-dialog" role="dialog" aria-modal="true" aria-labelledby="app-dialog-title">
        <h3 id="app-dialog-title" class="app-dialog-title">${ue(t)}</h3>
        <div class="app-dialog-message">${Gn(e)}</div>
        <div class="app-dialog-actions">
          ${`<button class="btn ghost app-dialog-cancel" type="button">${ue(a)}</button>`}
          <button class="btn primary app-dialog-confirm ${s==="danger"?"is-danger":""}" type="button">${ue(n)}</button>
        </div>
      </div>
    `,document.body.appendChild(c),requestAnimationFrame(()=>c.classList.add("is-open"));const l=c.querySelector(".app-dialog-confirm"),o=c.querySelector(".app-dialog-cancel"),u=g=>{c.classList.remove("is-open"),setTimeout(()=>{if(c.remove(),document.removeEventListener("keydown",h),d&&d.focus)try{d.focus()}catch{}r(g)},180)},h=g=>{g.key==="Escape"?(g.preventDefault(),u(!1)):g.key==="Enter"&&(g.preventDefault(),u(!0))};l==null||l.addEventListener("click",()=>u(!0)),o==null||o.addEventListener("click",()=>u(!1)),c.addEventListener("click",g=>{g.target===c&&u(!1)}),document.addEventListener("keydown",h),setTimeout(()=>l==null?void 0:l.focus(),50)})}function ue(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Gn(e){return ue(e).replace(/\n/g,"<br>")}const Jn="better-ess-tour-completed",Wt=typeof import.meta<"u"?"/better-ess/":"/",Ci=Wt+"tutorial/speichern.png",Bi=Wt+"tutorial/download.png",Oi=Wt+"tutorial/zeitraum.png",De=[{type:"modal",hero:!0,icon:"👋",title:"Willkommen bei Better ESS",text:"Diese App liest deinen <strong>Zeitnachweis</strong> und macht ihn auf einen Blick verständlich.<br><br>Sie <strong>warnt dich automatisch</strong> bei fehlenden Tagen, falschen Berufsschul-Stunden oder unrechtmäßigem Pausen-Abzug. Du kannst deine <strong>monatliche Fahrgelderstattungs-Excel</strong> auf Knopfdruck generieren und <strong>Korrektur-Mails an die Zeitwirtschaft</strong> mit einem Klick verschicken — Empfänger, Betreff und Text sind schon vorbefüllt."},{type:"modal",hero:!0,icon:"🔒",title:"Deine Daten bleiben bei dir",text:"Dein PDF geht <strong>nicht ins Internet</strong>.<br><br>Alles läuft lokal in deinem Browser — wie eine Notizen-App. Kein Upload, kein Server, kein Konto."},{type:"highlight",target:'a[href="#/daten"]',icon:"📂",title:"Hier startet alles",text:"Hier lädst du deinen Zeitnachweis hoch.",placement:"right",autoClick:!0,onAfterClick:async()=>{window.location.hash!=="#/daten"&&(window.location.hash="#/daten"),await Ye("#upload-zone",1500)}},{type:"download-modal",icon:"📥",title:'1. Im ESS auf „Zeitnachweis herunterladen" klicken',image:Bi,points:[{kind:"good",icon:"✓",text:"Den Button findest du unten rechts in der ESS-Zeitbuchungs-Ansicht."}]},{type:"download-modal",icon:"📅",title:'2. „Anderer Zeitraum" wählen — möglichst groß',image:Oi,points:[{kind:"good",icon:"✓",text:'Wähle <strong>„Anderer Zeitraum"</strong> und nimm einen möglichst großen Bereich (am besten Ausbildungsstart bis heute) — die App nutzt alle Daten für Saldo-Verlauf und Trends.'},{kind:"bad",icon:"✕",text:'Nicht „Aktuelle Woche" oder „Aktueller Monat" — dann fehlen Verlaufs-Daten.'}]},{type:"download-modal",icon:"💾",title:'3. Im PDF-Viewer auf „Speichern" — nicht „Drucken"',image:Ci,points:[{kind:"good",icon:"✓",text:"<strong>Speichern-Button</strong> (Disketten-Symbol oben rechts in der PDF-Toolbar) — speichert eine echte Text-PDF."},{kind:"bad",icon:"✕",text:'<strong>NICHT</strong> „Drucken → Microsoft Print to PDF" — dabei werden Texte als Pfade gerendert und sind nicht lesbar.'}]},{type:"highlight",target:"#upload-zone",icon:"📥",title:"Lade jetzt dein PDF hoch",text:"Zieh dein Zeitnachweis-PDF auf die Box (oder klick sie an). Erst nach dem Upload geht die Tour weiter.",placement:"top",waitForTarget:!0,waitForEvent:"better-ess:pdf-uploaded"},{type:"modal",icon:"✨",title:"Geschafft!",text:"Dein PDF ist eingelesen. Jetzt zeig ich dir die Funktionen — anhand deiner echten Daten.",onNext:async()=>{window.location.hash="#/",await Ye(".saldo-value",1500)}},{type:"highlight",target:".saldo-value",icon:"⚖️",title:"Dein aktueller Saldo",text:"Plus oder Minus auf einen Blick. Tagesaktuell.",placement:"right",waitForTarget:!0},{type:"highlight",target:"#saldo-chart",icon:"📈",title:"Saldo-Verlauf",text:"Hover über die Punkte für Details. Zeitraum oben rechts umschaltbar.",placement:"top",waitForTarget:!0},{type:"highlight",target:".tag-row .ist-display",icon:"⏱️",title:"Stunden direkt kopieren",text:"Klick auf <strong>H</strong> oder <strong>M</strong> — kopiert den Wert in deine Zwischenablage. Praktisch fürs IHK-Berichtsheft.",placement:"left",waitForTarget:!0},{type:"highlight",target:".alert",icon:"⚠️",title:"Auffälligkeiten",text:"Fehlende Tage, falsche BS-Stunden, Pausen-Abzug — alles automatisch erkannt.",placement:"left",optional:!0,waitForTarget:!0,timeoutMs:1200},{type:"highlight",target:'a[href="#/profil"]',icon:"👤",title:"Profil",text:"Über 18? Pausen-Regel und Mail-Empfänger anpassen.",placement:"right"},{type:"highlight",target:'a[href="#/fahrtgeld"]',icon:"🚌",title:"Fahrgelderstattung",text:"Hier generierst du deine monatliche Fahrgeld-Excel mit deinen erkannten Berufsschultagen.",placement:"right",autoClick:!0,onAfterClick:async()=>{window.location.hash!=="#/fahrtgeld"&&(window.location.hash="#/fahrtgeld"),await Ye("#fahrtgeld-dropzone, #btn-template-replace, .fahrtgeld-generate-card",2e3)}},{type:"highlight",target:"#fahrtgeld-dropzone, .fahrtgeld-generate-card",icon:"📥",title:"Vorlage einmalig hochladen",text:'Eine bestehende Fahrgeld-Excel hier hochladen — Name, Personalnummer, Haltestellen und Tagessatz werden automatisch ausgelesen. Tour wartet auf den Upload (oder oben auf „Überspringen", um die Tour zu beenden).',placement:"top",waitForTarget:!0,timeoutMs:2500,waitForEvent:"better-ess:fahrgeld-template-uploaded"},{type:"highlight",target:".btn-generate-big",icon:"✅",title:"Excel generieren",text:"Monat unten auswählen, dann hier klicken. Du bekommst eine fertig ausgefüllte Excel zum Download — mit deinen Berufsschultagen, Datum und Unterschrift.",placement:"bottom",waitForTarget:!0,timeoutMs:1500,optional:!0},{type:"highlight",target:".btn-mail-big",icon:"✉️",title:"E-Mail an die Personalabteilung",text:"Öffnet Outlook mit fertig vorausgefülltem Empfänger, Betreff und Text. Excel-Anhang aus dem Download-Ordner musst du noch manuell dranhängen.",placement:"bottom",waitForTarget:!0,timeoutMs:1500,optional:!0},{type:"modal",icon:"🚀",title:"Bereit!",text:"Du kennst alle Funktionen. Tour erneut starten? Button am Ende der <strong>Daten</strong>-Seite."}],cn=De.findIndex(e=>e.icon==="✨");let _=null,ye=null;function Yn(){_===null&&(Vt(),_={idx:0},re())}function Ki(e){return e?!1:!localStorage.getItem(Jn)}function Ni(){localStorage.setItem(Jn,"1")}function Xn(){return _!==null}function Vt(){document.querySelectorAll(".tour-blur-frame, .tour-popover, .tour-pointer, .tour-highlight-border").forEach(e=>e.remove()),ye&&(ye(),ye=null),_=null}function Je(e){const t=document.querySelector(".tour-blur-frame.full"),n=[document.querySelector('.tour-blur-frame[data-side="top"]'),document.querySelector('.tour-blur-frame[data-side="left"]'),document.querySelector('.tour-blur-frame[data-side="right"]'),document.querySelector('.tour-blur-frame[data-side="bottom"]')];if(!e){n.forEach(v=>{v&&(v.style.opacity="0")});let g=t;!g?(g=document.createElement("div"),g.className="tour-blur-frame full",document.body.appendChild(g)):g.style.opacity="1";const f=document.querySelector(".tour-highlight-border");f&&(f.style.opacity="0");return}t&&(t.style.opacity="0");const a=e.getBoundingClientRect(),s=8,i=Math.max(0,a.left-s),r=Math.max(0,a.top-s),d=a.width+s*2,c=a.height+s*2,l=window.innerWidth,o=window.innerHeight,u={top:{top:0,left:0,width:l,height:r},left:{top:r,left:0,width:i,height:c},right:{top:r,left:i+d,width:l-(i+d),height:c},bottom:{top:r+c,left:0,width:l,height:o-(r+c)}};for(const[g,m]of Object.entries(u)){let f=n[Object.keys(u).indexOf(g)];f||(f=document.createElement("div"),f.className="tour-blur-frame",f.dataset.side=g,document.body.appendChild(f)),f.style.top=m.top+"px",f.style.left=m.left+"px",f.style.width=Math.max(0,m.width)+"px",f.style.height=Math.max(0,m.height)+"px",f.style.opacity=m.width<=0||m.height<=0?"0":"1"}let h=document.querySelector(".tour-highlight-border");h||(h=document.createElement("div"),h.className="tour-highlight-border",document.body.appendChild(h)),h.style.top=r+"px",h.style.left=i+"px",h.style.width=d+"px",h.style.height=c+"px",h.style.opacity="1",h.style.display=""}function It(){let e=document.querySelector(".tour-pointer");return e||(e=document.createElement("div"),e.className="tour-pointer",e.innerHTML=`
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
      </svg>`,e.style.top=window.innerHeight/2+"px",e.style.left=window.innerWidth/2+"px",document.body.appendChild(e)),e}function Wi(e){const t=It(),n=e.getBoundingClientRect(),a=n.left+n.width*.5,s=n.top+n.height*.5;t.style.top=s-6+"px",t.style.left=a-9+"px"}function dn(){var e;(e=document.querySelector(".tour-pointer"))==null||e.remove()}async function Vi(e){const t=It();t.classList.add("tour-pointer-clicking"),await new Promise(n=>setTimeout(n,280)),t.classList.remove("tour-pointer-clicking")}async function Ye(e,t=1500){const n=Date.now();for(;Date.now()-n<t;){const a=document.querySelector(e);if(a)return a;await new Promise(s=>setTimeout(s,100))}return null}async function re(){var d,c,l;if(!_)return;const e=_.overrideStep||De[_.idx];if(_.overrideStep=null,!e){zt();return}if(ye&&(ye(),ye=null),e.type==="download-modal")return dn(),Je(null),Ii(e);let t=null;if(e.type==="highlight"){if(t=e.waitForTarget?await Ye(e.target,e.timeoutMs??1500):document.querySelector(e.target),!t&&e.fallback){const o=e.fallback;if(o.onBefore)try{await o.onBefore()}catch(u){console.warn("tour fallback onBefore error:",u)}return _.overrideStep=o,re()}if(!t&&e.optional)return _.idx++,re();if(!t&&e.waitForTarget&&!e.fallback)return console.warn("[tour] target not found, skipping:",e.target),_.idx++,re();if(t){try{t.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}catch{}await new Promise(o=>setTimeout(o,250)),Je(t),It(),requestAnimationFrame(()=>Wi(t))}else Je(null)}else dn(),Je(null);let n=document.querySelector(".tour-popover");n||(n=document.createElement("div"),n.className="tour-popover",n.style.visibility="hidden",document.body.appendChild(n)),n.classList.remove("tour-popover-large","tour-popover-hero"),e.hero&&n.classList.add("tour-popover-hero"),t?n.classList.remove("center"):n.classList.add("center");const a=_.idx===0,s=_.idx===De.length-1,i=!!e.waitForEvent,r=i?"⏳ Warte auf Upload …":s?"Fertig":"Weiter →";if(n.innerHTML=`
    <div class="tour-popover-header">
      <span class="tour-popover-step">${_.idx+1} / ${De.length}</span>
      <button class="tour-skip" type="button" aria-label="Tour beenden">Überspringen</button>
    </div>
    <div class="tour-popover-icon">${e.icon||""}</div>
    <h3>${e.title}</h3>
    <div class="tour-popover-body">${e.text}</div>
    <div class="tour-popover-actions">
      <button class="btn tour-prev" type="button" ${a?'disabled style="opacity:0.4;cursor:default"':""}>← Zurück</button>
      <button class="btn primary tour-next" type="button" ${i?'disabled style="opacity:0.5;cursor:default"':""}>${r}</button>
    </div>`,t)n.style.opacity="0",requestAnimationFrame(()=>{Hi(n,t,e.placement||"right"),n.style.visibility="visible",n.style.opacity="1"});else{n.style.top=n.style.left=n.style.right=n.style.bottom="",n.style.opacity="0",n.style.visibility="visible";const o=document.querySelector(".tour-blur-frame.full");requestAnimationFrame(()=>{o&&(o.style.opacity="1"),n.style.opacity="1"})}if((d=n.querySelector(".tour-skip"))==null||d.addEventListener("click",()=>{zt()}),a||(c=n.querySelector(".tour-prev"))==null||c.addEventListener("click",async()=>{_.idx=Math.max(0,_.idx-1),await re()}),!i)(l=n.querySelector(".tour-next"))==null||l.addEventListener("click",async()=>{if(e.autoClick&&t){await Vi();try{const o=t.getAttribute("href");o&&o.startsWith("#/")?window.location.hash=o.slice(1):t.click()}catch(o){console.warn("tour autoClick error:",o)}if(e.onAfterClick)try{await e.onAfterClick()}catch(o){console.warn("tour onAfterClick error:",o)}else await new Promise(o=>setTimeout(o,350))}else if(e.onNext)try{await e.onNext()}catch(o){console.warn("tour onNext error:",o)}_.idx++,await re()});else{const o=_.idx,u=o<cn,h=async()=>{Vt(),document.querySelectorAll(".upload-modal-overlay").forEach(g=>g.remove()),await new Promise(g=>setTimeout(g,300)),_={idx:u?cn:o+1},await re()};document.addEventListener(e.waitForEvent,h,{once:!0}),ye=()=>document.removeEventListener(e.waitForEvent,h)}}function Ii(e){var a,s,i;let t=document.querySelector(".tour-popover");t||(t=document.createElement("div"),t.className="tour-popover",t.style.visibility="hidden",document.body.appendChild(t)),t.classList.add("tour-popover-large","center"),t.style.visibility="visible";const n=_.idx===0;_.idx,De.length-1,t.innerHTML=`
    <div class="tour-popover-header">
      <span class="tour-popover-step">${_.idx+1} / ${De.length}</span>
      <button class="tour-skip" type="button" aria-label="Tour beenden">Überspringen</button>
    </div>
    <div class="tour-popover-icon">${e.icon||""}</div>
    <h3>${e.title}</h3>
    <div class="tour-download-image-wrap">
      <img src="${e.image}" alt="Speichern-Button im PDF-Viewer">
    </div>
    <div class="tour-download-points">
      ${e.points.map(r=>`
        <div class="tour-download-point ${r.kind==="bad"?"bad":""}">
          <span class="tour-download-point-icon">${r.icon}</span>
          <span>${r.text}</span>
        </div>`).join("")}
    </div>
    <div class="tour-popover-actions" style="margin-top:14px;">
      <button class="btn tour-prev" type="button" ${n?'disabled style="opacity:0.4;cursor:default"':""}>← Zurück</button>
      <button class="btn primary tour-next" type="button">Verstanden, weiter →</button>
    </div>`,t.style.top=t.style.left=t.style.right=t.style.bottom="",t.style.opacity="1",(a=t.querySelector(".tour-skip"))==null||a.addEventListener("click",()=>{zt()}),n||(s=t.querySelector(".tour-prev"))==null||s.addEventListener("click",async()=>{_.idx=Math.max(0,_.idx-1),await re()}),(i=t.querySelector(".tour-next"))==null||i.addEventListener("click",async()=>{_.idx++,await re()})}function Hi(e,t,n){const a=t.getBoundingClientRect(),s=16,i=e.offsetWidth||360,r=e.offsetHeight||220,d=window.innerWidth,c=window.innerHeight,l=[n,"right","bottom","left","top"];let o=null;for(const g of l)if((()=>{switch(g){case"right":return a.right+s+i<=d;case"left":return a.left-s-i>=0;case"bottom":return a.bottom+s+r<=c;case"top":return a.top-s-r>=0}})()){o=g;break}o=o||n;let u,h;switch(o){case"right":u=a.top+a.height/2-r/2,h=a.right+s;break;case"left":u=a.top+a.height/2-r/2,h=a.left-i-s;break;case"bottom":u=a.bottom+s,h=a.left+a.width/2-i/2;break;case"top":default:u=a.top-r-s,h=a.left+a.width/2-i/2;break}u=Math.max(s,Math.min(c-r-s,u)),h=Math.max(s,Math.min(d-i-s,h)),e.style.position="fixed",e.style.top=u+"px",e.style.left=h+"px",e.style.right="auto",e.style.bottom="auto",e.style.transform=""}function zt(){Vt(),Ni()}async function Ri({root:e}){var r;const t=await Wn(),n=await ie();e.innerHTML=`
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
        ${t.length===0?'<div class="empty-state"><div class="empty-state-icon">📭</div><p>Noch keine Uploads</p></div>':ea(t)}
      </div>
    </div>

    <div class="card" style="margin-top: 24px; text-align: center; background: transparent; border-style: dashed;">
      <p style="color: var(--fg-muted); font-size: 13px; margin: 0 0 12px;">Brauchst du nochmal eine kurze Tour durch die App?</p>
      <button class="btn" id="btn-tour-restart" type="button">🎯 Tour erneut starten</button>
    </div>
  `;const a=e.querySelector("#upload-zone"),s=e.querySelector("#file-input");async function i(){return Xn()?!0:await Li("Je länger der Zeitraum deines Zeitnachweises, desto besser arbeitet die App: vor allem Berufsschul-Muster (besonders im 14-tägigen Rhythmus), Saldo-Verlauf und Pausen-Analysen werden genauer. Mit weniger Daten funktioniert die App auch — nur weniger umfangreich.","Mein Zeitnachweis PDF deckt einen möglichst langen Zeitraum ab.",{title:"Vor dem Upload",confirmLabel:"Datei auswählen",cancelLabel:"Abbrechen",icon:"info"})}a.addEventListener("click",async()=>{await i()&&s.click()}),a.addEventListener("dragover",d=>{d.preventDefault(),a.classList.add("drag")}),a.addEventListener("dragleave",()=>a.classList.remove("drag")),a.addEventListener("drop",async d=>{var o;d.preventDefault(),a.classList.remove("drag");const c=(o=d.dataTransfer.files)==null?void 0:o[0];!c||!await i()||await gn(c,e,n)}),s.addEventListener("change",async d=>{var l;const c=(l=d.target.files)==null?void 0:l[0];c&&await gn(c,e,n)}),e.querySelector("#btn-export").addEventListener("click",ji),e.querySelector("#btn-import").addEventListener("click",()=>e.querySelector("#import-input").click()),e.querySelector("#import-input").addEventListener("change",Ui),e.querySelector("#btn-clear-parsed").addEventListener("click",Zi),e.querySelector("#btn-reset").addEventListener("click",Gi),(r=e.querySelector("#btn-tour-restart"))==null||r.addEventListener("click",()=>Yn()),qi()}let un=!1;function qi(){un||(un=!0,document.body.addEventListener("click",e=>{if(e.target.closest(".lightbox-overlay, .upload-modal-overlay"))return;const t=e.target.closest("img.zoomable");t&&Qn(t.src,t.alt)}))}function Qn(e,t){const n=document.createElement("div");n.className="lightbox-overlay",n.innerHTML=`
    <button class="lightbox-close" aria-label="Schließen" title="Schließen (Esc)">×</button>
    <img src="${e}" alt="${t||""}" />
  `,document.body.appendChild(n);const a=()=>{n.remove(),document.removeEventListener("keydown",s)},s=i=>{i.key==="Escape"&&a()};n.addEventListener("click",i=>{(i.target===n||i.target.classList.contains("lightbox-close"))&&a()}),document.addEventListener("keydown",s)}async function Zi(){await ce("PDF-abgeleitete Daten (Tage, Monate, Uploads) werden gelöscht. Profil und Mail-Vorlagen bleiben erhalten.",{title:"PDF-Daten löschen?",confirmLabel:"Löschen",variant:"danger"})&&(await Vn(),N("Daten gelöscht. Profil bleibt."),setTimeout(()=>location.reload(),600))}function ea(e){return`
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
            <td>${S(Ji(t.hochladeDatum))}</td>
            <td>${S(t.dateiname||"—")}</td>
            <td>${t.zeitraumVon?S(B(new Date(t.zeitraumVon))):"—"} – ${t.zeitraumBis?S(B(new Date(t.zeitraumBis))):"—"}</td>
            <td>${t.stichtagAuswertung?S(B(new Date(t.stichtagAuswertung))):"—"}</td>
            <td class="num">${t.tageCount??"—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}async function gn(e,t,n){var i,r,d,c;const a=t.querySelector("#upload-status"),s=t.querySelector("#upload-zone");if(e.type!=="application/pdf"&&!/\.pdf$/i.test(e.name)){Be({type:"error",title:"Falscher Dateityp",desc:`<strong>${S(e.name)}</strong> ist keine PDF-Datei.`,hint:"Lade eine PDF-Datei hoch — den Zeitnachweis aus dem ESS über den <strong>Speichern-Button</strong> (Disketten-Symbol oben rechts im PDF-Viewer)."});return}if(e.size>50*1024*1024){Be({type:"error",title:"Datei zu groß",desc:`<strong>${S(e.name)}</strong> ist ${(e.size/1024/1024).toFixed(1)} MB groß.`,hint:"ESS-Zeitnachweise sind normalerweise unter 1 MB. Bitte überprüfe die Datei."});return}s.style.pointerEvents="none",s.style.opacity="0.6",a.innerHTML=`
    <div class="alert severity-info">
      <div class="loader-ring" style="width: 24px; height: 24px; border-width: 2px;"></div>
      <div class="alert-body">
        <div class="alert-title">PDF wird verarbeitet…</div>
        <p style="margin: 4px 0; font-size: 13px;"><strong>${S(e.name)}</strong> — das kann bei großen PDFs einige Sekunden dauern.</p>
      </div>
    </div>`;try{const l=await e.arrayBuffer(),o=await Si(l);if(o.tage.length===0&&!o.meta.zeitraumVon){s.style.pointerEvents="",s.style.opacity="",a.innerHTML="",Be({type:"error",title:"Diese PDF ist nicht kompatibel",desc:'Im PDF wurden keine Texte gefunden. Das passiert, wenn das PDF über „Drucken → Als PDF speichern" (z.B. „Microsoft Print to PDF") erzeugt wurde — dabei werden Texte als Vektorpfade gerendert und können nicht ausgelesen werden.',hint:'Lade dein PDF direkt aus dem ESS über den <strong>Speichern-Button</strong> herunter (Disketten-Symbol oben rechts im PDF-Viewer) — nicht über „Drucken".',screenshot:!0,producer:(i=o.meta)==null?void 0:i.producer}),st("PDF enthält keinen extrahierbaren Text.");return}const u=await qe(),h=u==null?void 0:u.personalnummer,g=o.meta.personalnummer;if(h&&g&&h!==g){const $=(u==null?void 0:u.name)||`Personalnr. ${h}`,D=o.meta.name||`Personalnr. ${g}`;if(!await ce(`Das hochgeladene PDF gehört zu einem anderen Azubi als die bisher gespeicherten Daten:

Bisher: ${$}
Jetzt:  ${D}

Wenn du fortfährst, werden alle alten Tagesdaten gelöscht und durch die neuen ersetzt. (Profil-Einstellungen wie Theme und Mail-Vorlagen bleiben erhalten.)`,{title:"Anderer Azubi erkannt",confirmLabel:"Daten ersetzen",variant:"danger"})){s.style.pointerEvents="",s.style.opacity="",a.innerHTML=`
          <div class="alert severity-info">
            <div class="alert-body">
              <div class="alert-title">Upload abgebrochen</div>
              <p style="margin: 4px 0; font-size: 13px;">Es wurden keine Daten verändert. Lade das richtige PDF (für ${S($)}) erneut hoch.</p>
            </div>
          </div>`;return}await Vn();const T=await ie();await tt({...T,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1}})}const m=await Js(o.tage,o.monate,o.meta.stichtagAuswertung);(m.skippedTage>0||m.skippedMonate>0)&&console.info(`[upload] ${m.skippedTage} Tage und ${m.skippedMonate} Monate uebersprungen — bestehende Daten haben juengeren Stichtag.`),await Ys({dateiname:e.name,personalnummer:o.meta.personalnummer??null,name:o.meta.name??null,mitarbeiterkreis:o.meta.mitarbeiterkreis??null,zeitraumVon:((r=o.meta.zeitraumVon)==null?void 0:r.toISOString())??null,zeitraumBis:((d=o.meta.zeitraumBis)==null?void 0:d.toISOString())??null,stichtagAuswertung:((c=o.meta.stichtagAuswertung)==null?void 0:c.toISOString())??null,tageCount:o.tage.length,monateCount:o.monate.length}),o.meta.mitarbeiterkreis&&await Gs(o.meta.mitarbeiterkreis);const f=await oe(),v=Hn(f),p={...Nn(),...n};(v.wochentageWoechentlich.length>0||v.wochentage14Taegig.length>0)&&(p.berufsschulMuster=v),await tt(p),a.innerHTML="",Xn()||Be({type:"success",title:"PDF erfolgreich eingelesen",desc:o.meta.zeitraumVon?`Zeitraum: ${B(o.meta.zeitraumVon)} – ${B(o.meta.zeitraumBis)}`:"Daten wurden erfolgreich verarbeitet.",stats:[{num:o.tage.length,label:"Tage"},{num:o.monate.length,label:"Monatsübersichten"}]}),N(`PDF verarbeitet: ${o.tage.length} Tage.`),document.dispatchEvent(new CustomEvent("better-ess:pdf-uploaded",{detail:{tageCount:o.tage.length,monateCount:o.monate.length}}));const y=await Wn();t.querySelector("#uploads-list").innerHTML=ea(y)}catch(l){console.error(l),a.innerHTML="",Be({type:"error",title:"Fehler beim Parsen",desc:S(l.message||String(l)),hint:'Prüfe, ob es sich um einen ESS-Zeitnachweis im richtigen Format handelt. Lade dein PDF über den Speichern-Button herunter, nicht über „Drucken".',screenshot:!0}),st("PDF konnte nicht gelesen werden.")}finally{s.style.pointerEvents="",s.style.opacity=""}}async function ji(){try{const e=await ei(),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),a=document.createElement("a"),s=new Date().toISOString().slice(0,10);a.href=n,a.download=`zeitnachweis-backup-${s}.json`,a.click(),URL.revokeObjectURL(n),N("Backup heruntergeladen.")}catch(e){st(`Export fehlgeschlagen: ${e.message}`)}}async function Ui(e){var n;const t=(n=e.target.files)==null?void 0:n[0];if(t)try{const a=await t.text(),s=JSON.parse(a);if(!await ce("Existierende Daten werden vom Backup überschrieben.",{title:"Backup importieren?",confirmLabel:"Importieren",variant:"danger"}))return;await ti(s),N("Backup erfolgreich importiert. Seite wird neu geladen…"),setTimeout(()=>location.reload(),800)}catch(a){st(`Import fehlgeschlagen: ${a.message}`)}}async function Gi(){await ce("Alle Daten (Tage, Monate, Profil, Vorlagen, Mail-Vorlagen, Fahrgeld-Vorlage) werden endgültig gelöscht. Das lässt sich nicht rückgängig machen.",{title:"ALLE Daten löschen?",confirmLabel:"Weiter zur Sicherheitsfrage",variant:"danger"})&&await ce("Letzte Warnung — wirklich alle Daten löschen?",{title:"Sicher?",confirmLabel:"Endgültig löschen",variant:"danger"})&&(await Qs(),N("Alle Daten gelöscht."),setTimeout(()=>location.reload(),600))}function Ji(e){if(!e)return"—";const t=new Date(e);return t.toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"})+" "+t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}function Be(e){const{type:t,title:n,desc:a,hint:s,screenshot:i,stats:r,producer:d}=e,c=document.createElement("div");c.className="upload-modal-overlay";const l=`
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
    </svg>`,u=r!=null&&r.length?`
    <div class="upload-modal-stats">
      ${r.map(p=>`
        <div class="upload-modal-stat">
          <div class="upload-modal-stat-num">${S(String(p.num))}</div>
          <div class="upload-modal-stat-label">${S(p.label)}</div>
        </div>
      `).join("")}
    </div>`:"",h=i?`
    <img class="upload-modal-hint-img zoomable" src="/better-ess/tutorial/speichern.png"
         alt="Speichern-Button im PDF-Viewer"
         title="Klick für Vollbild" />`:"",g=d?`<p style="font-size: 12px; color: var(--fg-subtle); margin-top: 12px;">Erkannt: Producer „${S(d)}"</p>`:"",m=t==="success"?`
      <a href="#/" class="btn primary">Zum Dashboard</a>
      <a href="#/kalender" class="btn">Kalender öffnen</a>
      <button class="btn upload-modal-close-btn">Schließen</button>`:`
      <button class="btn primary upload-modal-close-btn">Verstanden</button>`;c.innerHTML=`
    <div class="upload-modal" role="dialog" aria-modal="true">
      <div class="upload-modal-icon-wrap">
        ${t==="success"?l:o}
      </div>
      <h2 class="upload-modal-title">${S(n)}</h2>
      <p class="upload-modal-desc">${a}</p>
      ${u}
      ${s?`<p class="upload-modal-desc" style="background: var(--accent-bg); padding: 12px; border-radius: 8px; border-left: 3px solid var(--accent);">${s}</p>`:""}
      ${h}
      ${g}
      <div class="upload-modal-actions">${m}</div>
    </div>`,document.body.appendChild(c);const f=()=>{c.style.animation="upload-modal-fade 150ms ease-out reverse",setTimeout(()=>c.remove(),150),document.removeEventListener("keydown",v)},v=p=>{p.key==="Escape"&&f()};document.addEventListener("keydown",v),c.addEventListener("click",p=>{if(p.target===c){f();return}if(p.target.closest(".upload-modal-close-btn")){f();return}if(p.target.closest(".upload-modal-actions a, .upload-modal-actions button")){f();return}const y=p.target.closest("img.zoomable");y&&Qn(y.src,y.alt)})}const hn={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag"};async function Yi({root:e}){var d,c,l,o,u;const[t,n,a]=await Promise.all([ie(),Pe(),Ve("mitarbeiterkreis",null)]),s=t.berufsschulMuster??{},i=(((d=s.wochentageWoechentlich)==null?void 0:d.length)??0)>0||(((c=s.wochentage14Taegig)==null?void 0:c.length)??0)>0;e.innerHTML=`
    <h1 class="view-title">Profil</h1>
    <p class="view-subtitle">Nur das Nötigste: Alter-Kategorie und Mail-Kontakt.</p>

    <form id="profil-form" class="grid cols-2" style="gap: 24px;">
      <div class="card">
        <label class="switch-row">
          <span class="switch">
            <input type="checkbox" name="ueber18" id="ueber18-switch" ${t.ueber18?"checked":""} />
            <span class="switch-track" aria-hidden="true"></span>
            <span class="switch-thumb" aria-hidden="true"></span>
          </span>
          <span class="switch-row-label">
            <strong>Über 18</strong>
            <p class="hint">Bestimmt die anzuwendende Pausen-Regel. An → ArbZG (Erwachsene). Aus → JArbSchG (Minderjährige, strengere Pausen-Pflicht).</p>
          </span>
        </label>

        <label class="switch-row" style="margin-top: 16px;">
          <span class="switch">
            <input type="checkbox" id="azubi-switch" ${n?"checked":""} />
            <span class="switch-track" aria-hidden="true"></span>
            <span class="switch-thumb" aria-hidden="true"></span>
          </span>
          <span class="switch-row-label">
            <strong>Azubi Features</strong>
            <p class="hint">Fahrgelderstattung und Berufsschul-Erkennung. ${a?`Aus deinem PDF erkannt: Mitarbeiterkreis <code>${Xi(a)}</code> → Standardmäßig <strong>${String(a).trim().toUpperCase()==="AZ"?"an":"aus"}</strong>.`:"Wird automatisch aus dem Mitarbeiterkreis im Zeitnachweis abgeleitet (AZ = Azubi)."}</p>
          </span>
        </label>
      </div>

      <div class="card">
        <h2>Zeitwirtschaft-Kontakt</h2>
        <p class="hint" style="margin-bottom: 12px;">Standardmäßig auf die Aichtaler Zeitwirtschaft (Frau Kanarya) gesetzt — nur ändern, wenn du an einen anderen Empfänger schreiben willst. Dein Name kommt automatisch aus dem hochgeladenen Zeitnachweis-PDF.</p>
        <div class="form-group">
          <label>E-Mail-Empfänger</label>
          <input type="email" name="zeitwirtschaftEmail" value="${Oe(t.zeitwirtschaftEmail)}" placeholder="zeitwirtschaft@firma.de" />
        </div>
        <div class="form-group">
          <label>Anrede in Mails</label>
          <input type="text" name="zeitwirtschaftAnrede" value="${Oe(t.zeitwirtschaftAnrede)}" placeholder="z. B. Frau Müller" />
        </div>
      </div>

      <div class="card${n?"":" hidden"}" style="${n?"":"display:none;"}">
        <h2>Fahrgeld-Empfänger</h2>
        <div class="form-group">
          <label>E-Mail-Empfänger (To)</label>
          <input type="email" name="fahrtgeldEmpfaenger" value="${Oe(t.fahrtgeldEmpfaenger)}" placeholder="empfaenger@firma.de" />
        </div>
        <div class="form-group">
          <label>Cc (optional)</label>
          <input type="email" name="fahrtgeldCc" value="${Oe(t.fahrtgeldCc)}" placeholder="cc@firma.de" />
        </div>
        <div class="form-group">
          <label>Anrede in Mails</label>
          <input type="text" name="fahrtgeldAnrede" value="${Oe(t.fahrtgeldAnrede)}" placeholder="z. B. Frau Müller" />
        </div>
      </div>

      <div class="card${n?"":" hidden"}" style="grid-column: 1 / -1;${n?"":" display:none;"}">
        <h2>Berufsschul-Rhythmus <span style="font-size: 11px; font-weight: 500; color: var(--fg-subtle); text-transform: uppercase; letter-spacing: 0.05em; margin-left: 8px;">Automatisch erkannt</span></h2>
        ${i?`
          <div class="tag-detail">
            <div class="tag-detail-label">Wöchentlich</div>
            <div class="tag-detail-value"><strong>${((l=s.wochentageWoechentlich)==null?void 0:l.map(h=>hn[h]).join(", "))||"—"}</strong></div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Alle 2 Wochen</div>
            <div class="tag-detail-value"><strong>${((o=s.wochentage14Taegig)==null?void 0:o.map(h=>hn[h]).join(", "))||"—"}</strong>${s.referenzDatum14Taegig?` <span class="hint">(Anker: ${B(new Date(s.referenzDatum14Taegig))})</span>`:""}</div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Stunden pro Schultag</div>
            <div class="tag-detail-value">
              <strong>${s.stundenProTag!=null?s.stundenProTag.toFixed(2).replace(".",",")+"h":"—"}</strong>
              ${s.halbtags?' <span class="hint" style="color: var(--accent);">(Halbtags-Schule erkannt)</span>':""}
            </div>
          </div>
          <p class="hint" style="margin-top: 16px;">
            Das Muster wird bei jedem PDF-Upload neu aus den Daten abgeleitet. ${s.halbtags?'Da deine Schultage typischerweise weniger als 5h dauern, geht die App von Halbtags-Schule aus und meldet KEINE „BS-Stunden falsch"-Warnung, wenn dein Schultag nur '+(((u=s.stundenProTag)==null?void 0:u.toFixed(2).replace(".",","))??"4,00")+"h hat.":"Je länger der erfasste Zeitraum, desto präziser."}
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
  `,e.querySelector("#profil-form").addEventListener("submit",async h=>{var f,v,p,y,$;h.preventDefault();const g=new FormData(h.target),m={...t,ueber18:g.get("ueber18")==="on",zeitwirtschaftEmail:((f=g.get("zeitwirtschaftEmail"))==null?void 0:f.trim())||"",zeitwirtschaftAnrede:((v=g.get("zeitwirtschaftAnrede"))==null?void 0:v.trim())||"",fahrtgeldEmpfaenger:((p=g.get("fahrtgeldEmpfaenger"))==null?void 0:p.trim())||"",fahrtgeldCc:((y=g.get("fahrtgeldCc"))==null?void 0:y.trim())||"",fahrtgeldAnrede:(($=g.get("fahrtgeldAnrede"))==null?void 0:$.trim())||""};await tt(m),N("Profil gespeichert.")});const r=e.querySelector("#azubi-switch");r==null||r.addEventListener("change",async h=>{await Us(h.target.checked),typeof window.__applyAzubiVisibility=="function"&&await window.__applyAzubiVisibility(),N(h.target.checked?"Azubi-Features an.":"Azubi-Features aus."),Ws()})}function Oe(e){return String(e??"").replace(/"/g,"&quot;")}function Xi(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function Qi({params:e,root:t}){var l,o,u,h;const n=e.datum,a=await w.tage.get(n),s=await ie();if(!a){t.innerHTML=`<h1 class="view-title">Tag nicht gefunden</h1><p>Für ${n} liegen keine Daten vor.</p><a href="#/" class="btn">← Dashboard</a>`;return}const i=O(n),r=a.tagestyp==="Stempelzeit"?Pn(a,s):null,d=Bt(i,s.berufsschulMuster),c=An(a.zeitSpannen);t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/kalender/${n.slice(0,7)}" class="btn sm">← Zum Monat</a>
    </div>
    <h1 class="view-title">${Ft(i)}</h1>
    <p class="view-subtitle">${a.tagestyp??"Kein Typ"} · KW ${(l=a.wocheKey)==null?void 0:l.split("-")[1]}</p>

    ${c?`
      <div class="card kommen-gehen-hero" style="margin-bottom: 24px;">
        <div class="hint" style="text-transform: uppercase; letter-spacing: 0.05em; font-size: 11px; margin-bottom: 10px;">Tages-Rahmen</div>
        ${In(c,{size:32})}
      </div>
    `:""}

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${a.ist!=null?a.ist.toFixed(2).replace(".",",")+"h":"—"}</div>
        <div class="hint">= ${a.ist!=null?We(a.ist):"—"}</div>
      </div>
      <div class="card">
        <h3>Soll-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${a.soll!=null?a.soll.toFixed(2).replace(".",",")+"h":"—"}</div>
      </div>
      <div class="card">
        <h3>Differenz</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${a.diff>.05?"var(--success)":a.diff<-.05?"var(--danger)":"var(--fg)"};">${a.diff!=null?ge(a.diff,{signed:!0}):"—"}</div>
      </div>
    </div>

    <div class="grid cols-2" style="gap: 24px;">
      <div class="card">
        <h2>Zeitstempel</h2>
        ${(o=a.zeitSpannen)!=null&&o.length?a.zeitSpannen.map(g=>`
              <div class="tag-detail">
                <div class="tag-detail-label">${Ke(g.aktivitaet??"Stempelzeit")}</div>
                <div class="tag-detail-value tabular">${g.von??"—"} – ${g.bis??"—"}</div>
              </div>
            `).join(""):'<p class="hint">Keine Stempelzeiten für diesen Tag.</p>'}
      </div>

      <div class="card">
        <h2>Klassifikation</h2>
        <div class="tag-detail">
          <div class="tag-detail-label">Tagestyp</div>
          <div class="tag-detail-value">${a.tagestyp?`<span class="pill ${er(a.tagestyp)}">${Ke(a.tagestyp)}</span>`:"—"}</div>
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

      ${r&&!r.keinAnspruch?r.altReglement?`
        <div class="card" style="grid-column: 1 / -1;">
          <h2>Pausen-Analyse</h2>
          <div class="grid cols-2">
            <div>
              <div class="tag-detail">
                <div class="tag-detail-label">Arbeitszeit (netto)</div>
                <div class="tag-detail-value tabular">${(u=r.arbeitszeitOhnePause)==null?void 0:u.toFixed(2).replace(".",",")}h</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Gestempelte Pause</div>
                <div class="tag-detail-value tabular">${Math.round((r.gestempeltePause??0)*60)} min</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Abgezogene Pause (laut PDF)</div>
                <div class="tag-detail-value tabular">${Math.round((r.abgezogenePause??0)*60)} min</div>
              </div>
            </div>
          </div>
          <p class="hint" style="margin-top: 12px;">Vor dem 01.04.2026 galt die alte Regelung: nicht ausstempeln zur Pause nötig — wenn man auf dem Gelände blieb, wurde automatisch 1h Pause abgezogen. Die App nimmt deshalb die Pause für diese Tage einfach aus dem PDF und prüft sie nicht gegen die gesetzliche Pflicht.</p>
        </div>
      `:`
        <div class="card" style="grid-column: 1 / -1;">
          <h2>Pausen-Analyse</h2>
          <div class="grid cols-2">
            <div>
              <div class="tag-detail">
                <div class="tag-detail-label">Arbeitszeit (netto)</div>
                <div class="tag-detail-value tabular">${(h=r.arbeitszeitOhnePause)==null?void 0:h.toFixed(2).replace(".",",")}h</div>
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
              <div class="alert-body">${Ke(r.warnung)}</div>
            </div>
          `:""}
        </div>
      `:""}
    </div>
  `}function er(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function Ke(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const tr=[{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:180,label:"6 Monate"},{key:365,label:"1 Jahr"},{key:730,label:"2 Jahre"},{key:"alles",label:"Alles"}];function nr(e){return tr.filter(t=>t.key==="alles"||t.key<e)}async function ar({root:e}){var o,u;const[t,n]=await Promise.all([oe(),ot()]);if(!t.length){e.innerHTML='<h1 class="view-title">Analytics</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a=nr(t.length);let s=a.some(h=>h.key===30)?30:"alles";const i=n.length>=6;e.innerHTML=`
    <h1 class="view-title">Analytics</h1>

    ${i?`
      <div class="card" style="margin-bottom: 24px;">
        <h2>Saldo-Verlauf pro Monat</h2>
        <div class="chart-wrap tall"><canvas id="c-saldo"></canvas></div>
      </div>
    `:""}

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
        <div class="zeitraum-controls">
          <div class="zeitraum-nav" id="startend-nav" hidden>
            <button type="button" class="zeitraum-nav-btn" data-dir="prev" title="Voriger Zeitraum">‹</button>
            <span class="zeitraum-nav-label">—</span>
            <button type="button" class="zeitraum-nav-btn" data-dir="next" title="Nächster Zeitraum">›</button>
          </div>
          <div class="segmented" id="startend-zeitraum">
            ${a.map(h=>`<button type="button" data-key="${h.key}" class="${s===h.key?"active":""}">${h.label}</button>`).join("")}
          </div>
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
  `;let r=0;const d=()=>{if(s==="alles")return t;const h=t.length,g=Math.min(s,h),m=h+r*g,f=m-g;return m<=0?[]:t.slice(Math.max(0,f),m)},c=()=>{const h=e.querySelector("#startend-nav");if(!h)return;const g=s==="alles";if(h.hidden=g,g)return;const m=et(t.length,s),f=d();h.querySelector('.zeitraum-nav-btn[data-dir="prev"]').disabled=r<=m,h.querySelector('.zeitraum-nav-btn[data-dir="next"]').disabled=r>=0;const v=h.querySelector(".zeitraum-nav-label");v&&(v.textContent=jn(f,s))},l=()=>{Xt(e.querySelector("#c-startend"),d()),c()};requestAnimationFrame(()=>{i&&Ds(e.querySelector("#c-saldo"),n),Ls(e.querySelector("#c-wochen"),t),Xt(e.querySelector("#c-startend"),d()),Ts(e.querySelector("#c-wochentag"),t),Es(e.querySelector("#c-pausen"),t),Fs(e.querySelector("#c-donut"),t),Ps(e.querySelector("#c-alle-tage"),t.slice(-30)),c()}),(o=e.querySelector("#startend-zeitraum"))==null||o.addEventListener("click",h=>{const g=h.target.closest("button[data-key]");if(!g||g.disabled)return;const m=g.getAttribute("data-key"),f=m==="alles"?"alles":parseInt(m,10);f!==s&&(s=f,r=0,e.querySelectorAll("#startend-zeitraum button").forEach(v=>v.classList.toggle("active",v===g)),l())}),(u=e.querySelector("#startend-nav"))==null||u.addEventListener("click",h=>{const g=h.target.closest(".zeitraum-nav-btn");if(!g||g.disabled||s==="alles")return;const m=g.getAttribute("data-dir")==="prev"?-1:1,f=et(t.length,s);let v=r+m;v<f&&(v=f),v>0&&(v=0),v!==r&&(r=v,l())})}function sr(e){return String(e??"").replace(/"/g,"&quot;")}async function yt({params:e,root:t}){const[n,a,s,i,r,d]=await Promise.all([oe(),ot(),ie(),qe(),ct(),Pe()]),c=Object.fromEntries(r.map(b=>[b.key,b]));if(!n.length){t.innerHTML=`
      <h1 class="view-title">Kalender</h1>
      <p class="view-subtitle">Noch keine Daten geladen.</p>
      <a href="#/daten" class="btn primary">Zum Upload</a>`;return}const l=[...new Set(n.map(b=>b.monatKey))].sort(),o=e.yyyymm,u=l.includes(o)?o:l[l.length-1],h=n.filter(b=>b.monatKey===u),g=[...new Set(h.map(b=>b.wocheKey))].sort(),m=e.yyyykw,f=g.includes(m)?m:null,v=l.indexOf(u),p=v>0?l[v-1]:null,y=v<l.length-1?l[v+1]:null,$=At(u),D=a.find(b=>b.monatKey===u),x=En(n,a),T=x.filter(b=>b.monatKey===u),W=i!=null&&i.stichtagAuswertung?new Date(i.stichtagAuswertung):new Date,U=dt(n,s,W,void 0,{isAzubi:d}),q=U.filter(b=>b.datum.startsWith(u)),k=lr({aktiverMonatKey:u,monatLabel:$,prevMonatKey:p,nextMonatKey:y,tageAnzahl:h.length,warnungenAnzahl:q.length});f?await rr({root:t,switcherHtml:k,aktiverMonatKey:u,aktiveWocheKey:f,vollKurve:x,alleWarnungen:U,profil:s,vorlagenOverrides:c}):await ir({root:t,switcherHtml:k,monatLabel:$,tageMonat:h,monatsKurve:T,monatUebersicht:D,monatsWarnungen:q,aktiverMonatKey:u,profil:s,vorlagenOverrides:c})}async function ir({root:e,switcherHtml:t,monatLabel:n,tageMonat:a,monatsKurve:s,monatUebersicht:i,monatsWarnungen:r,aktiverMonatKey:d,profil:c,vorlagenOverrides:l}){e.innerHTML=`
    ${t}

    ${i?or(i):""}

    <div class="card" style="margin-bottom: 24px;">
      <h2>Saldo-Verlauf</h2>
      <div class="chart-wrap tall"><canvas id="chart-kalender-monat"></canvas></div>
    </div>

    ${r.length?`
      <div class="card" style="margin-bottom: 24px;">
        <h2>Auffälligkeiten</h2>
        ${r.map(o=>ta(o,c,l)).join("")}
      </div>
    `:""}

    <div class="card" style="margin-bottom: 24px;">
      <h2 style="margin-bottom: 16px;">Wochen</h2>
      ${cr(s,d)}
    </div>

    <div class="card">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Tage</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">H/M zum Kopieren</span>
      </div>
      <div id="tage-liste-kalender">${ut(s.slice().reverse(),{warnungen:r})}</div>
    </div>
  `,s.length&&(requestAnimationFrame(()=>{const o=e.querySelector("#chart-kalender-monat");o&&_t(o,s)}),Nt(e.querySelector("#tage-liste-kalender")))}async function rr({root:e,switcherHtml:t,aktiverMonatKey:n,aktiveWocheKey:a,vollKurve:s,alleWarnungen:i,profil:r,vorlagenOverrides:d}){var p;const c=s.filter(y=>y.wocheKey===a),l=c.reduce((y,$)=>y+lt($),0),o=c.reduce((y,$)=>y+Tt($),0),u=+(l-o).toFixed(2),h=y=>y>.05?"var(--success)":y<-.05?"var(--danger)":"var(--fg)",g=i.filter(y=>c.some($=>$.datum===y.datum)),m=(p=c[0])==null?void 0:p.datum,f=m?Re(O(m)):"",v=a.split("-")[1]||"?";e.innerHTML=`
    ${t}

    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 12px;">
      <a href="#/kalender/${n}" class="btn sm">← Zur Monatsansicht</a>
    </div>

    <h2 style="margin: 0 0 4px;">KW ${S(v)}</h2>
    <p class="view-subtitle">${S(f)} · ${c.length} Tage · ${g.length} Auffälligkeiten</p>

    ${c.length===0?`
      <p class="hint" style="text-align: center; padding: 32px;">Keine Tage für diese Woche im PDF.</p>
    `:`
      <div class="grid cols-3" style="margin-bottom: 24px;">
        <div class="card">
          <h3>Ist-Stunden</h3>
          <div class="tabular" style="font-size: 28px; font-weight: 650;">${l.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="card">
          <h3>Soll-Stunden</h3>
          <div class="tabular" style="font-size: 28px; font-weight: 650;">${o.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="card">
          <h3>Differenz</h3>
          <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${h(u)};">${ge(u,{signed:!0})}</div>
        </div>
      </div>

      <div class="card" style="margin-bottom: 24px;">
        <h2>Saldo-Verlauf in dieser Woche</h2>
        <div class="chart-wrap"><canvas id="chart-kalender-woche"></canvas></div>
      </div>

      ${g.length?`
        <div class="card" style="margin-bottom: 24px;">
          <h2>Auffälligkeiten in KW ${S(v)}</h2>
          ${g.map(y=>ta(y,r,d)).join("")}
        </div>
      `:""}

      <div class="card">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Tage</h2>
          <span style="color: var(--fg-muted); font-size: 13px;">H/M zum Kopieren</span>
        </div>
        <div id="tage-liste-kalender">${ut(c,{warnungen:g})}</div>
      </div>
    `}
  `,c.length&&(requestAnimationFrame(()=>{const y=e.querySelector("#chart-kalender-woche");y&&_t(y,c)}),Nt(e.querySelector("#tage-liste-kalender")))}function lr({aktiverMonatKey:e,monatLabel:t,prevMonatKey:n,nextMonatKey:a,tageAnzahl:s,warnungenAnzahl:i}){const r=n?At(n):"",d=a?At(a):"";return`
    <div class="card kalender-monat-bar" style="margin-bottom: 24px;">
      <div class="kalender-monat-nav">
        <a class="kalender-monat-btn ${n?"":"is-disabled"}"
           ${n?`href="#/kalender/${n}"`:'aria-disabled="true"'}
           title="${n?"Zu "+S(r):"Kein vorheriger Monat"}"
           aria-label="Vorheriger Monat">
          <span class="kalender-monat-btn-arrow" aria-hidden="true">‹</span>
          <span class="kalender-monat-btn-text">${n?S(r):""}</span>
        </a>
        <div class="kalender-monat-titel">
          <h2 style="margin: 0;">${S(t)}</h2>
          <div class="hint">${s} Tage · ${i} Auffälligkeiten</div>
        </div>
        <a class="kalender-monat-btn next ${a?"":"is-disabled"}"
           ${a?`href="#/kalender/${a}"`:'aria-disabled="true"'}
           title="${a?"Zu "+S(d):"Kein nächster Monat"}"
           aria-label="Nächster Monat">
          <span class="kalender-monat-btn-text">${a?S(d):""}</span>
          <span class="kalender-monat-btn-arrow" aria-hidden="true">›</span>
        </a>
      </div>
    </div>`}function or(e){var i,r,d;const t=((i=e.glz)==null?void 0:i.saldoGesamt)??0,n=((r=e.glz)==null?void 0:r.saldoVorperiode)??0,a=((d=e.glz)==null?void 0:d.saldoAktuellePeriode)??0,s=c=>c>.05?"var(--success)":c<-.05?"var(--danger)":"var(--fg)";return`
    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>GLZ-Saldo gesamt</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${s(t)};">${ge(t,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Vorperiode</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${s(n)};">${ge(n,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Akt. Periode</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${s(a)};">${ge(a,{signed:!0})}</div>
      </div>
    </div>`}function cr(e,t){var s;const n={};for(const i of e)n[s=i.wocheKey]??(n[s]={key:i.wocheKey,tage:[],ist:0,soll:0}),n[i.wocheKey].tage.push(i),n[i.wocheKey].ist+=lt(i),n[i.wocheKey].soll+=Tt(i);const a=Object.keys(n).sort();return a.length?a.map(i=>{var h;const r=n[i],d=+(r.ist-r.soll).toFixed(2),c=d>.05?"var(--success)":d<-.05?"var(--danger)":"var(--fg-muted)",l=(h=r.tage.slice().sort((g,m)=>g.datum.localeCompare(m.datum))[0])==null?void 0:h.datum,o=l?Re(O(l)):"",u=i.split("-")[1]||"?";return`
      <a href="#/kalender/${t}/${i}" class="list-item" style="text-decoration: none; color: inherit;">
        <div class="tabular" style="font-size: 16px; font-weight: 600; color: var(--fg-muted); min-width: 80px;">KW ${S(u)}</div>
        <div>
          <div class="list-item-title tabular">${S(o)}</div>
          <div class="list-item-sub">${r.tage.length} Tage · Ist ${r.ist.toFixed(2).replace(".",",")}h · Soll ${r.soll.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="tabular" style="font-weight: 600; font-size: 16px; color: ${c};">${ge(d,{signed:!0})}</div>
        <div style="color: var(--fg-subtle);">→</div>
      </a>`}).join(""):'<p style="color: var(--fg-muted);">Keine Wochen.</p>'}function ta(e,t,n){const a=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";let s=null;if(e.mailVorlageKey&&t){const i=Ze(e.mailVorlageKey,n==null?void 0:n[e.mailVorlageKey]);if(i){const r=Ot(t,e);s=Kt(t,i,r)}}return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${a}</div>
      <div class="alert-body">
        <div class="alert-title">${S(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${S(e.beschreibung)}</p>
        <div class="alert-actions">
          ${s?`<a href="${sr(s)}" class="btn-mail-medium"><img src="outlook-logo.png" alt="" class="outlook-logo-medium" />E-Mail</a>`:""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
        </div>
      </div>
    </div>`}function At(e){const[t,n]=e.split("-"),a=new Date(parseInt(t,10),parseInt(n,10)-1,1);return L(a,"MMMM yyyy",{locale:te})}const dr={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};async function wt({params:e,root:t}){const[n,a,s,i]=await Promise.all([oe(),ie(),qe(),Pe()]),r=ur(e);if(!n.length){t.innerHTML=`
      <h1 class="view-title">Kalender · ${S(r.label)}</h1>
      <p class="view-subtitle">Noch keine Daten geladen.</p>
      <a href="#/daten" class="btn primary">Zum Upload</a>`;return}const d=n.filter(r.predicate).sort((g,m)=>g.datum.localeCompare(m.datum)),c=s!=null&&s.stichtagAuswertung?new Date(s.stichtagAuswertung):new Date,o=dt(n,a,c,void 0,{isAzubi:i}).filter(g=>d.some(m=>m.datum===g.datum)),u=d.reduce((g,m)=>g+(m.ist??0),0),h=u>0?` · ${u.toFixed(2).replace(".",",")}h kumuliert`:"";t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/kalender" class="btn sm">← Kalender</a>
    </div>
    <h1 class="view-title">${S(r.titel)}</h1>
    <p class="view-subtitle">${d.length} Tag${d.length===1?"":"e"} insgesamt${h}</p>

    ${d.length===0?`
      <div class="card"><p class="hint">Keine Tage passen zu diesem Filter.</p></div>
    `:`
      <div class="card">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Tage</h2>
          <span style="color: var(--fg-muted); font-size: 13px;">H/M zum Kopieren</span>
        </div>
        <div id="tagestyp-tage-liste">${ut(d,{warnungen:o})}</div>
      </div>
    `}
  `,Nt(t.querySelector("#tagestyp-tage-liste"))}function ur(e){if(e.typ!=null){const t=decodeURIComponent(e.typ);return{label:t,titel:`${t}-Tage`,predicate:n=>n.tagestyp===t}}if(e.wd!=null){const t=decodeURIComponent(e.wd).toUpperCase(),n=dr[t]||t;return{label:n,titel:`Tage am ${n}`,predicate:a=>a.wochentag===t}}if(e.bucket!=null){const t=parseInt(decodeURIComponent(e.bucket),10),n=t+14;return{label:`${t}–${n} min Pause`,titel:`Tage mit Pause ${t}–${n} min`,predicate:a=>{if(a.tagestyp!=="Stempelzeit"||!a.zeitSpannen||a.zeitSpannen.length<2)return!1;const s=Math.round(Et(a.zeitSpannen)*60);return s>=t&&s<=n}}}return{label:"Filter",titel:"Tage (kein Filter)",predicate:()=>!0}}Sn.workerSrc=Un;function gr(e){if(!e||e.byteLength<5)return!1;const t=new Uint8Array(e,0,5);return t[0]===37&&t[1]===80&&t[2]===68&&t[3]===70&&t[4]===45}async function na(e){var x,T,W,U,q,k;let t;try{t=await Mn({data:new Uint8Array(e.slice(0))}).promise}catch{return{ok:!1,fehler:"PDF konnte nicht gelesen werden — die Datei ist beschädigt oder verschlüsselt."}}if(t.numPages<1)return{ok:!1,fehler:"PDF hat keine Seiten."};const n=await t.getPage(1),s=(await n.getAnnotations()).filter(b=>b.subtype==="Widget");if(s.length<20)return{ok:!1,fehler:"Diese PDF ist kein ausfüllbares Formular — bitte die Original-Vorlage hochladen."};const d=(await n.getTextContent()).items.filter(b=>b.str&&b.transform).map(b=>({text:b.str,x:b.transform[4],y:b.transform[5],width:b.width,height:b.height})).filter(b=>Math.abs(b.y-636)<4);let c="";for(const b of d){const M=b.text.match(/(\d{6,8})/);if(M&&!b.text.toLowerCase().includes("kst")){c=M[1];break}}const l=hr(s),o=Me(l.monatJahr),h=(Me(l.persNr).match(/\d+/)||[""])[0],g=Me(l.name).trim(),m=kt(l.vonSlots),f=kt(l.nachSlots),v=kt(l.betragSlots),p=fr(v),y=Me(l.auszubildender).trim(),$=y.replace(/^\s*\d{1,2}\.\d{1,2}\.\d{2,4}\s*/,"").trim(),D=[];return g||D.push("name"),h||D.push("persNr"),c||D.push("kst"),m||D.push("vonHaltestelle"),f||D.push("nachHaltestelle"),(!p||p<=0)&&D.push("betragProTag"),!g&&!h&&!m&&!f&&!p?{ok:!1,fehler:"Diese PDF ist eine komplett leere Vorlage — bitte zuerst eine eigene Vorlage einmal von Hand mit Name, Pers.-Nr., Strecke und Tagessatz ausfüllen und dann hochladen."}:{ok:!0,konstanten:{name:g,persNr:h,kst:c,vonHaltestelle:m,nachHaltestelle:f,betragProTag:p,unterschriftText:$},layout:{monatJahrField:((x=l.monatJahr)==null?void 0:x.fieldName)||null,persNrField:((T=l.persNr)==null?void 0:T.fieldName)||null,nameField:((W=l.name)==null?void 0:W.fieldName)||null,auszubildenderField:((U=l.auszubildender)==null?void 0:U.fieldName)||null,summeField:((q=l.summe)==null?void 0:q.fieldName)||null,datumFields:l.datumSlots.map(b=>b.fieldName),vonFields:l.vonSlots.map(b=>b.fieldName),nachFields:l.nachSlots.map(b=>b.fieldName),betragFields:l.betragSlots.map(b=>b.fieldName),auszubildenderRect:((k=l.auszubildender)==null?void 0:k.rect)||null},vorhandeneEintraege:{monatJahr:o,auszubildenderText:y,anzahlBefuellteDatumZeilen:l.datumSlots.filter(b=>Me(b)).length},missing:D,quelle:"pdf"}}function hr(e){const t=e.map(g=>{const[m,f,v,p]=g.rect;return{fieldName:g.fieldName,fieldValue:g.fieldValue??"",rect:[m,f,v,p],x:(m+v)/2,y:(f+p)/2,width:v-m,height:p-f}}),n=t.find(g=>g.y>660&&g.x<250)||null,a=t.find(g=>g.y>660&&g.x>400)||null,s=t.find(g=>g.y>630&&g.y<660&&g.x<250)||null,i=t.filter(g=>g.y>370&&g.y<580),r=(g,m)=>m.y-g.y,d=i.filter(g=>g.x>0&&g.x<140).sort(r),c=i.filter(g=>g.x>140&&g.x<290).sort(r),l=i.filter(g=>g.x>290&&g.x<460).sort(r),o=i.filter(g=>g.x>460).sort(r),u=t.find(g=>g.y<370&&g.y>320&&g.x>460)||null,h=t.find(g=>g.y<340&&g.y>310&&g.x<200)||null;return{monatJahr:n,persNr:a,name:s,datumSlots:d,vonSlots:c,nachSlots:l,betragSlots:o,summe:u,auszubildender:h}}function Me(e){return e?String(e.fieldValue??"").trim():""}function kt(e){for(const t of e){const n=Me(t);if(n)return n}return""}function fr(e){if(!e)return 0;const t=String(e).replace(/[^\d,.\-]/g,"").replace(/\./g,"").replace(",","."),n=parseFloat(t);return Number.isFinite(n)?n:0}const aa="Fahrgelderstattung",mr="C4",sa="C5",ia="F4",ra="F5",we=10,Se=19;function fn(e,t){return e.filter(n=>n.monatKey===t).filter(n=>n.tagestyp==="Berufsschule").filter(n=>(n.ist??0)>0).sort((n,a)=>n.datum.localeCompare(a.datum))}async function pr(e){if(gr(e)){const t=await na(e);return t.ok?{ok:!0,format:"pdf",konstanten:t.konstanten,layout:t.layout,missing:t.missing,vorhandeneEintraege:t.vorhandeneEintraege,unterschriftAuto:null}:t}return await br(e)}async function br(e){const t=(await le(async()=>{const{default:v}=await import("./exceljs.min-BhfpbegZ.js").then(p=>p.e);return{default:v}},__vite__mapDeps([0,1]))).default,n=new t.Workbook;try{await n.xlsx.load(e)}catch{return{ok:!1,fehler:"Die Excel-Datei ist beschädigt oder kein gültiges .xlsx-Format. Bitte die Datei neu speichern und nochmal versuchen."}}const a=n.getWorksheet(aa)??n.worksheets[0];if(!a)return{ok:!1,fehler:"Excel hat keine Arbeitsblätter — die Datei scheint leer zu sein."};const s=v=>{const p=a.getCell(v).value;return p==null?"":typeof p=="object"&&p.text?String(p.text):typeof p=="object"&&p.richText?p.richText.map(y=>y.text).join(""):String(p)},i=s(sa).trim(),r=s(ia).trim(),d=s(ra).trim(),c=(r.match(/\d+/)||[""])[0],l=(d.match(/\d+/)||[""])[0],o=s(`C${we}`).trim(),u=s(`E${we}`).trim(),h=a.getCell(`G${we}`).value,g=typeof h=="number"?h:parseFloat(String(h).replace(",","."))||0;let m=null;try{const v=new Set(a.getImages().map(y=>parseInt(y.imageId,10))),p=(n.media||[]).map((y,$)=>({media:y,index:$})).filter(({media:y,index:$})=>(y==null?void 0:y.type)==="image"&&!v.has($)&&y.buffer);if(p.length>0){p.sort((x,T)=>(T.media.buffer.length||0)-(x.media.buffer.length||0));const y=p[0].media,$=y.buffer,D=$ instanceof ArrayBuffer?$:$.buffer?$.buffer.slice($.byteOffset||0,($.byteOffset||0)+$.byteLength):null;if(D){const x=(y.extension||"").toLowerCase();m={bytes:D,extension:x==="jpg"?"jpeg":x||"png",quelle:"auto-aus-vorlage"}}}}catch(v){console.warn("[fahrtgeld] Unterschrift-Auto-Extraktion fehlgeschlagen:",v)}if(!i&&!c&&!l&&!o&&!u&&!g)return{ok:!1,fehler:"Diese Excel scheint nicht im Format der der Standard-Fahrgelderstattung zu sein — keine der erwarteten Felder wurde gefunden. Bitte eine Original-Vorlage hochladen."};const f=[];return i||f.push("name"),c||f.push("persNr"),l||f.push("kst"),o||f.push("vonHaltestelle"),u||f.push("nachHaltestelle"),(!g||g<=0)&&f.push("betragProTag"),{ok:!0,format:"excel",konstanten:{name:i,persNr:c,kst:l,vonHaltestelle:o,nachHaltestelle:u,betragProTag:g},missing:f,unterschriftAuto:m}}async function vr({templateBytes:e,monatKey:t,bsTage:n,konstanten:a,unterschriftBytes:s,unterschriftExtension:i}){const r=!e;e||(e=await yr());const d=(await le(async()=>{const{default:k}=await import("./exceljs.min-BhfpbegZ.js").then(b=>b.e);return{default:k}},__vite__mapDeps([0,1]))).default,c=new d.Workbook;try{await c.xlsx.load(e)}catch{throw new Error("Die hinterlegte Excel-Vorlage ist beschädigt — bitte unter Fahrgelderstattung neu hochladen.")}const l=c.getWorksheet(aa)??c.worksheets[0];if(!l)throw new Error("Die Excel-Vorlage hat kein passendes Arbeitsblatt — bitte eine Original-Fahrgelderstattung-Vorlage hochladen.");if(r||s&&i)try{Array.isArray(l._media)&&(l._media=l._media.filter(k=>{var M,E,V,C;return(((E=(M=k==null?void 0:k.range)==null?void 0:M.tl)==null?void 0:E.nativeRow)??((C=(V=k==null?void 0:k.range)==null?void 0:V.tl)==null?void 0:C.row)??0)<18}))}catch(k){console.warn("[fahrtgeld] Bild-Cleanup fehlgeschlagen:",k)}const[u,h]=t.split("-").map(k=>parseInt(k,10)),g=new Date(u,h-1,1,12,0,0),m=L(g,"MMMM yy",{locale:te}),f=l.getCell(mr);f.value=m,f.numFmt="@",l.getCell(sa).value=a.name,l.getCell(ia).value=`Pers.-Nr.: ${a.persNr}`,l.getCell(ra).value=`KST: ${a.kst}`;for(let k=we;k<=Se;k++)l.getCell(`A${k}`).value=null,l.getCell(`C${k}`).value=null,l.getCell(`E${k}`).value=null,l.getCell(`G${k}`).value=null;const v=Se-we+1,p=n.slice(0,v);for(let k=0;k<p.length;k++){const b=p[k],M=we+k,[E,V,C]=b.datum.split("-").map(Number);l.getCell(`A${M}`).value=new Date(E,V-1,C,12,0,0),l.getCell(`C${M}`).value=a.vonHaltestelle,l.getCell(`E${M}`).value=a.nachHaltestelle,l.getCell(`G${M}`).value=a.betragProTag}const y=+(p.length*(a.betragProTag??0)).toFixed(2),$=l.getCell(`G${Se+1}`);$.value={formula:`SUM(G${we}:G${Se})`,result:y};const x=L(new Date,"dd.MM.yyyy"),T=l.getCell("A21");if(T.value=a.unterschriftText?`${x} ${a.unterschriftText}`:x,T.alignment={vertical:"bottom",horizontal:"center",wrapText:!1},s&&i){const k=c.addImage({buffer:s,extension:i}),b=197,M=80,E=55,V=185,C=Mr(s);let R=V,ne=E;if(C&&C.width>0&&C.height>0){const ve=Math.min(V/C.width,E/C.height);R=Math.round(C.width*ve),ne=Math.round(C.height*ve)}const be=Math.max(0,Math.round((b-R)/2))/M;l.addImage(k,{tl:{col:be,row:20.04},ext:{width:R,height:ne},editAs:"oneCell"})}for(let k=Se+3;k<=Se+5;k++)for(const b of["A","B","C","D","E","F","G"]){const M=l.getCell(`${b}${k}`),E=M.value;typeof E=="string"&&/^[A-Z]\d+(-\d+)?$/.test(E.trim())&&(M.value=null)}const W=await c.xlsx.writeBuffer(),U=new Blob([W],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),q=la(a.name,g);return{blob:U,dateiname:q,anzahlTage:p.length,ueberzaehlig:n.length-p.length}}function la(e,t,n="xlsx"){const a=L(t,"MMMM",{locale:te}),s=L(t,"yy");let i=(e||"Azubi").trim();const r=/^(.+?),\s*(.+)$/.exec(i);return r&&(i=`${r[2].trim()} ${r[1].trim()}`),`Fahrgelderstattung ${i} ${a} ${s}.${n}`}let xt=null;async function yr(){return xt||(xt=(async()=>{const t=await fetch("/better-ess/templates/fahrgeld-vorlage.xlsx");if(!t.ok)throw new Error(`Standard-Excel-Vorlage nicht ladbar (HTTP ${t.status})`);return await t.arrayBuffer()})()),xt}let $t=null;async function wr(){return $t||($t=(async()=>{const t=await fetch("/better-ess/templates/fahrgeld-vorlage.pdf");if(!t.ok)throw new Error(`Standard-PDF-Vorlage nicht ladbar (HTTP ${t.status})`);const n=await t.arrayBuffer(),s=(await na(n)).layout||await kr(n);return{bytes:n,layout:s}})()),$t}async function kr(e){const i=(await(await(await(await le(()=>import("./pdfjs-BnPRJEQ6.js"),[])).getDocument({data:new Uint8Array(e.slice(0))}).promise).getPage(1)).getAnnotations()).filter(p=>p.subtype==="Widget").map(p=>{const[y,$,D,x]=p.rect;return{fieldName:p.fieldName,rect:p.rect,x:(y+D)/2,y:($+x)/2}}),r=(p,y)=>y.y-p.y,d=i.filter(p=>p.y>370&&p.y<580),c=i.find(p=>p.y>660&&p.x<250),l=i.find(p=>p.y>660&&p.x>400),o=i.find(p=>p.y>630&&p.y<660&&p.x<250),u=d.filter(p=>p.x<140).sort(r),h=d.filter(p=>p.x>140&&p.x<290).sort(r),g=d.filter(p=>p.x>290&&p.x<460).sort(r),m=d.filter(p=>p.x>460).sort(r),f=i.find(p=>p.y<370&&p.y>320&&p.x>460),v=i.find(p=>p.y<340&&p.y>310&&p.x<200);return{monatJahrField:(c==null?void 0:c.fieldName)||null,persNrField:(l==null?void 0:l.fieldName)||null,nameField:(o==null?void 0:o.fieldName)||null,auszubildenderField:(v==null?void 0:v.fieldName)||null,summeField:(f==null?void 0:f.fieldName)||null,datumFields:u.map(p=>p.fieldName),vonFields:h.map(p=>p.fieldName),nachFields:g.map(p=>p.fieldName),betragFields:m.map(p=>p.fieldName),auszubildenderRect:(v==null?void 0:v.rect)||null}}async function xr({templateBytes:e,monatKey:t,bsTage:n,konstanten:a,layout:s,unterschriftBytes:i,unterschriftExtension:r}){if(!e||!s){const b=await wr();e=e||b.bytes,s=s||b.layout}const{PDFDocument:d}=await le(async()=>{const{PDFDocument:b}=await import("./index-Bf057_RE.js");return{PDFDocument:b}},__vite__mapDeps([2,1]));let c;try{c=await d.load(e,{ignoreEncryption:!0})}catch{throw new Error("Die hinterlegte PDF-Vorlage ist beschädigt — bitte unter Fahrgelderstattung neu hochladen.")}const l=c.getForm(),[o,u]=t.split("-").map(b=>parseInt(b,10)),h=new Date(o,u-1,1,12,0,0),g=L(h,"MMMM yy",{locale:te});G(l,s.monatJahrField,g),a.name&&G(l,s.nameField,a.name),a.persNr&&G(l,s.persNrField,a.persNr);const m=s.datumFields||[],f=s.vonFields||[],v=s.nachFields||[],p=s.betragFields||[],y=Math.min(m.length,f.length,v.length,p.length);for(let b=0;b<y;b++)G(l,m[b],""),G(l,f[b],""),G(l,v[b],""),G(l,p[b],"");const $=n.slice(0,y),D=a.betragProTag!=null&&a.betragProTag>0?a.betragProTag.toFixed(2).replace(".",","):"";for(let b=0;b<$.length;b++){const M=$[b];G(l,m[b],$r(M.datum)),a.vonHaltestelle&&G(l,f[b],a.vonHaltestelle),a.nachHaltestelle&&G(l,v[b],a.nachHaltestelle),D&&G(l,p[b],D)}const x=+($.length*(a.betragProTag??0)).toFixed(2);G(l,s.summeField,x.toFixed(2).replace(".",","));const T=L(new Date,"dd.MM.yyyy"),W=a.unterschriftText?`${T} ${a.unterschriftText}`:T;G(l,s.auszubildenderField,W);try{const{PDFName:b}=await le(async()=>{const{PDFName:V}=await import("./index-Bf057_RE.js");return{PDFName:V}},__vite__mapDeps([2,1])),E=c.getPage(0).node.Annots();if(E)for(let V=E.size()-1;V>=0;V--){const C=E.get(V),R=c.context.lookup(C);if(R&&typeof R.lookup=="function"){const ne=R.lookup(b.of("Subtype"));ne&&String(ne)==="/StrikeOut"&&E.remove(V)}}}catch(b){console.warn("[fahrtgeld] StrikeOut-Cleanup fehlgeschlagen:",b)}try{const{rgb:b}=await le(async()=>{const{rgb:E}=await import("./index-Bf057_RE.js");return{rgb:E}},__vite__mapDeps([2,1]));c.getPage(0).drawRectangle({x:16,y:286,width:60,height:16,color:b(1,1,1),borderWidth:0})}catch(b){console.warn("[fahrtgeld] Form-Code-Overlay fehlgeschlagen:",b)}if(i&&s.auszubildenderRect)try{const M=(r||"png").toLowerCase()==="png"?await c.embedPng(i):await c.embedJpg(i),[E,V,C,R]=s.auszubildenderRect,ne=C-E,je=R-V,be=E,ve=C,Ee=R+1,Ue=Math.min(R+30,366),Te=ve-be,z=Math.max(0,Ue-Ee);if(z>4&&M.width>0&&M.height>0){const P=Math.min(Te*.92/M.width,z*.92/M.height),F=M.width*P,H=M.height*P,A=be+(Te-F)/2,X=Ee+(z-H)/2;c.getPage(0).drawImage(M,{x:A,y:X,width:F,height:H})}}catch(b){console.warn("[fahrtgeld] Unterschrift-Embed fehlgeschlagen:",b)}try{l.updateFieldAppearances()}catch(b){console.warn("[fahrtgeld] updateFieldAppearances fehlgeschlagen:",b)}const U=await c.save(),q=new Blob([U],{type:"application/pdf"}),k=la(a.name,h,"pdf");return{blob:q,dateiname:k,anzahlTage:$.length,ueberzaehlig:n.length-$.length}}function G(e,t,n){if(t)try{e.getTextField(t).setText(n??"")}catch{}}function $r(e){return L(O(e),"dd.MM.yyyy")}function Xe(e){const[t,n]=e.split("-").map(a=>parseInt(a,10));return L(new Date(t,n-1,1),"MMMM yyyy",{locale:te})}function mn(e,t=null,n={},a=""){const i={monat_jahr:Xe(e)},r=(t==null?void 0:t.betreff)??"Fahrgelderstattung {monat_jahr} {name}",d=(t==null?void 0:t.text)??`Guten Tag {personal_anrede},

hiermit sende ich Ihnen das ausgefüllte Dokument für die Fahrgelderstattung vom {monat_jahr} zu.
Vielen Dank!`;i.personal_anrede=n.fahrtgeldAnrede||n.personalAnrede||"Frau Mayer";const c=(()=>{if(!a)return"";const m=String(a).trim(),f=/^(.+?),\s*(.+)$/.exec(m);return f?`${f[2].trim()} ${f[1].trim()}`:m})();i.name=c;const l=pn(r,i).replace(/\s+/g," ").trim(),o=pn(d,i),u=new URLSearchParams,h=n.fahrtgeldCc||"anika.kailer@putzmeister.com";return u.set("cc",h),u.set("subject",l),u.set("body",o),`mailto:${n.fahrtgeldEmpfaenger||"annika.mayer@putzmeister.com"}?${u.toString().replace(/\+/g,"%20")}`}function pn(e,t){return e.replace(/\{(\w+)\}/g,(n,a)=>t[a]!=null?String(t[a]):`{${a}}`)}function Sr(e){const t=new Set;for(const n of e)n.tagestyp==="Berufsschule"&&(n.ist??0)>0&&t.add(n.monatKey);return[...t].sort().reverse()}function Mr(e){const t=e instanceof ArrayBuffer?e:e!=null&&e.buffer?e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength):null;if(!t||t.byteLength<24)return null;const n=new DataView(t);if(n.getUint32(0)===2303741511&&n.getUint32(4)===218765834)return{width:n.getUint32(16),height:n.getUint32(20)};if(n.getUint16(0)===65496){let a=2;for(;a+9<n.byteLength;){if(n.getUint8(a)!==255)return null;const s=n.getUint8(a+1);if(s>=192&&s<=207&&s!==196&&s!==200&&s!==204)return{height:n.getUint16(a+5),width:n.getUint16(a+7)};const r=n.getUint16(a+2);if(r<2)return null;a+=2+r}}return null}function zr(e,t){if(!e||!t)return null;const n=a=>String(a).toLowerCase().replace(/[,.]/g," ").split(/\s+/).filter(Boolean).sort().join(" ");return n(e)===n(t)}function bn(e,t){const n={...e||{}},a={},s=(m,f)=>{f?a[m]="vorlage":n[m]?a[m]="zeitnachweis":a[m]="fehlt"},i=(t==null?void 0:t.name)||"",r=(t==null?void 0:t.personalnummer)||"",d=(t==null?void 0:t.kostenstelle)||"",c=n.name||"",o=zr(c,i)===!1,u=!!n.name;!n.name&&i&&(n.name=i),s("name",u);const h=!!n.persNr;!n.persNr&&r&&!o&&(n.persNr=r),s("persNr",h);const g=!!n.kst;return!n.kst&&d&&!o&&(n.kst=d),s("kst",g),a.vonHaltestelle=n.vonHaltestelle?"vorlage":"fehlt",a.nachHaltestelle=n.nachHaltestelle?"vorlage":"fehlt",a.betragProTag=n.betragProTag&&n.betragProTag>0?"vorlage":"fehlt",{konstanten:n,herkunft:a,nameKonflikt:o,vorlagenName:c,zeitnachweisName:i}}function Ar(e,t){const n=URL.createObjectURL(e),a=document.createElement("a");a.href=n,a.download=t,document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(n),1e3)}function Dr(e,t){const n=e.filter(i=>i.monatKey===t&&i.tagestyp==="Arbeitsunfähigkeit").length,a=e.filter(i=>i.monatKey===t&&i.tagestyp==="Urlaub").length;if(!n&&!a)return"";const s=[];return n&&s.push(`${n} Krankheitstag${n===1?"":"e"}`),a&&s.push(`${a} Urlaubstag${a===1?"":"e"}`),s.join(" · ")}async function He({root:e}){var C,R,ne,je,be,ve,Ee,Ue,Te;const t=await Ne();if(!t){Pr(e);return}const[n,a,s,i]=await Promise.all([oe(),ie(),qe(),ni("fahrgeld_abgabe")]),r=Sr(n),d=new Date,c=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`;r.includes(c)||r.unshift(c);const l=r,o=t.format||"excel",u=o==="pdf"?"PDF":"Excel",h={name:"Name",persNr:"Personalnummer",kst:"Kostenstelle",vonHaltestelle:'Strecke „von"',nachHaltestelle:'Strecke „nach"',betragProTag:"Tagessatz"},g=bn(t.konstanten,s),m=g.konstanten,f=g.herkunft,v=g.nameKonflikt,y=Object.entries(f).filter(([z,P])=>P==="fehlt").map(([z])=>z).map(z=>h[z]||z),$=Object.entries(f).filter(([z,P])=>P==="zeitnachweis").map(([z])=>h[z]||z),D=(z,P)=>z?f[P]==="zeitnachweis"?`<span class="fahrtgeld-aus-zeitnachweis" title="Aus deinem Zeitnachweis-PDF übernommen — die Vorlage hatte hier nichts stehen.">${S(z)} <small>(aus Zeitnachweis)</small></span>`:S(z):`<span class="fahrtgeld-fehlend" title="In der hochgeladenen Vorlage nicht gefunden — bitte vor Abgabe ergänzen.">${S(h[P]||P)} fehlt</span>`,x=(z,P)=>D(z,P);e.innerHTML=`
    <h1 class="view-title">Fahrgelderstattung</h1>
    <p class="view-subtitle">Generiere die monatliche Fahrgelderstattung mit deinen erkannten Berufsschultagen.</p>

    <div class="card fahrtgeld-template-info" style="margin-bottom: 24px;">
      <div class="card-split">
        <div>
          <h3 style="margin: 0; display: flex; align-items: center; gap: 8px;">
            Vorlage geladen
            <span class="fahrtgeld-format-badge ${o==="pdf"?"is-pdf":"is-excel"}">${u}</span>
          </h3>
          <p class="hint" style="margin: 4px 0 0;">
            ${x(m.name,"name")} ·
            Pers.-Nr. ${x(m.persNr,"persNr")} ·
            KST ${x(m.kst,"kst")}
          </p>
          <p class="hint" style="margin: 4px 0 0;">
            ${x(m.vonHaltestelle,"vonHaltestelle")} → ${x(m.nachHaltestelle,"nachHaltestelle")} ·
            ${(m.betragProTag??0)>0?`${m.betragProTag.toFixed(2).replace(".",",")} € pro Tag`:'<span class="fahrtgeld-fehlend">Tagessatz fehlt</span>'}
          </p>
        </div>
        <div style="display: flex; gap: 8px;">
          <button class="btn sm" id="btn-template-replace">Vorlage ersetzen</button>
          <button class="btn sm" id="btn-template-clear">Vorlage löschen</button>
        </div>
      </div>
      ${v?`
        <div class="fahrtgeld-warning-box" style="margin-top: 12px;">
          <strong>⚠ Name-Konflikt — Personalnummer wird NICHT automatisch übernommen:</strong>
          <p class="hint" style="margin: 6px 0 0;">
            Die Vorlage ist auf <strong>${S(g.vorlagenName)}</strong> ausgestellt, dein Zeitnachweis aber auf <strong>${S(g.zeitnachweisName)}</strong>.
            Damit keine fremden Daten auf deine Fahrgelderstattung kommen, ergänzt die App weder Personalnummer noch Kostenstelle aus dem Zeitnachweis.
            Bitte trage diese Felder vor der Abgabe handschriftlich nach oder lade einen passenden Zeitnachweis hoch.
          </p>
        </div>
      `:""}
      ${$.length>0?`
        <div class="fahrtgeld-info-box" style="margin-top: 12px;">
          <strong>ℹ️ ${$.length} Feld${$.length===1?"":"er"} aus deinem Zeitnachweis ergänzt:</strong>
          ${$.map(z=>`<span class="fahrtgeld-info-chip">${S(z)}</span>`).join(" ")}
          <p class="hint" style="margin: 6px 0 0;">Diese Werte fehlten in deiner Vorlage — die App hat sie automatisch aus dem hochgeladenen Zeitnachweis-PDF übernommen (Name-Abgleich erfolgreich).</p>
        </div>
      `:""}
      ${y.length>0?`
        <div class="fahrtgeld-warning-box" style="margin-top: 12px;">
          <strong>⚠ ${y.length} Feld${y.length===1?"":"er"} fehlt${y.length===1?"":"en"} weiterhin:</strong>
          ${y.map(z=>`<span class="fahrtgeld-warning-chip">${S(z)}</span>`).join(" ")}
          <p class="hint" style="margin: 6px 0 0;">${o==="pdf"?"Diese Felder bleiben in der generierten PDF leer — du kannst sie im PDF-Reader oder handschriftlich ergänzen, bevor du sie abgibst.":"Diese Felder bleiben in der generierten Excel leer — bitte vor Abgabe ergänzen."}</p>
        </div>
      `:""}
    </div>

    <div class="card fahrtgeld-signature-info" style="margin-bottom: 24px;">
      <div class="card-split">
        <div>
          <h3 style="margin: 0;">Unterschrift</h3>
          ${(C=t.unterschrift)!=null&&C.dataUrl?`
            <p class="hint" style="margin: 4px 0 8px;">Wird in jede${o==="pdf"?" generierte PDF":" generierte Excel"} als Auszubildender-Unterschrift eingefügt. Datum (Tag der Generierung) wird automatisch gesetzt.</p>
            <div class="fahrtgeld-signature-preview">
              <img src="${S(t.unterschrift.dataUrl)}" alt="Unterschrift" />
            </div>
          `:`
            <p class="hint" style="margin: 4px 0 0;">Noch keine Unterschrift hinterlegt. Aktuell bleibt das Feld in der ${o==="pdf"?"PDF":"Excel"} leer (nur das Datum wird gesetzt).</p>
          `}
        </div>
        <div style="display: flex; gap: 8px; align-items: flex-start;">
          <button class="btn sm" id="btn-signature-upload">${(R=t.unterschrift)!=null&&R.dataUrl?"Ersetzen":"Hochladen"}</button>
          ${(ne=t.unterschrift)!=null&&ne.dataUrl?'<button class="btn sm" id="btn-signature-clear">Entfernen</button>':""}
        </div>
      </div>
    </div>

    ${l.length===0?`
      <div class="empty-state">
        <div class="empty-state-icon">📅</div>
        <h2>Keine Berufsschultage erkannt</h2>
        <p>Lade einen Zeitnachweis unter <a href="#/daten">Daten</a> hoch — danach erscheinen hier die Monate.</p>
      </div>
    `:(()=>{var H;const z=l.map((A,X)=>{const Q=fn(n,A),$e=+(Q.length*(t.konstanten.betragProTag??0)).toFixed(2),I=Q.length>10,gt=Dr(n,A);return{mk:A,bs:Q,summe:$e,ueberzaehlig:I,abwesenheit:gt,idx:X}}),P=((H=z.find(A=>A.bs.length>0))==null?void 0:H.mk)??z[0].mk,F=z.find(A=>A.mk===P)??z[0];return`
          <div class="card fahrtgeld-generate-card">
            <div class="fahrtgeld-generate-buttons">
              <span class="fahrtgeld-step-label fahrtgeld-step-label-files">1. Datei erstellen</span>
              <div class="fahrtgeld-step-buttons fahrtgeld-step-buttons-files">
                <button class="btn-generate-big" id="btn-fahrtgeld-generate-excel" data-format="excel" ${F.bs.length===0?"disabled":""}>
                  <img src="excel-logo.png" alt="" class="excel-logo-big" />
                  <span class="btn-generate-label">Excel</span>
                </button>
                <span class="fahrtgeld-step-or">oder</span>
                <button class="btn-generate-big" id="btn-fahrtgeld-generate-pdf" data-format="pdf" ${F.bs.length===0?"disabled":""}>
                  <img src="pdf-logo.png" alt="" class="excel-logo-big" />
                  <span class="btn-generate-label">PDF</span>
                </button>
              </div>
              <div class="fahrtgeld-step-arrow" aria-hidden="true">
                <span class="fahrtgeld-step-arrow-shape">→</span>
              </div>
              <span class="fahrtgeld-step-label fahrtgeld-step-label-mail">2. E-Mail öffnen</span>
              <div class="fahrtgeld-step-buttons fahrtgeld-step-buttons-mail">
                <a class="btn-mail-big" id="btn-fahrtgeld-mail" href="${S(mn(F.mk,i,a,m.name))}" target="_blank" rel="noopener" ${F.bs.length===0?'aria-disabled="true"':""}>
                  <img src="outlook-logo.png" alt="" class="outlook-logo-big" />
                  <span>E-Mail</span>
                </a>
              </div>
            </div>
            <div class="fahrtgeld-generate-info" id="fahrtgeld-generate-info">
              <div class="fahrtgeld-generate-monat">${S(Xe(F.mk))}</div>
              <div class="hint" id="fahrtgeld-generate-detail">
                ${F.bs.length} BS-Tag${F.bs.length===1?"":"e"} erfasst · ${F.summe.toFixed(2).replace(".",",")} €
                ${F.abwesenheit?`<br><span class="fahrtgeld-pending">ℹ ${S(F.abwesenheit)} im Monat — bewusst nicht als BS gezählt.</span>`:""}
                ${F.ueberzaehlig?`<br><span style="color: var(--warn); font-weight: 600;">· ${F.bs.length-10} überzählig (max 10/Monat)</span>`:""}
              </div>
              <div class="hint" style="margin-top: 6px; font-size: 12px;">⚠ Mail-Anhang muss manuell aus dem Download-Ordner gezogen werden — Browser können keine Anhänge automatisch hinzufügen.</div>
            </div>
          </div>

          <div class="card">
            <h2>Monat auswählen</h2>
            <p class="hint" style="margin-bottom: 16px;">Pro Monat werden nur die Tage ausgefüllt, die im Zeitnachweis als <strong>„Berufsschule"</strong> hinterlegt sind. Krankheits-, Urlaubs- und Stempelzeit-Tage zählen bewusst nicht.</p>
            <div class="fahrtgeld-monate">
              ${z.map(A=>{const X=A.mk===P?"checked":"",Q=`data-monat="${S(A.mk)}" data-abwesenheit="${S(A.abwesenheit)}" data-anzahl="${A.bs.length}" data-summe="${A.summe.toFixed(2).replace(".",",")}" data-monat-label="${S(Xe(A.mk))}" data-ueberzaehlig="${A.ueberzaehlig?"1":"0"}"`;return`
                  <label class="fahrtgeld-monat-row${A.bs.length===0?" empty":""}" ${Q}>
                    <input type="radio" name="fg-monat-sel" value="${S(A.mk)}" ${X} ${A.bs.length===0?"disabled":""} class="fahrtgeld-monat-radio" />
                    <div class="fahrtgeld-monat-titel">
                      <div class="fahrtgeld-monat-name">${S(Xe(A.mk))}</div>
                      <div class="hint">
                        ${A.bs.length} BS-Tag${A.bs.length===1?"":"e"} erfasst · ${A.summe.toFixed(2).replace(".",",")} €
                        ${A.abwesenheit?`<br><span class="fahrtgeld-pending">ℹ ${S(A.abwesenheit)} im Monat</span>`:""}
                        ${A.ueberzaehlig?`<br><span style="color: var(--warn); font-weight: 600;">· ${A.bs.length-10} überzählig</span>`:""}
                      </div>
                    </div>
                  </label>
                `}).join("")}
            </div>
          </div>
        `})()}

    <input type="file" id="fahrtgeld-replace-input" accept=".xlsx,.xls,.xlsm,.pdf,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,application/pdf" style="display: none;" />
    <input type="file" id="fahrtgeld-signature-input" accept="image/png,image/jpeg,.png,.jpg,.jpeg" style="display: none;" />
  `,(je=e.querySelector("#btn-template-replace"))==null||je.addEventListener("click",()=>{e.querySelector("#fahrtgeld-replace-input").click()}),(be=e.querySelector("#fahrtgeld-replace-input"))==null||be.addEventListener("change",async z=>{var F;const P=(F=z.target.files)==null?void 0:F[0];P&&await Dt(P,e)}),(ve=e.querySelector("#btn-template-clear"))==null||ve.addEventListener("click",async()=>{await ce("Beim nächsten Öffnen wirst du gebeten, eine neue Vorlage hochzuladen.",{title:"Vorlage löschen?",confirmLabel:"Löschen",variant:"danger"})&&(await Xs(),N("Vorlage gelöscht."),He({root:e}))}),(Ee=e.querySelector("#btn-signature-upload"))==null||Ee.addEventListener("click",()=>{e.querySelector("#fahrtgeld-signature-input").click()}),(Ue=e.querySelector("#fahrtgeld-signature-input"))==null||Ue.addEventListener("change",async z=>{var F;const P=(F=z.target.files)==null?void 0:F[0];P&&await Er(P,e)}),(Te=e.querySelector("#btn-signature-clear"))==null||Te.addEventListener("click",async()=>{if(!await ce("Die hochgeladene Unterschrift wird entfernt — generierte Excel haben dann keine Unterschrift mehr.",{title:"Unterschrift entfernen?",confirmLabel:"Entfernen",variant:"danger"}))return;const z=await Ne();z&&(await Ct({...z,unterschrift:null}),N("Unterschrift entfernt."),He({root:e}))});const T=e.querySelector("#btn-fahrtgeld-generate-excel"),W=e.querySelector("#btn-fahrtgeld-generate-pdf"),U=[T,W].filter(Boolean),q=e.querySelector("#btn-fahrtgeld-mail"),k=e.querySelector(".fahrtgeld-generate-monat"),b=e.querySelector("#fahrtgeld-generate-detail"),M=e.querySelectorAll(".fahrtgeld-monat-radio");function E(){const z=e.querySelector(".fahrtgeld-monat-radio:checked");if(!z)return;const P=z.closest(".fahrtgeld-monat-row");if(!P)return;const F=z.value,H=parseInt(P.getAttribute("data-anzahl")||"0",10),A=P.getAttribute("data-summe")||"0,00",X=P.getAttribute("data-abwesenheit")||"",Q=P.getAttribute("data-monat-label")||"",$e=P.getAttribute("data-ueberzaehlig")==="1";if(k&&(k.textContent=Q),b){const I=[`${H} BS-Tag${H===1?"":"e"} erfasst · ${A} €`];X&&I.push(`<br><span class="fahrtgeld-pending">ℹ ${S(X)} im Monat — bewusst nicht als BS gezählt.</span>`),$e&&I.push(`<br><span style="color: var(--warn); font-weight: 600;">· ${H-10} überzählig (max 10/Monat)</span>`),b.innerHTML=I.join("")}U.forEach(I=>{I.disabled=H===0}),q&&(q.href=mn(F,i,a,m.name),a!=null&&a.fahrtgeldEmpfaenger||(q.title="Hinweis: Empfänger fällt auf den Putzmeister-Default zurück."),H===0?q.setAttribute("aria-disabled","true"):q.removeAttribute("aria-disabled"))}M.forEach(z=>z.addEventListener("change",E));async function V(z){var Q,$e;const P=e.querySelector(".fahrtgeld-monat-radio:checked");if(!P){J("Bitte einen Monat auswählen.",{type:"warn"});return}const F=P.value,H=z==="pdf"?W:T;H&&(H.disabled=!0);const A=H==null?void 0:H.querySelector(".btn-generate-label"),X=A==null?void 0:A.textContent;A&&(A.textContent="Erstelle …");try{const I=await Ne(),gt=await oe(),ht=fn(gt,F);if(!ht.length){J("Für diesen Monat sind keine BS-Anwesenheits-Tage erkannt.",{type:"warn"});return}const Ht=(Q=I.unterschrift)==null?void 0:Q.bytes,Rt=($e=I.unterschrift)==null?void 0:$e.extension,qt=I.format||"excel",ft=qt===z,Zt=ft?I.bytes:null,da=ft&&z==="pdf"?I.layout:null,jt=bn(I.konstanten,s).konstanten,{blob:ua,dateiname:Ut,ueberzaehlig:mt}=z==="pdf"?await xr({templateBytes:Zt,layout:da,monatKey:F,bsTage:ht,konstanten:jt,unterschriftBytes:Ht,unterschriftExtension:Rt}):await vr({templateBytes:Zt,monatKey:F,bsTage:ht,konstanten:jt,unterschriftBytes:Ht,unterschriftExtension:Rt});Ar(ua,Ut);const Gt=z==="pdf"?"PDF":"Excel",ga=Array.isArray(I.missing)&&I.missing.length>0?` — bitte ${I.missing.length} fehlendes Feld${I.missing.length===1?"":"er"} vor Abgabe ergänzen`:"",ha=ft?"":` (aus deiner ${qt==="pdf"?"PDF-":"Excel-"}Vorlage in ${Gt} überführt)`;N(`${Gt} erstellt: ${Ut}${mt>0?` (${mt} weiterer Tag${mt===1?"":"e"} passte/n nicht in die Vorlage)`:""}${ha}${ga}`)}catch(I){console.error("Fahrtgeld-Generierung fehlgeschlagen:",I),J(`Fehler: ${I.message||I}`,{type:"error",duration:8e3})}finally{H&&(H.disabled=!1),A&&X&&(A.textContent=X)}}T==null||T.addEventListener("click",()=>V("excel")),W==null||W.addEventListener("click",()=>V("pdf"))}function Pr(e){e.innerHTML=`
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
  `;const t=e.querySelector("#fahrtgeld-dropzone"),n=e.querySelector("#fahrtgeld-upload-input");t==null||t.addEventListener("click",()=>n.click()),t==null||t.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),n.click())}),n==null||n.addEventListener("change",async a=>{var i;const s=(i=a.target.files)==null?void 0:i[0];s&&await Dt(s,e)}),["dragenter","dragover"].forEach(a=>{t==null||t.addEventListener(a,s=>{s.preventDefault(),s.stopPropagation(),t.classList.add("is-dragover")})}),["dragleave","drop"].forEach(a=>{t==null||t.addEventListener(a,s=>{s.preventDefault(),s.stopPropagation(),t.classList.remove("is-dragover")})}),t==null||t.addEventListener("drop",async a=>{var i,r;const s=(r=(i=a.dataTransfer)==null?void 0:i.files)==null?void 0:r[0];s&&await Dt(s,e)})}async function Er(e,t){try{if(!["image/png","image/jpeg"].includes(e.type)&&!/\.(png|jpe?g)$/i.test(e.name)){J("Bitte ein PNG oder JPG hochladen.",{type:"warn"});return}if(e.size>2*1024*1024){J(`Die Bilddatei ist zu groß (${(e.size/1024/1024).toFixed(1)} MB). Maximal 2 MB — bitte komprimiert oder kleiner hochladen.`,{type:"warn",duration:8e3});return}const a=await e.arrayBuffer(),s=/\.png$/i.test(e.name)||e.type==="image/png"?"png":"jpeg",i=await new Promise((d,c)=>{const l=new FileReader;l.onload=()=>d(l.result),l.onerror=c,l.readAsDataURL(e)}),r=await Ne();if(!r){J("Bitte zuerst eine Excel-Vorlage hochladen.",{type:"warn"});return}await Ct({...r,unterschrift:{bytes:a,extension:s,dataUrl:i,hochgeladenAm:new Date().toISOString()}}),N("Unterschrift gespeichert."),He({root:t})}catch(n){console.error("Unterschrift-Upload fehlgeschlagen:",n),J(`Fehler beim Verarbeiten: ${n.message||n}`,{type:"error",duration:8e3})}}async function Dt(e,t){try{const n=await e.arrayBuffer(),a=await pr(n);if(!a.ok){J(`Vorlage nicht erkannt: ${a.fehler}`,{type:"error",duration:8e3});return}const s=await Ne();let i=s==null?void 0:s.unterschrift;if(!i&&a.unterschriftAuto){const c=Tr(a.unterschriftAuto.bytes,a.unterschriftAuto.extension);i={bytes:a.unterschriftAuto.bytes,extension:a.unterschriftAuto.extension,dataUrl:c,quelle:"auto-aus-vorlage",hochgeladenAm:new Date().toISOString()}}await Ct({bytes:n,konstanten:a.konstanten,format:a.format||"excel",layout:a.layout||null,missing:a.missing||[],vorhandeneEintraege:a.vorhandeneEintraege||null,unterschrift:i,hochgeladenAm:new Date().toISOString(),dateiname:e.name});const r=a.format==="pdf"?"PDF-Vorlage":"Excel-Vorlage",d=a.missing&&a.missing.length>0?` · ${a.missing.length} Feld${a.missing.length===1?"":"er"} fehlte${a.missing.length===1?"":"n"}`:"";a.unterschriftAuto&&!(s!=null&&s.unterschrift)?N(`${r} gespeichert: ${a.konstanten.name||e.name} (Unterschrift aus Vorlage übernommen)${d}`):N(`${r} gespeichert: ${a.konstanten.name||e.name}${d}`),document.dispatchEvent(new CustomEvent("better-ess:fahrgeld-template-uploaded")),He({root:t})}catch(n){console.error("Vorlage-Upload fehlgeschlagen:",n),J(`Fehler beim Verarbeiten: ${n.message||n}`,{type:"error",duration:8e3})}}function Tr(e,t){const n=new Uint8Array(e);let a="";for(let r=0;r<n.length;r++)a+=String.fromCharCode(n[r]);const s=btoa(a);return`data:${t==="png"?"image/png":"image/jpeg"};base64,${s}`}async function Fr({root:e}){const t=await oe();if(!t.length){e.innerHTML='<h1 class="view-title">Berichtsheft</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const n=[...new Set(t.map(i=>i.monatKey))].sort().reverse();e.innerHTML=`
    <h1 class="view-title">Berichtsheft-Export</h1>
    <p class="view-subtitle">Kopiere die Arbeitsstunden im HH:MM-Format direkt in dein Berichtsheft.</p>

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 16px; align-items: center;">
        <h2 style="margin: 0;">Filter</h2>
        <div style="display: flex; gap: 8px; align-items: center;">
          <label style="color: var(--fg-muted); font-size: 13px;">Monat:</label>
          <select id="filter-monat">
            <option value="">Alle</option>
            ${n.map(i=>`<option value="${i}">${Cr(i)}</option>`).join("")}
          </select>
          <button class="btn sm" id="btn-copy-all">Alle sichtbaren kopieren</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div id="liste"></div>
    </div>
  `;const a=e.querySelector("#filter-monat");a.addEventListener("change",()=>s()),e.querySelector("#btn-copy-all").addEventListener("click",()=>{const i=e.querySelectorAll("#liste tr[data-copy]"),r=Array.from(i).map(d=>d.getAttribute("data-copy")).join(`
`);navigator.clipboard.writeText(r).then(()=>N(`${i.length} Zeilen kopiert.`))});function s(){const i=a.value,d=(i?t.filter(c=>c.monatKey===i):t).filter(c=>c.ist!=null&&c.ist>0&&c.tagestyp!=="Wochenende");e.querySelector("#liste").innerHTML=Lr(d),e.querySelectorAll(".copy-val").forEach(c=>{c.addEventListener("click",async()=>{const l=c.getAttribute("data-val");await navigator.clipboard.writeText(l),c.classList.add("ok");const o=c.textContent;c.textContent="✓ kopiert",setTimeout(()=>{c.classList.remove("ok"),c.textContent=o},1200)})})}s()}function Lr(e){return e.length?`
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
        ${e.map(t=>{const n=We(t.ist),a=`${B(O(t.datum))}	${n}`;return`
            <tr data-copy="${vn(a)}">
              <td class="tabular">${B(O(t.datum))}</td>
              <td>${_r(t.wochentag)}</td>
              <td>${t.tagestyp?`<span class="pill ${Br(t.tagestyp)}">${oa(t.tagestyp)}</span>`:"—"}</td>
              <td class="num tabular">${t.ist.toFixed(2).replace(".",",")}</td>
              <td class="num tabular" style="font-weight: 600;">${n}</td>
              <td><button class="copy-val" data-val="${vn(n)}">📋 ${n}</button></td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `:'<p style="color: var(--fg-muted);">Keine Tage in dieser Auswahl.</p>'}function _r(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function Cr(e){const[t,n]=e.split("-");return L(new Date(parseInt(t),parseInt(n)-1,1),"LLLL yyyy",{locale:te})}function Br(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function oa(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function vn(e){return oa(e)}async function Or({root:e}){const[t,n,a,s,i]=await Promise.all([oe(),ie(),ot(),ct(),Pe()]),r=Object.fromEntries(s.map(l=>[l.key,l])),d=dt(t,n,new Date,void 0,{isAzubi:i}).filter(l=>l.mailVorlageKey),c=qn(a);e.innerHTML=`
    <h1 class="view-title">Mail-Vorlagen</h1>
    <p class="view-subtitle">Vorformulierte Mails an die Zeitwirtschaft bei erkannten Fehlern im Zeitnachweis.</p>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Offene Warnungen mit Mail-Vorschlag</h2>
      <p class="hint" style="margin-bottom: 16px;">Diese Warnungen haben einen roten Schweregrad und sind eine direkte Mail wert.</p>

      ${d.length===0?'<div class="empty-state"><div class="empty-state-icon">✓</div><p>Keine akuten Warnungen — top.</p></div>':d.map(l=>Kr(l,n,r)).join("")}

      ${c.length>0?`
        <h3 style="margin-top: 24px;">Saldo-Plausibilität</h3>
        ${c.map(l=>`
          <div class="alert severity-warn">
            <div class="alert-icon">⚠</div>
            <div class="alert-body">
              <div class="alert-title">${ee(l.titel)}</div>
              <p style="margin: 4px 0; font-size: 13px;">${ee(l.beschreibung)}</p>
            </div>
          </div>
        `).join("")}
      `:""}
    </div>

    <div class="card">
      <h2>Vorlagen verwalten</h2>
      <p class="hint" style="margin-bottom: 16px;">Passe die Texte an deinen Stil an. Platzhalter wie <code>{name}</code>, <code>{datum}</code>, <code>{wochentag}</code>, <code>{ist}</code>, <code>{soll}</code> werden automatisch gefüllt.</p>

      <div id="vorlagen-editor">
        ${Object.keys(Ie).map(l=>{const o=Ze(l,r[l]);return Nr(o)}).join("")}
      </div>
    </div>
  `,Wr(e),Vr(e)}function Kr(e,t,n){const a=Ze(e.mailVorlageKey,n[e.mailVorlageKey]);if(!a)return"";const s=Ot(t,e),i=Zn(a,s),r=Kt(t,a,s);return`
    <div class="alert severity-${e.schweregrad}" style="flex-direction: column; align-items: stretch;">
      <div style="display: flex; align-items: flex-start; gap: 12px;">
        <div class="alert-icon">${e.schweregrad==="error"?"!":"⚠"}</div>
        <div class="alert-body">
          <div class="alert-title">${ee(e.titel)}</div>
          <p style="margin: 4px 0; font-size: 13px;">${ee(e.beschreibung)}</p>
        </div>
      </div>
      <details style="margin-top: 12px;">
        <summary style="cursor: pointer; color: var(--fg-muted); font-size: 13px;">Mail-Vorschau anzeigen</summary>
        <div style="background: var(--surface-2); border-radius: var(--radius-md); padding: 12px; margin-top: 8px; font-family: var(--font-mono); font-size: 12px; white-space: pre-wrap; line-height: 1.5;">
<strong>An:</strong> ${ee(t.zeitwirtschaftEmail||"")}
<strong>Betreff:</strong> ${ee(i.betreff)}

${ee(i.text)}
        </div>
      </details>
      <div class="alert-actions mail-actions-big" style="margin-top: 16px;">
        <a class="btn-mail-big" href="${r}" target="_blank" rel="noopener"><img src="outlook-logo.png" alt="" class="outlook-logo-big" /><span>Mail Vorschlag in Outlook</span></a>
        <button class="btn sm btn-copy-mail" data-subject="${Pt(i.betreff)}" data-body="${Pt(i.text)}">📋 Betreff + Text kopieren</button>
      </div>
    </div>
  `}function Nr(e){return`
    <div class="vorlagen-item" data-key="${e.key}" style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
      <div class="card-split" style="margin-bottom: 12px;">
        <div>
          <h3 style="text-transform: none; letter-spacing: 0; color: var(--fg); font-size: 16px;">${ee(e.titel)}</h3>
          <p class="hint" style="margin: 4px 0;">${ee(e.beschreibung)}</p>
        </div>
        <button class="btn sm btn-reset-vorlage" data-key="${e.key}">Auf Default zurücksetzen</button>
      </div>
      <div class="form-group">
        <label>Betreff</label>
        <input type="text" class="v-betreff" value="${Pt(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 240px;">${ee(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function Wr(e){e.querySelectorAll(".btn-save-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const n=t.getAttribute("data-key"),a=t.closest(".vorlagen-item"),s=a.querySelector(".v-betreff").value,i=a.querySelector(".v-text").value;await at(n,{betreff:s,text:i}),N("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const n=t.getAttribute("data-key"),a=Ie[n];a&&await ce(`Deine Anpassungen an "${a.titel}" gehen verloren.`,{title:"Vorlage zurücksetzen?",confirmLabel:"Zurücksetzen",variant:"danger"})&&(await at(n,{betreff:a.betreff,text:a.text}),N("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function Vr(e){e.querySelectorAll(".btn-copy-mail").forEach(t=>{t.addEventListener("click",async()=>{const n=t.getAttribute("data-subject"),a=t.getAttribute("data-body"),s=`Betreff: ${n}

${a}`;await navigator.clipboard.writeText(s),N("Mail-Text kopiert.")})})}function ee(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Pt(e){return ee(e)}async function Ir({root:e}){const[t,n]=await Promise.all([ie(),ct()]),a=Object.fromEntries(n.map(s=>[s.key,s]));e.innerHTML=`
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
          ${Object.keys(Ie).map(s=>{const i=Ze(s,a[s]);return Hr(i)}).join("")}
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
  `,e.querySelector("#pause-sel").addEventListener("change",async s=>{const i={...t,pausenRegel:s.target.value};await tt(i),N("Pausen-Regel gespeichert.")}),e.querySelectorAll(".btn-save-vorlage").forEach(s=>{s.addEventListener("click",async()=>{const i=s.getAttribute("data-key"),r=s.closest(".vorlagen-item"),d=r.querySelector(".v-betreff").value,c=r.querySelector(".v-text").value;await at(i,{betreff:d,text:c}),N("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(s=>{s.addEventListener("click",async()=>{const i=s.getAttribute("data-key"),r=Ie[i];r&&await ce(`Deine Anpassungen an "${r.titel}" gehen verloren.`,{title:"Vorlage zurücksetzen?",confirmLabel:"Zurücksetzen",variant:"danger"})&&(await at(i,{betreff:r.betreff,text:r.text}),N("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function Hr(e){return`
    <div class="vorlagen-item" data-key="${e.key}" style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
      <div class="card-split" style="margin-bottom: 12px;">
        <div>
          <h3 style="text-transform: none; letter-spacing: 0; color: var(--fg); font-size: 16px;">${Qe(e.titel)}</h3>
          <p class="hint" style="margin: 4px 0;">${Qe(e.beschreibung)}</p>
        </div>
        <button class="btn sm btn-reset-vorlage" data-key="${e.key}">Auf Default zurücksetzen</button>
      </div>
      <div class="form-group">
        <label>Betreff</label>
        <input type="text" class="v-betreff" value="${Rr(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 200px;">${Qe(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function Qe(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Rr(e){return Qe(e)}async function ca(){const e=await Pe();document.body.classList.toggle("mode-azubi",e),document.body.classList.toggle("mode-nichtazubi",!e)}window.__applyAzubiVisibility=ca;async function yn(){document.documentElement.setAttribute("data-css-ready",""),Ba();const e=document.getElementById("content");await js()&&setTimeout(()=>{J('Parser wurde aktualisiert. Bitte lade deinen Zeitnachweis unter "Daten" neu hoch.',{type:"info",duration:12e3})},500),await Zs(),await Rs(),await qs(),await ca(),j("/",an),j("/dashboard",an),j("/analytics",ar),j("/kalender",yt),j("/kalender/typ/:typ",wt),j("/kalender/wochentag/:wd",wt),j("/kalender/pause/:bucket",wt),j("/kalender/:yyyymm",yt),j("/kalender/:yyyymm/:yyyykw",yt),j("/tag/:datum",Qi),j("/berichtsheft",Fr),j("/mails",Or),j("/fahrtgeld",He),j("/profil",Yi),j("/daten",Ri),j("/einstellungen",Ir),Ks(e),location.hash||Os("/");try{const t=await w.tage.count();Ki(t>0)&&setTimeout(()=>Yn(),700)}catch(t){console.warn("[boot] Tour-Auto-Start-Check fehlgeschlagen:",t)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",yn):yn();
