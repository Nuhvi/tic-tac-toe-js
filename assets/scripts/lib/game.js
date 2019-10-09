/* eslint-disable import/extensions */
import Board from './board.js';

const Game = (() => {
  let p1 = null;
  let p2 = null;
  let currentPlayer = p1;


  const initializePlayers = (player1, player2) => {
    p1 = player1;
    p2 = player2;
  };

  let movesCount = 0;

  const win = (rowColDiagonals) => {
    rowColDiagonals.forEach((arr) => {
      if (arr.filter((x) => x === currentPlayer.mark).length) {
        return true;
      }
      return false;
    });
  };

  let status = 'continue';
  const getStatus = () => status;
  const updateStatus = (cell) => {
    if (movesCount >= 9) status = 'draw';
    if (win(Board.getRowColDiagonals(cell))) status = 'win';
  };

  const switchPlayer = () => {
    currentPlayer = currentPlayer === p1 ? p2 : p1;
  };

  const MarkCell = (cell) => {
    Board.set(cell, currentPlayer.mark());
    if (movesCount < 9) movesCount += 1;
    updateStatus(cell);
    if (status === 'continue') switchPlayer();
  };

  return {
    initializePlayers,
    MarkCell,
    getStatus,
    currentPlayer,
  };
})();

export default Game;