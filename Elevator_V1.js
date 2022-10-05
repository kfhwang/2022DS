var readline = require("readline-sync");

var currentFloor = 5; //
var targetFloor; //
const top = 6; //
const bottom = 1; //

do {
    targetFloor = readline.question("Elevator now at " + currentFloor + ". Ur target?");
    //bottom <= targetFloor <=top ?
    // if(targetFloor>=bottom && targetFloor<=top){
    //      console.log("OK");
    //      //move elevator

    // }else{
    //     console.log("Please input floor between "+bottom +" and "+top);
    // }
     
    if (targetFloor < bottom || targetFloor > top) {
        console.log("Please input floor between " + bottom + " and " + top);
        continue;
    } else {
        console.log("OK");
        //move elevator
        //case 1: down
        if(targetFloor < currentFloor){
            console.log("Down...");
            while(targetFloor<currentFloor){
                //currentFloor -= 1;
                //currentFloor--;
                currentFloor = currentFloor -1;
                console.log("Elevator now at:"+currentFloor);
            }
        }else if(targetFloor > currentFloor){ //case 2: up
       
        
        }
        //else if(targetFloor==currentFloor){//case 3: stop
        else{
            console.log("Stop!");
            break;
        }
        
    }

    //...
} while (1)
