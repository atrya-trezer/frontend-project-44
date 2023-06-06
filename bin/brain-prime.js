#!/usr/bin/env node

import { welcome, naming, answering, comparison, congratulations } from '../src/index.js'

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

welcome();
const name = naming();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let i = 0;
let correctAnswer;
while (i < 3) {
  const random = Math.floor(Math.random() * 100);
  console.log(`Question: ${random}`);
  const answer = answering();
  if (isPrime(random)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  i = comparison(answer, correctAnswer, name, i);
}
congratulations(name);