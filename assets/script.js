var startbutton = document.querySelector('#button-2');
var homediv = document.querySelector('#home')
var quizdiv = document.querySelector('#quiz')
var questionEl = document.querySelector('#question')
var currentquestion = 0

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
    question: "Joey doesn't share what?",
    choices: ['Food', 'Friends','Drinks', 'I do not know man'],
    answer: 'Food'
  }
]

function checkanswer() {
  console.log(this.dataset.value);
  if (this.dataset.value === questions[currentquestion].answer) {
    currentquestion++
    showquestion()
  }
}
function showquestion() {
  questionEl.textContent = questions[currentquestion].question
  for (let index = 0; index < questions[currentquestion].choices.length; index++) {
    var div = document.createElement('div')
    var p2 = document.createElement('p2')

    div.classList.add('choice-container')
    p2.classList.add('choice-text')

    p2.textContent = questions[currentquestion].choices[index]
    p2.setAttribute('data-value', questions[currentquestion].choices[index])
    p2.addEventListener('click', checkanswer)

    questionEl.appendChild(div)
    div.appendChild(p2)
  }
}

startbutton.addEventListener('click', function () {
  homediv.setAttribute('class', 'hide');
  quizdiv.classList.remove('hide');
  quizdiv.classList.add('flex');
  showquestion();
})