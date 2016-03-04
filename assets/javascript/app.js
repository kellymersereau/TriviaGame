//Global Variables

//game counters
var counter = 0;
var correctCounter = 0;
var wrongCounter = 0;

//creates questions objects
var createQuestions = 
{
	questionOne: function()
	{
		var one = "who is that cat?"
		$('#question').append(one);
		timer.run();
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
};
//creates answers object
var createAnswers =
{
	oneCorrectOne: function()
	{
		var one = "Charlie";
		$('#answerOne').append(one);
	}
}
//start game function
 $("#startGame").click(function()
 {
    $("#startGame").hide();
    createQuestions.questionOne();
    createAnswers.oneCorrectOne();
 });

 //answer button function
 $(".answerButton").click(function()
 {
 	$(".answerButton").hide();
 	$("#question").hide();
 })
