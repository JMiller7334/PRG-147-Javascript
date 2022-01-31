function getDate(){
    let today = new Date();
    document.getElementById('myDate').innerHTML = today;

    document.getElementById("name").value = "";

    document.getElementById("rm1length").value = "";
    document.getElementById("rm1width").value = "";
    document.getElementById("rm1height").value = "";
    document.getElementById("rm1cost").value = "";

    document.getElementById("rooms").value = 1;
}

function estimate(){
    let name = document.getElementById("name").value
    let length = parseFloat(document.getElementById("rm1length").value);
    let width = parseFloat(document.getElementById("rm1width").value);
    let height = parseFloat(document.getElementById("rm1height").value);

    let totalSpace = ((length * width * 2) + (length * height * 2));
    let cost = totalSpace * .65
    document.getElementById("rm1cost").value = cost;

    let room2 = document.getElementById("room2")
    if (room2.style.display == "block"){
        length = parseFloat(document.getElementById("rm2length").value);
        width = parseFloat(document.getElementById("rm2width").value);
        height = parseFloat(document.getElementById("rm2height").value);
    
        totalSpace = ((length * width * 2) + (length * height * 2));
        document.getElementById("rm2cost").value = totalSpace * .65;
        cost = cost + totalSpace * .65
    }

    let room3 = document.getElementById("room3")
    if (room3.style.display == "block"){
        length = parseFloat(document.getElementById("rm3length").value);
        width = parseFloat(document.getElementById("rm3width").value);
        height = parseFloat(document.getElementById("rm3height").value);
    
        totalSpace = ((length * width * 2) + (length * height * 2));
        document.getElementById("rm3cost").value = totalSpace * .65;
        cost = cost + totalSpace * .65
    }

    document.getElementById("estimate").innerHTML = name+" your estimated cost is $"+cost
}

function showRoom(number){
    let room1 = document.getElementById("room1")
    let room2 = document.getElementById("room2")
    let room3 = document.getElementById("room3")

    if (number == 1){
        room1.style.display = "block"
        room2.style.display = "none"
        room3.style.display = "none"
    }
    else if(number == 2){
        room1.style.display = "block"
        room2.style.display = "block"
        room3.style.display = "none"
    }
    else{
        room1.style.display = "block"
        room2.style.display = "block"
        room3.style.display = "block"
    }
}
