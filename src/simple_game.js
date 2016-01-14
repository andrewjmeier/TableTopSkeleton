var TableTop = require('tabletop-boardgames');
var inherits = require('util').inherits;

/*

  Here we've provided a simple Game subclass. 
  To complete the game, you will need to fill in 
  executeMove, isValidMove, and playerDidWin to fit the logic
  of your game. 

  If you're stuck, check out the tutorials on the TableTop.JS
  github page. There's a tutorial explaining how to make this 
  SimpleGame as well as one to make Checkers. 

  Happy Hacking!

*/

function SimpleGame(players, board, turnMap) {
  TableTop.Game.call(this, players, board, turnMap);
};

inherits(SimpleGame, TableTop.Game);

/*
  Make the move! Move the token from the previous space to the new space
*/
SimpleGame.prototype.executeMove = function() {  

};

/*
  Is it legal for the token to move from the old space to the new space?
*/
SimpleGame.prototype.isValidMove = function(token, oldSpace, newSpace) { 

};

/*
  Given the current state of the game, did someone win?
*/
SimpleGame.prototype.playerDidWin = function(player) {

};

module.exports = SimpleGame;