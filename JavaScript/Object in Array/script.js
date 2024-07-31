const fruits = ['Mango', 'Apple', 'Orange'];

// let myFruits = fruits;

// myFruits.push('Dates');
// myFruits.push('Grapes');

const myFruits = [].concat(fruits);
// const myFruits = [...fruits]; Best way 

myFruits.push('Guava');
myFruits.push('Grapes');

myFruits.pop();

const user = {
    firstName: 'Anurag',
    lastName: 'Singh',
    age: 20,
    pata:{
        city: 'Delhi',
        pincode: 988754
    }
}

// const user2 = user;
// user2.lastName = 'Panday'

// const  user2 = {};
// Object.assign(user2, user);  Too old
const user2 = JSON.parse(JSON.stringify(user));






// const username1 = 'Anurag';

// let username2 = username1;

// username2 = username2 + 'Singh';