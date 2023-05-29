console.log("Hello world");

// Installing picture
document.body.style.backgroundImage = "url('Bitmap.jpg')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "100% 400px";

// Inserting HEADING into WRAPPER and styling
let heading = document.querySelector("h1");
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
// Insert WRAPPER into BODY and styling
let wrapper = document.querySelector(".wrapper");
wrapper.style.cssText = `
    width: 800px;
    height: 200px;
    margin: 50px auto;
    font-size: 20px;
`

let inputText = document.querySelector(".text-input");
inputText.placeholder = "Create a new todo…";
inputText.style.cssText = `
    width: 540px;
    height: 64px;   
    font-size: 20px; 
    background: #FFFFFF;
    box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
    border-radius: 5px;
`
let btn = document.querySelector("button");
btn.style.cssText = `
    width: 64px;
    height: 64px;    
    font-size: 20px; 
    background: #FFFFFF;
    box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
    border-radius: 5px;
    cursor:pointer;
`

let chekBoxInput = document.querySelector(".checkbox-input");
chekBoxInput.style.cssText = `
    cursor: pointer;
`
/*
chekBoxInput.addEventListener("checked", ()=>{
    chekBoxInput.style.textDecoration = "line-through";
});
*/

let ul = document.querySelector("ul");
ul.style.cssText = "padding: 0;"

let li = document.querySelector("li");
li.style.cssText = `
    display: flex;
    justify-content: space-between;
    list-style: none;
    cursor: pointer;
`
let x = document.querySelector(".x");
x.style.cssText = `
    display: none;
    cursor: pointer;
`
btn.addEventListener("click", ()=>{
    ul.innerHTML += `
        <li>
            <div class="toDoLi">
                <input type="checkbox">
                <span>${inputText.value}</span>
            </div>
            <div class="x">✕</div>
        </li>
    `
    removeTodo('x')
});

function removeTodo(xClassNames){
    let xes = document.querySelectorAll(`.${xClassNames}`)    
    xes.forEach((x) => {
        x.addEventListener("click", ()=>{
            x.parentElement.remove()
        })
    })
}
