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
var wins = 0;
var losses = 0;


function startGame() {
    numGuesses = 9;
    blanks = [];
    wrong = [];

    chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)]; // solution is chosen randomly from wordList

    console.log(chosenWord);

    lettersInChosenWord = chosenWord.split(""); // the word is broken into individual letters

    for (var i = 0; i < lettersInChosenWord.length; i++) {
        blanks.push('_');
    }

    document.getElementById('wordblanks').innerHTML = blanks.join(' ');

    document.getElementById('guessesLeft').innerHTML = numGuesses;

    document.getElementById('wrongGuesses').innerHTML = wrong;
};


function checkLetters(letter) {

    var letterInWord = false; //we will use this boolean to break up nesting

    // Check if a letter exists inside the array at all.
    for (var i = 0; i < lettersInChosenWord.length; i++) {
        if (lettersInChosenWord[i] === letter) {
            letterInWord = true; // if the letter exists then return true. This will be used in a later step.
        }
    }

    //if the letter exists in the word, can also be written as if(letterInWord)
    if (letterInWord === true) {
        for (var i = 0; i < lettersInChosenWord.length; i++) {
            if (lettersInChosenWord[i] === letter) {
                blanks[i] = letter

            }
        }
        console.log(blanks);
    } else if (wrong.indexOf(letter) < 0) {
        numGuesses--;
        wrong.push(letter);
    }


    nextRound();

}

function nextRound() {
    document.getElementById('wordblanks').innerHTML = blanks.join(' ');

    document.getElementById('guessesLeft').innerHTML = numGuesses;

    document.getElementById('wrongGuesses').innerHTML = wrong.join(' ');

    if (numGuesses === 0) {
        losses++;
        alert('You lose');

        document.getElementById('lossCounter').innerHTML = losses;

        startGame();
    } else if(chosenWord === blanks.join('')) {
        wins++;
        alert('You win');

        document.getElementById('winCounter').innerHTML = wins;

        startGame();
    }

}

startGame();