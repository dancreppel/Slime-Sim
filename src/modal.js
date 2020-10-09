export default class Modal {
  constructor (window) {
    this.view = document.createElement("div");
    this.view.className = "modal";
    this.view.appendChild(window);
  }
}