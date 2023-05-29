
let tabLink = document.querySelectorAll('.tab-link');
let tabContent = document.querySelectorAll('.tab');
let headTs = document.querySelector('.head-tabs')

function removeActiveClass(){
    tabContent.forEach(item =>{
        item.classList.remove('tab-active');
    })
    tabLink.forEach(item =>{
        item.classList.remove('tab-link_active');
    })
};

function addActiveClass(index = 0){
    tabContent[index].classList.add('tab-active');
    tabLink[index].classList.add('tab-link_active');
};

// tabLink.forEach((item , i) => {
//     item.addEventListener('click', () =>{
//     //console.log(i)
//     removeActiveClass()
//     addActiveClass(i)

//     })
// });

addActiveClass()

// headTs.addEventListener('click', (e)=>{
//     // console.log(e.target);
//     tabLink.forEach((link) =>{
//         if(e.target === link){
//             console.log('done');
//         }
//     })
// })

headTs.addEventListener('click', (e)=>{
    // console.log(e.target);
    tabLink.forEach((link, i) =>{
        if(e.target === link){
            removeActiveClass()
            addActiveClass(i)
        }
    })
})