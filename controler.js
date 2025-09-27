document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowUp') {
    rotate();
}
  if (event.key === 'ArrowLeft') {
  moveLeft();
  }

  else if (event.key === 'ArrowRight') {
    right();
    }

  else if (event.key === 'ArrowDown'){
    falldown();

  }
  // else if (event.code === 'Space'){
  //   event.preventDefault();
  //   if (storedShape.length === 0){
  //   storedShape.push([currentShape], [currentColor]);
  //   createNewShape();
  //   createNewShape3(0);

  //   } else{
  //     storedShape.length = 0;
  //   storedShape.push([currentShape], [currentColor]);
  //   createNewShape();
  //   createNewShape3(0);

  //   }
  // }
  else if (event.code === 'Space') {
  event.preventDefault();
  handleSwap();
}
});

function handleSwap() {
  // Case 1: nothing stored yet → store current
  if (storedShape === null) {
    storedShape = [copyCoords(currentShape), currentColor];
    createNewShape();     // give player a new piece
    createNewShape3(0);   // update storage preview
    hasSwapped = true;
  } 
  // Case 2: already stored → swap with current
  else if (!hasSwapped) {
    var temp = [copyCoords(currentShape), currentColor];
    currentShape = copyCoords(storedShape[0]);
    currentColor = storedShape[1];
    storedShape = temp;

    clearCanvas();                      
    createallfinalshaepe();             
    createBlock(currentShape, currentColor); 
    createNewShape3(0);             
    hasSwapped = true;
  }
}

function copyCoords(shape) {
  var newShape = [];
  for (var i = 0; i < shape.length; i++) {
    newShape.push([shape[i][0], shape[i][1]]);
  }
  return newShape;
}


 function moveLeft(){
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


function rotate(){  currentShape = rotate90Clockwise(currentShape);}

function right(){
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



document.getElementById("left").addEventListener("click", function() {
    moveLeft();
    });

    document.getElementById("Rotate").addEventListener("click", function() {
    rotate();
    });

        document.getElementById("Right").addEventListener("click", function() {
    right();
    });

            document.getElementById("down").addEventListener("click", function() {
    falldown();
    });

                document.getElementById("store").addEventListener("click", function() {
      handleSwap();
    });
