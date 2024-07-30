(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();let y;async function E(){const{Map:s}=await google.maps.importLibrary("maps"),{AdvancedMarkerElement:t}=await google.maps.importLibrary("marker");y=new s(document.getElementById("map"),{center:{lat:50.32067,lng:28.75377},zoom:10.5,mapId:"DEMO_MAP_ID",mapTypeId:"terrain",streetViewControl:!1,fullscreenControl:!0,disableDefaultUI:!1,zoomControl:!0,backgroundColor:"#6d927a",draggable:!0}),new t({position:{lat:50.32067,lng:28.75377},map:y,title:"Вереси, Житомирська область, Ресторан-готель Губернія",zoom:10.5,label:{text:"Губернія",color:"black",fontSize:"14px",fontWeight:"bold"},icon:{url:"https://maps.google.com/mapfiles/ms/icons/blue-dot.png",scaledSize:new google.maps.Size(32,32),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(16,32)},animation:google.maps.Animation.BOUNCE,optimized:!0})}E();$(".slider").each(function(){var s=$(this),t=s.find(".slide_group"),l=s.find(".slide"),a=[],e=0,o;function r(i){var c,d;u(),!(t.is(":animated")||e===i)&&(a[e].removeClass("active"),a[i].addClass("active"),i>e?(d="100%",c="-100%"):(d="-100%",c="100%"),l.eq(i).css({display:"block",left:d}),t.animate({left:c},function(){l.eq(e).css({display:"none"}),l.eq(i).css({left:0}),t.css({left:0}),e=i}))}function u(){clearTimeout(o),o=setTimeout(function(){e<l.length-1?r(e+1):r(0)},7e3)}$(".next_btn").on("click",function(){e<l.length-1?r(e+1):r(0)}),$(".previous_btn").on("click",function(){r(e!==0?e-1:l.length-1)}),$.each(l,function(i){var c=$('<a class="slide_btn">&bull;</a>');i===e&&c.addClass("active"),c.on("click",function(){r(i)}).appendTo(".slide_buttons"),a.push(c)}),l.css({display:"none"}),l.eq(e).css({display:"block",left:0}),u()});document.addEventListener("DOMContentLoaded",s=>{const t=document.getElementById("days"),l=document.getElementById("hours"),a=document.getElementById("minutes"),e=document.getElementById("seconds"),o=document.getElementById("days-label"),r=document.getElementById("hours-label"),u=document.getElementById("minutes-label"),i=document.getElementById("seconds-label"),c=new Date("September 21, 2024 12:00:00").getTime(),d=n=>n.toString().padStart(2,"0"),L=n=>n===1?"День":n>=2&&n<=4?"Дні":"Днів",v=n=>n===1?"Година":n>=2&&n<=4?"Години":"Годин",h=n=>n===1?"Хвилина":n>=2&&n<=4?"Хвилини":"Хвилин",k=n=>n===1?"Секунда":n>=2&&n<=4?"Секунди":"Секунд",C=setInterval(()=>{const n=new Date().getTime(),m=c-n,f=Math.floor(m/(1e3*60*60*24)),g=Math.floor(m%(1e3*60*60*24)/(1e3*60*60)),p=Math.floor(m%(1e3*60*60)/(1e3*60)),b=Math.floor(m%(1e3*60)/1e3);t.textContent=d(f),l.textContent=d(g),a.textContent=d(p),e.textContent=d(b),o.textContent=L(f),r.textContent=v(g),u.textContent=h(p),i.textContent=k(b),m<0&&(clearInterval(C),t.textContent="00",l.textContent="00",a.textContent="00",e.textContent="00",o.textContent="Дні",r.textContent="Години",u.textContent="Хвилини",i.textContent="Секунди")},1e3)});(()=>{const s={openModalBtn:document.querySelector("[data-modal-mobile-open]"),closeModalBtn:document.querySelector("[data-modal-mobile-close]"),modal:document.querySelector("[data-modal-mobile]"),menuLinks:document.querySelector("[nav-link-mobile-close]"),menuLinksOne:document.querySelector("[nav-link-mobile-close-1]"),menuLinksTwo:document.querySelector("[nav-link-mobile-close-2]"),menuLinksThree:document.querySelector("[nav-link-mobile-close-3]"),menuLinksFour:document.querySelector("[nav-link-mobile-close-4]")};s.openModalBtn.addEventListener("click",t),s.closeModalBtn.addEventListener("click",t),s.menuLinks.addEventListener("click",t),s.menuLinksOne.addEventListener("click",t),s.menuLinksTwo.addEventListener("click",t),s.menuLinksThree.addEventListener("click",t),s.menuLinksFour.addEventListener("click",t);function t(){s.modal.classList.toggle("is-open-mob")}})();document.querySelector(".mob-menu-item");
//# sourceMappingURL=commonHelpers.js.map
