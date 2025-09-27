// rotate function
function rotate90Clockwise(shape) {
  // choose pivot (first block of shape)
  var center = shape[0];
  var rotated = [];

  for (var i = 0; i < shape.length; i++) {
    var x = shape[i][0] - center[0];
    var y = shape[i][1] - center[1];

    // rotate (x,y)
    var newX = y;
    var newY = -x;

    rotated.push([newX + center[0], newY + center[1]]);
  }

  return rotated;
}
