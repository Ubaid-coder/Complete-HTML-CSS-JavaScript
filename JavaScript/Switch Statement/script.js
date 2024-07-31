let dayNumber = '5';

switch (dayNumber){
    case 0:
        console.log('It is Sunday');
        break;
    case 1:
        console.log('It is Monday');
        break;
    case 2:
        console.log('It is Tuesday');
        break;
    case 3:
        console.log('It is Wednesday');
        break;
    case 4:
        console.log('It is Thursday');
        break;
    case 5:
        console.log('It is Friday');
        break
    case 6:
        console.log('It is Saturday');
        break;
    default:
        console.log('Invalid day');
}

console.log('program ended')


const username = 'Anurag';
const userAge = 2;

switch (true){
    case (userAge > 0 && userAge <= 5):
        console.log('You are a little child ');
    break;

    case (userAge >=5 && userAge <= 18):
        console.log("You are a school children");
    break;

    case (userAge >= 18 && userAge <= 31):
        console.log('You are a college student');
    break;

    default:
        console.log('Invalid user age');

}

debugger;

const grade = 'F';

switch(grade){
    case 'A':
        console.log('90%');
    break

    case 'B':
        console.log('80%');
    break;

    case 'C':
        console.log('70%');
    break;

    case 'D':
        console.log('60%');
    break;

    case ('E'):
        console.log('50%');
    break;

    default:
        console.log('Failed');
}

console.log('Program ended');