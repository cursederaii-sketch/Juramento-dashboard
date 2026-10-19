(function(){
var ctc=function(c,def){var k=MP.contacto||{};
if(k.url){var l=document.createElement("a");l.href=k.url;l.target="_blank";l.rel="noopener";l.textContent=k.texto||k.url;c.appendChild(l);return true}
if(k.texto){c.textContent=k.texto;return true}
if(def)c.textContent=def;return false};
var ms=[].slice.call(document.querySelectorAll(".metodo")),hay=0;
ms.forEach(function(a){var m=a.dataset.m,u=m==="otro"?PAGOS.otro.url:PAGOS[m],alias=m==="mercadopago"&&!u&&MP.alias,pp=m==="paypal"&&!u&&PAYPAL.clientId&&PAYPAL.botonId;
if(alias)u="#transferencia";if(pp)u="#paypal-zona";
if(u){hay++;a.href=u;if(u.charAt(0)!=="#"){a.target="_blank";a.rel="noopener"}
if(alias)a.querySelector("span").textContent="Transferencia con alias";
if(pp)a.querySelector("span").textContent="Con tu cuenta de PayPal o tarjeta";
if(m==="otro"&&PAGOS.otro.nombre)a.querySelector("b").textContent=PAGOS.otro.nombre}
else a.hidden=true});
if(!hay)ms.forEach(function(a){a.hidden=false;a.classList.add("off");a.setAttribute("aria-disabled","true");a.removeAttribute("href");a.querySelector("span").textContent="Próximamente"});
if(PAYPAL.clientId&&PAYPAL.botonId){var z=document.getElementById("paypal-zona");z.hidden=false;
var bx=document.getElementById("paypal-boton"),pc=document.getElementById("p-contacto");
if(ctc(pc))document.getElementById("p-ayuda").hidden=false;
var s=document.createElement("script"),er=function(){bx.textContent="No se pudo cargar PayPal. Recarga la página."};
s.src="https://www.paypal.com/sdk/js?client-id="+encodeURIComponent(PAYPAL.clientId)+"&components=hosted-buttons&disable-funding=venmo&currency=USD";
s.onload=function(){try{paypal.HostedButtons({hostedButtonId:PAYPAL.botonId}).render("#paypal-boton")}catch(e){er()}};s.onerror=er;document.head.appendChild(s)}
var ars=document.getElementById("precio-ars"),u0=(typeof MP!=="undefined"&&MP.usd)||1.21;
fetch("https://dolarapi.com/v1/dolares/"+((typeof MP!=="undefined"&&MP.cotizacion)||"oficial")).then(function(r){return r.json()}).then(function(d){
if(!d||!d.venta)throw 0;ars.textContent="≈ $"+(Math.ceil(u0*d.venta/10)*10).toLocaleString("es-AR")+" pesos al cambio de hoy";ars.hidden=false}).catch(function(){});
["c-contacto","faq-contacto","f-contacto"].forEach(function(id){var e=document.getElementById(id);if(e)ctc(e,"quien te vendió el acceso")});
if(MP.alias){var t=document.getElementById("transferencia");t.hidden=false;
document.getElementById("t-alias").textContent=MP.alias;var usd=MP.usd||1.21,tm=document.getElementById("t-monto"),ust="US$"+usd.toFixed(2).replace(".",",");
var fb=function(){tm.textContent=MP.montoRespaldo?"$"+MP.montoRespaldo+" ("+ust+" al cambio de hoy)":"el equivalente a "+ust+" en pesos, al cambio de hoy"};
fetch("https://dolarapi.com/v1/dolares/"+(MP.cotizacion||"oficial")).then(function(r){return r.json()}).then(function(d){
if(!d||!d.venta)throw 0;var n=Math.ceil(usd*d.venta/10)*10;tm.textContent="$"+n.toLocaleString("es-AR")+" ("+ust+" al cambio de hoy)"}).catch(fb);
ctc(document.getElementById("t-contacto"),"quien te vendió el acceso");
var bt=document.getElementById("t-copiar");
bt.addEventListener("click",function(){var ok=function(){bt.textContent="Copiado";setTimeout(function(){bt.textContent="Copiar"},1800)};
if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(MP.alias).then(ok,function(){});
else{var r=document.createRange();r.selectNodeContents(document.getElementById("t-alias"));var s=getSelection();s.removeAllRanges();s.addRange(r);try{document.execCommand("copy");ok()}catch(e){}}})}
})();

(function(){
var c=document.getElementById("brasas"),x=c.getContext("2d"),P=[],W,H,D;
if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;
function rs(){D=devicePixelRatio||1;W=c.width=c.clientWidth*D;H=c.height=c.clientHeight*D}
rs();addEventListener("resize",rs);
function nueva(){var cx=W*(.08+Math.random()*.16);return{x:cx,y:H*(.82+Math.random()*.14),vx:(Math.random()-.4)*.35*D,vy:-(.5+Math.random()*1.1)*D,r:(1+Math.random()*2.2)*D,v:0,m:200+Math.random()*260}}
for(var i=0;i<40;i++){var p=nueva();p.v=Math.random()*p.m;P.push(p)}
function t(){x.clearRect(0,0,W,H);
P.forEach(function(p,i){p.v++;p.x+=p.vx+Math.sin(p.v/25)*.3*D;p.y+=p.vy;
var a=Math.max(0,1-p.v/p.m);if(a<=0||p.y<0){P[i]=nueva();return}
x.fillStyle="rgba(255,"+(120+a*100|0)+",40,"+a+")";x.fillRect(p.x|0,p.y|0,p.r|0||1,p.r|0||1)});
requestAnimationFrame(t)}
t()})();
