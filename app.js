/* Imports */
import { renderPokemon } from './utils.js';
import { getRandomItem } from './utils.js';

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
let captured = 0;

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
// const bellsprout = {
//     type: 'bellsprout',
//     hp: 2,
// };

// const caterpie = {
//     type: 'caterpie',
//     hp: 2,
// };

// const eevee = {
//     type: 'eevee',
//     hp: 3,
// };

// const mankey = {
//     type: 'mankey',
//     hp: 6,
// };

// const meowth = {
//     type: 'meowth',
//     hp: 3,
// };

// const pidgey = {
//     type: 'pidgey',
//     hp: 3,
// };

// const rattata = {
//     type: 'rattata',
//     hp: 2,
// };

// const squirtle = {
//     type: 'squirtle',
//     hp: 4,
// };

// const venonat = {
//     type: 'venonat',
//     hp: 4,
// };

// const zubat = {
//     type: 'zubat',
//     hp: 2,
// };

const trainerAttacks = [0, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5];
const pokemonAttacks = [0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4];
// const pokemonTypes = [
//     bellsprout,
//     bellsprout,
//     bellsprout,
//     bellsprout,
//     caterpie,
//     caterpie,
//     caterpie,
//     caterpie,
//     rattata,
//     rattata,
//     rattata,
//     rattata,
//     zubat,
//     zubat,
//     zubat,
//     zubat,
//     eevee,
//     eevee,
//     eevee,
//     meowth,
//     meowth,
//     meowth,
//     pidgey,
//     pidgey,
//     pidgey,
//     squirtle,
//     squirtle,
//     venonat,
//     venonat,
//     mankey,
// // ];

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

        pokemonEl.addEventListener('click', () => {
            if (pokemon.hp < 1) {
                result = `You already caught that one!`;
                displayResult();
                return;
            }

            const trainerAttack = getRandomItem(trainerAttacks);
            const pokemonAttack = getRandomItem(pokemonAttacks);

            trainer.hp = Math.max(0, trainer.hp - pokemonAttack);
            pokemon.hp = Math.max(0, pokemon.hp - trainerAttack);

            result = '';
            if (trainerAttack === 0) {
                result += 'You whiffed it! ';
            } else {
                result += `You hit ${pokemon.name} and dealt ${trainerAttack} in damage! `;
            }
            if (pokemonAttack === 0) {
                result += `${pokemon.name} failed to land a blow... `;
            } else {
                result += `${pokemon.name} landed a strike and did ${pokemonAttack} points of damage! `;
            }
            if (pokemon.hp < 1) {
                captured++;
                displayScoreboard();
            }
            displayResult();
            displayTrainer();
            displayPokemon();
        });
    }
}

// (don't forget to call any display functions you want to run on page load!)
displayTrainer();
// displayResult();
// displayScoreboard();
displayPokemon();
