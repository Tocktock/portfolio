import Component from "./Component.js";

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

class Skills_left extends Component {
  updateComponent() {
    this.divTemplate = skillTemplate;
    this.data = this.json.skills;
    this.display();
  }
}

export default Skills_left;
