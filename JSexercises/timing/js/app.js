console.log("Hello world");


let heading = document.querySelector('h1')
let btn = document.querySelector('button');

btn.addEventListener('click', ()=>{
    heading.style.background = 'red';
});

btn.addEventListener('click', ()=>{
    btn.nextElementSibling.style.background = 'yellow';
});

let now = new Date;
console.log(now);

