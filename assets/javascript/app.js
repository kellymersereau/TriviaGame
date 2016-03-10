//game counters
var counter = 0;
var correctCounter = 0;
var wrongCounter = 0;

//create questions
//counter is the way we are logging what questions to loop through.  the counter starts at 0 and as each answer is chosen the number is incremented by 1 to get the next question in the question array
console.log("Questions asked: " + counter);

var questions =
[
	{
	//question one
	question: "Finish the lyric from Rocky Horror Picture Show: 'I'm just a sweet _______, from Transexual, Transylvania'",
	choices: ['Transvestite', 'potato', 'little lady', 'alien'],
	answer: 0,
	answerText: "Transvestite",
	image: '<img src="assets/images/rockyhorror.gif"/>',
	},
	{
	//question two
	question: "What is Tyler Durdan's home business called?",
	choices: ['Soap Street Paper Company', 'There is no name', 'Paper Street Soap Company', 'Just Another Soap Company'],
	answer: 2,
	answerText: "Paper Street Soap Company",
	image: '<img src="assets/images/fightclub.gif"/>',
	},
	{
	//question three
	question: "What day of the week do the Plastics wear pink in Mean Girls?",
	choices: ['Monday', 'Friday', 'Wednesday', 'They never wear pink.'],
	answer: 2,
	answerText: "Wednesday", 
	image: '<img src="assets/images/meangirls.gif"/>',
	},
	{
	//question four
	question: "What does Vincent do when Mia overdoses in Pulp Fiction?",
	choices: ['Throws her in the shower', 'Slaps her a few times', 'Yells "NOPE" and walks away', 'Stabs her in the heart with a shot of adrenaline'],
	answer: 3,
	answerText: "Stabs her in the heart with a shot of adrenaline",
	image: '<img src="assets/images/pulpfiction.gif"/>',
	},
	{
	//question five
	question: "What do The Warriors call the leader of their gang?",
	choices: ['War Chief', 'King Swan', 'Mr. President Sir', 'Silly Fool'],
	answer: 0,
	answerText: "War Chief",
	image: '<img src="assets/images/warriors.gif"/>',
	},
	{
	//question six
	question: "What's the name of the convenience store where Dante works in Clerks?",
	choices: ['Quick Chek', 'Quick Stop', 'The Store', 'Quik-E-Mart'],
	answer: 1,
	answerText: "Quick Stop",
	image: '<img src="assets/images/clerks.gif"/>',
	},
];
//creates timer object
var timer =
{
	start: 25,
	reset: function(){
		timer.start = 25
		clearInterval(countDown);
		$('#timer').html('Time Remaining: ' + timer.start + ' seconds');
	},
	run: function()
	{
		countDown = setInterval(timer.increment, 1000);
		// $('#timer').append(counter);
	},
	increment: function()
	{
		timer.start--;
		$('#timer').html('Time Remaining: ' + timer.start + ' seconds');
		if (timer.start === 0) 
		{
			clearInterval(countDown);
		};
	},
	stop: function()
	{
      clearInterval(countDown);
      countDown = setInterval(timer.increment, 1000);
	},
};
//creates the start game function - only used one time after clicking the start button to start off the first question
$('#startGame').click(function(){
    	$('#startGame').hide();
    	createQuestion();
 });

//creates each trivia question & answers
function createQuestion() {
	timer.run();

	// this hides the buttons we aren't using
	$('.continueButton').hide();
	//this shows the buttons we are using
	$('#question').show();
	$('.answerButton').show();

	$('#question').html(questions[counter].question);

	//for loop to get the answers for each question
	for(var i = 0; i < questions[counter].choices.length; i++) {
		$('#answer' + i).html(questions[counter].choices[i]);
	};
};
//creates continue button
var continueButton = {
	buttonText: 'Continue...',
	createButton: function(){
		$('.continueButton').html(continueButton.buttonText);
	},
	buttonClick: $('.continueButton').click(function (){
		$('.rightWrong').hide();
		$('.correctAnswerIs').hide();
		$('.images').hide();
		$('.continueButton').hide();
		timer.stop();
		timer.reset();
	//this stops the createQuestion function when the counter # gets to 6
		if(counter === 6){
			finalPage()
		}else {
			createQuestion()
		};
	}),

};

//creates the onclick function for answers
$('.answerButton').click(function()
{
	$('#question').hide();
 	$('.answerButton').hide();

 	$('.rightWrong').show();
	$('.correctAnswerIs').show();
	$('.images').show();


 	var buttonClickedText = this.textContent;
 	console.log("Answer picked: " + buttonClickedText);

 	timer.stop();

 	if (this.textContent === (questions[counter].answerText)) {
 		correctCounter++;
 		console.log('Number of games won: ' + correctCounter);
 		$('.rightWrong').html("Correct!");
 		$('.images').html(questions[counter].image);
 		counter++;
  		console.log('Questions: ' + counter);
  		$('.continueButton').show();
  		continueButton.createButton();
 	} else {
 		wrongCounter++;
 		console.log('Number of games lost: ' + wrongCounter);
 		$('.rightWrong').html("Wrong answer!");
 		$('.correctAnswerIs').html("The correct answer is: " + questions[counter].answerText);
  		$('.images').html(questions[counter].image);
  		counter++;
  		console.log('Questions: ' + counter);
 		$('.continueButton').show();
  		continueButton.createButton();
 	}
});


//creates the startOver button on the last page
var restartButton = {
	buttonText: 'Start Over!',
	createButton: function(){
		$('#startOver').html(restartButton.buttonText);
	},
	buttonClick: $('#startOver').click(function (){
		timer.stop();
		timer.reset();
		createQuestion();
	}),

};
//creates the final score tally page
function finalPage() {
	$('.answerButton').hide();
	if (correctCounter > 4){
		$('.endTitle').html("YOU GO GLEN COCO!!! ");
		$('#endSubText').html("You're pretty much an expert, keep being awesome.");
	}else if((correctCounter = 3) || (correctCounter = 4)){
		$('.endTitle').html("Not too shabby!");
		$('#endSubText').html("You're not quite an expert, but you have enjoyed decent number of cult classics so you're still pretty cool.");
	}else{
		$('.endTitle').html("VERY DISAPPOINTING!");
		$('#endSubText').html("Come on you're trying to tell me that you actually tried?!")
	};

	$('#rightQuestions').html("You got " + correctCounter + " questions right!");
	$('#wrongQuestions').html("You got " + wrongCounter + " questions wrong!");
	restartButton.createButton();

};

