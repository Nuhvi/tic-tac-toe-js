/* eslint-disable import/extensions */
import Player from './lib/player.js';
import UI from './lib/ui.js';
import Game from './lib/game.js';



// Tests
// Game.initializePlayers(Player('P1', 0), Player('P2', 1));
// Game.win(Board.getRowColDiagonals(0));

//

// Initiate Players names
// const p1 = Player(UI.getPlayersNames[0], 0);

// loop
// while Game.status == continue
//   getCell > from UI
//   Game.next(getcell, Board)
// }

// cheack Game.status
//  if draw do something with UI.draw
//  if Win UI.win()
//  player score


// if playagain :
//  p1 = (Game.playersNames[0])
//  p2 = (Game.playersNames[1])
// end

if (Game.status === 'win') Game.currentPlayer.updateScore();


UI.renderCell(3, 'X');
Game.initialize(...UI.getPlayersNames());
