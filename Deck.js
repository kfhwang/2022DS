// program to shuffle the deck of cards

// declare card elements
const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = [
  "ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "jack",
  "queen",
  "king",
];

// empty array to contain cards
let deck = [];

// create a deck of cards
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
 
        var card = {Point: x<10 ? x+1 : 10, Value: values[x], Suit: suits[i], File: values[x]+"_of_"+suits[i]+".png" };
         
        deck.push(card);
    }
}

// shuffle the cards
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}
///////
// i
// 51     0~50
// 50     0~49
// 49     0~48

// for(let i=0; i<deck.length-1; i++){
//    //let j = Math.floor(Math.random() * (51-i))+i+1;
//     let j = Math.floor(Math.random()*52);
//     let temp = deck[i];
//     deck[i] = deck[j];
//     deck[j] = temp;
// }

////////
// i     random 
// 0     1~51      0~51
// 1     2~51      0~51
// 2     3~51      0~51
// .



console.log('The first five cards are:');

// display 5 results
var TotalPoint1 = 0;
//var count=0;
var TotalPoint2 = 0;

var player1 = [], player2= [];

// for (let i = 0; i < 2; i++) {
//     console.log(`${deck[i].Value} of ${deck[i].Suit}`)
//     var newcard = document.createElement("img");
//     newcard.width = 250;
//     newcard.src = "PNG-cards/"+deck[i].File;
//     document.getElementById("Cards").appendChild(newcard)
//     //document.getElementById("card"+i).src = "PNG-cards/"+deck[i].File;

//     TotalPoint += deck[i].Point;
//     count++;
// }  

player1.push(deck.pop());
player1.push(deck.pop());
player1.forEach(function(card){
    var newcard = document.createElement("img");
     newcard.width = 250;
     newcard.src = "PNG-cards/"+card.File;
     document.getElementById("Cards1").appendChild(newcard)
     TotalPoint1 += card.Point;
})
// for(var i=0; i<player1.length;i++){
//     player1[i]
// }
document.getElementById("Point1").innerHTML=TotalPoint1;
// function addcard(){
//     var newcard = document.createElement("img");
//     newcard.width = 250;
//     newcard.src = "PNG-cards/"+deck[count].File;
//     TotalPoint += deck[count].Point;
//     document.getElementById("Cards").appendChild(newcard)
//     document.getElementById("Point").innerHTML=TotalPoint;
//     count++;
// }

function addcard1(){
        var newcard = document.createElement("img");
        newcard.width = 250;
        if(deck.length>0)
            player1.push(deck.pop());
        newcard.src = "PNG-cards/"+player1[player1.length-1].File;
        TotalPoint1 += player1[player1.length-1].Point;
        document.getElementById("Cards1").appendChild(newcard)
        document.getElementById("Point1").innerHTML=TotalPoint1;
}

//for player2
player2.push(deck.pop());
player2.push(deck.pop());
player2.forEach(function(card){
    var newcard = document.createElement("img");
     newcard.width = 250;
     newcard.src = "PNG-cards/"+card.File;
     document.getElementById("Cards2").appendChild(newcard)
     TotalPoint2 += card.Point;
})
// for(var i=0; i<player1.length;i++){
//     player1[i]
// }
document.getElementById("Point2").innerHTML=TotalPoint2;
function addcard2(){
    var newcard = document.createElement("img");
    newcard.width = 250;
    if(deck.length>0)
        player2.push(deck.pop());
    newcard.src = "PNG-cards/"+player2[player2.length-1].File;
    TotalPoint2 += player2[player2.length-1].Point;
    document.getElementById("Cards2").appendChild(newcard)
    document.getElementById("Point2").innerHTML=TotalPoint2;
}