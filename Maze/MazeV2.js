class Point {
    constructor(_row, _col) {
        this.row = _row;
        this.col = _col;
    }
}

function drawBoard(_board){
    var canvas = document.getElementById("board").getContext("2d");
    
    for (let row = 0; row < _board.length; row++) {
        for (let col = 0; col < _board[0].length; col++) {
            if(_board[row][col]==0){
                canvas.fillStyle = "#fff"; //0-> #fff  1->#000 2->#333
                
            }else if(_board[row][col]==1){
                canvas.fillStyle = "#000"; //0-> #fff  1->#000 2->#333

            }else if(_board[row][col]==2){
                canvas.fillStyle = "#ff0000"; //0-> #fff  1->#000 2->#333

            }
            canvas.fillRect(col*50, row*50, 50, 50);
        }
        
    }

}


function goMaze(_maze, start, exit) {
    var row = start.row, col = start.col; //start point
    var exitRow = exit.row, exitCol = exit.col; //終點
    var stack = [];
    while (row != exitRow || col != exitCol) {
        drawBoard(_maze);
        _maze[row][col] = 2;
        //Up
        if (_maze[row - 1][col] == 0) {
            stack.push(new Point(row, col));
            row = row - 1;
        }
        //Left
        else if (_maze[row][col - 1] == 0) {
            stack.push(new Point(row, col));
            col = col - 1;
        }
        //Down
        else if (_maze[row + 1][col] == 0) {
            stack.push(new Point(row, col));
            row = row + 1;
        }
        //Right
        else if (_maze[row][col + 1] == 0) {
            stack.push(new Point(row, col));
            col = col + 1;
        }
        //back to previous step
        else {
            if (stack.length > 0) {
                var prev = stack.pop();
                row = prev.row;
                col = prev.col;
            }
            else
                break;
        }
    }
    if (stack.length > 0) {
        stack.push(new Point(row, col));
        console.log(JSON.stringify(stack));
    } else {
        console.log("No solution!")
    }
}

var MAZE = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

//goMaze(MAZE, new Point(1, 1), new Point(8, 10));

var MAZE2 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    [1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];


function go(){
    goMaze(MAZE2, new Point(1, 1), new Point(10, 10));
}