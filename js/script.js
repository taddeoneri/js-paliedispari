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
    let splitString = str.split(""); 
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join(""); 
    return joinArray;
}