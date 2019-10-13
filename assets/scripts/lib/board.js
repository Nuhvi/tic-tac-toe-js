const Board = (state = Array(9)) => {
  const getState = () => state;
  const getCell = (cellId) => state[cellId];

  const setCell = (cellId, mark) => { state[cellId] = mark; };

  const getRow = (cellId) => {
    cellId = Math.floor(cellId / 3) * 3;
    return [cellId, cellId + 1, cellId + 2];
  };

  const getCol = (cellId) => {
    cellId %= 3;
    return [cellId, cellId + 3, cellId + 6];
  };

  const getDiagonals = (cellId) => {
    const res = [];
    res.push(cellId % 4 === 0 ? [0, 4, 8] : [2, 4, 6]);
    if (cellId === 4) res.push([2, 4, 6]);

    return res;
  };

  const getRowColDiagonals = (cellId) => {
    const res = [getRow(cellId), getCol(cellId)];
    if ([1, 3, 5, 7].includes(cellId)) return res;

    return res.concat(getDiagonals(cellId));
  };

  const checkWinningCompination = (cellId) => {
    let winningCompination;
    getRowColDiagonals(cellId).some((compination) => {
      if (
        compination.map((i) => state[i]).every(
          (val, i, arr) => val && val === arr[0],
        )
      ) winningCompination = compination;
      return winningCompination;
    });
    return winningCompination;
  };


  return {
    getState,
    getCell,
    setCell,
    checkWinningCompination,
  };
};

export default Board;