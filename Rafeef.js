var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow < 12) {
    greeting="صباح الخير";
}
else if ( hourNow > 18) {
    greeting="مساء الخير";
}
else {
    greeting="مرحبا";
}
document.write(greeting);

function myFunction(){
    var x=document.getElementById("myMenu");
    if (x.className==="menu") {
        x.className+="responsive";

    }
    else{
     x.className = "menu";
    }

}
function myFunction() {
    document.querySelector(".nav").classList.toggle("show");
}
