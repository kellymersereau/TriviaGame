//game counters
var counter = 0;
var correctCounter = 0;
var wrongCounter = 0;

//create questions
var questions =
[
	{
	//question one
	question: "Finish the lyric from Rocky Horror Picture Show: 'I'm just a sweet _______, from Transexual, Transylvania'",
	choices: ['Transvestite', 'potato', 'little lady', 'alien'],
	answer: choices[0],
	image: '<img src="assets/images/rockyhorror.gif"/>',
	},
	{
	//question two
	question: "What is Tyler Durdan's home business called?",
	choices: ['Soap Street Paper Company', 'There is no name', 'Paper Street Soap Company', 'Just Another Soap Company'],
	answer: choices[2],
	image: '<img src="assets/images/fightclub.gif"/>',
	},
	{
	//question three
	question: "What day of the week do the Plastics wear pink in Mean Girls?",
	choices: ['Monday', 'Friday', 'Wednesday', 'They never wear pink.'],
	answer: choices[2],
	image: '<img src="assets/images/meangirls.gif"/>',
	},
	{
	//question four
	question: "What does Vincent do when Mia overdoses in Pulp Fiction?",
	choices: ['Throws her in the shower', 'Slaps her a few times', 'Yells "NOPE" and walks away', 'Stabs her in the heart with a shot of adrenaline'],
	answer: choices[3],
	image: '<img src="assets/images/pulpfiction.gif"/>',
	},
	{
	//question five
	question: "What do The Warriors call the leader of their gang?",
	choices: ['War Chief', 'King Swan', 'Mr. President Sir', 'Silly Fool'],
	answer: choices[0],
	image: '<img src="assets/images/warriors.gif"/>',
	},
	{
	//question six
	question: "What's the name of the convenience store where Dante works in Clerks?",
	choices: ['Quick Chek', 'Quick Stop', 'The Store', 'Quik-E-Mart'],
	answer: choices[1],
	image: '<img src="assets/images/clerks.gif"/>',
	},
];
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
	},
};
//creates the start game function
 $("#startGame").click(function()
 {
    $("#startGame").hide();
    questionOne.createQuestion();
 });

//creates each trivia question & answers
var createGame = function()
{
	timer.run();
	for(var i=0; i<4; i++);
	{
		$('#question').append(questions[i].question);
		$('#answerOne').append(questions[i].choices[0]);
		$('#answerTwo').append(questions[i].choices[1]);
		$('#answerThree').append(questions[i].choices[2]);
		$('#answerFour').append(questions[i].choices[3]);
};

//creates the onclick function for answers
$('#answerOne').click(function()
{
	$('#question').hide();
 	$('#answerOne').hide();
 	$('#answerTwo').hide();
 	$('#answerThree').hide();
 	$('#answerFour').hide();
 	timer.stop();
 	counter++;
 	console.log("Questions completed: " + counter );
})
