var startButton = document.getElementById("start-btn")
var questionContainerElement = document.getElementById("question-container")

startButton.addEventListener("click", startQuiz)

function startQuiz(){
    startButton.classList.add("hide")
    questionContainerElement.classList.remove("hide")
    setNextQuestion()

}

function setNextQuestion() {

}

function selectAnswer() {

}