//faccio un inserire un numero N all'utente
let N = Number(prompt("Inserisci un numero"));
let i = 0;

//ciclo finchè i !== da N
while(i !== N){
    
    //creo un array vuoto
    let Array = [];

    //scorro l'array con un ciclo aggiungendo ad ogni elemento
    //un numero casuale da 1 a 100
    for(let j = 0; j < 10; j++){
        Array[j] = Math.floor(Math.random() * 100) + 1;
    }
    //stampo l'array
    console.log(Array);
    //mando avanti il contatore
    i++;
}