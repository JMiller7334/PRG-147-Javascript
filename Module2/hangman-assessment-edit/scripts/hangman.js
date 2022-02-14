// declare and initialize array
let game = ["MOUNTAIN", "HILL", "WATER", "TREE", "CLOUD", "FLOWER", "BUSH", "LAKE", "SEA", "ISLAND"];
let choice = Math.floor(Math.random() * 10);
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = '';
let userLetter = '';
let guessedLetters = [];
// game setup works fine --steffen
function setup() {
    //alert(answer);
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;
}




// Issue below here
// noticed if we uncomment below it reveals all letter for the hangman


document.getElementById("submit").addEventListener("click", function(event){

    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value;
    document.getElementById("guess").value = ''; //would this reset value to null

    if (guessedLetters.includes(userLetter.toUpperCase()) === false && userLetter.length == 1){
        let foundLetter = false;
        for (let c = 0; c < answer.length; c++) {
            //alert(letters[c]);
            if (userLetter.toUpperCase() == letters[c]) {
                foundLetter = true;
                display[c] = userLetter.toUpperCase();
                win--;
            }
            output = output + display[c] + ' ';
        }
        
        document.getElementById("word").innerHTML = output;
        output = '';
        guessedLetters.push(userLetter.toUpperCase());
        document.getElementById("guessed").innerHTML = "Guessed Letters: "+guessedLetters.toString();

        if (foundLetter === false){
            attemptsLeft--;
        }
        

        if (win < 1) {
            document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
        } else if (attemptsLeft < 1) {
            document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
            document.getElementById("hangman").src = "images/07.png";
            alert("The answer was "+answer)
        } else {
            if (foundLetter === false){
                document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
                document.getElementById("hangman").src = "images/0" +(7-attemptsLeft)+".png";

            }
        }
    } else {
        alert("Invalid entry or you already guessed this letter.")
    }
});


//scirpt connected fine somereason the button and the script are not registering.