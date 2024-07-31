let user = {
    'firstName':'Adarsh',
    'lastName': 'Singh',
    'pata': {
        'city': 'Bangalore',
        'pincode': 560001,
        'country': 'India',
        'moreDetails':{
            'population': 9824398290,
            'area': '657 sq km'
        }
    },
    'age': 35,
    'isGraduated': false
}


user.pata.moreDetails.seaside = true;

delete user.isGraduated;

// Object.seal(user);

Object.freeze(user); // 

console.log('lastName' in user)

let username = 'Anurag';




username = 'Ubaid';
// console.log(username);

