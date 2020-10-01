export default class Modal {
  constructor (options) {
    // active determines if modal is visible
    // default to false
    this.active = false;

    this.background = document.createElement("div");
    this.window = options.window;
    this.background.setAttribute("class", "modalBackground");
    this.window.setAttribute("class", "modalWindow");
  }
}