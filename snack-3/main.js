//cambio lo stile dei due tag div
let red = document.getElementById("red");
let green = document.getElementById("green");
red.style.color = "red";
green.style.color = "green";

//creo l'array di numeri
let array = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
];

//ciclo in cui controllo quale numero è dispari e quale pari

for(let i = 0; i < array.length; i++){
    if(array[i] % 2 == 0){
        document.getElementById("green").innerHTML = array[i];
    } else {
        document.getElementById("red").innerHTML = array[i];
    }
}