// variables
const navbar = document.querySelector("#nav");
const navbarGhost = document.querySelector("#nav-ghost");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");

// add fixed class to navbar
window.addEventListener("scroll", function() {
    if(window.pageYOffset > 80) {
        navbar.classList.add("navbar-fixed");
        navbarGhost.classList.add("nav-ghost-fixed");
    } else {
        navbar.classList.remove("navbar-fixed");
        navbarGhost.classList.remove("nav-ghost-fixed");
    }
});

// show sidebar
navBtn.addEventListener("click", function() {
    sidebar.classList.add("show-sidebar");
});

// hide sidebar
closeBtn.addEventListener("click", function() {
    sidebar.classList.remove("show-sidebar");
});

// set years
date.innerHTML = new Date().getFullYear();