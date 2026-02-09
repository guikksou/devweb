// script.js

function temperature(){
    // Pour convertir Celsius en Fahrenheit
    // Formule: (C * 9/5) + 32
    var c = parseFloat(document.getElementById("celsius").value);
    var f = (c * 9/5) + 32;
    document.getElementById("fahrenheit").value = f;
}

function weight(){
    // Pour convertir KGs en Livres (Pounds)
    // Formule: KG * 2.2
    var kg = parseFloat(document.getElementById("kilo").value);
    var p = kg * 2.2;
    document.getElementById("pounds").value = p;
}