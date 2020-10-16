import Entity from './entity';

export default class Creature extends Entity {
  constructor(options) {
    super(options);
    // default to left facing sprite
    this.image.src = this.src + "-left.png";

    // set type of creature
    this.type = options.type;

    this.numMoves = 0;
    this.movementDir = "";
    this.moveDirs = ["up", "down", "left", "right"];
  }

  // ! for testing
  // draw(ctx) {
  //   ctx.drawImage(
  //     this.image,
  //     this.pos[0],
  //     this.pos[1],
  //     this.dim[0],
  //     this.dim[1]
  //   );

  //   this.drawHitbox();
  // }

  movement(movementSpeed, entities, sandbox) {
    // ai movement
    const speed = movementSpeed / 10;
    const n = 50;
    const m = 100;
    // make copies of previous pos and hitbox
    const prevPos = [...this.pos];
    const prevHitboxPos = [...this.hitboxCenter];
    // allow number of moves to be between n and n + m
    if (this.numMoves === 0) {
      this.numMoves = Math.ceil(Math.random() * m) + n;
      let randIndex = Math.floor(Math.random() * this.moveDirs.length);
      this.movementDir = this.moveDirs[randIndex];
    } else {
      this.numMoves--;
      switch (this.movementDir) {
        case "up":
          this.pos[1] -= speed;
          this.hitboxCenter[1] -= speed;
          break;
        case "down":
          this.pos[1] += speed;
          this.hitboxCenter[1] += speed;
          break;
        case "left":
          this.pos[0] -= speed;
          this.hitboxCenter[0] -= speed;
          // orient sprite left facing
          this.image.src = this.src + "-left.png";
          break;
        case "right":
          this.pos[0] += speed;
          this.hitboxCenter[0] += speed;
          // orient sprite right facing
          this.image.src = this.src + "-right.png";
        default:
          break;
      }
      if(this.invalidPos(entities) || sandbox.outOfBounds(this)) {
        this.pos = prevPos;
        this.hitboxCenter = prevHitboxPos;
      }
    }
  }
}