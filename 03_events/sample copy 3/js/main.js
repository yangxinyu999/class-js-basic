const btn = document.querySelector('#btn');
const windowWidth = document.getElementById('window-width');

const windowHeigh = document.querySelector('#window-heigh');

window.addEventListener('load', () => {
    windowHeigh.textContent = window.innerHeight;
    windowWidth.textContent = window.innerWidth;

})

window.addEventListener('scroll', () => {
    btn.style.transform = `rotate(${window.scrollY}deg)`;
    document.body.style.backgroundImage = `linear-gradient(${window.scrollX}deg,#ff9a9e, #fad0c4)`
})
