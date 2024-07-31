console.log('Program started');

// let i = 1;

// while(i <= 100){
//     console.log(i);
    // i = i + 1;
//     i++;
// }

let friends = ['Ali','Rohan','Ubaid','Kashan','Zarbab'];

let i = 0;

while(i < friends.length){
    console.log(`${i+1}: ${friends[i]}`);

    friends[i] = friends[i] + 'Procodrr'

    i++;
}

console.log('Program finished');