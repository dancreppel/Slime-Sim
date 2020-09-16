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
    
    // // ! Testing only
    // this.drawBoundary(ctx);
  }

  boundary () {
    // Bounds are determined by their X or Y values
    // ex: X = 0 or Y = 10
    
    // top bound in terms of Y
    this.topBound = this.spacing;
    
    // right bound in terms of X
    this.rightBound = this.height;
    
    // bottom bound in terms of Y
    this.bottomBound = this.height;
    
    // left bound in terms of X
    this.leftBound = this.spacing;
  }

  move (dx, dy) {
    // adjust bounds
    this.topBound += dy;
    this.rightBound += dx;
    this.bottomBound += dy;
    this.leftBound += dx;

    // adjust pos for each wall object
    this.wallEntities.forEach(entity => entity.move(dx, dy));
  }

  // // ! Testing Only
  // drawBoundary (ctx) {
  //   // ! Testing only
  //   let bounds = [];
  //   // top left corner
  //   bounds.push([this.leftBound, this.topBound]);
  //   // top right corner
  //   bounds.push([this.rightBound, this.topBound]);
  //   // bottom right corner
  //   bounds.push([this.rightBound, this.bottomBound]);
  //   // bottom left corner
  //   bounds.push([this.leftBound, this.bottomBound]);

  //   ctx.beginPath();
  //   let startX = bounds[0][0];
  //   let startY = bounds[0][1];

  //   bounds.forEach((bound, idx) => {
  //     if (idx === 0) {
  //       ctx.moveTo(startX, startY);
  //     } else {
  //       let moveToX = bound[0];
  //       let moveToY = bound[1];
  //       ctx.lineTo(moveToX, moveToY);
  //     }

  //     // edge case when last index lineTo start
  //     if (idx === bounds.length - 1) {
  //       ctx.lineTo(startX, startY);
  //     }
  //   });
  //   ctx.stroke();
  // }

  outOfBounds (entity) {
    // check if entity's hitbox is above top bound
    if (entity.hitboxCenter[1] - entity.hitboxRadius < this.topBound) return true;
    // check if entity's hitbox is below bottom bound
    if (entity.hitboxCenter[1] + entity.hitboxRadius > this.bottomBound) return true;
    // check if entity's hitbox is out of left bound
    if (entity.hitboxCenter[0] - entity.hitboxRadius < this.leftBound) return true;
    // check if entity's hitbox is out of right bound
    if (entity.hitboxCenter[0] + entity.hitboxRadius > this.rightBound) return true;
    // otherwise
    return false;
  }
}