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

  boundary () {
    this.bounds = [];
    
    // Bounds are determined by their start and end coordinates
    // ex: [0, 0], [10, 10]

    // upper bound
    this.bounds.push(
      [
        [this.spacing, this.spacing],
        [this.height , this.spacing]
      ]
    );

    // lower bound
    this.bounds.push(
      [
        [this.spacing, this.height],
        [this.height, this.height]
      ]
    );

    // left bound
    this.bounds.push(
      [
        [this.spacing, this.spacing],
        [this.spacing, this.height]
      ]
    );

    // right bound
    this.bounds.push(
      [
        [this.height, this.spacing],
        [this.height, this.height]
      ]
    );
  }

  moveBoundary (dx, dy) {
    this.bounds.forEach(bound => {
      // startX
      bound[0][0] += dx;
      // startY
      bound[0][1] += dy;
      // endX
      bound[1][0] += dx;
      // endY
      bound[1][1] += dy;
    });
  }


}