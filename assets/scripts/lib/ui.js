const UI = (() => {
  const renderBoard = (board) => {
    let html = '<table>';
    board.forEach((row) => {
      html += '<tr>';
      row.forEach((cell) => {
        html += `<td>${cell}</td>`;
      });
      html += '</tr>';
    });
    return `${html}</table>`;
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
