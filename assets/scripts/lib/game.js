import Board from './board.js';

const Game = (() => {
  let p1;
  let p2;
  let currentPlayer;
  let movesCount;
  let winningCompination;
  let gameOver;

  const getCurrentPlayer = () => currentPlayer;
  const getWinningCompination = () => winningCompination;
  const over = () => gameOver;

  const reset = (_p1, _p2) => {
    p1 = _p1;
    p2 = _p2;
    currentPlayer = p1.getMark() === 'x' ? p1 : p2;
    movesCount = 0;
    winningCompination = null;
    gameOver = false;
  };

  const checkWinningCompination = (cellId) => {
    winningCompination = Board.checkWinningCompination(cellId);
    return winningCompination;
  };

  const switchPlayer = () => {
    currentPlayer = currentPlayer === p1 ? p2 : p1;
  };

  const validMove = (cellId) => !Board.getCell(cellId);

  const markCell = (cellId) => {
    if (validMove(cellId)) {
      Board.setCell(cellId, currentPlayer.getMark());
      if (movesCount < 9) movesCount += 1;
      if (checkWinningCompination(cellId) || movesCount >= 9) gameOver = true;
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
    getWinningCompination,
    reset,
    markCell,
  };
})();

export default Game;