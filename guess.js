var count = 1;
var secretNumber = 4;

var stringGuess = prompt("Guess the number : ");
var guess = Number(stringGuess);

do {

      if(guess === secretNumber) {
        alert("You guessed right !");
      }

      else if (guess > secretNumber) {
        alert("Too high, guess again"); 
      }

      else {
        alert ("Too low, guess again");

      }

    } while (guess !== secretNumber);
