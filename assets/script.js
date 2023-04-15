
var startButton = document.querySelector('#button-2');
var homeDiv = document.querySelector('#home');
var quizDiv = document.querySelector('#quiz');
var questionEl = document.querySelector('#question');
var submitButton = document.querySelector('#submit');
var showResults = document.querySelector('#final-score');

var correctAnswers = 0;
var currentQuestion = 0;
var timeLeft = 60;


var questions = [
  {
    question: 'How many seasons does friends have?',
    choices: ['12', '10', '8', 'I have never watched this show'],
    correctAnswer: '10'
  },
  {
    question: 'What dessert does Rachel make on Thanksgiving that turns out totally disgusting?',
    choices: ['Chocolate cake', 'Trifle', 'Pumpkin Pie', 'How would I know?'],
    correctAnswer: 'Trifle'
  },
  {
    question: 'How many times did Ross get divorced?',
    choices: ['One', 'Two', 'Three', 'I have no idea'],
    correctAnswer: 'Three'
  },
  {
    question: 'What city is Friends set in?',
    choices: ['California', 'New York', 'Houston', 'Stop asking me please'],
    correctAnswer: 'New York'
  },
  {
    question: "What is the name of Phoebe's twin sister?",
    choices: ['Ursula', 'Mimi', 'Shelby', 'I am giving you the side eye right now'],
    correctAnswer: 'Ursula'
  },
  {
    question: "Joey doesn't share his what?",
    choices: ['Food', 'Friends', 'Drinks', 'I do not know man'],
    correctAnswer: 'Food'
  }
]


function showQuestion() {
  questionEl.textContent = questions[currentQuestion].question;
  for (let index = 0; index < questions[currentQuestion].choices.length; index++) {
    var div = document.createElement('div');
    var p2 = document.createElement('p2');

    div.classList.add('choice-container');
    p2.classList.add('choice-text');

    p2.textContent = questions[currentQuestion].choices[index];
    p2.setAttribute('data-value', questions[currentQuestion].choices[index]);
    p2.addEventListener('click', checkAnswer);

    questionEl.appendChild(div);
    div.appendChild(p2);
  }
}


function checkAnswer() {
  console.log(this.dataset.value);
  if (this.dataset.value === questions[currentQuestion].correctAnswer) {
    currentQuestion++
    showQuestion()
  } else {
    currentQuestion++
    showQuestion()
  }
}


startButton.addEventListener('click', function () {
  homeDiv.setAttribute('class', 'hide');
  quizDiv.classList.remove('hide');
  quizDiv.classList.add('flex');
  showQuestion();
})

var endInterval = setInterval(function() {
  // console.log("dog");
  timeLeft--;
  // timeLeft = timeLeft-1
  if (timeLeft === 0) {
    clearInterval(endInterval);

  } 

  document.getElementById("timer").innerHTML = timeLeft;
}, 1000)


submitButton.addEventListener('click', function () {
  homeDiv.setAttribute('class', 'hide');
  quizDiv.classList.remove('hide');
  quizDiv.classList.add('flex');
  showQuestion();
})


// submitButton.addEventListener('click', showResults);
// function showResults() {
//   // Calculate the user's score as a percentage
//   var score = (correctAnswers / questions.length) * 100;
//   // Construct the message to display to the user
//   var message = 'You scored ' + score + '%!';
//   // Update the text content of the showResults element with the message
//   showResults.textContent = message;
// }














// Code notes

//  question code quiz, questions displayed dynamically
// when complete score is shown and redirect to highscores history

// function to start the quiz
// function to display questions and answers(loops, iterators)
// function to check correct answer
// end function to stop timer redirect to a new page

// Variables
// score, questions, question choices, question answers
    // var score = num, var questions = [{}, {}]
    // question{ question: "",
    //          answer: "",
                // choices:["", "",]
//              }
// User is presented with a single question, user chooses an answer from radio buttons, answer is checked if correct 1 point is given score++
    // Loop through the questions arr to append each question to the page
    //  var iterator = 0;
    // for loop that appends choices to the page
    // questions[0]
    // questions[0].question
    // inside a for loop
    // questions[0].choices[i]
    // if statement that checks for user input and compares to questions[0].answer if correct score++, iterator++, affect time
        // validate answer if( $('#radio').is(':checked') ){
    //  if incorrect subtract from the timer, iterator++
    // Clear the page, append new question
// When all questions answered display a complete button(show form to enter initals an record score) store score in local storage
// redirect to highscores page read scores from local storage append to 


//  Timer
// var timeLeft = 90;
// setInterval(timeTick, 1000);
// function timeTick(){
//     timeLeft--;
//     timer.text = timeLeft

//     if(timeLeft <=0){
//         endQuiz();
//     }
// }





// var count = 0


// const maxQuestions = questions.length;

// startTimer = (seconds) => {
//   counter = seconds;

//   const interval = setInterval(() => {
//     counter--;
//     timerText.textContent = counter;

//     if (counter == 0) {
//       clearInterval(interval);
//       setTimeout(() => {
//         return window.location.assign('/Quiz/../end2.html');
//       }, 1000);
//     };
//   }, 1000);
// };

// startGame = () => {
//   questionCounter = 0;
//   score = 0;
//   availableQuestions = [...questions];
//   startTimer(60);
//   getNewQuestion();
// };