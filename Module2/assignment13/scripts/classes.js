helloWorld(); //this can be called without error because it's a function 

class player{ //class declaration - classes are not hoisted.
    constructor(username, hp, mp, lvl){ //where the properties are.
        this.username = username;
        this.hp = hp;
        this.mp = mp;
        this.lvl = lvl;
    }

    playerStats(){
        return this.username + ": HP:" + this.hp + ", MP:" + this.mp + ", Lvl:" + this.lvl;
    }

    static playersLevelDifference(p1, p2){ //static functions cannot be called from instances of the class and must be called from the class itself.
        return Math.abs(p1.lvl - p2.lvl)
    }
}

const player1 = new player("Player1", 10, 7, 3);
const player2 = new player("Player2", 7, 5, 1);
const player3 = new player("Player3", 15, 9, 5);
const player4 = new player("Player4", 20, 15, 10);

const players = [player1, player2, player3, player4]
for (let i = 0; i < players.length; i++ ) {
    document.getElementById("para" + i).innerHTML = players[i].playerStats()
}

console.log(player1);
console.log(player1.playerStats());

console.log(player2);
console.log(player2.playerStats());

console.log(player.playersLevelDifference(player1, player2)) //this is an example of a static class function being called.


function helloWorld(){ //functions are hoisted, meaning they can be called before they are declared.
    return console.log("Hello World!");
}