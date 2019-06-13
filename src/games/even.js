import makeGame from '..';
import getRandomNum from '../random';

const gameСondition = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;

const getGameData = () => {
  const question = getRandomNum();
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return { question, rightAnswer };
};

export default () => {
  makeGame(gameСondition, getGameData);
};
