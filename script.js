document.addEventListener('DOMContentLoaded', function () {
  const resumeOverlay = document.getElementById('resumeButton');
  if (resumeOverlay) resumeOverlay.style.display = 'none';
});


document.getElementById("startGameBtn").addEventListener("click", function() {
      document.getElementById("startScreen").style.display = "none";   // hide start button
      document.getElementById("gameContent").style.display = "block"; // show canvases + controls
      start(); // optional: auto-start game when button is pressed
    });

function score(numberoflineclear){
  if (numberoflineclear == 1){
    Finalscore = Finalscore + (numberoflineclear * 100);
  }
  else if (numberoflineclear == 2){
    Finalscore = Finalscore + (numberoflineclear * 200);
  }
  else if (numberoflineclear == 3){
    Finalscore = Finalscore + (numberoflineclear * 300);
  }  else if (numberoflineclear == 4){
    Finalscore = Finalscore + (numberoflineclear * 500);
  }
document.getElementById('score').innerText = Finalscore;
}


//pause resume button
document.getElementById("pauseToggle").addEventListener("click", function() {
      document.getElementById("resumeGameButton").style.display = "block";   // hide start button
      // document.getElementById("gameContent").style.display = "none"; // show canvases + controls
      document.getElementById("pauseToggle").style.display = "none"; // show canvases + controls
      pause(); // optional: auto-start game when button is pressed
    });


    document.getElementById("resumeGameButton").addEventListener("click", function() {
      document.getElementById("resumeGameButton").style.display = "none";   // hide start button
      document.getElementById("pauseToggle").style.display = "block"; // show canvases + controls
      resume(); // optional: auto-start game when button is pressed
    });

function gameOver(){
  if(reachedTop = true){
    console.log("at the top");
    document.getElementById("gameOver").style.display = "block";   // hide start button
      document.getElementById("gameContent").style.display = "none"; // show canvases + controls
      document.getElementById('score2').innerText = Finalscore;
  }
  }