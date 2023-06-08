#!/usr/bin/env node

import {
  welcome, naming, answering, comparison, congratulations,
} from '../src/index.js';

welcome();
const name = naming();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let i = 0;
let correctAnswer;
while (i < 3) {
  const random = Math.floor(Math.random() * 100);
  console.log(`Question: ${random}`);
  const answer = answering();
  if (random % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  i = comparison(answer, correctAnswer, name, i);
  if (!i) {
    break;
  }
}
if (i) {
  congratulations(name);
}
