var  MAZE= [
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,1,1,1,1,1,1,1,1],
    [1,1,1,0,1,1,0,0,0,0,1,1],
    [1,1,1,0,1,1,0,1,1,0,1,1],
    [1,1,0,0,0,0,0,1,1,0,1,1],
    [1,1,1,0,1,1,0,1,1,0,1,1],
    [1,1,1,0,1,1,0,1,1,0,1,1],
    [1,1,1,1,1,1,0,1,1,0,1,1],
    [1,1,0,0,0,0,0,0,1,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1]
]; 

var exitRow=8, exitCol=10; //終點
var stack=[];

class Point{
    constructor(_row,_col){
        this.row = _row;
        this.col = _col;
    }
}

var row=1, col=1; //start point

while(row!=exitRow || col!=exitCol){
    MAZE[row][col]=2;
    //Up
    if(MAZE[row-1][col]==0){
         stack.push(new Point(row,col));
         row=row-1;
    }
    //Left
    else if(MAZE[row][col-1]==0){
        stack.push(new Point(row,col));
         col=col-1;
    }
    //Down
    else if(MAZE[row+1][col]==0){
        stack.push(new Point(row,col));
         row=row+1;
    }
    //Right
    else if(MAZE[row][col+1]==0){
        stack.push(new Point(row,col));
         col=col+1;
    }
    //back to previous step
    else{
        if(stack.length>0){
            var prev = stack.pop();
            row = prev.row;
            col = prev.col;
        }
        else
            break;
    }
}
if(stack.length>0){
    stack.push(new Point(row,col));
    console.log(JSON.stringify(stack));
}else{
    console.log("No solution!")
}
