var ary=[1,2,3]//1x3
var ary2=[
    [1,2,3],
    [4,5,6],
    [7,8,9]] //3x3
//ary2=[1,2,3,4,5,6,7,8,9]
console.log(ary[0]);
console.log(ary2[0][0]);

var row=3, col=3;
var ary3=[];
for (let r = 0; r < row; r++) {
    ary3.push([])
    for (let c = 0; c < col; c++) {
        //ary3[r][c] = r*col+c+1;
        ary3[r][c] = r+c*row+1;
    }
}

