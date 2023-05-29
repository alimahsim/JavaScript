//01 Removing every second elements
let arrStr = ["Save", "Delete", "Keep", "Remove", "Store", "Terminate"];
let newArr = [];

function removeEveryOther(arr){
  for(let i = 0; i < arr.length; i+=2){
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(removeEveryOther(arrStr));

//02 element / index of element
let arrNum = [22, -6, 32, 82, 9, 25];
let total = [];

function multipleOfIndex(arr) {
    for(let i = 0; i < arr.length; i++){
        if (arr[i] % i === 0){
            total.push(arr[i]);
        }
    }
    return total;
  };
console.log(multipleOfIndex(arrNum));

// 03 Sum of two different elements of arrays
let numArr1 = [ 4, 5, 1, 10];
let numArr2 = [5, 10, 4, 6];

function arrayPlusArray( arr1 , arr2){
  let sum = 0;
  let newNumArr = arr1.concat(arr2);
  newNumArr.forEach((item, i, arr) => {
    sum += item;
  });
  return sum;
};
console.log(arrayPlusArray(numArr1 , numArr2));