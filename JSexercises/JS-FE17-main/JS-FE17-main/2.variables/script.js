// let var const
// EcmaScript 2015 ES6
// Number
// String
// Boolean
// Undefined 
// Null
// Object
// BigInt
// Symbol

// falsy qiymatlar:
// 0
// ''
// false
// null
// undefined
// NaN 

// let result = typeof(num)
// console.log(typeof num)

let firstname = "John"
let lastname = "Smith"

let num = "5"
let num2 = 8

let r1 = Number(num)
let r2 = String(num2)

let num3 = 'Open Web'

// console.log(Number("45"))
// console.log(typeof r2)

// console.log(typeof NaN)
// NaN - Not a Number

// console.log(num + num2)


let smth = 5

// code
smth = 6
// console.log(smth)

//Boolean

let bool = true
let bool2 = false

// console.log(Boolean(''))

// console.log(5 + 'open web') // 5openweb
// console.log(5 - '6') // -1
// console.log(5 - 'open web') // NaN

// console.log(true - "false")

// console.log(true + 2)

// console.log(Boolean(-1))

// undefined

let und

// console.log(und)

// null

let n = null

// Object - Array

let arr = [5, "Open Web", true, [], {}, null, undefined]

// console.log(arr[3])
// console.log(typeof arr)

let user = {
	name: "John",
	surname: "Smith",
	age: 34,
	pet: {
		name: 'Bobik'
	},
}

// console.log(user["name"])

// console.log(user.pet.name)
// console.log(user.surname)

let bigint = 2n

// console.log(typeof bigint)


// alert('World')
// let result = prompt('Ismingiz nima?', 'Alex')
// let result = prompt('Ismingiz nima?')
// let resultConfirm = confirm('Some')

let namePropmt = prompt('Ismingiz nima?')
let surnamePropmt = prompt('Ismingiz nima?')
let agePropmt = prompt('Ismingiz nima?')

let user2 = {}

user2.name = 'some'

console.log(user2)
