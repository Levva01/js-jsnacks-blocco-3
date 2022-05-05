//creo l'array vuoto
let array1 = [];
//aggiungo un elemento chidendolo all'utente
array1.push(Number(prompt("Inserisci un numero")));

//creo una variabile che terrà conto della somma degli elementi dell'array
let sum = 0;
sum = sum + array1[0];

let i = 1;

while(sum < 50){
    
        array1.push(Number(prompt("Inserisci un numero")));
        sum = sum + array1[i];
        console.log(sum);

        if(sum > 49){
            sum = sum - array1[i];
            console.log(sum);
            array1.pop([i]);
            break;
        }

        i++;
    
}

console.log(array1);