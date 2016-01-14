// Import the TableTop Framework
var TableTop = require('tabletop-boardgames');

// Import other needed classes
var SimpleGame = require("./simple_game.js");
var SimpleBoard = require("./simple_board.js");
var SimpleView = require("./simple_view.js");

// create the players
var playerOne = new TableTop.Player("Alice", 1);
var playerTwo = new TableTop.Player("Bob", 2);
var players = [playerOne, playerTwo];

// create the Board, Game, and TurnMap
var board = new SimpleBoard();
var game = new SimpleGame(players, board);
var turnMap = new TableTop.ManualTurn(game);
game.setTurnMap(turnMap);

// create our view, and draw it
var view = new SimpleView(game, turnMap);
view.drawBoard();

// this initiates the TurnMap ("Gameloop") and 
// gets the ball rolling!
game.updateState("start");