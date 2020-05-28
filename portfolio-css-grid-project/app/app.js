// variables
const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");

// add fixed class to navbar
window.addEventListener("scroll", function() {
    if(window.pageXOffset > 80) {
        navbar.classList.add("navbar-fixed");
    } else {
        navbar.classList.remove("navbar-fixed");
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