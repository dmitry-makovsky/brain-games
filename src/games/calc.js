import makeGame from '..';
import getRandomNum from '../helpers';

const gameMission = 'What is the result of the expression?';
const mathOperations = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};
const getRandomOperation = (operators) => {
  const keys = Object.keys(operators);
  return keys[getRandomNum(0, keys.length - 1)];
};

export default () => {
  const getGameData = () => {
    const { num1, num2 } = { num1: getRandomNum(), num2: getRandomNum() };
    const operation = getRandomOperation(mathOperations);
    const rightAnswer = mathOperations[operation](num1, num2);
    const question = `${num1} ${operation} ${num2}`;
    return { question, rightAnswer };
  };
  makeGame(gameMission, getGameData);
};
