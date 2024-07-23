(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}})();document.addEventListener("DOMContentLoaded",s=>{const o=document.getElementById("days"),a=document.getElementById("hours"),c=document.getElementById("minutes"),t=document.getElementById("seconds"),n=document.getElementById("days-label"),r=document.getElementById("hours-label"),u=document.getElementById("minutes-label"),m=document.getElementById("seconds-label"),b=new Date("September 21, 2024 12:00:00").getTime(),d=e=>e.toString().padStart(2,"0"),p=e=>e===1?"День":e>=2&&e<=4?"Дні":"Днів",v=e=>e===1?"Година":e>=2&&e<=4?"Години":"Годин",h=e=>e===1?"Хвилина":e>=2&&e<=4?"Хвилини":"Хвилин",E=e=>e===1?"Секунда":e>=2&&e<=4?"Секунди":"Секунд",C=setInterval(()=>{const e=new Date().getTime(),i=b-e,f=Math.floor(i/(1e3*60*60*24)),L=Math.floor(i%(1e3*60*60*24)/(1e3*60*60)),g=Math.floor(i%(1e3*60*60)/(1e3*60)),y=Math.floor(i%(1e3*60)/1e3);o.textContent=d(f),a.textContent=d(L),c.textContent=d(g),t.textContent=d(y),n.textContent=p(f),r.textContent=v(L),u.textContent=h(g),m.textContent=E(y),i<0&&(clearInterval(C),o.textContent="00",a.textContent="00",c.textContent="00",t.textContent="00",n.textContent="Дні",r.textContent="Години",u.textContent="Хвилини",m.textContent="Секунди")},1e3)});(()=>{const s={openModalBtn:document.querySelector("[data-modal-mobile-open]"),closeModalBtn:document.querySelector("[data-modal-mobile-close]"),modal:document.querySelector("[data-modal-mobile]"),menuLinks:document.querySelector("[nav-link-mobile-close]"),menuLinksOne:document.querySelector("[nav-link-mobile-close-1]"),menuLinksTwo:document.querySelector("[nav-link-mobile-close-2]"),menuLinksThree:document.querySelector("[nav-link-mobile-close-3]")};s.openModalBtn.addEventListener("click",o),s.closeModalBtn.addEventListener("click",o),s.menuLinks.addEventListener("click",o),s.menuLinksOne.addEventListener("click",o),s.menuLinksTwo.addEventListener("click",o),s.menuLinksThree.addEventListener("click",o);function o(){s.modal.classList.toggle("is-open-mob")}})();const l=document.querySelector(".mob-menu-item");l.classList.toggle("is-active");console.log(l.classList);const x=l.classList.contains("is-active");console.log(`hasActiveClass - ${x}`);l.classList.add("special");console.log(l.classList);l.classList.remove("is-active");console.log(l.classList);l.classList.replace("special","regular");console.log(l.classList);
//# sourceMappingURL=commonHelpers.js.map
