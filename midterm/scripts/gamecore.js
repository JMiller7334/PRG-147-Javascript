// HTML elements
let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");

let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");

let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");

let turn = document.getElementById("turn");
let scoreX = document.getElementById("scoreX");
let scoreO = document.getElementById("scoreO");

//variables
let boardArray = [a1, a2, a3, b1, b2, b3, c1, c2, c3];
let current = "X";
let count = 0;


function resetGame(){
    current = "X";
    count = 0;
    for (let i = 0; i < boardArray.length; i++){
        document.getElementById(boardArray[i].id).innerHTML = ""
    }
}

//check for winning stratagies
function checkList(a, b, c, victory){
    console.log("checking stratagies")
    if (victory != true){
        let scored = 0;
        if (a.innerHTML == current){
            scored = scored + 1;
        }
        if (b.innerHTML == current){
            scored = scored + 1;
        }
        if (c.innerHTML === current){
            scored = scored + 1;
        }
        console.log("checking list: "+scored)
        if (scored == 3){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return true; // if the player has already won leave it that way
    }
}

function buttonFunction(currentButton){
    if (turn.innerHTML == "WINNER: " + current){
        resetGame()
    }
    if (turn.innerHTML == "DRAW"){
        resetGame()
    }
    if (currentButton.innerHTML == "" || currentButton.innerHTML == null){
        //currentButton.innerHTML == current;
        //a1.innerHTML = current;
        document.getElementById(currentButton.id).innerHTML = current;
        console.log(currentButton)
        
        let won = false
        count = count + 1; //turn count
        
        // vertical
        won = checkList(a1, a2, a3, won)
        won = checkList(b1, b2, b3, won)
        won = checkList(c1, c2, c3, won)
        // horizontal
        won =  checkList(a1, b1, b2, won)
        won = checkList(a2, b2, c2, won)
        won = checkList(a3, b3, c3, won)
        //cross way
        won = checkList(a1, b2, c3, won)
        won = checkList(a3, b2, c1, won)
        
        if (won == true){
            turn.innerHTML = "WINNER: " + current;
        }
        else{
            if (current === "X"){
                current = "O";
                turn.innerHTML = "TURN: " + current;
                
            }
            else{
                current = "X";
                turn.innerHTML = "TURN: "+ current;
                
            }
            if (count >= 9){
                turn.innerHTML = ("DRAW");
            }
        }
    }
}


//locate button - may rework doesn't seem too efficient.
function getButton(nameString){

    for (let i = 0; i < boardArray.length; i++){
        if (boardArray[i].id == nameString){
            console.log("button found in array")
            buttonFunction(boardArray[i])
        } else {
            console.log("button could not be found in array for: " + (nameString))
        }
    }
}