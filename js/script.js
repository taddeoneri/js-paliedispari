/* 
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


const btnReverse = document.querySelector('.btnReverse');
let resultWord = document.getElementById('resultWord');

btnReverse.addEventListener('click', function(e){
    e.preventDefault();
    const word = document.getElementById('word').value;
    if(word === reverseString(word)){
        return resultWord.innerHTML = 'The string is palindorm';
    }
    return resultWord.innerHTML = 'The string is not palindorm';
})

function reverseString(str) {
    const splitString = str.split(""); 
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join(""); 
    return joinArray;
}



/* 
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/      


const btnNumber2 = document.querySelector('.btnNumber2');
const btnWinner = document.querySelector('.btnWinner');

let number1;
let number2;



btnNumber2.addEventListener('click', function(){
    number2 = getRandomInt(1, 6);
    return document.querySelector('.computer').innerHTML += 
    `
        <p class="px-4 mb-0">${number2}</p>
    `;
});


btnWinner.addEventListener('click', function(){
    number1 = document.getElementById('numberUser').value;
    console.log(number1);
})



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
