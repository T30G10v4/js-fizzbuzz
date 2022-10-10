// Ciao ragazzi,
// Esercizio di oggi: **FizzBuzz**
// nome repo: js-fizzbuzz
// **Consegna:**
//  Scrivi un programma che stampi in console i numeri da 1 a 100,
//  ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
//  Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

//  **Prima di partire a scrivere codice poniamoci qualche domanda:**
 
//  Come faccio a sapere se un numero è divisibile per un altro?
//  Abbiamo visto qualcosa di particolare che possiamo usare?
//  **Consigli del giorno:**
//  1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
//  2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// **BONUS 1:**
//  Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.
// **BONUS 2:**
//  Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
//  Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
// Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:

numbers=parseInt(prompt("Quanti numeri vuoi?"));

firstNumber=parseInt(prompt("Il primo numero divisibile (fizz) ?"));
seconNumber=parseInt(prompt("Il secondo numero divisibile (buzz) ?"));

const row = document.getElementById("grid");
console.log("Grid", row);

let append;
let firstDiv;
let secondDiv;

for(let i = 1; i<=numbers; i++) {

    firstDiv = (i % firstNumber) === 0;
    secondDiv = (i % seconNumber) === 0;
    
    // SE NON divisibile per 3 E NON divisibile per 5
    if((!firstDiv)&&(!secondDiv)) {

        append = i;
        row.innerHTML += `<div class="col ms-cell">${append}</div>`;

    } else {

        if(firstDiv) {

            append += "fizz";

        }

        if(secondDiv) {

            append += "buzz";

        }

        row.innerHTML += `<div class="col ms-cell ms-${append}">${append}</div>`;

    }

    append = "";

    console.log(append);

}