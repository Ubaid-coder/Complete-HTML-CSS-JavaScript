try {
    console.log(a);
} catch (err) {
    console.log('Aba sala "a" kon define kara  ga!');
}


const user = {
    name: 'John',
    age: 30,
    isAdmin: true,
}

try{
    
    console.log(user.address.city);
}catch(err){
    console.log(err);
}

const stds = {
    class1: 20,
    class2: 22,
    class3: 32,
    class4: 35,
    class5: 33,
    class6: 40,
    class7: {
        gender: 'Males:21,Females:25'
    }
}

console.log(stds.class7?.gender);
