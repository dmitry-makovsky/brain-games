import makeGame from '..';
import getRandomNum from '../random';

const gameСondition = 'What is the result of the expression?';
const mathOperations = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};

const getRandomOperation = (operations) => {
  const keys = Object.keys(operations);
  return keys[getRandomNum(0, keys.length - 1)];
};

const getGameData = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const operation = getRandomOperation(mathOperations);
  const rightAnswer = mathOperations[operation](num1, num2).toString();
  const question = `${num1} ${operation} ${num2}`;
  return { question, rightAnswer };
};

export default () => {
  makeGame(gameСondition, getGameData);
};
