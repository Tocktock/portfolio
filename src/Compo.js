class Compo {
  constructor(selector) {
    this.target = document.querySelector(selector);
  }

  async fetchData(path) {
    this.json = await fetch(`${path}`).then(function (response) {
      return response.json();
    });
    console.log(this.json);
    if (this.updateCompo != null) {
      this.updateCompo();
    }
  }

  showCompo() {
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
export default Compo;
