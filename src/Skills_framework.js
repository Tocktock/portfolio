import Component from "./Component.js";

const skillTemplate = (skill) => `
  <li><span>${skill.skill}</span></li>
  `;

class Skills_framework extends Component {
  updateComponent() {
    this.divTemplate = skillTemplate;
    this.data = this.json.skills;
    this.display();
  }
}

export default Skills_framework;
