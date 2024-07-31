// const img = document.querySelector('img');
// const btn = document.querySelector('button');

// btn.addEventListener('click', (e) => {

//     fetch(`https://dog.ceo/api/breeds/image/random`)
//         .then((res) => res.json())
//         .then((json) => {
//             img.src = json.message;
//             console.log('Got the data');
//         })
// })

    // fetch('https://dummyjson.com/products',{
    //     method: 'GET'
    // })
    // .then((res) => res.json())
    // .then((data) => console.log(data.products[0]))
    // .catch((err) => console.log(err)); 



fetch('https://dummyjson.com/todos/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    todo: 'Use DummyJSON in the project',
    completed: false,
    userId: 5,
  }) 
})
.then(res => res.json())
.then((console.log))
.catch((err) => console.log(err));


