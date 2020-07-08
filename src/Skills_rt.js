import Compo from "./Component.js";

const skillTemplate = (skillRight) => `
  <li><span>${skillRight.}</span></li>
  <li><span>Database control tools</span></li>
  `;

class Skill_rt extends Compo {
  updateCompo() {
    this.divTemplate = skillTemplate;
    this.data = this.json.skills;
    this.showCompo();
  }
}

export default Skill_rt;
