
// Fade Slider
let slides = document.querySelectorAll('.slides-container .slide')
let prevBtn = document.querySelector('.slide-prev')
let nextBtn = document.querySelector('.slide-next')

let slideCount = 0

prevBtn.addEventListener('click', () => {
	if(slideCount <= 0){
		slideCount = slides.length - 1
	}else{
		slideCount--
	}

	hideSlide()
	showSlide(slideCount)
	console.log('prev')
})

nextBtn.addEventListener('click', () => {
	if(slideCount >= slides.length - 1){
		slideCount = 0
	}else{
		slideCount++
	}
	
	hideSlide()
	showSlide(slideCount)
})

function showSlide(i = 0){
	slides[i].classList.add('active')
}

function hideSlide(){
	slides.forEach((slide) => {
		slide.classList.remove('active')
	})
}

hideSlide()
showSlide()