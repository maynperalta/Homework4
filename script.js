// Pseudo-code
// make an HTML document that will house our container which will have our multiple choice questions and answers.
// add a button for high scores.
// add a space for a countdown timer.
// create a CSS stylesheet in order to style our workspace
// create a JavaScript file which will have all of our script in order to give feedback on the answers.
//     feedback will involve whether the answer is right or wrong.
//     answer will change the question to the next question
//     right answer will add time to the timer
//     wrong answer will subtract time from the timer.
//     when timer reaches zero, quiz is over.
//     when all questions have been answered, quiz is over.
//     high score will be logged in local storage.
//     Alerts if quiz is over, timer runs out, and quiz has begun.

//     additional research was done from watching the video "Build A Quiz App With JavaScript" from the channel "Web Dev Simplified"

const startButton = document.getElementById("start");
const nextButton = document.getElementById("next");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
let shuffledQuestions, currentQuestionIndex




startButton.addEventListener("click", startQuiz)
nextButton.addEventListener("click", () => {
  currentQuestionIndex++
  setNextQuestion()
})


function startQuiz() {
  alert("Welcome to the JavaScript quiz!");
  var name = prompt("What is your name?");
  if (name === null);{
  alert("I don't know how to address you.")
  return;
  } else {

  alert("Welcome, " + name + ". Let's begin") }

  startButton.classList.add("hide")
  shuffledQuestions = question.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove("hide")
  setNextQuestion()
  

    }


function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add("btn")
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}
function resetState(){
  clearStatusClass(document.body)
  nextButton.classList.add("hide")
  while (answerButtonsElement.firstChild){
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })  
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide")
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add("correct")
  } else {
    element.classList.add("wrong")
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct")
  element.classList.remove("wrong")
}


var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("counter").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "EXPIRED";
  }
}, 1000);

const question = [
  {
    question: "What does the abbreviate 'var' stand for?",
    answers: [
      { text: "Variable", correct: true },
      { text: "Variety", correct: false },
      { text: "Various", correct: false },
      { text: "Varsity", correct: false }
    ]

  },
  {
    question: "What is needed for a function to operate?",
    answers: [
      {text: "Fuel", correct: false},
      {text: "Permission", correct: false},
      {text: "Call", correct: true},
      {text: "Button", correct: false}
    ]
  },
  {
    question: "How do I add to an array?",
    answers: [
      {text: "Push", correct: false},
      {text: "Concat", correct: true},
      {text: "Add", correct: false},
      {text: "Combine", correct: false}
    ]
  },

  {
    question: "What tag would designate JavaScript data?",
    answers: [
      {text: "Head", correct: false},
      {text: "Style", correct: false},
      {text: "Script", correct: true},
      {text: "Meta", correct: false}
    ]
  },

  {
    question: "What event listener involves a mouse?",
    answers: [
      {text: "Change", correct: false},
      {text: "Keypress", correct: true},
      {text: "Submit", correct: false},
      {text: "Click", correct: true}
    ]
  },
]