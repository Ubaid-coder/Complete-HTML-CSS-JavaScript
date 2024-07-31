const hamburgerIcon = document.querySelector('.hamburger-menu');
const anchors = document.querySelector('.anchors');
const closeIcon = document.querySelector('.close-icon');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const getFood = document.querySelector('.getFood');




hamburgerIcon.addEventListener('click', ()=>{
    anchors.classList.remove('links');
    hamburgerIcon.style.display = 'none';
    anchors.style.visibility = 'visible';
    
})

closeIcon.addEventListener('click', () => {
    anchors.classList.add('links');
    hamburgerIcon.style.display = 'block';
    
})

getFood.addEventListener('mouseover',() => {
    getFood.classList.add('orderFood');
    getFood.innerHTML = 'ORDER NOW';
})

getFood.addEventListener('mouseleave', () => {
    getFood.classList.remove('orderFood');
    getFood.innerHTML = 'GET FOOD'
})

anchors.addEventListener('click', () => {
    anchors.style.visibility = 'hidden';
    hamburgerIcon.style.display = 'block';
})
