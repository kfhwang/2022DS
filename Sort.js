var ary=[81,38,66,22,63,12,26,45,17,39,96];

console.log(ary.toString());

var game=[
    {"id":"md1", "level":2, "point":20000, "tools":[{"stone":3,"limit":"2022-12-31"}, {"jew":2}, {"knief":1}]},
    {"id":"md2", "level":3, "point":28000, "tools":[{"stone":1,"limit":"2022-12-31"}, {"jew":5}, {"knief":0}]},
    {"id":"md3", "level":1, "point":18000, "tools":[{"stone":2,"limit":"2022-12-31"}, {"jew":1}, {"knief":1}]}
];

function sortByPoint(a, b)
{
    return b.tools[0].stone - a.tools[0].stone;
}

function sortByRandom(a,b)
{
   return Math.random()-0.5;
}

game.sort(sortByPoint);
ary.sort()
ary.sort(sortByRandom);