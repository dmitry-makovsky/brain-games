import makeGame from '..';
import getRandomNum from '../helpers';

const gameMission = 'Answer "yes" if given number is prime. Otherwise answer "no".';
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
  const getGameData = () => {
    const question = getRandomNum();
    const rightAnswer = isPrime(question) ? 'yes' : 'no';
    return { question, rightAnswer };
  };
  makeGame(gameMission, getGameData);
};
