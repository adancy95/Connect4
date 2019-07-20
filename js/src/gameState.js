class gameState {

  constructor(player1, player2){
    this.gamePositions = [[],[],[],[],[],[],[]];
    this.player1 = player1;
    this.player2 = player2; 
    this.currentPlayer = document.getElementById("current-player") ;
    this.winner = "";
    this.gameOver = false;
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


  winner(){
    //vertical
    for(let row = 0; row < 3; row++){
      for(let col = 0; col < 7; col++){
        if(this.gamePositions[row][col].status !== 0 && 
          this.gamePositions[row][col].status === this.gamePositions[row + 1][col].status &&
          this.gamePositions[row][col].status === this.gamePositions[row + 2][col].status &&
          this.gamePositions[row][col].status === this.gamePositions[row + 3][col].status){

            this.winner = this.gamePositions[row][col].status
          }
      }
    }

    //horizontal
    for(let row = 0; row < 5; row++){
      for(let col = 0; col < 4; col++){
        if(this.gamePositions[row][col].status !== 0 && 
          this.gamePositions[row][col].status === this.gamePositions[row][col + 1].status &&
          this.gamePositions[row][col].status === this.gamePositions[row][col + 2].status &&
          this.gamePositions[row][col].status === this.gamePositions[row][col + 3].status){

            this.winner = this.gamePositions[row][col].status
          
          }
      }
    }


    //rightandDown
    for(let row = 0; row < 3; row++){
      for(let col = 0; col < 4; col++){
        if(this.gamePositions[row][col].status !== 0 && 
          this.gamePositions[row][col].status === this.gamePositions[row + 1][col + 1].status &&
          this.gamePositions[row][col].status === this.gamePositions[row + 2][col + 2].status &&
          this.gamePositions[row][col].status === this.gamePositions[row + 3][col + 3].status){

            this.winner = this.gamePositions[row][col].status
          }
      }
    }
  
    //rightAndUp
    for(let row = 3; row < 6; row++){
      for(let col = 0; col < 4; col++){
        if(this.gamePositions[row][col].status !== 0 && 
          this.gamePositions[row][col].status === this.gamePositions[row - 1][col + 1].status &&
          this.gamePositions[row][col].status === this.gamePositions[row - 2][col + 2].status &&
          this.gamePositions[row][col].status === this.gamePositions[row - 3][col + 3].status){

            this.winner = this.gamePositions[row][col].status
        
          }
      }
    }
    this.gameOver = true;
    return this.winner.bind(this)


  }
  
 
  

  

}




