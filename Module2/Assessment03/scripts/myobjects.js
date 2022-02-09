const taekwondo = {
    heading: "Taekwondo",
    image: "images/taekwondo.jpg",
    origin: "Korea",
    caption: "Taekwondo is a  martial arts style from Korea that focuses on primary on kicks, froms in taekwondo are called poomsae.",
    altTag: "martial-art1",
    desc: "About Taekwondo"
};

const karate = {
    heading: "Karate",
    image: "images/karate.jpg",
    origin: "Japan",
    caption: "Karate is well-known style of martial arts from Japan, it is known for it's deep stances and hard style type movements as well as it's kata.",
    altTag: "martial-art2",
    desc: "About Karate"
};

const kungfu = {
    heading: "Kung Fu",
    image: "images/kungfu.jpg",
    origin: "China",
    caption: "Originating from china Kung fu is one of flashly styles of martial arts consiting of showy and acrobatic movements.",
    altTag: "martial-art3",
    desc: "About Kung Fu"
};

const muaythai = {
    heading: "Muay Thai",
    image: "images/muay-thai.jpg",
    origin: "Thailand",
    caption: "Muay Thai comes from Thailand and know for it's usage of elbows, knees and clinch work. Muay Thai primary focuses on fighting and there are no forms.",
    altTag: "martial art4",
    desc: "About Muay Thai"
};

const jiujitsu = {
    heading: "Jiu Jitsu",
    image: "images/jiujitsu.jpg",
    origin: "Japan",
    caption: "Jiu jitsu like Karate is from Japan. It focuses on ground fighting, pins, and submissions. Jiujtsu has no forms or kata and focuses on sparring called Randori",
    altTag: "martial-art5",
    desc: "About Jiu Jitsu"
};

function loadObject(obj, objNum){
    document.getElementById("heading"+objNum).innerHTML = obj.heading;
    document.getElementById("img"+objNum).src = obj.image;
    document.getElementById("img"+objNum).style.display = "block";
    document.getElementById("img"+objNum).setAttribute("alt", obj.altTag);
    document.getElementById("p"+objNum).innerHTML = obj.caption;
    document.getElementById("origin"+objNum).innerHTML = "Origin: "+obj.origin;
    document.getElementById("desc"+objNum).innerHTML = obj.desc
};

function loadAll(){
    loadObject(taekwondo, 1)
    loadObject(karate, 2)
    loadObject(kungfu, 3)
    loadObject(muaythai, 4)
    loadObject(jiujitsu, 5)
}