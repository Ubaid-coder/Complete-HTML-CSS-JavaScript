const num1 = [1, 2, 3, 4];

function add(...nums){
   return nums.reduce((acc, curr) =>  acc + curr)
}


const result = add(23,213,123,123,123,2)
