





var clock = setInterval(clockTime,1000);
function clockTime(){
    var d = new Date();
var digiClock = d.toLocaleTimeString()
document.getElementById("showClock").innerHTML=digiClock;
}
