import readlineSync from 'readline-sync';

export default (gameСondition, getGameData) => {
  const stepsCount = 3;

  console.log('Welcome to the Brain Games!');
  console.log(`${gameСondition}\n`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const iter = (step) => {
    const { question, rightAnswer } = getGameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (rightAnswer.toString() !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${name}`);
      return false;
    }

    if (step === 1) {
      console.log(`Congratulations, ${name}`);
      return true;
    }
    console.log('Correct!');
    iter(step - 1);
    return true;
  };
  iter(stepsCount);
};
