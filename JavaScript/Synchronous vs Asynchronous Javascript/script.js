const img = document.querySelector('img');
const btn = document.querySelector('.image');

btn.addEventListener('click', (e) => {
    fetch(`https://dog.ceo/api/breeds/image/random`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.message)
            img.src = data.message;
        })
})

// setTimeout(()=>{
//     console.log(`Hii`)
// },4000)

const blockbtn = document.querySelector('.block');

blockbtn.addEventListener('click', function () {
    const startTime = Date.now();
    let currentTime = startTime;
   

    while (startTime + 3000 > currentTime) {
        currentTime = Date.now();
    }

})

// for(let i = 0; i< 100000; i++){
//     console.log(i);
// }


// console.log('end')

// setTimeout(()=>{
//     console.log('setTimeout')
// },5000)

// console.log('end')