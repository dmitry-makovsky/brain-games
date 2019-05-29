import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export const even = () => {
  const steps = 3;
  const [min, max] = [1, 100];

  const question = text => readlineSync.question(`${text} `);
  const getRandomNum = (minNum, maxNum) => Math.floor(Math.random() * (maxNum - minNum) + minNum);
  const isEven = num => num % 2 === 0;
  const rightAnswer = number => (isEven(number) ? 'yes' : 'no');

  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const gameIter = (step) => {
    const number = getRandomNum(min, max);
    const answer = question(`Question: ${number}\nYour answer: `);

    if (rightAnswer(number) !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer(number)}'\nLet's try again, ${name}`);
      return false;
    }

    if (step === 1) {
      console.log(`Congratulations, ${name}`);
      return true;
    }
    console.log('Correct!');
    gameIter(step - 1);
    return true;
  };
  gameIter(steps);
};
