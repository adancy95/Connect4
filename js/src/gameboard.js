class gameBoard{
    //creates a Connect Four GameBoard
    constructor( gameStateObj){
      this.ctx = document.getElementById("gameCanvas").getContext("2d");
      this.x = 0;
      this.y = 0;
      this.speedX = 0;
      this.speedY = 0;    
      this.gravity = 0.05;
      this.gravitySpeed = 0;
      this.gameStateObj = gameStateObj;
      this.color = "white";
      this.active = true;
      this.targetY = 0;
    }

    update(){
      this.updateAllGamePositions()
      this.drawCircle(this.x, this.y, this.color)
    }

    targetPosition(){
      if(this.y > 700){
        console.log(`This.y is ${this.y} and this.target y ${this.targetY}`)
        this.y = this.targetY
        this.active = false;
        this.x = 0;
        this.y = 0;
        this.ctx.clearRect(0, 0, 1000,700);
        this.drawAllGamePositions()
        this.drawCircle(this.x, this.targetY, this.color)
      }
    
    }
  
    newPosition(){
      this.gravitySpeed += this.gravity;
      this.x += this.speedX;
      this.y += this.speedY + this.gravitySpeed;  
      this.targetPosition()
    }
  
    updateGameArea(){
      // // DropCircle from the top of column. 
      // When it reaches the target location
      // change the color of the target circle to the player's circle
      this.ctx.clearRect(0, 0, 1000,700);
      this.newPosition();
      this.update();

     console.log(this.active)
      
      if(this.active){
        requestAnimationFrame(this.updateGameArea.bind(this));
      }
       
      
      
    }
  
  

    drawCircle(xCord, yCord, color){
      //draws a circle on a canvas given the x and y coordinate
      this.ctx.beginPath();
      this.ctx.arc(xCord, yCord, 50, 0, 2 * Math.PI);
      this.ctx.fillStyle = color;
      this.ctx.fill();
      this.ctx.strokeStyle = "brown";
      this.ctx.stroke();
    }
  
    drawAllGamePositions(){
      //draws the 42 game positions on the board by creating evenly spaced circles in a 6 by 7 grid
      let x = 0;
      let y = 0;
      let rowNum = 0;
      
      for(let i = 0; i < 42; i++){
       
        if(i % 7 === 0){
          x = 125;
          y+=125;
          this.drawCircle(x, y, this.color);
          rowNum += 1;
          this.gameStateObj.gamePositions[(i % 7)].push(
            {
              circle: i + 1,
              xLoc: x,
              yLoc: y,
              col: (i % 7) ,
              row: rowNum - 1,
              status: 0,
              color: this.color
            }
          )
          
        } else {
          x+=125;
          this.drawCircle(x, y, this.color);
          this.gameStateObj.gamePositions[[(i % 7)]].push(
            {
              circle: i + 1,
              xLoc: x,
              yLoc: y,
              col: (i % 7),
              row: rowNum - 1,
              status: 0,
              color: this.color
            })
        }
      }

      
      
    }

    updateAllGamePositions(){
      //draws the 42 game positions on the board by creating evenly spaced circles in a 6 by 7 grid
      let x = 0;
      let y = 0;
      for(let i = 0; i < 42; i++){
        if(i % 7 === 0){
          x = 125;
          y+=125;
          this.drawCircle(x, y, this.gameStateObj.gamePositions.color);

        
        } else {
          x+=125;
          this.drawCircle(x, y, this.gameStateObj.gamePositions.color);
        
        }
      }

      
      
    }

   
      


    
    
    
}
      
  

   

   






  