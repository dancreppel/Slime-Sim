import Entity from './entity';
import Creature from './creature'
import Slime from './slime';
import Map from './map';

export default class Game {
  constructor (options) {
    this.DIM_X = options.DIM_X;
    this.DIM_Y = options.DIM_Y;
    this.ctx = options.ctx;
    this.entities = [];
    this.creatures = [];
    this.moveDirX = 0;
    this.moveDirY = 0;

  }

  createPlayer () {
    // center pos in the middle of the canvas object
    let pos = [this.DIM_X / 2, this.DIM_Y / 2];
    this.player = new Slime({
      pos,
      dim: [30, 30],
      src: "assets/sprites/slime.png"
    });

    // this.entities.push(this.player);
    // this.creatures.push(this.player);
  }

  generateMap () {
    this.sandBox = new Map({
      height: 6000,
      wall: "assets/sprites/rock.png",
      floor: "assets/sprites/grass.png",
      outside: "assets/sprites/dirt.jpg",
    });
  }

  generateEntities () {
    // add inanimate objects like trees to entities array
    this.entities = this.entities.concat(this.sandBox.inanimateEntities);
  }

  generateEnemies () {
    // ! for testing
    for(let i = 0; i < 20; i++) {
      this.creatures.push(
        new Creature({
          pos: [500, 25 * i + 500],
          dim: [20, 20],
          src: "assets/sprites/mouse.png",
        })
      );
    }
    // let mouse = new Creature ({
    //   pos: [500,500],
    //   dim: [20,20],
    //   src: 'assets/sprites/mouse.png'
    // });

    // this.creatures.push(mouse);
  }

  render (ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.sandBox.draw(ctx);
    this.entities.forEach(entity => entity.draw(ctx));
    this.creatures.forEach(creature => creature.draw(ctx));
    this.player.draw(ctx);
  }

  start () {
    this.setKeyBinds();
    this.generateMap();
    this.generateEntities();
    this.generateEnemies();
    this.createPlayer();
    // refresh 60 times per second
    setInterval(() => {
      this.render(this.ctx);
      // regular move
      this.move(false);
      // if a collision occurs, reverse move
      if (this.checkCollision() || this.sandBox.outOfBounds(this.player)) {
        this.move(true);
      }
      this.player.eat(this.creatures);
      if (this.player.dead) console.log('game over');
    }, 16.667)
  }

  setKeyBinds () {
    // handle keydownfor arrow keys
    document.addEventListener('keydown', e => {
      e.preventDefault();
      let speed = 10;
      switch (e.key) {
        case 'ArrowUp':
          this.moveDirY = speed;
          break;
        case 'ArrowDown':
          this.moveDirY = -speed;
          break;
        case 'ArrowLeft':
          this.moveDirX = speed;
          break;
        case 'ArrowRight':
          this.moveDirX = -speed;
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

      if (horKeys.includes(e.key)) {
        this.moveDirX = 0;
      }

      if (verKeys.includes(e.key)) {
        this.moveDirY = 0;
      }
    })
  }

  move (reverse) {
    // * testing
    if (reverse) {
      this.entities.forEach((entity) =>
        entity.move(-this.moveDirX, -this.moveDirY)
      );

      this.creatures.forEach((entity) =>
        entity.move(-this.moveDirX, -this.moveDirY)
      );

      this.sandBox.move(-this.moveDirX, -this.moveDirY);
    } else {
      this.entities.forEach((entity) =>
        entity.move(this.moveDirX, this.moveDirY)
      );

      this.creatures.forEach((entity) =>
        entity.move(this.moveDirX, this.moveDirY)
      );

      this.sandBox.move(this.moveDirX, this.moveDirY);
    }
    // this.player.move();
    // this.creatures.forEach(creature => creature.move(this.moveDirX, this.moveDirY));
  }

  checkCollision () {
    return this.entities.some(entity => entity.isCollision(this.player));
  }
}