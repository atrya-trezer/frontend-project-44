import {
  welcome, naming, answering, comparison, congratulations,
} from './index.js';

const calc = () => {
  const actions = {
    '+': function (a, b) { return a + b; },
    '-': function (a, b) { return a - b; },
    '*': function (a, b) { return a * b; },
  };

  welcome();
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
    i = comparison(answer, correctAnswer, name, i);
    if (!i) {
      break;
    }
  }
  if (i) {
    congratulations(name);
  }
};

export default calc;
