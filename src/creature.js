import Entity from './entity';

export default class Creature extends Entity {
  constructor (options) {
    super(options);
    // this.pos
    // this.dim
    // this.image
    // this.hitboxCenter
    // this.hitboxRadius
  }

  move() {
    // Do not move because the player should be in the center of the frame of
    // reference
  }
}