export default class Entity {
  constructor (options) {
    // pos is an array with x and y coordinates [x, y]
    this.pos = options.pos;
    // dim is an array with width and height [width, height]
    this.dim = options.dim;
    this.image = new Image();
    this.image.src = options.src;
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
  }
}