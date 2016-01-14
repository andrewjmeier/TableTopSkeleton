var inherits = require('util').inherits;
var TableTop = require('tabletop-boardgames');

/*

  Here we've provided a simple View subclass. 
  To complete the view, explain how to draw a Tile and 
  how to draw a Token. 

  If you're stuck, check out the tutorials on the TableTop.JS
  github page. There's a tutorial explaining how to make this 
  SimpleGame as well as one to make Checkers. 

  Happy Hacking!

*/

function SimpleView(game, turnMap) { 
  TableTop.View.call(this, game, turnMap);
} 

inherits(SimpleView, TableTop.View);

/*
  What does a tile look like? 
*/
SimpleView.prototype.drawTile = function(tile, size) { 

};

/*
  What does a token look like? Note that you could draw different
  things for different tokens in this method
*/
SimpleView.prototype.drawToken = function(token, size) { 

};

module.exports = SimpleView;