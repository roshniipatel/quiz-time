var initials = document.getElementById('initials');
var submitScore = document.getElementById('submit');
var finalScore = document.getElementById('final-score');
// var mostRecentScore = localStorage.getItem('mostRecentScore') || 0;

function printHighScore() {
  var highScore = JSON.parse(localStorage.getItem("highScores")) || []; 

  for (var i = 0; i < highScore.length; i++) {
    var LiEl = document.createElement('li');
    console.log(highScore[i]);
    LiEl.textContent = highScore[i].initials + ' ' + highScore[i].score;

    var olEl = document.getElementById('scoreboard');
    olEl.appendChild(LiEl);
  }
}

printHighScore(); 

