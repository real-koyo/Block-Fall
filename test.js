const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

var Size = 25;
canvas.width = 250;
canvas.height = 500;
var positionX = Math.floor(Math.random() * (canvas.width / Size)); // Random initial X position
var newPositionY = 0;
var speed = 1; // Keep speed constant

const shape1 = [[0,0], [0,1], [1,1], [1,0], "Crimson"];
const shape2 = [[0,0], [0,1], [0,2], [0,3], "Orange"];
const shape3 = [[0,0], [0,1], [0,2], [1,2], "DodgerBlue"];
const shape4 = [[1,0], [1,1], [1,2], [0,2], "BlueViolet"];
const shape5 = [[0,1], [1,1], [1,0], [2,0], "LightSeaGreen"];
const shape6 = [[0,0], [1,0], [1,1], [2,1], "DeepPink"];
const Shapes = [shape1, shape2, shape3, shape4, shape5, shape6];

let currentShapeIndex = 0;

// Creating different blocks
function createShape(position, pxSize) {
    ctx.fillStyle = position[4];
    ctx.strokeStyle = 'Wheat';
    ctx.lineWidth = 1;
    for (let i = 0; i < position.length - 1; i++) {
        let cubex = position[i][0];
        let cubey = position[i][1];
        ctx.strokeRect(cubex * pxSize, cubey * pxSize, pxSize, pxSize);
        ctx.fillRect(cubex * pxSize, cubey * pxSize, pxSize, pxSize);
    }
}

// Changing each block Position
function changePosition(posX, posY, shape) {
    let fshape = shape.map(coord => [coord[0] + posX, coord[1] + posY]);
    createShape(fshape, Size);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function position() {
    clearCanvas();

    // Check if the shape can still move down
    if (newPositionY + speed < (canvas.height / Size) - 1) { // Adjusted to stay in bounds
        changePosition(positionX, newPositionY + speed, Shapes[currentShapeIndex]);
        newPositionY += speed;
    } else {
        // Reset to top and choose next shape
        newPositionY = 0;
        positionX = Math.floor(Math.random() * (canvas.width / Size));
        currentShapeIndex = (currentShapeIndex + 1) % Shapes.length; // Cycle through shapes
        changePosition(positionX, newPositionY, Shapes[currentShapeIndex]);
    }
}

setInterval(position, 1000);
