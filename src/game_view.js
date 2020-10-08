import GameOverView from './game_over_view';
import HUD from './hud';

export default class GameView {
  constructor (options) {
    this.game = options.game;

    // default state starts with main menu
    // ! testing
    localStorage.setItem('state', 'play');

    this.canvas = document.getElementById('canvas');
    this.canvas.mounted = true;

    this.hud = new HUD();

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
          this.hud.mountHudButtons();
          break;
        case 'win':
          this.unmountCanvas();
          this.hud.unmountHudButtons();
          this.mountGameOverView('win');
          break;
        case 'lose':
          this.unmountCanvas();
          this.hud.unmountHudButtons();
          this.mountGameOverView('lose');
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

  // mountCanvas () {
  //   if (!this.canvas.mounted) {
  //     document.body.appendChild
  //   }
  // }

  unmountCanvas () {
    // only remove canvas element if it is mounted
    if (this.canvas.mounted) {
      document.body.removeChild(this.canvas);
      this.canvas.mounted = false;
    }
  }

  mountGameOverView (type) {
    if (type === 'win' && !this.winView.mounted) {
      document.body.appendChild(this.winView.gameOverView);
      this.winView.mounted = true;
    } else if (type === 'lose' && !this.loseView.mounted) {
      document.body.appendChild(this.loseView.gameOverView);
      this.loseView.mounted = true;
    }
  }
}