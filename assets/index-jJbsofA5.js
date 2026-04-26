const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/exceljs.min-BhfpbegZ.js","assets/dexie-UpTFNL8S.js"])))=>i.map(i=>d[i]);
import{C as j,L as vn,B as yn,D as wn,S as kn,a as xn,b as $n,P as Sn,A as Mn,c as zn,d as Dn,T as An,p as Pn,e as En,i as Tn}from"./chartjs-CRgZvhTJ.js";import{b as Ge,a as me,c as pe,d as Fn,f as E,e as it,i as rt,s as Ln,g as Cn,p as Bn,h as _n,j as Wn,k as L,l as Vn,m as Kn}from"./datefns-BmW7q-T6.js";import{D as On}from"./dexie-UpTFNL8S.js";import{_ as In,a as Hn}from"./pdfjs-BDGsuRSB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Rn(){document.documentElement.setAttribute("data-theme","dark")}const yt={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},Nn=(e,t,n)=>{let a;const s=n!=null&&n.addSuffix?yt[e].withPreposition:yt[e].standalone;return typeof s=="string"?a=s:t===1?a=s.one:a=s.other.replace("{{count}}",String(t)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:"vor "+a:a},jn={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},qn={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Zn={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Un={date:Ge({formats:jn,defaultWidth:"full"}),time:Ge({formats:qn,defaultWidth:"full"}),dateTime:Ge({formats:Zn,defaultWidth:"full"})},Gn={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},Jn=(e,t,n,a)=>Gn[e],Xn={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},Yn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},Qe={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},Qn={narrow:Qe.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:Qe.wide},ea={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},ta={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},na={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},aa=e=>Number(e)+".",sa={ordinalNumber:aa,era:me({values:Xn,defaultWidth:"wide"}),quarter:me({values:Yn,defaultWidth:"wide",argumentCallback:e=>e-1}),month:me({values:Qe,formattingValues:Qn,defaultWidth:"wide"}),day:me({values:ea,defaultWidth:"wide"}),dayPeriod:me({values:ta,defaultWidth:"wide",formattingValues:na,defaultFormattingWidth:"wide"})},ia=/^(\d+)(\.)?/i,ra=/\d+/i,la={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},oa={any:[/^v/i,/^n/i]},ca={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},da={any:[/1/i,/2/i,/3/i,/4/i]},ua={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},ga={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ha={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},fa={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},ma={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},pa={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},ba={ordinalNumber:Fn({matchPattern:ia,parsePattern:ra,valueCallback:e=>parseInt(e)}),era:pe({matchPatterns:la,defaultMatchWidth:"wide",parsePatterns:oa,defaultParseWidth:"any"}),quarter:pe({matchPatterns:ca,defaultMatchWidth:"wide",parsePatterns:da,defaultParseWidth:"any",valueCallback:e=>e+1}),month:pe({matchPatterns:ua,defaultMatchWidth:"wide",parsePatterns:ga,defaultParseWidth:"any"}),day:pe({matchPatterns:ha,defaultMatchWidth:"wide",parsePatterns:fa,defaultParseWidth:"any"}),dayPeriod:pe({matchPatterns:ma,defaultMatchWidth:"wide",parsePatterns:pa,defaultParseWidth:"any"})},G={code:"de",formatDistance:Nn,formatLong:Un,formatRelative:Jn,localize:sa,match:ba,options:{weekStartsOn:1,firstWeekContainsDate:4}};function It(e){if(e==null)return null;if(typeof e=="number")return e;let t=String(e).trim();if(!t)return null;let n=!1;t.endsWith("-")&&(n=!0,t=t.slice(0,-1).trim()),t=t.replace(",",".");const a=parseFloat(t);return isNaN(a)?null:n?-a:a}function Ce(e){if(e==null||isNaN(e))return"—";const t=e<0,n=Math.abs(e),a=Math.floor(n),s=Math.round((n-a)*60);let i=a,l=s;return l===60&&(i+=1,l=0),`${t?"-":""}${i}:${String(l).padStart(2,"0")}`}function se(e,t={}){if(e==null||isNaN(e))return"—";const{signed:n=!1,suffix:a="h"}=t,s=n&&e>0?"+":"",i=e.toFixed(2).replace(".",",");return`${s}${i}${a}`}function Z(e){if(!e)return null;const t=/^(\d{1,2}):(\d{2})$/.exec(String(e).trim());return t?parseInt(t[1],10)*60+parseInt(t[2],10):null}function Ht(e){if(!(e!=null&&e.length))return null;const t=e.filter(s=>s.von&&s.bis);if(!t.length)return null;let n=t[0].von,a=t[0].bis;for(const s of t)Z(s.von)<Z(n)&&(n=s.von),Z(s.bis)>Z(a)&&(a=s.bis);return{kommen:n,gehen:a}}const Rt="2026-04-01";function va(e){return e?"arbzg":"jarbschg"}function ya(e,t){return e==null?0:t==="jarbschg"?e>6?1:e>4.5?.5:0:e>9?.75:e>6?.5:0}function lt(e){if(!e||e.length<2)return 0;const t=e.filter(a=>a.von&&a.bis).map(a=>({von:Z(a.von),bis:Z(a.bis)})).filter(a=>a.von!=null&&a.bis!=null).sort((a,s)=>a.von-s.von);let n=0;for(let a=1;a<t.length;a++){const s=t[a].von-t[a-1].bis;(s>0&&s>=15||s>0)&&(n+=s)}return n/60}function Nt(e,t){const n=e.zeitSpannen??[];if(!n.length||n.every(m=>!m.von))return{keinAnspruch:!0};const a=lt(n),s=e.pause??0,i=wa(n),l=i-s,c=t.pausenRegel&&t.pausenRegel!=="auto"?t.pausenRegel==="jarbschg"?"jarbschg":"arbzg":va(!!t.ueber18),r=ya(l,c);if(e.datum&&e.datum<Rt)return{arbeitszeitMitPause:i,arbeitszeitOhnePause:l,gestempeltePause:a,abgezogenePause:s,gesetzlichePflicht:r,gesetz:c,legalerAbzug:s,unrechtmaessigerVerlustMin:0,aufstockungMin:0,typ:"alt_reglement",warnung:null,altReglement:!0};const d=Math.max(a,r),o=s-d,u=Math.max(0,r-a);let h="ok",g=null;if(o>.05)h="fehler_zeitwirtschaft",g=`${Math.round(o*60)} min Pause wurden zusätzlich zur gesetzlichen Pflicht und zur gestempelten Pause abgezogen. Das sieht nach einem Zeitwirtschafts-Fehler aus.`;else if(u>.05&&s>a+.02){h="aufstockung_legal";const m=Math.round(u*60);g=`Du hast ${Math.round(a*60)} min Pause gestempelt, aber bei ${l.toFixed(2).replace(".",",")}h Arbeitszeit schreibt das Gesetz (${c.toUpperCase()}) ${Math.round(r*60)} min vor. Die fehlenden ${m} min wurden automatisch als Pause gewertet. Das ist gesetzeskonform — nächstes Mal einfach länger Pause machen.`}return{arbeitszeitMitPause:i,arbeitszeitOhnePause:l,gestempeltePause:a,abgezogenePause:s,gesetzlichePflicht:r,gesetz:c,legalerAbzug:d,unrechtmaessigerVerlustMin:Math.round(Math.max(0,o)*60),aufstockungMin:Math.round(Math.max(0,u)*60),typ:h,warnung:g,altReglement:!1}}function wa(e){let t=0;for(const n of e){if(!n.von||!n.bis)continue;const a=Z(n.von),s=Z(n.bis);a!=null&&s!=null&&s>a&&(t+=s-a)}return t/60}function jt(e,t){var r,d,o;const n=[...e].sort((u,h)=>u.datum.localeCompare(h.datum));if(!n.length)return[];const a=new Map(t.map(u=>[u.monatKey,u])),s={};for(const u of n)s[r=u.monatKey]??(s[r]=[]),s[u.monatKey].push(u);const i=Object.keys(s).sort(),l=[];let c=null;for(const u of i){const h=a.get(u);let g;((d=h==null?void 0:h.glz)==null?void 0:d.saldoVorperiode)!=null?g=h.glz.saldoVorperiode:c!=null?g=c:g=0;const m=s[u];for(const f of m)f.diff!=null&&(g+=f.diff),l.push({datum:f.datum,wochentag:f.wochentag,saldo:Math.round(g*100)/100,diff:f.diff,ist:f.ist,soll:f.soll,tagestyp:f.tagestyp,monatKey:f.monatKey,wocheKey:f.wocheKey,zeitSpannen:f.zeitSpannen});if(((o=h==null?void 0:h.glz)==null?void 0:o.saldoGesamt)!=null){const f=h.glz.saldoGesamt-g;if(Math.abs(f)>.02&&l.length>0){const p=l.length-1;l[p].umbuchung=f,l[p].saldo=Math.round((l[p].saldo+f)*100)/100,g=l[p].saldo}c=h.glz.saldoGesamt}else c=g}return l}function ka(e,t){if(!e.length)return[];if(t==="alles")return e;const n=Math.min(t,e.length);return e.slice(-n)}function xa(e){return e.length?e[e.length-1].saldo:0}const qt=new Set(["Urlaub","Arbeitsunfähigkeit","Feiertag","Gleitzeit","Berufsschule","Dienstreise"]),Zt=7;function Ke(e){if(!e||e.tagestyp==="Wochenende"||e.wochentag==="SA"||e.wochentag==="SO")return 0;const t=e.ist??0,n=e.soll??0;return t>0?t:qt.has(e.tagestyp)?Math.max(n,Zt):n>0?n:t}function ot(e){if(!e||e.tagestyp==="Wochenende"||e.wochentag==="SA"||e.wochentag==="SO")return 0;const t=e.soll??0;return t>0?t:qt.has(e.tagestyp)?Zt:t}function $a(e){if(!e.length)return 0;const t=e[0].saldo-(e[0].diff??0),n=e[e.length-1].saldo;return Math.round((n-t)*100)/100}function ke(e){if(!e)return null;const t=e.trim();return Bn(t,"dd.MM.yyyy",new Date)}function F(e){return E(e,"dd.MM.yyyy")}function Ut(e){return E(e,"EE, dd.MM.yyyy",{locale:G})}function Oe(e){const t=Ln(e,{weekStartsOn:1}),n=Cn(e,{weekStartsOn:1});return`${E(t,"dd.MM.")} – ${E(n,"dd.MM.yyyy")}`}function Sa(e){return`${_n(e)}-${String(Wn(e)).padStart(2,"0")}`}function Gt(e){return E(e,"yyyy-MM")}function Ma(e){return E(e,"yyyy-MM-dd")}function za(e,t){if(!e||!t)return 0;e>t&&([e,t]=[t,e]);let n=0,a=new Date(e);for(;a<t;)a=it(a,1),rt(a)||n++;return n}function x(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}j.register(vn,yn,wn,kn,xn,$n,Sn,Mn,zn,Dn,An,Pn,En,Tn);function V(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function re(){return{fg:V("--fg"),fgMuted:V("--fg-muted"),fgSubtle:V("--fg-subtle"),border:V("--border"),surface:V("--surface"),accent:V("--accent"),success:V("--success"),warn:V("--warn"),danger:V("--danger"),info:V("--info"),palette:[V("--chart-1"),V("--chart-2"),V("--chart-3"),V("--chart-4"),V("--chart-5"),V("--chart-6"),V("--chart-7")]}}function P(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.fgMuted,font:{size:12}}},tooltip:{backgroundColor:e.surface,titleColor:e.fg,bodyColor:e.fg,borderColor:e.border,borderWidth:1,padding:10,displayColors:!0}},scales:{x:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}},y:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}}}}}function ct(e,t){const n=re();if(oe(e),!(t!=null&&t.length))return;const a=t.map(i=>E(L(i.datum),"dd.MM.")),s=t.map(i=>i.saldo);return s.map(i=>i>=0?n.success:n.danger),new j(e,{type:"line",data:{labels:a,datasets:[{label:"Tages-Saldo",data:s,borderColor:n.accent,backgroundColor:i=>{const l=i.chart,{ctx:c,chartArea:r,scales:d}=l;return r?Jt(c,r,d.y,n):ae(n.accent,.14)},segment:{borderColor:i=>{const l=i.p0.parsed.y,c=i.p1.parsed.y,r=(l+c)/2;return r>=.02?n.success:r<=-.02?n.danger:n.fgMuted}},tension:.25,pointRadius:2,pointHoverRadius:6,pointHitRadius:20,pointBackgroundColor:s.map(i=>i>=.02?n.success:i<=-.02?n.danger:n.fgMuted),pointBorderColor:n.surface,pointBorderWidth:1,fill:!0,borderWidth:2}]},options:{...P(n),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},onHover:(i,l,c)=>{const r=c.getElementsAtEventForMode(i,"index",{intersect:!1},!1);c.canvas.style.cursor=r.length>0?"pointer":"default"},onClick:(i,l,c)=>{const r=c.getElementsAtEventForMode(i,"index",{intersect:!1},!1);if(r.length>0){const d=r[0].index,o=t[d];o!=null&&o.datum&&(window.location.hash=`#/tag/${o.datum}`)}},plugins:{...P(n).plugins,legend:{display:!1},tooltip:{enabled:!1,mode:"index",intersect:!1,axis:"x",position:"nearest",external:Da(t)}},scales:{...P(n).scales,y:{...P(n).scales.y,ticks:{...P(n).scales.y.ticks,callback:i=>`${i>=0?"+":""}${i.toFixed(1).replace(".",",")}h`}}}}})}function le(e){return function(t){var f,p;const{chart:n,tooltip:a}=t;let s=n.$richTooltipEl;if(!s){s=document.createElement("div"),s.className="saldo-tooltip",document.body.appendChild(s),n.$richTooltipEl=s;const v=n.destroy.bind(n);n.destroy=function(){s.parentNode&&s.parentNode.removeChild(s),v()}}if(a.opacity===0||!((f=a.dataPoints)!=null&&f.length)){s.style.opacity="0";return}const i=e({tooltip:a,chart:n});if(!i){s.style.opacity="0";return}let l=`<div class="saldo-tooltip-title">${et(i.title)}</div>`;for(const v of i.rows||[]){const w=v.klasse||"flat";l+=`<div class="saldo-tooltip-row"><span class="saldo-tooltip-label">${et(v.label)}</span><span class="saldo-tooltip-value ${w}">${v.value}</span></div>`}(p=i.meta)!=null&&p.length&&(l+=`<div class="saldo-tooltip-meta">${i.meta.map(v=>`<span>${v}</span>`).join("")}</div>`),s.innerHTML=l;const c=n.canvas.getBoundingClientRect(),r=c.left+a.caretX,d=c.top+a.caretY;s.style.opacity="0",s.style.left="0px",s.style.top="0px";const o=s.offsetWidth,u=s.offsetHeight,h=18;let g=r+h;g+o>window.innerWidth-8&&(g=r-h-o);let m=d-u/2;m<8&&(m=8),m+u>window.innerHeight-8&&(m=window.innerHeight-u-8),s.style.left=g+"px",s.style.top=m+"px",s.style.opacity="1"}}function ie(e){return e==null?"flat":e>.05?"pos":e<-.05?"neg":"flat"}function ue(e){return e==null?"—":(e>0?"+":"")+e.toFixed(2).replace(".",",")+"h"}function ge(e){return e==null?"—":e.toFixed(2).replace(".",",")+"h"}function Da(e){return le(({tooltip:t})=>{const n=t.dataPoints[0].dataIndex,a=e[n];if(!a)return null;const s=[{label:"Saldo",value:ue(a.saldo),klasse:ie(a.saldo)}];a.diff!=null&&s.push({label:"Tages-Diff",value:ue(a.diff),klasse:ie(a.diff)});const i=[];return a.tagestyp&&i.push(`Typ: ${et(a.tagestyp)}`),a.umbuchung&&i.push(`Umbuchung: ${a.umbuchung>=0?"+":""}${a.umbuchung.toFixed(2).replace(".",",")}h`),{title:E(L(a.datum),"EE, dd.MM.yyyy",{locale:G}),rows:s,meta:i}})}function et(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Aa(e,t){const n=re();if(oe(e),!(t!=null&&t.length))return;const a=t.map(c=>c.monatKey),s=a.map(c=>{const[r,d]=c.split("-"),o=new Date(parseInt(r,10),parseInt(d,10)-1,1);return E(o,"MMM yyyy",{locale:G})}),i=t.map(c=>{var r;return((r=c.glz)==null?void 0:r.saldoGesamt)??0}),l=t.map(c=>{var r;return((r=c.glz)==null?void 0:r.saldoVorperiode)??null});return new j(e,{type:"line",data:{labels:s,datasets:[{label:"GLZ-Saldo (Monatsende)",data:i,borderColor:n.accent,backgroundColor:c=>{const r=c.chart,{ctx:d,chartArea:o,scales:u}=r;return o?Jt(d,o,u.y,n):ae(n.accent,.14)},segment:{borderColor:c=>{const r=c.p0.parsed.y,d=c.p1.parsed.y,o=(r+d)/2;return o>=.05?n.success:o<=-.05?n.danger:n.fgMuted}},pointBackgroundColor:i.map(c=>c>=.05?n.success:c<=-.05?n.danger:n.fgMuted),pointBorderColor:n.surface,pointBorderWidth:1,tension:.35,fill:!0,pointRadius:4,pointHoverRadius:7,pointHitRadius:20}]},options:{...P(n),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},onHover:(c,r,d)=>{const o=d.getElementsAtEventForMode(c,"index",{intersect:!1},!1);d.canvas.style.cursor=o.length>0?"pointer":"default"},onClick:(c,r,d)=>{const o=d.getElementsAtEventForMode(c,"index",{intersect:!1},!1);if(o.length>0){const u=o[0].index,h=a[u];h&&(window.location.hash=`#/kalender/${h}`)}},plugins:{...P(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:le(({tooltip:c})=>{const r=c.dataPoints[0].dataIndex,d=i[r],o=l[r],u=[{label:"Saldo Monatsende",value:ue(d),klasse:ie(d)}];if(o!=null){const h=+(d-o).toFixed(2);u.push({label:"Vorperiode",value:ue(o),klasse:ie(o)}),u.push({label:"Bewegung",value:ue(h),klasse:ie(h)})}return{title:s[r],rows:u}})}}}})}function Pa(e,t){const n=re();if(oe(e),!(t!=null&&t.length))return;const a=t.map(l=>E(L(l.datum),"dd.MM.")),s=t.map(l=>l.ist??0),i=t.map(l=>_a(l.tagestyp,n));return new j(e,{type:"bar",data:{labels:a,datasets:[{label:"Ist-Stunden",data:s,backgroundColor:i,borderRadius:4,borderSkipped:!1,maxBarThickness:32,categoryPercentage:.85,barPercentage:.9}]},options:{...P(n),onHover:(l,c,r)=>{const d=r.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);r.canvas.style.cursor=d.length>0?"pointer":"default"},onClick:(l,c,r)=>{const d=r.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);if(d.length>0){const o=t[d[0].index];o!=null&&o.datum&&(window.location.hash=`#/tag/${o.datum}`)}},plugins:{...P(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:le(({tooltip:l})=>{const c=l.dataPoints[0].dataIndex,r=t[c],d=[{label:"Ist",value:ge(r.ist),klasse:"flat"}];r.soll!=null&&d.push({label:"Soll",value:ge(r.soll),klasse:"flat"}),r.diff!=null&&d.push({label:"Diff",value:ue(r.diff),klasse:ie(r.diff)});const o=r.tagestyp?[`Typ: ${r.tagestyp}`]:[];return{title:E(L(r.datum),"EE, dd.MM.yyyy",{locale:G}),rows:d,meta:o}})}},scales:{...P(n).scales,y:{...P(n).scales.y,suggestedMin:0,suggestedMax:10}}}})}function wt(e,t){const n=re();if(oe(e),!(t!=null&&t.length))return;const a=t.filter(d=>{var o;return((o=d.zeitSpannen)==null?void 0:o.length)&&d.zeitSpannen.some(u=>u.von&&u.bis)}).map(d=>{const o=d.zeitSpannen.filter(g=>g.von&&g.bis).map(g=>({von:Z(g.von),bis:Z(g.bis),vonStr:g.von,bisStr:g.bis})).filter(g=>g.von!=null&&g.bis!=null);if(o.length===0)return null;const u=Math.min(...o.map(g=>g.von)),h=Math.max(...o.map(g=>g.bis));return{...d,_spans:o,_minVon:u,_maxBis:h}}).filter(Boolean);if(!a.length)return;const s=d=>d.ist==null?n.fgMuted:d.ist>=7?n.success:n.danger,i={label:"Tages-Rahmen",data:a.map(d=>[d._minVon,d._maxBis]),backgroundColor:a.map(s),borderColor:a.map(s),borderWidth:0,borderRadius:4,borderSkipped:!1,barPercentage:.7,categoryPercentage:.9,maxBarThickness:18},l=Math.max(0,Math.floor(Math.min(...a.map(d=>d._minVon))/60)*60-60),c=Math.min(24*60,Math.ceil(Math.max(...a.map(d=>d._maxBis))/60)*60+60),r=d=>`${String(Math.floor(d/60)).padStart(2,"0")}:${String(d%60).padStart(2,"0")}`;return new j(e,{type:"bar",data:{labels:a.map(d=>E(L(d.datum),"dd.MM.")),datasets:[i]},options:{...P(n),interaction:{mode:"index",intersect:!1,axis:"x"},onHover:(d,o,u)=>{const h=u.getElementsAtEventForMode(d,"index",{intersect:!1},!1);u.canvas.style.cursor=h.length>0?"pointer":"default"},onClick:(d,o,u)=>{const h=u.getElementsAtEventForMode(d,"index",{intersect:!1},!1);if(h.length>0){const g=a[h[0].index];g!=null&&g.datum&&(window.location.hash=`#/tag/${g.datum}`)}},plugins:{legend:{display:!1},tooltip:{enabled:!1,external:le(({tooltip:d})=>{const o=a[d.dataPoints[0].dataIndex],u=[];o.ist!=null&&u.push({label:"Ist",value:ge(o.ist),klasse:ie(o.ist-7)}),o.soll!=null&&u.push({label:"Soll",value:ge(o.soll)});const h=[`Rahmen: ${r(o._minVon)} – ${r(o._maxBis)}`];return o._spans.length>1&&o._spans.forEach((g,m)=>h.push(`Block ${m+1}: ${g.vonStr} – ${g.bisStr}`)),o.pause!=null&&h.push(`Pause: ${Math.round(o.pause*60)} min`),{title:E(L(o.datum),"EE, dd.MM.yyyy",{locale:G}),rows:u,meta:h}})}},scales:{x:{ticks:{color:n.fgMuted,font:{size:10},maxRotation:60,minRotation:60,autoSkip:!0,maxTicksLimit:40},grid:{display:!1}},y:{min:l,max:c,ticks:{color:n.fgMuted,stepSize:60,callback:d=>r(d)},grid:{color:n.border}}}}})}function Ea(e,t){const n=re();oe(e);const a={};for(const l of t){if(l.tagestyp!=="Stempelzeit"||!l.zeitSpannen||l.zeitSpannen.length<2)continue;const c=lt(l.zeitSpannen);if(c<=0)continue;const r=Math.round(c*60),d=Math.floor(r/15)*15;a[d]=(a[d]??0)+1}const s=Object.keys(a).map(Number).sort((l,c)=>l-c),i=s.map(l=>a[l]);return new j(e,{type:"bar",data:{labels:s.map(l=>`${l}–${l+14} min`),datasets:[{label:"Häufigkeit",data:i,backgroundColor:n.palette[1],borderRadius:4}]},options:{...P(n),onHover:(l,c,r)=>{const d=r.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);r.canvas.style.cursor=d.length>0?"pointer":"default"},onClick:(l,c,r)=>{const d=r.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);if(d.length>0){const o=s[d[0].index];o!=null&&(window.location.hash=`#/kalender/pause/${o}`)}},plugins:{...P(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:le(({tooltip:l})=>{const c=l.dataPoints[0].dataIndex;return{title:"Pause-Länge "+(s[c]!=null?`${s[c]}–${s[c]+14} min`:""),rows:[{label:"Häufigkeit",value:`${i[c]} Tag${i[c]===1?"":"e"}`}]}})}}}})}function Ta(e,t){const n=re();oe(e);const a=["MO","DI","MI","DO","FR"],s={},i={};for(const r of a)s[r]=0,i[r]=0;for(const r of t)a.includes(r.wochentag)&&(r.ist==null||r.ist===0||(s[r.wochentag]+=r.ist,i[r.wochentag]+=1));const l=a.map(r=>i[r]>0?s[r]/i[r]:0),c={id:"wochentag-datalabels",afterDatasetsDraw(r){const{ctx:d,data:o,scales:u}=r;d.save(),d.fillStyle=n.fg,d.font="600 12px system-ui",d.textAlign="center",d.textBaseline="bottom",r.getDatasetMeta(0).data.forEach((g,m)=>{const f=o.datasets[0].data[m];if(!f||f===0)return;const p=f.toFixed(2).replace(".",",")+"h";d.fillText(p,g.x,g.y-6)}),d.restore()}};return new j(e,{type:"bar",data:{labels:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"],datasets:[{label:"Ø Ist-Stunden",data:l,backgroundColor:n.palette[2],borderRadius:4,maxBarThickness:56,categoryPercentage:.7,barPercentage:.8}]},options:{...P(n),layout:{padding:{top:24}},onHover:(r,d,o)=>{const u=o.getElementsAtEventForMode(r,"nearest",{intersect:!0},!1);o.canvas.style.cursor=u.length>0?"pointer":"default"},onClick:(r,d,o)=>{const u=o.getElementsAtEventForMode(r,"nearest",{intersect:!0},!1);if(u.length>0){const h=a[u[0].index];h&&(window.location.hash=`#/kalender/wochentag/${h}`)}},plugins:{...P(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:le(({tooltip:r})=>{const d=r.dataPoints[0].dataIndex,o=a[d];return{title:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"][d],rows:[{label:"Ø Stunden",value:ge(l[d])},{label:"Anzahl Tage",value:String(i[o]||0)}]}})}},scales:{...P(n).scales,y:{...P(n).scales.y,suggestedMax:Math.max(...l)*1.15}}},plugins:[c]})}function Fa(e,t){const n=re();oe(e);const a={};for(const l of t)!l.tagestyp||l.tagestyp==="Wochenende"||(a[l.tagestyp]=(a[l.tagestyp]??0)+1);const s=Object.keys(a),i=Object.values(a);return new j(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:s.map((l,c)=>n.palette[c%n.palette.length]),borderColor:n.surface,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,onHover:(l,c,r)=>{const d=r.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);r.canvas.style.cursor=d.length>0?"pointer":"default"},onClick:(l,c,r)=>{const d=r.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);if(d.length>0){const o=s[d[0].index];o&&(window.location.hash=`#/kalender/typ/${encodeURIComponent(o)}`)}},plugins:{legend:{position:"right",labels:{color:n.fgMuted,font:{size:12}}},tooltip:{enabled:!1,external:le(({tooltip:l})=>{const c=l.dataPoints[0].dataIndex,r=i.reduce((o,u)=>o+u,0),d=r?i[c]/r*100:0;return{title:s[c],rows:[{label:"Anzahl",value:`${i[c]} Tag${i[c]===1?"":"e"}`},{label:"Anteil",value:d.toFixed(1).replace(".",",")+"%"}]}})}}}})}function La(e,t){const n=re();oe(e);const a={};for(const o of t){const u=o.wocheKey;a[u]??(a[u]={ist:0,soll:0,days:0,ersterTag:null,monatKey:null}),a[u].ist+=Ke(o),a[u].soll+=ot(o),a[u].days++,(!a[u].ersterTag||o.datum&&o.datum<a[u].ersterTag)&&(a[u].ersterTag=o.datum,a[u].monatKey=o.monatKey)}const s=Object.keys(a).sort();if(!s.length)return;const i=s.map(o=>+a[o].ist.toFixed(2)),l=s.map(o=>+a[o].soll.toFixed(2)),c=s.map(o=>{const u=a[o].ersterTag;return u?Oe(L(u)):""}),r=i.map((o,u)=>o>=l[u]+.1?n.success:o<=l[u]-.1?n.danger:n.fgMuted),d={id:"wochenstunden-soll-linie",afterDatasetsDraw(o){const{ctx:u,scales:h}=o;h.x;const g=h.y;u.save(),u.strokeStyle=n.fgSubtle||n.fgMuted,u.lineWidth=1,u.setLineDash([4,4]),u.beginPath(),o.getDatasetMeta(0).data.forEach((f,p)=>{const v=f.x,w=f.width/2+2,y=g.getPixelForValue(l[p]??35);u.moveTo(v-w,y),u.lineTo(v+w,y)}),u.stroke(),u.restore()}};return new j(e,{type:"bar",data:{labels:s.map(o=>"KW "+o.split("-")[1]),datasets:[{label:"Wochenstunden",data:i,backgroundColor:r.map(o=>ae(o,.55)),borderColor:r,borderWidth:1.5,borderRadius:4,maxBarThickness:32,categoryPercentage:.85,barPercentage:.9}]},options:{...P(n),onHover:(o,u,h)=>{const g=h.getElementsAtEventForMode(o,"nearest",{intersect:!0},!1);h.canvas.style.cursor=g.length>0?"pointer":"default"},onClick:(o,u,h)=>{var m;const g=h.getElementsAtEventForMode(o,"nearest",{intersect:!0},!1);if(g.length>0){const f=g[0].index,p=s[f],v=p?(m=a[p])==null?void 0:m.monatKey:null;p&&v?window.location.hash=`#/kalender/${v}/${p}`:p&&(window.location.hash="#/kalender")}},plugins:{...P(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:le(({tooltip:o})=>{const u=o.dataPoints[0].dataIndex,h=s[u],g=i[u],m=l[u],f=+(g-m).toFixed(2),p=c[u];return{title:p?"KW "+h.split("-")[1]+" · "+p:"KW "+h.split("-")[1]+" · "+h.split("-")[0],rows:[{label:"Ist",value:ge(g),klasse:"flat"},{label:"Soll",value:ge(m),klasse:"flat"},{label:"Diff",value:ue(f),klasse:ie(f)}]}})}},scales:{...P(n).scales,y:{...P(n).scales.y,beginAtZero:!0,ticks:{...P(n).scales.y.ticks,callback:o=>`${o.toFixed(0)}h`}}}},plugins:[d]})}function oe(e){const t=j.getChart(e);t&&t.destroy()}function Ca(){if(j.instances){for(const e of Object.values(j.instances))if(e!=null&&e.canvas&&!document.body.contains(e.canvas))try{e.destroy()}catch{}}document.querySelectorAll(".saldo-tooltip").forEach(e=>e.remove())}function ae(e,t){const n=e.replace("#","").trim();if(n.length!==6&&n.length!==3)return e;const a=n.length===3?n.split("").map(c=>c+c).join(""):n,s=parseInt(a.slice(0,2),16),i=parseInt(a.slice(2,4),16),l=parseInt(a.slice(4,6),16);return`rgba(${s}, ${i}, ${l}, ${t})`}function Jt(e,t,n,a){return Ba(e,t,n,0,a)}function Ba(e,t,n,a,s){const{top:i,bottom:l}=t,c=e.createLinearGradient(0,i,0,l),r=n.min,d=n.max,o=d-r;if(o<=0)return ae(s.success,.14);let u=(d-a)/o;return u=Math.max(0,Math.min(1,u)),c.addColorStop(0,ae(s.success,.28)),c.addColorStop(Math.max(0,u-.001),ae(s.success,.06)),c.addColorStop(Math.min(1,u+.001),ae(s.danger,.06)),c.addColorStop(1,ae(s.danger,.28)),c}function _a(e,t){const n=String(e??"").toLowerCase();return n.includes("stempel")?t.palette[0]:n.includes("berufs")?t.palette[1]:n.includes("urlaub")?t.palette[2]:n.includes("feiertag")?t.fgSubtle:n.includes("dienst")?t.palette[3]:n.includes("krank")?t.palette[4]:t.palette[5]}const Xt=[];function O(e,t){const n=e.split("/").filter(Boolean),a=[],s=new RegExp("^/?"+n.map(i=>i.startsWith(":")?(a.push(i.slice(1)),"([^/]+)"):Oa(i)).join("/")+"/?$");Xt.push({pattern:e,regex:s,paramNames:a,render:t})}function Wa(e){e.startsWith("#")||(e="#"+e),window.location.hash===e?ee():window.location.hash=e}function Va(e,{onNavigate:t}={}){window.addEventListener("hashchange",ee),ee.rootEl=e,ee.onNavigate=t,ee()}async function ee(){var a;Ca();const e=ee.rootEl,t=window.location.hash.slice(1)||"/",n=t.startsWith("/")?t:`/${t}`;for(const s of Xt){const i=s.regex.exec(n);if(i){const l={};s.paramNames.forEach((c,r)=>l[c]=decodeURIComponent(i[r+1])),(a=ee.onNavigate)==null||a.call(ee,n),Ka(n);try{e.classList.remove("view-enter"),await s.render({params:l,path:n,root:e}),e.classList.add("view-enter")}catch(c){console.error("Route render error:",c),e.innerHTML=`<div class="empty-state">
          <div class="empty-state-icon">⚠</div>
          <h2>Fehler beim Anzeigen</h2>
          <p>${kt(c.message||String(c))}</p>
        </div>`}return}}e.innerHTML=`<div class="empty-state">
    <div class="empty-state-icon">?</div>
    <h2>Seite nicht gefunden</h2>
    <p>Die Route <code>${kt(n)}</code> existiert nicht.</p>
    <a href="#/" class="btn primary">Zum Dashboard</a>
  </div>`}function Ka(e){document.querySelectorAll("[data-route]").forEach(n=>{const a=n.getAttribute("data-route"),s=a==="/"?e==="/":e===a||e.startsWith(a+"/");n.classList.toggle("active",s)});const t=e==="/"?"dashboard":e.split("/").filter(Boolean)[0];document.body.setAttribute("data-view",t||"dashboard")}function Oa(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function kt(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const Ia="modulepreload",Ha=function(e){return"/better-ess/"+e},xt={},dt=function(t,n,a){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=Promise.allSettled(n.map(r=>{if(r=Ha(r),r in xt)return;xt[r]=!0;const d=r.endsWith(".css"),o=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const u=document.createElement("link");if(u.rel=d?"stylesheet":Ia,d||(u.as="script"),u.crossOrigin="",u.href=r,c&&u.setAttribute("nonce",c),document.head.appendChild(u),d)return new Promise((h,g)=>{u.addEventListener("load",h),u.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${r}`)))})}))}function i(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return s.then(l=>{for(const c of l||[])c.status==="rejected"&&i(c.reason);return t().catch(i)})},b=new On("zeitnachweis");b.version(1).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"});b.version(2).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});b.version(3).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});b.version(4).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});b.version(5).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{const t=await e.table("profil").get("self");t&&(!t.zeitwirtschaftEmail||t.zeitwirtschaftEmail==="zeitwirtschaft@putzmeister.com")&&await e.table("profil").put({...t,zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com"})});b.version(6).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});b.version(7).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key",fahrtgeldTemplate:"id"}).upgrade(async e=>{const t=await e.table("profil").get("self");if(!t)return;let n=t.ueber18??!0;if(t.geburtsdatum){const s=new Date(t.geburtsdatum),i=new Date;n=i.getFullYear()-s.getFullYear()-(i<new Date(i.getFullYear(),s.getMonth(),s.getDate())?1:0)>=18}const a={id:"self",ueber18:n,sollStundenProWoche:t.sollStundenProWoche??35,sollStundenProTag:t.sollStundenProTag??7,berufsschulMuster:t.berufsschulMuster??{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null},zeitwirtschaftEmail:t.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:t.zeitwirtschaftAnrede||"Frau Kanarya",pausenRegel:t.pausenRegel??"auto",erstelltAm:t.erstelltAm??new Date().toISOString(),updatedAt:new Date().toISOString()};await e.table("profil").put(a)});async function Ra(){try{const{erkenneBerufsschulMuster:e}=await dt(async()=>{const{erkenneBerufsschulMuster:l}=await Promise.resolve().then(()=>is);return{erkenneBerufsschulMuster:l}},void 0),t=await b.tage.toArray();if(!t.length)return!1;const n=e(t),a=await b.profil.get("self");if(!a)return!1;const s=a.berufsschulMuster??{};return JSON.stringify(s.wochentageWoechentlich??[])!==JSON.stringify(n.wochentageWoechentlich)||JSON.stringify(s.wochentage14Taegig??[])!==JSON.stringify(n.wochentage14Taegig)||(s.referenzDatum14Taegig??null)!==(n.referenzDatum14Taegig??null)||(s.stundenProTag??null)!==(n.stundenProTag??null)||(s.halbtags??!1)!==(n.halbtags??!1)?(await b.profil.put({...a,berufsschulMuster:n}),!0):!1}catch(e){return console.warn("[db] refreshBerufsschulMuster fehlgeschlagen:",e),!1}}async function Na(){try{const e=await b.mailVorlagen.toArray(),t=e.some(a=>a.betreff&&!a.betreff.startsWith("Bitte um Zeitkorrektur im ESS")),n=e.some(a=>a.text&&!/Vielen Dank!\s*$/.test(a.text));return t||n?(await b.mailVorlagen.clear(),!0):!1}catch(e){return console.warn("[db] ensureMailVorlagenFresh fehlgeschlagen:",e),!1}}async function ja(){const e=await b.einstellungen.get("__migration_reset");return(e==null?void 0:e.value)===!0?(await b.einstellungen.delete("__migration_reset"),!0):!1}async function J(){return await b.profil.get("self")??Yt()}async function Be(e){const t={...e,id:"self",updatedAt:new Date().toISOString()};return await b.profil.put(t),t}function Yt(){return{id:"self",ueber18:!0,sollStundenProWoche:35,sollStundenProTag:7,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1},zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:"Frau Kanarya",pausenRegel:"auto",erstelltAm:new Date().toISOString()}}async function qa(e,t=null){const n=await b.einstellungen.get(e);return n?n.value:t}async function Za(e,t){await b.einstellungen.put({key:e,value:t})}async function te(){return await b.tage.orderBy("datum").toArray()}async function Ua(e,t,n){const a=n instanceof Date?n.toISOString():typeof n=="string"&&n?n:null,s=(d,o)=>o?d?d>o:!1:!0;let i=0,l=0,c=0,r=0;if(e.length){const d=e.map(h=>h.datum),o=await b.tage.bulkGet(d),u=[];for(let h=0;h<e.length;h++){const g={...e[h],_quellStichtag:a},m=o[h];!m||s(a,m._quellStichtag)?u.push(g):l++}u.length&&(await b.tage.bulkPut(u),i=u.length)}if(t.length){const d=t.map(h=>h.monatKey),o=await b.monate.bulkGet(d),u=[];for(let h=0;h<t.length;h++){const g={...t[h],_quellStichtag:a},m=o[h];!m||s(a,m._quellStichtag)?u.push(g):r++}u.length&&(await b.monate.bulkPut(u),c=u.length)}return{tage:i,monate:c,skippedTage:l,skippedMonate:r}}async function Ie(){return await b.monate.orderBy("monatKey").toArray()}async function Ga(e){return await b.uploads.add({...e,hochladeDatum:new Date().toISOString()})}async function Me(){return await b.uploads.orderBy("hochladeDatum").last()}async function Qt(){return await b.uploads.orderBy("hochladeDatum").reverse().toArray()}async function xe(){return await b.fahrtgeldTemplate.get("self")}async function ut(e){await b.fahrtgeldTemplate.put({id:"self",...e})}async function Ja(){await b.fahrtgeldTemplate.delete("self")}async function Xa(){await Promise.all([b.profil.clear(),b.tage.clear(),b.monate.clear(),b.uploads.clear(),b.einstellungen.clear(),b.mailVorlagen.clear(),b.warnungDismissals.clear(),b.fahrtgeldTemplate.clear()])}async function en(){await Promise.all([b.tage.clear(),b.monate.clear(),b.uploads.clear(),b.warnungDismissals.clear()])}async function Ya(){const[e,t,n,a,s,i,l]=await Promise.all([b.profil.toArray(),b.tage.toArray(),b.monate.toArray(),b.uploads.toArray(),b.einstellungen.toArray(),b.mailVorlagen.toArray(),b.warnungDismissals.toArray()]);return{version:1,exportedAt:new Date().toISOString(),data:{profil:e,tage:t,monate:n,uploads:a,einstellungen:s,mailVorlagen:i,warnungDismissals:l}}}async function Qa(e){if(!e||e.version!==1||!e.data)throw new Error("Ungültiges oder inkompatibles Backup-Format.");const t=e.data;await b.transaction("rw",b.profil,b.tage,b.monate,b.uploads,b.einstellungen,b.mailVorlagen,b.warnungDismissals,async()=>{var n,a,s,i,l,c,r;(n=t.profil)!=null&&n.length&&await b.profil.bulkPut(t.profil),(a=t.tage)!=null&&a.length&&await b.tage.bulkPut(t.tage),(s=t.monate)!=null&&s.length&&await b.monate.bulkPut(t.monate),(i=t.uploads)!=null&&i.length&&await b.uploads.bulkPut(t.uploads),(l=t.einstellungen)!=null&&l.length&&await b.einstellungen.bulkPut(t.einstellungen),(c=t.mailVorlagen)!=null&&c.length&&await b.mailVorlagen.bulkPut(t.mailVorlagen),(r=t.warnungDismissals)!=null&&r.length&&await b.warnungDismissals.bulkPut(t.warnungDismissals)})}async function _e(e,t){await b.mailVorlagen.put({key:e,...t})}async function es(e){return await b.mailVorlagen.get(e)}async function He(){return await b.mailVorlagen.toArray()}async function ts(e,t){await b.warnungDismissals.put({key:`${e}-${t}`,datum:e,typ:t,dismissedAt:new Date().toISOString()})}async function ns(){return await b.warnungDismissals.toArray()}function as(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
    <polyline points="10 17 15 12 10 7"/>
    <line x1="15" y1="12" x2="3" y2="12"/>
  </svg>`}function ss(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>`}function tn(e,t={}){const{size:n=20,layout:a="inline"}=t;return e?`
    <div class="kommen-gehen ${a}">
      <span class="kg-block kommen" title="Kommen (frühester Einstempel)">
        ${as(n)}
        <span class="kg-zeit tabular">${e.kommen}</span>
      </span>
      <span class="kg-block gehen" title="Gehen (spätester Ausstempel)">
        ${ss(n)}
        <span class="kg-zeit tabular">${e.gehen}</span>
      </span>
    </div>
  `:'<span class="kg-empty">—</span>'}function nn(e){var o;const t=e.filter(u=>u.tagestyp==="Berufsschule");if(t.length<2)return{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1};const n={};for(const u of t)n[o=u.wochentag]??(n[o]=[]),n[u.wochentag].push(u);const a=[],s=[];let i=null;for(const[u,h]of Object.entries(n)){if(h.sort((f,p)=>f.datum.localeCompare(p.datum)),h.length<2)continue;const g=[];for(let f=1;f<h.length;f++)g.push(Vn(L(h[f].datum),L(h[f-1].datum)));const m=$t(g);m<=10?a.push(u):m<=18&&(s.push(u),(!i||L(h[0].datum)<L(i))&&(i=h[0].datum))}const l=t.map(u=>u.ist).filter(u=>u!=null&&u>0),c=$t(l),r=c!=null?Math.round(c*4)/4:null,d=r!=null&&r<5;return{wochentageWoechentlich:a,wochentage14Taegig:s,referenzDatum14Taegig:i,stundenProTag:r,halbtags:d}}function $t(e){if(!e.length)return null;const t=e.slice().sort((a,s)=>a-s),n=Math.floor(t.length/2);return t.length%2?t[n]:(t[n-1]+t[n])/2}function Re(e,t){var s,i;if(!t)return!1;const a=["SO","MO","DI","MI","DO","FR","SA"][e.getDay()];if((s=t.wochentageWoechentlich)!=null&&s.includes(a))return!0;if((i=t.wochentage14Taegig)!=null&&i.includes(a)&&t.referenzDatum14Taegig){const l=L(t.referenzDatum14Taegig),c=Kn(e,l,{weekStartsOn:1});if(c>=0&&c%2===0)return!0}return!1}function an(e,t=null){return(e==null?void 0:e.halbtags)===!0&&(e==null?void 0:e.stundenProTag)!=null&&e.stundenProTag>0?e.stundenProTag:t}const is=Object.freeze(Object.defineProperty({__proto__:null,erkenneBerufsschulMuster:nn,erwarteteBerufsschulStunden:an,istBerufsschulTagLautMuster:Re},Symbol.toStringTag,{value:"Module"})),be={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function Ne(e,t,n,a=new Set){var u,h;const s=[],i=n??new Date,l=new Map(e.map(g=>[g.datum,g]));if(!e.length)return s;const c=L(e[0].datum),r=i,d=E(r,"yyyy-MM-dd");for(let g=new Date(c);g<=r;g=it(g,1)){if(rt(g))continue;const m=E(g,"yyyy-MM-dd"),f=l.get(m),p=za(g,r),v=m===d,w=!f||!f.tagestyp&&!f.ist&&(((u=f.zeitSpannen)==null?void 0:u.length)??0)===0;if(!(v&&w)){if(w){if(Re(g,t.berufsschulMuster)){const y=p>=4?"error":p>=2?"warn":"info";ve(s,a,{datum:m,wochentag:(f==null?void 0:f.wochentag)??Ae(g),typ:"bs_tag_fehlt",schweregrad:y,titel:`Berufsschultag nicht eingetragen: ${F(g)}`,beschreibung:`Laut deinem Profil hast du am ${be[Ae(g)]}, ${F(g)} Berufsschule. Im Zeitnachweis fehlt der Tag bisher${p>=4?" — bitte bei der Zeitwirtschaft nachhaken":""}.`,alter:p,mailVorlageKey:y==="error"?"bs_tag_fehlt":null})}else{const y=p>=4?"error":p>=2?"warn":"info";ve(s,a,{datum:m,wochentag:Ae(g),typ:"stempelzeit_fehlt",schweregrad:y,titel:`Keine Stempelzeit am ${F(g)}`,beschreibung:`Am ${be[Ae(g)]}, ${F(g)} wurde keine Stempelzeit erfasst. Falls du an diesem Tag im Haus warst, sollte die Zeitwirtschaft das nachtragen${p>=4?" — es ist inzwischen ≥4 Werktage her":""}.`,alter:p,mailVorlageKey:y==="error"?"stempelzeit_fehlt":null})}continue}if(f.tagestyp==="Berufsschule"&&f.ist!=null){const y=an(t.berufsschulMuster,f.soll);y!=null&&f.ist<y-.5&&ve(s,a,{datum:m,wochentag:f.wochentag,typ:"bs_stunden_falsch",schweregrad:"error",titel:`Berufsschultag mit zu wenig Stunden: ${F(g)}`,beschreibung:`Am ${be[f.wochentag]}, ${F(g)} sind nur ${f.ist.toFixed(2).replace(".",",")}h gebucht statt der für dich üblichen ${y.toFixed(2).replace(".",",")}h. Die Zeitwirtschaft hat den Berufsschultag möglicherweise nur halb erfasst.`,ist:f.ist,soll:y,mailVorlageKey:"bs_stunden_falsch"})}if(f.tagestyp==="Stempelzeit"&&((h=f.zeitSpannen)==null?void 0:h.length)>1&&m>=Rt){const y=Nt(f,t);(y==null?void 0:y.typ)==="fehler_zeitwirtschaft"&&y.unrechtmaessigerVerlustMin>=5?ve(s,a,{datum:m,wochentag:f.wochentag,typ:"pausen_abzug",schweregrad:y.unrechtmaessigerVerlustMin>=15?"error":"warn",titel:`Pausen-Abzug fehlerhaft (${F(g)})`,beschreibung:`Am ${be[f.wochentag]}, ${F(g)} wurden ${Math.round(y.abgezogenePause*60)} min Pause abgezogen. Gestempelt: ${Math.round(y.gestempeltePause*60)} min, gesetzlich nötig (${y.gesetz.toUpperCase()}): ${Math.round(y.gesetzlichePflicht*60)} min. Differenz von ${y.unrechtmaessigerVerlustMin} min ist unerklärlich.`,verlustMinuten:y.unrechtmaessigerVerlustMin,abgezogen:y.abgezogenePause,gestempelt:y.gestempeltePause,mailVorlageKey:"pausen_abzug"}):(y==null?void 0:y.typ)==="aufstockung_legal"&&y.aufstockungMin>=10&&ve(s,a,{datum:m,wochentag:f.wochentag,typ:"pausen_aufstockung",schweregrad:"info",titel:`Zu wenig Pause gestempelt (${F(g)}) — ${y.aufstockungMin} min automatisch aufgestockt`,beschreibung:`Am ${be[f.wochentag]}, ${F(g)} hast du nur ${Math.round(y.gestempeltePause*60)} min Pause gemacht. Gesetz (${y.gesetz.toUpperCase()}) schreibt ${Math.round(y.gesetzlichePflicht*60)} min vor. Fehlende ${y.aufstockungMin} min wurden als Pause gewertet — das ist legal, aber du verlierst dadurch Arbeitszeit. Tipp: mach beim nächsten Mal etwas länger Mittag.`})}}}const o={error:0,warn:1,info:2};return s.sort((g,m)=>{const f=o[g.schweregrad]-o[m.schweregrad];return f!==0?f:m.datum.localeCompare(g.datum)}),s}function sn(e,t=new Set){var a,s,i,l;const n=[];for(const c of e){const r=((a=c.glz)==null?void 0:a.saldoVorperiode)??0,d=((s=c.glz)==null?void 0:s.saldoAktuellePeriode)??0,o=((i=c.glz)==null?void 0:i.umgebuchteStunden)??0,u=(l=c.glz)==null?void 0:l.saldoGesamt;if(u==null)continue;const h=r+d+o,g=Math.abs(u-h);if(g>.03){const m=`${c.monatKey}-saldo_plausi`;t.has(m)||n.push({datum:`${c.monatKey}-01`,wochentag:"",typ:"saldo_plausi",schweregrad:"warn",titel:`Saldo-Differenz im Monat ${c.monatKey}`,beschreibung:`Rechnung: Vorperiode ${r.toFixed(2)} + aktuelle Periode ${d.toFixed(2)} + umgebucht ${o.toFixed(2)} = ${h.toFixed(2)}, aber dein Saldo wird mit ${u.toFixed(2)} angezeigt. Abweichung: ${g.toFixed(2)}h.`,soll:h,ist:u})}}return n}function ve(e,t,n){const a=`${n.datum}-${n.typ}`;t.has(a)||(n.id=a,e.push(n))}function Ae(e){return["SO","MO","DI","MI","DO","FR","SA"][e.getDay()]}const rs={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"},$e={bs_tag_fehlt:{key:"bs_tag_fehlt",titel:"Berufsschultag fehlt",beschreibung:"Wenn ein Berufsschultag komplett nicht im Zeitnachweis eingetragen wurde.",betreff:"Bitte um Zeitkorrektur im ESS  - Fehlender Berufsschultag {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

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
Vielen Dank!`}};function ze(e,t){const n=$e[e];return n?{...n,...t??{}}:null}function rn(e,t){const n=St(e.text,t);return{betreff:St(e.betreff,t),text:n}}function St(e,t){return e.replace(/\{(\w+)\}/g,(n,a)=>t[a]!=null?String(t[a]):`{${a}}`)}function gt(e,t){const n=t.datum?new Date(t.datum):null;return{name:"",personalnr:"",kostenstelle:"",datum:n?Ut(n).split(", ")[1]:"",wochentag:rs[t.wochentag]??t.wochentag??"",zeitwirtschaft_anrede:e.zeitwirtschaftAnrede||"Frau Kanarya",zeitwirtschaft_email:e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",ist:t.ist!=null?t.ist.toFixed(2).replace(".",","):"",soll:t.soll!=null?t.soll.toFixed(2).replace(".",","):"",abgezogen:t.abgezogen!=null?Math.round(t.abgezogen*60):"",gestempelt:t.gestempelt!=null?Math.round(t.gestempelt*60):"",verlust:t.verlustMinuten??""}}function ht(e,t,n){const a=rn(t,n),s=e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",i=new URLSearchParams;return i.set("subject",a.betreff),i.set("body",a.text),`mailto:${s}?${i.toString().replace(/\+/g,"%20")}`}let ls=0;function N(e,{type:t="info",duration:n=3500}={}){const a=document.getElementById("toast-root");if(!a)return;const s=document.createElement("div");s.className=`toast ${t}`,s.textContent=e,s.dataset.id=++ls,a.appendChild(s),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateY(-8px)",s.style.transition="opacity 220ms, transform 220ms",setTimeout(()=>s.remove(),250)},n)}function We(e){return N(e,{type:"error",duration:6e3})}function T(e){return N(e,{type:"success"})}const os=3,cs=2.5,ds={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function je(e,t={}){if(!(e!=null&&e.length))return'<p style="color: var(--fg-muted);">Keine Tage im Zeitraum.</p>';const n=new Map;for(const i of t.warnungen??[])n.has(i.datum)||n.set(i.datum,[]),n.get(i.datum).push(i);const a=[];let s=null;for(const i of e)(!s||s.key!==i.wocheKey)&&(s={key:i.wocheKey,tage:[]},a.push(s)),s.tage.push(i);return`<div class="tages-liste">${a.map(i=>us(i,n)).join("")}</div>`}function us(e,t){var o;const n=e.tage.reduce((u,h)=>u+Ke(h),0),a=e.tage.reduce((u,h)=>u+(h.diff??0),0),s=(o=e.tage[0])==null?void 0:o.datum,i=s?Oe(L(s)):"",l=e.key?e.key.split("-")[1]:"?",c=a>.05?"pos":a<-.05?"neg":"flat",r=(a>0?"+":"")+a.toFixed(2).replace(".",",")+"h",d=n.toFixed(2).replace(".",",")+"h";return`
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
        ${e.tage.map(u=>gs(u,(t==null?void 0:t.get(u.datum))??[])).join("")}
      </div>
    </div>
  `}function gs(e,t=[]){const n=e.diff??0,a=n>0,s=a?os:cs,i=Math.min(150,Math.abs(n)/s*50),l=a?"var(--success)":n<0?"var(--danger)":"var(--fg-subtle)",c=Ht(e.zeitSpannen),r=e.saldo??0,d=t.length>0,o=d?fs(t):"",u=d?t.map(g=>`${g.titel}${g.beschreibung?`
`+g.beschreibung:""}`).join(`

`):"",h=d?t[0].schweregrad:null;return`
    <a href="#/tag/${e.datum}" class="tag-row${d?" has-warn severity-"+h:""}">
      <div class="tag-row-datum">
        <div class="tabular">${x(F(new Date(e.datum)))}</div>
        <div class="tag-row-wd">${hs(e.wochentag)}</div>
      </div>
      <div class="tag-row-warn-cell" aria-hidden="${d?"false":"true"}">
        ${d?`<span class="tag-row-warn severity-${h}" title="${x(u)}">${o}${t.length>1?" "+t.length:""}</span>`:""}
      </div>
      <div class="tag-row-typ">
        ${e.tagestyp?`<span class="pill ${ms(e.tagestyp)}">${x(e.tagestyp)}</span>`:'<span style="color: var(--fg-subtle); font-size: 12px;">—</span>'}
      </div>
      <div class="tag-row-kg">
        ${tn(c,{size:18})}
      </div>
      <div class="tag-row-ist tabular">
        ${(()=>{if(e.ist==null)return'<div class="ist-wert">—</div>';const g=Ce(e.ist),[m,f]=g.split(":");return e.ist<=0?`<div class="ist-wert">${g}</div>`:`<div class="ist-display" title="Klick auf H oder M zum Kopieren">
            <button class="ist-part" data-val="${m}" title="${m} Stunden kopieren">${m}</button><span class="ist-sep">:</span><button class="ist-part" data-val="${f}" title="${f} Minuten kopieren">${f}</button>
          </div>`})()}
        <div style="color: var(--fg-subtle); font-size: 11px;">Soll ${e.soll!=null?Ce(e.soll):"—"}</div>
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
  `}function hs(e){return ds[e]??e}function fs(e){const t={error:3,warn:2,info:1};let n=e[0];for(const a of e)(t[a.schweregrad]||0)>(t[n.schweregrad]||0)&&(n=a);return n.schweregrad==="error"?"!":n.schweregrad==="warn"?"⚠":"i"}function ms(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function ft(e){e._istCopyAttached||(e._istCopyAttached=!0,e.addEventListener("click",async t=>{const n=t.target.closest(".ist-part");if(!n)return;t.preventDefault(),t.stopPropagation();const a=n.getAttribute("data-val");try{await navigator.clipboard.writeText(a);const s=n.textContent;n.classList.add("ok"),n.textContent="✓",setTimeout(()=>{n.classList.remove("ok"),n.textContent=s},800)}catch{T(`Bitte kopieren: ${a}`)}}))}const ps=[{key:7,label:"1 Woche"},{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:180,label:"6 Monate"},{key:365,label:"1 Jahr"},{key:730,label:"2 Jahre"},{key:"alles",label:"Alles"}];function bs(e){return ps.filter(t=>t.key==="alles"||t.key<e)}async function Mt({root:e}){const[t,n,a,s,i,l,c]=await Promise.all([J(),Ie(),te(),ns(),qa("dashboardZeitraum",14),He(),Me()]),r=Object.fromEntries(l.map(S=>[S.key,S]));if(a.length===0){e.innerHTML=ys();return}const d=jt(a,n),o=d.length,u=bs(o);let h=i;u.some(S=>S.key===h)||(h="alles");const g=new Set(s.map(S=>S.key)),m=c!=null&&c.stichtagAuswertung?new Date(c.stichtagAuswertung):new Date,f=Ne(a,t,m,g),p=sn(n,g),v=[...f,...p],w=xa(d),y=w>.05?"positive":w<-.05?"negative":"";e.innerHTML=`
    <h1 class="view-title">Dashboard</h1>
    <p class="view-subtitle">Stand: ${Ve(F(new Date(a[a.length-1].datum)))}</p>

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
        ${v.slice(0,8).map(S=>vs(S,t,r)).join("")}
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

  `,zt(h,e,d,v);const _=()=>e.querySelectorAll("#zeitraum-picker button, #zeitraum-picker-2 button");_().forEach(S=>{S.addEventListener("click",async()=>{if(S.disabled)return;const C=S.getAttribute("data-key"),I=C==="alles"?"alles":parseInt(C,10);_().forEach(M=>M.classList.toggle("active",M.getAttribute("data-key")===C)),await Za("dashboardZeitraum",I),zt(I,e,d,v)})}),e.addEventListener("click",async S=>{const C=S.target.closest(".ist-part");if(C){S.preventDefault(),S.stopPropagation();const z=C.getAttribute("data-val");try{await navigator.clipboard.writeText(z);const D=C.textContent;C.classList.add("ok"),C.textContent="✓",setTimeout(()=>{C.classList.remove("ok"),C.textContent=D},800)}catch{T(`Bitte kopieren: ${z}`)}return}const I=S.target.closest(".btn-dismiss");if(!I)return;const M=I.getAttribute("data-datum"),K=I.getAttribute("data-typ");if(!M||!K)return;await ts(M,K),T("Warnung ausgeblendet.");const k=I.closest(".alert");k&&(k.style.display="none")})}function zt(e,t,n,a=[]){const s=ka(n,e),i=$a(s);requestAnimationFrame(()=>{const d=t.querySelector("#saldo-chart");ct(d,s)});const l=t.querySelector("#hero-bewegung");if(l){const d=i>.05?"up":i<-.05?"down":"flat",o=i>.05?"↑":i<-.05?"↓":"→";l.className=`saldo-trend ${d}`,l.innerHTML=`${o} ${Math.abs(i)<.01?"Unverändert":se(i,{signed:!0})} im Zeitraum`}const c=t.querySelector("#tage-info");if(c){const d=s.length;c.textContent=`${d} ${d===1?"Tag":"Tage"}`}const r=t.querySelector("#tage-liste");r&&(r.innerHTML=je(s.slice().reverse(),{warnungen:a.filter(d=>s.some(o=>o.datum===d.datum))}))}function vs(e,t,n){const a=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";let s=null;if(e.mailVorlageKey&&t){const i=ze(e.mailVorlageKey,n==null?void 0:n[e.mailVorlageKey]);if(i){const l=gt(t,e);s=ht(t,i,l)}}return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${a}</div>
      <div class="alert-body">
        <div class="alert-title">${Ve(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${Ve(e.beschreibung)}</p>
        <div class="alert-actions">
          ${s?`<a href="${Je(s)}" class="btn-mail-medium"><img src="outlook-logo.png" alt="" class="outlook-logo-medium" />E-Mail</a>`:""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
          <button class="btn ghost sm btn-dismiss" data-datum="${Je(e.datum)}" data-typ="${Je(e.typ)}">Ausblenden</button>
        </div>
      </div>
    </div>
  `}function ys(){return`
    <div class="empty-state" style="margin-top: 80px;">
      <p class="hint" style="margin-bottom: 18px;">Noch keine Daten geladen.</p>
      <a href="#/daten" class="btn primary">Zum Upload →</a>
      <p class="hint" style="margin-top: 24px; font-size: 12px;">Tipp: Tour erneut starten unter <a href="#/daten" style="color: var(--accent);">Daten</a> ganz unten.</p>
    </div>
  `}function Ve(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Je(e){return Ve(e)}const ws="/better-ess/assets/pdf.worker.min-yatZIOMy.mjs";In.workerSrc=ws;const Dt={Januar:1,Februar:2,März:3,Maerz:3,April:4,Mai:5,Juni:6,Juli:7,August:8,September:9,Oktober:10,November:11,Dezember:12},ks=["Stempelzeit","Berufsschule Std. bez","Berufsschule","Dienstreise Arbeitszeit","Reise öff.VM/PKW Beifahr.","Reise öff.VM/PKW","Urlaub","Gleitzeit","Arbeitsunfähigkeit","TgDtEinh","Neujahr","Karfreitag","Ostermontg","Ostmontg","Osterso.","Hl.3 Kön.","Allerhlg","Pfingstmo","Fronleichn","TdDtEinh"];async function xs(e){var r,d;const n=await Hn({data:e}).promise,a=[];let s=0;for(let o=1;o<=n.numPages;o++){const h=await(await n.getPage(o)).getTextContent();s+=h.items.length;const g=$s(h.items);for(const m of g)a.push({page:o,text:m})}const i=Ss(a),{tage:l,monate:c}=Ms(a);try{const o=await n.getMetadata();i.producer=((r=o==null?void 0:o.info)==null?void 0:r.Producer)??null,i.creator=((d=o==null?void 0:o.info)==null?void 0:d.Creator)??null}catch{}return i.totalTextItems=s,{meta:i,tage:l,monate:c}}function $s(e){if(!e.length)return[];const t=e.slice().sort((l,c)=>{const r=c.transform[5]-l.transform[5];return Math.abs(r)>2?r:l.transform[4]-c.transform[4]}),n=[];let a=null,s=[];const i=3;for(const l of t){const c=l.transform[5];a==null||Math.abs(c-a)<=i?(s.push(l),a==null&&(a=c)):(n.push(At(s)),s=[l],a=c)}return s.length&&n.push(At(s)),n.filter(l=>l.trim().length>0)}function At(e){e.sort((a,s)=>a.transform[4]-s.transform[4]);let t="",n=-1;for(const a of e){const s=a.transform[4];n>=0&&s-n>4?t+="  ":n>=0&&s-n>.5&&(t+=" "),t+=a.str,n=s+a.width}return t}function Ss(e){var n,a;const t={personalnummer:null,name:null,kostenstelle:null,personalbereich:null,einstellungsdatum:null,mitarbeiterkreis:null,arbeitszeitplanregel:null,zeitraumVon:null,zeitraumBis:null,stichtagAuswertung:null};for(let s=0;s<e.length;s++){const i=e[s].text,l=/vom\s+(\d{2}\.\d{2}\.\d{4})\s+bis\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);l&&(t.zeitraumVon=ke(l[1]),t.zeitraumBis=ke(l[2]));const c=/bis einschließlich dem\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);if(c&&(t.stichtagAuswertung=ke(c[1])),/Personalnummer/i.test(i)&&/Kostenstelle/i.test(i)){const r=(((n=e[s+1])==null?void 0:n.text)??"").trim();let d=r.split(/\s{2,}/);d.length<3&&(d=r.split(/\s+/)),d.length>=3&&/^\d/.test(d[0])&&(t.personalnummer=d[0],t.kostenstelle=d[1],t.personalbereich=d[2])}if(/Einstellungsdatum/i.test(i)&&/Mitarbeiterkreis/i.test(i)){const r=(((a=e[s+1])==null?void 0:a.text)??"").trim();let d=r.split(/\s{2,}/);d.length<3&&(d=r.split(/\s+/)),d.length>=3&&/^\d{2}\.\d{2}\.\d{4}$/.test(d[0])&&(t.einstellungsdatum=ke(d[0]),t.mitarbeiterkreis=d[1],t.arbeitszeitplanregel=d[2])}if(/Bei Rückfragen wenden Sie sich an/i.test(i))for(let r=s+1;r<Math.min(s+8,e.length);r++){const d=e[r].text.trim();if(/^[A-ZÄÖÜ][a-zäöüß]+(?:\s[A-ZÄÖÜ][a-zäöüß]+)+$/.test(d)&&!/kanarya/i.test(d)&&!/tel/i.test(d)){t.name=d;break}}}return t}function Ms(e,t){var r;const n=[],a=[];let s=null,i=null,l=!1,c=0;for(;c<e.length;){const d=e[c].text,o=/Monat:\s*([A-Za-zäöüÄÖÜß]+)\s*-\s*(\d{4})/.exec(d);if(o){const m=o[1].trim(),f=parseInt(o[2],10),p=Dt[m]??Dt[m.replace("ä","ae")]??null;p&&(s={jahr:f,monat:p,monatKey:`${f}-${String(p).padStart(2,"0")}`},l=!0,i=null),c++;continue}if(/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.test(d)){const m=/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.exec(d),f=ke(m[1]);i={monatKey:(s==null?void 0:s.monatKey)??Gt(f),stichtag:f,glz:{},flexi:{},zeitkonten:{},raw:{}},c=zs(e,c+1,i),a.push(i);continue}let u=s;const h=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)\b/.exec(d.trim());if(h&&s){const m=parseInt(h[1],10);l&&m>=20?u=Ps(s):m<=15&&(l=!1)}const g=Pt(d,u);if(g){const m=[];let f=c+1;for(;f<e.length;){const v=e[f].text;if(/^\s*\d{4}\s+Umbuchung/.test(v)||Pt(v,s)||/Wochensumme/i.test(v)||/Monats.bersicht/i.test(v)||/Monat:\s*[A-Za-z]/i.test(v))break;const w=Ds(v);if(w){m.push(w),f++;continue}break}if(m.length&&g.zeitSpannen.push(...m),g.tagestyp==="Wochenende"||g.wochentag==="SA"||g.wochentag==="SO"){c=f;continue}(g.ist!=null||g.soll!=null||(((r=g.zeitSpannen)==null?void 0:r.length)??0)>0||g.tagestyp!=null)&&n.push(g),c=f;continue}c++}return{tage:n,monate:a}}function zs(e,t,n){let a=t;const s=/(\d{4,5}|KTAU|AZAU)\s*-\s*(.+?)\s+(-?[\d,.]+-?)(?=\s+(?:\d{4,5}|KTAU|AZAU)\s*-|\s*$)/g;for(;a<e.length;){const i=e[a].text.trim();if(/^Monat:\s/.test(i)||/^Einzelergebnisse\s/.test(i)||/^Tag\b/.test(i)||/^Wochensumme/.test(i)||/^\d{2}\s+(MO|DI|MI|DO|FR|SA|SO)\b/.test(i)||/^Übersicht für den Zeitraum/i.test(i)||/^Abwesenheitsansprüche/i.test(i))break;s.lastIndex=0;let l;for(;(l=s.exec(i))!=null;){const c=l[1],r=l[2].trim(),d=It(l[3]);n.raw[c]={beschreibung:r,wert:d},c==="0008"&&(n.glz.saldoVorperiode=d),c==="8016"&&(n.glz.saldoAktuellePeriode=d),c==="9802"&&(n.glz.umgebuchteStunden=d),c==="0005"&&(n.glz.saldoGesamt=d),c==="9803"&&(n.glz.ueberzaehligeStd=d),c==="0050"&&(n.zeitkonten.produktivstunden=d),c==="9011"&&(n.flexi.jahreskontoVorperiode=d),c==="9010"&&(n.flexi.jahreskontoSaldo=d),c==="9020"&&(n.flexi.langzeitkontoSaldo=d),c==="9203"&&(n.zeitkonten.azMonatsendeUeber216=d),c==="9207"&&(n.zeitkonten.auszahlungBav=d),c==="9205"&&(n.zeitkonten.summeAuszahlung=d)}if(a++,a-t>80)break}return a}function Pt(e,t){if(!t)return null;const n=e.trim(),a=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)(?:\s+(.+))?$/.exec(n);if(!a)return null;const s=parseInt(a[1],10),i=a[2],l=(a[3]??"").trim();let c=t.jahr,r=t.monat;const d=new Date(c,r-1,s),o={datum:Ma(d),datumDate:d.toISOString(),wochentag:i,tagNr:s,monatKey:Gt(d),wocheKey:Sa(d),zeitSpannen:[],aktivitaeten:[],ist:null,soll:null,diff:null,pause:null,tazp:null,tagestyp:null,raw:n};return l?(As(l,o),o):(o.tagestyp=["SA","SO"].includes(i)?"Wochenende":null,o)}function Ds(e){const t=e.trim(),n=/^(Stempelzeit|Reise öff\.VM\/PKW Beifahr\.|Reise öff\.VM\/PKW|Dienstreise Arbeitszeit)\s+(\d{2}:\d{2})\s+(\d{2}:\d{2})\s*$/.exec(t);return n?{aktivitaet:n[1],von:n[2],bis:n[3]}:null}function As(e,t){let n=null,a=e;for(const o of ks)if(e.startsWith(o)){n=o,a=e.slice(o.length).trim();break}n||(n=e.split(/\s+/)[0],a=e.slice(n.length).trim()),t.tagestyp=Es(n),t.aktivitaeten.push(n);const s=a.split(/\s+/).filter(Boolean),i=/^\d{2}:\d{2}$/,l=/^-?[\d,.]+-?$/;let c=0;for(;s[c]&&i.test(s[c])&&s[c+1]&&i.test(s[c+1]);)t.zeitSpannen.push({aktivitaet:n,von:s[c],bis:s[c+1]}),c+=2;const r=[];for(;c<s.length&&l.test(s[c]);){const o=It(s[c]);o!=null&&r.push(o),c++}let d=s[c];r.length>=5?([t.ist,t.soll,t.diff,t.pause]=r,d||(d=String(r[4]))):r.length===4?[t.ist,t.soll,t.diff,t.pause]=r:r.length===3?[t.ist,t.soll,t.diff]=r:r.length===2?[t.ist,t.soll]=r:r.length===1&&(t.ist=r[0]),d&&(t.tazp=String(d))}function Ps(e){if(!e)return null;let t=e.monat-1,n=e.jahr;return t<1&&(t=12,n-=1),{jahr:n,monat:t,monatKey:`${n}-${String(t).padStart(2,"0")}`}}function Es(e){return e?/^Stempelzeit$/i.test(e)?"Stempelzeit":/^Berufsschule Std\. bez$/i.test(e)||/^Berufsschule$/i.test(e)?"Berufsschule":/Dienstreise/i.test(e)||/Reise/i.test(e)?"Dienstreise":/^Urlaub$/i.test(e)?"Urlaub":/^Gleitzeit$/i.test(e)?"Gleitzeit":/Arbeitsunf.higkeit/i.test(e)?"Arbeitsunfähigkeit":/^(Neujahr|Karfreitag|Ostermontg|Ostmontg|Osterso\.|Hl\.3 Kön\.|Allerhlg|Pfingstmo|Fronleichn|TdDtEinh|TgDtEinh)$/i.test(e)?"Feiertag":e:null}function U(e,t={}){const{title:n="Bestätigen",confirmLabel:a="Bestätigen",cancelLabel:s="Abbrechen",variant:i="default"}=t;return Ts({message:e,title:n,confirmLabel:a,cancelLabel:s,variant:i,kind:"confirm"})}function Ts({message:e,title:t,confirmLabel:n,cancelLabel:a,variant:s,kind:i}){return new Promise(l=>{const c=document.activeElement,r=document.createElement("div");r.className="app-dialog-overlay",r.innerHTML=`
      <div class="app-dialog" role="dialog" aria-modal="true" aria-labelledby="app-dialog-title">
        <h3 id="app-dialog-title" class="app-dialog-title">${Ee(t)}</h3>
        <div class="app-dialog-message">${Fs(e)}</div>
        <div class="app-dialog-actions">
          ${`<button class="btn ghost app-dialog-cancel" type="button">${Ee(a)}</button>`}
          <button class="btn primary app-dialog-confirm ${s==="danger"?"is-danger":""}" type="button">${Ee(n)}</button>
        </div>
      </div>
    `,document.body.appendChild(r),requestAnimationFrame(()=>r.classList.add("is-open"));const d=r.querySelector(".app-dialog-confirm"),o=r.querySelector(".app-dialog-cancel"),u=g=>{r.classList.remove("is-open"),setTimeout(()=>{if(r.remove(),document.removeEventListener("keydown",h),c&&c.focus)try{c.focus()}catch{}l(g)},180)},h=g=>{g.key==="Escape"?(g.preventDefault(),u(!1)):g.key==="Enter"&&(g.preventDefault(),u(!0))};d==null||d.addEventListener("click",()=>u(!0)),o==null||o.addEventListener("click",()=>u(!1)),r.addEventListener("click",g=>{g.target===r&&u(!1)}),document.addEventListener("keydown",h),setTimeout(()=>d==null?void 0:d.focus(),50)})}function Ee(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Fs(e){return Ee(e).replace(/\n/g,"<br>")}const ln="better-ess-tour-completed",mt=typeof import.meta<"u"?"/better-ess/":"/",Ls=mt+"tutorial/speichern.png",Cs=mt+"tutorial/download.png",Bs=mt+"tutorial/zeitraum.png",fe=[{type:"modal",hero:!0,icon:"👋",title:"Willkommen bei Better ESS",text:"Diese App liest deinen <strong>Zeitnachweis</strong> und macht ihn auf einen Blick verständlich."},{type:"modal",hero:!0,icon:"🔒",title:"Deine Daten bleiben bei dir",text:"Dein PDF geht <strong>nicht ins Internet</strong>.<br><br>Alles läuft lokal in deinem Browser — wie eine Notizen-App. Kein Upload, kein Server, kein Konto."},{type:"highlight",target:'a[href="#/daten"]',icon:"📂",title:"Hier startet alles",text:"Hier lädst du deinen Zeitnachweis hoch.",placement:"right",autoClick:!0,onAfterClick:async()=>{window.location.hash!=="#/daten"&&(window.location.hash="#/daten"),await Te("#upload-zone",1500)}},{type:"download-modal",icon:"📥",title:'1. Im ESS auf „Zeitnachweis herunterladen" klicken',image:Cs,points:[{kind:"good",icon:"✓",text:"Den Button findest du unten rechts in der ESS-Zeitbuchungs-Ansicht."}]},{type:"download-modal",icon:"📅",title:'2. „Anderer Zeitraum" wählen — möglichst groß',image:Bs,points:[{kind:"good",icon:"✓",text:'Wähle <strong>„Anderer Zeitraum"</strong> und nimm einen möglichst großen Bereich (am besten Ausbildungsstart bis heute) — die App nutzt alle Daten für Saldo-Verlauf und Trends.'},{kind:"bad",icon:"✕",text:'Nicht „Aktuelle Woche" oder „Aktueller Monat" — dann fehlen Verlaufs-Daten.'}]},{type:"download-modal",icon:"💾",title:'3. Im PDF-Viewer auf „Speichern" — nicht „Drucken"',image:Ls,points:[{kind:"good",icon:"✓",text:"<strong>Speichern-Button</strong> (Disketten-Symbol oben rechts in der PDF-Toolbar) — speichert eine echte Text-PDF."},{kind:"bad",icon:"✕",text:'<strong>NICHT</strong> „Drucken → Microsoft Print to PDF" — dabei werden Texte als Pfade gerendert und sind nicht lesbar.'}]},{type:"highlight",target:"#upload-zone",icon:"📥",title:"Lade jetzt dein PDF hoch",text:"Zieh dein Zeitnachweis-PDF auf die Box (oder klick sie an). Erst nach dem Upload geht die Tour weiter.",placement:"top",waitForTarget:!0,waitForEvent:"better-ess:pdf-uploaded"},{type:"modal",icon:"✨",title:"Geschafft!",text:"Dein PDF ist eingelesen. Jetzt zeig ich dir die Funktionen — anhand deiner echten Daten.",onNext:async()=>{window.location.hash="#/",await Te(".saldo-value",1500)}},{type:"highlight",target:".saldo-value",icon:"⚖️",title:"Dein aktueller Saldo",text:"Plus oder Minus auf einen Blick. Tagesaktuell.",placement:"right",waitForTarget:!0},{type:"highlight",target:"#saldo-chart",icon:"📈",title:"Saldo-Verlauf",text:"Hover über die Punkte für Details. Zeitraum oben rechts umschaltbar.",placement:"top",waitForTarget:!0},{type:"highlight",target:".tag-row .ist-display",icon:"⏱️",title:"Stunden direkt kopieren",text:"Klick auf <strong>H</strong> oder <strong>M</strong> — kopiert den Wert in deine Zwischenablage. Praktisch fürs IHK-Berichtsheft.",placement:"left",waitForTarget:!0},{type:"highlight",target:".alert",icon:"⚠️",title:"Auffälligkeiten",text:"Fehlende Tage, falsche BS-Stunden, Pausen-Abzug — alles automatisch erkannt.",placement:"left",optional:!0,waitForTarget:!0,timeoutMs:1200},{type:"highlight",target:'a[href="#/profil"]',icon:"👤",title:"Profil",text:"Über 18? Pausen-Regel und Mail-Empfänger anpassen.",placement:"right"},{type:"highlight",target:'a[href="#/fahrtgeld"]',icon:"🚌",title:"Fahrgelderstattung",text:"Hier generierst du deine monatliche Fahrgeld-Excel mit deinen erkannten Berufsschultagen.",placement:"right",autoClick:!0,onAfterClick:async()=>{window.location.hash!=="#/fahrtgeld"&&(window.location.hash="#/fahrtgeld"),await Te("#fahrtgeld-dropzone, #btn-template-replace, .fahrtgeld-generate-card",2e3)}},{type:"highlight",target:"#fahrtgeld-dropzone, .fahrtgeld-generate-card",icon:"📥",title:"Vorlage einmalig hochladen",text:'Eine bestehende Fahrgeld-Excel hier hochladen — Name, Personalnummer, Haltestellen und Tagessatz werden automatisch ausgelesen. Tour wartet auf den Upload (oder oben auf „Überspringen", um die Tour zu beenden).',placement:"top",waitForTarget:!0,timeoutMs:2500,waitForEvent:"better-ess:fahrgeld-template-uploaded"},{type:"highlight",target:".btn-generate-big",icon:"✅",title:"Excel generieren",text:"Monat unten auswählen, dann hier klicken. Du bekommst eine fertig ausgefüllte Excel zum Download — mit deinen Berufsschultagen, Datum und Unterschrift.",placement:"bottom",waitForTarget:!0,timeoutMs:1500,optional:!0},{type:"highlight",target:".btn-mail-big",icon:"✉️",title:"E-Mail an die Personalabteilung",text:"Öffnet Outlook mit fertig vorausgefülltem Empfänger, Betreff und Text. Excel-Anhang aus dem Download-Ordner musst du noch manuell dranhängen.",placement:"bottom",waitForTarget:!0,timeoutMs:1500,optional:!0},{type:"modal",icon:"🚀",title:"Bereit!",text:"Du kennst alle Funktionen. Tour erneut starten? Button am Ende der <strong>Daten</strong>-Seite."}],Et=fe.findIndex(e=>e.icon==="✨");let A=null,ce=null;function on(){A===null&&(pt(),A={idx:0},Q())}function _s(e){return e?!1:!localStorage.getItem(ln)}function Ws(){localStorage.setItem(ln,"1")}function Vs(){return A!==null}function pt(){document.querySelectorAll(".tour-blur-frame, .tour-popover, .tour-pointer, .tour-highlight-border").forEach(e=>e.remove()),ce&&(ce(),ce=null),A=null}function Pe(e){const t=document.querySelector(".tour-blur-frame.full"),n=[document.querySelector('.tour-blur-frame[data-side="top"]'),document.querySelector('.tour-blur-frame[data-side="left"]'),document.querySelector('.tour-blur-frame[data-side="right"]'),document.querySelector('.tour-blur-frame[data-side="bottom"]')];if(!e){n.forEach(p=>{p&&(p.style.opacity="0")});let g=t;!g?(g=document.createElement("div"),g.className="tour-blur-frame full",document.body.appendChild(g)):g.style.opacity="1";const f=document.querySelector(".tour-highlight-border");f&&(f.style.opacity="0");return}t&&(t.style.opacity="0");const a=e.getBoundingClientRect(),s=8,i=Math.max(0,a.left-s),l=Math.max(0,a.top-s),c=a.width+s*2,r=a.height+s*2,d=window.innerWidth,o=window.innerHeight,u={top:{top:0,left:0,width:d,height:l},left:{top:l,left:0,width:i,height:r},right:{top:l,left:i+c,width:d-(i+c),height:r},bottom:{top:l+r,left:0,width:d,height:o-(l+r)}};for(const[g,m]of Object.entries(u)){let f=n[Object.keys(u).indexOf(g)];f||(f=document.createElement("div"),f.className="tour-blur-frame",f.dataset.side=g,document.body.appendChild(f)),f.style.top=m.top+"px",f.style.left=m.left+"px",f.style.width=Math.max(0,m.width)+"px",f.style.height=Math.max(0,m.height)+"px",f.style.opacity=m.width<=0||m.height<=0?"0":"1"}let h=document.querySelector(".tour-highlight-border");h||(h=document.createElement("div"),h.className="tour-highlight-border",document.body.appendChild(h)),h.style.top=l+"px",h.style.left=i+"px",h.style.width=c+"px",h.style.height=r+"px",h.style.opacity="1",h.style.display=""}function bt(){let e=document.querySelector(".tour-pointer");return e||(e=document.createElement("div"),e.className="tour-pointer",e.innerHTML=`
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
      </svg>`,e.style.top=window.innerHeight/2+"px",e.style.left=window.innerWidth/2+"px",document.body.appendChild(e)),e}function Ks(e){const t=bt(),n=e.getBoundingClientRect(),a=n.left+n.width*.5,s=n.top+n.height*.5;t.style.top=s-6+"px",t.style.left=a-9+"px"}function Tt(){var e;(e=document.querySelector(".tour-pointer"))==null||e.remove()}async function Os(e){const t=bt();t.classList.add("tour-pointer-clicking"),await new Promise(n=>setTimeout(n,280)),t.classList.remove("tour-pointer-clicking")}async function Te(e,t=1500){const n=Date.now();for(;Date.now()-n<t;){const a=document.querySelector(e);if(a)return a;await new Promise(s=>setTimeout(s,100))}return null}async function Q(){var c,r,d;if(!A)return;const e=A.overrideStep||fe[A.idx];if(A.overrideStep=null,!e){tt();return}if(ce&&(ce(),ce=null),e.type==="download-modal")return Tt(),Pe(null),Is(e);let t=null;if(e.type==="highlight"){if(t=e.waitForTarget?await Te(e.target,e.timeoutMs??1500):document.querySelector(e.target),!t&&e.fallback){const o=e.fallback;if(o.onBefore)try{await o.onBefore()}catch(u){console.warn("tour fallback onBefore error:",u)}return A.overrideStep=o,Q()}if(!t&&e.optional)return A.idx++,Q();if(!t&&e.waitForTarget&&!e.fallback)return console.warn("[tour] target not found, skipping:",e.target),A.idx++,Q();if(t){try{t.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}catch{}await new Promise(o=>setTimeout(o,250)),Pe(t),bt(),requestAnimationFrame(()=>Ks(t))}else Pe(null)}else Tt(),Pe(null);let n=document.querySelector(".tour-popover");n||(n=document.createElement("div"),n.className="tour-popover",n.style.visibility="hidden",document.body.appendChild(n)),n.classList.remove("tour-popover-large","tour-popover-hero"),e.hero&&n.classList.add("tour-popover-hero"),t?n.classList.remove("center"):n.classList.add("center");const a=A.idx===0,s=A.idx===fe.length-1,i=!!e.waitForEvent,l=i?"⏳ Warte auf Upload …":s?"Fertig":"Weiter →";if(n.innerHTML=`
    <div class="tour-popover-header">
      <span class="tour-popover-step">${A.idx+1} / ${fe.length}</span>
      <button class="tour-skip" type="button" aria-label="Tour beenden">Überspringen</button>
    </div>
    <div class="tour-popover-icon">${e.icon||""}</div>
    <h3>${e.title}</h3>
    <div class="tour-popover-body">${e.text}</div>
    <div class="tour-popover-actions">
      <button class="btn tour-prev" type="button" ${a?'disabled style="opacity:0.4;cursor:default"':""}>← Zurück</button>
      <button class="btn primary tour-next" type="button" ${i?'disabled style="opacity:0.5;cursor:default"':""}>${l}</button>
    </div>`,t)n.style.opacity="0",requestAnimationFrame(()=>{Hs(n,t,e.placement||"right"),n.style.visibility="visible",n.style.opacity="1"});else{n.style.top=n.style.left=n.style.right=n.style.bottom="",n.style.opacity="0",n.style.visibility="visible";const o=document.querySelector(".tour-blur-frame.full");requestAnimationFrame(()=>{o&&(o.style.opacity="1"),n.style.opacity="1"})}if((c=n.querySelector(".tour-skip"))==null||c.addEventListener("click",()=>{tt()}),a||(r=n.querySelector(".tour-prev"))==null||r.addEventListener("click",async()=>{A.idx=Math.max(0,A.idx-1),await Q()}),!i)(d=n.querySelector(".tour-next"))==null||d.addEventListener("click",async()=>{if(e.autoClick&&t){await Os();try{const o=t.getAttribute("href");o&&o.startsWith("#/")?window.location.hash=o.slice(1):t.click()}catch(o){console.warn("tour autoClick error:",o)}if(e.onAfterClick)try{await e.onAfterClick()}catch(o){console.warn("tour onAfterClick error:",o)}else await new Promise(o=>setTimeout(o,350))}else if(e.onNext)try{await e.onNext()}catch(o){console.warn("tour onNext error:",o)}A.idx++,await Q()});else{const o=A.idx,u=o<Et,h=async()=>{pt(),document.querySelectorAll(".upload-modal-overlay").forEach(g=>g.remove()),await new Promise(g=>setTimeout(g,300)),A={idx:u?Et:o+1},await Q()};document.addEventListener(e.waitForEvent,h,{once:!0}),ce=()=>document.removeEventListener(e.waitForEvent,h)}}function Is(e){var a,s,i;let t=document.querySelector(".tour-popover");t||(t=document.createElement("div"),t.className="tour-popover",t.style.visibility="hidden",document.body.appendChild(t)),t.classList.add("tour-popover-large","center"),t.style.visibility="visible";const n=A.idx===0;A.idx,fe.length-1,t.innerHTML=`
    <div class="tour-popover-header">
      <span class="tour-popover-step">${A.idx+1} / ${fe.length}</span>
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
    </div>`,t.style.top=t.style.left=t.style.right=t.style.bottom="",t.style.opacity="1",(a=t.querySelector(".tour-skip"))==null||a.addEventListener("click",()=>{tt()}),n||(s=t.querySelector(".tour-prev"))==null||s.addEventListener("click",async()=>{A.idx=Math.max(0,A.idx-1),await Q()}),(i=t.querySelector(".tour-next"))==null||i.addEventListener("click",async()=>{A.idx++,await Q()})}function Hs(e,t,n){const a=t.getBoundingClientRect(),s=16,i=e.offsetWidth||360,l=e.offsetHeight||220,c=window.innerWidth,r=window.innerHeight,d=[n,"right","bottom","left","top"];let o=null;for(const g of d)if((()=>{switch(g){case"right":return a.right+s+i<=c;case"left":return a.left-s-i>=0;case"bottom":return a.bottom+s+l<=r;case"top":return a.top-s-l>=0}})()){o=g;break}o=o||n;let u,h;switch(o){case"right":u=a.top+a.height/2-l/2,h=a.right+s;break;case"left":u=a.top+a.height/2-l/2,h=a.left-i-s;break;case"bottom":u=a.bottom+s,h=a.left+a.width/2-i/2;break;case"top":default:u=a.top-l-s,h=a.left+a.width/2-i/2;break}u=Math.max(s,Math.min(r-l-s,u)),h=Math.max(s,Math.min(c-i-s,h)),e.style.position="fixed",e.style.top=u+"px",e.style.left=h+"px",e.style.right="auto",e.style.bottom="auto",e.style.transform=""}function tt(){pt(),Ws()}async function Rs({root:e}){var i;const t=await Qt(),n=await J();e.innerHTML=`
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
        ${t.length===0?'<div class="empty-state"><div class="empty-state-icon">📭</div><p>Noch keine Uploads</p></div>':dn(t)}
      </div>
    </div>

    <div class="card" style="margin-top: 24px; text-align: center; background: transparent; border-style: dashed;">
      <p style="color: var(--fg-muted); font-size: 13px; margin: 0 0 12px;">Brauchst du nochmal eine kurze Tour durch die App?</p>
      <button class="btn" id="btn-tour-restart" type="button">🎯 Tour erneut starten</button>
    </div>
  `;const a=e.querySelector("#upload-zone"),s=e.querySelector("#file-input");a.addEventListener("click",()=>s.click()),a.addEventListener("dragover",l=>{l.preventDefault(),a.classList.add("drag")}),a.addEventListener("dragleave",()=>a.classList.remove("drag")),a.addEventListener("drop",async l=>{var r;l.preventDefault(),a.classList.remove("drag");const c=(r=l.dataTransfer.files)==null?void 0:r[0];c&&await Lt(c,e,n)}),s.addEventListener("change",async l=>{var r;const c=(r=l.target.files)==null?void 0:r[0];c&&await Lt(c,e,n)}),e.querySelector("#btn-export").addEventListener("click",qs),e.querySelector("#btn-import").addEventListener("click",()=>e.querySelector("#import-input").click()),e.querySelector("#import-input").addEventListener("change",Zs),e.querySelector("#btn-clear-parsed").addEventListener("click",js),e.querySelector("#btn-reset").addEventListener("click",Us),(i=e.querySelector("#btn-tour-restart"))==null||i.addEventListener("click",()=>on()),Ns()}let Ft=!1;function Ns(){Ft||(Ft=!0,document.body.addEventListener("click",e=>{if(e.target.closest(".lightbox-overlay, .upload-modal-overlay"))return;const t=e.target.closest("img.zoomable");t&&cn(t.src,t.alt)}))}function cn(e,t){const n=document.createElement("div");n.className="lightbox-overlay",n.innerHTML=`
    <button class="lightbox-close" aria-label="Schließen" title="Schließen (Esc)">×</button>
    <img src="${e}" alt="${t||""}" />
  `,document.body.appendChild(n);const a=()=>{n.remove(),document.removeEventListener("keydown",s)},s=i=>{i.key==="Escape"&&a()};n.addEventListener("click",i=>{(i.target===n||i.target.classList.contains("lightbox-close"))&&a()}),document.addEventListener("keydown",s)}async function js(){await U("PDF-abgeleitete Daten (Tage, Monate, Uploads) werden gelöscht. Profil und Mail-Vorlagen bleiben erhalten.",{title:"PDF-Daten löschen?",confirmLabel:"Löschen",variant:"danger"})&&(await en(),T("Daten gelöscht. Profil bleibt."),setTimeout(()=>location.reload(),600))}function dn(e){return`
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
            <td>${x(Gs(t.hochladeDatum))}</td>
            <td>${x(t.dateiname||"—")}</td>
            <td>${t.zeitraumVon?x(F(new Date(t.zeitraumVon))):"—"} – ${t.zeitraumBis?x(F(new Date(t.zeitraumBis))):"—"}</td>
            <td>${t.stichtagAuswertung?x(F(new Date(t.stichtagAuswertung))):"—"}</td>
            <td class="num">${t.tageCount??"—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}async function Lt(e,t,n){var i,l,c,r;const a=t.querySelector("#upload-status"),s=t.querySelector("#upload-zone");if(e.type!=="application/pdf"&&!/\.pdf$/i.test(e.name)){ye({type:"error",title:"Falscher Dateityp",desc:`<strong>${x(e.name)}</strong> ist keine PDF-Datei.`,hint:"Lade eine PDF-Datei hoch — den Zeitnachweis aus dem ESS über den <strong>Speichern-Button</strong> (Disketten-Symbol oben rechts im PDF-Viewer)."});return}if(e.size>50*1024*1024){ye({type:"error",title:"Datei zu groß",desc:`<strong>${x(e.name)}</strong> ist ${(e.size/1024/1024).toFixed(1)} MB groß.`,hint:"ESS-Zeitnachweise sind normalerweise unter 1 MB. Bitte überprüfe die Datei."});return}s.style.pointerEvents="none",s.style.opacity="0.6",a.innerHTML=`
    <div class="alert severity-info">
      <div class="loader-ring" style="width: 24px; height: 24px; border-width: 2px;"></div>
      <div class="alert-body">
        <div class="alert-title">PDF wird verarbeitet…</div>
        <p style="margin: 4px 0; font-size: 13px;"><strong>${x(e.name)}</strong> — das kann bei großen PDFs einige Sekunden dauern.</p>
      </div>
    </div>`;try{const d=await e.arrayBuffer(),o=await xs(d);if(o.tage.length===0&&!o.meta.zeitraumVon){s.style.pointerEvents="",s.style.opacity="",a.innerHTML="",ye({type:"error",title:"Diese PDF ist nicht kompatibel",desc:'Im PDF wurden keine Texte gefunden. Das passiert, wenn das PDF über „Drucken → Als PDF speichern" (z.B. „Microsoft Print to PDF") erzeugt wurde — dabei werden Texte als Vektorpfade gerendert und können nicht ausgelesen werden.',hint:'Lade dein PDF direkt aus dem ESS über den <strong>Speichern-Button</strong> herunter (Disketten-Symbol oben rechts im PDF-Viewer) — nicht über „Drucken".',screenshot:!0,producer:(i=o.meta)==null?void 0:i.producer}),We("PDF enthält keinen extrahierbaren Text.");return}const u=await Me(),h=u==null?void 0:u.personalnummer,g=o.meta.personalnummer;if(h&&g&&h!==g){const y=(u==null?void 0:u.name)||`Personalnr. ${h}`,_=o.meta.name||`Personalnr. ${g}`;if(!await U(`Das hochgeladene PDF gehört zu einem anderen Azubi als die bisher gespeicherten Daten:

Bisher: ${y}
Jetzt:  ${_}

Wenn du fortfährst, werden alle alten Tagesdaten gelöscht und durch die neuen ersetzt. (Profil-Einstellungen wie Theme und Mail-Vorlagen bleiben erhalten.)`,{title:"Anderer Azubi erkannt",confirmLabel:"Daten ersetzen",variant:"danger"})){s.style.pointerEvents="",s.style.opacity="",a.innerHTML=`
          <div class="alert severity-info">
            <div class="alert-body">
              <div class="alert-title">Upload abgebrochen</div>
              <p style="margin: 4px 0; font-size: 13px;">Es wurden keine Daten verändert. Lade das richtige PDF (für ${x(y)}) erneut hoch.</p>
            </div>
          </div>`;return}await en();const C=await J();await Be({...C,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1}})}const m=await Ua(o.tage,o.monate,o.meta.stichtagAuswertung);(m.skippedTage>0||m.skippedMonate>0)&&console.info(`[upload] ${m.skippedTage} Tage und ${m.skippedMonate} Monate uebersprungen — bestehende Daten haben juengeren Stichtag.`),await Ga({dateiname:e.name,personalnummer:o.meta.personalnummer??null,name:o.meta.name??null,zeitraumVon:((l=o.meta.zeitraumVon)==null?void 0:l.toISOString())??null,zeitraumBis:((c=o.meta.zeitraumBis)==null?void 0:c.toISOString())??null,stichtagAuswertung:((r=o.meta.stichtagAuswertung)==null?void 0:r.toISOString())??null,tageCount:o.tage.length,monateCount:o.monate.length});const f=await te(),p=nn(f),v={...Yt(),...n};(p.wochentageWoechentlich.length>0||p.wochentage14Taegig.length>0)&&(v.berufsschulMuster=p),await Be(v),a.innerHTML="",Vs()||ye({type:"success",title:"PDF erfolgreich eingelesen",desc:o.meta.zeitraumVon?`Zeitraum: ${F(o.meta.zeitraumVon)} – ${F(o.meta.zeitraumBis)}`:"Daten wurden erfolgreich verarbeitet.",stats:[{num:o.tage.length,label:"Tage"},{num:o.monate.length,label:"Monatsübersichten"}]}),T(`PDF verarbeitet: ${o.tage.length} Tage.`),document.dispatchEvent(new CustomEvent("better-ess:pdf-uploaded",{detail:{tageCount:o.tage.length,monateCount:o.monate.length}}));const w=await Qt();t.querySelector("#uploads-list").innerHTML=dn(w)}catch(d){console.error(d),a.innerHTML="",ye({type:"error",title:"Fehler beim Parsen",desc:x(d.message||String(d)),hint:'Prüfe, ob es sich um einen ESS-Zeitnachweis im richtigen Format handelt. Lade dein PDF über den Speichern-Button herunter, nicht über „Drucken".',screenshot:!0}),We("PDF konnte nicht gelesen werden.")}finally{s.style.pointerEvents="",s.style.opacity=""}}async function qs(){try{const e=await Ya(),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),a=document.createElement("a"),s=new Date().toISOString().slice(0,10);a.href=n,a.download=`zeitnachweis-backup-${s}.json`,a.click(),URL.revokeObjectURL(n),T("Backup heruntergeladen.")}catch(e){We(`Export fehlgeschlagen: ${e.message}`)}}async function Zs(e){var n;const t=(n=e.target.files)==null?void 0:n[0];if(t)try{const a=await t.text(),s=JSON.parse(a);if(!await U("Existierende Daten werden vom Backup überschrieben.",{title:"Backup importieren?",confirmLabel:"Importieren",variant:"danger"}))return;await Qa(s),T("Backup erfolgreich importiert. Seite wird neu geladen…"),setTimeout(()=>location.reload(),800)}catch(a){We(`Import fehlgeschlagen: ${a.message}`)}}async function Us(){await U("Alle Daten (Tage, Monate, Profil, Vorlagen, Mail-Vorlagen, Fahrgeld-Vorlage) werden endgültig gelöscht. Das lässt sich nicht rückgängig machen.",{title:"ALLE Daten löschen?",confirmLabel:"Weiter zur Sicherheitsfrage",variant:"danger"})&&await U("Letzte Warnung — wirklich alle Daten löschen?",{title:"Sicher?",confirmLabel:"Endgültig löschen",variant:"danger"})&&(await Xa(),T("Alle Daten gelöscht."),setTimeout(()=>location.reload(),600))}function Gs(e){if(!e)return"—";const t=new Date(e);return t.toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"})+" "+t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}function ye(e){const{type:t,title:n,desc:a,hint:s,screenshot:i,stats:l,producer:c}=e,r=document.createElement("div");r.className="upload-modal-overlay";const d=`
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
    </div>`,document.body.appendChild(r);const f=()=>{r.style.animation="upload-modal-fade 150ms ease-out reverse",setTimeout(()=>r.remove(),150),document.removeEventListener("keydown",p)},p=v=>{v.key==="Escape"&&f()};document.addEventListener("keydown",p),r.addEventListener("click",v=>{if(v.target===r){f();return}if(v.target.closest(".upload-modal-close-btn")){f();return}if(v.target.closest(".upload-modal-actions a, .upload-modal-actions button")){f();return}const w=v.target.closest("img.zoomable");w&&cn(w.src,w.alt)})}const Ct={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag"};async function Js({root:e}){var s,i,l,c,r;const t=await J(),n=t.berufsschulMuster??{},a=(((s=n.wochentageWoechentlich)==null?void 0:s.length)??0)>0||(((i=n.wochentage14Taegig)==null?void 0:i.length)??0)>0;e.innerHTML=`
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
          <input type="email" name="zeitwirtschaftEmail" value="${Bt(t.zeitwirtschaftEmail)}" />
        </div>
        <div class="form-group">
          <label>Anrede in Mails</label>
          <input type="text" name="zeitwirtschaftAnrede" value="${Bt(t.zeitwirtschaftAnrede)}" placeholder="Frau Kanarya" />
        </div>
      </div>

      <div class="card" style="grid-column: 1 / -1;">
        <h2>Berufsschul-Rhythmus <span style="font-size: 11px; font-weight: 500; color: var(--fg-subtle); text-transform: uppercase; letter-spacing: 0.05em; margin-left: 8px;">Automatisch erkannt</span></h2>
        ${a?`
          <div class="tag-detail">
            <div class="tag-detail-label">Wöchentlich</div>
            <div class="tag-detail-value"><strong>${((l=n.wochentageWoechentlich)==null?void 0:l.map(d=>Ct[d]).join(", "))||"—"}</strong></div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Alle 2 Wochen</div>
            <div class="tag-detail-value"><strong>${((c=n.wochentage14Taegig)==null?void 0:c.map(d=>Ct[d]).join(", "))||"—"}</strong>${n.referenzDatum14Taegig?` <span class="hint">(Anker: ${F(new Date(n.referenzDatum14Taegig))})</span>`:""}</div>
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
  `,e.querySelector("#profil-form").addEventListener("submit",async d=>{var h,g;d.preventDefault();const o=new FormData(d.target),u={...t,ueber18:o.get("ueber18")==="on",zeitwirtschaftEmail:((h=o.get("zeitwirtschaftEmail"))==null?void 0:h.trim())||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:((g=o.get("zeitwirtschaftAnrede"))==null?void 0:g.trim())||"Frau Kanarya"};await Be(u),T("Profil gespeichert.")})}function Bt(e){return String(e??"").replace(/"/g,"&quot;")}async function Xs({params:e,root:t}){var d,o,u,h;const n=e.datum,a=await b.tage.get(n),s=await J();if(!a){t.innerHTML=`<h1 class="view-title">Tag nicht gefunden</h1><p>Für ${n} liegen keine Daten vor.</p><a href="#/" class="btn">← Dashboard</a>`;return}const i=L(n),l=a.tagestyp==="Stempelzeit"?Nt(a,s):null,c=Re(i,s.berufsschulMuster),r=Ht(a.zeitSpannen);t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/kalender/${n.slice(0,7)}" class="btn sm">← Zum Monat</a>
    </div>
    <h1 class="view-title">${Ut(i)}</h1>
    <p class="view-subtitle">${a.tagestyp??"Kein Typ"} · KW ${(d=a.wocheKey)==null?void 0:d.split("-")[1]}</p>

    ${r?`
      <div class="card kommen-gehen-hero" style="margin-bottom: 24px;">
        <div class="hint" style="text-transform: uppercase; letter-spacing: 0.05em; font-size: 11px; margin-bottom: 10px;">Tages-Rahmen</div>
        ${tn(r,{size:32})}
      </div>
    `:""}

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${a.ist!=null?a.ist.toFixed(2).replace(".",",")+"h":"—"}</div>
        <div class="hint">= ${a.ist!=null?Ce(a.ist):"—"}</div>
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
                <div class="tag-detail-label">${we(g.aktivitaet??"Stempelzeit")}</div>
                <div class="tag-detail-value tabular">${g.von??"—"} – ${g.bis??"—"}</div>
              </div>
            `).join(""):'<p class="hint">Keine Stempelzeiten für diesen Tag.</p>'}
      </div>

      <div class="card">
        <h2>Klassifikation</h2>
        <div class="tag-detail">
          <div class="tag-detail-label">Tagestyp</div>
          <div class="tag-detail-value">${a.tagestyp?`<span class="pill ${Ys(a.tagestyp)}">${we(a.tagestyp)}</span>`:"—"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Laut Profil</div>
          <div class="tag-detail-value">${c?"🎓 Berufsschultag erwartet":"Regulärer Werktag"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">TAZP-Code</div>
          <div class="tag-detail-value"><code>${we(a.tazp??"—")}</code></div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Monat</div>
          <div class="tag-detail-value">${we(a.monatKey)}</div>
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
              <div class="alert-body">${we(l.warnung)}</div>
            </div>
          `:""}
        </div>
      `:""}
    </div>
  `}function Ys(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function we(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const Qs=[{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:180,label:"6 Monate"},{key:365,label:"1 Jahr"},{key:730,label:"2 Jahre"},{key:"alles",label:"Alles"}];function ei(e){return Qs.filter(t=>t.key==="alles"||t.key<e)}async function ti({root:e}){var l;const[t,n]=await Promise.all([te(),Ie()]);if(!t.length){e.innerHTML='<h1 class="view-title">Analytics</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a=ei(t.length);let s=a.some(c=>c.key===30)?30:"alles";e.innerHTML=`
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
  `;const i=()=>s==="alles"?t:t.slice(-s);requestAnimationFrame(()=>{Aa(e.querySelector("#c-saldo"),n),La(e.querySelector("#c-wochen"),t),wt(e.querySelector("#c-startend"),i()),Ta(e.querySelector("#c-wochentag"),t),Ea(e.querySelector("#c-pausen"),t),Fa(e.querySelector("#c-donut"),t),Pa(e.querySelector("#c-alle-tage"),t.slice(-30))}),(l=e.querySelector("#startend-zeitraum"))==null||l.addEventListener("click",c=>{const r=c.target.closest("button[data-key]");if(!r||r.disabled)return;const d=r.getAttribute("data-key"),o=d==="alles"?"alles":parseInt(d,10);o!==s&&(s=o,e.querySelectorAll("#startend-zeitraum button").forEach(u=>u.classList.toggle("active",u===r)),wt(e.querySelector("#c-startend"),i()))})}function ni(e){return String(e??"").replace(/"/g,"&quot;")}async function Xe({params:e,root:t}){const[n,a,s,i,l]=await Promise.all([te(),Ie(),J(),Me(),He()]),c=Object.fromEntries(l.map(k=>[k.key,k]));if(!n.length){t.innerHTML=`
      <h1 class="view-title">Kalender</h1>
      <p class="view-subtitle">Noch keine Daten geladen.</p>
      <a href="#/daten" class="btn primary">Zum Upload</a>`;return}const r=[...new Set(n.map(k=>k.monatKey))].sort(),d=e.yyyymm,o=r.includes(d)?d:r[r.length-1],u=n.filter(k=>k.monatKey===o),h=[...new Set(u.map(k=>k.wocheKey))].sort(),g=e.yyyykw,m=h.includes(g)?g:null,f=r.indexOf(o),p=f>0?r[f-1]:null,v=f<r.length-1?r[f+1]:null,w=nt(o),y=a.find(k=>k.monatKey===o),_=jt(n,a),S=_.filter(k=>k.monatKey===o),C=i!=null&&i.stichtagAuswertung?new Date(i.stichtagAuswertung):new Date,I=Ne(n,s,C),M=I.filter(k=>k.datum.startsWith(o)),K=ii({aktiverMonatKey:o,monatLabel:w,prevMonatKey:p,nextMonatKey:v,tageAnzahl:u.length,warnungenAnzahl:M.length});m?await si({root:t,switcherHtml:K,aktiverMonatKey:o,aktiveWocheKey:m,vollKurve:_,alleWarnungen:I,profil:s,vorlagenOverrides:c}):await ai({root:t,switcherHtml:K,monatLabel:w,tageMonat:u,monatsKurve:S,monatUebersicht:y,monatsWarnungen:M,aktiverMonatKey:o,profil:s,vorlagenOverrides:c})}async function ai({root:e,switcherHtml:t,monatLabel:n,tageMonat:a,monatsKurve:s,monatUebersicht:i,monatsWarnungen:l,aktiverMonatKey:c,profil:r,vorlagenOverrides:d}){e.innerHTML=`
    ${t}

    ${i?ri(i):""}

    <div class="card" style="margin-bottom: 24px;">
      <h2>Saldo-Verlauf</h2>
      <div class="chart-wrap tall"><canvas id="chart-kalender-monat"></canvas></div>
    </div>

    ${l.length?`
      <div class="card" style="margin-bottom: 24px;">
        <h2>Auffälligkeiten</h2>
        ${l.map(o=>un(o,r,d)).join("")}
      </div>
    `:""}

    <div class="card" style="margin-bottom: 24px;">
      <h2 style="margin-bottom: 16px;">Wochen</h2>
      ${li(s,c)}
    </div>

    <div class="card">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Tage</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">H/M zum Kopieren</span>
      </div>
      <div id="tage-liste-kalender">${je(s.slice().reverse(),{warnungen:l})}</div>
    </div>
  `,s.length&&(requestAnimationFrame(()=>{const o=e.querySelector("#chart-kalender-monat");o&&ct(o,s)}),ft(e.querySelector("#tage-liste-kalender")))}async function si({root:e,switcherHtml:t,aktiverMonatKey:n,aktiveWocheKey:a,vollKurve:s,alleWarnungen:i,profil:l,vorlagenOverrides:c}){var v;const r=s.filter(w=>w.wocheKey===a),d=r.reduce((w,y)=>w+Ke(y),0),o=r.reduce((w,y)=>w+ot(y),0),u=+(d-o).toFixed(2),h=w=>w>.05?"var(--success)":w<-.05?"var(--danger)":"var(--fg)",g=i.filter(w=>r.some(y=>y.datum===w.datum)),m=(v=r[0])==null?void 0:v.datum,f=m?Oe(L(m)):"",p=a.split("-")[1]||"?";e.innerHTML=`
    ${t}

    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 12px;">
      <a href="#/kalender/${n}" class="btn sm">← Zur Monatsansicht</a>
    </div>

    <h2 style="margin: 0 0 4px;">KW ${x(p)}</h2>
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
          <h2>Auffälligkeiten in KW ${x(p)}</h2>
          ${g.map(w=>un(w,l,c)).join("")}
        </div>
      `:""}

      <div class="card">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Tage</h2>
          <span style="color: var(--fg-muted); font-size: 13px;">H/M zum Kopieren</span>
        </div>
        <div id="tage-liste-kalender">${je(r,{warnungen:g})}</div>
      </div>
    `}
  `,r.length&&(requestAnimationFrame(()=>{const w=e.querySelector("#chart-kalender-woche");w&&ct(w,r)}),ft(e.querySelector("#tage-liste-kalender")))}function ii({aktiverMonatKey:e,monatLabel:t,prevMonatKey:n,nextMonatKey:a,tageAnzahl:s,warnungenAnzahl:i}){const l=n?nt(n):"",c=a?nt(a):"";return`
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
    </div>`}function ri(e){var i,l,c;const t=((i=e.glz)==null?void 0:i.saldoGesamt)??0,n=((l=e.glz)==null?void 0:l.saldoVorperiode)??0,a=((c=e.glz)==null?void 0:c.saldoAktuellePeriode)??0,s=r=>r>.05?"var(--success)":r<-.05?"var(--danger)":"var(--fg)";return`
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
    </div>`}function li(e,t){var s;const n={};for(const i of e)n[s=i.wocheKey]??(n[s]={key:i.wocheKey,tage:[],ist:0,soll:0}),n[i.wocheKey].tage.push(i),n[i.wocheKey].ist+=Ke(i),n[i.wocheKey].soll+=ot(i);const a=Object.keys(n).sort();return a.length?a.map(i=>{var h;const l=n[i],c=+(l.ist-l.soll).toFixed(2),r=c>.05?"var(--success)":c<-.05?"var(--danger)":"var(--fg-muted)",d=(h=l.tage.slice().sort((g,m)=>g.datum.localeCompare(m.datum))[0])==null?void 0:h.datum,o=d?Oe(L(d)):"",u=i.split("-")[1]||"?";return`
      <a href="#/kalender/${t}/${i}" class="list-item" style="text-decoration: none; color: inherit;">
        <div class="tabular" style="font-size: 16px; font-weight: 600; color: var(--fg-muted); min-width: 80px;">KW ${x(u)}</div>
        <div>
          <div class="list-item-title tabular">${x(o)}</div>
          <div class="list-item-sub">${l.tage.length} Tage · Ist ${l.ist.toFixed(2).replace(".",",")}h · Soll ${l.soll.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="tabular" style="font-weight: 600; font-size: 16px; color: ${r};">${se(c,{signed:!0})}</div>
        <div style="color: var(--fg-subtle);">→</div>
      </a>`}).join(""):'<p style="color: var(--fg-muted);">Keine Wochen.</p>'}function un(e,t,n){const a=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";let s=null;if(e.mailVorlageKey&&t){const i=ze(e.mailVorlageKey,n==null?void 0:n[e.mailVorlageKey]);if(i){const l=gt(t,e);s=ht(t,i,l)}}return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${a}</div>
      <div class="alert-body">
        <div class="alert-title">${x(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${x(e.beschreibung)}</p>
        <div class="alert-actions">
          ${s?`<a href="${ni(s)}" class="btn-mail-medium"><img src="outlook-logo.png" alt="" class="outlook-logo-medium" />E-Mail</a>`:""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
        </div>
      </div>
    </div>`}function nt(e){const[t,n]=e.split("-"),a=new Date(parseInt(t,10),parseInt(n,10)-1,1);return E(a,"MMMM yyyy",{locale:G})}const oi={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};async function Ye({params:e,root:t}){const[n,a,s]=await Promise.all([te(),J(),Me()]),i=ci(e);if(!n.length){t.innerHTML=`
      <h1 class="view-title">Kalender · ${x(i.label)}</h1>
      <p class="view-subtitle">Noch keine Daten geladen.</p>
      <a href="#/daten" class="btn primary">Zum Upload</a>`;return}const l=n.filter(i.predicate).sort((h,g)=>h.datum.localeCompare(g.datum)),c=s!=null&&s.stichtagAuswertung?new Date(s.stichtagAuswertung):new Date,d=Ne(n,a,c).filter(h=>l.some(g=>g.datum===h.datum)),o=l.reduce((h,g)=>h+(g.ist??0),0),u=o>0?` · ${o.toFixed(2).replace(".",",")}h kumuliert`:"";t.innerHTML=`
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
        <div id="tagestyp-tage-liste">${je(l,{warnungen:d})}</div>
      </div>
    `}
  `,ft(t.querySelector("#tagestyp-tage-liste"))}function ci(e){if(e.typ!=null){const t=decodeURIComponent(e.typ);return{label:t,titel:`${t}-Tage`,predicate:n=>n.tagestyp===t}}if(e.wd!=null){const t=decodeURIComponent(e.wd).toUpperCase(),n=oi[t]||t;return{label:n,titel:`Tage am ${n}`,predicate:a=>a.wochentag===t}}if(e.bucket!=null){const t=parseInt(decodeURIComponent(e.bucket),10),n=t+14;return{label:`${t}–${n} min Pause`,titel:`Tage mit Pause ${t}–${n} min`,predicate:a=>{if(a.tagestyp!=="Stempelzeit"||!a.zeitSpannen||a.zeitSpannen.length<2)return!1;const s=Math.round(lt(a.zeitSpannen)*60);return s>=t&&s<=n}}}return{label:"Filter",titel:"Tage (kein Filter)",predicate:()=>!0}}const gn="Fahrgelderstattung",di="C4",hn="C5",fn="F4",mn="F5",de=10,he=19;function _t(e,t){return e.filter(n=>n.monatKey===t).filter(n=>n.tagestyp==="Berufsschule").filter(n=>(n.ist??0)>0).sort((n,a)=>n.datum.localeCompare(a.datum))}async function ui(e){const t=(await dt(async()=>{const{default:f}=await import("./exceljs.min-BhfpbegZ.js").then(p=>p.e);return{default:f}},__vite__mapDeps([0,1]))).default,n=new t.Workbook;try{await n.xlsx.load(e)}catch{return{ok:!1,fehler:"Die Excel-Datei ist beschädigt oder kein gültiges .xlsx-Format. Bitte die Datei neu speichern und nochmal versuchen."}}const a=n.getWorksheet(gn)??n.worksheets[0];if(!a)return{ok:!1,fehler:"Excel hat keine Arbeitsblätter — die Datei scheint leer zu sein."};const s=f=>{const p=a.getCell(f).value;return p==null?"":typeof p=="object"&&p.text?String(p.text):typeof p=="object"&&p.richText?p.richText.map(v=>v.text).join(""):String(p)},i=s(hn).trim(),l=s(fn).trim(),c=s(mn).trim(),r=(l.match(/\d+/)||[""])[0],d=(c.match(/\d+/)||[""])[0],o=s(`C${de}`).trim(),u=s(`E${de}`).trim(),h=a.getCell(`G${de}`).value,g=typeof h=="number"?h:parseFloat(String(h).replace(",","."))||0;let m=null;try{const f=new Set(a.getImages().map(v=>parseInt(v.imageId,10))),p=(n.media||[]).map((v,w)=>({media:v,index:w})).filter(({media:v,index:w})=>(v==null?void 0:v.type)==="image"&&!f.has(w)&&v.buffer);if(p.length>0){p.sort((_,S)=>(S.media.buffer.length||0)-(_.media.buffer.length||0));const v=p[0].media,w=v.buffer,y=w instanceof ArrayBuffer?w:w.buffer?w.buffer.slice(w.byteOffset||0,(w.byteOffset||0)+w.byteLength):null;if(y){const _=(v.extension||"").toLowerCase();m={bytes:y,extension:_==="jpg"?"jpeg":_||"png",quelle:"auto-aus-vorlage"}}}}catch(f){console.warn("[fahrtgeld] Unterschrift-Auto-Extraktion fehlgeschlagen:",f)}return!i&&!r&&!d?{ok:!1,fehler:"Diese Excel scheint nicht im Format der Putzmeister-Fahrgelderstattung zu sein — Name/Personalnummer/Kostenstelle wurden nicht erkannt. Bitte eine Original-Vorlage hochladen."}:i?{ok:!0,konstanten:{name:i,persNr:r,kst:d,vonHaltestelle:o,nachHaltestelle:u,betragProTag:g},unterschriftAuto:m}:{ok:!1,fehler:'Im Feld „Name, Vorname" der Vorlage (Zelle C5) ist nichts eingetragen — bitte die Vorlage prüfen.'}}async function gi({templateBytes:e,monatKey:t,bsTage:n,konstanten:a,unterschriftBytes:s,unterschriftExtension:i}){const l=(await dt(async()=>{const{default:M}=await import("./exceljs.min-BhfpbegZ.js").then(K=>K.e);return{default:M}},__vite__mapDeps([0,1]))).default,c=new l.Workbook;try{await c.xlsx.load(e)}catch{throw new Error("Die hinterlegte Excel-Vorlage ist beschädigt — bitte unter Fahrgelderstattung neu hochladen.")}const r=c.getWorksheet(gn)??c.worksheets[0];if(!r)throw new Error("Die Excel-Vorlage hat kein passendes Arbeitsblatt — bitte eine Original-Fahrgelderstattung-Vorlage hochladen.");const[d,o]=t.split("-").map(M=>parseInt(M,10)),u=new Date(d,o-1,1,12,0,0),h=E(u,"MMMM yy",{locale:G}),g=r.getCell(di);g.value=h,g.numFmt="@",r.getCell(hn).value=a.name,r.getCell(fn).value=`Pers.-Nr.: ${a.persNr}`,r.getCell(mn).value=`KST: ${a.kst}`;for(let M=de;M<=he;M++)r.getCell(`A${M}`).value=null,r.getCell(`C${M}`).value=null,r.getCell(`E${M}`).value=null,r.getCell(`G${M}`).value=null;const m=he-de+1,f=n.slice(0,m);for(let M=0;M<f.length;M++){const K=f[M],k=de+M;r.getCell(`A${k}`).value=L(K.datum),r.getCell(`C${k}`).value=a.vonHaltestelle,r.getCell(`E${k}`).value=a.nachHaltestelle,r.getCell(`G${k}`).value=a.betragProTag}const p=+(f.length*(a.betragProTag??0)).toFixed(2),v=r.getCell(`G${he+1}`);v.value={formula:`SUM(G${de}:G${he})`,result:p};const y=E(new Date,"dd.MM.yyyy"),_=r.getCell("A21");if(_.value=y,_.alignment={vertical:"bottom",horizontal:"center",wrapText:!1},s&&i){const M=c.addImage({buffer:s,extension:i}),K=197,k=80,z=55,D=185,B=pi(s);let $=D,W=z;if(B&&B.width>0&&B.height>0){const X=Math.min(D/B.width,z/B.height);$=Math.round(B.width*X),W=Math.round(B.height*X)}const ne=Math.max(0,Math.round((K-$)/2))/k;r.addImage(M,{tl:{col:ne,row:20.04},ext:{width:$,height:W},editAs:"oneCell"})}for(let M=he+3;M<=he+5;M++)for(const K of["A","B","C","D","E","F","G"]){const k=r.getCell(`${K}${M}`),z=k.value;typeof z=="string"&&/^[A-Z]\d+(-\d+)?$/.test(z.trim())&&(k.value=null)}const S=await c.xlsx.writeBuffer(),C=new Blob([S],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),I=hi(a.name,u);return{blob:C,dateiname:I,anzahlTage:f.length,ueberzaehlig:n.length-f.length}}function hi(e,t){const n=E(t,"MMMM",{locale:G}),a=E(t,"yy");let s=e;const i=/^(.+?),\s*(.+)$/.exec(e);return i&&(s=`${i[2].trim()} ${i[1].trim()}`),`Fahrgelderstattung ${s} ${n} ${a}.xlsx`}function Fe(e){const[t,n]=e.split("-").map(a=>parseInt(a,10));return E(new Date(t,n-1,1),"MMMM yyyy",{locale:G})}function Wt(e,t=null){const a={monat_jahr:Fe(e)},s=(t==null?void 0:t.betreff)??"Fahrgelderstattung {monat_jahr}",i=(t==null?void 0:t.text)??`Guten Tag Frau Mayer,

hiermit sende ich Ihnen das ausgefüllte Dokument für die Fahrgelderstattung vom {monat_jahr} zu.
Vielen Dank!`,l=Vt(s,a),c=Vt(i,a),r=new URLSearchParams;return r.set("cc","anika.kailer@putzmeister.com"),r.set("subject",l),r.set("body",c),`mailto:annika.mayer@putzmeister.com?${r.toString().replace(/\+/g,"%20")}`}function Vt(e,t){return e.replace(/\{(\w+)\}/g,(n,a)=>t[a]!=null?String(t[a]):`{${a}}`)}function fi(e){const t=new Set;for(const n of e)n.tagestyp==="Berufsschule"&&(n.ist??0)>0&&t.add(n.monatKey);return[...t].sort().reverse()}function mi(e,t,n,a){var h,g;const s=t==null?void 0:t.berufsschulMuster;if(!s||!((h=s.wochentageWoechentlich)!=null&&h.length)&&!((g=s.wochentage14Taegig)!=null&&g.length))return{ausstehend:[],imMonatGesamt:n.length,vorhandenAnzahl:n.length};const[i,l]=e.split("-").map(m=>parseInt(m,10)),c=new Date(i,l-1,1),r=new Date(i,l,0),d=new Set(n.map(m=>m.datum)),o=[];let u=new Date(c);for(;u<=r;){if(!rt(u)&&Re(u,s)){const m=E(u,"yyyy-MM-dd");u>a&&!d.has(m)&&o.push(m)}u=it(u,1)}return{ausstehend:o,imMonatGesamt:n.length+o.length,vorhandenAnzahl:n.length}}function pi(e){const t=e instanceof ArrayBuffer?e:e!=null&&e.buffer?e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength):null;if(!t||t.byteLength<24)return null;const n=new DataView(t);if(n.getUint32(0)===2303741511&&n.getUint32(4)===218765834)return{width:n.getUint32(16),height:n.getUint32(20)};if(n.getUint16(0)===65496){let a=2;for(;a+9<n.byteLength;){if(n.getUint8(a)!==255)return null;const s=n.getUint8(a+1);if(s>=192&&s<=207&&s!==196&&s!==200&&s!==204)return{height:n.getUint16(a+5),width:n.getUint16(a+7)};const l=n.getUint16(a+2);if(l<2)return null;a+=2+l}}return null}function bi(e,t){const n=URL.createObjectURL(e),a=document.createElement("a");a.href=n,a.download=t,document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(n),1e3)}async function Se({root:e}){var v,w,y,_,S,C,I,M,K;const t=await xe();if(!t){vi(e);return}const[n,a,s,i]=await Promise.all([te(),J(),Me(),es("fahrgeld_abgabe")]),l=s!=null&&s.stichtagAuswertung?new Date(s.stichtagAuswertung):new Date,c=fi(n),r=new Date,d=`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}`;c.includes(d)||c.unshift(d);const o=c;e.innerHTML=`
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
    `:(()=>{var B;const k=o.map(($,W)=>{const R=_t(n,$),ne=+(R.length*(t.konstanten.betragProTag??0)).toFixed(2),X=R.length>10,H=mi($,a,R,l),Y=H.ausstehend.length,De=+((R.length+Y)*(t.konstanten.betragProTag??0)).toFixed(2),qe=Y>0?H.ausstehend.map(Ze=>F(L(Ze))).join(", "):"";return{mk:$,bs:R,summe:ne,ueberzaehlig:X,offen:Y,offenListe:qe,summeMitOffen:De,idx:W}}),z=((B=k.find($=>$.bs.length>0))==null?void 0:B.mk)??k[0].mk,D=k.find($=>$.mk===z)??k[0];return`
          <div class="card fahrtgeld-generate-card">
            <div class="fahrtgeld-generate-buttons">
              <button class="btn-generate-big" id="btn-fahrtgeld-generate" ${D.bs.length===0?"disabled":""}>
                <img src="excel-logo.png" alt="" class="excel-logo-big" />
                <span class="btn-generate-label">Generieren</span>
              </button>
              <a class="btn-mail-big" id="btn-fahrtgeld-mail" href="${x(Wt(D.mk,i))}" target="_blank" rel="noopener" ${D.bs.length===0?'aria-disabled="true"':""}>
                <img src="outlook-logo.png" alt="" class="outlook-logo-big" />
                <span>E-Mail</span>
              </a>
            </div>
            <div class="fahrtgeld-generate-info" id="fahrtgeld-generate-info">
              <div class="fahrtgeld-generate-monat">${x(Fe(D.mk))}</div>
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
              ${k.map($=>{const W=$.mk===z?"checked":"",R=`data-monat="${x($.mk)}" data-offen="${$.offen}" data-offen-liste="${x($.offenListe)}" data-anzahl="${$.bs.length}" data-summe="${$.summe.toFixed(2).replace(".",",")}" data-summe-mit-offen="${$.summeMitOffen.toFixed(2).replace(".",",")}" data-monat-label="${x(Fe($.mk))}" data-ueberzaehlig="${$.ueberzaehlig?"1":"0"}"`;return`
                  <label class="fahrtgeld-monat-row${$.offen>0?" has-pending":""}${$.bs.length===0?" empty":""}" ${R}>
                    <input type="radio" name="fg-monat-sel" value="${x($.mk)}" ${W} ${$.bs.length===0?"disabled":""} class="fahrtgeld-monat-radio" />
                    <div class="fahrtgeld-monat-titel">
                      <div class="fahrtgeld-monat-name">${x(Fe($.mk))}</div>
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
  `,(_=e.querySelector("#btn-template-replace"))==null||_.addEventListener("click",()=>{e.querySelector("#fahrtgeld-replace-input").click()}),(S=e.querySelector("#fahrtgeld-replace-input"))==null||S.addEventListener("change",async k=>{var D;const z=(D=k.target.files)==null?void 0:D[0];z&&await at(z,e)}),(C=e.querySelector("#btn-template-clear"))==null||C.addEventListener("click",async()=>{await U("Beim nächsten Öffnen wirst du gebeten, eine neue Vorlage hochzuladen.",{title:"Vorlage löschen?",confirmLabel:"Löschen",variant:"danger"})&&(await Ja(),T("Vorlage gelöscht."),Se({root:e}))}),(I=e.querySelector("#btn-signature-upload"))==null||I.addEventListener("click",()=>{e.querySelector("#fahrtgeld-signature-input").click()}),(M=e.querySelector("#fahrtgeld-signature-input"))==null||M.addEventListener("change",async k=>{var D;const z=(D=k.target.files)==null?void 0:D[0];z&&await yi(z,e)}),(K=e.querySelector("#btn-signature-clear"))==null||K.addEventListener("click",async()=>{if(!await U("Die hochgeladene Unterschrift wird entfernt — generierte Excel haben dann keine Unterschrift mehr.",{title:"Unterschrift entfernen?",confirmLabel:"Entfernen",variant:"danger"}))return;const k=await xe();k&&(await ut({...k,unterschrift:null}),T("Unterschrift entfernt."),Se({root:e}))});const u=e.querySelector("#btn-fahrtgeld-generate"),h=e.querySelector("#btn-fahrtgeld-mail"),g=e.querySelector(".fahrtgeld-generate-monat"),m=e.querySelector("#fahrtgeld-generate-detail"),f=e.querySelectorAll(".fahrtgeld-monat-radio");function p(){const k=e.querySelector(".fahrtgeld-monat-radio:checked");if(!k)return;const z=k.closest(".fahrtgeld-monat-row");if(!z)return;const D=k.value,B=parseInt(z.getAttribute("data-anzahl")||"0",10),$=z.getAttribute("data-summe")||"0,00",W=parseInt(z.getAttribute("data-offen")||"0",10),R=z.getAttribute("data-offen-liste")||"",ne=z.getAttribute("data-summe-mit-offen")||$,X=z.getAttribute("data-monat-label")||"",H=z.getAttribute("data-ueberzaehlig")==="1";if(g&&(g.textContent=X),m){const Y=[`${B} BS-Tag${B===1?"":"e"} erfasst · ${$} €`];W>0&&Y.push(`<br><span class="fahrtgeld-pending">⏳ Laut Schul-Rhythmus kommen noch ${W} BS-Tag${W===1?"":"e"}: ${x(R)} (mit allen: ${ne} €)</span>`),H&&Y.push(`<br><span style="color: var(--warn); font-weight: 600;">· ${B-10} überzählig (max 10/Monat)</span>`),m.innerHTML=Y.join("")}u&&(u.disabled=B===0),h&&(h.href=Wt(D,i),B===0?h.setAttribute("aria-disabled","true"):h.removeAttribute("aria-disabled"))}f.forEach(k=>k.addEventListener("change",p)),u==null||u.addEventListener("click",async()=>{var ne,X;const k=e.querySelector(".fahrtgeld-monat-radio:checked");if(!k){N("Bitte einen Monat auswählen.",{type:"warn"});return}const z=k.closest(".fahrtgeld-monat-row"),D=k.value,B=parseInt((z==null?void 0:z.getAttribute("data-offen"))||"0",10),$=(z==null?void 0:z.getAttribute("data-offen-liste"))||"";if(B>0&&!await U(`Laut deinem Schul-Rhythmus kommen in diesem Monat noch ${B} BS-Tag${B===1?"":"e"}:

${$}

Diese Tage sind noch nicht im Zeitnachweis-PDF und werden in der Excel fehlen. Trotzdem jetzt für die bisher erfassten Tage generieren?`,{title:"Noch ausstehende BS-Tage",confirmLabel:"Trotzdem generieren"}))return;u.disabled=!0;const W=u.querySelector(".btn-generate-label"),R=W==null?void 0:W.textContent;W&&(W.textContent="Erstelle …");try{const H=await xe(),Y=await te(),De=_t(Y,D);if(!De.length){N("Für diesen Monat sind keine BS-Anwesenheits-Tage erkannt.",{type:"warn"});return}const qe=(ne=H.unterschrift)==null?void 0:ne.bytes,Ze=(X=H.unterschrift)==null?void 0:X.extension,{blob:bn,dateiname:vt,ueberzaehlig:Ue}=await gi({templateBytes:H.bytes,monatKey:D,bsTage:De,konstanten:H.konstanten,unterschriftBytes:qe,unterschriftExtension:Ze});bi(bn,vt),T(`Excel erstellt: ${vt}${Ue>0?` (${Ue} weiterer Tag${Ue===1?"":"e"} passte/n nicht in die Vorlage)`:""}`)}catch(H){console.error("Fahrtgeld-Generierung fehlgeschlagen:",H),N(`Fehler: ${H.message||H}`,{type:"error",duration:8e3})}finally{u.disabled=!1,W&&R&&(W.textContent=R)}})}function vi(e){e.innerHTML=`
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
  `;const t=e.querySelector("#fahrtgeld-dropzone"),n=e.querySelector("#fahrtgeld-upload-input");t==null||t.addEventListener("click",()=>n.click()),t==null||t.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),n.click())}),n==null||n.addEventListener("change",async a=>{var i;const s=(i=a.target.files)==null?void 0:i[0];s&&await at(s,e)}),["dragenter","dragover"].forEach(a=>{t==null||t.addEventListener(a,s=>{s.preventDefault(),s.stopPropagation(),t.classList.add("is-dragover")})}),["dragleave","drop"].forEach(a=>{t==null||t.addEventListener(a,s=>{s.preventDefault(),s.stopPropagation(),t.classList.remove("is-dragover")})}),t==null||t.addEventListener("drop",async a=>{var i,l;const s=(l=(i=a.dataTransfer)==null?void 0:i.files)==null?void 0:l[0];s&&await at(s,e)})}async function yi(e,t){try{if(!["image/png","image/jpeg"].includes(e.type)&&!/\.(png|jpe?g)$/i.test(e.name)){N("Bitte ein PNG oder JPG hochladen.",{type:"warn"});return}if(e.size>2*1024*1024){N(`Die Bilddatei ist zu groß (${(e.size/1024/1024).toFixed(1)} MB). Maximal 2 MB — bitte komprimiert oder kleiner hochladen.`,{type:"warn",duration:8e3});return}const a=await e.arrayBuffer(),s=/\.png$/i.test(e.name)||e.type==="image/png"?"png":"jpeg",i=await new Promise((c,r)=>{const d=new FileReader;d.onload=()=>c(d.result),d.onerror=r,d.readAsDataURL(e)}),l=await xe();if(!l){N("Bitte zuerst eine Excel-Vorlage hochladen.",{type:"warn"});return}await ut({...l,unterschrift:{bytes:a,extension:s,dataUrl:i,hochgeladenAm:new Date().toISOString()}}),T("Unterschrift gespeichert."),Se({root:t})}catch(n){console.error("Unterschrift-Upload fehlgeschlagen:",n),N(`Fehler beim Verarbeiten: ${n.message||n}`,{type:"error",duration:8e3})}}async function at(e,t){try{const n=await e.arrayBuffer(),a=await ui(n);if(!a.ok){N(`Vorlage nicht erkannt: ${a.fehler}`,{type:"error",duration:8e3});return}const s=await xe();let i=s==null?void 0:s.unterschrift;if(!i&&a.unterschriftAuto){const l=wi(a.unterschriftAuto.bytes,a.unterschriftAuto.extension);i={bytes:a.unterschriftAuto.bytes,extension:a.unterschriftAuto.extension,dataUrl:l,quelle:"auto-aus-vorlage",hochgeladenAm:new Date().toISOString()}}await ut({bytes:n,konstanten:a.konstanten,unterschrift:i,hochgeladenAm:new Date().toISOString(),dateiname:e.name}),a.unterschriftAuto&&!(s!=null&&s.unterschrift)?T(`Vorlage gespeichert: ${a.konstanten.name||e.name} (Unterschrift aus Vorlage übernommen)`):T(`Vorlage gespeichert: ${a.konstanten.name||e.name}`),document.dispatchEvent(new CustomEvent("better-ess:fahrgeld-template-uploaded")),Se({root:t})}catch(n){console.error("Vorlage-Upload fehlgeschlagen:",n),N(`Fehler beim Verarbeiten: ${n.message||n}`,{type:"error",duration:8e3})}}function wi(e,t){const n=new Uint8Array(e);let a="";for(let l=0;l<n.length;l++)a+=String.fromCharCode(n[l]);const s=btoa(a);return`data:${t==="png"?"image/png":"image/jpeg"};base64,${s}`}async function ki({root:e}){const t=await te();if(!t.length){e.innerHTML='<h1 class="view-title">Berichtsheft</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const n=[...new Set(t.map(i=>i.monatKey))].sort().reverse();e.innerHTML=`
    <h1 class="view-title">Berichtsheft-Export</h1>
    <p class="view-subtitle">Kopiere die Arbeitsstunden im HH:MM-Format direkt in dein Berichtsheft.</p>

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 16px; align-items: center;">
        <h2 style="margin: 0;">Filter</h2>
        <div style="display: flex; gap: 8px; align-items: center;">
          <label style="color: var(--fg-muted); font-size: 13px;">Monat:</label>
          <select id="filter-monat">
            <option value="">Alle</option>
            ${n.map(i=>`<option value="${i}">${Si(i)}</option>`).join("")}
          </select>
          <button class="btn sm" id="btn-copy-all">Alle sichtbaren kopieren</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div id="liste"></div>
    </div>
  `;const a=e.querySelector("#filter-monat");a.addEventListener("change",()=>s()),e.querySelector("#btn-copy-all").addEventListener("click",()=>{const i=e.querySelectorAll("#liste tr[data-copy]"),l=Array.from(i).map(c=>c.getAttribute("data-copy")).join(`
`);navigator.clipboard.writeText(l).then(()=>T(`${i.length} Zeilen kopiert.`))});function s(){const i=a.value,c=(i?t.filter(r=>r.monatKey===i):t).filter(r=>r.ist!=null&&r.ist>0&&r.tagestyp!=="Wochenende");e.querySelector("#liste").innerHTML=xi(c),e.querySelectorAll(".copy-val").forEach(r=>{r.addEventListener("click",async()=>{const d=r.getAttribute("data-val");await navigator.clipboard.writeText(d),r.classList.add("ok");const o=r.textContent;r.textContent="✓ kopiert",setTimeout(()=>{r.classList.remove("ok"),r.textContent=o},1200)})})}s()}function xi(e){return e.length?`
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
        ${e.map(t=>{const n=Ce(t.ist),a=`${F(L(t.datum))}	${n}`;return`
            <tr data-copy="${Kt(a)}">
              <td class="tabular">${F(L(t.datum))}</td>
              <td>${$i(t.wochentag)}</td>
              <td>${t.tagestyp?`<span class="pill ${Mi(t.tagestyp)}">${pn(t.tagestyp)}</span>`:"—"}</td>
              <td class="num tabular">${t.ist.toFixed(2).replace(".",",")}</td>
              <td class="num tabular" style="font-weight: 600;">${n}</td>
              <td><button class="copy-val" data-val="${Kt(n)}">📋 ${n}</button></td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `:'<p style="color: var(--fg-muted);">Keine Tage in dieser Auswahl.</p>'}function $i(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function Si(e){const[t,n]=e.split("-");return E(new Date(parseInt(t),parseInt(n)-1,1),"LLLL yyyy",{locale:G})}function Mi(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function pn(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Kt(e){return pn(e)}async function zi({root:e}){const[t,n,a,s]=await Promise.all([te(),J(),Ie(),He()]),i=Object.fromEntries(s.map(r=>[r.key,r])),l=Ne(t,n,new Date).filter(r=>r.mailVorlageKey),c=sn(a);e.innerHTML=`
    <h1 class="view-title">Mail-Vorlagen</h1>
    <p class="view-subtitle">Vorformulierte Mails an die Zeitwirtschaft bei erkannten Fehlern im Zeitnachweis.</p>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Offene Warnungen mit Mail-Vorschlag</h2>
      <p class="hint" style="margin-bottom: 16px;">Diese Warnungen haben einen roten Schweregrad und sind eine direkte Mail wert.</p>

      ${l.length===0?'<div class="empty-state"><div class="empty-state-icon">✓</div><p>Keine akuten Warnungen — top.</p></div>':l.map(r=>Di(r,n,i)).join("")}

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
        ${Object.keys($e).map(r=>{const d=ze(r,i[r]);return Ai(d)}).join("")}
      </div>
    </div>
  `,Pi(e),Ei(e)}function Di(e,t,n){const a=ze(e.mailVorlageKey,n[e.mailVorlageKey]);if(!a)return"";const s=gt(t,e),i=rn(a,s),l=ht(t,a,s);return`
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
        <button class="btn sm btn-copy-mail" data-subject="${st(i.betreff)}" data-body="${st(i.text)}">📋 Betreff + Text kopieren</button>
      </div>
    </div>
  `}function Ai(e){return`
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
        <input type="text" class="v-betreff" value="${st(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 240px;">${q(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function Pi(e){e.querySelectorAll(".btn-save-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const n=t.getAttribute("data-key"),a=t.closest(".vorlagen-item"),s=a.querySelector(".v-betreff").value,i=a.querySelector(".v-text").value;await _e(n,{betreff:s,text:i}),T("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const n=t.getAttribute("data-key"),a=$e[n];a&&await U(`Deine Anpassungen an "${a.titel}" gehen verloren.`,{title:"Vorlage zurücksetzen?",confirmLabel:"Zurücksetzen",variant:"danger"})&&(await _e(n,{betreff:a.betreff,text:a.text}),T("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function Ei(e){e.querySelectorAll(".btn-copy-mail").forEach(t=>{t.addEventListener("click",async()=>{const n=t.getAttribute("data-subject"),a=t.getAttribute("data-body"),s=`Betreff: ${n}

${a}`;await navigator.clipboard.writeText(s),T("Mail-Text kopiert.")})})}function q(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function st(e){return q(e)}async function Ti({root:e}){const[t,n]=await Promise.all([J(),He()]),a=Object.fromEntries(n.map(s=>[s.key,s]));e.innerHTML=`
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
          ${Object.keys($e).map(s=>{const i=ze(s,a[s]);return Fi(i)}).join("")}
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
  `,e.querySelector("#pause-sel").addEventListener("change",async s=>{const i={...t,pausenRegel:s.target.value};await Be(i),T("Pausen-Regel gespeichert.")}),e.querySelectorAll(".btn-save-vorlage").forEach(s=>{s.addEventListener("click",async()=>{const i=s.getAttribute("data-key"),l=s.closest(".vorlagen-item"),c=l.querySelector(".v-betreff").value,r=l.querySelector(".v-text").value;await _e(i,{betreff:c,text:r}),T("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(s=>{s.addEventListener("click",async()=>{const i=s.getAttribute("data-key"),l=$e[i];l&&await U(`Deine Anpassungen an "${l.titel}" gehen verloren.`,{title:"Vorlage zurücksetzen?",confirmLabel:"Zurücksetzen",variant:"danger"})&&(await _e(i,{betreff:l.betreff,text:l.text}),T("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function Fi(e){return`
    <div class="vorlagen-item" data-key="${e.key}" style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
      <div class="card-split" style="margin-bottom: 12px;">
        <div>
          <h3 style="text-transform: none; letter-spacing: 0; color: var(--fg); font-size: 16px;">${Le(e.titel)}</h3>
          <p class="hint" style="margin: 4px 0;">${Le(e.beschreibung)}</p>
        </div>
        <button class="btn sm btn-reset-vorlage" data-key="${e.key}">Auf Default zurücksetzen</button>
      </div>
      <div class="form-group">
        <label>Betreff</label>
        <input type="text" class="v-betreff" value="${Li(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 200px;">${Le(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function Le(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Li(e){return Le(e)}async function Ot(){document.documentElement.setAttribute("data-css-ready",""),Rn();const e=document.getElementById("content");await ja()&&setTimeout(()=>{N('Parser wurde aktualisiert. Bitte lade deinen Zeitnachweis unter "Daten" neu hoch.',{type:"info",duration:12e3})},500),await Na(),await Ra(),O("/",Mt),O("/dashboard",Mt),O("/analytics",ti),O("/kalender",Xe),O("/kalender/typ/:typ",Ye),O("/kalender/wochentag/:wd",Ye),O("/kalender/pause/:bucket",Ye),O("/kalender/:yyyymm",Xe),O("/kalender/:yyyymm/:yyyykw",Xe),O("/tag/:datum",Xs),O("/berichtsheft",ki),O("/mails",zi),O("/fahrtgeld",Se),O("/profil",Js),O("/daten",Rs),O("/einstellungen",Ti),Va(e),location.hash||Wa("/");try{const t=await b.tage.count();_s(t>0)&&setTimeout(()=>on(),700)}catch(t){console.warn("[boot] Tour-Auto-Start-Check fehlgeschlagen:",t)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ot):Ot();
