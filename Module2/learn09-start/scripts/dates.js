/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
let basicDate = new Date();
document.getElementById("basic").innerHTML = basicDate;


// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
todayDate = new Date(2022, 2, 17);
document.getElementById("today").innerHTML = todayDate;


// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
birthdayDate = new Date("December 16, 1993");
document.getElementById("birthday").innerHTML = birthdayDate;


// Convert your basic date to the ISO string format and display the result
// in the iso paragraph
basicDate = basicDate.toISOString();
document.getElementById("iso").innerHTML = basicDate;


//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
var date1 = new Date("2021-06-03"); //ISO format
document.getElementById("date1").innerHTML = date1 //iso format

var date2 = new Date("06/23/21")
document.getElementById("date2").innerHTML = date2//short format

var date3 = new Date("Jul, 14, 2021")
document.getElementById("date3").innerHTML = date3//long format

//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
document.getElementById("get1").innerHTML = "year: "+date1.getFullYear()
document.getElementById("get2").innerHTML = "month: "+date1.getMonth()
document.getElementById("get3").innerHTML = "day: "+date1.getDay()
document.getElementById("get4").innerHTML = "hours: "+date1.getHours()


// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs
date1.setFullYear(1993);
document.getElementById("set1").innerHTML = date1

date1.setMonth(11)
document.getElementById("set2").innerHTML = date1

date1.setDate(16)
document.getElementById("set3").innerHTML = date1

date1.setHours(11)
document.getElementById("set4").innerHTML = date1