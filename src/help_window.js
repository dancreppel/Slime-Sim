export default class HelpWindow {
  constructor () {
    this.window = document.createElement("div");
    this.window.className = "help-window";

    // * div housing controls image and info
    this.controlsDiv = document.createElement("div");
    this.controlsDiv.className = "controls-div";

    this.controlsImg = new Image();
    this.controlsImg.src = "assets/sprites/arrowKeys.png";
    this.controlsImg.className = "controls-img";

    this.controlsInfo = document.createElement("p");
    this.controlsInfo.innerHTML = "Use arrow keys for directional control.";
    this.controlsInfo.className = "controls-info";

    // append info and img to controls div
    this.controlsDiv.appendChild(this.controlsImg);
    this.controlsDiv.appendChild(this.controlsInfo);

    // * Goals
    this.goal = document.createElement("div");
    this.goal.className = "goal-div";
    this.goalGif = new Image();
    this.goalGif.className = "goal-gif";
    this.goalGif.src = "assets/sprites/consume.gif"; 
    this.goalInfo = document.createElement("p");
    this.goalInfo.className = "goal-info";
    this.goalInfo.innerHTML = "Consume enemies by absorbing creatures smaller than yourself."
    // append gif and info to div
    this.goal.appendChild(this.goalGif);
    this.goal.appendChild(this.goalInfo);

    // * Warning
    this.warning = document.createElement("div");
    this.warning.className = "warning-div";
    this.warningGif = new Image();
    this.warningGif.className = "warning-gif";
    this.warningGif.src = "assets/sprites/lose.gif";
    this.warningInfo = document.createElement("p");
    this.warningInfo.className = "warning-info";
    this.warningInfo.innerHTML = "Be sure to not eat more than you can chew or else you will lose."
    // append gif and info to div
    this.warning.appendChild(this.warningGif);
    this.warning.appendChild(this.warningInfo);

    // * append controls, goal, and warning to help window
    this.window.appendChild(this.controlsDiv);
    this.window.appendChild(this.goal);
    this.window.appendChild(this.warning);
  }

  appendTo (parent) {
    parent.appendChild(this.window);
  }
}