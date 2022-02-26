// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html.


let lyric = "99 bottles of beer on the wall, take one down pass it around 99 bottle of beer <br>";
for (let beerCount = 99; beerCount > -1; beerCount--) {
    document.getElementById("beer").innerHTML = lyric;
    lyric = lyric +  beerCount+" bottles of beer on the wall, take one down pass it around. "+ (beerCount-1) +" bottle of beer <br>";
  }

//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph
let monthArray = ["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let myText = ""
for (i in monthArray) {
    myText = myText + monthArray[i]+" ";
    document.getElementById("for-in").innerHTML = myText;
}

// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph

myString = "Lua is awesome and so is Javascript!";

let newText = "";
for (let x of myString) {
newText += x;
document.getElementById("for-of").innerHTML = newText;
}

// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph
let myNum = 50
let breakPoint = 10
while(myNum > 0 ){
    breakPoint --
    if (breakPoint < 1){
        document.getElementById("while").innerHTML += myNum+(", <br>")
        breakPoint = 10
    } else{
        document.getElementById("while").innerHTML += myNum+(",")
    }
    myNum --
}

