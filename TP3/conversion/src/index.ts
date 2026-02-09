// src/index.ts

function temperature(): void {
    
    const c: number = parseFloat((<HTMLInputElement>document.getElementById("celsius")).value);
    
    
    const f: number = (c * 9 / 5) + 32;
    
    
    (<HTMLInputElement>document.getElementById("fahrenheit")).value = f.toString();
}

function weight(): void {
    const kg: number = parseFloat((<HTMLInputElement>document.getElementById("kilo")).value);
    const p: number = kg * 2.2;
    (<HTMLInputElement>document.getElementById("pounds")).value = p.toString();
}
