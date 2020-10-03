import GameOverView from './game_over_view';

export default class GameView {
  constructor (options) {
    this.game = options.game;

    // default state starts with main menu
    // ! testing
    localStorage.setItem('state', 'play');

    // this.LoseView = new GameOverView({
    //   type: 'lose'
    // });

    // this.WinView = new GameOverView({
    //   type: 'win'
    // });

    this.checkStatus();
  }

  checkStatus () {
    // check 60 times a second
    // webpack
    setInterval(() => {
      if (localStorage.state === 'play') this.play();
      if (localStorage.state === 'lose') alert('you lose!');
      if (localStorage.state === 'win') alert('you win!');
    }, 17);
  }

  play () {
    this.game.clear(this.game.ctx);
    this.game.prerender();
    this.game.render(this.game.ctx);
  }
}