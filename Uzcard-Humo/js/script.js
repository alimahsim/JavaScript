
console.log("Hello world!");

// Recognizes cards

let cardNum = '9860120185337800a'
function showNum(){
if (cardNum.startsWith('8600') && cardNum.length == 16){
    console.log("You've entered Uzcard , the number is:");
    console.log(cardNum.slice(0,4) + '********' + cardNum.slice(12,16))
   
}if(cardNum.startsWith('9860') && cardNum.length == 16){
    console.log("You've entered Humo card , the number is:");
    console.log(cardNum.slice(0,4) + '********' + cardNum.slice(12,16))

}else{
    console.log("You've entered rubbish mate!")
}}
showNum()

