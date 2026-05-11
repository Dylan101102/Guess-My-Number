'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// Defining secret number.
const secret_number = Math.floor(Math.random() * 20) + 1; // Adding one shifts the random value range from 1 (inclusive) to 21 (exclusive).
document.querySelector('.number').textContent = secret_number; // Will be shown while developing.

// Set up the score in the code -> better to not rely on the DOM to hold the data.
let score = 20;

// Once the "Check" button is clicked, I want to do a score comparison.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // Inputted values are strings at first.

  if (!guess) {
    // If the user doesn't guess anything, it is at first an empty string, which is converted to 0 when converted to a number.
    document.querySelector('.message').textContent = 'No number';

    // Guess is the secret number -> Player wins
  } else if (guess === secret_number) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Guess is too high.
  } else if (guess > secret_number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '😔 Game over. You lost.';
      document.querySelector('.score').textContent = 0;
    }

    // Guess is too low.
  } else if (guess < secret_number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '😔 Game over. You lost.';
      document.querySelector('.score').textContent = 0;
    }
  }
});
