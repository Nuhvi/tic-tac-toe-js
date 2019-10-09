const Board = (() => {
  let state = [0, 0, 0, 3, 4, 5, 6, 7, 8];
  const get = () => state;
  const set = (index, mark) => {
    state[index] = mark;
  };
  const reset = () => {
    state = Array(9);
  };

  const getRow = (cell) => {
    cell = Math.floor(cell / 3) * 3;
    return [state[cell], state[cell + 1], state[cell + 2]];
  };

  const getCol = (cell) => {
    cell %= 3;
    return [state[cell], state[cell + 3], state[cell + 6]];
  };

  const getDiagonals = (cell) => {
    const res = [];

    if (cell % 4 === 0) {
      res.push([state[0], state[4], state[8]]);
    } else {
      res.push([state[2], state[4], state[6]]);
    }

    if (cell === 4) res.push([state[2], state[4], state[6]]);

    return res;
  };

  const getRowColDiagonals = (cell) => {
    const res = [getRow(cell), getCol(cell)];

    if ([1, 3, 5, 7].includes(cell)) return res;

    return res.concat(getDiagonals(cell));
  };

  return {
    get,
    set,
    reset,
    getRowColDiagonals,
  };
})();

export default Board;