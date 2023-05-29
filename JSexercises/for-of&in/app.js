
// console.log('Hello world!');

  // Getting display class to show in HTML
const display = document.querySelector('.display');

// FOR ... IN for keys of OBJECTS 
const person = {
    name: 'Ali',
    age: 36,
    kg: 70,
    isMarried: true
};

for (let key in person){
    // console.log(key); // == keys
    // console.log(person[key]); // == values
    // console.log(key, person[key]); // == keys and values

};

// FOR ... IN is not suitable for ARRAYS but it works for getting 
// index of them 

const colors = ['red', 'black', 'white', 'yellow'];
for (let index in colors){
    // console.log(index); // == indexes 
    // console.log(index, colors[index]); // == indees and items
};


// FOR ... OF for items of ARRAYS

const colorsOf = ['red', 'black', 'white', 'yellow'];
for (let color of colorsOf){
    // console.log(color) // == items 
    // console.log(color[0]) // == the first letter of indexes 
}
// Can we use FOR ... OF for OBJECTS ? NO

/*
const personOF = {
    name: 'John',
    age: 30,
    kg: 60,
    isMarried: false
};

for (let key of personOF){
    console.log(key) // Uncaught TypeError: personOF is not iterable

}

*/

