import makeGame from '..';
import getRandomNum from '../helpers';

const gameMission = 'What number is missing in the progression?';
const lengthOfProgression = 10;

const makeProgression = (start, step) => {
  const iter = (num, acc) => {
    if (acc.length === lengthOfProgression) {
      return acc;
    }
    const newAcc = acc.concat([num + step]);
    return iter(newAcc[newAcc.length - 1], newAcc);
  };
  return iter(start + step, [start]);
};

export default () => {
  const getGameData = () => {
    const startProgression = getRandomNum();
    const stepProgression = getRandomNum();
    const randomIndex = getRandomNum(0, lengthOfProgression - 1);

    const progression = makeProgression(startProgression, stepProgression);
    const rightAnswer = progression[randomIndex];
    const question = progression.map(el => (el === progression[randomIndex] ? '..' : el)).join(' ');
    return { question, rightAnswer };
  };
  makeGame(gameMission, getGameData);
};
