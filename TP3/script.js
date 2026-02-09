// script.js

function temperature(){
    var c = parseFloat(document.getElementById("celsius").value);
    var f = (c * 9/5) + 32;
    document.getElementById("fahrenheit").value = f;
}

function weight(){
    var kg = parseFloat(document.getElementById("kilo").value);
    var p = kg * 2.2;
    document.getElementById("pounds").value = p;
}