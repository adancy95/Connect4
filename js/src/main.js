//creates a new game
let newGame = new gameBoard();


// creates a new player
let p1 = new Player("Ant", 1, true, "green");
let p2 = new Player("noah", 2, false, "red");


let newGameState = new gameState(p1, p2);


newGame.addClickEventToBtns(newGameState);
newGame.drawAllGamePositions(newGameState);
