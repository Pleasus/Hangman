
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

var characters = ["voyage", "spock", "bones", "chekov", "phaser", "vulcan", "romulan", "stun", "crew"];
var wins = 0;
var word;
var guess = [];
var answer = [];
var countdown = 10;

var currentWord = characters[Math.floor(Math.random() * characters.length)];
var splitCurrentWord = currentWord.split("");   

var winAudio = new Audio("assets/sounds/stars.mp3");
var loseAudio = new Audio("assets/sounds/lose.mp3");

for (var i = 0; i < splitCurrentWord.length; i++) {
    answer[i] = "_ ";
    }

word = answer.join(" ");
    document.getElementById("puzzle").innerHTML = word;



    document.onkeyup = function(event) {

        
        var letter = event.key;
        var guessedLetter = splitCurrentWord.indexOf(letter);

      	guess.push(event.key);
        document.getElementById("lettersGuessed").innerHTML = guess;
    
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
          document.getElementById("images").src = ("assets/images/pain.jpg");
          loseAudio.play();
          alert("you lost!");       
        }

        for (var i = 0; i < answer.length; i++) {
          var n = answer.includes("_ ");
          }
              if (n == false) {
              	winAudio.play();
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