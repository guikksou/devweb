// src/script.ts

class Person {
    name: string;
    height: number;
    weight: number;
    birthDate: Date;

    constructor(name: string, birthDate: Date, height: number, weight: number) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.birthDate = birthDate;
    }

    calculateAge(): number {
        const today = new Date();
        const birthDate = this.birthDate;
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    calculateBmi(): number {
        const heightInMeters = this.height / 100;
        return this.weight / (heightInMeters ** 2);
    }

    isLegalAge(): boolean {
        return this.calculateAge() >= 18;
    }
}

function createPerson(): Person {
    const name = (<HTMLInputElement>document.getElementById('nameInput')).value;
    const birthDate = (<HTMLInputElement>document.getElementById('birthDateInput')).value;
    const height = (<HTMLInputElement>document.getElementById('heightInput')).value;
    const weight = (<HTMLInputElement>document.getElementById('weightInput')).value;
    
    const person = new Person(name, new Date(birthDate), parseFloat(height), parseFloat(weight));
    console.log(person);
    return person;
}

function addPerson(person: Person): void {
    const personList = document.getElementById('personTableBody');
    // Vérification de sécurité (non présent dans le PDF mais recommandé)
    if (!personList) return;

    const personRow = document.createElement('tr');
    const personColumns = ['name', 'birthDate', 'age', 'height', 'weight', 'bmi', 'legalAge'];

    personColumns.forEach(column => {
        const cell = document.createElement('td');
        let value = '';

        switch (column) {
            case 'age':
                value = person.calculateAge().toString();
                break;
            case 'bmi':
                value = person.calculateBmi().toFixed(2);
                break;
            case 'legalAge':
                value = person.isLegalAge() ? 'Yes' : 'No';
                break;
            case 'birthDate':
                value = person.birthDate.toLocaleDateString('en-GB');
                break;
            case 'name':
                value = person.name;
                break;
            case 'height':
                value = person.height.toString();
                break;
            case 'weight':
                value = person.weight.toString();
                break;
            default:
                // Utilisation de l'accès dynamique avec cast 'any' pour éviter erreur TS stricte sur les clés
                value = (person as any)[column]?.toString();
                break;
        }
        cell.appendChild(document.createTextNode(value));
        personRow.appendChild(cell);
    });
    
    personList.appendChild(personRow);
}

// Ajout des données initiales comme demandé
addPerson(new Person('Gabriel Camargo', new Date('2000-02-11'), 172, 60));
addPerson(new Person('Raúl Mazo', new Date('1980-04-01'), 168, 50));
addPerson(new Person('Mariana Celoti', new Date('1970-01-01'), 170, 70));