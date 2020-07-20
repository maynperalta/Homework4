// Here are my constants and variables that will be needed for the assignment. 

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


//This function is in reference to a return button in the High Score page. Clicking this button will refresh the page. 

returnEl.addEventListener("click", function() {
  location.reload();
})

//This function shows the initial input form which is then saved to local storage. There's also a retry button which will reset the page to try again.
function showForm () {
  formEl.classList.remove("hide");
}

retryEl.addEventListener("click", function(){
  location.reload();
})

//This event listener will show the high scores once the button is clicked it does so by hiding eveything else on the page then showing the high score list. 

topEl.addEventListener("click", function(){
  questionContainerElement.classList.add("hide");
  hiScore.classList.remove("hide");
})

//This event listener starts the quiz. It will initiate the startQuiz function and bring up the first question.

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});


//This is the startQuiz function. Here is a series of alerts that will lay out the rules of the quiz. After the alerts have finished, the quiz will begin and the timer will start.
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

//The questions are presented in a random order as seen by this code here. This is also where the call for the timer function and the call for the setNextQuestion functions are.

  startButton.classList.add("hide");
  shuffledQuestions = question.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  hiScore.classList.add("hide");
  setNextQuestion();
  timer();

//This is a 60 second timer which starts counting down once the quiz begins. If time expires, the quiz is over and the page resets.

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

//These functions set up the next question in the question array below, and create the buttons needed for the answers. They also reset the classes when the next question is shown in order to prevent any bugs with the code.

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

//This function is for when an answer is selected. What it does is load up the next question at random. If there are no more questions in the Array, it goes to the endgame which stores the user's initials and high score in the local storage. My goal was to have these high scores and initals be added to a list in the high score screen, but I was unable to get it to work properly and I had run out of time. If the high score button is clicked before clicking retry, it'll show the score and initials of the last user, but it will disappear off of the HTML after the quiz has been started again. Although it will still be visible in the Application area of the dev tools.

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

//This function will determine if the button clicked during the quiz is the right or wrong answer. If the correct answer is selected, one point is awarded. If an incorrect answer is selected, no points are awarded and five seconds are removed from the timer. 

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

//This is the question array. This has the questions that will be randomly displayed to the user along with their answer choices.

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
