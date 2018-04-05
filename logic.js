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

	chosenword = fruitList[Math.floor(Math.random() * fruitList.length)];

	letterInChosenword = chosenword.split("");

	numBlanks = letterInChosenword.length;

	console.log(chosenword);


	blanksAndSuccesses = [];

	wrongGuesses = [];
	for (var i = 0; i < numBlanks; i++) {
		blanksAndSuccesses.push("_")
	}
	console.log(blanksAndSuccesses);

	document.getElementById("guess-left").innerhtml = numGuess;

	document.getElementById("word-blanks").innerhtml = blanksAndSuccesses.join(" ");

	document.getElementById("wrong-guesses").innerhtml = wrongGuesses.join(" ");

}	

function checkLetters(letter) {
	var letterInWord = false;

	for (var i=0; i < numBlanks; i++) {
		if (chosenword[i] === letter) {
			letterInWord = true;
		}
	}
	

	if (letterInWord) {
		for (var j=0; j < numBlanks; j++) {
			if (chosenword[j] === letter) {
				blanksAndSuccesses[j] = letter; 
			}
		}
		console.log(blanksAndSuccesses)
	}
	else {
		wrongGuesses.push(letter);
		numGuess--;
	}

}


function roundComplete() {
	console.log("winCount: " + winCouter + " | losscount: " + losscounter +
	 	" | NumGuess: " + numGuess);

	document.getElementById("guess-left").innerhtml = numGuess
	document.getElementById("word-blanks").innerhtml = blanksAndSuccesses.join(" ");
	document.getElementById("wrong-guesses").innerhtml = wrongGuesses.join(" ");


	if (letterInChosenword.tostring() === blanksAndSuccesses.tostring()) {
		winCouter++;
		alert("you win");

		document.getElementById("win-counter").innerhtml + winCounter;

		startGame();
	}
	else if (numGuess === 0) {
		lossCounter++;
		alert("You Lose");

		document.getElementById("loss-counter").innerhtml = lossCounter;

		startGame();
	}

}

startGame();

document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();

};














document.onkeyup = function(event) {
	var letterGuessed = string.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();
};







