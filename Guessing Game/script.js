//create secretNumber
var secretNumber = 4;

//ask user for guess
var guess = prompt("Guess a number");

//check if guess is right
if(Number(guess) === secretNumber){
	alert("You got it right!");
}
//otherwise, check if higher
else if(Number(guess) > secretNumber){
	alert("Too high. Guess again!");
}
//otherwise, check if lower
else {
	alert("Too low. Guess again!");
}