// console.log("Hello World!");

alert("Welcome to our website");


let username = prompt("Enter your firstname:");
let usersurname = prompt("Enter your surname:");
let userAge = prompt("Enter your age:");

let userInfo = {};
userInfo.name = username;
userInfo.surname = usersurname;
userInfo.userAge = userAge;

console.log(userInfo);


let result = confirm("Web site uses cookie if you accept it , please confirm.");
console.log(result);