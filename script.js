const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

var Size = 25;
canvas.width = 250;
canvas.height = 500;
var positionX = 0;
var positionY = 0;
var speed = 1;
var newPositionY = 0;
var test = 0;
var time = 300;

const shape1 = [[0,0], [0,1], [1,1], [1,0], "Crimson"];
const shape2 = [[0,0], [0,1], [0,2], [0,3], "Orange"];
const shape3 = [[0,0], [0,1], [0,2], [1,2], "DodgerBlue"];
const shape4 = [[1,0], [1,1], [1,2], [0,2], "BlueViolet"];
const shape5 = [[0,1], [1,1], [1,0], [2,0], "LightSeaGreen"];
const shape6 = [[0,0], [1,0], [1,1], [2,1], "DeepPink"];
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

// Changing each block Position
// function changePosition(posX, posY, Shape){
//     let fshape = Shape;
//     for (let i = 0; i < fshape.length - 1; i++ ){
//         fshape[i][0] = (fshape[i][0]) + posX;
//         fshape[i][1] = (fshape[i][1]) + posY;
//     };
//     createShape(fshape, Size);
    
// };

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
};

function clearCanvas(test, tst) {
  ctx.clearRect(test, tst, canvas.width, canvas.height);
};


function finalPosition(lastpot) {
  let nlastpot = lastpot;
  console.log(nlastpot);
}
//changePosition(positionX, newPositionY, Shapes[0]);

function position(lastpot){
  let nshape = [];
  console.log(nshape);
  let newshape = Shapes[test];
    clearCanvas(positionX, newPositionY);
    if (newPositionY + speed <= canvas.height/Size - 1) {
    changePosition(positionX, newPositionY + speed, newshape);
    newPositionY = newPositionY + speed;
    for (let i = 0; i < newshape.length - 1 ; i++) {
      // Create a new coordinate by adding posX and posY
      nshape[i] = [newshape[i][0], newshape[i][1] + newPositionY]; 
    }
    
  nshape.push(newshape[newshape.length - 1]);
  console.log("position", nshape[0][1], "canvas", canvas.height/Size - 1); // Push the color at the end
    } 
    else if ( nshape[0][1] >= canvas.height/Size - 1) {
        console.log("its working");
        lastpot(nshape);
    }
    else{
      // changePosition(positionX, newPositionY, Shapes[test]);
      // newPositionY = 0;
      // clearCanvas(positionX, newPositionY);
      // if (test <= Shapes.length - 1) {
      // test = Math.floor(Math.random() * 5);
      console.log(newshape[i][1] + newPositionY);
    // }
    
};
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

