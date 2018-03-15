var fruitlist = ['bananas', 'strawberries', 'apples']

var chosenword = '';

var letterInChosenword = [];

var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongGuesses = [];

var letterGuessed = '';


var winCouter = 0;
var losscounter = 0;
var numGuess = 0;









function startGame() {

	numGuess = 9;

	chosenword = fruitList[Math.floor(Math.random() * fruitlist.length)]

	letterInChosenword = chosenword.split('');

	numBlanks = letterInChosenword.length;

	console.log(chosenword);



}

startGame();