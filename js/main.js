"use strict";

/*-----------------------
    FUNCTIONS
------------------------*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function printBoard(boardElement, cellNumber) {
    for( let i = 1; i <= cellNumber; i++ ) {
        const boardNumber = document.createElement('div');
        boardNumber.classList.add('board__number');
        boardNumber.innerHTML = i;
        boardElement.append(boardNumber);
    }
}

function createBingoNumbers(cellNumber) {
    const array = [];
    for( let i = 1; i <= cellNumber; i++ ) {
        array.push(i);
    }
    return array;
}

function extractionInterval(){

    wasStarted = true;

    extractionCore();

    let timerCore = setInterval(function(){

        if(bingoNumbers.length !== 0){
            extractionCore();
        }
    
    }, 10000)
    
    setTimeout(function(){
        clearInterval(timerCore); 
    }, 901000);
}

function extractionCore(){
    // genero un numero casuale che sarà l'indice dell'elemento dell'array bingoNumbers
    const indexRandom = getRndInteger(0, bingoNumbers.length);
    // salvo l'elemento generato in una variabile
    const numerRandom = bingoNumbers[indexRandom];
    // seleziono il numero corrispondente dal tabellone
    const cellBoard = document.querySelector(`.board__number:nth-child(${numerRandom})`);
    // lo coloro di verde
    cellBoard.classList.add('board__number--selected');
    // inserisco il numero estratto nel div sotto bottone
    generatorNumberElement.innerHTML = numerRandom;
    // rimuovo il numero estratto dall'array
    bingoNumbers.splice(indexRandom, 1);
    // controllo se la lunghezza dell'array è uguale a 0 non ci sono più numeri da estrarre
    if(bingoNumbers.length === 0){
        alert("Gioco terminato! La pagina verrà ricaricata automaticamente");
        window.location.reload();
    }
}

/*-----------------------
    MAIN
------------------------*/
const boardContainer = document.querySelector('.board');
const maxNumber = 90;

printBoard(boardContainer, maxNumber);
const bingoNumbers = createBingoNumbers(maxNumber);

const btnGenerator = document.getElementById("btn-generator");
const generatorNumberElement = document.querySelector(".generator__number");

const btnReset = document.getElementById("btn-reset");

let wasStarted = false;

btnGenerator.addEventListener('click', function() {
    if(wasStarted === false){
        btnGenerator.innerHTML = "Ferma estrazione";
        extractionInterval();
    }else{
        btnGenerator.classList.add("hidden");
        bingoNumbers.length = 0;
        wasStarted = false;
    }
});

btnReset.addEventListener("click", function(){
    window.location.reload();
});