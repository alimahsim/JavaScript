// // console.log("Testing...");


// GET

// let req = new XMLHttpRequest()
// // console.log(req.readyState); // 0

// req.open("GET",'https://jsonplaceholder.typicode.com/todos/1')
// // console.log(req.readyState); // 1

// req.setRequestHeader ("Content-type", "application/json")

// req.send()
// // console.log(req.readyState); // 1 

// // checkıng by readystatechange
// req.addEventListener("readystatechange", ()=>{
//     if(req.status === 200 && req.readyState === 4){
//         console.log(JSON.parse(req.response)); // 4
//     }
//     // console.log(req.readyState); // 3
// })

// by load
// req.addEventListener("load", ()=>{
//     if(req.status === 200){
//         console.log(JSON.parse(req.response)); // 4
//     }
//     // console.log(req.readyState); // 3
// })

// POST 

// let obj = {
//     name: "John",
//     surname: "Doe",
//     age: 34
// }

// let reqPost = new XMLHttpRequest()

// reqPost.open("POST","https://jsonplaceholder.typicode.com/posts")

// reqPost.setRequestHeader ("Content-type", "application/json")

// reqPost.send(JSON.stringify(obj))

// reqPost.addEventListener("readystatechange", ()=>{
//     if(reqPost.status === 201 && reqPost.readyState === 4){
//         console.log(JSON.parse(reqPost.response));
//     }
// })


// Homework 

// let obj = JSON.parse(JSON.stringify({ "id": 159, "advice": "What's stopping you?"}))
// console.log(obj);

// for(let key in obj){
//     console.log(obj[key]);
// }

// for (let [key, value] of Object.entries(obj)) {
//     console.log(`${key}: ${value}`);
// }

// Object.entries(obj).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`)
// });

// let textEl = document.querySelector('.text')
// // textEl.innerText = 'Bla bla bla'

// let adviceEl = document.querySelector('.idnum')
// // adviceEl.innerText = 200

// let roundEl = document.querySelector('.round')
// // roundEl.style.background = 'red'


// // roundEl.addEventListener('click',()=>{
// //     // console.log('blaa');
// //     adiveIdEl.innerText = 500
// //     textEl.innerText = 'Everything is norm'
// // })

// let req = new XMLHttpRequest()
// let resObj = ''
// // let res = ''

// function changeInfo(){
//     req.open("GET", "https://api.adviceslip.com/advice")

//     // req.setRequestHeader ("", "application/json")
//     // req.setRequestHeader ("Content-type", "application/json")
//     req.send()

//     req.addEventListener("readystatechange", ()=>{
//         if(req.status === 200 && req.readyState === 4){
//             resObj = JSON.parse(req.response).slip

//             let res = JSON.parse(req.response).slip
//             // res = JSON.parse(req.response).slip
        
//             adviceEl.innerHTML = res.id
//             textEl.innerHTML = res.advice

//             // Object.entries(resObj).forEach(([key, value]) => {
//             //     // console.log(`${key}: ${value}`)
//             //     adviceEl.innterText = [key]
//             //     textEl.innerText = [value]
//             // });
//             // for(let key in resObj){
//             //     adviceEl.innterText = key[0]
//             //     textEl.innerText = resObj[key]

//             //     console.log(key, resObj[key]);
//             // }

//         }
//     })
// }
// roundEl.addEventListener('click', changeInfo)

// console.log(adviceEl);

// console.log(objAPI);
// console.log(res);

// Object.entries(obj).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`)
// });

let textEl = document.querySelector('.text')
// textEl.innerText = 'Bla bla bla'

let adviceEl = document.querySelector('.idnum')
// adviceEl.innerText = 200

let roundEl = document.querySelector('.round')
// roundEl.style.background = 'red'

function showInfo(){
    fetch("https://api.adviceslip.com/advice")
    .then((data)=>{
        return data.json()
    })
    .then((data)=>{
        // console.log(data);
        // console.log(data.slip);
        // console.log(data.slip.id);
        // console.log(data.advice);
        adviceEl.innerHTML = data.slip.id
        textEl.innerHTML = data.slip.advice
    })
}
roundEl.addEventListener('click', showInfo)
