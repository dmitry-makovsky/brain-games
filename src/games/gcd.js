import makeGame from '..';
import getRandomNum from '../helpers';

const gameMission = 'Find the greatest common divisor of given numbers.';
const gcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  if (num2 === 0) {
    return num1;
  }
  if (num1 > num2) {
    return gcd(num1 % num2, num2);
  }
  return gcd(num1, num2 % num1);
};

export default () => {
  const getGameData = () => {
    const { num1, num2 } = { num1: getRandomNum(), num2: getRandomNum() };

    const question = `${num1} ${num2}`;
    const rightAnswer = gcd(num1, num2);
    return { question, rightAnswer };
  };
  makeGame(gameMission, getGameData);
};
