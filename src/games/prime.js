import { makeGame } from '..';
import getRandomNum from '../helpers';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const gameData = () => {
    const expression = getRandomNum();
    const rightAnswer = isPrime(expression) ? 'yes' : 'no';
    return { expression, rightAnswer };
  };

  makeGame('Answer "yes" if given number is prime. Otherwise answer "no".', gameData);
};
