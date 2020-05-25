const projectTemplate = (project) =>
  `        
    <a href="${project.link}" class="project" target="_blank" data-type="${project.type}">
    <img src="${project.imgSrc}" alt="${project.name}" class="project__img">
     <div class="project__description">
      <h3>${project.name}</h3>
      <span> ${project.comment}
    </div>
  </a>
`;
// 프로젝트 누르면 간단한 설명 나오게.
const projectModalTemplate = (project) => `

`;

class Project {
  constructor(selector) {
    this.projectElement = document.querySelector(selector);
    console.log(this.projectElement);
    this.model = [];
  }

  async fetchProject() {
    this.json = await fetch("../resources/projects.json").then(function (
      response
    ) {
      return response.json();
    });
    this.showProject();
  }

  showProject() {
    console.log(this.json.project);
    this.json.project.map((v) => {
      const newdiv = document.createElement("div");
      newdiv.innerHTML = projectTemplate(v);
      this.projectElement.appendChild(newdiv);
    });
    this.addEventListenr();
  }
  addEventListenr() {
    const workBtnContainer = document.querySelector(".work__categories");
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
