import Creature from './creature'
import Slime from './slime';
import Map from './map';
import * as Util from "./util";

export default class Game {
  constructor (options) {
    this.DIM_X = options.DIM_X;
    this.DIM_Y = options.DIM_Y;
    this.canvas = options.canvas;
    this.ctx = options.ctx;
    this.entities = [];
    this.creatures = [];
    this.moveDirX = 0;
    this.moveDirY = 0;
    this.ambientSrc = options.ambientSrc;
    this.movementSpeed = options.movementSpeed;

    // mounted default to false
    this.mounted = false;

    // keybinds do not exist so state is false
    this.keybinds = false;

    // instantiate ambient sound
    this.ambientAudio = new Audio(this.ambientSrc);
  }

  createPlayer () {
    // center pos in the middle of the canvas object
    let modelDim = 30;
    let pos = [this.DIM_X / 2 - modelDim / 2, this.DIM_Y / 2 - modelDim / 2];
    this.player = new Slime({
      pos,
      dim: [modelDim, modelDim],
      src: "assets/sprites/slime.png",
      canvasCenter: pos,
      audioSrc: "assets/sounds/slurp.wav",
    });

    // add eat sounds to audio array
    this.audioEle.push(this.player.eatAudio);
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
      mouse: { dim: 25, src: "assets/sprites/mouse", num: 20 },
      lion: { dim: 50, src: "assets/sprites/lion", num: 16 },
      bear: { dim: 100, src: "assets/sprites/bear", num: 12 },
      dino: { dim: 200, src: "assets/sprites/dino", num: 8 },
      boss: { dim: 400, src: "assets/sprites/golem", num: 1 },
    };

    const entities = this.entities.concat(this.player);

    for (const type in creatures) {
      let numType = creatures[type].num;
      let dim = creatures[type].dim;
      let src = creatures[type].src;
      const xRange = this.sandBox.rightBound - this.sandBox.leftBound - dim;
      const yRange = this.sandBox.bottomBound - this.sandBox.topBound - dim;
      let i = 0;

      while (i < numType) {
        const xOffset = this.sandBox.leftBound;
        const yOffset = this.sandBox.topBound;
        const randPos = Util.randPos(xRange, yRange, xOffset, yOffset);
        const newCreature = new Creature({
          pos: randPos,
          dim: [dim, dim],
          src: src,
          type
        });
        
        // only push new creature to creatures array if it is in a valid pos
        if (!newCreature.invalidPos(entities)) {
          if (type === 'boss') this.boss = newCreature;
          this.creatures.push(newCreature);
          i++;
        }
      }
    }
  }

  start () {
    // only start game if game instance has not been mounted before
    if (!this.mounted) {
      // only set game keybinds once
      if (!this.keybinds) this.setKeyBinds();
      
      // sound is defaulted to on
      this.sound = true;
      localStorage.setItem("sound", "on");
      
      // instantiate sound array
      this.audioEle = [];
      this.audioEle.push(this.ambientAudio);

      this.ambientAudio.play();
      this.ambientAudio.loop = true;

      // instantiate game assets
      this.createPlayer();
      this.generateMap();
      this.generateEntities();
      this.generateEnemies();

    }
  }

  prerender () {
    // perform game logic before updating frame
    this.checkAudio();
    // regular move
    this.move(false);
    // if a collision occurs, reverse move
    if (this.checkCollision() || this.sandBox.outOfBounds(this.player)) {
      this.move(true);
    }
    this.aiMovement();
    this.player.eat(this.creatures);
    if (this.player.dead) localStorage.setItem('state', 'lose');
    if (this.boss.dead) localStorage.setItem('state', 'win');
  }

  render (ctx) {
    this.sandBox.draw(ctx);
    this.entities.forEach((entity) => entity.draw(ctx));
    this.creatures.forEach((creature) => creature.draw(ctx));
    this.player.draw(ctx);
  }

  clear (ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  }

  setKeyBinds () {
    // handle keydownfor arrow keys
    document.addEventListener("keydown", (e) => {
      e.preventDefault();
      let speed = this.movementSpeed * 2;
      switch (e.key) {
        case "ArrowUp":
          this.moveDirY = speed;
          break;
        case "ArrowDown":
          this.moveDirY = -speed;
          break;
        case "ArrowLeft":
          this.moveDirX = speed;
          break;
        case "ArrowRight":
          this.moveDirX = -speed;
          break;
        default:
          break;
      }
    });

    // handle keyup for arrow keys
    document.addEventListener("keyup", (e) => {
      e.preventDefault();
      const horKeys = ["ArrowLeft", "ArrowRight"];
      const verKeys = ["ArrowUp", "ArrowDown"];

      if (horKeys.includes(e.key)) {
        this.moveDirX = 0;
      }

      if (verKeys.includes(e.key)) {
        this.moveDirY = 0;
      }
    });

    // keybinds are set so change state to true
    this.keyBinds = true;
  }

  move (reverse) {
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
    return this.entities.some((entity) => entity.isCollision(this.player));
  }

  aiMovement () {
    this.creatures.forEach((creature) =>
      creature.movement(this.movementSpeed, this.entities, this.sandBox)
    );
  }

  checkAudio () {
    if (localStorage.sound === 'on' && !this.sound) {
      this.audioEle.forEach(ele => ele.muted = false);
      this.sound = true;
    } else if (localStorage.sound === 'off' && this.sound) {
      this.audioEle.forEach(ele => ele.muted = true);
      this.sound = false;
    }
  }
}