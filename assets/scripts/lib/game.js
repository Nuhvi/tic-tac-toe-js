import Board from './board.js';

const Game = (() => {
  let p1;
  let p2;
  let currentPlayer;
  let movesCount;
  let winningStreak;
  let gameOver;

  const getCurrentPlayer = () => currentPlayer;
  const getWinningStreak = () => winningStreak;
  const over = () => gameOver;

  const reset = (_p1, _p2) => {
    p1 = _p1;
    p2 = _p2;
    currentPlayer = p1.getMark() === 'x' ? p1 : p2;
    movesCount = 0;
    winningStreak = null;
    gameOver = false;
  };

  const threeInRow = (cell) => {
    Board.getRowColDiagonals(cell).some(
      (arr) => arr.every(
        (el) => el === currentPlayer.getMark(),
      ),
    );
    return winningStreak;
  };


  const switchPlayer = () => {
    currentPlayer = currentPlayer === p1 ? p2 : p1;
  };

  const validMove = (cell) => !Board.getCell(cell);

  const markCell = (cell) => {
    if (validMove(cell)) {
      Board.setCell(cell, currentPlayer.getMark());
      if (movesCount < 9) movesCount += 1;
      if (threeInRow(cell) || movesCount >= 9) gameOver = true;
      if (gameOver) {
        currentPlayer.updateScore();
      } else {
        switchPlayer();
      }
      return true;
    }
    return false;
  };


  return {
    over,
    getCurrentPlayer,
    getWinningStreak,
    reset,
    markCell,
  };
})();

export default Game;