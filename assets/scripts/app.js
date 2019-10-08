'use-strict';

const Board = (() => {
  const state = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const get = () => state;

  const set = (row, column, mark) => {
    state[row][column] = mark;
  };

  return {
    get,
    set,
  };
})();

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

  return {
    display,
  };
})();

UI.display(Board.get());