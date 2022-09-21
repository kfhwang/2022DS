var readline = require("readline-sync");
var height = readline.question("Ur height?");
var weight = readline.question("Ur weight?");
var hPower2 = Math.pow(height/100,2);
var bmi = weight/hPower2;
//console.log("Your height: "+ height+ '\n ,weight:'+weight);
console.log("Your bmi= "+ bmi);
