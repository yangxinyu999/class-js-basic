const btn = document.querySelector('#accordion-btn');
const content = document.querySelector('#accordion-content');

const icon = document.querySelector('.icon')
btn.addEventListener('click', () => {
    content.classList.toggle('is-open');
    icon.classList.toggle('is-open');

})
