import { makeGame } from '..';

export default () => {
  const getRandomNum = (min = 1, max = 100) => Math.floor(Math.random() * (max - min) + min);
  const isEven = num => num % 2 === 0;

  const gameData = () => {
    const expression = getRandomNum();
    const rightAnswer = isEven(expression) ? 'yes' : 'no';
    return { expression, rightAnswer };
  };

  makeGame('Answer "yes" if number even otherwise answer "no".', gameData);
};
