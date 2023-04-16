// var initials = document.getElementById('initials');
// var submitScore = document.getElementById('submit');
// var finalScore = document.getElementById('final-score');
// var mostRecentScore = localStorage.getItem('mostRecentScore') || 0;


// var highScore = JSON.parse(localStorage.getItem('highScore')) || [];
// console.log(highScore);
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

