import makeGame from '..';
import getRandomNum from '../random';

const gameСondition = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  if (num2 === 0) {
    return num1;
  }
  if (num1 > num2) {
    return getGcd(num1 % num2, num2);
  }
  return getGcd(num1, num2 % num1);
};

const getGameData = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();

  const question = `${num1} ${num2}`;
  const rightAnswer = getGcd(num1, num2).toString();
  return { question, rightAnswer };
};

export default () => {
  makeGame(gameСondition, getGameData);
};
