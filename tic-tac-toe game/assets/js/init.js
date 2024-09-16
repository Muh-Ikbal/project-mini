const toInGame = document.querySelector('#toInGame')
const inGame = document.querySelector('.container')
const home = document.querySelector('.home')
toInGame.addEventListener('click',(e)=>{
    inGame.classList.add('display')
    e.target.style.display="none"
    home.style.height='max-content'
})