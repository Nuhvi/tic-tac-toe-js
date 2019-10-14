import Board from './board.js';

const Bot = (() => {
  let difficulty = 1;
  let maxmizerMark;
  const moves = [...Array(9).keys()];

  const setDifficulty = (diff) => {
    difficulty = diff;
  };

  const getAvailableMoves = (state) => moves.filter((i) => !state[i]);

  const utility = (state, move) => {
    if (Board.winningCompination(move, state)) {
      return state[move] === maxmizerMark ? 1 : -1;
    }
    return null;
  };

  const miniMax = (_state, move, currentMark) => {
    const state = [..._state];
    state[move] = currentMark;
    const u = utility(state, move);
    if (u) { return u; }
    const nextMoves = getAvailableMoves(state);
    if (nextMoves.length === 0) return 0;

    const nextMark = currentMark === 'x' ? 'o' : 'x';

    const childrenUtility = nextMoves.map(
      (move) => miniMax(state, move, nextMark),
    );

    return nextMark === maxmizerMark
      ? Math.max(...childrenUtility)
      : Math.min(...childrenUtility);
  };

  const randomMove = (availableMoves) => availableMoves[
    Math.floor(Math.random() * availableMoves.length)];

  const bestMove = (state, moves) => {
    if (moves.length === 9) return randomMove([0, 2, 6, 8]);
    const utilities = moves.map((move) => miniMax(state, move, maxmizerMark));
    return moves[utilities.indexOf(Math.max(...utilities))];
  };

  const pickMove = (mark) => {
    maxmizerMark = mark;
    const state = Board.getState();
    const availableMoves = getAvailableMoves(state);
    return Math.random() >= difficulty
      ? randomMove(availableMoves) : bestMove(state, availableMoves);
  };

  return {
    setDifficulty,
    pickMove,
  };
})();

export default Bot;