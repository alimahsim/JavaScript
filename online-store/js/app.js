
// Header starts 
//  Header left Burger for mobile version
let burger = document.querySelector('.burger')
    mobileScreen = document.querySelector('.mobile-screen')
 

burger.addEventListener('click', () => {
    mobileScreen.classList.remove('mobile-screen_none')

})

let deleteIcon = document.querySelector('.delete-icon')


deleteIcon.addEventListener('click', ()=>{
    mobileScreen.classList.add('mobile-screen_none')
})
// ------------------------------------------------

// Header right cart-modal starts 
let cartEl = document.querySelector('.head-right__basket')
    modalEl = document.querySelector('.head-right__cart_action')

function openCloseCart(){
    modalEl.classList.toggle('active')
}
cartEl.addEventListener("click" , openCloseCart)
cartEl.addEventListener("mouseover" , openCloseCart)  
// cartEl.addEventListener("mouseout" , openCloseCart)

// function hideCart(){
//     modalEl.classList.remove('active')
// }

// function unHideCart(){
//     modalEl.classList.add('active')
// }

// cartEl.addEventListener("click", (e)=>{
//     if(!e.target === cartEl)
//     modalEl.classList.remove('active')
// })

// /Head-right cart-modal ends 
// / HEADER ENDS
// ---------------------------------------------------------------------------


// Tabs starts
let tabEachContentEl = document.querySelectorAll('.tab-each_content');
    tabEachLinkEl = document.querySelectorAll('.tab-each_link');
    tabLinksEl = document.querySelector('.tab-links')

function removeActiveClass(){
    tabEachContentEl.forEach(fromEachContent =>{
        fromEachContent.classList.remove('tab-each_content__active');
    })
    tabEachLinkEl.forEach(fromEachLink =>{
        fromEachLink.classList.remove('tab-each_link__active');
        fromEachLink.style.removeProperty("border")           
    })
};

function addActiveClass(toEachindex = 0){
    tabEachContentEl[toEachindex].classList.add('tab-each_content__active');
    tabEachLinkEl[toEachindex].classList.add('tab-each_link__active');
    tabEachLinkEl[toEachindex].style.cssText = `
        // border: 3px solid #FF7E1B;
        // border-radius: 11px;
        // opacity: 0.5;
    `
};
addActiveClass()

tabLinksEl.addEventListener('click', (e)=>{
    tabEachLinkEl.forEach((link, i) =>{
        if(e.target === link){
            removeActiveClass()
            addActiveClass(i)
        }
    })
})
// /Tabs ends
// --------------------------------------------------------

// Counter starts
let plusEl = document.querySelector('.plus'),
	minusEl = document.querySelector('.minus'),
	countEl = document.querySelector('.count')

let countValue = 0
countEl.innerText = countValue

function increment(){
    countValue++
	countEl.innerText = countValue
	if(countValue === 10){
        plusEl.removeEventListener("click", increment)
	}
}
plusEl.addEventListener('click', increment)

function decrement(){
    if(countValue === 0){
       countValue = 0
    }else{
        countValue--
    }
    countEl.innerText = countValue
}
minusEl.addEventListener('click', decrement)
// /Counter ends 
// ---------------------------------------------------------


// Timer starts

// Let's give it course deadline 
let deadline = '2023-04-30';

