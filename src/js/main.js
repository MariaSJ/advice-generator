'use strict';

// VARIABLES
const numberAdvice = document.querySelector('.js-number-advice');
const advice = document.querySelector('.js-advice');
const btn = document.querySelector('.js-btn-advice');

let advices = [];


// FETCH
function getData () {
    fetch("https://api.adviceslip.com")
        .then((response) => response.json())
        .then((data) => {
            advices = data;
            console.log(advices);
            
            renderAdvice(advice);
    });
};


getData();