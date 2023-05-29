console.log("Testing 2 ...");

// // Ex #1

// let name = prompt("Enter your name , please");
// let age = Number(prompt("Now enter your age , please"));
// let age = +prompt("Now enter your age , please");

// let result = `${name} you were born in ${2023-age} year.`

// console.log(result)

// // Ex #2 Is array stores that name?

// let names = ['John', 'Alex', 'Helen']

// let name1 = prompt("Guess the name in the array:") 

//     if(names.includes(name1)){
//         console.log("You've found the name.")
//     }else{
//         console.log("You've not found the name.")
//     }

// // Ex #3 adding 'jon' 

// let names = ['John', 'Alex', 'Helen']

// for (let i = 0; i < names.length; i++){
//     console.log(`${names[i] + 'jon'/*.toUpperCase()*/}`);
// }

// // Ex #4 showing numbers of population according to prompted region 

// let stateName = prompt("Enter the name of the region and you'll be given populaation of it:")

// switch(stateName){
//     case "Dallas":
//         console.log(`${stateName} has 25 mln populstion`)
//         break;
//     case "Utah":
//         console.log(`${stateName} has 28 mln populstion`)
//         break;
//     case "Chicago":
//         console.log(`${stateName} has 38 mln populstion`)
//         break;
//     default:
//         console.log(`There is no this region in the USA`)
// }


// let stateName = prompt("Enter the name of the region and you'll be given populaation of it:")

// if(stateName == "Dallas" ){
//     console.log(`${stateName} has 25 mln populstion`)
// }else if(stateName == "Utah"){
//     console.log(`${stateName} has 28 mln populstion`)
// }else if(stateName == "Chicago"){
//     console.log(`${stateName} has 38 mln populstion`)
// }else{
//     console.log(`There is no this region in the USA`)
// }

// // Ex #5 Prompted symbols more or less from 20

// let symbols = prompt("Enter the symbols, please")

// if(symbols.length > 20){
//     console.log(`You've ${symbols.length - 20} more symbols entered`)
// }else if(symbols.length < 20){
//     console.log(`You've  ${20 - symbols.length} less symbols entered`)
// } 


// let vowels = ['a', 'e', 'i', 'o', 'u'];

// let str = "LeaRNeRSBuCKeT iS THe BeST WeBSiTe To LeaRN PRoGRaMMiNG";
// let temp = "";
// for(let chars of str){
//     if(vowels.includes(chars)){
//         temp += chars.toUpperCase();
//     }else{
//         temp += chars;
//     }
// }
// console.log(temp) //LEARNERSBUCKET IS THE BEST WEBSITE TO LEARN PROGRAMMING
// let nums = [1,2,3,10,5]
// // let nums = null
// function solution(nums){
//     let emptyArr = []
//     if(nums !== null){
//         let sortedArr = nums.sort((a,b) => a-b)
//         return sortedArr
//     }else{
//         return emptyArr
//     }  
// }
// console.log(solution(nums))

// function solution(nums){
//     let emptyArr = []
//     if(nums !== null )
//       let sortedArr = nums.sort((a, b) => a-b)
//     return !emptyArr ?  sortedArr || !sortedArr ? emptyArr 
//   }
    

// let str = 'hello'
// console.log(str);

// str = 'H' + str[1]
// console.log(str);

// let str = "How Can Mirrors Be Real If Our Eyes Aren't Real"
// // console.log(str.toLowerCase())

// // const str2 = str.charAt(0)
// // const str2 = str[0]
// // const str2 = str.toUpperCase()
// // const str2 = str.slice(1);
// // const str2 = str.charAt(0).toUpperCase() + str.slice(1)
// // const str2 = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// const str2 = str[0].toUpperCase() + str.slice(1).toLowerCase();
// console.log(str2)

// Reversing it 

// let normStr = "How can mirrors be real if our eyes aren't real"
// console.log(normStr);

// let splitedStr = normStr.split(' ')
// console.log(splitedStr);

// for(let i = 0; i < splitedStr.length; i++){
//    console.log(splitedStr[i] = splitedStr[i][0].toUpperCase() + splitedStr[i].slice(1);
// }
// console.log(splitedStr.join(''))

// const mySentence = "How can mirrors be real if our eyes aren't real" //"freeCodeCamp is an awesome resource";
// const words = mySentence.split(" ");
// let newSen = ''

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
// }

// newSen = words.join(" ");

// console.log(newSen)

// let numList = [1, 1, 2, 3] // 5
// function sumNoDuplicates(numList) {
//     let sum = 0
//     numList.filter((item, i) =>{
//       if(numList.indexOf(item) !== i){
//        console.log(item)
//       }
//     })
//   }
//   sumNoDuplicates(numList) // not finished yet

