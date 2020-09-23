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
    enemies.forEach((enemy, i) => {
      if (this.eatable(enemy)) {
        this.grow(enemy);
        // remove enemy
        delete enemies[i];
      }
    });
  }

  eatable (enemy) {
    let dx = this.hitboxCenter[0] - enemy.hitboxCenter[0];
    let dy = this.hitboxCenter[1] - enemy.hitboxCenter[1];
    let distance = Math.sqrt(dx * dx + dy * dy);
    let minDistance = this.hitboxRadius;

    if (distance < minDistance && this.hitboxRadius < enemy.hitboxRadius) {
      this.dead = true;
    }

    if (distance < minDistance && this.hitboxRadius > enemy.hitboxRadius) {
      return true;
    } else return false;
  }

  grow (enemy) {
    let enemyVolume = Math.pow(enemy.hitboxRadius, 3) * Math.PI * 4 / 3;
    let playerVolume = Math.pow(this.hitboxRadius, 3) * Math.PI * 4 / 3;
    let newVolume = enemyVolume + playerVolume;
    let newRadius = Math.pow(newVolume / Math.PI * 3 / 4, 1 / 3);
    // apply new radius
    this.hitboxRadius = newRadius;
    // apply new dimensions using diameter
    this.dim = [newRadius * 2, newRadius * 2];
    // adjust hitbox center
    this.hitboxCenter = this.pos.map((_, i) => this.pos[i] + this.dim[i] / 2);
  }
}