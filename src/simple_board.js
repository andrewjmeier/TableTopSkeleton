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
  TableTop.GridBoard.call(this, 10, 2);
  this.buildTiles();
  this.buildTokens();
}

inherits(SimpleBoard, TableTop.GridBoard);

/*
  What tiles does your game board have? What colors are they?
*/
SimpleBoard.prototype.buildTiles = function() {
  var tileColor = 0x324F17;  // a dark green color
  var tile;
  for (var x = 0; x < this.width; x++) {
    for (var y = 0; y < this.height; y++) {
      var num = Math.random();
      tile = new TableTop.Tile({color: tileColor, name: num});
      this.tiles[x][y] = tile;
    }
  } 
};

/*
  What tokens does your game have? What tiles do they go
  on and what players do they belong to?
*/
SimpleBoard.prototype.buildTokens = function() { 

  var player1Start = this.getTile(0, 0);
  this.buildTokenForTile(player1Start, 0x000000);

  var player2Start = this.getTile(0, 1);
  this.buildTokenForTile(player2Start, 0xFFFFFF);

};

SimpleBoard.prototype.buildTokenForTile = function(tile, color) { 
  var token = new TableTop.Token(null, tile, color);
  tile.addOccupier(token);
  this.tokens.push(token);
};

module.exports = SimpleBoard;