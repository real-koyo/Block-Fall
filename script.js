const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let Size = 24.5;
canvas.width = 255;
canvas.height = 510;

let colors = ["Crimson", "Orange", "DodgerBlue", "BlueViolet", "LightSeaGreen", "DeepPink"];

const shapes = ["4", "4", "4", ]

//genrating 4x4 square shapes
function Shape1 ( positionX, positionY, pxSize, color){
    ctx.fillStyle = color;
    ctx.fillRect( positionX, positionY, pxSize, pxSize);
    ctx.fillRect( (positionX + pxSize) + 0.5, positionY, pxSize, pxSize);
    ctx.fillRect( positionX, (positionY + pxSize) + 0.5, pxSize, pxSize);
    ctx.fillRect( (positionX + pxSize) + 0.5 , (positionY + pxSize) + 0.5, pxSize, pxSize);
}

function Shape2 ( positionX, positionY, pxSize, color){
    ctx.fillStyle = color;
    ctx.fillRect( positionX, positionY + pxSize + 0.5, pxSize, pxSize);
    ctx.fillRect( positionX + pxSize + 0.5, positionY + pxSize + 0.5, pxSize, pxSize);
    ctx.fillRect( positionX + pxSize + 0.5 + pxSize + 0.5, positionY + pxSize + 0.5, pxSize, pxSize);
    ctx.fillRect( positionX + pxSize + 0.5 + pxSize + 0.5 + pxSize + 0.5, positionY + pxSize + 0.5, pxSize, pxSize);
    
}

function Shape3 ( positionX, positionY, pxSize, color){
    ctx.fillStyle = color;
    ctx.fillRect( positionX, positionY , pxSize, pxSize);
    ctx.fillRect( positionX, positionY + pxSize + 0.5, pxSize, pxSize);
    ctx.fillRect( positionX, positionY + pxSize + 0.5 + pxSize + 0.5, pxSize, pxSize);
    ctx.fillRect( positionX + pxSize + 0.5, positionY + pxSize + 0.5 + pxSize + 0.5, pxSize, pxSize);
}

function Shapem3 ( positionX, positionY, pxSize, color){
    ctx.fillStyle = color;
    ctx.fillRect( positionX, positionY , pxSize, pxSize);
    ctx.fillRect( positionX, positionY + pxSize + 0.5, pxSize, pxSize);
    ctx.fillRect( positionX, positionY + pxSize + 0.5 + pxSize + 0.5, pxSize, pxSize);
    ctx.fillRect( positionX - (pxSize + 0.5), positionY + pxSize + 0.5 + pxSize + 0.5, pxSize, pxSize);
}

function Shape5 ( positionX, positionY, pxSize, color){
    ctx.fillStyle = color;
    ctx.fillRect( positionX + pxSize + 0.5 + pxSize + 0.5, positionY , pxSize, pxSize);
    ctx.fillRect( positionX + pxSize + 0.5, positionY, pxSize, pxSize);
    ctx.fillRect( positionX + pxSize + 0.5, positionY + pxSize + 0.5, pxSize, pxSize);
    ctx.fillRect( positionX, positionY + pxSize + 0.5, pxSize, pxSize);
    console.log(color);
}

function Shapem5 ( positionX, positionY, pxSize, color){
    ctx.fillStyle = color;
    ctx.fillRect( positionX - (pxSize + 0.5 + pxSize + 0.5), positionY , pxSize, pxSize);
    ctx.fillRect( positionX - (pxSize + 0.5), positionY, pxSize, pxSize);
    ctx.fillRect( positionX - (pxSize + 0.5), positionY + pxSize + 0.5, pxSize, pxSize);
    ctx.fillRect( positionX, positionY + pxSize + 0.5, pxSize, pxSize);
    console.log(color);
}

//Rotation
function createShape(p1, p2, p3, p4, pxSize, color) {
    ctx.fillStyle = color;
    for (let i = 0; i < 3; i++){
        ctx.fillRect( p1, p2 , pxSize, pxSize);
    }
}

createShape(0, 25, 0, 0, Size, colors[1]);