var startScreen = document.querySelector('.start-box')
var startButton = document.querySelector('.start-btn')
var questionsEl = document.getElementById('question-container')
var questions = document.getElementById('questions')
var timerEl = document.querySelector('.timer')
var highscore = document.getElementById('highscore')
var currentQuestion;
var time = 10;
var availableQuestions = [];
var answer = [3, 3, 4, 4, 3];
var questionsAnswers = [
    {
        question: "Commonly used data types do not include:",
        choices: ['Stings', 'Booleans', 'Alerts', 'Numbers'],
        answer: 3
    },
    {
        question: "The condition in an if / else statement inclosed within:",
        choices: ['Quotes', 'Curly brackets', 'Parenthesis', 'Square brackets'],
        answer: 3
    },
    {
        question: "Arrays in Javascript can be used to store:",
        choices: ['Numbers and strings', 'Other Arrays', 'Booleans', 'All the above'],
        answer: 4
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is?",
        choices: ['Javascript', 'terminal / bash', 'for loops', 'console.log'],
        answer: 4
    },
    {
        question: "String values must be inclosed within _____ when being assigned to variables.",
        choices: ['Commas', 'Curly Brackets', 'Quotes', 'Parenthesis'],
        answer: 3
    }
];

startButton.addEventListener('click', function (event) {
    startScreen.style.display = 'none';
    questionsEl.style.display = 'block';
    timer()
})
function timer() {
    var timer = setInterval(function () {
        if (time === 1) {
            clearInterval(timer)
        }
        time--;
        timerEl.innerText = time
    }, 1000)
}
function setAvailableQuestions() {
    var totalQuestions = questionsAnswers.length;
    for (var i = 0; i < totalQuestions.length; i++) {
        availableQuestions.push(questionsAnswers[i])
    }
}
function getNewQuestion() {
    var questionIndex = availableQuestions[Math.floor(math.random() * availableQuestions.length)];
    currentQuestion = questionIndex;
    questions.innerHTML = currentQuestion
}


// highscore.style.display = 'none'; add once quiz ends