import Component from "./Component.js";
const projectTemplate = (project) =>
  `
    <div class="project" data-type="${project.type}" data-id=${project.id}>
    <img src="${project.imgSrc}" alt="${project.name}" class="project__img">
     <div class="project__description">
      <h3>${project.name}</h3>
      <span> show me the money we can make over powerwhelming
    </div>
  </div>
`;

class Project extends Component {
  updateComponent() {
    this.divTemplate = projectTemplate;
    this.data = this.json.project;
    this.addEvent = this.addEventListener;
    this.display();
  }
  display() {
    if (this.divTemplate != null) {
      this.data.map((v) => {
        const newdiv = document.createElement("div");
        newdiv.innerHTML = projectTemplate(v);
        newdiv.addEventListener("click", (e) => {});
        this.target.appendChild(newdiv);
        if (this.addEvent != null) {
          this.addEvent();
        }
      });
    }
  }
  getData() {
    return this.json.project;
  }
  addEventListener() {
    this.addCategoryChangeListener();
    this.addClickEvent();
  }
  addClickEvent() {}

  addCategoryChangeListener() {
    const workBtnContainer = document.querySelector(".work__categories");
    console.log("work btn" + workBtnContainer);
    const projectContainer = document.querySelector(".work__projects");
    const projects = document.querySelectorAll(".project");
    workBtnContainer.addEventListener("click", (e) => {
      const filter = e.target.dataset.filter;
      if (filter == null) {
        return;
      }
      const active = document.querySelector(".category__btn.selected");
      if (active != null) {
        active.classList.remove("selected");
      }
      e.target.classList.add("selected");
      projectContainer.classList.add("anim-out");

      setTimeout(() => {
        projects.forEach((project) => {
          if (filter === "*" || filter === project.dataset.type) {
            project.classList.remove("invisible");
          } else {
            project.classList.add("invisible");
          }
        });
        projectContainer.classList.remove("anim-out");
      }, 300);
    });
  }
}

export default Project;
