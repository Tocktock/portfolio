"use strict";

// Make Navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

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
  const scrollTo = document.querySelector(link);
  scrollIntoView(scrollTo);
});

// Handle click on "contact me" button on home

function scrollIntoView(selector) {
  console.log(selector);
  selector.scrollIntoView({ behavior: "smooth" });
}

const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener(
  "click",
  scrollIntoView.bind(this, document.querySelector("#contact"))
);
// Make home slowly fade to transparent as the window scrolls down

const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show arrow up button when scrolling down
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHe) {
  }
});
