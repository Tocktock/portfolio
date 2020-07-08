import Component from "./Component.js";

const HomeTemplate = () => `
<div class="home__container">
<img
  src="imgs/profile.png"
  alt="JiYoung profile photo"
  class="home__avatar"
/>
<h1 class="home__title">Hello I'm dreamer</h1>
<h2 class="home__description">
  Software Engineer currently developing web
</h2>
<button class="home__contact">Contact Me</button>
</div>
`;

class Home extends Component {
  display() {
    this.target.innerHTML = HomeTemplate();
  }
}

export default Home;
