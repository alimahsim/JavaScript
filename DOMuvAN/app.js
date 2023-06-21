let counter = document.querySelector('.counter');
counter.style.cssText = `
	width: 200px;
	height: 200px;
	padding: 20px;
	color: #FFF;
	background-color: #555;
	text-align: center;
`

let incBtn = document.querySelector('.inc'),
	decBtn = document.querySelector('.dec'),
	rstBtn = document.querySelector('.rst'),
	rndBtn = document.querySelector('.rnd'),
	count = document.querySelector('.count');

let countValue = 0;
count.innerText = countValue

// Decrement
function decrement(){
	countValue--
	count.innerText = countValue
	if(countValue === -50){
		decBtn.removeEventListener('click', decrement )
	}
}
decBtn.addEventListener('click', decrement);

// Increment
function increment(){
	countValue++
	count.innerText = countValue
	if(countValue === 50){
		incBtn.removeEventListener("click", increment)
	}
}
incBtn.addEventListener('click', increment);

// Reset
rstBtn.addEventListener('click', ()=>{
	countValue = 0;
	count.innerText = countValue;
});

// Random
function random(){
	countValue = Math.floor(Math.random()*50);
    if(countValue==0) return random();
	count.innerText = countValue
    return countValue;
}
rndBtn.addEventListener('click', random);






