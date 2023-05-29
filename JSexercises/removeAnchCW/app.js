console.log("Hello world!");

// 01 remove # 

let url = "www.codewars.com#about";
let url2 = "www.codewars.com?page=1"
/*
function removeAnch(url){
    if (url.includes('#')){
        url.slice(0 . )}
}
console.log(removeAnch(url));
*/
/*
function removeUrlAnch(url) {
    const anch = url.indexOf("#");

    return !anch ? url : url.slice(0, anch);
}
console.log(removeUrlAnch(url));
*/

// 02 count of vowel letters

/*
function countVowels(str){
    let vowels = 0;
    for(let i = 0; i < str.length; i++)
    if(str.includes('a' || 'o' || 'e' || 'i' || 'u')){
        Number(vowels) += str[i];
    }
}
console.log(countVowels(str));
*/

let str = "www.codewars.com#abouta";

function countVowels(str) {
    let vowelsCount = 0
    let vowels = ["a", "e", "i", "o", "u"]
    for(let vowel of str) {
        if(vowels.includes(vowel)){
            vowelsCount++
        }
    }
    return vowelsCount;
  }
console.log(countVowels(str));