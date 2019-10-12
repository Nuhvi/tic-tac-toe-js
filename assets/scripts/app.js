/* eslint-disable import/extensions */
import Player from './lib/player.js';
import UI from './lib/ui.js';
import Game from './lib/game.js';
import Board from './lib/board.js';

let p1 = Player('Player 1', 'x');
let p2 = Player('Player 2', 'o');
const cells = UI.getCells();
const form = document.getElementById('form');

const newGame = () => {
  Board.reset();
  Game.reset(p1, p2);
  UI.resetBoard();
  UI.updatePlayersInfo(p1, p2);
  UI.highlightPlayer('x');
};

const play = (cell) => {
  const cellId = cell.getAttribute('data-id');
  const currentMark = Game.getCurrentPlayer().getMark();

  if (Game.markCell(cellId)) {
    UI.renderCell(cell, currentMark);
    UI.highlightPlayer(Game.getCurrentPlayer().getMark());
    if (!Game.getGameNotOver()) {
      UI.deactivate();
      const winningStreak = Game.getWinningStreak();
      if (winningStreak) {
        UI.updatePlayersInfo(p1, p2);
        UI.colorWinner(winningStreak, currentMark);
      }
      p1.switchMark();
      p2.switchMark();
    }
  }
};

cells.forEach((cell) => {
  cell.addEventListener('click', () => {
    if (Game.getGameNotOver()) {
      play(cell);
    } else {
      newGame();
    }
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name1 = form[0].value || 'Player 1';
  const name2 = form[1].value || 'Player 2';
  form.reset();
  p1 = Player(name1, 'x');
  p2 = Player(name2, 'o');
  newGame();
  UI.updatePlayersInfo(p1, p2);
});

newGame();