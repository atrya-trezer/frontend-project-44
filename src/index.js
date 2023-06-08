import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};
const naming = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
const answering = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};
const comparison = (answer, correctAnswer, name, i) => {
  if (answer === correctAnswer) {
      console.log('Correct!');
      i += 1;
      return i;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
};
const congratulations = (name) => {
  console.log(`Congratulations, ${name}!`);
};
export { welcome, naming, answering, comparison, congratulations }

