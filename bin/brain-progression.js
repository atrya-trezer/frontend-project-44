#!/usr/bin/env node

import {
  welcome, naming, answering, comparison, congratulations,
} from '../src/index.js';

welcome();
const name = naming();
console.log('What number is missing in the progression?');
let correctAnswers = 0;
while (correctAnswers < 3) {
  const randomNumberOne = Math.floor(Math.random() * 20);
  const randomNumber = 1 + Math.floor(Math.random() * 5);
  const randomProgression = [];
  const randomLength = 4 + Math.floor(Math.random() * 5);
  for (let i = 0; i <= randomLength; i += 1) {
    randomProgression.push(randomNumberOne + randomNumber * i);
  }
  const randomNumberCorrect = Math.floor(Math.random() * randomLength);
  const correctAnswer = randomProgression[randomNumberCorrect];
  randomProgression[randomNumberCorrect] = '..';
  console.log(`Question: ${randomProgression.join(' ')}`);
  const answer = Number(answering());
  correctAnswers = comparison(answer, correctAnswer, name, correctAnswers);
  if (!correctAnswers) {
    break;
  }
}
if (correctAnswers) {
  congratulations(name);
}
