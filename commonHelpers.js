(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(e){if(e.ep)return;e.ep=!0;const l=s(e);fetch(e.href,l)}})();jQuery(document).ready(function(t){var n=t("#slider .collect-list .collect-item").length,s=t("#slider .collect-list .collect-item").width(),r=t("#slider .collect-list .collect-item").height(),e=n*s;t("#slider").css({width:s,height:r}),t("#slider .collect-list").css({width:e,marginLeft:-s}),t("#slider .collect-list .collect-item:last-child").prependTo("#slider .collect-list");function l(){t("#slider .collect-list").animate({left:+s},200,function(){t("#slider .collect-list .collect-item:last-child").prependTo("#slider .collect-list"),t("#slider .collect-list").css("left","")})}function i(){t("#slider .collect-list").animate({left:-s},200,function(){t("#slider .collect-list .collect-item:first-child").appendTo("#slider .collect-list"),t("#slider .collect-list").css("left","")})}t("a.control-prev").click(function(){l()}),t("a.control-next").click(function(){i()})});$(".slider").each(function(){var t=$(this),n=t.find(".slide_group"),s=t.find(".slide"),r=[],e=0,l;function i(c){var a,u;m(),!(n.is(":animated")||e===c)&&(r[e].removeClass("active"),r[c].addClass("active"),c>e?(u="100%",a="-100%"):(u="-100%",a="100%"),s.eq(c).css({display:"block",left:u}),n.animate({left:a},function(){s.eq(e).css({display:"none"}),s.eq(c).css({left:0}),n.css({left:0}),e=c}))}function m(){clearTimeout(l),l=setTimeout(function(){e<s.length-1?i(e+1):i(0)},5e4)}$(".next_btn").on("click",function(){e<s.length-1?i(e+1):i(0)}),$(".previous_btn").on("click",function(){i(e!==0?e-1:3)}),$.each(s,function(c){var a=$('<a class="slide_btn">&bull;</a>');c===e&&a.addClass("active"),a.on("click",function(){i(c)}).appendTo(".slide_buttons"),r.push(a)}),m()});document.addEventListener("DOMContentLoaded",t=>{const n=document.getElementById("days"),s=document.getElementById("hours"),r=document.getElementById("minutes"),e=document.getElementById("seconds"),l=document.getElementById("days-label"),i=document.getElementById("hours-label"),m=document.getElementById("minutes-label"),c=document.getElementById("seconds-label"),a=new Date("September 21, 2024 12:00:00").getTime(),u=o=>o.toString().padStart(2,"0"),p=o=>o===1?"День":o>=2&&o<=4?"Дні":"Днів",y=o=>o===1?"Година":o>=2&&o<=4?"Години":"Годин",b=o=>o===1?"Хвилина":o>=2&&o<=4?"Хвилини":"Хвилин",k=o=>o===1?"Секунда":o>=2&&o<=4?"Секунди":"Секунд",C=setInterval(()=>{const o=new Date().getTime(),f=a-o,g=Math.floor(f/(1e3*60*60*24)),v=Math.floor(f%(1e3*60*60*24)/(1e3*60*60)),L=Math.floor(f%(1e3*60*60)/(1e3*60)),h=Math.floor(f%(1e3*60)/1e3);n.textContent=u(g),s.textContent=u(v),r.textContent=u(L),e.textContent=u(h),l.textContent=p(g),i.textContent=y(v),m.textContent=b(L),c.textContent=k(h),f<0&&(clearInterval(C),n.textContent="00",s.textContent="00",r.textContent="00",e.textContent="00",l.textContent="Дні",i.textContent="Години",m.textContent="Хвилини",c.textContent="Секунди")},1e3)});(()=>{const t={openModalBtn:document.querySelector("[data-modal-mobile-open]"),closeModalBtn:document.querySelector("[data-modal-mobile-close]"),modal:document.querySelector("[data-modal-mobile]"),menuLinks:document.querySelector("[nav-link-mobile-close]"),menuLinksOne:document.querySelector("[nav-link-mobile-close-1]"),menuLinksTwo:document.querySelector("[nav-link-mobile-close-2]"),menuLinksThree:document.querySelector("[nav-link-mobile-close-3]"),menuLinksFour:document.querySelector("[nav-link-mobile-close-4]")};t.openModalBtn.addEventListener("click",n),t.closeModalBtn.addEventListener("click",n),t.menuLinks.addEventListener("click",n),t.menuLinksOne.addEventListener("click",n),t.menuLinksTwo.addEventListener("click",n),t.menuLinksThree.addEventListener("click",n),t.menuLinksFour.addEventListener("click",n);function n(){t.modal.classList.toggle("is-open-mob")}})();const d=document.querySelector(".mob-menu-item");d.classList.toggle("is-active");console.log(d.classList);const E=d.classList.contains("is-active");console.log(`hasActiveClass - ${E}`);d.classList.add("special");console.log(d.classList);d.classList.remove("is-active");console.log(d.classList);d.classList.replace("special","regular");console.log(d.classList);
//# sourceMappingURL=commonHelpers.js.map
