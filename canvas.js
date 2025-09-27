const canvas1 = document.querySelector("#canvas1");
const ctx = canvas1.getContext("2d");

//Declaring canvas width and height
canvas1.width = 250;
canvas1.height = 500;

//Declaring Universal Properties
// var xpositon = 1;
// var ypositon = 1;
var Size = 25; // size of each block 
var rowSize = canvas1.width / Size;
let time = 500 ;
var lineWidth = 1;
var backgroundColor = 'Wheat';
var color = "crimson";
var currentShape = [];
var currentColor = "red";
var canMoveLeft = false;
var canMoveRight = false;

var storedShape = [];
var storedShape = null;     // shape data (coords + color)
var hasSwapped = false;     // block multiple swaps per drop

 var reachedTop = false;

var Finalscore = 0;

//Declaring Final Positions of all the blocks
var finalAllBlocks = [];



const Shapes = [shape1, shape2, shape3, shape4, shape5, shape6, shape7];
var Bag = [];


//function to create a random bag that will create a batch shapes that will contain all the next  shapes
function randomBag() {
  var newBag = [...Shapes]; // clone Shapes
  while (newBag.length > 0) {
    var randIndex = Math.floor(Math.random() * newBag.length);
    Bag.push(newBag[randIndex]);
    newBag.splice(randIndex, 1);

  }
}


function takeShape() {
  return Bag.shift();
  }



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
  var shapeData = takeShape();
  clearCanvas2();
  display();

  var coords = shapeData[0];
  var centerX = Math.floor(canvas1.width / 2 / Size);
  
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

  hasSwapped = false;
  }

  //Function to clear the canvas completely
function clearCanvas() {
  ctx.clearRect(0, 0, canvas1.width, canvas1.height);
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
 
   if (Bag.length === 0){ 
    randomBag();
    }

 var reachedBottm = false;


//function to detact bottom shape if any
  for (var i = 0; i < currentShape.length; i++) {
     for (var j = 0; j < finalAllBlocks.length; j++) {
    if ((currentShape[i][0]) === finalAllBlocks[j][0][0] &&
        (currentShape[i][1] + 1) === finalAllBlocks[j][0][1]) {
      reachedBottm = true;
      //lineClear();
      break;
    }
  }
  if (reachedBottm) break;
    }
//function to detact the bottom of the canvas
 for (var i = 0; i < currentShape.length; i++) {
      if ((currentShape[i][1] + 1) * Size >= canvas1.height) {
        reachedBottm = true;
        //lineClear();
        break;
      }
    }

    
if (reachedBottm) {
      for (var i = 0; i < currentShape.length; i++) {
        finalAllBlocks.push([currentShape[i], currentColor]);
       
       
        //to detact the top of the canvas
      if ((currentShape[i][1] - 1) * Size == 0) {
        clearInterval(start);


        //need to work on this
        reachedTop = true;
        gameOver();
        console.log(reachedTop);
        //need to add funtion for game over

        pause();
        break;
      }
      }
      createNewShape();
      lineClear();
      return;
      
    }

    for (var i = 0; i < currentShape.length; i++) {
      currentShape[i][1] += 1;
    }

    createBlock(currentShape, currentColor);

    canMoveLeft = false;
    canMoveRight = false;
  }



