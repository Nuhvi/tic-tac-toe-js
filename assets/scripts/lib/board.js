const Board = (() => {
  let state = Array(9);

  const set = (index, mark) => {
    state[index] = mark;
  };

  const getCell = (cell) => state[cell];

  const reset = () => {
    state = Array(9);
  };

  const getRow = (cell) => {
    cell = Math.floor(cell / 3) * 3;
    return [cell, cell + 1, cell + 2];
  };

  const getCol = (cell) => {
    cell %= 3;
    return [cell, cell + 3, cell + 6];
  };

  const getDiagonals = (cell) => {
    const res = [];

    res.push(cell % 4 === 0 ? [0, 4, 8] : [2, 4, 6]);

    if (cell === 4) res.push([2, 4, 6]);

    return res;
  };

  const getRowColDiagonals = (cell) => {
    const res = [getRow(cell), getCol(cell)];

    if ([1, 3, 5, 7].includes(cell)) return res;

    return res.concat(getDiagonals(cell));
  };


  return {
    set,
    reset,
    getRowColDiagonals,
    getCell,
  };
})();

export default Board;