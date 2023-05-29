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

btn.addEventListener("click", ()=>{
    toDoUl.innerHTML += `
        <li>
            <div class="toDoLi">
                <input type="checkbox">
                <span>${inp.value}</span>
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
};

