/* eslint-disable import/extensions */
import Player from './lib/player.js';
import UI from './lib/ui.js';
import Game from './lib/game.js';
import Board from './lib/board.js';

let p1;
let p2;
const form = document.getElementById('form');
const cells = UI.getCells();

const startGame = () => {
  UI.resetBoard();
  UI.updateScore(p1, p2);
  Board.reset();
  Game.initialize(p1, p2);
};

cells.forEach((cell) => {
  cell.addEventListener('click', () => {
    if (Game.getGameNotOver()) {
      const cellId = cell.getAttribute('data-id');
      const lastPlayer = Game.getCurrentPlayer();

      if (Game.markCell(cellId)) UI.renderCell(cell, lastPlayer.getMark());

      if (!Game.getGameNotOver()) {
        UI.deactivateBoard();
        const winningStreak = Game.getWinningStreak();
        if (winningStreak) {
          lastPlayer.updateScore();
          UI.updateScore(p1, p2);
          UI.colorWinner(winningStreak);
        } else {
          console.log('Tie');
        }
      }
    }
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const names = [...form.elements].map((element) => element.value);
  form.reset();

  p1 = Player(names[1] === '' ? 'Player 1' : names[1], 'x');
  p2 = Player(names[2] === '' ? 'Player 2' : names[2], 'o');

  startGame();
});