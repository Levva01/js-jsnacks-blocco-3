//creo l'array vuoto
let array1 = [];
//aggiungo un elemento chidendolo all'utente
array1.push(Number(prompt("Inserisci un numero")));

//creo una variabile che terrà conto della somma degli elementi dell'array
let sum = array1[0];

let i = 1;

while(sum < 50){
    array1.push(Number(prompt("Inserisci un numero")));
    sum = sum + array1[i];
    i++;
}

console.log(array1);