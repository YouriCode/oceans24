(function(){"use strict";var e={6908:function(e,s,t){var n=t(3751),i=(t(4114),t(641)),a=t(33),o=t.p+"img/maqutte.8d17d403.gif",l=t(327),d=t(953),r=t.p+"media/android.8238fdb0.mp3",c=t.p+"media/discord.f98ba5a6.mp3",u=t.p+"media/iphone.111918ab.mp3",p=t.p+"media/iphone1.8fcdc124.mp3",v=t.p+"media/iphone2.ba2d9744.mp3",f=t.p+"media/messenger.3258047e.mp3",m=t.p+"media/samsung.434da60b.mp3",h=t.p+"media/snapchat.8733c1e2.mp3";const g={id:"app"},b={class:"container"},y={class:"windows"},w=(0,i.Fv)('<section class="slides"><div class="window-head"><h3>data_info</h3></div><div class="slides-container"><div class="slide slide1"><h4>ENERGIE</h4><p class="text">En moyenne, un datacenter de 10000m² consomme <strong>autant d’énergie</strong> qu’une ville de</p><p class="big-text">50 000</p><p class="small-text">habitants, sur une année.</p></div><div class="slide slide2"><h4>ENERGIE</h4><p class="big-text">50%</p><p class="text">de la facture d’un datacenter correspond aux <strong>dépenses énergétiques</strong> liées au refroidissement des serveurs.</p></div><div class="slide slide3"><p class="big-text">MESSAGE</p><p class="small-text">1 octet par caractère. Message court : ~100 o.</p><p class="big-text">IMAGE HD</p><p class="small-text">10 000x plus qu’un message. ~1 Mo.</p><p class="big-text">VIDEO HD</p><p class="small-text">1 à 2 Mo/seconde. 30s compressées : ~45 Mo.</p></div><div class="slide slide4"><h4>EMPREINTE</h4><p class="big-text">25%</p><p class="text">des émissions mondiales de gaz à effet de serre liées au numérique, sont émises par les datacenters.</p></div></div></section>',1),x={class:"logs"},k=(0,i.Lk)("div",{class:"window-head"},[(0,i.Lk)("h3",null,"user_log")],-1),E={class:"logs-content"},L=(0,i.Lk)("main",null,[(0,i.Lk)("h2",null,"Green Data"),(0,i.Lk)("section",{class:"images"},[(0,i.Lk)("img",{class:"maqutte",src:o,alt:""})])],-1),O=(0,i.Lk)("iframe",{style:{width:"100vw",height:"100vh",border:"0px",position:"absolute",top:"0",left:"0","z-index":"1"},src:"https://cables.gl/view/6602dd7a4a0d23057b44297b"},null,-1);var M={__name:"App",setup(e){const s=(0,l.io)("http://hyblab.polytech.univ-nantes.fr"),t=new Audio(r),n=new Audio(c),o=new Audio(u),M=new Audio(p),_=new Audio(v),A=new Audio(f),S=new Audio(m),j=new Audio(h),q=[t,n,o,M,_,A,S,j];document.addEventListener("DOMContentLoaded",(function(){setInterval(z,1e4)}));let I=0;function z(){I++;let e=".slide"+I;document.querySelector(e).style.display="none",I>3&&(document.querySelectorAll(".slide").forEach((e=>e.style.display="block")),I=0)}function C(){let e=Math.floor(Math.random()*q.length);q[e].play()}const D=(0,d.KR)([]);return(0,i.sV)((()=>{s.on("new message",(e=>{"video"===e.type?D.value.push({id:e.id,address:e.address,article:"une",type:"vidéo",size:"45 Mo"}):"image"===e.type?D.value.push({id:e.id,address:e.address,article:"une",type:"image",size:"1.3 Mo"}):"text"===e.type&&D.value.push({id:e.id,address:e.address,article:"un",type:"message",size:String(e.content.length)+" o"}),C()}))})),(e,s)=>((0,i.uX)(),(0,i.CE)("div",g,[(0,i.Lk)("div",b,[(0,i.Lk)("section",y,[w,(0,i.Lk)("section",x,[k,(0,i.Lk)("div",E,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(D.value,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.id,class:"logs-text"},[(0,i.Lk)("div",null,[(0,i.Lk)("p",null,[(0,i.eW)((0,a.v_)(e.address)+" a envoyé "+(0,a.v_)(e.article)+" ",1),(0,i.Lk)("strong",null,(0,a.v_)(e.type),1),(0,i.eW)(" ("+(0,a.v_)(e.size)+")",1)])])])))),128))])])]),L]),O]))}};const _=M;var A=_,S=t(1445);t(4188);const j=(0,n.Ef)(A);j.use(S.A),j.mount("#app")}},s={};function t(n){var i=s[n];if(void 0!==i)return i.exports;var a=s[n]={exports:{}};return e[n].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(s,n,i,a){if(!n){var o=1/0;for(c=0;c<e.length;c++){n=e[c][0],i=e[c][1],a=e[c][2];for(var l=!0,d=0;d<n.length;d++)(!1&a||o>=a)&&Object.keys(t.O).every((function(e){return t.O[e](n[d])}))?n.splice(d--,1):(l=!1,a<o&&(o=a));if(l){e.splice(c--,1);var r=i();void 0!==r&&(s=r)}}return s}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,i,a]}}(),function(){t.d=function(e,s){for(var n in s)t.o(s,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/ocean-2/"}(),function(){var e={543:0};t.O.j=function(s){return 0===e[s]};var s=function(s,n){var i,a,o=n[0],l=n[1],d=n[2],r=0;if(o.some((function(s){return 0!==e[s]}))){for(i in l)t.o(l,i)&&(t.m[i]=l[i]);if(d)var c=d(t)}for(s&&s(n);r<o.length;r++)a=o[r],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(c)},n=self["webpackChunkmy_vue3_app"]=self["webpackChunkmy_vue3_app"]||[];n.forEach(s.bind(null,0)),n.push=s.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(6908)}));n=t.O(n)})();
//# sourceMappingURL=data.08a01888.js.map