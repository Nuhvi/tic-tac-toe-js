import Board from './board.js';

const Game = (() => {
  let p1;
  let p2;
  let currentPlayer;
  let winningCompination;
  let gameOver;

  const getCurrentPlayer = () => currentPlayer;
  const getWinningCompination = () => winningCompination;
  const isOver = () => gameOver;

  const reset = (_p1, _p2) => {
    p1 = _p1;
    p2 = _p2;
    currentPlayer = p1.getMark() === 'x' ? p1 : p2;
    winningCompination = null;
    gameOver = false;
  };

  const gameIsWon = (cellId) => {
    winningCompination = Board.winningCompination(cellId);
    return winningCompination;
  };

  const switchPlayer = () => {
    currentPlayer = currentPlayer === p1 ? p2 : p1;
  };

  const markCell = (cellId) => {
    if (Board.getMarkedCells().includes(cellId)) return false;

    Board.setCell(cellId, currentPlayer.getMark());
    if (Board.getMarkedCells().length >= 9 || gameIsWon(cellId)) {
      gameOver = true;
    }
    if (winningCompination) {
      currentPlayer.updateScore();
    } else {
      switchPlayer();
    }
    return true;
  };

  return {
    isOver,
    getCurrentPlayer,
    getWinningCompination,
    reset,
    markCell,
  };
})();

export default Game;