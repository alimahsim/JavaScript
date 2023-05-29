
// alert("Hello world!");

function evenOrOddDec(number){
    if (number % 2 === 0){
        console.log(` ${number} is even.`);
    }else{
        console.log(`${number} is odd.`);
    }
}
evenOrOddDec(6);

const evenOrOddExp = function(number){
    if (number % 2 === 0){
        console.log(`${number} is even`);
    }else{
        console.log(`${number} is odd`);
    }
}
evenOrOddExp(5);

const evenOrOddArrow = number => {
    if (number % 2  === 0){
        console.log(`${number} is even.`);
    }else{
        console.log(`${number} is odd.`)
    }
}
evenOrOddArrow(10);


