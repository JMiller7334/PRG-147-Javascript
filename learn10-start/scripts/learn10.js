function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs
    document.getElementById("round").innerHTML = "2.45 rounded is " + Math.round(2.45);
    document.getElementById("ceil").innerHTML = "1.93 ceil is "+ Math.round(1.93);
    document.getElementById("floor").innerHTML = "1.37 floor is "+Math.floor(1.37);
    document.getElementById("trunc").innerHTML = "2.33 trunic is "+Math.trunc(2.33);
    document.getElementById("sign").innerHTML = "-5.3 sign"+Math.sign(-5.3);
    document.getElementById("pow").innerHTML = "10 by power of 3 is "+Math.pow(10, 3);
    document.getElementById("min").innerHTML = "min of 3, 1, 7 is "+Math.min(3, 1, 7);
    document.getElementById("random").innerHTML = "A random number is "+Math.random();

    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph
    document.getElementById("random2").innerHTML = "A random Int: " + Math.floor(Math.random()*50);


    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference
    

    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph
    console.log("Hi console, hello world!")
    let myVar = "15"; //hey look a string!
    if (myVar == 15){// hey look an int!
        console.log("But '15' == 15 really aren't the same, == says they are!");
    }
    if (myVar !== 15){
        console.log(" 15 !==  really aren't the same, !== says they are not!");
    }
    if (myVar === "15"){
        console.log("but '15'==='15' are the same, === says they are!");
    }
    document.getElementById("comparisons").innerHTML = (" == goes thru a type conversion meaning a string of 15 would be the same as a int 15 while === does not. meaning a string of 15 and an int of 15 would not be the same using ===.")



    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
} 