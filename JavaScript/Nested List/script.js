const userName = 'Anurag';
const userAge = prompt('enter your age');

if (userAge > 0 && userAge < 5) {
    console.log('you are a kid');
} else if (userAge >= 5 && userAge <= 18) {
    console.log('you are a student');
} else if (userAge >= 18 && userAge <= 32) {
    console.log('you are a college student')

    if (userAge >= 25) {
        console.log('you are a senior student');
    }
    else if (userAge >= 18 && userAge <= 20) {
        console.log('you are newbie');
    }
}

