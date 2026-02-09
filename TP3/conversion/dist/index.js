// src/index.ts
function temperature() {
    // Récupération de la valeur avec typage explicite
    const c = parseFloat(document.getElementById("celsius").value);
    // Calcul
    const f = (c * 9 / 5) + 32;
    // Affichage du résultat
    document.getElementById("fahrenheit").value = f.toString();
}
function weight() {
    const kg = parseFloat(document.getElementById("kilo").value);
    const p = kg * 2.2;
    document.getElementById("pounds").value = p.toString();
}
// Note : Pour que les fonctions soient accessibles dans le HTML via onclick, 
// il faut parfois les attacher explicitement à l'objet window dans certains environnements de module,
// mais selon le PDF, la compilation simple devrait suffire pour ce TP.
