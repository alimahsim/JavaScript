let tabLinks = document.querySelectorAll('.tab-link'),
    tabContent = document.querySelectorAll('.tab-content');

// console.log(tabLinks);

tabLinks.forEach((element , i) => {
    element.addEventListener('click',()=>{
        // console.log(element);
        // console.log(i);
        removeActiveClasses()
        tabContent[i].classList.add('tab-content_active')
    })
});

// function addActiveClasses(){

// }

function removeActiveClasses(){
    tabContent.forEach(item => {
        item.classList.remove('tab-content_active')
    });
}