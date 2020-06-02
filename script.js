const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click",  () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startQuiz(){
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide")
    setNextQuestion()

};

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

};

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


};

function resetState() {
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
};


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }

};

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
};

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const questions = [
    {
        question: "Javascript, along with what, make up the fundamental programming languages?",
        answers: [
            { text: "HTML", correct: false},
            { text: "CSS", correct: false},
            { text: "None of the above", correct: false},
            { text: "All of the above", correct: true},
        ]
    },
    {
        question: "What are examples of basic data-types?",
        answers: [
            {text: "HTML, CSS and Javascript", correct: false},
            {text: "Alerts, prompts and confirms", correct: false},
            {text: "Numbers, strings and booleans", correct: true},
            {text: "All of the above", correct: false},
        ]
    },
    {
        question: "What are the components of a function?",
        answers: [
            {text: "Function definition", correct: false},
            {text: "Function execution", correct: false},
            {text: "Parenthesis()", correct: false},
            {text: "All the above", correct: true},
        ]
    },
    {
        question: "What do objects contain?",
        answers: [
            {text: "Properties", correct: false},
            {text: "Values", correct: false},
            {text: "All of the above", correct: true},
            {text: "None of the above", correct: false},
        ]
    },
    {
        question: "The only eventListener is the 'click' event?",
        answers: [
            {text: "True", correct: false},
            {text: "False", correct: true},
            {text: "What are those?", correct: false},
            {text: "I'm done with JS", correct: false},
        ]
    }
];