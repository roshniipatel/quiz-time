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

// var highScore = JSON.parse(localStorage.getItem("highScores")) || []; 
// console.log(highScore);


// initials.addEventListener('keyup', () => {
//   // Save button won't be clickable until user initials are typed in //
//   submitScore.disabled = !initials.value;
// })

// // console.log(JSON.parse(localStorage.getItem('highScore')));

// // if (!isNaN(mostRecentScore)) { 
// //   console.log(finalScore)
// //   finalScore.innerText = mostRecentScore;
// // } else {
// //   finalScore.innerText = 'N/A'; 
// // }

// // finalScore.innerText = mostRecentScore;


// initials.addEventListener('keyup', () => {
//   // submitScore.disabled = initials.value; 
// });


// saveHighScore = e => {
//   e.preventDefault();
//   var score = {
//     score: mostRecentScore,
//     name: initials.value
//   };
//   highScore.push(score); // add the new score to the highScore array
//   localStorage.setItem('highScore', JSON.stringify(highScore)); // save the updated highScore array to local storage
//   console.log(highScore);
// };

