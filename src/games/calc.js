import { makeGame } from '..';

export default () => {
  const getRandomNum = (min = 1, max = 100) => Math.floor(Math.random() * (max - min) + min);
  const getRandomProp = (object) => {
    const keys = Object.keys(object);
    return object[keys[getRandomNum(1, keys.length)]];
  };

  const mathOperations = {
    sum: (num1, num2) => ['+', num1 + num2],
    subtract: (num1, num2) => ['-', num1 - num2],
    multiply: (num1, num2) => ['*', num1 * num2],
  };

  const gameData = () => {
    const { num1, num2 } = { num1: getRandomNum(), num2: getRandomNum() };
    const operation = getRandomProp(mathOperations)(num1, num2);
    const expression = `${num1} ${operation[0]} ${num2}`;
    const rightAnswer = operation[1].toString();
    return { expression, rightAnswer };
  };

  makeGame('What is the result of the expression?', gameData);
};
