const UI = (() => {
  const board = document.getElementById('board');
  const cells = Array.from(board.children);
  const playersInfo = document.getElementById('players-info');

  const getCells = () => cells;

  const renderCell = (cellId, mark) => {
    cells[cellId].classList = `cell marked ${mark}`;
  };

  const resetBoard = () => {
    board.classList.add('active');
    cells.forEach((cell) => {
      cell.classList = 'cell unmarked';
    });
  };

  const deactivate = () => {
    board.classList.remove('active');
    playersInfo.classList = 'tie';
  };

  const renderPlayerInfo = (p) => `
    <div class="${p.getMark()}">
      <span class="mark"></span>
      <span >${p.getName()}</span>
      <span >${p.getScore()}</span>
    </div>`;

  const updatePlayersInfo = (p1, p2) => {
    playersInfo.innerHTML = `
      ${renderPlayerInfo(p1)}
      <i class="material-icons ">tonality</i>
      ${renderPlayerInfo(p2)}
    `;
  };

  const highlightPlayer = (currentMark) => {
    playersInfo.classList = `play ${currentMark}`;
  };

  const colorWinner = (winningStreak, winnerMark) => {
    winningStreak.forEach((i) => {
      cells[i].classList.add('win');
    });

    playersInfo.classList = `win ${winnerMark}`;
  };

  return {
    getCells,
    renderCell,
    resetBoard,
    deactivate,
    updatePlayersInfo,
    highlightPlayer,
    colorWinner,
  };
})();

export default UI;