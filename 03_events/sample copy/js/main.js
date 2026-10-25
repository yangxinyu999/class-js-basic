const menuBtn = document.querySelector('#menu-btn');
const navMenu = document.querySelector('#nav-menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('is-active');
    if (menuBtn.classList.contains('is-active')) {

        navMenu.style.right = '0px';
    } else {
        navMenu.style.right = '-250px';
    }

})
