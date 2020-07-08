class Modal {
  constructor(selector) {
    this.modalShowing = false;
    this.target = document.querySelector(selector);
    this.modalContainer = document.querySelector(".modal__container");
    this.modalContainer.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    this.addExistEvent();
  }
  modalUpdate(template) {
    if (this.modalContainer != null) {
      console.log(this.modalContainer);
      this.modalContainer.innerHTML = template;
    }
  }
  toggleEvent() {
    this.modalShowing = !this.modalShowing;
    if (this.modalShowing) {
      this.target.style.display = "block";
      this.modalContainer.style.zIndex = 2;
    } else {
      this.target.style.display = "none";
      this.modalContainer.style.zIndex = 0;
    }
  }
  addExistEvent() {
    this.target.addEventListener("click", () => {
      console.log("modal clicked");
      this.toggleEvent();
    });
  }
}

export default Modal;
