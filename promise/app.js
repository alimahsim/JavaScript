// console.log('Testing ...');

// let promise = true

// let request = new Promise(function(resolve, reject){
//     if(promise){
//         resolve('Success');
//     }else{
//         reject('Error');
//     }
// })

// // request.then((str)=>{
// //     console.log(str);
// // }).catch((str2)=>{
// //     console.log(str2);
// // })

// request.then((str)=>{
//     console.log(str)
//     return 'Correct'
// }).then((data)=>{
//     console.log(data);
// }).catch((str2)=>{
//    console.log(str2)
// }).finally(()=>{
//     console.log('Finally');
// })

// HOMEWORK

// let string = 'Open'
// getInfo('open')

// function getInfo(str){
//     return new Promise((resolve, reject)=>{
//         if(!str === ''){
//             resolve("Success")
//         }else{
//             reject()
//         }
//     })
// }

// // let request = new Promise(function(resolve, reject){
// //     if(promise){
// //         resolve('Success');
// //     }else{
// //         reject('Error');
// //     }
// // })

// getInfo("Open").then((str)=>{
//     console.log(str);
// }).catch((str2)=>{
//     console.log(str2);
// })



// getInfo("Open")

// request.then((str)=>{
//     console.log(str)
//     return 'Correct'
// }).then((data)=>{
//     console.log(data);
// }).catch((str2)=>{
//    console.log(str2)
// }).finally(()=>{
//     console.log('Finally');
// })

let inputEl = document.querySelector('input');
// console.log(inputEl);
let btnEl = document.querySelector('.btn')
// console.log(btnEl);
let output = document.querySelector('.display')
// output.style.background = 'yellow'

// let promise = inputEl.value
// console.log(promise);

// btnEl.addEventListener('click', () =>{
//     // let promise = inputEl.value
//     output.innerText =  getInfo(inputEl.value)
//     inputEl.value = ''
// })

// function getInfo(string){
//     let request = new Promise(function(resolve, reject){
//         if(!string == ''){
//             resolve(string);
//         }else{
//             reject('Rubbish input mate!');
//         }
//     })
//     function slice2Letter(strForSlicing){
//         return strForSlicing.slice(2)
//     }
//     request.then((data)=>{
//         console.log(data)
//         // output.innerHTML = data
//         return data
//     }).then((data2)=>{
//         // output.innerHTML = slice2Letter(data2)
//         console.log(slice2Letter(data2))
//         let slicedData2 = slice2Letter(data2)
//         return slicedData2
//     }).then((data3)=>{
//         // output.innerHTML = slice2Letter(data3)
//         console.log(slice2Letter(data3));
//     }).catch((str2)=>{
//         output.innerHTML = str2
//         console.log(str2)
//         // return str2
//     }).finally(()=>{
//         // output.innerHTML = 'Anyway nothing to warry, looks everything is fine' 
//         // console.log('Anyway nothing to warry, looks everything is fine');
//         // return  'Anyway nothing to warry, looks everything is fine' 
//     })
// }


// ------------------------------------------------------
function getInfo(string){
    let request = new Promise(function(resolve, reject){
        if(!string == ''){
            resolve(string);
        }else{
            reject('Rubbish input mate!');
        }
    })
    
    function slice2Letter(strForSlicing){
        return strForSlicing.slice(2)
    }
    request.then((data)=>{
        console.log(data)
        return data
    }).then((data2)=>{
        console.log(slice2Letter(data2))
        let slicedData2 = slice2Letter(data2)
        return slicedData2
    }).then((data3)=>{
        console.log(slice2Letter(data3));
    }).catch((str2)=>{
        console.log(str2)
    }).finally(()=>{
        // console.log('Anyway nothing to warry, looks everything is fine');
    })
}
getInfo('open web')