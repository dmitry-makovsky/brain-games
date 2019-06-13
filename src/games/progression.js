import makeGame from '..';
import getRandomNum from '../random';

const gameСondition = 'What number is missing in the progression?';
const lengthProgression = 10;

const makeProgression = (start, step, length) => {
  const iter = (num, acc) => {
    if (acc.length === length) {
      return acc;
    }
    const newAcc = acc.concat([num + step]);
    return iter(newAcc[newAcc.length - 1], newAcc);
  };
  return iter(start + step, [start]);
};

const getGameData = () => {
  const progressionStart = getRandomNum();
  const progressionStep = getRandomNum();
  const randomIndex = getRandomNum(0, lengthProgression - 1);

  const progression = makeProgression(progressionStart, progressionStep, lengthProgression);
  const rightAnswer = progression[randomIndex].toString();
  const question = progression.map(el => (el === progression[randomIndex] ? '..' : el)).join(' ');
  return { question, rightAnswer };
};

export default () => {
  makeGame(gameСondition, getGameData);
};
