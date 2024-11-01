const canvas = document.querySelector("#canvass");
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

  function createShape2( position, pxSize) {
    //ctx.fillStyle = position[4];
    //ctx.strokeStyle = 'Wheat';
    //ctx.lineWidth = 1;
    for (let i = 0; i < position.length -1; i++) {
      let cubex = position[i][0];
      let cubey = position[i][1];
      ctx.clearRect((cubex * pxSize), (cubey * pxSize), pxSize, pxSize);
    };
  };

  createShape(shape1, Size);
  createShape2(shape1, Size);