/* Imports */
import { renderPokemon } from './utils.js';
import { getRandomItem } from './utils.js';

/* Get DOM Elements */
const trainerHp = document.getElementById('trainer-hp');
const trainerImage = document.getElementById('trainer-image');
const resultDisplay = document.getElementById('result-display');
const scoreboard = document.getElementById('scoreboard');
const pokemonList = document.getElementById('pokemon-list');
const addPokemonForm = document.getElementById('add-pokemon-form');

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
        hp: 4,
    },
    {
        name: 'Wigglyfellow',
        type: 'caterpie',
        hp: 4,
    },
    {
        name: 'Weird Dog',
        type: 'eevee',
        hp: 6,
    },
];

// pokemon types
const Bellsprout = {
    type: 'bellsprout',
    hp: 4,
};

const Caterpie = {
    type: 'caterpie',
    hp: 4,
};

const Eevee = {
    type: 'eevee',
    hp: 6,
};

const Mankey = {
    type: 'mankey',
    hp: 12,
};

const Meowth = {
    type: 'meowth',
    hp: 6,
};

const Pidgey = {
    type: 'pidgey',
    hp: 6,
};

const Rattata = {
    type: 'rattata',
    hp: 4,
};

const Squirtle = {
    type: 'squirtle',
    hp: 8,
};

const Venonat = {
    type: 'venonat',
    hp: 8,
};

const Zubat = {
    type: 'zubat',
    hp: 4,
};

const trainerAttacks = [0, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5];
const pokemonAttacks = [0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4];
const pokemonTypes = [
    Bellsprout,
    Bellsprout,
    Bellsprout,
    Bellsprout,
    Caterpie,
    Caterpie,
    Caterpie,
    Caterpie,
    Rattata,
    Rattata,
    Rattata,
    Rattata,
    Zubat,
    Zubat,
    Zubat,
    Zubat,
    Eevee,
    Eevee,
    Eevee,
    Meowth,
    Meowth,
    Meowth,
    Pidgey,
    Pidgey,
    Pidgey,
    Squirtle,
    Squirtle,
    Venonat,
    Venonat,
    Mankey,
];

/* Events */
addPokemonForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(addPokemonForm);
    const pokemonType = getRandomItem(pokemonTypes);

    const pokemon = {
        name: formData.get('name'),
        type: pokemonType.type,
        hp: pokemonType.hp,
    };
    pokemons.push(pokemon);

    result = `${pokemon.name} the ${pokemon.type} has emerged from the tall grass!`;

    displayPokemon();
    displayResult();

    addPokemonForm.reset();
});

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
