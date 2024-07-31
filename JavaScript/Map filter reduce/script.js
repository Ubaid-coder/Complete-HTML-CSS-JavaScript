const months = ['January', 'Ram', 'February', 'March', 'April', 'May'];

// months.forEach((month)=>{
//     console.log(month);
//     return month.toUpperCase(); // didn't return
// })


// const capitalMonths = months.map((month,index,array)=>{
//     console.log(index + 1, month);
//     // console.log(array);    
//     return  (month.toUpperCase());
// })


// const FilterMonths = months.filter((month, index, array)=>{
//     // console.log(index + 1, month);
//     // console.log(month.length <= 7);
//     console.log(month);
//     // return month.length >= 5;
//     return true;
// })

// console.log(FilterMonths);


// const notM = months.filter((month, index, array)=>{
//     console.log(month);
   
//     return month.toLowerCase().includes('m');
// })

// console.log(notM);


const students = [
    {
        name: 'Akash',
        age: 21
    },
    {
        name: 'Adarsh',
        age: 17
    },
    {
        name: 'Amir',
        age: 18
    },
    {
        name: 'Raman',
        age: 23
    },
    {
        name: 'Nidhi',
        age: 16
    }  
]

// const Adultstd = students.filter((student)=>{

//     return student.age >= 18;
// })

// const adultstdnames = Adultstd.map((student)=>{
//     return student.name
// })

// console.log(adultstdnames);


// const Adultstd = students.filter((student)=>{

//     return student.age >= 18;
// }).map((student)=>{
//     return student.name;
// }).filter((student)=>{
//     return student.includes('A')
// })

// console.log(Adultstd);



const nums = [1, 2, 3, 4, 5];

const sum = nums.reduce((accumulator, current, index, array)=>{
    // console.log(index, current);
    // console.log(accumulator,current);

    return accumulator + current;
},0)

