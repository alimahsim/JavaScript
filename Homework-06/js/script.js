console.log("Hello world");

// Creating Math mehtod functions

// ABS
function absNum(x){
    if (x < 0){
        return x * (-1);
    }else{
        return x;
    }
}
let absResult = absNum(-17);
console.log(absResult);

// SQUARE 
function sqrtNum(x){
    return x**0.5;
}
let sqrtResult = sqrtNum(49);
console.log(sqrtResult);

// POW
function powNums(x, y){
    return x**y;
}
let powResult = powNums(10, 2);
console.log(powResult);

// TRUNC 
function trunc(x){
    return x - (x % 1);
}
let truncResult = trunc(49.99)
console.log(truncResult);


// FLOOR 
function floorNum (x){
    if (x % 1 > 0 && x % 1 < 1){
        return x - (x % 1 );
    }else if (x % 1 < 0 && x % 1 > -1){
        return x - ( x % 1 ) -1;
    }else if ( x == 0 ){
        return x;
    }
}
let floorResult = floorNum(-1.20);
console.log(floorResult);

// CEIL 
function ceilNum (x){
    if (x % 1 > 0 && x % 1 < 1){
        return (x - (x % 1 )) + 1;
    }else if (x % 1 < 0 && x % 1 > -1){
        return x - ( x % 1 );
    }else{
        return x;
    }
}
let ceilResult = ceilNum(3.1);
console.log(ceilResult);

// ROUND
function roundNum(x){
    if (x % 1 >= 0.5 ){
        return x - (x % 1) + 1;
    }else if (x % 1 < 0.5 && x % 1 > -0.5 ){
        return x - (x % 1);
    }else if (x % 1 < -0.5){
        return x - (x % 1) + 1;  
    }else{
        return x;
    }
}

console.log(roundNum(45.9));
console.log(roundNum(45.1));
console.log(roundNum(-45.9));
console.log(roundNum(-45.1));
