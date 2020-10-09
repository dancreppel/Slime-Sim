export default class Modal {
  constructor (window) {
    this.modal = document.createElement("div");
    this.modal.className = "modal";
    this.modal.appendChild(window);

    this.closeButton = document.createElement("i");
    this.closeButton.className = "material-icons close-button";
    this.closeButton.innerHTML = "cancel";
    this.closeButton.addEventListener("click", e => {
      this.unmount();
      localStorage.setItem('state', 'play');
    });
    this.modal.appendChild(this.closeButton);
  }

  unmount () {
    document.body.removeChild(this.modal);
  }

  mount () {
    document.body.appendChild(this.modal);
  }
}