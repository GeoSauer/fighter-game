/* Imports */

/* Get DOM Elements */
const trainerHp = document.getElementById('trainer-hp');
const trainerImage = document.getElementById('trainer-image');

/* State */
let trainer = {
    hp: 50,
    type: 'trainer',
};
/* Events */

/* Display Functions */
function displayTrainer() {
    trainerHp.textContent = Math.max(0, trainer.hp);
    if (trainer.hp < 1) {
        trainerImage.src = `assets/ambulance.png`;
    }
}
// (don't forget to call any display functions you want to run on page load!)
displayTrainer();
