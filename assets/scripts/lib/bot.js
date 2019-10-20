import Board from './board.js';

const Bot = (() => {
  let difficulty = 0.5;
  let maxmizerMark;
  const moves = [...Array(9).keys()];

  const setDifficulty = (diff) => {
    difficulty = diff;
  };

  const getAvailableMoves = (tempState) => moves.filter((i) => !tempState[i]);

  const utility = ({ tempState, move }) => {
    if (Board.winningCompination(move, tempState)) {
      return tempState[move] === maxmizerMark ? 1 : -1;
    }
    return null;
  };

  const miniMax = ({
    state, move, depth, currentMark, maximzeUtility,
  }) => {
    const tempState = [...state];
    tempState[move] = currentMark;

    const terminalUtility = utility({ tempState, move });
    if (terminalUtility) return terminalUtility;
    if (depth <= 0) return 0;

    const nextMoves = getAvailableMoves(tempState);
    if (nextMoves.length === 0) return 0;

    const nextMark = currentMark === 'x' ? 'o' : 'x';

    const childrenUtility = nextMoves.map((move) => miniMax({
      state: tempState,
      move,
      depth: depth - 1,
      currentMark: nextMark,
      maximzeUtility: !maximzeUtility,
    }));

    return maximzeUtility
      ? Math.max(...childrenUtility)
      : Math.min(...childrenUtility);
  };

  const randomMove = (moves) => moves[Math.floor(Math.random() * moves.length)];

  const randomBestMove = ({ utilities, availableMoves }) => {
    const maxUtility = Math.max(...utilities);
    const bestMoves = availableMoves.filter(
      (move, index) => utilities[index] === maxUtility,
    );

    return randomMove(bestMoves);
  };

  const bestMove = ({ originalState, availableMoves }) => {
    const utilities = availableMoves.map((move) => miniMax({
      state: originalState,
      move,
      depth: Math.max(difficulty * 8, 1),
      currentMark: maxmizerMark,
      maximzeUtility: false,
    }));
    console.log(Math.max(difficulty * 8, 1), utilities);

    return randomBestMove({ utilities, availableMoves });
  };

  const pickMove = ({ originalState, botMark }) => {
    maxmizerMark = botMark;
    const availableMoves = getAvailableMoves(originalState);
    return bestMove({ originalState, availableMoves });
  };

  return {
    setDifficulty,
    pickMove,
  };
})();

export default Bot;