// const mixObj = {
//   name: 'John',
//   surname: 'Doe',
//   age: 36,
//   langs: ['english', 'russian', 'uzbek'],
//   login: function(){
//     console.log("You've logged in the site")
//   },
//   logout: () =>{
//     console.log("You've logged out the site")
//   },
//   movies: [
//     {name: 'Avatar', likes: 1500},
//     {name: 'Titanic', likes: 2500},
//     {name: 'Mad Max', likes: 3500},
//   ],
//   canSpeak: function (){
//     this.langs.forEach((lang)=>{
//       console.log(`I can speak ${lang}`)
//     })
//   },
//   watchMovies: function(){
//     this.movies.forEach((movie)=>{
//     console.log(`I've watched ${movie.name} recently`)
//     })
//   }
//   // name: 'Bernard',
//   // surname: 'King', 
// }

// // console.log(mixObj)
// // console.log(mixObj.name)
// // console.log(mixObj.surname)
// // console.log(mixObj.age)
// // console.log(mixObj.langs)
// mixObj.login()
// mixObj.logout()
// // console.log(mixObj.movies)

// mixObj.canSpeak()
// mixObj.watchMovies()



// THIS 

// let user = {
//     name: 'Marvel',
//     surname: 'Adams',
//     age: 40,
//     sayHi: function(){
//         // console.log('Hello')
//         console.log(this)

//         function info (){
//             console.log(this)
//         }
//         // info()
//     }
// }

// // function info(){
// //     console.log(this)
// // }
// user.sayHi()

// will be continued ... 

// CLASSes


// #1
// class Student {
//     constructor(){
//         this.name = 'John'
//         this.surname = 'Doe'
//         this.age = 25
//     }
// }

// let student1 = new Student()
// console.log(student1);

// let student2 = new Student()
// console.log(student2);

// // #2
// class Student {
//     constructor(name, surname, age){
//         this.name = name
//         this.surname = surname
//         this.age = age
//     }
// }

// let student1 = new Student('Jhon', 'Doe', 30)
// console.log(student1);

// let student2 = new Student('Alex', 'Martin', 25)
// console.log(student2);

// #3
// class Student {
//     constructor(name, surname, age){
//         this.name = name,
//         this.surname = surname,
//         this.age = age
//         this.sayHi = function(){
//             console.log("Hi");
//         }
//     }
// }

// let student1 = new Student('Jhon', 'Doe', 30)
// console.log(student1.name);

// let student2 = new Student('Alex', 'Martin', 25)
// console.log(student2.name);
// student1.sayHi()

// #4
// class Student {
//     constructor(name, surname, age){
//         this.name = name,
//         this.surname = surname,
//         this.age = age
        
//     }
//     sayHi = function(){
//         console.log(this.name + ", Hi");
//     }
//     sayBye = function(){
//         console.log(this.name + ", Bye-bye");
//     }
// }

// let student1 = new Student('Jhon', 'Doe', 30)
// console.log(student1.name);

// let student2 = new Student('Alex', 'Martin', 25)
// console.log(student2.name);
// student1.sayHi()
// student2.sayBye()

//#5
// class Student {
//     constructor(){
//         this.students = []
//         this.idCount = 0
//     }
//     addStudent(studentData){
//         this.idCount++
//         let studentObj = {id: this.idCount, ...studentData}
//         this.students.push(studentObj);
//     }
//     getStudent(getStudentById){
//         return this.students.filter((item)=>{
//             return getStudentById == item.id
//         })
//     }
// }

// let base = new Student()

// base.addStudent({name: 'Alex', surname: 'Martin', age: 25})
// base.addStudent({name: 'John', surname: 'Doe', age: 30})
// base.addStudent({name: 'Albek', surname: 'Nematov', age: 36})
// console.log(base);

// console.log(base.getStudent(3));

// class Rectangle {
//     constructor(options){
//         this.width = options.width
//         this.height = options.height
//         this.bgc = options.bgc
//         this.result = ''
//     }
//     create(){
//         let rec = document.createElement('div');
//         rec.className = 'rec';
        
//         rec.style.width = this.width + 'px'
//         rec.style.height = this.height + 'px'
//         rec.style.background = this.bgc
//         // rec.style.display = 'none'
//         this.result = rec        
//     }
//     render(){
//         document.body.prepend(this.result)
//         // return this.result.style.display = 'block'
//     }
// }

// let rec1 = new Rectangle ({
//     width: 300,
//     height: 150,
//     bgc: "red"})

// let rec2 = new Rectangle ({
//     width: 400,
//     height: 200,
//     bgc: "green"})
    
// console.log(Rectangle())

// rec1.create()
// rec1.render()

// rec2.create()
// rec2.render()

// class Students {
//     constructor(students){
//     this.students = []
//     }
// }
// class Student extends(){
//     constructor(){
//     super(students)
//  }
// }

