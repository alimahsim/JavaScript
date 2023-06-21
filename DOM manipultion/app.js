
// let obj = {
// 	innerText: "1"
// }

// let str2 = obj.innerText
// obj.innerText = "2"
// box.innerText = "open"
// box.innerText = box.innerText + "34"
// box.innerText = box.innerText + "open"
// box.innerHTML = "<mark>12</mark>"
// textContent vs innerText

let box = document.getElementById("block")

// btn.onclick = function(){
// 	console.log('text')
// }

// btn.onclick = function(){
// 	console.log('text2')
// }

// let arr = ["blue", "red", "yellow", "pink", "violet", "green"]

// btn.addEventListener("click", () => {
// 	let rnd = Math.floor(Math.random() * arr.length)
// 	box.style.background = arr[rnd]
// })

// let i = 0

// btn.addEventListener("click", () => {
// 	if(i >= 0 && arr.length > i){
// 		box.style.background = arr[i]
// 		i++
// 		console.log(i)
// 	}else {
// 		arr.reverse()
// 		console.log(arr)
// 		i = 1
// 	}
// })


// let btn = document.querySelector('button')
// let inp = document.querySelector('input')
// let todo = document.querySelector(".todo")

// function showMessage() {
// 	if(inp.value !== ''){
// 		inp.style.border = "1px solid black"
// 		todo.innerHTML += `
// 			<li>${inp.value}</li>
// 		`
// 		inp.value = ''
// 	}else{
// 		inp.style.border = "1px solid red"
// 	}
// }

// btn.addEventListener("click" , showMessage)

let incBtn = document.querySelector('.inc'),
		decBtn = document.querySelector('.dec'),
		count = document.querySelector('.count')


let countValue = 0
count.innerText = countValue


function decrement(){
	countValue--
	count.innerText = countValue
	if(countValue === -10){
		decBtn.removeEventListener('click', decrement )
	}
}

decBtn.addEventListener('click', decrement)

function increment(){
	countValue++
	count.innerText = countValue
	if(countValue === 10){
		incBtn.removeEventListener("click", increment)
	}
}

incBtn.addEventListener('click', increment)

console.log(5 + 5)