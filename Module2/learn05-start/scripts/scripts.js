const dog1 = {
    heading: "Bucket doggo",
    image: "images/black-dog.jpg",
    caption: "chilling in a red bucket",
    altTag: "black doggo"
};

const dog2 = {
    heading: "gold doggo",
    image: "images/gold-dog.jpg",
    caption: "likes basking in the sun (also long walks on the beach)",
    altTag: "super chill doggo"
};

const dog3 = {
    heading: "snow doggo",
    image: "images/snow-dog.jpg",
    caption: "this doggo is fighting off a snowman or building one?",
    altTag: "could join a fencing team"
};

const dog4 = {
    heading: "two dogs",
    image: "images/white-dogs.jpg",
    caption: "two dogs chilling",
    altTag: "doggo+doggo"
};

function loadObject(obj, objNum){
    document.getElementById("heading"+objNum).innerHTML = obj.heading;
    document.getElementById("img"+objNum).src = obj.image;
    document.getElementById("img"+objNum).style.display = "block";
    document.getElementById("img"+objNum).setAttribute("alt", obj.altTag);
    document.getElementById("p"+objNum).innerHTML = obj.caption;
    document.getElementById("button"+objNum).style.visibility = "hidden"
};

function chooseObject(objNum){
    if (objNum == 1){
        loadObject(dog1, 1)
    } else if (objNum == 2){
        loadObject(dog2, 2)
    } else if (objNum == 3){
        loadObject(dog3, 3)
    } else {
        loadObject(dog4, 4)
    }
};