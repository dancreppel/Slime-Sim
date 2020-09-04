import Entity from './entity';
import Slime from './slime';

export default class Game {
  constructor (options) {
    this.DIM_X = options.DIM_X;
    this.DIM_Y = options.DIM_Y;
    this.ctx = options.ctx;
    this.entities = [];
    this.moveDirX = 0;
    this.moveDirY = 0;

    this.createPlayer();
    this.generateEntities();
  }

  createPlayer () {
    // center pos in the middle of the canvas object
    let pos = [this.DIM_X / 2, this.DIM_Y / 2];
    this.player = new Slime({
      pos,
      dim: [20, 20],
      src: "assets/sprites/test-slime.png"
    });

    this.entities.push(this.player);
  }

  generateMap () {

  }

  generateEntities () {
    // * For testing
    this.rock = new Entity ({
      pos: [0, 0],
      dim: [200, 150],
      src: 'assets/sprites/rock.jpg'
    });

    this.entities.push(this.rock);
  }

  render (ctx) {
    this.player.draw();
    this.rock.draw();
  }

  start () {
    // refresh 60 times per second
    setInterval(() => this.render(), 16.667)
    this.setKeyBinds();
  }

  setKeyBinds () {
    // handle keydownfor arrow keys
    document.addEventListener('keydown', e => {
      e.preventDefault();
      switch (e.key) {
        case ArrowUp:
          this.moveDirY = 1;
          break;
        case ArrowDown:
          this.moveDirY = -1;
          break;
        case ArrowLeft:
          this.moveDirX = -1;
          break;
        case ArrowRight:
          this.moveDirX = 1;
          break;
        default:
          break;
      }
    });

    // handle keyup for arrow keys
    document.addEventListener('keyup', e => {
      e.preventDefault();
      const horKeys = ['ArrowLeft', 'ArrowRight'];
      const verKeys = ['ArrowUp', 'ArrowDown']; 
      debugger;
      if (horKeys.includes(e.key)) {
        this.moveDirY = 0;
      }

      if (verKeys.includes(e.key)) {
        this.moveDirY = 0;
      }
    })
  }

  moveEntities () {
    // * testing
    this.entities.forEach(entity => {
      entity.move(this.moveDirX, this.moveDirY);
    })
  }
}