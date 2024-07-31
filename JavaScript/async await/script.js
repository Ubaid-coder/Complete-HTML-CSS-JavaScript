// const makeRequest = async () => {
//     return 'Hello World!';

// }


// const hi = ()=>{
//     console.log('Hello');
//     throw new Error('Error in program');

// }


const makeRequest = async () => {
    const url = '//dummyjson.com/test';
    const responsePromise =(await (await fetch(url)).json());
    // const data = await responsePromise.json();
    // responsePromise.then((res) => res.json())
    // responsePromise.then((data) => console.log(data))
    console.log(responsePromise)
}

makeRequest();


function addTwoNumbers() {
    return 2 + 2;
}