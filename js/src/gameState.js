class gameState {

  constructor(){
    this.gamePositions = [
      //[R5, R4, R3, R2, R1, R0]
        [0, 0, 0, 0, 0, 0], //c0
        [0, 0, 0, 0, 0, 0], //c1
        [0, 0, 0, 0, 0, 0], //c2
        [0, 0, 0, 0, 0, 0], //c3
        [0, 0, 0, 0, 0, 0], //c4
        [0, 0, 0, 0, 0, 0], //c5
        [0, 0, 0, 0, 0, 0], //c6
      
      ]      
  }

  positionsFilled(indexOfColumn, player){
    //updates an element in an array to fill the position with a player's game peiece
    let i;
    let position = gamePositions[indexOfColumn][i];
    for( i = 0 ; i < 6; i++){
      if(position === 0){
        position = player.number;
      }
    }
  }

  columnFull(column){
    //determines if a column is full
    if(column.includes(0) === False){
      return true;
    }
  }

  isGameOver(){
    //determine if 4 pieces are in a row and returns the winning player
  }
  

}




