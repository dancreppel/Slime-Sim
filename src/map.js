import Entity from './entity';

export default class Map {
  constructor (options) {
    this.width = options.width;
    this.height = options.height;

    // pass in src for wall object and floor
    this.wall = options.wall;
    this.floor = options.floor;

    this.wallEntities = [];

    // instantiate borders of map
    this.border();
  }

  border () {
    let spacing = this.height / 20;
    // let objectSize = spacing * 1.5;

    for(let i = 0; i < 20; i++) {
      // left border
      this.wallEntities.push(
        new Entity ({
          pos: [0, i * spacing],
          dim: [spacing, spacing],
          src: this.wall
        })
      ) ;

      // right border
      this.wallEntities.push(
        new Entity ({
          pos: [this.width, i * spacing + spacing],
          dim: [spacing, spacing],
          src: this.wall
        })
      );

      // top border
      this.wallEntities.push(
        new Entity({
          pos: [i * spacing + spacing, 0],
          dim: [spacing, spacing],
          src: this.wall,
        })
      );

      // bottom border
      this.wallEntities.push(
        new Entity({
          pos: [i * spacing, this.height],
          dim: [spacing, spacing],
          src: this.wall,
        })
      );
    }
  }
}