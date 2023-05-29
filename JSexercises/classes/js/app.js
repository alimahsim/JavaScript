// // console.log("Testing ... ");

// class Vehicle{
//     constructor(_name, _color, _year, _wheels){
//       this.name = _name;
//       this.color= _color;
//       this.year = _year
//       this.numWheels = _wheels;
//     }
//     // get wheels(){
//     //   return this.numWheels;
//     // }
//     // set wheels(_wheels){
//     //   this.numWheels = _wheels;
//     // }
//     static accelerate(){
//       console.log("go faster");
//     }
//     static decelerate(){
//       console.log("go slower");
//     }
//   }
  
// // console.log(Vehicle);
// Vehicle.decelerate() // method// Vehicle.wheels() 
// const car1 = new Vehicle('BMW','white', 2020, 4)
// console.log(car1);
// //   console.log(car1.name);
// //   console.log(car1.color);
// //   console.log(car1.year);
// //   console.log(car1.wheels);

// const car2 = new Vehicle('BMW','black', 2019, 4)
// //   console.log(car2);
// //   console.log(car2.year);

// const car3 = new Vehicle('GM','black', 2013, 4)
// //   console.log(car3);

// class Car extends Vehicle{
//     constructor(_name, _color, _year, _wheels){
//         super(_name, _color, _year, _wheels)

//     }
//     info(){
//         console.log("The", this.name,"'s color is ", 
//         this.color, "and made in ", this.year );
//     }
// }

// const toyota = new Car("Camry", "red", 2020, 4)
// console.log(toyota)
// toyota.info()
// // console.log();
// Car.accelerate()
// Car.accelerate()
// Car.accelerate()
// // toyota.accelerate() // error


// OWA CLASSES

// class Student {
//   constructor(name, surname, age){
//     this.name = name,
//     this.surname = surname,
//     this.age = age 
//     // this.sayHi = function(){
//     //   console.log("HI")
//     // }
//   }
//   sayHi(){
//     console.log("Hello", this.name );
//   }
//   sayBye(){
//     console.log("Bye-bye", this.name);
//   }
// }

// // Student.sayHi() // error
// let s1 = new Student('John', 'Doe', 25)
// console.log(s1)
// s1.sayHi()

// let s2 = new Student('Martin', 'King', 40)
// console.log(s2)
// s2.sayBye()



// class StudentBase {
//   constructor(){
//     this.students = [],
//     this.idCount = 0
//   }
//   addStudent(studentData){
//     this.idCount++
//     let studentObj = {id: this.idCount, ...studentData}
//     this.students.push(studentObj)
//   }
//   getStudentById(studentId){
//     return this.students.filter((student)=>{
//       return studentId == student.id
//     })//[0] // object
//   }
// }

// let base = new StudentBase()
// // console.log(base)

// base.addStudent({name:'John', surname:'Doe', age: 25})
// base.addStudent({name:'Martin', surname:'King', age: 41})
// base.addStudent({name:'Arnold', surname:'Forbes', age: 30})

// // console.log(base)
// console.log(base.students)

// console.log(base.getStudentById(1))

// class ProductBase{
//   constructor(){
//     this.products = [],
//     this.idCounnt = 0
//   }
//   addProduct(productData){
//     this.idCounnt++
//     let productObj = {id: this.idCounnt, ...productData}
//     this.products.push(productObj)
//   }
//   getProduct(productId){
//     return this.products.filter((item)=>{
//       return productId == item.id
//     })  
//   }
//   // removeBuyed(productIdForDel){
//   //   return this.products.filter((item)=>{
//   //     return delete productIdForDel == item.id
//   // })
//   // }
// }

// const base = new ProductBase()
// console.log(base);

// base.addProduct({name: 'apple', price: 5000})
// base.addProduct({name: 'banana', price: 21000})
// base.addProduct({name: 'limon', price: 15000})

// console.log(base.getProduct(1))
// console.log(base.getProduct(2))
// console.log(base.getProduct(3))




function isItANum(str) {
  // your code here;
    let arr = []
    for(let i =0; i < str.length; i++){
    if(!isNaN(str)){
      (arr.push(str[i]))
      }
    }













