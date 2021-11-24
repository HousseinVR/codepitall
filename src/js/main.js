
import {ClientMalades, Doctor, Lieux, Chat, Tariffe} from "./classes.js";
// promier pacient(instance de ClientMalades) Marcus 
let pac1 = new ClientMalades("Marcus","mal indente", 100, [],"malade","");
// deuxieme pacient(instance de ClientMalades) Optimus
let pac2 =  new ClientMalades("Optimus","unsave", 200 , [], "malade","" );
// troixieme pacient(instance de ClientMalades) Sangoku
let pac3 = new ClientMalades("Sangoku","404", 80, [], "malade", "");
// quatrieme pacient(instance de ClientMalades) DarthVader
let pac4 = new ClientMalades("DarthVader","azmatique", 110, [], "malade",""); 
// cinquieme pacient(instance de ClientMalades) Semicolon
let pac5 =  new ClientMalades("Semicolon", "syntaxError", 60, [], "malade","");
let toutLesPac = [pac1, pac2, pac3, pac4, pac5];
// instances de Tariffe
let ctrlmajf = new Tariffe("ctrl+maj+f", 60);
let saveOnFocusChange = new Tariffe(`saveOnFocusChange`, 100);
let checkLinkRelation = new Tariffe(`CheckLinkRelation`, 35);
let ventoline = new Tariffe(`Ventoline`, 40);
let f12Doc = new Tariffe(`f12+doc`, 20);

//  le doctor(instance de Doctor)
let doc = new Doctor("Houssein", 300, []);
// let cabinet = new Lieux("cabinet", []);

// Les Lieux(instances de Lieux)
let salleAttente = new Lieux("salle d'attente", [])
let farmacie = new Lieux("Farmacie", []);
// en outilisant la boucle forEach je push chaque element du tableu que je creer dans la salle d'attente
toutLesPac.forEach(element => salleAttente.perssone.push(element));
// les 5 melades  se trouve dans la salle d'attente 
console.log(`Dans la ${salleAttente.nom} il ${salleAttente.perssone.length} personnes`);

// je fait appele a ma function pacientIn pour voir le premiere pacient
doc.pacientIn(doc.cabinet , pac1, salleAttente);
// console.log(doc.cabinet);
// console.log(salleAttente);
// console.log(doc.cabinet);

let tabMaladie = ["mal indente", "unsave", "404", "azmatique", "syntaxError"];

console.log(`La maladie de ${pac1.nom} est ${pac1.maladie}`);
doc.diagnostique(0);

pac1.payerDoc();
console.log(`${pac1.nom} a actuelement  ${pac1.argent}€`);
doc.pacientOut(doc.cabinet , pac1);
pac1.goTo(farmacie)
pac1.payer(ctrlmajf);

console.log("_______________");
console.log(`Dans la ${salleAttente.nom} il ${salleAttente.perssone.length} personnes`);
// le duxieme malade rentre dans cabinet du doc
doc.pacientIn(doc.cabinet , pac2, salleAttente);
// ici je un clg de sa maladie 
console.log(`La maladie de ${pac2.nom} est ${pac2.maladie}`);
// ensuit le doctoru fai ca diagnostique
doc.diagnostique(1);
// 
pac2.payerDoc();
// 
console.log(`${pac2.nom} a actuelement  ${pac2.argent}€`);
doc.pacientOut(doc.cabinet , pac2);
pac2.goTo(farmacie)
pac2.payer(saveOnFocusChange)


console.log("_______________");
console.log(`Dans la ${salleAttente.nom} il ${salleAttente.perssone.length} personnes`);
// le troixime malade rentre dans cabinet du doc
doc.pacientIn(doc.cabinet , pac3, salleAttente);
// ici je un clg de sa maladie 
console.log(`La maladie de ${pac3.nom} est ${pac3.maladie}`);
// ensuit le doctoru fai ca diagnostique
doc.diagnostique(2);
// 
pac3.payerDoc();
// 
console.log(`${pac3.nom} a actuelement  ${pac3.argent}€`);
doc.pacientOut(doc.cabinet , pac3);
pac3.goTo(farmacie)
pac3.payer(checkLinkRelation)


console.log("_______________");
console.log(`Dans la ${salleAttente.nom} il ${salleAttente.perssone.length} personnes`);
// le quatrieme malade rentre dans cabinet du doc
doc.pacientIn(doc.cabinet , pac4, salleAttente);
// ici je un clg de sa maladie 
console.log(`La maladie de ${pac4.nom} est ${pac4.maladie}`);
// ensuit le doctoru fai ca diagnostique
doc.diagnostique(3);
// 
pac4.payerDoc();
// 
console.log(`${pac4.nom} a actuelement  ${pac4.argent}€`);
doc.pacientOut(doc.cabinet , pac4);
pac4.goTo(farmacie)
pac4.payer(ventoline)

console.log("_______________");
console.log(`Dans la ${salleAttente.nom} il ${salleAttente.perssone.length} personnes`);
// le cinquieme malade rentre dans cabinet du doc
doc.pacientIn(doc.cabinet , pac5, salleAttente);
// ici je un clg de sa maladie 
console.log(`La maladie de ${pac5.nom} est ${pac5.maladie}`);
// ensuit le doctoru fai ca diagnostique
doc.diagnostique(4);
// 
pac5.payerDoc();
// 
console.log(`${pac5.nom} a actuelement  ${pac5.argent}€`);
doc.pacientOut(doc.cabinet , pac5);
pac5.goTo(farmacie)
pac5.payer(f12Doc)
console.log(`Dans la ${salleAttente.nom} il ${salleAttente.perssone.length} personnes`);
// export de toute mes instances
export {pac1, pac2, pac3, pac4, pac5, doc, salleAttente, farmacie}


