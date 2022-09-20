export function renderPokemon(pokemon) {
    const li = document.createElement('li');
    li.classList.add('pokemon', 'card');

    const hp = document.createElement('span');
    hp.classList.add('stat');
    hp.textContent = pokemon.hp;

    const image = document.createElement('img');
    image.alt = pokemon.type;
    if (pokemon.hp < 1) {
        image.src = `assets/pokeball.png`;
    } else {
        image.src = `assets/${pokemon.type}.png`;
    }

    const name = document.createElement('span');
    name.classList.add('name');
    name.textContent = pokemon.name;

    li.append(hp, image, name);

    return li;
}
