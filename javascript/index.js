const button = document.querySelector('.navbar-toggler');
const topBar = document.querySelector('.top-bar')
const middleBar = document.querySelector('.middle-bar')
const bottomBar = document.querySelector('.bottom-bar')

button.addEventListener('click', () => {
    topBar.classList.toggle('active-toggle')
    middleBar.classList.toggle('active-toggle')
    bottomBar.classList.toggle('active-toggle')
})