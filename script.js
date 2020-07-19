// Pseudo-code
// make an HTML document that will house our container which will have our multiple choice questions and answers.
// add a button for high scores.
// add a space for a countdown timer.
// create a CSS stylesheet in order to style our workspace
// create a JavaScript file which will have all of our script in order to give feedback on the answers.
//     feedback will involve whether the answer is right or wrong.
//     answer will change the question to the next question
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
// const hiScore = socument.querySelector("#scores");
let shuffledQuestions, currentQuestionIndex
// var recordButton = document.getElementById("record");
// var msgDiv = document.querySelector("#msg");
// var initialInput = document.querySelector("#initials");
// var initialInputSpan = document.getElementById("#user-initials");
var score = 0

// function displayMessage(type, message){
//   msgDiv.textContent = message;
//   msgDiv.setAttribute("class", type);
// }

// recordButton.addEventListener("click",function(event){
//   event.preventDefault();

//   var user = {initial: initialInput.value.trim()};
  
//   if (user.initial ===""){
//     displayMessage("error", "Please enter your initals");
//   }else{
//     displayMessage("Success!", "Score added.");
  
//     console.log(user);
//     localStorage.setItem("user", user);

//     var lastUser = localStorage.getItem("user");
//       initialInputSpan.textContent = lastUser.initial;
//   }  
// });


// hiScore.addEventListener("click", showScores)

// function showScores(){



// }

startButton.addEventListener("click", startQuiz)
nextButton.addEventListener("click", () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startQuiz() {
  score = 0
  var name = prompt("Welcome to the JavaScript quiz! What is your name?");
  if (name === null){
  alert("All right then, keep your secrets.")
  return;
  } else {

  alert("Hello, " + name + ". Welcome to my quiz.") 
  alert("You will be presented with five multiple choice questions regarding JavaScript. Upon starting the quiz, you will have one minute to answer all of the questions.")
  alert("Answering a question correctly will grant you one point. However, answering a question incorrectly will award zero points AND subtract five seconds off of the timer.")
  alert("If you manage to answer all 5 questions in the allotted time, your score will be multiplied by the time remaining in order to calculate your final score.")
  alert("Are you ready? Here we go!")}

  startButton.classList.add("hide")
  shuffledQuestions = question.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove("hide")
  setNextQuestion()
  timer()
   
  var timeEl = document.getElementById("counter");
  var secondsLeft = 60;
    function timer(){
      var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.innerHTML = secondsLeft;
        if(secondsLeft === 0){
          clearInterval(timerInterval);
          alert("I'm sorry. Time is up. Please try again.")
          return;
        }}, 1000);}
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
  })}

function resetState(){
  nextButton.classList.add("hide")
  while (answerButtonsElement.firstChild){
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }}

function selectAnswer(e, answerBoolean) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  answerBoolean = selectedButton.dataset.correct
  if (shuffledQuestions.length > currentQuestionIndex +1) {
    nextButton.classList.remove("hide")
  }else{
    startButton.innerText = "Retry"
    startButton.classList.remove("hide")
    alert("The quiz is complete. Your final score is: " + score + ". Please enter your initials to keep track of your score!")

  }}

function setStatusClass(event, answerBoolean) {
  console.log("------------------------------------");
  console.log(answerBoolean)
  document.getElementById('answer-buttons').innerHTML = "";
  if (answerBoolean == 'true') {
    document.getElementById('question').innerHTML = "Correct!"
    alert("That is correct!")
    score++
    console.log(score)
  } else {
    document.getElementById('question').innerHTML = "Incorrect."
    alert("I'm sorry. That is incorrect.")
    console.log(score)
  }}

const question = [{question: "What does the abbreviation 'var' stand for?",
    answers: [
      {text: "Variable", correct: true},
      {text: "Variety", correct: false},
      {text: "Various", correct: false},
      {text: "Varsity", correct: false}
    ],},

  {question: "What is needed in order for a function to operate?",
    answers: [
      {text: "Fuel", correct: false},
      {text: "Permission", correct: false},
      {text: "Call", correct: true},
      {text: "Button", correct: false}
    ],},

  {question: "How do I add to an array?",
    answers: [
      {text: "Push", correct: false},
      {text: "Concat", correct: true},
      {text: "Add", correct: false},
      {text: "Combine", correct: false}
    ],},

  {question: "What tag would designate JavaScript data?",
    answers: [
      {text: "Head", correct: false},
      {text: "Style", correct: false},
      {text: "Script", correct: true},
      {text: "Meta", correct: false}
    ],},

  {question: "What event listener involves a mouse?",
    answers: [
      {text: "Change", correct: false},
      {text: "Keypress", correct: false},
      {text: "Submit", correct: false},
      {text: "Click", correct: true}
    ],},]