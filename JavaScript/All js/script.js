let container = document.querySelector('.container')

// let card = document.querySelector('.card');

// for(let i = 2; i <= 100; i++){
//     let newCard = card.cloneNode();
//     newCard.innerText = i;
//     container.appendChild(newCard);
// }


// for(let i = 2; i <= 100; i++){
//     let newImg = document.createElement('img');
//     newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
//     container.appendChild(newImg);
// }
for(let i = 2; i<=100; i++){

let imagecontainer = document.createElement('div')

const HTML = `
    <div class='img${i}'>
    <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png'>
    <p>${i}</p>
    </div>
`


imagecontainer.innerHTML = HTML

// imagecontainer.classList.add('img-container');

// const myImg = document.createElement('img');

// myImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

// const par = document.createElement('p');
// par.innerText = `${i}`;

// imagecontainer.append(myImg)
// imagecontainer.append(par);

container.append(imagecontainer);
}

// let newele = document.createElement('h1');

// newele.innerText = 'Hello';

// newele.style.color = 'blue';

// newele.id = 'h1'

// container.append(newele);

                                                   
document.querySelector('.img6').remove() 


