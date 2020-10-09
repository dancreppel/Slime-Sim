export default class GameOverView {
  constructor (options) {
    // lose or win
    this.type = options.type;

    // view is defaulted to no mounted
    this.mounted = false;
    
    // div that houses the game over image and replay button 
    this.gameOverView = document.createElement("div");
    
    // instantiate game over image
    this.image = new Image();
    if (this.type === 'lose') {
      this.image.src = "assets/sprites/gameover.jpg";
      this.gameOverView.className = "lose-view";
    } else {
      this.image.src = "assets/sprites/youwin.jpg"
      this.gameOverView.className = "win-view";
    }
    this.image.className = "game-over-image";

    // instantiate replay button
    this.replayButton = document.createElement("div");
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
    document.body.removeChild(this.gameOverView);
    this.mounted = false;
  }
}