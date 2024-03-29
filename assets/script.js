
var startButton = document.querySelector('#button-2');
var homeDiv = document.querySelector('#home');
var quizDiv = document.querySelector('#quiz');
var questionEl = document.querySelector('#question');
var submitButton = document.querySelector('#submit');
var lastDiv = document.querySelector('#last-screen');
var showResults = document.querySelector('#final-score');

var correctAnswers = 0;
var timeLeft = 60;
var questionIndex = 0;
var endInterval;


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


// displays the questions on screen and if index is greater than questions then ends the quiz
function showQuestion() {
  if (questionIndex >= questions.length) {
    endQuiz();
    return;
  } 


  // created elements for the questions and the choices so it shows
  questionEl.textContent = questions[questionIndex].question;
  for (let index = 0; index < questions[questionIndex].choices.length; index++) {
    var div = document.createElement('div');
    var p2 = document.createElement('p2');

    div.classList.add('choice-container');
    p2.classList.add('choice-text');

    p2.textContent = questions[questionIndex].choices[index];
    p2.setAttribute('data-value', questions[questionIndex].choices[index]);
    p2.addEventListener('click', checkAnswer);

    questionEl.appendChild(div);
    div.appendChild(p2);
  }
}


function checkAnswer() {
  //logs the answer chosen and the index as well as the correct answer
  console.log(this.dataset.value, questionIndex, questions[questionIndex].correctAnswer);
 
  if (this.dataset.value === questions[questionIndex].correctAnswer) {
    correctAnswers++
    console.log('correct answer', correctAnswers);
  } else {
    console.log('wrong answer');
    timeLeft-=10;
  }

  questionIndex++ 
  showQuestion()
}


// hides the question screen so that the last screen can be seen
function endQuiz() {
  clearInterval(endInterval);
  quizDiv.setAttribute('class', 'hide');
  lastDiv.removeAttribute('class', 'hide');

  showResults.innerHTML = correctAnswers;
}


// start button resets everything from previous try
startButton.addEventListener('click', function () {
  correctAnswers = 0;
  timeLeft = 60;
  questionIndex = 0;

  // start button also hides the main and last screen and only shows the questions screen
  homeDiv.setAttribute('class', 'hide');
  lastDiv.setAttribute('class', 'hide');
  quizDiv.classList.remove('hide');
  quizDiv.classList.add('flex');
  showQuestion();

  // how the timer works
  endInterval = setInterval(function () {
    timeLeft--;
    // timeLeft = timeLeft-1

    if (timeLeft <= 0) {
      timeLeft = 0;
      clearInterval(endInterval);
      endQuiz();
    }

    document.getElementById('timer').innerHTML = timeLeft;
  }, 1000)
})


// submit button hides the questions screen and shows the last screen with score and initial input
submitButton.addEventListener('click', function () {
  lastDiv.setAttribute('class', 'hide');
  homeDiv.classList.remove('hide');

  var time = document.getElementById('timer').innerHTML; 

  var initials = document.getElementById('initials').value;
  console.log(initials);

  var highScore = JSON.parse(localStorage.getItem('highScores')) || [];

  var newScore = {
    score: time,
    initials: initials,
  };
  console.log(newScore);

  highScore.push(newScore); 
  
  localStorage.setItem('highScores', JSON.stringify(highScore));

  });



