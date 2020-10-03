export default class Modal {
  constructor (options) {
    // active determines if modal element is visible
    // default to false
    this.active = false;

    this.view = document.createElement("div");
    this.view.setAttribute("class", "modal");
  }
}