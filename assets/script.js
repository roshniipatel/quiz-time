var startButton = document.querySelector('#button-2');
var homeDiv = document.querySelector('#home')
var quizDiv = document.querySelector('#quiz')
var questionEl = document.querySelector('#question')
var currentQuestion = 0

var questions = [
  {
    question: 'How many seasons does friends have?',
    choices: ['12', '10', '8', 'I have never watched this show'],
    answer: '10'
  },
  {
    question: 'What dessert does Rachel make on Thanksgiving that turns out totally disgusting?',
    choices: ['Chocolate cake', 'Trifle', 'Pumpkin Pie', 'How would I know?'],
    answer: 'Trifle'
  },
  {
    question: 'How many times did Ross get divorced?',
    choices: ['One', 'Two', 'Three', 'I have no idea'],
    answer: 'Three'
  },
  {
    question: 'What city is Friends set in?',
    choices: ['California', 'New York', 'Houston', 'Stop asking me please'],
    answer: 'New York'
  },
  {
    question: "What is the name of Phoebe's twin sister?",
    choices: ['Ursula', 'Mimi', 'Shelby', 'I am giving you the side eye right now'],
    answer: 'Ursula'
  },
  {
    question: "Joey doesn't share his what?",
    choices: ['Food', 'Friends','Drinks', 'I do not know man'],
    answer: 'Food'
  }
]

function checkAnswer() {
  console.log(this.dataset.value);
  if (this.dataset.value === questions[currentQuestion].answer) {
    currentQuestion++
    showQuestion()
  }

  else {
    currentQuestion++
    showQuestion()
  }
}

function showQuestion() {
  questionEl.textContent = questions[currentQuestion].question
  for (let index = 0; index < questions[currentQuestion].choices.length; index++) {
    var div = document.createElement('div')
    var p2 = document.createElement('p2')

    div.classList.add('choice-container')
    p2.classList.add('choice-text')

    p2.textContent = questions[currentQuestion].choices[index]
    p2.setAttribute('data-value', questions[currentQuestion].choices[index])
    p2.addEventListener('click', checkAnswer)

    questionEl.appendChild(div)
    div.appendChild(p2)
  }
}

startButton.addEventListener('click', function () {
  homeDiv.setAttribute('class', 'hide');
  quizDiv.classList.remove('hide');
  quizDiv.classList.add('flex');
  showQuestion();
})