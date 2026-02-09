// src/index.ts

function temperature(): void {
    // Récupération de la valeur avec typage explicite
    const c: number = parseFloat((<HTMLInputElement>document.getElementById("celsius")).value);
    
    // Calcul
    const f: number = (c * 9 / 5) + 32;
    
    // Affichage du résultat
    (<HTMLInputElement>document.getElementById("fahrenheit")).value = f.toString();
}

function weight(): void {
    const kg: number = parseFloat((<HTMLInputElement>document.getElementById("kilo")).value);
    const p: number = kg * 2.2;
    (<HTMLInputElement>document.getElementById("pounds")).value = p.toString();
}

// Note : Pour que les fonctions soient accessibles dans le HTML via onclick, 
// il faut parfois les attacher explicitement à l'objet window dans certains environnements de module,
// mais selon le PDF, la compilation simple devrait suffire pour ce TP.