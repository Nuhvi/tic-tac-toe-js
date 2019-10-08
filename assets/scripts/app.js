import Board from './lib/board.js';
import UI from './lib/ui.js';
import Game from './lib/game.js';

UI.display(Board.get());
UI.display(Board.set(1,1,0));
Game.initialize(...UI.getPlayersNames());
