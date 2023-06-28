import {
  welcome, naming, answering, comparison, congratulations,
} from './index.js';

const gcd = () => {
  welcome();
  const name = naming();
  console.log('Find the greatest common divisor of given numbers.');

  const divider = (x, y) => {
    for (let i = x; i > 0; i -= 1) {
      if (x % i === 0 && y % i === 0) {
        return i;
      }
    }
    return 1;
  };

  let i = 0;
  while (i < 3) {
    const random1 = Math.floor(Math.random() * 100);
    const random2 = Math.floor(Math.random() * 100);
    console.log(`Question: ${random1} ${random2}`);
    const answer = Number(answering());
    const correctAnswer = divider(random1, random2);
    i = comparison(answer, correctAnswer, name, i);
    if (!i) {
      break;
    }
  }
  if (i) {
    congratulations(name);
  }
};

export default gcd;
