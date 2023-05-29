console.log("Hello world!");


// Array methods

let numArr = [ 2, -8, 15, 82];
let strArr = ['Open', 'Web', 'Academy'];

console.log(numArr);
console.log(strArr);

strArr[5] = 'Backend'; 
console.log(strArr);

strArr[strArr.length] = 'Frontend';
console.log(strArr);

strArr[strArr.length + 1] = 'Kids\'IT'
console.log(strArr);

strArr[strArr.length - 1] = 'Android';
console.log(strArr);


function push(arr , element){
    let newArr = arr[arr.length] = element;
    return newArr;
}

console.log(push(strArr, 'Go'));
console.log(strArr);

function pushNew(arr, element){
    arr[arr.length] = element;
    return arr;
}
console.log(pushNew(strArr , 'C#'));
console.log(pushNew(numArr , 105));

function pushNew02(arr, element){
    let newArrSec = arr[arr.length-1] = element;
    return newArrSec;
}
console.log(pushNew02(strArr , 'C#'));
console.log(pushNew02(numArr , -99));

// .push()

console.log(strArr.push('Python'));
console.log(strArr);

// .pop()

console.log(strArr.pop());
console.log(strArr);

// shift()

console.log(strArr.shift());
console.log(strArr);

// unshift

console.log(strArr.unshift('Open'));
console.log(strArr);

// .slice(0, 0)

console.log(strArr.slice(0, 2));
console.log(strArr);

// .splice(0, 0)

console.log(strArr.splice(2, 4));
console.log(strArr);


let arrSplice = ['Web', 'Academy'];

//let newArr = strArr.splice(1, 2 , [5, 6, 7, 8]);
//console.log(strArr);

console.log(strArr.splice(3, 4, ...arrSplice));
console.log(strArr);

// .sort()

console.log(strArr.sort());
console.log(numArr.sort());

function sortCallBack(a, b){
    return a - b;
}
console.log(numArr.sort(sortCallBack));

// By anonous function

console.log(numArr.sort(function(a, b){
    return a - b;
}));

// concat() 

let newArr02 = numArr.concat(strArr);
console.log(newArr02);

// .reverse()

console.log(newArr02.reverse());

// .split() // String into array

let str = 'Open Web Academy'; 
let arr = [6 , 5, 40, 594];

console.log(str);
console.log(str.split());
console.log(str.split(''));
console.log(str.split(' '));
console.log(str.split('a'));

// .join() // array into string

console.log(arr);
console.log(arr.join());
console.log(arr.join(''));
console.log(arr.join(' '));

// forEach(function(item, index, array)) 

strArr.forEach(function(item, i , arr){
    console.log(item);
})

strArr.forEach((item, i, arr)=>{
    console.log(item);
});

for (let i = 0; i < strArr.length; i++){
    console.log(strArr[i]);
}
strArr.forEach((item, i, arr)=>{
    console.log(i);
});

strArr.forEach((item, i, arr)=>{
    console.log(arr);
});

// Function summes array elements

let sumArr = 0 ; 
numArr.forEach((item)=>{
    sumArr += item;
    return sumArr;
})

console.log(numArr);
console.log(sumArr);

/*
let numArr1 = [ 4, 5, 1, 10];
let numArr2 = [5, 10, 4, 6];

let newNumArr = numArr1.concat(numArr2);


console.log(numArr1);
console.log(numArr2);
console.log(newNumArr);

let sum = 0;
newNumArr.forEach((item, i, arr) => {
    sum += item;
    return sum;
});

console.log(sum);
*/

let numArr1 = [ 4, 5, 1, 10];
let numArr2 = [5, 10, 4, 6];
let total = [];
/*
function arrayPlusArray( arr1 , arr2){
  let newNumArr = arr1.concat(arr2);
  console.log(newNumArr);
  newNumArr.forEach((item, i, arr) => {
    total += item;
  });
};
console.log(arrayPlusArray(numArr1 , numArr2));
*/
function sumArrays(arr1, arr2){
    for(let i = 0; i < arr1.length; i++){
        total.push(arr1[i] + arr2[i]);
        return;
    }
}
console.log(sumArrays(numArr1 , numArr2));





