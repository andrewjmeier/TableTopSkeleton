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

function SimpleGame(board, turnMap) {
  TableTop.Game.call(this, board, turnMap);
  this.currentPlayer = 0;
  this.moveType = TableTop.Constants.moveTypeManual;
  this.moveEvaluationType = TableTop.Constants.moveEvalationTypeGameEvaluator;
  
  this.possibleNumPlayers = [2];
  this.showNextPlayerScreen = false;
};

inherits(SimpleGame, TableTop.Game);

/*
  Make the move! Move the token from the previous space to the new space
*/
SimpleGame.prototype.executeMove = function() {  

  console.log(this.proposedMove);
  // store proposedMove data for convenience
  var token = this.proposedMove.token;
  var destination = this.proposedMove.destination;

  // get positions of current token space and the destination
  var oldPosition = this.board.getTilePosition(token.tile);
  var newPosition = this.board.getTilePosition(destination);

  // move the token to the new space and clear proposedMove
  token.moveToTile(destination);
  this.proposedMove = {};
};

/*
  Is it legal for the token to move from the old space to the new space?
*/
SimpleGame.prototype.isValidMove = function(token, oldTile, newTile) { 

  console.log(oldTile, newTile, this.board.tiles);
  var oldPos = this.board.getTilePosition(oldTile);
  var newPos = this.board.getTilePosition(newTile);

  var player = this.getCurrentPlayer();

    /* 
       If we don't own the piece or
       the destination is a red space or 
       the destination is occupied 
       it's not a valid move! 
     */

  if (token.owner != player) {
    return false;
  }

  console.log(newPos, oldPos);

  return newPos.x > oldPos.x;
};

/*
  Given the current state of the game, did someone win?
*/
SimpleGame.prototype.playerDidWin = function(player) {
  var token = player.tokens[0];
  return this.board.getTilePosition(token.tile).x === 9;
};

SimpleGame.prototype.setPlayers = function(players) {
  this.players = players;

  this.board.tokens.forEach(function(token) { 
    var player = token.color == 0xFFFFFF ? players[0] : players[1];
    token.owner = player;
    player.tokens.push(token);
  });
};

module.exports = SimpleGame;