//Global Variables
var questions = ['Question One', 'Question 2', 'Question 3', 'Question 4', 'Question 5', 'Question 6'];
var answersOne = ['answer 1', 'answer 2', 'answer 3', 'answer 4', 'answer 5', 'answer 6'];
var answersTwo = ['answer 1', 'answer 2', 'answer 3', 'answer 4', 'answer 5', 'answer 6'];
var answersThree = ['answer 1', 'answer 2', 'answer 3', 'answer 4', 'answer 5', 'answer 6'];
var answersFour = ['answer 1', 'answer 2', 'answer 3', 'answer 4', 'answer 5', 'answer 6'];
var correctAnswers = ['correct1', 'correct2', 'correct3', 'correct4', 'correct5', 'correct6'];

//game counters
var counter = 0;
var correctCounter = 0;
var wrongCounter = 0;

//creates questions objects
var createQuestions = 
{
	questionOne: function()
	{
		questions[0];
		$('#question').append(questions[0]);
		timer.run();
	},
	questionTwo: function()
	{
		questions[1];
		$('#question').append(questions[1]);
		timer.run();
	},
	questionThree: function()
	{
		questions[2];
		$('#question').append(questions[2]);
		timer.run();
	},
	questionFour: function()
	{
		questions[3];
		$('#question').append(questions[3]);
		timer.run();
	},
	questionFive: function()
	{
		questions[4];
		$('#question').append(questions[4]);
		timer.run();
	},
	questionSix: function()
	{
		questions[5];
		$('#question').append(questions[5]);
		timer.run();
	},
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
//creates answers object
var answers =
{
	answerOne: function() 
	{
		answersOne[0];
		$('#answerOne').append(answersOne[0]);
		answersOne[1];
		$('#answerTwo').append(answersOne[1]);
		answersOne[2];
		$('#answerThree').append(answersOne[2]);
		answersOne[3];
		$('#answerFour').append(answersOne[3]);

	},
	answerTwo: function() 
	{
		answersTwo[0];
		$('#answerOne').append(answersTwo[0]);
		answersTwo[1];
		$('#answerTwo').append(answersTwo[1]);
		answersTwo[2];
		$('#answerThree').append(answersTwo[2]);
		answersTwo[3];
		$('#answerFour').append(answersTwo[3]);

	},
	answerThree: function() 
	{
		answersThree[0];
		$('#answerOne').append(answersThree[0]);
		answersThree[1];
		$('#answerTwo').append(answersThree[1]);
		answersThree[2];
		$('#answerThree').append(answersThree[2]);
		answersThree[3];
		$('#answerFour').append(answersThree[3]);

	},
	answerFour: function() 
	{
		answersFour[0];
		$('#answerOne').append(answersFour[0]);
		answersFour[1];
		$('#answerTwo').append(answersFour[1]);
		answersFour[2];
		$('#answerThree').append(answersFour[2]);
		answersFour[3];
		$('#answerFour').append(answersFour[3]);

	},
}

//creates answer screen
// var answerScreen =
// {
// 	rightWrong: function()
// 	{
// 		// for (var i=0; i<6; i++){
// 		// 	if ($('.answerButton').html() == correctAnswers[i]) {
// 		// 		$('#rightWrong').text("Correct!")
// 		// 	} else {
// 		// 		$('#rightWrong').text("Wrong!")
// 		// 		$('#correctAnswerIs').text("The correct answer is " + correctAnswers[i]);
// 	// 		}
// 	// 	}
// 	// }
// }
//start game function
 $("#startGame").click(function()
 {
    $("#startGame").hide();
    createQuestions.questionOne();
	answers.answerOne();
 });

 //answer button function
 $(".answerButton").click(function()
 {
 	counter+1;
 	console.log(counter);
	console.log($(this).html());
	for (var i=0; i<6; i++){
		if ($('.answerButton').html() == correctAnswers[i]) 
		{
			$('#rightWrong').append("Correct!")
		} else 
		{
			$('#rightWrong').append("Wrong!")
			$('#correctAnswerIs').append("The correct answer is " + correctAnswers[i]);
		}
	}
 	$('.answerButton').hide();
 	$('#question').hide();
 	timer.stop();
 	// answerScreen.rightWrong();
 })
