const Bot = (() => {
  let difficulty = 0;

  const setDifficulty = (diff) => {
    difficulty = diff;
  };

  const minMax = () => {};

  const nextMove = (state) => {
    const validCellsIds = [0, 1, 2, 3, 4, 5, 6, 7, 8].filter((i) => !state[i]);

    if (Math.random() < difficulty) {
      return minMax(validCellsIds);
    }
    return validCellsIds[
      Math.floor(Math.random() * validCellsIds.length)
    ];
  };


  return {
    setDifficulty,
    nextMove,
  };
})();

export default Bot;