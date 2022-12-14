//node --max-old-space-size=4000 
//allocate ~4GB

const maxHeapSz = require('v8').getHeapStatistics().heap_size_limit;
const maxHeapSz_GB = (maxHeapSz / 1024 ** 3).toFixed(1);

console.log('--------------------------');
console.log(`${maxHeapSz_GB}GB`);

var data=[];
for (let index = 0; index < 100000000; index++) {
    data[index] = Math.floor(Math.random()*100000000);
}


var start = new Date().getTime();
console.log(data.indexOf(-1));
var end = new Date().getTime();


console.log("Duration:" + (end-start)+"ms");
