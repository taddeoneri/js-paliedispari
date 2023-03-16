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
let number2 = getRandomInt(1, 5);


btnNumber2.addEventListener('click', function(){
    return document.querySelector('.computer').innerHTML += 
    `
        <p class="px-4 mb-0">${number2}</p>
    `;
});


btnWinner.addEventListener('click', function(){
    number1 = document.getElementById('numberUser').value;
    const select = document.getElementById('select').value;
    const resultNumber = document.getElementById('resultNumber');
    console.log(select);
    console.log(number1);
    console.log(number2);
    console.log(evenOdd(number1, number2));
    if(evenOdd(number1, number2) == select){
        return resultNumber.innerHTML = 'User Winner'
    }else{
        return resultNumber.innerHTML = 'Computer Winner'
    }
});


function addition(number1, number2){
    return number1 + number2;
}


function evenOdd(number1, number2){
    if ((number1 + number2) % 2 == 0){
        return 'Even';
    } else{
        return 'Odd';
    }
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
