'use strict';

/*
console.log(document.querySelector('.message').textContent);
console.log(
  (document.querySelector('.message').textContent = '🎉 Correct Number!')
);

document.querySelector('.number').textContent = 12;

document.querySelector('.score').textContent = 17;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// function expression example
const x = function () {
  console.log(23);
};

// store the value in our code not only in DOM
let score = 20;

// determine the number want to guess
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

// event handler by interactive element, funtion => value can use as argument to another function
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // document.querySelector('.message').textContent = 'Correct Number!';

  // create 3 conditions, there is too low, too high and correct!
  if (!guess) {
    console.log(
      (document.querySelector('.message').textContent = '⛔ No Number!')
    );
  } else if (guess === secretNumber) {
    console.log(
      (document.querySelector('.message').textContent = '🎉 Correct Number!')
    );
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
