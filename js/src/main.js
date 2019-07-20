// creates a new player
let p1 = new Player("Ant", 1, true, "green");
let p2 = new Player("noah", 2, false, "black");

let newGameState = new gameState(p1, p2);



//creates a new game
let newGame = new gameBoard(newGameState);

newGame.drawAllGamePositions();


let colBtns = document.querySelectorAll(".col-selector > button");

  colBtns.forEach(function(button){
    button.addEventListener('click', (e) => {
      
      let currentCircle = newGameState.findFirstUnfilledCircle(e.target.innerText);
      currentCircle.status = newGameState.getCurrentPlayer().number;
      currentCircle.color = newGameState.getCurrentPlayer().color;
      let currentRow = currentCircle.row;
      let currentCol = currentCircle.col;
      // console.log(`The current row is (${currentCol}, ${currentRow})`)

      newGame.x = currentCircle.xLoc;
      newGame.color = currentCircle.color;
      newGame.targetY = currentCircle.yLoc
      
     
      newGame.ctx.clearRect(0, 0, 1000,700);
    
    
      newGame.updateGameArea()
      newGameState.checkforWin(newGameState.gamePositions, currentRow , currentCol, currentCircle.status)

      newGameState.setCurrentPlayer()
      
    });
  })

 


