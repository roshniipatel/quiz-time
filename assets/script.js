var startbutton = document.querySelector('#button-2');
var homediv = document.querySelector('#home')
var quizdiv = document.querySelector('#quiz')
var questionEl = document.querySelector('#question')
var currentquestion = 0

var questions = [
  {
    question: 'test question1', 
    choices: ['choice1', 'choice2', 'choice3', 'choice4'],
    answer: 'choice2'
  },
   {
    question: 'test question2', 
    choices: ['choice1a', 'choice2a', 'choice3a', 'choice4a'],
    answer: 'choice3a'
  },
   {
    question: 'test question3', 
    choices: ['choice1b', 'choice2b', 'choice3b', 'choice4b'],
    answer: 'choice1b'
  }
]

function checkanswer (){
  console.log(this.dataset.value);
  if(this.dataset.value === questions[currentquestion].answer){
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

startbutton.addEventListener('click', function() {
  homediv.setAttribute('class', 'hide');
  quizdiv.classList.remove('hide');
  quizdiv.classList.add('flex');
  showquestion();
})