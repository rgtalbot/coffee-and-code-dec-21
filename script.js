// Then initiates the function for capturing key clicks.
document.onkeyup = function (event) {
    letterGuessed = String.fromCharCode(event.keyCode).toLowerCase(); // converts all key clicks to lowercase lettesr

    console.log(letterGuessed); // check the console to make sure we are getting what we want from the function

    checkLetters(letterGuessed); // pass our guessed key into the checkLetters function

};

// Array of Word Options (all lowercase)
var wordsList = ["jquery", "angular", "react", "ember", "node"];
var chosenWord = ""; // solution will be held here.
var lettersInChosenWord = []; // This will break the solution into individual letters to be stored in array
var blanks = []; // Holds a mix of blank and solved letters (ex: 'n, _ _, n, _')
var wrong = []; // Holds all of the wrong guesses


//Counters
var numGuesses = 9;


chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)]; // solution is chosen randomly from wordList

console.log(chosenWord);

lettersInChosenWord = chosenWord.split(""); // the word is broken into individual letters

for (var i = 0; i < lettersInChosenWord.length; i++) {
    blanks.push('_');
}

document.getElementById('wordblanks').innerHTML = blanks.join(' ');

document.getElementById('guessesLeft').innerHTML = numGuesses;

document.getElementById('wrongGuesses').innerHTML = wrong;


function checkLetters(letter) {

    var letterInWord = false; //we will use this boolean to break up nesting

    // Check if a letter exists inside the array at all.
    for (var i = 0; i < lettersInChosenWord.length; i++) {
        if (lettersInChosenWord[i] == letter) {
            letterInWord = true; // if the letter exists then return true. This will be used in a later step.
        }
    }

    //if the letter exists in the word, can also be written as if(letterInWord)
    if (letterInWord === true) {
        for (var i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] == letter) {
                blanks[i] = letter;
            }
        }
        console.log(blanks);

    } else {
        wrong.push(letter);
        numGuesses--;
    }

    nextRound();
}


function nextRound() {
    document.getElementById('wordblanks').innerHTML = blanks.join(' ');

    document.getElementById('guessesLeft').innerHTML = numGuesses;

    document.getElementById('wrongGuesses').innerHTML = wrong;
}

