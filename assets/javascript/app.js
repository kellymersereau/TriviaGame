//Global Variables
var questions = ["Finish the lyric from Rocky Horror Picture Show: 'I'm just a sweet _______, from Transexual, Transylvania'", "What is Tyler Durdan's home business called?", "What day of the week do the Plastics wear pink in Mean Girls?", "What does Vincent do when Mia overdoses in Pulp Fiction?", "What do The Warriors call the leader of their gang?", "What's the name of the convenience store where Dante works in Clerks?"];

//game counters
var counter = 0;
var correctCounter = 0;
var wrongCounter = 0;

//creates questions objects
var questionOne = 
{
	question: "Finish the lyric from Rocky Horror Picture Show: 'I'm just a sweet _______, from Transexual, Transylvania'",
	correctAnswer: "transvestite",
	choiceOne: "alien",
	choiceTwo: "little lady",
	choiceThree: "potato",
	createQuestion: function()
	{
		timer.run();
		$('#question').append(questionOne.question);
		$('#answerOne').append(questionOne.choiceThree);
		$('#answerTwo').append(questionOne.choiceTwo);
		$('#answerThree').append(questionOne.choiceOne);
		$('#answerFour').append(questionOne.correctAnswer);
	},
	image: '<img src="#">',
	correctAnswerClick:  $('#answerFour').click(function()
	{
		$('#question').hide();
 		$('#answerOne').hide();
 		$('#answerTwo').hide();
 		$('#answerThree').hide();
 		$('#answerFour').hide();
 		timer.stop();
		correctCounter+1;
		counter+1;
 		console.log(correctCounter);
 		$('.rightWrong').append("Correct!");
 		$('.correctAnswerIs').append("I'm just a sweet TRANSVESTITE from Transexual, Transylvania!");
 		$('.images').append(questionOne.image);

	}),
	otherAnswerClick:  $('#answerOne' || '#answerTwo' || '#answerThree').click(function()
	{
		$('#question').hide();
 		$('#answerOne','#answerTwo','#answerThree', '#answerFour').hide();
 		timer.stop();
		wrongCounter+1;
		counter+1;
 		console.log(wrongCounter);
 		$('.rightWrong').append("Wrong!");
 		$('.correctAnswerIs').append("The correct answer is: 'I'm just a sweet TRANSVESTITE from Transexual, Transylvania!'");
 		$('.images').append(questionOne.image);

	}),
};
var questionTwo = 
{
	question: "What is Tyler Durdan's home business called?",
	correctAnswer: "Paper Street Soap Company",
	choiceOne: "Soap Street Paper Company",
	choiceTwo: "There is no name",
	choiceThree: "Just Another Soap Company",
	createQuestion: function()
	{
		timer.run();
		$('#question').append(questionTwo.question);
		$('#answerOne').append(questionTwo.choiceThree);
		$('#answerTwo').append(questionTwo.choiceTwo);
		$('#answerThree').append(questionTwo.choiceOne);
		$('#answerFour').append(questionTwo.correctAnswer);
	}
};
var questionThree = 
{
	question: "What day of the week do the Plastics wear pink in Mean Girls?",
	correctAnswer: "Wednesday",
	choiceOne: "Friday",
	choiceTwo: "Tuesday",
	choiceThree: "They never wear pink",
	createQuestion: function()
	{
		timer.run();
		$('#question').append(questionThree.question);
		$('#answerOne').append(questionThree.choiceThree);
		$('#answerTwo').append(questionThree.choiceTwo);
		$('#answerThree').append(questionThree.choiceOne);
		$('#answerFour').append(questionThree.correctAnswer);
	}
};
var questionFour = 
{
	question: "What does Vincent do when Mia overdoses in Pulp Fiction?",
	correctAnswer: "Stabs her in the heart with a shot of Adrenaline",
	choiceOne: "Throws her in the shower",
	choiceTwo: "Slaps her a few times",
	choiceThree: "Yells 'NOPE' and walks away",
	createQuestion: function()
	{
		timer.run();
		$('#question').append(questionFour.question);
		$('#answerOne').append(questionFour.choiceThree);
		$('#answerTwo').append(questionFour.choiceTwo);
		$('#answerThree').append(questionFour.choiceOne);
		$('#answerFour').append(questionFour.correctAnswer);
	}
};
var questionFive = 
{
	question: "What do The Warriors call the leader of their gang?",
	correctAnswer: "War Chief",
	choiceOne: "King of War",
	choiceTwo: "Mr. President Sir",
	choiceThree: "Silly Fool",
	createQuestion: function()
	{
		timer.run();
		$('#question').append(questionFive.question);
		$('#answerOne').append(questionFive.choiceThree);
		$('#answerTwo').append(questionFive.choiceTwo);
		$('#answerThree').append(questionFive.choiceOne);
		$('#answerFour').append(questionFive.correctAnswer);
	}
};
var questionSix = 
{
	question: "What's the name of the convenience store where Dante works in Clerks?",
	correctAnswer: "Quick Stop",
	choiceOne: "Quick Chek",
	choiceTwo: "The Store",
	choiceThree: "Quik-E-Mart",
	createQuestion: function()
	{
		timer.run();
		$('#question').append(questionSix.question);
		$('#answerOne').append(questionSix.choiceThree);
		$('#answerTwo').append(questionSix.choiceTwo);
		$('#answerThree').append(questionSix.choiceOne);
		$('#answerFour').append(questionSix.correctAnswer);
	}
};
//creates timer object
var timer =
{
	start: 30,
	run: function()
	{
		counter = setInterval(timer.increment, 1000);
		// $('#timer').append(counter);
	},
	increment: function()
	{
		timer.start--;
		$('#timer').html('Time Remaining: ' + timer.start + ' seconds');
		if (timer.start === 0) 
		{
			clearInterval(counter);
		};
	},
	stop: function()
	{
      clearInterval(counter);
	}
};

//start game function
 $("#startGame").click(function()
 {
    $("#startGame").hide();
    questionOne.createQuestion();
 });


