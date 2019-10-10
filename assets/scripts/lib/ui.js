const UI = (() => {
  const renderCell = (cell, mark) => {
    cell.classList = `cell marked ${mark}`;
  };

  const resetBoard = (board, cells) => {
    board.classList.add('active');
    cells.forEach((cell) => {
      cell.classList = 'cell unmarked';
    });
  };

  const deactivateBoard = (board) => {
    board.classList.remove('active');
  };

  const getPlayersNames = () => ['player_1', 'player_2'];

  return {
    getPlayersNames,
    renderCell,
    resetBoard,
    deactivateBoard,
  };
})();

export default UI;