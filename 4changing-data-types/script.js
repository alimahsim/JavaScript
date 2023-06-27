// console.log("Changing data types");

// We use 2 methods to changing data types one into another

// 1 String()
// Changes "number" type into "string"

// for instance 
let num = 5;
console.log(typeof num); // number;

let changedNum = String(num);
console.log(typeof changedNum); // string


// 2 Number()
// Changes "string" type into "number"
let numAsString = "5";
console.log(typeof numAsString); // number;

let changedNumAsString = Number(num);
console.log(typeof changedNumAsString); // string

// Changing boolean type into number 

let answer = true
console.log(typeof answer); // boolen
console.log(Number(answer)); // 1 

let answer2 = false;
console.log(typeof answer2); // boolen
console.log(Number(answer2)); // 0 

// Changing boolean type into string 

let answerStr = true
console.log(typeof answerStr); // boolen
console.log(String(answerStr)); // "true"

let answerStr2 = false;
console.log(typeof answerStr2); // boolen
console.log(String(answerStr2)); // "false" 


console.log("true", "false");
console.log(answerStr, answerStr2);

console.log("true" + "false"); // "truefalse"
console.log(answerStr + answerStr2); // 1


// // When we try to change words into number, it turns into NaN 
// // for example 

// let itLearningCentre = "Ali's coding academy"
// console.log(typeof itLearningCentre); // string

// let changedItLearningCentre = Number(itLearningCentre)
// console.log(changedItLearningCentre);  // NaN

