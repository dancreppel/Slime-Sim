export default class Modal {
  constructor (options) {
    // active determines if modal element is visible
    // default to false
    this.activeBackground = false;
    this.activeWindow = false;

    this.background = document.createElement("div");
    this.window = options.window;
    this.background.setAttribute("class", "modalBackground");
    this.window.setAttribute("class", "modalWindow");
  }
}