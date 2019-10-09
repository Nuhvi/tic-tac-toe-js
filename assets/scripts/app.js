/* eslint-disable import/extensions */
import Board from './lib/board.js';
import UI from './lib/ui.js';
import Game from './lib/game.js';

UI.display(Board.get());
Game.initialize(...UI.getPlayersNames());
