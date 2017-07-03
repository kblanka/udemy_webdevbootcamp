var secretNum = Math.floor((Math.random() * 10) + 1);
var guessNum;

do {
	guessNum = Number(prompt("I guessed a number between 0 and 10. Can you find out which one?"));
	if(guessNum < secretNum) {
		alert("Too low.");
	}
	else if(guessNum > secretNum){
		alert("Too high.");
	}
	else if(guessNum < 0 && guessNum > 10)
		alert("Invalid input. Give me a number between 0 and 10.")
} while (guessNum !== secretNum)
alert("You are right! The number is " + secretNum + "!");
