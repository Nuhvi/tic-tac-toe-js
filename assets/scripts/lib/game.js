/* eslint-disable import/extensions */
import Board from './board.js';

const Game = (() => {
  let p1;
  let p2;
  let currentPlayer;
  let movesCount = 0;
  let winningStreak;


  const initializePlayers = (player1, player2) => {
    p1 = player1;
    p2 = player2;
    currentPlayer = p1;
  };

  const getCurrentPlayer = () => currentPlayer;
  const getWinningStreak = () => winningStreak;

  const threeInRow = (cell) => {
    Board.getRowColDiagonals(cell).forEach((arr) => {
      if (arr.every((el) => Board.get()[el] === currentPlayer.mark())) {
        winningStreak = arr;
        // eslint-disable-next-line no-useless-return
        return;
      }
    });
    return winningStreak;
  };

  let status = 'continue';
  const getStatus = () => status;
  const updateStatus = (cell) => {
    if (movesCount >= 9) status = 'draw';
    if (threeInRow(cell)) status = 'win';
  };

  const switchPlayer = () => {
    currentPlayer = currentPlayer === p1 ? p2 : p1;
  };

  const markCell = (cell) => {
    Board.set(cell, currentPlayer.mark());
    if (movesCount < 9) movesCount += 1;
    updateStatus(cell);
    if (status === 'continue') switchPlayer();
  };

  return {
    initializePlayers,
    markCell,
    getStatus,
    getCurrentPlayer,
    getWinningStreak,
  };
})();

export default Game;