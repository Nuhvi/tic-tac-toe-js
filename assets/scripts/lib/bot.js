import Board from './board.js';

const Bot = (() => {
  let difficulty = 1;
  const moves = [...Array(9).keys()];

  const setDifficulty = (diff) => {
    difficulty = diff;
  };

  const getAvailableMoves = (state) => moves.filter((i) => !state[i]);

  const randomMove = (state) => {
    const availableMoves = getAvailableMoves(state);
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
  };

  const isaWin = (state, move, currentMark) => {
    const winningCompination = Board.winningCompination(move, state);
    return (winningCompination && state[winningCompination[0]] === currentMark);
  };

  const winnableMove = (state, currentMark) => {
    console.log(state);

    const moves = getAvailableMoves(state);
    if (moves.length === 1 && isaWin(state, moves[0], currentMark)) return moves[0];

    let move;
    moves.some((move) => {
      const stateAfterMove = state;
      stateAfterMove[move] = currentMark;
      currentMark = currentMark === 'x' ? 'o' : 'x';
      move = winnableMove(stateAfterMove, currentMark);
      return winnableMove;
    });
    return move;
  };

  const pickMove = (state, mark) => {
    const origState = [...state];
    return Math.random() >= difficulty ? randomMove(state)
      : winnableMove(origState, mark) || randomMove(state);
  };

  return {
    setDifficulty,
    pickMove,
  };
})();

export default Bot;