const username = prompt('enter your name');

if(username == null || username == ''){
    console.log("Anurag is a pro coder");
}
else{
    console.log(username," is a pro coder");
    console.log('The length of user name is ',username.length);
    console.log('The length of username is ',typeof username);
}

debugger

// const userAge = parseInt(prompt('enter your age'));
// let  userAge;

// console.log(`Name: ${username}`);
// console.log(`Age: ${userAge}`);

// if (userAge >= 25 && userAge <= 45) {
//     console.log(`Age: ${userAge} is eligible for working`)
// }
// if(userAge >= 60){
//     console.log(`Retired: ${userAge}`)
// }


let userAge = prompt('enter you age');
let age = parseInt(userAge);

if(userAge == '' || userAge == null){
    console.log('age is not entered');
}




