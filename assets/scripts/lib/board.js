const Board = (() => {
  let state = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  const get = () => state;
  const set = (row, column, mark) => {
    state[row][column] = mark;
  };
  const reset = () => {
    state = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  };
  return {
    get,
    set,
    reset,
  };
})();

export default Board;