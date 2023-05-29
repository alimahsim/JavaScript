

// Task #1

console.log("Task #1: Calculator");

alert("This program calculates the numbers you've entered.")

let num1 = +prompt("Enter the first number:");
let symbol = prompt("Pick one of  +  -  /  *  %");
let num2 = +prompt("Enter the second number:")

if (symbol == '+')
    console.log(num1 + num2);
else if (symbol == '-')
    console.log(num1-num2);
else if(symbol == '/')
    console.log(num1 / num2);
else if (symbol == '*')
    console.log(num1 * num2)
else if (symbol == '%')
    console.log(num1 % num2);
else{
    console.log("Rubbish input mate!")
}

// Task #2

console.log("Task #2: Older age")

alert("The program shows whose age is older.");

let firstUserName = prompt("Enter the your name:");
let firstUserSurname = prompt ("Enter the your surname:");
let firstUserAge = prompt ("Enter the your age:")

let firstUserInfo = {}
    firstUserInfo.name = firstUserName;
    firstUserInfo.surname = firstUserSurname;
    firstUserInfo.age = firstUserAge;

console.log(firstUserInfo);

let secondUserName = prompt("Enter the your name:");
let secondUserSurname = prompt ("Enter the your surname:");
let secondUserAge = prompt ("Enter the your age:")

let secondUserInfo = {}
    secondUserInfo.name = secondUserName;
    secondUserInfo.surname = secondUserSurname;
    secondUserInfo.age = secondUserAge;

console.log(secondUserInfo);

if (firstUserInfo.age > secondUserInfo.age)
    console.log(`${firstUserInfo.name}'s age is older than ${secondUserInfo.name}`);
else if (firstUserInfo.age === secondUserInfo.age)
    console.log(`${firstUserInfo.age} and ${secondUserInfo.age} at the same age`);    
else {
    console.log(`${secondUserInfo.age}'s age is older than ${firstUserInfo.age}`);
}