
$(document).ready(function() {

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

var words = ["voyage", "spock", "bones", "enterprise", "tribbles"];

var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];


for (var i = 0; i < letters.length; i++) {
	var letterBtn = $("<button>");
	letterBtn.addClass( "letter-button letter letter-button-color" );
	letterBtn.attr("data-letter", letters[i]);
	letterBtn.text(letters[i]);
	$("#buttons").append(letterBtn);
}

});