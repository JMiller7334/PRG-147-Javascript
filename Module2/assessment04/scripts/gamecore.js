let answer = Math.floor(Math.random()*51);
let guessedNumbers = [];
console.log("answer: "+answer)

document.getElementById("confirm").addEventListener("click", function(event){
    event.preventDefault();

    userNumber = document.getElementById("textbox").value;
    document.getElementById("textbox").value = ""
    dist = Math.abs(userNumber - answer) //convert distance to a positive
    console.log(dist)
    if (userNumber < 0 || userNumber > 50){
        alert("You guesed outside of the answer range which is 1-50.") // alert the user that they are outside of the range
    }

    guessedNumbers.push(userNumber)
    document.getElementById("guessed").innerHTML = "Guessed Numbers: "+guessedNumbers.toString()

    if (userNumber == answer){
        document.getElementById("output").innerHTML = ("You guessed the right number! The answer was "+answer+".")
        document.getElementById("output").style.color = "red";
    } else if (dist < 5){
        document.getElementById("output").innerHTML = ("Your on fire!")
        document.getElementById("output").style.color = "red";
    } else if (dist < 7){
        document.getElementById("output").innerHTML = ("Your hot!")
        document.getElementById("output").style.color = "orange";
    } else if (dist < 13){
        document.getElementById("output").innerHTML = ("Your warm!")
        document.getElementById("output").style.color = "orange";
    } else if (dist < 17){
        document.getElementById("output").innerHTML = ("Your cold!")
        document.getElementById("output").style.color = "blue";
    } else if (dist < 22){
        document.getElementById("output").innerHTML = ("Your freezing!")
        document.getElementById("output").style.color = "cyan";
    } else{
        document.getElementById("output").innerHTML = ("Your very cold, ice cold!")
        document.getElementById("output").style.color = "cyan";
    }
});