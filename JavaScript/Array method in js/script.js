const evenNumbers = [0,2,4,6,8];
evenNumbers.reverse();
evenNumbers.push(23,563,45,32,32,54,52,543,5);
evenNumbers.reverse();
evenNumbers.sort();

evenNumbers.shift();
evenNumbers.unshift(0);


const animals = ['Dog', 'Cat', 'Rat'];
animals.push('Lion');
animals.reverse();

let addArray1 = evenNumbers.concat(animals); 
let addArray2 = animals.concat(evenNumbers); 

animals.indexOf('Cat');
animals.indexOf('Monkey');
animals.indexOf('Dog');
animals.includes('Dog');
animals.includes('Lion');


animals.slice(1,3);