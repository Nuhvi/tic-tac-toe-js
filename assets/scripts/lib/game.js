import Player from './player';

const Game = (() => {
  let p1 = null;
  let p2 = null;
  const initialize = (p1Name, p2Name) => {
    p1 = Player(p1Name, 0);
    p2 = Player(p2Name, 1);
  };
  const playersScores = () => [p1.score(), p2.score()];
  const playersNames = () => [p1.name(), p2.name()];
  return { initialize, playersScores, playersNames };
})();

export default Game;