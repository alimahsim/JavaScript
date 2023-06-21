console.log("Hello World!");

// Task #1

alert ("The program calculates the numbers you've entered.")
let num1 = +prompt ("Enter the first number.");
let symbol = prompt("Enter the symbol , please pick one of '+', '-', '/', '*'.")
let num2 = +prompt("Enter the second number.");

if (symbol == "+")
    console.log(num1 + num2);
else if (symbol == '-')
    console.log(num1 - num2);
else if (symbol == '/')
    console.log(num1 / num2);
else if(symbol == '*')
    console.log(num1 * num2);
else if (symbol == '%')
    console.log(num1 % num2);
else{
    console.log("Rubbish input");
};

// Task #2 

alert("The program shows the older age of the users");

let firstUserName = prompt("Enter your firstname:");
let firstUserSurname = prompt("Enter your surname:");
let firstUserAge = prompt("Enter your age:");

let firstUserInfo = {};
firstUserInfo.name = firstUserName;
firstUserInfo.surname = firstUserSurname;
firstUserInfo.age = firstUserAge;

let secondUserName = prompt("Enter your firstname:");
let secondUserSurname = prompt("Enter your surname:");
let secondUserAge = prompt("Enter your age:");

let secondUserInfo = {};
secondUserInfo.name = secondUserName;
secondUserInfo.surname = secondUserSurname;
secondUserInfo.age = secondUserAge;

console.log(firstUserInfo);
console.log(secondUserInfo);

if (firstUserInfo.age > secondUserInfo.age)
    console.log(`${firstUserInfo.name}'s age is older than ${secondUserInfo.name}`);
else if (firstUserInfo.age === secondUserInfo.age)
    console.log("The users are at the same age")
else{
    console.log(`${secondUserInfo.name}'s age is older than ${firstUserInfo.name}`)
}

let result = confirm("If both of the above-created programs worked correctly , please press the 'ok' botton.");
console.log(result);