// Start game
let gameInterval = null;
function start() {
  randomBag()
    createNewShape();
if (gameInterval !== null) {

    return;
  }
  gameInterval = setInterval(falldown, time);

}
function pause() {
  if (gameInterval === null) return; 
  clearInterval(gameInterval);
  gameInterval = null;
}

function resume() {
  time = 500; // or any updated time
  if (gameInterval !== null) return;  
  gameInterval = setInterval(falldown, time);
}
