(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();let b;async function E(){const{Map:r}=await google.maps.importLibrary("maps"),{AdvancedMarkerElement:t}=await google.maps.importLibrary("marker");b=new r(document.getElementById("map"),{center:{lat:50.32,lng:28.753},zoom:13,mapId:"DEMO_MAP_ID",mapTypeId:"terrain",streetViewControl:!1,fullscreenControl:!0,disableDefaultUI:!1,zoomControl:!1,backgroundColor:"#6d927a",draggable:!0,gestureHandling:"greedy",styles:[{featureType:"all",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c0e4f3"}]}]}),new t({position:{lat:50.32074,lng:28.7536},map:b,title:"Вереси, Житомирська область, Ресторан-готель Губернія"})}E();$(".slider").each(function(){var r=$(this),t=r.find(".slide_group"),s=r.find(".slide"),a=[],e=0,o;function l(i){var c,d;u(),!(t.is(":animated")||e===i)&&(a[e].removeClass("active"),a[i].addClass("active"),i>e?(d="100%",c="-100%"):(d="-100%",c="100%"),s.eq(i).css({display:"block",left:d}),t.animate({left:c},function(){s.eq(e).css({display:"none"}),s.eq(i).css({left:0}),t.css({left:0}),e=i}))}function u(){clearTimeout(o),o=setTimeout(function(){e<s.length-1?l(e+1):l(0)},7e3)}$(".next_btn").on("click",function(){e<s.length-1?l(e+1):l(0)}),$(".previous_btn").on("click",function(){l(e!==0?e-1:s.length-1)}),$.each(s,function(i){var c=$('<a class="slide_btn">&bull;</a>');i===e&&c.addClass("active"),c.on("click",function(){l(i)}).appendTo(".slide_buttons"),a.push(c)}),s.css({display:"none"}),s.eq(e).css({display:"block",left:0}),u()});document.addEventListener("DOMContentLoaded",r=>{const t=document.getElementById("days"),s=document.getElementById("hours"),a=document.getElementById("minutes"),e=document.getElementById("seconds"),o=document.getElementById("days-label"),l=document.getElementById("hours-label"),u=document.getElementById("minutes-label"),i=document.getElementById("seconds-label"),c=new Date("September 21, 2024 12:00:00").getTime(),d=n=>n.toString().padStart(2,"0"),L=n=>n===1?"День":n>=2&&n<=4?"Дні":"Днів",v=n=>n===1?"Година":n>=2&&n<=4?"Години":"Годин",h=n=>n===1?"Хвилина":n>=2&&n<=4?"Хвилини":"Хвилин",k=n=>n===1?"Секунда":n>=2&&n<=4?"Секунди":"Секунд",C=setInterval(()=>{const n=new Date().getTime(),m=c-n,f=Math.floor(m/(1e3*60*60*24)),y=Math.floor(m%(1e3*60*60*24)/(1e3*60*60)),p=Math.floor(m%(1e3*60*60)/(1e3*60)),g=Math.floor(m%(1e3*60)/1e3);t.textContent=d(f),s.textContent=d(y),a.textContent=d(p),e.textContent=d(g),o.textContent=L(f),l.textContent=v(y),u.textContent=h(p),i.textContent=k(g),m<0&&(clearInterval(C),t.textContent="00",s.textContent="00",a.textContent="00",e.textContent="00",o.textContent="Дні",l.textContent="Години",u.textContent="Хвилини",i.textContent="Секунди")},1e3)});(()=>{const r={openModalBtn:document.querySelector("[data-modal-mobile-open]"),closeModalBtn:document.querySelector("[data-modal-mobile-close]"),modal:document.querySelector("[data-modal-mobile]"),menuLinks:document.querySelector("[nav-link-mobile-close]"),menuLinksOne:document.querySelector("[nav-link-mobile-close-1]"),menuLinksTwo:document.querySelector("[nav-link-mobile-close-2]"),menuLinksThree:document.querySelector("[nav-link-mobile-close-3]"),menuLinksFour:document.querySelector("[nav-link-mobile-close-4]")};r.openModalBtn.addEventListener("click",t),r.closeModalBtn.addEventListener("click",t),r.menuLinks.addEventListener("click",t),r.menuLinksOne.addEventListener("click",t),r.menuLinksTwo.addEventListener("click",t),r.menuLinksThree.addEventListener("click",t),r.menuLinksFour.addEventListener("click",t);function t(){r.modal.classList.toggle("is-open-mob")}})();document.querySelector(".mob-menu-item");
//# sourceMappingURL=commonHelpers.js.map
