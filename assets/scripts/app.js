/* eslint-disable import/extensions */
import Player from './lib/player.js';
import UI from './lib/ui.js';
import Game from './lib/game.js';
import Board from './lib/board.js';

let p1;
let p2;
const cells = UI.getCells();
const form2 = document.getElementById('form-two-p');

const newPlayers = () => {
  p1 = Player('p1');
  p2 = Player('p2');
  Game.addPlayers(p1, p2);
};

const newGame = () => {
  Board.reset();
  Game.reset();
  UI.resetBoard();
  UI.updatePlayersInfo(p1, p2);
  UI.highlightPlayer(Game.getCurrentPlayer());
};

const start = () => {
  newPlayers();
  newGame();
};

const play = (cell) => {
  const cellId = cell.getAttribute('data-id');
  const lastPlayer = Game.getCurrentPlayer();

  if (Game.markCell(cellId)) UI.renderCell(cell, lastPlayer.getMark());

  if (Game.getGameNotOver()) {
    UI.highlightPlayer(Game.getCurrentPlayer());
  } else {
    UI.deactivate();
    const winningStreak = Game.getWinningStreak();
    if (winningStreak) {
      lastPlayer.updateScore();
      UI.updatePlayersInfo(p1, p2);
      UI.colorWinner(winningStreak, lastPlayer);
    }
    p1.switchMark();
    p2.switchMark();
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

form2.addEventListener('submit', (e) => {
  e.preventDefault();
  const name1 = form2[0].value;
  const name2 = form2[1].value;
  form2.reset();
  start();
  if (name1) p1.setName(name1);
  if (name2) p2.setName(name2);
  UI.updatePlayersInfo(p1, p2);
});

start();