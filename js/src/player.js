class Player {
   //creates a player object
  constructor(name, number){
    this.name = name;
    this.number = number; //player 1 or 2
    this.score = 0;
    this.turn = false;
  }

  setTurn(){
    //changes the turn to this player
    this.turn = !this.turn;
  }
}



  






