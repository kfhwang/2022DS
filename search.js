//node --max-old-space-size=4000 
//allocate ~4GB

const maxHeapSz = require('v8').getHeapStatistics().heap_size_limit;
const maxHeapSz_GB = (maxHeapSz / 1024 ** 3).toFixed(1);

console.log('--------------------------');
console.log(`${maxHeapSz_GB}GB`);

var data=[1,3,9,6,5];
var game=[
    {"id":"md1", "level":2, "point":20000, "tools":[{"stone":3,"limit":"2022-12-31"}, {"jew":2}, {"knief":1}]},
    {"id":"md2", "level":3, "point":28000, "tools":[{"stone":1,"limit":"2022-12-31"}, {"jew":5}, {"knief":0}]},
    {"id":"md3", "level":1, "point":18000, "tools":[{"stone":2,"limit":"2022-12-31"}, {"jew":1}, {"knief":1}]}
];
// for (let index = 0; index < 100000000; index++) {
//     data[index] = Math.floor(Math.random()*100000000);
// }

function chkPoint(item){
    return item.level > 20000;
}

function greater7(num,idx){
    //return num>7;
    if(num>7)
      return idx;
    else
      return false;
}

function filterLevel(item){
    return item.level > 1 && item.point>20000;
}

var start = new Date().getTime();
//console.log(game.indexOf(">20000")); Not work
//console.log(game.find(chkPoint));
var user=game.find(item=>{
    return item.id=="md2";
});

var filtered = game.filter(filterLevel);

console.log(user.level)
//console.log(data.find(greater7));
var end = new Date().getTime();


console.log("Duration:" + (end-start)+"ms");
