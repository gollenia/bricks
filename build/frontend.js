!function(){var t={863:function(){const t=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?t.target.classList.add("ctx-animate-start"):t.target.classList.remove("ctx-animate-start")}))}));document.querySelectorAll(".ctx-animate-on-scroll, .ctx-animate-li-on-scroll li").forEach((e=>{t.observe(e)}))}},e={};function n(s){var a=e[s];if(void 0!==a)return a.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,n),r.exports}!function(){"use strict";const t={progressBars:!1,init(t){let e=document.getElementsByClassName(t);if(this.progressBars=e,e){for(let t=0;t<e.length;t++)this.add(e[t]);return e}return!1},add(t){window.addEventListener("scroll",this.update.bind(event,t)),window.addEventListener("resize",this.update.bind(event,t)),this.update(t)},animate(t,e){if(this.animating)return;this.animating=!0;const n=t.dataset.max;let s=t.dataset.current;if(n===s)return;const a=s<n?100:Math.round(100*s/n),r=a>100?100:a;let o=e/1e3*50,i=0,d=t.getElementsByClassName("progress__number-injection")[0],l=t.getElementsByClassName("progress__indicator")[0],c=t.getElementsByClassName("progress__label")[0],m=setInterval((function(){i++;let t=Math.sqrt(1-Math.pow(i/o-1,2)),e=new Intl.NumberFormat("de-DE",{style:"decimal"}).format(Math.round(s*t));d.innerHTML=e,l.style.width=r*t+"%",c.innerHTML=`${Math.round(a*t)}%`,i==o&&clearInterval(m)}),20)},update(e,n=!1){let s=e.getBoundingClientRect(),a=e.classList.contains("progress--loaded");s.top>=0&&s.bottom<=window.innerHeight?a||(e.style.width="{{percent}}%",e.classList.add("progress--loaded"),t.animate(e,3e3)):e.classList.remove("progress--loaded")}};var e=t;n(863),document.addEventListener("DOMContentLoaded",(()=>{e.init("progress"),window.addEventListener("DOMContentLoaded",(()=>{let t=document.querySelectorAll("button[data-modal]");if(t)for(const e of t)e.addEventListener("click",(t=>{const n=document.getElementById(e.dataset.modal);n.classList.add("modal--open"),n.addEventListener("click",(t=>{(t.target===t.currentTarget||t.target.classList.contains("modal__close"))&&document.getElementById(e.dataset.modal).classList.remove("modal--open")}))}))}))}))}()}();