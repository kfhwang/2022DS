var readline = require("readline-sync");

var currentFloor=5; //
var targetFloor; //
const top=6; //
const bottom=1; //

do{
    targetFloor = readline.question("Elevator now at "+ currentFloor+". Ur target?");
    //bottom <= targetFloor <=top ?
    if(targetFloor>=bottom && targetFloor<=top){
         console.log("OK");
         //move elevator
         
    }else{
        console.log("Please input floor between "+bottom +" and "+top);
    }

}while(1)
