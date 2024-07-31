

const makeHTTPRequest = (method, url) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    const promise = new Promise((resolve, reject) => {
        xhr.addEventListener('load',() => {
            resolve(xhr.response);
        })
        xhr.addEventListener('error', () => {
            reject('Server Error!')
        })
    })

    xhr.open(method, url)
    

    xhr.send();

    return promise
}

makeHTTPRequest('GET','http://dummyjson.com/users')
.then((usersData) => makeHTTPRequest('GET',`http://dummyjson.com/posts/user/${usersData.users[0].id}`))
.then((Postdata) => makeHTTPRequest("GET",`http://dummyjson.com/comments/post/${Postdata.posts[0].id}`))
.then((commentsData) => makeHTTPRequest('GET',`http://dummyjson.com/users/${commentsData.comments[0].id}`))
.then((userData) => console.log(userData))
.catch((error) => console.log(error));

const btn = document.querySelector('.resolve');
const rejBtn = document.querySelector('.reject');


// const p = new Promise((resolve, reject) =>{
//     // reject('Failed to resolve promise')
//     setTimeout(() => {
//     resolve({name: 'ubaid'});
//     },5000)
// });

// console.log(p);


const p = new Promise((resolve, reject) => {
    btn.addEventListener('click', () => {
        resolve({name: "Ubaid", age: 12});
    })
    rejBtn.addEventListener('click', () => {
        reject('Failed to resolve promise') 
        
    })
})



p.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log('finally you applied')
})