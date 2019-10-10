/* eslint-disable import/extensions */
import Player from './lib/player.js';
import UI from './lib/ui.js';
import Game from './lib/game.js';
import Board from './lib/board.js';

// listeners for player names

let p1;
let p2;
const form = document.getElementById('form');
const board = document.getElementById('board');
const cells = Array.from(board.children);

const startGame = () => {
  UI.resetBoard(board, cells);
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
        UI.deactivateBoard(board);
        if (Game.getWinningStreak()) {
          lastPlayer.updateScore();
          UI.updateScore();
          console.log(p1.getScore());
          console.log(p2.getScore());
          console.log(Game.getWinningStreak());
        } else {
          console.log(p1.getScore());
          console.log(p2.getScore());
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

  p1 = Player(names[0] === '' ? 'Player 1' : names[0], 'x');
  p2 = Player(names[0] === '' ? 'Player 2' : names[0], 'o');

  startGame();
});