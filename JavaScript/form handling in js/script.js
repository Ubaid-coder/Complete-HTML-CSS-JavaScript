const UserNameInput = document.querySelector('#username')
const para = document.querySelector('p');
const form = document.querySelector('form');


// UserNameInput.addEventListener('input',(e)=>{
//     console.log(e);
//     console.log(e.target.value)

//     para.innerText = e.target.value
    
// })


// UserNameInput.addEventListener('change',(e)=>{
//     console.log(e)
//     console.log(e.target.value)
    
//     para.innerText = e.target.value

//     e.preventDefault();
// })



// UserNameInput.addEventListener('focus',(e)=>{
//     console.log(e)
//     console.log(e.target.value);
// })


// UserNameInput.addEventListener('blur',(e)=>{
//     console.log('bluer')  
// })


form.addEventListener('click',(e)=>{

    e.preventDefault();
    
    console.log(e.target)
    console.log(e.currentTarget)

    console.log("form.click")
    
    // const myForm = new FormData(e.target);
    // console.log(myForm);

    

    // for(let p of myForm){
    //     console.log(p);
    // }
})