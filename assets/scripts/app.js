import Player from './lib/player.js';
import UI from './lib/ui.js';
import Board from './lib/board.js';
import Game from './lib/game.js';
import Bot from './lib/bot.js';
import Sfx from './lib/sfx.js';


let p1 = Player('Player 1', 'x');
let p2 = Player('normal bot', 'o');
const cells = UI.getCells();
const form = document.getElementById('form');
let singlePlayer = true;
Sfx.initialize();

const newGame = () => {
  Board.reset();
  Game.reset(p1, p2);
  UI.resetBoard();
  UI.updatePlayersInfo(p1, p2);
  UI.highlightPlayer('x');
};

const play = (cellId) => {
  const currentMark = Game.getCurrentPlayer().getMark();
  if (Game.markCell(cellId)) {
    if (currentMark === 'x') {
      Sfx.tick();
    } else {
      Sfx.tock();
    }
    UI.renderCell(cellId, currentMark);
    UI.highlightPlayer(Game.getCurrentPlayer().getMark());

    if (Game.isOver()) {
      UI.deactivate();
      const winningCompination = Game.getWinningCompination();

      if (winningCompination) {
        UI.updatePlayersInfo(p1, p2);
        UI.colorWinner(winningCompination, currentMark);
      }
      p1.switchMark();
      p2.switchMark();
    }
  }
};

const thinkForSeconds = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const playBot = async () => {
  if (singlePlayer) {
    await thinkForSeconds(200);
    const cellId = Bot.pickMove(p2.getMark());
    play(cellId);
  }
};

cells.forEach((cell) => {
  cell.addEventListener('click', () => {
    if (Game.isOver()) {
      newGame();
      if (p2.getMark() === 'x') playBot();
    } else {
      play(cell.getAttribute('data-id'));
      if (!Game.isOver()) playBot();
    }
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name1 = form[1].value || 'player 1';
  p1 = Player(name1, 'x');

  singlePlayer = !form[0].checked;
  if (singlePlayer) {
    p2 = Player(form[3].value, 'o');
    Bot.setDifficulty(form[4].value);
  } else {
    const name2 = form[2].value || 'player 2';
    p2 = Player(name2, 'o');
  }
  newGame();
  UI.updatePlayersInfo(p1, p2);
});

newGame();
