const container = document.querySelector('.container');
const add = document.querySelector('.add');
const remove = document.querySelector('.delete');

let counter = 0;

add.addEventListener('click', () => {
    const newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.innerText = counter;
    counter++;

    container.appendChild(newCard);
})

container.addEventListener('click', (e) => {
    if (e.target !== container) {
        e.target.remove();
    }
})