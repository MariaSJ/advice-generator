'use strict';

// VARIABLES
const advice = document.querySelector('.js-dataAdvice');
const btn = document.querySelector('.js-btn-advice');

let advices = {};


// FETCH
function getData () {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
            advices = data.slip;
            renderAdvice(advices);
    });
};

getData();

// FUNCTIONS

const renderAdvice = () => {
    let dataHtml = "";

    dataHtml += `<p class="card__numberAdvice">Advice: ${advices.id}</p>`;
    dataHtml += `<h1 class="card__advice">${advices.advice}</h1>`;

    return advice.innerHTML = dataHtml;
};

// EVENT

btn.addEventListener('click', (event) => {
    event.preventDefault();
    getData();
    renderAdvice(advices);
});
