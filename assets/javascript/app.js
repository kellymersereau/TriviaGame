//game counters
var counter = 0;
var correctCounter = 0;
var wrongCounter = 0;

//create questions
console.log(counter);

var questions =
[
	{
	//question one
	question: "Finish the lyric from Rocky Horror Picture Show: 'I'm just a sweet _______, from Transexual, Transylvania'",
	choices: ['Transvestite', 'potato', 'little lady', 'alien'],
	answer: 0,
	answerText: 'Transvestite',
	image: '<img src="assets/images/rockyhorror.gif"/>',
	},
	{
	//question two
	question: "What is Tyler Durdan's home business called?",
	choices: ['Soap Street Paper Company', 'There is no name', 'Paper Street Soap Company', 'Just Another Soap Company'],
	answer: 2,
	answerText: 'Paper Street Soap Company',
	image: '<img src="assets/images/fightclub.gif"/>',
	},
	{
	//question three
	question: "What day of the week do the Plastics wear pink in Mean Girls?",
	choices: ['Monday', 'Friday', 'Wednesday', 'They never wear pink.'],
	answer: 2,
	answerText: 'Wednesday', 
	image: '<img src="assets/images/meangirls.gif"/>',
	},
	{
	//question four
	question: "What does Vincent do when Mia overdoses in Pulp Fiction?",
	choices: ['Throws her in the shower', 'Slaps her a few times', 'Yells "NOPE" and walks away', 'Stabs her in the heart with a shot of adrenaline'],
	answer: 3,
	answerText: 'Stabs her in the heart with a shot of adrenaline',
	image: '<img src="assets/images/pulpfiction.gif"/>',
	},
	{
	//question five
	question: "What do The Warriors call the leader of their gang?",
	choices: ['War Chief', 'King Swan', 'Mr. President Sir', 'Silly Fool'],
	answer: 0,
	answerText: 'War Chief', 
	image: '<img src="assets/images/warriors.gif"/>',
	},
	{
	//question six
	question: "What's the name of the convenience store where Dante works in Clerks?",
	choices: ['Quick Chek', 'Quick Stop', 'The Store', 'Quik-E-Mart'],
	answer: 1,
	answerText: 'Quick Stop', 
	image: '<img src="assets/images/clerks.gif"/>',
	},
];
//creates timer object
var timer =
{
	start: 30,
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
	},
};
//creates the start game function
 $("#startGame").click(function()
 {
    $("#startGame").hide();
    createQuestion();
 });

//creates each trivia question & answers
function createQuestion() {
	timer.run();
	console.log(questions[counter].question)
	$('.continueButton').hide();
	$('#question').show();
	$('.answerButton').show();

	$('#question').html(questions[counter].question);

	//for loop here
	for(var i=0; i<questions[counter].choices.length; i++) {
		$('#answer' + i).html(questions[counter].choices[i]);
	};
	// console.log("Questions: " + counter );
	// counter++;
	console.log("Questions: " + counter );

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
		createQuestion();
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


 	var test = $(this).index()
 	console.log(test);

 	timer.stop();

 	if ($(this).index == $('questions[counter].answer').index) {
 		correctCounter++;
 		console.log('Number of games won: ' + correctCounter);
 		$('.rightWrong').html("Correct!");
 		$('.correctAnswerIs').html("The correct answer is: " + questions[counter].answerText);
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

