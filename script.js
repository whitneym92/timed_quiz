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

var questions = [
    {
        question: "Javascript, along with what, are of the fundamental programming languages?"
        answers: [
            { text: "HTML", correct: false},
            { text: "CSS", correct: false},
            { text: "None of the above", correct: false},
            { text: "All of the above", correct: true}
        ]
    }
]