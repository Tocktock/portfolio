import Loader from "./Loader.js";

const projectModalTemplate = (project) =>
  `
    <div class="modal__head">
      <h2>${project.name}</h2>
    </div>
    <div class="modal__techStack">
    ${project.useStack.map((v) => `<span> ${v} </span></br>`).join("")} 
    </div>
    <div class="modal__description">
    <span>${project.description}</span>
    </div>
    <div class="modal__watch">click<i class="fas fa-arrow-down"></i></div>
    <div class="modal__picture">
      <a target=_blank href=${project.link}> <img src=${project.imgSrc} alt=${
    project.name
  } /></a>
    </div>
`;

class ProjectModal {
  constructor() {
    this.modalArray = [];
  }
  setData(data) {
    data.map((v) => {
      console.log(v);
      this.modalArray.push(projectModalTemplate(v));
    });
  }
  getData(id) {
    return this.modalArray[id];
  }
}

export default ProjectModal;
