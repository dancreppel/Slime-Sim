export const randPos = (xRange, yRange, xOffset, yOffset) => {
  let randPos = [];
  let randXPos = Math.random() * xRange + xOffset;
  randPos.push(randXPos);
  let randYPos = Math.random() * yRange + yOffset;
  randPos.push(randYPos);
  return randPos;
}