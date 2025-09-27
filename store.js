const canvas3 = document.querySelector("#canvas3");
const ctx3 = canvas3.getContext("2d");  
Size2 = 10;

canvas3.height = 5 * Size2;
canvas3.width = Size2 * 4;


function createSquare2(x, y, color) {
  ctx3.fillStyle = color;
  ctx3.strokeStyle = backgroundColor;
  ctx3.lineWidth = lineWidth;
  
  const px = x * Size2;
  const py = y * Size2;

  ctx3.fillRect(px, py, Size2, Size2);
  ctx3.strokeRect(px, py, Size2, Size2); 
}

function createBlock2(shape, color) {
  for (var i = 0; i < shape.length; i++){
      createSquare2(shape[i][0], shape[i][1], color);
  }
}


function clearCanvas3() {
  ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
}

function createNewShape3(i) {
  if (!storedShape[i]) return;

  clearCanvas3();

  var shapeData = storedShape[i];
  var coords = shapeData[0];
  var color = shapeData[1] || 'gray';

var minX = coords[0][0];
var minY = coords[0][1];
  for (var j = 0; j < coords.length; j++) {
    if (coords[j][0] < minX) minX = coords[j][0];
    if (coords[j][1] < minY) minY = coords[j][1];
  }

  var placedShape = [];
  for (var j = 0; j < coords.length; j++) {
    var x = coords[j][0] - minX;
    var y = coords[j][1] - minY;
    placedShape.push([x, y]);
  }

  currentShape1 = placedShape;
  currentColor1 = color;

  createBlock2(currentShape1, currentColor1);
}