import readlineSync from 'readline-sync';

const stepsCount = 3;

export default (gameСondition, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameСondition}\n`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const iter = (step) => {
    const { question, rightAnswer } = getGameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (rightAnswer !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${name}`);
      return;
    }

    if (step === 1) {
      console.log(`Congratulations, ${name}`);
      return;
    }
    console.log('Correct!');
    iter(step - 1);
  };
  iter(stepsCount);
};
