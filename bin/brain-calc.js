#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { welcome, naming, answering, comparison, congratulations } from '../src/index.js';
const actions = {
  '+': function(a, b){ return a + b},
  '-': function(a, b){ return a - b},
  '*': function(a, b){ return a * b}
};

//console.log('Welcome to the Brain Games!');
welcome()
//const name = readlineSync.question('May I have your name? ');
//console.log(`Hello, ${name}!`);
const name = naming();
console.log('What is the result of the expression?');
let i = 0;
while (i < 3) {
  const random1 = Math.floor(Math.random() * 100);
  const random2 = Math.floor(Math.random() * 100);
  const action = ['+', '-', '*'];
  const randomAction = action[Math.floor(Math.random() * 3)];
  console.log(`Question: ${random1} ${randomAction} ${random2}`);
  const answer = Number(answering());
  const correctAnswer = actions[randomAction](random1, random2);

  //if (answer === correctAnswer) {
  //  console.log('Correct!');
  //  i += 1;
  //} else {
  //  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  //  console.log(`Let's try again, ${name}!`);
  //  i = 0;
  //}
  i = comparison(answer, correctAnswer, name, i);
}
//console.log(`Congratulations, ${name}!`);
congratulations(name);