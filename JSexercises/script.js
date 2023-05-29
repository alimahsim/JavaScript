// Operators

// console.log("2" == "2");

/*
let isOpen = false;
console.log(!!isOpen); 
let a;
let b = null;
let c = undefined;
let d = 4;
let e = "five";
let f = a || b || c || d || e;
console.log(f);
*/

/*
let color1 = 'oq',
    color2 = 'qora';

console.log(color1);
console.log(color2);
    
    colorTemp=color1,
    color1 = color2;
    color2 = colorTemp;

console.log(color1);
console.log(color2);
*/

// IF-ELSE 

/*
let hour = 20;

if (hour >= 6 && hour <12){
    console.log("Xayrli tong!");
}else if (hour >= 12 && hour < 18){
    console.log("Xayrli kun!");
}else{
    console.log("Xayrli kech!");
}

*/

// SWITCHCASE

/*
let word = 'clever';
switch(word){
    case 'pencil':
        console.log("qalam");
        break;
    case 'book':
        console.log("kitob");
        break;
    case 'intelligent':
    case 'smart':
    case 'clever':
        console.log("aqlli");
        break;
    default:
        console.log("Noma'lum so'z.");
};

*/
 // Above-shown project in IF-ELSE
/*
let word = 'intelligent';
if (word === 'pencil'){
    console.log("qalam");
}else if (word === 'book'){
    console.log("kitob");
}else if (word === 'intelligent' || word === 'smart' || word === 'clever'){
    console.log("aqlli");
}else{
    console.log("Noma'lum so'z.");
}
*/

// FOR LOOP

/*
console.log("Salom");
console.log("Salom");
console.log("Salom");
console.log("Salom");
console.log("Salom");
*/
// Instead of wring codes many times
// we can use FOR LOOP in a single line

/*
for (let i=1; i<101; i++){
    console.log("Salom");
}
*/
// First of all create a variable for just FOR LOOP
// secondly , give condition to it
// lastly , increment the var

// A programm shows odd numbers
/*
for (i=1; i<=100; i++){
    if (i % 2 !== 0){
        console.log(i);
    }
}

// Now  it shows the even numbers
 for (i = 1; i <= 100; i++){
    if (i % 2 === 0){
        console.log(`${i} is even`);
    }
 }
*/
 // Let's reverse it
/*
for (i=100; i>=1; i--){
    if (i % 2 !== 0){
        console.log(`${i} is odd number.`);
    }
}

for (i=100; i>=1; i--){
    if(i % 2 === 0){
        console.log(`${i} is even number.`);
    }
}
*/

// WHILE LOOP
/*
// first of all , create a var
let num = 1;
// secondly give a condition to it
while(num<=100){
// print it
    console.log(num);
// increment it 
    num++;
}
*/

// DO WHILE LOOP
/*
// first of all , create a var
let number = 1;

do{
// print it
    console.log(number);    
// increment it 
    number++;
// last give a condition to it
}while(number<=100);
*/

// BREAK & CONTINUE
// BREAK
/*
//Previously the code runs untill 50 without any break
let numBreak = 1;
while(numBreak<=50){
    console.log(numBreak);
    numBreak++;
}
// Here the code breaks at 40
let numBreak = 1;
while(numBreak<=50){
    if(numBreak===40)
    break;
    console.log(numBreak);
    numBreak++;
}
*/

// CONTINUE
/*

let numCon = 1;
while(numCon<=50){
    if(numCon % 2 !== 0){
    numCon++;
    continue;
    }
    console.log(numCon);
    numCon++;
}
*/

// FOR ... IN & FOR ... OF 
// FOR ... IN 
/*
let person = {
    name:'Muhammad',
    age: 5,
    isBoy:true
}
for (let key in person)
    console.log(key, person[key]);
*/
/*
const colors = ['white', 'black', 'red', 'green','blue'];
for (let index in colors)
    console.log(index, colors[index]);

// FOR ... OF

// Works the same as FOR ... IN 
// and let's take just above exaple 

for (let color of colors)
console.log(color);
*/

// TAKS 
/*
let showGreater = function(num1, num2){
    if (num1 > num2){
        console.log(num1);
    }else{
        console.log(num2);
    }
}
showGreater(5 , 6)
showGreater(10 , 6)
showGreater(10 ,15)

// Different way 

function getMax(a, b){
    if ( a > b ){
        return a;
    }else{
        return b;
    }
} 
let result = getMax( 50 , 60);
console.log(result);
// / But the same result 
// Now with less coding

function ShowMax(x , y){
    return(x>y) ? x : y;
}
console.log (ShowMax( 200 , 300));
*/
/*
function isLandscape( wieght , height){
    return (wieght > height) // ? true : false; // excess codes
}
let answer = isLandscape (102 , 100);
console.log(answer);
*/

function fizzBuzz(input){

    if (typeof input !== 'number'){
        return "Son emas";

    }if((input % 3 === 0) && (input % 5 === 0)){
        return 'FizzBuzz';

    }if(input % 3 === 0){
        return 'Fizz';

    }if(input % 5 === 0){
        return 'Fuzz';

    }return input;
}
let output = fizzBuzz("text");
console.log(output); // Son emas