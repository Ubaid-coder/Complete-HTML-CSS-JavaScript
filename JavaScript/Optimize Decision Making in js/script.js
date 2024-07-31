
let userage = prompt('enter your age');

if(userage > 0 && userage < 5){
    console.log('user is a kid');
}

else if(userage > 5 && userage < 18){
    console.log('user is a student');
}

else if(userage > 18 && userage < 25){
    console.log('user is a college student');
}

else if(userage >= 120){
    console.log("Your are immortal");
}

else if(userage < 0){
    console.log('Please enter a valid age');
}

if(!userage){
    console.log('user is not existing');
}

console.log('Program ended')