import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas');
  const DIM_X = 1600;
  const DIM_Y = 900;
  const ctx = canvas.getContext('2d');

  canvas.width = DIM_X;
  canvas.height = DIM_Y;
  
  let game = new Game({
    DIM_X,
    DIM_Y,
    ctx
  });
  
  game.start();
});