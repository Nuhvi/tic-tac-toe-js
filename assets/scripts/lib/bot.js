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
    if (hasWinningCompination) return state[move] === myMark ? 1 : -1;
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
    // console.log(move, childrenUtility);

    return currentMark === myMark ? Math.max(...childrenUtility) / childrenUtility.length : Math.min(...childrenUtility) / childrenUtility.length;
  };

  const bestMove = (state, moves) => {
    if (moves.length === 9) return randomMove([0, 2, 6, 8]);
    if (moves.length === 8) return 4;
    if (moves.length === 1) return moves[0];

    const utilities = moves.map((move) => miniMax(state, move, myMark));

    const indexOfMaxUtility = utilities.indexOf(Math.max(...utilities));

    // console.log(moves, utilities, Math.max(...utilities));
    return moves[indexOfMaxUtility];
  };

  const pickMove = () => {
    myMark = 'o';
    const state = Board.getState();
    // const state = [
    //   'x', 'x', null,
    //   'o', 'o', null,
    //   null, null, null,
    // ];
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