
// const user1 = {
//     firstName: 'Anurag',
//     lastName: 'Singh',
//     age: 25,
//     getBirthYear: function () {
//         return new Date().getFullYear() - user.age;
//     }
// };


// createUser.userFunction = {
//     getBirthYear() {
//         console.log(this)
//         return new Date().getFullYear() - this.age;
//     }

// }

function createUser(firstName, lastName, age) {
    const user = {
        // firstName: firstName,
        // lastName: lastName,
        // age:  age,
        // getBirthYear: function(){
        //     return new Date().getFullYear() - user.age
        // }
        firstName,
        lastName,
        age,
        // getBirthYear: createUser.userFunction.getBirthYear
        // getBirthYear(){
        //     return new Date().getFullYear() - user.age
        // }
    };

    return user;
}

const user1 = createUser('Muhammad', 'Ubaid', 15);
const user2 = createUser('Anurag', 'Singh', 25);

// console.log(user1.getBirthYear());

const arr1 = [1, 2];
const arr2 = [3, 4];


