const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let Size = 25;
canvas.width = 255;
canvas.height = 510;
let positionX = 0;
let positionY = 0;
//let colors = ["Crimson", "Orange", "DodgerBlue", "BlueViolet", "LightSeaGreen", "DeepPink"];

const shape1 = [[0,0], [0,1], [1,1], [1,0], "Crimson"];
const shape2 = [[0,0], [0,1], [0,2], [0,3], "Orange"];
const shape3 = [[0,0], [0,1], [0,2], [1,2], "DodgerBlue"];
const shape4 = [[1,0], [1,1], [1,2], [0,2], "BlueViolet"];
const shape5 = [[0,1], [1,1], [1,0], [2,0], "LightSeaGreen"];
const shape6 = [[0,0], [1,0], [1,1], [2,1], "DeepPink"];

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

//createShape(shape6, Size);
// Changing each block Position
function changePosition(posX, posY, Shape){
    let fshape = Shape;
    for (let i = 0; i < fshape.length - 1; i++ ){
        fshape[i][0] = (fshape[i][0]) + posX;
        fshape[i][1] = (fshape[i][1]) + posY;
    };
    createShape(fshape, Size);
    
};

changePosition(positionX, positionY, shape5);


