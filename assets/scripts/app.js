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

const Player = (_name, _mark, _score = 0) => {
  const name = () => _name;
  const mark = () => _mark;
  const score = () => _score;
  const updateScore = () => _score += 1;
  const changeMark = () => {
    _mark === 0 ? 1 : 0;
  }

  return { name, mark, score, updateScore, changeMark }
}

UI.display(Board.get());
