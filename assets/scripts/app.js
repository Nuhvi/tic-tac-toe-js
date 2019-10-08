import Board from './lib/board';
import UI from './lib/ui';
import Game from './lib/game';

UI.display(Board.get());
Game.initialize(...UI.getPlayersNames());
