const Bot = (() => {
  let difficulty = 0;

  const setDifficulty = (diff) => {
    difficulty = diff;
  };

  const getValidMoves = (state) => [...Array(9).keys()].filter((i) => !state[i]);


  const randomMove = (validMoves) => validMoves[
    Math.floor(Math.random() * validMoves.length)
  ];

  const bestMove = (state) => {
    const validMoves = getValidMoves(state);

    if (validMoves.length === 9) { return randomMove([0, 2, 6, 8]); }
    if (validMoves.length === 1) { return validMoves[0]; }
    return randomMove(validMoves);
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