class gameState {

  constructor(player1, player2){
    this.gamePositions = [[],[],[],[],[],[],[]];
    this.player1 = player1;
    this.player2 = player2; 
    this.currentPlayer = document.getElementById("current-player");
    this.winner = "";
    this.gameOver = false;
    this.move = 0;
  }

  setCurrentPlayer(){
    //set the current player in the game
    if(this.player1.turn){
      this.player1.turn = false;
      this.player2.turn = true;
      this.currentPlayer.innerText = this.player2.number;
    } else if(this.player2.turn){
      this.player2.turn = false;
      this.player1.turn = true;
      this.currentPlayer.innerText = this.player1.number;
    }
  }

  getCurrentPlayer(){
    //returns the current player
    if(this.player1.turn){
      return this.player1
    } else if(this.player2.turn) {
      return this.player2
    }
  }

  findFirstUnfilledCircle(column){
    //returns the first unfilled circle in the column
      return [...this.gamePositions[column]].reverse().find(circle => circle.status === 0)
    
  }

  matchSubArray(parent, child) {
      //check if there are 4 in a row
      let parentStr = parent.join('');
      let childStr = child.join('');
      return parentStr.indexOf(childStr) != -1;
    }

  verticalWin(col, player){
      //check if there are 4 checkers in a row vertically
      let targetArray = [player,player, player, player]
      let checkCol = this.gamePositions[col].map(col => col.status)
      return this.matchSubArray(checkCol, targetArray);
    }

  horizontalWin(row, player){
      //check if there are 4 checkers in a row horizontally
      let targetArray = [player,player, player, player]
      let checkRow = this.gamePositions.map(col => col[row].status)
      return this.matchSubArray(checkRow, targetArray);
    }

  leftDiagonal(arr, row , col, player){
      //returns the left diagonal array given the index of a point in the array
      let targetArray = [player,player, player, player]
      let leftDiagonalArray = []
    
      while(col > 0  && row < (arr[col].length)-1){
      //traverse the array until the beg
        row+=1;
        col-=1;
      }
      while(col < arr.length && row >= 0 ){
        leftDiagonalArray.push(arr[col][row].status)
        row-=1;
        col+=1;
          
      }
      console.log(leftDiagonalArray)
      return this.matchSubArray(leftDiagonalArray, targetArray);
    }

  rightDiagonal(arr, row , col, player){
      //returns the right diagonal array given the index of a point in the array
  
  
    let targetArray = [player,player, player, player]
    let rightDiagonalArray = []
    
    while(col < arr.length && row < arr[col].length ){
      //traverse the array until the beg
      row+=1;
      col+=1;
    }
    while(col > 0 && row > 0 ){
      row-=1;
      col-=1;
    
      rightDiagonalArray.push(arr[col][row].status)
      
    }
    return this.matchSubArray(rightDiagonalArray, targetArray);
    
  }
  resetGame(){
    this.gamePositions = [[],[],[],[],[],[],[]];
    this.winner = "";
    this.gameOver = false;
  }

  checkforWin(arr, row , col, player){
    let h = this.horizontalWin(row, player);
    let v = this.verticalWin(col, player);
    let ld = this.leftDiagonal(arr, row , col, player);
    let rd = this.rightDiagonal(arr, row , col, player);

    if( h || v || ld ||rd){
      this.gameOver = true;
      this.winner = player
      document.querySelector('.stat').innerText = `Player ${this.winner} Won`;
      document.querySelector('.col-selector').style.visibility = 'hidden';
      document.querySelector('#new-game').style.visibility = 'visible'
      this.resetGame()
      
    } else if( this.move > 40){
      //checks if a game is a stalemate
      document.querySelector('.stat').innerText = `Stalemate`;
      document.querySelector('#new-game').style.visibility = 'visible'
      this.resetGame()
    }
  }
    
 
  

  

}




