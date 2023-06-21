
// Testing
// console.log("Hello world!");


// Creating "TODO LIST" for the fist homework

// Coloring body
document.body.style.cssText = `
  background-color: darkred;
`;

// Creating wapper element and giving style
let wrapperForTodo = document.createElement("div");
document.body.append(wrapperForTodo);
wrapperForTodo.style.cssText = `
    margin-top: 0;
    width: 300px;
    height: 200px;
//    background-color: red;
`;

// Creating p tag for writing "Todo list" sentences and giving style
let p = document.createElement("p");
wrapperForTodo.append(p);
p.innerText = "Todo list";
p.setAttribute("class", "todo");
p.style.cssText = `
  padding-top: 20px;
  text-align: center;   
  font-size: 30px;
  color: #FFF;
`;

// Creating input tag and giving style
let input = document.createElement("input");
input.innerText = "Enter your name";
wrapperForTodo.append(input);
input.style.cssText = `
  margin-left: 20px;
  padding: 3px 10px;
  border-radius: 5px;
  
`
// Creating button tag and giving style
let btn = document.createElement("button");
wrapperForTodo.appendChild(btn);
btn.innerText = "Click me"; 
btn.style.cssText = `
    margin-top: 0;
    padding: 3px 10px;
    color: white;
    background-color: black;
    cursor: pointer;
    border-radius: 5px;
`

let ul = document.createElement("ul");
wrapperForTodo.append(ul);
ul.style.listStyleType = "none";

let li = document.createElement("li");
ul.append(li);
li.innerText = "Learn HTML";
li.style.cssText = `
  color: #FFF;
  `;

function getInpMes(){
  if(input.value !== ""){
    input.style.border = "2px solid lightgreen";
    ul.innerHTML += `
    <li style=color:#FFF;>${input.value}</li>
    `
    input.value = '';  
  }else{
    input.style.border = "2px solid red";
  }
};
btn.addEventListener("click", getInpMes);


// Creating "COUNTER" for the second homework 

// Creating wrapper for "COUNTER"
let wrapperForCounter = document.createElement("div");
document.body.append(wrapperForCounter);
wrapperForCounter.style.cssText = `
  width: 300px;
  height: 200px;
//  background-color: red; 
`
let counter = document.createElement("p");
wrapperForCounter.append(counter);
counter.style.cssText = `
  margin-top: 30px;
  padding-top: 20px;
  color: #FFF;
  font-size: 40px;
  text-align: center;
`

let btnDec = document.createElement("button");
btnDec.setAttribute("class", "dec");
wrapperForCounter.appendChild(btnDec);
btnDec.innerText = "Dec";
btnDec.style.cssText = `
  margin: 0 10px 0 20px;
  padding: 5px 12px;
  background-color: #000;
  color: #FFF;
  border-radius: 5px;
  cursor: pointer;
`

let btnInc = document.createElement("button");
wrapperForCounter.appendChild(btnInc);
btnInc.innerText = "Inc"
btnInc.style.cssText = `
  margin: 10px;
  padding: 5px 10px;
  background-color: #000;
  color: #FFF;
  border-radius: 5px;
  cursor: pointer;
`

let btnRst = document.createElement("button");
wrapperForCounter.appendChild(btnRst);
btnRst.innerText = "Rst";
btnRst.style.cssText = `
  margin: 10px;
  padding: 5px 12px;
  background-color: #000;
  color: #FFF;
  border-radius: 5px;
  cursor: pointer;
`

let btnRnd = document.createElement("button");
wrapperForCounter.appendChild(btnRnd);
btnRnd.innerText = "Rnd";
btnRnd.style.cssText = `
  margin: 10px;
  padding: 5px 12px;
  background-color: #000;
  color: #FFF;
  border-radius: 5px;
  cursor: pointer;
  `
  
let countValue = 0;
counter.innerText = countValue;
  
function decrement(){
  countValue--;
  counter.innerText = countValue;
  if(countValue == -50){
    btnDec.removeEventListener("click", decrement)
  }
}
btnDec.addEventListener("click", decrement)

function increment(){
  countValue++;
  counter.innerText = countValue;
  if(countValue == 50){
    btnInc.removeEventListener("click", increment);
  }
}
btnInc.addEventListener("click", increment);

function reset(){
  countValue = 0;
  counter.innerText = countValue;
}
btnRst.addEventListener("click", reset);

function random(){
  countValue = Math.floor(Math.random()*100)-50;
  counter.innerText = countValue;
};
btnRnd.addEventListener("click", random);



// let itLangs = ['JS', 'Python', 'C++', 'SQL', 'PHP', 'GO']
//   function getRandomItem(arr) {

//     // get random index value
//     let randomIndex = Math.floor(Math.random() * arr.length);

//     // get random item
//     let element = arr[randomIndex];

//     return element;
//   }


//   // let result = getRandomItem(array);
//   // console.log(result);
// console.log(  getRandomItem(itLangs));


let itLangs = ['JS', 'Python', 'C++', 'SQL', 'PHP', 'GO']
let randomIndex = Math.floor(Math.random() * itLangs.length);
let element = itLangs[randomIndex];
console.log(element);
