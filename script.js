const hamburger = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const overlay = document.getElementById("overlay");
const navItems=document.querySelectorAll(".nav-links a");

function toggleMenu(){
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
    overlay.classList.toggle("active");
}

hamburger.addEventListener("click", toggleMenu);


overlay.addEventListener("click", toggleMenu);

