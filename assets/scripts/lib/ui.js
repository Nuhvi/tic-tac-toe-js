const UI = (() => {
  const board = document.getElementById('board');
  const cells = Array.from(board.children);
  const playersInfo = document.getElementById('players-info');
  const form = document.getElementById('form');

  const getCells = () => cells;
  const getForm = () => form;

  const updateFormPlaceholders = (p1, p2) => {
    form[0].placeholder = p1.getName();
    form[1].placeholder = p2.getName();
  };

  const renderCell = (cell, mark) => {
    cell.classList = `cell marked ${mark}`;
  };

  const resetBoard = () => {
    board.classList.add('active');
    cells.forEach((cell) => {
      cell.classList = 'cell unmarked';
    });
  };

  const tie = () => {
    board.classList.remove('active');
    playersInfo.classList = 'tie';
  };

  const updatePlayersInfo = (p1, p2) => {
    playersInfo.innerHTML = `
    <div id="p1" class="activator">
      <span class="activator">${p1.getMark()}</span>
      <span class="activator">${p1.getName()}</span>
      <span class="activator">${p1.getScore()}</span>
    </div>
    <i class="material-icons ">tonality</i>
    <div id="p2" class="activator">
      <span class="activator">${p2.getMark()}</span>
      <span class="activator">${p2.getName()}</span>
      <span class="activator">${p2.getScore()}</span>
    </div>`;
  };

  const highlightPlayer = (currentPlayer) => {
    playersInfo.classList = `play ${currentPlayer.getType()}`;
  };

  const colorWinner = (winningStreak, winnerPlayer) => {
    winningStreak.forEach((i) => {
      cells[i].classList.add('win');
    });

    playersInfo.classList = `win ${winnerPlayer.getType()}`;
  };

  return {
    getCells,
    getForm,
    updateFormPlaceholders,
    renderCell,
    resetBoard,
    tie,
    updatePlayersInfo,
    highlightPlayer,
    colorWinner,
  };
})();

export default UI;