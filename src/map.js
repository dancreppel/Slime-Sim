import Entity from './entity';
import * as Util from './util';

export default class Map {
  constructor (options) {
    this.player = options.player;
    this.height = options.height;
    // pass in src for wall object and floor
    this.wall = options.wall;
    this.floor = options.floor;
    this.outside = options.outside;

    this.wallEntities = [];
    this.floorTiles = [];
    this.background = [];
    this.inanimateEntities = [];

    // instantiate the following
    this.createBorder();
    this.boundary();
    this.createFloor();
    this.createOutside();
    this.createInanimateEntities();
  }

  createBorder () {
    let n = 20;
    this.spacing = this.height / n;
    let spacing = this.spacing;

    for(let i = 0; i < n; i++) {
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

  draw (ctx) {
    this.background.forEach(tile => tile.draw(ctx));
    this.floorTiles.forEach(tile => tile.draw(ctx));
    this.wallEntities.forEach(entity => entity.draw(ctx));
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
    
    // adjust pos for each tile
    this.floorTiles.forEach(tile => tile.move(dx, dy));
    // adjust pos for each wall object
    this.wallEntities.forEach(entity => entity.move(dx, dy));
    this.background.forEach(tile => tile.move(dx, dy));
  }

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

  createFloor () {
    // n x n grass tiles
    let n = 20;
    let dim = this.height / n;
    let xOffset = this.spacing / 2;
    let yOffset = this.spacing * .8;
    for(let i = 0; i < n; i++) {
      for(let j = 0; j < n; j++) {
        this.floorTiles.push(
          new Entity({
            pos: [i * dim + xOffset, j * dim + yOffset],
            dim: [dim, dim],
            src: this.floor,
          })
        );
      }
    }
  }

  createOutside () {
    let n = 50;
    let offset = 900;
    let dim = (this.height + 2 * offset) / n;

    for(let i = 0; i < n; i++) {
      for(let j = 0; j < n; j++) {
        // manually found best size, this prevents drawing too many assets
        // optimized for 5000+ height
        if (i < 8 || j < 8 || i > 42 || j > 42)
        this.background.push(
          new Entity({
            pos: [i * dim - offset, j * dim - offset],
            dim: [dim, dim],
            src: this.outside,
          })
        );
      }
    }
  }

  createInanimateEntities () {
    // randomly place n trees
    let treeDim = 200;
    let numTrees = 50;
    let xRange = this.rightBound - this.leftBound - treeDim;
    let yRange = this.bottomBound - this.topBound - treeDim;

    for(let i = 0; i < numTrees; i++) {
      let randPos = Util.randPos(xRange, yRange, this.leftBound, this.topBound);
      let newTree = new Entity({
        pos: [randPos[0], randPos[1]],
        dim: [treeDim, treeDim],
        src: 'assets/sprites/tree.png'
      });

      // if the tree overlaps the player redo iteration
      if (newTree.isCollision(this.player)) i--;
      else this.inanimateEntities.push(newTree);
      
    }
    // sort trees by y axis value so greater y-value objects are rendered on top
    this.inanimateEntities.sort((a, b) => a.pos[1] - b.pos[1]);
  }
}