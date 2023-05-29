const btnEl = document.querySelector('.btn')
const txtEl = document.querySelector('.text')




txtEl.addEventListener('scroll', ()=>{
    if(txtEl.scrollHeight == 0){
        console.log('the end')
    };
});

// btnEl.addEventListener('click', ()=>{
//     // down to 200px
//    //return txtEl.scrollTop = 200
//    // down to bottom
//     return txtEl.scrollTop = txtEl.scrollHeight - txtEl.clientHeight;
//    // down to middle of it
//   // return txtEl.scrollTop = (txtEl.scrollHeight - txtEl.clientHeight)/2;
// });

// console.log(txtEl);

// console.dir(txtEl);

// // OFFSET 

// console.log(txtEl.offsetTop); // 58px
// // After adding rectangle element in HTML with 100px hiehgt
// console.log(txtEl.offsetTop); // 198px

// console.log(txtEl.offsetLeft) // 52  (52px)
// console.log('offsetHeight ==> ' , txtEl.offsetHeight);
// console.log('offsetWidth ==> ' , txtEl.offsetWidth);

// // CLIENT

// console.log('clientHeight ==> ' , txtEl.clientHeight); // 430
// console.log('clientWidth ==> ', txtEl.clientWidth); // 1017 
// // Before giving border to .text element in HTML
// console.log('clientTop ==> ', txtEl.clientTop); // 0
// console.log('clientLeft ==> ', txtEl.clientLeft); // 0
// // After 
// console.log('clientTop ==> ', txtEl.clientTop); // 49
// console.log('clientLeft ==> ', txtEl.clientLeft); // 49


// console.log('sctollHeight ==> ', txtEl.scrollHeight);
// console.log('sctollWidht ==> ', txtEl.scrollWidth);

// btnEl.addEventListener('click',() =>{
//     txtEl.scrollTop;
//     console.log('done');
// })
