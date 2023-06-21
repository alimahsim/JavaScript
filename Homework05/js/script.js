console.log("Hello world!");

function showNames(userInfo){
	if (userInfo.name.length > 5 ){
		console.log(`${userInfo.name} is longer than 5 letters.`);
	}else if (userInfo.name.length < 5){
		console.log(`${userInfo.name} is shorter than 5 letters`);
	}else{
		console.log(`${userInfo.name} is ecual to 5 letters`)
	}
}

let users = [
	{name:'John'},
	{name:'Martin'},
	{name:'Adams'},
	{name:'Bernard'}, 
	{name:'Simon'},
	{name:'Jonson'},
	{name:'Hector'},
	{name:'Anna'},
	{name:'Nick'},
	{name:'Andrew'}	
];

for (let i = 0; i < users.length; i++){
	showNames(users[i]);
};
