var startScreen = document.querySelector('.container-sm')
var startButton = document.querySelector('.start-btn')
var questionsEl = document.getElementById('question-card')
var questions = document.getElementById('questions')
var timerEl = document.querySelector('.timer')
var nextButton = document.getElementById('next-btn')
var userName = document.getElementById('username')
var answerBtn1 = document.getElementById('btn1')
var answerBtn2 = document.getElementById('btn2')
var answerBtn3 = document.getElementById('btn3')
var answerBtn4 = document.getElementById('btn4')
var highscore = document.getElementById('highscore')
var answerButtons = document.getElementById('answer-buttons')
var messageAreaEl = document.getElementById('message-area');
var nameSubmitEl = document.getElementById('name-submit');
var scoreBoolean = false;
var scoreArray = [];
var currentScore = 0;
var time = 60;
var questionNumber = 0;
var availableQuestions = [];
var questionsAnswers = [
    {
        question: "Commonly used data types do not include:",
        choices: ['Strings', 'Booleans', 'Alerts', 'Numbers'],
        answer: 2
    },
    {
        question: "The condition in an if / else statement inclosed within:",
        choices: ['Quotes', 'Curly brackets', 'Parenthesis', 'Square brackets'],
        answer: 2
    },
    {
        question: "Arrays in Javascript can be used to store:",
        choices: ['Numbers and strings', 'Other Arrays', 'Booleans', 'All the above'],
        answer: 3
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is?",
        choices: ['Javascript', 'terminal / bash', 'for loops', 'console.log'],
        answer: 3
    },
    {
        question: "String values must be inclosed within _____ when being assigned to variables.",
        choices: ['Commas', 'Curly Brackets', 'Quotes', 'Parenthesis'],
        answer: 2
    }
];
startButton.addEventListener('click', function (event) {
    startScreen.style.display = 'none';
    questionsEl.style.display = 'block';
    username.style.display = 'none';
    timer();
    getNewQuestion();

})
var answerEls = document.querySelectorAll('#answer-buttons button');
for (i = 0; i < answerEls.length; i++) {
    answerEls[i].addEventListener('click', function (event) {
        var answerNum = event.target.getAttribute('data-answer');
        console.log(answerNum);
        answerNum = answerNum - 1; // harmonize with questions array
        var currentQuestion = questionsAnswers[questionNumber];
        if (currentQuestion.answer == answerNum) {
            //alert('Yay!!!');
            messageAreaEl.innerHTML = '';
            if (questionNumber < (totalQuestions - 1)) {
                availableQuestions.push(questionsAnswers[questionNumber]);
                questionNumber++;
                getNewQuestion();
                currentScore = currentScore + 10;
                timerEl.innerHTML = currentScore;
            } else {
                endGame();
            }
        } else {
            //alert('Bxzzz!!');
            time = time - 10;
            messageAreaEl.innerHTML = 'Wrong !!!!';
        }
    })
}
function timer() {
    var timer = setInterval(function () {
        if (time === 0) {
            clearInterval(timer)
            endGame()
        }
        time--;
        timerEl.innerText = time
    }, 1000)
}
// function setAvailableQuestions() {
var totalQuestions = questionsAnswers.length;
console.log(questionNumber < totalQuestions - 1);
console.log(questionNumber);
console.log(totalQuestions);
/* nextButton.addEventListener('click', function (event) {
    if (questionNumber < (totalQuestions - 1)) {
        availableQuestions.push(questionsAnswers[questionNumber]);
        questionNumber++;
        getNewQuestion();
    }
})*/

function getNewQuestion() {
    questions.textContent = questionsAnswers[questionNumber].question;
    answerBtn1.textContent = questionsAnswers[questionNumber].choices[0];
    answerBtn2.textContent = questionsAnswers[questionNumber].choices[1];
    answerBtn3.textContent = questionsAnswers[questionNumber].choices[2];
    answerBtn4.textContent = questionsAnswers[questionNumber].choices[3];
}

/*
    called when name of winner is submitted
*/
function winnerName() {
    let initials = document.getElementById('name').value;
    let winner = {
        initials: initials,
        score: currentScore
    }
    scoreArray.push(winner);
    showHighScores();

}

function showHighScores() {
    let scoreContent = '';
    for (i = 0; i < scoreArray.length; i++) {
        scoreContent += scoreArray[i].initials + ': ' + scoreArray[i].score + '<br>';
    }
    let scoreEl = document.querySelector('#highScores .modal-body');
    scoreEl.innerHTML = scoreContent;
    $("#highScores").modal();
}

document.getElementById('highScoreLink').addEventListener('click', showHighScores());

function endGame() {
    alert('Game ended!!!');
    userName.style.display = 'block';
    nameSubmitEl.addEventListener('click', winnerName);
}