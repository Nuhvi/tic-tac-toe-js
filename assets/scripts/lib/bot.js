const Bot = (() => {
  let difficulty = 0;
  const moves = [...Array(9).keys()];

  const setDifficulty = (diff) => { difficulty = diff; };

  const getValidMoves = (state) => moves.filter((i) => !state[i]);

  const randomMove = (validMoves) => validMoves[
    Math.floor(Math.random() * validMoves.length)
  ];

  //   const isWinningMove = () => {

  //   };

  const utilityFunction = () => 1;
  // state[move] = currentMark;
  // const validMoves = getValidMoves(state);
  // if (isWinningMove(state, move)) return 1;
  // if (validMoves.length === 1) return 0;

  // return Math.max(
  //   validMoves.map((move) => utilityFunction(state, move)),
  // );

  const bestMove = (state) => {
    const validMoves = getValidMoves(state);
    if (validMoves.length === 9) return randomMove([0, 2, 6, 8]);
    if (validMoves.length === 1) return validMoves[0];

    const utilities = validMoves.map((move) => utilityFunction(move));
    return validMoves[utilities.indexOf((u) => u === Math.max(...utilities))];
  };

  const pickMove = (state) => (
    Math.random() >= difficulty ? randomMove(getValidMoves(state)) : bestMove(state)
  );

  return {
    setDifficulty,
    pickMove,
  };
})();

export default Bot;