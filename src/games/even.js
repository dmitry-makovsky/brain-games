import makeGame from '..';
import getRandomNum from '../random';

const gameСondition = 'Answer "yes" if number even otherwise answer "no".';

const getGameData = () => {
  const question = getRandomNum();
  const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
  return { question, rightAnswer };
};

export default () => {
  makeGame(gameСondition, getGameData);
};
