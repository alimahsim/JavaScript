let coder = {
    name: 'Ali',
    surname: 'Nematov',
    age: 36,
    pet: {
        name: 'Toms'
    }
}
console.log(coder);

let header = document.querySelector('h1')
console.log(header);

header.innerText += " Salom Dunyo!"
// header.innerText += JSON.stringify(coder)

let req = new XMLHttpRequest();
// console.log(req);
// console.log(req.readyState);

// req.open('GET', 'https://jsonplaceholder.typicode.com/todos/1')
// console.log(req.readyState);

// req.setRequestHeader('Content-type', 'application/json')
// console.log(req.readyState);

// req.send()
// console.log(req.readyState);

// req.addEventListener('readystatechange', () =>{
//     if(req.status === 200 && req.readyState === 4){
//         console.log(req.response);
//         console.log(req.readyState);
//     }
//         console.log(req.readyState);
// })

// // req.addEventListener('load', () =>{
// //     if(req.status === 200){
// //         console.log(req.response);

// //     }
// // })


req.open('POST', 'https://jsonplaceholder.typicode.com/posts')

req.setRequestHeader('Content-type', 'application/json')

req.send(JSON.stringify(coder))

// req.addEventListener('readystatechange', () =>{
//     if(req.status === 200 && readystate === 4){
//         console.log(req.response);
//     }
// })

req.addEventListener('load', () =>{
    if(req.status === 201){
        console.log(req.response);
    }
})
