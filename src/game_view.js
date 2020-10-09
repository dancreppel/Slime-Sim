import GameOverView from './game_over_view';
import Game from "./game";
import HUD from './hud';
import Modal from './modal';
import HelpWindow from './help_window';
import MainView from './main_view';

export default class GameView {
  constructor () {
    // default state starts with main menu
    localStorage.setItem('state', 'main');
    
    this.setup();

    this.main = new MainView();

    // * game over views
    this.loseView = new GameOverView({
      type: 'lose'
    });

    this.winView = new GameOverView({
      type: 'win'
    });

    // * modal and its windows
    this.helpWindow = new HelpWindow();
    this.helpModal = new Modal({
      type: 'help',
      window: this.helpWindow.window
    });

    this.pauseWindow = document.createElement("p")
    this.pauseWindow.innerHTML = "Paused";
    this.pauseModal = new Modal({
      type: 'pause',
      window: this.pauseWindow
    });

    this.checkState();
  }

  setup () {
    const canvas = document.createElement("canvas");
    canvas.className = "canvas";
    const DIM_X = 1600;
    const DIM_Y = 900;
    const ctx = canvas.getContext("2d");
    const movementSpeed = 10;

    canvas.width = DIM_X;
    canvas.height = DIM_Y;

    this.game = new Game({
      DIM_X,
      DIM_Y,
      canvas,
      ctx,
      movementSpeed,
      ambientSrc: "assets/sounds/ambient.wav",
    });

    this.hud = new HUD();
  }

  checkState () {
    // check 60 times a second
    setInterval(() => {
      switch (localStorage.state) {
        case "main":
          this.main.mount();
          break;
        case "play":
          this.main.unmount();
          this.hud.mountHudButtons();
          this.game.start();
          this.mountCanvas();
          this.play();
          break;
        case "pause":
          this.pauseModal.mount();
          break;
        case "help":
          this.helpModal.mount();
          break;
        case "win":
          this.unmountCanvas();
          this.hud.unmountHudButtons();
          this.mountGameOverView("win");
          // reinitialize
          this.setup();
          break;
        case "lose":
          this.unmountCanvas();
          this.hud.unmountHudButtons();
          this.mountGameOverView("lose");
          // reinitialize
          this.setup();
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

  mountCanvas () {
    if (!this.game.mounted) {
      document.body.appendChild(this.game.canvas);
      this.game.mounted = true;
    }
  }

  unmountCanvas () {
    // only remove canvas element if it is mounted
    if (this.game.mounted) {
      document.body.removeChild(this.game.canvas);
      this.game.mounted = false;
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