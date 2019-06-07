import { makeGame } from '..';
import getRandomNum from '../helpers';

export default () => {
  const isEven = num => num % 2 === 0;

  const gameData = () => {
    const expression = getRandomNum();
    const rightAnswer = isEven(expression) ? 'yes' : 'no';
    return { expression, rightAnswer };
  };

  makeGame('Answer "yes" if number even otherwise answer "no".', gameData);
};
