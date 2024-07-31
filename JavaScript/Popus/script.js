const button = document.querySelector('.openBtn')
const closeIcon = document.querySelector('.close-icon')
const popup = document.querySelector('.popup-container')
const news = document.querySelector('.newsletter');
const currNews  = document.querySelector('.Currentnews');



button.addEventListener('click', () => {
    popup.classList.add('popup-open');
    document.body.style.backgroundColor = 'rgb(122 117 100)'
   
    news.classList.remove('close');
})

closeIcon.addEventListener('click', () => {
    popup.classList.remove('popup-open');
    document.body.style.backgroundColor = '#DECDAC'

    currNews.classList.add('close');
    news.add
})


news.addEventListener('click',() => {
    currNews.classList.remove('close');
    news.classList.add('close')
})

