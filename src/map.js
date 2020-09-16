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
    // Bounds are determined by their coordinates
    // ex: [0, 0], [10, 10]

    // upper left corner
    this.bounds.push([this.spacing, this.spacing]);

    // upper right corner
    this.bounds.push([this.height, this.spacing]);


    // bottom right corner
    this.bounds.push([this.height, this.height]);

    // bottom left corner
    this.bounds.push([this.spacing, this.height]);
  }

  moveBoundary (dx, dy) {
    this.bounds.forEach(bound => {
      bound[0] += dx;
      bound[1] += dy;
    });
  }

  // ! Testing Only
  drawBoundary (ctx) {
    ctx.beginPath();
    let startX = this.bounds[0][0];
    let startY = this.bounds[0][1];

    this.bounds.forEach((bound, idx) => {
      if (idx === 0) {
        ctx.moveTo(startX, startY);
      } else {
        let moveToX = bound[0];
        let moveToY = bound[1];
        ctx.lineTo(moveToX, moveToY);
      }

      // edge case when last index lineTo start
      if (idx === this.bounds.length - 1) {
        ctx.lineTo(startX, startY);
      } 
    });
    ctx.stroke();
  }

  outOfBounds (entity) {
    // check if entity is above upper bound
    // if (entity.hitboxCenter[1] < 
  }
}