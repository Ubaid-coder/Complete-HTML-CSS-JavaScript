const popup = document.querySelector('.popup');
const wifIcon = document.querySelector('img')
const popupTitle = document.querySelector('.title')
const popusDesc = document.querySelector('.desc')
const btn = document.querySelector('.reconnect');


let isOnline = true

const checkConnection = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");        
        isOnline = response.status >= 200 && response.status < 300;

    }catch(err){
        isOnline = false;
    }
    /* In handlepop() I am giving a callback
       status. Now I am calling this () when 
       isOnline = true. It will remove the show
       class else it will show. */
    handlepop(isOnline);
    

}

const handlepop = (status) => {
    if (status) {
        popupTitle.innerText = 'Restored Connection';
        popupTitle.style.color = 'green';
        popusDesc.innerHTML = 'Your device is now successfully connected to the internet.'
        popup.style.borderTop = '3px solid green'
        btn.style.backgroundColor = 'gray'

       return setTimeout(() => popup.classList.remove('show'),2000) 

    } 
    else {
        popupTitle.innerText = 'Lost Connection!';
        popupTitle.style.color = 'red';
        popusDesc.innerHTML = 'Server crashed! Failed to fetch data.'
        popup.classList.add('show');    
        popup.style.borderTop = '3px solid red'
        btn.style.backgroundColor = '#5372F0'
    }
}

setInterval(checkConnection, 3000);
btn.addEventListener('click',() => checkConnection);
