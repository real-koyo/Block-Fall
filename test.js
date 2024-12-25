const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

var xpositon = 1;
var ypositon = 1;
var Size = 25;


//Each shape cordinations
const shape1 = [[0,-1], [0,0], [1,0], [1,-1], "Crimson"];

//Function to create a new block
function createShape( position, pxSize) {
  ctx.fillStyle = position[4];
  ctx.strokeStyle = 'Wheat';
  ctx.lineWidth = 1;
  for (let i = 0; i < position.length -1; i++) {
    let cubex = position[i][0];
    let cubey = position[i][1];
    ctx.strokeRect((cubex * pxSize), (cubey * pxSize), pxSize, pxSize);
    ctx.fillRect((cubex * pxSize), (cubey * pxSize), pxSize, pxSize);
  };
};


function changePosition(posX, posY, shape) {
  // Create a new array to hold the modified coordinates
  let fshape = [];

  // Iterate through each coordinate in the shape
  for (let i = 0; i < shape.length - 1; i++) {
      // Create a new coordinate by adding posX and posY
      fshape[i] = [shape[i][0] + posX, shape[i][1] + posY];
  }
  
  // Add the color to the new shape
  fshape.push(shape[shape.length - 1]); // Push the color at the end
  // Call createShape with the modified coordinates
  createShape(fshape, Size);
  return fshape;
};

changePosition(xpositon, ypositon, shape1);