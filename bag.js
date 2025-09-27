const canvas2 = document.querySelector("#canvas2");
const ctx2 = canvas2.getContext("2d");

Size2 = 10;

canvas2.height = 5 * Size2 * 7;
canvas2.width = Size2 * 5;



function createSquare1(x, y, color) {
  ctx2.fillStyle = color;
  ctx2.strokeStyle = backgroundColor;
  ctx2.lineWidth = lineWidth;
  
  const px = x * Size2;
  const py = y * Size2;

  ctx2.fillRect(x*Size2, y*Size2, Size2, Size2);
  ctx2.strokeRect(px, py, Size2, Size2); 

};


function createBlock1(shape, color) {
  for (var i = 0; i < shape.length; i++) {
      createSquare1(shape[i][0], shape[i][1], color);
    };
};

function display (){
    console.log("i can display it here");
    for (i = 0; i < Bag.length; i++){
        createNewShape2(i);

    //createBlock1(Bag[i][0], Bag[i][1]);    
    }
    
}

function clearCanvas2() {
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
}


function createNewShape2(i) {
    var shapeData = Bag[i];
    var coords = shapeData[0];
    var centerX = Math.floor(canvas2.width / 2 / Size2);
        console.log("I am shape data" + storedShape);
    
    // Stors the actual osition on the canvas
    var placedShape = [];
    
    for (var j = 0; j < coords.length; j++) {
        var x = coords[j][0] + centerX - 1;
        var y = coords[j][1] + 2 + i * (6);

        placedShape.push([x, y]);
        }

        currentShape = placedShape;
        currentColor = shapeData[1];

        //need to check on this
    createBlock1(currentShape, currentColor);
    }