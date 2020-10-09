export default class Modal {
  constructor (window) {
    this.modal = document.createElement("div");
    this.modal.className = "modal";
    this.modal.appendChild(window);
  }

  unmount () {
    document.body.removeChild(this.modal);
  }

  mount () {
    document.body.appendChild(this.modal);
  }
}