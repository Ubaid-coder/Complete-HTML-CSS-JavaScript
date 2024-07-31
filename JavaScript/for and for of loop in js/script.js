


const fruits = ['banana','apple','peach','guava','papaya'];

// for(let i =0; i< fruits.length; i++){
//     console.log(fruits[i]);
// }

// for(const fruit of fruits){
//     console.log(fruit);
// }

const userName = 'MuhammadUbaid';

// for(let letter of userName){
//     console.log(letter);
// }
// console.log(userName.length)


const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue',
    city: 'Banglore'
}

// for(let info of person){
//     console.log(info);
// }

for(let letter in person){
    console.log(`${letter}: ${person[letter]}`);
}

const personKeys = Object.keys(person);
const personValues = Object.values(person);
const personEntries = Object.entries(person);

// for(let key of personKeys){
//     console.log(person[key])
// }