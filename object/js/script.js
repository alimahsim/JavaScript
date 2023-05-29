
// OBJECTS 

let obj = {
    name: "John",
    surname: "Doe",
    age: 36
}

let keys = Object.keys(obj)
console.log(keys);

let values = Object.values(obj)
console.log(values);

let entries = Object.entries(obj)
console.log(entries);


let fromEntries = Object.fromEntries(entries)
console.log(fromEntries);

let obj2 = {
    n: "Martin",
    s: "King", 
    a: 25
}

let assign = Object.assign(obj, obj2)
console.log(assign);


const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

// CLONING OBLJECTS
let obj3 = {
    name: "Adam",
    surname: "Smith",
    age: 28
}
console.log(obj3);
console.log(obj3.name);
console.log(obj3["name"]);

// Let's try by ecvalizing
let obj4 = obj3
console.log(obj4);
console.log(obj4.name);
console.log(obj4["name"]);
// But nothing changed 
//obj4 copies elements from obj3 by reference (shows link to obj3)


// Now by for in 
// So we should use for in method to clon objects
console.log("age" in obj3); // true

let obj5 = {} // or 
let obj5b = Object.create(null) // This is another way of creating a new Obj

for (let key in obj3){
    // console.log(key); // name, surname, age
    // console.log(typeof key); // string 3 times
    // console.log(obj3.key); // undefined 3 times
    // console.log(obj3[key]);  // Adam Smith 28
    obj5[key] = obj3[key]
}
obj5.status = true

console.log(obj3);
console.log(obj5);

// let obj6 = Object.assign(obj3, obj4)
// console.log(obj6);

// Now  changed 
//obj5 copies elements from obj3 by data
// But it doesn't work for nested object
 
// 3-way by assugn mehtod 
let obj6 = {
    name: 'Alex',
    surname: 'Marvel',
    age: 25
}

let obj7 = Object.assign({}, obj6)

console.log(obj6);
console.log(obj7);

obj7.isMarried = true

console.log(obj6);
console.log(obj7);
// But it doesn't work for nested object too

// 4-way by spread operator - ...

let obj8 = {
    name: 'Oscar',
    surname: 'Ben',
    age: 54
}
let obj9 = {...obj8}
console.log(obj8);
console.log(obj9);

obj9.name = 'Villiem'
console.log(obj8);
console.log(obj9);
// But it doesn't work for nested object too

// The last and best one is JSON 

let obj10 = {
    name: 'Martin',
    surname: 'King',
    age: 100
}

let obj11 = JSON.parse(JSON.stringify(obj10))

console.log(obj10);
console.log(obj11);

// Now let's recheck by adding a new obj in it (nested)
Object.assign(obj10, { pet: {name: 'Bobik'}})

console.log(obj10);

Object.assign(obj11, {pet:{name: 'Tuzik'}})
console.log(obj11); 
// Now We'he reached expected result , it works for all nested obects too
