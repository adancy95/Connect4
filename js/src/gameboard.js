let gameBoard = (function(){

  //Create game piece variables

  //get the canvas
  let ctx = document.getElementById("gameCanvas").getContext("2d");



  //Bind event functions. Add function to event


  //Render the gameboard. Send all results back to the DOM


  //Add functions to the game
  function drawCircle(xCord, yCord){
    //draws a circle on a canvas given the x and y coordinate
    ctx.beginPath();
    ctx.arc(xCord, yCord, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.strokeStyle = "brown";
    ctx.stroke();
  }

  function drawAllGamePositions(){
    //draws the 42 game positions on the board by creating evenly spaced circles in a 6 by 7 grid
    let x = 0;
    let y = 0;
    for(let i = 0; i < 42; i++){
      if(i % 7 === 0){
        x = 125;
        y+=125;
        drawCircle(x, y);
        console.log(`x: ${x}, y: ${y}`)
      } else {
        x+=125;
        drawCircle(x, y);
        console.log(`x: ${x}, y: ${y}`)
      }
    }
  }

  return {
    drawCircle : drawCircle,
    gamePosition: drawAllGamePositions
  }


})();


gameBoard.gamePosition()

