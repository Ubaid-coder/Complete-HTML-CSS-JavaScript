// const h1 = document.querySelector('h1');
// const input = document.querySelector('input');

// window.addEventListener('keyup', (e) => {
//     console.log('Key code', e.code);
//     console.log('key value: ', e.key)


// })


const container = document.querySelector('.container');
const card = document.querySelector('.card');


let counter = 0;

// card.addEventListener('click',()=>{
//     let newCard = document.createElement('div');
//     let para = document.createElement('p');

//     para.innerText = counter;
//     counter++;

//     newCard.appendChild(para);

//     newCard.style.backgroundColor = 'pink'

//     newCard.classList.add('card');

//     container.appendChild(newCard);

// })

// card.addEventListener('mouseover',()=>{
//     let newCard = document.createElement('div');
//     let para = document.createElement('p');

//     para.innerText = counter;
//     counter++;

//     newCard.className = 'card';
//     newCard.style.backgroundColor = 'pink';
//     newCard.appendChild(para);
//     container.appendChild(newCard);
    
// })

// card.addEventListener('mouseup',()=>{
//     let newCard = document.createElement('div');
//     let para = document.createElement('p');

//     para.innerText = counter;
//     counter++;

//     newCard.className = 'card';
//     newCard.style.backgroundColor = 'pink';
//     newCard.appendChild(para);
//     container.appendChild(newCard);
    
// })

// card.addEventListener('mousemove',()=>{
//     let newCard = document.createElement('div');
//     let para = document.createElement('p');

//     para.innerText = counter;
//     counter++;

//     newCard.className = 'card';
//     newCard.style.backgroundColor = 'pink';
//     newCard.appendChild(para);
//     container.appendChild(newCard);
    
// })

// card.addEventListener('wheel',()=>{
//     let newCard = document.createElement('div');
//     let para = document.createElement('p');

//     para.innerText = counter;
//     counter++;

//     newCard.className = 'card';
//     newCard.style.backgroundColor = 'pink';
//     newCard.appendChild(para);
//     container.appendChild(newCard);
    
// })


card.addEventListener('touchstart',()=>{
    let newCard = document.createElement('div');
    let para = document.createElement('p');

    para.innerText = counter;
    counter++;

    newCard.className = 'card';
    newCard.style.backgroundColor = 'pink';
    newCard.appendChild(para);
    container.appendChild(newCard);
    
})