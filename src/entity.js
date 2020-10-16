export default class Entity {
  constructor(options) {
    // pos is an array with x and y coordinates [x, y]
    this.pos = options.pos;
    // dim is an array with width and height [width, height]
    this.dim = options.dim;
    this.image = new Image();
    this.src = options.src;
    this.image.src = this.src;

    // Instantiate hitbox
    this.hitboxCenter = this.hitboxCenter();
    this.hitboxRadius = this.hitboxRadius();
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.pos[0],
      this.pos[1],
      this.dim[0],
      this.dim[1]
    );

    // ! for testing
    // this.drawHitbox();
  }

  move(dx, dy) {
    this.pos[0] += dx;
    this.pos[1] += dy;
    this.hitboxCenter[0] += dx;
    this.hitboxCenter[1] += dy;
  }

  hitboxCenter() {
    let hitboxCenter = this.pos.map((_, i) => this.pos[i] + this.dim[i] / 2);
    return hitboxCenter;
  }

  hitboxRadius() {
    return this.dim[0] < this.dim[1] ? this.dim[0] / 2 : this.dim[1] / 2;
  }

  // ! for testing
  // drawHitbox() {
  //   const canvas = document.getElementById("canvas");
  //   const ctx = canvas.getContext("2d");
  //   ctx.beginPath();
  //   ctx.arc(
  //     this.hitboxCenter[0],
  //     this.hitboxCenter[1],
  //     this.hitboxRadius,
  //     0,
  //     2 * Math.PI,
  //     false
  //   );
  //   ctx.stroke();

  //   return true;
  // }

  isCollision(entity) {
    let dx = this.hitboxCenter[0] - entity.hitboxCenter[0];
    let dy = this.hitboxCenter[1] - entity.hitboxCenter[1];
    let distance = Math.sqrt(dx * dx + dy * dy);
    let minDistance = this.hitboxRadius + entity.hitboxRadius;

    if (distance < minDistance) return true;
    else return false;
  }

  invalidPos(entities) {
    return entities.some(entity => this.isCollision(entity))
  }
}