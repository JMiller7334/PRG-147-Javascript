// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
var name1 = "Meri";

var taxRate = .07; // changed to variable since this rate is modified.
// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {

    //fix the errors
    var firstName = "Meredith",
        lastName = "Engel";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Doctor";
    var name = "Beba";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    //fix the errors
    const firstName = "Jacob"
    const name = "Jake"
    let taxRate = .07;

    document.getElementById("global").innerHTML = name;
    document.getElementById("local").innerHTML = firstName; //corrected innerHTML spelling
    document.getElementById("tax").innerHTML = taxRate;
    taxRate = .08; // declared non-const
    document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
    // Fix the errors
    const dog1 = "Ollie"; //not redeclared
    const dog2 = "Nessie"; //not redeclared
    //var dog2 = "Nessie";

    let dog3 = "Paisley"; //to be redeclared
    //dog2;

    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;

    dog3 = "Doge"; //redeclared
    document.getElementById("dog1-2").innerHTML = dog3;
}

function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    const newDogs = ["Ollie Bear", "Bob the cat"];
    const dogBreeds = ["Shepherd", "Collie", "Bouvier"];

    document.getElementById("pi").innerHTML = PI;
    document.getElementById("doggos").innerHTML = dogs;
    document.getElementById("new-doggos").innerHTML = newDogs
    document.getElementById("breeds").innerHTML = dogBreeds
}


function myMath() {
    // create statements demonstrating the use of each operator
    const add = 1+1;
    document.getElementById("addition").innerHTML = "1+1=" + add;
    const subtract = 4-2;
    document.getElementById("subtraction").innerHTML = "4-2=" + subtract;
    const multiply = 5*2;
    document.getElementById("multiplication").innerHTML = "5x2=" + multiply;
    const expon = 3**3;
    document.getElementById("exponent").innerHTML = "3 by the power of 3 =" + expon;
    const divide = 15/3;
    document.getElementById("division").innerHTML = "15/3=" + divide;
    const remainder = 30%16;
    document.getElementById("modulus").innerHTML = "remainder: 30 % 16 =" + remainder;

    let myNum = 3
    const increase = ++myNum
    document.getElementById("increment").innerHTML = "increment "+myNum+" = " + increase

    const decrease = --myNum
    document.getElementById("decrement").innerHTML = "decrement "+myNum+" = " + decrease
}

function assignments() {
    // create statements demonstrating the use of each assignment type
    let x = 10
    document.getElementById("equals").innerHTML = "x = 10" + "x = " + x;

    x = x+=1;
    document.getElementById("plus-equals").innerHTML = "x += 1" + "x = " + x;

    x = x-=1;
    document.getElementById("minus-equals").innerHTML = "x -=1 x = " + x;

    x = x*=2;
    document.getElementById("times-equals").innerHTML = "x *=2 x=" + x;

    x = x/=2;
    document.getElementById("divide-equals").innerHTML = "x /=2 x=" + x;

    x = x%=2;
    document.getElementById("modulus-equals").innerHTML = "x %=2 x=" + x;
}

function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const languages = ["Lua", "Python", "Kotlin", "HTML", "Swift", "Javascript"]
    document.getElementById("array").innerHTML = languages

    const rollercoaster = {type: "arrow", inversions: "7", topSpeed: "65mph", height: "170ft"}; //Object or class
    document.getElementById("object").innerHTML = "roller coaster stats: type:" + rollercoaster.type +" inversions:"+ rollercoaster.inversions +" top speed:"+
     rollercoaster.topSpeed +" height:"+ rollercoaster.height

}