const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

//Declaring Different Properties
var Size = 25;
canvas.width = 250;
canvas.height = 500;
var positionX = 0;
var positionY = 0;
var speed = 1;
var newPositionY = 0;
var test = 0;
var time = 300;
let lastShape = null;


// Shapes declaration
const shape1 = [[0,-1], [0,0], [1,0], [1,-1], "Crimson"];
const shape2 = [[0,-3], [0,-2], [0,-1], [0,0], "Orange"];
const shape3 = [[0,-2], [0,-1], [0,0], [1,0], "DodgerBlue"];
const shape4 = [[1,-2], [1,-1], [1,0], [0,0], "BlueViolet"];
const shape5 = [[0,-2], [1,-2], [1,-1], [2,-1], "LightSeaGreen"];
const shape6 = [[0,1], [1,1], [1,0], [2,0], "DeepPink"];



const Shapes = [shape1, shape3, shape4, shape5, shape6];

//Mirror Shapes
const shape2M = [[0,0], [1,0], [2,0], [3,0], "Orange"];

//Creating different blocks
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

//function for creating block based on the updated positon
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
//Clear Canvas function
// function clearCanvas( position, pxSize) {
//   for (let i = 0; i < position.length -1; i++) {
//     let cubex = position[i][0];
//     let cubey = position[i][1];
//     ctx.clearRect((cubex * pxSize), (cubey * pxSize), pxSize, pxSize);
//   };
// };

function clearCanvas(position, pxSize) {
  // Check if position is valid
  if (position && position.length > 0) {
    for (let i = 0; i < position.length - 1; i++) {
      let cubex = position[i][0];
      let cubey = position[i][1];
      
      // Clear the specific rectangle where the shape was
      ctx.clearRect((cubex * pxSize), (cubey * pxSize), pxSize, pxSize);
    }
  }
}
//storing the last postion of a block.
function finalPosition(lastpot) {
  let nlastpot = lastpot;
  changePosition(nlastpot[0][0], nlastpot[0][1] -4, nlastpot);
  console.log(nlastpot[0][0], nlastpot[0][1] - 4, nlastpot);
}
//Updating and changing the position of a block
function position(){
  let nshape = [];
  let newshape = Shapes[test];



  if (lastShape) {
    clearCanvas(lastShape, Size);
  }

  // Check if the shape can move down
  if (newPositionY + speed <= canvas.height/Size - 1) {
    // Move the shape down
    let movedShape = changePosition(positionX, newPositionY + speed, newshape);
    newPositionY += speed;
    
    // Store the current shape for next clearing
    if(newPositionY + speed < canvas.height/Size - 1){
      lastShape = movedShape;
    }

  }


else {

  for (let i = 0; i < newshape.length - 1; i++) {
      nshape[i] = [newshape[positionX][0], newshape[positionX][1] + newPositionY];
  }
  nshape.push(newshape[newshape.length - 1]);
  finalPosition(nshape);
  newPositionY = 0;
  //clearCanvas(nshape, Size);
  
  // Select a new random shape
  test = Math.floor(Math.random() * Shapes.length);
}

};

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    time = 50;
    positionX -= 1;
  } else if (event.key === 'ArrowRight') {
    time = 50;
    positionX += 1;
  }
  if (event.key === 'ArrowDown') {
    time = 50;
    speed = 5;};
});

document.addEventListener('keyup', function(event) {
  if (event.key === 'ArrowDown') {
    time = 50;
    speed = 1;
  }
});


setInterval(position, time);

