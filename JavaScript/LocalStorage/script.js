const nameElement = document.querySelector('.name-tag');
const nameInput = document.querySelector('.name');

const ageElement = document.querySelector('.age-tag');
const ageInput = document.querySelector('.age');

// nameElement.innerText = localStorage.name;
// nameElement.innerText = localStorage.getItem('name');

// nameInput.addEventListener('input', (e) => {
//     // localStorage.name = e.target.value;
//     localStorage.setItem('name',e.target.value);
//     nameElement.innerText = localStorage.name;
// })

// ageElement.innerText = localStorage.getItem('age');

// ageInput.addEventListener('input',(e)=>{
//     localStorage.setItem('age', e.target.value);
//     ageElement.innerText = localStorage.age;
// })

const myData = JSON.parse(localStorage.getItem('Data'))|| {} ;

nameInput.addEventListener('input',(e)=>{
    myData.name = e.target.value;

    localStorage.setItem('Data',JSON.stringify(myData))

    nameElement.innerText = e.target.value;
})

if(myData.name  && myData.age ){
    nameElement.innerText = myData.name;
    ageElement.innerText = myData.age;
}


ageInput.addEventListener('input',(e)=>{
    myData.age = e.target.value;
  
    localStorage.setItem('Data',JSON.stringify(myData));

    ageElement.innerText = e.target.value;


})
