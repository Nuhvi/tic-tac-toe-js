'use-strict';

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
