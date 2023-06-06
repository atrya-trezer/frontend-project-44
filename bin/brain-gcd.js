#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { welcome, naming, answering, comparison, congratulations } from '../src/index.js'

welcome() 
const name = naming();
console.log('Find the greatest common divisor of given numbers.')

const gcd = (x, y) => {
  for (let i = x; i > 0; i -= 1) {
    if (x % i === 0 && y % i === 0) {
      return i;
    }
  }
}

let i = 0;
while (i < 3) {
  const random1 = Math.floor(Math.random() * 100);
  const random2 = Math.floor(Math.random() * 100);
  console.log(`Question: ${random1} ${random2}`);
  const answer = Number(answering());
  const correctAnswer = gcd(random1, random2);
  i = comparison(answer, correctAnswer, name, i);
}
congratulations(name);