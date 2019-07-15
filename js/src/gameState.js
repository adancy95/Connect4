class gameState {

  constructor(player1, player2){
    this.gamePositions = [[],[],[],[],[],[],[]];
    this.player1 = player1;
    this.player2 = player2; 
    this.currentPlayer = document.getElementById("current-player")   
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

  columnFull(column){
    //determines if a column is full
    if(column.includes(0) === false){
      return true;
    }
  }

  isGameOver(){
    //determine if 4 pieces are in a row and returns the winning player
  }
  

}




