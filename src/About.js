import Component from "./Component.js";

const AboutTemplate = (data) => `
<h1>About Me</h1>
<p>
    ${data.head}
</p>
<div class="about__majors">
  <div class="major">
    <div class="major__icon">
      <i class="fab fa-html5"></i>
    </div>
    <h2 class="major__title">
      Front-end
    </h2>
    <div class="major__description">
        ${data.frontEnd.map((v) => `${v}`)}
    </div>
  </div>
  <div class="major">
    <div class="major__icon">
      <i class="fas fa-server"></i>
    </div>
    <h2 class="major__title">
      Back-end
    </h2>
    <div class="major__description">
    ${data.backEnd.map((v) => `${v}`)}
    </div>
  </div>
</div>
<div id="about__whyWeb">
<h1> Why Web Developer</h1>
  <hr width="100%" />
  <hr width="70%"/> 
  <div><i id="about__whyWebIcon" class="fas fa-arrows-alt-v "></i></div>
  <div id="about__whyWebText" class="whyWebText"> 
  ${data.whyWeb}
  </div>
</div>
`;

class About extends Component {
  display() {
    this.target.innerHTML = AboutTemplate(this.json.about);
    this.addListenerAboutWhyWeb();
  }
  addListenerAboutWhyWeb() {
    this.spread = false;
    const whyWeb = document.querySelector("#about__whyWeb");
    const whyWebIcon = document.querySelector("#about__whyWebIcon");
    const whyWebText = document.querySelector("#about__whyWebText");

    whyWeb.addEventListener("click", () => {
      whyWebText.scrollIntoView({ behavior: "smooth", block: "center" });
      whyWebText.classList.toggle("open");
    });
  }
}

export default About;
