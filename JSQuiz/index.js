let start = document.getElementById('start');
let main = document.getElementById('main');
let result = document.getElementById('result');

start.addEventListener("click", startProgramm);

let currentQuestion = 0;
let countSuccess = 0;
let allQuestions = [
    {
        question: '4+4',
        correct: 8,
        answers: [4, 8, 12, 16],
    },
    {
        question: '2-2',
        correct: 0,
        answers: [0, 4, 3, 2],
    },
];

function startProgramm() {
    start.classList.add('none');
    main.classList.remove('none');
    result.classList.add('none');
    generateQuestion();
};

function generateQuestion() {
    let question = allQuestions[currentQuestion].question;
    main.innerHTML = `<h1 class="question my-5" style="font-size:100px !important">${question}</h1>`;
    let answers = allQuestions[currentQuestion].answers;
    let btn_block = '';
    for (let i of answers) {
        btn_block += `<button class="btn btn-outline-primary fs-1" onclick="checkQuestion(${i})">${i}</button>`;
    }

    main.innerHTML += `<nav class="d-flex justify-content-between" style="width: 50vw !important">${btn_block}</nav>`;
}

function checkQuestion(num) {
    let correct = allQuestions[currentQuestion].correct;
    if (num === correct) { 
        countSuccess++;
    }
    currentQuestion++;
    if (allQuestions.length > currentQuestion) {
        generateQuestion();
    }
    else {
        stopQuiz();
    }
};

function stopQuiz() {
    start.classList.remove("none");
    main.classList.add("none");
    result.classList.remove("none");
    result.innerHTML = `Решено правильно ${countSuccess} из ${allQuestions.length}`;

    currentQuestion = 0;
    countSuccess = 0;
}