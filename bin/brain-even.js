#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { welcome, naming, answering, comparison, congratulations } from '../src/index.js'

welcome() 
//const name = readlineSync.question('May I have your name? ');
//console.log(`Hello, ${name}!`);
const name = naming();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let i = 0;
while (i < 3) {
  const random = Math.floor(Math.random() * 100);
  console.log(`Question: ${random}`);
  //const answer = readlineSync.question('Your answer: ');
  const answer = answering();
  if (random % 2 === 0) {
    const correctAnswer = 'yes';
    //if (answer === correctAnswer) {
    //  console.log('Correct!');
    //  i += 1;
    //} else {
    //  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    //  console.log(`Let's try again, ${name}!`);
    //  i = 0;
    //}
    i = comparison(answer, correctAnswer, name, i);
  } else {
    const correctAnswer = 'no';
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
}
//console.log(`Congratulations, ${name}!`);
congratulations(name);
