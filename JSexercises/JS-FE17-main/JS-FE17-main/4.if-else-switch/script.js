let num = 60

// if else

// if(num === 50){
// 	console.log('50ga teng')
// }

// if(num > 50) {
// 	console.log('50 dan katta')
// }else{
// 	console.log('50 dan kichik')
// }


if(num > 50) {
	console.log('50 dan katta')
}else if(num === 50){
	console.log('50ga teng')
}else if(num > 40){
	console.log('40 ga teng')
}else{
	console.log('50 dan kichik')
}

// ternary

num = 55; 

// (num == 55) && console.log('ok')

(num == 55) ? console.log('ok') : console.log('error')

// switch

let color = 'brown'

switch(color){
	case "brown":
		console.log('ok')
		break
	case "violet":
		console.log('ok1')
		break
	case "white":
		console.log('ok2')
		break
	default:
		console.log('error')
}

if(color === "brown"){
	console.log('ok')
}else if(color === 'violet'){
	console.log('ok')
}else if(color === 'white'){
	console.log('ok')
}else{
	console.log("error")
}

let cardNumber = 1234

if(cardNumber){
	console.log("Karta raqam to'g'ri")
}else{
	console.log("Karta raqam noto'g'ri")
}

// if(cardNumber !== ''){
// 	console.log("Karta raqam to'g'ri")
// }else{
// 	console.log("Karta raqam noto'g'ri")
// }

let str = ''

if(!str){
	console.log("Bu bo'sh string")
}else{
	console.log("Bu bo'sh string emas")
}



let fruits = 'apple'
let fruit2 = 'kiwi'
let fruit3 = 'orange'

// bizda bor apple kiwi orange

// 'apple' === 'apple' true
// 'kiwi' === 'kiwi' true
// 'banana' === 'orange' false
// true && true && true

if(fruit === 'apple' && fruit2 === 'kiwi' && fruit3 === 'orange'){
	console.log('Tez orada yetqazamiz')
}else if(fruit3 !== 'orange'){
	console.log('bizda 3-kiritilgan meva yo\'q')
}
else{
	console.log('Meva qolmadi')
}


// propm1 -- ism1
// propm2 -- yoshi1

// propm3 -- ism2
// propm4 -- yoshi2

let user1 = { 
	name: 'Azamat',
	age: 23
}

let user2 = {
	name: "Akbar",
	age: 45
}

// Homework - Calc, User Age 

