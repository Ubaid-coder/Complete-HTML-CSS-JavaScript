
const green = document.querySelector('.green');
const pink = document.querySelector('.pink');
const blue = document.querySelector('.blue');



green.addEventListener('click', (e) => {
    console.log('green clicked');
});

pink.addEventListener('click', (e) => {
    console.log('pink clicked');
});

blue.addEventListener('click',(e)=>{
    e.stopPropagation(); 
    console.log('blue clicked');
})