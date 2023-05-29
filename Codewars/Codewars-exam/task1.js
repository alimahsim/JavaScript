console.log('Hello world!');

// TAST 1

let numbers = "1 2 3 4 5"

function highAndLow(numbers){

let result = '';
let newArr = numbers.split(' ')

let min = Math.min(...newArr) 
let max = Math.max(...newArr)

return `${min} ${max}`

}

console.log(highAndLow(numbers))
