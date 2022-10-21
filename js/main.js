"use strict";

const btnGenerator = document.getElementById("btn-generator");
const generatorNumberElement = document.querySelector(".generator__number");

btnGenerator.addEventListener('click', function() {
    const numerRandom = Math.floor(Math.random() * 10) + 1;
    const cellBoard = document.querySelector(`.board__number:nth-child(${numerRandom})`);
    generatorNumberElement.innerHTML = numerRandom;

    if( cellBoard.classList.contains('board__number--selected') ) {
        alert("il numero è già stato estratto");
    }
    
    cellBoard.classList.add('board__number--selected');
});