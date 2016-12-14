// Then initiates the function for capturing key clicks.
document.onkeyup = function(event) {
    letterGuessed = String.fromCharCode(event.keyCode).toLowerCase(); // converts all key clicks to lowercase lettesr

    console.log(letterGuessed); // check the console to make sure we are getting what we want from the function

};

// Array of Word Options (all lowercase)
var wordsList   = ["jquery", "angular", "react", "ember", "node"];
var chosenWord  = ""; // solution will be held here.

chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)]; // solution is chosen randomly from wordList

console.log(chosenWord);