import Board from './board.js';

const Bot = (() => {
  let difficulty = 1;
  let myMark;
  const moves = [...Array(9).keys()];

  const setDifficulty = (diff) => {
    difficulty = diff;
  };

  const getAvailableMoves = (state) => moves.filter((i) => !state[i]);

  const randomMove = (availableMoves) => availableMoves[
    Math.floor(Math.random() * availableMoves.length)];

  const utility = (state, move) => {
    const hasWinningCompination = Board.winningCompination(move, state);
    if (hasWinningCompination) {
      if (state[hasWinningCompination[0]] === myMark) return 1;
      return -1;
    }
    return null;
  };

  const minMax = (state, currentMark, move = null) => {
    const moves = getAvailableMoves(state);
    const currentUtility = utility(state, move, currentMark);
    if (currentUtility) return currentUtility;
    if (moves === 1) return 0;

    const utilities = moves.map((move) => {
      const stateAfterMove = [...state];
      stateAfterMove[move] = currentMark;
      const res = minMax(stateAfterMove, currentMark, move);
      currentMark = currentMark === 'x' ? 'o' : 'x';
      return res;
    });

    return Math.max(...utilities);
  };

  const miniMax = (_state, move, currentMark) => {
    const state = [..._state];
    state[move] = currentMark;
    const moves = getAvailableMoves(state);
    const u = utility(state, move);
    if (u) return u;
    if (moves.length === 0) return 0;
    console.log(move, moves, u);

    const nextMark = currentMark === 'x' ? 'o' : 'x';
    return Math.max(moves.map((move) => miniMax(state, move, nextMark)));
  };

  const bestMove = (origState, moves, mark) => {
    const state = [...origState];
    if (moves.length === 9) return randomMove([0, 2, 6, 8]);
    if (moves.length === 1) return moves[0];

    const utilities = moves.map((move) => miniMax(state, move, mark));
    const indexOfMaxUtility = utilities.indexOf(Math.max(...utilities));
    console.log(moves, utilities);
    return moves[indexOfMaxUtility];
  };

  const pickMove = () => {
    myMark = 'o';
    // const state = Board.getState();
    const state = [
      'x', 'x', null,
      'o', null, null,
      null, null, null,
    ];
    const availableMoves = getAvailableMoves(state);
    return Math.random() >= difficulty
      ? randomMove(availableMoves) : bestMove(state, availableMoves, myMark);
  };

  return {
    setDifficulty,
    pickMove,
  };
})();

export default Bot;