
let newGameBtn = document.querySelector('#new-game')
newGameBtn.addEventListener('click', e => {

  document.querySelector('.stat').innerHTML =`Player <span id="current-player">1</span>'s Turn`;
  //start the game
  startGame()

  document.querySelector('.col-selector').style.visibility = 'visible';

  //disable the new game button
  newGameBtn.style.visibility = 'hidden';
  

})


function startGame(){

  // creates a new player
  let p1 = new Player("Ant", 1, true, "rgb(255, 225, 68)");
  let p2 = new Player("noah", 2, false, "rgb(140, 82, 255)");

  //creates a new game state
  let newGameState = new gameState(p1, p2);

  //creates a new game
  let newGame = new gameBoard(newGameState);

  //add all of the game pieces to the board
  newGame.drawAllGamePositions();

  //add a circle to the board when a user selects a column on the grid
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
        newGameState.move += 1;
        
      });
    })


}
