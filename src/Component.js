import Loader from "./Loader.js";

class Component extends Loader {
  constructor(selector) {
    super();
    this.target = document.querySelector(selector);
  }

  async fetchData(path) {
    await super.fetchData(path).then(() => {
      if (this.updateComponent != null) {
        this.updateComponent();
      }
    });
  }

  display() {
    if (this.divTemplate != null) {
      this.data.map((v) => {
        const newdiv = document.createElement("div");
        newdiv.innerHTML = this.divTemplate(v);
        this.target.appendChild(newdiv);
        if (this.addEvent != null) {
          this.addEvent();
        }
      });
    }
  }
}
export default Component;
