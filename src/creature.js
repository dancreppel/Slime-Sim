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

    // ! hit box for testing
    this.drawHitbox();
  }

  isCollision (entity) {
    let dx = this.hitboxCenter[0] - entity.hitboxCenter[0];
    let dy = this.hitboxCenter[1] - entity.hitboxCenter[1];
    let distance = Math.sqrt( dx * dx + dy * dy );
    let minDistance = this.hitboxRadius + entity.hitboxRadius;

    if (distance < minDistance) return true;
    else return false;
  }
}