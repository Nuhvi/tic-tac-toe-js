/* eslint-disable import/extensions */
import Player from './lib/player.js';
import UI from './lib/ui.js';
import Game from './lib/game.js';

// listeners for player names

const p1 = Player('player1', 'x');
const p2 = Player('player2', 'o');
Game.initializePlayers(p1, p2);

document.querySelectorAll('.cell').forEach((cell) => {
  cell.addEventListener('click', () => {
    if (Game.getGameNotOver()) {
      const cellId = cell.getAttribute('data-id');
      const lastPlayer = Game.getCurrentPlayer();

      if (Game.markCell(cellId)) UI.renderCell(cellId, lastPlayer.getMark());


      if (!Game.getGameNotOver()) {
        if (Game.getWinningStreak()) {
          lastPlayer.updateScore();
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
