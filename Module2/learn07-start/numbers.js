function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Jacob Miller"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
   let myNumber = 1;
   let myString = "2";
   let myAnswer = myString + myNumber;
   document.getElementById("add").innerHTML = ('1 + "2" = '+myAnswer);


    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    myNumber = myNumber + 20;
    document.getElementById("to-string").innerHTML = "string:" + myNumber.toString() + (100).toString();

    // Demonstrate the use of toExponential() and print to the exponent paragraph
    let expNumber = (5).toExponential(2)
    document.getElementById("exponent").innerHTML = expNumber;


    // Demonstrate the use of toFixed() and print to the fixed paragraph
    myNumber = 3.5924;
    document.getElementById("fixed").innerHTML = myNumber.toFixed(3);

    // Demonstrate the use of toPrecision() and print to the precision paragraph
    document.getElementById("precision").innerHTML = myNumber.toPrecision(2);


    // Demonstrate the use of parseFloat() and print to the float paragraph
    myString = "100 dollars";
    document.getElementById("float").innerHTML = parseFloat(myString);


    // Demonstrate the use of parseInt() and print to the int paragraph
    let newString = "2.78 dollars";
    document.getElementById("int").innerHTML = parseInt(newString);


    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
   document.getElementById("equals").innerHTML = "The biggest difference between == and === is that == goes through a type conversion that converts the values to the \
                    same type before performing the comparison. === checks the values without any coversions making it accurate for strict comparisons.";

    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators
    document.getElementById("logic").innerHTML = "&& or AND operater will always be checked by javascript before the || or the OR operater is checked";



    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the switch statement and display results to switch paragrah
    var promptAnswer = window.prompt("say yeah, nope or whatever")
    switch(promptAnswer){
        case "yeah":
            document.getElementById("switch").innerHTML = "yes, you said yeah!";
            break;
        case "nope":
            document.getElementById("switch").innerHTML = "no, you said nope!";
            break;
        default:
            document.getElementById("switch").innerHTML = "okay that's fine.";
            break;
    }
    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
    var saidYes = false;
    promptAnswer === "yeah" ? saidYes = true : saidYes = false;
    if (saidYes == true){
        document.getElementById("ternary").innerHTML = "confirmed the answer was yes.";
    } else {
        document.getElementById("ternary").innerHTML = "confirmed the answer was not yes.";
    }

}