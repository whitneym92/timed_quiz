var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerEl = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");

let randomQuestion, currentQuestionIndex;

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click",  () => {
    currentQuestionIndex++;
    setNextQuestion();
});


var timeleft = 1;
let time= timeleft * 60;
var countdownEl = document.getElementById("countdown");

function startQuiz(){
    startButton.classList.add("hide");
    randomQuestion = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerEl.classList.remove("hide");
    setNextQuestion();

    var timer = setInterval(function() {
        var minutes = Math.floor(time/60);
        let seconds = time % 60;
        seconds= seconds <10 ? `0` + seconds : seconds;
     
      if(time <= 0){
        clearInterval(timer);
        countdownEl.innerHTML = "You're out of time!";
      } else {
        countdownEl.innerHTML = `${minutes}:${seconds}`;
      }
      time -= 1;
     }, 1000);

}

function setNextQuestion() {
    resetState();
    showQuestion(randomQuestion[currentQuestionIndex]);

}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsEl.appendChild(button);
    });


}

function resetState() {
    nextButton.classList.add("hide");
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild
        (answerButtonsEl.firstChild);
    }
}


function selectAnswer(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (randomQuestion.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
    } else {
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
    }

}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

var questions = [
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