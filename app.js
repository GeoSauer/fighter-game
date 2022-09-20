/* Imports */
import { renderPokemon } from './render-utils.js';

/* Get DOM Elements */
const trainerHp = document.getElementById('trainer-hp');
const trainerImage = document.getElementById('trainer-image');
const resultDisplay = document.getElementById('result-display');
const scoreboard = document.getElementById('scoreboard');
const pokemonList = document.getElementById('pokemon-list');

/* State */
let trainer = {
    hp: 50,
    type: 'trainer',
};

let result = '';
let captured = '0';

let pokemons = [
    {
        name: 'Bellyboi',
        type: 'bellsprout',
        hp: 2,
    },
    {
        name: 'Wigglyfellow',
        type: 'caterpie',
        hp: 2,
    },
    {
        name: 'Weird Dog',
        type: 'eevee',
        hp: 3,
    },
];

// pokemon types
const bellsprout = {
    type: 'bellsprout',
    hp: 2,
};

const caterpie = {
    type: 'caterpie',
    hp: 2,
};

const eevee = {
    type: 'eevee',
    hp: 3,
};

const mankey = {
    type: 'mankey',
    hp: 6,
};

const meowth = {
    type: 'meowth',
    hp: 3,
};

const pidgey = {
    type: 'pidgey',
    hp: 3,
};

const rattata = {
    type: 'rattata',
    hp: 2,
};

const squirtle = {
    type: 'squirtle',
    hp: 4,
};

const venonat = {
    type: 'venonat',
    hp: 4,
};

const zubat = {
    type: 'zubat',
    hp: 2,
};

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

function displayPokemon() {
    pokemonList.innerHTML = '';

    for (const pokemon of pokemons) {
        const pokemonEl = renderPokemon(pokemon);
        pokemonList.append(pokemonEl);
    }
}

// (don't forget to call any display functions you want to run on page load!)
displayTrainer();
// displayResult();
// displayScoreboard();
displayPokemon();
