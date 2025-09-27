function lineClear() {
  // how many blocks per row
  var rows = [];                       // will store [rowY, [indexes of blocks]]
  var toDelete = [];
  var clearedRows = [];
               // all indexes that must be deleted

  // loop to detact the rows and its position inside the finalAllBlocks
  for (var i = 0; i < finalAllBlocks.length; i++) {
    var X = finalAllBlocks[i][0][1]; // row position of this block
    var found = false;

    // look for this row in rows array
    for (var j = 0; j < rows.length; j++) {
      if (rows[j][0] === X) {
        rows[j][1].push(i); // add index to existing row group
        found = true;
        break;
      }
    }

    // if row not found, create new one
    if (!found) {
      //pushes the row index and the position inside the finalAllbock
      rows.push([X, [i]]);
    }
  }

  // 2) Find which rows are full and collect their indexes
  for (i = 0; i < rows.length; i++) {
    if (rows[i][1].length === rowSize) {
      // push all indexes of this full row into toDelete
      for (j = 0; j < rows[i][1].length; j++) {
        toDelete.push(rows[i][1][j]);
      }
      clearedRows.push(rows[i][0]);
    }
  }

  // 3) Sort indexes descending so splice works correctly
  toDelete.sort(function(a, b) {
    return b - a;
  });

  // 4) Splice each index only once
  var last = -1;
  for (i = 0; i < toDelete.length; i++) {
    if (toDelete[i] !== last) {
      finalAllBlocks.splice(toDelete[i], 1);
      last = toDelete[i];

    }
  }
clearedRows.sort(function(a, b) {
    return a - b;
  });

  // Push down blocks above each cleared row
  for (var j = 0; j < finalAllBlocks.length; j++) {
    var shift = 0;
    for (var i = 0; i < clearedRows.length; i++) {
        if (finalAllBlocks[j][0][1] < clearedRows[i]) {
            shift++;
        }
    }
    finalAllBlocks[j][0][1] += shift; // move block down by number of cleared rows below it
}

var rowsCleared = clearedRows.length;

score(rowsCleared);


}