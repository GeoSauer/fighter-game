/* Imports */

/* Get DOM Elements */
const trainerHp = document.getElementById('trainer-hp');
const trainerImage = document.getElementById('trainer-image');
const resultDisplay = document.getElementById('result-display');
const scoreboard = document.getElementById('scoreboard');

/* State */
let trainer = {
    hp: 50,
    type: 'trainer',
};

let result = 'You caught somethin!';
let captured = '1';

/* Events */

/* Display Functions */
function displayTrainer() {
    trainerHp.textContent = Math.max(0, trainer.hp);
    if (trainer.hp < 1) {
        trainerImage.src = `assets/ambulance.png`;
    } else {
        trainerImage.src = `assets/trainer.png`;
    }
}

function displayResult() {
    resultDisplay.textContent = result;
}

function displayScoreboard() {
    scoreboard.textContent = `You have captured ${captured} Pokemon!`;
}

// (don't forget to call any display functions you want to run on page load!)
displayTrainer();
displayResult();
displayScoreboard();
