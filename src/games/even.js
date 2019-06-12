import makeGame from '..';
import getRandomNum from '../helpers';

const gameMission = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;

export default () => {
  const getGameData = () => {
    const question = getRandomNum();
    const rightAnswer = isEven(question) ? 'yes' : 'no';
    return { question, rightAnswer };
  };
  makeGame(gameMission, getGameData);
};
