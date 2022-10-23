const button = document.querySelector(".header__menu");
const nav = document.querySelector(".header__nav");

button.addEventListener("click",()=>{
    nav.classList.toggle("show-nav");
    button.classList.toggle("menu-close");
});

const loading = document.querySelector("#loading");
window.addEventListener("load",()=>{
    loading.style.animation="blackHole 300ms  ease forwards";
})