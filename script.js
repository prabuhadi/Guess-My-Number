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
let highscore = 0;
// determine the number want to guess
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// event handler by interactive element, funtion => value can use as argument to another function
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // create 3 conditions, there is too low, too high and correct!
  if (!guess) {
    // when guess number is empty
    console.log(displayMessage('⛔ No Number!'));
  } else if (guess === secretNumber) {
    // when player win
    console.log(
      displayMessage('🎉 Correct Number!'),
      (document.querySelector('body').style.backgroundColor = '#60b347'),
      (document.querySelector('.number').style.width = '30rem'),
      (document.querySelector('.number').textContent = secretNumber)
    );
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#e84118';
    }
  }

  // } else if (guess < secretNumber) {
  //   // when guess too low
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = '#e84118';
  //   }

  // } else if (guess > secretNumber) {
  //   // when guess too high
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = '#e84118';
  //   }
});

// reset button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
});
