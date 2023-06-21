let time = document.querySelector("h1")

// console.log(time);

// function timer() {
//     let date = Date.parse(new Date()) / 1000
//     time.innerText = date
// }

// setInterval(() => {
//     timer()
// }, 1000);


function timer() {
    let date = new Date()
    time.innerText = `${addZero(date.getDate())}.${addZero(date.getMonth())}.${date.getFullYear()}
    ${addZero(date.getHours())} : ${addZero(date.getMinutes())} : ${addZero(date.getSeconds())}`
}

setInterval(() => {
    timer()
}, 1000);

function addZero(n) {
    if(n < 10){
        return `0${n}`
    }else{
        return n
    }
}
