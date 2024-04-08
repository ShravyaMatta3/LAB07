
function passwordvalidate() {
    var firstpassword = document.getElementById("firstpassword").value;
    var secondpassword = document.getElementById("secondpassword").value;

    if (firstpassword.length && secondpassword.length < 8){
        alert("Both the password's length is less than 8 letters!")
    }else if (firstpassword.length < 8) {
        alert("First password's length is less than 8 letters!")
    } else if (secondpassword.length < 8) {
        alert("Second password's length is less than 8 letters!")
    } else if (firstpassword != secondpassword) {
        alert("Entered passwords are not same")
    } else {
        alert("Perfect")
    }
}
