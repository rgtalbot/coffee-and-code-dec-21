// Then initiates the function for capturing key clicks.
document.onkeyup = function(event) {
    letterGuessed = String.fromCharCode(event.keyCode).toLowerCase(); // converts all key clicks to lowercase lettesr

    console.log(letterGuessed); // check the console to make sure we are getting what we want from the function

};