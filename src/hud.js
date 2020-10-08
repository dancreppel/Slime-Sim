export default class HUD {
  constructor () {
    // default unmounted
    this.mounted = false;

    // help button 
    this.helpButton = document.createElement("i");
    this.helpButton.className = "fas fa-question help-button";
    this.helpButton.addEventListener("click", e => {
      e.preventDefault();
      localStorage.setItem('state', 'help');
    });
    
    // pause button
    this.pauseButton = document.createElement("i");
    this.pauseButton.className = "fas fa-pause pause-button";
    this.pauseButton.addEventListener("click", e => {
      e.preventDefault();
      localStorage.setItem('state', 'pause')
    });
    
    // unmute / mute button
    this.soundButton = document.createElement("i");
    // sound defaults to on
    this.soundButton.className = "fas fa-volume-mute sound-button";
    this.soundButton.addEventListener("click", e => {
      e.preventDefault();
      if (localStorage.sound === 'on') {
        localStorage.setItem("sound", "off");
        this.soundButton.className = "fas fa-volume-mute sound-button";
      } else {
        localStorage.setItem("sound", "on");
        this.soundButton.className = "fas fa-volume-up sound-button";
      }
    });

    this.hudButtons = [];
    this.hudButtons.push(this.helpButton);
    this.hudButtons.push(this.pauseButton);
    this.hudButtons.push(this.soundButton);
  }

  mountHudButtons () {
    if (this.mounted === false) {
      this.hudButtons.forEach(button => document.body.appendChild(button));
      this.mounted = true;
    }
  }

  unmountHudButtons () {
    if (this.mounted === true) {
      this.hudButtons.forEach(button => document.body.removeChild(button));
      this.mounted = false;
    }
  }
}