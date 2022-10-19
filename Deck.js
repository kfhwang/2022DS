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
var TotalPoint = 0;
var count=0;
for (let i = 0; i < 2; i++) {
    console.log(`${deck[i].Value} of ${deck[i].Suit}`)
    var newcard = document.createElement("img");
    newcard.width = 250;
    newcard.src = "PNG-cards/"+deck[i].File;
    document.getElementById("Cards").appendChild(newcard)
    //document.getElementById("card"+i).src = "PNG-cards/"+deck[i].File;

    TotalPoint += deck[i].Point;
    count++;
}
document.getElementById("Point").innerHTML=TotalPoint;
function addcard(){
    var newcard = document.createElement("img");
    newcard.width = 250;
    newcard.src = "PNG-cards/"+deck[count].File;
    TotalPoint += deck[count].Point;
    document.getElementById("Cards").appendChild(newcard)
    document.getElementById("Point").innerHTML=TotalPoint;
    count++;
}