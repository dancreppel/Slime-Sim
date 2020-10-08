export default class GameOverView {
  constructor (options) {
    // lose or win
    this.type = options.type;

    // view is defaulted to no mounted
    this.mounted = false;
    
    // div that houses the game over image and replay button 
    this.gameOverView = document.createElement("div");
    this.gameOverView.className = "game-over-view"
    
    // instantiate game over image
    this.image = new Image();
    if (this.type === 'lose') this.image.src = "assets/sprites/gameover.jpg";
    else this.image.src = "assets/sprites/youwin.jpg"
    this.image.className = "game-over-image";

    // instantiate replay button
    this.replayButton = document.createElement("button");
    this.replayButton.className = 'replay-button';
    this.replayButton.innerHTML = 'Replay';
    this.replayButton.addEventListener("click", e => {
      e.preventDefault();
      this.replay();
    })

    // attach image and replay button to the game over view
    this.gameOverView.appendChild(this.image);
    this.gameOverView.appendChild(this.replayButton);
  }

  replay () {
    localStorage.setItem('state', 'main');
  }
}