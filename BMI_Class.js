class BMI{
    constructor(h, w){

        this.height = h;
        this.weight = w;
    }

    bmi = function(){
        var hPower2 = Math.pow(this.height / 100, 2);
        var bmi = this.weight / hPower2;
        return Math.round(bmi*100)/100;
    }

    static goodbmi(){
        return "18.5~24";
    }
}

var readline = require("readline-sync");
//for (; true; ) {   
do{
//while (true) {
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
    break;
}while(true);

console.log(BMI.goodbmi());

var mybmi = new BMI(height, weight);
//var mybmi2 = new BMI(170, 60);

console.log(mybmi.bmi())
//console.log(mybmi2.bmi())



