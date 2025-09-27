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

//Declaring Final Positions of all the blocks
var finalAllBlocks = [];

//Each shape cordinations
// const shape1 = [[[0,-1], [0,0], [1,0], [1,-1]], "Crimson"]; //Box
// const shape2 = [[[0,-3], [0,-2], [0,-1], [0,0]], "Orange"]; //Line
// const shape3 = [[[0,-2], [0,-1], [0,0], [1,0]], "DodgerBlue"]; //L
// const shape4 = [[[1,-2], [1,-1], [1,0], [0,0]], "BlueViolet"]; //Reverse L
// const shape5 = [[[0,-2], [1,-2], [1,-1], [2,-1]], "LightSeaGreen"]; //Z
// const shape6 = [[[0,1], [1,1], [1,0], [2,0]], "DeepPink"]; //Reverse Z
// const shape7 = [[[1,-1], [0,0], [1,0], [2,0]], "DarkViolet"]; //ship

const shape1 = [[[0,0], [0,1], [1,1], [1,0]], "Crimson"]; //Box
const shape2 = [[[0,0], [0,1], [0,2], [0,3]], "Orange"]; //Line
const shape3 = [[[0,0], [0,1], [0,2], [1,2]], "DodgerBlue"]; //L
const shape4 = [[[1,0], [1,1], [1,2], [0,2]], "BlueViolet"]; //Reverse L
const shape5 = [[[0,0], [1,0], [1,1], [2,1]], "LightSeaGreen"]; //Z
const shape6 = [[[0,1], [1,1], [1,0], [2,0]], "DeepPink"]; //Reverse Z
const shape7 = [[[1,0], [0,1], [1,1], [2,1]], "DarkViolet"]; //ship



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
 var reachedTop = false;

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
        console.log(reachedTop);
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

// Start game
let gameInterval = null;
function start() {
  randomBag()
    createNewShape();
if (gameInterval !== null) {
    console.log("start(): game already running (interval id:", gameInterval, ")");
    return;
  }
  gameInterval = setInterval(falldown, time);
  console.log("Game started. interval id =", gameInterval);
}
function pause() {
  clearInterval(gameInterval); // Stop the old interval
}
function resume() {
  time = 500; // or any updated time
  gameInterval = setInterval(falldown, time); // Start a new interval with updated time
  console.log("Game resumed with time:", time);
}



// keyboard support
    document.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowUp') {   // usually Up is rotate
  currentShape = rotate90Clockwise(currentShape);
}
  if (event.key === 'ArrowLeft') {

    for (var i = 0; i < currentShape.length; i++) {
      if(currentShape[i][0] === 0){
        canMoveLeft = true;
        break;
      };
    }
      if (canMoveLeft == false){
         for (var i = 0; i < currentShape.length; i++){
      currentShape[i][0] -= 1;
      }
   } }

  else if (event.key === 'ArrowRight') {
     for (var i = 0; i < currentShape.length; i++) {
      if((currentShape[i][0] * Size) === canvas1.width - Size){
        canMoveRight = true;
        break;
      };
    }
      if (canMoveRight == false){
         for (var i = 0; i < currentShape.length; i++){
      currentShape[i][0] += 1;
      }
   }
  }
  else if (event.key === 'ArrowDown'){
    falldown();
    console.log("store");
  }
  else if (event.code === 'Space'){
    event.preventDefault();
    if (storedShape.length === 0){
    storedShape.push([currentShape], [currentColor]);
    createNewShape();
    createNewShape3(0);
    console.log("new shape");
    } else{
      storedShape.length = 0;
    storedShape.push([currentShape], [currentColor]);
    createNewShape();
    createNewShape3(0);
    console.log("updated");
    }
  }
});

// rotate function
function rotate90Clockwise(shape) {
  // choose pivot (first block of shape)
  var center = shape[0];
  var rotated = [];

  for (var i = 0; i < shape.length; i++) {
    var x = shape[i][0] - center[0];
    var y = shape[i][1] - center[1];

    // rotate (x,y)
    var newX = y;
    var newY = -x;

    rotated.push([newX + center[0], newY + center[1]]);
  }

  return rotated;
}

//function for line clear
function lineClear() {
  // how many blocks per row
  var rows = [];                       // will store [rowY, [indexes of blocks]]
  var toDelete = [];
  var clearedRows = [];
               // all indexes that must be deleted

  // loop to detact the rows and its position inside the finalAllBlocks
  for (var i = 0; i < finalAllBlocks.length; i++) {
    var X = finalAllBlocks[i][0][1]; // row position of this block
    var found = false;

    // look for this row in rows array
    for (var j = 0; j < rows.length; j++) {
      if (rows[j][0] === X) {
        rows[j][1].push(i); // add index to existing row group
        found = true;
        break;
      }
    }

    // if row not found, create new one
    if (!found) {
      //pushes the row index and the position inside the finalAllbock
      rows.push([X, [i]]);
    }
  }

  // 2) Find which rows are full and collect their indexes
  for (i = 0; i < rows.length; i++) {
    if (rows[i][1].length === rowSize) {
      // push all indexes of this full row into toDelete
      for (j = 0; j < rows[i][1].length; j++) {
        toDelete.push(rows[i][1][j]);
      }
      clearedRows.push(rows[i][0]);
    }
  }

  // 3) Sort indexes descending so splice works correctly
  toDelete.sort(function(a, b) {
    return b - a;
  });

  // 4) Splice each index only once
  var last = -1;
  for (i = 0; i < toDelete.length; i++) {
    if (toDelete[i] !== last) {
      finalAllBlocks.splice(toDelete[i], 1);
      last = toDelete[i];

    }
  }
clearedRows.sort(function(a, b) {
    return a - b;
  });

  // Push down blocks above each cleared row
  for (var j = 0; j < finalAllBlocks.length; j++) {
    var shift = 0;
    for (var i = 0; i < clearedRows.length; i++) {
        if (finalAllBlocks[j][0][1] < clearedRows[i]) {
            shift++;
        }
    }
    finalAllBlocks[j][0][1] += shift; // move block down by number of cleared rows below it
}
}