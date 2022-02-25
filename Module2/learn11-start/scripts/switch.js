function sign(name, day, month){
    let signName = name;
    let signDate = day;
    let signMonth = month;
}

let aries = new sign("Aries", [21, 19], [3,4])
let taurus = new sign("Taurus",[20, 20], [4,5])
let gemini = new sign("Gemini",[21,20], [5,6])
let cancer = new sign("Cancer",[21,22], [7,8])


/*


Aquarius (January 20 – February 18)
Pisces (February 19 – March 20)
*/


function calculate() {
    chi = '';
    zod = '';
    myname = document.getElementById("fname").value;
    month = parseInt(document.getElementById("month").value);
    date = parseInt(document.getElementById("date").value);
    year = parseInt(document.getElementById("year").value);

    if (month == 3 && date >= 21 || month == 4 && date <=19){
        zod = "Aries"
    }else if (month == 4 && date >= 20 || month == 5 && date <=20){
        zod = "Taurus"
    }else if (month == 5 && date >= 21 || month == 6 && date <=20){
        zod = "Gemini"
    }else if (month == 6 && date >= 21 || month == 7 && date <=22){
        zod = "Cancer"
    }else if (month == 7 && date >= 23 || month == 8 && date <=22){
        zod = "Leo"
    }else if (month == 8 && date >= 23 || month == 9 && date <=22){
        zod = "Virgo"
    }else if (month == 9 && date >= 23 || month == 5 && date <=22){
        zod = "Libra"
    }else if (month == 10 && date >= 23 || month == 11 && date <=21){
        zod = "Scorpio"
    }else if (month == 11 && date >= 22 || month == 12 && date <=21){
        zod = "Sagittarius"
    }else if (month == 12 && date >= 22 || month == 1 && date <=19){
        zod = "Capricorn"
    }else if (month == 1 && date >= 20 || month == 2 && date <=18){
        zod = "Aquarius"
    }else if (month == 2 && date >= 19 || month == 3 && date <=20){
        zod = "Pisces"
    }

    switch (year) {
        case 1948:
        case 1960: 
        case 1972:
        case 1984: 
        case 1996: 
        case 2008: 
        case 2020:
            chi = "Rat";
            break;
        case 1949:
        case 1961:
        case 1973:
        case 1985: 
        case 1997: 
        case 2009: 
        case 2021:
            chi = "Ox";
            break;
        case 1950:
        case 1962:
        case 1974:
        case 1986:
        case 1998: 
        case 2010:
        case 2022:
            chi = "Tiger";
            break;
        case 1951:
        case 1963:
        case 1975: 
        case 1987:
        case 1999: 
        case 2011:
        case 2023:
            chi = "Rabbit";
            break;
        case 1952:
        case 1964:
        case 1976:
        case 1988:
        case 2000:
        case 2012:
        case 2024:
            chi = "Dragon";
            break;
        case 1953: 
        case 1965:
        case 1977: 
        case 1989: 
        case 2001: 
        case 2013: 
        case 2025:
            chi = "Snake";
            break;
        case 1954:
        case 1966:
        case 1978:
        case 1990:
        case 2002:
        case 2014:
        case 2026:
            chi = "Horse";
            break;
        case 1955: 
        case 1967:
        case 1979:
        case 1991: 
        case 2003:
        case 2015:
        case 2027:
            chi = "Goat";
            break;
        case 1956:
        case 1968:
        case 1980:
        case 1992:
        case 2004:
        case 2016:
        case 2028:
            chi = "Monkey";
            break;
        case 1957:
        case 1969:
        case 1981:
        case 1993:
        case 2005:
        case 2017:
        case 2029:
            chi = "Rootster";
            break;
        case 1958:
        case 1970:
        case 1982:
        case 1994:
        case 2006:
        case 2018:
        case 2030:
            chi = "Dog";
            break;
        case 1959: 
        case 1971:
        case 1983:
        case 1995:
        case 2007:
        case 2019:
        case 2031:
            chi = "Pig";
            break;
         
        default:
            chi = "unkown";


    }
    document.getElementById("nameout").innerHTML = myname;
    document.getElementById("chinese").innerHTML = "Your Chinese zodiac sign is: " + chi;
    document.getElementById("zodiac").innerHTML = "Your Zodiac sign is " + zod;


}