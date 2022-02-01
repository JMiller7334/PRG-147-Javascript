function payButton(){
    alert("Thanks for your business!")
}

function loadUp(){
    document.getElementById("totalCost").innerHTML = "0.00"
    document.getElementById("totalFoods").innerHTML = "0.00"
    document.getElementById("totalDrinks").innerHTML = "0.00"
    document.getElementById("totalDesserts").innerHTML = "0.00"
}

function updateTotal(item, decrease, foodType){
    let costToAdd = 0.00
    //FOODS
    if (item == "none"){
        costToAdd = 0.00
    }
    else if (item == "pizza"){
        costToAdd = 10.35
    }
    else if (item == "nachos"){
        costToAdd = 5.42
    }
    else if (item == "sandwhich"){
        costToAdd = 10.35
    }
    else if (item == "chicken"){
        costToAdd = 11.35
    }
    else if (item == "steak"){
        costToAdd = 10.35
    }
    //DRINKS
    else if (item == "water"){
        costToAdd = 0.00
    }
    else if (item == "tea"){
        costToAdd = 2.75
    }
    else if (item == "coffee"){
        costToAdd = 4.45
    }
    else if (item == "cola"){
        costToAdd = 3.76
    }
    else if (item == "sprite"){
        costToAdd = 3.55
    }

    //DESSERTS
    else if (item == "iceCream"){
        costToAdd = 3.47
    }
    else if (item == "applePie"){
        costToAdd = 14.33
    }
    else if (item == "cheeseCake"){
        costToAdd = 9.65
    }
    else if (item == "cookie"){
        costToAdd = 3.76
    }
    else if (item == "donut"){
        costToAdd = 3.88
    }


    let currentTotal = parseFloat(document.getElementById("totalCost").innerHTML)
    if (decrease == true){
        if (currentTotal > 0){
            currentTotal = currentTotal - costToAdd
            if (foodType == "food"){
                document.getElementById("totalFoods").innerHTML = "0.00"
            }
            else if (foodType == "drink"){
                document.getElementById("totalDrinks").innerHTML = "0.00"
            }
            else if (foodType == "dessert"){
                document.getElementById("totalDessert").innerHTML = "0.00"
            }
        }
    }
    else{
        if (foodType == "food"){
            document.getElementById("totalFoods").innerHTML = costToAdd
        }
        else if (foodType == "drink"){
            document.getElementById("totalDrinks").innerHTML = costToAdd
        }
        else if (foodType == "dessert"){
            document.getElementById("totalDesserts").innerHTML = costToAdd
        }

        currentTotal = currentTotal + costToAdd

    }
    document.getElementById("totalCost").innerHTML = currentTotal
}