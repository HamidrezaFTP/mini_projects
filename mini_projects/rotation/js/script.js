var x = document.getElementById("myDiv");
var deg = 0;
window.setInterval(function() {
    deg = deg + 3;
    if (deg > 360) {
        deg = deg - 360;
    }
    x.style.transform = "rotateY(" + deg.toString() + "deg)";
}, 16);