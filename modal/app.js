// console.dir(navigator)
// console.log(window.location.href)

// if(navigator.userAgent){
	
// }

// window.location.replace('https://google.com')

// let btns = document.querySelectorAll('button'),
// 		blocks = document.querySelectorAll('.block')

// btns[0].addEventListener('click', () => {
// 	// btns[0].previousElementSibling.style.background = 'blue'
// 	// console.log(btns[0].parentElement.parentElement)
// })


// console.dir(document)
// console.dir(document.documentElement)// html tag
// console.dir(document.documentElement.firstChild)// html tag
// console.dir(document.documentElement.lastChild)// html tag
// console.dir(document.head)
// console.dir(document.body.childNodes)

// console.dir(btns[0].firstElementChild)
// console.log(btns[0].nextElementSibling)

// console.log(document.querySelector('.text').textContent)
// console.log(document.querySelector('.text').innerText)




let modalOpenBtn = document.querySelector('.modal-btn'),
		modalCloseBtn = document.querySelector('.modal-close'),
		modal = document.querySelector('.modal')

function closeModal(){
	modal.style.display = 'none'
	document.body.style.overflowY = ''
}

modalOpenBtn.addEventListener('click', () => {
	modal.style.display = 'flex'
	document.body.style.overflowY = 'hidden'
})

modalCloseBtn.addEventListener('click', closeModal)

modal.addEventListener('click', (e) => {
	const target = e.target
	// closeModal()
	if(e.target.classList.contains('modal')){
		closeModal()
	}
	// console.log('some')
	console.log(e.target)
})


// let timerId2 = setTimeout(() => {
// 	console.log('done')
// }, 5000)

// clearTimeout(timerId2)

// let count = 0

// let timerId = setInterval(() => {
// 	count++
// 	console.log(count)
// 	if(count === 5) {
// 		clearInterval(timerId)
// 	}
// }, 1000)