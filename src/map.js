import Entity from './entity';

export default class Map {
  constructor (options) {
    this.height = options.height;

    // pass in src for wall object and floor
    this.wall = options.wall;
    this.floor = options.floor;

    this.wallEntities = [];

    // instantiate borders of map
    this.createBorder();
    // instantiate bounds of map
    this.boundary();
  }

  createBorder () {
    this.spacing = this.height / 20;
    let spacing = this.spacing;

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
          pos: [this.height, i * spacing + spacing],
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

  drawBorder (ctx) {
    this.wallEntities.forEach(entity => entity.draw(ctx));
    
    // ! Testing only
    this.drawBoundary(ctx);
  }


}