const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./exceljs.min-BhfpbegZ.js","./dexie-UpTFNL8S.js","./index-Bf057_RE.js"])))=>i.map(i=>d[i]);
import{C as Q,L as ya,B as wa,D as ka,S as xa,a as $a,b as Sa,P as Ma,A as za,c as Aa,d as Da,T as Pa,p as Ea,e as Ta,i as Fa}from"./chartjs-CRgZvhTJ.js";import{b as xt,a as We,c as Ve,d as La,f as L,s as Mn,e as zn,g as An,p as _a,h as Ca,i as Je,j as Ye,k as W,l as Dn,q as Ba,m as Oa,n as Na,o as Wa}from"./datefns-C8_rfWt_.js";import{D as Va}from"./dexie-UpTFNL8S.js";import{GlobalWorkerOptions as Pn,getDocument as En}from"./pdfjs-BnPRJEQ6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ka(){document.documentElement.setAttribute("data-theme","dark")}const tn={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},Ia=(e,t,n)=>{let a;const s=n!=null&&n.addSuffix?tn[e].withPreposition:tn[e].standalone;return typeof s=="string"?a=s:t===1?a=s.one:a=s.other.replace("{{count}}",String(t)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:"vor "+a:a},Ha={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},Ra={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},qa={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},ja={date:xt({formats:Ha,defaultWidth:"full"}),time:xt({formats:Ra,defaultWidth:"full"}),dateTime:xt({formats:qa,defaultWidth:"full"})},Za={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},Ga=(e,t,n,a)=>Za[e],Ua={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},Ja={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},Et={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},Ya={narrow:Et.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:Et.wide},Xa={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},Qa={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},es={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},ts=e=>Number(e)+".",ns={ordinalNumber:ts,era:We({values:Ua,defaultWidth:"wide"}),quarter:We({values:Ja,defaultWidth:"wide",argumentCallback:e=>e-1}),month:We({values:Et,formattingValues:Ya,defaultWidth:"wide"}),day:We({values:Xa,defaultWidth:"wide"}),dayPeriod:We({values:Qa,defaultWidth:"wide",formattingValues:es,defaultFormattingWidth:"wide"})},as=/^(\d+)(\.)?/i,ss=/\d+/i,is={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},rs={any:[/^v/i,/^n/i]},ls={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},os={any:[/1/i,/2/i,/3/i,/4/i]},cs={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},ds={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},us={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},gs={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},hs={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},fs={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},ms={ordinalNumber:La({matchPattern:as,parsePattern:ss,valueCallback:e=>parseInt(e)}),era:Ve({matchPatterns:is,defaultMatchWidth:"wide",parsePatterns:rs,defaultParseWidth:"any"}),quarter:Ve({matchPatterns:ls,defaultMatchWidth:"wide",parsePatterns:os,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Ve({matchPatterns:cs,defaultMatchWidth:"wide",parsePatterns:ds,defaultParseWidth:"any"}),day:Ve({matchPatterns:us,defaultMatchWidth:"wide",parsePatterns:gs,defaultParseWidth:"any"}),dayPeriod:Ve({matchPatterns:hs,defaultMatchWidth:"wide",parsePatterns:fs,defaultParseWidth:"any"})},ne={code:"de",formatDistance:Ia,formatLong:ja,formatRelative:Ga,localize:ns,match:ms,options:{weekStartsOn:1,firstWeekContainsDate:4}};function Tn(e){if(e==null)return null;if(typeof e=="number")return e;let t=String(e).trim();if(!t)return null;let n=!1;t.endsWith("-")&&(n=!0,t=t.slice(0,-1).trim()),t=t.replace(",",".");const a=parseFloat(t);return isNaN(a)?null:n?-a:a}function je(e){if(e==null||isNaN(e))return"—";const t=e<0,n=Math.abs(e),a=Math.floor(n),s=Math.round((n-a)*60);let i=a,l=s;return l===60&&(i+=1,l=0),`${t?"-":""}${i}:${String(l).padStart(2,"0")}`}function fe(e,t={}){if(e==null||isNaN(e))return"—";const{signed:n=!1,suffix:a="h"}=t,s=n&&e>0?"+":"",i=e.toFixed(2).replace(".",",");return`${s}${i}${a}`}function ps(e,t={}){if(e==null||isNaN(e))return"—";const{signed:n=!1}=t;return`${n&&e>0?"+":""}${je(e)}`}function nn(e,t="hhmm",n={}){return t==="dezimal"?fe(e,{signed:!0,suffix:"",...n}):ps(e,{signed:!0,...n})}function se(e){if(!e)return null;const t=/^(\d{1,2}):(\d{2})$/.exec(String(e).trim());return t?parseInt(t[1],10)*60+parseInt(t[2],10):null}function Fn(e){if(!(e!=null&&e.length))return null;const t=e.filter(s=>s.von&&s.bis);if(!t.length)return null;let n=t[0].von,a=t[0].bis;for(const s of t)se(s.von)<se(n)&&(n=s.von),se(s.bis)>se(a)&&(a=s.bis);return{kommen:n,gehen:a}}const Ln="2026-04-01";function bs(e){return e?"arbzg":"jarbschg"}function vs(e,t){return e==null?0:t==="jarbschg"?e>6?1:e>4.5?.5:0:e>9?.75:e>6?.5:0}function Bt(e){if(!e||e.length<2)return 0;const t=e.filter(a=>a.von&&a.bis).map(a=>({von:se(a.von),bis:se(a.bis)})).filter(a=>a.von!=null&&a.bis!=null).sort((a,s)=>a.von-s.von);let n=0;for(let a=1;a<t.length;a++){const s=t[a].von-t[a-1].bis;(s>0&&s>=15||s>0)&&(n+=s)}return n/60}function _n(e,t){const n=e.zeitSpannen??[];if(!n.length||n.every(p=>!p.von))return{keinAnspruch:!0};const a=Bt(n),s=e.pause??0,i=ys(n),l=i-s,d=t.pausenRegel&&t.pausenRegel!=="auto"?t.pausenRegel==="jarbschg"?"jarbschg":"arbzg":bs(!!t.ueber18),c=vs(l,d);if(e.datum&&e.datum<Ln)return{arbeitszeitMitPause:i,arbeitszeitOhnePause:l,gestempeltePause:a,abgezogenePause:s,gesetzlichePflicht:c,gesetz:d,legalerAbzug:s,unrechtmaessigerVerlustMin:0,aufstockungMin:0,typ:"alt_reglement",warnung:null,altReglement:!0};const r=Math.max(a,c),o=s-r,u=Math.max(0,c-a);let h="ok",g=null;if(o>.05)h="fehler_zeitwirtschaft",g=`${Math.round(o*60)} min Pause wurden zusätzlich zur gesetzlichen Pflicht und zur gestempelten Pause abgezogen. Das sieht nach einem Zeitwirtschafts-Fehler aus.`;else if(u>.05&&s>a+.02){h="aufstockung_legal";const p=Math.round(u*60);g=`Du hast ${Math.round(a*60)} min Pause gestempelt, aber bei ${l.toFixed(2).replace(".",",")}h Arbeitszeit schreibt das Gesetz (${d.toUpperCase()}) ${Math.round(c*60)} min vor. Die fehlenden ${p} min wurden automatisch als Pause gewertet. Das ist gesetzeskonform — nächstes Mal einfach länger Pause machen.`}return{arbeitszeitMitPause:i,arbeitszeitOhnePause:l,gestempeltePause:a,abgezogenePause:s,gesetzlichePflicht:c,gesetz:d,legalerAbzug:r,unrechtmaessigerVerlustMin:Math.round(Math.max(0,o)*60),aufstockungMin:Math.round(Math.max(0,u)*60),typ:h,warnung:g,altReglement:!1}}function ys(e){let t=0;for(const n of e){if(!n.von||!n.bis)continue;const a=se(n.von),s=se(n.bis);a!=null&&s!=null&&s>a&&(t+=s-a)}return t/60}function Cn(e,t){var c,r,o;const n=[...e].sort((u,h)=>u.datum.localeCompare(h.datum));if(!n.length)return[];const a=new Map(t.map(u=>[u.monatKey,u])),s={};for(const u of n)s[c=u.monatKey]??(s[c]=[]),s[u.monatKey].push(u);const i=Object.keys(s).sort(),l=[];let d=null;for(const u of i){const h=a.get(u);let g;((r=h==null?void 0:h.glz)==null?void 0:r.saldoVorperiode)!=null?g=h.glz.saldoVorperiode:d!=null?g=d:g=0;const p=s[u];for(const f of p)f.diff!=null&&(g+=f.diff),l.push({datum:f.datum,wochentag:f.wochentag,saldo:Math.round(g*100)/100,diff:f.diff,ist:f.ist,soll:f.soll,tagestyp:f.tagestyp,monatKey:f.monatKey,wocheKey:f.wocheKey,zeitSpannen:f.zeitSpannen});if(((o=h==null?void 0:h.glz)==null?void 0:o.saldoGesamt)!=null){const f=h.glz.saldoGesamt-g;if(Math.abs(f)>.02&&l.length>0){const v=l.length-1;l[v].umbuchung=f,l[v].saldo=Math.round((l[v].saldo+f)*100)/100,g=l[v].saldo}d=h.glz.saldoGesamt}else d=g}return l}function ws(e,t,n=0){if(!e.length)return[];if(t==="alles")return e;const a=Math.min(t,e.length),i=e.length+n*a,l=i-a;return i<=0?[]:l<0?e.slice(0,i):e.slice(l,i)}function ot(e,t){return t==="alles"||!e?0:-Math.max(0,Math.ceil(e/t)-1)}function ks(e){return e.length?e[e.length-1].saldo:0}const Bn=new Set(["Urlaub","Arbeitsunfähigkeit","Feiertag","Gleitzeit","Berufsschule","Dienstreise"]),On=7;function ht(e){if(!e||e.tagestyp==="Wochenende"||e.wochentag==="SA"||e.wochentag==="SO")return 0;const t=e.ist??0,n=e.soll??0;return t>0?t:Bn.has(e.tagestyp)?Math.max(n,On):n>0?n:t}function Ot(e){if(!e||e.tagestyp==="Wochenende"||e.wochentag==="SA"||e.wochentag==="SO")return 0;const t=e.soll??0;return t>0?t:Bn.has(e.tagestyp)?On:t}function xs(e){if(!e.length)return 0;const t=e[0].saldo-(e[0].diff??0),n=e[e.length-1].saldo;return Math.round((n-t)*100)/100}const $s=["SO","MO","DI","MI","DO","FR","SA"],Ss=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];function Te(e){if(!e)return null;const t=e.trim();return _a(t,"dd.MM.yyyy",new Date)}function C(e){return L(e,"dd.MM.yyyy")}function Nt(e){return L(e,"EE, dd.MM.yyyy",{locale:ne})}function Ms(e){return L(e,"dd.MM.")}function zs(e){return $s[e.getDay()]}function As(e){return Ss[e.getDay()]}function Ds(e){return An(e)}function Xe(e){const t=Mn(e,{weekStartsOn:1}),n=zn(e,{weekStartsOn:1});return`${L(t,"dd.MM.")} – ${L(n,"dd.MM.yyyy")}`}function Nn(e){return`${Ca(e)}-${String(An(e)).padStart(2,"0")}`}function Wt(e){return L(e,"yyyy-MM")}function Wn(e){return L(e,"yyyy-MM-dd")}function Ps(e,t){const n=[];let a=new Date(e);for(;a<=t;)Ye(a)||n.push(new Date(a)),a=Je(a,1);return n}function Vn(e,t){if(!e||!t)return 0;e>t&&([e,t]=[t,e]);let n=0,a=new Date(e);for(;a<t;)a=Je(a,1),Ye(a)||n++;return n}function M(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Es(e){return M(e)}const Ts=Object.freeze(Object.defineProperty({__proto__:null,addDays:Je,dayKey:Wn,differenceInCalendarDays:Dn,endOfMonth:Oa,endOfWeek:zn,escapeAttr:Es,escapeHtml:M,formatGermanDate:C,formatGermanDateLong:Nt,formatShortDate:Ms,formatWocheRange:Xe,getWeekdayCode:zs,getWeekdayName:As,isSameDay:Na,isWeekend:Ye,isoWeek:Ds,monthKey:Wt,parseGermanDate:Te,startOfMonth:Wa,startOfWeek:Mn,weekKey:Nn,werktageAbstand:Vn,werktageZwischen:Ps},Symbol.toStringTag,{value:"Module"}));Q.register(ya,wa,ka,xa,$a,Sa,Ma,za,Aa,Da,Pa,Ea,Ta,Fa);function Z(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function pe(){return{fg:Z("--fg"),fgMuted:Z("--fg-muted"),fgSubtle:Z("--fg-subtle"),border:Z("--border"),surface:Z("--surface"),accent:Z("--accent"),success:Z("--success"),warn:Z("--warn"),danger:Z("--danger"),info:Z("--info"),palette:[Z("--chart-1"),Z("--chart-2"),Z("--chart-3"),Z("--chart-4"),Z("--chart-5"),Z("--chart-6"),Z("--chart-7")]}}function B(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.fgMuted,font:{size:12}}},tooltip:{backgroundColor:e.surface,titleColor:e.fg,bodyColor:e.fg,borderColor:e.border,borderWidth:1,padding:10,displayColors:!0}},scales:{x:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}},y:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}}}}}function Vt(e,t){const n=pe();if(ve(e),!(t!=null&&t.length))return;const a=t.map(i=>L(W(i.datum),"dd.MM.")),s=t.map(i=>i.saldo);return s.map(i=>i>=0?n.success:n.danger),new Q(e,{type:"line",data:{labels:a,datasets:[{label:"Tages-Saldo",data:s,borderColor:n.accent,backgroundColor:i=>{const l=i.chart,{ctx:d,chartArea:c,scales:r}=l;return c?Kn(d,c,r.y,n):ge(n.accent,.14)},segment:{borderColor:i=>{const l=i.p0.parsed.y,d=i.p1.parsed.y,c=(l+d)/2;return c>=.02?n.success:c<=-.02?n.danger:n.fgMuted}},tension:0,pointRadius:2,pointHoverRadius:6,pointHitRadius:20,pointBackgroundColor:s.map(i=>i>=.02?n.success:i<=-.02?n.danger:n.fgMuted),pointBorderColor:n.surface,pointBorderWidth:1,fill:!0,borderWidth:2}]},options:{...B(n),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},onHover:(i,l,d)=>{const c=d.getElementsAtEventForMode(i,"index",{intersect:!1},!1);d.canvas.style.cursor=c.length>0?"pointer":"default"},onClick:(i,l,d)=>{const c=d.getElementsAtEventForMode(i,"index",{intersect:!1},!1);if(c.length>0){const r=c[0].index,o=t[r];o!=null&&o.datum&&(window.location.hash=`#/tag/${o.datum}`)}},plugins:{...B(n).plugins,legend:{display:!1},tooltip:{enabled:!1,mode:"index",intersect:!1,axis:"x",position:"nearest",external:Fs(t)}},scales:{...B(n).scales,y:{...B(n).scales.y,ticks:{...B(n).scales.y.ticks,callback:i=>`${i>=0?"+":""}${i.toFixed(1).replace(".",",")}h`}}}}})}function be(e){return function(t){var f,v;const{chart:n,tooltip:a}=t;let s=n.$richTooltipEl;if(!s){s=document.createElement("div"),s.className="saldo-tooltip",document.body.appendChild(s),n.$richTooltipEl=s;const m=n.destroy.bind(n);n.destroy=function(){s.parentNode&&s.parentNode.removeChild(s),m()}}if(a.opacity===0||!((f=a.dataPoints)!=null&&f.length)){s.style.opacity="0";return}const i=e({tooltip:a,chart:n});if(!i){s.style.opacity="0";return}let l=`<div class="saldo-tooltip-title">${Tt(i.title)}</div>`;for(const m of i.rows||[]){const w=m.klasse||"flat";l+=`<div class="saldo-tooltip-row"><span class="saldo-tooltip-label">${Tt(m.label)}</span><span class="saldo-tooltip-value ${w}">${m.value}</span></div>`}(v=i.meta)!=null&&v.length&&(l+=`<div class="saldo-tooltip-meta">${i.meta.map(m=>`<span>${m}</span>`).join("")}</div>`),s.innerHTML=l;const d=n.canvas.getBoundingClientRect(),c=d.left+a.caretX,r=d.top+a.caretY;s.style.opacity="0",s.style.left="0px",s.style.top="0px";const o=s.offsetWidth,u=s.offsetHeight,h=18;let g=c+h;g+o>window.innerWidth-8&&(g=c-h-o);let p=r-u/2;p<8&&(p=8),p+u>window.innerHeight-8&&(p=window.innerHeight-u-8),s.style.left=g+"px",s.style.top=p+"px",s.style.opacity="1"}}function me(e){return e==null?"flat":e>.05?"pos":e<-.05?"neg":"flat"}function Se(e){return e==null?"—":(e>0?"+":"")+e.toFixed(2).replace(".",",")+"h"}function Me(e){return e==null?"—":e.toFixed(2).replace(".",",")+"h"}function Fs(e){return be(({tooltip:t})=>{const n=t.dataPoints[0].dataIndex,a=e[n];if(!a)return null;const s=[{label:"Saldo",value:Se(a.saldo),klasse:me(a.saldo)}];a.diff!=null&&s.push({label:"Tages-Diff",value:Se(a.diff),klasse:me(a.diff)});const i=[];return a.tagestyp&&i.push(`Typ: ${Tt(a.tagestyp)}`),a.umbuchung&&i.push(`Umbuchung: ${a.umbuchung>=0?"+":""}${a.umbuchung.toFixed(2).replace(".",",")}h`),{title:L(W(a.datum),"EE, dd.MM.yyyy",{locale:ne}),rows:s,meta:i}})}function Tt(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ls(e,t){const n=pe();if(ve(e),!(t!=null&&t.length))return;const a=t.map(d=>d.monatKey),s=a.map(d=>{const[c,r]=d.split("-"),o=new Date(parseInt(c,10),parseInt(r,10)-1,1);return L(o,"MMM yyyy",{locale:ne})}),i=t.map(d=>{var c;return((c=d.glz)==null?void 0:c.saldoGesamt)??0}),l=t.map(d=>{var c;return((c=d.glz)==null?void 0:c.saldoVorperiode)??null});return new Q(e,{type:"line",data:{labels:s,datasets:[{label:"GLZ-Saldo (Monatsende)",data:i,borderColor:n.accent,backgroundColor:d=>{const c=d.chart,{ctx:r,chartArea:o,scales:u}=c;return o?Kn(r,o,u.y,n):ge(n.accent,.14)},segment:{borderColor:d=>{const c=d.p0.parsed.y,r=d.p1.parsed.y,o=(c+r)/2;return o>=.05?n.success:o<=-.05?n.danger:n.fgMuted}},pointBackgroundColor:i.map(d=>d>=.05?n.success:d<=-.05?n.danger:n.fgMuted),pointBorderColor:n.surface,pointBorderWidth:1,tension:0,fill:!0,pointRadius:4,pointHoverRadius:7,pointHitRadius:20}]},options:{...B(n),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},onHover:(d,c,r)=>{const o=r.getElementsAtEventForMode(d,"index",{intersect:!1},!1);r.canvas.style.cursor=o.length>0?"pointer":"default"},onClick:(d,c,r)=>{const o=r.getElementsAtEventForMode(d,"index",{intersect:!1},!1);if(o.length>0){const u=o[0].index,h=a[u];h&&(window.location.hash=`#/kalender/${h}`)}},plugins:{...B(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:be(({tooltip:d})=>{const c=d.dataPoints[0].dataIndex,r=i[c],o=l[c],u=[{label:"Saldo Monatsende",value:Se(r),klasse:me(r)}];if(o!=null){const h=+(r-o).toFixed(2);u.push({label:"Vorperiode",value:Se(o),klasse:me(o)}),u.push({label:"Bewegung",value:Se(h),klasse:me(h)})}return{title:s[c],rows:u}})}}}})}function _s(e,t){const n=pe();if(ve(e),!(t!=null&&t.length))return;const a=t.map(l=>L(W(l.datum),"dd.MM.")),s=t.map(l=>l.ist??0),i=t.map(l=>Ks(l.tagestyp,n));return new Q(e,{type:"bar",data:{labels:a,datasets:[{label:"Ist-Stunden",data:s,backgroundColor:i,borderRadius:4,borderSkipped:!1,maxBarThickness:32,categoryPercentage:.85,barPercentage:.9}]},options:{...B(n),onHover:(l,d,c)=>{const r=c.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);c.canvas.style.cursor=r.length>0?"pointer":"default"},onClick:(l,d,c)=>{const r=c.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);if(r.length>0){const o=t[r[0].index];o!=null&&o.datum&&(window.location.hash=`#/tag/${o.datum}`)}},plugins:{...B(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:be(({tooltip:l})=>{const d=l.dataPoints[0].dataIndex,c=t[d],r=[{label:"Ist",value:Me(c.ist),klasse:"flat"}];c.soll!=null&&r.push({label:"Soll",value:Me(c.soll),klasse:"flat"}),c.diff!=null&&r.push({label:"Diff",value:Se(c.diff),klasse:me(c.diff)});const o=c.tagestyp?[`Typ: ${c.tagestyp}`]:[];return{title:L(W(c.datum),"EE, dd.MM.yyyy",{locale:ne}),rows:r,meta:o}})}},scales:{...B(n).scales,y:{...B(n).scales.y,suggestedMin:0,suggestedMax:10}}}})}function an(e,t){const n=pe();if(ve(e),!(t!=null&&t.length))return;const a=t.filter(r=>{var o;return((o=r.zeitSpannen)==null?void 0:o.length)&&r.zeitSpannen.some(u=>u.von&&u.bis)}).map(r=>{const o=r.zeitSpannen.filter(g=>g.von&&g.bis).map(g=>({von:se(g.von),bis:se(g.bis),vonStr:g.von,bisStr:g.bis})).filter(g=>g.von!=null&&g.bis!=null);if(o.length===0)return null;const u=Math.min(...o.map(g=>g.von)),h=Math.max(...o.map(g=>g.bis));return{...r,_spans:o,_minVon:u,_maxBis:h}}).filter(Boolean);if(!a.length)return;const s=r=>r.ist==null?n.fgMuted:r.ist>=7?n.success:n.danger,i={label:"Tages-Rahmen",data:a.map(r=>[r._minVon,r._maxBis]),backgroundColor:a.map(s),borderColor:a.map(s),borderWidth:0,borderRadius:4,borderSkipped:!1,barPercentage:.7,categoryPercentage:.9,maxBarThickness:18},l=Math.max(0,Math.floor(Math.min(...a.map(r=>r._minVon))/60)*60-60),d=Math.min(24*60,Math.ceil(Math.max(...a.map(r=>r._maxBis))/60)*60+60),c=r=>`${String(Math.floor(r/60)).padStart(2,"0")}:${String(r%60).padStart(2,"0")}`;return new Q(e,{type:"bar",data:{labels:a.map(r=>L(W(r.datum),"dd.MM.")),datasets:[i]},options:{...B(n),interaction:{mode:"index",intersect:!1,axis:"x"},onHover:(r,o,u)=>{const h=u.getElementsAtEventForMode(r,"index",{intersect:!1},!1);u.canvas.style.cursor=h.length>0?"pointer":"default"},onClick:(r,o,u)=>{const h=u.getElementsAtEventForMode(r,"index",{intersect:!1},!1);if(h.length>0){const g=a[h[0].index];g!=null&&g.datum&&(window.location.hash=`#/tag/${g.datum}`)}},plugins:{legend:{display:!1},tooltip:{enabled:!1,external:be(({tooltip:r})=>{const o=a[r.dataPoints[0].dataIndex],u=[];o.ist!=null&&u.push({label:"Ist",value:Me(o.ist),klasse:me(o.ist-7)}),o.soll!=null&&u.push({label:"Soll",value:Me(o.soll)});const h=[`Rahmen: ${c(o._minVon)} – ${c(o._maxBis)}`];return o._spans.length>1&&o._spans.forEach((g,p)=>h.push(`Block ${p+1}: ${g.vonStr} – ${g.bisStr}`)),o.pause!=null&&h.push(`Pause: ${Math.round(o.pause*60)} min`),{title:L(W(o.datum),"EE, dd.MM.yyyy",{locale:ne}),rows:u,meta:h}})}},scales:{x:{ticks:{color:n.fgMuted,font:{size:10},maxRotation:60,minRotation:60,autoSkip:!0,maxTicksLimit:40},grid:{display:!1}},y:{min:l,max:d,ticks:{color:n.fgMuted,stepSize:60,callback:r=>c(r)},grid:{color:n.border}}}}})}function Cs(e,t){const n=pe();ve(e);const a={};for(const l of t){if(l.tagestyp!=="Stempelzeit"||!l.zeitSpannen||l.zeitSpannen.length<2)continue;const d=Bt(l.zeitSpannen);if(d<=0)continue;const c=Math.round(d*60),r=Math.floor(c/15)*15;a[r]=(a[r]??0)+1}const s=Object.keys(a).map(Number).sort((l,d)=>l-d),i=s.map(l=>a[l]);return new Q(e,{type:"bar",data:{labels:s.map(l=>`${l}–${l+14} min`),datasets:[{label:"Häufigkeit",data:i,backgroundColor:n.palette[1],borderRadius:4}]},options:{...B(n),onHover:(l,d,c)=>{const r=c.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);c.canvas.style.cursor=r.length>0?"pointer":"default"},onClick:(l,d,c)=>{const r=c.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);if(r.length>0){const o=s[r[0].index];o!=null&&(window.location.hash=`#/kalender/pause/${o}`)}},plugins:{...B(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:be(({tooltip:l})=>{const d=l.dataPoints[0].dataIndex;return{title:"Pause-Länge "+(s[d]!=null?`${s[d]}–${s[d]+14} min`:""),rows:[{label:"Häufigkeit",value:`${i[d]} Tag${i[d]===1?"":"e"}`}]}})}}}})}function Bs(e,t){const n=pe();ve(e);const a=["MO","DI","MI","DO","FR"],s={},i={};for(const c of a)s[c]=0,i[c]=0;for(const c of t)a.includes(c.wochentag)&&(c.ist==null||c.ist===0||(s[c.wochentag]+=c.ist,i[c.wochentag]+=1));const l=a.map(c=>i[c]>0?s[c]/i[c]:0),d={id:"wochentag-datalabels",afterDatasetsDraw(c){const{ctx:r,data:o,scales:u}=c;r.save(),r.fillStyle=n.fg,r.font="600 12px system-ui",r.textAlign="center",r.textBaseline="bottom",c.getDatasetMeta(0).data.forEach((g,p)=>{const f=o.datasets[0].data[p];if(!f||f===0)return;const v=f.toFixed(2).replace(".",",")+"h";r.fillText(v,g.x,g.y-6)}),r.restore()}};return new Q(e,{type:"bar",data:{labels:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"],datasets:[{label:"Ø Ist-Stunden",data:l,backgroundColor:n.palette[2],borderRadius:4,maxBarThickness:56,categoryPercentage:.7,barPercentage:.8}]},options:{...B(n),layout:{padding:{top:24}},onHover:(c,r,o)=>{const u=o.getElementsAtEventForMode(c,"nearest",{intersect:!0},!1);o.canvas.style.cursor=u.length>0?"pointer":"default"},onClick:(c,r,o)=>{const u=o.getElementsAtEventForMode(c,"nearest",{intersect:!0},!1);if(u.length>0){const h=a[u[0].index];h&&(window.location.hash=`#/kalender/wochentag/${h}`)}},plugins:{...B(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:be(({tooltip:c})=>{const r=c.dataPoints[0].dataIndex,o=a[r];return{title:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"][r],rows:[{label:"Ø Stunden",value:Me(l[r])},{label:"Anzahl Tage",value:String(i[o]||0)}]}})}},scales:{...B(n).scales,y:{...B(n).scales.y,suggestedMax:Math.max(...l)*1.15}}},plugins:[d]})}function Os(e,t){const n=pe();ve(e);const a={};for(const l of t)!l.tagestyp||l.tagestyp==="Wochenende"||(a[l.tagestyp]=(a[l.tagestyp]??0)+1);const s=Object.keys(a),i=Object.values(a);return new Q(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:s.map((l,d)=>n.palette[d%n.palette.length]),borderColor:n.surface,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,onHover:(l,d,c)=>{const r=c.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);c.canvas.style.cursor=r.length>0?"pointer":"default"},onClick:(l,d,c)=>{const r=c.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);if(r.length>0){const o=s[r[0].index];o&&(window.location.hash=`#/kalender/typ/${encodeURIComponent(o)}`)}},plugins:{legend:{position:"right",labels:{color:n.fgMuted,font:{size:12}}},tooltip:{enabled:!1,external:be(({tooltip:l})=>{const d=l.dataPoints[0].dataIndex,c=i.reduce((o,u)=>o+u,0),r=c?i[d]/c*100:0;return{title:s[d],rows:[{label:"Anzahl",value:`${i[d]} Tag${i[d]===1?"":"e"}`},{label:"Anteil",value:r.toFixed(1).replace(".",",")+"%"}]}})}}}})}function Ns(e,t){const n=pe();ve(e);const a={};for(const o of t){const u=o.wocheKey;a[u]??(a[u]={ist:0,soll:0,days:0,ersterTag:null,monatKey:null}),a[u].ist+=ht(o),a[u].soll+=Ot(o),a[u].days++,(!a[u].ersterTag||o.datum&&o.datum<a[u].ersterTag)&&(a[u].ersterTag=o.datum,a[u].monatKey=o.monatKey)}const s=Object.keys(a).sort();if(!s.length)return;const i=s.map(o=>+a[o].ist.toFixed(2)),l=s.map(o=>+a[o].soll.toFixed(2)),d=s.map(o=>{const u=a[o].ersterTag;return u?Xe(W(u)):""}),c=i.map((o,u)=>o>=l[u]+.1?n.success:o<=l[u]-.1?n.danger:n.fgMuted),r={id:"wochenstunden-soll-linie",afterDatasetsDraw(o){const{ctx:u,scales:h}=o;h.x;const g=h.y;u.save(),u.strokeStyle=n.fgSubtle||n.fgMuted,u.lineWidth=1,u.setLineDash([4,4]),u.beginPath(),o.getDatasetMeta(0).data.forEach((f,v)=>{const m=f.x,w=f.width/2+2,x=g.getPixelForValue(l[v]??35);u.moveTo(m-w,x),u.lineTo(m+w,x)}),u.stroke(),u.restore()}};return new Q(e,{type:"bar",data:{labels:s.map(o=>"KW "+o.split("-")[1]),datasets:[{label:"Wochenstunden",data:i,backgroundColor:c.map(o=>ge(o,.55)),borderColor:c,borderWidth:1.5,borderRadius:4,maxBarThickness:32,categoryPercentage:.85,barPercentage:.9}]},options:{...B(n),onHover:(o,u,h)=>{const g=h.getElementsAtEventForMode(o,"nearest",{intersect:!0},!1);h.canvas.style.cursor=g.length>0?"pointer":"default"},onClick:(o,u,h)=>{var p;const g=h.getElementsAtEventForMode(o,"nearest",{intersect:!0},!1);if(g.length>0){const f=g[0].index,v=s[f],m=v?(p=a[v])==null?void 0:p.monatKey:null;v&&m?window.location.hash=`#/kalender/${m}/${v}`:v&&(window.location.hash="#/kalender")}},plugins:{...B(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:be(({tooltip:o})=>{const u=o.dataPoints[0].dataIndex,h=s[u],g=i[u],p=l[u],f=+(g-p).toFixed(2),v=d[u];return{title:v?"KW "+h.split("-")[1]+" · "+v:"KW "+h.split("-")[1]+" · "+h.split("-")[0],rows:[{label:"Ist",value:Me(g),klasse:"flat"},{label:"Soll",value:Me(p),klasse:"flat"},{label:"Diff",value:Se(f),klasse:me(f)}]}})}},scales:{...B(n).scales,y:{...B(n).scales.y,beginAtZero:!0,ticks:{...B(n).scales.y.ticks,callback:o=>`${o.toFixed(0)}h`}}}},plugins:[r]})}function ve(e){const t=Q.getChart(e);t&&t.destroy()}function Ws(){if(Q.instances){for(const e of Object.values(Q.instances))if(e!=null&&e.canvas&&!document.body.contains(e.canvas))try{e.destroy()}catch{}}document.querySelectorAll(".saldo-tooltip").forEach(e=>e.remove())}function ge(e,t){const n=e.replace("#","").trim();if(n.length!==6&&n.length!==3)return e;const a=n.length===3?n.split("").map(d=>d+d).join(""):n,s=parseInt(a.slice(0,2),16),i=parseInt(a.slice(2,4),16),l=parseInt(a.slice(4,6),16);return`rgba(${s}, ${i}, ${l}, ${t})`}function Kn(e,t,n,a){return Vs(e,t,n,0,a)}function Vs(e,t,n,a,s){const{top:i,bottom:l}=t,d=e.createLinearGradient(0,i,0,l),c=n.min,r=n.max,o=r-c;if(o<=0)return ge(s.success,.14);let u=(r-a)/o;return u=Math.max(0,Math.min(1,u)),d.addColorStop(0,ge(s.success,.28)),d.addColorStop(Math.max(0,u-.001),ge(s.success,.06)),d.addColorStop(Math.min(1,u+.001),ge(s.danger,.06)),d.addColorStop(1,ge(s.danger,.28)),d}function Ks(e,t){const n=String(e??"").toLowerCase();return n.includes("stempel")?t.palette[0]:n.includes("berufs")?t.palette[1]:n.includes("urlaub")?t.palette[2]:n.includes("feiertag")?t.fgSubtle:n.includes("dienst")?t.palette[3]:n.includes("krank")?t.palette[4]:t.palette[5]}const In=[];let Hn=null;function G(e,t){const n=e.split("/").filter(Boolean),a=[],s=new RegExp("^/?"+n.map(i=>i.startsWith(":")?(a.push(i.slice(1)),"([^/]+)"):js(i)).join("/")+"/?$");In.push({pattern:e,regex:s,paramNames:a,render:t})}function Is(e){e.startsWith("#")||(e="#"+e),window.location.hash===e?ie():window.location.hash=e}function Hs(e,{onNavigate:t}={}){window.addEventListener("hashchange",ie),ie.rootEl=e,ie.onNavigate=t,ie()}async function ie(){var a;Ws();const e=ie.rootEl,t=window.location.hash.slice(1)||"/",n=t.startsWith("/")?t:`/${t}`;for(const s of In){const i=s.regex.exec(n);if(i){const l={};s.paramNames.forEach((d,c)=>l[d]=decodeURIComponent(i[c+1])),Hn=n,(a=ie.onNavigate)==null||a.call(ie,n),Rs(n);try{e.classList.remove("view-enter"),await s.render({params:l,path:n,root:e}),e.classList.add("view-enter")}catch(d){console.error("Route render error:",d),e.innerHTML=`<div class="empty-state">
          <div class="empty-state-icon">⚠</div>
          <h2>Fehler beim Anzeigen</h2>
          <p>${sn(d.message||String(d))}</p>
        </div>`}return}}e.innerHTML=`<div class="empty-state">
    <div class="empty-state-icon">?</div>
    <h2>Seite nicht gefunden</h2>
    <p>Die Route <code>${sn(n)}</code> existiert nicht.</p>
    <a href="#/" class="btn primary">Zum Dashboard</a>
  </div>`}function Rs(e){document.querySelectorAll("[data-route]").forEach(n=>{const a=n.getAttribute("data-route"),s=a==="/"?e==="/":e===a||e.startsWith(a+"/");n.classList.toggle("active",s)});const t=e==="/"?"dashboard":e.split("/").filter(Boolean)[0];document.body.setAttribute("data-view",t||"dashboard")}function qs(){Hn!=null&&ie()}function js(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function sn(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const Zs="modulepreload",Gs=function(e,t){return new URL(e,t).href},rn={},de=function(t,n,a){let s=Promise.resolve();if(n&&n.length>0){const l=document.getElementsByTagName("link"),d=document.querySelector("meta[property=csp-nonce]"),c=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));s=Promise.allSettled(n.map(r=>{if(r=Gs(r,a),r in rn)return;rn[r]=!0;const o=r.endsWith(".css"),u=o?'[rel="stylesheet"]':"";if(!!a)for(let p=l.length-1;p>=0;p--){const f=l[p];if(f.href===r&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${u}`))return;const g=document.createElement("link");if(g.rel=o?"stylesheet":Zs,o||(g.as="script"),g.crossOrigin="",g.href=r,c&&g.setAttribute("nonce",c),document.head.appendChild(g),o)return new Promise((p,f)=>{g.addEventListener("load",p),g.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})}))}function i(l){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=l,window.dispatchEvent(d),!d.defaultPrevented)throw l}return s.then(l=>{for(const d of l||[])d.status==="rejected"&&i(d.reason);return t().catch(i)})},y=new Va("zeitnachweis");y.version(1).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"});y.version(2).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});y.version(3).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});y.version(4).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});y.version(5).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"});y.version(6).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});y.version(7).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key",fahrtgeldTemplate:"id"}).upgrade(async e=>{const t=await e.table("profil").get("self");if(!t)return;let n=t.ueber18??!0;if(t.geburtsdatum){const s=new Date(t.geburtsdatum),i=new Date;n=i.getFullYear()-s.getFullYear()-(i<new Date(i.getFullYear(),s.getMonth(),s.getDate())?1:0)>=18}const a={id:"self",ueber18:n,sollStundenProWoche:t.sollStundenProWoche??35,sollStundenProTag:t.sollStundenProTag??7,berufsschulMuster:t.berufsschulMuster??{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null},zeitwirtschaftEmail:t.zeitwirtschaftEmail||"",zeitwirtschaftAnrede:t.zeitwirtschaftAnrede||"",pausenRegel:t.pausenRegel??"auto",erstelltAm:t.erstelltAm??new Date().toISOString(),updatedAt:new Date().toISOString()};await e.table("profil").put(a)});y.version(8).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key",fahrtgeldTemplate:"id"}).upgrade(async e=>{const t=await e.table("profil").get("self");if(!t)return;const n={...t,name:t.name||"",fahrtgeldEmpfaenger:t.fahrtgeldEmpfaenger||"",fahrtgeldCc:t.fahrtgeldCc||"",fahrtgeldAnrede:t.fahrtgeldAnrede||"",updatedAt:new Date().toISOString()};await e.table("profil").put(n)});async function Us(){try{const{erkenneBerufsschulMuster:e}=await de(async()=>{const{erkenneBerufsschulMuster:l}=await Promise.resolve().then(()=>gi);return{erkenneBerufsschulMuster:l}},void 0,import.meta.url),t=await y.tage.toArray();if(!t.length)return!1;const n=e(t),a=await y.profil.get("self");if(!a)return!1;const s=a.berufsschulMuster??{};return JSON.stringify(s.wochentageWoechentlich??[])!==JSON.stringify(n.wochentageWoechentlich)||JSON.stringify(s.wochentage14Taegig??[])!==JSON.stringify(n.wochentage14Taegig)||(s.referenzDatum14Taegig??null)!==(n.referenzDatum14Taegig??null)||(s.stundenProTag??null)!==(n.stundenProTag??null)||(s.halbtags??!1)!==(n.halbtags??!1)?(await y.profil.put({...a,berufsschulMuster:n}),!0):!1}catch(e){return console.warn("[db] refreshBerufsschulMuster fehlgeschlagen:",e),!1}}async function Js(){try{const{weekKey:e}=await de(async()=>{const{weekKey:s}=await Promise.resolve().then(()=>Ts);return{weekKey:s}},void 0,import.meta.url),{parseISO:t}=await de(async()=>{const{parseISO:s}=await import("./datefns-C8_rfWt_.js").then(i=>i.r);return{parseISO:s}},[],import.meta.url),n=await y.tage.toArray(),a=[];for(const s of n){if(!s.datum)continue;const i=e(t(s.datum));i!==s.wocheKey&&a.push({...s,wocheKey:i})}return a.length&&await y.tage.bulkPut(a),a.length}catch(e){return console.warn("[db] refreshWocheKeys fehlgeschlagen:",e),0}}async function Ys(){try{const e=await y.mailVorlagen.toArray(),t=e.some(a=>a.betreff&&!a.betreff.startsWith("Bitte um Zeitkorrektur im ESS")),n=e.some(a=>a.text&&!/Vielen Dank!\s*$/.test(a.text));return t||n?(await y.mailVorlagen.clear(),!0):!1}catch(e){return console.warn("[db] ensureMailVorlagenFresh fehlgeschlagen:",e),!1}}async function Xs(){const e=await y.einstellungen.get("__migration_reset");return(e==null?void 0:e.value)===!0?(await y.einstellungen.delete("__migration_reset"),!0):!1}async function le(){return await y.profil.get("self")??Rn()}async function ct(e){const t={...e,id:"self",updatedAt:new Date().toISOString()};return await y.profil.put(t),t}function Rn(){return{id:"self",ueber18:!0,name:"",sollStundenProWoche:35,sollStundenProTag:7,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1},zeitwirtschaftEmail:"",zeitwirtschaftAnrede:"",fahrtgeldEmpfaenger:"",fahrtgeldCc:"",fahrtgeldAnrede:"",pausenRegel:"auto",erstelltAm:new Date().toISOString()}}async function Ze(e,t=null){const n=await y.einstellungen.get(e);return n?n.value:t}async function dt(e,t){await y.einstellungen.put({key:e,value:t})}async function _e(){const e=await Ze("isAzubiOverride",null);if(e===!0||e===!1)return e;const t=await Ze("mitarbeiterkreis",null);return t==null?!0:String(t).trim().toUpperCase()==="AZ"}async function Qs(e){e==null?await y.einstellungen.delete("isAzubiOverride"):await dt("isAzubiOverride",!!e)}async function ei(e){e!=null&&await dt("mitarbeiterkreis",String(e))}async function ue(){return await y.tage.orderBy("datum").toArray()}async function ti(e,t,n){const a=n instanceof Date?n.toISOString():typeof n=="string"&&n?n:null,s=(r,o)=>o?r?r>o:!1:!0;let i=0,l=0,d=0,c=0;if(e.length){const r=e.map(h=>h.datum),o=await y.tage.bulkGet(r),u=[];for(let h=0;h<e.length;h++){const g={...e[h],_quellStichtag:a},p=o[h];!p||s(a,p._quellStichtag)?u.push(g):l++}u.length&&(await y.tage.bulkPut(u),i=u.length)}if(t.length){const r=t.map(h=>h.monatKey),o=await y.monate.bulkGet(r),u=[];for(let h=0;h<t.length;h++){const g={...t[h],_quellStichtag:a},p=o[h];!p||s(a,p._quellStichtag)?u.push(g):c++}u.length&&(await y.monate.bulkPut(u),d=u.length)}return{tage:i,monate:d,skippedTage:l,skippedMonate:c}}async function ft(){return await y.monate.orderBy("monatKey").toArray()}async function ni(e){return await y.uploads.add({...e,hochladeDatum:new Date().toISOString()})}async function Qe(){return await y.uploads.orderBy("hochladeDatum").last()}async function qn(){return await y.uploads.orderBy("hochladeDatum").reverse().toArray()}async function qe(){return await y.fahrtgeldTemplate.get("self")}async function Kt(e){await y.fahrtgeldTemplate.put({id:"self",...e})}async function ai(){await y.fahrtgeldTemplate.delete("self")}async function si(){await Promise.all([y.profil.clear(),y.tage.clear(),y.monate.clear(),y.uploads.clear(),y.einstellungen.clear(),y.mailVorlagen.clear(),y.warnungDismissals.clear(),y.fahrtgeldTemplate.clear()])}async function jn(){await Promise.all([y.tage.clear(),y.monate.clear(),y.uploads.clear(),y.warnungDismissals.clear()])}async function ii(){const[e,t,n,a,s,i,l]=await Promise.all([y.profil.toArray(),y.tage.toArray(),y.monate.toArray(),y.uploads.toArray(),y.einstellungen.toArray(),y.mailVorlagen.toArray(),y.warnungDismissals.toArray()]);return{version:1,exportedAt:new Date().toISOString(),data:{profil:e,tage:t,monate:n,uploads:a,einstellungen:s,mailVorlagen:i,warnungDismissals:l}}}async function ri(e){if(!e||e.version!==1||!e.data)throw new Error("Ungültiges oder inkompatibles Backup-Format.");const t=e.data;await y.transaction("rw",y.profil,y.tage,y.monate,y.uploads,y.einstellungen,y.mailVorlagen,y.warnungDismissals,async()=>{var n,a,s,i,l,d,c;(n=t.profil)!=null&&n.length&&await y.profil.bulkPut(t.profil),(a=t.tage)!=null&&a.length&&await y.tage.bulkPut(t.tage),(s=t.monate)!=null&&s.length&&await y.monate.bulkPut(t.monate),(i=t.uploads)!=null&&i.length&&await y.uploads.bulkPut(t.uploads),(l=t.einstellungen)!=null&&l.length&&await y.einstellungen.bulkPut(t.einstellungen),(d=t.mailVorlagen)!=null&&d.length&&await y.mailVorlagen.bulkPut(t.mailVorlagen),(c=t.warnungDismissals)!=null&&c.length&&await y.warnungDismissals.bulkPut(t.warnungDismissals)})}async function ut(e,t){await y.mailVorlagen.put({key:e,...t})}async function li(e){return await y.mailVorlagen.get(e)}async function mt(){return await y.mailVorlagen.toArray()}async function oi(e,t){await y.warnungDismissals.put({key:`${e}-${t}`,datum:e,typ:t,dismissedAt:new Date().toISOString()})}async function ci(){return await y.warnungDismissals.toArray()}function di(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
    <polyline points="10 17 15 12 10 7"/>
    <line x1="15" y1="12" x2="3" y2="12"/>
  </svg>`}function ui(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>`}function Zn(e,t={}){const{size:n=20,layout:a="inline"}=t;return e?`
    <div class="kommen-gehen ${a}">
      <span class="kg-block kommen" title="Kommen (frühester Einstempel)">
        ${di(n)}
        <span class="kg-zeit tabular">${e.kommen}</span>
      </span>
      <span class="kg-block gehen" title="Gehen (spätester Ausstempel)">
        ${ui(n)}
        <span class="kg-zeit tabular">${e.gehen}</span>
      </span>
    </div>
  `:'<span class="kg-empty">—</span>'}function Gn(e){var o;const t=e.filter(u=>u.tagestyp==="Berufsschule");if(t.length<2)return{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1};const n={};for(const u of t)n[o=u.wochentag]??(n[o]=[]),n[u.wochentag].push(u);const a=[],s=[];let i=null;for(const[u,h]of Object.entries(n)){if(h.sort((f,v)=>f.datum.localeCompare(v.datum)),h.length<2)continue;const g=[];for(let f=1;f<h.length;f++)g.push(Dn(W(h[f].datum),W(h[f-1].datum)));const p=ln(g);p<=10?a.push(u):p<=18&&(s.push(u),(!i||W(h[0].datum)<W(i))&&(i=h[0].datum))}const l=t.map(u=>u.ist).filter(u=>u!=null&&u>0),d=ln(l),c=d!=null?Math.round(d*4)/4:null,r=c!=null&&c<5;return{wochentageWoechentlich:a,wochentage14Taegig:s,referenzDatum14Taegig:i,stundenProTag:c,halbtags:r}}function ln(e){if(!e.length)return null;const t=e.slice().sort((a,s)=>a-s),n=Math.floor(t.length/2);return t.length%2?t[n]:(t[n-1]+t[n])/2}function pt(e,t){var s,i;if(!t)return!1;const a=["SO","MO","DI","MI","DO","FR","SA"][e.getDay()];if((s=t.wochentageWoechentlich)!=null&&s.includes(a))return!0;if((i=t.wochentage14Taegig)!=null&&i.includes(a)&&t.referenzDatum14Taegig){const l=W(t.referenzDatum14Taegig),d=Ba(e,l,{weekStartsOn:1});if(d>=0&&d%2===0)return!0}return!1}function Un(e,t=null){return(e==null?void 0:e.halbtags)===!0&&(e==null?void 0:e.stundenProTag)!=null&&e.stundenProTag>0?e.stundenProTag:t}const gi=Object.freeze(Object.defineProperty({__proto__:null,erkenneBerufsschulMuster:Gn,erwarteteBerufsschulStunden:Un,istBerufsschulTagLautMuster:pt},Symbol.toStringTag,{value:"Module"})),Ke={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function bt(e,t,n,a=new Set,s={}){var g,p;const i=s.isAzubi!==!1,l=[],d=n??new Date,c=new Map(e.map(f=>[f.datum,f]));if(!e.length)return l;const r=W(e[0].datum),o=d,u=L(o,"yyyy-MM-dd");for(let f=new Date(r);f<=o;f=Je(f,1)){if(Ye(f))continue;const v=L(f,"yyyy-MM-dd"),m=c.get(v),w=Vn(f,o),x=v===u,D=!m||!m.tagestyp&&!m.ist&&(((g=m.zeitSpannen)==null?void 0:g.length)??0)===0;if(!(x&&D)){if(D){if(i&&pt(f,t.berufsschulMuster)){const $=w>=4?"error":w>=2?"warn":"info";Ie(l,a,{datum:v,wochentag:(m==null?void 0:m.wochentag)??at(f),typ:"bs_tag_fehlt",schweregrad:$,titel:`Berufsschultag nicht eingetragen: ${C(f)}`,beschreibung:`Laut deinem Profil hast du am ${Ke[at(f)]}, ${C(f)} Berufsschule. Im Zeitnachweis fehlt der Tag bisher${w>=4?" — bitte bei der Zeitwirtschaft nachhaken":""}.`,alter:w,mailVorlageKey:$==="error"?"bs_tag_fehlt":null})}else{const $=w>=4?"error":w>=2?"warn":"info";Ie(l,a,{datum:v,wochentag:at(f),typ:"stempelzeit_fehlt",schweregrad:$,titel:`Keine Stempelzeit am ${C(f)}`,beschreibung:`Am ${Ke[at(f)]}, ${C(f)} wurde keine Stempelzeit erfasst. Falls du an diesem Tag im Haus warst, sollte die Zeitwirtschaft das nachtragen${w>=4?" — es ist inzwischen ≥4 Werktage her":""}.`,alter:w,mailVorlageKey:$==="error"?"stempelzeit_fehlt":null})}continue}if(i&&m.tagestyp==="Berufsschule"&&m.ist!=null){const $=Un(t.berufsschulMuster,m.soll);$!=null&&m.ist<$-.5&&Ie(l,a,{datum:v,wochentag:m.wochentag,typ:"bs_stunden_falsch",schweregrad:"error",titel:`Berufsschultag mit zu wenig Stunden: ${C(f)}`,beschreibung:`Am ${Ke[m.wochentag]}, ${C(f)} sind nur ${m.ist.toFixed(2).replace(".",",")}h gebucht statt der für dich üblichen ${$.toFixed(2).replace(".",",")}h. Die Zeitwirtschaft hat den Berufsschultag möglicherweise nur halb erfasst.`,ist:m.ist,soll:$,mailVorlageKey:"bs_stunden_falsch"})}if(m.tagestyp==="Stempelzeit"&&((p=m.zeitSpannen)==null?void 0:p.length)>1&&v>=Ln){const $=_n(m,t);($==null?void 0:$.typ)==="fehler_zeitwirtschaft"&&$.unrechtmaessigerVerlustMin>=5?Ie(l,a,{datum:v,wochentag:m.wochentag,typ:"pausen_abzug",schweregrad:$.unrechtmaessigerVerlustMin>=15?"error":"warn",titel:`Pausen-Abzug fehlerhaft (${C(f)})`,beschreibung:`Am ${Ke[m.wochentag]}, ${C(f)} wurden ${Math.round($.abgezogenePause*60)} min Pause abgezogen. Gestempelt: ${Math.round($.gestempeltePause*60)} min, gesetzlich nötig (${$.gesetz.toUpperCase()}): ${Math.round($.gesetzlichePflicht*60)} min. Differenz von ${$.unrechtmaessigerVerlustMin} min ist unerklärlich.`,verlustMinuten:$.unrechtmaessigerVerlustMin,abgezogen:$.abgezogenePause,gestempelt:$.gestempeltePause,mailVorlageKey:"pausen_abzug"}):($==null?void 0:$.typ)==="aufstockung_legal"&&$.aufstockungMin>=10&&Ie(l,a,{datum:v,wochentag:m.wochentag,typ:"pausen_aufstockung",schweregrad:"info",titel:`Zu wenig Pause gestempelt (${C(f)}) — ${$.aufstockungMin} min automatisch aufgestockt`,beschreibung:`Am ${Ke[m.wochentag]}, ${C(f)} hast du nur ${Math.round($.gestempeltePause*60)} min Pause gemacht. Gesetz (${$.gesetz.toUpperCase()}) schreibt ${Math.round($.gesetzlichePflicht*60)} min vor. Fehlende ${$.aufstockungMin} min wurden als Pause gewertet — das ist legal, aber du verlierst dadurch Arbeitszeit. Tipp: mach beim nächsten Mal etwas länger Mittag.`})}}}const h={error:0,warn:1,info:2};return l.sort((f,v)=>{const m=h[f.schweregrad]-h[v.schweregrad];return m!==0?m:v.datum.localeCompare(f.datum)}),l}function Jn(e,t=new Set){var a,s,i,l;const n=[];for(const d of e){const c=((a=d.glz)==null?void 0:a.saldoVorperiode)??0,r=((s=d.glz)==null?void 0:s.saldoAktuellePeriode)??0,o=((i=d.glz)==null?void 0:i.umgebuchteStunden)??0,u=(l=d.glz)==null?void 0:l.saldoGesamt;if(u==null)continue;const h=c+r+o,g=Math.abs(u-h);if(g>.03){const p=`${d.monatKey}-saldo_plausi`;t.has(p)||n.push({datum:`${d.monatKey}-01`,wochentag:"",typ:"saldo_plausi",schweregrad:"warn",titel:`Saldo-Differenz im Monat ${d.monatKey}`,beschreibung:`Rechnung: Vorperiode ${c.toFixed(2)} + aktuelle Periode ${r.toFixed(2)} + umgebucht ${o.toFixed(2)} = ${h.toFixed(2)}, aber dein Saldo wird mit ${u.toFixed(2)} angezeigt. Abweichung: ${g.toFixed(2)}h.`,soll:h,ist:u})}}return n}function Ie(e,t,n){const a=`${n.datum}-${n.typ}`;t.has(a)||(n.id=a,e.push(n))}function at(e){return["SO","MO","DI","MI","DO","FR","SA"][e.getDay()]}const hi={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"},Ge={bs_tag_fehlt:{key:"bs_tag_fehlt",titel:"Berufsschultag fehlt",beschreibung:"Wenn ein Berufsschultag komplett nicht im Zeitnachweis eingetragen wurde.",betreff:"Bitte um Zeitkorrektur im ESS  - Fehlender Berufsschultag {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

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
Vielen Dank!`}};function et(e,t){const n=Ge[e];return n?{...n,...t??{}}:null}function Yn(e,t){const n=on(e.text,t);return{betreff:on(e.betreff,t),text:n}}function on(e,t){return e.replace(/\{(\w+)\}/g,(n,a)=>t[a]!=null?String(t[a]):`{${a}}`)}function It(e,t){const n=t.datum?new Date(t.datum):null,a=n?Nt(n).split(", ")[1]:"";return{name:e.name||"",personalnr:"",kostenstelle:"",datum:a,wochentag:hi[t.wochentag]??t.wochentag??"",zeitwirtschaft_anrede:e.zeitwirtschaftAnrede||"{Anrede im Profil eintragen}",zeitwirtschaft_email:e.zeitwirtschaftEmail||"",personal_anrede:e.personalAnrede||"{Anrede im Profil eintragen}",ist:t.ist!=null?t.ist.toFixed(2).replace(".",","):"",soll:t.soll!=null?t.soll.toFixed(2).replace(".",","):"",abgezogen:t.abgezogen!=null?Math.round(t.abgezogen*60):"",gestempelt:t.gestempelt!=null?Math.round(t.gestempelt*60):"",verlust:t.verlustMinuten??""}}function Ht(e,t,n){const a=Yn(t,n),s=e.zeitwirtschaftEmail||"",i=new URLSearchParams;return i.set("subject",a.betreff),i.set("body",a.text),`mailto:${s}?${i.toString().replace(/\+/g,"%20")}`}let fi=0;function X(e,{type:t="info",duration:n=3500}={}){const a=document.getElementById("toast-root");if(!a)return;const s=document.createElement("div");s.className=`toast ${t}`,s.textContent=e,s.dataset.id=++fi,a.appendChild(s),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateY(-8px)",s.style.transition="opacity 220ms, transform 220ms",setTimeout(()=>s.remove(),250)},n)}function gt(e){return X(e,{type:"error",duration:6e3})}function O(e){return X(e,{type:"success"})}const mi=3,pi=2.5,bi={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function vt(e,t={}){if(!(e!=null&&e.length))return'<p style="color: var(--fg-muted);">Keine Tage im Zeitraum.</p>';const n=new Map;for(const i of t.warnungen??[])n.has(i.datum)||n.set(i.datum,[]),n.get(i.datum).push(i);const a=[];let s=null;for(const i of e)(!s||s.key!==i.wocheKey)&&(s={key:i.wocheKey,tage:[]},a.push(s)),s.tage.push(i);return`<div class="tages-liste">${a.map(i=>vi(i,n)).join("")}</div>`}function vi(e,t){var o;const n=e.tage.reduce((u,h)=>u+ht(h),0),a=e.tage.reduce((u,h)=>u+(h.diff??0),0),s=(o=e.tage[0])==null?void 0:o.datum,i=s?Xe(W(s)):"",l=e.key?e.key.split("-")[1]:"?",d=a>.05?"pos":a<-.05?"neg":"flat",c=(a>0?"+":"")+a.toFixed(2).replace(".",",")+"h",r=n.toFixed(2).replace(".",",")+"h";return`
    <div class="woche-group">
      <div class="woche-header">
        <div class="woche-header-titel">
          <span class="woche-header-kw">KW ${M(l)}</span>
          <span class="woche-header-range tabular">${M(i)}</span>
        </div>
        <div class="woche-header-stats">
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Ist</span>
            <span class="woche-header-ist tabular">${r}</span>
          </span>
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Diff</span>
            <span class="woche-header-diff tabular ${d}">${c}</span>
          </span>
        </div>
      </div>
      <div class="woche-tage">
        ${e.tage.map(u=>yi(u,(t==null?void 0:t.get(u.datum))??[])).join("")}
      </div>
    </div>
  `}function yi(e,t=[]){const n=e.diff??0,a=n>0,s=a?mi:pi,i=Math.min(150,Math.abs(n)/s*50),l=a?"var(--success)":n<0?"var(--danger)":"var(--fg-subtle)",d=Fn(e.zeitSpannen),c=e.saldo??0,r=t.length>0,o=r?ki(t):"",u=r?t.map(g=>`${g.titel}${g.beschreibung?`
`+g.beschreibung:""}`).join(`

`):"",h=r?t[0].schweregrad:null;return`
    <a href="#/tag/${e.datum}" class="tag-row${r?" has-warn severity-"+h:""}">
      <div class="tag-row-datum">
        <div class="tabular">${M(C(new Date(e.datum)))}</div>
        <div class="tag-row-wd">${wi(e.wochentag)}</div>
      </div>
      <div class="tag-row-warn-cell" aria-hidden="${r?"false":"true"}">
        ${r?`<span class="tag-row-warn severity-${h}" title="${M(u)}">${o}${t.length>1?" "+t.length:""}</span>`:""}
      </div>
      <div class="tag-row-typ">
        ${e.tagestyp?`<span class="pill ${xi(e.tagestyp)}">${M(e.tagestyp)}</span>`:'<span style="color: var(--fg-subtle); font-size: 12px;">—</span>'}
      </div>
      <div class="tag-row-kg">
        ${Zn(d,{size:18})}
      </div>
      <div class="tag-row-ist tabular">
        ${(()=>{if(e.ist==null)return'<div class="ist-wert">—</div>';const g=je(e.ist),[p,f]=g.split(":");return e.ist<=0?`<div class="ist-wert">${g}</div>`:`<div class="ist-display" title="Klick auf H oder M zum Kopieren">
            <button class="ist-part" data-val="${p}" title="${p} Stunden kopieren">${p}</button><span class="ist-sep">:</span><button class="ist-part" data-val="${f}" title="${f} Minuten kopieren">${f}</button>
          </div>`})()}
        <div style="color: var(--fg-subtle); font-size: 11px;">Soll ${e.soll!=null?je(e.soll):"—"}</div>
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
        <div>${c>=0?"+":""}${c.toFixed(2).replace(".",",")}h</div>
        <div style="color: var(--fg-subtle); font-size: 10px; font-weight: 500; letter-spacing: 0.02em;">Saldo nach Tag</div>
      </div>
    </a>
  `}function wi(e){return bi[e]??e}function ki(e){const t={error:3,warn:2,info:1};let n=e[0];for(const a of e)(t[a.schweregrad]||0)>(t[n.schweregrad]||0)&&(n=a);return n.schweregrad==="error"?"!":n.schweregrad==="warn"?"⚠":"i"}function xi(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function Rt(e){e._istCopyAttached||(e._istCopyAttached=!0,e.addEventListener("click",async t=>{const n=t.target.closest(".ist-part");if(!n)return;t.preventDefault(),t.stopPropagation();const a=n.getAttribute("data-val");try{await navigator.clipboard.writeText(a),n._copyResetTimer&&clearTimeout(n._copyResetTimer),n.classList.add("ok"),n.textContent="✓",n._copyResetTimer=setTimeout(()=>{n.classList.remove("ok"),n.textContent=a,n._copyResetTimer=null},800)}catch{O(`Bitte kopieren: ${a}`)}}))}const $i=[{key:7,label:"1 Woche"},{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:180,label:"6 Monate"},{key:365,label:"1 Jahr"},{key:730,label:"2 Jahre"},{key:"alles",label:"Alles"}];function Si(e){return $i.filter(t=>t.key==="alles"||t.key<e)}async function cn({root:e}){const[t,n,a,s,i,l,d,c,r]=await Promise.all([le(),ft(),ue(),ci(),Ze("dashboardZeitraum",14),mt(),Qe(),Ze("saldoFormat","hhmm"),_e()]),o=Object.fromEntries(l.map(k=>[k.key,k]));if(a.length===0){e.innerHTML=Ai();return}const u=Cn(a,n),h=u.length,g=Si(h);let p=i;g.some(k=>k.key===p)||(p="alles");const f=new Set(s.map(k=>k.key)),v=d!=null&&d.stichtagAuswertung?new Date(d.stichtagAuswertung):new Date,m=bt(a,t,v,f,{isAzubi:r}),w=Jn(n,f),x=[...m,...w],D=ks(u),$=D>.05?"positive":D<-.05?"negative":"";e.innerHTML=`
    <h1 class="view-title">Dashboard</h1>
    <p class="view-subtitle">Stand: ${Fe(C(new Date(a[a.length-1].datum)))}</p>

    <div class="saldo-hero" style="margin-bottom: 32px; align-items: stretch;">
      <div class="saldo-hero-text" style="min-width: 260px;">
        <h3>Aktueller Gleitzeit-Saldo</h3>
        <div class="saldo-value-row">
          <div class="saldo-value ${$}" id="saldo-hero-value">${Fe(nn(D,c))}</div>
          <button type="button" class="saldo-format-toggle" id="saldo-format-toggle"
            data-format="${Fe(c)}"
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
            ${dn("zeitraum-nav-1")}
            <div class="segmented" id="zeitraum-picker">
              ${g.map(k=>`<button type="button" data-key="${k.key}" class="${p===k.key?"active":""}">${k.label}</button>`).join("")}
            </div>
          </div>
        </div>
        <div style="flex: 1; height: 220px;"><canvas id="saldo-chart"></canvas></div>
      </div>
    </div>

    ${x.length>0?`
      <div class="card" style="margin-bottom: 32px;">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Offene Warnungen</h2>
        </div>
        ${x.slice(0,8).map(k=>zi(k,t,o)).join("")}
        ${x.length>8?`<div style="margin-top: 12px; color: var(--fg-muted); font-size: 13px; text-align: center;">+ ${x.length-8} weitere Warnungen vorhanden</div>`:""}
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
          ${dn("zeitraum-nav-2")}
          <div class="segmented" id="zeitraum-picker-2">
            ${g.map(k=>`<button type="button" data-key="${k.key}" class="${p===k.key?"active":""}">${k.label}</button>`).join("")}
          </div>
        </div>
      </div>
      <div id="tage-liste"></div>
    </div>

  `;let F=0;$t(p,e,u,x,F);const N=e.querySelector("#saldo-format-toggle");N==null||N.addEventListener("click",async()=>{const b=(N.getAttribute("data-format")||"hhmm")==="hhmm"?"dezimal":"hhmm";await dt("saldoFormat",b);const S=e.querySelector("#saldo-hero-value");S&&(S.textContent=nn(D,b)),N.setAttribute("data-format",b),N.textContent=b==="hhmm"?"als Dezimal":"als Std:Min",N.title=b==="hhmm"?"Auf Dezimal umstellen":"Auf Stunden:Minuten umstellen"});const I=()=>e.querySelectorAll("#zeitraum-picker button, #zeitraum-picker-2 button");I().forEach(k=>{k.addEventListener("click",async()=>{if(k.disabled)return;const b=k.getAttribute("data-key"),S=b==="alles"?"alles":parseInt(b,10);I().forEach(T=>T.classList.toggle("active",T.getAttribute("data-key")===b)),await dt("dashboardZeitraum",S),p=S,F=0,$t(S,e,u,x,F)})});const R=k=>{if(p==="alles")return;const b=ot(u.length,p);let S=F+k;S<b&&(S=b),S>0&&(S=0),S!==F&&(F=S,$t(p,e,u,x,F))};e.querySelectorAll(".zeitraum-nav").forEach(k=>{k.addEventListener("click",b=>{const S=b.target.closest(".zeitraum-nav-btn");if(!S||S.disabled)return;const T=S.getAttribute("data-dir")==="prev"?-1:1;R(T)})}),e.addEventListener("click",async k=>{const b=k.target.closest(".ist-part");if(b){k.preventDefault(),k.stopPropagation();const H=b.getAttribute("data-val");try{await navigator.clipboard.writeText(H),b._copyResetTimer&&clearTimeout(b._copyResetTimer),b.classList.add("ok"),b.textContent="✓",b._copyResetTimer=setTimeout(()=>{b.classList.remove("ok"),b.textContent=H,b._copyResetTimer=null},800)}catch{O(`Bitte kopieren: ${H}`)}return}const S=k.target.closest(".btn-dismiss");if(!S)return;const T=S.getAttribute("data-datum"),K=S.getAttribute("data-typ");if(!T||!K)return;await oi(T,K),O("Warnung ausgeblendet.");const V=S.closest(".alert");V&&(V.style.display="none")})}function $t(e,t,n,a=[],s=0){const i=ws(n,e,s),l=xs(i);requestAnimationFrame(()=>{const o=t.querySelector("#saldo-chart");Vt(o,i)});const d=t.querySelector("#hero-bewegung");if(d){const o=l>.05?"up":l<-.05?"down":"flat",u=l>.05?"↑":l<-.05?"↓":"→";d.className=`saldo-trend ${o}`,d.innerHTML=`${u} ${Math.abs(l)<.01?"Unverändert":fe(l,{signed:!0})} im Zeitraum`}const c=t.querySelector("#tage-info");if(c){const o=i.length;c.textContent=`${o} ${o===1?"Tag":"Tage"}`}const r=t.querySelector("#tage-liste");r&&(r.innerHTML=vt(i.slice().reverse(),{warnungen:a.filter(o=>i.some(u=>u.datum===o.datum))})),Mi(t,i,n.length,e,s)}function dn(e){return`
    <div class="zeitraum-nav" id="${e}" hidden>
      <button type="button" class="zeitraum-nav-btn" data-dir="prev" title="Voriger Zeitraum">‹</button>
      <span class="zeitraum-nav-label">—</span>
      <button type="button" class="zeitraum-nav-btn" data-dir="next" title="Nächster Zeitraum">›</button>
    </div>
  `}function Mi(e,t,n,a,s){const i=e.querySelectorAll(".zeitraum-nav");if(!i.length)return;const l=a==="alles",d=l?0:ot(n,a),c=Xn(t,a);i.forEach(r=>{if(r.hidden=l,l)return;const o=r.querySelector('.zeitraum-nav-btn[data-dir="prev"]'),u=r.querySelector('.zeitraum-nav-btn[data-dir="next"]'),h=r.querySelector(".zeitraum-nav-label");o&&(o.disabled=s<=d),u&&(u.disabled=s>=0),h&&(h.textContent=c)})}function Xn(e,t=null){var c,r;if(!(e!=null&&e.length))return"—";const n=e[0].datum,a=e[e.length-1].datum,s=new Date(n),i=new Date(a),l=`${C(s)} – ${C(i)}`,d=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];if(t===7){const o=e[e.length-1].wocheKey,u=o?o.split("-")[1]:null;return u?`KW ${u} · ${l}`:l}if(t===14){const o=(c=e[0].wocheKey)==null?void 0:c.split("-")[1],u=(r=e[e.length-1].wocheKey)==null?void 0:r.split("-")[1];return o&&u&&o!==u?`KW ${o}–${u} · ${l}`:u?`KW ${u} · ${l}`:l}if(t===30)return s.getMonth()===i.getMonth()&&s.getFullYear()===i.getFullYear()?`${d[i.getMonth()]} ${i.getFullYear()} · ${l}`:`${d[s.getMonth()].slice(0,3)}–${d[i.getMonth()].slice(0,3)} ${i.getFullYear()} · ${l}`;if(t===90||t===180){const o=d[s.getMonth()].slice(0,3),u=d[i.getMonth()].slice(0,3);return`${s.getFullYear()===i.getFullYear()?`${o}–${u} ${i.getFullYear()}`:`${o} ${s.getFullYear()}–${u} ${i.getFullYear()}`} · ${l}`}return t===365?s.getFullYear()===i.getFullYear()?`Jahr ${i.getFullYear()} · ${l}`:`${i.getFullYear()-1}/${String(i.getFullYear()).slice(2)} · ${l}`:t===730?`${s.getFullYear()}–${i.getFullYear()} · ${l}`:l}function zi(e,t,n){const a=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";let s=null;if(e.mailVorlageKey&&t){const i=et(e.mailVorlageKey,n==null?void 0:n[e.mailVorlageKey]);if(i){const l=It(t,e);s=Ht(t,i,l)}}return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${a}</div>
      <div class="alert-body">
        <div class="alert-title">${Fe(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${Fe(e.beschreibung)}</p>
        <div class="alert-actions">
          ${s?`<a href="${St(s)}" class="btn-mail-medium"><img src="outlook-logo.png" alt="" class="outlook-logo-medium" />E-Mail</a>`:""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
          <button class="btn ghost sm btn-dismiss" data-datum="${St(e.datum)}" data-typ="${St(e.typ)}">Ausblenden</button>
        </div>
      </div>
    </div>
  `}function Ai(){return`
    <div class="empty-state" style="margin-top: 80px;">
      <p class="hint" style="margin-bottom: 18px;">Noch keine Daten geladen.</p>
      <a href="#/daten" class="btn primary">Zum Upload →</a>
      <p class="hint" style="margin-top: 24px; font-size: 12px;">Tipp: Tour erneut starten unter <a href="#/daten" style="color: var(--accent);">Daten</a> ganz unten.</p>
    </div>
  `}function Fe(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function St(e){return Fe(e)}const Qn=""+new URL("pdf.worker.min-yatZIOMy.mjs",import.meta.url).href;Pn.workerSrc=Qn;const un={Januar:1,Februar:2,März:3,Maerz:3,April:4,Mai:5,Juni:6,Juli:7,August:8,September:9,Oktober:10,November:11,Dezember:12},Di=["Stempelzeit","Berufsschule Std. bez","Berufsschule","Dienstreise Arbeitszeit","Reise öff.VM/PKW Beifahr.","Reise öff.VM/PKW","Urlaub","Gleitzeit","Arbeitsunfähigkeit","TgDtEinh","Neujahr","Karfreitag","Ostermontg","Ostmontg","Osterso.","Hl.3 Kön.","Allerhlg","Pfingstmo","Fronleichn","TdDtEinh"];async function Pi(e){var c,r;const n=await En({data:e}).promise,a=[];let s=0;for(let o=1;o<=n.numPages;o++){const h=await(await n.getPage(o)).getTextContent();s+=h.items.length;const g=Ei(h.items);for(const p of g)a.push({page:o,text:p})}const i=Ti(a),{tage:l,monate:d}=Fi(a);try{const o=await n.getMetadata();i.producer=((c=o==null?void 0:o.info)==null?void 0:c.Producer)??null,i.creator=((r=o==null?void 0:o.info)==null?void 0:r.Creator)??null}catch{}return i.totalTextItems=s,{meta:i,tage:l,monate:d}}function Ei(e){if(!e.length)return[];const t=e.slice().sort((l,d)=>{const c=d.transform[5]-l.transform[5];return Math.abs(c)>2?c:l.transform[4]-d.transform[4]}),n=[];let a=null,s=[];const i=3;for(const l of t){const d=l.transform[5];a==null||Math.abs(d-a)<=i?(s.push(l),a==null&&(a=d)):(n.push(gn(s)),s=[l],a=d)}return s.length&&n.push(gn(s)),n.filter(l=>l.trim().length>0)}function gn(e){e.sort((a,s)=>a.transform[4]-s.transform[4]);let t="",n=-1;for(const a of e){const s=a.transform[4];n>=0&&s-n>4?t+="  ":n>=0&&s-n>.5&&(t+=" "),t+=a.str,n=s+a.width}return t}function Ti(e){var n,a;const t={personalnummer:null,name:null,kostenstelle:null,personalbereich:null,einstellungsdatum:null,mitarbeiterkreis:null,arbeitszeitplanregel:null,zeitraumVon:null,zeitraumBis:null,stichtagAuswertung:null};for(let s=0;s<e.length;s++){const i=e[s].text,l=/vom\s+(\d{2}\.\d{2}\.\d{4})\s+bis\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);l&&(t.zeitraumVon=Te(l[1]),t.zeitraumBis=Te(l[2]));const d=/bis einschließlich dem\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);if(d&&(t.stichtagAuswertung=Te(d[1])),/Personalnummer/i.test(i)&&/Kostenstelle/i.test(i)){const c=(((n=e[s+1])==null?void 0:n.text)??"").trim();let r=c.split(/\s{2,}/);r.length<3&&(r=c.split(/\s+/)),r.length>=3&&/^\d/.test(r[0])&&(t.personalnummer=r[0],t.kostenstelle=r[1],t.personalbereich=r[2])}if(/Einstellungsdatum/i.test(i)&&/Mitarbeiterkreis/i.test(i)){const c=(((a=e[s+1])==null?void 0:a.text)??"").trim();let r=c.split(/\s{2,}/);r.length<3&&(r=c.split(/\s+/)),r.length>=3&&/^\d{2}\.\d{2}\.\d{4}$/.test(r[0])&&(t.einstellungsdatum=Te(r[0]),t.mitarbeiterkreis=r[1],t.arbeitszeitplanregel=r[2])}if(/Bei Rückfragen wenden Sie sich an/i.test(i))for(let c=s+1;c<Math.min(s+8,e.length);c++){const r=e[c].text.trim();if(/^[A-ZÄÖÜ][a-zäöüß]+(?:\s[A-ZÄÖÜ][a-zäöüß]+)+$/.test(r)&&!/kanarya/i.test(r)&&!/tel/i.test(r)){t.name=r;break}}}return t}function Fi(e,t){var c;const n=[],a=[];let s=null,i=null,l=!1,d=0;for(;d<e.length;){const r=e[d].text,o=/Monat:\s*([A-Za-zäöüÄÖÜß]+)\s*-\s*(\d{4})/.exec(r);if(o){const p=o[1].trim(),f=parseInt(o[2],10),v=un[p]??un[p.replace("ä","ae")]??null;v&&(s={jahr:f,monat:v,monatKey:`${f}-${String(v).padStart(2,"0")}`},l=!0,i=null),d++;continue}if(/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.test(r)){const p=/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.exec(r),f=Te(p[1]);i={monatKey:(s==null?void 0:s.monatKey)??Wt(f),stichtag:f,glz:{},flexi:{},zeitkonten:{},raw:{}},d=Li(e,d+1,i),a.push(i);continue}let u=s;const h=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)\b/.exec(r.trim());if(h&&s){const p=parseInt(h[1],10);l&&p>=20?u=Bi(s):p<=15&&(l=!1)}const g=hn(r,u);if(g){const p=[];let f=d+1;for(;f<e.length;){const m=e[f].text;if(/^\s*\d{4}\s+Umbuchung/.test(m)||hn(m,s)||/Wochensumme/i.test(m)||/Monats.bersicht/i.test(m)||/Monat:\s*[A-Za-z]/i.test(m))break;const w=_i(m);if(w){p.push(w),f++;continue}break}if(p.length&&g.zeitSpannen.push(...p),g.tagestyp==="Wochenende"||g.wochentag==="SA"||g.wochentag==="SO"){d=f;continue}(g.ist!=null||g.soll!=null||(((c=g.zeitSpannen)==null?void 0:c.length)??0)>0||g.tagestyp!=null)&&n.push(g),d=f;continue}d++}return{tage:n,monate:a}}function Li(e,t,n){let a=t;const s=/(\d{4,5}|KTAU|AZAU)\s*-\s*(.+?)\s+(-?[\d,.]+-?)(?=\s+(?:\d{4,5}|KTAU|AZAU)\s*-|\s*$)/g;for(;a<e.length;){const i=e[a].text.trim();if(/^Monat:\s/.test(i)||/^Einzelergebnisse\s/.test(i)||/^Tag\b/.test(i)||/^Wochensumme/.test(i)||/^\d{2}\s+(MO|DI|MI|DO|FR|SA|SO)\b/.test(i)||/^Übersicht für den Zeitraum/i.test(i)||/^Abwesenheitsansprüche/i.test(i))break;s.lastIndex=0;let l;for(;(l=s.exec(i))!=null;){const d=l[1],c=l[2].trim(),r=Tn(l[3]);n.raw[d]={beschreibung:c,wert:r},d==="0008"&&(n.glz.saldoVorperiode=r),d==="8016"&&(n.glz.saldoAktuellePeriode=r),d==="9802"&&(n.glz.umgebuchteStunden=r),d==="0005"&&(n.glz.saldoGesamt=r),d==="9803"&&(n.glz.ueberzaehligeStd=r),d==="0050"&&(n.zeitkonten.produktivstunden=r),d==="9011"&&(n.flexi.jahreskontoVorperiode=r),d==="9010"&&(n.flexi.jahreskontoSaldo=r),d==="9020"&&(n.flexi.langzeitkontoSaldo=r),d==="9203"&&(n.zeitkonten.azMonatsendeUeber216=r),d==="9207"&&(n.zeitkonten.auszahlungBav=r),d==="9205"&&(n.zeitkonten.summeAuszahlung=r)}if(a++,a-t>80)break}return a}function hn(e,t){if(!t)return null;const n=e.trim(),a=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)(?:\s+(.+))?$/.exec(n);if(!a)return null;const s=parseInt(a[1],10),i=a[2],l=(a[3]??"").trim();let d=t.jahr,c=t.monat;const r=new Date(d,c-1,s),o={datum:Wn(r),datumDate:r.toISOString(),wochentag:i,tagNr:s,monatKey:Wt(r),wocheKey:Nn(r),zeitSpannen:[],aktivitaeten:[],ist:null,soll:null,diff:null,pause:null,tazp:null,tagestyp:null,raw:n};return l?(Ci(l,o),o):(o.tagestyp=["SA","SO"].includes(i)?"Wochenende":null,o)}function _i(e){const t=e.trim(),n=/^(Stempelzeit|Reise öff\.VM\/PKW Beifahr\.|Reise öff\.VM\/PKW|Dienstreise Arbeitszeit)\s+(\d{2}:\d{2})\s+(\d{2}:\d{2})\s*$/.exec(t);return n?{aktivitaet:n[1],von:n[2],bis:n[3]}:null}function Ci(e,t){let n=null,a=e;for(const o of Di)if(e.startsWith(o)){n=o,a=e.slice(o.length).trim();break}n||(n=e.split(/\s+/)[0],a=e.slice(n.length).trim()),t.tagestyp=Oi(n),t.aktivitaeten.push(n);const s=a.split(/\s+/).filter(Boolean),i=/^\d{2}:\d{2}$/,l=/^-?[\d,.]+-?$/;let d=0;for(;s[d]&&i.test(s[d])&&s[d+1]&&i.test(s[d+1]);)t.zeitSpannen.push({aktivitaet:n,von:s[d],bis:s[d+1]}),d+=2;const c=[];for(;d<s.length&&l.test(s[d]);){const o=Tn(s[d]);o!=null&&c.push(o),d++}let r=s[d];c.length>=5?([t.ist,t.soll,t.diff,t.pause]=c,r||(r=String(c[4]))):c.length===4?[t.ist,t.soll,t.diff,t.pause]=c:c.length===3?[t.ist,t.soll,t.diff]=c:c.length===2?[t.ist,t.soll]=c:c.length===1&&(t.ist=c[0]),r&&(t.tazp=String(r))}function Bi(e){if(!e)return null;let t=e.monat-1,n=e.jahr;return t<1&&(t=12,n-=1),{jahr:n,monat:t,monatKey:`${n}-${String(t).padStart(2,"0")}`}}function Oi(e){return e?/^Stempelzeit$/i.test(e)?"Stempelzeit":/^Berufsschule Std\. bez$/i.test(e)||/^Berufsschule$/i.test(e)?"Berufsschule":/Dienstreise/i.test(e)||/Reise/i.test(e)?"Dienstreise":/^Urlaub$/i.test(e)?"Urlaub":/^Gleitzeit$/i.test(e)?"Gleitzeit":/Arbeitsunf.higkeit/i.test(e)?"Arbeitsunfähigkeit":/^(Neujahr|Karfreitag|Ostermontg|Ostmontg|Osterso\.|Hl\.3 Kön\.|Allerhlg|Pfingstmo|Fronleichn|TdDtEinh|TgDtEinh)$/i.test(e)?"Feiertag":e:null}function re(e,t={}){const{title:n="Bestätigen",confirmLabel:a="Bestätigen",cancelLabel:s="Abbrechen",variant:i="default"}=t;return Wi({message:e,title:n,confirmLabel:a,cancelLabel:s,variant:i,kind:"confirm"})}function Ni(e,t,n={}){const{title:a="Bestätigen",confirmLabel:s="Weiter",cancelLabel:i="Abbrechen",variant:l="default",icon:d=null}=n;return new Promise(c=>{const r=document.activeElement,o=document.createElement("div");o.className="app-dialog-overlay";const u=d==="info"?`
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
          <h3 id="app-dialog-title" class="app-dialog-title">${he(a)}</h3>
        </div>
        <div class="app-dialog-message">${ea(e)}</div>
        <label class="app-dialog-checkbox">
          <input type="checkbox" class="app-dialog-checkbox-input" />
          <span class="app-dialog-checkbox-label">${he(t)}</span>
        </label>
        <div class="app-dialog-actions">
          <button class="btn ghost app-dialog-cancel" type="button">${he(i)}</button>
          <button class="btn primary app-dialog-confirm ${l==="danger"?"is-danger":""}" type="button" disabled>${he(s)}</button>
        </div>
      </div>
    `,document.body.appendChild(o),requestAnimationFrame(()=>o.classList.add("is-open"));const h=o.querySelector(".app-dialog-confirm"),g=o.querySelector(".app-dialog-cancel"),p=o.querySelector(".app-dialog-checkbox-input"),f=m=>{o.classList.remove("is-open"),setTimeout(()=>{if(o.remove(),document.removeEventListener("keydown",v),r&&r.focus)try{r.focus()}catch{}c(m)},180)},v=m=>{m.key==="Escape"?(m.preventDefault(),f(!1)):m.key==="Enter"&&!h.disabled&&(m.preventDefault(),f(!0))};p.addEventListener("change",()=>{h.disabled=!p.checked}),h.addEventListener("click",()=>{h.disabled||f(!0)}),g.addEventListener("click",()=>f(!1)),o.addEventListener("click",m=>{m.target===o&&f(!1)}),document.addEventListener("keydown",v),setTimeout(()=>p.focus(),50)})}function Wi({message:e,title:t,confirmLabel:n,cancelLabel:a,variant:s,kind:i}){return new Promise(l=>{const d=document.activeElement,c=document.createElement("div");c.className="app-dialog-overlay",c.innerHTML=`
      <div class="app-dialog" role="dialog" aria-modal="true" aria-labelledby="app-dialog-title">
        <h3 id="app-dialog-title" class="app-dialog-title">${he(t)}</h3>
        <div class="app-dialog-message">${ea(e)}</div>
        <div class="app-dialog-actions">
          ${`<button class="btn ghost app-dialog-cancel" type="button">${he(a)}</button>`}
          <button class="btn primary app-dialog-confirm ${s==="danger"?"is-danger":""}" type="button">${he(n)}</button>
        </div>
      </div>
    `,document.body.appendChild(c),requestAnimationFrame(()=>c.classList.add("is-open"));const r=c.querySelector(".app-dialog-confirm"),o=c.querySelector(".app-dialog-cancel"),u=g=>{c.classList.remove("is-open"),setTimeout(()=>{if(c.remove(),document.removeEventListener("keydown",h),d&&d.focus)try{d.focus()}catch{}l(g)},180)},h=g=>{g.key==="Escape"?(g.preventDefault(),u(!1)):g.key==="Enter"&&(g.preventDefault(),u(!0))};r==null||r.addEventListener("click",()=>u(!0)),o==null||o.addEventListener("click",()=>u(!1)),c.addEventListener("click",g=>{g.target===c&&u(!1)}),document.addEventListener("keydown",h),setTimeout(()=>r==null?void 0:r.focus(),50)})}function he(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ea(e){return he(e).replace(/\n/g,"<br>")}const ta="better-ess-tour-completed",qt=typeof import.meta<"u"?"./":"/",Vi=qt+"tutorial/speichern.png",Ki=qt+"tutorial/download.png",Ii=qt+"tutorial/zeitraum.png",Le=[{type:"modal",hero:!0,icon:"👋",title:"Willkommen bei Better ESS",text:"Diese App liest deinen <strong>Zeitnachweis</strong> und macht ihn auf einen Blick verständlich.<br><br>Sie <strong>warnt dich automatisch</strong> bei fehlenden Tagen, falschen Berufsschul-Stunden oder unrechtmäßigem Pausen-Abzug. Du kannst deine <strong>monatliche Fahrgelderstattungs-Excel</strong> auf Knopfdruck generieren und <strong>Korrektur-Mails an die Zeitwirtschaft</strong> mit einem Klick verschicken — Empfänger, Betreff und Text sind schon vorbefüllt."},{type:"modal",hero:!0,icon:"🔒",title:"Deine Daten bleiben bei dir",text:"Dein PDF geht <strong>nicht ins Internet</strong>.<br><br>Alles läuft lokal in deinem Browser — wie eine Notizen-App. Kein Upload, kein Server, kein Konto."},{type:"highlight",target:'a[href="#/daten"]',icon:"📂",title:"Hier startet alles",text:"Hier lädst du deinen Zeitnachweis hoch.",placement:"right",autoClick:!0,onAfterClick:async()=>{window.location.hash!=="#/daten"&&(window.location.hash="#/daten"),await it("#upload-zone",1500)}},{type:"download-modal",icon:"📥",title:'1. Im ESS auf „Zeitnachweis herunterladen" klicken',image:Ki,points:[{kind:"good",icon:"✓",text:"Den Button findest du unten rechts in der ESS-Zeitbuchungs-Ansicht."}]},{type:"download-modal",icon:"📅",title:'2. „Anderer Zeitraum" wählen — möglichst groß',image:Ii,points:[{kind:"good",icon:"✓",text:'Wähle <strong>„Anderer Zeitraum"</strong> und nimm einen möglichst großen Bereich (am besten Ausbildungsstart bis heute) — die App nutzt alle Daten für Saldo-Verlauf und Trends.'},{kind:"bad",icon:"✕",text:'Nicht „Aktuelle Woche" oder „Aktueller Monat" — dann fehlen Verlaufs-Daten.'}]},{type:"download-modal",icon:"💾",title:'3. Im PDF-Viewer auf „Speichern" — nicht „Drucken"',image:Vi,points:[{kind:"good",icon:"✓",text:"<strong>Speichern-Button</strong> (Disketten-Symbol oben rechts in der PDF-Toolbar) — speichert eine echte Text-PDF."},{kind:"bad",icon:"✕",text:'<strong>NICHT</strong> „Drucken → Microsoft Print to PDF" — dabei werden Texte als Pfade gerendert und sind nicht lesbar.'}]},{type:"highlight",target:"#upload-zone",icon:"📥",title:"Lade jetzt dein PDF hoch",text:"Zieh dein Zeitnachweis-PDF auf die Box (oder klick sie an). Erst nach dem Upload geht die Tour weiter.",placement:"top",waitForTarget:!0,waitForEvent:"better-ess:pdf-uploaded"},{type:"modal",icon:"✨",title:"Geschafft!",text:"Dein PDF ist eingelesen. Jetzt zeig ich dir die Funktionen — anhand deiner echten Daten.",onNext:async()=>{window.location.hash="#/",await it(".saldo-value",1500)}},{type:"highlight",target:".saldo-value",icon:"⚖️",title:"Dein aktueller Saldo",text:"Plus oder Minus auf einen Blick. Tagesaktuell.",placement:"right",waitForTarget:!0},{type:"highlight",target:"#saldo-chart",icon:"📈",title:"Saldo-Verlauf",text:"Hover über die Punkte für Details. Zeitraum oben rechts umschaltbar.",placement:"top",waitForTarget:!0},{type:"highlight",target:".tag-row .ist-display",icon:"⏱️",title:"Stunden direkt kopieren",text:"Klick auf <strong>H</strong> oder <strong>M</strong> — kopiert den Wert in deine Zwischenablage. Praktisch fürs IHK-Berichtsheft.",placement:"left",waitForTarget:!0},{type:"highlight",target:".alert",icon:"⚠️",title:"Auffälligkeiten",text:"Fehlende Tage, falsche BS-Stunden, Pausen-Abzug — alles automatisch erkannt.",placement:"left",optional:!0,waitForTarget:!0,timeoutMs:1200},{type:"highlight",target:'a[href="#/profil"]',icon:"👤",title:"Profil",text:"Über 18? Pausen-Regel und Mail-Empfänger anpassen.",placement:"right"},{type:"highlight",target:'a[href="#/fahrtgeld"]',icon:"🚌",title:"Fahrgelderstattung",text:"Hier generierst du deine monatliche Fahrgeld-Excel mit deinen erkannten Berufsschultagen.",placement:"right",autoClick:!0,onAfterClick:async()=>{window.location.hash!=="#/fahrtgeld"&&(window.location.hash="#/fahrtgeld"),await it("#fahrtgeld-dropzone, #btn-template-replace, .fahrtgeld-generate-card",2e3)}},{type:"highlight",target:"#fahrtgeld-dropzone, .fahrtgeld-generate-card",icon:"📥",title:"Vorlage einmalig hochladen",text:'Eine bestehende Fahrgeld-Excel hier hochladen — Name, Personalnummer, Haltestellen und Tagessatz werden automatisch ausgelesen. Tour wartet auf den Upload (oder oben auf „Überspringen", um die Tour zu beenden).',placement:"top",waitForTarget:!0,timeoutMs:2500,waitForEvent:"better-ess:fahrgeld-template-uploaded"},{type:"highlight",target:".btn-generate-big",icon:"✅",title:"Excel generieren",text:"Monat unten auswählen, dann hier klicken. Du bekommst eine fertig ausgefüllte Excel zum Download — mit deinen Berufsschultagen, Datum und Unterschrift.",placement:"bottom",waitForTarget:!0,timeoutMs:1500,optional:!0},{type:"highlight",target:".btn-mail-big",icon:"✉️",title:"E-Mail an die Personalabteilung",text:"Öffnet Outlook mit fertig vorausgefülltem Empfänger, Betreff und Text. Excel-Anhang aus dem Download-Ordner musst du noch manuell dranhängen.",placement:"bottom",waitForTarget:!0,timeoutMs:1500,optional:!0},{type:"modal",icon:"🚀",title:"Bereit!",text:"Du kennst alle Funktionen. Tour erneut starten? Button am Ende der <strong>Daten</strong>-Seite."}],fn=Le.findIndex(e=>e.icon==="✨");let _=null,xe=null;function na(){_===null&&(jt(),_={idx:0},ce())}function Hi(e){return e?!1:!localStorage.getItem(ta)}function Ri(){localStorage.setItem(ta,"1")}function aa(){return _!==null}function jt(){document.querySelectorAll(".tour-blur-frame, .tour-popover, .tour-pointer, .tour-highlight-border").forEach(e=>e.remove()),xe&&(xe(),xe=null),_=null}function st(e){const t=document.querySelector(".tour-blur-frame.full"),n=[document.querySelector('.tour-blur-frame[data-side="top"]'),document.querySelector('.tour-blur-frame[data-side="left"]'),document.querySelector('.tour-blur-frame[data-side="right"]'),document.querySelector('.tour-blur-frame[data-side="bottom"]')];if(!e){n.forEach(v=>{v&&(v.style.opacity="0")});let g=t;!g?(g=document.createElement("div"),g.className="tour-blur-frame full",document.body.appendChild(g)):g.style.opacity="1";const f=document.querySelector(".tour-highlight-border");f&&(f.style.opacity="0");return}t&&(t.style.opacity="0");const a=e.getBoundingClientRect(),s=8,i=Math.max(0,a.left-s),l=Math.max(0,a.top-s),d=a.width+s*2,c=a.height+s*2,r=window.innerWidth,o=window.innerHeight,u={top:{top:0,left:0,width:r,height:l},left:{top:l,left:0,width:i,height:c},right:{top:l,left:i+d,width:r-(i+d),height:c},bottom:{top:l+c,left:0,width:r,height:o-(l+c)}};for(const[g,p]of Object.entries(u)){let f=n[Object.keys(u).indexOf(g)];f||(f=document.createElement("div"),f.className="tour-blur-frame",f.dataset.side=g,document.body.appendChild(f)),f.style.top=p.top+"px",f.style.left=p.left+"px",f.style.width=Math.max(0,p.width)+"px",f.style.height=Math.max(0,p.height)+"px",f.style.opacity=p.width<=0||p.height<=0?"0":"1"}let h=document.querySelector(".tour-highlight-border");h||(h=document.createElement("div"),h.className="tour-highlight-border",document.body.appendChild(h)),h.style.top=l+"px",h.style.left=i+"px",h.style.width=d+"px",h.style.height=c+"px",h.style.opacity="1",h.style.display=""}function Zt(){let e=document.querySelector(".tour-pointer");return e||(e=document.createElement("div"),e.className="tour-pointer",e.innerHTML=`
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
      </svg>`,e.style.top=window.innerHeight/2+"px",e.style.left=window.innerWidth/2+"px",document.body.appendChild(e)),e}function qi(e){const t=Zt(),n=e.getBoundingClientRect(),a=n.left+n.width*.5,s=n.top+n.height*.5;t.style.top=s-6+"px",t.style.left=a-9+"px"}function mn(){var e;(e=document.querySelector(".tour-pointer"))==null||e.remove()}async function ji(e){const t=Zt();t.classList.add("tour-pointer-clicking"),await new Promise(n=>setTimeout(n,280)),t.classList.remove("tour-pointer-clicking")}async function it(e,t=1500){const n=Date.now();for(;Date.now()-n<t;){const a=document.querySelector(e);if(a)return a;await new Promise(s=>setTimeout(s,100))}return null}async function ce(){var d,c,r;if(!_)return;const e=_.overrideStep||Le[_.idx];if(_.overrideStep=null,!e){Ft();return}if(xe&&(xe(),xe=null),e.type==="download-modal")return mn(),st(null),Zi(e);let t=null;if(e.type==="highlight"){if(t=e.waitForTarget?await it(e.target,e.timeoutMs??1500):document.querySelector(e.target),!t&&e.fallback){const o=e.fallback;if(o.onBefore)try{await o.onBefore()}catch(u){console.warn("tour fallback onBefore error:",u)}return _.overrideStep=o,ce()}if(!t&&e.optional)return _.idx++,ce();if(!t&&e.waitForTarget&&!e.fallback)return console.warn("[tour] target not found, skipping:",e.target),_.idx++,ce();if(t){try{t.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}catch{}await new Promise(o=>setTimeout(o,250)),st(t),Zt(),requestAnimationFrame(()=>qi(t))}else st(null)}else mn(),st(null);let n=document.querySelector(".tour-popover");n||(n=document.createElement("div"),n.className="tour-popover",n.style.visibility="hidden",document.body.appendChild(n)),n.classList.remove("tour-popover-large","tour-popover-hero"),e.hero&&n.classList.add("tour-popover-hero"),t?n.classList.remove("center"):n.classList.add("center");const a=_.idx===0,s=_.idx===Le.length-1,i=!!e.waitForEvent,l=i?"⏳ Warte auf Upload …":s?"Fertig":"Weiter →";if(n.innerHTML=`
    <div class="tour-popover-header">
      <span class="tour-popover-step">${_.idx+1} / ${Le.length}</span>
      <button class="tour-skip" type="button" aria-label="Tour beenden">Überspringen</button>
    </div>
    <div class="tour-popover-icon">${e.icon||""}</div>
    <h3>${e.title}</h3>
    <div class="tour-popover-body">${e.text}</div>
    <div class="tour-popover-actions">
      <button class="btn tour-prev" type="button" ${a?'disabled style="opacity:0.4;cursor:default"':""}>← Zurück</button>
      <button class="btn primary tour-next" type="button" ${i?'disabled style="opacity:0.5;cursor:default"':""}>${l}</button>
    </div>`,t)n.style.opacity="0",requestAnimationFrame(()=>{Gi(n,t,e.placement||"right"),n.style.visibility="visible",n.style.opacity="1"});else{n.style.top=n.style.left=n.style.right=n.style.bottom="",n.style.opacity="0",n.style.visibility="visible";const o=document.querySelector(".tour-blur-frame.full");requestAnimationFrame(()=>{o&&(o.style.opacity="1"),n.style.opacity="1"})}if((d=n.querySelector(".tour-skip"))==null||d.addEventListener("click",()=>{Ft()}),a||(c=n.querySelector(".tour-prev"))==null||c.addEventListener("click",async()=>{_.idx=Math.max(0,_.idx-1),await ce()}),!i)(r=n.querySelector(".tour-next"))==null||r.addEventListener("click",async()=>{if(e.autoClick&&t){await ji();try{const o=t.getAttribute("href");o&&o.startsWith("#/")?window.location.hash=o.slice(1):t.click()}catch(o){console.warn("tour autoClick error:",o)}if(e.onAfterClick)try{await e.onAfterClick()}catch(o){console.warn("tour onAfterClick error:",o)}else await new Promise(o=>setTimeout(o,350))}else if(e.onNext)try{await e.onNext()}catch(o){console.warn("tour onNext error:",o)}_.idx++,await ce()});else{const o=_.idx,u=o<fn,h=async()=>{jt(),document.querySelectorAll(".upload-modal-overlay").forEach(g=>g.remove()),await new Promise(g=>setTimeout(g,300)),_={idx:u?fn:o+1},await ce()};document.addEventListener(e.waitForEvent,h,{once:!0}),xe=()=>document.removeEventListener(e.waitForEvent,h)}}function Zi(e){var a,s,i;let t=document.querySelector(".tour-popover");t||(t=document.createElement("div"),t.className="tour-popover",t.style.visibility="hidden",document.body.appendChild(t)),t.classList.add("tour-popover-large","center"),t.style.visibility="visible";const n=_.idx===0;_.idx,Le.length-1,t.innerHTML=`
    <div class="tour-popover-header">
      <span class="tour-popover-step">${_.idx+1} / ${Le.length}</span>
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
    </div>`,t.style.top=t.style.left=t.style.right=t.style.bottom="",t.style.opacity="1",(a=t.querySelector(".tour-skip"))==null||a.addEventListener("click",()=>{Ft()}),n||(s=t.querySelector(".tour-prev"))==null||s.addEventListener("click",async()=>{_.idx=Math.max(0,_.idx-1),await ce()}),(i=t.querySelector(".tour-next"))==null||i.addEventListener("click",async()=>{_.idx++,await ce()})}function Gi(e,t,n){const a=t.getBoundingClientRect(),s=16,i=e.offsetWidth||360,l=e.offsetHeight||220,d=window.innerWidth,c=window.innerHeight,r=[n,"right","bottom","left","top"];let o=null;for(const g of r)if((()=>{switch(g){case"right":return a.right+s+i<=d;case"left":return a.left-s-i>=0;case"bottom":return a.bottom+s+l<=c;case"top":return a.top-s-l>=0}})()){o=g;break}o=o||n;let u,h;switch(o){case"right":u=a.top+a.height/2-l/2,h=a.right+s;break;case"left":u=a.top+a.height/2-l/2,h=a.left-i-s;break;case"bottom":u=a.bottom+s,h=a.left+a.width/2-i/2;break;case"top":default:u=a.top-l-s,h=a.left+a.width/2-i/2;break}u=Math.max(s,Math.min(c-l-s,u)),h=Math.max(s,Math.min(d-i-s,h)),e.style.position="fixed",e.style.top=u+"px",e.style.left=h+"px",e.style.right="auto",e.style.bottom="auto",e.style.transform=""}function Ft(){jt(),Ri()}async function Ui({root:e}){var l;const t=await qn(),n=await le();e.innerHTML=`
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
            <img class="zoomable" src="./tutorial/speichern.png" alt="Speichern-Button im PDF-Viewer" title="Klick für Vollbild" style="width: 100%; max-width: 600px; border: 1px solid var(--border); border-radius: var(--radius-sm); display: block; cursor: zoom-in;" />
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
        ${t.length===0?'<div class="empty-state"><div class="empty-state-icon">📭</div><p>Noch keine Uploads</p></div>':ia(t)}
      </div>
    </div>

    <div class="card" style="margin-top: 24px; text-align: center; background: transparent; border-style: dashed;">
      <p style="color: var(--fg-muted); font-size: 13px; margin: 0 0 12px;">Brauchst du nochmal eine kurze Tour durch die App?</p>
      <button class="btn" id="btn-tour-restart" type="button">🎯 Tour erneut starten</button>
    </div>
  `;const a=e.querySelector("#upload-zone"),s=e.querySelector("#file-input");async function i(){return aa()?!0:await Ni("Je länger der Zeitraum deines Zeitnachweises, desto besser arbeitet die App: vor allem Berufsschul-Muster (besonders im 14-tägigen Rhythmus), Saldo-Verlauf und Pausen-Analysen werden genauer. Mit weniger Daten funktioniert die App auch — nur weniger umfangreich.","Mein Zeitnachweis PDF deckt einen möglichst langen Zeitraum ab.",{title:"Vor dem Upload",confirmLabel:"Datei auswählen",cancelLabel:"Abbrechen",icon:"info"})}a.addEventListener("click",async()=>{await i()&&s.click()}),a.addEventListener("dragover",d=>{d.preventDefault(),a.classList.add("drag")}),a.addEventListener("dragleave",()=>a.classList.remove("drag")),a.addEventListener("drop",async d=>{var o;d.preventDefault(),a.classList.remove("drag");const c=(o=d.dataTransfer.files)==null?void 0:o[0];!c||!await i()||await bn(c,e,n)}),s.addEventListener("change",async d=>{var r;const c=(r=d.target.files)==null?void 0:r[0];c&&await bn(c,e,n)}),e.querySelector("#btn-export").addEventListener("click",Xi),e.querySelector("#btn-import").addEventListener("click",()=>e.querySelector("#import-input").click()),e.querySelector("#import-input").addEventListener("change",Qi),e.querySelector("#btn-clear-parsed").addEventListener("click",Yi),e.querySelector("#btn-reset").addEventListener("click",er),(l=e.querySelector("#btn-tour-restart"))==null||l.addEventListener("click",()=>na()),Ji()}let pn=!1;function Ji(){pn||(pn=!0,document.body.addEventListener("click",e=>{if(e.target.closest(".lightbox-overlay, .upload-modal-overlay"))return;const t=e.target.closest("img.zoomable");t&&sa(t.src,t.alt)}))}function sa(e,t){const n=document.createElement("div");n.className="lightbox-overlay",n.innerHTML=`
    <button class="lightbox-close" aria-label="Schließen" title="Schließen (Esc)">×</button>
    <img src="${e}" alt="${t||""}" />
  `,document.body.appendChild(n);const a=()=>{n.remove(),document.removeEventListener("keydown",s)},s=i=>{i.key==="Escape"&&a()};n.addEventListener("click",i=>{(i.target===n||i.target.classList.contains("lightbox-close"))&&a()}),document.addEventListener("keydown",s)}async function Yi(){await re("PDF-abgeleitete Daten (Tage, Monate, Uploads) werden gelöscht. Profil und Mail-Vorlagen bleiben erhalten.",{title:"PDF-Daten löschen?",confirmLabel:"Löschen",variant:"danger"})&&(await jn(),O("Daten gelöscht. Profil bleibt."),setTimeout(()=>location.reload(),600))}function ia(e){return`
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
            <td>${M(tr(t.hochladeDatum))}</td>
            <td>${M(t.dateiname||"—")}</td>
            <td>${t.zeitraumVon?M(C(new Date(t.zeitraumVon))):"—"} – ${t.zeitraumBis?M(C(new Date(t.zeitraumBis))):"—"}</td>
            <td>${t.stichtagAuswertung?M(C(new Date(t.stichtagAuswertung))):"—"}</td>
            <td class="num">${t.tageCount??"—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}async function bn(e,t,n){var i,l,d,c;const a=t.querySelector("#upload-status"),s=t.querySelector("#upload-zone");if(e.type!=="application/pdf"&&!/\.pdf$/i.test(e.name)){He({type:"error",title:"Falscher Dateityp",desc:`<strong>${M(e.name)}</strong> ist keine PDF-Datei.`,hint:"Lade eine PDF-Datei hoch — den Zeitnachweis aus dem ESS über den <strong>Speichern-Button</strong> (Disketten-Symbol oben rechts im PDF-Viewer)."});return}if(e.size>50*1024*1024){He({type:"error",title:"Datei zu groß",desc:`<strong>${M(e.name)}</strong> ist ${(e.size/1024/1024).toFixed(1)} MB groß.`,hint:"ESS-Zeitnachweise sind normalerweise unter 1 MB. Bitte überprüfe die Datei."});return}s.style.pointerEvents="none",s.style.opacity="0.6",a.innerHTML=`
    <div class="alert severity-info">
      <div class="loader-ring" style="width: 24px; height: 24px; border-width: 2px;"></div>
      <div class="alert-body">
        <div class="alert-title">PDF wird verarbeitet…</div>
        <p style="margin: 4px 0; font-size: 13px;"><strong>${M(e.name)}</strong> — das kann bei großen PDFs einige Sekunden dauern.</p>
      </div>
    </div>`;try{const r=await e.arrayBuffer(),o=await Pi(r);if(o.tage.length===0&&!o.meta.zeitraumVon){s.style.pointerEvents="",s.style.opacity="",a.innerHTML="",He({type:"error",title:"Diese PDF ist nicht kompatibel",desc:'Im PDF wurden keine Texte gefunden. Das passiert, wenn das PDF über „Drucken → Als PDF speichern" (z.B. „Microsoft Print to PDF") erzeugt wurde — dabei werden Texte als Vektorpfade gerendert und können nicht ausgelesen werden.',hint:'Lade dein PDF direkt aus dem ESS über den <strong>Speichern-Button</strong> herunter (Disketten-Symbol oben rechts im PDF-Viewer) — nicht über „Drucken".',screenshot:!0,producer:(i=o.meta)==null?void 0:i.producer}),gt("PDF enthält keinen extrahierbaren Text.");return}const u=await Qe(),h=u==null?void 0:u.personalnummer,g=o.meta.personalnummer;if(h&&g&&h!==g){const x=(u==null?void 0:u.name)||`Personalnr. ${h}`,D=o.meta.name||`Personalnr. ${g}`;if(!await re(`Das hochgeladene PDF gehört zu einem anderen Azubi als die bisher gespeicherten Daten:

Bisher: ${x}
Jetzt:  ${D}

Wenn du fortfährst, werden alle alten Tagesdaten gelöscht und durch die neuen ersetzt. (Profil-Einstellungen wie Theme und Mail-Vorlagen bleiben erhalten.)`,{title:"Anderer Azubi erkannt",confirmLabel:"Daten ersetzen",variant:"danger"})){s.style.pointerEvents="",s.style.opacity="",a.innerHTML=`
          <div class="alert severity-info">
            <div class="alert-body">
              <div class="alert-title">Upload abgebrochen</div>
              <p style="margin: 4px 0; font-size: 13px;">Es wurden keine Daten verändert. Lade das richtige PDF (für ${M(x)}) erneut hoch.</p>
            </div>
          </div>`;return}await jn();const F=await le();await ct({...F,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1}})}const p=await ti(o.tage,o.monate,o.meta.stichtagAuswertung);(p.skippedTage>0||p.skippedMonate>0)&&console.info(`[upload] ${p.skippedTage} Tage und ${p.skippedMonate} Monate uebersprungen — bestehende Daten haben juengeren Stichtag.`),await ni({dateiname:e.name,personalnummer:o.meta.personalnummer??null,name:o.meta.name??null,mitarbeiterkreis:o.meta.mitarbeiterkreis??null,zeitraumVon:((l=o.meta.zeitraumVon)==null?void 0:l.toISOString())??null,zeitraumBis:((d=o.meta.zeitraumBis)==null?void 0:d.toISOString())??null,stichtagAuswertung:((c=o.meta.stichtagAuswertung)==null?void 0:c.toISOString())??null,tageCount:o.tage.length,monateCount:o.monate.length}),o.meta.mitarbeiterkreis&&await ei(o.meta.mitarbeiterkreis);const f=await ue(),v=Gn(f),m={...Rn(),...n};(v.wochentageWoechentlich.length>0||v.wochentage14Taegig.length>0)&&(m.berufsschulMuster=v),await ct(m),a.innerHTML="",aa()||He({type:"success",title:"PDF erfolgreich eingelesen",desc:o.meta.zeitraumVon?`Zeitraum: ${C(o.meta.zeitraumVon)} – ${C(o.meta.zeitraumBis)}`:"Daten wurden erfolgreich verarbeitet.",stats:[{num:o.tage.length,label:"Tage"},{num:o.monate.length,label:"Monatsübersichten"}]}),O(`PDF verarbeitet: ${o.tage.length} Tage.`),document.dispatchEvent(new CustomEvent("better-ess:pdf-uploaded",{detail:{tageCount:o.tage.length,monateCount:o.monate.length}}));const w=await qn();t.querySelector("#uploads-list").innerHTML=ia(w)}catch(r){console.error(r),a.innerHTML="",He({type:"error",title:"Fehler beim Parsen",desc:M(r.message||String(r)),hint:'Prüfe, ob es sich um einen ESS-Zeitnachweis im richtigen Format handelt. Lade dein PDF über den Speichern-Button herunter, nicht über „Drucken".',screenshot:!0}),gt("PDF konnte nicht gelesen werden.")}finally{s.style.pointerEvents="",s.style.opacity=""}}async function Xi(){try{const e=await ii(),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),a=document.createElement("a"),s=new Date().toISOString().slice(0,10);a.href=n,a.download=`zeitnachweis-backup-${s}.json`,a.click(),URL.revokeObjectURL(n),O("Backup heruntergeladen.")}catch(e){gt(`Export fehlgeschlagen: ${e.message}`)}}async function Qi(e){var n;const t=(n=e.target.files)==null?void 0:n[0];if(t)try{const a=await t.text(),s=JSON.parse(a);if(!await re("Existierende Daten werden vom Backup überschrieben.",{title:"Backup importieren?",confirmLabel:"Importieren",variant:"danger"}))return;await ri(s),O("Backup erfolgreich importiert. Seite wird neu geladen…"),setTimeout(()=>location.reload(),800)}catch(a){gt(`Import fehlgeschlagen: ${a.message}`)}}async function er(){await re("Alle Daten (Tage, Monate, Profil, Vorlagen, Mail-Vorlagen, Fahrgeld-Vorlage) werden endgültig gelöscht. Das lässt sich nicht rückgängig machen.",{title:"ALLE Daten löschen?",confirmLabel:"Weiter zur Sicherheitsfrage",variant:"danger"})&&await re("Letzte Warnung — wirklich alle Daten löschen?",{title:"Sicher?",confirmLabel:"Endgültig löschen",variant:"danger"})&&(await si(),O("Alle Daten gelöscht."),setTimeout(()=>location.reload(),600))}function tr(e){if(!e)return"—";const t=new Date(e);return t.toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"})+" "+t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}function He(e){const{type:t,title:n,desc:a,hint:s,screenshot:i,stats:l,producer:d}=e,c=document.createElement("div");c.className="upload-modal-overlay";const r=`
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
      ${l.map(m=>`
        <div class="upload-modal-stat">
          <div class="upload-modal-stat-num">${M(String(m.num))}</div>
          <div class="upload-modal-stat-label">${M(m.label)}</div>
        </div>
      `).join("")}
    </div>`:"",h=i?`
    <img class="upload-modal-hint-img zoomable" src="./tutorial/speichern.png"
         alt="Speichern-Button im PDF-Viewer"
         title="Klick für Vollbild" />`:"",g=d?`<p style="font-size: 12px; color: var(--fg-subtle); margin-top: 12px;">Erkannt: Producer „${M(d)}"</p>`:"",p=t==="success"?`
      <a href="#/" class="btn primary">Zum Dashboard</a>
      <a href="#/kalender" class="btn">Kalender öffnen</a>
      <button class="btn upload-modal-close-btn">Schließen</button>`:`
      <button class="btn primary upload-modal-close-btn">Verstanden</button>`;c.innerHTML=`
    <div class="upload-modal" role="dialog" aria-modal="true">
      <div class="upload-modal-icon-wrap">
        ${t==="success"?r:o}
      </div>
      <h2 class="upload-modal-title">${M(n)}</h2>
      <p class="upload-modal-desc">${a}</p>
      ${u}
      ${s?`<p class="upload-modal-desc" style="background: var(--accent-bg); padding: 12px; border-radius: 8px; border-left: 3px solid var(--accent);">${s}</p>`:""}
      ${h}
      ${g}
      <div class="upload-modal-actions">${p}</div>
    </div>`,document.body.appendChild(c);const f=()=>{c.style.animation="upload-modal-fade 150ms ease-out reverse",setTimeout(()=>c.remove(),150),document.removeEventListener("keydown",v)},v=m=>{m.key==="Escape"&&f()};document.addEventListener("keydown",v),c.addEventListener("click",m=>{if(m.target===c){f();return}if(m.target.closest(".upload-modal-close-btn")){f();return}if(m.target.closest(".upload-modal-actions a, .upload-modal-actions button")){f();return}const w=m.target.closest("img.zoomable");w&&sa(w.src,w.alt)})}const vn={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag"};async function nr({root:e}){var d,c,r,o,u;const[t,n,a]=await Promise.all([le(),_e(),Ze("mitarbeiterkreis",null)]),s=t.berufsschulMuster??{},i=(((d=s.wochentageWoechentlich)==null?void 0:d.length)??0)>0||(((c=s.wochentage14Taegig)==null?void 0:c.length)??0)>0;e.innerHTML=`
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
            <p class="hint">Fahrgelderstattung und Berufsschul-Erkennung. ${a?`Aus deinem PDF erkannt: Mitarbeiterkreis <code>${ar(a)}</code> → Standardmäßig <strong>${String(a).trim().toUpperCase()==="AZ"?"an":"aus"}</strong>.`:"Wird automatisch aus dem Mitarbeiterkreis im Zeitnachweis abgeleitet (AZ = Azubi)."}</p>
          </span>
        </label>
      </div>

      <div class="card">
        <h2>Zeitwirtschaft-Kontakt</h2>
        <div class="form-group">
          <label>Dein Name <span class="hint" style="font-weight:400; text-transform:none; letter-spacing:0;">(z. B. im Mail-Betreff bei Fahrgeld)</span></label>
          <input type="text" name="name" value="${De(t.name)}" placeholder="z. B. Vorname Nachname" />
        </div>
        <div class="form-group">
          <label>E-Mail-Empfänger</label>
          <input type="email" name="zeitwirtschaftEmail" value="${De(t.zeitwirtschaftEmail)}" placeholder="zeitwirtschaft@firma.de" />
        </div>
        <div class="form-group">
          <label>Anrede in Mails</label>
          <input type="text" name="zeitwirtschaftAnrede" value="${De(t.zeitwirtschaftAnrede)}" placeholder="z. B. Frau Müller" />
        </div>
      </div>

      <div class="card${n?"":" hidden"}" style="${n?"":"display:none;"}">
        <h2>Fahrgeld-Empfänger</h2>
        <div class="form-group">
          <label>E-Mail-Empfänger (To)</label>
          <input type="email" name="fahrtgeldEmpfaenger" value="${De(t.fahrtgeldEmpfaenger)}" placeholder="empfaenger@firma.de" />
        </div>
        <div class="form-group">
          <label>Cc (optional)</label>
          <input type="email" name="fahrtgeldCc" value="${De(t.fahrtgeldCc)}" placeholder="cc@firma.de" />
        </div>
        <div class="form-group">
          <label>Anrede in Mails</label>
          <input type="text" name="fahrtgeldAnrede" value="${De(t.fahrtgeldAnrede)}" placeholder="z. B. Frau Müller" />
        </div>
      </div>

      <div class="card${n?"":" hidden"}" style="grid-column: 1 / -1;${n?"":" display:none;"}">
        <h2>Berufsschul-Rhythmus <span style="font-size: 11px; font-weight: 500; color: var(--fg-subtle); text-transform: uppercase; letter-spacing: 0.05em; margin-left: 8px;">Automatisch erkannt</span></h2>
        ${i?`
          <div class="tag-detail">
            <div class="tag-detail-label">Wöchentlich</div>
            <div class="tag-detail-value"><strong>${((r=s.wochentageWoechentlich)==null?void 0:r.map(h=>vn[h]).join(", "))||"—"}</strong></div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Alle 2 Wochen</div>
            <div class="tag-detail-value"><strong>${((o=s.wochentage14Taegig)==null?void 0:o.map(h=>vn[h]).join(", "))||"—"}</strong>${s.referenzDatum14Taegig?` <span class="hint">(Anker: ${C(new Date(s.referenzDatum14Taegig))})</span>`:""}</div>
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
  `,e.querySelector("#profil-form").addEventListener("submit",async h=>{var f,v,m,w,x,D;h.preventDefault();const g=new FormData(h.target),p={...t,ueber18:g.get("ueber18")==="on",name:((f=g.get("name"))==null?void 0:f.trim())||"",zeitwirtschaftEmail:((v=g.get("zeitwirtschaftEmail"))==null?void 0:v.trim())||"",zeitwirtschaftAnrede:((m=g.get("zeitwirtschaftAnrede"))==null?void 0:m.trim())||"",fahrtgeldEmpfaenger:((w=g.get("fahrtgeldEmpfaenger"))==null?void 0:w.trim())||"",fahrtgeldCc:((x=g.get("fahrtgeldCc"))==null?void 0:x.trim())||"",fahrtgeldAnrede:((D=g.get("fahrtgeldAnrede"))==null?void 0:D.trim())||""};await ct(p),O("Profil gespeichert.")});const l=e.querySelector("#azubi-switch");l==null||l.addEventListener("change",async h=>{await Qs(h.target.checked),typeof window.__applyAzubiVisibility=="function"&&await window.__applyAzubiVisibility(),O(h.target.checked?"Azubi-Features an.":"Azubi-Features aus."),qs()})}function De(e){return String(e??"").replace(/"/g,"&quot;")}function ar(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function sr({params:e,root:t}){var r,o,u,h;const n=e.datum,a=await y.tage.get(n),s=await le();if(!a){t.innerHTML=`<h1 class="view-title">Tag nicht gefunden</h1><p>Für ${n} liegen keine Daten vor.</p><a href="#/" class="btn">← Dashboard</a>`;return}const i=W(n),l=a.tagestyp==="Stempelzeit"?_n(a,s):null,d=pt(i,s.berufsschulMuster),c=Fn(a.zeitSpannen);t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/kalender/${n.slice(0,7)}" class="btn sm">← Zum Monat</a>
    </div>
    <h1 class="view-title">${Nt(i)}</h1>
    <p class="view-subtitle">${a.tagestyp??"Kein Typ"} · KW ${(r=a.wocheKey)==null?void 0:r.split("-")[1]}</p>

    ${c?`
      <div class="card kommen-gehen-hero" style="margin-bottom: 24px;">
        <div class="hint" style="text-transform: uppercase; letter-spacing: 0.05em; font-size: 11px; margin-bottom: 10px;">Tages-Rahmen</div>
        ${Zn(c,{size:32})}
      </div>
    `:""}

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${a.ist!=null?a.ist.toFixed(2).replace(".",",")+"h":"—"}</div>
        <div class="hint">= ${a.ist!=null?je(a.ist):"—"}</div>
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
        ${(o=a.zeitSpannen)!=null&&o.length?a.zeitSpannen.map(g=>`
              <div class="tag-detail">
                <div class="tag-detail-label">${Re(g.aktivitaet??"Stempelzeit")}</div>
                <div class="tag-detail-value tabular">${g.von??"—"} – ${g.bis??"—"}</div>
              </div>
            `).join(""):'<p class="hint">Keine Stempelzeiten für diesen Tag.</p>'}
      </div>

      <div class="card">
        <h2>Klassifikation</h2>
        <div class="tag-detail">
          <div class="tag-detail-label">Tagestyp</div>
          <div class="tag-detail-value">${a.tagestyp?`<span class="pill ${ir(a.tagestyp)}">${Re(a.tagestyp)}</span>`:"—"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Laut Profil</div>
          <div class="tag-detail-value">${d?"🎓 Berufsschultag erwartet":"Regulärer Werktag"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">TAZP-Code</div>
          <div class="tag-detail-value"><code>${Re(a.tazp??"—")}</code></div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Monat</div>
          <div class="tag-detail-value">${Re(a.monatKey)}</div>
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
          <p class="hint" style="margin-top: 12px;">Vor dem 01.04.2026 galt die alte Regelung: nicht ausstempeln zur Pause nötig — wenn man auf dem Gelände blieb, wurde automatisch 1h Pause abgezogen. Die App nimmt deshalb die Pause für diese Tage einfach aus dem PDF und prüft sie nicht gegen die gesetzliche Pflicht.</p>
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
              <div class="alert-body">${Re(l.warnung)}</div>
            </div>
          `:""}
        </div>
      `:""}
    </div>
  `}function ir(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function Re(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const rr=[{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:180,label:"6 Monate"},{key:365,label:"1 Jahr"},{key:730,label:"2 Jahre"},{key:"alles",label:"Alles"}];function lr(e){return rr.filter(t=>t.key==="alles"||t.key<e)}async function or({root:e}){var r,o;const[t,n]=await Promise.all([ue(),ft()]);if(!t.length){e.innerHTML='<h1 class="view-title">Analytics</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a=lr(t.length);let s=a.some(u=>u.key===30)?30:"alles";e.innerHTML=`
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
        <div class="zeitraum-controls">
          <div class="zeitraum-nav" id="startend-nav" hidden>
            <button type="button" class="zeitraum-nav-btn" data-dir="prev" title="Voriger Zeitraum">‹</button>
            <span class="zeitraum-nav-label">—</span>
            <button type="button" class="zeitraum-nav-btn" data-dir="next" title="Nächster Zeitraum">›</button>
          </div>
          <div class="segmented" id="startend-zeitraum">
            ${a.map(u=>`<button type="button" data-key="${u.key}" class="${s===u.key?"active":""}">${u.label}</button>`).join("")}
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
  `;let i=0;const l=()=>{if(s==="alles")return t;const u=t.length,h=Math.min(s,u),g=u+i*h,p=g-h;return g<=0?[]:t.slice(Math.max(0,p),g)},d=()=>{const u=e.querySelector("#startend-nav");if(!u)return;const h=s==="alles";if(u.hidden=h,h)return;const g=ot(t.length,s),p=l();u.querySelector('.zeitraum-nav-btn[data-dir="prev"]').disabled=i<=g,u.querySelector('.zeitraum-nav-btn[data-dir="next"]').disabled=i>=0;const f=u.querySelector(".zeitraum-nav-label");f&&(f.textContent=Xn(p,s))},c=()=>{an(e.querySelector("#c-startend"),l()),d()};requestAnimationFrame(()=>{Ls(e.querySelector("#c-saldo"),n),Ns(e.querySelector("#c-wochen"),t),an(e.querySelector("#c-startend"),l()),Bs(e.querySelector("#c-wochentag"),t),Cs(e.querySelector("#c-pausen"),t),Os(e.querySelector("#c-donut"),t),_s(e.querySelector("#c-alle-tage"),t.slice(-30)),d()}),(r=e.querySelector("#startend-zeitraum"))==null||r.addEventListener("click",u=>{const h=u.target.closest("button[data-key]");if(!h||h.disabled)return;const g=h.getAttribute("data-key"),p=g==="alles"?"alles":parseInt(g,10);p!==s&&(s=p,i=0,e.querySelectorAll("#startend-zeitraum button").forEach(f=>f.classList.toggle("active",f===h)),c())}),(o=e.querySelector("#startend-nav"))==null||o.addEventListener("click",u=>{const h=u.target.closest(".zeitraum-nav-btn");if(!h||h.disabled||s==="alles")return;const g=h.getAttribute("data-dir")==="prev"?-1:1,p=ot(t.length,s);let f=i+g;f<p&&(f=p),f>0&&(f=0),f!==i&&(i=f,c())})}function cr(e){return String(e??"").replace(/"/g,"&quot;")}async function Mt({params:e,root:t}){const[n,a,s,i,l,d]=await Promise.all([ue(),ft(),le(),Qe(),mt(),_e()]),c=Object.fromEntries(l.map(b=>[b.key,b]));if(!n.length){t.innerHTML=`
      <h1 class="view-title">Kalender</h1>
      <p class="view-subtitle">Noch keine Daten geladen.</p>
      <a href="#/daten" class="btn primary">Zum Upload</a>`;return}const r=[...new Set(n.map(b=>b.monatKey))].sort(),o=e.yyyymm,u=r.includes(o)?o:r[r.length-1],h=n.filter(b=>b.monatKey===u),g=[...new Set(h.map(b=>b.wocheKey))].sort(),p=e.yyyykw,f=g.includes(p)?p:null,v=r.indexOf(u),m=v>0?r[v-1]:null,w=v<r.length-1?r[v+1]:null,x=Lt(u),D=a.find(b=>b.monatKey===u),$=Cn(n,a),F=$.filter(b=>b.monatKey===u),N=i!=null&&i.stichtagAuswertung?new Date(i.stichtagAuswertung):new Date,I=bt(n,s,N,void 0,{isAzubi:d}),R=I.filter(b=>b.datum.startsWith(u)),k=gr({aktiverMonatKey:u,monatLabel:x,prevMonatKey:m,nextMonatKey:w,tageAnzahl:h.length,warnungenAnzahl:R.length});f?await ur({root:t,switcherHtml:k,aktiverMonatKey:u,aktiveWocheKey:f,vollKurve:$,alleWarnungen:I,profil:s,vorlagenOverrides:c}):await dr({root:t,switcherHtml:k,monatLabel:x,tageMonat:h,monatsKurve:F,monatUebersicht:D,monatsWarnungen:R,aktiverMonatKey:u,profil:s,vorlagenOverrides:c})}async function dr({root:e,switcherHtml:t,monatLabel:n,tageMonat:a,monatsKurve:s,monatUebersicht:i,monatsWarnungen:l,aktiverMonatKey:d,profil:c,vorlagenOverrides:r}){e.innerHTML=`
    ${t}

    ${i?hr(i):""}

    <div class="card" style="margin-bottom: 24px;">
      <h2>Saldo-Verlauf</h2>
      <div class="chart-wrap tall"><canvas id="chart-kalender-monat"></canvas></div>
    </div>

    ${l.length?`
      <div class="card" style="margin-bottom: 24px;">
        <h2>Auffälligkeiten</h2>
        ${l.map(o=>ra(o,c,r)).join("")}
      </div>
    `:""}

    <div class="card" style="margin-bottom: 24px;">
      <h2 style="margin-bottom: 16px;">Wochen</h2>
      ${fr(s,d)}
    </div>

    <div class="card">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Tage</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">H/M zum Kopieren</span>
      </div>
      <div id="tage-liste-kalender">${vt(s.slice().reverse(),{warnungen:l})}</div>
    </div>
  `,s.length&&(requestAnimationFrame(()=>{const o=e.querySelector("#chart-kalender-monat");o&&Vt(o,s)}),Rt(e.querySelector("#tage-liste-kalender")))}async function ur({root:e,switcherHtml:t,aktiverMonatKey:n,aktiveWocheKey:a,vollKurve:s,alleWarnungen:i,profil:l,vorlagenOverrides:d}){var m;const c=s.filter(w=>w.wocheKey===a),r=c.reduce((w,x)=>w+ht(x),0),o=c.reduce((w,x)=>w+Ot(x),0),u=+(r-o).toFixed(2),h=w=>w>.05?"var(--success)":w<-.05?"var(--danger)":"var(--fg)",g=i.filter(w=>c.some(x=>x.datum===w.datum)),p=(m=c[0])==null?void 0:m.datum,f=p?Xe(W(p)):"",v=a.split("-")[1]||"?";e.innerHTML=`
    ${t}

    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 12px;">
      <a href="#/kalender/${n}" class="btn sm">← Zur Monatsansicht</a>
    </div>

    <h2 style="margin: 0 0 4px;">KW ${M(v)}</h2>
    <p class="view-subtitle">${M(f)} · ${c.length} Tage · ${g.length} Auffälligkeiten</p>

    ${c.length===0?`
      <p class="hint" style="text-align: center; padding: 32px;">Keine Tage für diese Woche im PDF.</p>
    `:`
      <div class="grid cols-3" style="margin-bottom: 24px;">
        <div class="card">
          <h3>Ist-Stunden</h3>
          <div class="tabular" style="font-size: 28px; font-weight: 650;">${r.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="card">
          <h3>Soll-Stunden</h3>
          <div class="tabular" style="font-size: 28px; font-weight: 650;">${o.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="card">
          <h3>Differenz</h3>
          <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${h(u)};">${fe(u,{signed:!0})}</div>
        </div>
      </div>

      <div class="card" style="margin-bottom: 24px;">
        <h2>Saldo-Verlauf in dieser Woche</h2>
        <div class="chart-wrap"><canvas id="chart-kalender-woche"></canvas></div>
      </div>

      ${g.length?`
        <div class="card" style="margin-bottom: 24px;">
          <h2>Auffälligkeiten in KW ${M(v)}</h2>
          ${g.map(w=>ra(w,l,d)).join("")}
        </div>
      `:""}

      <div class="card">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Tage</h2>
          <span style="color: var(--fg-muted); font-size: 13px;">H/M zum Kopieren</span>
        </div>
        <div id="tage-liste-kalender">${vt(c,{warnungen:g})}</div>
      </div>
    `}
  `,c.length&&(requestAnimationFrame(()=>{const w=e.querySelector("#chart-kalender-woche");w&&Vt(w,c)}),Rt(e.querySelector("#tage-liste-kalender")))}function gr({aktiverMonatKey:e,monatLabel:t,prevMonatKey:n,nextMonatKey:a,tageAnzahl:s,warnungenAnzahl:i}){const l=n?Lt(n):"",d=a?Lt(a):"";return`
    <div class="card kalender-monat-bar" style="margin-bottom: 24px;">
      <div class="kalender-monat-nav">
        <a class="kalender-monat-btn ${n?"":"is-disabled"}"
           ${n?`href="#/kalender/${n}"`:'aria-disabled="true"'}
           title="${n?"Zu "+M(l):"Kein vorheriger Monat"}"
           aria-label="Vorheriger Monat">
          <span class="kalender-monat-btn-arrow" aria-hidden="true">‹</span>
          <span class="kalender-monat-btn-text">${n?M(l):""}</span>
        </a>
        <div class="kalender-monat-titel">
          <h2 style="margin: 0;">${M(t)}</h2>
          <div class="hint">${s} Tage · ${i} Auffälligkeiten</div>
        </div>
        <a class="kalender-monat-btn next ${a?"":"is-disabled"}"
           ${a?`href="#/kalender/${a}"`:'aria-disabled="true"'}
           title="${a?"Zu "+M(d):"Kein nächster Monat"}"
           aria-label="Nächster Monat">
          <span class="kalender-monat-btn-text">${a?M(d):""}</span>
          <span class="kalender-monat-btn-arrow" aria-hidden="true">›</span>
        </a>
      </div>
    </div>`}function hr(e){var i,l,d;const t=((i=e.glz)==null?void 0:i.saldoGesamt)??0,n=((l=e.glz)==null?void 0:l.saldoVorperiode)??0,a=((d=e.glz)==null?void 0:d.saldoAktuellePeriode)??0,s=c=>c>.05?"var(--success)":c<-.05?"var(--danger)":"var(--fg)";return`
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
    </div>`}function fr(e,t){var s;const n={};for(const i of e)n[s=i.wocheKey]??(n[s]={key:i.wocheKey,tage:[],ist:0,soll:0}),n[i.wocheKey].tage.push(i),n[i.wocheKey].ist+=ht(i),n[i.wocheKey].soll+=Ot(i);const a=Object.keys(n).sort();return a.length?a.map(i=>{var h;const l=n[i],d=+(l.ist-l.soll).toFixed(2),c=d>.05?"var(--success)":d<-.05?"var(--danger)":"var(--fg-muted)",r=(h=l.tage.slice().sort((g,p)=>g.datum.localeCompare(p.datum))[0])==null?void 0:h.datum,o=r?Xe(W(r)):"",u=i.split("-")[1]||"?";return`
      <a href="#/kalender/${t}/${i}" class="list-item" style="text-decoration: none; color: inherit;">
        <div class="tabular" style="font-size: 16px; font-weight: 600; color: var(--fg-muted); min-width: 80px;">KW ${M(u)}</div>
        <div>
          <div class="list-item-title tabular">${M(o)}</div>
          <div class="list-item-sub">${l.tage.length} Tage · Ist ${l.ist.toFixed(2).replace(".",",")}h · Soll ${l.soll.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="tabular" style="font-weight: 600; font-size: 16px; color: ${c};">${fe(d,{signed:!0})}</div>
        <div style="color: var(--fg-subtle);">→</div>
      </a>`}).join(""):'<p style="color: var(--fg-muted);">Keine Wochen.</p>'}function ra(e,t,n){const a=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";let s=null;if(e.mailVorlageKey&&t){const i=et(e.mailVorlageKey,n==null?void 0:n[e.mailVorlageKey]);if(i){const l=It(t,e);s=Ht(t,i,l)}}return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${a}</div>
      <div class="alert-body">
        <div class="alert-title">${M(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${M(e.beschreibung)}</p>
        <div class="alert-actions">
          ${s?`<a href="${cr(s)}" class="btn-mail-medium"><img src="outlook-logo.png" alt="" class="outlook-logo-medium" />E-Mail</a>`:""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
        </div>
      </div>
    </div>`}function Lt(e){const[t,n]=e.split("-"),a=new Date(parseInt(t,10),parseInt(n,10)-1,1);return L(a,"MMMM yyyy",{locale:ne})}const mr={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};async function zt({params:e,root:t}){const[n,a,s,i]=await Promise.all([ue(),le(),Qe(),_e()]),l=pr(e);if(!n.length){t.innerHTML=`
      <h1 class="view-title">Kalender · ${M(l.label)}</h1>
      <p class="view-subtitle">Noch keine Daten geladen.</p>
      <a href="#/daten" class="btn primary">Zum Upload</a>`;return}const d=n.filter(l.predicate).sort((g,p)=>g.datum.localeCompare(p.datum)),c=s!=null&&s.stichtagAuswertung?new Date(s.stichtagAuswertung):new Date,o=bt(n,a,c,void 0,{isAzubi:i}).filter(g=>d.some(p=>p.datum===g.datum)),u=d.reduce((g,p)=>g+(p.ist??0),0),h=u>0?` · ${u.toFixed(2).replace(".",",")}h kumuliert`:"";t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/kalender" class="btn sm">← Kalender</a>
    </div>
    <h1 class="view-title">${M(l.titel)}</h1>
    <p class="view-subtitle">${d.length} Tag${d.length===1?"":"e"} insgesamt${h}</p>

    ${d.length===0?`
      <div class="card"><p class="hint">Keine Tage passen zu diesem Filter.</p></div>
    `:`
      <div class="card">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Tage</h2>
          <span style="color: var(--fg-muted); font-size: 13px;">H/M zum Kopieren</span>
        </div>
        <div id="tagestyp-tage-liste">${vt(d,{warnungen:o})}</div>
      </div>
    `}
  `,Rt(t.querySelector("#tagestyp-tage-liste"))}function pr(e){if(e.typ!=null){const t=decodeURIComponent(e.typ);return{label:t,titel:`${t}-Tage`,predicate:n=>n.tagestyp===t}}if(e.wd!=null){const t=decodeURIComponent(e.wd).toUpperCase(),n=mr[t]||t;return{label:n,titel:`Tage am ${n}`,predicate:a=>a.wochentag===t}}if(e.bucket!=null){const t=parseInt(decodeURIComponent(e.bucket),10),n=t+14;return{label:`${t}–${n} min Pause`,titel:`Tage mit Pause ${t}–${n} min`,predicate:a=>{if(a.tagestyp!=="Stempelzeit"||!a.zeitSpannen||a.zeitSpannen.length<2)return!1;const s=Math.round(Bt(a.zeitSpannen)*60);return s>=t&&s<=n}}}return{label:"Filter",titel:"Tage (kein Filter)",predicate:()=>!0}}Pn.workerSrc=Qn;function br(e){if(!e||e.byteLength<5)return!1;const t=new Uint8Array(e,0,5);return t[0]===37&&t[1]===80&&t[2]===68&&t[3]===70&&t[4]===45}async function la(e){var $,F,N,I,R,k;let t;try{t=await En({data:new Uint8Array(e.slice(0))}).promise}catch{return{ok:!1,fehler:"PDF konnte nicht gelesen werden — die Datei ist beschädigt oder verschlüsselt."}}if(t.numPages<1)return{ok:!1,fehler:"PDF hat keine Seiten."};const n=await t.getPage(1),s=(await n.getAnnotations()).filter(b=>b.subtype==="Widget");if(s.length<20)return{ok:!1,fehler:"Diese PDF ist kein ausfüllbares Formular — bitte die Original-Vorlage hochladen."};const d=(await n.getTextContent()).items.filter(b=>b.str&&b.transform).map(b=>({text:b.str,x:b.transform[4],y:b.transform[5],width:b.width,height:b.height})).filter(b=>Math.abs(b.y-636)<4);let c="";for(const b of d){const S=b.text.match(/(\d{6,8})/);if(S&&!b.text.toLowerCase().includes("kst")){c=S[1];break}}const r=vr(s),o=Ee(r.monatJahr),h=(Ee(r.persNr).match(/\d+/)||[""])[0],g=Ee(r.name).trim(),p=At(r.vonSlots),f=At(r.nachSlots),v=At(r.betragSlots),m=yr(v),w=Ee(r.auszubildender).trim(),x=w.replace(/^\s*\d{1,2}\.\d{1,2}\.\d{2,4}\s*/,"").trim(),D=[];return g||D.push("name"),h||D.push("persNr"),c||D.push("kst"),p||D.push("vonHaltestelle"),f||D.push("nachHaltestelle"),(!m||m<=0)&&D.push("betragProTag"),!g&&!h&&!p&&!f&&!m?{ok:!1,fehler:"Diese PDF ist eine komplett leere Vorlage — bitte zuerst eine eigene Vorlage einmal von Hand mit Name, Pers.-Nr., Strecke und Tagessatz ausfüllen und dann hochladen."}:{ok:!0,konstanten:{name:g,persNr:h,kst:c,vonHaltestelle:p,nachHaltestelle:f,betragProTag:m,unterschriftText:x},layout:{monatJahrField:(($=r.monatJahr)==null?void 0:$.fieldName)||null,persNrField:((F=r.persNr)==null?void 0:F.fieldName)||null,nameField:((N=r.name)==null?void 0:N.fieldName)||null,auszubildenderField:((I=r.auszubildender)==null?void 0:I.fieldName)||null,summeField:((R=r.summe)==null?void 0:R.fieldName)||null,datumFields:r.datumSlots.map(b=>b.fieldName),vonFields:r.vonSlots.map(b=>b.fieldName),nachFields:r.nachSlots.map(b=>b.fieldName),betragFields:r.betragSlots.map(b=>b.fieldName),auszubildenderRect:((k=r.auszubildender)==null?void 0:k.rect)||null},vorhandeneEintraege:{monatJahr:o,auszubildenderText:w,anzahlBefuellteDatumZeilen:r.datumSlots.filter(b=>Ee(b)).length},missing:D,quelle:"pdf"}}function vr(e){const t=e.map(g=>{const[p,f,v,m]=g.rect;return{fieldName:g.fieldName,fieldValue:g.fieldValue??"",rect:[p,f,v,m],x:(p+v)/2,y:(f+m)/2,width:v-p,height:m-f}}),n=t.find(g=>g.y>660&&g.x<250)||null,a=t.find(g=>g.y>660&&g.x>400)||null,s=t.find(g=>g.y>630&&g.y<660&&g.x<250)||null,i=t.filter(g=>g.y>370&&g.y<580),l=(g,p)=>p.y-g.y,d=i.filter(g=>g.x>0&&g.x<140).sort(l),c=i.filter(g=>g.x>140&&g.x<290).sort(l),r=i.filter(g=>g.x>290&&g.x<460).sort(l),o=i.filter(g=>g.x>460).sort(l),u=t.find(g=>g.y<370&&g.y>320&&g.x>460)||null,h=t.find(g=>g.y<340&&g.y>310&&g.x<200)||null;return{monatJahr:n,persNr:a,name:s,datumSlots:d,vonSlots:c,nachSlots:r,betragSlots:o,summe:u,auszubildender:h}}function Ee(e){return e?String(e.fieldValue??"").trim():""}function At(e){for(const t of e){const n=Ee(t);if(n)return n}return""}function yr(e){if(!e)return 0;const t=String(e).replace(/[^\d,.\-]/g,"").replace(/\./g,"").replace(",","."),n=parseFloat(t);return Number.isFinite(n)?n:0}const oa="Fahrgelderstattung",wr="C4",ca="C5",da="F4",ua="F5",$e=10,Pe=19;function yn(e,t){return e.filter(n=>n.monatKey===t).filter(n=>n.tagestyp==="Berufsschule").filter(n=>(n.ist??0)>0).sort((n,a)=>n.datum.localeCompare(a.datum))}async function kr(e){if(br(e)){const t=await la(e);return t.ok?{ok:!0,format:"pdf",konstanten:t.konstanten,layout:t.layout,missing:t.missing,vorhandeneEintraege:t.vorhandeneEintraege,unterschriftAuto:null}:t}return await xr(e)}async function xr(e){const t=(await de(async()=>{const{default:v}=await import("./exceljs.min-BhfpbegZ.js").then(m=>m.e);return{default:v}},__vite__mapDeps([0,1]),import.meta.url)).default,n=new t.Workbook;try{await n.xlsx.load(e)}catch{return{ok:!1,fehler:"Die Excel-Datei ist beschädigt oder kein gültiges .xlsx-Format. Bitte die Datei neu speichern und nochmal versuchen."}}const a=n.getWorksheet(oa)??n.worksheets[0];if(!a)return{ok:!1,fehler:"Excel hat keine Arbeitsblätter — die Datei scheint leer zu sein."};const s=v=>{const m=a.getCell(v).value;return m==null?"":typeof m=="object"&&m.text?String(m.text):typeof m=="object"&&m.richText?m.richText.map(w=>w.text).join(""):String(m)},i=s(ca).trim(),l=s(da).trim(),d=s(ua).trim(),c=(l.match(/\d+/)||[""])[0],r=(d.match(/\d+/)||[""])[0],o=s(`C${$e}`).trim(),u=s(`E${$e}`).trim(),h=a.getCell(`G${$e}`).value,g=typeof h=="number"?h:parseFloat(String(h).replace(",","."))||0;let p=null;try{const v=new Set(a.getImages().map(w=>parseInt(w.imageId,10))),m=(n.media||[]).map((w,x)=>({media:w,index:x})).filter(({media:w,index:x})=>(w==null?void 0:w.type)==="image"&&!v.has(x)&&w.buffer);if(m.length>0){m.sort(($,F)=>(F.media.buffer.length||0)-($.media.buffer.length||0));const w=m[0].media,x=w.buffer,D=x instanceof ArrayBuffer?x:x.buffer?x.buffer.slice(x.byteOffset||0,(x.byteOffset||0)+x.byteLength):null;if(D){const $=(w.extension||"").toLowerCase();p={bytes:D,extension:$==="jpg"?"jpeg":$||"png",quelle:"auto-aus-vorlage"}}}}catch(v){console.warn("[fahrtgeld] Unterschrift-Auto-Extraktion fehlgeschlagen:",v)}if(!i&&!c&&!r&&!o&&!u&&!g)return{ok:!1,fehler:"Diese Excel scheint nicht im Format der der Standard-Fahrgelderstattung zu sein — keine der erwarteten Felder wurde gefunden. Bitte eine Original-Vorlage hochladen."};const f=[];return i||f.push("name"),c||f.push("persNr"),r||f.push("kst"),o||f.push("vonHaltestelle"),u||f.push("nachHaltestelle"),(!g||g<=0)&&f.push("betragProTag"),{ok:!0,format:"excel",konstanten:{name:i,persNr:c,kst:r,vonHaltestelle:o,nachHaltestelle:u,betragProTag:g},missing:f,unterschriftAuto:p}}async function $r({templateBytes:e,monatKey:t,bsTage:n,konstanten:a,unterschriftBytes:s,unterschriftExtension:i}){const l=!e;e||(e=await Sr());const d=(await de(async()=>{const{default:k}=await import("./exceljs.min-BhfpbegZ.js").then(b=>b.e);return{default:k}},__vite__mapDeps([0,1]),import.meta.url)).default,c=new d.Workbook;try{await c.xlsx.load(e)}catch{throw new Error("Die hinterlegte Excel-Vorlage ist beschädigt — bitte unter Fahrgelderstattung neu hochladen.")}const r=c.getWorksheet(oa)??c.worksheets[0];if(!r)throw new Error("Die Excel-Vorlage hat kein passendes Arbeitsblatt — bitte eine Original-Fahrgelderstattung-Vorlage hochladen.");if(l||s&&i)try{Array.isArray(r._media)&&(r._media=r._media.filter(k=>{var S,T,K,V;return(((T=(S=k==null?void 0:k.range)==null?void 0:S.tl)==null?void 0:T.nativeRow)??((V=(K=k==null?void 0:k.range)==null?void 0:K.tl)==null?void 0:V.row)??0)<18}))}catch(k){console.warn("[fahrtgeld] Bild-Cleanup fehlgeschlagen:",k)}const[u,h]=t.split("-").map(k=>parseInt(k,10)),g=new Date(u,h-1,1,12,0,0),p=L(g,"MMMM yy",{locale:ne}),f=r.getCell(wr);f.value=p,f.numFmt="@",r.getCell(ca).value=a.name,r.getCell(da).value=`Pers.-Nr.: ${a.persNr}`,r.getCell(ua).value=`KST: ${a.kst}`;for(let k=$e;k<=Pe;k++)r.getCell(`A${k}`).value=null,r.getCell(`C${k}`).value=null,r.getCell(`E${k}`).value=null,r.getCell(`G${k}`).value=null;const v=Pe-$e+1,m=n.slice(0,v);for(let k=0;k<m.length;k++){const b=m[k],S=$e+k;r.getCell(`A${S}`).value=W(b.datum),r.getCell(`C${S}`).value=a.vonHaltestelle,r.getCell(`E${S}`).value=a.nachHaltestelle,r.getCell(`G${S}`).value=a.betragProTag}const w=+(m.length*(a.betragProTag??0)).toFixed(2),x=r.getCell(`G${Pe+1}`);x.value={formula:`SUM(G${$e}:G${Pe})`,result:w};const $=L(new Date,"dd.MM.yyyy"),F=r.getCell("A21");if(F.value=a.unterschriftText?`${$} ${a.unterschriftText}`:$,F.alignment={vertical:"bottom",horizontal:"center",wrapText:!1},s&&i){const k=c.addImage({buffer:s,extension:i}),b=197,S=80,T=55,K=185,V=Tr(s);let H=K,ae=T;if(V&&V.width>0&&V.height>0){const we=Math.min(K/V.width,T/V.height);H=Math.round(V.width*we),ae=Math.round(V.height*we)}const ye=Math.max(0,Math.round((b-H)/2))/S;r.addImage(k,{tl:{col:ye,row:20.04},ext:{width:H,height:ae},editAs:"oneCell"})}for(let k=Pe+3;k<=Pe+5;k++)for(const b of["A","B","C","D","E","F","G"]){const S=r.getCell(`${b}${k}`),T=S.value;typeof T=="string"&&/^[A-Z]\d+(-\d+)?$/.test(T.trim())&&(S.value=null)}const N=await c.xlsx.writeBuffer(),I=new Blob([N],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),R=ga(a.name,g);return{blob:I,dateiname:R,anzahlTage:m.length,ueberzaehlig:n.length-m.length}}function ga(e,t,n="xlsx"){const a=L(t,"MMMM",{locale:ne}),s=L(t,"yy");let i=(e||"Azubi").trim();const l=/^(.+?),\s*(.+)$/.exec(i);return l&&(i=`${l[2].trim()} ${l[1].trim()}`),`Fahrgelderstattung ${i} ${a} ${s}.${n}`}let Dt=null;async function Sr(){return Dt||(Dt=(async()=>{const t=await fetch("./templates/fahrgeld-vorlage.xlsx");if(!t.ok)throw new Error(`Standard-Excel-Vorlage nicht ladbar (HTTP ${t.status})`);return await t.arrayBuffer()})()),Dt}let Pt=null;async function Mr(){return Pt||(Pt=(async()=>{const t=await fetch("./templates/fahrgeld-vorlage.pdf");if(!t.ok)throw new Error(`Standard-PDF-Vorlage nicht ladbar (HTTP ${t.status})`);const n=await t.arrayBuffer(),s=(await la(n)).layout||await zr(n);return{bytes:n,layout:s}})()),Pt}async function zr(e){const i=(await(await(await(await de(()=>import("./pdfjs-BnPRJEQ6.js"),[],import.meta.url)).getDocument({data:new Uint8Array(e.slice(0))}).promise).getPage(1)).getAnnotations()).filter(m=>m.subtype==="Widget").map(m=>{const[w,x,D,$]=m.rect;return{fieldName:m.fieldName,rect:m.rect,x:(w+D)/2,y:(x+$)/2}}),l=(m,w)=>w.y-m.y,d=i.filter(m=>m.y>370&&m.y<580),c=i.find(m=>m.y>660&&m.x<250),r=i.find(m=>m.y>660&&m.x>400),o=i.find(m=>m.y>630&&m.y<660&&m.x<250),u=d.filter(m=>m.x<140).sort(l),h=d.filter(m=>m.x>140&&m.x<290).sort(l),g=d.filter(m=>m.x>290&&m.x<460).sort(l),p=d.filter(m=>m.x>460).sort(l),f=i.find(m=>m.y<370&&m.y>320&&m.x>460),v=i.find(m=>m.y<340&&m.y>310&&m.x<200);return{monatJahrField:(c==null?void 0:c.fieldName)||null,persNrField:(r==null?void 0:r.fieldName)||null,nameField:(o==null?void 0:o.fieldName)||null,auszubildenderField:(v==null?void 0:v.fieldName)||null,summeField:(f==null?void 0:f.fieldName)||null,datumFields:u.map(m=>m.fieldName),vonFields:h.map(m=>m.fieldName),nachFields:g.map(m=>m.fieldName),betragFields:p.map(m=>m.fieldName),auszubildenderRect:(v==null?void 0:v.rect)||null}}async function Ar({templateBytes:e,monatKey:t,bsTage:n,konstanten:a,layout:s,unterschriftBytes:i,unterschriftExtension:l}){if(!e||!s){const b=await Mr();e=e||b.bytes,s=s||b.layout}const{PDFDocument:d}=await de(async()=>{const{PDFDocument:b}=await import("./index-Bf057_RE.js");return{PDFDocument:b}},__vite__mapDeps([2,1]),import.meta.url);let c;try{c=await d.load(e,{ignoreEncryption:!0})}catch{throw new Error("Die hinterlegte PDF-Vorlage ist beschädigt — bitte unter Fahrgelderstattung neu hochladen.")}const r=c.getForm(),[o,u]=t.split("-").map(b=>parseInt(b,10)),h=new Date(o,u-1,1,12,0,0),g=L(h,"MMMM yy",{locale:ne});J(r,s.monatJahrField,g),a.name&&J(r,s.nameField,a.name),a.persNr&&J(r,s.persNrField,a.persNr);const p=s.datumFields||[],f=s.vonFields||[],v=s.nachFields||[],m=s.betragFields||[],w=Math.min(p.length,f.length,v.length,m.length);for(let b=0;b<w;b++)J(r,p[b],""),J(r,f[b],""),J(r,v[b],""),J(r,m[b],"");const x=n.slice(0,w),D=a.betragProTag!=null&&a.betragProTag>0?a.betragProTag.toFixed(2).replace(".",","):"";for(let b=0;b<x.length;b++){const S=x[b];J(r,p[b],Dr(S.datum)),a.vonHaltestelle&&J(r,f[b],a.vonHaltestelle),a.nachHaltestelle&&J(r,v[b],a.nachHaltestelle),D&&J(r,m[b],D)}const $=+(x.length*(a.betragProTag??0)).toFixed(2);J(r,s.summeField,$.toFixed(2).replace(".",","));const F=L(new Date,"dd.MM.yyyy"),N=a.unterschriftText?`${F} ${a.unterschriftText}`:F;J(r,s.auszubildenderField,N);try{const{PDFName:b}=await de(async()=>{const{PDFName:K}=await import("./index-Bf057_RE.js");return{PDFName:K}},__vite__mapDeps([2,1]),import.meta.url),T=c.getPage(0).node.Annots();if(T)for(let K=T.size()-1;K>=0;K--){const V=T.get(K),H=c.context.lookup(V);if(H&&typeof H.lookup=="function"){const ae=H.lookup(b.of("Subtype"));ae&&String(ae)==="/StrikeOut"&&T.remove(K)}}}catch(b){console.warn("[fahrtgeld] StrikeOut-Cleanup fehlgeschlagen:",b)}try{const{rgb:b}=await de(async()=>{const{rgb:T}=await import("./index-Bf057_RE.js");return{rgb:T}},__vite__mapDeps([2,1]),import.meta.url);c.getPage(0).drawRectangle({x:16,y:286,width:60,height:16,color:b(1,1,1),borderWidth:0})}catch(b){console.warn("[fahrtgeld] Form-Code-Overlay fehlgeschlagen:",b)}if(i&&s.auszubildenderRect)try{const S=(l||"png").toLowerCase()==="png"?await c.embedPng(i):await c.embedJpg(i),[T,K,V,H]=s.auszubildenderRect,ae=V-T,tt=H-K,ye=T,we=V,Ce=H+1,nt=Math.min(H+30,366),Be=we-ye,ze=Math.max(0,nt-Ce);if(ze>4&&S.width>0&&S.height>0){const Oe=Math.min(Be*.92/S.width,ze*.92/S.height),z=S.width*Oe,P=S.height*Oe,E=ye+(Be-z)/2,U=Ce+(ze-P)/2;c.getPage(0).drawImage(S,{x:E,y:U,width:z,height:P})}}catch(b){console.warn("[fahrtgeld] Unterschrift-Embed fehlgeschlagen:",b)}try{r.updateFieldAppearances()}catch(b){console.warn("[fahrtgeld] updateFieldAppearances fehlgeschlagen:",b)}const I=await c.save(),R=new Blob([I],{type:"application/pdf"}),k=ga(a.name,h,"pdf");return{blob:R,dateiname:k,anzahlTage:x.length,ueberzaehlig:n.length-x.length}}function J(e,t,n){if(t)try{e.getTextField(t).setText(n??"")}catch{}}function Dr(e){return L(W(e),"dd.MM.yyyy")}function rt(e){const[t,n]=e.split("-").map(a=>parseInt(a,10));return L(new Date(t,n-1,1),"MMMM yyyy",{locale:ne})}function wn(e,t=null,n={}){const s={monat_jahr:rt(e)},i=(t==null?void 0:t.betreff)??"Fahrgelderstattung {monat_jahr} {name}",l=(t==null?void 0:t.text)??`Guten Tag {personal_anrede},

hiermit sende ich Ihnen das ausgefüllte Dokument für die Fahrgelderstattung vom {monat_jahr} zu.
Vielen Dank!`;s.personal_anrede=n.fahrtgeldAnrede||n.personalAnrede||"{Anrede im Profil eintragen}",s.name=n.name||"";const d=kn(i,s).replace(/\s+/g," ").trim(),c=kn(l,s),r=new URLSearchParams;return n.fahrtgeldCc&&r.set("cc",n.fahrtgeldCc),r.set("subject",d),r.set("body",c),`mailto:${n.fahrtgeldEmpfaenger||""}?${r.toString().replace(/\+/g,"%20")}`}function kn(e,t){return e.replace(/\{(\w+)\}/g,(n,a)=>t[a]!=null?String(t[a]):`{${a}}`)}function Pr(e){const t=new Set;for(const n of e)n.tagestyp==="Berufsschule"&&(n.ist??0)>0&&t.add(n.monatKey);return[...t].sort().reverse()}function Er(e,t,n,a){var h,g;const s=t==null?void 0:t.berufsschulMuster;if(!s||!((h=s.wochentageWoechentlich)!=null&&h.length)&&!((g=s.wochentage14Taegig)!=null&&g.length))return{ausstehend:[],imMonatGesamt:n.length,vorhandenAnzahl:n.length};const[i,l]=e.split("-").map(p=>parseInt(p,10)),d=new Date(i,l-1,1),c=new Date(i,l,0),r=new Set(n.map(p=>p.datum)),o=[];let u=new Date(d);for(;u<=c;){if(!Ye(u)&&pt(u,s)){const p=L(u,"yyyy-MM-dd");u>a&&!r.has(p)&&o.push(p)}u=Je(u,1)}return{ausstehend:o,imMonatGesamt:n.length+o.length,vorhandenAnzahl:n.length}}function Tr(e){const t=e instanceof ArrayBuffer?e:e!=null&&e.buffer?e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength):null;if(!t||t.byteLength<24)return null;const n=new DataView(t);if(n.getUint32(0)===2303741511&&n.getUint32(4)===218765834)return{width:n.getUint32(16),height:n.getUint32(20)};if(n.getUint16(0)===65496){let a=2;for(;a+9<n.byteLength;){if(n.getUint8(a)!==255)return null;const s=n.getUint8(a+1);if(s>=192&&s<=207&&s!==196&&s!==200&&s!==204)return{height:n.getUint16(a+5),width:n.getUint16(a+7)};const l=n.getUint16(a+2);if(l<2)return null;a+=2+l}}return null}function Fr(e,t){if(!e||!t)return null;const n=a=>String(a).toLowerCase().replace(/[,.]/g," ").split(/\s+/).filter(Boolean).sort().join(" ");return n(e)===n(t)}function xn(e,t){const n={...e||{}},a={},s=(p,f)=>{f?a[p]="vorlage":n[p]?a[p]="zeitnachweis":a[p]="fehlt"},i=(t==null?void 0:t.name)||"",l=(t==null?void 0:t.personalnummer)||"",d=(t==null?void 0:t.kostenstelle)||"",c=n.name||"",o=Fr(c,i)===!1,u=!!n.name;!n.name&&i&&(n.name=i),s("name",u);const h=!!n.persNr;!n.persNr&&l&&!o&&(n.persNr=l),s("persNr",h);const g=!!n.kst;return!n.kst&&d&&!o&&(n.kst=d),s("kst",g),a.vonHaltestelle=n.vonHaltestelle?"vorlage":"fehlt",a.nachHaltestelle=n.nachHaltestelle?"vorlage":"fehlt",a.betragProTag=n.betragProTag&&n.betragProTag>0?"vorlage":"fehlt",{konstanten:n,herkunft:a,nameKonflikt:o,vorlagenName:c,zeitnachweisName:i}}function Lr(e,t){const n=URL.createObjectURL(e),a=document.createElement("a");a.href=n,a.download=t,document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(n),1e3)}async function Ue({root:e}){var ae,tt,ye,we,Ce,nt,Be,ze,Oe;const t=await qe();if(!t){_r(e);return}const[n,a,s,i]=await Promise.all([ue(),le(),Qe(),li("fahrgeld_abgabe")]),l=s!=null&&s.stichtagAuswertung?new Date(s.stichtagAuswertung):new Date,d=Pr(n),c=new Date,r=`${c.getFullYear()}-${String(c.getMonth()+1).padStart(2,"0")}`;d.includes(r)||d.unshift(r);const o=d,u=t.format||"excel",h=u==="pdf"?"PDF":"Excel",g={name:"Name",persNr:"Personalnummer",kst:"Kostenstelle",vonHaltestelle:'Strecke „von"',nachHaltestelle:'Strecke „nach"',betragProTag:"Tagessatz"},p=xn(t.konstanten,s),f=p.konstanten,v=p.herkunft,m=p.nameKonflikt,x=Object.entries(v).filter(([z,P])=>P==="fehlt").map(([z])=>z).map(z=>g[z]||z),D=Object.entries(v).filter(([z,P])=>P==="zeitnachweis").map(([z])=>g[z]||z),$=(z,P)=>z?v[P]==="zeitnachweis"?`<span class="fahrtgeld-aus-zeitnachweis" title="Aus deinem Zeitnachweis-PDF übernommen — die Vorlage hatte hier nichts stehen.">${M(z)} <small>(aus Zeitnachweis)</small></span>`:M(z):`<span class="fahrtgeld-fehlend" title="In der hochgeladenen Vorlage nicht gefunden — bitte vor Abgabe ergänzen.">${M(g[P]||P)} fehlt</span>`,F=(z,P)=>$(z,P),N=[];a.fahrtgeldEmpfaenger||N.push("E-Mail-Empfänger"),a.fahrtgeldAnrede||N.push("Anrede"),a.name||N.push("Dein Name"),e.innerHTML=`
    <h1 class="view-title">Fahrgelderstattung</h1>
    <p class="view-subtitle">Generiere die monatliche Fahrgelderstattung mit deinen erkannten Berufsschultagen.</p>

    ${N.length>0?`
      <div class="alert severity-warn" style="margin-bottom: 24px;">
        <div class="alert-icon">⚠</div>
        <div class="alert-body">
          <div class="alert-title">Profil-Felder fehlen für die Mail</div>
          <p style="margin: 4px 0 0; font-size: 13px;">
            ${N.join(", ")} — bitte im <a href="#/profil">Profil</a> eintragen, sonst kommt die Mail ohne Empfänger und Anrede raus.
            ${a.name?"":'<br>Dein Name landet zusätzlich im Mail-Betreff (z. B. „Fahrgelderstattung April 2026 Vorname Nachname").'}
          </p>
        </div>
      </div>
    `:""}

    <div class="card fahrtgeld-template-info" style="margin-bottom: 24px;">
      <div class="card-split">
        <div>
          <h3 style="margin: 0; display: flex; align-items: center; gap: 8px;">
            Vorlage geladen
            <span class="fahrtgeld-format-badge ${u==="pdf"?"is-pdf":"is-excel"}">${h}</span>
          </h3>
          <p class="hint" style="margin: 4px 0 0;">
            ${F(f.name,"name")} ·
            Pers.-Nr. ${F(f.persNr,"persNr")} ·
            KST ${F(f.kst,"kst")}
          </p>
          <p class="hint" style="margin: 4px 0 0;">
            ${F(f.vonHaltestelle,"vonHaltestelle")} → ${F(f.nachHaltestelle,"nachHaltestelle")} ·
            ${(f.betragProTag??0)>0?`${f.betragProTag.toFixed(2).replace(".",",")} € pro Tag`:'<span class="fahrtgeld-fehlend">Tagessatz fehlt</span>'}
          </p>
        </div>
        <div style="display: flex; gap: 8px;">
          <button class="btn sm" id="btn-template-replace">Vorlage ersetzen</button>
          <button class="btn sm" id="btn-template-clear">Vorlage löschen</button>
        </div>
      </div>
      ${m?`
        <div class="fahrtgeld-warning-box" style="margin-top: 12px;">
          <strong>⚠ Name-Konflikt — Personalnummer wird NICHT automatisch übernommen:</strong>
          <p class="hint" style="margin: 6px 0 0;">
            Die Vorlage ist auf <strong>${M(p.vorlagenName)}</strong> ausgestellt, dein Zeitnachweis aber auf <strong>${M(p.zeitnachweisName)}</strong>.
            Damit keine fremden Daten auf deine Fahrgelderstattung kommen, ergänzt die App weder Personalnummer noch Kostenstelle aus dem Zeitnachweis.
            Bitte trage diese Felder vor der Abgabe handschriftlich nach oder lade einen passenden Zeitnachweis hoch.
          </p>
        </div>
      `:""}
      ${D.length>0?`
        <div class="fahrtgeld-info-box" style="margin-top: 12px;">
          <strong>ℹ️ ${D.length} Feld${D.length===1?"":"er"} aus deinem Zeitnachweis ergänzt:</strong>
          ${D.map(z=>`<span class="fahrtgeld-info-chip">${M(z)}</span>`).join(" ")}
          <p class="hint" style="margin: 6px 0 0;">Diese Werte fehlten in deiner Vorlage — die App hat sie automatisch aus dem hochgeladenen Zeitnachweis-PDF übernommen (Name-Abgleich erfolgreich).</p>
        </div>
      `:""}
      ${x.length>0?`
        <div class="fahrtgeld-warning-box" style="margin-top: 12px;">
          <strong>⚠ ${x.length} Feld${x.length===1?"":"er"} fehlt${x.length===1?"":"en"} weiterhin:</strong>
          ${x.map(z=>`<span class="fahrtgeld-warning-chip">${M(z)}</span>`).join(" ")}
          <p class="hint" style="margin: 6px 0 0;">${u==="pdf"?"Diese Felder bleiben in der generierten PDF leer — du kannst sie im PDF-Reader oder handschriftlich ergänzen, bevor du sie abgibst.":"Diese Felder bleiben in der generierten Excel leer — bitte vor Abgabe ergänzen."}</p>
        </div>
      `:""}
    </div>

    <div class="card fahrtgeld-signature-info" style="margin-bottom: 24px;">
      <div class="card-split">
        <div>
          <h3 style="margin: 0;">Unterschrift</h3>
          ${(ae=t.unterschrift)!=null&&ae.dataUrl?`
            <p class="hint" style="margin: 4px 0 8px;">Wird in jede${u==="pdf"?" generierte PDF":" generierte Excel"} als Auszubildender-Unterschrift eingefügt. Datum (Tag der Generierung) wird automatisch gesetzt.</p>
            <div class="fahrtgeld-signature-preview">
              <img src="${M(t.unterschrift.dataUrl)}" alt="Unterschrift" />
            </div>
          `:`
            <p class="hint" style="margin: 4px 0 0;">Noch keine Unterschrift hinterlegt. Aktuell bleibt das Feld in der ${u==="pdf"?"PDF":"Excel"} leer (nur das Datum wird gesetzt).</p>
          `}
        </div>
        <div style="display: flex; gap: 8px; align-items: flex-start;">
          <button class="btn sm" id="btn-signature-upload">${(tt=t.unterschrift)!=null&&tt.dataUrl?"Ersetzen":"Hochladen"}</button>
          ${(ye=t.unterschrift)!=null&&ye.dataUrl?'<button class="btn sm" id="btn-signature-clear">Entfernen</button>':""}
        </div>
      </div>
    </div>

    ${o.length===0?`
      <div class="empty-state">
        <div class="empty-state-icon">📅</div>
        <h2>Keine Berufsschultage erkannt</h2>
        <p>Lade einen Zeitnachweis unter <a href="#/daten">Daten</a> hoch — danach erscheinen hier die Monate.</p>
      </div>
    `:(()=>{var U;const z=o.map((A,oe)=>{const q=yn(n,A),ee=+(q.length*(t.konstanten.betragProTag??0)).toFixed(2),Ae=q.length>10,ke=Er(A,a,q,l),Y=ke.ausstehend.length,j=+((q.length+Y)*(t.konstanten.betragProTag??0)).toFixed(2),yt=Y>0?ke.ausstehend.map(Ne=>C(W(Ne))).join(", "):"";return{mk:A,bs:q,summe:ee,ueberzaehlig:Ae,offen:Y,offenListe:yt,summeMitOffen:j,idx:oe}}),P=((U=z.find(A=>A.bs.length>0))==null?void 0:U.mk)??z[0].mk,E=z.find(A=>A.mk===P)??z[0];return`
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
                <a class="btn-mail-big" id="btn-fahrtgeld-mail" href="${M(wn(E.mk,i,a))}" target="_blank" rel="noopener" ${E.bs.length===0?'aria-disabled="true"':""}>
                  <img src="outlook-logo.png" alt="" class="outlook-logo-big" />
                  <span>E-Mail</span>
                </a>
              </div>
            </div>
            <div class="fahrtgeld-generate-info" id="fahrtgeld-generate-info">
              <div class="fahrtgeld-generate-monat">${M(rt(E.mk))}</div>
              <div class="hint" id="fahrtgeld-generate-detail">
                ${E.bs.length} BS-Tag${E.bs.length===1?"":"e"} erfasst · ${E.summe.toFixed(2).replace(".",",")} €
                ${E.offen>0?`<br><span class="fahrtgeld-pending">⏳ Laut Schul-Rhythmus kommen noch ${E.offen} BS-Tag${E.offen===1?"":"e"}: ${M(E.offenListe)} (mit allen: ${E.summeMitOffen.toFixed(2).replace(".",",")} €)</span>`:""}
                ${E.ueberzaehlig?`<br><span style="color: var(--warn); font-weight: 600;">· ${E.bs.length-10} überzählig (max 10/Monat)</span>`:""}
              </div>
              <div class="hint" style="margin-top: 6px; font-size: 12px;">⚠ Mail-Anhang muss manuell aus dem Download-Ordner gezogen werden — Browser können keine Anhänge automatisch hinzufügen.</div>
            </div>
          </div>

          <div class="card">
            <h2>Monat auswählen</h2>
            <p class="hint" style="margin-bottom: 16px;">Pro Monat zählen nur Berufsschul-Tage, an denen du nachweislich anwesend warst. Krank, Urlaub und Stempelzeit-Tage werden ausgefiltert.</p>
            <div class="fahrtgeld-monate">
              ${z.map(A=>{const oe=A.mk===P?"checked":"",q=`data-monat="${M(A.mk)}" data-offen="${A.offen}" data-offen-liste="${M(A.offenListe)}" data-anzahl="${A.bs.length}" data-summe="${A.summe.toFixed(2).replace(".",",")}" data-summe-mit-offen="${A.summeMitOffen.toFixed(2).replace(".",",")}" data-monat-label="${M(rt(A.mk))}" data-ueberzaehlig="${A.ueberzaehlig?"1":"0"}"`;return`
                  <label class="fahrtgeld-monat-row${A.offen>0?" has-pending":""}${A.bs.length===0?" empty":""}" ${q}>
                    <input type="radio" name="fg-monat-sel" value="${M(A.mk)}" ${oe} ${A.bs.length===0?"disabled":""} class="fahrtgeld-monat-radio" />
                    <div class="fahrtgeld-monat-titel">
                      <div class="fahrtgeld-monat-name">${M(rt(A.mk))}</div>
                      <div class="hint">
                        ${A.bs.length} BS-Tag${A.bs.length===1?"":"e"} erfasst · ${A.summe.toFixed(2).replace(".",",")} €
                        ${A.offen>0?`<br><span class="fahrtgeld-pending">⏳ noch ${A.offen} BS-Tag${A.offen===1?"":"e"} laut Rhythmus</span>`:""}
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
  `,(we=e.querySelector("#btn-template-replace"))==null||we.addEventListener("click",()=>{e.querySelector("#fahrtgeld-replace-input").click()}),(Ce=e.querySelector("#fahrtgeld-replace-input"))==null||Ce.addEventListener("change",async z=>{var E;const P=(E=z.target.files)==null?void 0:E[0];P&&await _t(P,e)}),(nt=e.querySelector("#btn-template-clear"))==null||nt.addEventListener("click",async()=>{await re("Beim nächsten Öffnen wirst du gebeten, eine neue Vorlage hochzuladen.",{title:"Vorlage löschen?",confirmLabel:"Löschen",variant:"danger"})&&(await ai(),O("Vorlage gelöscht."),Ue({root:e}))}),(Be=e.querySelector("#btn-signature-upload"))==null||Be.addEventListener("click",()=>{e.querySelector("#fahrtgeld-signature-input").click()}),(ze=e.querySelector("#fahrtgeld-signature-input"))==null||ze.addEventListener("change",async z=>{var E;const P=(E=z.target.files)==null?void 0:E[0];P&&await Cr(P,e)}),(Oe=e.querySelector("#btn-signature-clear"))==null||Oe.addEventListener("click",async()=>{if(!await re("Die hochgeladene Unterschrift wird entfernt — generierte Excel haben dann keine Unterschrift mehr.",{title:"Unterschrift entfernen?",confirmLabel:"Entfernen",variant:"danger"}))return;const z=await qe();z&&(await Kt({...z,unterschrift:null}),O("Unterschrift entfernt."),Ue({root:e}))});const I=e.querySelector("#btn-fahrtgeld-generate-excel"),R=e.querySelector("#btn-fahrtgeld-generate-pdf"),k=[I,R].filter(Boolean),b=e.querySelector("#btn-fahrtgeld-mail"),S=e.querySelector(".fahrtgeld-generate-monat"),T=e.querySelector("#fahrtgeld-generate-detail"),K=e.querySelectorAll(".fahrtgeld-monat-radio");function V(){const z=e.querySelector(".fahrtgeld-monat-radio:checked");if(!z)return;const P=z.closest(".fahrtgeld-monat-row");if(!P)return;const E=z.value,U=parseInt(P.getAttribute("data-anzahl")||"0",10),A=P.getAttribute("data-summe")||"0,00",oe=parseInt(P.getAttribute("data-offen")||"0",10),q=P.getAttribute("data-offen-liste")||"",ee=P.getAttribute("data-summe-mit-offen")||A,Ae=P.getAttribute("data-monat-label")||"",ke=P.getAttribute("data-ueberzaehlig")==="1";if(S&&(S.textContent=Ae),T){const Y=[`${U} BS-Tag${U===1?"":"e"} erfasst · ${A} €`];oe>0&&Y.push(`<br><span class="fahrtgeld-pending">⏳ Laut Schul-Rhythmus kommen noch ${oe} BS-Tag${oe===1?"":"e"}: ${M(q)} (mit allen: ${ee} €)</span>`),ke&&Y.push(`<br><span style="color: var(--warn); font-weight: 600;">· ${U-10} überzählig (max 10/Monat)</span>`),T.innerHTML=Y.join("")}k.forEach(Y=>{Y.disabled=U===0}),b&&(b.href=wn(E,i,a),a!=null&&a.fahrtgeldEmpfaenger||(b.title="Hinweis: Trage im Profil eine Empfänger-E-Mail ein, damit der Button vorausgefüllt ist."),U===0?b.setAttribute("aria-disabled","true"):b.removeAttribute("aria-disabled"))}K.forEach(z=>z.addEventListener("change",V));async function H(z){var ke,Y;const P=e.querySelector(".fahrtgeld-monat-radio:checked");if(!P){X("Bitte einen Monat auswählen.",{type:"warn"});return}const E=P.closest(".fahrtgeld-monat-row"),U=P.value,A=parseInt((E==null?void 0:E.getAttribute("data-offen"))||"0",10),oe=(E==null?void 0:E.getAttribute("data-offen-liste"))||"";if(A>0&&!await re(`Laut deinem Schul-Rhythmus kommen in diesem Monat noch ${A} BS-Tag${A===1?"":"e"}:

${oe}

Diese Tage sind noch nicht im Zeitnachweis-PDF und werden in der ${z==="pdf"?"PDF":"Excel"} fehlen. Trotzdem jetzt für die bisher erfassten Tage generieren?`,{title:"Noch ausstehende BS-Tage",confirmLabel:"Trotzdem generieren"}))return;const q=z==="pdf"?R:I;q&&(q.disabled=!0);const ee=q==null?void 0:q.querySelector(".btn-generate-label"),Ae=ee==null?void 0:ee.textContent;ee&&(ee.textContent="Erstelle …");try{const j=await qe(),yt=await ue(),Ne=yn(yt,U);if(!Ne.length){X("Für diesen Monat sind keine BS-Anwesenheits-Tage erkannt.",{type:"warn"});return}const Gt=(ke=j.unterschrift)==null?void 0:ke.bytes,Ut=(Y=j.unterschrift)==null?void 0:Y.extension,Jt=j.format||"excel",wt=Jt===z,Yt=wt?j.bytes:null,ma=wt&&z==="pdf"?j.layout:null,Xt=xn(j.konstanten,s).konstanten,{blob:pa,dateiname:Qt,ueberzaehlig:kt}=z==="pdf"?await Ar({templateBytes:Yt,layout:ma,monatKey:U,bsTage:Ne,konstanten:Xt,unterschriftBytes:Gt,unterschriftExtension:Ut}):await $r({templateBytes:Yt,monatKey:U,bsTage:Ne,konstanten:Xt,unterschriftBytes:Gt,unterschriftExtension:Ut});Lr(pa,Qt);const en=z==="pdf"?"PDF":"Excel",ba=Array.isArray(j.missing)&&j.missing.length>0?` — bitte ${j.missing.length} fehlendes Feld${j.missing.length===1?"":"er"} vor Abgabe ergänzen`:"",va=wt?"":` (aus deiner ${Jt==="pdf"?"PDF-":"Excel-"}Vorlage in ${en} überführt)`;O(`${en} erstellt: ${Qt}${kt>0?` (${kt} weiterer Tag${kt===1?"":"e"} passte/n nicht in die Vorlage)`:""}${va}${ba}`)}catch(j){console.error("Fahrtgeld-Generierung fehlgeschlagen:",j),X(`Fehler: ${j.message||j}`,{type:"error",duration:8e3})}finally{q&&(q.disabled=!1),ee&&Ae&&(ee.textContent=Ae)}}I==null||I.addEventListener("click",()=>H("excel")),R==null||R.addEventListener("click",()=>H("pdf"))}function _r(e){e.innerHTML=`
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
  `;const t=e.querySelector("#fahrtgeld-dropzone"),n=e.querySelector("#fahrtgeld-upload-input");t==null||t.addEventListener("click",()=>n.click()),t==null||t.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),n.click())}),n==null||n.addEventListener("change",async a=>{var i;const s=(i=a.target.files)==null?void 0:i[0];s&&await _t(s,e)}),["dragenter","dragover"].forEach(a=>{t==null||t.addEventListener(a,s=>{s.preventDefault(),s.stopPropagation(),t.classList.add("is-dragover")})}),["dragleave","drop"].forEach(a=>{t==null||t.addEventListener(a,s=>{s.preventDefault(),s.stopPropagation(),t.classList.remove("is-dragover")})}),t==null||t.addEventListener("drop",async a=>{var i,l;const s=(l=(i=a.dataTransfer)==null?void 0:i.files)==null?void 0:l[0];s&&await _t(s,e)})}async function Cr(e,t){try{if(!["image/png","image/jpeg"].includes(e.type)&&!/\.(png|jpe?g)$/i.test(e.name)){X("Bitte ein PNG oder JPG hochladen.",{type:"warn"});return}if(e.size>2*1024*1024){X(`Die Bilddatei ist zu groß (${(e.size/1024/1024).toFixed(1)} MB). Maximal 2 MB — bitte komprimiert oder kleiner hochladen.`,{type:"warn",duration:8e3});return}const a=await e.arrayBuffer(),s=/\.png$/i.test(e.name)||e.type==="image/png"?"png":"jpeg",i=await new Promise((d,c)=>{const r=new FileReader;r.onload=()=>d(r.result),r.onerror=c,r.readAsDataURL(e)}),l=await qe();if(!l){X("Bitte zuerst eine Excel-Vorlage hochladen.",{type:"warn"});return}await Kt({...l,unterschrift:{bytes:a,extension:s,dataUrl:i,hochgeladenAm:new Date().toISOString()}}),O("Unterschrift gespeichert."),Ue({root:t})}catch(n){console.error("Unterschrift-Upload fehlgeschlagen:",n),X(`Fehler beim Verarbeiten: ${n.message||n}`,{type:"error",duration:8e3})}}async function _t(e,t){try{const n=await e.arrayBuffer(),a=await kr(n);if(!a.ok){X(`Vorlage nicht erkannt: ${a.fehler}`,{type:"error",duration:8e3});return}const s=await qe();let i=s==null?void 0:s.unterschrift;if(!i&&a.unterschriftAuto){const c=Br(a.unterschriftAuto.bytes,a.unterschriftAuto.extension);i={bytes:a.unterschriftAuto.bytes,extension:a.unterschriftAuto.extension,dataUrl:c,quelle:"auto-aus-vorlage",hochgeladenAm:new Date().toISOString()}}await Kt({bytes:n,konstanten:a.konstanten,format:a.format||"excel",layout:a.layout||null,missing:a.missing||[],vorhandeneEintraege:a.vorhandeneEintraege||null,unterschrift:i,hochgeladenAm:new Date().toISOString(),dateiname:e.name});const l=a.format==="pdf"?"PDF-Vorlage":"Excel-Vorlage",d=a.missing&&a.missing.length>0?` · ${a.missing.length} Feld${a.missing.length===1?"":"er"} fehlte${a.missing.length===1?"":"n"}`:"";a.unterschriftAuto&&!(s!=null&&s.unterschrift)?O(`${l} gespeichert: ${a.konstanten.name||e.name} (Unterschrift aus Vorlage übernommen)${d}`):O(`${l} gespeichert: ${a.konstanten.name||e.name}${d}`),document.dispatchEvent(new CustomEvent("better-ess:fahrgeld-template-uploaded")),Ue({root:t})}catch(n){console.error("Vorlage-Upload fehlgeschlagen:",n),X(`Fehler beim Verarbeiten: ${n.message||n}`,{type:"error",duration:8e3})}}function Br(e,t){const n=new Uint8Array(e);let a="";for(let l=0;l<n.length;l++)a+=String.fromCharCode(n[l]);const s=btoa(a);return`data:${t==="png"?"image/png":"image/jpeg"};base64,${s}`}async function Or({root:e}){const t=await ue();if(!t.length){e.innerHTML='<h1 class="view-title">Berichtsheft</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const n=[...new Set(t.map(i=>i.monatKey))].sort().reverse();e.innerHTML=`
    <h1 class="view-title">Berichtsheft-Export</h1>
    <p class="view-subtitle">Kopiere die Arbeitsstunden im HH:MM-Format direkt in dein Berichtsheft.</p>

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 16px; align-items: center;">
        <h2 style="margin: 0;">Filter</h2>
        <div style="display: flex; gap: 8px; align-items: center;">
          <label style="color: var(--fg-muted); font-size: 13px;">Monat:</label>
          <select id="filter-monat">
            <option value="">Alle</option>
            ${n.map(i=>`<option value="${i}">${Vr(i)}</option>`).join("")}
          </select>
          <button class="btn sm" id="btn-copy-all">Alle sichtbaren kopieren</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div id="liste"></div>
    </div>
  `;const a=e.querySelector("#filter-monat");a.addEventListener("change",()=>s()),e.querySelector("#btn-copy-all").addEventListener("click",()=>{const i=e.querySelectorAll("#liste tr[data-copy]"),l=Array.from(i).map(d=>d.getAttribute("data-copy")).join(`
`);navigator.clipboard.writeText(l).then(()=>O(`${i.length} Zeilen kopiert.`))});function s(){const i=a.value,d=(i?t.filter(c=>c.monatKey===i):t).filter(c=>c.ist!=null&&c.ist>0&&c.tagestyp!=="Wochenende");e.querySelector("#liste").innerHTML=Nr(d),e.querySelectorAll(".copy-val").forEach(c=>{c.addEventListener("click",async()=>{const r=c.getAttribute("data-val");await navigator.clipboard.writeText(r),c.classList.add("ok");const o=c.textContent;c.textContent="✓ kopiert",setTimeout(()=>{c.classList.remove("ok"),c.textContent=o},1200)})})}s()}function Nr(e){return e.length?`
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
        ${e.map(t=>{const n=je(t.ist),a=`${C(W(t.datum))}	${n}`;return`
            <tr data-copy="${$n(a)}">
              <td class="tabular">${C(W(t.datum))}</td>
              <td>${Wr(t.wochentag)}</td>
              <td>${t.tagestyp?`<span class="pill ${Kr(t.tagestyp)}">${ha(t.tagestyp)}</span>`:"—"}</td>
              <td class="num tabular">${t.ist.toFixed(2).replace(".",",")}</td>
              <td class="num tabular" style="font-weight: 600;">${n}</td>
              <td><button class="copy-val" data-val="${$n(n)}">📋 ${n}</button></td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `:'<p style="color: var(--fg-muted);">Keine Tage in dieser Auswahl.</p>'}function Wr(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function Vr(e){const[t,n]=e.split("-");return L(new Date(parseInt(t),parseInt(n)-1,1),"LLLL yyyy",{locale:ne})}function Kr(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function ha(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function $n(e){return ha(e)}async function Ir({root:e}){const[t,n,a,s,i]=await Promise.all([ue(),le(),ft(),mt(),_e()]),l=Object.fromEntries(s.map(o=>[o.key,o])),d=bt(t,n,new Date,void 0,{isAzubi:i}).filter(o=>o.mailVorlageKey),c=Jn(a),r=[];n.zeitwirtschaftEmail||r.push("E-Mail-Empfänger"),n.zeitwirtschaftAnrede||r.push("Anrede"),e.innerHTML=`
    <h1 class="view-title">Mail-Vorlagen</h1>
    <p class="view-subtitle">Vorformulierte Mails an die Zeitwirtschaft bei erkannten Fehlern im Zeitnachweis.</p>

    ${r.length>0?`
      <div class="alert severity-warn" style="margin-bottom: 24px;">
        <div class="alert-icon">⚠</div>
        <div class="alert-body">
          <div class="alert-title">Profil unvollständig</div>
          <p style="margin: 4px 0 0; font-size: 13px;">
            ${r.join(" und ")} fehl${r.length===1?"t":"en"} im <a href="#/profil">Profil</a> — sonst öffnet der Mail-Button eine leere Mail ohne Empfänger und mit „{Anrede im Profil eintragen}" im Text.
          </p>
        </div>
      </div>
    `:""}

    <div class="card" style="margin-bottom: 24px;">
      <h2>Offene Warnungen mit Mail-Vorschlag</h2>
      <p class="hint" style="margin-bottom: 16px;">Diese Warnungen haben einen roten Schweregrad und sind eine direkte Mail wert.</p>

      ${d.length===0?'<div class="empty-state"><div class="empty-state-icon">✓</div><p>Keine akuten Warnungen — top.</p></div>':d.map(o=>Hr(o,n,l)).join("")}

      ${c.length>0?`
        <h3 style="margin-top: 24px;">Saldo-Plausibilität</h3>
        ${c.map(o=>`
          <div class="alert severity-warn">
            <div class="alert-icon">⚠</div>
            <div class="alert-body">
              <div class="alert-title">${te(o.titel)}</div>
              <p style="margin: 4px 0; font-size: 13px;">${te(o.beschreibung)}</p>
            </div>
          </div>
        `).join("")}
      `:""}
    </div>

    <div class="card">
      <h2>Vorlagen verwalten</h2>
      <p class="hint" style="margin-bottom: 16px;">Passe die Texte an deinen Stil an. Platzhalter wie <code>{name}</code>, <code>{datum}</code>, <code>{wochentag}</code>, <code>{ist}</code>, <code>{soll}</code> werden automatisch gefüllt.</p>

      <div id="vorlagen-editor">
        ${Object.keys(Ge).map(o=>{const u=et(o,l[o]);return Rr(u)}).join("")}
      </div>
    </div>
  `,qr(e),jr(e)}function Hr(e,t,n){const a=et(e.mailVorlageKey,n[e.mailVorlageKey]);if(!a)return"";const s=It(t,e),i=Yn(a,s),l=Ht(t,a,s);return`
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
        <a class="btn-mail-big" href="${l}" target="_blank" rel="noopener"><img src="outlook-logo.png" alt="" class="outlook-logo-big" /><span>Mail Vorschlag in Outlook</span></a>
        <button class="btn sm btn-copy-mail" data-subject="${Ct(i.betreff)}" data-body="${Ct(i.text)}">📋 Betreff + Text kopieren</button>
      </div>
    </div>
  `}function Rr(e){return`
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
        <input type="text" class="v-betreff" value="${Ct(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 240px;">${te(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function qr(e){e.querySelectorAll(".btn-save-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const n=t.getAttribute("data-key"),a=t.closest(".vorlagen-item"),s=a.querySelector(".v-betreff").value,i=a.querySelector(".v-text").value;await ut(n,{betreff:s,text:i}),O("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const n=t.getAttribute("data-key"),a=Ge[n];a&&await re(`Deine Anpassungen an "${a.titel}" gehen verloren.`,{title:"Vorlage zurücksetzen?",confirmLabel:"Zurücksetzen",variant:"danger"})&&(await ut(n,{betreff:a.betreff,text:a.text}),O("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function jr(e){e.querySelectorAll(".btn-copy-mail").forEach(t=>{t.addEventListener("click",async()=>{const n=t.getAttribute("data-subject"),a=t.getAttribute("data-body"),s=`Betreff: ${n}

${a}`;await navigator.clipboard.writeText(s),O("Mail-Text kopiert.")})})}function te(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ct(e){return te(e)}async function Zr({root:e}){const[t,n]=await Promise.all([le(),mt()]),a=Object.fromEntries(n.map(s=>[s.key,s]));e.innerHTML=`
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
          ${Object.keys(Ge).map(s=>{const i=et(s,a[s]);return Gr(i)}).join("")}
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
  `,e.querySelector("#pause-sel").addEventListener("change",async s=>{const i={...t,pausenRegel:s.target.value};await ct(i),O("Pausen-Regel gespeichert.")}),e.querySelectorAll(".btn-save-vorlage").forEach(s=>{s.addEventListener("click",async()=>{const i=s.getAttribute("data-key"),l=s.closest(".vorlagen-item"),d=l.querySelector(".v-betreff").value,c=l.querySelector(".v-text").value;await ut(i,{betreff:d,text:c}),O("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(s=>{s.addEventListener("click",async()=>{const i=s.getAttribute("data-key"),l=Ge[i];l&&await re(`Deine Anpassungen an "${l.titel}" gehen verloren.`,{title:"Vorlage zurücksetzen?",confirmLabel:"Zurücksetzen",variant:"danger"})&&(await ut(i,{betreff:l.betreff,text:l.text}),O("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function Gr(e){return`
    <div class="vorlagen-item" data-key="${e.key}" style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
      <div class="card-split" style="margin-bottom: 12px;">
        <div>
          <h3 style="text-transform: none; letter-spacing: 0; color: var(--fg); font-size: 16px;">${lt(e.titel)}</h3>
          <p class="hint" style="margin: 4px 0;">${lt(e.beschreibung)}</p>
        </div>
        <button class="btn sm btn-reset-vorlage" data-key="${e.key}">Auf Default zurücksetzen</button>
      </div>
      <div class="form-group">
        <label>Betreff</label>
        <input type="text" class="v-betreff" value="${Ur(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 200px;">${lt(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function lt(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ur(e){return lt(e)}async function fa(){const e=await _e();document.body.classList.toggle("mode-azubi",e),document.body.classList.toggle("mode-nichtazubi",!e)}window.__applyAzubiVisibility=fa;async function Sn(){document.documentElement.setAttribute("data-css-ready",""),Ka();const e=document.getElementById("content");await Xs()&&setTimeout(()=>{X('Parser wurde aktualisiert. Bitte lade deinen Zeitnachweis unter "Daten" neu hoch.',{type:"info",duration:12e3})},500),await Ys(),await Us(),await Js(),await fa(),G("/",cn),G("/dashboard",cn),G("/analytics",or),G("/kalender",Mt),G("/kalender/typ/:typ",zt),G("/kalender/wochentag/:wd",zt),G("/kalender/pause/:bucket",zt),G("/kalender/:yyyymm",Mt),G("/kalender/:yyyymm/:yyyykw",Mt),G("/tag/:datum",sr),G("/berichtsheft",Or),G("/mails",Ir),G("/fahrtgeld",Ue),G("/profil",nr),G("/daten",Ui),G("/einstellungen",Zr),Hs(e),location.hash||Is("/");try{const t=await y.tage.count();Hi(t>0)&&setTimeout(()=>na(),700)}catch(t){console.warn("[boot] Tour-Auto-Start-Check fehlgeschlagen:",t)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Sn):Sn();
