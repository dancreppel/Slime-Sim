export default class Entity {
  constructor (options) {
    // pos is an array with x and y coordinates [x, y]
    this.pos = options.pos;
    // dim is an array with width and height [width, height]
    this.dim = options.dim;
    this.image = new Image();
    this.image.src = options.src;

    // Instantiate hitbox
    this.hitboxCenter = this.hitboxCenter();
    this.hitboxRadius = this.hitboxRadius();
    // this.hitbox();
  }

  draw (ctx) {
    ctx.drawImage(
      this.image, 
      this.pos[0], 
      this.pos[1], 
      this.dim[0], 
      this.dim[1]);
  }

  move (dx, dy) {
    this.pos[0] += dx;
    this.pos[1] += dy;
    this.hitboxCenter[0] += dx;
    this.hitboxCenter[1] += dy;

    // ! for testing
    this.drawHitbox();
  }

  hitboxCenter () {
    let hitboxCenter = this.pos.map((_, i) => this.pos[i] + this.dim[i] / 2 );
    return hitboxCenter;
  }

  hitboxRadius () {
    return this.dim[0] > this.dim[1] ? this.dim[0] / 2 : this.dim[1] / 2;
  }

  // ! for testing
  drawHitbox () {
    // this.hitboxCenter = [];
    // this.pos.forEach((_, i) =>
    //   this.hitboxCenter.push(this.pos[i] + this.dim[i] / 2)
    // );
    // // this.hitboxCenter = [this.pos[0] + this.dim[0] / 2, this.pos[1] + this.dim[1] / 2];
    // // if (this.dim[0] > this.dim[1]) this.hitboxRadius = this.dim[0] / 2;
    // this.hitboxRadius = this.dim[0] > this.dim[1] ? this.dim[0] / 2 : this.dim[1] / 2;

    // // ! for testing
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(this.hitboxCenter[0], this.hitboxCenter[1], this.hitboxRadius, 0, 2 * Math.PI, false);
    ctx.stroke();

    return true;
  }
}