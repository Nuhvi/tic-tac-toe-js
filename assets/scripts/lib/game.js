/* eslint-disable import/extensions */
import Board from './board.js';

const Game = (() => {
  let p1;
  let p2;
  let currentPlayer;
  let movesCount;
  let winningStreak;
  let gameNotOver;

  const initialize = (player1, player2) => {
    p1 = player1;
    p2 = player2;
    currentPlayer = p1;
    movesCount = 0;
    winningStreak = null;
    gameNotOver = true;
  };

  const getCurrentPlayer = () => currentPlayer;
  const getWinningStreak = () => winningStreak;
  const getGameNotOver = () => gameNotOver;

  const threeInRow = (cell) => {
    Board.getRowColDiagonals(cell).forEach((arr) => {
      if (arr.every((el) => Board.getCell(el) === currentPlayer.getMark())) {
        winningStreak = arr;
        // eslint-disable-next-line no-useless-return
        return;
      }
    });
    return winningStreak;
  };


  const switchPlayer = () => {
    currentPlayer = currentPlayer === p1 ? p2 : p1;
  };

  const validMove = (cell) => !Board.getCell(cell);

  const markCell = (cell) => {
    if (validMove(cell)) {
      Board.set(cell, currentPlayer.getMark());
      if (movesCount < 9) movesCount += 1;
      if (movesCount >= 9 || threeInRow(cell)) gameNotOver = false;
      if (gameNotOver) switchPlayer();
      return true;
    }
    return false;
  };


  return {
    initialize,
    markCell,
    getGameNotOver,
    getCurrentPlayer,
    getWinningStreak,
  };
})();

export default Game;