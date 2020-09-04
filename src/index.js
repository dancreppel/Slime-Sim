import Entity from './entity';
import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas');
  const DIM_X = 1200;
  const DIM_Y = 900;
  const ctx = canvas.getContext('2d');

  canvas.width = DIM_X;
  canvas.height = DIM_Y;

  // let rock = new Entity({ 
  //   pos: [550, 500], 
  //   dim: [200, 150],
  //   src: 'assets/sprites/rock.jpg' });
  // window.rock = rock;

  // let moveDirX = 0;
  // let moveDirY = 0;

  let game = new Game({
    DIM_X,
    DIM_Y,
    ctx
  });

  game.start();


  // document.addEventListener('keydown', e => {
  //   switch (e.key) {
  //     case 'ArrowUp':
  //       moveDirY = 1;
  //       console.log(moveDirY);
  //       return;
  //     case 'ArrowDown':
  //       moveDirY = -1;
  //       console.log(moveDirY);
  //       return;
  //     case 'ArrowLeft':
  //       moveDirX = -1;
  //       console.log(moveDirX);
  //       return;
  //     case 'ArrowRight':
  //       moveDirX = 1;
  //       console.log(moveDirX);
  //       return;
  //     default:
  //       return;
  //   }
  // })

  // document.addEventListener('keyup', e => {
  //   e.preventDefault();
  //   const horKeys = ['ArrowLeft', 'ArrowRight'];
  //   const verKeys = ['ArrowUp', 'ArrowDown'];

  //   if (horKeys.includes(e.key)) {
  //     moveDirX = 0;
  //     console.log(moveDirX);
  //   }

  //   if (verKeys.includes(e.key)) {
  //     moveDirY = 0;
  //     console.log(moveDirY);
  //   }
  // })

  // const img = new Image();
  // img.onload = () => ctx.drawImage(img, 50, 50);
  // img.src = 'assets/sprites/rock.jpg';
});