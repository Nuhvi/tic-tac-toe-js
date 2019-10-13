import Player from './lib/player.js';
import UI from './lib/ui.js';
import Board from './lib/board.js';
import Game from './lib/game.js';
import Bot from './lib/bot.js';

let p1 = Player('Player 1', 'x');
let p2 = Player('normal bot', 'o');
const cells = UI.getCells();
const form = document.getElementById('form');
const singlePlayer = true;

const newGame = () => {
  Board.reset();
  Game.reset(p1, p2);
  UI.resetBoard();
  UI.updatePlayersInfo(p1, p2);
  UI.highlightPlayer('x');
};

const thinkForSeconds = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

const play = async (cellId) => {
  if (cellId === 'fromBot') {
    await thinkForSeconds(200);
    cellId = Bot.pickMove(Board.getState(), p2.getMark());
  }
  console.log(Board.getState());

  const currentMark = Game.getCurrentPlayer().getMark();

  if (Game.markCell(cellId)) {
    UI.renderCell(cellId, currentMark);
    UI.highlightPlayer(Game.getCurrentPlayer().getMark());

    if (Game.over()) {
      UI.deactivate();
      const winningCompination = Game.getWinningCompination();

      if (winningCompination) {
        UI.updatePlayersInfo(p1, p2);
        UI.colorWinner(winningCompination, currentMark);
      }
      p1.switchMark();
      p2.switchMark();
    } else if (
      singlePlayer && Game.getCurrentPlayer() === p2
    ) play('fromBot');
  }
};


cells.forEach((cell) => {
  cell.addEventListener('click', () => {
    if (Game.over()) {
      newGame();
      if (singlePlayer && p2.getMark() === 'x') play('fromBot');
    } else {
      play(cell.getAttribute('data-id'));
    }
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name1 = form[0].value || 'player 1';
  const name2 = form[1].value || 'player 2';
  form.reset();
  p1 = Player(name1, 'x');
  p2 = Player(name2, 'o');
  newGame();
  UI.updatePlayersInfo(p1, p2);
});

newGame();