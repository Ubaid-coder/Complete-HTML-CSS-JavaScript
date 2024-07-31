let container = document.querySelector('.container');
let card = document.querySelector('.card');
let input = document.querySelector('input');

let count = 1;


card.addEventListener('click', () => {
    let newCard = document.createElement('div');
    let ptag = document.createElement('p');


    ptag.innerText += count;
    count++;

    newCard.classList.add('card');
    newCard.appendChild(ptag);

    container.appendChild(newCard);

})





// const setId = setInterval(() => {
//     if(count > 100){
//         clearInterval(setId);
//     }
//     card.click();
// }, 100)3


input.focus();