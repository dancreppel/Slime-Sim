import Entity from './entity';
import Creature from './creature'
import Slime from './slime';
import Map from './map';
import * as Util from "./util";

export default class Game {
  constructor (options) {
    this.DIM_X = options.DIM_X;
    this.DIM_Y = options.DIM_Y;
    this.ctx = options.ctx;
    this.movementSpeed = options.movementSpeed;
    this.entities = [];
    this.creatures = [];
    this.moveDirX = 0;
    this.moveDirY = 0;

  }

  createPlayer () {
    // center pos in the middle of the canvas object
    let modelDim = 200;
    let pos = [this.DIM_X / 2 - modelDim / 2, this.DIM_Y / 2 - modelDim / 2];
    this.player = new Slime({
      pos,
      dim: [modelDim, modelDim],
      src: "assets/sprites/slime.png",
      canvasCenter: pos
    });
  }

  generateMap () {
    this.sandBox = new Map({
      player: this.player,
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
    let creatures = {
      mouse: {dim: 25, src: 'assets/sprites/mouse', num: 20},
      lion: {dim: 50, src: 'assets/sprites/lion', num: 16},
      bear: {dim: 100, src: 'assets/sprites/bear', num: 12},
      dino: {dim: 200, src: 'assets/sprites/dino', num: 8},
      golem: {dim:400, src: 'assets/sprites/golem', num: 1}
    }

    const entities = this.entities.concat(this.player);

    for(const type in creatures) {
      let numType = creatures[type].num;
      let dim = creatures[type].dim;
      let src = creatures[type].src;
      const xRange = this.sandBox.rightBound - this.sandBox.leftBound - dim;
      const yRange = this.sandBox.bottomBound - this.sandBox.topBound - dim;
      let i = 0;
      while(i < numType) {
        const xOffset = this.sandBox.leftBound;
        const yOffset = this.sandBox.topBound;
        const randPos = Util.randPos(xRange, yRange, xOffset, yOffset);
        const newCreature = new Creature ({
          pos: randPos,
          dim: [dim, dim],
          src: src
        });
        // const invalidPos = entities.some(entity => 
        //   newCreature.isCollision(entity)
        // );
        // only push new creature to creatures array if it is in a valid pos
        if (!newCreature.invalidPos(entities)) {
          this.creatures.push(newCreature);
          i++;
        }
      }
    }
  }

  render (ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.sandBox.draw(ctx);
    this.entities.forEach(entity => entity.draw(ctx));
    this.creatures.forEach(creature => creature.draw(ctx));
    this.player.draw(ctx);
    this.player.drawHitbox();
  }

  start () {
    this.setKeyBinds();
    this.createPlayer();
    this.generateMap();
    this.generateEntities();
    this.generateEnemies();
    // refresh 60 times per second
    setInterval(() => {
      this.render(this.ctx);
      // regular move
      this.move(false);
      this.aiMovement();
      // if a collision occurs, reverse move
      if (this.checkCollision() || this.sandBox.outOfBounds(this.player)) {
        this.move(true);
      }
      this.player.eat(this.creatures);
      if (this.player.dead) console.log('game over');
    }, 17)
  }

  setKeyBinds () {
    // handle keydownfor arrow keys
    document.addEventListener('keydown', e => {
      e.preventDefault();
      let speed = this.movementSpeed ;
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

      this.creatures.forEach((creature) =>
        creature.move(-this.moveDirX, -this.moveDirY)
      );

      this.sandBox.move(-this.moveDirX, -this.moveDirY);
    } else {
      this.entities.forEach((entity) =>
        entity.move(this.moveDirX, this.moveDirY)
      );

      this.creatures.forEach((creature) =>
        creature.move(this.moveDirX, this.moveDirY)
      );

      this.sandBox.move(this.moveDirX, this.moveDirY);
    }
  }

  checkCollision () {
    return this.entities.some(entity => entity.isCollision(this.player));
  }

  aiMovement () {
    this.creatures.forEach(creature => 
      creature.movement(this.movementSpeed, this.entities, this.sandBox)
    );
  }
}