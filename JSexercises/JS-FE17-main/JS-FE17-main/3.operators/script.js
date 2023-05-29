// Operators, unary, binary

// Math
let num = 5, 
		num2 = 2;

console.log(+'sdf')
console.log(typeof +'sdf')
// unary
console.log(+num)
console.log(-num)

// binary
console.log(num + num2) //num - operand(argument), + operator
console.log(num - num2)
console.log(num / num2)
console.log(num * num2)
console.log(num % num2) 
console.log(num ** num2) 

// ternary
true ? 'ok' : 'error'

//increment ++
//decrement -- 
//postfix, prefix

num = 5;

console.log(num++)
console.log(++num)

// num = num + 1
// num = 5 + 1
// num = 6
// num++ // increment postfix
// ++num // increment prefix
// num-- // decrement postfix
// --num // decrement prefix

// Taqqoslash

num = 5
num2 = 5

// ==, ===, <, >, >=, <=

// console.log(num >= num2)
// console.log(num == num2)
// console.log(num === num2)

let str = 'Azamat',
		str2 = 'Bilol'

console.log(str > str2)
console.log("Azamat" > "Alibek")
console.log('2' > 1)

// "A" - U100
// "B" - U101
// "C" - U102

// Mantiqiy operatorlar
// ||, && , !

// || - yoki, or
// && - va, and
// ! - emas, not

console.log(null || undefined || 5 || 'Open web')// true qoqiladi
				// false || false || true || true

console.log(null && undefined && 5 && 'Open web')// false qoqiladi
					// false || false || true || true

console.log(null || undefined || '' || 0)// true qoqiladi
				// false || false || false || false

console.log(6 && ['a'] && 5 && 'Open web')// false qoqiladi
					// true || true || true || true

console.log( 0 || undefined && null || 'Open web' )// && > ||
							// 0 || undefined || 'Open web'
					// false || false && false || true


num = 5
num2 = "5"

//not - unary
console.log(!!num)

//not - binary
console.log(num !== num2)

num = 5

console.log(!!num !== num)
						// true == 5
						//  1 == 5


// nullish ?? null undefined

let width = null

let elementWidth = width ?? 0 //true qoqiladi

div.style.width = elementWidth