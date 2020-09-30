import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas');
  const DIM_X = 1600;
  const DIM_Y = 900;
  const ctx = canvas.getContext('2d');
  const movementSpeed = 10;

  canvas.width = DIM_X;
  canvas.height = DIM_Y;
  
  let game = new Game({
    DIM_X,
    DIM_Y,
    ctx,
    movementSpeed,
    ambientSrc: "assets/sounds/ambient.wav"
  });
  
  game.start();
});