function getTimerData(dl){
    let timeInBetween = Date.parse(dl) - Date.parse(new Date())
        days = Math.floor((timeInBetween / (1000 * 60 * 60 * 24))),
        hours = Math.floor((timeInBetween / (1000 * 60 * 60) %24)),
        minutes = Math.floor((timeInBetween / (1000 * 60) % 60)),
        seconds = Math.floor((timeInBetween / 1000) % 60);

    if(timeInBetween < 0){
        return{
            timeInBetween: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }
    return{
        timeInBetween,
        days,
        hours,
        minutes,
        seconds
    }
}

function showTimer(showDl, parentSelector){
    let parentEl = document.querySelector(`.${parentSelector}`),
        daysEl = parentEl.querySelector('.days'),
        hoursEl = parentEl.querySelector('.hours'),
        minutesEl = parentEl.querySelector('.minutes'),
        secondsEl = parentEl.querySelector('.seconds');
    let timerId = setInterval(updateTimer, 1000)
    updateTimer()
    function updateTimer(){
        let timer = getTimerData(showDl)
            daysEl.innerHTML = addZero(timer.days),
            hoursEl.innerHTML = addZero(timer.hours),
            minutesEl.innerHTML = addZero(timer.minutes),
            secondsEl.innerHTML = addZero(timer.seconds)
    }
}

function addZero(num){
    if(num < 10){
        return `0${num}`
    }else{
        return num;
    }
}
showTimer(deadline, "timer");
//  /Timer ends
// ------------------------------------------------------------------------------


// Add to cart begins 

// Shows numbers in the Shopping cart of Head section 
let addTocartEl = document.querySelector('.cart-btn')
    cartShopNum = document.querySelector('.shop-num')

addTocartEl.addEventListener('click',()=>{
    if(countValue > 0 ){
        cartShopNum.style.display = 'flex'
        cartShopNum.innerHTML = countValue 
    }else{
        cartShopNum.style.display = 'none'
    }
})
// Shows prices in the Modal mirror of Shopping cart
let modalContentEmpty = document.querySelector('.head-right__cart_action-content.shown')
    modalContentFull = document.querySelector('.head-right__cart_action-content.hidden')

function fillAndEmptyCart(){
    if(countValue > 0){
        modalContentEmpty.style.display = 'none'
        modalContentFull.style.display = 'block'
    }else{
        modalContentFull.style.display = 'none'
        modalContentEmpty.style.display = 'block'
    }
    fillCartWithPros()
}
addTocartEl.addEventListener('click' , fillAndEmptyCart)

// Filling shoping cart 
let proCostEl = document.querySelector('.cost')
    proTotalCostEl = document.querySelector('.total-cost')
    price = 125.00

function fillCartWithPros(){
    proCostEl.innerHTML =  ` $ ${price}.00 x ${countValue} `
    proTotalCostEl.innerHTML = `$ ${countValue * price}.00`
    // Called this function in fillAndEmptyCart function
}

// Deleting products from shopping cart
let delProductsEl = document.querySelector('.del-icon')
  
function delFilledCart(){
    modalContentFull.style.display = 'none'
    modalContentEmpty.style.display = 'block'
    cartShopNum.style.display = 'none'
    // countValue = 0
}
delProductsEl.addEventListener('click' , delFilledCart)
// /Add to cart ends 
// /MAIN ENDS
//----------------------------------------------------------------

// Modal slider starts
let slides = document.querySelectorAll('.slider_content__imgs .slide-img')
let slideTabs = document.querySelectorAll('.slide-tab')
let sliderPage = document.querySelector('.full-slider')
let modal = document.querySelector('.modal-background-hide')
let closeSlider = document.querySelector('.slide-close-icon')
let slidesInner = document.querySelector('.slider_content__imgs')
let prevBtn = document.querySelector('.slider-prev')
let nextBtn = document.querySelector('.slider-next')

let slideCount = 0

prevBtn.addEventListener('click', () => {
	if(slideCount <= 0){
		slideCount = slides.length - 1
	}else{
		slideCount--
	}
	slidesInner.style.transform = `translateX(-${slideCount * 550}px)`
})

nextBtn.addEventListener('click', () => {
	if(slideCount < slides.length - 1){
		slideCount++
	}else{
		slideCount = 0
	}
	slidesInner.style.transform = `translateX(-${slideCount * 550}px)`
})

function addHiddenClass(){
    sliderPage.classList.add('hidden')
    modal.classList.add('hidden')

}
closeSlider.addEventListener('click' , addHiddenClass )

function removeHiddenClass(){
    sliderPage.classList.remove('hidden')
    modal.classList.remove('hidden')
}

tabEachContentEl.forEach((eachphoto)=>{
    eachphoto.addEventListener('click', removeHiddenClass)
})
modal.addEventListener('click', addHiddenClass) 

// /Modal slider ends
// -------------------------------------------------------------------    


//Fade Slider for Mobile version starts
let slidesMob = document.querySelectorAll('.slider-wrapper .slide')
    prevBtnMob = document.querySelector('.slide-prev_mob')
    nextBtnMob = document.querySelector('.slide-next_mob')

let slideCountMob = 0

prevBtnMob.addEventListener('click', () => {
	if(slideCountMob <= 0){
		slideCountMob = slidesMob.length - 1
	}else{
		slideCountMob--
	}

	hideSlide()
	showSlide(slideCountMob)
})

nextBtnMob.addEventListener('click', () => {
	if(slideCountMob >= slidesMob.length - 1){
		slideCountMob = 0
	}else{
		slideCountMob++
	}

	hideSlide()
	showSlide(slideCountMob)
})

function showSlide(i = 0){
	slidesMob[i].classList.add('active')
}

function hideSlide(){
	slidesMob.forEach((slide) => {
		slide.classList.remove('active')
	})
}
hideSlide()
showSlide()
// /Fade Slider for Mobile version ends
// =================================== THE END ==================================================