// variables for HTML elements. 

const startButton = document.getElementById("start");
const nextButton = document.getElementById("next");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const button = document.querySelector("button");
const formEl = document.getElementById("form");
const hiScore = document.querySelector(".scores");
const topEl = document.getElementById("top");
const retryEl = document.getElementById("retry");
const returnEl = document.getElementById("return");
let shuffledQuestions, currentQuestionIndex;
var recordButton = document.getElementById("record");
var msgDiv = document.getElementById("msg");
var initialInput = document.getElementById("initials");
var initialInputSpan = document.getElementById("user-initials");
var recentEL = document.getElementById("recent");
var score = 0;
var timerInterval;
var secondsLeft = 60;
var highScores = [];


// function to reload the page from high score. 

returnEl.addEventListener("click", function() {
  location.reload();
})

// Displays form to save high score initials
function showForm () {
  formEl.classList.remove("hide");
}

retryEl.addEventListener("click", function(){
  location.reload();
})

// Show high score user. 

topEl.addEventListener("click", function(){
  questionContainerElement.classList.add("hide");
  hiScore.classList.remove("hide");
})

// Function to start quiz upon clicking of start button

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});


// Alerts upon starting quiz
function startQuiz() {
  score = 0;
  secondsLeft = 60;
  var name = prompt("Welcome to the JavaScript quiz! What is your name?");
  if (name === null || name === "") {
    alert("All right then, keep your secrets.");
    return;
  } else {
    alert("Hello, " + name + ". Welcome to my quiz.");
    alert("You will be presented with five multiple choice questions regarding JavaScript. Upon starting the quiz, you will have one minute to answer all of the questions.");
    alert("Answering a question correctly will grant you one point. However, answering a question incorrectly will award zero points AND subtract five seconds off of the timer.");
    alert("If you manage to answer all 5 questions in the allotted time, your score will be multiplied by the time remaining in order to calculate your final score.");
    alert("Are you ready? Here we go!");
  }

// Code to randomly select next question.

  startButton.classList.add("hide");
  shuffledQuestions = question.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  hiScore.classList.add("hide");
  setNextQuestion();
  timer();

// Timer function.

  var timeEl = document.getElementById("counter");
  function timer() {
    timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.innerHTML = secondsLeft;
      if (secondsLeft <= 0) {
        clearInterval(timerInterval);
        alert("I'm sorry. Time is up. Please try again.");
        location.reload();
      }
    }, 1000);
  }
}

//Function to display next question and generate buttons for answers.

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

//Function to display next question button, or final score once quiz has been completed.

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(correct);
  answerBoolean = selectedButton.dataset.correct;
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    var final = score * secondsLeft;
    showForm();
    clearInterval(timerInterval);
    recordButton.addEventListener("click",function(event){
      event.preventDefault();
    
      console.log(score)
      var user = {initial: initialInput.value, score: final};
      highScores.push(user);
      
        console.log(user);
        localStorage.setItem("user", JSON.stringify(user));
    
        var lastUser = localStorage.getItem("user")
        console.log("last item: ", JSON.parse(lastUser))

          initialInputSpan.innerHTML = lastUser;
          console.log(localStorage.getItem("user"))
    });
    alert("The quiz is complete. Your final score is: " + final + ". Please enter your initials to keep track of your score!");
  }
}

// Event listeners for answer buttons to display if answer is correct or incorrect

function setStatusClass(answerBoolean) {
  console.log("------------------------------------");
  console.log(answerBoolean);
  document.getElementById("answer-buttons").innerHTML = "";
  if (answerBoolean == "true") {
    document.getElementById("question").innerHTML = "Correct!";
    score++;
    console.log(score);
  } else {
    document.getElementById("question").innerHTML = "Incorrect.";
    console.log(score);
    secondsLeft -= 5;
  }
}

//Question array

const question = [
  {
    question: "What does the abbreviation 'var' stand for?",
    answers: [
      { text: "Variable", correct: true },
      { text: "Variety", correct: false },
      { text: "Various", correct: false },
      { text: "Varsity", correct: false },
    ],
  },

  {
    question: "What is needed in order for a function to operate?",
    answers: [
      { text: "Fuel", correct: false },
      { text: "Permission", correct: false },
      { text: "Call", correct: true },
      { text: "Button", correct: false },
    ],
  },

  {
    question: "How do I add to an array?",
    answers: [
      { text: "Push", correct: false },
      { text: "Concat", correct: true },
      { text: "Add", correct: false },
      { text: "Combine", correct: false },
    ],
  },

  {
    question: "What tag would designate JavaScript data?",
    answers: [
      { text: "Head", correct: false },
      { text: "Style", correct: false },
      { text: "Script", correct: true },
      { text: "Meta", correct: false },
    ],
  },

  {
    question: "What event listener involves a mouse?",
    answers: [
      { text: "Change", correct: false },
      { text: "Keypress", correct: false },
      { text: "Submit", correct: false },
      { text: "Click", correct: true },
    ],
  },
];
