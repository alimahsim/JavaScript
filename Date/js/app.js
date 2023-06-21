console.log("Hello world");


let timing = document.querySelector('#timing');
let date = new Date();
timing.style.cssText = `
    font-size: 40px;
    font-weight: 700;
`
function showTime(){
	let date = Date.parse(new Date()) / 1000
	timing.innerText = date
}
setInterval(() =>{
	showTime()
}, 1000)


let convert = document.querySelector(".convert")
let inp = document.querySelector("input")
let gmt = document.querySelector('#timegmt')
let timeformat = document.querySelector("#timeformat")
let timezone = document.querySelector("#timezone")
//let relative = document.querySelector("#relative")

convert.addEventListener('click', () =>{
    if(inp.value.length < 12 ){
        timeformat.textContent = 'Seconds'
    }else if(inp.value.length <= 14 ){
        timeformat.textContent = 'Milliseconds'
    }else if(inp.value.length <= 16){
        timeformat.textContent = 'MicroSeconds'
    }else if(inp.value.length >= 17){
        timeformat.textContent = 'Nanoseconds'
    }

    gmt.textContent = new Date(+inp.value).toUTCString()
    timezone.textContent = new Date(+inp.value)
});

// let today = new Date();
// let selectedTimeToday = new Date( today.getFullYear(), today.getMonth(), today.getDate(), value.getHours(), value.getMinutes(), value.getSeconds() );
// console.log(today);

