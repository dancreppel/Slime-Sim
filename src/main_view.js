import HelpWindow from './help_window';

export default class MainView {
  constructor () {
    // default to false
    this.mounted = false;

    this.main = document.createElement("div");
    this.main.className = "main-div";

    this.help = new HelpWindow();
    this.help.appendTo(this.main);

    this.startMessage = document.createElement("p");
    this.startMessage.className = 'start-message';
    this.startMessage.innerHTML = "Press ENTER to start game."
    this.main.appendChild(this.startMessage);

    this.enterHandler = e => {
      if (e.key === "enter") localStorage.setItem("state", "play");
    }
  }

  mount () {
    if (localStorage.state === 'main' && !this.mounted) {
      this.mounted = true;
      document.appendChild(this.main);
      document.addEventListener("keydown", this.enterHandler);
    }
  }

  unmount () {
    if (localStorage.state === 'play' && this.mounted) {
      document.removeChild(this.main);
      document.removeEventListener("keydown", this.enterHandler);
    }
  }
}