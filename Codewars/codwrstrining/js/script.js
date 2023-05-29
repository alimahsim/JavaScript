// Codewars
// Filter out the geese 


// console.log("Testing ... ");

//let birds = ['Mallard', 'Hook Bill', 'African', 'Grested', 'Pligrim', 'Toulouse', 'Blue Swedish'];

//function geeseFilter(birds){
//    let geese = ['African', 'Roman Tufter', 'Toulouse', 'Pligrim', 'Steinbacher'];
//    let r = [];

//    birds.forEach((each)=>{
//        if(!geese.includes(each)){
//            r.push(each)
//        }
//    });
//    return r;
//}

// console.log(geeseFilter(birds));

// The opposite of it 

// let birds = ['Mallard', 'Hook Bill', 'African', 'Grested', 'Pligrim', 'Toulouse', 'Blue Swedish'];

// function geeseFilter(birds){
//     let geese = ['African', 'Roman Tufter', 'Toulouse', 'Pligrim', 'Steinbacher'];
//     let r = [];

//     birds.filter((each)=>{
//         for (let e of geese){
//             if(e == each){
//             r.push(e)
//           }
//         }
//     });
//     return r;
// }
// console.log(geeseFilter(birds));

// let birds = ['Mallard', 'Hook Bill', 'African', 'Grested', 'Pligrim', 'Toulouse', 'Blue Swedish'];

// function geeseFilter(birds){
//     let geese = ['African', 'Roman Tufter', 'Toulouse', 'Pligrim', 'Steinbacher'];
//     let r = [];

//     for (let e of geese){
//         for (let v of birds){
//             if(e !== v){
//                 r.push(v)
//             }
//         }
//     return r;
//     }
// }
// console.log(geeseFilter(birds));

// let birds = ['Mallard', 'Hook Bill', 'African', 'Grested', 'Pligrim', 'Toulouse', 'Blue Swedish'];

// function geeseFilter(birds){
//     let geese = ['African', 'Roman Tufter', 'Toulouse', 'Pligrim', 'Steinbacher'];
//     return birds.filter(bird=> !geese.includes(bird));
//  }
//  console.log(geeseFilter(birds))


// let birds = ['Mallard', 'Hook Bill', 'African', 'Grested', 'Pligrim', 'Toulouse', 'Blue Swedish'];

// function geeseFilter(birds){
//     let geese = ['African', 'Roman Tufter', 'Toulouse', 'Pligrim', 'Steinbacher'];
//     let r = [];
//     return birds.filter((bird)=> {
//         if(!geese.includes(bird)){
//           return r.push(bird)}
//     })
//  }
//  console.log(geeseFilter(birds))

// REVERSED STRING 

// let string = 'World'

// function solution(str){
//     return str.split("").reverse().join('')
// }
// console.log(solution(string)); // dloW

let s = 'hello'

// function shortcut(s){
    let newS = ''
    for(let i = 0; i < s.length; i++){
        // console.log(s[i]); // h e l l o
        if(!s[i]=='a' || !s[i]=='e' || !s[i]=='i' || !s[i]=='o' || !s[i] == 'u'){
            newS += s[i]
            console.log(newS);
            // console.log(s[i]) 
        }
    }
//     return newS
// }
// shortcut(str)
// console.log(shortcut(str))
