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
const button = document.querySelector("button");
let shuffledQuestions, currentQuestionIndex

var answerBoolean 
var score = 0



startButton.addEventListener("click", startQuiz)
nextButton.addEventListener("click", () => {
  currentQuestionIndex++
  setNextQuestion()
})


function startQuiz() {
  score = 0
  alert("Welcome to the JavaScript quiz!");
  var name = prompt("What is your name?");
  if (name === null){
  alert("All right then, keep your secrets.")
  return;
  } else {

  alert("Hello, " + name + ". Welcome to my quiz.") 
  alert("You will be presented with five multiple choice questions regarding JavaScript.")
  alert("Upon starting the quiz, you will have one minute to answer all of the questions.")
  alert("Answering a question correctly will grant you one point.")
  alert("Answering a question incorrectly will award zero points and subtract five seconds off of the timer.")}

  startButton.classList.add("hide")
  shuffledQuestions = question.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove("hide")
  setNextQuestion()
  timer()
  

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
      button.dataset.correct = answer.correct
    button.addEventListener("click", selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function checkAnswer(event) {
  console.log(event)
}

function resetState(){
  // clearStatusClass(document.body)
  nextButton.classList.add("hide")
  while (answerButtonsElement.firstChild){
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}


function selectAnswer(e, answerBoolean) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  // Array.from(answerButtonsElement.children).forEach(button => {
    // setStatusClass(button, button.dataset.correct)
  // })  
  answerBoolean = selectedButton.dataset.correct
  if (shuffledQuestions.length > currentQuestionIndex +1) {
    nextButton.classList.remove("hide")
  }else{
    startButton.innerText = "Retry"
    startButton.classList.remove("hide")

    alert("The quiz is complete. Your score is: " + score + ". Please try again.")
  }
}

function setStatusClass(element, answerBoolean) {
  console.log("------------------------------------");
  // clearStatusClass(element)
  console.log(answerBoolean)
  console.log(typeof answerBoolean)
  document.getElementById('answer-buttons').innerHTML = "";
  if (answerBoolean == 'true') {
    console.log("If accessed")
    // element.classList.add("correct")
    document.getElementById('question').innerHTML = "Correct!"
    alert("That is correct!")
    score++
    console.log(score)
  } else {
    // element.classList.add("wrong")
    document.getElementById('question').innerHTML = "Incorrect."
    alert("I'm sorry. That is incorrect.")
    console.log(score)
  }
}

// function clearStatusClass(element) {
//   element.classList.remove("correct")
//   element.classList.remove("wrong")
// }

// var timeEl = document.querySelector(".counter");
// var secondsLeft = 60;
//   function timer(){
//     var timerInterval = setInterval(function() {
//       secondsLeft--;
//       timeEl.innerHTML = secondsLeft;
//       if(secondsLeft === 0){
//         clearInterval(timerInterval);
//         alert("I'm sorry. Time is up. Please try again.")
//       }
//     }, 1000);
//   }

// var mins = 1; 
//     var secs = mins * 60;
//     var currentSeconds = 0;
//     var currentMinutes = 0;
    
//     setTimeout(timer,1000); 

//     function timer() {
//         currentMinutes = Math.floor(secs / 60);
//         currentSeconds = secs % 60;
//         if(currentSeconds <= 9) currentSeconds = "0" + currentSeconds;
//         secs--;
//         document.getElementById("counter").innerHTML = currentMinutes + ":" + currentSeconds; 
//         if(secs !== -1) setTimeout('timer()',1000);
//     }


const question = [
  {
    question: "What does the abbreviation 'var' stand for?",
    answers: [
      {text: "Variable", correct: true},
      {text: "Variety", correct: false},
      {text: "Various", correct: false},
      {text: "Varsity", correct: false}
    ], 
    correctAnswer: 0

  },
  {
    question: "What is needed in order for a function to operate?",
    answers: [
      {text: "Fuel", correct: false},
      {text: "Permission", correct: false},
      {text: "Call", correct: true},
      {text: "Button", correct: false}
    ],
    correctAnswer: 2
  },
  {
    question: "How do I add to an array?",
    answers: [
      {text: "Push", correct: false},
      {text: "Concat", correct: true},
      {text: "Add", correct: false},
      {text: "Combine", correct: false}
    ],
    correctAnswer: 1
  },

  {
    question: "What tag would designate JavaScript data?",
    answers: [
      {text: "Head", correct: false},
      {text: "Style", correct: false},
      {text: "Script", correct: true},
      {text: "Meta", correct: false}
    ],
    correctAnswer: 2
  },

  {
    question: "What event listener involves a mouse?",
    answers: [
      {text: "Change", correct: false},
      {text: "Keypress", correct: false},
      {text: "Submit", correct: false},
      {text: "Click", correct: true}
    ],
    correctAnswer: 3
  },
]