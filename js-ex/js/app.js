// // console.log("Hello");

// bsic js 

// console.log(true || false && '' || 0 && 'false'); // true
// console.log(false && 'true' || 0 && '' || null); // null
// console.log('true' || '' || null); // true



// // Creating Math methods 

// // POW 
// function pow (x, y){
//     return x**y;
// }
// console.log(pow(2, 3)); // 8

// //SQRT
// const sqrt = function(n){
//     return n**2;
// }
// console.log(sqrt(5)); // 25

// // ABS
// const abs = (n) => {
//     return n < 0 ? n*(-1) : n
// }
// console.log(abs(-155)); // 155
// console.log(abs(155)); // 155

// // FLOOR
// function floor(n){
//     if(!n % 2 === 0){
//         return  n - (n % 2) 
//     }else{
//         return n
//     }
// }
// console.log(floor(5));

// // CEIL
// function ceil(n){

//     if(!n % 2 === 0){
//         return n + (n % 2)
//     }else{
//         return n
//     }
// }
// console.log(ceil(5.1))

// // TRUNC
// function trunc(n){
//     if(!n % 2 === 0){
//         return  n
//     }
// }

// // ARRAY METHODS 
let arr = ['C', 'C++', 'C#', 'JS']

// console.log(arr);

// function push(arr, elem){
//     return arr[arr.length] = elem
// }
// push(arr, 'PHP')
// console.log(arr);

// function push(arr, elem){
//     let newArr = arr[arr.length] = elem
//     return newArr
// }
// push(arr, 'Python')
// console.log(arr);

// function push(arr, elem){
//     arr[arr.length] = elem
//     return arr
// }
// push(arr, 'Go')
// console.log(arr);

// let pop = function (elem){
//     let newArr = arr[arr.length] - elem
//     return newArr
// }
// console.log(arr);

// arr.pop()
// console.log(arr);

// // UNSHIFT adding element from beginning of the arr
// arr.unshift('Python')
// console.log(arr);

// // SHIFT removing element from end of the arr
// arr.shift()
// console.log(arr);

// // SLICE copy elements according to index of them
// console.log(arr);

// let newArr1 = arr.slice(0) // copied whole of the arr
// console.log(newArr1);

// let newArr2 = arr.slice(0,1) // copied from 0 till 1 - only 1 element not 2 
// console.log(newArr2);

// let newArr3 = arr.slice(0,2) // copied from 0 till 2 - not included index of 2  
// console.log(newArr3);

// let newArrMinus = arr.slice(-4) // copied whole arr from right side to left   
// console.log(newArrMinus);

// SPLICE adding, cutting 




// // DELETE FOR ARRAYS

// let arrNum = [2, 3, 7, 5, 8, 15];
// console.log(arrNum); // [2, 3, 7, 5, 8, 15]

// delete arrNum[0]
// console.log(arrNum); // [empty, 3, 7, 5, 8, 15]


// delete arrNum
// console.log(arrNum); // [empty, 3, 7, 5, 8, 15]

// // DELETE FOR STRINGS

// let str = "Open"

// delete str[0]

// console.log(str); // Open

// // console.log(str.slice(0, 2)); // Op
// // console.log(str.splice(3, 1, "web")); // error

// console.log(str); // Open

// // console.log(str.pop()); // error


// ************************************************************** DOM *************************************************

// GETTING ELEMENTS FROM HTML 
// By tag names
let header = document.getElementsByTagName('h1')
// console.log(header);
// console.dir(header);

// By class names
let paragraph = document.getElementsByClassName('text')
// console.log(paragraph);
// console.dir(paragraph);

// By ID 
let footer = document.getElementById('footer-main')
// console.log(footer);
// console.dir(footer);

// By querySelector
let ul = document.querySelector('ul')
// console.log(ul);
// console.dir(ul);

// By querySelectorAll
let li = document.querySelectorAll('li')
// console.log(li);
// console.dir(li);

// GET ATTRIBUTES - get attributes from class, id, type ...

// console.log(paragraph[0].getAttribute('class')); // text
// console.log(footer.getAttribute('id')); // footer-main


// ADDING ATTRIBUTES 

// By className
header[0].className = " head" 
paragraph[0].className += " context" 
footer.className += " footer-content"

//By setAttribute // but it overwrites
header[0].setAttribute("class", "head1")
paragraph[0].setAttribute ("id", "contextID")
footer.setAttribute("class", "footer-contentSET")

//By classList 
ul.classList.add("footer-navbar")
li.forEach((eachLi)=>{
    eachLi.classList.add("footer-navbar__elements")
})
// Other properties of classList 
ul.classList.add("footer-navbar")
footer.classList.remove("footer-contentSET")
footer.classList.toggle("test")
footer.classList.toggle("test")
console.log(footer.classList.contains("test"));


// Styling
// Directly
header[0].style.color = 'red'
paragraph[0].style.background = 'yellow'
footer.style.fontSize = '24px'
ul.style.listStyle = "none"
li.forEach((eachLi)=>{
    eachLi.style.color = "blue"
})
// By cssText
header[0].style.cssText = `
    font-weight: 900;
    font-size: 40px;
    color: blue;
    background-color: pink;
`
paragraph[0].style.cssText = 
`
    padding: 10px;
    font-size: 20px;    
    background-color: green;
`
footer.style.cssText = `
    background-color: red;
`
ul.style.cssText = `
    list-style: none;
    display: flex;
    column-gap: 20px;
    `
li.forEach((eachLi)=>{
    eachLi.style.cssText =
    `
    padding: 10px;
    font-size: 24px;
    color: white;
    `
})
// Creating element and put it into HTML 

let box = document.createElement("div")
box.style.width = "100px"
box.style.height = "100px"
box.style.background = "blue"

// document.body.append(box)
// document.body.prepend(box)
// header[0].append(box)
// header[0].prepend(box)

// FUNCTIONS with For loop

let users = [
    {
        name: 'John',
        surname: 'Doe',
        age: 35
    },
    {
        name: 'Martin',
        surname: 'Simth',
        age: 18
    },
    {
        name: 'Tom',
        surname: 'Adams',
        age: 22
    },
    {   
        name: 'Villiam',
        surname: 'Kings',
        age: 17
    }
]

function showAdult(users){
    if(users.age > 20){
        console.log(`${users.name} is an adult `);
    }else{
        console.log(`${users.name} is a kid`);
    }
}

for(let i = 0; i < users.length; i++){
    showAdult(users[i])
}

// Function arguments

function studentsInfo(name, surname){
    surname = surname || ''
    //let name = 'Charles' // not allowed declared twice but can change the exist one 
    console.log(name, surname);

    // name = 'Charles'

    // console.log(name);
}

studentsInfo('John', null)
studentsInfo('Alex', 'Adams')




