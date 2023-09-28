const quizData = [
    {
        question: "What is the capital of India?",
        options: ["Haryana", "Delhi", "Hyderabad", "Bhopal"],
        correct: 1
    },
    {
        question: "When is the Indian Independence day?",
        options: ["1947", "1949", "1800", "1950"],
        correct: 0
    },
    {
        question: "Who is known as the father of India?",
        options: ["Mahatma Gandhi", "Sardar Patel", "Narendra Modi", "Amit Shah"],
        correct: 0
    },

]

var score = 0;
var quesNum = 0;
function load_question(){
    var currQuestion = quizData[quesNum];
    var questionDiv = document.getElementById("question");
    
    var q = currQuestion.options;
    questionDiv.innerHTML = `
    <p>${currQuestion.question}</p>
    <form>
    <input type="radio" id="option0" name="options" value="${q[0]}">${q[0]}<br>
        <input type="radio" id="option1" name ="options" value="${q[1]}">${q[1]}<br>
        <input type="radio" id="option2" name ="options" value="${q[2]}">${q[2]}<br>
        <input type="radio" id="option3" name ="options" value="${q[3]}">${q[3]}<br>
    </form>
    `;
}

var optionChosen = false;
function goToNextQuestion(){
    updateScore();
    console.log(score + " " + optionChosen);

    if(optionChosen){
        quesNum++;
        if(quesNum > quizData.length-1){
            displayScore();
            var nextQuestion = document.getElementById("button");
            nextQuestion.onclick = "";
            return;
        }
        load_question();
        optionChosen = true;
    }else{

        console.log("cannot load next question");
    }
    
}


function reloadPage(){
    location.reload();
}

function displayScore(){
    var questionDiv = document.getElementById("question");

    questionDiv.innerHTML = `
    <p>Your Score: ${score}</p>
    `;

    var buttonDiv = document.getElementById("button");
    console.log(buttonDiv);

    buttonDiv.innerHTML = `
    <p onclick = "reloadPage()"> Try Again </p>
    `;
    console.log(buttonDiv.onclick);
}



function updateScore(){
    var op = document.getElementsByTagName("input");
    for(var i = 0; i < op.length; i++){
        if(op[i].checked){
            var currQ = quizData[quesNum];
            if(currQ.options.indexOf(op[i].value) === currQ.correct){
                score++;
            }
            optionChosen = true;
        }
    }
}

load_question();
var nextQuestion = document.getElementById("button");
nextQuestion.onclick = goToNextQuestion;