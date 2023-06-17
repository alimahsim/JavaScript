console.log("Hello world!");

let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias soluta accusantium delectus quibusdam sunt nisi pariatur animi, deleniti quaerat? ";

let result = '';

function chekString(str){
    for(let i = 0; i < str.length; i++ ){
        if(!str[i].includes('o') && !str[i].includes('e') && !str[i].includes('u') && !str[i].includes('a') && !str[i].includes('i')){
            result += str[i];
        }else{
            result += '*';
        }
        }
    console.log(result);
}
chekString(str);
