import Creature from './creature';

export default class Slime extends Creature {
  constructor (options) {
    super(options);
  }
  
  move() {
    // Do not move because the player should be in the center of the frame of
    // reference
  }
}