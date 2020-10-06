import GameOverView from './game_over_view';

export default class GameView {
  constructor (options) {
    this.game = options.game;

    // default state starts with main menu
    // ! testing
    localStorage.setItem('state', 'play');

    this.canvas = document.getElementById('canvas');
    this.canvas.mounted = true;

    this.loseView = new GameOverView({
      type: 'lose'
    });

    this.winView = new GameOverView({
      type: 'win'
    });

    this.checkState();
  }

  checkState () {
    // check 60 times a second
    setInterval(() => {
      switch (localStorage.state) {
        case 'play':
          this.play();
          break;
        case 'win':
          this.mountGameOverView('win');
          this.unmountCanvas();
          break;
        case 'lose':
          this.mountGameOverView('lose');
          this.unmountCanvas();
          break;
        default:
          break;
      }
    }, 17);
  }

  play () {
    this.game.clear(this.game.ctx);
    this.game.prerender();
    this.game.render(this.game.ctx);
  }

  unmountCanvas () {
    // only remove canvas element if it is mounted
    if (this.canvas.mounted) {
      document.body.removeChild(this.canvas);
      this.canvas.mounted = false;
    }
  }

  mountGameOverView (type) {
    if (type === 'win' && !this.mounted) {
      document.body.appendChild(this.winView.gameOverView);
    } else if (type === 'lose' && !this.mounted) {
      document.body.appendChild(this.loseView.gameOverView);
    }
  }
}