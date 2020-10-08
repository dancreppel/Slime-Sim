export default class HUD {
  constructor () {
    // help button 
    this.helpButton = document.createElement("button");
    this.helpButton.className = "help-button";
    this.helpButton.addEventListener("click", e => {
      e.preventDefault();
      localStorage.setItem('state', 'help');
    });
    
    // pause button
    this.pauseButton = document.createElement("button");
    this.pauseButton.className = "pause-button";
    this.pauseButton.addEventListener("click", e => {
      e.preventDefault();
      localStorage.setItem('state', 'pause')
    });
    
    // unmute / mute button
    this.soundButton = document.createElement("button");
    this.soundButton.className = "sound-button";
    this.soundButton.addEventListener("click", e => {
      e.preventDefault();
      if (localStorage.sound === 'on') localStorage.setItem('sound', 'off');
      else localStorage.setItem('sound', 'on');
    });

    this.hudButtons = [];
    this.hudButtons.push(this.helpButton);
    this.hudButtons.push(this.pauseButton);
    this.hudButtons.push(this.soundButton);
  }

  mountHudButtons () {
    this.hudButtons.forEach(button => document.body.appendChild(button));
  }

  unmountHudButtons () {
    this.hudButtons.forEach(button => document.body.removeChild(button));
  }
}