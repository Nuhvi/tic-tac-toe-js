/* eslint-disable import/extensions */
import Player from './lib/player.js';
import UI from './lib/ui.js';
import Game from './lib/game.js';

// listeners for player names
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const names = [...form.elements].map((element) => element.value);
  form.reset();

  let p1 = Player(names[0], 'x');
  let p2 = Player(names[1], 'o');
  
  Game.initializePlayers(p1, p2);
  console.log(Game.getCurrentPlayer().getName());
});


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
