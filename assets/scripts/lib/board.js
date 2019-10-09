const Board = (() => {
  let state = Array(9);
  const get = () => state;
  const set = (index, mark) => {
    state[index] = mark;
  };
  const reset = () => {
    state = Array(9);
  };

  return {
    get,
    set,
    reset,
  };
})();

export default Board;