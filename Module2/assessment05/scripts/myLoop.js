class month {
    constructor(name, holidays) {
      this.name = name;
      this.holidays = holidays;
    }
}

let jan =  new month("January", ["New Years Day", "Martin Luther King Jr. Day"])
let feb = new month("February", ["Ground Hog Day", "Valentine's Day"])
let mar = new month("March", ["Saint Patrick's Day", "Day Light Savings", "Marty Gros"])
let apr = new month("April", ["April", "April Fools Day", "Easter"])
let may = new month("May", ["Mothers Day", "Memorial Day"])
let jun = new month("June", ["Flag Day", "Fathers Day", "Global Running Day"])
let jul = new month("July", ["Independance Day", "Parents Day"])
let aug = new month("August", ["Cheap Flight Day", "National Waffle Day"])
let sep = new month("September", ["Labour Day", "Citizenship Day"])
let oct = new month("October", ["Sweetest Day", "Holloween"])
let nov = new month("November", ["Thanksgiving", "Black Friday"])
let dec = new month("December",["Christmas", "New Years Eve"])

const fullYear = [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]
let count = 0
for (i in fullYear) {
    count ++
    //document.getElementById(count+"month").innerHTML = fullYear[i].name;
   //document.getElementById(count+"day").innerHTML = fullYear[i].holidays

    // switch statment exercise
    switch(count){
        case 1:
            document.getElementById(count+"month").innerHTML = fullYear[i].name;
            document.getElementById(count+"day").innerHTML = fullYear[i].holidays.toString();
        break;
        case 2:
            document.getElementById(count+"month").innerHTML = fullYear[i].name;
            document.getElementById(count+"day").innerHTML = fullYear[i].holidays;
        break;
        case 3:
            document.getElementById(count+"month").innerHTML = fullYear[i].name;
            document.getElementById(count+"day").innerHTML = fullYear[i].holidays;
        break;
        case 4:
            document.getElementById(count+"month").innerHTML = fullYear[i].name;
            document.getElementById(count+"day").innerHTML = fullYear[i].holidays;
        break;
        case 5:
            document.getElementById(count+"month").innerHTML = fullYear[i].name;
            document.getElementById(count+"day").innerHTML = fullYear[i].holidays;
        break;
        case 6:
            document.getElementById(count+"month").innerHTML = fullYear[i].name;
            document.getElementById(count+"day").innerHTML = fullYear[i].holidays;
        break;
        case 7:
            document.getElementById(count+"month").innerHTML = fullYear[i].name;
            document.getElementById(count+"day").innerHTML = fullYear[i].holidays;
        break;
        case 8:
            document.getElementById(count+"month").innerHTML = fullYear[i].name;
            document.getElementById(count+"day").innerHTML = fullYear[i].holidays;
        break;
        case 9:
            document.getElementById(count+"month").innerHTML = fullYear[i].name;
            document.getElementById(count+"day").innerHTML = fullYear[i].holidays;
        break;
        case 10:
            document.getElementById(count+"month").innerHTML = fullYear[i].name;
            document.getElementById(count+"day").innerHTML = fullYear[i].holidays;
        break;
        case 11:
            document.getElementById(count+"month").innerHTML = fullYear[i].name;
            document.getElementById(count+"day").innerHTML = fullYear[i].holidays;
        break;
        case 12:
            document.getElementById(count+"month").innerHTML = fullYear[i].name;
            document.getElementById(count+"day").innerHTML = fullYear[i].holidays;
        break;

    }
        
}



