//Select all the elements from HTML which will be used in JS

const start = document.getElementById("start");
const quiz = document.getElementById("quiz-container");
const question = document.getElementById("question");
const choiceA = document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");
const choiceC = document.getElementById("choiceC");
const choiceD = document.getElementById("choiceD");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("time-gauge");
const resultCont = document.getElementById("result-container");

//Quiz questions 

let questions = [

    {
    	question : "In which year was Barley's Snack established?",
      	choiceA : "2017",
      	choiceB : "2018",
      	choiceC : "2019",
      	choiceD : "2020",
      	correct : "choiceD"
    },

    {
    	question : "What is the main product of Barley's Snack?",
      	choiceA : "Keripik",
      	choiceB : "Abon",
      	choiceC : "Permen",
      	choiceD : "Kacang",
      	correct : "choiceB"
    },

    {
    	question : "In which town is the main product manufactured?",
      	choiceA : "Bandung",
      	choiceB : "Jakarta",
      	choiceC : "Cianjur",
      	choiceD : "Denpasar",
      	correct : "choiceC"
    },

    {
    	question : "The main product comes in _____ sizes.",
      	choiceA : "1",
      	choiceB : "2",
      	choiceC : "3",
      	choiceD : "4",
      	correct : "choiceB"
    },

    {
    	question : "Which one is the best-seller product?",
      	choiceA : "Abon Sapi Pedas",
      	choiceB : "Abon Ayam Original",
      	choiceC : "Keripik Singkong Pedas",
      	choiceD : "Keripik Singkong Original",
      	correct : "choiceA"
    },

];

const lastQuestionIndex = questions.length - 1;

let currentQuestionIndex = 0;

//Timer Variables
const timePerQuestion = 10; //10 seconds

const gaugeWidth = 300;

let count = 10;

const gaugeTimeUnit = gaugeWidth / timePerQuestion;

let TIMER;

let score = 0;

//Function loadTimer
function loadTimer () {
	if (count >= 0) {
		counter.innerHTML = count;
		timeGauge.style.width = gaugeTimeUnit * count +"px";
		count--;
	} else {
		count = 10;
		if(currentQuestionIndex < lastQuestionIndex) {
			currentQuestionIndex++;
			loadQuestion();
		} else {
			clearInterval(TIMER);
			quiz.style.display = "none";
			showScore();
		}
	}
}


//Loading a question

function loadQuestion(){

    let q = questions[currentQuestionIndex];

    question.innerHTML = "<p>"+ q.question +"</p>";

    choiceA.innerHTML = q.choiceA;

    choiceB.innerHTML = q.choiceB;

    choiceC.innerHTML = q.choiceC;

    choiceD.innerHTML = q.choiceD;

}



//Function to check answer

function checkAnswer (answer) {

	if( questions[currentQuestionIndex].correct == answer ) score++;
	
	if( currentQuestionIndex < lastQuestionIndex) {
		count = 10;
		currentQuestionIndex++;
		loadQuestion();
	} else {
		clearInterval(TIMER);
		quiz.style.display = "none";
		showScore();
	}

}


//Function to show result
function showScore () {
	resultCont.style.display = "block";
	if (score >= 5) score == 5;
	let result = (score == 5) ? "Congratulations, you win the voucher!" : "You failed to win the voucher. Try again next time!";
	let img = (score == 5) ? "<img src='assets/voucher.png'>" : "";
	resultCont.innerHTML = "<h2>" + result + "</h2>" + img + "<h3>Result: </h3><h3>You answered " + score +" out of 5 answers correctly</h3>";
}


//Adding Click EventListener to start constant
start.addEventListener("click",startQuiz);



//Function to start quiz
function startQuiz () {
	start.style.display = "none";

	loadQuestion();

	quiz.style.display = "block";

	loadTimer();

	//Declaring TIMER variable to call function setInterval which calls loadTimer function every 1000ms or 1s
	TIMER = setInterval (loadTimer, 1000);
}
