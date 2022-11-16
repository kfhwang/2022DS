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

var exitX=8, exitY=10; //終點
var stack=[];

class Point{
    constructor(_x,_y){
        this.x = _x;
        this.y = _y;
    }
}

var x=1, y=1; //start point

while(x!=exitX || y!=exitY){
    MAZE[x][y]=2;
    //Up
    if(MAZE[x-1][y]==0){
         stack.push(new Point(x,y));
         x=x-1;
    }
    //Left
    else if(MAZE[x][y-1]==0){
        stack.push(new Point(x,y));
         y=y-1;
    }
    //Down
    else if(MAZE[x+1][y]==0){
        stack.push(new Point(x,y));
         x=x+1;
    }
    //Right
    else if(MAZE[x][y+1]==0){
        stack.push(new Point(x,y));
         y=y+1;
    }
    //back to previous step
    else{
        if(stack.length>0){
            var prev = stack.pop();
            x = prev.x;
            y = prev.y;
        }
        else
            break;
    }
}
if(stack.length>0){
    stack.push(new Point(x,y));
    console.log(JSON.stringify(stack));
}else{
    console.log("No solution!")
}
