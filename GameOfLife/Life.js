const LIVE = 1;
const DEAD = 0;

class Life{
    constructor(_row, _col){
        this.grid = [];
        this.row = _row;
        this.col = _col;
        for (let r = 0; r < _row; r++) {
            this.grid.push(new Array())
            for (let c = 0; c < _col; c++) {
                this.grid[r][c] = DEAD;
            }
        }
    }    
}

Life.prototype.getStatusAt = function(row, col){
    if(row < 0 || col <0 || row>=this.row || col>=this.col)
       return DEAD;
    else
        return this.grid[row][col];
        
}

Life.prototype.neighborCount = function(row, col){
     
    var count = 0;
    count += this.getStatusAt(row-1 , col-1) // Left up
    count += this.getStatusAt(row , col-1) // Left 
    count += this.getStatusAt(row+1 , col-1) // Left down

    count += this.getStatusAt(row-1 , col) // up
    count += this.getStatusAt(row+1, col) // down

    count += this.getStatusAt(row-1 , col+1) // roght up
    count += this.getStatusAt(row , col+1) // right
    count += this.getStatusAt(row+1 , col+1) // right down

    return count;
}

Life.prototype.setStatusAt = function(row, col, status){
   if(row < 0 || col <0 || row>=this.grid.length || col>=this.grid[0].length){
     return false;
   }else{
       this.grid[row][col] = status;
       return true;
   }
}

Life.prototype.update = function(){
      var count = 0;
      //var nextGrid = this.grid.slice();//problem?
      var nextGrid =  JSON.parse(JSON.stringify(this.grid));//JSON
      for (let row =0; row < this.row; row++){
          for (let col = 0; col < this.col; col++) {
            count = this.neighborCount(row,col);
            if(this.getStatusAt(row,col)==LIVE && (count<2 || count>3)){
                nextGrid[row][col]=DEAD;
            }
            if(this.getStatusAt(row,col)==DEAD && (count==2 || count==3)){
                nextGrid[row][col] = LIVE;
            }
          }
      }
      
      this.grid = nextGrid; //duplicate to grid
}

Life.prototype.initialize = function(){
    this.setStatusAt(1,1,LIVE);
    this.setStatusAt(1,2,LIVE);
    this.setStatusAt(1,3,LIVE);
}

class Board{
    constructor(_life, _canvasID){
        this.game = _life;
        this.canvas = document.getElementById( _canvasID).getContext("2d");
        this.size = document.getElementById( _canvasID).width/this.game.col;
        this.canvas.lineWidth = 0.5;
        this.canvas.lineStyle = "#000";
    }
    draw(){
        var color=["#f00","#0f0","#00f","#ff0"]
        for (let row = 0; row < this.game.row; row++) {
            for (let col = 0; col < this.game.col; col++) {
                if(this.game.grid[row][col]==LIVE){

                    this.canvas.fillStyle = color[Math.floor(Math.random()*4)]; 
                    
                }else if(this.game.grid[row][col]==DEAD){
                    this.canvas.fillStyle = "#fff"; 
    
                }
                this.canvas.fillRect(col*this.size, row*this.size, this.size, this.size);
                this.canvas.strokeRect(col*this.size, row*this.size, this.size, this.size);
            }
        }
    }

    drawPoint(row, col){
        if(this.game.grid[row][col]==LIVE){
            this.canvas.fillStyle = "#f00"; 
            
        }else if(this.game.grid[row][col]==DEAD){
            this.canvas.fillStyle = "#fff"; 

        }
        this.canvas.fillRect(col*this.size, row*this.size, this.size, this.size);
        this.canvas.strokeRect(col*this.size, row*this.size, this.size, this.size);
    }
}



var mygame = new Life(100,100);
mygame.initialize();

var myBoard = new Board(mygame, "board");
myBoard.draw();

// console.log(mygame.setStatusAt(1,1,LIVE));
// console.log(mygame.setStatusAt(1,2,LIVE));
// console.log(mygame.setStatusAt(1,3,LIVE));

// mygame.update();

// var mygame2 = new Life(7,7);
// mygame2.initialize()
 function next(){
     mygame.update();
     myBoard.draw();
 }

 function canvasClick(event){
    var row = Math.floor(event.offsetY / myBoard.size);
    var col = Math.floor(event.offsetX / myBoard.size);
    if(mygame.getStatusAt(row,col) == LIVE){
        mygame.setStatusAt(row,col, DEAD);
    }else{
        mygame.setStatusAt(row,col, LIVE);
    }
    myBoard.drawPoint(row,col);
 }
 function rand(){
    for (let row = 0; row < mygame.row; row++) {
        for (let col = 0; col < mygame.col; col++) {
            if(Math.random()<0.01)
                mygame.grid[row][col]=LIVE;
            else
                mygame.grid[row][col]=DEAD;
        }
    }
    myBoard.draw();
 }

 var timer;

 function run(){
      timer = setInterval(next, 200);
      document.getElementById("btnRun").disabled = true;
      document.getElementById("btnStop").disabled = false;
 }

 function stop(){
      clearInterval(timer);
      document.getElementById("btnRun").disabled = false;
      document.getElementById("btnStop").disabled = true;
 }