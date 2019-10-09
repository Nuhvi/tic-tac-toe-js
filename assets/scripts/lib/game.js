/* eslint-disable import/extensions */
import Board from './board.js';

const Game = (() => {
  let p1;
  let p2;
  let currentPlayer;
  let movesCount = 0;


  const initializePlayers = (player1, player2) => {
    p1 = player1;
    p2 = player2;
    currentPlayer = p1;
  };

  const getCurrentPlayer = () => {
    return currentPlayer;
  }

  const win = (rowColDiagonals) => {
    return rowColDiagonals.some(x => x.every( x=> x === currentPlayer.mark()) );
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

  const markCell = (cell) => {
    Board.set(cell, currentPlayer.mark());
    if (movesCount < 9) movesCount += 1;
    updateStatus(cell);
    if (status === 'continue') switchPlayer();
  };

  return {
    win,
    initializePlayers,
    markCell,
    getStatus,
    getCurrentPlayer
  };
})();

export default Game;