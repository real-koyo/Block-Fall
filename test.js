const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

//Declaring canvas width and height
canvas.width = 250;
canvas.height = 500;

//Declaring Universal Properties
var xpositon = 1;
var ypositon = 1;
var Size = 25;
var time = 500
var lineWidth = 1;
var backgroundColor = 'Wheat';

//Declaring Final Positions of all the blocks
var finalAllBlocks = [];

//Each shape cordinations
const shape1 = [[[0,-1], [0,0], [1,0], [1,-1]], "Crimson", 1];
const shape2 = [[[0,-1], [0,0], [1,0], [1,-1]], "Crimson", 1];
const shape3 = [[[0,-1], [0,0], [1,0], [1,-1]], "Crimson", 1];
const shape4 = [[[0,-1], [0,0], [1,0], [1,-1]], "Crimson", 1];
const shape5 = [[[0,-1], [0,0], [1,0], [1,-1]], "Crimson", 1];
const shape6 = [[[0,-1], [0,0], [1,0], [1,-1]], "Crimson", 1];

const Shapes = [shape1, shape3, shape4, shape5, shape6];

//Function to create a new block
function createShape( position, pxSize) {
  //Add's the color to the new shape
  ctx.fillStyle = position[4];
  ctx.strokeStyle = backgroundColor;
  ctx.lineWidth = 1;
  for (let i = 0; i < position.length -1; i++) {
    let cubex = position[i][0];
    let cubey = position[i][1];
    ctx.strokeRect((cubex * pxSize), (cubey * pxSize), pxSize, pxSize);
    ctx.fillRect((cubex * pxSize), (cubey * pxSize), pxSize, pxSize);
  };
};

function genrateRandomShape(){
  let randomNumber = Math.floor(Math.random() * Shapes.length);
  let newShape = Shapes[randomNumber];
  return newShape;
}


function createInitialtPosition(){
 let center = (canvas.width/2)/Size;
 let currentShape = genrateRandomShape();
 
 for (let i = 0; i < currentShape[0].length - 1; i++) {
  let cubex = currentShape[0][i][0];
  let cubey = currentShape[0][i][1];
  let cubexPosition = (cubex + center) * Size;

}

createInitialtPosition();
createCurrentPosition();
function checkNextPosition(){

};



// Updates the frame
setInterval(checkNextPosition, time);


// // function changePosition(posX, posY, shape) {
// //   // Create a new array to hold the modified coordinates
// //   let fshape = [];

// //   // Iterate through each coordinate in the shape
// //   for (let i = 0; i < shape.length - 1; i++) {
// //       // Create a new coordinate by adding posX and posY
// //       fshape[i] = [shape[i][0] + posX, shape[i][1] + posY];
// //   }
  
// //   // Add the color to the new shape
// //   fshape.push(shape[shape.length - 1]); // Push the color at the end
// //   // Call createShape with the modified coordinates
// //   createShape(fshape, Size);
// //   return fshape;
// // };

// changePosition(xpositon, ypositon, shape1);