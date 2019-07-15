class gameBoard{
    //creates a Connect Four GameBoard
    constructor(){
      this.ctx = document.getElementById("gameCanvas").getContext("2d");
      this.btns = document.querySelectorAll(".col-selector > button");
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
  
    drawAllGamePositions(gameStateObj){
      //draws the 42 game positions on the board by creating evenly spaced circles in a 6 by 7 grid
      let x = 0;
      let y = 0;
      let rowNum = 0;
      for(let i = 0; i < 42; i++){
        if(i % 7 === 0){
          x = 125;
          y+=125;
          this.drawCircle(x, y);
          rowNum += 1;
          gameStateObj.gamePositions[(i % 7)].push(
            {
              circle: i + 1,
              xLoc: x,
              yLoc: y,
              col: (i % 7) ,
              row: rowNum,
              status: 0
            }
          )
        } else {
          x+=125;
          this.drawCircle(x, y);
          gameStateObj.gamePositions[[(i % 7)]].push(
            {
              circle: i + 1,
              xLoc: x,
              yLoc: y,
              col: (i % 7),
              row: rowNum,
              status: 0
            })
        }
      }

      
      
    }

    addCheckerToGrid(){
      //add animation to mimic a player inserting a checker into the grid
    }

    addClickEventToBtns(gameStateObj){
      this.btns.forEach(function(button){
        button.addEventListener('click', function(e){
          //change the status of a particular circle on the board from empty to full
          //associates a player with a circle
          //find the first empty circle in the column
          let currentCircleStatus = gameStateObj.findFirstUnfilledCircle(e.target.innerText);
          currentCircleStatus.status = gameStateObj.getCurrentPlayer().number;

          //add animations to drop the cirlce down the hole.


          //switch current player
          gameStateObj.setCurrentPlayer()

         
          
         
          
          
    
        });
      })

    }
      
  

   

   
}





  