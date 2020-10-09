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

    this.main = new MainView();

    // create game over sounds
    this.playGameOverSound = false;
    this.loseSound = new Audio('assets/sounds/lose.wav');
    this.winSound = new Audio('assets/sounds/win.wav');

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
    this.canvasDiv = document.createElement("div");
    this.canvasDiv.className = "canvas-div";

    const canvas = document.createElement("canvas");
    canvas.className = "canvas";
    this.canvasDiv.appendChild(canvas);

    const DIM_X = 1366;
    const DIM_Y = 769;
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
          this.setup();
          break;
        case "play":
          this.main.unmount();
          this.playGameOverSound = true;
          this.game.start();
          this.mountCanvas();
          this.play();
          this.hud.mountHudButtons();
          break;
        case "pause":
          this.pauseModal.mount();
          break;
        case "help":
          this.helpModal.mount();
          break;
        case "win":
          this.unmountCanvas();
          this.game.ambientAudio.pause();
          this.hud.unmountHudButtons();
          this.mountGameOverView("win");
          this.gameOverSound();
          break;
        case "lose":
          this.game.ambientAudio.pause();
          this.unmountCanvas();
          this.hud.unmountHudButtons();
          this.mountGameOverView("lose");
          this.gameOverSound();
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
      document.body.appendChild(this.canvasDiv);
      this.game.mounted = true;
    }
  }

  unmountCanvas () {
    // only remove canvas element if it is mounted
    if (this.game.mounted) {
      document.body.removeChild(this.canvasDiv);
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

  gameOverSound () {
    if (localStorage.state === 'win' && this.playGameOverSound) {
      this.winSound.play();
      this.playGameOverSound = false;
    } else if (localStorage.state === 'lose' && this.playGameOverSound) {
      this.loseSound.play();
      this.playGameOverSound = false;
    }
  }
}