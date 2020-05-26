import Compo from "./Compo.js";

const skillTemplate = (skill) =>
  `        
  <div class="skill">
  <div class="skill__description">
    <span>${skill.skill}</span>
    <span>${skill.mastery}%</span>
  </div>
  <div class="skill__bar">
    <div class="skill__value" style="width: ${skill.mastery}%;"></div>
  </div>
</div>
`;

class Skill extends Compo {
  updateCompo() {
    this.divTemplate = skillTemplate;
    this.data = this.json.skills;
    this.showCompo();
  }
}

export default Skill;
