let player = (function(){
 //creates a player object
  let name = name;
  let playerScore = score;
  let turn = false;

  function isPlayerTurn(){
    this.turn = true;
  }

  return{
    name: name,
    playerScore: playerScore,
    isPlayerTurn: isPlayerTurn
  }


})(name);