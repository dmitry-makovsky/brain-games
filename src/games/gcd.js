import { makeGame } from '..';

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
  const getRandomNum = (min = 1, max = 100) => Math.floor(Math.random() * (max - min) + min);


  const gameData = () => {
    const { num1, num2 } = { num1: getRandomNum(), num2: getRandomNum() };

    const expression = `${num1} ${num2}`;
    const rightAnswer = gcd(num1, num2);
    return { expression, rightAnswer };
  };

  makeGame('Find the greatest common divisor of given numbers.', gameData);
};
