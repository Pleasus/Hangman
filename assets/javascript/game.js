
// $(document).ready(function() {

// var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
//         'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
//         't', 'u', 'v', 'w', 'x', 'y', 'z'];

// var words = ["voyage", "spock", "bones", "enterprise", "tribbles"];

// var word = "";

// var guess;

// var guesses = [];

// var lives;

// var counter;

// var space;

// var showLives = document.getElementById("livesLeft");

// var x = event.keyCode;

document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded


//Array of characters computer can generate
var characters = ["voyage", "spock", "bones", "chekov", "phaser", "vulcan", "romulan", "stun", "crew"];
var wins = 0;
var word;
var guess = [];
var answer = [];
var countdown = 10;

var currentWord = characters[Math.floor(Math.random() * characters.length)];
var splitCurrentWord = currentWord.split("");   

//taking the ramdom word and assigning and underscore for each letter
for (var i = 0; i < splitCurrentWord.length; i++) {
    answer[i] = "_ ";
    }

//printing the underscore random word to the DOM
word = answer.join(" ");
    document.getElementById("puzzle").innerHTML = word;


    //Computer displaying the guessed letters
    document.onkeyup = function(event) {

        //event.key is the key pressed
        var letter = event.key;
        var guessedLetter = splitCurrentWord.indexOf(letter);

        //event.key contains the letters pressed
        //.push means to push it into the array "guess"
      	guess.push(event.key);
        document.getElementById("lettersGuessed").innerHTML = guess;
    
        //if the guess is correct, add it to the DOM
        if (currentWord.includes(letter)) {
        answer.splice(guessedLetter, 1, letter);
        document.getElementById("puzzle").innerHTML = answer;
          }

        else {
        countdown--;
        document.getElementById("countdown").innerHTML = "Guesses Remaining " + countdown;
        }

        if (countdown == 0) {
          reset();
          alert("you lost!");
          document.getElementById("images").src = ("assets/images/pain.jpg");
        }

        for (var i = 0; i < answer.length; i++) {
          var n = answer.includes("_ ");
          }
              if (n == false) {
              	alert("You Won This Round!")
                document.getElementById("wins").innerHTML = ("Wins = " + wins++);
                document.getElementById("images").src = ("assets/images/" + currentWord + ".jpg");
                document.getElementById("word").innerHTML = (currentWord);
                reset();
                } 
                    console.log(currentWord);
    }

function reset() {
  guess = [];
  answer = [];
  countdown = 10;
  document.getElementById("lettersGuessed").innerHTML = "";
  document.getElementById("countdown").innerHTML = "Guesses Remaining " + countdown;
  document.getElementById("images").src = ("assets/images/prosper.jpg");
  currentWord = characters[Math.floor(Math.random() * characters.length)];
  splitCurrentWord = currentWord.split("");    
  for (var i = 0; i < splitCurrentWord.length; i++) {
    answer[i] = "_ ";
    }
  word = answer.join(" ");
    document.getElementById("puzzle").innerHTML = word;
    console.log(word);
    console.log(currentWord);
}

document.getElementById("reset").onclick = reset;

});