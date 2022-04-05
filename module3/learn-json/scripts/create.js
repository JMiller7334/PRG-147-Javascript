
function addme() {
    const user = {};
    user.firstname = document.getElementById("fname").value;
    user.lastname = document.getElementById("lname").value;
    user.email = document.getElementById("email").value;
    user.phone = document.getElementById("phone").value;

    const jsonEncoded = JSON.stringify(user); //convert to JSON

    document.getElementById("json-value").innerHTML = jsonEncoded
}