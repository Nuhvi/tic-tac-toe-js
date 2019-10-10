const UI = (() => {
  const score = document.getElementById('score');

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

  const updateScore = (p1, p2) => {
    score.innerHTML = `<span> ${p1.getName()} </span>

    <span>${p1.getScore()}</span> <span>${p2.getScore()}</span>

    <span>${p2.getName()} </span>`;
  };

  return {
    renderCell,
    resetBoard,
    deactivateBoard,
    updateScore,
  };
})();

export default UI;