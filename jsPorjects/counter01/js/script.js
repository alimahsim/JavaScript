const dec = document.querySelector(".dec"),
    inc = document.querySelector(".inc"),
    count = document.querySelector(".count")

let countValue = 0

function increment (){
    countValue++
    count.innerText = countValue
    if(countValue === 10){
        inc.removeEventListener("click", increment)
    }
}

function decrement (){
    countValue--
    count.innerText = countValue
    if(countValue === -10){
        dec.removeEventListener("click", decrement)
    } 
}

dec.addEventListener("click", decrement)
inc.addEventListener("click", increment)