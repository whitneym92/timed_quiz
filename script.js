const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");


const startMinutes = 2;
let time = startMinutes * 60;
const countdownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}


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
            { text: "A) HTML", correct: false},
            { text: "B) CSS", correct: false},
            { text: "C) None of the above", correct: false},
            { text: "D) All of the above", correct: true},
        ]
    },
    {
        question: "What are examples of basic data-types?",
        answers: [
            {text: "A) HTML, CSS and Javascript", correct: false},
            {text: "B) Alerts, prompts and confirms", correct: false},
            {text: "C) Numbers, strings and booleans", correct: true},
            {text: "D) All of the above", correct: false},
        ]
    },
    {
        question: "What are the components of a function?",
        answers: [
            {text: "A) Function definition", correct: false},
            {text: "B) Function execution", correct: false},
            {text: "C) Parenthesis()", correct: false},
            {text: "D) All the above", correct: true},
        ]
    },
    {
        question: "What do objects contain?",
        answers: [
            {text: "A) Properties", correct: false},
            {text: "B) Values", correct: false},
            {text: "C) All of the above", correct: true},
            {text: "D) None of the above", correct: false},
        ]
    },
    {
        question: "The only eventListener is the 'click' event?",
        answers: [
            {text: "A) True", correct: false},
            {text: "B) False", correct: true},
            {text: "C) What are those?", correct: false},
            {text: "D) I'm done with JS", correct: false},
        ]
    }
];