'use strict';

// Defining secret number.
const randomNumber = function () {
  let number = Math.floor(Math.random() * 20) + 1; // Adding one shifts the random value range from 1 (inclusive) to 21 (exclusive).
  return number;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const bodyE1 = document.querySelector('body');
const numberE1 = document.querySelector('.number');
const scoreE1 = document.querySelector('.score');
const guessE1 = document.querySelector('.guess');
const highScoreE1 = document.querySelector('.highscore');

// Obtain random number.
let secretNumber = randomNumber();

// Set up the score in the code -> better to not rely on the DOM to hold the data.
let score = 20;

// Set up initial high score.
let highScore = 0;

// Once the "Check" button is clicked, I want to do a score comparison.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessE1.value); // Inputted values are strings at first.

  if (!guess) {
    // If the user doesn't guess anything, it is at first an empty string, which is converted to 0 when converted to a number.
    displayMessage('No number');

    // Guess is the secret number -> Player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    bodyE1.style.backgroundColor = '#60b347';
    numberE1.style.width = '30rem';
    numberE1.textContent = secretNumber; // Can be used outside of the event listener to test out certain updates.

    // High score functionality.
    if (score > highScore) {
      highScore = score;
      highScoreE1.textContent = highScore;
    }
  }

  // When guess is wrong.
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      score--;
      scoreE1.textContent = score;
    } else {
      displayMessage('😔 Game over. You lost.');
      scoreE1.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // Reset background color.
  bodyE1.style.backgroundColor = '#222';

  // Reset number width.
  numberE1.style.width = '15rem';

  // Reset message.
  displayMessage('Start guessing...');

  // Remove number from the input field.
  guessE1.value = '';

  // Put question mark back in to hide secret number.
  numberE1.textContent = '?';

  // Need a new random number -> just use randomNumber function.
  secretNumber = randomNumber();

  // Reset score.
  score = 20;
  scoreE1.textContent = score;
});
