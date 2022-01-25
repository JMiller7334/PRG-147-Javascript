function imageChange(image){
    alert(image)
    document.getElementById('mainImage').src=image
}

function loadParaText(){
    document.getElementById("paraText").innerHTML = "Just some interesting images I found on Pixabay."
}

function changeParaText(){
    document.getElementById("paraText").innerHTML = "Well, you clicked a button..."
}

function changeImageWidth(){
    document.getElementById("mainImage").style.width = "300px"
}

function changeParaTextColor(){
    document.getElementById("paraText").style.color = "green"
}

function showHide(){
    if (document.getElementById('mainImage').style.display == "none"){
        document.getElementById('mainImage').style.display = "block"
    }
    else{
        document.getElementById("mainImage").style.display = "none"
    }
}