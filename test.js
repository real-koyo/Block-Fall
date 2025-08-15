const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

//Declaring canvas width and height
canvas.width = 250;
canvas.height = 500;

//Declaring Universal Properties
var xpositon = 1;
var ypositon = 1;
var Size = 25; // size of each block 
let time = 500
var lineWidth = 1;
var backgroundColor = 'Wheat';
var color = "crimson";
var currentShape = [];
var currentColor = "red";

//Declaring Final Positions of all the blocks
var finalAllBlocks = [];

//Each shape cordinations
var shape1 = [[[0,-1], [0,0], [1,0], [1,-1]], "Crimson"];
const shape2 = [[[0,-3], [0,-2], [0,-1], [0,0]], "Orange"];
const shape3 = [[[0,-2], [0,-1], [0,0], [1,0]], "DodgerBlue"];
const shape4 = [[[1,-2], [1,-1], [1,0], [0,0]], "BlueViolet"];
const shape5 = [[[0,-2], [1,-2], [1,-1], [2,-1]], "LightSeaGreen"];
const shape6 = [[[0,1], [1,1], [1,0], [2,0]], "DeepPink"];

const Shapes = [shape1, shape3, shape4, shape5, shape6];

//Function to create a square
function createSquare(x, y, color) {
  ctx.fillStyle = color;
  ctx.strokeStyle = backgroundColor;
  ctx.lineWidth = lineWidth;
  
    const px = x * Size;
  const py = y * Size;

  ctx.fillRect(x*Size, y*Size, Size, Size);
  ctx.strokeRect(px, py, Size, Size); 

};

//Function to create a block
function createBlock(shape, color) {
  for (var i = 0; i < shape.length; i++) {
      createSquare(shape[i][0], shape[i][1], color);
    };
};

//Function to create a Shaepe
function createNewShape() {
  var shapeData = Shapes[Math.floor(Math.random() * Shapes.length)];
  var coords = shapeData[0];
  var centerX = Math.floor(canvas.width / 2 / Size);
  
  // Stors the actual osition on the canvas
  var placedShape = [];
 
  for (var i = 0; i < coords.length; i++) {
      var x = coords[i][0] + centerX - 1;
      var y = coords[i][1] + 1;
      placedShape.push([x, y]);
    }

    currentShape = placedShape;
    currentColor = shapeData[1];

    //need to check on this
  createBlock(currentShape, currentColor);
  }

  //Function to clear the canvas completely
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//Function to create all the final shapes
function createallfinalshaepe() {
  for (var i = 0; i < finalAllBlocks.length; i++) {
   var square = finalAllBlocks[i];
   createSquare(square[0][0], square[0][1], square[1]); 
  }
}

//Function for fall down

function falldown() {
 clearCanvas();
 createallfinalshaepe();

 var reachedBottm = false;
 
//function to detact bottom shape if any
  for (var i = 0; i < currentShape.length; i++) {
     for (var j = 0; j < finalAllBlocks.length; j++) {
    if ((currentShape[i][0]) === finalAllBlocks[j][0][0] &&
        (currentShape[i][1] + 1) === finalAllBlocks[j][0][1]) {
      reachedBottm = true;
      break;
    }
  }
  if (reachedBottm) break;
    }

 for (var i = 0; i < currentShape.length; i++) {
      if ((currentShape[i][1] + 1) * Size >= canvas.height) {
        reachedBottm = true;
        break;
      }
    }
if (reachedBottm) {
      for (var i = 0; i < currentShape.length; i++) {
        finalAllBlocks.push([currentShape[i], currentColor]);
      console.log(finalAllBlocks);
      }
      createNewShape();
      return;
    }

    for (var i = 0; i < currentShape.length; i++) {
      currentShape[i][1] += 1;
    }

    createBlock(currentShape, currentColor);
  }

// Start game
function start() {
    createNewShape();
  start = setInterval(falldown, time);
}



function pause() {
  clearInterval(start); // Stop the old interval
}
function resume() {
  time = 500; // or any updated time
  start = setInterval(falldown, time); // Start a new interval with updated time
  console.log("Game resumed with time:", time);
}