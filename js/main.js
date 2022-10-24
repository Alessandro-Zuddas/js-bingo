"use strict";

// Creation Board
const boardContainer = document.querySelector('.board');
const maxNumber = 20;

for( let i = 1; i <= maxNumber; i++ ) {
    const boardNumber = document.createElement('div');
    boardNumber.classList.add('board__number');
    boardNumber.innerHTML = i;
    boardContainer.append(boardNumber);
}

const btnGenerator = document.getElementById("btn-generator");
const generatorNumberElement = document.querySelector(".generator__number");

btnGenerator.addEventListener('click', function() {
    const numerRandom = Math.floor(Math.random() * maxNumber) + 1;
    const cellBoard = document.querySelector(`.board__number:nth-child(${numerRandom})`);
    generatorNumberElement.innerHTML = numerRandom;

    if( cellBoard.classList.contains('board__number--selected') ) {
        alert("il numero è già stato estratto");
    }
    
    cellBoard.classList.add('board__number--selected');
});