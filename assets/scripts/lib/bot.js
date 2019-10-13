const Bot = (() => {
  let difficulty = 1;

  const setDifficulty = (diff) => { difficulty = diff; };

  const getValidMoves = (state) => [...Array(9).keys()].filter((i) => !state[i]);

  const randomMove = (validMoves) => validMoves[
    Math.floor(Math.random() * validMoves.length)
  ];

  const utilityFunction = () => Math.floor(Math.random() * 2) - 1;

  const bestMove = (state) => {
    const validMoves = getValidMoves(state);
    console.log(validMoves);

    if (validMoves.length === 9) return randomMove([0, 2, 6, 8]);
    if (validMoves.length === 1) return validMoves[0];

    const utilities = [];

    if (
      validMoves.some((move) => {
        const utility = utilityFunction(state, move);
        utilities.push(utility);
        console.log(utilities);
        return utility === 1;
      })
    ) {
      console.log(utilities.length);
      return utilities.length;
    }

    const findZero = Math.max(utilities.findIndex((e) => e === 0), 0);
    console.log(validMoves[findZero]);

    return validMoves[findZero];
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