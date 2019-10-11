/* eslint-disable import/extensions */
import Player from './lib/player.js';
import UI from './lib/ui.js';
import Game from './lib/game.js';
import Board from './lib/board.js';

const form = UI.getForm();
const cells = UI.getCells();

const p1 = Player('p1');
const p2 = Player('p2');
Game.addPlayers(p1, p2);
UI.updateFormPlaceholders(p1, p2);

const startGame = () => {
  UI.resetBoard();
  UI.updateScore(p1, p2);
  Board.reset();
  Game.reset();
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
        }
      }
    } else {
      startGame();
    }
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name1 = form[1].value;
  const name2 = form[2].value;
  if (name1) p1.setName(name1);
  if (name2) p2.setName(name2);
  form.reset();
  UI.updateFormPlaceholders(p1, p2);
  UI.updateScore(p1, p2);
});

startGame();