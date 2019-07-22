// creates a new player
let p1 = new Player("Ant", 1, true, "rgb(255, 225, 68)");
let p2 = new Player("noah", 2, false, "rgb(140, 82, 255)");

let newGameState = new gameState(p1, p2);



//creates a new game
let newGame = new gameBoard(newGameState);

newGame.drawAllGamePositions();


let colBtns = document.querySelectorAll(".col-selector > button");

  colBtns.forEach(function(button){
    button.addEventListener('click', (e) => {
      //find the first unfilled circle in the column
      let currentCircle = newGameState.findFirstUnfilledCircle(e.target.innerText);
      currentCircle.status = newGameState.getCurrentPlayer().number;
      currentCircle.color = newGameState.getCurrentPlayer().color;
      let currentRow = currentCircle.row;
      let currentCol = currentCircle.col;

      //change the color of the circle to the current player
      newGame.ctx.clearRect(currentCircle.xLoc, currentCircle.yLoc, 40, 40);
      newGame.drawCircle(currentCircle.xLoc, currentCircle.yLoc, currentCircle.color );

      
      //check if there are 4 checkers in a row
      newGameState.checkforWin(newGameState.gamePositions, currentRow , currentCol, currentCircle.status)

      //set a new player if the game is not over
      newGameState.setCurrentPlayer()
      
    });
  })

 


