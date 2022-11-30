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
      var nextGrid = this.grid.slice();//problem?
      for (let row =0; row < this.row; row++){
          for (let col = 0; col < this.col; col++) {
            count = this.neighborCount(row,col);
            if(this.getStatusAt(row,col)==LIVE && (count<2 || count>3)){
                nextGrid[row][col]=DEAD;
            }
            if(this.getStatusAt(row,col)==DEAD && count==3){
                nextGrid[row][col] = LIVE;
            }
          }
      }
      
      this.grid = nextGrid; //duplicate to grid
}

var mygame = new Life(5,5);
console.log(mygame.setStatusAt(1,1,LIVE));
console.log(mygame.setStatusAt(1,2,LIVE));
console.log(mygame.setStatusAt(1,3,LIVE));
console.log(mygame.neighborCount(1,1)); //retur 1
console.log(mygame.neighborCount(1,2)); //retur 2
mygame.update();