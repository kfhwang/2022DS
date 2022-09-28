var readline = require("readline-sync");

while (true) {
    var height = readline.question("Ur height?");
    if (isNaN(height) || height < 10 || height > 220) {
        console.log("Please input ur height between 10 and 200");
        continue;
    }

    var weight = readline.question("Ur weight?");
    if (isNaN(weight) || weight < 10 || weight > 200) {
        console.log("Please...");
        continue;
    }

}

var hPower2 = Math.pow(height / 100, 2);
var bmi = weight / hPower2;
//console.log("Your height: "+ height+ '\n ,weight:'+weight);
console.log("Your bmi= " + bmi);
