import readlineSync from 'readline-sync';

export const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

export const makeGame = (gameСondition, gameData) => {
  const steps = 3;

  console.log('Welcome to the Brain Games!');
  console.log(`${gameСondition}\n`);

  const name = getName();

  const iter = (step) => {
    const { expression, rightAnswer } = gameData();
    const answer = readlineSync.question(`Question: ${expression}\nYour answer: `);

    if (rightAnswer.toString() !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'\nLet's try again, ${name}`);
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
  iter(steps);
};
