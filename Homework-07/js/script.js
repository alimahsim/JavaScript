
console.log("Hello world!");

console.log('I should che\'ck how string methods work'); // ''
console.log("I should che\rck how string methods work"); // ""
console.log('I should che\\ck how string methods work');
console.log('I should che\tck how string methods work');
console.log('I should che\bck how string methods work');
console.log('I should che\fck how string methods work');
console.log(`I should che\vck how string methods work`); // ``

let str = 'myword';
console.log("myword".length); // 6
console.log(str.length); // 6
console.log(str[0]); // m
console.log(str.at(0)); // m
console.log(str.at(-1)); // d
console.log(str[-1]); // d

let str2 = 'Hi';
str[0] = 'h'; // error
console.log( str2[0] ); // doesn't work

let str3 = 'Hi';
str3 = 'h' + str3[1]; // replace the string
console.log( str3 ); // hi

// Changing the case
// Methods toLowerCase() and toUpperCase() change the case:

console.log('upper'.toUpperCase()); // UPPER
console.log('LOWER'.toLowerCase()); // lower

// Or, if we want a single character lowercased:

console.log('LOWER'[0].toLowerCase()); // l
console.log('upper'[0].toUpperCase()); // U

// Searching for a substring
// There are multiple ways to look for a substring within a string.
 
// str.indexOf
// The first method is str.indexOf(substr, pos).

let srt4 = "I'm looking forword to being a developer"

console.log(srt4.indexOf ("I'm")); // 0
console.log(srt4.indexOf ("i'm")); // -1
console.log(srt4.indexOf ("looking")); // 4
console.log(srt4.indexOf ("to"));

// includes, startsWith, endsWith
// The more modern method str.includes(substr, pos) returns true/false depending on whether str contains substr within.

// It’s the right choice if we need to test for the match, but don’t need its position:

console.log( "Writing the codes is not easy ".includes("the") ); // true
console.log( "Hello".includes("Bye") ); // false

//The optional second argument of str.includes is the position to start searching from:

console.log( "Writing the codes is not easy".includes("is") ); // true
console.log( "Writing the codes is not easy".includes("not", 10) ); // false, from position 3 there is no "id"

//The methods str.startsWith and str.endsWith do exactly what they say:

console.log( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
console.log( "Widget".endsWith("get") ); // true, "Widget" ends with "get"


