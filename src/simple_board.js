var TableTop = require('tabletop-boardgames');
var inherits = require('util').inherits;

/*

  Here we've provided a simple Board subclass. 
  To complete the board, determine the dimensions 
  of the board (width and height). Then complete the 
  buildTiles and buildTokens methods to add the individual
  tiles to the board as well as the player tokens.

  If you're stuck, check out the tutorials on the TableTop.JS
  github page. There's a tutorial explaining how to make this 
  SimpleGame as well as one to make Checkers. 

  Happy Hacking!

*/

function SimpleBoard() { 
  TableTop.GridBoard.call(this, width, height);
}

inherits(SimpleBoard, TableTop.GridBoard);

/*
  What tiles does your game board have? What colors are they?
*/
SimpleBoard.prototype.buildTiles = function() {

};

/*
  What tokens does your game have? What tiles do they go
  on and what players do they belong to?
*/
SimpleBoard.prototype.buildTokens = function() { 

};

module.exports = SimpleBoard;