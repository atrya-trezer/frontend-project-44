#!/usr/bin/env node

import readlineSync from 'readline-sync';

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');
let i = 0;
while (i < 3) {
  const random1 = Math.floor(Math.random() * 100);
  const random2 = Math.floor(Math.random() * 100);
  const action = ['+', '-', '*'];
  const randomAction = action[Math.floor(Math.random() * 3)];
  console.log(`Question: ${random1} ${randomAction} ${random2}`);
  const answer = Number(readlineSync.question('Your answer: '));
  //const correctAnswer = random1 randomAction random2;
  let correctAnswer;
  if (randomAction === '+') {
    correctAnswer = random1 + random2;
  }
  else if (randomAction === '-') {
    correctAnswer = random1 - random2;
  }
  else if (randomAction === '*') {
    correctAnswer = random1 * random2;
  }
  if (answer === correctAnswer) {
    console.log('Correct!');
    i += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    i = 0;
  }
}
console.log(`Congratulations, ${name}!`);
