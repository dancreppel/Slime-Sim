import Creature from './creature';

export default class Slime extends Creature {
  constructor (options) {
    super(options);
  }
  
  move () {
    // Do not move because the player should be in the center of the frame of
    // reference
  }

  eat (enemies) {
    enemies.forEach(enemy => {
      if (this.eatable(enemy)) delete enemy;
    });
  }

  eatable (enemy) {
    let dx = this.hitboxCenter[0] - entity.hitboxCenter[0];
    let dy = this.hitboxCenter[1] - entity.hitboxCenter[1];
    let distance = Math.sqrt(dx * dx + dy * dy);
    let minDistance = this.hitboxRadius;

    if (distance < minDistance) return true;
    else return false;
  }
}