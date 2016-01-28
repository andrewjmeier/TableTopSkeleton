// Import the TableTop Framework
var TableTop = require('tabletop-boardgames');

// Import other needed classes
var SimpleGame = require("./simple_game.js");
var SimpleBoard = require("./simple_board.js");
var SimpleView = require("./simple_view.js");

// create the Board, Game, and TurnMap
var board = new SimpleBoard();
var game = new SimpleGame(board);

var view = new SimpleView(game, turnMap);

//create our startView
var startView = new TableTop.StartView(game); 

// create our next player view
var nextPlayerView = new TableTop.NextPlayerView(game);

// create our game over view
var gameOverView = new TableTop.GameOverView(game);

var turnMap = new TableTop.ManualTurn(game, startView, view, gameOverView, nextPlayerView);
game.setTurnMap(turnMap);


// this initiates the TurnMap ("Gameloop") and 
// gets the ball rolling!
game.updateState("start");