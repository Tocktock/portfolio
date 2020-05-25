"use strict";
import Project from "./src/project.js";

// Make Navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

const alpha = new Project(".work__projects");

alpha.fetchProject();

document.addEventListener("scroll", () => {
  if (navbarHeight < window.scrollY) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (e) => {
  const target = e.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

// Navbar toggle btn for small screen
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  console.log("afd");
  navbarMenu.classList.toggle("open");
});

// Handle click on "contact me" button on home

function scrollIntoView(selector) {
  console.log(selector);
  const target = document.querySelector(selector);
  target.scrollIntoView({ behavior: "smooth" });
}

const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", scrollIntoView.bind(this, "#contact"));
// Make home slowly fade to transparent as the window scrolls down

const homeContainer = document.querySelector(".home__container");
const homeHeight = homeContainer.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show arrow up button when scrolling down'
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

arrowUp.addEventListener("click", scrollIntoView.bind(this, "#home"));

// Remove navbar selection from the previous item and select current item
