const evenNumbers = [0, 2, 4, 6, 8];

// const result = evenNumbers.some((num, i,arr)=>{
//     // console.log(i+1, num, arr);
//     // console.log(num);

//     if(num % 2 === 1){
//       console.log(`Index ${i}`);
//     }

//     return num % 2 === 1;
// })

// console.log(result)

const result = evenNumbers.every((num, i,arr)=>{
    // console.log(i+1, num, arr);
    // console.log(num);

    if(num % 2 === 1){
      console.log(`Index ${i}`);
    }

    return num % 2 === 0;
})