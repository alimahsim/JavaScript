// "use strict"
// console.log("Testing...");

// console.log(this);// window

// function some(){
//     console.log(this);
// }
// some()

// const user = {
//     name: "John",
//     surname: "Doe",
//     age: 30,
//     // sayHi: function(){
//     //     console.log("Hi");
//     // },
//     // we can write it like this 
//     sayHi(){
//         console.log("This is method of user obj")
//         console.log(this);
//     }
// }

// user.sayHi()

// // 02

// const user = {
//     name: "John",
//     surname: "Doe",
//     age: 30,
//     // sayHi: function(){
//     //     console.log("Hi");
//     // },
//     // we can write it like this 
//     sayHi(){
//         console.log("This is method of user obj")
//         console.log(this) // Reaches object
//         function some(){
//             console.log(this) // without "use strict" reaches Window 
//         }
//         some() // 
//     }
// }
// user.sayHi()

// // user.sayHi.some() // incorrect calling


// 03

// const user = {
//     name: "John",
//     surname: "Doe",
//     age: 30,
//     sayHi(){
//         console.log(this) 
//         // Let's try by arrow function
//         const some = () =>{
//             console.log(this) // reaches OBJECT 
//         }
//         some() // 
//     }
// }
// user.sayHi()


// //04 here this == user // this.name == "John" like user.name = "John"
// const user = {
//     name: "John",
//     surname: "Doe",
//     age: 30,
//     showName(){
//         console.log(this.name) 
//     }
// }

// user.showName()


//05 CALL, APPLY, and BIND
// const user = {
//     name: "John",
//     surname: "Doe",
//     age: 30,
//     showVal(){
//         console.log(this.name)
//         console.log(this.surname) 
//     }
// }
// const admin = {
//     name: 'Genry',
//     surname: 'Forbes',
//     age: 25,
// }

// user.showVal.call(admin) // Genry // Forbes 
// user.showVal.apply(admin) // Genry // Forbes

// user.showVal.bind(admin) // nothing
// user.showVal.bind(admin)() // Genry // Forbes


// //06 Differences between CALL, APPLY, and BIND by adding arguments 
// const user = {
//     name: "John",
//     surname: "Doe",
//     age: 30,
//     showVal(id, phone){
//         console.log(id, this.name, this.surname, this.age, phone )
//     }
// }
// const admin = {
//     name: 'Genry',
//     surname: 'Forbes',
//     age: 25,
// }

// user.showVal(01, 77_456_5544)


// user.showVal.call(admin, 02, 92_612_4455) // Genry // Forbes 
// user.showVal.apply(admin, [03, 4522112145]) // Genry // Forbes

// user.showVal.bind(admin) // nothing
// user.showVal.bind(admin)() // Genry // Forbes


// Repeating them to learn deeper

// const bmw = {
//     name: 'BMW',
//     accelerate(){
//         console.log(`${this.name} is going faster`);
//     }
// }

// bmw.accelerate()

// const gm = {
//     name: 'Onix'
// }

// bmw.accelerate.call(gm)


// That's all for THIS key word

