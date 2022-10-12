var readline = require("readline-sync");

var currentFloor = 1; //
var targetFloor; //

var floorName = ["B2", "B1", "1", "2", "3", "5", "6"];

do {
    targetFloor = readline.question("Elevator now at " + floorName[currentFloor] + ". Ur target?");
     
    if (floorName.indexOf(targetFloor.toUpperCase())<0) {
        console.log("Please input floor: " + floorName.toString());
        continue;
    } else {
        console.log("OK");
        targetFloor = floorName.indexOf(targetFloor.toUpperCase());
        //move elevator
        //case 1: down
        if(targetFloor < currentFloor){
            console.log("Down...");
            while(targetFloor<currentFloor){
                //currentFloor -= 1;
                currentFloor--;
                //currentFloor = currentFloor -1;
                console.log("Elevator now at:"+  floorName[currentFloor]);
            }
        }else if(targetFloor > currentFloor){ //case 2: up
   
            for(;targetFloor>currentFloor;){
                console.log("Elevator now at:"+  floorName[++currentFloor]);
            }
        }
        //else if(targetFloor==currentFloor){//case 3: stop
        else{
            console.log("Stop!");
            break;
        }
        
    }

    //...
} while (1)
