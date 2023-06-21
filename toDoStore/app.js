console.log("Hello world");

document.body.style.backgroundImage = "url('mountains.jpg')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "100% 400px";

let heading = document.createElement('h1');
document.body.prepend(heading);
heading.innerText = "Todo";
heading.style.cssText = `
    font-family: 'san-serif';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 15px;
    color: #FFFFFF;
    text-transform: uppercase;
    text-align: center;
`

let inp = document.querySelector("[type = text]");
let btn = document.querySelector("button");
let toDoUl = document.querySelector("ul");

let todos = JSON.parse(localStorage.getItem("todos")) || []

btn.addEventListener("click", ()=>{
    let todo = {
        complete: false,
        value: inp.value
    }


    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos)) 
    
    toDoUl.innerHTML = "" 
    todos.forEach((item)=>{
        toDoUl.innerHTML += `
        <li>${item.value}</li>
        `
    })
    inp.value = ""
});

todos.forEach((item)=>{
    toDoUl.innerHTML += `
    <li>${item.value}</li>
    `
})



console.log("Testing ... ");

// uv 2 vowels = *

// console.log(str.replace(/[aeiou]/gi, '!')); 

let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam officia repudiandae ea fuga veritatis unde expedita mollitia optio voluptatibus libero."

let r = str.replace(/[aeiou]/gi, '!')

console.log(r);

