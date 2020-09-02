import Entity from './entity';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas');
  const DIM_X = 1200;
  const DIM_Y = 900;
  canvas.width = DIM_X;
  canvas.height = DIM_Y;
  window.ctx = canvas.getContext('2d');
  let rock = new Entity({ 
    pos: [550, 500], 
    dim: [200, 150],
    src: 'assets/sprites/rock.jpg' });
  window.rock = rock;

  // const img = new Image();
  // img.onload = () => ctx.drawImage(img, 50, 50);
  // img.src = 'assets/sprites/rock.jpg';
});