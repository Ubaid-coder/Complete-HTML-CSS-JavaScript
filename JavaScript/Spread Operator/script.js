const num1 = [1,2,3,4];
const num2 = [5,6,7,8,9];

const myName = 'Anurag'

const joinedarray = [...num1, ...num2];


// const user = {
//     name: 'Anurag',
//     age: 25,

// }

// const updatedUser = {...user, city: 'Karachi'}



function add(){
    console.log(arguments);

    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }

    return sum;
}