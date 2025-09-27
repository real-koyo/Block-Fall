const canvas3 = document.querySelector("#canvas3");
const ctx3 = canvas3.getContext("2d");  
Size2 = 10;

canvas3.height = 6 * Size2;
canvas3.width = Size2 * 6;


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

// function createNewShape3(i) {
//   if (!storedShape[i]) return;

//   clearCanvas3();

//   var shapeData = storedShape[i];
//   var coords = shapeData[0];
//   var color = shapeData[1] || 'gray';

// var minX = coords[0][0];
// var minY = coords[0][1];
//   for (var j = 0; j < coords.length; j++) {
//     if (coords[j][0] < minX) minX = coords[j][0];
//     if (coords[j][1] < minY) minY = coords[j][1];
//   }

//   var placedShape = [];
//   for (var j = 0; j < coords.length; j++) {
//     var x = coords[j][0] - minX;
//     var y = coords[j][1] - minY;
//     placedShape.push([x, y]);
//   }

//   currentShape1 = placedShape;
//   currentColor1 = color;

//   createBlock2(currentShape1, currentColor1);
// }

// show the stored piece preview on canvas3
// accepts optional index (default 0). Works when storedShape is either:
//  - a single stored piece: [coords, color]
//  - or an array of stored entries: [ [coords,color], [coords,color], ... ]


//need to working on this function I dont
function createNewShape3(i) {
  // default index
  if (typeof i === 'undefined') i = 0;

  // nothing stored
  if (!storedShape) return;

  // determine coords & color from either format
  var coords, color;
  // Format A: single stored piece: storedShape = [coords, color]
  if (Array.isArray(storedShape) && storedShape.length >= 2 && Array.isArray(storedShape[0]) && (typeof storedShape[1] === 'string' || typeof storedShape[1] === 'undefined')) {
    coords = storedShape[0];
    color = storedShape[1];
  }
  // Format B: array of entries: storedShape[i] = [coords, color]
  else if (Array.isArray(storedShape[i]) && storedShape[i].length >= 2) {
    coords = storedShape[i][0];
    color = storedShape[i][1];
  } else {
    // unsupported shape format
    return;
  }

  if (!coords || coords.length === 0) return;

  clearCanvas3();

  // normalize coords (shift to 0,0)
  var minX = coords[0][0];
  var minY = coords[0][1];
  var maxX = coords[0][0];
  var maxY = coords[0][1];

  for (var j = 1; j < coords.length; j++) {
    if (coords[j][0] < minX) minX = coords[j][0];
    if (coords[j][1] < minY) minY = coords[j][1];
    if (coords[j][0] > maxX) maxX = coords[j][0];
    if (coords[j][1] > maxY) maxY = coords[j][1];
  }

  var shapeWidth = maxX - minX + 1;
  var shapeHeight = maxY - minY + 1;

  // compute centering offsets in block units
  var canvasBlocksX = Math.floor(canvas3.width / Size2);
  var canvasBlocksY = Math.floor(canvas3.height / Size2);

  var offsetX = Math.floor((canvasBlocksX - shapeWidth) / 2);
  var offsetY = Math.floor((canvasBlocksY - shapeHeight) / 2);

  var placedShape = [];
  for (var j = 0; j < coords.length; j++) {
    var x = (coords[j][0] - minX) + offsetX;
    var y = (coords[j][1] - minY) + offsetY;
    placedShape.push([x, y]);
  }

  var usedColor = color || 'gray';

  currentShape1 = placedShape;
  currentColor1 = usedColor;

  createBlock2(currentShape1, currentColor1);
}
