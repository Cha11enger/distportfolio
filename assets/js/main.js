!function(){"use strict";const e=(e,t=!1)=>(e=e.trim(),t?[...document.querySelectorAll(e)]:document.querySelector(e)),t=(t,i,o,s=!1)=>{let l=e(i,s);l&&(s?l.forEach(e=>e.addEventListener(t,o)):l.addEventListener(t,o))},i=(e,t)=>{e.addEventListener("scroll",t)};let o=e("#navbar .scrollto",!0);const s=()=>{let t=window.scrollY+200;o.forEach(i=>{if(!i.hash)return;let o=e(i.hash);o&&(t>=o.offsetTop&&t<=o.offsetTop+o.offsetHeight?i.classList.add("active"):i.classList.remove("active"))})};window.addEventListener("load",s),i(document,s);const l=t=>{let i=e(t).offsetTop;window.scrollTo({top:i,behavior:"smooth"})};let a=e(".back-to-top");if(a){const e=()=>{window.scrollY>100?a.classList.add("active"):a.classList.remove("active")};window.addEventListener("load",e),i(document,e)}t("click",".mobile-nav-toggle",function(t){e("body").classList.toggle("mobile-nav-active"),this.classList.toggle("bi-list"),this.classList.toggle("bi-x")}),t("click",".scrollto",function(t){if(e(this.hash)){t.preventDefault();let i=e("body");if(i.classList.contains("mobile-nav-active")){i.classList.remove("mobile-nav-active");let t=e(".mobile-nav-toggle");t.classList.toggle("bi-list"),t.classList.toggle("bi-x")}l(this.hash)}},!0),window.addEventListener("load",()=>{window.location.hash&&e(window.location.hash)&&l(window.location.hash)});const n=e(".typed");if(n){let e=n.getAttribute("data-typed-items");e=e.split(","),new Typed(".typed",{strings:e,loop:!0,typeSpeed:100,backSpeed:50,backDelay:2e3})}let r=e(".skills-content");r&&new Waypoint({element:r,offset:"80%",handler:function(t){e(".progress .progress-bar",!0).forEach(e=>{e.style.width=e.getAttribute("aria-valuenow")+"%"})}}),window.addEventListener("load",()=>{let i=e(".portfolio-container");if(i){let o=new Isotope(i,{itemSelector:".portfolio-item"}),s=e("#portfolio-flters li",!0);t("click","#portfolio-flters li",function(e){e.preventDefault(),s.forEach(function(e){e.classList.remove("filter-active")}),this.classList.add("filter-active"),o.arrange({filter:this.getAttribute("data-filter")}),o.on("arrangeComplete",function(){AOS.refresh()})},!0)}}),GLightbox({selector:".portfolio-lightbox"}),new Swiper(".portfolio-details-slider",{speed:400,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}}),new Swiper(".testimonials-slider",{speed:600,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:"auto",pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:20},1200:{slidesPerView:3,spaceBetween:20}}}),window.addEventListener("load",()=>{AOS.init({duration:1e3,easing:"ease-in-out",once:!0,mirror:!1})})}();