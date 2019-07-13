class gameBoard{
    //creates a Connect Four GameBoard
    constructor(){
      this.ctx = document.getElementById("gameCanvas").getContext("2d");
    }

    drawCircle(xCord, yCord){
      //draws a circle on a canvas given the x and y coordinate
      this.ctx.beginPath();
      this.ctx.arc(xCord, yCord, 50, 0, 2 * Math.PI);
      this.ctx.fillStyle = "white";
      this.ctx.fill();
      this.ctx.strokeStyle = "brown";
      this.ctx.stroke();
    }
  
    drawAllGamePositions(){
      //draws the 42 game positions on the board by creating evenly spaced circles in a 6 by 7 grid
      let x = 0;
      let y = 0;
      for(let i = 0; i < 42; i++){
        if(i % 7 === 0){
          x = 125;
          y+=125;
          this.drawCircle(x, y);
        } else {
          x+=125;
          this.drawCircle(x, y);
        }
      }
    }
}





  