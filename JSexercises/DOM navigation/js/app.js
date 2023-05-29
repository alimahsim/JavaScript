// Testing ...
//console.log("Hello world!");

// Now let's get started  

// Selecting HTML elemnets
//let jsBtns = document.querySelectorAll('button');
//    jsBlocks = document.querySelectorAll('.block');

// // When click the next will be changed
//jsBtns[0].addEventListener('click', ()=> {
//    jsBlocks[0].style.background = 'blue';
//});

// Now we'll see the navigation

//console.log(document);

// console.dir(document); //document
// console.dir(document.firstChild); // <!DOCTYPE html>
// console.dir(document.lastChild); // html
// console.dir(document.body); // body
// console.dir(document.head); // head
// console.dir(document.documentElement); // html
// console.dir(document.documentElement.firstChild); // head
// console.dir(document.documentElement.lastChild); // body

// console.dir(jsBtns[0].firstChild.data); // Click
// console.dir(jsBtns[0].firstChild.textContent); // Click
// console.dir(jsBtns[0].firstChild.wholeText); // Click

// console.dir(document.body.firstChild); // #text
// console.dir(document.body.firstElementChild); // div.box-for-bnts

// console.dir(document.body.childNodes);

// console.dir(document.querySelector('.text').textContent); // Open Web
// // When <span style="display: none"></span>
// // innerText hides the span
// console.dir(document.querySelector('.text').innerText); // Open

//console.dir(jsBtns[0].firstChild); // #text
//console.dir(jsBtns[0].firstElementChild); // null , we've nothing

//console.dir(jsBtns[0].nextSibling);
//console.dir(jsBtns[0].nextElementSibling);


// Now we return to our function
// if new element added after first button , this code doesn't work 
//jsBtns[0].addEventListener('click', ()=> {
//    jsBlocks[0].style.background = 'blue';
//});

// // nextSibling
//jsBtns[0].addEventListener('click', ()=> {
//    jsBtns[0].nextSibling.style.background = 'blue';
//});

// // When we dd new element it works for it
// // nextElementSibling

//jsBtns[0].addEventListener('click', ()=> {
//    jsBtns[0].nextElementSibling.style.background = 'blue';
//});

// // previousElementSibling
//jsBtns[0].addEventListener('click', ()=> {
//    jsBtns[2].previousElementSibling.style.background = 'blue';
//});

//console.log(jsBtns[0].parentElement);
//console.log(jsBtns[0].parentElement.parentElement);

//console.log(navigator);
//console.log(window.location.href);

// // 02 TASK

let openBtn = document.querySelector('.modal-open');
    closeBtn = document.querySelector('.modal-close');
    modal = document.querySelector('.modal-mirror');

openBtn.addEventListener('click', ()=>{
    modal.style.display = 'flex';
    document.body.style.overflowY = 'hidden';
  
});
// closeBtn.addEventListener('click', ()=>{
//     modal.style.display = 'none';
//     document.body.style.overflowY = '';
//     openBtn.style.background = 'red'
// });

// modal.addEventListener('click', ()=>{
//     console.log("Modal is here");
// })

// modal.addEventListener('click', ()=>{
//     modal.style.display = 'none';
//     document.body.style.overflowY = 'hidden';
// });

function closeModal(){
    modal.style.display = 'none';
    document.body.style.overflowY = 'hidden';
    openBtn.style.background = 'rgb(26, 248, 119)';
  
}
closeBtn.addEventListener('click',closeModal);

// modal.addEventListener('click', (event)=>{
//    // closeModal()
//    console.log(event.target);
// });


// modal.addEventListener('click', (e)=>{
//     console.log(e.target);
//  });
 
//  modal.addEventListener('click', (e)=>{
//     if(e.target.classList.contains('modal-mirror'))
//     console.log("yes");
//     else{
//         console.log("No")
//     }
//  });
 

// modal.addEventListener('click', (e)=>{
//         if(e.target.classList.contains('modal-text'))
//         console.log("yes");
//         else{
//             console.log("No")
//         }
//      });
     
modal.addEventListener('click', (e)=>{
    if(e.target.classList.contains('modal-mirror')){
    closeModal()
    }
});
     
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

