const questions = [
    {
        question: "Which keyword is used to declare a block-scoped variable that can be reassigned in javascript?",
        answers: [
            {text: " (A) const", correct: false},
            {text: " (B) let", correct: true},
            {text: " (C) char", correct: false},
            {text: " (D) int", correct: false},
        ]
    },
    {
        question: "Which software development phase focuses on identifying and fixing defects?",
        answers: [
            {text: " (A) requirement gathering only", correct: false},
            {text: " (B) testing and debugging", correct: true},
            {text: " (C) deployment", correct: false},
            {text: " (D) upgrading", correct: false},
        ]
    },
    {
        question: "What data structure follows the Last In, First Out (LIFO) principle?",
        answers: [
            {text: " (A) queue", correct: false},
            {text: " (B) linked list", correct: false},
            {text: " (C) stack", correct: true},
            {text: " (D) binary tree", correct: false},
        ]
    },
    {
        question: "Which software development model follows a sequential, phase-by-phase approach?",
        answers: [
            {text: " (A) agile", correct: true},
            {text: " (B) spiral", correct: false},
            {text: " (C) waterfall model", correct: false},
            {text: " (C) prototyping model", correct: false},
        ]
    },
    {
         question: "what is the main purpose of software requirements analysis?",
        answers: [
            {text: " (A) to identify and document what the system must do", correct:  true},
            {text: " (B) to write all source code", correct: false},
            {text: " (C) to deploy the final application", correct: false},
            {text: " (D) to fixe errors after release", correct: false},
        ]
    },
     {
         question: "what is the main purpose of software requirements analysis?",
        answers: [
            {text: " (A) to identify and document what the system must do", correct:  true},
            {text: " (B) to write all source code", correct: false},
            {text: " (C) to deploy the final application", correct: false},
            {text: " (D) to fixe errors after release", correct: false},
        ]
    }
];

const questionElement = document.getElementById ("question");
const answerButtons = document.getElementById ("answer-button");
const nextButton = document.getElementById ("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function  resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();