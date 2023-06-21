const slides = document.querySelectorAll('.slides-container .slides');
const prevArrow = document.querySelector('.prev-slide');
const nextArrow = document.querySelector('.next-slide');

// // added 'addEventListener' to 'prev' and 'next' arrows & cheked it 

/*
prevArrow.addEventListener('click', ()=>{
    console.log("prevArrow");
})
*/
/*
nextArrow.addEventListener('click', ()=>{
    console.log("nextArrow");
})
*/

// // created functions that hides other slides after pressed 'prev & 
// // 'next' arrows , namely removes the 'active' class

function hideSlide(){
    slides.forEach(slide =>{
        slide.classList.remove('active')
    })
};

// // created functions that showes other slides after pressed 'prev & 
// // 'next' arrows , namely addes the 'active' class


function showSlide(i = 0){
    slides[i].classList.add('active')
    // // No need for this function , something's been checked
    // slides[i].style.zIndex = '999'
};

// // and now removing the static 'active' from HTML

// // created new element to go throuth in slides 

let slideCount = 0

// // Putting functions into work
// // Trying ...

/*
prevArrow.addEventListener('click', ()=>{
    slideCount--;
    hideSlide();
    showSlide(slideCount);
    // console.log("prevArrow");
});

nextArrow.addEventListener('click', ()=>{
    slideCount++;
    hideSlide();
    showSlide(slideCount);
    // console.log("nextArrow");
})
showSlide();
*/

// // Giving condition to control lenth of slides

prevArrow.addEventListener('click', ()=>{
    if(slideCount <= 0){
        slideCount = slides.length - 1;
    }else{
    slideCount--;
    }
    hideSlide();
    showSlide(slideCount);
    // console.log("prevArrow");
});
nextArrow.addEventListener('click', ()=>{
    if(slideCount >= slides.length - 1){
        slideCount = 0;
    }else{
    slideCount++;
    }
    hideSlide();
    showSlide(slideCount);
    // console.log("nextArrow");
})
showSlide();

// //



