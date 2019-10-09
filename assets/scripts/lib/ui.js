const UI = (() => {
  const renderBoard = (board) => {
    let html = '';
    board.forEach((row) => {
      row.forEach((cell) => {
        html += `<div class="cell" data-id="${cellId}">${cell}</div>`;
      });
    });
    return html;
  };

  const display = (board) => {
    document.getElementById('board').innerHTML = renderBoard(board);
  };
  const getPlayersNames = () => ['player_1', 'player_2'];
  return {
    getPlayersNames,
    display,
  };
})();

export default UI;
