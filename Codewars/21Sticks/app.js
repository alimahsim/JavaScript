console.log('Hello world!');



// let shower = document.querySelector('.shower');


// let arr = ['I', 'go', 'to', 'Canada'];
// console.log(arr); //['I', 'go', 'to', 'Canada']

// delete arr[2];
// console.log(arr); // ['I', 'go', пусто, 'Canada']
// console.log(arr[2]); // undefined
// console.log(arr.length); // 4



// SPLICE
// The syntax is:

// arr.splice(start[, deleteCount, elem1, ..., elemN])

// arr.splice(2 , 1); // from index 1 remove 1 element

// console.log(arr); // ['I', 'go', 'Canada']
// console.log(arr[2]); // Canada

// Easy, right? Starting from the index 1 it removed 1 element.

// In the next example we remove 3 elements and replace them with the other two:

// arr.splice(0, 2, 'I', 'learn', 'JS', 'in');
// console.log(arr);

// // Here we can see that splice returns the array of removed elements:
// let removed = arr.splice(0,2);
// // removed 
// console.log(removed);
// // rested
// console.log(arr);

// The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:

// from index 0
// delete 0
// then insert "I" and "lean"

// arr.splice(0, 0 , 'I' , 'learn');
// console.log(arr);

// Negative indexes allowed
// Here and in other array methods, negative indexes are allowed. They specify the position from the end of the array, like here:

// let arrNum = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4

// arrNum.splice(-1, 0 , 3 , 4);
// console.log(arrNum);

// slice
// The method arr.slice is much simpler than similar-looking arr.splice.

// The syntax is:
//arr.slice([start], [end])

// let arr = ['t', 'e', 's', 't', 's'];

// console.log( arr.slice(1, 3) ); // e,s (copy from 1 to 3)
// console.log( arr.slice() ); // t,e,s,t,s (copy from 0 to length)

// console.log( arr.slice(-1) ); // s,t (copy from -1 till the end)
// console.log( arr.slice(-5, -3) ); // s,t (copy from -5 till -3)



// arrSlice.slice(1 , 2)
// console.log(arrSlice);

// let str = 'test';

// str.repeat(0,2);
// console.log(str);

// concat
// The method arr.concat creates a new array that includes values from other arrays and additional items.

// The syntax is:

// arr.concat(arg1, arg2...)
// It accepts any number of arguments – either arrays or values.

// The result is a new array containing items from arr, then arg1, arg2 etc.

// If an argument argN is an array, then all its elements are copied. Otherwise, the argument itself is copied.

// For instance:

// let arr = [1, 2];
// console.log(arr);

// // create an array from: arr and [3,4]
// console.log( arr.concat([3, 4]) ); // 1,2,3,4

// // create an array from: arr and [3,4] and [5,6]
// console.log( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// // create an array from: arr and [3,4], then add values 5 and 6
// console.log( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

// Normally, it only copies elements from arrays. Other objects, even if they look like arrays, are added as a whole:

// let arr = [1, 2];

// let arrayLike = {
//   0: "something",
//   length: 1
// };

// console.log( arr.concat(arrayLike) ); // 1,2,[object Object]
// …But if an array-like object has a special Symbol.isConcatSpreadable property, then it’s treated as an array by concat: its elements are added instead:

// let arr = [1, 2];

// let arrayLike = {
//   0: "something",
//   1: "else",
//   [Symbol.isConcatSpreadable]: true,
//   length: 2
// };

// console.log( arr.concat(arrayLike) ); // 1,2,something,else


// shower.style.cssText = `
//     width: 300px;
//     height: 150px;
//     background-color: green;
//     color: white;
//     font-size: 28px;
//     font-weight: 700;
//     text-align: center;
// `

// shower.innerText = `
//     ${arr}
// `

// let numbers = [21, 34, 54, 43, 26, 12]

// function betweenExtremes(numbers) {
//   let max = Math.max(numbers)
//   let min = Math.min(numbers)
//   console.log(max);
//   // return max - min

// }
// betweenExtremes()
// // console.log(betweenExtremes());

let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sumEvenNumbers(input) {
  let r = 0
  input.forEach(element =>{
    if(element % 2 === 0){
      r += element
    }
  })
  return r
}

sumEvenNumbers()