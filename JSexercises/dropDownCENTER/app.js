const dropdownWrapper = document.querySelector('.wrapper');
const langCurrent = document.querySelector('.language-current .language')
const langDropdown = document.querySelector('.language-dropdown')
const langs = document.querySelectorAll('.language-dropdown .language')


let language = langCurrent.dataset.lang

function toggleDropdown(e){
	langDropdown.classList.toggle('active')
	// console.log(e.currentTarget)
}

function closeDropdown(){
	langDropdown.classList.remove('active')
}

function changeLanguage(element, dataLang){
	element.setAttribute('data-lang', dataLang)
	element.firstElementChild.setAttribute('src', `img/${dataLang}.png`)
}

langCurrent.addEventListener('click', toggleDropdown)

langs.forEach(langItem => {
	langItem.addEventListener('click', (e) => {
		let clickLang = langItem.dataset.lang
		let currentLang = langCurrent.dataset.lang

		changeLanguage(langCurrent, clickLang)
		changeLanguage(langItem, currentLang)
		
		language = clickLang

		toggleDropdown()

	
	})
})




window.addEventListener('click', (e) => {
	if(!e.target.parentElement.classList.contains('language')){
		closeDropdown()
	}

	console.log(e.target)
})
