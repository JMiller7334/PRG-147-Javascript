/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/
const movieArray = ["Supernatural", "Arrow", "Cobra Kai", "Violet Evergarden", "Outer Banks"];
document.getElementById("list").innerHTML = "Shows:";
for (const x of movieArray){
    document.getElementById("list").innerHTML += "<br>"+x;
}

/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)
*/
let songSet = new Set(["Made of Armour", "Ocean", "Bad at Love", "The Verdict", "Bloodflowers"]);
document.getElementById("set1").innerHTML = "Song Titles";
for (let i of songSet){
    document.getElementById("set1").innerHTML += "<br>"+i;
}
// add two more songs to the set then display in the set2 paragraph
songSet.add("She is")
songSet.add("Hesitate")

/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/
emailMap = new Map([
    ["jacob", "jmiller7334@students.mchenry.edu"],
    ["person1", "example1@email.com"],
    ["person2", "example2@email.com"],
    ["person3", "example3@email.com"],
    ["person4", "exmpale4@email.com"]
])

emailMap.forEach (function(value, key) {
  document.getElementById("map1").innerHTML += key + ": " + value+"<br>";
})
// add two new names and emails and display in map2 use the forEach() method
emailMap.set("person5", "example5@email.com");
emailMap.set("person6", "example6@email.com");
emailMap.forEach (function(value, key) {
    document.getElementById("map2").innerHTML += key + ": " + value + "<br>";
  })
// get and display the email of one person, display in map3
document.getElementById("map3").innerHTML = emailMap.get("jacob")