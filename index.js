// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
      
    }
  
    return gifts;
}
  
wrapGifts(gifts); 

const names = ['Guadalupe', 'Ollie', 'Aki'];
const message = [];
const gathering = 'surprise';
const x = names.length;
function writeCards(message) {
    for(let i = 0; i < x; i++) {
        message[i] = (`Thank you, ${names[i]}, for the wonderful ${gathering} gift!`);
        //console.log(`Thank you, ${names[i]} for the wonderful ${gathering} gift!`);
    }
    return message;
}
writeCards(message);


function countDown(xy) {
    while (xy >= 0) {
        console.log(xy--);
    }
}
countDown(10);