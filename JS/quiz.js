
function Quiz(questions){
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
}


/* Initializing the question , choices , correct answer*/
function Question (text,choices,answer){
	this.text = text ;
	this.choices = choices;
	this.answer = answer;		
}

function populate(){
	
	if(quiz.isEnded()){
		
		showScores();
	}
	else{
		//show ques
		
		var element = document.getElementById("question");
		element.innerHTML= quiz.getQuestionIndex().text;
		
		//show img
		document.getElementById("qimg").innerHTML=imglist[count];
		
		//show choices
		var choices = quiz.getQuestionIndex().choices;
		
		for(var i =0 ; i<choices.length; i++){
			var element = document.getElementById("ans"+i);
			element.innerHTML=choices[i]; 
			guess("btn"+i , choices[i]);
		}
		
		showProgress();	
	}
	count++;
}


/* Returns question index*/
Quiz.prototype.getQuestionIndex = function (){
	
	return this.questions[this.questionIndex];
}

/* checks if the questions are over*/
Quiz.prototype.isEnded = function (){
	return this.questions.length === this.questionIndex;
}

/*  function which includes guess function */
/*function where the on click method is defined*/  
function guess(id , guess){
	var button = document.getElementById(id);
	button.onclick = function(){
		userChoice.push(button.innerText);
		quiz.guess(guess);
		populate();
	}
}

/* Compares the correct answer and user's choice, */
/*Increases / reduces score*/
/*  Correct answer = +2 */
/*  Wrong answer = -1 */
Quiz.prototype.guess = function(answer){
	
	if(this.getQuestionIndex().correctAnswer(answer)){
		this.score+=2;
	}else{
		this.score--;
	}
	this.questionIndex++;
}

/*  checks if the correct answer is equal to the user's answer */
Question.prototype.correctAnswer = function(choice){
	return choice === this.answer;
}




var count=0;

/*  List of images - displayed in the right side of the question */
var imglist = ["<img src='images/q1.png' width='240px'>",
"<img src='images/q2.png' width='240px'>",
"<img src='images/q3.jpg' width='240px' border='2px solid black'>",
"<img src='images/q4.png' width='180px'>",
"<img src='images/q5.png' width='240px'>",
"<img src='images/q6.jpg' width='200px' border='2px solid black'>",
"<img src='images/q7.png' width='120px'>",
"<img src='images/q8.png' width='240px'>",
"<img src='images/q9.png' width='240px'>",
"<img src='images/q10.png' width='240px'>"]




/*  List to store user choices*/
var userChoice =[];



/*  Whch shows the current question number*/
/*  ex - Question x of y*/
function showProgress(){
	var currentQuestionNumber = quiz.questionIndex + 1 ;
	var element = document.getElementById("end");
	element.innerHTML = "Question "+ currentQuestionNumber + " of " + quiz.questions.length;

	
}


/*  Displays the score board*/
function showScores(){
	document.getElementById("gri").style.height = "auto";
	
	var gameOverHtml = "<h1>Result</h1>";
	var timeYouTook = 60 - (minutes*60)-seconds;
	minutes = parseInt(timeYouTook/60);
	seconds = parseInt(timeYouTook%60);
	
	gameOverHtml += "<h2 id='score'>Your scores: "+ quiz.score+" / 20" + "</h2>"+"<h2>"+"Time you took : "+minutes+"m  "+(seconds)+"s"+"</h2>";
	var element = document.getElementById("quiz");
	var history="";
	for(var x=0; x<quiz.questions.length;x++){
		
		if(quiz.questions[x].answer == userChoice[x]){
			history += "<div id='correct'>";
		}else{
			history += "<div id='wrong'>";
		}
		
		history += "<br>"+quiz.questions[x].text +"<br><br>";
		history += "CORRECT ANSWER ---> "+ quiz.questions[x].answer+"<br>";
		
		history += ("YOUR ANSWER -->"+userChoice[x]+"<br>");
		
		/*code to display tick and cross*/
		if(quiz.questions[x].answer == userChoice[x]){
			history += "<img src = 'images/correct.gif' width='100px' float='right'>";
		}else{
			history += "<img src = 'images/wrong.gif' width='100px' float='right'>";
		}
		history += "<br><br>";
		history += "</div>"
		
		
	}
	
	element.innerHTML = gameOverHtml+history;
	
	
	
}

/*  List of questions , choices and the correct answer*/
var questions = [
	new Question(" How many monsoon seasons are there in Sri Lanka?",["2","3","4","6"],"2"),
	new Question(" Sri Lankans have traditionally gotten electricity from which form of energy?",["Hydro-powered energy","thermal power ","solar power","wind power"],"Hydro-powered energy"),
	new Question(" In which Sri Lankan province is the famous Temple of the Tooth located?",["Western Province","Nothern Province","Eastern Province","Central Province"],"Central Province"),
	new Question(" Which ocean surrounds Sri Lanka?",["Arabic ocean","Indian ocean","Pacific ocean","Bey of Bengal"],"Indian ocean"),
	new Question(" What is the tallest mountain in Sri Lanka?",["Sri Pada/Adam's Peak","Bible rock","Pidurutalagala","Knuckles"],"Pidurutalagala"),
	new Question(" When did Sri Lanka become independent?",["4 February 1948","2 December 1971"," 30 May 1932","30 June 1942"],"4 February 1948"),
	new Question(" How was Sri Lanka formerly known?",["Burma","Formosa","Ceylon","Nyasaland"],"Ceylon"),
	new Question(" Which of these is a motorised rickshaw popular in Sri Lanka?",["Puk-Puk"," Wuk-Wuk"," Buk-Buk","Tuk-Tuk"],"Tuk-Tuk"),
	new Question(" What is the national game?",["Volleyball","Netball","Cricket","Rugby"],"Volleyball"),
	new Question(" What is the dialing code of Sri Lanka?",["92","94","60","85"],"94")
	
	];

var quiz = new Quiz(questions);

populate();


/*  To calculate the time and the functionality of the TIMER*/
var totalseconds = 60;
var minutes = parseInt(totalseconds/60);
var seconds = parseInt(totalseconds%60);

function checkTime(){
	document.getElementById("timer").innerHTML = 'Time Left :  '+ minutes+'m  '+seconds+'s';
	if (totalseconds <=0){
		alert("Oops.. You ran out of time... ! Click okay to continue to the score board");
		setTimeout('showScores()',1);
	}else{
		totalseconds=totalseconds-1
		minutes = parseInt(totalseconds/60);
		seconds = parseInt(totalseconds%60);
		setTimeout('checkTime()',1000)
	}
}
setTimeout('checkTime()',1000);