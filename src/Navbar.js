import Component from "./Component.js";

const NavArray = ["home", "about", "skills", "work", "contact"];

const NavbarTemplate = (arr) => `
<div class="navbar__logo">
  <img src="imgs/myicon.png"></img>
  <a href="#">JiYoung</a>
</div>
  <ul class="navbar__menu">
    ${arr
      .map(
        (v) =>
          `<li class="navbar__menu__item" data-link="#${v}">${v.toUpperCase()}</li>`
      )
      .join("")}
  </ul>
<button class="navbar__toggle-btn">
  <i class="fas fa-hamburger"></i>
</button>
`;

class Navbar extends Component {
  display() {
    this.target.innerHTML = NavbarTemplate(NavArray);
  }
}

export default Navbar;
