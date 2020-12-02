"use strict";
import Project from "./src/Project.js";
import Skills_left from "./src/Skills_left.js";
import Navbar from "./src/Navbar.js";
import Home from "./src/Home.js";
import About from "./src/About.js";
import Modal from "./src/Modal.js";
import ProjectModal from "./src/ProjectModal.js";
import Skills_framework from "./src/Skills_framework.js"

// Make Navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

const navbar_t = new Navbar("#navbar");
navbar_t.display();

const home = new Home("#home");
home.display();

const about = new About("#about");
about.fetchData("./resources/about.json").then(() => {
  about.display();
});

const modal = new Modal("#modal");
const projectModal = new ProjectModal();
const project = new Project(".work__projects");
project.fetchData("./resources/projects.json").then(() => {
  projectModal.setData(project.getData());

  const projects = document.querySelectorAll(".project");
  projects.forEach((element) => {
    element.addEventListener("click", () => {
      const modalId = element.dataset.id;
      modal.modalUpdate(projectModal.getData(modalId));
      modal.toggleEvent();
    });
  });
});

const skill = new Skills_left(".skillset__left");
skill.fetchData("./resources/skills.json");

const skillFramework = new Skills_framework(".framework__list");
skillFramework.fetchData("./resources/skills_framework.json")

const skillEtc = new Skills_framework(".etc__list");
skillEtc.fetchData("./resources/skills_etc.json")


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
  navbarMenu.classList.toggle("open");
});

// Handle click on "contact me" button on home

function scrollIntoView(selector) {
  const target = document.querySelector(selector);
  target.scrollIntoView({ behavior: "smooth" });
}

const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", scrollIntoView.bind(this, "#contact"));

//  coontact Secret page up


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
