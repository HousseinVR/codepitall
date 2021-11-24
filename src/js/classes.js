import {doc, farmacie } from "./main.js"
// je creer une class pour les malades 
class ClientMalades {
    constructor(nom ,maladie, argent, poche, etatSante , traitement){
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent; 
        this.poche = poche; 
        this.etatSante = etatSante; 
        this.traitement = traitement;
        this.goTo = (lieu) => {
            lieu.perssone.push(this.nom);
            console.log(`${this.nom} est actuelement a la ${lieu.nom}`);
        }

        this.payer = (medicament) => {
                this.argent -= medicament.prix;
                console.log(`Le cout de ${medicament.traitement} est ${medicament.prix} `);
                if (this.argent >= 0){
                    console.log(`${this.nom} achete un traitement ${medicament.traitement}`);
                    
                }else{
                    farmacie.perssone.splice(0, 1);
                    console.log(`${this.nom} a pas assee d'argent pour acheter le traitment`);
                    console.log(`${this.nom} est mort , donc il est au cimtiere`);
                }
            
        }
        this.payerDoc = () => {
            this.argent -= 50;
            doc.argent += 50;
            console.log(`${this.nom} a payer ${doc.nom} pour la consultation `);
        
    }
    }
}
// je creer une class pour Doctor 
class Doctor{
    constructor(nom , argent, cabinet){
        this.nom = nom;
        this.argent = argent; 
        this.cabinet = cabinet;
        this.tabTraitement = ["ctrl+maj+f", `saveOnFocusChange`, `CheckLinkRelation`,`Ventoline`, `f12+doc`];
        this.diagnostique = (index) => {
            let indexFinal = index; 
            parseInt(indexFinal, 10);
            console.log(`Le traitment de cet maladie est ${this.tabTraitement[indexFinal]} `);
        }

        this.pacientIn = (lieu, pacient , salleAttente) => {
            lieu.push(this.nom);
            console.log(`${this.nom}  a fait rentre  ${pacient.nom} dans cabinet`);
            salleAttente.perssone.splice(salleAttente.perssone.indexOf(pacient), 1)
        }

        this.pacientOut = (lieu, pacient) =>{
            lieu.splice(0, 1)
            console.log(`${pacient.nom} est sortir de cabinet du Doctor ${this.nom}`);
        }
    }
}


let Chat = {
    nomRace: "Sphynx",
    miau : setInterval(function(){ console.log(`Miau`);}, 2000)
}

// une class pour le Lieux 
class Lieux {
    constructor(nom , perssone){
        this.nom = nom; 
        this.perssone = perssone;
    }
}

// les tariffe
class Tariffe {
    constructor(traitement,  prix){
        this.traitement = traitement;
        this.prix = prix
    }
}




export {ClientMalades, Doctor, Lieux , Chat, Tariffe};