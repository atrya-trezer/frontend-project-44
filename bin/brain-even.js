#!/usr/bin/env node

import readlineSync from 'readline-sync';

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let i = 0;
while (i < 3) {
  const random = Math.floor(Math.random() * 100);
  console.log(`Question: ${random}`);
  const answer = readlineSync.question('Your answer: ');
  if (random % 2 === 0) {
    if (answer === 'yes') {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${name}!`);
      i = 0;
    }
  } else if (answer === 'no') {
    console.log('Correct!');
    i += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
    console.log(`Let's try again, ${name}!`);
    i = 0;
  }
}
console.log(`Congratulations, ${name}!`);
