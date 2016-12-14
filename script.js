// Then initiates the function for capturing key clicks.
document.onkeyup = function(event) {
    letterGuessed = String.fromCharCode(event.keyCode).toLowerCase(); // converts all key clicks to lowercase lettesr

    console.log(letterGuessed); // check the console to make sure we are getting what we want from the function

    checkLetters(letterGuessed); // pass our guessed key into the checkLetters function

};

// Array of Word Options (all lowercase)
var wordsList   = ["jquery", "angular", "react", "ember", "node"];
var chosenWord  = ""; // solution will be held here.
var lettersInChosenWord = []; // This will break the solution into individual letters to be stored in array

chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)]; // solution is chosen randomly from wordList

console.log(chosenWord);

lettersInChosenWord = chosenWord.split(""); // the word is broken into individual letters


function checkLetters(letter) {
    // Check if a letter exists inside the array at all.
    for (var i=0; i<lettersInChosenWord.length; i++) {
        if(lettersInChosenWord[i] == letter) {
            console.log(true); // if the letter exists then return true. This will be used in a later step.
        }
    }
}
